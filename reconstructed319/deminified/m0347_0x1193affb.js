// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Te, Ci, $V, Yc, Od } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Sc, AA } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { pqe } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { cRe } from "B:/~BUN/root/chunk-1012essb.js";
function _Le(r = Te()) {
  if (r !== "firstParty" || !Ci()) return !1;
  if ($V()) return !0;
  return s();
}
function _Bi(r = Te()) {
  if (r !== "firstParty" || !Yc()) return !1;
  return s();
}
function YW(r = Te()) {
  if (r !== "firstParty" || !Yc()) return !1;
  if (i.ANTHROPIC_BASE_URL !== void 0 || !Sc() || !AA()) return !0;
  let t = cRe(),
    e = t === void 0 ? pqe() ?? null : t;
  return e === null || Od(e);
}
function s() {
  if (i.ANTHROPIC_BASE_URL !== void 0 || !AA()) return !0;
  let r = cRe();
  return r === null || r !== void 0 && Od(r);
}
function Epo() {
  if (i.ANTHROPIC_BASE_URL !== void 0) return i.ANTHROPIC_BASE_URL;
  try {
    if (AA()) {
      let r = cRe();
      if (typeof r === "string") return r;
    }
  } catch {}
  return "https://api.anthropic.com";
}
export { _Le, _Bi, YW, Epo };