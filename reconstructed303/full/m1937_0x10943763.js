// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  aar,
  q9r,
  ats
} from "B:/~BUN/root/chunk-ntnsdnjk.js";
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
  ERe
} from "B:/~BUN/root/chunk-bx04wv39.js";
import {
  Hs
} from "B:/~BUN/root/chunk-ac9kwvf4.js";
import {
  randomBytes as _
} from "crypto";
import {
  createServer as b
} from "http";
import {
  parse as E
} from "url";
var T = 300000,
  v = 30000,
  O = 60;

function bKt(r) {
  try {
    let t = new URL(r);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), t.toString()
  } catch {
    return r.replace(/\/+$/, "")
  }
}
async function cTn(r) {
  let n = (await qn().readAsync())?.mcpXaaIdp?.[bKt(r)];
  if (!n) return;
  if (n.expiresAt - Date.now() <= O * 1000) return;
  return n.idToken
}
async function k(r, t, e) {
  await qn().mutate((n) => ({
    ...n,
    mcpXaaIdp: {
      ...n.mcpXaaIdp,
      [bKt(r)]: {
        idToken: t,
        expiresAt: e
      }
    }
  }))
}
async function rni(r, t) {
  let e = S(t),
    n = e ? e * 1000 : Date.now() + 3600000;
  return await k(r, t, n), n
}
async function Fir(r) {
  let t = bKt(r);
  try {
    await qn().mutate((e) => {
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
    re("xaa", `clearIdpIdToken(${to(t)}) failed: ${d(e)}`)
  }
}
async function oni(r, t) {
  try {
    return await qn().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [bKt(r)]: {
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
async function Hir(r) {
  return (await qn().readAsync())?.mcpXaaIdpConfig?.[bKt(r)]?.clientSecret
}
async function sni(r) {
  let t = bKt(r);
  try {
    await qn().mutate((e) => {
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
    re("xaa", `clearIdpClientSecret(${to(t)}) failed: ${d(e)}`)
  }
}

function A(r, t) {
  return fetch(r, {
    ...t,
    ...ra({
      url: String(r)
    }),
    signal: AbortSignal.timeout(v)
  }).catch((e) => FL(e, r))
}
async function uTn(r) {
  let t = r.endsWith("/") ? r : r + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new x(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${to(r)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t),
    n = await A(e, {
      headers: {
        Accept: "application/json"
      }
    });
  if (!n.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${n.status} at ${to(e.href)}`);
  let o;
  try {
    o = await n.json()
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${to(e.href)} (captive portal or proxy?)`)
  }
  let i = aar.safeParse(o);
  if (!i.success) throw Error(`XAA IdP: invalid OIDC metadata: ${i.error.message}`);
  if (!URL.canParse(i.data.token_endpoint) || new URL(i.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${to(i.data.token_endpoint)}`);
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
    l = null,
    m = () => {
      if (o?.removeAllListeners(), o?.on("error", () => {}), o?.close(), o = null, i) clearTimeout(i), i = null;
      if (e && l) e.removeEventListener("abort", l), l = null
    };
  return new Promise((f, g) => {
    let p = !1,
      h = (a) => {
        if (p) return;
        p = !0, m(), f(a)
      },
      c = (a) => {
        if (p) return;
        p = !0, m(), g(a)
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
    o = b((a, s) => {
      let u = E(a.url || "", !0);
      if (u.pathname !== "/callback") {
        s.writeHead(404), s.end();
        return
      }
      let P = u.query.code,
        C = u.query.state,
        w = u.query.error;
      if (w) {
        let y = u.query.error_description;
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(LL({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${w}: ${y??""}`
        })), c(Error(`XAA IdP: ${w}${y?` \u2014 ${y}`:""}`));
        return
      }
      if (C !== t) {
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(LL({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), c(Error("XAA IdP: state mismatch (possible CSRF)"));
        return
      }
      if (!P) {
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(LL({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), c(Error("XAA IdP: callback missing code"));
        return
      }
      s.writeHead(200, {
        "Content-Type": "text/html"
      }), s.end(LL({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), h(P)
    }), o.on("error", (a) => {
      if (a.code === "EADDRINUSE") {
        let s = I() === "windows" ? `netstat -ano | findstr :${r}` : `lsof -ti:${r} -sTCP:LISTEN`;
        c(Error(`XAA IdP: callback port ${r} is already in use. Run \`${s}\` to find the holder.`))
      } else c(Error(`XAA IdP: callback server failed: ${a.message}`))
    }), o.listen(r, "127.0.0.1", () => {
      try {
        n()
      } catch (a) {
        c(H(a))
      }
    }), o.unref(), i = setTimeout((a) => a(Error("XAA IdP: login timed out")), T, c), i.unref()
  })
}
async function l9r(r) {
  return po("mcp_xaa_idp_login", async () => {
    let {
      idpIssuer: t,
      idpClientId: e
    } = r, n = await cTn(t);
    if (n) return re("xaa", `Using cached id_token for ${to(t)}`), n;
    re("xaa", `No cached id_token for ${to(t)}; starting OIDC login`);
    let o = await uTn(t),
      i = r.callbackPort ?? await ERe(),
      l = `http://localhost:${i}/callback`,
      m = _(32).toString("base64url"),
      f = {
        client_id: e,
        ...r.idpClientSecret && {
          client_secret: r.idpClientSecret
        }
      },
      {
        authorizationUrl: g,
        codeVerifier: p
      } = await q9r(t, {
        metadata: o,
        clientInformation: f,
        redirectUrl: l,
        scope: "openid",
        state: m
      }),
      h = await X(i, m, r.abortSignal, () => {
        if (r.onAuthorizationUrl(g.toString()), !r.skipBrowserOpen) re("xaa", "Opening browser to IdP authorization endpoint"), Hs(g.toString())
      }),
      c = await ats(t, {
        metadata: o,
        clientInformation: f,
        authorizationCode: h,
        codeVerifier: p,
        redirectUri: l,
        fetchFn: A
      });
    if (!c.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let a = S(c.id_token),
      s = a ? a * 1000 : Date.now() + (c.expires_in ?? 3600) * 1000;
    try {
      await k(t, c.id_token, s), re("xaa", `Cached id_token for ${to(t)} (expires ${new Date(s).toISOString()})`)
    } catch (u) {
      re("xaa", `id_token cache write failed: ${d(u)}`)
    }
    return c.id_token
  })
}
export {
  bKt,
  cTn,
  rni,
  Fir,
  oni,
  Hir,
  sni,
  uTn,
  l9r
};
