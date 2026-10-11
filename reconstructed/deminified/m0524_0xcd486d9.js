// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Yi, ns } from "B:/~BUN/root/chunk-54p0h65d.js";
import { JH, bMe, FCt, TL, KU, AT } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Lo } from "B:/~BUN/root/chunk-339q6g5w.js";
import { realpathSync as u } from "fs";
var hpe = (() => {
  try {
    return u(process.cwd());
  } catch {
    return process.cwd();
  }
})();
function PRn(r, e) {
  let n = JH(r),
    t = JH(e);
  if (TL(n) || TL(t)) return !0;
  if (n.skipped !== t.skipped) return !0;
  return bMe(n, t);
}
function TOe(r, e) {
  if (ns(r) || Yi(r)) return [];
  let n = Lo(r),
    t = n !== null && n !== void 0 ? [n] : (() => {
      let o = AT(r);
      return o.length > 0 ? o : [r];
    })();
  return e === void 0 ? t : t.filter(item => KU(item, e) !== "same");
}
function bze(r, e) {
  if (ns(r) || Yi(r)) return [];
  let n = Lo(r),
    t = n !== null && n !== void 0 ? [n] : AT(r);
  return e === void 0 ? t : t.filter(item => KU(item, e) !== "same");
}
function YSe(r, e, n) {
  if (e.length === 0) return !1;
  if (!e.every(item => {
    let o = KU(r, item);
    if (o === "indeterminate") return !1;
    if (o === "same") return !0;
    return !PRn(item, r);
  })) return !1;
  if (n?.requireCovered === !0) {
    let s = JH(r);
    if (TL(s)) return !1;
    let o = a => a.some(item => {
      let i = JH(item);
      if (TL(i)) return !1;
      return FCt(s, i);
    });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []);
  }
  return !0;
}
export { hpe, PRn, TOe, bze, YSe };