// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { eQ, Jx, N2, sE, wb, nQ } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { mCe, $Gr } from "B:/~BUN/root/chunk-e0tkmfhx.js";
import { bd as token } from "B:/~BUN/root/chunk-rfp1pa77.js";
import { YFr } from "B:/~BUN/root/chunk-5g9fghtv.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
var Xet = "agent_proxy_standalone",
  A = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "host.docker.internal"].join(",");
class C {
  forwarder = void 0;
}
var S = new z(() => new C());
function h() {
  return S.of(j().host);
}
function FGr() {
  return h().forwarder !== void 0;
}
async function gei() {
  if (a.CCR_AGENT_PROXY_RELAY_MODE !== Xet) return {
    kind: "off"
  };
  let CCR_AGENT_PROXY_STANDALONE_URL = a.CCR_AGENT_PROXY_STANDALONE_URL;
  if (a.unset("CCR_AGENT_PROXY_RELAY_MODE"), a.unset("CCR_AGENT_PROXY_STANDALONE_URL"), a.unset("CCR_AGENT_PROXY_ENABLED"), a.unset("AGENT_PROXY_URL"), a.unset("AGENT_PROXY_AUTH_TOKEN"), a.unset("CCR_AGENT_PROXY_CA_CERT_B64"), a.CLAUDE_CODE_ENVIRONMENT_KIND !== "byoc") return m("agent_proxy_standalone", "not_byoc"), {
    kind: "failed",
    cause: "environment",
    message: "This session was asked to send its traffic through your own proxy (agent_proxy_standalone), which only a self-hosted runner's session can do. Claude Code does not start rather than connect directly."
  };
  let e = U(CCR_AGENT_PROXY_STANDALONE_URL);
  if (!e.ok) return m("agent_proxy_standalone", `url_${e.code}`), {
    kind: "failed",
    cause: "url",
    message: e.message
  };
  let n = await x(),
    i = n?.sessionId;
  if (!n || !i || i.includes(":")) return m("agent_proxy_standalone", "no_session_id"), {
    kind: "failed",
    cause: "session",
    message: `${R}: this session has no usable session id.`
  };
  if (!n.token()) return m("agent_proxy_standalone", "no_token"), {
    kind: "failed",
    cause: "session",
    message: `${R}: this session has no session token.`
  };
  await y();
  let T = c(E),
    P = Jx(),
    N = c(p),
    O = sE(),
    f,
    l;
  try {
    l = await $Gr({
      upstreamProxyUrl: e.url.href,
      minter: {
        async mint() {
          let o = n.token();
          if (!o) throw new mCe("the session token is not available");
          return `Basic ${Buffer.from(`${i}:${o}`).toString("base64")}`;
        }
      },
      upstreamTls: () => {
        let ca = c(E) === T ? Jx() : P,
          s = c(p) === N ? sE() : O;
        return {
          ...(s && {
            cert: s.cert,
            key: s.key,
            passphrase: s.passphrase
          }),
          ...(ca && {
            ca: ca
          }),
          rejectUnauthorized: !0
        };
      },
      onUpstreamFailure: () => (f ??= D().finally(() => {
        f = void 0;
      }), f),
      logLabel: "agent-proxy-standalone",
      unrefListener: !0,
      connectOnly: !0,
      onStatus: o => t(o, {
        level: "warn"
      }),
      onDebug: o => t(o)
    });
  } catch (error) {
    let s = k(error);
    return m("agent_proxy_standalone", "listener_failed"), t(`[agent-proxy-standalone] forwarder failed to start: ${d(error)}`, {
      level: "error"
    }), {
      kind: "failed",
      cause: "listener",
      message: `Claude Code could not start its local forwarder to the proxy named by CCR_AGENT_PROXY_STANDALONE_URL${s ? ` (${s})` : ""}, and does not start without it. Start a new session; if this keeps happening, check that the runner container allows listening on 127.0.0.1.`
    };
  }
  h().forwarder = l;
  for (let o of w) a.set(o, l.url);
  a.set("NO_PROXY", A), a.set("no_proxy", A);
  for (let [o, s] of Object.entries(YFr(process.env))) if (o !== "CLOUDSDK_PROXY_PASSWORD") process.env[o] = s;
  return a.set("CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER", !1), t(`[agent-proxy-standalone] routing through ${e.url.protocol}//${e.url.host} via 127.0.0.1:${l.port}`), g("agent_proxy_standalone"), {
    kind: "on",
    port: l.port
  };
}
function L_n(r) {
  return r?.trim() === Xet;
}
function HGr(r) {
  return {
    AGENT_PROXY_URL: void 0,
    AGENT_PROXY_AUTH_TOKEN: void 0,
    CCR_AGENT_PROXY_CA_CERT_B64: void 0,
    CCR_AGENT_PROXY_ENABLED: void 0,
    ...Object.fromEntries(L.map(item => [item, r[item]]))
  };
}
var E = ["NODE_EXTRA_CA_CERTS", "CLAUDE_CODE_CERT_STORE", "SSL_CERT_FILE", "SSL_CERT_DIR"],
  p = ["CLAUDE_CODE_CLIENT_CERT", "CLAUDE_CODE_CLIENT_KEY", "CLAUDE_CODE_CLIENT_KEY_PASSPHRASE"],
  L = [...E, ...p];
