// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kd } from "B:/~BUN/root/chunk-3aez4b53.js";
import { I9t, M9t, Yfs, e9, jgr, i9s, l9s, hat, XDn, F9s, H9s, Plt, _6, Mlt, EFn, p$e, en, Re, Bt, N6e, CHn, VOt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { HMe } from "B:/~BUN/root/chunk-qp0344nb.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { K6e, uIt } from "B:/~BUN/root/chunk-k382hx6g.js";
import { jc } from "B:/~BUN/root/chunk-183sjefx.js";
import { Qn, eB, Yme } from "B:/~BUN/root/chunk-nw686kdq.js";
import { L6 } from "B:/~BUN/root/chunk-rhpppw15.js";
import { M0, $Ke, A1 } from "B:/~BUN/root/chunk-tcj6992z.js";
import { tl } from "B:/~BUN/root/chunk-k8727s7d.js";
import { Ean, n4n } from "B:/~BUN/root/chunk-g58w39t3.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
var K = (text, o) => o ? {
  drop: o.resultText ?? "blocked by a UserPromptSubmit hook"
} : {
  text: text
};
import { randomUUID as Se } from "crypto";
var lPn = (e, hookName = "UserPromptSubmit") => en({
  type: "hook_additional_context",
  content: [...e],
  hookName: hookName,
  toolUseID: `hook-${Se()}`,
  hookEvent: "UserPromptSubmit"
});
var _ = !0;
var U = (resultText, ending) => ({
  messages: [{
    ...Bt(resultText, "warning", void 0, _),
    promptSubmitEnding: {
      ending: ending,
      promptKept: !1
    }
  }],
  shouldQuery: !1,
  resultText: resultText
});
function J(e, o, r) {
  return r === !0 ? e : `${e}

Original prompt: ${o}`;
}
var ECt = {
  wasCancelled: !0
};
var B = e => e.wasCancelled === !0 && (e.blocked === void 0 || e.stopped !== void 0);
var I = (e, ended, text_2) => B(e) ? ECt : {
  ended: ended,
  stopped: e.stopped,
  text: text_2,
  wasCancelled: e.wasCancelled
};
var X = () => U("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.", {
  kind: "no_verdict",
  noVerdictKind: "hooks_never_ran"
});
function Y(e) {
  let o = e.origin;
  return o?.kind === "plugin" && o.asUser !== !0 ? VOt(e.text, o.name, {
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
var _e = (e, o, r) => !e ? {
  ended: X()
} : e.blocked ? j(I(e, e.blocked, o.text), o.context) : {
  ...Z(Y(o), r, o.context),
  wasCancelled: e.wasCancelled
};
var q = e => e.aborted;
function ee(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}
var drop_2 = "the turn was interrupted while the prompt was checked";
var te = e => e instanceof kd;
var Ve = (e, o) => Qn(e) === Qn(o?.made);
var D = (e, o) => e || q(o);
var drop = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var k8s = (e, o) => e.plugins !== o.plugins;
function se() {
  let weakMap = new WeakMap(),
    o = 0;
  return {
    of: r => {
      let s = weakMap.get(r);
      if (s === void 0) o += 1, s = o, weakMap.set(r, s);
      return s;
    }
  };
}
var ne = se();
function v() {
  let e = uIt("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([ne.of(K6e.plugins()), e.map(item => [item.plugin, item.generation])]);
}
var vcr = (e, ending_2) => ({
  ...Bt(e, "warning", void 0, _),
  promptSubmitEnding: {
    ending: ending_2,
    promptKept: !0
  }
});
var pe = e => e === void 0 ? HMe : `${HMe}: ${e}`;
var kcr = content => Re({
  content: content,
  isMeta: !0
});
var ie = (blocked, stopped, r) => ({
  blocked: blocked,
  stopped: stopped,
  ...(r && {
    wasCancelled: !0
  })
});
var me = (e, wakeupSource) => XDn({
  promptSource: e ?? "sdk",
  wakeupSource: wakeupSource
});
function ue(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== !0 && o.aborted;
}
async function Ecr({
  text: text_4,
  typed: typed,
  context: context_3,
  result: result,
  promptSource: promptSource,
  wakeupSource: wakeupSource_2,
  tiers: tiers
}) {
  let sessionTitle_2,
    u = context_3.abortController.signal.aborted,
    S = A1();
  try {
    for await (let n of Plt(text_4, le(context_3).mode, context_3, me(promptSource, wakeupSource_2), tiers)) {
      if (n.message?.type === "progress") continue;
      if (ue(n, context_3.abortController.signal)) u = !0;
      if (n.blockingError) {
        let i = D(u, context_3.abortController.signal),
          p = n.suppressOriginalPrompt === !0 || typed !== text_4 || M0(S) || $Ke({
            isRunReached: !1
          }),
          promptEnding = n.blockingError.promptEnding;
        return {
          blocked: U(J(p$e(n.blockingError), text_4, p), promptEnding !== void 0 && "noVerdict" in promptEnding ? {
            kind: "no_verdict",
            noVerdictKind: promptEnding.noVerdict
          } : {
            kind: "blocked_by_hook",
            ...CHn(promptEnding?.reason)
          }),
          ...(i && {
            wasCancelled: !0
          })
        };
      }
      if (n.preventContinuation) {
        let i = pe(n.stopReason);
        return result.messages = [...result.messages, kcr(i), vcr(i, {
          kind: "stopped_by_hook",
          ...CHn(n.stopReason)
        })], result.shouldQuery = !1, result.resultText = i, result.allowedTools = void 0, ie(result, i, D(u, context_3.abortController.signal));
      }
      if (n.sessionTitle) sessionTitle_2 = n.sessionTitle;
      let additionalContexts = n.additionalContexts;
      if (additionalContexts !== void 0 && additionalContexts.length > 0) result.messages = [...result.messages, lPn(additionalContexts)];
      let y = ee(n.message);
      if (y) result.messages = [...result.messages, y];
    }
  } catch (error) {
    let P = Ean(error, context_3.abortController.signal),
      k = !te(error);
    if (!P) throw error;
    t(k ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return D(u, context_3.abortController.signal) ? {
    sessionTitle: sessionTitle_2,
    wasCancelled: !0
  } : {
    sessionTitle: sessionTitle_2
  };
}
var ae = e => ({
  ...e,
  messages: [...e.messages],
  allowedTools: e.allowedTools && [...e.allowedTools]
});
var wZr = e => EFn(e) !== "" || v() !== "";
var Tcr = () => Ne().loadedModules.some(item => !L6(item.args.pluginStorageId) && jc(item) && (item.hooks("prompt.submit") || item.hooks("classic.UserPromptSubmit")));
var po = e => e === void 0 || e.hooks !== "" || ["prompt.submit", "classic.UserPromptSubmit"].some(item => uIt(item).some(item => item.tier !== "builtin"));
var lFe = e => ({
  permissionMode: le(e).mode,
  hooks: EFn(e),
  plugins: v(),
  hooksSkippedByTrust: _6()
});
function vZr(e, {
  latch: latch
}) {
  let r,
    s = !1;
  return () => {
    if (s || latch && r) return r;
    try {
      r = lFe(e());
    } catch (error) {
      r = void 0, s = latch, t(`could not read what screens a prompt now: ${error}`, {
        level: "error"
      });
    }
    return r;
  };
}
var D6t = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
var de = (scratch, o) => ({
  scratch: scratch,
  blocked: o.blocked,
  sessionTitle: o.sessionTitle,
  stopped: o.stopped,
  wasCancelled: o.wasCancelled
});
function lo({
  typed: typed_2,
  result: result_2,
  context: context_4,
  promptSource: promptSource_2,
  wakeupSource: wakeupSource_3
}) {
  let c,
    a,
    g = new Map(),
    u = new Set();
  async function S(text_5, tiers_2) {
    let f = tiers_2.managedHooksExcluded === !0,
      result_3 = ae(f ? a?.scratch ?? result_2 : result_2),
      l = de(result_3, await Ecr({
        text: text_5,
        typed: typed_2,
        context: context_4,
        result: result_3,
        promptSource: promptSource_2,
        wakeupSource: wakeupSource_3,
        tiers: tiers_2
      }));
    return g.delete(text_5), g.set(text_5, l), l;
  }
  function pass(i, p) {
    let f = S(i, p);
    return u.add(f), f.finally(() => u.delete(f));
  }
  async function settled() {
    while (u.size > 0) await Promise.allSettled([...u]);
  }
  function blockedText() {
    let [i, p] = [...g].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? i : void 0;
  }
  async function managed(i) {
    let p = await pass(i, Mlt);
    return a = p, c = p.sessionTitle ?? c, p;
  }
  function commit(i) {
    let p = g.get(i);
    if (!p) return;
    return result_2.messages = p.scratch.messages, result_2.allowedTools = p.scratch.allowedTools, result_2.shouldQuery = p.scratch.shouldQuery, result_2.resultText = p.scratch.resultText, c = p.sessionTitle ?? c, p;
  }
  return {
    managed: managed,
    pass: pass,
    commit: commit,
    settled: settled,
    blockedText: blockedText,
    managedRun: () => a,
    sessionTitle: () => c
  };
}
var fe = ({
  submission: submission,
  attachments: attachments,
  origin: origin,
  turnId: turnId,
  shouldWait: d
}) => ({
  text: submission.text,
  wait: d,
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
function E8s(e) {
  let o = !1;
  return {
    origin: e?.origin,
    settle(r) {
      o = !0, e?.settle(r);
    },
    settleWhen(r) {
      o = !0, r.then(s => e?.settle(s), () => e?.settle({
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
function ce(e, o) {
  let r = tl("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}
function ge(e, o) {
  let r = new Set(o ?? []);
  for (let s of e.toSorted((d, c) => c.index - d.index)) {
    let returned = s.returned,
      c = N(returned) ? returned.context : void 0,
      a = (eB(c) ?? []).filter(item => !r.has(item));
    if (a.length === 0) continue;
    for (let u of a) r.add(u);
    let g = a.reduce((acc, item) => acc + item.length, 0);
    t(`prompt.submit: ${s.plugin} put ${a.length} context ${a.length === 1 ? "entry" : "entries"} (${g} characters) on its result after next(); not attached, the prompt had entered`, {
      level: "warn"
    });
  }
}
async function dPn({
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
  if (!isStartInput) await e9.get();
  bound?.();
  let {
      signal: signal
    } = context_5.abortController,
    i = vZr(() => context_5, {
      latch: !1
    }),
    p = () => po(i()) || Tcr(),
    f = p(),
    T = () => f || p();
  if (f && signal.aborted) return queued?.settle({
    drop: drop_2
  }), ECt;
  let l = lo({
      typed: submission_2.text,
      result: result_4,
      context: context_5,
      promptSource: promptSource_3,
      wakeupSource: wakeupSource_4
    }),
    A = M9t(jgr),
    {
      unplaceable: H
    } = submission_2,
    O = l9s(async (m, x) => {
      if (H !== void 0 && m !== submission_2.text) return {
        drop: H
      };
      let b = await (x.managedHooksOnly ? l.managed(m) : l.pass(m, x));
      if (B(b) && T()) throw Yme(signal);
      return K(m, b.blocked);
    }, A.perform),
    L,
    M = await n4n(I9t(A, F9s(H9s(submission_2.input, submission_2.pastedContents), context_5.options.mainLoopModel, attachments_2 => hat({
      signal: signal,
      origin: queued?.origin,
      core: {
        "prompt.submit": O.core
      },
      managed: {
        "prompt.submit": O.managed
      },
      trace: x => {
        if (L) ge(x, L.context);
      }
    }).prompt.submit(fe({
      submission: submission_2,
      attachments: attachments_2,
      origin: Yfs({
        origin: origin_2,
        bridgeOrigin: bridgeOrigin,
        wakeupSource: wakeupSource_4,
        mode: mode,
        promptSource: promptSource_3
      }),
      turnId: turnId_2,
      shouldWait: shouldWait
    })))), signal);
  if (M === void 0) {
    await l.settled();
    let m = l.blockedText(),
      x = m === void 0 ? void 0 : l.commit(m),
      w = x?.blocked,
      b = m !== void 0 && x !== void 0 && w !== void 0;
    return t("prompt.submit: interrupted while a hook checked the prompt: " + (b ? "the block given beneath it stands" : "no verdict")), queued?.settle(b ? K(m, w) : {
      drop: drop_2
    }), b ? j(I(x, w, m), O.arrivedContext()) : ECt;
  }
  if (M.arrived) {
    let arrived = M.arrived;
    if (L = arrived, arrived.text !== submission_2.text) t(`prompt.submit: text rewritten by a hook (${submission_2.text.length} -> ${arrived.text.length} chars)`);
    let x = _e(l.commit(arrived.text), arrived, l.sessionTitle()),
      b = x.wasCancelled === !0 && T() && x.proceeds ? ECt : x,
      z = ce(enter, b);
    return queued?.settleWhen(z.then(() => arrived)), z.then(() => A.done(arrived), ke => A.failed(ke)), b;
  }
  let answered = M.answered,
    h = O.runs.last(),
    W = i9s(answered, h?.made);
  t(`prompt.submit: dropped (${W.drop})`), queued?.settle(W);
  let V = l.managedRun();
  if (V?.blocked) return l.commit(submission_2.text), I(V, V.blocked, submission_2.text);
  if (H !== void 0 && h?.made.drop === H) return {
    ended: U(H, {
      kind: "no_verdict",
      noVerdictKind: "rewrite_unplaceable"
    })
  };
  let C = h ? l.commit(h.input) : void 0,
    Q = C?.blocked,
    xe = answered.drop !== void 0 && h !== void 0 && !Ve(answered, h),
    ye = O.arrivedContext();
  if (h !== void 0 && C !== void 0 && Q !== void 0 && !xe) return j(I(C, Q, h.input), ye);
  if (signal.aborted && (C?.blocked === void 0 || B(C)) && T()) return ECt;
  let G = answered.drop !== void 0;
  return {
    ended: U(G ? `Prompt dropped by a hook: ${N6e(answered.drop)}` : `Prompt not submitted: ${jgr}`, G ? {
      kind: "dropped_by_hook",
      ...CHn(answered.drop)
    } : {
      kind: "not_passed_on"
    })
  };
}
export { lPn, ECt, k8s, vcr, kcr, Ecr, wZr, Tcr, lFe, vZr, D6t, E8s, dPn };