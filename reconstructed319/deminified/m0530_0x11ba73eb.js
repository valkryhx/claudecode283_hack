// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Zr, Pme } from "B:/~BUN/root/chunk-eev762xg.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
function lds(n, e) {
  return e && !n.restricted ? {
    ...n,
    restricted: !0
  } : n;
}
function tTe(n) {
  return Zr() || Pme() || [n.permissionMode, n.inheritPermissionMode, n.model, n.fallbackModel, n.clientDataUrl, n.allowOtherModels, n.effort, n.agent, n.agents, n.settings, n.projectConfigRoot, n.appendSystemPrompt, n.appendSystemPromptFile, n.systemPrompt, n.systemPromptFile, n.systemPromptSnapshot, n.replyOnResume, n.permissionPromptTool, n.settingSources, n.managedSettings].some(item => item !== void 0) || Boolean(n.disableSlashCommands) || Boolean(n.includeUnsupportedModels) || n.sessionPersistence === !1 || Boolean(n.dangerouslySkipPermissions) || Boolean(n.allowDangerouslySkipPermissions) || Boolean(n.allowBypass) || Boolean(n.restricted) || Boolean(n.ide) || Boolean(n.strictMcpConfig) || (n.allowedTools ?? []).length > 0 || (n.disallowedTools ?? []).length > 0 || (n.tools ?? []).length > 0 || (n.mcpConfig ?? []).length > 0 || (n.addDir ?? []).length > 0 || (n.pluginDir ?? []).length > 0 || (n.pluginDirNoMcp ?? []).length > 0;
}
function dds(n, e) {
  return (e.runsOnAnotherMachine || e.resumeInCloud !== null) && n.model !== void 0 && !tTe({
    ...n,
    model: void 0
  });
}
function ZPn(n) {
  return tTe({
    ...n,
    permissionMode: void 0,
    inheritPermissionMode: void 0,
    dangerouslySkipPermissions: void 0,
    allowDangerouslySkipPermissions: void 0,
    allowBypass: void 0,
    model: void 0,
    effort: void 0,
    allowedTools: void 0,
    disallowedTools: n.disallowedTools?.filter(e => e !== kt)
  });
}
function cds(n) {
  return [n.systemPrompt, n.systemPromptFile, n.appendSystemPromptFile, n.permissionPromptTool, n.settingSources, n.managedSettings, n.projectConfigRoot].some(item => item !== void 0) || (n.tools ?? []).some(item => item !== "default");
}
var eOn = "a custom system prompt, a tool allowlist, or restricted settings";
export { lds, tTe, dds, ZPn, cds, eOn };