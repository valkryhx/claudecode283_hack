/* ==========================================================================
 * m0869.esr   [m0869_0xd12567a.js @ 28838]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function esr(e, r, s, g = e.timers) {
  let f = `[${r}] `,
    w = {
      sanitize: n => n === null || typeof n !== "object" && typeof n !== "function" ? n : {},
      toStr: n => hNt(n)
    },
    A = {
      __proto__: null,
      budget: e.budget,
      setTimeout: g.setTimeout,
      clearTimeout: g.clearTimeout,
      phase: bI(n => {}),
      log: bI(n => e.hooks.log(f + hNt(n))),
      console: Rn(n => e.hooks.log(f + n), w)
    },
    F = un.createContext(A, {
      codeGeneration: {
        strings: !1,
        wasm: !1
      }
    });
  an(F), dFe(F, Ihe), ln(F);
  let R = qX(F),
    ce = U6e(F),
    W = uFe(F),
    H = mNt(F),
    z = wVn(F, Ihe),
    {
      vmToStr: ge,
      vmOwnString: _e,
      vmStringify: ie
    } = SVn(F);
  w.sanitize = z.sanitize, w.toStr = ge;
  let h = un.runInContext('(o => { try { const s = o && typeof o === "object" ? o.schema : undefined; return s && typeof s === "object" ? s : undefined } catch { return undefined } })', F),
    o = new WeakMap(),
    u = (n, S, T, C, X) => {
      let N = W(S),
        Z = h(S);
      if (N && typeof N === "object" && Z) {
        let se = o.get(Z);
        if (se !== void 0) N.schema = se;else if (N.schema !== void 0) o.set(Z, N.schema);
      }
      return e.hooks.agent(n, {
        ...N,
        phase: s
      }, T, C, X);
    };
  return {
    childCtx: F,
    errorInfo: R,
    settle: ce,
    clone: W,
    call: H,
    sanitize: z.sanitize,
    toStr: ge,
    ownString: _e,
    stringify: ie,
    asyncWrap: gNt(F),
    agent: u
  };
}
