// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { xwe, OC } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { KHt, Q2e, Tfe, kZe, EZe, Ron, Tw, sBn, LRe, UBn, lFe, gyt, Fko, Vbe, b$t, hn, VL, YZe, aie, BOs, L8i, Us, Le } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ai } from "B:/~BUN/root/chunk-1g25msn4.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { un, yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { jpe, $Nr, Utt, eae, UNr } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { vie } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { zm } from "B:/~BUN/root/chunk-amar4116.js";
import { ZDe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { HP, SF } from "B:/~BUN/root/chunk-p2ta953m.js";
import { I9e } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { YI, CNe } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { mqt as clientId, Kai as scopes, qai, Yai, f6r, Xai, Qai } from "B:/~BUN/root/chunk-xj85wdtk.js";
import { Bne } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Bl } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { QH } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Rn, ot, s, n, sn, oE, Vr } from "B:/~BUN/root/chunk-qey16aan.js";
import { NPe, ale, lle } from "B:/~BUN/root/chunk-hzscex2k.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { pt, Mm } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Ne } from "B:/~BUN/root/chunk-qdyt0gq6.js";
import { xs } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Dvt } from "B:/~BUN/root/chunk-r9p4g17h.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { kGt } from "B:/~BUN/root/chunk-cv2qv9sx.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { Oa } from "B:/~BUN/root/chunk-rzvkfy4m.js";
import { wmn as children, kmn as children_4, vmn as children_3, Emn, Tmn as confirmLabel, Cmn as children_6, Rmn as children_7, Amn as children_5, xmn as confirmLabel_2, wGt } from "B:/~BUN/root/chunk-gwgz8y8r.js";
import { vGt } from "B:/~BUN/root/chunk-7cfvhpwb.js";
import { Uot } from "B:/~BUN/root/chunk-6x8efz0k.js";
import { LPe, jot, ZFo, eHo, Pmn, Omn, hYe, gYe, nHo, W3n, ile, SUe } from "B:/~BUN/root/chunk-qz9h7t3x.js";
import { Uj } from "B:/~BUN/root/chunk-fh0ef5mp.js";
import { o8 } from "B:/~BUN/root/chunk-w2rkhp43.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { WOe as children_8, jne } from "B:/~BUN/root/chunk-vj4qhrtm.js";
import { Gli } from "B:/~BUN/root/chunk-815nev8v.js";
import { ue, O, qo, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { aAr as children_9, lAr, pz } from "B:/~BUN/root/chunk-3yw7hnm6.js";
import { tV, Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
class Ge extends Error {
  fallbackCures;
  causeSummary;
  constructor(v, o) {
    super(v, {
      cause: o.cause
    });
    this.fallbackCures = o.fallbackCures, this.causeSummary = o.fallbackCures ? o.causeSummary : null;
  }
}
async function Vt(v, o, I = {}) {
  try {
    let M = await ho(v, o, I);
    return g("oauth_console_profile_login"), M;
  } catch (error) {
    if (error instanceof Ge && error.fallbackCures) c("oauth_console_profile_login", "refused_fell_back");else m("oauth_console_profile_login", error instanceof Ge ? "refused" : "error");
    throw error;
  }
}
async function ho(v, o, {
  loginHint: loginHint,
  loginMethod: loginMethod,
  orgUUID: orgUUID,
  onCallbackListenerUnavailable: onCallbackListenerUnavailable,
  onInstallStart: onInstallStart
}) {
  try {
    await f6r();
  } catch (T) {
    let ce = qai(T);
    if (ce === null) throw T;
    let causeSummary = Yai(T);
    throw new Ge(d(T), ce && causeSummary !== null ? {
      fallbackCures: !0,
      causeSummary: causeSummary,
      cause: T
    } : {
      fallbackCures: !1,
      cause: T
    });
  }
  let N = await v.startOAuthFlow(o, {
      loginWithClaudeAi: !1,
      oauthClient: {
        clientId: clientId,
        scopes: scopes
      },
      loginHint: loginHint,
      loginMethod: loginMethod,
      orgUUID: orgUUID,
      onCallbackListenerUnavailable: onCallbackListenerUnavailable
    }),
    i = Co(N);
  if (i instanceof Error) throw await $t(N), i;
  await wo(await yo()), onInstallStart?.();
  let {
      departingLoginMayRemain: departingLoginMayRemain,
      ...L
    } = await ZFo(N, {}),
    C;
  try {
    let tokenAccount = N.tokenAccount;
    C = await Xai({
      accessToken: N.accessToken,
      refreshToken: i.refreshToken,
      expiresAtMs: i.expiresAtMs,
      scopes: N.scopes,
      organizationUuid: tokenAccount?.organizationUuid ?? N.profile?.organization.uuid,
      organizationName: tokenAccount?.organizationName ?? N.profile?.organization.name,
      accountEmail: tokenAccount?.emailAddress ?? N.profile?.account.email,
      workspaceId: tokenAccount?.workspaceId,
      workspaceName: tokenAccount?.workspaceName
    });
  } catch (error) {
    if (!(await Qai(i.refreshToken))) await $t(N);
    throw error;
  }
  return await sBn(N.accessToken).catch(T => t(String(T), {
    level: "error"
  })), await eHo({
    ...L
  }), {
    ...C,
    ...(departingLoginMayRemain && {
      departingLoginMayRemain: departingLoginMayRemain
    })
  };
}
async function yo() {
  if (Te() !== "firstParty") return null;
  let v = Kn();
  v.invalidateCache?.();
  let o = (await v.readAsync())?.claudeAiOauth;
  return o?.refreshToken ? {
    refreshToken: o.refreshToken,
    clientId: o.clientId
  } : null;
}
async function wo(v) {
  if (v === null) return;
  await Tw(v.refreshToken, v.clientId);
  try {
    await Kn().mutate(o => ({
      ...o,
      claudeAiOauth: void 0
    }));
  } catch (error) {
    t(`Console profile login: could not clear the replaced claude.ai login record: ${d(error)}`, {
      level: "error"
    });
  }
}
function Co(v) {
  if (!v.scopes.includes(OC)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!v.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (v.expiresAt === null || !Number.isFinite(v.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return {
    refreshToken: v.refreshToken,
    expiresAtMs: v.expiresAt
  };
}
async function $t(v) {
  if (v.refreshToken) await Tw(v.refreshToken, clientId);
}
function $ot({
  showSecurityDialog: showSecurityDialog,
  storageV5: storageV5,
  credentials: credentials
}) {
  let M = Bne(showSecurityDialog, storageV5, credentials).catch(G => (a(new R(`Reloading the organization's managed settings after a sign-in threw (${YI(G)})`, "Reloading the organization's managed settings after a sign-in threw")), !1)),
    D = CNe();
  return ZDe(D), D.catch(G => a(new R(`Reloading the organization's policy limits after a sign-in threw (${YI(G)})`, "Reloading the organization's policy limits after a sign-in threw"))), M;
}
j();
function No() {
  return !1;
}
function Mo(Yt, Ue) {
  return Ue.escape;
}
function dt(v) {
  let i = S(91),
    {
      onDone: onDone,
      onCancel: onCancel,
      initialUrl: initialUrl,
      namedBy: namedBy,
      internalNetworks: internalNetworks,
      screenLocked: screenLocked
    } = v,
    {
      credentials: credentials_2
    } = Fe(),
    ie;
  if (i[0] !== credentials_2) ie = () => new wGt(credentials_2, Zi), i[0] = credentials_2, i[1] = ie;else ie = i[1];
  let [L] = y(ie),
    C = Ne(L.status),
    T = initialUrl ?? (void 0)?.url,
    ce;
  if (i[2] !== namedBy) ce = (void 0)?.caption ?? (namedBy === "developer" ? `Gateway URL from your settings file (${un("userSettings")}), not from your organization's managed settings.` : "Your organization's gateway URL (set by managed settings):"), i[2] = namedBy, i[3] = ce;else ce = i[3];
  let children_2 = ce,
    Z = qo(onDone),
    te;
  if (i[4] !== Z || i[5] !== L) te = () => {
    let De = L.status.subscribe(() => {
      if (L.status.getSnapshot().state === "done") Z();
    });
    return () => {
      De(), L.cancel();
    };
  }, i[4] = Z, i[5] = L, i[6] = te;else te = i[6];
  let Oe;
  if (i[7] !== L) Oe = [L], i[7] = L, i[8] = Oe;else Oe = i[8];
  O(te, Oe);
  let k;
  if (i[9] !== onCancel || i[10] !== screenLocked || i[11] !== L) k = function F() {
    if (screenLocked) L.restart();else L.cancel(), onCancel();
  }, i[9] = onCancel, i[10] = screenLocked, i[11] = L, i[12] = k;else k = i[12];
  let onCancel_2 = k,
    isActive = C.state === "url_input",
    be;
  if (i[13] !== T || i[14] !== internalNetworks || i[15] !== namedBy || i[16] !== L) be = () => {
    if (T) L.connect({
      url: T,
      namedBy: namedBy,
      internalNetworks: internalNetworks
    });
  }, i[13] = T, i[14] = internalNetworks, i[15] = namedBy, i[16] = L, i[17] = be;else be = i[17];
  let he;
  if (i[18] !== isActive) he = {
    context: "Confirmation",
    isActive: isActive
  }, i[18] = isActive, i[19] = he;else he = i[19];
  pt("confirm:yes", be, he);
  let _e;
  if (i[20] !== isActive) _e = {
    context: "Confirmation",
    isActive: isActive
  }, i[20] = isActive, i[21] = _e;else _e = i[21];
  pt("confirm:no", screenLocked ? No : onCancel, _e);
  const isActive_2 = C.state === "saving" || C.state === "done";
  let q;
  if (i[22] !== isActive_2) q = {
    isActive: isActive_2
  }, i[22] = isActive_2, i[23] = q;else q = i[23];
  switch (Mm(Mo, q), C.state) {
    case "url_input":
      {
        if (!T) {
          let E;
          if (i[24] === w) E = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [e(n, {
              bold: !0,
              children: "Cloud gateway"
            }), e(n, {
              color: "warning",
              children: children
            })]
          }), i[24] = E;else E = i[24];
          return E;
        }
        let E;
        if (i[25] === w) E = e(n, {
          bold: !0,
          children: "Cloud gateway"
        }), i[25] = E;else E = i[25];
        let W;
        if (i[26] !== children_2) W = e(n, {
          children: children_2
        }), i[26] = children_2, i[27] = W;else W = i[27];
        let H;
        if (i[28] !== T) H = e(s, {
          borderDimColor: !0,
          borderStyle: "round",
          paddingLeft: 1,
          children: e(n, {
            children: T
          })
        }), i[28] = T, i[29] = H;else H = i[29];
        const u = screenLocked ? "" : " \xB7 Esc for other login methods";
        let p;
        if (i[30] !== u) p = r(n, {
          dimColor: !0,
          children: ["Press Enter to connect", u]
        }), i[30] = u, i[31] = p;else p = i[31];
        let z;
        if (i[32] !== W || i[33] !== H || i[34] !== p) z = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [E, W, H, p]
        }), i[32] = W, i[33] = H, i[34] = p, i[35] = z;else z = i[35];
        return z;
      }
    case "polling":
      {
        const userCode = C.userCode;
        const verificationUri = C.verificationUri;
        let H;
        if (i[36] !== C.url) H = new URL(C.url), i[36] = C.url, i[37] = H;else H = i[37];
        let u;
        if (i[38] !== onCancel_2 || i[39] !== C.loginNotice || i[40] !== C.userCode || i[41] !== C.verificationUri || i[42] !== H.hostname) u = e(Rt, {
          userCode: userCode,
          verificationUri: verificationUri,
          hostname: H.hostname,
          loginNotice: C.loginNotice,
          onCancel: onCancel_2
        }), i[38] = onCancel_2, i[39] = C.loginNotice, i[40] = C.userCode, i[41] = C.verificationUri, i[42] = H.hostname, i[43] = u;else u = i[43];
        return u;
      }
    case "connecting":
      {
        let E;
        if (i[44] !== onCancel_2) E = e(Dt, {
          label: "Connecting to gateway\u2026",
          onCancel: onCancel_2
        }), i[44] = onCancel_2, i[45] = E;else E = i[45];
        return E;
      }
    case "trust_prompt":
      {
        let E;
        if (i[46] !== C.hostname) E = r(n, {
          bold: !0,
          children: ["Trust gateway ", e(n, {
            color: "suggestion",
            children: C.hostname
          }), "?"]
        }), i[46] = C.hostname, i[47] = E;else E = i[47];
        let W;
        if (i[48] !== C.previouslyPinned) W = C.previouslyPinned ? e(n, {
          color: "warning",
          children: children_3
        }) : e(n, {
          children: children_4
        }), i[48] = C.previouslyPinned, i[49] = W;else W = i[49];
        let H;
        if (i[50] !== C.route) H = C.route && r(n, {
          dimColor: !0,
          children: ["Connecting ", C.route]
        }), i[50] = C.route, i[51] = H;else H = i[51];
        let u;
        if (i[52] !== C.fingerprint) u = C.fingerprint.slice(0, 16), i[52] = C.fingerprint, i[53] = u;else u = i[53];
        let p;
        if (i[54] !== u) p = r(n, {
          dimColor: !0,
          children: [Emn, " ", u, "\u2026"]
        }), i[54] = u, i[55] = p;else p = i[55];
        const cancelLabel = screenLocked ? "No, go back" : "No, cancel login";
        let onConfirm;
        if (i[56] !== L) onConfirm = () => L.trust(), i[56] = L, i[57] = onConfirm;else onConfirm = i[57];
        let Se;
        if (i[58] !== onCancel_2 || i[59] !== cancelLabel || i[60] !== onConfirm) Se = e(Jn, {
          hideIndexes: !0,
          confirmLabel: confirmLabel,
          cancelLabel: cancelLabel,
          focus: "cancel",
          onConfirm: onConfirm,
          onCancel: onCancel_2
        }), i[58] = onCancel_2, i[59] = cancelLabel, i[60] = onConfirm, i[61] = Se;else Se = i[61];
        let Ae;
        if (i[62] !== E || i[63] !== W || i[64] !== H || i[65] !== p || i[66] !== Se) Ae = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [E, W, H, p, Se]
        }), i[62] = E, i[63] = W, i[64] = H, i[65] = p, i[66] = Se, i[67] = Ae;else Ae = i[67];
        return Ae;
      }
    case "confirm_account":
      {
        let E;
        if (i[68] !== C.email) E = r(n, {
          bold: !0,
          children: ["Signed in to Cloud gateway as", " ", e(n, {
            color: "suggestion",
            children: C.email
          })]
        }), i[68] = C.email, i[69] = E;else E = i[69];
        let W;
        if (i[70] === w) W = e(n, {
          children: children_5
        }), i[70] = W;else W = i[70];
        const cancelLabel_2 = screenLocked ? "No, go back" : "No, cancel login";
        let onConfirm_2;
        if (i[71] !== L) onConfirm_2 = () => L.confirmAccount(), i[71] = L, i[72] = onConfirm_2;else onConfirm_2 = i[72];
        let onCancel_3;
        if (i[73] !== onCancel_2) onCancel_3 = () => {
          t("[gateway-login] signed-in account declined; nothing saved"), onCancel_2();
        }, i[73] = onCancel_2, i[74] = onCancel_3;else onCancel_3 = i[74];
        let z;
        if (i[75] !== cancelLabel_2 || i[76] !== onConfirm_2 || i[77] !== onCancel_3) z = e(Jn, {
          hideIndexes: !0,
          focus: "cancel",
          confirmLabel: confirmLabel_2,
          cancelLabel: cancelLabel_2,
          onConfirm: onConfirm_2,
          onCancel: onCancel_3
        }), i[75] = cancelLabel_2, i[76] = onConfirm_2, i[77] = onCancel_3, i[78] = z;else z = i[78];
        let B;
        if (i[79] !== E || i[80] !== z) B = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [E, W, z]
        }), i[79] = E, i[80] = z, i[81] = B;else B = i[81];
        return B;
      }
    case "saving":
    case "done":
      {
        let E;
        if (i[82] !== C.email) E = C.email && r(n, {
          bold: !0,
          children: ["Signed in to Cloud gateway as", " ", e(n, {
            color: "suggestion",
            children: C.email
          })]
        }), i[82] = C.email, i[83] = E;else E = i[83];
        let W;
        if (i[84] === w) W = r(s, {
          gap: 1,
          children: [e(Oa, {}), e(n, {
            dimColor: !0,
            children: "Finishing sign-in\u2026"
          })]
        }), i[84] = W;else W = i[84];
        let H;
        if (i[85] !== E) H = r(s, {
          flexDirection: "column",
          gap: 1,
          children: [E, W]
        }), i[85] = E, i[86] = H;else H = i[86];
        return H;
      }
    case "cancelled":
      {
        return null;
      }
    case "error":
      {
        let E;
        if (i[87] !== onCancel_2 || i[88] !== C.detail || i[89] !== C.message) E = e(Ut, {
          message: C.message,
          detail: C.detail,
          onCancel: onCancel_2
        }), i[87] = onCancel_2, i[88] = C.detail, i[89] = C.message, i[90] = E;else E = i[90];
        return E;
      }
  }
}
function Rt(v) {
  let U = S(17),
    {
      userCode: o,
      verificationUri: I,
      hostname: hostname,
      loginNotice: D,
      onCancel: onCancel_4
    } = v,
    N;
  if (U[0] === w) N = {
    context: "Confirmation"
  }, U[0] = N;else N = U[0];
  pt("confirm:no", onCancel_4, N);
  let i, ie;
  if (U[1] === w) i = e(n, {
    bold: !0,
    children: "Cloud gateway \xB7 sign in"
  }), ie = e(n, {
    children: children_6
  }), U[1] = i, U[2] = ie;else i = U[1], ie = U[2];
  let L;
  if (U[3] !== o) L = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    paddingX: 2,
    children: e(n, {
      bold: !0,
      color: "suggestion",
      children: o
    })
  }), U[3] = o, U[4] = L;else L = U[4];
  let C;
  if (U[5] === w) C = e(n, {
    dimColor: !0,
    children: children_7
  }), U[5] = C;else C = U[5];
  let T;
  if (U[6] !== I) T = r(s, {
    flexDirection: "column",
    children: [C, e(n, {
      dimColor: !0,
      wrap: "wrap",
      children: I
    })]
  }), U[6] = I, U[7] = T;else T = U[7];
  let ce;
  if (U[8] !== hostname || U[9] !== D) ce = D && r(s, {
    flexDirection: "column",
    children: [r(n, {
      dimColor: !0,
      children: ["Notice from ", hostname, ":"]
    }), e(n, {
      children: D
    })]
  }), U[8] = hostname, U[9] = D, U[10] = ce;else ce = U[10];
  let ge, Z;
  if (U[11] === w) ge = r(s, {
    gap: 1,
    children: [e(Oa, {}), e(n, {
      dimColor: !0,
      children: "Waiting for sign-in to complete in your browser\u2026"
    })]
  }), Z = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), U[11] = ge, U[12] = Z;else ge = U[11], Z = U[12];
  let te;
  if (U[13] !== L || U[14] !== T || U[15] !== ce) te = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [i, ie, L, T, ce, ge, Z]
  }), U[13] = L, U[14] = T, U[15] = ce, U[16] = te;else te = U[16];
  return te;
}
function Dt(v) {
  let M = S(7),
    {
      label: o,
      onCancel: onCancel_5
    } = v,
    D;
  if (M[0] === w) D = {
    context: "Confirmation"
  }, M[0] = D;else D = M[0];
  pt("confirm:no", onCancel_5, D);
  let G;
  if (M[1] === w) G = e(Oa, {}), M[1] = G;else G = M[1];
  let U;
  if (M[2] !== o) U = r(s, {
    gap: 1,
    children: [G, e(n, {
      children: o
    })]
  }), M[2] = o, M[3] = U;else U = M[3];
  let N;
  if (M[4] === w) N = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), M[4] = N;else N = M[4];
  let i;
  if (M[5] !== U) i = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [U, N]
  }), M[5] = U, M[6] = i;else i = M[6];
  return i;
}
function Ut(v) {
  let D = S(9),
    {
      message: message,
      detail: I,
      onCancel: onCancel_6
    } = v,
    G;
  if (D[0] === w) G = {
    context: "Confirmation"
  }, D[0] = G;else G = D[0];
  pt("confirm:no", onCancel_6, G);
  let U;
  if (D[1] !== message) U = r(n, {
    color: "error",
    children: ["Error: ", message]
  }), D[1] = message, D[2] = U;else U = D[2];
  let N;
  if (D[3] !== I) N = I && e(n, {
    dimColor: !0,
    children: I
  }), D[3] = I, D[4] = N;else N = D[4];
  let i;
  if (D[5] === w) i = e(n, {
    dimColor: !0,
    children: "Press Esc to go back"
  }), D[5] = i;else i = D[5];
  let ie;
  if (D[6] !== U || D[7] !== N) ie = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [U, N, i]
  }), D[6] = U, D[7] = N, D[8] = ie;else ie = D[8];
  return ie;
}
j();
function ft() {
  let I = S(6),
    {
      storageV5: storageV5_2
    } = Fe(),
    [o] = y(jne),
    M,
    D;
  if (I[0] !== o || I[1] !== storageV5_2) M = () => {
    if (o !== void 0) Uot(o, "login_screen", storageV5_2);
  }, D = [o, storageV5_2], I[0] = o, I[1] = storageV5_2, I[2] = M, I[3] = D;else M = I[2], D = I[3];
  O(M, D);
  let G;
  if (I[4] !== o) G = o === void 0 ? null : e(n, {
    children: children_8
  }), I[4] = o, I[5] = G;else G = I[5];
  return G;
}
function yn(Pt) {
  return Pt.title;
}
function wn(ze) {
  return {
    label: r(n, {
      children: [ze.title, " \xB7 ", e(n, {
        dimColor: !0,
        children: ze.hint
      })]
    }),
    value: ze.value
  };
}
function Cn(Lt) {
  return Lt.value === "foundry";
}
var Fo = "Paste code here if prompted > ",
  mt = "The recommended sign-in isn't available on this machine";
