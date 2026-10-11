/* ==============================================================================
 * m0869.jo   [m0869_0xd12567a.js @ 43713]
 * --------------------------------------------------------------------------
 * 作用: agent(prompt,opts)：算缓存键 → resume 命中则直接返回 → 并发信号量 No 排队 → 真实 spawn Bo → 结果写 journal。
 * 标识: M=prompt  U=opts  ee=AbortSignal?
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 43713
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
jo = xt(async (M, U, ee, Oe, Qe) => {
  let pe = e.agentContext,
    ve = ee instanceof AbortSignal ? ee : void 0,
    Fe = Qe instanceof AbortSignal ? Qe : void 0,
    Xe = Oe instanceof SSt,
    Me;
  if (U !== null && typeof U === "object" && !Ir.isProxy(U)) {
    let te = Object.getOwnPropertyDescriptor(U, "schema"),
      Re = te && "value" in te ? te.value : void 0;
    if (Re !== null && typeof Re === "object") Me = Re
  }
  let K = cdn(o(U));
  if (K && Me !== void 0) {
    let te = Wn.get(Me);
    if (te === void 0) te = cdn(o(Me)), Wn.set(Me, te);
    K.schema = te
  }
  if (K?.model !== void 0 && a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t(`Workflow agent model "${K.model}" ignored: CLAUDE_CODE_SUBAGENT_MODEL_FORCE is set`), K.model = void 0;
  if (D.abortController?.signal.aborted) return new Promise(() => {});
  try {
    et(), ct();
    let te = K?.disallowedTools;
    if (te !== void 0) {
      if (!Array.isArray(te) || te.some((tt) => typeof tt !== "string" || tt === "" || tt !== tt.trim())) throw new P("agent() opts.disallowedTools must be an array of non-empty tool-name strings (e.g. ['Bash', 'Write']); got " + (Array.isArray(te) ? "an array with non-string, empty, or whitespace-padded entries" : typeof te) + ". Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools malformed \u2014 spawn refused");
      if (K !== void 0) K.disallowedTools = te.length === 0 ? void 0 : L(te).sort()
    }
    let Re = K?.bashCommandClamp;
    if (Re !== void 0) {
      if (!Array.isArray(Re) || Re.some((je) => typeof je !== "string" || je === "" || je !== je.trim())) throw new P("agent() opts.bashCommandClamp must be an array of non-empty strings; got " + (Array.isArray(Re) ? "an array with non-string, empty, or whitespace-padded entries" : typeof Re) + ". Refusing the spawn rather than running it un-clamped.", "agent() bashCommandClamp malformed \u2014 spawn refused");
      let tt = Re.length === 0 ? void 0 : L(Re).sort();
      for (let je of tt ?? []) {
        let {
          toolName: Ct,
          ruleContent: Ye
        } = Jn(je);
        if (Ct !== Ue || Ye === void 0 || Ye === "" || Ye !== Ye.trim()) throw new P(`agent() opts.bashCommandClamp entry '${je}' must be a '${Ue}(<command or prefix>)' permission rule (tool name case-sensitive, non-empty content with no leading/trailing whitespace inside the parens); it parses to tool '${Ct}'` + (Ye === void 0 || Ye === "" ? " with no rule content" : Ye !== Ye.trim() ? " with whitespace-padded rule content" : "") + ". Refusing the spawn rather than running it with an inert clamp entry.", "agent() opts.bashCommandClamp inert entry \u2014 spawn refused")
      }
      if (K !== void 0) K.bashCommandClamp = tt
    }
  } catch (te) {
    throw await Q(0), te
  }
  let Ge = ++ge,
    Be = pFe(M),
    Le = K?.label != null ? String(K.label).replace(/\s+/g, " ").trim() : re(Be, 60).replace(/\s+/g, " ").trim(),
    ke = K?.phase != null ? String(K.phase) : Nt,
    Ve = ke != null ? Wt(ke) : void 0,
    ut = K?.stallMs != null ? Number(K.stallMs) : Kr,
    He = Mt(Be),
    Ee, De;
  if (F && !Xe) {
    Ee = lo(Be, K, S), S = Ee;
    let te = T ? void 0 : R?.results.get(Ee);
    if (te !== void 0) {
      if (te.foreignArtifactContent) Z = !0;
      return s({
        type: "progress",
        toolUseID: `workflow_agent_${Ge}_cached`,
        data: {
          type: "workflow_agent",
          index: Ge,
          label: Le,
          phaseIndex: Ve,
          phaseTitle: ke,
          agentId: te.agentId,
          model: xe(K?.model),
          state: "done",
          startedAt: Date.now(),
          lastProgressAt: Date.now(),
          cached: !0,
          resultPreview: Mt(te.result),
          promptPreview: He
        }
      }), h(te.result)
    }
    let Re = R?.started.get(Ee);
    if (!(!T && Re !== void 0 && Re.length > 0 && !R?.failed.has(Ee))) T = !0;
    if (Re && Re.length > 0) i("tengu_workflow_journal_started_hit_respawn", {
      attempts: Re.length
    })
  }
  let $t = !1,
    Ie = (te) => {
      if ($t = !0, De = te, !F || Ee === void 0) return;
      F.append({
        type: "started",
        key: Ee,
        agentId: te,
        ...Po(Le, ke)
      }).catch((Re) => t(`workflow journal started-append failed: ${Re}`, {
        level: "warn"
      }))
    },
    Ke = async () => {
      if (!F || !Ee || D.abortController?.signal.aborted || Fe?.aborted) return;
      await F.append({
        type: "failed",
        key: Ee,
        agentId: De ?? ""
      }).catch((te) => t(`workflow journal failed-append failed: ${te}`, {
        level: "warn"
      }))
    }, Et = async (te) => {
      if (te === null) await Ke();
      if (F && Ee && te !== null) await F.append({
        type: "result",
        key: Ee,
        agentId: De ?? "",
        result: te,
        ...Z && {
          foreignArtifactContent: !0
        }
      }).catch((Re) => t(`workflow journal result-append failed: ${Re}`, {
        level: "warn"
      }));
      return te
    }, mt = Date.now(), At = () => s({
      type: "progress",
      toolUseID: `workflow_agent_${Ge}_queued`,
      data: {
        type: "workflow_agent",
        index: Ge,
        label: Le,
        phaseIndex: Ve,
        phaseTitle: ke,
        agentType: K?.agentType != null ? String(K.agentType) : void 0,
        isolation: K?.isolation === "worktree" || K?.isolation === "remote" ? K.isolation : void 0,
        model: xe(K?.model),
        state: "start",
        queuedAt: mt,
        promptPreview: He,
        lastProgressAt: mt
      }
    });
  if (K?.isolation === "remote") throw Error("agent({isolation:'remote'}) is not available in this build");
  At();
  try {
    return await Et(await No(Ge, Be, Le, ke, Ve, ut, K, Ie, mt, pe, ve))
  } catch (te) {
    if (!$t && !D.abortController?.signal.aborted) s({
      type: "progress",
      toolUseID: `workflow_agent_${Ge}_queued`,
      data: {
        type: "workflow_agent",
        index: Ge,
        label: Le,
        phaseIndex: Ve,
        phaseTitle: ke,
        model: xe(K?.model),
        state: "error",
        error: te instanceof Error ? te.message : String(te),
        queuedAt: mt,
        promptPreview: He,
        lastProgressAt: Date.now()
      }
    });
    if (await Ke(), D.abortController?.signal.aborted) return new Promise(() => {});
    throw te
  }
})
