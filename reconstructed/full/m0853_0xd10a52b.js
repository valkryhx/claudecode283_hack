// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  pt,
  An,
  Dt,
  nc,
  x,
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  te
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Lt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  jL,
  QO,
  tsn,
  _Eo,
  sat,
  nsn,
  $Ar,
  k4e,
  iat,
  rsn,
  FOt,
  hge,
  osn
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  DH
} from "B:/~BUN/root/chunk-db33zsv9.js";
import {
  Xt
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  nee
} from "B:/~BUN/root/chunk-jz4j9jvf.js";
import {
  D5
} from "B:/~BUN/root/chunk-cyn7mwjt.js";
import {
  SSe,
  S7r,
  epe
} from "B:/~BUN/root/chunk-1br4pyxk.js";
import {
  lG
} from "B:/~BUN/root/chunk-26h5tsc5.js";
import {
  Bor,
  h7e
} from "B:/~BUN/root/chunk-kjx0j47y.js";
import {
  o,
  M,
  C,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var de = "tengu_smooth_forest",
  me = 12,
  fe = f(() => iat().extend({
    limitWall: u({
      noticeLine: k4e(),
      label: k4e(),
      body: C(k4e()).max(me).default([]),
      claimPageLine: k4e()
    })
  }));

function _oe() {
  let e = x(sat, null);
  if (e === null || e === void 0) return null;
  let n = fe().safeParse(e);
  if (!n.success) return null;
  let {
    limitWall: s,
    ...r
  } = n.data;
  return {
    ...s,
    ...r
  }
}

function wKt() {
  return x(de, !1) === !0
}
var ce = 1e4,
  pe = 3,
  T = Object.freeze({
    eligible: !1,
    claimed: !1
  });

function ge() {
  return {
    entries: new Map,
    changed: Me()
  }
}
var Se = new q(ge);

function k() {
  return Se.of(j().host)
}

function X(e) {
  let n = An()?.accountUuid;
  return n ? `${n}
${e}` : null
}

function I(e) {
  let n = X(e);
  return n === null ? void 0 : k().entries.get(n)
}

function K(e) {
  let n = X(e);
  if (n === null) return null;
  let s = k().entries,
    r = s.get(n);
  if (r === void 0) r = {
    status: void 0,
    pendingStatus: null,
    failedStatusAsks: 0,
    askBudgetWall: null,
    taken: !1
  }, s.set(n, r);
  return r
}

function iTn(e) {
  return k().changed.subscribe(e)
}

function R(e) {
  return I(e)?.status
}

function wWe(e) {
  if (!tsn(e) || !h7e()) return !1;
  let n = I(e);
  return n?.status?.eligible === !0 && !n.status.claimed && !n.taken
}

function Y(e) {
  return I(e)?.taken === !0
}
async function aTn(e, n, s, {
  refresh: r
} = {
  refresh: !1
}) {
  if (!tsn(e) || !h7e()) return;
  let l = K(e);
  if (l === null) {
    t("[promo] account not known yet; status not asked");
    return
  }
  if (l.status !== void 0 && !r) return l.status;
  if (s !== void 0 && s !== l.askBudgetWall) l.askBudgetWall = s, l.failedStatusAsks = 0;
  if (l.pendingStatus === null) {
    if (l.failedStatusAsks >= pe) return l.status;
    let m = k(),
      g = _e(e, n).then((S) => {
        if (l.pendingStatus = null, S === void 0) l.failedStatusAsks++;
        else if (l.failedStatusAsks = 0, S !== T || l.status === void 0) l.status = S;
        lTn(m.changed)
      });
    l.pendingStatus = g
  }
  return await l.pendingStatus, l.status
}

function lTn(e) {
  try {
    e.emit()
  } catch (n) {
    d(te(n))
  }
}
async function _e(e, n) {
  try {
    let s = await Dt.get(e, {
      auth: "teleport-org",
      timeout: ce,
      maxRedirects: 0,
      validateStatus: () => !0,
      credentials: n
    });
    if (!s.ok) {
      if (s.reason === "no-auth") {
        p("promo_status", "no_auth");
        return
      }
      return p("promo_status", "refused"), T
    }
    let r = _Eo({
      httpStatus: s.status,
      body: s.data
    });
    if (r.kind === "answered") return _("promo_status"), r.status;
    if (r.reason === "body") {
      if (r.kind === "no_answer") {
        t("[promo] status response carried neither field (in-band error)", {
          level: "warn"
        }), p("promo_status", "in_band_error");
        return
      }
      return t("[promo] status response had an unknown shape", {
        level: "warn"
      }), p("promo_status", "bad_shape"), T
    }
    if (t(`[promo] status returned ${s.status}`, {
        level: "warn"
      }), r.kind === "not_eligible") return p("promo_status", "http_4xx"), T;
    if (s.status === 408 || s.status === 429) {
      p("promo_status", s.status === 408 ? "http_408" : "http_429");
      return
    }
    p("promo_status", s.status >= 500 ? "http_5xx" : "http_3xx");
    return
  } catch (s) {
    t(`[promo] status request failed: ${te(s).message}`, {
      level: "warn"
    }), p("promo_status", "request_failed");
    return
  }
}
var Pe = 1e4;
async function vKt(e, n) {
  if (!Xt(Bor)) return t("[promo] claim page not opened: org policy denies it"), null;
  let s = k(),
    r = K(e),
    m = iat().safeParse(x(sat, null)).data?.claimLinkIncludesOrganization === !0 ? a.CLAUDE_CODE_ORGANIZATION_UUID || An()?.organizationUuid : void 0,
    g = S7r({
      webPath: $Ar(n.webPath, m),
      desktopPath: $Ar(n.desktopPath, m)
    }).catch((v) => (d(te(v)), "none")),
    S = await nt(g, Pe);
  if (r !== null) r.taken = !0, lTn(s.changed);
  switch (S) {
    case void 0:
      p("promo_claim_page", "deadline");
      break;
    case "none":
      p("promo_claim_page", "not_opened");
      break;
    case "desktop":
    case "browser":
      _("promo_claim_page");
      break
  }
  return {
    opened: S ?? "none",
    httpsUrl: SSe(n.webPath)
  }
}
var L = "6",
  A = "This offer isn't available right now.",
  he = "The offer page is already opening",
  be = "The offer page didn't open.",
  U = "Offer page",
  Ce = "Your claim is being processed.",
  ye = "This offer has expired.",
  ke = "This offer was already claimed in another organization.",
  Ae = "You've already claimed this offer.",
  we = "See the offer at",
  Oe = "This offer isn't available for this account.",
  xe = "Learn more at",
  Te = "https://support.claude.com/en/articles/17152539",
  Re = "Set up GitHub for cloud sessions automatically by running /web-setup",
  Q = 750,
  Le = "Couldn't check this offer right now.";

function ve() {
  return {
    exposureLogged: !1,
    statusSettled: !1,
    deferredAsk: null,
    commandInFlight: !1,
    keptParse: null,
    changed: Me()
  }
}

function V(e) {
  e.statusSettled = !0;
  try {
    e.changed.emit()
  } catch (n) {
    d(te(n))
  }
}
var Ne = new q(ve);

function h() {
  return Ne.of(j().host)
}

function D() {
  return (le().promoStartupSeenCount ?? 0) < rsn && !lG(j().host) && !nc() && !a.CLAUDE_BRIDGE_REATTACH_SESSION
}
var Ie = f(() => u({
  accountUuid: o().min(1),
  endpoint: o(),
  eligible: M(),
  claimed: M()
}));

function y() {
  return An()?.accountUuid || void 0
}

function Ue(e) {
  let n = h();
  if (n.keptParse === null || n.keptParse.raw !== e) {
    let s = Ie().safeParse(e);
    n.keptParse = {
      raw: e,
      kept: s.success && (s.data.claimed || s.data.eligible) ? s.data : void 0
    }
  }
  return n.keptParse.kept
}

function ne(e, n, s) {
  let r = Ue(e.promoStartupStatusCache);
  return r?.accountUuid === n && r.endpoint === s ? r : void 0
}

function W(e) {
  let n = y();
  return n === void 0 ? void 0 : ne(le(), n, e)
}

function Fe(e) {
  return W(e)?.claimed === !0
}
async function oe(e, n, s, r) {
  let l = y(),
    m = await aTn(e.endpoint, n, void 0, {
      refresh: r
    });
  if (m === void 0 || l === void 0) return m;
  if (m.eligible && !m.claimed && !wWe(e.endpoint)) return m;
  return Ee((g) => {
    let S = ne(g, l, e.endpoint);
    if (!m.eligible && !m.claimed) return S?.claimed === !1 ? {
      ...g,
      promoStartupStatusCache: void 0
    } : g;
    if (S !== void 0 && S.eligible === m.eligible && S.claimed === m.claimed) return g;
    return {
      ...g,
      promoStartupStatusCache: {
        accountUuid: l,
        endpoint: e.endpoint,
        eligible: m.eligible,
        claimed: m.claimed
      }
    }
  }, s), m
}

function w() {
  return !jL() && Xt("allow_promo_offers")
}

function B(e) {
  if (R(e.endpoint) !== void 0) return wWe(e.endpoint);
  let n = W(e.endpoint);
  return n?.eligible === !0 && !n.claimed && pt() && w()
}

function F(e, n) {
  let s = wKt(),
    r = h();
  if (!r.exposureLogged) r.exposureLogged = !0, i("tengu_promo_exposure", {
    surface: c(e),
    exposed: s,
    config_version: n.version
  });
  return s
}

function cTn(e, n) {
  let s = h(),
    r = FOt();
  if (!w() || r === null || !D() || Fe(r.endpoint)) {
    V(s);
    return
  }
  if (pt() && y() === void 0) {
    s.deferredAsk = {
      credentials: e,
      storageV5: n
    };
    return
  }
  oe(r, e, n, !1).catch((l) => {
    d(te(l))
  }).finally(() => V(s))
}

function Hor() {
  let e = h(),
    n = e.deferredAsk;
  if (n === null || y() === void 0) return;
  e.deferredAsk = null, cTn(n.credentials, n.storageV5)
}

function h7r() {
  if (!D() || h().commandInFlight) return !1;
  let e = FOt();
  return e !== null && B(e)
}

function He() {
  let e = QO(),
    n = D5.of(j()).getSnapshot().loginCompleted;
  if (n !== e.promoStartupLoginsSeen) {
    e.promoStartupLoginsSeen = n;
    let s = e.promoStartupConfig;
    e.promoStartupLoginEnded = s !== null && !B(s)
  }
  return e.promoStartupLoginEnded
}

function y7r() {
  let e = FOt();
  return e === null || !F("startup", e)
}

function For() {
  let e = He(),
    n = hge(!1);
  if (n === null || e || !w()) return !0;
  return R(n.endpoint) !== void 0 && pt() && !wWe(n.endpoint)
}

function _7r() {
  if (!D() || !pt() || h().statusSettled) return !1;
  let e = FOt();
  return e !== null && R(e.endpoint) === void 0 && W(e.endpoint) === void 0
}

function $or() {
  i("tengu_promo_banner_shown", {
    surface: c("startup"),
    entry: c("notice"),
    config_version: hge(!1)?.version ?? 0
  })
}
var Uor = {
  subscribe: (e) => {
    let n = iTn(e),
      s = h().changed.subscribe(e),
      r = D5.of(j()).subscribe(e);
    return () => {
      n(), s(), r()
    }
  },
  getSnapshot: () => {
    let e = h().statusSettled ? "settled" : "pending";
    if (For()) return `done:${e}`;
    let n = hge(!1);
    return n !== null && B(n) ? "offerable" : e
  }
};
async function b7r(e, n, s) {
  if (!w()) return A;
  let r = osn();
  if (r === null) return A;
  let l = h();
  if (l.commandInFlight) return he;
  let m = nsn(r, L);
  l.commandInFlight = !0;
  try {
    let g = y(),
      S = await oe(r, n, s, !0);
    if (!w()) return E(r, "policy_denied"), A;
    if (!wWe(r.endpoint)) {
      let P = y() === g ? De(S, Y(r.endpoint)) : {
          reason: "account_switched",
          text: void 0
        },
        b = P.reason === "taken_this_session" && !F("command", r) ? "held_out" : P.reason;
      if (b !== "taken_this_session" && b !== "pending" && b !== "already_claimed") {
        E(r, b);
        let G = b === "not_eligible" ? `${xe} ${Te}` : `${U} \xB7 ${SSe(m.webPath)}`;
        return P.text === void 0 ? G : `${P.text} ${G}`
      }
      let se = ee(e, n, s),
        O = await vKt(r.endpoint, m);
      if (O === null) return E(r, "policy_denied"), A;
      return E(r, b, O.opened), Z(b === "taken_this_session" ? J(r, O) : `${P.text} ${we} ${O.httpsUrl}`, await nt(se, Q) === !0 && H())
    }
    if (!F("command", r)) return E(r, "held_out"), `${U} \xB7 ${SSe(m.webPath)}`;
    i("tengu_promo_banner_clicked", {
      surface: c("command"),
      entry_point: c(L),
      config_version: r.version
    });
    let v = ee(e, n, s),
      ie = Date.now(),
      N = await vKt(r.endpoint, m),
      ae = Date.now() - ie;
    if (N === null) return E(r, "policy_denied"), A;
    Ee((P) => P.promoStartupStatusCache === void 0 ? P : {
      ...P,
      promoStartupStatusCache: void 0
    }, s);
    let z = await nt(v, Q) === !0 && H();
    return i("tengu_promo_open_result", {
      surface: c("command"),
      entry_point: c(L),
      opened: c(N.opened),
      latency_ms: ae,
      config_version: r.version,
      web_setup_hint: z
    }), Z(J(r, N), z)
  } catch (g) {
    return d(te(g)), re(r, SSe(m.webPath))
  } finally {
    l.commandInFlight = !1
  }
}

function re(e, n) {
  return `${e.claimPageLine??U} \xB7 ${n}`
}

function J(e, {
  opened: n,
  httpsUrl: s
}) {
  let r = re(e, s);
  return n === "none" ? `${be} ${r}` : r
}

function E(e, n, s) {
  i("tengu_promo_command_not_offered", {
    surface: c("command"),
    entry_point: c(L),
    config_version: e.version,
    reason: c(n),
    ...s !== void 0 && {
      opened: c(s)
    }
  })
}

function Z(e, n) {
  return n ? `${e}
${Re}` : e
}

function H() {
  try {
    return !Lt() && nee()
  } catch (e) {
    return d(te(e)), !1
  }
}
async function ee(e, n, s) {
  try {
    if (!H()) return !1;
    let [r, l] = await Promise.all([epe({
      allowNetworkFallbackForOldGh: !1
    }), DH.of(e).readLive(n, s)]);
    return r.status === "authenticated" && l === "not_connected"
  } catch (r) {
    return d(te(r)), !1
  }
}

function De(e, n) {
  if (e === void 0) return {
    reason: "status_unknown",
    text: Le
  };
  if (!e.claimed) {
    if (e.eligible) return {
      reason: n ? "taken_this_session" : "not_offerable",
      text: void 0
    };
    return e.state === "not_claimed" ? {
      reason: "not_eligible",
      text: Oe
    } : {
      reason: "answer_unusable",
      text: void 0
    }
  }
  switch (e.state) {
    case "pending":
      return {
        reason: "pending", text: Ce
      };
    case "expired":
      return {
        reason: "expired", text: ye
      };
    case "claimed_elsewhere":
      return {
        reason: "claimed_elsewhere", text: ke
      };
    case "active":
    case "not_claimed":
    case void 0:
      return {
        reason: "already_claimed", text: Ae
      }
  }
}
export {
  _oe,
  wKt,
  iTn,
  wWe,
  aTn,
  lTn,
  vKt,
  cTn,
  Hor,
  h7r,
  y7r,
  For,
  _7r,
  $or,
  Uor,
  b7r
};
