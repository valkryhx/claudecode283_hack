// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $c, g0, zGo, GGo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Ht } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Iin, ee, sKn } from "B:/~BUN/root/chunk-t63e78w2.js";
import { MY, Oy, Kh, c_ } from "B:/~BUN/root/chunk-4bgwjb4z.js";
import { Rk } from "B:/~BUN/root/chunk-9grc6xh0.js";
function rbe() {
  if (!Ht()) return !0;
  return $c() !== null && zGo();
}
function Zrs(e) {
  let t = g0(e),
    n = GGo(e);
  return () => {
    t(), n();
  };
}
function Dot() {
  if (ee().autoReact.enabledMemo !== !0) return new Set();
  return new Set(Array.from(u(), e => e.slug));
}
function GNe() {
  let {
      autoReact: autoReact,
      durable: durable,
      live: live,
      wakes: wakes
    } = ee(),
    i = new Set();
  if (autoReact.enabledMemo === !1 || autoReact.userDisarmed) return i;
  for (let [o, s] of live.bootingWiredArms) {
    if (s.scanGeneration !== wakes.scanGeneration || live.retiredInFlightArms.has(o) || durable.stopLatches.isStopped(o)) continue;
    if (!Oy(o) || s.freshPublish && c_(o) && s.stopGeneration === MY(o)) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of ee().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !Kh(e.slug)) yield e;
}
function PQr(e) {
  let {
    live: live_2
  } = ee();
  for (let n of u()) if (e?.reconnecting !== !0 || n.timer !== void 0 || live_2.inFlightSubscribes.has(n.slug)) return !0;
  return !1;
}
function eos() {
  return ee().autoReact.enabledMemo === !0 && PQr({
    reconnecting: !0
  });
}
function LYt(e) {
  let live_3 = ee().live;
  for (let n of e) {
    let r = live_3.supervisors.get(n);
    if (r !== void 0) Iin(r), live_3.supervisors.delete(n);
    live_3.heardVersions.delete(n), sKn(n), ee().liveDocWatch.headSinks.get(n)?.sourceEnded();
  }
  c(e);
}
function c(e) {
  let live_4 = ee().live;
  for (let n of e) if (live_4.inFlightSubscribes.has(n) && !live_4.supervisors.has(n)) live_4.retiredInFlightArms.add(n), live_4.bootingWiredArms.delete(n), live_4.inFlightWiredIntent.delete(n);
}
var Lot = 1e4;
function a() {
  return ee().autoReact.unattendedReplies;
}
function OQr(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, Lot));
}
function IQr(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, Lot));
  }
}
function tos(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return t.delete(e), n;
}
function UAn() {
  let autoReact_2 = ee().autoReact,
    t = autoReact_2.unattendedReplies;
  autoReact_2.unattendedReplies = new Map();
  let total = 0;
  for (let r of t.values()) total += r;
  return {
    total: total,
    bySlug: t
  };
}
function BAn(e, {
  where: where,
  stop: stop
}) {
  return Rk(`Claude auto-replied to ${e} ${O(e, "comment")}${where} while you were away.${stop}`, "notice");
}
export { rbe, Zrs, Dot, GNe, PQr, eos, LYt, Lot, OQr, IQr, tos, UAn, BAn };