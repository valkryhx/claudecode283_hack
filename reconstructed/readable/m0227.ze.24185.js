/* ==============================================================================
 * m0227.ze   [m0227_0xc482590.js @ 24185]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 24185
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ze(e) {
  try {
    if (fe(e, {
        n: vPr
      }, 0)) return {
      error: "schema too large"
    };
    if (Boolean(e.$async)) return {
      error: "$async schemas are not supported"
    };
    let {
      Ajv: n
    } = Iin(), r = new n({
      allErrors: !0,
      validateFormats: !1
    });
    if (!r.validateSchema(e)) return {
      error: r.errorsText(r.errors)
    };
    let E = r.compile(e),
      l;
    try {
      let p = Cjn(e);
      if (p.ok) l = p.schema;
      i("tengu_structured_output_strict_schema", {
        outcome: p.ok ? y("converted") : y("fallback"),
        reason: p.ok ? void 0 : c(p.reason)
      })
    } catch (p) {
      t(`Strict structured-output schema derivation failed, falling back to non-strict: ${p instanceof Error?p.message:String(p)}`, {
        level: "error"
      })
    }
    let g;
    try {
      let p = oe(e);
      if (!p.ok) g = p.finding;
      i("tengu_structured_output_schema_lint", {
        outcome: p.ok ? y("ok") : y("unsatisfiable"),
        reason: p.ok ? void 0 : c(p.finding.reason),
        scope: p.ok ? void 0 : c(p.finding.scope)
      })
    } catch (p) {
      d(p)
    }
    return {
      ...g && {
        unsatisfiable: g
      },
      tool: pe({
        inputJSONSchema: e,
        ...l && {
          strictInputJSONSchema: l
        }
      }, (p) => {
        if (!E(p)) {
          let v = E.errors?.map((O) => Je(O, p)).join(", "),
            h = E.errors?.map((O) => O.keyword).join(",");
          throw new P(`Output does not match required schema: ${v}`, `StructuredOutput schema mismatch: ${h??""}`)
        }
      })
    }
  } catch (n) {
    return {
      error: n instanceof Error ? n.message : String(n)
    }
  }
}
