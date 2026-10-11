// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { ya, nzr, rzr, z$o } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
var L = {
  ambiguousIsNarrow: !0
};
function ie(e) {
  return Bun.stringWidth(e, L);
}
var Yne = {
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
  LD = "\x1B",
  pj = "\x07",
  WUe = ";",
  r5n = "\x1B(B\x0F",
  xY = {
    CSI: 91,
    OSC: 93,
    DCS: 80,
    APC: 95,
    PM: 94,
    SOS: 88,
    ST: 92
  };
function b(e) {
  return e >= 48 && e <= 126;
}
var E = LD + String.fromCharCode(xY.CSI),
  x = {
    PARAM_START: 48,
    PARAM_END: 63,
    INTERMEDIATE_START: 32,
    INTERMEDIATE_END: 47,
    FINAL_START: 64,
    FINAL_END: 126
  };
function _(e) {
  return e >= x.PARAM_START && e <= x.PARAM_END;
}
function S(e) {
  return e >= x.INTERMEDIATE_START && e <= x.INTERMEDIATE_END;
}
function R(e) {
  return e >= x.FINAL_START && e <= x.FINAL_END;
}
function ka(...e) {
  if (e.length === 0) return E;
  if (e.length === 1) return `${E}${e[0]}`;
  let t = e.slice(0, -1),
    r = e.at(-1);
  return `${E}${t.join(WUe)}${r}`;
}
var YS = {
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
  G$o = ["toEnd", "toStart", "all", "scrollback"],
  V$o = ["toEnd", "toStart", "all"],
  ozr = [{
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
function y(e = 1) {
  return e === 0 ? "" : ka(e, "A");
}
function szr(e = 1) {
  return e === 0 ? "" : ka(e, "B");
}
function B(e = 1) {
  return e === 0 ? "" : ka(e, "C");
}
function M(e = 1) {
  return e === 0 ? "" : ka(e, "D");
}
function XAe(e) {
  return ka(e, "G");
}
var izr = ka("G");
function R$(e, t) {
  return ka(e, t, "H");
}
var $h = ka("H");
function PY(e, t) {
  let r = "";
  if (e < 0) r += M(-e);else if (e > 0) r += B(e);
  if (t < 0) r += y(-t);else if (t > 0) r += szr(t);
  return r;
}
function o5n() {
  return ka("K");
}
var jJ = ka(2, "K"),
  F_ = ka(2, "J"),
  K8e = ka(3, "J");
function zBt(e) {
  if (e <= 0) return "";
  let t = "";
  for (let r = 0; r < e; r++) if (t += jJ, r < e - 1) t += y(1);
  return t += izr, t;
}
function q$o(e = 1) {
  return e === 0 ? "" : ka(e, "S");
}
function K$o(e = 1) {
  return e === 0 ? "" : ka(e, "T");
}
function Xne(e, t) {
  return ka(e, t, "r");
}
var IY = ka("r"),
  Y$o = ka("200~"),
  X$o = ka("201~"),
  Kft = ka("I"),
  Yft = ka("O"),
  J$o = ka(">5u"),
  Q$o = ka(">1u"),
  azr = ka("<u"),
  Z$o = ka(">4;2m"),
  zUe = ka(">4m");
var U = /^\[M[\x60-\x7f][\x20-\uffff]?$/,
  h = "Gi=",
  W = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;
function WJ(e) {
  let t = "ground",
    r = "",
    n = e?.x10Mouse ?? !1,
    s = e?.forOutput ?? !1,
    o = e?.escPrefixedKeyIsAlt;
  return {
    feed(c) {
      let m = O(c, t, r, !1, n, s, o?.() ?? !1);
      return t = m.state.state, r = m.state.buffer, m.tokens;
    },
    flush() {
      let c = O("", t, r, !0, n, s, o?.() ?? !1);
      return t = c.state.state, r = c.state.buffer, c.tokens;
    },
    reset() {
      t = "ground", r = "";
    },
    buffer() {
      return r;
    }
  };
}
function O(e, state, r, n, s, o, c) {
  let tokens = [],
    state_2 = {
      state: state,
      buffer: ""
    },
    u = r + e,
    i = 0,
    d = 0,
    l = 0,
    g = () => {
      if (i > d) {
        let value = u.slice(d, i);
        if (value) tokens.push({
          type: "text",
          value: value
        });
      }
      d = i;
    },
    p = value_2 => {
      if (value_2) tokens.push({
        type: "sequence",
        value: value_2
      });
      state_2.state = "ground", d = i;
    };
  while (i < u.length) {
    let a = u.charCodeAt(i);
    switch (state_2.state) {
      case "ground":
        if (a === Yne.ESC) g(), l = i, state_2.state = "escape", i++;else if (a === Yne.DEL) {
          if (U.test(u.slice(d, i))) i++;else g(), i++, tokens.push({
            type: "text",
            value: "\x7F"
          }), d = i;
        } else if (!o && a < 32 && (u.length < 64 || a === Yne.BS)) {
          if (g(), i++, a === 13 && u.charCodeAt(i) === 10) i++;
          tokens.push({
            type: "text",
            value: String.fromCharCode(a)
          }), d = i;
        } else i++;
        break;
      case "escape":
        if (a === xY.CSI) state_2.state = "csi", i++;else if (a === xY.OSC) state_2.state = "osc", i++;else if (a === xY.DCS) state_2.state = "dcs", i++;else if (a === xY.APC && (!s || i + 1 >= u.length || u[i + 1] === h[0])) state_2.state = "apc", i++;else if (!s && a === xY.PM) state_2.state = "pm", i++;else if (!s && (a === xY.SOS || a === 107)) state_2.state = "sos", i++;else if (a === 79) state_2.state = "ss3", i++;else if (s && (a === 32 || a === 13 || a === 10 || a === 9)) i++, tokens.push({
          type: "text",
          value: u.slice(l, i)
        }), state_2.state = "ground", d = i;else if (s && S(a)) tokens.push({
          type: "text",
          value: u.slice(l, i)
        }), state_2.state = "ground", d = i;else if (S(a)) state_2.state = "escapeIntermediate", i++;else if (a === Yne.DEL) i++, tokens.push({
          type: "text",
          value: u.slice(l, i)
        }), state_2.state = "ground", d = i;else if (b(a)) i++, p(u.slice(l, i));else if (a === Yne.ESC && c && i === l + 1 && W.test(u.slice(i + 1, i + 1 + 8))) i++;else if (a === Yne.ESC) p(u.slice(l, i)), l = i, state_2.state = "escape", i++;else if (a < 32) i++, tokens.push({
          type: "text",
          value: u.slice(l, i)
        }), state_2.state = "ground", d = i;else state_2.state = "ground", d = l;
        break;
      case "escapeIntermediate":
        if (S(a)) i++;else if (b(a)) i++, p(u.slice(l, i));else state_2.state = "ground", d = l;
        break;
      case "csi":
        if (s && a === 77 && i - l === 2 && (i + 1 >= u.length || u.charCodeAt(i + 1) >= 32) && (i + 2 >= u.length || u.charCodeAt(i + 2) >= 32) && (i + 3 >= u.length || u.charCodeAt(i + 3) >= 32)) {
          if (i + 4 <= u.length) i += 4, p(u.slice(l, i));else i = u.length;
          break;
        }
        if (R(a)) i++, p(u.slice(l, i));else if (_(a) || S(a)) i++;else state_2.state = "ground", d = l;
        break;
      case "ss3":
        if (a >= 64 && a <= 126) i++, p(u.slice(l, i));else state_2.state = "ground", d = l;
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (s && state_2.state === "apc" && i >= l + 2 && i - l - 2 < h.length && u[i] !== h[i - l - 2]) p(u.slice(l, l + 2)), d = l + 2;else if (a === Yne.BEL && state_2.state !== "pm" && state_2.state !== "sos") i++, p(u.slice(l, i));else if (a === Yne.ESC && i + 1 < u.length) {
          if (u.charCodeAt(i + 1) === xY.ST) i += 2, p(u.slice(l, i));else p(u.slice(l, i)), l = i, state_2.state = "escape", i++;
        } else if (a === Yne.CAN || a === Yne.SUB) i++, p(u.slice(l, i));else i++;
        break;
    }
  }
  if (state_2.state === "ground") g();else if (n) {
    let value_3 = u.slice(l);
    if (value_3) tokens.push({
      type: "sequence",
      value: value_3
    });
    state_2.state = "ground";
  } else state_2.buffer = u.slice(l);
  return {
    tokens: tokens,
    state: state_2
  };
}
var H = /\x1b\[[34]8;[25];/;
function Wu(e, t, r) {
  if (!(t > 0)) return e;
  let n = z(e, t, r);
  if (H.test(e) && n.includes(`
`)) return j(n);
  return n;
}
var G = "\uDB80\uDC00",
  K = "\uD87E\uDE1D",
  N = /[\u{F0000}\u{2FA1D}]/gu,
  Y = /[^\x00-\x7f]/;
function z(e, t, r) {
  if (!Y.test(e)) return Bun.wrapAnsi(e, t, r);
  let n = [],
    s = "",
    o = !1,
    c = WJ({
      forOutput: !0
    });
  for (let d of [...c.feed(e), ...c.flush()]) {
    if (d.type === "sequence") {
      s += d.value;
      continue;
    }
    for (let {
      segment: segment
    } of ya().segment(d.value)) {
      let g = segment.codePointAt(0) > 65535 ? 2 : 1,
        p = segment.length > g ? ie(segment) : 0;
      if (p === 1 || p === 2) {
        n.push(segment), s += p === 1 ? G : K, o = !0;
        continue;
      }
      for (let a of segment.match(N) ?? []) n.push(a);
      s += segment;
    }
  }
  if (!o) return Bun.wrapAnsi(e, t, r);
  let m = 0,
    f = "",
    u = WJ({
      forOutput: !0
    }),
    i = Bun.wrapAnsi(s, t, r);
  for (let d of [...u.feed(i), ...u.flush()]) f += d.type === "sequence" ? d.value : d.value.replace(N, l => n[m++] ?? l);
  return f;
}
var T = /\x1b\[([\d;]*)m/g,
  X = /^(3[0-79]|9[0-7])$/,
  q = /^(4[0-79]|10[0-7])$/;
function j(e) {
  let t = "",
    r = "",
    n = "",
    s = 0;
  T.lastIndex = 0;
  let o;
  while ((o = T.exec(e)) !== null) {
    t += w(e.slice(s, o.index), r, n), t += o[0], s = T.lastIndex;
    let c = o[1];
    if (c === "" || c === "0") r = "", n = "";else if (c.startsWith("38;")) r = o[0];else if (X.test(c)) r = "";else if (c.startsWith("48;")) n = o[0];else if (q.test(c)) n = "";
  }
  return t += w(e.slice(s), r, n), t;
}
function w(e, t, r) {
  if (e === "" || t === "" && r === "") return e;
  let n = "",
    s = 0;
  for (let o = 0; o < e.length; o++) if (e.charCodeAt(o) === 10) {
    if (n += e.slice(s, o), t) n += "\x1B[39m";
    if (r) n += "\x1B[49m";
    n += `
` + t + r, s = o + 1;
  }
  return n += e.slice(s), n;
}
function Va(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 0) return "\u2026";
  if (t < 5) return ot(e, t);
  let r = e.lastIndexOf("/"),
    n = r >= 0 ? r : e.lastIndexOf("\\"),
    s = n >= 0 ? e.slice(n) : e,
    o = n >= 0 ? e.slice(0, n) : "",
    c = ie(s);
  if (c >= t - 1) return rA(e, t);
  let m = t - 1 - c;
  return YN(o, m) + "\u2026" + s;
}
function ot(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let r = 0,
    n = "";
  for (let {
    segment: segment_2
  } of ya().segment(e)) {
    let o = ie(segment_2);
    if (r + o > t - 1) break;
    n += segment_2, r += o;
  }
  return n + "\u2026";
}
function rA(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let r = t - 1,
    n = [...ya().segment(e)],
    s = 0,
    o = n.length;
  for (let c = n.length - 1; c >= 0; c--) {
    let m = ie(n[c].segment);
    if (s + m > r) break;
    s += m, o = c;
  }
  return `\u2026${n.slice(o).map(item => item.segment).join("")}`;
}
function YN(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 0) return "";
  let r = 0,
    n = "";
  for (let {
    segment: segment_3
  } of ya().segment(e)) {
    let o = ie(segment_3);
    if (r + o > t) break;
    n += segment_3, r += o;
  }
  return n;
}
var V = 8,
  Z = 40;
function Y8e(e, t) {
  return ot(e, Math.max(Z, t - V));
}
function fo(e, t, r = !1) {
  let n = e;
  if (r) {
    let s = e.indexOf(`
`);
    if (s !== -1) {
      if (n = e.substring(0, s), ie(n) + 1 > t) return ot(`${n}\u2026`, t);
      return `${n}\u2026`;
    }
  }
  if (ie(n) <= t) return n;
  return ot(n, t);
}
function GUe(e, t) {
  let r = [],
    n = "",
    s = 0;
  for (let {
    segment: segment_4
  } of ya().segment(e)) {
    let c = ie(segment_4);
    if (s + c <= t) n += segment_4, s += c;else {
      if (n) r.push(n);
      n = segment_4, s = c;
    }
  }
  if (n) r.push(n);
  return r;
}
function ohn(e, t, r) {
  if (r <= 0 || t <= 0) return "";
  let n = Wu(e, t, {
    trim: !0,
    hard: !0
  }).split(`
`);
  if (n.length <= r) return n.join(`
`);
  let s = n.slice(0, r);
  return s[r - 1] = ot((s[r - 1] ?? "") + "\u2026", t), s.join(`
`);
}
function yde(e) {
  return `${(e / 1000).toFixed(1)}s`;
}
function Zt(e, t) {
  if (e < 60000) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1000).toFixed(1)}s`;
    return `${Math.floor(e / 1000).toString()}s`;
  }
  let r = Math.floor(e / 86400000),
    n = Math.floor(e % 86400000 / 3600000),
    s = Math.floor(e % 3600000 / 60000),
    o = Math.round(e % 60000 / 1000);
  if (o === 60) o = 0, s++;
  if (s === 60) s = 0, n++;
  if (n === 24) n = 0, r++;
  let c = t?.hideTrailingZeros;
  if (t?.mostSignificantOnly) {
    if (r > 0) return `${r}d`;
    if (n > 0) return `${n}h`;
    if (s > 0) return `${s}m`;
    return `${o}s`;
  }
  if (r > 0) {
    if (c && n === 0 && s === 0) return `${r}d`;
    if (c && s === 0) return `${r}d ${n}h`;
    return `${r}d ${n}h ${s}m`;
  }
  if (n > 0) {
    if (c && s === 0 && o === 0) return `${n}h`;
    if (c && o === 0) return `${n}h ${s}m`;
    return `${n}h ${s}m ${o}s`;
  }
  if (s > 0) {
    if (c && o === 0) return `${s}m`;
    return `${s}m ${o}s`;
  }
  return `${o}s`;
}
function OY(e) {
  let t = e >= 60000 ? Math.round(e / 60000) * 60000 : e;
  return Zt(t, {
    hideTrailingZeros: !0
  });
}
function Jne(e) {
  let t = Math.max(0, Math.floor(e / 1000));
  if (t < 60) return `${t}s`;
  let r = Math.floor(t / 60);
  if (r < 60) return `${r}m${String(t % 60).padStart(2, "0")}s`;
  let n = Math.floor(r / 60);
  if (n < 24) return `${n}h${String(r % 60).padStart(2, "0")}m`;
  return `${Math.floor(n / 24)}d${String(n % 24).padStart(2, "0")}h`;
}
var J = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
  },
  Q = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 0
  };
function is(e) {
  let t = e >= 1000;
  return z$o("en-US", t ? J : Q).format(e).toLowerCase();
}
function cr(e) {
  return is(e).replace(".0", "");
}
function s5n(e, t = 4) {
  return `$${e > 0.5 ? ee(e, 100).toFixed(2) : e.toFixed(t)}`;
}
function ee(e, t) {
  return Math.round(e * t) / t;
}
var lzr = "costs may be inaccurate due to usage of unknown models",
  czr = "at your organization's configured rates";
function dzr(e) {
  return `${is(e.inputTokens)} input, ${is(e.outputTokens)} output, ${is(e.cacheReadInputTokens)} cache read, ${is(e.cacheCreationInputTokens)} cache write` + (e.webSearchRequests > 0 ? `, ${is(e.webSearchRequests)} web search` : "");
}
function XN(e) {
  if (e < 20) return "< 20";
  return `~${cr(Math.round(e / 10) * 10)}`;
}
function iK(e, t = {}) {
  let {
      style = "narrow",
      numeric = "always",
      maxUnit: maxUnit,
      now = new Date()
    } = t,
    c = e.getTime() - now.getTime(),
    m = Math.trunc(c / 1000),
    f = [{
      unit: "year",
      seconds: 31536000,
      shortUnit: "y"
    }, {
      unit: "month",
      seconds: 2592000,
      shortUnit: "mo"
    }, {
      unit: "week",
      seconds: 604800,
      shortUnit: "w"
    }, {
      unit: "day",
      seconds: 86400,
      shortUnit: "d"
    }, {
      unit: "hour",
      seconds: 3600,
      shortUnit: "h"
    }, {
      unit: "minute",
      seconds: 60,
      shortUnit: "m"
    }, {
      unit: "second",
      seconds: 1,
      shortUnit: "s"
    }],
    u = maxUnit ? f.filter(item => item.seconds <= 86400) : f;
  for (let {
    unit: unit,
    seconds: seconds,
    shortUnit: shortUnit
  } of u) if (Math.abs(m) >= seconds) {
    let g = Math.trunc(m / seconds);
    if (style === "narrow") return m < 0 ? `${Math.abs(g)}${shortUnit} ago` : `in ${g}${shortUnit}`;
    return nzr("long", numeric).format(g, unit);
  }
  if (style === "narrow") return m <= 0 ? "0s ago" : "in 0s";
  return nzr(style, "auto").format(0, "second");
}
function nE(e, t = {}) {
  let {
    now: now_2 = new Date(),
    ...n
  } = t;
  if (e > now_2) return iK(e, {
    ...n,
    now: now_2
  });
  return iK(e, {
    ...n,
    numeric: "always",
    now: now_2
  });
}
function GBt(e) {
  let t = e.fileSize !== void 0 ? Ut(e.fileSize) : `${e.messageCount} messages`,
    r = [nE(e.modified, {
      style: "short"
    }), ...(e.sessionKind === "bg" ? ["bg"] : []), ...(e.gitBranch ? [e.gitBranch] : []), t];
  if (e.tag) r.push(`#${e.tag}`);
  if (e.agentSetting) r.push(`@${e.agentSetting}`);
  if (e.prNumber) r.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
  return r.join(" \xB7 ");
}
function ud(e, t = !1, r = !0, n = !1) {
  if (!e) return;
  let date = new Date(e * 1000),
    date_2 = new Date(),
    c = date.getMinutes(),
    m = (date.getTime() - date_2.getTime()) / 3600000;
  if (n || m > 24) {
    let u = {
      month: "short",
      day: "numeric",
      hour: r ? "numeric" : void 0,
      minute: !r || c === 0 ? void 0 : "2-digit",
      hour12: r ? !0 : void 0
    };
    if (date.getFullYear() !== date_2.getFullYear()) u.year = "numeric";
    return date.toLocaleString("en-US", u).replace(/[ \u202f]([AP]M)/i, (d, l) => l.toLowerCase()) + (t ? ` (${rzr()})` : "");
  }
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: c === 0 ? void 0 : "2-digit",
    hour12: !0
  }).replace(/[ \u202f]([AP]M)/i, (u, i) => i.toLowerCase()) + (t ? ` (${rzr()})` : "");
}
function Xft(e, t = !1, r = !0, n = !1) {
  let date_3 = new Date(e);
  return `${ud(Math.floor(date_3.getTime() / 1000), t, r, n)}`;
}
function Jft(e) {
  return Math.round(e * 1000) / 10;
}
function JAe(e, t = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${I(e, t)}`;
}
var WBt = 0,
  mu = 0;
import { AsyncLocalStorage as te } from "async_hooks";
import { constants as re } from "fs";
import { appendFile as ne, copyFile as se, lstat as oe, mkdir as ae, open as D, readdir as P, readFile as k, stat as ue, unlink as ce, writeFile as C } from "fs/promises";
class i5n {
  read(e) {
    return k(e, "utf8");
  }
  readBytes(e) {
    return k(e);
  }
  write(e, t, mode) {
    return C(e, t, {
      encoding: "utf8",
      mode: mode
    });
  }
  async mkdir(e, mode_2) {
    try {
      await ae(e, {
        recursive: !0,
        mode: mode_2
      });
    } catch (error) {
      if (v(error) !== "EEXIST") throw error;
    }
  }
  atomicWrite(e, t, r) {
    return Cn(e, t, r);
  }
  delete(e) {
    return ce(e);
  }
  list(e) {
    return P(e);
  }
  append(e, t, mode_3) {
    return ne(e, t, {
      encoding: "utf8",
      mode: mode_3
    });
  }
  writeExclusive(e, t, mode_4) {
    return C(e, t, {
      encoding: "utf8",
      flag: "wx",
      mode: mode_4
    });
  }
  writeBytesExclusive(e, t, mode_5) {
    return C(e, t, {
      flag: "wx",
      mode: mode_5
    });
  }
  copy(e, t) {
    return se(e, t);
  }
  async stat(e) {
    return {
      mtimeMs: (await ue(e)).mtimeMs
    };
  }
  async lstat(e) {
    try {
      let t = await oe(e);
      return {
        isSymbolicLink: t.isSymbolicLink(),
        isFile: t.isFile(),
        isDirectory: t.isDirectory(),
        mtimeMs: t.mtimeMs,
        nlink: t.nlink
      };
    } catch (error) {
      if (v(error) === "ENOENT") return;
      throw error;
    }
  }
  async listEntries(e) {
    return (await P(e, {
      withFileTypes: !0
    })).map(item => ({
      name: item.name,
      isDirectory: item.isDirectory(),
      isFile: item.isFile()
    }));
  }
  async readRange(e, t, r) {
    A("readRange", "offset", t), A("readRange", "length", r);
    let n = await D(e, "r");
    try {
      return await F(n, t, r);
    } finally {
      await n.close();
    }
  }
  async readTail(path, t, r) {
    A("readTail", "maxBytes", t);
    let n = r?.noFollow ? re.O_RDONLY | mu : "r",
      s = await D(path, n);
    try {
      let o = await s.stat();
      if (r?.noFollow && !o.isFile()) throw Object.assign(Error("ENXIO: not a regular file"), {
        code: "ENXIO",
        path: path
      });
      let {
          size: size
        } = o,
        m = Math.min(t, size);
      return await F(s, size - m, m);
    } finally {
      await s.close();
    }
  }
}
function A(e, t, r) {
  if (!Number.isInteger(r) || r < 0) throw RangeError(`${e}: ${t} must be a non-negative integer, got ${r}`);
}
async function F(e, t, r) {
  if (r === 0) return Buffer.alloc(0);
  let n = Buffer.alloc(r),
    s = 0;
  while (s < r) {
    let {
      bytesRead: bytesRead
    } = await e.read(n, s, r - s, t + s);
    if (bytesRead === 0) break;
    s += bytesRead;
  }
  return s === r ? n : Buffer.from(n.subarray(0, s));
}
var le = new te();
function Qt() {
  return le.getStore() ?? new i5n();
}
export { WBt, mu, ie, Yne, LD, pj, WUe, r5n, xY, ka, YS, G$o, V$o, ozr, szr, XAe, izr, R$, $h, PY, o5n, jJ, F_, K8e, zBt, q$o, K$o, Xne, IY, Y$o, X$o, Kft, Yft, J$o, Q$o, azr, Z$o, zUe, WJ, Wu, Va, ot, rA, YN, Y8e, fo, GUe, ohn, yde, Zt, OY, Jne, is, cr, s5n, lzr, czr, dzr, XN, iK, nE, GBt, ud, Xft, Jft, JAe, i5n, Qt };