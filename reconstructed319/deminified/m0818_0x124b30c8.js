// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, Vs, jp, v0 } from "B:/~BUN/root/chunk-game8aqv.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { at, rt, ssn, v, fh, vl, Bd } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Uxt, KM } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _h } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { pse, Wk, kA, Hx } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { ol } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Md, qAe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Xi } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { Cr } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { EC } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { hs, nv } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { ft, bc } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { azi } from "B:/~BUN/root/chunk-78494p3w.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { qr, YVi, JRr } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { ff } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { xh } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { s_s } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { tTt } from "B:/~BUN/root/chunk-9v2yejes.js";
import { sS } from "B:/~BUN/root/chunk-5g14jzvf.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
import { randomUUID as I } from "crypto";
var m = 6,
  _ = 32,
  f = p(() => u({
    text: o().optional()
  }));
function g(e) {
  let r = f().safeParse(e);
  if (!r.success || r.data.text === void 0) return null;
  let s = c(r.data.text);
  return s.length > 0 ? s : null;
}
function U1o(e, r, s) {
  let d = azi("footer_indicator_", rt(r), r);
  for (let n of [e, d]) if (n !== void 0) {
    let t = c(n);
    if (t.length > 0) return t;
  }
  return g(s);
}
function Q2r() {
  let text = U1o(i.CLAUDE_CODE_FOOTER_INDICATOR, at(), Bd()?.footer_indicator);
  return text === null ? void 0 : {
    text: text
  };
}
function c(e) {
  let r = _h(Zn(e)).replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
  return ct(Q(r, _), m);
}
function Bgn(e) {
  return e === ft ? bc : e;
}
var B1o = "interrupt_receipt_v1",
  j1o = "msg_lifecycle_v1",
  y = "request_marker_lists_v1",
  EQs = "lifecycle_wakeup_source_v1",
  A = "interrupt_cancel_queued_v1",
  S = "interrupt_requeue_taken_v1",
  W1o = "interrupt_send_now_v1",
  TQs = "background_tasks_moves_bash_v1",
  CQs = "task_list_restore_v1",
  RQs = "task_list_restored_v1";
var AQs = "mcp_read_resource_v1",
  xQs = "read_file_as_written_v1",
  PQs = "mcp_tool_ui_meta_v1",
  OQs = "reply_gate_policy_v1",
  IQs = "reply_gate_policy_disabled_v1",
  MQs = "reply_gate_policy_refused_v1",
  E = "mcp_call_result_not_for_model_v1";
function Z2r(e) {
  return !e.redactsWhatItPersists && !e.isRemoteTransport;
}
var T = "mcp_call_check_permissions_v1";
function z1o(e) {
  return Z2r(e) && v("tengu_quiet_turnstile", !0);
}
function eVr(e) {
  return [...(Z2r(e) ? [E] : []), ...(z1o(e) ? [T] : [])];
}
var tVr = "start_shell_task_v1";
function iXn(e) {
  return EC() && e.some(item => ht(item, Me)) && x() === "linux" && !ff() && v("tengu_mossy_lathe", !0);
}
var DQs = "mcp_status_no_config_v1",
  G1o = "ui_surface_v1",
  LQs = "prompts_screened_v1",
  V1o = "ui_hooked_v1",
  jgn = "ask_user_question_unanswered_v1";
