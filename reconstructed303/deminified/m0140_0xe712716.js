// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe, ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { V2, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { j, ke, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { hFo } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Ni } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { oL } from "B:/~BUN/root/chunk-pej55jax.js";
import { w2, XO, IB, n_t, JFo, vun, QFo, r_t, MHr, IVs, IQe, eHo, zle, pBt, kun, qge, Eun, j5n, MVs, Tun, Wx, Zp } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { tR } from "B:/~BUN/root/chunk-bsjrnca2.js";
import { Js } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { Y0e } from "B:/~BUN/root/chunk-wegca9zh.js";
import { u0e, epn, YQe, l$ } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { IUr } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
var Pyt = ["CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE", "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER"];
function I2s(e) {
  return {
    ...(e.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType
    }),
    ...(e.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier
    })
  };
}
function iFo() {
  if (a.CLAUDE_CODE_SESSION_KIND !== "bg") return {
    subscriptionType: void 0,
    rateLimitTier: void 0
  };
  return {
    subscriptionType: a.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: a.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0
  };
}
import { homedir as k } from "os";
import { dirname as U, posix as T } from "path";
import { resolve as y } from "path";
function gQe() {
  if (de()) return null;
  let CLAUDE_CODE_FEDERATION_CACHE_DIR = a.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (CLAUDE_CODE_FEDERATION_CACHE_DIR) return y(CLAUDE_CODE_FEDERATION_CACHE_DIR);
  let n = oL();
  return n === null ? null : y(n, "credentials", "federation");
}
var RB = "proxy-injected";
var Kcn = "ssh-placeholder";
function M2s(e) {
  let {
    CLAUDE_CODE_OAUTH_TOKEN: CLAUDE_CODE_OAUTH_TOKEN,
    ANTHROPIC_API_KEY: ANTHROPIC_API_KEY
  } = e;
  return !!e.ANTHROPIC_UNIX_SOCKET && !e.ANTHROPIC_AUTH_TOKEN && (CLAUDE_CODE_OAUTH_TOKEN === "ssh-placeholder" && !ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === "ssh-placeholder" && !CLAUDE_CODE_OAUTH_TOKEN);
}
function n5n() {
  return Zp().map(item => item.sandbox?.bwrapPath).find(item => item != null);
}
function D2s() {
  return Zp().map(item => item.sandbox?.socatPath).find(item => item != null);
}
function H() {
  let e = n5n();
  if (e) return V2(e);
  return V2("bwrap");
}
var Le = /[ \t\n\v\f\r'"]/;
function YFr(e) {
  let n = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    r = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    o = IUr(e);
  if (!n && !r) return {};
  let E = x(n),
    i = x(r);
  if (!i.host) i = E;
  let C = {},
    _ = (u, c) => {
      if (c && e[u] === void 0) C[u] = c;
    };
  if (_("YARN_HTTP_PROXY", n), _("YARN_HTTPS_PROXY", r), _("npm_config_proxy", n), _("npm_config_https_proxy", r), _("npm_config_noproxy", o), _("GLOBAL_AGENT_HTTP_PROXY", n), _("GLOBAL_AGENT_HTTPS_PROXY", r), _("GLOBAL_AGENT_NO_PROXY", o), _("ELECTRON_GET_USE_PROXY", "1"), _("DOCKER_HTTP_PROXY", n), _("DOCKER_HTTPS_PROXY", r), i.host) _("CLOUDSDK_PROXY_TYPE", "http"), _("CLOUDSDK_PROXY_ADDRESS", i.host), _("CLOUDSDK_PROXY_PORT", i.port), _("CLOUDSDK_PROXY_USERNAME", i.user), _("CLOUDSDK_PROXY_PASSWORD", i.pass);
  if (_("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), i.host) {
    let JAVA_TOOL_OPTIONS = e.JAVA_TOOL_OPTIONS;
    if (!JAVA_TOOL_OPTIONS?.includes("-Dhttps.proxyHost=")) {
      let c = Ue(E, i, o);
      C.JAVA_TOOL_OPTIONS = JAVA_TOOL_OPTIONS ? `${JAVA_TOOL_OPTIONS} ${c}` : c;
    }
  }
  return C;
}
function x(e) {
  if (!e) return {
    host: "",
    port: "",
    user: "",
    pass: ""
  };
  try {
    let n = new URL(e);
    if (!n.hostname) return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
    return {
      host: n.hostname.startsWith("[") && n.hostname.endsWith("]") ? n.hostname.slice(1, -1) : n.hostname,
      port: n.port || (n.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(n.username),
      pass: decodeURIComponent(n.password)
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
function Ue(e, n, r) {
  let o = [],
    E = (i, C) => {
      if (C && !Le.test(C)) o.push(`-D${i}=${C}`);
    };
  if (E("http.proxyHost", e.host), E("http.proxyPort", e.port), E("https.proxyHost", n.host), E("https.proxyPort", n.port), E("http.proxyUser", e.user), E("http.proxyPassword", e.pass), E("https.proxyUser", n.user), E("https.proxyPassword", n.pass), r) E("http.nonProxyHosts", me(r));
  return o.push("-Djdk.http.auth.tunneling.disabledSchemes="), o.push("-Djdk.http.auth.proxying.disabledSchemes="), o.join(" ");
}
function me(e) {
  return e.split(/[,\s]+/).map(item => item.trim()).filter(Boolean).flatMap(item => {
    if (item.startsWith(".")) return [`*${item}`];
    return Pe(item) ?? [item];
  }).join("|");
}
function Pe(e) {
  let n = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!n) return;
  let r = [Number(n[1]), Number(n[2]), Number(n[3]), Number(n[4])],
    o = Number(n[5]);
  if (r.some(item => item > 255) || o < 8 || o > 24) return [e];
  let E = Math.floor(o / 8),
    i = o % 8;
  if (i === 0) return [`${r.slice(0, E).join(".")}.*`];
  let C = 2 ** (8 - i);
  if (C > 16) return [e];
  let _ = r[E] - r[E] % C,
    u = [];
  for (let c = _; c < _ + C; c++) u.push(`${[...r.slice(0, E), c].join(".")}.*`);
  return u;
}
var hQe = ["CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SOURCE", "CLAUDE_BG_ISOLATION", "CLAUDE_BG_BACKEND", "CLAUDE_CODE_SESSION_NAME", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS", "CLAUDE_CODE_RESUME_PROMPT", "CLAUDE_CODE_RESUME_REASON", "CLAUDE_CODE_RESUME_SOURCE_ALIVE", "CLAUDE_BG_POST_CLEAR_RESPAWN", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_BG_MEMORY_TOGGLED_OFF", "CLAUDE_BG_AUTO_MEMORY_OFF", "CLAUDE_BG_WORKSPACE_TRUSTED", "CLAUDE_BG_CARRIED_PROMPTS_SHA256", "CLAUDE_BG_GATEWAY_WITHHELD", "CLAUDE_CODE_RELAUNCH_HOME_TRUST", ...Pyt];
class F {
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
var l = He(new F(), e => {
  e.reset(), IVs();
});
class K {
  getAgentProxyEnv = void 0;
  getGhStandinDir = void 0;
  settingsEnvForChildren = {};
  hipaaTierNoticeGiven = !1;
}
var O = new z(() => new K());
function ku() {
  let scrubEnabledLatched = l.scrubEnabledLatched;
  if (scrubEnabledLatched !== void 0) return scrubEnabledLatched;
  let n = Fe(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return l.setScrubEnabledLatched(n), n;
}
function XFr() {
  if (ku()) return !0;
  if (ws(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var m = [".env", ".env.local", ".env.development", ".env.development.local", ".env.test", ".env.test.local", ".env.production", ".env.production.local"],
  allowWrite = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map(item => `/${item}`),
  B = ".";
function Y(e) {
  let n = new Set();
  for (let r of [XO, Js, w2]) try {
    n.add(`${l$(e, r)}/.claude`);
  } catch {}
  return [...n];
}
function $le() {
  if (l.scrubSandboxAvailableLatched !== void 0) return l.scrubSandboxAvailableLatched;
  return !1;
}
async function aFo() {
  if (MHr(), !ku()) return;
  let home = k(),
    originalCwd = ke(),
    runnerFileCommandsDir = process.env.GITHUB_ENV ? U(process.env.GITHUB_ENV) : void 0,
    o = process.env.GITHUB_WORKSPACE;
  l.setScrubSandboxAvailableLatched(!1);
  let pathDirs = (process.env.PATH ?? "").split(":").map(item => item ? T.normalize(item).replace(/\/+$/, "") : item).filter(item => item && allowWrite.some(A => item.startsWith(`${A}/`)));
  l.setScrubPathsLatched({
    home: home,
    originalCwd: originalCwd,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: gQe() ?? void 0,
    canonicalClaudeDirs: Y(originalCwd),
    runnerFileCommandsDir: runnerFileCommandsDir,
    workspace: o,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: pathDirs
  }), W();
  return;
}
function W() {
  if (l.scriptCapsLatched !== void 0) return;
  let CLAUDE_CODE_SCRIPT_CAPS = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!CLAUDE_CODE_SCRIPT_CAPS) {
    l.setScriptCapsLatched(null);
    return;
  }
  try {
    let n = J(CLAUDE_CODE_SCRIPT_CAPS);
    if (n && typeof n === "object" && !Array.isArray(n)) {
      let r = Bs(n, (o, E) => typeof o === "number" && Number.isFinite(o) && E.trim().length > 0);
      l.setScriptCapsLatched(Object.keys(r).length > 0 ? r : null);
    } else l.setScriptCapsLatched(null);
  } catch {
    l.setScriptCapsLatched(null);
  }
}
function lFo(e) {
  if (!ku()) return;
  if (W(), !l.scriptCapsLatched) return;
  let {
    scriptCapsLatched: scriptCapsLatched,
    scriptCallCounts: scriptCallCounts
  } = l;
  for (let [o, E] of Object.entries(scriptCapsLatched)) {
    let i = e.split(o).length - 1;
    if (i > 0) {
      let C = (scriptCallCounts.get(o) ?? 0) + i;
      if (scriptCallCounts.set(o, C), C > E) throw Error(`Script call limit exceeded: ${o} has been called ${C} times (cap: ${E}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
    }
  }
}
function yai(e) {
  O.of(j().host).getAgentProxyEnv = e;
}
function _ai(e) {
  O.of(j().host).getGhStandinDir = e;
}
function yQe() {
  return O.of(j().host).getAgentProxyEnv?.() ?? {};
}
function dFo() {
  return O.of(j().host).getGhStandinDir?.();
}
function JFr(e) {
  O.of(j().host).settingsEnvForChildren = e;
}
function cFo() {
  let {
    settingsEnvForChildren: settingsEnvForChildren
  } = O.of(j().host);
  return settingsEnvForChildren[Hge(settingsEnvForChildren, "PATH")];
}
function XUt(e) {
  let {
    settingsEnvForChildren: settingsEnvForChildren_2
  } = O.of(j().host);
  return settingsEnvForChildren_2[Hge(settingsEnvForChildren_2, e)] ?? process.env[e];
}
var Ie = "3";
function QFr() {
  return a.CLAUDE_BG_BACKEND === "daemon" && a.FORCE_COLOR === Ie;
}
function ZFr() {
  if (!QFr()) return !1;
  let {
    settingsEnvForChildren: settingsEnvForChildren_3
  } = O.of(j().host);
  return !Object.hasOwn(settingsEnvForChildren_3, Hge(settingsEnvForChildren_3, "FORCE_COLOR"));
}
function Hge(e, n) {
  if (I() !== "windows" || Object.hasOwn(e, n)) return n;
  let r = n.toUpperCase();
  return Object.keys(e).find(item => item.toUpperCase() === r) ?? n;
}
function eHr(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function tHr(e) {
  let n = e.toUpperCase();
  return !pBt(e) && qge(e) && !MVs.has(n) && !j5n(n);
}
var be = new Set(epn.map(item => item.toUpperCase()));
function nHr() {
  if (!JUt()) return [];
  let e = O.of(j().host);
  if (!e.hipaaTierNoticeGiven) e.hipaaTierNoticeGiven = !0, t("HIPAA: withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion");
  return eHo;
}
function JUt() {
  return Ni("hipaa");
}
var w = new Set(eHo.map(item => item.toUpperCase()));
function XWe(e) {
  let n = e.replace(/^INPUT_/, "");
  return eHr(n) || u0e(n) || n.startsWith("OTEL_") || n === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}
function rHr() {
  let env = process.env,
    n = o => env.ANTHROPIC_UNIX_SOCKET !== void 0 && (o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "ANTHROPIC_API_KEY") && env[o] === Kcn,
    r = o => !Object.keys(env).some(item => item !== o && item.toUpperCase() === o);
  return [...epn.filter(item => !n(item)), ...Object.keys(env).filter(item => XWe(item.toUpperCase())), ...YQe(env), ...hFo(), ...nHr().filter(item => !(n(item) && r(item))), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_MCP_SERVE_SETTINGS", "CLAUDE_CODE_REMOTE_TOOLS_FORWARD", "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT", ...hQe];
}
var Ne = new Set(["BUN_GC_TIMER_INTERVAL", "BUN_GC_TIMER_DISABLE", "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS", "BUN_IDLE_GC_SECONDS"]),
  ve = new Set(["MIMALLOC_PURGE_HOLES_MIN_INTERVAL"]);
function G(e) {
  let n = e.toUpperCase();
  return n.startsWith("BUN_JSC_") || Ne.has(n) || ve.has(n);
}
function ss() {
  let e = O.of(j().host),
    n = e.getAgentProxyEnv?.() ?? {},
    r = Object.keys(n).length > 0,
    {
      settingsEnvForChildren: settingsEnvForChildren_4
    } = e,
    E = Object.keys(settingsEnvForChildren_4).length > 0,
    env_2 = process.env;
  if (E) {
    env_2 = {
      ...process.env
    };
    for (let [s, p] of Object.entries(settingsEnvForChildren_4)) env_2[Hge(env_2, s)] = p;
  }
  let C = a.CLAUDE_CODE_REMOTE === !0,
    _ = C ? YFr(r ? {
      ...env_2,
      ...n
    } : env_2) : {},
    u = Object.keys(_).length > 0,
    c = XFr(),
    A = Object.keys(process.env).some(item => be.has(item.toUpperCase())) || Object.keys(process.env).some(item => XWe(item.toUpperCase())) || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0,
    X = YQe(process.env),
    Q = hFo(),
    P = JUt() && Object.keys(process.env).some(item => w.has(zle(item))),
    b = !1;
  b = hQe.some(item => process.env[item] !== void 0);
  let q = Object.keys(process.env).some(item => /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(item)),
    Z = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 || a.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0,
    ee = a.CLAUDE_CODE_QUESTION_EXTENDED || a.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS,
    CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES = a.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES,
    CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = a.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH,
    CLAUDE_CODE_SDK_READS_SESSION_STATE = a.CLAUDE_CODE_SDK_READS_SESSION_STATE,
    oe = IB(),
    CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED = a.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED,
    ie = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD"),
    ce = a.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT || a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT || a.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS,
    CLAUDE_CODE_CONFIG_PROBE = a.CLAUDE_CODE_CONFIG_PROBE,
    _e = a.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0,
    CLAUDE_CODE_REMOTE_MCP_CONFIG = a.CLAUDE_CODE_REMOTE_MCP_CONFIG,
    CLAUDE_CODE_MCP_APPS_HOST = a.CLAUDE_CODE_MCP_APPS_HOST,
    CLAUDE_CODE_ATTACHMENTS_BY_PATH = a.CLAUDE_CODE_ATTACHMENTS_BY_PATH,
    ue = a.CLAUDE_CODE_SLEEP_COMPACT || a.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== void 0,
    pe = a.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== void 0,
    Oe = a.CLAUDE_CODE_ARTIFACT_SHARE !== void 0,
    CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST = a.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST,
    fe = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"),
    Te = a.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0,
    CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD = a.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD,
    Se = tR.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0 || tR.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT !== void 0,
    g = !1;
  g = Object.keys(env_2).some(M);
  let N = C && Object.keys(env_2).some(G);
  if (!r && !u && !c && !b && !A && !X.length && !Q.length && !P && !q && !E && !Z && !ee && !CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES && !CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH && !CLAUDE_CODE_SDK_READS_SESSION_STATE && !oe && !CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED && !ie && !ce && !CLAUDE_CODE_CONFIG_PROBE && !_e && !CLAUDE_CODE_REMOTE_MCP_CONFIG && !CLAUDE_CODE_MCP_APPS_HOST && !CLAUDE_CODE_ATTACHMENTS_BY_PATH && !ue && !pe && !Oe && !CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST && !fe && !Te && !CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD && !Se && !g && !N) return process.env;
  let v = {
      ...n,
      ..._
    },
    d = {
      ...env_2
    };
  for (let s of Object.keys(v)) {
    let p = Hge(d, s);
    if (p !== s) delete d[p];
  }
  Object.assign(d, v);
  let he = new Set([...rHr(), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_READS_SESSION_STATE", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_REMOTE_MCP_CONFIG", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_ATTACHMENTS_BY_PATH", "CLAUDE_CODE_SLEEP_COMPACT", "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS", "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS", "CLAUDE_CODE_ARTIFACT_SHARE", "CLAUDE_CODE_ARTIFACT_VERSIONS", "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST", "CLAUDE_CHROME_TAB_GROUP_KEY"].map(item => item.toUpperCase()));
  for (let s of Object.keys(d)) if (he.has(s.toUpperCase()) || XWe(s.toUpperCase()) || P && s.includes("-") && w.has(zle(s))) delete d[s];
  for (let s of hQe) delete d[s];
  if (ZFr()) delete d[Hge(d, "FORCE_COLOR")];
  for (let s of Object.keys(d)) if (s.startsWith("OTEL_")) delete d[s];
  if (delete d.CLAUDE_CODE_OTEL_DIAG_STDERR, delete d.CLAUDE_CODE_PLUGIN_ATTRIBUTION, delete d.CLAUDE_CODE_SKILL_ATTRIBUTION, g) {
    for (let s of Object.keys(d)) if (M(s)) delete d[s];
  }
  if (N) {
    for (let s of Object.keys(d)) if (G(s)) delete d[s];
  }
  if (!c) return d;
  let Re = ye(),
    ge = r_t().length > 0;
  for (let [s, p] of Object.entries(d)) {
    if (p === RB && Object.hasOwn(n, s)) continue;
    if ((s === "CLAUDE_CODE_OAUTH_TOKEN" || s === "ANTHROPIC_API_KEY") && p === Kcn && d.ANTHROPIC_UNIX_SOCKET !== void 0) continue;
    if (Re.has(zle(s)) || Eun.test(s) || Tun(s) || ge && tHr(s)) {
      delete d[s];
      continue;
    }
    if (p === void 0 || pBt(s)) continue;
    let f = typeof p === "string" ? p : String(p);
    if (n_t(s)) {
      let S = vun(s, f);
      if (S.value !== f) d[s] = S.value;
      if (S.cut) {
        let h = QFo(s, S.value);
        if (h !== void 0 && !JFo(d, h.name)) d[h.name] = h.value;
      }
      continue;
    }
    let D = kun(s, f);
    if (D === void 0) {
      if (Wx(f)) delete d[s];
    } else if (D !== f) if (D === "") delete d[s];else d[s] = D;
  }
  return d;
}
function Ycn() {
  let CLAUDE_CODE_MCP_ALLOWLIST_ENV = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Fe(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) return !0;
  if (ws(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function uFo() {
  let scrubPathsLatched = l.scrubPathsLatched,
    n = scrubPathsLatched?.home ?? k(),
    r = scrubPathsLatched?.originalCwd ?? ke(),
    o = scrubPathsLatched?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    E = scrubPathsLatched?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? U(process.env.GITHUB_ENV) : void 0),
    i = scrubPathsLatched?.workspace ?? process.env.GITHUB_WORKSPACE,
    C = i && T.resolve(i) !== T.resolve(r) ? [`${i}/.git/hooks`, `${i}/.git/config`, `${i}/.git/config.lock`, `${i}/.git/config.worktree`, `${i}/.git/config.worktree.lock`, `${i}/.git/commondir`, `${i}/.git/worktrees`, `${i}/.git/modules`, `${i}/.git/info/exclude`, `${i}/.git/glab-cli`, `${i}/.gitmodules`, `${i}/.github`, `${i}/.claude`] : [];
  return {
    filesystem: {
      allowWrite: allowWrite,
      denyRead: ["/run/docker.sock", "/run/containerd/containerd.sock", "/run/podman/podman.sock", "/run/buildkit/buildkitd.sock", "/run/dbus", "/run/user", scrubPathsLatched?.federationCacheDir ?? gQe()].filter(item => !!item),
      denyWrite: [`${n}/.bash_profile`, `${n}/.bashrc`, `${n}/.bash_aliases`, `${n}/.bash_login`, `${n}/.bash_logout`, `${n}/.profile`, `${n}/.zshrc`, `${n}/.zprofile`, `${n}/.zshenv`, `${n}/.zlogin`, `${n}/.zlogout`, `${n}/.claude`, `${n}/.claude.json`, scrubPathsLatched?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR, `${n}/.gitconfig`, `${n}/.config/git`, `${n}/.bunfig.toml`, `${r}/bunfig.toml`, `${r}/package.json`, ...m.map(item => `${r}/${item}`), `${n}/.npmrc`, `${r}/.npmrc`, `${n}/.yarnrc`, `${n}/.yarnrc.yml`, `${r}/.yarnrc`, `${r}/.yarnrc.yml`, `${n}/.config/pip`, `${n}/.pip`, `${r}/package-lock.json`, `${r}/yarn.lock`, `${r}/pnpm-lock.yaml`, `${r}/node_modules/.bin`, `${r}/.git/modules`, `${r}/scripts`, `${r}/.claude`, ...(scrubPathsLatched?.canonicalClaudeDirs ?? Y(r)), `${r}/.github`, `${n}/.local/bin`, `${n}/runners`, `${n}/actions-runner`, "/tmp/inline-comments-buffer.jsonl", ...(scrubPathsLatched?.pathDirs ?? []), E, o, o && o.includes("/_actions/") ? o.slice(0, o.indexOf("/_actions/") + 9) : void 0, scrubPathsLatched?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH, `${n}/.config/gh`, `${n}/.config/glab-cli`, `${n}/.netrc`, `${n}/.ssh`, `${r}/.git/hooks`, `${r}/.git/config`, `${r}/.git/config.lock`, `${r}/.git/config.worktree`, `${r}/.git/config.worktree.lock`, `${r}/.git/commondir`, `${r}/.git/worktrees`, `${r}/.gitmodules`, `${r}/.git/info/exclude`, `${r}/.git/glab-cli`, ...C].filter(item => !!item)
    }
  };
}
function M(e) {
  return e.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}
var L;
function ye() {
  let e = r_t(),
    armed = e.length > 0;
  if (L?.armed !== armed) L = {
    armed: armed,
    names: new Set([...IQe, ...e].map(item => item.toUpperCase()))
  };
  return L.names;
}
export { Pyt, I2s, iFo, gQe, Kcn, M2s, RB, n5n, D2s, YFr, hQe, ku, XFr, $le, aFo, lFo, yai, _ai, yQe, dFo, JFr, cFo, XUt, QFr, ZFr, Hge, eHr, tHr, nHr, JUt, XWe, rHr, ss, Ycn, uFo };