// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { zs } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { rp } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { een } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { sep as i } from "path";
function kIt(t) {
  if (q()) return null;
  let e = `${een()}${i}`,
    n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}
function uRi(t) {
  if (t?.file_path?.startsWith(rp())) return "Reading Plan";
  if (t?.file_path && kIt(t.file_path)) return "Read agent output";
  return "Read";
}
function Xas(t) {
  if (!t?.file_path) return null;
  let e = kIt(t.file_path);
  if (e) return e;
  return zs(t.file_path);
}
export { kIt, uRi, Xas };