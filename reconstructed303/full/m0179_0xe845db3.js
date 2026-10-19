// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  V_
} from "B:/~BUN/root/chunk-xf0m410v.js";
import {
  he
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  C3n
} from "B:/~BUN/root/chunk-mndtcf0c.js";
import {
  rI,
  mu
} from "B:/~BUN/root/chunk-8ye9n4fk.js";

function cg(r) {
  console.error(he.red(r))
}

function un(r, e = "cli_error") {
  if (r) cg(r);
  V_(e), process.exit(1);
  return
}

function NH(r) {
  if (r) process.stdout.write(r + `
`);
  process.exit(0);
  return
}

function Nin(r) {
  process.exit(r);
  return
}
async function fp(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e())
  })
}

function Gv(r) {
  process.stderr.write(he.yellow(mu(r)) + `
`)
}
var t = 2000;
async function KU({
  waitForOAuthRefresh: r = !0
} = {}) {
  if (r) await C3n();
  await je(rI(), t);
  try {
    let {
      flushAnalyticsSinks: e
    } = await import("B:/~BUN/root/chunk-pj5q7zvg.js");
    await e()
  } catch {}
}
async function To(r) {
  await KU(), process.exit(r);
  return
}
async function os(r) {
  if (r) cg(r);
  return await KU(), un()
}
async function WE(r) {
  if (r) process.stdout.write(r + `
`);
  return await KU(), NH()
}
export {
  cg,
  un,
  NH,
  Nin,
  fp,
  Gv,
  KU,
  To,
  os,
  WE
};
