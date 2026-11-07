// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bsr,
  E3e
} from "B:/~BUN/root/chunk-pyp8n05h.js";

function gSn(e, n) {
  return {
    targets: e.filter((t) => bsr(t, n)),
    outOfBandNote: E3e(e, !0, n)
  }
}
async function ySn(e, n) {
  let t = await Promise.allSettled(e.map((o) => n(o.name))),
    r = 0;
  for (let o of t)
    if (o.status === "fulfilled" && o.value.client.type === "connected") r++;
  return {
    results: t,
    connected: r
  }
}
export {
  gSn,
  ySn
};
