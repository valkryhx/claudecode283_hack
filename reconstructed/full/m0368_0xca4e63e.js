// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  fh
} from "B:/~BUN/root/chunk-0fnha6bz.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  D_
} from "B:/~BUN/root/chunk-jyd3kywp.js";

function hx(r) {
  console.error(pe.red(r))
}

function nn(r, e = "cli_error") {
  if (r) hx(r);
  fh(e), process.exit(1);
  return
}

function xw(r) {
  if (r) process.stdout.write(r + `
`);
  process.exit(0);
  return
}
async function Oh(r) {
  await new Promise((e) => {
    process.stdout.write(r, () => e())
  })
}

function Hk(r) {
  process.stderr.write(pe.yellow(D_(r)) + `
`)
}
async function Lle() {
  try {
    let {
      flushAnalyticsSinks: r
    } = await import("B:/~BUN/root/chunk-3qc2x2js.js");
    await r()
  } catch {}
}
async function Ds(r) {
  await Lle(), process.exit(r);
  return
}
async function Fi(r) {
  return await Lle(), nn(r)
}
async function cN(r) {
  if (r) process.stdout.write(r + `
`);
  return await Lle(), xw()
}
export {
  hx,
  nn,
  xw,
  Oh,
  Hk,
  Lle,
  Ds,
  Fi,
  cN
};
