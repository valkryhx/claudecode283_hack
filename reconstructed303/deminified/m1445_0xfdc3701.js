// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { cxs, hxs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Ore } from "B:/~BUN/root/chunk-2r63p4c7.js";
function jSt({
  sessionId: sessionId,
  getAccessToken: getAccessToken,
  fetchSession: fetchSession,
  initial: initial,
  createOrigin: createOrigin
}) {
  if (!Ore()) return;
  let n = !1,
    r = o => cxs(o, n);
  return hxs({
    ...(initial && {
      initial: initial.then(r)
    }),
    read: () => fetchSession(sessionId, {
      accessToken: getAccessToken()
    }).then(r)
  });
}
export { jSt };