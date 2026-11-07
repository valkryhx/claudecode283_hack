// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { Fn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Zyt, EV, AR } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Ln, Kl, Rt, qZe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { OJ } from "B:/~BUN/root/chunk-xc0c1vfp.js";
import { Lie } from "B:/~BUN/root/chunk-qfq22jk9.js";
import { pue } from "B:/~BUN/root/chunk-7pj7keyk.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { hostname as i } from "os";
function bA() {
  return;
}
function _mt(e = OJ(), n) {
  if (bA() !== void 0) return !1;
  return pue(e) || n !== void 0 && n !== Ln()?.accessToken && pue(e, !0);
}
function JW() {
  let e = bA();
  if (e !== void 0) return e;
  if (!Fn() || !Rt()) return;
  return Lie(Ln())?.accessToken;
}
async function pD(e) {
  if (!(X() && e !== void 0)) return JW();
  let n = bA();
  if (n !== void 0) return n;
  if (!Fn() || !(await qZe(e))) return;
  return Lie(await Kl(e))?.accessToken;
}
function ELe() {
  let e = JW();
  if (e === void 0 || bA() !== void 0) return e;
  return Zyt() ?? e;
}
async function gLt(e) {
  let n = await pD(e);
  if (n === void 0 || bA() !== void 0) return n;
  return (await EV()) ?? n;
}
async function BSs(e, n, r = !1) {
  if ((await AR(e, r ? "withheld" : "refused")) === "not_held") return;
  return gLt(n);
}
function E1() {
  return OJ() ?? nn().BASE_API_URL;
}
function VJe() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || i();
  return t(e) || "remote-control";
}
function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export { bA, _mt, JW, pD, ELe, gLt, BSs, E1, VJe };