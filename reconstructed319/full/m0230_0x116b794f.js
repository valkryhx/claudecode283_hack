// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee,
  DKn,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  d,
  k,
  K,
  qt,
  vY
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Oc,
  bl,
  CG,
  MT,
  Cl,
  oun,
  Df,
  fqn,
  Jv,
  pB,
  q5,
  yWt,
  G$r,
  V$r,
  K$r,
  DT,
  sun,
  nw,
  Wp,
  C0
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  og,
  t,
  ee,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue,
  af
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  Ua,
  P,
  Scn,
  Ey,
  tt,
  Hjt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  _Ws,
  iB
} from "B:/~BUN/root/chunk-09sn55yf.js";
import {
  ib,
  Nn,
  Mwe
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  jA
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  gf,
  JU
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  zR,
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  ln,
  vp,
  Nzn,
  YFs,
  aS,
  BKe,
  $zn,
  MRo,
  DRo,
  nHs,
  pLr,
  mLr,
  rHs,
  Uzn,
  LRo,
  mbt,
  Qh,
  bHe,
  KSe,
  bd,
  Ol,
  In,
  FA,
  CHs,
  yln,
  $n,
  Un,
  Qn,
  Pm,
  Yp,
  Ttt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Et,
  zln,
  Nte,
  Ji,
  Qe
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  jr,
  o7
} from "B:/~BUN/root/chunk-46ahshhq.js";
import {
  q6i,
  La,
  Tm,
  Yd
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  IR
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  cxe,
  Bte
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  tbt,
  be,
  NNs,
  FNs,
  VCo,
  bpe,
  zv
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  OO
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  yd
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Vee
} from "B:/~BUN/root/chunk-t0w3xyzh.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  _t
} from "B:/~BUN/root/chunk-3a409jmn.js";
import {
  ou
} from "B:/~BUN/root/chunk-epyd9ybj.js";
import {
  o,
  u,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  o2n
} from "B:/~BUN/root/chunk-q15wjdnk.js";
import {
  fG
} from "B:/~BUN/root/chunk-4hj5k2m3.js";
import {
  lu
} from "B:/~BUN/root/chunk-xfdxa8bd.js";
import {
  en
} from "B:/~BUN/root/chunk-mdq0dxn3.js";
import {
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readdir as we,
  rm as kt,
  stat as St
} from "fs/promises";
import {
  delimiter as Pt,
  join as v
} from "path";
import {
  isAbsolute as gt
} from "path";
var qGe = ".claude-plugin-link",
  Zgo = p(() => u({
    target: o().min(1).max(4096).refine((e) => gt(e), {
      message: "must be an absolute path"
    }).refine((e) => !C0(e) && !Cl(e), {
      message: "must be a local path"
    }).refine((e) => !CG(e), {
      message: "must be canonical"
    })
  })),
  oHn = `
[mode: link]`;
import {
  isAbsolute as Re,
  join as _,
  relative as Ce,
  sep as L
} from "path";
import {
  isAbsolute as ft,
  join as ke,
  relative as Se,
  sep as Pe
} from "path";

function Y7e() {
  let e = af();
  return e === null ? null : ke(e, "skills")
}

function mt(e) {
  let n = Y7e();
  if (n === null) return !1;
  let r = Se(n, e);
  return r !== "" && r !== ".." && !r.startsWith(`..${Pe}`) && !ft(r)
}

function _e(e) {
  let n = Y7e();
  if (n === null || !mt(e)) return null;
  let r = Se(n, e).split(Pe);
  return zR(r) && ke(n, ...r) === e ? r : null
}

function eyo(e) {
  let n = _e(e);
  return n === null ? null : Ve.userConfigDir("skills", n)
}

function PGi(e) {
  let n = _e(e);
  return n === null ? null : {
    namespace: "userConfigDir",
    dir: "skills",
    relPath: n
  }
}
var dz = ".orphaned_at",
  Kh = ".in_use",
  YNt = ".gcs-sha",
  I1 = ".links_materialized";

function Y() {
  return _(Ue(), "plugins", "cache")
}

function V(e, n) {
  let r = Y();
  if (n !== r) return null;
  let s = Ce(r, e);
  if (s === "" || s === ".." || s.startsWith(`..${L}`) || Re(s)) return null;
  let a = s.split(L);
  return _(r, ...a) === e ? a : null
}

function Z(e) {
  return e.endsWith(".zip")
}

function Cee(e, n) {
  let r = V(e, n);
  if (r === null || r.length !== 3 || !zR(r) || Z(r[2])) return null;
  let [s, a, c] = r;
  return {
    marketplace: s,
    plugin: a,
    version: c
  }
}

function OGi(e) {
  return e.namespace === "pluginCache" && e.marketplace !== void 0 && e.plugin !== void 0 && e.version !== void 0 && e.relPath === void 0
}

function pnn(e, n) {
  let r = Cee(e, n);
  return r === null ? null : {
    namespace: "pluginCache",
    ...r
  }
}

function IGi(e, n) {
  let r = [e.marketplace, e.plugin, e.version];
  if (n !== Y() || !zR(r) || Z(e.version)) return null;
  return _(n, ...r)
}

function ht(e, n) {
  let r = V(e, n);
  if (r === null || r.length < 4 || !zR(r) || Z(r[2])) return null;
  let [s, a, c, ...l] = r;
  return Ve.pluginCache(s, a, c, l)
}

function sHn(e, n) {
  return ht(e, n) ?? eyo(e)
}

function tyo(e, n) {
  return J(n) ? Ve.pluginRegistry(e) : null
}

function nyo(e, n, r) {
  return J(r) && zR([e]) ? Ve.marketplaceCache(e, n) : null
}

function J(e) {
  return e === _(Ue(), "plugins")
}

function yt(e, n) {
  if (!J(n)) return null;
  let r = _(n, "marketplaces"),
    s = Ce(r, e);
  if (s === "" || s === ".." || s.startsWith(`..${L}`) || Re(s)) return null;
  let a = s.split(L);
  return _(r, ...a) === e ? a : null
}

function iHn(e, n) {
  let r = yt(e, n);
  if (r === null || r.length < 2 || !zR(r)) return null;
  return Ve.marketplaceTree(r[0], r.slice(1))
}

function MGi(e) {
  return e === _(Ue(), "plugins", "asset-cache") ? {
    namespace: "pluginAssetCache"
  } : null
}

function ICr(e, n) {
  if (e === n) return n === Y() ? {
    namespace: "pluginCache"
  } : null;
  let r = V(e, n);
  if (r === null || r.length > 2 || !zR(r)) return null;
  let [s, a] = r;
  return a === void 0 ? {
    namespace: "pluginCache",
    marketplace: s
  } : {
    namespace: "pluginCache",
    marketplace: s,
    plugin: a
  }
}
var xht = new Set([qGe, Kh, dz]);

function M1(e) {
  return MT(e).replace(/[. ]+$/, "")
}

function XNt(e, n) {
  let r = M1(e);
  if (n.has(r)) return !0;
  for (let s of n)
    if (jA(r, s)) return !0;
  return !1
}

function JNt(e) {
  return M1(e) === "node_modules"
}
var ve = "plugins",
  Q = "cowork_plugins";

function te() {
  if (DKn()) return Q;
  if (i.CLAUDE_CODE_USE_COWORK_PLUGINS) return Q;
  return ve
}

function aHn() {
  return te() === ve && !i.CLAUDE_CODE_PLUGIN_CACHE_DIR
}

function ryo() {
  return te() === Q
}

function Kc() {
  let e = i.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (e) return Df(e);
  return v(Ue(), te())
}

function dU() {
  let e = i.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!e) return [];
  return e.split(Pt).filter(Boolean).map(Df)
}

function mnn(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-")
}

function j_e(e) {
  return mnn(e).toLowerCase()
}

function Pht(e) {
  let n = M1(e.normalize("NFKC"));
  return n.startsWith(KSe) || mnn(n).toLowerCase().startsWith(KSe)
}

function lHn(e) {
  return mnn(M1(e.normalize("NFKC"))).toLowerCase()
}

function FEs(e) {
  return e.replace(/[^a-z0-9-]/gu, (n) => {
    let r = n.codePointAt(0) ?? 0;
    return r <= 255 ? `_${r.toString(16).padStart(2,"0")}` : `__${r.toString(16)}_`
  })
}

function O(e) {
  if (bHe(e)) {
    let n = e.slice(0, e.lastIndexOf("@"));
    return `${FEs(n)}-${aS}`
  }
  return mnn(e)
}

function MCr(e, n) {
  return O(e).toLowerCase() === O(n).toLowerCase()
}

function DGi(e, n) {
  return `installed_plugins.set-aside.${e.toISOString().slice(0,10)}.${n}.json`
}

function DCr(e) {
  return /^installed_plugins\.set-aside\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.json$/.test(e)
}

function LGi(e, n) {
  return `installed_plugins.unreadable.${e.toISOString().slice(0,10)}.${n}.kept`
}

function LCr(e) {
  return /^installed_plugins\.unreadable\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.kept$/.test(e)
}

function ih(e) {
  return v(Kc(), "data", O(e))
}

function aNe(e) {
  let n = ih(e);
  if (q()) return n;
  return ie().mkdirSync(n), n
}
async function NCr(e, {
  throwIfUnreadable: n = !1
} = {}) {
  let r = ih(e),
    s = 0,
    a = async (c) => {
      for (let l of await we(c, {
          withFileTypes: !0
        })) {
        let g = v(c, l.name);
        if (l.isDirectory()) await a(g);
        else try {
          s += (await St(g)).size
        } catch {}
      }
    };
  try {
    await a(r)
  } catch (c) {
    if (n) {
      if (await JU(r) === "gone") return null;
      throw c
    }
    if (qt(c)) return null;
    throw c
  }
  if (s === 0) return null;
  return {
    bytes: s,
    human: en(s)
  }
}
async function dHn(e) {
  let n = ih(e);
  try {
    return await kt(n, {
      recursive: !0
    }), "removed"
  } catch (r) {
    if (K(r)) return "absent";
    return t(`Failed to delete plugin data dir ${n}: ${d(r)}`, {
      level: "warn"
    }), "failed"
  }
}
async function NGi(e) {
  let n = v(Kc(), "data"),
    r = O(e).toLowerCase();
  try {
    return (await we(n)).filter((s) => s.toLowerCase() === r).map((s) => v(n, s))
  } catch (s) {
    return K(s) || k(s) === "ENOTDIR" ? [] : void 0
  }
}
async function FCr(e) {
  return await JU(ih(e)) === "gone"
}
var xe = !0;
var Tee = () => vp() && _t(q6i, {
  safe: xe
});
var Q_ = () => Tee() ? Yp() ? "answered" : "unanswered" : "unasked";

