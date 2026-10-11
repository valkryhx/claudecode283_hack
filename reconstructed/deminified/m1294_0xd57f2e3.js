// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { nK, Un } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { I, re, hf, Sxe } from "B:/~BUN/root/chunk-y04k89s2.js";
import { JCe, Fdt, $k, BNt, cHt, GNr, sut, uYe, iut, LFe, aut, NFe, W0o, qNr, tKn, nKn, V0o, Sce, FFe, Tun, rJ, gYe, An, wN, Tce, yHr, ps, Ee } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { LY, rE } from "B:/~BUN/root/chunk-zksmb712.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Je, H5e } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { tl } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { sY, Efn, tAe, $q, Tfn } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { Id } from "B:/~BUN/root/chunk-aw2zngte.js";
import { zs } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { HL, SR } from "B:/~BUN/root/chunk-rfp59gnb.js";
import { nLe } from "B:/~BUN/root/chunk-ky4py1p3.js";
import { x7e as clientId, kZr as scopes, EZr, TZr, WTn, CZr, RZr } from "B:/~BUN/root/chunk-s4qte2xc.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ol } from "B:/~BUN/root/chunk-syke822n.js";
import { vA } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { s, n, bt, ek, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { q2, K2, MQ } from "B:/~BUN/root/chunk-8nwqpq4c.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { ze, K_ } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { ys } from "B:/~BUN/root/chunk-h23911wn.js";
import { P1e } from "B:/~BUN/root/chunk-zyajx7gx.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { nJe } from "B:/~BUN/root/chunk-kqxpbs69.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { Rs } from "B:/~BUN/root/chunk-8sb89kt9.js";
import { rJe } from "B:/~BUN/root/chunk-wnc0pd5v.js";
import { APe, jQn, WQn } from "B:/~BUN/root/chunk-7qh3fgtt.js";
import { aM } from "B:/~BUN/root/chunk-sefpqcph.js";
import { dU } from "B:/~BUN/root/chunk-b36qwjxy.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { cL } from "B:/~BUN/root/chunk-955bfe77.js";
import { vso } from "B:/~BUN/root/chunk-wbt134f9.js";
import { KH, Ko } from "B:/~BUN/root/chunk-v8s05yj9.js";
import { se, R, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { $a } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { de, fn, lt } from "B:/~BUN/root/chunk-8386ms9e.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
class _e extends Error {
  fallbackCures;
  causeSummary;
  constructor(k, c) {
    super(k, {
      cause: c.cause
    });
    this.fallbackCures = c.fallbackCures, this.causeSummary = c.fallbackCures ? c.causeSummary : null;
  }
}
async function tt(k, c, D = {}) {
  try {
    let z = await St(k, c, D);
    return _("oauth_console_profile_login"), z;
  } catch (error) {
    if (error instanceof _e && error.fallbackCures) p("oauth_console_profile_login", "refused_fell_back");else m("oauth_console_profile_login", error instanceof _e ? "refused" : "error");
    throw error;
  }
}
async function St(k, c, {
  loginHint: loginHint,
  loginMethod: loginMethod,
  orgUUID: orgUUID
}) {
  try {
    await WTn();
  } catch (P) {
    let Y = EZr(P);
    if (Y === null) throw P;
    let causeSummary = TZr(P);
    throw new _e(l(P), Y && causeSummary !== null ? {
      fallbackCures: !0,
      causeSummary: causeSummary,
      cause: P
    } : {
      fallbackCures: !1,
      cause: P
    });
  }
  let C = await k.startOAuthFlow(c, {
      loginWithClaudeAi: !1,
      oauthClient: {
        clientId: clientId,
        scopes: scopes
      },
      loginHint: loginHint,
      loginMethod: loginMethod,
      orgUUID: orgUUID
    }),
    A = Ot(C);
  if (A instanceof Error) throw await et(C), A;
  await Tt(await xt());
  let L = await jQn(C, {}),
    j;
  try {
    let tokenAccount = C.tokenAccount;
    j = await CZr({
      accessToken: C.accessToken,
      refreshToken: A.refreshToken,
      expiresAtMs: A.expiresAtMs,
      scopes: C.scopes,
      organizationUuid: tokenAccount?.organizationUuid ?? C.profile?.organization.uuid,
      organizationName: tokenAccount?.organizationName ?? C.profile?.organization.name,
      accountEmail: tokenAccount?.emailAddress ?? C.profile?.account.email,
      workspaceId: tokenAccount?.workspaceId,
      workspaceName: tokenAccount?.workspaceName
    });
  } catch (error) {
    if (!(await RZr(A.refreshToken))) await et(C);
    throw error;
  }
  return await BNt(C.accessToken).catch(P => t(String(P), {
    level: "error"
  })), await WQn({
    ...L
  }), j;
}
async function xt() {
  if (Ie() !== "firstParty") return null;
  let k = Un();
  k.invalidateCache?.();
  let c = (await k.readAsync())?.claudeAiOauth;
  return c?.refreshToken ? {
    refreshToken: c.refreshToken,
    clientId: c.clientId
  } : null;
}
async function Tt(k) {
  if (k === null) return;
  await $k(k.refreshToken, k.clientId);
  try {
    await Un().mutate(c => ({
      ...c,
      claudeAiOauth: void 0
    }));
  } catch (error) {
    t(`Console profile login: could not clear the replaced claude.ai login record: ${l(error)}`, {
      level: "error"
    });
  }
}
function Ot(k) {
  if (!k.scopes.includes(rE)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!k.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (k.expiresAt === null || !Number.isFinite(k.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return {
    refreshToken: k.refreshToken,
    expiresAtMs: k.expiresAt
  };
}
async function et(k) {
  if (k.refreshToken) await $k(k.refreshToken, clientId);
}
N();
var grant_type = "urn:ietf:params:oauth:grant-type:device_code",
  surface = "claude_code",
  Rt = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED"]),
  De = 254,
  message_4 = "Sign-in timed out while waiting for you to continue. Try again.",
  message_2 = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function Ue(k) {
  let c = l(k);
  if (c.includes(uYe)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (c.includes(iut)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (aut(k) !== void 0) return message_2;
  return c;
}
function Dt(k) {
  let c = k?.response?.data;
  if (typeof c !== "object" || c === null) return;
  let error_description = c.error_description;
  if (typeof error_description !== "string") return;
  return re(hf(error_description), 300).trim() || void 0;
}
function Ut(k) {
  let c = v(k) ?? v(k?.cause),
    D = l(k);
  if (!(c !== void 0 && Rt.has(c) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(D))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " + "store by default on the native binary and Node \u226522.15, so if the CA is " + "already installed there, upgrade to a current runtime. Otherwise set " + "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 " + "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under " + "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
var Mt = f(() => lt({
  device_authorization_endpoint: de().optional(),
  token_endpoint: de().optional(),
  revocation_endpoint: de().nullish().catch(void 0)
}));
function ot(k, c, D) {
  let z = tKn(k, c);
  if (z) return z;
  if (c) t(`[gateway-login] ignoring advertised endpoint ${c} (not same-origin with ${k}); using ${D}`);
  return `${k}${D}`;
}
var It = f(() => lt({
  device_code: de(),
  user_code: de(),
  verification_uri: de(),
  verification_uri_complete: de().optional(),
  expires_in: fn(),
  interval: fn().optional()
}));
function Me({
  onDone: onDone,
  onCancel: onCancel,
  initialUrl: initialUrl,
  internalNetworks: internalNetworks,
  screenLocked: screenLocked
}) {
  let {
      credentials: credentials
    } = ke(),
    [A, L] = g({
      state: "url_input"
    }),
    j = void 0,
    children_2 = initialUrl ?? (void 0)?.url,
    children = (void 0)?.caption ?? "Your organization's gateway URL (set by managed settings):",
    O = T(0),
    ee = T(!1);
  R(() => () => {
    O.current += 1;
  }, []);
  let onCancel_3 = screenLocked ? () => L({
    state: "url_input"
  }) : onCancel;
  function onCancel_2() {
    O.current += 1, onCancel_3();
  }
  async function le(B) {
    let a = ++O.current;
    L({
      state: "connecting"
    });
    try {
      let url = cHt(B),
        h = await GNr(url, internalNetworks);
      if (a !== O.current) return;
      let o = h ? await sut(url, 1e4, h) : void 0;
      if (a !== O.current) return;
      let x = await tl.get(`${url}/.well-known/oauth-authorization-server`, {
        headers: {
          "User-Agent": $a()
        },
        timeout: 1e4
      });
      if (a !== O.current) return;
      let U = Mt().safeParse(x.data),
        E = U.success ? U.data : void 0,
        revocationEndpoint = tKn(url, E?.revocation_endpoint);
      if (E?.revocation_endpoint && !revocationEndpoint) t(`[gateway-login] ignoring advertised revocation endpoint ${E.revocation_endpoint} (not same-origin with ${url}); sign-out will not revoke`);
      let endpoints = {
          deviceAuthorizationEndpoint: ot(url, E?.device_authorization_endpoint, "/oauth/device_authorization"),
          tokenEndpoint: ot(url, E?.token_endpoint, "/oauth/token"),
          ...(revocationEndpoint && {
            revocationEndpoint: revocationEndpoint
          })
        },
        {
          hostname: hostname,
          fingerprint: fingerprint,
          localAddress: localAddress,
          remoteAddress: remoteAddress
        } = o ?? (await sut(url));
      if (a !== O.current) return;
      let previouslyPinned = await LFe(hostname, credentials);
      if (a !== O.current) return;
      if (previouslyPinned === fingerprint) await me(url, endpoints, fingerprint);else L({
        state: "trust_prompt",
        url: url,
        hostname: hostname,
        fingerprint: fingerprint,
        previouslyPinned: previouslyPinned,
        endpoints: endpoints,
        ...(h && {
          route: `from ${localAddress} to ${remoteAddress}, both inside declared ${h}`
        })
      });
    } catch (error) {
      if (a !== O.current) return;
      let message = Ut(error);
      L(message ? {
        state: "error",
        message: message,
        detail: l(error)
      } : {
        state: "error",
        message: Ue(error)
      });
    }
  }
  async function me(url_2, a, u) {
    let h = ++O.current;
    L({
      state: "connecting"
    });
    try {
      let httpsAgent = NFe(u, a.deviceAuthorizationEndpoint),
        {
          data: data
        } = await tl.post(a.deviceAuthorizationEndpoint, new URLSearchParams({
          surface: surface
        }).toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": $a()
          },
          timeout: 1e4,
          maxRedirects: 0,
          ...(httpsAgent && {
            httpsAgent: httpsAgent
          })
        });
      if (h !== O.current) return;
      let U = It().safeParse(data);
      if (!U.success) throw Error("gateway device authorization endpoint returned malformed response");
      let E = U.data;
      Ko(E.verification_uri_complete ?? E.verification_uri), L({
        state: "polling",
        url: url_2,
        userCode: E.user_code,
        verificationUri: E.verification_uri
      }), await b(url_2, a, E.device_code, E.interval ?? 5, h, u);
    } catch (error) {
      if (h !== O.current) return;
      if (nKn(error) === "slow_down") {
        L({
          state: "error",
          message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.",
          detail: Dt(error)
        });
        return;
      }
      L({
        state: "error",
        message: Ue(error)
      });
    }
  }
  async function b(B, a, device_code, h, o, x) {
    let {
        tokenEndpoint: tokenEndpoint
      } = a,
      E = Math.max(1, h);
    while (o === O.current) {
      if (await Q(E * 1000), o !== O.current) return;
      try {
        let httpsAgent_2 = NFe(x, tokenEndpoint),
          {
            data: data_2
          } = await tl.post(tokenEndpoint, new URLSearchParams({
            grant_type: grant_type,
            device_code: device_code
          }).toString(), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": $a()
            },
            timeout: 1e4,
            maxRedirects: 0,
            ...(httpsAgent_2 && {
              httpsAgent: httpsAgent_2
            })
          });
        if (o !== O.current) return;
        let oe = qNr().safeParse(data_2);
        if (!oe.success) throw Error("gateway token endpoint returned malformed response");
        await ie(B, a, oe.data, o);
        return;
      } catch (error) {
        if (o !== O.current) return;
        let H = nKn(error);
        if (H === "authorization_pending") continue;
        if (H === "slow_down") {
          E += 5;
          continue;
        }
        if (H === "expired_token") {
          L({
            state: "error",
            message: "Sign-in timed out before the browser flow completed. Try again."
          });
          return;
        }
        if (H === "access_denied") {
          L({
            state: "error",
            message: "Sign-in was denied in the browser."
          });
          return;
        }
        L({
          state: "error",
          message: Ue(error)
        });
        return;
      }
    }
  }
  async function ie(url_3, a, u, h) {
    let o = u.email ?? "",
      x = re(o, 16 * De),
      U = Sxe(x),
      email = x.length < o.length || U.length > De ? `${re(U, De)}\u2026` : U,
      auth = {
        url: url_3,
        jwt: u.access_token,
        expiresAt: Date.now() + u.expires_in * 1000,
        tokenEndpoint: a.tokenEndpoint,
        ...(a.revocationEndpoint && {
          revocationEndpoint: a.revocationEndpoint
        }),
        ...(u.refresh_token && {
          idpRefreshToken: u.refresh_token
        }),
        ...(email && {
          email: email
        })
      },
      {
        hostname: hostname_2,
        fingerprint: fingerprint_2
      } = await sut(url_3);
    if (h !== O.current) return;
    let q = await LFe(hostname_2, credentials);
    if (h !== O.current) return;
    if (q !== fingerprint_2) {
      L({
        state: "error",
        message: message_2
      });
      return;
    }
    if (email) {
      ee.current = !1, L({
        state: "confirm_account",
        auth: auth,
        email: email,
        saving: !1
      });
      return;
    }
    await K(auth, h);
  }
  async function K(B, a) {
    try {
      await V0o(B, credentials);
    } catch (error) {
      if (a !== O.current) return;
      let message_3 = l(error);
      t(`[gateway-login] secureStorage write failed: ${message_3}`, {
        level: "error"
      }), L({
        state: "error",
        message: message_3
      });
      return;
    }
    if (a !== O.current) return;
    onDone();
  }
  let isActive = A.state === "url_input";
  switch (ze("confirm:yes", () => {
    if (children_2) le(children_2);
  }, {
    context: "Confirmation",
    isActive: isActive
  }), ze("confirm:no", screenLocked ? () => !1 : onCancel, {
    context: "Confirmation",
    isActive: isActive
  }), K_((B, a) => a.escape, {
    isActive: A.state === "confirm_account" && A.saving
  }), A.state) {
    case "url_input":
      if (!children_2) return r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          bold: !0,
          children: "Cloud gateway"
        }), e(n, {
          color: "warning",
          children: "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator."
        })]
      });
      return r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          bold: !0,
          children: "Cloud gateway"
        }), e(n, {
          children: children
        }), e(s, {
          borderDimColor: !0,
          borderStyle: "round",
          paddingLeft: 1,
          children: e(n, {
            children: children_2
          })
        }), r(n, {
          dimColor: !0,
          children: ["Press Enter to connect", screenLocked ? "" : " \xB7 Esc to cancel"]
        })]
      });
    case "polling":
      return e(at, {
        userCode: A.userCode,
        verificationUri: A.verificationUri,
        onCancel: onCancel_2
      });
    case "connecting":
      return e(it, {
        label: "Connecting to gateway\u2026",
        onCancel: onCancel_2
      });
    case "trust_prompt":
      return r(s, {
        flexDirection: "column",
        gap: 1,
        children: [r(n, {
          bold: !0,
          children: ["Trust gateway ", e(n, {
            color: "suggestion",
            children: A.hostname
          }), "?"]
        }), A.previouslyPinned ? e(n, {
          color: "warning",
          children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation."
        }) : e(n, {
          children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway."
        }), A.route && r(n, {
          dimColor: !0,
          children: ["Connecting ", A.route]
        }), r(n, {
          dimColor: !0,
          children: ["Certificate fingerprint (SHA-256): ", A.fingerprint.slice(0, 16), "\u2026"]
        }), e(qn, {
          hideIndexes: !0,
          confirmLabel: "Yes, trust this gateway",
          cancelLabel: screenLocked ? "No, go back" : "No, cancel login",
          focus: "cancel",
          onConfirm: () => {
            let current = O.current;
            W0o(A.hostname, A.fingerprint, credentials).then(() => {
              if (current !== O.current) return;
              return me(A.url, A.endpoints, A.fingerprint);
            }).catch(a => {
              if (current !== O.current) return;
              L({
                state: "error",
                message: l(a)
              });
            });
          },
          onCancel: onCancel_2
        })]
      });
    case "confirm_account":
      return r(s, {
        flexDirection: "column",
        gap: 1,
        children: [r(n, {
          bold: !0,
          children: ["Signed in to Cloud gateway as", " ", e(n, {
            color: "suggestion",
            children: A.email
          })]
        }), A.saving ? r(s, {
          gap: 1,
          children: [e(Rs, {}), e(n, {
            dimColor: !0,
            children: "Finishing sign-in\u2026"
          })]
        }) : r(V, {
          children: [e(n, {
            children: "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again."
          }), e(qn, {
            hideIndexes: !0,
            focus: "cancel",
            confirmLabel: "Yes, continue",
            cancelLabel: screenLocked ? "No, go back" : "No, cancel login",
            onConfirm: () => {
              if (ee.current) return;
              if (ee.current = !0, A.auth.expiresAt <= Date.now() && !A.auth.idpRefreshToken) {
                L({
                  state: "error",
                  message: message_4
                });
                return;
              }
              let current_2 = O.current;
              L(a => a.state === "confirm_account" ? {
                ...a,
                saving: !0
              } : a), K(A.auth, current_2);
            },
            onCancel: () => {
              if (ee.current) return;
              ee.current = !0, t("[gateway-login] signed-in account declined; nothing saved"), onCancel_3();
            }
          })]
        })]
      });
    case "error":
      return e(st, {
        message: A.message,
        detail: A.detail,
        onCancel: onCancel_3
      });
  }
}
function at(k) {
  let M = w(13),
    {
      userCode: c,
      verificationUri: D,
      onCancel: onCancel_4
    } = k,
    C;
  if (M[0] === S) C = {
    context: "Confirmation"
  }, M[0] = C;else C = M[0];
  ze("confirm:no", onCancel_4, C);
  let A, L;
  if (M[1] === S) A = e(n, {
    bold: !0,
    children: "Cloud gateway \xB7 sign in"
  }), L = e(n, {
    children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:"
  }), M[1] = A, M[2] = L;else A = M[1], L = M[2];
  let j;
  if (M[3] !== c) j = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    paddingX: 2,
    children: e(n, {
      bold: !0,
      color: "suggestion",
      children: c
    })
  }), M[3] = c, M[4] = j;else j = M[4];
  let P;
  if (M[5] === S) P = e(n, {
    dimColor: !0,
    children: "Browser didn't open? Visit:"
  }), M[5] = P;else P = M[5];
  let Y;
  if (M[6] !== D) Y = r(s, {
    flexDirection: "column",
    children: [P, e(n, {
      dimColor: !0,
      wrap: "wrap",
      children: D
    })]
  }), M[6] = D, M[7] = Y;else Y = M[7];
  let O, ee;
  if (M[8] === S) O = r(s, {
    gap: 1,
    children: [e(Rs, {}), e(n, {
      dimColor: !0,
      children: "Waiting for sign-in to complete in your browser\u2026"
    })]
  }), ee = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), M[8] = O, M[9] = ee;else O = M[8], ee = M[9];
  let ne;
  if (M[10] !== j || M[11] !== Y) ne = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [A, L, j, Y, O, ee]
  }), M[10] = j, M[11] = Y, M[12] = ne;else ne = M[12];
  return ne;
}
function it(k) {
  let z = w(7),
    {
      label: c,
      onCancel: onCancel_5
    } = k,
    M;
  if (z[0] === S) M = {
    context: "Confirmation"
  }, z[0] = M;else M = z[0];
  ze("confirm:no", onCancel_5, M);
  let C;
  if (z[1] === S) C = e(Rs, {}), z[1] = C;else C = z[1];
  let A;
  if (z[2] !== c) A = r(s, {
    gap: 1,
    children: [C, e(n, {
      children: c
    })]
  }), z[2] = c, z[3] = A;else A = z[3];
  let L;
  if (z[4] === S) L = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), z[4] = L;else L = z[4];
  let j;
  if (z[5] !== A) j = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [A, L]
  }), z[5] = A, z[6] = j;else j = z[6];
  return j;
}
function st(k) {
  let M = w(9),
    {
      message: message_5,
      detail: D,
      onCancel: onCancel_6
    } = k,
    C;
  if (M[0] === S) C = {
    context: "Confirmation"
  }, M[0] = C;else C = M[0];
  ze("confirm:no", onCancel_6, C);
  let A;
  if (M[1] !== message_5) A = r(n, {
    color: "error",
    children: ["Error: ", message_5]
  }), M[1] = message_5, M[2] = A;else A = M[2];
  let L;
  if (M[3] !== D) L = D && e(n, {
    dimColor: !0,
    children: D
  }), M[3] = D, M[4] = L;else L = M[4];
  let j;
  if (M[5] === S) j = e(n, {
    dimColor: !0,
    children: "Press Esc to go back"
  }), M[5] = j;else j = M[5];
  let P;
  if (M[6] !== A || M[7] !== L) P = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [A, L, j]
  }), M[6] = A, M[7] = L, M[8] = P;else P = M[8];
  return P;
}
var children_4 = "Paste code here if prompted > ",
  Se = "The recommended sign-in isn't available on this machine";
