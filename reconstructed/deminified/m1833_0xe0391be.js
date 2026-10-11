// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { BB } from "B:/~BUN/root/chunk-rtxwm8ds.js";
import { P } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { o, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var i = f(() => u({
  deviceId: o(),
  name: o().default("Browser"),
  osPlatform: o().optional()
}));
async function Fwn(n) {
  let e = await yGt(n, "list_connected_browsers", {});
  if (!e) return [];
  let t = C(i()).safeParse(J(e));
  return t.success ? t.data : [];
}
async function yGt(n, name, t) {
  let s = await BB(n, {
      name: name,
      arguments: t
    }),
    r = Array.isArray(s.content) ? s.content[0] : void 0,
    c = r && typeof r === "object" && "text" in r && typeof r.text === "string" ? r.text : void 0;
  if (s.isError) throw new P(c || `${name} failed`, "claude-in-chrome tool call failed");
  return c;
}
export { Fwn, yGt };