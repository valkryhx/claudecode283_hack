// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Ol } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { Vt, Pe, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
N();
function ZD(o) {
  return o.open.findLast(e => !e.userInvoked) ?? null;
}
function Cue(o) {
  return o.open.findLast(e => e.userInvoked === !0) ?? null;
}
function iIe(o, e) {
  return o.open.some(item => item.kind === e);
}
function Ter(o = () => Date.now()) {
  let e = Hs({
      open: []
    }),
    r = Me(),
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    s = new Set(),
    a = (t, n) => `${t}:${n}`,
    p = t => {
      for (let n of s) if (n.startsWith(`${t}:`)) s.delete(n);
    },
    d = t => {
      let {
        removed: removed,
        closedBlockingTopBare: closedBlockingTopBare
      } = m(e, t);
      if (!removed) return !1;
      if (closedBlockingTopBare) NEGATIVE_INFINITY = Date.now();
      return p(t), !0;
    },
    g = {
      getState: e.getState,
      subscribe: e.subscribe,
      onClosed: r.subscribe,
      open(t) {
        e.setState(n => {
          let i = ZD(n),
            l = i?.holdsTop === !0 && D(i, t) && t.succeeds !== !0;
          if ((t.place === "under" || l) && n.open.some(item => item.userInvoked !== !0)) return {
            open: [t, ...n.open]
          };
          let f = n.open.some(item => D(item, t)) || t.userInvoked !== !0 && n.open.some(item => item.userInvoked === !0),
            S = t.userInvoked !== !0 && Ol(o, NEGATIVE_INFINITY),
            b = f || S ? {
              ...t,
              shownAt: Date.now()
            } : t;
          return {
            open: [...n.open, b]
          };
        });
      },
      update(t, payload) {
        e.setState(i => {
          let l = i.open.findIndex(item => item.id === t);
          if (l === -1) return i;
          let open = i.open.slice();
          return open[l] = {
            ...i.open[l],
            payload: payload,
            shownAt: Date.now()
          }, {
            open: open
          };
        });
      },
      answer(id, result) {
        if (!d(id)) return;
        r.emit({
          id: id,
          type: "answered",
          result: result
        });
      },
      dismiss(id_2) {
        if (!d(id_2)) return;
        r.emit({
          id: id_2,
          type: "dismissed"
        });
      },
      firstReveal(t, n) {
        if (!e.getState().open.some(item => item.id === t)) return !1;
        let i = a(t, n);
        if (s.has(i)) return !1;
        return s.add(i), !0;
      },
      hasRevealed(t, n) {
        return s.has(a(t, n));
      },
      dismissKind(t) {
        for (let n of e.getState().open) if (n.kind === t) g.dismiss(n.id);
      }
    };
  return g;
}
function m(o, e) {
  let removed_2 = !1,
    closedBlockingTopBare_2 = !1;
  return o.setState(s => {
    let a = s.open.find(item => item.id === e);
    if (!a) return s;
    removed_2 = !0;
    let open_2 = s.open.filter(item => item !== a),
      d = s.open.filter(item => D(item, a)),
      g = d.at(-1) === a,
      t = d.at(-2);
    if (closedBlockingTopBare_2 = g && !t && a.userInvoked !== !0, !g || !t) return {
      open: open_2
    };
    return {
      open: open_2.map(item => item === t ? {
        ...t,
        shownAt: Date.now(),
        revealSeq: (t.revealSeq ?? 0) + 1
      } : item)
    };
  }), {
    removed: removed_2,
    closedBlockingTopBare: closedBlockingTopBare_2
  };
}
function D(o, e) {
  return o.userInvoked === !0 === (e.userInvoked === !0);
}
var Hbe = Vt(null);
function mp() {
  let o = Pe(Hbe);
  if (!o) throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
  return o;
}
function Fbe() {
  let o = mp(),
    e = () => o.getState().open.length > 0;
  return At(o.subscribe, e, e);
}
function pP() {
  let o = mp(),
    e = () => ZD(o.getState()) !== null;
  return At(o.subscribe, e, e);
}
function pT(o) {
  let e = mp(),
    r = () => iIe(e.getState(), o);
  return At(e.subscribe, r, r);
}
function Zyt() {
  let o = mp(),
    e = () => Cue(o.getState());
  return At(o.subscribe, e, e);
}
function O8r() {
  let o = mp(),
    e = () => ZD(o.getState());
  return At(o.subscribe, e, e);
}
function Cer(o) {
  let e = mp(),
    r = () => gvn(ZD(e.getState()), o);
  return At(e.subscribe, r, r);
}
function gvn(o, e) {
  return o?.hideWhile?.includes(e) === !0;
}
function VGt() {
  let o = mp(),
    e = () => ZD(o.getState())?.kind;
  return At(o.subscribe, e, e);
}
function WK(o) {
  let e = mp(),
    r = () => o(e.getState());
  return At(e.subscribe, r, r);
}
export { ZD, Cue, iIe, Ter, Hbe, mp, Fbe, pP, pT, Zyt, O8r, Cer, gvn, VGt, WK };