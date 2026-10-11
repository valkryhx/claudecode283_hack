// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
async function $Ie(n, e) {
  return (await Xrr(n, e))?.tags ?? null
}
async function Xrr(n, e) {
  try {
    let s = e.getAccessToken ? await e.getAccessToken() : void 0,
      {
        getBridgeSessionOrStatus: i
      } = await import("B:/~BUN/root/chunk-f33cyajj.js"),
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
    return t(`[bridge:session] session tag read failed: ${l(s)}`, {
      level: "warn"
    }), null
  }
}
export {
  $Ie,
  Xrr
};
