// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  xn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  du
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Vm,
  dKe
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  Js
} from "B:/~BUN/root/chunk-yr3hf5bg.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  E7r,
  Gaa,
  Kaa,
  mCn,
  hCn,
  v_i,
  Tre,
  ePt,
  ncr,
  an,
  IOt,
  pW,
  kct,
  zfr,
  CEe,
  Ma,
  Ie,
  Bt,
  Vct,
  Xpr,
  j9t
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Bf
} from "B:/~BUN/root/chunk-sjvfcp1z.js";
import {
  lV,
  hRe
} from "B:/~BUN/root/chunk-n98vg3jf.js";
import {
  bq
} from "B:/~BUN/root/chunk-3qkmk2e4.js";
import {
  cft,
  jJt
} from "B:/~BUN/root/chunk-05q1awc0.js";
import {
  KT
} from "B:/~BUN/root/chunk-fc7k1zas.js";
import {
  qda,
  Jus
} from "B:/~BUN/root/chunk-4zhce32x.js";
import {
  d$,
  Zit,
  qG
} from "B:/~BUN/root/chunk-texv5y87.js";
import {
  Li
} from "B:/~BUN/root/chunk-zeshc0ep.js";
import {
  _w,
  xLt
} from "B:/~BUN/root/chunk-kd0f2gn5.js";
import {
  Q$n,
  cxr
} from "B:/~BUN/root/chunk-b37tyqej.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
var K = (e, o) => o ? {
  drop: o.resultText ?? "blocked by a UserPromptSubmit hook"
} : {
  text: e
};
import {
  randomUUID as Re
} from "crypto";
var Mqt = (e, o = "UserPromptSubmit") => an({
  type: "hook_additional_context",
  content: [...e],
  hookName: o,
  toolUseID: `hook-${Re()}`,
  hookEvent: "UserPromptSubmit"
});
var M = !0;
var U = (e, o) => ({
  messages: [{
    ...Bt(e, "warning", void 0, M),
    promptSubmitEnding: {
      ending: o,
      promptKept: !1
    }
  }],
  shouldQuery: !1,
  resultText: e
});

function X(e, o, r) {
  return r === !0 ? e : `${e}

Original prompt: ${o}`
}
var Dqt = {
  wasCancelled: !0
};
var N = (e) => e.wasCancelled === !0 && (e.blocked === void 0 || e.stopped !== void 0);
var I = (e, o, r) => N(e) ? Dqt : {
  ended: o,
  stopped: e.stopped,
  text: r,
  wasCancelled: e.wasCancelled
};
var q = () => U("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.", {
  kind: "no_verdict",
  noVerdictKind: "hooks_never_ran"
});

function Y(e) {
  let o = e.origin;
  return o?.kind === "plugin" && o.asUser !== !0 ? j9t(e.text, o.name, {
    midTurn: !1
  }) : e.text
}
var Z = (e, o, r) => ({
  proceeds: {
    text: e,
    sessionTitle: o,
    ...r !== void 0 && r.length > 0 && {
      context: r
    }
  }
});
var j = (e, o) => ({
  ...e,
  ...o?.length && {
    context: o
  }
});
var je = (e, o, r) => !e ? {
  ended: q()
} : e.blocked ? j(I(e, e.blocked, o.text), o.context) : {
  ...Z(Y(o), r, o.context),
  wasCancelled: e.wasCancelled
};
var ee = (e) => e.aborted;

function te(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0
}
var oe = "the turn was interrupted while the prompt was checked";
var re = (e) => e instanceof du;
var Ke = (e, o) => Js(e) === Js(o?.made);
var F = (e, o) => e || ee(o);
var ne = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var qia = (e, o) => e.plugins !== o.plugins;

function ie() {
  let e = new WeakMap,
    o = 0;
  return {
    of: (r) => {
      let n = e.get(r);
      if (n === void 0) o += 1, n = o, e.set(r, n);
      return n
    }
  }
}
var pe = ie();

