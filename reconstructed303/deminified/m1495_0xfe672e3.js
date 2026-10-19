// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Ff, Zy } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { isIP as m } from "net";
var s = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};
function c() {
  let e = a.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
  return e && e in s ? s[e] : s.info;
}
var f = {
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t"
};
function g(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, r => f[r] ?? `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function _r(e, r) {
  if (s[e] < c()) return;
  process.stderr.write(`[gateway] ${new Date().toISOString()} ${e} ${g(r)}
`);
}
function r8(evt, r) {
  process.stderr.write(`${JSON.stringify({
    ts: new Date().toISOString(),
    evt: evt,
    ...r
  })}
`);
}
function CKo(e, r) {
  process.stderr.write(`
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
` + `\u2502  Claude Code Gateway                \u2502
` + `\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`);
  let d = r.tls ? "https" : "http",
    u = ["metrics", "logs", "traces"].filter(item => e.telemetry.forward_to.some(o => o[item]));
  if (_r("info", `claude gateway listening on ${d}://${r.hostname}:${r.port}`), e.listen.public_url) _r("info", `public_url ${e.listen.public_url}`);
  let n = e.listen.trusted_proxies.length;
  if (_r("info", n === 0 ? "client IPs: TCP peer address (listen.trusted_proxies empty)" : `client IPs: X-Forwarded-For via listen.trusted_proxies (${n} ${n === 1 ? "entry" : "entries"})`), e.oidc) {
    _r("info", `oidc issuer ${e.oidc.issuer}`);
    let t = e.oidc.allowed_email_domains ?? [];
    _r("info", `email domains ${t.length > 0 ? t.join(",") : "(unrestricted)"}`);
    let o = e.oidc.allowed_groups ?? [];
    _r("info", `allowed groups ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
  } else _r("info", "oidc: not configured (customer-routed inference only)");
  if (e.cri?.enabled) _r("info", `customer-routed inference: enabled (${e.cri.org_allowlist.length} allowed org(s), policy webhook ${e.cri.policy?.webhook ? "configured" : "not configured"})`);
  _r("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map(item => `${item.name}(${item.provider})`).join(", ")}`), _r("info", e.telemetry.forward_to.length === 0 ? "telemetry relay: not configured" : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${u.join(",") || "none"}`);
  for (let t of e.telemetry.forward_to) {
    let {
      host: host,
      hostname: hostname
    } = new URL(t.url);
    if (!m(hostname.replace(/^\[|\]$/g, "")) && Ff() && Zy(t.url)) _r("info", `telemetry relay: ${host} matches NO_PROXY; exports to it skip the proxy`);
  }
  _r("info", `managed settings: ${r.managed ? "configured" : "not configured"}`), _r("info", `upstream requests: at most ${r.outboundLimit} at once per process (set BUN_CONFIG_MAX_HTTP_REQUESTS to change)`);
  let i = e.upstreams.filter(item => item.provider !== "anthropic");
  if (e.timeouts.operator_set && i.length > 0) _r("info", `timeouts.upstream_ttfb_ms: ${e.timeouts.upstream_ttfb_ms} ms also applies to streaming and count_tokens requests on ${i.map(item => item.name).join(", ")} (older gateways applied it to provider: anthropic upstreams only)`);
  let readiness_grace_seconds = e.store.readiness_grace_seconds;
  if (readiness_grace_seconds > 0) _r("info", `readiness: /readyz keeps reporting ready for up to ${readiness_grace_seconds}s after Postgres stops answering (store.readiness_grace_seconds)`);
}
export { _r, r8, CKo };