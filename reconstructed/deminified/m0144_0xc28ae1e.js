// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
var g = 2000,
  f = ["session_ingress_token", "environment_secret", "access_token", "secret", "token"],
  regExp = new RegExp(`"(${f.join("|")})"\\s*:\\s*"[^"]*"`, "g");
function p(e) {
  return e.replace(regExp, '"$1":"[REDACTED]"');
}
function oVn(e) {
  let r = e.replaceAll(`
`, "\\n");
  if (r.length <= g) return r;
  return r.slice(0, g) + `... (${r.length} chars)`;
}
function Qcn(e) {
  let r = typeof e === "string" ? e : b(e),
    n = p(r);
  if (n.length <= g) return n;
  return n.slice(0, g) + `... (${n.length} chars)`;
}
function NX(e) {
  return `sha12:${pn(typeof e === "string" ? e : `${b(e)}`)}`;
}
function sVn(e) {
  return typeof e === "string" && /^[\w.-]{1,64}$/.test(e) ? e : `<${typeof e}>`;
}
function aNt(e) {
  let r = l(e);
  if (e && typeof e === "object" && "response" in e) {
    let response = e.response;
    if (response?.data && typeof response.data === "object") {
      let o = response.data,
        s = typeof o.message === "string" ? o.message : typeof o.error === "object" && o.error && "message" in o.error && typeof o.error.message === "string" ? o.error.message : void 0;
      if (s) return `${r}: ${s}`;
    }
  }
  return r;
}
function oh(e, r = Date.now()) {
  if (!e) return;
  let n = Number(e);
  if (Number.isFinite(n) && n >= 0) return n * 1000;
  let o = Date.parse(e);
  if (Number.isFinite(o)) {
    let s = o - r;
    return s > 0 ? s : void 0;
  }
  return;
}
function rp(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if ("error" in e && e.error !== null && typeof e.error === "object" && "message" in e.error && typeof e.error.message === "string") return e.error.message;
  return;
}
function Ev(e, r, v2, o) {
  if (r) t(r);
  i("tengu_bridge_repl_skipped", {
    reason: c(e),
    ...(v2 !== void 0 && {
      v2: v2
    }),
    ...o
  });
}
export { oVn, Qcn, NX, sVn, aNt, oh, rp, Ev };