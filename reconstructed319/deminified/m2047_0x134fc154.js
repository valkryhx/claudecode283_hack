// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { cn } from "B:/~BUN/root/chunk-bkfncj77.js";
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
function tke(M) {
  let d = S(10),
    {
      elapsedTimeSeconds: elapsedTimeSeconds,
      timeoutMs: timeoutMs
    } = M;
  if (elapsedTimeSeconds === void 0 && !timeoutMs) {
    return null;
  }
  let f;
  if (d[0] !== timeoutMs) f = timeoutMs ? cn(timeoutMs, {
    hideTrailingZeros: !0
  }) : void 0, d[0] = timeoutMs, d[1] = f;else f = d[1];
  let a = f;
  if (elapsedTimeSeconds === void 0) {
    const children = `(timeout ${a})`;
    let m;
    if (d[2] !== children) m = e(n, {
      dimColor: !0,
      children: children
    }), d[2] = children, d[3] = m;else m = d[3];
    return m;
  }
  const t = elapsedTimeSeconds * 1000;
  let m;
  if (d[4] !== t) m = cn(t), d[4] = t, d[5] = m;else m = d[5];
  let T = m;
  if (a) {
    const children_2 = `(${T} \xB7 timeout ${a})`;
    let s;
    if (d[6] !== children_2) s = e(n, {
      dimColor: !0,
      children: children_2
    }), d[6] = children_2, d[7] = s;else s = d[7];
    return s;
  }
  const children_3 = `(${T})`;
  let s;
  if (d[8] !== children_3) s = e(n, {
    dimColor: !0,
    children: children_3
  }), d[8] = children_3, d[9] = s;else s = d[9];
  return s;
}
export { tke };