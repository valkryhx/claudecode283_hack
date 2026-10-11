/* ==========================================================================
 * m0132._p   [m0132_0xc24a4bb.js @ 173931]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function _p(e, t) {
  let {
      pattern: o
    } = t,
    r = `${e.pluginName}: on("${o}").catch()`;
  return R_({
    catch: e.wrapMethod(n => {
      if (e.isRegistered) throw new De(`${r} after register() returned: .catch() is for register()`);
      if (typeof n !== "function") throw new De(`${r} takes a function, ($, e, next)`);
      let s = So(e, o, n);
      if (s !== void 0) throw new De(`${r} ${s}`);
      if (t.catch !== void 0) throw new De(`${r} called twice: a registration takes one .catch`);
      if (o === "engine.create") throw new De(`${r}: an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
      t.catch = n;
    })
  });
}
