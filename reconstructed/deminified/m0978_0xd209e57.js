// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Kx, nS, gu, Ru } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { em, FYn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Cg } from "B:/~BUN/root/chunk-esqb9g1a.js";
import { dirname as c, join as r } from "path";
function i4(t) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(t) ? t : Kx(t);
}
async function Wwt(t, e, n) {
  return r(gu(await Ru(t, Cg(n))), y3t(e));
}
async function d7(t, e, backend) {
  let o = await Ru(t, Cg(backend)),
    path = r(gu(o), y3t(e)),
    projectKey = nS(o),
    key = backend === void 0 ? void 0 : KCn(projectKey, e);
  return {
    path: path,
    projectKey: projectKey,
    v5: backend === void 0 || key === void 0 ? void 0 : {
      backend: backend,
      key: key
    }
  };
}
function KCn(t, e) {
  let n = Ae.dirSyncRecord(t, i4(e));
  return em(n) === void 0 ? n : void 0;
}
function y3t(t) {
  return `${i4(t)}${FYn}`;
}
var p = ".dir-sync-empty.json";
function d(t) {
  return `${i4(t)}${p}`;
}
function zwt(t, e) {
  return r(c(t), d(e));
}
export { i4, Wwt, d7, KCn, y3t, zwt };