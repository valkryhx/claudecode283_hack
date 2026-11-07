// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { cm, ey } from "B:/~BUN/root/chunk-wthaftk0.js";
import { isIP as c } from "net";
var l = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};
function g() {
  let e = i.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
  return e && e in l ? l[e] : l.info;
}
function u() {
  return i.CLAUDE_GATEWAY_LOG_FORMAT?.toLowerCase() === "json";
}
var f = {
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t"
};
function _(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, r => f[r] ?? `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Tr(e, r) {
  if (l[e] < g()) return;
  let time = new Date().toISOString(),
    message = _(r),
    severity = e === "warn" ? "WARNING" : e.toUpperCase();
  process.stderr.write(u() ? `${JSON.stringify({
    severity: severity,
    time: time,
    message: message
  })}
` : `[gateway] ${time} ${e} ${message}
`);
}
function b4s(e) {
  if (u()) Tr("error", `claude gateway: ${e}`);else process.stderr.write(`claude gateway: ${e}
`);
}
function CY(evt, r) {
  process.stderr.write(`${JSON.stringify({
    ts: new Date().toISOString(),
    evt: evt,
    ...r
  })}
`);
}
function S4s(e, r) {
  if (!u()) process.stderr.write(`
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
` + `\u2502  Claude Code Gateway                \u2502
` + `\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`);
  let n = r.tls ? "https" : "http",
    a = ["metrics", "logs", "traces"].filter(item => e.telemetry.forward_to.some(o => o[item]));
  if (Tr("info", `claude gateway listening on ${n}://${r.hostname}:${r.port}`), e.listen.public_url) Tr("info", `public_url ${e.listen.public_url}`);
  let s = e.listen.trusted_proxies.length;
  if (Tr("info", s === 0 ? "client IPs: TCP peer address (listen.trusted_proxies empty)" : `client IPs: X-Forwarded-For via listen.trusted_proxies (${s} ${s === 1 ? "entry" : "entries"})`), e.oidc) {
    Tr("info", `oidc issuer ${e.oidc.issuer}`);
    let t = e.oidc.allowed_email_domains ?? [];
    Tr("info", `email domains ${t.length > 0 ? t.join(",") : "(unrestricted)"}`);
    let o = e.oidc.allowed_groups ?? [];
    Tr("info", `allowed groups ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
  } else Tr("info", "oidc: not configured (customer-routed inference only)");
  if (e.cri?.enabled) Tr("info", `customer-routed inference: enabled (${e.cri.org_allowlist.length} allowed org(s), policy webhook ${e.cri.policy?.webhook ? "configured" : "not configured"})`);
  Tr("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map(item => `${item.name}(${item.provider}${item.groups ? `, groups: ${item.groups.join(", ")}` : ""})`).join(", ")}`), Tr("info", e.telemetry.forward_to.length === 0 ? "telemetry relay: not configured" : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${a.join(",") || "none"}`);
  for (let t of e.telemetry.forward_to) {
    let {
      host: host,
      hostname: hostname
    } = new URL(t.url);
    if (!c(hostname.replace(/^\[|\]$/g, "")) && cm() && ey(t.url)) Tr("info", `telemetry relay: ${host} matches NO_PROXY; exports to it skip the proxy`);
  }
  Tr("info", `managed settings: ${r.managed ? "configured" : "not configured"}`), Tr("info", `upstream requests: at most ${r.outboundLimit} at once per process (set BUN_CONFIG_MAX_HTTP_REQUESTS to change)`);
  let d = e.upstreams.filter(item => item.provider !== "anthropic");
  if (e.timeouts.operator_set && d.length > 0) Tr("info", `timeouts.upstream_ttfb_ms: ${e.timeouts.upstream_ttfb_ms} ms also applies to streaming and count_tokens requests on ${d.map(item => item.name).join(", ")} (older gateways applied it to provider: anthropic upstreams only)`);
  let readiness_grace_seconds = e.store.readiness_grace_seconds;
  if (readiness_grace_seconds > 0) Tr("info", `readiness: /readyz keeps reporting ready for up to ${readiness_grace_seconds}s after Postgres stops answering (store.readiness_grace_seconds)`);
}
export { Tr, b4s, CY, S4s };