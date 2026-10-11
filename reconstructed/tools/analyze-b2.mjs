// analyze-b2.mjs — 细化度量：B2(成员初始化，剔除内置名) / B3(被调函数名推变量名)
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

const GENERIC = new Set(["prototype","constructor","length","name","value","values","call","apply","bind","toString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","indexOf","lastIndexOf","slice","substring","substr","trim","includes","startsWith","endsWith","create","require","resolve","Symbol","then","catch","map","filter","forEach","reduce","push","pop","shift","unshift","splice","concat","join","split","replace","replaceAll","match","matchAll","test","exec","toLowerCase","toUpperCase","charAt","charCodeAt","codePointAt","padStart","padEnd","repeat","assign","keys","entries","freeze","defineProperty","getPrototypeOf","setPrototypeOf","getOwnPropertyNames","isArray","from","of","all","race","allSettled","any","parse","stringify","now","floor","ceil","round","min","max","abs","random","isInteger","isFinite","NaN","signal","aborted","addEventListener","removeEventListener","dispatchEvent","write","read","close","end","on","once","emit","next","done","error","message","stack","code","type","id","key","path","url","data","body","text","status","headers","method","host","port","query","hash","href","origin"]);
const VERB = /^(get|set|make|create|build|load|read|fetch|parse|compute|calculate|calc|find|resolve|derive|collect|generate|gen|ensure|run|start|init|initialize|open|write|save|store|update|apply|convert|transform|format|normalize|validate|check|is|has|should|can|to|as)([A-Z_].*)$/;

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".js")).sort();
const cnt = { B2domain: 0, B3noun: 0 };
const s2 = [], s3 = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(DIR, f), "utf8");
  let ast; try { ast = parse(src, PO); } catch { continue; }
  traverse(ast, {
    VariableDeclarator(p) {
      const id = p.node.id, init = p.node.init;
      if (!id || id.type !== "Identifier" || !mangled(id.name) || !init) return;
      if (init.type === "MemberExpression" && !init.computed && init.property.type === "Identifier" && readable(init.property.name) && !GENERIC.has(init.property.name)) {
        cnt.B2domain++; if (s2.length < 25) s2.push(f + ": " + id.name + " = ?." + init.property.name);
      }
      let callee = null;
      if (init.type === "CallExpression") callee = init.callee.type === "Identifier" ? init.callee.name : (init.callee.type === "MemberExpression" && !init.callee.computed && init.callee.property.type === "Identifier" ? init.callee.property.name : null);
      if (callee && readable(callee)) {
        const m = VERB.exec(callee);
        const noun = m ? m[2] : null;
        if (noun && noun.length >= 4) { cnt.B3noun++; if (s3.length < 25) s3.push(f + ": " + id.name + " = " + callee + "() -> " + noun); }
      }
    },
  });
}
console.log("B2domain (const x = o.PROP, 非内置):", cnt.B2domain);
for (const s of s2) console.log("   " + s);
console.log("B3noun (const x = verbNoun() -> noun):", cnt.B3noun);
for (const s of s3) console.log("   " + s);