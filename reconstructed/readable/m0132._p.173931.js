/* ==============================================================================
 * m0132._p   [m0132_0xc24a4bb.js @ 173931]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 173931
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function _p(e, t) {
  let {
    pattern: o
  } = t, r = `${e.pluginName}: on("${o}").catch()`;
  return R_({
    catch: e.wrapMethod((n) => {
      if (e.isRegistered) throw new De(`${r} after register() returned: .catch() is for register()`);
      if (typeof n !== "function") throw new De(`${r} takes a function, ($, e, next)`);
      let s = So(e, o, n);
      if (s !== void 0) throw new De(`${r} ${s}`);
      if (t.catch !== void 0) throw new De(`${r} called twice: a registration takes one .catch`);
      if (o === "engine.create") throw new De(`${r}: an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
      t.catch = n
    })
  })
}
