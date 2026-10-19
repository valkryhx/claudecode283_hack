// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var Zr = {};
Mr(Zr, {
  default: () => Zr,
  register: () => mA
});
var defaultCount_3 = 24;
var defaultCount = 4;
var defaultCount_2 = 24;
var To = 8;
var maxCount_3 = 40;
var maxCount = 4;
var maxCount_2 = 40;
var Fe = 3;
var qr = 10;
var M = {
  line: {
    label: "line chart",
    plural: "series",
    defaultCount: To,
    maxCount: To
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
    defaultCount: To,
    maxCount: To
  }
};
function Pt(e, o) {
  let {
    plural: plural,
    singular = plural
  } = M[e];
  return `${o.toLocaleString("en-US")} ${o === 1 ? singular : plural}`;
}
var Ll = 40;
var maxItems = 12;
var os = {
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
      ...os,
      description: `the value columns. Lines share a plot where they have one unit and their largest values are within ${qr} times of each other, columns only where they stack. ${Fe} plots at most, and the rest are named`
    },
    by: {
      ...os,
      description: "columns that split the rows into series. With combine and no by, nothing is split"
    },
    combine: {
      enum: ["sum", "mean", "max", "min"],
      description: 'how rows that share an x, and a series, become one. "sum" also says the values add, which turns on totals and shares, and stacks columns'
    },
    top: {
      type: "integer",
      minimum: 1,
      description: `how many to draw: ${M.bars.defaultCount} bars if left out and ${M.bars.maxCount} at most, ${M.line.maxCount} lines at most, ${M.sparks.defaultCount} sparks and ${M.sparks.maxCount} at most, ${M.share.maxCount} parts of a share beside one for the rest, ${M.columns.maxCount} series of columns where they stack, else ${Fe}. The largest are kept, largest first, and the rest are counted`
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
var K = (e, o) => `${e.toLocaleString("en-US")} ${e === 1 ? o : `${o}s`}`;
function go(e, o, t) {
  let r = e.length - o;
  return r > 0 ? [...e.slice(0, o), `and ${K(r, t)}`] : e;
}
var Nl = /[\s\u{115F}\u{1160}\u{2800}\u{3164}\u{FFA0}]+/gu;
var Ml = /[\uD800-\uDBFF]$/;
var wl = /\s*[\n\r\u{2028}\u{2029}\u0085][^]*$/u;
var kl = / +/g;
var Ut = /^[ -~]*$/;
var Dl = /[\p{L}\p{N}]/u;
var Fl = /[\p{C}\u{FE00}-\u{FE0F}]/gu;
var Bl = /[\p{Cc}\u{E0000}-\u{E007F}\u{202A}-\u{202E}\u{2066}-\u{2069}]/gu;
var jl = /\p{Extended_Pictographic}|\p{Regional_Indicator}|\u{20E3}/u;
var vl = /\p{Emoji_Presentation}|\p{Extended_Pictographic}\u{FE0F}|\u{20E3}/u;
var regExp = new RegExp("[" + String.raw`\u{1100}-\u{115F}\u{2329}\u{232A}\u{2630}-\u{2637}` + String.raw`\u{268A}-\u{268F}\u{2E80}-\u{303E}\u{3041}-\u{3247}` + String.raw`\u{3250}-\u{A4C6}\u{A960}-\u{A97C}\u{AC00}-\u{D7A3}` + String.raw`\u{F900}-\u{FAFF}\u{FE10}-\u{FE19}\u{FE30}-\u{FE6B}` + String.raw`\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}\u{16FE0}-\u{18DF2}` + String.raw`\u{1AFF0}-\u{1B2FB}\u{1D300}-\u{1D376}\u{1F200}-\u{1F265}` + String.raw`\u{20000}-\u{3FFFD}` + "]", "u");
var regExp_2 = new RegExp("[" + String.raw`\p{Mn}\p{Me}\u{1160}-\u{11FF}\u{200B}-\u{200F}` + String.raw`\u{D7B0}-\u{D7FB}` + "]|" + String.raw`(?=[\u{0900}-\u{0D63}])\p{Mc}`, "u");
var Oo = "\u2026";
function rs(e, o) {
  return e.length > o ? e.slice(0, o).replace(Ml, "") + Oo : e;
}
var zl = new Intl.Segmenter("en");
function Oe(e) {
  return Ut.test(e) ? e.split("") : Array.from(zl.segment(e), t => t.segment);
}
var Vl = 1.5;
var Zl = 120;
var Ft = 1;
var Ql = 2;
var ox = 2;
var tx = 2;
var ps = (e, o) => e.reduce((acc, item) => o(item) ? acc + 1 : acc, 0);
var X = e => [...new Set(e).values()];
function z(e, o) {
  let t = [],
    r = [];
  for (let l of e) t.push(l), r.push(o(l));
  let s = [...new Set(r).values()],
    p = new Map(s.map((item, index) => [item, index])),
    m = r.map(item => p.get(item) ?? 0),
    n = s.map(() => 0);
  for (let l of m) n[l] = (n[l] ?? 0) + 1;
  let f = [],
    a = 0;
  for (let l of n) f.push(a), a += l;
  let i = [...f],
    x = [...t];
  for (let [l, u] of t.entries()) {
    let d = m[l] ?? 0,
      c = i[d] ?? 0;
    x[c] = u, i[d] = c + 1;
  }
  return new Map(s.map((item, index) => {
    let d = f[index] ?? 0;
    return [item, x.slice(d, d + (n[index] ?? 0))];
  }));
}
var pe = length => [...Array.from({
  length: length
}).keys()];
function Bt(e, o, t) {
  let r = [],
    end = t;
  for (let part of e) end += o(part), r.push({
    part: part,
    end: end
  });
  return r;
}
function sum(e) {
  let o = e.reduce((acc, item) => acc + item, 0),
    t = e.reduce((acc, item) => acc + Math.abs(item), 0);
  return Math.abs(o) > e.length * Number.EPSILON * t ? o : 0;
}
function jt(e, o, t) {
  let r = [],
    s = 0;
  for (let p of e) {
    if (s += t(p), s > o) break;
    r.push(p);
  }
  return r;
}
function U(e, o) {
  let t = [],
    r = o.values();
  for (let s of e) {
    let p = r.next();
    if (p.done) break;
    t.push([s, p.value]);
  }
  return t;
}
function w(e) {
  if (Ut.test(e)) return e.length;
  let t = 0;
  for (let r of Oe(e)) if (vl.test(r)) t += ox;else for (let p of r) if (!regExp_2.test(p)) t += regExp.test(p) ? tx : 1;
  return t;
}
function Y(e, o) {
  if (w(e) <= o) return e;
  if (o < Ft) return "";
  let r = Oe(e),
    s = Math.ceil((o - Ft) / Ql);
  return jt(r, s, w).join("") + Oo + jt(r.toReversed(), o - Ft - s, w).toReversed().join("");
}
function ms(e) {
  let o = jl.test(e);
  return e.replace(o ? Bl : Fl, "");
}
function me(e, o = Zl) {
  let t = rs(e, o * Vl).trim().replace(wl, Oo).replace(Nl, " "),
    r = Ut.test(t);
  return Y((r ? t : Oe(t).map(ms).join("")).replace(kl, " ").trim(), o);
}
function Co(e) {
  let o = new Map();
  return JSON.parse(JSON.stringify(e), (t, r) => {
    if (typeof r !== "string") return r;
    let p = o.get(r) ?? me(r);
    return o.set(r, p), p;
  });
}
var ns = (e, o) => `${Oo}${[...e].slice(o).join("")}`;
function lx(e, o) {
  let [t = [], ...r] = e.map(item => [...item]),
    s = t.slice(0, Math.max(0, t.findIndex((item, index) => r.some(f => f[index] !== item)))).findLastIndex(m => !Dl.test(m)) + 1,
    p = s > 0 && e.some(item => w(item) > o);
  return e.map(item => Y(p ? ns(item, s) : item, o));
}
function Lo(e, o, t = o) {
  let r = [""];
  for (let s of e.split(" ")) {
    let p = Y(s, t),
      m = `${r.at(-1)} ${p}`.trimStart();
    w(m) <= o || m === p ? r[r.length - 1] = m : r.push(p);
  }
  return r;
}
var as = (e, o) => Object.hasOwn(e, o) ? e[o] : void 0;
var fs = e => ([o, t]) => {
  let r = as(e.properties, o);
  return r ? e.errorsAt(t, r, `${e.prefix}${o}`).map(item => `${item} (${r.description})`) : [e.prefix + me(o, Ll) + ` is not a field: those are ${e.fieldNames}`];
};
var is = e => e === null ? "null" : typeof e;
var ls = e => Number.isInteger(e) ? "integer" : is(e);
var xs = e => Array.isArray(e) ? "array" : ls(e);
var j = e => typeof e === "object" && e !== null && !Array.isArray(e);
function us(e, o) {
  if (o === "[]") return Array.isArray(e) ? e : [];
  if (o === "*") return j(e) ? Object.values(e) : [];
  let t = Array.isArray(e) && e[Number(o)] !== void 0,
    r = j(e) && e[o] !== void 0;
  return t ? [e[Number(o)]] : r ? [e[o]] : [];
}
function S(e, o = "") {
  let t = [e];
  for (let r of o.split(".").filter(item => item !== "")) t = t.flatMap(item => us(item, r));
  return t;
}
function errorsAt(e, o, t) {
  let {
    anyOf: anyOf,
    items: items,
    properties: properties,
    required = []
  } = o;
  if (anyOf?.some(c => errorsAt(e, c, t).length === 0)) return [];
  if (anyOf) return [`${t} must be ${anyOf.map(item => item.type).join(" or ")}`];
  if (o.enum?.some(c => c === e)) return [];
  if (o.enum) return [`${t} must be one of ${o.enum.join(", ")}`];
  let a = xs(e);
  if (o.type !== a) return [`${t || "the call"} must be ${o.type}, not ${a}`];
  if (typeof e === "number" && e < (o.minimum ?? -1 / 0)) return [`${t} must be at least ${o.minimum}`];
  if (Array.isArray(e) && e.length > (o.maxItems ?? 1 / 0)) return [`${t} must hold at most ${o.maxItems}`];
  if (Array.isArray(e) && items) return e.flatMap((item, index) => errorsAt(item, items, `${t}[${index}]`));
  if (!(j(e) && properties !== void 0)) return [];
  let prefix = t === "" ? "" : `${t}.`;
  return [...required.filter(item => !Object.hasOwn(e, item)).map(item => `${prefix}${item} is missing`), ...Object.entries(e).flatMap(fs({
    properties: properties,
    prefix: prefix,
    fieldNames: Object.keys(properties).join(", "),
    errorsAt: errorsAt
  }))];
}
var Wt = e => errorsAt(e, inputSchema, "");
var Cx = e => Wt(e).length === 0;
var Lx = "easel made an auto chart from this result. Chart it again only for a different chart.";
var deny = "Not drawn. easel failed on this call. The fault is its own, and the same call will fail again.";
var tool_3 = "mcp__easel__chart";
var bx = `If a tool named ${tool_3} is available, call it when numbers over time or across categories would be clearer as a chart.`;
var Rx = 1000000000000000000000000;
var Ax = 0.000000000000000000000001;
var vt = 7;
var Ht = 1000;
var cs = 86400;
var ys = 3600;
var hs = 60;
var Ts = 0.001;
var Ss = 0.000001;
var wx = 2;
var $t = 1e9;
var Be = 1024;
var Gt = 1e6;
var je = 1000;
var Kt = 1000000000000;
var us_2 = 0.000001;
var ms_2 = 0.001;
var ns_2 = 0.000000001;
var percentunit = 100;
var PB = 1000000000000000;
var Os = 4;
var Wx = 4;
var Hx = 60;
var $x = 60000;
var W = why => ({
  kind: "unread",
  why: why
});
var _s = (value, o) => ({
  kind: "number",
  value: value,
  unit: value === 0 ? null : o
});
function Ce(e, o) {
  let t = Math.abs(e);
  if (!(t <= Rx)) return W("too large");
  return t > 0 && t < Ax ? W("too small") : _s(e, o);
}
var Yx = !0;
var Vx = !1;
var eo = Be * Be;
var oo = eo * Be;
var eu = 6;
var tu = 30.44;
var ru = 365.25;
var typicalMs_2 = 3600000;
var typicalMs_3 = 60000;
var We = 2;
var typicalMs = 86400000;
var nu = 2;
var Cs = 2;
var fu = 2;
var lu = 6;
var uu = 0.5;
var cu = 5;
var yu = 2;
var Ls = 5;
var typicalMs_4 = 1000;
var Tu = 2;
var Yt = 1;
var Es = 0;
var gu = 3;
var _u = 3;
var Cu = 7;
function bs(e) {
  let o = new Map();
  return t => {
    let r = o.get(t) ?? e(t);
    return o.set(t, r), r;
  };
}
var Rs = bs(timeZone => new Intl.DateTimeFormat("sv-SE", {
  timeZone: timeZone,
  dateStyle: "short",
  timeStyle: "medium"
}));
function R(e, o) {
  let t = e - Math.floor(e / typicalMs_4) * typicalMs_4;
  if (o === "UTC") {
    let date = new Date(e);
    return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), t];
  }
  let [r = 0, s = 1, p = 1, m = 0, n = 0, f = 0] = Rs(o).format(e).split(/[- :]/, eu).map(Number);
  return [r, s - 1, p, m, n, f, t];
}
var Le = [{
  fieldIndex: 0,
  typicalMs: ru * typicalMs,
  counts: [1, 2, 5, 10, 20, 50, 100]
}, {
  fieldIndex: 1,
  typicalMs: tu * typicalMs,
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
var Iu = !0;
var areTicks = !0;
var J = e => Date.UTC(e[0] ?? 0, ...e.slice(1));
function He(e, o) {
  let t = new Date(J(R(e, o))).getUTCDay();
  return t === 0 || t === lu;
}
var Vt = (e, o) => Math.floor((J(R(e, o)) / typicalMs + _u) / Cu);
var As = (e, o) => Vt(e.at(-1) ?? 0, o) - Vt(e[0] ?? 0, o) >= fu && !e.some(item => He(item, o));
var Is = e => o => e.untilMs > e.fromMs ? (o - e.fromMs) / (e.untilMs - e.fromMs) : uu;
var Ns = (e, o) => t => {
  let r = o.get(t) ?? e.periodStarts.findLastIndex(p => p <= t),
    s = e.periodStarts[r] ?? e.axisSpan.fromMs;
  return (r + (t - s) / ((e.periodStarts[r + 1] ?? e.axisSpan.untilMs) - s)) / e.periodStarts.length;
};
function Eo(e) {
  return e.periodStarts.length > 0 ? Ns(e, new Map(e.periodStarts.map((item, index) => [item, index]))) : Is(e.axisSpan);
}
var Ms = [0, 0, 1, 0, 0, 0, 0];
var ws = e => o => e.some(item => item >= o.fieldIndex);
var Hu = (e, o) => ({
  unit: Le.findLast(ws(e.map(item => R(item, o).findLastIndex((r, s) => r !== Ms[s])))) ?? Le[Ls],
  count: 1,
  skipsWeekends: !1
});
var bo = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
var Ro = (e, o) => o.zone === "UTC" ? 0 : J(R(e, o.zone)) - e;
function Zt(e, o) {
  let t = J(e),
    r = t - Ro(t - typicalMs, o),
    s = t - Ro(r, o);
  return s + Ro(s, o) === t ? s : Math.max(r, s);
}
function Ao(e) {
  let {
      start: start,
      step: step
    } = e,
    {
      fieldIndex: fieldIndex
    } = step.unit,
    s = [],
    p = start[fieldIndex] ?? 0,
    m = Zt(start, e);
  while (m <= e.untilMs) {
    if (m > (s.at(-1) ?? -1 / 0)) s.push(m);
    p += step.count, m = Zt(start.with(fieldIndex, p), e);
  }
  return s;
}
var Ps = e => o => e.has(o);
var ne = e => e.unit.typicalMs * e.count;
var Ds = (step_2, o) => ({
  start: R(o.fromMs, o.zone),
  step: step_2,
  untilMs: o.untilMs + nu * ne(step_2),
  zone: o.zone
});
function Us(e, step_3, t) {
  let r = Ao(Ds(step_3, t));
  if (!e.every(Ps(new Set(r)))) return null;
  let periodStarts = r.filter(item => item <= t.untilMs);
  return {
    step: step_3,
    periodStarts: periodStarts,
    endMs: r[periodStarts.length] ?? t.untilMs
  };
}
var Fs = (e, o) => e < typicalMs ? ["UTC"] : ["UTC", o];
var Bs = (e, o) => t => e[t.fieldIndex] !== o[t.fieldIndex];
var js = (fromMs, untilMs, zone) => ({
  fromMs: fromMs,
  untilMs: untilMs,
  zone: zone
});
var Ws = e => e.toSorted((o, t) => o - t)[Math.floor(e.length / Cs)] ?? 0;
function vs(unit, o, t) {
  let count = Math.max(1, Math.round(o / unit.typicalMs)),
    skipsWeekends = t && unit.fieldIndex === We && count === 1;
  return {
    unit: unit,
    count: count,
    skipsWeekends: skipsWeekends
  };
}
function Hs(e, o, t) {
  let {
      zone: zone_2
    } = o,
    s = e[0],
    p = e.at(-1);
  if (!(s !== void 0 && p !== void 0 && e.length >= yu)) return null;
  let n = e.slice(1).map((item, index) => item - (e[index] ?? item)),
    f = Ws(n);
  if ((p - s) / f > e.length * cu) return null;
  let i = e[n.indexOf(f)] ?? s;
  for (let x of Fs(f, zone_2)) {
    let l = Le.findLast(Bs(R(i, x), R(i + f, x)));
    if (!l) return null;
    let u = vs(l, f, t),
      d = Us(e, u, js(s, p, x));
    if (d) return {
      ...d,
      periodStarts: d.periodStarts.filter(item => !(u.skipsWeekends && He(item, zone_2)))
    };
  }
  return null;
}
var $s = e => (o, t) => o !== e[t];
function Gs(e, o) {
  let dataSpan = e.dataSpan,
    r = R(dataSpan.fromMs, dataSpan.zone),
    s = r.findIndex($s(R(dataSpan.untilMs, dataSpan.zone)));
  return {
    zone: dataSpan.zone,
    areTicks: !Iu,
    fieldsBefore: R(o, dataSpan.zone).slice(0, s === -1 ? r.length : s)
  };
}
function to(e, o, t) {
  let {
      fieldIndex: fieldIndex_2
    } = o.unit,
    s = [],
    fieldsBefore = t.fieldsBefore;
  for (let m of e) {
    let n = R(m, t.zone),
      [f, a, i, x, l, u] = n,
      d = f !== fieldsBefore[Es],
      c = fieldIndex_2 >= Yt && (fieldIndex_2 <= We || d || a !== fieldsBefore[Yt] || i !== fieldsBefore[We]),
      O = fieldIndex_2 === Es || d,
      T = fieldIndex_2 > We && !(t.areTicks && c && x === 0 && l === 0 && u === 0),
      E = [];
    if (c) {
      let C = fieldIndex_2 === Yt;
      E.push(C ? `${bo[a]}` : `${bo[a]} ${i}`);
    }
    if (O) E.push(String(f));
    if (T) {
      let C = fieldIndex_2 === Ls;
      E.push((C ? [x, l, u] : [x, l]).map(item => String(item).padStart(Tu, "0")).join(":"));
    }
    s.push(E.join(" ")), fieldsBefore = n;
  }
  return s;
}
var Ks = (e, o) => to([o], e.precision, Gs(e, o))[0] ?? "";
var Xs = (unit_2, count_2) => ({
  unit: unit_2,
  count: count_2,
  skipsWeekends: !1
});
var zs = Le.flatMap(item => item.counts.map(o => Xs(item, o))).toSorted((e, o) => ne(e) - ne(o));
function Ys(e, o) {
  return o.unit.fieldIndex === We ? e : e - e % o.count;
}
var Js = (e, fieldsBefore_2) => ({
  zone: e.zone,
  areTicks: areTicks,
  fieldsBefore: fieldsBefore_2
});
var Vs = (e, step_4, t) => ({
  start: [...e.slice(0, step_4.unit.fieldIndex), Ys(e[step_4.unit.fieldIndex], step_4)],
  step: step_4,
  untilMs: t.untilMs,
  zone: t.zone
});
var Zs = (e, o) => (t, r) => {
  let text = e[r] ?? "",
    column = o.columnOf(t);
  return {
    text: text,
    column: column,
    start: Math.min(Math.max(0, column - (o.areCentred ? Math.floor((text.length - 1) / Cs) : 0)), o.columns - text.length)
  };
};
var qs = (e, o) => (t, r) => {
  let s = t.map(Zs(to(t, r, e), o));
  return s.every((item, index) => item.start >= 0 && item.start + item.text.length + gu <= (s[index + 1]?.start ?? 1 / 0)) ? s : [];
};
function dd(e, o, t) {
  let r = R(e.fromMs, e.zone),
    s = qs(Js(e, r), t);
  for (let p of zs) {
    if (ne(p) < ne(o) || (e.untilMs - e.fromMs) / ne(p) > t.columns) continue;
    let n = s(Ao(Vs(r, p, e)).filter(item => item >= e.fromMs && !(o.skipsWeekends && p.unit.fieldIndex === We && He(item, e.zone))), p);
    if (n.length > 0) return n;
  }
  return s([e.fromMs], o);
}
var qt = `(?:${bo.join("|")})[a-z]*`;
var regExp_3 = new RegExp(String.raw`^(?:\d{1,2}([./-])\d{1,2}\1\d{4}\b|\d{1,2}/\d{1,2}/\d{2}\b|` + String.raw`\d{1,2}[./]\d{4}\b|${qt} \d{1,2}$|` + String.raw`\d{1,2} ${qt}$)`);
var Qt = e => regExp_3.test(String(e ?? "").trim());
var Cd = String.raw`(?<hour>\d\d):(?<minute>\d\d)` + String.raw`(?::(?<second>\d\d)(?<fraction>\.\d+)?)?`;
var Ld = String.raw`\s?(?<zone>Z|UTC|GMT|[-+]\d\d(?::?\d\d)?)` + String.raw`(?: UTC)?`;
var ep = /^(?:--?|null|none|nan|n\/a|na|\\n|[-+]inf)?$/i;
var regExp_4 = new RegExp(String.raw`^(?:(?<days>\d+)d ?)?(?:(?<hours>\d+)h ?)?` + String.raw`(?:(?<minutes>\d+)m ?)?(?:(?<seconds>[\d.]+)s)?$`);
var Ad = /^[\d.E+]+$/;
var Id = /^(?<year>\d{4})-?W(?<week>\d\d)(?:-?(?<weekday>[1-7]))?$/;
var Md = /^(?<sign>[-+])(?<hours>\d\d):?(?<minutes>\d\d)?$/;
var op = {
  days: cs,
  hours: ys,
  minutes: hs,
  seconds: 1
};
var tp = new Map(Object.entries({
  k: je,
  K: je,
  M: Gt,
  B: $t,
  T: Kt
}));
var er = oo * Be;
var rp = [["", {
  k: je,
  K: je,
  M: Gt,
  G: $t,
  T: Kt,
  short: 1,
  none: 1
}], ["B", {
  B: 1,
  kB: je,
  KB: je,
  MB: Gt,
  GB: $t,
  TB: Kt,
  PB: PB
}], ["B", {
  Ki: Be,
  Mi: eo,
  Gi: oo,
  Ti: er
}], ["B", {
  KiB: Be,
  MiB: eo,
  GiB: oo,
  TiB: er
}], ["B", {
  bytes: 1,
  decbytes: 1
}], ["s", {
  ns: ns_2,
  us: us_2,
  µs: us_2,
  ms: ms_2,
  s: 1
}], ["s", {
  min: hs,
  h: ys,
  d: cs
}], ["%", {
  "%": 1,
  percent: 1,
  percentunit: percentunit
}]];
var Io = new Map(rp.flatMap(([unit_3, o]) => Object.entries(o).map(([t, size]) => [t, {
  unit: unit_3,
  size: size
}])));
function sp(e, unit_5) {
  let {
    unit: unit_4,
    size: size_2
  } = Io.get(unit_5) ?? {
    unit: unit_5,
    size: 1
  };
  return Ce(e * size_2, unit_4);
}
function or(e, o, t) {
  return t !== void 0 ? Ce(e * (tp.get(o) ?? 1), t) : sp(e, o);
}
function pp(e) {
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
  return or(sign === "" || sign === "+" ? n : -n, suffix, currency);
}
var vd = String.raw`(?=\.?\d)(?<integer>\d{1,3}(?:,\d{3})+|\d+)?` + String.raw`(?<fraction>\.\d+)?`;
var Hd = String.raw`(?:e(?<exponent>[-+]?\d+))?`;
var $d = String.raw`^(?<sign>[-+\u2212(]?)(?<currency>[$\u20AC\u00A3\u00A5])?`;
var Gd = String.raw`(?<space>\s?)` + String.raw`(?<suffix>[a-z\u00B5%]*(?:\/[a-z]+)?)\)?$`;
var tr = 'Times are read as ISO 8601 (2026-09-07, 2026-W37), epoch numbers, "7 Sep 2026" or "Sep 7, 2026"';
var regExp_5 = new RegExp($d + vd + Hd + Gd, "i");
function Ee(e, o = !1) {
  if (typeof e === "number") return Ce(e, "");
  let r = String(e ?? "").trim();
  if (ep.test(r)) return {
    kind: "empty",
    why: "empty"
  };
  let p = regExp_4.exec(r)?.groups ?? {},
    m = Object.entries(op).filter(([x]) => p[x] !== void 0).map(([x, l]) => Number(p[x]) * l);
  if (m.length >= wx) return Ce(sum(m), "s");
  let f = regExp_5.exec(r)?.groups;
  if (!f) return W("not a number");
  let [a = ""] = (f.suffix ?? "").split("/");
  return f.space === "" && !o && a !== "" && !Io.has(a) ? W("not a number") : pp(f);
}
var ap = {
  9: Ht,
  10: Ht,
  12: 1,
  13: 1,
  15: Ts,
  16: Ts,
  18: Ss,
  19: Ss
};
var $e = (ms_3, isZoned) => ({
  kind: "time",
  ms: ms_3,
  isZoned: isZoned
});
var fp = e => (new Date(e).getUTCDay() + vt - 1) % vt;
var ip = (e, o) => R(J([e, 0, o + Wx - 1]), "UTC")[0];
function lp(e) {
  let o = Number(e.year),
    t = Number(e.week),
    r = Os - fp(J([o, 0, Os])) + (t - 1) * vt;
  return t < 1 || ip(o, r) !== o ? W("no such week") : $e(J([o, 0, r + Number(e.weekday ?? 1) - 1]), Vx);
}
var xp = e => (o, t) => o !== e[t];
function up(e, o) {
  let t = Md.exec(o.zone ?? "")?.groups ?? {},
    r = Number(t.hours ?? 0) * Hx + Number(t.minutes ?? 0);
  return $e(e - (t.sign === "-" ? -r : r) * $x + Math.round(Number(o.fraction ?? "0") * Ht), o.zone !== void 0);
}
function dp(e) {
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
    a = [year, monthName === void 0 ? Number(month) - 1 : bo.findIndex(item => monthName.startsWith(item)), day, hour, minute, second].map(Number),
    i = J(a);
  return a.some(xp(R(i, "UTC"))) ? W("no such date") : up(i, e);
}
var No = Cd + `(?:${Ld})?`;
var cp = [String.raw`^(?<year>\d{4})(?:[-/](?<month>\d\d)(?:[-/](?<day>\d\d)` + String.raw`(?:[T ]${No})?)?)?$`, String.raw`^(?:[A-Z][a-z]{2}, )?(?<day>\d{1,2}) ` + String.raw`(?<monthName>[A-Z][a-z]+) (?<year>\d{4})` + String.raw`(?: ${No})?$`, String.raw`^(?<monthName>[A-Z][a-z]+) (?<day>\d{1,2}), (?<year>\d{4})` + String.raw`(?: ${No})?$`, String.raw`^(?<year>\d{4})(?<month>\d\d)(?<day>\d\d)T` + String.raw`(?<hour>\d\d)(?<minute>\d\d)(?<second>\d\d)(?<zone>Z)$`].map(item => new RegExp(item));
function fe(e) {
  let o = String(e ?? "").trim();
  if (ep.test(o)) return {
    kind: "empty",
    why: "empty"
  };
  let r = Ad.test(o) ? Number(o) : NaN,
    s = ap[String(Math.trunc(r)).length];
  if (!Number.isNaN(r) && s !== void 0) return $e(r * s, Yx);
  for (let n of cp) {
    let f = n.exec(o)?.groups;
    if (f) return dp(f);
  }
  let m = Id.exec(o)?.groups;
  return m ? lp(m) : W("not a time");
}
var description = `Draws one chart from data you already have, and answers with what was read, drawn and left out. The person sees the chart, not this answer: tell them the headline number and pass on the "note:" lines.
The data is a table under 64 KiB: JSON records, CSV, TSV, a markdown or SQL table, aligned shell output. Name x and y. You may leave them out where there is one way to read it: metric results from Prometheus, Grafana and Datadog (these may be charted unasked), one column of times beside nothing but numbers, or beside one column of names too where the times repeat, or one column of names beside one of numbers (bars). Nothing is guessed: a call that leaves a choice open is refused with the columns that were found, so call again. Rows are not counted or put in buckets of time: pass counts. ${tr}.
It reads no file, and no result that the host cut or saved to a file: query less. A file that a tool read comes with a number before each line: pass its rows as data, without the numbers.`;
var ic = {
  name: "chart",
  description: description,
  inputSchema: inputSchema
};
var Mo = e => ({
  ...e,
  form: "bars",
  log: void 0
});
function ie(e) {
  return typeof e === "string" || typeof e === "number" || typeof e === "boolean" ? e : e === void 0 || e === null ? null : JSON.stringify(e);
}
var wo = (e, o) => e.map(item => o.get(item) ?? null);
var ko = [{
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
var Po = e => Ee(e).kind === "unread" && fe(e).kind === "unread";
function Do(e, o) {
  let [t] = S(e, o);
  return j(t) ? Object.entries(t).map(([p, m]) => [p, typeof m === "string" ? me(m) : m]) : t === void 0 || t === "*" ? [] : [[o, me(String(t))]];
}
var Uo = [{
  name: "Prometheus",
  series: "[]",
  labels: ["metric"],
  time: "values.[].0",
  value: "values.[].1"
}, {
  name: "Datadog",
  series: "series.[]",
  labels: ["metric", "scope"],
  time: "pointlist.[].0",
  value: "pointlist.[].1",
  unit: "unit.[].short_name"
}, {
  name: "named-series",
  series: "series.[]",
  labels: ["name"],
  time: "data.[].0",
  value: "data.[].1"
}, {
  name: "Datadog-buckets",
  series: "data.buckets.[]",
  labels: ["by"],
  time: "computes.*.[].time",
  value: "computes.*.[].value"
}, {
  name: "Graphite",
  series: "[]",
  labels: ["target"],
  time: "datapoints.[].1",
  value: "datapoints.[].0"
}, {
  name: "CloudWatch",
  series: "MetricDataResults.[]",
  labels: ["Label"],
  time: "Timestamps.[]",
  value: "Values.[]"
}, {
  name: "Cloud-Monitoring",
  series: "timeSeries.[]",
  labels: ["metric.labels"],
  time: "points.[].interval.endTime",
  value: "points.[].value.*"
}, {
  name: "Cost-Explorer",
  series: "",
  labels: [],
  time: "ResultsByTime.[].TimePeriod.Start",
  value: "ResultsByTime.[].Total.*.Amount",
  unit: "ResultsByTime.0.Total.*.Unit"
}];
var hp = "Grafana";
var Mc = [...Uo.map(item => item.name), hp];
var Tp = e => e.every(item => item.cellsByKey.every(([, t]) => t.length === item.pointCount));
var Sp = (e, pointlist) => ({
  metric: S(e, "expression")[0],
  scope: S(e, "scope")[0],
  pointlist: pointlist
});
var gp = (e, o) => (t, r) => [e + r * o, t];
function Op(e) {
  let o = fe(String(S(e, "start_time")[0]));
  return o.kind === "time" && o.isZoned ? S(e, "values").flatMap(item => String(item).split(",")).map(gp(o.ms, Number(S(e, "interval_ms")[0]))) : [];
}
var _p = e => Sp(e, [...Op(e), ...S(e, "binned.[]").map(item => [S(item, "start_time")[0], S(item, "avg")[0]])]);
function Cp(e) {
  return S(e, "[].expression").length > 0 ? {
    series: S(e, "[]").map(item => _p(item))
  } : e;
}
function so(e) {
  let o = Ee(e),
    {
      kind: kind
    } = o.kind === "unread" ? fe(e) : o;
  return kind === "unread" ? "text" : kind;
}
function Lp(name, cells) {
  let cellsByKind = z(cells, so),
    r = [...cellsByKind.keys()].filter(item => item !== "empty");
  return {
    name: name,
    cells: cells,
    cellsByKind: cellsByKind,
    soleKind: r.length === 1 ? r[0] : void 0
  };
}
var po = e => e.columns.map((item, index) => Lp(item, e.rows.map(item => item[index] ?? null)));
function mo(e, o) {
  let [t, ...r] = e.columns.filter(item => item.toLowerCase() === o.toLowerCase());
  return t !== void 0 && r.length === 0 ? t : o;
}
var Ep = e => e.every(item => so(item.name) === "text") || e.some(item => item.name !== "" && !item.cellsByKind.has(so(item.name)));
var Ge = e => e.soleKind === "text" && (e.cellsByKind.get("text") ?? []).every(Qt);
var Gc = 262144;
var sr = 200;
var Fo = 3;
var Re = (e, o) => e > sr || e * o > Gc;
var zc = {
  line: "line",
  columns: "columns",
  bars: "bars",
  sparks: "line",
  share: "bars"
};
var Rp = e => o => mo(e, o);
var Ap = (form, x_2, t) => ({
  form: form,
  x: x_2,
  ...t
});
var Ip = e => /\d/.test(String(e));
var pr = e => o => o !== e;
var Qc = ". It was read as a metrics format, into the columns below: x and y can be left out";
var Mp = (e, o) => ({
  code: "no_such_column",
  why: `it has no column ${e.join(", ")}` + (o.roles ? Qc : "")
});
var wp = (e, o) => e.length === 0 || e.length === 1 && new Set(o.cells).size < o.cells.length;
var kp = (e, o) => o === "bars" ? e.length === 1 : e.length >= 1;
function mr(e = null) {
  let o = fe(e);
  return o.kind === "time" ? o.ms : void 0;
}
var Pp = (e, o) => e.cells.some((item, index) => mr(item) !== mr(o.cells[index]));
var nr = e => e.name;
function Dp(e, o) {
  let t = e.filter(item => item.name !== ""),
    r = t.filter(item => item.soleKind === "text"),
    s = t.filter(item => item.soleKind === "number"),
    p = t.filter(item => item.cellsByKind.get("time")?.length === item.cells.length && new Set(item.cells).size >= Fo),
    m = p.length > 0,
    [n, ...f] = m ? p : r;
  if (!(n !== void 0 && f.length === 0)) return;
  let i = m ? s.filter(item => Pp(item, n)) : s,
    x = r.filter(item => item !== n),
    form_2 = o ?? (m ? "line" : "bars");
  return 1 + x.length + s.length === t.length && wp(x, n) && (m || form_2 === "bars") && (o !== void 0 || !Ge(n)) && kp(i, form_2) ? {
    form: form_2,
    x: n.name,
    y: i.map(nr),
    by: x.map(nr)
  } : void 0;
}
function Up(e, o) {
  let t = e.find(item => item.name === o);
  return t?.soleKind === "text" && !Ge(t);
}
var Fp = (e, o) => Up(e, o) ? "bars" : "line";
function Bp(e, o) {
  let t = o.form === void 0 ? void 0 : zc[o.form],
    r = t === "bars" ? void 0 : e.roles,
    s = r ? [] : po(e),
    p = r ?? Dp(s, t),
    m = o.x === void 0 ? p?.x : mo(e, o.x),
    n = Rp(e),
    y = X(o.y?.map(n) ?? p?.y ?? []).filter(pr(m)),
    by_2 = (o.by?.map(n) ?? (o.combine === void 0 ? p?.by : void 0) ?? []).filter(pr(m));
  if (e.rows.length === 0) return {
    code: "no_rows",
    why: "it has no rows"
  };
  if (new Set(e.columns).size < e.columns.length) return {
    code: "names_repeat",
    why: "two of its columns share a name, so a name does not pick one. Pass the rows as data, each column under a name of its own"
  };
  if (m === void 0) {
    let u = s.find(Ge);
    if (u) return {
      code: "dates_unread",
      why: `${u.name} looks like dates, in a spelling that is not read (${u.cells[0]}). ${tr}`
    };
    let d = s.filter(item => item.soleKind === "time"),
      c = d[0],
      O = new Set(c?.cells).size;
    if (c && d.length === 1 && O < Fo) return {
      code: "few_times",
      why: `${c.name} holds ${K(O, "time")}, too few to find the time axis unasked (that takes ${Fo}). Name x and y`
    };
    if (!((e.listColumns ?? []).length > 0 || s.some(item => item.cells.some(Ip)))) return {
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
  let x = [m, ...y, ...by_2].filter(item => !e.columns.includes(item));
  return x.length > 0 ? Mp(x, e) : Ap(t ?? p?.form ?? Fp(s, m), m, {
    y: y,
    by: by_2
  });
}
var ar = e => e.path ?? e.source;
var jp = (source, o, t) => ({
  source: source,
  y: X(o.flatMap(item => item.y)),
  points: t.flatMap(item => pe(item.pointCount).map(s => Object.fromEntries([...item.labels, ...item.cellsByKey.map(([p, m]) => [p, m[s]])]))),
  isSeries: !0
});
function jo(e, o) {
  let t = Re(Math.max(0, ...o.map(item => item.labels.length + item.cellsByKey.length)), sum(o.map(item => item.pointCount)));
  return jp(e, o, t ? [] : o);
}
var Wp = e => S(e, "schema.fields.[]").map((item, index) => ({
  name: String(S(item, "name")[0]),
  displayName: S(item, "config.displayNameFromDS")[0],
  type: S(item, "type")[0],
  labels: S(item, "labels")[0],
  unit: me(String(S(item, "config.unit")[0] ?? "")),
  cells: S(e, `data.values.${index}.[]`)
}));
function Wo(e, o) {
  return o !== "" && Ee(`1 ${o}`).kind === "number" && e !== null ? `${e} ${o}` : e;
}
var vp = (e, o, t) => r => {
  let s = r.displayName ?? S(e, "schema.name")[0],
    m = t && Boolean(s) ? String(s) : `${r.name} ${S(e, "schema.refId")[0]}`;
  return {
    ...r,
    name: o ? r.name : m,
    cells: r.cells.map(item => Wo(item, r.unit))
  };
};
function Hp(e, o, t) {
  let r = Wp(e),
    s = r.filter(item => item.type === "number"),
    p = r.filter(item => item.type === "string"),
    m = r.find(item => item.type === "time")?.cells ?? [];
  return [...z(s.map(vp(e, t, o && s.length === 1)), n => JSON.stringify(n.labels)).values()].map(item => ({
    labels: Do(item[0], "labels"),
    y: item.map(item => item.name),
    pointCount: m.length,
    cellsByKey: [...[...p, ...item].map(item => [item.name, item.cells]), ["time", m]]
  }));
}
function $p(e) {
  let o = S(e, "results.*"),
    t = (o.length > 0 ? o : S(e, "data")).map(item => S(item, "frames.[]"));
  return {
    ...jo(hp, t.flatMap(item => item.flatMap(s => Hp(s, item.length === 1, t.length === 1)))),
    isSeries: t.flat().every(item => String(S(item, "schema.meta.type")[0]).startsWith("timeseries"))
  };
}
var Gp = e => o => Wo(o, e);
function Kp(e, o) {
  let unit_6 = o.unit;
  return unit_6 !== void 0 ? me(S(e, unit_6).join("/")) : "";
}
var Xp = (e, o, t) => ({
  labels: o.labels.flatMap(item => Do(e, item)),
  y: ["value"],
  pointCount: t.length,
  cellsByKey: [["time", S(e, o.time)], ["value", t]]
});
var zp = (e, o) => S(e, o.series).map(item => Xp(item, o, S(item, o.value).map(Gp(Kp(item, o)))));
function by(e) {
  let o = $p(e);
  if (o.points.length > 0) return o;
  let r = Cp(e);
  for (let s of Uo) {
    let p = zp(r, s),
      m = jo(s.name, Tp(p) ? p : []);
    if (m.points.length > 0) return m;
  }
  return;
}
var Yp = "aligned columns";
var source_6 = "JSON lines";
var source_3 = "JSON";
var Vp = "columns and rows";
var Zp = " with no header";
var wy = '<field name="';
var qp = "</row>";
var ir = "<row>";
var Qp = "XML rows";
var ky = [...ko.map(item => item.source), Yp, Vp, source_3, source_6, Qp, ...Mc];
var no = 2;
var Dy = 32;
var em = 2;
var le = (source_2, columns, rows) => ({
  source: source_2,
  columns: columns,
  rows: rows,
  hasMadeUpNames: !1,
  isCut: !1
});
var jy = /\n(?: *\n)+/;
var vy = /^[\]}]\s*$/;
var Hy = /^\s*[[{]./;
var $y = /^[[{]\s*$/;
var Gy = /^\s*\[?\{"/;
var Ho = /^[-+|:=\s\u2500\u2502\u250C\u252C\u2510\u251C\u253C\u2524\u2514\u2534\u2518]+$/;
var Xy = /^[*`]+|(?<![*`])[*`]+$/g;
var zy = /^\[([^\]]*)\]\([^)]*\)$/;
var Jy = /^\uFEFF|\u001B\[[0-9;]*m/g;
var Zy = /<results\b[^>]{0,200}\btruncated="true"/;
var qy = /^(?<name>[^"]*)"(?<attributes>[^>]*?)(?:\/>|>(?<text>.*?)<\/field>)/s;
var Qy = /(?:^|\s)null="true"/;
var eh = /&#(?:x([0-9a-f]{1,6})|(\d{1,7}));/gi;
var th = /[.\u2026 \t]*\[[^\]\n]{0,99}truncated[^\]\n]{0,99}\][. \t]*/;
var rh = /[\u2502|] *[\d,]+ rows \([\d,]+ shown\).*/;
var om = (rows_2, o) => ({
  source: `${o}${Zp}`,
  hasMadeUpNames: !0,
  isCut: !1,
  columns: [...(rows_2[0] ?? []).keys()].map(item => `column ${item + 1}`),
  rows: rows_2
});
function $o(e, o) {
  let t = le(o, e[0] ?? [], e.slice(1));
  return Ep(po(t)) ? t : om(e, o);
}
var Go = () => ({
  source: "a cut text",
  columns: [],
  rows: [],
  hasMadeUpNames: !1,
  isCut: !0
});
var tm = e => e.length > 1 && e.every(j) && X(e.map(item => Object.keys(item).join())).length === 1;
function rm(e) {
  let o = e.findIndex(item => $y.test(item));
  return o >= 0 ? e.slice(o, e.findLastIndex(r => vy.test(r)) + 1) : [];
}
function sm(e, o) {
  let t = [e];
  for (let r = 0; r <= o; r += 1) t = t.flatMap(item => typeof item === "object" && item !== null ? Object.values(item) : []);
  return t.length > 0;
}
function Ko(e) {
  try {
    let o = JSON.parse(e);
    return sm(o, Dy) ? void 0 : o;
  } catch {
    return;
  }
}
function pm(e) {
  let o = Ko(e);
  if (o !== void 0) return {
    values: [o],
    unparsedLines: 0
  };
  let t = e.split(`
`),
    r = Ko(rm(t).join(`
`));
  if (r !== void 0) return {
    values: [r],
    unparsedLines: 0
  };
  let s = t.filter(item => Hy.test(item)),
    p = s.map(item => Ko(item));
  return {
    values: p.filter(item => item !== void 0),
    unparsedLines: ps(U(s, p), ([m, n]) => n === void 0 && Gy.test(m))
  };
}
var mm = e => o => Array.isArray(o) && o.length === e && !o.some(j);
var nm = (path, columns_2, rows_3) => ({
  source: source_3,
  path: path,
  columns: columns_2,
  rows: rows_3,
  hasMadeUpNames: !1,
  isCut: !1
});
var am = e => o => (j(o) ? e.map(item => o[item]) : S(o, "[]")).map(ie);
var fm = (column_2, cell) => ({
  column: column_2,
  cell: cell,
  isList: !1
});
var im = column_3 => ({
  column: column_3,
  cell: null,
  isList: !0
});
var lr = (e, o) => Object.entries(e).flatMap(([t, r]) => {
  let s = `${o}${t}`;
  if (typeof r !== "object" || r === null) return [fm(s, ie(r))];
  return Array.isArray(r) && r.some(item => typeof item === "object" && item !== null) ? [im(s)] : lr(r, `${s}.`);
});
function xr(e, source_4, path_2) {
  let r = [],
    s = 0;
  for (let i of e) {
    let x = lr(i, "");
    if (r.push(x), s += x.length, Re(1, s)) return [];
  }
  let p = r.flat(),
    columns_3 = X(p.map(item => item.column));
  if (Re(columns_3.length, e.length)) return [];
  let rows_4 = r.map(item => wo(columns_3, new Map(item.map(item => [item.column, item.cell])))),
    listColumns = X(p.filter(item => item.isList).map(item => item.column));
  return [{
    source: source_4,
    path: path_2,
    columns: columns_3,
    rows: rows_4,
    listColumns: listColumns,
    hasMadeUpNames: !1,
    isCut: !1
  }];
}
var lm = e => o => pe(e).map(item => ie(o[item]));
var xm = e => Array.isArray(e) && !e.some(item => typeof item === "object" && item !== null);
function um(e, path_3) {
  let t = e.reduce((acc, item) => Math.max(acc, S(item, "[]").length), 0);
  if (!(e.length >= em && t >= no && !Re(t, e.length) && e.every(xm))) return [];
  let [s = [], ...p] = e.map(lm(t)),
    m = le(source_3, s.map(item => String(item ?? "")), p);
  return Ep(po(m)) ? [{
    ...m,
    path: path_3
  }] : [];
}
var dm = (e, by_3) => ({
  form: "line",
  x: "time",
  y: e.y,
  by: by_3
});
function cm(e) {
  let o = ["time", ...e.y];
  return t => ({
    ...t,
    isSeries: e.isSeries,
    roles: dm(e, t.columns.filter(item => !o.includes(item)))
  });
}
function Xo(e, o, t = {}) {
  let {
    path: path_4,
    source: source_5 = source_3
  } = t;
  if (typeof e === "string") return o(e);
  if (typeof e !== "object" || e === null) return [];
  let p = by(e);
  if (p) {
    let u = xr(p.points, p.source);
    return X(p.points.map(item => item.time)).length < Fo ? u : u.map(cm(p));
  }
  let m = S(e, "columns.[]").map(item => String(S(item, "name")[0] ?? item)),
    n = S(e, "rows.[]");
  if (m.length > 0 && !Re(m.length, n.length)) return [le(Vp, m, n.map(am(m)))];
  if (typeof S(e, "range")[0] === "string" && S(e, "majorDimension")[0] === "ROWS") return um(S(e, "values.[]"), path_4 === void 0 ? "values" : `${path_4}.values`);
  if (Array.isArray(e)) return e.length > 0 && e.every(j) ? xr(e, source_5, path_4) : [];
  let i = Object.values(e),
    x = S(i[0], "[]").length;
  return i.length >= no && i.every(mm(x)) ? [nm(path_4, Object.keys(e), pe(x).map(item => i.map(d => ie(d[item]))))] : Object.entries(e).flatMap(([u, d]) => Xo(d, o, {
    path: path_4 === void 0 ? u : `${path_4}.${u}`
  }));
}
var ym = e => o => e.map(item => o.slice(item.from, item.until).trim());
var Ie = (e, o) => e.map(item => item.slice(o.from, o.until).padEnd(o.until - o.from));
var hm = (e, o) => !o.some(item => item.trim().includes(" ")) && !e.some(item => item.trim().includes("  ")) && (!e.some(item => /^ +\S/.test(item)) || !e.some(item => /\S +$/.test(item)));
var Tm = (e, o) => (t, r) => {
  let s = {
    from: t.from,
    until: r.until
  };
  return t.until === r.from - 1 && hm(Ie(e, s), Ie(o, s));
};
var Sm = e => (e[0] ?? "").trim().split(/ +/).every(Po);
var gm = e => o => Ie(e, o).slice(1).some(Po);
var Om = (e, o, t) => r => {
  let [s = "", ...p] = Ie(e, r);
  return (s.trim() !== "" || !(t && r.from !== o[0]?.from)) && p.join("").trim() !== "";
};
function _m(e, o, t) {
  let r = gm(o),
    s = Om(o, e, Sm(o)),
    p = Tm(o, t),
    m = U(e, e.slice(1)).filter(([a, i]) => a.until === i.from - 1),
    n = m.length < e.length - 1 && m.every(([a, i]) => p(a, i)),
    f = [];
  for (let a of e) {
    let i = f.at(-1);
    i && p(i, a) && (n || !s(i) || !s(a) || r(i) && r(a)) ? i.until = a.until : f.push({
      ...a
    });
  }
  return f;
}
function Cm(e) {
  let o = [];
  for (let m of e) for (let n = 0; n < m.length; n++) o[n] ||= m[n] !== " ";
  let t = [...o.keys()].filter(item => o[item]),
    r = U(t.filter(item => !o[item - 1]), t.filter(item => !o[item + 1])).map(([m, n]) => ({
      from: m,
      until: n + 1
    }));
  if (Re(r.length, e.length)) return [];
  let p = e.filter(item => !Ho.test(item));
  return p.map(ym(_m(r, p, e.filter(item => Ho.test(item)))));
}
var Lm = ([e = [], ...o]) => o.length > 0 && e.length >= no && [...e.keys()].some(item => o.every(r => Ee(r[item] ?? "").kind === "number"));
var Em = e => e !== "" && (!Ho.test(e) || e.trim().includes(" "));
function bm(e) {
  let o = e.split(jy).map(item => Cm(item.split(`
`).filter(Em))).filter(Lm);
  return {
    lineCount: o.flat().length,
    tables: o.map(item => $o(item, Yp))
  };
}
function Rm(e) {
  let o = [],
    t = [];
  for (let [r, s] of e.entries()) {
    let p = s.length >= no && s.length <= sr && s.some(item => item !== ""),
      m = t[0]?.length ?? s.length;
    if (p && s.length === m) {
      t.push(s);
      continue;
    }
    if (!(p && e[r + 1]?.length === m)) o.push(t), t = p ? [s] : [];
  }
  return o.push(t), o.filter(item => item.length >= em);
}
function Am(e, o) {
  let regExp_6 = new RegExp(`[ ]*(?:"(?<quoted>(?:[^"]|"")*)"[ ]*|(?<plain>[^\\n]*?))(?<end>${o.pattern.source}|\\n)`, "gy"),
    r = [],
    s = [];
  for (let {
    groups = {}
  } of `${e}
`.matchAll(regExp_6)) if (s.push(groups.quoted?.replaceAll('""', '"') ?? groups.plain ?? ""), groups.end === `
`) r.push(s), s = [];
  return [...r, s].map(item => (o.pattern.test("|") && item[0] === "" && item.at(-1) === "" ? item.slice(1, -1) : item).map(item => item.trim().replace(Xy, "").replace(zy, "$1")));
}
var Im = unparsedLines => o => ({
  ...o,
  unparsedLines: unparsedLines
});
function Nm(e, o) {
  let t = Am(e, o).filter(item => !Ho.test(item.join(""))),
    r = Rm(t),
    s = r.flat();
  return {
    lineCount: s.flatMap(item => item.join("").split(`
`)).length,
    tables: r.map(item => $o(item, o.source)).map(Im(ps(t, p => p.length >= no) - s.length))
  };
}
var Mm = e => o => o.lineCount === e;
function wm(e) {
  let o = [...ko.filter(item => item.pattern.test(e)).map(item => Nm(e, item)), bm(e)];
  return o.find(Mm(Math.max(...o.map(item => item.lineCount))))?.tables ?? [];
}
var km = e => Zy.test(e) || e.lastIndexOf(ir) > e.lastIndexOf(qp);
var ur = e => e.replace(eh, (o, t, r) => {
  let s = t === void 0 ? Number(r) : Number.parseInt(t, 16);
  return s <= 1114111 ? String.fromCodePoint(s) : o;
}).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&amp;", "&");
function Pm(e) {
  let o = qy.exec(e)?.groups;
  return o !== void 0 ? [[ur(o.name ?? ""), Qy.test(o.attributes ?? "") ? null : ur(o.text ?? "")]] : [];
}
function Dm(e) {
  let o = e.slice(e.lastIndexOf(ir));
  return new Map(o.split(wy).slice(1).flatMap(Pm));
}
function Um(e) {
  if (!e.trimStart().startsWith("<")) return [];
  let t = e.split(qp).slice(0, -1).filter(item => item.includes(ir)).map(Dm),
    r = X(t.flatMap(item => [...item.keys()]));
  if (!(r.length > 0 && !Re(r.length, t.length))) return [];
  return km(e) ? [Go()] : [le(Qp, r, t.map(item => wo(r, item)))];
}
var Fm = [/<persisted-output>/, /<truncated-output>/, /Output too large.*/, /\(output truncated[^)\n]*\)/, rh, th, /Error: result \(.* exceeds maximum allowed tokens.*/];
var regExp_7 = new RegExp(`^(?:${Fm.map(item => item.source).join("|")})$`, "im");
var jm = unparsedLines_2 => o => ({
  unparsedLines: unparsedLines_2,
  ...o
});
function dr(e) {
  let o = e.replace(Jy, "").replaceAll(`\r
`, `
`);
  if (regExp_7.test(o)) return [Go()];
  let r = Um(o);
  if (r.length > 0) return Co(r);
  let {
    values: values,
    unparsedLines: unparsedLines_3
  } = pm(o);
  if (values.length === 0) return Co(wm(o));
  let m = tm(values);
  return Co((m ? Xo(values, dr, {
    source: source_6
  }) : values.flatMap(item => Xo(item, dr))).map(jm(unparsedLines_3)));
}
var Yo = e => e.toLowerCase().replaceAll(" ", "_");
var Wm = "json_path";
var format = "unread";
function Hm(e) {
  return e.path !== void 0 ? Wm : Yo(e.source.replace(Zp, ""));
}
var $m = [...ky.map(Yo), Wm, format];
var Vo = e => e < 1 ? 0 : 2 ** Math.floor(Math.log2(e));
var mT = ["bad_call", "no_result", "data_not_found", "too_long", "cut_short", "no_table_read", "table_unpicked", "no_rows", "names_repeat", "dates_unread", "few_times", "no_numbers", "no_x", "no_y", "no_such_column", "units_mixed", "units_differ", "zones_mixed", "x_not_times", "column_unread", "rows_share_x", "no_values", "bars_partly_unread", "share_not_summed", "share_not_whole", "log_not_line", "uneven_step", "column_below_zero", "failed"];
var iT = ["off", "skips_servers"];
var lT = ["last_result", "result_id", "text", "rows", "none"];
var xT = (e, o) => ({
  event: "easel_chart",
  props: {
    outcome: {
      value: e.outcome,
      of: ["drawn", ...mT]
    },
    form: {
      value: e.form,
      of: [...Object.keys(M), "unnamed"]
    },
    format: {
      value: e.format,
      of: $m
    },
    data_from: {
      value: e.dataFrom,
      of: lT
    },
    series_bucket: Vo(e.seriesCount),
    point_bucket: Vo(e.pointCount),
    elapsed_ms_bucket: Vo(o.elapsedMs),
    is_form_named: e.isFormNamed,
    has_left_out: e.hasLeftOut,
    is_form_replaced: e.isFormReplaced,
    is_asked: o.isAsked,
    is_in_subagent: o.isInSubagent,
    is_on_terminal: o.surfaces.includes("terminal"),
    is_on_app: o.surfaces.some(item => item !== "terminal")
  }
});
function Km(feature, o) {
  if (o.hasLeftOut) return {
    feature: feature,
    kind: "sad",
    reason: "data_left_out"
  };
  return o.isFormReplaced ? {
    feature: feature,
    kind: "sad",
    reason: "form_replaced"
  } : {
    feature: feature,
    kind: "ok"
  };
}
var Xm = (feature_2, o) => ({
  feature: feature_2,
  kind: "bad",
  reason: o.outcome
});
function yT(e, o) {
  let t = o ? "easel_chart" : "easel_auto";
  return e.outcome === "drawn" ? Km(t, e) : Xm(t, e);
}
var ao = {
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
var ST = value_2 => ({
  event: "easel_settings",
  props: {
    auto_charts: {
      value: value_2,
      of: iT
    }
  }
});
var zm = (e, dataFrom) => ({
  ...ao,
  form: e.form ?? "unnamed",
  isFormNamed: e.form !== void 0,
  dataFrom: dataFrom
});
function Ym(e, o, t) {
  if (o.kind === "data") return o.series.length <= (t.top ?? M.bars.defaultCount) ? o : e;
  return {
    ...o,
    problem: {
      ...o.problem,
      why: `${t.x ?? "x"} holds names, not times, so bars were read. ` + o.problem.why
    }
  };
}
var Jm = 12;
var AT = 32;
var IT = 3;
var Zo = (e, o, t = "") => e > 0 ? [`${K(e, o)}${t}`] : [];
var wT = !0;
var Zm = e => e.every(item => Ee(item, wT).kind === "number");
var qm = e => Zm(e) ? ", read as numbers if named as y" : "";
var Qm = e => e.slice(0, IT).map(item => Y(String(item), AT));
var en = e => ` (${Qm(e).join(", ")})${qm(e)}`;
var on = e => e.map(item => fe(item)).every(item => item.kind === "time" && item.isZoned);
var tn = e => on(e) ? ", read as times if named as x" : "";
function rn(e) {
  let o = X(e.cellsByKind.get("text") ?? []),
    t = e.cellsByKind.get("number") ?? [];
  return [...Zo(t.length, "number", tn(t)), ...Zo(e.cellsByKind.get("time")?.length ?? 0, "time"), ...Zo(o.length, "text", en(o))];
}
var sn = e => e ? "lists, which are not read. Pass one row for each item as data, with the fields beside the list repeated" : "empty";
var pn = (e, o = []) => `${e.name}: ` + (rn(e).join(", ") || sn(o.includes(e.name)));
var mn = e => `${ar(e)}, ${K(e.rows.length, "row")}:`;
var nn = (e, o) => t => {
  let r = go(po(t).map(item => pn(item, t.listColumns)), e, "more column");
  return o ? [mn(t), ...r] : r;
};
var KT = e => e.flatMap(nn(Math.floor(Jm / e.length), e.length > 1));
var XT = !0;
function qo(e) {
  let o = e.readings.filter(item => item.value !== null).map(item => JSON.stringify([item.groupLabels, item.ms]));
  return new Set(o).size < o.length;
}
var JT = 5;
var fn = 120;
var ln = 3;
var xn = 3;
var ZT = 65536;
var QT = 240;
var eS = 8;
var tS = 2;
var sS = /[\]}]\s*$/;
var pS = /^\s*[[{]/;
var mS = /^[^\p{L}\p{N}]*\p{N}/u;
var un = e => o => e.every(item => o.columns.includes(mo(o, item)));
function dn(e, o) {
  let t = Bp(e, o);
  return !("code" in t) && t.form !== "bars";
}
var cn = e => [e.x ?? [], e.y ?? [], e.by ?? []].flat();
function yn(e, o) {
  let r = e.length === 1 ? e : e.filter(un(cn(o)));
  return r.length === 1 ? r : r.filter(item => dn(item, o));
}
var Qo = e => X(e).slice(0, xn).join(", ");
function hn(e, o) {
  let {
      unreadXCells: unreadXCells
    } = o,
    r = unreadXCells.filter(Qt),
    s = o.readings.length === 0;
  if (r.length > 0 && (s || r.length === unreadXCells.length)) return {
    code: "dates_unread",
    why: `${e.x} holds dates in a spelling that is not read (${Qo(r)}). ${tr}`
  };
  let m = unreadXCells.filter(item => Ee(item).kind === "number");
  if (m.length > 0) return {
    code: "x_not_times",
    why: `${e.x} holds numbers that are not times (${Qo(m)}). A line, columns and sparks run over times. For one bar for each, pass form: "bars"`
  };
  return s && unreadXCells.length > 0 ? {
    code: "x_not_times",
    why: `${e.x} holds names, not times (${Qo(unreadXCells)}). A line, columns and sparks run over times: for names, pass form: "bars"`,
    fitsBars: !0
  } : void 0;
}
function Tn({
  reading: reading,
  roles: roles,
  request: request,
  series: series
}) {
  if (new Set(reading.readings.map(item => item.isZoned)).size > 1) return {
    code: "zones_mixed",
    why: `${roles.x} mixes times that name a zone with times that name none`
  };
  let p = hn(roles, reading);
  if (p !== void 0) return p;
  let m = reading.droppedColumns.find(item => item.isEntireColumn);
  if (m !== void 0) return {
    code: "column_unread",
    why: `a whole column was not read. ${m.sentence}`
  };
  if (request.combine === void 0 && qo(reading)) return {
    code: "rows_share_x",
    why: `several rows share one ${roles.x}; name the columns to split by, or how to combine them (sum, mean, max, min)`
  };
  if (!(series.length > 0)) return {
    code: "no_values",
    why: `no cell of ${roles.y.join(", ")} holds a number`
  };
  let [a] = reading.droppedColumns;
  return roles.form === "bars" && a !== void 0 ? {
    code: "bars_partly_unread",
    why: `bars rank a whole list, and part of this one was not read. ${a.sentence}`
  } : void 0;
}
var Sn = {
  sum: sum,
  mean: e => sum(e) / e.length,
  max: e => Math.max(...e),
  min: e => Math.min(...e)
};
var yS = "the last point may still be filling: its period had not ended at the call";
var Sr = "Ask for fewer rows or a shorter span, then chart that";
function gn({
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
var On = (e, o) => e.hasMadeUpNames && o.form === "bars" ? [] : o.y;
function _n(e) {
  let label = e.mark.label === void 0 ? "" : e.mark.label,
    t = fe(e.mark.at),
    r = `${label === "" ? "mark" : `mark ${label}`} at ${e.mark.at} not drawn:`;
  if (!(e.drawnForm !== "bars" && e.drawnForm !== "share")) return `${r} it has no times`;
  if (e.drawnForm === "sparks") return `${r} sparks have no time axis`;
  if (t.kind !== "time") return `${r} ${t.why}`;
  if (t.ms < e.axisSpan.fromMs || t.ms > e.axisSpan.untilMs) return `${r} outside the times drawn`;
  return t.isZoned !== e.isZoned ? `${r} name a zone in both the mark and the times, or in neither` : {
    ms: t.ms,
    label: label
  };
}
var Cn = e => (o, t) => {
  let r = e.get(o);
  return r === void 0 ? null : t[r] ?? null;
};
var Ln = (e, o, t) => (column_4, s) => ({
  ms: e.ms,
  isZoned: e.isZoned,
  column: column_4,
  groupLabels: t.y.length > 1 ? [...o, column_4] : o,
  value: s.kind === "number" ? s.value : null,
  unit: s.kind === "number" ? s.unit : null
});
function En(e, o) {
  let unit_7 = o.unit;
  return e.kind === "number" && !e.unit && !!unit_7 ? or(e.value, unit_7) : e;
}
var bn = W("a log scale cannot show it");
var bS = {
  kind: "time",
  ms: 0,
  isZoned: !1
};
function An(e, o, t) {
  let r = Cn(new Map(e.columns.map((item, index) => [item, index]))),
    s = e.rows[0] ?? [],
    p = o.by.filter(item => e.rows.some(u => r(item, u) !== r(item, s))),
    m = o.form === "bars",
    n = m ? [o.x, ...p] : p,
    readings = [],
    a = [],
    unreadXCells_2 = [];
  for (let l of e.rows) {
    let u = m ? bS : fe(r(o.x, l));
    if (u.kind === "unread") unreadXCells_2.push(r(o.x, l));
    if (u.kind !== "time") {
      a.push({
        column: o.x,
        quote: `${r(o.x, l)} (${u.why})`
      });
      continue;
    }
    let O = Ln(u, n.map(item => String(r(item, l) ?? "") || `no ${item}`), o);
    for (let column_5 of o.y) {
      let E = r(column_5, l),
        C = En(Ee(E, t.y !== void 0), t),
        L = t.log === !0 && C.kind === "number" && C.value <= 0 ? bn : C;
      if (L.kind === "unread") a.push({
        column: column_5,
        quote: `${E} (${L.why})`
      });
      readings.push(O(column_5, L));
    }
  }
  let units = new Map();
  for (let [l, u] of z(readings, d => d.column)) units.set(l, X(u.map(item => item.unit).filter(item => item !== null)));
  return {
    readings: readings,
    units: units,
    sharedLabels: o.by.filter(item => !p.includes(item)).map(item => String(r(item, s) ?? "")),
    droppedColumns: [...z(a, l => l.column)].map(([l, u]) => ({
      isEntireColumn: u.length === e.rows.length,
      sentence: `${K(u.length, "cell")} of ${l} not read: ` + u.slice(0, xn).map(item => item.quote).join(", ")
    })),
    unreadXCells: unreadXCells_2
  };
}
var Or = e => e.some(item => item.value !== null);
var In = (e, o, t) => e || As(o, t);
var Nn = (e, o) => ms_4 => {
  let r = (e.get(ms_4) ?? []).map(item => item.value).filter(item => item !== null);
  return {
    ms: ms_4,
    value: r.length > 0 ? o(r) : null
  };
};
var et = (e, o) => Y(e[0]?.groupLabels.join(" ") || o.fallbackName, fn);
var ot = e => X(e.map(item => item.ms)).toSorted((o, t) => o - t);
function Mn(e, o, t) {
  let r = ot(e);
  return {
    unit: o.reading.units.get(e[0]?.column ?? "")?.[0] ?? "",
    name: et(e, o),
    samples: (Hs(r, o, In(t, r, o.zone))?.periodStarts ?? r).map(Nn(z(e, s => s.ms), o.combine))
  };
}
function wn(e) {
  let series_3 = [],
    emptyNames = [],
    r = z(e.reading.readings, m => JSON.stringify(m.groupLabels)),
    times = ot([...r.values()].filter(Or).flat()),
    p = As(times, e.zone);
  for (let m of r.values()) Or(m) ? series_3.push(Mn(m, e, p)) : emptyNames.push(et(m, e));
  return {
    series: series_3,
    emptyNames: emptyNames,
    times: times,
    grid: Hs(times, e, p)
  };
}
var Ne = (problem, tables = []) => ({
  kind: "refused",
  problem: problem,
  tables: tables
});
var _r = (e, o) => Ne({
  ...o,
  why: `${ar(e)}: ${o.why}`
}, [e]);
function kn(e, o, t) {
  let s = e.length > eS ? K(e.length, "column") : e.join(", "),
    p = o.y === void 0;
  return Y((p ? t.sharedLabels : [s, ...t.sharedLabels]).filter(item => item !== "").join(" ") || s, QT);
}
function Pn(e) {
  let fromMs_2 = e.times[0] ?? 0;
  return {
    fromMs: fromMs_2,
    untilMs: e.times.at(-1) ?? fromMs_2,
    zone: e.zone
  };
}
var Dn = e => ({
  zone: e.zone,
  areTicks: !XT,
  fieldsBefore: []
});
function Un(e) {
  let dataSpan_2 = Pn(e),
    precision = Hu(e.times, e.zone),
    r = e.readAs === "columns" ? e.grid : null,
    s = e.readAs === "bars",
    p = to(X([dataSpan_2.fromMs, dataSpan_2.untilMs]), precision, Dn(e)).join(" \u2192 ");
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
function Fn(e, o, t) {
  let r = [...e.units.values()];
  if (r.some(item => item.length > 1)) {
    let n = r.flat().map(item => item || "none"),
      f = n.includes("none") && new Set(n).size === tS;
    return {
      code: "units_mixed",
      why: `the values of a column carry different units (${n.join(", ")}). ` + (f ? "Name what the bare numbers are in as unit" : "Convert them to one unit, or chart the rows of each unit in a call of its own")
    };
  }
  let p = z(e.units.keys(), n => e.units.get(n)?.[0] ?? "");
  return (o.form === "bars" || t.form === "sparks") && p.size > 1 ? {
    code: "units_differ",
    why: (t.form === "sparks" ? "sparks" : "bars") + " share one scale, and the y columns are in different units (" + [...p].map(([n, f]) => `${f.join(", ")} in ${n || "no unit"}`).join("; ") + "). Call once for each unit"
  } : void 0;
}
function Bn(e, request_3, t) {
  let roles_3 = Bp(e, request_3);
  if ("code" in roles_3) return _r(e, roles_3);
  let p = request_3.form ?? roles_3.form,
    reading_2 = An(e, roles_3, request_3),
    n = kn(On(e, roles_3), request_3, reading_2),
    isZoned_2 = reading_2.readings.some(item => item.isZoned),
    zone_3 = isZoned_2 ? t.zone : "UTC",
    {
      series: series_4,
      emptyNames: emptyNames_2,
      times: times_2,
      grid: grid
    } = wn({
      reading: reading_2,
      fallbackName: n,
      combine: Sn[request_3.combine ?? "sum"],
      zone: zone_3
    }),
    timeline_2 = Un({
      times: times_2,
      grid: grid,
      readAs: roles_3.form,
      zone: zone_3,
      isZoned: isZoned_2
    }),
    c = Fn(reading_2, roles_3, request_3) ?? Tn({
      reading: reading_2,
      roles: roles_3,
      request: request_3,
      series: series_4
    }) ?? gn({
      roles: roles_3,
      request: request_3,
      series: series_4,
      timeline: timeline_2
    });
  if (c !== void 0) return _r(e, c);
  let O = (request_3.marks ?? []).map(L => _n({
      mark: L,
      drawnForm: p,
      axisSpan: timeline_2.axisSpan,
      isZoned: isZoned_2
    })),
    T = isZoned_2 && grid !== null && t.nowMs !== null && t.nowMs >= timeline_2.dataSpan.untilMs && t.nowMs < grid.endMs,
    E = emptyNames_2.length > 0,
    leftOutNotes = go(reading_2.droppedColumns.map(item => item.sentence), JT, "more column"),
    notes = [...(E ? [`${emptyNames_2.length} with no value, not drawn: ` + Y(emptyNames_2.join(", "), fn)] : []), ...O.filter(item => typeof item === "string"), ...(T ? [yS] : [])];
  return {
    kind: "data",
    form: p,
    source: e.source,
    path: e.path,
    isSeries: e.isSeries === !0,
    subject: n,
    hasCombinedRows: qo(reading_2),
    series: series_4,
    timeline: timeline_2,
    marks: O.filter(item => typeof item !== "string").toSorted((L, he) => L.ms - he.ms),
    leftOutNotes: leftOutNotes,
    notes: notes
  };
}
function jn({
  rows: rows_5,
  listColumns: listColumns_2 = []
}) {
  return listColumns_2.length === 0 && rows_5.every(item => item.every(item => item === null || !(mS.test(String(item)) || Qt(item) || fe(item).kind === "time")));
}
function Cr(e, o, t) {
  if (e.length >= ZT) return Ne({
    code: "too_long",
    why: `The data is 64 KiB or longer: too long to chart, and it may be cut short. ${Sr}`
  });
  let s = dr(e);
  if (s.some(item => item.isCut)) return Ne({
    code: "cut_short",
    why: `That result was cut short or saved to a file, so part of it is missing. ${Sr}`
  });
  if (!(s.length > 0)) {
    let T = pS.test(e) && !sS.test(e);
    return Ne(T ? {
      code: "cut_short",
      why: `That result is JSON that does not close, so it was cut short. ${Sr}`
    } : {
      code: "no_table_read",
      why: `That result holds no rows: it has no table and no list of records of ${sr} columns or fewer. Pass the rows as data, as JSON records or as the text of a CSV, TSV or markdown table, with only the columns to chart`
    });
  }
  let [n, ...f] = yn(s, o);
  if (n === void 0 || f.length > 0) return Ne({
    code: "table_unpicked",
    why: `That result is not a table: there are ${s.length} in it. To pick one, name a column that only it has, or pass its rows as data`
  }, s.slice(0, ln));
  let i = Bn(n, o, t),
    x = n.unparsedLines ?? 0,
    l = s.filter(item => item !== n && !jn(item)),
    u = l.length > 0,
    d = x > 0,
    c = [...(u ? [K(l.length, "other table")] : []), ...(d ? [`${K(x, "line")} outside any table`] : [])];
  return i.kind === "refused" || c.length === 0 ? i : {
    ...i,
    leftOutNotes: [...i.leftOutNotes, "only part of that result is charted: it also holds " + c.join(" and ")]
  };
}
var ue = e => e.values[0] ?? 0;
var Lr = 1e9;
var Wn = 2;
var Er = 10;
var ig = 100;
var Me = 0.000000001;
var xg = 5;
var dg = 10;
var cg = 10;
var br = 1e6;
var hg = 1e4;
var Tg = 3;
var Sg = 2;
var gg = 2;
var Og = 12;
var Rr = 1000000000000;
var d_2 = 86400;
var h_2 = 3600;
var Eg = 0.000001;
var ms_5 = 0.001;
var min = 60;
var ns_3 = 0.000000001;
var PB_2 = 1000000000000000;
var kB = 1000;
function fo(e, o) {
  return e > 0 ? Math.min(Math.max(0, o - 1 - Math.floor(Math.log10(e) + Me)), ig) : 0;
}
var vn = (e, o) => Math.abs(e).toLocaleString("en-US", {
  minimumFractionDigits: e === 0 ? 0 : o
});
var Hn = e => e < 0 ? "-" : "";
function Ke(e, o) {
  let t = o.map(item => item * e.multiplesPerUnit),
    r = m => t.some(item => {
      let f = Math.abs(item),
        a = Number(f.toFixed(m));
      return Math.abs(a - f) > Me * f && (m < e.decimals || Math.floor(Math.log10(a)) > Math.floor(Math.log10(f)));
    }),
    s = 0;
  while (r(s)) s++;
  if (s === 1 && e.before !== "" && e.after === "") s = Wn;
  return t.map(item => {
    let n = Number(item.toFixed(s));
    return Hn(n) + e.before + vn(n, s) + (n === 0 ? e.afterZero : e.after);
  });
}
var Ar = {
  "": 1,
  M: br,
  G: Lr,
  T: Rr
};
var $n = (e, o, t) => r => Math.max(t && e < hg ? Wn : 0, fo(e / r, Tg), fo(o / r, Sg));
var Gn = {
  "": 1,
  M: br,
  B: Lr,
  T: Rr
};
var Wg = [1, 2, 5];
var Hg = ["$", "\u20AC", "\xA3", "\xA5"];
var Kn = [{
  ns: ns_3,
  µs: Eg,
  ms: ms_5,
  s: 1,
  min: min,
  h: h_2,
  d: d_2
}, {
  B: 1,
  kB: kB,
  MB: br,
  GB: Lr,
  TB: Rr,
  PB: PB_2
}, {
  "%": 1
}];
function io(e, o) {
  let t = Kn.find(item => Object.hasOwn(item, e)),
    r = Hg.includes(e),
    s = t ?? (r ? Gn : Ar),
    p = Math.max(...o.map(Math.abs)),
    m = $n(p, Math.max(...o) - Math.min(...o), r),
    n = Object.entries(s).filter(([, l], index) => index === 0 || l <= (p === 0 ? 1 : p)),
    [f, a] = n.filter(([, l]) => m(l) <= gg).at(-1) ?? n.at(-1) ?? ["", 1],
    x = s === Ar && e !== "" ? ` ${Y(e, Og)}` : "";
  return {
    multiplesPerUnit: 1 / a,
    before: r ? e : "",
    after: `${f}${x}`,
    afterZero: t ? f : x,
    decimals: m(a)
  };
}
var rt = (e, o) => Ke(io(o, [e]), [e])[0] ?? "";
function Xe(e, o, t = {}) {
  let {
      peers = o,
      minWritten = 0
    } = t,
    p = io(e, peers);
  return Math.min(...[...o, ...peers].filter(item => item !== 0).map(Math.abs)) * p.multiplesPerUnit < Math.max(minWritten, xg / Er ** p.decimals) ? o.map(item => rt(item, e)) : Ke(p, o);
}
var Xn = e => e === 0 ? 1 : Math.abs(e) / dg;
var zn = (e, o) => !(o - e > Me * Math.abs(o));
var Yn = (e, o) => ({
  ...e,
  multiplesPerUnit: 1,
  decimals: Math.max(e.decimals, fo(o, 1))
});
function Zg(e, [o, t], r) {
  let s = o * e.multiplesPerUnit,
    p = t * e.multiplesPerUnit,
    m = (zn(s, p) ? Xn(p) : p - s) / r,
    n = Er ** Math.floor(Math.log10(m)),
    f = n * (Wg.find(item => item * n >= m) ?? cg),
    a = Math.floor(s / f + Me),
    i = a * f,
    x = Math.max(1, Math.ceil((p - i) / f - Me));
  return {
    ticks: Ke(Yn(e, f), pe(x + 1).map(item => (a + item) * f)).map((l, index) => ({
      position: index / x,
      label: l
    })),
    positionOf: l => (l * e.multiplesPerUnit - i) / (x * f)
  };
}
function Qg(e, [o, t], r) {
  let s = Math.floor(Math.log10(o) + Me),
    p = Math.max(1, Math.ceil(Math.log10(t) - Me) - s),
    m = Math.ceil(p / r),
    n = Math.ceil(p / m);
  return {
    ticks: pe(n + 1).map(item => ({
      position: item / n,
      label: rt(Er ** (s + item * m), e)
    })),
    positionOf: f => (Math.log10(f) - s) / (n * m)
  };
}
var ink = "blue";
var rO = 100;
var pO = 10;
var mO = 3;
var aO = 0.1;
var iO = 2;
var lO = 0.000000001;
var xO = 2;
var dO = 8000;
var yO = 2;
var TO = 2;
var minWritten_2 = 1;
var _O = 16;
var CO = 24;
var V = e => e[0]?.unit ?? "";
var Jn = "red";
function pt(e, o, t) {
  let r = sum(o),
    s = e.map(ue),
    p = Math.max(...e.map(item => item.size)),
    m = p === 0 ? 1 : p,
    f = t.isSummed && r > 0 && o.every(item => item >= 0) ? Xe("%", s.map(item => rO * item / r)).map(item => [["", "", item]]) : s.map(() => []);
  return U(e, U(Xe(V(e), s), f)).map(([a, [i, x]]) => ({
    key: "",
    name: a.name,
    stats: [["", i, ""], ...x],
    ink: ue(a) < 0 ? Jn : ink,
    relativeLength: ue(a) / m
  }));
}
var Ye = {
  key: "",
  ink: ink
};
var Vn = (e, o) => ({
  ...Ye,
  name: "total",
  stats: [["", Xe(V(e), [sum(o)], {
    peers: e.map(ue)
  })[0] ?? "", ""]],
  relativeLength: 0
});
function Zn(e) {
  let isSummed = e.request.combine === "sum",
    r = e.request.top !== void 0 || e.selection.cutSeries.length > 0 ? e.selection.topSeries : e.allSeries,
    s = e.allSeries.flatMap(item => item.values),
    p = pt(r, s, {
      isSummed: isSummed
    }),
    rows_6 = isSummed ? [...p, Vn(r, s)] : p;
  return {
    form: "bars",
    header: e.frame.header,
    rows: rows_6,
    notes: e.frame.notes
  };
}
function mt(e) {
  let values_2 = e.samples.map(item => item.value).filter(item => item !== null);
  return {
    ...e,
    values: values_2,
    size: Math.max(...values_2.map(Math.abs)),
    isOthers: !1
  };
}
var nt = e => e.map(item => item.name).join(", ");
function qn(e) {
  return e === 1 ? "this is the largest" : `these are the ${e} largest`;
}
function Qn(e) {
  let o = e.cutSeries.length;
  if (o === 0) return [];
  let t = e.form === "bars" && o >= pO * e.drawnAloneCount,
    r = o <= mO,
    s = `${Pt(e.form, o)} ` + (e.isRestDrawnAsOne ? "drawn as one" : "not shown") + (r ? ` (${nt(e.cutSeries)})` : "") + `: ${qn(e.drawnAloneCount)} of ` + (e.drawnAloneCount + o).toLocaleString("en-US") + (t ? ". For a distribution, pass counts per range" : "");
  return e.top !== void 0 && e.top > e.formLimit ? [s, `top ${e.top}: a chart draws at most ${Pt(e.form, e.formLimit)}` + (e.isRestDrawnAsOne ? ", and the rest as one" : "")] : [s];
}
function ea(e, o) {
  let t = [],
    r = new Map(),
    s = [];
  for (let p of e) {
    let m = r.get(p.unit) ?? t.length,
      n = t[m];
    if (n !== void 0 && (o || p.size === 0 || n.size <= p.size * qr)) s.push(m);else r.set(p.unit, t.length), s.push(t.length), t.push(p);
  }
  return [...z(U(e, s), p => p[1]).values()].map(item => item.map(item => item[0]));
}
var oa = (e, o, facts) => ({
  title: o.title ?? "",
  facts: facts,
  source: ar(e)
});
var ta = e => [...z(e.flatMap(item => item.samples), o => o.ms)].toSorted(([o], [t]) => o - t).map(([ms_6, t]) => {
  let r = t.map(item => item.value).filter(item => item !== null);
  return {
    ms: ms_6,
    value: r.length > 0 ? sum(r) : null
  };
});
var Je = (e, name_2) => mt({
  unit: V(e),
  name: name_2,
  samples: ta(e)
});
function ra(e, o) {
  if (e.length <= iO) return [];
  let t = new Map(Je(e, "").samples.map(({
      ms: ms_7,
      value: value_3
    }) => [ms_7, value_3])),
    r = ({
      ms: ms_8,
      value: value_4
    }) => value_4 !== null && Math.abs(xO * value_4 - (t.get(ms_8) ?? 0)) <= lO * Math.abs(value_4);
  return e.filter(item => item.size > 0 && item.samples.every(r)).map(item => `${item.name} equals the sum of the other ${o}: if it is their total, leave it out`);
}
function at(e, o) {
  let t = {
    ms: 0,
    value: -1 / 0
  };
  for (let {
    ms: ms_9,
    value: value_5
  } of e.samples) if (value_5 !== null && value_5 > t.value) t = {
    ms: ms_9,
    value: value_5
  };
  return Ks(o, t.ms);
}
function sa(e, o) {
  let t = Je(e, "total"),
    [r = ""] = Xe(t.unit, [Math.max(...t.values)]);
  return `total max ${r} at ${at(t, o)}`;
}
var pa = (e, o) => e.name < o.name ? -1 : 1;
var ma = e => ({
  ...Je(e, `${e.length} others`),
  isOthers: !0
});
function na(e, o, t) {
  let topSeries = e.toSorted((m, n) => m.size !== n.size ? n.size - m.size : pa(m, n)).slice(0, t && e.length === o + 1 ? o + 1 : o),
    cutSeries = e.filter(item => !topSeries.includes(item)),
    p = t && cutSeries.length > 0;
  return {
    topSeries: topSeries,
    cutSeries: cutSeries,
    drawnSeries: p ? [...topSeries, ma(cutSeries)] : topSeries
  };
}
var ft = {
  key: "",
  ink: "quiet"
};
var Nr = {
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
var zO = ["blue", "orange", "green", "pink", "teal", "red", "violet", "olive"];
var lt = U([..."abcdefgh"], zO).map(([key, ink_2]) => ({
  key: key,
  ink: ink_2
}));
function aa(e, o, t) {
  let r = t.flatMap(item => item.values),
    s = new Map(U(o.topSeries, lt)),
    rows_7 = U(pt(o.drawnSeries, r, {
      isSummed: !0
    }), o.drawnSeries).map(([m, n]) => ({
      ...m,
      ...(s.get(n) ?? ft),
      share: ue(n) / sum(r)
    }));
  return {
    form: "share",
    header: e.header,
    rows: rows_7,
    notes: e.notes
  };
}
var fa = (e, rows_8, medianStep) => ({
  form: "sparks",
  header: e.header,
  rows: rows_8,
  medianStep: medianStep,
  notes: e.notes
});
function xt(e) {
  let o = sum(e.map(item => item.samples.length - item.values.length));
  return o > 0 ? [`${K(o, "missing sample")}, left blank where the gap is wide enough to see`] : [];
}
var ia = (e, o) => ([t, [r, stats]]) => ({
  ...e.identityOf(t),
  name: t.name,
  stats: stats,
  stretches: r.map(item => item.map(o))
});
var la = (e, o) => t => ({
  x: e(t.ms),
  y: o.positionOf(t.top)
});
function xa({
  seriesOfPlot: seriesOfPlot,
  axisValues: o,
  timeline: timeline_3,
  isSummed: isSummed_2
}) {
  let s = V(seriesOfPlot),
    p = seriesOfPlot.map(item => item.values),
    m = l => Xe(s, l, {
      peers: o,
      minWritten: minWritten_2
    }),
    n = m(p.map(item => Math.max(...item))),
    f = m(p.map(item => item.at(-1) ?? 0)),
    a = m(p.map(item => Math.min(...item))),
    i = m(p.map(item => sum(item) / item.length)),
    x = Xe(s, p.map(sum));
  return seriesOfPlot.map((item, index) => {
    if (item.values.length === 1) return [["last", f[index] ?? "", ""]];
    let d = [["max", n[index] ?? "", `at ${at(item, timeline_3)}`], ["last", f[index] ?? "", ""], ["min", a[index] ?? "", ""], ["mean", i[index] ?? "", ""]];
    return isSummed_2 ? [...d, ["total", x[index] ?? "", ""]] : d;
  });
}
var ua = (e, axisValues) => ({
  seriesOfPlot: e.seriesOfPlot,
  axisValues: axisValues,
  timeline: e.data.timeline,
  isSummed: e.request.combine === "sum"
});
function ut(e) {
  let o = e.data.form === "columns",
    t = new Map(),
    r = [];
  for (let a of e.seriesOfPlot) {
    let i = [],
      x = [];
    for (let l of a.samples) if (l.value === null) i.push(x), x = [];else {
      let top = (o ? t.get(l.ms) ?? 0 : 0) + l.value;
      t.set(l.ms, top), x.push({
        ms: l.ms,
        top: top
      });
    }
    i.push(x), r.push(i.filter(item => item.length > 0));
  }
  let s = r.flat(yO).map(item => item.top),
    p = V(e.seriesOfPlot),
    m = [o ? 0 : Math.min(...s), Math.max(...s)],
    f = e.request.log === !0 ? Qg(p, m, e.maxAxisSteps) : Zg(io(p, s), m, e.maxAxisSteps);
  return {
    ticks: f.ticks,
    rows: U(e.seriesOfPlot, U(r, xa(ua(e, s)))).map(ia(e, la(Eo(e.data.timeline), f)))
  };
}
var da = {
  onePlot: 5,
  severalPlots: 2
};
function ca({
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
    } = ut({
      seriesOfPlot: e,
      identityOf: () => Ye,
      maxAxisSteps: da.onePlot,
      request: request_4,
      data: data
    }),
    n = Eo(data.timeline),
    f = e.flatMap(item => {
      let i = item.samples.map(item => n(item.ms));
      return U(i, i.slice(1)).map(([x, l]) => l - x);
    }).toSorted((a, i) => a - i);
  return fa({
    header: {
      ...header,
      facts: [...header.facts, `each from ${ticks[0]?.label} to ${ticks.at(-1)?.label}`]
    },
    notes: [...notes_2, ...xt(e)]
  }, rows_9, f[Math.floor(f.length / TO)] ?? 1);
}
function ya(e) {
  let o = new Map();
  for (let t of e.rows.flatMap(item => item.stretches.flat())) {
    let r = t.y - (o.get(t.x) ?? 0);
    if (e.rows.length > 1 && r > 0 && r < aO) return !0;
    o.set(t.x, t.y);
  }
  return !1;
}
function ha(e, o, t) {
  let r = o.series.map(item => item.name),
    s = (t.y ?? []).map(item => item.toLowerCase());
  if (!(r.length > 1 && r.every(item => s.includes(item.toLowerCase())) && e.flat().length === r.length)) return e;
  let m = f => r.indexOf(f.name),
    n = f => Math.min(...f.map(m));
  return e.map(item => item.toSorted((a, i) => m(a) - m(i))).toSorted((f, a) => n(f) - n(a));
}
function Ta(e) {
  let o = Eo(e);
  return t => ({
    position: o(t.ms),
    when: Ks(e, t.ms),
    label: t.label
  });
}
function Sa(e) {
  let o = e.data.form === "columns",
    t = ha(e.groups.slice(0, Fe), e.data, e.request),
    r = t.flat(),
    s = e.groups.slice(Fe).flat(),
    p = new Map(U(r.filter(item => !item.isOthers), r.length > 1 ? lt : [Ye])),
    identityOf = T => p.get(T) ?? ft,
    maxAxisSteps = da[t.length > 1 ? "severalPlots" : "onePlot"],
    plots = t.map(T => ut({
      seriesOfPlot: T,
      identityOf: identityOf,
      maxAxisSteps: maxAxisSteps,
      request: e.request,
      data: e.data
    })),
    a = e.data.timeline.periodStarts.length,
    i = r.length > t.length,
    mergedColumnsNote = `${a} columns do not fit, so they are drawn as ${i ? "lines, one for each series" : "a line"}`,
    l = s.length > 0,
    u = a > CO,
    d = o && plots.some(ya),
    notes_3 = [...e.frame.notes, ...(l ? [`${Pt(e.data.form, s.length)} not shown (${nt(s)}): a chart has at most ${Fe} plots`] : []), ...xt(r)],
    modelOnlyNotes = [...(u ? [`on a screen under about ${a + _O} characters wide, ${mergedColumnsNote}`] : []), ...(d ? ["in a terminal, parts of a column thinner than a row may not show"] : [])];
  return {
    form: o ? "columns" : "line",
    header: e.frame.header,
    plots: plots,
    timeline: e.data.timeline,
    marks: e.data.marks.map(Ta(e.data.timeline)),
    notes: notes_3,
    mergedColumnsNote: mergedColumnsNote,
    thinPartsNote: "the thinnest parts of a column are too thin to show here",
    modelOnlyNotes: modelOnlyNotes
  };
}
function __(data_2, request_5) {
  let t = request_5.combine === "sum",
    r = data_2.form === "columns" && !t,
    allSeries = data_2.series.map(mt),
    isRestDrawnAsOne = data_2.form === "share" || data_2.form === "columns" && t && allSeries.every(item => item.unit === V(allSeries)),
    formLimit = r ? Fe : M[data_2.form].maxCount,
    selection = na(allSeries, Math.min(request_5.top ?? M[data_2.form].defaultCount, formLimit), isRestDrawnAsOne),
    f = data_2.hasCombinedRows && !t,
    a = data_2.form === "columns" && isRestDrawnAsOne && allSeries.length > 1,
    header_2 = oa(data_2, request_5, [...(data_2.subject === "" ? [] : [data_2.subject]), ...data_2.timeline.spanLabels, ...(request_5.log ? ["log scale"] : []), ...(f ? [`rows combined by ${request_5.combine}`] : []), ...(a ? [sa(allSeries, data_2.timeline)] : [])]),
    notes_4 = [...data_2.leftOutNotes, ...data_2.notes, ...Qn({
      form: data_2.form,
      cutSeries: selection.cutSeries,
      drawnAloneCount: selection.topSeries.length,
      isRestDrawnAsOne: isRestDrawnAsOne,
      formLimit: formLimit,
      top: request_5.top
    }), ...(t ? ra(allSeries, M[data_2.form].plural) : [])];
  switch (data_2.form) {
    case "bars":
      return Zn({
        frame: {
          header: header_2,
          notes: notes_4
        },
        selection: selection,
        allSeries: allSeries,
        request: request_5
      });
    case "share":
      return aa({
        header: header_2,
        notes: notes_4
      }, selection, allSeries);
    case "sparks":
      return ca({
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
      return Sa({
        groups: r ? selection.topSeries.map(item => [item]) : ea(selection.drawnSeries, data_2.form === "columns" || request_5.log === !0),
        frame: {
          header: header_2,
          notes: notes_4
        },
        request: request_5,
        data: data_2
      });
  }
}
function ga(e) {
  return e.label !== "" ? `mark at ${e.when}: ${e.label}` : `mark at ${e.when}`;
}
var Oa = e => "plots" in e ? [...e.notes, ...e.modelOnlyNotes] : e.notes;
var dt = " \xB7 ";
var Ca = e => e.title === "" ? "" : ` "${e.title.replaceAll('"', "'")}"`;
function La(e) {
  let o = [`${M[e.form].label}` + Ca(e.header), ...e.header.facts, `from ${e.header.source}`].join(dt),
    t = ("plots" in e ? e.plots.flatMap(item => item.rows) : e.rows).map(item => {
      let p = "stretches" in item ? item.stretches.flat().length : 0;
      return `- ${item.name}: ` + [...item.stats.map(item => item.filter(item => item !== "").join(" ")), ...(p > 0 ? [K(p, "point")] : [])].join(dt);
    }),
    r = [...("plots" in e ? e.marks : []).map(item => ga(item)), ...Oa(e).map(item => `note: ${item}`)];
  return [o, ...go(t, jt(t, dO - [o, ...r].join(`
`).length, s => s.length + 1).length, "more row"), ...r];
}
var Ea = e => o => new Set(o.shownNames.values()).size === e;
var ba = (e, o, t) => (r, s) => {
  let p = s < e.lane.statsBeforeNames;
  return e.widthPastKey - r.end >= (p ? o : t);
};
var xo = 2;
var Q_ = 4;
var eC = 2;
var Ra = 2;
var Aa = 0.125;
var we = 0.5;
var ct = 0.125;
var Ia = 2;
var rC = 0.4;
var kr = 8;
var sC = 2;
var mC = 1;
var Na = 40;
var aC = 16;
var iC = 8;
var rows_15 = 2;
var xC = 1;
var wa = 1048576;
var cC = 0.5;
var ka = 2;
var hC = 1;
var re = 1;
function Pa(e) {
  let o = e.rows.length === 1 ? e.rows[0] : void 0,
    isNamedInHeader = o !== void 0 && e.headerTexts.includes(o.name),
    keyWidth = e.rows.some(item => item.key) ? Ia : 0;
  return {
    rows: e.rows,
    lane: e.lane,
    fullNames: isNamedInHeader ? [] : e.rows.map(item => item.name),
    isNamedInHeader: isNamedInHeader,
    indent: Math.max(0, e.left - xo),
    keyWidth: keyWidth,
    widthPastKey: e.columns - keyWidth - xo
  };
}
var se = e => Math.max(0, ...e.map(w));
var Da = (e, o, t) => t ? Math.min(Math.floor(e / sC), e - o.minWidth - re) : e;
function Pr(e, statColumns) {
  let wantsLane = e.lane.minWidth > 0,
    r = e.widthPastKey - (statColumns.at(-1)?.end ?? 0),
    s = wantsLane && r >= kr + e.lane.minWidth,
    p = lx(e.fullNames, Da(r, e.lane, s)),
    m = e.isNamedInHeader ? Math.min(e.indent, r) : se(p),
    laneWidth = s ? r - m - re : 0,
    f = e.keyWidth + m + (s ? re + laneWidth : 0);
  return {
    wantsLane: wantsLane,
    keyWidth: e.keyWidth,
    shownNames: new Map(U(e.rows, p)),
    laneLeft: e.keyWidth + m + re,
    laneWidth: laneWidth,
    statsLeft: f > 0 ? f + xo : 0,
    statColumns: statColumns
  };
}
var Ua = (e, o) => Math.max(Math.min(e.isNamedInHeader ? e.indent : se(e.fullNames), o * rC), e.lane.minWidth > 0 ? kr + e.lane.minWidth : 0);
var LC = [0, 1, 2];
var Ba = e => Math.max(0, ...e.map(item => item.stats.length));
function ja(e) {
  let o = [],
    end_2 = -xo;
  for (let r of pe(Ba(e))) {
    end_2 += xo - re;
    let parts = [];
    for (let p of LC) {
      let width = se(e.map(item => item.stats[r]?.[p] ?? ""));
      end_2 += width > 0 ? re + width : 0, parts.push({
        start: end_2 - width,
        width: width
      });
    }
    o.push({
      parts: parts,
      end: end_2
    });
  }
  return o;
}
function de(e) {
  let o = Pa(e),
    t = ja(e.rows).filter(ba(o, Math.min(se(o.fullNames), kr), Ua(o, e.columns)));
  return pe(Math.max(0, t.length - e.lane.statsBeforeNames) + 1).map(item => Pr(o, t.slice(0, t.length - item))).find(Ea(new Set(o.fullNames).size)) ?? Pr(o, t);
}
var Wa = (shapes, y_2, x_3) => ({
  shapes: shapes,
  rows: y_2 + 1,
  lane: {
    x: x_3,
    y: y_2
  }
});
var va = e => ({
  kind: "text",
  at: e.at,
  text: e.text,
  ink: e.ink,
  isAboutPartsLeftOut: !1
});
function I(e) {
  return e.text.trim() === "" ? [] : [va(e)];
}
var Ha = (e, o, t) => o > 0 ? e.width - w(t) : 0;
var $a = (e, o) => e.wantsLane ? "title" : o.ink;
var Ga = (e, o, t) => t === mC ? $a(e, o) : "quiet";
function ce(e, o, y_3) {
  let r = [...I({
    at: {
      x: 0,
      y: y_3
    },
    text: o.key,
    ink: o.ink
  }), ...I({
    at: {
      x: e.keyWidth,
      y: y_3
    },
    text: e.shownNames.get(o) ?? "",
    ink: e.wantsLane ? "words" : "title"
  })];
  for (let [s, p] of e.statColumns.entries()) for (let [m, n] of p.parts.entries()) {
    let text_2 = o.stats[s]?.[m] ?? "";
    r.push(...I({
      at: {
        x: e.statsLeft + n.start + Ha(n, m, text_2),
        y: y_3
      },
      text: text_2,
      ink: Ga(e, o, m)
    }));
  }
  return Wa(r, y_3, e.laneLeft);
}
var lane_2 = {
  minWidth: 0,
  statsBeforeNames: 1
};
var lane = {
  minWidth: 8,
  statsBeforeNames: 1
};
var Xa = (at_2, o, t) => ({
  kind: "bar",
  at: at_2,
  width: Math.max(ct, Math.abs(o.relativeLength) * t.laneWidth),
  ink: o.ink,
  isHatched: o.relativeLength < 0
});
function za(e, rows_10, headerTexts) {
  let r = de({
    rows: rows_10,
    columns: e.columns,
    lane: lane,
    headerTexts: headerTexts,
    left: 0
  });
  return {
    shapes: rows_10.flatMap((item, index) => {
      let m = ce(r, item, e.rows + index);
      return item.relativeLength !== 0 && r.laneWidth > 0 ? [...m.shapes, Xa(m.lane, item, r)] : m.shapes;
    }),
    rows: e.rows + rows_10.length
  };
}
var ht = e => Math.round(e * wa) / wa;
var Ya = (e, row) => ({
  key: e.key,
  ink: e.ink,
  row: row
});
function Ja(e, o) {
  let t = e.stretches.at(-1)?.at(-1);
  return t ? [Ya(e, Math.floor(o(t.y)))] : [];
}
var Va = (e, o) => z(e.filter(item => item.key).flatMap(item => Ja(item, o)), t => t.row);
var Dr = [11, 7, 5];
var Za = (e, o) => Math.floor((e - 1) / o);
var qa = (e, o) => Math.max(1, Math.min(Za(Dr.at(e - 1) ?? Math.min(...Dr), o), Q_));
var Qa = (e, o, t) => e.ticks.filter(item => item.position >= o && item.position <= t);
function ef(e) {
  let o = new Map(),
    t = [];
  for (let r of e) {
    t.push({
      ...r,
      stretches: r.stretches.map(item => item.map(item => ({
        x: item.x,
        y: item.y - (o.get(item.x) ?? 0)
      })))
    });
    for (let s of r.stretches.flat()) o.set(s.x, s.y);
  }
  return t;
}
function of(e, o, t) {
  let r = o.form === "columns",
    rows_11 = r && !t ? ef(e.rows) : e.rows,
    p = rows_11.flatMap(item => item.stretches.flat()).map(item => item.y),
    m = r ? 0 : Math.min(...p),
    n = Math.max(...p),
    f = e.ticks.length - 1,
    a = Qa(e, m, n).length >= eC,
    i = a ? m : 0,
    x = a ? n : 1,
    u = n > m ? qa(o.plots.length, (x - i) * f) : 1,
    d = T => ht((1 - T) * f * u),
    c = T => Math.round(d(T)),
    yOf = T => we + d(T) - c(x);
  return {
    ...e,
    rows: rows_11,
    yOf: yOf,
    height: c(i) - c(x) + 1,
    endKeys: Va(t ? [] : rows_11, yOf)
  };
}
function tf(e) {
  return e.some(item => item.rows.some(item => item.key)) ? Ia : 0;
}
function rf(e) {
  let o = Math.max(0, ...e.flatMap(item => [...item.endKeys.values()]).map(item => item.length));
  return o > 0 ? re + o : 0;
}
function sf(left, o, t) {
  let columnWidth = Math.max(1, o - 1),
    xOf = m => left + Math.floor(ht(m * t)) * o,
    tickXOf = m => Math.min(xOf(m), xOf((t - 1) / t)) + columnWidth / Ra;
  return {
    left: left,
    width: o * t,
    columnWidth: columnWidth,
    xOf: xOf,
    tickXOf: tickXOf
  };
}
function pf(left_2, width_2) {
  let t = r => left_2 + r * (width_2 - we);
  return {
    left: left_2,
    width: width_2,
    columnWidth: 0,
    xOf: t,
    tickXOf: t
  };
}
function Ur(e, o, t) {
  let r = se(e.flatMap(item => item.ticks.map(item => item.label))) + ka,
    s = o - r,
    p = t > 0 ? Math.floor(s / t) : 0;
  return p === 0 ? pf(r, s) : sf(r, p, t);
}
function mf(e, o) {
  let plots_2 = e.plots,
    area = Ur(plots_2, o - tf(plots_2), e.timeline.periodStarts.length),
    s = area.columnWidth > 0,
    drawnPlots = plots_2.map(item => of(item, e, s));
  return s ? {
    area: area,
    drawnPlots: drawnPlots
  } : {
    area: Ur(plots_2, o - rf(drawnPlots), 0),
    drawnPlots: drawnPlots
  };
}
var nf = (at_3, gridWidth) => ({
  kind: "axisRow",
  at: at_3,
  gridWidth: gridWidth
});
var af = e => e.map((item, index) => ({
  ink: item.ink,
  height: index > 0 ? 0 : ct
}));
var ff = (at_4, o, parts_2) => ({
  kind: "stack",
  at: at_4,
  width: o.columnWidth,
  parts: parts_2
});
var lf = (y_4, o) => ([x_4, r]) => {
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
  return ff({
    x: x_4,
    y: y_4
  }, o, y_4 - p.y < ct ? af(s) : s);
};
var xf = e => z(e.rows.flatMap(item => item.stretches.flat().map(t => ({
  ...e.toCells(t),
  position: t.y,
  ink: item.ink
}))), o => o.x);
var uf = e => [...xf(e)].map(lf(e.toCells({
  x: 0,
  y: 0
}).y, e.area));
var df = e => o => ({
  x: e.tickXOf(o.position),
  text: Y(o.label, aC)
});
var Tt = (points, ink_3) => ({
  kind: "line",
  ink: ink_3,
  points: points
});
var cf = (e, o) => [e.x - we, e.x + we].map(item => ({
  x: Math.max(o.left, Math.min(item, o.left + o.width - Aa)),
  y: e.y
}));
var yf = e => [...z(e, o => Math.floor(o.x / we)).values()].flatMap(item => {
  let t = item.toSorted((s, p) => s.y - p.y),
    r = [item[0], t[0], t.at(-1), item.at(-1)];
  return item.filter(item => r.includes(item));
});
var hf = (e, o) => e.length > 1 ? yf(e) : cf(e[0], o);
function Tf(e) {
  let o = [],
    t = [],
    r = -1 / 0;
  for (let [s, ...p] of e) {
    if (s === void 0) continue;
    let m = p.length === 0 ? we : 0;
    if (s.x - m - r < hC) t.push(s, ...p);else {
      let f = [s, ...p];
      o.push(f), t = f;
    }
    r = (p.at(-1) ?? s).x + m;
  }
  return o;
}
function Sf({
  rows: rows_12,
  area: area_2,
  toCells: toCells
}) {
  let r = [];
  for (let s of rows_12.toReversed()) for (let p of Tf(s.stretches.map(item => item.map(toCells)))) r.push(Tt(hf(p, area_2), s.ink));
  return r;
}
var gf = (e, o) => pe(o.width).map(item => e.some(s => s.column === item) ? "\u252C" : "\u2500").join("");
var Of = (e, o) => I({
  at: {
    x: e.area.left - 1,
    y: e.room.rows
  },
  text: `\u2514${gf(o, e.area)}`,
  ink: "quiet"
});
var _f = (e, o, y_5) => e.flatMap(item => I({
  at: {
    x: o.left + item.start,
    y: y_5
  },
  text: item.text,
  ink: "quiet"
}));
var Cf = e => o => (e.periodStarts.findIndex(item => item >= o) + cC) / e.periodStarts.length;
var Lf = (e, o) => t => Math.floor(e.tickXOf(o(t)) - e.left);
function Ef(e) {
  let areCentred = e.area.columnWidth > 0,
    columnOf = Lf(e.area, areCentred ? Cf(e.timeline) : Eo(e.timeline));
  return dd(e.timeline.dataSpan, e.timeline.step, {
    columns: e.area.width,
    columnOf: columnOf,
    areCentred: areCentred
  });
}
function bf(e) {
  let o = Ef(e),
    t = e.room.rows + 1,
    r = [],
    rows_13 = t + 1,
    p;
  for (let m of e.flags.filter(item => item.text !== "")) {
    let n = w(m.text),
      x_5 = Math.floor(Math.min(m.x, e.room.columns - n));
    if (p === void 0 || x_5 < p) rows_13 += 1;
    r.push(...I({
      at: {
        x: x_5,
        y: rows_13 - 1
      },
      text: m.text,
      ink: "words"
    })), p = x_5 + n + re;
  }
  return {
    shapes: [...Of(e, o), ..._f(o, e.area, t), ...r],
    rows: rows_13
  };
}
var Rf = (e, o, t) => r => ({
  x: e.xOf(r.x),
  y: t + o.yOf(r.y)
});
function Af({
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
    n = de({
      rows: drawnPlots_2.flatMap(item => item.rows),
      columns: room.columns,
      lane: lane_2,
      headerTexts: headerTexts_2,
      left: area_3.left
    }),
    f = n.shownNames.size + n.statColumns.length > 0,
    flags = chart.marks.map(df(area_3)),
    i = m ? uf : Sf,
    x = [],
    rows_14 = room.rows;
  for (let c of drawnPlots_2) {
    for (let E of f ? c.rows : []) {
      let C = ce(n, E, rows_14);
      x.push(C.shapes), rows_14 = C.rows;
    }
    let O = rows_14,
      T = O + c.height;
    for (let y_6 = O; y_6 < T; y_6++) {
      let C = c.ticks.find(item => O + Math.floor(c.yOf(item.position)) === y_6),
        text_3 = C?.label ?? "";
      x.push(I({
        at: {
          x: area_3.left - ka - w(text_3),
          y: y_6
        },
        text: text_3,
        ink: "quiet"
      }), [nf({
        x: area_3.left - 1,
        y: y_6
      }, C ? area_3.width + we : 0)]);
    }
    x.push(i({
      rows: c.rows,
      area: area_3,
      toCells: Rf(area_3, c, O)
    }));
    for (let [E, C] of c.endKeys) for (let [P, L] of C.entries()) x.push(I({
      at: {
        x: area_3.left + area_3.width + re + P,
        y: O + E
      },
      text: L.key,
      ink: L.ink
    }));
    x.push(flags.map(item => Tt([O, T - Aa].map(C => ({
      x: item.x,
      y: C
    })), "quiet"))), rows_14 = T;
  }
  let u = bf({
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
var If = (y_7, parts_3) => ({
  kind: "band",
  at: {
    x: 0,
    y: y_7
  },
  rows: rows_15,
  parts: parts_3
});
var Nf = (e, y_8) => I({
  at: {
    x: Math.floor(e.middle),
    y: y_8
  },
  text: e.key,
  ink: e.ink
});
var Mf = (e, width_3, t) => ({
  ...e,
  width: width_3,
  middle: t - width_3 / Ra
});
function wf(e, rows_16) {
  let t = rows_16.map(item => item.share > 0 ? Math.max(item.share * e.columns, xC) : 0),
    r = sum(t) - e.columns,
    s = t.indexOf(Math.max(...t)),
    p = [],
    m = 0;
  for (let [i, x] of rows_16.entries()) {
    let l = (t[i] ?? 0) - (i === s ? r : 0);
    if (l > 0) m += l, p.push(Mf(x, l, m));
  }
  let n = e.rows + rows_15,
    f = n + 1,
    a = de({
      rows: rows_16,
      columns: e.columns,
      lane: lane_2,
      headerTexts: [],
      left: 0
    });
  return {
    shapes: [If(e.rows, p), ...p.flatMap(item => Nf(item, n)), ...rows_16.flatMap((item, index) => ce(a, item, f + index).shapes)],
    rows: f + rows_16.length
  };
}
var kf = (e, o, t) => Math.abs(o - e) >= Math.abs(t - e) ? o : t;
var Pf = e => o => Math.min(e - 1, Math.floor(o * e));
function Df(e, o) {
  let t = Array.from(Array(o), () => null),
    r = e.flat().map(item => item.y),
    s = sum(r) / r.length,
    p = Pf(o);
  for (let m of e) for (let [n, f] of m.entries()) {
    let a = p(f.x),
      i = Math.max(a, p(m[n + 1]?.x ?? f.x) - 1);
    for (let x = a; x <= i; x++) t[x] = Math.max(ct, kf(s, f.y, t[x] ?? f.y));
  }
  return t;
}
var Uf = (e, o, t) => Df(e.stretches, t).flatMap(item => Array.from(Array(Math.floor(o.laneWidth / t)), () => item));
var lane_3 = {
  minWidth: 16,
  statsBeforeNames: 0
};
var Bf = (at_5, heights, ink_4) => ({
  kind: "strip",
  at: at_5,
  heights: heights,
  ink: ink_4
});
function jf(e, o, headerTexts_3) {
  let r = de({
      rows: o.rows,
      columns: e.columns,
      lane: lane_3,
      headerTexts: headerTexts_3,
      left: 0
    }),
    s = Math.min(r.laneWidth, Math.round(1 / o.medianStep) + 1);
  return {
    shapes: o.rows.flatMap((item, index) => {
      let n = ce(r, item, e.rows + index);
      return [...n.shapes, Bf(n.lane, Uf(item, r, s), item.ink)];
    }),
    rows: e.rows + o.rows.length
  };
}
function Wf(chart_2, room_2, headerTexts_4) {
  switch (chart_2.form) {
    case "bars":
      return {
        ...za(room_2, chart_2.rows, headerTexts_4),
        notes: []
      };
    case "share":
      return {
        ...wf(room_2, chart_2.rows),
        notes: []
      };
    case "sparks":
      return {
        ...jf(room_2, chart_2, headerTexts_4),
        notes: []
      };
    case "line":
    case "columns":
      {
        let plotsLayout_2 = mf(chart_2, room_2.columns);
        return plotsLayout_2.area.width >= iC ? Af({
          room: room_2,
          chart: chart_2,
          plotsLayout: plotsLayout_2,
          headerTexts: headerTexts_4
        }) : void 0;
      }
  }
}
function Ve(e, o, ink_5) {
  let r = o.flatMap(item => Lo(item, e.columns));
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
var vf = (e, o, t) => I({
  at: {
    x: o + re,
    y: e - 1
  },
  text: `${dt.trimStart()}${t}`,
  ink: "quiet"
});
var Hf = w(dt);
function $f(e, o) {
  let texts = [o.title, ...o.facts].filter(item => item !== ""),
    shapes_2 = [],
    rows_17 = e.rows,
    p = 0;
  for (let [m, n] of texts.entries()) {
    let f = p + Hf + w(n);
    if (m === 0 || f > e.columns) {
      let i = Ve({
        columns: e.columns,
        rows: rows_17
      }, [n], m === 0 ? "title" : "quiet");
      shapes_2.push(...i.shapes), rows_17 = i.rows, p = w(n);
    } else shapes_2.push(...vf(rows_17, p, n)), p = f;
  }
  return {
    shapes: shapes_2,
    rows: rows_17,
    texts: texts
  };
}
var St = (columns_4, o) => ({
  columns: columns_4,
  rows: o.rows,
  shapes: o.shapes
});
var Fr = (e, columns_5) => St(columns_5, Ve({
  columns: columns_5,
  rows: 0
}, La(e), "words"));
var Gf = (text_4, y_9) => ({
  kind: "text",
  at: {
    x: 0,
    y: y_9
  },
  text: text_4,
  ink: "quiet",
  isAboutPartsLeftOut: !0
});
function Kf(e, o) {
  let t = Lo(o, e.columns);
  return {
    shapes: t.map((item, index) => Gf(item, e.rows + index)),
    rows: e.rows + t.length
  };
}
function Xf(e, columns_6) {
  if (columns_6 < Na) return Fr(e, columns_6);
  let t = $f({
      columns: columns_6,
      rows: 0
    }, e.header),
    r = Wf(e, {
      columns: columns_6,
      rows: t.rows
    }, t.texts);
  if (r === void 0) return Fr(e, columns_6);
  let s = Ve({
      columns: columns_6,
      rows: r.rows
    }, [...e.notes, ...r.notes], "quiet"),
    m = e.form === "columns" ? Kf({
      columns: columns_6,
      rows: s.rows
    }, e.thinPartsNote) : {
      shapes: [],
      rows: s.rows
    };
  return St(columns_6, {
    shapes: [...t.shapes, ...r.shapes, ...s.shapes, ...m.shapes],
    rows: m.rows
  });
}
var Yf = (glyph, ink_6, background) => ({
  glyph: glyph,
  ink: ink_6,
  background: background
});
var gE = 0.5;
var _E = 2;
var ee = 8;
var LE = 3;
var bE = 10240;
var Jf = 2;
var Br = 4;
var glyph_4 = " ";
var glyph_3 = "\u2588";
var IE = "\u2586";
var NE = "\u2592";
var Zf = (e, o) => e.filter(item => o.slice(0, _E).includes(item));
function Ot(e, o, t) {
  let r = e.map(item => ({
      ink: item.ink,
      size: Math.min(item.to, o + ee) - Math.max(item.from, o)
    })).filter(item => item.size >= gE),
    s = r.toSorted((i, x) => x.size - i.size),
    [p] = s;
  if (p === void 0) return;
  let m = Math.round((e.at(-1)?.to ?? o) - o);
  if (m < ee) {
    let glyph_2 = t[m];
    return glyph_2 ? {
      glyph: glyph_2,
      ink: p.ink
    } : void 0;
  }
  let [n = p, f] = Zf(r, s),
    a = t[Math.round(n.size / (n.size + (f?.size ?? 0)) * ee)];
  return a ? Yf(a, n.ink, f?.ink) : {
    glyph: glyph_3,
    ink: p.ink
  };
}
var _t = {
  glyph: "\u2508",
  ink: "quiet"
};
var qf = e => e > 0 ? "\u2524" : "\u2502";
var Qf = {
  glyph: glyph_4,
  ink: "words"
};
function ei(e) {
  let o = Array.from({
    length: e.rows * e.columns
  }, () => Qf);
  function t(r) {
    return Number.isInteger(r.x) && Number.isInteger(r.y) && r.x >= 0 && r.x < e.columns ? r.y * e.columns + r.x : -1;
  }
  return {
    cellAt: r => o[t(r)],
    set: (r, s) => {
      let p = t(r);
      if (o[p] !== void 0) o[p] = s;
    },
    rows: () => pe(e.rows).map(item => o.slice(item * e.columns, (item + 1) * e.columns))
  };
}
var oi = (e, o) => ({
  glyph: o < LE ? "\u2501" : "\u2580",
  ink: e.ink
});
var ti = ["", "\u2581", "\u2582", "\u2583", "\u2584", "\u2585", "\u2586", "\u2587"];
var ri = [1, 2, 4, 64, 8, 16, 32, 128];
var si = ["", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589"];
var pi = (e, to_2, ink_7) => ({
  from: e,
  to: to_2,
  ink: ink_7
});
function Ct(e, o, t) {
  let r = s => o(s) * ee;
  return Bt(e, r, t).map(({
    part: part_2,
    end: end_3
  }) => pi(end_3 - r(part_2), end_3, part_2.ink));
}
function mi(e, {
  at: at_6,
  width: width_4,
  parts: parts_4
}) {
  let s = Math.ceil(at_6.y),
    p = (s - at_6.y) * ee,
    m = Ct(parts_4, a => a.height, p),
    n = m.at(-1)?.to ?? 0,
    f = new Set();
  for (let a = 0; a < n; a += ee) {
    let i = Ot(m, a, ti);
    if (i === void 0) continue;
    let l = a < p ? oi(i, n - p) : i;
    f.add(l.ink).add(l.background);
    for (let u = 0; u < Math.round(width_4); u++) e.set({
      x: at_6.x + u,
      y: s - 1 - a / ee
    }, l);
  }
  return parts_4.every(item => f.has(item.ink));
}
function ni(e, {
  at: at_7,
  width: width_5,
  ink: ink_8,
  isHatched: isHatched
}) {
  let glyph_5 = si[Math.max(1, Math.round(width_5 * ee))];
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
    glyph: isHatched ? NE : IE,
    ink: ink_8
  });
}
var ai = (e, o) => ri[Math.floor((e - Math.floor(e)) * Jf) * Br + Math.floor((o - Math.floor(o)) * Br)] ?? 0;
var Lt = e => ri.reduce((acc, item) => (e & item) === 0 ? acc : acc + 1, 0);
var fi = e => o => Lt(o.bits) === e;
function ii(e, o) {
  let t = e.lines ?? [],
    lines = [...t.filter(item => item.ink !== o.ink), {
      ink: o.ink,
      bits: (t.find(item => item.ink === o.ink)?.bits ?? 0) | o.bits
    }],
    s = lines.filter(item => item.ink !== "quiet"),
    p = s.length > 0 ? s : lines;
  return {
    glyph: String.fromCodePoint(bE + p.reduce((acc, item) => acc | item.bits, 0)),
    ink: p.findLast(fi(Math.max(...p.map(item => Lt(item.bits)))))?.ink ?? o.ink,
    lines: lines
  };
}
function li(e, {
  points: points_2,
  ink: ink_9
}) {
  for (let [r, s] of points_2.entries()) {
    let p = points_2[r - 1] ?? s,
      m = Math.ceil(Math.max(Math.abs(s.x - p.x) * Jf, Math.abs(s.y - p.y) * Br, 1));
    for (let n = 0; n <= m; n++) {
      let f = p.x + (s.x - p.x) * n / m,
        a = p.y + (s.y - p.y) * n / m,
        i = {
          x: Math.floor(f),
          y: Math.floor(a)
        },
        x = e.cellAt(i);
      if (!x || !(x.glyph === glyph_4 || x === _t || x.lines !== void 0)) continue;
      e.set(i, ii(x, {
        ink: ink_9,
        bits: ai(f, a)
      }));
    }
  }
}
function xi(e, {
  at: at_8,
  text: text_5,
  ink: ink_10
}) {
  let x_6 = Math.round(at_8.x);
  for (let glyph_6 of Oe(text_5)) {
    let m = w(glyph_6);
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
var ui = e => ({
  text: e.glyph,
  ink: e.ink,
  background: e.background
});
function di(e) {
  let o = [];
  for (let t of e.slice(0, e.findLastIndex(r => r.glyph !== glyph_4) + 1)) {
    let r = o.at(-1);
    r && (r.ink === t.ink && r.background === t.background || t.glyph === glyph_4 && r.background === void 0) ? r.text += t.glyph : o.push(ui(t));
  }
  return o;
}
var ci = e => ti[Math.round(e * ee)] ?? glyph_3;
function qE(e) {
  let o = ei(e),
    t = !1,
    r = 0;
  for (let s of e.shapes) switch (s.kind) {
    case "text":
      {
        s.isAboutPartsLeftOut && !t ? r += 1 : xi(o, s);
        break;
      }
    case "bar":
      ni(o, s);
      break;
    case "stack":
      t = !mi(o, s) || t;
      break;
    case "line":
      li(o, s);
      break;
    case "strip":
      {
        let {
          at: at_9,
          heights: heights_2,
          ink: ink_11
        } = s;
        heights_2.forEach((item, index) => {
          if (item !== null) o.set({
            x: at_9.x + index,
            y: at_9.y
          }, {
            glyph: ci(item),
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
          f = Ct(parts_5, a => a.width, 0);
        for (let a = 0; a < (f.at(-1)?.to ?? 0); a += ee) {
          let i = Ot(f, a, si);
          for (let x = 0; i !== void 0 && x < rows_18; x++) o.set({
            x: at_10.x + a / ee,
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
        o.set(at_11, {
          glyph: qf(gridWidth_2),
          ink: "quiet"
        });
        for (let n = 1; n < gridWidth_2; n++) o.set({
          x: at_11.x + n,
          y: at_11.y
        }, _t);
        break;
      }
  }
  return o.rows().slice(0, e.rows - r).map(di);
}
var Et = (e, o = "") => `fill="var(--${e})"${o} data-series="${e}"`;
var jr = 2;
var height = 0.7;
var ab = 4.5;
var Wr = 18;
var bt = 0.5;
var Ti = 8;
var ib = 13.3;
var xb = 0.125;
var Rt = 0.1;
var oe = e => (e * Wr).toFixed(1);
var At = e => oe(e.height) !== oe(0);
var q = e => (e * Ti).toFixed(1);
var ye = (e, o) => `${q(e)},${oe(o)}`;
var It = (e, o, t = "") => `<line${t} x1="${q(e.x)}" y1="${oe(e.y)}" x2="${q(o.x)}" y2="${oe(o.y)}" stroke="var(--quiet)"/>`;
function Si(e) {
  let x_7 = e.at.x + bt;
  return It({
    x: x_7,
    y: e.at.y
  }, {
    x: x_7,
    y: e.at.y + 1
  });
}
var gi = (e, o) => ({
  x: o.end - o.part.width,
  y: e.at.y + Rt,
  width: o.part.width,
  height: e.rows - jr * Rt,
  ink: o.part.ink
});
var Oi = e => ({
  x: e.at.x,
  y: e.at.y + (1 - height) / jr,
  width: e.width,
  height: height,
  ink: e.ink
});
var _i = e => e.text.replace(/[&<>]/g, o => `&#${o.charCodeAt(0)};`);
function Ci(e) {
  let x_8 = e.at.x + bt,
    y_10 = e.at.y + bt;
  return It({
    x: x_8,
    y: y_10
  }, {
    x: x_8 + e.gridWidth,
    y: y_10
  }, ' class="grid"');
}
var Li = e => e.isHatched ? ` fill-opacity=".45" stroke="var(--${e.ink})"` : "";
var Ei = e => e.points.map(item => ye(item.x, item.y)).join(" ");
var Nt = (e, o = "") => `<rect x="${q(e.x)}" y="${oe(e.y)}" width="${q(e.width)}" height="${oe(e.height)}" ${Et(e.ink, o)}/>`;
var bi = (e, o) => ({
  x: e.at.x,
  y: o.end,
  width: e.width - xb,
  height: o.part.height,
  ink: o.part.ink
});
var Ri = (e, o) => e.heights.flatMap((item, index) => {
  let s = e.at.x + index,
    p = o - (item ?? 0) * (1 - jr * Rt);
  return [ye(s, p), ye(s + 1, p)];
});
function Ai(e) {
  let o = e.at.y + 1 - Rt;
  return `${ye(e.at.x, o)} ${Ri(e, o).join(" ")} ${ye(e.at.x + e.heights.length, o)}`;
}
var Ii = e => `stroke="var(--${e.ink})" data-series="${e.ink}"`;
var Ni = e => `textLength="${q(w(e.text))}"`;
var Mi = e => `fill="var(--${e.ink})"` + (e.ink === "title" ? ' font-weight="600"' : "");
var wi = e => (e.at.y + bt) * Wr + ab;
var ki = e => `x="${q(e.at.x)}" y="${wi(e)}"`;
function Pi(e) {
  switch (e.kind) {
    case "text":
      return `<text ${ki(e)} ${Ni(e)} ${Mi(e)}>${_i(e)}</text>`;
    case "bar":
      return Nt(Oi(e), Li(e));
    case "stack":
      return Bt(e.parts, o => -o.height, e.at.y).filter(item => At(item.part)).map(item => Nt(bi(e, item))).join("");
    case "axisRow":
      {
        let o = Si(e);
        return e.gridWidth > 0 ? `${o}${Ci(e)}` : o;
      }
    case "strip":
      return `<polygon points="${Ai(e)}" ${Et(e.ink)}/>`;
    case "band":
      return Bt(e.parts, o => o.width, e.at.x).map(item => Nt(gi(e, item))).join("");
    case "line":
      return `<polyline points="${Ei(e)}" ${Ii(e)}/>`;
  }
}
var Di = [`text{font-size:${ib}px;font-family:ui-monospace,Menlo,Consolas,monospace;white-space:pre}`, "polyline{fill:none;stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}", ".grid{opacity:.25}"].join("");
var vr = e => Object.entries(Nr).map(([o, t]) => `--${o}:${t[e]}`).join(";");
var Bb = "@media (prefers-color-scheme: dark)";
function Wb(e) {
  let t = e.shapes.some(item => item.kind === "stack" && !item.parts.every(At)) ? e.shapes : e.shapes.filter(item => !(item.kind === "text" && item.isAboutPartsLeftOut)),
    r = e.columns * Ti,
    s = (e.rows - (e.shapes.length - t.length)) * Wr;
  return [`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${s}" viewBox="0 0 ${r} ${s}">`, `<style>svg{${vr("light")}}${Bb}{svg{${vr("dark")}}}`, `${Di}</style>`, ...t.map(Pi), "</svg>"].join(`
`);
}
var Hr = 100;
var Kb = 1000;
var zb = 2;
var Bi = 40;
var Jb = 5;
var Zb = 66;
var ji = e => sum(e.series.flatMap(item => item.samples).map(item => item.value === null ? 0 : 1));
var Wi = (e, o) => ({
  ...e,
  outcome: "drawn",
  form: o.form,
  format: Hm(o),
  seriesCount: o.series.length,
  pointCount: ji(o),
  hasLeftOut: o.leftOutNotes.length > 0
});
var $r = (e, o, t) => Number.isNaN(e) ? t : Math.min(Math.floor(e), o);
function Ze(e, o, t) {
  let r = __(e, o);
  return {
    kind: "chart",
    modelText: La(r).join(`
`),
    terminalRows: s => qE(Xf(r, Math.max(0, $r(s, Kb, 0)))),
    svg: (s = Hr) => Wb(Xf(r, Math.max(Na, $r(s, Hr, Hr)))),
    usage: Wi(t, e)
  };
}
var vi = 1 + Jm + zb * ln;
var co = (outcome, o, t) => ({
  kind: "refused",
  modelText: ("Not drawn. " + go(o, vi, "more line").join(`
- `)).split(`
`).map(item => Lo(item, Zb, 1 / 0).join(`
  `)).join(`
`),
  usage: {
    ...t,
    outcome: outcome
  }
});
var Hi = (e, o, t) => Ze({
  ...e,
  notes: [`drawn as bars, not as ${o.form ?? "line"}: ${o.x ?? "x"} holds names, not times`, ...e.notes]
}, Mo(o), {
  ...t,
  isFormReplaced: !0
});
function Gr(e, o, t) {
  let r = o.slice(-Jb).map(({
      id: id,
      tool: tool,
      text: text_6
    }) => `${me(id, Bi)} (${me(tool, Bi)}, ${K(text_6.length, "character")})`),
    s = r.length > 0;
  return co(e.code, [e.why + (s ? `
Or name another tool result:` : ""), ...r], t);
}
var $i = e => e ? {
  code: "no_result",
  why: "No tool has answered yet. Pass the rows as data"
} : {
  code: "data_not_found",
  why: "data is neither the id of a tool result nor a table. Pass an id, JSON records, or the text of a CSV, TSV or markdown table"
};
var aR = /\n|^[[{]/;
function Ki(e) {
  let o = j(e) ? e.data : void 0;
  return typeof o === "string" && aR.test(o.trim()) ? o : void 0;
}
var Xi = (e, o, t) => ({
  ...e,
  format: t ? Hm(o) : e.format
});
function zi(e) {
  return j(e) ? {
    ...e,
    ...(typeof e.y === "string" && {
      y: [e.y]
    }),
    ...(typeof e.by === "string" && {
      by: [e.by]
    })
  } : e;
}
var Yi = e => e.form === "share" ? {
  ...e,
  combine: e.combine ?? "sum"
} : e;
function Ji(e) {
  let o = zi(Co(e.input ?? {}));
  if (!Cx(o)) return co("bad_call", Wt(o), ao);
  let r = Yi(o),
    {
      data: data_3
    } = r,
    p = e.results.filter(item => item.tool !== tool_3),
    m = data_3 === void 0,
    n = m ? p.findLast(Te => Te.text.trim() !== "") : p.find(item => item.id === data_3),
    f = p.filter(item => item !== n),
    a = Ki(e.input),
    i = typeof data_3 === "object" ? JSON.stringify(data_3) : void 0,
    x = i ?? n?.text ?? a,
    c = zm(r, i ? "rows" : n ? m ? "last_result" : "result_id" : a === void 0 ? "none" : "text");
  if (x === void 0) return Gr($i(m), f, c);
  let O = {
      zone: r.zone === "local" ? e.zone : "UTC",
      nowMs: e.nowMs
    },
    T = Cr(x, r, O);
  if (T.kind === "data") return Ze(T, r, c);
  let C = T.problem.fitsBars ? Ym(T, Cr(x, Mo(r), O), r) : T;
  if (C.kind === "data") return Hi(C, r, c);
  let [L, ...he] = C.tables;
  return L !== void 0 ? co(C.problem.code, [C.problem.why, ...KT(C.tables)], Xi(c, L, he.length === 0)) : Gr(C.problem, f, c);
}
function Kr(e) {
  let o = {
      form: "line"
    },
    t = Cr(e, o, {
      zone: "UTC",
      nowMs: null
    });
  return t.kind === "data" && t.isSeries && t.leftOutNotes.length === 0 ? Ze(t, o, {
    ...ao,
    dataFrom: "last_result"
  }) : {
    kind: "none"
  };
}
function zr(e, o) {
  if (e.tool.register(ic).catch(t => e.ui.log(`no chart tool: ${String(t)}`, {
    to: "debug"
  })), o) e.telemetry.log(ST(o)).catch(() => {
    return;
  });
}
function yo(e, o, t) {
  e.telemetry.mark(yT(o, t.isAsked)).catch(() => {
    return;
  }), e.session.surfaces().catch(() => []).then(surfaces => e.telemetry.log(xT(o, {
    isAsked: t.isAsked,
    isInSubagent: t.agentId !== void 0,
    surfaces: surfaces,
    elapsedMs: t.elapsedMs
  }))).catch(() => {
    return;
  });
}
var CR = 256;
var ER = 80;
function De(e, o, t) {
  if (t.kind === "none") return e.chartlessIds.add(o), t;
  let r = [...e.charts.keys()].at(-1);
  if (e.charts.size >= CR && r !== void 0) e.charts.delete(r);
  return e.charts.set(o, t), t;
}
var Vi = (e, o) => ({
  ...e,
  ...(j(o) && o)
});
var Zi = (text_7, easel) => ({
  type: "text",
  text: text_7,
  _meta: {
    easel: easel
  }
});
function Ue(e, o = "") {
  return typeof e === "string" ? e || o : S(e, "[].text").filter(item => typeof item === "string").join(`
`) || o;
}
var qi = e => ({
  id: e.tool_use_id,
  tool: e.tool,
  input: e.input,
  storedResult: e.result,
  text: Ue(e.result, e.text)
});
function Mt(e) {
  return (Array.isArray(e) ? e.flatMap(item => item.toolUses) : []).flatMap(item => item.text === void 0 || item.isError ? [] : [qi(item)]);
}
var Qi = e => e !== "terminal";
var wt = e => e.length > 0;
var PR = /^(0|false|no|off)$/i;
var DR = /^(1|true|yes|on)$/i;
var tool_5 = /^mcp__(?!easel__)/;
var ol = e => [...(e ?? []), Lx];
function tl(e, o) {
  let t = e?.trim() ?? "";
  return PR.test(t) ? !1 : DR.test(t) || o.axScreenReader === !0;
}
function rl(e) {
  let [o] = S(e, "0._meta.easel"),
    {
      nowMs: nowMs,
      zone: zone_4
    } = j(o) ? o : {};
  return {
    nowMs: typeof nowMs === "number" ? nowMs : null,
    zone: typeof zone_4 === "string" ? zone_4 : "UTC"
  };
}
var sl = e => e.length > 0;
var ho = {
  kind: "none"
};
function Vr(e, o, t) {
  if (o.transcript && o.transcript !== t) return o.transcript;
  let r = e();
  return o.transcript = r, r.catch(() => {
    if (o.transcript === r) o.transcript = void 0;
  }), r;
}
async function pl(e, o, t) {
  let {
    tool_use_id: tool_use_id,
    tool: tool_2,
    output: output,
    isErrored: isErrored
  } = t.row;
  if (isErrored || output === void 0 || tool_use_id === void 0) return ho;
  let a = o.chartlessIds.has(tool_use_id) ? ho : o.charts.get(tool_use_id);
  if (a) return a;
  let i = tool_2 !== tool_3;
  if (i && t.hasWholeOutput) return De(o, tool_use_id, Kr(Ue(output)));
  let l = Vr(e, o),
    d = await ((await l).some(item => item.id === tool_use_id) ? l : Vr(e, o, l)),
    c = d.findIndex(item => item.id === tool_use_id),
    O = d[c];
  if (!O) return sl(d) ? De(o, tool_use_id, ho) : ho;
  return De(o, tool_use_id, i ? Kr(Ue(O.storedResult)) : Ji({
    input: O.input,
    results: d.slice(0, c),
    ...rl(O.storedResult)
  }));
}
var ml = (e, o, t) => h(e.Box, {
  flexDirection: "column"
}, o.hostRow, t);
function GR(e) {
  let o = e.callCount > 1;
  return h(e.elements.Box, {
    flexDirection: "column"
  }, h(e.elements.Svg, {
    source: e.chart.svg(e.columns),
    alt: e.chart.modelText
  }), o ? h(e.elements.Text, {
    dimColor: !0
  }, `newest of ${e.callCount} calls: open the group for the rest`) : null);
}
var KR = 6;
var al = e => e > 1 ? `newest of ${e} calls, ctrl+o for the rest \xB7 ` : "";
var fl = e => `auto chart \xB7 ${al(e)}turn off in /config: Auto charts`;
var il = e => e === void 0 ? [] : [fl(e)];
var VR = "  \u23BF  ";
function xl(e, o) {
  let t = e.columns - KR;
  return h(e.elements.Box, {
    flexDirection: "row"
  }, h(e.elements.Text, {
    dimColor: !0
  }, VR), h(e.elements.Text, null, e.chart.terminalRows(t).concat(o.flatMap(item => Lo(item, t)).map(r => [{
    text: r,
    ink: "quiet"
  }])).flatMap((item, index) => [index > 0 ? `
` : "", ...item.map(item => h(e.elements.Text, {
    color: Nr[item.ink].host,
    backgroundColor: item.background && Nr[item.background].host,
    bold: item.ink === "title"
  }, item.text))])));
}
function QR(e) {
  let o = il(e.autoCallCount);
  return e.isScreenReader ? h(e.elements.Text, null, [e.chart.modelText, ...o].join(`
`)) : xl(e, o);
}
async function kt(e, o) {
  let {
      cache: cache,
      event: event,
      rows: rows_19
    } = o,
    columns_7 = event.viewport?.columns;
  for (let row_2 of rows_19.toReversed()) {
    let chart_3 = await pl(async () => Mt(await e.session.messages({})), cache, {
      row: row_2,
      hasWholeOutput: event.surface === "terminal"
    });
    if (chart_3.kind !== "chart") continue;
    if (event.surface !== "terminal") {
      let i = GR({
        elements: e.ui.resolve(event),
        chart: chart_3,
        columns: columns_7,
        callCount: rows_19.length
      });
      return ml(e.ui.resolve(event), o, i);
    }
    if (cache.screenReader === "unread") {
      let i = tl(await e.env.get("CLAUDE_AX_SCREEN_READER"), await e.settings.read());
      cache.screenReader = i ? "on" : "off";
    }
    let f = row_2.tool === tool_3,
      a = QR({
        elements: e.ui.resolve(event),
        chart: chart_3,
        columns: columns_7 ?? ER,
        isScreenReader: cache.screenReader === "on",
        autoCallCount: f ? void 0 : rows_19.length
      });
    return ml(e.ui.resolve(event), o, a);
  }
  return o.hostRow;
}
function mA(e, o, t = {}) {
  let r = t.isReaderOn?.(),
    cache_2 = {
      charts: new Map(),
      chartlessIds: new Set(),
      screenReader: r === void 0 ? "unread" : r ? "on" : "off"
    },
    p = String(o.autoChartSkip ?? "").split(/[\s,]+/),
    m = a => tool_5.test(a) && o.autoCharts !== !1 && !p.some(item => a.startsWith(`mcp__${item}__`)),
    n = p.some(item => item !== ""),
    f = o.autoCharts === !1 ? "off" : n && "skips_servers";
  e("session.start", async (a, i, x) => {
    if (wt(await a.session.surfaces())) zr(a, f);
    return x(i);
  }), e("session.attach", (a, i, x) => (zr(a, f), x(i))), e("prompt.section", {
    name: "env_info_simple"
  }, async (a, i, x) => {
    let l = await x(i);
    return l.text !== null && wt(await a.session.surfaces()) ? {
      text: `${l.text}
${bx}`
    } : l;
  }), e("tool.call", {
    tool: tool_3
  }, async (a, i) => {
    let {
        tool: tool_4,
        tool_use_id: tool_use_id_2,
        agentId: agentId,
        consent: consent,
        $shadowed: $shadowed,
        ...O
      } = i,
      input = Vi(O, $shadowed);
    cache_2.transcript = void 0;
    let results = Mt(await a.session.messages(agentId ? {
        agentId: agentId
      } : {})),
      C = {
        nowMs: await a.clock.now(),
        zone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      P = performance.now(),
      L = Ji({
        input: input,
        results: results,
        ...C
      });
    De(cache_2, tool_use_id_2, L), yo(a, L.usage, {
      isAsked: !0,
      agentId: agentId,
      elapsedMs: performance.now() - P
    });
    let he = L.modelText;
    return L.kind === "chart" ? {
      result: [Zi(he, C)]
    } : {
      deny: he
    };
  }).catch((a, i) => (yo(a, ao, {
    isAsked: !0,
    agentId: i.agentId,
    elapsedMs: 0
  }), {
    deny: deny
  })), e("tool.call", {
    tool: tool_5
  }, async (a, i, x) => {
    let l = await x(i);
    if (cache_2.transcript = void 0, "deny" in l || l.isError || !m(i.tool) || i.agentId !== void 0 || !wt(await a.session.surfaces())) return l;
    let d = performance.now(),
      c = Kr(Ue(l.result));
    if (De(cache_2, i.tool_use_id, c), c.kind !== "chart") return l;
    return yo(a, c.usage, {
      isAsked: !1,
      agentId: i.agentId,
      elapsedMs: performance.now() - d
    }), {
      ...l,
      context: ol(l.context)
    };
  }).catch(async (a, i, x) => {
    let l = await x(i);
    return yo(a, ao, {
      isAsked: !1,
      agentId: i.agentId,
      elapsedMs: 0
    }), l;
  }), e("ui.render", {
    component: "ToolResult",
    surface: "terminal",
    props: {
      tool: tool_3
    }
  }, async (a, event_2, x) => (await kt(a, {
    cache: cache_2,
    event: event_2,
    hostRow: null,
    rows: [event_2.props]
  })) ?? x(event_2)), e("ui.render", {
    component: "ToolUse",
    props: {
      tool: /^mcp__/
    }
  }, async (a, event_3, x) => {
    let {
        tool: tool_6
      } = event_3.props,
      rows_20 = (tool_6 === tool_3 ? Qi(event_3.surface) : m(tool_6)) ? [event_3.props] : [];
    return kt(a, {
      cache: cache_2,
      event: event_3,
      hostRow: await x(event_3),
      rows: rows_20
    });
  }), e("ui.render", {
    component: "ToolGroup",
    props: {
      isExpanded: !1
    }
  }, async (a, event_4, x) => {
    let rows_21 = event_4.props.calls.filter(item => m(item.tool));
    return kt(a, {
      cache: cache_2,
      event: event_4,
      hostRow: await x(event_4),
      rows: rows_21
    });
  });
}
export { Zr as default, mA as register };