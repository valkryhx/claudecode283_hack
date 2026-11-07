// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _Os, o9i } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Mv } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { Sj } from "B:/~BUN/root/chunk-65j2302z.js";
import { KI, _Vi, bVi } from "B:/~BUN/root/chunk-gezr7m08.js";
import { ft } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { rzi, p3, cl, X2, h_ } from "B:/~BUN/root/chunk-78494p3w.js";
import { qu } from "B:/~BUN/root/chunk-8rnfdnh3.js";
import { TL } from "B:/~BUN/root/chunk-p3n5gp58.js";
import { as } from "B:/~BUN/root/chunk-w4y83tgx.js";
var aD = "ReportFindings",
  lms = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
var hA = "EnterWorktree";
var lze = "ShareOnboardingGuide",
  dms = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
var BRIEF_TOOL_NAME = import.meta.require("B:/~BUN/root/chunk-3k3je0bs.js").BRIEF_TOOL_NAME,
  m = new Set([aD, qu, lze]),
  h = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,
  p = " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",
  T = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,
  O = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;
function B6(e, n) {
  return _Os(e.name) ?? HXe(e, n);
}
function HXe(e, n) {
  if (e.alwaysLoad === !0) return !1;
  if (f(e, n)) return !1;
  if (X2()) return !1;
  return l(e);
}
function cms(e) {
  let n = _Os(e.name);
  if (n !== void 0) return n;
  if (e.alwaysLoad === !0 || f(e)) return !1;
  return l(e);
}
function l(e) {
  if (e.isMcp === !0) return !0;
  if (_Vi() && Mv(e, m)) return !0;
  return e.shouldDefer === !0;
}
function f(e, n) {
  return u(e, n) || E(e) || d(e);
}
function u(e, n = KI()) {
  if (Mv(e, n)) return !0;
  if (e.isMcp === !0) return !1;
  if (e.name === as) return !0;
  if (e.name === cl) return !0;
  if (e.name === ft) {
    let r = import.meta.require("B:/~BUN/root/chunk-8aww5yvp.js");
    if (r.isForkSubagentEnabled()) return !0;
  }
  if (e.name === BRIEF_TOOL_NAME) return !0;
  if (d(e) && !bVi()) return !0;
  return !1;
}
function E(e) {
  return e.isMcp !== !0 && e.name === hA && i.CLAUDE_CODE_SESSION_KIND === "bg";
}
function d(e) {
  return e.isMcp !== !0 && e.name === TL && Sj();
}
function O2(e, n, r, {
  toolSearchAbsent = !1,
  placements = "hooks",
  nonDeferrableBuiltins: nonDeferrableBuiltins
} = {}) {
  let a = placements === "hooks" ? _Os(e.name) : void 0;
  if (a !== void 0) return a;
  if (toolSearchAbsent) {
    if (n === void 0) return !1;
  } else if (n === void 0) return placements === "hooks" ? B6(e, nonDeferrableBuiltins) : HXe(e, nonDeferrableBuiltins);
  if (r !== void 0 && h_(r)) return !1;
  if (u(e, nonDeferrableBuiltins)) return !1;
  return !n.has(e.name);
}
function ums(e) {
  return e.whenToUse !== void 0 && B6(e) ? `${e.name}: ${e.whenToUse}` : e.name;
}
function zdo(e = {}) {
  return (p3(e) ? rzi : h) + (o9i() ? T : p) + O;
}
function Gdo(e, {
  heldInlineTools: heldInlineTools,
  nonDeferrableBuiltins: nonDeferrableBuiltins_2,
  listed: listed
}) {
  return heldInlineTools !== void 0 && !B6(e, nonDeferrableBuiltins_2) && !listed.has(e.name);
}
function fms(e, n) {
  if (!O2(e, n.heldInlineTools, void 0, {
    nonDeferrableBuiltins: n.nonDeferrableBuiltins
  }) || n.announced.has(e.name)) return;
  if (n.listed.has(e.name)) return n.withdrawn.has(e.name) ? "again" : void 0;
  return Gdo(e, n) ? "surfaced" : void 0;
}
export { hA, aD, lms, lze, dms, B6, HXe, cms, O2, ums, zdo, Gdo, fms };