/* ==============================================================================
 * m0132.uLr   [m0132_0xc24a4bb.js @ 149335]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 149335
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function uLr(e) {
  let t = Ta(),
    o = Ie.createContext(t, {
      codeGeneration: {
        strings: !1,
        wasm: !1
      }
    });
  Ea(o), dFe(o, Ihe);
  let r = mNt(o),
    n = Ie.runInContext("((self, fn, ...args) => Reflect.apply(fn, self, args))", o),
    s = U6e(o),
    i = qX(o),
    p = MIo(o),
    a = uy(o),
    f = uFe(o, {
      arrayLengthCap: void 0
    }),
    m = gNt(o),
    u = DIo(o, e),
    {
      fromEnvironment: d,
      intoEnvironment: y
    } = kVn(i, u, p),
    c = Ie.runInContext(Sa, o)(k0(y));
  return {
    globals: t,
    context: o,
    makers: u,
    vmCall: r,
    vmApply: n,
    vmSettle: s,
    vmOwns: p,
    copyMatcher: a,
    vmClone: f,
    cloneIn: (k) => UCe(f(k)),
    vmAsyncWrap: m,
    fromEnvironment: d,
    intoEnvironment: y,
    wrapMethod: c,
    vmIterate: Ie.runInContext(vy, o),
    vmStream: Ie.runInContext(Ry, o),
    isGeneratorHook: Ie.runInContext(Oy, o)
  }
}
