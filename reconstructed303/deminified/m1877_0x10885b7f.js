// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Rce } from "B:/~BUN/root/chunk-3p36t90r.js";
import { yF, CQ, net, Br, UDe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { TSt } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { eOn } from "B:/~BUN/root/chunk-5bdzgv0s.js";
import { XQ } from "B:/~BUN/root/chunk-8a25ev8f.js";
import { qgt, Bjs, sJe, XK, R_, wn, o2, Ht, o5 } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Yg } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { bn } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { fks } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { CJ } from "B:/~BUN/root/chunk-htbmes7q.js";
import { yje } from "B:/~BUN/root/chunk-8d9x5cx1.js";
import { ian, AOo, FKn, aan } from "B:/~BUN/root/chunk-gygbhz84.js";
import { m$s } from "B:/~BUN/root/chunk-t63e78w2.js";
import { aA } from "B:/~BUN/root/chunk-429xgjya.js";
import { Doo } from "B:/~BUN/root/chunk-r5t58c6e.js";
import { Pxo } from "B:/~BUN/root/chunk-66hg7026.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Ha, Yn, g_, Bt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { oae, Hee, oCo, cCo, uCo } from "B:/~BUN/root/chunk-c44qc88s.js";
import { le, mke } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { Hko } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { lD } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { NFt, Yin } from "B:/~BUN/root/chunk-pbq7kcha.js";
import { jpe, jZ, Wpe, Bdt } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { iJr, hns, W4t, TNe, MRn } from "B:/~BUN/root/chunk-hw809fek.js";
import { bl } from "B:/~BUN/root/chunk-b900np4s.js";
import { n, TR } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Un } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { qo } from "B:/~BUN/root/chunk-327wfkv3.js";
import { xnt } from "B:/~BUN/root/chunk-exdm7pa7.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { MCe } from "B:/~BUN/root/chunk-frqasvg5.js";
import { Dvt, Twn } from "B:/~BUN/root/chunk-ynq7sbnz.js";
import { Mwt } from "B:/~BUN/root/chunk-k8m74hct.js";
import { Pu } from "B:/~BUN/root/chunk-msja8jzc.js";
import { BGt } from "B:/~BUN/root/chunk-9ex20mbk.js";
import { MXo } from "B:/~BUN/root/chunk-4d6gh5ye.js";
import { Sz, _7 } from "B:/~BUN/root/chunk-qvgd0dpp.js";
import { Mbn } from "B:/~BUN/root/chunk-qsydtrsm.js";
import { g1 } from "B:/~BUN/root/chunk-vm6z21pz.js";
import { vk, xI } from "B:/~BUN/root/chunk-xa5s55y7.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function we() {
  return sJe() !== void 0;
}
function r5s() {
  oCo(oae());
}
async function kCe(o, i, s) {
  if (o.onChangeAPIKey(), !i) return {
    bridgeDisconnected: !1,
    accountSwitched: !1,
    relaunching: !1
  };
  let u = Br(),
    c = u !== null && u !== s.previousGatewayAuth;
  if (xe() === "gateway") {
    let onConsentNeeded = s.onConsentNeeded,
      T = {
        release: null
      },
      M = onConsentNeeded ? hns(() => (T.release ??= iJr(), onConsentNeeded())) : null;
    try {
      let v;
      try {
        v = await MRn(Mwt, o.storageV5, o.credentials);
      } finally {
        M?.();
      }
      let D = Br(),
        _ = ne(D);
      if (c && !v.fetchSucceeded && v.failure?.errorKind === "gateway_cert_mismatch") return await re(o, D, o5s(_, v.failure.gatewayPinMismatch));
      if (!v.fetchSucceeded || BGt()) {
        let I = v.fetchSucceeded ? void 0 : v.failure;
        return await se(o, s5s(_, I, c), k => i5s(_, I, k, c)), P;
      }
      if (bn()) return P;
      Mbn("gateway"), aA(), Hko();
    } finally {
      if (!bn()) T.release?.();
    }
  } else TNe(Mwt, o.storageV5, o.credentials);
  net();
  let g = Yin().catch(() => {});
  g.then(() => {
    if (Pxo()) Doo({
      credentials: o.credentials,
      storageV5: o.storageV5,
      timeoutMs: 5000
    });
  }).catch(() => {}), o2(), o5(), Nt(g, NFt, "post-login policy limits refresh").catch(() => {}).then(() => MXo()).then(() => {}).catch(f => l(f));
  let {
      setAppState: setAppState
    } = s,
    h = Rce.of(o.session),
    C = () => h.credentialsPersisted(),
    previousAccount = s.previousAccount,
    E = wn(),
    b = R_(previousAccount, E),
    {
      replBridgeEnabled: replBridgeEnabled,
      replBridgeOutboundOnly: replBridgeOutboundOnly
    } = o.getAppState(),
    accountSwitched = previousAccount?.accountUuid !== void 0 && !b,
    bridgeDisconnected = accountSwitched && replBridgeEnabled && !replBridgeOutboundOnly;
  if (accountSwitched) setAppState(f => {
    if (!(f.replBridgeEnabled || f.replBridgeError !== void 0)) return f;
    return t("[bridge:repl] Account changed via /login \u2014 disconnecting Remote Control session"), {
      ...f,
      replBridgeEnabled: !1,
      replBridgeExplicit: !1,
      replBridgeOutboundOnly: !1,
      replBridgeError: void 0,
      replBridgeErrorKind: void 0,
      notifications: xnt(f.notifications, g1)
    };
  });
  if (Hee(), cCo(), m$s(E), s.setAppState(eOn), accountSwitched) if (uCo(), s.setAppState(f => ({
    ...f,
    replBridgeSessionGroupingId: void 0,
    replBridgeInitialName: void 0,
    ultrareviewOverageConfirmed: !1
  })), fks(), o.dialogStore) o.dialogStore.dismissKind(XQ.kind);else l(Error("runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch"));
  if (b && (await ian())) t("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment"), await FKn(), C();else {
    AOo();
    let f = aan({
      credentials: o.credentials
    }).then(C, C);
    if (s.awaitEnrollment) await f;
  }
  let {
      host: host
    } = o.session,
    G = o.getAppState();
  return Twn(host), qgt(), Dvt(host, le(o), setAppState, G.fastMode), r5s(), h.loginCompleted(), {
    bridgeDisconnected: bridgeDisconnected,
    accountSwitched: accountSwitched,
    relaunching: !1
  };
}
var oe = 16;
function q(o) {
  return `${o.slice(0, oe)}\u2026`;
}
function ne(o) {
  try {
    return o ? new URL(o.url).hostname : "gateway";
  } catch {
    return o?.url ?? "gateway";
  }
}
var P = {
  bridgeDisconnected: !1,
  accountSwitched: !1,
  relaunching: !0
};
async function re(o, i, gatewayLoginError) {
  for (let g = UDe(); g; g = UDe()) await g.catch(() => {});
  let u = Br();
  if (await Bjs(u && i && u.url === i.url ? u : i, o.credentials), await W4t(o.storageV5), bn()) return {
    ...P,
    gatewayLoginError: gatewayLoginError
  };
  let c = !Ha();
  if (c) await Sz(o.messages, o.storageV5);
  return await Yn(0, "other", {
    finalMessage: `${gatewayLoginError}
This session is ending so that nothing from that gateway stays half-applied. Start claude again${c ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.`
  }), {
    ...P,
    gatewayLoginError: gatewayLoginError
  };
}
function o5s(o, i) {
  let s = i?.presentedFingerprint && i.pinnedFingerprint ? `TLS certificate ${q(i.presentedFingerprint)} instead of the one you trusted (${q(i.pinnedFingerprint)})` : "a different TLS certificate from the one you trusted";
  return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${s}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}
