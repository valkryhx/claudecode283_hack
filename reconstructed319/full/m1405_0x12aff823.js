// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  q,
  xn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Vqe,
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Cfe,
  Tw,
  zx,
  f4
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Kn
} from "B:/~BUN/root/chunk-gvasf6q6.js";
import {
  znn,
  sAr
} from "B:/~BUN/root/chunk-2r8nxr60.js";
import {
  bNe,
  pz
} from "B:/~BUN/root/chunk-3yw7hnm6.js";
async function OBe(r) {
  try {
    return (await Kn().readAsync(r))?.designOauth ?? null
  } catch (n) {
    return t(`Failed to read design OAuth tokens: ${d(n)}`, {
      level: "error"
    }), null
  }
}
async function Uer(r, n) {
  try {
    let o = !1,
      s = await Kn().mutate((e) => {
        if (n?.onlyIf && !n.onlyIf(e.designOauth)) return o = !0, e;
        return {
          ...e,
          designOauth: r
        }
      });
    return o ? {
      ...s,
      raced: !0
    } : s
  } catch (o) {
    return t(`Failed to save design OAuth tokens: ${d(o)}`, {
      level: "error"
    }), {
      success: !1,
      warning: "Failed to save design OAuth tokens"
    }
  }
}
async function _(r) {
  try {
    await Kn().mutate((n) => {
      if (!n.designOauth) return n;
      if (!r(n.designOauth)) return n;
      let o = {
        ...n
      };
      return delete o.designOauth, o
    })
  } catch (n) {
    t(`Failed to clear design OAuth tokens: ${d(n)}`, {
      level: "error"
    })
  }
}
var w = ".design_oauth_refresh.lock";
async function p() {
  let r = Kn();
  return r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null
}
async function yYo(r) {
  let n = await OBe(r);
  if (!n?.accessToken) return {
    ok: !1,
    reason: "needs_design_login"
  };
  if (!zx(n.expiresAt)) return {
    ok: !0,
    accessToken: n.accessToken
  };
  if (q()) return m("oauth_token_refresh", "design_oauth_refresh_diskless"), {
    ok: !1,
    reason: "needs_design_login"
  };
  try {
    return await sAr(w, async (o) => {
      let s = await p();
      if (!s?.accessToken) return {
        ok: !1,
        reason: "needs_design_login"
      };
      if (!zx(s.expiresAt)) return {
        ok: !0,
        accessToken: s.accessToken
      };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return await _((l) => l.refreshToken === e), {
          ok: !1,
          reason: "needs_design_login"
        }
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return await _((l) => l.refreshToken === e), {
          ok: !1,
          reason: "needs_design_login"
        }
      }
      if (o.isCompromised()) return c("oauth_token_refresh", "design_oauth_refresh_lock_compromised"), {
        ok: !1,
        reason: "design_refresh_failed",
        detail: "another process is refreshing the design token"
      };
      try {
        let e = await Cfe(s.refreshToken, {
          clientId: s.clientId,
          scopes: s.scopes,
          skipProfileFetch: !0
        });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken) await Tw(e.refreshToken, s.clientId);
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry"
          }
        }
        if (!Vqe.every((u) => e.scopes.includes(u))) {
          if (e.refreshToken) await Tw(e.refreshToken, s.clientId);
          let u = s.refreshToken;
          return await _((k) => k.refreshToken === u), {
            ok: !1,
            reason: "needs_design_login",
            detail: "refresh response missing design scopes"
          }
        }
        let l = s.refreshToken,
          f = await Uer({
            accessToken: e.accessToken,
            refreshToken: e.refreshToken,
            expiresAt: e.expiresAt,
            scopes: e.scopes.filter((u) => Vqe.some((k) => k === u)),
            clientId: s.clientId
          }, {
            onlyIf: (u) => u?.refreshToken === l
          });
        if (f.raced) {
          await Tw(e.refreshToken, s.clientId);
          let u = await p();
          return u?.accessToken && !zx(u.expiresAt) ? {
            ok: !0,
            accessToken: u.accessToken
          } : {
            ok: !1,
            reason: "needs_design_login"
          }
        }
        if (!f.success) t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", {
          level: "error"
        });
        return {
          ok: !0,
          accessToken: e.accessToken
        }
      } catch (e) {
        if (o.isCompromised()) {
          let l = await p();
          if (l?.accessToken && !zx(l.expiresAt)) return {
            ok: !0,
            accessToken: l.accessToken
          };
          if (!f4(e)) c("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token"
          }
        }
        if (f4(e)) {
          let l = s.refreshToken;
          return await _((f) => f.refreshToken === l), {
            ok: !1,
            reason: "needs_design_login",
            detail: "design authorization expired"
          }
        }
        return {
          ok: !1,
          reason: "design_refresh_failed",
          detail: d(e)
        }
      }
    })
  } catch (o) {
    if (o instanceof znn) c("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else a(o), m("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return {
      ok: !1,
      reason: "design_refresh_failed",
      detail: d(o)
    }
  }
}

