// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Gt
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  wt
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  Wu
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  Kv,
  IQ
} from "B:/~BUN/root/chunk-v59c2dpf.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Ut
} from "B:/~BUN/root/chunk-qbrwdgwc.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var x = 5,
  G = 5;

function xbe(b) {
  let t = w(27),
    {
      output: m,
      fullOutput: p,
      elapsedTimeSeconds: i,
      totalLines: l,
      totalBytes: u,
      timeoutMs: o,
      verbose: a
    } = b,
    {
      columns: c
    } = ve(),
    z;
  if (t[0] !== c || t[1] !== m || t[2] !== a) z = a ? null : v(m, c), t[0] = c, t[1] = m, t[2] = a, t[3] = z;
  else z = t[3];
  let g = z,
    A;
  if (t[4] !== p || t[5] !== g) A = g ? g.text : wt(p.trim()), t[4] = p, t[5] = g, t[6] = A;
  else A = t[6];
  let M = A;
  if (!M) {
    let d;
    if (t[7] === S) d = e(n, {
      dimColor: !0,
      children: "Running\u2026 "
    }), t[7] = d;
    else d = t[7];
    let f;
    if (t[8] !== i || t[9] !== o) f = e(Le, {
      children: r(Kv, {
        children: [d, e(IQ, {
          elapsedTimeSeconds: i,
          timeoutMs: o
        })]
      })
    }), t[8] = i, t[9] = o, t[10] = f;
    else f = t[10];
    return f
  }
  let _ = g ? x : Gt(p, `
`) + 1,
    E = (l ? Math.max(0, l - _) : 0) + (g?.dropped ?? 0),
    L = "";
  if (u && l) L = `~${l} lines`;
  else if (E > 0) L = `+${E} lines`;
  let d;
  if (t[11] !== M) d = e(n, {
    dimColor: !0,
    children: M
  }), t[11] = M, t[12] = d;
  else d = t[12];
  let f;
  if (t[13] !== L) f = L ? e(n, {
    dimColor: !0,
    children: L
  }) : null, t[13] = L, t[14] = f;
  else f = t[14];
  let B;
  if (t[15] !== i || t[16] !== o) B = e(IQ, {
    elapsedTimeSeconds: i,
    timeoutMs: o
  }), t[15] = i, t[16] = o, t[17] = B;
  else B = t[17];
  let O;
  if (t[18] !== u) O = u ? e(n, {
    dimColor: !0,
    children: Ut(u)
  }) : null, t[18] = u, t[19] = O;
  else O = t[19];
  let R;
  if (t[20] !== f || t[21] !== B || t[22] !== O) R = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [f, B, O]
  }), t[20] = f, t[21] = B, t[22] = O, t[23] = R;
  else R = t[23];
  let F;
  if (t[24] !== d || t[25] !== R) F = e(Le, {
    children: e(Kv, {
      children: r(s, {
        flexDirection: "column",
        children: [d, R]
      })
    })
  }), t[24] = d, t[25] = R, t[26] = F;
  else F = t[26];
  return F
}

function uZn({
  output: b,
  fullOutput: m,
  totalLines: p
}, i) {
  if (!m.trim()) return !1;
  return (p ?? 0) > x || v(b, i).clipped
}

function v(b, m) {
  let p = Math.max(1, m - G),
    i = wt(b.trim()).replace(/\r\n?/g, `
`).split(`
`).filter((a) => a),
    l = [],
    u = 0,
    o = i.length;
  while (o > 0 && u < x) {
    let a = i[--o],
      c = Wu(a, p, {
        hard: !0,
        trim: !1
      }).split(`
`),
      t = x - u;
    if (c.length > t) return l.unshift(c.slice(-t).join("").replace(/^ /, "")), {
      text: l.join(`
`),
      clipped: !0,
      dropped: o
    };
    l.unshift(a), u += c.length
  }
  return {
    text: l.join(`
`),
    clipped: o > 0,
    dropped: o
  }
}
export {
  xbe,
  uZn
};
