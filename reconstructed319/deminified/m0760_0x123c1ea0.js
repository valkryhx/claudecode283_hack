// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { sf, XA, TGs, CGs } from "B:/~BUN/root/chunk-game8aqv.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Gt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { TNn, te, _Er } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { lQ, mb, hb, CS } from "B:/~BUN/root/chunk-dq64svjd.js";
import { Ww } from "B:/~BUN/root/chunk-27h4st9h.js";
function DOe() {
  if (!Gt()) return !0;
  return sf() !== null && TGs();
}
function aii(e) {
  let t = XA(e),
    n = CGs(e);
  return () => {
    t(), n();
  };
}
function hCt() {
  if (te().autoReact.enabledMemo !== !0) return new Set();
  return new Set(Array.from(u(), e => e.slug));
}
function S6e() {
  let {
      autoReact: autoReact,
      durable: durable,
      live: live,
      wakes: wakes
    } = te(),
    i = new Set();
  if (autoReact.enabledMemo === !1 || autoReact.userDisarmed) return i;
  for (let [o, s] of live.bootingWiredArms) {
    if (s.scanGeneration !== wakes.scanGeneration || live.retiredInFlightArms.has(o) || durable.stopLatches.isStopped(o)) continue;
    if (!mb(o) || s.freshPublish && CS(o) && s.stopGeneration === lQ(o)) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of te().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !hb(e.slug)) yield e;
}
function aYr(e) {
  let {
    live: live_2
  } = te();
  for (let n of u()) if (e?.reconnecting !== !0 || n.timer !== void 0 || live_2.inFlightSubscribes.has(n.slug)) return !0;
  return !1;
}
function lii() {
  return te().autoReact.enabledMemo === !0 && aYr({
    reconnecting: !0
  });
}
function Dbn(e) {
  let live_3 = te().live;
  for (let n of e) {
    let r = live_3.supervisors.get(n);
    if (r !== void 0) TNn(r), live_3.supervisors.delete(n);
    live_3.heardVersions.delete(n), _Er(n), te().liveDocWatch.headSinks.get(n)?.sourceEnded();
  }
  c(e);
}
function c(e) {
  let live_4 = te().live;
  for (let n of e) if (live_4.inFlightSubscribes.has(n) && !live_4.supervisors.has(n)) live_4.retiredInFlightArms.add(n), live_4.bootingWiredArms.delete(n), live_4.inFlightWiredIntent.delete(n);
}
var gCt = 1e4;
function a() {
  return te().autoReact.unattendedReplies;
}
function zKo(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, gCt));
}
function GKo(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, gCt));
  }
}
function dii(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return t.delete(e), n;
}
function hZn() {
  let autoReact_2 = te().autoReact,
    t = autoReact_2.unattendedReplies;
  autoReact_2.unattendedReplies = new Map();
  let total = 0;
  for (let r of t.values()) total += r;
  return {
    total: total,
    bySlug: t
  };
}
function gZn(e, {
  where: where,
  stop: stop
}) {
  return Ww(`Claude auto-replied to ${e} ${P(e, "comment")}${where} while you were away.${stop}`, "notice");
}
export { DOe, aii, hCt, S6e, aYr, lii, Dbn, gCt, zKo, GKo, dii, hZn, gZn };