// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { bu } from "B:/~BUN/root/chunk-5h4fwkjy.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ht, HCe, Mv } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { lS } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Xd } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { to, Dd } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { Af } from "B:/~BUN/root/chunk-vaq2hdme.js";
import { Jji } from "B:/~BUN/root/chunk-detjgwj4.js";
import { LWe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { cbr, Kps, g0i, fMn } from "B:/~BUN/root/chunk-y7em5h10.js";
import { KXn, mei } from "B:/~BUN/root/chunk-xa7ng0zm.js";
import { V0e, _0t } from "B:/~BUN/root/chunk-zymc6pem.js";
import { VXn } from "B:/~BUN/root/chunk-d5s87fq7.js";
import { vq } from "B:/~BUN/root/chunk-kk81ayzj.js";
import { rm } from "B:/~BUN/root/chunk-bmb3dt02.js";
import { Wwe } from "B:/~BUN/root/chunk-5ha2avah.js";
var c = new Set([Af, bu]);
function Kjo(o, e) {
  if (e.length === 0) return o;
  let t = e.map(item => [item, to(item)]),
    n = o.filter(item => !t.some(([s, r]) => Dd(item, s, r)));
  return n.length === o.length ? o : n;
}
function f(o) {
  return o.mcpInfo?.cliOwned === !0 && o.mcpInfo.serverName === Xd;
}
var a = import.meta.require("B:/~BUN/root/chunk-0rsphtkf.js");
function GXn() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map(item => item.trim()).filter(Boolean);
}
function qjo(o, e = GXn()) {
  if (V0e(o) || Kps.includes(o.name)) return !0;
  let t = to(o.name);
  return e.some(item => item.startsWith(t));
}
function NVr(o, e = () => !1) {
  let CLAUDE_CODE_BRIEF = i.CLAUDE_CODE_BRIEF,
    n = new Set(GXn()),
    m = fMn(),
    s = o.some(_0t);
  return o.filter(item => cbr.has(item.name) || m && ht(item, Me) && !rm(item) || g0i(item.name) || f(item) || _0t(item) || CLAUDE_CODE_BRIEF && c.has(item.name) || Mv(item, n) || !s && e(item));
}
function dyn(o, e, t, n, m) {
  let [s, r] = lS(VXn(Wwe(LWe([...o, ...e]), l => l.name), n), l => rm(l) || vq(l)),
    p = [...mei(r).sort(HCe), ...KXn(s, n ?? s).sort(HCe)];
  if (a.isCoordinatorMode()) return NVr(p, m);
  return p;
}
function cyn(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && Jji(e, t)) return [];
  return o;
}
export { Kjo, GXn, qjo, NVr, dyn, cyn };