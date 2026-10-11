/* ==========================================================================
 * m0132.Sa   [m0132_0xc24a4bb.js @ 148885]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Sa = `(intoEnvironment => hostFn => (...args) => {
  let returned
  try {
    returned = hostFn(...args)
  } catch (error) {
    throw intoEnvironment(error)
  }
  if (
    returned !== null &&
    typeof returned === 'object' &&
    typeof returned.then === 'function'
  ) {
    return (async () => {
      try {
        return await returned
      } catch (error) {
        throw intoEnvironment(error)
      }
    })()
  }
  return returned
})`;
