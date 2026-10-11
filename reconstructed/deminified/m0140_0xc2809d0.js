// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, bn } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { vHr, zMo, Kun, bRe, kYe } from "B:/~BUN/root/chunk-gf53qpk6.js";
class A {
  diff(e, n, r = {}) {
    let i;
    if (typeof r === "function") i = r, r = {};else if ("callback" in r) i = r.callback;
    let o = this.castInput(e, r),
      s = this.castInput(n, r),
      l = this.removeEmpty(this.tokenize(o, r)),
      a = this.removeEmpty(this.tokenize(s, r));
    return this.diffWithOptionsObj(l, a, r, i);
  }
  diffWithOptionsObj(e, n, r, i) {
    var o;
    let s = h => {
        if (h = this.postProcess(h, r), i) {
          setTimeout(function () {
            i(h);
          }, 0);
          return;
        } else return h;
      },
      l = n.length,
      a = e.length,
      u = 1,
      f = l + a;
    if (r.maxEditLength != null) f = Math.min(f, r.maxEditLength);
    let m = (o = r.timeout) !== null && o !== void 0 ? o : 1 / 0,
      g = Date.now() + m,
      c = [{
        oldPos: -1,
        lastComponent: void 0
      }],
      L = this.extractCommon(c[0], n, e, 0, r);
    if (c[0].oldPos + 1 >= a && L + 1 >= l) return s(this.buildValues(c[0].lastComponent, n, e));
    let x = -1 / 0,
      E = 1 / 0,
      C = () => {
        for (let h = Math.max(x, -u); h <= Math.min(E, u); h += 2) {
          let v,
            w = c[h - 1],
            S = c[h + 1];
          if (w) c[h - 1] = void 0;
          let P = !1;
          if (S) {
            let D = S.oldPos - h;
            P = S && 0 <= D && D < l;
          }
          let j = w && w.oldPos + 1 < a;
          if (!P && !j) {
            c[h] = void 0;
            continue;
          }
          if (!j || P && w.oldPos < S.oldPos) v = this.addToPath(S, !0, !1, 0, r);else v = this.addToPath(w, !1, !0, 1, r);
          if (L = this.extractCommon(v, n, e, h, r), v.oldPos + 1 >= a && L + 1 >= l) return s(this.buildValues(v.lastComponent, n, e)) || !0;else {
            if (c[h] = v, v.oldPos + 1 >= a) E = Math.min(E, h - 1);
            if (L + 1 >= l) x = Math.max(x, h + 1);
          }
        }
        u++;
      };
    if (i) (function h() {
      setTimeout(function () {
        if (u > f || Date.now() > g) return i(void 0);
        if (!C()) h();
      }, 0);
    })();else while (u <= f && Date.now() <= g) {
      let h = C();
      if (h) return h;
    }
  }
  addToPath(e, added, removed, i, o) {
    let s = e.lastComponent;
    if (s && !o.oneChangePerToken && s.added === added && s.removed === removed) return {
      oldPos: e.oldPos + i,
      lastComponent: {
        count: s.count + 1,
        added: added,
        removed: removed,
        previousComponent: s.previousComponent
      }
    };else return {
      oldPos: e.oldPos + i,
      lastComponent: {
        count: 1,
        added: added,
        removed: removed,
        previousComponent: s
      }
    };
  }
  extractCommon(e, n, r, i, o) {
    let s = n.length,
      l = r.length,
      oldPos = e.oldPos,
      u = oldPos - i,
      count = 0;
    while (u + 1 < s && oldPos + 1 < l && this.equals(r[oldPos + 1], n[u + 1], o)) if (u++, oldPos++, count++, o.oneChangePerToken) e.lastComponent = {
      count: 1,
      previousComponent: e.lastComponent,
      added: !1,
      removed: !1
    };
    if (count && !o.oneChangePerToken) e.lastComponent = {
      count: count,
      previousComponent: e.lastComponent,
      added: !1,
      removed: !1
    };
    return e.oldPos = oldPos, u;
  }
  equals(e, n, r) {
    if (r.comparator) return r.comparator(e, n);else return e === n || !!r.ignoreCase && e.toLowerCase() === n.toLowerCase();
  }
  removeEmpty(e) {
    let n = [];
    for (let r = 0; r < e.length; r++) if (e[r]) n.push(e[r]);
    return n;
  }
  castInput(e, n) {
    return e;
  }
  tokenize(e, n) {
    return Array.from(e);
  }
  join(e) {
    return e.join("");
  }
  postProcess(e, n) {
    return e;
  }
  get useLongestToken() {
    return !1;
  }
  buildValues(e, n, r) {
    let i = [],
      o;
    while (e) i.push(e), o = e.previousComponent, delete e.previousComponent, e = o;
    i.reverse();
    let s = i.length,
      l = 0,
      a = 0,
      u = 0;
    for (; l < s; l++) {
      let f = i[l];
      if (!f.removed) {
        if (!f.added && this.useLongestToken) {
          let m = n.slice(a, a + f.count);
          m = m.map(function (item, index) {
            let L = r[u + index];
            return L.length > item.length ? L : item;
          }), f.value = this.join(m);
        } else f.value = this.join(n.slice(a, a + f.count));
        if (a += f.count, !f.added) u += f.count;
      } else f.value = this.join(r.slice(u, u + f.count)), u += f.count;
    }
    return i;
  }
}
class z extends A {
  constructor() {
    super(...arguments);
    this.tokenize = Q;
  }
  equals(e, n, r) {
    if (r.ignoreWhitespace) {
      if (!r.newlineIsToken || !e.includes(`
`)) e = e.trim();
      if (!r.newlineIsToken || !n.includes(`
`)) n = n.trim();
    } else if (r.ignoreNewlineAtEof && !r.newlineIsToken) {
      if (e.endsWith(`
`)) e = e.slice(0, -1);
      if (n.endsWith(`
`)) n = n.slice(0, -1);
    }
    return super.equals(e, n, r);
  }
}
var U = new z();
function JDe(e, n, r) {
  return U.diff(e, n, r);
}
function Q(e, n) {
  if (n.stripTrailingCr) e = e.replace(/\r\n/g, `
`);
  let r = [],
    i = e.split(/(\n|\r\n)/);
  if (!i[i.length - 1]) i.pop();
  for (let o = 0; o < i.length; o++) {
    let s = i[o];
    if (o % 2 && !n.newlineIsToken) r[r.length - 1] += s;else r.push(s);
  }
  return r;
}
function g3(oldFileName, newFileName, r, i, oldHeader, newHeader, callback) {
  let a;
  if (!callback) a = {};else if (typeof callback === "function") a = {
    callback: callback
  };else a = callback;
  if (typeof a.context > "u") a.context = 4;
  let context = a.context;
  if (a.newlineIsToken) throw Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  if (!a.callback) return f(JDe(r, i, a));else {
    let {
      callback: callback_2
    } = a;
    JDe(r, i, Object.assign(Object.assign({}, a), {
      callback: g => {
        let c = f(g);
        callback_2(c);
      }
    }));
  }
  function f(m) {
    if (!m) return;
    m.push({
      value: "",
      lines: []
    });
    function g(v) {
      return v.map(function (item) {
        return " " + item;
      });
    }
    let hunks = [],
      oldStart = 0,
      newStart = 0,
      lines = [],
      C = 1,
      h = 1;
    for (let v = 0; v < m.length; v++) {
      let w = m[v],
        S = w.lines || K(w.value);
      if (w.lines = S, w.added || w.removed) {
        if (!oldStart) {
          let P = m[v - 1];
          if (oldStart = C, newStart = h, P) lines = context > 0 ? g(P.lines.slice(-context)) : [], oldStart -= lines.length, newStart -= lines.length;
        }
        for (let P of S) lines.push((w.added ? "+" : "-") + P);
        if (w.added) h += S.length;else C += S.length;
      } else {
        if (oldStart) if (S.length <= context * 2 && v < m.length - 2) for (let P of g(S)) lines.push(P);else {
          let P = Math.min(S.length, context);
          for (let D of g(S.slice(0, P))) lines.push(D);
          let j = {
            oldStart: oldStart,
            oldLines: C - oldStart + P,
            newStart: newStart,
            newLines: h - newStart + P,
            lines: lines
          };
          hunks.push(j), oldStart = 0, newStart = 0, lines = [];
        }
        C += S.length, h += S.length;
      }
    }
    for (let v of hunks) for (let w = 0; w < v.lines.length; w++) if (v.lines[w].endsWith(`
`)) v.lines[w] = v.lines[w].slice(0, -1);else v.lines.splice(w + 1, 0, "\\ No newline at end of file"), w++;
    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }
}
function K(e) {
  let n = e.endsWith(`
`),
    r = e.split(`
`).map(item => item + `
`);
  if (n) r.pop();else r.push(r.pop().slice(0, -1));
  return r;
}
function R(e, n) {
  let r;
  for (r = 0; r < e.length && r < n.length; r++) if (e[r] != n[r]) return e.slice(0, r);
  return e.slice(0, r);
}
function H(e, n) {
  let r;
  if (!e || !n || e[e.length - 1] != n[n.length - 1]) return "";
  for (r = 0; r < e.length && r < n.length; r++) if (e[e.length - (r + 1)] != n[n.length - (r + 1)]) return e.slice(-r);
  return e.slice(-r);
}
function O(e, n, r) {
  if (e.slice(0, n.length) != n) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(n)}; this is a bug`);
  return r + e.slice(n.length);
}
function N(e, n, r) {
  if (!n) return e + r;
  if (e.slice(-n.length) != n) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(n)}; this is a bug`);
  return e.slice(0, -n.length) + r;
}
function W(e, n) {
  return O(e, n, "");
}
function b(e, n) {
  return N(e, n, "");
}
function _(e, n) {
  return n.slice(0, ee(e, n));
}
function ee(e, n) {
  let r = 0;
  if (e.length > n.length) r = e.length - n.length;
  let i = n.length;
  if (e.length < n.length) i = e.length;
  let o = Array(i),
    s = 0;
  o[0] = 0;
  for (let l = 1; l < i; l++) {
    if (n[l] == n[s]) o[l] = o[s];else o[l] = s;
    while (s > 0 && n[l] != n[s]) s = o[s];
    if (n[l] == n[s]) s++;
  }
  s = 0;
  for (let l = r; l < e.length; l++) {
    while (s > 0 && e[l] != n[s]) s = o[s];
    if (e[l] == n[s]) s++;
  }
  return s;
}
function M(e, n) {
  let r = [];
  for (let i of Array.from(n.segment(e))) {
    let segment = i.segment;
    if (r.length && /\s/.test(r[r.length - 1]) && /\s/.test(segment)) r[r.length - 1] += segment;else r.push(segment);
  }
  return r;
}
function T(e, n) {
  if (n) return I(e, n)[1];
  let r;
  for (r = e.length - 1; r >= 0; r--) if (!e[r].match(/\s/)) break;
  return e.substring(r + 1);
}
function k(e, n) {
  if (n) return I(e, n)[0];
  let r = e.match(/^\s*/);
  return r ? r[0] : "";
}
function I(e, n) {
  if (!n) return [k(e), T(e)];
  if (n.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
  let r = M(e, n),
    i = r[0],
    o = r[r.length - 1],
    s = /\s/.test(i) ? i : "",
    l = /\s/.test(o) ? o : "";
  return [s, l];
}
var F = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",
  regExp = new RegExp(`[${F}]+|\\s+|[^${F}]`, "ug");
class J extends A {
  equals(e, n, r) {
    if (r.ignoreCase) e = e.toLowerCase(), n = n.toLowerCase();
    return e.trim() === n.trim();
  }
  tokenize(e, n = {}) {
    let r;
    if (n.intlSegmenter) {
      let intlSegmenter = n.intlSegmenter;
      if (intlSegmenter.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
      r = M(e, intlSegmenter);
    } else r = e.match(regExp) || [];
    let i = [],
      o = null;
    return r.forEach(item => {
      if (/\s/.test(item)) {
        if (o == null) i.push(item);else i.push(i.pop() + item);
      } else if (o != null && /\s/.test(o)) {
        if (i[i.length - 1] == o) i.push(i.pop() + item);else i.push(o + item);
      } else i.push(item);
      o = item;
    }), i;
  }
  join(e) {
    return e.map((item, index) => {
      if (index == 0) return item;else return item.replace(/^\s+/, "");
    }).join("");
  }
  postProcess(e, n) {
    if (!e || n.oneChangePerToken) return e;
    let r = null,
      i = null,
      o = null;
    if (e.forEach(item => {
      if (item.added) i = item;else if (item.removed) o = item;else {
        if (i || o) G(r, o, i, item, n.intlSegmenter);
        r = item, i = null, o = null;
      }
    }), i || o) G(r, o, i, null, n.intlSegmenter);
    return e;
  }
}
var te = new J();
function G(e, n, r, i, o) {
  if (n && r) {
    let [s, l] = I(n.value, o),
      [a, u] = I(r.value, o);
    if (e) {
      let f = R(s, a);
      e.value = N(e.value, a, f), n.value = W(n.value, f), r.value = W(r.value, f);
    }
    if (i) {
      let f = H(l, u);
      i.value = O(i.value, u, f), n.value = b(n.value, f), r.value = b(r.value, f);
    }
  } else if (r) {
    if (e) {
      let s = k(r.value, o);
      r.value = r.value.substring(s.length);
    }
    if (i) {
      let s = k(i.value, o);
      i.value = i.value.substring(s.length);
    }
  } else if (e && i) {
    let s = k(i.value, o),
      [l, a] = I(n.value, o),
      u = R(s, l);
    n.value = W(n.value, u);
    let f = H(W(s, u), a);
    n.value = b(n.value, f), i.value = O(i.value, s, f), e.value = N(e.value, s, s.slice(0, s.length - f.length));
  } else if (i) {
    let s = k(i.value, o),
      l = T(n.value, o),
      a = _(l, s);
    n.value = b(n.value, a);
  } else if (e) {
    let s = T(e.value, o),
      l = k(n.value, o),
      a = _(s, l);
    n.value = W(n.value, a);
  }
}
class q extends A {
  tokenize(e) {
    let regExp_2 = new RegExp(`(\\r?\\n)|[${F}]+|[^\\S\\n\\r]+|[^${F}]`, "ug");
    return e.match(regExp_2) || [];
  }
}
var X = new q();
function Xkr(e, n, r) {
  return X.diff(e, n, r);
}
class B extends A {
  tokenize(e) {
    return e.slice();
  }
  join(e) {
    return e;
  }
  removeEmpty(e) {
    return e;
  }
}
var V = new B();
function Jkr(e, n, r) {
  return V.diff(e, n, r);
}
function Qkr(e) {
  let n = e.split(/\n/),
    r = [],
    i = 0;
  function o() {
    let a = {};
    r.push(a);
    while (i < n.length) {
      let u = n[i];
      if (/^(---|\+\+\+|@@)\s/.test(u)) break;
      let f = /^(?:Index:|diff(?: -r \w+)+)\s+/.exec(u);
      if (f) a.index = u.substring(f[0].length).trim();
      i++;
    }
    s(a), s(a), a.hunks = [];
    while (i < n.length) {
      let u = n[i];
      if (/^(Index:\s|diff\s|---\s|\+\+\+\s|===================================================================)/.test(u)) break;else if (/^@@/.test(u)) a.hunks.push(l());else if (u) throw Error("Unknown line " + (i + 1) + " " + JSON.stringify(u));else i++;
    }
  }
  function s(a) {
    let u = /^(---|\+\+\+)\s+/.exec(n[i]);
    if (u) {
      let f = u[1],
        m = n[i].substring(3).trim().split("\t", 2),
        g = (m[1] || "").trim(),
        c = m[0].replace(/\\\\/g, "\\");
      if (c.startsWith('"') && c.endsWith('"')) c = c.substr(1, c.length - 2);
      if (f === "---") a.oldFileName = c, a.oldHeader = g;else a.newFileName = c, a.newHeader = g;
      i++;
    }
  }
  function l() {
    var a;
    let u = i,
      f = n[i++],
      m = f.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
      g = {
        oldStart: +m[1],
        oldLines: typeof m[2] > "u" ? 1 : +m[2],
        newStart: +m[3],
        newLines: typeof m[4] > "u" ? 1 : +m[4],
        lines: []
      };
    if (g.oldLines === 0) g.oldStart += 1;
    if (g.newLines === 0) g.newStart += 1;
    let c = 0,
      L = 0;
    for (; i < n.length && (L < g.oldLines || c < g.newLines || ((a = n[i]) === null || a === void 0 ? void 0 : a.startsWith("\\"))); i++) {
      let x = n[i].length == 0 && i != n.length - 1 ? " " : n[i][0];
      if (x === "+" || x === "-" || x === " " || x === "\\") {
        if (g.lines.push(n[i]), x === "+") c++;else if (x === "-") L++;else if (x === " ") c++, L++;
      } else throw Error(`Hunk at line ${u + 1} contained invalid line ${n[i]}`);
    }
    if (!c && g.newLines === 1) g.newLines = 0;
    if (!L && g.oldLines === 1) g.oldLines = 0;
    if (c !== g.newLines) throw Error("Added line count did not match for hunk at line " + (u + 1));
    if (L !== g.oldLines) throw Error("Removed line count did not match for hunk at line " + (u + 1));
    return g;
  }
  while (i < n.length) o();
  return r;
}
var re = /^[a-z0-9][a-z0-9_+#.-]{0,63}$/,
  ie = 16;
function se(e) {
  return e.default ?? e;
}
class Y {
  hljs = null;
  loaded = new Set();
  failed = new Set();
  runtimeDepsEnsured = new WeakSet();
  pluginLanguages = new Map();
  pluginAliases = new Set();
  generation = 0;
  core(e) {
    if (this.hljs) return this.hljs;
    let n = e.loadCore();
    for (let [r, i] of Object.entries(vHr)) if (!n.getLanguage(r)) n.registerLanguage(r, i);
    for (let [r, i] of this.pluginLanguages) if (!n.getLanguage(r)) this.registerResolvedPluginLanguage(n, r, i, {
      emitSadTelemetry: !0
    });
    return this.hljs = n, n;
  }
  ensureLanguage(e, n) {
    let r = this.core(n),
      i = e.toLowerCase(),
      o = n.resolveId(i);
    if (o !== null) {
      if (this.failed.has(o)) return null;
      if (!this.loaded.has(o)) {
        let l = n.loaders[o];
        if (typeof l !== "function") return null;
        try {
          r.registerLanguage(o, se(l()));
        } catch (error) {
          return this.failed.add(o), d(error), null;
        }
        this.loaded.add(o);
        for (let a of n.subLanguageDeps[o] ?? []) this.ensureLanguage(a, n);
      }
      return o;
    }
    let s = r.getLanguage(i);
    if (!s) return null;
    if (!this.runtimeDepsEnsured.has(s)) {
      this.runtimeDepsEnsured.add(s);
      for (let l of oe(s)) if (l !== i) this.ensureLanguage(l, n);
    }
    return i;
  }
  get pluginGrammarGeneration() {
    return this.generation;
  }
  clearPluginLanguages() {
    if (this.generation++, this.hljs) for (let e of this.pluginLanguages.keys()) this.hljs.unregisterLanguage(e);
    this.pluginLanguages.clear(), this.pluginAliases.clear();
  }
  isReservedLanguageId(e) {
    return Object.prototype.hasOwnProperty.call(bRe, e) || Object.prototype.hasOwnProperty.call(kYe, e) || Object.prototype.hasOwnProperty.call(vHr, e) || zMo.has(e) || this.pluginLanguages.has(e) || this.pluginAliases.has(e);
  }
  isPluginLanguageId(e) {
    return this.pluginLanguages.has(e) || this.pluginAliases.has(e);
  }
  addPluginLanguage(e, n, r) {
    if (this.isReservedLanguageId(e)) return !1;
    let i = r.map(item => item.toLowerCase()).filter(item => re.test(item) && item !== e && !this.isReservedLanguageId(item)).slice(0, ie),
      o = s => {
        let l = n(s);
        return l.name = e, l.aliases = i, l.disableAutodetect = !0, l;
      };
    this.pluginLanguages.set(e, o);
    for (let s of i) this.pluginAliases.add(s);
    if (this.hljs && !this.hljs.getLanguage(e)) return this.registerResolvedPluginLanguage(this.hljs, e, o, {
      emitSadTelemetry: !1
    });
    return !0;
  }
  registerResolvedPluginLanguage(e, language, r, {
    emitSadTelemetry: emitSadTelemetry
  }) {
    try {
      let o = r(e);
      return e.registerLanguage(language, () => o), e.highlight("", {
        language: language,
        ignoreIllegals: !0
      }), !0;
    } catch (error) {
      if (this.pluginLanguages.delete(language), e.getLanguage(language)) e.unregisterLanguage(language);
      if (emitSadTelemetry) p("plugin_hljs_languages", "resolve_failed");
      return t(`plugin hljs grammar '${language}' failed to resolve at registration: ${error instanceof Error ? error.message : String(error)}`, {
        level: "error"
      }), !1;
    }
  }
}
function oe(e) {
  let n = new Set(),
    r = new Set();
  function i(o) {
    if (o === null || typeof o !== "object" || r.has(o)) return;
    r.add(o);
    let s = o;
    for (let l of [s.subLanguage ?? []].flat()) if (typeof l === "string") n.add(l);
    for (let l of s.contains ?? []) i(l);
    i(s.starts);
    for (let l of s.variants ?? []) i(l);
  }
  return i(e), n;
}
var Mke = new Y();
import { extname as le } from "path";
function Zkr(e) {
  let n = e.toLowerCase();
  return Object.prototype.hasOwnProperty.call(bRe, n) ? n : Object.prototype.hasOwnProperty.call(kYe, n) ? kYe[n] ?? null : null;
}
async function zqe(e) {
  let n = le(e).slice(1);
  if (!n) return y("unknown");
  let r = n.toLowerCase(),
    i = Zkr(r);
  if (i !== null) return Z(bRe[i]);
  if (Mke.isPluginLanguageId(r)) return y("plugin");
  return Z(Object.prototype.hasOwnProperty.call(Kun, r) ? Kun[r] : void 0);
}
function Z(e) {
  return e === void 0 ? y("unknown") : bn(e);
}
export { Xkr, JDe, Jkr, Qkr, g3, Mke, Zkr, zqe };