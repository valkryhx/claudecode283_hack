/* ==============================================================================
 * m1569.tr   [m1569_0xdceb889.js @ 37122]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 37122
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
class tr {
  runId;
  vmScript;
  world;
  controller = new AbortController;
  ctx;
  words;
  vmErrorInfo;
  logs = [];
  log(e) {
    if (this.logs.length < Tt) this.logs.push(Fc(e))
  }
  sink;
  killed = !1;
  killedSize;
  foreignArtifactContentAtKill = !1;
  scope = -1;
  priorScopes = [];
  retractPriorLives() {
    for (let e of this.priorScopes) this.world.retract(e)
  }
  reportedRows = 0;
  reportedLogs = 0;
  reportedFailures = 0;
  reopen;
  onUnfounded;
  constructor(e, r, n) {
    this.runId = e;
    this.vmScript = r;
    this.world = n
  }
  static lost(e, r, n, s = []) {
    let a = new tr(e, void 0, r);
    a.scope = n, a.priorScopes = s, a.retractPriorLives(), a.lostOnResume = !0;
    let w = a.killRecord();
    if (w !== void 0 || r.isRetractedScope(n)) {
      if (a.kill("stop"), w !== void 0) a.killedSize = w
    }
    return a
  }
  lostOnResume = !1;
  get isLost() {
    return this.lostOnResume
  }
  get founded() {
    return this.scope >= 0
  }
  get isKilled() {
    return this.killed
  }
  get carriedForeignArtifactContent() {
    return this.foreignArtifactContentAtKill || this.ctx?.hooks.getForeignArtifactContent() === !0
  }
  get isActive() {
    return this.scope >= 0 && !this.world.isIdle(this.scope)
  }
  state() {
    if (this.killed) return "killed";
    if (this.lostOnResume) return "lost";
    return this.isActive ? "open" : "settled"
  }
  get wasSteered() {
    return this.steered
  }
  steered = !1;
  afterKillReported = !1;
  noteCallAfterKill(e) {
    if (!this.killed || this.lostOnResume || this.afterKillReported || this.killedSize === void 0) return;
    this.afterKillReported = !0, _("workflow_after_kill", {
      next_action: c(e),
      seconds_since_kill: Math.round((Date.now() - this.killedSize.at) / 1000)
    })
  }
  msSinceLaunch() {
    let e = this.world.rows[this.scope];
    return e ? Date.now() - e.at : 0
  }
  get pending() {
    return this.scope < 0 ? 0 : this.world.pending(this.scope)
  }
  status() {
    if (this.scope < 0) return {
      rows: 0,
      pending: 0
    };
    return {
      rows: this.world.read({}, {
        in: this.scope
      }).length,
      pending: this.pending
    }
  }
  kill(e) {
    if (this.killed = !0, this.controller.abort(), this.scope >= 0 && !this.world.isRetractedScope(this.scope)) {
      let r = this.status();
      if (this.killedSize = {
          at: Date.now(),
          reason: e,
          ...r,
          rules: U(this.world.read({
            topic: "sub"
          }, {
            in: this.scope
          }), (a) => a.kind === "sub"),
          agents: this.ctx?.hooks.getAgentCount() ?? 0
        }, !this.lostOnResume) _("workflow_kill", {
        reason: c(e),
        rows: r.rows,
        agents: this.killedSize.agents,
        ms_since_launch: this.msSinceLaunch()
      });
      this.world.retract(this.scope);
      let {
        at: n,
        ...s
      } = this.killedSize;
      try {
        if (this.killRecord() === void 0) this.world.put({
          topic: "run",
          runId: this.runId,
          killed: !0,
          ...s
        }, "host", {
          in: j
        })
      } catch (a) {
        if (this.world.isFull) t(`workflow v2: kill record for ${this.runId} skipped \u2014 the world is full`);
        else d(a)
      }
    }
    this.foreignArtifactContentAtKill = this.carriedForeignArtifactContent, this.ctx = void 0, this.words = void 0
  }
  killRecord() {
    let e = this.killRecordRow();
    if (!e) return;
    return {
      at: Be(e.at),
      reason: Et(e.fact.reason),
      rows: Be(e.fact.rows),
      pending: Be(e.fact.pending),
      rules: Be(e.fact.rules),
      agents: Be(e.fact.agents)
    }
  }
  cutUnawaitedScriptChildren() {
    let e = this.words;
    if (!e) return;
    for (let r of this.world.rows) {
      if (r.status === "retracted" || r.by !== "script" || r.in !== this.scope || r.kind !== "eval" || r.fact.topic !== "workflow" || r.fact.child !== !0) continue;
      if (r.status === "pending" || this.childHasOwnWork(r.addr)) e.cutChild(r.addr)
    }
  }
  childHasOwnWork(e) {
    if (this.world.isIdle(e)) return !1;
    let r = this.world.rows;
    for (let n = e + 1; n < r.length; n++) {
      let s = r[n];
      if (!(s.status === "pending" || s.kind === "sub" && !this.world.isIdle(s.addr)) || !this.world.within(s.addr, e) || !pr(this.world, s, e)) continue;
      return !0
    }
    return !1
  }
  killRecordRow() {
    return this.world.read({
      topic: "run",
      runId: this.runId,
      killed: !0
    }, {
      in: j
    }).find((e) => e.in === j && e.kind === "put" && e.by === "host")
  }
  async run(e, r, n, s) {
    this.sink = n;
    let a = Date.now();
    if (this.scope < 0) try {
      let W;
      try {
        W = s.journal ? await s.journal.load() : void 0
      } catch (D) {
        throw m("workflow_run", "journal_load_failed", {
          duration_ms: Date.now() - a
        }), D
      }
      if (this.killed) {
        let D = Date.now() - a;
        return p("workflow_run", "killed", {
          agents: 0,
          rows: 0,
          duration_ms: D,
          reopened: !1,
          error_results: 0
        }), {
          result: [],
          agentCount: 0,
          logs: [],
          failures: [],
          durationMs: D
        }
      }
      try {
        this.found(e, r, s, W)
      } catch (D) {
        throw this.scope = -1, this.priorScopes = [], this.ctx = void 0, this.words = void 0, m("workflow_run", "founding_failed", {
          duration_ms: Date.now() - a
        }), D
      }
    } finally {
      if (this.scope < 0) this.onUnfounded?.();
      this.onUnfounded = void 0
    }
    await Promise.race([this.world.whenIdle(this.scope), this.aborted()]), this.ctx?.timers.clear(), this.words?.clearChildTimers();
    let w = this.reportedRows;
    this.reportedRows = this.world.rows.length;
    let h = this.world.rows[this.scope],
      g = h?.status === "failed" && this.scope >= w ? h.error : this.killedSize?.reason === "runaway" && !this.reportedRunaway ? Br : void 0,
      k = g === Br;
    if (k) this.reportedRunaway = !0;
    let R = {
        in: this.scope
      },
      I = (W) => W.addr >= w && this.ownRow(W),
      x = this.logs.slice(this.reportedLogs);
    this.reportedLogs = this.logs.length;
    let Z = this.ctx?.hooks.getFailures() ?? [],
      F = this.world.read({
        topic: "script",
        status: "failed"
      }, R).filter((W) => I(W) && W.addr !== this.scope),
      O = [...this.world.read({
        topic: "workflow",
        status: "failed"
      }, R), ...this.world.read({
        topic: "workflow",
        status: "retracted"
      }, R)].filter((W) => W.addr >= w && W.kind === "eval" && W.fact.child === !0 && W.error !== void 0).sort((W, D) => W.addr - D.addr),
      K = [...Z.slice(this.reportedFailures), ...this.world.read({
        topic: "error"
      }, R).filter(I).map((W) => Fc(`error: ${b(W.fact)}`)), ...F.map((W) => Fc(`script error: ${W.error??""}`)), ...O.map((W) => Fc(`${v$} ${typeof W.fact.name==="string"?W.fact.name:typeof W.fact.scriptPath==="string"?`workflow(${W.fact.scriptPath})`:"workflow()"}: ${W.error??""}`))];
    this.reportedFailures = Z.length;
    let L = this.world.read({
        topic: "result"
      }, R).filter(I).map((W) => W.fact),
      te = L.length === 0 && h?.status === "done" && this.scope >= w,
      X = te ? h.value : void 0,
      ne = te ? X : L.length === 0 && g !== void 0 ? null : L,
      ge = te ? Array.isArray(X) ? X : X === void 0 || X === null ? [] : [X] : L,
      we = te && Array.isArray(X) && X.length === 0 ? 1 : ge.length,
      de = this.killedSize?.agents ?? this.ctx?.hooks.getAgentCount() ?? 0,
      q = Date.now() - a;
    return this.logSettlement({
      result: we,
      errorResults: U(ge, jt),
      scriptError: g === void 0 ? void 0 : k ? "runaway" : "script_failed",
      errors: U(this.world.read({
        topic: "error"
      }, R), I) + F.length + O.length,
      agentCount: de,
      durationMs: q
    }), {
      result: ne,
      agentCount: de,
      logs: x,
      failures: K,
      ...this.carriedForeignArtifactContent && {
        foreignArtifactContent: !0
      },
      durationMs: q,
      ...g !== void 0 && {
        error: g
      }
    }
  }
  logSettlement(e) {
    let r = {
      agents: e.agentCount,
      rows: this.killedSize?.rows ?? this.world.read({}, {
        in: this.scope
      }).length,
      duration_ms: e.durationMs,
      reopened: this.settlements > 0,
      error_results: e.errorResults
    };
    if (this.settlements++, e.scriptError !== void 0) {
      m("workflow_run", e.scriptError, r);
      return
    }
    if (this.killed) {
      p("workflow_run", "killed", r);
      return
    }
    if (e.result > e.errorResults) {
      _("workflow_run", {
        ...r,
        rule_errors: e.errors
      });
      return
    }
    if (e.errorResults > 0) {
      m("workflow_run", "error_result", r);
      return
    }
    p("workflow_run", e.errors > 0 ? "rule_error" : "no_result", r)
  }
  settlements = 0;
  reportedRunaway = !1;
  requireOp(e) {
    try {
      this.requireOpen(), this.requireFounded()
    } catch (r) {
      throw m("workflow_steer", this.killed ? "killed" : this.lostOnResume ? "lost_on_resume" : "not_founded", {
        verb: c(e)
      }), r
    }
  }
  put(e) {
    this.requireOp("put");
    let r = this.world.put(Te(e), rr, {
      in: this.scope
    });
    return this.steered = !0, r
  }
  retract(e) {
    if (this.requireOp("retract"), e === this.scope || !this.world.within(e, this.scope)) return !1;
    let r = this.world.retract(e);
    if (r) this.steered = !0;
    return r
  }
  read(e) {
    if (this.scope < 0) return [];
    let r = Ce(e ?? {});
    return [...this.priorScopes, this.scope].flatMap((n) => this.world.read(r, {
      in: n
    }).map(Ue))
  }
  markSteer() {
    let e = {
      rows: this.world.rows.length,
      retracted: 0,
      pendingAgents: new Set
    };
    for (let r of this.rowsInRun())
      if (r.status === "retracted") e.retracted++;
      else if (r.status === "pending" && Kr(r)) e.pendingAgents.add(r.addr);
    return e
  }
  reportSteer(e, r) {
    if (this.scope < 0) return;
    let n = 0,
      s = 0,
      a = 0,
      w = 0;
    for (let h of this.rowsInRun()) {
      let g = h.addr >= r.rows;
      if (g && h.kind === "put") n++;
      if (h.status === "retracted") s++;
      if (!Kr(h)) continue;
      if (g) a++;
      if (h.status === "retracted" && (g || r.pendingAgents.has(h.addr))) w++
    }
    _("workflow_steer", {
      verb: c(e),
      rows_put: n,
      rows_retracted: s - r.retracted,
      agents_spawned: a,
      agents_aborted: w,
      ms_since_launch: this.msSinceLaunch(),
      run_state: c(this.state())
    })
  }
  ownRow(e) {
    if (e.by === "host" && e.fact.topic === "error" && e.fact.kind === "rule") return !0;
    if (!this.inChildWorkflow(e.addr)) return !0;
    let r = fr(this.world, e, this.scope);
    return r !== void 0 && !this.inChildWorkflow(r)
  }
  inChildWorkflow(e) {
    return cr(this.world, e, this.scope)
  }
  rowsInRun() {
    if (this.scope < 0) return [];
    return this.world.rows.filter((e) => this.world.within(e.addr, this.scope))
  }
  beginScript(e) {
    if (this.requireOp("script"), !this.ctx || !this.words) return m("workflow_steer", "no_context", {
      verb: y("script")
    }), {
      error: "run has no context yet"
    };
    let r = t7(e, {
      bindWords: !0
    });
    if (!r.ok) return m("workflow_steer", "compile_failed", {
      verb: y("script")
    }), {
      error: r.error
    };
    let n = this.evalScript(r.vmScript, {
      topic: "script",
      via: rr
    }, rr, {
      in: this.scope
    }, rr);
    return this.steered = !0, {
      addr: n
    }
  }
  async awaitScript(e) {
    await Promise.race([this.world.settled(e), Q(xt)]);
    let r = this.world.rows[e];
    return r.status === "failed" ? {
      error: r.error
    } : {}
  }
  async script(e) {
    let r = this.beginScript(e);
    if ("error" in r) return {
      error: r.error
    };
    let n = await this.awaitScript(r.addr);
    return {
      addr: r.addr,
      ...n
    }
  }
  killReason() {
    return this.killedSize?.reason ?? this.killRecord()?.reason ?? "unknown"
  }
  requireOpen() {
    if (this.killed) throw new P(`workflow run ${this.runId} was killed`, "workflow v2: run op on a killed run")
  }
  requireFounded() {
    if (this.scope < 0) throw new P(`workflow run ${this.runId} is not founded`, "workflow v2: run-op on an unfounded run");
    if (this.lostOnResume) throw new P(`workflow run ${this.runId} was restored from the journal on resume; its rules and work are gone \u2014 read its facts, or launch again`, "workflow v2: run op on a lost run")
  }
  aborted() {
    let e = this.controller.signal;
    if (e.aborted) return Promise.resolve();
    return new Promise((r) => {
      e.addEventListener("abort", () => r(), {
        once: !0
      })
    })
  }
  found(e, r, n, s) {
    let a = {
        ...e,
        abortController: this.controller
      },
      w = wTn(a, r, (g) => {
        if (g.type === "progress" && g.data.type === "workflow_log") this.log(g.data.message);
        this.sink?.onProgress(g)
      }, this.runId, (g, k) => this.sink?.onAgentController(g, k), n.args, n.seedPhaseTitles, n.tokenBudget, n.journal, s, n.workflowName, n.invokingRequestId, n.parentPromptId, (g) => this.sink?.onRateLimitWait?.(g));
    this.ctx = w, this.vmErrorInfo = qX(w.vmContext), this.priorScopes = this.world.rows.filter((g) => wr(g) && g.fact.runId === this.runId).map((g) => g.addr), this.scope = this.world.rows.length;
    let h = this.world.subscribe((g) => {
      if (g.kind === "runaway" && g.scope === this.scope) h(), this.kill("runaway")
    });
    this.controller.signal.addEventListener("abort", h, {
      once: !0
    });
    try {
      if (this.words = mr(w, this.world, this.scope, this.controller.signal), !this.vmScript) throw new P("a run restored from the journal cannot be founded", "workflow v2: found() on a lost run");
      let g = this.evalScript(this.vmScript, {
        topic: "script",
        founding: !0,
        runId: this.runId
      }, "host", {
        in: j
      });
      if (g !== this.scope) throw new P(`founding row landed at ${g}, expected ${this.scope}`, "workflow v2: founding address mismatch");
      this.retractPriorLives();
      let k = this.killRecordRow();
      if (k !== void 0) this.world.retract(k.addr);
      this.world.settled(this.scope).then((R) => {
        if (R.status === "retracted" || this.controller.signal.aborted) return;
        this.cutUnawaitedScriptChildren()
      })
    } catch (g) {
      throw h(), g
    }
  }
  evalScript(e, r, n, s, a) {
    let w = this.ctx,
      h = this.words,
      g = {
        vmContext: w.vmContext,
        settle: w.vmBoundary.settle,
        sanitize: w.vmBoundary.sanitize,
        errorInfo: this.vmErrorInfo
      },
      k = () => er(e, g);
    return this.world.eval(r, () => (a === void 0 ? k() : h.as(a, k)).then((R) => {
      if (R.error) throw new P(R.error, "workflow v2: script failed");
      return R.value
    }), n, s)
  }
}
