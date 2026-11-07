// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Xr
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  hd
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q,
  oy,
  _l
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Et
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  Lbe,
  IYi,
  GHt,
  VHt,
  Eon,
  GNe,
  Ton,
  wRe,
  MYi,
  gOs,
  Iko,
  Mko,
  X3i,
  J3i,
  Q3i
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  ebe
} from "B:/~BUN/root/chunk-64qg3pvz.js";
import {
  U3n
} from "B:/~BUN/root/chunk-96cbwjm8.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  ge,
  Mn,
  Ft
} from "B:/~BUN/root/chunk-b3kw6jpx.js";
import {
  ui
} from "B:/~BUN/root/chunk-xwsv2hvn.js";
var S = "urn:ietf:params:oauth:grant-type:device_code",
  C = "claude_code",
  R = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED"]),
  w = 254,
  G = "Sign-in timed out while waiting for you to continue. Try again.",
  wmn = "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator.",
  kmn = "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway.",
  vmn = "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation.",
  Emn = "Certificate fingerprint (SHA-256):",
  Tmn = "Yes, trust this gateway",
  Cmn = "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:",
  Rmn = "Browser didn't open? Visit:",
  Amn = "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again.",
  xmn = "Yes, continue",
  y = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";

function _(e) {
  let i = d(e);
  if (i.includes(VHt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (i.includes(Eon)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (Ton(e) !== void 0) return y;
  return i
}

function N(e) {
  let i = e?.response?.data;
  if (typeof i !== "object" || i === null) return;
  let n = i.error_description;
  if (typeof n !== "string") return;
  return Q(oy(n), 300).trim() || void 0
}

function I(e) {
  let i = k(e) ?? k(e?.cause),
    n = d(e);
  if (!(i !== void 0 && R.has(i) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(n))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " + "store by default on the native binary and Node \u226522.15, so if the CA is " + "already installed there, upgrade to a current runtime. Otherwise set " + "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 " + "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under " + "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json)."
}
var U = p(() => Ft({
  device_authorization_endpoint: ge().optional(),
  token_endpoint: ge().optional(),
  revocation_endpoint: ge().nullish().catch(void 0)
}));

function E(e, i, n) {
  let r = Iko(e, i);
  if (r) return r;
  if (i) t(`[gateway-login] ignoring advertised endpoint ${i} (not same-origin with ${e}); using ${n}`);
  return `${e}${n}`
}
var O = p(() => Ft({
  device_code: ge(),
  user_code: ge(),
  verification_uri: ge(),
  verification_uri_complete: ge().optional(),
  expires_in: Mn(),
  interval: Mn().optional(),
  login_notice: ge().optional().catch(void 0)
}));
class wGt {
  credentials;
  openPage;
  store = Hs({
    state: "url_input"
  });
  status = this.store;
  generation = 0;
  vouchedAtLogin = !1;
  revoking = Promise.resolve();
  constructor(e, i) {
    this.credentials = e;
    this.openPage = i
  }
  moveTo(e) {
    this.store.setState(() => e)
  }
  restart() {
    let {
      state: e
    } = this.store.getState();
    if (e === "saving" || e === "done" || e === "cancelled") return;
    this.generation += 1, this.moveTo({
      state: "url_input"
    })
  }
  cancel() {
    if (this.store.getState().state === "done") return;
    this.generation += 1, this.moveTo({
      state: "cancelled"
    })
  }
  trust() {
    let e = this.store.getState();
    if (e.state !== "trust_prompt") return;
    let i = this.generation;
    MYi(e.hostname, e.fingerprint, this.credentials).then(() => {
      if (i !== this.generation) return;
      return this.startDeviceAuth(e.url, e.endpoints, e.fingerprint, e.allowlistEntry)
    }).catch((n) => {
      if (i !== this.generation) return;
      this.moveTo({
        state: "error",
        message: d(n)
      })
    })
  }
  confirmAccount() {
    let e = this.store.getState();
    if (e.state !== "confirm_account") return;
    if (e.auth.expiresAt <= Date.now() && !e.auth.idpRefreshToken) {
      this.moveTo({
        state: "error",
        message: G
      });
      return
    }
    this.completeLogin(e.auth, e.allowlistEntry, this.generation)
  }
  async connect(e) {
    if (this.store.getState().state !== "url_input") return;
    let i = ++this.generation;
    this.moveTo({
      state: "connecting"
    });
    try {
      let n = Lbe(e.url),
        r = await IYi(n, e.internalNetworks, e.namedBy);
      if (i !== this.generation) return;
      this.vouchedAtLogin = r.basis === "vouched";
      let o = r.basis === "network" ? r.network : void 0,
        c = r.basis === "allowlisted" ? r.entry : void 0,
        l = r.basis === "allowlisted" ? r.judged : o ? await GHt(n, 1e4, o) : void 0;
      if (i !== this.generation) return;
      let g = await hd.get(`${n}/.well-known/oauth-authorization-server`, {
        headers: {
          "User-Agent": ui()
        },
        timeout: 1e4,
        ...r.basis === "allowlisted" && {
          httpsAgent: wRe(r.judged.fingerprint, n, !0),
          maxRedirects: 0
        }
      });
      if (i !== this.generation) return;
      let s = U().safeParse(g.data),
        a = s.success ? s.data : void 0,
        u = Iko(n, a?.revocation_endpoint);
      if (a?.revocation_endpoint && !u) t(`[gateway-login] ignoring advertised revocation endpoint ${a.revocation_endpoint} (not same-origin with ${n}); sign-out will not revoke`);
      let h = {
          deviceAuthorizationEndpoint: E(n, a?.device_authorization_endpoint, "/oauth/device_authorization"),
          tokenEndpoint: E(n, a?.token_endpoint, "/oauth/token"),
          ...u && {
            revocationEndpoint: u
          }
        },
        {
          hostname: f,
          fingerprint: m,
          localAddress: A,
          remoteAddress: T
        } = l ?? await GHt(n);
      if (i !== this.generation) return;
      let v = await GNe(f, this.credentials);
      if (i !== this.generation) return;
      if (v === m) await this.startDeviceAuth(n, h, m, c);
      else this.moveTo({
        state: "trust_prompt",
        url: n,
        hostname: f,
        fingerprint: m,
        previouslyPinned: v,
        endpoints: h,
        allowlistEntry: c,
        ...o && {
          route: `from ${A} to ${T}, both inside declared ${o}`
        }
      })
    } catch (n) {
      if (i !== this.generation) return;
      let r = I(n);
      this.moveTo(r ? {
        state: "error",
        message: r,
        detail: d(n)
      } : {
        state: "error",
        message: _(n)
      })
    }
  }
  async startDeviceAuth(e, i, n, r) {
    let o = ++this.generation;
    this.moveTo({
      state: "connecting"
    });
    try {
      let c = wRe(n, i.deviceAuthorizationEndpoint),
        {
          data: l
        } = await hd.post(i.deviceAuthorizationEndpoint, new URLSearchParams({
          surface: C
        }).toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": ui()
          },
          timeout: 1e4,
          maxRedirects: 0,
          ...c && {
            httpsAgent: c
          }
        });
      if (o !== this.generation) return;
      let g = O().safeParse(l);
      if (!g.success) throw Error("gateway device authorization endpoint returned malformed response");
      let s = g.data,
        a = s.verification_uri_complete ?? s.verification_uri;
      this.openPage(a), this.moveTo({
        state: "polling",
        url: e,
        userCode: s.user_code,
        verificationUri: s.verification_uri,
        browserUrl: a,
        loginNotice: s.login_notice ? Et(s.login_notice, U3n) : void 0
      }), await this.pollForToken(e, i, s.device_code, s.interval ?? 5, o, n, r)
    } catch (c) {
      if (o !== this.generation) return;
      if (Mko(c) === "slow_down") {
        this.moveTo({
          state: "error",
          message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.",
          detail: N(c)
        });
        return
      }
      this.moveTo({
        state: "error",
        message: _(c)
      })
    }
  }
  async pollForToken(e, i, n, r, o, c, l) {
    let {
      tokenEndpoint: g
    } = i, s = Math.max(1, r);
    while (o === this.generation) {
      if (await J(s * 1000), o !== this.generation) return;
      try {
        let a = wRe(c, g),
          {
            data: u
          } = await hd.post(g, new URLSearchParams({
            grant_type: S,
            device_code: n
          }).toString(), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": ui()
            },
            timeout: 1e4,
            maxRedirects: 0,
            ...a && {
              httpsAgent: a
            }
          });
        if (o !== this.generation) return;
        let h = gOs().safeParse(u);
        if (!h.success) throw Error("gateway token endpoint returned malformed response");
        await this.finishLogin(e, i, h.data, o, l);
        return
      } catch (a) {
        if (o !== this.generation) return;
        let u = Mko(a);
        if (u === "authorization_pending") continue;
        if (u === "slow_down") {
          s += 5;
          continue
        }
        if (u === "expired_token") {
          this.moveTo({
            state: "error",
            message: "Sign-in timed out before the browser flow completed. Try again."
          });
          return
        }
        if (u === "access_denied") {
          this.moveTo({
            state: "error",
            message: "Sign-in was denied in the browser."
          });
          return
        }
        this.moveTo({
          state: "error",
          message: _(a)
        });
        return
      }
    }
  }
  async finishLogin(e, i, n, r, o) {
    let c = n.email ?? "",
      l = Q(c, 16 * w),
      g = _l(l),
      s = l.length < c.length || g.length > w ? `${Q(g,w)}\u2026` : g,
      a = {
        url: e,
        jwt: n.access_token,
        expiresAt: Date.now() + n.expires_in * 1000,
        tokenEndpoint: i.tokenEndpoint,
        ...i.revocationEndpoint && {
          revocationEndpoint: i.revocationEndpoint
        },
        ...n.refresh_token && {
          idpRefreshToken: n.refresh_token
        },
        ...s && {
          email: s
        },
        vouchedAtLogin: this.vouchedAtLogin
      },
      {
        hostname: u,
        fingerprint: h
      } = await GHt(e);
    if (r !== this.generation) return;
    let f = await GNe(u, this.credentials);
    if (r !== this.generation) return;
    if (f !== h) {
      this.moveTo({
        state: "error",
        message: y
      });
      return
    }
    if (s) {
      this.moveTo({
        state: "confirm_account",
        auth: a,
        allowlistEntry: o,
        email: s
      });
      return
    }
    await this.completeLogin(a, o, r)
  }
  async completeLogin(e, i, n) {
    this.moveTo({
      state: "saving",
      email: e.email
    });
    let r = Xr(),
      o = await Q3i(e, this.credentials, i);
    if (o.outcome !== "saved" || n !== this.generation) {
      if (await X3i(e, r, this.credentials, o), this.revoking = J3i(e, r, this.credentials, o), o.outcome !== "saved" && n === this.generation) t(`[gateway-login] secureStorage write failed: ${o.message}`, {
        level: "error"
      }), this.moveTo({
        state: "error",
        message: o.message
      });
      return
    }
    ebe({
      action: "login",
      success: !0,
      authMethod: "oauth"
    }), this.moveTo({
      state: "done",
      email: e.email
    })
  }
}
export {
  wmn,
  kmn,
  vmn,
  Emn,
  Tmn,
  Cmn,
  Rmn,
  Amn,
  xmn,
  wGt
};
