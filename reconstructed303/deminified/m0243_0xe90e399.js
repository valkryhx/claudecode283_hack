// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ll, vl, hn, rT, mUo, Wn } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { J, FWo, z4, z_, _n, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ga, wjt, mk, nt, hJn } from "B:/~BUN/root/chunk-nggrknsv.js";
import { f1t, k5, Xs, Ge } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { Zk } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { o, u, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { tc, W2 } from "B:/~BUN/root/chunk-eya7pdzx.js";
function bNt(e) {
  if (rVn()) return `Claude Code won't load marketplace "${Ge(e)}": its name looks like the name of one of Anthropic's own marketplaces`;
  return `Claude Code refuses the marketplace name "${Ge(e)}": it looks like one of Anthropic's own`;
}
function nVn(e, n) {
  return `Failed to load marketplace "${Ge(e)}": ${n}`;
}
function rVn() {
  return !1;
}
var M = 64;
function h(e, n = "it") {
  let i = e.length <= M ? ll("plugin marketplace remove", e) : null;
  return i === null ? `Remove ${n} in /plugin \u2192 Marketplaces` : `Remove ${n} with: ${i}`;
}
var E = "this also uninstalls its plugins and deletes their data, options and secrets",
  S = "if its maintainer renames it, update it instead",
  w = ["Removing it is the only fix. That also uninstalls its plugins and deletes what they saved:", "their data, options and secrets."],
  O = "After removing it, you can add it again from the same source; if that is refused, its maintainer has to rename it first.",
  B = ["It was added from a settings file. To keep it, do these in order (if your organization's managed settings add it, an administrator does step 1):", "1. In each settings file that lists it under extraKnownMarketplaces, rename its entry (the key and its source.name) to a plain-ASCII name that doesn't look like one of Anthropic's."],
  F = "(this also uninstalls its plugins and deletes their data, options and secrets).",
  j = "3. Start Claude Code again, in that project's folder if it is a project's settings file, then install its plugins from the renamed one.";
function v(e) {
  return [...B, `2. ${h(e, "the old name")}`, F, j];
}
function _(e) {
  return [...w, O, h(e)];
}
function oVn(e, n = {}) {
  if (n.declaredInSettings === !0) return `Reloading won't help. ${v(e).join(" ")}`;
  if (rVn()) return `Reloading won't help. ${_(e).join(" ")}`;
  return `Reloading won't help. ${h(e)} (${E}; ${S})`;
}
function xRo(e, n = {}) {
  let i = rVn(),
    s = i ? [`Claude Code won't load marketplace "${Ge(e)}":`, "its name looks like the name of one of Anthropic's own marketplaces. Reloading won't help."] : [`Claude Code refuses the marketplace name "${Ge(e)}":`, "it looks like one of Anthropic's own. Reloading won't help."];
  if (n.declaredInSettings === !0) return [...s, ...v(e)];
  if (i) return [...s, ..._(e)];
  return [...s, h(e), `(${E};`, `${S}).`];
}
var PRo = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Reloading won't help. Remove it in /plugin \u2192 Marketplaces (deletes its plugins and their data, options and secrets).",
  G = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Rename it in its settings file, remove the old name in /plugin \u2192 Marketplaces (plugins and data go), then restart.";
function ORo(e) {
  return e ? G : PRo;
}
var y = (e, n) => `${e} only while "${Ge(n)}" is disabled. Disable or uninstall the copy you don't need`;
var P1e = {
  "network-location": "re-add the marketplace (one added from a folder or file must be re-added from a copy on this computer), or, to trust a folder on a network drive, declare it under extraKnownMarketplaces in user or managed settings",
  source: "re-add the marketplace with a supported source",
  declaration: "re-add the marketplace from the source that entry lists, or change the entry"
};
var Y = ["available", "required", "auto_install", "not_available"],
  sVn = f(() => U(Y));
function LPr(e) {
  return sVn().safeParse(e).data;
}
function IRo(e, n, i, s, l = !1) {
  {
    let d = Ge(e),
      r = n && n.length > 0 ? `now lists it as ${n.map(item => Ge(item)).join(" or ")}` : s !== void 0 ? `still lists it, but Claude Code cannot install it (${Ge(s)})` : i ? "now lists a different repository under that name" : l ? "does not list it (or your organization blocks it)" : "no longer lists it (removed, or blocked by your organization)";
    return l ? `Plugin "${d}" is not loaded: installed_plugins.json could not be read, so its install could not be checked, and the Anthropic Directory ${r}` : `Plugin "${d}" is not loaded: the Anthropic Directory ${r}`;
  }
  return "";
}
function SNt(e) {
  return e.type === "marketplace-load-failed" && e.reason === "cache-miss" && e.marketplace === hn && e.directoryBlockedBy === void 0;
}
var wNt = `Run /reload-plugins, or: claude plugin marketplace update ${hn}`;
function psn(e) {
  if (e.type === "marketplace-not-found" && e.marketplace !== hn && rT(e.marketplace) && e.registrationHidden !== void 0) {
    let n = mUo(e.marketplace);
    return n === null ? "Remove that entry from known_marketplaces.json, then uninstall this plugin if it is still listed" : `Remove it: ${n}`;
  }
  return;
}
function MRo(e) {
  switch (e) {
    case "managed_setting":
      return "Your administrator turned it off with disablePluginDirectory in managed settings.";
    case "allowlist":
      return "Your administrator's marketplace allowlist (strictKnownMarketplaces) does not include the Anthropic Directory.";
    case "blocklist":
      return "Your administrator listed it in blockedMarketplaces in managed settings.";
    case "policy_limit":
      return "Your organization's policy does not allow it.";
  }
  return "";
}
function NPr(e) {
  if (e.directoryDisabledByOrganization) return "managed_setting";
  if (e.marketplace !== hn || e.sourceUnverifiable) return null;
  return e.blockedByBlocklist ? "blocklist" : "allowlist";
}
function vNt(e, n) {
  {
    let i = MRo(n),
      s = e === void 0 ? "The Anthropic Directory is blocked by your organization" : `Plugin "${Ge(e)}" is not loaded: the Anthropic Directory is blocked by your organization`;
    return i === "" ? s : `${s}. ${i}`;
  }
  return "";
}
var fsn = "(not recorded)",
  z = {
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
function VOe(e) {
  if (e.type === "path-not-found") return e.plugin === void 0 && e.errno !== void 0;
  if (e.type === "plugin-not-installed") return e.seedHasOtherVersion === !0 || e.registryReadFailed === !0;
  if (e.type === "generic-error") return e.orphan !== !0 && e.refused !== !0;
  if (e.type === "marketplace-load-failed") return e.untrustedReservedName !== !0 && e.nameRefused !== !0 && e.directoryBlockedBy === void 0;
  if (e.type === "marketplace-not-found") return e.registrationHidden === void 0 || e.registrationHidden === "network-location";
  if (e.type === "plugin-not-found") return e.removedFromDirectory !== !0 || e.registryReadFailed === !0;
  return z[e.type];
}
function O1e(e) {
  return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied";
}
function uke(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let n = e.source.lastIndexOf("@");
  if (n > 0) return e.source.slice(0, n);
  return;
}
function qOe(e) {
  return e.type === "autoupdate-deferred-entry-helper" || e.type === "autoupdate-disabled-by-policy";
}
function DRo(e) {
  return `"${Ge(e)}" is loaded from your claude.ai account but meets a marketplace dependency only for other claude.ai plugins`;
}
function _w(e) {
  return Wn(W(e));
}
function W(e) {
  switch (e.type) {
    case "generic-error":
      return k5(e.error);
    case "path-not-found":
      return e.plugin === void 0 ? `Path not found: ${Xs(e.path)}${e.errno ? ` (${Ge(e.errno)})` : ""}` : `Path not found: ${Xs(e.path)} (${Ge(e.component)}${e.errno ? `, ${Ge(e.errno)}` : ""})`;
    case "path-traversal":
      return `Path escapes plugin directory: ${Xs(e.path)} (${Ge(e.component)})${e.reason ? ` \u2014 ${Xs(e.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git authentication failed (${Ge(e.authType)}): ${Xs(e.gitUrl)}`;
    case "git-timeout":
      return `Git ${Ge(e.operation)} timeout: ${Xs(e.gitUrl)}`;
    case "network-error":
      return `Network error: ${Xs(e.url)}${e.details ? ` - ${Ge(e.details)}` : ""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${Ge(e.parseError, 500)} (in ${Xs(e.manifestPath)})`;
    case "manifest-validation-error":
      return `Manifest validation failed: ${Ge(e.validationErrors.join(", "), 1000)} (in ${Xs(e.manifestPath)})`;
    case "plugin-not-found":
      if (e.removedFromDirectory) return IRo(e.pluginId, e.directoryRenamedTo, e.directoryIdentityChanged === !0, e.directoryNotInstallableReason, e.registryReadFailed === !0);
      return `Plugin ${Ge(e.pluginId)} not found in marketplace ${Ge(e.marketplace)}`;
    case "marketplace-not-found":
      if (e.registrationHidden !== void 0) {
        let n = `Marketplace ${Ge(e.marketplace)} is added but ignored`;
        return e.registrationHiddenReason === void 0 ? `${n} (see the debug log)` : `${n}. ${Ga(f1t(e.registrationHiddenReason))}. ${Ga(P1e[e.registrationHidden])}.`;
      }
      return `Marketplace ${Ge(e.marketplace)} not found`;
    case "marketplace-load-failed":
      if (e.directoryBlockedBy !== void 0) return vNt(uke(e) ?? e.source, e.directoryBlockedBy);
      if (SNt(e)) return `Plugin "${Ge(uke(e) ?? e.source)}" is not loaded: the Anthropic Directory's catalog is not on this machine yet.`;
      if (e.nameRefused) return bNt(e.marketplace);
      return `Marketplace ${Ge(e.marketplace)} failed to load: ${Ge(e.reason)}`;
    case "mcp-config-invalid":
      return `MCP server ${Ge(e.serverName)} invalid: ${Ge(e.validationError)}`;
    case "hook-load-failed":
      return `Hook load failed: ${Ge(e.reason)}`;
    case "component-load-failed":
      return `${Ge(e.component)} load failed from ${Xs(e.path)}: ${Ge(e.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${Xs(e.url)}: ${Ge(e.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${Xs(e.mcpbPath)}: ${Ge(e.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${Xs(e.mcpbPath)}: ${Ge(e.validationError)}`;
    case "lsp-config-invalid":
      return `Plugin "${Ge(e.plugin)}" has invalid LSP server config for "${Ge(e.serverName)}": ${Ge(e.validationError)}`;
    case "lsp-server-start-failed":
      return `Plugin "${Ge(e.plugin)}" failed to start LSP server "${Ge(e.serverName)}": ${Ge(e.reason)}`;
    case "lsp-server-crashed":
      if (e.signal) return `Plugin "${Ge(e.plugin)}" LSP server "${Ge(e.serverName)}" crashed with signal ${e.signal}`;
      return `Plugin "${Ge(e.plugin)}" LSP server "${Ge(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${Ge(e.plugin)}" LSP server "${Ge(e.serverName)}" timed out on ${Ge(e.method)} request after ${e.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${Ge(e.plugin)}" LSP server "${Ge(e.serverName)}" ${Ge(e.method)} request failed: ${Ge(e.error)}`;
    case "marketplace-blocked-by-policy":
      {
        let n = NPr(e);
        if (n !== null) return vNt(e.plugin, n);
        if (e.blockedByBlocklist) return `Marketplace '${Ge(e.marketplace)}' is blocked by enterprise policy`;
        return `Marketplace '${Ge(e.marketplace)}' is not in the allowed marketplace list`;
      }
    case "dependency-unsatisfied":
      {
        let n = ll("plugin install", e.dependency),
          i = e.reason === "not-enabled" ? "disabled \u2014 enable it or remove the dependency" : `not installed \u2014 ${e.sameNameSyncedPlugin === void 0 ? "" : `${DRo(e.sameNameSyncedPlugin)}; `}${n ? `run \`${n}\`, or ` : ""}check that its marketplace is added`;
        return `Dependency "${Ge(e.dependency)}" is ${i}`;
      }
    case "dependency-version-unsatisfied":
      return `Requires "${Ge(e.dependency)}" ${Ge(e.required)}, installed ${Ge(e.installed ?? "version unknown")}`;
    case "plugin-cache-miss":
      if (e.registryReadFailed === !0) return `Plugin "${Ge(e.plugin)}" is not loaded: installed_plugins.json could not be read, so its install could not be checked \u2014 fix or restore installed_plugins.json in the plugins directory, then run /reload-plugins${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;
      return `Plugin "${Ge(e.plugin)}" not cached at ${Xs(e.installPath)} \u2014 run /plugin to refresh${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;
    case "plugin-not-installed":
      {
        let n = ll("plugin install", e.source, "--scope project");
        if (e.installedListHeldNote !== void 0) return `Plugin "${Ge(e.plugin)}" is enabled in project settings, but whether it is installed could not be checked. ${e.installedListHeldNote}`;
        return `Plugin "${Ge(e.plugin)}" is enabled in project settings but isn't installed${n ? ` \u2014 run \`${n}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
      }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return e.message;
    case "autoupdate-blocked-by-pinner":
      {
        let n = e.heldAt ? ` at ${Xs(e.heldAt)}` : "",
          i = Ge(e.blockedBy.join(", ")),
          s = e.disabledPinners.length > 0 ? ` (note: ${Ge(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)` : "";
        return `Autoupdate held "${Ge(e.plugin)}"${n} \u2014 version constraint from ${i}${s}`;
      }
  }
}
function Yee(e) {
  return Wn(V(e));
}
function V(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest":
      {
        let n = R(e.manifestFields);
        return `Default ${Ge(e.component)}/ folder is ignored because the manifest sets ${n}`;
      }
    case "mcp-server-suppressed-duplicate":
      {
        let n = e.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${Ge(e.duplicateOf.split(":")[1] ?? "?")}"` : `already-configured "${Ge(e.duplicateOf)}"`;
        return `MCP server "${Ge(e.serverName)}" skipped \u2014 same command/URL as ${n}`;
      }
    case "mcpb-needs-config":
      return `Bundled MCP server "${Ge(e.serverName)}" was not started: it needs configuration`;
    case "plugin-renamed":
      return e.renamedTo === null ? `Removed from the "${Ge(e.marketplace)}" marketplace` : `Renamed to "${Ge(e.renamedTo)}" in the "${Ge(e.marketplace)}" marketplace`;
    case "lsp-extension-conflict":
      {
        let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : void 0,
          i = n ? `plugin "${Ge(n)}"` : `"${Ge(e.activeServer)}"`;
        return `LSP server "${Ge(e.serverName)}" is not used for ${Ge(e.extension)} files \u2014 ${i} already registered a server for that extension`;
      }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return f1t(e.warning);
    case "broken-wikilink":
      return `${Ge(e.raw)} in ${Xs(e.filePath)}:${e.line} doesn't resolve to a skill`;
    case "synced-plugin-shadowed":
      return `"${Ge(e.source)}" from claude.ai not loaded \u2014 "${Ge(e.shadowedBy)}" on this machine has the same name and takes precedence`;
    case "hooks-left-out-by-name":
      return `Its hooks.json hooks do not run. "${Ge(e.heldBy)}" holds the same plugin name and comes first`;
    case "hooks-module-left-out-by-name":
      return `Its hooks module does not load. "${Ge(e.heldBy)}" holds the same plugin name and comes first`;
    case "hooks-passed-over":
      return `Its hooks on ${e.patterns.map(item => Ge(item)).join(", ")} do not run here: where an organization manages Claude Code, these events pass over the plugins you install`;
    case "managed-hooks-restricted":
      return `"${Ge(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
    case "managed-plugin-disabled-by-settings":
      return `"${Ge(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${Zk(e.overriddenBy)} settings enable it, which overrides your user setting`;
    case "dependencies-refused":
      return `The packages it lists were not installed, because ${Ge(nt(e.reason, ";"))}`;
    case "dependencies-not-installed":
      {
        let n = ll("plugin update", e.source);
        return `The packages it lists are not installed. ${n ? `Run \`${n}\` to install them` : "Update it from /plugin to install them"}`;
      }
  }
}
function FPr(e) {
  return Wn(q(e));
}
function q(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest":
      {
        let n = R(e.manifestFields);
        if (e.manifestFields.length === 1) return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${n} list if you want both`;
        return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
      }
    case "project-scope-suppressed-untrusted":
      return "Accept the trust dialog for this workspace, then run /reload-plugins.";
    case "project-scope-server-stripped":
      return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";
    case "broken-wikilink":
      return e.reason === "invalid" ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link" : `Create one of: ${e.tried.map(item => Xs(item)).join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate":
      {
        if (e.duplicateOf.startsWith("plugin:")) {
          let n = e.duplicateOf.split(":")[1] ?? "the other plugin";
          return `Disable plugin "${Ge(n)}" if you want this plugin's version instead`;
        }
        return `Remove "${Ge(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
      }
    case "mcpb-needs-config":
      return `Open "${Ge(e.plugin)}" in the Installed tab and choose Configure`;
    case "lsp-extension-conflict":
      {
        let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] ?? "the other plugin" : e.activeServer;
        if (n === e.plugin) return `Plugin "${Ge(e.plugin)}" declares two LSP servers for ${Ge(e.extension)} \u2014 remove or reorder "${Ge(e.serverName)}" in its lspServers config`;
        return `Disable plugin "${Ge(n)}" to use this plugin's LSP server for ${Ge(e.extension)} files, or disable "${Ge(e.plugin)}" to silence this warning`;
      }
    case "synced-plugin-shadowed":
      {
        let n = ll("plugin enable", e.source);
        return `To use the claude.ai copy instead, ${n ? `run \`${n}\`` : "enable it from /plugin"}, then disable or remove "${Ge(e.shadowedBy)}"`;
      }
    case "hooks-left-out-by-name":
      return y("One plugin per name runs hooks.json hooks, so this copy's run", e.heldBy);
    case "hooks-module-left-out-by-name":
      return y("One plugin per name loads a hooks module, so this copy's loads", e.heldBy);
    case "hooks-passed-over":
      return "Only a plugin that counts as your organization's own runs hooks on these events. An administrator sets that up in managed settings";
    case "managed-hooks-restricted":
      return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
    case "managed-plugin-disabled-by-settings":
      {
        let n = ll("plugin enable", e.source);
        return `To run it, ${n ? `run \`${n}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
      }
    case "plugin-renamed":
      return e.renamedTo === null ? `Remove "${Ge(e.source)}" from enabledPlugins if you still see this on the next start` : `If you still see this on the next start, update enabledPlugins to use "${Ge(e.renamedTo)}@${Ge(e.marketplace)}" (managed settings are not rewritten automatically)`;
    case "dependencies-refused":
      return "If it needs those packages, parts of it may not work. Updating or reinstalling this version of the plugin will not install them while that is still true";
    case "dependencies-not-installed":
      return "If it needs those packages, parts of it may not work";
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${Ge(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${Ge(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
        case "policySettings":
          return "Managed policy can't be overridden locally \u2014 contact your administrator";
        case "userSettings":
          return "";
      }
  }
}
function R(e) {
  return e.map(item => `"${item}"`).join(" and ");
}
import { basename as x, isAbsolute as ne, join as p, relative as ie, sep as se } from "path";
import { resolve as X } from "path";
function D9e(e) {
  let n = X(e).normalize("NFC");
  return I() === "windows" ? n.toLowerCase() : n;
}
function HPr(e, n, i, s) {
  let l = new Map();
  if (Buffer.byteLength(n) > i) return t(`Ignoring ${e}: larger than the size cap`), l;
  let d;
  try {
    d = J(n);
  } catch {
    return t(`Ignoring ${e}: not valid JSON`), l;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) return t(`Ignoring ${e}: not a JSON object`), l;
  for (let [r, g] of Object.entries(d)) {
    let m = s(g);
    if (m !== void 0) l.set(D9e(r), m);
  }
  return l;
}
var kNt = ".meta.json",
  I1e = "server_plugin_id",
  iVn = "marketplace_name",
  aVn = "installation_preference",
  regExp = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${z_}]{1,128}$`, "u");
function LRo(e) {
  return regExp.test(e);
}
var $Pr = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function Sae(e) {
  return $Pr.test(e);
}
var Z = f(() => u({
    [I1e]: o().regex($Pr).optional().catch(void 0),
    [iVn]: o().regex(regExp).optional().catch(void 0),
    [aVn]: sVn().optional().catch(void 0)
  })),
  NRo = 4096;
async function Q(e) {
  let n = e + kNt,
    i = await al(n, NRo);
  if (i === null) return {};
  let s;
  try {
    s = J(i);
  } catch {
    return t(`Ignoring plugin attribution sidecar at ${n}: not valid JSON`), {};
  }
  return A(s, `sidecar at ${n}`);
}
function A(e, n) {
  let i = Z().safeParse(e);
  if (!i.success) return t(`Ignoring plugin attribution ${n}: not a JSON object`), {};
  let s = {},
    l = i.data[I1e];
  if (typeof l === "string" && Sae(l)) s.serverPluginId = l;
  let d = i.data[iVn];
  if (typeof d === "string" && LRo(d)) s.marketplaceName = d;
  let r = LPr(i.data[aVn]);
  if (r !== void 0) s.installationPreference = r;
  if (typeof e === "object" && e !== null) {
    for (let [g, m] of [[I1e, s.serverPluginId], [iVn, s.marketplaceName], [aVn, s.installationPreference]]) if (g in e && m === void 0) t(`Ignoring plugin attribution field (${n}): invalid ${g}`);
  }
  return s;
}
var ee = 65536;
function te(e) {
  let CLAUDE_CODE_PLUGIN_ATTRIBUTION = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (CLAUDE_CODE_PLUGIN_ATTRIBUTION === void 0) return;
  return HPr("CLAUDE_CODE_PLUGIN_ATTRIBUTION", CLAUDE_CODE_PLUGIN_ATTRIBUTION, ee, i => A(i, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry")).get(D9e(e));
}
async function lVn(e) {
  return te(e) ?? (await Q(e));
}
var SD = "manifest.json",
  ENt = ".marketplaces.json",
  re = /^[A-Za-z0-9_-]{1,128}$/;
function fme(e) {
  return re.test(e);
}
var k = ".marketplace-";
function FRo(e) {
  if (!fme(e)) throw Error("claude.ai marketplace id is not a tagged id");
  return `${k}${e}.json`;
}
function XDs(e) {
  return e.startsWith(k) && e.endsWith(".json") && fme(e.slice(k.length, -5));
}
var JDs = ".last-complete-round";
function UPr(e, n = {
  pid: process.pid,
  procStart: void 0
}) {
  return `${n.pid}:${n.procStart ?? ""}/${e}`;
}
function Wft(name) {
  let n = name.indexOf("/");
  if (n === -1) return {
    name: name,
    ownerPid: void 0,
    ownerProcStart: void 0
  };
  let i = name.slice(0, n),
    s = i.indexOf(":"),
    l = s === -1 ? i : i.slice(0, s),
    d = s === -1 ? "" : i.slice(s + 1),
    r = Number(l);
  return {
    name: name.slice(n + 1),
    ownerPid: Number.isInteger(r) && r > 0 ? r : void 0,
    ownerProcStart: d || void 0
  };
}
class LegacyReservedSpellingError extends Error {
  constructor() {
    super("synced item name is a legacy alias of a reserved path");
    this.name = "LegacyReservedSpellingError";
  }
}
var Mj = "synced",
  BPr = ".trash",
  RX = ".staging",
  P = "unbound",
  oe = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
function TNt(e) {
  return oe.test(e);
}
function jPr(e, n) {
  return `${e.toLowerCase()}_${n?.toLowerCase() ?? P}`;
}
function b(e) {
  let [org, account, ...s] = e.split("_");
  if (s.length > 0 || org === void 0 || account === void 0 || !TNt(org) || !(account === P || TNt(account))) return null;
  return {
    org: org,
    account: account
  };
}
function M1e(e) {
  return b(e) !== null;
}
function N9e(e) {
  return b(e)?.org ?? null;
}
var ae = ".bucket-";
function WPr(e, n) {
  return p(e, `${ae}${n}`);
}
function QDs(e) {
  let n = b(e);
  if (n === null) return null;
  return n.account === P ? "<org>_unbound" : "<org>_<account>";
}
var D = /~g(?:[2-9]|[1-9]\d+)$/;
function F9e(e) {
  return e.replace(D, "");
}
function CNt(e) {
  return e.replace(/[. ]+$/, "");
}
function T(e) {
  let n = CNt(e.replace(/[<>:"|?*\\/]/g, "_"));
  if (!n) throw Error("synced item name resolves to sync root");
  return n;
}
function le(e, n) {
  let i = p(n, e),
    s = ie(n, i);
  if (!s || ne(s) || s === ".." || s.startsWith(`..${se}`)) throw Error("synced item name escapes the sync root");
  return i;
}
function Zf(e) {
  return e.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").replace(/\u1e9e/g, "\xDF").normalize("NFD").toUpperCase().toLowerCase();
}
var ue = /^[!-~]+$/,
  de = 32,
  dVn = 512,
  maxSize = 16777216,
  pe;
function Lm(e) {
  if (ue.test(e)) return e.toLowerCase();
  if (e.length < de || e.length > dVn) return C(e);
  let n = pe ??= W2(new tc({
      max: 8192,
      maxSize: maxSize,
      sizeCalculation: (s, l) => l.length + s.length
    })),
    i = n.get(e);
  if (i === void 0) i = C(e), n.set(wjt(e), i);
  return i;
}
function C(e) {
  return Zf(FWo(z4(mk(e)).replace(/[\p{Z}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu, "").replace(/[\p{Pd}\u2212]/gu, "-").replace(/[\ua789\u2236\u0589\u05c3\u02d0]/g, ":")));
}
function _3(e) {
  return vl(e).startsWith(".");
}
function HRo(e) {
  return vl(e) === ".git";
}
function EK(e) {
  return Zf(CNt(e)) === Mj;
}
function b3(e, n) {
  let i = T(e);
  if (_n(i) !== i) throw Error("synced item name contains display-hazard characters");
  if (_3(i)) throw Error("synced item name resolves to reserved path");
  if (Zf(i).endsWith(kNt)) throw Error("synced item name resolves to reserved path");
  if (D.test(Zf(i))) throw Error("synced item name resolves to reserved path");
  if (M1e(Zf(i))) throw Error("synced item name resolves to reserved path");
  return H9e(e, n);
}
function $Ro(e, n, i) {
  let s = b3(e, i);
  return n <= 1 ? s : p(i, `${x(s)}~g${n}`);
}
function H9e(e, n) {
  let i = T(e),
    s = Zf(vl(i));
  if (s === SD || s === RX) {
    let l = i.toLowerCase();
    if (l === SD || l === RX) throw Error("synced item name resolves to reserved path");
    throw new LegacyReservedSpellingError();
  }
  if (L(s)) {
    if (L(i.toLowerCase())) throw Error("synced item name resolves to reserved path");
    throw new LegacyReservedSpellingError();
  }
  return le(i, n);
}
function L(e) {
  let n = nt(e, ".").replace(/ +$/, "");
  return /~\d/.test(e) || hJn.test(n);
}
function cVn(e, n) {
  let i;
  try {
    i = JSON.parse(e);
  } catch {
    return "claim-all";
  }
  if (!Array.isArray(i?.skills)) return "claim-all";
  if (i.staleDirs !== void 0 && !Array.isArray(i.staleDirs)) return "claim-all";
  if (i.pendingClaims !== void 0 && !Array.isArray(i.pendingClaims)) return "claim-all";
  let s = new Set(),
    l = i.skills.flatMap(item => typeof item === "object" && item !== null && typeof item.name === "string" ? [item.name] : []),
    d = (i.pendingClaims ?? []).flatMap(item => typeof item === "string" ? [Wft(item).name] : []);
  for (let r of [l, i.staleDirs, d]) if (Array.isArray(r)) {
    for (let g of r) if (typeof g === "string") for (let m of ge(g, n)) s.add(m);
  }
  return s;
}
function ge(e, n) {
  let i = [RNt(e)];
  try {
    i.push(RNt(x(H9e(e, n))));
  } catch {}
  return i;
}
function RNt(e) {
  return Zf(vl(e));
}
var Dj = p("skills", Mj),
  $9e = p("skills", BPr),
  uVn = p("skills", RX),
  ZDs = p(Dj, RX),
  Lj = p("plugins", Mj),
  D1e = p("plugins", BPr),
  eLs = p(Lj, RX);
export { bNt, nVn, rVn, oVn, xRo, PRo, ORo, P1e, sVn, LPr, IRo, SNt, wNt, psn, MRo, NPr, vNt, fsn, VOe, O1e, uke, qOe, DRo, _w, Yee, FPr, D9e, HPr, kNt, I1e, iVn, aVn, LRo, $Pr, Sae, NRo, lVn, SD, ENt, fme, FRo, XDs, JDs, UPr, Wft, LegacyReservedSpellingError as L9e, Mj, BPr, RX, TNt, jPr, M1e, N9e, WPr, QDs, F9e, CNt, Zf, dVn, Lm, _3, HRo, EK, b3, $Ro, H9e, cVn, RNt, Dj, $9e, uVn, ZDs, Lj, D1e, eLs };