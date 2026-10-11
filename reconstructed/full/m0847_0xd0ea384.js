// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ft,
  T3e
} from "B:/~BUN/root/chunk-faawr4jv.js";
import {
  QNe,
  $Te
} from "B:/~BUN/root/chunk-7d9qjs8x.js";
import {
  G0e
} from "B:/~BUN/root/chunk-7z8vew74.js";
async function Ku(r, e, o) {
  let t = ft(r.slug);
  if (!!e.toolUseId && t?.lastProbeToolUseId === e.toolUseId) return;
  let s = Date.now(),
    [l] = await Promise.all([G0e(r, e.abortController.signal, e.credentials), $Te() ? QNe(r, e.abortController.signal) : void 0]);
  T3e(r.slug, l, {
    consumedByCheck: !0,
    toolUseId: e.toolUseId,
    issuedAt: s,
    debugLabel: o
  })
}
async function yYt(r, e, o) {
  let t = Date.now(),
    a = await G0e(r, e.abortController.signal, e.credentials);
  T3e(r.slug, a, {
    consumedByCheck: !1,
    toolUseId: e.toolUseId,
    issuedAt: t,
    debugLabel: o
  })
}
export {
  Ku,
  yYt
};
