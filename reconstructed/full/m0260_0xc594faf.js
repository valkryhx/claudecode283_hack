// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q0o,
  $Do
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  $b
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  T_e
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  bi,
  win,
  gz
} from "B:/~BUN/root/chunk-9mfh08mz.js";
import {
  Fd
} from "B:/~BUN/root/chunk-y2pt1fm0.js";
import {
  Al
} from "B:/~BUN/root/chunk-rcz149rn.js";
import {
  aI
} from "B:/~BUN/root/chunk-rcvs5252.js";
import {
  ENe
} from "B:/~BUN/root/chunk-y1qe7zsr.js";
import {
  xxo,
  Pxo
} from "B:/~BUN/root/chunk-rve7y02j.js";
import {
  ht
} from "B:/~BUN/root/chunk-zmeajjrz.js";
import {
  Wa
} from "B:/~BUN/root/chunk-dz2tgns2.js";
var iI = "EnterWorktree";
var sx = "ReportFindings",
  pPr = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
var l = import.meta.require("B:/~BUN/root/chunk-jf1wage9.js").BRIEF_TOOL_NAME,
  u = new Set([sx, Fd, ENe]),
  m = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,
  c = " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",
  p = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,
  d = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;

function Ige(e) {
  return q0o(e.name) ?? fTe(e)
}

function fTe(e) {
  if (e.alwaysLoad === !0) return !1;
  if (T(e)) return !1;
  if (win()) return !1;
  return h(e)
}

function h(e) {
  if (e.isMcp === !0) return !0;
  if (Pxo() && $b(e, u)) return !0;
  return e.shouldDefer === !0
}

function T(e) {
  return i(e) || O(e)
}

function i(e) {
  if ($b(e, xxo())) return !0;
  if (e.isMcp === !0) return !1;
  if (e.name === Wa) return !0;
  if (e.name === bi) return !0;
  if (e.name === ht) {
    let r = import.meta.require("B:/~BUN/root/chunk-grv35prg.js");
    if (r.isForkSubagentEnabled()) return !0
  }
  if (e.name === l) return !0;
  if (e.name === aI && T_e()) return !0;
  if (e.name === Al) return !0;
  return !1
}

function O(e) {
  return e.isMcp !== !0 && e.name === iI && a.CLAUDE_CODE_SESSION_KIND === "bg"
}

function Hee(e, r, t, {
  toolSearchAbsent: s = !1,
  placements: o = "hooks"
} = {}) {
  let n = o === "hooks" ? q0o(e.name) : void 0;
  if (n !== void 0) return n;
  if (s) {
    if (r === void 0) return !1
  } else if (r === void 0) return o === "hooks" ? Ige(e) : fTe(e);
  if (t !== void 0 && gz(t)) return !1;
  if (i(e)) return !1;
  return !r.has(e.name)
}

function fPr(e) {
  return e.name
}

function kjn() {
  return m + ($Do() ? p : c) + d
}
export {
  iI,
  sx,
  pPr,
  Ige,
  fTe,
  Hee,
  fPr,
  kjn
};
