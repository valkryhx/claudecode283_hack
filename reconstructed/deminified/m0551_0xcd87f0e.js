// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
function VZe() {
  try {
    return !1;
  } catch (error) {
    return d(te(error)), !1;
  }
}
var promptSuggestionUnusedStreak_2 = 20,
  promptSuggestionUnusedStreak = promptSuggestionUnusedStreak_2 + 1,
  zoo = 10,
  s = 1209600000,
  ldr = [{
    text: "Showing fewer prompt suggestions"
  }, {
    text: " \xB7 use one to bring them back",
    dim: !0
  }];
function cdr() {
  let e = le();
  if ((e.promptSuggestionUnusedStreak ?? 0) < promptSuggestionUnusedStreak_2) return !1;
  if (a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0) return !1;
  if (VZe()) return !1;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < s) return !1;
  return !0;
}
function qZe(e, t, n) {
  let r = le().promptSuggestionUnusedStreak ?? 0;
  if (e) {
    if (n) n.unusedInARow = 0;
    if (r !== 0) Ee(u, t);
    return;
  }
  if (!n || r >= promptSuggestionUnusedStreak_2) return;
  if (n.unusedInARow++, n.unusedInARow >= promptSuggestionUnusedStreak_2) n.unusedInARow = 0, Ee(g, t);
}
function Goo(e) {
  qZe(!0, e);
}
function ddr(e) {
  if (le().promptSuggestionUnusedStreak !== promptSuggestionUnusedStreak_2 || !cdr()) return !1;
  return Ee(t => t.promptSuggestionUnusedStreak === promptSuggestionUnusedStreak_2 ? {
    ...t,
    promptSuggestionUnusedStreak: promptSuggestionUnusedStreak
  } : t, e), !0;
}
function u(e) {
  return (e.promptSuggestionUnusedStreak ?? 0) === 0 ? e : {
    ...e,
    promptSuggestionUnusedStreak: 0
  };
}
function g(e) {
  return (e.promptSuggestionUnusedStreak ?? 0) >= promptSuggestionUnusedStreak_2 ? e : {
    ...e,
    promptSuggestionUnusedStreak: promptSuggestionUnusedStreak_2
  };
}
export { VZe, zoo, ldr, cdr, qZe, Goo, ddr };