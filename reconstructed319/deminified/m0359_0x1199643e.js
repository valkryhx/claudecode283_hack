// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Yv } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { p_t, Uin } from "B:/~BUN/root/chunk-7s3m410n.js";
import { LR } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ca } from "B:/~BUN/root/chunk-65zedn3n.js";
function lp(r) {
  console.error(Se.red(r));
}
function vn(r, e = "cli_error") {
  if (r) lp(r);
  if (!Qp()) Yv(e);
  process.exit(1);
  return;
}
function hz(r) {
  if (r) process.stdout.write(r + `
`);
  process.exit(0);
  return;
}
function Ynn(r) {
  process.exit(r);
  return;
}
async function Xu(r) {
  await new Promise(e => {
    process.stdout.write(r, () => e());
  });
}
function WF(r) {
  process.stderr.write(Se.yellow(Ca(r)) + `
`);
}
var t = 2000,
  n = 250;
async function nV({
  waitForOAuthRefresh = !0
} = {}) {
  let e = p_t();
  if (waitForOAuthRefresh && !e) await Uin();
  await we(LR(), t);
  try {
    let {
      flushAnalyticsSinks: flushAnalyticsSinks
    } = await import("B:/~BUN/root/chunk-a0wg31p3.js");
    await flushAnalyticsSinks();
  } catch {}
  if (waitForOAuthRefresh && e) await Uin(), await we(LR(), n);
}
async function Co(r) {
  await nV(), process.exit(r);
  return;
}
async function ho(r) {
  if (r) lp(r);
  return await nV(), vn();
}
async function fk(r) {
  if (r) process.stdout.write(r + `
`);
  return await nV(), hz();
}
export { lp, vn, hz, Ynn, Xu, WF, nV, Co, ho, fk };