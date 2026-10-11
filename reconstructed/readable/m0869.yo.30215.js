/* ==============================================================================
 * m0869.yo   [m0869_0xd12567a.js @ 30215]
 * --------------------------------------------------------------------------
 * 作用: 子 workflow 执行：加载子脚本 → 编译 → 建 childCtx → 注入 agent/parallel/pipeline/workflow(拒绝桩)/args → 跑。共享并发/计数/abort/预算。
 * 标识: e=childEngine  g=nameOrRef  f=args
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 30215
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function yo(e) {
  let r = nsr();
  return xt(async function(g, f) {
    if (e.abortSignal?.aborted) return new Promise(() => {});
    let w = e.childSpawnMemo?.(),
      {
        childName: A,
        scriptBody: F
      } = await Zor(e, g),
      R = t7(F);
    if (!R.ok) throw Error(`workflow('${A}'): ${R.error}`);
    let ce = r(A);
    e.hooks.reservePhase(ce, "child"), e.hooks.log(`${v$} running dynamic workflow ${A}`);
    let W;
    try {
      let H = esr(e, A, ce);
      W = H.errorInfo;
      let z = {
        agent: (ie, h) => H.agent(ie, h, void 0, w),
        parallel: e.hooks.parallel,
        pipeline: e.hooks.pipeline,
        workflow: tsr
      };
      for (let [ie, h] of Object.entries(z)) Object.defineProperty(H.childCtx, ie, {
        value: H.asyncWrap(DCe(h)),
        writable: !0,
        enumerable: !0,
        configurable: !0
      });
      Object.defineProperty(H.childCtx, "args", {
        value: f === void 0 ? void 0 : H.clone(f),
        writable: !0,
        enumerable: !0,
        configurable: !0
      });
      let ge = await H.settle(R.vmScript.runInContext(H.childCtx, OCe(bSt))),
        _e = H.clone(ge.v);
      return e.hooks.log(`${v$} ${A} done`), _e
    } catch (H) {
      let z, ge, _e;
      if (W)({
        name: z,
        message: ge,
        stack: _e
      } = W(H));
      else z = H instanceof Error ? H.name : "Error", ge = H instanceof Error ? H.message : "", _e = H instanceof Error ? H.stack : void 0;
      let ie = $ut({
        name: z,
        message: ge,
        stack: _e
      });
      throw e.hooks.recordFailure(`${ce}: ${ie}`), e.hooks.log(`${v$} ${A} failed: ${ie}`), Ohe(Fc(ge), z, ie)
    }
  })
}
