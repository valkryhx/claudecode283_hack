// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  MF
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  ts
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  sd
} from "B:/~BUN/root/chunk-j2ppas05.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Zl
} from "B:/~BUN/root/chunk-ps74es0g.js";
import {
  Z9,
  hj
} from "B:/~BUN/root/chunk-raq9cfnw.js";
import {
  Cs
} from "B:/~BUN/root/chunk-cbtzavb5.js";
import {
  f1,
  kL,
  $d
} from "B:/~BUN/root/chunk-znr767c8.js";
import {
  syr,
  vXt,
  P9,
  W$e
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  mS
} from "B:/~BUN/root/chunk-cg5h52rm.js";
import {
  Ftt
} from "B:/~BUN/root/chunk-hjynwxxe.js";
import {
  hLe
} from "B:/~BUN/root/chunk-ygcxhykw.js";
import {
  Ltt,
  Ntt
} from "B:/~BUN/root/chunk-1gq2c1h9.js";
import {
  Htt,
  Rm
} from "B:/~BUN/root/chunk-75n4yg0p.js";
import {
  mT
} from "B:/~BUN/root/chunk-91at02k2.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  aN
} from "B:/~BUN/root/chunk-gvcmagy5.js";
import {
  P,
  Mo,
  Z,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  Zu
} from "B:/~BUN/root/chunk-q56gve2c.js";
import {
  Mr
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var h = {};
Mr(h, {
  PILL_INDENT_COLUMNS: () => b,
  ToolProgressHint: () => M,
  default: () => h
});
B();
var g = "ctrl+b",
  C = "ctrl+x ctrl+b",
  _ = new Set([g, C].map((i) => hj(Z9(i))));

function j(i) {
  for (let o of i) {
    if (o.context !== "Task") continue;
    let u = hj(o.chord);
    if (o.action === "task:background") {
      if (!_.has(u)) return !0
    } else if (o.action === null && _.has(u)) return !0
  }
  return !1
}

function NGt({
  handler: i,
  isActive: o
}) {
  let u = mT(),
    l = Cs("task:background", "Task", g),
    d = Zl(),
    c = d?.bindings,
    t = Z(() => c ? j(c) : !1, [c]),
    p = Mo(i),
    m = !(u && !t);
  P(() => {
    if (!d || !o) return;
    return d.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => p(),
      singleKey: m
    })
  }, [d, o, m]);
  let f = t ? l : C,
    x = l === "" ? "" : a.terminal === "tmux" ? f.split(" ").map((y) => y === g ? `${g} ${g}` : y).join(" ") : f;
  return {
    cohesionFixes: u,
    gateOnShortcut: x,
    resolvedShortcut: l
  }
}
var b = 5;

function z(t) {
  return t.props.hint === "" ? null : e(s, {
    paddingLeft: b,
    children: e(n, {
      dimColor: !0,
      children: t.props.hint
    })
  })
}
var M = (i) => {
  let l = w(4),
    {
      toolUseId: o,
      hint: u
    } = i,
    d, c;
  if (l[0] !== u || l[1] !== o) d = () => ({
    requestId: o,
    props: {
      tool_use_id: o,
      kind: "background_hint",
      hint: u
    }
  }), c = [o, u], l[0] = u, l[1] = o, l[2] = d, l[3] = c;
  else d = l[2], c = l[3];
  return $d.useRenderHook($d.useRenderInput("ToolProgress", d, c), z)
};
var O = 2,
  T = 160;

function Ber(i) {
  let t = w(10),
    {
      toolUseId: o,
      keyOnly: u,
      onBackground: l
    } = i,
    d = u === void 0 ? !1 : u,
    c = mS(),
    p;
  if (t[0] !== l || t[1] !== c) p = () => {
    P9(c), l?.()
  }, t[0] = l, t[1] = c, t[2] = p;
  else p = t[2];
  let m = p,
    f;
  if (t[3] !== m) f = {
    handler: m,
    isActive: !0
  }, t[3] = m, t[4] = f;
  else f = t[4];
  let {
    cohesionFixes: x,
    gateOnShortcut: y
  } = NGt(f), F = Cs("task:background", "Task", "ctrl+b"), k = x ? y : a.terminal === "tmux" && F === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : F;
  if (d) {
    return null
  }
  if (Zu() || x && k === "") {
    return null
  }
  let D;
  if (t[5] !== k) D = MF({
    chord: k,
    action: "run in background",
    parens: !0,
    format: {
      keyCase: "lower"
    }
  }), t[5] = k, t[6] = D;
  else D = t[6];
  let R = D;
  if (R === "") {
    return null
  }
  let A;
  if (t[7] !== R || t[8] !== o) A = e(h.ToolProgressHint, {
    toolUseId: o,
    hint: R
  }), t[7] = R, t[8] = o, t[9] = A;
  else A = t[9];
  return A
}

function Dei(i, {
  verbose: o,
  theme: u
}) {
  let {
    command: l
  } = i;
  if (!l) return null;
  let d = W$e(l);
  if (d) return o ? d.filePath : ts(d.filePath);
  if (!o) {
    let c = l.split(`
`);
    if (sd()) {
      let m = syr(l);
      if (m) return m.length > T ? m.slice(0, T) + "\u2026" : m
    }
    let t = c.length > O,
      p = l.length > T;
    if (t || p) {
      let m = l;
      if (t) m = c.slice(0, O).join(`
`);
      if (m.length > T) m = m.slice(0, T);
      return r(n, {
        children: [m.trim(), "\u2026"]
      })
    }
  }
  return l
}

function Lei(i, {
  verbose: o,
  tools: u,
  terminalSize: l,
  inProgressToolCallCount: d
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
    verbose: o
  })
}

function Nei() {
  return Ltt()
}

function Fei(i, o, {
  verbose: u,
  theme: l,
  tools: d,
  style: c,
  input: t
}) {
  let m = o.at(-1)?.data?.timeoutMs,
    f = typeof t === "object" && t !== null && "command" in t && typeof t.command === "string" ? t.command : void 0;
  return e(Ftt, {
    content: i,
    verbose: u,
    timeoutMs: m,
    style: c,
    command: f
  })
}

function Hei(i, {
  verbose: o,
  progressMessagesForMessage: u,
  tools: l
}) {
  return e(Rm, {
    result: i,
    verbose: o
  })
}

function $ei(i, {
  columns: o
}) {
  if (i.isImage) return !1;
  return aN(i.stdout, o) || aN(typeof i.stderr === "string" ? Htt(i.stderr).trim().replace(vXt, "") : i.stderr, o)
}
export {
  NGt,
  Ber,
  Dei,
  Lei,
  Nei,
  Fei,
  Hei,
  $ei
};
