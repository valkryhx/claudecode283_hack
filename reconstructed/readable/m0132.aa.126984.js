/* ==============================================================================
 * m0132.aa   [m0132_0xc24a4bb.js @ 126984]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 126984
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function aa({
  source: e,
  name: t,
  away: o,
  carry: r,
  onChunk: n
}) {
  let s = ia(),
    i = 0,
    p = 0,
    a, f;
  async function m() {
    let y = a ?? e.next();
    a = y;
    try {
      return await o(() => y)
    } catch (c) {
      throw s.done = !0, s.threw ??= {
        error: c
      }, c
    } finally {
      if (a === y) a = void 0
    }
  }

  function u() {
    if (s.threw !== void 0) throw s.threw.error;
    return s.result
  }

  function d(y = "link") {
    i += 1;
    let c = i;
    p = c;
    let k = () => p !== c || y === "hook" && s.revoked;

    function A(x) {
      if (f ??= x, y === "hook") throw Lo(t);
      return s.result
    }
    return async function*() {
      while (!0) {
        if (k()) return A(void 0);
        let x;
        if (f !== void 0) x = f, f = void 0;
        else if (s.done) return u();
        else {
          if (x = await m(), k()) return A(x);
          if (f === x) f = void 0
        }
        if (x.done === !0) return s.done = !0, s.result = r(x.value), s.result;
        n(x.value), yield x.value
      }
    }()
  }
  return {
    source: e,
    progress: s,
    readOn: d
  }
}
