// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, ms, K, we, de, Dw } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { _, LZe, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ip } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
import D from "os";
function rjt() {
  for (let e of [process.env.CCR_SPAWN_TIMESTAMP_MS, process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS]) {
    if (e === void 0 || e.trim() === "") continue;
    let s = Number.parseInt(e, 10);
    if (Number.isFinite(s)) return s;
  }
  return;
}
import { dirname as tt, join as B } from "path";
var R = null;
function _de() {
  if (!R) R = Ue("perf_hooks").performance;
  return R;
}
function fDe(e) {
  return e.toFixed(3);
}
function zBr(e, s, n, o, u, p, c = "") {
  let r = o ? ` | RSS: ${Zt(o.rss)}, Heap: ${Zt(o.heapUsed)}` : "";
  return `[+${fDe(e).padStart(u)}ms] (+${fDe(s).padStart(p)}ms) ${n}${c}${r}`;
}
var CLAUDE_CODE_PROFILE_STARTUP = a.CLAUDE_CODE_PROFILE_STARTUP,
  J = 0.05,
  L = Math.random() < J,
  V = CLAUDE_CODE_PROFILE_STARTUP || L,
  y = "headless_";
class w {
  current = -1;
  turn0Marks = [];
  advance() {
    this.current++;
  }
}
var X = new z(() => new w());
function x() {
  return X.of(j().host);
}
function N() {
  return x().turn0Marks;
}
function Z() {
  let e = _de(),
    s = e.getEntriesByType("mark");
  for (let n of s) if (n.name.startsWith(y)) e.clearMarks(n.name);
}
function GBr() {
  if (!O()) return;
  let e = x();
  if (e.advance(), Z(), _de().mark(`${y}turn_start`), CLAUDE_CODE_PROFILE_STARTUP) t(`[headlessProfiler] Started turn ${e.current}`);
}
function wg(e) {
  if (!O()) return;
  let s = _de();
  if (s.mark(`${y}${e}`), CLAUDE_CODE_PROFILE_STARTUP) t(`[headlessProfiler] Checkpoint: ${e} at ${s.now().toFixed(1)}ms`);
}
function VBr() {
  if (!O()) return;
  let n = _de().getEntriesByType("mark").filter(item => item.name.startsWith(y));
  if (n.length === 0) return;
  let o = new Map();
  for (let f of n) {
    let m = f.name.slice(y.length);
    o.set(m, f.startTime);
  }
  let u = o.get("turn_start");
  if (u === void 0) return;
  let p = x(),
    c = p.current;
  if (CLAUDE_CODE_PROFILE_STARTUP && c === 0) p.turn0Marks = n.map(({
    name: name,
    startTime: startTime
  }) => ({
    name: name,
    startTime: startTime
  }));
  let r = {
    turn_number: c
  };
  if (c === 0) for (let [f, [m, d]] of Object.entries({
    load_initial_messages_ms: ["before_loadInitialMessages", "after_loadInitialMessages"],
    system_prompt_ms: ["before_getSystemPrompt", "after_getSystemPrompt"],
    streaming_setup_ms: ["before_runHeadlessStreaming", "stdin_listen_started"],
    stdin_wait_ms: ["stdin_listen_started", "run_entry"],
    mcp_prewait_ms: ["before_mcp_prewait", "after_mcp_prewait"]
  })) {
    let l = o.get(m),
      S = o.get(d);
    if (l !== void 0 && S !== void 0 && S > l) r[f] = Math.round(S - l);
  }
  let k = o.get("system_message_yielded");
  if (k !== void 0 && c === 0) r.time_to_system_message_ms = Math.round(k);
  let g = o.get("query_started");
  if (g !== void 0) r.time_to_query_start_ms = Math.round(g - u);
  let T = o.get("first_chunk");
  if (T !== void 0) r.time_to_first_response_ms = Math.round(T - u);
  let M = o.get("api_request_sent");
  if (g !== void 0 && M !== void 0) r.query_overhead_ms = Math.round(M - g);
  let h = Q(n);
  if (h.length > 0) {
    r.query_round_count = h.length;
    let f = h.flatMap(item => item.overheadMs === void 0 ? [] : [item.overheadMs]);
    if (f.length > 0) r.query_overhead_first_ms = f[0], r.query_overhead_max_ms = f.reduce((acc, item) => Math.max(acc, item)), r.query_overhead_total_ms = f.reduce((acc, item) => acc + item, 0);
    let m = h[0]?.firstChunkAt;
    if (m !== void 0) r.time_to_first_response_first_round_ms = Math.round(m - u);
  }
  if (r.checkpoint_count = n.length, a.CLAUDE_CODE_ENTRYPOINT) r.entrypoint = pe(ip()) ?? b("other");
  if (L) i("tengu_headless_latency", r);
  if (CLAUDE_CODE_PROFILE_STARTUP) t(`[headlessProfiler] Turn ${c} metrics: ${_(r)}`);
}
function Q(e) {
  let s = [];
  for (let n of e) {
    let o = n.name.startsWith(y) ? n.name.slice(y.length) : n.name,
      u = s.at(-1);
    if (o === "query_started") s.push({
      startedAt: n.startTime
    });else if (u !== void 0 && o === "api_request_sent") u.dispatchedAt ??= n.startTime;else if (u !== void 0 && o === "first_chunk") u.firstChunkAt ??= n.startTime;
  }
  return s.map(item => ({
    ...(item.dispatchedAt !== void 0 && {
      overheadMs: Math.round(item.dispatchedAt - item.startedAt)
    }),
    ...(item.firstChunkAt !== void 0 && {
      firstChunkAt: item.firstChunkAt
    })
  }));
}
function O() {
  return V && we() && !de();
}
var CLAUDE_CODE_PROFILE_STARTUP_2 = a.CLAUDE_CODE_PROFILE_STARTUP,
  et = 0.005,
  G = Math.random() < et,
  P = CLAUDE_CODE_PROFILE_STARTUP_2 || G;
