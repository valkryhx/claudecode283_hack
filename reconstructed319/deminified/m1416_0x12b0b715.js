// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Q, tt, DE, oy } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Kbt } from "B:/~BUN/root/chunk-acjt1b7f.js";
import { Ei } from "B:/~BUN/root/chunk-sgy380eg.js";
import { xqe, nY } from "B:/~BUN/root/chunk-63176a0t.js";
var D = new Map();
function Xit() {
  let t = i.LC_ALL || i.LC_TIME || i.LANG || "";
  if (D.has(t)) return D.get(t);
  let e = I(t);
  return D.set(t, e), e;
}
var b = 64;
function I(t) {
  if (!t || t === "C" || t === "POSIX" || t.length > b) return;
  let e = tt(tt(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return new Intl.DateTimeFormat(r), r;
  } catch {
    return;
  }
}
var M = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
  },
  N = {
    weekday: "short",
    calendar: "gregory"
  },
  _ = {
    weekday: "long",
    calendar: "gregory"
  },
  A = {
    month: "short",
    calendar: "gregory"
  },
  L = {
    month: "long",
    calendar: "gregory"
  };
function S(t, e, {
  locale: locale,
  timeZone: timeZone
}) {
  let g = nY("en-US", xqe(M, timeZone)).formatToParts(e),
    o = {};
  for (let T of g) o[T.type] = T.value;
  let u = Number(o.year),
    n = Number(o.month),
    c = Number(o.day),
    m = Number(o.hour),
    p = (m + 11) % 12 + 1,
    h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, f, F) => {
    switch (F) {
      case "Y":
        return String(u);
      case "y":
        return a(u % 100, f);
      case "C":
        return a(Math.floor(u / 100), f);
      case "m":
        return a(n, f);
      case "d":
        return a(c, f);
      case "e":
        return y(c, f);
      case "j":
        return x(Z(u, n, c), f);
      case "u":
        return String(h === 0 ? 7 : h);
      case "w":
        return String(h);
      case "H":
        return a(m, f);
      case "k":
        return y(m, f);
      case "I":
        return a(p, f);
      case "l":
        return y(p, f);
      case "M":
        return a(Number(o.minute), f);
      case "S":
        return a(Number(o.second), f);
      case "p":
        return m < 12 ? "AM" : "PM";
      case "P":
        return m < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1000));
      case "a":
        return d(e, locale, timeZone, N);
      case "A":
        return d(e, locale, timeZone, _);
      case "b":
      case "h":
        return d(e, locale, timeZone, A);
      case "B":
        return d(e, locale, timeZone, L);
      case "Z":
        return o.timeZoneName ?? "";
      case "z":
        return k(e, u, n, c, m, o);
      case "F":
        return `${u}-${a(n, "")}-${a(c, "")}`;
      case "D":
        return `${a(n, "")}/${a(c, "")}/${a(u % 100, "")}`;
      case "T":
        return `${a(m, "")}:${o.minute}:${o.second}`;
      case "R":
        return `${a(m, "")}:${o.minute}`;
      case "r":
        return `${a(p, "")}:${o.minute}:${o.second} ${m < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function a(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function x(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function y(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function Z(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 86400000 + 1;
}
function d(t, e, r, s) {
  return nY(e, xqe(s, r)).format(t);
}
function k(t, e, r, s, g, o) {
  let u = Date.UTC(e, r - 1, s, g, Number(o.minute), Number(o.second)),
    n = Math.floor(t.getTime() / 1000) * 1000,
    c = Math.round((u - n) / 60000),
    m = c < 0 ? "-" : "+",
    p = Math.abs(c);
  return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var P = 100;
function Y6r(t) {
  return Q(DE(oy(t)), P);
}
function C(t, e) {
  let preset = Kbt.find(item => item === t);
  if (preset === "24-hour-utc") return {
    kind: "preset",
    preset: preset,
    timeZone: "UTC"
  };
  let timeZone_2 = E(e);
  if (preset) return {
    kind: "preset",
    preset: preset,
    timeZone: timeZone_2
  };
  let pattern = Y6r(t);
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
function E(timeZone_3) {
  if (!timeZone_3) return;
  try {
    return nY("en-US", {
      timeZone: timeZone_3
    }), timeZone_3;
  } catch {
    return;
  }
}
function O(t, e, r) {
  switch (e) {
    case "auto":
      return xqe(t, r);
    case "12-hour":
      return xqe({
        ...t,
        hourCycle: "h12"
      }, r);
    case "24-hour":
    case "24-hour-utc":
      return xqe({
        ...t,
        hourCycle: "h23"
      }, r);
  }
}
function X6r(t, e, r, s) {
  let g = nY(r, O(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return g.format(s);
  let o = g.formatToParts(s),
    u = o.findLastIndex(n => n.type === "minute" || n.type === "second");
  return o.map((item, index) => index === u ? `${item.value}Z` : item.value).join("");
}
function l(t, timeZone_4, r, locale_2) {
  return Q(S(t, r, {
    locale: locale_2,
    timeZone: timeZone_4
  }), P);
}
var R = {
  "2-digit": {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12"
  },
  numeric: {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12"
  }
};
function Oli(t, e, r, s = "2-digit") {
  return t.kind === "pattern" ? l(t.pattern, t.timeZone, e, r) : X6r(t, R[s], "en-US", e);
}
var U = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
  timeZoneName: "short"
};
function Ili(t, e, r, s) {
  let g = t.timeZone ?? s;
  if (t.kind === "pattern") return l(t.pattern, g, e, r);
  let o = O(U, t.preset, g),
    u = nY("en-US", o).formatToParts(e),
    n = {};
  for (let p of u) n[p.type] = p.value;
  let c = n.dayPeriod ? ` ${n.dayPeriod}` : "",
    m = "";
  if (t.preset === "24-hour-utc") m = "Z";else if (n.timeZoneName) m = ` ${n.timeZoneName}`;
  return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}
function Aqt() {
  return C(Ei("timeFormat", "auto").value, Ei("timeZone", "").value);
}
function Mli(t, e, r) {
  return l(t, e, r, Xit());
}
export { Xit, Y6r, X6r, Oli, Ili, Aqt, Mli };