// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { $u } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Jl } from "B:/~BUN/root/chunk-nzh2qzgc.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vfe } from "B:/~BUN/root/chunk-1ks9vs37.js";
var d = /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/worker\/otlp\/((?:customer\/)?[a-z]+)$/;
function o(r, e) {
  let t = d.exec(r);
  return t !== null && t[1] === e;
}
function h(r) {
  let e = r.toLowerCase();
  return e === "localhost" || e === "::1" || e === "[::1]" || /^127(\.\d{1,3}){3}$/.test(e);
}
function u() {
  return i.CLAUDE_CODE_REMOTE === !0 && Jl.bridgeCarrier === void 0;
}
var Vnn = {
  metrics: "METRICS",
  logs: "LOGS",
  traces: "TRACES"
};
function O(r) {
  return !!i.OTEL_EXPORTER_OTLP_HEADERS || !!i[`OTEL_EXPORTER_OTLP_${Vnn[r]}_HEADERS`];
}
function d_o(r) {
  if (r === "traces") return null;
  if (!u()) return null;
  let SESSION_INGRESS_URL = i.SESSION_INGRESS_URL,
    CLAUDE_CODE_REMOTE_SESSION_ID = i.CLAUDE_CODE_REMOTE_SESSION_ID,
    s = process.env[`OTEL_EXPORTER_OTLP_${Vnn[r]}_ENDPOINT`]?.trim();
  if (!SESSION_INGRESS_URL || !CLAUDE_CODE_REMOTE_SESSION_ID || !s) return null;
  if (O(r)) return null;
  let f = r === "logs" ? ["customer/logs"] : [...(vQe() ? ["customer/metrics"] : []), "metrics"];
  try {
    let E = new URL(SESSION_INGRESS_URL).origin,
      p = new URL(s).href;
    for (let c of f) {
      let l = `/v1/code/sessions/${CLAUDE_CODE_REMOTE_SESSION_ID}/worker/otlp/${c}`,
        n = new URL(`${E}${l}`).href;
      if (o(l, c) && $u(n) && p === n) return n;
    }
    return null;
  } catch {
    return null;
  }
}
function vQe() {
  return q() && d_o("logs") !== null;
}
function a$n(r) {
  return vQe() ? vfe(r) : r;
}
function c_o() {
  if (!u()) return null;
  let OTEL_EXPORTER_OTLP_TRACES_ENDPOINT = i.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) return null;
  let e;
  try {
    e = new URL(OTEL_EXPORTER_OTLP_TRACES_ENDPOINT);
  } catch {
    return null;
  }
  if (!(e.protocol === "https:" || e.protocol === "http:" && h(e.hostname)) || e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || !$u(e.href) || !o(e.pathname, "traces")) return null;
  return e.href;
}
function bKi() {
  let OTEL_EXPORTER_OTLP_TRACES_ENDPOINT_2 = i.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!OTEL_EXPORTER_OTLP_TRACES_ENDPOINT_2) return !1;
  try {
    let e = new URL(OTEL_EXPORTER_OTLP_TRACES_ENDPOINT_2);
    return $u(e.href) && o(e.pathname, "traces");
  } catch {
    return !1;
  }
}
class a {
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
var u_o = new a();
function ngt() {
  return u_o.resolve(() => c_o() !== null);
}
export { Vnn, d_o, vQe, a$n, c_o, bKi, u_o, ngt };