function lnn(e) {
  if (ACr()) return `Claude Code won't load marketplace "${Qe(e)}": its name looks like the name of one of Anthropic's own marketplaces`;
  return `Claude Code refuses the marketplace name "${Qe(e)}": it looks like one of Anthropic's own`
}

function RCr(e, n) {
  return `Failed to load marketplace "${Qe(e)}": ${n}`
}

function ACr() {
  return !1
}
var At = 64;

function U(e, n = "it") {
  let r = e.length <= At ? bd("plugin marketplace remove", e) : null;
  return r === null ? `Remove ${n} in /plugin \u2192 Marketplaces` : `Remove ${n} with: ${r}`
}
var Ie = "this also uninstalls its plugins and deletes their data, options and secrets",
  Ne = "if its maintainer renames it, update it instead",
  wt = ["Removing it is the only fix. That also uninstalls its plugins and deletes what they saved:", "their data, options and secrets."],
  vt = "After removing it, you can add it again from the same source; if that is refused, its maintainer has to rename it first.",
  xt = ["It was added from a settings file. To keep it, do these in order (if your organization's managed settings add it, an administrator does step 1):", "1. In each settings file that lists it under extraKnownMarketplaces, rename its entry (the key and its source.name) to a plain-ASCII name that doesn't look like one of Anthropic's."],
  It = "(this also uninstalls its plugins and deletes their data, options and secrets).",
  Nt = "3. Start Claude Code again, in that project's folder if it is a project's settings file, then install its plugins from the renamed one.";

function De(e) {
  return [...xt, `2. ${U(e,"the old name")}`, It, Nt]
}

function Me(e) {
  return [...wt, vt, U(e)]
}

function xCr(e, n = {}) {
  if (n.declaredInSettings === !0) return `Reloading won't help. ${De(e).join(" ")}`;
  if (ACr()) return `Reloading won't help. ${Me(e).join(" ")}`;
  return `Reloading won't help. ${U(e)} (${Ie}; ${Ne})`
}

function OEs(e, n = {}) {
  let r = ACr(),
    s = r ? [`Claude Code won't load marketplace "${Qe(e)}":`, "its name looks like the name of one of Anthropic's own marketplaces. Reloading won't help."] : [`Claude Code refuses the marketplace name "${Qe(e)}":`, "it looks like one of Anthropic's own. Reloading won't help."];
  if (n.declaredInSettings === !0) return [...s, ...De(e)];
  if (r) return [...s, ...Me(e)];
  return [...s, U(e), `(${Ie};`, `${Ne}).`]
}
var IEs = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Reloading won't help. Remove it in /plugin \u2192 Marketplaces (deletes its plugins and their data, options and secrets).",
  Dt = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Rename it in its settings file, remove the old name in /plugin \u2192 Marketplaces (plugins and data go), then restart.";

function MEs(e) {
  return e ? Dt : IEs
}
var ne = (e, n) => `${e} only while "${Qe(n)}" is disabled. Disable or uninstall the copy you don't need`;
var Aht = {
  "network-location": "re-add the marketplace (one added from a folder or file must be re-added from a copy on this computer), or, to trust a folder on a network drive, declare it under extraKnownMarketplaces in user or managed settings",
  source: "re-add the marketplace with a supported source",
  declaration: "re-add the marketplace from the source that entry lists, or change the entry"
};
var $t = ["available", "required", "auto_install", "not_available"],
  PCr = p(() => B($t));

function qgo(e) {
  return PCr().safeParse(e).data
}
var Lt = ["anthropic_catalog", "other_catalog", "account_uploads", "account_marketplace", "org_library", "org_marketplace"],
  OCr = p(() => B(Lt));

function Ygo(e) {
  return OCr().safeParse(e).data
}

function DEs(e, n, r, s, a = !1) {
  {
    let c = Qe(e),
      l = n && n.length > 0 ? `now lists it as ${n.map((g)=>Qe(g)).join(" or ")}` : s !== void 0 ? `still lists it, but Claude Code cannot install it (${Qe(s)})` : r ? "now lists a different repository under that name" : a ? "does not list it (or your organization blocks it)" : "no longer lists it (removed, or blocked by your organization)";
    return a ? `Plugin "${c}" is not loaded: installed_plugins.json could not be read, so its install could not be checked, and the Anthropic Directory ${l}` : `Plugin "${c}" is not loaded: the Anthropic Directory ${l}`
  }
  return ""
}

function dnn(e) {
  return e.type === "marketplace-load-failed" && e.reason === "cache-miss" && e.marketplace === In && e.directoryBlockedBy === void 0
}
var cnn = `Run /reload-plugins, or: claude plugin marketplace update ${In}`;

function tHn(e) {
  if (e.type === "marketplace-not-found" && e.marketplace !== In && FA(e.marketplace) && e.registrationHidden !== void 0) {
    let n = CHs(e.marketplace);
    return n === null ? "Remove that entry from known_marketplaces.json, then uninstall this plugin if it is still listed" : `Remove it: ${n}`
  }
  return
}

function re(e) {
  switch (e) {
    case "managed_setting":
      return "Your administrator turned it off with disablePluginDirectory in managed settings.";
    case "allowlist":
      return "Your administrator's marketplace allowlist (strictKnownMarketplaces) does not include the Anthropic Directory.";
    case "blocklist":
      return "Your administrator listed it in blockedMarketplaces in managed settings.";
    case "policy_limit":
      return "Your organization's policy does not allow it."
  }
  return ""
}

function Xgo(e) {
  if (e.directoryDisabledByOrganization) return "managed_setting";
  if (e.marketplace !== In || e.sourceUnverifiable) return null;
  return e.blockedByBlocklist ? "blocklist" : "allowlist"
}

function unn(e, n) {
  {
    let r = re(n),
      s = e === void 0 ? "The Anthropic Directory is blocked by your organization" : `Plugin "${Qe(e)}" is not loaded: the Anthropic Directory is blocked by your organization`;
    return r === "" ? s : `${s}. ${r}`
  }
  return ""
}
var nHn = "(not recorded)",
  Ot = {
    "path-not-found": !1,
    "path-traversal": !1,
    "mcp-config-invalid": !1,
    "lsp-config-invalid": !1,
    "hook-load-failed": !1,
    "component-load-failed": !1,
    "mcpb-download-failed": !1,
    "mcpb-extract-failed": !1,
    "mcpb-invalid-manifest": !1,
    "lsp-server-start-failed": !1,
    "lsp-server-crashed": !1,
    "lsp-request-timeout": !1,
    "lsp-request-failed": !1,
    "plugin-not-installed": !1,
    "marketplace-blocked-by-policy": !1,
    "autoupdate-blocked-by-pinner": !1,
    "autoupdate-deferred-entry-helper": !1,
    "autoupdate-disabled-by-policy": !1,
    "plugin-cache-miss": !0,
    "generic-error": !0,
    "manifest-parse-error": !0,
    "manifest-validation-error": !0,
    "marketplace-not-found": !0,
    "marketplace-load-failed": !0,
    "plugin-not-found": !0,
    "git-auth-failed": !0,
    "git-timeout": !0,
    "network-error": !0,
    "dependency-unsatisfied": !0,
    "dependency-version-unsatisfied": !0
  };

function VGe(e) {
  if (e.type === "path-not-found") return e.plugin === void 0 && e.errno !== void 0;
  if (e.type === "plugin-not-installed") return e.seedHasOtherVersion === !0 || e.registryReadFailed === !0;
  if (e.type === "generic-error") return e.orphan !== !0 && e.refused !== !0;
  if (e.type === "marketplace-load-failed") return e.untrustedReservedName !== !0 && e.nameRefused !== !0 && e.directoryBlockedBy === void 0;
  if (e.type === "marketplace-not-found") return e.registrationHidden === void 0 || e.registrationHidden === "network-location";
  if (e.type === "plugin-not-found") return e.removedFromDirectory !== !0 || e.registryReadFailed === !0;
  return Ot[e.type]
}

function q7e(e) {
  return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied"
}

function iNe(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let n = e.source.lastIndexOf("@");
  if (n > 0) return e.source.slice(0, n);
  return
}

function KGe(e) {
  return e.type === "autoupdate-deferred-entry-helper" || e.type === "autoupdate-disabled-by-policy"
}

function LEs(e) {
  return `"${Qe(e)}" is loaded from your claude.ai account but meets a marketplace dependency only for other claude.ai plugins`
}

function ck(e) {
  return Qn(Tt(e))
}

