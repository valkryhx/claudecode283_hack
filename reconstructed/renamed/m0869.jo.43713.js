/* ==========================================================================
 * m0869.jo  ->  agent   [m0869_0xd12567a.js @ 43713]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
agent = vmWrap(async (prompt, opts, signal, arg3, arg4) => {
  let agentContext = e.agentContext,
    signalA = signal instanceof AbortSignal ? signal : void 0,
    signalB = arg4 instanceof AbortSignal ? arg4 : void 0,
    isOptsObj = arg3 instanceof OptsBrand,
    schema;
  if (opts !== null && typeof opts === "object" && !VMValue.isProxy(opts)) {
    let te = Object.getOwnPropertyDescriptor(opts, "schema"),
      Re = te && "value" in te ? te.value : void 0;
    if (Re !== null && typeof Re === "object") schema = Re;
  }
  let promptStr = sanitizeOpts(unwrap(opts));
  if (promptStr && schema !== void 0) {
    let te = Wn.get(schema);
    if (te === void 0) te = sanitizeOpts(unwrap(schema)), Wn.set(schema, te);
    promptStr.schema = te;
  }
  if (promptStr?.model !== void 0 && a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t(`Workflow agent model "${promptStr.model}" ignored: CLAUDE_CODE_SUBAGENT_MODEL_FORCE is set`), promptStr.model = void 0;
  if (D.abortController?.signal.aborted) return new Promise(() => {});
  try {
    et(), ct();
    let te = promptStr?.disallowedTools;
    if (te !== void 0) {
      if (!Array.isArray(te) || te.some(tt => typeof tt !== "string" || tt === "" || tt !== tt.trim())) throw new P("agent() opts.disallowedTools must be an array of non-empty tool-name strings (e.g. ['Bash', 'Write']); got " + (Array.isArray(te) ? "an array with non-string, empty, or whitespace-padded entries" : typeof te) + ". Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools malformed \u2014 spawn refused");
      if (promptStr !== void 0) promptStr.disallowedTools = te.length === 0 ? void 0 : L(te).sort();
    }
    let Re = promptStr?.bashCommandClamp;
    if (Re !== void 0) {
      if (!Array.isArray(Re) || Re.some(je => typeof je !== "string" || je === "" || je !== je.trim())) throw new P("agent() opts.bashCommandClamp must be an array of non-empty strings; got " + (Array.isArray(Re) ? "an array with non-string, empty, or whitespace-padded entries" : typeof Re) + ". Refusing the spawn rather than running it un-clamped.", "agent() bashCommandClamp malformed \u2014 spawn refused");
      let tt = Re.length === 0 ? void 0 : L(Re).sort();
      for (let je of tt ?? []) {
        let {
          toolName: Ct,
          ruleContent: Ye
        } = Jn(je);
        if (Ct !== Ue || Ye === void 0 || Ye === "" || Ye !== Ye.trim()) throw new P(`agent() opts.bashCommandClamp entry '${je}' must be a '${Ue}(<command or prefix>)' permission rule (tool name case-sensitive, non-empty content with no leading/trailing whitespace inside the parens); it parses to tool '${Ct}'` + (Ye === void 0 || Ye === "" ? " with no rule content" : Ye !== Ye.trim() ? " with whitespace-padded rule content" : "") + ". Refusing the spawn rather than running it with an inert clamp entry.", "agent() opts.bashCommandClamp inert entry \u2014 spawn refused");
      }
      if (promptStr !== void 0) promptStr.bashCommandClamp = tt;
    }
  } catch (te) {
    throw await Q(0), te;
  }
  let agentIndex = ++ge,
    promptString = normalizePrompt(prompt),
    optsNorm = promptStr?.label != null ? String(promptStr.label).replace(/\s+/g, " ").trim() : re(promptString, 60).replace(/\s+/g, " ").trim(),
    ke = promptStr?.phase != null ? String(promptStr.phase) : Nt,
    Ve = ke != null ? Wt(ke) : void 0,
    ut = promptStr?.stallMs != null ? Number(promptStr.stallMs) : Kr,
    He = Mt(promptString),
    Ee,
    De;
  if (F && !isOptsObj) {
    Ee = makeCacheKey(promptString, promptStr, S), S = Ee;
    let te = T ? void 0 : R?.results.get(Ee);
    if (te !== void 0) {
      if (te.foreignArtifactContent) Z = !0;
      return s({
        type: "progress",
        toolUseID: `workflow_agent_${agentIndex}_cached`,
        data: {
          type: "workflow_agent",
          index: agentIndex,
          label: optsNorm,
          phaseIndex: Ve,
          phaseTitle: ke,
          agentId: te.agentId,
          model: xe(promptStr?.model),
          state: "done",
          startedAt: Date.now(),
          lastProgressAt: Date.now(),
          cached: !0,
          resultPreview: Mt(te.result),
          promptPreview: He
        }
      }), h(te.result);
    }
    let Re = R?.started.get(Ee);
    if (!(!T && Re !== void 0 && Re.length > 0 && !R?.failed.has(Ee))) T = !0;
    if (Re && Re.length > 0) i("tengu_workflow_journal_started_hit_respawn", {
      attempts: Re.length
    });
  }
  let $t = !1,
    Ie = te => {
      if ($t = !0, De = te, !F || Ee === void 0) return;
      F.append({
        type: "started",
        key: Ee,
        agentId: te,
        ...Po(optsNorm, ke)
      }).catch(Re => t(`workflow journal started-append failed: ${Re}`, {
        level: "warn"
      }));
    },
    Ke = async () => {
      if (!F || !Ee || D.abortController?.signal.aborted || signalB?.aborted) return;
      await F.append({
        type: "failed",
        key: Ee,
        agentId: De ?? ""
      }).catch(te => t(`workflow journal failed-append failed: ${te}`, {
        level: "warn"
      }));
    },
    Et = async te => {
      if (te === null) await Ke();
      if (F && Ee && te !== null) await F.append({
        type: "result",
        key: Ee,
        agentId: De ?? "",
        result: te,
        ...(Z && {
          foreignArtifactContent: !0
        })
      }).catch(Re => t(`workflow journal result-append failed: ${Re}`, {
        level: "warn"
      }));
      return te;
    },
    mt = Date.now(),
    At = () => s({
      type: "progress",
      toolUseID: `workflow_agent_${agentIndex}_queued`,
      data: {
        type: "workflow_agent",
        index: agentIndex,
        label: optsNorm,
        phaseIndex: Ve,
        phaseTitle: ke,
        agentType: promptStr?.agentType != null ? String(promptStr.agentType) : void 0,
        isolation: promptStr?.isolation === "worktree" || promptStr?.isolation === "remote" ? promptStr.isolation : void 0,
        model: xe(promptStr?.model),
        state: "start",
        queuedAt: mt,
        promptPreview: He,
        lastProgressAt: mt
      }
    });
  if (promptStr?.isolation === "remote") throw Error("agent({isolation:'remote'}) is not available in this build");
  At();
  try {
    return await Et(await throttledSpawn(agentIndex, promptString, optsNorm, ke, Ve, ut, promptStr, Ie, mt, agentContext, signalA));
  } catch (te) {
    if (!$t && !D.abortController?.signal.aborted) s({
      type: "progress",
      toolUseID: `workflow_agent_${agentIndex}_queued`,
      data: {
        type: "workflow_agent",
        index: agentIndex,
        label: optsNorm,
        phaseIndex: Ve,
        phaseTitle: ke,
        model: xe(promptStr?.model),
        state: "error",
        error: te instanceof Error ? te.message : String(te),
        queuedAt: mt,
        promptPreview: He,
        lastProgressAt: Date.now()
      }
    });
    if (await Ke(), D.abortController?.signal.aborted) return new Promise(() => {});
    throw te;
  }
})
