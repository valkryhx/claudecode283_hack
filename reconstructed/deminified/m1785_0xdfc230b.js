// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Fr, TUt, sde as symbol_2, r8e as symbol, Ry, $v } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, Ta, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { os } from "B:/~BUN/root/chunk-0d8a76zs.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { Yv } from "B:/~BUN/root/chunk-3qb0jwrq.js";
import { QD } from "B:/~BUN/root/chunk-1yna3b23.js";
import { $p } from "B:/~BUN/root/chunk-sv155qry.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { Go } from "B:/~BUN/root/chunk-b36qwjxy.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { ZQe } from "B:/~BUN/root/chunk-mqsfaz82.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { X, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function Fo(R) {
  return R.split(`
`).map(Ve);
}
function Xo(C, A) {
  return e(n, {
    color: C.color,
    children: C.text
  }, A);
}
function Jo(k, U) {
  return e(n, {
    dimColor: k.dim,
    children: k.segments.map(Xo)
  }, U);
}
function Qo() {
  return [];
}
function Wo(Ae, de) {
  return Ae.x - de.x;
}
function Zo(E, He) {
  let M = 0;
  return e(s, {
    height: 1,
    children: E.map((item, index) => {
      let Ue = Math.max(0, item.x - M);
      return M = Math.max(M, item.x) + 1, r(n, {
        children: [" ".repeat(Ue), e(n, {
          color: item.color,
          children: item.char
        })]
      }, index);
    })
  }, He);
}
function Oo(d) {
  return (d + 1) % G.length;
}
var Y = 3000,
  width = 48,
  height = 3;
function z(p) {
  let u = w(10),
    {
      live: live,
      boxRef: a,
      children: children
    } = p,
    l;
  if (u[0] !== children) l = e(s, {
    flexDirection: "column",
    width: width - 4,
    height: height,
    children: children
  }), u[0] = children, u[1] = l;else l = u[1];
  const dimColor = !live,
    color = live ? "claude" : void 0,
    children_2 = live ? `${$v} try it` : `  ${TUt} demo`;
  let f;
  if (u[2] !== dimColor || u[3] !== color || u[4] !== children_2) f = e(s, {
    position: "absolute",
    marginLeft: width - 12,
    children: e(n, {
      dimColor: dimColor,
      color: color,
      children: children_2
    })
  }), u[2] = dimColor, u[3] = color, u[4] = children_2, u[5] = f;else f = u[5];
  let b;
  if (u[6] !== a || u[7] !== l || u[8] !== f) b = r(s, {
    ref: a,
    borderStyle: "round",
    borderColor: "inactive",
    paddingX: 1,
    width: width,
    height: height + 2,
    children: [l, f]
  }), u[6] = a, u[7] = l, u[8] = f, u[9] = b;else b = u[9];
  return b;
}
var io = /\[(\w+):([^\]]*)\]/g;
function Ve(p) {
  let dim = p.startsWith("#"),
    a = dim ? p.slice(1) : p,
    segments = [],
    u = 0;
  for (let l of a.matchAll(io)) {
    if (l.index > u) segments.push({
      text: a.slice(u, l.index)
    });
    segments.push({
      text: l[2],
      color: l[1]
    }), u = l.index + l[0].length;
  }
  if (u < a.length) segments.push({
    text: a.slice(u)
  });
  if (segments.length === 0) segments.push({
    text: ""
  });
  return {
    dim: dim,
    segments: segments
  };
}
function v(p) {
  let b = w(4),
    {
      frames: frames
    } = p,
    a = frames.map(Fo),
    o = $p(Ba().prefersReducedMotion),
    [boxRef, l] = Ta(o ? null : Y),
    x = Math.floor(l / Y) % a.length,
    y = a[x];
  const h = z,
    children_3 = y.map(Jo);
  let d;
  if (b[0] !== h || b[1] !== boxRef || b[2] !== children_3) d = e(h, {
    boxRef: boxRef,
    children: children_3
  }), b[0] = h, b[1] = boxRef, b[2] = children_3, b[3] = d;else d = b[3];
  return d;
}
var G = [{
    label: "default",
    symbol: "",
    color: "text"
  }, {
    label: "accept edits on",
    symbol: symbol,
    color: "autoAccept"
  }, {
    label: "plan mode on",
    symbol: symbol_2,
    color: "planMode"
  }, {
    label: "auto mode on",
    symbol: symbol,
    color: "warning"
  }],
  Q = 80,
  ze = 60,
  W = 1400,
  L = 16,
  marginLeft = 60,
  width_2 = 100,
  go = [$v, Ry, Fr, "\xB7"],
  yo = ["claude", "success", "warning", "suggestion", "autoAccept"];
