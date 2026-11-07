// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { qj } from "B:/~BUN/root/chunk-fq2sv467.js";
import { Wrr } from "B:/~BUN/root/chunk-jn1nhjzk.js";
import { L_, MN, Lae, Mwt, Xr, h4e, xn, ns } from "B:/~BUN/root/chunk-game8aqv.js";
import { F, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Vwt } from "B:/~BUN/root/chunk-eev762xg.js";
import { BD, _n } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t$t, DRe, Y3i, LRe, pV, gu, hn, Oz, Gt, ND } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ku } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { fc } from "B:/~BUN/root/chunk-begxsvab.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { eUi } from "B:/~BUN/root/chunk-yhafkw66.js";
import { X3 } from "B:/~BUN/root/chunk-amar4116.js";
import { UP, ZDe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { TQe } from "B:/~BUN/root/chunk-yrh147c7.js";
import { Lhe } from "B:/~BUN/root/chunk-ex6b1s3x.js";
import { u$n, HCs, yAr, f$n } from "B:/~BUN/root/chunk-w0nyevkg.js";
import { G1i } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { qI } from "B:/~BUN/root/chunk-m749kjym.js";
import { q5o } from "B:/~BUN/root/chunk-an0nxdkx.js";
import { Hws } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { bTs, STs } from "B:/~BUN/root/chunk-cvaa202c.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Aje, Ma, sr, jh, Bt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { M_e, Cue, sji, lji, dji } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { se, Wue } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { qgs } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { DQe, CNe } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { JEe, P9, QEe, KIt } from "B:/~BUN/root/chunk-4vcs773m.js";
import { Rer, j4o } from "B:/~BUN/root/chunk-83f94s4f.js";
import { fSn, Bne, Eer } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { Bl } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { n, oE } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { ar } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Ws } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { tEt } from "B:/~BUN/root/chunk-npkbazqf.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { $ot, bUe } from "B:/~BUN/root/chunk-9capcwwy.js";
import { $Gt, u5n } from "B:/~BUN/root/chunk-p22cr4v3.js";
import { sUe } from "B:/~BUN/root/chunk-h1gvz23d.js";
import { Nu } from "B:/~BUN/root/chunk-9834xxs4.js";
import { cmn } from "B:/~BUN/root/chunk-v61b9h5f.js";
import { vqt } from "B:/~BUN/root/chunk-3y9rfajv.js";
import { m7s } from "B:/~BUN/root/chunk-q396hwtx.js";
import { TB, g8 } from "B:/~BUN/root/chunk-gghehvvc.js";
import { fv, TP } from "B:/~BUN/root/chunk-w2rkhp43.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { vK } from "B:/~BUN/root/chunk-t6wq64cz.js";
import { ue, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function ysa() {
  sji(M_e());
}
async function oUe(o, s, c) {
  if (o.onChangeAPIKey(), !s) return {
    bridgeDisconnected: !1,
    accountSwitched: !1,
    relaunching: !1,
    stateRefreshSettled: Promise.resolve()
  };
  let u = Xr(),
    l = u !== null && u !== c.previousGatewayAuth;
  if (Te() === "gateway") {
    let onConsentNeeded = c.onConsentNeeded,
      H = {
        release: null
      },
      Z = onConsentNeeded ? j4o(() => (H.release ??= Rer(), onConsentNeeded())) : null;
    try {
      let m;
      try {
        m = await Eer(sUe, o.storageV5, o.credentials);
      } finally {
        Z?.();
      }
      let U = Xr(),
        O = we(U);
      if (l && !m.fetchSucceeded && m.failure?.errorKind === "gateway_cert_mismatch") return await ve(o, U, _sa(O, m.failure.gatewayPinMismatch));
      if (fc()) return await z(o, bTs(), STs), N;
      if (!m.fetchSucceeded || cmn()) {
        let x = m.fetchSucceeded ? void 0 : m.failure;
        return await z(o, bsa(O, x, l), h => Ssa(O, x, h, l)), N;
      }
      if (_n()) return N;
      vqt("gateway"), qI(), qgs();
    } finally {
      if (!_n()) H.release?.();
    }
  } else if (fc() && !import.meta.require("B:/~BUN/root/chunk-31qp1g7q.js").isSignedInAsWhenModeKept()) return await z(o, bTs(), STs), N;else Bne(sUe, o.storageV5, o.credentials);
  Mwt();
  let g = ns(),
    p = DRe() || !(L_(g, BD) && gu(c.previousAccount, hn())),
    policyLimitsRefreshed = ku().then(() => CNe()).catch(() => {}),
    _ = p ? ZDe(policyLimitsRefreshed) : void 0,
    {
      setAppState: setAppState
    } = c,
    previousAccount = c.previousAccount,
    C = hn(),
    sameAccount = gu(previousAccount, C),
    {
      replBridgeEnabled: replBridgeEnabled,
      replBridgeOutboundOnly: replBridgeOutboundOnly
    } = o.getAppState(),
    accountSwitched = previousAccount?.accountUuid !== void 0 && !sameAccount,
    bridgeDisconnected = accountSwitched && replBridgeEnabled && !replBridgeOutboundOnly;
  if (accountSwitched) setAppState(v => {
    if (!(v.replBridgeEnabled || v.replBridgeError !== void 0)) return v;
    return t("[bridge:repl] Account changed via /login \u2014 disconnecting Remote Control session"), {
      ...v,
      replBridgeEnabled: !1,
      replBridgeExplicit: !1,
      replBridgeOutboundOnly: !1,
      replBridgeError: void 0,
      replBridgeErrorKind: void 0,
      notifications: tEt(v.notifications, vK)
    };
  });
  if (Cue(), lji(), G1i(C), c.setAppState(Wrr), accountSwitched) if (dji(), c.setAppState(v => ({
    ...v,
    replBridgeSessionGroupingId: void 0,
    replBridgeInitialName: void 0,
    ultrareviewOverageConfirmed: !1
  })), eUi(), o.dialogStore) o.dialogStore.dismissKind(Lhe.kind);else a(Error("runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch"));
  t$t();
  let stateRefreshSettled = ye(o, {
    sameAccount: sameAccount,
    isRemoteMode: xn(),
    policyLimitsRefreshed: policyLimitsRefreshed,
    setAppState: setAppState
  });
  if (c.awaitEnrollment) await stateRefreshSettled;
  if (_ !== void 0 && P3s(o, {
    accountSwitched: accountSwitched,
    relaunching: !1
  })) await zt(_, DQe, "post-login tool mark hold").catch(() => {});
  return {
    bridgeDisconnected: bridgeDisconnected,
    accountSwitched: accountSwitched,
    relaunching: !1,
    stateRefreshSettled: stateRefreshSettled
  };
}
async function ye(o, s) {
  let c = Promise.resolve();
  try {
    await ku(), s.policyLimitsRefreshed.then(() => {
      if (Hws()) q5o({
        credentials: o.credentials,
        storageV5: o.storageV5,
        timeoutMs: 5000
      });
    }).catch(() => {}), Oz(), ND(), zt(s.policyLimitsRefreshed, DQe, "post-login policy limits refresh").catch(() => {}).then(() => m7s()).then(() => {}).catch(f => a(f));
    let u = qj.of(o.session),
      l = () => u.credentialsPersisted();
    c = (async () => {
      if (s.sameAccount && (await u$n())) {
        t("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment"), await yAr(), l();
        return;
      }
      HCs(), await f$n({
        credentials: o.credentials
      }).then(l, l);
    })().catch(f => a(F(f)));
    let {
        host: host
      } = o.session,
      p = o.getAppState();
    if (u5n(host), !s.isRemoteMode) $Gt(host, se(o), s.setAppState, p.fastMode);
    ysa(), u.loginCompleted();
  } catch (error) {
    a(F(error));
  }
  await c;
}
var Se = 16;
function oe(o) {
  return `${o.slice(0, Se)}\u2026`;
}
function we(o) {
  try {
    return o ? new URL(o.url).hostname : "gateway";
  } catch {
    return o?.url ?? "gateway";
  }
}
var N = {
  bridgeDisconnected: !1,
  accountSwitched: !1,
  relaunching: !0,
  stateRefreshSettled: Promise.resolve()
};
async function ve(o, s, gatewayLoginError) {
  for (let g = h4e(); g; g = h4e()) await g.catch(() => {});
  let u = Xr();
  if (await Y3i(u && s && u.url === s.url ? u : s, o.credentials), await fSn(o.storageV5), _n()) return {
    ...N,
    gatewayLoginError: gatewayLoginError
  };
  let l = !Ma();
  if (l) await TB(o.messages, o.storageV5);
  return await sr(0, "other", {
    finalMessage: `${gatewayLoginError}
This session is ending so that nothing from that gateway stays half-applied. Start claude again${l ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.`
  }), {
    ...N,
    gatewayLoginError: gatewayLoginError
  };
}
function _sa(o, s) {
  let c = s?.presentedFingerprint && s.pinnedFingerprint ? `TLS certificate ${oe(s.presentedFingerprint)} instead of the one you trusted (${oe(s.pinnedFingerprint)})` : "a different TLS certificate from the one you trusted";
  return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${c}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}
function _e(o, s) {
  switch (o.errorKind) {
    case "timeout":
      return "the request timed out";
    case "network_error":
      return "couldn't connect to the gateway";
    case "http_401":
    case "api_key_not_sent":
      return s ? "the gateway did not accept the new credential" : "the gateway did not accept this session's credential";
    case "http_403":
      return "the gateway refused them for this account: Claude Code may not be enabled for your organization; contact your administrator";
    case "no_auth_available":
      return "no credential was on hand for the request";
    case "profile_credential_error":
      return "the profile credential could not authenticate the request (details with --debug)";
    case "http_4xx":
    case "http_5xx":
      return o.httpStatus === void 0 ? "the gateway answered with an unexpected status" : `the gateway answered HTTP ${o.httpStatus}`;
    case "parse_error":
      return "the gateway's response was not valid managed settings";
    case "ruled_empty":
      return "no setting in the gateway's response could be applied as written";
    case "gateway_cert_mismatch":
      return "the gateway's TLS certificate did not match the one you trusted";
    case "gateway_public_address":
      return "the gateway's name resolved to a public address, so the request was not sent";
    case "gateway_pin_refused":
      return "the credentials file that keeps the gateway's TLS pin is a symlink, which is not followed";
    case "gateway_pin_unreadable":
      return "the credentials file that keeps the gateway's TLS pin could not be read (try again)";
    case "unknown_error":
      return "something unexpected went wrong (details with --debug)";
  }
}
function ge(o, s, c) {
  if (s) {
    let u = _e(s, c);
    return c ? `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})` : `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
  }
  return c ? `Signed in to Cloud gateway ${o}` : `Your organization's managed settings on Cloud gateway ${o} changed`;
}
function bsa(o, s, c, u = !Ma()) {
  let l = u ? "\u2026" : " (this conversation is not saved, so it starts fresh)\u2026",
    g = ge(o, s, c);
  return s ? `${g}. Restarting Claude Code to retry${l}` : `${g}. Restarting Claude Code to apply ${c ? "your organization's managed settings" : "them"}${l}`;
}
function Ssa(o, s, c, u, l = !Ma()) {
  return `${ge(o, s, u)}. ${s ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${c}, so this session is ending instead. Your sign-in is saved: start claude again the same way${l ? " (add --continue to return to this conversation)" : ""}.`;
}
async function z(o, s, c) {
  if (_n()) return;
  let u = f => sr(0, "other", {
    finalMessage: c(f)
  });
  if (await TB(UP(o), o.storageV5), _n()) return;
  if (Gt()) return u("a background session cannot restart itself (sign in from a session started directly with `claude`)");
  let toolPermissionContext = se(o),
    g = P9(toolPermissionContext, MN());
  if (g.length > 0) return u(`this session has restrictions a restart can't carry over (${g.join("; ")})`);
  let proactivity = {
    proactivityLevel: o.getProactivityLevel(),
    toolPermissionContext: toolPermissionContext
  };
  try {
    await g8({
      freshIfNoTranscript: !0,
      extraArgs: [...JEe(toolPermissionContext, Wue(o)), ...QEe(toolPermissionContext, Lae())],
      proactivity: proactivity,
      env: {
        ...X3(),
        ...KIt(toolPermissionContext.additionalWorkingDirectories)
      },
      preSpawn: () => process.stdout.write(`
${s}
`)
    }, o.storageV5);
  } catch (error) {
    return a(F(error)), u(`it could not restart itself (${d(error)})`);
  }
}
function Wzt(o, s, c, {
  envTokenWasSet = !1,
  envWarningOnce: envWarningOnce
} = {}) {
  if (c.gatewayLoginError !== void 0 || c.relaunching) return [c.gatewayLoginError];
  let g = s ? void 0 : Aje();
  if (g?.kind === "refused") return [g.notice, {
    display: "system"
  }];
  let p = s ? P3s(o, c) : void 0,
    f = vsa({
      envTokenWasSet: envTokenWasSet,
      gatewayActive: Te() === "gateway",
      willAutoQuery: p?.shouldQuery === !0
    });
  if (f === "out-of-band" && envWarningOnce && !envWarningOnce.delivered) envWarningOnce.delivered = !0, o.applyMessageOp({
    type: "append",
    messages: [Bt(O3s, "notice")]
  });
  return [Esa(s, {
    bridgeDisconnected: c.bridgeDisconnected,
    includeEnvTokenWarning: f === "inline"
  }), p];
}
function P3s(o, s) {
  if (s.accountSwitched || s.relaunching) return;
  let c = jh(o.messages);
  if (c?.isApiErrorMessage && c.error === "authentication_failed") return {
    display: "system",
    shouldQuery: !0
  };
  return;
}
var pe = "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";
function wsa() {
  return "Signed in. Review your organization's managed settings to continue.";
}
function ksa() {
  return i.CLAUDE_CODE_OAUTH_TOKEN ? `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${pe}` : void 0;
}
var O3s = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${pe}`;
function vsa(o) {
  if (!o.envTokenWasSet || o.gatewayActive) return "none";
  return o.willAutoQuery ? "out-of-band" : "inline";
}
function Esa(o, s) {
  if (!o) return "Login interrupted";
  let c = s.bridgeDisconnected ? `Login successful. ${TQe}` : "Login successful";
  return s.includeEnvTokenWarning ? `${c}

${O3s}` : c;
}
async function Lma(o, s) {
  if (Te() === "firstParty" && pV()) return o(`Bare mode doesn't use the sign-in from /login. It reads ANTHROPIC_API_KEY or an apiKeyHelper from --settings: set or change one and restart, or ${Vwt()} to sign in.`, {
    display: "system"
  }), null;
  let startingMessage = ksa(),
    envTokenWasSet_2 = startingMessage !== void 0,
    l = hn(),
    previousAccount_2 = l && {
      accountUuid: l.accountUuid,
      organizationUuid: l.organizationUuid
    },
    previousGatewayAuth = Xr(),
    envWarningOnce_2 = {
      delivered: !1
    };
  return e(wPe, {
    startingMessage: startingMessage,
    onDone: async (_, b, setAppState_2) => {
      let C = !1,
        L = await oUe(s, _, {
          setAppState: setAppState_2,
          previousAccount: previousAccount_2,
          previousGatewayAuth: previousGatewayAuth,
          onConsentNeeded: () => (C = !0, o(wsa(), {
            display: "system"
          }), ku())
        }),
        T = Wzt(s, _, L, {
          envTokenWasSet: envTokenWasSet_2,
          envWarningOnce: envWarningOnce_2
        });
      if (C) {
        let [E] = T;
        if (E) s.applyMessageOp({
          type: "append",
          messages: [Bt(E, "notice")]
        });
        return;
      }
      o(...T);
    },
    onHybridSignIn: void 0
  });
}
function wPe(o) {
  let p = S(38),
    s = Nu(),
    c = ar(),
    u = Bl(),
    [l, g] = y(!1),
    f;
  if (p[0] === w) f = () => g(!0), p[0] = f;else f = p[0];
  let onAuthSuccess = f,
    {
      storageV5: storageV5,
      credentials: credentials
    } = Fe(),
    {
      onOrgDocumentsReload: onOrgDocumentsReload
    } = o,
    L;
  if (p[1] !== credentials || p[2] !== onOrgDocumentsReload || p[3] !== storageV5) L = T => {
    if (onOrgDocumentsReload) onOrgDocumentsReload(T);else if (T === "previous") $ot({
      storageV5: storageV5,
      credentials: credentials
    });
  }, p[1] = credentials, p[2] = onOrgDocumentsReload, p[3] = storageV5, p[4] = L;else L = p[4];
  let onOrgDocumentsReload_2 = L,
    M = A(!1),
    B = A(null),
    [P, v] = y(!1),
    H;
  if (p[5] !== s || p[6] !== o || p[7] !== c) H = Z => {
    if (M.current) {
      return;
    }
    if (M.current = !0, v(!0), B.current !== null && o.onHybridSignIn) {
      o.onHybridSignIn(B.current);
      return;
    }
    o.onDone(Z, s, c);
  }, p[5] = s, p[6] = o, p[7] = c, p[8] = H;else H = p[8];
  let m = H,
    U;
  if (p[9] !== l || p[10] !== m) U = () => m(l), p[9] = l, p[10] = m, p[11] = U;else U = p[11];
  let onCancel = U,
    x;
  if (p[12] === w) x = {
    context: "Settings"
  }, p[12] = x;else x = p[12];
  pt("confirm:no", onCancel, x);
  let [h] = y(Aje),
    fe;
  if (p[13] !== h.kind) fe = () => h.kind === "any-method" && LRe() !== void 0, p[13] = h.kind, p[14] = fe;else fe = p[14];
  let [Ge] = y(fe),
    {
      exit: exit
    } = oE(),
    [G, onFreshPickerChange] = y(h.kind === "refused"),
    me;
  if (p[15] !== exit || p[16] !== m || p[17] !== G) me = () => {
    if (G && !M.current) {
      m(!1);
      return;
    }
    exit();
  }, p[15] = exit, p[16] = m, p[17] = G, p[18] = me;else me = p[18];
  let k = Ws(me);
  const hideInputGuide = (l || Ge) && !k.pending;
  let inputGuide;
  if (p[19] !== P || p[20] !== k.keyName || p[21] !== k.pending || p[22] !== G || p[23] !== h.kind) inputGuide = k.pending ? r(n, {
    children: ["Press ", k.keyName, " again to", " ", G && !P ? "cancel" : "exit"]
  }) : e(gt, {
    action: "confirm:no",
    context: "Settings",
    fallback: "Esc",
    description: h.kind === "refused" ? "close" : "cancel"
  }), p[19] = P, p[20] = k.keyName, p[21] = k.pending, p[22] = G, p[23] = h.kind, p[24] = inputGuide;else inputGuide = p[24];
  let children;
  if (p[25] !== m || p[26] !== onOrgDocumentsReload_2 || p[27] !== u || p[28] !== o.onHybridSignIn || p[29] !== o.startingMessage || p[30] !== h.kind || p[31] !== h.notice) children = h.kind === "refused" ? e(n, {
    children: h.notice
  }) : e(bUe, {
    onDone: () => m(!0),
    onAuthSuccess: onAuthSuccess,
    onOrgDocumentsReload: onOrgDocumentsReload_2,
    onHybridSignIn: o.onHybridSignIn && (Be => {
      B.current = Be, onAuthSuccess();
    }),
    onFreshPickerChange: onFreshPickerChange,
    startingMessage: o.startingMessage,
    forceLoginMethod: h.kind === "claudeai-only" ? "claudeai" : void 0,
    urlOutdent: u ? TP : fv
  }), p[25] = m, p[26] = onOrgDocumentsReload_2, p[27] = u, p[28] = o.onHybridSignIn, p[29] = o.startingMessage, p[30] = h.kind, p[31] = h.notice, p[32] = children;else children = p[32];
  let he;
  if (p[33] !== onCancel || p[34] !== hideInputGuide || p[35] !== inputGuide || p[36] !== children) he = e(ke, {
    title: "Login",
    onCancel: onCancel,
    color: "permission",
    isCancelActive: !1,
    hideInputGuide: hideInputGuide,
    inputGuide: inputGuide,
    children: children
  }), p[33] = onCancel, p[34] = hideInputGuide, p[35] = inputGuide, p[36] = children, p[37] = he;else he = p[37];
  return he;
}
export { ysa, oUe, _sa, bsa, Ssa, Wzt, P3s, wsa, ksa, O3s, vsa, Esa, Lma, wPe };