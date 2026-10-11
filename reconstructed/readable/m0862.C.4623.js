/* ==============================================================================
 * m0862.C   [m0862_0xd11f1fb.js @ 4623]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 4623
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function C(e, n) {
  let t = e instanceof Error ? e.message : String(e),
    r = "Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping.",
    o = B(e) ? e.loc : void 0,
    i = o ? n.split(`
`)[o.line - 1] : void 0;
  if (!o || i === void 0) return `Script parse error: ${t}. ${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
  let a = Math.max(0, Math.min(o.column, i.length)),
    s = Math.max(0, Math.min(a - Math.floor(h / 2), i.length - h)),
    l = i.slice(s, s + h),
    f = `${Ys(" ",a-s)}^`;
  return `Script parse error: ${t}

${l}
${f}

${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`
}
