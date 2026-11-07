// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pm, Ml, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, ci } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { GBt, UKe, bd, In, $n } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { Ct } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { Q_, Sg, ML, nFt, L1, ip } from "B:/~BUN/root/chunk-esnm3r09.js";
import { cSe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { B7t } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { J8, S6, mW, Wje, zu, Nc, ZC, S9, Py, em, $de, ki, gW, koo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { A7e } from "B:/~BUN/root/chunk-wss0tnsx.js";
import { j7t, FW, yc, f1 } from "B:/~BUN/root/chunk-63btkzab.js";
import { Dft } from "B:/~BUN/root/chunk-vke7wtay.js";
import { AZ } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { CZ, kft } from "B:/~BUN/root/chunk-5fdpyc78.js";
import { FUo } from "B:/~BUN/root/chunk-pcg5y2vq.js";
import { xXs } from "B:/~BUN/root/chunk-dtdkznj3.js";
import { Jke, f3o, p3o, m3o } from "B:/~BUN/root/chunk-kc3g58r4.js";
import { sJr } from "B:/~BUN/root/chunk-6t5n22vy.js";
import { c6s } from "B:/~BUN/root/chunk-97tgphzc.js";
import { Ykt } from "B:/~BUN/root/chunk-q426ym2p.js";
import { Uhe } from "B:/~BUN/root/chunk-4tt1f6cv.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { stat as H, writeFile as G } from "fs/promises";
import { join as I } from "path";
var B = 600000;
function d6s(e) {
  let n = Ae();
  if (n.autoUpdateListener = e, n.pendingAutoUpdateNotification !== null) e(n.pendingAutoUpdateNotification.updated, n.pendingAutoUpdateNotification.blocked, n.pendingAutoUpdateNotification.reresolved, n.pendingAutoUpdateNotification.announce), n.pendingAutoUpdateNotification = null;
  return () => {
    n.autoUpdateListener = null;
  };
}
async function F(e) {
  let n = await zu(e),
    m = mW(),
    r = new Set();
  for (let [u, i] of Object.entries(n)) {
    if (!ip(i.source)) continue;
    if (J8(i.source) && !B7t()) continue;
    if (UKe(u, i, Wje(u, m))) r.add(u.toLowerCase());
  }
  if (!r.has(In) && !Object.hasOwn(n, In) && S6() && ip({
    source: "pluginDirectory"
  })) {
    if (Object.keys((X() && e !== void 0 ? await em(e) : Py()).plugins).some(item => item.endsWith(`@${In}`))) r.add(In);
  }
  return r;
}
async function M(source, n, m, r, u) {
  let i = !1,
    failed = !1,
    commandSourceSkipped = null,
    blocked = null,
    _ = !1,
    directoryIdentityChanged = !1,
    C = !1,
    y = !1;
  for (let {
    scope: scope
  } of n) try {
    let o = await Ykt(source, scope, r ?? {}, u);
    switch (o.outcome) {
      case "updated":
        i = !0, t(`Plugin autoupdate: updated ${source} from ${o.oldVersion} to ${o.newVersion}`);
        break;
      case "skipped":
        {
          if (t(`Plugin autoupdate: ${source} ${o.message}`), o.skipReason === "entry_helper_deferred") blocked = {
            type: "autoupdate-deferred-entry-helper",
            source: source,
            plugin: $n(source).name,
            message: o.message
          };else if (o.blockedBy && o.blockedBy.length > 0) {
            let blockedBy = o.blockedBy.map(item => $n(item).name),
              disabledPinners = o.blockedBy.filter(item => m.has(item)).map(item => $n(item).name);
            blocked = {
              type: "autoupdate-blocked-by-pinner",
              source: source,
              plugin: $n(source).name,
              heldAt: o.oldVersion,
              blockedBy: blockedBy,
              disabledPinners: disabledPinners
            };
          }
          break;
        }
      case "failed":
        if (_ = o.failureCode === "not_found" || o.failureCode === "not_cached", directoryIdentityChanged ||= o.failureCode === "directory_identity_changed", C ||= o.failureCode === "directory_listing_not_installable", y ||= o.failureCode === "directory_unavailable" || o.failureCode === "marketplace_policy_blocked" || o.failureCode === "directory_binding_unreadable", o.failureCode === "command_source_skipped") commandSourceSkipped = source;else if (o.failureCode === "entry_helper_disabled_by_policy" || o.failureCode === "entry_helper_remote_policy_unconsented" || o.failureCode === "entry_helper_organization_unanswered" || o.failureCode === "plugin_policy_blocked" || o.failureCode === "command_source_refused" && (ML() || !nFt())) blocked = {
          type: "autoupdate-disabled-by-policy",
          source: source,
          plugin: $n(source).name,
          message: o.message
        };else if (o.failureCode === "entry_helper_not_inlined") blocked = {
          type: "generic-error",
          source: source,
          plugin: $n(source).name,
          error: o.message
        }, failed = !0;else if (o.failureCode !== "command_source_inactive") failed = !0;
        t(`Plugin autoupdate: failed to update ${source}: ${o.message}`, {
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
  let directoryStuck = failed && !_ && !directoryIdentityChanged && !C && !y && blocked === null && source.endsWith(`@${In}`);
  if (directoryStuck) blocked = {
    type: "generic-error",
    source: source,
    plugin: $n(source).name,
    error: 'The Anthropic Directory lists a different commit, but the background update failed, so this plugin is still on the old one. Choose "Update now" in /plugin \u2192 Installed to retry and see the error'
  };
  return {
    updated: i ? source : null,
    blocked: blocked,
    failed: failed,
    directoryStuck: directoryStuck,
    directoryIdentityChanged: directoryIdentityChanged,
    commandSourceSkipped: commandSourceSkipped
  };
}
async function q0o(e, n = new Set(), {
  skipCommandSources = !1
} = {}, r) {
  let u = X() && r !== void 0 ? await em(r) : Py(),
    i = Object.keys(u.plugins);
  if (i.length === 0) return {
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
    } = await ki(r),
    P = new Set(disabled.map(item => item.source));
  if (e.has(In)) await kft(Object.entries(u.plugins));
  let h = await Promise.allSettled(i.map(async item => {
      let {
        marketplace: marketplace
      } = $n(item);
      if (!marketplace || !e.has(marketplace.toLowerCase())) return null;
      if (n.has(item)) return null;
      let s = u.plugins[item];
      if (!s || s.length === 0) return null;
      let S = $de(s);
      if (S.length === 0) return null;
      return M(item, S, P, skipCommandSources ? {
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
  for (let [g, o] of h.entries()) {
    if (o.status !== "fulfilled" || o.value === null) continue;
    let s = CZ(i[g] ?? "");
    if (o.value.updated !== null) {
      if (updated.push(o.value.updated), s) directory.updated++;
    }
    if (o.value.blocked !== null) blocked_2.push(o.value.blocked);
    if (o.value.failed) {
      if (updateFailedCount++, s) directory.updateFailed++;
    }
    if (o.value.directoryStuck) directory.stuck++;
    if (o.value.directoryIdentityChanged) directory.identityChanged++;
    if (o.value.commandSourceSkipped !== null) commandSourceSkipped_2.push(o.value.commandSourceSkipped);
  }
  return {
    updated: updated,
    blocked: blocked_2,
    updateFailedCount: updateFailedCount,
    commandSourceSkipped: commandSourceSkipped_2,
    directory: directory
  };
}
async function x(e) {
  let n = {
      attemptedCount: 0,
      commandSourced: new Set(),
      updated: [],
      blocked: [],
      failedCount: 0
    },
    m = ML(),
    r = !j7t();
  if (m || r) t(m ? `Plugin autoupdate: command-source refresh ${Q_() === "unanswered" ? "held for the organization's settings, not yet read" : "disabled by managed settings"} (still excluding command-sourced plugins from the regular pass)` : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
  try {
    let u = X() && e !== void 0 ? await em(e) : Py(),
      i = new Map();
    for (let [pluginId, k] of Object.entries(u.plugins)) {
      let installations = $de(k ?? []),
        {
          name: name,
          marketplace: marketplace_2
        } = $n(pluginId);
      if (installations.length === 0 || !name || !marketplace_2) continue;
      let g = i.get(marketplace_2) ?? [];
      g.push({
        pluginId: pluginId,
        name: name,
        installations: installations
      }), i.set(marketplace_2, g);
    }
    let c,
      P = new Set(),
      h = i.size > 0 ? await Nc(e) : {};
    for (let [_, k] of i) {
      let C = h[_];
      if (L1(C?.source)) {
        for (let {
          pluginId: pluginId_2,
          installations: installations_2
        } of k) if (installations_2.some(item => item.sourceCommand !== void 0)) n.commandSourced.add(pluginId_2);
        continue;
      }
      let y = await ZC(_, e);
      if (!y) continue;
      for (let {
        pluginId: p,
        name: g,
        installations: installations_3
      } of k) {
        let s = y.plugins.find(item => item.name === g);
        if (!s || typeof s.source === "string" || s.source.source !== "command") continue;
        if (n.commandSourced.add(p), m || r) continue;
        if (!c) c = new Set(await Dft()), P = new Set((await ki(e)).disabled.map(item => item.source));
        if (!c.has(p) || Sg(p)) {
          t(`Plugin autoupdate: not re-resolving ${p} (disabled or blocked by policy)`);
          continue;
        }
        let S = FW(s.source),
          w = installations_3.filter(item => item.sourceCommand !== S);
        if (w.length > 0) {
          let v = w.every(item => item.sourceCommand === void 0),
            D = L(w.map(item => item.scope)).map(item => bd("plugin update", p, `--scope ${item}`)).filter(item => item !== null).map(item => `\`${item}\``);
          t(`Plugin autoupdate: not re-resolving ${p}: marketplace command differs from the accepted one`, {
            level: "warn"
          }), n.blocked.push({
            type: "generic-error",
            source: p,
            plugin: g,
            error: (v ? `${Et(g, 200)}'s marketplace entry now installs it by running a command` : `${Et(g, 200)}'s marketplace entry changed the command it runs`) + ` (\`${Et(s.source.command, GBt)}${s.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${D.length > 0 ? `run ${D.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`
          });
        }
        let T = installations_3.filter(item => item.sourceCommand === S);
        if (T.length === 0) continue;
        n.attemptedCount++, t(`Plugin autoupdate: re-resolving command-sourced plugin ${p}`);
        let E = await M(p, T, P, {
          skipMarketplaceRefresh: !0
        }, e);
        if (E.updated !== null) n.updated.push(E.updated);
        if (E.blocked !== null) n.blocked.push(E.blocked);
        if (E.failed) n.failedCount++;
      }
    }
  } catch (error) {
    t(`Plugin autoupdate: command-source refresh failed: ${d(error)}`, {
      level: "warn"
    });
  }
  return n;
}
function KBr(e, n, m = [], {
  announce = !0
} = {}) {
  if (e.length === 0 && n.length === 0) return;
  let u = Ae();
  if (u.autoUpdateListener) u.autoUpdateListener(e, n, m, announce);else {
    let pendingAutoUpdateNotification = u.pendingAutoUpdateNotification;
    u.pendingAutoUpdateNotification = {
      updated: L([...(pendingAutoUpdateNotification?.updated ?? []), ...e]),
      blocked: [...(pendingAutoUpdateNotification?.blocked ?? []), ...n],
      reresolved: L([...(pendingAutoUpdateNotification?.reresolved ?? []), ...m]),
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
function qBr(e) {
  let n = Ae();
  return n.commandSourceReresolve ??= (async () => {
    if (Ct()) return j();
    if (Q_() === "unanswered") await f1.wait?.();
    let m = Q_() === "unanswered",
      r = await x(e);
    if (m) n.commandSourceReresolve = null;
    if (m && r.commandSourced.size > 0) n.organizationAsk.isCommandHeld = !0, n.organizationAsk.heldReresolve = () => qBr(e).then(() => {});
    if (r.attemptedCount > 0) A7e();
    try {
      KBr(r.updated, r.blocked, r.updated);
    } catch (error) {
      a(error);
    }
    return r;
  })(), n.commandSourceReresolve;
}
function O(e) {
  return (async () => {
    let n = await qBr(e),
      m = Date.now(),
      r = {
        marketplaces_refreshed: 0,
        marketplace_refresh_failed: 0,
        marketplace_refresh_policy_skipped: 0,
        plugins_updated: 0,
        plugin_update_failed: 0,
        plugins_blocked_by_pin: 0,
        plugins_helper_deferred: 0,
        plugins_policy_blocked: 0,
        command_plugins_refreshed: n.attemptedCount,
        command_plugin_refresh_failed: n.failedCount
      },
      u = {};
    u = {
      directory_updated: 0,
      directory_update_failed: 0,
      directory_update_stuck: 0,
      directory_identity_changed: 0
    };
    let i = () => {
      if (n.attemptedCount > 0 || n.failedCount > 0) l("tengu_plugin_autoupdate_pass", {
        outcome: b("skipped"),
        ...r,
        ...u,
        duration_ms: Date.now() - m
      });
    };
    if (cSe()) {
      t("Plugin autoupdate: skipped (auto-updater disabled)"), i();
      return;
    }
    try {
      let c = await F(e);
      if (c.size === 0) {
        i();
        return;
      }
      let P = Math.floor(Math.random() * B);
      await J(P, void 0, {
        unref: !0
      }), m = Date.now();
      let h = await Promise.allSettled(Array.from(c).map(async item => {
        try {
          return await S9(item, e, void 0, {
            isBackground: !0
          }), "refreshed";
        } catch (error) {
          if (error instanceof yc) return t(`Plugin autoupdate: marketplace ${item} not refreshed (managed policy): ${d(error)}`), "policy";
          return t(`Plugin autoupdate: failed to refresh marketplace ${item}: ${d(error)}`, {
            level: "warn"
          }), "failed";
        }
      }));
      r.marketplace_refresh_failed = U(h, s => s.status === "fulfilled" && s.value === "failed"), r.marketplace_refresh_policy_skipped = U(h, s => s.status === "fulfilled" && s.value === "policy"), r.marketplaces_refreshed = c.size - r.marketplace_refresh_failed - r.marketplace_refresh_policy_skipped, t("Plugin autoupdate: checking installed plugins");
      let {
        updated: updated_2,
        blocked: blocked_3,
        updateFailedCount: updateFailedCount_2,
        directory: directory_2
      } = await q0o(c, n.commandSourced, {
        skipCommandSources: !0
      }, e);
      r.plugins_updated = updated_2.length, r.plugin_update_failed = updateFailedCount_2, u = {
        directory_updated: directory_2.updated,
        directory_update_failed: directory_2.updateFailed,
        directory_update_stuck: directory_2.stuck,
        directory_identity_changed: directory_2.identityChanged
      }, r.plugins_blocked_by_pin = U(blocked_3, s => s.type === "autoupdate-blocked-by-pinner"), r.plugins_helper_deferred = U(blocked_3, s => s.type === "autoupdate-deferred-entry-helper"), r.plugins_policy_blocked = U(blocked_3, s => s.type === "autoupdate-disabled-by-policy");
      let p = updated_2.length > 0 || n.updated.length > 0 ? await gW(e) : void 0,
        {
          errors: errors
        } = p ?? (await ki(e)),
        o = await Uhe(errors.filter(item => {
          if (item.type !== "dependency-unsatisfied") return !1;
          let marketplace_3 = $n(item.source).marketplace;
          return marketplace_3 !== void 0 && c.has(marketplace_3.toLowerCase());
        }), e, p);
      if (o.installed.length > 0) t(`Plugin autoupdate: resolved ${o.installed.length} missing plugin dependencies: ${o.installed.join(", ")}`), updated_2.push(...o.installed);
      KBr(updated_2, blocked_3), await ki(e), l("tengu_plugin_autoupdate_pass", {
        outcome: r.marketplace_refresh_failed > 0 || r.plugin_update_failed > 0 ? b("partial") : b("ok"),
        ...r,
        ...u,
        duration_ms: Date.now() - m
      });
    } catch (error) {
      t(`Plugin autoupdate: failed: ${d(error)}`, {
        level: "error"
      }), l("tengu_plugin_autoupdate_pass", {
        outcome: b("failed"),
        error_kind: f(AZ(error)),
        ...r,
        ...u,
        duration_ms: Date.now() - m
      });
    }
  })();
}
var N = 86400000,
  Y0o = 600000,
  asa = 5000,
  lsa = 3600000;
async function dsa(e) {
  if (X() && e !== void 0) {
    let n = await e.statMeta(Ve.state("last-cleanup"));
    return n.ok && Date.now() - n.value.mtimeMs < N;
  }
  try {
    let n = await H(I(Ue(), ".last-cleanup"));
    return Date.now() - n.mtimeMs < N;
  } catch {
    return !1;
  }
}
async function X0o(e, n) {
  if (q()) return;
  if (!e.backgroundHousekeeping.claim()) return;
  if (FUo(e), xXs(e), O(n), Ml()) c6s(n), koo(n), setInterval(koo, lsa, n).unref();
  let m = "sentinel-unchecked";
  async function r() {
    if (Ml() && pm() > Date.now() - 60000) {
      setTimeout(u, Y0o).unref();
      return;
    }
    if (m !== "done") {
      if (m === "sentinel-unchecked") {
        if (m = "sweep-due", await dsa(n)) {
          setTimeout(u, Y0o).unref();
          return;
        }
      }
      m = "done";
      let i = (await m3o(n)) === void 0;
      if (X() && n !== void 0) await p3o(Ue(), e.backgroundHousekeeping);
      if (i && X() && n !== void 0) {
        await f3o(n);
        let c = await n.write(Ve.state("last-cleanup"), new Date().toISOString(), {
          publishDiscipline: "inPlace"
        });
        if (!c.ok) t(`.last-cleanup write failed: ${c.error.code}`, {
          level: "error"
        });
      } else if (i) await G(I(Ue(), ".last-cleanup"), new Date().toISOString()).catch(c => ci(c) ? t(`.last-cleanup write failed: ${c.code} ${c.message}`, {
        level: "error"
      }) : a(c));
    }
    if (Ml() && pm() > Date.now() - 60000) {
      setTimeout(u, Y0o).unref();
      return;
    }
    await sJr();
  }
  function u() {
    return r().catch(i => Jke(i) ? t(`background housekeeping failed: ${i.message}`, {
      level: "error"
    }) : a(i));
  }
  setTimeout(u, asa).unref();
}
export { d6s, q0o, KBr, qBr, Y0o, asa, lsa, dsa, X0o };