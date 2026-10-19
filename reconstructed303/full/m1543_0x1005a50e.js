// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Og
} from "B:/~BUN/root/chunk-3md9ngvz.js";
import {
  rn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  s,
  n,
  y8
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  CV
} from "B:/~BUN/root/chunk-1nevq7mk.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Ee,
  Jt,
  ny,
  A,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();

function b() {
  let i = Ee(CV),
    [r, t, o, l] = y8(),
    f = l() ?? t.isVisible;
  return [r, f || i, o]
}

function SR({
  children: i
}) {
  let r = Ee(Og),
    [t, o, l] = b(),
    f = A(i),
    [, m] = ny((d) => d + 1, 0),
    u = !o;
  if (!u) f.current = i;
  let a = r?.columns,
    c = r?.rows;
  return Jt(() => {
    if (u && l()) m()
  }, [a, c, u, l]), e(s, {
    ref: t,
    children: f.current
  })
}

function zye(i) {
  let [r, t] = b(), o = A(i);
  if (t) o.current = i;
  return [r, o.current]
}

function tce(i) {
  let o = w(10),
    {
      elapsedTimeSeconds: r,
      timeoutMs: t
    } = i;
  if (r === void 0 && !t) {
    return null
  }
  let l;
  if (o[0] !== t) l = t ? rn(t, {
    hideTrailingZeros: !0
  }) : void 0, o[0] = t, o[1] = l;
  else l = o[1];
  let f = l;
  if (r === void 0) {
    const m = `(timeout ${f})`;
    let u;
    if (o[2] !== m) u = e(n, {
      dimColor: !0,
      children: m
    }), o[2] = m, o[3] = u;
    else u = o[3];
    return u
  }
  const m = r * 1000;
  let u;
  if (o[4] !== m) u = rn(m), o[4] = m, o[5] = u;
  else u = o[5];
  let a = u;
  if (f) {
    const c = `(${a} \xB7 timeout ${f})`;
    let d;
    if (o[6] !== c) d = e(n, {
      dimColor: !0,
      children: c
    }), o[6] = c, o[7] = d;
    else d = o[7];
    return d
  }
  const c = `(${a})`;
  let d;
  if (o[8] !== c) d = e(n, {
    dimColor: !0,
    children: c
  }), o[8] = c, o[9] = d;
  else d = o[9];
  return d
}
export {
  SR,
  zye,
  tce
};
