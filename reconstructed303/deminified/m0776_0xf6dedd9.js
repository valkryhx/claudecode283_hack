// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { at, ii } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { DWo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { tt, oht, EEe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { RUo } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { xs } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me, ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { fXt, Zh, KP, nx } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Bj } from "B:/~BUN/root/chunk-0n2201tc.js";
import { Ug, CG, YGn, s9e, i1e, don, du } from "B:/~BUN/root/chunk-c44qc88s.js";
import { Ccr, Acr, xcr, dFe, RCt, IZr, ost, Mcr, oAe } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { dot } from "B:/~BUN/root/chunk-w2w7b0v5.js";
import { $E } from "B:/~BUN/root/chunk-410t5g3b.js";
import { resolve as B } from "path";
var UKr = new at(() => Me());
function L2t(e, n, o, d, u) {
  let settings = ut();
  t(`Settings changed from ${n}, updating app state`), EEe();
  let f = CG();
  Bj({
    userLayer: "retain"
  }), nx();
  let a = !1;
  if (o(m => {
    let toolPermissionContext = fXt(m.toolPermissionContext, f);
    toolPermissionContext = jKr(toolPermissionContext, m.settings.permissions?.additionalDirectories, s9e(), n, u?.trustFlip === !0, u?.prevCwd, d);
    let r = BKr(toolPermissionContext, f);
    if (toolPermissionContext = r.context, a = r.exitedAutoMode, toolPermissionContext.blockReadsOutsideWorkingDirectories !== !0 && i1e()) toolPermissionContext = {
      ...toolPermissionContext,
      blockReadsOutsideWorkingDirectories: !0
    }, don();
    let awaySummaryEnabled = dot();
    return {
      ...m,
      settings: settings,
      toolPermissionContext: toolPermissionContext,
      ...(m.awaySummaryEnabled !== awaySummaryEnabled && {
        awaySummaryEnabled: awaySummaryEnabled
      })
    };
  }), a && e !== void 0) UKr.of(e).emit();
}
function N2t(e) {
  if (RUo()) e();
}
function BKr(e, n) {
  let o = e;
  if (o.isBypassPermissionsModeAvailable && $E()) o = IZr(o);
  if (o.strippedDangerousRules !== void 0) {
    let u = new Set(xs),
      c = !Ug(),
      strippedDangerousRules = {};
    for (let [a, m] of Object.entries(o.strippedDangerousRules)) if (m && (c || a === "command") && !u.has(a)) strippedDangerousRules[a] = [...m];
    o = {
      ...o,
      strippedDangerousRules: strippedDangerousRules
    };
  }
  let exitedAutoMode = ost(o) && RCt();
  if (exitedAutoMode) o = Mcr(o);
  return {
    context: oAe(o),
    exitedAutoMode: exitedAutoMode
  };
}
function jKr(e, n, o, d, u = !1, c, f) {
  let a = new Set((n ?? []).flatMap(item => C(item, c))),
    m = new Set((o ?? []).flatMap(item => C(item))),
    additionalWorkingDirectories = e.additionalWorkingDirectories,
    directories = [...a].filter(item => !m.has(item) && !D(additionalWorkingDirectories.get(item)?.source)),
    g = [...m].filter(item => (!a.has(item) || u && !additionalWorkingDirectories.has(item)) && !D(additionalWorkingDirectories.get(item)?.source)),
    P = ii(),
    {
      declared: declared,
      repoOnly: repoOnly
    } = YGn(i => [...(P === null ? [] : C(i, P)), ...C(i)], f),
    b = i => repoOnly.has(i) ? "projectSettings" : "localSettings",
    A = [...additionalWorkingDirectories.entries()].filter(([i, p]) => !D(p.source) && !directories.includes(i) && declared.has(i) && p.source !== b(i));
  if (directories.length === 0 && g.length === 0 && A.length === 0 && d !== "flagSettings") return e;
  let y = e;
  if (A.length > 0) {
    let additionalWorkingDirectories_2 = new Map(additionalWorkingDirectories);
    for (let [p, h] of A) additionalWorkingDirectories_2.set(p, {
      ...h,
      source: b(p)
    });
    y = {
      ...y,
      additionalWorkingDirectories: additionalWorkingDirectories_2
    };
  }
  if (d === "flagSettings") {
    let i = new Set((me("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap(item => C(item))),
      trustedNetworkDirectories = new Map(y.trustedNetworkDirectories ?? []),
      h = !1;
    for (let S of [...trustedNetworkDirectories.keys()]) if (!i.has(S) && additionalWorkingDirectories.get(S)?.source !== "cliArg") {
      for (let x of trustedNetworkDirectories.get(S) ?? []) if (x !== S) directories.push(x);
      trustedNetworkDirectories.delete(S), h = !0;
    }
    if (xcr()) {
      for (let S of i) if (!trustedNetworkDirectories.has(S)) {
        if (DWo(S)) continue;
        let x = Ccr(S);
        if (x.length > 0) {
          trustedNetworkDirectories.set(S, x);
          for (let M of x) if (M !== S) g.push(M);
          h = !0;
        }
      }
    }
    if (h) y = {
      ...y,
      trustedNetworkDirectories: trustedNetworkDirectories
    };
  }
  if (directories.length > 0) y = du(y, {
    type: "removeDirectories",
    directories: directories,
    destination: "localSettings"
  });
  if (g.length > 0) for (let destination of ["projectSettings", "localSettings"]) {
    let directories_2 = g.filter(item => b(item) === destination);
    if (directories_2.length > 0) y = du(y, {
      type: "addDirectories",
      directories: directories_2,
      destination: destination
    });
  }
  return y;
}
function F2t(e, n) {
  let o = new Set(s9e().flatMap(item => C(item))),
    additionalWorkingDirectories_3 = e.additionalWorkingDirectories,
    directories_3 = n.filter(item => {
      let f = additionalWorkingDirectories_3.get(item);
      return f !== void 0 && !o.has(item) && !D(f.source);
    });
  if (directories_3.length === 0) return e;
  return du(e, {
    type: "removeDirectories",
    directories: directories_3,
    destination: "localSettings"
  });
}
function D(e) {
  return e === "cliArg" || e === "command" || e === "session";
}
function E(e, n) {
  return B(it(e, n));
}
function C(e, n) {
  try {
    return [E(e, n)];
  } catch {
    return [];
  }
}
class k {
  #e = !1;
  #o = !1;
  get autoModeCheckRan() {
    return this.#e;
  }
  get isLaunchRun() {
    return !this.#o;
  }
  claimAutoModeCheck() {
    if (this.#e) return !1;
    return this.#e = !0, !0;
  }
  rearmAutoModeCheck() {
    this.#e = !1, this.#o = !0;
  }
  reset() {
    this.#e = !1, this.#o = !1;
  }
}
var w = new z(() => new k());
function Mvt(text) {
  return {
    key: "auto-mode-gate-notification",
    kind: "warning",
    text: text,
    color: "warning",
    priority: "high"
  };
}
async function Dvt(e, n, o, d, u) {
  let c = w.of(e);
  if (!c.claimAutoModeCheck()) return;
  let {
    updateContext: updateContext,
    notification: notification
  } = await dFe(n, d, c.isLaunchRun);
  if (o(m => {
    let toolPermissionContext_2 = updateContext(m.toolPermissionContext),
      r = toolPermissionContext_2 === m.toolPermissionContext ? m : {
        ...m,
        toolPermissionContext: toolPermissionContext_2
      };
    if (!notification || u) return r;
    return {
      ...r,
      notifications: {
        ...r.notifications,
        queue: [...r.notifications.queue, Mvt(notification)]
      }
    };
  }), notification && u) u(Mvt(notification));
}
function Twn(e) {
  w.of(e).rearmAutoModeCheck();
}
function WKr(e, n) {
  return (e.isAutoModeAvailable === !1 || Boolean(n) || oht(tt())) && Zh();
}
function zKr(e, n, o, d) {
  return R(e, n, o, d, !1);
}
function H2t(e, n, o) {
  return R(e, n, o, void 0, !0);
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
        ok: !1,
        error: "Cannot set permission mode to auto: auto mode availability is not known yet \xB7 ask again",
        code: "auto_mode_unavailable"
      };
  }
}
async function R(e, n, o, d, u) {
  if (!WKr(e, o) || u && ost(e)) return "not-due";
  let c = dFe(e, o).then(({
    updateContext: updateContext_2,
    canEnterAuto: a,
    refusedForSettingsAlone: refusedForSettingsAlone
  }) => {
    let s = !1;
    if (!refusedForSettingsAlone) n(r => {
      let toolPermissionContext_3 = r.toolPermissionContext;
      if (!a) {
        if (u && ost(toolPermissionContext_3)) return r;
        let toolPermissionContext_4 = updateContext_2(toolPermissionContext_3);
        return toolPermissionContext_4 === toolPermissionContext_3 ? r : {
          ...r,
          toolPermissionContext: toolPermissionContext_4
        };
      }
      if (s = Boolean(r.fastMode) && !o, toolPermissionContext_3.isAutoModeAvailable !== !1 || !Zh() || Boolean(r.fastMode) !== Boolean(o)) return r;
      return {
        ...r,
        toolPermissionContext: {
          ...toolPermissionContext_3,
          isAutoModeAvailable: a,
          canAutoClassifierRun: a
        }
      };
    });
    if (!a) return "refused";
    return s ? "unanswered" : "allowed";
  }).catch(f => (l(H(f)), "unanswered"));
  return (await (d === void 0 ? c : je(c, d))) ?? "unanswered";
}
export { UKr, L2t, N2t, BKr, jKr, F2t, Mvt, Dvt, Twn, WKr, zKr, H2t, o9o };