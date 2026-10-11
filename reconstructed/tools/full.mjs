// full.mjs — beautify EVERY module in full (module-level, 全部保留).
// 安全阀：格式化后重新解析，解析不过就退回原文，保证绝不损坏源码。
// Usage: node full.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";
import beautify from "js-beautify";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MODDIR = path.resolve(ROOT, "..", "claudecode283", "modules");
const OUT = path.join(ROOT, "full");
fs.mkdirSync(OUT, { recursive: true });

const bopts = { indent_size: 2, max_preserve_newlines: 1, brace_style: "collapse", end_with_newline: true };
const PARSE = { ecmaVersion: "latest", sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true };

const files = fs.readdirSync(MODDIR).filter((f) => f.endsWith(".js")).sort();
const report = [];
let totalIn = 0, totalOut = 0, fellBack = 0;
const t0 = Date.now();

for (const f of files) {
  const src = fs.readFileSync(path.join(MODDIR, f), "utf8").replace(/\u0000/g, " ");
  let out = src, err = null, fell = false;
  try {
    const cand = beautify.js(src, bopts);
    acorn.parse(cand, PARSE);
    out = cand;
  } catch (e) { err = e.message; fell = true; fellBack++; }
  fs.writeFileSync(path.join(OUT, f), out);
  totalIn += src.length; totalOut += out.length;
  report.push({ file: f, in: src.length, out: out.length, beautified: !fell, err });
}

fs.writeFileSync(path.join(ROOT, "full-report.json"), JSON.stringify(report, null, 2));
const secs = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`modules: ${files.length}   beautified: ${files.length - fellBack}   fell back to verbatim: ${fellBack}   (${secs}s)`);
console.log(`in ${(totalIn/1048576).toFixed(1)} MB -> out ${(totalOut/1048576).toFixed(1)} MB`);
for (const r of report) if (!r.beautified) console.log("  verbatim:", r.file, "|", r.err);
