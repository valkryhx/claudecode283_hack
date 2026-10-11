// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Xw } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n, HQ } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { oU } from "B:/~BUN/root/chunk-bxbr6qzf.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Pe, sn, RE, T, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
function IQ(i) {
  let o = w(10),
    {
      elapsedTimeSeconds: elapsedTimeSeconds,
      timeoutMs: timeoutMs
    } = i;
  if (elapsedTimeSeconds === void 0 && !timeoutMs) {
    return null;
  }
  let l;
  if (o[0] !== timeoutMs) l = timeoutMs ? Zt(timeoutMs, {
    hideTrailingZeros: !0
  }) : void 0, o[0] = timeoutMs, o[1] = l;else l = o[1];
  let f = l;
  if (elapsedTimeSeconds === void 0) {
    const children = `(timeout ${f})`;
    let u;
    if (o[2] !== children) u = e(n, {
      dimColor: !0,
      children: children
    }), o[2] = children, o[3] = u;else u = o[3];
    return u;
  }
  const m = elapsedTimeSeconds * 1000;
  let u;
  if (o[4] !== m) u = Zt(m), o[4] = m, o[5] = u;else u = o[5];
  let a = u;
  if (f) {
    const children_2 = `(${a} \xB7 timeout ${f})`;
    let d;
    if (o[6] !== children_2) d = e(n, {
      dimColor: !0,
      children: children_2
    }), o[6] = children_2, o[7] = d;else d = o[7];
    return d;
  }
  const children_3 = `(${a})`;
  let d;
  if (o[8] !== children_3) d = e(n, {
    dimColor: !0,
    children: children_3
  }), o[8] = children_3, o[9] = d;else d = o[9];
  return d;
}
N();
function x() {
  let i = Pe(oU),
    [r, t, o, l] = HQ(),
    f = l() ?? t.isVisible;
  return [r, f || i, o];
}
function Kv({
  children: children_4
}) {
  let r = Pe(Xw),
    [ref, o, l] = x(),
    f = T(children_4),
    [, m] = RE(d => d + 1, 0),
    u = !o;
  if (!u) f.current = children_4;
  let a = r?.columns,
    c = r?.rows;
  return sn(() => {
    if (u && l()) m();
  }, [a, c, u, l]), e(s, {
    ref: ref,
    children: f.current
  });
}
function Vre(i) {
  let [r, t] = x(),
    o = T(i);
  if (t) o.current = i;
  return [r, o.current];
}
export { Kv, Vre, IQ };