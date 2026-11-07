// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
var Ta = "claude-in-chrome",
  ODr = "javascript_tool";
function uT(e) {
  return bn(e) === Ta;
}
var t = "--claude-in-chrome-mcp";
function h0s(e) {
  if (e.type !== void 0 && e.type !== "stdio") return !1;
  return (e.command?.includes(t) ?? !1) || (e.args?.some(o => o.includes(t)) ?? !1);
}
var cJi = ["file_upload", "browser_batch"],
  NUt = [ODr, "read_page", "find", "form_input", "computer", "browser_batch", "navigate", "resize_window", "gif_creator", "upload_image", "get_page_text", "tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "read_console_messages", "read_network_requests", "shortcuts_list", "shortcuts_execute", "file_upload", "switch_browser", "list_connected_browsers", "select_browser"],
  zFe = "file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.",
  uJi = "Nothing was uploaded, and nothing else in this call ran. An upload may not run without a person's approval, and uploads can't be approved here yet. Repeating the call won't help. Ask the user to choose the file in their browser themselves.",
  IDr = "file_upload cannot run inside browser_batch in this session, and nothing in this call ran. If file_upload is among your tools, call it on its own.",
  fJi = "browser_batch isn't available right now, and nothing in this call ran. Make each action its own call instead. Don't retry it as a batch.";
function GFe() {
  return {
    type: "stdio",
    command: process.execPath,
    args: [t],
    scope: "dynamic"
  };
}
export { Ta, ODr, uT, h0s, cJi, NUt, zFe, uJi, IDr, fJi, GFe };