/* ==========================================================================
 * m1569.Sr   [m1569_0xdceb889.js @ 59769]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function Sr(e, r, n) {
  if (e.scriptPath) {
    let s, a;
    if (e.script) s = e.script, a = qt(oe(), e.scriptPath);else {
      let w = await NKt(e.scriptPath, r);
      if ("error" in w) return w;
      s = w.script, a = w.path;
    }
    if (CSt().some(w => w.script === s || w.v2Script === s)) return {
      script: s,
      resolvedScriptPath: a,
      source: "built-in",
      scriptMatchesDefinition: !0
    };
    return {
      script: s,
      resolvedScriptPath: a
    };
  }
  if (e.name) {
    let s = await TSt(e.name, oe(), n);
    if (!s) {
      let a = (await kSe(oe(), n)).map(w => w.name).join(", ");
      return {
        error: `Workflow "${e.name}" not found. Available: ${a || "(none)"}`
      };
    }
    return {
      script: e.script ?? s.script,
      source: s.source,
      scriptMatchesDefinition: e.script === void 0 || e.script === s.script
    };
  }
  if (e.script) return {
    script: e.script
  };
  return {
    error: "Must provide script, name, or scriptPath"
  };
}
