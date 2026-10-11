// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { we, IBe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ene } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { J, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { I, Zx } from "B:/~BUN/root/chunk-y04k89s2.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { qa } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { zmn, $ye, GS, w1r, dFo, Lm, sr, cUe, ss, dh } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Jo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Od } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { Ui, Yb, fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { Nv, he, Ha } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { _0t, Axr, bNe, z4e, ZEe, r0, Rl, E0t, Eat, z9, F3, $sn, T0t, Usn, C0t, Mxr, $3, Bsn, eTe, Tat, Cge, o0 } from "B:/~BUN/root/chunk-r6m7remx.js";
import { al, Fk, pm, Idt, Odn, J6e, ece, Odt, iqn } from "B:/~BUN/root/chunk-f1dj0k6n.js";
import { pCe } from "B:/~BUN/root/chunk-j14vfkmm.js";
import { vf, U3, x0t, WT, Rge, $xr, HV, XL, Ep } from "B:/~BUN/root/chunk-384x2wn9.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { JT, WDt, sCe } from "B:/~BUN/root/chunk-pt7v2bpc.js";
import { PTr, hF } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { k0n, lCt, Ulo, SGe, Ztt, nve, lco, whr, pJt, fJt, z0n, dco, hCt, uco, kGe, khr, Ehr, pMe, yco, G0n, rve, w8, hJt, uvr, pho, tFn, fho, Mxt, nFn, kDe, o3, gke, pvr, fvr, ume, uen, rFn, oFn, pen, hvr, fen, yvr, Dxt, zp, jZ, bFn, bke, Ske, ML, gme, _k, Dc, id, ny, wFn, dV, WZ, cB, jW, ken, dm, Een, vFn, a3, n9, Ten, bk, lv, kFn, pw, zho, Gho, Uvr, Cen, Ren as message_2, Aen, TFn, kg, aF, yme, PDe, wke, mqe, l3, Bxt, jxt, qvr, Kvr, mS, Ti } from "B:/~BUN/root/chunk-3jyp964r.js";
import { jln } from "B:/~BUN/root/chunk-gj0n7q1s.js";
import { GF, SI, VF, Qle } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { fKe, Hme } from "B:/~BUN/root/chunk-spgj5paf.js";
import { nOe, Yj } from "B:/~BUN/root/chunk-z7xefjfp.js";
import { bsr, T7e } from "B:/~BUN/root/chunk-ajbaqbyf.js";
import { vu } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { Wd, zd, Gd, Ad, op, aD, JLr, LNt, Adt, Y6e, gOo, KF, xdt, rqn, or, Xz, M6, qCe, Idn, xd, Zp, gs, LR, QLr, Rp, T0 } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { cn, Sl, Pt, Hm } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { ug } from "B:/~BUN/root/chunk-t1t358ee.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
async function DYr(e, n, i) {
  if (ene()) return "ineligible";
  if (!n?.source || !Ep(n.source)) return "ineligible";
  if (!$ye(e, n, gme(e, ML()))) return "ineligible";
  try {
    return await jW(e, i, void 0, {
      skipIfRecent: !0,
      directoryTrigger: "install"
    }), dt().marketplaces.delete(e), "refreshed";
  } catch (error) {
    return t(`Failed to refresh marketplace '${e}' on catalog miss; using cached data: ${l(error)}`, {
      level: "warn"
    }), "refresh-failed";
  }
}
function EPe(e) {
  if (e === "refreshed") _("plugin_install_refresh_first");else if (e === "refresh-failed") m("plugin_install_refresh_first", "refresh_failed");else p("plugin_install_refresh_first", "ineligible");
}
async function VXe(e, n, i) {
  if (It()) return {
    outcome: "ineligible"
  };
  if (!n?.source || !Ep(n.source)) return {
    outcome: "ineligible"
  };
  if (n.installLocation && ny(n.installLocation)) return {
    outcome: "ineligible"
  };
  let source = n.source.source;
  if (source !== "github" && source !== "git" && source !== "url" && source !== "claudeai" && source !== "pluginDirectory") {
    if (Lm(n.source) || source === "settings") dt().marketplaces.delete(e);
    return {
      outcome: "ineligible"
    };
  }
  try {
    return await jW(e, i, void 0, {
      skipIfRecent: !0,
      directoryTrigger: "install"
    }), dt().marketplaces.delete(e), {
      outcome: "refreshed"
    };
  } catch (error) {
    return t(`Failed to refresh marketplace '${e}' before scoped install; using cached data: ${l(error)}`, {
      level: "warn"
    }), {
      outcome: "refresh-failed",
      errorMessage: Zx(l(error))
    };
  }
}
var je = be(ih(), 1);
import { dirname as Wt, join as Je, relative as Ht, resolve as Ke, sep as yn } from "path";
async function sn(e) {
  let n = await Sn(e),
    i = await Rn(e).catch(() => He);
  return {
    installedVersion: on(n),
    availableVersion: on(i.availableVersion),
    loadsInPlaceFrom: i.loadsInPlaceFrom
  };
}
function an(e, n, i) {
  let s = al("plugin update", e, n === "user" ? void 0 : `--scope ${n}`),
    o = i.availableVersion !== void 0 && i.installedVersion !== void 0 && i.availableVersion !== i.installedVersion,
    r = Pt(i.installedVersion, tn),
    h = Pt(i.availableVersion, tn),
    y = `${r} to ${h}`;
  if (i.loadsInPlaceFrom !== void 0) {
    let F = Sl(i.loadsInPlaceFrom),
      N = o && s !== null ? `; \`${s}\` re-records its version, ${y}` : "";
    return ` \u2014 it loads in place from ${F}, so edits there take effect at the next session start or /reload-plugins${N}`;
  }
  if (!o) return "";
  let b = s !== null ? `run \`${s}\` to get it` : "update it from /plugin";
  return `${` \u2014 the marketplace now offers ${h}`} (installed: ${r}); ${b}`;
}
var tn = 64,
  He = Object.freeze({});
async function Sn({
  pluginId: pluginId,
  scope: scope,
  projectPath: projectPath,
  storageV5: storageV5
}) {
  let r = H() && storageV5 !== void 0 ? await lv(storageV5) : bk(),
    h = LR(Object.keys(r.plugins), pluginId),
    y = (r.plugins[h ?? pluginId] ?? []).filter(item => item.scope === scope);
  return (y.find(item => item.projectPath === projectPath) ?? y[0])?.version;
}
async function Rn({
  pluginId: pluginId_2,
  entry: entry,
  marketplaceName: marketplaceName,
  marketplaceInstallLocation: marketplaceInstallLocation,
  storageV5: storageV5_2
}) {
  if (typeof entry.source !== "string") return {
    availableVersion: Cn(entry)
  };
  if (marketplaceInstallLocation === void 0) return He;
  let r = await Dc(storageV5_2),
    y = ny(marketplaceInstallLocation) !== void 0 ? "system" : "workspace",
    c = await w8(pluginId_2, marketplaceInstallLocation, entry.source, r, _k(), storageV5_2, y);
  if (c.kind !== "ok") return He;
  let b = await o3(pluginId_2, entry.source, await l3(c.entryPath, entry.name, entry.source, [], {
      noTelemetry: !0
    }).then(N => N.manifest, () => {
      return;
    }), c.entryPath, {
      kind: "catalog",
      version: entry.version
    }, void 0, void 0, c.marketplaceDir),
    u = r[marketplaceName]?.source,
    F = u !== void 0 && Lm(u);
  return {
    availableVersion: b !== "unknown" ? b : void 0,
    loadsInPlaceFrom: F ? c.entryPath : void 0
  };
}
function Cn(e) {
  let {
    source: source_2
  } = e;
  if (!(typeof source_2 !== "string" && source_2.source === "claudeai")) return;
  return e.version || source_2.version || void 0;
}
function on(e) {
  return e === void 0 ? void 0 : sr(e);
}
function Dn(e, n) {
  let i = {
    install: "installed",
    update: "updated",
    uninstall: "uninstalled"
  }[n];
  switch (e) {
    case Wd:
      return `This plugin is loaded via --plugin-dir for this session with no marketplace backing \u2014 it cannot be ${i}. Drop the --plugin-dir flag to stop loading it, or \`claude plugin disable\` to turn it off.`;
    case Gd:
      return `This plugin is synced from your claude.ai account with no marketplace backing \u2014 it cannot be ${i} here. Manage it on claude.ai, or \`claude plugin disable\` to turn it off on this machine.`;
    case zd:
      return `This plugin is loaded from ${xa(Je(Se(), "skills"))}/ with no marketplace backing \u2014 it cannot be ${i}. Delete the directory to remove it; \`claude plugin disable\` to turn it off; edits there take effect after /reload-plugins.`;
  }
}
function Qe(e, n, i) {
  if (op(n)) return Dn(n, i);
  if (n !== void 0 && w1r(n)) return dFo(n);
  if (SI(e) && VF(or(e).name) !== void 0) return "This is a built-in plugin \u2014 built-in plugins cannot be installed, updated or uninstalled. Use `claude plugin enable` / `claude plugin disable` to turn it on or off.";
  return;
}
function Xe(e, n) {
  if (w1r(n)) return "marketplace_not_available";
  return SI(e) ? "builtin" : "directory_loaded";
}
function wn(e, n) {
  let {
      name: name
    } = M6(e),
    s = Hme(fKe(), name, n);
  return s.outcome === "locked" ? s.entry.name : void 0;
}
function vn(e) {
  switch (e) {
    case Wd:
      return "--plugin-dir";
    case zd:
      return "skills-directory";
    case Gd:
      return "claude.ai-synced";
  }
}
var c5 = ["user", "project", "local"],
  Oe = {
    user: 0,
    project: 1,
    local: 2
  },
  Oht = ["user", "project", "local", "managed"];
