// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { HS } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { $x, _E } from "B:/~BUN/root/chunk-xbhv3nhf.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { randomUUID as R } from "crypto";
var S = 1024,
  h = 1024,
  p = 32,
  m = 16,
  b = 524288,
  w = 300000;
function c() {
  return _E($x, void 0, !0);
}
function A() {
  return {
    isWatched: !1,
    hasMoved: !1,
    taken: void 0,
    goneUntoldToMainAgent: void 0
  };
}
var zH = new Je(() => ({
  id: R(),
  now: () => performance.now(),
  runningRuns: new Map(),
  finishedRuns: new Map(),
  barredRuns: new Map(),
  keptRuns: new Map(),
  newestDropped: void 0,
  runEnded: De(),
  readFileState: c(),
  subagentReadFileStates: new Map(),
  changedFilesPasses: new WeakMap(),
  shell: A()
}));
function i4s(n) {
  return zH.of(n).id;
}
function qMo(n, e) {
  let r = zH.of(n),
    {
      runningRuns: runningRuns,
      finishedRuns: finishedRuns,
      barredRuns: barredRuns
    } = r;
  if (barredRuns.has(e)) return "barred";
  if (runningRuns.has(e) || finishedRuns.has(e)) return "started_before";
  return runningRuns.set(e, r.now()), "claimed";
}
var l = (n, e) => n === void 0 || e === void 0 ? n ?? e : Math.max(n, e);
function g(n, e, r, s) {
  n.set(e, s);
  let [i] = n;
  if (n.size <= r || i === void 0) return;
  return n.delete(i[0]), i[1];
}
function YMo(n, e) {
  let r = zH.of(n);
  if (!r.runningRuns.delete(e)) return;
  r.newestDropped = l(r.newestDropped, g(r.finishedRuns, e, S, r.now())), r.runEnded.emit();
}
function a4s(n, e, {
  call: call,
  stop: stop
}, i) {
  let o = zH.of(n),
    {
      keptRuns: keptRuns,
      finishedRuns: finishedRuns_2
    } = o;
  if (keptRuns.has(e)) return i();
  let d = {
    call: call,
    answer: i(),
    stop: stop
  };
  return keptRuns.set(e, d), d.answer.then(f => {
    if (keptRuns.delete(e), finishedRuns_2.has(e) && HS(f ?? null) <= b) keptRuns.set(e, {
      ...d,
      stop: () => {},
      endedAt: o.now()
    });
  }, () => keptRuns.delete(e)), d.answer;
}
function l4s(n, e, r) {
  let {
      keptRuns: keptRuns_2,
      now: now
    } = zH.of(n),
    o = [...keptRuns_2].filter(([, a]) => a.endedAt !== void 0);
  o.forEach(([a, {
    endedAt = 0
  }], index) => {
    if (now() - endedAt > w || o.length - index > m) keptRuns_2.delete(a);
  });
  let u = keptRuns_2.get(e);
  return u?.call === r ? u : void 0;
}
function d4s(n, e) {
  let r = zH.of(n),
    s = r.runningRuns.get(e);
  if (s !== void 0) return {
    state: "running",
    since_ms: Math.round(r.now() - s)
  };
  if (r.finishedRuns.has(e)) return {
    state: "finished"
  };
  if (!r.barredRuns.has(e)) r.newestDropped = l(r.newestDropped, g(r.barredRuns, e, h, r.now()));
  return {
    state: "unknown",
    barred: !0
  };
}
function c4s(n, e) {
  return zH.of(n).barredRuns.has(e);
}
function u4s(n, e) {
  let {
    runningRuns: runningRuns_2,
    finishedRuns: finishedRuns_3
  } = zH.of(n);
  return runningRuns_2.has(e) || finishedRuns_3.has(e);
}
function f4s(n, e) {
  return zH.of(n).runningRuns.has(e);
}
function p4s(n, e) {
  return zH.of(n).runEnded.subscribe(e);
}
function m4s(n) {
  return [...zH.of(n).runningRuns.keys()];
}
function h4s(n) {
  let {
    newestDropped: newestDropped,
    now: now_2
  } = zH.of(n);
  return newestDropped === void 0 ? void 0 : Math.round(now_2() - newestDropped);
}
function g4s(n, e) {
  let {
    readFileState: readFileState,
    subagentReadFileStates: subagentReadFileStates
  } = zH.of(n);
  return e === void 0 ? readFileState : subagentReadFileStates.get(e);
}
function y4s(n, e) {
  let {
    readFileState: readFileState_2,
    subagentReadFileStates: subagentReadFileStates_2
  } = zH.of(n);
  if (e === void 0) return readFileState_2;
  let i = subagentReadFileStates_2.get(e) ?? c();
  subagentReadFileStates_2.delete(e), subagentReadFileStates_2.set(e, i);
  let [o] = subagentReadFileStates_2.keys();
  if (subagentReadFileStates_2.size > p && o !== void 0) subagentReadFileStates_2.delete(o), t(`[mcp serve] more than ${p} subagents: dropped the read record of ${o}`);
  return i;
}
export { zH, i4s, qMo, YMo, a4s, l4s, d4s, c4s, u4s, f4s, p4s, m4s, h4s, g4s, y4s };