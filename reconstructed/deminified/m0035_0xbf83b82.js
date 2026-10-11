// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
var R = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date,
  D = new Set(),
  x = typeof process === "object" && !!process ? process : {},
  L = (e, i, s, n) => {
    typeof x.emitWarning === "function" ? x.emitWarning(e, i, s, n) : console.error(`[${s}] ${i}: ${e}`);
  },
  {
    AbortController: AbortController,
    AbortSignal: AbortSignal
  } = globalThis;
if (typeof AbortController > "u") {
  AbortSignal = class {
    onabort;
    _onabort = [];
    reason;
    aborted = !1;
    addEventListener(n, r) {
      this._onabort.push(r);
    }
  }, AbortController = class {
    constructor() {
      i();
    }
    signal = new AbortSignal();
    abort(n) {
      if (this.signal.aborted) return;
      this.signal.reason = n, this.signal.aborted = !0;
      for (let r of this.signal._onabort) r(n);
      this.signal.onabort?.(n);
    }
  };
  let e = x.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
    i = () => {
      if (!e) return;
      e = !1, L("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", i);
    };
}
var I = e => !D.has(e),
  N = Symbol("type"),
  z = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
  k = e => !z(e) ? null : e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? T : null;
class T extends Array {
  constructor(e) {
    super(e);
    this.fill(0);
  }
}
class F {
  heap;
  length;
  static #l = !1;
  static create(e) {
    let i = k(e);
    if (!i) return [];
    F.#l = !0;
    let s = new F(e, i);
    return F.#l = !1, s;
  }
  constructor(e, i) {
    if (!F.#l) throw TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new i(e), this.length = 0;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
}
class pd {
  #l;
  #c;
  #m;
  #p;
  #C;
  #x;
  ttl;
  ttlResolution;
  ttlAutopurge;
  updateAgeOnGet;
  updateAgeOnHas;
  allowStale;
  noDisposeOnSet;
  noUpdateTTL;
  maxEntrySize;
  sizeCalculation;
  noDeleteOnFetchRejection;
  noDeleteOnStaleGet;
  allowStaleOnFetchAbort;
  allowStaleOnFetchRejection;
  ignoreFetchAbort;
  #n;
  #w;
  #s;
  #i;
  #t;
  #a;
  #u;
  #o;
  #r;
  #S;
  #h;
  #y;
  #b;
  #d;
  #_;
  #F;
  #f;
  static unsafeExposeInternals(e) {
    return {
      starts: e.#b,
      ttls: e.#d,
      sizes: e.#y,
      keyMap: e.#s,
      keyList: e.#i,
      valList: e.#t,
      next: e.#a,
      prev: e.#u,
      get head() {
        return e.#o;
      },
      get tail() {
        return e.#r;
      },
      free: e.#S,
      isBackgroundFetch: i => e.#e(i),
      backgroundFetch: (i, s, n, r) => e.#D(i, s, n, r),
      moveToTail: i => e.#O(i),
      indexes: i => e.#A(i),
      rindexes: i => e.#v(i),
      isStale: i => e.#g(i)
    };
  }
  get max() {
    return this.#l;
  }
  get maxSize() {
    return this.#c;
  }
  get calculatedSize() {
    return this.#w;
  }
  get size() {
    return this.#n;
  }
  get fetchMethod() {
    return this.#C;
  }
  get memoMethod() {
    return this.#x;
  }
  get dispose() {
    return this.#m;
  }
  get disposeAfter() {
    return this.#p;
  }
  constructor(e) {
    let {
      max = 0,
      ttl: ttl,
      ttlResolution = 1,
      ttlAutopurge: ttlAutopurge,
      updateAgeOnGet: updateAgeOnGet,
      updateAgeOnHas: updateAgeOnHas,
      allowStale: allowStale,
      dispose: dispose,
      disposeAfter: disposeAfter,
      noDisposeOnSet: noDisposeOnSet,
      noUpdateTTL: noUpdateTTL,
      maxSize = 0,
      maxEntrySize = 0,
      sizeCalculation: sizeCalculation,
      fetchMethod: fetchMethod,
      memoMethod: memoMethod,
      noDeleteOnFetchRejection: noDeleteOnFetchRejection,
      noDeleteOnStaleGet: noDeleteOnStaleGet,
      allowStaleOnFetchRejection: allowStaleOnFetchRejection,
      allowStaleOnFetchAbort: allowStaleOnFetchAbort,
      ignoreFetchAbort: ignoreFetchAbort
    } = e;
    if (max !== 0 && !z(max)) throw TypeError("max option must be a nonnegative integer");
    let v = max ? k(max) : Array;
    if (!v) throw Error("invalid max value: " + max);
    if (this.#l = max, this.#c = maxSize, this.maxEntrySize = maxEntrySize || this.#c, this.sizeCalculation = sizeCalculation, this.sizeCalculation) {
      if (!this.#c && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation !== "function") throw TypeError("sizeCalculation set to non-function");
    }
    if (memoMethod !== void 0 && typeof memoMethod !== "function") throw TypeError("memoMethod must be a function if defined");
    if (this.#x = memoMethod, fetchMethod !== void 0 && typeof fetchMethod !== "function") throw TypeError("fetchMethod must be a function if specified");
    if (this.#C = fetchMethod, this.#F = !!fetchMethod, this.#s = new Map(), this.#i = Array(max).fill(void 0), this.#t = Array(max).fill(void 0), this.#a = new v(max), this.#u = new v(max), this.#o = 0, this.#r = 0, this.#S = F.create(max), this.#n = 0, this.#w = 0, typeof dispose === "function") this.#m = dispose;
    if (typeof disposeAfter === "function") this.#p = disposeAfter, this.#h = [];else this.#p = void 0, this.#h = void 0;
    if (this.#_ = !!this.#m, this.#f = !!this.#p, this.noDisposeOnSet = !!noDisposeOnSet, this.noUpdateTTL = !!noUpdateTTL, this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection, this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection, this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort, this.ignoreFetchAbort = !!ignoreFetchAbort, this.maxEntrySize !== 0) {
      if (this.#c !== 0) {
        if (!z(this.#c)) throw TypeError("maxSize must be a positive integer if specified");
      }
      if (!z(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
      this.#N();
    }
    if (this.allowStale = !!allowStale, this.noDeleteOnStaleGet = !!noDeleteOnStaleGet, this.updateAgeOnGet = !!updateAgeOnGet, this.updateAgeOnHas = !!updateAgeOnHas, this.ttlResolution = z(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1, this.ttlAutopurge = !!ttlAutopurge, this.ttl = ttl || 0, this.ttl) {
      if (!z(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
      this.#L();
    }
    if (this.#l === 0 && this.ttl === 0 && this.#c === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !this.#l && !this.#c) {
      if (I("LRU_CACHE_UNBOUNDED")) D.add("LRU_CACHE_UNBOUNDED"), L("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", pd);
    }
  }
  getRemainingTTL(e) {
    return this.#s.has(e) ? 1 / 0 : 0;
  }
  #L() {
    let e = new T(this.#l),
      i = new T(this.#l);
    this.#d = e, this.#b = i, this.#k = (r, h, l = R.now()) => {
      if (i[r] = h !== 0 ? l : 0, e[r] = h, h !== 0 && this.ttlAutopurge) {
        let o = setTimeout(() => {
          if (this.#g(r)) this.#z(this.#i[r], "expire");
        }, h + 1);
        if (o.unref) o.unref();
      }
    }, this.#E = r => {
      i[r] = e[r] !== 0 ? R.now() : 0;
    }, this.#R = (r, h) => {
      if (e[h]) {
        let l = e[h],
          o = i[h];
        if (!l || !o) return;
        r.ttl = l, r.start = o, r.now = s || n();
        let a = r.now - o;
        r.remainingTTL = l - a;
      }
    };
    let s = 0,
      n = () => {
        let r = R.now();
        if (this.ttlResolution > 0) {
          s = r;
          let h = setTimeout(() => s = 0, this.ttlResolution);
          if (h.unref) h.unref();
        }
        return r;
      };
    this.getRemainingTTL = r => {
      let h = this.#s.get(r);
      if (h === void 0) return 0;
      let l = e[h],
        o = i[h];
      if (!l || !o) return 1 / 0;
      let a = (s || n()) - o;
      return l - a;
    }, this.#g = r => {
      let h = i[r],
        l = e[r];
      return !!l && !!h && (s || n()) - h > l;
    };
  }
  #E = () => {};
  #R = () => {};
  #k = () => {};
  #g = () => !1;
  #N() {
    let e = new T(this.#l);
    this.#w = 0, this.#y = e, this.#T = i => {
      this.#w -= e[i], e[i] = 0;
    }, this.#P = (i, s, n, r) => {
      if (this.#e(s)) return 0;
      if (!z(n)) if (r) {
        if (typeof r !== "function") throw TypeError("sizeCalculation must be a function");
        if (n = r(s, i), !z(n)) throw TypeError("sizeCalculation return invalid (expect positive integer)");
      } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return n;
    }, this.#W = (i, s, n) => {
      if (e[i] = s, this.#c) {
        let r = this.#c - e[i];
        while (this.#w > r) this.#M(!0);
      }
      if (this.#w += e[i], n) n.entrySize = s, n.totalCalculatedSize = this.#w;
    };
  }
  #T = e => {};
  #W = (e, i, s) => {};
  #P = (e, i, s, n) => {
    if (s || n) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    return 0;
  };
  *#A({
    allowStale: allowStale_2 = this.allowStale
  } = {}) {
    if (this.#n) for (let i = this.#r;;) {
      if (!this.#U(i)) break;
      if (allowStale_2 || !this.#g(i)) yield i;
      if (i === this.#o) break;else i = this.#u[i];
    }
  }
  *#v({
    allowStale: allowStale_3 = this.allowStale
  } = {}) {
    if (this.#n) for (let i = this.#o;;) {
      if (!this.#U(i)) break;
      if (allowStale_3 || !this.#g(i)) yield i;
      if (i === this.#r) break;else i = this.#a[i];
    }
  }
  #U(e) {
    return e !== void 0 && this.#s.get(this.#i[e]) === e;
  }
  *entries() {
    for (let e of this.#A()) if (this.#t[e] !== void 0 && this.#i[e] !== void 0 && !this.#e(this.#t[e])) yield [this.#i[e], this.#t[e]];
  }
  *rentries() {
    for (let e of this.#v()) if (this.#t[e] !== void 0 && this.#i[e] !== void 0 && !this.#e(this.#t[e])) yield [this.#i[e], this.#t[e]];
  }
  *keys() {
    for (let e of this.#A()) {
      let i = this.#i[e];
      if (i !== void 0 && !this.#e(this.#t[e])) yield i;
    }
  }
  *rkeys() {
    for (let e of this.#v()) {
      let i = this.#i[e];
      if (i !== void 0 && !this.#e(this.#t[e])) yield i;
    }
  }
  *values() {
    for (let e of this.#A()) if (this.#t[e] !== void 0 && !this.#e(this.#t[e])) yield this.#t[e];
  }
  *rvalues() {
    for (let e of this.#v()) if (this.#t[e] !== void 0 && !this.#e(this.#t[e])) yield this.#t[e];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  [Symbol.toStringTag] = "LRUCache";
  find(e, i = {}) {
    for (let s of this.#A()) {
      let n = this.#t[s],
        r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0) continue;
      if (e(r, this.#i[s], this)) return this.get(this.#i[s], i);
    }
  }
  forEach(e, i = this) {
    for (let s of this.#A()) {
      let n = this.#t[s],
        r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0) continue;
      e.call(i, r, this.#i[s], this);
    }
  }
  rforEach(e, i = this) {
    for (let s of this.#v()) {
      let n = this.#t[s],
        r = this.#e(n) ? n.__staleWhileFetching : n;
      if (r === void 0) continue;
      e.call(i, r, this.#i[s], this);
    }
  }
  purgeStale() {
    let e = !1;
    for (let i of this.#v({
      allowStale: !0
    })) if (this.#g(i)) this.#z(this.#i[i], "expire"), e = !0;
    return e;
  }
  info(e) {
    let i = this.#s.get(e);
    if (i === void 0) return;
    let s = this.#t[i],
      value = this.#e(s) ? s.__staleWhileFetching : s;
    if (value === void 0) return;
    let r = {
      value: value
    };
    if (this.#d && this.#b) {
      let h = this.#d[i],
        l = this.#b[i];
      if (h && l) {
        let o = h - (R.now() - l);
        r.ttl = o, r.start = Date.now();
      }
    }
    if (this.#y) r.size = this.#y[i];
    return r;
  }
  dump() {
    let e = [];
    for (let i of this.#A({
      allowStale: !0
    })) {
      let s = this.#i[i],
        n = this.#t[i],
        value_2 = this.#e(n) ? n.__staleWhileFetching : n;
      if (value_2 === void 0 || s === void 0) continue;
      let h = {
        value: value_2
      };
      if (this.#d && this.#b) {
        h.ttl = this.#d[i];
        let l = R.now() - this.#b[i];
        h.start = Math.floor(Date.now() - l);
      }
      if (this.#y) h.size = this.#y[i];
      e.unshift([s, h]);
    }
    return e;
  }
  load(e) {
    this.clear();
    for (let [i, s] of e) {
      if (s.start) {
        let n = Date.now() - s.start;
        s.start = R.now() - n;
      }
      this.set(i, s.value, s);
    }
  }
  set(e, i, s = {}) {
    if (i === void 0) return this.delete(e), this;
    let {
        ttl: ttl_2 = this.ttl,
        start: start,
        noDisposeOnSet: noDisposeOnSet_2 = this.noDisposeOnSet,
        sizeCalculation: sizeCalculation_2 = this.sizeCalculation,
        status: status
      } = s,
      {
        noUpdateTTL: noUpdateTTL_2 = this.noUpdateTTL
      } = s,
      f = this.#P(e, i, s.size || 0, sizeCalculation_2);
    if (this.maxEntrySize && f > this.maxEntrySize) {
      if (status) status.set = "miss", status.maxEntrySizeExceeded = !0;
      return this.#z(e, "set"), this;
    }
    let d = this.#n === 0 ? void 0 : this.#s.get(e);
    if (d === void 0) {
      if (d = this.#n === 0 ? this.#r : this.#S.length !== 0 ? this.#S.pop() : this.#n === this.#l ? this.#M(!1) : this.#n, this.#i[d] = e, this.#t[d] = i, this.#s.set(e, d), this.#a[this.#r] = d, this.#u[d] = this.#r, this.#r = d, this.#n++, this.#W(d, f, status), status) status.set = "add";
      noUpdateTTL_2 = !1;
    } else {
      this.#O(d);
      let g = this.#t[d];
      if (i !== g) {
        if (this.#F && this.#e(g)) {
          g.__abortController.abort(Error("replaced"));
          let {
            __staleWhileFetching: __staleWhileFetching
          } = g;
          if (__staleWhileFetching !== void 0 && !noDisposeOnSet_2) {
            if (this.#_) this.#m?.(__staleWhileFetching, e, "set");
            if (this.#f) this.#h?.push([__staleWhileFetching, e, "set"]);
          }
        } else if (!noDisposeOnSet_2) {
          if (this.#_) this.#m?.(g, e, "set");
          if (this.#f) this.#h?.push([g, e, "set"]);
        }
        if (this.#T(d), this.#W(d, f, status), this.#t[d] = i, status) {
          status.set = "replace";
          let u = g && this.#e(g) ? g.__staleWhileFetching : g;
          if (u !== void 0) status.oldValue = u;
        }
      } else if (status) status.set = "update";
    }
    if (ttl_2 !== 0 && !this.#d) this.#L();
    if (this.#d) {
      if (!noUpdateTTL_2) this.#k(d, ttl_2, start);
      if (status) this.#R(status, d);
    }
    if (!noDisposeOnSet_2 && this.#f && this.#h) {
      let g = this.#h,
        u;
      while (u = g?.shift()) this.#p?.(...u);
    }
    return this;
  }
  pop() {
    try {
      while (this.#n) {
        let e = this.#t[this.#o];
        if (this.#M(!0), this.#e(e)) {
          if (e.__staleWhileFetching) return e.__staleWhileFetching;
        } else if (e !== void 0) return e;
      }
    } finally {
      if (this.#f && this.#h) {
        let e = this.#h,
          i;
        while (i = e?.shift()) this.#p?.(...i);
      }
    }
  }
  #M(e) {
    let i = this.#o,
      s = this.#i[i],
      n = this.#t[i];
    if (this.#F && this.#e(n)) n.__abortController.abort(Error("evicted"));else if (this.#_ || this.#f) {
      if (this.#_) this.#m?.(n, s, "evict");
      if (this.#f) this.#h?.push([n, s, "evict"]);
    }
    if (this.#T(i), e) this.#i[i] = void 0, this.#t[i] = void 0, this.#S.push(i);
    if (this.#n === 1) this.#o = this.#r = 0, this.#S.length = 0;else this.#o = this.#a[i];
    return this.#s.delete(s), this.#n--, i;
  }
  has(e, i = {}) {
    let {
        updateAgeOnHas: updateAgeOnHas_2 = this.updateAgeOnHas,
        status: status_2
      } = i,
      r = this.#s.get(e);
    if (r !== void 0) {
      let h = this.#t[r];
      if (this.#e(h) && h.__staleWhileFetching === void 0) return !1;
      if (!this.#g(r)) {
        if (updateAgeOnHas_2) this.#E(r);
        if (status_2) status_2.has = "hit", this.#R(status_2, r);
        return !0;
      } else if (status_2) status_2.has = "stale", this.#R(status_2, r);
    } else if (status_2) status_2.has = "miss";
    return !1;
  }
  peek(e, i = {}) {
    let {
        allowStale: allowStale_4 = this.allowStale
      } = i,
      n = this.#s.get(e);
    if (n === void 0 || !allowStale_4 && this.#g(n)) return;
    let r = this.#t[n];
    return this.#e(r) ? r.__staleWhileFetching : r;
  }
  #D(e, i, options, context) {
    let __staleWhileFetching_2 = i === void 0 ? void 0 : this.#t[i];
    if (this.#e(__staleWhileFetching_2)) return __staleWhileFetching_2;
    let __abortController = new AbortController(),
      {
        signal: signal
      } = options;
    signal?.addEventListener("abort", () => __abortController.abort(signal.reason), {
      signal: __abortController.signal
    });
    let o = {
        signal: __abortController.signal,
        options: options,
        context: context
      },
      a = (m, y = !1) => {
        let {
            aborted: aborted
          } = __abortController.signal,
          S = options.ignoreFetchAbort && m !== void 0;
        if (options.status) if (aborted && !y) {
          if (options.status.fetchAborted = !0, options.status.fetchError = __abortController.signal.reason, S) options.status.fetchAbortIgnored = !0;
        } else options.status.fetchResolved = !0;
        if (aborted && !S && !y) return d(__abortController.signal.reason);
        let A = u;
        if (this.#t[i] === u) if (m === void 0) {
          if (A.__staleWhileFetching) this.#t[i] = A.__staleWhileFetching;else this.#z(e, "fetch");
        } else {
          if (options.status) options.status.fetchUpdated = !0;
          this.set(e, m, o.options);
        }
        return m;
      },
      f = m => {
        if (options.status) options.status.fetchRejected = !0, options.status.fetchError = m;
        return d(m);
      },
      d = m => {
        let {
            aborted: aborted_2
          } = __abortController.signal,
          c = aborted_2 && options.allowStaleOnFetchAbort,
          S = c || options.allowStaleOnFetchRejection,
          A = S || options.noDeleteOnFetchRejection,
          p = u;
        if (this.#t[i] === u) {
          if (!A || p.__staleWhileFetching === void 0) this.#z(e, "fetch");else if (!c) this.#t[i] = p.__staleWhileFetching;
        }
        if (S) {
          if (options.status && p.__staleWhileFetching !== void 0) options.status.returnedStale = !0;
          return p.__staleWhileFetching;
        } else if (p.__returned === p) throw m;
      },
      g = (m, y) => {
        let c = this.#C?.(e, __staleWhileFetching_2, o);
        if (c && c instanceof Promise) c.then(S => m(S === void 0 ? void 0 : S), y);
        __abortController.signal.addEventListener("abort", () => {
          if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
            if (m(void 0), options.allowStaleOnFetchAbort) m = S => a(S, !0);
          }
        });
      };
    if (options.status) options.status.fetchDispatched = !0;
    let u = new Promise(g).then(a, f),
      w = Object.assign(u, {
        __abortController: __abortController,
        __staleWhileFetching: __staleWhileFetching_2,
        __returned: void 0
      });
    if (i === void 0) this.set(e, w, {
      ...o.options,
      status: void 0
    }), i = this.#s.get(e);else this.#t[i] = w;
    return w;
  }
  #e(e) {
    if (!this.#F) return !1;
    let i = e;
    return !!i && i instanceof Promise && i.hasOwnProperty("__staleWhileFetching") && i.__abortController instanceof AbortController;
  }
  async fetch(e, i = {}) {
    let {
      allowStale: allowStale_5 = this.allowStale,
      updateAgeOnGet: updateAgeOnGet_2 = this.updateAgeOnGet,
      noDeleteOnStaleGet: noDeleteOnStaleGet_2 = this.noDeleteOnStaleGet,
      ttl: ttl_3 = this.ttl,
      noDisposeOnSet: noDisposeOnSet_3 = this.noDisposeOnSet,
      size = 0,
      sizeCalculation: sizeCalculation_3 = this.sizeCalculation,
      noUpdateTTL: noUpdateTTL_3 = this.noUpdateTTL,
      noDeleteOnFetchRejection: noDeleteOnFetchRejection_2 = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: allowStaleOnFetchRejection_2 = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: ignoreFetchAbort_2 = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: allowStaleOnFetchAbort_2 = this.allowStaleOnFetchAbort,
      context: context_2,
      forceRefresh = !1,
      status: status_3,
      signal: signal_2
    } = i;
    if (!this.#F) {
      if (status_3) status_3.fetch = "get";
      return this.get(e, {
        allowStale: allowStale_5,
        updateAgeOnGet: updateAgeOnGet_2,
        noDeleteOnStaleGet: noDeleteOnStaleGet_2,
        status: status_3
      });
    }
    let A = {
        allowStale: allowStale_5,
        updateAgeOnGet: updateAgeOnGet_2,
        noDeleteOnStaleGet: noDeleteOnStaleGet_2,
        ttl: ttl_3,
        noDisposeOnSet: noDisposeOnSet_3,
        size: size,
        sizeCalculation: sizeCalculation_3,
        noUpdateTTL: noUpdateTTL_3,
        noDeleteOnFetchRejection: noDeleteOnFetchRejection_2,
        allowStaleOnFetchRejection: allowStaleOnFetchRejection_2,
        allowStaleOnFetchAbort: allowStaleOnFetchAbort_2,
        ignoreFetchAbort: ignoreFetchAbort_2,
        status: status_3,
        signal: signal_2
      },
      p = this.#s.get(e);
    if (p === void 0) {
      if (status_3) status_3.fetch = "miss";
      let _ = this.#D(e, p, A, context_2);
      return _.__returned = _;
    } else {
      let _ = this.#t[p];
      if (this.#e(_)) {
        let W = allowStale_5 && _.__staleWhileFetching !== void 0;
        if (status_3) {
          if (status_3.fetch = "inflight", W) status_3.returnedStale = !0;
        }
        return W ? _.__staleWhileFetching : _.__returned = _;
      }
      let E = this.#g(p);
      if (!forceRefresh && !E) {
        if (status_3) status_3.fetch = "hit";
        if (this.#O(p), updateAgeOnGet_2) this.#E(p);
        if (status_3) this.#R(status_3, p);
        return _;
      }
      let v = this.#D(e, p, A, context_2),
        C = v.__staleWhileFetching !== void 0 && allowStale_5;
      if (status_3) {
        if (status_3.fetch = E ? "stale" : "refresh", C && E) status_3.returnedStale = !0;
      }
      return C ? v.__staleWhileFetching : v.__returned = v;
    }
  }
  async forceFetch(e, i = {}) {
    let s = await this.fetch(e, i);
    if (s === void 0) throw Error("fetch() returned undefined");
    return s;
  }
  memo(e, i = {}) {
    let s = this.#x;
    if (!s) throw Error("no memoMethod provided to constructor");
    let {
        context: context_3,
        forceRefresh: forceRefresh_2,
        ...options_2
      } = i,
      l = this.get(e, options_2);
    if (!forceRefresh_2 && l !== void 0) return l;
    let o = s(e, l, {
      options: options_2,
      context: context_3
    });
    return this.set(e, o, options_2), o;
  }
  get(e, i = {}) {
    let {
        allowStale: allowStale_6 = this.allowStale,
        updateAgeOnGet: updateAgeOnGet_3 = this.updateAgeOnGet,
        noDeleteOnStaleGet: noDeleteOnStaleGet_3 = this.noDeleteOnStaleGet,
        status: status_4
      } = i,
      l = this.#s.get(e);
    if (l !== void 0) {
      let o = this.#t[l],
        a = this.#e(o);
      if (status_4) this.#R(status_4, l);
      if (this.#g(l)) {
        if (status_4) status_4.get = "stale";
        if (!a) {
          if (!noDeleteOnStaleGet_3) this.#z(e, "expire");
          if (status_4 && allowStale_6) status_4.returnedStale = !0;
          return allowStale_6 ? o : void 0;
        } else {
          if (status_4 && allowStale_6 && o.__staleWhileFetching !== void 0) status_4.returnedStale = !0;
          return allowStale_6 ? o.__staleWhileFetching : void 0;
        }
      } else {
        if (status_4) status_4.get = "hit";
        if (a) return o.__staleWhileFetching;
        if (this.#O(l), updateAgeOnGet_3) this.#E(l);
        return o;
      }
    } else if (status_4) status_4.get = "miss";
  }
  #I(e, i) {
    this.#u[i] = e, this.#a[e] = i;
  }
  #O(e) {
    if (e !== this.#r) {
      if (e === this.#o) this.#o = this.#a[e];else this.#I(this.#u[e], this.#a[e]);
      this.#I(this.#r, e), this.#r = e;
    }
  }
  delete(e) {
    return this.#z(e, "delete");
  }
  #z(e, i) {
    let s = !1;
    if (this.#n !== 0) {
      let n = this.#s.get(e);
      if (n !== void 0) if (s = !0, this.#n === 1) this.#G(i);else {
        this.#T(n);
        let r = this.#t[n];
        if (this.#e(r)) r.__abortController.abort(Error("deleted"));else if (this.#_ || this.#f) {
          if (this.#_) this.#m?.(r, e, i);
          if (this.#f) this.#h?.push([r, e, i]);
        }
        if (this.#s.delete(e), this.#i[n] = void 0, this.#t[n] = void 0, n === this.#r) this.#r = this.#u[n];else if (n === this.#o) this.#o = this.#a[n];else {
          let h = this.#u[n];
          this.#a[h] = this.#a[n];
          let l = this.#a[n];
          this.#u[l] = this.#u[n];
        }
        this.#n--, this.#S.push(n);
      }
    }
    if (this.#f && this.#h?.length) {
      let n = this.#h,
        r;
      while (r = n?.shift()) this.#p?.(...r);
    }
    return s;
  }
  clear() {
    return this.#G("delete");
  }
  #G(e) {
    for (let i of this.#v({
      allowStale: !0
    })) {
      let s = this.#t[i];
      if (this.#e(s)) s.__abortController.abort(Error("deleted"));else {
        let n = this.#i[i];
        if (this.#_) this.#m?.(s, n, e);
        if (this.#f) this.#h?.push([s, n, e]);
      }
    }
    if (this.#s.clear(), this.#t.fill(void 0), this.#i.fill(void 0), this.#d && this.#b) this.#d.fill(0), this.#b.fill(0);
    if (this.#y) this.#y.fill(0);
    if (this.#o = 0, this.#r = 0, this.#S.length = 0, this.#w = 0, this.#n = 0, this.#f && this.#h) {
      let i = this.#h,
        s;
      while (s = i?.shift()) this.#p?.(...s);
    }
  }
}
function MY(e, i = 300000, s) {
  let n = o => typeof i === "function" ? i(o) : i,
    r = new Map(),
    h = new Map(),
    l = async (...o) => {
      let a = b(o),
        f = r.get(a);
      if (f && s && !s(f.value, f.timestamp)) {
        if (f.refreshPromise) return f.refreshPromise;
        r.delete(a), f = void 0;
      }
      let d = Date.now();
      if (!f) {
        let g = h.get(a);
        if (g) return g;
        let u = e(...o);
        h.set(a, u);
        try {
          let value_3 = await u;
          if (h.get(a) === u) r.set(a, {
            value: value_3,
            timestamp: Date.now(),
            refreshing: !1,
            lifetimeMs: n(value_3)
          });
          return value_3;
        } finally {
          if (h.get(a) === u) h.delete(a);
        }
      }
      if (f && d - f.timestamp > f.lifetimeMs && !f.refreshing) {
        f.refreshing = !0;
        let g = f,
          u = e(...o);
        return g.refreshPromise = u, u.then(value_4 => {
          if (r.get(a) === g) r.set(a, {
            value: value_4,
            timestamp: Date.now(),
            refreshing: !1,
            lifetimeMs: n(value_4)
          });
        }).catch(w => {
          if (t(String(w), {
            level: "error"
          }), r.get(a) === g) r.delete(a);
        }), f.value;
      }
      return r.get(a).value;
    };
  return l.cache = {
    clear: () => {
      r.clear(), h.clear();
    }
  }, l;
}
function zI(e, i, max_2 = 100) {
  let n = new pd({
      max: max_2
    }),
    r = (...h) => {
      let l = i(...h),
        o = n.get(l);
      if (o !== void 0) return o;
      let a = e(...h);
      return n.set(l, a), a;
    };
  return r.cache = {
    clear: () => n.clear(),
    size: () => n.size,
    delete: h => n.delete(h),
    get: h => n.peek(h),
    has: h => n.has(h),
    set: (h, l) => void n.set(h, l)
  }, r;
}
var P = new Set();
function rre(e) {
  return P.add(e), e;
}
function e9e(e, i) {
  let s = [];
  for (let n of i) {
    let r = e.get(n);
    if (r !== void 0) s.push([n, r]);
  }
  e.clear();
  for (let [n, r] of s) e.set(n, r);
}
var G = 128;
function CUo(e, i, s) {
  let n = s?.maxSize ?? G,
    r = new Map();
  P.add(r);
  function h(...l) {
    let o = i ? i(...l) : l[0],
      a = r.get(o);
    if (a) return a;
    let f = e(...l);
    if (r.size >= n) r.delete(r.keys().next().value);
    return r.set(o, f), f.catch(() => {
      if (r.get(o) === f) r.delete(o);
    }), f;
  }
  return h.cache = r, h;
}
export { pd, MY, zI, rre, e9e, CUo };