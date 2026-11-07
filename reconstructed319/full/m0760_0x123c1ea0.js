// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  sf,
  XA,
  TGs,
  CGs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Gt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  TNn,
  te,
  _Er
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  lQ,
  mb,
  hb,
  CS
} from "B:/~BUN/root/chunk-dq64svjd.js";
import {
  Ww
} from "B:/~BUN/root/chunk-27h4st9h.js";

function DOe() {
  if (!Gt()) return !0;
  return sf() !== null && TGs()
}

function aii(e) {
  let t = XA(e),
    n = CGs(e);
  return () => {
    t(), n()
  }
}

function hCt() {
  if (te().autoReact.enabledMemo !== !0) return new Set;
  return new Set(Array.from(u(), (e) => e.slug))
}

function S6e() {
  let {
    autoReact: e,
    durable: t,
    live: n,
    wakes: r
  } = te(), i = new Set;
  if (e.enabledMemo === !1 || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!mb(o) || s.freshPublish && CS(o) && s.stopGeneration === lQ(o)) i.add(o)
  }
  return i
}

function* u() {
  for (let e of te().live.supervisors.values())
    if (!e.stopped && e.autoReactWiring !== void 0 && !hb(e.slug)) yield e
}

function aYr(e) {
  let {
    live: t
  } = te();
  for (let n of u())
    if (e?.reconnecting !== !0 || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return !0;
  return !1
}

function lii() {
  return te().autoReact.enabledMemo === !0 && aYr({
    reconnecting: !0
  })
}

function Dbn(e) {
  let t = te().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) TNn(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), _Er(n), te().liveDocWatch.headSinks.get(n)?.sourceEnded()
  }
  c(e)
}

function c(e) {
  let t = te().live;
  for (let n of e)
    if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n)
}
var gCt = 1e4;

function a() {
  return te().autoReact.unattendedReplies
}

function zKo(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, gCt))
}

function GKo(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, gCt))
  }
}

function dii(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return t.delete(e), n
}

function hZn() {
  let e = te().autoReact,
    t = e.unattendedReplies;
  e.unattendedReplies = new Map;
  let n = 0;
  for (let r of t.values()) n += r;
  return {
    total: n,
    bySlug: t
  }
}

function gZn(e, {
  where: t,
  stop: n
}) {
  return Ww(`Claude auto-replied to ${e} ${P(e,"comment")}${t} while you were away.${n}`, "notice")
}
export {
  DOe,
  aii,
  hCt,
  S6e,
  aYr,
  lii,
  Dbn,
  gCt,
  zKo,
  GKo,
  dii,
  hZn,
  gZn
};
