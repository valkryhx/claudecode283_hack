// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Whe, GNt, jdt, gqn, MOo, DOo, Uk, wq, aC, Dg, $i, pt, cHr, An, Im, BMo, jMo, ipn, oDo, Aut, sDo, apn, Dt, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, xK } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { uc, BYe } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Fa } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { _2, Ogn, df } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { Kb } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { Dft } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { Tlt, oDt, GRo } from "B:/~BUN/root/chunk-mc8ranwc.js";
import { oh } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
function AS() {
  return x("tengu_cobalt_plinth_sedge", !1);
}
var fX = "public_unasked",
  nDt = "this is a public artifact from outside your organization, and no person has approved reading it here \u2014 nothing was fetched";
function sHe(e) {
  return e ? `this session holds no gateway credential (${e})` : "this session holds no gateway credential";
}
function wlt() {
  return pt() || V();
}
function V() {
  if (Kb() !== "env-quad") return !1;
  try {
    return wq() && cHr();
  } catch {
    return !1;
  }
}
function vlt() {
  return !pt() && V();
}
function I3e() {
  let {
    info: info,
    storeBearerOnly: storeBearerOnly
  } = Ean();
  if (!storeBearerOnly || info === void 0) return info;
  return aC() === "store" ? info : void 0;
}
function Ean() {
  let info_2 = An();
  if (info_2 !== void 0) return {
    info: info_2,
    storeBearerOnly: !1
  };
  return vlt() ? {
    info: Im(),
    storeBearerOnly: !0
  } : {
    info: void 0,
    storeBearerOnly: !1
  };
}
async function O3e(e) {
  let {
    info: info_3,
    storeBearerOnly: storeBearerOnly_2
  } = Ean();
  if (!storeBearerOnly_2 || info_3 === void 0) return info_3;
  return (await Dg(e)) === "store" ? info_3 : void 0;
}
function Ch(e) {
  return `Not authenticated \u2014 run /login (${e})`;
}
class W {
  endpoint = void 0;
  set(e) {
    this.endpoint = e;
  }
}
var be = new q(() => new W());
function K() {
  return be.of(j().host);
}
function kOr(e) {
  K().set(e);
}
function X() {
  return K().endpoint;
}
var L = 60,
  Ee = 180,
  he = 32768,
  Se = 1048576,
  Q = 262144,
  Te = 1.25,
  Z = {
    "Content-Encoding": "gzip",
    "Content-Type": "application/json"
  };
