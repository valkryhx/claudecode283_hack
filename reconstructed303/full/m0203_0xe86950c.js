// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  we,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Lmn,
  qXn,
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Gj
} from "B:/~BUN/root/chunk-b5bxtj5p.js";
import {
  qn
} from "B:/~BUN/root/chunk-245a2x6v.js";
import {
  Ni
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  yte,
  E_,
  zT,
  ZX,
  izs
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  E5
} from "B:/~BUN/root/chunk-pej55jax.js";
import {
  L3,
  bOo
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  nFt,
  Lqn
} from "B:/~BUN/root/chunk-9hexkhrt.js";
import {
  $N
} from "B:/~BUN/root/chunk-2f1s42re.js";
import {
  Hs
} from "B:/~BUN/root/chunk-ac9kwvf4.js";
import {
  createInterface as L
} from "readline";
var U = ".cloud_sessions_oauth_refresh.lock",
  z = 300000;
async function F(e) {
  try {
    return (await qn().readAsync(e))?.cloudSessionsOauth ?? null
  } catch (s) {
    return t(`Failed to read the cloud-sessions OAuth tokens: ${d(s)}`, {
      level: "error"
    }), "unreadable"
  }
}

function N(e) {
  try {
    let s = qn().read()?.cloudSessionsOauth;
    return s !== void 0 && s.organizationUuid === e && Boolean(s.accessToken)
  } catch (s) {
    return t(`Failed to read the cloud-sessions OAuth tokens: ${d(s)}`, {
      level: "error"
    }), !1
  }
}
async function x(e, s) {
  try {
    let h = !1,
      u = await qn().mutate((r) => {
        if (s?.onlyIf && !s.onlyIf(r.cloudSessionsOauth)) return h = !0, r;
        return {
          ...r,
          cloudSessionsOauth: e
        }
      });
    return h ? {
      ...u,
      raced: !0
    } : u
  } catch (h) {
    return t(`Failed to save the cloud-sessions OAuth tokens: ${d(h)}`, {
      level: "error"
    }), {
      success: !1,
      warning: "Failed to save the cloud-sessions OAuth tokens"
    }
  }
}
async function v(e) {
  try {
    await qn().mutate((s) => {
      if (!s.cloudSessionsOauth || !e(s.cloudSessionsOauth)) return s;
      let h = {
        ...s
      };
      return delete h.cloudSessionsOauth, h
    })
  } catch (s) {
    t(`Failed to clear the cloud-sessions OAuth tokens: ${d(s)}`, {
      level: "error"
    })
  }
}
async function O() {
  let e = qn();
  return e.invalidateCache?.(), (await e.readAsync())?.cloudSessionsOauth ?? null
}
async function R({
  organizationUuid: e,
  refusedAccessToken: s,
  credentials: h
}) {
  let u = await F(h);
  if (u === "unreadable") return {
    ok: !1,
    reason: "refresh_failed",
    detail: "the credential store could not be read"
  };
  if (!u?.accessToken || u.organizationUuid !== e) return {
    ok: !1,
    reason: "needs_sign_in"
  };
  if (!zT(u.expiresAt) && u.accessToken !== s) return {
    ok: !0,
    accessToken: u.accessToken
  };
  if (de()) return m("oauth_token_refresh", "cloud_sessions_oauth_refresh_diskless"), {
    ok: !1,
    reason: "needs_sign_in"
  };
  try {
    return await Lqn(U, async (r) => {
      let o = await O();
      if (!o?.accessToken || o.organizationUuid !== e) return {
        ok: !1,
        reason: "needs_sign_in"
      };
      if (!zT(o.expiresAt) && o.accessToken !== s) return {
        ok: !0,
        accessToken: o.accessToken
      };
      if (!o.refreshToken || !Array.isArray(o.scopes) || o.scopes.length === 0) {
        let n = o.refreshToken;
        return await v((c) => c.refreshToken === n), {
          ok: !1,
          reason: "needs_sign_in"
        }
      }
      if (r.isCompromised()) return p("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised"), {
        ok: !1,
        reason: "refresh_failed",
        detail: "another Claude Code process is renewing it right now"
      };
      let i = o.refreshToken;
      try {
        let n = await yte(i, {
          clientId: o.clientId,
          scopes: o.scopes,
          skipProfileFetch: !0
        });
        if (!n.refreshToken || !n.expiresAt) {
          if (n.refreshToken && n.refreshToken !== i) await E_(n.refreshToken, o.clientId);
          return {
            ok: !1,
            reason: "refresh_failed",
            detail: "the server's reply had no refresh token or expiry"
          }
        }
        if (!n.scopes.includes(Lmn)) return await E_(n.refreshToken, o.clientId), await v((f) => f.refreshToken === i), {
          ok: !1,
          reason: "needs_sign_in",
          detail: "refresh response missing the sessions scope"
        };
        let c = await x({
          accessToken: n.accessToken,
          refreshToken: n.refreshToken,
          expiresAt: n.expiresAt,
          scopes: n.scopes.filter((f) => qXn.some((k) => k === f)),
          clientId: o.clientId,
          organizationUuid: o.organizationUuid
        }, {
          onlyIf: (f) => f?.refreshToken === i
        });
        if (c.raced) {
          await E_(n.refreshToken, o.clientId);
          let f = await O();
          return f?.accessToken && f.organizationUuid === e && !zT(f.expiresAt) ? {
            ok: !0,
            accessToken: f.accessToken
          } : {
            ok: !1,
            reason: "needs_sign_in"
          }
        }
        if (!c.success) t("Cloud-sessions OAuth refresh succeeded but the new token could not be saved; using it for this session only.", {
          level: "error"
        });
        return {
          ok: !0,
          accessToken: n.accessToken
        }
      } catch (n) {
        if (r.isCompromised()) {
          let c = await O();
          if (c?.accessToken && c.organizationUuid === e && !zT(c.expiresAt)) return {
            ok: !0,
            accessToken: c.accessToken
          };
          if (!ZX(n)) p("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "refresh_failed",
            detail: "another Claude Code process is renewing it right now"
          }
        }
        if (ZX(n)) return await v((c) => c.refreshToken === i), {
          ok: !1,
          reason: "needs_sign_in",
          detail: "cloud-sessions authorization expired"
        };
        return t(`Cloud-sessions OAuth refresh failed: ${d(n)}`, {
          level: "error"
        }), {
          ok: !1,
          reason: "refresh_failed",
          detail: "the renewal request failed"
        }
      }
    })
  } catch (r) {
    if (r instanceof nFt) p("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_contention");
    else l(r), m("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_error");
    return {
      ok: !1,
      reason: "refresh_failed",
      detail: "the renewal could not run; wait a moment"
    }
  }
}

