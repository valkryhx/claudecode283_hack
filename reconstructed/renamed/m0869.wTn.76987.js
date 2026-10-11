/* ==========================================================================
 * m0869.wTn  ->  buildVmContext   [m0869_0xd12567a.js @ 76987]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function buildVmContext(task, engine, emit, workflowRunId, onAgentController, args, seedPhaseTitles, tokenBudget, journal, journalState, workflowName, invokingRequestId, parentPromptId, onRateLimitWait) {
  let onProgress = makeProgressSink(emit),
    hooks = makeEngineHooks(task, engine, onProgress, workflowRunId, onAgentController, seedPhaseTitles, tokenBudget, journal, journalState, workflowName, invokingRequestId, parentPromptId, onRateLimitWait),
    vmHelpers = {
      sanitize: We => We === null || typeof We !== "object" && typeof We !== "function" ? We : {},
      toStr: We => toStringSafe(We)
    },
    logToProgress = once(We => onProgress({
      type: "progress",
      toolUseID: "workflow_log",
      data: {
        type: "workflow_log",
        message: We
      }
    }), vmHelpers),
    budget = Object.freeze({
      __proto__: null,
      total: tokenBudget?.total ?? null,
      spent: freezeFn(() => tokenBudget?.getTurnSpent() ?? 0),
      remaining: freezeFn(() => tokenBudget?.total == null ? 1 / 0 : Math.max(0, tokenBudget.total - tokenBudget.getTurnSpent()))
    }),
    abortSignal = task.abortController?.signal,
    timers = makeTimers(abortSignal),
    vmContext = VM.createContext({
      __proto__: null,
      log: freezeFn(hooks.log),
      phase: freezeFn(hooks.phase),
      console: logToProgress,
      budget: budget,
      setTimeout: timers.setTimeout,
      clearTimeout: timers.clearTimeout
    }, {
      codeGeneration: {
        strings: !1,
        wasm: !1
      }
    });
  hardenContext(vmContext), removeDangerousGlobals(vmContext, VM_ALLOWLIST), hardenPrototypes(vmContext);
  let {
    vmToStr: vmToStr,
    vmStringify: vmStringify,
    vmOwnString: vmOwnString
  } = makeStringHelpers(vmContext);
  timers.bindVMInvoke(VM.runInContext("(fn => { fn() })", vmContext));
  let intakeClone = vmClone(vmContext),
    settle = toPromise(vmContext),
    call = makeVmProps(vmContext),
    childSpawnMemo = {},
    childWorkflowApi = {
      hooks: hooks,
      budget: budget,
      abortSignal: abortSignal,
      timers: timers,
      resolveWorkflow: (We, et) => resolveWorkflow(We, et, task.storageV5),
      getAllWorkflows: We => getAllWorkflows(We, task.storageV5),
      intakeClone: intakeClone,
      loadScriptPath: We => loadScriptPath(We, storageDir(task)),
      childSpawnMemo: () => childSpawnMemo.get?.()
    },
    childWorkflow = runChildWorkflow(childWorkflowApi),
    asyncWrap = makeAsyncWrap(vmContext),
    agentBound = (We, et) => hooks.agent(We, et);
  for (let [We, et] of [["agent", agentBound], ["parallel", hooks.parallel], ["pipeline", hooks.pipeline], ["workflow", childWorkflow]]) Object.defineProperty(vmContext, We, {
    value: asyncWrap(wrapForVm(et)),
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
  {
    let We = args === void 0 ? void 0 : JSON.stringify(args);
    Object.defineProperty(vmContext, "args", {
      value: We === void 0 ? void 0 : VM.runInContext(`JSON.parse(${JSON.stringify(We)})`, vmContext),
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }
  let vmBoundary = makeVmBoundary(vmContext, VM_ALLOWLIST);
  return vmHelpers.sanitize = vmBoundary.sanitize, vmHelpers.toStr = vmToStr, hooks.bindVMAwait({
    settle: settle,
    call: call,
    clone: intakeClone,
    sanitize: vmBoundary.sanitize,
    snapshot: vmBoundary.snapshot,
    getProp: vmBoundary.getProp
  }), {
    vmContext: vmContext,
    hooks: hooks,
    vmToStr: vmToStr,
    vmOwnString: vmOwnString,
    vmStringify: vmStringify,
    timers: timers,
    childSpawnMemoRef: childSpawnMemo,
    vmBoundary: {
      clone: intakeClone,
      call: call,
      settle: settle,
      sanitize: vmBoundary.sanitize,
      asyncWrap: asyncWrap
    },
    childWorkflow: childWorkflowApi
  };
}
