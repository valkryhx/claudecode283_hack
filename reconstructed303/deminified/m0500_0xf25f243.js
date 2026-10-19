// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ba } from "B:/~BUN/root/chunk-nvgn0qsr.js";
var qh = {
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
function w1(E) {
  return Ba(`?${E}h`);
}
function _Y(E) {
  return Ba(`?${E}l`);
}
var hVt = w1(qh.SYNCHRONIZED_UPDATE),
  Wnt = _Y(qh.SYNCHRONIZED_UPDATE),
  E9o = w1(qh.BRACKETED_PASTE),
  cvn = _Y(qh.BRACKETED_PASTE),
  uvn = w1(qh.FOCUS_EVENTS),
  tkt = _Y(qh.FOCUS_EVENTS),
  T9o = w1(qh.THEME_NOTIFY),
  pvn = _Y(qh.THEME_NOTIFY),
  AL = w1(qh.CURSOR_VISIBLE),
  xL = _Y(qh.CURSOR_VISIBLE),
  nkt = w1(qh.ALT_SCREEN_CLEAR),
  rkt = _Y(qh.ALT_SCREEN_CLEAR),
  fvn = _Y(qh.WIN32_INPUT_MODE),
  S = w1(qh.MOUSE_NORMAL) + w1(qh.MOUSE_BUTTON) + w1(qh.MOUSE_ANY) + w1(qh.MOUSE_SGR),
  _ = w1(qh.MOUSE_NORMAL) + w1(qh.MOUSE_SGR),
  h_e = _Y(qh.MOUSE_SGR) + _Y(qh.MOUSE_ANY) + _Y(qh.MOUSE_BUTTON) + _Y(qh.MOUSE_NORMAL),
  C9o = w1(qh.MOUSE_SGR_PIXELS),
  R9o = _Y(qh.MOUSE_SGR_PIXELS) + w1(qh.MOUSE_SGR);
function mvn(E) {
  switch (E) {
    case "full":
      return S;
    case "scroll":
      return _;
    case "off":
      return "";
  }
}
export { qh, w1, _Y, hVt, Wnt, E9o, cvn, uvn, tkt, T9o, pvn, AL, xL, nkt, rkt, fvn, h_e, C9o, R9o, mvn };