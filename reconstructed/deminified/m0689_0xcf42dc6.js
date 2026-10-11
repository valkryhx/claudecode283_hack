// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { dn, Ar } from "B:/~BUN/root/chunk-h23911wn.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, se, Pe, R, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function A() {
  return {
    clearTimer: {
      current: null
    },
    mountCount: {
      current: 0
    }
  };
}
function qJe(u, r) {
  let c = u.current?.key === r,
    m = u.queue.some(item => item.key === r),
    d = u.pinned.some(item => item.key === r);
  if (!c && !m && !d) return u;
  return {
    current: c ? null : u.current,
    queue: u.queue.filter(item => item.key !== r),
    pinned: d ? u.pinned.filter(item => item.key !== r) : u.pinned
  };
}
function LQ(u) {
  return u.diffPanelVisible || u.paneHoldsToasts;
}
function xue(u, r) {
  return u !== null && (!r || u.exemptFromDiffPanelHold === !0);
}
var p = 8000,
  S = Vt(null);
function Ivn(u) {
  let m = w(3),
    {
      children: children
    } = u,
    [value] = g(A),
    d;
  if (m[0] !== children || m[1] !== value) d = e(S.Provider, {
    value: value,
    children: children
  }), m[0] = children, m[1] = value, m[2] = d;else d = m[2];
  return d;
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
      clearTimer: clearTimer,
      mountCount: mountCount
    } = m ?? d,
    processQueue = se(() => {
      r(o => {
        let n = C(LQ(o) ? o.notifications.queue.filter(item => item.exemptFromDiffPanelHold) : o.notifications.queue);
        if (!n) return o;
        let t = o.notifications.current !== null && n.priority === "immediate" && n.heldDuringDiffPanel === !0 && o.notifications.current.priority !== "immediate" ? o.notifications.current : null;
        if (o.notifications.current !== null && t === null) return o;
        let a = n.key;
        return clearTimer.current?.(), clearTimer.current = c.setTimeout(() => {
          clearTimer.current = null, r(l => {
            if (l.notifications.current?.key !== a) return l;
            return {
              ...l,
              notifications: {
                ...l.notifications,
                current: null
              }
            };
          }), processQueue();
        }, n.timeoutMs ?? p), {
          ...o,
          notifications: {
            ...o.notifications,
            queue: [...(t !== null && q(t, n) ? [t] : []), ...o.notifications.queue.filter(item => item !== n)],
            current: n.heldDuringDiffPanel ? {
              ...n,
              heldDuringDiffPanel: void 0
            } : n
          }
        };
      });
    }, [r, clearTimer, c]),
    addNotification = se(current => {
      if (current.pinned) {
        r(t => {
          if (t.notifications.pinned.some(item => item.key === current.key)) return t;
          return {
            ...t,
            notifications: {
              ...t.notifications,
              pinned: [...t.notifications.pinned, current]
            }
          };
        });
        return;
      }
      if (current.priority === "immediate" && !LQ(u.getState())) {
        if (clearTimer.current) clearTimer.current(), clearTimer.current = null;
        clearTimer.current = c.setTimeout(() => {
          clearTimer.current = null, r(t => {
            if (t.notifications.current?.key !== current.key) return t;
            return {
              ...t,
              notifications: {
                ...t.notifications,
                queue: t.notifications.queue.filter(item => !current.invalidates?.includes(item.key)),
                current: null
              }
            };
          }), processQueue();
        }, current.timeoutMs ?? p), r(t => ({
          ...t,
          notifications: {
            ...t.notifications,
            current: current,
            queue: [...(t.notifications.current ? [t.notifications.current] : []), ...t.notifications.queue].filter(item => q(item, current))
          }
        }));
        return;
      }
      let n = current.priority === "immediate" ? {
        ...current,
        heldDuringDiffPanel: !0
      } : current;
      r(t => {
        if (n.fold && t.notifications.current?.key === n.key) {
          let current_2 = n.fold(t.notifications.current, n);
          if (clearTimer.current) clearTimer.current(), clearTimer.current = null;
          let y = current_2.key;
          return clearTimer.current = c.setTimeout(() => {
            clearTimer.current = null, r(k => {
              if (k.notifications.current?.key !== y) return k;
              return {
                ...k,
                notifications: {
                  ...k.notifications,
                  current: null
                }
              };
            }), processQueue();
          }, current_2.timeoutMs ?? p), {
            ...t,
            notifications: {
              ...t.notifications,
              current: current_2
            }
          };
        }
        let a = n.fold ? t.notifications.queue.findIndex(item => item.key === n.key) : -1;
        if (n.fold && a !== -1) {
          let f = n.fold(t.notifications.queue[a], n),
            queue = [...t.notifications.queue];
          return queue[a] = f, {
            ...t,
            notifications: {
              ...t.notifications,
              queue: queue
            }
          };
        }
        if (!(!new Set(t.notifications.queue.map(item => item.key)).has(n.key) && t.notifications.current?.key !== n.key)) return t;
        let h = t.notifications.current !== null && n.invalidates?.includes(t.notifications.current.key);
        if (h && clearTimer.current) clearTimer.current(), clearTimer.current = null;
        return {
          ...t,
          notifications: {
            ...t.notifications,
            current: h ? null : t.notifications.current,
            queue: [...t.notifications.queue.filter(item => q(item, n)), n]
          }
        };
      }), processQueue();
    }, [r, processQueue, clearTimer, c]),
    removeNotification = se(o => {
      r(n => {
        let notifications = qJe(n.notifications, o);
        if (notifications === n.notifications) return n;
        if (n.notifications.current?.key === o && clearTimer.current) clearTimer.current(), clearTimer.current = null;
        return {
          ...n,
          notifications: notifications
        };
      }), processQueue();
    }, [r, processQueue, clearTimer]);
  return R(() => {
    if (mountCount.current++, u.getState().notifications.queue.length > 0) processQueue();
    return () => {
      if (mountCount.current--, mountCount.current === 0 && clearTimer.current) clearTimer.current(), clearTimer.current = null;
    };
  }, []), {
    addNotification: addNotification,
    removeNotification: removeNotification,
    processQueue: processQueue
  };
}
var KJe = {
  immediate: 0,
  high: 1,
  medium: 2,
  low: 3
};
function q(u, r) {
  return (u.priority !== "immediate" || u.requeueOnPreempt === !0 || u.heldDuringDiffPanel === !0) && !r.invalidates?.includes(u.key);
}
function C(u) {
  if (u.length === 0) return;
  return u.reduce((acc, item) => KJe[item.priority] < KJe[acc.priority] ? item : acc);
}
export { qJe, LQ, xue, Ivn, Zr, KJe };