/* ==========================================================================
 * m0132.Cx   [m0132_0xc24a4bb.js @ 174503]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Cx = e => k0(e.wrapMethod((t, ...o) => {
  let {
      pluginName: r
    } = e,
    [n, s] = o.length === 1 ? [void 0, o[0]] : o;
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
    e.once.add(t);
  }
  let m = {
    pattern: t,
    hook: s,
    matcher: a,
    catch: void 0
  };
  return wp(e, m), _p(e, m);
}));
