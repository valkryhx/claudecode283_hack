/* ==========================================================================
 * m0025.d   [m0025_0xbf5baa8.js @ 14237]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function d(e) {
  let r = te(e);
  try {
    if (Ne(process.env.CLAUDE_CODE_USE_BEDROCK) || Ne(process.env.CLAUDE_CODE_USE_VERTEX) || Ne(process.env.CLAUDE_CODE_USE_FOUNDRY) || Ne(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) || Ne(process.env.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD) || Ne(process.env.CLAUDE_CODE_USE_MANTLE) || process.env.DISABLE_ERROR_REPORTING || It()) return;
    let o = {
      error: r.stack || r.message,
      timestamp: new Date().toISOString()
    };
    cBe.remember(o), cBe.dispatch({
      type: "error",
      error: r
    });
  } catch {}
}
