// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, Oj } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { s6i, qgt, Don, Ywo, a6i, l6i, tM, ul, Z5i, e8i, kIs, CVe, UIr, RVe, BIr, mie, jt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { tn, Tp, EC } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { nl } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { yM, L1t, cm } from "B:/~BUN/root/chunk-wthaftk0.js";
import { iAe } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { Vvr, lws, dws } from "B:/~BUN/root/chunk-17caj8fw.js";
import { a1i } from "B:/~BUN/root/chunk-3kdxvefh.js";
import { men, eNn, m1i } from "B:/~BUN/root/chunk-kpr2et3s.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
var we = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
  Ae = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function Oe(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let a = r.trim().toLowerCase();
    if (a === "") continue;
    let l = a.split(".");
    if (a.length > 253 || !l.every(item => we.test(item)) || l.every(item => Ae.test(item))) return;
    n ??= a;
  }
  return n;
}
function J(e) {
  if (yM(e) !== void 0) return !0;
  return Oj(e, n => {
    let r = k(n);
    return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== void 0 && iAe.has(r);
  }) !== void 0;
}
class Q {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new L1t(e.proxyUrl, {
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
var Pe = new W(() => new Q());
function ee() {
  if (!tn()) return;
  let CCR_AGENT_PROXY_FRAME_HOSTS = i.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (CCR_AGENT_PROXY_FRAME_HOSTS === void 0) return;
  let n = Pe.of(H().host),
    host = Oe(CCR_AGENT_PROXY_FRAME_HOSTS);
  if (host === void 0) {
    n.warnMalformedOnce(CCR_AGENT_PROXY_FRAME_HOSTS);
    return;
  }
  let a = a1i();
  if (a === void 0 || cm() !== void 0) return;
  return {
    host: host,
    agent: n.agentFor(a)
  };
}
var N = 60,
  ke = 180,
  xe = 32768,
  ve = 1048576,
  ne = 262144,
  Me = 1.25,
  re = {
    "Content-Encoding": "gzip",
    "Content-Type": "application/json"
  };
function smo(e) {
  if (e === void 0 || e <= 0) return N;
  return Math.min(ke, N + Math.floor(e / xe));
}
function Le(e, n) {
  return n * smo(e) <= e * N;
}
async function De({
  url: url,
  body: body,
  storageV5: storageV5
}) {
  let a = _(body),
    jsonChars = a.length,
    p = men(url, a, storageV5, "frame_publish");
  if (p === void 0) return {
    gzipped: null,
    encoding: void 0,
    jsonChars: jsonChars
  };
  let d = Buffer.byteLength(a),
    S = gzip_skip => ({
      gzipped: null,
      jsonChars: jsonChars,
      encoding: {
        json_bytes: d,
        wire_bytes: d,
        body_gzip: !1,
        gzip_skip: gzip_skip
      }
    });
  if (!p.gzip) return S(p.reason);
  let u = smo(d) / N;
  if (d >= ve) {
    let R = a.slice(0, ne),
      F = Buffer.byteLength(R) / (await Z5i(R)).length;
    if (F * Me < u) return t(`[artifact] publish body sent uncompressed: its first ${ne} characters compress only ${F.toFixed(2)}x, and a body of ${d} bytes needs ${u.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`), S("deadline_ratio");
  }
  let gzipped = await e8i(a);
  if (!Le(d, gzipped.length)) return t(`[artifact] publish body sent uncompressed: gzip only got ${d} bytes down to ${gzipped.length}, too little to finish inside the server's 60-second read limit for a compressed upload`), S("deadline_ratio");
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
function Be(e) {
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
    bodyText: async () => typeof e.data === "string" ? e.data : e.data === void 0 ? "" : _(e.data)
  };
}
async function oe({
  url: url_2,
  body: body_2,
  storageV5: storageV5_2,
  signal: signal,
  send: send,
  onEncoding: onEncoding
}) {
  if (!Be(body_2)) return send(null);
  let {
    gzipped: gzipped_2,
    encoding: encoding,
    jsonChars: u
  } = await De({
    url: url_2,
    body: body_2,
    storageV5: storageV5_2
  });
  if (encoding !== void 0) onEncoding?.(encoding);
  if (gzipped_2 === null || encoding === void 0) return send(null);
  eNn("frame_publish");
  let answer = await send(gzipped_2);
  return m1i({
    answer: answer,
    facts: facts,
    resendIdentity: () => (onEncoding?.({
      json_bytes: encoding.json_bytes,
      wire_bytes: encoding.json_bytes,
      body_gzip: !1,
      gzip_fallback_status: answer.ok ? answer.status : 0
    }), send(null)),
    aborted: () => signal?.aborted === !0,
    bodyChars: u,
    storageV5: storageV5_2,
    rollout: "frame_publish"
  });
}
function JJe(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}
var Ne = "x-ccr-relay-upstream",
  Ue = "x-ccr-sandbox-egress",
  Ye = new Set(["disabled", "restricted", "unrestricted"]);
function ows(e) {
  if (!e.ok || e.route !== "relay" || !dX(e)) return;
  let n = e.response.headers?.[Ue];
  return typeof n === "string" && Ye.has(n) ? n : void 0;
}
var Dq = "forbidden: CCR agent tokens";
function oee(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}
function sws(e) {
  return typeof e === "string" && e.trim() === "no version";
}
var Ie = new Set([401, 403, 404, 413]),
  ze = new Set(["organization network policy denies artifact storage reads for this session", "organization network policy could not be determined for this session; artifact storage reads denied"]);
var je = new Set(["organization network policy denies artifact storage writes for this session", "organization network policy could not be determined for this session; artifact storage writes denied"]);
function ae(e) {
  if (!e.ok || dX(e) || e.status !== 403 || typeof e.data !== "string") return !1;
  let n = e.data.trim();
  return ze.has(n) || eU() && je.has(n);
}
var We = "relay approval required: this change was not approved by the person for this session";
function se(e) {
  return e.ok && !dX(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === We;
}
var He = new Set(["organization network policy denies artifact reads for this session", "organization network policy could not be determined for this session"]),
  kmt = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function vmt(e, n) {
  return e === 403 && n !== void 0 && n.byteLength <= 256 && He.has(Buffer.from(n).toString("utf8").trim());
}
var Y = 300000,
  timeout_2 = 15000,
  maxContentLength = 65536,
  weakSet = new WeakSet(),
  weakMap = new WeakMap(),
  Xe = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;
function qe(e) {
  if (!e) return e;
  return Ro(e, (n, r) => Xe.test(r));
}
var Bvr = b("boot"),
  Lq = b("blobs"),
  uen = b("comments"),
  qLn = b("subscriptions"),
  ce = b("types"),
  pe = b("type_files"),
  YLn = b("type_create"),
  ye = b("db"),
  imo = b("sharing"),
  me = b("publish"),
  ge = b("frames_external"),
  Ke = b("artifacts_listing"),
  Ze = new Set([uen, qLn, Bvr, ge, ce, pe, YLn, ye, me, Lq, ...[]]),
  Je = "tengu_cobalt_plinth_burnet",
  Qe = [...E(Bvr, ["GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track"]), ...E(ge, ["GET /frames/external"]), ...E(Ke, ["GET /artifacts"]), ...E(me, ["POST /deploy/direct", "POST /deploy/prepare", "POST /upload", "GET /contract/latest", "GET /contract/{v}", "GET /contract/{v}/{file}", "GET /contract/{v}/prompt", "GET /read/{slug}"]), ...E(uen, ["GET /comments/{slug}", "POST /comments/{slug}/{thread}", "POST /comments/{slug}/{thread}/resolve", "POST /comments/{slug}/{thread}/summon-status"]), ...E(ye, ["POST /db/agent"]), ...E(ce, ["GET /types", "GET /types/{slug}"]), ...E(YLn, ["POST /types/{slug}/create"]), ...E(b("type_instances"), ["GET /types/{slug}/instances"]), ...E(pe, ["GET /types/{slug}/files/{a}", "GET /types/{slug}/files/{a}/{b}", "GET /types/{slug}/files/{a}/{b}/{c}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"]), ...E(qLn, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]), ...E(b("delete"), ["DELETE /{slug}"]), ...E(imo, ["GET /perm/{slug}", "PATCH /perm/{slug}"]), ...E(b("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]), ...[]].sort((itemA, itemB) => ie(itemA) - ie(itemB));
function E(family, n) {
  return n.map(item => {
    let [method, l] = item.split(" ");
    return {
      method: method,
      pattern: l.split("/"),
      family: family
    };
  });
}
function ie(e) {
  return U(e.pattern, n => n.startsWith("{"));
}
function wLt(e, n) {
  let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
  return Qe.find(item => item.method === e && item.pattern.length === r.length && item.pattern.every((item, index) => item.startsWith("{") ? r[index] !== "" : item === r[index]))?.family ?? null;
}
var amo = "tengu_cobalt_plinth_madder";
function ose() {
  if (!EC()) return !1;
  if (CVe() !== void 0) return !1;
  if (!v("tengu_cobalt_plinth_sorrel", !0)) return !1;
  if (!tn() && !v(amo, !0)) return !1;
  return s6i();
}
function eU() {
  return q();
}
function xL(e = null) {
  return ose() && !Re(e);
}
function Re(e) {
  if (!qgt() && !_e()) return !1;
  if (e !== null && vLt(e)) return !1;
  let frameRelay = te().frameRelay;
  if (!frameRelay.botContextNoted) frameRelay.botContextNoted = !0, c("artifact_frame_relay", "bot_context_not_served", {
    hosted: tn()
  });
  return !0;
}
function sse() {
  return tn() && ose();
}
var et = "tengu_cobalt_plinth_medlar";
function _e() {
  return Tp() && v(et, !1) && Ywo();
}
function kLt() {
  if (tn()) return qgt() && Don();
  return _e();
}
function QJe() {
  return EC() && v("tengu_cobalt_plinth_fennel", !1) && kLt();
}
var tt = "tengu_cobalt_plinth_comfrey";
function XLn() {
  return Tp() && v(tt, !1) && QJe();
}
function vLt(e) {
  return Ze.has(e) && tn() && v(Je, !1) && a6i();
}
function ZW(e) {
  return (te().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function ise(e, n = !1) {
  let frameRelay_2 = te().frameRelay,
    a = Date.now() + Y;
  if (frameRelay_2.declinedUntil.set(e, a), n) frameRelay_2.hopFailedUntil.set(e, a);else frameRelay_2.hopFailedUntil.delete(e);
}
function lmo(e) {
  return (te().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function jvr(e) {
  return (te().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function yue(e) {
  let frameRelay_3 = te().frameRelay;
  frameRelay_3.declinedUntil.delete(e), frameRelay_3.servedUntil.set(e, Date.now() + Y), frameRelay_3.vouched.add(e);
}
function ZJe(e) {
  return te().frameRelay.vouched.has(e);
}
function dmo(e) {
  te().frameRelay.vouched.delete(e);
}
function nt(e) {
  return (te().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now();
}
function JLn(e) {
  return e.ok && e.status === 403 && cmo(e.data);
}
function cmo(e) {
  return typeof e === "string" && e.trimStart().startsWith(Dq);
}
function le(e, n) {
  if (!n.ok) return;
  let {
    directRefusedUntil: directRefusedUntil
  } = te().frameRelay;
  if (JLn(n)) directRefusedUntil.set(e, Date.now() + Y);else directRefusedUntil.delete(e);
}
function Emt(e) {
  if (sse() || !(e === 401 || e === 403 || e === 404)) return !1;
  if (ZJe(tM)) {
    if (e !== 404) dmo(tM);
    return !1;
  }
  return ise(tM), !0;
}
function CLe(e) {
  if (sse() || ZJe(tM)) return;
  if (e === void 0 || e === 499) ise(tM, !0);
}
var validateStatus = () => !0;
function I(family_2, n, status) {
  te().frameRelay.tunnelDeclinedUntil.set(family_2, Date.now() + Y), c("artifact_frame_relay", "tunnel_declined", {
    family: family_2,
    cause: f(n),
    status: status
  });
}
var weakSet_2 = new WeakSet();
function ue(e) {
  return typeof e === "object" && e !== null && weakSet_2.has(e);
}
async function Wvr(e, n, r, a, l) {
  let frameTunnel = (te().frameRelay.tunnelDeclinedUntil.get(l) ?? 0) > Date.now() ? void 0 : ee();
  if (frameTunnel !== void 0) {
    let u = 0;
    try {
      let res = await D(e, n, r, {
        ...a,
        host: "frame",
        auth: "session-jwt",
        frameTunnel: frameTunnel,
        maxRedirects: 0
      });
      if (!res.ok || dX(res)) return {
        res: res,
        tunnelled: !0
      };
      if (u = res.status, u >= 500 || u === 499) return I(l, "hop_failed", u), {
        res: res,
        tunnelled: !0
      };
    } catch (error) {
      if (nl(error)) throw error;
      if (!J(error)) {
        if (I(l, "threw", 0), typeof error === "object" && error !== null) weakSet_2.add(error);
        throw error;
      }
    }
    I(l, u === 0 ? "never_opened" : "refused", u);
  }
  return {
    res: await D(e, l6i(n), r, {
      ...a,
      host: "ccr-gateway",
      auth: "session-jwt",
      maxRedirects: 0
    }),
    tunnelled: !1
  };
}
function D(e, n, r, a) {
  switch (e) {
    case "GET":
      return jt.get(n, a);
    case "POST":
      return jt.post(n, r, a);
    case "PATCH":
      return jt.patch(n, r, a);
    case "DELETE":
      return jt.delete(n, r, a);
  }
}
async function rt(e, n) {
  let mcpWire = "answered";
  try {
    let a = await e();
    if (a !== null) return {
      ...a,
      mcpWire: mcpWire
    };
    return mcpWire = "stood_aside", {
      ...(await n()),
      mcpWire: mcpWire
    };
  } catch (error) {
    if (typeof error === "object" && error !== null) weakMap.set(error, mcpWire);
    throw error;
  }
}
function Se(e, n, body_3, a, l = !0) {
  if (eU()) throw Error("frameApi: this session may not make the direct call");
  let {
      recoverOAuth401: recoverOAuth401,
      gzipBody: gzipBody,
      httpOnly: httpOnly,
      ...u
    } = a,
    s = {
      ...u,
      host: "frame",
      auth: "claude-ai-oauth",
      maxRedirects: 0,
      validateStatus: validateStatus,
      ...(recoverOAuth401 && !i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_REMOTE_SESSION_ID && {
        recoverOAuth401: recoverOAuth401
      })
    },
    R = l && !httpOnly ? lws(e, n) : null;
  if (R) return rt(() => dws(R, n, body_3, s, gzipBody?.onEncoding), () => Se(e, n, body_3, a, !1));
  let {
    streamUpload: streamUpload
  } = u;
  return Vvr({
    isRead: e === "GET",
    wire: "http",
    signal: u.signal,
    timeoutMs: s.timeout ?? kIs,
    send: (freshConnection, timeout) => {
      let w = {
        ...s,
        ...(freshConnection && {
          freshConnection: freshConnection
        }),
        ...(timeout !== void 0 && {
          timeout: timeout
        })
      };
      if (e !== "POST" || gzipBody === void 0 || streamUpload === void 0) return D(e, n, body_3, w);
      return oe({
        url: `${UIr()}${n}`,
        body: body_3,
        storageV5: u.storageV5,
        signal: u.signal,
        onEncoding: gzipBody.onEncoding,
        send: y => y === null ? D(e, n, body_3, w) : D(e, n, y, {
          ...w,
          headers: {
            ...w.headers,
            ...re
          },
          streamUpload: {
            ...streamUpload,
            tailFloorMs: () => gzipBody.tailFloorMs
          }
        })
      });
    }
  });
}
function ot() {
  return CVe() !== void 0 ? i.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}
function zvr() {
  let e = ot();
  if (e) return RVe(`Bearer ${e}`);
  return BIr();
}
async function iws(credentials) {
  if (!mie()) return;
  try {
    await ul({
      credentials: credentials
    });
  } catch {}
}
function dX(e) {
  return e.ok && e.response.headers?.[Ne] !== void 0;
}
function z(e) {
  return e.ok && !dX(e) && Ie.has(e.status);
}
function umo(e) {
  return {
    refused: z(e),
    vouched: dX(e) || e.ok && e.status < 300
  };
}
function fen() {
  return ose() && !tn();
}
function he(e, n, r, a = !1) {
  let l = r !== "fallback",
    p = r === "strict" && EC(),
    d = eU(),
    S = ose(),
    family_3 = S ? wLt(e, n) : null;
  if (S && Re(family_3)) return d || p || r === "only" && tn() ? {
    leg: "not-served",
    relaying: !1,
    family: null
  } : {
    leg: "direct",
    relaying: !1,
    family: null
  };
  let relaying = S;
  if (family_3 === null) return {
    leg: d || p || l && tn() && relaying ? "unsent" : "direct",
    relaying: relaying,
    family: family_3
  };
  let R = (r === "fallback" || r === "bound" && !Ee(family_3)) && !(a && tn() && nt(family_3));
  if (!d && ZW(family_3) && (R || !tn() && !p && lmo(family_3))) return {
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
function Ee(e) {
  return eU() || tn() && (e === null || !vLt(e));
}
function at(e, n) {
  switch (e) {
    case "strict":
      return EC();
    case "only":
      return tn();
    case "bound":
      return Ee(n);
    case "fallback":
      return !1;
  }
}
function QLn(e, n, r = "fallback") {
  return eU() || he(e, n, r).leg === "relay" ? "relay" : "direct";
}
async function A(e, n, r, a, l = "fallback") {
  let p = eU() || at(l, wLt(e, n)),
    {
      relayProbe: relayProbe,
      relayOnCredentialRefusal: relayOnCredentialRefusal,
      ...u
    } = a,
    s = async () => ({
      ...(await Se(e, n, r, u)),
      route: "direct",
      fromFrame: !0
    }),
    R = he(e, n, l, relayOnCredentialRefusal),
    F = R.relaying && !tn(),
    M = (reason, status_2) => l === "fallback" ? {
      ok: !1,
      reason: "no-auth",
      detail: `its artifact connection did not carry the request${status_2 ? ` (HTTP ${status_2})` : ""}, so nothing was sent${reason === "relay-unavailable" ? "; one retry is safe" : ""}`,
      route: "relay",
      fromFrame: !1
    } : {
      ok: !1,
      reason: reason,
      status: status_2,
      route: "relay",
      fromFrame: !1
    },
    O = (status_3, probed) => (c("artifact_frame_relay", "relay_only_unavailable", {
      ...(R.family !== null && {
        family: R.family
      }),
      status: status_3,
      probed: probed,
      ...(F && {
        runner: !0
      })
    }), M("relay-unavailable", status_3));
  if (R.leg === "not-served") return M("relay-not-served", 0);
  if (R.leg === "unsent") return O(0, !1);
  let w, family_4;
  if (R.leg === "relay") family_4 = R.family;else {
    let o = await s();
    if (R.family === null || !tn()) return o;
    if (le(R.family, o), !o.ok || !JLn(o)) return o;
    if (c("artifact_frame_relay", "direct_refused", {
      family: R.family,
      status: o.status,
      reoffered: relayOnCredentialRefusal === !0
    }), !relayOnCredentialRefusal) return o;
    family_4 = R.family, w = o;
  }
  let B = !1,
    P = () => ({
      ...(F && {
        runner: !0
      }),
      ...(B && {
        tunnel: !0
      }),
      ...(w !== void 0 && {
        reoffered: !0
      })
    }),
    C = async () => {
      if (w !== void 0) return w;
      let o = await s();
      if (!F) {
        if (le(family_4, o), o.ok && JLn(o)) c("artifact_frame_relay", "direct_refused", {
          family: family_4,
          status: o.status,
          reoffered: !1
        });
      }
      return o;
    },
    {
      refreshOAuth: refreshOAuth,
      isBackground: isBackground,
      credentials: credentials_2,
      recoverOAuth401: recoverOAuth401_2,
      gzipBody: gzipBody_2,
      httpOnly: httpOnly_2,
      ...j
    } = u,
    V = async (o, h, L, x) => {
      let Z = await Wvr(o, h, L, {
        ...x,
        headers: qe(x.headers),
        validateStatus: validateStatus
      }, family_4);
      return B = Z.tunnelled, Z.res;
    },
    G = async (o, probed_2) => {
      if (ise(family_4, o === 0 || o >= 500), p) return O(o, probed_2);
      let direct_status;
      try {
        let x = await C();
        return direct_status = x.ok ? x.status : void 0, {
          ...x,
          gatewayDeclined: o
        };
      } finally {
        c("artifact_frame_relay", "relay_unavailable", {
          family: family_4,
          status: o,
          probed: probed_2,
          ...(direct_status !== void 0 && {
            direct_status: direct_status
          }),
          ...P()
        });
      }
    };
  if (relayProbe !== void 0 && !jvr(family_4)) {
    let o;
    try {
      o = await V("GET", relayProbe, void 0, {
        signal: j.signal,
        timeout: timeout_2,
        maxContentLength: maxContentLength
      });
    } catch (error) {
      if (nl(error)) throw error;
      return B = ue(error), G(0, !0);
    }
    if (!o.ok) return p ? O(0, !0) : C();
    if (ae(o)) c("artifact_frame_relay", "relay_policy_refused", {
      family: family_4,
      status: o.status,
      probed: !0,
      ...P()
    });else if (z(o) || !dX(o) && (o.status >= 500 || o.status === 499)) return G(o.status, !0);else if (!dX(o) && o.status >= 300) return p ? O(o.status, !0) : C();
    yue(family_4);
  }
  let T;
  try {
    T = await V(e, n, r, j);
  } catch (error) {
    if (!nl(error)) {
      if (B = ue(error), yM(error) !== void 0) return G(0, !1);
      if (ise(family_4, !0), m("artifact_frame_relay", "request_error", {
        family: family_4,
        ...P()
      }), typeof error === "object" && error !== null) weakSet.add(error);
    }
    throw error;
  }
  if (!T.ok) return p ? O(0, !1) : C();
  if (ae(T) || se(T)) {
    let o = se(T);
    return yue(family_4), c("artifact_frame_relay", o ? "relay_approval_refused" : "relay_policy_refused", {
      family: family_4,
      status: T.status,
      ...P()
    }), {
      ...T,
      route: "relay",
      fromFrame: !1,
      gatewayPolicy: o ? "unapproved" : "network-off"
    };
  }
  if (z(T)) return G(T.status, !1);
  let upstream = dX(T),
    fromFrame = upstream || T.status < 300;
  if (fromFrame) yue(family_4), g("artifact_frame_relay", {
    family: family_4,
    status: T.status,
    upstream: upstream,
    ...P()
  });else if (T.status >= 500 || T.status === 499) {
    let o = l !== "fallback" && T.status === 503 ? T.response.headers?.["retry-after"] : void 0,
      h = y_(typeof o === "string" ? o : void 0);
    if (h !== void 0) return c("artifact_frame_relay", "relay_busy", {
      family: family_4,
      status: T.status,
      retry_after_ms: h,
      ...P()
    }), {
      ...T,
      route: "relay",
      fromFrame: !1,
      gatewayRetryAfterMs: h
    };
    ise(family_4, !0), m("artifact_frame_relay", "relay_error", {
      family: family_4,
      status: T.status,
      ...P()
    });
  } else c("artifact_frame_relay", "relay_refused", {
    family: family_4,
    status: T.status,
    ...P()
  });
  return {
    ...T,
    route: "relay",
    fromFrame: fromFrame
  };
}
function ZP(e) {
  return typeof e === "object" && e !== null && weakSet.has(e);
}
function Fe(e) {
  switch (e) {
    case "answered":
      return b("mcp");
    case "stood_aside":
      return b("http_fallback");
    case void 0:
      return b("http");
  }
}
function _ue(e) {
  return e.route === "relay" ? b("relay") : Fe(e.mcpWire);
}
function C_e(e) {
  if (ZP(e)) return b("relay");
  return Fe(typeof e === "object" && e !== null ? weakMap.get(e) : void 0);
}
var Au = {
  get(e, n) {
    return A("GET", e, void 0, n);
  },
  post(e, n, r) {
    return A("POST", e, n, r);
  },
  postRelayOnly(e, n, r) {
    return A("POST", e, n, r, "only");
  },
  postRelayStrict(e, n, r) {
    return A("POST", e, n, r, "strict");
  },
  getRelayOnly(e, n) {
    return A("GET", e, void 0, n, "only");
  },
  postRelayBound(e, n, r) {
    return A("POST", e, n, r, "bound");
  },
  getRelayBound(e, n) {
    return A("GET", e, void 0, n, "bound");
  },
  patchRelayOnly(e, n, r) {
    return A("PATCH", e, n, r, "only");
  },
  deleteRelayOnly(e, n) {
    return A("DELETE", e, void 0, n, "only");
  }
};
export { smo, JJe, ows, Dq, oee, sws, kmt, vmt, Bvr, Lq, uen, qLn, YLn, imo, wLt, amo, ose, eU, xL, sse, kLt, QJe, XLn, vLt, ZW, ise, lmo, jvr, yue, ZJe, dmo, JLn, cmo, Emt, CLe, Wvr, zvr, iws, dX, umo, fen, QLn, ZP, _ue, C_e, Au };