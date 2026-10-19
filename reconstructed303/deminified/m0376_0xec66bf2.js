// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, H, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { C$, Sv } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, se, J2, e1, sC, zf, Gmn, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Rt, Gl } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { N4 } from "B:/~BUN/root/chunk-fsp20me0.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Zs } from "B:/~BUN/root/chunk-wegca9zh.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { hn, fc } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ud, W2n, pb } from "B:/~BUN/root/chunk-472kxa0t.js";
import { Nk, aUn, MZt, uM } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { uw } from "B:/~BUN/root/chunk-9g7m04dd.js";
import { o, u, fe, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Us } from "B:/~BUN/root/chunk-t7350kw8.js";
var E = "https, http, ssh (also written git+ssh or ssh+git), user@host:path, or a local file:// address with no host. git:// isn't supported because it isn't encrypted.",
  q = /^(?!-)[A-Za-z0-9._-]+@(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\]):(?!\/\/)/,
  V = /^(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\])$/,
  Z = /^(?!-)[A-Za-z0-9._-]+$/;
function D(e) {
  if (e === sC) return e;
  return Gl(Rt(e, 200)) || "\u201C\u201D";
}
function fkr(e) {
  if (/[\u0000-\u001f\u007f]/.test(e)) throw new x(`Invalid git URL: ${D(zf(e))} \u2014 control characters are not allowed`, "git URL contains control characters");
  if (e.includes("%00")) throw new x(`Invalid git URL: ${D(zf(e))} \u2014 "%00" in a git address means different things to different versions of git, so it is not allowed. Remove it.`, "git URL contains %00");
  if (e1(e)) throw new x(`Invalid git URL: ${D(zf(e))} \u2014 git can read a square bracket (also written %5B or %5D) as marking a server name or where a local path starts, so it could connect to a different server or open a different folder than this address names. In a server address, brackets may only surround an IPv6 address, as in git@[2001:db8::1]:repo.git. Remove them, or rename the folder whose name has them.`, "git URL has a square bracket that git could read as the host");
  if (q.test(e)) {
    if (!e.includes("://")) return e;
    throw new x(`Invalid git URL: an address written as user@host:path can't contain "://", because git then reads the text before "://" as a protocol name, as in https://. Remove the "://".`, "scp-like git URL contains ://");
  }
  let r;
  try {
    r = new URL(e);
  } catch {
    throw new x(`Invalid git URL: ${D(zf(e))} (it could not be read as a URL). Supported: ${E}`, "Invalid git URL");
  }
  if (!["https:", "http:", "ssh:", "file:", "git+ssh:", "ssh+git:"].includes(r.protocol)) {
    let n = zf(e),
      a = e.slice(0, e.indexOf(":") + 1).toLowerCase();
    throw new x(n === e ? `Invalid git URL protocol: ${Gl(Rt(r.protocol, 40))}. Supported: ${E}` : a !== "" && n.toLowerCase().startsWith(a) ? `Invalid git URL: ${D(n)}. Supported: ${E}` : `Invalid git URL. Supported: ${E}`, "Invalid git URL protocol");
  }
  if ((r.protocol === "https:" || r.protocol === "http:") && N4(e)) throw new x(`Invalid git URL: ${D(zf(e))} \u2014 a backslash before the first "/" can make git connect to a different server than this address names. Remove it, or write it as %5C if it is part of a user name.`, "git URL has a backslash in its authority");
  if (["ssh:", "git+ssh:", "ssh+git:"].includes(r.protocol)) {
    let n = /^[a-z][a-z0-9+.-]*:\/\/([^/]*)/i.exec(e)?.[1] ?? "",
      a = n.lastIndexOf("@"),
      s = a === -1 ? void 0 : n.slice(0, a),
      y = a === -1 ? n : n.slice(a + 1),
      h = /^(.*?)(?::([0-9]{1,5}))?$/.exec(y)?.[1] ?? y;
    if (/[?#]/.test(e) || !V.test(h) || s !== void 0 && !Z.test(s)) {
      let b = /^[\u0000-\u0020]*[a-z][a-z0-9+.-]*:(?:\/\/)?([^/?#]*)/i.exec(e),
        w = b?.[1] ?? "",
        v = (b?.[0].length ?? 0) - w.length,
        S = w.slice(0, Math.max(0, w.lastIndexOf("@"))),
        O = S.search(Gmn),
        z = O !== -1 ? e.slice(0, v) + `${S.slice(0, O)}:***` + e.slice(v + S.length) : e,
        F = b?.[0].includes("//") === !0,
        Y = F && w !== "" && !/:(?!\d+$)|%3a/i.test(w),
        K = e.includes("@") && !w.includes("@") && !Y || w.includes("@") && e.includes("@", v + w.length),
        j = /%40/i.test(e) || zf(e) === sC ? sC : K || !F ? zf(e) : z.replace(/[?#][\s\S]*$/, W => `${W[0]}***`);
      throw new x(`Invalid ssh git URL: the host must be a hostname or bracketed IPv6 literal (optionally :port), the user a plain name, and the URL may not carry ? or # (${D(j)})`, "ssh git URL host or user has disallowed characters");
    }
  }
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(e)) throw new x(`Invalid git URL: ${D(zf(e))} \u2014 a scheme URL must be spelled scheme://\u2026`, "git URL scheme without //");
  if (r.protocol === "file:" && (C$(X(e)) || r.host !== "" || /^file:\/\/(?![a-z]:[/\\])[^/\\]/i.test(e) || /^file:[\\/]*[\\]/i.test(e) || Sv(Q(r)))) throw new x(`Refusing git URL ${D(zf(e))}: a file: URL must name a local path (no host, no network-shaped path).`, "file git URL names a host or network path");
  return e;
}
function X(e) {
  try {
    return decodeURIComponent(e.replace(/^file:\/\//i, ""));
  } catch {
    return "/../malformed-percent-encoding";
  }
}
function Q(e) {
  try {
    return decodeURIComponent(e.pathname);
  } catch {
    return "//malformed-percent-encoding/";
  }
}
function I3e(e) {
  try {
    return fkr(e), null;
  } catch (error) {
    return H(error);
  }
}
function sct(e) {
  return I3e(e) === null;
}
function qZ(e) {
  return aUn(fc(e).marketplace);
}
function TZt({
  pluginId: pluginId,
  surface: surface,
  replaced: replaced
}) {
  return {
    ...(surface !== void 0 && {
      surface: c(surface)
    }),
    replaced: replaced,
    is_directory: qZ(pluginId)
  };
}
function Gvs(e) {
  switch (i("tengu_plugin_directory_catalog_load", {
    outcome: c(e.outcome),
    trigger: c(e.trigger),
    pages: e.pages,
    listing_count: e.listingCount,
    installable_count: e.tally.installable,
    skipped_unparseable: e.tally.unparseable,
    skipped_other_surface: e.tally.skipped.other_surface,
    skipped_no_pin: e.tally.skipped.no_pin,
    skipped_bad_url: e.tally.skipped.bad_url,
    skipped_bad_path: e.tally.skipped.bad_path,
    name_clashes: e.tally.nameClashes,
    ...(e.namesRepaired !== void 0 && {
      names_repaired: e.namesRepaired
    }),
    duration_ms: e.durationMs,
    ...(e.cacheAgeMin !== void 0 && {
      cache_age_min: e.cacheAgeMin
    }),
    ...(e.outcome === "stale_failed" && {
      incomplete_walk: e.incompleteWalk
    }),
    ...(e.outcome === "refused" && {
      refusal: c(e.refusal)
    })
  }), e.outcome) {
    case "fresh_cache":
    case "walked":
      g("plugin_directory_catalog");
      return;
    case "walked_names_only":
    case "walked_not_written":
    case "stale_failed":
    case "stale_empty":
    case "stale_duplicate_id":
    case "backoff":
      p("plugin_directory_catalog", e.outcome);
      return;
    case "incomplete":
    case "duplicate_id":
    case "backoff_cold":
      m("plugin_directory_catalog", e.outcome);
      return;
    case "refused":
      switch (e.refusal) {
        case "not-served":
        case "failed":
          m("plugin_directory_catalog", e.refusal);
          return;
        case "policy":
          if (!e.blockedByOrganization) p("plugin_directory_catalog", "policy_not_loaded");
          return;
      }
  }
}
function Vvs({
  directoryRows: e,
  totalRows: r,
  foldedRows: n,
  loadMs: a,
  entry: entry,
  directoryState: directoryState,
  knownMarketplaceCount: l
}) {
  i("tengu_plugin_discover_shown", {
    directory_rows: e,
    total_rows: r,
    folded_rows: n,
    load_ms: a,
    entry: c(entry),
    directory_state: c(directoryState),
    known_marketplace_count: l
  });
}
function M3e({
  fromPluginId: fromPluginId,
  toPluginId: toPluginId,
  surface: surface_2,
  managedNames: managedNames,
  result: result
}) {
  {
    let y = {
      surface: c(surface_2),
      from_is_directory: qZ(fromPluginId),
      to_is_directory: qZ(toPluginId)
    };
    if (result.outcome === "bad") {
      m("plugin_directory_switch", result.code, y);
      return;
    }
    if (result.isPrimary) if (result.outcome === "sad") p("plugin_directory_switch", result.code, y);else g("plugin_directory_switch", y);
    let l = fc(fromPluginId),
      h = MZt(l.name, l.marketplace, managedNames);
    i("tengu_plugin_marketplace_switched", {
      ...y,
      scope_changed: result.scopeChanged,
      stayed_disabled: result.stayedDisabled,
      data_dir_carried: result.dataDirCarried,
      pin_changed: result.pinChanged,
      replaced_count: result.replacedCount,
      is_primary: result.isPrimary,
      from_plugin_id_hash: h.plugin_id_hash,
      from_plugin_scope: h.plugin_scope,
      from_plugin_name_redacted: h.plugin_name_redacted,
      from_marketplace_name_redacted: h.marketplace_name_redacted,
      ...uM(toPluginId, managedNames)
    });
  }
}
function fPe({
  enabled: enabled,
  surface: surface_3,
  failure: failure
}) {
  {
    let a = {
      enabled: enabled,
      surface: c(surface_3)
    };
    if (failure !== void 0) {
      m("plugin_directory_toggle", failure, a);
      return;
    }
    g("plugin_directory_toggle", a), i("tengu_plugin_directory_toggled", a);
  }
}
function D3e(e) {
  {
    let r = Nk();
    if (r.blockedLogged.has(e)) return;
    r.blockedLogged.add(e), i("tengu_plugin_directory_blocked", {
      by: c(e)
    });
  }
}
function CZt({
  reason: reason,
  sourceKind: sourceKind,
  surface: surface_4
}) {
  i("tengu_marketplace_add_failed", {
    reason: c(reason),
    source_kind: c(sourceKind === "github" || sourceKind === "git" || sourceKind === "url" ? sourceKind : sourceKind === "file" || sourceKind === "directory" ? "local" : "other"),
    surface: c(surface_4)
  });
}
import { join as oe } from "path";
import { constants as ee } from "fs";
import { lstat as te, open as ie } from "fs/promises";
import { join as re } from "path";
async function L3e(e, r, n) {
  if (de()) return {
    state: "absent"
  };
  let a = re(ud(), e),
    s = n === "plugin catalog cache" ? "Plugin catalog cache" : `Plugin directory ${n}`;
  try {
    if (Us === 0 && (await te(a)).isSymbolicLink()) return t(`${s} is a symbolic link; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    await using y = await ie(a, ee.O_RDONLY | Us | Zs);
    if (!(await y.stat()).isFile()) return t(`${s} is not a file; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    let l = await J2(y, r + 1, "file");
    if (l.length > r) return t(`${s} is too large; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    return {
      state: "read",
      json: J(l.toString("utf-8"))
    };
  } catch (error) {
    if (G(error)) return {
      state: "absent"
    };
    let l = k(error);
    if (l === "ELOOP" || l === "EMLINK") return t(`${s} is a symbolic link; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    return t(`${s} could not be read: ${d(error)}`), {
      state: "unusable",
      readFailed: !(error instanceof SyntaxError)
    };
  }
}
var T = "plugin-directory-bindings.json",
  schemaVersion = 1,
  A = 1048576,
  RZt = 4096,
  ne = f(() => u({
    schemaVersion: C(schemaVersion),
    bindings: fe(o(), u({
      repositoryKey: o().min(1).max(RZt)
    }).optional().catch(void 0))
  }));
function rb(e) {
  let r = e.split("@");
  return r.length === 2 && r[1] === hn;
}
function EC(e, r) {
  if (!rb(r)) return [];
  let n = [...e].filter(item => rb(item) && W2n(item, r));
  return [...n.filter(item => item === r), ...n.filter(item => item !== r)];
}
var weakSet = new WeakSet();
function Ype(e) {
  return weakSet.has(e);
}
async function lie() {
  let e = await B();
  if (e.readFailed) weakSet.add(e.bindings);
  return e.bindings;
}
async function sUn(e, r, n) {
  if (!rb(e)) return;
  if (r !== void 0 && !M()) return;
  await L(a => {
    if (r === void 0) for (let s of EC(a.keys(), e)) a.delete(s);else if (!(n?.keepExisting === !0 && EC(a.keys(), e).length > 0)) a.set(e, r);
  });
}
async function AZt(e, r) {
  if (!rb(e)) return "none";
  if (!r) {
    let n = await L(() => {});
    if (Ype(n)) return "unreadable";
    return EC(n.keys(), e).length > 0 ? "held" : "none";
  }
  return await sUn(e, void 0), "none";
}
async function N3e(e, r) {
  return F3e([[e, r ?? []]]);
}
async function F3e(e) {
  {
    let r = !1,
      n = new Map();
    for (let [a, s] of e) {
      if (!rb(a)) continue;
      r = !0;
      let y = s.find(item => item.directoryRepositoryKey !== void 0)?.directoryRepositoryKey;
      if (y !== void 0) n.set(a, y);
    }
    if (!r) return new Map();
    if (n.size === 0 || !M()) return lie();
    return L(a => {
      for (let [s, y] of n) if (EC(a.keys(), s).length === 0) a.set(s, y);
    });
  }
  return new Map();
}
function tMt(e) {
  return Boolean(e.directoryRepositoryKey);
}
async function ict(e, r) {
  {
    if (!rb(e)) return "not-directory";
    let n = (r ?? []).find(item => item.directoryRepositoryKey)?.directoryRepositoryKey,
      a = l => l.has(e) || EC(l.keys(), e).some(item => l.get(item) === n);
    await L(l => {
      if (n !== void 0 && !a(l)) l.set(e, n);
    });
    let s = await L(() => {}),
      y = !Ype(s);
    if (y && (n === void 0 ? EC(s.keys(), e).length > 0 : a(s))) return "held";
    if (n === void 0) return "no-key";
    return y && e.length > 1024 ? "cannot-hold" : "not-persisted";
  }
  return "not-directory";
}
async function mkr(e, r, n) {
  if (!rb(e)) return !0;
  if (!n.some(tMt)) return (await ict(e, r)) !== "not-persisted";
  return await N3e(e, r), !0;
}
function M() {
  return uw() && pb() === null;
}
async function B() {
  let bindings = new Map();
  {
    let r = await L3e(T, A, "bindings file"),
      n = r.state === "read" ? ne().safeParse(r.json) : void 0;
    if (n?.success) {
      for (let [a, s] of Object.entries(n.data.bindings)) if (s !== void 0 && a.length <= 1024) bindings.set(a, s.repositoryKey);
    }
    return {
      bindings: bindings,
      readFailed: r.state === "unusable" || r.state === "read" && n?.success !== !0
    };
  }
  return {
    bindings: bindings,
    readFailed: !1
  };
}
async function L(e) {
  let r = new Map();
  {
    let n = Nk(),
      bindingsWriteTail = n.bindingsWriteTail,
      {
        promise: promise,
        resolve: resolve
      } = Promise.withResolvers();
    n.bindingsWriteTail = promise, await bindingsWriteTail;
    try {
      let l = await B();
      if (l.readFailed) weakSet.add(r);
      for (let [R, b] of l.bindings) r.set(R, b);
      e(r);
      for (let [R, b] of [...r]) if (R.length > 1024 || b === "") r.delete(R);
      let h = r.size !== l.bindings.size || [...r].some(([R, b]) => l.bindings.get(R) !== b);
      if (h && l.readFailed) t("Plugin directory bindings file could not be used; leaving it as it is", {
        level: "warn"
      });else if (h && de()) t("Plugin directory bindings file not written: this session saves nothing to disk");else if (h) {
        let R = _({
          schemaVersion: schemaVersion,
          bindings: Object.fromEntries([...r].map(([b, repositoryKey]) => [b, {
            repositoryKey: repositoryKey
          }]))
        });
        if (Buffer.byteLength(R) > A) t("Plugin directory bindings file would grow past 1 MB, the most that is read back; leaving it as it is", {
          level: "warn"
        });else await se().mkdir(ud()), await An(oe(ud(), T), R, 384);
      }
    } catch (error) {
      t(`Failed to update plugin directory bindings file: ${d(error)}`, {
        level: "warn"
      });
    } finally {
      resolve();
    }
  }
  return r;
}
export { fkr, I3e, sct, qZ, TZt, Gvs, Vvs, M3e, fPe, D3e, CZt, L3e, RZt, rb, EC, Ype, lie, sUn, AZt, N3e, F3e, tMt, ict, mkr };