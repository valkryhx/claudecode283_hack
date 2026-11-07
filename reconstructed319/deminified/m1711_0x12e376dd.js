// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { FFr } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { SLi } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { uD } from "B:/~BUN/root/chunk-dcmvdxnm.js";
var e = 2000;
async function S2t() {
  if (x() === "windows") {
    uD();
    return;
  }
  await we(SLi().catch(() => {
    return;
  }), e);
}
function nXs() {
  return x() === "windows" || FFr() !== void 0;
}
export { S2t, nXs };