// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ce, FD, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
function lCt() {
  try {
    return !1;
  } catch (error) {
    return l(H(error)), !1;
  }
}
var promptSuggestionUnusedStreak_2 = 20,
  promptSuggestionUnusedStreak = promptSuggestionUnusedStreak_2 + 1,
  Bss = 10,
  _ = 1209600000,
  V7r = [{
    text: "Showing fewer prompt suggestions"
  }, {
    text: " \xB7 use one to bring them back",
    dim: !0
  }];
function Zdr() {
  let e = ue();
  if (r(e) < promptSuggestionUnusedStreak_2) return !1;
  if (a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0) return !1;
  if (lCt()) return !1;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return !1;
  return !0;
}
function f6t(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, !1);
    return;
  }
  if (!n || r(ue()) >= promptSuggestionUnusedStreak_2) return;
  if (n.unusedInARow++, n.unusedInARow >= promptSuggestionUnusedStreak_2) n.unusedInARow = 0, Ce(S, o);
}
function jss(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, !0);
}
function q7r(e) {
  if (!d(ue()) || !Zdr()) return !1;
  return Ce(o => d(o) ? {
    ...o,
    promptSuggestionUnusedStreak: promptSuggestionUnusedStreak
  } : o, e), g("prompt_suggestion_back_off_notice"), !0;
}
function m(e, via_config_toggle) {
  let n = r(ue());
  if (n === 0) return;
  if (!Zdr()) {
    Ce(c, e);
    return;
  }
  let f = {
    was_notice_claimed: n === promptSuggestionUnusedStreak,
    via_config_toggle: via_config_toggle
  };
  FD(c, e).then(s => {
    if (s) g("prompt_suggestion_back_off_end", f);else p("prompt_suggestion_back_off_end", "reset_unconfirmed", f);
  }).catch(s => t(`Prompt suggestion back-off: could not log the end event: ${s}`, {
    level: "error"
  }));
}
function c(e) {
  return r(e) === 0 ? e : {
    ...e,
    promptSuggestionUnusedStreak: 0
  };
}
function S(e) {
  return r(e) >= promptSuggestionUnusedStreak_2 ? e : {
    ...e,
    promptSuggestionUnusedStreak: promptSuggestionUnusedStreak_2
  };
}
function d(e) {
  let o = r(e);
  return o >= promptSuggestionUnusedStreak_2 && o !== promptSuggestionUnusedStreak;
}
function r(e) {
  let promptSuggestionUnusedStreak_3 = e.promptSuggestionUnusedStreak;
  return typeof promptSuggestionUnusedStreak_3 === "number" && Number.isFinite(promptSuggestionUnusedStreak_3) ? promptSuggestionUnusedStreak_3 : 0;
}
export { lCt, Bss, V7r, Zdr, f6t, jss, q7r };