function ae(o, i) {
  switch (o.errorKind) {
    case "timeout":
      return "the request timed out";
    case "network_error":
      return "couldn't connect to the gateway";
    case "http_401":
    case "api_key_not_sent":
      return i ? "the gateway did not accept the new credential" : "the gateway did not accept this session's credential";
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
function Z(o, i, s) {
  if (i) {
    let u = ae(i, s);
    return s ? `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})` : `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
  }
  return s ? `Signed in to Cloud gateway ${o}` : `Your organization's managed settings on Cloud gateway ${o} changed`;
}
function s5s(o, i, s, u = !Ha()) {
  let c = u ? "\u2026" : " (this conversation is not saved, so it starts fresh)\u2026",
    g = Z(o, i, s);
  return i ? `${g}. Restarting Claude Code to retry${c}` : `${g}. Restarting Claude Code to apply ${s ? "your organization's managed settings" : "them"}${c}`;
}
function i5s(o, i, s, u, c = !Ha()) {
  return `${Z(o, i, u)}. ${i ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${s}, so this session is ending instead. Your sign-in is saved: start claude again the same way${c ? " (add --continue to return to this conversation)" : ""}.`;
}
async function se(o, i, s) {
  if (bn()) return;
  let u = h => Yn(0, "other", {
    finalMessage: s(h)
  });
  if (await Sz(lD(o), o.storageV5), bn()) return;
  if (Ht()) return u("a background session cannot restart itself (sign in from a session started directly with `claude`)");
  let toolPermissionContext = le(o),
    g = jZ(toolPermissionContext, yF());
  if (g.length > 0) return u(`this session has restrictions a restart can't carry over (${g.join("; ")})`);
  let proactivity = {
    proactivityLevel: o.getProactivityLevel(),
    toolPermissionContext: toolPermissionContext
  };
  try {
    await _7({
      freshIfNoTranscript: !0,
      extraArgs: [...jpe(toolPermissionContext, mke(o)), ...Wpe(toolPermissionContext, CQ())],
      proactivity: proactivity,
      env: {
        ...CJ(),
        ...Bdt(toolPermissionContext.additionalWorkingDirectories)
      },
      preSpawn: () => process.stdout.write(`
${i}
`)
    }, o.storageV5);
  } catch (error) {
    return l(H(error)), u(`it could not restart itself (${d(error)})`);
  }
}
function Iwt(o, i, s, {
  envTokenWasSet = !1,
  envWarningOnce: envWarningOnce
} = {}) {
  if (s.gatewayLoginError !== void 0 || s.relaunching) return [s.gatewayLoginError];
  let g = i ? a5s(o, s) : void 0,
    p = c5s({
      envTokenWasSet: envTokenWasSet,
      gatewayActive: xe() === "gateway",
      willAutoQuery: g?.shouldQuery === !0
    });
  if (p === "out-of-band" && envWarningOnce && !envWarningOnce.delivered) envWarningOnce.delivered = !0, o.applyMessageOp({
    type: "append",
    messages: [Bt(j6o, "notice")]
  });
  return [u5s(i, {
    bridgeDisconnected: s.bridgeDisconnected,
    includeEnvTokenWarning: p === "inline"
  }), g];
}
function a5s(o, i) {
  if (i.accountSwitched || i.relaunching) return;
  let s = g_(o.messages);
  if (s?.isApiErrorMessage && s.error === "authentication_failed") return {
    display: "system",
    shouldQuery: !0
  };
  return;
}
var ee = "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";
function l5s() {
  return "Signed in. Review your organization's managed settings to continue.";
}
function d5s() {
  return a.CLAUDE_CODE_OAUTH_TOKEN ? `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${ee}` : void 0;
}
var j6o = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${ee}`;
function c5s(o) {
  if (!o.envTokenWasSet || o.gatewayActive) return "none";
  return o.willAutoQuery ? "out-of-band" : "inline";
}
function u5s(o, i) {
  if (!o) return "Login interrupted";
  let s = i.bridgeDisconnected ? `Login successful. ${yje}` : "Login successful";
  return i.includeEnvTokenWarning ? `${s}

${j6o}` : s;
}
async function Tei(o, i) {
  if (xe() === "firstParty" && XK()) return o(`Bare mode doesn't use the sign-in from /login. It reads ANTHROPIC_API_KEY or an apiKeyHelper from --settings: set or change one and restart, or ${TSt()} to sign in.`, {
    display: "system"
  }), null;
  let startingMessage = d5s(),
    envTokenWasSet_2 = startingMessage !== void 0,
    c = wn(),
    previousAccount_2 = c && {
      accountUuid: c.accountUuid,
      organizationUuid: c.organizationUuid
    },
    previousGatewayAuth = Br(),
    envWarningOnce_2 = {
      delivered: !1
    };
  return e(Fye, {
    startingMessage: startingMessage,
    onDone: async (C, R, setAppState_2) => {
      let b = !1,
        L = await kCe(i, C, {
          setAppState: setAppState_2,
          previousAccount: previousAccount_2,
          previousGatewayAuth: previousGatewayAuth,
          onConsentNeeded: () => (b = !0, o(l5s(), {
            display: "system"
          }), Yg())
        }),
        N = Iwt(i, C, L, {
          envTokenWasSet: envTokenWasSet_2,
          envWarningOnce: envWarningOnce_2
        });
      if (b) {
        let [m] = N;
        if (m) i.applyMessageOp({
          type: "append",
          messages: [Bt(m, "notice")]
        });
        return;
      }
      o(...N);
    }
  });
}
function Fye(o) {
  let p = w(29),
    i = Pu(),
    s = Un(),
    u = bl(),
    [c, g] = y(!1),
    h;
  if (p[0] === S) h = () => g(!0), p[0] = h;else h = p[0];
  let onAuthSuccess = h,
    R = A(!1),
    [E, b] = y(!1),
    L;
  if (p[1] !== i || p[2] !== o || p[3] !== s) L = N => {
    if (R.current) {
      return;
    }
    R.current = !0, b(!0), o.onDone(N, i, s);
  }, p[1] = i, p[2] = o, p[3] = s, p[4] = L;else L = p[4];
  let m = L,
    F;
  if (p[5] !== c || p[6] !== m) F = () => m(c), p[5] = c, p[6] = m, p[7] = F;else F = p[7];
  let onCancel = F,
    G;
  if (p[8] === S) G = {
    context: "Settings"
  }, p[8] = G;else G = p[8];
  rt("confirm:no", onCancel, G);
  let [f] = y(we),
    {
      exit: exit
    } = TR(),
    [M, onFreshPickerChange] = y(!1),
    D;
  if (p[9] !== exit || p[10] !== m || p[11] !== M) D = () => {
    if (M && !R.current) {
      m(!1);
      return;
    }
    exit();
  }, p[9] = exit, p[10] = m, p[11] = M, p[12] = D;else D = p[12];
  let _ = qo(D);
  const hideInputGuide = (c || f) && !_.pending;
  let inputGuide;
  if (p[13] !== E || p[14] !== _.keyName || p[15] !== _.pending || p[16] !== M) inputGuide = _.pending ? r(n, {
    children: ["Press ", _.keyName, " again to", " ", M && !E ? "cancel" : "exit"]
  }) : e(gt, {
    action: "confirm:no",
    context: "Settings",
    fallback: "Esc",
    description: "cancel"
  }), p[13] = E, p[14] = _.keyName, p[15] = _.pending, p[16] = M, p[17] = inputGuide;else inputGuide = p[17];
  let onDone;
  if (p[18] !== m) onDone = () => m(!0), p[18] = m, p[19] = onDone;else onDone = p[19];
  const urlOutdent = u ? xI : vk;
  let children;
  if (p[20] !== o.startingMessage || p[21] !== onDone || p[22] !== urlOutdent) children = e(MCe, {
    onDone: onDone,
    onAuthSuccess: onAuthSuccess,
    onFreshPickerChange: onFreshPickerChange,
    startingMessage: o.startingMessage,
    urlOutdent: urlOutdent
  }), p[20] = o.startingMessage, p[21] = onDone, p[22] = urlOutdent, p[23] = children;else children = p[23];
  let te;
  if (p[24] !== onCancel || p[25] !== hideInputGuide || p[26] !== inputGuide || p[27] !== children) te = e(be, {
    title: "Login",
    onCancel: onCancel,
    color: "permission",
    isCancelActive: !1,
    hideInputGuide: hideInputGuide,
    inputGuide: inputGuide,
    children: children
  }), p[24] = onCancel, p[25] = hideInputGuide, p[26] = inputGuide, p[27] = children, p[28] = te;else te = p[28];
  return te;
}
export { r5s, kCe, o5s, s5s, i5s, Iwt, a5s, l5s, d5s, j6o, c5s, u5s, Tei, Fye };