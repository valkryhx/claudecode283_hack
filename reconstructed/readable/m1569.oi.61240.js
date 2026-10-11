/* ==============================================================================
 * m1569.oi   [m1569_0xdceb889.js @ 61240]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 61240
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var oi = Ft({
  name: Fd,
  aliases: ["RunWorkflow"],
  searchHint: "orchestrate subagents with deterministic JavaScript workflow",
  enablesCodeExecution: !0,
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  isEnabled: () => Qp(),
  async prompt(e) {
    return xnr(fSe(e?.tools)) + pEr(le().workflowSizeGuideline, mte()) + dt()
  },
  async description(e, r) {
    return xnr(fSe(r?.tools)) + pEr(le().workflowSizeGuideline, mte()) + dt()
  },
  get inputSchema() {
    return Zt()
  },
  get outputSchema() {
    return Qt()
  },
  coerceInput: (e) => Er(e, {
    apply: sMr()
  }),
  streamedInputRepairExemptKeys: () => sMr() ? void 0 : Yt,
  toAutoClassifierInput(e) {
    let r = he();
    if (r && typeof e.runId === "string") return r.runOpClassifierInput(e);
    if (e.script && e.scriptPath) return `${e.script}

scriptPath: ${e.scriptPath}`;
    if (e.script && e.name) return `${e.script}

name: ${e.name}`;
    return e.script || e.scriptPath || e.name || ""
  },
  userFacingName() {
    return "Workflow"
  },
  getToolUseSummary(e) {
    let r = e ? Ke(e) : void 0;
    if (r && he()) return `workflow ${r.runId} \xB7 ${hr(r)??"?"}`;
    if (e?.scriptPath) {
      let n = at(cH(e.scriptPath));
      return e.script ? `${n} \xB7 ${ze(e.script)}` : n
    }
    if (e?.name) return e.script ? `dynamic workflow: ${cH(e.name)} \xB7 ${ze(e.script)}` : `dynamic workflow: ${cH(e.name)}`;
    if (!e?.script) return null;
    return ze(e.script)
  },
  create(e) {
    return {
      async validateInput(r, n) {
        let s = _r(e, n);
        if (AX(s.signal)) return Ir;
        let a = rMr();
        if (a !== void 0) {
          let k = {
            kind: "feature_disabled",
            feature: "workflows",
            cause: a
          };
          return a === "managed_settings" ? {
            result: !1,
            message: "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
            errorCode: 5,
            remedy: k
          } : {
            result: !1,
            message: 'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
            errorCode: 6,
            remedy: k
          }
        }
        if (typeof r.runId === "string") {
          let k = he();
          if (!k) return {
            result: !1,
            message: "runId is not a field of this tool here.",
            errorCode: 9
          };
          await lt(s);
          let R = await k.validateRunOp(r, s);
          if (R) return R
        }
        if (OWe()) {
          let k = [r.script && "script", r.scriptPath && "scriptPath", r.resumeFromRunId && "resumeFromRunId", r.remote && "remote"].filter((R) => Boolean(R));
          if (k.length > 0) return {
            result: !1,
            message: `This session restricts the Workflow tool to named workflows (${q7r} is set). Not allowed here: ${k.join(", ")}. Invoke as {name, args} only.`,
            errorCode: 8
          }
        }
        if (r.scriptPath) {
          let k = STn(r.scriptPath, s);
          if (k !== null) return {
            result: !1,
            message: k,
            errorCode: 15
          }
        }
        let w;
        if (r.resumeFromRunId) {
          let k = Pr(r.resumeFromRunId, s);
          if (k) return {
            result: !1,
            message: k,
            errorCode: 3
          };
          let R = await vTn(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(wSt));
          if (AX(s.signal)) return Ir;
          if (R.kind === "refused") return {
            result: !1,
            message: R.message,
            errorCode: 16
          };
          if (r.scriptPath) w = rsr(R, r.scriptPath)
        }
        let h = await Sr(r, s, s.storageV5);
        if ("error" in h && w !== void 0) h = await Sr({
          ...r,
          script: w
        }, s, s.storageV5);
        if (AX(s.signal)) return Ir;
        if ("error" in h) {
          if (r.name && !r.scriptPath) m("workflow_resolve", "not_found");
          return {
            result: !1,
            message: h.error,
            errorCode: 1
          }
        }
        if (r.name && !r.scriptPath) _("workflow_resolve");
        let g = Fy(h.script);
        if ("error" in g) return {
          result: !1,
          message: `Invalid workflow script: ${g.error}${vr(r,s.tools)}`,
          errorCode: 2
        };
        if (r.script && LKt(g.scriptBody)) return {
          result: !1,
          message: `Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.${vr(r,s.tools)}`,
          errorCode: 4
        };
        return {
          result: !0
        }
      },
      async checkPermissions(r, n) {
        let s = _r(e, n),
          a = s.permissions(),
          w = Ke(r) !== void 0,
          h = r.scriptPath || w ? void 0 : r.name,
          g = (O) => h ? PR(a, Fd, O).get(h) : void 0,
          k = g("deny");
        if (k) return {
          behavior: "deny",
          message: `Workflow ${h} blocked by permission rules`,
          decisionReason: {
            type: "rule",
            rule: k
          }
        };
        let R = w ? Ke(r) : void 0;
        if (R && hr(R) === "read") return {
          behavior: "allow",
          updatedInput: r,
          decisionReason: {
            type: "other",
            reason: TAe
          }
        };
        let I = r;
        if (w);
        else if (r.scriptPath) {
          let O = await NKt(r.scriptPath, s),
            K = "error" in O && r.resumeFromRunId && STn(r.scriptPath, s) === null ? rsr(await vTn(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(wSt)), r.scriptPath) : void 0;
          if (K !== void 0) I = {
            ...r,
            script: K
          };
          else if ("error" in O) return {
            behavior: "deny",
            message: O.error,
            decisionReason: {
              type: "other",
              reason: "workflow scriptPath outside the readable set"
            }
          };
          else I = {
            ...r,
            script: O.script
          }
        } else if (r.name) {
          let O = await TSt(r.name, oe(), s.storageV5);
          I = {
            ...r,
            script: O?.script
          }
        }
        let x = w && he()?.RUN_OP_CONSENT_MESSAGE || "Review dynamic workflow before running",
          Z = g("ask");
        if (Z) return {
          behavior: "ask",
          message: x,
          updatedInput: I,
          decisionReason: {
            type: "rule",
            rule: Z
          }
        };
        let F = g("allow");
        if (F) return {
          behavior: "allow",
          updatedInput: I,
          decisionReason: {
            type: "rule",
            rule: F
          }
        };
        return {
          behavior: "ask",
          message: x,
          updatedInput: I,
          ...h && {
            suggestions: [{
              type: "addRules",
              rules: [{
                toolName: Fd,
                ruleContent: h
              }],
              behavior: "allow",
              destination: "localSettings"
            }]
          }
        }
      },
      async call(r, n) {
        let s = _r(e, n),
          {
            parentMessage: a
          } = n;
        if (s.agentId !== void 0 && vM(s.agentId)) throw m("subagent_launch", "workflow_spawner_stop_pending"), new Oe("This agent has been stopped and its stop is still completing; it cannot launch workflows or act on existing runs.");
        if (typeof r.runId === "string") {
          let D = he();
          if (!D) throw new Oe("runId is not a field of this tool here.");
          await lt(s);
          let ee = await D.callRunOp(r, s);
          if (ee) return {
            data: {
              status: D.RUN_OP_STATUS,
              taskId: "",
              runId: ee.runId,
              runOp: ee.runOp
            }
          }
        }
        if (r.resumeFromRunId) {
          let D = Pr(r.resumeFromRunId, s);
          if (D) throw new Oe(D);
          let ee = await H7r(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(wSt));
          if (ee !== null) throw new Oe(ee)
        }
        let w = await Sr(r, s, s.storageV5);
        if ("error" in w) throw new Oe(w.error);
        let {
          script: h,
          source: g,
          resolvedScriptPath: k
        } = w, R = g === "built-in" && w.scriptMatchesDefinition === !0, I = Fy(h);
        if ("error" in I) throw new Oe(`Invalid workflow script: ${I.error}`);
        let x = r.resumeFromRunId ?? `wf_${Jt().slice(0,12)}`,
          Z = _S("local_workflow"),
          F = I.meta.description,
          O = I.meta.name,
          K = t7(I.scriptBody);
        if (!K.ok) return m("task_local_workflow", "compile_failed"), {
          data: {
            status: "async_launched",
            taskId: Z,
            taskType: "local_workflow",
            workflowName: O,
            runId: x,
            summary: F,
            error: `${K.error}${vr(r,s.tools)}`
          }
        };
        let L = uO(x),
          te = k ?? eln(O, x, h, s.storageV5);
        N7r(x, te, h, s.toolState.get(wSt));
        let X = r.scriptPath ? void 0 : g,
          ne = r.scriptPath ? "scriptPath" : g ?? "inline",
          ge = HKt(O, X, R),
          we = FKt(I.meta.description, X, R);
        if (i("tengu_workflow_launched", {
            invocation_mode: y(r.scriptPath ? "scriptPath" : r.name ? "named" : "inline"),
            workflow_source: c(ne),
            workflow_name: ge,
            workflow_description: we,
            phase_count: I.meta.phases?.length ?? 0,
            launched_from_subagent: s.agentId != null,
            has_args: r.args != null,
            is_resume: r.resumeFromRunId != null,
            script_size_chars: h.length
          }), r.resumeFromRunId == null) qr({
          toolState: s.toolState,
          taskRegistry: s.taskRegistry,
          name: vSt(X, R) ? xr(O) : void 0,
          runId: x
        });
        let de = {
            workflowRunId: x,
            script: h,
            scriptPath: te,
            args: r.args,
            meta: I.meta,
            vmScript: K.vmScript,
            toolUseId: s.toolUseId,
            transcriptDir: L,
            telemetry: {
              source: ne,
              name: ge,
              description: we,
              scriptIsVerbatimBuiltIn: R
            },
            invokingRequestId: a?.requestId,
            parentPromptId: Gve(s.messages(), s.agentContext)
          },
          q = en(n),
          W = (D) => q(kSt, D);
        if (r.resumeFromRunId) {
          let D = Pr(r.resumeFromRunId, s);
          if (D) throw m("task_local_workflow", "resume_collision"), new Oe(D)
        }
        return W({
          ...de,
          taskId: Z,
          isResume: r.resumeFromRunId != null
        }), {
          data: {
            status: "async_launched",
            taskId: Z,
            taskType: "local_workflow",
            workflowName: O,
            runId: x,
            summary: F,
            transcriptDir: L,
            scriptPath: te
          }
        }
      }
    }
  },
  renderToolUseMessage(e, {
    verbose: r
  }) {
    let n = Ke(e),
      s = he();
    if (n && s) return s.renderRunOp(n, r);
    if (e.scriptPath) {
      let a = cH(e.scriptPath),
        w = r ? a : at(a);
      if (!e.script) return w;
      return r ? `${a}
${e.script}` : `${w} \xB7 ${ze(e.script)}`
    }
    if (e.name) {
      let a = cH(e.name);
      if (!e.script) return `dynamic workflow: ${a}`;
      return r ? `dynamic workflow: ${a}
${e.script}` : `dynamic workflow: ${a} \xB7 ${ze(e.script)}`
    }
    if (!e.script) return null;
    return r ? e.script : ze(e.script)
  },
  mapToolResultToToolResultBlockParam(e, r) {
    if (e.error) return {
      tool_use_id: r,
      type: "tool_result",
      content: `Workflow script has a syntax error and was not launched:
${e.error}`,
      is_error: !0
    };
    let n = he()?.runOpToolResultText(e.runId, e.runOp);
    if (n) return {
      tool_use_id: r,
      type: "tool_result",
      content: n.content,
      is_error: n.isError
    };
    if (e.status === "remote_launched") return {
      tool_use_id: r,
      type: "tool_result",
      content: `Workflow launched in a remote CCR session. Task ID: ${e.taskId}
Session: ${e.sessionUrl}
` + (e.summary ? `Summary: ${e.summary}
` : "") + (e.warning ? `Warning: ${e.warning}
` : "") + `
The workflow runs against a fresh clone of the pushed branch; phase progress is visible at the session URL, not in /workflows. You will be notified when it completes.`,
      is_error: !1
    };
    let s = e.summary ? `
Summary: ${e.summary}` : "",
      a = e.transcriptDir ? `
Transcript dir: ${e.transcriptDir}` : "",
      w = e.scriptPath ? `
Script file: ${e.scriptPath}
(Edit this file with Write/Edit and re-invoke Workflow with {scriptPath: "${e.scriptPath}"} to iterate without resending the script.)` : "",
      h = e.runId && e.scriptPath ? `
Run ID: ${e.runId}
To resume after editing the script: Workflow({scriptPath: "${e.scriptPath}", resumeFromRunId: "${e.runId}"}) \u2014 completed agents return cached results (cached results may themselves be empty \u2014 inspect journal.jsonl before assuming there is something to recover).` : "",
      g = (e.runId, ""),
      k = `Workflow launched in background. Task ID: ${e.taskId}${s}${a}${w}${h}${g}

You will be notified when it completes. Use /workflows to watch live progress.`;
    return {
      tool_use_id: r,
      type: "tool_result",
      content: k,
      is_error: !1
    }
  }
});
