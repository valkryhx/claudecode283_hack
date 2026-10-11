/* ==========================================================================
 * m0869.t7  ->  compileScript   [m0869_0xd12567a.js @ 16319]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function compileScript(scriptBody, {
  bindWords = !1
} = {}) {
  try {
    Function(`async function _check() {'use strict';
${scriptBody}
}`);
    let s = transpile(scriptBody),
      g = bindWords ? `, ${WORDS_ARG}` : "",
      f = bindWords ? `, ${HELPERS_ARG}()` : "",
      w = `((${RUNTIME} => ((${RUNTIME}a${g}) => async () => {'use strict';
${s}
})(${RUNTIME}it => ({[Symbol.asyncIterator](){const ${RUNTIME}ai = ${RUNTIME}it[Symbol.asyncIterator];if (${RUNTIME}ai != null && typeof ${RUNTIME}ai !== 'function') throw new TypeError('@@asyncIterator is not a function');const ${RUNTIME}i = ${RUNTIME}ai != null ? ${RUNTIME}ai.call(${RUNTIME}it) : ${RUNTIME}it[Symbol.iterator]();if (${RUNTIME}i === null || (typeof ${RUNTIME}i !== 'object' && typeof ${RUNTIME}i !== 'function')) throw new TypeError('Iterator is not an object');const ${RUNTIME}nxt = ${RUNTIME}i.next;if (typeof ${RUNTIME}nxt !== 'function') throw new TypeError('Iterator.next is not a function');const ${RUNTIME}ret = ${RUNTIME}i.return;const ${RUNTIME}thr = ${RUNTIME}i.throw;const ${RUNTIME}w = s => ${RUNTIME}(s).then(s => { if (s === null || (typeof s !== 'object' && typeof s !== 'function')) throw new TypeError('Iterator result is not an object'); const done = s.done; return ${RUNTIME}(s.value).then(value => ({value, done})) });return {next:v=>${RUNTIME}w(${RUNTIME}nxt.call(${RUNTIME}i,v)),return:v=>${RUNTIME}w(typeof ${RUNTIME}ret==='function'?${RUNTIME}ret.call(${RUNTIME}i,v):{value:v,done:true}),throw:e=>typeof ${RUNTIME}thr==='function'?${RUNTIME}w(${RUNTIME}thr.call(${RUNTIME}i,e)):${RUNTIME}(typeof ${RUNTIME}ret==='function'?${RUNTIME}ret.call(${RUNTIME}i):undefined).then(()=>{throw new TypeError('The iterator does not provide a throw method')})}}})${f}))(${RUNTIME_ROOT}))()`,
      A = new VM_MODULE.Script(w, {
        filename: "workflow.js",
        importModuleDynamically: () => {
          throw makeError("import() is not available in workflow scripts.");
        }
      });
    return trackEvent("workflow_compile"), {
      ok: !0,
      vmScript: A
    };
  } catch (s) {
    return trackError("workflow_compile", "syntax_error"), {
      ok: !1,
      error: `SyntaxError: ${s instanceof Error ? s.message : String(s)}`
    };
  }
}
