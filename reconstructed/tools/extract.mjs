// extract.mjs — pull exact function bodies out of the minified Bun modules.
//   1) curated TARGETS (with offset hints for disambiguation)
//   2) ALL top-level declarations of the workflow module set  ← 全量保留
// Usage: node extract.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";
import beautify from "js-beautify";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MODDIR = path.resolve(ROOT, "..", "claudecode283", "modules");

// curated: [file, name, hintOffset]
const TARGETS = [
  ["m0862_0xd11f1fb.js", "Fy", 3670], ["m0862_0xd11f1fb.js", "O", 5927],
  ["m0869_0xd12567a.js", "t7", 16319], ["m0869_0xd12567a.js", "Io", 78839],
  ["m0869_0xd12567a.js", "kSt", 81169], ["m0869_0xd12567a.js", "jo", 43713],
  ["m0869_0xd12567a.js", "Ko", 74542], ["m0869_0xd12567a.js", "zo", 75362],
  ["m0869_0xd12567a.js", "wTn", 76987], ["m0869_0xd12567a.js", "Oo", 39021],
  ["m0869_0xd12567a.js", "Lr", 36012], ["m0869_0xd12567a.js", "et", 40182],
  ["m0869_0xd12567a.js", "ct", 40291], ["m0869_0xd12567a.js", "Mo", 36372],
  ["m0869_0xd12567a.js", "Wo", 36454], ["m0869_0xd12567a.js", "lo", 20900],
  ["m0869_0xd12567a.js", "mr", 20384], ["m0869_0xd12567a.js", "ao", 20124],
  ["m0869_0xd12567a.js", "Gt", 21165], ["m0869_0xd12567a.js", "Bo", 48492],
  ["m0869_0xd12567a.js", "Zr", 80409], ["m0869_0xd12567a.js", "tsr", 29905],
  ["m0869_0xd12567a.js", "yo", 30215], ["m0869_0xd12567a.js", "nsr", null],
  ["m0869_0xd12567a.js", "F7r", 88038], ["m0869_0xd12567a.js", "No", 41432],
  ["m0242_0xc49e8d9.js", "Ms", 0],
  ["m1569_0xdceb889.js", "inputSchema", 61628], ["m1569_0xdceb889.js", "validateInput", 62439],
  ["m1569_0xdceb889.js", "checkPermissions", 64578], ["m1569_0xdceb889.js", "call", 65948],
];

// 全量：workflow 子系统相关模块，抽其全部顶层声明
const MODULES_ALL = [
  "m0869_0xd12567a.js", "m0862_0xd11f1fb.js", "m1569_0xdceb889.js", "m1502_0xdb4a986.js",
  "m0242_0xc49e8d9.js", "m0567_0xcdd6311.js", "m0352_0xc63a7b9.js", "m0025_0xbf5baa8.js",
  "m0571_0xcddb07e.js", "m0227_0xc482590.js", "m0153_0xc2a414f.js", "m0855_0xd10e439.js",
  "m1996_0xe38e78b.js", "m0868_0xd1234ad.js", "m1460_0xd973957.js", "m0573_0xcde50bc.js",
  "m0132_0xc24a4bb.js",
];

function parse(src) {
  return acorn.parse(src, {
    ecmaVersion: "latest", sourceType: "module",
    allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, ranges: true,
  });
}

function definesName(node, name) {
  switch (node.type) {
    case "FunctionDeclaration": case "ClassDeclaration": return node.id && node.id.name === name;
    case "VariableDeclarator": return node.id && node.id.name === name;
    case "MethodDefinition": return node.key && (node.key.name === name || node.key.value === name);
    case "Property": return node.key && (node.key.name === name || node.key.value === name);
    default: return false;
  }
}

