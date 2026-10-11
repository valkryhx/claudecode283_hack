/* ==========================================================================
 * m0869.nr   [m0869_0xd12567a.js @ 12999]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
nr = `(() => {
      const NOW_ERR = ${b(er)};
      const RANDOM_ERR = ${b(tr)};
      Math.random = function random() { throw new Error(RANDOM_ERR) };
      const RealDate = Date;
      RealDate.now = function now() { throw new Error(NOW_ERR) };
      function ShimDate(...a) {
        if (!new.target) throw new Error(NOW_ERR); // bare Date() \u2192 now-string
        if (a.length === 0) throw new Error(NOW_ERR);
        return Reflect.construct(RealDate, a, new.target);
      }
      ShimDate.now = RealDate.now;
      ShimDate.parse = RealDate.parse;
      ShimDate.UTC = RealDate.UTC;
      ShimDate.prototype = RealDate.prototype;
      // Close the (new Date(x)).constructor backdoor to RealDate.now \u2014 point
      // .constructor at the shim, then freeze RealDate so it can't be undone.
      RealDate.prototype.constructor = ShimDate;
      Object.freeze(RealDate);
      globalThis.Date = ShimDate;
    })()`
