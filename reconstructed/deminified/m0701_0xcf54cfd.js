// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { wAt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { CLt } from "B:/~BUN/root/chunk-aky7m4ay.js";
import { YX, Xz, Zp } from "B:/~BUN/root/chunk-gsxez0fk.js";
function a(e) {
  let t = "plugin" in e ? e.plugin : "no-plugin";
  return `${e.type}:${e.source}:${t}`;
}
function Ssr(e) {
  return e === "lsp-manager" || e.startsWith("plugin:");
}
function u(e, t) {
  let n = e.filter(item => Ssr(item.source)),
    r = new Set(t.map(l));
  return [...n.filter(item => !r.has(l(item))), ...t];
}
function l(e) {
  return e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
}
function g(e, t) {
  let n = e.filter(item => item.source.startsWith("plugin:")),
    r = new Set(t.map(item => `${item.type}:${item.source}`));
  return [...n.filter(item => !r.has(`${item.type}:${item.source}`)), ...t];
}
class Kj {
  #n;
  #t;
  constructor(e) {
    this.#n = e.getState, this.#t = e.setState;
  }
  static over(e) {
    return new Kj({
      getState: e.getState,
      setState: CLt(e.setState)
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
        r = e.filter(item => !n.has(a(item)));
      if (r.length === 0) return t;
      return {
        ...t,
        errors: [...t.errors, ...r]
      };
    });
  }
  removeErrorsOf(e) {
    if (e.length === 0) return;
    let t = e.map(n => ({
      id: n,
      ...Xz(n)
    }));
    this.#e(n => {
      let errors = n.errors.filter(item => {
        let marketplace = Xz(item.source).marketplace;
        return !t.some(o => Zp(item.source, o.id) || "plugin" in item && item.plugin === o.name && !YX(item.source) && (marketplace === void 0 || marketplace === o.marketplace));
      });
      return errors.length === n.errors.length ? n : {
        ...n,
        errors: errors
      };
    });
  }
  addWarnings(e) {
    if (e.length === 0) return;
    this.#e(t => {
      let n = new Set(t.warnings.map(item => a(item))),
        r = e.filter(item => !n.has(a(item)));
      if (r.length === 0) return t;
      return {
        ...t,
        warnings: [...t.warnings, ...r]
      };
    });
  }
  markNeedsRefresh() {
    this.#e(e => e.needsRefresh ? e : {
      ...e,
      needsRefresh: !0
    });
  }
  retarget(e) {
    this.#e(t => {
      let n = t.enabled.findIndex(item => item.source === e.source && item.path === e.path),
        r = t.enabled[n];
      if (r === void 0) return t;
      let i = wAt(r, e);
      if (i === r) return t;
      return {
        ...t,
        enabled: t.enabled.with(n, i)
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
    this.#e(r => ({
      ...r,
      installationStatus: {
        ...r.installationStatus,
        marketplaces: r.installationStatus.marketplaces.map(item => item.name === e ? {
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
        needsRefresh: !1
      },
      agentDefinitions: e.agentDefinitions,
      mcp: {
        ...t.mcp,
        pluginReconnectKey: t.mcp.pluginReconnectKey + 1
      }
    }));
  }
}
export { Ssr, Kj };