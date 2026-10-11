// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  So
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  OUt,
  T6n,
  C6n,
  E1r,
  Kmn,
  Ymn,
  T1r,
  oUe,
  MUt,
  R6n,
  Nm,
  uft
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Ho,
  w_e
} from "B:/~BUN/root/chunk-y72v2pst.js";
import {
  Axo
} from "B:/~BUN/root/chunk-j14vfkmm.js";
import {
  he,
  SBr,
  gC
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Ggn
} from "B:/~BUN/root/chunk-mjdkd2h9.js";

function vf(e) {
  return he("policySettings")?.enabledPlugins?.[e] === !1
}

function YM() {
  let e = he("policySettings");
  if (!e?.strictKnownMarketplaces) return null;
  return e.strictKnownMarketplaces
}

function U3() {
  if (c()?.some((r) => r.source === "skills-dir")) return !1;
  let e = YM();
  return e === null || e.some((r) => r.source === "skills-dir")
}

function x0t(e) {
  return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`
}

function B3() {
  return he("policySettings")?.disableSideloadFlags === !0
}

function WT() {
  let e = he("policySettings");
  if (e?.disableCommandPluginSources !== void 0) return e.disableCommandPluginSources === !0;
  return e?.allowManagedHooksOnly === !0
}

function _() {
  return !1
}

function Ksn() {
  return null
}

function X3o() {
  let e = Ksn();
  return e === null ? "" : Axo(e)
}

function Fxr(e) {
  let r = (c() ?? []).filter(d),
    n = (YM() ?? []).filter(d);
  if (r.length === 0 && n.length === 0) return !1;
  if (e === void 0) return !0;
  let o = {
      source: "git",
      url: e
    },
    i = b(o);
  if (OUt(e) || w_e(e) || i === null || i === "") return !0;
  if (r.some((s) => !M(s.hostPattern) || h(o, s, {
      blocklistDirection: !0
    }))) return !0;
  let l = /^https:\/\//i.test(e);
  return n.length > 0 && !(l && i !== "" && n.some((s) => w(i, s.hostPattern)))
}

function G4e() {
  return gC() !== "remote" || uft()
}
var Ysn = "it is declared by remotely managed settings that this session could not verify with the server, or that have not been approved on this machine yet \u2014 make sure Claude Code can reach your managed-settings server, and approve the managed-settings dialog once in an interactive session (or ask your admin)";

function Rge(e, r) {
  if (!WT()) return null;
  if (e === void 0) return "lockdown";
  if (!G4e()) return "remote_policy_unconsented";
  let n = he("policySettings")?.extraKnownMarketplaces ?? {};
  if (e.source === "settings" && r !== void 0) return (Object.hasOwn(n, r) ? n[r] : void 0)?.source.source !== "settings" ? "lockdown" : null;
  return Object.values(n).some((o) => g(e, o.source)) ? null : "lockdown"
}

function $xr(e, r) {
  return Rge(e, r) !== null
}

function P0t(e, r = []) {
  let n = r.length > 0 ? `: ${r.map((o)=>Nm(o)).join(", ")}` : "";
  return `${e} ${I(e,"marketplace")} not updated (managed policy) \u2014 ask your admin${n}`
}
var HV = "Command-sourced plugins are disabled by your organization's managed settings (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and its command was not run.",
  mjn = "disabled by your organization's managed settings (disableSideloadFlags)";

function rTe(e) {
  return `${e.join(", ")} ${e.length===1?"is":"are"} ${mjn}. Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`
}

function c() {
  let e = he("policySettings");
  if (!e?.blockedMarketplaces) return null;
  return e.blockedMarketplaces
}

function V4e() {
  let e = c();
  return YM() !== null || e !== null && e.some((r) => r.source !== "skills-dir" && r.source !== "pluginDirectory")
}

function XL(e) {
  return e === void 0 ? V4e() : !Ep(e)
}

function gjn() {
  return he("policySettings")?.pluginTrustMessage
}

function I0t() {
  return he("policySettings")?.pluginSuggestionMarketplaces ?? []
}

function O0t(e, r) {
  let n = SBr(),
    o = n?.extraKnownMarketplaces?.[e]?.source;
  if (o && g(r, o)) return !0;
  return n?.strictKnownMarketplaces?.some((i) => x(r, i)) ?? !1
}

function g(e, r) {
  if (e.source !== r.source) return !1;
  switch (e.source) {
    case "url":
      return Mee(e.url) === Mee(r.url);
    case "github":
      return e.repo === r.repo && (e.ref || void 0) === (r.ref || void 0) && (e.path || void 0) === (r.path || void 0);
    case "git":
      return R6n(e.url) === R6n(r.url) && (e.ref || void 0) === (r.ref || void 0) && (e.path || void 0) === (r.path || void 0);
    case "npm":
      return e.package === r.package;
    case "file":
      return e.path === r.path;
    case "directory":
      return e.path === r.path;
    case "settings":
      return e.name === r.name && So(e.plugins, r.plugins);
    case "pluginDirectory":
      return !0;
    default:
      return !1
  }
}

function Rat(e) {
  let r = v(e);
  return r === null ? null : oUe(r)
}

function v(e) {
  switch (e.source) {
    case "github":
      return Ho;
    case "git": {
      if (e.url.includes("://")) {
        if (OUt(e.url)) return null;
        try {
          return new URL(e.url).hostname || null
        } catch {
          return null
        }
      }
      return e.url.match(/^[^@]+@([^:]+):/)?.[1] ?? null
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

function b(e) {
  if (e.source === "git" && !e.url.includes("://")) {
    let r = Ggn(e.url);
    return r ? oUe(r.host) : null
  }
  return Rat(e)
}

function h(e, r, n) {
  let o = n?.blocklistDirection ? Rat(e) : b(e);
  if (!o) return !1;
  let i = n?.blocklistDirection && o === T6n ? [o, Ho] : [o];
  try {
    let l = new RegExp(r.hostPattern);
    return i.some((s) => l.test(s))
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${r.hostPattern}`, {
      level: "error"
    }), !1
  }
}