function Tt(e) {
  switch (e.type) {
    case "generic-error":
      return Nte(e.error);
    case "path-not-found":
      return e.plugin === void 0 ? `Path not found: ${Ji(e.path)}${e.errno?` (${Qe(e.errno)})`:""}` : `Path not found: ${Ji(e.path)} (${Qe(e.component)}${e.errno?`, ${Qe(e.errno)}`:""})`;
    case "path-traversal":
      return !e.reason && (e.component === "mcp-servers" || e.component === "lsp-servers") ? `Server file not read: ${Ji(e.path)} is absolute or has a ".." part (${Qe(e.component)})` : `Path escapes plugin directory: ${Ji(e.path)} (${Qe(e.component)})${e.reason?` \u2014 ${Ji(e.reason)}`:""}`;
    case "git-auth-failed":
      return `Git authentication failed (${Qe(e.authType)}): ${Ji(e.gitUrl)}`;
    case "git-timeout":
      return `Git ${Qe(e.operation)} timeout: ${Ji(e.gitUrl)}`;
    case "network-error":
      return `Network error: ${Ji(e.url)}${e.details?` - ${Qe(e.details)}`:""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${Qe(e.parseError,500)} (in ${Ji(e.manifestPath)})`;
    case "manifest-validation-error":
      return e.containmentRefused ? `Plugin not loaded: its manifest ${Ji(e.manifestPath)} was not read, because ${Qe(e.validationErrors.join(", "),1000)}` : `Manifest validation failed: ${Qe(e.validationErrors.join(", "),1000)} (in ${Ji(e.manifestPath)})`;
    case "plugin-not-found":
      if (e.removedFromDirectory) return DEs(e.pluginId, e.directoryRenamedTo, e.directoryIdentityChanged === !0, e.directoryNotInstallableReason, e.registryReadFailed === !0);
      return `Plugin ${Qe(e.pluginId)} not found in marketplace ${Qe(e.marketplace)}`;
    case "marketplace-not-found":
      if (e.registrationHidden !== void 0) {
        let n = `Marketplace ${Qe(e.marketplace)} is added but ignored`;
        return e.registrationHiddenReason === void 0 ? `${n} (see the debug log)` : `${n}. ${Ua(zln(e.registrationHiddenReason))}. ${Ua(Aht[e.registrationHidden])}.`
      }
      return `Marketplace ${Qe(e.marketplace)} not found`;
    case "marketplace-load-failed":
      if (e.directoryBlockedBy !== void 0) return unn(iNe(e) ?? e.source, e.directoryBlockedBy);
      if (dnn(e)) return `Plugin "${Qe(iNe(e)??e.source)}" is not loaded: the Anthropic Directory's catalog is not on this machine yet.`;
      if (e.nameRefused) return lnn(e.marketplace);
      return `Marketplace ${Qe(e.marketplace)} failed to load: ${Qe(e.reason)}`;
    case "mcp-config-invalid":
      return `MCP server ${Qe(e.serverName)} invalid: ${Qe(e.validationError)}`;
    case "hook-load-failed":
      return `Hook load failed: ${Qe(e.reason)}`;
    case "component-load-failed":
      return `${Qe(e.component)} load failed from ${Ji(e.path)}: ${Qe(e.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${Ji(e.url)}: ${Qe(e.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${Ji(e.mcpbPath)}: ${Qe(e.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${Ji(e.mcpbPath)}: ${Qe(e.validationError)}`;
    case "lsp-config-invalid":
      return `Plugin "${Qe(e.plugin)}" has invalid LSP server config for "${Qe(e.serverName)}": ${Qe(e.validationError)}`;
    case "lsp-server-start-failed":
      return `Plugin "${Qe(e.plugin)}" failed to start LSP server "${Qe(e.serverName)}": ${Qe(e.reason)}`;
    case "lsp-server-crashed":
      if (e.signal) return `Plugin "${Qe(e.plugin)}" LSP server "${Qe(e.serverName)}" crashed with signal ${e.signal}`;
      return `Plugin "${Qe(e.plugin)}" LSP server "${Qe(e.serverName)}" crashed with exit code ${e.exitCode??"unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${Qe(e.plugin)}" LSP server "${Qe(e.serverName)}" timed out on ${Qe(e.method)} request after ${e.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${Qe(e.plugin)}" LSP server "${Qe(e.serverName)}" ${Qe(e.method)} request failed: ${Qe(e.error)}`;
    case "marketplace-blocked-by-policy": {
      let n = Xgo(e);
      if (n !== null) return unn(e.plugin, n);
      if (e.blockedByBlocklist) return `Marketplace '${Qe(e.marketplace)}' is blocked by enterprise policy`;
      return `Marketplace '${Qe(e.marketplace)}' is not in the allowed marketplace list`
    }
    case "dependency-unsatisfied": {
      let n = bd("plugin install", e.dependency),
        r = e.reason === "not-enabled" ? "disabled \u2014 enable it or remove the dependency" : `not installed \u2014 ${e.sameNameSyncedPlugin===void 0?"":`${LEs(e.sameNameSyncedPlugin)}; `}${n?`run \`${n}\`, or `:""}check that its marketplace is added`;
      return `Dependency "${Qe(e.dependency)}" is ${r}`
    }
    case "dependency-version-unsatisfied":
      return `Requires "${Qe(e.dependency)}" ${Qe(e.required)}, installed ${Qe(e.installed??"version unknown")}`;
    case "plugin-cache-miss":
      if (e.registryReadFailed === !0) return `Plugin "${Qe(e.plugin)}" is not loaded: installed_plugins.json could not be read, so its install could not be checked \u2014 fix or restore installed_plugins.json in the plugins directory, then run /reload-plugins${e.installedListHeldNote===void 0?"":`. ${e.installedListHeldNote}`}`;
      return `Plugin "${Qe(e.plugin)}" not cached at ${Ji(e.installPath)} \u2014 run /plugin to refresh${e.installedListHeldNote===void 0?"":`. ${e.installedListHeldNote}`}`;
    case "plugin-not-installed": {
      let n = bd("plugin install", e.source, "--scope project");
      if (e.installedListHeldNote !== void 0) return `Plugin "${Qe(e.plugin)}" is enabled in project settings, but whether it is installed could not be checked. ${e.installedListHeldNote}`;
      return `Plugin "${Qe(e.plugin)}" is enabled in project settings but isn't installed${n?` \u2014 run \`${n}\``:" \u2014 install it at project scope (from /plugin or claude plugin install)"}`
    }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return e.message;
    case "autoupdate-blocked-by-pinner": {
      let n = e.heldAt ? ` at ${Ji(e.heldAt)}` : "",
        r = Qe(e.blockedBy.join(", ")),
        s = e.disabledPinners.length > 0 ? ` (note: ${Qe(e.disabledPinners.join(", "))} ${e.disabledPinners.length===1?"is":"are"} currently disabled)` : "";
      return `Autoupdate held "${Qe(e.plugin)}"${n} \u2014 version constraint from ${r}${s}`
    }
  }
}

function Vue(e) {
  return Qn(Ut(e))
}

function Ut(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let n = $e(e.manifestFields);
      return `Default ${Qe(e.component)}/ folder is ignored because the manifest sets ${n}`
    }
    case "mcp-server-suppressed-duplicate": {
      let n = e.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${Qe(e.duplicateOf.split(":")[1]??"?")}"` : `already-configured "${Qe(e.duplicateOf)}"`;
      return `MCP server "${Qe(e.serverName)}" skipped \u2014 same command/URL as ${n}`
    }
    case "mcpb-needs-config":
      return `Bundled MCP server "${Qe(e.serverName)}" was not started: it needs configuration`;
    case "mcp-server-connector-blocked":
      return `MCP server "${Qe(e.serverName)}" is turned off by your organization's connector settings`;
    case "plugin-renamed":
      return e.renamedTo === null ? `Removed from the "${Qe(e.marketplace)}" marketplace` : `Renamed to "${Qe(e.renamedTo)}" in the "${Qe(e.marketplace)}" marketplace`;
    case "lsp-extension-conflict": {
      let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : void 0,
        r = n ? `plugin "${Qe(n)}"` : `"${Qe(e.activeServer)}"`;
      return `LSP server "${Qe(e.serverName)}" is not used for ${Qe(e.extension)} files \u2014 ${r} already registered a server for that extension`
    }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return zln(e.warning);
    case "broken-wikilink":
      return `${Qe(e.raw)} in ${Ji(e.filePath)}:${e.line} doesn't resolve to a skill`;
    case "synced-plugin-shadowed":
      return `"${Qe(e.source)}" from claude.ai not loaded \u2014 "${Qe(e.shadowedBy)}" on this machine has the same name and takes precedence`;
    case "hooks-left-out-by-name":
      return `Its hooks.json hooks do not run. "${Qe(e.heldBy)}" holds the same plugin name and comes first`;
    case "hooks-module-left-out-by-name":
      return `Its hooks module does not load. "${Qe(e.heldBy)}" holds the same plugin name and comes first`;
    case "hooks-passed-over": {
      let n = e.patterns.map((s) => Qe(s)).join(", "),
        r = (e.reopened ?? []).map((s) => `. ${Qe(s.plugin)} may reopen ` + s.patterns.map((a) => Qe(a)).join(", "));
      return `Its hooks on ${n} do not run here: where an organization manages Claude Code, these events pass over the plugins you install${r.length>0?", unless one reopens them":""}` + r.join("")
    }
    case "managed-hooks-restricted":
      return `"${Qe(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
    case "managed-plugin-disabled-by-settings":
      return `"${Qe(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${IR(e.overriddenBy)} settings enable it, which overrides your user setting`;
    case "dependencies-refused":
      return `The packages it lists were not installed, because ${Qe(tt(e.reason,";"))}`;
    case "dependencies-not-installed": {
      let n = bd("plugin update", e.source);
      return `The packages it lists are not installed. ${n?`Run \`${n}\` to install them`:"Update it from /plugin to install them"}`
    }
  }
}

function Jgo(e) {
  return Qn(Ft(e))
}

function Ft(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let n = $e(e.manifestFields);
      if (e.manifestFields.length === 1) return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${n} list if you want both`;
      return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`
    }
    case "project-scope-suppressed-untrusted":
      return "If this workspace is not trusted yet, accept the trust dialog, then run /reload-plugins. If it is, restart Claude Code in the folder that holds that .claude folder.";
    case "project-scope-server-stripped":
      return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";
    case "broken-wikilink":
      return e.reason === "invalid" ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link" : `Create one of: ${e.tried.map((n)=>Ji(n)).join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate": {
      if (e.duplicateOf.startsWith("plugin:")) {
        let n = e.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${Qe(n)}" if you want this plugin's version instead`
      }
      return `Remove "${Qe(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`
    }
    case "mcpb-needs-config":
      return `Open "${Qe(e.plugin)}" in the Installed tab and choose Configure`;
    case "mcp-server-connector-blocked":
      return "An organization admin can change this in the claude.ai connector settings. Then start a new session";
    case "lsp-extension-conflict": {
      let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] ?? "the other plugin" : e.activeServer;
      if (n === e.plugin) return `Plugin "${Qe(e.plugin)}" declares two LSP servers for ${Qe(e.extension)} \u2014 remove or reorder "${Qe(e.serverName)}" in its lspServers config`;
      return `Disable plugin "${Qe(n)}" to use this plugin's LSP server for ${Qe(e.extension)} files, or disable "${Qe(e.plugin)}" to silence this warning`
    }
    case "synced-plugin-shadowed": {
      if (e.source.endsWith("@inline")) return `To use the claude.ai copy instead, disable or remove "${Qe(e.shadowedBy)}"`;
      let n = bd("plugin enable", e.source);
      return `To use the claude.ai copy instead, ${n?`run \`${n}\``:"enable it from /plugin"}, then disable or remove "${Qe(e.shadowedBy)}"`
    }
    case "hooks-left-out-by-name":
      return ne("One plugin per name runs hooks.json hooks, so this copy's run", e.heldBy);
    case "hooks-module-left-out-by-name":
      return ne("One plugin per name loads a hooks module, so this copy's loads", e.heldBy);
    case "hooks-passed-over":
      return `Only a plugin that counts as your organization's own runs hooks on these events${e.reopened?", or one it lets through":""}. An administrator sets that up in managed settings`;
    case "managed-hooks-restricted":
      return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
    case "managed-plugin-disabled-by-settings": {
      let n = bd("plugin enable", e.source);
      return `To run it, ${n?`run \`${n}\``:"enable it from /plugin"}; if you did not expect this copy, remove its directory`
    }
    case "plugin-renamed":
      return e.renamedTo === null ? `Remove "${Qe(e.source)}" from enabledPlugins if you still see this on the next start` : `If you still see this on the next start, update enabledPlugins to use "${Qe(e.renamedTo)}@${Qe(e.marketplace)}" (managed settings are not rewritten automatically)`;
    case "dependencies-refused":
      return "If it needs those packages, parts of it may not work. Updating or reinstalling this version of the plugin will not install them while that is still true";
    case "dependencies-not-installed":
      return "If it needs those packages, parts of it may not work";
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${Qe(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${Qe(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
        case "policySettings":
          return "Managed policy can't be overridden locally \u2014 contact your administrator";
        case "userSettings":
          return ""
      }
  }
}

function $e(e) {
  return e.map((n) => `"${n}"`).join(" and ")
}
import {
  lstat as Xt,
  realpath as H,
  stat as C
} from "fs/promises";
import {
  basename as Qt,
  dirname as N,
  isAbsolute as Fe,
  join as Be,
  resolve as I
} from "path";
import {
  stat as Bt
} from "fs/promises";
import {
  isAbsolute as Kt,
  resolve as Le,
  sep as Gt
} from "path";

function jt(e) {
  if (Kt(e)) return og.workspace(e);
  return og.workspace(x() === "windows" ? Le(e) : ie().cwd() + Gt + e)
}

function oe(e) {
  return Object.assign(new R(`ENOENT: no such file or directory, stat '${e}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "stat",
    path: e
  })
}

