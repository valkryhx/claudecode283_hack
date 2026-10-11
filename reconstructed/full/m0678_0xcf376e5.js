// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Gm,
  yu
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  l,
  as
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i8e,
  $ye
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  Lt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  ene
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  DG,
  GU,
  pMe,
  eHn,
  ML,
  gme,
  Dc,
  id,
  GP,
  jW,
  bk,
  lv,
  pw,
  Ti,
  Eh
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  al,
  pm
} from "B:/~BUN/root/chunk-f1dj0k6n.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  sCe
} from "B:/~BUN/root/chunk-pt7v2bpc.js";
import {
  wat,
  vat,
  r0,
  Rl
} from "B:/~BUN/root/chunk-r6m7remx.js";
import {
  vf,
  WT,
  G4e,
  XL,
  Ep
} from "B:/~BUN/root/chunk-384x2wn9.js";
import {
  uor
} from "B:/~BUN/root/chunk-8p7bqe2p.js";
import {
  I9r
} from "B:/~BUN/root/chunk-ckf575ct.js";
import {
  g0n
} from "B:/~BUN/root/chunk-1sgh90j0.js";
import {
  BSe,
  Aar,
  xar,
  Par
} from "B:/~BUN/root/chunk-xk341xte.js";
import {
  G3r
} from "B:/~BUN/root/chunk-brcpfywr.js";
import {
  E1e
} from "B:/~BUN/root/chunk-2z9hwtsh.js";
import {
  nOe
} from "B:/~BUN/root/chunk-z7xefjfp.js";
import {
  H5
} from "B:/~BUN/root/chunk-ajbaqbyf.js";
import {
  or
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  cn
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  stat as Y,
  writeFile as K
} from "fs/promises";
import {
  join as O
} from "path";
var B = 600000;

