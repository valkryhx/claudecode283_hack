// rename.mjs — scope-aware deminify: apply rename-map.json to raw/ -> renamed/
// Usage: node rename.mjs   (run after extract.mjs)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";

const traverse = _traverse.default ?? _traverse;
const generate = _generate.default ?? _generate;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const MAP = JSON.parse(fs.readFileSync(path.join(__dirname, "rename-map.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"));

const rawDir = path.join(ROOT, "raw");
const outDir = path.join(ROOT, "renamed");
fs.mkdirSync(outDir, { recursive: true });

const PARSE_OPTS = {
  sourceType: "module",
  allowAwaitOutsideFunction: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  errorRecovery: false,
  plugins: [],
};

function classify(body) {
  if (/^\s*(async\s+)?function\b/.test(body) || /^\s*class\b/.test(body)) return "decl";
  if (/^\s*(async\s+)?(get\s+|set\s+)?[A-Za-z_$][\w$]*\s*\(/.test(body)) return "method";
  return "stmt";
}

function renameBinding(path, oldName, newName) {
  let s = path.scope;
  while (s) {
    if (s.hasOwnBinding(oldName)) { s.rename(oldName, newName); return true; }
    s = s.parent;
  }
  return false;
}

const SKIP_PROP_PARENTS = new Set([
  "ObjectProperty", "ObjectMethod", "ClassMethod", "ClassProperty",
  "ClassPrivateMethod", "ClassPrivateProperty",
]);

function renameFree(ast, map) {
  traverse(ast, {
    Identifier(p) {
      const name = p.node.name;
      if (!(name in map)) return;
      if (p.scope.hasBinding(name)) return;              // 是绑定名 → 归 locals 管
      const par = p.parentPath;
      if (!par) return;
      if ((par.isMemberExpression() || par.isOptionalMemberExpression()) &&
          par.node.property === p.node && !par.node.computed) return;
      if (SKIP_PROP_PARENTS.has(par.node.type) && par.node.key === p.node && !par.node.computed) return;
      if (par.isLabeledStatement() || par.isBreakStatement() || par.isContinueStatement()) return;
      p.node.name = map[name];
    },
  });
}

const report = [];

for (const m of manifest) {
  const body = fs.readFileSync(path.join(rawDir, m.base), "utf8").replace(/\n$/, "");
  const rule = MAP[m.tag] || {};
  const kind = classify(body);
  const wrapped = kind === "method" ? `({${body}})` : body;

  let ast;
  try { ast = parse(wrapped, PARSE_OPTS); }
  catch (e) { report.push({ tag: m.tag, ok: false, why: "parse: " + e.message }); continue; }

  // locate target node + function scope path
  let targetPath = null, fnPath = null;
  traverse(ast, {
    enter(p) {
      if (targetPath) return;
      if (p.isFunctionDeclaration()) { targetPath = p; fnPath = p; }
      else if (p.isClassDeclaration()) {
        targetPath = p;
        p.traverse({ ClassMethod(c) { if (!fnPath && c.node.kind === "constructor") fnPath = c; } });
      } else if (p.isObjectMethod()) { targetPath = p; fnPath = p; }
      else if (p.isVariableDeclaration()) { targetPath = p; }
      else if (p.isAssignmentExpression()) {
        targetPath = p;
        p.traverse({ "Function|ArrowFunctionExpression"(f) { if (!fnPath) { fnPath = f; f.stop(); } } });
      }
    },
  });

  if (!targetPath) { report.push({ tag: m.tag, ok: false, why: "no target node" }); continue; }

  const applied = { name: null, locals: [], free: [] };

  // 1) function-level name
  if (rule.name && rule.name !== m.name) {
    if (kind === "decl") {
      if (renameBinding(targetPath, m.name, rule.name)) applied.name = rule.name;
    } else if (kind === "stmt" && targetPath.node.left && targetPath.node.left.type === "Identifier"
               && targetPath.node.left.name === m.name) {
      targetPath.node.left.name = rule.name; applied.name = rule.name;
    }
    // method: name 是属性键(真实方法名), 不改
  }

  // 2) locals (scope-safe)
  for (const [oldN, newN] of Object.entries(rule.locals || {})) {
    if (fnPath && renameBinding(fnPath, oldN, newN)) applied.locals.push(`${oldN}->${newN}`);
  }

  // 3) free identifiers (guarded)
  if (rule.free) renameFree(ast, rule.free);
  applied.free = Object.entries(rule.free || {}).map(([a, b]) => `${a}->${b}`);

  let out;
  try { out = generate(targetPath.node, { comments: true, compact: false, concise: false, jsescOption: { minimal: true } }, wrapped).code; }
  catch (e) { report.push({ tag: m.tag, ok: false, why: "generate: " + e.message }); continue; }

  const head = [
    `/* ${"=".repeat(74)}`,
    ` * ${m.tag}${rule.name ? "  ->  " + rule.name : ""}   [${m.file} @ ${m.offset}]`,
    ` * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。`,
    ` * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。`,
    ` * 名字证据等级见 naming-map.json / NAMING-METHOD.md。`,
    ` * ${"=".repeat(74)} */`,
  ].join("\n");

  fs.writeFileSync(path.join(outDir, m.base), head + "\n" + out + "\n");
  report.push({ tag: m.tag, ok: true, kind, name: applied.name, nLocals: applied.locals.length, nFree: applied.free.length });
}

fs.writeFileSync(path.join(ROOT, "renamed-report.json"), JSON.stringify(report, null, 2));
const ok = report.filter((r) => r.ok).length;
console.log(`renamed ${ok}/${report.length}`);
for (const r of report) if (!r.ok) console.log("  FAIL", r.tag, r.why);
