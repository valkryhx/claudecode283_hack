/* ==============================================================================
 * m0869.mr   [m0869_0xd12567a.js @ 20384]
 * --------------------------------------------------------------------------
 * 作用: opts 序列化：只取影响结果的字段白名单(schema/model/effort/isolation/agentType/disallowedTools/bashCommandClamp)，排序后稳定序列化。label/phase 不在内。
 * 标识: e=opts
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 20384
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function mr(e) {
  if (!e) return "{}";
  let r = {},
    s = ["schema", "model", "effort", "isolation", "agentType", "disallowedTools", "bashCommandClamp"];
  for (let f of s) {
    let w = e[f];
    if (w === void 0 || typeof w === "function") continue;
    r[f] = w
  }
  let g = (f) => {
    if (typeof f === "function") return;
    if (Array.isArray(f)) {
      let w = [],
        A = f.length,
        F = Number.isSafeInteger(A) ? A : 0;
      for (let R = 0; R < F; R++) w[R] = g(f[R]);
      return w
    }
    if (f && typeof f === "object") {
      let w = {};
      for (let A of Object.keys(f).sort()) {
        if (A === "__proto__") continue;
        w[A] = g(f[A])
      }
      return w
    }
    return f
  };
  return b(g(r))
}
