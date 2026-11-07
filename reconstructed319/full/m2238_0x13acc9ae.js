// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  En
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  c0,
  GR,
  iv,
  Dw
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  eg,
  Axo
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  FP
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  dirname as v,
  join as a
} from "path";
import {
  realpath as f
} from "fs";
import {
  promisify as m
} from "util";
var h = m(f.native);

function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : c0(e) || "empty-id"
}
async function d(e, t, {
  isRootResolved: n = !1
} = {}) {
  return n ? En(e) : Dw(e, FP(t))
}
async function Vri(e, t, n, i) {
  return a(iv(await d(e, n, i)), jqr(t))
}
async function Kri(e, t, n, i) {
  let o = await d(e, n, i),
    p = a(iv(o), jqr(t)),
    r = GR(o),
    s = n === void 0 ? void 0 : C2o(r, t);
  return {
    path: p,
    projectKey: r,
    v5: n === void 0 || s === void 0 ? void 0 : {
      backend: n,
      key: s
    }
  }
}

function C2o(e, t) {
  let n = Ve.dirSyncRecord(e, c(t));
  return eg(n) === void 0 ? n : void 0
}

function jqr(e) {
  return `${c(e)}${Axo}`
}
export {
  Vri,
  Kri,
  C2o,
  jqr
};
