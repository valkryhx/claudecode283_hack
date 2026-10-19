// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { FRn, ANe } from "B:/~BUN/root/chunk-pj523hfd.js";
function q4t(e, n) {
  return {
    targets: e.filter(item => FRn(item, n)),
    outOfBandNote: ANe(e, !0, n)
  };
}
async function K4t(e, n) {
  let results = await Promise.allSettled(e.map(item => n(item.name))),
    connected = 0;
  for (let o of results) if (o.status === "fulfilled" && o.value.client.type === "connected") connected++;
  return {
    results: results,
    connected: connected
  };
}
export { q4t, K4t };