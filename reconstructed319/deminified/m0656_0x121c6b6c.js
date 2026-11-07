// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nb } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var s = Oe(nb(), 1),
  i = ["dev", "engine", "aot"];
function hEt(n) {
  return i.find(item => n.includes(`-${item}.`)) ?? null;
}
function $hn(n) {
  return hEt(n) !== null;
}
function gEt(n, e) {
  if (!n) return !1;
  let t = hEt(n),
    r = hEt(e);
  return t !== null && r !== null && t !== r;
}
var regExp = new RegExp(`-(?:${i.join("|")})\\.(\\d{8})\\.t(\\d{6})(?:\\.|$)`, "g");
function yEt(n) {
  let e;
  for (let u of n.matchAll(regExp)) e = u;
  let t = e?.[1],
    r = e?.[2];
  if (!t || !r) return null;
  let l = Date.UTC(Number(t.slice(0, 4)), Number(t.slice(4, 6)) - 1, Number(t.slice(6, 8)), Number(r.slice(0, 2)), Number(r.slice(2, 4)), Number(r.slice(4, 6)));
  return new Date(l).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${t}t${r}` ? l : null;
}
function N9s(n, e) {
  let t = yEt(n),
    r = yEt(e);
  return t !== null && r !== null && r < t;
}
function DYe(n, e) {
  let t = yEt(n),
    r = yEt(e);
  if (t !== null && r !== null) {
    if (hEt(n) !== hEt(e)) return !1;
    return t > r;
  }
  if ($hn(n) || $hn(e)) return !1;
  return s.valid(n) !== null && s.valid(e) !== null && s.gt(n, e);
}
function nGr(n, e, t) {
  if (!n) return !1;
  if (n === t) return !0;
  let r = yEt(n);
  if (r !== null) return r >= e.commitMs;
  if ($hn(n)) return !1;
  return s.valid(n) !== null && s.gte(n, e.release);
}
export { hEt, $hn, gEt, yEt, N9s, DYe, nGr };