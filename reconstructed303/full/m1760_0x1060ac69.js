// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  uB,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ui
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  Np
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  Ec,
  EQe
} from "B:/~BUN/root/chunk-we0fhavr.js";
import {
  ZJe
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  LFe,
  zRt
} from "B:/~BUN/root/chunk-c8kg7ar7.js";
import {
  si
} from "B:/~BUN/root/chunk-b0487zs4.js";
var m = "tengu_rc_thread_reply_gate";

function $tr() {
  return E(m, !0)
}
var Jei = 5000,
  Qei = 1000,
  u = EQe(["reply", "no_reply_needed", "post_message", "react", "update_message", "update_status"]).map((e) => si(Ec, e)),
  l = si(Ec, "no_reply_needed"),
  y = "rc_owner";

function Utr(e) {
  let t = e.mcp.clients.find((n) => n.name === Ec);
  return t !== void 0 && t.type === "connected" && Np(t.config)
}
async function Zei(e, t, n) {
  if (!$tr()) return;
  let r = performance.now(),
    o = await je(e.then(() => !0), n);
  i("tengu_bridge_projects_mount_wait", {
    waited_ms: Math.round(performance.now() - r),
    settled: o === !0,
    connected: Utr(t())
  })
}

function dKr(e) {
  let t = uB(e).decider,
    n = t === null ? void 0 : e[t.index];
  if (t === null || n === void 0) return !1;
  return (c(n)?.startsWith(ZJe) === !0 || p(n)) && !f(e.slice(t.index + 1), u).answered
}

function eti(e, t, n) {
  let r = uB(e).decider;
  if (r === null) return {
    kind: "skip"
  };
  let o = e[r.index];
  if (o === void 0) return {
    kind: "skip"
  };
  let s = c(o)?.startsWith(ZJe) === !0;
  if (!s && !p(o)) return {
    kind: "skip"
  };
  let a = [...e.slice(r.index + 1), ...t];
  if (!a.some(h)) return {
    kind: "skip"
  };
  let {
    answered: _,
    erroredTerminalTool: d
  } = f(a, u);
  if (_) return {
    kind: "answered"
  };
  if (s) return {
    kind: "still_silent"
  };
  if (d !== void 0) return {
    kind: "bounce",
    reason: "reply_errored",
    text: `${ZJe} Your \`${d}\` call this turn returned an error, so nothing reached the project thread. Call \`${n.reply}\` again with what the thread should see, or \`${l}\` if no reply is warranted.`
  };
  return {
    kind: "bounce",
    reason: "silent_turn",
    text: `${ZJe} Your last turn ended without a terminal \`mcp__${Ec}__*\` tool call, so nothing reached the project thread: plain text is not delivered there. Call \`${n.reply}\` now with what the thread should see, \`${n.status}\` if you dispatched work that reports back later, or \`${l}\` if no reply is warranted.`
  }
}

function h(e) {
  return e.type === "assistant" && e.message.model !== ui
}

function c(e) {
  return e.type === "user" && e.isMeta === !0 && typeof e.message.content === "string" ? e.message.content : void 0
}

function p(e) {
  if (e.type === "attachment") return e.attachment.type === "queued_command" && e.attachment.projectsUserTurn === !0;
  if (e.type !== "user") return !1;
  if (e.projectsUserTurn === !0) return !0;
  let t = e.message.content,
    n = typeof t === "string" ? t : t[0]?.type === "text" ? t[0].text : void 0;
  if (n === void 0) return !1;
  let r = LFe(n);
  return r !== null && zRt(r) && r.data.sender_kind === y
}

function f(e, t) {
  let n = new Set;
  for (let o of e) {
    if (o.type !== "user" || !Array.isArray(o.message.content)) continue;
    for (let s of o.message.content)
      if (s.type === "tool_result" && s.is_error === !0) n.add(s.tool_use_id)
  }
  let r;
  for (let o of e) {
    if (o.type !== "assistant") continue;
    for (let s of o.message.content) {
      if (s.type !== "tool_use" || !t.includes(s.name)) continue;
      if (!n.has(s.id)) return {
        answered: !0,
        erroredTerminalTool: void 0
      };
      r = s.name
    }
  }
  return {
    answered: !1,
    erroredTerminalTool: r
  }
}
export {
  $tr,
  Jei,
  Qei,
  Utr,
  Zei,
  dKr,
  eti
};
