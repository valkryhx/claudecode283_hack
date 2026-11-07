// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Vs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  iWs
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  ln,
  $Hs
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  at,
  c$t,
  Wfe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  yi
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  mt
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  be,
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  adn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  tRn,
  yb,
  nL,
  NP
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Xq
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  Vmt,
  CGe,
  MEr,
  DEr,
  sm,
  nFn
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Ip,
  aO,
  bFn,
  L7e
} from "B:/~BUN/root/chunk-tdekz3md.js";
import {
  p3r,
  m3r,
  g3r,
  W6e,
  GCt,
  UYo,
  DBe,
  b3r,
  LBe
} from "B:/~BUN/root/chunk-x12sgt91.js";
import {
  tCt
} from "B:/~BUN/root/chunk-39etksx8.js";
import {
  Mvr
} from "B:/~BUN/root/chunk-j5zjtxy5.js";
import {
  EA
} from "B:/~BUN/root/chunk-eyvtcj15.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  resolve as B
} from "path";
var _Ho = new Je(() => De());

function qmn(e, r, o, l, u) {
  let c = yt();
  t(`Settings changed from ${r}, updating app state`), Wfe();
  let f = aO();
  Xq({
    userLayer: "retain"
  }), NP();
  let d = !1;
  if (o((m) => {
      let i = tRn(m.toolPermissionContext, f);
      i = SHo(i, m.settings.permissions?.additionalDirectories, L7e(), r, u?.trustFlip === !0, u?.prevCwd, l);
      let s = bHo(i, f);
      if (i = s.context, d = s.exitedAutoMode, i.blockReadsOutsideWorkingDirectories !== !0 && Vmt()) i = {
        ...i,
        blockReadsOutsideWorkingDirectories: !0
      }, DEr();
      if (i.blockWritesOutsideWorkingDirectories !== !0 && CGe()) i = g3r(i);
      i = Mvr(i);
      let g = MEr();
      if (!ln(i.readBlockExemptPaths ?? [], g)) i = {
        ...i,
        readBlockExemptPaths: g
      };
      nFn();
      let h = tCt();
      return {
        ...m,
        settings: c,
        toolPermissionContext: i,
        ...m.awaySummaryEnabled !== h && {
          awaySummaryEnabled: h
        }
      }
    }), d && e !== void 0) _Ho.of(e).emit()
}

function Ymn(e) {
  if ($Hs()) e()
}

function bHo(e, r) {
  let o = e;
  if (o.isBypassPermissionsModeAvailable && EA()) o = UYo(o);
  if (o.strippedDangerousRules !== void 0) {
    let u = new Set(yi),
      c = !Ip(),
      f = {};
    for (let [d, m] of Object.entries(o.strippedDangerousRules))
      if (m && (c || d === "command") && !u.has(d)) f[d] = [...m];
    o = {
      ...o,
      strippedDangerousRules: f
    }
  }
  let l = DBe(o) && GCt();
  if (l) o = b3r(o);
  return {
    context: LBe(o),
    exitedAutoMode: l
  }
}

