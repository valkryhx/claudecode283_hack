/* ==========================================================================
 * m0869.Oo  ->  makeEngineHooks   [m0869_0xd12567a.js @ 39021]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function makeEngineHooks(e, r, s, g, f, w, A, F, R, ce, W, H, z) {
  let agentCount = 0,
    settle = async M => ({
      v: await M
    }),
    call = (M, ...U) => M(...U),
    clone = M => vmSerialize(M),
    sanitize = M => M,
    snapshot = M => M,
    getProp = (M, U) => {
      try {
        return M === null || M === void 0 ? void 0 : M[U];
      } catch {
        return;
      }
    },
    currentPhase = "",
    phaseReserved = !1,
    capWarned = !1,
    budgetWarned = !1,
    failures = [],
    foreignArtifact = !1,
    foreignNotice = M => foreignArtifact && !M.includes(ARTIFACT_MARKER) ? `

${artifactWarning(!0).trimEnd()}` : "",
    seenSet = new WeakSet();
  function recordFailure(M, {
    log: U
  }) {
    let ee = toErrorInfo(M);
    if (failures.push(ee), U) s({
      type: "progress",
      toolUseID: "workflow_log",
      data: {
        type: "workflow_log",
        message: ee
      }
    });
  }
  let lt = new Pn({
      signal: e.abortController?.signal,
      log: M => s({
        type: "progress",
        toolUseID: "workflow_log",
        data: {
          type: "workflow_log",
          message: M
        }
      }),
      onChange: M => z?.(M),
      storageV5: e.storageV5
    }),
    vt = Ms(1, sDe),
    yt;
  function fe() {
    return yt ??= (async () => {
      let M = oe(),
        U = await Xl(M);
      if (U === "HEAD") return;
      if (await HBt(U, M)) return U;
      s({
        type: "progress",
        toolUseID: "workflow_log",
        data: {
          type: "workflow_log",
          message: `local branch '${U}' is not pushed to origin; remote agents will run against the repository's default branch.`
        }
      });
      return;
    })(), yt;
  }
  let it = new Set();
  function We(M) {
    return (U, ee) => {
      let Oe = `${M}\x00${U}\x00${ee}`;
      if (it.has(Oe)) return;
      it.add(Oe), s({
        type: "progress",
        toolUseID: "workflow_log",
        data: {
          type: "workflow_log",
          message: `[${M}] ${Xy(U, ee)}`
        }
      });
    };
  }
  function et() {
    if (agentCount < xo) return;
    if (!capWarned) capWarned = !0, i("tengu_workflow_agent_cap_exceeded", {
      agentCount: agentCount
    });
    throw new Mo();
  }
  function ct() {
    if (A?.total == null || A.total <= 0) return;
    let M = A.getTurnSpent();
    if (M < A.total) return;
    if (!budgetWarned) budgetWarned = !0, i("tengu_workflow_budget_cap_exceeded", {
      spent: M,
      budget: A.total,
      agentCount: agentCount
    });
    throw new Wo(M, A.total);
  }
  let Ft = 0,
    Nt,
    ye = new Map(),
    D = {
      ...e,
      options: {
        ...e.options,
        mainLoopModel: $2n(e.options)
      },
      isBackgroundAgent: !0,
      setAppState: () => {},
      setToolPermissionContext: () => {},
      setSessionToolPermissionContext: e.setSessionToolPermissionContext
    };
  function xe(M) {
    if (M) return M;
    let U = Uoe();
    return U !== "inherit" ? U : D.options.mainLoopModel;
  }
  function bt(M, U) {
    let ee = toErrorInfo(M),
      Oe = ye.get(ee);
    if (Oe == null) Oe = {
      index: ++Ft,
      kind: U,
      announced: !1,
      title: ee
    }, ye.set(ee, Oe);
    return Oe;
  }
  function dn(M, U) {
    return bt(M, U).index;
  }
  function Wt(M) {
    let U = bt(M);
    if (!U.announced) U.announced = !0, s({
      type: "progress",
      toolUseID: `workflow_phase_${U.index}`,
      data: {
        type: "workflow_phase",
        index: U.index,
        title: U.title,
        kind: U.kind
      }
    });
    return U.index;
  }
  for (let M of w ?? []) Wt(M);
  let qt = xt(M => {
      Nt = pFe(M), Wt(Nt);
    }),
    Ot = a.CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS ?? Fr;
  if (a.CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS !== void 0) t(`workflow: concurrent agent gate = ${Ot} (CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS)`);
  let No = Ms(Ot, Bo),
    Uo = Ms(Nr, Ho);
  async function Mn({
    idx: M,
    promptStr: U,
    label: ee,
    ownPhaseTitle: Oe,
    ownPhaseIndex: Qe,
    opts: pe,
    queuedAt: ve,
    provenanceOn: Fe
  }) {
    let Xe = me(D);
    if (Xe.mode !== "auto") return !1;
    let Me, K;
    if (pe?.schema != null) {
      let Ve = [],
        ut = new Set(),
        He = vPr,
        Ee = 0;
      try {
        let De = JSON.stringify(pe.schema, function ($t, Ie) {
          if (--He < 0) throw Error("output schema expansion exceeds the node budget");
          let Ke = typeof Ie === "bigint" ? Ie.toString() : Ie;
          if (Ee += $t.length + (typeof Ke === "string" ? Ke.length : 0), Ee > jRn) throw Error("output schema too large to classify");
          if (Ke !== null && typeof Ke === "object") {
            while (Ve.length > 0 && Ve.at(-1) !== this) ut.delete(Ve.pop());
            if (ut.has(Ke)) return "[Circular]";
            Ve.push(Ke), ut.add(Ke);
          }
          return Ke;
        });
        if (De !== void 0 && De.length > jRn) throw Ee = De.length, Error("output schema too large to classify");
        Me = De || void 0;
      } catch {
        K = Ee > jRn ? "output schema too large for the safety classifier" : "output schema could not be serialized for the safety classifier";
      }
    }
    let Ge = jlr(Me);
    if (Fe && !Ge && K === void 0) return !1;
    let Be = Ve => (i("tengu_auto_mode_decision", {
        decision: c("blocked"),
        toolName: c(xm),
        inProtectedNamespace: tP(),
        ...uVe(e),
        isHandoff: !1
      }), {
        reason: Ve,
        unreviewed: !0
      }),
      Le = K ? Be(K) : await nro({
        prompt: U,
        schemaJson: Me,
        agentType: pe?.agentType != null ? String(pe.agentType) : void 0,
        parentMessages: e.messages,
        parentTools: e.options.tools,
        rootToolSurface: e.rootToolSurface,
        toolPermissionContext: Xe,
        abortSignal: D.abortController.signal,
        dispatchAgentId: e.agentId,
        storageV5: e.storageV5,
        credentials: e.credentials
      }).catch(Ve => {
        if (!D.abortController?.signal.aborted) d(Ve);
        if (!Ge || D.abortController?.signal.aborted) return null;
        return Be("classifier error; output schema too large to pass unreviewed");
      });
    if (D.abortController?.signal.aborted) throw Error("Workflow aborted");
    if (!Le) return !1;
    let ke = Le.unreviewed ? `[${ee}] blocked: ${Le.reason}` : `[${ee}] blocked by safety classifier: ${Le.reason}`;
    return recordFailure(ke, {
      log: !1
    }), s({
      type: "progress",
      toolUseID: `workflow_agent_${M}_blocked`,
      data: {
        type: "workflow_agent",
        index: M,
        label: ee,
        phaseIndex: Qe,
        phaseTitle: Oe,
        agentType: pe?.agentType != null ? String(pe.agentType) : void 0,
        isolation: pe?.isolation === "worktree" || pe?.isolation === "remote" ? pe.isolation : void 0,
        model: xe(pe?.model),
        state: "error",
        blocked: !0,
        error: ke,
        queuedAt: ve,
        promptPreview: Mt(U),
        lastProgressAt: Date.now()
      }
    }), !0;
  }
  let Wn = new WeakMap(),
    jo = xt(async (M, U, ee, Oe, Qe) => {
      let pe = e.agentContext,
        ve = ee instanceof AbortSignal ? ee : void 0,
        Fe = Qe instanceof AbortSignal ? Qe : void 0,
        Xe = Oe instanceof SSt,
        Me;
      if (U !== null && typeof U === "object" && !Ir.isProxy(U)) {
        let te = Object.getOwnPropertyDescriptor(U, "schema"),
          Re = te && "value" in te ? te.value : void 0;
        if (Re !== null && typeof Re === "object") Me = Re;
      }
      let K = cdn(sanitize(U));
      if (K && Me !== void 0) {
        let te = Wn.get(Me);
        if (te === void 0) te = cdn(sanitize(Me)), Wn.set(Me, te);
        K.schema = te;
      }
      if (K?.model !== void 0 && a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE) t(`Workflow agent model "${K.model}" ignored: CLAUDE_CODE_SUBAGENT_MODEL_FORCE is set`), K.model = void 0;
      if (D.abortController?.signal.aborted) return new Promise(() => {});
      try {
        et(), ct();
        let te = K?.disallowedTools;
        if (te !== void 0) {
          if (!Array.isArray(te) || te.some(tt => typeof tt !== "string" || tt === "" || tt !== tt.trim())) throw new P("agent() opts.disallowedTools must be an array of non-empty tool-name strings (e.g. ['Bash', 'Write']); got " + (Array.isArray(te) ? "an array with non-string, empty, or whitespace-padded entries" : typeof te) + ". Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools malformed \u2014 spawn refused");
          if (K !== void 0) K.disallowedTools = te.length === 0 ? void 0 : L(te).sort();
        }
        let Re = K?.bashCommandClamp;
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
          if (K !== void 0) K.bashCommandClamp = tt;
        }
      } catch (te) {
        throw await Q(0), te;
      }
      let Ge = ++agentCount,
        Be = pFe(M),
        Le = K?.label != null ? String(K.label).replace(/\s+/g, " ").trim() : re(Be, 60).replace(/\s+/g, " ").trim(),
        ke = K?.phase != null ? String(K.phase) : Nt,
        Ve = ke != null ? Wt(ke) : void 0,
        ut = K?.stallMs != null ? Number(K.stallMs) : Kr,
        He = Mt(Be),
        Ee,
        De;
      if (F && !Xe) {
        Ee = lo(Be, K, currentPhase), currentPhase = Ee;
        let te = phaseReserved ? void 0 : R?.results.get(Ee);
        if (te !== void 0) {
          if (te.foreignArtifactContent) foreignArtifact = !0;
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
          }), clone(te.result);
        }
        let Re = R?.started.get(Ee);
        if (!(!phaseReserved && Re !== void 0 && Re.length > 0 && !R?.failed.has(Ee))) phaseReserved = !0;
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
            ...Po(Le, ke)
          }).catch(Re => t(`workflow journal started-append failed: ${Re}`, {
            level: "warn"
          }));
        },
        Ke = async () => {
          if (!F || !Ee || D.abortController?.signal.aborted || Fe?.aborted) return;
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
            ...(foreignArtifact && {
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
        return await Et(await No(Ge, Be, Le, ke, Ve, ut, K, Ie, mt, pe, ve));
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
        throw te;
      }
    });
  async function Bo(M, U, ee, Oe, Qe, pe, ve, Fe, Xe, Me, K) {
    if (await lt.whenClear(), D.abortController?.signal.aborted) throw Error("Workflow aborted");
    if (K?.aborted) return null;
    let Ge = Po(ee, Oe);
    ct();
    let Be = ssr();
    if (await Mn({
      idx: M,
      promptStr: U,
      label: ee,
      ownPhaseTitle: Oe,
      ownPhaseIndex: Qe,
      opts: ve,
      queuedAt: Xe,
      provenanceOn: Be
    })) return null;
    let Le;
    if (ve?.agentType != null) {
      let E = String(ve.agentType),
        be = D.options.agentDefinitions.activeAgents,
        de = me(D),
        ue = await GDn(be, de, ht),
        V = ue.find(we => we.agentType === E);
      if (!V) {
        let we = be.find(st => st.agentType === E),
          qe = we ? bX(de, ht, E) : null;
        if (qe) throw Error(`agent({agentType}): '${E}' is denied by permission rule '${ht}(${E})' from ${qe.source}.`);
        if (we && HMe(we, de)) throw new P(`agent({agentType}): ${FMe(E)}`, "workflow agent(): agent type unavailable, tool pool denied");
        throw Error(`agent({agentType}): agent type '${E}' not found. Available agents: ${ue.map(st => st.agentType).join(", ")}`);
      }
      let $e = [...(V.disallowedTools ?? []), ...(xn.disallowedTools ?? [])],
        ae = ve.schema ? Vr : Br,
        Pe = ve.schema && !uZ(V.tools) ? [...(V.tools ?? []), bi] : V.tools;
      Le = Ja(V) ? {
        ...V,
        disallowedTools: $e,
        tools: Pe,
        getSystemPrompt: we => V.getSystemPrompt(we) + ae
      } : {
        ...V,
        disallowedTools: $e,
        tools: Pe,
        getSystemPrompt: we => V.getSystemPrompt(we) + ae
      };
    }
    let ke;
    if (ve?.schema) {
      let E = r3e(ve.schema);
      if ("error" in E || E.unsatisfiable) await Q(0);
      if ("error" in E) throw new P(`agent({schema}) received an invalid JSON Schema: ${E.error}`, "Workflow agent({schema}) invalid JSON Schema");
      if (E.unsatisfiable) {
        let be = `agent({schema}) received an unusable JSON Schema \u2014 ${n3e(E.unsatisfiable)}`,
          {
            message: de
          } = E.unsatisfiable;
        if (x("tengu_workflow_schema_lint_enforce", !0)) throw new P(`${be}: ${de}. The subagent was not started \u2014 fix the schema and call agent() again.`, "Workflow agent({schema}) unsatisfiable JSON Schema");
        if (!seenSet.has(E)) seenSet.add(E), s({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[${ee}] warning: ${be}: ${de}`
          }
        });
      }
      ke = E.tool;
    }
    let Ve = Le ?? (ke ? Hr : xn),
      ut = iN(ve?.effort),
      He = ut !== void 0 ? {
        ...Ve,
        effort: ut
      } : Ve,
      Ee = ve?.disallowedTools,
      De = ve?.bashCommandClamp,
      Ie = Ee !== void 0 && Ee.length > 0 || De !== void 0 && De.length > 0 ? {
        ...He,
        disallowedTools: [...(He.disallowedTools ?? []), ...(Ee ?? []), il, ...(De !== void 0 && De.length > 0 ? ["mcp__*", St] : [])]
      } : He;
    await ANe(() => D.getAppState().mcp);
    let Ke = D.getAppState(),
      Et = me(D),
      mt = D.options.tools.filter(w_),
      At = {
        ...Et,
        mode: Ie.permissionMode ?? "acceptEdits"
      },
      te = D.options.toolCatalog.assembleToolPool(At, Y9(Ke.mcp.tools.concat(mt)), {
        skipReplFilter: !0,
        skillTools: Ke.skillTools,
        machineMcpTools: ype(D)
      }),
      Re = E => ST(Ie, E, !1, !1, !1, Sd(Me) + 1, PO(D).mode),
      tt = E => {
        let be = az([OO, MO, ...asn([MO.name, OO.name])], At).filter(de => !E.some(ue => zt(ue, de.name)));
        return be.length > 0 ? [...E, ...be] : E;
      },
      je = te;
    if (Ee !== void 0 && Ee.length > 0) {
      if (uw() && !Re(je).resolvedTools.some(de => zt(de, Ue))) je = tt(je);
      let E = p6t(Ie.mcpServers),
        be = de => {
          if (de.length === 0) return;
          let ue = `mcp__${de}`,
            V = Ulr(ue, je, E);
          if (V === null) return;
          switch (V.kind) {
            case "pool-server":
            case "declared-server":
              return ue;
            case "slip":
              return V.correctedSpelling;
            case "unmatched":
              return;
          }
        };
      for (let de of Ee) {
        let ue = AOe([de]);
        if (je.some(we => ue.isToolDisallowed(we))) continue;
        let {
          toolName: V
        } = Jn(de);
        if (V !== V.trim() || /[\s()]/.test(V.trim())) throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}' parses to tool name '${V}', which can never match a tool \u2014 check ` + "for a space before the rule parens or an unbalanced paren. Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools unparseable entry \u2014 spawn refused");
        {
          let we = /^mcp__/i.test(V) ? Us(`mcp__${V.slice(5)}`) : null;
          if (/^mcp__/i.test(V) && we === null) throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}' cannot match ` + "any tool \u2014 its server segment is empty, so it names no " + "server. Use 'mcp__<server>' to deny one server's tools ('mcp__<server>__<tool>' for one tool), or 'mcp__*' to deny every MCP server's tools. Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools empty mcp server segment \u2014 spawn refused");
          if (we !== null && we.serverName.includes("*") && we.serverName !== "*") {
            let qe = be(we.serverName.replace(/\*+/g, ""));
            throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}' cannot match ` + "any tool \u2014 server names take no wildcard. Use " + (qe !== void 0 ? `'${qe}' for that server's tools, or ` : "") + "'mcp__*' for every MCP server's tools. Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools wildcard mcp server \u2014 spawn refused");
          }
          if (we !== null && we.toolName !== void 0 && we.toolName !== "*" && we.toolName.includes("*")) {
            let qe = be(we.serverName);
            throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}' cannot match ` + "any tool \u2014 tool names take no wildcard. " + (qe !== void 0 ? `Use '${qe}' to deny all of that server's tools, or enumerate exact tool names. ` : "Enumerate exact tool names, or use 'mcp__*' to deny every MCP server's tools. ") + "Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools wildcard mcp tool \u2014 spawn refused");
          }
        }
        if (V.includes("*") && Us(V) === null && !/^mcp__/i.test(V)) throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}' cannot match ` + "any tool \u2014 '*' is not a deny wildcard outside mcp__ server " + "specs. " + (V.toLowerCase().startsWith("skill__") ? `Use '${co}' to deny every skill tool. ` : "Enumerate the tools to deny (e.g. ['Bash', 'Write']), or use 'mcp__*' to deny every MCP server's tools. ") + "Refusing the spawn rather than running it un-narrowed.", "agent() opts.disallowedTools wildcard-bearing entry \u2014 spawn refused");
        if (V === co) continue;
        if (ke !== void 0 && V === bi) continue;
        let $e = V.toLowerCase(),
          ae = je.flatMap(we => [we.name, Ug(we)]).find(we => we.toLowerCase() === $e) ?? ($e === co.toLowerCase() ? co : void 0) ?? (ke !== void 0 && $e === bi.toLowerCase() ? bi : void 0),
          Pe = Ulr(V, je, E);
        if (Pe?.kind === "declared-server") {
          let we = Us(V);
          if (!(!Pe.verifiable && ae !== void 0 && Us(ae)?.serverName === we?.serverName)) {
            t(`workflow agent(): disallowedTools mcp entry '${V}' covers this agent's declared frontmatter MCP server '${Pe.declaredSpelling}' \u2014 those tools connect at ` + "spawn, after this check, and the deny is applied to them then" + (Pe.verifiable ? "" : " (a full tool-name entry cannot be verified here)"));
            continue;
          }
        }
        if (ae !== void 0) throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}'` + (V !== de ? ` (parsed tool name '${V}')` : "") + ` does not match any tool, but '${ae}' exists \u2014 ` + "tool names are case-sensitive. Refusing the spawn rather than running it with this deny silently dropped.", "agent() opts.disallowedTools case-mismatched entry \u2014 spawn refused");
        if (Pe !== null) {
          if (Pe.kind === "pool-server") continue;
          if (Pe.kind === "slip") throw await Q(0), new P(`agent() opts.disallowedTools entry '${de}'` + (V !== de ? ` (parsed tool name '${V}')` : "") + ` cannot match as written, but '${Pe.correctedSpelling}' would \u2014 deny entries ` + "must match the normalized server spelling exactly, mcp__ prefix and case included. Refusing the spawn rather than running it with this deny silently dropped.", "agent() opts.disallowedTools mismatched mcp entry \u2014 spawn refused");
          t(`workflow agent(): disallowedTools mcp entry '${V}' ` + "matches no tool in this session's pool \u2014 the deny is a " + "no-op here");
          continue;
        }
        t(`workflow agent(): disallowedTools entry '${V}' matches no ` + "tool in this session's pool \u2014 the deny is a no-op here");
      }
    }
    if (ke !== void 0 && AOe(Ie.disallowedTools).isToolDisallowed(ke)) throw await Q(0), new P(`agent() schema mode needs the ${bi} tool, ` + "but the spawn's merged disallowedTools deny it \u2014 refusing the " + "spawn instead of running an agent that cannot return its structured output.", "agent() schema mode with StructuredOutput denied \u2014 spawn refused");
    if (De !== void 0 && De.length > 0 && uw()) je = tt(je);
    if (De !== void 0 && De.length > 0) {
      let E = me(D).toolAliases,
        be = D.options.toolAliases,
        de = [Ue, yl, St].find(ue => E?.[ue] !== void 0 || be?.[ue] !== void 0);
      if (de !== void 0) throw await Q(0), new P(`agent() opts.bashCommandClamp cannot bind in this session: the host remaps ${de} via toolAliases, so exec ` + "dispatch runs the alias target's permission path instead \u2014 " + "the clamp cannot be guaranteed to apply on that surface. Refusing the spawn rather than running it un-clamped.", "agent() bashCommandClamp under a shell toolAlias \u2014 spawn refused");
    }
    if (De !== void 0 && De.length > 0 && !Re(je).resolvedTools.some(E => zt(E, Ue))) throw await Q(0), new P(`agent() opts.bashCommandClamp can bind nothing: the spawned agent's resolved tool pool has no ${Ue} (removed by this spawn's disallowedTools, the agent definition's denies, or absent from the session pool). A clamp on a Bash-less agent ` + "means the commands it was meant to keep are unavailable \u2014 " + "refusing the spawn rather than running a blind agent. Drop the clamp or the Bash deny.", "agent() bashCommandClamp with no Bash in resolved pool \u2014 spawn refused");
    let Ct = je,
      Ye = ke ? [...Ct.filter(E => !zt(E, bi)), ke] : Ct,
      Ut = uL(jse(Ie, D.options.mainLoopModel), D.options.mainLoopModel, ve?.model, Et.mode),
      nt = Et.mode === "auto",
      Je = null;
    if (ve?.isolation === "worktree" && nv(Ie)) t("[web-fetch agent] isolation:'worktree' ignored; the built-in web-fetch agent always runs as a local agent");else if (ve?.isolation === "worktree") {
      let E = g ? `${g}-${M}` : `wf-${M}`;
      Je = await vt(E, {
        storageV5: D.storageV5,
        credentials: D.credentials
      });
    }
    let fn = Je?.worktreePath,
      cn = Be ? isr(e.messages, e.agentId) : null,
      mn = cn?.kind === "relay" ? csr(cn) : null,
      On = `${!Be ? U : cn?.kind === "automated" ? lsr(U) : kTn(U)}${foreignNotice(U)}`,
      Xt = Je ? `${On}

---
You are running in an isolated git worktree at \`${asr(Je.worktreePath)}\` (a separate working copy of the repo). Changes you make here do NOT affect the main working directory (\`${asr(oe())}\`) or other agents. Work normally \u2014 the worktree will be cleaned up automatically if you made no changes, or preserved for review if you did.` : On,
      dt = 0,
      ot = 0,
      gt = 0,
      $n = Date.now(),
      In = Mt(U),
      Yo = [Ut ?? "", String(Ie.effort ?? Gf(D) ?? ""), Ie.agentType, Ye.map(E => E.name).join(","), ve?.schema ? b(ve.schema) : "", fn ?? oe()].join(`
`),
      gn;
    async function qo(E, be, de, ue, V) {
      let $e = Vm();
      Fe($e);
      let ae = {
          agentId: $e,
          parentAgentId: of(Me) ? void 0 : Me?.agentId,
          depth: Sd(Me) + 1,
          parentSessionId: Vk(),
          agentType: "subagent",
          subagentName: Ie.agentType,
          workflowRunId: g,
          workflowName: ce,
          isAsync: !1,
          isBuiltIn: Ja(Ie),
          isBackgroundAgent: !0,
          invokingRequestId: W,
          invocationKind: "spawn",
          invocationEmitted: !1,
          parentPromptId: H
        },
        Pe = `workflow_agent_${M}_${$e}`,
        we,
        qe,
        st,
        en = Ut ? Ln(Ut) : void 0,
        Rt = (le, ze) => s({
          type: "progress",
          toolUseID: Pe,
          data: {
            type: "workflow_agent",
            index: M,
            label: de,
            phaseIndex: Qe,
            phaseTitle: Oe,
            agentId: $e,
            agentType: Le?.agentType,
            isolation: Je ? "worktree" : void 0,
            model: Ut,
            fallbackModel: st,
            state: le,
            startedAt: $n,
            queuedAt: Xe,
            attempt: ue,
            lastAttemptReason: V === "rate_limited" ? "throttled" : V,
            lastToolName: we,
            lastToolSummary: qe,
            promptPreview: In,
            promptFramed: Be,
            lastProgressAt: Date.now(),
            ...ze
          }
        }),
        Tt = new AbortController(),
        hn = D.abortController?.signal,
        Nn = () => Tt.abort(new DOMException("workflow-abort", "AbortError"));
      if (hn?.addEventListener("abort", Nn), hn?.aborted) Tt.abort(new DOMException("workflow-abort", "AbortError"));
      let kn = () => Tt.abort(new DOMException("user-skip", "AbortError"));
      if (K?.addEventListener("abort", kn), K?.aborted) kn();
      let jt,
        Un = 0,
        Xo = Math.min(pe * 0.1, 1000),
        yn = () => {
          if (clearTimeout(jt), pe > 0) jt = setTimeout(le => le.abort(new DOMException("stalled", "AbortError")), pe, Tt);
        },
        Jt = new Set(),
        Qo = BKt(),
        jn = () => {
          if (Jt.size === 0 && jt === void 0) yn();
        },
        Bn = () => {
          if (Jt.size > 0) return;
          let le = Date.now();
          if (le - Un < Xo) return;
          Un = le, yn();
        },
        Sn = {
          ...D,
          abortController: Tt,
          ...(De !== void 0 && De.length > 0 && {
            permissionLayers: [...(D.permissionLayers ?? []), {
              kind: "bash_command_clamp",
              rules: De
            }]
          })
        };
      Rt("start", dt || ot ? {
        tokens: dt,
        toolCalls: ot
      } : void 0), yn();
      let Vn,
        It = nt ? [] : void 0,
        tn = le => {
          if (le) foreignArtifact = !0;
        };
      tn(be.includes(ARTIFACT_MARKER) || (mn?.includes(ARTIFACT_MARKER) ?? !1));
      let _t,
        wt = 0,
        at = 0,
        Dt = 0,
        Ht = 0,
        Bt,
        nn,
        Hn = new Set(),
        Kn = a.MAX_STRUCTURED_OUTPUT_RETRIES ?? UKt,
        Lt = Date.now(),
        on = nv(Ie) ? Pee() : void 0;
      try {
        f?.($e, Tt), await WE(ae, async () => {
          for await (let le of rk({
            agentDefinition: Ie,
            promptMessages: mn === null ? [Ce({
              content: be
            })] : [Ce({
              content: mn
            }), Ce({
              content: be
            })],
            toolUseContext: Sn,
            session: E,
            canUseTool: r,
            isAsync: !1,
            querySource: z5(Ie.agentType, Ja(Ie)),
            spawnedBySkill: D.options.spawnedBySkill ?? D.options.activeSkill,
            spawnedByForkedSkill: D.options.spawnedByForkedSkill,
            availableTools: Ye,
            requiresStructuredOutput: ke !== void 0,
            transcriptSubdir: g ? `workflows/${g}` : void 0,
            spawnedByWorkflowRunId: g,
            description: Ge.label,
            workflowPhase: Ge.phase,
            override: {
              agentId: $e,
              agentContext: ae
            },
            persistedToolResultFiles: on,
            model: ve?.model,
            onModelRestricted: We(ee),
            onQueryProgress: Bn,
            worktreePath: fn
          })) {
            if (le.type === "attachment" && le.attachment.type === "structured_output") {
              _t = le.attachment.data;
              continue;
            }
            if (le.type === "attachment") tn(D7t(le));
            if (le.type === "api_metrics") {
              if (le.event.type === "start") gn?.responded();
              continue;
            }
            if (le.type === "set_in_progress_tool_use_ids") {
              if (le.op.action === "remove") {
                for (let ze of le.op.ids) Jt.delete(ze);
                jn();
              }
              continue;
            }
            if (le.type === "user") {
              It?.push(le), tn(D7t(le));
              let ze = le.message.content;
              if (Array.isArray(ze)) {
                for (let Ze of ze) if (typeof Ze === "object" && Ze?.type === "tool_result") {
                  if (Jt.delete(Ze.tool_use_id), jKt(Qo, Ze.tool_use_id, le.isVirtual === !0, Ze.is_error === !0), Hn.delete(Ze.tool_use_id) && Ze.is_error) Ht++, nn = osr(Ze.content) ?? nn;
                }
                if (jn(), Ht > 0 && Ht >= Kn && _t === void 0) {
                  let Ze = nn === void 0 ? "" : ` \u2014 last StructuredOutput error: ${nn}`;
                  throw new P(`agent({schema}): StructuredOutput retry cap (${Kn}) exceeded \u2014 ` + `${Ht} failed ${I(Ht, "call")} with no valid output` + Ze, "Workflow agent({schema}) StructuredOutput retry cap exceeded");
                }
              }
              continue;
            }
            if (le.type === "assistant") {
              if (Vn = le, It?.push(le), tn(D7t(le)), !le.isApiErrorMessage) {
                gn?.responded();
                let kt = le.isUnmetered === !0 ? void 0 : R2(le.message.usage);
                if (kt) wt = eDn(kt);
                let qn = le.message.model;
                if (qn && en && sme(le, en)) st = qn;
              }
              let ze = 0,
                Ze = 0;
              for (let kt of le.message.content) {
                if (kt.type !== "tool_use") continue;
                if (ze++, Jt.add(kt.id), we = kt.name, qe = WKt(kt.input) || void 0, kt.name === bi) {
                  if (Dt++, Bt = kt.input, Hn.add(kt.id), _t !== void 0 && Dt > 2) {
                    Tt.abort("stalled");
                    break;
                  }
                }
              }
              if (at += ze - Ze, ze > 0) clearTimeout(jt), jt = void 0;else Bn();
              Rt("progress", {
                tokens: dt + wt,
                toolCalls: ot + at
              });
            }
          }
        });
      } catch (le) {
        let ze = Tt.signal.aborted ? Ci(Tt.signal.reason) : void 0;
        if (ze === "stalled" || ze === "user-retry") {
          if (ze === "stalled" && _t !== void 0) {
            let Ze = Date.now() - Lt;
            return Rt("done", {
              tokens: dt + wt,
              toolCalls: ot + at,
              durationMs: gt + Ze,
              resultPreview: Mt(_t)
            }), JSe($e, Sn), {
              structured: _t,
              text: "",
              agentMessages: It,
              tokens: wt,
              toolCalls: at,
              stalled: !1,
              skipped: !1,
              durationMs: Ze,
              stopReason: void 0,
              outputTokens: void 0,
              structuredOutputAttempts: Dt,
              lastStructuredOutputInput: Bt
            };
          }
          return Rt("error", {
            error: ze === "stalled" ? `stalled \u2014 no progress for ${pe}ms` : "retry requested by user",
            tokens: dt + wt,
            toolCalls: ot + at,
            durationMs: gt + (Date.now() - Lt)
          }), {
            structured: void 0,
            text: "",
            agentMessages: It,
            tokens: wt,
            toolCalls: at,
            stalled: !0,
            stalledReason: ze,
            skipped: !1,
            durationMs: Date.now() - Lt,
            stopReason: void 0,
            outputTokens: void 0,
            structuredOutputAttempts: Dt,
            lastStructuredOutputInput: Bt
          };
        }
        if (ze === "user-skip") return Rt("error", {
          error: "skipped by user",
          skipped: !0,
          tokens: dt + wt,
          toolCalls: ot + at,
          durationMs: gt + (Date.now() - Lt)
        }), {
          structured: void 0,
          text: "",
          agentMessages: It,
          tokens: wt,
          toolCalls: at,
          stalled: !1,
          skipped: !0,
          durationMs: Date.now() - Lt,
          stopReason: void 0,
          outputTokens: void 0,
          structuredOutputAttempts: Dt,
          lastStructuredOutputInput: Bt
        };
        throw Rt("error", {
          error: le instanceof Error ? le.message : String(le),
          tokens: dt + wt,
          toolCalls: ot + at,
          durationMs: gt + (Date.now() - Lt)
        }), le;
      } finally {
        clearTimeout(jt), hn?.removeEventListener("abort", Nn), K?.removeEventListener("abort", kn), f?.($e, null);
      }
      let ft = Vn,
        zn = ft ? eo(ft.message.content, `
`) : "",
        Pt;
      if (ft?.isApiErrorMessage) Pt = m6t(AR(zn, {
        prependMarker: !1
      }).sanitized);else if (Pt = AR(zn).sanitized, on) Pt = `${Pt}

${CRt(on)}`;
      let Tn = ft?.message.usage,
        Gn = Tn && typeof Tn.output_tokens === "number" ? Tn.output_tokens : void 0,
        rn = Date.now() - Lt,
        Zo = ft?.isUnmetered === !0 ? void 0 : ft?.message.usage,
        _n = wt || eDn(R2(Zo) ?? Mp),
        Yn = dt + _n;
      if (!xOe(ft)) JSe($e, Sn);
      if (ft?.isApiErrorMessage) {
        let le = Pt || "API error",
          ze = ft.error === "rate_limit" ? {
            kind: "rate_limit",
            text: le,
            quotaLimits: ft.quotaLimits
          } : {
            kind: "other",
            text: le
          };
        return Rt("error", {
          error: le,
          tokens: Yn,
          toolCalls: ot + at,
          durationMs: gt + rn
        }), {
          structured: _t,
          text: Pt,
          agentMessages: It,
          apiError: ze,
          tokens: _n,
          toolCalls: at,
          stalled: !1,
          skipped: !1,
          durationMs: rn,
          stopReason: ft.message.stop_reason,
          outputTokens: Gn,
          structuredOutputAttempts: Dt,
          lastStructuredOutputInput: Bt
        };
      }
      return Rt("done", {
        tokens: Yn,
        toolCalls: ot + at,
        durationMs: gt + rn,
        resultPreview: Mt(ke ? _t : Pt)
      }), {
        structured: _t,
        text: Pt,
        agentMessages: It,
        tokens: _n,
        toolCalls: at,
        stalled: !1,
        skipped: !1,
        durationMs: rn,
        stopReason: ft?.message.stop_reason,
        outputTokens: Gn,
        structuredOutputAttempts: Dt,
        lastStructuredOutputInput: Bt,
        webFetchSavedFiles: on
      };
    }
    let Dn = 0;
    function Qt(E, be, de, ue) {
      let V = D.session.withProject({
        cwd: fn
      });
      return v_e(vs(V).cwd, () => qo(V, E, be, de + Dn, ue));
    }
    let Zt;
    async function wn(E, be) {
      function de(V, $e) {
        s({
          type: "progress",
          toolUseID: `workflow_agent_${M}_queued`,
          data: {
            type: "workflow_agent",
            index: M,
            label: ee,
            phaseIndex: Qe,
            phaseTitle: Oe,
            agentType: Le?.agentType,
            isolation: Je ? "worktree" : void 0,
            model: Ut,
            queuedAt: Date.now(),
            tokens: dt + V.tokens,
            toolCalls: ot + V.toolCalls,
            promptPreview: In,
            promptFramed: Be,
            lastProgressAt: Date.now(),
            ...$e
          }
        });
      }
      let ue = E;
      while (ue.apiError?.kind === "rate_limit") {
        let V = ue.apiError.text,
          $e = lt.join(ue.apiError.quotaLimits);
        if ($e.outcome === "declined") return Zt = $e.failureNote, ue;
        if ($e.outcome === "aborted") throw Error("Workflow aborted");
        de(ue, {
          state: "start"
        });
        let ae = await $e.ended;
        if (ae === "aborted") throw Error("Workflow aborted");
        if (ae === "revoked") return Zt = "usage-limit wait turned off", de(ue, {
          state: "error",
          error: V,
          durationMs: gt + ue.durationMs
        }), ue;
        if (K?.aborted) return ue;
        dt += ue.tokens, ot += ue.toolCalls, gt += ue.durationMs, $n = Date.now(), Dn++, ue = await Fn(() => Qt(Xt, `${ee}${zKt}`, be, "rate_limited"));
      }
      return ue;
    }
    async function Fn(E) {
      let be = await So().enter(Yo, {
        capMs: To(),
        signal: D.abortController?.signal
      });
      if (gn = be, be.waitedMs > 0) t(`workflow agent [${ee}] held ${be.waitedMs}ms for a same-prefix sibling's first response (prompt-cache warm-up)`);
      try {
        return await E();
      } finally {
        be.done();
      }
    }
    try {
      let E = await Fn(() => Qt(Xt, ee, 1));
      E = await wn(E, 1);
      let be = ae => !ae.stalled && !ae.skipped && ae.stopReason == null && ae.structured === void 0 && (ae.outputTokens ?? 1 / 0) < 50 && ae.durationMs > pe * 0.5,
        de = be(E);
      if (de) {
        if (s({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[${ee}] throttled response (no stop_reason, ${E.outputTokens ?? "?"} output tokens in ${Math.round(E.durationMs / 1000)}s) \u2014 ` + "sleeping 45s before retry"
          }
        }), await Q(45000, D.abortController?.signal, {
          throwOnAbort: !0
        }), dt += E.tokens, ot += E.toolCalls, gt += E.durationMs, E = await wn(await Qt(Xt, `${ee} (throttle-retry)`, 2, "throttled"), 2), be(E)) s({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[${ee}] throttle-retry also degraded \u2014 ` + "giving up on throttle backoff"
          }
        });
      }
      let ue = [];
      for (let ae = 1; E.stalled && !de && ae <= Ro; ae++) {
        if (D.abortController?.signal.aborted) throw Error("Workflow aborted");
        let Pe = E.stalledReason ?? "stalled";
        ue.push(Pe);
        let we = Pe === "user-retry" ? "retry requested by user" : "stalled (no progress)",
          qe = "";
        if (Pe === "stalled" && E.structuredOutputAttempts > 0 && E.structured === void 0) {
          let st = b(E.lastStructuredOutputInput),
            en = st.length > 300 ? re(st, 300) + "\u2026" : st;
          qe = ` \u2014 ${E.structuredOutputAttempts} StructuredOutput validation ${I(E.structuredOutputAttempts, "failure")} (last input: ${en})`;
        }
        s({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[stall] agent "${ee}" ${we} after ${Math.round(E.durationMs / 1000)}s${qe} \u2014 retrying (${ae}/${Ro})`
          }
        }), dt += E.tokens, ot += E.toolCalls, gt += E.durationMs, E = await wn(await Qt(Xt, `${ee} (retry ${ae})`, ae + 1, Pe), ae + 1);
      }
      if (E.skipped) return null;
      if (E.stalled) {
        ue.push(E.stalledReason ?? "stalled");
        let ae = ue.length,
          Pe = ue.every(st => st === "user-retry"),
          we = ue.every(st => st === "stalled"),
          qe = E.stalledReason !== "user-retry" && E.structuredOutputAttempts > 0 && E.structured === void 0 ? ` \u2014 ${E.structuredOutputAttempts} StructuredOutput validation ${I(E.structuredOutputAttempts, "failure")} on the last attempt` : "";
        throw Error(Pe ? `agent abandoned: user requested retry on all ${ae} attempts` : we ? `agent stalled on all ${ae} attempts (no progress for ${pe}ms each)${qe}` : `agent abandoned after ${ae} attempts (${ue.join(" \u2192 ")})${qe}`);
      }
      if (E.apiError) {
        let ae = Zt === void 0 || E.apiError.kind !== "rate_limit" ? `[${ee}] failed: ${E.apiError.text}` : `[${ee}] failed: ${Zt}: ${E.apiError.text}`;
        return recordFailure(ae, {
          log: !0
        }), null;
      }
      let V = ke && E.structured !== void 0 ? CRo(E.structured, {
          reservedKeys: ["webFetchSavedFiles"]
        }) : void 0,
        $e = me(D);
      if ($e.mode === "auto") {
        let ae = await hZe({
          agentMessages: E.agentMessages ?? [],
          tools: Ye,
          rootToolSurface: e.rootToolSurface,
          toolPermissionContext: $e,
          abortSignal: D.abortController.signal,
          agentType: vre(Ie),
          totalToolUseCount: ot + E.toolCalls,
          finalResultText: ke ? V !== void 0 ? b(V.value) : void 0 : E.text,
          agentId: D.agentId,
          storageV5: D.storageV5,
          credentials: D.credentials
        }).catch(Pe => {
          if (D.abortController.signal.aborted) return null;
          return d(Pe), {
            warning: xZ(""),
            kind: "unavailable"
          };
        });
        if (ae) {
          if (ke) {
            let Pe = `[${ee}] ${ae.warning}`;
            recordFailure(Pe, {
              log: !0
            });
          } else if (E.text = `${ae.warning}

${E.text}`, ae.kind !== "unavailable") {
            let Pe = `[${ee}] ${ae.warning}`;
            recordFailure(Pe, {
              log: !0
            });
          }
        }
      }
      if (ke) {
        if (V === void 0) throw Error("agent({schema}): subagent completed without calling StructuredOutput (after in-conversation nudge)");
        let ae = V.value;
        if (V.droppedReservedKeys > 0) s({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[${ee}] Dropped a "webFetchSavedFiles" key the agent put in its structured output \u2014 that key is reserved for the harness's own record of files ${Dr} saved, and the agent cannot supply it.`
          }
        });
        if (V.reportable.length > 0) s({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: `[${ee}] ${LWn(V.reportable)} (Matched in the string values or key names of the agent's structured output; neutralized there in place.)`
          }
        });
        if (E.webFetchSavedFiles) {
          let Pe = G(ae);
          if (s({
            type: "progress",
            toolUseID: "workflow_log",
            data: {
              type: "workflow_log",
              message: `[${ee}] ${CRt(E.webFetchSavedFiles)}${Pe ? "" : " (The agent's structured result is not an object, so this record is not attached to it as webFetchSavedFiles \u2014 this log line is its only carrier.)"}`
            }
          }), Pe) return clone({
            ...ae,
            webFetchSavedFiles: {
              dirs: [...E.webFetchSavedFiles.dirs],
              paths: [...E.webFetchSavedFiles.paths]
            }
          });
        }
        return clone(ae);
      }
      return E.text;
    } finally {
      if (Je) {
        let {
          worktreePath: E,
          worktreeBranch: be,
          headCommit: de,
          gitRoot: ue,
          hookBased: V
        } = Je;
        try {
          if (!V && de && !(await UAt(E, de))) await j8(E, be, ue, !1, "workflow_tool");else if (ue) await n3(E, ue);
        } catch {}
      }
    }
  }
  function Jo(M) {
    if (M === "bubble") return;
    if (M === "bypassPermissions") return "auto";
    return M;
  }
  async function Ho(M, U, ee, Oe, Qe, pe, ve) {
    let Fe = D.abortController?.signal;
    if (Fe?.aborted) throw Error("Workflow aborted");
    ct();
    let Xe = ssr();
    if (await Mn({
      idx: M,
      promptStr: U,
      label: ee,
      ownPhaseTitle: Oe,
      ownPhaseIndex: Qe,
      opts: pe,
      queuedAt: ve,
      provenanceOn: Xe
    })) return null;
    let Me = Vm(),
      K = Date.now(),
      Ge = Mt(U),
      Be,
      Le = (He, Ee) => s({
        type: "progress",
        toolUseID: `workflow_agent_${M}_${Me}`,
        data: {
          type: "workflow_agent",
          index: M,
          label: ee,
          phaseIndex: Qe,
          phaseTitle: Oe,
          agentId: Me,
          isolation: "remote",
          remoteSessionId: Be,
          state: He,
          startedAt: K,
          queuedAt: ve,
          promptPreview: Ge,
          lastProgressAt: Date.now(),
          ...Ee
        }
      }),
      ke = new AbortController(),
      Ve = () => ke.abort(new DOMException("workflow-abort", "AbortError"));
    if (Fe?.addEventListener("abort", Ve), Fe?.aborted) ke.abort(new DOMException("workflow-abort", "AbortError"));
    Le("start");
    let ut;
    try {
      f?.(Me, ke);
      let He = me(D),
        {
          proactivityLevel: Ee
        } = D.getAppState(),
        De = q4(He.mode, Ee),
        $t = pe.model || Uoe() !== "inherit" ? uL(void 0, D.options.mainLoopModel, pe.model, He.mode, We(ee)) : void 0,
        Ie = Xe ? isr(e.messages, e.agentId) : null,
        Ke = Ie?.kind === "relay" ? csr(Ie) : null;
      if (U.includes(ARTIFACT_MARKER) || (Ke?.includes(ARTIFACT_MARKER) ?? !1)) foreignArtifact = !0;
      let Et = (!Xe ? U : Ie?.kind === "automated" ? lsr(U) : (Ke !== null ? Ke + `

` : "") + kTn(U)) + foreignNotice(U),
        mt = await WP({
          initialMessage: Et,
          source: "workflow_remote_agent",
          tags: [bKe],
          description: ee,
          branchName: await fe(),
          ...GKt(Jo(De), Ee),
          model: $t,
          signal: ke.signal,
          onBundleFail: nt => {
            ut = nt;
          },
          onCreateFail: nt => {
            ut = nt;
          },
          storageV5: D.storageV5,
          credentials: D.credentials
        });
      if (!mt) throw Error(ut ?? "Failed to create cloud session");
      Be = mt.id, Le("progress");
      let {
          text: At,
          structuredOutput: te,
          resultSubtype: Re,
          usage: tt,
          modelUsage: je,
          toolCalls: Ct
        } = await svr(Be, ke.signal, D.credentials),
        Ye = AR(At).sanitized;
      if (At.includes(ARTIFACT_MARKER)) foreignArtifact = !0;
      for (let [nt, Je] of Object.entries(je ?? {})) gDe(Je.costUSD, {
        ...Mp,
        input_tokens: Je.inputTokens,
        output_tokens: Je.outputTokens,
        output_tokens_details: {
          thinking_tokens: Je.thinkingTokens ?? 0
        },
        cache_read_input_tokens: Je.cacheReadInputTokens,
        cache_creation_input_tokens: Je.cacheCreationInputTokens,
        server_tool_use: {
          web_search_requests: Je.webSearchRequests,
          web_fetch_requests: 0
        }
      }, nt);
      if (pe.schema && te === void 0) {
        let nt = Re === "error_max_structured_output_retries" ? "the cloud agent called StructuredOutput but no attempt produced a surviving valid output (failed schema validation, or retracted by a model fallback)" : Re && Re !== "success" ? `the cloud agent turn ended with result subtype '${Re}'` : "the cloud agent never called the StructuredOutput tool";
        throw Error(`agent({isolation:'remote', schema}) completed without structured output: ${nt}.`);
      }
      if (Le("done", {
        tokens: tt ? eDn(tt) : 0,
        toolCalls: Ct,
        durationMs: Date.now() - K,
        resultPreview: Mt(pe.schema ? te : Ye)
      }), pe.schema) return clone(te);
      if (me(D).mode === "auto" && Ye) {
        let nt = await hZe({
          agentMessages: [],
          tools: e.options.tools,
          rootToolSurface: e.rootToolSurface,
          toolPermissionContext: me(D),
          abortSignal: ke.signal,
          agentType: y("workflow-subagent"),
          totalToolUseCount: Ct,
          finalResultText: Ye,
          agentId: D.agentId,
          storageV5: D.storageV5,
          credentials: D.credentials
        }).catch(Je => {
          if (ke.signal.aborted) return null;
          return d(Je), {
            warning: xZ(""),
            kind: "unavailable"
          };
        });
        if (nt) {
          if (nt.kind !== "unavailable") {
            let Je = `[${ee}] ${nt.warning}`;
            recordFailure(Je, {
              log: !0
            });
          }
          return `${nt.warning}

${Ye}`;
        }
      }
      return Ye;
    } catch (He) {
      if (Be) Cx(Be).catch(() => {});
      if (Ci(ke.signal.reason) === "user-skip") return Le("error", {
        error: "skipped by user",
        skipped: !0,
        durationMs: Date.now() - K
      }), null;
      throw Le("error", {
        error: He instanceof Error ? He.message : String(He),
        durationMs: Date.now() - K
      }), He;
    } finally {
      Fe?.removeEventListener("abort", Ve), f?.(Me, null);
    }
  }
  let Ko = xt(async M => {
      if (D.abortController?.signal.aborted) return new Promise(() => {});
      if (await Q(0), !Array.isArray(M)) throw TypeError("parallel() expects an array of functions");
      let U = bVn(snapshot(M));
      if (U.length === 0) return clone([]);
      et(), ct();
      for (let pe of U) if (typeof pe !== "function") throw TypeError("parallel() expects an array of functions, not promises. Wrap each call: () => agent(...)");
      let ee = await Promise.allSettled(U.map(pe => {
          try {
            return settle(call(pe));
          } catch (ve) {
            return Promise.reject(ve);
          }
        })),
        Oe = 0,
        Qe = ee.map((pe, ve) => {
          if (pe.status === "fulfilled") return pe.value.v;
          let {
            name: Fe,
            msg: Xe
          } = MCe(pe.reason);
          if (Fe === "WorkflowBudgetExceededError") return Oe++, null;
          let Me = `parallel[${ve}] failed: ${Xe}`;
          return recordFailure(Me, {
            log: !0
          }), null;
        });
      if (Oe > 0) failures.push(`parallel: ${Oe} ${I(Oe, "slot")} dropped \u2014 token budget exceeded`);
      return clone(Qe);
    }),
    zo = xt(async (M, ...U) => {
      if (D.abortController?.signal.aborted) return new Promise(() => {});
      if (await Q(0), !Array.isArray(M)) throw TypeError("pipeline() expects an array as the first argument");
      let ee = bVn(snapshot(M)),
        Oe = bVn(U);
      if (ee.length === 0) return clone([]);
      et(), ct();
      for (let Fe of Oe) if (typeof Fe !== "function") throw TypeError("pipeline() stages must be functions: pipeline(items, item => ..., result => ...)");
      let Qe = await Promise.allSettled(ee.map(async (Fe, Xe) => {
          let Me = await settle(Fe);
          for (let K of Oe) {
            if (Me.v === null) break;
            Me = await settle(call(K, Me.v, Fe, Xe));
          }
          return Me;
        })),
        pe = 0,
        ve = Qe.map((Fe, Xe) => {
          if (Fe.status === "fulfilled") return Fe.value.v;
          let {
            name: Me,
            msg: K
          } = MCe(Fe.reason);
          if (Me === "WorkflowBudgetExceededError") return pe++, null;
          let Ge = `pipeline[${Xe}] failed: ${K}`;
          return recordFailure(Ge, {
            log: !0
          }), null;
        });
      if (pe > 0) failures.push(`pipeline: ${pe} ${I(pe, "slot")} dropped \u2014 token budget exceeded`);
      return clone(ve);
    }),
    Go = xt(M => {
      s({
        type: "progress",
        toolUseID: "workflow_log",
        data: {
          type: "workflow_log",
          message: pFe(M)
        }
      });
    });
  return {
    agent: jo,
    parallel: Ko,
    pipeline: zo,
    log: Go,
    phase: qt,
    resolvePhase: Wt,
    reservePhase: dn,
    recordFailure: M => recordFailure(M, {
      log: !1
    }),
    getAgentCount: () => agentCount,
    getFailures: () => failures,
    getForeignArtifactContent: () => foreignArtifact,
    bindVMAwait: M => {
      settle = M.settle, call = M.call, clone = M.clone, sanitize = M.sanitize, snapshot = M.snapshot, getProp = M.getProp;
    },
    sanitizeVMValue: M => sanitize(M),
    getVMProp: (M, U) => getProp(M, U)
  };
}
