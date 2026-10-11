// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ka } from "B:/~BUN/root/chunk-bpp59nyd.js";
var _m = {
  CURSOR_VISIBLE: 25,
  ALT_SCREEN: 47,
  ALT_SCREEN_CLEAR: 1049,
  MOUSE_NORMAL: 1000,
  MOUSE_BUTTON: 1002,
  MOUSE_ANY: 1003,
  MOUSE_SGR: 1006,
  MOUSE_SGR_PIXELS: 1016,
  FOCUS_EVENTS: 1004,
  BRACKETED_PASTE: 2004,
  THEME_NOTIFY: 2031,
  SYNCHRONIZED_UPDATE: 2026,
  WIN32_INPUT_MODE: 9001
};
function oL(E) {
  return ka(`?${E}h`);
}
function jj(E) {
  return ka(`?${E}l`);
}
var R_t = oL(_m.SYNCHRONIZED_UPDATE),
  Cje = jj(_m.SYNCHRONIZED_UPDATE),
  V8r = oL(_m.BRACKETED_PASTE),
  TVt = jj(_m.BRACKETED_PASTE),
  CVt = oL(_m.FOCUS_EVENTS),
  tQe = jj(_m.FOCUS_EVENTS),
  q8r = oL(_m.THEME_NOTIFY),
  RVt = jj(_m.THEME_NOTIFY),
  gP = oL(_m.CURSOR_VISIBLE),
  hP = jj(_m.CURSOR_VISIBLE),
  nQe = oL(_m.ALT_SCREEN_CLEAR),
  rQe = jj(_m.ALT_SCREEN_CLEAR),
  AVt = jj(_m.WIN32_INPUT_MODE),
  S = oL(_m.MOUSE_NORMAL) + oL(_m.MOUSE_BUTTON) + oL(_m.MOUSE_ANY) + oL(_m.MOUSE_SGR),
  _ = oL(_m.MOUSE_NORMAL) + oL(_m.MOUSE_SGR),
  loe = jj(_m.MOUSE_SGR) + jj(_m.MOUSE_ANY) + jj(_m.MOUSE_BUTTON) + jj(_m.MOUSE_NORMAL),
  K8r = oL(_m.MOUSE_SGR_PIXELS),
  Y8r = jj(_m.MOUSE_SGR_PIXELS) + oL(_m.MOUSE_SGR);
function xVt(E) {
  switch (E) {
    case "full":
      return S;
    case "scroll":
      return _;
    case "off":
      return "";
  }
}
export { _m, oL, jj, R_t, Cje, V8r, TVt, CVt, tQe, q8r, RVt, gP, hP, nQe, rQe, AVt, loe, K8r, Y8r, xVt };