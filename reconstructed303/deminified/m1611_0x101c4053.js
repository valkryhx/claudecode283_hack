// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { MF } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { ts } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { sd } from "B:/~BUN/root/chunk-j2ppas05.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { Z9, hj } from "B:/~BUN/root/chunk-raq9cfnw.js";
import { Cs } from "B:/~BUN/root/chunk-cbtzavb5.js";
import { f1, kL, $d } from "B:/~BUN/root/chunk-znr767c8.js";
import { syr, vXt, P9, W$e } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { mS } from "B:/~BUN/root/chunk-cg5h52rm.js";
import { Ftt } from "B:/~BUN/root/chunk-hjynwxxe.js";
import { hLe } from "B:/~BUN/root/chunk-ygcxhykw.js";
import { Ltt, Ntt } from "B:/~BUN/root/chunk-1gq2c1h9.js";
import { Htt, Rm } from "B:/~BUN/root/chunk-75n4yg0p.js";
import { mT } from "B:/~BUN/root/chunk-91at02k2.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { aN } from "B:/~BUN/root/chunk-gvcmagy5.js";
import { P, Mo, Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Zu } from "B:/~BUN/root/chunk-q56gve2c.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var h = {};
Mr(h, {
  PILL_INDENT_COLUMNS: () => paddingLeft,
  ToolProgressHint: () => M,
  default: () => h
});
B();
var g = "ctrl+b",
  C = "ctrl+x ctrl+b",
  _ = new Set([g, C].map(item => hj(Z9(item))));
function j(i) {
  for (let o of i) {
    if (o.context !== "Task") continue;
    let u = hj(o.chord);
    if (o.action === "task:background") {
      if (!_.has(u)) return !0;
    } else if (o.action === null && _.has(u)) return !0;
  }
  return !1;
}
function NGt({
  handler: handler,
  isActive: isActive
}) {
  let cohesionFixes = mT(),
    resolvedShortcut = Cs("task:background", "Task", g),
    d = Zl(),
    c = d?.bindings,
    t = Z(() => c ? j(c) : !1, [c]),
    p = Mo(handler),
    singleKey = !(cohesionFixes && !t);
  P(() => {
    if (!d || !isActive) return;
    return d.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => p(),
      singleKey: singleKey
    });
  }, [d, isActive, singleKey]);
  let f = t ? resolvedShortcut : C,
    gateOnShortcut = resolvedShortcut === "" ? "" : a.terminal === "tmux" ? f.split(" ").map(item => item === g ? `${g} ${g}` : item).join(" ") : f;
  return {
    cohesionFixes: cohesionFixes,
    gateOnShortcut: gateOnShortcut,
    resolvedShortcut: resolvedShortcut
  };
}
var paddingLeft = 5;
function z(t) {
  return t.props.hint === "" ? null : e(s, {
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: !0,
      children: t.props.hint
    })
  });
}
var M = i => {
  let l = w(4),
    {
      toolUseId: o,
      hint: hint
    } = i,
    d,
    c;
  if (l[0] !== hint || l[1] !== o) d = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: hint
    }
  }), c = [o, hint], l[0] = hint, l[1] = o, l[2] = d, l[3] = c;else d = l[2], c = l[3];
  return $d.useRenderHook($d.useRenderInput("ToolProgress", d, c), z);
};
var O = 2,
  T = 160;
function Ber(i) {
  let t = w(10),
    {
      toolUseId: toolUseId,
      keyOnly: keyOnly,
      onBackground: onBackground
    } = i,
    d = keyOnly === void 0 ? !1 : keyOnly,
    c = mS(),
    p;
  if (t[0] !== onBackground || t[1] !== c) p = () => {
    P9(c), onBackground?.();
  }, t[0] = onBackground, t[1] = c, t[2] = p;else p = t[2];
  let handler_2 = p,
    f;
  if (t[3] !== handler_2) f = {
    handler: handler_2,
    isActive: !0
  }, t[3] = handler_2, t[4] = f;else f = t[4];
  let {
      cohesionFixes: cohesionFixes_2,
      gateOnShortcut: gateOnShortcut_2
    } = NGt(f),
    F = Cs("task:background", "Task", "ctrl+b"),
    chord = cohesionFixes_2 ? gateOnShortcut_2 : a.terminal === "tmux" && F === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : F;
  if (d) {
    return null;
  }
  if (Zu() || cohesionFixes_2 && chord === "") {
    return null;
  }
  let D;
  if (t[5] !== chord) D = MF({
    chord: chord,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), t[5] = chord, t[6] = D;else D = t[6];
  let hint_2 = D;
  if (hint_2 === "") {
    return null;
  }
  let A;
  if (t[7] !== hint_2 || t[8] !== toolUseId) A = e(h.ToolProgressHint, {
    toolUseId: toolUseId,
    hint: hint_2
  }), t[7] = hint_2, t[8] = toolUseId, t[9] = A;else A = t[9];
  return A;
}
function Dei(i, {
  verbose: verbose,
  theme: theme
}) {
  let {
    command: command
  } = i;
  if (!command) return null;
  let d = W$e(command);
  if (d) return verbose ? d.filePath : ts(d.filePath);
  if (!verbose) {
    let c = command.split(`
`);
    if (sd()) {
      let m = syr(command);
      if (m) return m.length > T ? m.slice(0, T) + "\u2026" : m;
    }
    let t = c.length > O,
      p = command.length > T;
    if (t || p) {
      let m = command;
      if (t) m = c.slice(0, O).join(`
`);
      if (m.length > T) m = m.slice(0, T);
      return r(n, {
        children: [m.trim(), "\u2026"]
      });
    }
  }
  return command;
}
function Lei(i, {
  verbose: verbose_2,
  tools: tools,
  terminalSize: terminalSize,
  inProgressToolCallCount: inProgressToolCallCount
}) {
  let c = i.at(-1);
  if (!c || !c.data) return Ntt();
  let t = c.data;
  return e(hLe, {
    fullOutput: t.fullOutput,
    output: t.output,
    elapsedTimeSeconds: t.elapsedTimeSeconds,
    totalLines: t.totalLines,
    totalBytes: t.totalBytes,
    timeoutMs: t.timeoutMs,
    taskId: t.taskId,
    verbose: verbose_2
  });
}
function Nei() {
  return Ltt();
}
function Fei(content, o, {
  verbose: verbose_3,
  theme: theme_2,
  tools: tools_2,
  style: style,
  input: input
}) {
  let timeoutMs = o.at(-1)?.data?.timeoutMs,
    command_2 = typeof input === "object" && input !== null && "command" in input && typeof input.command === "string" ? input.command : void 0;
  return e(Ftt, {
    content: content,
    verbose: verbose_3,
    timeoutMs: timeoutMs,
    style: style,
    command: command_2
  });
}
function Hei(result, {
  verbose: verbose_4,
  progressMessagesForMessage: progressMessagesForMessage,
  tools: tools_3
}) {
  return e(Rm, {
    result: result,
    verbose: verbose_4
  });
}
function $ei(i, {
  columns: columns
}) {
  if (i.isImage) return !1;
  return aN(i.stdout, columns) || aN(typeof i.stderr === "string" ? Htt(i.stderr).trim().replace(vXt, "") : i.stderr, columns);
}
export { NGt, Ber, Dei, Lei, Nei, Fei, Hei, $ei };