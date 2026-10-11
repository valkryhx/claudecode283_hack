// analyze-naming.mjs — measure how many binding names have source evidence across ALL modules
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MODDIR = path.resolve(ROOT, "..", "claudecode283", "modules");

const PARSE = { ecmaVersion: "latest", sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, ranges: true };

function walk(node, parent, cb) {
  if (!node || typeof node.type !== "string") return;
  cb(node, parent);
  for (const k of Object.keys(node)) {
    if (k === "start" || k === "end" || k === "range" || k === "loc") continue;
    const v = node[k];
    if (Array.isArray(v)) for (const c of v) walk(c, node, cb);
    else if (v && typeof v.type === "string") walk(v, node, cb);
  }
}

const isIdent = (n) => n && n.type === "Identifier";
const keyName = (n) => {
  if (!n) return null;
  if (n.type === "Identifier") return n.name;
  if (n.type === "Literal" && typeof n.value === "string") return n.value;
  return null;
};

function pat(node, cb) {
  if (!node) return;
  if (node.type === "ObjectPattern") {
    for (const p of node.properties) {
      if (p.type === "Property") {
        const k = keyName(p.key);
        if (isIdent(p.value)) cb(p.value.name, k);
        else if (p.value.type === "AssignmentPattern" && isIdent(p.value.left)) cb(p.value.left.name, k);
        else if (p.value.type === "ObjectPattern" || p.value.type === "ArrayPattern") pat(p.value, cb);
      }
    }
  } else if (node.type === "ArrayPattern") {
    for (const el of node.elements) if (el) pat(el, cb);
  } else if (node.type === "AssignmentPattern") {
    pat(node.left, cb);
  }
}

const files = fs.readdirSync(MODDIR).filter((f) => f.endsWith(".js")).sort();
let totalBind = 0, parseFail = 0;
const evidence = new Map();
function note(name, kind, sample) {
  if (!name) return;
  let e = evidence.get(name);
  if (!e) { e = { count: 0, kinds: new Set(), samples: [] }; evidence.set(name, e); }
  e.count++; e.kinds.add(kind);
  if (e.samples.length < 3) e.samples.push(sample);
}

for (const f of files) {
  const src = fs.readFileSync(path.join(MODDIR, f), "utf8").replace(/\u0000/g, " ");
  let ast;
  try { ast = acorn.parse(src, PARSE); } catch { parseFail++; continue; }

  walk(ast, null, (node, parent) => {
    if (node.type === "VariableDeclarator") { if (isIdent(node.id)) totalBind++; pat(node.id, (local, k) => note(local, "destructure", f + ": " + k + " -> " + local)); }
    if ((node.type === "FunctionDeclaration" || node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression") && node.params) {
      for (const p of node.params) {
        if (isIdent(p)) totalBind++;
        pat(p, (local, k) => note(local, "param-destructure", f + ": " + k + " -> " + local));
      }
    }
    if (node.type === "Property" && !node.computed && node.value && isIdent(node.value)) {
      const k = keyName(node.key);
      if (k && k !== node.value.name && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k)) note(node.value.name, "obj-key", f + ": " + k + ": " + node.value.name);
    }
  });
}

console.log("modules: " + files.length + "  parseFail: " + parseFail + "  bindings(approx): " + totalBind);
console.log("distinct names with evidence: " + evidence.size);
const byKind = {};
for (const [, e] of evidence) for (const k of e.kinds) byKind[k] = (byKind[k] || 0) + 1;
console.log("by kind:", byKind);
const sorted = [...evidence.entries()].sort((a, b) => b[1].count - a[1].count);
console.log("--- top 40 ---");
for (const [n, e] of sorted.slice(0, 40)) console.log("  " + n.padEnd(6) + " x" + String(e.count).padEnd(6) + " " + [...e.kinds].join(",") + "  e.g. " + e.samples[0]);