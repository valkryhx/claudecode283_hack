/* ==============================================================================
 * m0862.Fy   [m0862_0xd11f1fb.js @ 3670]
 * --------------------------------------------------------------------------
 * 作用: Workflow 脚本解析器：强制 export const meta 为第一条语句，且 meta 必须是纯字面量；返回 {meta, scriptBody}。
 * 标识: e=脚本文本  n=validateBody  t=maxBytes
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 3670
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Fy(e, {
  validateBody: n = !0,
  maxBytes: t = Nb
} = {}) {
  if (e.length > t) return {
    error: `Script exceeds ${t} bytes`
  };
  let r = n ? null : V.exec(e);
  if (r) {
    let u = S(e, r[0].length),
      E = u && I(e, u.end);
    if (u && E !== void 0) {
      let w = M(u.value);
      if (!("error" in w)) return {
        meta: w.meta,
        scriptBody: L(e, E)
      }
    }
  }
  let {
    parse: o
  } = q6e(), i;
  try {
    i = o(e, {
      ecmaVersion: "latest",
      sourceType: "module",
      allowAwaitOutsideFunction: !0,
      allowReturnOutsideFunction: !0
    })
  } catch (u) {
    return {
      error: C(u, e)
    }
  }
  let a = i.body[0];
  if (!a || a.type !== "ExportNamedDeclaration" || !U(a)) return {
    error: "`export const meta = { name, description, phases }` must be the FIRST statement in the script"
  };
  let l = a.declaration.declarations[0].init,
    f;
  try {
    f = j(l)
  } catch (u) {
    return {
      error: `meta must be a pure literal: ${u instanceof Error?u.message:String(u)}`
    }
  }
  let p = M(f);
  if ("error" in p) return p;
  return {
    meta: p.meta,
    scriptBody: L(e, a.end)
  }
}
