// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { R, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t, Ri, ps } from "B:/~BUN/root/chunk-2pp12te6.js";
import { W$ } from "B:/~BUN/root/chunk-6sbka0ts.js";
import { Byt, F$t, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { mt, Ac } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { oS } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { ln, LBt, Np, E_, mZi } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Q1 } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { MX as product, Zue as attach, qCe } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { Y2 } from "B:/~BUN/root/chunk-78494p3w.js";
import { xd } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { Aa, BLe } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Ix, V6, F2, UZ } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { GTe, Ogs, Vce } from "B:/~BUN/root/chunk-6bx54the.js";
import { bBi, bLn, eSs, bLe, wBi, nSs, kBi, vBi } from "B:/~BUN/root/chunk-wm0axmjp.js";
import { n5e, c7o, Zir, tmi, ear, r5e, tar, nar, rmi, g6t, smi, imi } from "B:/~BUN/root/chunk-6c65wqph.js";
import { PDn, zTe } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { Jce } from "B:/~BUN/root/chunk-5m83sh3a.js";
import { t5e } from "B:/~BUN/root/chunk-82fjtvrs.js";
import { tor, _ui, bui, P8r, Sui, I8r, I8o, wui } from "B:/~BUN/root/chunk-1g5x5z8w.js";
import { jM } from "B:/~BUN/root/chunk-9fbg6p79.js";
import { bvn, Jfi, mAt, qsr, Qfi } from "B:/~BUN/root/chunk-wabgka6b.js";
import { sW } from "B:/~BUN/root/chunk-5zpqxean.js";
import { KIe, Gpi, MAt, Mlt, Kpi, qpi, Ypi, Xpi, DAt, LAt } from "B:/~BUN/root/chunk-9hkf26x4.js";
import { o5e, Llt, ede, Cve, MEn, umi } from "B:/~BUN/root/chunk-bf2nn51k.js";
import { yw } from "B:/~BUN/root/chunk-x0zaah42.js";
import { Av } from "B:/~BUN/root/chunk-zx0hhrva.js";
import { Ki } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { K4 } from "B:/~BUN/root/chunk-2631cdbp.js";
import { o, E, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
async function De(e, n, {
  call: call,
  put: put,
  refused: refused,
  signal: signal
}) {
  if (signal.aborted) return {
    refused: {
      code: "canceled",
      called: !1,
      delivered: [],
      told: !1
    }
  };
  let f = n.map((item, index) => eSs(index)),
    v = wBi(e, n),
    result;
  try {
    result = await call({
      arguments: v
    });
  } catch (A) {
    if (A instanceof oS) return {
      signIn: A,
      delivered: []
    };
    return {
      refused: {
        code: signal.aborted ? "canceled" : A instanceof bLe ? "upload_connection_changed" : "upload_call_failed",
        called: A instanceof bLe ? !1 : "unknown",
        delivered: [],
        told: !1
      }
    };
  }
  let _ = nSs(result, f);
  if (_ === void 0) return {
    result: result
  };
  let delivered = [],
    s = (A, told) => ({
      refused: {
        ...A,
        called: !0,
        delivered: delivered,
        told: told
      }
    });
  if ("malformed" in _) return s({
    code: `upload_answer_${_.malformed}`
  }, !1);
  let l;
  for (let [A, F] of _.targets.entries()) {
    let code = refused(F) ?? (Ie(F) ? "upload_target_expired" : void 0);
    if (code !== void 0) {
      l = {
        code: code,
        path: n[A].path
      };
      break;
    }
  }
  let C = [];
  for (let [A, F] of n.entries()) {
    if (l === void 0 && signal.aborted) l = {
      code: "canceled"
    };
    let O = _.targets[A];
    if (l === void 0 && Ie(O)) l = {
      code: "upload_target_expired",
      path: F.path
    };
    let M = l === void 0 ? await put(F, O, signal).catch(() => ({
      code: signal.aborted ? "canceled" : "put_threw"
    })) : {
      code: "not_sent"
    };
    if (M === void 0) delivered.push(F.path);else if (l === void 0) l = {
      ...M,
      path: F.path
    };
    C.push({
      fileId: f[A],
      completed: M === void 0
    });
  }
  let x = async () => call({
    arguments: v,
    requestState: _.requestState,
    inputResponses: vBi(C)
  });
  if (l !== void 0) {
    let A = !1;
    if (!signal.aborted) try {
      await x(), A = !0;
    } catch {}
    return s(l, A);
  }
  let result_2;
  try {
    result_2 = await x();
  } catch (A) {
    if (A instanceof oS) return {
      signIn: A,
      delivered: delivered
    };
    return s({
      code: signal.aborted ? "canceled" : A instanceof bLe ? "upload_connection_changed" : "upload_repeat_failed"
    }, !1);
  }
  if (nSs(result_2, f) === void 0) return {
    result: result_2
  };
  return s({
    code: kBi(result_2) ? "upload_asked_twice" : "upload_answer_after_files"
  }, !0);
}
function Ie(e) {
  return e.expiresAtMs !== void 0 && Date.now() > e.expiresAtMs;
}
var Ct = 128;
function bt(e) {
  return LBt(e) && e.length <= Ct;
}
var policy = "allow_connector_file_uploads";
function Ne(e) {
  if (!bt(e)) return;
  let {
      MCP_PROXY_URL: MCP_PROXY_URL,
      MCP_PROXY_PATH: MCP_PROXY_PATH
    } = nn(),
    h = MCP_PROXY_PATH.replace("{server_id}", e);
  return {
    host: "mcp-proxy",
    pathPrefix: `${h.replace(/\/$/, "")}${bLn}`,
    mcpAddress: `${MCP_PROXY_URL}${h}`,
    policy: policy
  };
}
var maxFileBytes_2 = 104857600;
import { createHash as Ye } from "crypto";
import { basename as Xt, join as Kt, sep as Yt } from "path";
function Le(e) {
  if (!it(e) || !it(e.error) || !it(e.error.details)) return;
  let {
    error_code: n,
    reason: reason,
    may_have_arrived: h,
    limit_bytes: a,
    answered_by: y
  } = e.error.details;
  if (typeof n !== "string" || n === "") return;
  return {
    code: n,
    ...(typeof reason === "string" && {
      reason: reason
    }),
    ...(typeof h === "boolean" && {
      mayHaveArrived: h
    }),
    ...(typeof a === "number" && Number.isSafeInteger(a) && a > 0 && {
      limitBytes: a
    }),
    ...(typeof y === "string" && {
      answeredBy: y
    })
  };
}
function le(e) {
  return it(e) && it(e.error) && typeof e.error.type === "string" ? e.error.type : void 0;
}
function ue(e) {
  if (!it(e) || !it(e.error) || !it(e.error.details)) return;
  let may_have_arrived = e.error.details.may_have_arrived;
  return typeof may_have_arrived === "boolean" ? may_have_arrived : void 0;
}
function Me(e, n, r) {
  if (typeof r === "string" && r !== "" || !it(n) || n.type !== "error" || ue(n) !== !1) return;
  let h = le(n);
  if (e === 401 && h === "authentication_error") return "not_signed_in";
  if (e === 400 && h === "invalid_request_error" || e === 403 && h === "permission_error") return "refused";
  return;
}
function Be(e, n) {
  return !(typeof n === "string" && n !== "") && it(e) && e.type === "error" && it(e.error) && e.error.type === "authentication_error" && !it(e.error.details);
}
function ze(e) {
  return !(it(e) && e.type === "error" && le(e) === "authentication_error");
}
var ee = "x-upload-token",
  kt = new Set([ee, "content-type"]),
  St = /^[A-Za-z0-9_-]{43}$/,
  we = "[file inputs] a file was not sent: the upload target in the connector's answer was refused, because ";
class He {
  #e;
  constructor(e) {
    this.#e = e;
  }
  reveal() {
    return this.#e;
  }
  toString() {
    return "[upload token hidden]";
  }
  toJSON() {
    return this.toString();
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
var $t = 4096,
  timeout = 120000,
  vt = 720000,
  Rt = 4096,
  At = 65536,
  Et = p(() => u({
    sha256: o(),
    size: E()
  })),
  Pt = p(() => u({
    status: T("received")
  })),
  Ot = {
    400: "put_hash_mismatch",
    403: "put_refused",
    409: "put_already_used",
    410: "put_expired",
    413: "put_size_mismatch",
    429: "put_busy",
    503: "put_busy"
  },
  Ut = "10160bc565715622836566a1f58ccbdda18e558b444bf8fd048183b989b8fdfc",
  xt = new Map([["uploads_not_available", "put_not_available_for_request"], ["connector_not_found", "put_connector_not_allowed"], ["connector_not_listed", "put_connector_not_allowed"], ["connector_not_eligible", "put_connector_not_allowed"], ["connector_locked", "put_connector_not_allowed"], ["connector_not_visible", "put_connector_not_allowed"], ["connector_not_verified", "put_connector_not_verified"], ["target_host_not_listed", "put_target_refused"], ["target_not_allowed", "put_target_refused"], ["bad_request", "put_request_refused"], ["length_required", "put_request_refused"], ["caller_not_allowed", "put_request_refused"], ["size_mismatch", "put_size_mismatch"], ["hash_mismatch", "put_hash_mismatch"], ["body_incomplete", "put_incomplete"], ["upload_too_slow", "put_too_slow"], ["upload_not_found", "put_not_found"], ["upload_in_progress", "put_outcome_unknown"], ["record_unreadable", "put_refused"], ["busy", "put_busy"], ["send_failed", "put_storage_failed"]]),
  Ft = new Map([["uploads_not_available", new Map([[void 0, "put_feature_off"], ["organization_setting", "put_org_not_allowed"], ["region", "put_region_not_allowed"], ["ip_allowlist", "put_ip_allowlist_not_allowed"], ["admin_limits", "put_admin_limits_not_allowed"], ["cloud_session", "put_cloud_session_not_allowed"], ["bound_credential", "put_bound_sign_in_not_allowed"], ["sign_in_not_accepted", "put_sign_in_not_accepted"]])], ["unavailable", new Map([["connector_changed", "put_connector_changed"], ["listing_changed", "put_connector_changed"], ["link_ran_out", "put_link_ran_out"]])], ["target_not_allowed", new Map([["file_digest_missing", "put_refused"]])], ["bad_request", new Map([["client_address_missing", "put_refused"]])], ["send_failed", new Map([["storage_address_refused", "put_target_refused"], ["request_build", "put_service_fault"], ["spool_read", "put_service_fault"], ["spool_check", "put_service_fault"], ["service_fault", "put_service_fault"]])]]),
  It = new Map([["oauth_scope_insufficient", "put_account_not_allowed"], ["organization_banned", "put_account_not_allowed"], ["hybrid_org_surface_unavailable", "put_account_not_allowed"]]),
  Dt = {
    not_signed_in: "put_login_refused",
    refused: "put_sign_in_refused"
  },
  Nt = {
    408: "put_too_slow",
    409: "put_outcome_unknown",
    411: "put_failed",
    429: "put_busy",
    503: "put_busy"
  };
function Ce(e) {
  return e.auth === "none" ? {
    auth: "none"
  } : {
    auth: e.auth,
    host: e.host
  };
}
var Lt = 2,
  ye = 3,
  je = 8388608,
  Mt = new Map([["ECONNREFUSED", "connect"], ["ENOTFOUND", "getaddrinfo"], ["EAI_AGAIN", "getaddrinfo"]]),
  Bt = 2000,
  zt = 1e4,
  Wt = 60000,
  qt = /^[A-Za-z][A-Za-z0-9+.-]*:\/\/[A-Za-z0-9.-]+(?::[1-9][0-9]*)?$/;
function ce(e, n, r, h) {
  if (r.auth === "none") {
    if (!("url" in e)) return "put_url_refused";
    let baseUrl = F$t(e.url),
      url = baseUrl === void 0 ? void 0 : new URL(e.url);
    return url === void 0 || url.search !== "" || url.hash !== "" || !n.endsWith("/") || !url.pathname.startsWith(n) || !/^[A-Za-z0-9_-]{1,256}$/.test(url.pathname.slice(n.length)) ? "put_url_refused" : {
      url: url,
      baseUrl: baseUrl,
      token: void 0
    };
  }
  if (r.auth !== "claude-ai-oauth" || r.host !== "api" && r.host !== "mcp-proxy") return t("[file inputs] a file was not sent: a fault in Claude Code itself, not in your sign-in or the connector's answer. The code that asked for this upload did not give the claude.ai login together with one of the two hosts uploads go to (api, mcp-proxy).", {
    level: "error"
  }), "put_client_fault";
  if (!/^\/(?![/\\])/.test(n)) return t("[file inputs] a file was not sent: a fault in Claude Code itself, not in your sign-in or the connector's answer. The code that asked for this upload gave an upload path that does not begin with exactly one slash; a backslash counts as a slash, since a URL parser reads it as one.", {
    level: "error"
  }), "put_client_fault";
  let a;
  try {
    a = new URL(r.host === "api" ? nn().BASE_API_URL : nn().MCP_PROXY_URL).origin;
  } catch (error) {
    return t(`[file inputs] a file was not sent: Claude Code could not read the host that uploads are sent to from its own configuration: ${d(error)}`, {
      level: "error"
    }), "put_client_fault";
  }
  if (r.host === "mcp-proxy" && nn().OAUTH_FILE_SUFFIX === "-custom-oauth") return t("[file inputs] a file was not sent: this upload goes through the MCP proxy, and with CLAUDE_CODE_CUSTOM_OAUTH_URL set the MCP proxy is still the one this build was made with, not part of the deployment the sign-in is with. Not a fault in your sign-in or the connector's answer.", {
    level: "error"
  }), "put_client_fault";
  let y;
  if ("url" in e) y = e.url;else if (e.path !== bLn) return t(`${we}its path is not "${bLn}"`, {
    level: "error"
  }), "put_url_refused";else if (h === void 0) return t("[file inputs] a file was not sent: a fault in Claude Code itself, not in your sign-in or the connector's answer. The connector gave a path for the upload, and the code that asked for this upload gave no MCP address to add it to.", {
    level: "error"
  }), "put_client_fault";else y = `${h}${bLn}`;
  let url_2 = URL.canParse(y) ? new URL(y) : void 0,
    v = url_2 === void 0 ? "its address is not a URL" : url_2.origin !== a ? "its address is not on the origin that uploads are sent to (scheme, host and port)" : url_2.username !== "" || url_2.password !== "" ? "its address has a user name or a password before the host" : url_2.search !== "" || url_2.hash !== "" || /[?#]/.test(y) ? "its address has a query or a fragment" : url_2.pathname !== n ? "its address's path is not this connector's upload path" : !y.endsWith(n) || !qt.test(y.slice(0, -n.length)) ? 'its address holds something a URL parser drops or rewrites, for example a space or a tab, a percent-encoded or non-ASCII letter in the host, an empty user part or port, a port with a zero before it, a backslash, or a "/../" step' : void 0;
  if (url_2 === void 0 || v !== void 0) return t(`${we}${v}`, {
    level: "error"
  }), "put_url_refused";
  let S = Object.keys(e.headers),
    [_] = S,
    b = _ === void 0 ? void 0 : e.headers[_],
    s = _ === void 0 ? `it has no ${ee} header` : S.length > 1 ? `it has more than one header; it may have only ${ee}` : _.replace(/[A-Z]/g, l => l.toLowerCase()) !== ee ? `its only header is not ${ee}` : typeof b !== "string" || !St.test(b) ? `its ${ee} value is not 43 characters of A-Z, a-z, 0-9, "_" and "-"` : void 0;
  if (typeof b !== "string" || s !== void 0) return t(`${we}${s}`, {
    level: "error"
  }), "put_header_refused";
  return {
    url: url_2,
    baseUrl: void 0,
    token: new He(b)
  };
}
async function be(e, body, r, h, signal_2, y) {
  let signIn = Ce(y),
    v = signIn.auth !== "none",
    S = vt,
    streamed = body instanceof Byt,
    length = body instanceof Byt ? body.byteLength : body.length,
    s = streamed ? AbortSignal.timeout(S) : void 0,
    waitSignal = s ? AbortSignal.any([signal_2, s]) : signal_2,
    C = v && length > je ? 1 : Lt,
    x = Date.now(),
    U = !1,
    A = !1,
    F = !1,
    O,
    M = ce(e, h, signIn);
  if (typeof M === "string") return M;
  let {
      url: url_3,
      baseUrl: baseUrl_2,
      token: token
    } = M,
    headers = {
      "content-type": "application/octet-stream"
    };
  if (token === void 0) for (let [N, w] of Object.entries(e.headers)) {
    if (!kt.has(N.toLowerCase()) || w.length > $t || /[^\x20-\x7e]/.test(w)) return "put_header_refused";
    headers[N.toLowerCase()] = w;
  }
  let I = {
    url: url_3,
    body: body,
    length: length,
    streamed: streamed,
    signIn: signIn,
    baseUrl: baseUrl_2,
    headers: headers,
    token: token,
    signal: signal_2,
    waitSignal: waitSignal,
    requests: 0,
    settled: 0,
    handedOver: !1,
    wholeBeforeUnvouched401: !1,
    renewed: !1
  };
  try {
    for (let N = 0;; N++) {
      I.handedOver = !1;
      let w,
        settled = I.settled;
      try {
        w = await We(I, !1);
      } catch (error) {
        let Fe = qe(error);
        if (streamed && length === 0 && !Fe && (Q1(error) || (signal_2.aborted || s?.aborted === !0) && I.settled > settled)) F = !0;
        if (!v || !Q1(error) || signal_2.aborted || s?.aborted === !0 || I.requests >= ye || length > je && I.requests > 1) throw error;
        U = !0, A = I.wholeBeforeUnvouched401 || !Fe && (I.handedOver || !streamed || length === 0), I.handedOver = !1, w = await We(I, !0);
      }
      if (U && A && !(w.ok && w.status === 200)) return "put_outcome_unknown";
      if (v && I.wholeBeforeUnvouched401 && !(w.ok && w.status === 200)) return "put_outcome_unknown";
      if (!w.ok) return w.reason === "essential-traffic-only" ? "essential_traffic" : w.reason === "no-auth" ? "put_no_login" : "egress_blocked";
      if (w.status === 200 && v) return Pt().safeParse(w.data).success ? void 0 : "put_outcome_unknown";
      if (w.status === 200) {
        let V = Et().safeParse(w.data);
        return V.success && V.data.sha256 === r && V.data.size === length ? void 0 : "put_bad_answer";
      }
      let D = v ? Le(w.data) : void 0,
        G = v ? Me(w.status, w.data, w.response.headers["x-mcp-error-code"]) : void 0,
        ne = D === void 0 ? void 0 : It.get(D.code),
        q = D?.answeredBy !== void 0 && nt(D.answeredBy) === Ut || ne !== void 0 ? D : void 0,
        Y = w.response.headers["retry-after"],
        oe = typeof Y === "string" && Y.trim() !== "",
        me = String(w.response.headers["x-should-retry"] ?? "").trim().toLowerCase(),
        _e = w.response.headers["x-mcp-error-code"],
        Oe = I.handedOver || streamed && length === 0 || !streamed,
        z;
      if (!v) z = Ot[w.status] ?? "put_failed";else if (q === void 0) {
        if (D?.mayHaveArrived === !0) z = "put_outcome_unknown";else if (w.status === 413) z = {
          code: "put_too_large"
        };else if (w.status === 404 && le(w.data) === "not_found_error") z = "put_no_route";else if (w.status === 401 && Ke(signIn, w.data, _e)) z = "put_login_refused";else if (G !== void 0) z = Dt[G];else if (Oe && (D !== void 0 || typeof _e === "string" && _e !== "" || ue(w.data) !== !1)) z = "put_outcome_unknown";else if (w.status === 401 && I.renewed && !Xe(w.data, w.response.headers["x-mcp-error-code"])) z = "put_login_refused";else z = Nt[w.status] ?? "put_failed";
      } else if (q.mayHaveArrived ?? ((ne === void 0 || w.status === 401) && Oe)) z = "put_outcome_unknown";else {
        let V = Ft.get(q.code)?.get(q.reason);
        switch (q.code) {
          case "file_too_large":
            z = {
              code: "put_too_large",
              ...(q.limitBytes !== void 0 && {
                limit: q.limitBytes
              })
            };
            break;
          case "unavailable":
            z = V ?? (me === "true" || oe && me !== "false" ? "put_try_later" : "put_refused");
            break;
          default:
            if (q.code === "uploads_not_available" && q.reason !== void 0 && V === void 0) t(`[file inputs] uploads not available: the upload service gave a reason this version of Claude Code does not recognize: ${/^[a-z_]{1,40}$/.test(q.reason) ? q.reason : "not shown (not a reason code)"}`);
            z = V ?? xt.get(q.code) ?? ne ?? "put_failed";
        }
      }
      if (O === "put_outcome_unknown") z = "put_outcome_unknown";
      if (U) return z;
      if (!(v ? oe && me !== "false" && D?.mayHaveArrived === !1 && D.code !== "upload_too_slow" && D.code !== "file_too_large" : z === "put_busy") || N === C || v && I.requests >= ye) return z;
      let ge = Number(Y),
        Ue = v ? Ht(Y) : Number.isFinite(ge) && ge >= 0 ? ge : void 0,
        xe = Ue !== void 0 ? Math.min(Ue * 1000, streamed ? Wt : zt) : Bt;
      if (streamed && Date.now() + xe >= x + S) return z;
      if (O = z, await J(xe, waitSignal), signal_2.aborted) return "canceled";
      if (s?.aborted === !0) return z;
    }
  } catch (error) {
    if (v && (I.wholeBeforeUnvouched401 || A || F || !qe(error) && (I.handedOver || !streamed || U && length === 0))) return "put_outcome_unknown";
    if (signal_2.aborted) return "canceled";
    if (s?.aborted === !0) return O ?? "put_too_slow";
    return t(`[file inputs] upload threw: ${d(error)}`, {
      level: "error"
    }), k(error) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network";
  }
}
async function We(e, n) {
  let {
      signIn: signIn_2
    } = e,
    h = signIn_2.auth !== "none",
    recoverOAuth401 = e.requests + 2 <= ye,
    settled_2 = e.settled;
  try {
    return await jt.put(`/${e.url.pathname.slice(1)}`, e.body instanceof Byt ? void 0 : e.body, {
      ...(signIn_2.auth === "none" ? {
        auth: signIn_2.auth
      } : {
        auth: signIn_2.auth,
        host: signIn_2.host,
        refreshOAuth: !0,
        recoverOAuth401: recoverOAuth401,
        isRouteOwned401Answer: (f, v) => {
          let S = v["x-mcp-error-code"];
          if (ue(f) !== !1 && !Ke(signIn_2, f, S) && (e.handedOver || !e.streamed || e.length === 0)) e.wholeBeforeUnvouched401 = !0;
          return Xe(f, S);
        }
      }),
      ...(e.baseUrl !== void 0 && {
        baseUrl: e.baseUrl
      }),
      ...(n && {
        freshConnection: !0
      }),
      headers: e.token === void 0 ? e.headers : {
        ...e.headers,
        [ee]: e.token.reveal()
      },
      maxRedirects: 0,
      maxBodyLength: e.length,
      maxContentLength: h ? At : Rt,
      ...(e.body instanceof Byt ? {
        streamUpload: {
          sliced: e.body,
          tailFloorMs: f => Math.max(120000, 30000 + f / 4194304 * 1000) + 30000,
          onSettled: f => {
            e.settled++, e.handedOver = f.body_bytes > 0 && f.bytes_handed === f.body_bytes;
          }
        },
        signal: e.waitSignal
      } : {
        timeout: timeout,
        signal: e.signal
      }),
      validateStatus: () => !0
    });
  } finally {
    let f = e.settled - settled_2;
    e.renewed = e.streamed && f > 1, e.requests += e.streamed ? Math.max(1, f) : h && recoverOAuth401 ? 2 : 1;
  }
}
function Ht(e) {
  return typeof e === "string" && /^\s*\d+\s*$/.test(e) ? Number(e) : void 0;
}
function Xe(e, n) {
  return typeof n === "string" && n !== "" || ze(e);
}
function Ke(e, n, r) {
  return e.auth !== "none" && e.host === "mcp-proxy" && Be(n, r);
}
function qe(e) {
  if (!Q1(e) || !(e instanceof Error)) return !1;
  let {
      cause: cause
    } = e,
    r = cause instanceof AggregateError ? cause.errors : [cause];
  return r.length > 0 && r.every(item => {
    let a = Mt.get(k(item) ?? "");
    return a !== void 0 && item instanceof Error && "syscall" in item && item.syscall === a;
  });
}
function Ve(path, code_2) {
  if (typeof code_2 === "string" && code_2 !== "") return {
    path: path,
    code: code_2
  };
  if (typeof code_2 === "object" && code_2 !== null && "code" in code_2 && code_2.code === "put_too_large") {
    let limit = "limit" in code_2 ? code_2.limit : void 0;
    return {
      path: path,
      code: "put_too_large",
      ...(typeof limit === "number" && Number.isSafeInteger(limit) && limit > 0 && {
        limit: limit
      })
    };
  }
  return {
    path: path,
    code: "put_failed"
  };
}
function et({
  screen: screen,
  maxFileBytes: maxFileBytes,
  maxTotalBytes: maxTotalBytes,
  uploadPathPrefix: uploadPathPrefix,
  putAuth: putAuth,
  namesResolvedPaths = !1
}) {
  let f = Ce(putAuth);
  return {
    async hash(v, S) {
      let _ = [],
        size_2 = 0;
      for (let path_2 of v) {
        if (S.aborted) return [..._, {
          path: path_2,
          code: "canceled"
        }];
        let l;
        if (f.auth === "none") l = await Qe(path_2, screen, maxFileBytes);else {
          let x = await ke(path_2, screen, {
            refuseSecretStores: !0
          });
          if ("code" in x) l = x;else {
            let U = Ye("sha256"),
              size = 0,
              F;
            try {
              let M,
                B = await Vce(x.realPath, maxFileBytes, async (X, W) => {
                  try {
                    while (F === void 0 && size <= W) {
                      let j = Buffer.allocUnsafe(Math.min(fe, W - size + 1)),
                        {
                          bytesRead: bytesRead
                        } = await X.read(j, 0, j.length, size);
                      if (bytesRead === 0) break;
                      if (size += bytesRead, size > W) F = {
                        path: path_2,
                        code: "grew"
                      };else U.update(j.subarray(0, bytesRead));
                    }
                  } catch (error_2) {
                    M = {
                      error: error_2
                    };
                  }
                });
              if (M !== void 0) throw M.error;
              if ("refusal" in B) F = Se(path_2, B);
            } catch (error) {
              t(`[file inputs] a file could not be read to be hashed: ${k(error) ?? "unknown error"}`, {
                level: "error"
              }), F = {
                path: path_2,
                code: "read_failed"
              };
            }
            let sha256 = U.digest("hex");
            l = F ?? (x.requiredDigest !== void 0 && sha256 !== x.requiredDigest ? {
              path: path_2,
              code: "path_rejected"
            } : {
              name: x.name,
              size: size,
              sha256: sha256,
              realPath: x.realPath
            });
          }
        }
        if ("code" in l) {
          let {
            resolved: resolved,
            ...U
          } = l;
          return [..._, namesResolvedPaths ? l : U];
        }
        let size_3 = "buf" in l ? l.buf.length : l.size;
        if (size_2 += size_3, size_2 > maxTotalBytes) return [..._, {
          path: path_2,
          code: "too_large_total",
          size: size_2
        }];
        _.push({
          path: path_2,
          name: l.name,
          size: size_3,
          sha256: l.sha256,
          ...("realPath" in l && {
            realPath: l.realPath
          })
        });
      }
      return _;
    },
    async put(v, S) {
      let _ = [],
        size_6 = 0;
      if (f.auth !== "none") {
        for (let {
          path: path_3,
          sha256: sha256_2,
          size: size_4,
          url: url_4,
          headers: headers_2
        } of v) {
          if (S.aborted) return [..._, {
            path: path_3,
            code: "canceled"
          }];
          let A = await ke(path_3, screen, {
            refuseSecretStores: !0
          });
          if ("code" in A) return [..._, A.code === "resolves_elsewhere" ? {
            path: path_3,
            code: "changed"
          } : A];
          if (A.requiredDigest !== void 0 && sha256_2 !== A.requiredDigest) return [..._, {
            path: path_3,
            code: "changed"
          }];
          let F = Ye("sha256"),
            O,
            M,
            B = 0,
            X = await Vce(A.realPath, maxFileBytes, async (N, size_5) => {
              if (O = {
                size: size_5
              }, size_4 !== void 0 && size_5 !== size_4) return;
              try {
                let copy = Buffer.allocUnsafe(size_5 + 1);
                O = {
                  size: size_5,
                  copy: copy
                };
                while (B < copy.length && !S.aborted) {
                  let {
                    bytesRead: bytesRead_2
                  } = await N.read(copy, B, Math.min(fe, copy.length - B), B);
                  if (bytesRead_2 === 0) break;
                  F.update(copy.subarray(B, B + bytesRead_2)), B += bytesRead_2;
                }
              } catch (error_3) {
                M = {
                  error: error_3
                };
              }
            });
          if ("refusal" in X) return [..._, Se(path_3, X)];
          if (O === void 0) return [..._, {
            path: path_3,
            code: "read_failed"
          }];
          if (size_4 !== void 0 && O.size !== size_4) return [..._, {
            path: path_3,
            code: "changed"
          }];
          if (M !== void 0 || O.copy === void 0) return t(`[file inputs] a file could not be read for upload and was not sent: ${k(M?.error) ?? "unknown error"}`, {
            level: "error"
          }), [..._, {
            path: path_3,
            code: "read_failed"
          }];
          if (S.aborted) return [..._, {
            path: path_3,
            code: "canceled"
          }];
          if (B !== O.size || F.digest("hex") !== sha256_2) return [..._, {
            path: path_3,
            code: "changed"
          }];
          let W = O.copy.subarray(0, B),
            j = new Byt(async function* () {
              for (let N = 0; N < W.length; N += fe) yield W.subarray(N, N + fe);
            }, W.length);
          if (size_6 += j.byteLength, size_6 > maxTotalBytes) return [..._, {
            path: path_3,
            code: "too_large_total",
            size: size_6
          }];
          let I = await be({
            url: url_4,
            headers: headers_2
          }, j, sha256_2, uploadPathPrefix, S, f);
          if (I !== void 0) return [..._, Ve(path_3, I)];
          _.push({
            path: path_3,
            ok: !0
          });
        }
        return _;
      }
      for (let {
        path: path_4,
        sha256: sha256_3,
        url: url_5,
        headers: headers_3
      } of v) {
        if (S.aborted) return [..._, {
          path: path_4,
          code: "canceled"
        }];
        let U = await Qe(path_4, screen, maxFileBytes);
        if ("code" in U) return [..._, U.code === "resolves_elsewhere" ? {
          path: path_4,
          code: "changed"
        } : U];
        if (size_6 += U.buf.length, size_6 > maxTotalBytes) return [..._, {
          path: path_4,
          code: "too_large_total",
          size: size_6
        }];
        if (U.sha256 !== sha256_3) return [..._, {
          path: path_4,
          code: "changed"
        }];
        let A = await be({
          url: url_5,
          headers: headers_3
        }, U.buf, sha256_3, uploadPathPrefix, S, f);
        if (A !== void 0) return [..._, Ve(path_4, A)];
        _.push({
          path: path_4,
          ok: !0
        });
      }
      return _;
    }
  };
}
var fe = 1048576,
  Q = /(?! )[\p{Zs}\p{Zl}\p{Zp}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu,
  Ze = /[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,
  pe = 7,
  maxDisguiseCharacters = 5,
  regExp = new RegExp(`(^|.)((?:${Q.source})+)(?=($|.))`, "gsu");
function ot(e) {
  return e.replace(regExp, (n, r, h, a) => [r, a].some(item => item === "" || /[\x00-\x7f\u0307\ud800-\udfff]/u.test(item.normalize("NFKD").toLowerCase().toUpperCase())) ? r + h : r);
}
function rt(e, n, {
  besideAscii = !1
} = {}) {
  let regExp_2 = new RegExp(Q.source, Q.flags),
    a = [];
  for (let f = regExp_2.exec(e); f !== null; f = regExp_2.exec(e)) a.push({
    at: f.index,
    length: f[0].length
  });
  if (a.length === 0) return [];
  if (besideAscii || a.length > n) return L([e.replace(Q, " "), e.replace(Q, ""), e.replace(Ze, "").replace(Q, " "), e.replace(Ze, " ").replace(Q, ""), ...(besideAscii ? rt(ot(e), n) : [])]);
  let y = [];
  for (let f = 0; f < 2 ** a.length; f++) {
    let v = "",
      S = 0;
    for (let [_, {
      at: at_2,
      length: length_2
    }] of a.entries()) {
      let l = Math.floor(f / 2 ** _) % 2 === 1;
      v += e.slice(S, at_2) + (l ? " " : ""), S = at_2 + length_2;
    }
    y.push(v + e.slice(S));
  }
  return L(y);
}
function at(e, n, {
  fromChat = !1,
  besideAscii: besideAscii_2 = !1
} = {}) {
  return rt(e, n, {
    besideAscii: besideAscii_2
  }).some(item => Ix(item) || !fromChat && (F2(item) || V6(item)));
}
async function ke(path_5, n, {
  refuseSecretStores = !1,
  followsLinks = !1
} = {}) {
  let a = await n(path_5);
  if (a === void 0) return {
    path: path_5,
    code: "path_rejected"
  };
  if (a === "credential_name") return {
    path: path_5,
    code: "credential_name"
  };
  if (refuseSecretStores && a.requiredDigest === void 0 && L([path_5, a.realPath]).some(item => F2(item) || V6(item) || at(item, pe, {
    besideAscii: !0
  }))) return t("[file inputs] a path was rejected: named like a credential, or like a file where other tools keep secrets"), {
    path: path_5,
    code: "credential_name"
  };
  if (a.requiredDigest === void 0 && (await Zt(path_5, a.realPath, {
    fromChat: a.fromChat,
    maxDisguiseCharacters: maxDisguiseCharacters
  }))) return t("[file inputs] a path was rejected: a credential, or Claude's own"), {
    path: path_5,
    code: "path_rejected"
  };
  if (refuseSecretStores && a.requiredDigest === void 0 && L([path_5, a.realPath]).some(item => (ot(item).match(Q)?.length ?? 0) > pe)) return t("[file inputs] a path was rejected: more blank or invisible characters beside ASCII than are read in every combination"), {
    path: path_5,
    code: "too_many_blanks"
  };
  if (!followsLinks && Ge(path_5, a.realPath) && !(a.otherSpelling !== void 0 && !Ge(a.otherSpelling, a.realPath)) && !(a.requiredDigest !== void 0 && Ac(path_5) === Kt(Av(), Xt(a.realPath)))) return {
    path: path_5,
    code: "resolves_elsewhere",
    resolved: a.realPath
  };
  let name = await GTe(a.realPath);
  if (KIe.test(name)) return {
    path: path_5,
    code: "name_direction"
  };
  return {
    ...a,
    name: name
  };
}
function Se(path_6, n) {
  return {
    path: path_6,
    code: n.refusal,
    ...("size" in n && {
      size: n.size
    })
  };
}
function Ge(e, n) {
  let r = Ac(e);
  if (r === null) return !0;
  return e !== n && Je(r) !== Je(n) && !(i.CLAUDE_CODE_REMOTE === !0 && Jce(r, n, {
    product: product,
    attach: attach
  })) && !(tn() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && Jce(r, n, qCe));
}
function Je(e) {
  return BLe(En(e.length > 1 && e.endsWith(Yt) ? e.slice(0, -1) : e)).replace(/^[a-z]:/, n => n.toUpperCase());
}
async function Zt(e, n, {
  fromChat: fromChat_2 = !1,
  maxDisguiseCharacters: maxDisguiseCharacters_2 = maxDisguiseCharacters
} = {}) {
  return (await UZ(e, n)) || L([e, n]).some(item => !fromChat_2 && (F2(item) || V6(item)) || at(item, maxDisguiseCharacters_2, {
    fromChat: fromChat_2
  }));
}
async function Qe(path_7, n, r, {
  followsLinks: followsLinks_2 = !1
} = {}) {
  let a = await ke(path_7, n, {
    followsLinks: followsLinks_2
  });
  if ("code" in a) return a;
  let y = await Vce(a.realPath, r);
  if (!("buf" in y)) return Se(path_7, y);
  let sha256_4 = nt(y.buf);
  if (a.requiredDigest !== void 0 && sha256_4 !== a.requiredDigest) return {
    path: path_7,
    code: "path_rejected"
  };
  return {
    buf: y.buf,
    name: a.name,
    sha256: sha256_4
  };
}
var st = {
  bmp: "image/bmp",
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  gif: "image/gif",
  gz: "application/gzip",
  heic: "image/heic",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  json: "application/json",
  m4a: "audio/mp4",
  md: "text/markdown",
  mov: "video/quicktime",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  pdf: "application/pdf",
  png: "image/png",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  rtf: "application/rtf",
  tif: "image/tiff",
  tiff: "image/tiff",
  tsv: "text/tab-separated-values",
  txt: "text/plain",
  wav: "audio/wav",
  webm: "video/webm",
  webp: "image/webp",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  zip: "application/zip"
};
function dt(e) {
  let n = e.lastIndexOf("."),
    r = n < 0 ? "" : e.slice(n + 1);
  if (!/^[A-Za-z0-9]+$/.test(r)) return "";
  let h = r.toLowerCase();
  return Object.hasOwn(st, h) ? st[h] : "";
}
function se(e) {
  return e === "cache_miss" || e === "route_missing" ? "policy_unread" : "policy_denied";
}
function lt(e, n) {
  let r = xd(e);
  if (r !== null) return se(r);
  return n() ? "uploads_off" : sW();
}
function ie(e) {
  if (r5e() || !mAt() || bvn(e) !== "schema_mark" || !e.speaksFiles || e.listedBeforeUploads === !0 || (Y2() ? !0 : !1) || tar() !== !0) return;
  let place = ht(e);
  if (place === void 0) return;
  let r = nar();
  return {
    ...n5e(e.schema),
    place: place,
    turnedOff: r !== void 0,
    ...(r === "unknown" && {
      cannotTell: !0
    })
  };
}
function ht(e) {
  let {
    config: config
  } = e.client;
  return yw(config) !== void 0 && config.type === "claudeai-proxy" ? Ne(config.id) : void 0;
}
function I_a(e) {
  return ie(e) !== void 0;
}
function re(e) {
  let n = ie(e);
  return n !== void 0 && xd(policy) === null ? n : void 0;
}
function Te(e, n) {
  let r = ie(e),
    h = r === void 0 || r.turnedOff && r.marked.length === 0 ? null : xd(policy);
  if (h === null || !Zir(e.schema, n)) return;
  let code_3 = se(h);
  return {
    error: `No file was sent: ${he[code_3]} Tell the user; do not retry with a file. ${Z(e)} A call that sets no file argument is still sent.`,
    code: code_3
  };
}
var weakMap = new WeakMap(),
  he = Object.freeze({
    policy_denied: "the organization policy in force for this session does not allow sending files to claude.ai connectors.",
    policy_unread: "Claude Code could not confirm whether this account may send files to claude.ai connectors."
  });
function R8o(e) {
  let n = re(e),
    {
      schema: schema
    } = e;
  if (n === void 0 || typeof schema !== "object" || schema === null) return schema;
  if (!weakMap.has(schema)) weakMap.set(schema, tmi(schema, n.marked));
  return e.modelName === void 0 || !rmi(e.modelName, n.marked.map(item => item.argument), schema) ? schema : weakMap.get(schema);
}
function ve(e, n, r) {
  let h = g6t(e.modelName, n, () => {
    let O = ie(e);
    return O === void 0 ? [] : [...O.marked.map(item => item.argument), ...(O.turnedOff ? [] : O.unfilled)];
  }, r, e.schema);
  if (h.asked === "out_of_reach") return smi(Cve(e.name));
  if (h.asked === "nothing" || h.text.length === 0 && h.unlisted !== !0) return;
  let {
    text: text
  } = h;
  if (h.asked === "unknown") return imi(Cve(e.name), r);
  if (text.length === 0) {
    let O = Cve(e.name);
    return {
      error: `No file was sent and ${O} was not called: this call has an argument that ${O} does not list. You were asked for a file's path for ${O}, and the name of an argument is sent to the connector as text too, so Claude Code sends ${O} only the arguments it lists. Do not retry with that argument; you may call ${O} with the arguments it lists.`,
      code: "argument_not_listed"
    };
  }
  let y = ie(e),
    {
      marked: marked
    } = n5e(e.schema),
    v = bvn(e) === "schema_mark" && text.every(item => marked.some(M => M.argument === item)),
    S = text.map(ede),
    _ = new Intl.ListFormat("en", {
      type: "conjunction"
    }).format(S),
    b = new Intl.ListFormat("en", {
      type: "disjunction"
    }).format(S),
    s,
    l = () => (s = Gt(), s !== void 0),
    code_4 = !v || y !== void 0 ? "file_argument_changed" : r5e() ? "upload_kept_out" : !mAt() ? "no_prompt_here" : e.sendsNoFiles ? "client_sends_no_files" : !e.speaksFiles ? "files_not_spoken" : Y2() ? "code_mode_used" : l() ? "uploads_off" : e.listedBeforeUploads && ht(e) !== void 0 ? "listed_before_uploads" : "no_upload_place",
    x = code_4 === "upload_kept_out" ? "Claude Code does not send a file to a connector in a session that a cloud service, a runner, a server or Remote Control started for the user, as this one was. To send a file, the user would at least have to start Claude Code themselves in a terminal, without -p" : code_4 === "no_prompt_here" ? qsr() : code_4 === "code_mode_used" ? `Claude Code does not send a file to a connector once ${E_} has been on since Claude Code was started, as it has been here. To send a file, the user would at least have to quit Claude Code and start it again with ${Np} off` : code_4 === "client_sends_no_files" ? "Claude Code cannot send a file to a connector in this session" : code_4 === "files_not_spoken" ? "this connector's connection does not take files" : code_4 === "uploads_off" ? s ?? _t : code_4 === "listed_before_uploads" ? "Claude Code listed this connector's tools before sending files to connectors was on in this session, and sends a file to it only once the connector has listed its tools again, which reconnecting it in /mcp does" : code_4 === "no_upload_place" ? "Claude Code cannot send files to this connector" : `Claude Code does not upload a file for ${_} now`,
    U = Cve(e.name),
    A = text.length > 1,
    F = h.inObjects.length === 0 ? "" : ` Writing it inside an object, as you did in ${new Intl.ListFormat("en", {
      type: "conjunction"
    }).format(h.inObjects.map(ede))}, does not change that.`;
  return {
    error: `No file was sent and ${U} was not called: ${x}. You were asked for ${A ? "file paths" : "a file's path"} in ${_}, so what you wrote there is not sent to ${U} as text.${F} Tell the user. Do not retry with ${b} set${code_4 === "listed_before_uploads" ? " until the connector has been reconnected" : ""}; you may call ${U} without ${A ? "them" : "it"}.`,
    code: code_4
  };
}
var _t = "sending files to connectors is not available in this session";
function Gt() {
  let e = tar(),
    n = nar(),
    r = "Claude Code cannot tell at the moment whether sending files to connectors is on";
  if (e === !0) return n === void 0 ? void 0 : n === "off" ? "sending files to connectors was turned off during this session" : "Claude Code cannot tell at the moment whether sending files to connectors is on";
  return n === "unknown" ? "Claude Code cannot tell at the moment whether sending files to connectors is on" : _t;
}
async function A8o(e, n, ...[r, h]) {
  let a = n ? await n(r, h) : {
      result: !0
    },
    y = a.result ? ve(e, r, h.messages) : void 0;
  if (y !== void 0) return te(y.code), {
    result: !1,
    message: y.error,
    errorCode: 4
  };
  let f = a.result ? Te(e, r) : void 0;
  if (f !== void 0) return te(f.code), {
    result: !1,
    message: f.error,
    errorCode: 6
  };
  let v = a.result ? re(e) : void 0,
    S = v && Re(e, v, r);
  if (S !== void 0) return te(S.code), {
    result: !1,
    message: S.error,
    errorCode: S.code === "mark_unfilled" ? 5 : 3
  };
  let _ = v && ear(r, v.marked);
  if (v?.turnedOff && _ !== void 0 && Ee(_)) return te("uploads_off"), {
    result: !1,
    message: Ae(e, v),
    errorCode: 4
  };
  if (_ !== void 0 && "notAPath" in _) return te("not_a_path"), {
    result: !1,
    message: Pe(e, _.notAPath),
    errorCode: 2
  };
  return a;
}
function Re(e, n, r) {
  if (n.turnedOff) return;
  let h = Cve(e.name);
  if (n.everyCall) return {
    error: `${h} was not called: this connector's schema asks for a file in a form Claude Code cannot send, and Claude Code cannot tell which argument would carry it, so it sends no call of this tool. Do not retry. Tell the user; the connector's maker has to change this.`,
    code: "mark_outside_arguments"
  };
  let a = c7o(r, n.unfilled);
  return a === void 0 ? void 0 : {
    error: `No file was sent and ${h} was not called: this connector's schema asks for a file in a form Claude Code cannot send, and the argument ${ede(a)} may carry one. Do not retry with that argument set. Tell the user; the connector's maker has to change this. A call that leaves it out is still sent.`,
    code: "mark_unfilled"
  };
}
function ct(e, n, r) {
  return `No file was sent: this call names ${n} files, and Claude Code sends only files whose full paths fit whole in the ${jM}-line list of files of its approval prompt (a long path takes several lines${r ? `, and one of these files' paths has characters that may imitate others, so a line that says so takes one of the ${jM}` : ""}). Send the files in several calls with fewer files each. ${Z(e)}`;
}
function Ae(e, n) {
  return n.cannotTell ? `No file was sent: Claude Code cannot tell just now whether sending files to connectors is on. ${Z(e)} Tell the user; a call that names a file can be tried again later. Calls that name no file still work.` : `No file was sent: sending files to connectors was turned off during this session. ${Z(e)} Tell the user, and do not retry with a file. Calls that name no file still work.`;
}
function Ee(e) {
  return "notAPath" in e || e.length > 0;
}
function Pe(e, n) {
  return `Each file given to ${Cve(e.name)} in ${ede(n)} must be the path of a file on this computer. ${Z(e)}`;
}
async function ft(e, n) {
  let r = await Ogs(e, n);
  if (!Kpi(r, n)) return;
  return MAt(e, r, n), r;
}
function gt(e, n) {
  return et({
    screen: async r => {
      try {
        try {
          return await ft(r, n);
        } catch (error) {
          let otherSpelling = k(error) === "ENOENT" ? Gpi(r) : void 0;
          if (otherSpelling === void 0 || ps(mt(r)).some(item => ["deny", "ask"].some(v => Aa(item, n, "read", v) !== null))) throw error;
          let y = await ft(otherSpelling, n);
          return y === void 0 ? void 0 : {
            ...y,
            otherSpelling: otherSpelling
          };
        }
      } catch (error) {
        return t(`[connector upload] a path was rejected: ${error instanceof R ? error.telemetryMessage : "not readable"}`), Mlt(error) === "credential_name" ? "credential_name" : void 0;
      }
    },
    maxFileBytes: maxFileBytes_2,
    maxTotalBytes: maxFileBytes_2 * jM,
    uploadPathPrefix: e.pathPrefix,
    putAuth: {
      auth: "claude-ai-oauth",
      host: e.host
    },
    namesResolvedPaths: !0
  });
}
function H({
  error: e,
  code: code_5
}) {
  return te(code_5), {
    behavior: "deny",
    message: e,
    decisionReason: {
      type: "other",
      reason: e
    }
  };
}
function Z(e) {
  return `${Cve(e.name)} was not called.`;
}
async function x8o(e, n, r, {
  toolPermissionContext: toolPermissionContext,
  signal: signal_3,
  phase: phase,
  files: files,
  messages: messages
}) {
  if (r.behavior === "deny") return r;
  let S = ve(e, n, messages) ?? Te(e, n);
  if (S !== void 0) return H(S);
  let _ = re(e);
  if (_ === void 0) return r;
  let b = Re(e, _, n);
  if (b !== void 0) return H(b);
  let s = Z(e),
    askedArguments = t5e(n),
    C = ear(askedArguments ?? n, _.marked);
  if (_.turnedOff && Ee(C)) return H({
    error: Ae(e, _),
    code: "uploads_off"
  });
  if ("notAPath" in C) return H({
    error: Pe(e, C.notAPath),
    code: "not_a_path"
  });
  if (C.length === 0) return r;
  let code_6 = sW();
  if (code_6 !== void 0) return H({
    error: `Files cannot be sent from this session. ${s}`,
    code: code_6
  });
  if (!mAt()) return H({
    error: `No file was sent and ${Cve(e.name)} was not called: ${qsr()}.`,
    code: "no_prompt_here"
  });
  let U = o5e(e.client.name).length;
  if (U > P8r) return H({
    error: `No file was sent: this connector's name is too long for Claude Code to show whole in its approval prompt, and Claude Code asks the user to approve sending files only to a connector it can name in full. The prompt writes the name in quotes, as Claude Code holds it: "${K4}", then the name the connector was given, then a number such as " (2)" where two connectors' names would otherwise clash. It shows at most ${P8r.toLocaleString("en-US")} characters of that, the two quotes included, counting a plain English letter, digit, space or most punctuation as one, a quote or backslash as two, and an angle bracket or an accented or non-Latin letter as six or more. This name comes to ${U.toLocaleString("en-US")}, so the name the connector was given has to lose at least ${(U - P8r).toLocaleString("en-US")} of those characters. Tell the user, and do not retry with a file: a connector's name is set where the connector was added or published, not in Claude Code. ${s} A call that sets no file argument is still sent.`,
    code: "connector_name_too_long"
  });
  let updatedInput = askedArguments && t5e(askedArguments);
  if (askedArguments === void 0 || updatedInput === void 0) return H({
    error: `No file was sent: Claude Code could not make a copy of this call's arguments, so it did not ask. Arguments that hold very many values, or lists and objects nested very deeply, cannot be copied: make the call with fewer or flatter ones. If these are neither, this is a bug in Claude Code that the user cannot fix. ${s}`,
    code: "arguments_not_plain"
  });
  if (C.length > jM) return H({
    error: ct(e, C.length, !1),
    code: "too_many_files"
  });
  let F = W$.get()?.conversationColumns ?? mZi(process.stdout).columns,
    O = Sui(F);
  if (O === void 0) return H({
    error: `No file was sent: to list the files this call would send, Claude Code's approval prompt needs the conversation to be at least ${_ui} columns wide, and it is ${F}. Ask the user to widen the window, or to close a side panel if one is open, then make this call again. ${s}`,
    code: "window_too_narrow"
  });
  let B = await (files ?? gt(_.place, toolPermissionContext)).hash(C.map(item => item.path), signal_3),
    X = [],
    W = [];
  for (let [N, w] of C.entries()) {
    let P = B[N];
    if (P === void 0 || "code" in P) return H(yt(w, P?.code ?? "unexpected", e, toolPermissionContext, s, P?.resolved));
    if (w.maxSize !== void 0 && P.size > w.maxSize) return H({
      error: `Cannot send ${Llt(w.path)}: ${Cve(e.name)} takes files of at most ${w.maxSize.toLocaleString("en-US")} bytes in ${ede(w.argument)}, and this one is larger. ${s}`,
      code: "too_large_for_argument"
    });
    if (X.push({
      argument: w.argument,
      ...(w.index !== void 0 && {
        index: w.index
      }),
      path: w.path,
      name: P.name,
      mimeType: dt(P.name),
      size: P.size,
      sha256: P.sha256
    }), P.realPath === void 0) return H({
      error: `No file was sent: Claude Code could not tell where ${Llt(w.path)} lies on this computer. This is a bug in Claude Code; the user cannot fix it. ${s}`,
      code: "real_path_missing"
    });
    W.push({
      path: w.path,
      size: P.size,
      realPath: P.realPath
    });
  }
  let j = W.find(item => !I8r([item], O));
  if (j !== void 0) return H({
    error: `Cannot send ${Llt(MEn(j.path))}: the file's full path, or the path it lies at, is too long for Claude Code to show whole in its approval prompt, whose list of files has ${jM} lines${I8o([j]) ? `; one of those two paths has characters that may imitate others, so a line that says so takes one of the ${jM}` : ""}. ${I8r([j], tor) ? `The path would fit in a conversation at least ${bui} columns wide, so the user can widen the window, or close a side panel if one is open. ` : ""}A copy at a shorter path in the folder Claude Code started in can be sent. ${s}`,
    code: "path_too_long"
  });
  if (!I8r(W, O)) return H({
    error: ct(e, C.length, I8o(W)),
    code: "too_many_files"
  });
  let I = wui(W, e.client.name, O);
  if (Ki(I).text !== I) return H({
    error: `No file was sent: Claude Code could not show the list of files in its approval prompt without changing some characters in it, so it did not ask. This is a bug in Claude Code; the user cannot fix it. ${s}`,
    code: "statement_unshowable"
  });
  if (phase !== void 0) zTe(phase.carrier, n, Object.freeze({
    connectorFiles: Object.freeze(X.map(item => Object.freeze(item))),
    askedArguments: askedArguments
  }), phase.toolName);
  return {
    ...Jfi(I),
    updatedInput: updatedInput
  };
}
function wt(e) {
  return e % 1e6 === 0 ? `${(e / 1e6).toLocaleString("en-US")} MB` : `${e.toLocaleString("en-US")} bytes`;
}
var Jt = wt(maxFileBytes_2);
function yt(e, code_7, r, h, a = Z(r), y) {
  let f = Llt(e.path);
  switch (code_7) {
    case "resolves_elsewhere":
      return {
        error: umi(f, y, a),
        code: code_7
      };
    case "path_rejected":
      {
        let v = `to the connector ${ede(r.client.name)}`;
        return {
          error: qpi(e.path) ? Ypi(f, v, a) : Xpi(f, v, h, a),
          code: code_7
        };
      }
    case "credential_name":
      {
        let v = DAt(h) !== void 0;
        return {
          error: `Cannot send ${f}: its name or folder is one that credentials are kept under, so it is not sent to a connector on Claude's word alone. Tell the user it was not sent${v ? "; if they want it sent, they can attach it to the chat themselves" : ""}. ${a}`,
          code: code_7
        };
      }
    case "too_large":
      return {
        error: `Cannot send ${f}: files over ${Jt} cannot be sent to a connector. ${a}`,
        code: code_7
      };
    case "hard_links":
      return {
        error: `Cannot send ${f}: the file has more than one hard link, which can point at a file outside the folders this session may read. Tell the user. ${a}`,
        code: code_7
      };
    case "not_regular":
      return {
        error: `Cannot send ${f}: it is not a regular file. Send files one at a time, not a folder. ${a}`,
        code: code_7
      };
    case "name_direction":
      return {
        error: `Cannot send ${f}: its name contains a character that changes text direction. Tell the user; the file would have to be renamed. ${a}`,
        code: code_7
      };
    case "too_many_blanks":
      return {
        error: `Cannot send ${f}: the file's path, or the path it lies at, holds more than ${pe} blank or invisible characters in all, not counting ordinary spaces (no-break spaces, for example; the quoted path writes each as a code like \\u00a0). Tell the user it was not sent, and that it can be sent once the file, and any folder in its path that has such characters, is renamed without them; an ordinary space can take the place of each. Before it sends a file Claude Code checks its path for a credential file's name in disguise, and it cannot finish that check for a path with this many such characters; that is a limit of the check and says nothing about this file. ${a}`,
        code: code_7
      };
    case "too_large_total":
      return {
        error: `Cannot send ${f}: the files of this call are too large together. Send fewer or smaller files. ${a}`,
        code: code_7
      };
    case "canceled":
      return {
        error: `Sending files was interrupted. ${a}`,
        code: code_7
      };
    default:
      return {
        error: `Could not read ${f}. ${a}`,
        code: LAt(code_7) ? code_7 : "unexpected"
      };
  }
}
function Qt(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = e;
  return typeof n.argument === "string" && (n.index === void 0 || typeof n.index === "number") && typeof n.path === "string" && typeof n.name === "string" && typeof n.mimeType === "string" && typeof n.size === "number" && typeof n.sha256 === "string";
}
async function P8o(e, n, {
  call: call_2,
  signal: signal_4,
  files: files_2,
  messages: messages_2
}) {
  let {
      input: input,
      toolPermissionContext: toolPermissionContext_2
    } = n,
    S = Z(e),
    _ = ve(e, input, messages_2);
  if (_ !== void 0) return K(_);
  let b = n.permissionPhase?.checked?.note,
    s = typeof b === "object" && b !== null && "connectorFiles" in b ? b.connectorFiles : void 0,
    l = Array.isArray(s) ? {
      connectorFiles: s.filter(Qt)
    } : void 0,
    C = typeof b === "object" && b !== null && "askedArguments" in b ? t5e(b.askedArguments) : void 0,
    x = re(e),
    U = () => {
      let P = r5e() ? void 0 : nar();
      return {
        error: P === "off" ? `No file was sent: sending files to connectors was turned off after the approval prompt was shown. Tell the user; do not retry. ${S}` : P === "unknown" ? `No file was sent: since the approval prompt was shown, Claude Code can no longer tell whether sending files to connectors is on. Tell the user; the call can be tried again later. ${S}` : `No file was sent: Claude Code stopped sending files to connectors in this session after the approval prompt was shown. Tell the user; do not retry. ${S}`,
        code: "uploads_off"
      };
    };
  if (x === void 0) {
    if (l === void 0) {
      let D = Te(e, input);
      return D === void 0 ? void 0 : K(D);
    }
    if (!mAt()) return K({
      error: `No file was sent: ${qsr()}. ${S}`,
      code: "no_prompt_here"
    });
    let P = xd(policy);
    return K(P === null ? U() : {
      error: `No file was sent: ${he[se(P)]} Tell the user; do not retry. ${S}`,
      code: se(P)
    });
  }
  let A = Re(e, x, input);
  if (A !== void 0) return K(A);
  let F = ear(input, x.marked);
  if (x.turnedOff && (l !== void 0 || Ee(F))) return K(l === void 0 ? {
    error: Ae(e, x),
    code: "uploads_off"
  } : U());
  if ("notAPath" in F) return K({
    error: Pe(e, F.notAPath),
    code: "not_a_path"
  });
  if (F.length === 0 && l === void 0) return;
  let O = Qfi(n, S, C);
  if (O !== void 0) return K(O);
  let code_8 = sW();
  if (code_8 !== void 0) return K({
    error: `Files cannot be sent from this session. ${S}`,
    code: code_8
  });
  let permissionPhase = n.permissionPhase,
    X = C === void 0 ? void 0 : ear(C, x.marked);
  if (l === void 0 || C === void 0 || permissionPhase === void 0 || X === void 0 || "notAPath" in X || !ln(l.connectorFiles.map(({
    argument: argument,
    index: index_2,
    path: path_8
  }) => ({
    argument: argument,
    index: index_2,
    path: path_8
  })), X.map(({
    argument: argument_2,
    index: index_3,
    path: path_9
  }) => ({
    argument: argument_2,
    index: index_3,
    path: path_9
  })))) return K({
    error: `The files could not be sent because of a bug in Claude Code (it kept no record of the files the approval prompt named); the user cannot fix this. ${S}`,
    code: "prompt_record_missing"
  });
  if (weakSet.has(permissionPhase)) return K({
    error: `No file was sent a second time: the approval this call was given has already been used for one send, and every send takes an approval of its own. This is a bug in Claude Code; the user cannot fix it. ${Cve(e.name)} was not called again.`,
    code: "approval_used"
  });
  weakSet.add(permissionPhase);
  let W = files_2 ?? gt(x.place, toolPermissionContext_2),
    j = {
      auth: "claude-ai-oauth",
      host: x.place.host
    },
    refused_2 = P => {
      if (P.credentials !== "include") return "upload_target_credentials";
      let D = ce(P, x.place.pathPrefix, j, x.place.mcpAddress);
      return typeof D === "string" ? D : void 0;
    },
    put_2 = async (P, D, G) => {
      let code_9 = lt(x.place.policy, () => re(e)?.turnedOff !== !1);
      if (code_9 !== void 0) return {
        code: code_9
      };
      let url_6;
      if ("url" in D) url_6 = D.url;else {
        let code_10 = ce(D, x.place.pathPrefix, j, x.place.mcpAddress);
        if (typeof code_10 === "string") return {
          code: code_10
        };
        url_6 = code_10.url.href;
      }
      let [Y] = await W.put([{
        path: P.path,
        sha256: P.sha256,
        size: P.size,
        url: url_6,
        headers: D.headers
      }], G);
      if (Y === void 0) return {
        code: "put_outcome_unknown"
      };
      if ("code" in Y) return typeof Y.code === "string" ? {
        code: Y.code,
        ...(Y.limit !== void 0 && {
          limit: Y.limit
        })
      } : {
        code: "put_outcome_unknown"
      };
      return Y.ok === !0 ? void 0 : {
        code: "put_outcome_unknown"
      };
    },
    w = await De(C, l.connectorFiles, {
      call: P => call_2({
        ...P,
        arguments: Ri(P.arguments)
      }),
      put: put_2,
      refused: refused_2,
      signal: signal_4
    });
  if ("signIn" in w) {
    t("[connector upload] stopped: sign-in refused"), m("mcp_connector_file_upload", "sign_in_refused");
    let P = w.delivered.length === 0 ? w.signIn : new oS(w.signIn.serverName, `${l.connectorFiles.length === 1 ? "This call's file" : `This call's ${l.connectorFiles.length} files`} had already been sent to the connector when it refused the sign-in, so ${Cve(e.name)} did not run. Tell the user before sending again. ${w.signIn.message}`, w.signIn.authErrorKind, w.signIn.firstPartyBearer, w.signIn.requestedScope);
    throw PDn(P), P;
  }
  if ("refused" in w) return K(en(w.refused, e, toolPermissionContext_2, l.connectorFiles.length));
  return g("mcp_connector_file_upload"), {
    result: w.result
  };
}
function K({
  error: error_4,
  code: code_11
}) {
  throw t(`[connector upload] not sent: ${code_11}`), te(code_11), new R(error_4, "MCP connector file upload refused");
}
function O8o(e, n, r) {
  if (re(e) === void 0 && g6t(e.modelName, n, () => [], r, e.schema).asked === "nothing") return;
  K({
    error: `${Z(e)} Claude Code could not make a copy of this call's arguments, and it calls a connector's tool that takes files only with arguments it has copied and checked. Arguments that hold very many values, or lists and objects nested very deeply, cannot be copied: make the call with fewer or flatter ones. If these are neither, this is a bug in Claude Code that the user cannot fix.`,
    code: "arguments_not_plain"
  });
}
function te(e) {
  if (e === "not_a_path" || e === "resolves_elsewhere" || e === "too_many_files") c("mcp_connector_file_upload", e);else if (e !== "canceled") m("mcp_connector_file_upload", e);
}
var weakSet = new WeakSet();
function en({
  code: code_12,
  path: path_10,
  limit: limit_2,
  called: called,
  delivered: delivered_2,
  told: told_2
}, f, v, S) {
  let _ = Cve(f.name),
    b = S === 1 ? "this call's file" : `this call's ${S} files`,
    s = !called ? Z(f) : called === "unknown" ? `It is not known whether the connector received the call to ${_}. No file was sent.` : delivered_2.length === 0 ? `${_} was called, and ${S === 1 ? b + " had not" : "none of " + b + " had"} been sent to the connector when it stopped${told_2 ? "; the connector was told that nothing arrived" : ""}.` : delivered_2.length === S ? `${_} was called, and ${S === 1 ? b : "all of " + b} (${delivered_2.map(Llt).join(", ")}) had already been sent to the connector. Tell the user before sending again.` : `${_} was called, and ${delivered_2.length} of ${b} (${delivered_2.map(Llt).join(", ")}) had already been sent to the connector when it stopped${told_2 ? "; the connector was told which did not arrive" : ""}. Tell the user before sending any of them again.`,
    l = path_10 === void 0 ? "a file" : Llt(path_10),
    C = delivered_2.length === 0 ? " Tell the user." : "",
    x = called === !0 ? `${_} was called${delivered_2.length === 0 ? "" : `, and ${delivered_2.length} of ${b} (${delivered_2.map(Llt).join(", ")}) had already been sent to the connector`}${told_2 ? `; the connector was told that ${S === 1 ? "the file did not arrive" : delivered_2.length === 0 ? `none of ${b} arrived` : "the rest did not arrive"}` : ""}.` : `It is not known whether ${_} ran.`;
  switch (code_12) {
    case "path_rejected":
    case "credential_name":
    case "name_direction":
    case "too_many_blanks":
    case "too_large":
    case "too_large_total":
    case "hard_links":
    case "not_regular":
    case "moved":
    case "grew":
    case "open_failed":
    case "read_failed":
      return yt({
        argument: "",
        path: path_10 ?? ""
      }, code_12, f, v, s);
    case "canceled":
      return {
        error: `Sending files was interrupted. ${s}`,
        code: code_12
      };
    case "put_hash_mismatch":
    case "put_size_mismatch":
      return {
        error: `${l} was not passed on: Claude's upload service did not receive the bytes of the file the user approved. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "changed":
      return {
        error: `${l} changed after the user approved sending it, so it was not sent. ${s} The user approved the file as it was: ask them before sending it as it is now.`,
        code: code_12
      };
    case "put_too_large":
      return {
        error: `Cannot send ${l}: it is larger than ${limit_2 === void 0 ? "the receiver takes" : `the ${wt(limit_2)} the receiver takes`}. ${s}`,
        code: code_12
      };
    case "put_no_login":
      return {
        error: `${l} was not sent: sending files to a connector needs the user to be signed in to claude.ai in Claude Code. Tell the user to sign in with /login. ${s}`,
        code: code_12
      };
    case "put_login_refused":
      return {
        error: `${l} was not sent: Claude's upload service did not accept this sign-in. Tell the user to sign in again with /login. ${s}`,
        code: code_12
      };
    case "put_sign_in_refused":
      return {
        error: `${l} was not sent: Claude's sign-in check refused the request, so this file did not reach the connector; its answer does not say why. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_account_not_allowed":
      return {
        error: `${l} was not sent: Claude's upload service does not take files from this sign-in. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_feature_off":
      return {
        error: `${l} was not sent: sending files to connectors is not available for this account or its organization. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_org_not_allowed":
      return {
        error: `${l} was not sent: the organization's settings do not allow sending files to connectors. Do not retry. Tell the user; an admin of the organization decides this. ${s}`,
        code: code_12
      };
    case "put_region_not_allowed":
      return {
        error: `${l} was not sent: sending files to connectors is not available yet for workspaces whose data is kept in the EU. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_ip_allowlist_not_allowed":
      return {
        error: `${l} was not sent: sending files to connectors is not yet available for organizations that allow access only from approved IP addresses, as this one does. Do not retry, from this or another network. Tell the user. ${s}`,
        code: code_12
      };
    case "put_admin_limits_not_allowed":
      return {
        error: `${l} was not sent: sending files to connectors is not available yet in organizations where an admin or a HIPAA setting can limit which connectors and tools are used, because Claude's upload service cannot check those limits, and this organization is one of them. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_cloud_session_not_allowed":
      return {
        error: `${l} was not sent: Claude's upload service does not take files yet from Claude Code sessions that run in the cloud, nor from chats and tasks that run as one, and it took this request for one of those. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_bound_sign_in_not_allowed":
      return {
        error: `${l} was not sent: Claude's upload service does not take files from the kind of sign-in this request came with: one made for a single session or run, not the user's own sign-in. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_sign_in_not_accepted":
      return {
        error: `${l} was not sent: Claude's upload service cannot use the sign-in this request came with. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_not_available_for_request":
      return {
        error: `${l} was not sent: Claude's upload service said that sending files to connectors is not available for this request, for a reason this version of Claude Code does not recognize. Do not retry. Tell the user; a newer version of Claude Code may be able to say why. ${s}`,
        code: code_12
      };
    case "put_connector_not_allowed":
      return {
        error: `${l} was not sent: Claude's upload service does not send files to this connector for this account. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_connector_not_verified":
      return {
        error: `${l} was not sent: Claude's upload service could not confirm that this connector was added from Anthropic's connector directory at the address the directory lists for it. Do not retry. Tell the user; removing the connector and adding it again from the directory may fix this, and an admin of their organization may need to do that. ${s}`,
        code: code_12
      };
    case "put_connector_changed":
      return {
        error: `${l} was not sent: the connector, or its entry in Anthropic's connector directory, changed recently. ${s} Calling the tool again in a few minutes may work; ask the user first.`,
        code: code_12
      };
    case "put_request_refused":
      return {
        error: `${l} was not sent: Claude's upload service did not accept the request Claude Code made for it. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_target_refused":
      return {
        error: `${l} was not sent: Claude's upload service refused where or how the connector asked for it to be stored. Do not retry. Tell the user; the connector's maker has to change this. ${s}`,
        code: code_12
      };
    case "put_no_route":
      return {
        error: `${l} was not sent: Claude's upload service does not take files at this address yet. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_refused":
      return {
        error: `${l} was not sent: Claude's upload service did not take it. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "put_service_fault":
      return {
        error: `${l} was not passed on: Claude's upload service failed while handling it, a problem on Anthropic's side. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "put_storage_failed":
      return {
        error: `${l} did not arrive: sending it on to the connector's storage failed. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "put_try_later":
      return {
        error: `${l} was not sent: Claude's upload service could not take it just now. ${s} Trying again later may work; ask the user first.`,
        code: code_12
      };
    case "put_link_ran_out":
      return {
        error: `${l} was not sent in this attempt: its upload link ran out before Claude's upload service could take it, so the same upload link cannot be used again. ${s} Calling the tool again would start a new upload with a new link, which may work; ask the user first.`,
        code: code_12
      };
    case "upload_target_expired":
      return {
        error: `${l} was not sent: the connector's upload deadline passed before the upload started. ${s} Don't retry on your own. Tell the user the file wasn't sent, and ask before trying again. A new call starts a new upload with a new deadline and may work.`,
        code: code_12
      };
    case "put_incomplete":
      return {
        error: `${l} was not sent: Claude's upload service did not receive all of it. ${s} Trying again may work; ask the user first.`,
        code: code_12
      };
    case "put_busy":
      return {
        error: `${l} was not sent: Claude's upload service was busy. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "put_too_slow":
      return {
        error: `${l} was not sent: the connection was too slow for it to arrive in time. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "put_not_found":
      return {
        error: `${l} was not sent: the address the connector named for it was not known to Claude's upload service, or no longer valid. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "put_network":
      return {
        error: `${l} was not sent: the connection to Claude's upload service failed before it went. ${s} Ask the user before trying again.`,
        code: code_12
      };
    case "put_outcome_unknown":
      return {
        error: `It is not known whether ${l} reached the connector: it may be there. ${x} Tell the user, and do not send ${delivered_2.length === 0 ? "it" : "any of these files"} again unless they ask.`,
        code: code_12
      };
    case "upload_asked_twice":
      return {
        error: `The connector asked for this call's files a second time, which Claude Code does not answer. ${s}`,
        code: code_12
      };
    case "upload_connection_changed":
      return {
        error: `The connection to this connector changed after its tools were listed, and it can no longer take files, so the call could not go on. ${s}`,
        code: code_12
      };
    case "upload_call_failed":
      return {
        error: `The call to ${_} failed. ${s}`,
        code: code_12
      };
    case "upload_repeat_failed":
      return {
        error: `The call to ${_} failed after its files had been sent, so it is not known whether ${_} ran. ${s}`,
        code: code_12
      };
    case "upload_target_credentials":
    case "put_url_refused":
    case "put_header_refused":
      return {
        error: `${l} was not sent: the connector named a place for it that Claude Code does not send files to. ${s}`,
        code: code_12
      };
    case "put_client_fault":
      return {
        error: `${l} was not sent: Claude Code stopped before sending it because of a fault on its own side, in its code or its configuration, not because of the connector or the user's sign-in. Do not retry. Tell the user. ${s}`,
        code: code_12
      };
    case "policy_denied":
      return {
        error: `${l} was not sent: ${he.policy_denied} Do not retry. ${s}${C}`,
        code: code_12
      };
    case "policy_unread":
      return {
        error: `${l} was not sent: ${he.policy_unread} Do not retry. ${s}${C}`,
        code: code_12
      };
    case "uploads_off":
      {
        let U = r5e() ? void 0 : nar();
        return {
          error: U === "off" ? `${l} was not sent: sending files to connectors was turned off while the call was under way. Do not retry. ${s}${C}` : U === "unknown" ? `${l} was not sent: while the call was under way Claude Code could no longer tell whether sending files to connectors is on. ${s}${C}` : `${l} was not sent: Claude Code stopped sending files to connectors in this session while the call was under way. Do not retry. ${s}${C}`,
          code: code_12
        };
      }
    case "egress_blocked":
    case "essential_traffic":
      return {
        error: `${l} was not sent: files cannot be sent from this session. ${s}`,
        code: code_12
      };
    case "not_sent":
    case "put_threw":
    case "put_expired":
    case "put_already_used":
    case "put_failed":
    case "put_bad_answer":
      return {
        error: `${l} could not be sent. ${s} Ask the user before trying again.`,
        code: code_12
      };
    default:
      return {
        error: `The connector's answer was not one Claude Code can act on. ${s}`,
        code: code_12 === "upload_answer_after_files" || bBi.some(item => code_12 === `upload_answer_${item}`) ? code_12 : "unexpected"
      };
  }
}
export { I_a, R8o, A8o, x8o, P8o, O8o };