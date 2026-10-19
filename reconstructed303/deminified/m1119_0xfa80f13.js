// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { de, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { bDe as scopes, ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { yte, E_, zT, ZX } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { qn } from "B:/~BUN/root/chunk-245a2x6v.js";
import { nFt, Lqn } from "B:/~BUN/root/chunk-9hexkhrt.js";
import { $N } from "B:/~BUN/root/chunk-2f1s42re.js";
async function HRe(r) {
  try {
    return (await qn().readAsync(r))?.designOauth ?? null;
  } catch (error) {
    return t(`Failed to read design OAuth tokens: ${d(error)}`, {
      level: "error"
    }), null;
  }
}
async function jRn(designOauth, n) {
  try {
    let o = !1,
      s = await qn().mutate(e => {
        if (n?.onlyIf && !n.onlyIf(e.designOauth)) return o = !0, e;
        return {
          ...e,
          designOauth: designOauth
        };
      });
    return o ? {
      ...s,
      raced: !0
    } : s;
  } catch (error) {
    return t(`Failed to save design OAuth tokens: ${d(error)}`, {
      level: "error"
    }), {
      success: !1,
      warning: "Failed to save design OAuth tokens"
    };
  }
}
async function T(r) {
  try {
    await qn().mutate(n => {
      if (!n.designOauth) return n;
      if (!r(n.designOauth)) return n;
      let o = {
        ...n
      };
      return delete o.designOauth, o;
    });
  } catch (error) {
    t(`Failed to clear design OAuth tokens: ${d(error)}`, {
      level: "error"
    });
  }
}
var w = ".design_oauth_refresh.lock";
async function _() {
  let r = qn();
  return r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null;
}
async function xJr(r) {
  let n = await HRe(r);
  if (!n?.accessToken) return {
    ok: !1,
    reason: "needs_design_login"
  };
  if (!zT(n.expiresAt)) return {
    ok: !0,
    accessToken: n.accessToken
  };
  if (de()) return m("oauth_token_refresh", "design_oauth_refresh_diskless"), {
    ok: !1,
    reason: "needs_design_login"
  };
  try {
    return await Lqn(w, async o => {
      let s = await _();
      if (!s?.accessToken) return {
        ok: !1,
        reason: "needs_design_login"
      };
      if (!zT(s.expiresAt)) return {
        ok: !0,
        accessToken: s.accessToken
      };
      if (!s.refreshToken) {
        let refreshToken = s.refreshToken;
        return await T(c => c.refreshToken === refreshToken), {
          ok: !1,
          reason: "needs_design_login"
        };
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let refreshToken_2 = s.refreshToken;
        return await T(c => c.refreshToken === refreshToken_2), {
          ok: !1,
          reason: "needs_design_login"
        };
      }
      if (o.isCompromised()) return p("oauth_token_refresh", "design_oauth_refresh_lock_compromised"), {
        ok: !1,
        reason: "design_refresh_failed",
        detail: "another process is refreshing the design token"
      };
      try {
        let e = await yte(s.refreshToken, {
          clientId: s.clientId,
          scopes: s.scopes,
          skipProfileFetch: !0
        });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken) await E_(e.refreshToken, s.clientId);
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry"
          };
        }
        if (!scopes.every(item => e.scopes.includes(item))) {
          if (e.refreshToken) await E_(e.refreshToken, s.clientId);
          let refreshToken_3 = s.refreshToken;
          return await T(g => g.refreshToken === refreshToken_3), {
            ok: !1,
            reason: "needs_design_login",
            detail: "refresh response missing design scopes"
          };
        }
        let refreshToken_4 = s.refreshToken,
          u = await jRn({
            accessToken: e.accessToken,
            refreshToken: e.refreshToken,
            expiresAt: e.expiresAt,
            scopes: e.scopes.filter(item => scopes.some(g => g === item)),
            clientId: s.clientId
          }, {
            onlyIf: i => i?.refreshToken === refreshToken_4
          });
        if (u.raced) {
          await E_(e.refreshToken, s.clientId);
          let i = await _();
          return i?.accessToken && !zT(i.expiresAt) ? {
            ok: !0,
            accessToken: i.accessToken
          } : {
            ok: !1,
            reason: "needs_design_login"
          };
        }
        if (!u.success) t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", {
          level: "error"
        });
        return {
          ok: !0,
          accessToken: e.accessToken
        };
      } catch (error) {
        if (o.isCompromised()) {
          let c = await _();
          if (c?.accessToken && !zT(c.expiresAt)) return {
            ok: !0,
            accessToken: c.accessToken
          };
          if (!ZX(error)) p("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token"
          };
        }
        if (ZX(error)) {
          let refreshToken_5 = s.refreshToken;
          return await T(u => u.refreshToken === refreshToken_5), {
            ok: !1,
            reason: "needs_design_login",
            detail: "design authorization expired"
          };
        }
        return {
          ok: !1,
          reason: "design_refresh_failed",
          detail: d(error)
        };
      }
    });
  } catch (error) {
    if (error instanceof nFt) p("oauth_token_refresh", "design_oauth_refresh_lock_contention");else l(error), m("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return {
      ok: !1,
      reason: "design_refresh_failed",
      detail: d(error)
    };
  }
}
function WRn() {
  return a.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? ln().DESIGN_CLIENT_ID;
}
function INe() {
  return !WRn().startsWith("00000000-");
}
async function clr(r, clientId) {
  let o = scopes.filter(item => !r.scopes.includes(item));
  if (o.length > 0) {
    if (r.refreshToken) await E_(r.refreshToken, clientId);
    return {
      ok: !1,
      message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`
    };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await E_(r.refreshToken, clientId);
    return {
      ok: !1,
      message: "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential."
    };
  }
  return {
    ok: !0,
    slot: {
      accessToken: r.accessToken,
      refreshToken: r.refreshToken,
      expiresAt: r.expiresAt,
      scopes: r.scopes.filter(item => scopes.some(e => e === item)),
      clientId: clientId
    }
  };
}
function oYt() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE === !0 || Bn();
}
var D = 300000;
async function zRn(r, n) {
  if (r?.aborted) return {
    ok: !1,
    reason: "interrupted",
    message: "Design login was interrupted."
  };
  if (!INe()) return {
    ok: !1,
    reason: "unconfigured",
    message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
  };
  if (oYt() && !n?.onManualCode) return {
    ok: !1,
    reason: "remote",
    message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually."
  };
  let clientId_2 = WRn(),
    s = new $N(),
    e = !1,
    c = !1,
    u;
  try {
    let i = n?.onAuthUrl;
    n?.onManualCode?.((authorizationCode, state) => s.handleManualAuthCodeInput({
      authorizationCode: authorizationCode,
      state: state
    }));
    let g = s.startOAuthFlow(i ? async (h, k) => {
      i(k ?? h, h);
    } : async () => {}, {
      loginWithClaudeAi: !0,
      oauthClient: {
        clientId: clientId_2,
        scopes: scopes
      },
      skipProfileFetch: !0,
      successRedirectUrl: ln().CLAUDEAI_SUCCESS_URL,
      ...(i && {
        skipBrowserOpen: !0
      })
    });
    g.then(h => {
      if (c && h.refreshToken) E_(h.refreshToken, clientId_2);
    }).catch(() => {});
    let O = await Promise.race([g, new Promise((h, k) => {
        u = setTimeout(() => {
          e = !0, c = !0, k(Error("design login timed out"));
        }, D), r?.addEventListener("abort", () => {
          c = !0, k(Error("design login interrupted"));
        }, {
          once: !0
        });
      })]),
      f = await clr(O, clientId_2);
    if (!f.ok) return {
      ok: !1,
      reason: "invalid",
      message: f.message
    };
    if (r?.aborted) return await E_(f.slot.refreshToken, f.slot.clientId), {
      ok: !1,
      reason: "interrupted",
      message: "Design login was interrupted."
    };
    if (!(await jRn(f.slot)).success) return await E_(f.slot.refreshToken, f.slot.clientId), {
      ok: !1,
      reason: "save_failed",
      message: "Could not save the design credential to secure storage. Retry, or run /design-login."
    };
    return {
      ok: !0,
      accessToken: f.slot.accessToken
    };
  } catch (error) {
    if (c = !0, r?.aborted) return {
      ok: !1,
      reason: "interrupted",
      message: "Design login was interrupted."
    };
    if (e) return {
      ok: !1,
      reason: "timed_out",
      message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow."
    };
    return {
      ok: !1,
      reason: "failed",
      cause: d(error),
      message: `The browser authorization failed (${d(error)}). Run /design-login to retry with the manual flow.`
    };
  } finally {
    if (u !== void 0) clearTimeout(u);
    s.cleanup();
  }
}
export { HRe, jRn, xJr, WRn, INe, clr, oYt, zRn };