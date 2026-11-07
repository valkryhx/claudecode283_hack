// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { ye, Sh } from "B:/~BUN/root/chunk-game8aqv.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vk, Ek } from "B:/~BUN/root/chunk-65j2302z.js";
import { ln } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { s_e } from "B:/~BUN/root/chunk-cj2cn5y2.js";
import { uee } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { Y0e } from "B:/~BUN/root/chunk-4ffx6rrs.js";
import { n5e } from "B:/~BUN/root/chunk-6c65wqph.js";
import { IAt } from "B:/~BUN/root/chunk-xq04c9n0.js";
import { ap } from "B:/~BUN/root/chunk-m749kjym.js";
import { yw } from "B:/~BUN/root/chunk-x0zaah42.js";
function bvn(e) {
  if (s_e(e.client, e.name) !== void 0) return "file_reference";
  if (IAt(e.meta) !== void 0 && Y0e.some(item => uee(e.client, item))) return "listed_mark";
  if (yw(e.client.config) === void 0) return;
  let {
    marked: marked,
    unfilled: unfilled,
    everyCall: everyCall
  } = n5e(e.schema);
  return marked.length > 0 || unfilled.length > 0 || everyCall ? "schema_mark" : void 0;
}
function Jfi(e) {
  return {
    behavior: "ask",
    message: e,
    suppressAlwaysAllowRule: !0,
    defaultToNo: !0,
    personOnly: !0,
    localDisplayOnly: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: e,
      classifierApprovable: !1,
      circuitBreaker: "connectorFileSend"
    }
  };
}
function mAt() {
  return !ye() && a() === void 0;
}
function a() {
  let e = ap(),
    o = e === void 0 ? i.CLAUDE_JOB_DIR : e.CLAUDE_JOB_DIR?.trim();
  if (i.CLAUDE_CODE_SESSION_KIND !== void 0 || o) return "background";
  let s = vk() || (e === void 0 ? i.CLAUDE_CODE_CHILD_SESSION : Pe(e.CLAUDE_CODE_CHILD_SESSION)),
    n = Ek() || (e === void 0 ? i.CLAUDECODE : Pe(e.CLAUDECODE));
  if (s || n && ((e === void 0 ? i.CLAUDE_CODE_SKIP_PROMPT_HISTORY : Pe(e.CLAUDE_CODE_SKIP_PROMPT_HISTORY)) || !process.stdin.isTTY && !process.stdout.isTTY)) return "nested";
  return Sh() !== void 0 ? "teammate" : void 0;
}
var p = "sending a file to a connector needs the user to allow it when Claude Code asks at its own prompt in a terminal, and this session cannot ask there (for example, it was started with -p or by another program). To send a file, the user would at least have to start Claude Code in a terminal themselves, without -p",
  m = {
    background: "sending a file to a connector needs the user to allow it when Claude Code asks at its own prompt in a terminal, and this session's environment marks it as a background job or as started inside one (for example, with claude --bg), where another program may answer that prompt, so an Allow given there does not count. To send a file, the user would at least have to start Claude Code in a terminal whose environment does not carry a background job's marks. A terminal can carry them without being inside a job: for example, a window of a tmux server started inside such a job, or a shell whose own start-up files set them",
    nested: "sending a file to a connector needs the user to allow it when Claude Code asks at its own prompt in a terminal, and this session's environment marks it as started from inside another Claude Code session (by one of its tool calls, or in a pane of its terminal tool), where a program may be the one typing, so an Allow given there does not count. To send a file, the user would at least have to start Claude Code from a fresh terminal that no Claude Code session opened. A terminal can bear such marks without a session having opened it: for example, any window of a tmux server that a session's tool once started, and with some settings an IDE's built-in terminal",
    teammate: "sending a file to a connector needs the user to allow it when Claude Code asks at its own prompt in a terminal, and this session is a teammate that another Claude Code session started in a pane of its own, where nobody may be watching and other programs can type, so an Allow given there does not count. To send a file, the user would at least have to ask for it in a session they started in a terminal themselves"
  };
function qsr() {
  let e = ye() ? void 0 : a();
  return e === void 0 ? p : m[e];
}
function Qfi(e, o, s) {
  let n = e.permissionPhase?.pipeline,
    t = e.permissionPhase?.checked,
    d = s !== void 0 && !ln(s, e.input);
  if (!(!d && n !== void 0 && n.result.behavior === "ask" && n.result.personOnly === !0 && ln(n.input, e.input) && t !== void 0 && ln(t.input, e.input) && t.result.behavior === "ask" && t.result.personOnly === !0 && t.result.decisionReason?.type === "safetyCheck" && ln(n.result.decisionReason, t.result.decisionReason))) {
    let l = `sending files to a connector takes an Allow given ${u}`;
    if (r(n?.result)) {
      if (d || !ln(n?.input, e.input)) return {
        error: `The arguments of this call changed after it was approved, and the approval was for the arguments the prompt showed. ${o}`,
        code: "input_changed"
      };
      return t !== void 0 || n?.result.behavior === "ask" && n.result.decisionReason?.type === "hook" ? {
        error: `No file was sent: the question answered for this call was not the upload prompt that says what the call sends and to which connector (a plugin's permission check may have asked in its place), and only an Allow on that prompt sends files. ${o}`,
        code: "not_asked"
      } : {
        error: `The files could not be sent because of a bug in Claude Code (it kept no record of the files the approval prompt named); the user cannot fix this. ${o}`,
        code: "prompt_record_missing"
      };
    }
    if (r(n?.answered)) return {
      error: `No file was sent: a PermissionRequest hook approved this call, and ${l}. ${o}`,
      code: "not_asked"
    };
    if (n?.result.behavior === "allow" && n.result.decisionReason?.type === "mode" && n.result.decisionReason.mode !== "auto") return {
      error: `No file was sent: the current permission mode skips the approval that sending files to a connector needs. ${o} A permission mode that asks before tool calls raises it.`,
      code: "not_asked"
    };
    if (n !== void 0 && r(t?.result) && ln(t?.input, e.input)) return {
      error: `No file was sent: something in place of the user, such as a plugin's permission check, approved this call, and ${l}. ${o}`,
      code: "not_asked"
    };
    return {
      error: `No file was sent: this call was allowed without the approval prompt that sending files to a connector needs. ${o}`,
      code: "not_asked"
    };
  }
  if (e.permissionSurface !== "host_dialog") return {
    error: `No file was sent: this call was approved outside Claude Code's own permission prompt on this computer (for example by an app's saved "always allow", an IDE extension, another device, or a program that answers prompts). Files go to a connector only after an Allow given ${u}. ${o}`,
    code: "not_approved_here"
  };
  if (a() !== void 0) return {
    error: `No file was sent: ${qsr()}. ${o}`,
    code: "no_prompt_here"
  };
  return;
}
var u = "at Claude Code's prompt in a terminal";
function r(e) {
  return e?.behavior === "ask" && e.personOnly === !0;
}
export { bvn, Jfi, mAt, qsr, Qfi };