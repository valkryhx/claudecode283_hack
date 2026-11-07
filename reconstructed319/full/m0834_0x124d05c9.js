// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Le,
  Jk,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";

function xqt() {
  try {
    return !1
  } catch (e) {
    return a(F(e)), !1
  }
}
var r = 20,
  f = r + 1,
  Dli = 10,
  _ = 1209600000,
  kYo = [{
    text: "Showing fewer prompt suggestions"
  }, {
    text: " \xB7 use one to bring them back",
    dim: !0
  }];

function J6r() {
  let e = fe();
  if (s(e) < r) return !1;
  if (i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0) return !1;
  if (xqt()) return !1;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return !1;
  return !0
}

function HSn(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, !1);
    return
  }
  if (!n || s(fe()) >= r) return;
  if (n.unusedInARow++, n.unusedInARow >= r) n.unusedInARow = 0, Le(S, o)
}

function Lli(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, !0)
}

function vYo(e) {
  if (!p(fe()) || !J6r()) return !1;
  return Le((o) => p(o) ? {
    ...o,
    promptSuggestionUnusedStreak: f
  } : o, e), g("prompt_suggestion_back_off_notice"), !0
}

function m(e, o) {
  let n = s(fe());
  if (n === 0) return;
  if (!J6r()) {
    Le(d, e);
    return
  }
  let l = {
    was_notice_claimed: n === f,
    via_config_toggle: o
  };
  Jk(d, e).then((u) => {
    if (u) g("prompt_suggestion_back_off_end", l);
    else c("prompt_suggestion_back_off_end", "reset_unconfirmed", l)
  }).catch((u) => t(`Prompt suggestion back-off: could not log the end event: ${u}`, {
    level: "error"
  }))
}

function d(e) {
  return s(e) === 0 ? e : {
    ...e,
    promptSuggestionUnusedStreak: 0
  }
}

function S(e) {
  return s(e) >= r ? e : {
    ...e,
    promptSuggestionUnusedStreak: r
  }
}

function p(e) {
  let o = s(e);
  return o >= r && o !== f
}

function s(e) {
  let o = e.promptSuggestionUnusedStreak;
  return typeof o === "number" && Number.isFinite(o) ? o : 0
}
export {
  xqt,
  Dli,
  kYo,
  J6r,
  HSn,
  Lli,
  vYo
};
