// verify.mjs — prove each raw/ slice is an exact substring of its source module.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as acorn from "acorn";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MODDIR = path.resolve(ROOT, "..", "claudecode283", "modules");
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"));

const srcCache = new Map();
const getSrc = (f) => {
  if (!srcCache.has(f)) srcCache.set(f, fs.readFileSync(path.join(MODDIR, f), "utf8").replace(/\u0000/g, " "));
  return srcCache.get(f);
};

let ok = 0, bad = 0;
for (const m of manifest) {
  const raw = fs.readFileSync(path.join(ROOT, "raw", m.base), "utf8").replace(/\n$/, "");
  const src = getSrc(m.file);
  const at = src.indexOf(raw);
  const exact = at === m.offset;
  // also confirm it parses in a wrapper
  let parses = true, perr = "";
  const body = raw;
  const wrapped = /^\s*(async\s+)?function\s/.test(body) || /^\s*class\s/.test(body)
    ? body
    : (/^\s*(async\s+)?(get\s+|set\s+)?[A-Za-z_$][\w$]*\s*\(/.test(body) ? `({${body}})` : body);
  try { acorn.parse(wrapped, { ecmaVersion: "latest", sourceType: "module" }); }
  catch (e) { parses = false; perr = e.message; }
  if (exact && parses) { ok++; }
  else { bad++; console.log(`BAD ${m.tag}  substr@${at} (expect ${m.offset})  parse=${parses} ${perr}`); }
}
console.log(`\n${ok}/${manifest.length} exact-substring + parse OK, ${bad} bad`);
