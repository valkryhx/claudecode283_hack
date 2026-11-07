// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Va
} from "B:/~BUN/root/chunk-gr5se97s.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Ne
} from "B:/~BUN/root/chunk-qdyt0gq6.js";
import {
  ar,
  Gr
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  _hn,
  Izr,
  Rn,
  ot
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Hh
} from "B:/~BUN/root/chunk-81tfbmye.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ue,
  ve,
  O,
  Zt,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function fhn() {
  return Hh()
}

function _(i) {
  return i.mounts > 0
}

function tEt(i, n) {
  let a = i.current?.key === n,
    N = i.queue.some((s) => s.key === n),
    m = i.pinned.some((s) => s.key === n);
  if (!a && !N && !m) return i;
  return {
    current: a ? null : i.current,
    queue: i.queue.filter((s) => s.key !== n),
    pinned: m ? i.pinned.filter((s) => s.key !== n) : i.pinned
  }
}

function FG(i) {
  return i.diffPanelVisible || i.paneHoldsToasts
}

function dke(i, n) {
  return i !== null && (!n || i.exemptFromDiffPanelHold === !0)
}

function RUe(i, n) {
  return n && i !== null && Czr(i)?.surface === "gauge"
}

function BPe() {
  return Ne(Va.headerGauge, _)
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
    saidInTranscript: new Map
  }
}
var b = Jt(null);

function Tzr(i) {
  let N = S(3),
    {
      children: n
    } = i,
    [a] = y(V),
    m;
  if (N[0] !== n || N[1] !== a) m = e(b.Provider, {
    value: a,
    children: n
  }), N[0] = n, N[1] = a, N[2] = m;
  else m = N[2];
  return m
}

function P({
  presentationContext: i,
  isScreenReaderEnabled: n
}) {
  return fhn() && !n && Izr(i) === "fullscreen"
}

function I(i, {
  transcriptSink: n,
  saidInTranscript: a
}, N) {
  if (!1) switch (m.routeNotification(i.key)) {
    case "suppress":
    case "queue":
    case "transcript":
  }
  return i
}

function Czr(i) {
  return
}

function Q8s(i) {
  let n = ve(b);
  Zt(() => {
    if (n === null) return;
    return n.transcriptSink.registered = i, () => {
      if (n.transcriptSink.registered === i) n.transcriptSink.registered = null
    }
  }, [n, i])
}

