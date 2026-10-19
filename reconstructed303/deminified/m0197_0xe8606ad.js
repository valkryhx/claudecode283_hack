// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { lm, Yy } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Qke } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var d = /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/worker\/otlp\/((?:customer\/)?[a-z]+)$/;
function o(r, e) {
  let t = d.exec(r);
  return t !== null && t[1] === e;
}
function h(r) {
  let e = r.toLowerCase();
  return e === "localhost" || e === "::1" || e === "[::1]" || /^127(\.\d{1,3}){3}$/.test(e);
}
function l() {
  return a.CLAUDE_CODE_REMOTE === !0 && lm.bridgeCarrier === void 0;
}
var uin = {
  metrics: "METRICS",
  logs: "LOGS",
  traces: "TRACES"
};
function kxo(r) {
  return !!a.OTEL_EXPORTER_OTLP_HEADERS || !!a[`OTEL_EXPORTER_OTLP_${uin[r]}_HEADERS`];
}
function cIr(r) {
  if (r === "traces") return null;
  if (!l()) return null;
  let SESSION_INGRESS_URL = a.SESSION_INGRESS_URL,
    CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID,
    s = process.env[`OTEL_EXPORTER_OTLP_${uin[r]}_ENDPOINT`]?.trim();
  if (!SESSION_INGRESS_URL || !CLAUDE_CODE_REMOTE_SESSION_ID || !s) return null;
  if (kxo(r)) return null;
  let f = r === "logs" ? ["customer/logs"] : [...(X9e() ? ["customer/metrics"] : []), "metrics"];
  try {
    let E = new URL(SESSION_INGRESS_URL).origin,
      p = new URL(s).href;
    for (let c of f) {
      let i = `/v1/code/sessions/${CLAUDE_CODE_REMOTE_SESSION_ID}/worker/otlp/${c}`,
        n = new URL(`${E}${i}`).href;
      if (o(i, c) && Yy(n) && p === n) return n;
    }
    return null;
  } catch {
    return null;
  }
}
function X9e() {
  return de() && cIr("logs") !== null;
}
function pin(r) {
  return X9e() ? Qke(r) : r;
}
function uIr() {
  if (!l()) return null;
  let OTEL_EXPORTER_OTLP_TRACES_ENDPOINT = a.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) return null;
  let e;
  try {
    e = new URL(OTEL_EXPORTER_OTLP_TRACES_ENDPOINT);
  } catch {
    return null;
  }
  if (!(e.protocol === "https:" || e.protocol === "http:" && h(e.hostname)) || e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || !Yy(e.href) || !o(e.pathname, "traces")) return null;
  return e.href;
}
function IHs() {
  let OTEL_EXPORTER_OTLP_TRACES_ENDPOINT_2 = a.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!OTEL_EXPORTER_OTLP_TRACES_ENDPOINT_2) return !1;
  try {
    let e = new URL(OTEL_EXPORTER_OTLP_TRACES_ENDPOINT_2);
    return Yy(e.href) && o(e.pathname, "traces");
  } catch {
    return !1;
  }
}
class u {
  armed = !1;
  frozen = void 0;
  arm() {
    this.armed = !0;
  }
  freeze() {
    this.frozen = this.armed;
  }
  resolve(r) {
    if (this.frozen !== void 0) return this.frozen;
    return this.armed || r();
  }
  reset() {
    this.armed = !1, this.frozen = void 0;
  }
}
var pIr = new u();
function fin() {
  return pIr.resolve(() => uIr() !== null);
}
export { uin, kxo, cIr, X9e, pin, uIr, IHs, pIr, fin };