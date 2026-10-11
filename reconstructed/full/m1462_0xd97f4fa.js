// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  GK
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  xo
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  Tl
} from "B:/~BUN/root/chunk-rfp59gnb.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Ya
} from "B:/~BUN/root/chunk-7nc4t0q7.js";
import {
  ree,
  UL
} from "B:/~BUN/root/chunk-y355pc11.js";
import {
  eje,
  Fp
} from "B:/~BUN/root/chunk-qg1rz74p.js";
import {
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  os
} from "B:/~BUN/root/chunk-0d8a76zs.js";
import {
  AH,
  iO,
  Wl
} from "B:/~BUN/root/chunk-xky3bazf.js";
import {
  RLn,
  sAt,
  lV,
  cke
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  qh
} from "B:/~BUN/root/chunk-29grpn3r.js";
import {
  xbe
} from "B:/~BUN/root/chunk-6ykc2a2g.js";
import {
  Z1e
} from "B:/~BUN/root/chunk-vf9z0h14.js";
import {
  nw
} from "B:/~BUN/root/chunk-cdch6ag4.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  YP
} from "B:/~BUN/root/chunk-pwpgxxsc.js";
import {
  R,
  Gr,
  X,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  _l
} from "B:/~BUN/root/chunk-gmsn86f4.js";
import {
  vo
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var g = "ctrl+b",
  C = "ctrl+x ctrl+b",
  y = new Set([g, C].map((t) => UL(ree(t))));

function D(t) {
  for (let o of t) {
    if (o.context !== "Task") continue;
    let m = UL(o.chord);
    if (o.action === "task:background") {
      if (!y.has(m)) return !0
    } else if (o.action === null && y.has(m)) return !0
  }
  return !1
}

function Eyt({
  handler: t,
  isActive: o
}) {
  let m = nw(),
    l = os("task:background", "Task", g),
    c = Ya(),
    u = c?.bindings,
    i = X(() => u ? D(u) : !1, [u]),
    p = Gr(t),
    d = !(m && !i);
  R(() => {
    if (!c || !o) return;
    return c.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => p(),
      singleKey: d
    })
  }, [c, o, d]);
  let x = i ? l : C,
    M = l === "" ? "" : a.terminal === "tmux" ? x.split(" ").map((f) => f === g ? `${g} ${g}` : f).join(" ") : x;
  return {
    cohesionFixes: m,
    gateOnShortcut: M,
    resolvedShortcut: l
  }
}
var h = {};
vo(h, {
  PILL_INDENT_COLUMNS: () => b,
  ToolProgressHint: () => S,
  default: () => h
});
var b = 5;

function H(i) {
  return i.props.hint === "" ? null : e(s, {
    paddingLeft: b,
    children: e(n, {
      dimColor: !0,
      children: i.props.hint
    })
  })
}
var S = (t) => {
  let l = w(4),
    {
      toolUseId: o,
      hint: m
    } = t,
    c, u;
  if (l[0] !== m || l[1] !== o) c = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: m
    }
  }), u = [o, m], l[0] = m, l[1] = o, l[2] = c, l[3] = u;
  else c = l[2], u = l[3];
  return Wl.useRenderHook(Wl.useRenderInput("ToolProgress", c, u), H)
};
var I = 2,
  T = 160;

function mwn(t) {
  let c = w(10),
    {
      toolUseId: o,
      onBackground: m
    } = t,
    l = qh(),
    u;
  if (c[0] !== m || c[1] !== l) u = () => {
    lV(l), m?.()
  }, c[0] = m, c[1] = l, c[2] = u;
  else u = c[2];
  let i = u,
    p;
  if (c[3] !== i) p = {
    handler: i,
    isActive: !0
  }, c[3] = i, c[4] = p;
  else p = c[4];
  let {
    cohesionFixes: d,
    gateOnShortcut: x
  } = Eyt(p), M = os("task:background", "Task", "ctrl+b"), f = d ? x : a.terminal === "tmux" && M === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : M;
  if (_l() || d && f === "") {
    return null
  }
  let U;
  if (c[5] !== f) U = GK({
    chord: f,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), c[5] = f, c[6] = U;
  else U = c[6];
  let k = U;
  if (k === "") {
    return null
  }
  let F;
  if (c[7] !== k || c[8] !== o) F = e(h.ToolProgressHint, {
    toolUseId: o,
    hint: k
  }), c[7] = k, c[8] = o, c[9] = F;
  else F = c[9];
  return F
}

function Sqo(t, {
  verbose: o,
  theme: m
}) {
  let {
    command: l
  } = t;
  if (!l) return null;
  let c = cke(l);
  if (c) return o ? c.filePath : xo(c.filePath);
  if (!o) {
    let u = l.split(`
`);
    if (Tl()) {
      let d = RLn(l);
      if (d) return d.length > T ? d.slice(0, T) + "\u2026" : d
    }
    let i = u.length > I,
      p = l.length > T;
    if (i || p) {
      let d = l;
      if (i) d = u.slice(0, I).join(`
`);
      if (d.length > T) d = d.slice(0, T);
      return r(n, {
        children: [d.trim(), "\u2026"]
      })
    }
  }
  return l
}

function wqo(t, {
  verbose: o,
  tools: m,
  terminalSize: l,
  inProgressToolCallCount: c
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
    verbose: o
  })
}

function vqo() {
  return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Waiting\u2026"
    })
  })
}

function kqo(t, o, {
  verbose: m,
  theme: l,
  tools: c,
  style: u
}) {
  let p = o.at(-1)?.data?.timeoutMs;
  return e(Z1e, {
    content: t,
    verbose: m,
    timeoutMs: p,
    style: u
  })
}

function Eqo(t, {
  verbose: o,
  progressMessagesForMessage: m,
  tools: l
}) {
  return e(Fp, {
    result: t,
    verbose: o
  })
}

function Tqo(t, {
  columns: o
}) {
  if (t.isImage) return !1;
  return YP(t.stdout, o) || YP(typeof t.stderr === "string" ? eje(t.stderr).trim().replace(sAt, "") : t.stderr, o)
}
export {
  Eyt,
  mwn,
  Sqo,
  wqo,
  vqo,
  kqo,
  Eqo,
  Tqo
};
