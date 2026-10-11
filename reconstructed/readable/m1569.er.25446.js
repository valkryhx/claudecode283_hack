/* ==============================================================================
 * m1569.er   [m1569_0xdceb889.js @ 25446]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 25446
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function er(e, r) {
  let n;
  try {
    let w = e.runInContext(r.vmContext, OCe(bSt));
    n = await r.settle(w)
  } catch (w) {
    let h = r.errorInfo(w);
    if (h.stack) t(`Workflow v2 script error stack:
${h.stack}`, {
      level: "error"
    });
    return {
      error: $ut(h),
      thrown: h
    }
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
    }
  }
  let a = r.sanitize(s);
  try {
    let w;
    try {
      w = tm(a)
    } catch {
      w = J(b(a) ?? "null")
    }
    return b(w), {
      value: w
    }
  } catch {
    return {
      error: "workflow result is not JSON-serializable (a circular reference?)"
    }
  }
}
