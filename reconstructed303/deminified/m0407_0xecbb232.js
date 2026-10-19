// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { QW } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { E, c2 } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { im, zcn } from "B:/~BUN/root/chunk-hvvs3ef6.js";
import { YPe, Vwo } from "B:/~BUN/root/chunk-5y3z8s12.js";
var t = 300000;
function Hjn() {
  return a.CLAUDE_CODE_BRIEF || c2("tengu_kairos_brief", !1, t);
}
function Goi(e) {
  if (!e.includes(im) && !e.includes(zcn)) return !1;
  if (YPe()) return !1;
  return Hjn();
}
function hM() {
  return QW() && Hjn() || Vwo();
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${im} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function Voi() {
  let e = E("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
export { Hjn, Goi, hM, Voi };