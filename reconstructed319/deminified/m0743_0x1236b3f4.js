// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { yf, Sj } from "B:/~BUN/root/chunk-65j2302z.js";
import { aws, mCe, C1, ELt } from "B:/~BUN/root/chunk-17caj8fw.js";
function f6t() {
  let n = yf();
  return n ? {
    entrypoint: n.toLowerCase().slice(0, 64)
  } : {};
}
function wXr() {
  let session_id = aws();
  return session_id && !Sj() ? {
    session_id: session_id
  } : {};
}
var WJo = 3600000;
function Oir() {
  let sessionHintsRefusedAt = te().sessionHintsRefusedAt;
  if (sessionHintsRefusedAt !== void 0 && Date.now() - sessionHintsRefusedAt < WJo) return {};
  return {
    ...f6t(),
    ...wXr()
  };
}
function Iir() {
  te().sessionHintsRefusedAt = Date.now();
}
var kXr = ["entrypoint", "session_id", "request_id"],
  u = new Set(kXr);
function Mir(n, s, i) {
  let o = kXr.filter(item => i[item] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = C1(s);
  if (!mCe.test(e)) return [];
  let r = o.filter(item => ELt(e, item));
  if (r.length > 0) return r;
  return Object.keys(i).some(item => !u.has(item) && ELt(e, item)) ? [] : o;
}
function yEn(n) {
  return n.includes("entrypoint") || n.includes("session_id");
}
function Npi(n) {
  let {
    entrypoint: entrypoint,
    session_id: session_id_2,
    request_id: request_id,
    ...e
  } = n;
  return e;
}
export { f6t, wXr, WJo, Oir, Iir, kXr, Mir, yEn, Npi };