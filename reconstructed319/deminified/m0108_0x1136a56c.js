// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var Wte = {
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
  P_ = "\x1B",
  SM = "\x07",
  Rdn = ";",
  Yxo = "\x1B(B\x0F",
  uae = {
    CSI: 91,
    OSC: 93,
    DCS: 80,
    APC: 95,
    PM: 94,
    SOS: 88,
    ST: 92
  };
function _1s(t) {
  return t >= 48 && t <= 126;
}
var e = P_ + String.fromCharCode(uae.CSI),
  o = {
    PARAM_START: 48,
    PARAM_END: 63,
    INTERMEDIATE_START: 32,
    INTERMEDIATE_END: 47,
    FINAL_START: 64,
    FINAL_END: 126
  };
function Fta(t) {
  return t >= o.PARAM_START && t <= o.PARAM_END;
}
function M2n(t) {
  return t >= o.INTERMEDIATE_START && t <= o.INTERMEDIATE_END;
}
function Hta(t) {
  return t >= o.FINAL_START && t <= o.FINAL_END;
}
function zl(...t) {
  if (t.length === 0) return e;
  if (t.length === 1) return `${e}${t[0]}`;
  let r = t.slice(0, -1),
    n = t.at(-1);
  return `${e}${r.join(Rdn)}${n}`;
}
var BA = {
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
  $ta = ["toEnd", "toStart", "all", "scrollback"],
  Uta = ["toEnd", "toStart", "all"],
  b1s = [{
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
  return t === 0 ? "" : zl(t, "A");
}
function S1s(t = 1) {
  return t === 0 ? "" : zl(t, "B");
}
function s(t = 1) {
  return t === 0 ? "" : zl(t, "C");
}
function E(t = 1) {
  return t === 0 ? "" : zl(t, "D");
}
function ant(t) {
  return zl(t, "G");
}
var w1s = zl("G");
function yj(t, r) {
  return zl(t, r, "H");
}
var ov = zl("H");
function fae(t, r) {
  let n = "";
  if (t < 0) n += E(-t);else if (t > 0) n += s(t);
  if (r < 0) n += x(-r);else if (r > 0) n += S1s(r);
  return n;
}
function Xxo() {
  return zl("K");
}
var ywe = zl(2, "K"),
  RT = zl(2, "J"),
  X1t = zl(3, "J");
function Adn(t) {
  if (t <= 0) return "";
  let r = "";
  for (let n = 0; n < t; n++) if (r += ywe, n < t - 1) r += x(1);
  return r += w1s, r;
}
function Bta(t = 1) {
  return t === 0 ? "" : zl(t, "S");
}
function jta(t = 1) {
  return t === 0 ? "" : zl(t, "T");
}
function hxe(t, r) {
  return zl(t, r, "r");
}
var Zpe = zl("r"),
  Wta = zl("200~"),
  zta = zl("201~"),
  xdn = zl("I"),
  Pdn = zl("O"),
  Gta = zl(">5u"),
  Vta = zl(">1u"),
  k1s = zl("<u"),
  Kta = zl(">4;2m"),
  qta = zl(">4m");
export { Wte, P_, SM, Rdn, Yxo, uae, _1s, Fta, M2n, Hta, zl, BA, $ta, Uta, b1s, S1s, ant, w1s, yj, ov, fae, Xxo, ywe, RT, X1t, Adn, Bta, jta, hxe, Zpe, Wta, zta, xdn, Pdn, Gta, Vta, k1s, Kta, qta };