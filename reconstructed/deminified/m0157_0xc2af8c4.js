// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { al } from "B:/~BUN/root/chunk-f1dj0k6n.js";
import { Yb } from "B:/~BUN/root/chunk-290k5gh5.js";
import { sr } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { $jr, cde, Sl, Pt } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { z } from "B:/~BUN/root/chunk-n8qdr73v.js";
function O2n(e) {
  return `Claude Code refuses the marketplace name "${Pt(e)}": it looks like one of Anthropic's own`;
}
var u = 64;
function s(e) {
  let t = e.length <= u ? al("plugin marketplace remove", e) : null;
  return t === null ? "Remove it in /plugin \u2192 Marketplaces" : `Remove it with: ${t}`;
}
var a = "this also uninstalls its plugins and deletes their saved data",
  d = "if its maintainer renames it, update it instead",
  c = "it is declared in a settings file: to keep it, rename it there";
function o(e) {
  return e.declaredInSettings === !0 ? c : d;
}
function Txo(e, t = {}) {
  return `Reloading won't help. ${s(e)} (${a}; ${o(t)})`;
}
function Cxo(e, t = {}) {
  return [`Claude Code refuses the marketplace name "${Pt(e)}":`, "it looks like one of Anthropic's own. Reloading won't help.", s(e), `(${a};`, `${o(t)}).`];
}
var Rxo = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Reloading won't help. Remove it in /plugin \u2192 Marketplaces (its plugins and their saved data go with it).";
var g = ["available", "required", "auto_install", "not_available"],
  pLt = f(() => z(g));
function Vln(e) {
  return pLt().safeParse(e).data;
}
function Axo(e) {
  if (!1) switch (e) {
    case "managed_setting":
    case "allowlist":
    case "blocklist":
    case "policy_limit":
  }
  return "";
}
function p(e) {
  return null;
}
function m(e, t) {
  return "";
}
var qln = "(not recorded)",
  y = {
    "path-not-found": !1,
    "path-traversal": !1,
    "mcp-config-invalid": !1,
    "lsp-config-invalid": !1,
    "hook-load-failed": !1,
    "component-load-failed": !1,
    "mcpb-download-failed": !1,
    "mcpb-extract-failed": !1,
    "mcpb-invalid-manifest": !1,
    "lsp-server-start-failed": !1,
    "lsp-server-crashed": !1,
    "lsp-request-timeout": !1,
    "lsp-request-failed": !1,
    "plugin-not-installed": !1,
    "marketplace-blocked-by-policy": !1,
    "autoupdate-blocked-by-pinner": !1,
    "autoupdate-deferred-entry-helper": !1,
    "autoupdate-disabled-by-policy": !1,
    "plugin-cache-miss": !0,
    "generic-error": !0,
    "manifest-parse-error": !0,
    "manifest-validation-error": !0,
    "marketplace-not-found": !0,
    "marketplace-load-failed": !0,
    "plugin-not-found": !0,
    "git-auth-failed": !0,
    "git-timeout": !0,
    "network-error": !0,
    "dependency-unsatisfied": !0,
    "dependency-version-unsatisfied": !0
  };
