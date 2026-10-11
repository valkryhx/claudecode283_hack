// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Wn } from "B:/~BUN/root/chunk-bgthmgyc.js";
var d$o = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  u$o = "refresh_token",
  OYn = "/v1/oauth/token",
  Nft = "oauth-2025-04-20",
  p$o = "oidc-federation-2026-04-01",
  f$o = 120,
  xUe = 30,
  m$o = 5,
  p = 1048576;
function MYn(e) {
  if (!e) return;
  let r;
  try {
    r = new URL(e);
  } catch (error) {
    throw new fc(`Invalid token endpoint base URL "${e}": ${error}`);
  }
  if (r.protocol === "https:") return;
  let t = r.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (r.protocol === "http:" && (t === "localhost" || t === "127.0.0.1" || t === "::1")) return;
  throw new fc(`Refusing to send credential over non-https token endpoint "${e}"`);
}
async function DYn(e, r) {
  let t = await l(e),
    n;
  try {
    n = JSON.parse(t);
  } catch {
    throw new fc(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, FJ(t), r);
  }
  if (!n.access_token) throw new fc(`Token endpoint response missing access_token: ${JSON.stringify(FJ(n))}`, e.status, FJ(n), r);
  if (n.token_type && n.token_type.toLowerCase() !== "bearer") throw new fc(`Token endpoint response: unsupported token_type "${n.token_type}" (want Bearer)`, e.status, FJ(n), r);
  return n;
}
var c = 2000,
  u = new Set(["error", "error_description", "error_uri"]);
function FJ(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let r;
    try {
      r = JSON.parse(e);
    } catch {
      if (e.length <= c) return e;
      return e.slice(0, c) + `... <${e.length - c} more chars>`;
    }
    return JSON.stringify(FJ(r));
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let r = {};
    for (let [t, n] of Object.entries(e)) if (u.has(t)) r[t] = n;
    return r;
  }
  return null;
}
async function Hft(e, r = t => console.warn(`anthropic-sdk: ${t}`)) {
  return;
}
async function u_e(e, r) {
  let t = await import("fs"),
    n = await import("path"),
    i = n.dirname(e);
  await t.promises.mkdir(i, {
    recursive: !0,
    mode: 448
  });
  let s = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let o = await t.promises.open(s, "w", 384);
    try {
      await o.writeFile(JSON.stringify(r, null, 2)), await o.sync();
    } finally {
      await o.close();
    }
    await t.promises.rename(s, e);
  } catch (error) {
    throw await t.promises.unlink(s).catch(() => {}), error;
  }
  try {
    let o = await t.promises.open(i, "r");
    try {
      await o.sync();
    } finally {
      await o.close();
    }
  } catch {}
}
async function l(e) {
  if (!e.body) return "";
  let r = e.body.getReader(),
    t = [],
    n = 0;
  for (;;) {
    let {
      done: done,
      value: value
    } = await r.read();
    if (done) break;
    if (n + value.length > p) {
      let a = p - n;
      if (a > 0) t.push(value.subarray(0, a));
      await r.cancel();
      break;
    }
    t.push(value), n += value.length;
  }
  let i;
  if (t.length === 1) i = t[0];else {
    i = new Uint8Array(t.reduce((acc, item) => acc + item.length, 0));
    let s = 0;
    for (let o of t) i.set(o, s), s += o.length;
  }
  return new TextDecoder("utf-8").decode(i);
}
class fc extends Wn {
  constructor(e, r = null, t = null, n = null) {
    super(e);
    this.statusCode = r, this.body = t, this.requestId = n;
  }
}
export { d$o, u$o, OYn, Nft, p$o, f$o, xUe, m$o, MYn, DYn, FJ, Hft, u_e, fc };