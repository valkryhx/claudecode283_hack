// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qS, b2, VN } from "B:/~BUN/root/chunk-zafy1b6k.js";
import "B:/~BUN/root/chunk-g1mh72ry.js";
import { Wn } from "B:/~BUN/root/chunk-bgthmgyc.js";
var c = e => (c = Array.isArray, c(e)),
  a = c;
var p = Symbol.for("brand.privateNullableHeaders");
function* m(e) {
  if (!e) return;
  if (p in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let i of nulls) yield [i, null];
    return;
  }
  let t = !1,
    n;
  if (e instanceof Headers) n = e.entries();else if (a(e)) n = e;else t = !0, n = Object.entries(e ?? {});
  for (let r of n) {
    let o = r[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = a(r[1]) ? r[1] : [r[1]],
      s = !1;
    for (let f of i) {
      if (f === void 0) continue;
      if (t && !s) s = !0, yield [o, null];
      yield [o, f];
    }
  }
}
var l = e => {
  let t = new Headers(),
    nulls_2 = new Set();
  for (let r of e) {
    let o = new Set();
    for (let [i, s] of m(r)) {
      let f = i.toLowerCase();
      if (!o.has(f)) t.delete(i), o.add(f);
      if (s === null) t.delete(i), nulls_2.add(f);else t.append(i, s), nulls_2.delete(f);
    }
  }
  return {
    [p]: !0,
    values: t,
    nulls: nulls_2
  };
};
var u = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
class d extends VN {
  constructor({
    baseURL = u("ANTHROPIC_FOUNDRY_BASE_URL"),
    apiKey = u("ANTHROPIC_FOUNDRY_API_KEY"),
    resource = u("ANTHROPIC_FOUNDRY_RESOURCE"),
    azureADTokenProvider: azureADTokenProvider,
    dangerouslyAllowBrowser: dangerouslyAllowBrowser,
    ...i
  } = {}) {
    if (typeof azureADTokenProvider === "function") dangerouslyAllowBrowser = !0;
    if (!azureADTokenProvider && !apiKey) throw new Wn("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
    if (azureADTokenProvider && apiKey) throw new Wn("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
    if (!baseURL) {
      if (!resource) throw new Wn("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
      baseURL = `https://${resource}.services.ai.azure.com/anthropic/`;
    } else if (resource) throw new Wn("baseURL and resource are mutually exclusive");
    super({
      apiKey: azureADTokenProvider ?? apiKey,
      baseURL: baseURL,
      ...i,
      ...(dangerouslyAllowBrowser !== void 0 ? {
        dangerouslyAllowBrowser: dangerouslyAllowBrowser
      } : {})
    });
    this.resource = null, this.messages = b(this), this.beta = x(this), this.models = void 0;
  }
  async authHeaders() {
    if (typeof this._options.apiKey === "function") {
      let e;
      try {
        e = await this._options.apiKey();
      } catch (t) {
        if (t instanceof Wn) throw t;
        throw new Wn(`Failed to get token from azureADTokenProvider: ${t.message}`, {
          cause: t
        });
      }
      if (typeof e !== "string" || !e) throw new Wn(`Expected azureADTokenProvider function argument to return a string but it returned ${e}`);
      return l([{
        Authorization: `Bearer ${e}`
      }]);
    }
    if (typeof this._options.apiKey === "string") return l([{
      "x-api-key": this.apiKey
    }]);
    return;
  }
  validateHeaders() {
    return;
  }
}
function b(e) {
  let t = new b2(e);
  return delete t.batches, t;
}
function x(e) {
  let t = new qS(e);
  return delete t.messages.batches, t;
}
export { d as AnthropicFoundry };