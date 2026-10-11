/* ==============================================================================
 * m0227.Sin   [m0227_0xc482590.js @ 7097]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 7097
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Sin(e) {
  if (!e.startsWith("<event")) return {
    ok: !1,
    reason: "must be a single <event> element"
  };
  let n = 6,
    r, s = new Set;
  for (;;) {
    if (n >= e.length) return {
      ok: !1,
      reason: "unterminated opening tag"
    };
    if (e[n] === ">" || e.startsWith("/>", n)) break;
    if (e[n] !== " ") return {
      ok: !1,
      reason: `malformed opening tag at offset ${n}`
    };
    n++;
    let g = he.exec(e.slice(n));
    if (!g || g.index !== 0) return {
      ok: !1,
      reason: `invalid attribute name at offset ${n}`
    };
    let p = g[0];
    if (p.startsWith("xml")) return {
      ok: !1,
      reason: `reserved attribute name ${p}`
    };
    if (s.has(p)) return {
      ok: !1,
      reason: `duplicate attribute ${p}`
    };
    if (!ye.has(p)) return {
      ok: !1,
      reason: `unknown attribute ${p}`
    };
    if (s.add(p), n += p.length, !e.startsWith('="', n)) return {
      ok: !1,
      reason: `attribute ${p} must be ="\u2026"-quoted`
    };
    n += 2;
    let _ = n;
    for (;;) {
      if (n >= e.length) return {
        ok: !1,
        reason: `unterminated value for attribute ${p}`
      };
      let h = e[n];
      if (h === '"') break;
      if (h === "<" || h === ">" || h === "'" || h === "=") return {
        ok: !1,
        reason: `raw special in attribute ${p}`
      };
      if (q(h) || h === `
` || h === "\t") return {
        ok: !1,
        reason: `control character in attribute ${p}`
      };
      if (h === "&") return {
        ok: !1,
        reason: `ampersand in attribute ${p}`
      };
      n++
    }
    let v = e.slice(_, n);
    if (n++, p === "kind") {
      if (!N.test(v)) return {
        ok: !1,
        reason: "invalid kind attribute"
      };
      r = v
    }
  }
  if (r === void 0) return {
    ok: !1,
    reason: "missing kind attribute"
  };
  if (!s.has("at")) return {
    ok: !1,
    reason: "missing at attribute"
  };
  for (let g of s) {
    if (M.has(g)) continue;
    let p = A.get(r);
    if (p === void 0 || !p.has(g)) return {
      ok: !1,
      reason: `attribute ${g} not allowed on kind ${r}`
    }
  }
  if (e.startsWith("/>", n)) {
    if (n + 2 !== e.length) return {
      ok: !1,
      reason: "content after the root element"
    };
    return {
      ok: !0,
      kind: r
    }
  }
  n++;
  let E = K.get(r),
    l;
  for (; n < e.length; n++) {
    let g = e[n];
    if (g === "<") {
      if (e.startsWith("</event>", n)) {
        if (l !== void 0) return {
          ok: !1,
          reason: `unclosed <${l}> at root close`
        };
        if (n + 8 !== e.length) return {
          ok: !1,
          reason: "content after the root element"
        };
        return {
          ok: !0,
          kind: r
        }
      }
      let p = E === void 0 ? null : /^<(\/?)([a-z]{1,16})(\/?)>/.exec(e.slice(n, n + 20));
      if (p === null || !E.has(p[2])) return {
        ok: !1,
        reason: `markup in body at offset ${n}`
      };
      let [_, v, h, O] = p;
      if (v === "/" && O === "/") return {
        ok: !1,
        reason: `malformed child tag at offset ${n}`
      };
      if (v === "/") {
        if (l !== h) return {
          ok: !1,
          reason: `stray </${h}> at offset ${n}`
        };
        l = void 0
      } else {
        if (l !== void 0) return {
          ok: !1,
          reason: `nested <${h}> inside <${l}>`
        };
        if (O !== "/") l = h
      }
      n += _.length - 1;
      continue
    }
    if (g === ">" || l === void 0 && (g === '"' || g === "'")) return {
      ok: !1,
      reason: `raw special in body at offset ${n}`
    };
    if (q(g)) return {
      ok: !1,
      reason: `control character in body at offset ${n}`
    };
    if (g === "&" && !(e.startsWith("amp;", n + 1) || e.startsWith("lt;", n + 1) || e.startsWith("gt;", n + 1) || e.startsWith("quot;", n + 1) || e.startsWith("#39;", n + 1))) return {
      ok: !1,
      reason: `unknown entity in body at offset ${n}`
    }
  }
  return {
    ok: !1,
    reason: "missing closing tag"
  }
}
