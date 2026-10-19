// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ma } from "B:/~BUN/root/chunk-7fsmvr58.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Ae } from "B:/~BUN/root/chunk-jjcfcfrs.js";
import { Un, Ar } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { tVt, Ynr, dn, ot } from "B:/~BUN/root/chunk-damrp3r8.js";
import { hE } from "B:/~BUN/root/chunk-88ayp7r7.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, ae, Ee, P, Jt, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function Bnr() {
  return hE();
}
function _(i) {
  return i.mounts > 0;
}
function xnt(i, n) {
  let a = i.current?.key === n,
    N = i.queue.some(item => item.key === n),
    m = i.pinned.some(item => item.key === n);
  if (!a && !N && !m) return i;
  return {
    current: a ? null : i.current,
    queue: i.queue.filter(item => item.key !== n),
    pinned: m ? i.pinned.filter(item => item.key !== n) : i.pinned
  };
}
function L$(i) {
  return i.diffPanelVisible || i.paneHoldsToasts;
}
function uce(i, n) {
  return i !== null && (!n || i.exemptFromDiffPanelHold === !0);
}
function jCe(i, n) {
  return n && i !== null && Wnr(i)?.surface === "gauge";
}
function c_e() {
  return Ae(ma.headerGauge, _);
}
var b = 8000;
function V() {
  return {
    clearTimer: {
      current: null
    },
    mountCount: {
      current: 0
    },
    transcriptSink: {
      registered: null
    },
    saidInTranscript: new Map()
  };
}
var x = qt(null);
function jnr(i) {
  let N = w(3),
    {
      children: children
    } = i,
    [value] = y(V),
    m;
  if (N[0] !== children || N[1] !== value) m = e(x.Provider, {
    value: value,
    children: children
  }), N[0] = children, N[1] = value, N[2] = m;else m = N[2];
  return m;
}
function H({
  presentationContext: presentationContext,
  isScreenReaderEnabled: isScreenReaderEnabled
}) {
  return Bnr() && !isScreenReaderEnabled && Ynr(presentationContext) === "fullscreen";
}
function C(i, {
  transcriptSink: transcriptSink,
  saidInTranscript: saidInTranscript
}) {
  if (!1) switch (N.routeNotification(i.key, !0)) {
    case "suppress":
    case "queue":
    case "transcript":
  }
  return i;
}
function Wnr(i) {
  return;
}
function g9o(i) {
  let n = Ee(x);
  Jt(() => {
    if (n === null) return;
    return n.transcriptSink.registered = i, () => {
      if (n.transcriptSink.registered === i) n.transcriptSink.registered = null;
    };
  }, [n, i]);
}
function Ro() {
  let i = Ar(),
    n = Un(),
    a = dn(),
    N = Ee(x),
    [m] = y(V),
    s = N ?? m,
    {
      clearTimer: clearTimer,
      mountCount: mountCount
    } = s,
    presentationContext_2 = Ee(tVt),
    isScreenReaderEnabled_2 = ot(),
    processQueue = ae(() => {
      let r = H({
        presentationContext: presentationContext_2,
        isScreenReaderEnabled: isScreenReaderEnabled_2
      }) ? i.getState().notifications.queue.filter(item => C(item, s) === "handled") : [];
      n(u => {
        let t = r.length === 0 ? u : {
            ...u,
            notifications: {
              ...u.notifications,
              queue: u.notifications.queue.filter(item => !r.includes(item))
            }
          },
          c = U(L$(t) ? t.notifications.queue.filter(item => item.exemptFromDiffPanelHold) : t.notifications.queue);
        if (!c) return t;
        let k = t.notifications.current !== null && c.priority === "immediate" && c.heldDuringDiffPanel === !0 && t.notifications.current.priority !== "immediate" ? t.notifications.current : null;
        if (t.notifications.current !== null && k === null) return t;
        let D = c.key;
        return clearTimer.current?.(), clearTimer.current = a.setTimeout(() => {
          clearTimer.current = null, n(f => {
            if (f.notifications.current?.key !== D) return f;
            return {
              ...f,
              notifications: {
                ...f.notifications,
                current: null
              }
            };
          }), processQueue();
        }, c.timeoutMs ?? b), {
          ...t,
          notifications: {
            ...t.notifications,
            queue: [...(k !== null && q(k, c) ? [k] : []), ...t.notifications.queue.filter(item => item !== c)],
            current: c.heldDuringDiffPanel ? {
              ...c,
              heldDuringDiffPanel: void 0
            } : c
          }
        };
      });
    }, [n, i, s, clearTimer, a, presentationContext_2, isScreenReaderEnabled_2]),
    addNotification = ae(p => {
      let current = H({
        presentationContext: presentationContext_2,
        isScreenReaderEnabled: isScreenReaderEnabled_2
      }) ? C(p, s) : p;
      if (current === "handled") return;
      if (current.pinned) {
        n(t => {
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
      if (current.priority === "immediate" && current.waitsItsTurn !== !0 && !L$(i.getState())) {
        if (clearTimer.current) clearTimer.current(), clearTimer.current = null;
        clearTimer.current = a.setTimeout(() => {
          clearTimer.current = null, n(t => {
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
        }, current.timeoutMs ?? b), n(t => ({
          ...t,
          notifications: {
            ...t.notifications,
            current: current,
            queue: [...(t.notifications.current ? [t.notifications.current] : []), ...t.notifications.queue].filter(item => q(item, current))
          }
        }));
        return;
      }
      let u = current.priority === "immediate" ? {
        ...current,
        heldDuringDiffPanel: !0
      } : current;
      n(t => {
        if (u.fold && t.notifications.current?.key === u.key) {
          let current_2 = u.fold(t.notifications.current, u);
          if (clearTimer.current) clearTimer.current(), clearTimer.current = null;
          let g = current_2.key;
          return clearTimer.current = a.setTimeout(() => {
            clearTimer.current = null, n(R => {
              if (R.notifications.current?.key !== g) return R;
              return {
                ...R,
                notifications: {
                  ...R.notifications,
                  current: null
                }
              };
            }), processQueue();
          }, current_2.timeoutMs ?? b), {
            ...t,
            notifications: {
              ...t.notifications,
              current: current_2
            }
          };
        }
        let c = u.fold ? t.notifications.queue.findIndex(item => item.key === u.key) : -1;
        if (u.fold && c !== -1) {
          let l = u.fold(t.notifications.queue[c], u),
            queue = [...t.notifications.queue];
          return queue[c] = l, {
            ...t,
            notifications: {
              ...t.notifications,
              queue: queue
            }
          };
        }
        if (!(!new Set(t.notifications.queue.map(item => item.key)).has(u.key) && t.notifications.current?.key !== u.key)) return t;
        let f = t.notifications.current !== null && u.invalidates?.includes(t.notifications.current.key);
        if (f && clearTimer.current) clearTimer.current(), clearTimer.current = null;
        return {
          ...t,
          notifications: {
            ...t.notifications,
            current: f ? null : t.notifications.current,
            queue: [...t.notifications.queue.filter(item => q(item, u)), u]
          }
        };
      }), processQueue();
    }, [n, i, s, processQueue, clearTimer, a, presentationContext_2, isScreenReaderEnabled_2]),
    removeNotification = ae(p => {
      n(r => {
        let notifications = xnt(r.notifications, p);
        if (notifications === r.notifications) return r;
        if (r.notifications.current?.key === p && clearTimer.current) clearTimer.current(), clearTimer.current = null;
        return {
          ...r,
          notifications: notifications
        };
      }), processQueue();
    }, [n, processQueue, clearTimer, s, presentationContext_2, isScreenReaderEnabled_2]);
  return P(() => {
    if (mountCount.current++, i.getState().notifications.queue.length > 0) processQueue();
    return () => {
      if (mountCount.current--, mountCount.current === 0 && clearTimer.current) clearTimer.current(), clearTimer.current = null;
    };
  }, []), {
    addNotification: addNotification,
    removeNotification: removeNotification,
    processQueue: processQueue
  };
}
var Kvt = {
  immediate: 0,
  high: 1,
  medium: 2,
  low: 3
};
function q(i, n) {
  return (i.priority !== "immediate" || i.requeueOnPreempt === !0 || i.heldDuringDiffPanel === !0) && !n.invalidates?.includes(i.key);
}
function U(i) {
  if (i.length === 0) return;
  return i.reduce((acc, item) => Kvt[item.priority] < Kvt[acc.priority] ? item : acc);
}
export { Bnr, xnt, L$, uce, jCe, c_e, jnr, Wnr, g9o, Ro, Kvt };