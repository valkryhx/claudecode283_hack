// 度量：只保留"唯一指纹"属性，看能覆盖多少变量（两遍扫描，避免 OOM）
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default ?? _traverse;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, "..", "deminified");
const PO = { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, allowImportExportEverywhere: true, plugins: [] };
const mangled = (n) => /^[A-Za-z_$][A-Za-z0-9_$]{0,2}$/.test(n) || n.includes("$") || (/[0-9]/.test(n) && n.length <= 5);
const files = fs.readdirSync(DIR).filter(f => f.endsWith(".js")).sort();

const propCount = new Map();
for (const f of files) {
  let ast; try { ast = parse(fs.readFileSync(path.join(DIR,f),"utf8"), PO); } catch { continue; }
  const props = new Set();
  traverse(ast, { ObjectExpression(p){ for (const pr of p.node.properties) if (pr.type==="ObjectProperty" && !pr.computed && pr.key && pr.key.type==="Identifier") props.add(pr.key.name); } });
  for (const k of props) propCount.set(k, (propCount.get(k)||0)+1);
}
const unique = new Set([...propCount].filter(([k,v]) => v === 1 && k.length >= 6 && /[A-Z]/.test(k)).map(([k]) => k));
console.log("唯一指纹属性（只在 1 个对象形状里、长度>=6、含大写）:", unique.size);

let candVars = 0, candFiles = 0; const samples = [];
for (const f of files) {
  let ast; try { ast = parse(fs.readFileSync(path.join(DIR,f),"utf8"), PO); } catch { continue; }
  const vars = new Map();
  traverse(ast, {
    MemberExpression(p) {
      const o = p.node.object;
      if (o && o.type === "Identifier" && !p.node.computed && p.node.property && p.node.property.type === "Identifier") {
        if (!vars.has(o.name)) vars.set(o.name, new Set());
        vars.get(o.name).add(p.node.property.name);
      }
    },
  });
  let hit = 0;
  for (const [name, ps] of vars) {
    if (!mangled(name)) continue;
    const fp = [...ps].filter(x => unique.has(x));
    if (fp.length) { hit++; if (samples.length < 18) samples.push(f + ": " + name + " 访问 {" + fp.slice(0,3).join(",") + "}"); }
  }
  if (hit) { candVars += hit; candFiles++; }
}
console.log("可用唯一指纹命名的压缩变量:", candVars, " 分布在", candFiles, "个模块");
for (const s of samples) console.log("   " + s);