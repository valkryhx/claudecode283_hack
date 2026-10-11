// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { zl } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { $8r, rL, mT } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, se, Pe, R, $Er, sn, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
var sVt = Vt(null);
function GC({
  scope: n,
  bindings: bindings,
  active = !0,
  preemptive = !1,
  swallowAll = !1,
  claimFocus = !1,
  ref: ref,
  flexGrow = 0,
  flexDirection: flexDirection,
  flexShrink: flexShrink,
  children: children
}) {
  let m = T(null),
    h = Ya(),
    entriesRef = T([]);
  entriesRef.current = active ? bindings : [];
  let onAction = se(o => F(o, entriesRef.current), []),
    j = I(n, active, preemptive, swallowAll, entriesRef.current),
    x = active && preemptive && Boolean(n),
    C = x && swallowAll;
  sn(() => {
    if (!h) return;
    let current = m.current;
    if (!current) return;
    let {
        decls: decls,
        scopesChanged: scopesChanged,
        preemptiveScopes: preemptiveScopes,
        swallowAll: swallowAll_2
      } = h.keyHandlerRegistry,
      v = {
        scope: n,
        active: active,
        preemptive: preemptive,
        swallowAll: swallowAll,
        entriesRef: entriesRef
      };
    if (decls.set(current, v), x && n) {
      if (D(preemptiveScopes, n), C) D(swallowAll_2, n);
    }
    return scopesChanged.emit(), () => {
      if (decls.delete(current), x && n) {
        if (B(preemptiveScopes, n), C) B(swallowAll_2, n);
      }
      scopesChanged.emit();
    };
  }, [h, n, x, C, j]);
  let u = Pe(sVt),
    H = $Er(),
    [k] = g(() => new Map()),
    value = X(() => ({
      chain: [...(u?.chain ?? []), {
        scope: n,
        entriesRef: entriesRef
      }],
      below: [...(u?.below ?? []), k]
    }), [u, n, k]);
  for (let o of u?.below ?? []) o.set(H, {
    chain: value.chain,
    claimFocus: claimFocus
  });
  R(() => {
    let o = u?.below ?? [];
    for (let i of o) i.set(H, {
      chain: value.chain,
      claimFocus: claimFocus
    });
    return () => {
      for (let i of o) i.delete(H);
    };
  }, [u, H, value, claimFocus]), sn(() => {
    if (!claimFocus) return;
    let current_2 = m.current;
    if (!current_2) return;
    let i = mT(current_2),
      c = !1,
      K = () => {
        if (c) return;
        let current_3 = m.current;
        if (!current_3) return;
        let activeElement = i.activeElement;
        if (activeElement && rL(activeElement, current_3)) return;
        c = !0;
        try {
          i.focus(current_3);
        } finally {
          c = !1;
        }
      };
    return i.pushAutoFocusFallback(current_2), K(), i.subscribe(K);
  }, [claimFocus]);
  let w = T(!1);
  sn(() => {
    return;
  }, [n, claimFocus, h]);
  let ref_2 = se(o => {
    if (m.current = o, typeof ref === "function") ref(o);else if (ref) ref.current = o;
  }, [ref]);
  return e(zl, {
    ref: ref_2,
    keybindingScope: n,
    onAction: onAction,
    tabIndex: claimFocus ? -1 : void 0,
    flexGrow: flexGrow,
    flexDirection: flexDirection,
    flexShrink: flexShrink,
    children: e(sVt, {
      value: value,
      children: children
    })
  });
}
function F(n, l) {
  for (let r of l) {
    if (r.action !== n.action) continue;
    if (r.chordOnly && !n.isChordCompletion) continue;
    if (r.run() === !1) continue;
    n.consume();
    return;
  }
}
function D(n, l) {
  n.set(l, (n.get(l) ?? 0) + 1);
}
function B(n, l) {
  let r = (n.get(l) ?? 0) - 1;
  if (r <= 0) n.delete(l);else n.set(l, r);
}
function I(n, l, r, s, y) {
  return b([n ?? "", l, r, s, y.map(item => [item.action ?? "", item.hint ?? "", Boolean(item.chordOnly)])]);
}
export { sVt, GC };