function rHn(e) {
  return Object.assign(new R(`ENOENT: no such file or directory, open '${e}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "open",
    path: e
  })
}

function Oe(e) {
  return e.code === "Failed" && (vY(e.telemetryCode) !== void 0 || /^ERR_/.test(e.telemetryCode ?? "")) && e.cause instanceof Error ? e.cause : void 0
}

function se(e, n) {
  return e === "workspace" ? jt(n) : og.system(Le(n))
}
async function Qgo(e, n, r = "workspace") {
  if (q()) throw oe(n);
  if (!X() || e === void 0) return Bt(n);
  if (n === "") throw oe(n);
  let s = await e.hostFiles.stat(se(r, n), {
    follow: !0
  });
  if (!s.ok) throw Oe(s.error) ?? Object.assign(new R(`Failed to probe the local marketplace path ${n}: ${Ht(s.error)}`, "failed to probe a local marketplace path (v5 backend error)"), {
    cause: s.error
  });
  if (s.value.kind === "absent") throw oe(n);
  let a = s.value.kind === "directory";
  return {
    isDirectory: () => a
  }
}
async function fnn(e, n, r) {
  if (r === "" || q()) return {
    absent: "ENOENT"
  };
  let s = await e.hostFiles.readText(se(n, r));
  if (!s.ok) throw Oe(s.error) ?? Object.assign(new R(`Failed to read the marketplace file ${r}: ${Ht(s.error)}`, "failed to read a local marketplace file (v5 backend error)"), {
    cause: s.error
  });
  return s.value.found ? {
    text: s.value.value
  } : {
    absent: "ENOENT"
  }
}
async function NEs(e, n, r = "workspace") {
  if (q()) return !1;
  if (!X() || e === void 0) return gf(n);
  if (n === "") return !1;
  let s = await e.hostFiles.stat(se(r, n), {
    follow: !0
  });
  return s.ok && s.value.kind !== "absent"
}
import {
  normalize as zt,
  parse as Wt,
  resolve as ae,
  sep as Yt
} from "path";
var Oht = `is on a network drive, has "." or ".." in its path, or couldn't be checked`;

function vD(e, {
  trustedRoots: n = []
} = {}) {
  let r = Vt(e, n),
    {
      absolute: s,
      root: a,
      tail: c
    } = r;
  if (r.dotSegmentInTail) return {
    absolute: s,
    suspect: !0
  };
  if (a !== void 0) {
    let g = ae(Ee(), a);
    return {
      absolute: s,
      suspect: sun(g, c)
    }
  }
  let l = r.networkShapedUnvouched || q5(s);
  return {
    absolute: s,
    suspect: l
  }
}

function Vt(e, n) {
  if (e.trim() === "") return {
    absolute: e,
    root: void 0,
    tail: e,
    dotSegmentInTail: !1,
    networkShapedUnvouched: !0
  };
  let r = ae(Ee(), e),
    {
      root: s,
      tail: a
    } = Jt(e, n);
  return {
    absolute: r,
    root: s,
    tail: a,
    dotSegmentInTail: CG(a),
    networkShapedUnvouched: s === void 0 && (DT(e) || DT(r))
  }
}

function Zt(e) {
  return [Kc(), ...dU(), ...e]
}

function Jt(e, n) {
  let r = yWt(e),
    s;
  for (let a of Zt(n))
    for (let c of [a, zt(a)]) {
      let l = yWt(c.replace(/[\\/]+$/, ""));
      if (l === "" || l === ".") continue;
      let g;
      if (r === l) g = "";
      else if (r.startsWith(l + Yt) || r.startsWith(l + "/")) g = e.slice(e.length - (r.length - l.length));
      if (g !== void 0 && (s === void 0 || g.length < s.tail.length)) s = {
        root: a,
        tail: g
      }
    }
  return s ?? {
    root: void 0,
    tail: e
  }
}

function CX(e) {
  switch (x()) {
    case "windows":
      return MT(yWt(e));
    case "macos":
      return MT(e);
    default:
      return e
  }
}

function hnn(e) {
  if (e.trim() === "") return;
  return CX(nw(ae(Ee(), e), {
    foldCase: !0
  }))
}

function HEs(e) {
  if (x() !== "windows") return;
  let n = Wt(e).root,
    r = (a) => oun(Jv(a)),
    s = r(n);
  if (s === void 0) {
    let a = pB(n);
    if (a === null) return "undeterminable";
    s = r(a)
  }
  return s === void 0 ? void 0 : {
    walkRoot: n,
    ...s
  }
}

function oyo(e) {
  let n = HEs(e);
  if (n === void 0 || n === "undeterminable") return n;
  return {
    walkRoot: n.walkRoot,
    distroDir: n.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/")
  }
}

function syo(e, n) {
  return K$r(e, {
    exactDots: !0
  }) ?? V$r(e, {
    exactDots: !0
  }) ?? (n === void 0 ? void 0 : G$r(e, n.walkRoot, n.distroDir))
}

function HCr(e) {
  if (!Fe(e)) return !1;
  return x() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e)
}

function $Cr(e, n) {
  if (!Qh(e)) return e;
  let r = n === void 0 ? Df(e.path) : fqn(e.path, n),
    s = HCr(r) ? I(r) : r;
  return s === e.path ? e : {
    ...e,
    path: s
  }
}

function le(e, n) {
  let r = iyo(e);
  if (r === void 0 || e === void 0 || !Qh(e)) return [];
  if (!(n !== void 0 && n.source === e.source && ("path" in n) && n.path === e.path) || !HCr(r) || bl(r)) return [];
  return [r]
}

function iyo(e) {
  switch (e?.source) {
    case "directory":
      return e.path;
    case "file":
      return Qt(N(e.path)) === ".claude-plugin" ? N(N(e.path)) : void 0;
    default:
      return
  }
}
async function FGi(e, {
  entrySource: n,
  marketplaceLocation: r,
  pluginPath: s
}) {
  let a = iyo(e);
  if (a === void 0 || typeof n !== "string" || !HCr(a) || I(r) !== I(a) || !ou(I(a), I(s), !0) || [a, s].some((g) => Oc(g) || bl(g))) return !1;
  let [c, l] = await Promise.all([H(a).catch(() => {
    return
  }), H(s).catch(() => {
    return
  })]);
  return c !== void 0 && l !== void 0 && ou(c, l, !0)
}

function lNe(e, n, r) {
  let s = He(e, n, r);
  return s === void 0 ? [] : le(s.marketplaceSource, s.corroboratingSource)
}

function $Es(e, n, r) {
  let {
    absolute: s,
    suspect: a
  } = vD(e, {
    trustedRoots: le(n, r)
  });
  return a ? void 0 : s
}

function tn(e) {
  return `Marketplace directory refused: its recorded location ${Ji(e)} ${Oht}. ${Ua(Aht["network-location"])}.`
}
var UCr = /^\.(?:[\\/]+|$)/;

function BCr(e) {
  let n = e.replace(UCr, "");
  return n !== "" && (Fe(n) || CG(n) || DT(n) || Oc(n))
}

function nn(e, n) {
  let r = n.replace(UCr, "");
  if (r === "") return e;
  if (BCr(n) || sun(e, r)) return;
  return Be(e, r)
}

function rn(e) {
  return `Plugin source path refused: ${Et(e,300)} does not stay inside its marketplace directory. Check that the marketplace entry has a plain relative path.`
}
async function ayo(e, n, {
  marketplaceSource: r,
  corroboratingSource: s,
  storageV5: a,
  localMarketplaceSpace: c = "workspace"
}) {
  let l = $Es(e, r, s);
  if (l === void 0) return {
    kind: "location-refused"
  };
  let g, m;
  try {
    g = (r !== void 0 && Qh(r) ? await Qgo(a, l, c) : await C(l)).isDirectory()
  } catch (b) {
    m = b
  }
  let f = un(l, r, g);
  if (f === void 0) return {
    kind: "entry-refused",
    marketplaceDir: N(l)
  };
  let h = nn(f, n);
  if (g === void 0) {
    let b = k(m);
    return b === "ENOENT" || b === "ENOTDIR" ? {
      kind: "location-missing",
      error: m,
      marketplaceDir: f,
      entryPath: h
    } : {
      kind: "location-error",
      error: m,
      marketplaceDir: f,
      entryPath: h,
      entryRefusedLexically: BCr(n)
    }
  }
  if (h === void 0) return {
    kind: "entry-refused",
    marketplaceDir: f
  };
  let w = await Te(f),
    he = !1;
  if (!w) {
    for (let b of le(r, s))
      if (Wp(b, f) && !await Te(b)) {
        he = !0;
        break
      }
  }
  if (!he) {
    if (w) {
      if (!await on(f, n)) return {
        kind: "entry-refused",
        marketplaceDir: f,
        cause: "plain-directory-walk"
      }
    } else if (!Wp(f, h) || !await sn(f, h)) return {
      kind: "entry-refused",
      marketplaceDir: f
    }
  }
  return {
    kind: "ok",
    marketplaceDir: f,
    entryPath: h
  }
}
async function Te(e) {
  if (x() === "windows") return !1;
  if (Oc(e)) return !0;
  let n;
  try {
    n = await C(e, {
      bigint: !0
    })
  } catch {
    return !1
  }
  if (!n.isDirectory()) return !1;
  if (n.ino === 0n) return !0;
  let r;
  try {
    r = await H(e)
  } catch {
    return !0
  }
  try {
    let s = await C(r, {
      bigint: !0
    });
    return s.ino === 0n || s.dev !== n.dev || s.ino !== n.ino
  } catch {
    return !0
  }
}
async function on(e, n) {
  if (BCr(n)) return !1;
  let r = n.replace(UCr, ""),
    s = e;
  for (let a of r.split("/").filter(Boolean)) {
    s = Be(s, a);
    let c;
    try {
      c = await Xt(s)
    } catch (l) {
      let g = k(l);
      if (g === "ENOENT" || g === "ENOTDIR") return !0;
      return t(`Marketplace entry ${Ji(s)} refused: lstat failed (${k(l)??Et(d(l),160)}) while walking a tree realpath cannot judge`), !1
    }
    if (!c.isDirectory()) return t(`Marketplace entry ${Ji(s)} refused: ${c.isSymbolicLink()?"a symlink":"not a directory"} under a marketplace directory realpath cannot judge; only plain directories are allowed there`), !1
  }
  return !0
}
async function sn(e, n) {
  if (x() === "windows") return !0;
  let r = (m) => (t(`Marketplace entry ${Ji(n)} refused: ${m} (its declared spelling does not provably open inside ${Ji(e)})`), !1),
    s = (m) => k(m) ?? Et(d(m), 160),
    a;
  try {
    a = await H(n)
  } catch (m) {
    let f = k(m);
    if (f !== "ENOENT" && f !== "ENOTDIR") return r(`realpath failed (${s(m)})`);
    try {
      await C(n)
    } catch (h) {
      let w = k(h);
      return w === "ENOENT" || w === "ENOTDIR" ? !0 : r(`stat failed (${s(h)})`)
    }
    return r("it exists but realpath cannot resolve it as spelled")
  }
  let c;
  try {
    c = await Promise.all([C(n, {
      bigint: !0
    }), C(a, {
      bigint: !0
    })])
  } catch (m) {
    return r(`stat failed (${s(m)})`)
  }
  let [l, g] = c;
  if (l.ino === 0n || g.ino === 0n) return r("the filesystem reports no inode number");
  if (l.dev !== g.dev || l.ino !== g.ino) return r(`its spelling opens a different file from the one realpath names (${Ji(a)})`);
  if (!Wp(e, a)) return r(`it opens ${Ji(a)}, outside the marketplace directory`);
  return !0
}

function F(e) {
  return e === "location-refused" ? `its marketplace's recorded location ${Oht}` : "its marketplace entry path does not stay inside the marketplace directory (an absolute, climbing, network-shaped, backslash-containing or link-traversing entry, an entry of a fetched marketplace that resolves or opens outside its tree \u2014 or a relative entry in a url-catalog marketplace, which has no local directory)"
}

function HGi(e) {
  switch (e.kind) {
    case "ok":
    case "location-missing":
      return e.entryPath === void 0 ? {
        entryPath: void 0,
        reason: F("entry-refused")
      } : {
        entryPath: e.entryPath
      };
    case "location-error":
      return e.entryPath !== void 0 ? {
        entryPath: e.entryPath
      } : e.entryRefusedLexically ? {
        entryPath: void 0,
        reason: F("entry-refused")
      } : {
        entryPath: void 0,
        reason: `its marketplace directory could not be examined (${k(e.error)??"unknown error"})`
      };
    case "location-refused":
    case "entry-refused":
      return {
        entryPath: void 0, reason: F(e.kind)
      }
  }
}

function X7e(e) {
  switch (e.kind) {
    case "ok":
      return {
        entryPath: e.entryPath
      };
    case "location-missing":
      return {
        entryPath: void 0, reason: "its marketplace directory does not exist"
      };
    case "location-error":
      return {
        entryPath: void 0, reason: `its marketplace directory could not be examined (${k(e.error)??"unknown error"})`
      };
    case "location-refused":
    case "entry-refused":
      return {
        entryPath: void 0, reason: F(e.kind)
      }
  }
}
async function _3(e, n, r, s, a, c, l) {
  return ayo(n, r, {
    ...He(e, s, a) ?? {
      marketplaceSource: void 0,
      corroboratingSource: void 0
    },
    storageV5: c,
    localMarketplaceSpace: l
  })
}

function He(e, n, r) {
  let {
    marketplace: s
  } = $n(e);
  if (!s) return;
  let a = Object.hasOwn(r, s) ? r[s]?.source : void 0;
  return {
    marketplaceSource: (n !== void 0 && Object.hasOwn(n, s) ? n[s]?.source : void 0) ?? a,
    corroboratingSource: a
  }
}
var an = /[\\/]marketplace\.json$/i;

function un(e, n, r) {
  if (r === !0) return e;
  if (n?.source === "url" || n === void 0 && /\.json$/i.test(e)) return r === !1 ? void 0 : e;
  return r === !1 || an.test(e) ? N(e) : e
}

function Iht(e, n, r) {
  switch (e.kind) {
    case "location-refused":
      return {
        code: "marketplace_location_refused", message: tn(n)
      };
    case "location-missing":
      return {
        code: "marketplace_dir_missing", message: `Marketplace directory not found at path: ${Ji(n)}`
      };
    case "location-error":
      return {
        code: "marketplace_dir_unreadable", message: `Marketplace directory could not be read at path: ${Ji(n)} (${k(e.error)??"unknown error"})`
      };
    case "entry-refused":
      return {
        code: "marketplace_entry_path_refused", message: rn(r) + (e.cause === "plain-directory-walk" ? cn : "")
      }
  }
}
var cn = " The marketplace directory's own path cannot be resolved reliably on this platform (for example, a backslash in one of its components), so only plain directories are accepted as entries there (no links); move the marketplace (or the plugins directory) to a plain path to lift that.";
import {
  basename as We,
  isAbsolute as mn,
  join as S,
  relative as hn,
  sep as yn
} from "path";
import {
  resolve as dn
} from "path";

function Mht(e) {
  let n = dn(e).normalize("NFC");
  return x() === "windows" ? n.toLowerCase() : n
}

function lyo(e, n, r, s) {
  let a = new Map;
  if (Buffer.byteLength(n) > r) return t(`Ignoring ${e}: larger than the size cap`), a;
  let c;
  try {
    c = ee(n)
  } catch {
    return t(`Ignoring ${e}: not valid JSON`), a
  }
  if (typeof c !== "object" || c === null || Array.isArray(c)) return t(`Ignoring ${e}: not a JSON object`), a;
  for (let [l, g] of Object.entries(c)) {
    let m = s(g);
    if (m !== void 0) a.set(Mht(l), m)
  }
  return a
}
var gnn = ".meta.json",
  J7e = "server_plugin_id",
  cHn = "marketplace_name",
  jCr = "installation_preference",
  WCr = "marketplace_kind",
  G = "gives_way_to_official_install",
  Ke = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${ib}]{1,128}$`, "u");

function UEs(e) {
  return Ke.test(e)
}
var dyo = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;

function W_e(e) {
  return dyo.test(e)
}
var pn = p(() => u({
    [J7e]: o().regex(dyo).optional().catch(void 0),
    [cHn]: o().regex(Ke).optional().catch(void 0),
    [jCr]: PCr().optional().catch(void 0),
    [WCr]: OCr().optional().catch(void 0),
    [G]: T(!0).optional().catch(void 0)
  })),
  BEs = 4096;
async function jEs(e) {
  let n = e + gnn,
    r = !1,
    s = await yd(n, BEs, () => {
      r = !0
    });
  if (s === null) return r ? {
    unread: !0
  } : {};
  let a;
  try {
    a = ee(s)
  } catch {
    return t(`Ignoring plugin attribution sidecar at ${n}: not valid JSON`), {
      unread: !0
    }
  }
  return Ge(a, `sidecar at ${n}`, !1)
}

function Ge(e, n, r) {
  let s = pn().safeParse(e);
  if (!s.success) return t(`Ignoring plugin attribution ${n}: not a JSON object`), {
    unread: !0
  };
  let a = {},
    c = s.data[J7e];
  if (typeof c === "string" && W_e(c)) a.serverPluginId = c;
  let l = s.data[cHn];
  if (typeof l === "string" && UEs(l)) a.marketplaceName = l;
  let g = qgo(s.data[jCr]);
  if (g !== void 0) a.installationPreference = g;
  let m = Ygo(s.data[WCr]);
  if (m !== void 0) a.marketplaceKind = m;
  if (r && s.data[G]) a.givesWayToOfficialInstall = !0;
  if (typeof e === "object" && e !== null) {
    for (let [f, h] of [
        [J7e, a.serverPluginId],
        [cHn, a.marketplaceName],
        [jCr, a.installationPreference],
        [WCr, a.marketplaceKind],
        [G, a.givesWayToOfficialInstall]
      ])
      if (f in e && h === void 0) {
        if (t(!r && f === G ? `Ignoring plugin attribution field (${n}): ${f} is accepted only in a CLAUDE_CODE_PLUGIN_ATTRIBUTION entry, not in a sidecar` : `Ignoring plugin attribution field (${n}): invalid ${f}`), f === cHn) a.unread = !0
      }
  }
  return a
}
var gn = 65536;

function fn(e) {
  let n = i.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (n === void 0) return;
  return lyo("CLAUDE_CODE_PLUGIN_ATTRIBUTION", n, gn, (r) => Ge(r, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry", !0)).get(Mht(e))
}
async function zCr(e) {
  return fn(e) ?? await jEs(e)
}
var cU = "manifest.json",
  ynn = ".marketplaces.json",
  kn = /^[A-Za-z0-9_-]{1,128}$/;

function UCe(e) {
  return kn.test(e)
}
var ue = ".marketplace-";

function WEs(e) {
  if (!UCe(e)) throw Error("claude.ai marketplace id is not a tagged id");
  return `${ue}${e}.json`
}

function $Gi(e) {
  return e.startsWith(ue) && e.endsWith(".json") && UCe(e.slice(ue.length, -5))
}
var UGi = ".last-complete-round";

function cyo(e, n = {
  pid: process.pid,
  procStart: void 0
}) {
  return `${n.pid}:${n.procStart??""}/${e}`
}

function QNt(e) {
  let n = e.indexOf("/");
  if (n === -1) return {
    name: e,
    ownerPid: void 0,
    ownerProcStart: void 0
  };
  let r = e.slice(0, n),
    s = r.indexOf(":"),
    a = s === -1 ? r : r.slice(0, s),
    c = s === -1 ? "" : r.slice(s + 1),
    l = Number(a);
  return {
    name: e.slice(n + 1),
    ownerPid: Number.isInteger(l) && l > 0 ? l : void 0,
    ownerProcStart: c || void 0
  }
}
class Dht extends Error {
  constructor() {
    super("synced item name is a legacy alias of a reserved path");
    this.name = "LegacyReservedSpellingError"
  }
}
var Z2 = "synced",
  _nn = ".trash",
  Cse = ".staging",
  ce = "unbound",
  Sn = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;

function ZNt(e) {
  return Sn.test(e)
}

function j(e, n) {
  return `${e.toLowerCase()}_${n?.toLowerCase()??ce}`
}

function de(e) {
  let [n, r, ...s] = e.split("_");
  if (s.length > 0 || n === void 0 || r === void 0 || !ZNt(n) || !(r === ce || ZNt(r))) return null;
  return {
    org: n,
    account: r
  }
}

function Q7e(e) {
  return de(e) !== null
}

function Lht(e) {
  return de(e)?.org ?? null
}
var Pn = ".bucket-";

function uyo(e, n) {
  return S(e, `${Pn}${n}`)
}

function BGi(e) {
  let n = de(e);
  if (n === null) return null;
  return n.account === ce ? "<org>_unbound" : "<org>_<account>"
}
var Ye = /~g(?:[2-9]|[1-9]\d+)$/;

function YGe(e) {
  return e.replace(Ye, "")
}

function bnn(e) {
  return e.replace(/[. ]+$/, "")
}

function qe(e) {
  let n = bnn(e.replace(/[<>:"|?*\\/]/g, "_"));
  if (!n) throw Error("synced item name resolves to sync root");
  return n
}

function bn(e, n) {
  let r = S(n, e),
    s = hn(n, r);
  if (!s || mn(s) || s === ".." || s.startsWith(`..${yn}`)) throw Error("synced item name escapes the sync root");
  return r
}

function Um(e) {
  return e.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").replace(/\u1e9e/g, "\xDF").normalize("NFD").toUpperCase().toLowerCase()
}
var En = /^[!-~]+$/,
  _n = 32,
  GCr = 512,
  Rn = 16777216,
  Cn;

function Z_(e) {
  if (En.test(e)) return e.toLowerCase();
  if (e.length < _n || e.length > GCr) return je(e);
  let n = Cn ??= fG(new lu({
      max: 8192,
      maxSize: Rn,
      sizeCalculation: (s, a) => a.length + s.length
    })),
    r = n.get(e);
  if (r === void 0) r = je(e), n.set(Scn(e), r);
  return r
}

function je(e) {
  return Um(_Ws(iB(Ey(e)).replace(/[\p{Z}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu, "").replace(/[\p{Pd}\u2212]/gu, "-").replace(/[\ua789\u2236\u0589\u05c3\u02d0]/g, ":")))
}

function Ree(e) {
  return Ol(e).startsWith(".")
}

function zEs(e) {
  return Ol(e) === ".git"
}

function RX(e) {
  return Um(bnn(e)) === Z2
}

function Aee(e, n) {
  let r = qe(e);
  if (Nn(r) !== r) throw Error("synced item name contains display-hazard characters");
  if (Ree(r)) throw Error("synced item name resolves to reserved path");
  if (Um(r).endsWith(gnn)) throw Error("synced item name resolves to reserved path");
  if (Ye.test(Um(r))) throw Error("synced item name resolves to reserved path");
  if (Q7e(Um(r))) throw Error("synced item name resolves to reserved path");
  return eFt(e, n)
}

function GEs(e, n, r) {
  let s = Aee(e, r);
  return n <= 1 ? s : S(r, `${We(s)}~g${n}`)
}

function eFt(e, n) {
  let r = qe(e),
    s = Um(Ol(r));
  if (s === cU || s === Cse) {
    let a = r.toLowerCase();
    if (a === cU || a === Cse) throw Error("synced item name resolves to reserved path");
    throw new Dht
  }
  if (ze(s)) {
    if (ze(r.toLowerCase())) throw Error("synced item name resolves to reserved path");
    throw new Dht
  }
  return bn(r, n)
}

function ze(e) {
  let n = tt(e, ".").replace(/ +$/, "");
  return /~\d/.test(e) || Hjt.test(n)
}

function VCr(e, n) {
  let r;
  try {
    r = JSON.parse(e)
  } catch {
    return "claim-all"
  }
  if (!Array.isArray(r?.skills)) return "claim-all";
  if (r.staleDirs !== void 0 && !Array.isArray(r.staleDirs)) return "claim-all";
  if (r.pendingClaims !== void 0 && !Array.isArray(r.pendingClaims)) return "claim-all";
  let s = new Set,
    a = r.skills.flatMap((l) => typeof l === "object" && l !== null && typeof l.name === "string" ? [l.name] : []),
    c = (r.pendingClaims ?? []).flatMap((l) => typeof l === "string" ? [QNt(l).name] : []);
  for (let l of [a, r.staleDirs, c])
    if (Array.isArray(l)) {
      for (let g of l)
        if (typeof g === "string")
          for (let m of An(g, n)) s.add(m)
    } return s
}

function An(e, n) {
  let r = [Snn(e)];
  try {
    r.push(Snn(We(eFt(e, n))))
  } catch {}
  return r
}

function Snn(e) {
  return Um(Ol(e))
}
var $F = S("skills", Z2),
  Z7e = S("skills", _nn),
  KCr = S("skills", Cse),
  jGi = S($F, Cse),
  D1 = S("plugins", Z2),
  XGe = S("plugins", _nn),
  WGi = S(D1, Cse);

function A(e) {
  return e !== void 0 && ZNt(e) ? e : null
}

function wn() {
  return A(i.CLAUDE_CODE_ORGANIZATION_UUID ?? Yd()?.organizationUuid)
}

function Ze() {
  return A(Yd()?.organizationUuid)
}
async function ED(e) {
  let n = wn();
  if (n === null) return null;
  switch (await Tm(e)) {
    case "store":
      return wnn();
    case "none":
      if (La().source === "claude.ai") return null;
      return j(n, A(i.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
    case "env":
    case "fd":
      return j(n, A(i.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0)
  }
}

function wnn() {
  let e = Yd(),
    n = A(i.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid),
    r = A(e?.accountUuid);
  return n === null || r === null ? null : j(n, r)
}

function zGi() {
  return La().source === "claude.ai" ? wnn() : null
}

function uHn() {
  let e = Yd();
  return `${i.CLAUDE_CODE_ORGANIZATION_UUID??e?.organizationUuid??""}_${e?.accountUuid??i.CLAUDE_CODE_ACCOUNT_UUID??""}`
}
var Je = {
  source: "pluginDirectory"
};

function Sg(e) {
  let n = be("policySettings")?.enabledPlugins;
  return [e, yln(e) ?? e].some((r) => Vee(n, r) === !1)
}

function uU() {
  let e = be("policySettings");
  if (!e?.strictKnownMarketplaces) return null;
  return e.strictKnownMarketplaces
}

function Kue() {
  if (M()?.some((n) => n.source === "skills-dir")) return !1;
  let e = uU();
  return e === null || e.some((n) => n.source === "skills-dir")
}

function fHn(e) {
  return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`
}

