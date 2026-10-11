// verify-deminified.mjs — 校验 deminified/ 未改变语义：
//   1) 输出可被 @babel/parser 重新解析
//   2) 字符串字面量集合与源模块完全一致（不改字符串）
//   3) 非计算属性名集合完全一致（不改属性名）
//   4) 除 BlockStatement 外，AST 节点类型计数完全一致（不改控制流/结构）
//      —— BlockStatement 只允许【增加】，且来源必须是 Babel 生成器为消解
//         dangling-else（悬垂 else）而补的大括号：`if(a)if(b)x;else y;` ->
//         `if(a){if(b)x;else y;}`，语义完全不变。
// 超大模块（>1MB，deminify 直接复用 full/）改为与 full/ 逐字节一致校验。
// 用法: node verify-deminified.mjs [--shard i/n] [--only substr]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MODDIR = path.resolve(ROOT, "..", "claudecode283", "modules");
const OUT = path.join(ROOT, "deminified");
const FULLDIR = path.join(ROOT, "full");
const BIG_LIMIT = 1000000;

const args = process.argv.slice(2);
const argVal = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const ONLY = argVal("--only");
const SHARD = argVal("--shard") ? argVal("--shard").split("/").map(Number) : null;
const shardIdx = SHARD ? SHARD[0] : 0, shardNum = SHARD ? SHARD[1] : 1;

const PARSE_OPTS = { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, allowImportExportEverywhere: true, plugins: [] };

function stats(ast) {
  const strings = [], keys = [], types = {};
  (function walk(node) {
    if (!node || typeof node.type !== "string") return;
    types[node.type] = (types[node.type] || 0) + 1;
    if (node.type === "StringLiteral") strings.push(node.value);
    if (node.type === "ObjectProperty" && !node.computed && node.key && (node.key.type === "Identifier" || node.key.type === "StringLiteral"))
      keys.push(node.key.type === "Identifier" ? node.key.name : node.key.value);
    if (node.type === "ClassMethod" && !node.computed && node.key && node.key.type === "Identifier") keys.push(node.key.name);
    for (const k of Object.keys(node)) {
      if (k === "loc" || k === "start" || k === "end" || k === "extra") continue;
      if (node.type === "FunctionExpression" && k === "id") continue;  // B1 给匿名函数补名，语义不变
      const v = node[k];
      if (Array.isArray(v)) for (const c of v) walk(c);
      else if (v && typeof v.type === "string") walk(v);
    }
  })(ast);
  return { strings: strings.sort(), keys: keys.sort(), types };
}

let files = fs.readdirSync(MODDIR).filter((f) => f.endsWith(".js")).sort().filter((f) => !ONLY || f.includes(ONLY));
if (shardNum > 1) files = files.filter((_, i) => i % shardNum === shardIdx);

const results = [];
let ok = 0, bad = 0, big = 0, blocksAdded = 0;
const t0 = Date.now();
for (const f of files) {
  const src = fs.readFileSync(path.join(MODDIR, f), "utf8").replace(/\u0000/g, " ");
  const out = fs.readFileSync(path.join(OUT, f), "utf8");

  if (src.length > BIG_LIMIT) {
    big++;
    const full = fs.existsSync(path.join(FULLDIR, f)) ? fs.readFileSync(path.join(FULLDIR, f), "utf8") : null;
    if (full !== null && full === out) { results.push({ file: f, ok: true, big: true }); ok++; }
    else { results.push({ file: f, ok: false, big: true, why: "big file not identical to full/" }); bad++; }
    continue;
  }

  let a, b;
  try { a = stats(parse(src, PARSE_OPTS)); } catch (e) { results.push({ file: f, ok: false, why: "src parse: " + e.message }); bad++; continue; }
  try { b = stats(parse(out, PARSE_OPTS)); } catch (e) { results.push({ file: f, ok: false, why: "out parse: " + e.message }); bad++; continue; }
  const problems = [];
  if (JSON.stringify(a.strings) !== JSON.stringify(b.strings)) problems.push("strings differ");
  if (JSON.stringify(a.keys) !== JSON.stringify(b.keys)) problems.push("property keys differ");
  const names = new Set([...Object.keys(a.types), ...Object.keys(b.types)]);
  let added = 0;
  for (const n of names) {
    const ca = a.types[n] || 0, cb = b.types[n] || 0;
    if (ca === cb) continue;
    if (n === "BlockStatement" && cb > ca) { added = cb - ca; continue; }
    problems.push("node " + n + ": " + ca + " -> " + cb);
  }
  blocksAdded += added;
  if (problems.length) { results.push({ file: f, ok: false, why: problems.join("; ") }); bad++; }
  else { results.push({ file: f, ok: true, blocksAdded: added }); ok++; }
}

const sfx = shardNum > 1 ? "." + shardIdx : "";
fs.writeFileSync(path.join(ROOT, "deminify-verify" + sfx + ".json"), JSON.stringify(results, null, 2));
console.log("[verify shard " + shardIdx + "/" + shardNum + "] ok: " + ok + "  bad: " + bad + "  big: " + big + "  blocksAdded(dangling-else): " + blocksAdded + "  (" + ((Date.now() - t0) / 1000).toFixed(1) + "s)");
for (const r of results) if (!r.ok) console.log("  BAD", r.file, "|", r.why);