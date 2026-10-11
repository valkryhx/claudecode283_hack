/* ==========================================================================
 * m1569.mr   [m1569_0xdceb889.js @ 31332]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function mr(e, r, n, s, {
  scopeSignal: a,
  inheritedSpawnMemo: w
} = {}) {
  let {
      clone: h,
      call: g,
      settle: k,
      sanitize: R,
      asyncWrap: I
    } = e.vmBoundary,
    {
      vmContext: x,
      hooks: Z
    } = e,
    F = qX(x),
    O = Me.runInContext("(p => { p.then(undefined, () => {}) })", x),
    K = {
      by: "script",
      in: n,
      memo: "chain"
    },
    L = K;
  function te(v, S) {
    let T = L;
    L = v;
    try {
      return S();
    } finally {
      L = T;
    }
  }
  let X = {
      in: n
    },
    ne = (v, S) => Ct(S) ? X : {
      in: v.in
    },
    ge = Me.runInContext("(() => { const freeze = Object.freeze; return (put, read, on, retract, agent, workflow) => freeze({ put, read, on, retract, agent, workflow }) })()", x);
  function we(v) {
    let S;
    try {
      S = k(v());
    } catch (T) {
      return Promise.reject(de(T));
    }
    return S.then(T => W(T.v), T => {
      throw de(T);
    });
  }
  function de(v) {
    return q(F(v));
  }
  function q(v) {
    return new P(v.message ? `${v.name}: ${v.message}` : v.name, "workflow v2: VM code threw");
  }
  function W(v) {
    let S = R(v);
    if (S === null || typeof S !== "object") return S;
    let T = b(S);
    return T === void 0 ? void 0 : J(T);
  }
  function D(v, S) {
    if (typeof v !== "function") throw new P(S, "workflow v2: word expected a function");
  }
  let ee = () => s.aborted || a?.aborted === !0,
    ue = v => v.memo === "chain" && r.rows[n]?.status !== "pending",
    pe = bI(v => {
      if (ee()) return h([]);
      let S = Ce(W(v) ?? {});
      return h(r.read(S, X).map(Ue));
    });
  function ke(v) {
    return ee() || r.isRetractedScope(v.in) && !be(v);
  }
  function _e(v) {
    return bI((S, T) => {
      let V = v();
      if (ke(V)) return -1;
      let ce = ne(V, W(T));
      if (r.isRetractedScope(ce.in)) return -1;
      return r.put(Te(W(S)), V.by, ce);
    });
  }
  function N(v) {
    return bI((S, T, V) => {
      let ce = v();
      if (ke(ce)) return -1;
      let se = Lr(W(S) ?? {});
      D(T, "on() expects a function");
      let ye = ne(ce, W(V));
      if (r.isRetractedScope(ye.in)) return -1;
      let Re = -1;
      return Re = r.on(se, (We, or, qe, Ye) => {
        let sr = Wt(We) ? We.map(Ue) : Ue(We),
          Fe = {
            by: `rule:${Re}`,
            in: qe,
            memo: "none"
          };
        Pe.set(Fe, Ye);
        let Ie = Or(Fe);
        return te(Fe, () => we(() => g(T, h(sr), h(or), Ie)));
      }, ce.by, ye), Re;
    });
  }
  let me = new WeakMap(),
    Pe = new WeakMap();
  function be(v) {
    let S = me.get(v);
    if (S === void 0) return !1;
    let T = r.rows[S];
    return T !== void 0 && !r.isRetractedScope(T.in);
  }
  function ve(v) {
    return bI(S => {
      if (typeof S !== "number" || !Number.isSafeInteger(S)) throw TypeError("retract() expects an address (a number)");
      if (ee() || S === n || !r.within(S, n)) return !1;
      let T = v();
      if (!be(T) && r.isRetractedScope(T.in)) return !1;
      let V = r.within(T.in, S),
        ce = V ? Pe.get(T) : void 0,
        se = V ? me.get(T) : void 0;
      ce?.keep(S);
      let ye = r.retract(S);
      if (V && ye) {
        if (se === void 0 || r.within(se, S)) me.set(T, S);
        ce?.keep(me.get(T));
      } else if (V) ce?.keep(se);
      return ye;
    });
  }
  let Se = new Set(),
    He = new Map();
  function Le(v) {
    return r.settled(v).then(S => {
      switch (S.status) {
        case "done":
          return h(S.value);
        case "failed":
          {
            if (Se.has(v)) return null;
            let T = He.get(v);
            if (T) throw Ohe(T.message, T.name);
            throw new P(S.error ?? "agent failed", "workflow v2: awaited agent failed");
          }
        case "retracted":
          if (s.aborted) throw new P("Workflow aborted", "workflow v2: awaited agent retracted by kill");
          if (a?.aborted) return new Promise(() => {});
          return null;
        default:
          return null;
      }
    });
  }
  let Ee = DCe(async v => v),
    je = Me.runInContext("(() => { const P = Promise; return () => new P(() => {}) })()", x);
  function Je(v) {
    return bI((S, T) => {
      if (ee()) return g(je);
      let V = v();
      if (ue(V)) return g(je);
      if (!be(V) && r.isRetractedScope(V.in)) {
        let Ie = g(I(Ee), null);
        return O(Ie), Ie;
      }
      let ce = W(T),
        se = ce !== null && typeof ce === "object" && !Array.isArray(ce) ? ce : {},
        ye = e.vmToStr(S),
        Re = typeof se.label === "string" ? se.label : re(ye, 60).replace(/\s+/g, " ").trim(),
        We = se.fact !== null && typeof se.fact === "object" && !Array.isArray(se.fact) ? se.fact : {},
        or = Te({
          ...We,
          topic: "agent",
          label: Re,
          ...(typeof se.phase === "string" && {
            phase: se.phase
          })
        }),
        qe = ne(V, se.top === void 0 ? void 0 : {
          top: se.top
        });
      if (r.isRetractedScope(qe.in)) {
        let Ie = g(I(Ee), null);
        return O(Ie), Ie;
      }
      let Ye = r.rows.length,
        sr = r.eval(or, Ie => Z.agent(S, T, Ie, De(V), a).then(Ve => {
          if (Ve === null || Ve === void 0) throw Se.add(Ye), new P("agent produced no result (skipped, blocked, or gave up after retries)", "workflow v2: agent resolved without a result");
          return W(Ve);
        }, Ve => {
          let Tr = F(Ve);
          throw He.set(Ye, Tr), q(Tr);
        }), V.by, qe),
        Fe = g(I(Ee), Le(sr));
      return O(Fe), Fe;
    });
  }
  function De(v) {
    if (v.memo === "none") return new SSt();
    if (w !== void 0) return w;
    let S = r.rows[n];
    return S === void 0 || S.status === "pending" ? void 0 : new SSt();
  }
  let Ne = () => L;
  e.childSpawnMemoRef.get = () => De(L);
  let ct = _e(Ne),
    ft = N(Ne),
    pt = ve(Ne),
    mt = Je(Ne);
  function Or(v) {
    let S = () => L === K ? v : L;
    return ge(_e(S), pe, N(S), ve(S), Je(S), Cr(S));
  }
  let wt = bI(v => {
      if (typeof v !== "string" || v === "") throw new P("v(name) expects a non-empty string", "workflow v2: v() expects a name");
      return h({
        $var: v
      });
    }),
    ht = bI((v, S) => {
      let T = Ce(W(S) ?? {});
      if (typeof v !== "number" || !Number.isSafeInteger(v) || v < 0) throw new P("atleast(N, pattern) expects a non-negative integer", "workflow v2: atleast() expects a count");
      return h({
        $atleast: v,
        of: T
      });
    });
  for (let [v, S] of [["put", ct], ["read", pe], ["on", ft], ["retract", pt], ["agent", mt], ["v", wt], ["atleast", ht], [Qor, bI(() => Or(L))]]) Object.defineProperty(x, v, {
    value: S,
    writable: !1,
    enumerable: !0,
    configurable: !1
  });
  let Wr = new Set(),
    {
      workflow: gt,
      cut: kt
    } = a ? {
      workflow: () => tsr(),
      cut: () => {}
    } : Ur({
      ctx: e,
      world: r,
      killSignal: s,
      installWords: (v, S, T, V) => {
        mr(v, r, S, s, {
          scopeSignal: T,
          inheritedSpawnMemo: V
        });
      },
      registerTimers: v => {
        Wr.add(v);
      },
      errorInfo: F
    });
  function Cr(v) {
    return bI((S, T) => {
      if (ee()) return g(je);
      let V = v();
      if (ue(V)) return g(je);
      if (ke(V)) {
        let Re = g(I(Ee), null);
        return O(Re), Re;
      }
      let ce = {
          in: V.in,
          by: V.by,
          spawnMemo: De(V)
        },
        se = I(DCe((Re, We) => gt(ce, Re, We))),
        ye = g(se, S, T);
      return O(ye), ye;
    });
  }
  return Object.defineProperty(x, "workflow", {
    value: Cr(Ne),
    writable: !1,
    enumerable: !0,
    configurable: !1
  }), Me.runInContext("delete globalThis.eval", x), {
    as(v, S) {
      return te({
        by: v,
        in: n,
        memo: "none"
      }, S);
    },
    clearChildTimers() {
      for (let v of Wr) v.clear();
    },
    cutChild: kt
  };
}