function z3r(o) {
  let r = dt();
  if (r.autoUpdateListener = o, r.pendingAutoUpdateNotification !== null) o(r.pendingAutoUpdateNotification.updated, r.pendingAutoUpdateNotification.blocked, r.pendingAutoUpdateNotification.reresolved, r.pendingAutoUpdateNotification.announce), r.pendingAutoUpdateNotification = null;
  return () => {
    r.autoUpdateListener = null
  }
}
async function F(o) {
  let r = await Dc(o),
    s = ML(),
    a = new Set;
  for (let [u, n] of Object.entries(r)) {
    if (!Ep(n.source)) continue;
    if (GU(n.source) && !wat()) continue;
    if ($ye(u, n, gme(u, s))) a.add(u.toLowerCase())
  }
  return a
}
async function M(o, r, s, a, u) {
  let n = !1,
    f = !1,
    C = null,
    h = null,
    _ = !1,
    k = !1,
    b = !1,
    P = !1;
  for (let {
      scope: m
    }
    of r) try {
    let e = await E1e(o, m, a ?? {}, u);
    switch (e.outcome) {
      case "updated":
        n = !0, t(`Plugin autoupdate: updated ${o} from ${e.oldVersion} to ${e.newVersion}`);
        break;
      case "skipped": {
        if (t(`Plugin autoupdate: ${o} ${e.message}`), e.skipReason === "entry_helper_deferred") h = {
          type: "autoupdate-deferred-entry-helper",
          source: o,
          plugin: or(o).name,
          message: e.message
        };
        else if (e.blockedBy && e.blockedBy.length > 0) {
          let g = e.blockedBy.map((S) => or(S).name),
            w = e.blockedBy.filter((S) => s.has(S)).map((S) => or(S).name);
          h = {
            type: "autoupdate-blocked-by-pinner",
            source: o,
            plugin: or(o).name,
            heldAt: e.oldVersion,
            blockedBy: g,
            disabledPinners: w
          }
        }
        break
      }
      case "failed":
        if (_ = e.failureCode === "not_found" || e.failureCode === "not_cached", e.failureCode === "command_source_skipped") C = o;
        else if (e.failureCode === "entry_helper_disabled_by_policy" || e.failureCode === "entry_helper_remote_policy_unconsented" || e.failureCode === "plugin_policy_blocked" || e.failureCode === "command_source_refused" && (WT() || !G4e())) h = {
          type: "autoupdate-disabled-by-policy",
          source: o,
          plugin: or(o).name,
          message: e.message
        };
        else if (e.failureCode === "entry_helper_not_inlined") h = {
          type: "generic-error",
          source: o,
          plugin: or(o).name,
          error: e.message
        }, f = !0;
        else if (e.failureCode !== "command_source_inactive") f = !0;
        t(`Plugin autoupdate: failed to update ${o}: ${e.message}`, {
          level: "warn"
        });
        break;
      case "up_to_date":
        break
    }
  } catch (e) {
    f = !0, t(`Plugin autoupdate: error updating ${o}: ${l(e)}`, {
      level: "warn"
    })
  }
  let p = f && !_ && !k && !b && !P && h === null && o.endsWith(`@${pm}`);
  return {
    updated: n ? o : null,
    blocked: h,
    failed: f,
    directoryStuck: p,
    directoryIdentityChanged: k,
    commandSourceSkipped: C
  }
}
async function gJn(o, r = new Set, {
  skipCommandSources: s = !1
} = {}, a) {
  let u = H() && a !== void 0 ? await lv(a) : bk(),
    n = Object.keys(u.plugins);
  if (n.length === 0) return {
    updated: [],
    blocked: [],
    updateFailedCount: 0,
    commandSourceSkipped: [],
    directory: {
      updated: 0,
      updateFailed: 0,
      stuck: 0,
      identityChanged: 0
    }
  };
  let {
    disabled: f
  } = await Ti(a), C = new Set(f.map((m) => m.source)), h = await Promise.allSettled(n.map(async (m) => {
    let {
      marketplace: e
    } = or(m);
    if (!e || !o.has(e.toLowerCase())) return null;
    if (r.has(m)) return null;
    let g = u.plugins[m];
    if (!g || g.length === 0) return null;
    let w = g.filter(pw);
    if (w.length === 0) return null;
    return M(m, w, C, s ? {
      skipCommandSources: !0
    } : void 0, a)
  })), _ = [], k = [], b = [], P = 0, p = {
    updated: 0,
    updateFailed: 0,
    stuck: 0,
    identityChanged: 0
  };
  for (let [m, e] of h.entries()) {
    if (e.status !== "fulfilled" || e.value === null) continue;
    let g = pMe(n[m] ?? "");
    if (e.value.updated !== null) {
      if (_.push(e.value.updated), g) p.updated++
    }
    if (e.value.blocked !== null) k.push(e.value.blocked);
    if (e.value.failed) {
      if (P++, g) p.updateFailed++
    }
    if (e.value.directoryStuck) p.stuck++;
    if (e.value.directoryIdentityChanged) p.identityChanged++;
    if (e.value.commandSourceSkipped !== null) b.push(e.value.commandSourceSkipped)
  }
  return {
    updated: _,
    blocked: k,
    updateFailedCount: P,
    commandSourceSkipped: b,
    directory: p
  }
}
async function G(o) {
  let r = {
      attemptedCount: 0,
      commandSourced: new Set,
      updated: [],
      blocked: [],
      failedCount: 0
    },
    s = WT(),
    a = !vat();
  if (s || a) t(s ? "Plugin autoupdate: command-source refresh disabled by managed settings (still excluding command-sourced plugins from the regular pass)" : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
  try {
    let u = H() && o !== void 0 ? await lv(o) : bk(),
      n = new Map;
    for (let [_, k] of Object.entries(u.plugins)) {
      let b = (k ?? []).filter(pw),
        {
          name: P,
          marketplace: p
        } = or(_);
      if (b.length === 0 || !P || !p) continue;
      let m = n.get(p) ?? [];
      m.push({
        pluginId: _,
        name: P,
        installations: b
      }), n.set(p, m)
    }
    let f, C = new Set,
      h = n.size > 0 ? await id(o) : {};
    for (let [_, k] of n) {
      let b = h[_];
      if (XL(b?.source)) {
        for (let {
            pluginId: p,
            installations: m
          }
          of k)
          if (m.some((e) => e.sourceCommand !== void 0)) r.commandSourced.add(p);
        continue
      }
      let P = await GP(_, o);
      if (!P) continue;
      for (let {
          pluginId: p,
          name: m,
          installations: e
        }
        of k) {
        let g = P.plugins.find((E) => E.name === m);
        if (!g || typeof g.source === "string" || g.source.source !== "command") continue;
        if (r.commandSourced.add(p), s || a) continue;
        if (!f) f = new Set(await nOe()), C = new Set((await Ti(o)).disabled.map((E) => E.source));
        if (!f.has(p) || vf(p)) {
          t(`Plugin autoupdate: not re-resolving ${p} (disabled or blocked by policy)`);
          continue
        }
        let w = r0(g.source),
          S = e.filter((E) => E.sourceCommand !== w);
        if (S.length > 0) {
          let E = S.every((R) => R.sourceCommand === void 0),
            N = L(S.map((R) => R.scope)).map((R) => al("plugin update", p, `--scope ${R}`)).filter((R) => R !== null).map((R) => `\`${R}\``);
          t(`Plugin autoupdate: not re-resolving ${p}: marketplace command differs from the accepted one`, {
            level: "warn"
          }), r.blocked.push({
            type: "generic-error",
            source: p,
            plugin: m,
            error: (E ? `${cn(m,200)}'s marketplace entry now installs it by running a command` : `${cn(m,200)}'s marketplace entry changed the command it runs`) + ` (\`${cn(g.source.command,i8e)}${g.source.mode==="link"?" [mode: link]":""}\`). It was not re-run in the background; ${N.length>0?`run ${N.join(" and ")}`:"an explicit per-scope plugin update is needed"} to review and accept it.`
          })
        }
        let I = e.filter((E) => E.sourceCommand === w);
        if (I.length === 0) continue;
        r.attemptedCount++, t(`Plugin autoupdate: re-resolving command-sourced plugin ${p}`);
        let v = await M(p, I, C, {
          skipMarketplaceRefresh: !0
        }, o);
        if (v.updated !== null) r.updated.push(v.updated);
        if (v.blocked !== null) r.blocked.push(v.blocked);
        if (v.failed) r.failedCount++
      }
    }
  } catch (u) {
    t(`Plugin autoupdate: command-source refresh failed: ${l(u)}`, {
      level: "warn"
    })
  }
  return r
}

function fbn(o, r, s = [], {
  announce: a = !0
} = {}) {
  if (o.length === 0 && r.length === 0) return;
  let u = dt();
  if (u.autoUpdateListener) u.autoUpdateListener(o, r, s, a);
  else {
    let n = u.pendingAutoUpdateNotification;
    u.pendingAutoUpdateNotification = {
      updated: L([...n?.updated ?? [], ...o]),
      blocked: [...n?.blocked ?? [], ...r],
      reresolved: L([...n?.reresolved ?? [], ...s]),
      announce: (n?.announce ?? !1) || a
    }
  }
}

function j() {
  return {
    attemptedCount: 0,
    commandSourced: new Set,
    updated: [],
    blocked: [],
    failedCount: 0
  }
}

function hJn(o) {
  let r = dt();
  return r.commandSourceReresolve ??= (async () => {
    if (Lt()) return j();
    let s = await G(o);
    if (s.attemptedCount > 0) sCe();
    try {
      fbn(s.updated, s.blocked, s.updated)
    } catch (a) {
      d(a)
    }
    return s
  })(), r.commandSourceReresolve
}

function T(o) {
  return (async () => {
    let r = await hJn(o),
      s = Date.now(),
      a = {
        marketplaces_refreshed: 0,
        marketplace_refresh_failed: 0,
        marketplace_refresh_policy_skipped: 0,
        plugins_updated: 0,
        plugin_update_failed: 0,
        plugins_blocked_by_pin: 0,
        plugins_helper_deferred: 0,
        plugins_policy_blocked: 0,
        command_plugins_refreshed: r.attemptedCount,
        command_plugin_refresh_failed: r.failedCount
      },
      u = {},
      n = () => {
        if (r.attemptedCount > 0 || r.failedCount > 0) i("tengu_plugin_autoupdate_pass", {
          outcome: y("skipped"),
          ...a,
          ...u,
          duration_ms: Date.now() - s
        })
      };
    if (ene()) {
      t("Plugin autoupdate: skipped (auto-updater disabled)"), n();
      return
    }
    try {
      let f = await F(o);
      if (f.size === 0) {
        n();
        return
      }
      let C = Math.floor(Math.random() * B);
      await Q(C, void 0, {
        unref: !0
      }), s = Date.now();
      let h = await Promise.allSettled(Array.from(f).map(async (e) => {
        try {
          return await jW(e, o, void 0, {
            isBackground: !0
          }), "refreshed"
        } catch (g) {
          if (g instanceof Rl) return t(`Plugin autoupdate: marketplace ${e} not refreshed (managed policy): ${l(g)}`), "policy";
          return t(`Plugin autoupdate: failed to refresh marketplace ${e}: ${l(g)}`, {
            level: "warn"
          }), "failed"
        }
      }));
      a.marketplace_refresh_failed = U(h, (e) => e.status === "fulfilled" && e.value === "failed"), a.marketplace_refresh_policy_skipped = U(h, (e) => e.status === "fulfilled" && e.value === "policy"), a.marketplaces_refreshed = f.size - a.marketplace_refresh_failed - a.marketplace_refresh_policy_skipped, t("Plugin autoupdate: checking installed plugins");
      let {
        updated: _,
        blocked: k,
        updateFailedCount: b,
        directory: P
      } = await gJn(f, r.commandSourced, {
        skipCommandSources: !0
      }, o);
      if (a.plugins_updated = _.length, a.plugin_update_failed = b, a.plugins_blocked_by_pin = U(k, (e) => e.type === "autoupdate-blocked-by-pinner"), a.plugins_helper_deferred = U(k, (e) => e.type === "autoupdate-deferred-entry-helper"), a.plugins_policy_blocked = U(k, (e) => e.type === "autoupdate-disabled-by-policy"), _.length > 0) Eh("autoupdate dep-resolution");
      let {
        errors: p
      } = await Ti(o), m = await H5(p.filter((e) => {
        if (e.type !== "dependency-unsatisfied") return !1;
        let g = or(e.source).marketplace;
        return g !== void 0 && f.has(g.toLowerCase())
      }), o);
      if (m.installed.length > 0) t(`Plugin autoupdate: resolved ${m.installed.length} missing plugin dependencies: ${m.installed.join(", ")}`), _.push(...m.installed);
      fbn(_, k), i("tengu_plugin_autoupdate_pass", {
        outcome: a.marketplace_refresh_failed > 0 || a.plugin_update_failed > 0 ? y("partial") : y("ok"),
        ...a,
        ...u,
        duration_ms: Date.now() - s
      })
    } catch (f) {
      t(`Plugin autoupdate: failed: ${l(f)}`, {
        level: "error"
      }), i("tengu_plugin_autoupdate_pass", {
        outcome: y("failed"),
        error_kind: c(DG(f)),
        ...a,
        ...u,
        duration_ms: Date.now() - s
      })
    }
  })()
}
var D = 86400000,
  yJn = 600000,
  T1o = 5000,
  C1o = 3600000;
async function R1o(o) {
  if (H() && o !== void 0) {
    let r = await o.statMeta(Ae.state("last-cleanup"));
    return r.ok && Date.now() - r.value.mtimeMs < D
  }
  try {
    let r = await Y(O(Se(), ".last-cleanup"));
    return Date.now() - r.mtimeMs < D
  } catch {
    return !1
  }
}
async function _Jn(o, r) {
  if (!o.backgroundHousekeeping.claim()) return;
  if (uor(o), I9r(o), T(r), yu()) G3r(r), eHn(r), setInterval(eHn, C1o, r).unref();
  let s = "sentinel-unchecked";
  async function a() {
    if (yu() && Gm() > Date.now() - 60000) {
      setTimeout(u, yJn).unref();
      return
    }
    if (s !== "done") {
      if (s === "sentinel-unchecked") {
        if (s = "sweep-due", await R1o(r)) {
          setTimeout(u, yJn).unref();
          return
        }
      }
      if (s = "done", await Par(r), H() && r !== void 0) {
        await xar(Se(), o.backgroundHousekeeping), await Aar(r);
        let n = await r.write(Ae.state("last-cleanup"), new Date().toISOString(), {
          publishDiscipline: "inPlace"
        });
        if (!n.ok) t(`.last-cleanup write failed: ${n.error.code}`, {
          level: "error"
        })
      } else await K(O(Se(), ".last-cleanup"), new Date().toISOString()).catch((n) => as(n) ? t(`.last-cleanup write failed: ${n.code} ${n.message}`, {
        level: "error"
      }) : d(n))
    }
    if (yu() && Gm() > Date.now() - 60000) {
      setTimeout(u, yJn).unref();
      return
    }
    await g0n()
  }

  function u() {
    return a().catch((n) => BSe(n) ? t(`background housekeeping failed: ${n.message}`, {
      level: "error"
    }) : d(n))
  }
  setTimeout(u, T1o).unref()
}
export {
  z3r,
  gJn,
  fbn,
  hJn,
  yJn,
  T1o,
  C1o,
  R1o,
  _Jn
};