function je(p) {
  let t = [];
  for (let a = 0; a < p; a++) t.push({
    x: Math.floor(Math.random() * width_2),
    delay: Math.random() * 400,
    speed: 0.7 + Math.random() * 0.6,
    char: QD(go),
    color: QD(yo)
  });
  return t;
}
function ee(p) {
  let a = w(6),
    {
      onDone: onDone
    } = p,
    o;
  if (a[0] === S) o = je(40), a[0] = o;else o = a[0];
  let u = o,
    l = $p(Ba().prefersReducedMotion),
    [ref, y] = Ta(l ? null : ze),
    [h] = g(y),
    f = y - h,
    b;
  if (a[1] !== onDone) b = [onDone], a[1] = onDone, a[2] = b;else b = a[2];
  _r(onDone, W + 600, b);
  let d;
  if (a[3] !== f || a[4] !== ref) {
    let R = Array.from({
      length: L
    }, Qo);
    for (const C of u) {
      let A = Math.max(0, f - C.delay);
      let k = Math.floor(A / W * L * C.speed);
      if (k >= 0 && k < L) R[k].push(C);
    }
    for (const U of R) U.sort(Wo);
    d = e(s, {
      ref: ref,
      position: "absolute",
      marginLeft: marginLeft,
      flexDirection: "column",
      width: width_2,
      height: L,
      children: R.map(Zo)
    });
    a[3] = f, a[4] = ref, a[5] = d;
  } else d = a[5];
  return d;
}
function oe(p) {
  let h = w(14),
    {
      text: text
    } = p,
    a = ie(text),
    o = $p(Ba().prefersReducedMotion),
    [ref_2, l] = Ta(o ? null : Q),
    x = a + 20,
    y = Math.floor(l / Q) % x - 10,
    f;
  if (h[0] !== y || h[1] !== text) f = ZQe(text, y), h[0] = y, h[1] = text, h[2] = f;else f = h[2];
  let {
      before: b,
      shimmer: d,
      after: R
    } = f,
    C;
  if (h[3] !== b) C = e(n, {
    bold: !0,
    color: "claude",
    children: b
  }), h[3] = b, h[4] = C;else C = h[4];
  let A;
  if (h[5] !== d) A = e(n, {
    bold: !0,
    color: "claudeShimmer",
    children: d
  }), h[5] = d, h[6] = A;else A = h[6];
  let k;
  if (h[7] !== R) k = e(n, {
    bold: !0,
    color: "claude",
    children: R
  }), h[7] = R, h[8] = k;else k = h[8];
  let U;
  if (h[9] !== ref_2 || h[10] !== C || h[11] !== A || h[12] !== k) U = r(s, {
    ref: ref_2,
    children: [C, A, k]
  }), h[9] = ref_2, h[10] = C, h[11] = A, h[12] = k, h[13] = U;else U = h[13];
  return U;
}
function te() {
  let u = w(11),
    [p, t] = g(0),
    a = G[p],
    o = os("confirm:cycleMode", "Confirmation", "shift+tab"),
    l,
    x;
  if (u[0] === S) l = {
    "confirm:cycleMode": () => t(Oo)
  }, x = {
    context: "Confirmation"
  }, u[0] = l, u[1] = x;else l = u[0], x = u[1];
  Wt(l, x);
  let y;
  if (u[2] !== o) y = r(n, {
    dimColor: !0,
    children: ["Press ", o, " now", `

`]
  }), u[2] = o, u[3] = y;else y = u[3];
  const h = a.symbol ? `${a.symbol} ` : "  ";
  let f;
  if (u[4] !== a.color || u[5] !== a.label || u[6] !== h) f = r(n, {
    color: a.color,
    children: [h, a.label]
  }), u[4] = a.color, u[5] = a.label, u[6] = h, u[7] = f;else f = u[7];
  let b;
  if (u[8] !== y || u[9] !== f) b = e(z, {
    live: !0,
    children: r(n, {
      children: [y, f]
    })
  }), u[8] = y, u[9] = f, u[10] = b;else b = u[10];
  return b;
}
function B(p) {
  let a = w(2),
    {
      children: children_4
    } = p,
    o;
  if (a[0] !== children_4) o = e(n, {
    bold: !0,
    color: "claude",
    children: children_4
  }), a[0] = children_4, a[1] = o;else o = a[1];
  return o;
}
function m(p) {
  let a = w(2),
    {
      children: children_5
    } = p,
    o;
  if (a[0] !== children_5) o = e(n, {
    color: "suggestion",
    children: children_5
  }), a[0] = children_5, a[1] = o;else o = a[1];
  return o;
}
var _A = [{
  id: "at-mentions",
  title: "Talk to your codebase",
  tagline: "@ files, line refs",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Type ", e(B, {
        children: "@"
      }), " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering \u2014 no more pasting code."]
    }), e(v, {
      frames: [`> what does [suggestion:@]
#type a file name\u2026`, `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`, `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`, `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`]
    }), r(n, {
      children: ["Reference specific lines with ", e(m, {
        children: "src/app.ts:42"
      }), " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor."]
    }), r(n, {
      dimColor: !0,
      children: ["Also try: ", e(m, {
        children: "@folder/"
      }), " to attach a whole directory tree."]
    })]
  })
}, {
  id: "modes",
  title: "Steer with modes",
  tagline: "shift+tab, plan, auto",
  body: e(Je, {})
}, {
  id: "undo",
  title: "Undo anything",
  tagline: "/rewind, Esc-Esc",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Claude checkpoints your files before every edit. Press", " ", e(B, {
        children: "Esc Esc"
      }), " (double-tap) to open ", e(m, {
        children: "/rewind"
      }), " and roll back to any prior state \u2014 code, conversation, or both."]
    }), e(v, {
      frames: [`[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`, `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`, `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`]
    }), e(n, {
      children: "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean."
    }), r(n, {
      dimColor: !0,
      children: ["Also: ", e(m, {
        children: "/clear"
      }), " wipes conversation but keeps files.", " ", e(m, {
        children: "/branch"
      }), " forks the conversation to try two approaches."]
    })]
  })
}, {
  id: "background",
  title: "Run in the background",
  tagline: "tasks, /tasks",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Long builds and test suites do not have to block you. Add", " ", e(B, {
        children: "&"
      }), " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes."]
    }), e(v, {
      frames: [`> run the test suite [claude:&]
#task started in background`, `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`, `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`, `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`]
    }), r(n, {
      children: ["Run ", e(m, {
        children: "/tasks"
      }), " to see everything in flight. Claude can read task output mid-run and react to failures automatically."]
    }), e(n, {
      dimColor: !0,
      children: "Subagents also run as tasks \u2014 it is all one queue."
    })]
  })
}, {
  id: "memory",
  title: "Teach Claude your rules",
  tagline: "CLAUDE.md, /memory",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Drop a ", e(m, {
        children: "CLAUDE.md"
      }), " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories."]
    }), e(v, {
      frames: [`#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`, `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`, `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`]
    }), r(n, {
      children: ["Run ", e(m, {
        children: "/init"
      }), " to generate a starter CLAUDE.md from your codebase. Run ", e(m, {
        children: "/memory"
      }), " to edit it inline."]
    }), e(n, {
      dimColor: !0,
      children: "Works at three levels: repo, your home directory (all projects), and per-directory overrides."
    })]
  })
}, {
  id: "mcp",
  title: "Extend with tools",
  tagline: "MCP, /mcp",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ", e(m, {
        children: "/mcp"
      }), " to browse and connect servers."]
    }), e(v, {
      frames: [`> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`, `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`, `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`]
    }), e(n, {
      children: 'Once connected, tools appear automatically \u2014 ask Claude to "check my calendar" or "search our Notion" and it just works.'
    }), r(n, {
      dimColor: !0,
      children: ["From your shell:", " ", e(m, {
        children: "claude mcp add my-server -- npx some-mcp-pkg"
      }), " to wire one up without leaving the terminal."]
    })]
  })
}, {
  id: "automate",
  title: "Automate your workflow",
  tagline: "skills, hooks",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Save a prompt to ", e(m, {
        children: ".claude/skills/deploy/SKILL.md"
      }), " and it becomes ", e(m, {
        children: "/deploy"
      }), " \u2014 type it, Claude runs it. Run", " ", e(m, {
        children: "/skills"
      }), " to see what you have."]
    }), e(v, {
      frames: [`> [suggestion:/deploy] staging
#\u25D0 skill: deploy`, `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`, `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`]
    }), r(n, {
      children: ["Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ", e(m, {
        children: "/hooks"
      }), " to see what fires when."]
    }), r(n, {
      dimColor: !0,
      children: ["Run ", e(m, {
        children: "/install-github-app"
      }), " to let Claude review PRs when tagged."]
    })]
  })
}, {
  id: "subagents",
  title: "Multiply yourself",
  tagline: "subagents",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(n, {
      children: 'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.'
    }), e(v, {
      frames: [`> find any error handling bugs
#\u25D0 Spawning 3 agents\u2026`, `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`, `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`, `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`]
    }), r(n, {
      dimColor: !0,
      children: ["Subagents run in isolated context. For true parallel sessions on separate branches, launch with ", e(m, {
        children: "claude --worktree"
      }), "."]
    })]
  })
}, {
  id: "cross-device",
  title: "Code from anywhere",
  tagline: "/remote-control, /teleport",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Run ", e(m, {
        children: "/remote-control"
      }), " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control."]
    }), e(v, {
      frames: [`> [suggestion:/remote-control]
#\u25D0 connecting\u2026`, `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`, `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`, `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`]
    }), r(n, {
      children: ["Run ", e(m, {
        children: "/teleport"
      }), " to move a session between here and the cloud \u2014 send this one up to keep it going after you close the lid, or pull a cloud session into this terminal with full history."]
    }), e(n, {
      dimColor: !0,
      children: "Kick off a long task, close your laptop, check progress from your phone."
    })]
  })
}, {
  id: "model-dial",
  title: "Dial the model",
  tagline: "/model, /effort",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(n, {
      children: ["Run ", e(m, {
        children: "/model"
      }), " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth."]
    }), e(v, {
      frames: [`> [suggestion:/effort] high
#effort set to [claude:high]`, `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`, `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`]
    }), r(n, {
      children: [e(m, {
        children: "/effort"
      }), " controls how long Claude thinks before answering.", " ", e(B, {
        children: "high"
      }), " for tricky bugs, ", e(B, {
        children: "low"
      }), " when you just need a quick edit."]
    }), r(n, {
      dimColor: !0,
      children: ["Also: ", e(m, {
        children: "/fast"
      }), " toggles fast mode \u2014 same model, faster output."]
    })]
  })
}];
function ne() {
  let p = w(1),
    t;
  if (p[0] === S) t = e(n, {
    dimColor: !0,
    italic: !0,
    children: r(ye, {
      children: [e(F, {
        chord: ["up", "down"],
        action: "select"
      }), e(F, {
        chord: "enter",
        action: "open"
      }), e(F, {
        chord: "escape",
        action: "close"
      })]
    })
  }), p[0] = t;else t = p[0];
  return t;
}
function se() {
  let p = w(1),
    t;
  if (p[0] === S) t = e(n, {
    dimColor: !0,
    italic: !0,
    children: r(ye, {
      children: [e(F, {
        chord: "enter",
        action: "mark done"
      }), e(F, {
        chord: "escape",
        action: "back"
      })]
    })
  }), p[0] = t;else t = p[0];
  return t;
}
function Je() {
  let p = w(9),
    t,
    a;
  if (p[0] === S) t = r(n, {
    children: ["Press ", e(B, {
      children: "shift+tab"
    }), " to cycle permission modes. Each mode changes how much Claude asks before acting:"]
  }), a = e(te, {}), p[0] = t, p[1] = a;else t = p[0], a = p[1];
  let o;
  if (p[2] === S) o = r(n, {
    children: [e(n, {
      color: "success",
      children: "default"
    }), " \u2014 ask before every edit"]
  }), p[2] = o;else o = p[2];
  let u;
  if (p[3] === S) u = r(n, {
    children: [e(n, {
      color: "autoAccept",
      children: "accept edits"
    }), " \u2014 edit freely, ask for commands"]
  }), p[3] = u;else u = p[3];
  let l;
  if (p[4] === S) l = r(n, {
    children: [e(n, {
      color: "planMode",
      children: "plan"
    }), " \u2014 research and propose, never touch files"]
  }), p[4] = l;else l = p[4];
  let x;
  if (p[5] === S) x = r(s, {
    flexDirection: "column",
    paddingLeft: 2,
    children: [o, u, l, r(n, {
      children: [e(n, {
        color: "warning",
        children: "auto"
      }), " \u2014 Claude decides what is safe"]
    })]
  }), p[5] = x;else x = p[5];
  let y;
  if (p[6] === S) y = e(n, {
    color: "planMode",
    children: "plan"
  }), p[6] = y;else y = p[6];
  let h;
  if (p[7] === S) h = e(n, {
    color: "warning",
    children: "auto"
  }), p[7] = h;else h = p[7];
  let f;
  if (p[8] === S) f = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [t, a, x, r(n, {
      dimColor: !0,
      children: ["Use ", y, " for big refactors you want to review first. Use ", h, " for long unattended tasks. Run ", e(m, {
        children: "/permissions"
      }), " to pre-allow specific commands so Claude stops asking about them."]
    })]
  }), p[8] = f;else f = p[8];
  return f;
}
N();
function kt(Rt) {
  return _A.some(item => item.id === Rt);
}
function wt() {
  let Pt = le().powerupsUnlocked ?? [];
  return new Set(Pt.filter(kt));
}
function WXe(p) {
  let d = w(48),
    {
      onExit: onExit
    } = p,
    {
      storageV5: storageV5
    } = ke(),
    [o, u] = g(wt),
    [lesson, x] = g(null),
    [defaultFocusValue, h] = g(_A[0].id),
    [f, b] = g(!1),
    R;
  if (d[0] === S) R = () => b(!1), d[0] = R;else R = d[0];
  let onDone_3 = R,
    A;
  if (d[1] !== o) A = function U(k) {
    h(k.id), x(k), i("tengu_powerup_lesson_opened", {
      lesson_id: c(k.id),
      was_already_unlocked: o.has(k.id),
      unlocked_count: o.size
    });
  }, d[1] = o, d[2] = A;else A = d[2];
  let U = A,
    Ae;
  if (d[3] !== storageV5 || d[4] !== o) Ae = function M(de) {
    if (o.has(de)) {
      return;
    }
    let E = new Set(o).add(de);
    if (u(E), Ee(He => ({
      ...He,
      powerupsUnlocked: [...E]
    }), storageV5), i("tengu_powerup_lesson_completed", {
      lesson_id: c(de),
      unlocked_count: E.size,
      all_unlocked: E.size === _A.length
    }), E.size === _A.length) b(!0);
  }, d[3] = storageV5, d[4] = o, d[5] = Ae;else Ae = d[5];
  let M = Ae,
    _;
  if (d[6] !== o) _ = _A.map(item => {
    let Ue = o.has(item.id);
    let children_6 = `${Ue ? Z.tick : Z.circle} ${item.title}`;
    return {
      label: Ue ? e(n, {
        color: "success",
        children: children_6
      }) : children_6,
      value: item.id,
      description: item.tagline
    };
  }), d[6] = o, d[7] = _;else _ = d[7];
  let options = _;
  if (lesson) {
    let isUnlocked;
    if (d[8] !== o || d[9] !== lesson.id) isUnlocked = o.has(lesson.id), d[8] = o, d[9] = lesson.id, d[10] = isUnlocked;else isUnlocked = d[10];
    let onDone_2;
    if (d[11] !== M || d[12] !== lesson.id) onDone_2 = () => {
      M(lesson.id), x(null);
    }, d[11] = M, d[12] = lesson.id, d[13] = onDone_2;else onDone_2 = d[13];
    let onBack;
    if (d[14] === S) onBack = () => x(null), d[14] = onBack;else onBack = d[14];
    let I;
    if (d[15] !== isUnlocked || d[16] !== onDone_2 || d[17] !== lesson) I = e(Be, {
      lesson: lesson,
      isUnlocked: isUnlocked,
      onDone: onDone_2,
      onBack: onBack
    }), d[15] = isUnlocked, d[16] = onDone_2, d[17] = lesson, d[18] = I;else I = d[18];
    return I;
  }
  let ue = o.size === _A.length,
    P;
  if (d[19] !== ue) P = ue ? e(oe, {
    text: "All powered up"
  }) : e(n, {
    bold: !0,
    color: "claude",
    children: "Power-ups"
  }), d[19] = ue, d[20] = P;else P = d[20];
  let D;
  if (d[21] !== o.size) D = r(n, {
    dimColor: !0,
    children: [" ", o.size, "/", _A.length, " unlocked", " "]
  }), d[21] = o.size, d[22] = D;else D = d[22];
  const ratio = o.size / _A.length;
  let I;
  if (d[23] !== ratio) I = e(Yv, {
    ratio: ratio,
    width: 16,
    fillColor: "claude",
    emptyColor: "inactive"
  }), d[23] = ratio, d[24] = I;else I = d[24];
  let me;
  if (d[25] !== P || d[26] !== D || d[27] !== I) me = r(s, {
    marginBottom: 1,
    children: [P, D, I]
  }), d[25] = P, d[26] = D, d[27] = I, d[28] = me;else me = d[28];
  const children_7 = ue ? "Now go build something." : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.";
  let pe;
  if (d[29] !== children_7) pe = e(s, {
    marginBottom: 1,
    children: e(n, {
      dimColor: !0,
      wrap: "wrap",
      children: children_7
    })
  }), d[29] = children_7, d[30] = pe;else pe = d[30];
  let onChange;
  if (d[31] !== U) onChange = Ct => {
    let eo = _A.find(item => item.id === Ct);
    if (eo) U(eo);
  }, d[31] = U, d[32] = onChange;else onChange = d[32];
  let onCancel;
  if (d[33] !== onExit) onCancel = () => onExit("Power-ups closed"), d[33] = onExit, d[34] = onCancel;else onCancel = d[34];
  let ge;
  if (d[35] !== options || d[36] !== defaultFocusValue || d[37] !== onChange || d[38] !== onCancel) ge = e(Fe, {
    options: options,
    hideIndexes: !0,
    visibleOptionCount: _A.length,
    defaultFocusValue: defaultFocusValue,
    onChange: onChange,
    onCancel: onCancel
  }), d[35] = options, d[36] = defaultFocusValue, d[37] = onChange, d[38] = onCancel, d[39] = ge;else ge = d[39];
  let oo;
  if (d[40] === S) oo = e(s, {
    marginTop: 1,
    children: e(ne, {})
  }), d[40] = oo;else oo = d[40];
  let xe;
  if (d[41] !== f) xe = f && e(ee, {
    onDone: onDone_3
  }), d[41] = f, d[42] = xe;else xe = d[42];
  let to;
  if (d[43] !== pe || d[44] !== ge || d[45] !== xe || d[46] !== me) to = e(Go, {
    color: "claude",
    children: r(s, {
      flexDirection: "column",
      children: [me, pe, ge, oo, xe]
    })
  }), d[43] = pe, d[44] = ge, d[45] = xe, d[46] = me, d[47] = to;else to = d[47];
  return to;
}
function Be(p) {
  let l = w(15),
    {
      lesson: lesson_2,
      isUnlocked: isUnlocked_2,
      onDone: onDone_4,
      onBack: onBack_2
    } = p,
    x;
  if (l[0] !== onBack_2 || l[1] !== onDone_4) x = {
    "confirm:yes": onDone_4,
    "confirm:no": onBack_2
  }, l[0] = onBack_2, l[1] = onDone_4, l[2] = x;else x = l[2];
  let y;
  if (l[3] === S) y = {
    context: "Confirmation"
  }, l[3] = y;else y = l[3];
  Wt(x, y);
  const status = isUnlocked_2 ? "success" : "pending";
  let f;
  if (l[4] !== status) f = e(et, {
    status: status,
    withSpace: !0
  }), l[4] = status, l[5] = f;else f = l[5];
  let b;
  if (l[6] !== lesson_2.title) b = e(n, {
    bold: !0,
    color: "claude",
    children: lesson_2.title
  }), l[6] = lesson_2.title, l[7] = b;else b = l[7];
  let d;
  if (l[8] !== f || l[9] !== b) d = r(s, {
    children: [f, b]
  }), l[8] = f, l[9] = b, l[10] = d;else d = l[10];
  let R;
  if (l[11] === S) R = e(se, {}), l[11] = R;else R = l[11];
  let C;
  if (l[12] !== lesson_2.body || l[13] !== d) C = e(Go, {
    color: "claude",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [d, lesson_2.body, R]
    })
  }), l[12] = lesson_2.body, l[13] = d, l[14] = C;else C = l[14];
  return C;
}
export { _A, WXe };