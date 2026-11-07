// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { fYt, Q8o, Kui } from "B:/~BUN/root/chunk-w089myk0.js";
import { R, F, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Mo, BB } from "B:/~BUN/root/chunk-4rgskab2.js";
import { ba } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { FB } from "B:/~BUN/root/chunk-s7zmwmdt.js";
import { Wkn, m1e } from "B:/~BUN/root/chunk-5d6w0m6e.js";
import { Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { randomBytes as b } from "crypto";
import { createServer as _ } from "http";
import { parse as E } from "url";
var T = 300000,
  v = 30000,
  O = 60;
function Nkn(n) {
  try {
    let t = new URL(n);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), t.toString();
  } catch {
    return n.replace(/\/+$/, "");
  }
}
async function For(n) {
  let r = (await Kn().readAsync())?.mcpXaaIdp?.[Nkn(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= O * 1000) return;
  return r.idToken;
}
async function k(n, idToken, expiresAt) {
  await Kn().mutate(r => ({
    ...r,
    mcpXaaIdp: {
      ...r.mcpXaaIdp,
      [Nkn(n)]: {
        idToken: idToken,
        expiresAt: expiresAt
      }
    }
  }));
}
async function W_a(n, t) {
  let e = A(t),
    r = e ? e * 1000 : Date.now() + 3600000;
  return await k(n, t, r), r;
}
async function U8r(n) {
  let t = Nkn(n);
  try {
    await Kn().mutate(e => {
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
    ae("xaa", `clearIdpIdToken(${Mo(t)}) failed: ${d(error)}`);
  }
}
async function z_a(n, clientSecret) {
  try {
    return await Kn().mutate(e => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [Nkn(n)]: {
          clientSecret: clientSecret
        }
      }
    }));
  } catch (error) {
    return {
      success: !1,
      warning: d(error)
    };
  }
}
async function B8r(n) {
  return (await Kn().readAsync())?.mcpXaaIdpConfig?.[Nkn(n)]?.clientSecret;
}
async function G_a(n) {
  let t = Nkn(n);
  try {
    await Kn().mutate(e => {
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
    ae("xaa", `clearIdpClientSecret(${Mo(t)}) failed: ${d(error)}`);
  }
}
function fetchFn(n, t) {
  return fetch(n, {
    ...t,
    ...ba({
      url: String(n)
    }),
    signal: AbortSignal.timeout(v)
  }).catch(e => BB(e, n));
}
async function Hor(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new R(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${Mo(n)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t),
    r = await fetchFn(e, {
      headers: {
        Accept: "application/json"
      }
    });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${Mo(e.href)}`);
  let i;
  try {
    i = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${Mo(e.href)} (captive portal or proxy?)`);
  }
  let a = fYt.safeParse(i);
  if (!a.success) throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${Mo(a.data.token_endpoint)}`);
  return a.data;
}
function A(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = ee(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function X(n, t, e, r) {
  let i = null,
    a = null,
    l = null,
    f = () => {
      if (i?.removeAllListeners(), i?.on("error", () => {}), i?.close(), i = null, a) clearTimeout(a), a = null;
      if (e && l) e.removeEventListener("abort", l), l = null;
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
      c = s => {
        if (p) return;
        p = !0, f(), g(s);
      };
    if (e) {
      if (l = () => c(Error("XAA IdP: login cancelled")), e.aborted) {
        l();
        return;
      }
      e.addEventListener("abort", l, {
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
        S = Wkn(u.query.iss);
      if (h) {
        let error_description = u.query.error_description;
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(FB({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${h}: ${error_description ?? ""}`
        })), c(Error(`XAA IdP: ${h}${error_description ? ` \u2014 ${error_description}` : ""}`));
        return;
      }
      if (state !== t) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(FB({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), c(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!y) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(FB({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), c(Error("XAA IdP: callback missing code"));
        return;
      }
      o.writeHead(200, {
        "Content-Type": "text/html"
      }), o.end(FB({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), I(y, S);
    }), i.on("error", s => {
      if (s.code === "EADDRINUSE") {
        let o = x() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
        c(Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`));
      } else c(Error(`XAA IdP: callback server failed: ${s.message}`));
    }), i.listen(n, "127.0.0.1", () => {
      try {
        r();
      } catch (error) {
        c(F(error));
      }
    }), i.unref(), a = setTimeout(s => s(Error("XAA IdP: login timed out")), T, c), a.unref();
  });
}
async function G8o(n) {
  return ao("mcp_xaa_idp_login", async () => {
    let {
        idpIssuer: idpIssuer,
        idpClientId: e
      } = n,
      r = await For(idpIssuer);
    if (r) return ae("xaa", `Using cached id_token for ${Mo(idpIssuer)}`), r;
    ae("xaa", `No cached id_token for ${Mo(idpIssuer)}; starting OIDC login`);
    let metadata = await Hor(idpIssuer),
      a = n.callbackPort ?? (await m1e()),
      l = `http://localhost:${a}/callback`,
      state_2 = b(32).toString("base64url"),
      clientInformation = {
        client_id: e,
        ...(n.idpClientSecret && {
          client_secret: n.idpClientSecret
        })
      },
      {
        authorizationUrl: authorizationUrl,
        codeVerifier: codeVerifier
      } = await Q8o(idpIssuer, {
        metadata: metadata,
        clientInformation: clientInformation,
        redirectUrl: l,
        scope: "openid",
        state: state_2
      }),
      I = await X(a, state_2, n.abortSignal, () => {
        if (n.onAuthorizationUrl(authorizationUrl.toString()), !n.skipBrowserOpen) ae("xaa", "Opening browser to IdP authorization endpoint"), Zi(authorizationUrl.toString());
      }),
      c = await Kui(idpIssuer, {
        metadata: metadata,
        clientInformation: clientInformation,
        authorizationCode: I.code,
        iss: I.iss,
        codeVerifier: codeVerifier,
        redirectUri: l,
        fetchFn: fetchFn
      });
    if (!c.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let s = A(c.id_token),
      o = s ? s * 1000 : Date.now() + (c.expires_in ?? 3600) * 1000;
    try {
      await k(idpIssuer, c.id_token, o), ae("xaa", `Cached id_token for ${Mo(idpIssuer)} (expires ${new Date(o).toISOString()})`);
    } catch (error) {
      ae("xaa", `id_token cache write failed: ${d(error)}`);
    }
    return c.id_token;
  });
}
export { Nkn, For, W_a, U8r, z_a, B8r, G_a, Hor, G8o };