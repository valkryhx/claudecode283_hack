// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Xr, vKn } from "B:/~BUN/root/chunk-game8aqv.js";
import { fV, Bfe, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, oi } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { jqe, id, EN } from "B:/~BUN/root/chunk-65j2302z.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Yi, _i, vp, hM, lZi, dZi, cZi, cln, RLr, XRo, Kie, Vzn, ALr, zKe, zV, xLr, Ate, mln, SHs, qzn, MLr, Sbt, wHs, wbt, kHs, QBt, uZi, Pw } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { KU } from "B:/~BUN/root/chunk-pwj77283.js";
import { pr } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { ir, $o, Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { OCo, MCo, ZD, $Wn, rNs, oNs, A7i, x7i, X7i, jCo, un, RNs, be, Uie } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { oae, tdn, _5, tBs, yxo, wxo, N1t, C_, J4 } from "B:/~BUN/root/chunk-wthaftk0.js";
import { OUt, l0s, OTo, TJ, jet } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { nKi, Rb } from "B:/~BUN/root/chunk-1zzrbtzr.js";
import { CA } from "B:/~BUN/root/chunk-ht2sp6s6.js";
import { Da } from "B:/~BUN/root/chunk-tc6a3318.js";
import { dKi, $y } from "B:/~BUN/root/chunk-vy3btdd1.js";
import { cqi, fqi, pqi } from "B:/~BUN/root/chunk-sjvfdrzm.js";
import { $t } from "B:/~BUN/root/chunk-zpne314q.js";
import { BNr, o, I, C, u, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { fG } from "B:/~BUN/root/chunk-4hj5k2m3.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
function K(e, n) {
  return cZi.test(e) ? "invalid-name" : typeof n !== "string" ? "non-string-value" : n.includes("\x00") ? "nul-in-value" : void 0;
}
var Unn = {
  "invalid-name": "it isn't a valid environment variable name",
  "non-string-value": "its value isn't a string",
  "nul-in-value": "its value contains a NUL character"
};
function QRr(kept) {
  let n = Object.entries(kept),
    dropped = n.flatMap(([name, D]) => {
      let problem = K(name, D);
      return problem === void 0 ? [] : [{
        name: name,
        problem: problem
      }];
    });
  if (dropped.length === 0) return {
    kept: kept,
    dropped: dropped
  };
  let r = new Set(dropped.map(item => item.name));
  return {
    kept: Object.fromEntries(n.filter(([_]) => !r.has(_))),
    dropped: dropped
  };
}
var Z = 200;
function Ae(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function N(e) {
  return oi(e).slice(1, -1).replace(/[^\x20-\x7e]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function qht(e) {
  let n = e.indexOf("="),
    E = n === -1 ? e : e.slice(0, n),
    r = E.length > Z,
    _ = `"${N(r ? E.slice(0, Z) : E)}"${r ? "\u2026" : ""}`;
  return n === -1 ? _ : `${_} (then '=' and ${Ae(e.length - n - 1)}, not shown)`;
}
var q = null;
function Q(e) {
  q = e;
}
function QVi(e, n) {
  return q?.(e, n) ?? !1;
}
var ee = () => o().trim().min(1).max(100).refine(e => $t(e) === e),
  le = p(() => u({
    lead: ee(),
    worker: ee(),
    effort: B(_i).optional(),
    coordinator: I().default(!0),
    label: o().trim().min(1).max(60).default("Mix"),
    description: o().trim().min(1).max(200).optional(),
    prompt: o().trim().min(1).max(4000).optional(),
    whenToUse: o().trim().max(4000).optional(),
    removePromptStrings: C(o().max(2000).refine(e => e.trim() !== "")).max(20).optional()
  })),
  Re = p(() => le().omit({
    coordinator: !0
  }).extend({
    lead: o().trim().min(1).max(100),
    label: o().trim().min(1).max(60),
    description: o().trim().max(200).default("")
  }));
function Le(e) {
  return i.CLAUDE_CODE_SUBAGENT_MODEL === e.worker && i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE;
}
function qTs() {
  let e = pr(),
    n = e.clientDataUrl.document?.entries.find(({
      clientData: clientData
    }) => clientData.tengu_zesty_horizon !== void 0),
    E = e.modelMix?.mix;
  if (n === void 0 || (E === void 0 || !Le(E)) && (i.CLAUDE_CODE_SUBAGENT_MODEL || i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE)) return;
  let r = Re().safeParse(n.clientData.tengu_zesty_horizon),
    _ = !r.success ? BNr(r.error) : !n.pattern.test($t(r.data.lead)) ? "its lead does not match its entry's model_pattern" : void 0;
  if (!r.success || _ !== void 0) {
    t(`tengu_zesty_horizon ignored: ${_}`, {
      level: "warn"
    }), c("document_recipe", "recipe_invalid");
    return;
  }
  return {
    ...r.data,
    coordinator: !1
  };
}
function PFt() {
  return pr().modelMix?.mix;
}
function ZRr(mix) {
  let n = pr(),
    replaced = n.modelMix?.replaced ?? {
      subagentModel: i.CLAUDE_CODE_SUBAGENT_MODEL,
      subagentModelForce: i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE,
      coordinator: Da()
    };
  return n.modelMix = {
    mix: mix,
    replaced: replaced
  }, i.set("CLAUDE_CODE_SUBAGENT_MODEL", mix.worker), i.set("CLAUDE_CODE_SUBAGENT_MODEL_FORCE", !0), g("document_recipe"), replaced.coordinator;
}
function W() {}
function ZVi() {
  let e = pr(),
    modelMix = e.modelMix;
  if (modelMix === void 0) return;
  e.modelMix = void 0;
  let {
    subagentModel: subagentModel,
    subagentModelForce: subagentModelForce
  } = modelMix.replaced;
  if (i.CLAUDE_CODE_SUBAGENT_MODEL === modelMix.mix.worker) if (subagentModel !== void 0) i.set("CLAUDE_CODE_SUBAGENT_MODEL", subagentModel);else i.unset("CLAUDE_CODE_SUBAGENT_MODEL");
  if (subagentModelForce) i.set("CLAUDE_CODE_SUBAGENT_MODEL_FORCE", !0);else i.unset("CLAUDE_CODE_SUBAGENT_MODEL_FORCE");
  return modelMix;
}
var ce = ["CLAUDE_CODE_REMOTE", "CLAUDE_CODE_IS_COWORK"];
function bQe(e) {
  return ce.some(item => e ? Pe(e[item]) : i[item]);
}
var Te = [],
  v = new Set([...wbt, "CLAUDE_CODE_HOST_GATEWAY_LINEAGE", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_CODE_HOST_AUTH_ENV_VAR", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_BG_SOCKET_TOKENS_PATH", ...Ate, "CLAUDE_CODE_MESSAGING_SOCKET", "CLAUDE_CODE_MESSAGING_TOKEN", "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION", "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT", "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT", "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_DISABLE_MOUNTED_DRIVE_RM_PROMPT", "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS", "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY", "CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK", "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE", "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC", "CLAUDE_CODE_MANAGED_SETTINGS_PATH", "CLAUDE_CODE_EVAL_CONFINED", "CLAUDE_CODE_TELEPORT_MOVE", "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN", "CLAUDE_CODE_TUI_TRIAL", "CLAUDE_RELAUNCH_SESSION_ADD_DIRS", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_BG_GATEWAY_WITHHELD", "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", "CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_SESSIONS_OAUTH_TOKEN", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_CODE_SANDBOXED", "CLAUDE_BG_WORKSPACE_TRUSTED", "CLAUDE_BG_CARRIED_PROMPTS_SHA256", "CLAUDE_CODE_RELAUNCH_HOME_TRUST", "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS", "CLAUDE_BRIDGE_REATTACH_SESSION", "CLAUDE_CODE_IGNORE_PERSISTED_TRUST", "CLAUDE_CODE_PROJECT_DIR_NAME", "CLAUDE_PTY_HOST_EXEC", "CLAUDE_BG_PTY_AUTH", "CLAUDE_BG_RV_AUTH", "CLAUDE_BG_CLAIM_AUTH", "CLAUDE_BG_RENDEZVOUS_SOCK", "CLAUDE_BG_BACKEND", "CLAUDE_BG_TCC_DISCLAIMED", "CLAUDE_PTY_HOST_NO_STABLE_PATH", "CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS", "CLAUDE_BG_SILENT_PEER_TIMEOUT_MS", "CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN"]),
  pe = new Set(["CLAUDE_CODE_REMOTE", "CLAUDE_CODE_ATTRIBUTION_PROJECT", "CLAUDE_CODE_REMOTE_HERMETIC_MODE", "CLAUDE_CODE_HOSTED_DESKTOP", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE", "CLAUDE_RUNNER_ACTIVITY_FD", "CLAUDE_RUNNER_UPDATE_BIN", "CLAUDE_RUNNER_OFFERS_NEW_MACHINE", "CLAUDE_CODE_WARN_DISK_FREE_GIB", "CLAUDE_CODE_WARN_MEMORY_FREE_GIB", "CCR_BYOC_RESOURCE_WATCHDOG_TELEMETRY", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_MCP_CARRIER", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256", "CLAUDE_CODE_APPEND_PROMPT_HEAD", "CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID", "CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID", "CLAUDE_CODE_BRIDGE_SOURCE_DIR", "VOICE_STREAM_BASE_URL", "CLAUDE_CODE_POLL_EVENTS", "CLAUDE_CODE_POLL_EVENT_DECLARATIONS", "CLAUDE_CODE_REPLY_GATE_POLICY", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_CONTAINER_ID", "CLAUDE_CODE_SESSION_ID", "CLAUDE_CODE_SYNC_SESSION_REFS", "CLAUDE_CODE_SKILL_PROPOSALS", "CLAUDE_CODE_REMOTE_SESSION_ID", "CLAUDE_CODE_REMOTE_MCP_CONFIG", "CLAUDE_CODE_HOVER_REST", "CCR_AGENT_PROXY_ENABLED", "CCR_AGENT_PROXY_RELAY_MODE", "CCR_AGENT_PROXY_INCLUDE_HOSTS", "CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED", "CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED", "CCR_AGENT_PROXY_MAX_BUSY_TUNNELS", "CCR_AGENT_PROXY_JAVA_STORE_DIRECT_DISABLED", "CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY", "CCR_AGENT_PROXY_CA_WATCH_ENABLED", "CCR_AGENT_PROXY_NSS_RECORDS_DISABLED", "CCR_AGENT_PROXY_CA_CERT_B64", "CCR_AGENT_PROXY_FRAME_HOSTS", "SELF_HOSTED_RUNNER_AGENT_PROXY_URL", "CCR_AGENT_PROXY_STANDALONE_URL", "AGENT_PROXY_URL", "AGENT_PROXY_AUTH_TOKEN", "CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN", "CLAUDE_CODE_MCP_SERVE_SETTINGS", "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT", "CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT", "CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION", "CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS", "CLAUDE_CODE_MCP_SERVE_TUNNEL_BINARY_FRAMES", ...[], "CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG", "CLAUDE_CODE_AGENT_PROXY_GH_SHIM", "CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS", "SESSION_INGRESS_URL", "CLAUDE_CODE_REMOTE_SDK_URL", "CCR_SESSION_PROFILE", "CLAUDE_CODE_REMOTE_SESSION_ORIGIN", "CLAUDE_CODE_DISABLE_WORKING_SYNC_WATCH", "CLAUDE_CODE_WORKER_EPOCH", "CLAUDE_CODE_DISABLE_WORKING_SYNC", ...[], "CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH", "CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT", "CLAUDE_CODE_CCR_SKIP_HYDRATE_ON_CURRENT_TIP", "CLAUDE_CODE_CCR_WORKER_SOCKET", "CLAUDE_CODE_CCR_OWN_CONNECTION_POOL", "CLAUDE_CODE_CCR_EARLY_PLUGINS_SYNC", "CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC", "CLAUDE_CODE_CCR_EARLY_SYNC_AFTER_SETTINGS_REFUSAL", "CLAUDE_CODE_SYNC_REUSE_WITHIN_MS", "CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_CONCURRENCY", "CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN", "CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD", "CLAUDE_CODE_CCR_SLOW_SKILLS_WATCH", "CLAUDE_CODE_MCP_REGISTRY_FETCH_AT_STARTUP", "CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT", "CLAUDE_CODE_CHROME_LATE_MCP_SERVER", "CLAUDE_CODE_MCP_SKIP_UNCHANGED_RELIST", "CLAUDE_CODE_GROWTHBOOK_KICK_FROM_INIT", "CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE", "CLAUDE_CODE_SKIP_MCP_DEBUG_LOG_FILES", "CLAUDE_CODE_MCP_NO_REDIAL_AFTER_POLICY_REFUSAL", "CLAUDE_CODE_SLEEP_COMPACT", "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS", "CLAUDE_CODE_CCR_SKIP_FRESH_MIGRATIONS", "CLAUDE_CODE_ATTACHMENTS_IN_USER_DATA", "CLAUDE_CODE_MANAGED_CONFIG_PREFETCH", "CLAUDE_CODE_CONFIG_WATCH_EVENTS", "CLAUDE_CODE_SPARE_KEEPS_BOOT_SESSION_ID", "CLAUDE_CODE_FLAG_FETCH_WAIT_MS", "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF", "CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS", "CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS", "CLAUDE_CODE_TRANSCRIPT_SLIM_TOOL_RESULTS", "CLAUDE_CODE_TRANSCRIPT_TAIL_LOAD", "CLAUDE_CODE_DISABLE_STOP_OF_HELD_MESSAGES", "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS", "CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP", "CLAUDE_CODE_PLAIN_DELTA_FAST_PATH", "CLAUDE_CODE_PLAIN_DELTA_DIRECT_WRITE", "CLAUDE_CODE_PLAIN_DELTA_TAKE_AT_SOURCE", "CLAUDE_CODE_STREAM_TIMER_SLACK_MS", "CLAUDE_CODE_UNWATCHED_REPLY_HOLD_MS", "CLAUDE_CODE_MAIN_REPLY_HOLD_MS", "CLAUDE_CODE_REMOTE_STALL_CHECK_INTERVAL_MS", "CLAUDE_CODE_STREAM_EVENT_HOLD_MS", "CLAUDE_CODE_STREAM_EVENT_MAX_LINE_BYTES", "CLAUDE_CODE_STREAM_EVENT_NO_SUBSCRIBER_HOLD_MS", "CLAUDE_CODE_DISABLE_HOOK_FORWARDING", "CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING", "CLAUDE_CODE_DISABLE_TURN_HANDOFF", "CLAUDE_CODE_DISABLE_HELD_MESSAGE_RECOGNITION", "CLAUDE_CODE_RESTRICTED", "CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG", "CLAUDE_CODE_PERSONAL_CONFIG_FIX", "CLAUDE_CODE_PERSONAL_HOOKS_OFF"]),
  ge = new Set(["CLAUDE_REMOTE_WORKFLOW_SCRIPT", "CLAUDE_REMOTE_WORKFLOW_ARGS", "CLAUDE_WORKFLOW_NAME_ONLY"]),
  ue = new Set(["CLAUDE_CODE_ENTRYPOINT", "CLAUDE_CODE_PROGRAM_USE_CASE_ID", "CLAUDE_CODE_PROGRAM_USE_CASE_STAMPED", "CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS", "CLAUDE_CODE_HOST_SESSION_ID", "CLAUDE_CODE_HOST_WORKTREE", "CLAUDE_CODE_HOST_WORKTREE_FENCE", "CLAUDE_CODE_HOST_SHORT_TEMP_DIRS", "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST", "CLAUDE_CODE_IS_COWORK", "CLAUDE_CODE_COWORK_FRAME_ARTIFACTS", "CLAUDE_CODE_HOST_SCHEDULED_RUN", "CLAUDE_CODE_ARTIFACT_SHARE", "CLAUDE_CODE_ARTIFACT_VERSIONS", "CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP", "CLAUDE_CODE_COWORK_PLUGIN_SKILL", "CLAUDE_CODE_CCR_SURFACE", "CLAUDE_CODE_SESSION_ORIGIN", "CLAUDE_CODE_SESSION_BEGAN_AS_COPY", "CLAUDE_CODE_WITTY_DEWDROP", "CLAUDE_CODE_FIZZY_GROVE", "CLAUDE_CODE_DEEP_TWILIGHT", "CLAUDE_CODE_CCR_EVENT_FLUSH_POLICY", "CLAUDE_CODE_DISABLE_RESUME_LOAD_GOODBYE_SKIP", "CLAUDE_CODE_DISABLE_TRANSCRIPT_READ_AHEAD", "SYSTEM_REMINDER_MEMORY_CONTEXT", "CLAUDE_CODE_MEMORY_CONTEXT_NO_WAIT", "CLAUDE_CODE_MEMORY_SUBAGENT_APPEND", "CLAUDE_CODE_POST_TURN_MEMORY", "CLAUDE_CODE_POST_TURN_MEMORY_CONFIG", "CLAUDE_CODE_POST_TURN_MEMORY_SYNC", "CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS", "CLAUDE_CODE_UPFRONT_TOOLS", ...Te, "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_ATTACHMENTS_BY_PATH", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_HAS_SESSIONS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_READS_SESSION_STATE", "CLAUDE_CODE_SDK_READS_STARTUP_MARKS", "CLAUDE_CODE_EMIT_USER_PROMPT_SUBMIT_HOOK_EVENTS", "CLAUDE_CHROME_PAIRED_DEVICE_ID", "CLAUDE_CHROME_TAB_GROUP_KEY", jqe, "CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES", "CLAUDE_CODE_DESKTOP_WORKFLOW_LIMIT_WAIT", "CLAUDE_CODE_SANDBOXED", "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS", "CLAUDE_CODE_TOOL_USE_ID", "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_RUNNER_ALIVE_EVERY_MS"]),
  Ue = new Set(["CLAUDE_STAGE_FILE_ROOT", "CLAUDE_CODE_DIFF_COPY_ROOT", "CLAUDE_CODE_FOUND_REPOSITORY_GIT", "CLAUDE_CODE_ULTRAREVIEW_LAUNCH_RECORD"]),
  m = new Map([["CLAUDE_CHROME_CLASSIFIER_FLOOR", "1"], ["CLAUDE_CHROME_PERMISSION_MODE", "ask"], ["CLAUDE_CODE_ENABLE_CFC", "0"]]);
function w(e, n) {
  switch (e) {
    case "CLAUDE_CHROME_CLASSIFIER_FLOOR":
      return Pe(n);
    case "CLAUDE_CHROME_PERMISSION_MODE":
      return n === "ask";
    case "CLAUDE_CODE_ENABLE_CFC":
      return rs(n);
    default:
      return !1;
  }
}
var Ne = "CLAUDE_CODE_DISABLE_DIR_";
function k(e, n) {
  let E = e.toUpperCase();
  return pe.has(E) || E.startsWith(Ne) || E === "DISABLE_COMPACT" && !Pe(n) || E === "CLAUDE_CODE_EXTRA_BODY" && Object.hasOwn(Object(et(n, !1)), "program_use_case_id") || E === "ANTHROPIC_CUSTOM_HEADERS" && (n ?? "").split(/\r?\n/).some(item => tt(item, ":").trim().toLowerCase() === "anthropic-use-case-id") || ge.has(E) || ue.has(E) || Ue.has(E) || m.has(E) && bQe() && !w(E, n) || !1 || E === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD" || !1;
}
function XHn(e, n) {
  return v.has(e.toUpperCase()) || k(e, n);
}
var Ie = new Set(["ANTHROPIC_UNIX_SOCKET", "ANTHROPIC_BASE_URL", "ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN", ...zV.filter(item => item.startsWith("CLAUDE_CODE_ARTIFACT") || zKe(item))]);
function ne(e) {
  if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) return e || {};
  let n = {};
  for (let [E, r] of Object.entries(e)) if (!Ie.has(E.toUpperCase())) n[E] = r;
  return n;
}
var M = Object.freeze({
  coworkCloud: !1,
  managedByHost: !1,
  managedByHostFlag: !1,
  desktopHost: !1,
  hostOrchestrated: !1,
  storedLoginPinned: !1,
  hybridConnection: !1
});
function y() {
  let managedByHostFlag = Pe(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
    desktopHost = id(),
    CLAUDE_CODE_ENVIRONMENT_KIND = process.env.CLAUDE_CODE_ENVIRONMENT_KIND;
  return {
    coworkCloud: vp(),
    managedByHost: managedByHostFlag || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR,
    managedByHostFlag: managedByHostFlag,
    desktopHost: desktopHost,
    hostOrchestrated: desktopHost || CLAUDE_CODE_ENVIRONMENT_KIND === "byoc",
    storedLoginPinned: ZD(),
    hybridConnection: Ce()
  };
}
function Ce() {
  return !1;
}
var he = new Set(["policySettings", "projectSettings", "localSettings"]),
  ve = [],
  me = [],
  ae = [],
  Qyo = new Set([CA, "CLAUDE_CODE_CUSTOM_OAUTH_URL", "CLAUDE_CODE_DISABLE_SUBAGENT_HANDBACK", "CLAUDE_CODE_SYNC_SKILLS", "CLAUDE_CODE_SYNC_PLUGINS", "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC", "CLAUDE_CODE_CCR_SURFACE", "CLAUDE_CODE_INCREMENTAL_REQUEST_BODY", "CLAUDE_CODE_GZIP_REQUEST_BODY_BLOCKS", "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS", "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES", "CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL", "CLAUDE_CODE_DISABLE_PROACTIVITY", "CLAUDE_CODE_DISABLE_ATTACHMENTS", "CLAUDE_CODE_TETHER_LIVE", "CLAUDE_CODE_PROGRAM_USE_CASE_ID", "CLAUDE_CODE_PROGRAM_USE_CASE_STAMPED", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT", "CLAUDE_CODE_BRIDGE_CHILD_CLI_ENTRYPOINT", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_COORDINATOR_MODE", "CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS", "CLAUDE_CODE_UPFRONT_TOOLS", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES", "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT", "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT", "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT", "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT", "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT", "CLAUDE_CODE_SANDBOXED", "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS", "CLAUDE_CODE_TOOL_USE_ID", "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO", "CLAUDE_CODE_DISABLE_WEB_FETCH", "CLAUDE_CODE_DISABLE_RESPONSE_COMPARISON", "CLAUDE_CODE_DISABLE_MCP_TASKS", "CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_DISABLE_ULTRATHINK", "CLAUDE_CODE_DISABLE_FILE_MENTIONS", "CCR_SESSION_PROFILE", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS", "CLAUDE_CODE_MCP_PREWAIT_SERVERS", "CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS", "CLAUDE_CODE_SORTED_OTTER", "CLAUDE_CODE_SKILL_PROPOSALS", "CLAUDE_CODE_PLUGIN_CACHE_DIR", "CLAUDE_CODE_PLUGIN_SEED_DIR", "CLAUDE_CODE_PLUGIN_DIRS", "CLAUDE_CODE_PLUGIN_DIR_WATCH", "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_MODEL_CATALOG_URL", "CLAUDE_CODE_MODEL_CATALOG", "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_ALLOW_OTHER_MODELS", "CLAUDE_CODE_REMOVE_PROMPT_STRINGS", ...OUt, "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", ...xLr, "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN", "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE", "CLAUDE_CODE_NANKEEN_KESTREL", "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT", "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT", "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_IGNORE_PERSISTED_TRUST", "CLAUDE_CODE_DISABLE_MOUNTED_DRIVE_RM_PROMPT", "CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS", "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY", "CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK", "CLAUDE_CODE_FEDERATION_CACHE_DIR", "ANTHROPIC_CONFIG_DIR", "XDG_CONFIG_HOME", "HOME", "APPDATA", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "PROGRAMDATA", "ALLUSERSPROFILE", "SYSTEMROOT", "WINDIR", "COMSPEC", "SYSTEMDRIVE", "PROGRAMFILES", "PROGRAMFILES(X86)", "PROGRAMW6432", "LOCALAPPDATA", "PATHEXT", "COMMONPROGRAMFILES", "COMMONPROGRAMFILES(X86)", "COMMONPROGRAMW6432", "PSMODULEPATH", "HOMESHARE", "ONEDRIVE", "ONEDRIVECONSUMER", "ONEDRIVECOMMERCIAL", "CDPATH", "PWD", "XDG_DATA_HOME", "XDG_CACHE_HOME", "XDG_STATE_HOME", "CLAUDE_CODE_SAFE_MODE", "CLAUDE_CODE_SIMPLE", "CLAUDE_CODE_HARBOR_KITE", "CLAUDE_CODE_HARBOR_KITE_CLOUD", "CLAUDE_CODE_HARBOR_KITE_PACING_OFF", "CLAUDE_CODE_SILENT_TURN_REMINDER", "CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS", "CLAUDE_CODE_SILENT_TURN_REMINDER_SECONDS", "CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT", "CLAUDE_CODE_MODEL_CAPABILITIES", "CLAUDE_CODE_ARTIFACT_ROOM", "CLAUDE_CODE_BASH_EDIT_DIFF", "CLAUDE_CODE_FORWARD_USER_INTENT", "CLAUDE_CODE_WHIMSICAL_ELEPHANT", "CLAUDE_CODE_CRYPTIC_HORIZON", "CLAUDE_CODE_PARSED_WILLOW", "CLAUDE_CODE_DAPPER_CUPCAKE", "CLAUDE_CODE_DEEP_TWILIGHT", "CLAUDE_CODE_ARTIFACT_PRESENCE", "CLAUDE_CODE_ARTIFACT_OPEN_ACTION", "CLAUDE_CODE_ARTIFACT_REPL", "CLAUDE_CODE_RESUME_CACHE_WARM", "CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR", "USER_TYPE", "CLAUDE_CODE_MESSAGING_SOCKET", "CLAUDE_CODE_MESSAGING_TOKEN", "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION", "CLAUDE_CODE_MANAGED_SETTINGS_PATH", "CLAUDE_CODE_TOASTY_THIMBLE", "CLAUDE_CODE_GENTLE_PARASOL", "CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT", "CLAUDE_CODE_CURRIED_TRINKET", "CLAUDE_CODE_LEGACY_BUNDLE", "CCR_ENABLE_BUNDLE", "CCR_FORCE_BUNDLE", ...ae.flatMap(item => item.names), "GITHUB_ACTIONS", "RUNNER_ENVIRONMENT", "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB", "ENABLE_BETA_TRACING_DETAILED", "BETA_TRACING_ENDPOINT", "OTEL_LOG_RAW_API_BODIES", ...Vzn, "CLAUDE_PTY_RECORD", "CLAUDE_CODE_DEBUG_LOGS_DIR", "CLAUDE_CODE_DIAGNOSTICS_FILE", "CLAUDE_CODE_PERFETTO_TRACE", "CLAUDE_CODE_FRAME_TIMING_LOG", "CLAUDE_CODE_REMOTE_MEMORY_DIR", "CLAUDE_COWORK_MEMORY_PATH_OVERRIDE", "AUTOMODE_DECISION_LOG", "CLAUDE_CONFIG_DIR", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_TMPDIR", "CLAUDE_TMPDIR", "TMPDIR", "TMP", "TEMP", "XDG_RUNTIME_DIR", "CLAUDE_JOB_DIR", "CLAUDE_CODE_DISABLE_BG_STABLE_PATH", "CLAUDE_CODE_NATIVE_APP_BUNDLE", "CLAUDE_CODE_REMOTE_TOOLS_FORWARD", "CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS", "CLAUDE_AFK_TIMEOUT_MS", "CLAUDE_AFK_COUNTDOWN_MS", "CLAUDE_AX_SCREEN_READER", "INK_SCREEN_READER", "CLAUDE_CHROME_CLASSIFIER_FLOOR", "CLAUDE_CHROME_PERMISSION_MODE", "CLAUDE_CODE_ENABLE_CFC", "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL", hM, lZi, dZi, ...ve]),
  Me = ["CLAUDE_AX_", ...ae.flatMap(item => item.prefixes), ...me];
function Zyo(e) {
  let n = e.toUpperCase();
  return Qyo.has(n) || Me.some(item => n.startsWith(item));
}
function te(e, n, E, r, _) {
  if (!e || !Kie(n)) return e;
  let D = !0,
    s;
  for (let O of Object.keys(e)) {
    if (!Zyo(O) || ALr(O, e[O], r) || kHs.has(O) && Pe(e[O]) || Se(O.toUpperCase(), e[O])) continue;
    if (s ??= {
      ...e
    }, delete s[O], E?.has(O) === !1) {
      E.add(O);
      let d = n === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json",
        A = m.get(O.toUpperCase());
      t(A !== void 0 ? `${O} in ${d} is ignored: a project's settings can only set it to "${A}". Set any other value in ~/.claude/settings.json or managed settings; in a remote or Cowork session, only in the environment Claude Code is started with.` : XHn(O, e[O]) ? `${O} in ${d} is ignored: no settings file can set this key, only the environment Claude Code is started with or Claude Code itself.` : O.toUpperCase() === "CLAUDE_CODE_MODEL_CATALOG" ? `${O} in ${d} is ignored: a project's settings can only turn the model catalog off ("off"). Set any other value in ~/.claude/settings.json or managed settings.` : `${O} in ${d} is ignored \u2014 project-scoped settings can't set this key. Set it in ~/.claude/settings.json or managed settings instead.`, {
        level: "warn"
      });
    }
  }
  return s ?? e;
}
var ye = {
  ...Unn,
  "non-string-value": "its value isn't a string, a number or a boolean"
};
function F(e, n, E) {
  if (!e) return e;
  let r;
  for (let [_, D] of Object.entries(e)) {
    let s = D,
      O = typeof s === "string" ? s : typeof s === "number" || typeof s === "boolean" ? String(s) : void 0,
      d = K(_, O);
    if (d === void 0) {
      if (O !== void 0 && O !== s) r ??= {
        ...e
      }, r[_] = O;
      continue;
    }
    r ??= {
      ...e
    }, delete r[_];
    let A = ye[d],
      S = qht(_),
      l = `${n}:${A}:${S}`;
    if (E !== void 0 && !E.has(l)) E.add(l), t(`Env key ${S} from ${n} is ignored: ${A}.`, {
      level: "warn"
    });
  }
  return r ?? e;
}
var Fe = new Set(["CLAUDE_CODE_TRANSCRIPT_LOCAL_GC"]);
function Ge(e, n, E) {
  return E === "policySettings" && Fe.has(e.toUpperCase()) && rs(n);
}
var He = new Set(["CLAUDE_CODE_ATTRIBUTION_HEADER"]);
function Be(e, n, E) {
  return E === "policySettings" && He.has(e.toUpperCase()) && rs(n) && EN() && vKn(Xr()) && rs(Pw()?.env?.[e]);
}
function G(e, n, E, r = !1) {
  if (e === void 0 || e.has(n)) return;
  e.add(n);
  let _ = N(n);
  t(r ? `Ignoring ${_} from ${E} \u2014 repo-committed settings can't re-point the TLS/proxy channel of a session whose credential comes from the host. Set it in ~/.claude/settings.json or managed settings instead.` : `Ignoring ${_} from ${E} \u2014 this session's provider routing is managed by the host (CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST or a host-auth-callback marker), so settings-sourced provider/auth configuration does not apply.`, {
    level: "warn"
  });
}
function Ee(e, n, E, r) {
  if (!e) return {};
  let _ = E.managedByHost || E.desktopHost && he.has(n),
    D = {};
  for (let [s, O] of Object.entries(e)) {
    if (v.has(s.toUpperCase()) && !Ge(s, O, n)) continue;
    if (E.coworkCloud && wHs(s)) {
      G(r, s, n);
      continue;
    }
    if (E.hybridConnection && Kie(n) && mln(s) && !SHs(s)) {
      if (r !== void 0 && !r.has(s)) r.add(s), t(`Not setting ${N(s)} from ${n} in this pass \u2014 beside your organization's connection, a repository's settings don't set provider-managed variables.`, {
        level: "warn"
      });
      continue;
    }
    if (!_) {
      D[s] = O;
      continue;
    }
    if (E.desktopHost && n === "policySettings" && s.toUpperCase() === "CLAUDE_CODE_CERT_STORE") {
      D[s] = O;
      continue;
    }
    if (mln(s) && (E.managedByHost || !SHs(s))) {
      if (E.managedByHost) G(r, s, n);
      continue;
    }
    if (E.managedByHost && s.toUpperCase() === "ANTHROPIC_CUSTOM_HEADERS") {
      G(r, s, n);
      continue;
    }
    if (E.managedByHostFlag && (!E.desktopHost || Kie(n)) && (qzn(s) || Sbt(s))) {
      G(r, s, n, E.desktopHost);
      continue;
    }
    D[s] = O;
  }
  return D;
}
function ie(e, n, E, r, _) {
  if (!e || !E) return e || {};
  let D = {},
    s = [];
  for (let [O, d] of Object.entries(e)) {
    if (!E.has(O.toUpperCase()) || Be(O, d, n)) {
      D[O] = d;
      continue;
    }
    let A = process.env[O];
    if (r && n === "policySettings" && MLr.some(item => item === O.toUpperCase()) && Uie()) {
      if (D[O] = d, _ && A !== void 0 && A !== d) t(`Using ${N(O)} from managed settings in place of the value this session had.`, {
        level: "warn"
      });
      continue;
    }
    if (_ && A !== d) s.push(O);
  }
  if (_ && s.length > 0) Ve(s, n, _);
  return D;
}
function Ve(e, n, E) {
  let r = e.filter(item => {
    let s = `${n}:${item}`;
    if (E.has(s)) return !1;
    return E.add(s), !0;
  });
  if (r.length === 0) return;
  let _ = r.map(N).join(", ");
  t(`Ignoring ${_} from ${n}: the desktop app or runner that started this session supplies ${r.length === 1 ? "it" : "them"}, so the settings ${r.length === 1 ? "value is" : "values are"} not used.`, {
    level: "warn"
  });
}
var Ke = new Set(["CLAUDE_CODE_SUBPROCESS_ENV_SCRUB", "CLAUDE_CODE_PERFORCE_MODE"]),
  De = new Set(Vzn);
function Oe(e, n) {
  let E = e.toUpperCase();
  return kd() && !(QBt(e, n) && !mln(e) && !jet(E) && !De.has(E)) && !(Ke.has(E) && Pe(n));
}
function J(e) {
  return e === "NO_COLOR" || e === "FORCE_COLOR";
}
function j(e, n, E, r) {
  if (!e) return {};
  let _ = {};
  for (let [D, s] of Object.entries(e)) {
    let O = D.toUpperCase();
    if (J(O) || Oe(D, s)) {
      let A = TJ(n, D);
      if (r === !0) {
        if (E?.has(A) === !1) E.set(A, n[A]);
      } else E?.delete(A);
      n[A] = s;
      continue;
    }
    let d = TJ(n, D);
    delete n[d], E?.delete(d), _[D] = s;
  }
  return _;
}
function We(e, n) {
  return e === "CLAUDE_CODE_MODEL_CATALOG" && rs(n);
}
function Se(e, n) {
  return w(e, n) || We(e, n);
}
function YTs() {
  for (let e of m.keys()) delete process.env[e];
}
var Ye = new Set(["CLAUDE_CODE_PLUGIN_DIRS", "CLAUDE_CODE_PLUGIN_DIR_WATCH", "CLAUDE_CODE_PROCESS_WRAPPER"]);
function we(e, n) {
  if (e === void 0 || !$y() || n !== "userSettings" && n !== "globalConfig") return e;
  return Yi(e, (E, r) => Ye.has(r.toUpperCase()));
}
var xe = new Set(["ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_EXTRA_BODY"]);
function b(e, n) {
  if (!e) return {};
  let E = {};
  for (let [r, _] of Object.entries(e)) if (!k(r, _)) E[r] = _;else if (n && !n.has(r) && xe.has(r.toUpperCase())) n.add(r), t(`${r} in settings is ignored, all of it: it names a use case, which only the environment Claude Code is started with can do.`, {
    level: "warn"
  });
  return E;
}
function XTs() {
  return R.envAboveProjectSettings();
}
function qg() {
  return R.getPreSettingsEnvSnapshot();
}
function Yht() {
  let e = {
    ...qg()
  };
  for (let n of Object.keys(e)) if (process.env[n] === void 0) delete e[n];
  return e;
}
function k3(e, n) {
  return R.isSettingsSourcedEnvValue(e, n);
}
function JTs(e, n) {
  return R.personsSettingsEnvKeeps(e, n);
}
function QTs() {
  return R.putBackUnsuppliedTelemetryEnv();
}
function ZTs(e) {
  R.setToolServerLaunchEnv(e);
}
function eCs(e, n) {
  R.recordPersonsEnvValue(e, n);
}
function ap() {
  return R.peekPreSettingsEnvSnapshot();
}
function fU(e) {
  return e;
}
function JHn() {
  return R.getLegacyEnvMap();
}
function v3() {
  return R.getAppliedGlobalConfigEnv();
}
X7i(qg);
A7i(() => R.takeChildEnvFromRepository());
dKi(ap);
x7i(() => be("policySettings")?.env ?? {});
Q(k3);
nKi(e => R.routeAfterVerdict(e), e => R.launchNamed(e));
cqi({
  env: () => R.getHostLaunchEnv(),
  credential: () => R.getLaunchCredential(),
  road: () => R.getLaunchCredentialRoad()
});
function tCs(e, n) {
  return R.dropPreSettingsEnvSnapshot(e, n);
}
function L(e) {
  return x() === "windows" ? e.toUpperCase() : e;
}
function e_o(e, n, E) {
  if (e === void 0) return Object.freeze({
    ...process.env
  });
  let r = new Set(n.map(L)),
    _ = new Map(Object.entries(e).map(([s, O]) => [L(s), O])),
    D = {};
  for (let s of Object.keys(process.env)) if (r.has(L(s))) D[s] = E?.[s] ?? process.env[s];else if (_.has(L(s))) D[s] = _.get(L(s));
  return Object.freeze(D);
}
function eAr(e, n) {
  let E = Object.keys(process.env).filter(item => n(item) && process.env[item] !== e[item]);
  for (let r of E) if (e[r] === void 0) delete process.env[r];else process.env[r] = e[r];
  return E.length > 0;
}
function NX(e, n = "policySettings") {
  return R.filterPolicyPredicateEnv(e, n, {
    forPolicyMatch: !1
  });
}
function Bnn(e, n = "policySettings") {
  return R.filterPolicyPredicateEnv(e, n, {
    forPolicyMatch: !0
  });
}
function tAr(e, n) {
  return R.withoutInvalidSettingsEnv(e, n);
}
function QHn(e, n) {
  return b(tAr(e, n));
}
var ke = ["userSettings", "flagSettings", "policySettings"],
  X = ["TRACES", "METRICS", "LOGS", "PROFILES"],
  f = cln,
  oe = new Set(["HEADERS", "CLIENT_KEY", "CLIENT_CERTIFICATE"]),
  re = new Set(["OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"]),
  _e = "CLAUDE_CODE_ENABLE_TELEMETRY",
  se = "BETA_TRACING_ENDPOINT";
var kt = new Set([`${cln}ENDPOINT`, `${cln}HEADERS`, `${cln}PROTOCOL`]);
function z(e) {
  return e;
}
function je(e) {
  return !e.split(",").map(item => item.trim()).includes("otlp");
}
function H(e) {
  return x() === "windows" ? e.toUpperCase() : e;
}
function P(e, n) {
  let E = {};
  for (let [r, _] of Object.entries(e ?? {})) if (n.includes(r.toUpperCase()) && _ !== void 0) E[r] = String(_);
  return E;
}
class de {
  providerStripContext = M;
  projectScopeDropWarned = new Set();
  fullPassDroppedGitKey = !1;
  hostManagedDropWarned = new Set();
  invalidEnvKeyWarned = new Set();
  useCaseDropWarned = new Set();
  hostSpawnEnvKeys = void 0;
  settingsEnvForChildren = {};
  settingsEnvForChildrenFromRepository = new Map();
  publishedChildEnv = {};
  publishedChildEnvFromRepository = new Map();
  toolServerLaunchEnv = {};
  materializedProcessWrapper = void 0;
  preSettingsEnvSnapshot = void 0;
  userTierNames = new Set();
  launchNamesBeforeClaim = void 0;
  userTierNamesInSnapshot = new Set();
  claimLaunchEnv = void 0;
  launchCredentialRoad = "none";
  launchCredential = void 0;
  otelDominanceDropWarned = new Set();
  hostSpawnEnvDropWarned = new Set();
  untrustedFolderDropWarned = new Set();
  servedFolderEnvWithheld = !1;
  getPreSettingsEnvSnapshot() {
    if (this.preSettingsEnvSnapshot === void 0) this.preSettingsEnvSnapshot = this.latchPreSettingsEnvSnapshot({
      ...process.env
    }), i.unset("CLAUDE_CODE_PERSONAL_HOOKS_OFF");
    return this.preSettingsEnvSnapshot;
  }
  latchPreSettingsEnvSnapshot(e) {
    let launchNamesBeforeClaim = this.launchNamesBeforeClaim;
    this.userTierNamesInSnapshot = new Set(launchNamesBeforeClaim === void 0 ? [] : Object.keys(e).map(item => item.toUpperCase()).filter(item => this.userTierNames.has(item) && !launchNamesBeforeClaim.has(item)));
    let E = this.claimLaunchEnv ?? e;
    return this.launchCredential = vp() ? pqi(E) : null, this.launchCredentialRoad = vp() ? fqi(E, this.launchCredential) : "none", Object.freeze(e);
  }
  getLaunchCredentialRoad() {
    return this.getPreSettingsEnvSnapshot(), this.launchCredentialRoad;
  }
  getLaunchCredential() {
    return this.getPreSettingsEnvSnapshot(), this.launchCredential ?? null;
  }
  getHostLaunchEnv() {
    let e = this.getPreSettingsEnvSnapshot();
    return this.claimLaunchEnv ?? e;
  }
  envAboveProjectSettings() {
    let e = this.getPreSettingsEnvSnapshot(),
      n = {};
    for (let [E, r] of Object.entries(e)) if (!this.userTierNamesInSnapshot.has(E.toUpperCase())) n[E] = r;
    return {
      ...n,
      ...be("flagSettings")?.env,
      ...be("policySettings")?.env
    };
  }
  peekPreSettingsEnvSnapshot() {
    return this.preSettingsEnvSnapshot;
  }
  appliedGlobalConfigEnv = void 0;
  legacyEnvMapAtLaunch = void 0;
  settingsOfferedEnvValues = new Map();
  personsWrittenEnvValues = new Map();
  otelDominatedAsked = void 0;
  getAppliedGlobalConfigEnv() {
    return this.appliedGlobalConfigEnv;
  }
  getLegacyEnvMap() {
    return this.legacyEnvMapAtLaunch ?? fe().env;
  }
  dropPreSettingsEnvSnapshot(e, n) {
    let preSettingsEnvSnapshot = this.preSettingsEnvSnapshot;
    if (this.preSettingsEnvSnapshot = void 0, this.launchCredential = void 0, this.claimLaunchEnv = void 0, this.legacyEnvMapAtLaunch = void 0, e === void 0) return !1;
    let r = [...e];
    if (preSettingsEnvSnapshot) this.launchNamesBeforeClaim = new Set([...Object.keys(preSettingsEnvSnapshot), ...r].map(item => item.toUpperCase()));
    if (!vp()) return !1;
    let _ = e_o(preSettingsEnvSnapshot, r, n);
    this.claimLaunchEnv = _;
    let D = preSettingsEnvSnapshot !== void 0 && eAr(_, wHs);
    return this.getPreSettingsEnvSnapshot(), D;
  }
  reset() {
    this.providerStripContext = M, this.projectScopeDropWarned.clear(), this.hostManagedDropWarned.clear(), this.invalidEnvKeyWarned.clear(), this.useCaseDropWarned.clear(), this.hostSpawnEnvKeys = void 0, this.settingsEnvForChildren = {}, this.settingsEnvForChildrenFromRepository = new Map(), this.toolServerLaunchEnv = {}, this.materializedProcessWrapper = void 0, this.preSettingsEnvSnapshot = void 0, this.userTierNames.clear(), this.launchNamesBeforeClaim = void 0, this.userTierNamesInSnapshot = new Set(), this.claimLaunchEnv = void 0, this.launchCredential = void 0, this.launchCredentialRoad = "none", this.appliedGlobalConfigEnv = void 0, this.legacyEnvMapAtLaunch = void 0, this.settingsOfferedEnvValues.clear(), this.personsWrittenEnvValues.clear(), this.otelDominanceDropWarned.clear(), this.hostSpawnEnvDropWarned.clear(), this.untrustedFolderDropWarned.clear(), this.servedFolderEnvWithheld = !1, this.fullPassDroppedGitKey = !1;
  }
  lastFullPassDroppedProjectGitKey() {
    return this.fullPassDroppedGitKey;
  }
  servedFolderEnvWasWithheld() {
    return this.servedFolderEnvWithheld;
  }
  strippedSettingsEnv(e, n, E, r) {
    let _ = ie(Ee(b(ne(te(F(we(this.asFromAFolderNobodyTrusted(e, n, r !== void 0), n), n, r && this.invalidEnvKeyWarned), n, r && this.projectScopeDropWarned, () => this.envAboveProjectSettings(), r?.onGitKeyDropped)), r && this.useCaseDropWarned), n, E, r && this.hostManagedDropWarned), n, this.hostSpawnEnvKeys, E.desktopHost, r && this.hostSpawnEnvDropWarned);
    if (r) return j(_, this.settingsEnvForChildren, this.settingsEnvForChildrenFromRepository, Kie(n));
    let D = {},
      s = j(_, D);
    for (let [O, d] of Object.entries(D)) if (J(O.toUpperCase())) s[O] = d;
    return s;
  }
  keptSettingsEnv(e, n, E, r) {
    return this.withholdsEnvFrom(n, E) ? {} : this.strippedSettingsEnv(e, n, E, r);
  }
  launchEnvUnlatched() {
    return this.claimLaunchEnv ?? this.peekPreSettingsEnvSnapshot() ?? process.env;
  }
  launchNamed(e) {
    let n = new Map(Object.entries(P(this.launchEnvUnlatched(), e)).map(([E, r]) => [H(E), r]));
    return E => n.get(H(E));
  }
  routeAfterVerdict(e) {
    let n = this.providerStripContext === M ? y() : this.providerStripContext,
      E = [P(this.launchEnvUnlatched(), e), this.keptSettingsEnv(P(this.getLegacyEnvMap(), e), "globalConfig", n, void 0), ...$o().filter(item => item !== "policySettings" && !Kie(item)).map(item => this.keptSettingsEnv(P(be(item)?.env, e), item, n, void 0)), this.strippedSettingsEnv(P(RNs(), e), "policySettings", n, void 0)],
      r = new Map(E.flatMap(item => Object.entries(item).map(([D, s]) => [H(D), s])));
    return _ => r.get(H(_));
  }
  setToolServerLaunchEnv(e) {
    this.toolServerLaunchEnv = e;
  }
  assignFromAboveTheRepository(e) {
    Object.assign(process.env, e);
    for (let n of Object.keys(e)) oNs(n);
  }
  takeChildEnvFromRepository() {
    let publishedChildEnv = this.publishedChildEnv,
      n = [];
    for (let [E, r] of this.publishedChildEnvFromRepository) {
      let _ = publishedChildEnv[E];
      if (_ === void 0) continue;
      if (n.push([E, _]), r === void 0) delete publishedChildEnv[E];else publishedChildEnv[E] = r;
    }
    if (n.length === 0) return;
    return () => {
      for (let [E, r] of n) publishedChildEnv[E] = r;
    };
  }
  publishChildEnv() {
    this.publishedChildEnv = this.settingsEnvForChildren, this.publishedChildEnvFromRepository = this.settingsEnvForChildrenFromRepository, l0s(this.settingsEnvForChildren);
  }
  takenFromToolServerLaunchEnv() {
    let e = {};
    for (let [n, E] of Object.entries(b(F(this.toolServerLaunchEnv, "globalConfig", this.invalidEnvKeyWarned)))) if (!v.has(n.toUpperCase())) e[n] = E;
    return this.filterSettingsEnv(j(e, this.settingsEnvForChildren), "globalConfig");
  }
  filterSettingsEnv(e, n, onGitKeyDropped) {
    let r = this.keptSettingsEnv(e, n, this.providerStripContext, {
      onGitKeyDropped: onGitKeyDropped
    });
    for (let [_, D] of Object.entries(r)) this.recordOfferedEnvValue(_, D);
    if (n === "globalConfig" || n === "userSettings") for (let _ of Object.keys(r)) this.userTierNames.add(_.toUpperCase());
    return r;
  }
  withoutInvalidSettingsEnv(e, n) {
    return F(e, n, this.invalidEnvKeyWarned);
  }
  putBackUnsuppliedTelemetryEnv() {
    let preSettingsEnvSnapshot_2 = this.preSettingsEnvSnapshot;
    if (preSettingsEnvSnapshot_2 === void 0 || this.appliedGlobalConfigEnv === void 0) return !1;
    let n = !1,
      E = Object.keys(process.env).filter(item => {
        let _ = item.toUpperCase(),
          D = process.env[item];
        return D !== void 0 && D !== preSettingsEnvSnapshot_2[item] && (XRo.some(item => _.startsWith(item)) || RLr.includes(_) || De.has(_)) && this.settingsOfferedEnvValues.get(_)?.has(D.trim()) === !0 && this.personsWrittenEnvValues.get(L(item)) !== D.trim();
      });
    if (E.length > 0) {
      let r = new Map();
      for (let D of [this.toolServerLaunchEnv, this.appliedGlobalConfigEnv ?? {}, ...$o().map(item => this.keptSettingsEnv(be(item)?.env, item, this.providerStripContext, void 0))]) for (let [s, O] of Object.entries(D)) r.set(L(s), O.trim());
      let _ = E.filter(item => r.get(L(item)) !== process.env[item]?.trim());
      if (n = eAr(preSettingsEnvSnapshot_2, D => _.includes(D)), n) t(`Telemetry environment variables put back to their startup values, or removed, because no settings source still sets their current value: ${_.map(N).join(", ")}`);
    }
    return this.enforceManagedOtelFamilyDominance(), n;
  }
  isSettingsSourcedEnvValue(e, n) {
    let E = n.trim();
    return this.settingsOfferedEnvValues.get(e.toUpperCase())?.has(E) === !0 || this.personsWrittenEnvValues.get(L(e)) === E;
  }
  recordPersonsEnvValue(e, n) {
    if (n === void 0) this.personsWrittenEnvValues.delete(L(e));else this.personsWrittenEnvValues.set(L(e), n.trim());
  }
  recordOfferedEnvValue(e, n) {
    let E = e.toUpperCase(),
      r = n.trim(),
      _ = this.settingsOfferedEnvValues.get(E);
    if (_) _.add(r);else this.settingsOfferedEnvValues.set(E, new Set([r]));
  }
  personsSettingsEnvKeeps(e, n) {
    let E = this.providerStripContext === M ? y() : this.providerStripContext,
      r = $o(),
      _ = r.slice(r.indexOf("userSettings") + 1),
      D = (s, O) => Object.keys(this.keptSettingsEnv(s, O, E, void 0));
    return r.includes("userSettings") && D({
      [e]: n
    }, "userSettings").includes(e) && !_.some(item => D(be(item)?.env, item).some(item => L(item) === L(e))) && !this.otelDominates(e) && !(n === "" && L(e) === L(CA) && this.processWrapperKeyAbove() !== void 0);
  }
  otelDominates(e) {
    let n = new Set();
    this.otelDominatedAsked = n;
    try {
      this.enforceManagedOtelFamilyDominance();
    } finally {
      this.otelDominatedAsked = void 0;
    }
    return n.has(e.toUpperCase());
  }
  otelClaimInForce(e, n) {
    return this.otelDominatedAsked !== void 0 || process.env[e] === n;
  }
  processWrapperKeyAbove() {
    return [this.processWrapperKeyFrom("policySettings"), this.processWrapperKeyFrom("flagSettings")].find(item => typeof item === "string" && item !== "");
  }
  filterPolicyPredicateEnv(e, n, {
    forPolicyMatch: forPolicyMatch
  }) {
    if (!forPolicyMatch && this.withholdsEnvFrom(n)) return {};
    let r = ie(Ee(b(ne(te(F(forPolicyMatch ? e : this.asFromAFolderNobodyTrusted(e, n, !1), n, this.invalidEnvKeyWarned), n, this.projectScopeDropWarned, () => this.envAboveProjectSettings()))), n, this.providerStripContext, this.hostManagedDropWarned), n, this.hostSpawnEnvKeys, this.providerStripContext.desktopHost),
      _ = {};
    for (let [D, s] of Object.entries(r)) {
      let O = D.toUpperCase();
      if (J(O)) continue;
      if (!forPolicyMatch && Oe(D, s)) continue;
      _[D] = s;
    }
    return _;
  }
  withholdsEnvFrom(e, n = this.providerStripContext) {
    return n.storedLoginPinned && jCo(e);
  }
  asFromAFolderNobodyTrusted(e, n, E) {
    if (e === void 0 || !MCo(n)) return e;
    let r = OCo(n),
      _ = {},
      D = [];
    for (let [s, O] of Object.entries(e)) {
      let d = s.toUpperCase();
      if (typeof O === "string" && (uZi(s, O) || !r && Se(d, O))) _[s] = O;else if (E && r) this.servedFolderEnvWithheld = !0;else if (E && !this.untrustedFolderDropWarned.has(`${n}:${s}`)) this.untrustedFolderDropWarned.add(`${n}:${s}`), D.push(qht(s));
    }
    if (D.length > 0) t(`Ignoring ${D.join(", ")} in the env block of ${n === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json"}: ${Bfe}, and this session cannot show a trust dialog, so this folder's settings files may set only a short list of variables, each to certain values only, such as DISABLE_TELEMETRY=1. The repository's author chose the ignored values, not you. If your setup needs an ignored variable, set it yourself in user or managed settings, or in the environment that Claude Code is started with. On a self-hosted runner, user settings are settings.json in the runner host's config directory (SELF_HOSTED_RUNNER_HOST_CONFIG_DIR): restart the runner afterwards.`, {
      level: "warn"
    });
    return _;
  }
  processWrapperKeyFrom(e) {
    return this.withholdsEnvFrom(e) || kd() || e === "userSettings" && $y() ? void 0 : be(e)?.processWrapper;
  }
  dropDominatedOtelKey(e, n, E, r, _ = "managed settings") {
    let otelDominatedAsked = this.otelDominatedAsked;
    if (otelDominatedAsked !== void 0) {
      if (!(r.has(e) && r.get(e) === process.env[e]) && !this.hostSpawnEnvKeys?.has(e.toUpperCase())) otelDominatedAsked.add(e.toUpperCase());
      return;
    }
    if (r.get(e) === process.env[e]) return;
    if (this.hostSpawnEnvKeys?.has(e.toUpperCase())) return;
    if (process.env[e] === void 0) return;
    if (!this.otelDominanceDropWarned.has(e)) this.otelDominanceDropWarned.add(e), t(`Dropping ${N(e)}: ${N(E)} is claimed by ${_}, so lower-trust scopes cannot redirect ${n}`, {
      level: "warn"
    });
    delete process.env[e];
  }
  dropDominatedAntAlias(e, n, E, r = "managed settings") {
    return;
  }
  dropDominatedBetaTracingEndpoint(e, n, E = "managed settings") {
    this.dropDominatedOtelKey(se, "the logs and traces signals through detailed beta tracing", e, n, E);
  }
  hostSpawnOtelClaims() {
    let e = new Map(),
      hostSpawnEnvKeys = this.hostSpawnEnvKeys;
    if (!hostSpawnEnvKeys) return e;
    let E = [...hostSpawnEnvKeys].some(item => {
      let _ = z(item);
      return (_.startsWith(f) && _.endsWith("_ENDPOINT") || _ === se) && (process.env[item] ?? "").trim() !== "";
    });
    for (let r of hostSpawnEnvKeys) {
      let _ = z(r),
        D = re.has(_) || _ === _e,
        s = E && _.startsWith(f);
      if (!D && !s) continue;
      let O = process.env[r];
      if (O !== void 0) e.set(r, O);
    }
    return e;
  }
  enforceManagedOtelFamilyDominance() {
    let e = be("policySettings"),
      n = e?.env,
      E = (e?.otelHeadersHelper ?? "").trim() !== "",
      r = new Map();
    for (let [_, D] of Object.entries(n ?? {})) {
      let s = _.toUpperCase();
      if (!r.has(s) || _ === s) r.set(s, D);
    }
    if (this.applyOtelFamilyClaims(this.hostSpawnOtelClaims(), r, "the host spawn env"), !n && !E) return;
    if (E) {
      for (let _ of X) this.dropDominatedOtelKey(`${f}${_}_ENDPOINT`, `the ${_.toLowerCase()} signal`, "otelHeadersHelper", r);
      this.dropDominatedOtelKey(`${f}ENDPOINT`, "telemetry for any signal", "otelHeadersHelper", r), this.dropDominatedAntAlias(`${f}ENDPOINT`, "otelHeadersHelper", r), this.dropDominatedBetaTracingEndpoint("otelHeadersHelper", r);
    }
    this.applyOtelFamilyClaims(r, r, "managed settings");
  }
  applyOtelFamilyClaims(e, n, E) {
    for (let [r, _] of e) {
      let D = z(r);
      if (D === _e) {
        if (this.otelClaimInForce(r, _) && !Pe(_)) this.dropDominatedBetaTracingEndpoint(r, n, E);
        continue;
      }
      if (re.has(D)) {
        if (this.otelClaimInForce(r, _) && je(_)) this.dropDominatedBetaTracingEndpoint(r, n, E);
        continue;
      }
      if (!D.startsWith(f)) continue;
      if (_.trim() === "") continue;
      if (!this.otelClaimInForce(r, _)) continue;
      let s = X.find(item => D.startsWith(`${f}${item}_`));
      if (s) {
        let S = D.slice(`${f}${s}_`.length),
          l = s === "TRACES" || s === "LOGS";
        if (oe.has(S)) {
          if (this.dropDominatedOtelKey(`${f}${s}_ENDPOINT`, `the ${s.toLowerCase()} signal`, r, n, E), l) this.dropDominatedBetaTracingEndpoint(r, n, E);
        } else if (S === "ENDPOINT" && l) this.dropDominatedBetaTracingEndpoint(r, n, E);
        continue;
      }
      let O = D.slice(f.length),
        d = oe.has(O),
        A = d ? [O, "ENDPOINT"] : [O];
      for (let S of A) for (let l of X) this.dropDominatedOtelKey(`${f}${l}_${S}`, `the ${l.toLowerCase()} signal`, r, n, E);
      if (d) this.dropDominatedOtelKey(`${f}ENDPOINT`, "telemetry for any signal", r, n, E), this.dropDominatedAntAlias(`${f}ENDPOINT`, r, n, E);
      if (A.includes("ENDPOINT")) this.dropDominatedBetaTracingEndpoint(r, n, E);
      this.dropDominatedAntAlias(D, r, n, E);
    }
  }
  resetSettingsIfUserSettingsFileMoved(e) {
    if (un("userSettings") !== e) ir();
  }
  applySafeConfigEnvironmentVariables() {
    this.getPreSettingsEnvSnapshot(), this.providerStripContext = y();
    let e = un("userSettings"),
      NODE_EXTRA_CA_CERTS = i.NODE_EXTRA_CA_CERTS,
      CLAUDE_CODE_CERT_STORE = i.CLAUDE_CODE_CERT_STORE,
      CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP = i.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP,
      CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP = i.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP,
      NODE_OPTIONS = i.NODE_OPTIONS,
      s = N1t();
    if (this.hostSpawnEnvKeys === void 0) {
      if (this.hostSpawnEnvKeys = this.providerStripContext.hostOrchestrated ? new Set(Object.keys(process.env).map(item => item.toUpperCase())) : null, this.hostSpawnEnvKeys && KU("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR")) this.hostSpawnEnvKeys.add("CLAUDE_CODE_OAUTH_TOKEN");
      if (OTo()) this.hostSpawnEnvKeys?.delete("FORCE_COLOR");
    }
    this.settingsEnvForChildren = {}, this.settingsEnvForChildrenFromRepository = new Map(), Object.assign(process.env, this.takenFromToolServerLaunchEnv()), this.appliedGlobalConfigEnv = this.filterSettingsEnv(this.getLegacyEnvMap(), "globalConfig"), this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv);
    for (let S of ke) {
      if (S === "policySettings") continue;
      if (!Kt(S)) continue;
      this.assignFromAboveTheRepository(this.filterSettingsEnv(be(S)?.env, S));
    }
    Rb(), this.providerStripContext = {
      ...this.providerStripContext,
      hybridConnection: Ce()
    }, this.assignFromAboveTheRepository(this.filterSettingsEnv(be("policySettings")?.env, "policySettings"));
    let O = new Map();
    for (let source of $o()) {
      let l = this.filterSettingsEnv(be(source)?.env, source);
      for (let [key, value] of Object.entries(l)) O.set(key.toUpperCase(), {
        key: key,
        value: value,
        source: source
      });
    }
    for (let {
      key: key_2,
      value: value_2,
      source: source_2
    } of O.values()) {
      if (!QBt(key_2, value_2)) continue;
      if (Kie(source_2)) {
        let h = rNs(key_2);
        process.env[key_2] = value_2, h();
      } else process.env[key_2] = value_2, oNs(key_2);
    }
    this.publishChildEnv();
    let d = process.env[CA];
    if (!d || d === this.materializedProcessWrapper) {
      let S = Kt("userSettings") ? this.processWrapperKeyFrom("userSettings") : void 0,
        l = this.processWrapperKeyAbove() ?? (S === "" ? void 0 : S);
      if (l !== void 0) process.env[CA] = l, this.materializedProcessWrapper = l;
    }
    this.enforceManagedOtelFamilyDominance(), this.resetSettingsIfUserSettingsFileMoved(e);
    let A = i.NODE_EXTRA_CA_CERTS !== NODE_EXTRA_CA_CERTS || i.CLAUDE_CODE_CERT_STORE !== CLAUDE_CODE_CERT_STORE || i.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP !== CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP || i.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP !== CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP || i.NODE_OPTIONS !== NODE_OPTIONS;
    if (A) tdn();
    if ((A || N1t() !== s) && wxo()) J4(), C_();
  }
  applyConfigEnvironmentVariables() {
    this.getPreSettingsEnvSnapshot(), this.providerStripContext = y(), this.settingsEnvForChildren = {}, this.settingsEnvForChildrenFromRepository = new Map();
    let NODE_EXTRA_CA_CERTS_2 = i.NODE_EXTRA_CA_CERTS,
      CLAUDE_CODE_CERT_STORE_2 = i.CLAUDE_CODE_CERT_STORE,
      CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP_2 = i.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP,
      CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP_2 = i.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP,
      NODE_OPTIONS_2 = i.NODE_OPTIONS,
      CLAUDE_CODE_CLIENT_CERT = i.CLAUDE_CODE_CLIENT_CERT,
      CLAUDE_CODE_CLIENT_KEY = i.CLAUDE_CODE_CLIENT_KEY;
    this.legacyEnvMapAtLaunch ??= {
      ...fe().env
    }, Object.assign(process.env, this.takenFromToolServerLaunchEnv()), this.appliedGlobalConfigEnv = this.filterSettingsEnv(this.getLegacyEnvMap(), "globalConfig"), this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv), this.fullPassDroppedGitKey = !1;
    for (let l of $o()) {
      let U = this.filterSettingsEnv(be(l)?.env, l, () => {
        this.fullPassDroppedGitKey = !0;
      });
      if (Kie(l)) {
        let h = Object.keys(U).map(item => rNs(item));
        Object.assign(process.env, U);
        for (let V of h) V();
      } else this.assignFromAboveTheRepository(U);
    }
    this.publishChildEnv(), this.enforceManagedOtelFamilyDominance();
    let O = i.NODE_EXTRA_CA_CERTS !== NODE_EXTRA_CA_CERTS_2 || i.CLAUDE_CODE_CLIENT_CERT !== CLAUDE_CODE_CLIENT_CERT || i.CLAUDE_CODE_CLIENT_KEY !== CLAUDE_CODE_CLIENT_KEY;
    if (i.NODE_EXTRA_CA_CERTS !== NODE_EXTRA_CA_CERTS_2 || i.CLAUDE_CODE_CERT_STORE !== CLAUDE_CODE_CERT_STORE_2 || i.CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP !== CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP_2 || i.CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP !== CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP_2 || i.NODE_OPTIONS !== NODE_OPTIONS_2) tdn();
    let {
        certPath: certPath,
        keyPath: keyPath
      } = tBs(),
      S = (i.CLAUDE_CODE_CLIENT_CERT !== certPath || i.CLAUDE_CODE_CLIENT_KEY !== keyPath) && (certPath !== void 0 || keyPath !== void 0);
    if (!S) yxo();
    J4(), C_(), Promise.all([oae(), _5()]).then(([l, U]) => {
      if (S && U.readFailed) yxo();
      if (O || S || l || U.changed) J4(), C_();
    }).catch(a);
  }
}
var R = new de(),
  jt = fG({
    clear: clear
  });
function tfe() {
  try {
    R.applySafeConfigEnvironmentVariables();
  } finally {
    $Wn();
  }
  W(), fV();
}
function qI() {
  try {
    R.applyConfigEnvironmentVariables();
  } finally {
    $Wn();
  }
  W(), fV();
}
function nCs() {
  return R.servedFolderEnvWasWithheld();
}
function clear() {
  R.reset();
}
export { Unn, QRr, qht, QVi, qTs, PFt, ZRr, ZVi, bQe, XHn, Qyo, Zyo, YTs, XTs, qg, Yht, k3, JTs, QTs, ZTs, eCs, ap, fU, JHn, v3, tCs, e_o, eAr, NX, Bnn, tAr, QHn, tfe, qI, nCs };