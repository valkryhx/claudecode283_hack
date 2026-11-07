// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ff } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { pb } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Kd } from "B:/~BUN/root/chunk-p2ta953m.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { woe, d1 } from "B:/~BUN/root/chunk-qk8tvzkn.js";
import { wi } from "B:/~BUN/root/chunk-hfz1e87n.js";
import { DG, JH, Bc } from "B:/~BUN/root/chunk-apcs0eny.js";
import { Ceo, fRn, $Ee } from "B:/~BUN/root/chunk-27h4st9h.js";
import { tE } from "B:/~BUN/root/chunk-k98563sa.js";
import { Tvt } from "B:/~BUN/root/chunk-snxnazqh.js";
import { cYe } from "B:/~BUN/root/chunk-pqs7c5q0.js";
import { vvt, Evt } from "B:/~BUN/root/chunk-nmq7va2x.js";
import { Cvt, ly } from "B:/~BUN/root/chunk-fvkh3y4a.js";
import { sx } from "B:/~BUN/root/chunk-w3jccevj.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { e1 } from "B:/~BUN/root/chunk-dt45jjk2.js";
import { O, qo, Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var h = {};
Rr(h, {
  PILL_INDENT_COLUMNS: () => paddingLeft,
  ToolProgressHint: () => M,
  default: () => h
});
j();
var g = "ctrl+b",
  C = "ctrl+x ctrl+b",
  _ = new Set([g, C].map(item => d1(woe(item))));
function D(t) {
  for (let o of t) {
    if (o.context !== "Task") continue;
    let m = d1(o.chord);
    if (o.action === "task:background") {
      if (!_.has(m)) return !0;
    } else if (o.action === null && _.has(m)) return !0;
  }
  return !1;
}
function smn({
  handler: handler,
  isActive: isActive
}) {
  let cohesionFixes = sx(),
    resolvedShortcut = wi("task:background", "Task", g),
    d = vd(),
    l = d?.bindings,
    a = Z(() => l ? D(l) : !1, [l]),
    c = qo(handler),
    singleKey = !(cohesionFixes && !a);
  O(() => {
    if (!d || !isActive) return;
    return d.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => c(),
      singleKey: singleKey
    });
  }, [d, isActive, singleKey]);
  let f = a ? resolvedShortcut : C,
    gateOnShortcut = resolvedShortcut === "" ? "" : i.terminal === "tmux" ? f.split(" ").map(item => item === g ? `${g} ${g}` : item).join(" ") : f;
  return {
    cohesionFixes: cohesionFixes,
    gateOnShortcut: gateOnShortcut,
    resolvedShortcut: resolvedShortcut
  };
}
var paddingLeft = 5;
function H(a) {
  return a.props.hint === "" ? null : e(s, {
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: !0,
      children: a.props.hint
    })
  });
}
var M = t => {
  let u = S(4),
    {
      toolUseId: o,
      hint: hint
    } = t,
    d,
    l;
  if (u[0] !== hint || u[1] !== o) d = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: hint
    }
  }), l = [o, hint], u[0] = hint, u[1] = o, u[2] = d, u[3] = l;else d = u[2], l = u[3];
  return Bc.useRenderHook(Bc.useRenderInput("ToolProgress", d, l), H);
};
var I = 2,
  T = 160;
function Yjr(t) {
  let l = S(9),
    {
      toolUseId: toolUseId,
      keyOnly: keyOnly
    } = t,
    u = keyOnly === void 0 ? !1 : keyOnly,
    d = tE(),
    a;
  if (l[0] !== d) a = () => {
    $Ee(d);
  }, l[0] = d, l[1] = a;else a = l[1];
  let handler_2 = a,
    p;
  if (l[2] !== handler_2) p = {
    handler: handler_2,
    isActive: !0
  }, l[2] = handler_2, l[3] = p;else p = l[3];
  let {
      cohesionFixes: cohesionFixes_2,
      gateOnShortcut: gateOnShortcut_2
    } = smn(p),
    b = wi("task:background", "Task", "ctrl+b"),
    chord = cohesionFixes_2 ? gateOnShortcut_2 : i.terminal === "tmux" && b === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : b;
  if (u) {
    return null;
  }
  if (ff() || cohesionFixes_2 && chord === "") {
    return null;
  }
  let F;
  if (l[4] !== chord) F = pb({
    chord: chord,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), l[4] = chord, l[5] = F;else F = l[5];
  let hint_2 = F;
  if (hint_2 === "") {
    return null;
  }
  let A;
  if (l[6] !== hint_2 || l[7] !== toolUseId) A = e(h.ToolProgressHint, {
    toolUseId: toolUseId,
    hint: hint_2
  }), l[6] = hint_2, l[7] = toolUseId, l[8] = A;else A = l[8];
  return A;
}
function Vma(t, {
  verbose: verbose,
  theme: theme
}) {
  let {
    command: command
  } = t;
  if (!command) return null;
  if (!verbose) {
    let d = command.split(`
`);
    if (Kd()) {
      let c = Ceo(command);
      if (c) return c.length > T ? c.slice(0, T) + "\u2026" : c;
    }
    let l = d.length > I,
      a = command.length > T;
    if (l || a) {
      let c = command;
      if (l) c = d.slice(0, I).join(`
`);
      if (c.length > T) c = c.slice(0, T);
      return r(n, {
        children: [c.trim(), "\u2026"]
      });
    }
  }
  return command;
}
function Kma(t, {
  verbose: verbose_2,
  tools: tools,
  terminalSize: terminalSize,
  inProgressToolCallCount: inProgressToolCallCount
}) {
  let l = t.at(-1);
  if (!l || !l.data) return Evt();
  let a = l.data;
  return e(cYe, {
    fullOutput: a.fullOutput,
    output: a.output,
    elapsedTimeSeconds: a.elapsedTimeSeconds,
    totalLines: a.totalLines,
    totalBytes: a.totalBytes,
    timeoutMs: a.timeoutMs,
    verbose: verbose_2
  });
}
function qma() {
  return vvt();
}
function Yma(content, o, {
  verbose: verbose_3,
  theme: theme_2,
  tools: tools_2,
  style: style,
  input: input
}) {
  let timeoutMs = o.at(-1)?.data?.timeoutMs,
    command_2 = typeof input === "object" && input !== null && "command" in input && typeof input.command === "string" ? input.command : void 0;
  return e(Tvt, {
    content: content,
    verbose: verbose_3,
    timeoutMs: timeoutMs,
    style: style,
    command: command_2
  });
}
function Xma(result, {
  verbose: verbose_4,
  progressMessagesForMessage: progressMessagesForMessage,
  tools: tools_3
}) {
  return e(ly, {
    result: result,
    verbose: verbose_4
  });
}
function Jma(t, {
  columns: columns
}) {
  if (t.isImage) return !1;
  return e1(t.stdout, columns) || e1(typeof t.stderr === "string" ? Cvt(t.stderr).trim().replace(fRn, "") : t.stderr, columns);
}
export { smn, Yjr, Vma, Kma, qma, Yma, Xma, Jma };