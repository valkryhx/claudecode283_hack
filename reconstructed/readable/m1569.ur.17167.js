/* ==============================================================================
 * m1569.ur   [m1569_0xdceb889.js @ 17167]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 17167
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
class ur {
  rows = [];
  rules = new Map;
  fired = new Set;
  evalControllers = new Map;
  firingsInFlight = new Map;
  childrenOf = new Map;
  pendingIn = new Map;
  rowsUnder = new Map;
  idleWaiters = new Map;
  listeners = new Set;
  maxRows;
  maxRowsPerScope;
  schedule;
  constructor(e = {}) {
    this.maxRows = e.maxRows ?? Rt, this.maxRowsPerScope = e.maxRowsPerScope ?? vt, this.schedule = e.schedule ?? ((r) => this.yieldingSchedule(r))
  }
  sinceYield = 0;
  yieldWatch = !1;
  backlog;
  yieldingSchedule(e) {
    if (this.backlog !== void 0) {
      this.backlog.push(e);
      return
    }
    if (!this.yieldWatch) this.yieldWatch = !0, setImmediate(() => {
      this.yieldWatch = !1, this.sinceYield = 0
    });
    if (++this.sinceYield < jr) {
      queueMicrotask(e);
      return
    }
    this.backlog = [e], setImmediate(() => this.drainBacklog())
  }
  drainBacklog() {
    let e = this.backlog;
    if (e === void 0) return;
    let r = e.splice(0, jr);
    if (this.sinceYield = r.length, !this.yieldWatch) this.yieldWatch = !0, setImmediate(() => {
      this.yieldWatch = !1, this.sinceYield = 0
    });
    if (e.length === 0) this.backlog = void 0;
    else setImmediate(() => this.drainBacklog());
    for (let n of r) n()
  }
  subscribe(e) {
    return this.listeners.add(e), () => {
      this.listeners.delete(e)
    }
  }
  get isFull() {
    return this.rows.length >= this.maxRows
  }
  pending(e = j) {
    return this.pendingIn.get(e) ?? 0
  }
  isIdle(e = j) {
    return this.pending(e) === 0
  }
  within(e, r) {
    if (r === j) return !0;
    let n = e;
    while (n !== j) {
      if (n === r) return !0;
      n = this.rows[n]?.in ?? j
    }
    return !1
  }
  restore(e) {
    if (this.rows.length > 0) throw new P("restore() on a non-empty world", "world: restore on a non-empty world");
    for (let r of e) {
      if (r.addr !== this.rows.length) throw new P(`restore(): row ${r.addr} out of order`, "world: restore out of order");
      this.rows.push(r), this.topOf.push(r.in === j ? r.addr : this.topOf[r.in]);
      let n = this.childrenOf.get(r.in);
      if (n) n.push(r.addr);
      else this.childrenOf.set(r.in, [r.addr]);
      let s = this.topScopeOf(r.in);
      if (s !== j) this.rowsUnder.set(s, (this.rowsUnder.get(s) ?? 0) + 1)
    }
  }
  put(e, r, n = {}) {
    return this.append(e, r, "live", "put", this.writeScopeOf(n)).addr
  }
  read(e, r = {}) {
    let n = this.scopeOf(r);
    return this.rows.filter((s) => this.within(s.addr, n) && Pt(e, s))
  }
  on(e, r, n, s = {}) {
    let a = this.writeScopeOf(s),
      w = this.append({
        topic: "sub",
        pattern: e
      }, n, "live", "sub", a);
    if (w.status === "retracted") return w.addr;
    let h = {
      addr: w.addr,
      pattern: e,
      in: a,
      fn: r
    };
    if (this.rules.set(w.addr, h), Ge(e)) return this.maybeFireThreshold(h, e), w.addr;
    let g = this.rows.length;
    for (let k = 0; k < g; k++) {
      if (!this.rules.has(h.addr)) break;
      this.maybeFire(h, this.rows[k])
    }
    return w.addr
  }
  retract(e) {
    let r = this.rows[e];
    if (!r || r.status === "retracted") return !1;
    let n = [],
      s = [],
      a = [{
        at: e,
        underEval: !1
      }];
    while (a.length > 0) {
      let {
        at: w,
        underEval: h
      } = a.pop(), g = this.rows[w], k = h ? this.firingsInFlight.get(w) : void 0, R = !1;
      if (k) {
        for (let F of k) {
          if (F.heldAt !== void 0) {
            let O = this.rows[F.heldAt];
            if (O !== void 0 && !this.isRetractedScope(O.in)) continue
          }
          F.released = !0, k.delete(F), R = !0, this.adjustPending(w, -1)
        }
        if (k.size === 0) this.firingsInFlight.delete(w)
      }
      if (g.status === "retracted") {
        if (h) {
          if (R) s.push(w);
          for (let F of this.childrenOf.get(w) ?? []) a.push({
            at: F,
            underEval: !0
          })
        }
        continue
      }
      g.status = "retracted", this.rules.delete(w);
      let I = this.evalControllers.get(w),
        x = I !== void 0;
      if (I) this.evalControllers.delete(w), I.abort(), this.adjustPending(w, -1);
      x ||= R || (k?.size ?? 0) > 0, n.push({
        row: g,
        wasInFlight: x
      });
      let Z = h || g.kind === "eval";
      for (let F of this.childrenOf.get(w) ?? []) a.push({
        at: F,
        underEval: Z
      })
    }
    for (let w = n.length - 1; w >= 0; w--) {
      let {
        row: h,
        wasInFlight: g
      } = n[w];
      if (this.emit({
          kind: "retracted",
          row: h
        }), this.deliver(h), g) s.push(h.addr)
    }
    for (let w of s) this.wakeIdle(w);
    return !0
  }
  eval(e, r, n, s = {}) {
    let a = this.append(e, n, "pending", "eval", this.writeScopeOf(s));
    if (a.status !== "pending") return a.addr;
    let w = new AbortController;
    this.evalControllers.set(a.addr, w), this.adjustPending(a.addr, 1);
    let h;
    try {
      h = Promise.resolve(r(w.signal))
    } catch (g) {
      h = Promise.reject(g)
    }
    return h.then((g) => this.settle(a, {
      value: g
    }), (g) => this.settle(a, {
      error: Ar(g)
    })), a.addr
  }
  settled(e) {
    let r = this.rows[e];
    if (!r) return Promise.reject(new P(`no row at ${e}`, "world: settled() on a missing row"));
    if (r.status !== "pending") return Promise.resolve(r);
    return new Promise((n) => {
      let s = this.subscribe((a) => {
        if ((a.kind === "settled" || a.kind === "retracted") && a.row.addr === e) s(), n(a.row)
      })
    })
  }
  whenIdle(e = j) {
    if (this.isIdle(e)) return Promise.resolve();
    return new Promise((r) => {
      let n = this.idleWaiters.get(e);
      if (n) n.push(r);
      else this.idleWaiters.set(e, [r])
    })
  }
  scopeOf(e) {
    let r = e.in ?? j;
    if (r !== j && !this.rows[r]) throw new P(`no row at ${r} to place in`, "world: placement names a missing row");
    return r
  }
  writeScopeOf(e) {
    let r = this.scopeOf(e);
    if (this.isRetractedScope(r)) throw new P(`row ${r} is retracted; nothing can be placed inside it`, "world: placement inside a retracted scope");
    return r
  }
  isRetractedScope(e) {
    let r = e;
    while (r !== j) {
      let n = this.rows[r];
      if (!n) return !1;
      if (n.status === "retracted") return !0;
      r = n.in
    }
    return !1
  }
  append(e, r, n, s, a) {
    if (this.rows.length >= this.maxRows) throw new P(`world full (${this.maxRows} rows) \u2014 a rule is probably putting the fact it fires on`, "world: full");
    let w = {
      addr: this.rows.length,
      kind: s,
      fact: e,
      by: r,
      in: a,
      at: Date.now(),
      status: n
    };
    this.rows.push(w), this.topOf.push(a === j ? w.addr : this.topOf[a]);
    let h = this.childrenOf.get(a);
    if (h) h.push(w.addr);
    else this.childrenOf.set(a, [w.addr]);
    this.emit({
      kind: "put",
      row: w
    });
    let g = this.topScopeOf(a);
    if (g !== j) {
      let k = (this.rowsUnder.get(g) ?? 0) + 1;
      if (this.rowsUnder.set(g, k), k > this.maxRowsPerScope) {
        if (t(`world: scope ${g} exceeded ${this.maxRowsPerScope} rows \u2014 a rule is probably putting the fact it fires on; retracting it`, {
            level: "warn"
          }), this.emit({
            kind: "runaway",
            scope: g
          }), this.rows[g].status !== "retracted") this.retract(g)
      }
    }
    return this.deliver(w), w
  }
  topOf = [];
  topScopeOf(e) {
    return e === j ? j : this.topOf[e]
  }
  settle(e, r) {
    if (e.status !== "pending") return;
    if (this.evalControllers.delete(e.addr), "error" in r) e.status = "failed", e.error = r.error;
    else e.status = "done", e.value = r.value;
    this.adjustPending(e.addr, -1), this.emit({
      kind: "settled",
      row: e
    }), this.deliver(e), this.wakeIdle(e.addr)
  }
  deliver(e) {
    for (let r of Array.from(this.rules.values()))
      if (this.rules.has(r.addr)) this.maybeFire(r, e)
  }
  maybeFire(e, r) {
    if (Ge(e.pattern)) {
      if (this.within(r.addr, e.in) && It(e.pattern.of, r)) this.maybeFireThreshold(e, e.pattern);
      return
    }
    if (!this.within(r.addr, e.in)) return;
    let n = ar(e.pattern, r);
    if (!n) return;
    let s = `${e.addr}:${r.addr}:${r.status}`;
    if (this.fired.has(s)) return;
    this.fired.add(s), this.fire(e, r, n, r.addr)
  }
  maybeFireThreshold(e, r) {
    let n = new Map;
    for (let s of this.rows) {
      if (!this.within(s.addr, e.in)) continue;
      let a = ar(r.of, s);
      if (!a) continue;
      let w = b(a) ?? "",
        h = n.get(w);
      if (h) h.rows.push(s);
      else n.set(w, {
        bindings: a,
        rows: [s]
      })
    }
    if (n.size === 0 && !ir(r.of)) n.set("{}", {
      bindings: {},
      rows: []
    });
    for (let [s, a] of n) {
      if (a.rows.length < r.$atleast) continue;
      let w = `${e.addr}:group:${s}`;
      if (this.fired.has(w)) continue;
      this.fired.add(w), this.fire(e, a.rows, a.bindings, a.rows[0]?.addr ?? -1)
    }
  }
  supportOf(e, r) {
    let n = $r(r) ? r : [r];
    if (n.length === 0) return e.in;
    let s = new Set;
    for (let h = n[0].addr; h !== e.in && h !== j; h = this.rows[h].in) s.add(h);
    s.add(e.in);
    let a = n[0].addr;
    for (let h = 1; h < n.length; h++) {
      let g = n[h].addr;
      while (!s.has(g)) g = this.rows[g].in;
      for (let k = a; k !== g; k = this.rows[k].in) s.delete(k);
      a = g
    }
    let w = a;
    while (w !== e.in && this.rows[w].status === "retracted") w = this.rows[w].in;
    return w
  }
  fire(e, r, n, s) {
    this.adjustPending(e.addr, 1);
    let a = {
        released: !1,
        heldAt: void 0
      },
      w = {
        keep: (R) => {
          a.heldAt = R
        }
      },
      h = this.firingsInFlight.get(e.addr);
    if (h) h.add(a);
    else this.firingsInFlight.set(e.addr, new Set([a]));
    let g = $r(r) ? void 0 : r,
      k = g?.status;
    new Promise((R) => this.schedule(R)).then(() => {
      if (g !== void 0 && g.status !== k) return;
      return e.fn(r, n, this.supportOf(e, r), w)
    }).catch((R) => {
      let I = Ar(R);
      if (t(`world rule ${e.addr} threw on row ${s}: ${I}`, {
          level: "warn"
        }), !this.isRetractedScope(e.in)) try {
        this.append({
          topic: "error",
          kind: "rule",
          rule: e.addr,
          on: s,
          message: I
        }, "host", "live", "put", e.in)
      } catch {}
    }).finally(() => {
      if (a.released) return;
      a.released = !0;
      let R = this.firingsInFlight.get(e.addr);
      if (R) {
        if (R.delete(a), R.size === 0) this.firingsInFlight.delete(e.addr)
      }
      this.adjustPending(e.addr, -1), this.wakeIdle(e.addr)
    })
  }
  adjustPending(e, r) {
    let n = e;
    for (;;) {
      if (this.pendingIn.set(n, (this.pendingIn.get(n) ?? 0) + r), n === j) return;
      n = this.rows[n]?.in ?? j
    }
  }
  wakeIdle(e) {
    let r = e;
    for (;;) {
      if (this.isIdle(r)) {
        let n = this.idleWaiters.get(r);
        if (n) {
          this.idleWaiters.delete(r);
          for (let s of n) s()
        }
      }
      if (r === j) return;
      r = this.rows[r]?.in ?? j
    }
  }
  emit(e) {
    for (let r of this.listeners) try {
      r(e)
    } catch (n) {
      t(`world listener threw: ${l(n)}`, {
        level: "warn"
      })
    }
  }
}