function D() {
  return !we() && a.CLAUDE_CODE_REMOTE !== !0
}
var M = "Paste code here if prompted > ";

function H(e, {
  expectedState: s,
  onCode: h,
  onCancel: u
}) {
  if (!e.input.isTTY || !e.output.isTTY) return;
  Gj();
  let r = !1,
    o = !1,
    i = L({
      input: e.input,
      output: e.output,
      prompt: M
    });
  return i.on("SIGINT", () => u()), i.on("close", () => {
    if (!r) u()
  }), i.on("line", (n) => {
    let c = n.trim();
    if (!c) {
      i.prompt();
      return
    }
    let [f, k] = c.split("#");
    if (!f || !k) {
      e.output.write(`Invalid code. Please make sure the full code was copied.
`), i.prompt();
      return
    }
    if (s !== void 0 && k !== s) {
      e.output.write(`That code is not from this sign-in. Paste the code shown after opening the address above.
`), i.prompt();
      return
    }
    o = !0, h({
      authorizationCode: f,
      state: k
    })
  }), i.prompt(), {
    close: () => {
      if (r) return;
      if (r = !0, !o) e.output.write(`
`);
      i.close()
    }
  }
}
async function B({
  organizationUuid: e,
  onBrowserOpening: s,
  terminal: h = {
    input: process.stdin,
    output: process.stdout
  }
}) {
  let u = ln().CLIENT_ID,
    r = E5()?.accountEmail,
    o = new $N,
    i = !1,
    n = !1,
    c = !1,
    f, k, S, y = !1,
    I = () => {},
    b = new Promise((C, A) => {
      I = A
    });
  b.catch(() => {});
  try {
    let C = o.startOAuthFlow(async (T, E) => {
      s?.(T), k = H(h, {
        expectedState: Y(T),
        onCode: (P) => o.handleManualAuthCodeInput(P),
        onCancel: () => {
          if (y) return;
          n = !0, c = !0, I(Error("cloud-sessions sign-in cancelled"))
        }
      }), await Hs(E ?? T)
    }, {
      loginWithClaudeAi: !1,
      oauthClient: {
        clientId: u,
        scopes: qXn
      },
      orgUUID: e,
      loginHint: r,
      skipBrowserOpen: !0,
      successRedirectUrl: ln().CLAUDEAI_SUCCESS_URL
    });
    C.then((T) => {
      if (c && T.refreshToken) E_(T.refreshToken, u)
    }).catch(() => {}), f = setTimeout(() => {
      i = !0, c = !0, I(Error("cloud-sessions sign-in timed out"))
    }, z);
    let A = await Promise.race([C, b]);
    y = !0, k?.close();
    let _ = await G(A, u, e, r);
    if (!_.ok) return m("cloud_sessions_console_sign_in", _.reason), _;
    S = _.slot;
    let w = await O();
    if (w?.refreshToken && w.refreshToken !== _.slot.refreshToken) await E_(w.refreshToken, w.clientId);
    if (!(await x(_.slot)).success) return await E_(_.slot.refreshToken, u), m("cloud_sessions_console_sign_in", "save_failed"), {
      ok: !1,
      reason: "save_failed",
      message: "Could not save the cloud-sessions credential to secure storage. Try again."
    };
    return S = void 0, g("cloud_sessions_console_sign_in"), {
      ok: !0,
      accessToken: _.slot.accessToken
    }
  } catch (C) {
    if (y = !0, c = !0, S !== void 0) await E_(S.refreshToken, S.clientId);
    if (i) return m("cloud_sessions_console_sign_in", "timed_out"), {
      ok: !1,
      reason: "timed_out",
      message: "The browser sign-in for cloud sessions timed out after 5 minutes. Try again."
    };
    if (n) return p("cloud_sessions_console_sign_in", "cancelled"), {
      ok: !1,
      reason: "cancelled",
      message: "The sign-in for cloud sessions was cancelled."
    };
    return t(`Cloud-sessions sign-in failed: ${d(C)}`, {
      level: "error"
    }), m("cloud_sessions_console_sign_in", "failed"), {
      ok: !1,
      reason: "failed",
      message: "The browser sign-in for cloud sessions failed. Try again."
    }
  } finally {
    if (f !== void 0) clearTimeout(f);
    k?.close(), o.cleanup()
  }
}

