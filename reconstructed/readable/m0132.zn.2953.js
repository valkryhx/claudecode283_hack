/* ==============================================================================
 * m0132.zn   [m0132_0xc24a4bb.js @ 2953]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 2953
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function zn(e) {
  let t = e?.importModuleDynamically;
  if (t === Xn) return;
  if (typeof t !== "function") throw TypeError("The options argument of hardenVMIntrinsics and createVMIntakeWalkers must be either { importModuleDynamically: <function> } or COMPILE_WITHOUT_IMPORT_HOOK, which src/utils/vmHardening.ts exports");
  return {
    importModuleDynamically: t
  }
}
