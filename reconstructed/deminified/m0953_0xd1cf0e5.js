// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { yUe } from "B:/~BUN/root/chunk-65064145.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { re, Ze, cH, hf } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Mo } from "B:/~BUN/root/chunk-4py062qg.js";
import { h_e, Kne } from "B:/~BUN/root/chunk-nfc48pcb.js";
var h = new Map();
function wAn() {
  let t = a.LC_ALL || a.LC_TIME || a.LANG || "";
  if (h.has(t)) return h.get(t);
  let e = F(t);
  return h.set(t, e), e;
}
function F(t) {
  if (!t || t === "C" || t === "POSIX") return;
  let e = Ze(Ze(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return new Intl.DateTimeFormat(r), r;
  } catch {
    return;
  }
}
var O = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
  },
  C = {
    weekday: "short",
    calendar: "gregory"
  },
  M = {
    weekday: "long",
    calendar: "gregory"
  },
  P = {
    month: "short",
    calendar: "gregory"
  },
  I = {
    month: "long",
    calendar: "gregory"
  };
function y(t, e, {
  locale: locale,
  timeZone: timeZone
}) {
  let f = Kne("en-US", h_e(O, timeZone)).formatToParts(e),
    n = {};
  for (let T of f) n[T.type] = T.value;
  let u = Number(n.year),
    s = Number(n.month),
    m = Number(n.day),
    g = Number(n.hour),
    p = (g + 11) % 12 + 1,
    d = new Date(Date.UTC(u, s - 1, m)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, c, b) => {
    switch (b) {
      case "Y":
        return String(u);
      case "y":
        return i(u % 100, c);
      case "C":
        return i(Math.floor(u / 100), c);
      case "m":
        return i(s, c);
      case "d":
        return i(m, c);
      case "e":
        return D(m, c);
      case "j":
        return N(_(u, s, m), c);
      case "u":
        return String(d === 0 ? 7 : d);
      case "w":
        return String(d);
      case "H":
        return i(g, c);
      case "k":
        return D(g, c);
      case "I":
        return i(p, c);
      case "l":
        return D(p, c);
      case "M":
        return i(Number(n.minute), c);
      case "S":
        return i(Number(n.second), c);
      case "p":
        return g < 12 ? "AM" : "PM";
      case "P":
        return g < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1000));
      case "a":
        return l(e, locale, timeZone, C);
      case "A":
        return l(e, locale, timeZone, M);
      case "b":
      case "h":
        return l(e, locale, timeZone, P);
      case "B":
        return l(e, locale, timeZone, I);
      case "Z":
        return n.timeZoneName ?? "";
      case "z":
        return A(e, u, s, m, g, n);
      case "F":
        return `${u}-${i(s, "")}-${i(m, "")}`;
      case "D":
        return `${i(s, "")}/${i(m, "")}/${i(u % 100, "")}`;
      case "T":
        return `${i(g, "")}:${n.minute}:${n.second}`;
      case "R":
        return `${i(g, "")}:${n.minute}`;
      case "r":
        return `${i(p, "")}:${n.minute}:${n.second} ${g < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function i(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function N(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function D(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function _(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 86400000 + 1;
}
function l(t, e, r, o) {
  return Kne(e, h_e(o, r)).format(t);
}
function A(t, e, r, o, f, n) {
  let u = Date.UTC(e, r - 1, o, f, Number(n.minute), Number(n.second)),
    s = Math.floor(t.getTime() / 1000) * 1000,
    m = Math.round((u - s) / 60000),
    g = m < 0 ? "-" : "+",
    p = Math.abs(m);
  return `${g}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var S = 100;
function odr(t) {
  return re(cH(hf(t)), S);
}
function jZe() {
  let t = Mo("timeFormat", "auto").value,
    preset = yUe.find(item => item === t);
  if (preset === "24-hour-utc") return {
    kind: "preset",
    preset: preset,
    timeZone: "UTC"
  };
  let timeZone_2 = k();
  if (preset) return {
    kind: "preset",
    preset: preset,
    timeZone: timeZone_2
  };
  let pattern = odr(t);
  return pattern.includes("%") ? {
    kind: "pattern",
    pattern: pattern,
    timeZone: timeZone_2
  } : {
    kind: "preset",
    preset: "auto",
    timeZone: timeZone_2
  };
}
function k() {
  let timeZone_3 = Mo("timeZone", "").value;
  if (!timeZone_3) return;
  try {
    return Kne("en-US", {
      timeZone: timeZone_3
    }), timeZone_3;
  } catch {
    return;
  }
}
function sdr(t, e, r) {
  switch (e) {
    case "auto":
      return h_e(t, r);
    case "12-hour":
      return h_e({
        ...t,
        hourCycle: "h12"
      }, r);
    case "24-hour":
    case "24-hour-utc":
      return h_e({
        ...t,
        hourCycle: "h23"
      }, r);
  }
}
function wYt(t, e, r, o) {
  let f = Kne(r, sdr(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return f.format(o);
  let n = f.formatToParts(o),
    u = n.findLastIndex(s => s.type === "minute" || s.type === "second");
  return n.map((item, index) => index === u ? `${item.value}Z` : item.value).join("");
}
function WZe(t, timeZone_4, r) {
  return re(y(t, r, {
    locale: wAn(),
    timeZone: timeZone_4
  }), S);
}
export { wAn, odr, jZe, sdr, wYt, WZe };