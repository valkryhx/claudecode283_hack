/* ==========================================================================
 * m0862.Fy  ->  parseWorkflowScript   [m0862_0xd11f1fb.js @ 3670]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function parseWorkflowScript(script, {
  validateBody = !0,
  maxBytes = MAX_SCRIPT_BYTES
} = {}) {
  if (script.length > maxBytes) return {
    error: `Script exceeds ${maxBytes} bytes`
  };
  let fastMatch = validateBody ? null : FAST_META_RE.exec(script);
  if (fastMatch) {
    let u = locateMetaDecl(script, fastMatch[0].length),
      E = u && findBodyStart(script, u.end);
    if (u && E !== void 0) {
      let w = finalizeMeta(u.value);
      if (!("error" in w)) return {
        meta: w.meta,
        scriptBody: sliceBody(script, E)
      };
    }
  }
  let {
      parse: parse
    } = loadParser(),
    ast;
  try {
    ast = parse(script, {
      ecmaVersion: "latest",
      sourceType: "module",
      allowAwaitOutsideFunction: !0,
      allowReturnOutsideFunction: !0
    });
  } catch (u) {
    return {
      error: formatParseError(u, script)
    };
  }
  let firstStmt = ast.body[0];
  if (!firstStmt || firstStmt.type !== "ExportNamedDeclaration" || !isMetaDecl(firstStmt)) return {
    error: "`export const meta = { name, description, phases }` must be the FIRST statement in the script"
  };
  let init = firstStmt.declaration.declarations[0].init,
    rawMeta;
  try {
    rawMeta = evalObjectLiteral(init);
  } catch (u) {
    return {
      error: `meta must be a pure literal: ${u instanceof Error ? u.message : String(u)}`
    };
  }
  let checked = finalizeMeta(rawMeta);
  if ("error" in checked) return checked;
  return {
    meta: checked.meta,
    scriptBody: sliceBody(script, firstStmt.end)
  };
}
