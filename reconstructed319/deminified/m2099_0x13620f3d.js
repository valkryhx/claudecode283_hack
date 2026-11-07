// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { IC, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Hc } from "B:/~BUN/root/chunk-bkfncj77.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { ZO } from "B:/~BUN/root/chunk-7fmn02b1.js";
import { tke } from "B:/~BUN/root/chunk-dkh18dq0.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { $a } from "B:/~BUN/root/chunk-12nc74pv.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var L = 5,
  H = 5;
function cYe(b) {
  let t = S(27),
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
    } = Re(),
    A;
  if (t[0] !== columns || t[1] !== output || t[2] !== verbose) A = verbose ? null : C(output, columns), t[0] = columns, t[1] = output, t[2] = verbose, t[3] = A;else A = t[3];
  let g = A,
    E;
  if (t[4] !== fullOutput || t[5] !== g) E = g ? g.text : $a(fullOutput.trim()), t[4] = fullOutput, t[5] = g, t[6] = E;else E = t[6];
  let children = E;
  if (!children) {
    let d;
    if (t[7] === w) d = e(n, {
      dimColor: !0,
      children: "Running\u2026 "
    }), t[7] = d;else d = t[7];
    let f;
    if (t[8] !== elapsedTimeSeconds || t[9] !== timeoutMs) f = e(Ye, {
      children: r(ZO, {
        children: [d, e(tke, {
          elapsedTimeSeconds: elapsedTimeSeconds,
          timeoutMs: timeoutMs
        })]
      })
    }), t[8] = elapsedTimeSeconds, t[9] = timeoutMs, t[10] = f;else f = t[10];
    return f;
  }
  let _ = g ? L : Dt(fullOutput, `
`) + 1,
    F = (totalLines ? Math.max(0, totalLines - _) : 0) + (g?.dropped ?? 0),
    children_2 = "";
  if (totalBytes && totalLines) children_2 = `~${totalLines} lines`;else if (F > 0) children_2 = `+${F} lines`;
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
  if (t[15] !== elapsedTimeSeconds || t[16] !== timeoutMs) B = e(tke, {
    elapsedTimeSeconds: elapsedTimeSeconds,
    timeoutMs: timeoutMs
  }), t[15] = elapsedTimeSeconds, t[16] = timeoutMs, t[17] = B;else B = t[17];
  let O;
  if (t[18] !== totalBytes) O = totalBytes ? e(n, {
    dimColor: !0,
    children: en(totalBytes)
  }) : null, t[18] = totalBytes, t[19] = O;else O = t[19];
  let R;
  if (t[20] !== f || t[21] !== B || t[22] !== O) R = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [f, B, O]
  }), t[20] = f, t[21] = B, t[22] = O, t[23] = R;else R = t[23];
  let G;
  if (t[24] !== d || t[25] !== R) G = e(Ye, {
    children: e(ZO, {
      children: r(s, {
        flexDirection: "column",
        children: [d, R]
      })
    })
  }), t[24] = d, t[25] = R, t[26] = G;else G = t[26];
  return G;
}
function vFo({
  output: output_2,
  fullOutput: fullOutput_2,
  totalLines: totalLines_2
}, i) {
  if (!fullOutput_2.trim()) return !1;
  return (totalLines_2 ?? 0) > L || C(output_2, i).clipped;
}
function C(b, m) {
  let p = Math.max(1, m - H),
    i = $a(b.trim()).replace(/\r\n?/g, `
`).split(`
`).filter(item => item),
    l = [],
    u = 0,
    dropped = i.length;
  while (dropped > 0 && u < L) {
    let a = i[--dropped],
      c = Hc(a, p, {
        hard: !0,
        trim: !1
      }).split(`
`),
      t = L - u;
    if (c.length > t) return l.unshift(IC(c.slice(-t).join(""), " ")), {
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
export { cYe, vFo };