// 度量：属性名的"区分度" —— 有多少个不同的对象字面量形状包含它
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, "..", "deminified");
const PO = { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, allowImportExportEverywhere: true, plugins: [] };

const files = fs.readdirSync(DIR).filter(f => f.endsWith(".js")).sort();
const propInObjs = new Map();   // prop -> 包含它的对象字面量个数
const memberUse = new Map();    // prop -> 被 .prop 访问的次数
for (const f of files) {
  let ast; try { ast = parse(fs.readFileSync(path.join(DIR,f),"utf8"), PO); } catch { continue; }
  traverse(ast, {
    ObjectExpression(p) {
      const keys = new Set();
      for (const pr of p.node.properties) if (pr.type === "ObjectProperty" && !pr.computed && pr.key && pr.key.type === "Identifier") keys.add(pr.key.name);
      for (const k of keys) propInObjs.set(k, (propInObjs.get(k)||0)+1);
    },
    MemberExpression(p) {
      if (!p.node.computed && p.node.property && p.node.property.type === "Identifier") memberUse.set(p.node.property.name, (memberUse.get(p.node.property.name)||0)+1);
    },
  });
}
const probes = ["getTurnSpent","reservePhase","resolvePhase","recordFailure","getAgentCount","getFailures","toolUseContext","canUseTool","total","value","name","type","length","signal","data","error","code","message"];
console.log("属性名".padEnd(18) + "出现在多少个对象字面量里".padEnd(14) + " 被 .prop 访问次数");
for (const k of probes) console.log("  " + k.padEnd(18) + String(propInObjs.get(k)||0).padEnd(16) + String(memberUse.get(k)||0));