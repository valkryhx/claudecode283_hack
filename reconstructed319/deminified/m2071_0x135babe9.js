// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, mo } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t, _, ee, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ln, aS, Qh, KSe, FA, eo, zAe, Zh, Sd } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { VP, AZ } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { gf } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { sN } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { sp } from "B:/~BUN/root/chunk-fzefftbw.js";
import { Kc, Pht } from "B:/~BUN/root/chunk-esnm3r09.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { fdt, cw, mW, WAn, cEi, zu, Nc, cye, Nos, Z8t, ZC, aq, hEi, eu, w9, n9t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Xwe } from "B:/~BUN/root/chunk-q426ym2p.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { readFile as N } from "fs/promises";
import { join as j } from "path";
var L = "flagged-plugins.json",
  x = 172800000;
function F() {
  return j(Kc(), L);
}
function D(e) {
  let o = ee(e);
  if (typeof o !== "object" || o === null || !("plugins" in o) || typeof o.plugins !== "object" || o.plugins === null) return {};
  let plugins = o.plugins,
    c = {};
  for (let [i, n] of Object.entries(plugins)) if (n && typeof n === "object" && "flaggedAt" in n && typeof n.flaggedAt === "string") {
    let g = {
      flaggedAt: n.flaggedAt
    };
    if ("seenAt" in n && typeof n.seenAt === "string") g.seenAt = n.seenAt;
    c[i] = g;
  }
  return c;
}
var A = new Set(["ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR"]),
  U = new Set([...A, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent"]);
function M(e) {
  return X() && e !== void 0 && fdt("flagged") !== null ? e : void 0;
}
async function I(e) {
  let o = M(e);
  if (o) {
    let c = await o.read([Ve.pluginRegistry("flagged")]),
      i = c.ok ? c.value.items[0] : void 0;
    if (!i?.found) return {};
    let n = i.value;
    try {
      return D(Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf-8"));
    } catch {
      return {};
    }
  }
  let s = F();
  try {
    let c = await N(s, {
      encoding: "utf-8"
    });
    return D(c);
  } catch {
    return {};
  }
}
async function w(plugins_2, o) {
  let s = M(o);
  if (s) {
    let i = await s.write(Ve.pluginRegistry("flagged"), _({
      plugins: plugins_2
    }, null, 2));
    if (i.ok) {
      Ae().flaggedPlugins = plugins_2;
      return;
    }
    let n = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
    if (n !== void 0 && U.has(n)) t(`Failed to persist flagged plugins: ${Ht(i.error)}`, {
      level: "error"
    });else a(new R(`Failed to persist flagged plugins: ${i.error.code}${n === void 0 ? "" : ` ${n}`}`, "flagged plugins v5 write failed"));
    return;
  }
  let c = F();
  try {
    await ie().mkdir(Kc());
    let i = _({
      plugins: plugins_2
    }, null, 2);
    await zn(c, i, 384), Ae().flaggedPlugins = plugins_2;
  } catch (error) {
    let n = k(error);
    if (n !== void 0 && A.has(n)) t(`Failed to persist flagged plugins: ${error}`, {
      level: "error"
    });else a(error);
  }
}
async function T(e) {
  let o = await I(e),
    s = Date.now(),
    c = !1;
  for (let [i, n] of Object.entries(o)) if (n.seenAt && s - new Date(n.seenAt).getTime() >= x) delete o[i], c = !0;
  if (Ae().flaggedPlugins = o, c) await w(o, e);
}
function azt() {
  return Ae().flaggedPlugins ?? {};
}
async function v(e, o) {
  let s = Ae();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await I(o);
  let c = {
    ...s.flaggedPlugins,
    [e]: {
      flaggedAt: new Date().toISOString()
    }
  };
  await w(c, o), t(`Flagged plugin: ${e}`);
}
async function NYs(e, o) {
  let s = Ae();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await I(o);
  let seenAt = new Date().toISOString(),
    i = !1,
    n = {
      ...s.flaggedPlugins
    };
  for (let g of e) {
    let u = n[g];
    if (u && !u.seenAt) n[g] = {
      ...u,
      seenAt: seenAt
    }, i = !0;
  }
  if (i) await w(n, o);
}
async function FYs(e, o) {
  let s = Ae();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await I(o);
  if (!(e in s.flaggedPlugins)) return;
  let {
    [e]: c,
    ...i
  } = s.flaggedPlugins;
  s.flaggedPlugins = i, await w(i, o);
}
function B(e, o, s) {
  let c = new Set(o.plugins.map(item => item.name)),
    i = `@${s}`,
    n = [];
  for (let g of Object.keys(e.plugins)) {
    if (!g.endsWith(i)) continue;
    let u = g.slice(0, -i.length),
      y = o.renames && n9t(u, o.renames, c)?.kind === "renamed";
    if (!c.has(u) && !y) n.push(g);
  }
  return n;
}
async function hYn(e) {
  await T(e);
  let o = X() && e !== void 0 ? await w9(e) : eu(),
    s = azt(),
    c = await Nc(e),
    i = [];
  for (let [_PROTO_marketplace_name, registryEntry] of Object.entries(c)) try {
    if (_PROTO_marketplace_name.toLowerCase() === aS) continue;
    if (Zh(registryEntry.source) && !Object.keys(o.plugins).some(item => item.endsWith(`@${_PROTO_marketplace_name}`))) continue;
    let u = Zh(registryEntry.source) ? await ZC(_PROTO_marketplace_name, e, {
      registryEntry: registryEntry
    }) : await aq(_PROTO_marketplace_name, e);
    if (u === null) {
      if (Object.keys(o.plugins).some(item => item.endsWith(`@${_PROTO_marketplace_name}`))) l("tengu_plugin_delisted_enforcement", {
        outcome: b("scan-skipped-no-catalog"),
        is_official_marketplace: !1
      });
      continue;
    }
    if (!u.forceRemoveDeletedPlugins) continue;
    let y = B(o, u, _PROTO_marketplace_name);
    for (let p of y) {
      if (p in s) continue;
      let E = o.plugins[p] ?? [];
      if (!E.some(item => item.scope === "user" || item.scope === "project" || item.scope === "local")) continue;
      for (let P of E) {
        let {
          scope: scope
        } = P;
        if (scope !== "user" && scope !== "project" && scope !== "local") continue;
        try {
          let S = await Xwe(p, scope, !0, e, {
            settingsStillOn: "remove-anyway"
          });
          l("tengu_plugin_delisted_enforcement", {
            outcome: S.success ? b("uninstalled") : b("uninstall-failed"),
            scope: f(scope),
            ...(!S.success && {
              error_kind: f(AZ(S.message))
            }),
            ...VP(p, sp())
          });
        } catch (error) {
          t(`Failed to auto-uninstall delisted plugin ${p} from ${scope}: ${d(error)}`, {
            level: "error"
          }), l("tengu_plugin_delisted_enforcement", {
            outcome: b("uninstall-failed"),
            scope: f(scope),
            error_kind: f(AZ(error)),
            ...VP(p, sp())
          });
        }
      }
      await v(p, e), i.push(p);
    }
  } catch (error) {
    t(`Failed to check for delisted plugins in "${_PROTO_marketplace_name}": ${d(error)}`, {
      level: "warn"
    }), l("tengu_plugin_delisted_enforcement", {
      outcome: b("scan-failed"),
      error_kind: f(AZ(error)),
      _PROTO_marketplace_name: _PROTO_marketplace_name,
      is_official_marketplace: Sd(_PROTO_marketplace_name)
    });
  }
  return i;
}
import { isAbsolute as G, resolve as K } from "path";
function E0o(e, o, s) {
  let missing = [],
    sourceChanged = [],
    upToDate = [];
  for (let [name, u] of Object.entries(e)) {
    let y = cw(o, name),
      declaredSource = C(u.source, s?.projectRoot);
    if (!y) missing.push(name);else if (u.sourceIsFallback) upToDate.push(name);else if (!ln(declaredSource, y.source)) sourceChanged.push({
      name: name,
      declaredSource: declaredSource,
      materializedSource: y.source
    });else upToDate.push(name);
  }
  return {
    missing: missing,
    sourceChanged: sourceChanged,
    upToDate: upToDate
  };
}
async function mYn(e) {
  let o = mW();
  if (Object.keys(o).length === 0) return {
    installed: [],
    updated: [],
    failed: [],
    upToDate: [],
    skipped: []
  };
  let s = e?.storageV5,
    c;
  try {
    c = await zu(s);
  } catch (error) {
    t(`reconciler: failed to load known_marketplaces.json, treating as empty: ${d(error)}`, {
      level: "error"
    }), c = {};
  }
  let i = E0o(o, c, {
      projectRoot: Ee()
    }),
    n = [...i.missing.map(r => ({
      name: r,
      source: C(o[r].source),
      action: "install"
    })), ...i.sourceChanged.map(({
      name: name_2,
      declaredSource: P
    }) => ({
      name: name_2,
      source: P,
      action: "update"
    }))],
    skipped = [],
    u = [],
    failed = [];
  for (let r of n) {
    if (cEi(r.name)) {
      t(`[reconcile] '${r.name}' is the built-in ${eo}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${WAn} counts, and only while the Directory is turned on.`), skipped.push(r.name);
      continue;
    }
    let P = Z8t(r.name);
    if (FA(r.name) || P !== void 0) {
      let error_2 = `${P === void 0 ? zAe(r.name) : Nos(r.name, P)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
      t(`[reconcile] '${r.name}' ${error_2}`, {
        level: "warn"
      }), failed.push({
        name: r.name,
        error: error_2
      }), e?.onProgress?.({
        type: "failed",
        name: r.name,
        error: error_2
      });
      continue;
    }
    if (e?.skip?.(r.name, r.source)) {
      skipped.push(r.name);
      continue;
    }
    if (Pht(r.name)) {
      let error_3 = `not materialized: names starting with "${KSe}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
      t(`[reconcile] '${r.name}' ${error_3}`, {
        level: "warn"
      }), failed.push({
        name: r.name,
        error: error_3
      }), e?.onProgress?.({
        type: "failed",
        name: r.name,
        error: error_3
      });
      continue;
    }
    if (r.action === "update" && Qh(r.source) && !(await gf(r.source.path))) {
      t(`[reconcile] '${r.name}' declared path does not exist; keeping materialized entry`), skipped.push(r.name);
      continue;
    }
    u.push(r);
  }
  let installed = [],
    updated = [];
  if (u.length > 0) {
    t(`[reconcile] ${u.length} marketplace(s): ${u.map(item => `${item.name}(${item.action})`).join(", ")}`);
    for (let {
      name: name_3,
      source: source,
      action: action
    } of u) {
      e?.onProgress?.({
        type: "installing",
        name: name_3
      });
      try {
        if (await cye(source, void 0, s, name_3), action === "install") installed.push(name_3);else updated.push(name_3);
        e?.onProgress?.({
          type: "installed",
          name: name_3
        });
      } catch (S) {
        let error_4 = d(S);
        failed.push({
          name: name_3,
          error: error_4
        }), e?.onProgress?.({
          type: "failed",
          name: name_3,
          error: error_4
        }), t(`[reconcile] failed to ${action} marketplace '${name_3}': ${error_4}`, {
          level: "error"
        });
      }
    }
  }
  return await hEi(s), {
    installed: installed,
    updated: updated,
    failed: failed,
    upToDate: i.upToDate,
    skipped: skipped
  };
}
function C(e, o) {
  if ((e.source === "directory" || e.source === "file") && !G(e.path)) {
    let s = mo(),
      c = s ?? o ?? Ee(),
      i = s === null ? sN(c) : null;
    return {
      ...e,
      path: K(i ?? c, e.path)
    };
  }
  return e;
}
export { azt, NYs, FYs, E0o, mYn, hYn };