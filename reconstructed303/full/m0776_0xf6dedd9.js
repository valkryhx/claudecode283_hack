// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  at,
  ii
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  DWo,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  tt,
  oht,
  EEe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  it
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  RUo
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  xs
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  me,
  ut
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  fXt,
  Zh,
  KP,
  nx
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Bj
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  Ug,
  CG,
  YGn,
  s9e,
  i1e,
  don,
  du
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  Ccr,
  Acr,
  xcr,
  dFe,
  RCt,
  IZr,
  ost,
  Mcr,
  oAe
} from "B:/~BUN/root/chunk-62ynkm2y.js";
import {
  dot
} from "B:/~BUN/root/chunk-w2w7b0v5.js";
import {
  $E
} from "B:/~BUN/root/chunk-410t5g3b.js";
import {
  resolve as B
} from "path";
var UKr = new at(() => Me());

function L2t(e, n, o, d, u) {
  let c = ut();
  t(`Settings changed from ${n}, updating app state`), EEe();
  let f = CG();
  Bj({
    userLayer: "retain"
  }), nx();
  let a = !1;
  if (o((m) => {
      let s = fXt(m.toolPermissionContext, f);
      s = jKr(s, m.settings.permissions?.additionalDirectories, s9e(), n, u?.trustFlip === !0, u?.prevCwd, d);
      let r = BKr(s, f);
      if (s = r.context, a = r.exitedAutoMode, s.blockReadsOutsideWorkingDirectories !== !0 && i1e()) s = {
        ...s,
        blockReadsOutsideWorkingDirectories: !0
      }, don();
      let g = dot();
      return {
        ...m,
        settings: c,
        toolPermissionContext: s,
        ...m.awaySummaryEnabled !== g && {
          awaySummaryEnabled: g
        }
      }
    }), a && e !== void 0) UKr.of(e).emit()
}

function N2t(e) {
  if (RUo()) e()
}

function BKr(e, n) {
  let o = e;
  if (o.isBypassPermissionsModeAvailable && $E()) o = IZr(o);
  if (o.strippedDangerousRules !== void 0) {
    let u = new Set(xs),
      c = !Ug(),
      f = {};
    for (let [a, m] of Object.entries(o.strippedDangerousRules))
      if (m && (c || a === "command") && !u.has(a)) f[a] = [...m];
    o = {
      ...o,
      strippedDangerousRules: f
    }
  }
  let d = ost(o) && RCt();
  if (d) o = Mcr(o);
  return {
    context: oAe(o),
    exitedAutoMode: d
  }
}

