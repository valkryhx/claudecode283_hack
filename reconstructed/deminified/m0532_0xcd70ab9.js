// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { dDn, EWo, CWo, Tpo, G4, t7t, n7t, GRt, VRt, FVe, Aie, UVe, tZt, Vve, Ce, $t, _De, Pwr, on } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ul } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { kye } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { xPt, $yo } from "B:/~BUN/root/chunk-y39emrp9.js";
import { $n, iD } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { Vp } from "B:/~BUN/root/chunk-a2kvnefe.js";
import { randomUUID as ae } from "crypto";
var zYt = (e, hookName = "UserPromptSubmit") => on({
  type: "hook_additional_context",
  content: [...e],
  hookName: hookName,
  toolUseID: `hook-${ae()}`,
  hookEvent: "UserPromptSubmit"
});
function M() {
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
var N = M();
function T() {
  let e = $yo("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([N.of(xPt.plugins()), e.map(item => [item.plugin, item.generation])]);
}
var VOe = e => ({
  permissionMode: me(e).mode,
  hooks: tZt(e),
  plugins: T(),
  hooksSkippedByTrust: Aie()
});
function mso(e, {
  latch: latch
}) {
  let r,
    n = !1;
  return () => {
    if (n || latch && r) return r;
    try {
      r = VOe(e());
    } catch (error) {
      r = void 0, n = latch, t(`could not read what screens a prompt now: ${error}`, {
        level: "error"
      });
    }
    return r;
  };
}
var GYt = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
var _ = (text, o) => o ? {
  drop: o.resultText ?? "blocked by a UserPromptSubmit hook"
} : {
  text: text
};
var P = !0;
var k = resultText => ({
  messages: [$t(resultText, "warning", void 0, P)],
  shouldQuery: !1,
  resultText: resultText
});
function D(e, o, r) {
  return r === !0 ? e : `${e}

Original prompt: ${o}`;
}
var O = (e, ended, text_2) => ({
  ended: ended,
  stopped: e.stopped,
  text: text_2,
  wasCancelled: e.wasCancelled
});
var v = () => k("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.");
function L(e) {
  let o = e.origin;
  return o?.kind === "plugin" ? Pwr(e.text, o.name, {
    midTurn: !1
  }) : e.text;
}
var K = (text_3, sessionTitle, context) => ({
  proceeds: {
    text: text_3,
    sessionTitle: sessionTitle,
    ...(context !== void 0 && context.length > 0 && {
      context: context
    })
  }
});
var I = (e, context_2) => ({
  ...e,
  ...(context_2?.length && {
    context: context_2
  })
});
var He = (e, o, r) => !e ? {
  ended: v()
} : e.blocked ? I(O(e, e.blocked, o.text), o.context) : {
  ...K(L(o), r, o.context),
  wasCancelled: e.wasCancelled
};
var W = e => e.aborted;
function V(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}
var F = e => e instanceof ul;
var je = (e, o) => $n(e) === $n(o?.made);
var R = (e, o) => e || W(o);
var drop = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var Wjo = (e, o) => e.plugins !== o.plugins;
var q = e => $t(e, "warning", void 0, P);
var J = e => e === void 0 ? kye : `${kye}: ${e}`;
var X = content => Ce({
  content: content,
  isMeta: !0
});
var z = (blocked, stopped, r) => ({
  blocked: blocked,
  stopped: stopped,
  ...(r && {
    wasCancelled: !0
  })
});
var Y = (e, wakeupSource) => t7t({
  promptSource: e ?? "sdk",
  wakeupSource: wakeupSource
});
function Z(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== !0 && o.aborted;
}
async function WAn({
  text: text_4,
  context: context_3,
  result: result,
  promptSource: promptSource,
  wakeupSource: wakeupSource_2,
  tiers: tiers
}) {
  let sessionTitle_2,
    m = context_3.abortController.signal.aborted;
  try {
    for await (let s of FVe(text_4, me(context_3).mode, context_3, Y(promptSource, wakeupSource_2), tiers)) {
      if (s.message?.type === "progress") continue;
      if (Z(s, context_3.abortController.signal)) m = !0;
      if (s.blockingError) {
        let a = R(m, context_3.abortController.signal);
        return {
          blocked: k(D(Vve(s.blockingError), text_4, s.suppressOriginalPrompt)),
          ...(a && {
            wasCancelled: !0
          })
        };
      }
      if (s.preventContinuation) {
        let a = J(s.stopReason);
        return result.messages = [...result.messages, X(a), q(a)], result.shouldQuery = !1, result.resultText = a, result.allowedTools = void 0, z(result, a, R(m, context_3.abortController.signal));
      }
      if (s.sessionTitle) sessionTitle_2 = s.sessionTitle;
      let additionalContexts = s.additionalContexts;
      if (additionalContexts !== void 0 && additionalContexts.length > 0) result.messages = [...result.messages, zYt(additionalContexts)];
      let y = V(s.message);
      if (y) result.messages = [...result.messages, y];
    }
  } catch (error) {
    if (!F(error)) throw error;
    t("UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return R(m, context_3.abortController.signal) ? {
    sessionTitle: sessionTitle_2,
    wasCancelled: !0
  } : {
    sessionTitle: sessionTitle_2
  };
}
var ee = e => ({
  ...e,
  messages: [...e.messages],
  allowedTools: e.allowedTools && [...e.allowedTools]
});
var Ddr = e => tZt(e) !== "" || T() !== "";
var te = (scratch, o) => ({
  scratch: scratch,
  blocked: o.blocked,
  sessionTitle: o.sessionTitle,
  stopped: o.stopped,
  wasCancelled: o.wasCancelled
});
function ze({
  result: result_2,
  context: context_4,
  promptSource: promptSource_2,
  wakeupSource: wakeupSource_3
}) {
  let i,
    c,
    p = new Map();
  async function pass(text_5, tiers_2) {
    let y = tiers_2.managedHooksExcluded === !0,
      result_3 = ee(y ? c?.scratch ?? result_2 : result_2),
      g = te(result_3, await WAn({
        text: text_5,
        context: context_4,
        result: result_3,
        promptSource: promptSource_2,
        wakeupSource: wakeupSource_3,
        tiers: tiers_2
      }));
    return p.set(text_5, g), g;
  }
  async function managed(f) {
    let u = await pass(f, UVe);
    return c = u, i = u.sessionTitle ?? i, u;
  }
  function commit(f) {
    let u = p.get(f);
    if (!u) return;
    return result_2.messages = u.scratch.messages, result_2.allowedTools = u.scratch.allowedTools, result_2.shouldQuery = u.scratch.shouldQuery, result_2.resultText = u.scratch.resultText, i = u.sessionTitle ?? i, u;
  }
  return {
    managed: managed,
    pass: pass,
    commit: commit,
    managedRun: () => c,
    sessionTitle: () => i
  };
}
function oe({
  submission: {
    text: text_6,
    input: input,
    pastedContents: pastedContents
  },
  origin: origin,
  turnId: turnId,
  shouldWait: c
}) {
  let attachments = [];
  if (typeof input !== "string") {
    for (let m of input) if (m.type === "image") {
      let {
          source: source
        } = m,
        l = source.type === "base64";
      attachments.push({
        type: "image",
        mediaType: l ? source.media_type : void 0
      });
    } else if (m.type === "document") attachments.push({
      type: "document"
    });
  }
  for (let m of Object.values(pastedContents ?? {})) if (m.type === "image" || m.type === "audio") attachments.push({
    type: m.type,
    mediaType: m.mediaType,
    filename: m.filename
  });
  return {
    text: text_6,
    wait: c,
    ...(attachments.length > 0 && {
      attachments: attachments
    }),
    origin: origin,
    ...(turnId !== void 0 && {
      turnId: turnId
    })
  };
}
function zjo(e) {
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
function re(e, o) {
  let r = Vp("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}
function se(e, o) {
  let r = new Set(o ?? []);
  for (let n of e.toSorted((i, c) => c.index - i.index)) {
    let returned = n.returned,
      c = G(returned) ? returned.context : void 0,
      p = (iD(c) ?? []).filter(item => !r.has(item));
    if (p.length === 0) continue;
    for (let s of p) r.add(s);
    let m = p.reduce((acc, item) => acc + item.length, 0);
    t(`prompt.submit: ${n.plugin} put ${p.length} context ${p.length === 1 ? "entry" : "entries"} (${m} characters) on its result after next(); not attached, the prompt had entered`, {
      level: "warn"
    });
  }
}
async function VYt({
  submission: submission,
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
  enter: enter
}) {
  if (!isStartInput) await G4.get();
  let a = ze({
      result: result_4,
      context: context_5,
      promptSource: promptSource_3,
      wakeupSource: wakeupSource_4
    }),
    g = VRt(dDn),
    h = CWo(async (d, S) => _(d, (await (S.managedHooksOnly ? a.managed(d) : a.pass(d, S))).blocked), g.perform),
    U,
    H = await GRt(g, n7t({
      signal: context_5.abortController.signal,
      origin: queued?.origin,
      core: {
        "prompt.submit": h.core
      },
      managed: {
        "prompt.submit": h.managed
      },
      trace: d => {
        if (U) se(d, U.context);
      }
    }).prompt.submit(oe({
      submission: submission,
      origin: Tpo({
        origin: origin_2,
        bridgeOrigin: bridgeOrigin,
        wakeupSource: wakeupSource_4,
        mode: mode,
        promptSource: promptSource_3
      }),
      turnId: turnId_2,
      shouldWait: shouldWait
    })));
  if (H.arrived) {
    let arrived = H.arrived;
    if (U = arrived, arrived.text !== submission.text) t(`prompt.submit: text rewritten by a hook (${submission.text.length} -> ${arrived.text.length} chars)`);
    let S = He(a.commit(arrived.text), arrived, a.sessionTitle()),
      B = re(enter, S);
    return queued?.settleWhen(B.then(() => arrived)), B.then(() => g.done(arrived), ue => g.failed(ue)), S;
  }
  let answered = H.answered,
    x = h.runs.last(),
    j = EWo(answered, x?.made);
  t(`prompt.submit: dropped (${j.drop})`), queued?.settle(j);
  let C = a.managedRun();
  if (C?.blocked) return a.commit(submission.text), O(C, C.blocked, submission.text);
  let w = x ? a.commit(x.input) : void 0,
    E = w?.blocked,
    ne = answered.drop !== void 0 && x !== void 0 && !je(answered, x),
    pe = h.arrivedContext();
  if (x !== void 0 && w !== void 0 && E !== void 0 && !ne) return I(O(w, E, x.input), pe);
  let ie = answered.drop !== void 0;
  return {
    ended: k(ie ? `Prompt dropped by a hook: ${_De(answered.drop)}` : `Prompt not submitted: ${dDn}`)
  };
}
export { zYt, Wjo, WAn, Ddr, VOe, mso, GYt, zjo, VYt };