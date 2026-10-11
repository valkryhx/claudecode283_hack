/* ==============================================================================
 * m0132.Cx   [m0132_0xc24a4bb.js @ 174503]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 174503
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Cx = (e) => k0(e.wrapMethod((t, ...o) => {
  let {
    pluginName: r
  } = e, [n, s] = o.length === 1 ? [void 0, o[0]] : o;
  if (e.isRegistered) throw new De(`${r}: on("${t}") after register() returned: on() is for register(); a hook may not register hooks`);
  let i = XVn(t);
  if (i !== void 0) throw new De(`${r}: on(): ${i}`);
  if (typeof s !== "function") throw new De(`${r}: on("${t}") takes (pattern, hook) or (pattern, matcher, hook); the hook must be a function`);
  let p = So(e, t, s);
  if (p !== void 0) throw new De(`${r}: on("${t}") ${p}`);
  let a = n === void 0 ? void 0 : e.copyMatcher(n);
  if (a !== void 0) U2o(a, `${r}: on("${t}", matcher)`);
  if (!(a !== void 0 && !W6e(t))) {
    if (e.once.has(t)) throw new De(`${r}: on("${t}") registered twice`);
    e.once.add(t)
  }
  let m = {
    pattern: t,
    hook: s,
    matcher: a,
    catch: void 0
  };
  return wp(e, m), _p(e, m)
}));