function Lo() {
  let i = Gr(),
    n = ar(),
    a = Rn(),
    N = ve(b),
    [m] = y(V),
    s = N ?? m,
    {
      clearTimer: o,
      mountCount: T
    } = s,
    h = ve(_hn),
    k = ot(),
    d = ue(() => {
      let p = P({
          presentationContext: h,
          isScreenReaderEnabled: k
        }),
        r = fhn() ? i.getState().notifications.queue.filter((u) => I(u, s, p) === "handled") : [];
      n((u) => {
        let t = r.length === 0 ? u : {
            ...u,
            notifications: {
              ...u.notifications,
              queue: u.notifications.queue.filter((f) => !r.includes(f))
            }
          },
          c = M(FG(t) ? t.notifications.queue.filter((f) => f.exemptFromDiffPanelHold) : t.notifications.queue);
        if (!c) return t;
        let g = t.notifications.current !== null && c.priority === "immediate" && c.heldDuringDiffPanel === !0 && t.notifications.current.priority !== "immediate" ? t.notifications.current : null;
        if (t.notifications.current !== null && g === null) return t;
        let D = c.key;
        return o.current?.(), o.current = a.setTimeout(() => {
          o.current = null, n((f) => {
            if (f.notifications.current?.key !== D) return f;
            return {
              ...f,
              notifications: {
                ...f.notifications,
                current: null
              }
            }
          }), d()
        }, c.timeoutMs ?? D5n), {
          ...t,
          notifications: {
            ...t.notifications,
            queue: [...g !== null && q(g, c) ? [g] : [], ...t.notifications.queue.filter((f) => f !== c)],
            current: c.heldDuringDiffPanel ? {
              ...c,
              heldDuringDiffPanel: void 0
            } : c
          }
        }
      })
    }, [n, i, s, o, a, h, k]),
    H = ue((p) => {
      let r = fhn() ? I(p, s, P({
        presentationContext: h,
        isScreenReaderEnabled: k
      })) : p;
      if (r === "handled") return;
      if (r.pinned) {
        n((t) => {
          if (t.notifications.pinned.some((c) => c.key === r.key)) return t;
          return {
            ...t,
            notifications: {
              ...t.notifications,
              pinned: [...t.notifications.pinned, r]
            }
          }
        });
        return
      }
      if (r.priority === "immediate" && r.waitsItsTurn !== !0 && !FG(i.getState())) {
        if (o.current) o.current(), o.current = null;
        o.current = a.setTimeout(() => {
          o.current = null, n((t) => {
            if (t.notifications.current?.key !== r.key) return t;
            return {
              ...t,
              notifications: {
                ...t.notifications,
                queue: t.notifications.queue.filter((c) => !r.invalidates?.includes(c.key)),
                current: null
              }
            }
          }), d()
        }, r.timeoutMs ?? D5n), n((t) => ({
          ...t,
          notifications: {
            ...t.notifications,
            current: r,
            queue: [...t.notifications.current ? [t.notifications.current] : [], ...t.notifications.queue].filter((c) => q(c, r))
          }
        }));
        return
      }
      let u = r.priority === "immediate" ? {
        ...r,
        heldDuringDiffPanel: !0
      } : r;
      n((t) => {
        if (u.fold && t.notifications.current?.key === u.key) {
          let l = u.fold(t.notifications.current, u);
          if (o.current) o.current(), o.current = null;
          let R = l.key;
          return o.current = a.setTimeout(() => {
            o.current = null, n((x) => {
              if (x.notifications.current?.key !== R) return x;
              return {
                ...x,
                notifications: {
                  ...x.notifications,
                  current: null
                }
              }
            }), d()
          }, l.timeoutMs ?? D5n), {
            ...t,
            notifications: {
              ...t.notifications,
              current: l
            }
          }
        }
        let c = u.fold ? t.notifications.queue.findIndex((l) => l.key === u.key) : -1;
        if (u.fold && c !== -1) {
          let l = u.fold(t.notifications.queue[c], u),
            R = [...t.notifications.queue];
          return R[c] = l, {
            ...t,
            notifications: {
              ...t.notifications,
              queue: R
            }
          }
        }
        if (!(!new Set(t.notifications.queue.map((l) => l.key)).has(u.key) && t.notifications.current?.key !== u.key)) return t;
        let f = t.notifications.current !== null && u.invalidates?.includes(t.notifications.current.key);
        if (f && o.current) o.current(), o.current = null;
        return {
          ...t,
          notifications: {
            ...t.notifications,
            current: f ? null : t.notifications.current,
            queue: [...t.notifications.queue.filter((l) => q(l, u)), u]
          }
        }
      }), d()
    }, [n, i, s, d, o, a, h, k]),
    E = ue((p) => {
      n((r) => {
        let u = tEt(r.notifications, p);
        if (u === r.notifications) return r;
        if (r.notifications.current?.key === p && o.current) o.current(), o.current = null;
        return {
          ...r,
          notifications: u
        }
      }), d()
    }, [n, d, o, s, h, k]);
  return O(() => {
    if (T.current++, i.getState().notifications.queue.length > 0) d();
    return () => {
      if (T.current--, T.current === 0 && o.current) o.current(), o.current = null
    }
  }, []), {
    addNotification: H,
    removeNotification: E,
    processQueue: d
  }
}
var t2t = {
  immediate: 0,
  high: 1,
  medium: 2,
  low: 3
};

function q(i, n) {
  return (i.priority !== "immediate" || i.requeueOnPreempt === !0 || i.heldDuringDiffPanel === !0) && !n.invalidates?.includes(i.key)
}

function M(i) {
  if (i.length === 0) return;
  return i.reduce((n, a) => t2t[a.priority] < t2t[n.priority] ? a : n)
}
export {
  fhn,
  tEt,
  FG,
  dke,
  RUe,
  BPe,
  D5n,
  Tzr,
  Czr,
  Q8s,
  Lo,
  t2t
};
