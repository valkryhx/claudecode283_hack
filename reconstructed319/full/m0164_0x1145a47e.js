// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Nr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  N
} from "B:/~BUN/root/chunk-kjwczfsg.js";
import {
  cY,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  H,
  Cme,
  kKn,
  TKn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  vj,
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Zz,
  FO,
  Ate,
  bHs,
  Pbt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Bpe
} from "B:/~BUN/root/chunk-8998nbf3.js";
import {
  be,
  ott,
  VNs
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Te,
  Yc,
  Od
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  Sqe,
  IE,
  qU
} from "B:/~BUN/root/chunk-pwj77283.js";
import {
  uM
} from "B:/~BUN/root/chunk-zpne314q.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";

function DJ() {
  let {
    forceLoginMethod: e,
    forceLoginGatewayUrl: n
  } = ott();
  return e === "gateway" || n !== void 0
}

function SKe() {
  return !i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !y() && DJ()
}

function y() {
  return uM.some((e) => i[e])
}
var ULs = ["signed_out", "identity_changed", "transient", "refresh_failed"];

function b7i(e) {
  return ULs.some((n) => n === e)
}
var c = 0,
  _;

function S7i(e) {
  c++, _ = {
    reason: e,
    generation: c
  }
}

function w7i() {
  c++, _ = void 0
}

function S0r() {
  return _
}

function Aan() {
  return c
}
class h {
  token = null;
  everHeld = new Set;
  identity = null;
  hasIdentitySaidNothing = !1;
  identityReasksMade = 0;
  identityOf = null;
  endedAtRead = null;
  hasEndToSettle = !1;
  renewalHoldOffUntilMs = 0;
  judgeReplacement = null;
  readFlag = null;
  replacing = Promise.resolve();
  startupAskIds = new Set;
  wasLauncherStarted = !1;
  wasOpenToSignIn = !1
}
var l = new W(() => new h),
  R = cY(Object.fromEntries([...Zz, ...FO, ...Ate, ...bHs, "ANTHROPIC_UNIX_SOCKET", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "ANTHROPIC_BASE_URL", "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", ...Bpe].map((e) => [e, N.rawStr()])), null),
  p = 60000,
  O = [5000, 30000, 120000],
  D = 600000;

function lM() {
  let e = l.of(H().host);
  return e.wasLauncherStarted ||= Boolean(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && i.CLAUDE_CODE_HOST_AUTH_ENV_VAR), e.wasOpenToSignIn ||= e.wasLauncherStarted && i.CLAUDE_CODE_ENTRYPOINT !== "claude-desktop-3p", e.wasLauncherStarted
}

function BLs() {
  return lM(), l.of(H().host).wasOpenToSignIn
}

function jLs() {
  let e = l.of(H().host);
  e.wasLauncherStarted = !1, e.wasOpenToSignIn = !1, lM()
}

function ett() {
  if (!lM()) return "not_launcher_started";
  if (i.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN) return "switched_off";
  if (Te() !== "firstParty") return "not_first_party";
  if (DJ()) return "gateway_mandate";
  if (ott().forceLoginMethod === "console") return "login_method_pin";
  if (!Yc()) return "custom_base_url";
  let e = f((n) => {
    let o = R[n];
    return typeof o === "string" ? o : void 0
  });
  if (e !== null) return e;
  try {
    if (!S(nn().BASE_API_URL)) return "api_base_not_anthropic"
  } catch {
    return "api_base_not_anthropic"
  }
  if (vj() === "-local-oauth") return "endpoint_override";
  if (Sqe() || IE() || qU() || [...Ate, "CLAUDE_BG_AUTH_SNAPSHOT_PATH"].some((n) => kKn(n)) || Nr() && be("flagSettings")?.apiKeyHelper) return "launcher_credential";
  try {
    let {
      envs: n,
      apiKeyHelper: o,
      unread: r
    } = VNs();
    if (o || n.some((u) => f((s) => u[s]) !== null)) return "machine_policy_credential";
    if (n.some((u) => Pe(u.CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN))) return "switched_off";
    if (r) return "machine_policy_unread"
  } catch (n) {
    return t(`[launcher-host-login] the read of the machine's managed settings threw (${n instanceof Error?n.name:"unknown"})`, {
      level: "error"
    }), "machine_policy_unread"
  }
  if (Pbt()) return "served_policy_unread";
  try {
    let {
      readFlag: n
    } = l.of(H().host);
    return n?.("tengu_kestrel_lantern", !0) === !1 ? "switched_off" : null
  } catch {
    return null
  }
}

