// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  A1t
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  kn
} from "B:/~BUN/root/chunk-t7d2hp9h.js";
var i = 2000,
  u = ["session_ingress_token", "environment_secret", "access_token", "secret", "token"],
  g = new RegExp(`"(${u.join("|")})"\\s*:\\s*"[^"]*"`, "g");

function c(e) {
  return e.replace(g, '"$1":"[REDACTED]"')
}

function QCs(e) {
  let n = e.replaceAll(`
`, "\\n");
  if (n.length <= i) return n;
  return n.slice(0, i) + `... (${n.length} chars)`
}

function z_o(e) {
  let n = typeof e === "string" ? e : _(e),
    r = c(n);
  if (r.length <= i) return r;
  return r.slice(0, i) + `... (${r.length} chars)`
}

function rRe(e) {
  return `sha12:${kn(typeof e==="string"?e:`${_(e)}`)}`
}

function ZCs(e) {
  return typeof e === "string" && /^[\w.-]{1,64}$/.test(e) ? e : `<${typeof e}>`
}

function AAr(e) {
  let n = d(e);
  if (e && typeof e === "object" && "response" in e) {
    let r = e.response,
      o = bz(r?.data);
    if (o) return `${n}: ${o}`
  }
  return n
}

function y_(e, n = Date.now()) {
  if (!e) return;
  let r = Number(e);
  if (Number.isFinite(r) && r >= 0) return r * 1000;
  let o = Date.parse(e);
  if (Number.isFinite(o)) {
    let s = o - n;
    return s > 0 ? s : void 0
  }
  return
}

function AD(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if ("error" in e && e.error !== null && typeof e.error === "object" && "message" in e.error && typeof e.error.message === "string") return e.error.message;
  return
}

function bz(e) {
  let n = AD(e);
  return n ? R$n(n, "error_message") : void 0
}

function R$n(e, n) {
  if (A1t(e, 1024)) return e;
  t(`[error-detail] left the service's text (${n}) out of the error shown: it has ${e.length} UTF-16 units and is not one plain line of at most 1,024 units`), l("tengu_service_error_detail_not_plain", {
    length: e.length,
    source: f(n)
  });
  return
}

function jFt(e) {
  if (!e || typeof e !== "object" || !("error" in e)) return;
  let n = e.error;
  if (!n || typeof n !== "object" || !("details" in n)) return;
  let r = n.details;
  if (r && typeof r === "object" && "error_code" in r && typeof r.error_code === "string") return r.error_code;
  return
}

function hO(e, n, r, o) {
  if (n) t(n);
  l("tengu_bridge_repl_skipped", {
    reason: f(e),
    ...r !== void 0 && {
      v2: r
    },
    ...o
  })
}
export {
  QCs,
  z_o,
  rRe,
  ZCs,
  AAr,
  y_,
  AD,
  bz,
  R$n,
  jFt,
  hO
};
