// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  vc
} from "B:/~BUN/root/chunk-3md9ngvz.js";
import {
  b9o,
  b1,
  CP
} from "B:/~BUN/root/chunk-1jz9m9yh.js";
import {
  Zl
} from "B:/~BUN/root/chunk-ps74es0g.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  qt,
  ae,
  Ee,
  P,
  Rwo,
  Jt,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var Ewn = qt(null);
B();

function fE({
  scope: n,
  bindings: l,
  active: r = !0,
  preemptive: s = !1,
  swallowAll: d = !1,
  claimFocus: a = !1,
  ref: m,
  flexGrow: R = 0,
  flexDirection: M,
  flexShrink: O,
  children: S
}) {
  let b = A(null),
    g = Zl(),
    p = A([]);
  p.current = r ? l : [];
  let N = ae((o) => F(o, p.current), []),
    j = I(n, r, s, d, p.current),
    h = r && s && Boolean(n),
    v = h && d;
  Jt(() => {
    if (!g) return;
    let o = b.current;
    if (!o) return;
    let {
      decls: i,
      scopesChanged: c,
      preemptiveScopes: K,
      swallowAll: f
    } = g.keyHandlerRegistry, E = {
      scope: n,
      active: r,
      preemptive: s,
      swallowAll: d,
      entriesRef: p
    };
    if (i.set(o, E), h && n) {
      if (w(K, n), v) w(f, n)
    }
    return c.emit(), () => {
      if (i.delete(o), h && n) {
        if (D(K, n), v) D(f, n)
      }
      c.emit()
    }
  }, [g, n, h, v, j]);
  let u = Ee(Ewn),
    x = Rwo(),
    [C] = y(() => new Map),
    H = Z(() => ({
      chain: [...u?.chain ?? [], {
        scope: n,
        entriesRef: p
      }],
      below: [...u?.below ?? [], C]
    }), [u, n, C]);
  for (let o of u?.below ?? []) o.set(x, {
    chain: H.chain,
    claimFocus: a
  });
  P(() => {
    let o = u?.below ?? [];
    for (let i of o) i.set(x, {
      chain: H.chain,
      claimFocus: a
    });
    return () => {
      for (let i of o) i.delete(x)
    }
  }, [u, x, H, a]), Jt(() => {
    if (!a) return;
    let o = b.current;
    if (!o) return;
    let i = CP(o),
      c = !1,
      K = () => {
        if (c) return;
        let f = b.current;
        if (!f) return;
        let E = i.activeElement;
        if (E && b1(E, f)) return;
        c = !0;
        try {
          i.focus(f)
        } finally {
          c = !1
        }
      };
    return i.pushAutoFocusFallback(o), K(), i.subscribe(K)
  }, [a]);
  let k = A(!1);
  Jt(() => {
    return
  }, [n, a, g]);
  let L = ae((o) => {
    if (b.current = o, typeof m === "function") m(o);
    else if (m) m.current = o
  }, [m]);
  return e(vc, {
    ref: L,
    keybindingScope: n,
    onAction: N,
    tabIndex: a ? -1 : void 0,
    flexGrow: R,
    flexDirection: M,
    flexShrink: O,
    children: e(Ewn, {
      value: H,
      children: S
    })
  })
}

function F(n, l) {
  for (let r of l) {
    if (r.action !== n.action) continue;
    if (r.chordOnly && !n.isChordCompletion) continue;
    if (r.run() === !1) continue;
    n.consume();
    return
  }
}

function w(n, l) {
  n.set(l, (n.get(l) ?? 0) + 1)
}

function D(n, l) {
  let r = (n.get(l) ?? 0) - 1;
  if (r <= 0) n.delete(l);
  else n.set(l, r)
}

function I(n, l, r, s, d) {
  return _([n ?? "", l, r, s, d.map((a) => [a.action ?? "", a.hint ?? "", Boolean(a.chordOnly)])])
}
export {
  Ewn,
  fE
};
