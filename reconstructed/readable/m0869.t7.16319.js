/* ==============================================================================
 * m0869.t7   [m0869_0xd12567a.js @ 16319]
 * --------------------------------------------------------------------------
 * 作用: 脚本编译：先 Function() 做语法检查 → rr() 转译 → new vm.Script(filename='workflow.js')，禁用 import()。
 * 标识: e=scriptBody  r={bindWords}
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 16319
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function t7(e, {
  bindWords: r = !1
} = {}) {
  try {
    Function(`async function _check() {'use strict';
${e}
}`);
    let s = rr(e),
      g = r ? `, ${or}` : "",
      f = r ? `, ${Qor}()` : "",
      w = `((${ne} => ((${ne}a${g}) => async () => {'use strict';
${s}
})(${ne}it => ({[Symbol.asyncIterator](){const ${ne}ai = ${ne}it[Symbol.asyncIterator];if (${ne}ai != null && typeof ${ne}ai !== 'function') throw new TypeError('@@asyncIterator is not a function');const ${ne}i = ${ne}ai != null ? ${ne}ai.call(${ne}it) : ${ne}it[Symbol.iterator]();if (${ne}i === null || (typeof ${ne}i !== 'object' && typeof ${ne}i !== 'function')) throw new TypeError('Iterator is not an object');const ${ne}nxt = ${ne}i.next;if (typeof ${ne}nxt !== 'function') throw new TypeError('Iterator.next is not a function');const ${ne}ret = ${ne}i.return;const ${ne}thr = ${ne}i.throw;const ${ne}w = s => ${ne}(s).then(s => { if (s === null || (typeof s !== 'object' && typeof s !== 'function')) throw new TypeError('Iterator result is not an object'); const done = s.done; return ${ne}(s.value).then(value => ({value, done})) });return {next:v=>${ne}w(${ne}nxt.call(${ne}i,v)),return:v=>${ne}w(typeof ${ne}ret==='function'?${ne}ret.call(${ne}i,v):{value:v,done:true}),throw:e=>typeof ${ne}thr==='function'?${ne}w(${ne}thr.call(${ne}i,e)):${ne}(typeof ${ne}ret==='function'?${ne}ret.call(${ne}i):undefined).then(()=>{throw new TypeError('The iterator does not provide a throw method')})}}})${f}))(${Qn}))()`,
      A = new Kt.Script(w, {
        filename: "workflow.js",
        importModuleDynamically: () => {
          throw Ohe("import() is not available in workflow scripts.")
        }
      });
    return _("workflow_compile"), {
      ok: !0,
      vmScript: A
    }
  } catch (s) {
    return m("workflow_compile", "syntax_error"), {
      ok: !1,
      error: `SyntaxError: ${s instanceof Error?s.message:String(s)}`
    }
  }
}
