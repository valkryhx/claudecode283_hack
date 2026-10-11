// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Gg } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ic } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Vq } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Ct, Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { i6, Aln, wv } from "B:/~BUN/root/chunk-6bn0bbdx.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
function qae() {
  return !1;
}
function uin() {
  if (Gg()) return !1;
  return !0;
}
var ab = [Ue, St];
function ES() {
  let CLAUDE_CODE_USE_POWERSHELL_TOOL = a.CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if (O() !== "windows") return CLAUDE_CODE_USE_POWERSHELL_TOOL === !0;
  if (CLAUDE_CODE_USE_POWERSHELL_TOOL !== void 0) return CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if (Vq() === null) return !0;
  return x("tengu_cobalt_ridge", !1);
}
function ba() {
  if (O() !== "windows") return !0;
  return Vq() !== null;
}
var dPr = `Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`;
function HB() {
  return ba() ? "bash" : "powershell";
}
var u = 120000,
  f = 600000;
function uTe(e = process.env) {
  let BASH_DEFAULT_TIMEOUT_MS = e.BASH_DEFAULT_TIMEOUT_MS;
  if (BASH_DEFAULT_TIMEOUT_MS) {
    let o = Ic(BASH_DEFAULT_TIMEOUT_MS);
    if (!isNaN(o) && o > 0) return o;
  }
  return u;
}
function pTe(e = process.env) {
  let BASH_MAX_TIMEOUT_MS = e.BASH_MAX_TIMEOUT_MS;
  if (BASH_MAX_TIMEOUT_MS) {
    let o = Ic(BASH_MAX_TIMEOUT_MS);
    if (!isNaN(o) && o > 0) return Math.max(o, uTe(e));
  }
  return Math.max(f, uTe(e));
}
var c = 2000;
function pin({
  requestedTimeoutMs: requestedTimeoutMs,
  isMainAgent: isMainAgent,
  canAutoBackground: canAutoBackground,
  env = process.env
}) {
  if (!isMainAgent || !canAutoBackground) return requestedTimeoutMs;
  let CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS = env.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS) return requestedTimeoutMs;
  let r = Ic(CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS);
  if (isNaN(r) || r <= 0) return requestedTimeoutMs;
  return Math.min(requestedTimeoutMs, Math.max(r, c));
}
function p() {
  return `
- If this is an existing file, you MUST use the ${at} tool first to read the file's contents. This tool will fail if you did not read the file first.`;
}
function d() {
  return `
- If this is an existing file outside the working directory, you MUST use the ${at} tool first to read the file's contents. This tool will fail if you did not.`;
}
function ZTo(model, leanPrompt, preReadLineDropped) {
  let n = !i6() && Aln({
    model: model,
    preReadLineDropped: preReadLineDropped
  });
  if (wv({
    model: model,
    leanPrompt: leanPrompt
  })) {
    let s = n ? ` Overwriting an existing file outside the working directory that you haven't ${at} will fail.` : ` Overwriting an existing file you haven't ${at} will fail.`;
    return `Writes a file to the local filesystem, overwriting if one exists.

When to use: creating a new file, or fully replacing one you've already ${at}.${s} For partial changes, use ${Ct} instead.`;
  }
  return `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.${n ? d() : p()}
- Prefer the Edit tool for modifying existing files \u2014 it only sends the diff. Only use this tool to create new files or for complete rewrites.
- NEVER create documentation files (*.md) or README files unless explicitly requested by the User.
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.`;
}
var Mat = `# Reporting outcomes

Report what actually happened, not what you intended. When you say something is done, sent, saved, fixed, or verified, that claim must rest on a result you observed in this session \u2014 tool output, the file as it now reads, the page as it now loads \u2014 not on what the step should have produced. If you did not check, say you did not check. If any step failed, was skipped, or came back different from what you expected, say so in the first sentence of your report, before anything else, even when the rest of the work succeeded. Never quietly work around a failure in a way that makes it look resolved; a problem the user can see is recoverable, one your summary hides is not. When you stop before the task is complete, your first line says so plainly and names what is left. Do not describe partial work as done, and do not let a summary read as more certain than the evidence behind it.`;
var dTe = "x-anthropic-billing-header:";
function JTo(e) {
  let t = e.text;
  return typeof t === "string" && t.startsWith(dTe);
}
function UV(e) {
  let t = e.text;
  return typeof t === "string" && (t.startsWith(dTe) || t === Mat);
}
function i0(e) {
  let t = Bun.hash(b(e));
  return typeof t === "bigint" ? Number(t & 0xffffffffn) : t;
}
var h = new Set(["type", "text", "thinking", "id", "tool_use_id", "name", "input", "source", "content", "cache_control"]);
function i(e, t) {
  if (typeof e === "string") {
    t.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return;
  }
  switch (e.type) {
    case "text":
    case "image":
    case "document":
    case "search_result":
    case "thinking":
    case "redacted_thinking":
    case "tool_use":
    case "tool_result":
    case "tool_reference":
    case "server_tool_use":
    case "web_search_tool_result":
    case "web_fetch_tool_result":
    case "advisor_tool_result":
    case "code_execution_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "container_upload":
    case "compaction":
    case "mid_conv_system":
    case "fallback":
      break;
    default:
      {
        let n = e;
        break;
      }
  }
  if (t.push(e.type), "text" in e && typeof e.text === "string") t.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") t.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") t.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") t.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") t.push("n", e.name);
  if ("input" in e && e.input !== void 0) t.push("p", b(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let source = e.source;
    if (t.push("m", String(source.type ?? ""), String(source.media_type ?? "")), typeof source.data === "string") t.push(String(source.data.length));
  }
  let o = "content" in e ? e.content : void 0;
  if (Array.isArray(o)) {
    t.push("[", String(o.length));
    for (let n of o) i(n, t);
    t.push("]");
  } else if (typeof o === "string") t.push("c", String(o.length), o.slice(0, 32), o.slice(-32));
  for (let [n, s] of Object.entries(e)) {
    if (h.has(n) || s === void 0) continue;
    let r = typeof s === "string" ? s : b(s);
    t.push(n, r.length > 256 ? `len:${r.length}` : r);
  }
}
var Dat = -1;
function QTo(e) {
  return e.map(item => {
    if ((item.type === "api_system" || item.type === "user") && item.ephemeral) return Dat;
    let o = [item.message.role];
    if (item.type === "api_system" && item.outputConfig !== void 0) {
      let timing = item.outputConfig.timing;
      o.push(`oc:${item.outputConfig.effort ?? ""}${timing ? `:${timing.now}` : ""}`);
    }
    let content = item.message.content;
    if (Array.isArray(content)) {
      o.push(String(content.length));
      for (let r of content) i(r, o);
    } else i(content, o);
    let s = Bun.hash(o.join("|"));
    return typeof s === "bigint" ? Number(s & 0xffffffffn) : s;
  });
}
var ox = "WaitForMcpServers";
function uPr() {
  return ["Wait for MCP servers that are still connecting and whose tools are not", "yet in your tool list. Pass `servers` to wait for specific ones, or omit", "it to wait for all pending servers (once none is pending, a call without", "`servers` reports any server that failed to connect or is not configured).", "", ...["If the user's request needs tools from a still-connecting server, call this", "tool to wait for it. Once it connects, its tools will be added to your tool", "list and you can use them directly. Returns ready=true when servers are", "ready, ready=false if they failed to connect, need authentication, or are", "disabled."], "", "You do not need to ask the user for confirmation to use this tool."].join(`
`);
}
export { qae, uin, ab, ES, ba, dPr, HB, Mat, dTe, JTo, UV, i0, Dat, QTo, uTe, pTe, pin, ZTo, ox, uPr };