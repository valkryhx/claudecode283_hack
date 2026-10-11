// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { eae, ktn, SS } from "B:/~BUN/root/chunk-ky4py1p3.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { se, R, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
function q2(i) {
  let u = w(2),
    {
      via: via
    } = i;
  if (via === "native") {
    let r;
    if (u[0] === S) r = e(n, {
      color: "success",
      children: "(Copied!)"
    }), u[0] = r;else r = u[0];
    return r;
  }
  if (via === null) {
    let r;
    if (u[1] === S) r = e(n, {
      dimColor: !0,
      children: e(F, {
        chord: "c",
        action: "copy",
        parens: !0
      })
    }), u[1] = r;else r = u[1];
    return r;
  }
  return null;
}
function K2(i) {
  let u = w(2),
    {
      via: via_2
    } = i;
  if (via_2 === "tmux-buffer") {
    let r;
    if (u[0] === S) r = e(n, {
      dimColor: !0,
      children: "(Copied to tmux buffer \xB7 select the URL manually if paste fails)"
    }), u[0] = r;else r = u[0];
    return r;
  }
  if (via_2 === "osc52") {
    let r;
    if (u[1] === S) r = e(n, {
      dimColor: !0,
      children: "(Sent via OSC 52 \xB7 select the URL manually if paste fails)"
    }), u[1] = r;else r = u[1];
    return r;
  }
  return null;
}
N();
var h = 2000,
  P = 2000;
function MQ(i) {
  let o = Yt(),
    [copiedVia, r] = g(null),
    t = T(null),
    c = T(null),
    l = T(null),
    a = T(0),
    s = T(!0),
    reset = se(() => {
      a.current += 1, l.current?.(), l.current = null, c.current = null, t.current?.(), t.current = null, r(null);
    }, []);
  R(() => {
    if (reset(), i !== null) ktn();
  }, [i, reset]), R(() => (s.current = !0, () => {
    s.current = !1, l.current?.(), l.current = null, c.current = null, t.current?.(), t.current = null;
  }), []);
  let copy = se(d => {
    if (c.current === d) return;
    c.current = d, l.current?.(), l.current = o.setTimeout(() => {
      l.current = null, c.current = null;
    }, h);
    let f = eae(),
      current = a.current;
    SS(d).then(C => {
      if (!s.current || current !== a.current) return;
      if (C) process.stdout.write(C);
      if (t.current?.(), t.current = null, r(f), f === "native") t.current = o.setTimeout(() => {
        t.current = null, r(null);
      }, P);
    });
  }, [o]);
  return {
    copiedVia: copiedVia,
    copy: copy,
    reset: reset
  };
}
export { q2, K2, MQ };