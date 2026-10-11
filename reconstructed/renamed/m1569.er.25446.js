/* ==========================================================================
 * m1569.er   [m1569_0xdceb889.js @ 25446]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function er(e, r) {
  let n;
  try {
    let w = e.runInContext(r.vmContext, OCe(bSt));
    n = await r.settle(w);
  } catch (w) {
    let h = r.errorInfo(w);
    if (h.stack) t(`Workflow v2 script error stack:
${h.stack}`, {
      level: "error"
    });
    return {
      error: $ut(h),
      thrown: h
    };
  }
  let s = n.v;
  if (typeof s === "function") return {
    error: "workflow result cannot be a function"
  };
  if (s === null || typeof s !== "object") {
    if (typeof s === "bigint" || typeof s === "symbol") return {
      error: `workflow result is not JSON-serializable (a ${typeof s})`
    };
    return {
      value: s
    };
  }
  let a = r.sanitize(s);
  try {
    let w;
    try {
      w = tm(a);
    } catch {
      w = J(b(a) ?? "null");
    }
    return b(w), {
      value: w
    };
  } catch {
    return {
      error: "workflow result is not JSON-serializable (a circular reference?)"
    };
  }
}
