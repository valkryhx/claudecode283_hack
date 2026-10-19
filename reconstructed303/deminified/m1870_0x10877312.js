// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $n } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { s0, cE, iS, $_ } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Gm, $Ur } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { wC } from "B:/~BUN/root/chunk-k798mzph.js";
import { dirname as v, join as a } from "path";
import { realpath as f } from "fs";
import { promisify as m } from "util";
var h = m(f.native);
function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : s0(e) || "empty-id";
}
async function d(e, t, {
  isRootResolved = !1
} = {}) {
  return isRootResolved ? $n(e) : $_(e, wC(t));
}
async function res(e, t, n, i) {
  return a(iS(await d(e, n, i)), Rir(t));
}
async function oes(e, t, backend, i) {
  let o = await d(e, backend, i),
    path = a(iS(o), Rir(t)),
    projectKey = cE(o),
    key = backend === void 0 ? void 0 : e9r(projectKey, t);
  return {
    path: path,
    projectKey: projectKey,
    v5: backend === void 0 || key === void 0 ? void 0 : {
      backend: backend,
      key: key
    }
  };
}
function e9r(e, t) {
  let n = Be.dirSyncRecord(e, c(t));
  return Gm(n) === void 0 ? n : void 0;
}
function Rir(e) {
  return `${c(e)}${$Ur}`;
}
export { res, oes, e9r, Rir };