/* ==========================================================================
 * m0132.zn   [m0132_0xc24a4bb.js @ 2953]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function zn(e) {
  let t = e?.importModuleDynamically;
  if (t === Xn) return;
  if (typeof t !== "function") throw TypeError("The options argument of hardenVMIntrinsics and createVMIntakeWalkers must be either { importModuleDynamically: <function> } or COMPILE_WITHOUT_IMPORT_HOOK, which src/utils/vmHardening.ts exports");
  return {
    importModuleDynamically: t
  };
}
