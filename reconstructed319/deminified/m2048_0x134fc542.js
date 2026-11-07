// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { U_ } from "B:/~BUN/root/chunk-xt7xbt1n.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Di, cut } from "B:/~BUN/root/chunk-bwk2g6e0.js";
import { TFt, gNe } from "B:/~BUN/root/chunk-zect39e3.js";
import { $a } from "B:/~BUN/root/chunk-12nc74pv.js";
function Cvt(p) {
  return p.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
function V(p) {
  let o = p.flatMap(item => {
    if (!gNe(item)) return [];
    let u = $a(item.text);
    return [cut(u) ?? u];
  }).join(`
`);
  return o.trim() === "" ? void 0 : o;
}
function ly(p) {
  let l = S(28),
    {
      result: result,
      verbose: verbose,
      verbatim: verbatim
    } = p,
    w = verbatim === void 0 ? !1 : verbatim,
    b,
    v,
    g,
    count,
    color,
    children,
    flexDirection;
  if (l[0] !== result || l[1] !== w || l[2] !== verbose) {
    let a;
    let I = Array.isArray(result);
    let m;
    if (l[10] !== I || l[11] !== result) m = typeof result === "string" ? result : I ? V(result) : void 0, l[10] = I, l[11] = result, l[12] = m;else m = l[12];
    let P = m;
    let R = w || I;
    if (P === void 0) a = "Tool execution failed";else {
      let d = (R ? $a(P) : Cvt($a(Di(P, "tool_use_error") ?? P)).replace(/<\/?error>/g, "")).trim();
      if (!verbose && !R && d.startsWith("InputValidationError: ")) a = "Invalid tool parameters";else if (d.startsWith("Error: ") || d.startsWith("Cancelled: ")) a = d;else a = `Error: ${d}`;
    }
    count = Dt(a, `
`) + 1 - TFt;
    g = Ye;
    v = s;
    flexDirection = "column";
    b = n;
    color = "error";
    children = verbose ? a : a.split(`
`).slice(0, TFt).join(`
`);
    l[0] = result, l[1] = w, l[2] = verbose, l[3] = b, l[4] = v, l[5] = g, l[6] = count, l[7] = color, l[8] = children, l[9] = flexDirection;
  } else b = l[3], v = l[4], g = l[5], count = l[6], color = l[7], children = l[8], flexDirection = l[9];
  let m;
  if (l[13] !== b || l[14] !== color || l[15] !== children) m = e(b, {
    color: color,
    children: children
  }), l[13] = b, l[14] = color, l[15] = children, l[16] = m;else m = l[16];
  let B;
  if (l[17] !== count || l[18] !== verbose) B = !verbose && e(U_, {
    count: count,
    expandable: !0
  }), l[17] = count, l[18] = verbose, l[19] = B;else B = l[19];
  let children_2;
  if (l[20] !== v || l[21] !== flexDirection || l[22] !== m || l[23] !== B) children_2 = r(v, {
    flexDirection: flexDirection,
    children: [m, B]
  }), l[20] = v, l[21] = flexDirection, l[22] = m, l[23] = B, l[24] = children_2;else children_2 = l[24];
  let U;
  if (l[25] !== g || l[26] !== children_2) U = e(g, {
    children: children_2
  }), l[25] = g, l[26] = children_2, l[27] = U;else U = l[27];
  return U;
}
export { Cvt, ly };