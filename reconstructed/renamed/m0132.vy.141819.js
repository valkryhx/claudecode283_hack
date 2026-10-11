/* ==========================================================================
 * m0132.vy   [m0132_0xc24a4bb.js @ 141819]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var vy = `(async (it, method, arg) => {
  const isObject =
    it !== null && (typeof it === 'object' || typeof it === 'function')
  if (!isObject) {
    throw new TypeError(
      'a hook on a streaming event returns its async generator; got ' +
        (it === null ? 'null' : typeof it),
    )
  }
  const pull = it[method]
  if (typeof pull !== 'function') {
    if (method === 'return') return { __proto__: null, done: true, value: arg }
    throw new TypeError(
      'a hook on a streaming event returns its async generator; got an ' +
        'object without ' + method + '()',
    )
  }
  const step = await Reflect.apply(pull, it, [arg])
  const isStep = step !== null && typeof step === 'object'
  return {
    __proto__: null,
    done: !isStep || step.done === true,
    value: isStep ? step.value : undefined,
  }
})`;
