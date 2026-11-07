// 把 deminified 模块转成可被 Node 直接执行的独立模块：
//  - 剥掉所有 `import ... from "B:/~BUN/root/..."`（Bun 虚拟路径）
//  - 保留 export
// 只适用于「叶子模块」（自身不 import 任何本地符号，或 import 的符号未被使用）。
import fs from "node:fs";
import path from "node:path";

const [, , src, dst] = process.argv;
let code = fs.readFileSync(src, "utf8");

const used = new Set();
// 记录被 import 的本地名，稍后检查是否真的被引用
const importRe = /^import\s*\{([^}]*)\}\s*from\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm;
let m;
while ((m = importRe.exec(code)) !== null) {
  for (const part of m[1].split(",")) {
    const name = part.trim().split(/\s+as\s+/).pop().trim();
    if (name) used.add(name);
  }
}
// 剥掉这些 import 行
code = code.replace(/^import\s*\{[^}]*\}\s*from\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm, "");
code = code.replace(/^import\s+[^;]*from\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm, "");
// 裸 import（无绑定）
code = code.replace(/^import\s*"B:\/~BUN\/root\/[^"]+";?\s*$/gm, "");

fs.mkdirSync(path.dirname(dst), { recursive: true });
fs.writeFileSync(dst, code, "utf8");

// 报告：被 import 但可能仍被使用的名字（用于人工判断能否独立执行）
const body = code;
const risky = [...used].filter((n) => {
  const re = new RegExp(`\\b${n.replace(/[$]/g, "\\$")}\\b`);
  return re.test(body);
});
if (risky.length) {
  console.log(`WARN ${path.basename(src)}: 仍引用未定义符号 -> ${risky.join(", ")}`);
} else {
  console.log(`OK   ${path.basename(src)}: 无残留外部依赖`);
}
