// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { pn } from "B:/~BUN/root/chunk-6za2ez23.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { iNe, Ev } from "B:/~BUN/root/chunk-sk7eej8z.js";
import { J3e } from "B:/~BUN/root/chunk-d69870x4.js";
var XEn = "\x1B]8;;",
  JEn = "\x07";
function jw(e, r, t) {
  let s = r === void 0 ? void 0 : pn(r),
    n = s === void 0 || N8r(e, s);
  if (!(n && (t?.assumeSupport ?? !1) && process.stdout.isTTY === !0 && (iNe() ?? !0) || (t?.supportsHyperlinks ?? Ev()))) {
    let i = t?.shownUrlStart ?? "";
    if (r !== void 0 && !n) return `${r}${i} (${e})`;
    return `${i}${e}`;
  }
  let o = ((t?.themeName ? J3e(t.themeName) : !1) ? he.blue : he.blueBright)(r ?? e);
  return `${XEn}${e}${JEn}${o}${XEn}${JEn}`;
}
function N8r(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}
export { XEn, JEn, jw, N8r };