// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  jIn,
  Pfr,
  fao
} from "B:/~BUN/root/chunk-qnvaq2fk.js";
import {
  P,
  te,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  J
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  ne,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Un
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  vr,
  xP
} from "B:/~BUN/root/chunk-sjxe7c01.js";
import {
  yi
} from "B:/~BUN/root/chunk-2ppgegpr.js";
import {
  RP,
  zpe
} from "B:/~BUN/root/chunk-bxy1tk0j.js";
import {
  Ko
} from "B:/~BUN/root/chunk-v8s05yj9.js";
import {
  randomBytes as x
} from "crypto";
import {
  createServer as _
} from "http";
import {
  parse as b
} from "url";
var E = 300000,
  T = 30000,
  v = 60;

function bEt(r) {
  try {
    let t = new URL(r);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), t.toString()
  } catch {
    return r.replace(/\/+$/, "")
  }
}
async function _8t(r) {
  let n = (await Un().readAsync())?.mcpXaaIdp?.[bEt(r)];
  if (!n) return;
  if (n.expiresAt - Date.now() <= v * 1000) return;
  return n.idToken
}
async function k(r, t, e) {
  await Un().mutate((n) => ({
    ...n,
    mcpXaaIdp: {
      ...n.mcpXaaIdp,
      [bEt(r)]: {
        idToken: t,
        expiresAt: e
      }
    }
  }))
}
async function L4o(r, t) {
  let e = S(t),
    n = e ? e * 1000 : Date.now() + 3600000;
  return await k(r, t, n), n
}
async function bIn(r) {
  let t = bEt(r);
  try {
    await Un().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let n = {
        ...e.mcpXaaIdp
      };
      return delete n[t], {
        ...e,
        mcpXaaIdp: n
      }
    })
  } catch (e) {
    ne("xaa", `clearIdpIdToken(${vr(t)}) failed: ${l(e)}`)
  }
}
async function N4o(r, t) {
  try {
    return await Un().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [bEt(r)]: {
          clientSecret: t
        }
      }
    }))
  } catch (e) {
    return {
      success: !1,
      warning: l(e)
    }
  }
}
async function SIn(r) {
  return (await Un().readAsync())?.mcpXaaIdpConfig?.[bEt(r)]?.clientSecret
}
async function H4o(r) {
  let t = bEt(r);
  try {
    await Un().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let n = {
        ...e.mcpXaaIdpConfig
      };
      return delete n[t], {
        ...e,
        mcpXaaIdpConfig: n
      }
    })
  } catch (e) {
    ne("xaa", `clearIdpClientSecret(${vr(t)}) failed: ${l(e)}`)
  }
}

function A(r, t) {
  return fetch(r, {
    ...t,
    ...yi({
      url: String(r)
    }),
    signal: AbortSignal.timeout(T)
  }).catch((e) => xP(e, r))
}
async function b8t(r) {
  let t = r.endsWith("/") ? r : r + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new P(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${vr(r)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t),
    n = await A(e, {
      headers: {
        Accept: "application/json"
      }
    });
  if (!n.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${n.status} at ${vr(e.href)}`);
  let o;
  try {
    o = await n.json()
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${vr(e.href)} (captive portal or proxy?)`)
  }
  let i = jIn.safeParse(o);
  if (!i.success) throw Error(`XAA IdP: invalid OIDC metadata: ${i.error.message}`);
  if (!URL.canParse(i.data.token_endpoint) || new URL(i.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${vr(i.data.token_endpoint)}`);
  return i.data
}

function S(r) {
  let t = r.split(".");
  if (t.length !== 3) return;
  try {
    let e = J(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0
  } catch {
    return
  }
}

function X(r, t, e, n) {
  let o = null,
    i = null,
    c = null,
    m = () => {
      if (o?.removeAllListeners(), o?.on("error", () => {}), o?.close(), o = null, i) clearTimeout(i), i = null;
      if (e && c) e.removeEventListener("abort", c), c = null
    };
  return new Promise((f, g) => {
    let p = !1,
      h = (a) => {
        if (p) return;
        p = !0, m(), f(a)
      },
      d = (a) => {
        if (p) return;
        p = !0, m(), g(a)
      };
    if (e) {
      if (c = () => d(Error("XAA IdP: login cancelled")), e.aborted) {
        c();
        return
      }
      e.addEventListener("abort", c, {
        once: !0
      })
    }
    o = _((a, s) => {
      let u = b(a.url || "", !0);
      if (u.pathname !== "/callback") {
        s.writeHead(404), s.end();
        return
      }
      let y = u.query.code,
        C = u.query.state,
        I = u.query.error;
      if (I) {
        let w = u.query.error_description;
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(RP({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${I}: ${w??""}`
        })), d(Error(`XAA IdP: ${I}${w?` \u2014 ${w}`:""}`));
        return
      }
      if (C !== t) {
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(RP({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), d(Error("XAA IdP: state mismatch (possible CSRF)"));
        return
      }
      if (!y) {
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(RP({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), d(Error("XAA IdP: callback missing code"));
        return
      }
      s.writeHead(200, {
        "Content-Type": "text/html"
      }), s.end(RP({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), h(y)
    }), o.on("error", (a) => {
      if (a.code === "EADDRINUSE") {
        let s = O() === "windows" ? `netstat -ano | findstr :${r}` : `lsof -ti:${r} -sTCP:LISTEN`;
        d(Error(`XAA IdP: callback port ${r} is already in use. Run \`${s}\` to find the holder.`))
      } else d(Error(`XAA IdP: callback server failed: ${a.message}`))
    }), o.listen(r, "127.0.0.1", () => {
      try {
        n()
      } catch (a) {
        d(te(a))
      }
    }), o.unref(), i = setTimeout((a) => a(Error("XAA IdP: login timed out")), E, d), i.unref()
  })
}
async function Fpr(r) {
  return Or("mcp_xaa_idp_login", async () => {
    let {
      idpIssuer: t,
      idpClientId: e
    } = r, n = await _8t(t);
    if (n) return ne("xaa", `Using cached id_token for ${vr(t)}`), n;
    ne("xaa", `No cached id_token for ${vr(t)}; starting OIDC login`);
    let o = await b8t(t),
      i = r.callbackPort ?? await zpe(),
      c = `http://localhost:${i}/callback`,
      m = x(32).toString("base64url"),
      f = {
        client_id: e,
        ...r.idpClientSecret && {
          client_secret: r.idpClientSecret
        }
      },
      {
        authorizationUrl: g,
        codeVerifier: p
      } = await Pfr(t, {
        metadata: o,
        clientInformation: f,
        redirectUrl: c,
        scope: "openid",
        state: m
      }),
      h = await X(i, m, r.abortSignal, () => {
        if (r.onAuthorizationUrl(g.toString()), !r.skipBrowserOpen) ne("xaa", "Opening browser to IdP authorization endpoint"), Ko(g.toString())
      }),
      d = await fao(t, {
        metadata: o,
        clientInformation: f,
        authorizationCode: h,
        codeVerifier: p,
        redirectUri: c,
        fetchFn: A
      });
    if (!d.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let a = S(d.id_token),
      s = a ? a * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
    try {
      await k(t, d.id_token, s), ne("xaa", `Cached id_token for ${vr(t)} (expires ${new Date(s).toISOString()})`)
    } catch (u) {
      ne("xaa", `id_token cache write failed: ${l(u)}`)
    }
    return d.id_token
  })
}
export {
  bEt,
  _8t,
  L4o,
  bIn,
  N4o,
  SIn,
  H4o,
  b8t,
  Fpr
};
