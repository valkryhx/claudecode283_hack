// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne, zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j, we, Wo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, Et, cT } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { xUr } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Uc } from "B:/~BUN/root/chunk-4h4gje25.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { I$, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Gu, J, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { AD, Lx, $1, M5e, jUr, F$t, WUr, D5e, D3n, nHo, N$e, GUr, fne, Mpt, $$t, mne, U$t, Jfn, rHo, B$t, XE, pu } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Lo } from "B:/~BUN/root/chunk-339q6g5w.js";
import { g_e } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { Dye, uUt, X$e, Y1 } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fYn } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { o, ae, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { fc } from "B:/~BUN/root/chunk-g1mh72ry.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { gf } from "B:/~BUN/root/chunk-mmkravm0.js";
import { homedir as ge } from "os";
import { dirname as W, posix as P } from "path";
import { resolve as de } from "path";
import { lstatSync as je, readFileSync as Ye, realpathSync as Ke } from "fs";
import { basename as te, dirname as ze, isAbsolute as ne, join as g, parse as Ve, relative as Xe, resolve as D, sep as se } from "path";
var wpt = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;
function X(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}
var Be = {
  ")": "(",
  "]": "[",
  "}": "{"
};
function sY(e) {
  while (e.length > 0) {
    let r = e.at(-1);
    if (".,;:!?".includes(r)) {
      e = e.slice(0, -1);
      continue;
    }
    let n = Be[r];
    if (!n) break;
    let s = 0,
      i = 0;
    for (let d of e) if (d === n) s++;else if (d === r) i++;
    if (i > s) e = e.slice(0, -1);else break;
  }
  return e;
}
function _Ur(e) {
  for (let r of e.matchAll(wpt)) return sY(r[0]);
  return;
}
var Fe = "tengu_lively_beaver";
class Z {
  reader = null;
  register(e) {
    let reader = this.reader;
    return this.reader = e, reader;
  }
}
var ee = new Z();
function vNo(e) {
  return ee.register(e);
}
function vpt() {
  let reader_2 = ee.reader;
  if (!reader_2) return !1;
  try {
    return reader_2(Fe, !1) === !0;
  } catch {
    return !1;
  }
}
var k5e = "account_on_hold",
  kpt = "https://claude.ai/restricted",
  N = "Your account is on hold and can't use Claude Code. View details or appeal: ";
function bUr(e) {
  return `${N}${e}`;
}
function Efn(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`;
}
var Lp = bUr(kpt);
function SUr(e) {
  if (!vpt() || !e.startsWith(N)) return !1;
  let r = e.slice(N.length);
  return X(r) && tAe(r) === r;
}
var Q = 2048,
  We = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;
function Ge(e) {
  try {
    return e === new URL(an().CLAUDE_AI_ORIGIN).origin;
  } catch {
    return !1;
  }
}
function tAe(e) {
  if (typeof e !== "string" || e.length > Q) return kpt;
  let r;
  try {
    r = new URL(e);
  } catch {
    return kpt;
  }
  if (r.protocol !== "https:" || r.username || r.password || r.port || r.hash) return kpt;
  let hostname = r.hostname;
  return (hostname === "claude.ai" || hostname.endsWith(".claude.ai") || hostname === "anthropic.com" || hostname.endsWith(".anthropic.com") || Ge(r.origin)) && r.href.length <= Q && We.test(r.href) ? r.href : kpt;
}
var Me = f(() => u({
  error: z(["invalid_grant", "access_denied"]),
  error_description: A(k5e),
  error_uri: ae().optional()
}));
function y$t(e) {
  if (!vpt()) return null;
  let r = e;
  if (typeof r === "string") {
    if (!r.includes(k5e)) return null;
    try {
      r = J(r);
    } catch {
      return null;
    }
  }
  let n = Me().safeParse(r);
  return n.success ? {
    url: tAe(n.data.error_uri)
  } : null;
}
class OAuthAccountOnHoldError extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError";
  }
}
class OAuthCallbackError extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, r, n) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = r;
    this.errorUri = n;
    this.name = "OAuthCallbackError", this.displayMessage = r ? `${e}: ${r}` : e;
  }
}
function Tfn(e) {
  return e instanceof OAuthCallbackError && e.errorDescription === k5e;
}
function A$e(e) {
  if (!(e instanceof fc) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) return null;
  return y$t(e.body);
}
function Ept(e) {
  return e instanceof fc && e.statusCode === null && e.message.includes("has expired and no refresh is available");
}
var qe = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class ie {
  precedenceSource = {
    filled: !1
  };
  authType = {
    filled: !1
  };
  accountInfo = {
    filled: !1
  };
  federationIdentity = {
    filled: !1
  };
  profileStoreDenyPaths = {
    filled: !1
  };
  settingsBearerRejected = !1;
  primedFiles = void 0;
}
var O = new q(() => new ie());
function Kb() {
  let e = O.of(j().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let value = Je();
  return e.precedenceSource = {
    filled: !0,
    value: value
  }, value;
}
function Je() {
  let e = TD(),
    r = le();
  if (r) {
    if (e === null) return null;
    let n = H(e, r);
    return n === "oidc_federation" || n === "user_oauth" ? "profile-explicit" : null;
  }
  if (ue()) return "env-quad";
  if (e !== null) {
    let n = H(e, Eye(e));
    if (n === "oidc_federation" || n === "user_oauth") return "profile-implicit";
  }
  return null;
}
function Cfn() {
  let e = O.of(j().host);
  e.precedenceSource = {
    filled: !1
  }, e.authType = {
    filled: !1
  }, e.federationIdentity = {
    filled: !1
  }, e.profileStoreDenyPaths = {
    filled: !1
  }, e.settingsBearerRejected = !1, _$t();
}
function _$t() {
  O.of(j().host).accountInfo = {
    filled: !1
  };
}
function kNo() {
  return Kb() !== null;
}
function E5e() {
  let e = O.of(j().host);
  if (e.authType.filled) return e.authType.value;
  let value_2 = Qe();
  return e.authType = {
    filled: !0,
    value: value_2
  }, value_2;
}
function Qe() {
  let e = Kb();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let r = TD();
  if (r === null) return null;
  let n = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : Eye(r),
    s = H(r, n);
  return s === "oidc_federation" || s === "user_oauth" ? s : null;
}
function b$t() {
  return Kb() === "profile-implicit" && E5e() === "user_oauth";
}
function x$e() {
  let e = O.of(j().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let value_3 = Ze();
  return e.accountInfo = {
    filled: !0,
    value: value_3
  }, value_3;
}
function Ze() {
  let e = Kb();
  if (e === null || e === "env-quad") return;
  let r = TD();
  if (r === null) return;
  let n = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : Eye(r),
    s = R(B(r, n));
  if (s === null) return;
  try {
    let i = JSON.parse(s);
    return {
      organizationUuid: i.organization_uuid,
      organizationName: i.organization_name,
      accountEmail: i.account_email,
      workspaceId: i.workspace_id,
      workspaceName: i.workspace_name
    };
  } catch {
    return;
  }
}
function S$t() {
  let e = Kb();
  if (e === "env-quad") {
    let r = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xB7 org ${w(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xB7 rule ${w(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${r ? ` \xB7 ws ${r.startsWith("wrkspc_") ? w(r) : r}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let r = TD(),
      n = r === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : Eye(r);
    return `credentials-file \xB7 ${E5e() ?? "unknown"} \xB7 profile ${n}`;
  }
  return "inactive";
}
function w(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`;
}
function Rfn() {
  let e = Kb();
  if (e === null || e === "env-quad") return;
  let r = TD();
  if (r === null) return;
  try {
    let n = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : Eye(r),
      s = R(g(r, "configs", `${n}.json`));
    if (s === null) return;
    let i = JSON.parse(s);
    return typeof i.base_url === "string" && i.base_url.trim() ? i.base_url.trim() : void 0;
  } catch {
    return;
  }
}
var zp = f(() => u({
  organization_id: o().optional(),
  workspace_id: o().optional(),
  authentication: u({
    type: o().optional(),
    federation_rule_id: o().optional()
  }).loose().optional()
}).loose());
function ENo() {
  return O.of(j().host).settingsBearerRejected;
}
function TNo(e) {
  O.of(j().host).settingsBearerRejected = e;
}
function Afn() {
  let e = O.of(j().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let {
    value: value_4,
    complete: complete
  } = et();
  if (complete) e.profileStoreDenyPaths = {
    filled: !0,
    value: value_4
  };
  return value_4;
}
function et() {
  let e = TD();
  if (e === null) return {
    value: null,
    complete: !0
  };
  let value_5 = {
    dirs: [e],
    files: []
  };
  try {
    let n = D(e);
    value_5 = re(n) ? {
      dirs: [g(n, "configs"), g(n, "credentials")],
      files: [g(n, "active_config")]
    } : {
      dirs: [n],
      files: []
    };
    let i = wUr(e),
      d = B(e, i);
    if (typeof d !== "string" || !d.trim()) return {
      value: value_5,
      complete: !0
    };
    let _ = L(ne(d) ? [D(d)] : [D(n, d), D(d)]).filter(item => !value_5.dirs.some(E => item === E || item.startsWith(E + se)) && !value_5.files.includes(item) && !re(item));
    return {
      value: {
        dirs: value_5.dirs,
        files: [...value_5.files, ..._.filter(item => !tt(item))]
      },
      complete: !0
    };
  } catch (error) {
    return t(`WIF profile store: could not resolve the active profile's credentials path (${l(error)}); denying the store root only`, {
      level: "warn"
    }), {
      value: value_5,
      complete: !1
    };
  }
}
function Eye(e) {
  return R(g(e, "active_config"))?.trim() || "default";
}
function wUr(e) {
  return process.env.ANTHROPIC_PROFILE?.trim() || Eye(e);
}
function H(e, r) {
  let n = R(g(e, "configs", `${r}.json`));
  if (n === null) return null;
  let s;
  try {
    s = JSON.parse(n);
  } catch {
    return null;
  }
  let i = s?.authentication?.type ?? null;
  if (i === "user_oauth") {
    if (!R(B(e, r, s))?.trim()) return null;
  }
  return i;
}
function B(e, r, n) {
  if (n === void 0) {
    let s = R(g(e, "configs", `${r}.json`));
    if (s !== null) try {
      n = JSON.parse(s);
    } catch {}
  }
  return n?.authentication?.credentials_path ?? g(e, "credentials", `${r}.json`);
}
function TD() {
  return fe()?.dir ?? null;
}
function fe() {
  let env = process.env,
    dir = env.ANTHROPIC_CONFIG_DIR?.trim();
  if (dir) return {
    dir: dir,
    space: "userNamed"
  };
  {
    let i = env.APPDATA?.trim();
    if (i) return {
      dir: g(i, "Anthropic"),
      space: "home"
    };
    let d = env.USERPROFILE?.trim();
    return d ? {
      dir: g(d, "AppData", "Roaming", "Anthropic"),
      space: "home"
    } : null;
  }
  let n = env.XDG_CONFIG_HOME?.trim();
  if (n) return {
    dir: g(n, "anthropic"),
    space: "home"
  };
  let s = env.HOME?.trim();
  return s ? {
    dir: g(s, ".config", "anthropic"),
    space: "home"
  } : null;
}
function le() {
  return process.env.ANTHROPIC_PROFILE?.trim();
}
function ue() {
  return qe.every(item => process.env[item]?.trim());
}
function re(e) {
  let r = oe(e);
  if (r === Ve(r).root) return !0;
  let n = Xe(r, oe(ce().cwd())),
    s = n.split(se)[0];
  return n === "" || s !== ".." && !ne(n);
}
function oe(e) {
  let r = D(e),
    n = "";
  for (;;) try {
    r = g(Ke.native(r), n);
    break;
  } catch {
    let s = ze(r);
    if (s === r) {
      r = g(r, n);
      break;
    }
    n = n ? g(te(r), n) : te(r), r = s;
  }
  return r.toLowerCase();
}
function tt(e) {
  try {
    return je(e).isDirectory();
  } catch {
    return !1;
  }
}
function R(e) {
  let primedFiles = O.of(j().host).primedFiles;
  if (primedFiles !== void 0 && primedFiles.has(e)) return primedFiles.get(e) ?? null;
  try {
    return Ye(e, "utf-8");
  } catch (error) {
    if (Et(error)) return null;
    throw error;
  }
}
async function CNo(e) {
  let r = O.of(j().host),
    n = fe();
  if (r.precedenceSource.filled || n === null) return;
  let {
      dir: dir_2,
      space: space
    } = n,
    d = new Map(),
    _ = async c => {
      let C;
      try {
        C = await e.hostFiles.readText(Gu[space](c));
      } catch (error) {
        return t(`WIF profile read-ahead: the storage backend threw reading ${c}: ${l(error)}`, {
          level: "warn"
        }), null;
      }
      if (C.ok) {
        let I = C.value.found ? C.value.value : null;
        return d.set(c, I), I;
      }
      if (cT(gf(C.error))) d.set(c, null);
      return null;
    },
    m = le();
  if (!m && ue()) return;
  let E = m || (await _(g(dir_2, "active_config")))?.trim() || "default";
  await _(g(dir_2, "configs", `${E}.json`)), r.primedFiles = d;
  try {
    Kb(), E5e();
  } catch (error) {
    t(`WIF profile read-ahead: left to the first reader: ${l(error)}`);
  } finally {
    r.primedFiles = void 0;
  }
}
function P$e() {
  let CLAUDE_CODE_FEDERATION_CACHE_DIR = a.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (CLAUDE_CODE_FEDERATION_CACHE_DIR) return de(CLAUDE_CODE_FEDERATION_CACHE_DIR);
  let r = TD();
  return r === null ? null : de(r, "credentials", "federation");
}
var F1 = "proxy-injected";
var rAe = "ssh-placeholder";
var T5e = ["CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE", "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER"];
function RNo(e) {
  return {
    ...(e.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType
    }),
    ...(e.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier
    })
  };
}
function vUr() {
  if (a.CLAUDE_CODE_SESSION_KIND !== "bg") return {
    subscriptionType: void 0,
    rateLimitTier: void 0
  };
  return {
    subscriptionType: a.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: a.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0
  };
}
function xfn() {
  return pu().map(item => item.sandbox?.bwrapPath).find(item => item != null);
}
function ANo() {
  return pu().map(item => item.sandbox?.socatPath).find(item => item != null);
}
function pe() {
  let e = xfn();
  if (e) return I$(e);
  return I$("bwrap");
}
var rt = /[ \t\n\v\f\r'"]/,
  kUr = ["YARN_HTTP_PROXY", "YARN_HTTPS_PROXY", "npm_config_proxy", "npm_config_https_proxy", "npm_config_noproxy", "GLOBAL_AGENT_HTTP_PROXY", "GLOBAL_AGENT_HTTPS_PROXY", "GLOBAL_AGENT_NO_PROXY", "DOCKER_HTTP_PROXY", "DOCKER_HTTPS_PROXY", "ELECTRON_GET_USE_PROXY", "CLOUDSDK_PROXY_TYPE", "CLOUDSDK_PROXY_ADDRESS", "CLOUDSDK_PROXY_PORT", "CLOUDSDK_PROXY_USERNAME", "CLOUDSDK_PROXY_PASSWORD", "FSSPEC_GCS", "JAVA_TOOL_OPTIONS"];
function _e(e) {
  let r = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    n = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    s = fYn(e);
  if (!r && !n) return {};
  let i = me(r),
    d = me(n);
  if (!d.host) d = i;
  let _ = {},
    m = (E, c) => {
      if (c && e[E] === void 0) _[E] = c;
    };
  if (m("YARN_HTTP_PROXY", r), m("YARN_HTTPS_PROXY", n), m("npm_config_proxy", r), m("npm_config_https_proxy", n), m("npm_config_noproxy", s), m("GLOBAL_AGENT_HTTP_PROXY", r), m("GLOBAL_AGENT_HTTPS_PROXY", n), m("GLOBAL_AGENT_NO_PROXY", s), m("ELECTRON_GET_USE_PROXY", "1"), m("DOCKER_HTTP_PROXY", r), m("DOCKER_HTTPS_PROXY", n), d.host) m("CLOUDSDK_PROXY_TYPE", "http"), m("CLOUDSDK_PROXY_ADDRESS", d.host), m("CLOUDSDK_PROXY_PORT", d.port), m("CLOUDSDK_PROXY_USERNAME", d.user), m("CLOUDSDK_PROXY_PASSWORD", d.pass);
  if (m("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), d.host) {
    let JAVA_TOOL_OPTIONS = e.JAVA_TOOL_OPTIONS;
    if (!JAVA_TOOL_OPTIONS?.includes("-Dhttps.proxyHost=")) {
      let c = ot(i, d, s);
      _.JAVA_TOOL_OPTIONS = JAVA_TOOL_OPTIONS ? `${JAVA_TOOL_OPTIONS} ${c}` : c;
    }
  }
  return _;
}
function me(e) {
  if (!e) return {
    host: "",
    port: "",
    user: "",
    pass: ""
  };
  try {
    let r = new URL(e);
    if (!r.hostname) return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
    return {
      host: r.hostname.startsWith("[") && r.hostname.endsWith("]") ? r.hostname.slice(1, -1) : r.hostname,
      port: r.port || (r.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(r.username),
      pass: decodeURIComponent(r.password)
    };
  } catch {
    return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
  }
}
function ot(e, r, n) {
  let s = [],
    i = (d, _) => {
      if (_ && !rt.test(_)) s.push(`-D${d}=${_}`);
    };
  if (i("http.proxyHost", e.host), i("http.proxyPort", e.port), i("https.proxyHost", r.host), i("https.proxyPort", r.port), i("http.proxyUser", e.user), i("http.proxyPassword", e.pass), i("https.proxyUser", r.user), i("https.proxyPassword", r.pass), n) i("http.nonProxyHosts", nt(n));
  return s.push("-Djdk.http.auth.tunneling.disabledSchemes="), s.push("-Djdk.http.auth.proxying.disabledSchemes="), s.join(" ");
}
function nt(e) {
  return e.split(/[,\s]+/).map(item => item.trim()).filter(Boolean).flatMap(item => {
    if (item.startsWith(".")) return [`*${item}`];
    return at(item) ?? [item];
  }).join("|");
}
function at(e) {
  let r = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!r) return;
  let n = [Number(r[1]), Number(r[2]), Number(r[3]), Number(r[4])],
    s = Number(r[5]);
  if (n.some(item => item > 255) || s < 8 || s > 24) return [e];
  let i = Math.floor(s / 8),
    d = s % 8;
  if (d === 0) return [`${n.slice(0, i).join(".")}.*`];
  let _ = 2 ** (8 - d);
  if (_ > 16) return [e];
  let m = n[i] - n[i] % _,
    E = [];
  for (let c = m; c < m + _; c++) E.push(`${[...n.slice(0, i), c].join(".")}.*`);
  return E;
}
var I$e = ["CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SOURCE", "CLAUDE_BG_ISOLATION", "CLAUDE_BG_BACKEND", "CLAUDE_CODE_SESSION_NAME", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS", "CLAUDE_CODE_RESUME_PROMPT", "CLAUDE_CODE_RESUME_REASON", "CLAUDE_CODE_RESUME_SOURCE_ALIVE", "CLAUDE_BG_POST_CLEAR_RESPAWN", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_BG_MEMORY_TOGGLED_OFF", "CLAUDE_BG_WORKSPACE_TRUSTED", ...T5e];
class he {
  scrubEnabledLatched = void 0;
  scrubSandboxAvailableLatched = void 0;
  scrubPathsLatched = void 0;
  scriptCallCounts = new Map();
  scriptCapsLatched = void 0;
  setScrubEnabledLatched(e) {
    this.scrubEnabledLatched = e;
  }
  setScrubSandboxAvailableLatched(e) {
    this.scrubSandboxAvailableLatched = e;
  }
  setScrubPathsLatched(e) {
    this.scrubPathsLatched = e;
  }
  setScriptCapsLatched(e) {
    this.scriptCapsLatched = e;
  }
  reset() {
    this.scrubEnabledLatched = void 0, this.scrubSandboxAvailableLatched = void 0, this.scrubPathsLatched = void 0, this.scriptCallCounts.clear(), this.scriptCapsLatched = void 0;
  }
}
var h = Rt(new he(), e => {
  e.reset(), nHo();
});
class Ce {
  getAgentProxyEnv = void 0;
  settingsColorEnv = {};
  hipaaTierNoticeGiven = !1;
}
var y = new q(() => new Ce());
function td() {
  let scrubEnabledLatched = h.scrubEnabledLatched;
  if (scrubEnabledLatched !== void 0) return scrubEnabledLatched;
  let r = Ne(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return h.setScrubEnabledLatched(r), r;
}
function m3n() {
  if (td()) return !0;
  if (zo(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var G = [".env", ".env.local", ".env.development", ".env.development.local", ".env.test", ".env.test.local", ".env.production", ".env.production.local"],
  allowWrite = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map(item => `/${item}`),
  xe = ".";
function Ae(e) {
  let r = new Set();
  for (let n of [Lx, Lo, AD]) try {
    r.add(`${Y1(e, n)}/.claude`);
  } catch {}
  return [...r];
}
function iY() {
  if (h.scrubSandboxAvailableLatched !== void 0) return h.scrubSandboxAvailableLatched;
  return !1;
}
async function EUr() {
  if (D3n(), !td()) return;
  let home = ge(),
    originalCwd = we(),
    runnerFileCommandsDir = process.env.GITHUB_ENV ? W(process.env.GITHUB_ENV) : void 0,
    s = process.env.GITHUB_WORKSPACE;
  h.setScrubSandboxAvailableLatched(!1);
  let pathDirs = (process.env.PATH ?? "").split(":").map(item => item ? P.normalize(item).replace(/\/+$/, "") : item).filter(item => item && allowWrite.some(C => item.startsWith(`${C}/`)));
  h.setScrubPathsLatched({
    home: home,
    originalCwd: originalCwd,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: P$e() ?? void 0,
    canonicalClaudeDirs: Ae(originalCwd),
    runnerFileCommandsDir: runnerFileCommandsDir,
    workspace: s,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: pathDirs
  }), Ie();
  return;
}
function Ie() {
  if (h.scriptCapsLatched !== void 0) return;
  let CLAUDE_CODE_SCRIPT_CAPS = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!CLAUDE_CODE_SCRIPT_CAPS) {
    h.setScriptCapsLatched(null);
    return;
  }
  try {
    let r = J(CLAUDE_CODE_SCRIPT_CAPS);
    if (r && typeof r === "object" && !Array.isArray(r)) {
      let n = Qr(r, (s, i) => typeof s === "number" && Number.isFinite(s) && i.trim().length > 0);
      h.setScriptCapsLatched(Object.keys(n).length > 0 ? n : null);
    } else h.setScriptCapsLatched(null);
  } catch {
    h.setScriptCapsLatched(null);
  }
}
function TUr(e) {
  if (!td()) return;
  if (Ie(), !h.scriptCapsLatched) return;
  let {
    scriptCapsLatched: scriptCapsLatched,
    scriptCallCounts: scriptCallCounts
  } = h;
  for (let [s, i] of Object.entries(scriptCapsLatched)) {
    let d = e.split(s).length - 1;
    if (d > 0) {
      let _ = (scriptCallCounts.get(s) ?? 0) + d;
      if (scriptCallCounts.set(s, _), _ > i) throw Error(`Script call limit exceeded: ${s} has been called ${_} times (cap: ${i}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
    }
  }
}
function d5o(e) {
  y.of(j().host).getAgentProxyEnv = e;
}
function O$e() {
  return y.of(j().host).getAgentProxyEnv?.() ?? {};
}
function g3n(e) {
  y.of(j().host).settingsColorEnv = e;
}
function h3n(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function y3n(e) {
  let r = e.toUpperCase();
  return !Mpt(e) && mne(e) && !rHo.has(r) && !Jfn(r);
}
var st = new Set(uUt.map(item => item.toUpperCase()));
function _3n() {
  if (!Pfn()) return [];
  let e = y.of(j().host);
  if (!e.hipaaTierNoticeGiven) e.hipaaTierNoticeGiven = !0, t("HIPAA: withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion");
  return GUr;
}
function Pfn() {
  return Uc("hipaa");
}
var Ee = new Set(GUr.map(item => item.toUpperCase()));
function w$t(e) {
  let r = e.replace(/^INPUT_/, "");
  return h3n(r) || Dye(r) || r.startsWith("OTEL_") || r === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}
function b3n() {
  let env_2 = process.env,
    r = s => env_2.ANTHROPIC_UNIX_SOCKET !== void 0 && (s === "CLAUDE_CODE_OAUTH_TOKEN" || s === "ANTHROPIC_API_KEY") && env_2[s] === rAe,
    n = s => !Object.keys(env_2).some(item => item !== s && item.toUpperCase() === s);
  return [...uUt.filter(item => !r(item)), ...Object.keys(env_2).filter(item => w$t(item.toUpperCase())), ...X$e(env_2), ...xUr(), ..._3n().filter(item => !(r(item) && n(item))), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", ...I$e];
}
var it = new Set(["BUN_GC_TIMER_INTERVAL", "BUN_GC_TIMER_DISABLE", "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS", "BUN_IDLE_GC_SECONDS"]),
  ft = new Set(["MIMALLOC_PURGE_HOLES_MIN_INTERVAL"]);
function Te(e) {
  let r = e.toUpperCase();
  return r.startsWith("BUN_JSC_") || it.has(r) || ft.has(r);
}
function lt() {
  if (a.CLAUDE_CODE_REMOTE !== !0) return [];
  return Object.keys(process.env).filter(Te);
}
function hs() {
  let e = y.of(j().host),
    r = e.getAgentProxyEnv?.() ?? {},
    n = Object.keys(r).length > 0,
    {
      settingsColorEnv: settingsColorEnv
    } = e,
    i = Object.keys(settingsColorEnv).length > 0,
    _ = a.CLAUDE_CODE_REMOTE === !0 ? _e(n ? {
      ...process.env,
      ...r
    } : process.env) : {},
    m = Object.keys(_).length > 0,
    E = m3n(),
    c = Object.keys(process.env).some(item => st.has(item.toUpperCase())) || Object.keys(process.env).some(item => w$t(item.toUpperCase())) || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0,
    C = X$e(process.env),
    I = xUr(),
    M = Pfn() && Object.keys(process.env).some(item => Ee.has(fne(item))),
    Y = !1;
  Y = I$e.some(item => process.env[item] !== void 0);
  let Re = Object.keys(process.env).some(item => /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(item)),
    Se = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 || a.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0,
    De = a.CLAUDE_CODE_QUESTION_EXTENDED || a.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS,
    CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = a.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH,
    ye = $1(),
    Le = a.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT || a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT || a.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS,
    be = a.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0,
    CLAUDE_CODE_MCP_APPS_HOST = a.CLAUDE_CODE_MCP_APPS_HOST,
    K = !1,
    V = lt().length > 0;
  if (!n && !m && !E && !Y && !c && !C.length && !I.length && !M && !Re && !i && !Se && !De && !CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH && !ye && !Le && !be && !CLAUDE_CODE_MCP_APPS_HOST && !K && !V) return process.env;
  let x = {
      ...process.env,
      ...settingsColorEnv,
      ...r,
      ..._
    },
    Ue = new Set([...b3n(), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_MCP_APPS_HOST"].map(item => item.toUpperCase()));
  for (let p of Object.keys(x)) if (Ue.has(p.toUpperCase()) || M && p.includes("-") && Ee.has(fne(p))) delete x[p];
  for (let p of I$e) delete x[p];
  for (let p of Object.keys(x)) if (p.startsWith("OTEL_")) delete x[p];
  if (delete x.CLAUDE_CODE_OTEL_DIAG_STDERR, delete x.CLAUDE_CODE_PLUGIN_ATTRIBUTION, delete x.CLAUDE_CODE_SKILL_ATTRIBUTION, K) {
    for (let p of Object.keys(x)) if (ut(p)) delete x[p];
  }
  if (V) {
    for (let p of Object.keys(x)) if (Te(p)) delete x[p];
  }
  if (!E) return x;
  let He = dt(),
    $e = D5e().length > 0;
  for (let [p, T] of Object.entries(x)) {
    if (T === F1 && Object.hasOwn(r, p)) continue;
    if ((p === "CLAUDE_CODE_OAUTH_TOKEN" || p === "ANTHROPIC_API_KEY") && T === rAe && x.ANTHROPIC_UNIX_SOCKET !== void 0) continue;
    if (He.has(fne(p)) || U$t.test(p) || B$t(p) || $e && y3n(p)) {
      delete x[p];
      continue;
    }
    if (T === void 0 || Mpt(p)) continue;
    let S = typeof T === "string" ? T : String(T);
    if (M5e(p)) {
      let v = F$t(p, S);
      if (v.value !== S) x[p] = v.value;
      if (v.cut) {
        let U = WUr(p, v.value);
        if (U !== void 0 && !jUr(x, U.name)) x[U.name] = U.value;
      }
      continue;
    }
    let b = $$t(p, S);
    if (b === void 0) {
      if (XE(S)) delete x[p];
    } else if (b !== S) if (b === "") delete x[p];else x[p] = b;
  }
  return x;
}
function v$t() {
  let CLAUDE_CODE_MCP_ALLOWLIST_ENV = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Ne(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) return !0;
  if (zo(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function CUr() {
  let scrubPathsLatched = h.scrubPathsLatched,
    r = scrubPathsLatched?.home ?? ge(),
    n = scrubPathsLatched?.originalCwd ?? we(),
    s = scrubPathsLatched?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    i = scrubPathsLatched?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? W(process.env.GITHUB_ENV) : void 0),
    d = scrubPathsLatched?.workspace ?? process.env.GITHUB_WORKSPACE,
    _ = d && P.resolve(d) !== P.resolve(n) ? [`${d}/.git/hooks`, `${d}/.git/config`, `${d}/.git/config.lock`, `${d}/.git/config.worktree`, `${d}/.git/config.worktree.lock`, `${d}/.git/commondir`, `${d}/.git/worktrees`, `${d}/.git/modules`, `${d}/.git/info/exclude`, `${d}/.git/glab-cli`, `${d}/.gitmodules`, `${d}/.github`, `${d}/.claude`] : [];
  return {
    filesystem: {
      allowWrite: allowWrite,
      denyRead: ["/run/docker.sock", "/run/containerd/containerd.sock", "/run/podman/podman.sock", "/run/buildkit/buildkitd.sock", "/run/dbus", "/run/user", scrubPathsLatched?.federationCacheDir ?? P$e()].filter(item => !!item),
      denyWrite: [`${r}/.bash_profile`, `${r}/.bashrc`, `${r}/.bash_aliases`, `${r}/.bash_login`, `${r}/.bash_logout`, `${r}/.profile`, `${r}/.zshrc`, `${r}/.zprofile`, `${r}/.zshenv`, `${r}/.zlogin`, `${r}/.zlogout`, `${r}/.claude`, `${r}/.claude.json`, scrubPathsLatched?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR, `${r}/.gitconfig`, `${r}/.config/git`, `${r}/.bunfig.toml`, `${n}/bunfig.toml`, `${n}/package.json`, ...G.map(item => `${n}/${item}`), `${r}/.npmrc`, `${n}/.npmrc`, `${r}/.yarnrc`, `${r}/.yarnrc.yml`, `${n}/.yarnrc`, `${n}/.yarnrc.yml`, `${r}/.config/pip`, `${r}/.pip`, `${n}/package-lock.json`, `${n}/yarn.lock`, `${n}/pnpm-lock.yaml`, `${n}/node_modules/.bin`, `${n}/.git/modules`, `${n}/scripts`, `${n}/.claude`, ...(scrubPathsLatched?.canonicalClaudeDirs ?? Ae(n)), `${n}/.github`, `${r}/.local/bin`, `${r}/runners`, `${r}/actions-runner`, "/tmp/inline-comments-buffer.jsonl", ...(scrubPathsLatched?.pathDirs ?? []), i, s, s && s.includes("/_actions/") ? s.slice(0, s.indexOf("/_actions/") + 9) : void 0, scrubPathsLatched?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH, `${r}/.config/gh`, `${r}/.config/glab-cli`, `${r}/.netrc`, `${r}/.ssh`, `${n}/.git/hooks`, `${n}/.git/config`, `${n}/.git/config.lock`, `${n}/.git/config.worktree`, `${n}/.git/config.worktree.lock`, `${n}/.git/commondir`, `${n}/.git/worktrees`, `${n}/.gitmodules`, `${n}/.git/info/exclude`, `${n}/.git/glab-cli`, ..._].filter(item => !!item)
    }
  };
}
function ut(e) {
  return !1;
}
var F;
function dt() {
  let e = D5e(),
    armed = e.length > 0;
  if (F?.armed !== armed) F = {
    armed: armed,
    names: new Set([...N$e, ...e].map(item => item.toUpperCase()))
  };
  return F.names;
}
export { wpt, sY, _Ur, vNo, vpt, k5e, kpt, bUr, Efn, SUr, tAe, y$t, OAuthAccountOnHoldError as nAe, OAuthCallbackError as $q, Tfn, A$e, Ept, Kb, Cfn, _$t, kNo, E5e, b$t, x$e, S$t, Rfn, ENo, TNo, Afn, Eye, wUr, TD, CNo, T5e, RNo, vUr, P$e, rAe, F1, xfn, ANo, kUr, I$e, td, m3n, iY, EUr, TUr, d5o, O$e, g3n, h3n, y3n, _3n, Pfn, w$t, b3n, hs, v$t, CUr };