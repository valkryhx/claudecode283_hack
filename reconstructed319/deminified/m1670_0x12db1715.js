// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
async function cst(n, e) {
  return (await N$o(n, e))?.tags ?? null;
}
async function N$o(n, e) {
  try {
    let s = e.getAccessToken ? await e.getAccessToken() : void 0,
      {
        getBridgeSessionOrStatus: getBridgeSessionOrStatus
      } = await import("B:/~BUN/root/chunk-2fze9nr7.js"),
      {
        session: session
      } = await getBridgeSessionOrStatus(n, {
        baseUrl: e.baseUrl,
        ...(s && {
          getAccessToken: () => s
        }),
        credentials: e.credentials,
        useV2: !0
      });
    if (!session || !Array.isArray(session.tags)) return null;
    let a = typeof session.created_at === "string" ? Date.parse(session.created_at) : Number.NaN;
    return {
      tags: session.tags,
      createdAtMs: Number.isNaN(a) ? void 0 : a
    };
  } catch (error) {
    return t(`[bridge:session] session tag read failed: ${d(error)}`, {
      level: "warn"
    }), null;
  }
}
export { cst, N$o };