function NQs() {
  return [];
}
var FQs = [B1o, A, W1o, S, j1o, y, jgn];
function nVr(e) {
  let version = qAe(e.manifest.version);
  return {
    name: e.name,
    path: e.path,
    source: e.source,
    ...(version && {
      version: version
    })
  };
}
function cVt() {
  try {
    return nv() || hs("hipaa");
  } catch (error) {
    return a(error), !0;
  }
}
function Wgn() {
  let e = Cr(),
    memoryPaths;
  if (fh()) {
    if (memoryPaths = {
      auto: vl()
    }, pse()) memoryPaths.team = Wk();
  }
  let messagingSocketPath;
  messagingSocketPath = import.meta.require("B:/~BUN/root/chunk-pwmw9mnb.js").getUdsMessagingSocketPath();
  let sessionId = z();
  return {
    cwd: ol() ?? "",
    sessionId: sessionId,
    apiKeySource: ssn(),
    betas: jp(),
    outputStyle: e?.outputStyle ?? KM,
    analyticsDisabled: sS(),
    productFeedbackDisabled: !gn("allow_product_feedback"),
    memoryPaths: memoryPaths,
    scratchpadPath: kA() ? Hx(sessionId) ?? void 0 : void 0,
    originalCwd: cVt() ? void 0 : Vs() ?? void 0,
    messagingSocketPath: messagingSocketPath,
    workerEpoch: xh() || Uxt() ? i.CLAUDE_CODE_WORKER_EPOCH : void 0,
    powerShellPath: x() === "windows" ? s_s() : void 0,
    footerIndicator: Q2r()
  };
}
function aXn() {
  let e = Wgn();
  return {
    cwd: v0()?.directory?.path ?? "",
    sessionId: e.sessionId,
    apiKeySource: e.apiKeySource,
    betas: void 0,
    outputStyle: e.outputStyle,
    analyticsDisabled: e.analyticsDisabled,
    productFeedbackDisabled: e.productFeedbackDisabled,
    memoryPaths: void 0,
    scratchpadPath: void 0,
    originalCwd: void 0,
    messagingSocketPath: void 0,
    workerEpoch: e.workerEpoch,
    powerShellPath: void 0,
    footerIndicator: void 0
  };
}
function QEt(e) {
  let r = new Set(e.mcpClients.map(item => item.name)),
    s = e.mcpServerErrors.filter(item => !r.has(item.name)),
    terminal_slash_commands = e.commands.filter(item => item.userInvocable !== !1 && item.terminalOriented === !0).map(item => item.name),
    n = {
      type: "system",
      subtype: "init",
      cwd: e.cwd,
      session_id: e.sessionId,
      tools: e.tools.map(item => Bgn(item.name)),
      mcp_servers: e.mcpClients.map(item => ({
        name: item.name,
        status: tTt(item.type),
        ...(item.source !== void 0 && {
          source: item.source
        })
      })),
      model: e.model,
      permissionMode: Md(e.permissionMode),
      slash_commands: e.commands.filter(item => item.userInvocable !== !1).map(item => item.name),
      ...(terminal_slash_commands.length > 0 && {
        terminal_slash_commands: terminal_slash_commands
      }),
      apiKeySource: e.apiKeySource,
      betas: e.betas,
      claude_code_version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      output_style: e.outputStyle,
      agents: e.agents.map(item => item.agentType),
      skills: Xi(e.skills, "name").filter(item => item.userInvocable !== !1).map(item => item.name),
      plugins: e.plugins.map(nVr),
      ...(e.pluginErrors.length > 0 && {
        plugin_errors: e.pluginErrors.map(item => ({
          ...item
        }))
      }),
      ...(e.pluginWarnings.length > 0 && {
        plugin_warnings: e.pluginWarnings.map(item => ({
          ...item
        }))
      }),
      ...(e.capabilities && {
        capabilities: [...e.capabilities]
      }),
      ...(s.length > 0 && {
        mcp_server_errors: s.map(item => ({
          ...item
        }))
      }),
      analytics_disabled: e.analyticsDisabled,
      product_feedback_disabled: e.productFeedbackDisabled,
      uuid: I()
    };
  if (e.memoryPaths) n.memory_paths = {
    ...e.memoryPaths
  };
  if (e.scratchpadPath !== void 0) n.scratchpad_path = e.scratchpadPath;
  if (e.originalCwd !== void 0) n.original_cwd = e.originalCwd;
  if (e.additionalDirectories !== void 0) n.additional_directories = [...e.additionalDirectories];
  if (e.syncedSkillsPath !== void 0) n.synced_skills_path = e.syncedSkillsPath;
  if (e.workerEpoch !== void 0 && e.workerEpoch >= 1) n.worker_epoch = e.workerEpoch;
  if (e.messagingSocketPath !== void 0) n.messaging_socket_path = e.messagingSocketPath;
  if (n.fast_mode_state = e.fastModeState, n.fast_mode_disabled_reason = e.fastModeDisabledReason, e.footerIndicator) n.footer_indicator = {
    ...e.footerIndicator
  };
  if (e.effort !== void 0) n.effort = e.effort;
  if (e.perTurnEffortActive !== void 0) n.per_turn_effort_active = e.perTurnEffortActive;
  if (e.ultrathinkAvailable !== void 0) n.ultrathink_available = e.ultrathinkAvailable;
  if (e.ultrathinkTypedRaises !== void 0) n.ultrathink_typed_raises = e.ultrathinkTypedRaises;
  if (e.viewMode !== void 0) n.view_mode = e.viewMode;
  if (e.powerShellPath !== void 0) n.powershell_path = e.powerShellPath;
  return n;
}
function lXn(e, r) {
  qr("init_emit_ms", performance.now() - r, r), JRr("first_init");
  let s = YVi();
  if (s) e.startup_timing = s;
}
export { U1o, Q2r, Bgn, B1o, j1o, EQs, W1o, TQs, CQs, RQs, AQs, xQs, PQs, OQs, IQs, MQs, Z2r, z1o, eVr, tVr, iXn, DQs, G1o, LQs, V1o, jgn, NQs, FQs, nVr, cVt, Wgn, aXn, QEt, lXn };