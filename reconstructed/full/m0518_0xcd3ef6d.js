// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  pH
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  x,
  s$
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  O_,
  f$t
} from "B:/~BUN/root/chunk-5kqdkjak.js";
import {
  hTe,
  TPr
} from "B:/~BUN/root/chunk-671s136j.js";
var t = 300000;

function QYt() {
  return a.CLAUDE_CODE_BRIEF || s$("tengu_kairos_brief", !1, t)
}

function r4o(e) {
  if (!e.includes(O_) && !e.includes(f$t)) return !1;
  if (hTe()) return !1;
  return QYt()
}

function Zze() {
  return pH() && QYt() || TPr()
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${O_} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;

function o4o() {
  let e = x("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r
}
export {
  QYt,
  r4o,
  Zze,
  o4o
};
