// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
var P5 = {
    NUL: 0,
    SOH: 1,
    STX: 2,
    ETX: 3,
    EOT: 4,
    ENQ: 5,
    ACK: 6,
    BEL: 7,
    BS: 8,
    HT: 9,
    LF: 10,
    VT: 11,
    FF: 12,
    CR: 13,
    SO: 14,
    SI: 15,
    DLE: 16,
    DC1: 17,
    DC2: 18,
    DC3: 19,
    DC4: 20,
    NAK: 21,
    SYN: 22,
    ETB: 23,
    CAN: 24,
    EM: 25,
    SUB: 26,
    ESC: 27,
    FS: 28,
    GS: 29,
    RS: 30,
    US: 31,
    DEL: 127
  },
  RA = "\x1B",
  B2 = "\x07",
  rZe = ";",
  dBr = "\x1B(B\x0F",
  lQ = {
    CSI: 91,
    OSC: 93,
    DCS: 80,
    APC: 95,
    PM: 94,
    SOS: 88,
    ST: 92
  };
function mjo(t) {
  return t >= 48 && t <= 126;
}
var e = RA + String.fromCharCode(lQ.CSI),
  o = {
    PARAM_START: 48,
    PARAM_END: 63,
    INTERMEDIATE_START: 32,
    INTERMEDIATE_END: 47,
    FINAL_START: 64,
    FINAL_END: 126
  };
function q4s(t) {
  return t >= o.PARAM_START && t <= o.PARAM_END;
}
function iXn(t) {
  return t >= o.INTERMEDIATE_START && t <= o.INTERMEDIATE_END;
}
function K4s(t) {
  return t >= o.FINAL_START && t <= o.FINAL_END;
}
function Ba(...t) {
  if (t.length === 0) return e;
  if (t.length === 1) return `${e}${t[0]}`;
  let r = t.slice(0, -1),
    n = t.at(-1);
  return `${e}${r.join(rZe)}${n}`;
}
var aT = {
    CUU: 65,
    CUD: 66,
    CUF: 67,
    CUB: 68,
    CNL: 69,
    CPL: 70,
    CHA: 71,
    CUP: 72,
    CHT: 73,
    HPA: 96,
    HPR: 97,
    VPA: 100,
    VPR: 101,
    HVP: 102,
    ED: 74,
    EL: 75,
    ECH: 88,
    IL: 76,
    DL: 77,
    ICH: 64,
    DCH: 80,
    SU: 83,
    SD: 84,
    SM: 104,
    RM: 108,
    SGR: 109,
    DSR: 110,
    DECSCUSR: 113,
    DECSTBM: 114,
    SCOSC: 115,
    SCORC: 117,
    CBT: 90
  },
  Y4s = ["toEnd", "toStart", "all", "scrollback"],
  X4s = ["toEnd", "toStart", "all"],
  gjo = [{
    style: "block",
    blinking: !0
  }, {
    style: "block",
    blinking: !0
  }, {
    style: "block",
    blinking: !1
  }, {
    style: "underline",
    blinking: !0
  }, {
    style: "underline",
    blinking: !1
  }, {
    style: "bar",
    blinking: !0
  }, {
    style: "bar",
    blinking: !1
  }];
function x(t = 1) {
  return t === 0 ? "" : Ba(t, "A");
}
function hjo(t = 1) {
  return t === 0 ? "" : Ba(t, "B");
}
function s(t = 1) {
  return t === 0 ? "" : Ba(t, "C");
}
function E(t = 1) {
  return t === 0 ? "" : Ba(t, "D");
}
function rGe(t) {
  return Ba(t, "G");
}
var yjo = Ba("G");
function $W(t, r) {
  return Ba(t, r, "H");
}
var oS = Ba("H");
function Ine(t, r) {
  let n = "";
  if (t < 0) n += E(-t);else if (t > 0) n += s(t);
  if (r < 0) n += x(-r);else if (r > 0) n += hjo(r);
  return n;
}
function cBr() {
  return Ba("K");
}
var fde = Ba(2, "K"),
  gv = Ba(2, "J"),
  bbt = Ba(3, "J");
function j1t(t) {
  if (t <= 0) return "";
  let r = "";
  for (let n = 0; n < t; n++) if (r += fde, n < t - 1) r += x(1);
  return r += yjo, r;
}
function J4s(t = 1) {
  return t === 0 ? "" : Ba(t, "S");
}
function Q4s(t = 1) {
  return t === 0 ? "" : Ba(t, "T");
}
function Fhe(t, r) {
  return Ba(t, r, "r");
}
var Mne = Ba("r"),
  Z4s = Ba("200~"),
  eYs = Ba("201~"),
  W1t = Ba("I"),
  z1t = Ba("O"),
  tYs = Ba(">5u"),
  nYs = Ba(">1u"),
  _jo = Ba("<u"),
  rYs = Ba(">4;2m"),
  oYs = Ba(">4m");
export { P5, RA, B2, rZe, dBr, lQ, mjo, q4s, iXn, K4s, Ba, aT, Y4s, X4s, gjo, hjo, rGe, yjo, $W, oS, Ine, cBr, fde, gv, bbt, j1t, J4s, Q4s, Fhe, Mne, Z4s, eYs, W1t, z1t, tYs, nYs, _jo, rYs, oYs };