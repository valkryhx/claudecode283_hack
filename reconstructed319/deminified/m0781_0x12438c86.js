// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { du } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Vm, dKe } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Js } from "B:/~BUN/root/chunk-yr3hf5bg.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { E7r, Gaa, Kaa, mCn, hCn, v_i, Tre, ePt, ncr, an, IOt, pW, kct, zfr, CEe, Ma, Ie, Bt, Vct, Xpr, j9t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Bf } from "B:/~BUN/root/chunk-sjvfcp1z.js";
import { lV, hRe } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { bq } from "B:/~BUN/root/chunk-3qkmk2e4.js";
import { cft, jJt } from "B:/~BUN/root/chunk-05q1awc0.js";
import { KT } from "B:/~BUN/root/chunk-fc7k1zas.js";
import { qda, Jus } from "B:/~BUN/root/chunk-4zhce32x.js";
import { d$, Zit, qG } from "B:/~BUN/root/chunk-texv5y87.js";
import { Li } from "B:/~BUN/root/chunk-zeshc0ep.js";
import { _w, xLt } from "B:/~BUN/root/chunk-kd0f2gn5.js";
import { Q$n, cxr } from "B:/~BUN/root/chunk-b37tyqej.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var K = (text, o) => o ? {
  drop: o.resultText ?? "blocked by a UserPromptSubmit hook"
} : {
  text: text
};
import { randomUUID as Re } from "crypto";
var Mqt = (e, hookName = "UserPromptSubmit") => an({
  type: "hook_additional_context",
  content: [...e],
  hookName: hookName,
  toolUseID: `hook-${Re()}`,
  hookEvent: "UserPromptSubmit"
});
var M = !0;
var U = (resultText, ending) => ({
  messages: [{
    ...Bt(resultText, "warning", void 0, M),
    promptSubmitEnding: {
      ending: ending,
      promptKept: !1
    }
  }],
  shouldQuery: !1,
  resultText: resultText
});
function X(e, o, r) {
  return r === !0 ? e : `${e}

Original prompt: ${o}`;
}
var Dqt = {
  wasCancelled: !0
};
var N = e => e.wasCancelled === !0 && (e.blocked === void 0 || e.stopped !== void 0);
var I = (e, ended, text_2) => N(e) ? Dqt : {
  ended: ended,
  stopped: e.stopped,
  text: text_2,
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
  }) : e.text;
}
var Z = (text_3, sessionTitle, context) => ({
  proceeds: {
    text: text_3,
    sessionTitle: sessionTitle,
    ...(context !== void 0 && context.length > 0 && {
      context: context
    })
  }
});
var j = (e, context_2) => ({
  ...e,
  ...(context_2?.length && {
    context: context_2
  })
});
var je = (e, o, r) => !e ? {
  ended: q()
} : e.blocked ? j(I(e, e.blocked, o.text), o.context) : {
  ...Z(Y(o), r, o.context),
  wasCancelled: e.wasCancelled
};
var ee = e => e.aborted;
function te(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}
var drop_2 = "the turn was interrupted while the prompt was checked";
var re = e => e instanceof du;
var Ke = (e, o) => Js(e) === Js(o?.made);
var F = (e, o) => e || ee(o);
var drop = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var qia = (e, o) => e.plugins !== o.plugins;
function ie() {
  let weakMap = new WeakMap(),
    o = 0;
  return {
    of: r => {
      let n = weakMap.get(r);
      if (n === void 0) o += 1, n = o, weakMap.set(r, n);
      return n;
    }
  };
}
var pe = ie();
function v() {
  let e = jJt("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([pe.of(cft.plugins()), e.map(item => [item.plugin, item.generation])]);
}
var r3r = (e, ending_2) => ({
  ...Bt(e, "warning", void 0, M),
  promptSubmitEnding: {
    ending: ending_2,
    promptKept: !0
  }
});
var me = e => e === void 0 ? dKe : `${dKe}: ${e}`;
var o3r = content => Ie({
  content: content,
  isMeta: !0
});
var ue = (blocked, stopped, r) => ({
  blocked: blocked,
  stopped: stopped,
  ...(r && {
    wasCancelled: !0
  })
});
var ae = (e, wakeupSource) => ncr({
  promptSource: e ?? "sdk",
  wakeupSource: wakeupSource
});
function le(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== !0 && o.aborted;
}
async function s3r({
  text: text_4,
  typed: typed,
  context: context_3,
  result: result,
  promptSource: promptSource,
  wakeupSource: wakeupSource_2,
  tiers: tiers
}) {
  let sessionTitle_2,
    d = context_3.abortController.signal.aborted,
    h = qG();
  try {
    for await (let i of IOt(text_4, se(context_3).mode, context_3, ae(promptSource, wakeupSource_2), tiers)) {
      if (i.message?.type === "progress") continue;
      if (le(i, context_3.abortController.signal)) d = !0;
      if (i.blockingError) {
        let a = F(d, context_3.abortController.signal),
          p = i.suppressOriginalPrompt === !0 || typed !== text_4 || d$(h) || Zit({
            isRunReached: !1
          }),
          promptEnding = i.blockingError.promptEnding;
        return {
          blocked: U(X(CEe(i.blockingError), text_4, p), promptEnding !== void 0 && "noVerdict" in promptEnding ? {
            kind: "no_verdict",
            noVerdictKind: promptEnding.noVerdict
          } : {
            kind: "blocked_by_hook",
            ...Xpr(promptEnding?.reason)
          }),
          ...(a && {
            wasCancelled: !0
          })
        };
      }
      if (i.preventContinuation) {
        let a = me(i.stopReason);
        return result.messages = [...result.messages, o3r(a), r3r(a, {
          kind: "stopped_by_hook",
          ...Xpr(i.stopReason)
        })], result.shouldQuery = !1, result.resultText = a, result.allowedTools = void 0, ue(result, a, F(d, context_3.abortController.signal));
      }
      if (i.sessionTitle) sessionTitle_2 = i.sessionTitle;
      let additionalContexts = i.additionalContexts;
      if (additionalContexts !== void 0 && additionalContexts.length > 0) result.messages = [...result.messages, Mqt(additionalContexts)];
      let y = te(i.message);
      if (y) result.messages = [...result.messages, y];
    }
  } catch (error) {
    let R = Q$n(error, context_3.abortController.signal),
      b = !re(error);
    if (!R) throw error;
    t(b ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return F(d, context_3.abortController.signal) ? {
    sessionTitle: sessionTitle_2,
    wasCancelled: !0
  } : {
    sessionTitle: sessionTitle_2
  };
}
var de = e => ({
  ...e,
  messages: [...e.messages],
  allowedTools: e.allowedTools && [...e.allowedTools]
});
var AYo = e => zfr(e) !== "" || v() !== "";
var i3r = () => Ae().loadedModules.some(item => !bq(item.args.pluginStorageId) && Bf(item) && (item.hooks("prompt.submit") || item.hooks("classic.UserPromptSubmit")));
var ut = e => e === void 0 || e.hooks !== "" || ["prompt.submit", "classic.UserPromptSubmit"].some(item => jJt(item).some(item => item.tier !== "builtin"));
var Qit = e => ({
  permissionMode: se(e).mode,
  hooks: zfr(e),
  plugins: v(),
  hooksSkippedByTrust: pW()
});
function xYo(e, {
  latch: latch
}) {
  let r,
    n = !1;
  return () => {
    if (n || latch && r) return r;
    try {
      r = Qit(e());
    } catch (error) {
      r = void 0, n = latch, t(`could not read what screens a prompt now: ${error}`, {
        level: "error"
      });
    }
    return r;
  };
}
var rtr = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
var fe = (scratch, o) => ({
  scratch: scratch,
  blocked: o.blocked,
  sessionTitle: o.sessionTitle,
  stopped: o.stopped,
  wasCancelled: o.wasCancelled
});
function xt({
  typed: typed_2,
  result: result_2,
  context: context_4,
  promptSource: promptSource_2,
  wakeupSource: wakeupSource_3
}) {
  let m,
    u,
    g = new Map(),
    d = new Set();
  async function h(text_5, tiers_2) {
    let f = tiers_2.managedHooksExcluded === !0,
      result_3 = de(f ? u?.scratch ?? result_2 : result_2),
      c = fe(result_3, await s3r({
        text: text_5,
        typed: typed_2,
        context: context_4,
        result: result_3,
        promptSource: promptSource_2,
        wakeupSource: wakeupSource_3,
        tiers: tiers_2
      }));
    return g.delete(text_5), g.set(text_5, c), c;
  }
  function pass(a, p) {
    let f = h(a, p);
    return d.add(f), f.finally(() => d.delete(f));
  }
  async function settled() {
    while (d.size > 0) await Promise.allSettled([...d]);
  }
  function blockedText() {
    let [a, p] = [...g].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? a : void 0;
  }
  async function managed(a) {
    let p = await pass(a, kct);
    return u = p, m = p.sessionTitle ?? m, p;
  }
  function commit(a) {
    let p = g.get(a);
    if (!p) return;
    return result_2.messages = p.scratch.messages, result_2.allowedTools = p.scratch.allowedTools, result_2.shouldQuery = p.scratch.shouldQuery, result_2.resultText = p.scratch.resultText, m = p.sessionTitle ?? m, p;
  }
  return {
    managed: managed,
    pass: pass,
    commit: commit,
    settled: settled,
    blockedText: blockedText,
    managedRun: () => u,
    sessionTitle: () => m
  };
}
var ce = ({
  submission: submission,
  attachments: attachments,
  origin: origin,
  turnId: turnId,
  shouldWait: s
}) => ({
  text: submission.text,
  wait: s,
  ...(attachments.length > 0 && {
    attachments: attachments
  }),
  origin: origin,
  ...(turnId !== void 0 && {
    turnId: turnId
  }),
  ...(submission.command !== void 0 && {
    command: submission.command
  }),
  ...(submission.isMeta === !0 && {
    isMeta: submission.isMeta
  })
});
function Yia(e) {
  let o = !1;
  return {
    origin: e?.origin,
    settle(r) {
      o = !0, e?.settle(r);
    },
    settleWhen(r) {
      o = !0, r.then(n => e?.settle(n), () => e?.settle({
        drop: drop
      }));
    },
    [Symbol.dispose]() {
      if (!o) o = !0, e?.settle({
        drop: drop
      });
    }
  };
}
function ge(e, o) {
  let r = Li("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}
function xe(e, o) {
  let r = new Set(o ?? []);
  for (let n of e.toSorted((s, m) => m.index - s.index)) {
    let returned = n.returned,
      m = D(returned) ? returned.context : void 0,
      u = (lV(m) ?? []).filter(item => !r.has(item));
    if (u.length === 0) continue;
    for (let d of u) r.add(d);
    let g = u.reduce((acc, item) => acc + item.length, 0);
    t(`prompt.submit: ${n.plugin} put ${u.length} context ${u.length === 1 ? "entry" : "entries"} (${g} characters) on its result after next(); not attached, the prompt had entered`, {
      level: "warn"
    });
  }
}
async function otr({
  submission: submission_2,
  origin: origin_2,
  bridgeOrigin: bridgeOrigin,
  mode: mode,
  turnId: turnId_2,
  shouldWait: shouldWait,
  context: context_5,
  result: result_4,
  promptSource: promptSource_3,
  wakeupSource: wakeupSource_4,
  queued: queued,
  isStartInput: isStartInput,
  enter: enter,
  bound: bound
}) {
  if (!isStartInput) await Tre.get();
  bound?.();
  let {
      signal: signal
    } = context_5.abortController,
    a = xYo(() => context_5, {
      latch: !1
    }),
    p = () => ut(a()) || i3r(),
    f = p(),
    T = () => f || p();
  if (f && signal.aborted) return queued?.settle({
    drop: drop_2
  }), Dqt;
  let c = xt({
      typed: submission_2.text,
      result: result_4,
      context: context_5,
      promptSource: promptSource_3,
      wakeupSource: wakeupSource_4
    }),
    A = hCn(E7r),
    {
      unplaceable: H
    } = submission_2,
    O = Kaa(async (l, x) => {
      if (H !== void 0 && l !== submission_2.text) return {
        drop: H
      };
      let k = await (x.managedHooksOnly ? c.managed(l) : c.pass(l, x));
      if (N(k) && T()) throw hRe(signal);
      return K(l, k.blocked);
    }, A.perform),
    L,
    B = await cxr(mCn(A, qda(Jus(submission_2.input, submission_2.pastedContents), context_5.options.mainLoopModel, attachments_2 => ePt({
      signal: signal,
      origin: queued?.origin,
      core: {
        "prompt.submit": O.core
      },
      managed: {
        "prompt.submit": O.managed
      },
      trace: x => {
        if (L) xe(x, L.context);
      }
    }).prompt.submit(ce({
      submission: submission_2,
      attachments: attachments_2,
      origin: v_i({
        origin: origin_2,
        bridgeOrigin: bridgeOrigin,
        wakeupSource: wakeupSource_4,
        mode: mode,
        promptSource: promptSource_3
      }),
      turnId: turnId_2,
      shouldWait: shouldWait
    })))), signal);
  if (B === void 0) {
    await c.settled();
    let l = c.blockedText(),
      x = l === void 0 ? void 0 : c.commit(l),
      E = x?.blocked,
      k = l !== void 0 && x !== void 0 && E !== void 0;
    return t("prompt.submit: interrupted while a hook checked the prompt: " + (k ? "the block given beneath it stands" : "no verdict")), queued?.settle(k ? K(l, E) : {
      drop: drop_2
    }), k ? j(I(x, E, l), O.arrivedContext()) : Dqt;
  }
  if (B.arrived) {
    let arrived = B.arrived;
    if (L = arrived, arrived.text !== submission_2.text) t(`prompt.submit: text rewritten by a hook (${submission_2.text.length} -> ${arrived.text.length} chars)`);
    let x = je(c.commit(arrived.text), arrived, c.sessionTitle()),
      k = x.wasCancelled === !0 && T() && x.proceeds ? Dqt : x,
      J = ge(enter, k);
    return queued?.settleWhen(J.then(() => arrived)), J.then(() => A.done(arrived), Se => A.failed(Se)), k;
  }
  let answered = B.answered,
    S = O.runs.last(),
    G = Gaa(answered, S?.made);
  t(`prompt.submit: dropped (${G.drop})`), queued?.settle(G);
  let V = c.managedRun();
  if (V?.blocked) return c.commit(submission_2.text), I(V, V.blocked, submission_2.text);
  if (H !== void 0 && S?.made.drop === H) return {
    ended: U(H, {
      kind: "no_verdict",
      noVerdictKind: "rewrite_unplaceable"
    })
  };
  let w = S ? c.commit(S.input) : void 0,
    Q = w?.blocked,
    ke = answered.drop !== void 0 && S !== void 0 && !Ke(answered, S),
    he = O.arrivedContext();
  if (S !== void 0 && w !== void 0 && Q !== void 0 && !ke) return j(I(w, Q, S.input), he);
  if (signal.aborted && (w?.blocked === void 0 || N(w)) && T()) return Dqt;
  let z = answered.drop !== void 0;
  return {
    ended: U(z ? `Prompt dropped by a hook: ${Vct(answered.drop)}` : `Prompt not submitted: ${E7r}`, z ? {
      kind: "dropped_by_hook",
      ...Xpr(answered.drop)
    } : {
      kind: "not_passed_on"
    })
  };
}
function j6e() {
  return KT() && !xn();
}
function Ct(e, o) {
  if (!e) return "idle-fork";
  return o ? "defer-then-fork" : "abort-then-fork";
}
function Ut(e) {
  let {
    inFlight: inFlight
  } = e;
  if (e.isBg) return {
    ok: !0,
    via: "detach",
    inFlight: inFlight
  };
  if (!e.fleetEnabled) return {
    ok: !1,
    reason: "fleet-disabled",
    inFlight: inFlight
  };
  if (e.isRemote) return {
    ok: !1,
    reason: "remote",
    inFlight: inFlight
  };
  if (e.persistenceDisabled) return {
    ok: !1,
    reason: "persistence",
    inFlight: inFlight
  };
  if (e.isExternalLoading) return {
    ok: !1,
    reason: "loading",
    inFlight: inFlight
  };
  return {
    ok: !0,
    via: Ct(e.isLoading, e.betweenCalls),
    inFlight: inFlight
  };
}
function str(e, o) {
  return !o && !Ht(e);
}
function Ht(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return !1;
  }
  return !1;
}
function a3r(e) {
  let o = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let n = e[r];
    if (n.type === "assistant") {
      if (n.message?.stop_reason !== null) return o;
      for (let s of n.message?.content ?? []) if (s.type === "text" && typeof s.text === "string") o += s.text.length;
    } else if (n.type === "user") return o;
  }
  return o;
}
function l3r(e, o) {
  let r = e.length;
  for (let s = e.length - 1; s >= 0; s--) {
    let m = e[s];
    if (m.type === "assistant") {
      if (m.message?.stop_reason !== null) break;
      r = s;
    } else if (m.type === "user") break;
  }
  let n = "";
  for (let s = r; s < e.length; s++) {
    let m = e[s];
    if (m.type !== "assistant") continue;
    for (let u of m.message?.content ?? []) if (u.type === "text" && typeof u.text === "string") n += u.text;
  }
  return n + (o ?? "");
}
function itr(e) {
  let o,
    r = !1;
  return n => {
    if (r) return !0;
    try {
      return o ??= Qit(e()), rtr(n.under, o);
    } catch (error) {
      return r = !0, t(`heldScreening could not read the screening: ${error}`, {
        level: "error"
      }), !0;
    }
  };
}
function d3r(e, o) {
  let r = 0;
  for (let n of e) {
    if (xLt(n)) continue;
    if (n.priority === "later" || n.drainOnly === !0 || n.screeningPending === !0 || n.promptSubmitted !== void 0 && o !== void 0 && o(n.promptSubmitted) || n.mode === "bash" || n.mode === "poll-event" || _w(n.value) && !n.skipSlashCommands) r++;
  }
  return r;
}
function Nli(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${P(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function BSn(e, o) {
  return `Backgrounding cancelled \u2014 ${e}.${o === void 0 ? "" : ` ${o}`}`;
}
var atr = BSn("you have unsent text in the input", "Send it or clear it, then press \u2190 again."),
  Fli = "Still backgrounding after the current tool \u2014 a question is waiting for your answer.",
  c3r = BSn("the turn was stopped");
function be(e) {
  if (e.type !== "user") return !1;
  let o = e.message?.content;
  return Array.isArray(o) && o[0]?.type === "tool_result" && o.every(item => item.type === "tool_result" || item.type === "text" || item.type === "image");
}
function Ot(e) {
  if (e.type === "system") return !0;
  if (e.type === "assistant") {
    if (e.isApiErrorMessage === !0) return !1;
    let o = e.message?.stop_reason;
    return o === null || o === "tool_use";
  }
  if (e.type === "user") return Vm(e);
  return !1;
}
function Lqt(e) {
  let o = e.length,
    r = !1;
  while (o > 0) {
    let s = e[o - 1];
    if (s.type === "user") {
      if (Vm(s)) r ||= be(s);else if (r && be(s)) ;else break;
    } else if (s.type === "assistant") {
      if (!Ot(s)) break;
      r = !1;
    }
    o--;
  }
  let n = e.slice(o).filter(item => item.type !== "user" && item.type !== "assistant" && item.type !== "system");
  if (o + n.length === e.length) return e;
  return [...e.slice(0, o), ...n];
}
function jSn(e) {
  let o = Lqt(e);
  for (let r = o.length - 1; r >= 0; r--) {
    let n = o[r].type;
    if (n === "user" || n === "assistant") return o[r].uuid;
  }
  return;
}
function Hli(e, o) {
  if (e === null || e.length < 1 || e.length > o.length) return !1;
  let r = e.length - 1;
  if (o[r]?.uuid !== e.uuid) return !1;
  for (let n = e.length; n < o.length; n++) {
    let s = o[n].type;
    if (s === "user" || s === "assistant") return !1;
  }
  return !0;
}
function ltr(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "user") return !Vm(r);
    if (r.type === "assistant") return !1;
  }
  return !1;
}
function dtr(e) {
  return e.ok && e.via !== "detach";
}
function Nqt(e) {
  return Ut({
    ...e,
    fleetEnabled: KT(),
    isRemote: xn(),
    persistenceDisabled: Ma()
  });
}
export { Mqt, Dqt, qia, r3r, o3r, s3r, AYo, i3r, Qit, xYo, rtr, Yia, otr, j6e, str, a3r, l3r, itr, d3r, Nli, BSn, atr, Fli, c3r, Lqt, jSn, Hli, ltr, dtr, Nqt };