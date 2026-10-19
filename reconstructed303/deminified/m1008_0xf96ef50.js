// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { XZ, JZ, Nwe } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { jC } from "B:/~BUN/root/chunk-j4qesy5s.js";
import { Zn } from "B:/~BUN/root/chunk-3aez4b53.js";
var c = e => (c = Array.isArray, c(e)),
  l = c;
var d = Symbol.for("brand.privateNullableHeaders");
function* h(e) {
  if (!e) return;
  if (d in e) {
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
  if (e instanceof Headers) n = e.entries();else if (l(e)) n = e;else t = !0, n = Object.entries(e ?? {});
  for (let r of n) {
    let o = r[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = l(r[1]) ? r[1] : [r[1]],
      f = !1;
    for (let s of i) {
      if (s === void 0) continue;
      if (t && !f) f = !0, yield [o, a];
      yield [o, s];
    }
  }
}
var a = Symbol("clear"),
  b = new Set(["x-stainless-helper"]),
  x = (e, t) => {
    let n = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let r of t.split(",").map(item => item.trim())) if (r && !n.includes(r)) n.push(r);
    return n.join(", ");
  },
  p = e => {
    let t = new Headers(),
      nulls_2 = new Set();
    for (let r of e) {
      let o = new Set();
      for (let [i, f] of h(r)) {
        let s = i.toLowerCase();
        if (b.has(s)) {
          if (f === a) continue;
          if (f === null) t.delete(i), nulls_2.add(s);else t.set(i, x(t.get(i), f)), nulls_2.delete(s);
          continue;
        }
        if (f === a || !o.has(s)) {
          if (t.delete(i), o.add(s), f === a) continue;
        }
        if (f === null) t.delete(i), nulls_2.add(s);else t.append(i, f), nulls_2.delete(s);
      }
    }
    return {
      [d]: !0,
      values: t,
      nulls: nulls_2
    };
  };
var u = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
class y extends Nwe {
  constructor({
    baseURL = u("ANTHROPIC_FOUNDRY_BASE_URL"),
    apiKey = u("ANTHROPIC_FOUNDRY_API_KEY"),
    resource = u("ANTHROPIC_FOUNDRY_RESOURCE"),
    azureADTokenProvider: azureADTokenProvider,
    dangerouslyAllowBrowser: dangerouslyAllowBrowser,
    ...i
  } = {}) {
    if (typeof azureADTokenProvider === "function") dangerouslyAllowBrowser = !0;
    if (!azureADTokenProvider && !apiKey) throw new Zn("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
    if (azureADTokenProvider && apiKey) throw new Zn("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
    if (!baseURL) {
      if (!resource) throw new Zn("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
      baseURL = `https://${resource}.services.ai.azure.com/anthropic/`;
    } else if (resource) throw new Zn("baseURL and resource are mutually exclusive");
    super({
      apiKey: azureADTokenProvider ?? apiKey,
      baseURL: baseURL,
      ...i,
      ...(dangerouslyAllowBrowser !== void 0 ? {
        dangerouslyAllowBrowser: dangerouslyAllowBrowser
      } : {})
    });
    this.resource = null, this.messages = w(this), this.beta = E(this), this.models = void 0;
  }
  async authHeaders() {
    if (typeof this._options.apiKey === "function") {
      let e;
      try {
        e = await this._options.apiKey();
      } catch (t) {
        if (t instanceof Zn) throw t;
        throw new Zn(`Failed to get token from azureADTokenProvider: ${t.message}`, {
          cause: t
        });
      }
      if (typeof e !== "string" || !e) throw new Zn(`Expected azureADTokenProvider function argument to return a string but it returned ${e}`);
      return p([{
        Authorization: `Bearer ${e}`
      }]);
    }
    if (typeof this._options.apiKey === "string") return p([{
      "x-api-key": this.apiKey
    }]);
    return;
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicFoundry/JS ${jC}`;
  }
}
function w(e) {
  let t = new JZ(e);
  return delete t.batches, t;
}
function E(e) {
  let t = new XZ(e);
  return delete t.messages.batches, t;
}
export { y as AnthropicFoundry };