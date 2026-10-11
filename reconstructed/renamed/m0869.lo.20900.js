/* ==========================================================================
 * m0869.lo  ->  makeCacheKey   [m0869_0xd12567a.js @ 20900]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function makeCacheKey(prompt, opts, prevKey) {
  let digest = createHash("sha256").update(prevKey).update("\x00").update(prompt).update("\x00").update(serializeAgentOpts(opts)).digest("hex");
  return `${KEY_VERSION}:${digest}`;
}