function Y(e) {
  try {
    return new URL(e).searchParams.get("state") ?? void 0
  } catch {
    return
  }
}
async function G(e, s, h, u) {
  let r = async () => {
    if (e.refreshToken) await E_(e.refreshToken, s)
  };
  if (!e.scopes.includes(Lmn)) return await r(), {
    ok: !1,
    reason: "scope_not_granted",
    message: "Your Console organization doesn't allow cloud sessions from Claude Code, so the sign-in didn't grant that permission. Cloud sessions stay unavailable with this sign-in."
  };
  let o = e.tokenAccount?.organizationUuid ?? e.profile?.organization.uuid;
  if (o === void 0) return await r(), {
    ok: !1,
    reason: "invalid",
    message: "The sign-in didn't say which organization it was for, so it can't be used. Try again."
  };
  if (o.toLowerCase() !== h.toLowerCase()) return await r(), {
    ok: !1,
    reason: "other_organization",
    message: "The sign-in was for a different organization than your Console sign-in. Sign in again and choose the same organization."
  };
  if (u !== void 0) {
    let i = (e.tokenAccount?.emailAddress || e.profile?.account.email)?.trim() || void 0;
    if (i === void 0) return await r(), {
      ok: !1,
      reason: "invalid",
      message: "The sign-in didn't say which account it was for, so it can't be used. Try again."
    };
    if (i.trim().toLowerCase() !== u.trim().toLowerCase()) return await r(), {
      ok: !1,
      reason: "other_account",
      message: `The sign-in was for ${i}, but your Console sign-in is ${u}. Sign in again as ${u}.`
    }
  }
  if (!e.refreshToken || !e.expiresAt) return await r(), {
    ok: !1,
    reason: "invalid",
    message: "The sign-in came back without a refresh token or an expiry, so it could not be stored. Try again."
  };
  return {
    ok: !0,
    slot: {
      accessToken: e.accessToken,
      refreshToken: e.refreshToken,
      expiresAt: e.expiresAt,
      scopes: e.scopes.filter((i) => qXn.some((n) => n === i)),
      clientId: s,
      organizationUuid: h
    }
  }
}

function V() {
  if (!L3() || bOo()) return "unknown";
  return Ni("ldr") ? "ldr" : "not_ldr"
}
izs({
  organizationLabel: V,
  hasStored: N,
  canSignInHere: D,
  getValid: R,
  signIn: B
});