function ghe(e) {
  if (e.type === "path-not-found") return e.plugin === void 0 && e.errno !== void 0;
  if (e.type === "plugin-not-installed") return e.seedHasOtherVersion === !0 || e.registryReadFailed === !0;
  if (e.type === "generic-error") return e.orphan !== !0 && e.refused !== !0;
  if (e.type === "marketplace-load-failed") return e.untrustedReservedName !== !0 && e.nameRefused !== !0 && e.directoryBlockedBy === void 0;
  if (e.type === "marketplace-not-found") return e.registrationHidden === void 0 || e.registrationHidden === "network-location";
  return y[e.type];
}
function pCe(e) {
  return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied";
}
function fCe(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let t = e.source.lastIndexOf("@");
  if (t > 0) return e.source.slice(0, t);
  return;
}
function hhe(e) {
  return e.type === "autoupdate-deferred-entry-helper" || e.type === "autoupdate-disabled-by-policy";
}
function MS(e) {
  return sr(h(e));
}
function h(e) {
  switch (e.type) {
    case "generic-error":
      return cde(e.error);
    case "path-not-found":
      return `Path not found: ${Sl(e.path)} (${Pt(e.component)}${e.errno ? `, ${Pt(e.errno)}` : ""})`;
    case "path-traversal":
      return `Path escapes plugin directory: ${Sl(e.path)} (${Pt(e.component)})${e.reason ? ` \u2014 ${Sl(e.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git authentication failed (${Pt(e.authType)}): ${Sl(e.gitUrl)}`;
    case "git-timeout":
      return `Git ${Pt(e.operation)} timeout: ${Sl(e.gitUrl)}`;
    case "network-error":
      return `Network error: ${Sl(e.url)}${e.details ? ` - ${Pt(e.details)}` : ""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${Pt(e.parseError)}`;
    case "manifest-validation-error":
      return `Manifest validation failed: ${Pt(e.validationErrors.join(", "))}`;
    case "plugin-not-found":
      return `Plugin ${Pt(e.pluginId)} not found in marketplace ${Pt(e.marketplace)}`;
    case "marketplace-not-found":
      return `Marketplace ${Pt(e.marketplace)} not found`;
    case "marketplace-load-failed":
      if (e.nameRefused) return O2n(e.marketplace);
      return `Marketplace ${Pt(e.marketplace)} failed to load: ${Pt(e.reason)}`;
    case "mcp-config-invalid":
      return `MCP server ${Pt(e.serverName)} invalid: ${Pt(e.validationError)}`;
    case "hook-load-failed":
      return `Hook load failed: ${Pt(e.reason)}`;
    case "component-load-failed":
      return `${Pt(e.component)} load failed from ${Sl(e.path)}: ${Pt(e.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${Sl(e.url)}: ${Pt(e.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${Sl(e.mcpbPath)}: ${Pt(e.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${Sl(e.mcpbPath)}: ${Pt(e.validationError)}`;
    case "lsp-config-invalid":
      return `Plugin "${Pt(e.plugin)}" has invalid LSP server config for "${Pt(e.serverName)}": ${Pt(e.validationError)}`;
    case "lsp-server-start-failed":
      return `Plugin "${Pt(e.plugin)}" failed to start LSP server "${Pt(e.serverName)}": ${Pt(e.reason)}`;
    case "lsp-server-crashed":
      if (e.signal) return `Plugin "${Pt(e.plugin)}" LSP server "${Pt(e.serverName)}" crashed with signal ${e.signal}`;
      return `Plugin "${Pt(e.plugin)}" LSP server "${Pt(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${Pt(e.plugin)}" LSP server "${Pt(e.serverName)}" timed out on ${Pt(e.method)} request after ${e.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${Pt(e.plugin)}" LSP server "${Pt(e.serverName)}" ${Pt(e.method)} request failed: ${Pt(e.error)}`;
    case "marketplace-blocked-by-policy":
      {
        let t = p(e);
        if (t !== null) return m(e.plugin, t);
        if (e.blockedByBlocklist) return `Marketplace '${Pt(e.marketplace)}' is blocked by enterprise policy`;
        return `Marketplace '${Pt(e.marketplace)}' is not in the allowed marketplace list`;
      }
    case "dependency-unsatisfied":
      {
        let t = al("plugin install", e.dependency),
          i = e.reason === "not-enabled" ? "disabled \u2014 enable it or remove the dependency" : `not installed \u2014 ${t ? `run \`${t}\`, or ` : ""}check that its marketplace is added`;
        return `Dependency "${Pt(e.dependency)}" is ${i}`;
      }
    case "dependency-version-unsatisfied":
      return `Requires "${Pt(e.dependency)}" ${Pt(e.required)}, installed ${Pt(e.installed ?? "version unknown")}`;
    case "plugin-cache-miss":
      return `Plugin "${Pt(e.plugin)}" not cached at ${Sl(e.installPath)} \u2014 run /plugin to refresh${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;
    case "plugin-not-installed":
      {
        let t = al("plugin install", e.source, "--scope project");
        if (e.installedListHeldNote !== void 0) return `Plugin "${Pt(e.plugin)}" is enabled in project settings, but whether it is installed could not be checked. ${e.installedListHeldNote}`;
        return `Plugin "${Pt(e.plugin)}" is enabled in project settings but isn't installed${t ? ` \u2014 run \`${t}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
      }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return e.message;
    case "autoupdate-blocked-by-pinner":
      {
        let t = e.heldAt ? ` at ${Sl(e.heldAt)}` : "",
          i = Pt(e.blockedBy.join(", ")),
          r = e.disabledPinners.length > 0 ? ` (note: ${Pt(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)` : "";
        return `Autoupdate held "${Pt(e.plugin)}"${t} \u2014 version constraint from ${i}${r}`;
      }
  }
}
function p6(e) {
  return sr(k(e));
}
function k(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest":
      {
        let t = l(e.manifestFields);
        return `Default ${Pt(e.component)}/ folder is ignored because the manifest sets ${t}`;
      }
    case "mcp-server-suppressed-duplicate":
      {
        let t = e.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${Pt(e.duplicateOf.split(":")[1] ?? "?")}"` : `already-configured "${Pt(e.duplicateOf)}"`;
        return `MCP server "${Pt(e.serverName)}" skipped \u2014 same command/URL as ${t}`;
      }
    case "plugin-renamed":
      return e.renamedTo === null ? `Removed from the "${Pt(e.marketplace)}" marketplace` : `Renamed to "${Pt(e.renamedTo)}" in the "${Pt(e.marketplace)}" marketplace`;
    case "lsp-extension-conflict":
      {
        let t = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : void 0,
          i = t ? `plugin "${Pt(t)}"` : `"${Pt(e.activeServer)}"`;
        return `LSP server "${Pt(e.serverName)}" is not used for ${Pt(e.extension)} files \u2014 ${i} already registered a server for that extension`;
      }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return $jr(e.warning);
    case "broken-wikilink":
      return `${Pt(e.raw)} in ${Sl(e.filePath)}:${e.line} doesn't resolve to a skill`;
    case "synced-plugin-shadowed":
      return `"${Pt(e.source)}" from claude.ai not loaded \u2014 "${Pt(e.shadowedBy)}" on this machine has the same name and takes precedence`;
    case "managed-hooks-restricted":
      return `"${Pt(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
    case "managed-plugin-disabled-by-settings":
      return `"${Pt(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${Yb(e.overriddenBy)} settings enable it, which overrides your user setting`;
  }
}
function M2n(e) {
  return sr(P(e));
}
function P(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest":
      {
        let t = l(e.manifestFields);
        if (e.manifestFields.length === 1) return `Remove ${t} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${t} list if you want both`;
        return `Remove ${t} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
      }
    case "project-scope-suppressed-untrusted":
      return "Accept the trust dialog for this workspace, then run /reload-plugins.";
    case "project-scope-server-stripped":
      return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";
    case "broken-wikilink":
      return e.reason === "invalid" ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link" : `Create one of: ${e.tried.map(item => Sl(item)).join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate":
      {
        if (e.duplicateOf.startsWith("plugin:")) {
          let t = e.duplicateOf.split(":")[1] ?? "the other plugin";
          return `Disable plugin "${Pt(t)}" if you want this plugin's version instead`;
        }
        return `Remove "${Pt(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
      }
    case "lsp-extension-conflict":
      {
        let t = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] ?? "the other plugin" : e.activeServer;
        if (t === e.plugin) return `Plugin "${Pt(e.plugin)}" declares two LSP servers for ${Pt(e.extension)} \u2014 remove or reorder "${Pt(e.serverName)}" in its lspServers config`;
        return `Disable plugin "${Pt(t)}" to use this plugin's LSP server for ${Pt(e.extension)} files, or disable "${Pt(e.plugin)}" to silence this warning`;
      }
    case "synced-plugin-shadowed":
      {
        let t = al("plugin enable", e.source);
        return `To use the claude.ai copy instead, ${t ? `run \`${t}\`` : "enable it from /plugin"}, then disable or remove "${Pt(e.shadowedBy)}"`;
      }
    case "managed-hooks-restricted":
      return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
    case "managed-plugin-disabled-by-settings":
      {
        let t = al("plugin enable", e.source);
        return `To run it, ${t ? `run \`${t}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
      }
    case "plugin-renamed":
      return e.renamedTo === null ? `Remove "${Pt(e.source)}" from enabledPlugins if you still see this on the next start` : `If you still see this on the next start, update enabledPlugins to use "${Pt(e.renamedTo)}@${Pt(e.marketplace)}" (managed settings are not rewritten automatically)`;
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${Pt(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${Pt(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
        case "policySettings":
          return "Managed policy can't be overridden locally \u2014 contact your administrator";
        case "userSettings":
          return "";
      }
  }
}
function l(e) {
  return e.map(item => `"${item}"`).join(" and ");
}
export { O2n, Txo, Cxo, Rxo, pLt, Vln, Axo, qln, ghe, pCe, fCe, hhe, MS, p6, M2n };