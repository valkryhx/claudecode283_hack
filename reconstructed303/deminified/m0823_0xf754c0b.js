// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { El } from "B:/~BUN/root/chunk-5xxjpbgm.js";
import { YJe } from "B:/~BUN/root/chunk-htbmes7q.js";
import { c8r } from "B:/~BUN/root/chunk-a9ypqc22.js";
import { qt, Ee, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
B();
function gE(o) {
  return o.open.findLast(e => !e.userInvoked) ?? null;
}
function dce(o) {
  return o.open.findLast(e => e.userInvoked === !0) ?? null;
}
function Bvt(o, e) {
  return o.open.some(item => item.kind === e);
}
function y4r(o = () => Date.now()) {
  let e = _s({
      open: []
    }),
    s = [gE(e.getState()), dce(e.getState())];
  e.subscribe(() => {
    let t = [gE(e.getState()), dce(e.getState())];
    if (t.some((item, index) => item !== null && item !== s[index])) YJe();
    s = t;
  });
  let l = Me(),
    askTally = new c8r(),
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    i = new Set(),
    g = (t, n) => `${t}:${n}`,
    p = t => {
      for (let n of i) if (n.startsWith(`${t}:`)) i.delete(n);
    },
    r = t => {
      let {
        removed: removed,
        closedBlockingTopBare: closedBlockingTopBare
      } = v(e, t);
      if (!removed) return !1;
      if (closedBlockingTopBare) NEGATIVE_INFINITY = Date.now();
      return p(t), !0;
    },
    u = {
      getState: e.getState,
      subscribe: e.subscribe,
      onClosed: l.subscribe,
      askTally: askTally,
      open(t) {
        if (t.countedAsk !== void 0) askTally.join(t.countedAsk);
        e.setState(n => {
          let a = t.place === "queue" ? h(n.open, t) : void 0;
          if (a !== void 0) return {
            open: [...n.open.slice(0, a), t, ...n.open.slice(a)]
          };
          let f = gE(n),
            k = f?.holdsTop === !0 && b(f, t) && t.succeeds !== !0;
          if ((t.place === "under" || k) && n.open.some(item => item.userInvoked !== !0)) return {
            open: [t, ...n.open]
          };
          let D = n.open.some(item => b(item, t)) || t.userInvoked !== !0 && n.open.some(item => item.userInvoked === !0),
            m = t.userInvoked !== !0 && El(o, NEGATIVE_INFINITY),
            y = D || m ? {
              ...t,
              shownAt: Date.now()
            } : t;
          return {
            open: [...n.open, y]
          };
        });
      },
      update(t, payload) {
        e.setState(a => {
          let f = a.open.findIndex(item => item.id === t);
          if (f === -1) return a;
          let open = a.open.slice();
          return open[f] = {
            ...a.open[f],
            payload: payload,
            shownAt: Date.now()
          }, {
            open: open
          };
        });
      },
      answer(id, result) {
        if (e.getState().open.find(item => item.id === id)?.countedAsk?.settle(), !r(id)) return;
        l.emit({
          id: id,
          type: "answered",
          result: result
        });
      },
      dismiss(id_2) {
        if (!r(id_2)) return;
        l.emit({
          id: id_2,
          type: "dismissed"
        });
      },
      firstReveal(t, n) {
        if (!e.getState().open.some(item => item.id === t)) return !1;
        let a = g(t, n);
        if (i.has(a)) return !1;
        return i.add(a), !0;
      },
      hasRevealed(t, n) {
        return i.has(g(t, n));
      },
      dismissKind(t) {
        for (let n of e.getState().open) if (n.kind === t) u.dismiss(n.id);
      }
    };
  return u;
}
function v(o, e) {
  let removed_2 = !1,
    closedBlockingTopBare_2 = !1;
  return o.setState(d => {
    let c = d.open.find(item => item.id === e);
    if (!c) return d;
    removed_2 = !0;
    let open_2 = d.open.filter(item => item !== c),
      g = d.open.filter(item => b(item, c)),
      p = g.at(-1) === c,
      r = g.at(-2);
    if (closedBlockingTopBare_2 = p && !r && c.userInvoked !== !0, !p || !r) return {
      open: open_2
    };
    return {
      open: open_2.map(item => item === r ? {
        ...r,
        shownAt: Date.now(),
        revealSeq: (r.revealSeq ?? 0) + 1
      } : item)
    };
  }), {
    removed: removed_2,
    closedBlockingTopBare: closedBlockingTopBare_2
  };
}
function h(o, e) {
  let s = e.askOrder ?? Number.POSITIVE_INFINITY,
    l = o.findIndex(item => item.place !== void 0 && item.askOrder !== void 0 && item.askOrder <= s);
  if (l === -1) {
    let i = o.findLastIndex(r => r.place === "queue" && r.askOrder !== void 0),
      g = o.findLastIndex(r => r.place !== void 0 && r.askOrder !== void 0),
      p = o.slice(g + 1).some(item => item.askOrder === void 0 && item.holdsTop !== !0 && item.userInvoked !== !0);
    l = i !== -1 && !p ? g + 1 : o.findIndex(item => item.place === void 0 && item.askOrder !== void 0);
  }
  if (l === -1) return;
  let d = o.findIndex(item => item.place === void 0 && item.askOrder !== void 0);
  if (d !== -1 && d < l) l = d;
  return o.slice(l).some(item => item.userInvoked !== !0) ? l : void 0;
}
function b(o, e) {
  return o.userInvoked === !0 === (e.userInvoked === !0);
}
var fY = qt(null);
function mm() {
  let o = Ee(fY);
  if (!o) throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
  return o;
}
function CLe() {
  let o = mm(),
    e = () => o.getState().open.length > 0;
  return Dt(o.subscribe, e, e);
}
function lz() {
  let o = mm(),
    e = () => gE(o.getState()) !== null;
  return Dt(o.subscribe, e, e);
}
function EP(o) {
  let e = mm(),
    s = () => Bvt(e.getState(), o);
  return Dt(e.subscribe, s, s);
}
function z2t() {
  let o = mm(),
    e = () => dce(o.getState());
  return Dt(o.subscribe, e, e);
}
function c9o() {
  let o = mm(),
    e = () => gE(o.getState());
  return Dt(o.subscribe, e, e);
}
function _4r(o) {
  let e = mm(),
    s = () => Tnt(gE(e.getState()), o);
  return Dt(e.subscribe, s, s);
}
function Tnt(o, e) {
  return o?.hideWhile?.includes(e) === !0;
}
function Fwn() {
  let o = mm(),
    e = () => gE(o.getState())?.kind;
  return Dt(o.subscribe, e, e);
}
function dz(o) {
  let e = mm(),
    s = () => o(e.getState());
  return Dt(e.subscribe, s, s);
}
export { gE, dce, Bvt, y4r, fY, mm, CLe, lz, EP, z2t, c9o, _4r, Tnt, Fwn, dz };