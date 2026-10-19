// verify-full.mjs — 每个格式化后的模块都必须能重新解析
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.RE_ROOT ? path.resolve(process.env.RE_ROOT) : path.resolve(__dirname, "..");
const FULL = process.env.RE_FULL ? path.resolve(process.env.RE_FULL) : path.join(ROOT, "full");
const files = fs.readdirSync(FULL).filter((f) => f.endsWith(".js"));
let ok = 0, bad = 0;
const bads = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(FULL, f), "utf8");
  try { acorn.parse(src, { ecmaVersion: "latest", sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true }); ok++; }
  catch (e) { bad++; bads.push([f, e.message]); }
}
console.log(`full/ parseable: ${ok}/${files.length}  (bad=${bad})`);
for (const [f, m] of bads.slice(0, 10)) console.log("  FAIL", f, m);
