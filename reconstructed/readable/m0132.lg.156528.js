/* ==============================================================================
 * m0132.lg   [m0132_0xc24a4bb.js @ 156528]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 156528
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var lg = (e, t) => R_({
  fetch: (o, r) => typeof o === "string" && o !== "" ? t("http.fetch", {
    url: o,
    ...r === void 0 ? {} : {
      init: {
        ...r.method !== void 0 && {
          method: String(r.method)
        },
        ...r.headers !== void 0 && {
          headers: {
            ...r.headers
          }
        },
        ...r.body !== void 0 && {
          body: String(r.body)
        },
        ...r.auth !== void 0 && {
          auth: String(r.auth)
        },
        ...r.socketPath !== void 0 && {
          socketPath: String(r.socketPath)
        }
      }
    }
  }) : Promise.reject(new De(`${e}: $.http.fetch takes a URL`))
});