function M(e) {
  try {
    return new RegExp(e), !0
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${e}`, {
      level: "error"
    }), !1
  }
}

function w(e, r) {
  if (!M(r)) return !1;
  try {
    return new RegExp(`^(?:${r})$`).test(e)
  } catch {
    return !1
  }
}

function R(e, r) {
  if (e.source !== "file" && e.source !== "directory") return !1;
  try {
    return new RegExp(r.pathPattern).test(e.path)
  } catch {
    return t(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${r.pathPattern}`, {
      level: "error"
    }), !1
  }
}

function Uxr() {
  let e = YM();
  if (!e) return [];
  return e.filter(d).map((r) => r.hostPattern)
}

function d(e) {
  return e.source === "hostPattern"
}

function k(e) {
  let r = C6n(e);
  if (r !== null && r.includes("*")) return t(`Invalid owner-wildcard url in policy settings blockedMarketplaces: ${e} (wildcards are only supported in github-form entries, as "<owner>/*"); entry does not match github.com sources`, {
    level: "error"
  }), null;
  return r
}

function Mee(e) {
  try {
    let r = new URL(e);
    return r.hostname = oUe(r.hostname), r.toString()
  } catch {
    return e
  }
}

function C(e, r) {
  let n = e.split("/");
  if (n.length !== 2) return !1;
  let [o, i] = n;
  if (o === void 0 || i === void 0 || !Kmn(o) || !Kmn(i)) return !1;
  return o === r
}