class W {
  memorySnapshots = [];
  startupContext = {};
  bootstrapEntry = "cli";
  onceMarked = new Set();
  reported = !1;
  lateReported = !1;
  firstEmitPhases = new Set();
}
var nt = new z(() => new W());
function A() {
  return ms(nt);
}
var rt = {
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
  ot = new Set(["total_time", "main_imports", "mdm_keychain_await", "init_safe_env", "init_network", "init_tail", "mcp_connect_user", "mcp_connect_connector", "growthbook_init", "preaction_tail", "action_prologue", "action_setup_span", "setup_uds_messaging", "setup_uds_import", "setup_uds_dir", "setup_uds_listen", "setup_uds_publish"]);
if (P) yo("profiler_initialized");
var F = P ? Date.now() : void 0,
  nodeBootMs = P ? Math.round(process.uptime() * 1000) : void 0;
function uL(e) {
  if (!P) return;
  Object.assign(A().startupContext, e);
}
function Yjo() {
  return A().bootstrapEntry;
}
function yo(e, {
  once = !1
} = {}) {
  if (!P) return !1;
  let {
    onceMarked: onceMarked,
    memorySnapshots: memorySnapshots
  } = A();
  if (once) {
    if (onceMarked.has(e)) return !1;
    onceMarked.add(e);
  }
  if (_de().mark(e), CLAUDE_CODE_PROFILE_STARTUP_2) memorySnapshots.push(process.memoryUsage());
  return !0;
}
function U({
  memorySnapshots: memorySnapshots_2
}) {
  if (!CLAUDE_CODE_PROFILE_STARTUP_2) return "Startup profiling not enabled";
  let n = _de().getEntriesByType("mark");
  if (n.length === 0) return "No profiling checkpoints recorded";
  let o = [];
  o.push("=".repeat(80)), o.push("STARTUP PROFILING REPORT"), o.push("=".repeat(80)), o.push("");
  let u = 0;
  for (let [c, r] of n.entries()) o.push(zBr(r.startTime, r.startTime - u, r.name, memorySnapshots_2[c], 8, 7)), u = r.startTime;
  let p = n.at(-1);
  return o.push(""), o.push(`Total startup time: ${fDe(p?.startTime ?? 0)}ms`), o.push("=".repeat(80)), o.join(`
`);
}
function xmn() {
  let e = A();
  if (e.reported) {
    if (!e.lateReported) e.lateReported = !0, q({
      late: !0
    }), H(e);
    return;
  }
  e.reported = !0, q({
    late: !1
  }), H(e);
}
function H(e) {
  if (!CLAUDE_CODE_PROFILE_STARTUP_2) return;
  let s = st(),
    n = tt(s);
  se().mkdirSync(n), LZe(s, U(e), {
    encoding: "utf8",
    flush: !0
  });
  let p = _de().getEntriesByType("mark");
  LZe(it(), JSON.stringify({
    metadata: Y(e, {
      late: !1
    }) ?? {},
    marks: p.map(item => ({
      name: item.name,
      startTime: item.startTime
    })),
    memory: e.memorySnapshots,
    nodeBootMs: nodeBootMs,
    headlessTurn0Marks: N()
  }, null, 2), {
    encoding: "utf8",
    flush: !0
  }), t("Startup profiling report:"), t(U(e));
}
function st() {
  return B(Pe(), "startup-perf", `${K()}.txt`);
}
function it() {
  return B(Pe(), "startup-perf", `${K()}.json`);
}
function Y({
  firstEmitPhases: firstEmitPhases,
  startupContext: startupContext
}, {
  late: late
}) {
  let u = _de().getEntriesByType("mark");
  if (u.length === 0) return null;
  let p = new Map();
  for (let f of u) p.set(f.name, f.startTime);
  let c = p.get("main_after_run"),
    r = {},
    k = 0,
    g = 0;
  for (let [f, [m, d]] of Object.entries(rt)) {
    if (late && firstEmitPhases.has(f)) continue;
    let l = p.get(m),
      S = p.get(d);
    if (l !== void 0 && S !== void 0) {
      let C = Math.round(S - l);
      if (r[`${f}_ms`] = C, k++, !late) firstEmitPhases.add(f);
      if (!ot.has(f) && (c === void 0 || S <= c)) g += C;
    }
  }
  if (late) {
    if (k === 0) return null;
    r.late = !0;
  } else r.late = !1;
  let total_time_ms = r.total_time_ms;
  if (typeof total_time_ms === "number") r.gap_unaccounted_ms = Math.max(0, total_time_ms - g);
  r.free_mem_mb = Math.round(D.freemem() / 1048576), r.load_avg_1m = Math.round((D.loadavg()[0] ?? 0) * 100) / 100, r.checkpoint_count = u.length;
  let CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (CLAUDE_CODE_REMOTE_SESSION_ID) r.ccr_session_id = ye(CLAUDE_CODE_REMOTE_SESSION_ID);
  if (nodeBootMs !== void 0) r.node_boot_ms = nodeBootMs;
  let h = rjt();
  if (h !== void 0 && F !== void 0) r.spawn_to_first_checkpoint_ms = Math.round(F - h);
  return Object.assign(r, startupContext), r;
}
function q({
  late: late_2
} = {
  late: !1
}) {
  if (!G || Dw()) return;
  let s = Y(A(), {
    late: late_2
  });
  if (s === null) return;
  i("tengu_startup_perf", s);
}
export { rjt, _de, fDe, zBr, GBr, wg, VBr, uL, Yjo, yo, xmn };