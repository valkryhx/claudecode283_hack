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
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { d_ } from "B:/~BUN/root/chunk-653rvs3k.js";
import { ze } from "B:/~BUN/root/chunk-yqm8ptb8.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Is } from "B:/~BUN/root/chunk-906np0vb.js";
import { Gpt, Uve } from "B:/~BUN/root/chunk-jj7se8bh.js";
function Htt(c) {
  return c.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}
var U = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i,
  V = /<\/?tool_use_error\b/i;
function S(c) {
  let o = c.flatMap(item => {
    if (!Uve(item)) return [];
    let d = u0(item.text),
      a = U.exec(d)?.[1];
    return [a !== void 0 && !V.test(a) ? a : d];
  }).join(`
`);
  return o.trim() === "" ? void 0 : o;
}
function Rm(c) {
  let u = w(28),
    {
      result: result,
      verbose: verbose,
      verbatim: verbatim
    } = c,
    a = verbatim === void 0 ? !1 : verbatim,
    v,
    _,
    g,
    count,
    color,
    children,
    flexDirection;
  if (u[0] !== result || u[1] !== a || u[2] !== verbose) {
    let l;
    let h = Array.isArray(result);
    let m;
    if (u[10] !== h || u[11] !== result) m = typeof result === "string" ? result : h ? S(result) : void 0, u[10] = h, u[11] = result, u[12] = m;else m = u[12];
    let k = m;
    let j = a || h;
    if (k === void 0) l = "Tool execution failed";else {
      let p = (j ? u0(k) : Htt(u0(Is(k, "tool_use_error") ?? k)).replace(/<\/?error>/g, "")).trim();
      if (!verbose && !j && p.startsWith("InputValidationError: ")) l = "Invalid tool parameters";else if (p.startsWith("Error: ") || p.startsWith("Cancelled: ")) l = p;else l = `Error: ${p}`;
    }
    count = $t(l, `
`) + 1 - Gpt;
    g = ze;
    _ = s;
    flexDirection = "column";
    v = n;
    color = "error";
    children = verbose ? l : l.split(`
`).slice(0, Gpt).join(`
`);
    u[0] = result, u[1] = a, u[2] = verbose, u[3] = v, u[4] = _, u[5] = g, u[6] = count, u[7] = color, u[8] = children, u[9] = flexDirection;
  } else v = u[3], _ = u[4], g = u[5], count = u[6], color = u[7], children = u[8], flexDirection = u[9];
  let m;
  if (u[13] !== v || u[14] !== color || u[15] !== children) m = e(v, {
    color: color,
    children: children
  }), u[13] = v, u[14] = color, u[15] = children, u[16] = m;else m = u[16];
  let I;
  if (u[17] !== count || u[18] !== verbose) I = !verbose && e(d_, {
    count: count,
    expandable: !0
  }), u[17] = count, u[18] = verbose, u[19] = I;else I = u[19];
  let children_2;
  if (u[20] !== _ || u[21] !== flexDirection || u[22] !== m || u[23] !== I) children_2 = r(_, {
    flexDirection: flexDirection,
    children: [m, I]
  }), u[20] = _, u[21] = flexDirection, u[22] = m, u[23] = I, u[24] = children_2;else children_2 = u[24];
  let B;
  if (u[25] !== g || u[26] !== children_2) B = e(g, {
    children: children_2
  }), u[25] = g, u[26] = children_2, u[27] = B;else B = u[27];
  return B;
}
export { Htt, Rm };