// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { TB } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { Re } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { G6e } from "B:/~BUN/root/chunk-k382hx6g.js";
import { _Re } from "B:/~BUN/root/chunk-k2vxf90r.js";
import { zs } from "B:/~BUN/root/chunk-c2nm18xm.js";
function Wsr(e, r, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, a => ({
    ...a,
    messages: G6e(a.messages, r)
  }));
}
function Wqt(e, r, s, origin) {
  let n = s.get(e);
  if (!n || zs(n.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);
    return;
  }
  s.update(e, m => ({
    ...m,
    pendingUserMessages: [...m.pendingUserMessages, {
      text: r,
      origin: origin
    }]
  })), s.updateTranscript(e, m => ({
    ...m,
    messages: G6e(m.messages, Re({
      content: r,
      origin: origin
    }))
  }));
}
function p8r(e, r, s) {
  let a = _Re(TB(r, s), e);
  if (a?.status === "running") a.retryWake?.emit();
}
export { Wsr, Wqt, p8r };