function v() {
  let e = jJt("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([pe.of(cft.plugins()), e.map((r) => [r.plugin, r.generation])])
}
var r3r = (e, o) => ({
  ...Bt(e, "warning", void 0, M),
  promptSubmitEnding: {
    ending: o,
    promptKept: !0
  }
});
var me = (e) => e === void 0 ? dKe : `${dKe}: ${e}`;
var o3r = (e) => Ie({
  content: e,
  isMeta: !0
});
var ue = (e, o, r) => ({
  blocked: e,
  stopped: o,
  ...r && {
    wasCancelled: !0
  }
});
var ae = (e, o) => ncr({
  promptSource: e ?? "sdk",
  wakeupSource: o
});

function le(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== !0 && o.aborted
}
async function s3r({
  text: e,
  typed: o,
  context: r,
  result: n,
  promptSource: s,
  wakeupSource: m,
  tiers: u
}) {
  let g, d = r.abortController.signal.aborted,
    h = qG();
  try {
    for await (let i of IOt(e, se(r).mode, r, ae(s, m), u)) {
      if (i.message?.type === "progress") continue;
      if (le(i, r.abortController.signal)) d = !0;
      if (i.blockingError) {
        let a = F(d, r.abortController.signal),
          p = i.suppressOriginalPrompt === !0 || o !== e || d$(h) || Zit({
            isRunReached: !1
          }),
          f = i.blockingError.promptEnding;
        return {
          blocked: U(X(CEe(i.blockingError), e, p), f !== void 0 && "noVerdict" in f ? {
            kind: "no_verdict",
            noVerdictKind: f.noVerdict
          } : {
            kind: "blocked_by_hook",
            ...Xpr(f?.reason)
          }),
          ...a && {
            wasCancelled: !0
          }
        }
      }
      if (i.preventContinuation) {
        let a = me(i.stopReason);
        return n.messages = [...n.messages, o3r(a), r3r(a, {
          kind: "stopped_by_hook",
          ...Xpr(i.stopReason)
        })], n.shouldQuery = !1, n.resultText = a, n.allowedTools = void 0, ue(n, a, F(d, r.abortController.signal))
      }
      if (i.sessionTitle) g = i.sessionTitle;
      let b = i.additionalContexts;
      if (b !== void 0 && b.length > 0) n.messages = [...n.messages, Mqt(b)];
      let y = te(i.message);
      if (y) n.messages = [...n.messages, y]
    }
  } catch (i) {
    let R = Q$n(i, r.abortController.signal),
      b = !re(i);
    if (!R) throw i;
    t(b ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)")
  }
  return F(d, r.abortController.signal) ? {
    sessionTitle: g,
    wasCancelled: !0
  } : {
    sessionTitle: g
  }
}
var de = (e) => ({
  ...e,
  messages: [...e.messages],
  allowedTools: e.allowedTools && [...e.allowedTools]
});
var AYo = (e) => zfr(e) !== "" || v() !== "";
var i3r = () => Ae().loadedModules.some((e) => !bq(e.args.pluginStorageId) && Bf(e) && (e.hooks("prompt.submit") || e.hooks("classic.UserPromptSubmit")));
var ut = (e) => e === void 0 || e.hooks !== "" || ["prompt.submit", "classic.UserPromptSubmit"].some((o) => jJt(o).some((r) => r.tier !== "builtin"));
var Qit = (e) => ({
  permissionMode: se(e).mode,
  hooks: zfr(e),
  plugins: v(),
  hooksSkippedByTrust: pW()
});

function xYo(e, {
  latch: o
}) {
  let r, n = !1;
  return () => {
    if (n || o && r) return r;
    try {
      r = Qit(e())
    } catch (s) {
      r = void 0, n = o, t(`could not read what screens a prompt now: ${s}`, {
        level: "error"
      })
    }
    return r
  }
}
var rtr = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
var fe = (e, o) => ({
  scratch: e,
  blocked: o.blocked,
  sessionTitle: o.sessionTitle,
  stopped: o.stopped,
  wasCancelled: o.wasCancelled
});

function xt({
  typed: e,
  result: o,
  context: r,
  promptSource: n,
  wakeupSource: s
}) {
  let m, u, g = new Map,
    d = new Set;
  async function h(a, p) {
    let f = p.managedHooksExcluded === !0,
      T = de(f ? u?.scratch ?? o : o),
      c = fe(T, await s3r({
        text: a,
        typed: e,
        context: r,
        result: T,
        promptSource: n,
        wakeupSource: s,
        tiers: p
      }));
    return g.delete(a), g.set(a, c), c
  }

  function i(a, p) {
    let f = h(a, p);
    return d.add(f), f.finally(() => d.delete(f))
  }
  async function R() {
    while (d.size > 0) await Promise.allSettled([...d])
  }

  function b() {
    let [a, p] = [...g].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? a : void 0
  }
  async function _(a) {
    let p = await i(a, kct);
    return u = p, m = p.sessionTitle ?? m, p
  }

  function y(a) {
    let p = g.get(a);
    if (!p) return;
    return o.messages = p.scratch.messages, o.allowedTools = p.scratch.allowedTools, o.shouldQuery = p.scratch.shouldQuery, o.resultText = p.scratch.resultText, m = p.sessionTitle ?? m, p
  }
  return {
    managed: _,
    pass: i,
    commit: y,
    settled: R,
    blockedText: b,
    managedRun: () => u,
    sessionTitle: () => m
  }
}
var ce = ({
  submission: e,
  attachments: o,
  origin: r,
  turnId: n,
  shouldWait: s
}) => ({
  text: e.text,
  wait: s,
  ...o.length > 0 && {
    attachments: o
  },
  origin: r,
  ...n !== void 0 && {
    turnId: n
  },
  ...e.command !== void 0 && {
    command: e.command
  },
  ...e.isMeta === !0 && {
    isMeta: e.isMeta
  }
});

function Yia(e) {
  let o = !1;
  return {
    origin: e?.origin,
    settle(r) {
      o = !0, e?.settle(r)
    },
    settleWhen(r) {
      o = !0, r.then((n) => e?.settle(n), () => e?.settle({
        drop: ne
      }))
    },
    [Symbol.dispose]() {
      if (!o) o = !0, e?.settle({
        drop: ne
      })
    }
  }
}

function ge(e, o) {
  let r = Li("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o)
}

function xe(e, o) {
  let r = new Set(o ?? []);
  for (let n of e.toSorted((s, m) => m.index - s.index)) {
    let s = n.returned,
      m = D(s) ? s.context : void 0,
      u = (lV(m) ?? []).filter((d) => !r.has(d));
    if (u.length === 0) continue;
    for (let d of u) r.add(d);
    let g = u.reduce((d, h) => d + h.length, 0);
    t(`prompt.submit: ${n.plugin} put ${u.length} context ${u.length===1?"entry":"entries"} (${g} characters) on its result after next(); not attached, the prompt had entered`, {
      level: "warn"
    })
  }
}
async function otr({
  submission: e,
  origin: o,
  bridgeOrigin: r,
  mode: n,
  turnId: s,
  shouldWait: m,
  context: u,
  result: g,
  promptSource: d,
  wakeupSource: h,
  queued: i,
  isStartInput: R,
  enter: b,
  bound: _
}) {
  if (!R) await Tre.get();
  _?.();
  let {
    signal: y
  } = u.abortController, a = xYo(() => u, {
    latch: !1
  }), p = () => ut(a()) || i3r(), f = p(), T = () => f || p();
  if (f && y.aborted) return i?.settle({
    drop: oe
  }), Dqt;
  let c = xt({
      typed: e.text,
      result: g,
      context: u,
      promptSource: d,
      wakeupSource: h
    }),
    A = hCn(E7r),
    {
      unplaceable: H
    } = e,
    O = Kaa(async (l, x) => {
      if (H !== void 0 && l !== e.text) return {
        drop: H
      };
      let k = await (x.managedHooksOnly ? c.managed(l) : c.pass(l, x));
      if (N(k) && T()) throw hRe(y);
      return K(l, k.blocked)
    }, A.perform),
    L, B = await cxr(mCn(A, qda(Jus(e.input, e.pastedContents), u.options.mainLoopModel, (l) => ePt({
      signal: y,
      origin: i?.origin,
      core: {
        "prompt.submit": O.core
      },
      managed: {
        "prompt.submit": O.managed
      },
      trace: (x) => {
        if (L) xe(x, L.context)
      }
    }).prompt.submit(ce({
      submission: e,
      attachments: l,
      origin: v_i({
        origin: o,
        bridgeOrigin: r,
        wakeupSource: h,
        mode: n,
        promptSource: d
      }),
      turnId: s,
      shouldWait: m
    })))), y);
  if (B === void 0) {
    await c.settled();
    let l = c.blockedText(),
      x = l === void 0 ? void 0 : c.commit(l),
      E = x?.blocked,
      k = l !== void 0 && x !== void 0 && E !== void 0;
    return t("prompt.submit: interrupted while a hook checked the prompt: " + (k ? "the block given beneath it stands" : "no verdict")), i?.settle(k ? K(l, E) : {
      drop: oe
    }), k ? j(I(x, E, l), O.arrivedContext()) : Dqt
  }
  if (B.arrived) {
    let l = B.arrived;
    if (L = l, l.text !== e.text) t(`prompt.submit: text rewritten by a hook (${e.text.length} -> ${l.text.length} chars)`);
    let x = je(c.commit(l.text), l, c.sessionTitle()),
      k = x.wasCancelled === !0 && T() && x.proceeds ? Dqt : x,
      J = ge(b, k);
    return i?.settleWhen(J.then(() => l)), J.then(() => A.done(l), (Se) => A.failed(Se)), k
  }
  let C = B.answered,
    S = O.runs.last(),
    G = Gaa(C, S?.made);
  t(`prompt.submit: dropped (${G.drop})`), i?.settle(G);
  let V = c.managedRun();
  if (V?.blocked) return c.commit(e.text), I(V, V.blocked, e.text);
  if (H !== void 0 && S?.made.drop === H) return {
    ended: U(H, {
      kind: "no_verdict",
      noVerdictKind: "rewrite_unplaceable"
    })
  };
  let w = S ? c.commit(S.input) : void 0,
    Q = w?.blocked,
    ke = C.drop !== void 0 && S !== void 0 && !Ke(C, S),
    he = O.arrivedContext();
  if (S !== void 0 && w !== void 0 && Q !== void 0 && !ke) return j(I(w, Q, S.input), he);
  if (y.aborted && (w?.blocked === void 0 || N(w)) && T()) return Dqt;
  let z = C.drop !== void 0;
  return {
    ended: U(z ? `Prompt dropped by a hook: ${Vct(C.drop)}` : `Prompt not submitted: ${E7r}`, z ? {
      kind: "dropped_by_hook",
      ...Xpr(C.drop)
    } : {
      kind: "not_passed_on"
    })
  }
}

function j6e() {
  return KT() && !xn()
}

function Ct(e, o) {
  if (!e) return "idle-fork";
  return o ? "defer-then-fork" : "abort-then-fork"
}

function Ut(e) {
  let {
    inFlight: o
  } = e;
  if (e.isBg) return {
    ok: !0,
    via: "detach",
    inFlight: o
  };
  if (!e.fleetEnabled) return {
    ok: !1,
    reason: "fleet-disabled",
    inFlight: o
  };
  if (e.isRemote) return {
    ok: !1,
    reason: "remote",
    inFlight: o
  };
  if (e.persistenceDisabled) return {
    ok: !1,
    reason: "persistence",
    inFlight: o
  };
  if (e.isExternalLoading) return {
    ok: !1,
    reason: "loading",
    inFlight: o
  };
  return {
    ok: !0,
    via: Ct(e.isLoading, e.betweenCalls),
    inFlight: o
  }
}

function str(e, o) {
  return !o && !Ht(e)
}

function Ht(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return !1
  }
  return !1
}

function a3r(e) {
  let o = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let n = e[r];
    if (n.type === "assistant") {
      if (n.message?.stop_reason !== null) return o;
      for (let s of n.message?.content ?? [])
        if (s.type === "text" && typeof s.text === "string") o += s.text.length
    } else if (n.type === "user") return o
  }
  return o
}

