// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { xte, W4, ky } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { nAn } from "B:/~BUN/root/chunk-27h4st9h.js";
import { jUn } from "B:/~BUN/root/chunk-3xtmwvra.js";
function a(e) {
  let t = "plugin" in e ? e.plugin : "no-plugin",
    n = e.type === "mcpb-needs-config" ? `:${e.serverName}` : "";
  return `${e.type}:${e.source}:${t}${n}`;
}
function VVo(e) {
  return e === "lsp-manager" || e.startsWith("plugin:");
}
function u(e, t) {
  let n = e.filter(item => VVo(item.source)),
    s = new Set(t.map(l));
  return [...n.filter(item => !s.has(l(item))), ...t];
}
function l(e) {
  return e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
}
function g(e, t) {
  let n = e.filter(item => item.source.startsWith("plugin:")),
    s = new Set(t.map(item => `${item.type}:${item.source}`));
  return [...n.filter(item => !s.has(`${item.type}:${item.source}`)), ...t];
}
class oQ {
  #n;
  #t;
  constructor(e) {
    this.#n = e.getState, this.#t = e.setState;
  }
  static over(e) {
    return new oQ({
      getState: e.getState,
      setState: jUn(e.setState)
    });
  }
  get() {
    return this.#n().plugins;
  }
  #e(e) {
    this.#t(t => {
      let plugins = e(t.plugins);
      return plugins === t.plugins ? t : {
        ...t,
        plugins: plugins
      };
    });
  }
  addErrors(e) {
    if (e.length === 0) return;
    this.#e(t => {
      let n = new Set(t.errors.map(item => a(item))),
        s = e.filter(item => !n.has(a(item)));
      if (s.length === 0) return t;
      return {
        ...t,
        errors: [...t.errors, ...s]
      };
    });
  }
  removeErrorsOf(e) {
    if (e.length === 0) return;
    let t = e.map(n => ({
      id: n,
      ...W4(n)
    }));
    this.#e(n => {
      let errors = n.errors.filter(item => {
        let marketplace = W4(item.source).marketplace;
        return !t.some(o => ky(item.source, o.id) || "plugin" in item && item.plugin === o.name && !xte(item.source) && (marketplace === void 0 || marketplace === o.marketplace));
      });
      return errors.length === n.errors.length ? n : {
        ...n,
        errors: errors
      };
    });
  }
  addWarnings(e) {
    this.#e(t => {
      let n = new Set(e.map(item => a(item))),
        s = t.warnings.filter(item => item.type !== "mcp-server-connector-blocked" || n.has(a(item))),
        r = new Set(s.map(item => a(item))),
        i = e.filter(item => !r.has(a(item)));
      if (i.length === 0 && s.length === t.warnings.length) return t;
      return {
        ...t,
        warnings: [...s, ...i]
      };
    });
  }
  markNeedsRefresh(e = "changed") {
    this.#e(t => {
      if (e === "not-loaded") return t.needsRefresh && t.needsRefreshToLoad === !0 ? t : {
        ...t,
        needsRefresh: !0,
        needsRefreshToLoad: !0
      };
      return t.needsRefresh ? t : {
        ...t,
        needsRefresh: !0
      };
    });
  }
  retarget(e) {
    this.#e(t => {
      let n = t.enabled.findIndex(item => item.source === e.source && item.path === e.path),
        s = t.enabled[n];
      if (s === void 0) return t;
      let r = nAn(s, e);
      if (r === s) return t;
      return {
        ...t,
        enabled: t.enabled.with(n, r)
      };
    });
  }
  setPendingMarketplaces(e) {
    this.#e(t => ({
      ...t,
      installationStatus: {
        marketplaces: e.map(n => ({
          name: n,
          status: "pending"
        })),
        plugins: []
      }
    }));
  }
  setMarketplaceStatus(e, status, error) {
    this.#e(s => ({
      ...s,
      installationStatus: {
        ...s.installationStatus,
        marketplaces: s.installationStatus.marketplaces.map(item => item.name === e ? {
          ...item,
          status: status,
          error: error
        } : item)
      }
    }));
  }
  applyRefresh(e) {
    this.#t(t => ({
      ...t,
      plugins: {
        ...t.plugins,
        enabled: e.enabled,
        disabled: e.disabled,
        commands: e.commands,
        errors: u(t.plugins.errors, e.errors),
        warnings: g(t.plugins.warnings, e.warnings),
        needsRefresh: !1,
        needsRefreshToLoad: void 0
      },
      agentDefinitions: e.agentDefinitions,
      mcp: {
        ...t.mcp,
        pluginReconnectKey: t.mcp.pluginReconnectKey + 1
      }
    }));
  }
}
export { VVo, oQ };