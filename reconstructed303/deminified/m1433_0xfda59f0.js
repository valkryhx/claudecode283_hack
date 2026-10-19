// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { zne, IA } from "B:/~BUN/root/chunk-jpdys232.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, ne, Zg, Hd } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { DIe, XBs, Hgt, $gt, BHt, zke, jHt, Gke, JBs, Ugt, FIe, hte, zje, Vje, WHt, E_, dln, y0o, pLr, fLr, Wjs, sJe, pEe, iJe, _Lr, yle, fht, wn, lB, cWe, uJ, H0o, Azs, Ms, Ce } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { di } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { fn, ut, a_t } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { qn, MJ } from "B:/~BUN/root/chunk-245a2x6v.js";
import { Ane, I9n, Lze, XJ, M9n } from "B:/~BUN/root/chunk-pej55jax.js";
import { _p } from "B:/~BUN/root/chunk-htbmes7q.js";
import { xae } from "B:/~BUN/root/chunk-yjayxywk.js";
import { rj, dM } from "B:/~BUN/root/chunk-j2ppas05.js";
import { Z$e } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { _Tt as clientId, dns as scopes, cns, uns, Gar, pns, fns } from "B:/~BUN/root/chunk-dnxn3zey.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { bl } from "B:/~BUN/root/chunk-b900np4s.js";
import { C0 } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { s, n, zt, dn, ot, TR, Dr } from "B:/~BUN/root/chunk-damrp3r8.js";
import { nce, l8, d8 } from "B:/~BUN/root/chunk-bs0drrfx.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { rt, xg } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Fo } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { Ktt } from "B:/~BUN/root/chunk-1rb7fvzn.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { ovt } from "B:/~BUN/root/chunk-nh236c5x.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { lr } from "B:/~BUN/root/chunk-v8w1g8ga.js";
import { Ii } from "B:/~BUN/root/chunk-3cgpbmp2.js";
import { rvt } from "B:/~BUN/root/chunk-c0pwhbz2.js";
import { pVe, _qr, bqr, ZGt } from "B:/~BUN/root/chunk-q1s6apbx.js";
import { OF } from "B:/~BUN/root/chunk-5nyfx9ah.js";
import { TV } from "B:/~BUN/root/chunk-xa5s55y7.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Ris } from "B:/~BUN/root/chunk-yp8sghfs.js";
import { ae, P, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { $N } from "B:/~BUN/root/chunk-2f1s42re.js";
import { $G, Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { ge, mn, St } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { hs } from "B:/~BUN/root/chunk-qjf8jcwq.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
class Ne extends Error {
  fallbackCures;
  causeSummary;
  constructor(v, o) {
    super(v, {
      cause: o.cause
    });
    this.fallbackCures = o.fallbackCures, this.causeSummary = o.fallbackCures ? o.causeSummary : null;
  }
}
async function vt(v, o, M = {}) {
  try {
    let F = await jt(v, o, M);
    return g("oauth_console_profile_login"), F;
  } catch (error) {
    if (error instanceof Ne && error.fallbackCures) p("oauth_console_profile_login", "refused_fell_back");else m("oauth_console_profile_login", error instanceof Ne ? "refused" : "error");
    throw error;
  }
}
async function jt(v, o, {
  loginHint: loginHint,
  loginMethod: loginMethod,
  orgUUID: orgUUID
}) {
  try {
    await Gar();
  } catch (H) {
    let K = cns(H);
    if (K === null) throw H;
    let causeSummary = uns(H);
    throw new Ne(d(H), K && causeSummary !== null ? {
      fallbackCures: !0,
      causeSummary: causeSummary,
      cause: H
    } : {
      fallbackCures: !1,
      cause: H
    });
  }
  let C = await v.startOAuthFlow(o, {
      loginWithClaudeAi: !1,
      oauthClient: {
        clientId: clientId,
        scopes: scopes
      },
      loginHint: loginHint,
      loginMethod: loginMethod,
      orgUUID: orgUUID
    }),
    G = Kt(C);
  if (G instanceof Error) throw await Ct(C), G;
  await Xt(await Vt());
  let D = await _qr(C, {}),
    I;
  try {
    let tokenAccount = C.tokenAccount;
    I = await pns({
      accessToken: C.accessToken,
      refreshToken: G.refreshToken,
      expiresAtMs: G.expiresAtMs,
      scopes: C.scopes,
      organizationUuid: tokenAccount?.organizationUuid ?? C.profile?.organization.uuid,
      organizationName: tokenAccount?.organizationName ?? C.profile?.organization.name,
      accountEmail: tokenAccount?.emailAddress ?? C.profile?.account.email,
      workspaceId: tokenAccount?.workspaceId,
      workspaceName: tokenAccount?.workspaceName
    });
  } catch (error) {
    if (!(await fns(G.refreshToken))) await Ct(C);
    throw error;
  }
  return await dln(C.accessToken).catch(H => t(String(H), {
    level: "error"
  })), await bqr({
    ...D
  }), I;
}
async function Vt() {
  if (xe() !== "firstParty") return null;
  let v = qn();
  v.invalidateCache?.();
  let o = (await v.readAsync())?.claudeAiOauth;
  return o?.refreshToken ? {
    refreshToken: o.refreshToken,
    clientId: o.clientId
  } : null;
}
async function Xt(v) {
  if (v === null) return;
  await E_(v.refreshToken, v.clientId);
  try {
    await qn().mutate(o => ({
      ...o,
      claudeAiOauth: void 0
    }));
  } catch (error) {
    t(`Console profile login: could not clear the replaced claude.ai login record: ${d(error)}`, {
      level: "error"
    });
  }
}
function Kt(v) {
  if (!v.scopes.includes(IA)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!v.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (v.expiresAt === null || !Number.isFinite(v.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return {
    refreshToken: v.refreshToken,
    expiresAtMs: v.expiresAt
  };
}
async function Ct(v) {
  if (v.refreshToken) await E_(v.refreshToken, clientId);
}
B();
var grant_type = "urn:ietf:params:oauth:grant-type:device_code",
  surface = "claude_code",
  Jt = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED"]),
  it = 254,
  message_4 = "Sign-in timed out while waiting for you to continue. Try again.",
  message_2 = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function at(v) {
  let o = d(v);
  if (o.includes($gt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (o.includes(BHt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (jHt(v) !== void 0) return message_2;
  return o;
}
function eo(v) {
  let o = v?.response?.data;
  if (typeof o !== "object" || o === null) return;
  let error_description = o.error_description;
  if (typeof error_description !== "string") return;
  return ne(Zg(error_description), 300).trim() || void 0;
}
function to(v) {
  let o = k(v) ?? k(v?.cause),
    M = d(v);
  if (!(o !== void 0 && Jt.has(o) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(M))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " + "store by default on the native binary and Node \u226522.15, so if the CA is " + "already installed there, upgrade to a current runtime. Otherwise set " + "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 " + "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under " + "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
var oo = f(() => St({
  device_authorization_endpoint: ge().optional(),
  token_endpoint: ge().optional(),
  revocation_endpoint: ge().nullish().catch(void 0)
}));
function kt(v, o, M) {
  let F = pLr(v, o);
  if (F) return F;
  if (o) t(`[gateway-login] ignoring advertised endpoint ${o} (not same-origin with ${v}); using ${M}`);
  return `${v}${M}`;
}
var no = f(() => St({
  device_code: ge(),
  user_code: ge(),
  verification_uri: ge(),
  verification_uri_complete: ge().optional(),
  expires_in: mn(),
  interval: mn().optional()
}));
function st({
  onDone: onDone,
  onCancel: onCancel,
  initialUrl: initialUrl,
  namedBy: namedBy,
  internalNetworks: internalNetworks,
  screenLocked: screenLocked
}) {
  let {
      credentials: credentials
    } = Oe(),
    [D, I] = y({
      state: "url_input"
    }),
    H = void 0,
    children_2 = initialUrl ?? (void 0)?.url,
    children = (void 0)?.caption ?? (namedBy === "developer" ? `Gateway URL from your settings file (${fn("userSettings")}), not from your organization's managed settings.` : "Your organization's gateway URL (set by managed settings):"),
    N = A(0),
    ce = A(!1);
  P(() => () => {
    N.current += 1;
  }, []);
  let onCancel_3 = screenLocked ? () => I({
    state: "url_input"
  }) : onCancel;
  function onCancel_2() {
    N.current += 1, onCancel_3();
  }
  async function ye(V) {
    let U = ++N.current;
    I({
      state: "connecting"
    });
    try {
      let url = DIe(V),
        z = await XBs(url, internalNetworks, namedBy);
      if (U !== N.current) return;
      let X = z.basis === "network" ? z.network : void 0,
        a = z.basis === "allowlisted" ? z.judged : X ? await Hgt(url, 1e4, X) : void 0;
      if (U !== N.current) return;
      let ue = await sl.get(`${url}/.well-known/oauth-authorization-server`, {
        headers: {
          "User-Agent": hs()
        },
        timeout: 1e4
      });
      if (U !== N.current) return;
      let u = oo().safeParse(ue.data),
        T = u.success ? u.data : void 0,
        revocationEndpoint = pLr(url, T?.revocation_endpoint);
      if (T?.revocation_endpoint && !revocationEndpoint) t(`[gateway-login] ignoring advertised revocation endpoint ${T.revocation_endpoint} (not same-origin with ${url}); sign-out will not revoke`);
      let endpoints = {
          deviceAuthorizationEndpoint: kt(url, T?.device_authorization_endpoint, "/oauth/device_authorization"),
          tokenEndpoint: kt(url, T?.token_endpoint, "/oauth/token"),
          ...(revocationEndpoint && {
            revocationEndpoint: revocationEndpoint
          })
        },
        {
          hostname: hostname,
          fingerprint: fingerprint,
          localAddress: localAddress,
          remoteAddress: remoteAddress
        } = a ?? (await Hgt(url));
      if (U !== N.current) return;
      let previouslyPinned = await zke(hostname, credentials);
      if (U !== N.current) return;
      if (previouslyPinned === fingerprint) await Ae(url, endpoints, fingerprint);else I({
        state: "trust_prompt",
        url: url,
        hostname: hostname,
        fingerprint: fingerprint,
        previouslyPinned: previouslyPinned,
        endpoints: endpoints,
        ...(X && {
          route: `from ${localAddress} to ${remoteAddress}, both inside declared ${X}`
        })
      });
    } catch (error) {
      if (U !== N.current) return;
      let message = to(error);
      I(message ? {
        state: "error",
        message: message,
        detail: d(error)
      } : {
        state: "error",
        message: at(error)
      });
    }
  }
  async function Ae(url_2, U, E) {
    let z = ++N.current;
    I({
      state: "connecting"
    });
    try {
      let httpsAgent = Gke(E, U.deviceAuthorizationEndpoint),
        {
          data: data
        } = await sl.post(U.deviceAuthorizationEndpoint, new URLSearchParams({
          surface: surface
        }).toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": hs()
          },
          timeout: 1e4,
          maxRedirects: 0,
          ...(httpsAgent && {
            httpsAgent: httpsAgent
          })
        });
      if (z !== N.current) return;
      let ue = no().safeParse(data);
      if (!ue.success) throw Error("gateway device authorization endpoint returned malformed response");
      let u = ue.data;
      Hs(u.verification_uri_complete ?? u.verification_uri), I({
        state: "polling",
        url: url_2,
        userCode: u.user_code,
        verificationUri: u.verification_uri
      }), await L(url_2, U, u.device_code, u.interval ?? 5, z, E);
    } catch (error) {
      if (z !== N.current) return;
      if (fLr(error) === "slow_down") {
        I({
          state: "error",
          message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.",
          detail: eo(error)
        });
        return;
      }
      I({
        state: "error",
        message: at(error)
      });
    }
  }
  async function L(V, U, device_code, z, X, a) {
    let {
        tokenEndpoint: tokenEndpoint
      } = U,
      u = Math.max(1, z);
    while (X === N.current) {
      if (await Y(u * 1000), X !== N.current) return;
      try {
        let httpsAgent_2 = Gke(a, tokenEndpoint),
          {
            data: data_2
          } = await sl.post(tokenEndpoint, new URLSearchParams({
            grant_type: grant_type,
            device_code: device_code
          }).toString(), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": hs()
            },
            timeout: 1e4,
            maxRedirects: 0,
            ...(httpsAgent_2 && {
              httpsAgent: httpsAgent_2
            })
          });
        if (X !== N.current) return;
        let we = y0o().safeParse(data_2);
        if (!we.success) throw Error("gateway token endpoint returned malformed response");
        await he(V, U, we.data, X);
        return;
      } catch (error) {
        if (X !== N.current) return;
        let le = fLr(error);
        if (le === "authorization_pending") continue;
        if (le === "slow_down") {
          u += 5;
          continue;
        }
        if (le === "expired_token") {
          I({
            state: "error",
            message: "Sign-in timed out before the browser flow completed. Try again."
          });
          return;
        }
        if (le === "access_denied") {
          I({
            state: "error",
            message: "Sign-in was denied in the browser."
          });
          return;
        }
        I({
          state: "error",
          message: at(error)
        });
        return;
      }
    }
  }
  async function he(url_3, U, E, z) {
    let X = E.email ?? "",
      a = ne(X, 16 * it),
      ue = Hd(a),
      email = a.length < X.length || ue.length > it ? `${ne(ue, it)}\u2026` : ue,
      auth = {
        url: url_3,
        jwt: E.access_token,
        expiresAt: Date.now() + E.expires_in * 1000,
        tokenEndpoint: U.tokenEndpoint,
        ...(U.revocationEndpoint && {
          revocationEndpoint: U.revocationEndpoint
        }),
        ...(E.refresh_token && {
          idpRefreshToken: E.refresh_token
        }),
        ...(email && {
          email: email
        })
      },
      {
        hostname: hostname_2,
        fingerprint: fingerprint_2
      } = await Hgt(url_3);
    if (z !== N.current) return;
    let ke = await zke(hostname_2, credentials);
    if (z !== N.current) return;
    if (ke !== fingerprint_2) {
      I({
        state: "error",
        message: message_2
      });
      return;
    }
    if (email) {
      ce.current = !1, I({
        state: "confirm_account",
        auth: auth,
        email: email,
        saving: !1
      });
      return;
    }
    await fe(auth, z);
  }
  async function fe(V, U) {
    try {
      await Wjs(V, credentials);
    } catch (error) {
      if (U !== N.current) return;
      let message_3 = d(error);
      t(`[gateway-login] secureStorage write failed: ${message_3}`, {
        level: "error"
      }), I({
        state: "error",
        message: message_3
      });
      return;
    }
    if (U !== N.current) return;
    xae({
      action: "login",
      success: !0,
      authMethod: "oauth"
    }), onDone();
  }
  let isActive = D.state === "url_input";
  switch (rt("confirm:yes", () => {
    if (children_2) ye(children_2);
  }, {
    context: "Confirmation",
    isActive: isActive
  }), rt("confirm:no", screenLocked ? () => !1 : onCancel, {
    context: "Confirmation",
    isActive: isActive
  }), xg((V, U) => U.escape, {
    isActive: D.state === "confirm_account" && D.saving
  }), D.state) {
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
          children: ["Press Enter to connect", screenLocked ? "" : " \xB7 Esc for other login methods"]
        })]
      });
    case "polling":
      return e(xt, {
        userCode: D.userCode,
        verificationUri: D.verificationUri,
        onCancel: onCancel_2
      });
    case "connecting":
      return e(Ot, {
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
            children: D.hostname
          }), "?"]
        }), D.previouslyPinned ? e(n, {
          color: "warning",
          children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation."
        }) : e(n, {
          children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway."
        }), D.route && r(n, {
          dimColor: !0,
          children: ["Connecting ", D.route]
        }), r(n, {
          dimColor: !0,
          children: ["Certificate fingerprint (SHA-256): ", D.fingerprint.slice(0, 16), "\u2026"]
        }), e(lr, {
          hideIndexes: !0,
          confirmLabel: "Yes, trust this gateway",
          cancelLabel: screenLocked ? "No, go back" : "No, cancel login",
          focus: "cancel",
          onConfirm: () => {
            let current = N.current;
            JBs(D.hostname, D.fingerprint, credentials).then(() => {
              if (current !== N.current) return;
              return Ae(D.url, D.endpoints, D.fingerprint);
            }).catch(U => {
              if (current !== N.current) return;
              I({
                state: "error",
                message: d(U)
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
            children: D.email
          })]
        }), D.saving ? r(s, {
          gap: 1,
          children: [e(Ii, {}), e(n, {
            dimColor: !0,
            children: "Finishing sign-in\u2026"
          })]
        }) : r(Q, {
          children: [e(n, {
            children: "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again."
          }), e(lr, {
            hideIndexes: !0,
            focus: "cancel",
            confirmLabel: "Yes, continue",
            cancelLabel: screenLocked ? "No, go back" : "No, cancel login",
            onConfirm: () => {
              if (ce.current) return;
              if (ce.current = !0, D.auth.expiresAt <= Date.now() && !D.auth.idpRefreshToken) {
                I({
                  state: "error",
                  message: message_4
                });
                return;
              }
              let current_2 = N.current;
              I(U => U.state === "confirm_account" ? {
                ...U,
                saving: !0
              } : U), fe(D.auth, current_2);
            },
            onCancel: () => {
              if (ce.current) return;
              ce.current = !0, t("[gateway-login] signed-in account declined; nothing saved"), onCancel_3();
            }
          })]
        })]
      });
    case "error":
      return e(Tt, {
        message: D.message,
        detail: D.detail,
        onCancel: onCancel_3
      });
  }
}
function xt(v) {
  let j = w(13),
    {
      userCode: o,
      verificationUri: M,
      onCancel: onCancel_4
    } = v,
    C;
  if (j[0] === S) C = {
    context: "Confirmation"
  }, j[0] = C;else C = j[0];
  rt("confirm:no", onCancel_4, C);
  let G, D;
  if (j[1] === S) G = e(n, {
    bold: !0,
    children: "Cloud gateway \xB7 sign in"
  }), D = e(n, {
    children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:"
  }), j[1] = G, j[2] = D;else G = j[1], D = j[2];
  let I;
  if (j[3] !== o) I = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    paddingX: 2,
    children: e(n, {
      bold: !0,
      color: "suggestion",
      children: o
    })
  }), j[3] = o, j[4] = I;else I = j[4];
  let H;
  if (j[5] === S) H = e(n, {
    dimColor: !0,
    children: "Browser didn't open? Visit:"
  }), j[5] = H;else H = j[5];
  let K;
  if (j[6] !== M) K = r(s, {
    flexDirection: "column",
    children: [H, e(n, {
      dimColor: !0,
      wrap: "wrap",
      children: M
    })]
  }), j[6] = M, j[7] = K;else K = j[7];
  let Z, N;
  if (j[8] === S) Z = r(s, {
    gap: 1,
    children: [e(Ii, {}), e(n, {
      dimColor: !0,
      children: "Waiting for sign-in to complete in your browser\u2026"
    })]
  }), N = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), j[8] = Z, j[9] = N;else Z = j[8], N = j[9];
  let ce;
  if (j[10] !== I || j[11] !== K) ce = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [G, D, I, K, Z, N]
  }), j[10] = I, j[11] = K, j[12] = ce;else ce = j[12];
  return ce;
}
function Ot(v) {
  let F = w(7),
    {
      label: o,
      onCancel: onCancel_5
    } = v,
    j;
  if (F[0] === S) j = {
    context: "Confirmation"
  }, F[0] = j;else j = F[0];
  rt("confirm:no", onCancel_5, j);
  let C;
  if (F[1] === S) C = e(Ii, {}), F[1] = C;else C = F[1];
  let G;
  if (F[2] !== o) G = r(s, {
    gap: 1,
    children: [C, e(n, {
      children: o
    })]
  }), F[2] = o, F[3] = G;else G = F[3];
  let D;
  if (F[4] === S) D = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), F[4] = D;else D = F[4];
  let I;
  if (F[5] !== G) I = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [G, D]
  }), F[5] = G, F[6] = I;else I = F[6];
  return I;
}
function Tt(v) {
  let j = w(9),
    {
      message: message_5,
      detail: M,
      onCancel: onCancel_6
    } = v,
    C;
  if (j[0] === S) C = {
    context: "Confirmation"
  }, j[0] = C;else C = j[0];
  rt("confirm:no", onCancel_6, C);
  let G;
  if (j[1] !== message_5) G = r(n, {
    color: "error",
    children: ["Error: ", message_5]
  }), j[1] = message_5, j[2] = G;else G = j[2];
  let D;
  if (j[3] !== M) D = M && e(n, {
    dimColor: !0,
    children: M
  }), j[3] = M, j[4] = D;else D = j[4];
  let I;
  if (j[5] === S) I = e(n, {
    dimColor: !0,
    children: "Press Esc to go back"
  }), j[5] = I;else I = j[5];
  let H;
  if (j[6] !== G || j[7] !== D) H = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [G, D, I]
  }), j[6] = G, j[7] = D, j[8] = H;else H = j[8];
  return H;
}
function Io(ee) {
  return ee.title;
}
function Mo(de) {
  return {
    label: r(n, {
      children: [de.title, " \xB7 ", e(n, {
        dimColor: !0,
        children: de.hint
      })]
    }),
    value: de.value
  };
}
function Go(W) {
  return W.value === "foundry";
}
var children_4 = "Paste code here if prompted > ",
  Ve = "The recommended sign-in isn't available on this machine";
