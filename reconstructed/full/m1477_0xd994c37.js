// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  wD
} from "B:/~BUN/root/chunk-3wnb3s8p.js";
import {
  Ce
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Gue
} from "B:/~BUN/root/chunk-0z00jn29.js";
import {
  lLe
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  ui
} from "B:/~BUN/root/chunk-3qp6kts8.js";

function _En(e, r, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (a) => ({
    ...a,
    messages: lLe(a.messages, r)
  }))
}

function Nbt(e, r, s, a) {
  let n = s.get(e);
  if (!n || ui(n.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);
    return
  }
  s.update(e, (m) => ({
    ...m,
    pendingUserMessages: [...m.pendingUserMessages, {
      text: r,
      origin: a
    }]
  })), s.updateTranscript(e, (m) => ({
    ...m,
    messages: lLe(m.messages, Ce({
      content: r,
      origin: a
    }))
  }))
}

function Fnr(e, r, s) {
  let a = Gue(wD(r, s), e);
  if (a?.status === "running") a.retryWake?.emit()
}
export {
  _En,
  Nbt,
  Fnr
};