function Jq() {
  return be("policySettings")?.disableSideloadFlags === !0
}

function ML() {
  if (Q_() === "unanswered") return !0;
  return fyo()
}

function fyo() {
  let e = be("policySettings");
  if (e?.disableCommandPluginSources !== void 0) return e.disableCommandPluginSources === !0;
  if (e?.allowManagedHooksOnly !== !0) return !1;
  let n = NNs();
  return !(n?.disableAllHooks === !0 && n.allowManagedHooksOnly !== !0 && !FNs() && !VCo().some((r) => r.allowManagedHooksOnly === !0))
}

function qCr() {
  {
    let e = be("policySettings")?.disablePluginDirectory;
    return e !== void 0 && e !== !1
  }
  return !1
}

function uk() {
  {
    if (qCr()) return "managed_setting";
    if (Enn(Je)) return "blocklist";
    if (!ip(Je)) return "allowlist";
    let e = OO("allow_plugin_directory_search");
    return e === "org_denied" || e === "latched" ? "policy_limit" : null
  }
  return null
}

function cz() {
  let e = uk();
  return e === null ? "" : re(e)
}

function tFt(e) {
  let n = (M() ?? []).filter(pe),
    r = (uU() ?? []).filter(pe);
  if (n.length === 0 && r.length === 0) return !1;
  if (e === void 0) return !0;
  let s = {
      source: "git",
      url: e
    },
    a = at(s);
  if ($zn(e) || o7(e) || D(e) || a === null || a === "") return !0;
  if (n.some((l) => !lt(l.hostPattern) || fe(s, l, {
      blocklistDirection: !0
    }))) return !0;
  let c = /^https:\/\//i.test(e);
  return r.length > 0 && !(c && a !== "" && r.some((l) => ut(a, l.hostPattern)))
}

