// 度量 deminified/ 的"可读率"：标识符出现次数里，压缩名 vs 可读名 各占多少
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

let occM = 0, occR = 0;          // 所有标识符出现次数
let occPropM = 0, occPropR = 0;  // 属性名出现次数（属性名未压缩，是"可读锚点"）
let modsAllReadable = 0, modsMixed = 0, modsMostlyMangled = 0;
for (const f of files) {
  let ast; try { ast = parse(fs.readFileSync(path.join(DIR,f),"utf8"), PO); } catch { continue; }
  let m = 0, r = 0;
  traverse(ast, {
    Identifier(p) {
      const isProp = p.parentPath && (p.parentPath.isMemberExpression() || p.parentPath.isObjectProperty() || p.parentPath.isObjectMethod() || p.parentPath.isClassMethod()) && !p.parentPath.node.computed && p.parentPath.node.property === p.node || (p.parentPath && p.parentPath.node && p.parentPath.node.key === p.node && !p.parentPath.node.computed);
      const n = p.node.name;
      if (isProp) { if (mangled(n)) occPropM++; else occPropR++; return; }
      if (mangled(n)) { m++; occM++; } else { r++; occR++; }
    },
  });
  const tot = m + r;
  if (tot === 0) continue;
  if (m / tot < 0.2) modsAllReadable++; else if (m / tot < 0.6) modsMixed++; else modsMostlyMangled++;
}
const pct = (a,b) => b ? (100*a/b).toFixed(1) + "%" : "n/a";
console.log("=== 标识符出现次数（不含属性名）===");
console.log("  可读名:", occR, "(" + pct(occR, occR+occM) + ")   压缩名:", occM, "(" + pct(occM, occR+occM) + ")");
console.log("=== 属性名出现次数（Bun 不压属性名，是主要可读锚点）===");
console.log("  可读:", occPropR, "(" + pct(occPropR, occPropR+occPropM) + ")   压缩:", occPropM);
console.log("=== 按模块看（压缩标识符占比）===");
console.log("  基本全可读(<20%压缩):", modsAllReadable, " 混合(20-60%):", modsMixed, " 大部分仍压缩(>60%):", modsMostlyMangled);