function gH() {
  if (!lM()) return null;
  let e = l.of(H().host);
  return e.token !== null && a(e) === null ? e.token : null
}

function xan() {
  let e = l.of(H().host);
  if (e.token !== null) a(e);
  if (e.endedAtRead !== null) e.endedAtRead = null, m("auth_launcher_host_login", "refused_while_held");
  let n = e.hasEndToSettle;
  return e.hasEndToSettle = !1, n
}

function WLs(e) {
  l.of(H().host).readFlag = e
}

function zLs(e) {
  l.of(H().host).judgeReplacement = e
}

function GLs(e) {
  if (!e || ett() !== null) return !1;
  let n = l.of(H().host);
  return n.token = e, n.everHeld.add(nt(e)), !0
}

function uBt(e) {
  let n = l.of(H().host).everHeld;
  return n.size > 0 && n.has(nt(e))
}

function FWn(e) {
  return uBt(e) && gH() === null
}

function Lie(e) {
  return e !== null && uBt(e.accessToken) ? null : e
}

function fBt(e) {
  let n = l.of(H().host);
  if (n.identityOf = e, n.identity !== null && !n.hasIdentitySaidNothing) return n.identity;
  let o = gH();
  if (o === null) return n.identity ?? Promise.resolve(null);
  let r = e(o).catch(() => null);
  return n.identity = r, n.hasIdentitySaidNothing = !1, r.then((u) => {
    if (u !== null || n.identity !== r) return;
    n.hasIdentitySaidNothing = !0;
    let s = O[n.identityReasksMade] ?? D;
    n.identityReasksMade += 1, setTimeout(I, s, n, r, e).unref()
  }), r
}

function I(e, n, o) {
  try {
    if (e.identity === n && l.of(H().host) === e) fBt(o)
  } catch {
    t("[launcher-host-login] asking again whose sign-in this is threw", {
      level: "warn"
    })
  }
}

function VLs() {
  return l.of(H().host).identity
}

function KLs() {
  let {
    identityOf: e
  } = l.of(H().host);
  return e === null ? Promise.resolve(null) : fBt(e)
}

function qLs(e) {
  l.of(H().host).startupAskIds.add(e)
}

function YLs(e) {
  return lM() && typeof e === "string" && l.of(H().host).startupAskIds.has(e)
}

function oHe() {
  let e = l.of(H().host),
    n = e.token !== null;
  return e.token = null, e.hasEndToSettle ||= n, n
}

function a(e) {
  let n = ett();
  if (n !== null && e.token !== null) e.token = null, e.endedAtRead = n, e.hasEndToSettle = !0, t(`[launcher-host-login] the desktop app's sign-in is over for this process (refused_while_held: ${n})`, {
    level: "warn"
  });
  return n
}

function XLs(e) {
  let n = l.of(H().host);
  return L(n, () => w(n, e))
}

function JLs(e) {
  let n = l.of(H().host),
    o;
  try {
    o = a(n)
  } catch (r) {
    return E(r), null
  }
  if (!e || n.token === null || o !== null) return t(`[launcher-host-login] refused a pushed claude.ai token (${o??(e?"none_held":"empty")})`, {
    level: "warn"
  }), null;
  return L(n, () => A(n, e))
}

function L(e, n) {
  let o = e.replacing.then(n).catch((r) => (E(r), !1));
  return e.replacing = o, o
}

