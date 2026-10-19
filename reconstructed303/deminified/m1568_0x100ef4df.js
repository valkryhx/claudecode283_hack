// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nn, ke, so } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { _, J, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { hy, Lf, Zle, rT, Tr, mhe, Nf, zl } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { uM, U6 } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Zc } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { XO } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { up } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { ud, P9e } from "B:/~BUN/root/chunk-472kxa0t.js";
import { bYe, m_, rH, JJt, H_s, ic, nd, Fse, _po, uOt, Mk, Q1, W_s, qd, Aq, mOt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Jde } from "B:/~BUN/root/chunk-8svw5dn3.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { readFile as N } from "fs/promises";
import { join as j } from "path";
var L = "flagged-plugins.json",
  U = 172800000;
function F() {
  return j(ud(), L);
}
function D(e) {
  let r = J(e);
  if (typeof r !== "object" || r === null || !("plugins" in r) || typeof r.plugins !== "object" || r.plugins === null) return {};
  let plugins = r.plugins,
    g = {};
  for (let [o, n] of Object.entries(plugins)) if (n && typeof n === "object" && "flaggedAt" in n && typeof n.flaggedAt === "string") {
    let u = {
      flaggedAt: n.flaggedAt
    };
    if ("seenAt" in n && typeof n.seenAt === "string") u.seenAt = n.seenAt;
    g[o] = u;
  }
  return g;
}
var A = new Set(["ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR"]),
  B = new Set([...A, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent"]);
function M(e) {
  return W() && e !== void 0 && bYe("flagged") !== null ? e : void 0;
}
async function E(e) {
  let r = M(e);
  if (r) {
    let g = await r.read([Be.pluginRegistry("flagged")]),
      o = g.ok ? g.value.items[0] : void 0;
    if (!o?.found) return {};
    let n = o.value;
    try {
      return D(Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf-8"));
    } catch {
      return {};
    }
  }
  let s = F();
  try {
    let g = await N(s, {
      encoding: "utf-8"
    });
    return D(g);
  } catch {
    return {};
  }
}
async function h(plugins_2, r) {
  let s = M(r);
  if (s) {
    let o = await s.write(Be.pluginRegistry("flagged"), _({
      plugins: plugins_2
    }, null, 2));
    if (o.ok) {
      Ne().flaggedPlugins = plugins_2;
      return;
    }
    let n = "telemetryCode" in o.error ? o.error.telemetryCode : void 0;
    if (n !== void 0 && B.has(n)) t(`Failed to persist flagged plugins: ${yt(o.error)}`, {
      level: "error"
    });else l(new x(`Failed to persist flagged plugins: ${o.error.code}${n === void 0 ? "" : ` ${n}`}`, "flagged plugins v5 write failed"));
    return;
  }
  let g = F();
  try {
    await se().mkdir(ud());
    let o = _({
      plugins: plugins_2
    }, null, 2);
    await An(g, o, 384), Ne().flaggedPlugins = plugins_2;
  } catch (error) {
    let n = k(error);
    if (n !== void 0 && A.has(n)) t(`Failed to persist flagged plugins: ${error}`, {
      level: "error"
    });else l(error);
  }
}
async function T(e) {
  let r = await E(e),
    s = Date.now(),
    g = !1;
  for (let [o, n] of Object.entries(r)) if (n.seenAt && s - new Date(n.seenAt).getTime() >= U) delete r[o], g = !0;
  if (Ne().flaggedPlugins = r, g) await h(r, e);
}
function iwt() {
  return Ne().flaggedPlugins ?? {};
}
async function v(e, r) {
  let s = Ne();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await E(r);
  let g = {
    ...s.flaggedPlugins,
    [e]: {
      flaggedAt: new Date().toISOString()
    }
  };
  await h(g, r), t(`Flagged plugin: ${e}`);
}
async function M4o(e, r) {
  let s = Ne();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await E(r);
  let seenAt = new Date().toISOString(),
    o = !1,
    n = {
      ...s.flaggedPlugins
    };
  for (let u of e) {
    let f = n[u];
    if (f && !f.seenAt) n[u] = {
      ...f,
      seenAt: seenAt
    }, o = !0;
  }
  if (o) await h(n, r);
}
async function D4o(e, r) {
  let s = Ne();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await E(r);
  if (!(e in s.flaggedPlugins)) return;
  let {
    [e]: g,
    ...o
  } = s.flaggedPlugins;
  s.flaggedPlugins = o, await h(o, r);
}
function G(e, r, s) {
  let g = new Set(r.plugins.map(item => item.name)),
    o = `@${s}`,
    n = [];
  for (let u of Object.keys(e.plugins)) {
    if (!u.endsWith(o)) continue;
    let f = u.slice(0, -o.length),
      S = r.renames && mOt(f, r.renames, g)?.kind === "renamed";
    if (!g.has(f) && !S) n.push(u);
  }
  return n;
}
async function h_n(e) {
  await T(e);
  let r = W() && e !== void 0 ? await Aq(e) : qd(),
    s = iwt(),
    g = await nd(e),
    o = [];
  for (let [_PROTO_marketplace_name, registryEntry] of Object.entries(g)) try {
    if (_PROTO_marketplace_name.toLowerCase() === hy) continue;
    if (Nf(registryEntry.source) && !Object.keys(r.plugins).some(item => item.endsWith(`@${_PROTO_marketplace_name}`))) continue;
    let f = Nf(registryEntry.source) ? await Mk(_PROTO_marketplace_name, e, {
      registryEntry: registryEntry
    }) : await Q1(_PROTO_marketplace_name, e);
    if (f === null) {
      if (Object.keys(r.plugins).some(item => item.endsWith(`@${_PROTO_marketplace_name}`))) i("tengu_plugin_delisted_enforcement", {
        outcome: b("scan-skipped-no-catalog"),
        is_official_marketplace: !1
      });
      continue;
    }
    if (!f.forceRemoveDeletedPlugins) continue;
    let S = G(r, f, _PROTO_marketplace_name);
    for (let m of S) {
      if (m in s) continue;
      let R = r.plugins[m] ?? [];
      if (!R.some(item => item.scope === "user" || item.scope === "project" || item.scope === "local")) continue;
      for (let p of R) {
        let {
          scope: scope
        } = p;
        if (scope !== "user" && scope !== "project" && scope !== "local") continue;
        try {
          let y = await Jde(m, scope, !0, e, {
            settingsStillOn: "remove-anyway"
          });
          i("tengu_plugin_delisted_enforcement", {
            outcome: y.success ? b("uninstalled") : b("uninstall-failed"),
            scope: c(scope),
            ...(!y.success && {
              error_kind: c(U6(y.message))
            }),
            ...uM(m, up())
          });
        } catch (error) {
          t(`Failed to auto-uninstall delisted plugin ${m} from ${scope}: ${d(error)}`, {
            level: "error"
          }), i("tengu_plugin_delisted_enforcement", {
            outcome: b("uninstall-failed"),
            scope: c(scope),
            error_kind: c(U6(error)),
            ...uM(m, up())
          });
        }
      }
      await v(m, e), o.push(m);
    }
  } catch (error) {
    t(`Failed to check for delisted plugins in "${_PROTO_marketplace_name}": ${d(error)}`, {
      level: "warn"
    }), i("tengu_plugin_delisted_enforcement", {
      outcome: b("scan-failed"),
      error_kind: c(U6(error)),
      _PROTO_marketplace_name: _PROTO_marketplace_name,
      is_official_marketplace: zl(_PROTO_marketplace_name)
    });
  }
  return o;
}
import { isAbsolute as z, resolve as K } from "path";
function kGr(e, r, s) {
  let missing = [],
    sourceChanged = [],
    upToDate = [];
  for (let [name, f] of Object.entries(e)) {
    let S = m_(r, name),
      declaredSource = C(f.source, s?.projectRoot);
    if (!S) missing.push(name);else if (f.sourceIsFallback) upToDate.push(name);else if (!Nn(declaredSource, S.source)) sourceChanged.push({
      name: name,
      declaredSource: declaredSource,
      materializedSource: S.source
    });else upToDate.push(name);
  }
  return {
    missing: missing,
    sourceChanged: sourceChanged,
    upToDate: upToDate
  };
}
async function g_n(e) {
  let r = rH();
  if (Object.keys(r).length === 0) return {
    installed: [],
    updated: [],
    failed: [],
    upToDate: [],
    skipped: []
  };
  let s = e?.storageV5,
    g;
  try {
    g = await ic(s);
  } catch (error) {
    t(`reconciler: failed to load known_marketplaces.json, treating as empty: ${d(error)}`, {
      level: "error"
    }), g = {};
  }
  let o = kGr(r, g, {
      projectRoot: ke()
    }),
    n = [...o.missing.map(a => ({
      name: a,
      source: C(r[a].source),
      action: "install"
    })), ...o.sourceChanged.map(({
      name: name_2,
      declaredSource: p
    }) => ({
      name: name_2,
      source: p,
      action: "update"
    }))],
    skipped = [],
    f = [],
    failed = [];
  for (let a of n) {
    if (H_s(a.name)) {
      t(`[reconcile] '${a.name}' is the built-in ${Tr}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${JJt} counts, and only while the Directory is turned on.`), skipped.push(a.name);
      continue;
    }
    let p = uOt(a.name);
    if (rT(a.name) || p !== void 0) {
      let error_2 = `${p === void 0 ? mhe(a.name) : _po(a.name, p)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
      t(`[reconcile] '${a.name}' ${error_2}`, {
        level: "warn"
      }), failed.push({
        name: a.name,
        error: error_2
      }), e?.onProgress?.({
        type: "failed",
        name: a.name,
        error: error_2
      });
      continue;
    }
    if (e?.skip?.(a.name, a.source)) {
      skipped.push(a.name);
      continue;
    }
    if (P9e(a.name)) {
      let error_3 = `not materialized: names starting with "${Zle}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
      t(`[reconcile] '${a.name}' ${error_3}`, {
        level: "warn"
      }), failed.push({
        name: a.name,
        error: error_3
      }), e?.onProgress?.({
        type: "failed",
        name: a.name,
        error: error_3
      });
      continue;
    }
    if (a.action === "update" && Lf(a.source) && !(await Zc(a.source.path))) {
      t(`[reconcile] '${a.name}' declared path does not exist; keeping materialized entry`), skipped.push(a.name);
      continue;
    }
    f.push(a);
  }
  let installed = [],
    updated = [];
  if (f.length > 0) {
    t(`[reconcile] ${f.length} marketplace(s): ${f.map(item => `${item.name}(${item.action})`).join(", ")}`);
    for (let a = 0; a < f.length; a++) {
      let {
        name: name_3,
        source: source,
        action: action
      } = f[a];
      e?.onProgress?.({
        type: "installing",
        name: name_3,
        action: action,
        index: a + 1,
        total: f.length
      });
      try {
        let I = await Fse(source, void 0, s, name_3);
        if (action === "install") installed.push(name_3);else updated.push(name_3);
        e?.onProgress?.({
          type: "installed",
          name: name_3,
          alreadyMaterialized: I.alreadyMaterialized
        });
      } catch (I) {
        let error_4 = d(I);
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
  return await W_s(s), {
    installed: installed,
    updated: updated,
    failed: failed,
    upToDate: o.upToDate,
    skipped: skipped
  };
}
function C(e, r) {
  if ((e.source === "directory" || e.source === "file") && !z(e.path)) {
    let s = so(),
      g = s ?? r ?? ke(),
      o = s === null ? XO(g) : null;
    return {
      ...e,
      path: K(o ?? g, e.path)
    };
  }
  return e;
}
export { iwt, M4o, D4o, kGr, g_n, h_n };