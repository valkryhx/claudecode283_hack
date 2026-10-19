// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, ii, wf, Jgn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ZA } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { pn, Wf } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Ll } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Wl, bhe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { vi } from "B:/~BUN/root/chunk-8z3a373v.js";
import { nr } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { tt, qe, KYn, rp, Zi, Il } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ni, d5 } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { RG, Wb, NE, NT } from "B:/~BUN/root/chunk-c44qc88s.js";
import { sn } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { ht, Op } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { nFs } from "B:/~BUN/root/chunk-z8fd2x5s.js";
import { A_o } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { kr, U$s } from "B:/~BUN/root/chunk-t3p4x0tq.js";
import { nm } from "B:/~BUN/root/chunk-r4y1700s.js";
import { drt } from "B:/~BUN/root/chunk-42k41jw0.js";
import { fy } from "B:/~BUN/root/chunk-cqw1xaqm.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { randomUUID as y } from "crypto";
var c = 6,
  p = 32,
  _ = f(() => u({
    text: o().optional()
  }));
function g(e) {
  let r = _().safeParse(e);
  if (!r.success || r.data.text === void 0) return null;
  let i = m(r.data.text);
  return i.length > 0 ? i : null;
}
function K6r(e, r, i) {
  let s = nFs("footer_indicator_", qe(r), r);
  for (let n of [e, s]) if (n !== void 0) {
    let t = m(n);
    if (t.length > 0) return t;
  }
  return g(i);
}
function $or() {
  let text = K6r(a.CLAUDE_CODE_FOOTER_INDICATOR, tt(), Il()?.footer_indicator);
  return text === null ? void 0 : {
    text: text
  };
}
function m(e) {
  let r = Wf(pn(e)).replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
  return mt(ne(r, p), c);
}
function VVt(e) {
  return e === ht ? Op : e;
}
var Y6r = "interrupt_receipt_v1",
  X6r = "msg_lifecycle_v1",
  S = "request_marker_lists_v1",
  h = "interrupt_cancel_queued_v1",
  J6r = "interrupt_send_now_v1",
  JJo = "task_list_restore_v1",
  QJo = "task_list_restored_v1";
var ZJo = "mcp_read_resource_v1",
  eQo = "mcp_tool_ui_meta_v1",
  Uor = "mcp_call_result_not_for_model_v1";
function Ikn(e) {
  return !e.redactsWhatItPersists && !e.isRemoteTransport;
}
var Q6r = "ui_surface_v1",
  tQo = "prompts_screened_v1",
  Z6r = "ui_hooked_v1",
  nQo = [Y6r, h, J6r, X6r, S];
function Bor(e) {
  let version = bhe(e.manifest.version);
  return {
    name: e.name,
    path: e.path,
    source: e.source,
    ...(version && {
      version: version
    })
  };
}
function e3r() {
  try {
    return d5() || Ni("hipaa");
  } catch (error) {
    return l(error), !0;
  }
}
function qVt() {
  let e = nr(),
    memoryPaths;
  if (rp()) {
    if (memoryPaths = {
      auto: Zi()
    }, RG()) memoryPaths.team = Wb();
  }
  let messagingSocketPath;
  messagingSocketPath = import.meta.require("B:/~BUN/root/chunk-hfmwqyv2.js").getUdsMessagingSocketPath();
  let sessionId = K();
  return {
    cwd: Ll() ?? "",
    sessionId: sessionId,
    apiKeySource: KYn(),
    betas: wf(),
    outputStyle: e?.outputStyle ?? ZA,
    analyticsDisabled: fy(),
    productFeedbackDisabled: !sn("allow_product_feedback"),
    memoryPaths: memoryPaths,
    scratchpadPath: NE() ? NT(sessionId) ?? void 0 : void 0,
    originalCwd: e3r() ? void 0 : ii() ?? void 0,
    messagingSocketPath: messagingSocketPath,
    workerEpoch: nm() ? a.CLAUDE_CODE_WORKER_EPOCH : void 0,
    powerShellPath: I() === "windows" ? A_o() : void 0,
    footerIndicator: $or()
  };
}
function Mkn() {
  let e = qVt();
  return {
    cwd: Jgn()?.directory?.path ?? "",
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
function lrt(e) {
  let r = new Set(e.mcpClients.map(item => item.name)),
    i = e.mcpServerErrors.filter(item => !r.has(item.name)),
    terminal_slash_commands = e.commands.filter(item => item.userInvocable !== !1 && item.terminalOriented === !0).map(item => item.name),
    n = {
      type: "system",
      subtype: "init",
      cwd: e.cwd,
      session_id: e.sessionId,
      tools: e.tools.map(item => VVt(item.name)),
      mcp_servers: e.mcpClients.map(item => ({
        name: item.name,
        status: drt(item.type),
        ...(item.source !== void 0 && {
          source: item.source
        })
      })),
      model: e.model,
      permissionMode: Wl(e.permissionMode),
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
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      output_style: e.outputStyle,
      agents: e.agents.map(item => item.agentType),
      skills: vi(e.skills, "name").filter(item => item.userInvocable !== !1).map(item => item.name),
      plugins: e.plugins.map(Bor),
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
      ...(i.length > 0 && {
        mcp_server_errors: i.map(item => ({
          ...item
        }))
      }),
      analytics_disabled: e.analyticsDisabled,
      product_feedback_disabled: e.productFeedbackDisabled,
      uuid: y()
    };
  if (e.memoryPaths) n.memory_paths = {
    ...e.memoryPaths
  };
  if (e.scratchpadPath !== void 0) n.scratchpad_path = e.scratchpadPath;
  if (e.originalCwd !== void 0) n.original_cwd = e.originalCwd;
  if (e.additionalDirectories !== void 0) n.additional_directories = [...e.additionalDirectories];
  if (e.workerEpoch !== void 0 && e.workerEpoch >= 1) n.worker_epoch = e.workerEpoch;
  if (e.messagingSocketPath !== void 0) n.messaging_socket_path = e.messagingSocketPath;
  if (n.fast_mode_state = e.fastModeState, n.fast_mode_disabled_reason = e.fastModeDisabledReason, e.footerIndicator) n.footer_indicator = {
    ...e.footerIndicator
  };
  if (e.effort !== void 0) n.effort = e.effort;
  if (e.perTurnEffortActive !== void 0) n.per_turn_effort_active = e.perTurnEffortActive;
  if (e.viewMode !== void 0) n.view_mode = e.viewMode;
  if (e.powerShellPath !== void 0) n.powershell_path = e.powerShellPath;
  return n;
}
function Dkn(e, r) {
  kr("init_emit_ms", performance.now() - r, r);
  let i = U$s();
  if (i) e.startup_timing = i;
}
function SY(e) {
  if (typeof e === "string") return e;
  let r = e.at(-1);
  return r?.type === "text" ? r.text : null;
}
export { K6r, $or, VVt, Y6r, X6r, J6r, JJo, QJo, ZJo, eQo, Uor, Ikn, Q6r, tQo, Z6r, nQo, Bor, e3r, qVt, Mkn, lrt, Dkn, SY };