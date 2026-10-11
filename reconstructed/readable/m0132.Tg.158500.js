/* ==============================================================================
 * m0132.Tg   [m0132_0xc24a4bb.js @ 158500]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 158500
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Tg = (e, t) => R_({
  run: (o, r) => e("process.run", {
    argv: Array.isArray(o) ? [...o] : o,
    ...r === void 0 ? {} : {
      init: G(r) ? {
        ...r.cwd !== void 0 && {
          cwd: r.cwd
        },
        ...r.env !== void 0 && {
          env: G(r.env) ? {
            ...r.env
          } : r.env
        },
        ...r.stdin !== void 0 && {
          stdin: r.stdin
        },
        ...r.timeoutMs !== void 0 && {
          timeoutMs: r.timeoutMs
        }
      } : r
    }
  }),
  spawn: (o) => t("process.spawn", G(o) ? {
    argv: Array.isArray(o.argv) ? [...o.argv] : o.argv,
    ...o.cwd !== void 0 && {
      cwd: o.cwd
    },
    ...o.env !== void 0 && {
      env: G(o.env) ? {
        ...o.env
      } : o.env
    },
    ...o.input !== void 0 && {
      input: o.input
    }
  } : o)
});
