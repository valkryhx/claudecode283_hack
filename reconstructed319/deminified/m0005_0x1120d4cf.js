// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function sHt(n) {
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
      "--cwd": i => {
        cwdFilter = i;
      },
      "--settings": i => {
        config.settings = i;
      },
      "--managed-settings": i => {
        config.managedSettings = i;
      },
      "--setting-sources": () => {},
      "--add-dir": i => config.addDir.push(i),
      "--plugin-dir": i => config.pluginDir.push(i),
      "--plugin-dir-no-mcp": i => config.pluginDirNoMcp.push(i),
      "--mcp-config": i => config.mcpConfig.push(i)
    };
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
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
      if (o !== -1) a(s.slice(o + 1));else if (i + 1 < n.length) a(n[++i]);else rest.push(s);
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
function vAs(n) {
  let e = n.trim();
  return e === "~" || e.startsWith("~/");
}
function iHt(n, e) {
  let r = (t, g) => t === "" || g && t.trimStart().startsWith("{") ? t : e(t);
  return {
    settings: n.settings === void 0 ? void 0 : r(n.settings, !0),
    managedSettings: n.managedSettings,
    pluginDir: n.pluginDir.map(item => r(item, !1)),
    pluginDirNoMcp: n.pluginDirNoMcp.map(item => r(item, !1)),
    addDir: n.addDir.map(item => vAs(item) ? item : r(item, !1)),
    mcpConfig: n.mcpConfig.map(item => r(item, !0)),
    strictMcpConfig: n.strictMcpConfig,
    restricted: n.restricted,
    settingSources: n.settingSources
  };
}
function vbe(n) {
  return [...(n.settings ? ["--settings", n.settings] : []), ...(n.managedSettings ? ["--managed-settings", n.managedSettings] : []), ...n.pluginDir.flatMap(item => ["--plugin-dir", item]), ...n.pluginDirNoMcp.flatMap(item => ["--plugin-dir-no-mcp", item]), ...n.addDir.flatMap(item => ["--add-dir", item]), ...n.mcpConfig.flatMap(item => ["--mcp-config", item]), ...(n.settingSources !== void 0 ? [`--setting-sources=${n.settingSources}`] : []), ...(n.strictMcpConfig ? ["--strict-mcp-config"] : []), ...(n.restricted ? ["--restricted"] : [])];
}
function Bqi(n) {
  let e = 0;
  while (n[e] === "--dangerously-skip-permissions" || n[e] === "--allow-dangerously-skip-permissions") e++;
  return n[e] === "daemon" ? n.slice(e + 1) : null;
}
function UX(n = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.319",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-11-05T18:14:18Z",
  GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.BUILD_REF_NAME) {
  return "";
}
function dxr() {
  return {
    version: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}${UX()}`,
    buildTime: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.BUILD_TIME
  };
}
export { sHt, vAs, iHt, vbe, Bqi, UX, dxr };