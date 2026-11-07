// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  ra
} from "B:/~BUN/root/chunk-tzwf3sbj.js";
import {
  f_t
} from "B:/~BUN/root/chunk-amar4116.js";
import {
  qzo
} from "B:/~BUN/root/chunk-daywa44q.js";
import {
  Jt,
  ve,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
j();

function pv(o) {
  return o.open.findLast((e) => !e.userInvoked) ?? null
}

function ike(o) {
  return o.open.findLast((e) => e.userInvoked === !0) ?? null
}

function KHo(o, e) {
  return o.open.some((s) => s.kind === e)
}

function rhn(o) {
  return o.open.length > 0
}

function qHo(o = () => Date.now()) {
  let e = Hs({
      open: []
    }),
    s = [pv(e.getState()), ike(e.getState())];
  e.subscribe(() => {
    let t = [pv(e.getState()), ike(e.getState())];
    if (t.some((n, a) => n !== null && n !== s[a])) f_t();
    s = t
  });
  let l = De(),
    d = new qzo,
    c = Number.NEGATIVE_INFINITY,
    i = new Set,
    g = (t, n) => `${t}:${n}`,
    p = (t) => {
      for (let n of i)
        if (n.startsWith(`${t}:`)) i.delete(n)
    },
    r = (t) => {
      let {
        removed: n,
        closedBlockingTopBare: a
      } = v(e, t);
      if (!n) return !1;
      if (a) c = Date.now();
      return p(t), !0
    },
    u = {
      getState: e.getState,
      subscribe: e.subscribe,
      onClosed: l.subscribe,
      askTally: d,
      open(t) {
        if (t.countedAsk !== void 0) d.join(t.countedAsk);
        e.setState((n) => {
          let a = t.place === "queue" ? h(n.open, t) : void 0;
          if (a !== void 0) return {
            open: [...n.open.slice(0, a), t, ...n.open.slice(a)]
          };
          let f = pv(n),
            k = f?.holdsTop === !0 && b(f, t) && t.succeeds !== !0;
          if ((t.place === "under" || k) && n.open.some((S) => S.userInvoked !== !0)) return {
            open: [t, ...n.open]
          };
          let D = n.open.some((S) => b(S, t)) || t.userInvoked !== !0 && n.open.some((S) => S.userInvoked === !0),
            m = t.userInvoked !== !0 && ra(o, c),
            y = D || m ? {
              ...t,
              shownAt: Date.now()
            } : t;
          return {
            open: [...n.open, y]
          }
        })
      },
      update(t, n) {
        e.setState((a) => {
          let f = a.open.findIndex((D) => D.id === t);
          if (f === -1) return a;
          let k = a.open.slice();
          return k[f] = {
            ...a.open[f],
            payload: n,
            shownAt: Date.now()
          }, {
            open: k
          }
        })
      },
      answer(t, n) {
        if (e.getState().open.find((a) => a.id === t)?.countedAsk?.settle(), !r(t)) return;
        l.emit({
          id: t,
          type: "answered",
          result: n
        })
      },
      dismiss(t) {
        if (!r(t)) return;
        l.emit({
          id: t,
          type: "dismissed"
        })
      },
      firstReveal(t, n) {
        if (!e.getState().open.some((f) => f.id === t)) return !1;
        let a = g(t, n);
        if (i.has(a)) return !1;
        return i.add(a), !0
      },
      hasRevealed(t, n) {
        return i.has(g(t, n))
      },
      dismissKind(t) {
        for (let n of e.getState().open)
          if (n.kind === t) u.dismiss(n.id)
      }
    };
  return u
}

function v(o, e) {
  let s = !1,
    l = !1;
  return o.setState((d) => {
    let c = d.open.find((u) => u.id === e);
    if (!c) return d;
    s = !0;
    let i = d.open.filter((u) => u !== c),
      g = d.open.filter((u) => b(u, c)),
      p = g.at(-1) === c,
      r = g.at(-2);
    if (l = p && !r && c.userInvoked !== !0, !p || !r) return {
      open: i
    };
    return {
      open: i.map((u) => u === r ? {
        ...r,
        shownAt: Date.now(),
        revealSeq: (r.revealSeq ?? 0) + 1
      } : u)
    }
  }), {
    removed: s,
    closedBlockingTopBare: l
  }
}

function h(o, e) {
  let s = e.askOrder ?? Number.POSITIVE_INFINITY,
    l = o.findIndex((i) => i.place !== void 0 && i.askOrder !== void 0 && i.askOrder <= s);
  if (l === -1) {
    let i = o.findLastIndex((r) => r.place === "queue" && r.askOrder !== void 0),
      g = o.findLastIndex((r) => r.place !== void 0 && r.askOrder !== void 0),
      p = o.slice(g + 1).some((r) => r.askOrder === void 0 && r.holdsTop !== !0 && r.userInvoked !== !0);
    l = i !== -1 && !p ? g + 1 : o.findIndex((r) => r.place === void 0 && r.askOrder !== void 0)
  }
  if (l === -1) return;
  let d = o.findIndex((i) => i.place === void 0 && i.askOrder !== void 0);
  if (d !== -1 && d < l) l = d;
  return o.slice(l).some((i) => i.userInvoked !== !0) ? l : void 0
}

function b(o, e) {
  return o.userInvoked === !0 === (e.userInvoked === !0)
}
var yK = Jt(null);

function Fh() {
  let o = ve(yK);
  if (!o) throw ReferenceError("useDialogStore cannot be called outside of a DialogStoreContext provider (mounted by <AppStateProvider />)");
  return o
}

function wYe() {
  let o = Fh(),
    e = () => rhn(o.getState());
  return At(o.subscribe, e, e)
}

function DY() {
  let o = Fh(),
    e = () => pv(o.getState()) !== null;
  return At(o.subscribe, e, e)
}

function ix(o) {
  let e = Fh(),
    s = () => KHo(e.getState(), o);
  return At(e.subscribe, s, s)
}

function ohn() {
  let o = Fh(),
    e = () => ike(o.getState());
  return At(o.subscribe, e, e)
}

function K8s() {
  let o = Fh(),
    e = () => pv(o.getState());
  return At(o.subscribe, e, e)
}

function YHo(o) {
  let e = Fh(),
    s = () => kYe(pv(e.getState()), o);
  return At(e.subscribe, s, s)
}

function kYe(o, e) {
  return o?.hideWhile?.includes(e) === !0
}

function T5n() {
  let o = Fh(),
    e = () => pv(o.getState())?.kind;
  return At(o.subscribe, e, e)
}

function NM(o) {
  let e = Fh(),
    s = () => o(e.getState());
  return At(e.subscribe, s, s)
}
export {
  pv,
  ike,
  KHo,
  rhn,
  qHo,
  yK,
  Fh,
  wYe,
  DY,
  ix,
  ohn,
  K8s,
  YHo,
  kYe,
  T5n,
  NM
};
