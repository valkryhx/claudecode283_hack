/* ==========================================================================
 * m0869.Rn   [m0869_0xd12567a.js @ 27013]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Rn(e, r = {
  sanitize: s => s === null || typeof s !== "object" && typeof s !== "function" ? s : {},
  toStr: s => hNt(s)
}) {
  function s(f) {
    return f.map(w => {
      if (typeof w === "string") return w;
      if (w === null || typeof w !== "object" && typeof w !== "function") try {
        return b(w);
      } catch {
        return `[${typeof w}]`;
      }
      let A;
      try {
        let R = b(r.sanitize(w));
        if (R !== void 0 && R !== "{}") return R;
        A = R ?? `[${typeof w}]`;
      } catch (R) {
        let ce = !1;
        try {
          let W = R?.message;
          ce = typeof W === "string" && W.includes("exceeds the maximum");
        } catch {}
        return ce ? `[${typeof w}: array exceeds the ${Sx}-element logging cap]` : `[${typeof w}]`;
      }
      let F = r.toStr(w);
      return F === "[object Object]" || F === "<unprintable>" ? A : F;
    }).join(" ");
  }
  let g = f => bI((...w) => e(f + s(w)));
  return {
    __proto__: null,
    log: g(""),
    info: g(""),
    debug: g(""),
    error: g("[error] "),
    warn: g("[warn] ")
  };
}
