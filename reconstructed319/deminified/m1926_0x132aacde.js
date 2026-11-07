// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { RV } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Ie } from "B:/~BUN/root/chunk-27h4st9h.js";
import { tp, fut } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { sBe } from "B:/~BUN/root/chunk-tfgfye7t.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
function OKr(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, n => ({
    ...n,
    messages: fut(n.messages, a)
  }));
}
function eKt(e, a, s, origin) {
  let o = s.get(e);
  if (!o || Ko(o.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);
    return;
  }
  let i = Ie({
    content: a,
    origin: origin
  });
  s.update(e, r => ({
    ...r,
    pendingUserMessages: [...r.pendingUserMessages, {
      text: a,
      origin: origin,
      shownAs: i.uuid
    }]
  })), s.updateTranscript(e, r => ({
    ...r,
    messages: fut(r.messages, i)
  }));
}
function Xzo(e, a) {
  let s = a.get(e);
  if (!tp(s) || !s.awaitingPlanApproval) return;
  a.update(e, n => ({
    ...n,
    awaitingPlanApproval: !1,
    pendingPlanApproval: void 0
  })), eKt(e, "The person moved you out of plan mode. Continue your work.", a, {
    kind: "task-notification"
  });
}
function Jzo(e, a, s) {
  let n = sBe(RV(a, s), e);
  if (n?.status === "running") n.retryWake?.emit();
}
export { OKr, eKt, Xzo, Jzo };