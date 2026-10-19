// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  jEt,
  $9r,
  Yes
} from "B:/~BUN/root/chunk-n2zx2zrd.js";
import {
  x,
  H,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  J
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  re
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  po
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  qn
} from "B:/~BUN/root/chunk-245a2x6v.js";
import {
  to,
  FL
} from "B:/~BUN/root/chunk-71zxaep1.js";
import {
  ra
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  LL
} from "B:/~BUN/root/chunk-qp5mhwjf.js";
import {
  zKt,
  ERe
} from "B:/~BUN/root/chunk-bx04wv39.js";
import {
  Hs
} from "B:/~BUN/root/chunk-ac9kwvf4.js";
import {
  randomBytes as _
} from "crypto";
import {
  createServer as E
} from "http";
import {
  parse as T
} from "url";
var v = 300000,
  O = 30000,
  X = 60;

function $Kt(n) {
  try {
    let t = new URL(n);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), t.toString()
  } catch {
    return n.replace(/\/+$/, "")
  }
}
async function oCn(n) {
  let r = (await qn().readAsync())?.mcpXaaIdp?.[$Kt(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= X * 1000) return;
  return r.idToken
}
async function P(n, t, e) {
  await qn().mutate((r) => ({
    ...r,
    mcpXaaIdp: {
      ...r.mcpXaaIdp,
      [$Kt(n)]: {
        idToken: t,
        expiresAt: e
      }
    }
  }))
}
async function _ni(n, t) {
  let e = C(t),
    r = e ? e * 1000 : Date.now() + 3600000;
  return await P(n, t, r), r
}
async function Gir(n) {
  let t = $Kt(n);
  try {
    await qn().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let r = {
        ...e.mcpXaaIdp
      };
      return delete r[t], {
        ...e,
        mcpXaaIdp: r
      }
    })
  } catch (e) {
    re("xaa", `clearIdpIdToken(${to(t)}) failed: ${d(e)}`)
  }
}
async function bni(n, t) {
  try {
    return await qn().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [$Kt(n)]: {
          clientSecret: t
        }
      }
    }))
  } catch (e) {
    return {
      success: !1,
      warning: d(e)
    }
  }
}
async function Vir(n) {
  return (await qn().readAsync())?.mcpXaaIdpConfig?.[$Kt(n)]?.clientSecret
}
async function Sni(n) {
  let t = $Kt(n);
  try {
    await qn().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let r = {
        ...e.mcpXaaIdpConfig
      };
      return delete r[t], {
        ...e,
        mcpXaaIdpConfig: r
      }
    })
  } catch (e) {
    re("xaa", `clearIdpClientSecret(${to(t)}) failed: ${d(e)}`)
  }
}

function A(n, t) {
  return fetch(n, {
    ...t,
    ...ra({
      url: String(n)
    }),
    signal: AbortSignal.timeout(O)
  }).catch((e) => FL(e, n))
}
async function sCn(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new x(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${to(n)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t),
    r = await A(e, {
      headers: {
        Accept: "application/json"
      }
    });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${to(e.href)}`);
  let i;
  try {
    i = await r.json()
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${to(e.href)} (captive portal or proxy?)`)
  }
  let a = jEt.safeParse(i);
  if (!a.success) throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${to(a.data.token_endpoint)}`);
  return a.data
}

function C(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = J(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0
  } catch {
    return
  }
}

function R(n, t, e, r) {
  let i = null,
    a = null,
    l = null,
    f = () => {
      if (i?.removeAllListeners(), i?.on("error", () => {}), i?.close(), i = null, a) clearTimeout(a), a = null;
      if (e && l) e.removeEventListener("abort", l), l = null
    };
  return new Promise((m, g) => {
    let p = !1,
      h = (s, o) => {
        if (p) return;
        p = !0, f(), m({
          code: s,
          iss: o
        })
      },
      c = (s) => {
        if (p) return;
        p = !0, f(), g(s)
      };
    if (e) {
      if (l = () => c(Error("XAA IdP: login cancelled")), e.aborted) {
        l();
        return
      }
      e.addEventListener("abort", l, {
        once: !0
      })
    }
    i = E((s, o) => {
      let u = T(s.url || "", !0);
      if (u.pathname !== "/callback") {
        o.writeHead(404), o.end();
        return
      }
      let k = u.query.code,
        S = u.query.state,
        w = u.query.error,
        b = zKt(u.query.iss);
      if (w) {
        let y = u.query.error_description;
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(LL({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${w}: ${y??""}`
        })), c(Error(`XAA IdP: ${w}${y?` \u2014 ${y}`:""}`));
        return
      }
      if (S !== t) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(LL({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), c(Error("XAA IdP: state mismatch (possible CSRF)"));
        return
      }
      if (!k) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(LL({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), c(Error("XAA IdP: callback missing code"));
        return
      }
      o.writeHead(200, {
        "Content-Type": "text/html"
      }), o.end(LL({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), h(k, b)
    }), i.on("error", (s) => {
      if (s.code === "EADDRINUSE") {
        let o = I() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
        c(Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`))
      } else c(Error(`XAA IdP: callback server failed: ${s.message}`))
    }), i.listen(n, "127.0.0.1", () => {
      try {
        r()
      } catch (s) {
        c(H(s))
      }
    }), i.unref(), a = setTimeout((s) => s(Error("XAA IdP: login timed out")), v, c), a.unref()
  })
}
async function O9r(n) {
  return po("mcp_xaa_idp_login", async () => {
    let {
      idpIssuer: t,
      idpClientId: e
    } = n, r = await oCn(t);
    if (r) return re("xaa", `Using cached id_token for ${to(t)}`), r;
    re("xaa", `No cached id_token for ${to(t)}; starting OIDC login`);
    let i = await sCn(t),
      a = n.callbackPort ?? await ERe(),
      l = `http://localhost:${a}/callback`,
      f = _(32).toString("base64url"),
      m = {
        client_id: e,
        ...n.idpClientSecret && {
          client_secret: n.idpClientSecret
        }
      },
      {
        authorizationUrl: g,
        codeVerifier: p
      } = await $9r(t, {
        metadata: i,
        clientInformation: m,
        redirectUrl: l,
        scope: "openid",
        state: f
      }),
      h = await R(a, f, n.abortSignal, () => {
        if (n.onAuthorizationUrl(g.toString()), !n.skipBrowserOpen) re("xaa", "Opening browser to IdP authorization endpoint"), Hs(g.toString())
      }),
      c = await Yes(t, {
        metadata: i,
        clientInformation: m,
        authorizationCode: h.code,
        iss: h.iss,
        codeVerifier: p,
        redirectUri: l,
        fetchFn: A
      });
    if (!c.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let s = C(c.id_token),
      o = s ? s * 1000 : Date.now() + (c.expires_in ?? 3600) * 1000;
    try {
      await P(t, c.id_token, o), re("xaa", `Cached id_token for ${to(t)} (expires ${new Date(o).toISOString()})`)
    } catch (u) {
      re("xaa", `id_token cache write failed: ${d(u)}`)
    }
    return c.id_token
  })
}
export {
  $Kt,
  oCn,
  _ni,
  Gir,
  bni,
  Vir,
  Sni,
  sCn,
  O9r
};
