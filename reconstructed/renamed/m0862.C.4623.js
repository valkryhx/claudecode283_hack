/* ==========================================================================
 * m0862.C   [m0862_0xd11f1fb.js @ 4623]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    f = `${Ys(" ", a - s)}^`;
  return `Script parse error: ${t}

${l}
${f}

${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
}
