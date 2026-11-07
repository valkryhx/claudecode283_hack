// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function sHt(n) {
  let e = !1,
    r, t = {
      addDir: [],
      pluginDir: [],
      pluginDirNoMcp: [],
      settings: void 0,
      managedSettings: void 0,
      mcpConfig: [],
      strictMcpConfig: !1,
      restricted: !1
    },
    g = [],
    d = {
      "--cwd": (i) => {
        r = i
      },
      "--settings": (i) => {
        t.settings = i
      },
      "--managed-settings": (i) => {
        t.managedSettings = i
      },
      "--setting-sources": () => {},
      "--add-dir": (i) => t.addDir.push(i),
      "--plugin-dir": (i) => t.pluginDir.push(i),
      "--plugin-dir-no-mcp": (i) => t.pluginDirNoMcp.push(i),
      "--mcp-config": (i) => t.mcpConfig.push(i)
    };
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (s === "agents" && !e) {
      e = !0;
      continue
    }
    if (s === "--strict-mcp-config") {
      t.strictMcpConfig = !0;
      continue
    }
    if (s === "--restricted") {
      t.restricted = !0;
      continue
    }
    let o = s.indexOf("="),
      l = o === -1 ? s : s.slice(0, o),
      a = Object.hasOwn(d, l) ? d[l] : void 0;
    if (a) {
      if (o !== -1) a(s.slice(o + 1));
      else if (i + 1 < n.length) a(n[++i]);
      else g.push(s);
      continue
    }
    g.push(s)
  }
  return {
    hasAgentsPositional: e,
    cwdFilter: r,
    config: t,
    rest: g
  }
}

function vAs(n) {
  let e = n.trim();
  return e === "~" || e.startsWith("~/")
}

function iHt(n, e) {
  let r = (t, g) => t === "" || g && t.trimStart().startsWith("{") ? t : e(t);
  return {
    settings: n.settings === void 0 ? void 0 : r(n.settings, !0),
    managedSettings: n.managedSettings,
    pluginDir: n.pluginDir.map((t) => r(t, !1)),
    pluginDirNoMcp: n.pluginDirNoMcp.map((t) => r(t, !1)),
    addDir: n.addDir.map((t) => vAs(t) ? t : r(t, !1)),
    mcpConfig: n.mcpConfig.map((t) => r(t, !0)),
    strictMcpConfig: n.strictMcpConfig,
    restricted: n.restricted,
    settingSources: n.settingSources
  }
}

function vbe(n) {
  return [...n.settings ? ["--settings", n.settings] : [], ...n.managedSettings ? ["--managed-settings", n.managedSettings] : [], ...n.pluginDir.flatMap((e) => ["--plugin-dir", e]), ...n.pluginDirNoMcp.flatMap((e) => ["--plugin-dir-no-mcp", e]), ...n.addDir.flatMap((e) => ["--add-dir", e]), ...n.mcpConfig.flatMap((e) => ["--mcp-config", e]), ...n.settingSources !== void 0 ? [`--setting-sources=${n.settingSources}`] : [], ...n.strictMcpConfig ? ["--strict-mcp-config"] : [], ...n.restricted ? ["--restricted"] : []]
}

function Bqi(n) {
  let e = 0;
  while (n[e] === "--dangerously-skip-permissions" || n[e] === "--allow-dangerously-skip-permissions") e++;
  return n[e] === "daemon" ? n.slice(e + 1) : null
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
  return ""
}

function dxr() {
  return {
    version: `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}${UX()}`,
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
  }
}
export {
  sHt,
  vAs,
  iHt,
  vbe,
  Bqi,
  UX,
  dxr
};
