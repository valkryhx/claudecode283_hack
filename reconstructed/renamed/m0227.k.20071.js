/* ==========================================================================
 * m0227.k   [m0227_0xc482590.js @ 20071]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function k(e, n, r) {
  if (n <= 0) return {
    reason: "max_depth"
  };
  if (--r.remaining < 0) return {
    reason: "max_nodes"
  };
  if (!G(e)) return {
    reason: "not_object"
  };
  for (let l of Object.keys(e)) if (!He.has(l)) return {
    reason: "unsupported_keyword"
  };
  let s = {};
  if (e.description !== void 0) {
    if (typeof e.description !== "string") return {
      reason: "unsupported_keyword"
    };
    s.description = e.description;
  }
  if (e.title !== void 0) {
    if (typeof e.title !== "string") return {
      reason: "unsupported_keyword"
    };
    s.title = e.title;
  }
  if (e.anyOf !== void 0) {
    for (let g of Object.keys(e)) if (g !== "anyOf" && !Ye.has(g)) return {
      reason: "unsupported_keyword"
    };
    if (!Array.isArray(e.anyOf) || e.anyOf.length === 0) return {
      reason: "unsupported_keyword"
    };
    let l = [];
    for (let g of e.anyOf) {
      let p = k(g, n - 1, r);
      if ("reason" in p) return p;
      l.push(p.node);
    }
    return s.anyOf = l, {
      node: s
    };
  }
  if (e.const !== void 0) {
    if (!ae(e.const)) return {
      reason: "unsupported_const"
    };
    s.const = e.const;
  }
  if (e.enum !== void 0) {
    if (!Array.isArray(e.enum) || e.enum.length === 0 || !e.enum.every(ae) || new Set(e.enum).size !== e.enum.length) return {
      reason: "unsupported_enum"
    };
    s.enum = e.enum.slice();
  }
  let E = e.type;
  if (E !== void 0) if (typeof E === "string") {
    if (!se.has(E)) return {
      reason: "unsupported_type"
    };
    s.type = E;
  } else if (Array.isArray(E)) {
    if (E.length === 0 || !E.every(l => typeof l === "string" && se.has(l) && l !== "object" && l !== "array") || new Set(E).size !== E.length) return {
      reason: "unsupported_type"
    };
    s.type = E.slice();
  } else return {
    reason: "unsupported_type"
  };
  if (E !== "object" && (e.properties !== void 0 || e.required !== void 0 || e.additionalProperties !== void 0)) return {
    reason: "mismatched_keywords"
  };
  if (E !== "array" && e.items !== void 0) return {
    reason: "mismatched_keywords"
  };
  if (E === "object") {
    let l = e.properties;
    if (!G(l)) return {
      reason: "no_properties"
    };
    if (e.additionalProperties !== void 0 && e.additionalProperties !== !1) return {
      reason: "additional_properties"
    };
    if (e.required !== void 0) {
      if (!Array.isArray(e.required) || !e.required.every(p => typeof p === "string" && Object.hasOwn(l, p)) || new Set(e.required).size !== e.required.length) return {
        reason: "invalid_required"
      };
      s.required = e.required.slice();
    }
    let g = [];
    for (let [p, _] of Object.entries(l)) {
      let v = k(_, n - 1, r);
      if ("reason" in v) return v;
      g.push([p, v.node]);
    }
    s.properties = Object.fromEntries(g), s.additionalProperties = !1;
  } else if (E === "array") {
    let l = e.items;
    if (l === void 0 || Array.isArray(l)) return {
      reason: "unsupported_items"
    };
    let g = k(l, n - 1, r);
    if ("reason" in g) return g;
    s.items = g.node;
  } else if (E === void 0 && s.enum === void 0 && !("const" in s)) return {
    reason: "missing_type"
  };
  return {
    node: s
  };
}