async function x() {
  if (xl()) {
    let [{
        peekSessionTunnelInput: peekSessionTunnelInput
      }, {
        parseSessionTunnelEnvelope: parseSessionTunnelEnvelope
      }] = await Promise.all([import("B:/~BUN/root/chunk-epgqx3g0.js"), import("B:/~BUN/root/chunk-svezjvmc.js")]),
      n = parseSessionTunnelEnvelope(peekSessionTunnelInput());
    if (n === void 0) return;
    let session_token = n.session_token;
    return {
      sessionId: n.session_id,
      token: () => session_token
    };
  }
  return {
    sessionId: a.CLAUDE_CODE_REMOTE_SESSION_ID,
    token: token
  };
}
function c(r) {
  return _(r.map(item => a[item]));
}
async function y() {
  let [r, e] = await Promise.all([eQ(), N2()]);
  return r || e.changed;
}
async function D() {
  if (await y()) nQ(), wb();
}
var w = ["HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "ALL_PROXY", "all_proxy"],
  R = "Claude Code cannot authenticate to the proxy named by CCR_AGENT_PROXY_STANDALONE_URL, and does not start without it",
  u = "Set it in the runner container's environment to your proxy's https:// URL (for example https://proxy.internal:3128) and start a new session. Claude Code does not start without it rather than connect directly.";
function U(r) {
  let e = r?.trim();
  if (!e) return {
    ok: !1,
    code: "missing",
    message: `This session's runner pool sends its traffic through your own proxy, but CCR_AGENT_PROXY_STANDALONE_URL is not set. ${u}`
  };
  let url;
  try {
    url = new URL(e);
  } catch {
    return {
      ok: !1,
      code: "unparsable",
      message: `CCR_AGENT_PROXY_STANDALONE_URL cannot be parsed as a URL. ${u}`
    };
  }
  if (url.protocol !== "http:" && url.protocol !== "https:" || !url.host) return {
    ok: !1,
    code: "scheme",
    message: `CCR_AGENT_PROXY_STANDALONE_URL must be an https:// URL with a host. ${u}`
  };
  if (url.protocol === "http:") return {
    ok: !1,
    code: "plaintext",
    message: `CCR_AGENT_PROXY_STANDALONE_URL must use https://, also for a proxy on this machine: Claude Code sends this session's credentials to it and checks the proxy's certificate against the CAs the runner container trusts. ${u}`
  };
  if (url.username || url.password) return {
    ok: !1,
    code: "credentials",
    message: `CCR_AGENT_PROXY_STANDALONE_URL must not include a user name or password: Claude Code signs in to the proxy with this session's own credentials. ${u}`
  };
  return {
    ok: !0,
    url: url
  };
}
export { Xet, FGr, gei, L_n, HGr };