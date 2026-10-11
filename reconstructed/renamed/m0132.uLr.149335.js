/* ==========================================================================
 * m0132.uLr   [m0132_0xc24a4bb.js @ 149335]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    cloneIn: k => UCe(f(k)),
    vmAsyncWrap: m,
    fromEnvironment: d,
    intoEnvironment: y,
    wrapMethod: c,
    vmIterate: Ie.runInContext(vy, o),
    vmStream: Ie.runInContext(Ry, o),
    isGeneratorHook: Ie.runInContext(Oy, o)
  };
}
