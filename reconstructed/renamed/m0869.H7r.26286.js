/* ==========================================================================
 * m0869.H7r   [m0869_0xd12567a.js @ 26286]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function H7r(e, r, s, g, f) {
  let w = await vTn(e, r, s, g, f);
  if (w.kind === "refused") return w.message;
  if (w.kind === "ready") return null;
  return w.written ??= _r(e, s, w).finally(() => f.probes.delete(e)), w.written;
}
