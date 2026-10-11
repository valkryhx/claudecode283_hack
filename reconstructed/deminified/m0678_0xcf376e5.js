// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Gm, yu } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, as } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i8e, $ye } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Lt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { ene } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { DG, GU, pMe, eHn, ML, gme, Dc, id, GP, jW, bk, lv, pw, Ti, Eh } from "B:/~BUN/root/chunk-3jyp964r.js";
import { al, pm } from "B:/~BUN/root/chunk-f1dj0k6n.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { sCe } from "B:/~BUN/root/chunk-pt7v2bpc.js";
import { wat, vat, r0, Rl } from "B:/~BUN/root/chunk-r6m7remx.js";
import { vf, WT, G4e, XL, Ep } from "B:/~BUN/root/chunk-384x2wn9.js";
import { uor } from "B:/~BUN/root/chunk-8p7bqe2p.js";
import { I9r } from "B:/~BUN/root/chunk-ckf575ct.js";
import { g0n } from "B:/~BUN/root/chunk-1sgh90j0.js";
import { BSe, Aar, xar, Par } from "B:/~BUN/root/chunk-xk341xte.js";
import { G3r } from "B:/~BUN/root/chunk-brcpfywr.js";
import { E1e } from "B:/~BUN/root/chunk-2z9hwtsh.js";
import { nOe } from "B:/~BUN/root/chunk-z7xefjfp.js";
import { H5 } from "B:/~BUN/root/chunk-ajbaqbyf.js";
import { or } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { cn } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { stat as Y, writeFile as K } from "fs/promises";
import { join as O } from "path";
var B = 600000;
function z3r(o) {
  let r = dt();
  if (r.autoUpdateListener = o, r.pendingAutoUpdateNotification !== null) o(r.pendingAutoUpdateNotification.updated, r.pendingAutoUpdateNotification.blocked, r.pendingAutoUpdateNotification.reresolved, r.pendingAutoUpdateNotification.announce), r.pendingAutoUpdateNotification = null;
  return () => {
    r.autoUpdateListener = null;
  };
}
async function F(o) {
  let r = await Dc(o),
    s = ML(),
    a = new Set();
  for (let [u, n] of Object.entries(r)) {
    if (!Ep(n.source)) continue;
    if (GU(n.source) && !wat()) continue;
    if ($ye(u, n, gme(u, s))) a.add(u.toLowerCase());
  }
  return a;
}
async function M(source, r, s, a, u) {
  let n = !1,
    failed = !1,
    commandSourceSkipped = null,
    blocked = null,
    _ = !1,
    directoryIdentityChanged = !1,
    b = !1,
    P = !1;
  for (let {
    scope: scope
  } of r) try {
    let e = await E1e(source, scope, a ?? {}, u);
    switch (e.outcome) {
      case "updated":
        n = !0, t(`Plugin autoupdate: updated ${source} from ${e.oldVersion} to ${e.newVersion}`);
        break;
      case "skipped":
        {
          if (t(`Plugin autoupdate: ${source} ${e.message}`), e.skipReason === "entry_helper_deferred") blocked = {
            type: "autoupdate-deferred-entry-helper",
            source: source,
            plugin: or(source).name,
            message: e.message
          };else if (e.blockedBy && e.blockedBy.length > 0) {
            let blockedBy = e.blockedBy.map(item => or(item).name),
              disabledPinners = e.blockedBy.filter(item => s.has(item)).map(item => or(item).name);
            blocked = {
              type: "autoupdate-blocked-by-pinner",
              source: source,
              plugin: or(source).name,
              heldAt: e.oldVersion,
              blockedBy: blockedBy,
              disabledPinners: disabledPinners
            };
          }
          break;
        }
      case "failed":
        if (_ = e.failureCode === "not_found" || e.failureCode === "not_cached", e.failureCode === "command_source_skipped") commandSourceSkipped = source;else if (e.failureCode === "entry_helper_disabled_by_policy" || e.failureCode === "entry_helper_remote_policy_unconsented" || e.failureCode === "plugin_policy_blocked" || e.failureCode === "command_source_refused" && (WT() || !G4e())) blocked = {
          type: "autoupdate-disabled-by-policy",
          source: source,
          plugin: or(source).name,
          message: e.message
        };else if (e.failureCode === "entry_helper_not_inlined") blocked = {
          type: "generic-error",
          source: source,
          plugin: or(source).name,
          error: e.message
        }, failed = !0;else if (e.failureCode !== "command_source_inactive") failed = !0;
        t(`Plugin autoupdate: failed to update ${source}: ${e.message}`, {
          level: "warn"
        });
        break;
      case "up_to_date":
        break;
    }
  } catch (error) {
    failed = !0, t(`Plugin autoupdate: error updating ${source}: ${l(error)}`, {
      level: "warn"
    });
  }
  let directoryStuck = failed && !_ && !directoryIdentityChanged && !b && !P && blocked === null && source.endsWith(`@${pm}`);
  return {
    updated: n ? source : null,
    blocked: blocked,
    failed: failed,
    directoryStuck: directoryStuck,
    directoryIdentityChanged: directoryIdentityChanged,
    commandSourceSkipped: commandSourceSkipped
  };
}
async function gJn(o, r = new Set(), {
  skipCommandSources = !1
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
      disabled: disabled
    } = await Ti(a),
    C = new Set(disabled.map(item => item.source)),
    h = await Promise.allSettled(n.map(async item => {
      let {
        marketplace: marketplace
      } = or(item);
      if (!marketplace || !o.has(marketplace.toLowerCase())) return null;
      if (r.has(item)) return null;
      let g = u.plugins[item];
      if (!g || g.length === 0) return null;
      let w = g.filter(pw);
      if (w.length === 0) return null;
      return M(item, w, C, skipCommandSources ? {
        skipCommandSources: !0
      } : void 0, a);
    })),
    updated = [],
    blocked_2 = [],
    commandSourceSkipped_2 = [],
    updateFailedCount = 0,
    directory = {
      updated: 0,
      updateFailed: 0,
      stuck: 0,
      identityChanged: 0
    };
  for (let [m, e] of h.entries()) {
    if (e.status !== "fulfilled" || e.value === null) continue;
    let g = pMe(n[m] ?? "");
    if (e.value.updated !== null) {
      if (updated.push(e.value.updated), g) directory.updated++;
    }
    if (e.value.blocked !== null) blocked_2.push(e.value.blocked);
    if (e.value.failed) {
      if (updateFailedCount++, g) directory.updateFailed++;
    }
    if (e.value.directoryStuck) directory.stuck++;
    if (e.value.directoryIdentityChanged) directory.identityChanged++;
    if (e.value.commandSourceSkipped !== null) commandSourceSkipped_2.push(e.value.commandSourceSkipped);
  }
  return {
    updated: updated,
    blocked: blocked_2,
    updateFailedCount: updateFailedCount,
    commandSourceSkipped: commandSourceSkipped_2,
    directory: directory
  };
}
async function G(o) {
  let r = {
      attemptedCount: 0,
      commandSourced: new Set(),
      updated: [],
      blocked: [],
      failedCount: 0
    },
    s = WT(),
    a = !vat();
  if (s || a) t(s ? "Plugin autoupdate: command-source refresh disabled by managed settings (still excluding command-sourced plugins from the regular pass)" : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
  try {
    let u = H() && o !== void 0 ? await lv(o) : bk(),
      n = new Map();
    for (let [pluginId, k] of Object.entries(u.plugins)) {
      let installations = (k ?? []).filter(pw),
        {
          name: name,
          marketplace: marketplace_2
        } = or(pluginId);
      if (installations.length === 0 || !name || !marketplace_2) continue;
      let m = n.get(marketplace_2) ?? [];
      m.push({
        pluginId: pluginId,
        name: name,
        installations: installations
      }), n.set(marketplace_2, m);
    }
    let f,
      C = new Set(),
      h = n.size > 0 ? await id(o) : {};
    for (let [_, k] of n) {
      let b = h[_];
      if (XL(b?.source)) {
        for (let {
          pluginId: pluginId_2,
          installations: installations_2
        } of k) if (installations_2.some(item => item.sourceCommand !== void 0)) r.commandSourced.add(pluginId_2);
        continue;
      }
      let P = await GP(_, o);
      if (!P) continue;
      for (let {
        pluginId: p,
        name: m,
        installations: installations_3
      } of k) {
        let g = P.plugins.find(item => item.name === m);
        if (!g || typeof g.source === "string" || g.source.source !== "command") continue;
        if (r.commandSourced.add(p), s || a) continue;
        if (!f) f = new Set(await nOe()), C = new Set((await Ti(o)).disabled.map(item => item.source));
        if (!f.has(p) || vf(p)) {
          t(`Plugin autoupdate: not re-resolving ${p} (disabled or blocked by policy)`);
          continue;
        }
        let w = r0(g.source),
          S = installations_3.filter(item => item.sourceCommand !== w);
        if (S.length > 0) {
          let E = S.every(item => item.sourceCommand === void 0),
            N = L(S.map(item => item.scope)).map(item => al("plugin update", p, `--scope ${item}`)).filter(item => item !== null).map(item => `\`${item}\``);
          t(`Plugin autoupdate: not re-resolving ${p}: marketplace command differs from the accepted one`, {
            level: "warn"
          }), r.blocked.push({
            type: "generic-error",
            source: p,
            plugin: m,
            error: (E ? `${cn(m, 200)}'s marketplace entry now installs it by running a command` : `${cn(m, 200)}'s marketplace entry changed the command it runs`) + ` (\`${cn(g.source.command, i8e)}${g.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${N.length > 0 ? `run ${N.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`
          });
        }
        let I = installations_3.filter(item => item.sourceCommand === w);
        if (I.length === 0) continue;
        r.attemptedCount++, t(`Plugin autoupdate: re-resolving command-sourced plugin ${p}`);
        let v = await M(p, I, C, {
          skipMarketplaceRefresh: !0
        }, o);
        if (v.updated !== null) r.updated.push(v.updated);
        if (v.blocked !== null) r.blocked.push(v.blocked);
        if (v.failed) r.failedCount++;
      }
    }
  } catch (error) {
    t(`Plugin autoupdate: command-source refresh failed: ${l(error)}`, {
      level: "warn"
    });
  }
  return r;
}
function fbn(o, r, s = [], {
  announce = !0
} = {}) {
  if (o.length === 0 && r.length === 0) return;
  let u = dt();
  if (u.autoUpdateListener) u.autoUpdateListener(o, r, s, announce);else {
    let pendingAutoUpdateNotification = u.pendingAutoUpdateNotification;
    u.pendingAutoUpdateNotification = {
      updated: L([...(pendingAutoUpdateNotification?.updated ?? []), ...o]),
      blocked: [...(pendingAutoUpdateNotification?.blocked ?? []), ...r],
      reresolved: L([...(pendingAutoUpdateNotification?.reresolved ?? []), ...s]),
      announce: (pendingAutoUpdateNotification?.announce ?? !1) || announce
    };
  }
}
function j() {
  return {
    attemptedCount: 0,
    commandSourced: new Set(),
    updated: [],
    blocked: [],
    failedCount: 0
  };
}
function hJn(o) {
  let r = dt();
  return r.commandSourceReresolve ??= (async () => {
    if (Lt()) return j();
    let s = await G(o);
    if (s.attemptedCount > 0) sCe();
    try {
      fbn(s.updated, s.blocked, s.updated);
    } catch (error) {
      d(error);
    }
    return s;
  })(), r.commandSourceReresolve;
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
        });
      };
    if (ene()) {
      t("Plugin autoupdate: skipped (auto-updater disabled)"), n();
      return;
    }
    try {
      let f = await F(o);
      if (f.size === 0) {
        n();
        return;
      }
      let C = Math.floor(Math.random() * B);
      await Q(C, void 0, {
        unref: !0
      }), s = Date.now();
      let h = await Promise.allSettled(Array.from(f).map(async item => {
        try {
          return await jW(item, o, void 0, {
            isBackground: !0
          }), "refreshed";
        } catch (error) {
          if (error instanceof Rl) return t(`Plugin autoupdate: marketplace ${item} not refreshed (managed policy): ${l(error)}`), "policy";
          return t(`Plugin autoupdate: failed to refresh marketplace ${item}: ${l(error)}`, {
            level: "warn"
          }), "failed";
        }
      }));
      a.marketplace_refresh_failed = U(h, e => e.status === "fulfilled" && e.value === "failed"), a.marketplace_refresh_policy_skipped = U(h, e => e.status === "fulfilled" && e.value === "policy"), a.marketplaces_refreshed = f.size - a.marketplace_refresh_failed - a.marketplace_refresh_policy_skipped, t("Plugin autoupdate: checking installed plugins");
      let {
        updated: updated_2,
        blocked: blocked_3,
        updateFailedCount: updateFailedCount_2,
        directory: directory_2
      } = await gJn(f, r.commandSourced, {
        skipCommandSources: !0
      }, o);
      if (a.plugins_updated = updated_2.length, a.plugin_update_failed = updateFailedCount_2, a.plugins_blocked_by_pin = U(blocked_3, e => e.type === "autoupdate-blocked-by-pinner"), a.plugins_helper_deferred = U(blocked_3, e => e.type === "autoupdate-deferred-entry-helper"), a.plugins_policy_blocked = U(blocked_3, e => e.type === "autoupdate-disabled-by-policy"), updated_2.length > 0) Eh("autoupdate dep-resolution");
      let {
          errors: errors
        } = await Ti(o),
        m = await H5(errors.filter(item => {
          if (item.type !== "dependency-unsatisfied") return !1;
          let marketplace_3 = or(item.source).marketplace;
          return marketplace_3 !== void 0 && f.has(marketplace_3.toLowerCase());
        }), o);
      if (m.installed.length > 0) t(`Plugin autoupdate: resolved ${m.installed.length} missing plugin dependencies: ${m.installed.join(", ")}`), updated_2.push(...m.installed);
      fbn(updated_2, blocked_3), i("tengu_plugin_autoupdate_pass", {
        outcome: a.marketplace_refresh_failed > 0 || a.plugin_update_failed > 0 ? y("partial") : y("ok"),
        ...a,
        ...u,
        duration_ms: Date.now() - s
      });
    } catch (error) {
      t(`Plugin autoupdate: failed: ${l(error)}`, {
        level: "error"
      }), i("tengu_plugin_autoupdate_pass", {
        outcome: y("failed"),
        error_kind: c(DG(error)),
        ...a,
        ...u,
        duration_ms: Date.now() - s
      });
    }
  })();
}
var D = 86400000,
  yJn = 600000,
  T1o = 5000,
  C1o = 3600000;
async function R1o(o) {
  if (H() && o !== void 0) {
    let r = await o.statMeta(Ae.state("last-cleanup"));
    return r.ok && Date.now() - r.value.mtimeMs < D;
  }
  try {
    let r = await Y(O(Se(), ".last-cleanup"));
    return Date.now() - r.mtimeMs < D;
  } catch {
    return !1;
  }
}
async function _Jn(o, r) {
  if (!o.backgroundHousekeeping.claim()) return;
  if (uor(o), I9r(o), T(r), yu()) G3r(r), eHn(r), setInterval(eHn, C1o, r).unref();
  let s = "sentinel-unchecked";
  async function a() {
    if (yu() && Gm() > Date.now() - 60000) {
      setTimeout(u, yJn).unref();
      return;
    }
    if (s !== "done") {
      if (s === "sentinel-unchecked") {
        if (s = "sweep-due", await R1o(r)) {
          setTimeout(u, yJn).unref();
          return;
        }
      }
      if (s = "done", await Par(r), H() && r !== void 0) {
        await xar(Se(), o.backgroundHousekeeping), await Aar(r);
        let n = await r.write(Ae.state("last-cleanup"), new Date().toISOString(), {
          publishDiscipline: "inPlace"
        });
        if (!n.ok) t(`.last-cleanup write failed: ${n.error.code}`, {
          level: "error"
        });
      } else await K(O(Se(), ".last-cleanup"), new Date().toISOString()).catch(n => as(n) ? t(`.last-cleanup write failed: ${n.code} ${n.message}`, {
        level: "error"
      }) : d(n));
    }
    if (yu() && Gm() > Date.now() - 60000) {
      setTimeout(u, yJn).unref();
      return;
    }
    await g0n();
  }
  function u() {
    return a().catch(n => BSe(n) ? t(`background housekeeping failed: ${n.message}`, {
      level: "error"
    }) : d(n));
  }
  setTimeout(u, T1o).unref();
}
export { z3r, gJn, fbn, hJn, yJn, T1o, C1o, R1o, _Jn };