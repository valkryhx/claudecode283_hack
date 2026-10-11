// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  dn,
  Ar
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  Yt
} from "B:/~BUN/root/chunk-jdm3bsma.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  se,
  Pe,
  R,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function A() {
  return {
    clearTimer: {
      current: null
    },
    mountCount: {
      current: 0
    }
  }
}

function qJe(u, r) {
  let c = u.current?.key === r,
    m = u.queue.some((i) => i.key === r),
    d = u.pinned.some((i) => i.key === r);
  if (!c && !m && !d) return u;
  return {
    current: c ? null : u.current,
    queue: u.queue.filter((i) => i.key !== r),
    pinned: d ? u.pinned.filter((i) => i.key !== r) : u.pinned
  }
}

function LQ(u) {
  return u.diffPanelVisible || u.paneHoldsToasts
}

function xue(u, r) {
  return u !== null && (!r || u.exemptFromDiffPanelHold === !0)
}
var p = 8000,
  S = Vt(null);

function Ivn(u) {
  let m = w(3),
    {
      children: r
    } = u,
    [c] = g(A),
    d;
  if (m[0] !== r || m[1] !== c) d = e(S.Provider, {
    value: c,
    children: r
  }), m[0] = r, m[1] = c, m[2] = d;
  else d = m[2];
  return d
}

function Zr() {
  let u = Ar(),
    r = dn(),
    c = Yt(),
    m = Pe(S),
    [d] = g(() => ({
      clearTimer: {
        current: null
      },
      mountCount: {
        current: 0
      }
    })),
    {
      clearTimer: i,
      mountCount: x
    } = m ?? d,
    s = se(() => {
      r((o) => {
        let n = C(LQ(o) ? o.notifications.queue.filter((l) => l.exemptFromDiffPanelHold) : o.notifications.queue);
        if (!n) return o;
        let t = o.notifications.current !== null && n.priority === "immediate" && n.heldDuringDiffPanel === !0 && o.notifications.current.priority !== "immediate" ? o.notifications.current : null;
        if (o.notifications.current !== null && t === null) return o;
        let a = n.key;
        return i.current?.(), i.current = c.setTimeout(() => {
          i.current = null, r((l) => {
            if (l.notifications.current?.key !== a) return l;
            return {
              ...l,
              notifications: {
                ...l.notifications,
                current: null
              }
            }
          }), s()
        }, n.timeoutMs ?? p), {
          ...o,
          notifications: {
            ...o.notifications,
            queue: [...t !== null && q(t, n) ? [t] : [], ...o.notifications.queue.filter((l) => l !== n)],
            current: n.heldDuringDiffPanel ? {
              ...n,
              heldDuringDiffPanel: void 0
            } : n
          }
        }
      })
    }, [r, i, c]),
    b = se((o) => {
      if (o.pinned) {
        r((t) => {
          if (t.notifications.pinned.some((a) => a.key === o.key)) return t;
          return {
            ...t,
            notifications: {
              ...t.notifications,
              pinned: [...t.notifications.pinned, o]
            }
          }
        });
        return
      }
      if (o.priority === "immediate" && !LQ(u.getState())) {
        if (i.current) i.current(), i.current = null;
        i.current = c.setTimeout(() => {
          i.current = null, r((t) => {
            if (t.notifications.current?.key !== o.key) return t;
            return {
              ...t,
              notifications: {
                ...t.notifications,
                queue: t.notifications.queue.filter((a) => !o.invalidates?.includes(a.key)),
                current: null
              }
            }
          }), s()
        }, o.timeoutMs ?? p), r((t) => ({
          ...t,
          notifications: {
            ...t.notifications,
            current: o,
            queue: [...t.notifications.current ? [t.notifications.current] : [], ...t.notifications.queue].filter((a) => q(a, o))
          }
        }));
        return
      }
      let n = o.priority === "immediate" ? {
        ...o,
        heldDuringDiffPanel: !0
      } : o;
      r((t) => {
        if (n.fold && t.notifications.current?.key === n.key) {
          let f = n.fold(t.notifications.current, n);
          if (i.current) i.current(), i.current = null;
          let y = f.key;
          return i.current = c.setTimeout(() => {
            i.current = null, r((k) => {
              if (k.notifications.current?.key !== y) return k;
              return {
                ...k,
                notifications: {
                  ...k.notifications,
                  current: null
                }
              }
            }), s()
          }, f.timeoutMs ?? p), {
            ...t,
            notifications: {
              ...t.notifications,
              current: f
            }
          }
        }
        let a = n.fold ? t.notifications.queue.findIndex((f) => f.key === n.key) : -1;
        if (n.fold && a !== -1) {
          let f = n.fold(t.notifications.queue[a], n),
            y = [...t.notifications.queue];
          return y[a] = f, {
            ...t,
            notifications: {
              ...t.notifications,
              queue: y
            }
          }
        }
        if (!(!new Set(t.notifications.queue.map((f) => f.key)).has(n.key) && t.notifications.current?.key !== n.key)) return t;
        let h = t.notifications.current !== null && n.invalidates?.includes(t.notifications.current.key);
        if (h && i.current) i.current(), i.current = null;
        return {
          ...t,
          notifications: {
            ...t.notifications,
            current: h ? null : t.notifications.current,
            queue: [...t.notifications.queue.filter((f) => q(f, n)), n]
          }
        }
      }), s()
    }, [r, s, i, c]),
    P = se((o) => {
      r((n) => {
        let t = qJe(n.notifications, o);
        if (t === n.notifications) return n;
        if (n.notifications.current?.key === o && i.current) i.current(), i.current = null;
        return {
          ...n,
          notifications: t
        }
      }), s()
    }, [r, s, i]);
  return R(() => {
    if (x.current++, u.getState().notifications.queue.length > 0) s();
    return () => {
      if (x.current--, x.current === 0 && i.current) i.current(), i.current = null
    }
  }, []), {
    addNotification: b,
    removeNotification: P,
    processQueue: s
  }
}
var KJe = {
  immediate: 0,
  high: 1,
  medium: 2,
  low: 3
};

function q(u, r) {
  return (u.priority !== "immediate" || u.requeueOnPreempt === !0 || u.heldDuringDiffPanel === !0) && !r.invalidates?.includes(u.key)
}

function C(u) {
  if (u.length === 0) return;
  return u.reduce((r, c) => KJe[c.priority] < KJe[r.priority] ? c : r)
}
export {
  qJe,
  LQ,
  xue,
  Ivn,
  Zr,
  KJe
};