function Ze(e) {
  if (!c5.includes(e)) throw Error(`Invalid scope "${e}". Must be one of: ${c5.join(", ")}`);
}
function Mht(e) {
  return c5.includes(e);
}
function k1e(e) {
  return e === "project" || e === "local" ? we() : void 0;
}
function DQn(e) {
  let n = he("projectSettings")?.enabledPlugins;
  if (!n) return !1;
  let i = LR(Object.keys(n), e);
  return i !== void 0 && n[i] === !0;
}
function LYr(e) {
  return qe[e] === "sad";
}
var qe = {
  ...Mxr,
  not_installed: "bad",
  not_installed_at_scope: "bad",
  install_records_unreadable: "bad",
  ambiguous_marketplace: "sad",
  not_found: "bad",
  not_cached: "bad",
  source_missing: "bad",
  directory_loaded: "bad",
  builtin: "sad",
  marketplace_dir_missing: "bad",
  marketplace_dir_unreadable: "bad",
  marketplace_location_refused: "bad",
  marketplace_entry_path_refused: "bad",
  marketplace_policy_blocked: "sad",
  plugin_policy_blocked: "sad",
  directory_unavailable: "bad",
  command_source_inactive: "sad",
  command_source_skipped: "sad",
  command_source_refused: "sad",
  entry_helper_declined: "sad",
  claudeai_identity_changed: "sad",
  directory_identity_changed: "sad",
  directory_binding_unreadable: "bad",
  directory_commit_mismatch: "bad",
  directory_listing_not_installable: "sad",
  npm_marketplace_disabled: "sad",
  marketplace_not_available: "sad"
};
function Dht(e) {
  let n = dm(),
    i = LR(Object.keys(n.plugins), e);
  if (i) return i;
  for (let s of ["local", "project", "user"]) {
    let o = he(T0(s))?.enabledPlugins;
    if (!o) continue;
    let r = LR(Object.keys(o), e);
    if (r) return r;
  }
  return e;
}
function qXe(e, n, i) {
  return xdt(e, lco(e, i), n.manifest.defaultEnabled, n.installationPreference);
}
function Ye(e, n = ["local", "project", "user"]) {
  let i = e.includes("@"),
    s = e.toLowerCase();
  for (let scope_2 of n) {
    let r = he(T0(scope_2))?.enabledPlugins;
    if (!r) continue;
    for (let pluginId_3 of Object.keys(r)) if (i ? Zp(pluginId_3, e) : pluginId_3.toLowerCase().startsWith(`${s}@`)) return {
      pluginId: pluginId_3,
      scope: scope_2
    };
  }
  return null;
}
function bn(e, n) {
  let {
    name: name_2,
    marketplace: marketplace
  } = M6(e);
  return n.find(item => {
    if (Zp(item.name, e) || Zp(item.name, name_2)) return !0;
    if (marketplace && item.source) return Zp(item.name, name_2) && item.source.toLowerCase().includes(`@${marketplace.toLowerCase()}`);
    return !1;
  });
}
function Fn(e, n, i) {
  let {
      name: s
    } = or(e),
    o = dm(),
    r = Object.keys(o.plugins),
    pluginId_4 = LR(r, e);
  if (pluginId_4 && o.plugins[pluginId_4]?.length) return {
    pluginId: pluginId_4,
    pluginName: s
  };
  let y = e.includes("@"),
    c = QLr(r, s).filter(item => (!y || !or(item).marketplace) && (o.plugins[item]?.length ?? 0) > 0),
    pluginId_5 = c.find(item => o.plugins[item]?.some(F => F.scope === n && F.projectPath === i)) ?? c[0];
  if (pluginId_5) return {
    pluginId: pluginId_5,
    pluginName: s
  };
  return null;
}
function pSn(e) {
  let n = dm(),
    i = LR(Object.keys(n.plugins), e),
    s = i ? n.plugins[i] : void 0;
  if (!s || s.length === 0) return {
    scope: "user"
  };
  let o = we(),
    r = s.find(item => item.scope === "local" && item.projectPath === o);
  if (r) return {
    scope: r.scope,
    projectPath: r.projectPath
  };
  let h = s.find(item => item.scope === "project" && item.projectPath === o);
  if (h) return {
    scope: h.scope,
    projectPath: h.projectPath
  };
  let y = s.find(item => item.scope === "user");
  if (y) return {
    scope: y.scope
  };
  return {
    scope: s[0].scope,
    projectPath: s[0].projectPath
  };
}
function rn(e) {
  switch (e.reason) {
    case "blocked-by-policy":
      return {
        message: `Plugin "${e.pluginName}" is blocked by your organization's policy and cannot be installed`,
        failureCode: "plugin_policy_blocked"
      };
    case "marketplace-blocked-by-policy":
      return {
        message: `Plugin "${e.pluginName}" is from marketplace "${e.marketplaceName}", which is blocked by your organization's policy`,
        failureCode: "marketplace_policy_blocked"
      };
  }
}
async function LQn(e, n, i) {
  if (!(await fen(e, n, i))) return !1;
  return !(await bsr(e, i)).some(item => item.type !== "dependency-unsatisfied" || item.reason !== "not-found");
}
function Nn(e, n) {
  return !1;
}
function On() {
  return;
}
function En(e, n) {
  if (!1) switch (e) {
    case "directory-not-in-session":
    case "workspace-restricted":
    case "setting-sources-narrowed":
  }
  return "";
}
async function p2t(pluginId_6, scope_3 = "user", {
  shownSourceCommand: i,
  shownEntryHelper: shownEntryHelper,
  announceRefreshResult: announceRefreshResult,
  replaceInstalledCopy: replaceInstalledCopy,
  replaceOnlyPluginIds: replaceOnlyPluginIds,
  carrySettingsFrom: carrySettingsFrom,
  surface = "cli",
  npmRegistry: npmRegistry
} = {}, storageV5_3) {
  Ze(scope_3), pluginId_6 = aD(pluginId_6);
  let {
      name: F,
      marketplace: marketplace_2
    } = M6(pluginId_6),
    message = Qe(pluginId_6, marketplace_2, "install");
  if (message !== void 0) return {
    success: !1,
    message: message,
    failureCode: Xe(pluginId_6, marketplace_2)
  };
  let C = await n9(storageV5_3);
  if (C !== void 0) return {
    success: !1,
    message: `Plugin "${Pt(pluginId_6)}" was not installed: ${a3(C)}`,
    failureCode: "install_records_unreadable"
  };
  let d = replaceInstalledCopy ? On() : void 0;
  if (d !== void 0) return {
    success: !1,
    message: En(d, "cli"),
    failureCode: "replace_unavailable"
  };
  let ae,
    marketplaceName_2,
    marketplaceInstallLocation_2,
    le = !1,
    ne,
    switchTargetMarkedInItsOwnWalk,
    switchWalkNotFresh,
    P = !1,
    K = !1,
    G,
    W = !1,
    a = !1,
    U,
    X = "",
    te = "",
    fe = "",
    g = !1,
    D = qCe(pluginId_6);
  if (D === null && pluginId_6.toLowerCase().endsWith(`@${GS}`)) return {
    success: !1,
    message: `"${pluginId_6}" is not an npm package spec: expected <package>@npm, e.g. @scope/name@npm, name@npm or name@1.2.3@npm`,
    failureCode: "not_found"
  };
  if (D !== null && npmRegistry !== void 0 && !zmn(npmRegistry)) return {
    success: !1,
    message: `--registry must be an http(s) URL (got "${npmRegistry}")`,
    failureCode: "not_found"
  };
  if (D !== null) {
    if (!Cen()) return {
      success: !1,
      message: message_2,
      failureCode: "npm_marketplace_disabled"
    };
    ae = TFn(D, npmRegistry), marketplaceName_2 = GS, marketplaceInstallLocation_2 = Aen;
  } else if (marketplace_2) {
    let Z = kDe({
      pluginId: pluginId_6,
      pluginName: F,
      source: void 0,
      boundByRecord: !1,
      action: "installed"
    });
    if (Z !== void 0 && !Z.ok) return {
      success: !1,
      message: Z.message,
      failureCode: "not_found"
    };
    let Pe = (await Dc(storageV5_3))[marketplace_2];
    g = !1;
    let ge = Pe !== void 0 && Ep(Pe.source);
    P = Pe !== void 0 && !ge;
    let _e = void 0;
    if (_e !== void 0 && "notFreshEnoughFor" in _e) {
      if (switchWalkNotFresh = _e.detail, Nn(F, marketplace_2)) return m("plugin_marketplace_resolve", "refresh_failed", {
        scoped: !0
      }), {
        success: !1,
        message: `Plugin "${Pt(F)}" was not switched. ${wFn(_e.detail)}`,
        failureCode: "replace_needs_fresh_listing"
      };
    }
    let Ie = _e !== void 0 && "entry" in _e ? _e : void 0,
      Ce = Ie !== void 0 ? {
        outcome: "refreshed"
      } : announceRefreshResult ?? (await VXe(marketplace_2, Pe, storageV5_3));
    if (EPe(Ce.outcome), Ce.outcome === "refreshed") le = !0;else if (Ce.outcome === "refresh-failed") K = !0, ne = `marketplace not refreshed (${Ce.errorMessage})`;
    let w = Ie !== void 0 ? Ie.entry === null ? null : Ie : G === void 0 ? await cB(pluginId_6, storageV5_3, "install") : await WZ(pluginId_6, storageV5_3, "install");
    if (Ie !== void 0 && Ie.entry !== null) switchTargetMarkedInItsOwnWalk = Ie.reviewerMarked;
    if (w) ae = w.entry, marketplaceName_2 = marketplace_2, marketplaceInstallLocation_2 = w.marketplaceInstallLocation;
  } else {
    let Z,
      ue = await gSn(F, storageV5_3, Ce => {
        Z = Ce;
      }),
      Pe = void 0,
      ge = Z?.message,
      _e = ge?.indexOf(": ") ?? -1,
      Ie = ge?.startsWith(`${Idt} `) && _e !== -1 ? ge.slice(_e + 2) : ge;
    if (ue) ae = ue.entry, marketplaceName_2 = ue.marketplace, marketplaceInstallLocation_2 = ue.marketplaceInstallLocation;
  }
  if (!ae || !marketplaceName_2) {
    let Z = marketplace_2 ? `marketplace "${marketplace_2}"` : "any configured marketplace",
      ue = marketplace_2 ? al("plugin marketplace update", marketplace_2) : null,
      Pe = !1,
      ge = marketplace_2 && !le ? `. Your local copy may be out of date${ue ? ` \u2014 try \`${ue}\`` : " \u2014 update it from /plugin > Marketplaces"}.` : "";
    return m("plugin_marketplace_resolve", P ? "marketplace_policy_blocked" : K ? "refresh_failed_stale_lookup" : "not_found", {
      scoped: marketplace_2 !== void 0
    }), {
      success: !1,
      message: `Plugin "${F}" not found in ${Z}${ge}${""}${""}${te}${fe}`,
      failureCode: P ? "marketplace_policy_blocked" : K ? "not_found_stale_catalog" : "not_found"
    };
  }
  let entry_2 = ae,
    pluginId_7 = `${entry_2.name}@${marketplaceName_2}`;
  if (P) m("plugin_marketplace_resolve", "marketplace_policy_blocked", {
    scoped: !0
  });else _("plugin_marketplace_resolve", {
    scoped: marketplace_2 !== void 0
  });
  if (D?.versionSpec === void 0 && (await LQn(pluginId_7, scope_3, storageV5_3))) {
    let Z = [],
      ue = Z.length > 0 ? Z.flatMap(([, Y]) => Y) : void 0,
      Pe = void 0,
      ge = [],
      _e = () => yvr(pluginId_7, entry_2, storageV5_3).then(Y => Y.ok ? void 0 : Y.refusal),
      Ie = await zho(pluginId_7, scope_3, k1e(scope_3), storageV5_3),
      Ce = await T7e(pluginId_7, storageV5_3),
      w = null,
      v = Y => {
        let oe = o0(Y);
        return oe !== pm && !(oe !== void 0 && Rp(oe));
      },
      ee = Y => {
        let oe = new Map();
        for (let Re of Y) {
          let Be = o0(Re.pluginId);
          oe.set(Be, [...(oe.get(Be) ?? []), dn(Re.pluginId)]);
        }
        return new Intl.ListFormat("en", {
          type: "conjunction"
        }).format([...oe].map(([Re, Be]) => `${(Re !== void 0 ? Tn(Re) : "") || ""} (${Be.join(", ")})`));
      },
      re = o0(pluginId_7) !== void 0 && v(pluginId_7),
      De = re ? [] : ge.filter(item => !v(item.pluginId)),
      ye = re ? [] : ge.filter(item => v(item.pluginId)),
      Fe = "",
      Ee = I(ge.length, "other", "others"),
      ve = await sn({
        pluginId: pluginId_7,
        entry: entry_2,
        marketplaceName: marketplaceName_2,
        marketplaceInstallLocation: marketplaceInstallLocation_2,
        scope: scope_3,
        projectPath: k1e(scope_3),
        storageV5: storageV5_3
      }),
      Ue = `${an(pluginId_7, scope_3, ve)}${Ce?.suffix ?? ""}`,
      $e = /[.?]$/.test(Ue) ? " " : ". ",
      Ne = "";
    return {
      success: !0,
      message: `Plugin ${Ne === "" ? `"${pluginId_7}"` : dn(pluginId_7)} is already installed (scope: ${scope_3})${Ie ? " \u2014 marked as manually installed" : ""}${Ue}${Ne}${ln(replaceInstalledCopy === !0 && ge.length === 0, `${Ue}${Ne}`)}`,
      pluginId: pluginId_7,
      pluginName: entry_2.name,
      scope: scope_3,
      installedVersion: ve.installedVersion,
      availableVersion: ve.availableVersion
    };
  }
  let consentedEntryHelper;
  if (shownEntryHelper !== void 0) consentedEntryHelper = shownEntryHelper;else if (consentedEntryHelper = await XXe(pluginId_7, entry_2, storageV5_3), consentedEntryHelper !== null) throw new $3(`${mSn(consentedEntryHelper)}
This install runs that command; confirm it by running \`claude plugin install\` in a terminal (or with -y/--yes).`, "entry_helper_unconfirmed");
  let A = (H() && storageV5_3 !== void 0 ? await lv(storageV5_3) : bk()).plugins[pluginId_7],
    ke = A?.some(Z => Z.scope === scope_3 && pw(Z)) === !0,
    T = A?.some(pw) === !0 && Pn(pluginId_7, void 0, kn()).effective === !0,
    R = await Dxt({
      pluginId: pluginId_7,
      entry: entry_2,
      scope: scope_3,
      marketplaceInstallLocation: marketplaceInstallLocation_2,
      trigger: "cli",
      explicit: !0,
      consentedEntryHelper: consentedEntryHelper,
      commandSourceConsent: i !== void 0 ? {
        kind: "shown",
        command: i,
        pluginId: pluginId_7
      } : Gn(pluginId_7, entry_2.source, A),
      replaceInstalledCopy: replaceInstalledCopy,
      replaceOnlyPluginIds: replaceOnlyPluginIds,
      switchTargetMarkedInItsOwnWalk: switchTargetMarkedInItsOwnWalk,
      switchWalkNotFresh: switchWalkNotFresh,
      storageV5: storageV5_3
    });
  if (!R.ok) switch (R.reason) {
    case "installed-from-other-marketplace":
    case "more-installed-than-shown":
    case "fewer-installed-than-shown":
    case "switch-needs-fresh-listing":
    case "directory-pin-unsatisfied":
    case "directory-binding-unreadable":
    case "directory-identity-changed":
      if (!1) switch (R.reason) {
        case "switch-needs-fresh-listing":
        case "installed-from-other-marketplace":
        case "more-installed-than-shown":
        case "fewer-installed-than-shown":
        case "directory-pin-unsatisfied":
        case "directory-binding-unreadable":
        case "directory-identity-changed":
      }
      return {
        success: !1,
        message: `Failed to install plugin "${pluginId_7}"`,
        failureCode: "dependency_resolution_failed"
      };
    case "local-source-no-location":
      return {
        success: !1,
        message: `Cannot install local plugin "${R.pluginName}" without marketplace install location`,
        failureCode: "local_source_no_location"
      };
    case "unrecordable-plugin-id":
      return {
        success: !1,
        message: ken(R.pluginId, pluginId_7, R.pluginId === pluginId_7 ? {
          pluginName: entry_2.name,
          marketplaceName: marketplaceName_2
        } : void 0),
        failureCode: "invalid_plugin_id"
      };
    case "installed-list-held":
      return {
        success: !1,
        message: `Plugin "${Pt(pluginId_7)}" was not installed: ${a3(R.held)}`,
        failureCode: "install_records_unreadable"
      };
    case "settings-write-failed":
      return {
        success: !1,
        message: `Failed to update settings: ${R.message}`,
        failureCode: "settings_write_failed"
      };
    case "resolution-failed":
      return {
        success: !1,
        message: hvr(R.resolution),
        failureCode: "dependency_resolution_failed"
      };
    case "blocked-by-policy":
      return {
        success: !1,
        ...rn(R)
      };
    case "dependency-blocked-by-policy":
      return {
        success: !1,
        message: `Plugin "${R.pluginName}" depends on "${R.blockedDependency}", which is blocked by your organization's policy`,
        failureCode: "dependency_policy_blocked"
      };
    case "marketplace-blocked-by-policy":
      return {
        success: !1,
        ...rn(R)
      };
    case "dependency-marketplace-blocked-by-policy":
      return {
        success: !1,
        message: `Plugin "${R.pluginName}" depends on "${R.blockedDependency}" from marketplace "${R.marketplaceName}", which is blocked by your organization's policy`,
        failureCode: "dependency_policy_blocked"
      };
    case "plugin-directory-unavailable":
      if (!1) switch (R.reason) {
        case "plugin-directory-unavailable":
      }
      return {
        success: !1,
        message: `Failed to install plugin "${Pt(pluginId_7)}"`,
        failureCode: "dependency_resolution_failed"
      };
    case "range-conflict":
      {
        let Z = R.dep === pluginId_7 ? "Plugin" : "Dependency";
        return {
          success: !1,
          failureCode: "dependency_version_conflict",
          message: fJt(Z, R.dep, R.ranges, R.why, R.installed)
        };
      }
    case "no-matching-tag":
      {
        let Z = R.dep === pluginId_7 ? "Plugin" : "Dependency";
        return {
          success: !1,
          message: z0n(Z, R.dep, R.range),
          failureCode: "dependency_version_conflict"
        };
      }
  }
  let pe = al("plugin enable", pluginId_7),
    z = pe ? ` \u2014 enable it with: ${pe}` : " \u2014 enable it in /plugin",
    de = R.installedDisabled.includes(pluginId_7) ? R.installedDisabledByDefault.includes(pluginId_7) ? `. This plugin is disabled by default${z}` : `. This plugin is disabled in your settings${z}` : "",
    q = !ne ? "" : `. Warning: ${ne} \u2014 installed from the cached catalog, so the version may be stale`,
    V = "",
    Q = "",
    switched,
    Le = `Successfully installed plugin: ${pluginId_7} (scope: ${scope_3})${R.depNote}${de}${q}${Q}${V === "" ? "" : `. ${V}`}${X}`;
  return {
    success: !0,
    message: `${Le}${ln(replaceInstalledCopy === !0 && R.replacedCopies === void 0, Le)}`,
    pluginId: pluginId_7,
    pluginName: entry_2.name,
    scope: scope_3,
    ...(switched && {
      switched: switched
    })
  };
}
function ln(e, n) {
  return "";
}
function dn(e) {
  return Hm(cn(e, 200)) || "";
}
function Tn(e) {
  return e === pm ? Odn(e) : Hm(cn(e, 64));
}
function In({
  refreshWarning: refreshWarning,
  directoryRefreshFailed: directoryRefreshFailed
}, i) {
  return refreshWarning === void 0 ? i : `${i} Warning: ${refreshWarning} \u2014 version shown may be stale.`;
}
function xe(e, n) {
  return In(e, `${e.pluginName} is already at the latest version (${n}).`);
}
async function due(e, scope_4 = "user", deleteDataDir = !0, storageV5_4, {
  settingsStillOn = "refuse"
} = {}) {
  Ze(scope_4), e = aD(e);
  let message_3 = Qe(e, M6(e).marketplace, "uninstall");
  if (message_3 !== void 0) return {
    success: !1,
    message: message_3,
    failureCode: Xe(e, M6(e).marketplace)
  };
  let h = await n9(storageV5_4);
  if (h !== void 0) return {
    success: !1,
    message: `Plugin "${Pt(e)}" was not uninstalled: ${a3(h)}`,
    failureCode: "install_records_unreadable"
  };
  let {
      enabled: enabled,
      disabled: disabled
    } = await mS(storageV5_4),
    b = [...enabled, ...disabled],
    u = bn(e, b),
    F = T0(scope_4),
    M = he(F),
    pluginId_8,
    pluginName,
    d = dm(),
    ae = Object.keys(d.plugins),
    E = k1e(scope_4);
  if (u) {
    let g = Object.keys(M?.enabledPlugins ?? {}),
      D = u.name.toLowerCase(),
      x = e.includes("@"),
      f = [...g.filter(item => item === e), ...g.filter(item => Zp(item, e)), ...(x ? [] : [...g.filter(item => item === u.name), ...g.filter(item => item.startsWith(`${u.name}@`)), ...g.filter(item => item.toLowerCase() === D), ...g.filter(item => item.toLowerCase().startsWith(`${D}@`))]), x ? e : u.name];
    pluginId_8 = x && (d.plugins[e] ?? []).length > 0 ? e : f.find(item => {
      let ke = LR(ae, item) ?? item;
      return (d.plugins[ke] ?? []).some(item => item.scope === scope_4 && item.projectPath === E);
    }) ?? f[0], pluginName = u.name;
  } else {
    let g = Fn(e, scope_4, E);
    if (!g) {
      let D = await fn(e, scope_4, deleteDataDir, storageV5_4);
      if (D !== void 0) return D;
      return {
        success: !1,
        message: `Plugin "${e}" not found in installed plugins`,
        failureCode: "not_installed"
      };
    }
    pluginId_8 = g.pluginId, pluginName = g.pluginName;
  }
  pluginId_8 = LR(ae, pluginId_8) ?? pluginId_8;
  let j = d.plugins[pluginId_8],
    le = j?.find(g => g.scope === scope_4 && g.projectPath === E);
  if (!le) {
    let {
      scope: g
    } = pSn(pluginId_8);
    if (g !== scope_4 && j && j.length > 0) {
      if (g === "project" && DQn(pluginId_8)) {
        let D = al("plugin disable", e, "--scope local");
        return {
          success: !1,
          message: `Plugin "${e}" is enabled at project scope (.claude/settings.json, shared with your team). To disable just for you${D ? `: ${D}` : ", use claude plugin disable with --scope local"}`,
          failureCode: "enabled_at_project_scope",
          installedScope: g
        };
      }
      return {
        success: !1,
        message: `Plugin "${e}" is installed in ${g} scope, not ${scope_4}. Use --scope ${g} to uninstall.`,
        failureCode: "not_installed_at_scope",
        installedScope: g
      };
    }
    if ((j?.length ?? 0) === 0) {
      let D = await fn(e, scope_4, deleteDataDir, storageV5_4);
      if (D !== void 0) return D;
    }
    return {
      success: !1,
      message: `Plugin "${e}" is not installed in ${scope_4} scope. Use --scope to specify the correct scope.`,
      failureCode: "not_installed_at_scope"
    };
  }
  let installPath = le.installPath,
    installedOthers = Object.entries(d.plugins).flatMap(([g, D]) => g !== pluginId_8 && Zp(g, pluginId_8) && D.length > 0 ? [g] : []),
    {
      error: error_2
    } = await Ha(F, g => {
      if (tFn(g?.enabledPlugins ?? {}, pluginId_8).length === 0) return null;
      let enabledPlugins = {
          ...g?.enabledPlugins
        },
        x = LR(Object.keys(enabledPlugins), pluginId_8) ?? pluginId_8;
      if (x === pluginId_8 || !installedOthers.some(item => Zp(item, x))) enabledPlugins[x] = void 0;
      return {
        enabledPlugins: enabledPlugins
      };
    }, void 0, storageV5_4);
  zp(storageV5_4);
  let P = !1,
    olderLocalSettingsSkippedNote;
  if (!P && settingsStillOn === "refuse") {
    let {
      readsBack: readsBack,
      file: file,
      notReadOnANetworkPath: notReadOnANetworkPath
    } = await pho(F, pluginId_8, installedOthers, !0);
    if (notReadOnANetworkPath !== void 0) return {
      success: !1,
      message: un(pluginName, "network-path", notReadOnANetworkPath[0], error_2),
      failureCode: "settings_still_on",
      pluginId: pluginId_8,
      scope: scope_4
    };
    if (readsBack === "unreadable" && file !== void 0 && file === Nv() && (await Ln(file))) olderLocalSettingsSkippedNote = `${file} (an older local settings file) is not JSON, so it was not checked: as it is, Claude Code ignores it and it switches nothing on. If you repair it, take "${Pt(pluginName)}" out of its "enabledPlugins" if it is there.`;else if (readsBack === "on" || readsBack === "unreadable") return {
      success: !1,
      message: un(pluginName, readsBack, file, error_2),
      failureCode: "settings_still_on",
      pluginId: pluginId_8,
      scope: scope_4
    };
  }
  await Ten(pluginId_8, scope_4, E, storageV5_4);
  let {
      dataDirKept: dataDirKept,
      directoryBindingKept: directoryBindingKept,
      optionsRemoved: optionsRemoved,
      savedKept: U
    } = await Mn({
      pluginId: pluginId_8,
      installPath: installPath,
      deleteDataDir: deleteDataDir,
      scope: scope_4,
      storageV5: storageV5_4,
      registry: dm(),
      installedOthers: installedOthers
    }),
    X = hCt(pluginId_8, b),
    te = khr(X),
    note = U === void 0 ? void 0 : Un(pluginName, deleteDataDir);
  return {
    success: !0,
    message: `Successfully uninstalled plugin: ${pluginName} (scope: ${scope_4})${te}${directoryBindingKept === void 0 ? "" : `. ${pn(directoryBindingKept)}`}${note === void 0 ? "" : `. ${note}`}${olderLocalSettingsSkippedNote === void 0 ? "" : `${note === void 0 ? "." : ""} ${olderLocalSettingsSkippedNote}`}`,
    pluginId: pluginId_8,
    pluginName: pluginName,
    scope: scope_4,
    ...(U !== void 0 && note !== void 0 && {
      savedKept: {
        reason: U,
        note: note
      }
    }),
    ...(olderLocalSettingsSkippedNote !== void 0 && {
      olderLocalSettingsSkippedNote: olderLocalSettingsSkippedNote
    }),
    dataDirKept: dataDirKept || directoryBindingKept?.dataLeftInPlace === !0,
    ...(directoryBindingKept !== void 0 && {
      directoryNameNote: pn(directoryBindingKept)
    }),
    ...(optionsRemoved && {
      optionsRemoved: !0
    }),
    ...(directoryBindingKept?.liveHolder !== void 0 && directoryBindingKept.liveHolder !== pluginId_8 && {
      dataFolderUser: directoryBindingKept.liveHolder
    }),
    reverseDependents: X.length > 0 ? X : void 0
  };
}
function un(e, n, i, s) {
  let o = Pt(e),
    file_2 = i ?? "that settings file",
    h = s ? `, and the settings change failed (${s.message})` : "";
  if (n === "network-path") {
    let y = fho({
      source: "otherFolder",
      file: file_2,
      readsBack: "not-read-here",
      notReadBecause: "network-path"
    });
    return `"${o}" was not uninstalled: ${y}, so it may still switch "${o}" on${h}. It is still installed. Once that file is an ordinary file on this machine, uninstall it again.`;
  }
  if (n === "unreadable") return `"${o}" was not uninstalled: ${file_2} is there and could not be read, so it may still switch "${o}" on${h}. It is still installed. Once that file can be read and saved, uninstall it again.`;
  return s ? `"${o}" was not uninstalled: it is still switched on in ${file_2}${h}. It is still installed. Once that file can be saved, uninstall it again.` : `"${o}" was not uninstalled: it is still switched on in ${file_2}, although the settings change reported no error. It is still installed. Take it out of "enabledPlugins" in that file yourself, then uninstall it again.`;
}
async function Ln(e) {
  if (uvr(e)) return !1;
  try {
    let {
      content: content
    } = await ug(e, dh);
    if (content.trim() === "") return !1;
    try {
      return J(Jo(content)), !1;
    } catch {
      return !0;
    }
  } catch {
    return !1;
  }
}
function Bn(e) {
  return `take ${e} entries out of "pluginConfigs" in your user settings file and out of "pluginSecrets" in your credentials store yourself`;
}
function Un(e, n) {
  let i = `"${Pt(e)}"`;
  return `What ${i} saved was kept (its options, its secrets${n ? ", its usage record and its data folder" : " and its usage record"}): the list of installed plugins could not be read again, so ${i} may still be installed at another scope. If it is installed again, it will use what was kept without asking. To delete what was kept, uninstall ${i} again; if that says it is not installed, install it and then uninstall it; if it can no longer be installed, ${Bn("its")}.`;
}
async function Mn({
  pluginId: pluginId_9,
  installPath: installPath_2,
  deleteDataDir: deleteDataDir_2,
  scope: scope_5,
  storageV5: storageV5_5,
  registry: registry,
  installedOthers: installedOthers_2
}) {
  let y = registry.plugins[pluginId_9],
    c = !y || y.length === 0,
    b = [],
    u = !1;
  if (vFn(registry) === "unknown") return t(`installed_plugins.json could not be read again after an install record of ${pluginId_9} was removed, so what it saved was kept`, {
    level: "warn"
  }), {
    dataDirKept: !0,
    directoryBindingKept: void 0,
    optionsRemoved: !1,
    savedKept: "install_records_unreadable"
  };
  if (c && installPath_2 && !u && !b.some(item => {
    let d = WDt(item.installPath);
    return d !== void 0 && d === WDt(installPath_2);
  })) await jZ(installPath_2, storageV5_5);
  let dataDirKept_2 = !deleteDataDir_2 || Een(pluginId_9, registry),
    directoryBindingKept_2 = c ? await An(pluginId_9, !dataDirKept_2, [], storageV5_5, scope_5, installedOthers_2) : void 0;
  return {
    dataDirKept: dataDirKept_2,
    directoryBindingKept: directoryBindingKept_2,
    optionsRemoved: !1
  };
}
async function An(e, deleteDataDir_3, installedIds, storageV5_6, o, installedOthers_3 = []) {
  let {
    plan: plan,
    stillOn: stillOn,
    optionsGone: optionsGone,
    dataGone: dataGone,
    optionsNotGoneBecause: optionsNotGoneBecause,
    liveHolder: liveHolder,
    installsUnknown: installsUnknown,
    entry: entry_3
  } = await Mxt(e, {
    deleteDataDir: deleteDataDir_3,
    installedIds: installedIds,
    installedOthers: installedOthers_3,
    storageV5: storageV5_6
  });
  lCt([e], storageV5_6);
  return;
}
async function fn(e, n, i, s) {
  return;
}
function pn(e) {
  return "";
}
async function Ae(e, n, i, s, o) {
  let r = n ? "enable" : "disable",
    h = kn();
  e = aD(e);
  let {
    name: name_3,
    marketplace: marketplace_3
  } = M6(e);
  if (marketplace_3 === void 0 && !SI(e)) {
    let S = Idn(e, Ad),
      P = Ye(e, ["user"])?.pluginId;
    if (hF(S) && P !== void 0 && !SI(P)) return Ae(P, n, i, s, o);
    if (hF(S)) {
      let G = await mS(o);
      if (![...G.enabled, ...G.disabled].some(item => Zp(item.name, e) && !SI(item.source))) return Ae(S, n, i, s, o);
      return {
        success: !1,
        message: `Plugin "${e}" names both a built-in and another loaded plugin. Use plugin@marketplace format.`,
        failureCode: "ambiguous_marketplace"
      };
    }
    let K = Ye(e)?.pluginId;
    if (K !== void 0 && (op(xd(K)) || hF(K))) return Ae(K, n, i, s, o);
  }
  if (SI(e) || op(marketplace_3)) {
    let scope_7 = "user",
      pluginId_10 = PTr(e) ?? e,
      K = xn(pluginId_10, n);
    if (K !== void 0) return mn(pluginId_10, n, K, pluginId_10);
    let G,
      W,
      a = [],
      U = !1,
      X = !1,
      te,
      fe = !1,
      g = "";
    if (op(marketplace_3)) {
      let T = await mS(o),
        R = bn(e, [...T.enabled, ...T.disabled].filter(item => xd(item.source) === marketplace_3));
      if (R) pluginId_10 = R.source, G = R.manifest.defaultEnabled === !1;
      if (X = marketplace_3 === Gd && (R !== void 0 ? KF(R.source, R.installationPreference) : (await Ve(o)).some(item => item.required && gs(item.id) === gs(pluginId_10))), !n && X) return {
        success: !1,
        message: fSn(pluginId_10),
        failureCode: "required_by_organization"
      };
      if (!n && marketplace_3 === Wd && R === void 0) {
        let q = `${name_3}@${Gd}`,
          V = (await Ve(o)).find(item => item.required && gs(item.id) === gs(q));
        if (V !== void 0) return {
          success: !1,
          message: fSn(V.id),
          failureCode: "required_by_organization"
        };
      }
      if (!n && !s?.bypassDependentsBlock) {
        let q = ze([...T.enabled, ...T.disabled]).get(gs(pluginId_10)) ?? [];
        if (q.length > 0) return {
          success: !1,
          message: gn(M6(pluginId_10).name, q),
          failureCode: "required_by_organization",
          reverseDependents: q.map(item => item.name)
        };
      }
      let pe = T.warnings.some(item => item.type === "synced-plugin-shadowed" && gs(item.source) === gs(pluginId_10)),
        z = n && !pe ? wn(pluginId_10, R?.attributedMarketplaceName) : void 0;
      if (z !== void 0) return {
        success: !1,
        message: `Plugin "${pluginId_10}" cannot be ${r}d here: "${z}" is locked by your organization's managed settings, so this ${vn(marketplace_3)} copy is never loaded`,
        failureCode: "managed_name_locked"
      };
      if (U = R !== void 0 && Hme(fKe(), M6(pluginId_10).name, R.attributedMarketplaceName).outcome === "admitted", n && U && R !== void 0) a = [`${R.name}@${Gd}`, `${R.name}@${Wd}`].flatMap(item => ["local", "user"].flatMap(V => {
        let Q = Me(V, item, h);
        return Q?.value === !1 ? [{
          scope: V,
          key: Q.key
        }] : [];
      }));
      if (n && marketplace_3 === Gd) {
        let q = new Set(T.errors.filter(pCe).map(item => item.source)),
          V = Kvr(name_3, [...T.enabled.filter(item => !item.isBuiltin), ...T.disabled.filter(item => q.has(item.source)).map(item => ({
            ...item,
            enabled: !0
          })), ...T.enabled.filter(item => item.isBuiltin)]);
        if (V !== void 0) g = ` (a local copy, ${sr(V.source)}, currently takes precedence over the synced one \u2014 disable it in /plugin to run this copy)`;
      }
      if (n && marketplace_3 === Wd && !U) {
        let {
            name: name_4
          } = Xz(pluginId_10),
          syncedId = `${name_4}@${Gd}`,
          scopes = c5.filter(item => Me(item, pluginId_10, h)?.value === !1 && Me(item, syncedId, h) === void 0);
        if (scopes.length > 0) W = {
          syncedId: syncedId,
          scopes: scopes
        };
      }
      let de = Pn(pluginId_10, i, h);
      if (te = de.override, i) {
        if (pluginId_10 = de.atRequested?.key ?? de.found?.key ?? pluginId_10, fe = de.atRequested !== void 0, de.atRequested === void 0 && de.found && Oe[de.found.scope] > Oe[i]) return {
          success: !1,
          message: `Plugin "${pluginId_10}" is set at ${de.found.scope} scope (which overrides ${i}). Use --scope ${de.found.scope} or omit --scope to auto-detect.`,
          failureCode: "not_installed_at_scope",
          installedScope: de.found.scope
        };
        scope_7 = i;
      } else scope_7 = de.decidingScope ?? de.found?.scope ?? "user", pluginId_10 = Me(scope_7, pluginId_10, h)?.key ?? pluginId_10;
    }
    if (n && marketplace_3 === zd) {
      if (!U3()) return {
        success: !1,
        message: x0t(xa(Je(Se(), "skills"))),
        failureCode: "local_plugin_dirs_blocked"
      };
    }
    if (n && vf(pluginId_10)) return {
      success: !1,
      message: `Plugin "${pluginId_10}" is blocked by your organization's policy and cannot be enabled`,
      failureCode: "plugin_policy_blocked"
    };
    if (marketplace_3 === Gd && te && te.enabling !== n && !(X && te.source === "flagSettings")) return mn(pluginId_10, n, te.source, te.key);
    let D = T0(scope_7),
      x = n && op(marketplace_3) && D === "userSettings" && G === !1 && (marketplace_3 !== Gd || gOo(pluginId_10, qn(D, pluginId_10)) !== !1) ? void 0 : n,
      f = "";
    if (marketplace_3 === Gd) {
      let T = $n(D, pluginId_10, x),
        R = JLr(pluginId_10, T.map(({
          record: record
        }) => record)),
        pe = R?.enabled ?? G !== !0,
        z = R === void 0 ? void 0 : T[R.index]?.source;
      if (pe !== n && z !== void 0 && !(X && z !== "policySettings")) {
        let de = Yb(z),
          q = z === "localSettings" || z === "projectSettings" || z === "userSettings" ? ` (--scope ${rqn[z]})` : "";
        if (!fe) return {
          success: !1,
          message: `Plugin "${pluginId_10}" would still be ${n ? "disabled" : "enabled"} after writing ${scope_7} settings: ${de} settings govern it. Change it there${q}.`,
          failureCode: "governed_elsewhere"
        };
        f = ` (still ${n ? "disabled" : "enabled"} here: ${de} settings govern it${q})`;
      }
      if (!fs().includes(D)) f += ` (this session ignores ${Yb(D)} settings: --setting-sources)`;
    }
    for (let {
      scope: scope_6,
      key: key
    } of a) {
      if (scope_6 === scope_7 && gs(key) === gs(pluginId_10)) continue;
      let {
        error: error_3
      } = await We(T0(scope_6), key, !0, {}, o);
      if (error_3) return {
        success: !1,
        message: `Failed to ${r} plugin: ${error_3.message}`,
        failureCode: "settings_write_failed"
      };
    }
    if (!n && op(marketplace_3) && scope_7 === "project" && (fKe()?.some(T => T.enabled && gs(T.name) === gs(M6(pluginId_10).name)) ?? !1)) {
      let {
        error: error_4
      } = await We("userSettings", pluginId_10, !1, {}, o);
      if (error_4) return {
        success: !1,
        message: `Failed to ${r} plugin: ${error_4.message}`,
        failureCode: "settings_write_failed"
      };
    }
    if (W) {
      let {
        syncedId: syncedId_2,
        scopes: scopes_2
      } = W;
      for (let pe of scopes_2) {
        if (pe === scope_7) continue;
        let {
          error: error_5
        } = await We(T0(pe), syncedId_2, !1, {}, o);
        if (error_5) return {
          success: !1,
          message: `Failed to ${r} plugin: ${error_5.message}`,
          failureCode: "settings_write_failed"
        };
      }
    }
    let {
      error: error_6
    } = await We(D, pluginId_10, x, W?.scopes.includes(scope_7) ? {
      [W.syncedId]: !1
    } : {}, o);
    if (error_6) return {
      success: !1,
      message: `Failed to ${r} plugin: ${error_6.message}`,
      failureCode: "settings_write_failed"
    };
    zp(o);
    let {
      name: ke
    } = Xz(pluginId_10);
    return {
      success: !0,
      message: `Successfully ${r}d plugin: ${ke}${f}${g}`,
      pluginId: pluginId_10,
      pluginName: ke,
      scope: scope_7
    };
  }
  if (i) Ze(i);
  let pluginId_11,
    scope_9,
    F = Ye(e);
  if (i) {
    if (scope_9 = i, F) pluginId_11 = F.pluginId;else if (e.includes("@")) pluginId_11 = e;else return {
      success: !1,
      message: `Plugin "${e}" not found in settings. Use plugin@marketplace format.`,
      failureCode: "ambiguous_marketplace"
    };
  } else if (F) pluginId_11 = F.pluginId, scope_9 = F.scope;else if (e.includes("@")) pluginId_11 = e, scope_9 = "user";else return {
    success: !1,
    message: `Plugin "${e}" not found in any editable settings scope. Use plugin@marketplace format.`,
    failureCode: "ambiguous_marketplace"
  };
  if (n && vf(pluginId_11)) return {
    success: !1,
    message: `Plugin "${pluginId_11}" is blocked by your organization's policy and cannot be enabled`,
    failureCode: "plugin_policy_blocked"
  };
  let M = T0(scope_9),
    N = he(M)?.enabledPlugins?.[pluginId_11],
    C = i && F && Oe[i] > Oe[F.scope];
  if (i && N === void 0 && F && F.scope !== i && !C) return {
    success: !1,
    message: `Plugin "${e}" is installed at ${F.scope} scope, not ${i}. Use --scope ${F.scope} or omit --scope to auto-detect.`,
    failureCode: "not_installed_at_scope",
    installedScope: F.scope
  };
  let d = i && !C ? N === !0 : Yj().has(pluginId_11);
  if (n === d) return {
    success: !1,
    alreadyInGoalState: !0,
    failureCode: "already_in_goal_state",
    message: `Plugin "${e}" is already ${n ? "enabled" : "disabled"}${i ? ` at ${i} scope` : ""}`
  };
  let reverseDependents_2;
  if (!n) {
    let {
        enabled: enabled_2,
        disabled: disabled_2
      } = await mS(o),
      K = [...enabled_2, ...disabled_2],
      G = hCt(pluginId_11, K);
    if (G.length > 0) reverseDependents_2 = G;
    if (!s?.bypassDependentsBlock) {
      let U = ze(K).get(gs(pluginId_11)) ?? [];
      if (U.length > 0) return {
        success: !1,
        message: gn(or(pluginId_11).name, U),
        failureCode: "required_by_organization",
        reverseDependents: U.map(item => item.name)
      };
    }
    let W = _0t() ? K : K.filter(item => xd(item.source) !== Gd),
      reverseDependents = hCt(pluginId_11, W);
    if (reverseDependents.length > 0 && !s?.bypassDependentsBlock) {
      let {
          name: name_5
        } = or(pluginId_11),
        te = [...uco(pluginId_11, W), pluginId_11].map(item => al("plugin disable", item)),
        fe = te.every(item => item !== null) ? `, or disable everything together: ${te.join(" && ")}` : ", or disable them together in /plugin.";
      return {
        success: !1,
        message: `${name_5} is still required by ${reverseDependents.map(sr).join(", ")}. Disable ${I(reverseDependents.length, "that plugin", "those plugins")} first${fe}`,
        failureCode: "required_by_dependents",
        reverseDependents: reverseDependents
      };
    }
  }
  let E = [];
  if (n) {
    let {
        enabled: enabled_3,
        disabled: disabled_3
      } = await mS(o),
      {
        closure: closure,
        missing: missing
      } = Ehr(pluginId_11, [...enabled_3, ...disabled_3]);
    if (missing.length > 0) {
      let {
          name: name_6
        } = or(pluginId_11),
        O = missing.map(item => al("plugin install", item)),
        A = O.every(item => item !== null) ? `: ${O.join(" && ")}` : " from /plugin.";
      return {
        success: !1,
        message: `${name_6} depends on ${missing.join(", ")}, which ${I(missing.length, "is", "are")} not installed. Install ${I(missing.length, "it", "them")} first${A}`,
        failureCode: "dependency_missing"
      };
    }
    let W = new Set(enabled_3.map(item => item.source)),
      a = new Map([...enabled_3, ...disabled_3].filter(item => op(xd(item.source))).map(item => [item.source, item])),
      U = nve(),
      X = closure.filter(item => op(xd(item)) && !W.has(item) && !xdt(item, U, a.get(item)?.manifest.defaultEnabled, a.get(item)?.installationPreference));
    if (X.length > 0) {
      let {
          name: name_7
        } = or(pluginId_11),
        O = X.length,
        A = X.map(item => al("plugin enable", item)),
        ke = A.every(item => item !== null) ? `: ${A.join(" && ")}` : " in /plugin.";
      return {
        success: !1,
        message: `${name_7} depends on ${X.join(", ")}, ${I(O, "a local copy that is", "local copies that are")} currently disabled. Enable ${I(O, "it", "them")} first${ke}`,
        failureCode: "dependency_disabled"
      };
    }
    let te = closure.filter(item => !op(xd(item))),
      fe = te.filter(item => vf(item));
    if (fe.length > 0) {
      let {
        name: name_8
      } = or(pluginId_11);
      return {
        success: !1,
        message: `${name_8} depends on ${fe.join(", ")}, which ${I(fe.length, "is", "are")} blocked by your organization's plugin policy. Ask an admin to allow ${I(fe.length, "it", "them")}.`,
        failureCode: "dependency_policy_blocked"
      };
    }
    let g = [...c5].sort((itemA, itemB) => Oe[itemB] - Oe[itemA]),
      D = [];
    for (let dep of te) for (let scope_8 of g) {
      if (Oe[scope_8] <= Oe[scope_9]) continue;
      let A = he(T0(scope_8))?.enabledPlugins?.[dep];
      if (A === void 0) continue;
      if (A === !1) D.push({
        dep: dep,
        scope: scope_8
      });
      break;
    }
    if (D.length > 0) {
      let {
          name: name_9
        } = or(pluginId_11),
        O = D.map(item => `${item.dep} (${item.scope} scope)`).join(", "),
        A = L(D.map(item => item.scope)),
        ke = A.length === 1 ? `, or use --scope ${A[0]} to write where the override lives` : "";
      return {
        success: !1,
        message: `${name_9} depends on ${O}, which ${I(D.length, "is", "are")} disabled there. Enable ${I(D.length, "it", "them")} at that scope${ke}.`,
        failureCode: "dependency_disabled"
      };
    }
    let x = kGe(M);
    E = te.filter(item => !x.has(item));
  }
  let {
    error: error_7
  } = await Ha(M, S => ({
    enabledPlugins: {
      ...S?.enabledPlugins,
      [pluginId_11]: n,
      ...Object.fromEntries(E.map(item => [item, !0]))
    }
  }), void 0, o);
  if (error_7) return {
    success: !1,
    message: `Failed to ${r} plugin: ${error_7.message}`,
    failureCode: "settings_write_failed"
  };
  if (zp(o), n) k0n([pluginId_11, ...E], o), Ulo([pluginId_11, ...E], o);
  let {
      name: le
    } = or(pluginId_11),
    ne = khr(reverseDependents_2),
    se = E.length > 0 ? ` (also enabled ${E.length} ${I(E.length, "dependency", "dependencies")}: ${E.map(item => or(item).name).join(", ")})` : "";
  return {
    success: !0,
    message: `Successfully ${r}d plugin: ${le} (scope: ${scope_9})${ne}${se}`,
    pluginId: pluginId_11,
    pluginName: le,
    scope: scope_9,
    reverseDependents: reverseDependents_2
  };
}
async function KXe(e, n, i) {
  return Ae(e, !0, n, void 0, i);
}
async function YXe(e, n, i) {
  return Ae(e, !1, n, void 0, i);
}
async function NYr(e) {
  let n = Yj();
  await SGe();
  let i = await Ve(e),
    s = L(i.map(item => item.id)),
    o = new Set(i.filter(item => item.required).map(item => gs(item.id))),
    r = o.size > 0 && Axr() ? await mS(e).then(a => [...a.enabled, ...a.disabled]) : [],
    h = new Set(r.filter(item => xd(item.source) === Wd).map(item => gs(item.source))),
    y = a => {
      let U = aD(a),
        X = xd(U);
      if (X === Wd) {
        if (h.has(gs(U))) return !1;
      } else if (X !== Gd) return !1;
      let te = U.slice(0, U.lastIndexOf("@"));
      return o.has(gs(`${te}@${Gd}`));
    },
    c = Ztt(),
    u = (a => new Set(a.flatMap(({
      record: record_2
    }) => Object.keys(record_2 ?? {}).map(gs))))(c),
    F = s.filter(item => !u.has(gs(item)) && !y(item)),
    M = a => new Set(a.flatMap(({
      record: record_3
    }) => Object.keys(record_3 ?? {}))),
    N = M(c),
    C = M(c.filter(({
      source: source_3
    }) => GF.includes(source_3))),
    d = Qle().enabled.map(item => item.source).filter(item => !(hF(item) ? C : N).has(item)),
    ae = new Set(ze(r).keys()),
    E = a => ae.has(gs(aD(a))),
    j = [...n.keys(), ...F, ...d],
    le = L(j.filter(item => !y(item) && E(item))),
    ne = [...F, ...d].filter(item => !E(item)),
    se = [...n.keys()].filter(item => !y(item) && !E(item)),
    S = o.size,
    P = le.length > 0 ? ` and ${le.length} ${I(le.length, "plugin")} ${I(S, "it depends", "they depend")} on` : "",
    K = S > 0 ? ` (skipped ${S} required by your organization${P})` : "";
  if (se.length === 0 && ne.length === 0) return {
    success: !0,
    message: `No enabled plugins to disable${K}`
  };
  let G = [],
    W = [];
  for (let a of se) {
    let U = await Ae(a, !1, void 0, {
      bypassDependentsBlock: !0
    }, e);
    if (U.success) G.push(a);else W.push(sr(`${a}: ${U.message}`));
  }
  for (let a of ne) {
    let {
      error: error_8
    } = await Ha("userSettings", X => ({
      enabledPlugins: {
        ...X?.enabledPlugins,
        [a]: !1
      }
    }), void 0, e);
    if (error_8) W.push(sr(`${a}: ${error_8.message}`));else G.push(a);
  }
  if (ne.length > 0) zp(e);
  if (W.length > 0) return {
    success: !1,
    message: `Disabled ${G.length} ${I(G.length, "plugin")}${K}, ${W.length} failed:
${W.join(`
`)}`,
    failureCode: "partial_failure"
  };
  return {
    success: !0,
    message: `Disabled ${G.length} ${I(G.length, "plugin")}${K}`
  };
}
async function Ve(e) {
  return (await Promise.all(IBe().map(async item => {
    let s = await qvr(item, e);
    if (s === void 0) return [];
    let id_2 = `${s}@${Gd}`,
      r = await jln(Ke(item));
    return [{
      id: id_2,
      required: KF(id_2, r.installationPreference) && wn(id_2, r.marketplaceName) === void 0
    }];
  }))).flat();
}
function ze(e) {
  let n = new Map();
  if (!Axr()) return n;
  for (let i of e) {
    if (!KF(i.source, i.installationPreference)) continue;
    for (let s of Ehr(i.source, e).closure) {
      let o = gs(s);
      n.set(o, [...(n.get(o) ?? []), i]);
    }
  }
  return n;
}
function gn(e, n) {
  return `${e} is needed by ${n.map(item => sr(item.name)).join(", ")}, which ${I(n.length, "is", "are")} required by your organization, so it can't be disabled here. Contact your admin to change it.`;
}
function fSn(e) {
  return `Plugin "${e}" is required by your organization and can't be disabled here. Contact your admin to change it.`;
}
async function E1e(e, scope_10, i = {}, s) {
  let o;
  try {
    o = await jn(e, scope_10, i, s);
  } catch (error) {
    let y = {};
    if (error instanceof Rl) {
      let failureCode = error instanceof $3 ? error.failureCode : "command_source_refused";
      if (qe[failureCode] === "sad") p("plugin_update_op", failureCode, y);else m("plugin_update_op", failureCode, y);
      return {
        outcome: "failed",
        message: error.message,
        scope: scope_10,
        failureCode: failureCode
      };
    }
    throw m("plugin_update_op", "exception", y), error;
  }
  let r = {};
  switch (o.outcome) {
    case "failed":
      if (o.failureCode !== void 0 && qe[o.failureCode] === "sad") p("plugin_update_op", o.failureCode, r);else m("plugin_update_op", o.failureCode ?? "op_failed", r);
      break;
    case "skipped":
      p("plugin_update_op", o.skipReason ?? "skipped", r);
      break;
    case "up_to_date":
    case "updated":
      if (o.refreshFailed) p("plugin_update_op", o.refreshRefusedByPolicy ? "marketplace_refresh_policy_refused" : "marketplace_refresh_failed", r);else _("plugin_update_op", {
        already_up_to_date: o.outcome === "up_to_date",
        version_unknown: o.newVersion === "unknown",
        ...r
      });
      break;
  }
  return o;
}
async function jn(e, scope_11, {
  skipMarketplaceRefresh = !1,
  skipCommandSources = !1,
  announceCommandSource: announceCommandSource,
  explicit = !1,
  consentedEntryHelper: consentedEntryHelper_2,
  onEntryHelperDisclosure: onEntryHelperDisclosure
}, storageV5_7) {
  let runEntryHelper = explicit;
  e = aD(e);
  let {
      name: u,
      marketplace: marketplace_4
    } = M6(e),
    message_4 = Qe(e, marketplace_4, "update");
  if (message_4 !== void 0) return {
    outcome: "failed",
    message: message_4,
    failureCode: Xe(e, marketplace_4)
  };
  let N = await n9(storageV5_7);
  if (N !== void 0) return {
    outcome: "failed",
    message: `Plugin "${Pt(e)}" was not updated: ${a3(N)}`,
    failureCode: "install_records_unreadable"
  };
  let C = marketplace_4,
    pluginId_12 = C ? `${u}@${C}` : e,
    ae = H() && storageV5_7 !== void 0 ? await lv(storageV5_7) : bk(),
    E = LR(Object.keys(ae.plugins), pluginId_12);
  if (E === void 0 && C === void 0) {
    let w = QLr(Object.keys(ae.plugins), u).filter(item => (ae.plugins[item]?.length ?? 0) > 0);
    if (w.length > 1) return {
      outcome: "failed",
      message: `Plugin "${cn(u, 200)}" is installed from more than one marketplace. Include the marketplace name to pick one: ${w.map(item => `\`claude plugin update ${cn(item, 200)}\``).join(" or ")}`,
      scope: scope_11,
      failureCode: "ambiguous_marketplace"
    };
    if (w.length === 0) return {
      outcome: "failed",
      message: `Plugin "${cn(u, 200)}" is not installed`,
      scope: scope_11,
      failureCode: "not_installed"
    };
    E = w[0];
  }
  if (E) pluginId_12 = E, {
    marketplace: C
  } = or(pluginId_12);
  let j = E ? ae.plugins[E] : void 0,
    le = await yco(pluginId_12, j),
    ne = kDe({
      pluginId: pluginId_12,
      pluginName: u,
      source: void 0,
      boundByRecord: j?.some(w => w.directoryRepositoryKey !== void 0) === !0,
      action: "updated"
    });
  if (ne !== void 0 && !ne.ok) return {
    outcome: "failed",
    message: ne.message,
    pluginId: pluginId_12,
    scope: scope_11,
    failureCode: "not_found"
  };
  let refreshWarning_2,
    S = !1,
    P,
    directoryNotChecked = !1;
  if (vf(pluginId_12)) return {
    outcome: "failed",
    message: `Plugin "${cn(pluginId_12, 200)}" is blocked by your organization's policy and was not updated`,
    pluginId: pluginId_12,
    scope: scope_11,
    failureCode: "plugin_policy_blocked"
  };
  if (C === GS) {
    if (!Cen()) return {
      outcome: "failed",
      message: message_2,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: "npm_marketplace_disabled"
    };
    if (!j || j.length === 0) return {
      outcome: "failed",
      message: `Plugin "${u}" is not installed`,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: "not_installed"
    };
    return Kn(pluginId_12, u, scope_11 ?? hn(j), j, storageV5_7);
  }
  if (C) {
    let v = (await Dc(storageV5_7))[C]?.source,
      ee = !v && C === pm && bFn();
    if (XL(ee ? {
      source: "pluginDirectory"
    } : v)) return {
      outcome: "failed",
      message: `Plugin "${u}" is from marketplace "${C}", which is blocked by your organization's policy`,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: "marketplace_policy_blocked"
    };
    if (directoryNotChecked = !v && C === pm && !bFn(), !skipMarketplaceRefresh && (v && (v.source === "github" || v.source === "git" || v.source === "url" || v.source === "claudeai" || v.source === "pluginDirectory") || !v && C === pm && bFn())) try {
      await jW(C, storageV5_7, void 0, {
        skipIfRecent: !0
      });
    } catch (error) {
      if (S = error instanceof Rl, refreshWarning_2 = S ? "marketplace not refreshed \u2014 your organization's managed settings forbid its headersHelper (the version shown is from the cached catalog; ask your admin)" : `marketplace not refreshed (${Zx(l(error))})`, error instanceof iqn) P = Zx(error.message);
      t(`Failed to refresh marketplace '${C}' before update; using cached data: ${l(error)}`, {
        level: "warn"
      });
    }
  }
  let G = {
      pluginName: u,
      refreshWarning: refreshWarning_2,
      directoryRefreshFailed: C === pm && !S,
      directoryNotChecked: directoryNotChecked
    },
    W = skipMarketplaceRefresh || P !== void 0 ? await WZ(pluginId_12, storageV5_7) : await cB(pluginId_12, storageV5_7, "update");
  if (!W) return {
    outcome: "failed",
    message: skipMarketplaceRefresh ? `Plugin "${u}" is not in the locally cached marketplace catalog; it was not re-resolved.` : `Plugin "${u}" not found`,
    pluginId: pluginId_12,
    scope: scope_11,
    failureCode: skipMarketplaceRefresh ? "not_cached" : "not_found"
  };
  let {
      entry: entry_4
    } = W,
    {
      marketplaceInstallLocation: marketplaceInstallLocation_3
    } = W;
  if (!j || j.length === 0) return {
    outcome: "failed",
    message: `Plugin "${u}" is not installed`,
    pluginId: pluginId_12,
    scope: scope_11,
    failureCode: "not_installed"
  };
  if (scope_11 === void 0) scope_11 = hn(j);
  let X = k1e(scope_11),
    te = j.filter(item => item.scope === scope_11),
    fe = te.find(pw);
  if (!fe && te.length > 1) t(`updatePluginOp: ${te.length} ${scope_11}-scope installs, none match CWD '${X}'; updating '${te[0]?.projectPath}' only`, {
    level: "warn"
  });
  let g = fe ?? te[0];
  if (!g) {
    let w = X ? `${scope_11} (${X})` : scope_11;
    return {
      outcome: "failed",
      message: `Plugin "${u}" is not installed at scope ${w}`,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: "not_installed_at_scope"
    };
  }
  let projectPath_2 = g.projectPath,
    command;
  if (typeof entry_4.source === "object" && entry_4.source.source === "command") {
    let w = WT(),
      v = w || skipCommandSources,
      ee = LR(await nOe(), pluginId_12) !== void 0,
      ie = w || skipCommandSources && !ee,
      extra = scope_11 === "user" ? void 0 : `--scope ${scope_11}`;
    command = v ? void 0 : await announceCommandSource?.(pluginId_12, entry_4, g.sourceCommand);
    let De = announceCommandSource !== void 0 && !bNe() && g.sourceCommand === r0(entry_4.source);
    if (v || command === void 0 && !De && !ee) return {
      outcome: "failed",
      message: skipCommandSources && !ie ? `${cn(u, 200)} is installed by running a command, which the background marketplace update never runs; it is left to the per-session re-resolve (when that is enabled) or an explicit update \u2014 ${Fk("plugin update", pluginId_12, {
        extra: extra,
        fallback: "a per-plugin update reviews it"
      })}.` : w ? HV : `${cn(u, 200)} is disabled, so the command that installs it was not run. Enable it first, then ${Fk("plugin update", pluginId_12, {
        extra: extra,
        fallback: "update it explicitly"
      })}.`,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: skipCommandSources && !ie ? "command_source_skipped" : "command_source_inactive"
    };
  }
  let f = ce(),
    O = g.version,
    {
      enabled: enabled_4,
      disabled: disabled_4
    } = skipMarketplaceRefresh ? await Ti(storageV5_7) : await mS(storageV5_7),
    T = dco(pluginId_12, [...enabled_4, ...disabled_4]),
    R = T.filter(item => item.constraint.version !== void 0),
    pe = T.map(item => item.constraint.version).filter(item => item !== void 0),
    z,
    de = "",
    q = await Dc(storageV5_7);
  if (pe.length > 0) {
    let w = pJt(pe);
    if (!w.ok) return {
      outcome: "skipped",
      message: `Skipped \u2014 ${fJt("Plugin", pluginId_12, pe, w.reason)}`,
      pluginId: pluginId_12,
      scope: scope_11,
      blockedBy: R.map(item => item.plugin.source),
      oldVersion: O,
      skipReason: "pinner_blocked"
    };
    let v = q[C ?? ""]?.source,
      ee = ume(entry_4.source) ?? (typeof entry_4.source === "string" ? uen(v) : null);
    if (ee !== null && w.range !== "*" && !pluginId_12.endsWith(`@${pm}`)) {
      let ie = await oFn(ee, entry_4.name, w.range);
      if (ie === null) t(`updatePluginOp(${pluginId_12}): no ${entry_4.name}--v* tag satisfying ${w.range}; falling back to HEAD + post-fetch guard`);else if (ie.version === g.resolvedVersion && ie.sha === g.gitCommitSha) return {
        outcome: "up_to_date",
        message: In(G, `${u} is already at the latest version satisfying ${pe.join(", ")} (${ie.version}, required by ${R.map(item => item.plugin.name).join(", ")}).`),
        pluginId: pluginId_12,
        newVersion: g.version,
        oldVersion: O,
        scope: scope_11,
        refreshFailed: refreshWarning_2 !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: S || void 0
      };else if (z = ie, de = ` (highest tag satisfying ${pe.join(", ")} from ${R.map(item => item.plugin.name).join(", ")})`, typeof entry_4.source === "string") {
        let source_4 = rFn(v, entry_4.source);
        if (source_4 !== null) entry_4 = {
          ...entry_4,
          source: source_4
        };
      }
    }
  }
  let V,
    Q,
    archiveSha256,
    newVersion,
    Le,
    Z = !1,
    gitCommitSha,
    Pe,
    ge;
  {
    let source_5 = entry_4.source,
      v = typeof source_5 === "object" && source_5.source === "claudeai",
      claudeaiPluginId = g.claudeaiPluginId;
    if (claudeaiPluginId !== void 0 && (!v || source_5.pluginId !== claudeaiPluginId) || claudeaiPluginId === void 0 && v) return {
      outcome: "failed",
      message: claudeaiPluginId === void 0 ? `${u} is listed by a claude.ai-hosted marketplace but its install record no longer says which claude.ai plugin it came from \u2014 not updated. Uninstall and install it again to re-pin it.` : `${u} was installed from a claude.ai-hosted marketplace, but "${C}" now lists ${v ? "a different claude.ai plugin" : "another source"} under that name \u2014 not updated. Uninstall and install it again to switch to what the marketplace lists now, or remove it.`,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: "claudeai_identity_changed"
    };
  }
  let _e = pluginId_12.endsWith(`@${pm}`),
    boundByRecord = Gho(pluginId_12, j, le).length > 0,
    Ce = kDe({
      pluginId: pluginId_12,
      pluginName: u,
      source: entry_4.source,
      boundByRecord: boundByRecord,
      action: "updated"
    });
  if (!Ce.ok) return {
    outcome: "failed",
    message: Ce.message,
    pluginId: pluginId_12,
    scope: scope_11,
    failureCode: "directory_commit_mismatch"
  };
  if (typeof entry_4.source !== "string") {
    let source_6 = entry_4.source,
      pluginSource = z && (source_6.source === "github" || source_6.source === "url" || source_6.source === "git-subdir") ? {
        ...source_6,
        ref: z.ref,
        sha: z.sha
      } : source_6,
      marketplaceSource = q[C ?? ""]?.source,
      ie = o0(pluginId_12),
      trustedSettingsEntryAuth = Ske(ie, entry_4.name),
      De = source_6.source === "archive" ? eTe({
        entry: entry_4,
        archiveUrl: source_6.url,
        marketplaceSource: marketplaceSource,
        trustedSettingsEntryAuth: trustedSettingsEntryAuth
      }) : void 0,
      ye = De !== void 0 && source_6.source === "archive" ? T0t(De, source_6.url) : null,
      Fe = ye === null ? null : Rge(marketplaceSource, C),
      Ee = Fe !== null ? {
        outcome: "failed",
        message: C0t(entry_4.name, Fe),
        pluginId: pluginId_12,
        scope: scope_11,
        failureCode: Fe === "remote_policy_unconsented" ? "entry_helper_remote_policy_unconsented" : "entry_helper_disabled_by_policy"
      } : null;
    if (runEntryHelper && Ee !== null) return Ee;
    let ve = runEntryHelper && onEntryHelperDisclosure === void 0 ? Usn(consentedEntryHelper_2, ye) : null;
    if (ve !== null) return {
      outcome: "failed",
      message: Bsn(ve, entry_4.name, "update"),
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: $sn[ve]
    };
    if (!runEntryHelper && ye !== null) {
      let Y = entry_4.version ?? (source_6.source === "archive" && source_6.sha256 !== void 0 ? nFn(source_6.sha256) : void 0);
      if (Y !== void 0 && Y === O) return {
        outcome: "up_to_date",
        message: xe(G, O),
        pluginId: pluginId_12,
        newVersion: O,
        oldVersion: O,
        scope: scope_11,
        refreshFailed: refreshWarning_2 !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: S || void 0
      };
      if (Ee !== null) return Ee;
      let oe = al("plugin update", pluginId_12);
      return {
        outcome: "skipped",
        message: `Skipped \u2014 "${Pt(entry_4.name)}" fetches its archive through a headersHelper, which only runs when you update it yourself. Update it from /plugin` + (oe ? ` (or \`${oe}\`).` : "."),
        pluginId: pluginId_12,
        scope: scope_11,
        oldVersion: O,
        skipReason: "entry_helper_deferred"
      };
    }
    if (runEntryHelper && ye !== null) {
      if (onEntryHelperDisclosure !== void 0) {
        let Y = await onEntryHelperDisclosure(mSn(ye), ye, pluginId_12);
        if (Y !== "accepted") return {
          outcome: "failed",
          message: "Aborted \u2014 the headersHelper command was not confirmed, so it was not run.",
          pluginId: pluginId_12,
          scope: scope_11,
          failureCode: Y === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed"
        };
      }
    }
    if (source_6.source === "claudeai" && z === void 0 && source_6.version !== "" && source_6.version === O) return {
      outcome: "up_to_date",
      message: xe(G, O),
      pluginId: pluginId_12,
      newVersion: O,
      oldVersion: O,
      scope: scope_11,
      refreshFailed: refreshWarning_2 !== void 0 ? !0 : void 0,
      refreshRefusedByPolicy: S || void 0
    };
    let Ue = ece(pluginId_12, entry_4.source),
      $e = await mqe(pluginSource, {
        manifest: {
          name: entry_4.name
        },
        storageV5: storageV5_7,
        isDirectoryPlugin: pMe(pluginId_12),
        directoryPin: ece(pluginId_12, pluginSource) ?? null,
        archiveAuth: await Tat({
          pluginSource: pluginSource,
          pluginName: entry_4.name,
          marketplaceName: C,
          marketplaceSource: marketplaceSource,
          trustedMarketplaceAuth: bke(marketplaceSource, ie),
          trustedSettingsEntryAuth: trustedSettingsEntryAuth,
          entry: entry_4,
          runEntryHelper: runEntryHelper
        }),
        entryDeclaresComponents: jxt(entry_4),
        declaredComponentPaths: Bxt(entry_4),
        commandSourceConsent: command !== void 0 ? {
          kind: "shown",
          command: command,
          pluginId: pluginId_12
        } : {
          kind: "recorded",
          command: bNe() ? void 0 : g.sourceCommand,
          pluginId: pluginId_12
        }
      });
    if (V = $e.path, Q = $e.producerPath, archiveSha256 = $e.contentSha256, Z = !0, z?.sha !== void 0 || $e.gitCommitSha !== void 0 || boundByRecord || pluginId_12.endsWith(`@${pm}`)) gitCommitSha = z?.sha ?? $e.gitCommitSha;else if (ume(pluginSource) !== null) {
      let Y = await gke($e.path);
      gitCommitSha = Y.repo ? Y.sha ?? void 0 : null;
    } else gitCommitSha = null;
    Le = $e.manifest?.version;
    let Ne = await o3(pluginId_12, entry_4.source, $e.manifest, $e.path, {
      kind: "catalog",
      version: entry_4.version
    }, z?.sha ?? $e.gitCommitSha, $e.contentSha256);
    newVersion = z && ($e.manifest?.version || entry_4.version) ? Odt(Ne, z.sha) : Ne;
  } else {
    let w = ny(marketplaceInstallLocation_3) !== void 0 ? "system" : "workspace",
      v = await w8(pluginId_12, marketplaceInstallLocation_3, entry_4.source, q, _k(), storageV5_7, w);
    if (v.kind === "location-error") throw v.error;
    if (v.kind !== "ok") {
      let ye = hJt(v, marketplaceInstallLocation_3, entry_4.source);
      return {
        outcome: "failed",
        message: ye.message,
        pluginId: pluginId_12,
        scope: scope_11,
        failureCode: ye.code
      };
    }
    ge = v.marketplaceDir, V = v.entryPath;
    let ee = q[C ?? ""],
      ie = ee !== void 0 && Lm(ee.source);
    try {
      if (ie) await G0n(storageV5_7, V, w);else await f.stat(V);
    } catch (error) {
      if (B(error)) return {
        outcome: "failed",
        message: `Plugin source not found at ${Sl(V)}`,
        pluginId: pluginId_12,
        scope: scope_11,
        failureCode: "source_missing"
      };
      throw error;
    }
    let re;
    try {
      re = (await l3(V, entry_4.name, entry_4.source)).manifest;
    } catch {}
    Le = re?.version;
    let De = await gke(V, ge);
    if (!De.repo && C === vu) Pe = await fvr(V);
    gitCommitSha = De.repo ? De.sha ?? void 0 : Pe !== void 0 ? pvr(Pe) : null, newVersion = await o3(pluginId_12, entry_4.source, re, V, {
      kind: "catalog",
      version: entry_4.version
    }, void 0, void 0, ge);
  }
  try {
    let w = kDe({
      pluginId: pluginId_12,
      pluginName: u,
      source: entry_4.source,
      boundByRecord: boundByRecord,
      fetched: {
        gitCommitSha: gitCommitSha ?? void 0
      },
      action: "updated"
    });
    if (!w.ok) return {
      outcome: "failed",
      message: w.message,
      pluginId: pluginId_12,
      scope: scope_11,
      failureCode: "directory_commit_mismatch"
    };
    if (z === void 0 && pe.length > 0) {
      let Y = je.valid(Le) ?? je.coerce(Le)?.version,
        blockedBy = T.filter(({
          constraint: constraint
        }) => constraint.version !== void 0 && Y !== void 0 && !je.satisfies(Y, constraint.version)).map(({
          plugin: plugin
        }) => plugin.source);
      if (blockedBy.length > 0) return {
        outcome: "skipped",
        message: `Skipped \u2014 ${blockedBy.join(", ")} requires ${u} at a version range that ${Le ?? newVersion} does not satisfy`,
        pluginId: pluginId_12,
        scope: scope_11,
        blockedBy: blockedBy,
        oldVersion: O,
        skipReason: "pinner_blocked"
      };
    }
    if (newVersion === "unknown" && O !== void 0 && O !== "unknown" && (Pe?.kind === "refused" || Pe?.kind === "too-large")) return {
      outcome: "skipped",
      message: Pe.kind === "refused" ? `Skipped \u2014 ${u} stays at ${O}. Its new version comes from the official marketplace's .gcs-sha file, and that name is now a link, a folder or another special file, so it was not read.` : `Skipped \u2014 ${u} stays at ${O}. Its new version comes from the official marketplace's .gcs-sha file, which is larger than 1 MB, so it was not read.`,
      pluginId: pluginId_12,
      scope: scope_11,
      oldVersion: O,
      skipReason: "snapshot_file_refused"
    };
    let v = aF(pluginId_12, newVersion),
      ee = newVersion === "unknown",
      ie = PDe(pluginId_12, newVersion),
      re = w.reviewedCommit !== void 0 && g.gitCommitSha !== w.reviewedCommit,
      De = !ee && !re && (g.version === newVersion || g.installPath === v || g.installPath === ie),
      ye = !1;
    if (De && typeof entry_4.source === "object" && entry_4.source.source === "command") {
      let Y = JT(g.installPath, {
          trustedRoots: rve(pluginId_12, q, _k())
        }),
        absolute = Y.absolute;
      ye = Y.suspect || !(await (F3(entry_4.source) ? E0t(absolute) : absolute.endsWith(".zip") ? Od(absolute) : yme(absolute, storageV5_7))) || (F3(entry_4.source) ? await Wn(absolute, Q ?? g.sourceProducerPath) : await E0t(absolute, {
        unclassifiableIsFarm: !0
      }));
    }
    if (De && !ye) {
      if (typeof entry_4.source === "object" && entry_4.source.source === "command" && (g.sourceCommand !== r0(entry_4.source) || Q !== void 0 && g.sourceProducerPath !== Q)) await kFn(pluginId_12, scope_11, projectPath_2, g.installPath, newVersion, g.gitCommitSha, g.resolvedVersion, {
        sourceCommand: r0(entry_4.source),
        sourceProducerPath: Q ?? g.sourceProducerPath
      }, storageV5_7), sCe();
      return {
        outcome: "up_to_date",
        message: xe(G, newVersion),
        pluginId: pluginId_12,
        newVersion: newVersion,
        oldVersion: O,
        scope: scope_11,
        refreshFailed: refreshWarning_2 !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: S || void 0
      };
    }
    v = await wke(V, pluginId_12, newVersion, entry_4, ge, {
      forceOverwrite: ee || re,
      storageV5: storageV5_7
    });
    let installPath_3 = g.installPath;
    if (await kFn(pluginId_12, scope_11, projectPath_2, v, newVersion, gitCommitSha, z?.version, typeof entry_4.source === "object" && entry_4.source.source === "command" ? {
      sourceCommand: r0(entry_4.source),
      sourceProducerPath: Q ?? g.sourceProducerPath
    } : void 0, storageV5_7, typeof entry_4.source === "object" && entry_4.source.source === "claudeai" ? {
      claudeaiPluginId: entry_4.source.pluginId,
      archiveSha256: archiveSha256
    } : void 0, _e ? J6e(entry_4.source, void 0) : void 0), Q !== void 0) sCe();
    if (installPath_3 && installPath_3 !== v) {
      let Y = H() && storageV5_7 !== void 0 ? await lv(storageV5_7) : bk();
      if (!Object.values(Y.plugins).some(item => item.some(item => item.installPath === installPath_3))) await jZ(installPath_3, storageV5_7);
    }
    let Ee = projectPath_2 ? `${scope_11} (${projectPath_2})` : scope_11,
      ve = ece(pluginId_12, entry_4.source),
      Ue = ve === void 0 ? void 0 : gitCommitSha ?? ve,
      $e = pen(newVersion),
      Ne = ee && (O ?? "unknown") === "unknown" ? `Plugin "${u}" refreshed from source for scope ${Ee}. Restart to apply changes.` : `Plugin "${u}" updated from ${O || "unknown"} to ${newVersion}${de} for scope ${Ee}. Restart to apply changes.`;
    return {
      outcome: "updated",
      message: refreshWarning_2 === void 0 ? Ne : `${Ne} Warning: ${refreshWarning_2}.`,
      pluginId: pluginId_12,
      newVersion: newVersion,
      oldVersion: O,
      ...(gitCommitSha && {
        gitCommitSha: gitCommitSha
      }),
      scope: scope_11,
      refreshFailed: refreshWarning_2 !== void 0 ? !0 : void 0,
      refreshRefusedByPolicy: S || void 0,
      pinChanged: typeof g.gitCommitSha === "string" && typeof gitCommitSha === "string" && g.gitCommitSha !== gitCommitSha
    };
  } finally {
    let w = aF(pluginId_12, newVersion);
    if (Z && V !== w && !Ke(w).startsWith(Ke(V) + yn)) await f.rm(V, {
      recursive: !0,
      force: !0
    });
  }
}
function hn(e) {
  let n = e.filter(pw),
    i = n.length > 0 ? n : e;
  return ["local", "project", "user"].find(item => i.some(o => o.scope === item)) ?? "managed";
}
async function Kn(pluginId_13, packageName, scope_12, s, storageV5_8) {
  if (!s || s.length === 0) return {
    outcome: "failed",
    message: `Plugin "${packageName}" is not installed`,
    pluginId: pluginId_13,
    scope: scope_12,
    failureCode: "not_installed"
  };
  let r = k1e(scope_12),
    h = s.filter(item => item.scope === scope_12),
    y = h.find(item => item.projectPath === r) ?? h[0];
  if (!y) {
    let S = r ? `${scope_12} (${r})` : scope_12;
    return {
      outcome: "failed",
      message: `Plugin "${packageName}" is not installed at scope ${S}`,
      pluginId: pluginId_13,
      scope: scope_12,
      failureCode: "not_installed_at_scope"
    };
  }
  if (y.scope === "managed") return {
    outcome: "failed",
    message: `Plugin "${packageName}" is installed by managed settings and is not updated here`,
    pluginId: pluginId_13,
    scope: scope_12,
    failureCode: "not_installed_at_scope"
  };
  let {
      scope: scope_13,
      projectPath: projectPath_3,
      version: u,
      npmVersionSpec: F
    } = y,
    M = TFn({
      packageName: packageName,
      versionSpec: F
    }),
    workDir = Je(kg(), `${z4e("npm")}${ZEe}`),
    C;
  try {
    await ce().mkdir(workDir), C = (await Uvr(packageName, F, {
      workDir: workDir,
      registry: y.npmRegistry
    })).version;
  } finally {
    await qa(workDir).catch(() => {});
  }
  let d = F !== void 0 ? ` (tracking ${F})` : "";
  if (C === u || y.installPath === aF(pluginId_13, C)) return {
    outcome: "up_to_date",
    message: `${packageName} is already at the latest version${d} (${C}).`,
    pluginId: pluginId_13,
    newVersion: C,
    oldVersion: u,
    scope: scope_12
  };
  let source_7 = TFn({
      packageName: packageName,
      versionSpec: C
    }, y.npmRegistry).source,
    E = await mqe(source_7, {
      manifest: {
        name: M.name
      },
      storageV5: storageV5_8,
      isNpmMarketplaceLane: !0,
      directoryPin: ece(pluginId_13, source_7) ?? null
    }),
    npmResolution = E.npmResolution,
    newVersion_2 = npmResolution?.version ?? C,
    ne = aF(pluginId_13, newVersion_2);
  try {
    ne = await wke(E.path, pluginId_13, newVersion_2, M, void 0, {
      storageV5: storageV5_8
    }), await kFn(pluginId_13, scope_13, projectPath_3, ne, newVersion_2, null, void 0, void 0, storageV5_8, void 0, void 0, {
      npmVersionSpec: F,
      npmResolved: npmResolution?.tarballUrl ?? y.npmResolved,
      npmIntegrity: npmResolution?.integrity,
      npmRegistry: y.npmRegistry
    });
    let installPath_4 = y.installPath;
    if (installPath_4 && installPath_4 !== ne) {
      let P = H() && storageV5_8 !== void 0 ? await lv(storageV5_8) : bk();
      if (!Object.values(P.plugins).some(item => item.some(item => item.installPath === installPath_4))) await jZ(installPath_4, storageV5_8);
    }
  } finally {
    if (E.path !== ne && !Ke(ne).startsWith(Ke(E.path) + yn)) await qa(E.path).catch(() => {});
  }
  let se = projectPath_3 ? `${scope_12} (${projectPath_3})` : scope_12;
  return {
    outcome: "updated",
    message: `Plugin "${packageName}" updated from ${u || "unknown"} to ${newVersion_2}${d} for scope ${se}. Restart to apply changes.`,
    pluginId: pluginId_13,
    newVersion: newVersion_2,
    oldVersion: u,
    scope: scope_12
  };
}
async function XXe(e, n, i) {
  let entry_5 = n ?? (await WZ(e, i))?.entry;
  if (!entry_5 || typeof entry_5.source !== "object" || entry_5.source.source !== "archive") return null;
  if (vf(e)) return null;
  let o = await id(i),
    r = o0(e);
  if (r !== void 0 && XL(o[r]?.source)) return null;
  let marketplaceSource_2 = Cge(e, o),
    y;
  try {
    y = eTe({
      entry: entry_5,
      archiveUrl: entry_5.source.url,
      marketplaceSource: marketplaceSource_2,
      trustedSettingsEntryAuth: Ske(r, entry_5.name)
    });
  } catch (error) {
    if (error instanceof $3) return null;
    throw error;
  }
  if ($xr(marketplaceSource_2, r)) return null;
  return T0t(y, entry_5.source.url);
}
function mSn(e) {
  let n = cUe(e);
  return `Fetching this plugin's archive sends helper-minted headers to ${n.destination}; ` + (n.hiddenCharactersWarning ? `WARNING: ${n.hiddenCharactersWarning} ` : "") + `the local command it runs (headersHelper) is: ${n.command}`;
}
function Gn(pluginId_14, n, i) {
  let s = z9(n);
  if (!s || !i || i.length === 0 || bNe()) return;
  let o = r0(s);
  return {
    kind: "recorded",
    command: i.find(item => item.sourceCommand === o)?.sourceCommand ?? i.find(item => item.sourceCommand !== void 0)?.sourceCommand,
    pluginId: pluginId_14
  };
}
async function gSn(e, n, i) {
  let s = await Dc(n),
    o;
  for (let [marketplace_5, h] of Object.entries(s)) {
    if (!Ep(h.source)) continue;
    try {
      let entry_6 = (await dV(marketplace_5, n, "install")).plugins.find(item => item.name === e);
      if (entry_6) return {
        entry: entry_6,
        marketplace: marketplace_5,
        marketplaceInstallLocation: h.installLocation
      };
    } catch (error) {
      if (error instanceof Rl) {
        o ??= error;
        continue;
      }
      if (error instanceof iqn) i?.(error);
      t(`Failed to load marketplace "${marketplace_5}" while searching for plugin "${e}": ${l(error)}`, {
        level: "error"
      });
    }
  }
  if (o !== void 0) throw o;
  return;
}
async function Wn(e, n) {
  return n === void 0 || (await Eat(e, n));
}
function Me(e, n, i) {
  return Hn(he(T0(e))?.enabledPlugins, n, i);
}
function kn() {
  let e = new Map();
  return n => {
    let i = e.get(n);
    if (i === void 0) i = LNt(n), e.set(n, i);
    return i;
  };
}
function Hn(e, n, i) {
  if (!e) return;
  let key_2 = Adt(n) ? i(e).byFold.get(gs(n))?.key : LR(Object.keys(e), n);
  return key_2 === void 0 ? void 0 : {
    key: key_2,
    value: e[key_2]
  };
}
function Pn(e, n, i) {
  let found;
  for (let scope_14 of Yn) {
    let c = Me(scope_14, e, i);
    if (c !== void 0) {
      found = {
        scope: scope_14,
        ...c
      };
      break;
    }
  }
  let o = whr(e),
    r = Y6e(e, o.map(({
      record: record_4
    }) => record_4 === void 0 ? void 0 : i(record_4))),
    source_8 = r === void 0 ? void 0 : o[r.index]?.source;
  return {
    found: found,
    atRequested: n === void 0 ? void 0 : Me(n, e, i),
    override: r !== void 0 && (source_8 === "policySettings" || source_8 === "flagSettings") ? {
      source: source_8,
      enabling: r.enabled,
      key: r.key
    } : void 0,
    decidingScope: source_8 === "localSettings" || source_8 === "projectSettings" || source_8 === "userSettings" ? rqn[source_8] : void 0,
    effective: r?.enabled
  };
}
var Yn = [...c5].sort((itemA, itemB) => Oe[itemB] - Oe[itemA]);
function mn(e, n, i, s) {
  let o = Zp(s, e) ? "" : ` via its legacy "${sr(s)}" entry`,
    r = o ? ` (remove that entry, or add "${e}": true beside it)` : "";
  if (i === "policySettings") return {
    success: !1,
    message: n ? `Plugin "${e}" is blocked by your organization's policy${o} and cannot be enabled here \u2014 ask an admin${r}` : `Plugin "${e}" is turned on by your organization's managed settings and cannot be disabled here`,
    failureCode: n ? "plugin_policy_blocked" : "managed_settings_override"
  };
  return {
    success: !1,
    message: n ? `Plugin "${e}" is turned off by this session's --settings flag${o}, which overrides your settings files. Change it in --settings to enable it${r}.` : `Plugin "${e}" is turned on by this session's --settings flag, which overrides your settings files. Remove it from --settings to disable it.`,
    failureCode: "settings_flag_override"
  };
}
function xn(e, n) {
  if (!hF(e)) return;
  let i = new Set(fs());
  for (let s of ["policySettings", "flagSettings"]) {
    if (!i.has(s)) continue;
    let o = he(s)?.enabledPlugins?.[e];
    if (o === void 0) continue;
    return o === !0 === n ? void 0 : s;
  }
  return;
}
function _n(e, n) {
  let i = Object.keys(e ?? {});
  if (!Adt(n)) return i.filter(item => item === n);
  let s = gs(n);
  return i.filter(item => gs(item) === s);
}
function We(e, n, i, s, o) {
  let r = {
    ...s,
    [n]: i
  };
  return Ha(e, h => ({
    enabledPlugins: {
      ...h?.enabledPlugins,
      ...Object.fromEntries(Object.keys(r).flatMap(item => _n(h?.enabledPlugins, item).filter(c => c !== item).map(item => [item, void 0]))),
      ...r
    }
  }), void 0, o);
}
function qn(e, n) {
  return $n(e, n, void 0).map(({
    record: record_5
  }) => record_5);
}
function $n(e, n, i) {
  return Vn.map(s => {
    let record_6 = he(s)?.enabledPlugins;
    if (s !== e) return {
      source: s,
      record: record_6
    };
    let r = ss(record_6 ?? {}, _n(record_6, n));
    return {
      source: s,
      record: i === void 0 ? r : {
        ...r,
        [n]: i
      }
    };
  });
}
var Vn = [...Ui].reverse();
export { DYr, EPe, VXe, c5, Oht, Mht, k1e, DQn, LYr, Dht, qXe, pSn, LQn, p2t, due, KXe, YXe, NYr, fSn, E1e, XXe, mSn, gSn };