function jKr(e, n, o, d, u = !1, c, f) {
  let a = new Set((n ?? []).flatMap((i) => C(i, c))),
    m = new Set((o ?? []).flatMap((i) => C(i))),
    s = e.additionalWorkingDirectories,
    r = [...a].filter((i) => !m.has(i) && !D(s.get(i)?.source)),
    g = [...m].filter((i) => (!a.has(i) || u && !s.has(i)) && !D(s.get(i)?.source)),
    P = ii(),
    {
      declared: T,
      repoOnly: v
    } = YGn((i) => [...P === null ? [] : C(i, P), ...C(i)], f),
    b = (i) => v.has(i) ? "projectSettings" : "localSettings",
    A = [...s.entries()].filter(([i, p]) => !D(p.source) && !r.includes(i) && T.has(i) && p.source !== b(i));
  if (r.length === 0 && g.length === 0 && A.length === 0 && d !== "flagSettings") return e;
  let y = e;
  if (A.length > 0) {
    let i = new Map(s);
    for (let [p, h] of A) i.set(p, {
      ...h,
      source: b(p)
    });
    y = {
      ...y,
      additionalWorkingDirectories: i
    }
  }
  if (d === "flagSettings") {
    let i = new Set((me("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap((S) => C(S))),
      p = new Map(y.trustedNetworkDirectories ?? []),
      h = !1;
    for (let S of [...p.keys()])
      if (!i.has(S) && s.get(S)?.source !== "cliArg") {
        for (let x of p.get(S) ?? [])
          if (x !== S) r.push(x);
        p.delete(S), h = !0
      } if (xcr()) {
      for (let S of i)
        if (!p.has(S)) {
          if (DWo(S)) continue;
          let x = Ccr(S);
          if (x.length > 0) {
            p.set(S, x);
            for (let M of x)
              if (M !== S) g.push(M);
            h = !0
          }
        }
    }
    if (h) y = {
      ...y,
      trustedNetworkDirectories: p
    }
  }
  if (r.length > 0) y = du(y, {
    type: "removeDirectories",
    directories: r,
    destination: "localSettings"
  });
  if (g.length > 0)
    for (let i of ["projectSettings", "localSettings"]) {
      let p = g.filter((h) => b(h) === i);
      if (p.length > 0) y = du(y, {
        type: "addDirectories",
        directories: p,
        destination: i
      })
    }
  return y
}

function F2t(e, n) {
  let o = new Set(s9e().flatMap((c) => C(c))),
    d = e.additionalWorkingDirectories,
    u = n.filter((c) => {
      let f = d.get(c);
      return f !== void 0 && !o.has(c) && !D(f.source)
    });
  if (u.length === 0) return e;
  return du(e, {
    type: "removeDirectories",
    directories: u,
    destination: "localSettings"
  })
}

function D(e) {
  return e === "cliArg" || e === "command" || e === "session"
}

function E(e, n) {
  return B(it(e, n))
}

function C(e, n) {
  try {
    return [E(e, n)]
  } catch {
    return []
  }
}
class k {
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
var w = new z(() => new k);

function Mvt(e) {
  return {
    key: "auto-mode-gate-notification",
    kind: "warning",
    text: e,
    color: "warning",
    priority: "high"
  }
}
async function Dvt(e, n, o, d, u) {
  let c = w.of(e);
  if (!c.claimAutoModeCheck()) return;
  let {
    updateContext: f,
    notification: a
  } = await dFe(n, d, c.isLaunchRun);
  if (o((m) => {
      let s = f(m.toolPermissionContext),
        r = s === m.toolPermissionContext ? m : {
          ...m,
          toolPermissionContext: s
        };
      if (!a || u) return r;
      return {
        ...r,
        notifications: {
          ...r.notifications,
          queue: [...r.notifications.queue, Mvt(a)]
        }
      }
    }), a && u) u(Mvt(a))
}

function Twn(e) {
  w.of(e).rearmAutoModeCheck()
}

function WKr(e, n) {
  return (e.isAutoModeAvailable === !1 || Boolean(n) || oht(tt())) && Zh()
}

function zKr(e, n, o, d) {
  return R(e, n, o, d, !1)
}

function H2t(e, n, o) {
  return R(e, n, o, void 0, !0)
}
async function o9o(e, n, o, d) {
  switch (await zKr(e, n, o, d)) {
    case "not-due":
    case "allowed":
      return;
    case "refused":
      return Acr(KP());
    case "unanswered":
      return {
        ok: !1, error: "Cannot set permission mode to auto: auto mode availability is not known yet \xB7 ask again", code: "auto_mode_unavailable"
      }
  }
}
async function R(e, n, o, d, u) {
  if (!WKr(e, o) || u && ost(e)) return "not-due";
  let c = dFe(e, o).then(({
    updateContext: f,
    canEnterAuto: a,
    refusedForSettingsAlone: m
  }) => {
    let s = !1;
    if (!m) n((r) => {
      let g = r.toolPermissionContext;
      if (!a) {
        if (u && ost(g)) return r;
        let P = f(g);
        return P === g ? r : {
          ...r,
          toolPermissionContext: P
        }
      }
      if (s = Boolean(r.fastMode) && !o, g.isAutoModeAvailable !== !1 || !Zh() || Boolean(r.fastMode) !== Boolean(o)) return r;
      return {
        ...r,
        toolPermissionContext: {
          ...g,
          isAutoModeAvailable: a,
          canAutoClassifierRun: a
        }
      }
    });
    if (!a) return "refused";
    return s ? "unanswered" : "allowed"
  }).catch((f) => (l(H(f)), "unanswered"));
  return await (d === void 0 ? c : je(c, d)) ?? "unanswered"
}
export {
  UKr,
  L2t,
  N2t,
  BKr,
  jKr,
  F2t,
  Mvt,
  Dvt,
  Twn,
  WKr,
  zKr,
  H2t,
  o9o
};
