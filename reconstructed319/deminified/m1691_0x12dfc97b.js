// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qxi, rPi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { qme } from "B:/~BUN/root/chunk-t383xyt8.js";
function $Wt({
  sessionId: sessionId,
  getAccessToken: getAccessToken,
  fetchSession: fetchSession,
  initial: initial,
  createOrigin: createOrigin
}) {
  if (!qme()) return;
  let o = !1,
    r = t => {
      if (!Array.isArray(t.tags)) throw Error("the session came without a readable tag list");
      return Qxi(t, o);
    };
  return rPi({
    ...(initial && {
      initial: initial.then(r)
    }),
    read: () => fetchSession(sessionId, {
      accessToken: getAccessToken()
    }).then(r)
  });
}
export { $Wt };