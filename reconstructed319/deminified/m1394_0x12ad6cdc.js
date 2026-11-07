// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bsr, E3e } from "B:/~BUN/root/chunk-pyp8n05h.js";
function gSn(e, n) {
  return {
    targets: e.filter(item => bsr(item, n)),
    outOfBandNote: E3e(e, !0, n)
  };
}
async function ySn(e, n) {
  let results = await Promise.allSettled(e.map(item => n(item.name))),
    connected = 0;
  for (let o of results) if (o.status === "fulfilled" && o.value.client.type === "connected") connected++;
  return {
    results: results,
    connected: connected
  };
}
export { gSn, ySn };