// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Tr, YY } from "B:/~BUN/root/chunk-4p6z9qq1.js";
function Akr(n, e) {
  return e && !n.restricted ? {
    ...n,
    restricted: !0
  } : n;
}
function vme(n) {
  return Tr() || YY() || [n.permissionMode, n.inheritPermissionMode, n.model, n.fallbackModel, n.clientDataUrl, n.effort, n.agent, n.agents, n.settings, n.projectConfigRoot, n.appendSystemPrompt, n.appendSystemPromptFile, n.systemPrompt, n.systemPromptFile, n.systemPromptSnapshot, n.replyOnResume, n.permissionPromptTool, n.settingSources, n.managedSettings].some(item => item !== void 0) || Boolean(n.disableSlashCommands) || n.sessionPersistence === !1 || Boolean(n.dangerouslySkipPermissions) || Boolean(n.allowDangerouslySkipPermissions) || Boolean(n.allowBypass) || Boolean(n.restricted) || Boolean(n.ide) || Boolean(n.strictMcpConfig) || (n.allowedTools ?? []).length > 0 || (n.disallowedTools ?? []).length > 0 || (n.tools ?? []).length > 0 || (n.mcpConfig ?? []).length > 0 || (n.addDir ?? []).length > 0 || (n.pluginDir ?? []).length > 0 || (n.pluginDirNoMcp ?? []).length > 0;
}
function xkr(n) {
  return [n.systemPrompt, n.systemPromptFile, n.appendSystemPromptFile, n.permissionPromptTool, n.settingSources, n.managedSettings, n.projectConfigRoot].some(item => item !== void 0) || (n.tools ?? []).some(item => item !== "default");
}
var iPt = "a custom system prompt, a tool allowlist, or restricted settings";
export { Akr, vme, xkr, iPt };