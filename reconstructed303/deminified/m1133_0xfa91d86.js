// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ne, nt, yI, Zg } from "B:/~BUN/root/chunk-nggrknsv.js";
import { v7e } from "B:/~BUN/root/chunk-x50ytcx8.js";
import { bs } from "B:/~BUN/root/chunk-gy660jgx.js";
import { Q0e, HW } from "B:/~BUN/root/chunk-pp80ffk4.js";
var y = new Map();
function xKe() {
  let t = a.LC_ALL || a.LC_TIME || a.LANG || "";
  if (y.has(t)) return y.get(t);
  let e = b(t);
  return y.set(t, e), e;
}
function b(t) {
  if (!t || t === "C" || t === "POSIX") return;
  let e = nt(nt(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return new Intl.DateTimeFormat(r), r;
  } catch {
    return;
  }
}
var I = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
  },
  M = {
    weekday: "short",
    calendar: "gregory"
  },
  N = {
    weekday: "long",
    calendar: "gregory"
  },
  x = {
    month: "short",
    calendar: "gregory"
  },
  _ = {
    month: "long",
    calendar: "gregory"
  };
function P(t, e, {
  locale: locale,
  timeZone: timeZone
}) {
  let g = HW("en-US", Q0e(I, timeZone)).formatToParts(e),
    i = {};
  for (let T of g) i[T.type] = T.value;
  let u = Number(i.year),
    n = Number(i.month),
    c = Number(i.day),
    m = Number(i.hour),
    p = (m + 11) % 12 + 1,
    h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, f, O) => {
    switch (O) {
      case "Y":
        return String(u);
      case "y":
        return s(u % 100, f);
      case "C":
        return s(Math.floor(u / 100), f);
      case "m":
        return s(n, f);
      case "d":
        return s(c, f);
      case "e":
        return D(c, f);
      case "j":
        return A(Z(u, n, c), f);
      case "u":
        return String(h === 0 ? 7 : h);
      case "w":
        return String(h);
      case "H":
        return s(m, f);
      case "k":
        return D(m, f);
      case "I":
        return s(p, f);
      case "l":
        return D(p, f);
      case "M":
        return s(Number(i.minute), f);
      case "S":
        return s(Number(i.second), f);
      case "p":
        return m < 12 ? "AM" : "PM";
      case "P":
        return m < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1000));
      case "a":
        return d(e, locale, timeZone, M);
      case "A":
        return d(e, locale, timeZone, N);
      case "b":
      case "h":
        return d(e, locale, timeZone, x);
      case "B":
        return d(e, locale, timeZone, _);
      case "Z":
        return i.timeZoneName ?? "";
      case "z":
        return k(e, u, n, c, m, i);
      case "F":
        return `${u}-${s(n, "")}-${s(c, "")}`;
      case "D":
        return `${s(n, "")}/${s(c, "")}/${s(u % 100, "")}`;
      case "T":
        return `${s(m, "")}:${i.minute}:${i.second}`;
      case "R":
        return `${s(m, "")}:${i.minute}`;
      case "r":
        return `${s(p, "")}:${i.minute}:${i.second} ${m < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function s(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function A(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function D(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function Z(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 86400000 + 1;
}
function d(t, e, r, o) {
  return HW(e, Q0e(o, r)).format(t);
}
function k(t, e, r, o, g, i) {
  let u = Date.UTC(e, r - 1, o, g, Number(i.minute), Number(i.second)),
    n = Math.floor(t.getTime() / 1000) * 1000,
    c = Math.round((u - n) / 60000),
    m = c < 0 ? "-" : "+",
    p = Math.abs(c);
  return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var F = 100;
function Jdr(t) {
  return ne(yI(Zg(t)), F);
}
function C(t, e) {
  let preset = v7e.find(item => item === t);
  if (preset === "24-hour-utc") return {
    kind: "preset",
    preset: preset,
    timeZone: "UTC"
  };
  let timeZone_2 = L(e);
  if (preset) return {
    kind: "preset",
    preset: preset,
    timeZone: timeZone_2
  };
  let pattern = Jdr(t);
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
function L(timeZone_3) {
  if (!timeZone_3) return;
  try {
    return HW("en-US", {
      timeZone: timeZone_3
    }), timeZone_3;
  } catch {
    return;
  }
}
function S(t, e, r) {
  switch (e) {
    case "auto":
      return Q0e(t, r);
    case "12-hour":
      return Q0e({
        ...t,
        hourCycle: "h12"
      }, r);
    case "24-hour":
    case "24-hour-utc":
      return Q0e({
        ...t,
        hourCycle: "h23"
      }, r);
  }
}
function Qdr(t, e, r, o) {
  let g = HW(r, S(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return g.format(o);
  let i = g.formatToParts(o),
    u = i.findLastIndex(n => n.type === "minute" || n.type === "second");
  return i.map((item, index) => index === u ? `${item.value}Z` : item.value).join("");
}
function l(t, timeZone_4, r, locale_2) {
  return ne(P(t, r, {
    locale: locale_2,
    timeZone: timeZone_4
  }), F);
}
var E = {
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
function Hss(t, e, r, o = "2-digit") {
  return t.kind === "pattern" ? l(t.pattern, t.timeZone, e, r) : Qdr(t, E[o], "en-US", e);
}
var R = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
  timeZoneName: "short"
};
function $ss(t, e, r, o) {
  let g = t.timeZone ?? o;
  if (t.kind === "pattern") return l(t.pattern, g, e, r);
  let i = S(R, t.preset, g),
    u = HW("en-US", i).formatToParts(e),
    n = {};
  for (let p of u) n[p.type] = p.value;
  let c = n.dayPeriod ? ` ${n.dayPeriod}` : "",
    m = "";
  if (t.preset === "24-hour-utc") m = "Z";else if (n.timeZoneName) m = ` ${n.timeZoneName}`;
  return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}
function aCt() {
  return C(bs("timeFormat", "auto").value, bs("timeZone", "").value);
}
function Uss(t, e, r) {
  return l(t, e, r, xKe());
}
export { xKe, Jdr, Qdr, Hss, $ss, aCt, Uss };