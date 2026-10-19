// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { n, dn } from "B:/~BUN/root/chunk-damrp3r8.js";
import { I6, Upe, C$n, PE } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var k = 2000,
  R = 2000;
function nce(c) {
  let r = dn(),
    [copiedVia, t] = y(null),
    o = A(null),
    u = A(null),
    l = A(null),
    a = A(0),
    s = A(!0),
    reset = ae(() => {
      a.current += 1, l.current?.(), l.current = null, u.current = null, o.current?.(), o.current = null, t(null);
    }, []);
  P(() => {
    if (reset(), c !== null) C$n();
  }, [c, reset]), P(() => (s.current = !0, () => {
    s.current = !1, l.current?.(), l.current = null, u.current = null, o.current?.(), o.current = null;
  }), []);
  let copy = ae(d => {
    if (u.current === d) return;
    u.current = d, l.current?.(), l.current = r.setTimeout(() => {
      l.current = null, u.current = null;
    }, k);
    let m = Upe(),
      current = a.current;
    PE(d).then(v => {
      if (!s.current || current !== a.current) return;
      if (v) process.stdout.write(v);
      o.current?.(), o.current = null;
      let f = m;
      if (m === "osc52" && I6()) f = Upe() === "native" ? "native" : "none";
      if (t(f), f === "native") o.current = r.setTimeout(() => {
        o.current = null, t(null);
      }, R);
    });
  }, [r]);
  return {
    copiedVia: copiedVia,
    copy: copy,
    reset: reset
  };
}
function l8(c) {
  let i = w(2),
    {
      via: via
    } = c;
  if (via === "native") {
    let t;
    if (i[0] === S) t = e(n, {
      color: "success",
      children: "(Copied!)"
    }), i[0] = t;else t = i[0];
    return t;
  }
  if (via === null) {
    let t;
    if (i[1] === S) t = e(n, {
      dimColor: !0,
      children: e(q, {
        chord: "c",
        action: "copy",
        parens: !0
      })
    }), i[1] = t;else t = i[1];
    return t;
  }
  return null;
}
function d8(c) {
  let i = w(3),
    {
      via: via_2
    } = c;
  if (via_2 === "tmux-buffer") {
    let t;
    if (i[0] === S) t = e(n, {
      dimColor: !0,
      children: "(Copied to tmux buffer \xB7 select the URL manually if paste fails)"
    }), i[0] = t;else t = i[0];
    return t;
  }
  if (via_2 === "none") {
    let t;
    if (i[1] === S) t = e(n, {
      dimColor: !0,
      children: "(Couldn't copy \xB7 select the URL and copy it with your terminal)"
    }), i[1] = t;else t = i[1];
    return t;
  }
  if (via_2 === "osc52") {
    let t;
    if (i[2] === S) t = e(n, {
      dimColor: !0,
      children: "(Sent via OSC 52 \xB7 select the URL manually if paste fails)"
    }), i[2] = t;else t = i[2];
    return t;
  }
  return null;
}
export { nce, l8, d8 };