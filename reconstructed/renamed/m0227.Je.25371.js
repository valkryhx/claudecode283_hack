/* ==========================================================================
 * m0227.Je   [m0227_0xc482590.js @ 25371]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Je(e, n) {
  let r = `${e.instancePath || "root"}: ${e.message}`;
  switch (e.keyword) {
    case "additionalProperties":
      {
        let s = e.params.additionalProperty;
        return typeof s === "string" ? `${r} ('${s.length > ce ? re(s, ce) + "\u2026" : s}' is not allowed)` : r;
      }
    case "minLength":
    case "maxLength":
      {
        let s = B(n, e.instancePath);
        return typeof s === "string" ? `${r} (got ${[...s].length})` : r;
      }
    case "minItems":
    case "maxItems":
      {
        let s = B(n, e.instancePath);
        return Array.isArray(s) ? `${r} (got ${s.length})` : r;
      }
    case "minProperties":
    case "maxProperties":
      {
        let s = B(n, e.instancePath);
        return G(s) ? `${r} (got ${Object.keys(s).length})` : r;
      }
    case "enum":
      {
        let s = e.params.allowedValues,
          E = Array.isArray(s) ? de(s) : void 0;
        return E === void 0 ? r : `${r}: ${E}`;
      }
    case "const":
      {
        let s = "allowedValue" in e.params ? de(e.params.allowedValue) : void 0;
        return s === void 0 ? r : `${r}: ${s}`;
      }
    default:
      return r;
  }
}