function l3r(e, o) {
  let r = e.length;
  for (let s = e.length - 1; s >= 0; s--) {
    let m = e[s];
    if (m.type === "assistant") {
      if (m.message?.stop_reason !== null) break;
      r = s
    } else if (m.type === "user") break
  }
  let n = "";
  for (let s = r; s < e.length; s++) {
    let m = e[s];
    if (m.type !== "assistant") continue;
    for (let u of m.message?.content ?? [])
      if (u.type === "text" && typeof u.text === "string") n += u.text
  }
  return n + (o ?? "")
}

function itr(e) {
  let o, r = !1;
  return (n) => {
    if (r) return !0;
    try {
      return o ??= Qit(e()), rtr(n.under, o)
    } catch (s) {
      return r = !0, t(`heldScreening could not read the screening: ${s}`, {
        level: "error"
      }), !0
    }
  }
}

function d3r(e, o) {
  let r = 0;
  for (let n of e) {
    if (xLt(n)) continue;
    if (n.priority === "later" || n.drainOnly === !0 || n.screeningPending === !0 || n.promptSubmitted !== void 0 && o !== void 0 && o(n.promptSubmitted) || n.mode === "bash" || n.mode === "poll-event" || _w(n.value) && !n.skipSlashCommands) r++
  }
  return r
}