function nFt() {
  return zv() !== "remote" || Ttt()
}

function YCr() {
  return !Tee()
}
var XCr = "it is declared by remotely managed settings that this session could not verify with the server, or that have not been approved on this machine yet \u2014 make sure Claude Code can reach your managed-settings server, and approve the managed-settings dialog once in an interactive session (or ask your admin)";

function JGe(e, n) {
  if (Q_() === "unanswered") return "organization_unanswered";
  if (!ML()) return null;
  if (e === void 0 || !YCr()) return "lockdown";
  if (!nFt()) return "remote_policy_unconsented";
  let r = be("policySettings")?.extraKnownMarketplaces ?? {};
  if (e.source === "settings" && n !== void 0) return (Object.hasOwn(r, n) ? r[n] : void 0)?.source.source !== "settings" ? "lockdown" : null;
  return Object.values(r).some((s) => W(e, s.source)) ? null : "lockdown"
}

function VEs(e, n) {
  return JGe(e, n) !== null
}

function pHn(e, n = []) {
  let r = n.length > 0 ? `: ${n.map((a)=>Pm(a)).join(", ")}` : "",
    s = Q_() === "unanswered" ? "(waiting for your organization's settings)" : "(managed policy) \u2014 ask your admin";
  return `${e} ${P(e,"marketplace")} not updated ${s}${r}`
}
var vn = "Command-sourced plugins are disabled by your organization's managed settings (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and its command was not run.";