function Ho(v) {
  let o = Math.round(v / 86400);
  if (o < 1) return "less than a day";
  if (o === 365) return "1 year";
  return `${o} ${P(o, "day")}`;
}
function bUe({
  onDone: onDone_2,
  onAuthSuccess: onAuthSuccess,
  onOrgDocumentsReload: onOrgDocumentsReload,
  onHybridSignIn: onHybridSignIn,
  onFreshPickerChange: onFreshPickerChange,
  onAccountOnHold: onAccountOnHold,
  onOrgConfigRefused: onOrgConfigRefused,
  startingMessage: startingMessage,
  mode = "login",
  expiresIn: expiresIn,
  forceLoginMethod: forceLoginMethod,
  urlOutdent = 0,
  allowContinueWithoutLogin = !1,
  orgConfigGateFollows: ce = !1
}) {
  let ge = Bl(),
    {
      storageV5: storageV5_3,
      credentials: credentials_3
    } = Fe(),
    proactivityLevel = xs(Q => Q.proactivityLevel),
    toolPermissionContext = xs(Q => Q.toolPermissionContext),
    paddingX = (ge ? o8 : 0) + urlOutdent,
    F = yt(),
    [ae] = y(LRe),
    be = UBn(ae),
    he = be?.url === void 0 ? void 0 : be,
    _e = aie(),
    gatewayScreenLocked = _e === "gateway",
    q = gatewayScreenLocked ? "gateway" : forceLoginMethod ?? _e,
    forcedMethodMessage = q === "claudeai" ? "Login method pre-selected: Claude subscription (claude.ai account)" : q === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null,
    W = null,
    H = QH(),
    u = Rn(),
    [oauthStatus, setOAuthStatus] = y(() => {
      if (mode === "setup-token") return {
        state: "ready_to_start"
      };
      if (q === "claudeai" || q === "console") return {
        state: "ready_to_start"
      };
      if (be) return {
        state: "gateway_setup"
      };
      return {
        state: "idle"
      };
    }),
    B = A(!1);
  O(() => {
    if (oauthStatus.state !== "idle" && oauthStatus.state !== "platform_setup" && oauthStatus.state !== "console_method") B.current = !0;
    onFreshPickerChange?.(oauthStatus.state === "idle" && !B.current);
  }, [oauthStatus.state, onFreshPickerChange]);
  let [pastedCode, setPastedCode] = y(""),
    [cursorOffset, setCursorOffset] = y(0),
    [Pe] = y(() => new pz()),
    [loginWithClaudeAi, setLoginWithClaudeAi] = y(() => mode === "setup-token" || q === "claudeai"),
    [x, setConsoleProfileLogin] = y(!1),
    [keyMintFallbackReason, se] = y(null),
    pe = BOs(),
    consoleProfileLoginAllowed = Te() === "firstParty" && !pe && F.forceLoginOrgUUID === void 0 && q !== "claudeai",
    allowedProviders = Q2e(),
    firstPartyLoginAllowed = Tfe("firstParty") === void 0,
    [hybridSignInOnly] = y(() => !1),
    [Ve, setHybridRowPicked] = y(!1),
    mo = F.forceLoginMethod !== void 0 && loginWithClaudeAi !== (F.forceLoginMethod === "claudeai"),
    orgUUID_2 = typeof F.forceLoginOrgUUID === "string" && !mo ? F.forceLoginOrgUUID : void 0,
    [showPastePrompt, kt] = y(!1),
    [rt, vt] = y(!1),
    {
      copiedVia: Ot,
      copy: copy,
      reset: reset
    } = NPe(oauthStatus.state === "waiting_for_login" ? oauthStatus.url : null),
    pasteCodePrompt = rt ? lAr : Fo,
    textInputColumns = Re().columns - pasteCodePrompt.length - 1,
    [Ke] = y(() => SF() && HP() !== "off");
  O(() => {
    if (q === "claudeai") l("tengu_oauth_claudeai_forced", {});else if (q === "console") l("tengu_oauth_console_forced", {});else if (gatewayScreenLocked && !0 && mode !== "setup-token") l("tengu_oauth_gateway_forced", {});
  }, [q, gatewayScreenLocked, mode]), Vr(() => {
    if (oauthStatus.state === "about_to_retry") setOAuthStatus(oauthStatus.nextState);
  }, oauthStatus.state === "about_to_retry" ? 1000 : null, [oauthStatus]), pt("confirm:yes", () => {
    if (oauthStatus.state !== "storage_failed" && !(oauthStatus.state === "success" && oauthStatus.hybrid)) l(oauthStatus.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", {
      loginWithClaudeAi: loginWithClaudeAi
    });
    onDone_2();
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "success" && mode !== "setup-token" || oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth === "fresh" || oauthStatus.state === "gateway_done"
  });
  let He = oE(),
    At = A(!1);
  pt("confirm:yes", () => {
    if (At.current) return;
    At.current = !0, Le(Q => ({
      ...Q,
      hasCompletedOnboarding: !0,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }), storageV5_3).then(() => {
      He.exit();
      let proactivity = proactivityLevel !== void 0 && toolPermissionContext !== void 0 ? Gli({
        proactivityLevel: proactivityLevel,
        toolPermissionContext: toolPermissionContext
      }) : void 0;
      import("B:/~BUN/root/chunk-6rhm3kp2.js").then(xe => xe.execRelaunch(proactivity ? {
        proactivity: proactivity
      } : {}));
    });
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "bedrock_done" || oauthStatus.state === "vertex_done"
  }), pt("confirm:yes", () => setOAuthStatus({
    state: "platform_setup"
  }), {
    context: "Confirmation",
    isActive: oauthStatus.state === "aws_refresh_done"
  }), pt("confirm:yes", () => {
    if (oauthStatus.state === "error" && oauthStatus.toRetry) setPastedCode(""), setOAuthStatus({
      state: "about_to_retry",
      nextState: oauthStatus.toRetry
    });else if (oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth !== "fresh") setPastedCode(""), setOAuthStatus({
      state: "about_to_retry",
      nextState: q === "claudeai" || q === "console" ? {
        state: "ready_to_start"
      } : {
        state: "idle"
      }
    });
  }, {
    context: "Confirmation",
    isActive: oauthStatus.state === "error" && !!oauthStatus.toRetry || oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth !== "fresh"
  }), pt("confirm:no", () => onDone_2(), {
    context: "Confirmation",
    isActive: allowContinueWithoutLogin && (oauthStatus.state === "storage_failed" && oauthStatus.sessionAuth !== "fresh" || oauthStatus.state === "error")
  }), pt("confirm:yes", () => setOAuthStatus({
    state: "idle"
  }), {
    context: "Confirmation",
    isActive: oauthStatus.state === "account_on_hold" && mode !== "setup-token"
  }), O(() => {
    if (/^c+$/.test(pastedCode) && oauthStatus.state === "waiting_for_login" && showPastePrompt) setPastedCode(""), copy(oauthStatus.url);
  }, [pastedCode, oauthStatus, showPastePrompt, copy]);
  async function handleSubmitCode(Q, url) {
    if (!Q.trim()) {
      setPastedCode(""), setCursorOffset(0);
      return;
    }
    try {
      let [authorizationCode, state] = Q.split("#");
      if (!authorizationCode || !state) {
        setOAuthStatus({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url: url
          }
        });
        return;
      }
      l("tengu_oauth_manual_entry", {}), Pe.handleManualAuthCodeInput({
        authorizationCode: authorizationCode,
        state: state
      });
    } catch (error) {
      a(error), setOAuthStatus({
        state: "error",
        message: d(error),
        toRetry: {
          state: "waiting_for_login",
          url: url
        }
      });
    }
  }
  let Pt = A(new AbortController());
  O(() => {
    let current = Pt.current;
    return () => current.abort();
  }, []);
  let reloadClearedOrgDocuments = ue(Q => {
      if (onOrgDocumentsReload) {
        onOrgDocumentsReload(Q);
        return;
      }
      $ot({
        storageV5: storageV5_3,
        credentials: credentials_3
      });
    }, [onOrgDocumentsReload, storageV5_3, credentials_3]),
    Lt = ue(async () => {
      let Q = !1;
      vt(!1);
      let onCallbackListenerUnavailable_2 = () => {
          Q = !0, vt(!0);
        },
        Me = url_2 => {
          if (reset(), kt(!1), setOAuthStatus({
            state: "waiting_for_login",
            url: url_2
          }), Q || tV()) kt(!0);else u.setTimeout(() => kt(!0), 3000);
        };
      se(null);
      try {
        let st = kZe("firstParty");
        if (st !== void 0) throw new KHt(st);
        if (l("tengu_oauth_flow_start", {
          loginWithClaudeAi: loginWithClaudeAi
        }), x && mode !== "setup-token") {
          if (!consoleProfileLoginAllowed) throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
          let V;
          try {
            let oe = await Vt(Pe, async we => Me(we), {
              orgUUID: orgUUID_2,
              onCallbackListenerUnavailable: onCallbackListenerUnavailable_2,
              onInstallStart: () => {
                V = "previous";
              }
            });
            V = "new", setOAuthStatus({
              state: "success",
              ...(oe?.departingLoginMayRemain && {
                notice: LPe
              })
            }), onAuthSuccess?.(), Uj({
              message: "Claude Code login successful",
              notificationType: "auth_success"
            }, H, {
              storageV5: storageV5_3,
              credentials: credentials_3
            });
            return;
          } catch (error) {
            if (!(error instanceof Ge) || !error.fallbackCures) throw error;
            let message_2 = ai(d(error));
            se({
              cause: error.causeSummary !== null ? ai(error.causeSummary) : message_2,
              message: message_2
            }), t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${message_2}`, {
              level: "warn"
            });
          } finally {
            if (V !== void 0) reloadClearedOrgDocuments(V);
          }
        }
        let settingsOnlyGrant,
          Tt = [async V => Me(V), {
            loginWithClaudeAi: loginWithClaudeAi,
            inferenceOnly: mode === "setup-token",
            expiresIn: mode === "setup-token" ? expiresIn ?? xwe : void 0,
            orgUUID: orgUUID_2,
            onCallbackListenerUnavailable: onCallbackListenerUnavailable_2,
            settingsOnlyGrant: settingsOnlyGrant
          }],
          ut;
        ut ??= Pe.startOAuthFlow(...Tt);
        let fe = await ut.catch(V => {
          if (V instanceof eae) throw V;
          let oe = V.message.includes("Token exchange failed"),
            we = vie(V);
          throw setOAuthStatus({
            state: "error",
            message: we ?? (oe ? "Failed to exchange authorization code for access token. Please try again." : V.message),
            toRetry: mode === "setup-token" ? {
              state: "ready_to_start"
            } : {
              state: "idle"
            }
          }), l("tengu_oauth_token_exchange_error", {
            ...zm(V),
            ssl_error: we !== null
          }), V;
        });
        if (mode === "setup-token") {
          let V = await W3n({
            accessToken: fe.accessToken,
            minted: fe
          });
          if (!V.ok) throw new SUe(V.message, V.evaluation);
          setOAuthStatus({
            state: "success",
            token: fe.accessToken,
            expiresAt: fe.expiresAt ?? void 0
          }), onAuthSuccess?.();
        } else {
          let V = await YZe(fe);
          if (V.outcome === "refused") {
            let Ie = await ile(fe);
            throw new R(`${V.rejection.message}
${Ie}`, "ConsoleOAuthFlow: org pin refused the new token");
          }
          let oe = await gYe({
              accessToken: fe.accessToken,
              startupGateFollows: ce,
              newLogin: fe,
              untieredLogin: hYe(fe),
              organizationName: fe.profile?.organization.name ?? fe.tokenAccount?.organizationName
            }),
            we = oe.ok ? oe.warning : void 0;
          if (!oe.ok) if (ce && oe.evaluation.decision.verdict === "blocked") we = nHo(oe.evaluation);else {
            let Ie = await ile(fe);
            throw new SUe(`${oe.message} ${Ie}`, oe.evaluation);
          }
          if (Pt.current.signal.aborted) {
            await ile(fe);
            return;
          }
          let It = "previous";
          try {
            let Ie = await jot(fe, {
                storageV5: storageV5_3,
                credentials: credentials_3
              }),
              qe = await VL(credentials_3, V.outcome === "permitted" ? V.verified : void 0);
            if (!qe.valid) {
              let Qe = await Omn(qe, Ie?.storage, {
                storageV5: storageV5_3,
                credentials: credentials_3
              });
              throw Error(Qe?.restored === !1 ? `${qe.message}
${Pmn(Qe)}` : qe.message);
            }
            let Ce = Ie?.storage;
            if (Ce && !Ce.success) {
              if (setOAuthStatus({
                state: "storage_failed",
                backendName: Ce.backendName,
                sessionAuth: Ce.sessionAuth,
                transient: Ce.transient,
                departingLoginMayRemain: Ie?.departingLoginMayRemain
              }), l("tengu_oauth_persist_failure_shown", {
                storageBackend: L8i(Ce.backendName),
                session_auth: f(Ce.sessionAuth),
                transient: Ce.transient === !0
              }), Ce.sessionAuth === "fresh") It = "new", onAuthSuccess?.();
              Uj({
                message: Ce.transient ? "Claude Code login needs attention: credentials may not have been saved" : "Claude Code login needs attention: credentials could not be saved",
                notificationType: "auth_storage_failure"
              }, H, {
                storageV5: storageV5_3,
                credentials: credentials_3
              });
            } else {
              let Qe = [we, Ie?.departingLoginMayRemain ? LPe : void 0].filter(item => item !== void 0);
              setOAuthStatus({
                state: "success",
                ...(Qe.length > 0 && {
                  notice: Qe.join(`
`)
                })
              }), It = "new", onAuthSuccess?.(), Uj({
                message: "Claude Code login successful",
                notificationType: "auth_success"
              }, H, {
                storageV5: storageV5_3,
                credentials: credentials_3
              });
            }
          } finally {
            reloadClearedOrgDocuments(It);
          }
        }
      } catch (error) {
        if (UNr(error)) {
          setOAuthStatus({
            state: "account_on_hold",
            message: $Nr(Utt(error.errorUri))
          }), l("tengu_oauth_error", {
            account_on_hold: !0
          });
          return;
        }
        let st = error instanceof eae ? error.displayMessage : d(error),
          lt = vie(error),
          Tt = mode === "setup-token" && error instanceof SUe && error.evaluation.decision.verdict === "refused",
          toRetry = {
            state: mode === "setup-token" || q === "claudeai" || q === "console" && !consoleProfileLoginAllowed ? "ready_to_start" : q === "console" ? "console_method" : "idle"
          };
        setOAuthStatus({
          state: "error",
          message: lt ?? st,
          ...((Ron(error) || error instanceof SUe) && {
            verbatim: !0
          }),
          ...(Tt ? {
            endsCommand: !0
          } : {
            toRetry: toRetry
          })
        }), l("tengu_oauth_error", {
          ...zm(error),
          ssl_error: lt !== null
        });
      }
    }, [Pe, loginWithClaudeAi, Ve, x, consoleProfileLoginAllowed, mode, expiresIn, orgUUID_2, H, u, onAuthSuccess, reloadClearedOrgDocuments, onHybridSignIn, q, storageV5_3, credentials_3, reset]),
    xt = A(!1);
  return O(() => {
    if (oauthStatus.state === "ready_to_start" && !xt.current) xt.current = !0, process.nextTick((Q, xe) => {
      Q().finally(() => {
        xe.current = !1;
      });
    }, Lt, xt);
  }, [oauthStatus.state, Lt]), Vr(() => {
    l("tengu_oauth_success", {
      loginWithClaudeAi: loginWithClaudeAi
    }), onDone_2();
  }, mode === "setup-token" && oauthStatus.state === "success" ? 500 : null, [mode, oauthStatus, loginWithClaudeAi, onDone_2]), Vr(() => onAccountOnHold?.(), mode === "setup-token" && oauthStatus.state === "account_on_hold" ? 500 : null, [mode, oauthStatus, onAccountOnHold]), Vr(() => onOrgConfigRefused?.(), mode === "setup-token" && oauthStatus.state === "error" && oauthStatus.endsCommand === !0 ? 500 : null, [mode, oauthStatus, onOrgConfigRefused]), O(() => () => {
    Pe.cleanup();
  }, [Pe]), r(s, {
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
        children: [rt && e(n, {
          children: children_9
        }), r(s, {
          children: [e(n, {
            dimColor: !0,
            children: rt ? "Use the URL below to sign in " : "Browser didn't open? Use the url below to sign in "
          }), e(ale, {
            via: Ot
          })]
        }), e(lle, {
          via: Ot
        })]
      }), e(s, {
        children: e(sn, {
          url: oauthStatus.url,
          assumeSupport: !0,
          children: e(n, {
            dimColor: !0,
            children: oauthStatus.url
          })
        })
      }), Ke && e(s, {
        paddingX: paddingX,
        children: r(n, {
          dimColor: !0,
          children: ["Hold ", I9e(), " while selecting to use your terminal's native copy"]
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
          children: ["Your OAuth token (valid for", " ", Ho(oauthStatus.expiresAt !== void 0 && Number.isFinite(oauthStatus.expiresAt) ? Math.round((oauthStatus.expiresAt - Date.now()) / 1000) : expiresIn ?? xwe), "):"]
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
      children: e(fo, {
        oauthStatus: oauthStatus,
        mode: mode,
        startingMessage: startingMessage,
        forcedMethodMessage: forcedMethodMessage,
        gatewayUnsupportedWarning: null,
        forceLoginGatewayUrl: he?.url,
        gatewayNamedBy: he?.namedBy ?? "developer",
        gatewayInternalNetworks: he?.internalNetworks,
        gatewayScreenLocked: gatewayScreenLocked,
        keyMintFallbackReason: keyMintFallbackReason,
        showPastePrompt: showPastePrompt,
        pasteCodePrompt: pasteCodePrompt,
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
        hybridSignInOnly: hybridSignInOnly,
        setHybridRowPicked: setHybridRowPicked,
        onAuthSuccess: onAuthSuccess,
        reloadClearedOrgDocuments: reloadClearedOrgDocuments,
        allowContinueWithoutLogin: allowContinueWithoutLogin
      })
    })]
  });
}
function Wt(v) {
  let I = S(4),
    {
      onComplete: onComplete
    } = v,
    M;
  if (I[0] !== onComplete) M = () => {
    let D = lFe();
    if (!D) {
      onComplete(!1);
      return;
    }
    if (gyt() && !Us()) {
      onComplete(!1);
      return;
    }
    let abortController = new AbortController();
    return Fko(D, abortController.signal).then(U => {
      if (abortController.signal.aborted) {
        return;
      }
      if (U) Vbe(), b$t();
      onComplete(U);
    }), () => abortController.abort();
  }, I[0] = onComplete, I[1] = M;else M = I[1];
  let N;
  if (I[2] === w) N = [], I[2] = N;else N = I[2];
  O(M, N);
  let i;
  if (I[3] === w) i = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [r(s, {
      children: [e(Oa, {}), e(n, {
        children: "Running awsAuthRefresh\u2026"
      })]
    }), e(Dvt, {})]
  }), I[3] = i;else i = I[3];
  return i;
}
var to = [{
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
function fo(v) {
  let u = S(194),
    {
      oauthStatus: oauthStatus_2,
      mode: mode_2,
      startingMessage: startingMessage_2,
      forcedMethodMessage: D,
      gatewayUnsupportedWarning: G,
      forceLoginGatewayUrl: U,
      gatewayNamedBy: N,
      gatewayInternalNetworks: i,
      gatewayScreenLocked: ie,
      keyMintFallbackReason: keyMintFallbackReason_2,
      showPastePrompt: showPastePrompt_2,
      pasteCodePrompt: T,
      pastedCode: ce,
      setPastedCode: ge,
      cursorOffset: cursorOffset_2,
      setCursorOffset: te,
      textInputColumns: De,
      handleSubmitCode: handleSubmitCode_2,
      setOAuthStatus: setOAuthStatus_2,
      setLoginWithClaudeAi: setLoginWithClaudeAi_2,
      setConsoleProfileLogin: setConsoleProfileLogin_2,
      consoleProfileLoginAllowed: consoleProfileLoginAllowed_2,
      allowedProviders: allowedProviders_2,
      firstPartyLoginAllowed: firstPartyLoginAllowed_2,
      setHybridRowPicked: setHybridRowPicked_2,
      onAuthSuccess: onAuthSuccess_2,
      reloadClearedOrgDocuments: reloadClearedOrgDocuments_2,
      allowContinueWithoutLogin: allowContinueWithoutLogin_2
    } = v,
    showCursor = ot(),
    p;
  if (u[0] === w) p = lFe(), u[0] = p;else p = u[0];
  let z = p,
    B;
  if (u[1] !== allowContinueWithoutLogin_2 || u[2] !== allowedProviders_2 || u[3] !== consoleProfileLoginAllowed_2 || u[4] !== cursorOffset_2 || u[5] !== firstPartyLoginAllowed_2 || u[6] !== U || u[7] !== D || u[8] !== i || u[9] !== N || u[10] !== ie || u[11] !== G || u[12] !== handleSubmitCode_2 || u[13] !== showCursor || u[14] !== keyMintFallbackReason_2 || u[15] !== mode_2 || u[16] !== oauthStatus_2.backendName || u[17] !== oauthStatus_2.departingLoginMayRemain || u[18] !== oauthStatus_2.message || u[19] !== oauthStatus_2.notice || u[20] !== oauthStatus_2.ok || u[21] !== oauthStatus_2.sessionAuth || u[22] !== oauthStatus_2.state || u[23] !== oauthStatus_2.toRetry || u[24] !== oauthStatus_2.token || u[25] !== oauthStatus_2.transient || u[26] !== oauthStatus_2.url || u[27] !== oauthStatus_2.verbatim || u[28] !== onAuthSuccess_2 || u[29] !== T || u[30] !== ce || u[31] !== reloadClearedOrgDocuments_2 || u[32] !== setConsoleProfileLogin_2 || u[33] !== te || u[34] !== setHybridRowPicked_2 || u[35] !== setLoginWithClaudeAi_2 || u[36] !== setOAuthStatus_2 || u[37] !== ge || u[38] !== showPastePrompt_2 || u[39] !== startingMessage_2 || u[40] !== De) {
    B = Pn;
    mo: {
      let Se;
      if (u[42] !== allowedProviders_2) Se = Ae => (allowedProviders_2 === void 0 || Ae.providers.some(item => allowedProviders_2.includes(item))) && (Ae.value !== "aws_refresh" || !!z), u[42] = allowedProviders_2, u[43] = Se;else Se = u[43];
      let Ue = to.filter(Se);
      let label;
      switch (oauthStatus_2.state) {
        case "idle":
          {
            const children_10 = startingMessage_2 ? startingMessage_2 : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
            let _;
            if (u[44] !== children_10) _ = e(n, {
              bold: !0,
              children: children_10
            }), u[44] = children_10, u[45] = _;else _ = u[45];
            let x;
            if (u[46] !== G) x = G && e(n, {
              color: "warning",
              children: G
            }), u[46] = G, u[47] = x;else x = u[47];
            const X = !firstPartyLoginAllowed_2 && label === void 0 && Ue.length === 0 && e(n, {
              color: "error",
              children: Tfe("firstParty")?.message ?? "Your organization's managed settings (allowedProviders) admit no sign-in this screen can offer; ask your administrator."
            });
            let ee;
            if (u[48] === w) ee = e(n, {
              children: "Select login method:"
            }), u[48] = ee;else ee = u[48];
            let se;
            if (u[49] !== firstPartyLoginAllowed_2) se = firstPartyLoginAllowed_2 ? [{
              label: r(n, {
                children: ["Claude account with subscription \xB7", " ", e(n, {
                  dimColor: !0,
                  children: "Individual, Team, or Enterprise"
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
            }] : [], u[49] = firstPartyLoginAllowed_2, u[50] = se;else se = u[50];
            let pe;
            if (u[51] === w) pe = label !== void 0 ? [{
              label: label,
              value: "hybrid"
            }] : [], u[51] = pe;else pe = u[51];
            const de = Ue.length > 0 ? [{
              label: r(n, {
                children: ["3rd-party platform \xB7", " ", e(n, {
                  dimColor: !0,
                  children: Ue.map(yn).join(", ")
                })]
              }),
              value: "platform"
            }] : [];
            let options;
            if (u[52] !== de || u[53] !== se) options = [...se, ...pe, ...de], u[52] = de, u[53] = se, u[54] = options;else options = u[54];
            let onChange;
            if (u[55] !== consoleProfileLoginAllowed_2 || u[56] !== setConsoleProfileLogin_2 || u[57] !== setHybridRowPicked_2 || u[58] !== setLoginWithClaudeAi_2 || u[59] !== setOAuthStatus_2) onChange = $e => {
              if ($e === "platform") l("tengu_oauth_platform_selected", {}), setOAuthStatus_2({
                state: "platform_setup"
              });else if ($e === "claudeai" || $e === "hybrid") l("tengu_oauth_claudeai_selected", {}), setHybridRowPicked_2($e === "hybrid"), setLoginWithClaudeAi_2(!0), setConsoleProfileLogin_2(!1), setOAuthStatus_2({
                state: "ready_to_start"
              });else if (consoleProfileLoginAllowed_2) l("tengu_oauth_console_selected", {}), setOAuthStatus_2({
                state: "console_method"
              });else l("tengu_oauth_console_selected", {}), setLoginWithClaudeAi_2(!1), setConsoleProfileLogin_2(!1), setOAuthStatus_2({
                state: "ready_to_start"
              });
            }, u[55] = consoleProfileLoginAllowed_2, u[56] = setConsoleProfileLogin_2, u[57] = setHybridRowPicked_2, u[58] = setLoginWithClaudeAi_2, u[59] = setOAuthStatus_2, u[60] = onChange;else onChange = u[60];
            let Ve;
            if (u[61] !== options || u[62] !== onChange) Ve = e(s, {
              children: e(Ze, {
                options: options,
                onChange: onChange
              })
            }), u[61] = options, u[62] = onChange, u[63] = Ve;else Ve = u[63];
            let _t;
            if (u[64] !== Ve || u[65] !== _ || u[66] !== x || u[67] !== X) _t = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [_, x, X, ee, Ve]
            }), u[64] = Ve, u[65] = _, u[66] = x, u[67] = X, u[68] = _t;else _t = u[68];
            B = _t;
            break mo;
          }
        case "gateway_setup":
          {
            let onDone_3;
            if (u[69] !== onAuthSuccess_2 || u[70] !== reloadClearedOrgDocuments_2 || u[71] !== setOAuthStatus_2) onDone_3 = () => {
              onAuthSuccess_2?.(), reloadClearedOrgDocuments_2("new"), setOAuthStatus_2({
                state: "gateway_done"
              });
            }, u[69] = onAuthSuccess_2, u[70] = reloadClearedOrgDocuments_2, u[71] = setOAuthStatus_2, u[72] = onDone_3;else onDone_3 = u[72];
            let onCancel_7;
            if (u[73] !== setOAuthStatus_2) onCancel_7 = () => setOAuthStatus_2({
              state: "idle"
            }), u[73] = setOAuthStatus_2, u[74] = onCancel_7;else onCancel_7 = u[74];
            let x;
            if (u[75] !== U || u[76] !== i || u[77] !== N || u[78] !== ie || u[79] !== onDone_3 || u[80] !== onCancel_7) x = e(dt, {
              initialUrl: U,
              namedBy: N,
              internalNetworks: i,
              screenLocked: ie,
              onDone: onDone_3,
              onCancel: onCancel_7
            }), u[75] = U, u[76] = i, u[77] = N, u[78] = ie, u[79] = onDone_3, u[80] = onCancel_7, u[81] = x;else x = u[81];
            B = x;
            break mo;
          }
        case "gateway_done":
          {
            let h;
            if (u[82] === w) h = e(n, {
              color: "success",
              children: "Connected to Cloud gateway."
            }), u[82] = h;else h = u[82];
            let _;
            if (u[83] === w) _ = r(s, {
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
            }), u[83] = _;else _ = u[83];
            B = _;
            break mo;
          }
        case "console_method":
          {
            let h, _;
            if (u[84] === w) h = e(n, {
              bold: !0,
              children: "Anthropic Console account"
            }), _ = e(n, {
              children: "How do you want to sign in?"
            }), u[84] = h, u[85] = _;else h = u[84], _ = u[85];
            let x;
            if (u[86] === w) x = {
              label: r(n, {
                children: ["Sign in with your Console account", " ", e(n, {
                  dimColor: !0,
                  children: "(recommended)"
                })]
              }),
              value: "wif"
            }, u[86] = x;else x = u[86];
            let X;
            if (u[87] === w) X = e(n, {
              dimColor: !0,
              children: "(legacy)"
            }), u[87] = X;else X = u[87];
            let options_2;
            if (u[88] === w) options_2 = [x, {
              label: r(n, {
                children: ["Create an API key ", X, " \xB7", " ", e(n, {
                  dimColor: !0,
                  children: "adds a key to your Console workspace"
                })]
              }),
              value: "api-key"
            }, {
              label: "Go back",
              value: "back"
            }], u[88] = options_2;else options_2 = u[88];
            let onCancel_8;
            if (u[89] !== setOAuthStatus_2) onCancel_8 = () => setOAuthStatus_2({
              state: "idle"
            }), u[89] = setOAuthStatus_2, u[90] = onCancel_8;else onCancel_8 = u[90];
            let onChange_2;
            if (u[91] !== setConsoleProfileLogin_2 || u[92] !== setLoginWithClaudeAi_2 || u[93] !== setOAuthStatus_2) onChange_2 = je => {
              if (je === "back") {
                setOAuthStatus_2({
                  state: "idle"
                });
                return;
              }
              if (setLoginWithClaudeAi_2(!1), je === "wif") l("tengu_oauth_console_token_selected", {}), setConsoleProfileLogin_2(!0);else l("tengu_oauth_console_api_key_selected", {}), setConsoleProfileLogin_2(!1);
              setOAuthStatus_2({
                state: "ready_to_start"
              });
            }, u[91] = setConsoleProfileLogin_2, u[92] = setLoginWithClaudeAi_2, u[93] = setOAuthStatus_2, u[94] = onChange_2;else onChange_2 = u[94];
            let de;
            if (u[95] !== onChange_2 || u[96] !== onCancel_8) de = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _, e(s, {
                children: e(Ze, {
                  options: options_2,
                  onCancel: onCancel_8,
                  onChange: onChange_2
                })
              })]
            }), u[95] = onChange_2, u[96] = onCancel_8, u[97] = de;else de = u[97];
            B = de;
            break mo;
          }
        case "platform_setup":
          {
            let h;
            if (u[98] === w) h = e(n, {
              bold: !0,
              children: "Using 3rd-party platforms"
            }), u[98] = h;else h = u[98];
            const options_3 = [...Ue.map(wn), {
              label: "Go back",
              value: "back"
            }];
            let onChange_3, onCancel_9;
            if (u[99] !== setOAuthStatus_2) onChange_3 = Xe => {
              kt: switch (Xe) {
                case "bedrock":
                  {
                    l("tengu_oauth_bedrock_wizard_launched", {}), setOAuthStatus_2({
                      state: "bedrock_wizard"
                    });
                    break kt;
                  }
                case "aws_refresh":
                  {
                    l("tengu_oauth_aws_refresh_launched", {}), setOAuthStatus_2({
                      state: "aws_refresh_running"
                    });
                    break kt;
                  }
                case "foundry":
                  {
                    l("tengu_oauth_platform_docs_opened", {
                      platform: b("foundry")
                    }), Zi("https://code.claude.com/docs/en/microsoft-foundry"), setOAuthStatus_2({
                      state: "idle"
                    });
                    break kt;
                  }
                case "vertex":
                  {
                    l("tengu_oauth_vertex_wizard_launched", {}), setOAuthStatus_2({
                      state: "vertex_wizard"
                    });
                    break kt;
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
            }), u[99] = setOAuthStatus_2, u[100] = onChange_3, u[101] = onCancel_9;else onChange_3 = u[100], onCancel_9 = u[101];
            B = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, e(Ze, {
                options: options_3,
                onChange: onChange_3,
                onCancel: onCancel_9
              }), Ue.some(Cn) && r(n, {
                dimColor: !0,
                children: ["Foundry: ", e(sn, {
                  url: "https://code.claude.com/docs/en/microsoft-foundry",
                  children: "https://code.claude.com/docs/en/microsoft-foundry"
                })]
              })]
            });
            break mo;
          }
        case "aws_refresh_running":
          {
            let h;
            if (u[102] !== setOAuthStatus_2) h = e(Wt, {
              onComplete: ok => setOAuthStatus_2({
                state: "aws_refresh_done",
                ok: ok
              })
            }), u[102] = setOAuthStatus_2, u[103] = h;else h = u[103];
            B = h;
            break mo;
          }
        case "aws_refresh_done":
          {
            let h;
            if (u[104] !== oauthStatus_2.ok) h = oauthStatus_2.ok ? e(n, {
              color: "success",
              children: "AWS credentials refreshed."
            }) : e(n, {
              color: "error",
              children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal."
            }), u[104] = oauthStatus_2.ok, u[105] = h;else h = u[105];
            let _;
            if (u[106] === w) _ = r(n, {
              dimColor: !0,
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to continue."]
            }), u[106] = _;else _ = u[106];
            let x;
            if (u[107] !== h) x = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _]
            }), u[107] = h, u[108] = x;else x = u[108];
            B = x;
            break mo;
          }
        case "bedrock_wizard":
          {
            let h;
            if (u[109] !== setOAuthStatus_2) h = e(kGt, {
              onComplete: message_3 => setOAuthStatus_2({
                state: "bedrock_done",
                message: message_3
              }),
              onCancel: () => setOAuthStatus_2({
                state: "platform_setup"
              }),
              exitOnCtrlCD: !0
            }), u[109] = setOAuthStatus_2, u[110] = h;else h = u[110];
            B = h;
            break mo;
          }
        case "bedrock_done":
        case "vertex_done":
          {
            let h;
            if (u[111] !== oauthStatus_2.message) h = e(n, {
              color: "success",
              children: oauthStatus_2.message
            }), u[111] = oauthStatus_2.message, u[112] = h;else h = u[112];
            let _;
            if (u[113] === w) _ = r(n, {
              dimColor: !0,
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to restart Claude Code."]
            }), u[113] = _;else _ = u[113];
            let x;
            if (u[114] !== h) x = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _]
            }), u[114] = h, u[115] = x;else x = u[115];
            B = x;
            break mo;
          }
        case "vertex_wizard":
          {
            let h;
            if (u[116] !== setOAuthStatus_2) h = e(vGt, {
              onComplete: message_4 => setOAuthStatus_2({
                state: "vertex_done",
                message: message_4
              }),
              onCancel: () => setOAuthStatus_2({
                state: "platform_setup"
              }),
              exitOnCtrlCD: !0
            }), u[116] = setOAuthStatus_2, u[117] = h;else h = u[117];
            B = h;
            break mo;
          }
        case "waiting_for_login":
          {
            let h;
            if (u[118] !== D) h = D && e(s, {
              children: e(n, {
                dimColor: !0,
                children: D
              })
            }), u[118] = D, u[119] = h;else h = u[119];
            let _;
            if (u[120] !== keyMintFallbackReason_2) _ = keyMintFallbackReason_2 && e(s, {
              children: e(n, {
                dimColor: !0,
                children: `${mt} (${keyMintFallbackReason_2.cause}), so this sign-in will create an API key.`
              })
            }), u[120] = keyMintFallbackReason_2, u[121] = _;else _ = u[121];
            let x;
            if (u[122] !== showPastePrompt_2) x = !showPastePrompt_2 && r(s, {
              children: [e(Oa, {}), e(n, {
                children: "Opening browser to sign in\u2026"
              })]
            }), u[122] = showPastePrompt_2, u[123] = x;else x = u[123];
            let X;
            if (u[124] !== cursorOffset_2 || u[125] !== handleSubmitCode_2 || u[126] !== showCursor || u[127] !== oauthStatus_2.url || u[128] !== T || u[129] !== ce || u[130] !== te || u[131] !== ge || u[132] !== showPastePrompt_2 || u[133] !== De) X = showPastePrompt_2 && r(s, {
              children: [e(n, {
                children: T
              }), e(Ir, {
                value: ce,
                onChange: ge,
                onSubmit: St => handleSubmitCode_2(St, oauthStatus_2.url),
                cursorOffset: cursorOffset_2,
                onChangeCursorOffset: te,
                columns: De,
                mask: "*",
                focus: !0,
                showCursor: showCursor
              })]
            }), u[124] = cursorOffset_2, u[125] = handleSubmitCode_2, u[126] = showCursor, u[127] = oauthStatus_2.url, u[128] = T, u[129] = ce, u[130] = te, u[131] = ge, u[132] = showPastePrompt_2, u[133] = De, u[134] = X;else X = u[134];
            let ee;
            if (u[135] !== h || u[136] !== _ || u[137] !== x || u[138] !== X) ee = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _, x, X]
            }), u[135] = h, u[136] = _, u[137] = x, u[138] = X, u[139] = ee;else ee = u[139];
            B = ee;
            break mo;
          }
        case "about_to_retry":
          {
            let h;
            if (u[140] === w) h = e(s, {
              flexDirection: "column",
              gap: 1,
              children: e(n, {
                color: "permission",
                children: "Retrying\u2026"
              })
            }), u[140] = h;else h = u[140];
            B = h;
            break mo;
          }
        case "success":
          {
            let children_11;
            if (u[141] !== mode_2 || u[142] !== oauthStatus_2.notice || u[143] !== oauthStatus_2.token) children_11 = mode_2 === "setup-token" && oauthStatus_2.token ? null : r(ne, {
              children: [hn()?.emailAddress ? r(n, {
                dimColor: !0,
                children: ["Logged in as", " ", e(n, {
                  children: hn()?.emailAddress
                })]
              }) : null, e(ft, {}), r(n, {
                color: "success",
                children: ["Login successful. Press ", e(n, {
                  bold: !0,
                  children: "Enter"
                }), " to continue\u2026"]
              }), oauthStatus_2.notice ? e(n, {
                color: "warning",
                children: oauthStatus_2.notice
              }) : null]
            }), u[141] = mode_2, u[142] = oauthStatus_2.notice, u[143] = oauthStatus_2.token, u[144] = children_11;else children_11 = u[144];
            let _;
            if (u[145] !== children_11) _ = e(s, {
              flexDirection: "column",
              children: children_11
            }), u[145] = children_11, u[146] = _;else _ = u[146];
            B = _;
            break mo;
          }
        case "storage_failed":
          {
            let h;
            if (u[147] !== oauthStatus_2.backendName) h = go(oauthStatus_2.backendName), u[147] = oauthStatus_2.backendName, u[148] = h;else h = u[148];
            let ye = h;
            let _;
            if (u[149] !== ye || u[150] !== oauthStatus_2.sessionAuth || u[151] !== oauthStatus_2.transient) _ = e(s, {
              flexDirection: "column",
              children: oauthStatus_2.sessionAuth === "fresh" ? r(ne, {
                children: [e(n, {
                  color: "warning",
                  children: oauthStatus_2.transient ? `Logged in for now, but Claude Code couldn't confirm your new credentials were saved to ${ye}.` : `Logged in for now, but your new credentials could not be saved to ${ye}.`
                }), e(n, {
                  color: "warning",
                  children: oauthStatus_2.transient ? "This login may expire mid-session and may not persist after you exit Claude Code." : "This login may expire mid-session and will not persist after you exit Claude Code."
                })]
              }) : oauthStatus_2.sessionAuth === "previous" ? r(ne, {
                children: [r(n, {
                  color: "error",
                  children: ["Sign-in completed in the browser, but your new credentials could not be saved to ", ye, " \u2014 a previous login's credentials are still in place and will be used instead."]
                }), e(n, {
                  dimColor: !0,
                  children: "(Your new sign-in did not replace the existing credentials.)"
                })]
              }) : r(ne, {
                children: [r(n, {
                  color: "error",
                  children: ["Sign-in completed in the browser, but your credentials could not be saved to ", ye, " \u2014 you are not logged in."]
                }), e(n, {
                  dimColor: !0,
                  children: "(No previous login on this machine is usable right now either.)"
                })]
              })
            }), u[149] = ye, u[150] = oauthStatus_2.sessionAuth, u[151] = oauthStatus_2.transient, u[152] = _;else _ = u[152];
            let x;
            if (u[153] !== oauthStatus_2.departingLoginMayRemain) x = oauthStatus_2.departingLoginMayRemain ? e(n, {
              color: "warning",
              children: LPe
            }) : null, u[153] = oauthStatus_2.departingLoginMayRemain, u[154] = x;else x = u[154];
            let X;
            if (u[155] === w) X = e(n, {
              dimColor: !0,
              children: "To avoid having to log in again each session:"
            }), u[155] = X;else X = u[155];
            let ee;
            if (u[156] !== ye) ee = r(n, {
              dimColor: !0,
              children: ["  ", "\u2022 fix access to ", ye, ", then run /login again"]
            }), u[156] = ye, u[157] = ee;else ee = u[157];
            let se;
            if (u[158] === w) se = r(n, {
              dimColor: !0,
              children: ["  ", "\u2022 or run claude setup-token and set CLAUDE_CODE_OAUTH_TOKEN"]
            }), u[158] = se;else se = u[158];
            let pe;
            if (u[159] !== ee) pe = r(s, {
              flexDirection: "column",
              children: [X, ee, se]
            }), u[159] = ee, u[160] = pe;else pe = u[160];
            let de;
            if (u[161] !== allowContinueWithoutLogin_2 || u[162] !== oauthStatus_2.sessionAuth) de = oauthStatus_2.sessionAuth === "fresh" ? r(n, {
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
                children: e(Y, {
                  chord: "escape",
                  action: "continue without logging in",
                  parens: !0
                })
              }) : null]
            }), u[161] = allowContinueWithoutLogin_2, u[162] = oauthStatus_2.sessionAuth, u[163] = de;else de = u[163];
            let Ee;
            if (u[164] !== pe || u[165] !== de || u[166] !== _ || u[167] !== x) Ee = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [_, x, pe, de]
            }), u[164] = pe, u[165] = de, u[166] = _, u[167] = x, u[168] = Ee;else Ee = u[168];
            B = Ee;
            break mo;
          }
        case "account_on_hold":
          {
            let h;
            if (u[169] !== oauthStatus_2.message) h = e(n, {
              color: "warning",
              children: oauthStatus_2.message
            }), u[169] = oauthStatus_2.message, u[170] = h;else h = u[170];
            let _;
            if (u[171] !== mode_2) _ = mode_2 !== "setup-token" && r(n, {
              dimColor: !0,
              children: ["Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to go back to login options."]
            }), u[171] = mode_2, u[172] = _;else _ = u[172];
            let x;
            if (u[173] !== h || u[174] !== _) x = r(s, {
              flexDirection: "column",
              gap: 1,
              children: [h, _]
            }), u[173] = h, u[174] = _, u[175] = x;else x = u[175];
            B = x;
            break mo;
          }
        case "error":
          {
            let Be, flexDirection, gap, x;
            if (u[176] !== oauthStatus_2.message || u[177] !== oauthStatus_2.verbatim) {
              let it = oauthStatus_2.verbatim ? /\s(https:\/\/\S+)$/.exec(oauthStatus_2.message) : null;
              let Ke = it?.[1];
              let He = Ke && jpe(Ke);
              let At = Ke && He ? Ke.slice(He.length) : "";
              let at = He ? EZe(He) : void 0;
              Be = s;
              flexDirection = "column";
              gap = 1;
              x = it && He ? r(s, {
                flexDirection: "column",
                children: [e(n, {
                  color: "error",
                  children: oauthStatus_2.message.slice(0, it.index)
                }), r(n, {
                  color: "error",
                  children: [at ? e(sn, {
                    url: at,
                    assumeSupport: !0,
                    children: e(n, {
                      color: "error",
                      children: at
                    })
                  }) : He, At]
                })]
              }) : e(n, {
                color: "error",
                children: oauthStatus_2.verbatim ? oauthStatus_2.message : `OAuth error: ${oauthStatus_2.message}`
              });
              u[176] = oauthStatus_2.message, u[177] = oauthStatus_2.verbatim, u[178] = Be, u[179] = flexDirection, u[180] = gap, u[181] = x;
            } else Be = u[178], flexDirection = u[179], gap = u[180], x = u[181];
            let X;
            if (u[182] !== keyMintFallbackReason_2) X = keyMintFallbackReason_2 && e(n, {
              dimColor: !0,
              children: `${mt}: ${keyMintFallbackReason_2.message}`
            }), u[182] = keyMintFallbackReason_2, u[183] = X;else X = u[183];
            let ee;
            if (u[184] !== allowContinueWithoutLogin_2 || u[185] !== oauthStatus_2.toRetry) ee = (oauthStatus_2.toRetry || allowContinueWithoutLogin_2) && e(s, {
              marginTop: 1,
              children: r(n, {
                color: "permission",
                children: [oauthStatus_2.toRetry && r(ne, {
                  children: ["Press ", e(n, {
                    bold: !0,
                    children: "Enter"
                  }), " to retry.", " "]
                }), allowContinueWithoutLogin_2 ? e(n, {
                  dimColor: !0,
                  children: e(Y, {
                    chord: "escape",
                    action: "continue without logging in",
                    parens: !0
                  })
                }) : null]
              })
            }), u[184] = allowContinueWithoutLogin_2, u[185] = oauthStatus_2.toRetry, u[186] = ee;else ee = u[186];
            let se;
            if (u[187] !== Be || u[188] !== flexDirection || u[189] !== gap || u[190] !== x || u[191] !== X || u[192] !== ee) se = r(Be, {
              flexDirection: flexDirection,
              gap: gap,
              children: [x, X, ee]
            }), u[187] = Be, u[188] = flexDirection, u[189] = gap, u[190] = x, u[191] = X, u[192] = ee, u[193] = se;else se = u[193];
            B = se;
            break mo;
          }
        default:
          {
            B = null;
            break mo;
          }
      }
    }
    u[1] = allowContinueWithoutLogin_2, u[2] = allowedProviders_2, u[3] = consoleProfileLoginAllowed_2, u[4] = cursorOffset_2, u[5] = firstPartyLoginAllowed_2, u[6] = U, u[7] = D, u[8] = i, u[9] = N, u[10] = ie, u[11] = G, u[12] = handleSubmitCode_2, u[13] = showCursor, u[14] = keyMintFallbackReason_2, u[15] = mode_2, u[16] = oauthStatus_2.backendName, u[17] = oauthStatus_2.departingLoginMayRemain, u[18] = oauthStatus_2.message, u[19] = oauthStatus_2.notice, u[20] = oauthStatus_2.ok, u[21] = oauthStatus_2.sessionAuth, u[22] = oauthStatus_2.state, u[23] = oauthStatus_2.toRetry, u[24] = oauthStatus_2.token, u[25] = oauthStatus_2.transient, u[26] = oauthStatus_2.url, u[27] = oauthStatus_2.verbatim, u[28] = onAuthSuccess_2, u[29] = T, u[30] = ce, u[31] = reloadClearedOrgDocuments_2, u[32] = setConsoleProfileLogin_2, u[33] = te, u[34] = setHybridRowPicked_2, u[35] = setLoginWithClaudeAi_2, u[36] = setOAuthStatus_2, u[37] = ge, u[38] = showPastePrompt_2, u[39] = startingMessage_2, u[40] = De, u[41] = B;
  } else B = u[41];
  if (B !== Pn) return B;
}
function go(v) {
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
export { $ot, bUe };