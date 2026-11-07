// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { wj, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { H, Ee, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { f0s } from "B:/~BUN/root/chunk-grwykqvw.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { EH } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { r5, sN, ZD, mBt, sNs, zWn, iNs, hBt, DCo, O7i, J_t, aNs, ype, Man, KWn, AAe, qWn, T0r, I7i, YWn, e0, kp } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { ev } from "B:/~BUN/root/chunk-z31ebsm2.js";
import { Gi } from "B:/~BUN/root/chunk-1g25msn4.js";
import { UHe } from "B:/~BUN/root/chunk-x1xft50h.js";
import { zKe, Kzn, kbt, uj } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { bxo } from "B:/~BUN/root/chunk-wthaftk0.js";
import { gBs } from "B:/~BUN/root/chunk-ww0cdpg4.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var PUt = "ssh-placeholder";
function YXi(n) {
  let {
    CLAUDE_CODE_OAUTH_TOKEN: CLAUDE_CODE_OAUTH_TOKEN,
    ANTHROPIC_API_KEY: ANTHROPIC_API_KEY
  } = n;
  return !!n.ANTHROPIC_UNIX_SOCKET && !n.ANTHROPIC_AUTH_TOKEN && (CLAUDE_CODE_OAUTH_TOKEN === "ssh-placeholder" && !ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === "ssh-placeholder" && !CLAUDE_CODE_OAUTH_TOKEN);
}
var OUt = ["CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE", "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER"];
function XXi(n) {
  return {
    ...(n.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: n.subscriptionType
    }),
    ...(n.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: n.rateLimitTier
    })
  };
}
function o0s() {
  if (i.CLAUDE_CODE_SESSION_KIND !== "bg") return {
    subscriptionType: void 0,
    rateLimitTier: void 0
  };
  return {
    subscriptionType: i.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: i.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0
  };
}
import { homedir as K } from "os";
import { dirname as I, posix as S } from "path";
import { resolve as y } from "path";
function T_t() {
  if (q()) return null;
  let CLAUDE_CODE_FEDERATION_CACHE_DIR = i.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (CLAUDE_CODE_FEDERATION_CACHE_DIR) return y(CLAUDE_CODE_FEDERATION_CACHE_DIR);
  let e = EH();
  return e === null ? null : y(e, "credentials", "federation");
}
var xV = "proxy-injected";
function wDr() {
  return kp().map(item => item.sandbox?.bwrapPath).find(item => item != null);
}
function JXi() {
  return kp().map(item => item.sandbox?.socatPath).find(item => item != null);
}
function ATo() {
  let n = wDr();
  if (n) return wj(n);
  return wj("bwrap");
}
var we = /[ \t\n\v\f\r'"]/;
function ean(n) {
  let e = n.HTTP_PROXY || n.http_proxy || n.CLAUDE_CODE_HTTP_PROXY,
    r = n.HTTPS_PROXY || n.https_proxy || n.CLAUDE_CODE_HTTPS_PROXY,
    s = bxo(n);
  if (!e && !r) return {};
  let C = B(e),
    c = B(r);
  if (!c.host) c = C;
  let _ = {},
    a = (D, E) => {
      if (E && n[D] === void 0) _[D] = E;
    };
  if (a("YARN_HTTP_PROXY", e), a("YARN_HTTPS_PROXY", r), a("npm_config_proxy", e), a("npm_config_https_proxy", r), a("npm_config_noproxy", s), a("GLOBAL_AGENT_HTTP_PROXY", e), a("GLOBAL_AGENT_HTTPS_PROXY", r), a("GLOBAL_AGENT_NO_PROXY", s), a("ELECTRON_GET_USE_PROXY", "1"), a("DOCKER_HTTP_PROXY", e), a("DOCKER_HTTPS_PROXY", r), c.host) a("CLOUDSDK_PROXY_TYPE", "http"), a("CLOUDSDK_PROXY_ADDRESS", c.host), a("CLOUDSDK_PROXY_PORT", c.port), a("CLOUDSDK_PROXY_USERNAME", c.user), a("CLOUDSDK_PROXY_PASSWORD", c.pass);
  if (a("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), c.host) {
    let JAVA_TOOL_OPTIONS = n.JAVA_TOOL_OPTIONS;
    if (!JAVA_TOOL_OPTIONS?.includes("-Dhttps.proxyHost=")) {
      let E = ke(C, c, s);
      _.JAVA_TOOL_OPTIONS = JAVA_TOOL_OPTIONS ? `${JAVA_TOOL_OPTIONS} ${E}` : E;
    }
  }
  return _;
}
function B(n) {
  if (!n) return {
    host: "",
    port: "",
    user: "",
    pass: ""
  };
  try {
    let e = new URL(n);
    if (!e.hostname) return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
    return {
      host: e.hostname.startsWith("[") && e.hostname.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname,
      port: e.port || (e.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(e.username),
      pass: decodeURIComponent(e.password)
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
function ke(n, e, r) {
  let s = [],
    C = (c, _) => {
      if (_ && !we.test(_)) s.push(`-D${c}=${_}`);
    };
  if (C("http.proxyHost", n.host), C("http.proxyPort", n.port), C("https.proxyHost", e.host), C("https.proxyPort", e.port), C("http.proxyUser", n.user), C("http.proxyPassword", n.pass), C("https.proxyUser", e.user), C("https.proxyPassword", e.pass), r) C("http.nonProxyHosts", Fe(r));
  return s.push("-Djdk.http.auth.tunneling.disabledSchemes="), s.push("-Djdk.http.auth.proxying.disabledSchemes="), s.join(" ");
}
function Fe(n) {
  return n.split(/[,\s]+/).map(item => item.trim()).filter(Boolean).flatMap(item => {
    if (item.startsWith(".")) return [`*${item}`];
    return Ke(item) ?? [item];
  }).join("|");
}
function Ke(n) {
  let e = n.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!e) return;
  let r = [Number(e[1]), Number(e[2]), Number(e[3]), Number(e[4])],
    s = Number(e[5]);
  if (r.some(item => item > 255) || s < 8 || s > 24) return [n];
  let C = Math.floor(s / 8),
    c = s % 8;
  if (c === 0) return [`${r.slice(0, C).join(".")}.*`];
  let _ = 2 ** (8 - c);
  if (_ > 16) return [n];
  let a = r[C] - r[C] % _,
    D = [];
  for (let E = a; E < a + _; E++) D.push(`${[...r.slice(0, C), E].join(".")}.*`);
  return D;
}
var C_t = ["CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SOURCE", "CLAUDE_BG_ISOLATION", "CLAUDE_BG_BACKEND", "CLAUDE_CODE_SESSION_NAME", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS", "CLAUDE_CODE_RESUME_PROMPT", "CLAUDE_CODE_RESUME_SHOWS_CUT_OFF_CALLS", "CLAUDE_CODE_RESUME_REASON", "CLAUDE_CODE_RESUME_SOURCE_ALIVE", "CLAUDE_CODE_SESSION_BEGAN_AS_COPY", "CLAUDE_BG_POST_CLEAR_RESPAWN", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_BG_MEMORY_TOGGLED_OFF", "CLAUDE_BG_AUTO_MEMORY_OFF", "CLAUDE_BG_WORKSPACE_TRUSTED", "CLAUDE_BG_CARRIED_PROMPTS_SHA256", "CLAUDE_BG_GATEWAY_WITHHELD", "CLAUDE_CODE_RELAUNCH_HOME_TRUST", "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS", ...OUt];
class Y {
  scrubEnabledLatched = void 0;
  scrubSandboxAvailableLatched = void 0;
  scrubPathsLatched = void 0;
  scriptCallCounts = new Map();
  scriptCapsLatched = void 0;
  setScrubEnabledLatched(n) {
    this.scrubEnabledLatched = n;
  }
  setScrubSandboxAvailableLatched(n) {
    this.scrubSandboxAvailableLatched = n;
  }
  setScrubPathsLatched(n) {
    this.scrubPathsLatched = n;
  }
  setScriptCapsLatched(n) {
    this.scriptCapsLatched = n;
  }
  reset() {
    this.scrubEnabledLatched = void 0, this.scrubSandboxAvailableLatched = void 0, this.scrubPathsLatched = void 0, this.scriptCallCounts.clear(), this.scriptCapsLatched = void 0;
  }
}
var O = he(new Y(), n => {
  n.reset(), O7i();
});
class j {
  getAgentProxyEnv = void 0;
  getGhStandinDir = void 0;
  settingsEnvForChildren = {};
  hipaaTierNoticeGiven = !1;
}
var l = new W(() => new j());
function Cf() {
  let scrubEnabledLatched = O.scrubEnabledLatched;
  if (scrubEnabledLatched !== void 0) return scrubEnabledLatched;
  let e = Pe(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return O.setScrubEnabledLatched(e), e;
}
function xTo() {
  if (Cf()) return !0;
  if (rs(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var P = [".env", ".env.local", ".env.development", ".env.development.local", ".env.test", ".env.test.local", ".env.production", ".env.production.local"],
  allowWrite = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map(item => `/${item}`),
  M = ".";
function X(n) {
  let e = new Set();
  for (let r of [sN, Gi, r5]) try {
    e.add(`${uj(n, r)}/.claude`);
  } catch {}
  return [...e];
}
function EJ() {
  if (O.scrubSandboxAvailableLatched !== void 0) return O.scrubSandboxAvailableLatched;
  return !1;
}
async function s0s() {
  if (DCo(), !Cf()) return;
  let home = K(),
    originalCwd = Ee(),
    runnerFileCommandsDir = process.env.GITHUB_ENV ? I(process.env.GITHUB_ENV) : void 0,
    s = process.env.GITHUB_WORKSPACE;
  O.setScrubSandboxAvailableLatched(!1);
  let pathDirs = (process.env.PATH ?? "").split(":").map(item => item ? S.normalize(item).replace(/\/+$/, "") : item).filter(item => item && allowWrite.some(p => item.startsWith(`${p}/`)));
  O.setScrubPathsLatched({
    home: home,
    originalCwd: originalCwd,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: T_t() ?? void 0,
    canonicalClaudeDirs: X(originalCwd),
    runnerFileCommandsDir: runnerFileCommandsDir,
    workspace: s,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: pathDirs
  }), J();
  return;
}
function J() {
  if (O.scriptCapsLatched !== void 0) return;
  let CLAUDE_CODE_SCRIPT_CAPS = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!CLAUDE_CODE_SCRIPT_CAPS) {
    O.setScriptCapsLatched(null);
    return;
  }
  try {
    let e = ee(CLAUDE_CODE_SCRIPT_CAPS);
    if (e && typeof e === "object" && !Array.isArray(e)) {
      let r = Ro(e, (s, C) => typeof s === "number" && Number.isFinite(s) && C.trim().length > 0);
      O.setScriptCapsLatched(Object.keys(r).length > 0 ? r : null);
    } else O.setScriptCapsLatched(null);
  } catch {
    O.setScriptCapsLatched(null);
  }
}
function i0s(n) {
  if (!Cf()) return;
  if (J(), !O.scriptCapsLatched) return;
  let {
    scriptCapsLatched: scriptCapsLatched,
    scriptCallCounts: scriptCallCounts
  } = O;
  for (let [s, C] of Object.entries(scriptCapsLatched)) {
    let c = n.split(s).length - 1;
    if (c > 0) {
      let _ = (scriptCallCounts.get(s) ?? 0) + c;
      if (scriptCallCounts.set(s, _), _ > C) throw Error(`Script call limit exceeded: ${s} has been called ${_} times (cap: ${C}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
    }
  }
}
function nva(n) {
  l.of(H().host).getAgentProxyEnv = n;
}
function rva(n) {
  l.of(H().host).getGhStandinDir = n;
}
function BFe() {
  return l.of(H().host).getAgentProxyEnv?.() ?? {};
}
function a0s() {
  return l.of(H().host).getGhStandinDir?.();
}
function l0s(n) {
  l.of(H().host).settingsEnvForChildren = n;
}
function PTo(n) {
  let {
    settingsEnvForChildren: settingsEnvForChildren
  } = l.of(H().host);
  return settingsEnvForChildren[TJ(settingsEnvForChildren, n)];
}
function d0s() {
  return PTo("PATH");
}
function Bet(n) {
  let {
    settingsEnvForChildren: settingsEnvForChildren_2
  } = l.of(H().host);
  return settingsEnvForChildren_2[TJ(settingsEnvForChildren_2, n)] ?? process.env[n];
}
var Ye = "3";
function OTo() {
  return i.CLAUDE_BG_BACKEND === "daemon" && i.FORCE_COLOR === Ye;
}
function ITo() {
  if (!OTo()) return !1;
  let {
    settingsEnvForChildren: settingsEnvForChildren_3
  } = l.of(H().host);
  return !Object.hasOwn(settingsEnvForChildren_3, TJ(settingsEnvForChildren_3, "FORCE_COLOR"));
}
function TJ(n, e) {
  if (x() !== "windows" || Object.hasOwn(n, e)) return e;
  let r = e.toUpperCase();
  return Object.keys(n).find(item => item.toUpperCase() === r) ?? e;
}
function MTo(n) {
  return n.startsWith("CLAUDE_CODE_ARTIFACT") && n.endsWith("_BASE_URL");
}
function DTo(n) {
  let e = n.toUpperCase();
  return !Man(n) && AAe(n) && !I7i.has(e) && !T0r(e);
}
var G = new Set(Kzn.map(item => item.toUpperCase()));
function LTo() {
  if (!tan()) return [];
  let n = l.of(H().host);
  if (!n.hipaaTierNoticeGiven) n.hipaaTierNoticeGiven = !0, t("HIPAA: withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion");
  return aNs;
}
function tan() {
  return hs("hipaa");
}
var w = new Set(aNs.map(item => item.toUpperCase()));
function jet(n) {
  let e = n.replace(/^INPUT_/, "");
  return MTo(e) || zKe(e) || e.startsWith("OTEL_") || e === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}
function U(n, e) {
  return (n === "CLAUDE_CODE_OAUTH_TOKEN" || n === "ANTHROPIC_API_KEY") && e[n] === PUt && e.ANTHROPIC_UNIX_SOCKET !== void 0;
}
function nan() {
  let env = process.env,
    e = r => U(r, env) && !Object.keys(env).some(item => item !== r && item.toUpperCase() === r);
  return [...Kzn.filter(item => !e(item)), ...Object.keys(env).filter(item => jet(item.toUpperCase())), ...kbt(env), ...f0s(), ...gBs(), ...LTo().filter(item => !e(item)), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_MCP_SERVE_SETTINGS", "CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS", "CLAUDE_CODE_REMOTE_TOOLS_FORWARD", "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT", ...C_t];
}
var je = new Set(["BUN_GC_TIMER_INTERVAL", "BUN_GC_TIMER_DISABLE", "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS", "BUN_IDLE_GC_SECONDS"]),
  We = new Set(["MIMALLOC_PURGE_HOLES_MIN_INTERVAL", "MIMALLOC_PURGE_DELAY", "MIMALLOC_PURGE_HOLES"]);
function k(n) {
  let e = n.toUpperCase();
  return e.startsWith("BUN_JSC_") || e.startsWith("BUN_AOT_") || je.has(e) || We.has(e) || e === "CLAUDE_CODE_COUNT_GARBAGE_COLLECTIONS" || e === "CLAUDE_CODE_THREAD_CPU_ONE_IN" || e === "CLAUDE_CODE_STREAM_EVENT_HOLD_MS" || e === "CLAUDE_CODE_STREAM_EVENT_MAX_LINE_BYTES" || e === "CLAUDE_CODE_STREAM_EVENT_NO_SUBSCRIBER_HOLD_MS" || e === "CLAUDE_CODE_INCREMENTAL_REQUEST_BODY" || e === "CLAUDE_CODE_PLAIN_DELTA_FAST_PATH" || e === "CLAUDE_CODE_PLAIN_DELTA_DIRECT_WRITE" || e === "CLAUDE_CODE_PLAIN_DELTA_TAKE_AT_SOURCE" || e === "CLAUDE_CODE_STREAM_TIMER_SLACK_MS" || e === "CLAUDE_CODE_UNWATCHED_REPLY_HOLD_MS" || e === "CLAUDE_CODE_MAIN_REPLY_HOLD_MS" || e === "CLAUDE_CODE_REMOTE_STALL_CHECK_INTERVAL_MS" || e === "CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD" || e === "CLAUDE_CODE_CCR_SLOW_SKILLS_WATCH" || e === "CLAUDE_CODE_MCP_SERVE_TUNNEL_BINARY_FRAMES";
}
function es(n) {
  let e = l.of(H().host),
    r = e.getAgentProxyEnv?.() ?? {},
    s = Object.keys(r).length > 0,
    {
      settingsEnvForChildren: settingsEnvForChildren_4
    } = e,
    c = Object.keys(settingsEnvForChildren_4).length > 0,
    env_2 = process.env;
  if (c || n !== void 0) {
    env_2 = {
      ...n,
      ...process.env
    };
    for (let [o, A] of Object.entries(settingsEnvForChildren_4)) env_2[TJ(env_2, o)] = A;
  }
  let a = i.CLAUDE_CODE_REMOTE === !0,
    D = a ? ean(s ? {
      ...env_2,
      ...r
    } : env_2) : {},
    E = Object.keys(D).length > 0,
    p = xTo(),
    z = Object.keys(process.env).some(item => G.has(item.toUpperCase())) || Object.keys(process.env).some(item => jet(item.toUpperCase())) || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0,
    Q = kbt(process.env),
    Z = f0s(),
    te = gBs(),
    m = tan() && Object.keys(process.env).some(item => w.has(ype(item))),
    N = !1;
  N = C_t.some(item => process.env[item] !== void 0);
  let ne = Object.keys(process.env).some(item => /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(item)),
    re = i.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 || i.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0,
    oe = i.CLAUDE_CODE_QUESTION_EXTENDED || i.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS,
    CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES = i.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES,
    ie = i.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH || i.CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH,
    CLAUDE_CODE_SDK_READS_SESSION_STATE = i.CLAUDE_CODE_SDK_READS_SESSION_STATE,
    CLAUDE_CODE_SDK_READS_STARTUP_MARKS = i.CLAUDE_CODE_SDK_READS_STARTUP_MARKS,
    ae = ZD(),
    CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED = i.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED,
    de = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES"),
    Oe = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD"),
    De = i.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT || i.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT || i.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS || i.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT || i.CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT,
    CLAUDE_CODE_CONFIG_PROBE = i.CLAUDE_CODE_CONFIG_PROBE,
    le = i.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0,
    CLAUDE_CODE_REMOTE_MCP_CONFIG = i.CLAUDE_CODE_REMOTE_MCP_CONFIG,
    CLAUDE_CODE_MCP_APPS_HOST = i.CLAUDE_CODE_MCP_APPS_HOST,
    Se = i.CLAUDE_CODE_UPFRONT_TOOLS !== void 0,
    CLAUDE_CODE_ATTACHMENTS_BY_PATH = i.CLAUDE_CODE_ATTACHMENTS_BY_PATH,
    Re = i.CLAUDE_CODE_PROGRAM_USE_CASE_ID !== void 0,
    fe = i.CLAUDE_CODE_SLEEP_COMPACT || i.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== void 0,
    Le = i.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== void 0,
    Ue = i.CLAUDE_CODE_ARTIFACT_SHARE !== void 0,
    CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST = i.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST,
    Ie = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"),
    me = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP"),
    Ne = i.CLAUDE_CODE_WARN_DISK_FREE_GIB !== void 0 || i.CLAUDE_CODE_WARN_MEMORY_FREE_GIB !== void 0 || i.CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY,
    be = i.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0,
    ve = Object.keys(env_2).some(item => item.toUpperCase() === "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS"),
    CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD = i.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD,
    ye = ev.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0 || ev.CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS !== void 0 || ev.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT !== void 0,
    Be = i.CLAUDE_CODE_REPLY_GATE_POLICY !== void 0,
    h = !1;
  h = Object.keys(env_2).some(F);
  let b = a && Object.keys(env_2).some(k),
    Me = !1;
  if (n === void 0 && !s && !E && !p && !N && !z && !Q.length && !Z.length && !te.length && !m && !ne && !c && !re && !oe && !CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES && !ie && !CLAUDE_CODE_SDK_READS_SESSION_STATE && !CLAUDE_CODE_SDK_READS_STARTUP_MARKS && !ae && !CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED && !de && !Oe && !De && !CLAUDE_CODE_CONFIG_PROBE && !le && !CLAUDE_CODE_REMOTE_MCP_CONFIG && !CLAUDE_CODE_MCP_APPS_HOST && !Se && !CLAUDE_CODE_ATTACHMENTS_BY_PATH && !Re && !fe && !Le && !Ue && !CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST && !Ne && !Ie && !me && !be && !ve && !CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD && !ye && !Be && !h && !b && !Me) return process.env;
  let v = {
      ...r,
      ...D
    },
    d = {
      ...env_2
    };
  for (let o of Object.keys(v)) {
    let A = TJ(d, o);
    if (A !== o) delete d[A];
  }
  Object.assign(d, v);
  let $e = new Set([...nan(), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_READS_SESSION_STATE", "CLAUDE_CODE_SDK_READS_STARTUP_MARKS", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_REMOTE_MCP_CONFIG", "CLAUDE_CODE_REPLY_GATE_POLICY", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_UPFRONT_TOOLS", "CLAUDE_CODE_ATTACHMENTS_BY_PATH", "CLAUDE_CODE_PROGRAM_USE_CASE_ID", "CLAUDE_CODE_SLEEP_COMPACT", "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS", "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS", "CLAUDE_CODE_ARTIFACT_SHARE", "CLAUDE_CODE_ARTIFACT_VERSIONS", "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP", "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST", "CLAUDE_CODE_WARN_DISK_FREE_GIB", "CLAUDE_CODE_WARN_MEMORY_FREE_GIB", "CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY", "CLAUDE_CHROME_TAB_GROUP_KEY", "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS"].map(item => item.toUpperCase()));
  for (let o of Object.keys(d)) if ($e.has(o.toUpperCase()) || jet(o.toUpperCase()) || G.has(o.toUpperCase()) && !U(o, d) || m && w.has(ype(o)) && (o.includes("-") || !U(o, d))) delete d[o];
  for (let o of C_t) delete d[o];
  if (ITo()) delete d[TJ(d, "FORCE_COLOR")];
  for (let o of Object.keys(d)) if (o.startsWith("OTEL_")) delete d[o];
  if (delete d.CLAUDE_CODE_OTEL_DIAG_STDERR, delete d.CLAUDE_CODE_PLUGIN_ATTRIBUTION, delete d.CLAUDE_CODE_SKILL_ATTRIBUTION, h) {
    for (let o of Object.keys(d)) if (F(o)) delete d[o];
  }
  if (b) {
    for (let o of Object.keys(d)) if (k(o)) delete d[o];
  }
  if (!p) return d;
  let Ge = Ve(),
    xe = hBt().length > 0;
  for (let [o, A] of Object.entries(d)) {
    if (A === xV && Object.hasOwn(r, o)) continue;
    if (U(o, d)) continue;
    if (Ge.has(ype(o)) || qWn.test(o) || YWn(o) || xe && DTo(o)) {
      delete d[o];
      continue;
    }
    if (A === void 0 || Man(o)) continue;
    let u = typeof A === "string" ? A : String(A);
    if (mBt(o)) {
      let R = zWn(o, u);
      if (R.value !== u) d[o] = R.value;
      if (R.cut) {
        let f = iNs(o, R.value);
        if (f !== void 0 && !sNs(d, f.name)) d[f.name] = f.value;
      }
      continue;
    }
    let T = KWn(o, u);
    if (T === void 0) {
      if (e0(u)) delete d[o];
    } else if (T !== u) if (T === "") delete d[o];else d[o] = T;
  }
  return d;
}
function Fjn() {
  let CLAUDE_CODE_MCP_ALLOWLIST_ENV = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Pe(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) return !0;
  if (rs(CLAUDE_CODE_MCP_ALLOWLIST_ENV)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function Hjn(n) {
  let e = x() === "windows",
    r = Object.keys(n).filter(item => item === "AWS_BEARER_TOKEN_BEDROCK" || e && item.toUpperCase() === "AWS_BEARER_TOKEN_BEDROCK");
  if (r.some(item => n[item] === "")) for (let s of r) delete n[s];
}
function c0s() {
  let scrubPathsLatched = O.scrubPathsLatched,
    e = scrubPathsLatched?.home ?? K(),
    r = scrubPathsLatched?.originalCwd ?? Ee(),
    s = scrubPathsLatched?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    C = scrubPathsLatched?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? I(process.env.GITHUB_ENV) : void 0),
    c = scrubPathsLatched?.workspace ?? process.env.GITHUB_WORKSPACE,
    _ = c && S.resolve(c) !== S.resolve(r) ? [`${c}/.git/hooks`, `${c}/.git/config`, `${c}/.git/config.lock`, `${c}/.git/config.worktree`, `${c}/.git/config.worktree.lock`, `${c}/.git/commondir`, `${c}/.git/worktrees`, `${c}/.git/modules`, `${c}/.git/info/exclude`, `${c}/.git/glab-cli`, `${c}/.gitmodules`, `${c}/.github`, `${c}/.claude`] : [];
  return {
    filesystem: {
      allowWrite: allowWrite,
      denyRead: ["/run/docker.sock", "/run/containerd/containerd.sock", "/run/podman/podman.sock", "/run/buildkit/buildkitd.sock", "/run/dbus", "/run/user", scrubPathsLatched?.federationCacheDir ?? T_t()].filter(item => !!item),
      denyWrite: [`${e}/.bash_profile`, `${e}/.bashrc`, `${e}/.bash_aliases`, `${e}/.bash_login`, `${e}/.bash_logout`, `${e}/.profile`, `${e}/.zshrc`, `${e}/.zprofile`, `${e}/.zshenv`, `${e}/.zlogin`, `${e}/.zlogout`, `${e}/.claude`, `${e}/.claude.json`, scrubPathsLatched?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR, `${e}/.gitconfig`, `${e}/.config/git`, `${e}/.bunfig.toml`, `${r}/bunfig.toml`, `${r}/package.json`, ...P.map(item => `${r}/${item}`), `${e}/.npmrc`, `${r}/.npmrc`, `${e}/.yarnrc`, `${e}/.yarnrc.yml`, `${r}/.yarnrc`, `${r}/.yarnrc.yml`, `${e}/.config/pip`, `${e}/.pip`, `${r}/package-lock.json`, `${r}/yarn.lock`, `${r}/pnpm-lock.yaml`, `${r}/node_modules/.bin`, `${r}/.git/modules`, `${r}/scripts`, `${r}/.claude`, ...(scrubPathsLatched?.canonicalClaudeDirs ?? X(r)), `${r}/.github`, `${e}/.local/bin`, `${e}/runners`, `${e}/actions-runner`, "/tmp/inline-comments-buffer.jsonl", ...(scrubPathsLatched?.pathDirs ?? []), C, s, s && s.includes("/_actions/") ? s.slice(0, s.indexOf("/_actions/") + 9) : void 0, scrubPathsLatched?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH, `${e}/.config/gh`, `${e}/.config/glab-cli`, `${e}/.netrc`, `${e}/.ssh`, `${r}/.git/hooks`, `${r}/.git/config`, `${r}/.git/config.lock`, `${r}/.git/config.worktree`, `${r}/.git/config.worktree.lock`, `${r}/.git/commondir`, `${r}/.git/worktrees`, `${r}/.gitmodules`, `${r}/.git/info/exclude`, `${r}/.git/glab-cli`, ..._].filter(item => !!item)
    }
  };
}
function F(n) {
  return n.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}
var g;
function Ve() {
  let n = hBt(),
    armed = n.length > 0;
  if (g?.armed !== armed) g = {
    armed: armed,
    names: new Set([...J_t, ...n].map(item => item.toUpperCase()))
  };
  return g.names;
}
export { PUt, YXi, OUt, XXi, o0s, T_t, xV, wDr, JXi, ATo, ean, C_t, Cf, xTo, EJ, s0s, i0s, nva, rva, BFe, a0s, l0s, PTo, d0s, Bet, OTo, ITo, TJ, MTo, DTo, LTo, tan, jet, nan, es, Fjn, Hjn, c0s };