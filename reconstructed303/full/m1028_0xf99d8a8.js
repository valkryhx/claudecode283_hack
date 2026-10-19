// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  J9e,
  Q1e
} from "B:/~BUN/root/chunk-66hg7026.js";
import {
  kt,
  fFt
} from "B:/~BUN/root/chunk-ydtn2zrk.js";
import {
  Jst
} from "B:/~BUN/root/chunk-grt0b3xy.js";
async function Cp(r, e, o, t) {
  let a = kt(r.slug);
  if (!!e.toolUseId && a?.lastProbeToolUseId === e.toolUseId) return;
  let s = Date.now(),
    [l] = await Promise.all([Jst(r, e.abortController.signal, e.credentials, t), Q1e() ? J9e(r, e.abortController.signal) : void 0]);
  fFt(r.slug, l, {
    consumedByCheck: !0,
    toolUseId: e.toolUseId,
    issuedAt: s,
    debugLabel: o
  })
}
async function LPn(r, e, o) {
  let t = Date.now(),
    a = await Jst(r, e.abortController.signal, e.credentials);
  fFt(r.slug, a, {
    consumedByCheck: !1,
    toolUseId: e.toolUseId,
    issuedAt: t,
    debugLabel: o
  })
}
export {
  Cp,
  LPn
};