function p(e, r) {
  let n = T1r(r),
    o = Ymn(e);
  if (o === null) {
    if (e.includes("*")) t(`Invalid owner-wildcard repo in policy settings blockedMarketplaces: ${e} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    return n === e || r === e
  }
  let i = n.split("/");
  if (i.length !== 2) return !1;
  let [l, s] = i;
  if (l === void 0 || s === void 0 || !Kmn(l) || !E1r.test(s)) return !1;
  return l.toLowerCase() === o.toLowerCase()
}

function S(e) {
  if (e.startsWith("/") || e.startsWith("\\") || /^[A-Za-z]:/.test(e)) return !1;
  return !e.split(/[\\/]/).some((r) => r === "..")
}

function a(e, r) {
  if (!e) return !0;
  return e === (r || void 0)
}

function E(e, r) {
  if (e.source === r.source) switch (e.source) {
    case "github": {
      let n = r;
      if (!p(n.repo, e.repo)) return !1;
      return a(n.ref, e.ref) && a(n.path, e.path)
    }
    case "git": {
      let n = r,
        o = k(n.url),
        i = o === null ? null : C6n(e.url);
      if (!(o !== null && i !== null ? p(o, i) : MUt(e.url) === MUt(n.url))) return !1;
      return a(n.ref, e.ref) && a(n.path, e.path)
    }
    case "url":
      return Mee(e.url) === Mee(r.url);
    case "npm":
      return e.package === r.package;
    case "file":
      return e.path === r.path;
    case "directory":
      return e.path === r.path;
    case "settings":
      return e.name === r.name;
    case "pluginDirectory":
      return !0;
    default:
      return !1
  }
  if (e.source === "git" && r.source === "github") {
    let n = C6n(e.url);
    if (n !== null && p(r.repo, n)) return a(r.ref, e.ref) && a(r.path, e.path)
  }
  if (e.source === "github" && r.source === "git") {
    let n = k(r.url);
    if (n !== null && p(n, e.repo)) return a(r.ref, e.ref) && a(r.path, e.path)
  }
  if (e.source === "git" && r.source === "url") {
    if (!e.url.includes("://")) return !1;
    let n = {
      stripDotGit: !0
    };
    return MUt(e.url, n) === MUt(r.url, n)
  }
  return !1
}

function M0t(e) {
  let r = c();
  if (r === null) return !1;
  return r.some((n) => {
    if (n.source === "hostPattern") return h(e, n, {
      blocklistDirection: !0
    });
    if (n.source === "pathPattern") return R(e, n);
    return E(e, n)
  })
}

function Ep(e) {
  if (e.source === "git" && OUt(e.url)) return !1;
  if (e.source === "pluginDirectory" && _()) return !1;
  if (M0t(e)) return !1;
  let r = YM();
  if (r === null) return !0;
  return r.some((n) => x(e, n))
}

function Xsn(e) {
  let r = c(),
    n = YM();
  if (r === null && n === null) return null;
  let o;
  try {
    o = new URL(e.tarballUrl)
  } catch {
    o = null
  }
  let i = Nm(e.packageName);
  if (o === null) return `${i} cannot be used: the registry answered with a download URL that could not be parsed, and your organization restricts plugin sources`;
  let l = oUe(o.hostname),
    s = o.port ? `${l}:${o.port}` : l,
    y = U(o);
  if (y === null) return `${i} cannot be used: the registry answered with a download URL whose path climbs or cannot be decoded, and your organization restricts plugin sources`;
  let m = (f) => (u) => {
    switch (u.source) {
      case "npm":
        return O(u.package, e.packageName) && (u.registry === void 0 || (L(o, y, u.registry) ?? f === "block"));
      case "hostPattern":
        try {
          return f === "block" ? new RegExp(u.hostPattern).test(l) : w(l, u.hostPattern) && o.protocol === "https:"
        } catch {
          return t(`Invalid hostPattern regex in policy settings: ${u.hostPattern}`, {
            level: "error"
          }), f === "block"
        }
      default:
        return !1
    }
  };
  if (r?.some(m("block"))) return `${i} cannot be used: it resolves to ${s}, which your organization's managed settings block (blockedMarketplaces)`;
  if (n !== null && !n.some(m("allow"))) return `${i} cannot be used: it resolves to ${s}, which is not among the plugin sources your organization allows (strictKnownMarketplaces). Ask your administrator to add an npm or hostPattern entry for it.`;
  return null
}

function O(e, r) {
  if (e.endsWith("/*") && e.startsWith("@")) return r.startsWith(e.slice(0, -1));
  return e === r
}

function U(e) {
  let r;
  try {
    r = decodeURIComponent(e.pathname)
  } catch {
    return null
  }
  if (r.includes("\\") || /(^|\/)\.\.?(\/|$)/.test(r)) return null;
  return r
}

function L(e, r, n) {
  let o;
  try {
    o = new URL(n)
  } catch {
    return null
  }
  if (e.protocol !== o.protocol || oUe(e.hostname) !== oUe(o.hostname) || (e.port || P(e.protocol)) !== (o.port || P(o.protocol))) return !1;
  let i;
  try {
    i = decodeURIComponent(o.pathname)
  } catch {
    return null
  }
  if (!i.endsWith("/")) i = `${i}/`;
  return r.startsWith(i)
}

function P(e) {
  return e === "https:" ? "443" : e === "http:" ? "80" : ""
}

function x(e, r) {
  if (e.source === "git" && w_e(e.url)) return !1;
  if (r.source === "hostPattern") {
    if ((e.source === "github" || e.source === "git") && e.path && !S(e.path)) return !1;
    if (e.source === "claudeai" && e.scope !== "org" && e.scope !== "default") return !1;
    return h(e, r)
  }
  if (r.source === "pathPattern") return R(e, r);
  if (e.source === "github" && r.source === "github") {
    let n = Ymn(r.repo);
    if (n === null && r.repo.includes("*")) t(`Invalid owner-wildcard repo in policy settings strictKnownMarketplaces: ${r.repo} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    if (n !== null) return C(e.repo, n) && (r.ref || void 0) === (e.ref || void 0) && (r.path ? r.path === (e.path || void 0) : !e.path || S(e.path))
  }
  if (r.source === "skills-dir") return !1;
  return g(e, r)
}
export {
  vf,
  YM,
  U3,
  x0t,
  B3,
  WT,
  Ksn,
  X3o,
  Fxr,
  G4e,
  Ysn,
  Rge,
  $xr,
  P0t,
  HV,
  mjn,
  rTe,
  V4e,
  XL,
  gjn,
  I0t,
  O0t,
  Rat,
  Uxr,
  Mee,
  M0t,
  Ep,
  Xsn
};
