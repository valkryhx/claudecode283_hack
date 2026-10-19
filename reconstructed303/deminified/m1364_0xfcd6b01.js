// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { vc } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { b9o, b1, CP } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, ae, Ee, P, Rwo, Jt, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var Ewn = qt(null);
B();
function fE({
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
  let b = A(null),
    g = Zl(),
    entriesRef = A([]);
  entriesRef.current = active ? bindings : [];
  let onAction = ae(o => F(o, entriesRef.current), []),
    j = I(n, active, preemptive, swallowAll, entriesRef.current),
    h = active && preemptive && Boolean(n),
    v = h && swallowAll;
  Jt(() => {
    if (!g) return;
    let current = b.current;
    if (!current) return;
    let {
        decls: decls,
        scopesChanged: scopesChanged,
        preemptiveScopes: preemptiveScopes,
        swallowAll: swallowAll_2
      } = g.keyHandlerRegistry,
      E = {
        scope: n,
        active: active,
        preemptive: preemptive,
        swallowAll: swallowAll,
        entriesRef: entriesRef
      };
    if (decls.set(current, E), h && n) {
      if (w(preemptiveScopes, n), v) w(swallowAll_2, n);
    }
    return scopesChanged.emit(), () => {
      if (decls.delete(current), h && n) {
        if (D(preemptiveScopes, n), v) D(swallowAll_2, n);
      }
      scopesChanged.emit();
    };
  }, [g, n, h, v, j]);
  let u = Ee(Ewn),
    x = Rwo(),
    [C] = y(() => new Map()),
    value = Z(() => ({
      chain: [...(u?.chain ?? []), {
        scope: n,
        entriesRef: entriesRef
      }],
      below: [...(u?.below ?? []), C]
    }), [u, n, C]);
  for (let o of u?.below ?? []) o.set(x, {
    chain: value.chain,
    claimFocus: claimFocus
  });
  P(() => {
    let o = u?.below ?? [];
    for (let i of o) i.set(x, {
      chain: value.chain,
      claimFocus: claimFocus
    });
    return () => {
      for (let i of o) i.delete(x);
    };
  }, [u, x, value, claimFocus]), Jt(() => {
    if (!claimFocus) return;
    let current_2 = b.current;
    if (!current_2) return;
    let i = CP(current_2),
      c = !1,
      K = () => {
        if (c) return;
        let current_3 = b.current;
        if (!current_3) return;
        let activeElement = i.activeElement;
        if (activeElement && b1(activeElement, current_3)) return;
        c = !0;
        try {
          i.focus(current_3);
        } finally {
          c = !1;
        }
      };
    return i.pushAutoFocusFallback(current_2), K(), i.subscribe(K);
  }, [claimFocus]);
  let k = A(!1);
  Jt(() => {
    return;
  }, [n, claimFocus, g]);
  let ref_2 = ae(o => {
    if (b.current = o, typeof ref === "function") ref(o);else if (ref) ref.current = o;
  }, [ref]);
  return e(vc, {
    ref: ref_2,
    keybindingScope: n,
    onAction: onAction,
    tabIndex: claimFocus ? -1 : void 0,
    flexGrow: flexGrow,
    flexDirection: flexDirection,
    flexShrink: flexShrink,
    children: e(Ewn, {
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
function w(n, l) {
  n.set(l, (n.get(l) ?? 0) + 1);
}
function D(n, l) {
  let r = (n.get(l) ?? 0) - 1;
  if (r <= 0) n.delete(l);else n.set(l, r);
}
function I(n, l, r, s, d) {
  return _([n ?? "", l, r, s, d.map(item => [item.action ?? "", item.hint ?? "", Boolean(item.chordOnly)])]);
}
export { Ewn, fE };