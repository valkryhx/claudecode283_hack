// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  zjs,
  zzs
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  ULs,
  Bv
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  gDe
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  Hj
} from "B:/~BUN/root/chunk-z8fd2x5s.js";
import {
  ht
} from "B:/~BUN/root/chunk-2fccb5hn.js";
import {
  Wa,
  mWn,
  n3
} from "B:/~BUN/root/chunk-vd11ggb1.js";
import {
  au
} from "B:/~BUN/root/chunk-tkkhtfwq.js";
import {
  uO
} from "B:/~BUN/root/chunk-bz6z3szz.js";
import {
  vM,
  hDs,
  yDs,
  _Ds,
  bDs
} from "B:/~BUN/root/chunk-th6c28ah.js";
import {
  Si
} from "B:/~BUN/root/chunk-bk5b2aym.js";
var gx = "ReportFindings",
  uvo = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
var wN = "EnterWorktree";
var nOe = "ShareOnboardingGuide",
  pvo = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
var u = import.meta.require("B:/~BUN/root/chunk-ze8xz0p1.js").BRIEF_TOOL_NAME,
  d = new Set([gx, au, nOe]),
  c = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,
  m = " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",
  p = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,
  h = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;

function nX(e, r) {
  return zjs(e.name) ?? hBe(e, r)
}

function hBe(e, r) {
  if (e.alwaysLoad === !0) return !1;
  if (O(e, r)) return !1;
  if (mWn()) return !1;
  return T(e)
}

function T(e) {
  if (e.isMcp === !0) return !0;
  if (hDs() && Bv(e, d)) return !0;
  if (Bv(e, yDs())) return !0;
  return e.shouldDefer === !0
}

function O(e, r) {
  return s(e, r) || E(e) || l(e)
}

function s(e, r = vM()) {
  if (Bv(e, r)) return !0;
  if (e.isMcp === !0) return !1;
  if (e.name === Si) return !0;
  if (e.name === Wa) return !0;
  if (e.name === ht) {
    let t = import.meta.require("B:/~BUN/root/chunk-48asd42x.js");
    if (t.isForkSubagentEnabled()) return !0
  }
  if (e.name === u) return !0;
  if (l(e) && !bDs()) return !0;
  return !1
}

function E(e) {
  return e.isMcp !== !0 && e.name === wN && a.CLAUDE_CODE_SESSION_KIND === "bg"
}

function l(e) {
  return e.isMcp !== !0 && e.name === uO && gDe()
}

function wee(e, r, t, {
  toolSearchAbsent: f = !1,
  placements: o = "hooks",
  nonDeferrableBuiltins: n
} = {}) {
  let i = o === "hooks" ? zjs(e.name) : void 0;
  if (i !== void 0) return i;
  if (f) {
    if (r === void 0) return !1
  } else if (r === void 0) return o === "hooks" ? nX(e, n) : hBe(e, n);
  if (t !== void 0 && n3(t)) return !1;
  if (s(e, n)) return !1;
  return !r.has(e.name)
}

function fvo(e) {
  let r = _Ds(e.name) ?? e.whenToUse;
  return r !== void 0 && nX(e) ? `${e.name}: ${r}` : e.name
}

function WCr(e = {}) {
  return (Hj(e) ? ULs : c) + (zzs() ? p : m) + h
}
export {
  wN,
  gx,
  uvo,
  nOe,
  pvo,
  nX,
  hBe,
  wee,
  fvo,
  WCr
};
