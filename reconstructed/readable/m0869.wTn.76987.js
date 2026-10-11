/* ==============================================================================
 * m0869.wTn   [m0869_0xd12567a.js @ 76987]
 * --------------------------------------------------------------------------
 * 作用: 建 VM 上下文并注入 DSL：agent/parallel/pipeline/workflow/args/budget/log/phase/console/setTimeout。codeGeneration 禁 strings/wasm。
 * 标识: r=引擎  s=进度回调
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 76987
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function wTn(e, r, s, g, f, w, A, F, R, ce, W, H, z, ge) {
  let _e = $o(s),
    ie = Oo(e, r, _e, g, f, A, F, R, ce, W, H, z, ge),
    h = {
      sanitize: (We) => We === null || typeof We !== "object" && typeof We !== "function" ? We : {},
      toStr: (We) => hNt(We)
    },
    o = Rn((We) => _e({
      type: "progress",
      toolUseID: "workflow_log",
      data: {
        type: "workflow_log",
        message: We
      }
    }), h),
    u = Object.freeze({
      __proto__: null,
      total: F?.total ?? null,
      spent: bI(() => F?.getTurnSpent() ?? 0),
      remaining: bI(() => F?.total == null ? 1 / 0 : Math.max(0, F.total - F.getTurnSpent()))
    }),
    n = e.abortController?.signal,
    S = bTn(n),
    T = Yt.createContext({
      __proto__: null,
      log: bI(ie.log),
      phase: bI(ie.phase),
      console: o,
      budget: u,
      setTimeout: S.setTimeout,
      clearTimeout: S.clearTimeout
    }, {
      codeGeneration: {
        strings: !1,
        wasm: !1
      }
    });
  an(T), dFe(T, Ihe), ln(T);
  let {
    vmToStr: C,
    vmStringify: X,
    vmOwnString: N
  } = SVn(T);
  S.bindVMInvoke(Yt.runInContext("(fn => { fn() })", T));
  let Z = uFe(T),
    se = U6e(T),
    he = mNt(T),
    Se = {},
    lt = {
      hooks: ie,
      budget: u,
      abortSignal: n,
      timers: S,
      resolveWorkflow: (We, et) => TSt(We, et, e.storageV5),
      getAllWorkflows: (We) => kSe(We, e.storageV5),
      intakeClone: Z,
      loadScriptPath: (We) => NKt(We, oo(e)),
      childSpawnMemo: () => Se.get?.()
    },
    vt = yo(lt),
    yt = gNt(T),
    fe = (We, et) => ie.agent(We, et);
  for (let [We, et] of [
      ["agent", fe],
      ["parallel", ie.parallel],
      ["pipeline", ie.pipeline],
      ["workflow", vt]
    ]) Object.defineProperty(T, We, {
    value: yt(DCe(et)),
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
  {
    let We = w === void 0 ? void 0 : JSON.stringify(w);
    Object.defineProperty(T, "args", {
      value: We === void 0 ? void 0 : Yt.runInContext(`JSON.parse(${JSON.stringify(We)})`, T),
      writable: !0,
      enumerable: !0,
      configurable: !0
    })
  }
  let it = wVn(T, Ihe);
  return h.sanitize = it.sanitize, h.toStr = C, ie.bindVMAwait({
    settle: se,
    call: he,
    clone: Z,
    sanitize: it.sanitize,
    snapshot: it.snapshot,
    getProp: it.getProp
  }), {
    vmContext: T,
    hooks: ie,
    vmToStr: C,
    vmOwnString: N,
    vmStringify: X,
    timers: S,
    childSpawnMemoRef: Se,
    vmBoundary: {
      clone: Z,
      call: he,
      settle: se,
      sanitize: it.sanitize,
      asyncWrap: yt
    },
    childWorkflow: lt
  }
}
