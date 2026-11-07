// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { die, TR, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Mi } from "B:/~BUN/root/chunk-game8aqv.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Yl } from "B:/~BUN/root/chunk-ja520myc.js";
import { Rf, cpe } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { Dd, br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { N_t, Q3 } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { ft, bc } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { qu } from "B:/~BUN/root/chunk-8rnfdnh3.js";
import { Zke, t3e } from "B:/~BUN/root/chunk-jcqwjvc4.js";
import { jh } from "B:/~BUN/root/chunk-27h4st9h.js";
import { bMn } from "B:/~BUN/root/chunk-p8898990.js";
import { gCe } from "B:/~BUN/root/chunk-m4674qtc.js";
import { o, Xc, I, oe, C, u, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
var j = "tengu_rc_thread_reply_gate";
function cGr() {
  return v(j, !0);
}
var _ha = 5000,
  bha = 1000,
  S = cpe(["reply", "no_reply_needed", "post_message", "react", "update_message", "update_status"]).map(item => br(Rf, item)),
  O = br(Rf, "no_reply_needed"),
  D = "rc_owner",
  cap_2 = 4,
  b = 64,
  W = p(() => {
    let e = o().min(1).max(256),
      ask_text = o().trim().min(1).max(4096),
      n = Xc().min(0).max(cap_2);
    return u({
      terminal_tools: C(e).min(1).max(b),
      ask_text: ask_text,
      max_asks_after_person: n,
      max_asks_after_server_event: n,
      max_asks_after_own_task: n.optional(),
      skip_while_worker_out: I().optional(),
      max_asks_after_error: n.optional(),
      ask_texts_after_error: me(e, ask_text).refine(r => Object.keys(r).length <= b).optional(),
      skip_retry_while_server_down: I().optional(),
      status_nudge: oe().optional(),
      prompt_reminder: oe().optional()
    });
  }),
  z = 60,
  Y = p(() => u({
    seconds: Xc().min(1).max(86400),
    visible_tools: C(o().min(1).max(128)).min(1).max(32),
    text: o().trim().min(1).max(2048)
  })),
  B = p(() => o().trim().min(1).max(2048));
function oUo(e) {
  let t = W().safeParse(et(e, !1));
  if (!t.success) return {
    invalidField: (t.error.issues[0]?.path ?? []).filter((item, index) => index === 0 || typeof item === "number").join(".")
  };
  let n = Y().safeParse(t.data.status_nudge),
    r = B().safeParse(t.data.prompt_reminder);
  return {
    policy: {
      terminalTools: t.data.terminal_tools,
      askText: t.data.ask_text,
      maxAsksAfterPerson: t.data.max_asks_after_person,
      maxAsksAfterServerEvent: t.data.max_asks_after_server_event,
      ...(t.data.max_asks_after_own_task !== void 0 && {
        maxAsksAfterOwnTask: t.data.max_asks_after_own_task
      }),
      ...(t.data.skip_while_worker_out !== void 0 && {
        skipWhileWorkerOut: t.data.skip_while_worker_out
      }),
      ...(t.data.max_asks_after_error !== void 0 && {
        maxAsksAfterError: t.data.max_asks_after_error
      }),
      ...(t.data.ask_texts_after_error !== void 0 && {
        askTextsAfterError: new Map(Object.entries(t.data.ask_texts_after_error))
      }),
      ...(t.data.skip_retry_while_server_down !== void 0 && {
        skipRetryWhileServerDown: t.data.skip_retry_while_server_down
      }),
      ...(n.success && {
        statusNudge: {
          seconds: Math.max(z, n.data.seconds),
          visibleTools: n.data.visible_tools,
          text: n.data.text
        }
      }),
      ...(r.success && {
        promptReminder: r.data
      })
    },
    unreadBlocks: [...(t.data.status_nudge !== void 0 && !n.success ? ["status_nudge"] : []), ...(t.data.prompt_reminder !== void 0 && !r.success ? ["prompt_reminder"] : [])]
  };
}
function sUo(e, t) {
  let n = "longerThan" in t ? `its text is over the limit of ${t.longerThan} characters` : t.invalidField === "" ? "it is not a JSON object" : `its ${t.invalidField} is missing or invalid`;
  return `ignoring ${e}: ${n}, so Claude will not be re-prompted when a turn ends without a reply tool call`;
}
var F = [ft, bc, qu],
  H = new Set(["max_tokens", "model_context_window_exceeded", "pause_turn", "refusal"]);
function uGr(e) {
  let t = e.mcp.clients.find(item => item.name === Rf);
  return t !== void 0 && t.type === "connected" && Yl(t.config);
}
async function Sha(e, t, n) {
  if (!cGr()) return;
  let r = performance.now(),
    d = await we(e.then(() => !0), n);
  l("tengu_bridge_projects_mount_wait", {
    waited_ms: Math.round(performance.now() - r),
    settled: d === !0,
    connected: uGr(t())
  });
}
function iUo(e) {
  let decider = TR(e).decider,
    n = decider === null ? void 0 : e[decider.index];
  if (decider === null || n === void 0) return !1;
  return (x(n)?.startsWith(N_t) === !0 || N(n)) && !T(e.slice(decider.index + 1), S).answered;
}
function wha(e, t, n, r) {
  let decider_2 = TR(e).decider,
    used = 0,
    i = decider_2;
  while (i !== null) {
    let _ = e[i.index];
    if (x(_)?.startsWith(N_t) === !0) used++;else if (n.kind !== "policy" || _ === void 0 || !Q3(_)) break;
    i = TR(e.slice(0, i.index)).decider;
  }
  let c = i === null ? void 0 : e[i.index],
    opener = K(c, i),
    personOpened = opener === "person",
    cap = J(n, c, opener);
  if (used === 0 && cap === 0) return r?.({
    verdict: "skip",
    why: "not_held",
    opener: opener
  }), {
    kind: "skip"
  };
  let k = [...e.slice(decider_2 === null ? 0 : decider_2.index + 1), ...t];
  if (!k.some(M)) return r?.({
    verdict: "skip",
    why: "no_completion",
    opener: opener
  }), {
    kind: "skip"
  };
  let h = n.kind === "policy" ? [...e.slice(i === null ? 0 : i.index + 1), ...t] : k,
    {
      answered: answered,
      noReplyOnly: noReplyOnly,
      erroredTerminalTool: erroredTerminalTool,
      firstErroredAt: firstErroredAt
    } = T(h, n.kind === "policy" ? n.policy.terminalTools : S);
  if (answered) return r?.({
    verdict: "answered",
    opener: opener
  }), {
    kind: "answered",
    noReplyOnly: noReplyOnly,
    personOpened: personOpened
  };
  if (n.kind === "policy" && n.replMode === !0) return r?.({
    verdict: "skip",
    why: "repl_mode",
    opener: opener
  }), {
    kind: "skip"
  };
  if (n.kind === "policy" && (jh(t)?.isApiErrorMessage === !0 || H.has(k.findLast(M)?.message.stop_reason ?? null))) return r?.({
    verdict: "skip",
    why: "unclean_stop",
    opener: opener
  }), {
    kind: "skip"
  };
  if (n.kind === "policy" && n.policy.skipWhileWorkerOut === !0 && n.coordinatorMode === !0 && n.workerStillRunning === !0 && (opener === "own_task" || i !== null && T(h, F).answered)) return r?.({
    verdict: "skip",
    why: "worker_out",
    opener: opener
  }), {
    kind: "skip"
  };
  let reason = erroredTerminalTool !== void 0 ? "reply_errored" : "silent_turn",
    f = n.kind === "policy" && n.policy.maxAsksAfterError !== void 0 && firstErroredAt !== void 0 ? {
      used: U(h.slice(firstErroredAt + 1), _ => x(_)?.startsWith(N_t) === !0),
      cap: n.policy.maxAsksAfterError,
      cap_of: "after_error"
    } : {
      used: used,
      cap: cap,
      cap_of: "opener"
    },
    g = f.used >= f.cap ? f : used >= cap_2 ? {
      used: used,
      cap: cap_2,
      cap_of: "turn"
    } : void 0;
  if (g !== void 0 && used === 0) return r?.({
    verdict: "skip",
    why: "no_ask_after_error",
    opener: opener
  }), {
    kind: "skip"
  };
  if (g !== void 0) return r?.({
    verdict: "still_silent",
    reason: reason,
    opener: opener,
    ...g
  }), {
    kind: "still_silent",
    reason: reason,
    personOpened: personOpened
  };
  return r?.({
    verdict: "bounce",
    reason: reason,
    opener: opener,
    ...f
  }), {
    kind: "bounce",
    reason: reason,
    text: `${N_t} ${V(n, erroredTerminalTool)}`,
    personOpened: personOpened
  };
}
function J(e, t, n) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 && N(t) ? 1 : 0;
    case "policy":
      switch (n) {
        case "person":
          return e.policy.maxAsksAfterPerson;
        case "own_task":
          return e.policy.maxAsksAfterOwnTask ?? e.policy.maxAsksAfterServerEvent;
        case "other":
          return e.policy.maxAsksAfterServerEvent;
      }
  }
}
function K(e, t) {
  if (e !== void 0 && (t?.userDriven === !0 || P(e))) return "person";
  return gCe(t?.origin, e?.type === "user" ? e[die] : void 0) ? "own_task" : "other";
}
function kha(e, t, n) {
  let r = n.filter(item => item.type === "failed" || item.type === "needs-auth" || item.type === "disabled"),
    d = t.filter(item => e.terminalTools.some(i => ht(item, i)));
  return d.length > 0 && d.every(item => item.isMcp === !0 && r.some(i => Dd(item, i.name)));
}
function V(e, t) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 ? `Your \`${t}\` call this turn returned an error, so nothing reached the project thread. Call \`${e.toolNames.reply}\` again with what the thread should see, or \`${O}\` if no reply is warranted.` : `Your last turn ended without a terminal \`mcp__${Rf}__*\` tool call, so nothing reached the project thread: plain text is not delivered there. Call \`${e.toolNames.reply}\` now with what the thread should see, \`${e.toolNames.status}\` if you dispatched work that reports back later, or \`${O}\` if no reply is warranted.`;
    case "policy":
      return (t !== void 0 ? e.policy.askTextsAfterError?.get(t) : void 0) ?? e.policy.askText;
  }
}
function M(e) {
  return e.type === "assistant" && e.message.model !== Mi;
}
function x(e) {
  return e?.type === "user" && e.isMeta === !0 && typeof e.message.content === "string" ? e.message.content : void 0;
}
function N(e) {
  if (P(e)) return !0;
  if (e.type !== "user") return !1;
  let content = e.message.content,
    n = typeof content === "string" ? content : content[0]?.type === "text" ? content[0].text : void 0;
  if (n === void 0) return !1;
  let r = Zke(n);
  return r !== null && t3e(r) && r.data.sender_kind === D;
}
function P(e) {
  return e.type === "attachment" ? e.attachment.type === "queued_command" && e.attachment.projectsUserTurn === !0 : e.type === "user" && e.projectsUserTurn === !0;
}
function T(e, t) {
  let n = new Set();
  for (let i of e) {
    if (i.type !== "user" || !Array.isArray(i.message.content)) continue;
    for (let c of i.message.content) if (c.type === "tool_result" && c.is_error === !0) n.add(c.tool_use_id);
  }
  let r = !1,
    d,
    s;
  for (let [i, c] of e.entries()) {
    if (c.type !== "assistant") continue;
    for (let a of c.message.content) {
      if (a.type !== "tool_use" || !t.includes(a.name)) continue;
      if (n.has(a.id)) {
        d = a.name, s ??= i;
        continue;
      }
      if (!a.name.endsWith(bMn)) return {
        answered: !0,
        noReplyOnly: !1,
        erroredTerminalTool: void 0,
        firstErroredAt: void 0
      };
      r = !0;
    }
  }
  return {
    answered: r,
    noReplyOnly: r,
    erroredTerminalTool: r ? void 0 : d,
    firstErroredAt: r ? void 0 : s
  };
}
export { cGr, _ha, bha, oUo, sUo, uGr, Sha, iUo, wha, kha };