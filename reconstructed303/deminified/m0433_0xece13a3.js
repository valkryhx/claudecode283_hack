// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { Xn } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Fn, Xa, Et, dWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { hostname as n } from "os";
function pO() {
  return;
}
function Jfe() {
  return;
}
function MT() {
  let e = pO();
  if (e !== void 0) return e;
  if (!Xn() || !Et()) return;
  return Fn()?.accessToken;
}
async function Uk(e) {
  if (!(W() && e !== void 0)) return MT();
  let r = pO();
  if (r !== void 0) return r;
  if (!Xn() || !(await dWe(e))) return;
  return (await Xa(e))?.accessToken;
}
function PN() {
  return Jfe() ?? ln().BASE_API_URL;
}
function ZBe() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}
function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export { pO, Jfe, MT, Uk, PN, ZBe };