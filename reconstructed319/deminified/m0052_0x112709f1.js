// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var F = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date,
  D = new Set(),
  C = typeof process === "object" && !!process ? process : {},
  L = (t, e, i, s) => {
    typeof C.emitWarning === "function" ? C.emitWarning(t, e, i, s) : console.error(`[${i}] ${e}: ${t}`);
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
    addEventListener(s, n) {
      this._onabort.push(n);
    }
  }, AbortController = class {
    constructor() {
      e();
    }
    signal = new AbortSignal();
    abort(s) {
      if (this.signal.aborted) return;
      this.signal.reason = s, this.signal.aborted = !0;
      for (let n of this.signal._onabort) n(s);
      this.signal.onabort?.(s);
    }
  };
  let t = C.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
    e = () => {
      if (!t) return;
      t = !1, L("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e);
    };
}
var M = t => !D.has(t),
  G = Symbol("type"),
  y = t => t && t === Math.floor(t) && t > 0 && isFinite(t),
  x = t => !y(t) ? null : t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? O : null;
class O extends Array {
  constructor(t) {
    super(t);
    this.fill(0);
  }
}
class T {
  heap;
  length;
  static #l = !1;
  static create(t) {
    let e = x(t);
    if (!e) return [];
    T.#l = !0;
    let i = new T(t, e);
    return T.#l = !1, i;
  }
  constructor(t, e) {
    if (!T.#l) throw TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new e(t), this.length = 0;
  }
  push(t) {
    this.heap[this.length++] = t;
  }
  pop() {
    return this.heap[--this.length];
  }
}
class lu {
  #l;
  #c;
  #p;
  #w;
  #R;
  #W;
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
  #_;
  #s;
  #i;
  #t;
  #a;
  #u;
  #r;
  #h;
  #S;
  #o;
  #m;
  #b;
  #d;
  #y;
  #O;
  #f;
  static unsafeExposeInternals(t) {
    return {
      starts: t.#b,
      ttls: t.#d,
      sizes: t.#m,
      keyMap: t.#s,
      keyList: t.#i,
      valList: t.#t,
      next: t.#a,
      prev: t.#u,
      get head() {
        return t.#r;
      },
      get tail() {
        return t.#h;
      },
      free: t.#S,
      isBackgroundFetch: e => t.#e(e),
      backgroundFetch: (e, i, s, n) => t.#x(e, i, s, n),
      moveToTail: e => t.#C(e),
      indexes: e => t.#A(e),
      rindexes: e => t.#F(e),
      isStale: e => t.#g(e)
    };
  }
  get max() {
    return this.#l;
  }
  get maxSize() {
    return this.#c;
  }
  get calculatedSize() {
    return this.#_;
  }
  get size() {
    return this.#n;
  }
  get fetchMethod() {
    return this.#R;
  }
  get memoMethod() {
    return this.#W;
  }
  get dispose() {
    return this.#p;
  }
  get disposeAfter() {
    return this.#w;
  }
  constructor(t) {
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
    } = t;
    if (max !== 0 && !y(max)) throw TypeError("max option must be a nonnegative integer");
    let b = max ? x(max) : Array;
    if (!b) throw Error("invalid max value: " + max);
    if (this.#l = max, this.#c = maxSize, this.maxEntrySize = maxEntrySize || this.#c, this.sizeCalculation = sizeCalculation, this.sizeCalculation) {
      if (!this.#c && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation !== "function") throw TypeError("sizeCalculation set to non-function");
    }
    if (memoMethod !== void 0 && typeof memoMethod !== "function") throw TypeError("memoMethod must be a function if defined");
    if (this.#W = memoMethod, fetchMethod !== void 0 && typeof fetchMethod !== "function") throw TypeError("fetchMethod must be a function if specified");
    if (this.#R = fetchMethod, this.#O = !!fetchMethod, this.#s = new Map(), this.#i = Array(max).fill(void 0), this.#t = Array(max).fill(void 0), this.#a = new b(max), this.#u = new b(max), this.#r = 0, this.#h = 0, this.#S = T.create(max), this.#n = 0, this.#_ = 0, typeof dispose === "function") this.#p = dispose;
    if (typeof disposeAfter === "function") this.#w = disposeAfter, this.#o = [];else this.#w = void 0, this.#o = void 0;
    if (this.#y = !!this.#p, this.#f = !!this.#w, this.noDisposeOnSet = !!noDisposeOnSet, this.noUpdateTTL = !!noUpdateTTL, this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection, this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection, this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort, this.ignoreFetchAbort = !!ignoreFetchAbort, this.maxEntrySize !== 0) {
      if (this.#c !== 0) {
        if (!y(this.#c)) throw TypeError("maxSize must be a positive integer if specified");
      }
      if (!y(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
      this.#P();
    }
    if (this.allowStale = !!allowStale, this.noDeleteOnStaleGet = !!noDeleteOnStaleGet, this.updateAgeOnGet = !!updateAgeOnGet, this.updateAgeOnHas = !!updateAgeOnHas, this.ttlResolution = y(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1, this.ttlAutopurge = !!ttlAutopurge, this.ttl = ttl || 0, this.ttl) {
      if (!y(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
      this.#U();
    }
    if (this.#l === 0 && this.ttl === 0 && this.#c === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !this.#l && !this.#c) {
      if (M("LRU_CACHE_UNBOUNDED")) D.add("LRU_CACHE_UNBOUNDED"), L("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", lu);
    }
  }
  getRemainingTTL(t) {
    return this.#s.has(t) ? 1 / 0 : 0;
  }
  #U() {
    let t = new O(this.#l),
      e = new O(this.#l);
    this.#d = t, this.#b = e, this.#M = (n, h, r = F.now()) => {
      if (e[n] = h !== 0 ? r : 0, t[n] = h, h !== 0 && this.ttlAutopurge) {
        let o = setTimeout(() => {
          if (this.#g(n)) this.#T(this.#i[n], "expire");
        }, h + 1);
        if (o.unref) o.unref();
      }
    }, this.#z = n => {
      e[n] = t[n] !== 0 ? F.now() : 0;
    }, this.#E = (n, h) => {
      if (t[h]) {
        let r = t[h],
          o = e[h];
        if (!r || !o) return;
        n.ttl = r, n.start = o, n.now = i || s();
        let d = n.now - o;
        n.remainingTTL = r - d;
      }
    };
    let i = 0,
      s = () => {
        let n = F.now();
        if (this.ttlResolution > 0) {
          i = n;
          let h = setTimeout(() => i = 0, this.ttlResolution);
          if (h.unref) h.unref();
        }
        return n;
      };
    this.getRemainingTTL = n => {
      let h = this.#s.get(n);
      if (h === void 0) return 0;
      let r = t[h],
        o = e[h];
      if (!r || !o) return 1 / 0;
      let d = (i || s()) - o;
      return r - d;
    }, this.#g = n => {
      let h = e[n],
        r = t[n];
      return !!r && !!h && (i || s()) - h > r;
    };
  }
  #z = () => {};
  #E = () => {};
  #M = () => {};
  #g = () => !1;
  #P() {
    let t = new O(this.#l);
    this.#_ = 0, this.#m = t, this.#v = e => {
      this.#_ -= t[e], t[e] = 0;
    }, this.#G = (e, i, s, n) => {
      if (this.#e(i)) return 0;
      if (!y(s)) if (n) {
        if (typeof n !== "function") throw TypeError("sizeCalculation must be a function");
        if (s = n(i, e), !y(s)) throw TypeError("sizeCalculation return invalid (expect positive integer)");
      } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return s;
    }, this.#D = (e, i, s) => {
      if (t[e] = i, this.#c) {
        let n = this.#c - t[e];
        while (this.#_ > n) this.#L(!0);
      }
      if (this.#_ += t[e], s) s.entrySize = i, s.totalCalculatedSize = this.#_;
    };
  }
  #v = t => {};
  #D = (t, e, i) => {};
  #G = (t, e, i, s) => {
    if (i || s) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    return 0;
  };
  *#A({
    allowStale: allowStale_2 = this.allowStale
  } = {}) {
    if (this.#n) for (let e = this.#h;;) {
      if (!this.#I(e)) break;
      if (allowStale_2 || !this.#g(e)) yield e;
      if (e === this.#r) break;else e = this.#u[e];
    }
  }
  *#F({
    allowStale: allowStale_3 = this.allowStale
  } = {}) {
    if (this.#n) for (let e = this.#r;;) {
      if (!this.#I(e)) break;
      if (allowStale_3 || !this.#g(e)) yield e;
      if (e === this.#h) break;else e = this.#a[e];
    }
  }
  #I(t) {
    return t !== void 0 && this.#s.get(this.#i[t]) === t;
  }
  *entries() {
    for (let t of this.#A()) if (this.#t[t] !== void 0 && this.#i[t] !== void 0 && !this.#e(this.#t[t])) yield [this.#i[t], this.#t[t]];
  }
  *rentries() {
    for (let t of this.#F()) if (this.#t[t] !== void 0 && this.#i[t] !== void 0 && !this.#e(this.#t[t])) yield [this.#i[t], this.#t[t]];
  }
  *keys() {
    for (let t of this.#A()) {
      let e = this.#i[t];
      if (e !== void 0 && !this.#e(this.#t[t])) yield e;
    }
  }
  *rkeys() {
    for (let t of this.#F()) {
      let e = this.#i[t];
      if (e !== void 0 && !this.#e(this.#t[t])) yield e;
    }
  }
  *values() {
    for (let t of this.#A()) if (this.#t[t] !== void 0 && !this.#e(this.#t[t])) yield this.#t[t];
  }
  *rvalues() {
    for (let t of this.#F()) if (this.#t[t] !== void 0 && !this.#e(this.#t[t])) yield this.#t[t];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  [Symbol.toStringTag] = "LRUCache";
  find(t, e = {}) {
    for (let i of this.#A()) {
      let s = this.#t[i],
        n = this.#e(s) ? s.__staleWhileFetching : s;
      if (n === void 0) continue;
      if (t(n, this.#i[i], this)) return this.get(this.#i[i], e);
    }
  }
  forEach(t, e = this) {
    for (let i of this.#A()) {
      let s = this.#t[i],
        n = this.#e(s) ? s.__staleWhileFetching : s;
      if (n === void 0) continue;
      t.call(e, n, this.#i[i], this);
    }
  }
  rforEach(t, e = this) {
    for (let i of this.#F()) {
      let s = this.#t[i],
        n = this.#e(s) ? s.__staleWhileFetching : s;
      if (n === void 0) continue;
      t.call(e, n, this.#i[i], this);
    }
  }
  purgeStale() {
    let t = !1;
    for (let e of this.#F({
      allowStale: !0
    })) if (this.#g(e)) this.#T(this.#i[e], "expire"), t = !0;
    return t;
  }
  info(t) {
    let e = this.#s.get(t);
    if (e === void 0) return;
    let i = this.#t[e],
      value = this.#e(i) ? i.__staleWhileFetching : i;
    if (value === void 0) return;
    let n = {
      value: value
    };
    if (this.#d && this.#b) {
      let h = this.#d[e],
        r = this.#b[e];
      if (h && r) {
        let o = h - (F.now() - r);
        n.ttl = o, n.start = Date.now();
      }
    }
    if (this.#m) n.size = this.#m[e];
    return n;
  }
  dump() {
    let t = [];
    for (let e of this.#A({
      allowStale: !0
    })) {
      let i = this.#i[e],
        s = this.#t[e],
        value_2 = this.#e(s) ? s.__staleWhileFetching : s;
      if (value_2 === void 0 || i === void 0) continue;
      let h = {
        value: value_2
      };
      if (this.#d && this.#b) {
        h.ttl = this.#d[e];
        let r = F.now() - this.#b[e];
        h.start = Math.floor(Date.now() - r);
      }
      if (this.#m) h.size = this.#m[e];
      t.unshift([i, h]);
    }
    return t;
  }
  load(t) {
    this.clear();
    for (let [e, i] of t) {
      if (i.start) {
        let s = Date.now() - i.start;
        i.start = F.now() - s;
      }
      this.set(e, i.value, i);
    }
  }
  set(t, e, i = {}) {
    if (e === void 0) return this.delete(t), this;
    let {
        ttl: ttl_2 = this.ttl,
        start: start,
        noDisposeOnSet: noDisposeOnSet_2 = this.noDisposeOnSet,
        sizeCalculation: sizeCalculation_2 = this.sizeCalculation,
        status: status
      } = i,
      {
        noUpdateTTL: noUpdateTTL_2 = this.noUpdateTTL
      } = i,
      S = this.#G(t, e, i.size || 0, sizeCalculation_2);
    if (this.maxEntrySize && S > this.maxEntrySize) {
      if (status) status.set = "miss", status.maxEntrySizeExceeded = !0;
      return this.#T(t, "set"), this;
    }
    let a = this.#n === 0 ? void 0 : this.#s.get(t);
    if (a === void 0) {
      if (a = this.#n === 0 ? this.#h : this.#S.length !== 0 ? this.#S.pop() : this.#n === this.#l ? this.#L(!1) : this.#n, this.#i[a] = t, this.#t[a] = e, this.#s.set(t, a), this.#a[this.#h] = a, this.#u[a] = this.#h, this.#h = a, this.#n++, this.#D(a, S, status), status) status.set = "add";
      noUpdateTTL_2 = !1;
    } else {
      this.#C(a);
      let c = this.#t[a];
      if (e !== c) {
        if (this.#O && this.#e(c)) {
          c.__abortController.abort(Error("replaced"));
          let {
            __staleWhileFetching: __staleWhileFetching
          } = c;
          if (__staleWhileFetching !== void 0 && !noDisposeOnSet_2) {
            if (this.#y) this.#p?.(__staleWhileFetching, t, "set");
            if (this.#f) this.#o?.push([__staleWhileFetching, t, "set"]);
          }
        } else if (!noDisposeOnSet_2) {
          if (this.#y) this.#p?.(c, t, "set");
          if (this.#f) this.#o?.push([c, t, "set"]);
        }
        if (this.#v(a), this.#D(a, S, status), this.#t[a] = e, status) {
          status.set = "replace";
          let f = c && this.#e(c) ? c.__staleWhileFetching : c;
          if (f !== void 0) status.oldValue = f;
        }
      } else if (status) status.set = "update";
    }
    if (ttl_2 !== 0 && !this.#d) this.#U();
    if (this.#d) {
      if (!noUpdateTTL_2) this.#M(a, ttl_2, start);
      if (status) this.#E(status, a);
    }
    if (!noDisposeOnSet_2 && this.#f && this.#o) {
      let c = this.#o,
        f;
      while (f = c?.shift()) this.#w?.(...f);
    }
    return this;
  }
  pop() {
    try {
      while (this.#n) {
        let t = this.#t[this.#r];
        if (this.#L(!0), this.#e(t)) {
          if (t.__staleWhileFetching) return t.__staleWhileFetching;
        } else if (t !== void 0) return t;
      }
    } finally {
      if (this.#f && this.#o) {
        let t = this.#o,
          e;
        while (e = t?.shift()) this.#w?.(...e);
      }
    }
  }
  #L(t) {
    let e = this.#r,
      i = this.#i[e],
      s = this.#t[e];
    if (this.#O && this.#e(s)) s.__abortController.abort(Error("evicted"));else if (this.#y || this.#f) {
      if (this.#y) this.#p?.(s, i, "evict");
      if (this.#f) this.#o?.push([s, i, "evict"]);
    }
    if (this.#v(e), t) this.#i[e] = void 0, this.#t[e] = void 0, this.#S.push(e);
    if (this.#n === 1) this.#r = this.#h = 0, this.#S.length = 0;else this.#r = this.#a[e];
    return this.#s.delete(i), this.#n--, e;
  }
  has(t, e = {}) {
    let {
        updateAgeOnHas: updateAgeOnHas_2 = this.updateAgeOnHas,
        status: status_2
      } = e,
      n = this.#s.get(t);
    if (n !== void 0) {
      let h = this.#t[n];
      if (this.#e(h) && h.__staleWhileFetching === void 0) return !1;
      if (!this.#g(n)) {
        if (updateAgeOnHas_2) this.#z(n);
        if (status_2) status_2.has = "hit", this.#E(status_2, n);
        return !0;
      } else if (status_2) status_2.has = "stale", this.#E(status_2, n);
    } else if (status_2) status_2.has = "miss";
    return !1;
  }
  peek(t, e = {}) {
    let {
        allowStale: allowStale_4 = this.allowStale
      } = e,
      s = this.#s.get(t);
    if (s === void 0 || !allowStale_4 && this.#g(s)) return;
    let n = this.#t[s];
    return this.#e(n) ? n.__staleWhileFetching : n;
  }
  #x(t, e, options, context) {
    let __staleWhileFetching_2 = e === void 0 ? void 0 : this.#t[e];
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
      d = (u, w = !1) => {
        let {
            aborted: aborted
          } = __abortController.signal,
          p = options.ignoreFetchAbort && u !== void 0;
        if (options.status) if (aborted && !w) {
          if (options.status.fetchAborted = !0, options.status.fetchError = __abortController.signal.reason, p) options.status.fetchAbortIgnored = !0;
        } else options.status.fetchResolved = !0;
        if (aborted && !p && !w) return a(__abortController.signal.reason);
        let m = f;
        if (this.#t[e] === f) if (u === void 0) {
          if (m.__staleWhileFetching) this.#t[e] = m.__staleWhileFetching;else this.#T(t, "fetch");
        } else {
          if (options.status) options.status.fetchUpdated = !0;
          this.set(t, u, o.options);
        }
        return u;
      },
      S = u => {
        if (options.status) options.status.fetchRejected = !0, options.status.fetchError = u;
        return a(u);
      },
      a = u => {
        let {
            aborted: aborted_2
          } = __abortController.signal,
          l = aborted_2 && options.allowStaleOnFetchAbort,
          p = l || options.allowStaleOnFetchRejection,
          m = p || options.noDeleteOnFetchRejection,
          g = f;
        if (this.#t[e] === f) {
          if (!m || g.__staleWhileFetching === void 0) this.#T(t, "fetch");else if (!l) this.#t[e] = g.__staleWhileFetching;
        }
        if (p) {
          if (options.status && g.__staleWhileFetching !== void 0) options.status.returnedStale = !0;
          return g.__staleWhileFetching;
        } else if (g.__returned === g) throw u;
      },
      c = (u, w) => {
        let l = this.#R?.(t, __staleWhileFetching_2, o);
        if (l && l instanceof Promise) l.then(p => u(p === void 0 ? void 0 : p), w);
        __abortController.signal.addEventListener("abort", () => {
          if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
            if (u(void 0), options.allowStaleOnFetchAbort) u = p => d(p, !0);
          }
        });
      };
    if (options.status) options.status.fetchDispatched = !0;
    let f = new Promise(c).then(d, S),
      A = Object.assign(f, {
        __abortController: __abortController,
        __staleWhileFetching: __staleWhileFetching_2,
        __returned: void 0
      });
    if (e === void 0) this.set(t, A, {
      ...o.options,
      status: void 0
    }), e = this.#s.get(t);else this.#t[e] = A;
    return A;
  }
  #e(t) {
    if (!this.#O) return !1;
    let e = t;
    return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof AbortController;
  }
  async fetch(t, e = {}) {
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
    } = e;
    if (!this.#O) {
      if (status_3) status_3.fetch = "get";
      return this.get(t, {
        allowStale: allowStale_5,
        updateAgeOnGet: updateAgeOnGet_2,
        noDeleteOnStaleGet: noDeleteOnStaleGet_2,
        status: status_3
      });
    }
    let m = {
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
      g = this.#s.get(t);
    if (g === void 0) {
      if (status_3) status_3.fetch = "miss";
      let _ = this.#x(t, g, m, context_2);
      return _.__returned = _;
    } else {
      let _ = this.#t[g];
      if (this.#e(_)) {
        let R = allowStale_5 && _.__staleWhileFetching !== void 0;
        if (status_3) {
          if (status_3.fetch = "inflight", R) status_3.returnedStale = !0;
        }
        return R ? _.__staleWhileFetching : _.__returned = _;
      }
      let E = this.#g(g);
      if (!forceRefresh && !E) {
        if (status_3) status_3.fetch = "hit";
        if (this.#C(g), updateAgeOnGet_2) this.#z(g);
        if (status_3) this.#E(status_3, g);
        return _;
      }
      let b = this.#x(t, g, m, context_2),
        v = b.__staleWhileFetching !== void 0 && allowStale_5;
      if (status_3) {
        if (status_3.fetch = E ? "stale" : "refresh", v && E) status_3.returnedStale = !0;
      }
      return v ? b.__staleWhileFetching : b.__returned = b;
    }
  }
  async forceFetch(t, e = {}) {
    let i = await this.fetch(t, e);
    if (i === void 0) throw Error("fetch() returned undefined");
    return i;
  }
  memo(t, e = {}) {
    let i = this.#W;
    if (!i) throw Error("no memoMethod provided to constructor");
    let {
        context: context_3,
        forceRefresh: forceRefresh_2,
        ...options_2
      } = e,
      r = this.get(t, options_2);
    if (!forceRefresh_2 && r !== void 0) return r;
    let o = i(t, r, {
      options: options_2,
      context: context_3
    });
    return this.set(t, o, options_2), o;
  }
  get(t, e = {}) {
    let {
        allowStale: allowStale_6 = this.allowStale,
        updateAgeOnGet: updateAgeOnGet_3 = this.updateAgeOnGet,
        noDeleteOnStaleGet: noDeleteOnStaleGet_3 = this.noDeleteOnStaleGet,
        status: status_4
      } = e,
      r = this.#s.get(t);
    if (r !== void 0) {
      let o = this.#t[r],
        d = this.#e(o);
      if (status_4) this.#E(status_4, r);
      if (this.#g(r)) {
        if (status_4) status_4.get = "stale";
        if (!d) {
          if (!noDeleteOnStaleGet_3) this.#T(t, "expire");
          if (status_4 && allowStale_6) status_4.returnedStale = !0;
          return allowStale_6 ? o : void 0;
        } else {
          if (status_4 && allowStale_6 && o.__staleWhileFetching !== void 0) status_4.returnedStale = !0;
          return allowStale_6 ? o.__staleWhileFetching : void 0;
        }
      } else {
        if (status_4) status_4.get = "hit";
        if (d) return o.__staleWhileFetching;
        if (this.#C(r), updateAgeOnGet_3) this.#z(r);
        return o;
      }
    } else if (status_4) status_4.get = "miss";
  }
  #j(t, e) {
    this.#u[e] = t, this.#a[t] = e;
  }
  #C(t) {
    if (t !== this.#h) {
      if (t === this.#r) this.#r = this.#a[t];else this.#j(this.#u[t], this.#a[t]);
      this.#j(this.#h, t), this.#h = t;
    }
  }
  delete(t) {
    return this.#T(t, "delete");
  }
  #T(t, e) {
    let i = !1;
    if (this.#n !== 0) {
      let s = this.#s.get(t);
      if (s !== void 0) if (i = !0, this.#n === 1) this.#N(e);else {
        this.#v(s);
        let n = this.#t[s];
        if (this.#e(n)) n.__abortController.abort(Error("deleted"));else if (this.#y || this.#f) {
          if (this.#y) this.#p?.(n, t, e);
          if (this.#f) this.#o?.push([n, t, e]);
        }
        if (this.#s.delete(t), this.#i[s] = void 0, this.#t[s] = void 0, s === this.#h) this.#h = this.#u[s];else if (s === this.#r) this.#r = this.#a[s];else {
          let h = this.#u[s];
          this.#a[h] = this.#a[s];
          let r = this.#a[s];
          this.#u[r] = this.#u[s];
        }
        this.#n--, this.#S.push(s);
      }
    }
    if (this.#f && this.#o?.length) {
      let s = this.#o,
        n;
      while (n = s?.shift()) this.#w?.(...n);
    }
    return i;
  }
  clear() {
    return this.#N("delete");
  }
  #N(t) {
    for (let e of this.#F({
      allowStale: !0
    })) {
      let i = this.#t[e];
      if (this.#e(i)) i.__abortController.abort(Error("deleted"));else {
        let s = this.#i[e];
        if (this.#y) this.#p?.(i, s, t);
        if (this.#f) this.#o?.push([i, s, t]);
      }
    }
    if (this.#s.clear(), this.#t.fill(void 0), this.#i.fill(void 0), this.#d && this.#b) this.#d.fill(0), this.#b.fill(0);
    if (this.#m) this.#m.fill(0);
    if (this.#r = 0, this.#h = 0, this.#S.length = 0, this.#_ = 0, this.#n = 0, this.#f && this.#o) {
      let e = this.#o,
        i;
      while (i = e?.shift()) this.#w?.(...i);
    }
  }
}
export { lu };