function Nht(e) {
  if (Q_() === "unanswered") {
    let n = Ae().organizationAsk;
    n.isCommandHeld = !0, n.isMarketplaceHeld ||= e === "marketplace"
  }
}

function Rse() {
  return Q_() === "unanswered" ? "Command-sourced plugins aren't running in this session yet. Your organization's settings haven't been read, so it isn't known whether it allows them. The plugin was not installed or updated and its command was not run. They'll run once your organization's settings are read, if it allows them." : vn
}
var pyo = "disabled by your organization's managed settings (disableSideloadFlags)";

function eQe(e) {
  return `${e.join(", ")} ${e.length===1?"is":"are"} ${pyo}. Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`
}

function M() {
  let e = be("policySettings");
  if (!e?.blockedMarketplaces) return null;
  return e.blockedMarketplaces
}

function QGe() {
  let e = M();
  return uU() !== null || e !== null && e.some((n) => n.source !== "skills-dir" && n.source !== "pluginDirectory")
}

function L1(e) {
  return e === void 0 ? QGe() : !ip(e)
}

function myo() {
  return be("policySettings")?.pluginTrustMessage
}

function mHn() {
  return be("policySettings")?.pluginSuggestionMarketplaces ?? []
}

function hHn(e, n) {
  let r = bpe(),
    s = r?.extraKnownMarketplaces?.[e]?.source;
  if (s && W(n, s)) return !0;
  return tbt(r?.strictKnownMarketplaces)?.some((a) => me(n, a)) ?? !1
}

function KEs(e, n) {
  let r = Un(e);
  return Object.keys(n?.extraKnownMarketplaces ?? {}).some((s) => Un(s) === r)
}

function knn(e, n, r) {
  if (e.source === "claudeai") {
    let g = Ze();
    return g !== null && e.organizationUuid.toLowerCase() === g.toLowerCase() && (e.scope === "org" || e.scope === "default")
  }
  let s = r ? r.policySettings : bpe(),
    a = r?.declaredUnder,
    c = s?.extraKnownMarketplaces,
    l = mbt(e);
  if (l === null) return !1;
  if (l.source === "npm" && (l.registry === void 0 || !BKe(l.package))) return !1;
  if (l.source === "settings" && l.plugins.some((g) => {
      if (typeof g.source !== "object") return !0;
      switch (g.source.source) {
        case "npm":
          return g.source.registry === void 0 || !BKe(g.source.package);
        case "url":
        case "github":
        case "git-subdir":
        case "archive":
          return !1;
        default:
          return !0
      }
    })) return !1;
  if (c !== void 0 && Object.entries(c).some(([g, m]) => {
      if (a !== void 0 && Un(g) !== Un(a)) return !1;
      let f = $Cr(m.source, n),
        h = mbt(f);
      return h !== null && W(l, h) && Xe(l, h)
    })) return !0;
  if (a !== void 0) return !1;
  return tbt(s?.strictKnownMarketplaces)?.some((g) => {
    if (g.source === "hostPattern" || g.source === "pathPattern" || g.source === "pluginDirectory") return !1;
    if (l.source === "github" && g.source === "github" && (g.path || void 0) !== (l.path || void 0)) return !1;
    let m = $Cr(g, n),
      f = mbt(m);
    return f !== null && me(l, f) && Xe(l, f)
  }) ?? !1
}

function Xe(e, n) {
  if (e.source !== "npm") return !0;
  if (n.source !== "npm" || e.registry === void 0 || n.registry === void 0) return !1;
  let r = et(e.registry),
    s = et(n.registry);
  return r !== null && r === s
}

function et(e) {
  let n;
  try {
    n = new URL(e)
  } catch {
    return null
  }
  if (n.hostname = cxe(n.hostname), !n.pathname.endsWith("/")) n.pathname = `${n.pathname}/`;
  return n.toString()
}

function qEs(e) {
  let n = tbt(bpe()?.strictKnownMarketplaces);
  if (!n) return !1;
  let r;
  try {
    r = new URL(e.tarballUrl)
  } catch {
    return !1
  }
  let s = pt(r);
  if (s === null) return !1;
  return n.some((a) => a.source === "npm" && a.registry !== void 0 && dt(a, e.packageName, r, s, "allow"))
}

function Fht(e) {
  if (e.source !== "github" && e.source !== "git") return !1;
  if (e.source === "git") {
    if (e.url.includes("://")) {
      let n;
      try {
        n = new URL(e.url).protocol
      } catch {
        n = null
      }
      if (n === null || !xn.has(n)) return !1
    } else if (o2n(e.url) === null) return !1
  }
  return YFs(e) && (e.ref || void 0) === void 0 && (e.path || void 0) === void 0
}
var xn = new Set(["https:", "ssh:", "git+https:", "git+ssh:"]);

function W(e, n) {
  if (e.source !== n.source) return !1;
  switch (e.source) {
    case "url":
      return BCe(e.url) === BCe(n.url);
    case "github":
      return e.repo.toLowerCase() === n.repo.toLowerCase() && (e.ref || void 0) === (n.ref || void 0) && (e.path || void 0) === (n.path || void 0);
    case "git": {
      let r = n.url;
      return (D(e.url) || D(r) ? e.url === r : LRo(e.url) === LRo(r)) && (e.ref || void 0) === (n.ref || void 0) && (e.path || void 0) === (n.path || void 0)
    }
    case "npm":
      return e.package === n.package;
    case "file":
      return e.path === n.path;
    case "directory":
      return e.path === n.path;
    case "settings":
      return e.name === n.name && ln(e.plugins, n.plugins);
    case "pluginDirectory":
      return !0;
    default:
      return !1
  }
}

function vnn(e) {
  let n = Dn(e);
  return n === null ? null : cxe(n)
}

function Dn(e) {
  let n = st(e);
  return n !== null && ge(n) ? null : n
}

function ge(e) {
  return e.startsWith("[") && e.endsWith("]") && Nzn(e.slice(1, -1))
}

function D(e) {
  return Bte(e)
}

function st(e) {
  switch (e.source) {
    case "github":
      return jr;
    case "git": {
      if ($zn(e.url)) return null;
      return Mwe(e.url)?.host ?? null
    }
    case "url":
      try {
        return new URL(e.url).hostname
      } catch {
        return null
      }
    case "claudeai":
      return "claude.ai";
    default:
      return null
  }
}

function at(e) {
  if (e.source === "git" && !e.url.includes("://")) {
    let n = o2n(e.url);
    return n ? cxe(n.host) : null
  }
  return vnn(e)
}

function fe(e, n, r) {
  let s = r?.blocklistDirection ? vnn(e) : at(e);
  if (!s) return !1;
  let a = r?.blocklistDirection && s === MRo ? [s, jr] : [s];
  try {
    let c = new RegExp(n.hostPattern);
    return a.some((l) => c.test(l))
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${n.hostPattern}`, {
      level: "error"
    }), !1
  }
}

function lt(e) {
  try {
    return new RegExp(e), !0
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${e}`, {
      level: "error"
    }), !1
  }
}

function ut(e, n) {
  if (!lt(n)) return !1;
  try {
    return new RegExp(`^(?:${n})$`).test(e)
  } catch {
    return !1
  }
}