function SHo(e, r, o, l, u = !1, c, f) {
  let d = new Set((r ?? []).flatMap((n) => C(n, c))),
    m = new Set((o ?? []).flatMap((n) => C(n))),
    i = e.additionalWorkingDirectories,
    s = [...d].filter((n) => !m.has(n) && !k(i.get(n)?.source)),
    g = [...m].filter((n) => (!d.has(n) || u && !i.has(n)) && !k(i.get(n)?.source)),
    h = Vs(),
    {
      declared: T,
      repoOnly: v
    } = bFn((n) => [...h === null ? [] : C(n, h), ...C(n)], f),
    D = (n) => v.has(n) ? "projectSettings" : "localSettings",
    b = [...i.entries()].filter(([n, p]) => !k(p.source) && !s.includes(n) && T.has(n) && p.source !== D(n));
  if (s.length === 0 && g.length === 0 && b.length === 0 && l !== "flagSettings") return e;
  let y = e;
  if (b.length > 0) {
    let n = new Map(i);
    for (let [p, x] of b) n.set(p, {
      ...x,
      source: D(p)
    });
    y = {
      ...y,
      additionalWorkingDirectories: n
    }
  }
  if (l === "flagSettings") {
    let n = new Set((be("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap((S) => C(S))),
      p = new Map(y.trustedNetworkDirectories ?? []),
      x = !1;
    for (let S of [...p.keys()])
      if (!n.has(S) && i.get(S)?.source !== "cliArg") {
        for (let P of p.get(S) ?? [])
          if (P !== S) s.push(P);
        p.delete(S), x = !0
      } if (m3r()) {
      for (let S of n)
        if (!p.has(S)) {
          if (iWs(S)) continue;
          let P = adn(S);
          if (P.length > 0) {
            p.set(S, P);
            for (let A of P)
              if (A !== S) g.push(A);
            x = !0
          }
        }
    }
    if (x) y = {
      ...y,
      trustedNetworkDirectories: p
    }
  }
  if (s.length > 0) y = sm(y, {
    type: "removeDirectories",
    directories: s,
    destination: "localSettings"
  });
  if (g.length > 0)
    for (let n of ["projectSettings", "localSettings"]) {
      let p = g.filter((x) => D(x) === n);
      if (p.length > 0) y = sm(y, {
        type: "addDirectories",
        directories: p,
        destination: n
      })
    }
  return y
}

function Xmn(e, r) {
  let o = new Set(L7e().flatMap((c) => C(c))),
    l = e.additionalWorkingDirectories,
    u = r.filter((c) => {
      let f = l.get(c);
      return f !== void 0 && !o.has(c) && !k(f.source)
    });
  if (u.length === 0) return e;
  return sm(e, {
    type: "removeDirectories",
    directories: u,
    destination: "localSettings"
  })
}

function k(e) {
  return e === "cliArg" || e === "command" || e === "session"
}

function E(e, r) {
  return B(mt(e, r))
}

function C(e, r) {
  try {
    return [E(e, r)]
  } catch {
    return []
  }
}
class M {
  #e = !1;
  #o = !1;
  get autoModeCheckRan() {
    return this.#e
  }
  get isLaunchRun() {
    return !this.#o
  }
  claimAutoModeCheck() {
    if (this.#e) return !1;
    return this.#e = !0, !0
  }
  rearmAutoModeCheck() {
    this.#e = !1, this.#o = !0
  }
  reset() {
    this.#e = !1, this.#o = !1
  }
}
var w = new W(() => new M);

function HGt(e) {
  return {
    key: "auto-mode-gate-notification",
    kind: "warning",
    text: e,
    color: "warning",
    priority: "high"
  }
}
async function $Gt(e, r, o, l, u) {
  let c = w.of(e);
  if (!c.claimAutoModeCheck()) return;
  let {
    updateContext: f,
    notification: d
  } = await W6e(r, l, c.isLaunchRun);
  if (o((m) => {
      let i = f(m.toolPermissionContext),
        s = i === m.toolPermissionContext ? m : {
          ...m,
          toolPermissionContext: i
        };
      if (!d || u) return s;
      return {
        ...s,
        notifications: {
          ...s.notifications,
          queue: [...s.notifications.queue, HGt(d)]
        }
      }
    }), d && u) u(HGt(d))
}

function u5n(e) {
  w.of(e).rearmAutoModeCheck()
}

function f5n(e, r) {
  return (e.isAutoModeAvailable === !1 || Boolean(r) || c$t(at())) && yb()
}

function wHo(e, r, o, l) {
  return R(e, r, o, l, !1)
}

function Vvt(e, r, o, l) {
  return R(e, r, o, l, !0)
}
async function B8s(e, r, o, l) {
  switch (await wHo(e, r, o, l)) {
    case "not-due":
    case "allowed":
      return;
    case "refused":
      return p3r(nL());
    case "unanswered":
      return {
        ok: !1, error: "Cannot set permission mode to auto: auto mode availability is not known yet \xB7 ask again", code: "auto_mode_unavailable"
      }
  }
}
async function R(e, r, o, l, u) {
  if (!f5n(e, o) || u && DBe(e)) return "not-due";
  let c = W6e(e, o).then(({
    updateContext: f,
    canEnterAuto: d,
    refusedForSettingsAlone: m
  }) => {
    let i = !1;
    if (!m) r((s) => {
      let g = s.toolPermissionContext;
      if (!d) {
        if (u && DBe(g)) return s;
        let h = f(g);
        return h === g ? s : {
          ...s,
          toolPermissionContext: h
        }
      }
      if (i = Boolean(s.fastMode) && !o, g.isAutoModeAvailable !== !1 || !yb() || Boolean(s.fastMode) !== Boolean(o)) return s;
      return {
        ...s,
        toolPermissionContext: {
          ...g,
          isAutoModeAvailable: d,
          canAutoClassifierRun: d
        }
      }
    });
    if (!d) return "refused";
    return i ? "unanswered" : "allowed"
  }).catch((f) => (a(F(f)), "unanswered"));
  return await (l === void 0 ? c : we(c, l)) ?? "unanswered"
}
export {
  _Ho,
  qmn,
  Ymn,
  bHo,
  SHo,
  Xmn,
  HGt,
  $Gt,
  u5n,
  f5n,
  wHo,
  Vvt,
  B8s
};
