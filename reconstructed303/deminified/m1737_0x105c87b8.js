// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { HYs } from "B:/~BUN/root/chunk-j8w5f307.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Xie, WAr, zAr, GBe } from "B:/~BUN/root/chunk-5ec3ghdy.js";
import { wj, dpt } from "B:/~BUN/root/chunk-p7n9drc0.js";
import { Ile, Fcn, Mle, uQe, Hcn } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { yde } from "B:/~BUN/root/chunk-q9dtdza4.js";
function h(e) {
  let n = `Failed to create teammate pane: ${e}`,
    a = e.toLowerCase();
  return a.includes("no space") || a.includes("too small") ? `${n} \u2014 no room for another tmux split. Spawn fewer concurrent teammates, enlarge your terminal if running inside tmux, or switch to in-process teammates via /config.` : n;
}
function T(e) {
  return {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "magenta",
    orange: "colour208",
    pink: "colour205",
    cyan: "cyan"
  }[e];
}
function d(e) {
  let n = zAr(),
    a = n ? ["-S", n, ...e] : e;
  return lt(Mle, a);
}
function l(e, n) {
  return lt(Mle, ["-L", Hcn(), ...e], n);
}
async function Lfr(e, n, a, r) {
  await lt(Mle, [...e, "set-option", "-p", "-t", n, "remain-on-exit", "failed"], r);
  let s = await lt(Mle, [...e, "respawn-pane", "-k", "-t", n, "--", HYs("agent", a)], r);
  if (s.code !== 0) throw new wj(`Failed to send command to pane ${n}: ${s.stderr}`);
}
class z8s {
  type = "tmux";
  displayName = "tmux";
  cachedLeaderWindowTarget = null;
  firstPaneUsedForExternal = !1;
  paneCreationLock = yde();
  async isAvailable() {
    return GBe();
  }
  async isRunningInside() {
    return Xie();
  }
  async createTeammatePaneInSwarmView(e, n) {
    let a = await this.paneCreationLock.acquire();
    try {
      if (await this.isRunningInside()) return await this.createTeammatePaneWithLeader(e, n);
      return await this.createTeammatePaneExternal(e, n);
    } finally {
      a();
    }
  }
  async sendCommandToPane(e, n, a = !1) {
    try {
      dpt(n);
    } catch (error) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), error;
    }
    let r = zAr(),
      s = a ? ["-L", Hcn()] : r ? ["-S", r] : [];
    await Lfr(s, e, n);
  }
  async setPaneBorderColor(e, n, a = !1) {
    let r = T(n),
      s = a ? l : d;
    await s(["set-option", "-p", "-t", e, "window-style", `bg=default,fg=${r}`]), await s(["set-option", "-p", "-t", e, "pane-border-style", `fg=${r}`]), await s(["set-option", "-p", "-t", e, "pane-active-border-style", `fg=${r}`]);
  }
  async setPaneTitle(e, n, a, r = !1) {
    let s = T(a),
      o = r ? l : d;
    await o(["select-pane", "-t", e, "-T", n]), await o(["set-option", "-p", "-t", e, "pane-border-format", `#[fg=${s},bold] #{pane_title} #[default]`]);
  }
  async enablePaneBorderStatus(e, n = !1) {
    let a = e || (await this.getCurrentWindowTarget());
    if (!a) return;
    await (n ? l : d)(["set-option", "-w", "-t", a, "pane-border-status", "top"]);
  }
  async killPane(e, n = !1) {
    return (await (n ? l : d)(["kill-pane", "-t", e])).code === 0;
  }
  async getCurrentPaneId() {
    let e = WAr();
    if (e) return e;
    let n = await d(["display-message", "-p", "#{pane_id}"]);
    if (n.code !== 0) return t(`[TmuxBackend] Failed to get current pane ID (exit ${n.code}): ${n.stderr}`), null;
    return n.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (this.cachedLeaderWindowTarget) return this.cachedLeaderWindowTarget;
    let e = WAr(),
      n = ["display-message"];
    if (e) n.push("-t", e);
    n.push("-p", "#{window_id}");
    let a = await d(n);
    if (a.code !== 0) return t(`[TmuxBackend] Failed to get current window target (exit ${a.code}): ${a.stderr}`), null;
    return this.cachedLeaderWindowTarget = a.stdout.trim(), this.cachedLeaderWindowTarget;
  }
  async getCurrentWindowPaneCount(e, n = !1) {
    let a = e || (await this.getCurrentWindowTarget());
    if (!a) return null;
    let r = ["list-panes", "-t", a, "-F", "#{pane_id}"],
      s = n ? await l(r) : await d(r);
    if (s.code !== 0) {
      if (t(`[TmuxBackend] Failed to get pane count for ${a} (exit ${s.code}): ${s.stderr}`, {
        level: "error"
      }), a === this.cachedLeaderWindowTarget) this.cachedLeaderWindowTarget = null;
      return null;
    }
    return F(s.stdout.trim().split(`
`), Boolean);
  }
  async hasSessionInSwarm(e) {
    return (await l(["has-session", "-t", e])).code === 0;
  }
  async createExternalSwarmSession() {
    if (!(await this.hasSessionInSwarm(Ile))) {
      let o = await l(["new-session", "-d", "-s", Ile, "-n", Fcn, "-P", "-F", "#{pane_id}", "--", uQe], {
        useCwd: !0,
        toolCgroupClass: "agent"
      });
      if (o.code !== 0) throw new wj(`Failed to create swarm session: ${o.stderr || "Unknown error"}`);
      let paneId = o.stdout.trim(),
        windowTarget = `${Ile}:${Fcn}`;
      return t(`[TmuxBackend] Created external swarm session with window ${windowTarget}, pane ${paneId}`), this.firstPaneUsedForExternal = !1, {
        windowTarget: windowTarget,
        paneId: paneId
      };
    }
    let a = (await l(["list-windows", "-t", Ile, "-F", "#{window_name}"])).stdout.trim().split(`
`).filter(Boolean),
      windowTarget_2 = `${Ile}:${Fcn}`;
    if (a.includes(Fcn)) {
      let i = (await l(["list-panes", "-t", windowTarget_2, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
      return {
        windowTarget: windowTarget_2,
        paneId: i[0] || ""
      };
    }
    let s = await l(["new-window", "-t", Ile, "-n", Fcn, "-P", "-F", "#{pane_id}", "--", uQe]);
    if (s.code !== 0) throw new wj(`Failed to create swarm-view window: ${s.stderr || "Unknown error"}`);
    return this.firstPaneUsedForExternal = !1, {
      windowTarget: windowTarget_2,
      paneId: s.stdout.trim()
    };
  }
  async createTeammatePaneWithLeader(e, n) {
    let a = await this.getCurrentPaneId(),
      r = await this.getCurrentWindowTarget();
    if (!a || !r) throw new wj("Could not determine current tmux pane/window");
    let s = await this.getCurrentWindowPaneCount(r);
    if (s === null) throw new wj("Could not determine pane count for current window");
    let isFirstTeammate = s === 1,
      i;
    if (isFirstTeammate) i = await d(["split-window", "-d", "-t", a, "-h", "-l", "70%", "-P", "-F", "#{pane_id}", "--", uQe]);else {
      let c = (await d(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean).slice(1),
        g = c.length,
        P = g % 2 === 1,
        w = Math.floor((g - 1) / 2),
        x = c[w] || c.at(-1);
      i = await d(["split-window", "-d", "-t", x, P ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", uQe]);
    }
    if (i.code !== 0) throw new wj(h(i.stderr));
    let paneId_2 = i.stdout.trim();
    return t(`[TmuxBackend] Created teammate pane for ${e}: ${paneId_2}`), await this.setPaneBorderColor(paneId_2, n), await this.setPaneTitle(paneId_2, e, n), await this.rebalancePanesWithLeader(r), {
      paneId: paneId_2,
      isFirstTeammate: isFirstTeammate
    };
  }
  async createTeammatePaneExternal(e, n) {
    let {
        windowTarget: windowTarget_3,
        paneId: paneId_3
      } = await this.createExternalSwarmSession(),
      s = await this.getCurrentWindowPaneCount(windowTarget_3, !0);
    if (s === null) throw new wj("Could not determine pane count for swarm window");
    let isFirstTeammate_2 = !this.firstPaneUsedForExternal && s === 1,
      paneId_4;
    if (isFirstTeammate_2) paneId_4 = paneId_3, this.firstPaneUsedForExternal = !0, t(`[TmuxBackend] Using initial pane for first teammate ${e}: ${paneId_4}`), await this.enablePaneBorderStatus(windowTarget_3, !0);else {
      let p = (await l(["list-panes", "-t", windowTarget_3, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean),
        f = p.length,
        c = f % 2 === 1,
        g = Math.floor((f - 1) / 2),
        P = p[g] || p.at(-1),
        w = await l(["split-window", "-d", "-t", P, c ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", uQe]);
      if (w.code !== 0) throw new wj(h(w.stderr));
      paneId_4 = w.stdout.trim(), t(`[TmuxBackend] Created teammate pane for ${e}: ${paneId_4}`);
    }
    return await this.setPaneBorderColor(paneId_4, n, !0), await this.setPaneTitle(paneId_4, e, n, !0), await this.rebalancePanesTiled(windowTarget_3), {
      paneId: paneId_4,
      isFirstTeammate: isFirstTeammate_2
    };
  }
  async rebalancePanesWithLeader(e) {
    let a = (await d(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (a.length <= 2) return;
    await d(["select-layout", "-t", e, "main-vertical"]);
    let r = a[0];
    await d(["resize-pane", "-t", r, "-x", "30%"]), t(`[TmuxBackend] Rebalanced ${a.length - 1} teammate panes with leader`);
  }
  async rebalancePanesTiled(e) {
    let a = (await l(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (a.length <= 1) return;
    await l(["select-layout", "-t", e, "tiled"]), t(`[TmuxBackend] Rebalanced ${a.length} teammate panes with tiled layout`);
  }
}
export { Lfr, z8s };