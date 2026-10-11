/* ==============================================================================
 * m0869.Rn   [m0869_0xd12567a.js @ 27013]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 27013
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Rn(e, r = {
  sanitize: (s) => s === null || typeof s !== "object" && typeof s !== "function" ? s : {},
  toStr: (s) => hNt(s)
}) {
  function s(f) {
    return f.map((w) => {
      if (typeof w === "string") return w;
      if (w === null || typeof w !== "object" && typeof w !== "function") try {
        return b(w)
      } catch {
        return `[${typeof w}]`
      }
      let A;
      try {
        let R = b(r.sanitize(w));
        if (R !== void 0 && R !== "{}") return R;
        A = R ?? `[${typeof w}]`
      } catch (R) {
        let ce = !1;
        try {
          let W = R?.message;
          ce = typeof W === "string" && W.includes("exceeds the maximum")
        } catch {}
        return ce ? `[${typeof w}: array exceeds the ${Sx}-element logging cap]` : `[${typeof w}]`
      }
      let F = r.toStr(w);
      return F === "[object Object]" || F === "<unprintable>" ? A : F
    }).join(" ")
  }
  let g = (f) => bI((...w) => e(f + s(w)));
  return {
    __proto__: null,
    log: g(""),
    info: g(""),
    debug: g(""),
    error: g("[error] "),
    warn: g("[warn] ")
  }
}
