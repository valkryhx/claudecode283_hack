// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Xn, $l } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { _n, jd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { _en } from "B:/~BUN/root/chunk-by464w4q.js";
import { Jue, NL } from "B:/~BUN/root/chunk-hr1m6fe3.js";
import { iNn } from "B:/~BUN/root/chunk-dgabw6gm.js";
import { Smo } from "B:/~BUN/root/chunk-jbe9wwex.js";
import { Nq } from "B:/~BUN/root/chunk-nwbzcxqm.js";
import { _c } from "B:/~BUN/root/chunk-kd0f2gn5.js";
var v = "main";
function j(t) {
  return iNn(t) && _c(t);
}
function G(t) {
  return t.mode === "poll-event" && t.pollEvent?.kind === Jue && _c(t);
}
function x(t) {
  t.setPassive?.(j, !0), NL(t.removeByFilter(G), "a stop ended the scripts this status line describes");
}
var _mo = 8;
class q {
  context = void 0;
  running = new Set();
  attached = void 0;
  deliveryChain = Promise.resolve();
  depth = 0;
  pending = new Map();
  ranEvals = !1;
  epoch = 0;
  conversation = 0;
  holdReportsEpoch = 0;
  declined = void 0;
  rewoundToolUses = new Set();
  kept = void 0;
  evalIdByToolUseId = new Map();
  ticks = De();
  unwaited = new Set();
  undelivered = new Set();
  statusLineGiven = !1;
  settling = new Map();
  onRunningChange = () => {};
  runningCache = {
    at: -1,
    value: new Map()
  };
  runningChanges = 0;
}
var z = 100,
  F = 50,
  X = 256,
  bmo = {
    list: () => [],
    abort: () => le() ? "no such eval" : ""
  };
