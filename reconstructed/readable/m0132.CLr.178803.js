/* ==============================================================================
 * m0132.CLr   [m0132_0xc24a4bb.js @ 178803]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 178803
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function CLr({
  vmStream: e,
  wrapMethod: t,
  cloneIn: o
}, r = (n) => n) {
  let n = (s) => o({
    done: s.done === !0,
    value: s.value
  });
  return (s) => e(t(async () => n(await r(s.next()))), t(async () => n(await r(s.return(void 0)))), t(async () => o(await r(jx(s)))))
}