function E(e) {
  t(`[launcher-host-login] replacing the token held threw (${e instanceof Error?e.name:"unknown"})`, {
    level: "error"
  })
}
async function w(e, n) {
  if (e.token === null || a(e) !== null) return !1;
  if (e.token !== n) return !0;
  let o = Cme();
  if (!o || Date.now() < e.renewalHoldOffUntilMs) return !1;
  let r = Aan(),
    u;
  try {
    u = await o()
  } catch (s) {
    return t(`[launcher-host-login] oauth_token_refresh failed (${s instanceof Error?s.name:"unknown"})`, {
      level: "warn"
    }), e.renewalHoldOffUntilMs = Date.now() + p, m("auth_launcher_host_login", "request_failed"), !1
  }
  if (e.token === null) return !1;
  if (ett() !== null) return d(e, "refused_after_answer"), !1;
  if (!u) {
    let s = S0r();
    if (s !== void 0 && s.generation > r && s.reason === "identity_changed") return d(e, "identity_changed"), !1;
    return m("auth_launcher_host_login", "no_token"), !1
  }
  if (u === n) return m("auth_launcher_host_login", "same_token"), !1;
  return A(e, u, !0)
}
async function A(e, n, o = !1) {
  if (e.token === null || a(e) !== null) return !1;
  if (n === e.token) return !0;
  let r = "refused";
  try {
    if (e.judgeReplacement !== null) r = await e.judgeReplacement(n)
  } catch (u) {
    t(`[launcher-host-login] the replacement could not be judged (${u instanceof Error?u.name:"unknown"})`, {
      level: "error"
    })
  }
  if (e.token === null) return !1;
  if (r === "held_unknown" && o) return d(e, "identity_never_learned"), !1;
  if (r === "unverified" || r === "held_unknown") return e.renewalHoldOffUntilMs = Date.now() + p, m("auth_launcher_host_login", "replacement_unverified"), !1;
  if (r === "allowed" && ett() === null) return e.token = n, e.everHeld.add(nt(n)), TKn(!0), g("auth_launcher_host_login"), !0;
  return d(e, r === "allowed" ? "refused_after_answer" : "replacement_refused"), !1
}

function d(e, n) {
  e.token = null, e.hasEndToSettle = !0, t(`[launcher-host-login] the desktop app's sign-in is over for this process (${n})`, {
    level: "warn"
  }), m("auth_launcher_host_login", n)
}

function f(e) {
  if (Zz.some((o) => o.startsWith("CLAUDE_CODE_USE_") && Pe(e(o)))) return "not_first_party";
  if (e("ANTHROPIC_UNIX_SOCKET")?.trim()) return "unix_socket";
  if (e("CLAUDE_CODE_CUSTOM_OAUTH_URL")?.trim()) return "custom_oauth_deployment";
  let n = e("ANTHROPIC_BASE_URL")?.trim();
  if (n && !S(n)) return "insecure_base_url";
  if (bHs.some((o) => e(o)?.trim())) return "endpoint_override";
  if (e("ANTHROPIC_CUSTOM_HEADERS")?.trim() || e("CLAUDE_CODE_HOST_CREDS_FILE")?.trim() || e("CLAUDE_SESSION_INGRESS_TOKEN_FILE")?.trim() || FO.some((o) => e(o)?.trim()) || Ate.some((o) => e(o)?.trim())) return "launcher_credential";
  if (Bpe.some((o) => {
      let r = e(o);
      return r !== void 0 && r !== "1"
    })) return "tls_verification_disabled";
  return null
}

function S(e) {
  return Od(e) && new URL(e).protocol === "https:"
}
export {
  DJ,
  SKe,
  ULs,
  b7i,
  S7i,
  w7i,
  S0r,
  Aan,
  lM,
  BLs,
  jLs,
  ett,
  gH,
  xan,
  WLs,
  zLs,
  GLs,
  uBt,
  FWn,
  Lie,
  fBt,
  VLs,
  KLs,
  qLs,
  YLs,
  oHe,
  XLs,
  JLs
};
