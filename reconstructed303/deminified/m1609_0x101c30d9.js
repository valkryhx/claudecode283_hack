// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { u0 } from "B:/~BUN/root/chunk-6za2ez23.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Lc } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { ze } from "B:/~BUN/root/chunk-yqm8ptb8.js";
import { SR, tce } from "B:/~BUN/root/chunk-dp4s51j4.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
var x = 5,
  G = 5;
function hLe(b) {
  let t = w(27),
    {
      output: output,
      fullOutput: fullOutput,
      elapsedTimeSeconds: elapsedTimeSeconds,
      totalLines: totalLines,
      totalBytes: totalBytes,
      timeoutMs: timeoutMs,
      verbose: verbose
    } = b,
    {
      columns: columns
    } = Te(),
    z;
  if (t[0] !== columns || t[1] !== output || t[2] !== verbose) z = verbose ? null : v(output, columns), t[0] = columns, t[1] = output, t[2] = verbose, t[3] = z;else z = t[3];
  let g = z,
    A;
  if (t[4] !== fullOutput || t[5] !== g) A = g ? g.text : u0(fullOutput.trim()), t[4] = fullOutput, t[5] = g, t[6] = A;else A = t[6];
  let children = A;
  if (!children) {
    let d;
    if (t[7] === S) d = e(n, {
      dimColor: !0,
      children: "Running\u2026 "
    }), t[7] = d;else d = t[7];
    let f;
    if (t[8] !== elapsedTimeSeconds || t[9] !== timeoutMs) f = e(ze, {
      children: r(SR, {
        children: [d, e(tce, {
          elapsedTimeSeconds: elapsedTimeSeconds,
          timeoutMs: timeoutMs
        })]
      })
    }), t[8] = elapsedTimeSeconds, t[9] = timeoutMs, t[10] = f;else f = t[10];
    return f;
  }
  let _ = g ? x : $t(fullOutput, `
`) + 1,
    E = (totalLines ? Math.max(0, totalLines - _) : 0) + (g?.dropped ?? 0),
    children_2 = "";
  if (totalBytes && totalLines) children_2 = `~${totalLines} lines`;else if (E > 0) children_2 = `+${E} lines`;
  let d;
  if (t[11] !== children) d = e(n, {
    dimColor: !0,
    children: children
  }), t[11] = children, t[12] = d;else d = t[12];
  let f;
  if (t[13] !== children_2) f = children_2 ? e(n, {
    dimColor: !0,
    children: children_2
  }) : null, t[13] = children_2, t[14] = f;else f = t[14];
  let B;
  if (t[15] !== elapsedTimeSeconds || t[16] !== timeoutMs) B = e(tce, {
    elapsedTimeSeconds: elapsedTimeSeconds,
    timeoutMs: timeoutMs
  }), t[15] = elapsedTimeSeconds, t[16] = timeoutMs, t[17] = B;else B = t[17];
  let O;
  if (t[18] !== totalBytes) O = totalBytes ? e(n, {
    dimColor: !0,
    children: Zt(totalBytes)
  }) : null, t[18] = totalBytes, t[19] = O;else O = t[19];
  let R;
  if (t[20] !== f || t[21] !== B || t[22] !== O) R = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [f, B, O]
  }), t[20] = f, t[21] = B, t[22] = O, t[23] = R;else R = t[23];
  let F;
  if (t[24] !== d || t[25] !== R) F = e(ze, {
    children: e(SR, {
      children: r(s, {
        flexDirection: "column",
        children: [d, R]
      })
    })
  }), t[24] = d, t[25] = R, t[26] = F;else F = t[26];
  return F;
}
function qVr({
  output: output_2,
  fullOutput: fullOutput_2,
  totalLines: totalLines_2
}, i) {
  if (!fullOutput_2.trim()) return !1;
  return (totalLines_2 ?? 0) > x || v(output_2, i).clipped;
}
function v(b, m) {
  let p = Math.max(1, m - G),
    i = u0(b.trim()).replace(/\r\n?/g, `
`).split(`
`).filter(item => item),
    l = [],
    u = 0,
    dropped = i.length;
  while (dropped > 0 && u < x) {
    let a = i[--dropped],
      c = Lc(a, p, {
        hard: !0,
        trim: !1
      }).split(`
`),
      t = x - u;
    if (c.length > t) return l.unshift(c.slice(-t).join("").replace(/^ /, "")), {
      text: l.join(`
`),
      clipped: !0,
      dropped: dropped
    };
    l.unshift(a), u += c.length;
  }
  return {
    text: l.join(`
`),
    clipped: dropped > 0,
    dropped: dropped
  };
}
export { hLe, qVr };