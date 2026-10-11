// analyze-b.mjs — 在 deminified/ 之上度量：还有哪些"压缩名绑定"能靠 B/C 级证据改名
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "deminified");
const PO = { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, allowImportExportEverywhere: true, plugins: [] };

const mangled = (n) => /^[A-Za-z_$][A-Za-z0-9_$]{0,2}$/.test(n) || n.includes("$") || (/[0-9]/.test(n) && n.length <= 5);
const readable = (n) => typeof n === "string" && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(n) && !mangled(n);

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".js")).sort();
const cnt = { B2_memberInit: 0, B2c_callMemberInit: 0, B1_fnToProp: 0, C1_catchParam: 0, C2_arrowCbParam: 0, mangledTotal: 0, readableTotal: 0 };
const samples = { B2_memberInit: [], B2c_callMemberInit: [], B1_fnToProp: [] };

for (const f of files) {
  const src = fs.readFileSync(path.join(DIR, f), "utf8");
  let ast; try { ast = parse(src, PO); } catch { continue; }
  traverse(ast, {
    Identifier(p) { if (p.isBindingIdentifier()) { const n = p.node.name; if (mangled(n)) cnt.mangledTotal++; else cnt.readableTotal++; } },
    VariableDeclarator(p) {
      const id = p.node.id, init = p.node.init;
      if (!id || id.type !== "Identifier" || !mangled(id.name) || !init) return;
      if (init.type === "MemberExpression" && !init.computed && init.property.type === "Identifier" && readable(init.property.name)) {
        cnt.B2_memberInit++; if (samples.B2_memberInit.length < 8) samples.B2_memberInit.push(f + ": " + id.name + " = ?." + init.property.name);
      } else if (init.type === "CallExpression" && init.callee.type === "MemberExpression" && !init.callee.computed && init.callee.property.type === "Identifier" && readable(init.callee.property.name)) {
        cnt.B2c_callMemberInit++; if (samples.B2c_callMemberInit.length < 8) samples.B2c_callMemberInit.push(f + ": " + id.name + " = ?." + init.callee.property.name + "()");
      }
    },
    ObjectProperty(p) {
      const k = p.node.key, v = p.node.value;
      if (p.node.computed || !k || k.type !== "Identifier" || !readable(k.name)) return;
      if (v.type === "FunctionExpression") { cnt.B1_fnToProp++; if (samples.B1_fnToProp.length < 8) samples.B1_fnToProp.push(f + ": {" + k.name + ": function " + (v.id ? v.id.name : "(anon)") + "}"); }
    },
    CatchClause(p) { if (p.node.param && p.node.param.type === "Identifier" && mangled(p.node.param.name)) cnt.C1_catchParam++; },
  });
}
console.log("modules:", files.length);
console.log("bindings: mangled=" + cnt.mangledTotal + "  readable=" + cnt.readableTotal);
console.log("B2  member-init   (const x = o.PROP)      :", cnt.B2_memberInit);
console.log("B2c call-member-init (const x = o.PROP())  :", cnt.B2c_callMemberInit);
console.log("B1  fn->property  ({PROP: function(){}})   :", cnt.B1_fnToProp);
console.log("C1  catch param   (catch(e))              :", cnt.C1_catchParam);
for (const k of ["B2_memberInit", "B2c_callMemberInit", "B1_fnToProp"]) { console.log("--- " + k + " ---"); for (const s of samples[k]) console.log("   " + s); }