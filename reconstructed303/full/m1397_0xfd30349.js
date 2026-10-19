// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
async function TVe(n, e) {
  return (await Bqr(n, e))?.tags ?? null
}
async function Bqr(n, e) {
  try {
    let s = e.getAccessToken ? await e.getAccessToken() : void 0,
      {
        getBridgeSessionOrStatus: i
      } = await import("B:/~BUN/root/chunk-m1jag8f2.js"),
      {
        session: r
      } = await i(n, {
        baseUrl: e.baseUrl,
        ...s && {
          getAccessToken: () => s
        },
        credentials: e.credentials,
        useV2: !0
      });
    if (!r || !Array.isArray(r.tags)) return null;
    let a = typeof r.created_at === "string" ? Date.parse(r.created_at) : Number.NaN;
    return {
      tags: r.tags,
      createdAtMs: Number.isNaN(a) ? void 0 : a
    }
  } catch (s) {
    return t(`[bridge:session] session tag read failed: ${d(s)}`, {
      level: "warn"
    }), null
  }
}
export {
  TVe,
  Bqr
};
