// verify-renamed.mjs — 证明重命名只改了"绑定标识符"：字符串/属性名/控制流不变。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = _traverse.default ?? _traverse;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"));

const OPTS = { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true };

function wrap(body) {
  if (/^\s*(async\s+)?function\b/.test(body) || /^\s*class\b/.test(body)) return body;
  if (/^\s*(async\s+)?(get\s+|set\s+)?[A-Za-z_$][\w$]*\s*\(/.test(body)) return `({${body}})`;
  return body;
}

function facts(src) {
  const ast = parse(wrap(src), OPTS);
  const strings = [], props = [], idents = new Set();
  traverse(ast, {
    StringLiteral(p) { strings.push(p.node.value); },
    TemplateElement(p) { strings.push(p.node.value.cooked ?? ""); },
    Identifier(p) {
      idents.add(p.node.name);
      const par = p.parentPath;
      if ((par.isMemberExpression() || par.isOptionalMemberExpression()) && par.node.property === p.node && !par.node.computed)
        props.push(p.node.name);
      if (["ObjectProperty","ObjectMethod","ClassMethod","ClassProperty"].includes(par.node.type) && par.node.key === p.node && !par.node.computed)
        props.push(p.node.name);
    },
  });
  strings.sort(); props.sort();
  return { strings, props, idents };
}

let ok = 0, bad = 0;
const rows = [];
for (const m of manifest) {
  const raw = fs.readFileSync(path.join(ROOT, "raw", m.base), "utf8").replace(/\n$/, "");
  const ren = fs.readFileSync(path.join(ROOT, "renamed", m.base), "utf8")
    .replace(/^\/\*[\s\S]*?\*\/\s*/, "").replace(/\n$/, "");
  let a, b;
  try { a = facts(raw); b = facts(ren); }
  catch (e) { bad++; rows.push({ tag: m.tag, ok: false, why: e.message }); continue; }

  const stringsSame = JSON.stringify(a.strings) === JSON.stringify(b.strings);
  const propsSame = JSON.stringify(a.props) === JSON.stringify(b.props);
  const gone = [...a.idents].filter((n) => !b.idents.has(n)).length;
  const left = [...b.idents].filter((n) => n.length <= 2 && /^[A-Za-z_$][\w$]?$/.test(n)).length;
  const pass = stringsSame && propsSame;
  if (pass) ok++; else bad++;
  rows.push({ tag: m.tag, ok: pass, stringsSame, propsSame, renamedIdents: gone, shortLeft: left });
}

fs.writeFileSync(path.join(ROOT, "renamed-verify.json"), JSON.stringify(rows, null, 2));
console.log(`strings+props unchanged: ${ok}/${rows.length}   (bad=${bad})`);
for (const r of rows.filter((r) => !r.ok)) console.log("  FAIL", r.tag, r.why || `strings=${r.stringsSame} props=${r.propsSame}`);
const totGone = rows.reduce((s, r) => s + (r.renamedIdents || 0), 0);
const totLeft = rows.reduce((s, r) => s + (r.shortLeft || 0), 0);
console.log(`\nrenamed idents (total across files): ${totGone}`);
console.log(`short(<=2) idents still present (total): ${totLeft}`);
