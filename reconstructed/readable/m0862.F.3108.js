/* ==============================================================================
 * m0862.F   [m0862_0xd11f1fb.js @ 3108]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 3108
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function F(e, n) {
  let t = e[n + 1];
  if (t === void 0) return;
  let r = W.get(t);
  if (r !== void 0) return {
    value: r,
    end: n + 2
  };
  if (t === "0") {
    let o = e[n + 2];
    if (o !== void 0 && o >= "0" && o <= "9") return;
    return {
      value: "\x00",
      end: n + 2
    }
  }
  if (t >= "1" && t <= "9") return;
  if (t === "x" || t === "u") {
    m.lastIndex = n + 1;
    let o = m.exec(e);
    if (!o) return;
    let i = parseInt(o[1] ?? o[2] ?? o[3] ?? "", 16);
    if (i > 1114111) return;
    return {
      value: String.fromCodePoint(i),
      end: m.lastIndex
    }
  }
  if (t === "\r") return {
    value: "",
    end: n + (e[n + 2] === `
` ? 3 : 2)
  };
  return {
    value: v.test(t) ? "" : t,
    end: n + 2
  }
}
