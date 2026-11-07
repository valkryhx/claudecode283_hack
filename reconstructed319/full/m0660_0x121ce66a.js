// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  zl
} from "B:/~BUN/root/chunk-1w2vha2y.js";
var zb = {
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

function kK(E) {
  return zl(`?${E}h`)
}

function Y7(E) {
  return zl(`?${E}l`)
}
var Mhn = kK(zb.SYNCHRONIZED_UPDATE),
  mEt = Y7(zb.SYNCHRONIZED_UPDATE),
  d9s = kK(zb.BRACKETED_PASTE),
  e8n = Y7(zb.BRACKETED_PASTE),
  t8n = kK(zb.FOCUS_EVENTS),
  u2t = Y7(zb.FOCUS_EVENTS),
  c9s = kK(zb.THEME_NOTIFY),
  n8n = Y7(zb.THEME_NOTIFY),
  _B = kK(zb.CURSOR_VISIBLE),
  bB = Y7(zb.CURSOR_VISIBLE),
  f2t = kK(zb.ALT_SCREEN_CLEAR),
  p2t = Y7(zb.ALT_SCREEN_CLEAR),
  r8n = Y7(zb.WIN32_INPUT_MODE),
  S = kK(zb.MOUSE_NORMAL) + kK(zb.MOUSE_BUTTON) + kK(zb.MOUSE_ANY) + kK(zb.MOUSE_SGR),
  _ = kK(zb.MOUSE_NORMAL) + kK(zb.MOUSE_SGR),
  VPe = Y7(zb.MOUSE_SGR) + Y7(zb.MOUSE_ANY) + Y7(zb.MOUSE_BUTTON) + Y7(zb.MOUSE_NORMAL),
  u9s = kK(zb.MOUSE_SGR_PIXELS),
  f9s = Y7(zb.MOUSE_SGR_PIXELS) + kK(zb.MOUSE_SGR);

function o8n(E) {
  switch (E) {
    case "full":
      return S;
    case "scroll":
      return _;
    case "off":
      return ""
  }
}
export {
  zb,
  kK,
  Y7,
  Mhn,
  mEt,
  d9s,
  e8n,
  t8n,
  u2t,
  c9s,
  n8n,
  _B,
  bB,
  f2t,
  p2t,
  r8n,
  VPe,
  u9s,
  f9s,
  o8n
};
