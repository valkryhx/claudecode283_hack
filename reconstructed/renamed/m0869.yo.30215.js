/* ==========================================================================
 * m0869.yo  ->  runChildWorkflow   [m0869_0xd12567a.js @ 30215]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function runChildWorkflow(childEngine) {
  let namer = makeChildPhaseNamer();
  return vmWrap(async function (g, f) {
    if (childEngine.abortSignal?.aborted) return new Promise(() => {});
    let w = childEngine.childSpawnMemo?.(),
      {
        childName: A,
        scriptBody: F
      } = await loadChildScript(childEngine, g),
      R = compileScript(F);
    if (!R.ok) throw Error(`workflow('${A}'): ${R.error}`);
    let ce = namer(A);
    childEngine.hooks.reservePhase(ce, "child"), childEngine.hooks.log(`${CHILD_PHASE_PREFIX} running dynamic workflow ${A}`);
    let W;
    try {
      let H = makeChildContext(childEngine, A, ce);
      W = H.errorInfo;
      let z = {
        agent: (ie, h) => H.agent(ie, h, void 0, w),
        parallel: childEngine.hooks.parallel,
        pipeline: childEngine.hooks.pipeline,
        workflow: childWorkflowRejectStub
      };
      for (let [ie, h] of Object.entries(z)) Object.defineProperty(H.childCtx, ie, {
        value: H.asyncWrap(wrapForVm(h)),
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
      let ge = await H.settle(R.vmScript.runInContext(H.childCtx, makeRunOptions(DEFAULT_SYNC_TIMEOUT))),
        _e = H.clone(ge.v);
      return childEngine.hooks.log(`${CHILD_PHASE_PREFIX} ${A} done`), _e;
    } catch (H) {
      let z, ge, _e;
      if (W) ({
        name: z,
        message: ge,
        stack: _e
      } = W(H));else z = H instanceof Error ? H.name : "Error", ge = H instanceof Error ? H.message : "", _e = H instanceof Error ? H.stack : void 0;
      let ie = toErrorInfo({
        name: z,
        message: ge,
        stack: _e
      });
      throw childEngine.hooks.recordFailure(`${ce}: ${ie}`), childEngine.hooks.log(`${CHILD_PHASE_PREFIX} ${A} failed: ${ie}`), makeError(toErrorInfo(ge), z, ie);
    }
  });
}
