// merge-reports.mjs — 合并分片报告 deminify-report.<i>.json / deminify-names.<i>.json / deminify-verify.<i>.json
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const N = parseInt(process.argv[2] || "6", 10);

function merge(base) {
  let all = [];
  let found = 0;
  for (let i = 0; i < N; i++) {
    const p = path.join(ROOT, base + "." + i + ".json");
    if (fs.existsSync(p)) { all = all.concat(JSON.parse(fs.readFileSync(p, "utf8"))); found++; }
  }
  all.sort((a, b) => (a.file || "").localeCompare(b.file || "") || (a.old || "").localeCompare(b.old || ""));
  fs.writeFileSync(path.join(ROOT, base + ".json"), JSON.stringify(all, null, 2));
  console.log(base + ".json  <- " + found + " shards, " + all.length + " rows");
}
merge("deminify-report");
merge("deminify-names");
merge("deminify-verify");