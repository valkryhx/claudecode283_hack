// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Tm } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { te, mks } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { zvr, iws } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { cEr } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { o } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var Zpo = /^u_[A-Za-z0-9_]{1,62}$/,
  Nvr = /^[a-z_]{0,32}$/;
function Fvr(n, e) {
  return !(n === void 0 || n === null || n === "" || n === "agent" && e === "assistant");
}
function QW(n, e) {
  if (e.tokens.has(n)) return !0;
  return e.account !== void 0 && n.toLowerCase() === e.account;
}
async function qJe(n) {
  let {
      info: info
    } = cEr(),
    r = (await Tm(n)) === "store" ? info?.accountUuid?.toLowerCase() : void 0;
  return {
    account: r === "" ? void 0 : r,
    tokens: YJe()
  };
}
function SLt(n, e) {
  let r = e.account !== void 0 || e.tokens.size > 0,
    i = !1;
  for (let t of n) if (t.account === "unknown" || t.role === "degraded" || t.postedByArtifact === !0 || !r || Zpo.test(t.account) && e.tokens.size === 0) i = !0;else if (!QW(t.account, e)) return "other";
  return i ? "unknown" : "own";
}
function c() {
  return cEr().info?.accountUuid?.toLowerCase() ?? null;
}
var u = new Set();
function YJe() {
  let n = te(),
    ownPrincipalTokens = n.ownPrincipalTokens;
  if (ownPrincipalTokens.size === 0) return u;
  if (n.ownPrincipalTokenAccount !== c()) return mks(n), u;
  let r = zvr();
  for (let [i, t] of ownPrincipalTokens) if (t !== d && t !== r) ownPrincipalTokens.delete(i);
  return new Set(ownPrincipalTokens.keys());
}
var d = "relay",
  l = p(() => o().regex(Zpo));
async function n1i(n) {
  return await iws(n), YJe(), {
    epoch: te().ownPrincipalTokenEpoch,
    account: c(),
    bearer: zvr()
  };
}
function r1i(n, e, r, i) {
  let t = te();
  if (t.ownPrincipalTokenEpoch !== e.epoch || c() !== e.account) return;
  let a = i === "relay" ? d : e.bearer !== null && zvr() === e.bearer && r === e.bearer ? e.bearer : void 0;
  if (a === void 0) return;
  let s = l().safeParse(n);
  if (s.success) {
    if (t.ownPrincipalTokenAccount !== e.account) t.ownPrincipalTokens.clear(), t.ownPrincipalTokenAccount = e.account;
    t.ownPrincipalTokens.set(s.data, a);
  }
}
export { Zpo, Nvr, Fvr, QW, qJe, SLt, YJe, n1i, r1i };