function findAll(ast, name) {
  const hits = [];
  (function walk(node, parent) {
    if (!node || typeof node.type !== "string") return;
    if (definesName(node, name)) hits.push({ node, parent });
    for (const k of Object.keys(node)) {
      if (k === "start" || k === "end" || k === "range") continue;
      const v = node[k];
      if (Array.isArray(v)) v.forEach((c) => walk(c, node));
      else if (v && typeof v.type === "string") walk(v, node);
    }
  })(ast, null);
  return hits;
}

function topLevelNames(ast) {
  const out = [];
  for (const node of ast.body) {
    let decl = node;
    if (node.type === "ExportNamedDeclaration") decl = node.declaration;
    if (!decl) continue;
    if (decl.type === "FunctionDeclaration" || decl.type === "ClassDeclaration") {
      if (decl.id) out.push([decl.id.name, decl.start]);
    } else if (decl.type === "VariableDeclaration") {
      for (const d of decl.declarations) if (d.id && d.id.type === "Identifier") out.push([d.id.name, d.start]);
    }
  }
  return out;
}

function sliceOf({ node, parent }, src) {
  if (node.type === "VariableDeclarator" && parent && parent.type === "VariableDeclaration" && parent.declarations.length === 1)
    return { text: src.slice(parent.start, parent.end), start: parent.start };
  return { text: src.slice(node.start, node.end), start: node.start };
}

const rawDir = path.join(ROOT, "raw"), rdDir = path.join(ROOT, "readable");
fs.mkdirSync(rawDir, { recursive: true }); fs.mkdirSync(rdDir, { recursive: true });
const bopts = { indent_size: 2, max_preserve_newlines: 1, brace_style: "collapse", end_with_newline: true };

const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const full = path.join(MODDIR, file);
  if (!fs.existsSync(full)) { cache.set(file, { err: "module missing" }); return cache.get(file); }
  const src = fs.readFileSync(full, "utf8").replace(/\u0000/g, " ");
  let ast = null, err = null;
  try { ast = parse(src); } catch (e) { err = e.message; }
  const rec = { src, ast, err };
  cache.set(file, rec); return rec;
}

const seen = new Set();
const manifest = [];

function emit(file, name, hint) {
  const tag = `${file.replace(/_.*$/, "")}.${name}`;
  if (seen.has(tag)) return;
  const { src, ast, err } = load(file);
  if (err || !ast) return;
  const hits = findAll(ast, name);
  if (!hits.length) return;
  let pick = hits[0];
  if (hint != null) pick = hits.reduce((a, b) => Math.abs(b.node.start - hint) < Math.abs(a.node.start - hint) ? b : a);
  const { text: body, start } = sliceOf(pick, src);
  const base = `${file.replace(/_.*$/, "")}.${name}.${start}.js`;
  fs.writeFileSync(path.join(rawDir, base), body + "\n");
  let pretty;
  try { pretty = beautify.js(body, bopts); } catch { pretty = body + "\n"; }
  fs.writeFileSync(path.join(rdDir, base), pretty);
  manifest.push({ tag, base, file, name, offset: start, kind: pick.node.type, bytes: body.length });
  seen.add(tag);
}

for (const [file, name, hint] of TARGETS) emit(file, name, hint);
for (const file of MODULES_ALL) {
  const { ast, err } = load(file);
  if (err || !ast) { if (err) console.error(`  skip ${file}: ${err}`); continue; }
  for (const [name, hint] of topLevelNames(ast)) emit(file, name, hint);
}

manifest.sort((a, b) => a.file.localeCompare(b.file) || a.offset - b.offset);
fs.writeFileSync(path.join(ROOT, "manifest.json"), JSON.stringify(manifest, null, 2));
const byMod = {};
for (const m of manifest) { const k = m.file.replace(/_.*$/, ""); byMod[k] = (byMod[k] || 0) + 1; }
console.log(`total ${manifest.length} declarations`);
for (const [k, v] of Object.entries(byMod).sort()) console.log(`  ${k.padEnd(8)} ${v}`);
