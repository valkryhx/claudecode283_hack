// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Utr,
  YXr
} from "B:/~BUN/root/chunk-6q0mnrxy.js";
import {
  g5
} from "B:/~BUN/root/chunk-xm1ntk3q.js";

function Q9e({
  sessionId: s,
  getAccessToken: r,
  fetchSession: t,
  initial: e
}) {
  if (!g5()) return;
  return YXr({
    ...e && {
      initial: e.then(Utr)
    },
    read: () => t(s, {
      accessToken: r()
    }).then(Utr)
  })
}
export {
  Q9e
};
