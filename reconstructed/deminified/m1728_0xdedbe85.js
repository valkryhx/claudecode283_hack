// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v2e } from "B:/~BUN/root/chunk-gyysn9h9.js";
import { gpr, gio } from "B:/~BUN/root/chunk-mj5a0y0g.js";
import { P, te, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { ne, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { Un } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { vr, xP } from "B:/~BUN/root/chunk-sjxe7c01.js";
import { yi } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { RP, UEt, zpe } from "B:/~BUN/root/chunk-bxy1tk0j.js";
import { Ko } from "B:/~BUN/root/chunk-v8s05yj9.js";
import { randomBytes as x } from "crypto";
import { createServer as _ } from "http";
import { parse as E } from "url";
var T = 300000,
  v = 30000,
  X = 60;
function Zkt(n) {
  try {
    let t = new URL(n);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), t.toString();
  } catch {
    return n.replace(/\/+$/, "");
  }
}
async function N5t(n) {
  let r = (await Un().readAsync())?.mcpXaaIdp?.[Zkt(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= X * 1000) return;
  return r.idToken;
}
async function k(n, idToken, expiresAt) {
  await Un().mutate(r => ({
    ...r,
    mcpXaaIdp: {
      ...r.mcpXaaIdp,
      [Zkt(n)]: {
        idToken: idToken,
        expiresAt: expiresAt
      }
    }
  }));
}
async function S4o(n, t) {
  let e = C(t),
    r = e ? e * 1000 : Date.now() + 3600000;
  return await k(n, t, r), r;
}
async function Hxn(n) {
  let t = Zkt(n);
  try {
    await Un().mutate(e => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let mcpXaaIdp = {
        ...e.mcpXaaIdp
      };
      return delete mcpXaaIdp[t], {
        ...e,
        mcpXaaIdp: mcpXaaIdp
      };
    });
  } catch (error) {
    ne("xaa", `clearIdpIdToken(${vr(t)}) failed: ${l(error)}`);
  }
}
async function w4o(n, clientSecret) {
  try {
    return await Un().mutate(e => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [Zkt(n)]: {
          clientSecret: clientSecret
        }
      }
    }));
  } catch (error) {
    return {
      success: !1,
      warning: l(error)
    };
  }
}
async function Fxn(n) {
  return (await Un().readAsync())?.mcpXaaIdpConfig?.[Zkt(n)]?.clientSecret;
}
async function v4o(n) {
  let t = Zkt(n);
  try {
    await Un().mutate(e => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let mcpXaaIdpConfig = {
        ...e.mcpXaaIdpConfig
      };
      return delete mcpXaaIdpConfig[t], {
        ...e,
        mcpXaaIdpConfig: mcpXaaIdpConfig
      };
    });
  } catch (error) {
    ne("xaa", `clearIdpClientSecret(${vr(t)}) failed: ${l(error)}`);
  }
}
function fetchFn(n, t) {
  return fetch(n, {
    ...t,
    ...yi({
      url: String(n)
    }),
    signal: AbortSignal.timeout(v)
  }).catch(e => xP(e, n));
}
async function H5t(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new P(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${vr(n)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t),
    r = await fetchFn(e, {
      headers: {
        Accept: "application/json"
      }
    });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${vr(e.href)}`);
  let i;
  try {
    i = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${vr(e.href)} (captive portal or proxy?)`);
  }
  let a = v2e.safeParse(i);
  if (!a.success) throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${vr(a.data.token_endpoint)}`);
  return a.data;
}
function C(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = J(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function R(n, t, e, r) {
  let i = null,
    a = null,
    c = null,
    f = () => {
      if (i?.removeAllListeners(), i?.on("error", () => {}), i?.close(), i = null, a) clearTimeout(a), a = null;
      if (e && c) e.removeEventListener("abort", c), c = null;
    };
  return new Promise((m, g) => {
    let p = !1,
      I = (code, iss) => {
        if (p) return;
        p = !0, f(), m({
          code: code,
          iss: iss
        });
      },
      d = s => {
        if (p) return;
        p = !0, f(), g(s);
      };
    if (e) {
      if (c = () => d(Error("XAA IdP: login cancelled")), e.aborted) {
        c();
        return;
      }
      e.addEventListener("abort", c, {
        once: !0
      });
    }
    i = _((s, o) => {
      let u = E(s.url || "", !0);
      if (u.pathname !== "/callback") {
        o.writeHead(404), o.end();
        return;
      }
      let y = u.query.code,
        state = u.query.state,
        h = u.query.error,
        b = UEt(u.query.iss);
      if (h) {
        let error_description = u.query.error_description;
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(RP({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${h}: ${error_description ?? ""}`
        })), d(Error(`XAA IdP: ${h}${error_description ? ` \u2014 ${error_description}` : ""}`));
        return;
      }
      if (state !== t) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(RP({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), d(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!y) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(RP({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), d(Error("XAA IdP: callback missing code"));
        return;
      }
      o.writeHead(200, {
        "Content-Type": "text/html"
      }), o.end(RP({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), I(y, b);
    }), i.on("error", s => {
      if (s.code === "EADDRINUSE") {
        let o = O() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
        d(Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`));
      } else d(Error(`XAA IdP: callback server failed: ${s.message}`));
    }), i.listen(n, "127.0.0.1", () => {
      try {
        r();
      } catch (error) {
        d(te(error));
      }
    }), i.unref(), a = setTimeout(s => s(Error("XAA IdP: login timed out")), T, d), a.unref();
  });
}
async function upr(n) {
  return Or("mcp_xaa_idp_login", async () => {
    let {
        idpIssuer: idpIssuer,
        idpClientId: e
      } = n,
      r = await N5t(idpIssuer);
    if (r) return ne("xaa", `Using cached id_token for ${vr(idpIssuer)}`), r;
    ne("xaa", `No cached id_token for ${vr(idpIssuer)}; starting OIDC login`);
    let metadata = await H5t(idpIssuer),
      a = n.callbackPort ?? (await zpe()),
      c = `http://localhost:${a}/callback`,
      state_2 = x(32).toString("base64url"),
      clientInformation = {
        client_id: e,
        ...(n.idpClientSecret && {
          client_secret: n.idpClientSecret
        })
      },
      {
        authorizationUrl: authorizationUrl,
        codeVerifier: codeVerifier
      } = await gpr(idpIssuer, {
        metadata: metadata,
        clientInformation: clientInformation,
        redirectUrl: c,
        scope: "openid",
        state: state_2
      }),
      I = await R(a, state_2, n.abortSignal, () => {
        if (n.onAuthorizationUrl(authorizationUrl.toString()), !n.skipBrowserOpen) ne("xaa", "Opening browser to IdP authorization endpoint"), Ko(authorizationUrl.toString());
      }),
      d = await gio(idpIssuer, {
        metadata: metadata,
        clientInformation: clientInformation,
        authorizationCode: I.code,
        iss: I.iss,
        codeVerifier: codeVerifier,
        redirectUri: c,
        fetchFn: fetchFn
      });
    if (!d.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let s = C(d.id_token),
      o = s ? s * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
    try {
      await k(idpIssuer, d.id_token, o), ne("xaa", `Cached id_token for ${vr(idpIssuer)} (expires ${new Date(o).toISOString()})`);
    } catch (error) {
      ne("xaa", `id_token cache write failed: ${l(error)}`);
    }
    return d.id_token;
  });
}
export { Zkt, N5t, S4o, Hxn, w4o, Fxn, v4o, H5t, upr };