class bue {
  #e = new Map();
  #d = 1;
  #t = 0;
  #i = 0;
  #r = De();
  #a = De();
  #l = new WeakMap();
  takeScriptNumber() {
    return this.#d++;
  }
  dispatch(t, n, i, r = "") {
    if (!le()) throw Error("unreachable");
    let e = this.#n(t);
    if (e.depth >= _mo) throw new R(`async REPL dispatch rejected: ${e.depth} evals already waiting or running on this context \u2014 wait for their settles (Poll) before dispatching more`, "async REPL dispatch rejected: unsettled evals cap");
    let evalId = this.#d++,
      {
        epoch: epoch,
        conversation: conversation
      } = e,
      retired = () => e.conversation !== conversation && e.kept?.(evalId) !== !0 || i.toolUseId !== void 0 && e.rewoundToolUses.has(i.toolUseId),
      S = () => e.holdReportsEpoch > epoch;
    if (i.toolUseId !== void 0) {
      if (e.evalIdByToolUseId.set(i.toolUseId, evalId), e.evalIdByToolUseId.size > X) {
        for (let [u, c] of e.evalIdByToolUseId) if (!e.pending.has(c) && !e.settling.has(c)) {
          e.evalIdByToolUseId.delete(u);
          break;
        }
      }
    }
    e.ranEvals = !0, e.depth++;
    let g = 2,
      T = () => {},
      B = new Promise(u => {
        T = u;
      }),
      w = () => {
        if (g--, g === 0) T();
      },
      D = () => {
        e.unwaited.delete(evalId), e.undelivered.delete(evalId), e.settling.delete(evalId), f(e), w();
      },
      d = {
        startedAt: void 0,
        detached: !1,
        description: i.description,
        replyId: i.replyId,
        snippet: r.replace(/\s+/g, " ").trim().slice(0, z),
        controller: void 0,
        abortRequested: void 0,
        epoch: e.epoch,
        late: void 0,
        ticks: new Map(),
        finished: new Set(),
        callReturned: !1,
        readNotYetStarted: void 0,
        left: () => {
          i.signal.removeEventListener("abort", A), w();
        },
        retired: retired,
        stopped: new AbortController()
      };
    function A() {
      if (!_en(i.signal.reason)) d.stopped.abort();
    }
    if (i.signal.aborted) A();else i.signal.addEventListener("abort", A, {
      once: !0
    });
    if (e.declined !== void 0) if (i.replyId !== void 0 && e.declined.replyIds.has(i.replyId)) d.stopped.abort(e.declined.reason), d.abortRequested = "declined";else e.declined = void 0;
    e.pending.set(evalId, d), e.unwaited.add(evalId), e.undelivered.add(evalId), e.statusLineGiven = !1, f(e), this.#s(this.#t + 1);
    let H = e.attached ?? Promise.resolve(),
      b = () => {},
      promise = new Promise(u => {
        b = u;
      });
    e.attached = promise, promise.then(() => {
      if (e.attached === promise) e.attached = void 0;
    });
    let M = !1,
      V = async () => {
        let u,
          c = !1,
          m,
          k = () => i.signal.aborted && !_en(i.signal.reason);
        if (k()) c = !0, m = "person", u = "cancelled before start \u2014 the dispatching turn was aborted while this eval waited for its turn; the script never ran";else if (e.epoch !== epoch) c = !0, m = "person", u = "cancelled before start \u2014 the session was interrupted while this eval waited for its turn; the script never ran";else if (d.abortRequested !== void 0) c = !0, m = d.abortRequested === "person" ? "person" : "other", u = d.abortRequested === "person" ? "cancelled before start \u2014 the user stopped this eval while it waited for its turn; the script never ran" : d.abortRequested === "declined" ? "cancelled before start \u2014 the user declined the permission dialog for an earlier script's call (a No or an Esc), which also cancels the scripts behind that one; the script never ran" : d.abortRequested === "taskStop" ? "cancelled before start \u2014 a TaskStop call stopped this eval while it waited for its turn; the script never ran" : d.abortRequested === "session" ? "cancelled before start \u2014 Claude Code stopped this eval while it waited for its turn; the script never ran" : "cancelled before start \u2014 a script aborted this eval (self.running().abort()) while it waited for its turn; it never ran";else {
          if (_n()) await jd();
          let h = Xn(),
            I,
            _ = !1,
            P = () => {
              if (_) return;
              clearTimeout(I), d.detached = !0, b();
            },
            L = () => {
              if (k()) h.abort(i.signal.reason);else if (i.staysAttachedOnTurnAbort !== !0) P();
            };
          if (i.signal.aborted) L();else i.signal.addEventListener("abort", L, {
            once: !0
          });
          if (e.running.add(h), d.startedAt = Date.now(), f(e), d.controller = h, !d.detached) I = setTimeout(P, i.detachAfterMs);
          try {
            u = await n(h, {
              reportNotYetStarted: E => {
                d.readNotYetStarted = E;
              }
            });
          } catch (error) {
            c = !0, u = Nq(error) ? error.message : "host-side failure before settling (non-Error rejection; detail withheld from coercion)";
          } finally {
            _ = !0, clearTimeout(I), e.running.delete(h);
          }
        }
        M = !0, this.#p(t, evalId, u, c, i, b, retired, D, S, m);
      },
      O = H.then(async () => {
        try {
          await V();
        } finally {
          if (!M) this.#s(this.#t - 1), b(), D();
        }
      });
    O.catch(a);
    let finished = O.then(() => {}, () => {}).then(() => {
      if (e.depth--, d.late === void 0) Y(e, evalId, d);
      f(e);
    });
    return {
      evalId: evalId,
      finished: finished,
      retired: retired,
      ended: B,
      stopped: d.stopped.signal
    };
  }
  pending(t, n = Date.now()) {
    if (!le()) return [];
    return this.ledger(t, n).filter(item => item.state !== "late");
  }
  ledger(t, n = Date.now()) {
    if (!le()) return [];
    let i = this.#e.get(t);
    if (i === void 0) return [];
    return [...i.pending].map(([id, e]) => ({
      id: id,
      state: e.late !== void 0 ? "late" : e.startedAt === void 0 ? "waiting" : e.detached ? "detached" : "running",
      runningMs: e.startedAt === void 0 ? 0 : n - e.startedAt,
      snippet: e.snippet,
      notYetStarted: e.readNotYetStarted?.() ?? []
    }));
  }
  holdLate(t, n, i) {
    if (!le()) {
      i.abort();
      return;
    }
    let r = this.#e.get(t),
      e = r?.pending.get(n);
    if (r === void 0 || e === void 0 || e.late !== void 0) {
      i.abort();
      return;
    }
    e.late = {
      abort: i.abort,
      discard: i.discard
    }, e.ticks.clear(), e.finished.clear(), f(r), this.#c(this.#i + 1);
    let o = () => this.#o(r, n, e);
    i.idle.then(o, o);
  }
  #o(t, n, i) {
    if (t.pending.get(n) !== i) return;
    Y(t, n, i), f(t), this.#c(this.#i - 1);
  }
  stopAskerOf(t) {
    return this.#l.get(t);
  }
  recordTick(t, evalId_2, i) {
    if (!le()) return;
    let r = this.#e.get(t),
      e = r?.pending.get(evalId_2);
    if (r === void 0 || e === void 0) return;
    let tick;
    try {
      tick = Smo(i);
    } catch {
      return;
    }
    if (e.ticks.set(tick.toolUseId, tick), J(tick)) {
      if (e.finished.add(tick.toolUseId), e.finished.size > F) {
        let l = e.finished.values().next().value;
        if (l !== void 0) e.finished.delete(l), e.ticks.delete(l);
      }
    } else e.finished.delete(tick.toolUseId);
    if (e.callReturned && e.startedAt !== void 0) Q(r, {
      evalId: evalId_2,
      startedAt: e.startedAt,
      tick: tick
    });
  }
  callReturned(t, evalId_3) {
    if (!le()) return;
    let i = this.#e.get(t),
      r = i?.pending.get(evalId_3);
    if (i === void 0 || r === void 0 || r.callReturned) return;
    if (r.callReturned = !0, r.startedAt === void 0) return;
    for (let tick_2 of r.ticks.values()) Q(i, {
      evalId: evalId_3,
      startedAt: r.startedAt,
      tick: tick_2
    });
  }
  ticks(t) {
    if (!le()) return [];
    let n = this.#e.get(t);
    if (n === void 0) return [];
    let i = [];
    for (let [evalId_4, e] of n.pending) {
      if (!e.callReturned || e.startedAt === void 0) continue;
      for (let tick_3 of e.ticks.values()) i.push({
        evalId: evalId_4,
        startedAt: e.startedAt,
        tick: tick_3
      });
    }
    return i;
  }
  takeUnwaited(t, n) {
    if (!le()) return [];
    let i = this.#e.get(t);
    if (i === void 0) return [];
    let r = [...i.unwaited].filter(item => n?.has(item) ?? !0);
    for (let e of r) i.unwaited.delete(e);
    return r;
  }
  noteStatusLine(t) {
    if (!le()) return;
    this.#n(t).statusLineGiven = !0;
  }
  takeStatusLineGiven(t) {
    if (!le()) return !1;
    let n = this.#e.get(t);
    if (n === void 0) return !1;
    let statusLineGiven = n.statusLineGiven;
    return n.statusLineGiven = !1, statusLineGiven;
  }
  undelivered(t) {
    if (!le()) return U;
    return this.#e.get(t)?.undelivered ?? U;
  }
  runningScripts(t) {
    if (!le()) return N;
    let n = this.#e.get(t);
    if (n === void 0) return N;
    if (n.runningCache.at === n.runningChanges) return n.runningCache.value;
    let value = new Map();
    for (let [r, evalId_5] of n.evalIdByToolUseId) {
      let o = n.pending.get(evalId_5),
        l = o ?? n.settling.get(evalId_5);
      if (l === void 0 || o !== void 0 && (o.epoch !== n.epoch || o.retired())) continue;
      value.set(r, {
        evalId: evalId_5,
        description: l.description,
        startedAt: l.startedAt,
        late: o?.late !== void 0 && !n.undelivered.has(evalId_5)
      });
    }
    return n.runningCache = {
      at: n.runningChanges,
      value: value
    }, value;
  }
  onRunningScriptsChange(t) {
    if (!le()) return () => {};
    return this.#a.subscribe(t);
  }
  onTick(t, n) {
    if (!le()) return () => {};
    return this.#n(t).ticks.subscribe(n);
  }
  abort(t, n, i = "script") {
    if (!le()) return "";
    let r = this.#e.get(t),
      e = r?.pending.get(n);
    if (r === void 0 || e === void 0) return "no such eval (it may have settled already)";
    if (e.stopped.abort(), e.late !== void 0) e.late.abort(), this.#o(r, n, e);else if (e.controller !== void 0) {
      if (i !== "person" && !e.controller.signal.aborted) this.#l.set(e.controller.signal, i);
      e.controller.abort($l("user-cancel"));
    } else e.abortRequested = i;
    return "";
  }
  cancelWaiting(t, reason, i) {
    if (!le()) return;
    let r = this.#e.get(t);
    if (r === void 0) return;
    let replyIds = r.declined?.replyIds ?? new Set();
    replyIds.add(i), r.declined = {
      reason: reason,
      replyIds: replyIds
    };
    for (let o of r.pending.values()) if (o.controller === void 0 && o.abortRequested === void 0) {
      if (o.stopped.abort(reason), o.abortRequested = "declined", o.replyId !== void 0) replyIds.add(o.replyId);
    }
  }
  access(t, n) {
    if (!le()) return bmo;
    return {
      list: () => {
        let i = n();
        return this.ledger(t).map(item => ({
          ...item,
          self: item.id === i
        }));
      },
      abort: i => this.abort(t, i)
    };
  }
  outstanding(t) {
    if (t === void 0) return this.#t + this.#i;
    let n = this.#e.get(t);
    if (n === void 0) return 0;
    let i = 0;
    for (let r of n.pending.values()) if (r.late !== void 0) i++;
    return n.undelivered.size + i;
  }
  unsettled(t) {
    if (t === void 0) return this.#t;
    return this.#e.get(t)?.undelivered.size ?? 0;
  }
  #u;
  mainThreadStoppableWork() {
    return this.#u ??= {
      outstanding: () => this.outstanding(v),
      stoppable: () => this.stoppable([v]),
      onOutstandingChange: t => this.onOutstandingChange(t),
      interrupt: () => {
        this.interrupt([v]);
      }
    }, this.#u;
  }
  stoppable(t) {
    if (!le()) return 0;
    let n = t === void 0 ? void 0 : new Set(t),
      i = 0;
    for (let [r, e] of this.#e) {
      if (n !== void 0 && !n.has(r)) continue;
      for (let o of e.pending.values()) if (o.epoch === e.epoch && !o.abortRequested && o.controller?.signal.aborted !== !0) i++;
    }
    return i;
  }
  onOutstandingChange(t) {
    return this.#r.subscribe(t);
  }
  #s(t) {
    this.#t = t, this.#r.emit();
  }
  #c(t) {
    this.#i = t, this.#r.emit();
  }
  depth(t) {
    return this.#e.get(t)?.depth ?? 0;
  }
  attached(t) {
    return this.#e.get(t)?.attached;
  }
  #p(t, n, i, r, e, o, l, y, p, S) {
    if (!le()) return;
    let g = this.#n(t);
    g.deliveryChain = g.deliveryChain.then(() => e.deliver(n, i, r, l(), p, S)).catch(a).finally(() => {
      o(), this.#s(this.#t - 1), y();
    });
  }
  clear(t, keepsNamed) {
    let i = t === void 0 ? void 0 : Array.from(t);
    for (let r of this.#f(i)) if (r.conversation++, r.kept = keepsNamed, le()) for (let e of r.pending.values()) e.late?.discard();
    this.interrupt(i, {
      keepsNamed: keepsNamed
    });
  }
  dropRewound(t, n) {
    let i = this.#e.get(t);
    if (i === void 0) return;
    for (let r of n) {
      i.rewoundToolUses.add(r);
      let e = i.evalIdByToolUseId.get(r);
      if (e !== void 0) i.settling.delete(e);
    }
    f(i);
  }
  tracks(t, n) {
    let i = this.#e.get(t);
    return i !== void 0 && (i.pending.has(n) || i.undelivered.has(n) || i.settling.has(n));
  }
  evalIdsOf(t, n) {
    let i = this.#e.get(t)?.evalIdByToolUseId,
      r = new Set();
    if (i === void 0) return r;
    for (let e of n) {
      let o = i.get(e);
      if (o !== void 0) r.add(o);
    }
    return r;
  }
  interrupt(t, {
    holdReportsIn: holdReportsIn,
    keepsNamed: keepsNamed_2
  } = {}) {
    let r = t === void 0 ? void 0 : Array.from(t);
    for (let e of this.#f(r)) {
      if (e.epoch++, e.statusLineGiven = !1, holdReportsIn !== void 0) e.holdReportsEpoch = e.epoch;
      for (let o of e.running) o.abort($l("user-cancel"));
      for (let o of e.settling.keys()) if (keepsNamed_2?.(o) !== !0) e.settling.delete(o);
      if (f(e), le()) {
        for (let [o, l] of e.pending) if (l.stopped.abort(), l.late !== void 0) l.late.abort(), this.#o(e, o, l);
      }
      e.context?.clearAllTimers(), e.declined = void 0;
    }
    if (le() && holdReportsIn !== void 0 && (r === void 0 || r.includes(v))) x(holdReportsIn);
    this.#r.emit();
  }
  #f(t) {
    return t === void 0 ? this.#e.values() : Array.from(t, n => this.#e.get(n)).filter(item => item !== void 0);
  }
  get(t) {
    return this.#e.get(t)?.context;
  }
  has(t) {
    return this.#e.get(t)?.context !== void 0;
  }
  set(t, n) {
    this.#n(t).context = n;
  }
  release(t) {
    let n = this.#e.get(t);
    if (n?.context === void 0) return !1;
    if (n.context.clearAllTimers(), n.context = void 0, !n.ranEvals) this.#e.delete(t);
    return !0;
  }
  forget(t) {
    let n = this.#e.get(t);
    if (n === void 0) return;
    let i = () => n.depth === 0 && n.pending.size === 0 && n.undelivered.size === 0 && n.settling.size === 0,
      r = () => this.#e.get(t) === n && n.context === void 0,
      onRunningChange = n.onRunningChange,
      o = () => {
        if (!r() || i()) n.onRunningChange = onRunningChange;
        if (r() && i()) n.deliveryChain.finally(() => {
          if (r() && i()) this.#e.delete(t);
        });
      };
    n.onRunningChange = () => {
      onRunningChange(), o();
    }, o();
  }
  #n(t) {
    let n = this.#e.get(t);
    if (n === void 0) n = new q(), n.onRunningChange = () => this.#a.emit(), this.#e.set(t, n);
    return n;
  }
}
function FSa(t) {
  return t.mainThreadStoppableWork();
}
function Sue(t) {
  return t.toolState.get(bue);
}
function J(t) {
  return t.phase === "complete" || t.phase === "error";
}
var N = new Map(),
  U = new Set();
function Y(t, n, i) {
  if (t.pending.delete(n), i.left(), i.startedAt !== void 0 && !i.stopped.signal.aborted && !i.retired() && t.undelivered.has(n)) t.settling.set(n, {
    description: i.description,
    startedAt: i.startedAt
  });
}
function f(t) {
  t.runningChanges++, t.onRunningChange();
}
function Q(t, n) {
  try {
    t.ticks.emit(n);
  } catch (error) {
    a(error);
  }
}
export { _mo, bmo, bue, FSa, Sue };