function ct(e, n) {
  if (e.source !== "file" && e.source !== "directory") return !1;
  try {
    return new RegExp(n.pathPattern).test(e.path)
  } catch {
    return t(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${n.pathPattern}`, {
      level: "error"
    }), !1
  }
}

function YEs() {
  let e = uU();
  if (!e) return [];
  return e.filter(pe).map((n) => n.hostPattern)
}

function pe(e) {
  return e.source === "hostPattern"
}

function nt(e) {
  let n = DRo(e);
  if (n !== null && n.includes("*")) return t(`Invalid owner-wildcard url in policy settings blockedMarketplaces: ${e} (wildcards are only supported in github-form entries, as "<owner>/*"); entry does not match github.com sources`, {
    level: "error"
  }), null;
  return n
}

function BCe(e) {
  try {
    let n = new URL(e);
    return n.hostname = cxe(n.hostname), n.toString()
  } catch {
    return e
  }
}

function Mn(e, n) {
  let r = e.split("/");
  if (r.length !== 2) return !1;
  let [s, a] = r;
  if (s === void 0 || a === void 0 || !pLr(s) || !pLr(a)) return !1;
  return s === n
}

function z(e, n) {
  let r = rHs(n),
    s = mLr(e);
  if (s === null) {
    if (e.includes("*")) t(`Invalid owner-wildcard repo in policy settings blockedMarketplaces: ${e} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    return r === e || n === e
  }
  let a = r.split("/");
  if (a.length !== 2) return !1;
  let [c, l] = a;
  if (c === void 0 || l === void 0 || !pLr(c) || !nHs.test(l)) return !1;
  return c.toLowerCase() === s.toLowerCase()
}

function rt(e) {
  if (e.startsWith("/") || e.startsWith("\\") || /^[A-Za-z]:/.test(e)) return !1;
  return !e.split(/[\\/]/).some((n) => n === "..")
}

function E(e, n) {
  if (!e) return !0;
  return e === (n || void 0)
}

function Ln(e, n) {
  if (e.source === n.source) switch (e.source) {
    case "github": {
      let r = n;
      if (!z(r.repo, e.repo)) return !1;
      return E(r.ref, e.ref) && E(r.path, e.path)
    }
    case "git": {
      let r = n,
        s = nt(r.url),
        a = s === null ? null : DRo(e.url);
      if (!(s !== null && a !== null ? z(s, a) : Uzn(e.url) === Uzn(r.url))) return !1;
      return E(r.ref, e.ref) && E(r.path, e.path)
    }
    case "url":
      return BCe(e.url) === BCe(n.url);
    case "npm":
      return e.package === n.package;
    case "file":
      return e.path === n.path;
    case "directory":
      return e.path === n.path;
    case "settings":
      return e.name === n.name;
    case "pluginDirectory":
      return !0;
    default:
      return !1
  }
  if (e.source === "git" && n.source === "github") {
    let r = DRo(e.url);
    if (r !== null && z(n.repo, r)) return E(n.ref, e.ref) && E(n.path, e.path)
  }
  if (e.source === "github" && n.source === "git") {
    let r = nt(n.url);
    if (r !== null && z(r, e.repo)) return E(n.ref, e.ref) && E(n.path, e.path)
  }
  if (e.source === "git" && n.source === "url") {
    if (!e.url.includes("://")) return !1;
    let r = {
      stripDotGit: !0
    };
    return Uzn(e.url, r) === Uzn(n.url, r)
  }
  return !1
}

function Enn(e) {
  let n = M();
  if (n === null) return !1;
  return n.some((r) => {
    if (r.source === "hostPattern") return fe(e, r, {
      blocklistDirection: !0
    });
    if (r.source === "pathPattern") return ct(e, r);
    return Ln(e, r)
  })
}

function ip(e) {
  if (e.source === "git" && ($zn(e.url) || D(e.url)) && QGe()) return !1;
  let n = st(e);
  if (n !== null && ge(n) && QGe()) return !1;
  if (e.source === "pluginDirectory" && qCr()) return !1;
  if (Enn(e)) return !1;
  let r = uU();
  if (r === null) return !0;
  return r.some((s) => me(e, s))
}

function JCr(e) {
  let n = M(),
    r = uU();
  if (n === null && r === null) return null;
  let s;
  try {
    s = new URL(e.tarballUrl)
  } catch {
    s = null
  }
  let a = Pm(e.packageName);
  if (s === null) return `${a} cannot be used: the registry answered with a download URL that could not be parsed, and your organization restricts plugin sources`;
  let c = cxe(s.hostname),
    l = s.port ? `${c}:${s.port}` : c,
    g = pt(s);
  if (g === null) return `${a} cannot be used: the registry answered with a download URL whose path climbs or cannot be decoded, and your organization restricts plugin sources`;
  if (ge(s.hostname) && QGe()) return `${a} cannot be used: it downloads from ${l}, an IPv6 spelling of an IPv4 address, which your organization's plugin source rules cannot check. Ask whoever runs the registry to serve it from a hostname or an IPv4 address.`;
  let m = (f) => (h) => {
    switch (h.source) {
      case "npm":
        return dt(h, e.packageName, s, g, f);
      case "hostPattern":
        try {
          return f === "block" ? new RegExp(h.hostPattern).test(c) : ut(c, h.hostPattern) && s.protocol === "https:"
        } catch {
          return t(`Invalid hostPattern regex in policy settings: ${h.hostPattern}`, {
            level: "error"
          }), f === "block"
        }
      default:
        return !1
    }
  };
  if (n?.some(m("block"))) return `${a} cannot be used: it resolves to ${l}, which your organization's managed settings block (blockedMarketplaces)`;
  if (r !== null && !r.some(m("allow"))) return `${a} cannot be used: it resolves to ${l}, which is not among the plugin sources your organization allows (strictKnownMarketplaces). Ask your administrator to add an npm or hostPattern entry for it.`;
  return null
}

function dt(e, n, r, s, a) {
  return On(e.package, n) && (e.registry === void 0 || (Tn(r, s, e.registry) ?? a === "block"))
}

function On(e, n) {
  if (e.endsWith("/*") && e.startsWith("@")) return n.startsWith(e.slice(0, -1));
  return e === n
}

function pt(e) {
  let n;
  try {
    n = decodeURIComponent(e.pathname)
  } catch {
    return null
  }
  if (n.includes("\\") || /(^|\/)\.\.?(\/|$)/.test(n)) return null;
  return n
}

function Tn(e, n, r) {
  let s;
  try {
    s = new URL(r)
  } catch {
    return null
  }
  if (e.protocol !== s.protocol || cxe(e.hostname) !== cxe(s.hostname) || (e.port || it(e.protocol)) !== (s.port || it(s.protocol))) return !1;
  let a;
  try {
    a = decodeURIComponent(s.pathname)
  } catch {
    return null
  }
  if (!a.endsWith("/")) a = `${a}/`;
  return n.startsWith(a)
}

function it(e) {
  return e === "https:" ? "443" : e === "http:" ? "80" : ""
}

function me(e, n) {
  if (e.source === "git" && (o7(e.url) || D(e.url))) return !1;
  if (n.source === "hostPattern") {
    if ((e.source === "github" || e.source === "git") && e.path && !rt(e.path)) return !1;
    if (e.source === "claudeai" && e.scope !== "org" && e.scope !== "default") return !1;
    return fe(e, n)
  }
  if (n.source === "pathPattern") return ct(e, n);
  if (e.source === "github" && n.source === "github") {
    let r = mLr(n.repo);
    if (r === null && n.repo.includes("*")) t(`Invalid owner-wildcard repo in policy settings strictKnownMarketplaces: ${n.repo} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    if (r !== null) return Mn(e.repo, r) && (n.ref || void 0) === (e.ref || void 0) && (n.path ? n.path === (e.path || void 0) : !e.path || rt(e.path))
  }
  if (n.source === "skills-dir") return !1;
  return W(e, n)
}
export {
  Tee,
  Q_,
  lnn,
  RCr,
  ACr,
  xCr,
  OEs,
  IEs,
  MEs,
  Aht,
  PCr,
  qgo,
  OCr,
  Ygo,
  DEs,
  dnn,
  cnn,
  tHn,
  Xgo,
  unn,
  nHn,
  VGe,
  q7e,
  iNe,
  KGe,
  LEs,
  ck,
  Vue,
  Jgo,
  rHn,
  Qgo,
  fnn,
  NEs,
  qGe,
  Zgo,
  oHn,
  Y7e,
  eyo,
  PGi,
  dz,
  Kh,
  YNt,
  I1,
  Cee,
  OGi,
  pnn,
  IGi,
  sHn,
  tyo,
  nyo,
  iHn,
  MGi,
  ICr,
  xht,
  M1,
  XNt,
  JNt,
  aHn,
  ryo,
  Kc,
  dU,
  mnn,
  j_e,
  Pht,
  lHn,
  FEs,
  MCr,
  DGi,
  DCr,
  LGi,
  LCr,
  ih,
  aNe,
  NCr,
  dHn,
  NGi,
  FCr,
  Oht,
  vD,
  CX,
  hnn,
  HEs,
  oyo,
  syo,
  HCr,
  $Cr,
  iyo,
  FGi,
  lNe,
  $Es,
  UCr,
  BCr,
  ayo,
  HGi,
  X7e,
  _3,
  Iht,
  Mht,
  lyo,
  gnn,
  J7e,
  cHn,
  jCr,
  WCr,
  UEs,
  dyo,
  W_e,
  BEs,
  jEs,
  zCr,
  cU,
  ynn,
  UCe,
  WEs,
  $Gi,
  UGi,
  cyo,
  QNt,
  Dht,
  Z2,
  _nn,
  Cse,
  ZNt,
  Q7e,
  Lht,
  uyo,
  BGi,
  YGe,
  bnn,
  Um,
  GCr,
  Z_,
  Ree,
  zEs,
  RX,
  Aee,
  GEs,
  eFt,
  VCr,
  Snn,
  $F,
  Z7e,
  KCr,
  jGi,
  D1,
  XGe,
  WGi,
  ED,
  wnn,
  zGi,
  uHn,
  Sg,
  uU,
  Kue,
  fHn,
  Jq,
  ML,
  fyo,
  qCr,
  uk,
  cz,
  tFt,
  nFt,
  YCr,
  XCr,
  JGe,
  VEs,
  pHn,
  Nht,
  Rse,
  pyo,
  eQe,
  QGe,
  L1,
  myo,
  mHn,
  hHn,
  KEs,
  knn,
  qEs,
  Fht,
  vnn,
  YEs,
  BCe,
  Enn,
  ip,
  JCr
};
