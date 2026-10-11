// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { GK } from "B:/~BUN/root/chunk-acd2tycn.js";
import { xo } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { Tl } from "B:/~BUN/root/chunk-rfp59gnb.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { ree, UL } from "B:/~BUN/root/chunk-y355pc11.js";
import { eje, Fp } from "B:/~BUN/root/chunk-qg1rz74p.js";
import { Le } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { os } from "B:/~BUN/root/chunk-0d8a76zs.js";
import { AH, iO, Wl } from "B:/~BUN/root/chunk-xky3bazf.js";
import { RLn, sAt, lV, cke } from "B:/~BUN/root/chunk-3jyp964r.js";
import { qh } from "B:/~BUN/root/chunk-29grpn3r.js";
import { xbe } from "B:/~BUN/root/chunk-6ykc2a2g.js";
import { Z1e } from "B:/~BUN/root/chunk-vf9z0h14.js";
import { nw } from "B:/~BUN/root/chunk-cdch6ag4.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { YP } from "B:/~BUN/root/chunk-pwpgxxsc.js";
import { R, Gr, X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { _l } from "B:/~BUN/root/chunk-gmsn86f4.js";
import { vo } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var g = "ctrl+b",
  C = "ctrl+x ctrl+b",
  y = new Set([g, C].map(item => UL(ree(item))));
function D(t) {
  for (let o of t) {
    if (o.context !== "Task") continue;
    let m = UL(o.chord);
    if (o.action === "task:background") {
      if (!y.has(m)) return !0;
    } else if (o.action === null && y.has(m)) return !0;
  }
  return !1;
}
function Eyt({
  handler: handler,
  isActive: isActive
}) {
  let cohesionFixes = nw(),
    resolvedShortcut = os("task:background", "Task", g),
    c = Ya(),
    u = c?.bindings,
    i = X(() => u ? D(u) : !1, [u]),
    p = Gr(handler),
    singleKey = !(cohesionFixes && !i);
  R(() => {
    if (!c || !isActive) return;
    return c.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => p(),
      singleKey: singleKey
    });
  }, [c, isActive, singleKey]);
  let x = i ? resolvedShortcut : C,
    gateOnShortcut = resolvedShortcut === "" ? "" : a.terminal === "tmux" ? x.split(" ").map(item => item === g ? `${g} ${g}` : item).join(" ") : x;
  return {
    cohesionFixes: cohesionFixes,
    gateOnShortcut: gateOnShortcut,
    resolvedShortcut: resolvedShortcut
  };
}
var h = {};
vo(h, {
  PILL_INDENT_COLUMNS: () => paddingLeft,
  ToolProgressHint: () => S,
  default: () => h
});
var paddingLeft = 5;
function H(i) {
  return i.props.hint === "" ? null : e(s, {
    paddingLeft: paddingLeft,
    children: e(n, {
      dimColor: !0,
      children: i.props.hint
    })
  });
}
var S = t => {
  let l = w(4),
    {
      toolUseId: o,
      hint: hint
    } = t,
    c,
    u;
  if (l[0] !== hint || l[1] !== o) c = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: hint
    }
  }), u = [o, hint], l[0] = hint, l[1] = o, l[2] = c, l[3] = u;else c = l[2], u = l[3];
  return Wl.useRenderHook(Wl.useRenderInput("ToolProgress", c, u), H);
};
var I = 2,
  T = 160;
function mwn(t) {
  let c = w(10),
    {
      toolUseId: toolUseId,
      onBackground: onBackground
    } = t,
    l = qh(),
    u;
  if (c[0] !== onBackground || c[1] !== l) u = () => {
    lV(l), onBackground?.();
  }, c[0] = onBackground, c[1] = l, c[2] = u;else u = c[2];
  let handler_2 = u,
    p;
  if (c[3] !== handler_2) p = {
    handler: handler_2,
    isActive: !0
  }, c[3] = handler_2, c[4] = p;else p = c[4];
  let {
      cohesionFixes: cohesionFixes_2,
      gateOnShortcut: gateOnShortcut_2
    } = Eyt(p),
    M = os("task:background", "Task", "ctrl+b"),
    chord = cohesionFixes_2 ? gateOnShortcut_2 : a.terminal === "tmux" && M === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : M;
  if (_l() || cohesionFixes_2 && chord === "") {
    return null;
  }
  let U;
  if (c[5] !== chord) U = GK({
    chord: chord,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), c[5] = chord, c[6] = U;else U = c[6];
  let hint_2 = U;
  if (hint_2 === "") {
    return null;
  }
  let F;
  if (c[7] !== hint_2 || c[8] !== toolUseId) F = e(h.ToolProgressHint, {
    toolUseId: toolUseId,
    hint: hint_2
  }), c[7] = hint_2, c[8] = toolUseId, c[9] = F;else F = c[9];
  return F;
}
function Sqo(t, {
  verbose: verbose,
  theme: theme
}) {
  let {
    command: command
  } = t;
  if (!command) return null;
  let c = cke(command);
  if (c) return verbose ? c.filePath : xo(c.filePath);
  if (!verbose) {
    let u = command.split(`
`);
    if (Tl()) {
      let d = RLn(command);
      if (d) return d.length > T ? d.slice(0, T) + "\u2026" : d;
    }
    let i = u.length > I,
      p = command.length > T;
    if (i || p) {
      let d = command;
      if (i) d = u.slice(0, I).join(`
`);
      if (d.length > T) d = d.slice(0, T);
      return r(n, {
        children: [d.trim(), "\u2026"]
      });
    }
  }
  return command;
}
function wqo(t, {
  verbose: verbose_2,
  tools: tools,
  terminalSize: terminalSize,
  inProgressToolCallCount: inProgressToolCallCount
}) {
  let u = t.at(-1);
  if (!u || !u.data) return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  let i = u.data;
  return e(xbe, {
    fullOutput: i.fullOutput,
    output: i.output,
    elapsedTimeSeconds: i.elapsedTimeSeconds,
    totalLines: i.totalLines,
    totalBytes: i.totalBytes,
    timeoutMs: i.timeoutMs,
    taskId: i.taskId,
    verbose: verbose_2
  });
}
function vqo() {
  return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Waiting\u2026"
    })
  });
}
function kqo(content, o, {
  verbose: verbose_3,
  theme: theme_2,
  tools: tools_2,
  style: style
}) {
  let timeoutMs = o.at(-1)?.data?.timeoutMs;
  return e(Z1e, {
    content: content,
    verbose: verbose_3,
    timeoutMs: timeoutMs,
    style: style
  });
}
function Eqo(result, {
  verbose: verbose_4,
  progressMessagesForMessage: progressMessagesForMessage,
  tools: tools_3
}) {
  return e(Fp, {
    result: result,
    verbose: verbose_4
  });
}
function Tqo(t, {
  columns: columns
}) {
  if (t.isImage) return !1;
  return YP(t.stdout, columns) || YP(typeof t.stderr === "string" ? eje(t.stderr).trim().replace(sAt, "") : t.stderr, columns);
}
export { Eyt, mwn, Sqo, wqo, vqo, kqo, Eqo, Tqo };