function azn(e) {
  if (e === void 0 || e <= 0) return L;
  return Math.min(Ee, L + Math.floor(e / he));
}
function Ae(e, n) {
  return n * azn(e) <= e * L;
}
async function Oe({
  url: url,
  body: body,
  storageV5: storageV5
}) {
  let o = b(body),
    jsonChars = o.length,
    u = Tlt(url, o, storageV5, "frame_publish");
  if (u === void 0) return {
    gzipped: null,
    encoding: void 0,
    jsonChars: jsonChars
  };
  let d = Buffer.byteLength(o),
    f = gzip_skip => ({
      gzipped: null,
      jsonChars: jsonChars,
      encoding: {
        json_bytes: d,
        wire_bytes: d,
        body_gzip: !1,
        gzip_skip: gzip_skip
      }
    });
  if (!u.gzip) return f(u.reason);
  let g = azn(d) / L;
  if (d >= Se) {
    let F = o.slice(0, Q),
      T = Buffer.byteLength(F) / (await BMo(F)).length;
    if (T * Te < g) return t(`[artifact] publish body sent uncompressed: its first ${Q} characters compress only ${T.toFixed(2)}x, and a body of ${d} bytes needs ${g.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`), f("deadline_ratio");
  }
  let gzipped = await jMo(o);
  if (!Ae(d, gzipped.length)) return t(`[artifact] publish body sent uncompressed: gzip only got ${d} bytes down to ${gzipped.length}, too little to finish inside the server's 60-second read limit for a compressed upload`), f("deadline_ratio");
  return {
    gzipped: gzipped,
    jsonChars: jsonChars,
    encoding: {
      json_bytes: d,
      wire_bytes: gzipped.length,
      body_gzip: !0
    }
  };
}
function Fe(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}
function facts(e) {
  if (!e.ok) return {
    status: 0,
    header: () => {
      return;
    },
    bodyText: async () => ""
  };
  return {
    status: e.status,
    header: n => {
      let r = e.response?.headers?.[n];
      return typeof r === "string" ? r : void 0;
    },
    bodyText: async () => typeof e.data === "string" ? e.data : e.data === void 0 ? "" : b(e.data)
  };
}
async function J({
  url: url_2,
  body: body_2,
  storageV5: storageV5_2,
  signal: signal,
  send: send,
  onEncoding: onEncoding
}) {
  if (!Fe(body_2)) return send(null);
  let {
    gzipped: gzipped_2,
    encoding: encoding,
    jsonChars: g
  } = await Oe({
    url: url_2,
    body: body_2,
    storageV5: storageV5_2
  });
  if (encoding !== void 0) onEncoding?.(encoding);
  if (gzipped_2 === null || encoding === void 0) return send(null);
  oDt("frame_publish");
  let answer = await send(gzipped_2);
  return GRo({
    answer: answer,
    facts: facts,
    resendIdentity: () => (onEncoding?.({
      json_bytes: encoding.json_bytes,
      wire_bytes: encoding.json_bytes,
      body_gzip: !1,
      gzip_fallback_status: answer.ok ? answer.status : 0
    }), send(null)),
    aborted: () => signal?.aborted === !0,
    bodyChars: g,
    storageV5: storageV5_2,
    rollout: "frame_publish"
  });
}
var xe = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
  Pe = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function ke(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let o = r.trim().toLowerCase();
    if (o === "") continue;
    let s = o.split(".");
    if (o.length > 253 || !s.every(item => xe.test(item)) || s.every(item => Pe.test(item))) return;
    n ??= o;
  }
  return n;
}
function te(e) {
  if (_2(e) !== void 0) return !0;
  return xK(e, n => {
    let r = v(n);
    return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== void 0 && Dft.has(r);
  }) !== void 0;
}
class ne {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new Ogn(e.proxyUrl, {
        ca: e.gatewayCa
      });
      n.options = {
        ...n.options,
        ca: e.gatewayCa
      }, this.builtFor = e, this.agent = n;
    }
    return this.agent;
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    this.warnedMalformed = e, t("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", {
      level: "warn"
    });
  }
}
var ve = new q(() => new ne());
function re() {
  if (!uc()) return;
  let CCR_AGENT_PROXY_FRAME_HOSTS = a.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (CCR_AGENT_PROXY_FRAME_HOSTS === void 0) return;
  let n = ve.of(j().host),
    host = ke(CCR_AGENT_PROXY_FRAME_HOSTS);
  if (host === void 0) {
    n.warnMalformedOnce(CCR_AGENT_PROXY_FRAME_HOSTS);
    return;
  }
  let o = X();
  if (o === void 0 || df() !== void 0) return;
  return {
    host: host,
    agent: n.agentFor(o)
  };
}
function NRo(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}
var Be = "x-ccr-relay-upstream",
  Le = "x-ccr-sandbox-egress",
  Me = new Set(["disabled", "restricted", "unrestricted"]);
function HRo(e) {
  if (!e.ok || e.route !== "relay" || !tte(e)) return;
  let n = e.response.headers?.[Le];
  return typeof n === "string" && Me.has(n) ? n : void 0;
}
var q3 = "forbidden: CCR agent tokens";
function XV(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}
function FRo(e) {
  return typeof e === "string" && e.trim() === "no version";
}
var De = new Set([401, 403, 404, 413]),
  Ie = new Set(["organization network policy denies artifact storage reads for this session", "organization network policy could not be determined for this session; artifact storage reads denied"]);
