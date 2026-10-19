// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function mgt(t) {
  let hasAgentsPositional = !1,
    cwdFilter,
    config = {
      addDir: [],
      pluginDir: [],
      pluginDirNoMcp: [],
      settings: void 0,
      managedSettings: void 0,
      mcpConfig: [],
      strictMcpConfig: !1,
      restricted: !1
    },
    rest = [],
    d = {
      "--cwd": e => {
        cwdFilter = e;
      },
      "--settings": e => {
        config.settings = e;
      },
      "--managed-settings": e => {
        config.managedSettings = e;
      },
      "--setting-sources": () => {},
      "--add-dir": e => config.addDir.push(e),
      "--plugin-dir": e => config.pluginDir.push(e),
      "--plugin-dir-no-mcp": e => config.pluginDirNoMcp.push(e),
      "--mcp-config": e => config.mcpConfig.push(e)
    };
  for (let e = 0; e < t.length; e++) {
    let s = t[e];
    if (s === "agents" && !hasAgentsPositional) {
      hasAgentsPositional = !0;
      continue;
    }
    if (s === "--strict-mcp-config") {
      config.strictMcpConfig = !0;
      continue;
    }
    if (s === "--restricted") {
      config.restricted = !0;
      continue;
    }
    let o = s.indexOf("="),
      l = o === -1 ? s : s.slice(0, o),
      a = Object.hasOwn(d, l) ? d[l] : void 0;
    if (a) {
      if (o !== -1) a(s.slice(o + 1));else if (e + 1 < t.length) a(t[++e]);else rest.push(s);
      continue;
    }
    rest.push(s);
  }
  return {
    hasAgentsPositional: hasAgentsPositional,
    cwdFilter: cwdFilter,
    config: config,
    rest: rest
  };
}
function rIo(t) {
  let i = t.trim();
  return i === "~" || i.startsWith("~/");
}
function ggt(t, i) {
  let r = (n, g) => n === "" || g && n.trimStart().startsWith("{") ? n : i(n);
  return {
    settings: t.settings === void 0 ? void 0 : r(t.settings, !0),
    managedSettings: t.managedSettings,
    pluginDir: t.pluginDir.map(item => r(item, !1)),
    pluginDirNoMcp: t.pluginDirNoMcp.map(item => r(item, !1)),
    addDir: t.addDir.map(item => rIo(item) ? item : r(item, !1)),
    mcpConfig: t.mcpConfig.map(item => r(item, !0)),
    strictMcpConfig: t.strictMcpConfig,
    restricted: t.restricted,
    settingSources: t.settingSources
  };
}
function ele(t) {
  return [...(t.settings ? ["--settings", t.settings] : []), ...(t.managedSettings ? ["--managed-settings", t.managedSettings] : []), ...t.pluginDir.flatMap(item => ["--plugin-dir", item]), ...t.pluginDirNoMcp.flatMap(item => ["--plugin-dir-no-mcp", item]), ...t.addDir.flatMap(item => ["--add-dir", item]), ...t.mcpConfig.flatMap(item => ["--mcp-config", item]), ...(t.settingSources !== void 0 ? [`--setting-sources=${t.settingSources}`] : []), ...(t.strictMcpConfig ? ["--strict-mcp-config"] : []), ...(t.restricted ? ["--restricted"] : [])];
}
function YUs(t) {
  let i = 0;
  while (t[i] === "--dangerously-skip-permissions" || t[i] === "--allow-dangerously-skip-permissions") i++;
  return t[i] === "daemon" ? t.slice(i + 1) : null;
}
function eW(t = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.303",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-18T20:20:57Z",
  GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.BUILD_REF_NAME) {
  return "";
}
export { mgt, rIo, ggt, ele, YUs, eW };