// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  zl
} from "B:/~BUN/root/chunk-e1thvnpv.js";
import {
  $8r,
  rL,
  mT
} from "B:/~BUN/root/chunk-trcn2d68.js";
import {
  Ya
} from "B:/~BUN/root/chunk-7nc4t0q7.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  se,
  Pe,
  R,
  $Er,
  sn,
  X,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
var sVt = Vt(null);

function GC({
  scope: n,
  bindings: l,
  active: r = !0,
  preemptive: s = !1,
  swallowAll: y = !1,
  claimFocus: a = !1,
  ref: d,
  flexGrow: P = 0,
  flexDirection: M,
  flexShrink: O,
  children: S
}) {
  let m = T(null),
    h = Ya(),
    p = T([]);
  p.current = r ? l : [];
  let A = se((o) => F(o, p.current), []),
    j = I(n, r, s, y, p.current),
    x = r && s && Boolean(n),
    C = x && y;
  sn(() => {
    if (!h) return;
    let o = m.current;
    if (!o) return;
    let {
      decls: i,
      scopesChanged: c,
      preemptiveScopes: K,
      swallowAll: f
    } = h.keyHandlerRegistry, v = {
      scope: n,
      active: r,
      preemptive: s,
      swallowAll: y,
      entriesRef: p
    };
    if (i.set(o, v), x && n) {
      if (D(K, n), C) D(f, n)
    }
    return c.emit(), () => {
      if (i.delete(o), x && n) {
        if (B(K, n), C) B(f, n)
      }
      c.emit()
    }
  }, [h, n, x, C, j]);
  let u = Pe(sVt),
    H = $Er(),
    [k] = g(() => new Map),
    E = X(() => ({
      chain: [...u?.chain ?? [], {
        scope: n,
        entriesRef: p
      }],
      below: [...u?.below ?? [], k]
    }), [u, n, k]);
  for (let o of u?.below ?? []) o.set(H, {
    chain: E.chain,
    claimFocus: a
  });
  R(() => {
    let o = u?.below ?? [];
    for (let i of o) i.set(H, {
      chain: E.chain,
      claimFocus: a
    });
    return () => {
      for (let i of o) i.delete(H)
    }
  }, [u, H, E, a]), sn(() => {
    if (!a) return;
    let o = m.current;
    if (!o) return;
    let i = mT(o),
      c = !1,
      K = () => {
        if (c) return;
        let f = m.current;
        if (!f) return;
        let v = i.activeElement;
        if (v && rL(v, f)) return;
        c = !0;
        try {
          i.focus(f)
        } finally {
          c = !1
        }
      };
    return i.pushAutoFocusFallback(o), K(), i.subscribe(K)
  }, [a]);
  let w = T(!1);
  sn(() => {
    return
  }, [n, a, h]);
  let L = se((o) => {
    if (m.current = o, typeof d === "function") d(o);
    else if (d) d.current = o
  }, [d]);
  return e(zl, {
    ref: L,
    keybindingScope: n,
    onAction: A,
    tabIndex: a ? -1 : void 0,
    flexGrow: P,
    flexDirection: M,
    flexShrink: O,
    children: e(sVt, {
      value: E,
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

function D(n, l) {
  n.set(l, (n.get(l) ?? 0) + 1)
}

function B(n, l) {
  let r = (n.get(l) ?? 0) - 1;
  if (r <= 0) n.delete(l);
  else n.set(l, r)
}

function I(n, l, r, s, y) {
  return b([n ?? "", l, r, s, y.map((a) => [a.action ?? "", a.hint ?? "", Boolean(a.chordOnly)])])
}
export {
  sVt,
  GC
};