function $t(k) {
  let c = Math.round(k / 86400);
  if (c < 1) return "less than a day";
  if (c === 365) return "1 year";
  return `${c} ${I(c, "day")}`;
}
function fue({
  onDone: onDone_2,
  onAuthSuccess: onAuthSuccess,
  onFreshPickerChange: onFreshPickerChange,
  onAccountOnHold: onAccountOnHold,
  startingMessage: startingMessage,
  mode = "login",
  expiresIn: expiresIn,
  forceLoginMethod: forceLoginMethod,
  urlOutdent = 0
}) {
  let P = ol(),
    {
      storageV5: storageV5,
      credentials: credentials_2
    } = ke(),
    proactivityLevel = ys(Z => Z.proactivityLevel),
    toolPermissionContext = ys(Z => Z.toolPermissionContext),
    paddingX = (P ? dU : 0) + urlOutdent,
    le = Je(),
    {
      forceLoginGatewayUrl: forceLoginGatewayUrl,
      gatewayInternalNetworks: gatewayInternalNetworks
    } = H5e(),
    ie = Tce(),
    gatewayScreenLocked = ie === "gateway",
    J = gatewayScreenLocked ? "gateway" : forceLoginMethod ?? ie,
    forcedMethodMessage = J === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : J === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null,
    a = null,
    u = vA(),
    h = Yt(),
    [oauthStatus, setOAuthStatus] = g(() => {
      if (mode === "setup-token") return {
        state: "ready_to_start"
      };
      if (J === "claudeai" || J === "console") return {
        state: "ready_to_start"
      };
      if (gatewayScreenLocked) return {
        state: "gateway_setup"
      };
      return {
        state: "idle"
      };
    }),
    U = T(!1);
  R(() => {
    if (oauthStatus.state !== "idle" && oauthStatus.state !== "platform_setup" && oauthStatus.state !== "console_method") U.current = !0;
    onFreshPickerChange?.(oauthStatus.state === "idle" && !U.current);
  }, [oauthStatus.state, onFreshPickerChange]);
  let [pastedCode, setPastedCode] = g(""),
    [cursorOffset, setCursorOffset] = g(0),
    [q] = g(() => new cL()),
    [loginWithClaudeAi, setLoginWithClaudeAi] = g(() => mode === "setup-token" || J === "claudeai"),
    [pe, setConsoleProfileLogin] = g(!1),
    [keyMintFallbackReason, Pe] = g(null),
    je = yHr(),
    consoleProfileLoginAllowed = Ie() === "firstParty" && !je && le.forceLoginOrgUUID === void 0 && J !== "claudeai",
    ye = le.forceLoginMethod !== void 0 && loginWithClaudeAi !== (le.forceLoginMethod === "claudeai"),
    orgUUID_2 = typeof le.forceLoginOrgUUID === "string" && !ye ? le.forceLoginOrgUUID : void 0,
    [showPastePrompt, ge] = g(!1),
    {
      copiedVia: Re,
      copy: copy,
      reset: reset
    } = MQ(oauthStatus.state === "waiting_for_login" ? oauthStatus.url : null),
    textInputColumns = ve().columns - children_4.length - 1,
    [kt] = g(() => SR() && HL() !== "off");
  R(() => {
    if (J === "claudeai") i("tengu_oauth_claudeai_forced", {});else if (J === "console") i("tengu_oauth_console_forced", {});else if (gatewayScreenLocked && !0 && mode !== "setup-token") i("tengu_oauth_gateway_forced", {});
  }, [J, gatewayScreenLocked, mode]), _r(() => {
    if (oauthStatus.state === "about_to_retry") setOAuthStatus(oauthStatus.nextState);
  }, oauthStatus.state === "about_to_retry" ? 1000 : null, [oauthStatus]), ze("confirm:yes", () => {
    i(oauthStatus.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", {
      loginWithClaudeAi: loginWithClaudeAi
    }), onDone_2();
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "success" && mode !== "setup-token" || oauthStatus.state === "gateway_done"
  });
  let At = ek(),
    qe = T(!1);
  ze("confirm:yes", () => {
    if (qe.current) return;
    qe.current = !0, Ee(Z => ({
      ...Z,
      hasCompletedOnboarding: !0,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }), storageV5).then(() => {
      At.exit();
      let proactivity = proactivityLevel !== void 0 && toolPermissionContext !== void 0 ? vso({
        proactivityLevel: proactivityLevel,
        toolPermissionContext: toolPermissionContext
      }) : void 0;
      import("B:/~BUN/root/chunk-br5arvvb.js").then(W => W.execRelaunch(proactivity ? {
        proactivity: proactivity
      } : {}));
    });
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "bedrock_done" || oauthStatus.state === "vertex_done"
  }), ze("confirm:yes", () => setOAuthStatus({
    state: "platform_setup"
  }), {
    context: "Confirmation",
    isActive: oauthStatus.state === "aws_refresh_done"
  }), ze("confirm:yes", () => {
    if (oauthStatus.state === "error" && oauthStatus.toRetry) setPastedCode(""), setOAuthStatus({
      state: "about_to_retry",
      nextState: oauthStatus.toRetry
    });
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "error" && !!oauthStatus.toRetry
  }), ze("confirm:yes", () => setOAuthStatus({
    state: "idle"
  }), {
    context: "Confirmation",
    isActive: oauthStatus.state === "account_on_hold" && mode !== "setup-token"
  }), R(() => {
    if (/^c+$/.test(pastedCode) && oauthStatus.state === "waiting_for_login" && showPastePrompt) setPastedCode(""), copy(oauthStatus.url);
  }, [pastedCode, oauthStatus, showPastePrompt, copy]);
  async function handleSubmitCode(Z, url_4) {
    if (!Z.trim()) {
      setPastedCode(""), setCursorOffset(0);
      return;
    }
    try {
      let [authorizationCode, state] = Z.split("#");
      if (!authorizationCode || !state) {
        setOAuthStatus({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url: url_4
          }
        });
        return;
      }
      i("tengu_oauth_manual_entry", {}), q.handleManualAuthCodeInput({
        authorizationCode: authorizationCode,
        state: state
      });
    } catch (error) {
      d(error), setOAuthStatus({
        state: "error",
        message: l(error),
        toRetry: {
          state: "waiting_for_login",
          url: url_4
        }
      });
    }
  }
  let Ze = se(async () => {
      let Z = url_5 => {
        if (reset(), ge(!1), setOAuthStatus({
          state: "waiting_for_login",
          url: url_5
        }), KH()) ge(!0);else h.setTimeout(() => ge(!0), 3000);
      };
      Pe(null);
      try {
        if (i("tengu_oauth_flow_start", {
          loginWithClaudeAi: loginWithClaudeAi
        }), pe && mode !== "setup-token") {
          if (!consoleProfileLoginAllowed) throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
          try {
            await tt(q, async G => Z(G), {
              orgUUID: orgUUID_2
            }), setOAuthStatus({
              state: "success"
            }), onAuthSuccess?.(), aM({
              message: "Claude Code login successful",
              notificationType: "auth_success"
            }, u, {
              storageV5: storageV5,
              credentials: credentials_2
            });
            return;
          } catch (error) {
            if (!(error instanceof _e) || !error.fallbackCures) throw error;
            let message_6 = zs(l(error));
            Pe({
              cause: error.causeSummary !== null ? zs(error.causeSummary) : message_6,
              message: message_6
            }), t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${message_6}`, {
              level: "warn"
            });
          }
        }
        let W = await q.startOAuthFlow(async G => Z(G), {
          loginWithClaudeAi: loginWithClaudeAi,
          inferenceOnly: mode === "setup-token",
          expiresIn: mode === "setup-token" ? expiresIn ?? LY : void 0,
          orgUUID: orgUUID_2
        }).catch(G => {
          if (G instanceof $q) throw G;
          let ue = G.message.includes("Token exchange failed"),
            Qe = nK(G);
          throw setOAuthStatus({
            state: "error",
            message: Qe ?? (ue ? "Failed to exchange authorization code for access token. Please try again." : G.message),
            toRetry: mode === "setup-token" ? {
              state: "ready_to_start"
            } : {
              state: "idle"
            }
          }), i("tengu_oauth_token_exchange_error", {
            ...Id(G),
            ssl_error: Qe !== null
          }), G;
        });
        if (mode === "setup-token") setOAuthStatus({
          state: "success",
          token: W.accessToken,
          expiresAt: W.expiresAt ?? void 0
        }), onAuthSuccess?.();else {
          await APe(W, {
            storageV5: storageV5,
            credentials: credentials_2
          });
          let G = await wN(credentials_2);
          if (!G.valid) throw Error(G.message);
          setOAuthStatus({
            state: "success"
          }), onAuthSuccess?.(), aM({
            message: "Claude Code login successful",
            notificationType: "auth_success"
          }, u, {
            storageV5: storageV5,
            credentials: credentials_2
          });
        }
      } catch (error) {
        if (Tfn(error)) {
          setOAuthStatus({
            state: "account_on_hold",
            message: Efn(tAe(error.errorUri))
          }), i("tengu_oauth_error", {
            account_on_hold: !0
          });
          return;
        }
        let G = error instanceof $q ? error.displayMessage : l(error),
          ue = nK(error);
        setOAuthStatus({
          state: "error",
          message: ue ?? G,
          ...(Fdt(error) && {
            verbatim: !0
          }),
          toRetry: {
            state: mode === "setup-token" ? "ready_to_start" : "idle"
          }
        }), i("tengu_oauth_error", {
          ...Id(error),
          ssl_error: ue !== null
        });
      }
    }, [q, loginWithClaudeAi, pe, consoleProfileLoginAllowed, mode, expiresIn, orgUUID_2, u, h, onAuthSuccess, storageV5, credentials_2, reset]),
    Le = T(!1);
  return R(() => {
    if (oauthStatus.state === "ready_to_start" && !Le.current) Le.current = !0, process.nextTick((Z, W) => {
      Z().finally(() => {
        W.current = !1;
      });
    }, Ze, Le);
  }, [oauthStatus.state, Ze]), _r(() => {
    i("tengu_oauth_success", {
      loginWithClaudeAi: loginWithClaudeAi
    }), onDone_2();
  }, mode === "setup-token" && oauthStatus.state === "success" ? 500 : null, [mode, oauthStatus, loginWithClaudeAi, onDone_2]), _r(() => onAccountOnHold?.(), mode === "setup-token" && oauthStatus.state === "account_on_hold" ? 500 : null, [mode, oauthStatus, onAccountOnHold]), R(() => () => {
    q.cleanup();
  }, [q]), r(s, {
    flexDirection: "column",
    gap: 1,
    children: [oauthStatus.state === "waiting_for_login" && showPastePrompt && r(s, {
      flexDirection: "column",
      gap: 1,
      paddingBottom: 1,
      marginX: paddingX ? -paddingX : void 0,
      children: [r(s, {
        flexDirection: "column",
        paddingX: paddingX,
        children: [r(s, {
          children: [r(n, {
            dimColor: !0,
            children: ["Browser didn't open? Use the url below to sign in", " "]
          }), e(q2, {
            via: Re
          })]
        }), e(K2, {
          via: Re
        })]
      }), e(s, {
        children: e(bt, {
          url: oauthStatus.url,
          assumeSupport: !0,
          children: e(n, {
            dimColor: !0,
            children: oauthStatus.url
          })
        })
      }), kt && e(s, {
        paddingX: paddingX,
        children: r(n, {
          dimColor: !0,
          children: ["Hold ", nLe(), " while selecting to use your terminal's native copy"]
        })
      })]
    }, "urlToCopy"), mode === "setup-token" && oauthStatus.state === "success" && oauthStatus.token && r(s, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [e(n, {
        color: "success",
        children: "\u2713 Long-lived authentication token created successfully!"
      }), r(s, {
        flexDirection: "column",
        gap: 1,
        children: [r(n, {
          children: ["Your OAuth token (valid for", " ", $t(oauthStatus.expiresAt !== void 0 && Number.isFinite(oauthStatus.expiresAt) ? Math.round((oauthStatus.expiresAt - Date.now()) / 1000) : expiresIn ?? LY), "):"]
        }), e(n, {
          color: "warning",
          children: oauthStatus.token
        }), e(n, {
          dimColor: !0,
          children: "Store this token securely. You won't be able to see it again."
        }), e(n, {
          dimColor: !0,
          children: "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>"
        })]
      })]
    }, "tokenOutput"), e(s, {
      flexDirection: "column",
      gap: 1,
      children: e(wt, {
        oauthStatus: oauthStatus,
        mode: mode,
        startingMessage: startingMessage,
        forcedMethodMessage: forcedMethodMessage,
        gatewayUnsupportedWarning: null,
        forceLoginGatewayUrl: forceLoginGatewayUrl,
        gatewayInternalNetworks: gatewayInternalNetworks,
        gatewayScreenLocked: gatewayScreenLocked,
        keyMintFallbackReason: keyMintFallbackReason,
        showPastePrompt: showPastePrompt,
        pastedCode: pastedCode,
        setPastedCode: setPastedCode,
        cursorOffset: cursorOffset,
        setCursorOffset: setCursorOffset,
        textInputColumns: textInputColumns,
        handleSubmitCode: handleSubmitCode,
        setOAuthStatus: setOAuthStatus,
        setLoginWithClaudeAi: setLoginWithClaudeAi,
        setConsoleProfileLogin: setConsoleProfileLogin,
        consoleProfileLoginAllowed: consoleProfileLoginAllowed,
        onAuthSuccess: onAuthSuccess
      })
    })]
  });
}
function Ve(k) {
  let D = w(4),
    {
      onComplete: onComplete
    } = k,
    z;
  if (D[0] !== onComplete) z = () => {
    let M = Sce();
    if (!M) {
      onComplete(!1);
      return;
    }
    if (FFe() && !ps()) {
      onComplete(!1);
      return;
    }
    let abortController = new AbortController();
    return Tun(M, abortController.signal).then(A => {
      if (abortController.signal.aborted) {
        return;
      }
      if (A) rJ(), gYe();
      onComplete(A);
    }), () => abortController.abort();
  }, D[0] = onComplete, D[1] = z;else z = D[1];
  let L;
  if (D[2] === S) L = [], D[2] = L;else L = D[2];
  R(z, L);
  let j;
  if (D[3] === S) j = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(s, {
      children: [e(Rs, {}), e(n, {
        children: "Running awsAuthRefresh\u2026"
      })]
    }), e(P1e, {})]
  }), D[3] = j;else j = D[3];
  return j;
}
function wt(k) {
  let u = w(122),
    {
      oauthStatus: oauthStatus_2,
      mode: mode_2,
      startingMessage: startingMessage_2,
      forcedMethodMessage: M,
      gatewayUnsupportedWarning: C,
      forceLoginGatewayUrl: A,
      gatewayInternalNetworks: L,
      gatewayScreenLocked: j,
      keyMintFallbackReason: keyMintFallbackReason_2,
      showPastePrompt: showPastePrompt_2,
      pastedCode: O,
      setPastedCode: ee,
      cursorOffset: cursorOffset_2,
      setCursorOffset: ae,
      textInputColumns: le,
      handleSubmitCode: handleSubmitCode_2,
      setOAuthStatus: setOAuthStatus_2,
      setLoginWithClaudeAi: setLoginWithClaudeAi_2,
      setConsoleProfileLogin: setConsoleProfileLogin_2,
      consoleProfileLoginAllowed: consoleProfileLoginAllowed_2,
      onAuthSuccess: onAuthSuccess_2
    } = k;
  switch (oauthStatus_2.state) {
    case "idle":
      {
        const children_3 = startingMessage_2 ? startingMessage_2 : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
        let h;
        if (u[0] !== children_3) h = e(n, {
          bold: !0,
          children: children_3
        }), u[0] = children_3, u[1] = h;else h = u[1];
        let o;
        if (u[2] !== C) o = C && e(n, {
          color: "warning",
          children: C
        }), u[2] = C, u[3] = o;else o = u[3];
        let x;
        if (u[4] === S) x = e(n, {
          children: "Select login method:"
        }), u[4] = x;else x = u[4];
        let U;
        if (u[5] === S) U = {
          label: r(n, {
            children: ["Claude account with subscription \xB7", " ", e(n, {
              dimColor: !0,
              children: "Pro, Max, Team, or Enterprise"
            }), !1]
          }),
          value: "claudeai"
        }, u[5] = U;else U = u[5];
        let E;
        if (u[6] === S) E = {
          label: r(n, {
            children: ["Anthropic Console account \xB7", " ", e(n, {
              dimColor: !0,
              children: "API usage billing"
            })]
          }),
          value: "console"
        }, u[6] = E;else E = u[6];
        let options;
        if (u[7] === S) options = [U, E, {
          label: r(n, {
            children: ["3rd-party platform \xB7", " ", e(n, {
              dimColor: !0,
              children: "Amazon Bedrock, Microsoft Foundry, or Vertex AI"
            })]
          }),
          value: "platform"
        }], u[7] = options;else options = u[7];
        let H;
        if (u[8] !== consoleProfileLoginAllowed_2 || u[9] !== setConsoleProfileLogin_2 || u[10] !== setLoginWithClaudeAi_2 || u[11] !== setOAuthStatus_2) H = e(s, {
          children: e(Fe, {
            options: options,
            onChange: oe => {
              if (oe === "platform") i("tengu_oauth_platform_selected", {}), setOAuthStatus_2({
                state: "platform_setup"
              });else if (oe === "claudeai") i("tengu_oauth_claudeai_selected", {}), setLoginWithClaudeAi_2(!0), setConsoleProfileLogin_2(!1), setOAuthStatus_2({
                state: "ready_to_start"
              });else if (consoleProfileLoginAllowed_2) i("tengu_oauth_console_selected", {}), setOAuthStatus_2({
                state: "console_method"
              });else i("tengu_oauth_console_selected", {}), setLoginWithClaudeAi_2(!1), setConsoleProfileLogin_2(!1), setOAuthStatus_2({
                state: "ready_to_start"
              });
            }
          })
        }), u[8] = consoleProfileLoginAllowed_2, u[9] = setConsoleProfileLogin_2, u[10] = setLoginWithClaudeAi_2, u[11] = setOAuthStatus_2, u[12] = H;else H = u[12];
        let q;
        if (u[13] !== h || u[14] !== o || u[15] !== H) q = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [h, o, x, H]
        }), u[13] = h, u[14] = o, u[15] = H, u[16] = q;else q = u[16];
        return q;
      }
    case "gateway_setup":
      {
        let onDone_3;
        if (u[17] !== onAuthSuccess_2 || u[18] !== setOAuthStatus_2) onDone_3 = () => {
          onAuthSuccess_2?.(), setOAuthStatus_2({
            state: "gateway_done"
          });
        }, u[17] = onAuthSuccess_2, u[18] = setOAuthStatus_2, u[19] = onDone_3;else onDone_3 = u[19];
        let onCancel_7;
        if (u[20] !== setOAuthStatus_2) onCancel_7 = () => setOAuthStatus_2({
          state: "idle"
        }), u[20] = setOAuthStatus_2, u[21] = onCancel_7;else onCancel_7 = u[21];
        let o;
        if (u[22] !== A || u[23] !== L || u[24] !== j || u[25] !== onDone_3 || u[26] !== onCancel_7) o = e(Me, {
          initialUrl: A,
          internalNetworks: L,
          screenLocked: j,
          onDone: onDone_3,
          onCancel: onCancel_7
        }), u[22] = A, u[23] = L, u[24] = j, u[25] = onDone_3, u[26] = onCancel_7, u[27] = o;else o = u[27];
        return o;
      }
    case "gateway_done":
      {
        let a;
        if (u[28] === S) a = e(n, {
          color: "success",
          children: "Connected to Cloud gateway."
        }), u[28] = a;else a = u[28];
        let h;
        if (u[29] === S) h = r(s, {
          flexDirection: "column",
          gap: 1,
          marginTop: 1,
          children: [a, r(n, {
            dimColor: !0,
            children: ["Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to continue."]
          })]
        }), u[29] = h;else h = u[29];
        return h;
      }
    case "console_method":
      {
        let a, h;
        if (u[30] === S) a = e(n, {
          bold: !0,
          children: "Anthropic Console account"
        }), h = e(n, {
          children: "How do you want to sign in?"
        }), u[30] = a, u[31] = h;else a = u[30], h = u[31];
        let o;
        if (u[32] === S) o = {
          label: r(n, {
            children: ["Sign in with your Console account", " ", e(n, {
              dimColor: !0,
              children: "(recommended)"
            })]
          }),
          value: "wif"
        }, u[32] = o;else o = u[32];
        let x;
        if (u[33] === S) x = e(n, {
          dimColor: !0,
          children: "(legacy)"
        }), u[33] = x;else x = u[33];
        let options_2;
        if (u[34] === S) options_2 = [o, {
          label: r(n, {
            children: ["Create an API key ", x, " \xB7", " ", e(n, {
              dimColor: !0,
              children: "adds a key to your Console workspace"
            })]
          }),
          value: "api-key"
        }, {
          label: "Go back",
          value: "back"
        }], u[34] = options_2;else options_2 = u[34];
        let onCancel_8;
        if (u[35] !== setOAuthStatus_2) onCancel_8 = () => setOAuthStatus_2({
          state: "idle"
        }), u[35] = setOAuthStatus_2, u[36] = onCancel_8;else onCancel_8 = u[36];
        let onChange;
        if (u[37] !== setConsoleProfileLogin_2 || u[38] !== setLoginWithClaudeAi_2 || u[39] !== setOAuthStatus_2) onChange = ce => {
          if (ce === "back") {
            setOAuthStatus_2({
              state: "idle"
            });
            return;
          }
          if (setLoginWithClaudeAi_2(!1), ce === "wif") i("tengu_oauth_console_token_selected", {}), setConsoleProfileLogin_2(!0);else i("tengu_oauth_console_api_key_selected", {}), setConsoleProfileLogin_2(!1);
          setOAuthStatus_2({
            state: "ready_to_start"
          });
        }, u[37] = setConsoleProfileLogin_2, u[38] = setLoginWithClaudeAi_2, u[39] = setOAuthStatus_2, u[40] = onChange;else onChange = u[40];
        let H;
        if (u[41] !== onCancel_8 || u[42] !== onChange) H = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [a, h, e(s, {
            children: e(Fe, {
              options: options_2,
              onCancel: onCancel_8,
              onChange: onChange
            })
          })]
        }), u[41] = onCancel_8, u[42] = onChange, u[43] = H;else H = u[43];
        return H;
      }
    case "platform_setup":
      {
        let a;
        if (u[44] === S) a = Sce(), u[44] = a;else a = u[44];
        let Ae = a;
        let h;
        if (u[45] === S) h = e(n, {
          bold: !0,
          children: "Using 3rd-party platforms"
        }), u[45] = h;else h = u[45];
        let o, x;
        if (u[46] === S) o = {
          label: r(n, {
            children: ["Amazon Bedrock \xB7 ", e(n, {
              dimColor: !0,
              children: "interactive setup"
            })]
          }),
          value: "bedrock"
        }, x = Ae ? [{
          label: r(n, {
            children: ["Claude Platform on AWS \xB7", " ", e(n, {
              dimColor: !0,
              children: "refresh credentials"
            })]
          }),
          value: "aws_refresh"
        }] : [], u[46] = o, u[47] = x;else o = u[46], x = u[47];
        let U;
        if (u[48] === S) U = {
          label: r(n, {
            children: ["Microsoft Foundry \xB7 ", e(n, {
              dimColor: !0,
              children: "opens docs"
            })]
          }),
          value: "foundry"
        }, u[48] = U;else U = u[48];
        let options_3;
        if (u[49] === S) options_3 = [o, ...x, U, {
          label: r(n, {
            children: ["Google Vertex AI \xB7 ", e(n, {
              dimColor: !0,
              children: "interactive setup"
            })]
          }),
          value: "vertex"
        }, {
          label: "Go back",
          value: "back"
        }], u[49] = options_3;else options_3 = u[49];
        let F;
        if (u[50] !== setOAuthStatus_2) F = e(Fe, {
          options: options_3,
          onChange: pe => {
            yt: switch (pe) {
              case "bedrock":
                {
                  i("tengu_oauth_bedrock_wizard_launched", {}), setOAuthStatus_2({
                    state: "bedrock_wizard"
                  });
                  break yt;
                }
              case "aws_refresh":
                {
                  i("tengu_oauth_aws_refresh_launched", {}), setOAuthStatus_2({
                    state: "aws_refresh_running"
                  });
                  break yt;
                }
              case "foundry":
                {
                  i("tengu_oauth_platform_docs_opened", {
                    platform: y("foundry")
                  }), Ko("https://code.claude.com/docs/en/microsoft-foundry"), setOAuthStatus_2({
                    state: "idle"
                  });
                  break yt;
                }
              case "vertex":
                {
                  i("tengu_oauth_vertex_wizard_launched", {}), setOAuthStatus_2({
                    state: "vertex_wizard"
                  });
                  break yt;
                }
              default:
                {
                  setOAuthStatus_2({
                    state: "idle"
                  });
                }
            }
          },
          onCancel: () => setOAuthStatus_2({
            state: "idle"
          })
        }), u[50] = setOAuthStatus_2, u[51] = F;else F = u[51];
        let H;
        if (u[52] === S) H = r(n, {
          dimColor: !0,
          children: ["Foundry: ", e(bt, {
            url: "https://code.claude.com/docs/en/microsoft-foundry",
            children: "https://code.claude.com/docs/en/microsoft-foundry"
          })]
        }), u[52] = H;else H = u[52];
        let q;
        if (u[53] !== F) q = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [h, F, H]
        }), u[53] = F, u[54] = q;else q = u[54];
        return q;
      }
    case "aws_refresh_running":
      {
        let a;
        if (u[55] !== setOAuthStatus_2) a = e(Ve, {
          onComplete: ok => setOAuthStatus_2({
            state: "aws_refresh_done",
            ok: ok
          })
        }), u[55] = setOAuthStatus_2, u[56] = a;else a = u[56];
        return a;
      }
    case "aws_refresh_done":
      {
        let a;
        if (u[57] !== oauthStatus_2.ok) a = oauthStatus_2.ok ? e(n, {
          color: "success",
          children: "AWS credentials refreshed."
        }) : e(n, {
          color: "error",
          children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal."
        }), u[57] = oauthStatus_2.ok, u[58] = a;else a = u[58];
        let h;
        if (u[59] === S) h = r(n, {
          dimColor: !0,
          children: ["Press ", e(n, {
            bold: !0,
            children: "Enter"
          }), " to continue."]
        }), u[59] = h;else h = u[59];
        let o;
        if (u[60] !== a) o = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [a, h]
        }), u[60] = a, u[61] = o;else o = u[61];
        return o;
      }
    case "bedrock_wizard":
      {
        let a;
        if (u[62] !== setOAuthStatus_2) a = e(nJe, {
          onComplete: message_7 => setOAuthStatus_2({
            state: "bedrock_done",
            message: message_7
          }),
          onCancel: () => setOAuthStatus_2({
            state: "platform_setup"
          }),
          exitOnCtrlCD: !0
        }), u[62] = setOAuthStatus_2, u[63] = a;else a = u[63];
        return a;
      }
    case "bedrock_done":
    case "vertex_done":
      {
        let a;
        if (u[64] !== oauthStatus_2.message) a = e(n, {
          color: "success",
          children: oauthStatus_2.message
        }), u[64] = oauthStatus_2.message, u[65] = a;else a = u[65];
        let h;
        if (u[66] === S) h = r(n, {
          dimColor: !0,
          children: ["Press ", e(n, {
            bold: !0,
            children: "Enter"
          }), " to restart Claude Code."]
        }), u[66] = h;else h = u[66];
        let o;
        if (u[67] !== a) o = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [a, h]
        }), u[67] = a, u[68] = o;else o = u[68];
        return o;
      }
    case "vertex_wizard":
      {
        let a;
        if (u[69] !== setOAuthStatus_2) a = e(rJe, {
          onComplete: message_8 => setOAuthStatus_2({
            state: "vertex_done",
            message: message_8
          }),
          onCancel: () => setOAuthStatus_2({
            state: "platform_setup"
          }),
          exitOnCtrlCD: !0
        }), u[69] = setOAuthStatus_2, u[70] = a;else a = u[70];
        return a;
      }
    case "waiting_for_login":
      {
        let a;
        if (u[71] !== M) a = M && e(s, {
          children: e(n, {
            dimColor: !0,
            children: M
          })
        }), u[71] = M, u[72] = a;else a = u[72];
        let h;
        if (u[73] !== keyMintFallbackReason_2) h = keyMintFallbackReason_2 && e(s, {
          children: e(n, {
            dimColor: !0,
            children: `${Se} (${keyMintFallbackReason_2.cause}), so this sign-in will create an API key.`
          })
        }), u[73] = keyMintFallbackReason_2, u[74] = h;else h = u[74];
        let o;
        if (u[75] !== showPastePrompt_2) o = !showPastePrompt_2 && r(s, {
          children: [e(Rs, {}), e(n, {
            children: "Opening browser to sign in\u2026"
          })]
        }), u[75] = showPastePrompt_2, u[76] = o;else o = u[76];
        let x;
        if (u[77] !== cursorOffset_2 || u[78] !== handleSubmitCode_2 || u[79] !== oauthStatus_2.url || u[80] !== O || u[81] !== ae || u[82] !== ee || u[83] !== showPastePrompt_2 || u[84] !== le) x = showPastePrompt_2 && r(s, {
          children: [e(n, {
            children: children_4
          }), e(Qn, {
            value: O,
            onChange: ee,
            onSubmit: be => handleSubmitCode_2(be, oauthStatus_2.url),
            cursorOffset: cursorOffset_2,
            onChangeCursorOffset: ae,
            columns: le,
            mask: "*"
          })]
        }), u[77] = cursorOffset_2, u[78] = handleSubmitCode_2, u[79] = oauthStatus_2.url, u[80] = O, u[81] = ae, u[82] = ee, u[83] = showPastePrompt_2, u[84] = le, u[85] = x;else x = u[85];
        let U;
        if (u[86] !== a || u[87] !== h || u[88] !== o || u[89] !== x) U = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [a, h, o, x]
        }), u[86] = a, u[87] = h, u[88] = o, u[89] = x, u[90] = U;else U = u[90];
        return U;
      }
    case "creating_api_key":
      {
        let a;
        if (u[91] === S) a = e(s, {
          flexDirection: "column",
          gap: 1,
          children: r(s, {
            children: [e(Rs, {}), e(n, {
              children: "Creating API key for Claude Code\u2026"
            })]
          })
        }), u[91] = a;else a = u[91];
        return a;
      }
    case "about_to_retry":
      {
        let a;
        if (u[92] === S) a = e(s, {
          flexDirection: "column",
          gap: 1,
          children: e(n, {
            color: "permission",
            children: "Retrying\u2026"
          })
        }), u[92] = a;else a = u[92];
        return a;
      }
    case "success":
      {
        let children_5;
        if (u[93] !== mode_2 || u[94] !== oauthStatus_2.token) children_5 = mode_2 === "setup-token" && oauthStatus_2.token ? null : r(V, {
          children: [An()?.emailAddress ? r(n, {
            dimColor: !0,
            children: ["Logged in as", " ", e(n, {
              children: An()?.emailAddress
            })]
          }) : null, r(n, {
            color: "success",
            children: ["Login successful. Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to continue\u2026"]
          })]
        }), u[93] = mode_2, u[94] = oauthStatus_2.token, u[95] = children_5;else children_5 = u[95];
        let h;
        if (u[96] !== children_5) h = e(s, {
          flexDirection: "column",
          children: children_5
        }), u[96] = children_5, u[97] = h;else h = u[97];
        return h;
      }
    case "account_on_hold":
      {
        let a;
        if (u[98] !== oauthStatus_2.message) a = e(n, {
          color: "warning",
          children: oauthStatus_2.message
        }), u[98] = oauthStatus_2.message, u[99] = a;else a = u[99];
        let h;
        if (u[100] !== mode_2) h = mode_2 !== "setup-token" && r(n, {
          dimColor: !0,
          children: ["Press ", e(n, {
            bold: !0,
            children: "Enter"
          }), " to go back to login options."]
        }), u[100] = mode_2, u[101] = h;else h = u[101];
        let o;
        if (u[102] !== a || u[103] !== h) o = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [a, h]
        }), u[102] = a, u[103] = h, u[104] = o;else o = u[104];
        return o;
      }
    case "error":
      {
        let ye, flexDirection, gap, o;
        if (u[105] !== oauthStatus_2.message || u[106] !== oauthStatus_2.verbatim) {
          let he = oauthStatus_2.verbatim ? /\s(https:\/\/\S+)$/.exec(oauthStatus_2.message) : null;
          let fe = he?.[1];
          let ge = fe && sY(fe);
          let Re = fe && ge ? fe.slice(ge.length) : "";
          let Ce = ge ? JCe(ge) : void 0;
          ye = s;
          flexDirection = "column";
          gap = 1;
          o = he && ge ? r(s, {
            flexDirection: "column",
            children: [e(n, {
              color: "error",
              children: oauthStatus_2.message.slice(0, he.index)
            }), r(n, {
              color: "error",
              children: [Ce ? e(bt, {
                url: Ce,
                assumeSupport: !0,
                children: e(n, {
                  color: "error",
                  children: Ce
                })
              }) : ge, Re]
            })]
          }) : e(n, {
            color: "error",
            children: oauthStatus_2.verbatim ? oauthStatus_2.message : `OAuth error: ${oauthStatus_2.message}`
          });
          u[105] = oauthStatus_2.message, u[106] = oauthStatus_2.verbatim, u[107] = ye, u[108] = flexDirection, u[109] = gap, u[110] = o;
        } else ye = u[107], flexDirection = u[108], gap = u[109], o = u[110];
        let x;
        if (u[111] !== keyMintFallbackReason_2) x = keyMintFallbackReason_2 && e(n, {
          dimColor: !0,
          children: `${Se}: ${keyMintFallbackReason_2.message}`
        }), u[111] = keyMintFallbackReason_2, u[112] = x;else x = u[112];
        let U;
        if (u[113] !== oauthStatus_2.toRetry) U = oauthStatus_2.toRetry && e(s, {
          marginTop: 1,
          children: r(n, {
            color: "permission",
            children: ["Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to retry."]
          })
        }), u[113] = oauthStatus_2.toRetry, u[114] = U;else U = u[114];
        let E;
        if (u[115] !== ye || u[116] !== flexDirection || u[117] !== gap || u[118] !== o || u[119] !== x || u[120] !== U) E = r(ye, {
          flexDirection: flexDirection,
          gap: gap,
          children: [o, x, U]
        }), u[115] = ye, u[116] = flexDirection, u[117] = gap, u[118] = o, u[119] = x, u[120] = U, u[121] = E;else E = u[121];
        return E;
      }
    default:
      {
        return null;
      }
  }
}
export { fue };