// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  $c,
  g0,
  zGo,
  GGo
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Ht
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Iin,
  ee,
  sKn
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  MY,
  Oy,
  Kh,
  c_
} from "B:/~BUN/root/chunk-4bgwjb4z.js";
import {
  Rk
} from "B:/~BUN/root/chunk-9grc6xh0.js";

function rbe() {
  if (!Ht()) return !0;
  return $c() !== null && zGo()
}

function Zrs(e) {
  let t = g0(e),
    n = GGo(e);
  return () => {
    t(), n()
  }
}

function Dot() {
  if (ee().autoReact.enabledMemo !== !0) return new Set;
  return new Set(Array.from(u(), (e) => e.slug))
}

function GNe() {
  let {
    autoReact: e,
    durable: t,
    live: n,
    wakes: r
  } = ee(), i = new Set;
  if (e.enabledMemo === !1 || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!Oy(o) || s.freshPublish && c_(o) && s.stopGeneration === MY(o)) i.add(o)
  }
  return i
}

function* u() {
  for (let e of ee().live.supervisors.values())
    if (!e.stopped && e.autoReactWiring !== void 0 && !Kh(e.slug)) yield e
}

function PQr(e) {
  let {
    live: t
  } = ee();
  for (let n of u())
    if (e?.reconnecting !== !0 || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return !0;
  return !1
}

function eos() {
  return ee().autoReact.enabledMemo === !0 && PQr({
    reconnecting: !0
  })
}

function LYt(e) {
  let t = ee().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) Iin(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), sKn(n), ee().liveDocWatch.headSinks.get(n)?.sourceEnded()
  }
  c(e)
}

function c(e) {
  let t = ee().live;
  for (let n of e)
    if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n)
}
var Lot = 1e4;

function a() {
  return ee().autoReact.unattendedReplies
}

function OQr(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, Lot))
}

function IQr(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, Lot))
  }
}

function tos(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return t.delete(e), n
}

function UAn() {
  let e = ee().autoReact,
    t = e.unattendedReplies;
  e.unattendedReplies = new Map;
  let n = 0;
  for (let r of t.values()) n += r;
  return {
    total: n,
    bySlug: t
  }
}

function BAn(e, {
  where: t,
  stop: n
}) {
  return Rk(`Claude auto-replied to ${e} ${O(e,"comment")}${t} while you were away.${n}`, "notice")
}
export {
  rbe,
  Zrs,
  Dot,
  GNe,
  PQr,
  eos,
  LYt,
  Lot,
  OQr,
  IQr,
  tos,
  UAn,
  BAn
};