function Nli(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${P(e,"subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e===1?"it":"them"} from the beginning.`
}

function BSn(e, o) {
  return `Backgrounding cancelled \u2014 ${e}.${o===void 0?"":` ${o}`}`
}
var atr = BSn("you have unsent text in the input", "Send it or clear it, then press \u2190 again."),
  Fli = "Still backgrounding after the current tool \u2014 a question is waiting for your answer.",
  c3r = BSn("the turn was stopped");

function be(e) {
  if (e.type !== "user") return !1;
  let o = e.message?.content;
  return Array.isArray(o) && o[0]?.type === "tool_result" && o.every((r) => r.type === "tool_result" || r.type === "text" || r.type === "image")
}

function Ot(e) {
  if (e.type === "system") return !0;
  if (e.type === "assistant") {
    if (e.isApiErrorMessage === !0) return !1;
    let o = e.message?.stop_reason;
    return o === null || o === "tool_use"
  }
  if (e.type === "user") return Vm(e);
  return !1
}

function Lqt(e) {
  let o = e.length,
    r = !1;
  while (o > 0) {
    let s = e[o - 1];
    if (s.type === "user")
      if (Vm(s)) r ||= be(s);
      else if (r && be(s));
    else break;
    else if (s.type === "assistant") {
      if (!Ot(s)) break;
      r = !1
    }
    o--
  }
  let n = e.slice(o).filter((s) => s.type !== "user" && s.type !== "assistant" && s.type !== "system");
  if (o + n.length === e.length) return e;
  return [...e.slice(0, o), ...n]
}

function jSn(e) {
  let o = Lqt(e);
  for (let r = o.length - 1; r >= 0; r--) {
    let n = o[r].type;
    if (n === "user" || n === "assistant") return o[r].uuid
  }
  return
}

function Hli(e, o) {
  if (e === null || e.length < 1 || e.length > o.length) return !1;
  let r = e.length - 1;
  if (o[r]?.uuid !== e.uuid) return !1;
  for (let n = e.length; n < o.length; n++) {
    let s = o[n].type;
    if (s === "user" || s === "assistant") return !1
  }
  return !0
}

function ltr(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "user") return !Vm(r);
    if (r.type === "assistant") return !1
  }
  return !1
}

function dtr(e) {
  return e.ok && e.via !== "detach"
}

function Nqt(e) {
  return Ut({
    ...e,
    fleetEnabled: KT(),
    isRemote: xn(),
    persistenceDisabled: Ma()
  })
}
export {
  Mqt,
  Dqt,
  qia,
  r3r,
  o3r,
  s3r,
  AYo,
  i3r,
  Qit,
  xYo,
  rtr,
  Yia,
  otr,
  j6e,
  str,
  a3r,
  l3r,
  itr,
  d3r,
  Nli,
  BSn,
  atr,
  Fli,
  c3r,
  Lqt,
  jSn,
  Hli,
  ltr,
  dtr,
  Nqt
};