function Ber() {
  return i.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? nn().DESIGN_CLIENT_ID
}

function F6e() {
  return !Ber().startsWith("00000000-")
}
async function j6r(r, n) {
  let o = Vqe.filter((s) => !r.scopes.includes(s));
  if (o.length > 0) {
    if (r.refreshToken) await Tw(r.refreshToken, n);
    return {
      ok: !1,
      message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`
    }
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await Tw(r.refreshToken, n);
    return {
      ok: !1,
      message: "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential."
    }
  }
  return {
    ok: !0,
    slot: {
      accessToken: r.accessToken,
      refreshToken: r.refreshToken,
      expiresAt: r.expiresAt,
      scopes: r.scopes.filter((s) => Vqe.some((e) => e === s)),
      clientId: n
    }
  }
}

function xSn() {
  return i.isSSH() || i.CLAUDE_CODE_REMOTE === !0 || xn()
}
var A = 300000;
async function jer(r, n) {
  if (r?.aborted) return {
    ok: !1,
    reason: "interrupted",
    message: "Design login was interrupted."
  };
  if (!F6e()) return {
    ok: !1,
    reason: "unconfigured",
    message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
  };
  if (xSn() && !n?.onManualCode) return {
    ok: !1,
    reason: "remote",
    message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually."
  };
  let o = Ber(),
    s = new pz,
    e = !1,
    l = !1,
    f;
  try {
    let u = n?.onAuthUrl;
    n?.onManualCode?.((g, T) => s.handleManualAuthCodeInput({
      authorizationCode: g,
      state: T
    }));
    let k = s.startOAuthFlow(u ? async (g, T) => {
      u(T ?? g, g)
    }: async () => {}, {
      loginWithClaudeAi: !0,
      oauthClient: {
        clientId: o,
        scopes: Vqe
      },
      skipProfileFetch: !0,
      successRedirectUrl: nn().CLAUDEAI_SUCCESS_URL,
      ...u && {
        skipBrowserOpen: !0
      }
    });
    k.then((g) => {
      if (l && g.refreshToken) Tw(g.refreshToken, o)
    }).catch(() => {});
    let O = await Promise.race([k, new Promise((g, T) => {
        f = setTimeout(() => {
          e = !0, l = !0, T(Error("design login timed out"))
        }, A), r?.addEventListener("abort", () => {
          l = !0, T(Error("design login interrupted"))
        }, {
          once: !0
        })
      })]),
      h = await j6r(O, o);
    if (!h.ok) return {
      ok: !1,
      reason: "invalid",
      message: h.message
    };
    if (r?.aborted) return await Tw(h.slot.refreshToken, h.slot.clientId), {
      ok: !1,
      reason: "interrupted",
      message: "Design login was interrupted."
    };
    if (!(await Uer(h.slot)).success) return await Tw(h.slot.refreshToken, h.slot.clientId), {
      ok: !1,
      reason: "save_failed",
      message: "Could not save the design credential to secure storage. Retry, or run /design-login."
    };
    return {
      ok: !0,
      accessToken: h.slot.accessToken
    }
  } catch (u) {
    if (l = !0, r?.aborted) return {
      ok: !1,
      reason: "interrupted",
      message: "Design login was interrupted."
    };
    if (e) return {
      ok: !1,
      reason: "timed_out",
      message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow."
    };
    if (u instanceof bNe) return {
      ok: !1,
      reason: "code_refused",
      message: u.message
    };
    return {
      ok: !1,
      reason: "failed",
      cause: d(u),
      message: `The browser authorization failed (${d(u)}). Run /design-login to retry with the manual flow.`
    }
  } finally {
    if (f !== void 0) clearTimeout(f);
    s.cleanup()
  }
}
export {
  OBe,
  Uer,
  yYo,
  Ber,
  F6e,
  j6r,
  xSn,
  jer
};
