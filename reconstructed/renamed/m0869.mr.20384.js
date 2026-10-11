/* ==========================================================================
 * m0869.mr  ->  serializeAgentOpts   [m0869_0xd12567a.js @ 20384]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function serializeAgentOpts(opts) {
  if (!opts) return "{}";
  let picked = {},
    KEYS = ["schema", "model", "effort", "isolation", "agentType", "disallowedTools", "bashCommandClamp"];
  for (let f of KEYS) {
    let w = opts[f];
    if (w === void 0 || typeof w === "function") continue;
    picked[f] = w;
  }
  let normalize = f => {
    if (typeof f === "function") return;
    if (Array.isArray(f)) {
      let w = [],
        A = f.length,
        F = Number.isSafeInteger(A) ? A : 0;
      for (let R = 0; R < F; R++) w[R] = normalize(f[R]);
      return w;
    }
    if (f && typeof f === "object") {
      let w = {};
      for (let A of Object.keys(f).sort()) {
        if (A === "__proto__") continue;
        w[A] = normalize(f[A]);
      }
      return w;
    }
    return f;
  };
  return stableStringify(normalize(picked));
}
