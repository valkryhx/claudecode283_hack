// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Po, z, Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, Yn } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t, ywt, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { yjt, fme, i$e, nHr, Una } from "B:/~BUN/root/chunk-ctmjjbhk.js";
import M from "os";
function Qdn() {
  for (let e of [process.env.CCR_SPAWN_TIMESTAMP_MS, process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS]) {
    if (e === void 0 || e.trim() === "") continue;
    let r = Number.parseInt(e, 10);
    if (Number.isFinite(r)) return r;
  }
  return;
}
import { dirname as v, join as R } from "path";
function _e(e) {
  if (e == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? Yn(e) : b("nonconforming");
}
function Zdn(e) {
  return Yn(e.map(item => _e(item)).join(","));
}
var CLAUDE_CODE_PROFILE_STARTUP = i.CLAUDE_CODE_PROFILE_STARTUP,
  F = 0.005,
  w = Math.random() < F,
  u = CLAUDE_CODE_PROFILE_STARTUP || w;
class L {
  memorySnapshots = [];
  startupContext = {};
  bootstrapEntry = "cli";
  onceMarked = new Set();
  reported = !1;
  lateReported = !1;
  firstEmitPhases = new Set();
}
var U = new W(() => new L());
function f() {
  return Po(U);
}
var B = {
    import_time: ["cli_entry", "main_tsx_imports_loaded"],
    main_imports: ["cli_before_main_import", "main_tsx_entry"],
    mdm_keychain_await: ["preAction_start", "preAction_after_mdm"],
    init_time: ["init_function_start", "init_function_end"],
    init_safe_env: ["init_configs_enabled", "init_safe_env_vars_applied"],
    init_network: ["init_after_remote_settings_check", "init_network_configured"],
    init_tail: ["init_network_configured", "init_function_end"],
    settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
    tools_loaded: ["init_function_end", "action_tools_loaded"],
    preaction_tail: ["init_function_end", "action_handler_start"],
    action_prologue: ["action_handler_start", "action_after_input_prompt"],
    action_setup_span: ["action_after_input_prompt", "action_after_setup"],
    setup_uds_messaging: ["setup_uds_start", "setup_uds_end"],
    setup_uds_import: ["setup_uds_start", "setup_uds_imported"],
    setup_uds_dir: ["setup_uds_imported", "uds_inbox_dir_ready"],
    setup_uds_listen: ["uds_inbox_dir_ready", "uds_inbox_listening"],
    setup_uds_publish: ["uds_inbox_listening", "uds_inbox_key_published"],
    mcp_configs: ["action_tools_loaded", "action_mcp_configs_loaded"],
    plugins_init: ["action_mcp_configs_loaded", "action_after_plugins_init"],
    headless_setup: ["action_after_plugins_init", "before_validateForceLoginOrg"],
    force_login_org: ["before_validateForceLoginOrg", "before_connectMcp"],
    mcp_connect: ["before_connectMcp", "after_connectMcp_claudeai"],
    mcp_connect_user: ["before_mcp_connect_user", "after_mcp_connect_user"],
    mcp_connect_connector: ["before_mcp_connect_connector", "after_mcp_connect_connector"],
    growthbook_init: ["before_growthbook_init", "after_growthbook_init"],
    prewait: ["after_connectMcp_claudeai", "after_print_import"],
    sandbox_init: ["before_sandbox_init", "after_sandbox_init"],
    load_initial_messages: ["before_loadInitialMessages", "after_loadInitialMessages"],
    process_user_input: ["before_processUserInput", "after_processUserInput"],
    total_time: ["cli_entry", "main_after_run"]
  },
  H = new Set(["total_time", "main_imports", "mdm_keychain_await", "init_safe_env", "init_network", "init_tail", "mcp_connect_user", "mcp_connect_connector", "growthbook_init", "preaction_tail", "action_prologue", "action_setup_span", "setup_uds_messaging", "setup_uds_import", "setup_uds_dir", "setup_uds_listen", "setup_uds_publish"]);
if (u) Uo("profiler_initialized");
var P = u ? Date.now() : void 0,
  nodeBootMs = u ? Math.round(process.uptime() * 1000) : void 0;
function tB(e) {
  if (!u) return;
  Object.assign(f().startupContext, e);
}
function ajs() {
  return f().bootstrapEntry;
}
function Uo(e, {
  once = !1
} = {}) {
  if (yjt(e), !u) return !1;
  let {
    onceMarked: onceMarked,
    memorySnapshots: memorySnapshots
  } = f();
  if (once) {
    if (onceMarked.has(e)) return !1;
    onceMarked.add(e);
  }
  if (fme().mark(e), CLAUDE_CODE_PROFILE_STARTUP) memorySnapshots.push(process.memoryUsage());
  return !0;
}
function O({
  memorySnapshots: memorySnapshots_2
}) {
  if (!CLAUDE_CODE_PROFILE_STARTUP) return "Startup profiling not enabled";
  let s = fme().getEntriesByType("mark");
  if (s.length === 0) return "No profiling checkpoints recorded";
  let o = [];
  o.push("=".repeat(80)), o.push("STARTUP PROFILING REPORT"), o.push("=".repeat(80)), o.push("");
  let a = 0;
  for (let [p, n] of s.entries()) o.push(nHr(n.startTime, n.startTime - a, n.name, memorySnapshots_2[p], 8, 7)), a = n.startTime;
  let _ = s.at(-1);
  return o.push(""), o.push(`Total startup time: ${i$e(_?.startTime ?? 0)}ms`), o.push("=".repeat(80)), o.join(`
`);
}
function ecn() {
  let e = f();
  if (e.reported) {
    if (!e.lateReported) e.lateReported = !0, x({
      late: !0
    }), A(e);
    return;
  }
  e.reported = !0, x({
    late: !1
  }), A(e);
}
function A(e) {
  if (!CLAUDE_CODE_PROFILE_STARTUP) return;
  let r = j(),
    s = v(r);
  ie().mkdirSync(s), ywt(r, O(e), {
    encoding: "utf8",
    flush: !0
  });
  let _ = fme().getEntriesByType("mark");
  ywt(G(), JSON.stringify({
    metadata: N(e, {
      late: !1
    }) ?? {},
    marks: _.map(item => ({
      name: item.name,
      startTime: item.startTime
    })),
    memory: e.memorySnapshots,
    nodeBootMs: nodeBootMs,
    headlessTurn0Marks: Una()
  }, null, 2), {
    encoding: "utf8",
    flush: !0
  }), t("Startup profiling report:"), t(O(e));
}
function j() {
  return R(Ue(), "startup-perf", `${z()}.txt`);
}
function G() {
  return R(Ue(), "startup-perf", `${z()}.json`);
}
function N({
  firstEmitPhases: firstEmitPhases,
  startupContext: startupContext
}, {
  late: late
}) {
  let a = fme().getEntriesByType("mark");
  if (a.length === 0) return null;
  let _ = new Map();
  for (let c of a) _.set(c.name, c.startTime);
  let p = _.get("main_after_run"),
    n = {},
    S = 0,
    h = 0;
  for (let [c, [C, D]] of Object.entries(B)) {
    if (late && firstEmitPhases.has(c)) continue;
    let k = _.get(C),
      m = _.get(D);
    if (k !== void 0 && m !== void 0) {
      let I = Math.round(m - k);
      if (n[`${c}_ms`] = I, S++, !late) firstEmitPhases.add(c);
      if (!H.has(c) && (p === void 0 || m <= p)) h += I;
    }
  }
  if (late) {
    if (S === 0) return null;
    n.late = !0;
  } else n.late = !1;
  let total_time_ms = n.total_time_ms;
  if (typeof total_time_ms === "number") n.gap_unaccounted_ms = Math.max(0, total_time_ms - h);
  n.free_mem_mb = Math.round(M.freemem() / 1048576), n.load_avg_1m = Math.round((M.loadavg()[0] ?? 0) * 100) / 100, n.checkpoint_count = a.length;
  let CLAUDE_CODE_REMOTE_SESSION_ID = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (CLAUDE_CODE_REMOTE_SESSION_ID) n.ccr_session_id = _e(CLAUDE_CODE_REMOTE_SESSION_ID);
  if (nodeBootMs !== void 0) n.node_boot_ms = nodeBootMs;
  let T = Qdn();
  if (T !== void 0 && P !== void 0) n.spawn_to_first_checkpoint_ms = Math.round(P - T);
  return Object.assign(n, startupContext), n;
}
function x({
  late: late_2
} = {
  late: !1
}) {
  if (!w || Qp()) return;
  let r = N(f(), {
    late: late_2
  });
  if (r === null) return;
  l("tengu_startup_perf", r);
}
export { Qdn, _e, Zdn, tB, ajs, Uo, ecn };