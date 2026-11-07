// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $Ks, T4e } from "B:/~BUN/root/chunk-wt4dg253.js";
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { Cl, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Ox, Gce, ypt, jW } from "B:/~BUN/root/chunk-6bx54the.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { fr, Gi } from "B:/~BUN/root/chunk-1g25msn4.js";
import { uL, oD } from "B:/~BUN/root/chunk-cxcakgnv.js";
var bBe = (() => {
  try {
    return $Ks(process.cwd());
  } catch {
    return process.cwd();
  }
})();
function yCt(r, e) {
  let n = T4e();
  if (n === null || r === void 0 || i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || Ks(n) || Cl(n) || uL(r, n) !== "same" || uL(Ee(), e) !== "same") return;
  let t = fr(n);
  return t !== null && uL(t, n) === "same" ? n : void 0;
}
function SYr(r, e) {
  let n = Ox(r),
    t = Ox(e);
  if (jW(n) || jW(t)) return !0;
  if (n.skipped !== t.skipped) return !0;
  return Gce(n, t);
}
function Iit(r, e) {
  if (Ks(r) || Cl(r)) return [];
  let n = Gi(r),
    t = n !== null && n !== void 0 ? [n] : (() => {
      let o = oD(r);
      return o.length > 0 ? o : [r];
    })();
  return e === void 0 ? t : t.filter(item => uL(item, e) !== "same");
}
function _Ct(r, e) {
  if (Ks(r) || Cl(r)) return [];
  let n = Gi(r),
    t = n !== null && n !== void 0 ? [n] : oD(r);
  return e === void 0 ? t : t.filter(item => uL(item, e) !== "same");
}
function k6e(r, e, n) {
  if (e.length === 0) return !1;
  if (!e.every(item => {
    let o = uL(r, item);
    if (o === "indeterminate") return !1;
    if (o === "same") return !0;
    return !SYr(item, r);
  })) return !1;
  if (n?.requireCovered === !0) {
    let s = Ox(r);
    if (jW(s)) return !1;
    let o = u => u.some(item => {
      let a = Ox(item);
      if (jW(a)) return !1;
      return ypt(s, a);
    });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []) || n.bootLaunchTree !== void 0 && uL(r, n.bootLaunchTree) === "same";
  }
  return !0;
}
export { bBe, yCt, SYr, Iit, _Ct, k6e };