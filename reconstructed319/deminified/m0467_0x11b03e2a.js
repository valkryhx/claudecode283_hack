// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { yM } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ube } from "B:/~BUN/root/chunk-pj64ve92.js";
import { o, u, Be } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var a = 8192,
  k = 512,
  m = 200,
  w = 120,
  E = p(() => u({
    message: o().optional().catch(void 0),
    error: Be([o(), u({
      message: o()
    })]).optional().catch(void 0),
    detail: o().optional().catch(void 0)
  }));
function nfe(n, e, r) {
  let mediaType = O(n);
  return {
    mediaType: mediaType,
    ...P(mediaType, e, r),
    proxyError: A(n, r),
    requestId: h(n, r)
  };
}
function A(n, e) {
  let r = n?.["x-proxy-error"];
  return typeof r === "string" ? l(g(r), e, w) : void 0;
}
function h(n, e) {
  let r = n?.["x-request-id"];
  return typeof r === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(r) && e(r) === r ? r : void 0;
}
function O(n) {
  let e = n?.["content-type"];
  if (typeof e !== "string") return "";
  let r = e.indexOf(";");
  return (r === -1 ? e : e.slice(0, r)).replace(/^[\t\n\f\r ]+|[\t\n\f\r ]+$/g, "").replace(/[A-Z]/g, i => i.toLowerCase());
}
var f = {
  reason: void 0,
  code: void 0
};
function P(n, e, r) {
  let i = n === "application/json" || n.endsWith("+json"),
    s = typeof e === "string" ? g(e) : S(e);
  if (s !== void 0) {
    let {
      text: text,
      truncated: truncated
    } = s;
    if (text.includes("\uFFFD") || text.includes("\x00")) return f;
    if (i || n === "" && text.trimStart().startsWith("{")) return truncated ? f : b(et(text, !1), r);
    return {
      reason: n === "text/plain" ? l(s, r, m) : void 0,
      code: void 0
    };
  }
  if (e !== null && typeof e === "object") return b(e, r);
  return f;
}
function b(n, e) {
  let r = E().safeParse(n);
  if (!r.success) return f;
  let {
      message: message,
      error: error,
      detail: detail
    } = r.data,
    c = typeof error === "string" ? error : error?.message,
    y = [message, c, detail].find(item => item !== void 0 && item.trim() !== "");
  return {
    reason: y === void 0 ? void 0 : l(g(y), e, m),
    code: typeof error === "string" && ube(error) ? error : void 0
  };
}
function l({
  text: text_2,
  truncated: truncated_2
}, r, i) {
  let s = r(text_2),
    d = truncated_2 ? Q(s, s.length - k) : s,
    c = Et(d, i);
  return c === "" ? void 0 : c;
}
function g(n) {
  return {
    text: Q(n, a),
    truncated: n.length > a
  };
}
function S(n) {
  let e;
  if (n instanceof ArrayBuffer) e = new Uint8Array(n);else if (ArrayBuffer.isView(n)) e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);else return;
  let truncated_3 = e.byteLength > a,
    i = truncated_3 ? T(e, a) : e.byteLength;
  return {
    text: new TextDecoder("utf-8").decode(e.subarray(0, i)),
    truncated: truncated_3
  };
}
function T(n, e) {
  let r = e - 1,
    i = 0;
  while (r >= 0 && i < 3 && ((n[r] ?? 0) & 192) === 128) r--, i++;
  if (r < 0) return e;
  let s = n[r] ?? 0,
    d = s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
  return i + 1 < d ? r : e;
}
var _ = "x-proxy-error",
  R = "x-deny-reason";
function rV(n, e) {
  return n === 403 && (e?.[_] === "blocked-by-allowlist" || e?.[R] === "host_not_allowed");
}
function rgt(n) {
  let e = yM(n);
  return e !== void 0 && rV(e.connectStatus, e.headers);
}
function xCs(n, e) {
  if (n !== 403) return;
  if (e.mediaType === "text/plain" && z(e.reason)) return "proxy_denied";
  if (e.code !== "content_scan_blocked") return;
  return e.reason?.endsWith("(fail closed)") ? "content_scan_transient" : "content_scan_permanent";
}
function z(n) {
  return !1;
}
function DFt({
  status: status,
  headers: headers,
  data: data,
  redact: redact,
  label: label
}) {
  if (status !== 403) return;
  let d = nfe(headers, data, redact),
    c = xCs(status, d);
  if (c !== void 0) t(`${label}: sandbox proxy denied, ${c} (${d.reason ?? "no reason"})`);
  return c;
}
var LFt = {
  content_scan_transient: "artifact content fetch blocked: the sandbox proxy's content scan was unavailable (HTTP 403). This is transient; retry.",
  content_scan_permanent: "artifact content fetch blocked: the sandbox proxy's content scan refused this content (HTTP 403); retrying will not help.",
  proxy_denied: "artifact content fetch blocked by the sandbox proxy's policy (HTTP 403); retrying will not help."
};
function CKi(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 429;
}
function D(n, e, r) {
  let i = n?.[e];
  return typeof i === "string" && i.length <= 64 && r.test(i) ? i : void 0;
}
function NFt(n) {
  return D(n, _, /^[a-z0-9_-]+$/);
}
function rfe(n) {
  return D(n, R, /^[a-z0-9_]+$/);
}
export { nfe, rV, rgt, xCs, DFt, LFt, CKi, NFt, rfe };