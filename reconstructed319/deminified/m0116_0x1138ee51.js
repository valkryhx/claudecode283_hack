// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, ye, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { yf } from "B:/~BUN/root/chunk-65j2302z.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var I = ["init_after_graceful_shutdown", "init_network_configured", "preAction_after_init", "preAction_after_migrations", "preAction_after_remote_settings", "action_handler_start", "action_before_mcp_policy_wait", "action_before_permission_context", "action_after_input_prompt", "action_before_setup", "action_after_policy_limits_cold_await", "action_after_setup", "action_commands_loaded", "action_mcp_configs_loaded", "action_after_plugins_init", "before_validateForceLoginOrg", "before_connectMcp", "after_connectMcp_claudeai", "before_print_import", "after_print_import", "runHeadless_entry", "after_grove_check", "before_sandbox_init", "after_sandbox_init", "before_loadInitialMessages", "after_loadInitialMessages", "after_modelStrings", "before_runHeadlessStreaming", "stdin_listen_started"],
  C = new Set(I);
function x(e) {
  return C.has(e);
}
var tHr = "startup_mark";
var Fna = 64;
var d = he({
  writeLine: void 0,
  ended: !1,
  written: new Set()
}, e => {
  e.writeLine = void 0, e.ended = !1, e.written.clear();
});
function Hna(e) {
  if (d.ended || d.writeLine !== void 0) return;
  d.writeLine = e;
}
function yjt(e) {
  if (d.writeLine === void 0) return;
  if (!x(e) || d.written.has(e)) return;
  d.written.add(e);
  try {
    d.writeLine(`{"type":"keep_alive","${tHr}":"${e}"}
`);
  } catch (error) {
    ljs(), t(`The start-up mark report ended, because its writer threw: ${error instanceof Error && typeof error.message === "string" ? error.message : typeof error}`, {
      level: "error"
    });
  }
}
function ljs() {
  d.writeLine = void 0, d.ended = !0;
}
var y = null;
function fme() {
  if (!y) y = je("perf_hooks").performance;
  return y;
}
function i$e(e) {
  return e.toFixed(3);
}
function nHr(e, n, r, s, f, M, c = "") {
  let o = s ? ` | RSS: ${en(s.rss)}, Heap: ${en(s.heapUsed)}` : "";
  return `[+${i$e(e).padStart(f)}ms] (+${i$e(n).padStart(M)}ms) ${r}${c}${o}`;
}
var CLAUDE_CODE_PROFILE_STARTUP = i.CLAUDE_CODE_PROFILE_STARTUP,
  D = 0.05,
  A = Math.random() < D;
function $na() {
  return A;
}
var U = CLAUDE_CODE_PROFILE_STARTUP || A,
  g = "headless_";
class E {
  current = -1;
  turn0Marks = [];
  advance() {
    this.current++;
  }
}
var F = new W(() => new E());
function R() {
  return F.of(H().host);
}
function Una() {
  return R().turn0Marks;
}
function O() {
  let e = fme(),
    n = e.getEntriesByType("mark");
  for (let r of n) if (r.name.startsWith(g)) e.clearMarks(r.name);
}
function IPo() {
  if (!v()) return;
  let e = R();
  if (e.advance(), O(), fme().mark(`${g}turn_start`), CLAUDE_CODE_PROFILE_STARTUP) t(`[headlessProfiler] Started turn ${e.current}`);
}
function vy(e) {
  if (yjt(e), !v()) return;
  let n = fme();
  if (n.mark(`${g}${e}`), CLAUDE_CODE_PROFILE_STARTUP) t(`[headlessProfiler] Checkpoint: ${e} at ${n.now().toFixed(1)}ms`);
}
function MPo() {
  if (!v()) return;
  let r = fme().getEntriesByType("mark").filter(item => item.name.startsWith(g));
  if (r.length === 0) return;
  let s = new Map();
  for (let a of r) {
    let u = a.name.slice(g.length);
    s.set(u, a.startTime);
  }
  let f = s.get("turn_start");
  if (f === void 0) return;
  let M = R(),
    c = M.current;
  if (CLAUDE_CODE_PROFILE_STARTUP && c === 0) M.turn0Marks = r.map(({
    name: name,
    startTime: startTime
  }) => ({
    name: name,
    startTime: startTime
  }));
  let o = {
    turn_number: c
  };
  if (c === 0) for (let [a, [u, m]] of Object.entries({
    load_initial_messages_ms: ["before_loadInitialMessages", "after_loadInitialMessages"],
    system_prompt_ms: ["before_getSystemPrompt", "after_getSystemPrompt"],
    streaming_setup_ms: ["before_runHeadlessStreaming", "stdin_listen_started"],
    stdin_wait_ms: ["stdin_listen_started", "run_entry"],
    mcp_prewait_ms: ["before_mcp_prewait", "after_mcp_prewait"],
    grove_check_ms: ["before_grove_check", "after_grove_check"]
  })) {
    let p = s.get(u),
      T = s.get(m);
    if (p !== void 0 && T !== void 0 && T > p) o[a] = Math.round(T - p);
  }
  let w = s.get("system_message_yielded");
  if (w !== void 0 && c === 0) o.time_to_system_message_ms = Math.round(w);
  let S = s.get("query_started");
  if (S !== void 0) o.time_to_query_start_ms = Math.round(S - f);
  let P = s.get("first_chunk");
  if (P !== void 0) o.time_to_first_response_ms = Math.round(P - f);
  let L = s.get("api_request_sent");
  if (S !== void 0 && L !== void 0) o.query_overhead_ms = Math.round(L - S);
  let k = K(r);
  if (k.length > 0) {
    o.query_round_count = k.length;
    let a = k.flatMap(item => item.overheadMs === void 0 ? [] : [item.overheadMs]);
    if (a.length > 0) o.query_overhead_first_ms = a[0], o.query_overhead_max_ms = a.reduce((acc, item) => Math.max(acc, item)), o.query_overhead_total_ms = a.reduce((acc, item) => acc + item, 0);
    let u = k[0]?.firstChunkAt;
    if (u !== void 0) o.time_to_first_response_first_round_ms = Math.round(u - f);
  }
  if (o.checkpoint_count = r.length, i.CLAUDE_CODE_ENTRYPOINT) o.entrypoint = de(yf()) ?? b("other");
  if (A) l("tengu_headless_latency", o);
  if (CLAUDE_CODE_PROFILE_STARTUP) t(`[headlessProfiler] Turn ${c} metrics: ${_(o)}`);
}
function K(e) {
  let n = [];
  for (let r of e) {
    let s = r.name.startsWith(g) ? r.name.slice(g.length) : r.name,
      f = n.at(-1);
    if (s === "query_started") n.push({
      startedAt: r.startTime
    });else if (f !== void 0 && s === "api_request_sent") f.dispatchedAt ??= r.startTime;else if (f !== void 0 && s === "first_chunk") f.firstChunkAt ??= r.startTime;
  }
  return n.map(item => ({
    ...(item.dispatchedAt !== void 0 && {
      overheadMs: Math.round(item.dispatchedAt - item.startedAt)
    }),
    ...(item.firstChunkAt !== void 0 && {
      firstChunkAt: item.firstChunkAt
    })
  }));
}
function v() {
  return U && ye() && !q();
}
export { tHr, Fna, Hna, yjt, ljs, fme, i$e, nHr, $na, Una, IPo, vy, MPo };