function go(v) {
  let o = Math.round(v / 86400);
  if (o < 1) return "less than a day";
  if (o === 365) return "1 year";
  return `${o} ${O(o, "day")}`;
}
function MCe({
  onDone: onDone_2,
  onAuthSuccess: onAuthSuccess,
  onFreshPickerChange: onFreshPickerChange,
  onAccountOnHold: onAccountOnHold,
  startingMessage: startingMessage,
  mode = "login",
  expiresIn: expiresIn,
  forceLoginMethod: forceLoginMethod,
  urlOutdent = 0,
  allowContinueWithoutLogin = !1
}) {
  let K = bl(),
    {
      storageV5: storageV5,
      credentials: credentials_2
    } = Oe(),
    proactivityLevel = Fo(re => re.proactivityLevel),
    toolPermissionContext = Fo(re => re.toolPermissionContext),
    paddingX = (K ? TV : 0) + urlOutdent,
    ye = ut(),
    {
      forceLoginGatewayUrl: forceLoginGatewayUrl,
      gatewayInternalNetworks: gatewayInternalNetworks
    } = a_t(),
    [he] = y(sJe),
    forceLoginGatewayUrl_2 = forceLoginGatewayUrl ?? he,
    gatewayNamedBy = forceLoginGatewayUrl !== void 0 ? "administrator" : "developer",
    V = uJ(),
    gatewayScreenLocked = V === "gateway",
    E = gatewayScreenLocked ? "gateway" : forceLoginMethod ?? V,
    forcedMethodMessage = E === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : E === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null,
    X = null,
    a = C0(),
    ue = dn(),
    [oauthStatus, setOAuthStatus] = y(() => {
      if (mode === "setup-token") return {
        state: "ready_to_start"
      };
      if (E === "claudeai" || E === "console") return {
        state: "ready_to_start"
      };
      if (gatewayScreenLocked || he) return {
        state: "gateway_setup"
      };
      return {
        state: "idle"
      };
    }),
    le = A(!1);
  P(() => {
    if (oauthStatus.state !== "idle" && oauthStatus.state !== "platform_setup" && oauthStatus.state !== "console_method") le.current = !0;
    onFreshPickerChange?.(oauthStatus.state === "idle" && !le.current);
  }, [oauthStatus.state, onFreshPickerChange]);
  let [pastedCode, setPastedCode] = y(""),
    [cursorOffset, setCursorOffset] = y(0),
    [_] = y(() => new $N()),
    [loginWithClaudeAi, setLoginWithClaudeAi] = y(() => mode === "setup-token" || E === "claudeai"),
    [ie, setConsoleProfileLogin] = y(!1),
    [keyMintFallbackReason, _e] = y(null),
    Me = H0o(),
    consoleProfileLoginAllowed = xe() === "firstParty" && !Me && ye.forceLoginOrgUUID === void 0 && E !== "claudeai",
    allowedProviders = FIe(),
    firstPartyLoginAllowed = hte("firstParty") === void 0,
    Yt = ye.forceLoginMethod !== void 0 && loginWithClaudeAi !== (ye.forceLoginMethod === "claudeai"),
    orgUUID_2 = typeof ye.forceLoginOrgUUID === "string" && !Yt ? ye.forceLoginOrgUUID : void 0,
    [showPastePrompt, Qe] = y(!1),
    {
      copiedVia: et,
      copy: copy,
      reset: reset
    } = nce(oauthStatus.state === "waiting_for_login" ? oauthStatus.url : null),
    textInputColumns = Te().columns - children_4.length - 1,
    [Se] = y(() => dM() && rj() !== "off");
  P(() => {
    if (E === "claudeai") i("tengu_oauth_claudeai_forced", {});else if (E === "console") i("tengu_oauth_console_forced", {});else if (gatewayScreenLocked && !0 && mode !== "setup-token") i("tengu_oauth_gateway_forced", {});
  }, [E, gatewayScreenLocked, mode]), Dr(() => {
    if (oauthStatus.state === "about_to_retry") setOAuthStatus(oauthStatus.nextState);
  }, oauthStatus.state === "about_to_retry" ? 1000 : null, [oauthStatus]), rt("confirm:yes", () => {
    if (oauthStatus.state !== "storage_failed") i(oauthStatus.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", {
      loginWithClaudeAi: loginWithClaudeAi
    });
    onDone_2();
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "success" && mode !== "setup-token" || oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth === "fresh" || oauthStatus.state === "gateway_done"
  });
  let Be = TR(),
    We = A(!1);
  rt("confirm:yes", () => {
    if (We.current) return;
    We.current = !0, Ce(re => ({
      ...re,
      hasCompletedOnboarding: !0,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }), storageV5).then(() => {
      Be.exit();
      let proactivity = proactivityLevel !== void 0 && toolPermissionContext !== void 0 ? Ris({
        proactivityLevel: proactivityLevel,
        toolPermissionContext: toolPermissionContext
      }) : void 0;
      import("B:/~BUN/root/chunk-9b0kte3c.js").then(ee => ee.execRelaunch(proactivity ? {
        proactivity: proactivity
      } : {}));
    });
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "bedrock_done" || oauthStatus.state === "vertex_done"
  }), rt("confirm:yes", () => setOAuthStatus({
    state: "platform_setup"
  }), {
    context: "Confirmation",
    isActive: oauthStatus.state === "aws_refresh_done"
  }), rt("confirm:yes", () => {
    if (oauthStatus.state === "error" && oauthStatus.toRetry) setPastedCode(""), setOAuthStatus({
      state: "about_to_retry",
      nextState: oauthStatus.toRetry
    });else if (oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth !== "fresh") setPastedCode(""), setOAuthStatus({
      state: "about_to_retry",
      nextState: E === "claudeai" || E === "console" ? {
        state: "ready_to_start"
      } : {
        state: "idle"
      }
    });
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "error" && !!oauthStatus.toRetry || oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth !== "fresh"
  }), rt("confirm:no", () => onDone_2(), {
    context: "Confirmation",
    isActive: allowContinueWithoutLogin && (oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth !== "fresh" || oauthStatus.state === "error")
  }), rt("confirm:yes", () => setOAuthStatus({
    state: "idle"
  }), {
    context: "Confirmation",
    isActive: oauthStatus.state === "account_on_hold" && mode !== "setup-token"
  }), P(() => {
    if (/^c+$/.test(pastedCode) && oauthStatus.state === "waiting_for_login" && showPastePrompt) setPastedCode(""), copy(oauthStatus.url);
  }, [pastedCode, oauthStatus, showPastePrompt, copy]);
  async function handleSubmitCode(re, url_4) {
    if (!re.trim()) {
      setPastedCode(""), setCursorOffset(0);
      return;
    }
    try {
      let [authorizationCode, state] = re.split("#");
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
      i("tengu_oauth_manual_entry", {}), _.handleManualAuthCodeInput({
        authorizationCode: authorizationCode,
        state: state
      });
    } catch (error) {
      l(error), setOAuthStatus({
        state: "error",
        message: d(error),
        toRetry: {
          state: "waiting_for_login",
          url: url_4
        }
      });
    }
  }
  let Re = ae(async () => {
      let re = url_5 => {
        if (reset(), Qe(!1), setOAuthStatus({
          state: "waiting_for_login",
          url: url_5
        }), $G()) Qe(!0);else ue.setTimeout(() => Qe(!0), 3000);
      };
      _e(null);
      try {
        let ee = zje("firstParty");
        if (ee !== void 0) throw new Ugt(ee);
        if (i("tengu_oauth_flow_start", {
          loginWithClaudeAi: loginWithClaudeAi
        }), ie && mode !== "setup-token") {
          if (!consoleProfileLoginAllowed) throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
          try {
            await vt(_, async W => re(W), {
              orgUUID: orgUUID_2
            }), setOAuthStatus({
              state: "success"
            }), onAuthSuccess?.(), OF({
              message: "Claude Code login successful",
              notificationType: "auth_success"
            }, a, {
              storageV5: storageV5,
              credentials: credentials_2
            });
            return;
          } catch (error) {
            if (!(error instanceof Ne) || !error.fallbackCures) throw error;
            let message_6 = di(d(error));
            _e({
              cause: error.causeSummary !== null ? di(error.causeSummary) : message_6,
              message: message_6
            }), t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${message_6}`, {
              level: "warn"
            });
          }
        }
        let de = await _.startOAuthFlow(async W => re(W), {
          loginWithClaudeAi: loginWithClaudeAi,
          inferenceOnly: mode === "setup-token",
          expiresIn: mode === "setup-token" ? expiresIn ?? zne : void 0,
          orgUUID: orgUUID_2
        }).catch(W => {
          if (W instanceof XJ) throw W;
          let Le = W.message.includes("Token exchange failed"),
            Ue = MJ(W);
          throw setOAuthStatus({
            state: "error",
            message: Ue ?? (Le ? "Failed to exchange authorization code for access token. Please try again." : W.message),
            toRetry: mode === "setup-token" ? {
              state: "ready_to_start"
            } : {
              state: "idle"
            }
          }), i("tengu_oauth_token_exchange_error", {
            ..._p(W),
            ssl_error: Ue !== null
          }), W;
        });
        if (mode === "setup-token") setOAuthStatus({
          state: "success",
          token: de.accessToken,
          expiresAt: de.expiresAt ?? void 0
        }), onAuthSuccess?.();else {
          let W = await cWe(de);
          if (W.outcome === "refused") throw new x(W.rejection.message, "ConsoleOAuthFlow: org pin refused the new token");
          let Le = await pVe(de, {
              storageV5: storageV5,
              credentials: credentials_2
            }),
            Ue = await lB(credentials_2, W.outcome === "permitted" ? W.verified : void 0);
          if (!Ue.valid) throw await ZGt(Ue, Le?.storage, {
            storageV5: storageV5,
            credentials: credentials_2
          }), Error(Ue.message);
          let Ee = Le?.storage;
          if (Ee && !Ee.success) {
            if (setOAuthStatus({
              state: "storage_failed",
              backendName: Ee.backendName,
              sessionAuth: Ee.sessionAuth,
              transient: Ee.transient
            }), i("tengu_oauth_persist_failure_shown", {
              storageBackend: Azs(Ee.backendName),
              session_auth: c(Ee.sessionAuth),
              transient: Ee.transient === !0
            }), Ee.sessionAuth === "fresh") onAuthSuccess?.();
            OF({
              message: Ee.transient ? "Claude Code login needs attention: credentials may not have been saved" : "Claude Code login needs attention: credentials could not be saved",
              notificationType: "auth_storage_failure"
            }, a, {
              storageV5: storageV5,
              credentials: credentials_2
            });
          } else setOAuthStatus({
            state: "success"
          }), onAuthSuccess?.(), OF({
            message: "Claude Code login successful",
            notificationType: "auth_success"
          }, a, {
            storageV5: storageV5,
            credentials: credentials_2
          });
        }
      } catch (error) {
        if (M9n(error)) {
          setOAuthStatus({
            state: "account_on_hold",
            message: I9n(Lze(error.errorUri))
          }), i("tengu_oauth_error", {
            account_on_hold: !0
          });
          return;
        }
        let de = error instanceof XJ ? error.displayMessage : d(error),
          W = MJ(error);
        setOAuthStatus({
          state: "error",
          message: W ?? de,
          ...(WHt(error) && {
            verbatim: !0
          }),
          toRetry: {
            state: mode === "setup-token" || E === "claudeai" || E === "console" && !consoleProfileLoginAllowed ? "ready_to_start" : E === "console" ? "console_method" : "idle"
          }
        }), i("tengu_oauth_error", {
          ..._p(error),
          ssl_error: W !== null
        });
      }
    }, [_, loginWithClaudeAi, ie, consoleProfileLoginAllowed, mode, expiresIn, orgUUID_2, a, ue, onAuthSuccess, E, storageV5, credentials_2, reset]),
    je = A(!1);
  return P(() => {
    if (oauthStatus.state === "ready_to_start" && !je.current) je.current = !0, process.nextTick((re, ee) => {
      re().finally(() => {
        ee.current = !1;
      });
    }, Re, je);
  }, [oauthStatus.state, Re]), Dr(() => {
    i("tengu_oauth_success", {
      loginWithClaudeAi: loginWithClaudeAi
    }), onDone_2();
  }, mode === "setup-token" && oauthStatus.state === "success" ? 500 : null, [mode, oauthStatus, loginWithClaudeAi, onDone_2]), Dr(() => onAccountOnHold?.(), mode === "setup-token" && oauthStatus.state === "account_on_hold" ? 500 : null, [mode, oauthStatus, onAccountOnHold]), P(() => () => {
    _.cleanup();
  }, [_]), r(s, {
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
          }), e(l8, {
            via: et
          })]
        }), e(d8, {
          via: et
        })]
      }), e(s, {
        children: e(zt, {
          url: oauthStatus.url,
          assumeSupport: !0,
          children: e(n, {
            dimColor: !0,
            children: oauthStatus.url
          })
        })
      }), Se && e(s, {
        paddingX: paddingX,
        children: r(n, {
          dimColor: !0,
          children: ["Hold ", Z$e(), " while selecting to use your terminal's native copy"]
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
          children: ["Your OAuth token (valid for", " ", go(oauthStatus.expiresAt !== void 0 && Number.isFinite(oauthStatus.expiresAt) ? Math.round((oauthStatus.expiresAt - Date.now()) / 1000) : expiresIn ?? zne), "):"]
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
      children: e($t, {
        oauthStatus: oauthStatus,
        mode: mode,
        startingMessage: startingMessage,
        forcedMethodMessage: forcedMethodMessage,
        gatewayUnsupportedWarning: null,
        forceLoginGatewayUrl: forceLoginGatewayUrl_2,
        gatewayNamedBy: gatewayNamedBy,
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
        allowedProviders: allowedProviders,
        firstPartyLoginAllowed: firstPartyLoginAllowed,
        onAuthSuccess: onAuthSuccess,
        allowContinueWithoutLogin: allowContinueWithoutLogin
      })
    })]
  });
}
function yt(v) {
  let M = w(4),
    {
      onComplete: onComplete
    } = v,
    F;
  if (M[0] !== onComplete) F = () => {
    let j = pEe();
    if (!j) {
      onComplete(!1);
      return;
    }
    if (iJe() && !Ms()) {
      onComplete(!1);
      return;
    }
    let abortController = new AbortController();
    return _Lr(j, abortController.signal).then(G => {
      if (abortController.signal.aborted) {
        return;
      }
      if (G) yle(), fht();
      onComplete(G);
    }), () => abortController.abort();
  }, M[0] = onComplete, M[1] = F;else F = M[1];
  let D;
  if (M[2] === S) D = [], M[2] = D;else D = M[2];
  P(F, D);
  let I;
  if (M[3] === S) I = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(s, {
      children: [e(Ii, {}), e(n, {
        children: "Running awsAuthRefresh\u2026"
      })]
    }), e(Ktt, {})]
  }), M[3] = I;else I = M[3];
  return I;
}
var Rt = [{
  value: "bedrock",
  providers: ["bedrock"],
  title: "Amazon Bedrock",
  hint: "interactive setup"
}, {
  value: "aws_refresh",
  providers: ["anthropicAws", "bedrock", "mantle"],
  title: "Claude Platform on AWS",
  hint: "refresh credentials"
}, {
  value: "foundry",
  providers: ["foundry"],
  title: "Microsoft Foundry",
  hint: "opens docs"
}, {
  value: "vertex",
  providers: ["vertex"],
  title: "Google Vertex AI",
  hint: "interactive setup"
}];
function $t(v) {
  let a = w(182),
    {
      oauthStatus: oauthStatus_2,
      mode: mode_2,
      startingMessage: startingMessage_2,
      forcedMethodMessage: j,
      gatewayUnsupportedWarning: C,
      forceLoginGatewayUrl: G,
      gatewayNamedBy: D,
      gatewayInternalNetworks: I,
      gatewayScreenLocked: H,
      keyMintFallbackReason: keyMintFallbackReason_2,
      showPastePrompt: showPastePrompt_2,
      pastedCode: N,
      setPastedCode: ce,
      cursorOffset: cursorOffset_2,
      setCursorOffset: pe,
      textInputColumns: ye,
      handleSubmitCode: handleSubmitCode_2,
      setOAuthStatus: setOAuthStatus_2,
      setLoginWithClaudeAi: setLoginWithClaudeAi_2,
      setConsoleProfileLogin: setConsoleProfileLogin_2,
      consoleProfileLoginAllowed: consoleProfileLoginAllowed_2,
      allowedProviders: allowedProviders_2,
      firstPartyLoginAllowed: firstPartyLoginAllowed_2,
      onAuthSuccess: onAuthSuccess_2,
      allowContinueWithoutLogin: allowContinueWithoutLogin_2
    } = v,
    showCursor = ot(),
    ue;
  if (a[0] === S) ue = pEe(), a[0] = ue;else ue = a[0];
  let u = ue,
    T;
  if (a[1] !== allowContinueWithoutLogin_2 || a[2] !== allowedProviders_2 || a[3] !== consoleProfileLoginAllowed_2 || a[4] !== cursorOffset_2 || a[5] !== firstPartyLoginAllowed_2 || a[6] !== G || a[7] !== j || a[8] !== I || a[9] !== D || a[10] !== H || a[11] !== C || a[12] !== handleSubmitCode_2 || a[13] !== showCursor || a[14] !== keyMintFallbackReason_2 || a[15] !== mode_2 || a[16] !== oauthStatus_2.backendName || a[17] !== oauthStatus_2.message || a[18] !== oauthStatus_2.ok || a[19] !== oauthStatus_2.sessionAuth || a[20] !== oauthStatus_2.state || a[21] !== oauthStatus_2.toRetry || a[22] !== oauthStatus_2.token || a[23] !== oauthStatus_2.transient || a[24] !== oauthStatus_2.url || a[25] !== oauthStatus_2.verbatim || a[26] !== onAuthSuccess_2 || a[27] !== N || a[28] !== setConsoleProfileLogin_2 || a[29] !== pe || a[30] !== setLoginWithClaudeAi_2 || a[31] !== setOAuthStatus_2 || a[32] !== ce || a[33] !== showPastePrompt_2 || a[34] !== startingMessage_2 || a[35] !== ye) {
    T = yn;
    Yt: {
      let le;
      if (a[37] !== allowedProviders_2) le = we => (allowedProviders_2 === void 0 || we.providers.some(item => allowedProviders_2.includes(item))) && (we.value !== "aws_refresh" || !!u), a[37] = allowedProviders_2, a[38] = le;else le = a[38];
      let be = Rt.filter(le);
      switch (oauthStatus_2.state) {
        case "idle":
          {
            const children_3 = startingMessage_2 ? startingMessage_2 : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
            let _;
            if (a[39] !== children_3) _ = e(n, {
              bold: !0,
              children: children_3
            }), a[39] = children_3, a[40] = _;else _ = a[40];
            let R;
            if (a[41] !== C) R = C && e(n, {
              color: "warning",
              children: C
            }), a[41] = C, a[42] = R;else R = a[42];
            const J = !firstPartyLoginAllowed_2 && be.length === 0 && e(n, {
              color: "error",
              children: hte("firstParty")?.message ?? "Your organization's managed settings (allowedProviders) admit no sign-in this screen can offer; ask your administrator."
            });
            let ie;
            if (a[43] === S) ie = e(n, {
              children: "Select login method:"
            }), a[43] = ie;else ie = a[43];
            let se;
            if (a[44] !== firstPartyLoginAllowed_2) se = firstPartyLoginAllowed_2 ? [{
              label: r(n, {
                children: ["Claude account with subscription \xB7", " ", e(n, {
                  dimColor: !0,
                  children: "Pro, Max, Team, or Enterprise"
                }), !1]
              }),
              value: "claudeai"
            }, {
              label: r(n, {
                children: ["Anthropic Console account \xB7", " ", e(n, {
                  dimColor: !0,
                  children: "API usage billing"
                })]
              }),
              value: "console"
            }] : [], a[44] = firstPartyLoginAllowed_2, a[45] = se;else se = a[45];
            const me = be.length > 0 ? [{
              label: r(n, {
                children: ["3rd-party platform \xB7", " ", e(n, {
                  dimColor: !0,
                  children: be.map(Io).join(", ")
                })]
              }),
              value: "platform"
            }] : [];
            let options;
            if (a[46] !== me || a[47] !== se) options = [...se, ...me], a[46] = me, a[47] = se, a[48] = options;else options = a[48];
            let onChange;
            if (a[49] !== consoleProfileLoginAllowed_2 || a[50] !== setConsoleProfileLogin_2 || a[51] !== setLoginWithClaudeAi_2 || a[52] !== setOAuthStatus_2) onChange = De => {
              if (De === "platform") i("tengu_oauth_platform_selected", {}), setOAuthStatus_2({
                state: "platform_setup"
              });else if (De === "claudeai") i("tengu_oauth_claudeai_selected", {}), setLoginWithClaudeAi_2(!0), setConsoleProfileLogin_2(!1), setOAuthStatus_2({
                state: "ready_to_start"
              });else if (consoleProfileLoginAllowed_2) i("tengu_oauth_console_selected", {}), setOAuthStatus_2({
                state: "console_method"
              });else i("tengu_oauth_console_selected", {}), setLoginWithClaudeAi_2(!1), setConsoleProfileLogin_2(!1), setOAuthStatus_2({
                state: "ready_to_start"
              });
            }, a[49] = consoleProfileLoginAllowed_2, a[50] = setConsoleProfileLogin_2, a[51] = setLoginWithClaudeAi_2, a[52] = setOAuthStatus_2, a[53] = onChange;else onChange = a[53];
            let Fe;
            if (a[54] !== options || a[55] !== onChange) Fe = e(s, {
              children: e(Xe, {
                options: options,
                onChange: onChange
              })
            }), a[54] = options, a[55] = onChange, a[56] = Fe;else Fe = a[56];
            let Je;
            if (a[57] !== Fe || a[58] !== _ || a[59] !== R || a[60] !== J) Je = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [_, R, J, ie, Fe]
            }), a[57] = Fe, a[58] = _, a[59] = R, a[60] = J, a[61] = Je;else Je = a[61];
            T = Je;
            break Yt;
          }
        case "gateway_setup":
          {
            let onDone_3;
            if (a[62] !== onAuthSuccess_2 || a[63] !== setOAuthStatus_2) onDone_3 = () => {
              onAuthSuccess_2?.(), setOAuthStatus_2({
                state: "gateway_done"
              });
            }, a[62] = onAuthSuccess_2, a[63] = setOAuthStatus_2, a[64] = onDone_3;else onDone_3 = a[64];
            let onCancel_7;
            if (a[65] !== setOAuthStatus_2) onCancel_7 = () => setOAuthStatus_2({
              state: "idle"
            }), a[65] = setOAuthStatus_2, a[66] = onCancel_7;else onCancel_7 = a[66];
            let R;
            if (a[67] !== G || a[68] !== I || a[69] !== D || a[70] !== H || a[71] !== onDone_3 || a[72] !== onCancel_7) R = e(st, {
              initialUrl: G,
              namedBy: D,
              internalNetworks: I,
              screenLocked: H,
              onDone: onDone_3,
              onCancel: onCancel_7
            }), a[67] = G, a[68] = I, a[69] = D, a[70] = H, a[71] = onDone_3, a[72] = onCancel_7, a[73] = R;else R = a[73];
            T = R;
            break Yt;
          }
        case "gateway_done":
          {
            let h;
            if (a[74] === S) h = e(n, {
              color: "success",
              children: "Connected to Cloud gateway."
            }), a[74] = h;else h = a[74];
            let _;
            if (a[75] === S) _ = r(s, {
              flexDirection: "column",
              gap: 1,
              marginTop: 1,
              children: [h, r(n, {
                dimColor: !0,
                children: ["Press ", e(n, {
                  bold: !0,
                  children: "Enter"
                }), " to continue."]
              })]
            }), a[75] = _;else _ = a[75];
            T = _;
            break Yt;
          }
        case "console_method":
          {
            let h, _;
            if (a[76] === S) h = e(n, {
              bold: !0,
              children: "Anthropic Console account"
            }), _ = e(n, {
              children: "How do you want to sign in?"
            }), a[76] = h, a[77] = _;else h = a[76], _ = a[77];
            let R;
            if (a[78] === S) R = {
              label: r(n, {
                children: ["Sign in with your Console account", " ", e(n, {
                  dimColor: !0,
                  children: "(recommended)"
                })]
              }),
              value: "wif"
            }, a[78] = R;else R = a[78];
            let J;
            if (a[79] === S) J = e(n, {
              dimColor: !0,
              children: "(legacy)"
            }), a[79] = J;else J = a[79];
            let options_2;
            if (a[80] === S) options_2 = [R, {
              label: r(n, {
                children: ["Create an API key ", J, " \xB7", " ", e(n, {
                  dimColor: !0,
                  children: "adds a key to your Console workspace"
                })]
              }),
              value: "api-key"
            }, {
              label: "Go back",
              value: "back"
            }], a[80] = options_2;else options_2 = a[80];
            let onCancel_8;
            if (a[81] !== setOAuthStatus_2) onCancel_8 = () => setOAuthStatus_2({
              state: "idle"
            }), a[81] = setOAuthStatus_2, a[82] = onCancel_8;else onCancel_8 = a[82];
            let onChange_2;
            if (a[83] !== setConsoleProfileLogin_2 || a[84] !== setLoginWithClaudeAi_2 || a[85] !== setOAuthStatus_2) onChange_2 = Ge => {
              if (Ge === "back") {
                setOAuthStatus_2({
                  state: "idle"
                });
                return;
              }
              if (setLoginWithClaudeAi_2(!1), Ge === "wif") i("tengu_oauth_console_token_selected", {}), setConsoleProfileLogin_2(!0);else i("tengu_oauth_console_api_key_selected", {}), setConsoleProfileLogin_2(!1);
              setOAuthStatus_2({
                state: "ready_to_start"
              });
            }, a[83] = setConsoleProfileLogin_2, a[84] = setLoginWithClaudeAi_2, a[85] = setOAuthStatus_2, a[86] = onChange_2;else onChange_2 = a[86];
            let _e;
            if (a[87] !== onChange_2 || a[88] !== onCancel_8) _e = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _, e(s, {
                children: e(Xe, {
                  options: options_2,
                  onCancel: onCancel_8,
                  onChange: onChange_2
                })
              })]
            }), a[87] = onChange_2, a[88] = onCancel_8, a[89] = _e;else _e = a[89];
            T = _e;
            break Yt;
          }
        case "platform_setup":
          {
            let h;
            if (a[90] === S) h = e(n, {
              bold: !0,
              children: "Using 3rd-party platforms"
            }), a[90] = h;else h = a[90];
            let onChange_3, onCancel_9;
            if (a[91] !== setOAuthStatus_2) onChange_3 = ze => {
              Qe: switch (ze) {
                case "bedrock":
                  {
                    i("tengu_oauth_bedrock_wizard_launched", {}), setOAuthStatus_2({
                      state: "bedrock_wizard"
                    });
                    break Qe;
                  }
                case "aws_refresh":
                  {
                    i("tengu_oauth_aws_refresh_launched", {}), setOAuthStatus_2({
                      state: "aws_refresh_running"
                    });
                    break Qe;
                  }
                case "foundry":
                  {
                    i("tengu_oauth_platform_docs_opened", {
                      platform: b("foundry")
                    }), Hs("https://code.claude.com/docs/en/microsoft-foundry"), setOAuthStatus_2({
                      state: "idle"
                    });
                    break Qe;
                  }
                case "vertex":
                  {
                    i("tengu_oauth_vertex_wizard_launched", {}), setOAuthStatus_2({
                      state: "vertex_wizard"
                    });
                    break Qe;
                  }
                default:
                  {
                    setOAuthStatus_2({
                      state: "idle"
                    });
                  }
              }
            }, onCancel_9 = () => setOAuthStatus_2({
              state: "idle"
            }), a[91] = setOAuthStatus_2, a[92] = onChange_3, a[93] = onCancel_9;else onChange_3 = a[92], onCancel_9 = a[93];
            T = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, e(Xe, {
                options: [...be.map(Mo), {
                  label: "Go back",
                  value: "back"
                }],
                onChange: onChange_3,
                onCancel: onCancel_9
              }), be.some(Go) && r(n, {
                dimColor: !0,
                children: ["Foundry: ", e(zt, {
                  url: "https://code.claude.com/docs/en/microsoft-foundry",
                  children: "https://code.claude.com/docs/en/microsoft-foundry"
                })]
              })]
            });
            break Yt;
          }
        case "aws_refresh_running":
          {
            let h;
            if (a[94] !== setOAuthStatus_2) h = e(yt, {
              onComplete: ok => setOAuthStatus_2({
                state: "aws_refresh_done",
                ok: ok
              })
            }), a[94] = setOAuthStatus_2, a[95] = h;else h = a[95];
            T = h;
            break Yt;
          }
        case "aws_refresh_done":
          {
            let h;
            if (a[96] !== oauthStatus_2.ok) h = oauthStatus_2.ok ? e(n, {
              color: "success",
              children: "AWS credentials refreshed."
            }) : e(n, {
              color: "error",
              children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal."
            }), a[96] = oauthStatus_2.ok, a[97] = h;else h = a[97];
            let _;
            if (a[98] === S) _ = r(n, {
              dimColor: !0,
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to continue."]
            }), a[98] = _;else _ = a[98];
            let R;
            if (a[99] !== h) R = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _]
            }), a[99] = h, a[100] = R;else R = a[100];
            T = R;
            break Yt;
          }
        case "bedrock_wizard":
          {
            let h;
            if (a[101] !== setOAuthStatus_2) h = e(ovt, {
              onComplete: message_7 => setOAuthStatus_2({
                state: "bedrock_done",
                message: message_7
              }),
              onCancel: () => setOAuthStatus_2({
                state: "platform_setup"
              }),
              exitOnCtrlCD: !0
            }), a[101] = setOAuthStatus_2, a[102] = h;else h = a[102];
            T = h;
            break Yt;
          }
        case "bedrock_done":
        case "vertex_done":
          {
            let h;
            if (a[103] !== oauthStatus_2.message) h = e(n, {
              color: "success",
              children: oauthStatus_2.message
            }), a[103] = oauthStatus_2.message, a[104] = h;else h = a[104];
            let _;
            if (a[105] === S) _ = r(n, {
              dimColor: !0,
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to restart Claude Code."]
            }), a[105] = _;else _ = a[105];
            let R;
            if (a[106] !== h) R = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _]
            }), a[106] = h, a[107] = R;else R = a[107];
            T = R;
            break Yt;
          }
        case "vertex_wizard":
          {
            let h;
            if (a[108] !== setOAuthStatus_2) h = e(rvt, {
              onComplete: message_8 => setOAuthStatus_2({
                state: "vertex_done",
                message: message_8
              }),
              onCancel: () => setOAuthStatus_2({
                state: "platform_setup"
              }),
              exitOnCtrlCD: !0
            }), a[108] = setOAuthStatus_2, a[109] = h;else h = a[109];
            T = h;
            break Yt;
          }
        case "waiting_for_login":
          {
            let h;
            if (a[110] !== j) h = j && e(s, {
              children: e(n, {
                dimColor: !0,
                children: j
              })
            }), a[110] = j, a[111] = h;else h = a[111];
            let _;
            if (a[112] !== keyMintFallbackReason_2) _ = keyMintFallbackReason_2 && e(s, {
              children: e(n, {
                dimColor: !0,
                children: `${Ve} (${keyMintFallbackReason_2.cause}), so this sign-in will create an API key.`
              })
            }), a[112] = keyMintFallbackReason_2, a[113] = _;else _ = a[113];
            let R;
            if (a[114] !== showPastePrompt_2) R = !showPastePrompt_2 && r(s, {
              children: [e(Ii, {}), e(n, {
                children: "Opening browser to sign in\u2026"
              })]
            }), a[114] = showPastePrompt_2, a[115] = R;else R = a[115];
            let J;
            if (a[116] !== cursorOffset_2 || a[117] !== handleSubmitCode_2 || a[118] !== showCursor || a[119] !== oauthStatus_2.url || a[120] !== N || a[121] !== pe || a[122] !== ce || a[123] !== showPastePrompt_2 || a[124] !== ye) J = showPastePrompt_2 && r(s, {
              children: [e(n, {
                children: children_4
              }), e(Lr, {
                value: N,
                onChange: ce,
                onSubmit: _t => handleSubmitCode_2(_t, oauthStatus_2.url),
                cursorOffset: cursorOffset_2,
                onChangeCursorOffset: pe,
                columns: ye,
                mask: "*",
                focus: !0,
                showCursor: showCursor
              })]
            }), a[116] = cursorOffset_2, a[117] = handleSubmitCode_2, a[118] = showCursor, a[119] = oauthStatus_2.url, a[120] = N, a[121] = pe, a[122] = ce, a[123] = showPastePrompt_2, a[124] = ye, a[125] = J;else J = a[125];
            let ie;
            if (a[126] !== h || a[127] !== _ || a[128] !== R || a[129] !== J) ie = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _, R, J]
            }), a[126] = h, a[127] = _, a[128] = R, a[129] = J, a[130] = ie;else ie = a[130];
            T = ie;
            break Yt;
          }
        case "creating_api_key":
          {
            let h;
            if (a[131] === S) h = e(s, {
              flexDirection: "column",
              gap: 1,
              children: r(s, {
                children: [e(Ii, {}), e(n, {
                  children: "Creating API key for Claude Code\u2026"
                })]
              })
            }), a[131] = h;else h = a[131];
            T = h;
            break Yt;
          }
        case "about_to_retry":
          {
            let h;
            if (a[132] === S) h = e(s, {
              flexDirection: "column",
              gap: 1,
              children: e(n, {
                color: "permission",
                children: "Retrying\u2026"
              })
            }), a[132] = h;else h = a[132];
            T = h;
            break Yt;
          }
        case "success":
          {
            let children_5;
            if (a[133] !== mode_2 || a[134] !== oauthStatus_2.token) children_5 = mode_2 === "setup-token" && oauthStatus_2.token ? null : r(Q, {
              children: [wn()?.emailAddress ? r(n, {
                dimColor: !0,
                children: ["Logged in as", " ", e(n, {
                  children: wn()?.emailAddress
                })]
              }) : null, r(n, {
                color: "success",
                children: ["Login successful. Press ", e(n, {
                  bold: !0,
                  children: "Enter"
                }), " to continue\u2026"]
              })]
            }), a[133] = mode_2, a[134] = oauthStatus_2.token, a[135] = children_5;else children_5 = a[135];
            let _;
            if (a[136] !== children_5) _ = e(s, {
              flexDirection: "column",
              children: children_5
            }), a[136] = children_5, a[137] = _;else _ = a[137];
            T = _;
            break Yt;
          }
        case "storage_failed":
          {
            let h;
            if (a[138] !== oauthStatus_2.backendName) h = Ht(oauthStatus_2.backendName), a[138] = oauthStatus_2.backendName, a[139] = h;else h = a[139];
            let Se = h;
            let _;
            if (a[140] !== Se || a[141] !== oauthStatus_2.sessionAuth || a[142] !== oauthStatus_2.transient) _ = e(s, {
              flexDirection: "column",
              children: oauthStatus_2.sessionAuth === "fresh" ? r(Q, {
                children: [e(n, {
                  color: "warning",
                  children: oauthStatus_2.transient ? `Logged in for now, but Claude Code couldn't confirm your new credentials were saved to ${Se}.` : `Logged in for now, but your new credentials could not be saved to ${Se}.`
                }), e(n, {
                  color: "warning",
                  children: oauthStatus_2.transient ? "This login may expire mid-session and may not persist after you exit Claude Code." : "This login may expire mid-session and will not persist after you exit Claude Code."
                })]
              }) : oauthStatus_2.sessionAuth === "previous" ? r(Q, {
                children: [r(n, {
                  color: "error",
                  children: ["Sign-in completed in the browser, but your new credentials could not be saved to ", Se, " \u2014 a previous login's credentials are still in place and will be used instead."]
                }), e(n, {
                  dimColor: !0,
                  children: "(Your new sign-in did not replace the existing credentials.)"
                })]
              }) : r(Q, {
                children: [r(n, {
                  color: "error",
                  children: ["Sign-in completed in the browser, but your credentials could not be saved to ", Se, " \u2014 you are not logged in."]
                }), e(n, {
                  dimColor: !0,
                  children: "(No previous login on this machine is usable right now either.)"
                })]
              })
            }), a[140] = Se, a[141] = oauthStatus_2.sessionAuth, a[142] = oauthStatus_2.transient, a[143] = _;else _ = a[143];
            let R;
            if (a[144] === S) R = e(n, {
              dimColor: !0,
              children: "To avoid having to log in again each session:"
            }), a[144] = R;else R = a[144];
            let J;
            if (a[145] !== Se) J = r(n, {
              dimColor: !0,
              children: ["  ", "\u2022 fix access to ", Se, ", then run /login again"]
            }), a[145] = Se, a[146] = J;else J = a[146];
            let ie;
            if (a[147] === S) ie = r(n, {
              dimColor: !0,
              children: ["  ", "\u2022 or run claude setup-token and set CLAUDE_CODE_OAUTH_TOKEN"]
            }), a[147] = ie;else ie = a[147];
            let se;
            if (a[148] !== J) se = r(s, {
              flexDirection: "column",
              children: [R, J, ie]
            }), a[148] = J, a[149] = se;else se = a[149];
            let me;
            if (a[150] !== allowContinueWithoutLogin_2 || a[151] !== oauthStatus_2.sessionAuth) me = oauthStatus_2.sessionAuth === "fresh" ? r(n, {
              color: "permission",
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to continue\u2026"]
            }) : r(n, {
              color: "permission",
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to retry.", " ", allowContinueWithoutLogin_2 ? e(n, {
                dimColor: !0,
                children: e(q, {
                  chord: "escape",
                  action: "continue without logging in",
                  parens: !0
                })
              }) : null]
            }), a[150] = allowContinueWithoutLogin_2, a[151] = oauthStatus_2.sessionAuth, a[152] = me;else me = a[152];
            let _e;
            if (a[153] !== me || a[154] !== _ || a[155] !== se) _e = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [_, se, me]
            }), a[153] = me, a[154] = _, a[155] = se, a[156] = _e;else _e = a[156];
            T = _e;
            break Yt;
          }
        case "account_on_hold":
          {
            let h;
            if (a[157] !== oauthStatus_2.message) h = e(n, {
              color: "warning",
              children: oauthStatus_2.message
            }), a[157] = oauthStatus_2.message, a[158] = h;else h = a[158];
            let _;
            if (a[159] !== mode_2) _ = mode_2 !== "setup-token" && r(n, {
              dimColor: !0,
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to go back to login options."]
            }), a[159] = mode_2, a[160] = _;else _ = a[160];
            let R;
            if (a[161] !== h || a[162] !== _) R = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _]
            }), a[161] = h, a[162] = _, a[163] = R;else R = a[163];
            T = R;
            break Yt;
          }
        case "error":
          {
            let Be, flexDirection, gap, R;
            if (a[164] !== oauthStatus_2.message || a[165] !== oauthStatus_2.verbatim) {
              let We = oauthStatus_2.verbatim ? /\s(https:\/\/\S+)$/.exec(oauthStatus_2.message) : null;
              let He = We?.[1];
              let Re = He && Ane(He);
              let je = He && Re ? He.slice(Re.length) : "";
              let re = Re ? Vje(Re) : void 0;
              Be = s;
              flexDirection = "column";
              gap = 1;
              R = We && Re ? r(s, {
                flexDirection: "column",
                children: [e(n, {
                  color: "error",
                  children: oauthStatus_2.message.slice(0, We.index)
                }), r(n, {
                  color: "error",
                  children: [re ? e(zt, {
                    url: re,
                    assumeSupport: !0,
                    children: e(n, {
                      color: "error",
                      children: re
                    })
                  }) : Re, je]
                })]
              }) : e(n, {
                color: "error",
                children: oauthStatus_2.verbatim ? oauthStatus_2.message : `OAuth error: ${oauthStatus_2.message}`
              });
              a[164] = oauthStatus_2.message, a[165] = oauthStatus_2.verbatim, a[166] = Be, a[167] = flexDirection, a[168] = gap, a[169] = R;
            } else Be = a[166], flexDirection = a[167], gap = a[168], R = a[169];
            let J;
            if (a[170] !== keyMintFallbackReason_2) J = keyMintFallbackReason_2 && e(n, {
              dimColor: !0,
              children: `${Ve}: ${keyMintFallbackReason_2.message}`
            }), a[170] = keyMintFallbackReason_2, a[171] = J;else J = a[171];
            let ie;
            if (a[172] !== allowContinueWithoutLogin_2 || a[173] !== oauthStatus_2.toRetry) ie = (oauthStatus_2.toRetry || allowContinueWithoutLogin_2) && e(s, {
              marginTop: 1,
              children: r(n, {
                color: "permission",
                children: [oauthStatus_2.toRetry && r(Q, {
                  children: ["Press ", e(n, {
                    bold: !0,
                    children: "Enter"
                  }), " to retry.", " "]
                }), allowContinueWithoutLogin_2 ? e(n, {
                  dimColor: !0,
                  children: e(q, {
                    chord: "escape",
                    action: "continue without logging in",
                    parens: !0
                  })
                }) : null]
              })
            }), a[172] = allowContinueWithoutLogin_2, a[173] = oauthStatus_2.toRetry, a[174] = ie;else ie = a[174];
            let se;
            if (a[175] !== Be || a[176] !== flexDirection || a[177] !== gap || a[178] !== R || a[179] !== J || a[180] !== ie) se = r(Be, {
              flexDirection: flexDirection,
              gap: gap,
              children: [R, J, ie]
            }), a[175] = Be, a[176] = flexDirection, a[177] = gap, a[178] = R, a[179] = J, a[180] = ie, a[181] = se;else se = a[181];
            T = se;
            break Yt;
          }
        default:
          {
            T = null;
            break Yt;
          }
      }
    }
    a[1] = allowContinueWithoutLogin_2, a[2] = allowedProviders_2, a[3] = consoleProfileLoginAllowed_2, a[4] = cursorOffset_2, a[5] = firstPartyLoginAllowed_2, a[6] = G, a[7] = j, a[8] = I, a[9] = D, a[10] = H, a[11] = C, a[12] = handleSubmitCode_2, a[13] = showCursor, a[14] = keyMintFallbackReason_2, a[15] = mode_2, a[16] = oauthStatus_2.backendName, a[17] = oauthStatus_2.message, a[18] = oauthStatus_2.ok, a[19] = oauthStatus_2.sessionAuth, a[20] = oauthStatus_2.state, a[21] = oauthStatus_2.toRetry, a[22] = oauthStatus_2.token, a[23] = oauthStatus_2.transient, a[24] = oauthStatus_2.url, a[25] = oauthStatus_2.verbatim, a[26] = onAuthSuccess_2, a[27] = N, a[28] = setConsoleProfileLogin_2, a[29] = pe, a[30] = setLoginWithClaudeAi_2, a[31] = setOAuthStatus_2, a[32] = ce, a[33] = showPastePrompt_2, a[34] = startingMessage_2, a[35] = ye, a[36] = T;
  } else T = a[36];
  if (T !== yn) return T;
}
function Ht(v) {
  switch (v) {
    case "keychain":
      return "the macOS Keychain";
    case "keychain-with-plaintext-fallback":
      return "the macOS Keychain or the credentials file";
    case "windows-credman":
      return "Windows Credential Manager";
    case "windows-credman-with-plaintext-fallback":
      return "Windows Credential Manager or the credentials file";
    case "plaintext":
      return "the credentials file";
    default:
      return "secure storage";
  }
}
export { MCe };