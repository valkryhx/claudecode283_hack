// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, L, nf, kp, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, Ts } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { R_t, y0e, ll, hn, Cn } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { Tt } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { Cle } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { J0t } from "B:/~BUN/root/chunk-8gzvb73z.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Qf, gO, jft, Ij, zc } from "B:/~BUN/root/chunk-472kxa0t.js";
import { S1e } from "B:/~BUN/root/chunk-cvj1wxdh.js";
import { lq, Yz, rH, Rxe, ic, nd, Mk, Rq, Qm, Ku, OZ, Ys, My, NSr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { tDt, _H, Yl, oK } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { r5e } from "B:/~BUN/root/chunk-r1z1wgpe.js";
import { U6 } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { qZ, F3e } from "B:/~BUN/root/chunk-qegjq8ky.js";
import { X4r } from "B:/~BUN/root/chunk-ztvfde18.js";
import { Y5o } from "B:/~BUN/root/chunk-4anmfmsn.js";
import { zfr } from "B:/~BUN/root/chunk-trktrhyg.js";
import { Tbe, qeo, Keo, Yeo } from "B:/~BUN/root/chunk-6h72a23h.js";
import { N4o } from "B:/~BUN/root/chunk-8qppfdcw.js";
import { ctt } from "B:/~BUN/root/chunk-8svw5dn3.js";
import { boe } from "B:/~BUN/root/chunk-zayssx44.js";
import { v_ } from "B:/~BUN/root/chunk-y424etr5.js";
import { stat as H, writeFile as G } from "fs/promises";
import { join as O } from "path";
var I = 600000;
function L4o(n) {
  let o = Ne();
  if (o.autoUpdateListener = n, o.pendingAutoUpdateNotification !== null) n(o.pendingAutoUpdateNotification.updated, o.pendingAutoUpdateNotification.blocked, o.pendingAutoUpdateNotification.reresolved, o.pendingAutoUpdateNotification.announce), o.pendingAutoUpdateNotification = null;
  return () => {
    o.autoUpdateListener = null;
  };
}
async function B(n) {
  let o = await ic(n),
    p = rH(),
    r = new Set();
  for (let [s, a] of Object.entries(o)) {
    if (!zc(a.source)) continue;
    if (lq(a.source) && !J0t()) continue;
    if (y0e(s, a, Rxe(s, p))) r.add(s.toLowerCase());
  }
  if (!r.has(hn) && !Object.hasOwn(o, hn) && Yz() && zc({
    source: "pluginDirectory"
  })) {
    if (Object.keys((W() && n !== void 0 ? await Ku(n) : Qm()).plugins).some(item => item.endsWith(`@${hn}`))) r.add(hn);
  }
  return r;
}
async function D(source, o, p, r, s) {
  let a = !1,
    failed = !1,
    commandSourceSkipped = null,
    blocked = null,
    _ = !1,
    directoryIdentityChanged = !1,
    S = !1,
    y = !1;
  for (let {
    scope: scope
  } of o) try {
    let e = await ctt(source, scope, r ?? {}, s);
    switch (e.outcome) {
      case "updated":
        a = !0, t(`Plugin autoupdate: updated ${source} from ${e.oldVersion} to ${e.newVersion}`);
        break;
      case "skipped":
        {
          if (t(`Plugin autoupdate: ${source} ${e.message}`), e.skipReason === "entry_helper_deferred") blocked = {
            type: "autoupdate-deferred-entry-helper",
            source: source,
            plugin: Cn(source).name,
            message: e.message
          };else if (e.blockedBy && e.blockedBy.length > 0) {
            let blockedBy = e.blockedBy.map(item => Cn(item).name),
              disabledPinners = e.blockedBy.filter(item => p.has(item)).map(item => Cn(item).name);
            blocked = {
              type: "autoupdate-blocked-by-pinner",
              source: source,
              plugin: Cn(source).name,
              heldAt: e.oldVersion,
              blockedBy: blockedBy,
              disabledPinners: disabledPinners
            };
          }
          break;
        }
      case "failed":
        if (_ = e.failureCode === "not_found" || e.failureCode === "not_cached", directoryIdentityChanged ||= e.failureCode === "directory_identity_changed", S ||= e.failureCode === "directory_listing_not_installable", y ||= e.failureCode === "directory_unavailable" || e.failureCode === "marketplace_policy_blocked" || e.failureCode === "directory_binding_unreadable", e.failureCode === "command_source_skipped") commandSourceSkipped = source;else if (e.failureCode === "entry_helper_disabled_by_policy" || e.failureCode === "entry_helper_remote_policy_unconsented" || e.failureCode === "entry_helper_organization_unanswered" || e.failureCode === "plugin_policy_blocked" || e.failureCode === "command_source_refused" && (gO() || !jft())) blocked = {
          type: "autoupdate-disabled-by-policy",
          source: source,
          plugin: Cn(source).name,
          message: e.message
        };else if (e.failureCode === "entry_helper_not_inlined") blocked = {
          type: "generic-error",
          source: source,
          plugin: Cn(source).name,
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
    failed = !0, t(`Plugin autoupdate: error updating ${source}: ${d(error)}`, {
      level: "warn"
    });
  }
  let directoryStuck = failed && !_ && !directoryIdentityChanged && !S && !y && blocked === null && source.endsWith(`@${hn}`);
  if (directoryStuck) blocked = {
    type: "generic-error",
    source: source,
    plugin: Cn(source).name,
    error: 'The Anthropic Directory lists a different commit, but the background update failed, so this plugin is still on the old one. Choose "Update now" in /plugin \u2192 Installed to retry and see the error'
  };
  return {
    updated: a ? source : null,
    blocked: blocked,
    failed: failed,
    directoryStuck: directoryStuck,
    directoryIdentityChanged: directoryIdentityChanged,
    commandSourceSkipped: commandSourceSkipped
  };
}
async function TGr(n, o = new Set(), {
  skipCommandSources = !1
} = {}, r) {
  let s = W() && r !== void 0 ? await Ku(r) : Qm(),
    a = Object.keys(s.plugins);
  if (a.length === 0) return {
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
    } = await Ys(r),
    C = new Set(disabled.map(item => item.source));
  if (n.has(hn)) await F3e(Object.entries(s.plugins));
  let h = await Promise.allSettled(a.map(async item => {
      let {
        marketplace: marketplace
      } = Cn(item);
      if (!marketplace || !n.has(marketplace.toLowerCase())) return null;
      if (o.has(item)) return null;
      let g = s.plugins[item];
      if (!g || g.length === 0) return null;
      let R = OZ(g);
      if (R.length === 0) return null;
      return D(item, R, C, skipCommandSources ? {
        skipCommandSources: !0
      } : void 0, r);
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
    let g = qZ(a[m] ?? "");
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
async function x(n) {
  let o = {
      attemptedCount: 0,
      commandSourced: new Set(),
      updated: [],
      blocked: [],
      failedCount: 0
    },
    p = gO(),
    r = !tDt();
  if (p || r) t(p ? `Plugin autoupdate: command-source refresh ${v_() === "unanswered" ? "held for the organization's settings, not yet read" : "disabled by managed settings"} (still excluding command-sourced plugins from the regular pass)` : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
  try {
    let s = W() && n !== void 0 ? await Ku(n) : Qm(),
      a = new Map();
    for (let [pluginId, k] of Object.entries(s.plugins)) {
      let installations = OZ(k ?? []),
        {
          name: name,
          marketplace: marketplace_2
        } = Cn(pluginId);
      if (installations.length === 0 || !name || !marketplace_2) continue;
      let m = a.get(marketplace_2) ?? [];
      m.push({
        pluginId: pluginId,
        name: name,
        installations: installations
      }), a.set(marketplace_2, m);
    }
    let f,
      C = new Set(),
      h = a.size > 0 ? await nd(n) : {};
    for (let [_, k] of a) {
      let S = h[_];
      if (Ij(S?.source)) {
        for (let {
          pluginId: pluginId_2,
          installations: installations_2
        } of k) if (installations_2.some(item => item.sourceCommand !== void 0)) o.commandSourced.add(pluginId_2);
        continue;
      }
      let y = await Mk(_, n);
      if (!y) continue;
      for (let {
        pluginId: u,
        name: m,
        installations: installations_3
      } of k) {
        let g = y.plugins.find(item => item.name === m);
        if (!g || typeof g.source === "string" || g.source.source !== "command") continue;
        if (o.commandSourced.add(u), p || r) continue;
        if (!f) f = new Set(await r5e()), C = new Set((await Ys(n)).disabled.map(item => item.source));
        if (!f.has(u) || Qf(u)) {
          t(`Plugin autoupdate: not re-resolving ${u} (disabled or blocked by policy)`);
          continue;
        }
        let R = _H(g.source),
          P = installations_3.filter(item => item.sourceCommand !== R);
        if (P.length > 0) {
          let w = P.every(item => item.sourceCommand === void 0),
            T = L(P.map(item => item.scope)).map(item => ll("plugin update", u, `--scope ${item}`)).filter(item => item !== null).map(item => `\`${item}\``);
          t(`Plugin autoupdate: not re-resolving ${u}: marketplace command differs from the accepted one`, {
            level: "warn"
          }), o.blocked.push({
            type: "generic-error",
            source: u,
            plugin: m,
            error: (w ? `${Rt(m, 200)}'s marketplace entry now installs it by running a command` : `${Rt(m, 200)}'s marketplace entry changed the command it runs`) + ` (\`${Rt(g.source.command, R_t)}${g.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${T.length > 0 ? `run ${T.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`
          });
        }
        let U = installations_3.filter(item => item.sourceCommand === R);
        if (U.length === 0) continue;
        o.attemptedCount++, t(`Plugin autoupdate: re-resolving command-sourced plugin ${u}`);
        let E = await D(u, U, C, {
          skipMarketplaceRefresh: !0
        }, n);
        if (E.updated !== null) o.updated.push(E.updated);
        if (E.blocked !== null) o.blocked.push(E.blocked);
        if (E.failed) o.failedCount++;
      }
    }
  } catch (error) {
    t(`Plugin autoupdate: command-source refresh failed: ${d(error)}`, {
      level: "warn"
    });
  }
  return o;
}
function j7n(n, o, p = [], {
  announce = !0
} = {}) {
  if (n.length === 0 && o.length === 0) return;
  let s = Ne();
  if (s.autoUpdateListener) s.autoUpdateListener(n, o, p, announce);else {
    let pendingAutoUpdateNotification = s.pendingAutoUpdateNotification;
    s.pendingAutoUpdateNotification = {
      updated: L([...(pendingAutoUpdateNotification?.updated ?? []), ...n]),
      blocked: [...(pendingAutoUpdateNotification?.blocked ?? []), ...o],
      reresolved: L([...(pendingAutoUpdateNotification?.reresolved ?? []), ...p]),
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
function W7n(n) {
  let o = Ne();
  return o.commandSourceReresolve ??= (async () => {
    if (Tt()) return j();
    if (v_() === "unanswered") await oK.wait?.();
    let p = v_() === "unanswered",
      r = await x(n);
    if (p) o.commandSourceReresolve = null;
    if (p && r.commandSourced.size > 0) o.organizationAsk.isCommandHeld = !0, o.organizationAsk.heldReresolve = () => W7n(n).then(() => {});
    if (r.attemptedCount > 0) S1e();
    try {
      j7n(r.updated, r.blocked, r.updated);
    } catch (error) {
      l(error);
    }
    return r;
  })(), o.commandSourceReresolve;
}
function M(n) {
  return (async () => {
    let o = await W7n(n),
      p = Date.now(),
      r = {
        marketplaces_refreshed: 0,
        marketplace_refresh_failed: 0,
        marketplace_refresh_policy_skipped: 0,
        plugins_updated: 0,
        plugin_update_failed: 0,
        plugins_blocked_by_pin: 0,
        plugins_helper_deferred: 0,
        plugins_policy_blocked: 0,
        command_plugins_refreshed: o.attemptedCount,
        command_plugin_refresh_failed: o.failedCount
      },
      s = {};
    s = {
      directory_updated: 0,
      directory_update_failed: 0,
      directory_update_stuck: 0,
      directory_identity_changed: 0
    };
    let a = () => {
      if (o.attemptedCount > 0 || o.failedCount > 0) i("tengu_plugin_autoupdate_pass", {
        outcome: b("skipped"),
        ...r,
        ...s,
        duration_ms: Date.now() - p
      });
    };
    if (Cle()) {
      t("Plugin autoupdate: skipped (auto-updater disabled)"), a();
      return;
    }
    try {
      let f = await B(n);
      if (f.size === 0) {
        a();
        return;
      }
      let C = Math.floor(Math.random() * I);
      await Y(C, void 0, {
        unref: !0
      }), p = Date.now();
      let h = await Promise.allSettled(Array.from(f).map(async item => {
        try {
          return await Rq(item, n, void 0, {
            isBackground: !0
          }), "refreshed";
        } catch (error) {
          if (error instanceof Yl) return t(`Plugin autoupdate: marketplace ${item} not refreshed (managed policy): ${d(error)}`), "policy";
          return t(`Plugin autoupdate: failed to refresh marketplace ${item}: ${d(error)}`, {
            level: "warn"
          }), "failed";
        }
      }));
      r.marketplace_refresh_failed = F(h, e => e.status === "fulfilled" && e.value === "failed"), r.marketplace_refresh_policy_skipped = F(h, e => e.status === "fulfilled" && e.value === "policy"), r.marketplaces_refreshed = f.size - r.marketplace_refresh_failed - r.marketplace_refresh_policy_skipped, t("Plugin autoupdate: checking installed plugins");
      let {
        updated: updated_2,
        blocked: blocked_3,
        updateFailedCount: updateFailedCount_2,
        directory: directory_2
      } = await TGr(f, o.commandSourced, {
        skipCommandSources: !0
      }, n);
      if (r.plugins_updated = updated_2.length, r.plugin_update_failed = updateFailedCount_2, s = {
        directory_updated: directory_2.updated,
        directory_update_failed: directory_2.updateFailed,
        directory_update_stuck: directory_2.stuck,
        directory_identity_changed: directory_2.identityChanged
      }, r.plugins_blocked_by_pin = F(blocked_3, e => e.type === "autoupdate-blocked-by-pinner"), r.plugins_helper_deferred = F(blocked_3, e => e.type === "autoupdate-deferred-entry-helper"), r.plugins_policy_blocked = F(blocked_3, e => e.type === "autoupdate-disabled-by-policy"), updated_2.length > 0) My("autoupdate dep-resolution");
      let {
          errors: errors
        } = await Ys(n),
        m = await boe(errors.filter(item => {
          if (item.type !== "dependency-unsatisfied") return !1;
          let marketplace_3 = Cn(item.source).marketplace;
          return marketplace_3 !== void 0 && f.has(marketplace_3.toLowerCase());
        }), n);
      if (m.installed.length > 0) t(`Plugin autoupdate: resolved ${m.installed.length} missing plugin dependencies: ${m.installed.join(", ")}`), updated_2.push(...m.installed);
      j7n(updated_2, blocked_3), i("tengu_plugin_autoupdate_pass", {
        outcome: r.marketplace_refresh_failed > 0 || r.plugin_update_failed > 0 ? b("partial") : b("ok"),
        ...r,
        ...s,
        duration_ms: Date.now() - p
      });
    } catch (error) {
      t(`Plugin autoupdate: failed: ${d(error)}`, {
        level: "error"
      }), i("tengu_plugin_autoupdate_pass", {
        outcome: b("failed"),
        error_kind: c(U6(error)),
        ...r,
        ...s,
        duration_ms: Date.now() - p
      });
    }
  })();
}
var N = 86400000,
  CGr = 600000,
  z3s = 5000,
  G3s = 3600000;
async function V3s(n) {
  if (W() && n !== void 0) {
    let o = await n.statMeta(Be.state("last-cleanup"));
    return o.ok && Date.now() - o.value.mtimeMs < N;
  }
  try {
    let o = await H(O(Pe(), ".last-cleanup"));
    return Date.now() - o.mtimeMs < N;
  } catch {
    return !1;
  }
}
async function RGr(n, o) {
  if (de()) return;
  if (!n.backgroundHousekeeping.claim()) return;
  if (X4r(n), Y5o(n), M(o), kp()) N4o(o), NSr(o), setInterval(NSr, G3s, o).unref();
  let p = "sentinel-unchecked";
  async function r() {
    if (kp() && nf() > Date.now() - 60000) {
      setTimeout(s, CGr).unref();
      return;
    }
    if (p !== "done") {
      if (p === "sentinel-unchecked") {
        if (p = "sweep-due", await V3s(o)) {
          setTimeout(s, CGr).unref();
          return;
        }
      }
      if (p = "done", await Yeo(o), W() && o !== void 0) {
        await Keo(Pe(), n.backgroundHousekeeping), await qeo(o);
        let a = await o.write(Be.state("last-cleanup"), new Date().toISOString(), {
          publishDiscipline: "inPlace"
        });
        if (!a.ok) t(`.last-cleanup write failed: ${a.error.code}`, {
          level: "error"
        });
      } else await G(O(Pe(), ".last-cleanup"), new Date().toISOString()).catch(a => Ts(a) ? t(`.last-cleanup write failed: ${a.code} ${a.message}`, {
        level: "error"
      }) : l(a));
    }
    if (kp() && nf() > Date.now() - 60000) {
      setTimeout(s, CGr).unref();
      return;
    }
    await zfr();
  }
  function s() {
    return r().catch(a => Tbe(a) ? t(`background housekeeping failed: ${a.message}`, {
      level: "error"
    }) : l(a));
  }
  setTimeout(s, z3s).unref();
}
export { L4o, TGr, j7n, W7n, CGr, z3s, G3s, V3s, RGr };