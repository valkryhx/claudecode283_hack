// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { mZ, WEe, nhr, cA } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Rn, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
var x = 2000,
  P = 2000;
function NPe(a) {
  let l = Rn(),
    [copiedVia, t] = y(null),
    i = A(null),
    o = A(null),
    u = A(null),
    s = A(0),
    p = A(!0),
    reset = ue(() => {
      s.current += 1, u.current?.(), u.current = null, o.current = null, i.current?.(), i.current = null, t(null);
    }, []);
  O(() => {
    if (reset(), a !== null) nhr();
  }, [a, reset]), O(() => (p.current = !0, () => {
    p.current = !1, u.current?.(), u.current = null, o.current = null, i.current?.(), i.current = null;
  }), []);
  let copy = ue(f => {
    if (o.current === f) return;
    o.current = f, u.current?.(), u.current = l.setTimeout(() => {
      u.current = null, o.current = null;
    }, x);
    let b = WEe(),
      current = s.current;
    cA(f).then(h => {
      if (!p.current || current !== s.current) return;
      if (h) process.stdout.write(h);
      i.current?.(), i.current = null;
      let C = b;
      if (b === "osc52" && mZ()) C = WEe() === "native" ? "native" : "none";
      if (t(C), C === "native") i.current = l.setTimeout(() => {
        i.current = null, t(null);
      }, P);
    });
  }, [l]);
  return {
    copiedVia: copiedVia,
    copy: copy,
    reset: reset
  };
}
function ale(a) {
  let c = S(2),
    {
      via: via
    } = a;
  if (via === "native") {
    let t;
    if (c[0] === w) t = e(n, {
      color: "success",
      children: "(Copied!)"
    }), c[0] = t;else t = c[0];
    return t;
  }
  if (via === null) {
    let t;
    if (c[1] === w) t = e(n, {
      dimColor: !0,
      children: e(Y, {
        chord: "c",
        action: "copy",
        parens: !0
      })
    }), c[1] = t;else t = c[1];
    return t;
  }
  return null;
}
function lle(a) {
  let i = S(6),
    {
      via: via_2,
      noun: noun
    } = a,
    t = noun === void 0 ? "URL" : noun;
  if (via_2 === "tmux-buffer") {
    let o;
    if (i[0] !== t) o = r(n, {
      dimColor: !0,
      children: ["(Copied to tmux buffer \xB7 select the ", t, " manually if paste fails)"]
    }), i[0] = t, i[1] = o;else o = i[1];
    return o;
  }
  if (via_2 === "none") {
    let o;
    if (i[2] !== t) o = r(n, {
      dimColor: !0,
      children: ["(Couldn't copy \xB7 select the ", t, " and copy it with your terminal)"]
    }), i[2] = t, i[3] = o;else o = i[3];
    return o;
  }
  if (via_2 === "osc52") {
    let o;
    if (i[4] !== t) o = r(n, {
      dimColor: !0,
      children: ["(Sent via OSC 52 \xB7 select the ", t, " manually if paste fails)"]
    }), i[4] = t, i[5] = o;else o = i[5];
    return o;
  }
  return null;
}
export { NPe, ale, lle };