function Ue(e) {
  return e.ok && !tte(e) && e.status === 403 && typeof e.data === "string" && Ie.has(e.data.trim());
}
var Ge = new Set(["organization network policy denies artifact reads for this session", "organization network policy could not be determined for this session"]),
  M3e = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function D3e(e, n) {
  return e === 403 && n !== void 0 && n.byteLength <= 256 && Ge.has(Buffer.from(n).toString("utf8").trim());
}
var I = 300000,
  timeout = 15000,
  maxContentLength = 65536,
  weakSet = new WeakSet(),
  ze = /^(?:x-frame-[a-z0-9-]+|accept)$/i;
function He(e) {
  if (!e) return e;
  return Qr(e, (n, r) => ze.test(r));
}
var lzn = y("boot"),
  PF = y("blobs"),
  ZMt = y("comments"),
  Tan = y("subscriptions"),
  ue = y("types"),
  le = y("type_files"),
  czn = y("type_create"),
  de = y("db"),
  fe = y("publish"),
  ce = y("frames_external"),
  je = new Set([ZMt, Tan, lzn, ce, ue, le, czn, de, fe, PF, ...[]]),
  $e = "tengu_cobalt_plinth_burnet",
  Ve = [...S(lzn, ["GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track"]), ...S(ce, ["GET /frames/external"]), ...S(fe, ["POST /deploy/direct", "POST /deploy/prepare", "POST /upload", "GET /contract/latest", "GET /contract/{v}", "GET /contract/{v}/{file}", "GET /contract/{v}/prompt", "GET /read/{slug}"]), ...S(ZMt, ["GET /comments/{slug}", "POST /comments/{slug}/{thread}", "POST /comments/{slug}/{thread}/resolve", "POST /comments/{slug}/{thread}/summon-status"]), ...S(de, ["POST /db/agent"]), ...S(ue, ["GET /types", "GET /types/{slug}"]), ...S(czn, ["POST /types/{slug}/create"]), ...S(y("type_instances"), ["GET /types/{slug}/instances"]), ...S(le, ["GET /types/{slug}/files/{a}", "GET /types/{slug}/files/{a}/{b}", "GET /types/{slug}/files/{a}/{b}/{c}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"]), ...S(Tan, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]), ...S(y("delete"), ["DELETE /{slug}"]), ...S(y("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]), ...[]].sort((itemA, itemB) => oe(itemA) - oe(itemB));
function S(family, n) {
  return n.map(item => {
    let [method, s] = item.split(" ");
    return {
      method: method,
      pattern: s.split("/"),
      family: family
    };
  });
}
function oe(e) {
  return U(e.pattern, n => n.startsWith("{"));
}
function dzn(e, n) {
  let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
  return Ve.find(item => item.method === e && item.pattern.length === r.length && item.pattern.every((item, index) => item.startsWith("{") ? r[index] !== "" : item === r[index]))?.family ?? null;
}
function klt() {
  return uc() || BYe();
}
function K3() {
  if (!klt()) return !1;
  if (ipn() !== void 0) return !1;
  if (!x("tengu_cobalt_plinth_sorrel", !0)) return !1;
  if (!uc() && !x("tengu_cobalt_plinth_madder", !0)) return !1;
  return Whe();
}
function m0(e = null) {
  return K3() && !pe(e);
}
function pe(e) {
  if (!GNt() && !ye()) return !1;
  if (e !== null && Elt(e)) return !1;
  let frameRelay = ee().frameRelay;
  if (!frameRelay.botContextNoted) frameRelay.botContextNoted = !0, p("artifact_frame_relay", "bot_context_not_served", {
    hosted: uc()
  });
  return !0;
}
function dle() {
  return uc() && K3();
}
var We = "tengu_cobalt_plinth_medlar";
function ye() {
  return BYe() && x(We, !1) && gqn();
}
function eDt() {
  if (uc()) return GNt() && jdt();
  return ye();
}
function iHe() {
  return klt() && x("tengu_cobalt_plinth_fennel", !1) && eDt();
}
var Ke = "tengu_cobalt_plinth_comfrey";
function Can() {
  return BYe() && x(Ke, !1) && iHe();
}
function Elt(e) {
  return je.has(e) && uc() && x($e, !1) && MOo();
}
function XB(e) {
  return (ee().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function Y3(e, n = !1) {
  let frameRelay_2 = ee().frameRelay,
    o = Date.now() + I;
  if (frameRelay_2.declinedUntil.set(e, o), n) frameRelay_2.hopFailedUntil.set(e, o);else frameRelay_2.hopFailedUntil.delete(e);
}
function EOr(e) {
  return (ee().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function uzn(e) {
  return (ee().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function pX(e) {
  let frameRelay_3 = ee().frameRelay;
  frameRelay_3.declinedUntil.delete(e), frameRelay_3.servedUntil.set(e, Date.now() + I), frameRelay_3.vouched.add(e);
}
function aHe(e) {
  return ee().frameRelay.vouched.has(e);
}
function TOr(e) {
  ee().frameRelay.vouched.delete(e);
}
function L3e(e) {
  if (dle() || !(e === 401 || e === 403 || e === 404)) return !1;
  if (aHe(Uk)) {
    if (e !== 404) TOr(Uk);
    return !1;
  }
  return Y3(Uk), !0;
}
function Jge(e) {
  if (dle() || aHe(Uk)) return;
  if (e === void 0 || e === 499) Y3(Uk, !0);
}
var validateStatus = () => !0;
function M(family_2, n, status) {
  ee().frameRelay.tunnelDeclinedUntil.set(family_2, Date.now() + I), p("artifact_frame_relay", "tunnel_declined", {
    family: family_2,
    cause: c(n),
    status: status
  });
}
var weakSet_2 = new WeakSet();
function ae(e) {
  return typeof e === "object" && e !== null && weakSet_2.has(e);
}
async function pzn(e, n, r, o, s) {
  let frameTunnel = (ee().frameRelay.tunnelDeclinedUntil.get(s) ?? 0) > Date.now() ? void 0 : re();
  if (frameTunnel !== void 0) {
    let g = 0;
    try {
      let res = await k(e, n, r, {
        ...o,
        host: "frame",
        auth: "session-jwt",
        frameTunnel: frameTunnel,
        maxRedirects: 0
      });
      if (!res.ok || tte(res)) return {
        res: res,
        tunnelled: !0
      };
      if (g = res.status, g >= 500 || g === 499) return M(s, "hop_failed", g), {
        res: res,
        tunnelled: !0
      };
    } catch (error) {
      if (Fa(error)) throw error;
      if (!te(error)) {
        if (M(s, "threw", 0), typeof error === "object" && error !== null) weakSet_2.add(error);
        throw error;
      }
    }
    M(s, g === 0 ? "never_opened" : "refused", g);
  }
  return {
    res: await k(e, DOo(n), r, {
      ...o,
      host: "ccr-gateway",
      auth: "session-jwt",
      maxRedirects: 0
    }),
    tunnelled: !1
  };
}
function k(e, n, r, o) {
  switch (e) {
    case "GET":
      return Dt.get(n, o);
    case "POST":
      return Dt.post(n, r, o);
    case "DELETE":
      return Dt.delete(n, r, o);
  }
}
function se(e, n, body_3, o) {
  let {
      recoverOAuth401: recoverOAuth401,
      gzipBody: gzipBody,
      ...d
    } = o,
    f = {
      ...d,
      host: "frame",
      auth: "claude-ai-oauth",
      maxRedirects: 0,
      validateStatus: validateStatus,
      ...(recoverOAuth401 && !a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_REMOTE_SESSION_ID && {
        recoverOAuth401: recoverOAuth401
      })
    },
    {
      streamUpload: streamUpload
    } = d;
  if (e !== "POST" || gzipBody === void 0 || streamUpload === void 0) return k(e, n, body_3, f);
  return J({
    url: `${oDo()}${n}`,
    body: body_3,
    storageV5: d.storageV5,
    signal: d.signal,
    onEncoding: gzipBody.onEncoding,
    send: i => i === null ? k(e, n, body_3, f) : k(e, n, i, {
      ...f,
      headers: {
        ...f.headers,
        ...Z
      },
      streamUpload: {
        ...streamUpload,
        tailFloorMs: () => gzipBody.tailFloorMs
      }
    })
  });
}
function Xe() {
  return ipn() !== void 0 ? a.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}
function fzn() {
  let e = Xe();
  if (e) return Aut(`Bearer ${e}`);
  return sDo();
}
async function $Ro(credentials) {
  if (!apn()) return;
  try {
    await $i({
      credentials: credentials
    });
  } catch {}
}
function tte(e) {
  return e.ok && e.response.headers?.[Be] !== void 0;
}
function D(e) {
  return e.ok && !tte(e) && De.has(e.status);
}
function COr(e) {
  return {
    refused: D(e),
    vouched: tte(e) || e.ok && e.status < 300
  };
}
function tDt() {
  return K3() && !uc();
}
function _e(e, n, r) {
  let o = r !== "fallback",
    s = K3(),
    family_3 = s ? dzn(e, n) : null;
  if (s && pe(family_3)) return r === "only" && uc() ? {
    leg: "not-served",
    relaying: !1,
    family: null
  } : {
    leg: "direct",
    relaying: !1,
    family: null
  };
  let relaying = s;
  if (family_3 === null) return {
    leg: o && uc() && relaying ? "unsent" : "direct",
    relaying: relaying,
    family: family_3
  };
  if (XB(family_3) && (r === "fallback" || r === "bound" && !Re(family_3) || !uc() && EOr(family_3))) return {
    leg: "direct",
    relaying: relaying,
    family: family_3
  };
  return {
    leg: "relay",
    relaying: !0,
    family: family_3
  };
}
function Re(e) {
  return uc() && (e === null || !Elt(e));
}
function URo(e, n, r = "fallback") {
  return _e(e, n, r).leg === "relay" ? "relay" : "direct";
}
async function O(e, n, r, o, s = "fallback") {
  let u = s === "only" ? uc() : s === "bound" && Re(dzn(e, n)),
    {
      relayProbe: relayProbe,
      ...f
    } = o,
    g = async () => ({
      ...(await se(e, n, r, f)),
      route: "direct",
      fromFrame: !0
    }),
    i = _e(e, n, s),
    F = i.relaying && !uc(),
    T = (status_2, probed) => (p("artifact_frame_relay", "relay_only_unavailable", {
      ...(i.family !== null && {
        family: i.family
      }),
      status: status_2,
      probed: probed
    }), {
      ok: !1,
      reason: "relay-unavailable",
      status: status_2,
      route: "relay",
      fromFrame: !1
    });
  if (i.leg === "not-served") return {
    ok: !1,
    reason: "relay-not-served",
    status: 0,
    route: "relay",
    fromFrame: !1
  };
  if (i.leg !== "relay") return i.leg === "unsent" ? T(0, !1) : g();
  let {
      family: family_4
    } = i,
    C = !1,
    A = () => ({
      ...(F && {
        runner: !0
      }),
      ...(C && {
        tunnel: !0
      })
    }),
    {
      refreshOAuth: refreshOAuth,
      isBackground: isBackground,
      credentials: credentials_2,
      recoverOAuth401: recoverOAuth401_2,
      gzipBody: gzipBody_2,
      ...G
    } = f,
    N = async (l, h, P, w) => {
      let H = await pzn(l, h, P, {
        ...w,
        headers: He(w.headers),
        validateStatus: validateStatus
      }, family_4);
      return C = H.tunnelled, H.res;
    },
    B = async (l, probed_2) => {
      if (Y3(family_4, l === 0 || l >= 500), u) return T(l, probed_2);
      let direct_status;
      try {
        let w = await se(e, n, r, f);
        return direct_status = w.ok ? w.status : void 0, {
          ...w,
          route: "direct",
          fromFrame: !0,
          gatewayDeclined: l
        };
      } finally {
        p("artifact_frame_relay", "relay_unavailable", {
          family: family_4,
          status: l,
          probed: probed_2,
          ...(direct_status !== void 0 && {
            direct_status: direct_status
          }),
          ...A()
        });
      }
    };
  if (relayProbe !== void 0 && !uzn(family_4)) {
    let l;
    try {
      l = await N("GET", relayProbe, void 0, {
        signal: G.signal,
        timeout: timeout,
        maxContentLength: maxContentLength
      });
    } catch (error) {
      if (Fa(error)) throw error;
      return C = ae(error), B(0, !0);
    }
    if (!l.ok) return u ? T(0, !0) : g();
    if (D(l) || !tte(l) && (l.status >= 500 || l.status === 499)) return B(l.status, !0);
    if (!tte(l) && l.status >= 300) return u ? T(l.status, !0) : g();
    pX(family_4);
  }
  let R;
  try {
    R = await N(e, n, r, G);
  } catch (error) {
    if (!Fa(error)) {
      if (C = ae(error), _2(error) !== void 0) return B(0, !1);
      if (Y3(family_4, !0), m("artifact_frame_relay", "request_error", {
        family: family_4,
        ...A()
      }), typeof error === "object" && error !== null) weakSet.add(error);
    }
    throw error;
  }
  if (!R.ok) return u ? T(0, !1) : g();
  if (Ue(R)) return pX(family_4), p("artifact_frame_relay", "relay_policy_refused", {
    family: family_4,
    status: R.status,
    ...A()
  }), {
    ...R,
    route: "relay",
    fromFrame: !1,
    gatewayPolicy: "network-off"
  };
  if (D(R)) return B(R.status, !1);
  let upstream = tte(R),
    fromFrame = upstream || R.status < 300;
  if (fromFrame) pX(family_4), _("artifact_frame_relay", {
    family: family_4,
    status: R.status,
    upstream: upstream,
    ...A()
  });else if (R.status >= 500 || R.status === 499) {
    let l = s !== "fallback" && R.status === 503 ? R.response.headers?.["retry-after"] : void 0,
      h = oh(typeof l === "string" ? l : void 0);
    if (h !== void 0) return p("artifact_frame_relay", "relay_busy", {
      family: family_4,
      status: R.status,
      retry_after_ms: h,
      ...A()
    }), {
      ...R,
      route: "relay",
      fromFrame: !1,
      gatewayRetryAfterMs: h
    };
    Y3(family_4, !0), m("artifact_frame_relay", "relay_error", {
      family: family_4,
      status: R.status,
      ...A()
    });
  } else p("artifact_frame_relay", "relay_refused", {
    family: family_4,
    status: R.status,
    ...A()
  });
  return {
    ...R,
    route: "relay",
    fromFrame: fromFrame
  };
}
function cx(e) {
  return typeof e === "object" && e !== null && weakSet.has(e);
}
function N3e(e) {
  return e instanceof Error && /maxContentLength size of .* exceeded/.test(e.message);
}
var Ud = {
  get(e, n) {
    return O("GET", e, void 0, n);
  },
  post(e, n, r) {
    return O("POST", e, n, r);
  },
  postRelayOnly(e, n, r) {
    return O("POST", e, n, r, "only");
  },
  getRelayOnly(e, n) {
    return O("GET", e, void 0, n, "only");
  },
  postRelayBound(e, n, r) {
    return O("POST", e, n, r, "bound");
  },
  getRelayBound(e, n) {
    return O("GET", e, void 0, n, "bound");
  },
  deleteRelayOnly(e, n) {
    return O("DELETE", e, void 0, n, "only");
  }
};
var BRo = "[a-z][a-z_-]{0,31}",
  regExp = new RegExp("^[a-z][a-z_-]{0,31}$");
var ww = "live-doc",
  X3 = "index.html";
export { sHe, wlt, vlt, I3e, Ean, O3e, Ch, kOr, azn, NRo, HRo, q3, XV, FRo, M3e, D3e, lzn, PF, ZMt, Tan, czn, dzn, klt, K3, m0, dle, eDt, iHe, Can, Elt, XB, Y3, EOr, uzn, pX, aHe, TOr, L3e, Jge, pzn, fzn, $Ro, tte, COr, tDt, URo, cx, N3e, Ud, AS, fX, nDt, BRo, regExp as lHe, ww, X3 };