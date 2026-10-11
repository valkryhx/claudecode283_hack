/* ==============================================================================
 * m0869.kSt   [m0869_0xd12567a.js @ 81169]
 * --------------------------------------------------------------------------
 * 作用: 后台任务生命周期：注册任务 → 跑 Io() → 写 output 快照 → 完成/失败 → 发 task-notification。call() 返回 async_launched 后真正跑的就是它。
 * 标识: e={taskId,workflowRunId,script,vmScript,toolUseContext,…}
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 81169
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function kSt(e) {
  let {
    taskId: r,
    workflowRunId: s,
    script: g,
    scriptPath: f,
    args: w,
    meta: A,
    vmScript: F,
    toolUseContext: R,
    canUseTool: ce,
    toolUseId: W,
    transcriptDir: H,
    telemetry: z,
    isResume: ge,
    invokingRequestId: _e,
    parentPromptId: ie
  } = e, {
    description: h,
    name: o
  } = A;
  if (ge) {
    if (!e.v2Run || !e.v2Run.founded) _("task_local_workflow_resume");
    for (let [se, he] of Object.entries(R.taskRegistry.all()))
      if (he.type === "local_workflow" && he.workflowRunId === s && he.status !== "running" && !(ui(he.status) && !nb(se))) R.taskRegistry.remove(se)
  }
  let u = XG(R.agentId, R.taskRegistry),
    n = fsr({
      taskId: r,
      script: g,
      scriptPath: f,
      summary: h,
      workflowName: o,
      title: A.title,
      phases: A.phases,
      defaultModel: $2n(R.options),
      workflowRunId: s,
      args: w,
      ownerAgentId: u,
      spawnerAgentId: R.agentId,
      taskRegistry: R.taskRegistry,
      toolUseId: W,
      startTime: e.startTime
    }),
    S = Vqe(r, n.abortController, {
      settleRequiresEmptyAgentAssociations: !0
    });
  if (u && !Te()) VA(u, `workflow:${r}`, R.taskRegistry);
  let T = {
      ...R,
      abortController: n.abortController ?? R.abortController
    },
    C = e.v2Run;
  if (C) R.taskRegistry.update(r, (se) => ({
    ...se,
    v2Run: C
  }));
  let X = Lp() - xmt(),
    N = {
      total: Pmt(),
      getTurnSpent: () => Lp() - X
    },
    Z;
  return (async () => {
    let se = 0,
      he = Zr({
        onBatch: (ye) => gsr(r, ye, R.taskRegistry),
        onSdkEmit: (ye) => {
          let D = ye.filter(Fo);
          if (D.length === 0) return;
          let xe = T.getAppState()?.tasks?.[r];
          if (xe?.type !== "local_workflow" || xe.status !== "running") return;
          let bt = D.findLast((Ot) => Ot.type === "workflow_agent"),
            dn = D.every((Ot) => Ot.type === "workflow_agent" && Ot.state === "progress"),
            Wt = Date.now(),
            qt = !dn || Wt - se >= Qr;
          if (qt) se = Wt;
          bve({
            taskId: r,
            toolUseId: W,
            description: bt ? bt.phaseTitle ? `${bt.phaseTitle}: ${bt.label}` : bt.label : n.description,
            startTime: n.startTime,
            totalTokens: xe.totalTokens,
            toolUses: xe.totalToolCalls,
            lastToolName: bt?.label,
            summary: h,
            workflowProgress: qt ? xe.workflowProgress.filter(Fo) : void 0
          })
        }
      }),
      Se = (ye) => {
        if (ye.type !== "progress") return;
        he.onProgress(ye.data)
      },
      lt = (ye, D) => {
        if (D) n.agentControllers?.set(ye, D), ptn(r, ye, D);
        else n.agentControllers?.delete(ye), Byo(r, ye)
      },
      vt = (ye) => hsr(r, ye, R.taskRegistry),
      yt = ho(s, R.storageV5);
    if (!ge) await yt.append({
      type: "launched"
    }).catch((ye) => t(`workflow journal launched-append failed: ${ye}`, {
      level: "warn"
    }));
    let fe = C ? await C.run(T, ce, {
      onProgress: Se,
      onAgentController: lt,
      onRateLimitWait: vt
    }, {
      args: w,
      seedPhaseTitles: A.phases?.map((ye) => ye.title),
      tokenBudget: N,
      workflowName: Do(A.name, z.scriptIsVerbatimBuiltIn),
      invokingRequestId: _e,
      parentPromptId: ie,
      journal: yt
    }) : await Io(F, T, ce, {
      workflowRunId: s,
      onProgress: Se,
      onAgentController: lt,
      onRateLimitWait: vt,
      args: w,
      seedPhaseTitles: A.phases?.map((ye) => ye.title),
      tokenBudget: N,
      journal: yt,
      workflowName: Do(A.name, z.scriptIsVerbatimBuiltIn),
      invokingRequestId: _e,
      parentPromptId: ie
    });
    if (Ci(n.abortController?.signal.reason) === "background") {
      Z = {
        status: "adopted"
      }, he.cancel();
      return
    }
    he.flushNow();
    let it = T.getAppState()?.tasks?.[r],
      We = (it?.workflowProgress ?? []).filter((ye) => ye.type !== "workflow_log"),
      et = it?.totalTokens ?? 0,
      ct = it?.totalToolCalls ?? 0,
      Ft = n.abortController?.signal.aborted ? "killed" : fe.error ? "failed" : "completed";
    if (Z = Ft === "killed" ? {
        status: "killed"
      } : fe.error ? {
        status: "failed",
        error: fe.error,
        agentCount: fe.agentCount,
        logs: fe.logs,
        durationMs: fe.durationMs
      } : {
        status: "completed",
        result: fe.result,
        agentCount: fe.agentCount,
        logs: fe.logs,
        failures: fe.failures,
        durationMs: fe.durationMs
      }, i("tengu_workflow_completed", {
        workflow_run_id: Lo(s),
        workflow_source: c(z.source),
        workflow_name: z.name,
        workflow_description: z.description,
        status: c(Ft),
        agent_count: fe.agentCount,
        total_tokens: et,
        total_tool_calls: ct,
        duration_ms: fe.durationMs
      }), !C) {
      let ye = {
        agents: fe.agentCount,
        duration_ms: fe.durationMs
      };
      switch (Ft) {
        case "completed":
          _("workflow_run", ye);
          break;
        case "failed":
          m("workflow_run", "failed", ye);
          break;
        case "killed":
          p("workflow_run", "killed", ye);
          break
      }
    }
    if (vSt(z.source, z.scriptIsVerbatimBuiltIn)) {
      let ye = new Map;
      for (let D of it?.workflowProgress ?? []) {
        if (D.type !== "workflow_agent") continue;
        if (D.phaseIndex === void 0 || !D.phaseTitle) continue;
        let xe = ye.get(D.phaseIndex);
        if (!xe) xe = {
          title: D.phaseTitle,
          tokens: 0,
          toolCalls: 0,
          durationMs: 0,
          agentCount: 0,
          errorCount: 0,
          skipCount: 0
        }, ye.set(D.phaseIndex, xe);
        if (xe.tokens += D.tokens ?? 0, xe.toolCalls += D.toolCalls ?? 0, xe.durationMs += D.durationMs ?? 0, xe.agentCount += 1, D.state === "error")
          if (D.error === "skipped by user") xe.skipCount += 1;
          else xe.errorCount += 1
      }
      for (let [D, xe] of ye) i("tengu_workflow_phase_completed", {
        workflow_run_id: Lo(s),
        workflow_source: c(z.source),
        workflow_name: z.name,
        phase_index: D,
        phase_title: ts(xe.title, z.source, z.scriptIsVerbatimBuiltIn),
        phase_tokens: xe.tokens,
        phase_tool_calls: xe.toolCalls,
        phase_agent_duration_ms: xe.durationMs,
        phase_agent_count: xe.agentCount,
        phase_error_count: xe.errorCount,
        phase_skip_count: xe.skipCount
      })
    }
    if (G7r(s, {
        taskId: r,
        script: g,
        scriptPath: f,
        args: w,
        result: fe.result,
        agentCount: fe.agentCount,
        logs: fe.logs,
        durationMs: fe.durationMs,
        error: fe.error,
        summary: h,
        workflowName: o,
        title: A.title,
        status: Ft,
        startTime: n.startTime,
        phases: n.phases,
        defaultModel: n.defaultModel,
        workflowProgress: We,
        totalTokens: et,
        totalToolCalls: ct
      }, R.storageV5), n.abortController?.signal.aborted) return;
    let Nt = {
      total_tokens: et,
      tool_uses: ct,
      duration_ms: fe.durationMs
    };
    if (fe.error) TTn(r, fe.error, fe.agentCount, fe.logs, R.taskRegistry, {
      summary: `Dynamic workflow "${h}" failed: ${fe.error}`,
      output_file: n.outputFile,
      usage: Nt
    });
    else ysr(r, fe.result, fe.agentCount, fe.logs, R.taskRegistry, {
      summary: `Dynamic workflow "${h}" completed`,
      output_file: n.outputFile,
      usage: Nt
    });
    if (C && !C.isKilled && C.isActive) C.reopen?.();
    if (e.suppressCompletionNotification) R.taskRegistry.update(r, (ye) => ({
      ...ye,
      notified: !0
    })), _R(u, `workflow:${r}`, R.taskRegistry);
    else RTn({
      taskId: r,
      summary: h,
      status: fe.error ? "failed" : "completed",
      error: fe.error,
      result: fe.result,
      failures: fe.failures,
      foreignArtifactContent: fe.foreignArtifactContent,
      agentCount: fe.agentCount,
      totalTokens: et,
      totalToolCalls: ct,
      durationMs: fe.durationMs,
      taskRegistry: R.taskRegistry,
      toolUseId: W,
      transcriptDir: H,
      scriptPath: f,
      workflowRunId: s,
      args: w,
      workflowProgress: We
    })
  })().catch((se) => {
    d(se);
    let he = se instanceof Error ? se.message : String(se),
      Se = T.getAppState()?.tasks?.[r],
      lt = Se?.agentCount ?? 0;
    if (Se?.status !== "completed" && Z?.status !== "killed") Z = {
      status: "failed",
      error: he,
      agentCount: lt,
      logs: Se?.logs ?? [],
      durationMs: Date.now() - n.startTime
    };
    if (TTn(r, he, lt, Se?.logs ?? [], R.taskRegistry, {
        summary: `Dynamic workflow "${h}" failed: ${he}`,
        output_file: n.outputFile,
        usage: {
          total_tokens: Se?.totalTokens ?? 0,
          tool_uses: Se?.totalToolCalls ?? 0,
          duration_ms: Date.now() - n.startTime
        }
      }), e.suppressCompletionNotification) R.taskRegistry.update(r, (vt) => ({
      ...vt,
      notified: !0
    })), _R(u, `workflow:${r}`, R.taskRegistry);
    else RTn({
      taskId: r,
      summary: h,
      status: "failed",
      error: he,
      agentCount: lt,
      totalTokens: Se?.totalTokens ?? 0,
      totalToolCalls: Se?.totalToolCalls ?? 0,
      durationMs: Date.now() - n.startTime,
      taskRegistry: R.taskRegistry,
      toolUseId: W,
      transcriptDir: H,
      scriptPath: f,
      workflowRunId: s,
      args: w,
      workflowProgress: Se?.workflowProgress
    })
  }).finally(() => {
    if (S(), !e.onSettled) return;
    try {
      e.onSettled(Z ?? {
        status: "unknown"
      })
    } catch (se) {
      d(se)
    }
  }), n
}
