/* ==========================================================================
 * m0132.lg   [m0132_0xc24a4bb.js @ 156528]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var lg = (e, t) => R_({
  fetch: (o, r) => typeof o === "string" && o !== "" ? t("http.fetch", {
    url: o,
    ...(r === void 0 ? {} : {
      init: {
        ...(r.method !== void 0 && {
          method: String(r.method)
        }),
        ...(r.headers !== void 0 && {
          headers: {
            ...r.headers
          }
        }),
        ...(r.body !== void 0 && {
          body: String(r.body)
        }),
        ...(r.auth !== void 0 && {
          auth: String(r.auth)
        }),
        ...(r.socketPath !== void 0 && {
          socketPath: String(r.socketPath)
        })
      }
    })
  }) : Promise.reject(new De(`${e}: $.http.fetch takes a URL`))
});
