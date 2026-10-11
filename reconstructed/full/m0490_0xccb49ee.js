// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  md,
  bj,
  tVr,
  nVr
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  vt
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  iDt,
  ee,
  xan
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  eW,
  Zm,
  eg,
  bg
} from "B:/~BUN/root/chunk-1mdmjaqt.js";
import {
  MP
} from "B:/~BUN/root/chunk-3jyp964r.js";

function Hoe() {
  if (!vt()) return !0;
  return md() !== null && tVr()
}

function Tno(e) {
  let t = bj(e),
    n = nVr(e);
  return () => {
    t(), n()
  }
}

function yze() {
  if (ee().autoReact.enabledMemo !== !0) return new Set;
  return new Set(Array.from(u(), (e) => e.slug))
}

function KSe() {
  let {
    autoReact: e,
    durable: t,
    live: n,
    wakes: r
  } = ee(), i = new Set;
  if (e.enabledMemo === !1 || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!Zm(o) || s.freshPublish && bg(o) && s.stopGeneration === eW(o)) i.add(o)
  }
  return i
}

function* u() {
  for (let e of ee().live.supervisors.values())
    if (!e.stopped && e.autoReactWiring !== void 0 && !eg(e.slug)) yield e
}

function klr(e) {
  let {
    live: t
  } = ee();
  for (let n of u())
    if (e?.reconnecting !== !0 || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return !0;
  return !1
}

function Cno() {
  return ee().autoReact.enabledMemo === !0 && klr({
    reconnecting: !0
  })
}

function hvt(e) {
  let t = ee().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) iDt(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), xan(n), ee().liveDocWatch.headSinks.get(n)?.sourceEnded()
  }
  c(e)
}

function c(e) {
  let t = ee().live;
  for (let n of e)
    if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n)
}
var _ze = 1e4;

function a() {
  return ee().autoReact.unattendedReplies
}

function Elr(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, _ze))
}

function Tlr(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, _ze))
  }
}

function Rno(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return t.delete(e), n
}

function V3t() {
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

function q3t(e, {
  where: t,
  stop: n
}) {
  return MP(`Claude auto-replied to ${e} ${I(e,"comment")}${t} while you were away.${n}`, "notice")
}
export {
  Hoe,
  Tno,
  yze,
  KSe,
  klr,
  Cno,
  hvt,
  _ze,
  Elr,
  Tlr,
  Rno,
  V3t,
  q3t
};
