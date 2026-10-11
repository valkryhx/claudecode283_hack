// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { zn } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { un, Na, pt, gRe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { hostname as n } from "os";
function p0() {
  return;
}
function Yee() {
  return;
}
function hv() {
  let e = p0();
  if (e !== void 0) return e;
  if (!zn() || !pt()) return;
  return un()?.accessToken;
}
async function Ak(e) {
  if (!(H() && e !== void 0)) return hv();
  let r = p0();
  if (r !== void 0) return r;
  if (!zn() || !(await gRe(e))) return;
  return (await Na(e))?.accessToken;
}
function dI() {
  return Yee() ?? an().BASE_API_URL;
}
function HTe() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}
function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export { p0, Yee, hv, Ak, dI, HTe };