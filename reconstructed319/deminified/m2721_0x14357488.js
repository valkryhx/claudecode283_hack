// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var ms = {};
Rr(ms, {
  default: () => ms,
  register: () => Bb
});
var N = e => typeof e === "object" && e !== null && !Array.isArray(e);
function ns(e, t) {
  if (t === "[]") return Array.isArray(e) ? e : [];
  if (t === "*") return N(e) ? Object.values(e) : [];
  let o = Array.isArray(e) && e[Number(t)] !== void 0,
    r = N(e) && e[t] !== void 0;
  return o ? [e[Number(t)]] : r ? [e[t]] : [];
}
function S(e, t = "") {
  let o = [e];
  for (let r of t.split(".").filter(item => item !== "")) o = o.flatMap(item => ns(item, r));
  return o;
}
function ge(e, t = "") {
  return typeof e === "string" ? e || t : S(e, "[].text").filter(item => typeof item === "string").join(`
`) || t;
}
var as = e => ({
  id: e.tool_use_id,
  tool: e.tool,
  input: e.input,
  storedResult: e.result,
  text: ge(e.result, e.text)
});
function _t(e) {
  return (Array.isArray(e) ? e.flatMap(item => item.toolUses) : []).flatMap(item => item.text === void 0 || item.isError ? [] : [as(item)]);
}
var defaultCount_3 = 24;
var defaultCount = 4;
var defaultCount_2 = 24;
var Ct = 8;
var maxCount_3 = 40;
var maxCount = 4;
var maxCount_2 = 40;
var Be = 3;
var fs = 10;
var k = {
  line: {
    label: "line chart",
    plural: "series",
    defaultCount: Ct,
    maxCount: Ct
  },
  columns: {
    label: "column chart",
    plural: "series",
    defaultCount: defaultCount,
    maxCount: maxCount
  },
  sparks: {
    label: "sparklines",
    plural: "series",
    defaultCount: defaultCount_2,
    maxCount: maxCount_2
  },
  bars: {
    label: "bar chart",
    plural: "bars",
    singular: "bar",
    defaultCount: defaultCount_3,
    maxCount: maxCount_3
  },
  share: {
    label: "share bar",
    plural: "parts",
    singular: "part",
    defaultCount: Ct,
    maxCount: Ct
  }
};
function Wo(e, t) {
  let {
    plural: plural,
    singular = plural
  } = k[e];
  return `${t.toLocaleString("en-US")} ${t === 1 ? singular : plural}`;
}
var Xl = 40;
var maxItems = 12;
var xs = {
  type: "array",
  items: {
    type: "string"
  }
};
var inputSchema = {
  type: "object",
  additionalProperties: !1,
  properties: {
    data: {
      anyOf: [{
        type: "string"
      }, {
        type: "array",
        items: {
          type: "object"
        }
      }],
      description: "Leave it out to chart the tool result just before this call, as it is: do not type a result again. Where it holds several tables, x and y pick the one with those columns. Or the id of an earlier result, as a refusal lists them. Or the table itself, as records or as text, only for numbers no tool returned."
    },
    x: {
      type: "string",
      description: "the column along the chart: times, or the categories of bars"
    },
    form: {
      enum: ["line", "columns", "bars", "sparks", "share"],
      description: "if left out, a line over times and bars over names. line, columns and sparks need times in x: over names they are drawn as bars. columns stand on zero, one per day, month or other even step. sparks are a small row for each series, on one scale: for many series. bars are horizontal, one per category. share is the parts of a whole as one bar, what a pie shows: its values are summed"
    },
    y: {
      ...xs,
      description: `the value columns. Lines share a plot where they have one unit and their largest values are within ${fs} times of each other, columns only where they stack. ${Be} plots at most, and the rest are named`
    },
    by: {
      ...xs,
      description: "columns that split the rows into series. With combine and no by, nothing is split"
    },
    combine: {
      enum: ["sum", "mean", "max", "min"],
      description: 'how rows that share an x, and a series, become one. "sum" also says the values add, which turns on totals and shares, and stacks columns'
    },
    top: {
      type: "integer",
      minimum: 1,
      description: `how many to draw: ${k.bars.defaultCount} bars if left out and ${k.bars.maxCount} at most, ${k.line.maxCount} lines at most, ${k.sparks.defaultCount} sparks and ${k.sparks.maxCount} at most, ${k.share.maxCount} parts of a share beside one for the rest, ${k.columns.maxCount} series of columns where they stack, else ${Be}. The largest are kept, largest first, and the rest are counted`
    },
    unit: {
      type: "string",
      description: "ms, KB, %, $: what bare numbers are in. Values that carry a unit keep it"
    },
    zone: {
      enum: ["utc", "local"],
      description: "the zone that times are shown in, utc if left out. Times that name no zone are shown as written"
    },
    log: {
      type: "boolean",
      description: "a log scale, for lines. Values at or below zero are counted and left out"
    },
    marks: {
      type: "array",
      maxItems: maxItems,
      items: {
        type: "object",
        additionalProperties: !1,
        required: ["at"],
        properties: {
          at: {
            type: "string",
            description: "a time, spelled as in x"
          },
          label: {
            type: "string",
            description: "short"
          }
        }
      },
      description: `events on a chart over time, ${maxItems} at most: a rule and a label each. One outside the times drawn is said instead`
    },
    title: {
      type: "string",
      description: "short"
    }
  }
};
var K = (e, t) => `${e.toLocaleString("en-US")} ${e === 1 ? t : `${t}s`}`;
function Et(e, t, o) {
  let r = e.length - t;
  return r > 0 ? [...e.slice(0, t), `and ${K(r, o)}`] : e;
}
var Zl = /[\s\u{115F}\u{1160}\u{2800}\u{3164}\u{FFA0}]+/gu;
var ql = /[\uD800-\uDBFF]$/;
var Ql = /\s*[\n\r\u{2028}\u{2029}\u0085][^]*$/u;
var ex = / +/g;
var Ho = /^[ -~]*$/;
var ox = /[\p{L}\p{N}]/u;
var sx = /[\p{C}\u{FE00}-\u{FE0F}]/gu;
var px = /[\p{Cc}\u{E0000}-\u{E007F}\u{202A}-\u{202E}\u{2066}-\u{2069}]/gu;
var mx = /\p{Extended_Pictographic}|\p{Regional_Indicator}|\u{20E3}/u;
var ax = /\p{Emoji_Presentation}|\p{Extended_Pictographic}\u{FE0F}|\u{20E3}/u;
var regExp = new RegExp("[" + String.raw`\u{1100}-\u{115F}\u{2329}\u{232A}\u{2630}-\u{2637}` + String.raw`\u{268A}-\u{268F}\u{2E80}-\u{303E}\u{3041}-\u{3247}` + String.raw`\u{3250}-\u{A4C6}\u{A960}-\u{A97C}\u{AC00}-\u{D7A3}` + String.raw`\u{F900}-\u{FAFF}\u{FE10}-\u{FE19}\u{FE30}-\u{FE6B}` + String.raw`\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}\u{16FE0}-\u{18DF2}` + String.raw`\u{1AFF0}-\u{1B2FB}\u{1D300}-\u{1D376}\u{1F200}-\u{1F265}` + String.raw`\u{20000}-\u{3FFFD}` + "]", "u");
var regExp_2 = new RegExp("[" + String.raw`\p{Mn}\p{Me}\u{1160}-\u{11FF}\u{200B}-\u{200F}` + String.raw`\u{D7B0}-\u{D7FB}` + "]|" + String.raw`(?=[\u{0900}-\u{0D63}])\p{Mc}`, "u");
var At = "\u2026";
function ds(e, t) {
  return e.length > t ? e.slice(0, t).replace(ql, "") + At : e;
}
var dx = new Intl.Segmenter("en");
function Ce(e) {
  return Ho.test(e) ? e.split("") : Array.from(dx.segment(e), o => o.segment);
}
var hx = 1.5;
var Tx = 120;
var $o = 1;
var gx = 2;
var _x = 2;
var Cx = 2;
var ys = (e, t) => e.reduce((acc, item) => t(item) ? acc + 1 : acc, 0);
var U = e => [...new Set(e).values()];
function z(e, t) {
  let o = [],
    r = [];
  for (let l of e) o.push(l), r.push(t(l));
  let s = [...new Set(r).values()],
    p = new Map(s.map((item, index) => [item, index])),
    m = r.map(item => p.get(item) ?? 0),
    n = s.map(() => 0);
  for (let l of m) n[l] = (n[l] ?? 0) + 1;
  let a = [],
    f = 0;
  for (let l of n) a.push(f), f += l;
  let i = [...a],
    x = [...o];
  for (let [l, u] of o.entries()) {
    let d = m[l] ?? 0,
      c = i[d] ?? 0;
    x[c] = u, i[d] = c + 1;
  }
  return new Map(s.map((item, index) => {
    let d = a[index] ?? 0;
    return [item, x.slice(d, d + (n[index] ?? 0))];
  }));
}
var ne = length => [...Array.from({
  length: length
}).keys()];
function Go(e, t, o) {
  let r = [],
    end = o;
  for (let part of e) end += t(part), r.push({
    part: part,
    end: end
  });
  return r;
}
function sum(e) {
  let t = e.reduce((acc, item) => acc + item, 0),
    o = e.reduce((acc, item) => acc + Math.abs(item), 0);
  return Math.abs(t) > e.length * Number.EPSILON * o ? t : 0;
}
function Xo(e, t, o) {
  let r = [],
    s = 0;
  for (let p of e) {
    if (s += o(p), s > t) break;
    r.push(p);
  }
  return r;
}
function F(e, t) {
  let o = [],
    r = t.values();
  for (let s of e) {
    let p = r.next();
    if (p.done) break;
    o.push([s, p.value]);
  }
  return o;
}
function P(e) {
  if (Ho.test(e)) return e.length;
  let o = 0;
  for (let r of Ce(e)) if (ax.test(r)) o += _x;else for (let p of r) if (!regExp_2.test(p)) o += regExp.test(p) ? Cx : 1;
  return o;
}
function Y(e, t) {
  if (P(e) <= t) return e;
  if (t < $o) return "";
  let r = Ce(e),
    s = Math.ceil((t - $o) / gx);
  return Xo(r, s, P).join("") + At + Xo(r.toReversed(), t - $o - s, P).toReversed().join("");
}
function hs(e) {
  let t = mx.test(e);
  return e.replace(t ? px : sx, "");
}
function re(e, t = Tx) {
  let o = ds(e, t * hx).trim().replace(Ql, At).replace(Zl, " "),
    r = Ho.test(o);
  return Y((r ? o : Ce(o).map(hs).join("")).replace(ex, " ").trim(), t);
}
function bt(e) {
  let t = new Map();
  return JSON.parse(JSON.stringify(e), (o, r) => {
    if (typeof r !== "string") return r;
    let p = t.get(r) ?? re(r);
    return t.set(r, p), p;
  });
}
var Ts = (e, t) => `${At}${[...e].slice(t).join("")}`;
function wx(e, t) {
  let [o = [], ...r] = e.map(item => [...item]),
    s = o.slice(0, Math.max(0, o.findIndex((item, index) => r.some(a => a[index] !== item)))).findLastIndex(m => !ox.test(m)) + 1,
    p = s > 0 && e.some(item => P(item) > t);
  return e.map(item => Y(p ? Ts(item, s) : item, t));
}
function It(e, t, o = t) {
  let r = [""];
  for (let s of e.split(" ")) {
    let p = Y(s, o),
      m = `${r.at(-1)} ${p}`.trimStart();
    P(m) <= t || m === p ? r[r.length - 1] = m : r.push(p);
  }
  return r;
}
var Ss = (e, t) => Object.hasOwn(e, t) ? e[t] : void 0;
var gs = e => ([t, o]) => {
  let r = Ss(e.properties, t);
  return r ? e.errorsAt(o, r, `${e.prefix}${t}`).map(item => `${item} (${r.description})`) : [e.prefix + re(t, Xl) + ` is not a field: those are ${e.fieldNames}`];
};
var Os = e => e === null ? "null" : typeof e;
var _s = e => Number.isInteger(e) ? "integer" : Os(e);
var Cs = e => Array.isArray(e) ? "array" : _s(e);
function errorsAt(e, t, o) {
  let {
    anyOf: anyOf,
    items: items,
    properties: properties,
    required = []
  } = t;
  if (anyOf?.some(c => errorsAt(e, c, o).length === 0)) return [];
  if (anyOf) return [`${o} must be ${anyOf.map(item => item.type).join(" or ")}`];
  if (t.enum?.some(c => c === e)) return [];
  if (t.enum) return [`${o} must be one of ${t.enum.join(", ")}`];
  let f = Cs(e);
  if (t.type !== f) return [`${o || "the call"} must be ${t.type}, not ${f}`];
  if (typeof e === "number" && e < (t.minimum ?? -1 / 0)) return [`${o} must be at least ${t.minimum}`];
  if (Array.isArray(e) && e.length > (t.maxItems ?? 1 / 0)) return [`${o} must hold at most ${t.maxItems}`];
  if (Array.isArray(e) && items) return e.flatMap((item, index) => errorsAt(item, items, `${o}[${index}]`));
  if (!(N(e) && properties !== void 0)) return [];
  let prefix = o === "" ? "" : `${o}.`;
  return [...required.filter(item => !Object.hasOwn(e, item)).map(item => `${prefix}${item} is missing`), ...Object.entries(e).flatMap(gs({
    properties: properties,
    prefix: prefix,
    fieldNames: Object.keys(properties).join(", "),
    errorsAt: errorsAt
  }))];
}
var Ko = e => errorsAt(e, inputSchema, "");
var vx = e => Ko(e).length === 0;
var Hx = "easel made an auto chart from this result. Chart it again only for a different chart.";
var deny_3 = "Not drawn. easel failed on this call. The fault is its own, and the same call will fail again.";
var deny_2 = "Not drawn. The session keeps no conversation for this call, and every call made here will be refused.";
var tool_6 = "mcp__easel__chart";
var deny = "Not drawn. This organization's policy withholds easel, and every call will be refused.";
var Kx = `If a tool named ${tool_6} is available, call it when numbers over time or across categories would be clearer as a chart.`;
var zx = 1000000000000000000000000;
var Yx = 0.000000000000000000000001;
var zo = 7;
var Yo = 1000;
var Es = 86400;
var As = 3600;
var Rs = 60;
var bs = 0.001;
var Is = 0.000001;
var qx = 2;
var Jo = 1e9;
var je = 1024;
var Vo = 1e6;
var We = 1000;
var Zo = 1000000000000;
var us = 0.000001;
var ms_2 = 0.001;
var ns_2 = 0.000000001;
var percentunit = 100;
var PB = 1000000000000000;
var Ms = 4;
var mu = 4;
var au = 60;
var fu = 60000;
var v = why => ({
  kind: "unread",
  why: why
});
var ws = (value, t) => ({
  kind: "number",
  value: value,
  unit: value === 0 ? null : t
});
function Le(e, t) {
  let o = Math.abs(e);
  if (!(o <= zx)) return v("too large");
  return o > 0 && o < Yx ? v("too small") : ws(e, t);
}
var du = !0;
var yu = !1;
var rt = je * je;
var st = rt * je;
var gu = 6;
var _u = 30.44;
var Cu = 365.25;
var typicalMs_2 = 3600000;
var typicalMs_3 = 60000;
var ve = 2;
var typicalMs = 86400000;
var Ru = 2;
var ks = 2;
var Iu = 2;
var Mu = 6;
var ku = 0.5;
var Du = 5;
var Uu = 2;
var Ps = 5;
var typicalMs_4 = 1000;
var Bu = 2;
var er = 1;
var Ds = 0;
var Wu = 3;
var Hu = 3;
var $u = 7;
function Us(e) {
  let t = new Map();
  return o => {
    let r = t.get(o) ?? e(o);
    return t.set(o, r), r;
  };
}
var Fs = Us(timeZone => new Intl.DateTimeFormat("sv-SE", {
  timeZone: timeZone,
  dateStyle: "short",
  timeStyle: "medium"
}));
function R(e, t) {
  let o = e - Math.floor(e / typicalMs_4) * typicalMs_4;
  if (t === "UTC") {
    let date = new Date(e);
    return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), o];
  }
  let [r = 0, s = 1, p = 1, m = 0, n = 0, a = 0] = Fs(t).format(e).split(/[- :]/, gu).map(Number);
  return [r, s - 1, p, m, n, a, o];
}
var Ee = [{
  fieldIndex: 0,
  typicalMs: Cu * typicalMs,
  counts: [1, 2, 5, 10, 20, 50, 100]
}, {
  fieldIndex: 1,
  typicalMs: _u * typicalMs,
  counts: [1, 3, 6]
}, {
  fieldIndex: 2,
  typicalMs: typicalMs,
  counts: [1, 2, 4, 7, 14]
}, {
  fieldIndex: 3,
  typicalMs: typicalMs_2,
  counts: [1, 2, 3, 6, 12]
}, {
  fieldIndex: 4,
  typicalMs: typicalMs_3,
  counts: [1, 2, 5, 10, 15, 30]
}, {
  fieldIndex: 5,
  typicalMs: typicalMs_4,
  counts: [1, 2, 5, 10, 15, 30]
}];
var Ju = !0;
var areTicks = !0;
var J = e => Date.UTC(e[0] ?? 0, ...e.slice(1));
function $e(e, t) {
  let o = new Date(J(R(e, t))).getUTCDay();
  return o === 0 || o === Mu;
}
var or = (e, t) => Math.floor((J(R(e, t)) / typicalMs + Hu) / $u);
var Bs = (e, t) => or(e.at(-1) ?? 0, t) - or(e[0] ?? 0, t) >= Iu && !e.some(item => $e(item, t));
var js = e => t => e.untilMs > e.fromMs ? (t - e.fromMs) / (e.untilMs - e.fromMs) : ku;
var Ws = (e, t) => o => {
  let r = t.get(o) ?? e.periodStarts.findLastIndex(p => p <= o),
    s = e.periodStarts[r] ?? e.axisSpan.fromMs;
  return (r + (o - s) / ((e.periodStarts[r + 1] ?? e.axisSpan.untilMs) - s)) / e.periodStarts.length;
};
function Nt(e) {
  return e.periodStarts.length > 0 ? Ws(e, new Map(e.periodStarts.map((item, index) => [item, index]))) : js(e.axisSpan);
}
var vs = [0, 0, 1, 0, 0, 0, 0];
var Hs = e => t => e.some(item => item >= t.fieldIndex);
var ad = (e, t) => ({
  unit: Ee.findLast(Hs(e.map(item => R(item, t).findLastIndex((r, s) => r !== vs[s])))) ?? Ee[Ps],
  count: 1,
  skipsWeekends: !1
});
var Mt = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
var wt = (e, t) => t.zone === "UTC" ? 0 : J(R(e, t.zone)) - e;
function rr(e, t) {
  let o = J(e),
    r = o - wt(o - typicalMs, t),
    s = o - wt(r, t);
  return s + wt(s, t) === o ? s : Math.max(r, s);
}
function kt(e) {
  let {
      start: start,
      step: step
    } = e,
    {
      fieldIndex: fieldIndex
    } = step.unit,
    s = [],
    p = start[fieldIndex] ?? 0,
    m = rr(start, e);
  while (m <= e.untilMs) {
    if (m > (s.at(-1) ?? -1 / 0)) s.push(m);
    p += step.count, m = rr(start.with(fieldIndex, p), e);
  }
  return s;
}
var Gs = e => t => e.has(t);
var fe = e => e.unit.typicalMs * e.count;
var Xs = (step_2, t) => ({
  start: R(t.fromMs, t.zone),
  step: step_2,
  untilMs: t.untilMs + Ru * fe(step_2),
  zone: t.zone
});
function Ks(e, step_3, o) {
  let r = kt(Xs(step_3, o));
  if (!e.every(Gs(new Set(r)))) return null;
  let periodStarts = r.filter(item => item <= o.untilMs);
  return {
    step: step_3,
    periodStarts: periodStarts,
    endMs: r[periodStarts.length] ?? o.untilMs
  };
}
var zs = (e, t) => e < typicalMs ? ["UTC"] : ["UTC", t];
var Ys = (e, t) => o => e[o.fieldIndex] !== t[o.fieldIndex];
var Js = (fromMs, untilMs, zone) => ({
  fromMs: fromMs,
  untilMs: untilMs,
  zone: zone
});
var Vs = e => e.toSorted((t, o) => t - o)[Math.floor(e.length / ks)] ?? 0;
function Zs(unit, t, o) {
  let count = Math.max(1, Math.round(t / unit.typicalMs)),
    skipsWeekends = o && unit.fieldIndex === ve && count === 1;
  return {
    unit: unit,
    count: count,
    skipsWeekends: skipsWeekends
  };
}
function qs(e, t, o) {
  let {
      zone: zone_2
    } = t,
    s = e[0],
    p = e.at(-1);
  if (!(s !== void 0 && p !== void 0 && e.length >= Uu)) return null;
  let n = e.slice(1).map((item, index) => item - (e[index] ?? item)),
    a = Vs(n);
  if ((p - s) / a > e.length * Du) return null;
  let i = e[n.indexOf(a)] ?? s;
  for (let x of zs(a, zone_2)) {
    let l = Ee.findLast(Ys(R(i, x), R(i + a, x)));
    if (!l) return null;
    let u = Zs(l, a, o),
      d = Ks(e, u, Js(s, p, x));
    if (d) return {
      ...d,
      periodStarts: d.periodStarts.filter(item => !(u.skipsWeekends && $e(item, zone_2)))
    };
  }
  return null;
}
var Qs = e => (t, o) => t !== e[o];
function ep(e, t) {
  let dataSpan = e.dataSpan,
    r = R(dataSpan.fromMs, dataSpan.zone),
    s = r.findIndex(Qs(R(dataSpan.untilMs, dataSpan.zone)));
  return {
    zone: dataSpan.zone,
    areTicks: !Ju,
    fieldsBefore: R(t, dataSpan.zone).slice(0, s === -1 ? r.length : s)
  };
}
function pt(e, t, o) {
  let {
      fieldIndex: fieldIndex_2
    } = t.unit,
    s = [],
    fieldsBefore = o.fieldsBefore;
  for (let m of e) {
    let n = R(m, o.zone),
      [a, f, i, x, l, u] = n,
      d = a !== fieldsBefore[Ds],
      c = fieldIndex_2 >= er && (fieldIndex_2 <= ve || d || f !== fieldsBefore[er] || i !== fieldsBefore[ve]),
      g = fieldIndex_2 === Ds || d,
      T = fieldIndex_2 > ve && !(o.areTicks && c && x === 0 && l === 0 && u === 0),
      L = [];
    if (c) {
      let _ = fieldIndex_2 === er;
      L.push(_ ? `${Mt[f]}` : `${Mt[f]} ${i}`);
    }
    if (g) L.push(String(a));
    if (T) {
      let _ = fieldIndex_2 === Ps;
      L.push((_ ? [x, l, u] : [x, l]).map(item => String(item).padStart(Bu, "0")).join(":"));
    }
    s.push(L.join(" ")), fieldsBefore = n;
  }
  return s;
}
var tp = (e, t) => pt([t], e.precision, ep(e, t))[0] ?? "";
var op = (unit_2, count_2) => ({
  unit: unit_2,
  count: count_2,
  skipsWeekends: !1
});
var rp = Ee.flatMap(item => item.counts.map(t => op(item, t))).toSorted((e, t) => fe(e) - fe(t));
function sp(e, t) {
  return t.unit.fieldIndex === ve ? e : e - e % t.count;
}
var pp = (e, fieldsBefore_2) => ({
  zone: e.zone,
  areTicks: areTicks,
  fieldsBefore: fieldsBefore_2
});
var mp = (e, step_4, o) => ({
  start: [...e.slice(0, step_4.unit.fieldIndex), sp(e[step_4.unit.fieldIndex], step_4)],
  step: step_4,
  untilMs: o.untilMs,
  zone: o.zone
});
var np = (e, t) => (o, r) => {
  let text = e[r] ?? "",
    column = t.columnOf(o);
  return {
    text: text,
    column: column,
    start: Math.min(Math.max(0, column - (t.areCentred ? Math.floor((text.length - 1) / ks) : 0)), t.columns - text.length)
  };
};
var ap = (e, t) => (o, r) => {
  let s = o.map(np(pt(o, r, e), t));
  return s.every((item, index) => item.start >= 0 && item.start + item.text.length + Wu <= (s[index + 1]?.start ?? 1 / 0)) ? s : [];
};
function Pd(e, t, o) {
  let r = R(e.fromMs, e.zone),
    s = ap(pp(e, r), o);
  for (let p of rp) {
    if (fe(p) < fe(t) || (e.untilMs - e.fromMs) / fe(p) > o.columns) continue;
    let n = s(kt(mp(r, p, e)).filter(item => item >= e.fromMs && !(t.skipsWeekends && p.unit.fieldIndex === ve && $e(item, e.zone))), p);
    if (n.length > 0) return n;
  }
  return s([e.fromMs], t);
}
var sr = `(?:${Mt.join("|")})[a-z]*`;
var regExp_3 = new RegExp(String.raw`^(?:\d{1,2}([./-])\d{1,2}\1\d{4}\b|\d{1,2}/\d{1,2}/\d{2}\b|` + String.raw`\d{1,2}[./]\d{4}\b|${sr} \d{1,2}$|` + String.raw`\d{1,2} ${sr}$)`);
var pr = e => regExp_3.test(String(e ?? "").trim());
var $d = String.raw`(?<hour>\d\d):(?<minute>\d\d)` + String.raw`(?::(?<second>\d\d)(?<fraction>\.\d+)?)?`;
var Gd = String.raw`\s?(?<zone>Z|UTC|GMT|[-+]\d\d(?::?\d\d)?)` + String.raw`(?: UTC)?`;
var ip = /^(?:--?|null|none|nan|n\/a|na|\\n|[-+]inf)?$/i;
var regExp_4 = new RegExp(String.raw`^(?:(?<days>\d+)d ?)?(?:(?<hours>\d+)h ?)?` + String.raw`(?:(?<minutes>\d+)m ?)?(?:(?<seconds>[\d.]+)s)?$`);
var Yd = /^[\d.E+]+$/;
var Jd = /^(?<year>\d{4})-?W(?<week>\d\d)(?:-?(?<weekday>[1-7]))?$/;
var Zd = /^(?<sign>[-+])(?<hours>\d\d):?(?<minutes>\d\d)?$/;
var lp = {
  days: Es,
  hours: As,
  minutes: Rs,
  seconds: 1
};
var xp = new Map(Object.entries({
  k: We,
  K: We,
  M: Vo,
  B: Jo,
  T: Zo
}));
var mr = st * je;
var up = [["", {
  k: We,
  K: We,
  M: Vo,
  G: Jo,
  T: Zo,
  short: 1,
  none: 1
}], ["B", {
  B: 1,
  kB: We,
  KB: We,
  MB: Vo,
  GB: Jo,
  TB: Zo,
  PB: PB
}], ["B", {
  Ki: je,
  Mi: rt,
  Gi: st,
  Ti: mr
}], ["B", {
  KiB: je,
  MiB: rt,
  GiB: st,
  TiB: mr
}], ["B", {
  bytes: 1,
  decbytes: 1
}], ["s", {
  ns: ns_2,
  us: us,
  µs: us,
  ms: ms_2,
  s: 1
}], ["s", {
  min: Rs,
  h: As,
  d: Es
}], ["%", {
  "%": 1,
  percent: 1,
  percentunit: percentunit
}]];
var Pt = new Map(up.flatMap(([unit_3, t]) => Object.entries(t).map(([o, size]) => [o, {
  unit: unit_3,
  size: size
}])));
function dp(e, unit_5) {
  let {
    unit: unit_4,
    size: size_2
  } = Pt.get(unit_5) ?? {
    unit: unit_5,
    size: 1
  };
  return Le(e * size_2, unit_4);
}
function nr(e, t, o) {
  return o !== void 0 ? Le(e * (xp.get(t) ?? 1), o) : dp(e, t);
}
function cp(e) {
  let {
      sign: sign,
      currency: currency,
      suffix = ""
    } = e,
    {
      integer = "0",
      fraction = "",
      exponent = "0"
    } = e,
    n = Number(`${integer.replaceAll(",", "")}${fraction}e${exponent}`);
  return nr(sign === "" || sign === "+" ? n : -n, suffix, currency);
}
var nc = String.raw`(?=\.?\d)(?<integer>\d{1,3}(?:,\d{3})+|\d+)?` + String.raw`(?<fraction>\.\d+)?`;
var ac = String.raw`(?:e(?<exponent>[-+]?\d+))?`;
var fc = String.raw`^(?<sign>[-+\u2212(]?)(?<currency>[$\u20AC\u00A3\u00A5])?`;
var ic = String.raw`(?<space>\s?)` + String.raw`(?<suffix>[a-z\u00B5%]*(?:\/[a-z]+)?)\)?$`;
var ar = 'Times are read as ISO 8601 (2026-09-07, 2026-W37), epoch numbers, "7 Sep 2026" or "Sep 7, 2026"';
var regExp_5 = new RegExp(fc + nc + ac + ic, "i");
function Ae(e, t = !1) {
  if (typeof e === "number") return Le(e, "");
  let r = String(e ?? "").trim();
  if (ip.test(r)) return {
    kind: "empty",
    why: "empty"
  };
  let p = regExp_4.exec(r)?.groups ?? {},
    m = Object.entries(lp).filter(([x]) => p[x] !== void 0).map(([x, l]) => Number(p[x]) * l);
  if (m.length >= qx) return Le(sum(m), "s");
  let a = regExp_5.exec(r)?.groups;
  if (!a) return v("not a number");
  let [f = ""] = (a.suffix ?? "").split("/");
  return a.space === "" && !t && f !== "" && !Pt.has(f) ? v("not a number") : cp(a);
}
var Tp = {
  9: Yo,
  10: Yo,
  12: 1,
  13: 1,
  15: bs,
  16: bs,
  18: Is,
  19: Is
};
var Ge = (ms_3, isZoned) => ({
  kind: "time",
  ms: ms_3,
  isZoned: isZoned
});
var Sp = e => (new Date(e).getUTCDay() + zo - 1) % zo;
var gp = (e, t) => R(J([e, 0, t + mu - 1]), "UTC")[0];
function Op(e) {
  let t = Number(e.year),
    o = Number(e.week),
    r = Ms - Sp(J([t, 0, Ms])) + (o - 1) * zo;
  return o < 1 || gp(t, r) !== t ? v("no such week") : Ge(J([t, 0, r + Number(e.weekday ?? 1) - 1]), yu);
}
var _p = e => (t, o) => t !== e[o];
function Cp(e, t) {
  let o = Zd.exec(t.zone ?? "")?.groups ?? {},
    r = Number(o.hours ?? 0) * au + Number(o.minutes ?? 0);
  return Ge(e - (o.sign === "-" ? -r : r) * fu + Math.round(Number(t.fraction ?? "0") * Yo), t.zone !== void 0);
}
function Lp(e) {
  let {
      year: year,
      month = "1",
      day = "1",
      monthName: monthName
    } = e,
    {
      hour = "0",
      minute = "0",
      second = "0"
    } = e,
    f = [year, monthName === void 0 ? Number(month) - 1 : Mt.findIndex(item => monthName.startsWith(item)), day, hour, minute, second].map(Number),
    i = J(f);
  return f.some(_p(R(i, "UTC"))) ? v("no such date") : Cp(i, e);
}
var Dt = $d + `(?:${Gd})?`;
var Ep = [String.raw`^(?<year>\d{4})(?:[-/](?<month>\d\d)(?:[-/](?<day>\d\d)` + String.raw`(?:[T ]${Dt})?)?)?$`, String.raw`^(?:[A-Z][a-z]{2}, )?(?<day>\d{1,2}) ` + String.raw`(?<monthName>[A-Z][a-z]+) (?<year>\d{4})` + String.raw`(?: ${Dt})?$`, String.raw`^(?<monthName>[A-Z][a-z]+) (?<day>\d{1,2}), (?<year>\d{4})` + String.raw`(?: ${Dt})?$`, String.raw`^(?<year>\d{4})(?<month>\d\d)(?<day>\d\d)T` + String.raw`(?<hour>\d\d)(?<minute>\d\d)(?<second>\d\d)(?<zone>Z)$`].map(item => new RegExp(item));
function le(e) {
  let t = String(e ?? "").trim();
  if (ip.test(t)) return {
    kind: "empty",
    why: "empty"
  };
  let r = Yd.test(t) ? Number(t) : NaN,
    s = Tp[String(Math.trunc(r)).length];
  if (!Number.isNaN(r) && s !== void 0) return Ge(r * s, du);
  for (let n of Ep) {
    let a = n.exec(t)?.groups;
    if (a) return Lp(a);
  }
  let m = Jd.exec(t)?.groups;
  return m ? Op(m) : v("not a time");
}
var description = `Draws one chart from data you already have, and answers with what was read, drawn and left out. The person sees the chart, not this answer: tell them the headline number and pass on the "note:" lines.
The data is a table under 64 KiB: JSON records, CSV, TSV, a markdown or SQL table, aligned shell output. Name x and y. You may leave them out where there is one way to read it: metric results from Prometheus, Grafana and Datadog (these may be charted unasked), one column of times beside nothing but numbers, or beside one column of names too where the times repeat, or one column of names beside one of numbers (bars). Nothing is guessed: a call that leaves a choice open is refused with the columns that were found, so call again. Rows are not counted or put in buckets of time: pass counts. ${ar}.
It reads no file, and no result that the host cut or saved to a file: query less. A file that a tool read comes with a number before each line: pass its rows as data, without the numbers.`;
var Nc = {
  name: "chart",
  description: description,
  inputSchema: inputSchema
};
function Rp(e, t) {
  let o = Array.isArray(e) ? e : [],
    r = o.findLastIndex(m => m.role === "user" && !m.toolResults?.length),
    s = o.slice(r + 1).flatMap(item => item.toolUses),
    p = s.findIndex(item => item.tool_use_id === t);
  return s.slice(0, p < 0 ? void 0 : p).some(item => item.text === void 0 && item.tool !== tool_6);
}
async function fr(e, t, o) {
  let {
      agentId: agentId
    } = t,
    [s, ...p] = o,
    m = await e.session.messages(agentId ? {
      agentId: agentId
    } : {});
  if (s === void 0 || !Rp(m, t.tool_use_id)) return Array.isArray(m) ? _t(m) : void 0;
  return await e.clock.sleep(s, {
    signal: t.signal
  }), fr(e, t, p);
}
var Ut = e => ({
  ...e,
  form: "bars",
  log: void 0
});
function ue(e) {
  return typeof e === "string" || typeof e === "number" || typeof e === "boolean" ? e : e === void 0 || e === null ? null : JSON.stringify(e);
}
var Ft = (e, t) => e.map(item => t.get(item) ?? null);
var Bt = [{
  source: "tab-separated",
  pattern: /\t/
}, {
  source: "pipe table",
  pattern: /[|\u2502]/
}, {
  source: "CSV",
  pattern: /,/
}, {
  source: "semicolon-separated",
  pattern: /;/
}];
var jt = e => Ae(e).kind === "unread" && le(e).kind === "unread";
var name_2 = "Grafana";
var Wt = "*";
var ir = "value";
function Xe(e, t) {
  let [o] = S(e, t),
    r = N(o),
    s = o === void 0 || o === Wt;
  return r ? Object.entries(o).map(([p, m]) => [p, typeof m === "string" ? re(m) : m]) : s ? [] : [[t, re(String(o))]];
}
var Ip = 12;
var vt = [{
  name: "Prometheus",
  series: "[]",
  labels: ["metric"],
  time: "values.[].0",
  value: "values.[].1",
  isReadAtInstants: !0
}, {
  name: "Datadog",
  series: "series.[]",
  labels: ["metric", "scope", "group", "functions"],
  time: "pointlist.[].0",
  value: "pointlist.[].1",
  isReadAtInstants: !1,
  unit: "unit.[].short_name"
}, {
  name: "named-series",
  series: "series.[]",
  labels: ["name"],
  time: "data.[].0",
  value: "data.[].1",
  isReadAtInstants: !1
}, {
  name: "Datadog-buckets",
  series: "data.buckets.[]",
  labels: ["by"],
  time: "computes.*.[].time",
  value: "computes.*.[].value",
  isReadAtInstants: !1
}, {
  name: "Graphite",
  series: "[]",
  labels: ["target"],
  time: "datapoints.[].1",
  value: "datapoints.[].0",
  isReadAtInstants: !1
}, {
  name: "CloudWatch",
  series: "MetricDataResults.[]",
  labels: ["Label"],
  time: "Timestamps.[]",
  value: "Values.[]",
  isReadAtInstants: !1
}, {
  name: "Cloud-Monitoring",
  series: "timeSeries.[]",
  labels: ["metric.labels"],
  time: "points.[].interval.endTime",
  value: "points.[].value.*",
  isReadAtInstants: !0
}, {
  name: "Cost-Explorer",
  series: "",
  labels: [],
  time: "ResultsByTime.[].TimePeriod.Start",
  value: "ResultsByTime.[].Total.*.Amount",
  isReadAtInstants: !1,
  unit: "ResultsByTime.0.Total.*.Unit"
}];
var ey = [...vt.map(item => item.name), name_2];
var Np = e => e.every(item => item.cellsByKey.every(([, o]) => o.length === item.pointCount));
var ry = /^([\w./-]+):[^\s,(){}]+$/;
var py = /^((?:[\w.]+:)?[\w.-]+)\{([^{}]*)\}(?: by \{[^{}]*\})?((?:\.\w+\([^()]*\))*)$/;
function Mp(e) {
  let t = typeof e === "string" ? e.split(",") : [],
    r = t.length <= Ip ? t.map(item => ry.exec(item)?.[1]) : [];
  return r.length > 0 && !r.includes(void 0) && U(r).length === r.length ? Object.fromEntries(F(r.map(item => `${item} tag`), t)) : e;
}
var wp = (e, pointlist) => ({
  metric: S(e, "expression")[0],
  scope: S(e, "scope")[0],
  pointlist: pointlist
});
var kp = (e, t) => (o, r) => [e + r * t, o];
function Pp(e) {
  let t = le(String(S(e, "start_time")[0]));
  return t.kind === "time" && t.isZoned ? S(e, "values").flatMap(item => String(item).split(",")).map(kp(t.ms, Number(S(e, "interval_ms")[0]))) : [];
}
var Dp = e => wp(e, [...Pp(e), ...S(e, "binned.[]").map(item => [S(item, "start_time")[0], S(item, "avg")[0]])]);
function Up(e) {
  return S(e, "[].expression").length > 0 ? {
    series: S(e, "[]").map(item => Dp(item))
  } : e;
}
function nt(e) {
  let t = Ae(e),
    {
      kind: kind
    } = t.kind === "unread" ? le(e) : t;
  return kind === "unread" ? "text" : kind;
}
function Fp(name, cells) {
  let cellsByKind = z(cells, nt),
    r = [...cellsByKind.keys()].filter(item => item !== "empty");
  return {
    name: name,
    cells: cells,
    cellsByKind: cellsByKind,
    soleKind: r.length === 1 ? r[0] : void 0
  };
}
var at = e => e.columns.map((item, index) => Fp(item, e.rows.map(item => item[index] ?? null)));
function ft(e, t) {
  let [o, ...r] = e.columns.filter(item => item.toLowerCase() === t.toLowerCase());
  return o !== void 0 && r.length === 0 ? o : t;
}
var Bp = e => e.every(item => nt(item.name) === "text") || e.some(item => item.name !== "" && !item.cellsByKind.has(nt(item.name)));
var Ke = e => e.soleKind === "text" && (e.cellsByKind.get("text") ?? []).every(pr);
var Ty = 262144;
var ur = 200;
var Ht = 3;
var be = (e, t) => e > ur || e * t > Ty;
var Oy = {
  line: "line",
  columns: "columns",
  bars: "bars",
  sparks: "line",
  share: "bars"
};
var Wp = e => t => ft(e, t);
var vp = (form, x_2, o) => ({
  form: form,
  x: x_2,
  ...o
});
var Hp = e => /\d/.test(String(e));
var dr = e => t => t !== e;
var Ry = ". It was read as a metrics format, into the columns below: x and y can be left out";
var Gp = (e, t) => ({
  code: "no_such_column",
  why: `it has no column ${e.join(", ")}` + (t.roles ? Ry : "")
});
var Xp = (e, t) => e.length === 0 || e.length === 1 && new Set(t.cells).size < t.cells.length;
var Kp = (e, t) => t === "bars" ? e.length === 1 : e.length >= 1;
function cr(e = null) {
  let t = le(e);
  return t.kind === "time" ? t.ms : void 0;
}
var zp = (e, t) => e.cells.some((item, index) => cr(item) !== cr(t.cells[index]));
var yr = e => e.name;
function Yp(e, t) {
  let o = e.filter(item => item.name !== ""),
    r = o.filter(item => item.soleKind === "text"),
    s = o.filter(item => item.soleKind === "number"),
    p = o.filter(item => item.cellsByKind.get("time")?.length === item.cells.length && new Set(item.cells).size >= Ht),
    m = p.length > 0,
    [n, ...a] = m ? p : r;
  if (!(n !== void 0 && a.length === 0)) return;
  let i = m ? s.filter(item => zp(item, n)) : s,
    x = r.filter(item => item !== n),
    form_2 = t ?? (m ? "line" : "bars");
  return 1 + x.length + s.length === o.length && Xp(x, n) && (m || form_2 === "bars") && (t !== void 0 || !Ke(n)) && Kp(i, form_2) ? {
    form: form_2,
    x: n.name,
    y: i.map(yr),
    by: x.map(yr)
  } : void 0;
}
function Jp(e, t) {
  let o = e.find(item => item.name === t);
  return o?.soleKind === "text" && !Ke(o);
}
var Vp = (e, t) => Jp(e, t) ? "bars" : "line";
function Zp(e, t) {
  let o = t.form === void 0 ? void 0 : Oy[t.form],
    r = o === "bars" ? void 0 : e.roles,
    s = r ? [] : at(e),
    p = r ?? Yp(s, o),
    m = t.x === void 0 ? p?.x : ft(e, t.x),
    n = Wp(e),
    y = U(t.y?.map(n) ?? p?.y ?? []).filter(dr(m)),
    by = (t.by?.map(n) ?? (t.combine === void 0 ? p?.by : void 0) ?? []).filter(dr(m));
  if (e.rows.length === 0) return {
    code: "no_rows",
    why: "it has no rows"
  };
  if (new Set(e.columns).size < e.columns.length) return {
    code: "names_repeat",
    why: "two of its columns share a name, so a name does not pick one. Pass the rows as data, each column under a name of its own"
  };
  if (m === void 0) {
    let u = s.find(Ke);
    if (u) return {
      code: "dates_unread",
      why: `${u.name} looks like dates, in a spelling that is not read (${u.cells[0]}). ${ar}`
    };
    let d = s.filter(item => item.soleKind === "time"),
      c = d[0],
      g = new Set(c?.cells).size;
    if (c && d.length === 1 && g < Ht) return {
      code: "few_times",
      why: `${c.name} holds ${K(g, "time")}, too few to find the time axis unasked (that takes ${Ht}). Name x and y`
    };
    if (!((e.listColumns ?? []).length > 0 || s.some(item => item.cells.some(Hp)))) return {
      code: "no_numbers",
      why: "no column holds a number, so there is nothing to draw. Rows are not counted: pass the counts as data"
    };
    return {
      code: "no_x",
      why: y.length > 0 ? "say which column is x" : "say which column is x and which are y"
    };
  }
  if (y.length === 0) return {
    code: "no_y",
    why: `say which columns are y, the values to draw. Rows are not counted: for how many rows share a ${m}, pass the counts as data`
  };
  let x = [m, ...y, ...by].filter(item => !e.columns.includes(item));
  return x.length > 0 ? Gp(x, e) : vp(o ?? p?.form ?? Vp(s, m), m, {
    y: y,
    by: by
  });
}
var hr = e => e.path ?? e.source;
var qp = (e, t, o) => ({
  source: e.name,
  y: U(t.flatMap(item => item.y)),
  points: o.flatMap(item => ne(item.pointCount).map(s => Object.fromEntries([...item.labels, ...item.cellsByKey.map(([p, m]) => [p, m[s]])]))),
  isSeries: !0,
  isReadAtInstants: e.isReadAtInstants
});
function Gt(e, t) {
  let o = be(Math.max(0, ...t.map(item => item.labels.length + item.cellsByKey.length)), sum(t.map(item => item.pointCount)));
  return qp(e, t, o ? [] : t);
}
var Qp = e => S(e, "schema.fields.[]").map((item, index) => ({
  name: String(S(item, "name")[0]),
  displayName: S(item, "config.displayNameFromDS")[0],
  type: S(item, "type")[0],
  labels: S(item, "labels")[0],
  unit: re(String(S(item, "config.unit")[0] ?? "")),
  cells: S(e, `data.values.${index}.[]`)
}));
function Xt(e, t) {
  return t !== "" && Ae(`1 ${t}`).kind === "number" && e !== null ? `${e} ${t}` : e;
}
var em = (e, t, o) => r => {
  let s = r.displayName ?? S(e, "schema.name")[0],
    m = o && Boolean(s) ? String(s) : `${r.name} ${S(e, "schema.refId")[0]}`;
  return {
    ...r,
    name: t ? r.name : m,
    cells: r.cells.map(item => Xt(item, r.unit))
  };
};
function tm(e, t, o) {
  let r = Qp(e),
    s = r.filter(item => item.type === "number"),
    p = r.filter(item => item.type === "string"),
    m = r.find(item => item.type === "time")?.cells ?? [];
  return [...z(s.map(em(e, o, t && s.length === 1)), n => JSON.stringify(n.labels)).values()].map(item => ({
    labels: Xe(item[0], "labels"),
    y: item.map(item => item.name),
    pointCount: m.length,
    cellsByKey: [...[...p, ...item].map(item => [item.name, item.cells]), ["time", m]]
  }));
}
function om(e) {
  let t = S(e, "results.*"),
    o = (t.length > 0 ? t : S(e, "data")).map(item => S(item, "frames.[]"));
  return {
    ...Gt({
      name: name_2,
      isReadAtInstants: o.flat().every(item => S(item, "schema.meta.custom.resultType")[0] === "matrix")
    }, o.flatMap(item => item.flatMap(s => tm(s, item.length === 1, o.length === 1)))),
    isSeries: o.flat().every(item => String(S(item, "schema.meta.type")[0]).startsWith("timeseries"))
  };
}
function rm(e) {
  let [t] = S(e, "scope");
  if (!(N(e) && typeof t === "string")) return e;
  let [r, s, p, m] = py.exec(String(e.metric)) ?? [],
    n = r !== void 0,
    a = new Set(n ? t.split(",") : S(e, "tag_set.[]").map(String));
  return a.delete(Wt), {
    ...e,
    metric: n ? s : e.metric,
    scope: (n ? p ?? "" : t).split(",").filter(item => !a.has(item)).join(",") || Wt,
    group: [...a].join(",") || void 0,
    functions: m || void 0
  };
}
function sm(e) {
  if (!(N(e) && S(e, "series.[].pointlist").length > 0)) return e;
  let o = S(e, "series.[]").map(rm),
    r = o.map(item => N(item) ? {
      ...item,
      scope: Mp(item.scope)
    } : item),
    s = S(r, "[].scope"),
    p = s.every(item => item === Wt || N(item)) && U(s.flatMap(item => N(item) ? Object.keys(item) : [])).length <= Ip;
  return {
    ...e,
    series: p ? r : o
  };
}
var pm = e => t => Xt(t, e);
function mm(e, t) {
  let unit_6 = t.unit;
  return unit_6 !== void 0 ? re(S(e, unit_6).join("/")) : "";
}
var nm = (e, t, o) => ({
  labels: t.labels.flatMap(item => Xe(e, item)),
  y: [ir],
  pointCount: o.length,
  cellsByKey: [["time", S(e, t.time)], [ir, o]]
});
var am = (e, t) => S(e, t.series).map(item => nm(item, t, S(item, t.value).map(pm(mm(item, t)))));
var Tr = (e, t) => U(S(e, t.series).map(item => JSON.stringify(Object.entries(Object.fromEntries(t.labels.flatMap(r => Xe(item, r)))).toSorted()))).length;
function rh(e) {
  let t = om(e);
  if (t.points.length > 0) return t;
  let r = Up(e),
    s = sm(r),
    p = s === r ? [r] : [s, r];
  for (let m of vt) for (let n of p) {
    let a = am(n, m),
      f = Gt(m, Np(a) ? a : []);
    if (f.points.length > 0 && Tr(n, m) >= Tr(r, m)) return f;
  }
  return;
}
var fm = "aligned columns";
var source_5 = "JSON lines";
var source_2 = "JSON";
var lm = "columns and rows";
var xm = " with no header";
var fh = '<field name="';
var um = "</row>";
var Sr = "<row>";
var dm = "XML rows";
var ih = [...Bt.map(item => item.source), fm, lm, source_2, source_5, dm, ...ey];
var it = 2;
var xh = 32;
var cm = 2;
var de = (source, columns, rows) => ({
  source: source,
  columns: columns,
  rows: rows,
  hasMadeUpNames: !1,
  isCut: !1
});
var yh = /\n(?: *\n)+/;
var Th = /^[\]}]\s*$/;
var Sh = /^\s*[[{]./;
var gh = /^[[{]\s*$/;
var Oh = /^\s*\[?\{"/;
var Yt = /^[-+|:=\s\u2500\u2502\u250C\u252C\u2510\u251C\u253C\u2524\u2514\u2534\u2518]+$/;
var Ch = /^[*`]+|(?<![*`])[*`]+$/g;
var Lh = /^\[([^\]]*)\]\([^)]*\)$/;
var Ah = /^\uFEFF|\u001B\[[0-9;]*m/g;
var bh = /<results\b[^>]{0,200}\btruncated="true"/;
var Ih = /^(?<name>[^"]*)"(?<attributes>[^>]*?)(?:\/>|>(?<text>.*?)<\/field>)/s;
var Nh = /(?:^|\s)null="true"/;
var Mh = /&#(?:x([0-9a-f]{1,6})|(\d{1,7}));/gi;
var kh = /[.\u2026 \t]*\[[^\]\n]{0,99}truncated[^\]\n]{0,99}\][. \t]*/;
var Ph = /[\u2502|] *[\d,]+ rows \([\d,]+ shown\).*/;
var ym = (rows_2, t) => ({
  source: `${t}${xm}`,
  hasMadeUpNames: !0,
  isCut: !1,
  columns: [...(rows_2[0] ?? []).keys()].map(item => `column ${item + 1}`),
  rows: rows_2
});
function Jt(e, t) {
  let o = de(t, e[0] ?? [], e.slice(1));
  return Bp(at(o)) ? o : ym(e, t);
}
var Vt = () => ({
  source: "a cut text",
  columns: [],
  rows: [],
  hasMadeUpNames: !1,
  isCut: !0
});
var hm = e => e.length > 1 && e.every(N) && U(e.map(item => Object.keys(item).join())).length === 1;
function Tm(e) {
  let t = e.findIndex(item => gh.test(item));
  return t >= 0 ? e.slice(t, e.findLastIndex(r => Th.test(r)) + 1) : [];
}
function Sm(e, t) {
  let o = [e];
  for (let r = 0; r <= t; r += 1) o = o.flatMap(item => typeof item === "object" && item !== null ? Object.values(item) : []);
  return o.length > 0;
}
function Zt(e) {
  try {
    let t = JSON.parse(e);
    return Sm(t, xh) ? void 0 : t;
  } catch {
    return;
  }
}
function gm(e) {
  let t = Zt(e);
  if (t !== void 0) return {
    values: [t],
    unparsedLines: 0
  };
  let o = e.split(`
`),
    r = Zt(Tm(o).join(`
`));
  if (r !== void 0) return {
    values: [r],
    unparsedLines: 0
  };
  let s = o.filter(item => Sh.test(item)),
    p = s.map(item => Zt(item));
  return {
    values: p.filter(item => item !== void 0),
    unparsedLines: ys(F(s, p), ([m, n]) => n === void 0 && Oh.test(m))
  };
}
var Om = e => t => Array.isArray(t) && t.length === e && !t.some(N);
var _m = (path, columns_2, rows_3) => ({
  source: source_2,
  path: path,
  columns: columns_2,
  rows: rows_3,
  hasMadeUpNames: !1,
  isCut: !1
});
var Cm = e => t => (N(t) ? e.map(item => t[item]) : S(t, "[]")).map(ue);
var Lm = (column_2, cell) => ({
  column: column_2,
  cell: cell,
  isList: !1
});
var Em = column_3 => ({
  column: column_3,
  cell: null,
  isList: !0
});
var gr = (e, t) => Object.entries(e).flatMap(([o, r]) => {
  let s = `${t}${o}`;
  if (typeof r !== "object" || r === null) return [Lm(s, ue(r))];
  return Array.isArray(r) && r.some(item => typeof item === "object" && item !== null) ? [Em(s)] : gr(r, `${s}.`);
});
function Or(e, source_3, path_2) {
  let r = [],
    s = 0;
  for (let i of e) {
    let x = gr(i, "");
    if (r.push(x), s += x.length, be(1, s)) return [];
  }
  let p = r.flat(),
    columns_3 = U(p.map(item => item.column));
  if (be(columns_3.length, e.length)) return [];
  let rows_4 = r.map(item => Ft(columns_3, new Map(item.map(item => [item.column, item.cell])))),
    listColumns = U(p.filter(item => item.isList).map(item => item.column));
  return [{
    source: source_3,
    path: path_2,
    columns: columns_3,
    rows: rows_4,
    listColumns: listColumns,
    hasMadeUpNames: !1,
    isCut: !1
  }];
}
var Am = e => t => ne(e).map(item => ue(t[item]));
var Rm = e => Array.isArray(e) && !e.some(item => typeof item === "object" && item !== null);
function bm(e, path_3) {
  let o = e.reduce((acc, item) => Math.max(acc, S(item, "[]").length), 0);
  if (!(e.length >= cm && o >= it && !be(o, e.length) && e.every(Rm))) return [];
  let [s = [], ...p] = e.map(Am(o)),
    m = de(source_2, s.map(item => String(item ?? "")), p);
  return Bp(at(m)) ? [{
    ...m,
    path: path_3
  }] : [];
}
var Im = (e, by_2) => ({
  form: "line",
  x: "time",
  y: e.y,
  by: by_2
});
function Nm(e) {
  let t = ["time", ...e.y];
  return o => ({
    ...o,
    isSeries: e.isSeries,
    isReadAtInstants: e.isReadAtInstants,
    roles: Im(e, o.columns.filter(item => !t.includes(item)))
  });
}
function qt(e, t, o = {}) {
  let {
    path: path_4,
    source: source_4 = source_2
  } = o;
  if (typeof e === "string") return t(e);
  if (typeof e !== "object" || e === null) return [];
  let p = rh(e);
  if (p) {
    let u = Or(p.points, p.source);
    return U(p.points.map(item => item.time)).length < Ht ? u : u.map(Nm(p));
  }
  let m = S(e, "columns.[]").map(item => String(S(item, "name")[0] ?? item)),
    n = S(e, "rows.[]");
  if (m.length > 0 && !be(m.length, n.length)) return [de(lm, m, n.map(Cm(m)))];
  if (typeof S(e, "range")[0] === "string" && S(e, "majorDimension")[0] === "ROWS") return bm(S(e, "values.[]"), path_4 === void 0 ? "values" : `${path_4}.values`);
  if (Array.isArray(e)) return e.length > 0 && e.every(N) ? Or(e, source_4, path_4) : [];
  let i = Object.values(e),
    x = S(i[0], "[]").length;
  return i.length >= it && i.every(Om(x)) ? [_m(path_4, Object.keys(e), ne(x).map(item => i.map(d => ue(d[item]))))] : Object.entries(e).flatMap(([u, d]) => qt(d, t, {
    path: path_4 === void 0 ? u : `${path_4}.${u}`
  }));
}
var Mm = e => t => e.map(item => t.slice(item.from, item.until).trim());
var Ne = (e, t) => e.map(item => item.slice(t.from, t.until).padEnd(t.until - t.from));
var wm = (e, t) => !t.some(item => item.trim().includes(" ")) && !e.some(item => item.trim().includes("  ")) && (!e.some(item => /^ +\S/.test(item)) || !e.some(item => /\S +$/.test(item)));
var km = (e, t) => (o, r) => {
  let s = {
    from: o.from,
    until: r.until
  };
  return o.until === r.from - 1 && wm(Ne(e, s), Ne(t, s));
};
var Pm = e => (e[0] ?? "").trim().split(/ +/).every(jt);
var Dm = e => t => Ne(e, t).slice(1).some(jt);
var Um = (e, t, o) => r => {
  let [s = "", ...p] = Ne(e, r);
  return (s.trim() !== "" || !(o && r.from !== t[0]?.from)) && p.join("").trim() !== "";
};
function Fm(e, t, o) {
  let r = Dm(t),
    s = Um(t, e, Pm(t)),
    p = km(t, o),
    m = F(e, e.slice(1)).filter(([f, i]) => f.until === i.from - 1),
    n = m.length < e.length - 1 && m.every(([f, i]) => p(f, i)),
    a = [];
  for (let f of e) {
    let i = a.at(-1);
    i && p(i, f) && (n || !s(i) || !s(f) || r(i) && r(f)) ? i.until = f.until : a.push({
      ...f
    });
  }
  return a;
}
function Bm(e) {
  let t = [];
  for (let m of e) for (let n = 0; n < m.length; n++) t[n] ||= m[n] !== " ";
  let o = [...t.keys()].filter(item => t[item]),
    r = F(o.filter(item => !t[item - 1]), o.filter(item => !t[item + 1])).map(([m, n]) => ({
      from: m,
      until: n + 1
    }));
  if (be(r.length, e.length)) return [];
  let p = e.filter(item => !Yt.test(item));
  return p.map(Mm(Fm(r, p, e.filter(item => Yt.test(item)))));
}
var jm = ([e = [], ...t]) => t.length > 0 && e.length >= it && [...e.keys()].some(item => t.every(r => Ae(r[item] ?? "").kind === "number"));
var Wm = e => e !== "" && (!Yt.test(e) || e.trim().includes(" "));
function vm(e) {
  let t = e.split(yh).map(item => Bm(item.split(`
`).filter(Wm))).filter(jm);
  return {
    lineCount: t.flat().length,
    tables: t.map(item => Jt(item, fm))
  };
}
function Hm(e) {
  let t = [],
    o = [];
  for (let [r, s] of e.entries()) {
    let p = s.length >= it && s.length <= ur && s.some(item => item !== ""),
      m = o[0]?.length ?? s.length;
    if (p && s.length === m) {
      o.push(s);
      continue;
    }
    if (!(p && e[r + 1]?.length === m)) t.push(o), o = p ? [s] : [];
  }
  return t.push(o), t.filter(item => item.length >= cm);
}
function $m(e, t) {
  let regExp_6 = new RegExp(`[ ]*(?:"(?<quoted>(?:[^"]|"")*)"[ ]*|(?<plain>[^\\n]*?))(?<end>${t.pattern.source}|\\n)`, "gy"),
    r = [],
    s = [];
  for (let {
    groups = {}
  } of `${e}
`.matchAll(regExp_6)) if (s.push(groups.quoted?.replaceAll('""', '"') ?? groups.plain ?? ""), groups.end === `
`) r.push(s), s = [];
  return [...r, s].map(item => (t.pattern.test("|") && item[0] === "" && item.at(-1) === "" ? item.slice(1, -1) : item).map(item => item.trim().replace(Ch, "").replace(Lh, "$1")));
}
var Gm = unparsedLines => t => ({
  ...t,
  unparsedLines: unparsedLines
});
function Xm(e, t) {
  let o = $m(e, t).filter(item => !Yt.test(item.join(""))),
    r = Hm(o),
    s = r.flat();
  return {
    lineCount: s.flatMap(item => item.join("").split(`
`)).length,
    tables: r.map(item => Jt(item, t.source)).map(Gm(ys(o, p => p.length >= it) - s.length))
  };
}
var Km = e => t => t.lineCount === e;
function zm(e) {
  let t = [...Bt.filter(item => item.pattern.test(e)).map(item => Xm(e, item)), vm(e)];
  return t.find(Km(Math.max(...t.map(item => item.lineCount))))?.tables ?? [];
}
var Ym = e => bh.test(e) || e.lastIndexOf(Sr) > e.lastIndexOf(um);
var _r = e => e.replace(Mh, (t, o, r) => {
  let s = o === void 0 ? Number(r) : Number.parseInt(o, 16);
  return s <= 1114111 ? String.fromCodePoint(s) : t;
}).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&amp;", "&");
function Jm(e) {
  let t = Ih.exec(e)?.groups;
  return t !== void 0 ? [[_r(t.name ?? ""), Nh.test(t.attributes ?? "") ? null : _r(t.text ?? "")]] : [];
}
function Vm(e) {
  let t = e.slice(e.lastIndexOf(Sr));
  return new Map(t.split(fh).slice(1).flatMap(Jm));
}
function Zm(e) {
  if (!e.trimStart().startsWith("<")) return [];
  let o = e.split(um).slice(0, -1).filter(item => item.includes(Sr)).map(Vm),
    r = U(o.flatMap(item => [...item.keys()]));
  if (!(r.length > 0 && !be(r.length, o.length))) return [];
  return Ym(e) ? [Vt()] : [de(dm, r, o.map(item => Ft(r, item)))];
}
var qm = [/<persisted-output>/, /<truncated-output>/, /Output too large.*/, /\(output truncated[^)\n]*\)/, Ph, kh, /Error: result \(.* exceeds maximum allowed tokens.*/];
var regExp_7 = new RegExp(`^(?:${qm.map(item => item.source).join("|")})$`, "im");
var en = unparsedLines_2 => t => ({
  unparsedLines: unparsedLines_2,
  ...t
});
function Cr(e) {
  let t = e.replace(Ah, "").replaceAll(`\r
`, `
`);
  if (regExp_7.test(t)) return [Vt()];
  let r = Zm(t);
  if (r.length > 0) return bt(r);
  let {
    values: values,
    unparsedLines: unparsedLines_3
  } = gm(t);
  if (values.length === 0) return bt(zm(t));
  let m = hm(values);
  return bt((m ? qt(values, Cr, {
    source: source_5
  }) : values.flatMap(item => qt(item, Cr))).map(en(unparsedLines_3)));
}
var eo = e => e.toLowerCase().replaceAll(" ", "_");
var tn = "json_path";
var format = "unread";
function rn(e) {
  return e.path !== void 0 ? tn : eo(e.source.replace(xm, ""));
}
var sn = [...ih.map(eo), tn, format];
var oo = e => e < 1 ? 0 : 2 ** Math.floor(Math.log2(e));
var FT = ["bad_call", "no_result", "data_not_found", "too_long", "cut_short", "no_table_read", "table_unpicked", "no_rows", "names_repeat", "dates_unread", "few_times", "no_numbers", "no_x", "no_y", "no_such_column", "units_mixed", "units_differ", "zones_mixed", "x_not_times", "column_unread", "rows_share_x", "no_values", "bars_partly_unread", "share_not_summed", "share_not_whole", "log_not_line", "uneven_step", "column_below_zero", "failed"];
var vT = ["off", "skips_servers"];
var HT = ["last_result", "result_id", "text", "rows", "none"];
var $T = (e, t) => ({
  event: "easel_chart",
  props: {
    outcome: {
      value: e.outcome,
      of: ["drawn", ...FT]
    },
    form: {
      value: e.form,
      of: [...Object.keys(k), "unnamed"]
    },
    format: {
      value: e.format,
      of: sn
    },
    data_from: {
      value: e.dataFrom,
      of: HT
    },
    series_bucket: oo(e.seriesCount),
    point_bucket: oo(e.pointCount),
    elapsed_ms_bucket: oo(t.elapsedMs),
    is_form_named: e.isFormNamed,
    has_left_out: e.hasLeftOut,
    is_form_replaced: e.isFormReplaced,
    is_asked: t.isAsked,
    is_in_subagent: t.isInSubagent,
    is_on_terminal: t.surfaces.includes("terminal"),
    is_on_app: t.surfaces.some(item => item !== "terminal")
  }
});
function mn(feature, t) {
  if (t.hasLeftOut) return {
    feature: feature,
    kind: "sad",
    reason: "data_left_out"
  };
  return t.isFormReplaced ? {
    feature: feature,
    kind: "sad",
    reason: "form_replaced"
  } : {
    feature: feature,
    kind: "ok"
  };
}
var nn = (feature_2, t) => ({
  feature: feature_2,
  kind: "bad",
  reason: t.outcome
});
function zT(e, t) {
  let o = t ? "easel_chart" : "easel_auto";
  return e.outcome === "drawn" ? mn(o, e) : nn(o, e);
}
var lt = {
  outcome: "failed",
  form: "unnamed",
  isFormNamed: !1,
  format: format,
  dataFrom: "none",
  seriesCount: 0,
  pointCount: 0,
  hasLeftOut: !1,
  isFormReplaced: !1
};
var VT = value_2 => ({
  event: "easel_settings",
  props: {
    auto_charts: {
      value: value_2,
      of: vT
    }
  }
});
var an = (e, dataFrom) => ({
  ...lt,
  form: e.form ?? "unnamed",
  isFormNamed: e.form !== void 0,
  dataFrom: dataFrom
});
function fn(e, t, o) {
  if (t.kind === "data") return t.series.length <= (o.top ?? k.bars.defaultCount) ? t : e;
  return {
    ...t,
    problem: {
      ...t.problem,
      why: `${o.x ?? "x"} holds names, not times, so bars were read. ` + t.problem.why
    }
  };
}
var ln = 12;
var pS = 32;
var mS = 3;
var ro = (e, t, o = "") => e > 0 ? [`${K(e, t)}${o}`] : [];
var fS = !0;
var un = e => e.every(item => Ae(item, fS).kind === "number");
var dn = e => un(e) ? ", read as numbers if named as y" : "";
var cn = e => e.slice(0, mS).map(item => Y(String(item), pS));
var yn = e => ` (${cn(e).join(", ")})${dn(e)}`;
var hn = e => e.map(item => le(item)).every(item => item.kind === "time" && item.isZoned);
var Tn = e => hn(e) ? ", read as times if named as x" : "";
function Sn(e) {
  let t = U(e.cellsByKind.get("text") ?? []),
    o = e.cellsByKind.get("number") ?? [];
  return [...ro(o.length, "number", Tn(o)), ...ro(e.cellsByKind.get("time")?.length ?? 0, "time"), ...ro(t.length, "text", yn(t))];
}
var gn = e => e ? "lists, which are not read. Pass one row for each item as data, with the fields beside the list repeated" : "empty";
var On = (e, t = []) => `${e.name}: ` + (Sn(e).join(", ") || gn(t.includes(e.name)));
var _n = e => `${hr(e)}, ${K(e.rows.length, "row")}:`;
var Cn = (e, t) => o => {
  let r = Et(at(o).map(item => On(item, o.listColumns)), e, "more column");
  return t ? [_n(o), ...r] : r;
};
var _S = e => e.flatMap(Cn(Math.floor(ln / e.length), e.length > 1));
var CS = !0;
function so(e) {
  let t = e.readings.filter(item => item.value !== null).map(item => JSON.stringify([item.groupLabels, item.ms]));
  return new Set(t).size < t.length;
}
var AS = 5;
var En = 120;
var An = 3;
var Rn = 3;
var bS = 65536;
var NS = 240;
var MS = 8;
var kS = 2;
var DS = /[\]}]\s*$/;
var US = /^\s*[[{]/;
var FS = /^[^\p{L}\p{N}]*\p{N}/u;
var bn = e => t => e.every(item => t.columns.includes(ft(t, item)));
function In(e, t) {
  let o = Zp(e, t);
  return !("code" in o) && o.form !== "bars";
}
var Nn = e => [e.x ?? [], e.y ?? [], e.by ?? []].flat();
function Mn(e, t) {
  let r = e.length === 1 ? e : e.filter(bn(Nn(t)));
  return r.length === 1 ? r : r.filter(item => In(item, t));
}
var po = e => U(e).slice(0, Rn).join(", ");
function wn(e, t) {
  let {
      unreadXCells: unreadXCells
    } = t,
    r = unreadXCells.filter(pr),
    s = t.readings.length === 0;
  if (r.length > 0 && (s || r.length === unreadXCells.length)) return {
    code: "dates_unread",
    why: `${e.x} holds dates in a spelling that is not read (${po(r)}). ${ar}`
  };
  let m = unreadXCells.filter(item => Ae(item).kind === "number");
  if (m.length > 0) return {
    code: "x_not_times",
    why: `${e.x} holds numbers that are not times (${po(m)}). A line, columns and sparks run over times. For one bar for each, pass form: "bars"`
  };
  return s && unreadXCells.length > 0 ? {
    code: "x_not_times",
    why: `${e.x} holds names, not times (${po(unreadXCells)}). A line, columns and sparks run over times: for names, pass form: "bars"`,
    fitsBars: !0
  } : void 0;
}
function kn({
  reading: reading,
  roles: roles,
  request: request,
  series: series
}) {
  if (new Set(reading.readings.map(item => item.isZoned)).size > 1) return {
    code: "zones_mixed",
    why: `${roles.x} mixes times that name a zone with times that name none`
  };
  let p = wn(roles, reading);
  if (p !== void 0) return p;
  let m = reading.droppedColumns.find(item => item.isEntireColumn);
  if (m !== void 0) return {
    code: "column_unread",
    why: `a whole column was not read. ${m.sentence}`
  };
  if (request.combine === void 0 && so(reading)) return {
    code: "rows_share_x",
    why: `several rows share one ${roles.x}; name the columns to split by, or how to combine them (sum, mean, max, min)`
  };
  if (!(series.length > 0)) return {
    code: "no_values",
    why: `no cell of ${roles.y.join(", ")} holds a number`
  };
  let [f] = reading.droppedColumns;
  return roles.form === "bars" && f !== void 0 ? {
    code: "bars_partly_unread",
    why: `bars rank a whole list, and part of this one was not read. ${f.sentence}`
  } : void 0;
}
var Pn = {
  sum: sum,
  mean: e => sum(e) / e.length,
  max: e => Math.max(...e),
  min: e => Math.min(...e)
};
var zS = "the last point may still be filling: its period had not ended at the call";
var Ir = "Ask for fewer rows or a shorter span, then chart that";
function Dn({
  roles: roles_2,
  request: request_2,
  series: series_2,
  timeline: timeline
}) {
  let s = series_2.flatMap(item => item.samples.map(item => item.value ?? 0)),
    p = s.some(item => item < 0);
  if (request_2.form === "share" && request_2.combine !== "sum") return {
    code: "share_not_summed",
    why: "a share is the parts of a whole, which add up. Leave combine out, or draw bars"
  };
  if (request_2.form === "share" && (p || sum(s) <= 0)) return {
    code: "share_not_whole",
    why: "the parts of a whole are at or above zero and add up to more. Draw bars"
  };
  if (request_2.log === !0 && (request_2.form ?? roles_2.form) !== "line") return {
    code: "log_not_line",
    why: "only a line has a log scale: all else stands on zero, which a log scale does not have. Draw a line"
  };
  if (roles_2.form === "columns" && timeline.periodStarts.length === 0) return {
    code: "uneven_step",
    why: `the times of ${roles_2.x} keep no even step (that takes two or more, with few gaps), so a column cannot stand for a period. Rows are not put in buckets of time: pass one row for each period, or draw a line, or pass zone: "local" if the periods are local days`
  };
  return roles_2.form === "columns" && p ? {
    code: "column_below_zero",
    why: "a column stands on zero and a value is below zero. Draw a line"
  } : void 0;
}
var Un = (e, t) => e.hasMadeUpNames && t.form === "bars" ? [] : t.y;
function Fn(e) {
  let label = e.mark.label === void 0 ? "" : e.mark.label,
    o = le(e.mark.at),
    r = `${label === "" ? "mark" : `mark ${label}`} at ${e.mark.at} not drawn:`;
  if (!(e.drawnForm !== "bars" && e.drawnForm !== "share")) return `${r} it has no times`;
  if (e.drawnForm === "sparks") return `${r} sparks have no time axis`;
  if (o.kind !== "time") return `${r} ${o.why}`;
  if (o.ms < e.axisSpan.fromMs || o.ms > e.axisSpan.untilMs) return `${r} outside the times drawn`;
  return o.isZoned !== e.isZoned ? `${r} name a zone in both the mark and the times, or in neither` : {
    ms: o.ms,
    label: label
  };
}
var Bn = e => (t, o) => {
  let r = e.get(t);
  return r === void 0 ? null : o[r] ?? null;
};
var jn = (e, t, o) => (column_4, s) => ({
  ms: e.ms,
  isZoned: e.isZoned,
  column: column_4,
  groupLabels: o.y.length > 1 ? [...t, column_4] : t,
  value: s.kind === "number" ? s.value : null,
  unit: s.kind === "number" ? s.unit : null
});
function Wn(e, t) {
  let unit_7 = t.unit;
  return e.kind === "number" && !e.unit && !!unit_7 ? nr(e.value, unit_7) : e;
}
var vn = v("a log scale cannot show it");
var rg = {
  kind: "time",
  ms: 0,
  isZoned: !1
};
function $n(e, t, o) {
  let r = Bn(new Map(e.columns.map((item, index) => [item, index]))),
    s = e.rows[0] ?? [],
    p = t.by.filter(item => e.rows.some(u => r(item, u) !== r(item, s))),
    m = t.form === "bars",
    n = m ? [t.x, ...p] : p,
    readings = [],
    f = [],
    unreadXCells_2 = [];
  for (let l of e.rows) {
    let u = m ? rg : le(r(t.x, l));
    if (u.kind === "unread") unreadXCells_2.push(r(t.x, l));
    if (u.kind !== "time") {
      f.push({
        column: t.x,
        quote: `${r(t.x, l)} (${u.why})`
      });
      continue;
    }
    let g = jn(u, n.map(item => String(r(item, l) ?? "") || `no ${item}`), t);
    for (let column_5 of t.y) {
      let L = r(column_5, l),
        _ = Wn(Ae(L, o.y !== void 0), o),
        A = o.log === !0 && _.kind === "number" && _.value <= 0 ? vn : _;
      if (A.kind === "unread") f.push({
        column: column_5,
        quote: `${L} (${A.why})`
      });
      readings.push(g(column_5, A));
    }
  }
  let units = new Map();
  for (let [l, u] of z(readings, d => d.column)) units.set(l, U(u.map(item => item.unit).filter(item => item !== null)));
  return {
    readings: readings,
    units: units,
    sharedLabels: t.by.filter(item => !p.includes(item)).map(item => String(r(item, s) ?? "")),
    droppedColumns: [...z(f, l => l.column)].map(([l, u]) => ({
      isEntireColumn: u.length === e.rows.length,
      sentence: `${K(u.length, "cell")} of ${l} not read: ` + u.slice(0, Rn).map(item => item.quote).join(", ")
    })),
    unreadXCells: unreadXCells_2
  };
}
var Mr = e => e.some(item => item.value !== null);
var Gn = (e, t, o) => e || Bs(t, o);
var Xn = (e, t) => ms_4 => {
  let r = (e.get(ms_4) ?? []).map(item => item.value).filter(item => item !== null);
  return {
    ms: ms_4,
    value: r.length > 0 ? t(r) : null
  };
};
var mo = (e, t) => Y(e[0]?.groupLabels.join(" ") || t.fallbackName, En);
var no = e => U(e.map(item => item.ms)).toSorted((t, o) => t - o);
function Kn(e, t, o) {
  let r = no(e),
    measure = e[0]?.column ?? "";
  return {
    unit: t.reading.units.get(measure)?.[0] ?? "",
    name: mo(e, t),
    measure: measure,
    samples: (qs(r, t, Gn(o, r, t.zone))?.periodStarts ?? r).map(Xn(z(e, p => p.ms), t.combine))
  };
}
function zn(e) {
  let series_3 = [],
    emptyNames = [],
    r = z(e.reading.readings, m => JSON.stringify(m.groupLabels)),
    times = no([...r.values()].filter(Mr).flat()),
    p = Bs(times, e.zone);
  for (let m of r.values()) Mr(m) ? series_3.push(Kn(m, e, p)) : emptyNames.push(mo(m, e));
  return {
    series: series_3,
    emptyNames: emptyNames,
    times: times,
    grid: qs(times, e, p)
  };
}
var Me = (problem, tables = []) => ({
  kind: "refused",
  problem: problem,
  tables: tables
});
var wr = (e, t) => Me({
  ...t,
  why: `${hr(e)}: ${t.why}`
}, [e]);
function Yn(e, t, o) {
  let s = e.length > MS ? K(e.length, "column") : e.join(", "),
    p = t.y === void 0;
  return Y((p ? o.sharedLabels : [s, ...o.sharedLabels]).filter(item => item !== "").join(" ") || s, NS);
}
function Jn(e) {
  let fromMs_2 = e.times[0] ?? 0;
  return {
    fromMs: fromMs_2,
    untilMs: e.times.at(-1) ?? fromMs_2,
    zone: e.zone
  };
}
var Vn = e => ({
  zone: e.zone,
  areTicks: !CS,
  fieldsBefore: []
});
function Zn(e) {
  let dataSpan_2 = Jn(e),
    precision = ad(e.times, e.zone),
    r = e.readAs === "columns" ? e.grid : null,
    s = e.readAs === "bars",
    p = pt(U([dataSpan_2.fromMs, dataSpan_2.untilMs]), precision, Vn(e)).join(" \u2192 ");
  return {
    dataSpan: dataSpan_2,
    axisSpan: r ? {
      ...dataSpan_2,
      untilMs: r.endMs
    } : dataSpan_2,
    precision: precision,
    step: e.grid?.step ?? precision,
    spanLabels: s ? [] : [e.isZoned ? `${p} ${e.zone}` : p],
    periodStarts: r?.periodStarts ?? []
  };
}
function qn(e, t, o) {
  let r = [...e.units.values()];
  if (r.some(item => item.length > 1)) {
    let n = r.flat().map(item => item || "none"),
      a = n.includes("none") && new Set(n).size === kS;
    return {
      code: "units_mixed",
      why: `the values of a column carry different units (${n.join(", ")}). ` + (a ? "Name what the bare numbers are in as unit" : "Convert them to one unit, or chart the rows of each unit in a call of its own")
    };
  }
  let p = z(e.units.keys(), n => e.units.get(n)?.[0] ?? "");
  return (t.form === "bars" || o.form === "sparks") && p.size > 1 ? {
    code: "units_differ",
    why: (o.form === "sparks" ? "sparks" : "bars") + " share one scale, and the y columns are in different units (" + [...p].map(([n, a]) => `${a.join(", ")} in ${n || "no unit"}`).join("; ") + "). Call once for each unit"
  } : void 0;
}
function Qn(e, request_3, o) {
  let roles_3 = Zp(e, request_3);
  if ("code" in roles_3) return wr(e, roles_3);
  let p = request_3.form ?? roles_3.form,
    reading_2 = $n(e, roles_3, request_3),
    n = Yn(Un(e, roles_3), request_3, reading_2),
    isZoned_2 = reading_2.readings.some(item => item.isZoned),
    zone_3 = isZoned_2 ? o.zone : "UTC",
    {
      series: series_4,
      emptyNames: emptyNames_2,
      times: times_2,
      grid: grid
    } = zn({
      reading: reading_2,
      fallbackName: n,
      combine: Pn[request_3.combine ?? "sum"],
      zone: zone_3
    }),
    timeline_2 = Zn({
      times: times_2,
      grid: grid,
      readAs: roles_3.form,
      zone: zone_3,
      isZoned: isZoned_2
    }),
    c = qn(reading_2, roles_3, request_3) ?? kn({
      reading: reading_2,
      roles: roles_3,
      request: request_3,
      series: series_4
    }) ?? Dn({
      roles: roles_3,
      request: request_3,
      series: series_4,
      timeline: timeline_2
    });
  if (c !== void 0) return wr(e, c);
  let g = (request_3.marks ?? []).map(A => Fn({
      mark: A,
      drawnForm: p,
      axisSpan: timeline_2.axisSpan,
      isZoned: isZoned_2
    })),
    T = e.isReadAtInstants !== !0 && isZoned_2 && grid !== null && o.nowMs !== null && o.nowMs >= timeline_2.dataSpan.untilMs && o.nowMs < grid.endMs,
    L = emptyNames_2.length > 0,
    leftOutNotes = Et(reading_2.droppedColumns.map(item => item.sentence), AS, "more column"),
    notes = [...(L ? [`${emptyNames_2.length} with no value, not drawn: ` + Y(emptyNames_2.join(", "), En)] : []), ...g.filter(item => typeof item === "string"), ...(T ? [zS] : [])];
  return {
    kind: "data",
    form: p,
    source: e.source,
    path: e.path,
    isSeries: e.isSeries === !0,
    subject: n,
    hasCombinedRows: so(reading_2),
    series: series_4,
    timeline: timeline_2,
    marks: g.filter(item => typeof item !== "string").toSorted((A, Fe) => A.ms - Fe.ms),
    leftOutNotes: leftOutNotes,
    notes: notes
  };
}
function ea({
  rows: rows_5,
  listColumns: listColumns_2 = []
}) {
  return listColumns_2.length === 0 && rows_5.every(item => item.every(item => item === null || !(FS.test(String(item)) || pr(item) || le(item).kind === "time")));
}
function kr(e, t, o) {
  if (e.length >= bS) return Me({
    code: "too_long",
    why: `The data is 64 KiB or longer: too long to chart, and it may be cut short. ${Ir}`
  });
  let s = Cr(e);
  if (s.some(item => item.isCut)) return Me({
    code: "cut_short",
    why: `That result was cut short or saved to a file, so part of it is missing. ${Ir}`
  });
  if (!(s.length > 0)) {
    let T = US.test(e) && !DS.test(e);
    return Me(T ? {
      code: "cut_short",
      why: `That result is JSON that does not close, so it was cut short. ${Ir}`
    } : {
      code: "no_table_read",
      why: `That result holds no rows: it has no table and no list of records of ${ur} columns or fewer. Pass the rows as data, as JSON records or as the text of a CSV, TSV or markdown table, with only the columns to chart`
    });
  }
  let [n, ...a] = Mn(s, t);
  if (n === void 0 || a.length > 0) return Me({
    code: "table_unpicked",
    why: `That result is not a table: there are ${s.length} in it. To pick one, name a column that only it has, or pass its rows as data`
  }, s.slice(0, An));
  let i = Qn(n, t, o),
    x = n.unparsedLines ?? 0,
    l = s.filter(item => item !== n && !ea(item)),
    u = l.length > 0,
    d = x > 0,
    c = [...(u ? [K(l.length, "other table")] : []), ...(d ? [`${K(x, "line")} outside any table`] : [])];
  return i.kind === "refused" || c.length === 0 ? i : {
    ...i,
    leftOutNotes: [...i.leftOutNotes, "only part of that result is charted: it also holds " + c.join(" and ")]
  };
}
var ye = e => e.values[0] ?? 0;
var Pr = 1e9;
var ta = 2;
var Dr = 10;
var vg = 100;
var we = 0.000000001;
var $g = 5;
var Xg = 10;
var Kg = 10;
var Ur = 1e6;
var Yg = 1e4;
var Jg = 3;
var Vg = 2;
var Zg = 2;
var qg = 12;
var Fr = 1000000000000;
var d_2 = 86400;
var h_2 = 3600;
var oO = 0.000001;
var ms_5 = 0.001;
var min = 60;
var ns_3 = 0.000000001;
var PB_2 = 1000000000000000;
var kB = 1000;
function xt(e, t) {
  return e > 0 ? Math.min(Math.max(0, t - 1 - Math.floor(Math.log10(e) + we)), vg) : 0;
}
var oa = (e, t) => Math.abs(e).toLocaleString("en-US", {
  minimumFractionDigits: e === 0 ? 0 : t
});
var ra = e => e < 0 ? "-" : "";
function ze(e, t) {
  let o = t.map(item => item * e.multiplesPerUnit),
    r = m => o.some(item => {
      let a = Math.abs(item),
        f = Number(a.toFixed(m));
      return Math.abs(f - a) > we * a && (m < e.decimals || Math.floor(Math.log10(f)) > Math.floor(Math.log10(a)));
    }),
    s = 0;
  while (r(s)) s++;
  if (s === 1 && e.before !== "" && e.after === "") s = ta;
  return o.map(item => {
    let n = Number(item.toFixed(s));
    return ra(n) + e.before + oa(n, s) + (n === 0 ? e.afterZero : e.after);
  });
}
var Br = {
  "": 1,
  M: Ur,
  G: Pr,
  T: Fr
};
var sa = (e, t, o) => r => Math.max(o && e < Yg ? ta : 0, xt(e / r, Jg), xt(t / r, Vg));
var pa = {
  "": 1,
  M: Ur,
  B: Pr,
  T: Fr
};
var hO = [1, 2, 5];
var SO = ["$", "\u20AC", "\xA3", "\xA5"];
var ma = [{
  ns: ns_3,
  µs: oO,
  ms: ms_5,
  s: 1,
  min: min,
  h: h_2,
  d: d_2
}, {
  B: 1,
  kB: kB,
  MB: Ur,
  GB: Pr,
  TB: Fr,
  PB: PB_2
}, {
  "%": 1
}];
function ut(e, t) {
  let o = ma.find(item => Object.hasOwn(item, e)),
    r = SO.includes(e),
    s = o ?? (r ? pa : Br),
    p = Math.max(...t.map(Math.abs)),
    m = sa(p, Math.max(...t) - Math.min(...t), r),
    n = Object.entries(s).filter(([, l], index) => index === 0 || l <= (p === 0 ? 1 : p)),
    [a, f] = n.filter(([, l]) => m(l) <= Zg).at(-1) ?? n.at(-1) ?? ["", 1],
    x = s === Br && e !== "" ? ` ${Y(e, qg)}` : "";
  return {
    multiplesPerUnit: 1 / f,
    before: r ? e : "",
    after: `${a}${x}`,
    afterZero: o ? a : x,
    decimals: m(f)
  };
}
var fo = (e, t) => ze(ut(t, [e]), [e])[0] ?? "";
function Ye(e, t, o = {}) {
  let {
      peers = t,
      minWritten = 0
    } = o,
    p = ut(e, peers);
  return Math.min(...[...t, ...peers].filter(item => item !== 0).map(Math.abs)) * p.multiplesPerUnit < Math.max(minWritten, $g / Dr ** p.decimals) ? t.map(item => fo(item, e)) : ze(p, t);
}
var na = e => e === 0 ? 1 : Math.abs(e) / Xg;
var aa = (e, t) => !(t - e > we * Math.abs(t));
var fa = (e, t) => ({
  ...e,
  multiplesPerUnit: 1,
  decimals: Math.max(e.decimals, xt(t, 1))
});
function bO(e, [t, o], r) {
  let s = t * e.multiplesPerUnit,
    p = o * e.multiplesPerUnit,
    m = (aa(s, p) ? na(p) : p - s) / r,
    n = Dr ** Math.floor(Math.log10(m)),
    a = n * (hO.find(item => item * n >= m) ?? Kg),
    f = Math.floor(s / a + we),
    i = f * a,
    x = Math.max(1, Math.ceil((p - i) / a - we));
  return {
    ticks: ze(fa(e, a), ne(x + 1).map(item => (f + item) * a)).map((l, index) => ({
      position: index / x,
      label: l
    })),
    positionOf: l => (l * e.multiplesPerUnit - i) / (x * a)
  };
}
function NO(e, [t, o], r) {
  let s = Math.floor(Math.log10(t) + we),
    p = Math.max(1, Math.ceil(Math.log10(o) - we) - s),
    m = Math.ceil(p / r),
    n = Math.ceil(p / m);
  return {
    ticks: ne(n + 1).map(item => ({
      position: item / n,
      label: fo(Dr ** (s + item * m), e)
    })),
    positionOf: a => (Math.log10(a) - s) / (n * m)
  };
}
var Wr = {
  title: {
    host: void 0,
    light: "#1f1f1f",
    dark: "#f2f0eb"
  },
  words: {
    host: void 0,
    light: "#2b2b2b",
    dark: "#e6e4df"
  },
  quiet: {
    host: "ansi256(8)",
    light: "#6b6b6b",
    dark: "#a3a19b"
  },
  blue: {
    host: "ansi256(4)",
    light: "#2a6fdb",
    dark: "#6ea8ff"
  },
  orange: {
    host: "ansi256(3)",
    light: "#b85c00",
    dark: "#f0a04b"
  },
  green: {
    host: "ansi256(2)",
    light: "#1a7f4e",
    dark: "#5fc98f"
  },
  pink: {
    host: "ansi256(5)",
    light: "#b0307f",
    dark: "#ee82c4"
  },
  teal: {
    host: "ansi256(6)",
    light: "#0b7c8a",
    dark: "#5cc8d6"
  },
  red: {
    host: "ansi256(1)",
    light: "#c0392b",
    dark: "#ff8a7a"
  },
  violet: {
    host: "ansi256(13)",
    light: "#6f42c1",
    dark: "#b794f6"
  },
  olive: {
    host: "ansi256(10)",
    light: "#5c7a00",
    dark: "#b5d94c"
  }
};
var ia = ["blue", "orange", "green", "pink", "teal", "red", "violet", "olive"];
var ink = "blue";
var JO = 100;
var ZO = 10;
var qO = 3;
var e_ = 0.1;
var o_ = 2;
var r_ = 0.000000001;
var s_ = 2;
var m_ = 8000;
var a_ = 2;
var i_ = 2;
var minWritten_2 = 1;
var d_ = 16;
var c_ = 24;
var V = e => e[0]?.unit ?? "";
var vr = "red";
function lo(e, t, o) {
  let r = sum(t),
    s = e.map(ye),
    p = Math.max(...e.map(item => item.size)),
    m = p === 0 ? 1 : p,
    n = ia.filter(item => item !== vr),
    a = o.measures.length <= n.length,
    f = new Map(a ? F(o.measures, n) : []),
    x = o.isSummed && r > 0 && t.every(item => item >= 0) ? Ye("%", s.map(item => JO * item / r)).map(item => [["", "", item]]) : s.map(() => []);
  return F(e, F(Ye(V(e), s), x)).map(([l, [u, d]]) => ({
    key: "",
    name: l.name,
    stats: [["", u, ""], ...d],
    ink: ye(l) < 0 ? vr : f.get(l.measure) ?? ink,
    relativeLength: ye(l) / m
  }));
}
var Ve = {
  key: "",
  ink: ink
};
var la = (e, t) => ({
  ...Ve,
  name: "total",
  stats: [["", Ye(V(e), [sum(t)], {
    peers: e.map(ye)
  })[0] ?? "", ""]],
  relativeLength: 0
});
function xa(e) {
  let isSummed = e.request.combine === "sum",
    r = e.request.top !== void 0 || e.selection.cutSeries.length > 0 ? e.selection.topSeries : e.allSeries,
    s = e.allSeries.flatMap(item => item.values),
    p = lo(r, s, {
      isSummed: isSummed,
      measures: U(e.allSeries.map(item => item.measure))
    }),
    rows_6 = isSummed ? [...p, la(r, s)] : p;
  return {
    form: "bars",
    header: e.frame.header,
    rows: rows_6,
    notes: e.frame.notes
  };
}
function xo(e) {
  let values_2 = e.samples.map(item => item.value).filter(item => item !== null);
  return {
    ...e,
    values: values_2,
    size: Math.max(...values_2.map(Math.abs)),
    isOthers: !1
  };
}
var uo = e => e.map(item => item.name).join(", ");
function ua(e) {
  return e === 1 ? "this is the largest" : `these are the ${e} largest`;
}
function da(e) {
  let t = e.cutSeries.length;
  if (t === 0) return [];
  let o = e.form === "bars" && t >= ZO * e.drawnAloneCount,
    r = t <= qO,
    s = `${Wo(e.form, t)} ` + (e.isRestDrawnAsOne ? "drawn as one" : "not shown") + (r ? ` (${uo(e.cutSeries)})` : "") + `: ${ua(e.drawnAloneCount)} of ` + (e.drawnAloneCount + t).toLocaleString("en-US") + (o ? ". For a distribution, pass counts per range" : "");
  return e.top !== void 0 && e.top > e.formLimit ? [s, `top ${e.top}: a chart draws at most ${Wo(e.form, e.formLimit)}` + (e.isRestDrawnAsOne ? ", and the rest as one" : "")] : [s];
}
function ca(e, t) {
  let o = [],
    r = new Map(),
    s = [];
  for (let p of e) {
    let m = r.get(p.unit) ?? o.length,
      n = o[m];
    if (n !== void 0 && (t || p.size === 0 || n.size <= p.size * fs)) s.push(m);else r.set(p.unit, o.length), s.push(o.length), o.push(p);
  }
  return [...z(F(e, s), p => p[1]).values()].map(item => item.map(item => item[0]));
}
var ya = (e, t, facts) => ({
  title: t.title ?? "",
  facts: facts,
  source: hr(e)
});
var ha = e => [...z(e.flatMap(item => item.samples), t => t.ms)].toSorted(([t], [o]) => t - o).map(([ms_6, o]) => {
  let r = o.map(item => item.value).filter(item => item !== null);
  return {
    ms: ms_6,
    value: r.length > 0 ? sum(r) : null
  };
});
var Ze = (e, name_3) => xo({
  unit: V(e),
  name: name_3,
  measure: e[0]?.measure ?? "",
  samples: ha(e)
});
function Ta(e, t) {
  if (e.length <= o_) return [];
  let o = new Map(Ze(e, "").samples.map(({
      ms: ms_7,
      value: value_3
    }) => [ms_7, value_3])),
    r = ({
      ms: ms_8,
      value: value_4
    }) => value_4 !== null && Math.abs(s_ * value_4 - (o.get(ms_8) ?? 0)) <= r_ * Math.abs(value_4);
  return e.filter(item => item.size > 0 && item.samples.every(r)).map(item => `${item.name} equals the sum of the other ${t}: if it is their total, leave it out`);
}
function co(e, t) {
  let o = {
    ms: 0,
    value: -1 / 0
  };
  for (let {
    ms: ms_9,
    value: value_5
  } of e.samples) if (value_5 !== null && value_5 > o.value) o = {
    ms: ms_9,
    value: value_5
  };
  return tp(t, o.ms);
}
function Sa(e, t) {
  let o = Ze(e, "total"),
    [r = ""] = Ye(o.unit, [Math.max(...o.values)]);
  return `total max ${r} at ${co(o, t)}`;
}
var ga = (e, t) => e.name < t.name ? -1 : 1;
var Oa = e => ({
  ...Ze(e, `${e.length} others`),
  isOthers: !0
});
function _a(e, t, o) {
  let topSeries = e.toSorted((m, n) => m.size !== n.size ? n.size - m.size : ga(m, n)).slice(0, o && e.length === t + 1 ? t + 1 : t),
    cutSeries = e.filter(item => !topSeries.includes(item)),
    p = o && cutSeries.length > 0;
  return {
    topSeries: topSeries,
    cutSeries: cutSeries,
    drawnSeries: p ? [...topSeries, Oa(cutSeries)] : topSeries
  };
}
var yo = {
  key: "",
  ink: "quiet"
};
var ho = F([..."abcdefgh"], ia).map(([key, ink_2]) => ({
  key: key,
  ink: ink_2
}));
function Ca(e, t, o) {
  let r = o.flatMap(item => item.values),
    s = new Map(F(t.topSeries, ho)),
    rows_7 = F(lo(t.drawnSeries, r, {
      isSummed: !0,
      measures: []
    }), t.drawnSeries).map(([m, n]) => ({
      ...m,
      ...(s.get(n) ?? yo),
      share: ye(n) / sum(r)
    }));
  return {
    form: "share",
    header: e.header,
    rows: rows_7,
    notes: e.notes
  };
}
var La = (e, rows_8, medianStep) => ({
  form: "sparks",
  header: e.header,
  rows: rows_8,
  medianStep: medianStep,
  notes: e.notes
});
function To(e) {
  let t = sum(e.map(item => item.samples.length - item.values.length));
  return t > 0 ? [`${K(t, "missing sample")}, left blank where the gap is wide enough to see`] : [];
}
var Ea = (e, t) => ([o, [r, stats]]) => ({
  ...e.identityOf(o),
  name: o.name,
  stats: stats,
  stretches: r.map(item => item.map(t))
});
var Aa = (e, t) => o => ({
  x: e(o.ms),
  y: t.positionOf(o.top)
});
function Ra({
  seriesOfPlot: seriesOfPlot,
  axisValues: t,
  timeline: timeline_3,
  isSummed: isSummed_2
}) {
  let s = V(seriesOfPlot),
    p = seriesOfPlot.map(item => item.values),
    m = l => Ye(s, l, {
      peers: t,
      minWritten: minWritten_2
    }),
    n = m(p.map(item => Math.max(...item))),
    a = m(p.map(item => item.at(-1) ?? 0)),
    f = m(p.map(item => Math.min(...item))),
    i = m(p.map(item => sum(item) / item.length)),
    x = Ye(s, p.map(sum));
  return seriesOfPlot.map((item, index) => {
    if (item.values.length === 1) return [["last", a[index] ?? "", ""]];
    let d = [["max", n[index] ?? "", `at ${co(item, timeline_3)}`], ["last", a[index] ?? "", ""], ["min", f[index] ?? "", ""], ["mean", i[index] ?? "", ""]];
    return isSummed_2 ? [...d, ["total", x[index] ?? "", ""]] : d;
  });
}
var ba = (e, axisValues) => ({
  seriesOfPlot: e.seriesOfPlot,
  axisValues: axisValues,
  timeline: e.data.timeline,
  isSummed: e.request.combine === "sum"
});
function So(e) {
  let t = e.data.form === "columns",
    o = new Map(),
    r = [];
  for (let f of e.seriesOfPlot) {
    let i = [],
      x = [];
    for (let l of f.samples) if (l.value === null) i.push(x), x = [];else {
      let top = (t ? o.get(l.ms) ?? 0 : 0) + l.value;
      o.set(l.ms, top), x.push({
        ms: l.ms,
        top: top
      });
    }
    i.push(x), r.push(i.filter(item => item.length > 0));
  }
  let s = r.flat(a_).map(item => item.top),
    p = V(e.seriesOfPlot),
    m = [t ? 0 : Math.min(...s), Math.max(...s)],
    a = e.request.log === !0 ? NO(p, m, e.maxAxisSteps) : bO(ut(p, s), m, e.maxAxisSteps);
  return {
    ticks: a.ticks,
    rows: F(e.seriesOfPlot, F(r, Ra(ba(e, s)))).map(Ea(e, Aa(Nt(e.data.timeline), a)))
  };
}
var Ia = {
  onePlot: 5,
  severalPlots: 2
};
function Na({
  topSeries: e,
  frame: {
    header: header,
    notes: notes_2
  },
  request: request_4,
  data: data
}) {
  let {
      ticks: ticks,
      rows: rows_9
    } = So({
      seriesOfPlot: e,
      identityOf: () => Ve,
      maxAxisSteps: Ia.onePlot,
      request: request_4,
      data: data
    }),
    n = Nt(data.timeline),
    a = e.flatMap(item => {
      let i = item.samples.map(item => n(item.ms));
      return F(i, i.slice(1)).map(([x, l]) => l - x);
    }).toSorted((f, i) => f - i);
  return La({
    header: {
      ...header,
      facts: [...header.facts, `each from ${ticks[0]?.label} to ${ticks.at(-1)?.label}`]
    },
    notes: [...notes_2, ...To(e)]
  }, rows_9, a[Math.floor(a.length / i_)] ?? 1);
}
function Ma(e) {
  let t = new Map();
  for (let o of e.rows.flatMap(item => item.stretches.flat())) {
    let r = o.y - (t.get(o.x) ?? 0);
    if (e.rows.length > 1 && r > 0 && r < e_) return !0;
    t.set(o.x, o.y);
  }
  return !1;
}
function wa(e, t, o) {
  let r = t.series.map(item => item.name),
    s = (o.y ?? []).map(item => item.toLowerCase());
  if (!(r.length > 1 && r.every(item => s.includes(item.toLowerCase())) && e.flat().length === r.length)) return e;
  let m = a => r.indexOf(a.name),
    n = a => Math.min(...a.map(m));
  return e.map(item => item.toSorted((f, i) => m(f) - m(i))).toSorted((a, f) => n(a) - n(f));
}
function ka(e) {
  let t = Nt(e);
  return o => ({
    position: t(o.ms),
    when: tp(e, o.ms),
    label: o.label
  });
}
function Pa(e) {
  let t = e.data.form === "columns",
    o = wa(e.groups.slice(0, Be), e.data, e.request),
    r = o.flat(),
    s = e.groups.slice(Be).flat(),
    p = new Map(F(r.filter(item => !item.isOthers), r.length > 1 ? ho : [Ve])),
    identityOf = T => p.get(T) ?? yo,
    maxAxisSteps = Ia[o.length > 1 ? "severalPlots" : "onePlot"],
    plots = o.map(T => So({
      seriesOfPlot: T,
      identityOf: identityOf,
      maxAxisSteps: maxAxisSteps,
      request: e.request,
      data: e.data
    })),
    f = e.data.timeline.periodStarts.length,
    i = r.length > o.length,
    mergedColumnsNote = `${f} columns do not fit, so they are drawn as ${i ? "lines, one for each series" : "a line"}`,
    l = s.length > 0,
    u = f > c_,
    d = t && plots.some(Ma),
    notes_3 = [...e.frame.notes, ...(l ? [`${Wo(e.data.form, s.length)} not shown (${uo(s)}): a chart has at most ${Be} plots`] : []), ...To(r)],
    modelOnlyNotes = [...(u ? [`on a screen under about ${f + d_} characters wide, ${mergedColumnsNote}`] : []), ...(d ? ["in a terminal, parts of a column thinner than a row may not show"] : [])];
  return {
    form: t ? "columns" : "line",
    header: e.frame.header,
    plots: plots,
    timeline: e.data.timeline,
    marks: e.data.marks.map(ka(e.data.timeline)),
    notes: notes_3,
    mergedColumnsNote: mergedColumnsNote,
    thinPartsNote: "the thinnest parts of a column are too thin to show here",
    modelOnlyNotes: modelOnlyNotes
  };
}
function q_(data_2, request_5) {
  let o = request_5.combine === "sum",
    r = data_2.form === "columns" && !o,
    allSeries = data_2.series.map(xo),
    isRestDrawnAsOne = data_2.form === "share" || data_2.form === "columns" && o && allSeries.every(item => item.unit === V(allSeries)),
    formLimit = r ? Be : k[data_2.form].maxCount,
    selection = _a(allSeries, Math.min(request_5.top ?? k[data_2.form].defaultCount, formLimit), isRestDrawnAsOne),
    a = data_2.hasCombinedRows && !o,
    f = data_2.form === "columns" && isRestDrawnAsOne && allSeries.length > 1,
    header_2 = ya(data_2, request_5, [...(data_2.subject === "" ? [] : [data_2.subject]), ...data_2.timeline.spanLabels, ...(request_5.log ? ["log scale"] : []), ...(a ? [`rows combined by ${request_5.combine}`] : []), ...(f ? [Sa(allSeries, data_2.timeline)] : [])]),
    notes_4 = [...data_2.leftOutNotes, ...data_2.notes, ...da({
      form: data_2.form,
      cutSeries: selection.cutSeries,
      drawnAloneCount: selection.topSeries.length,
      isRestDrawnAsOne: isRestDrawnAsOne,
      formLimit: formLimit,
      top: request_5.top
    }), ...(o ? Ta(allSeries, k[data_2.form].plural) : [])];
  switch (data_2.form) {
    case "bars":
      return xa({
        frame: {
          header: header_2,
          notes: notes_4
        },
        selection: selection,
        allSeries: allSeries,
        request: request_5
      });
    case "share":
      return Ca({
        header: header_2,
        notes: notes_4
      }, selection, allSeries);
    case "sparks":
      return Na({
        topSeries: selection.topSeries,
        frame: {
          header: header_2,
          notes: notes_4
        },
        request: request_5,
        data: data_2
      });
    case "line":
    case "columns":
      return Pa({
        groups: r ? selection.topSeries.map(item => [item]) : ca(selection.drawnSeries, data_2.form === "columns" || request_5.log === !0),
        frame: {
          header: header_2,
          notes: notes_4
        },
        request: request_5,
        data: data_2
      });
  }
}
function Da(e) {
  return e.label !== "" ? `mark at ${e.when}: ${e.label}` : `mark at ${e.when}`;
}
var Ua = e => "plots" in e ? [...e.notes, ...e.modelOnlyNotes] : e.notes;
var go = " \xB7 ";
var Ba = e => e.title === "" ? "" : ` "${e.title.replaceAll('"', "'")}"`;
function ja(e) {
  let t = [`${k[e.form].label}` + Ba(e.header), ...e.header.facts, `from ${e.header.source}`].join(go),
    o = ("plots" in e ? e.plots.flatMap(item => item.rows) : e.rows).map(item => {
      let p = "stretches" in item ? item.stretches.flat().length : 0;
      return `- ${item.name}: ` + [...item.stats.map(item => item.filter(item => item !== "").join(" ")), ...(p > 0 ? [K(p, "point")] : [])].join(go);
    }),
    r = [...("plots" in e ? e.marks : []).map(item => Da(item)), ...Ua(e).map(item => `note: ${item}`)];
  return [t, ...Et(o, Xo(o, m_ - [t, ...r].join(`
`).length, s => s.length + 1).length, "more row"), ...r];
}
var Wa = e => t => new Set(t.shownNames.values()).size === e;
var va = (e, t, o) => (r, s) => {
  let p = s < e.lane.statsBeforeNames;
  return e.widthPastKey - r.end >= (p ? t : o);
};
var yt = 2;
var IC = 4;
var NC = 2;
var Ha = 2;
var $a = 0.125;
var ke = 0.5;
var Oo = 0.125;
var Ga = 2;
var kC = 0.4;
var $r = 8;
var PC = 2;
var UC = 1;
var Xa = 40;
var BC = 16;
var WC = 8;
var rows_15 = 2;
var HC = 1;
var za = 1048576;
var XC = 0.5;
var Ya = 2;
var zC = 1;
var pe = 1;
function Ja(e) {
  let t = e.rows.length === 1 ? e.rows[0] : void 0,
    isNamedInHeader = t !== void 0 && e.headerTexts.includes(t.name),
    keyWidth = e.rows.some(item => item.key) ? Ga : 0;
  return {
    rows: e.rows,
    lane: e.lane,
    fullNames: isNamedInHeader ? [] : e.rows.map(item => item.name),
    isNamedInHeader: isNamedInHeader,
    indent: Math.max(0, e.left - yt),
    keyWidth: keyWidth,
    widthPastKey: e.columns - keyWidth - yt
  };
}
var me = e => Math.max(0, ...e.map(P));
var Va = (e, t, o) => o ? Math.min(Math.floor(e / PC), e - t.minWidth - pe) : e;
function Gr(e, statColumns) {
  let wantsLane = e.lane.minWidth > 0,
    r = e.widthPastKey - (statColumns.at(-1)?.end ?? 0),
    s = wantsLane && r >= $r + e.lane.minWidth,
    p = wx(e.fullNames, Va(r, e.lane, s)),
    m = e.isNamedInHeader ? Math.min(e.indent, r) : me(p),
    laneWidth = s ? r - m - pe : 0,
    a = e.keyWidth + m + (s ? pe + laneWidth : 0);
  return {
    wantsLane: wantsLane,
    keyWidth: e.keyWidth,
    shownNames: new Map(F(e.rows, p)),
    laneLeft: e.keyWidth + m + pe,
    laneWidth: laneWidth,
    statsLeft: a > 0 ? a + yt : 0,
    statColumns: statColumns
  };
}
var Za = (e, t) => Math.max(Math.min(e.isNamedInHeader ? e.indent : me(e.fullNames), t * kC), e.lane.minWidth > 0 ? $r + e.lane.minWidth : 0);
var eL = [0, 1, 2];
var Qa = e => Math.max(0, ...e.map(item => item.stats.length));
function ef(e) {
  let t = [],
    end_2 = -yt;
  for (let r of ne(Qa(e))) {
    end_2 += yt - pe;
    let parts = [];
    for (let p of eL) {
      let width = me(e.map(item => item.stats[r]?.[p] ?? ""));
      end_2 += width > 0 ? pe + width : 0, parts.push({
        start: end_2 - width,
        width: width
      });
    }
    t.push({
      parts: parts,
      end: end_2
    });
  }
  return t;
}
function he(e) {
  let t = Ja(e),
    o = ef(e.rows).filter(va(t, Math.min(me(t.fullNames), $r), Za(t, e.columns)));
  return ne(Math.max(0, o.length - e.lane.statsBeforeNames) + 1).map(item => Gr(t, o.slice(0, o.length - item))).find(Wa(new Set(t.fullNames).size)) ?? Gr(t, o);
}
var tf = (shapes, y_2, x_3) => ({
  shapes: shapes,
  rows: y_2 + 1,
  lane: {
    x: x_3,
    y: y_2
  }
});
var of = e => ({
  kind: "text",
  at: e.at,
  text: e.text,
  ink: e.ink,
  isAboutPartsLeftOut: !1
});
function I(e) {
  return e.text.trim() === "" ? [] : [of(e)];
}
var rf = (e, t, o) => t > 0 ? e.width - P(o) : 0;
var sf = (e, t) => e.wantsLane ? "title" : t.ink;
var pf = (e, t, o) => o === UC ? sf(e, t) : "quiet";
function Te(e, t, y_3) {
  let r = [...I({
    at: {
      x: 0,
      y: y_3
    },
    text: t.key,
    ink: t.ink
  }), ...I({
    at: {
      x: e.keyWidth,
      y: y_3
    },
    text: e.shownNames.get(t) ?? "",
    ink: e.wantsLane ? "words" : "title"
  })];
  for (let [s, p] of e.statColumns.entries()) for (let [m, n] of p.parts.entries()) {
    let text_2 = t.stats[s]?.[m] ?? "";
    r.push(...I({
      at: {
        x: e.statsLeft + n.start + rf(n, m, text_2),
        y: y_3
      },
      text: text_2,
      ink: pf(e, t, m)
    }));
  }
  return tf(r, y_3, e.laneLeft);
}
var lane_2 = {
  minWidth: 0,
  statsBeforeNames: 1
};
var lane = {
  minWidth: 8,
  statsBeforeNames: 1
};
var nf = (at_2, t, o) => ({
  kind: "bar",
  at: at_2,
  width: Math.max(Oo, Math.abs(t.relativeLength) * o.laneWidth),
  ink: t.ink,
  isHatched: t.relativeLength < 0
});
function af(e, rows_10, headerTexts) {
  let r = he({
    rows: rows_10,
    columns: e.columns,
    lane: lane,
    headerTexts: headerTexts,
    left: 0
  });
  return {
    shapes: rows_10.flatMap((item, index) => {
      let m = Te(r, item, e.rows + index);
      return item.relativeLength !== 0 && r.laneWidth > 0 ? [...m.shapes, nf(m.lane, item, r)] : m.shapes;
    }),
    rows: e.rows + rows_10.length
  };
}
var Co = e => Math.round(e * za) / za;
var ff = (e, row) => ({
  key: e.key,
  ink: e.ink,
  row: row
});
function lf(e, t) {
  let o = e.stretches.at(-1)?.at(-1);
  return o ? [ff(e, Math.floor(t(o.y)))] : [];
}
var xf = (e, t) => z(e.filter(item => item.key).flatMap(item => lf(item, t)), o => o.row);
var Xr = [11, 7, 5];
var uf = (e, t) => Math.floor((e - 1) / t);
var df = (e, t) => Math.max(1, Math.min(uf(Xr.at(e - 1) ?? Math.min(...Xr), t), IC));
var cf = (e, t, o) => e.ticks.filter(item => item.position >= t && item.position <= o);
function yf(e) {
  let t = new Map(),
    o = [];
  for (let r of e) {
    o.push({
      ...r,
      stretches: r.stretches.map(item => item.map(item => ({
        x: item.x,
        y: item.y - (t.get(item.x) ?? 0)
      })))
    });
    for (let s of r.stretches.flat()) t.set(s.x, s.y);
  }
  return o;
}
function hf(e, t, o) {
  let r = t.form === "columns",
    rows_11 = r && !o ? yf(e.rows) : e.rows,
    p = rows_11.flatMap(item => item.stretches.flat()).map(item => item.y),
    m = r ? 0 : Math.min(...p),
    n = Math.max(...p),
    a = e.ticks.length - 1,
    f = cf(e, m, n).length >= NC,
    i = f ? m : 0,
    x = f ? n : 1,
    u = n > m ? df(t.plots.length, (x - i) * a) : 1,
    d = T => Co((1 - T) * a * u),
    c = T => Math.round(d(T)),
    yOf = T => ke + d(T) - c(x);
  return {
    ...e,
    rows: rows_11,
    yOf: yOf,
    height: c(i) - c(x) + 1,
    endKeys: xf(o ? [] : rows_11, yOf)
  };
}
function Tf(e) {
  return e.some(item => item.rows.some(item => item.key)) ? Ga : 0;
}
function Sf(e) {
  let t = Math.max(0, ...e.flatMap(item => [...item.endKeys.values()]).map(item => item.length));
  return t > 0 ? pe + t : 0;
}
function gf(left, t, o) {
  let columnWidth = Math.max(1, t - 1),
    xOf = m => left + Math.floor(Co(m * o)) * t,
    tickXOf = m => Math.min(xOf(m), xOf((o - 1) / o)) + columnWidth / Ha;
  return {
    left: left,
    width: t * o,
    columnWidth: columnWidth,
    xOf: xOf,
    tickXOf: tickXOf
  };
}
function Of(left_2, width_2) {
  let o = r => left_2 + r * (width_2 - ke);
  return {
    left: left_2,
    width: width_2,
    columnWidth: 0,
    xOf: o,
    tickXOf: o
  };
}
function Kr(e, t, o) {
  let r = me(e.flatMap(item => item.ticks.map(item => item.label))) + Ya,
    s = t - r,
    p = o > 0 ? Math.floor(s / o) : 0;
  return p === 0 ? Of(r, s) : gf(r, p, o);
}
function _f(e, t) {
  let plots_2 = e.plots,
    area = Kr(plots_2, t - Tf(plots_2), e.timeline.periodStarts.length),
    s = area.columnWidth > 0,
    drawnPlots = plots_2.map(item => hf(item, e, s));
  return s ? {
    area: area,
    drawnPlots: drawnPlots
  } : {
    area: Kr(plots_2, t - Sf(drawnPlots), 0),
    drawnPlots: drawnPlots
  };
}
var Cf = (at_3, gridWidth) => ({
  kind: "axisRow",
  at: at_3,
  gridWidth: gridWidth
});
var Lf = e => e.map((item, index) => ({
  ink: item.ink,
  height: index > 0 ? 0 : Oo
}));
var Ef = (at_4, t, parts_2) => ({
  kind: "stack",
  at: at_4,
  width: t.columnWidth,
  parts: parts_2
});
var Af = (y_4, t) => ([x_4, r]) => {
  let s = [],
    p = {
      y: y_4,
      position: 0
    };
  for (let m of r) {
    if (m.position > p.position) s.push({
      height: p.y - m.y,
      ink: m.ink
    });
    p = m;
  }
  return Ef({
    x: x_4,
    y: y_4
  }, t, y_4 - p.y < Oo ? Lf(s) : s);
};
var Rf = e => z(e.rows.flatMap(item => item.stretches.flat().map(o => ({
  ...e.toCells(o),
  position: o.y,
  ink: item.ink
}))), t => t.x);
var bf = e => [...Rf(e)].map(Af(e.toCells({
  x: 0,
  y: 0
}).y, e.area));
var If = e => t => ({
  x: e.tickXOf(t.position),
  text: Y(t.label, BC)
});
var Lo = (points, ink_3) => ({
  kind: "line",
  ink: ink_3,
  points: points
});
var Nf = (e, t) => [e.x - ke, e.x + ke].map(item => ({
  x: Math.max(t.left, Math.min(item, t.left + t.width - $a)),
  y: e.y
}));
var Mf = e => [...z(e, t => Math.floor(t.x / ke)).values()].flatMap(item => {
  let o = item.toSorted((s, p) => s.y - p.y),
    r = [item[0], o[0], o.at(-1), item.at(-1)];
  return item.filter(item => r.includes(item));
});
var wf = (e, t) => e.length > 1 ? Mf(e) : Nf(e[0], t);
function kf(e) {
  let t = [],
    o = [],
    r = -1 / 0;
  for (let [s, ...p] of e) {
    if (s === void 0) continue;
    let m = p.length === 0 ? ke : 0;
    if (s.x - m - r < zC) o.push(s, ...p);else {
      let a = [s, ...p];
      t.push(a), o = a;
    }
    r = (p.at(-1) ?? s).x + m;
  }
  return t;
}
function Pf({
  rows: rows_12,
  area: area_2,
  toCells: toCells
}) {
  let r = [];
  for (let s of rows_12.toReversed()) for (let p of kf(s.stretches.map(item => item.map(toCells)))) r.push(Lo(wf(p, area_2), s.ink));
  return r;
}
var Df = (e, t) => ne(t.width).map(item => e.some(s => s.column === item) ? "\u252C" : "\u2500").join("");
var Uf = (e, t) => I({
  at: {
    x: e.area.left - 1,
    y: e.room.rows
  },
  text: `\u2514${Df(t, e.area)}`,
  ink: "quiet"
});
var Ff = (e, t, y_5) => e.flatMap(item => I({
  at: {
    x: t.left + item.start,
    y: y_5
  },
  text: item.text,
  ink: "quiet"
}));
var Bf = e => t => (e.periodStarts.findIndex(item => item >= t) + XC) / e.periodStarts.length;
var jf = (e, t) => o => Math.floor(e.tickXOf(t(o)) - e.left);
function Wf(e) {
  let areCentred = e.area.columnWidth > 0,
    columnOf = jf(e.area, areCentred ? Bf(e.timeline) : Nt(e.timeline));
  return Pd(e.timeline.dataSpan, e.timeline.step, {
    columns: e.area.width,
    columnOf: columnOf,
    areCentred: areCentred
  });
}
function vf(e) {
  let t = Wf(e),
    o = e.room.rows + 1,
    r = [],
    rows_13 = o + 1,
    p;
  for (let m of e.flags.filter(item => item.text !== "")) {
    let n = P(m.text),
      x_5 = Math.floor(Math.min(m.x, e.room.columns - n));
    if (p === void 0 || x_5 < p) rows_13 += 1;
    r.push(...I({
      at: {
        x: x_5,
        y: rows_13 - 1
      },
      text: m.text,
      ink: "words"
    })), p = x_5 + n + pe;
  }
  return {
    shapes: [...Uf(e, t), ...Ff(t, e.area, o), ...r],
    rows: rows_13
  };
}
var Hf = (e, t, o) => r => ({
  x: e.xOf(r.x),
  y: o + t.yOf(r.y)
});
function $f({
  room: room,
  chart: chart,
  plotsLayout: plotsLayout,
  headerTexts: headerTexts_2
}) {
  let {
      area: area_3,
      drawnPlots: drawnPlots_2
    } = plotsLayout,
    m = area_3.columnWidth > 0,
    n = he({
      rows: drawnPlots_2.flatMap(item => item.rows),
      columns: room.columns,
      lane: lane_2,
      headerTexts: headerTexts_2,
      left: area_3.left
    }),
    a = n.shownNames.size + n.statColumns.length > 0,
    flags = chart.marks.map(If(area_3)),
    i = m ? bf : Pf,
    x = [],
    rows_14 = room.rows;
  for (let c of drawnPlots_2) {
    for (let L of a ? c.rows : []) {
      let _ = Te(n, L, rows_14);
      x.push(_.shapes), rows_14 = _.rows;
    }
    let g = rows_14,
      T = g + c.height;
    for (let y_6 = g; y_6 < T; y_6++) {
      let _ = c.ticks.find(item => g + Math.floor(c.yOf(item.position)) === y_6),
        text_3 = _?.label ?? "";
      x.push(I({
        at: {
          x: area_3.left - Ya - P(text_3),
          y: y_6
        },
        text: text_3,
        ink: "quiet"
      }), [Cf({
        x: area_3.left - 1,
        y: y_6
      }, _ ? area_3.width + ke : 0)]);
    }
    x.push(i({
      rows: c.rows,
      area: area_3,
      toCells: Hf(area_3, c, g)
    }));
    for (let [L, _] of c.endKeys) for (let [w, A] of _.entries()) x.push(I({
      at: {
        x: area_3.left + area_3.width + pe + w,
        y: g + L
      },
      text: A.key,
      ink: A.ink
    }));
    x.push(flags.map(item => Lo([g, T - $a].map(_ => ({
      x: item.x,
      y: _
    })), "quiet"))), rows_14 = T;
  }
  let u = vf({
      room: {
        columns: room.columns,
        rows: rows_14
      },
      timeline: chart.timeline,
      area: area_3,
      flags: flags
    }),
    d = chart.form === "columns" && !m;
  return {
    shapes: [...x.flat(), ...u.shapes],
    rows: u.rows,
    notes: d ? [chart.mergedColumnsNote] : []
  };
}
var Gf = (y_7, parts_3) => ({
  kind: "band",
  at: {
    x: 0,
    y: y_7
  },
  rows: rows_15,
  parts: parts_3
});
var Xf = (e, y_8) => I({
  at: {
    x: Math.floor(e.middle),
    y: y_8
  },
  text: e.key,
  ink: e.ink
});
var Kf = (e, width_3, o) => ({
  ...e,
  width: width_3,
  middle: o - width_3 / Ha
});
function zf(e, rows_16) {
  let o = rows_16.map(item => item.share > 0 ? Math.max(item.share * e.columns, HC) : 0),
    r = sum(o) - e.columns,
    s = o.indexOf(Math.max(...o)),
    p = [],
    m = 0;
  for (let [i, x] of rows_16.entries()) {
    let l = (o[i] ?? 0) - (i === s ? r : 0);
    if (l > 0) m += l, p.push(Kf(x, l, m));
  }
  let n = e.rows + rows_15,
    a = n + 1,
    f = he({
      rows: rows_16,
      columns: e.columns,
      lane: lane_2,
      headerTexts: [],
      left: 0
    });
  return {
    shapes: [Gf(e.rows, p), ...p.flatMap(item => Xf(item, n)), ...rows_16.flatMap((item, index) => Te(f, item, a + index).shapes)],
    rows: a + rows_16.length
  };
}
var Yf = (e, t, o) => Math.abs(t - e) >= Math.abs(o - e) ? t : o;
var Jf = e => t => Math.min(e - 1, Math.floor(t * e));
function Vf(e, t) {
  let o = Array.from(Array(t), () => null),
    r = e.flat().map(item => item.y),
    s = sum(r) / r.length,
    p = Jf(t);
  for (let m of e) for (let [n, a] of m.entries()) {
    let f = p(a.x),
      i = Math.max(f, p(m[n + 1]?.x ?? a.x) - 1);
    for (let x = f; x <= i; x++) o[x] = Math.max(Oo, Yf(s, a.y, o[x] ?? a.y));
  }
  return o;
}
var Zf = (e, t, o) => Vf(e.stretches, o).flatMap(item => Array.from(Array(Math.floor(t.laneWidth / o)), () => item));
var lane_3 = {
  minWidth: 16,
  statsBeforeNames: 0
};
var Qf = (at_5, heights, ink_4) => ({
  kind: "strip",
  at: at_5,
  heights: heights,
  ink: ink_4
});
function ei(e, t, headerTexts_3) {
  let r = he({
      rows: t.rows,
      columns: e.columns,
      lane: lane_3,
      headerTexts: headerTexts_3,
      left: 0
    }),
    s = Math.min(r.laneWidth, Math.round(1 / t.medianStep) + 1);
  return {
    shapes: t.rows.flatMap((item, index) => {
      let n = Te(r, item, e.rows + index);
      return [...n.shapes, Qf(n.lane, Zf(item, r, s), item.ink)];
    }),
    rows: e.rows + t.rows.length
  };
}
function ti(chart_2, room_2, headerTexts_4) {
  switch (chart_2.form) {
    case "bars":
      return {
        ...af(room_2, chart_2.rows, headerTexts_4),
        notes: []
      };
    case "share":
      return {
        ...zf(room_2, chart_2.rows),
        notes: []
      };
    case "sparks":
      return {
        ...ei(room_2, chart_2, headerTexts_4),
        notes: []
      };
    case "line":
    case "columns":
      {
        let plotsLayout_2 = _f(chart_2, room_2.columns);
        return plotsLayout_2.area.width >= WC ? $f({
          room: room_2,
          chart: chart_2,
          plotsLayout: plotsLayout_2,
          headerTexts: headerTexts_4
        }) : void 0;
      }
  }
}
function qe(e, t, ink_5) {
  let r = t.flatMap(item => It(item, e.columns));
  return {
    shapes: r.flatMap((s, index) => I({
      at: {
        x: 0,
        y: e.rows + index
      },
      text: s,
      ink: ink_5
    })),
    rows: e.rows + r.length
  };
}
var oi = (e, t, o) => I({
  at: {
    x: t + pe,
    y: e - 1
  },
  text: `${go.trimStart()}${o}`,
  ink: "quiet"
});
var ri = P(go);
function si(e, t) {
  let texts = [t.title, ...t.facts].filter(item => item !== ""),
    shapes_2 = [],
    rows_17 = e.rows,
    p = 0;
  for (let [m, n] of texts.entries()) {
    let a = p + ri + P(n);
    if (m === 0 || a > e.columns) {
      let i = qe({
        columns: e.columns,
        rows: rows_17
      }, [n], m === 0 ? "title" : "quiet");
      shapes_2.push(...i.shapes), rows_17 = i.rows, p = P(n);
    } else shapes_2.push(...oi(rows_17, p, n)), p = a;
  }
  return {
    shapes: shapes_2,
    rows: rows_17,
    texts: texts
  };
}
var Eo = (columns_4, t) => ({
  columns: columns_4,
  rows: t.rows,
  shapes: t.shapes
});
var zr = (e, columns_5) => Eo(columns_5, qe({
  columns: columns_5,
  rows: 0
}, ja(e), "words"));
var pi = (text_4, y_9) => ({
  kind: "text",
  at: {
    x: 0,
    y: y_9
  },
  text: text_4,
  ink: "quiet",
  isAboutPartsLeftOut: !0
});
function mi(e, t) {
  let o = It(t, e.columns);
  return {
    shapes: o.map((item, index) => pi(item, e.rows + index)),
    rows: e.rows + o.length
  };
}
function ni(e, columns_6) {
  if (columns_6 < Xa) return zr(e, columns_6);
  let o = si({
      columns: columns_6,
      rows: 0
    }, e.header),
    r = ti(e, {
      columns: columns_6,
      rows: o.rows
    }, o.texts);
  if (r === void 0) return zr(e, columns_6);
  let s = qe({
      columns: columns_6,
      rows: r.rows
    }, [...e.notes, ...r.notes], "quiet"),
    m = e.form === "columns" ? mi({
      columns: columns_6,
      rows: s.rows
    }, e.thinPartsNote) : {
      shapes: [],
      rows: s.rows
    };
  return Eo(columns_6, {
    shapes: [...o.shapes, ...r.shapes, ...s.shapes, ...m.shapes],
    rows: m.rows
  });
}
var fi = (glyph, ink_6, background) => ({
  glyph: glyph,
  ink: ink_6,
  background: background
});
var VE = 0.5;
var qE = 2;
var ee = 8;
var eA = 3;
var oA = 10240;
var ii = 2;
var Yr = 4;
var glyph_4 = " ";
var glyph_3 = "\u2588";
var pA = "\u2586";
var mA = "\u2592";
var xi = (e, t) => e.filter(item => t.slice(0, qE).includes(item));
function Ro(e, t, o) {
  let r = e.map(item => ({
      ink: item.ink,
      size: Math.min(item.to, t + ee) - Math.max(item.from, t)
    })).filter(item => item.size >= VE),
    s = r.toSorted((i, x) => x.size - i.size),
    [p] = s;
  if (p === void 0) return;
  let m = Math.round((e.at(-1)?.to ?? t) - t);
  if (m < ee) {
    let glyph_2 = o[m];
    return glyph_2 ? {
      glyph: glyph_2,
      ink: p.ink
    } : void 0;
  }
  let [n = p, a] = xi(r, s),
    f = o[Math.round(n.size / (n.size + (a?.size ?? 0)) * ee)];
  return f ? fi(f, n.ink, a?.ink) : {
    glyph: glyph_3,
    ink: p.ink
  };
}
var bo = {
  glyph: "\u2508",
  ink: "quiet"
};
var ui = e => e > 0 ? "\u2524" : "\u2502";
var di = {
  glyph: glyph_4,
  ink: "words"
};
function ci(e) {
  let t = Array.from({
    length: e.rows * e.columns
  }, () => di);
  function o(r) {
    return Number.isInteger(r.x) && Number.isInteger(r.y) && r.x >= 0 && r.x < e.columns ? r.y * e.columns + r.x : -1;
  }
  return {
    cellAt: r => t[o(r)],
    set: (r, s) => {
      let p = o(r);
      if (t[p] !== void 0) t[p] = s;
    },
    rows: () => ne(e.rows).map(item => t.slice(item * e.columns, (item + 1) * e.columns))
  };
}
var yi = (e, t) => ({
  glyph: t < eA ? "\u2501" : "\u2580",
  ink: e.ink
});
var hi = ["", "\u2581", "\u2582", "\u2583", "\u2584", "\u2585", "\u2586", "\u2587"];
var Ti = [1, 2, 4, 64, 8, 16, 32, 128];
var Si = ["", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589"];
var gi = (e, to, ink_7) => ({
  from: e,
  to: to,
  ink: ink_7
});
function Io(e, t, o) {
  let r = s => t(s) * ee;
  return Go(e, r, o).map(({
    part: part_2,
    end: end_3
  }) => gi(end_3 - r(part_2), end_3, part_2.ink));
}
function Oi(e, {
  at: at_6,
  width: width_4,
  parts: parts_4
}) {
  let s = Math.ceil(at_6.y),
    p = (s - at_6.y) * ee,
    m = Io(parts_4, f => f.height, p),
    n = m.at(-1)?.to ?? 0,
    a = new Set();
  for (let f = 0; f < n; f += ee) {
    let i = Ro(m, f, hi);
    if (i === void 0) continue;
    let l = f < p ? yi(i, n - p) : i;
    a.add(l.ink).add(l.background);
    for (let u = 0; u < Math.round(width_4); u++) e.set({
      x: at_6.x + u,
      y: s - 1 - f / ee
    }, l);
  }
  return parts_4.every(item => a.has(item.ink));
}
function _i(e, {
  at: at_7,
  width: width_5,
  ink: ink_8,
  isHatched: isHatched
}) {
  let glyph_5 = Si[Math.max(1, Math.round(width_5 * ee))];
  if (glyph_5 !== void 0 && !isHatched) {
    e.set(at_7, {
      glyph: glyph_5,
      ink: ink_8
    });
    return;
  }
  for (let n = 0; n < Math.max(1, Math.round(width_5)); n++) e.set({
    x: at_7.x + n,
    y: at_7.y
  }, {
    glyph: isHatched ? mA : pA,
    ink: ink_8
  });
}
var Ci = (e, t) => Ti[Math.floor((e - Math.floor(e)) * ii) * Yr + Math.floor((t - Math.floor(t)) * Yr)] ?? 0;
var No = e => Ti.reduce((acc, item) => (e & item) === 0 ? acc : acc + 1, 0);
var Li = e => t => No(t.bits) === e;
function Ei(e, t) {
  let o = e.lines ?? [],
    lines = [...o.filter(item => item.ink !== t.ink), {
      ink: t.ink,
      bits: (o.find(item => item.ink === t.ink)?.bits ?? 0) | t.bits
    }],
    s = lines.filter(item => item.ink !== "quiet"),
    p = s.length > 0 ? s : lines;
  return {
    glyph: String.fromCodePoint(oA + p.reduce((acc, item) => acc | item.bits, 0)),
    ink: p.findLast(Li(Math.max(...p.map(item => No(item.bits)))))?.ink ?? t.ink,
    lines: lines
  };
}
function Ai(e, {
  points: points_2,
  ink: ink_9
}) {
  for (let [r, s] of points_2.entries()) {
    let p = points_2[r - 1] ?? s,
      m = Math.ceil(Math.max(Math.abs(s.x - p.x) * ii, Math.abs(s.y - p.y) * Yr, 1));
    for (let n = 0; n <= m; n++) {
      let a = p.x + (s.x - p.x) * n / m,
        f = p.y + (s.y - p.y) * n / m,
        i = {
          x: Math.floor(a),
          y: Math.floor(f)
        },
        x = e.cellAt(i);
      if (!x || !(x.glyph === glyph_4 || x === bo || x.lines !== void 0)) continue;
      e.set(i, Ei(x, {
        ink: ink_9,
        bits: Ci(a, f)
      }));
    }
  }
}
function Ri(e, {
  at: at_8,
  text: text_5,
  ink: ink_10
}) {
  let x_6 = Math.round(at_8.x);
  for (let glyph_6 of Ce(text_5)) {
    let m = P(glyph_6);
    e.set({
      x: x_6,
      y: at_8.y
    }, {
      glyph: glyph_6,
      ink: ink_10
    });
    for (let n = 1; n < m; n++) e.set({
      x: x_6 + n,
      y: at_8.y
    }, {
      glyph: "",
      ink: ink_10
    });
    x_6 += m;
  }
}
var bi = e => ({
  text: e.glyph,
  ink: e.ink,
  background: e.background
});
function Ii(e) {
  let t = [];
  for (let o of e.slice(0, e.findLastIndex(r => r.glyph !== glyph_4) + 1)) {
    let r = t.at(-1);
    r && (r.ink === o.ink && r.background === o.background || o.glyph === glyph_4 && r.background === void 0) ? r.text += o.glyph : t.push(bi(o));
  }
  return t;
}
var Ni = e => hi[Math.round(e * ee)] ?? glyph_3;
function bA(e) {
  let t = ci(e),
    o = !1,
    r = 0;
  for (let s of e.shapes) switch (s.kind) {
    case "text":
      {
        s.isAboutPartsLeftOut && !o ? r += 1 : Ri(t, s);
        break;
      }
    case "bar":
      _i(t, s);
      break;
    case "stack":
      o = !Oi(t, s) || o;
      break;
    case "line":
      Ai(t, s);
      break;
    case "strip":
      {
        let {
          at: at_9,
          heights: heights_2,
          ink: ink_11
        } = s;
        heights_2.forEach((item, index) => {
          if (item !== null) t.set({
            x: at_9.x + index,
            y: at_9.y
          }, {
            glyph: Ni(item),
            ink: ink_11
          });
        });
        break;
      }
    case "band":
      {
        let {
            at: at_10,
            rows: rows_18,
            parts: parts_5
          } = s,
          a = Io(parts_5, f => f.width, 0);
        for (let f = 0; f < (a.at(-1)?.to ?? 0); f += ee) {
          let i = Ro(a, f, Si);
          for (let x = 0; i !== void 0 && x < rows_18; x++) t.set({
            x: at_10.x + f / ee,
            y: at_10.y + x
          }, i);
        }
        break;
      }
    case "axisRow":
      {
        let {
          at: at_11,
          gridWidth: gridWidth_2
        } = s;
        t.set(at_11, {
          glyph: ui(gridWidth_2),
          ink: "quiet"
        });
        for (let n = 1; n < gridWidth_2; n++) t.set({
          x: at_11.x + n,
          y: at_11.y
        }, bo);
        break;
      }
  }
  return t.rows().slice(0, e.rows - r).map(Ii);
}
var Mo = (e, t = "") => `fill="var(--${e})"${t} data-series="${e}"`;
var Jr = 2;
var height = 0.7;
var BA = 4.5;
var Vr = 18;
var wo = 0.5;
var ki = 8;
var WA = 13.3;
var HA = 0.125;
var ko = 0.1;
var te = e => (e * Vr).toFixed(1);
var Po = e => te(e.height) !== te(0);
var q = e => (e * ki).toFixed(1);
var Se = (e, t) => `${q(e)},${te(t)}`;
var Do = (e, t, o = "") => `<line${o} x1="${q(e.x)}" y1="${te(e.y)}" x2="${q(t.x)}" y2="${te(t.y)}" stroke="var(--quiet)"/>`;
function Pi(e) {
  let x_7 = e.at.x + wo;
  return Do({
    x: x_7,
    y: e.at.y
  }, {
    x: x_7,
    y: e.at.y + 1
  });
}
var Di = (e, t) => ({
  x: t.end - t.part.width,
  y: e.at.y + ko,
  width: t.part.width,
  height: e.rows - Jr * ko,
  ink: t.part.ink
});
var Ui = e => ({
  x: e.at.x,
  y: e.at.y + (1 - height) / Jr,
  width: e.width,
  height: height,
  ink: e.ink
});
var Fi = e => e.text.replace(/[&<>]/g, t => `&#${t.charCodeAt(0)};`);
function Bi(e) {
  let x_8 = e.at.x + wo,
    y_10 = e.at.y + wo;
  return Do({
    x: x_8,
    y: y_10
  }, {
    x: x_8 + e.gridWidth,
    y: y_10
  }, ' class="grid"');
}
var ji = e => e.isHatched ? ` fill-opacity=".45" stroke="var(--${e.ink})"` : "";
var Wi = e => e.points.map(item => Se(item.x, item.y)).join(" ");
var Uo = (e, t = "") => `<rect x="${q(e.x)}" y="${te(e.y)}" width="${q(e.width)}" height="${te(e.height)}" ${Mo(e.ink, t)}/>`;
var vi = (e, t) => ({
  x: e.at.x,
  y: t.end,
  width: e.width - HA,
  height: t.part.height,
  ink: t.part.ink
});
var Hi = (e, t) => e.heights.flatMap((item, index) => {
  let s = e.at.x + index,
    p = t - (item ?? 0) * (1 - Jr * ko);
  return [Se(s, p), Se(s + 1, p)];
});
function $i(e) {
  let t = e.at.y + 1 - ko;
  return `${Se(e.at.x, t)} ${Hi(e, t).join(" ")} ${Se(e.at.x + e.heights.length, t)}`;
}
var Gi = e => `stroke="var(--${e.ink})" data-series="${e.ink}"`;
var Xi = e => `textLength="${q(P(e.text))}"`;
var Ki = e => `fill="var(--${e.ink})"` + (e.ink === "title" ? ' font-weight="600"' : "");
var zi = e => (e.at.y + wo) * Vr + BA;
var Yi = e => `x="${q(e.at.x)}" y="${zi(e)}"`;
function Ji(e) {
  switch (e.kind) {
    case "text":
      return `<text ${Yi(e)} ${Xi(e)} ${Ki(e)}>${Fi(e)}</text>`;
    case "bar":
      return Uo(Ui(e), ji(e));
    case "stack":
      return Go(e.parts, t => -t.height, e.at.y).filter(item => Po(item.part)).map(item => Uo(vi(e, item))).join("");
    case "axisRow":
      {
        let t = Pi(e);
        return e.gridWidth > 0 ? `${t}${Bi(e)}` : t;
      }
    case "strip":
      return `<polygon points="${$i(e)}" ${Mo(e.ink)}/>`;
    case "band":
      return Go(e.parts, t => t.width, e.at.x).map(item => Uo(Di(e, item))).join("");
    case "line":
      return `<polyline points="${Wi(e)}" ${Gi(e)}/>`;
  }
}
var Vi = [`text{font-size:${WA}px;font-family:ui-monospace,Menlo,Consolas,monospace;white-space:pre}`, "polyline{fill:none;stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}", ".grid{opacity:.25}"].join("");
var Zr = e => Object.entries(Wr).map(([t, o]) => `--${t}:${o[e]}`).join(";");
var dR = "@media (prefers-color-scheme: dark)";
function yR(e) {
  let o = e.shapes.some(item => item.kind === "stack" && !item.parts.every(Po)) ? e.shapes : e.shapes.filter(item => !(item.kind === "text" && item.isAboutPartsLeftOut)),
    r = e.columns * ki,
    s = (e.rows - (e.shapes.length - o.length)) * Vr;
  return [`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${s}" viewBox="0 0 ${r} ${s}">`, `<style>svg{${Zr("light")}}${dR}{svg{${Zr("dark")}}}`, `${Vi}</style>`, ...o.map(Ji), "</svg>"].join(`
`);
}
var qr = 100;
var OR = 1000;
var CR = 2;
var Qi = 40;
var ER = 5;
var RR = 66;
var el = e => sum(e.series.flatMap(item => item.samples).map(item => item.value === null ? 0 : 1));
var tl = (e, t) => ({
  ...e,
  outcome: "drawn",
  form: t.form,
  format: rn(t),
  seriesCount: t.series.length,
  pointCount: el(t),
  hasLeftOut: t.leftOutNotes.length > 0
});
var Qr = (e, t, o) => Number.isNaN(e) ? o : Math.min(Math.floor(e), t);
function Qe(e, t, o) {
  let r = q_(e, t);
  return {
    kind: "chart",
    modelText: ja(r).join(`
`),
    terminalRows: s => bA(ni(r, Math.max(0, Qr(s, OR, 0)))),
    svg: (s = qr) => yR(ni(r, Math.max(Xa, Qr(s, qr, qr)))),
    usage: tl(o, e)
  };
}
var ol = 1 + ln + CR * An;
var Tt = (outcome, t, o) => ({
  kind: "refused",
  modelText: ("Not drawn. " + Et(t, ol, "more line").join(`
- `)).split(`
`).map(item => It(item, RR, 1 / 0).join(`
  `)).join(`
`),
  usage: {
    ...o,
    outcome: outcome
  }
});
var rl = (e, t, o) => Qe({
  ...e,
  notes: [`drawn as bars, not as ${t.form ?? "line"}: ${t.x ?? "x"} holds names, not times`, ...e.notes]
}, Ut(t), {
  ...o,
  isFormReplaced: !0
});
function es(e, t, o) {
  let r = t.slice(-ER).map(({
      id: id,
      tool: tool,
      text: text_6
    }) => `${re(id, Qi)} (${re(tool, Qi)}, ${K(text_6.length, "character")})`),
    s = r.length > 0;
  return Tt(e.code, [e.why + (s ? `
Or name another tool result:` : ""), ...r], o);
}
var sl = e => e ? {
  code: "no_result",
  why: "No tool has answered yet. Pass the rows as data"
} : {
  code: "data_not_found",
  why: "data is neither the id of a tool result nor a table. Pass an id, JSON records, or the text of a CSV, TSV or markdown table"
};
var BR = /\n|^[[{]/;
function ml(e) {
  let t = N(e) ? e.data : void 0;
  return typeof t === "string" && BR.test(t.trim()) ? t : void 0;
}
var nl = (e, t, o) => ({
  ...e,
  format: o ? rn(t) : e.format
});
function al(e) {
  return N(e) ? {
    ...e,
    ...(typeof e.y === "string" && {
      y: [e.y]
    }),
    ...(typeof e.by === "string" && {
      by: [e.by]
    })
  } : e;
}
var fl = e => e.form === "share" ? {
  ...e,
  combine: e.combine ?? "sum"
} : e;
function il(e) {
  let t = al(bt(e.input ?? {}));
  if (!vx(t)) return Tt("bad_call", Ko(t), lt);
  let r = fl(t),
    {
      data: data_3
    } = r,
    p = e.results.filter(item => item.tool !== tool_6),
    m = data_3 === void 0,
    n = m ? p.findLast(oe => oe.text.trim() !== "") : p.find(item => item.id === data_3),
    a = p.filter(item => item !== n),
    f = ml(e.input),
    i = typeof data_3 === "object" ? JSON.stringify(data_3) : void 0,
    x = i ?? n?.text ?? f,
    c = an(r, i ? "rows" : n ? m ? "last_result" : "result_id" : f === void 0 ? "none" : "text");
  if (x === void 0) return es(sl(m), a, c);
  let g = {
      zone: r.zone === "local" ? e.zone : "UTC",
      nowMs: e.nowMs
    },
    T = kr(x, r, g);
  if (T.kind === "data") return Qe(T, r, c);
  let _ = T.problem.fitsBars ? fn(T, kr(x, Ut(r), g), r) : T;
  if (_.kind === "data") return rl(_, r, c);
  let [A, ...Fe] = _.tables;
  return A !== void 0 ? Tt(_.problem.code, [_.problem.why, ..._S(_.tables)], nl(c, A, Fe.length === 0)) : es(_.problem, a, c);
}
function ts(e, t) {
  let o = {
      form: "line"
    },
    r = kr(e, o, {
      zone: "UTC",
      nowMs: t.nowMs
    });
  if (!(r.kind === "data" && r.isSeries && r.leftOutNotes.length === 0)) return {
    kind: "none"
  };
  let p = re(t.query.replaceAll(`
`, " ")),
    n = r.subject.toLowerCase() === ir && p !== "" ? p : r.subject;
  return Qe({
    ...r,
    subject: n,
    series: r.series.map(item => item.name === r.subject ? {
      ...item,
      name: n
    } : item)
  }, o, {
    ...lt,
    dataFrom: "last_result"
  });
}
function rs(e, t) {
  if (e.tool.register(Nc).catch(o => e.ui.log(`no chart tool: ${String(o)}`, {
    to: "debug"
  })), t) e.telemetry.log(VT(t)).catch(() => {
    return;
  });
}
function St(e, t, o) {
  e.telemetry.mark(zT(t, o.isAsked)).catch(() => {
    return;
  }), e.session.surfaces().catch(() => []).then(surfaces => e.telemetry.log($T(t, {
    isAsked: o.isAsked,
    isInSubagent: o.agentId !== void 0,
    surfaces: surfaces,
    elapsedMs: o.elapsedMs
  }))).catch(() => {
    return;
  });
}
var eb = [10, 20, 40, 80, 160];
var ob = 256;
var sb = 80;
function Ue(e, t, o) {
  if (o.kind === "none") return e.chartlessIds.add(t), o;
  let r = [...e.charts.keys()].at(-1);
  if (e.charts.size >= ob && r !== void 0) e.charts.delete(r);
  return e.charts.set(t, o), o;
}
var ll = (e, t) => ({
  ...e,
  ...(N(t) && t)
});
var xl = (text_7, easel) => ({
  type: "text",
  text: text_7,
  _meta: {
    easel: easel
  }
});
var ul = e => e !== "terminal";
var ss = e => e.length > 0;
var ib = /^(0|false|no|off)$/i;
var lb = /^(1|true|yes|on)$/i;
var tool_8 = /^mcp__(?!easel__)/;
var cl = /[^\w-]/;
function gt(e) {
  return ["query", "expr", "query_expr"].flatMap(item => S(e, item)).find(item => typeof item === "string" && item.trim() !== "") ?? "";
}
var yl = e => [...(e ?? []), Hx];
function hl(e, t) {
  let o = e?.trim() ?? "",
    r = ib.test(o),
    s = t.find(item => item.axScreenReader !== void 0);
  return r ? !1 : lb.test(o) || s?.axScreenReader === !0;
}
function Tl(e) {
  let [t] = S(e, "0._meta.easel"),
    {
      nowMs: nowMs,
      zone: zone_4
    } = N(t) ? t : {};
  return {
    nowMs: typeof nowMs === "number" ? nowMs : null,
    zone: typeof zone_4 === "string" ? zone_4 : "UTC"
  };
}
var Sl = e => e.length > 0;
var Ot = {
  kind: "none"
};
function ps(e, t, o) {
  if (t.transcript && t.transcript !== o) return t.transcript;
  let r = e();
  return t.transcript = r, r.catch(() => {
    if (t.transcript === r) t.transcript = void 0;
  }), r;
}
async function gl(e, t, o) {
  let {
    tool_use_id: tool_use_id,
    tool: tool_2,
    input: input,
    output: output,
    isErrored: isErrored
  } = o.row;
  if (isErrored || output === void 0 || tool_use_id === void 0) return Ot;
  let i = t.chartlessIds.has(tool_use_id) ? Ot : t.charts.get(tool_use_id);
  if (i) return i;
  let x = tool_2 !== tool_6,
    l = x && o.hasWholeOutput,
    u = t.autoChartCalls.get(tool_use_id);
  if (l) return Ue(t, tool_use_id, ts(ge(output), u ?? {
    nowMs: null,
    query: gt(input)
  }));
  let d = ps(e, t),
    g = await ((await d).some(item => item.id === tool_use_id) ? d : ps(e, t, d)),
    T = g.findIndex(item => item.id === tool_use_id),
    L = g[T];
  if (!L) return Sl(g) ? Ue(t, tool_use_id, Ot) : Ot;
  return Ue(t, tool_use_id, x ? ts(ge(L.storedResult), u ?? {
    nowMs: null,
    query: gt(L.input)
  }) : il({
    input: L.input,
    results: g.slice(0, T),
    ...Tl(L.storedResult)
  }));
}
async function Ol(e, t, o) {
  let {
    tool_use_id: tool_use_id_2,
    tool: tool_3
  } = o;
  if (!cl.test(tool_3) || tool_use_id_2 === void 0) return o;
  let tool_4 = t.calledTools.get(tool_use_id_2);
  if (tool_4 !== void 0) return {
    ...o,
    tool: tool_4
  };
  t.earlierTools ??= e().then(a => new Map(a.map(item => [item.id, item.tool])), a => {
    throw t.earlierTools = void 0, a;
  });
  let tool_5 = (await t.earlierTools).get(tool_use_id_2);
  return tool_5 === void 0 ? o : {
    ...o,
    tool: tool_5
  };
}
var _l = (e, t, o) => h(e.Box, {
  flexDirection: "column"
}, t.hostRow, o);
function _b(e) {
  let t = e.callCount > 1;
  return h(e.elements.Box, {
    flexDirection: "column"
  }, h(e.elements.Svg, {
    source: e.chart.svg(e.columns),
    alt: e.chart.modelText
  }), t ? h(e.elements.Text, {
    dimColor: !0
  }, `newest of ${e.callCount} calls: open the group for the rest`) : null);
}
var Cb = 6;
var Ll = e => e > 1 ? `newest of ${e} calls, ctrl+o for the rest \xB7 ` : "";
var El = e => `auto chart \xB7 ${Ll(e)}turn off in /config: Auto charts`;
var Al = e => e === void 0 ? [] : [El(e)];
var bb = "  \u23BF  ";
function bl(e, t) {
  let o = e.columns - Cb;
  return h(e.elements.Box, {
    flexDirection: "row"
  }, h(e.elements.Text, {
    dimColor: !0
  }, bb), h(e.elements.Text, null, e.chart.terminalRows(o).concat(t.flatMap(item => It(item, o)).map(r => [{
    text: r,
    ink: "quiet"
  }])).flatMap((item, index) => [index > 0 ? `
` : "", ...item.map(item => h(e.elements.Text, {
    color: Wr[item.ink].host,
    backgroundColor: item.background && Wr[item.background].host,
    bold: item.ink === "title"
  }, item.text))])));
}
function Mb(e) {
  let t = Al(e.autoCallCount);
  return e.isScreenReader ? h(e.elements.Text, null, [e.chart.modelText, ...t].join(`
`)) : bl(e, t);
}
async function jo(e, t) {
  let {
      cache: cache,
      event: event
    } = t,
    columns_7 = event.viewport?.columns,
    p = async () => _t(await e.session.messages({})),
    n = (await Promise.all(t.rows.map(item => Ol(p, cache, item)))).filter(item => t.isCharted(item.tool));
  for (let row_2 of n.toReversed()) {
    let chart_3 = await gl(p, cache, {
      row: row_2,
      hasWholeOutput: event.surface === "terminal"
    });
    if (chart_3.kind !== "chart") continue;
    if (event.surface !== "terminal") {
      let l = _b({
        elements: e.ui.resolve(event),
        chart: chart_3,
        columns: columns_7,
        callCount: n.length
      });
      return _l(e.ui.resolve(event), t, l);
    }
    if (cache.screenReader === "unread") {
      let l = await e.env.get("CLAUDE_AX_SCREEN_READER"),
        u = [];
      for (let source_6 of ["policy", "flag", "user"]) u.push(await e.settings.read({
        source: source_6
      }));
      cache.screenReader = hl(l, u) ? "on" : "off";
    }
    let i = row_2.tool === tool_6,
      x = Mb({
        elements: e.ui.resolve(event),
        chart: chart_3,
        columns: columns_7 ?? sb,
        isScreenReader: cache.screenReader === "on",
        autoCallCount: i ? void 0 : n.length
      });
    return _l(e.ui.resolve(event), t, x);
  }
  return t.hostRow;
}
function Bb(e, t, o = {}) {
  let r = o.isReaderOn?.(),
    cache_2 = {
      charts: new Map(),
      chartlessIds: new Set(),
      autoChartCalls: new Map(),
      calledTools: new Map(),
      screenReader: r === void 0 ? "unread" : r ? "on" : "off"
    },
    p = String(t.autoChartSkip ?? "").split(/[\s,]+/),
    isCharted = f => tool_8.test(f) && t.autoCharts !== !1 && o.isRegulated?.() !== !0 && !p.some(item => f.startsWith(`mcp__${item}__`)),
    n = p.some(item => item !== ""),
    a = t.autoCharts === !1 ? "off" : n && "skips_servers";
  e("session.start", async (f, i, x) => {
    if (ss(await f.session.surfaces())) rs(f, a);
    return x(i);
  }), e("session.attach", (f, i, x) => (rs(f, a), x(i))), e("prompt.section", {
    name: "env_info_simple"
  }, async (f, i, x) => {
    let l = await x(i);
    return l.text === null ? l : {
      text: `${l.text}
${Kx}`
    };
  }), e("tool.call", {
    tool: tool_6
  }, async (f, i, x) => {
    if (o.isRegulated?.() === !0) return {
      deny: deny
    };
    let {
        tool: tool_7,
        tool_use_id: tool_use_id_3,
        agentId: agentId_2,
        consent: consent,
        $shadowed: $shadowed,
        ...T
      } = i,
      input_2 = ll(T, $shadowed);
    cache_2.transcript = void 0, cache_2.calledTools.set(tool_use_id_3, tool_6);
    let _ = T.data === void 0 && agentId_2 === void 0 && o.isBatchAwaited?.() === !0,
      results = await fr(f, {
        tool_use_id: tool_use_id_3,
        agentId: agentId_2,
        signal: x.signal
      }, _ ? eb : []);
    if (results === void 0) return {
      deny: deny_2
    };
    let A = {
        nowMs: await f.clock.now(),
        zone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      Fe = performance.now(),
      et = il({
        input: input_2,
        results: results,
        ...A
      });
    Ue(cache_2, tool_use_id_3, et), St(f, et.usage, {
      isAsked: !0,
      agentId: agentId_2,
      elapsedMs: performance.now() - Fe
    });
    let oe = et.modelText;
    return et.kind === "chart" ? {
      result: [xl(oe, A)]
    } : {
      deny: oe
    };
  }).catch((f, i) => (St(f, lt, {
    isAsked: !0,
    agentId: i.agentId,
    elapsedMs: 0
  }), {
    deny: deny_3
  })), e("tool.call", {
    tool: tool_8
  }, async (f, i, x) => {
    if (i.agentId === void 0) cache_2.calledTools.set(i.tool_use_id, i.tool);
    let l = await x(i);
    if (cache_2.transcript = void 0, "deny" in l || l.isError || !isCharted(i.tool) || i.agentId !== void 0 || !ss(await f.session.surfaces())) return l;
    let d = {
        nowMs: await f.clock.now(),
        query: gt(i)
      },
      c = performance.now(),
      g = ts(ge(l.result), d);
    if (g.kind !== "chart") return Ue(cache_2, i.tool_use_id, g), l;
    return cache_2.autoChartCalls.set(i.tool_use_id, d), St(f, g.usage, {
      isAsked: !1,
      agentId: i.agentId,
      elapsedMs: performance.now() - c
    }), {
      ...l,
      context: yl(l.context)
    };
  }).catch(async (f, i, x) => {
    let l = await x(i);
    return St(f, lt, {
      isAsked: !1,
      agentId: i.agentId,
      elapsedMs: 0
    }), l;
  }), e("ui.render", {
    component: "ToolResult",
    surface: "terminal",
    props: {
      tool: tool_6
    }
  }, async (f, event_2, x) => (await jo(f, {
    cache: cache_2,
    event: event_2,
    hostRow: null,
    rows: [{
      ...event_2.props,
      input: void 0
    }],
    isCharted: () => !0
  })) ?? x(event_2)), e("ui.render", {
    component: "ToolUse",
    props: {
      tool: [/^mcp__/, cl]
    }
  }, async (f, event_3, x) => jo(f, {
    cache: cache_2,
    event: event_3,
    hostRow: await x(event_3),
    rows: [event_3.props],
    isCharted: l => l === tool_6 ? ul(event_3.surface) : isCharted(l)
  })), e("ui.render", {
    component: "ToolGroup",
    props: {
      isExpanded: !1
    }
  }, async (f, event_4, x) => jo(f, {
    cache: cache_2,
    event: event_4,
    hostRow: await x(event_4),
    rows: event_4.props.calls,
    isCharted: isCharted
  }));
}
export { ms as default, Bb as register };