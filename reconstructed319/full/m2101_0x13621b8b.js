// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  ff
} from "B:/~BUN/root/chunk-ckdgegnz.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  pb
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Kd
} from "B:/~BUN/root/chunk-p2ta953m.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  vd
} from "B:/~BUN/root/chunk-7g0t7h3t.js";
import {
  woe,
  d1
} from "B:/~BUN/root/chunk-qk8tvzkn.js";
import {
  wi
} from "B:/~BUN/root/chunk-hfz1e87n.js";
import {
  DG,
  JH,
  Bc
} from "B:/~BUN/root/chunk-apcs0eny.js";
import {
  Ceo,
  fRn,
  $Ee
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tE
} from "B:/~BUN/root/chunk-k98563sa.js";
import {
  Tvt
} from "B:/~BUN/root/chunk-snxnazqh.js";
import {
  cYe
} from "B:/~BUN/root/chunk-pqs7c5q0.js";
import {
  vvt,
  Evt
} from "B:/~BUN/root/chunk-nmq7va2x.js";
import {
  Cvt,
  ly
} from "B:/~BUN/root/chunk-fvkh3y4a.js";
import {
  sx
} from "B:/~BUN/root/chunk-w3jccevj.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  e1
} from "B:/~BUN/root/chunk-dt45jjk2.js";
import {
  O,
  qo,
  Z,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Rr
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var h = {};
Rr(h, {
  PILL_INDENT_COLUMNS: () => x,
  ToolProgressHint: () => M,
  default: () => h
});
j();
var g = "ctrl+b",
  C = "ctrl+x ctrl+b",
  _ = new Set([g, C].map((t) => d1(woe(t))));

function D(t) {
  for (let o of t) {
    if (o.context !== "Task") continue;
    let m = d1(o.chord);
    if (o.action === "task:background") {
      if (!_.has(m)) return !0
    } else if (o.action === null && _.has(m)) return !0
  }
  return !1
}

function smn({
  handler: t,
  isActive: o
}) {
  let m = sx(),
    u = wi("task:background", "Task", g),
    d = vd(),
    l = d?.bindings,
    a = Z(() => l ? D(l) : !1, [l]),
    c = qo(t),
    p = !(m && !a);
  O(() => {
    if (!d || !o) return;
    return d.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => c(),
      singleKey: p
    })
  }, [d, o, p]);
  let f = a ? u : C,
    P = u === "" ? "" : i.terminal === "tmux" ? f.split(" ").map((b) => b === g ? `${g} ${g}` : b).join(" ") : f;
  return {
    cohesionFixes: m,
    gateOnShortcut: P,
    resolvedShortcut: u
  }
}
var x = 5;

function H(a) {
  return a.props.hint === "" ? null : e(s, {
    paddingLeft: x,
    children: e(n, {
      dimColor: !0,
      children: a.props.hint
    })
  })
}
var M = (t) => {
  let u = S(4),
    {
      toolUseId: o,
      hint: m
    } = t,
    d, l;
  if (u[0] !== m || u[1] !== o) d = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: m
    }
  }), l = [o, m], u[0] = m, u[1] = o, u[2] = d, u[3] = l;
  else d = u[2], l = u[3];
  return Bc.useRenderHook(Bc.useRenderInput("ToolProgress", d, l), H)
};
var I = 2,
  T = 160;

function Yjr(t) {
  let l = S(9),
    {
      toolUseId: o,
      keyOnly: m
    } = t,
    u = m === void 0 ? !1 : m,
    d = tE(),
    a;
  if (l[0] !== d) a = () => {
    $Ee(d)
  }, l[0] = d, l[1] = a;
  else a = l[1];
  let c = a,
    p;
  if (l[2] !== c) p = {
    handler: c,
    isActive: !0
  }, l[2] = c, l[3] = p;
  else p = l[3];
  let {
    cohesionFixes: f,
    gateOnShortcut: P
  } = smn(p), b = wi("task:background", "Task", "ctrl+b"), y = f ? P : i.terminal === "tmux" && b === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : b;
  if (u) {
    return null
  }
  if (ff() || f && y === "") {
    return null
  }
  let F;
  if (l[4] !== y) F = pb({
    chord: y,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), l[4] = y, l[5] = F;
  else F = l[5];
  let k = F;
  if (k === "") {
    return null
  }
  let A;
  if (l[6] !== k || l[7] !== o) A = e(h.ToolProgressHint, {
    toolUseId: o,
    hint: k
  }), l[6] = k, l[7] = o, l[8] = A;
  else A = l[8];
  return A
}

function Vma(t, {
  verbose: o,
  theme: m
}) {
  let {
    command: u
  } = t;
  if (!u) return null;
  if (!o) {
    let d = u.split(`
`);
    if (Kd()) {
      let c = Ceo(u);
      if (c) return c.length > T ? c.slice(0, T) + "\u2026" : c
    }
    let l = d.length > I,
      a = u.length > T;
    if (l || a) {
      let c = u;
      if (l) c = d.slice(0, I).join(`
`);
      if (c.length > T) c = c.slice(0, T);
      return r(n, {
        children: [c.trim(), "\u2026"]
      })
    }
  }
  return u
}

function Kma(t, {
  verbose: o,
  tools: m,
  terminalSize: u,
  inProgressToolCallCount: d
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
    verbose: o
  })
}

function qma() {
  return vvt()
}

function Yma(t, o, {
  verbose: m,
  theme: u,
  tools: d,
  style: l,
  input: a
}) {
  let p = o.at(-1)?.data?.timeoutMs,
    f = typeof a === "object" && a !== null && "command" in a && typeof a.command === "string" ? a.command : void 0;
  return e(Tvt, {
    content: t,
    verbose: m,
    timeoutMs: p,
    style: l,
    command: f
  })
}

function Xma(t, {
  verbose: o,
  progressMessagesForMessage: m,
  tools: u
}) {
  return e(ly, {
    result: t,
    verbose: o
  })
}

function Jma(t, {
  columns: o
}) {
  if (t.isImage) return !1;
  return e1(t.stdout, o) || e1(typeof t.stderr === "string" ? Cvt(t.stderr).trim().replace(fRn, "") : t.stderr, o)
}
export {
  smn,
  Yjr,
  Vma,
  Kma,
  qma,
  Yma,
  Xma,
  Jma
};
