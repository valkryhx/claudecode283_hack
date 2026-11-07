// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Va } from "B:/~BUN/root/chunk-gr5se97s.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Ne } from "B:/~BUN/root/chunk-qdyt0gq6.js";
import { ar, Gr } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { _hn, Izr, Rn, ot } from "B:/~BUN/root/chunk-qey16aan.js";
import { Hh } from "B:/~BUN/root/chunk-81tfbmye.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ue, ve, O, Zt, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function fhn() {
  return Hh();
}
function _(i) {
  return i.mounts > 0;
}
function tEt(i, n) {
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
function FG(i) {
  return i.diffPanelVisible || i.paneHoldsToasts;
}
function dke(i, n) {
  return i !== null && (!n || i.exemptFromDiffPanelHold === !0);
}
function RUe(i, n) {
  return n && i !== null && Czr(i)?.surface === "gauge";
}
function BPe() {
  return Ne(Va.headerGauge, _);
}
var D5n = 8000;
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
var b = Jt(null);
function Tzr(i) {
  let N = S(3),
    {
      children: children
    } = i,
    [value] = y(V),
    m;
  if (N[0] !== children || N[1] !== value) m = e(b.Provider, {
    value: value,
    children: children
  }), N[0] = children, N[1] = value, N[2] = m;else m = N[2];
  return m;
}
function P({
  presentationContext: presentationContext,
  isScreenReaderEnabled: isScreenReaderEnabled
}) {
  return fhn() && !isScreenReaderEnabled && Izr(presentationContext) === "fullscreen";
}
function I(i, {
  transcriptSink: transcriptSink,
  saidInTranscript: saidInTranscript
}, N) {
  if (!1) switch (m.routeNotification(i.key)) {
    case "suppress":
    case "queue":
    case "transcript":
  }
  return i;
}
function Czr(i) {
  return;
}
function Q8s(i) {
  let n = ve(b);
  Zt(() => {
    if (n === null) return;
    return n.transcriptSink.registered = i, () => {
      if (n.transcriptSink.registered === i) n.transcriptSink.registered = null;
    };
  }, [n, i]);
}
function Lo() {
  let i = Gr(),
    n = ar(),
    a = Rn(),
    N = ve(b),
    [m] = y(V),
    s = N ?? m,
    {
      clearTimer: clearTimer,
      mountCount: mountCount
    } = s,
    presentationContext_2 = ve(_hn),
    isScreenReaderEnabled_2 = ot(),
    processQueue = ue(() => {
      let p = P({
          presentationContext: presentationContext_2,
          isScreenReaderEnabled: isScreenReaderEnabled_2
        }),
        r = fhn() ? i.getState().notifications.queue.filter(item => I(item, s, p) === "handled") : [];
      n(u => {
        let t = r.length === 0 ? u : {
            ...u,
            notifications: {
              ...u.notifications,
              queue: u.notifications.queue.filter(item => !r.includes(item))
            }
          },
          c = M(FG(t) ? t.notifications.queue.filter(item => item.exemptFromDiffPanelHold) : t.notifications.queue);
        if (!c) return t;
        let g = t.notifications.current !== null && c.priority === "immediate" && c.heldDuringDiffPanel === !0 && t.notifications.current.priority !== "immediate" ? t.notifications.current : null;
        if (t.notifications.current !== null && g === null) return t;
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
        }, c.timeoutMs ?? D5n), {
          ...t,
          notifications: {
            ...t.notifications,
            queue: [...(g !== null && q(g, c) ? [g] : []), ...t.notifications.queue.filter(item => item !== c)],
            current: c.heldDuringDiffPanel ? {
              ...c,
              heldDuringDiffPanel: void 0
            } : c
          }
        };
      });
    }, [n, i, s, clearTimer, a, presentationContext_2, isScreenReaderEnabled_2]),
    addNotification = ue(p => {
      let current = fhn() ? I(p, s, P({
        presentationContext: presentationContext_2,
        isScreenReaderEnabled: isScreenReaderEnabled_2
      })) : p;
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
      if (current.priority === "immediate" && current.waitsItsTurn !== !0 && !FG(i.getState())) {
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
        }, current.timeoutMs ?? D5n), n(t => ({
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
          let R = current_2.key;
          return clearTimer.current = a.setTimeout(() => {
            clearTimer.current = null, n(x => {
              if (x.notifications.current?.key !== R) return x;
              return {
                ...x,
                notifications: {
                  ...x.notifications,
                  current: null
                }
              };
            }), processQueue();
          }, current_2.timeoutMs ?? D5n), {
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
    removeNotification = ue(p => {
      n(r => {
        let notifications = tEt(r.notifications, p);
        if (notifications === r.notifications) return r;
        if (r.notifications.current?.key === p && clearTimer.current) clearTimer.current(), clearTimer.current = null;
        return {
          ...r,
          notifications: notifications
        };
      }), processQueue();
    }, [n, processQueue, clearTimer, s, presentationContext_2, isScreenReaderEnabled_2]);
  return O(() => {
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
var t2t = {
  immediate: 0,
  high: 1,
  medium: 2,
  low: 3
};
function q(i, n) {
  return (i.priority !== "immediate" || i.requeueOnPreempt === !0 || i.heldDuringDiffPanel === !0) && !n.invalidates?.includes(i.key);
}
function M(i) {
  if (i.length === 0) return;
  return i.reduce((acc, item) => t2t[item.priority] < t2t[acc.priority] ? item : acc);
}
export { fhn, tEt, FG, dke, RUe, BPe, D5n, Tzr, Czr, Q8s, Lo, t2t };