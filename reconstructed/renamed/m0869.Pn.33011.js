/* ==========================================================================
 * m0869.Pn   [m0869_0xd12567a.js @ 33011]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
class Pn {
  #t;
  #o;
  #r;
  #e;
  #n;
  #i = 0;
  #a = 0;
  #l = !1;
  #s = "unscanned";
  constructor({
    signal: e,
    log: r,
    onChange: s,
    storageV5: g
  }) {
    this.#t = e, this.#o = r, this.#r = s, this.#u(g, Mr);
  }
  async #u(e, r) {
    try {
      this.#s = await bAe("autoContinueAtUsageLimit", e);
    } catch (s) {
      this.#s = "unknowable", d(s);
    }
    if (this.#s === "unknowable" && r > 0 && !this.#t?.aborted) await Q(Wr, this.#t, {
      unref: !0
    }), await this.#u(e, r - 1);
  }
  #d() {
    if (!x("tengu_linked_clover", !0) || !awe()) return "killswitch";
    return MYt(this.#s) ? void 0 : "setting_off";
  }
  async whenClear() {
    while (this.#n !== void 0) await this.#n;
  }
  join(e) {
    try {
      return this.#c(e);
    } catch (r) {
      return d(r), {
        outcome: "declined",
        failureNote: void 0
      };
    }
  }
  #c(e) {
    if (this.#t?.aborted) return {
      outcome: "aborted"
    };
    if (e === void 0 || e.resetsAt === void 0 || !SG(e) || !pt() || An()?.billingType === "usage_based" || this.#d() !== void 0 || !pkt() || !DYt() || fm()) return {
      outcome: "declined",
      failureNote: void 0
    };
    let r = Date.now(),
      s = e.resetsAt * 1000;
    if (s - r > fkt) return this.#f(`usage limit; resets ${Ao(e.resetsAt)}, too far out to wait for`);
    let g = Math.max(s, r) + e5({
      baseMs: Eo,
      capMs: Eo,
      attempt: 0,
      floorMs: Or
    });
    if (this.#e !== void 0 && this.#n !== void 0) return this.#e.status = {
      resetsAt: Math.max(this.#e.status.resetsAt, e.resetsAt),
      resumeAtMs: Math.max(this.#e.status.resumeAtMs, g),
      waitingAgents: this.#e.status.waitingAgents + 1
    }, this.#r(this.#e.status), {
      outcome: "waiting",
      ended: this.#n
    };
    let f = s <= r;
    if (f ? this.#a >= vo : this.#i >= _o) return this.#f(`usage limit; resets ${Ao(e.resetsAt)}, and this run already waited for ${f ? vo : _o} resets`);
    if (f) this.#a++;else this.#i++;
    let w = {
      status: {
        resetsAt: e.resetsAt,
        resumeAtMs: g,
        waitingAgents: 1
      },
      startedAtMs: r
    };
    this.#e = w, this.#n = this.#p(w);
    let A = dsr(e.resetsAt, !0);
    return this.#o(`Usage limit reached${A === void 0 ? "" : ` \xB7 ${A}`}. Workflow paused; waiting agents re-run shortly after the reset.`), this.#r(w.status), {
      outcome: "waiting",
      ended: this.#n
    };
  }
  async #p(e) {
    let r = "failed",
      s;
    try {
      let g = e.status.resumeAtMs - Date.now();
      do await Q(Math.max(0, Math.min(g, xr)), this.#t), g = e.status.resumeAtMs - Date.now(), s = this.#d(); while (!this.#t?.aborted && s === void 0 && g > 0);
      r = this.#t?.aborted ? "aborted" : s === void 0 ? "resumed" : "revoked";
    } catch (g) {
      d(g);
    }
    this.#e = void 0, this.#n = void 0;
    try {
      this.#r(void 0);
      let g = {
        wait_ms: Date.now() - e.startedAtMs,
        agents_waiting: e.status.waitingAgents
      };
      switch (r) {
        case "resumed":
          this.#o(`Usage limit reset. Re-running ${e.status.waitingAgents} waiting ${I(e.status.waitingAgents, "agent")}.`), _("workflow_rate_limit_wait", g);
          break;
        case "aborted":
          p("workflow_rate_limit_wait", "killed_while_waiting", g);
          break;
        case "revoked":
          this.#o(`Waiting for usage limits to reset was turned off. ${e.status.waitingAgents} waiting ${I(e.status.waitingAgents, "agent")} will not run again.`), p("workflow_rate_limit_wait", s === "setting_off" ? "setting_off_while_waiting" : "killswitch_while_waiting", g);
          break;
        case "failed":
          m("workflow_rate_limit_wait", "wait_error", g);
          break;
      }
    } catch (g) {
      d(g);
    }
    return r;
  }
  #f(e) {
    if (!this.#l) this.#l = !0, p("workflow_rate_limit_wait", "gave_up", {
      wait_ms: 0,
      agents_waiting: 0
    });
    return {
      outcome: "declined",
      failureNote: e
    };
  }
}
