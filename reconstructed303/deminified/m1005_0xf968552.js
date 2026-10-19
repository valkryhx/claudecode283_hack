// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { XZ, JZ, fct } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { qKn } from "B:/~BUN/root/chunk-rt8rx4y9.js";
import { jC } from "B:/~BUN/root/chunk-j4qesy5s.js";
import { zu } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var _ = ve(qKn(), 1);
var g = e => {
  if (e instanceof Error) return e;
  if (typeof e === "object" && e !== null) {
    try {
      let t = Object.prototype.toString.call(e);
      if (t === "[object Error]" || t === "[object DOMException]") {
        let r = Error(e.message, e.cause ? {
          cause: e.cause
        } : {});
        if (e.stack) r.stack = e.stack;
        if (e.cause && !r.cause) r.cause = e.cause;
        if (e.name) r.name = e.name;
        return r;
      }
    } catch {}
    try {
      return Error(JSON.stringify(e));
    } catch {}
  }
  return Error(e);
};
var l = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var d = e => (d = Array.isArray, d(e)),
  f = d;
function b(e) {
  return e != null && typeof e === "object" && !Array.isArray(e);
}
var w = e => {
  try {
    return JSON.parse(e);
  } catch (error) {
    return;
  }
};
var y = Symbol.for("brand.privateNullableHeaders");
function* O(e) {
  if (!e) return;
  if (y in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let i of nulls) yield [i, null];
    return;
  }
  let t = !1,
    r;
  if (e instanceof Headers) r = e.entries();else if (f(e)) r = e;else t = !0, r = Object.entries(e ?? {});
  for (let o of r) {
    let a = o[0];
    if (typeof a !== "string") throw TypeError("expected header name to be a string");
    let i = f(o[1]) ? o[1] : [o[1]],
      n = !1;
    for (let s of i) {
      if (s === void 0) continue;
      if (t && !n) n = !0, yield [a, u];
      yield [a, s];
    }
  }
}
var u = Symbol("clear"),
  C = new Set(["x-stainless-helper"]),
  P = (e, t) => {
    let r = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let o of t.split(",").map(item => item.trim())) if (o && !r.includes(o)) r.push(o);
    return r.join(", ");
  },
  E = e => {
    let t = new Headers(),
      nulls_2 = new Set();
    for (let o of e) {
      let a = new Set();
      for (let [i, n] of O(o)) {
        let s = i.toLowerCase();
        if (C.has(s)) {
          if (n === u) continue;
          if (n === null) t.delete(i), nulls_2.add(s);else t.set(i, P(t.get(i), n)), nulls_2.delete(s);
          continue;
        }
        if (n === u || !a.has(s)) {
          if (t.delete(i), a.add(s), n === u) continue;
        }
        if (n === null) t.delete(i), nulls_2.add(s);else t.append(i, n), nulls_2.delete(s);
      }
    }
    return {
      [y]: !0,
      values: t,
      nulls: nulls_2
    };
  };
var j = function (e, t, r, o) {
    if (r === "a" && !o) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? o : r === "a" ? o.call(e) : o ? o.value : t.get(e);
  },
  h,
  x,
  R = "vertex-2023-10-16",
  T = new Set(["/v1/messages", "/v1/messages?beta=true"]);
class A extends fct {
  constructor({
    baseURL = l("ANTHROPIC_VERTEX_BASE_URL"),
    region = l("CLOUD_ML_REGION") ?? null,
    projectId = l("ANTHROPIC_VERTEX_PROJECT_ID") ?? null,
    ...o
  } = {}) {
    if (!region) throw Error("No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.");
    if (!baseURL) switch (region) {
      case "global":
        baseURL = "https://aiplatform.googleapis.com/v1";
        break;
      case "us":
        baseURL = "https://aiplatform.us.rep.googleapis.com/v1";
        break;
      case "eu":
        baseURL = "https://aiplatform.eu.rep.googleapis.com/v1";
        break;
      default:
        baseURL = `https://${region}-aiplatform.googleapis.com/v1`;
    }
    super({
      baseURL: baseURL,
      apiKey: null,
      authToken: null,
      ...o
    });
    if (h.add(this), this.messages = N(this), this.beta = S(this), this.region = region, this.projectId = projectId, this.accessToken = o.accessToken ?? null, o.authClient && o.googleAuth) throw Error("You cannot provide both `authClient` and `googleAuth`. Please provide only one of them.");else if (o.authClient) this._authClientPromise = Promise.resolve(o.authClient);else this._auth = o.googleAuth ?? new _.GoogleAuth({
      scopes: "https://www.googleapis.com/auth/cloud-platform"
    }), this._authClientPromise = this._auth.getClient();
  }
  validateHeaders() {}
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  async authHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicVertex/JS ${jC}`;
  }
  backendMiddleware() {
    return [async (e, t, r) => t(await j(this, h, "m", x).call(this, e, r.options))];
  }
}
h = new WeakSet(), x = async function (t, r) {
  let o, a;
  try {
    o = await this._authClientPromise, a = await o.getRequestHeaders();
  } catch (error) {
    throw new zu({
      message: "Failed to acquire Google OAuth credentials.",
      cause: g(error)
    });
  }
  let i = o.projectId ?? a.get("x-goog-user-project");
  if (!this.projectId && i) this.projectId = i;
  let n = new URL(t.url),
    s;
  if (typeof t.body === "string") {
    let c = w(t.body);
    if (b(c)) s = c;
  }
  if (s && !s.anthropic_version) s.anthropic_version = R;
  if (r && T.has(r.path) && r.method === "post") {
    let c = r.path.split("?")[0];
    if (n.pathname.endsWith(c)) {
      if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
      if (!s) throw Error("Expected request body to be an object for post /v1/messages");
      let model = s.model;
      delete s.model;
      let v = s.stream ?? !1 ? "streamRawPredict" : "rawPredict",
        I = n.pathname.slice(0, n.pathname.length - c.length);
      n.pathname = `${I}/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/${model}:${v}`, n.searchParams.delete("beta");
    }
  }
  if (r && (r.path === "/v1/messages/count_tokens" || r.path == "/v1/messages/count_tokens?beta=true" && r.method === "post")) {
    let c = r.path.split("?")[0];
    if (n.pathname.endsWith(c)) {
      if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
      let p = n.pathname.slice(0, n.pathname.length - c.length);
      n.pathname = `${p}/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/count-tokens:rawPredict`, n.searchParams.delete("beta");
    }
  }
  let m = {
    ...t,
    url: n.toString(),
    headers: E([a, t.headers]).values
  };
  if (s) m.body = JSON.stringify(s);
  return m;
};
function N(e) {
  let t = new JZ(e);
  return delete t.batches, t;
}
function S(e) {
  let t = new XZ(e);
  return delete t.messages.batches, t;
}
export { A as AnthropicVertex };