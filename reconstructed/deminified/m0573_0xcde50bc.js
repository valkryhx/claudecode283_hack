// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { go } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Fv } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { vp, cv, ry, oy, Mi, qW } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { Si, hb, nc, r2 } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Eo } from "B:/~BUN/root/chunk-8zp66ckr.js";
import { xR, xDt, lln } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { tdo, _p, ru } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Kl } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { Ig } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { Tp } from "B:/~BUN/root/chunk-196w7fz7.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { IH } from "B:/~BUN/root/chunk-k1r60xrk.js";
import { UK } from "B:/~BUN/root/chunk-wkrgyaen.js";
import { eg } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { Wwn, zwn, Gwn, Mj, wGt, Vwn, aje, qwn, kGt, zZn, GZn, Y2, Ywn, Xwn, CGt } from "B:/~BUN/root/chunk-4hj9afs7.js";
import { uO } from "B:/~BUN/root/chunk-zfm0jkby.js";
import { hvt, _ze, V3t } from "B:/~BUN/root/chunk-tvk6phkz.js";
import { Hd, p9 } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { Vt, Pe, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var F = 120000,
  B = 1800000,
  D = 1e4;
function C(e) {
  return !I(e) && e.tempo === "blocked" && e.needs !== ry;
}
function I(e) {
  return Mi(e) && !(oy(e.state) === "success" && qW(e));
}
class ZPe {
  #l;
  #c;
  #i = void 0;
  #m = Me();
  #d = 0;
  #s = !1;
  #u = !0;
  #e = null;
  #t = null;
  #a = !1;
  #o = 0;
  #n = null;
  #g;
  constructor(e) {
    this.#l = e?.sweepMs ?? D, this.#c = e?.ignoredAfterMs ?? B;
    let n = e?.storageV5;
    this.#g = () => cv(void 0, n);
  }
  getSnapshot = () => this.#i;
  subscribe = e => {
    let n = this.#m.subscribe(e);
    if (this.#d++, !this.#s) if (this.#s = !0, this.#i === void 0) this.#r();else this.#e = setTimeout(() => void this.#r(), this.#l), this.#e.unref();
    let o = !1;
    return () => {
      if (o) return;
      if (o = !0, n(), this.#d--, this.#d === 0) this.#k();
    };
  };
  refetch = () => this.#r();
  async quiesce() {
    while (this.#t) await this.#t;
  }
  setFocused(e) {
    if (e === this.#u) return;
    if (this.#u = e, !this.#s) return;
    if (e) this.#r();else this.#f();
  }
  recordOpenViaLeft() {
    if (this.#p(), this.#o > 0 && Date.now() - this.#o <= F) _("fleet_needs_input_nudge"), this.#o = 0;
    return this.#i;
  }
  #r() {
    if (this.#f(), this.#t) return this.#a = !0, this.#t;
    return this.#t = this.#h().finally(() => {
      if (this.#t = null, this.#a) this.#a = !1, this.#r();
    }), this.#t;
  }
  async #h() {
    let e;
    try {
      e = await this.#g();
    } catch {
      e = [];
    }
    if (!this.#s) return;
    let n = 0,
      o = 0,
      s = 0,
      h = 0,
      u = vp();
    for (let c of e) {
      if (c.id === u) continue;
      if (I(c.state)) {
        if (o++, oy(c.state.state) === "success") s++;
        continue;
      }
      if (h++, C(c.state)) n++;
    }
    if (n === 0) this.#p(), this.#o = 0;
    let f = this.#i;
    if (f?.needsInput !== n || f?.done !== o || f?.succeeded !== s) {
      let increased = f !== void 0 && n > f.needsInput;
      if (this.#i = {
        needsInput: n,
        done: o,
        succeeded: s
      }, i("tengu_fleet_nudge_state", {
        needs_input_count: n,
        done_count: o,
        succeeded_count: s,
        increased: increased
      }), increased) this.#o = Date.now(), this.#S();
      this.#m.emit();
    }
    if (h > 0 && this.#u) this.#e = setTimeout(() => void this.#r(), this.#l), this.#e.unref();
  }
  #S() {
    this.#p(), this.#n = setTimeout(() => {
      this.#n = null, p("fleet_needs_input_nudge", "ignored"), this.#o = 0;
    }, this.#c), this.#n.unref();
  }
  #f() {
    if (this.#e) clearTimeout(this.#e), this.#e = null;
  }
  #p() {
    if (this.#n) clearTimeout(this.#n), this.#n = null;
  }
  #k() {
    this.#f(), this.#a = !1, this.#s = !1;
  }
}
function xqo(e, storageV5) {
  return e.fleetNudgeStore ??= new ZPe({
    storageV5: storageV5
  }), e.fleetNudgeStore;
}
var bGt = Vt(null);
function OJe() {
  let e = Pe(bGt);
  if (!e) throw ReferenceError("useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}
var projectsSelfIdentity = {
  accountKey: null,
  ownMessageIds: [],
  wireAccountId: null
};
function MJe() {
  return {
    ...IH(),
    taskDecorations: {},
    prStatus: null,
    prNeedsAuth: !1,
    expandedView: "none",
    replTab: "convo",
    panelFileView: null,
    diffPanelVisible: !1,
    paneHoldsToasts: !1,
    coordinatorTaskIndex: -1,
    workflowFooterIndex: 0,
    viewSelectionMode: "none",
    queueEditIndex: null,
    footerSelection: null,
    footerLinks: [],
    remoteSessionUrl: void 0,
    projectsSelfIdentity: projectsSelfIdentity,
    remoteConnectionStatus: "connecting",
    remoteModeSessions: {},
    remoteBootstrap: null,
    remoteBackgroundTasks: [],
    workerInventory: null,
    hasRemoteReplyChannel: !1,
    replBridgeAutoOnByDefault: !1,
    replBridgeConnected: !1,
    replBridgeReconnecting: !1,
    replBridgeConnectUrl: void 0,
    replBridgeSessionUrl: void 0,
    replBridgeEnvironmentId: void 0,
    replBridgeSessionId: void 0,
    replBridgeError: void 0,
    replBridgeErrorKind: void 0,
    replBridgeInitialName: void 0,
    setupIssues: {
      settingsErrorCount: 0,
      lspFailedCount: 0,
      marketplaceIssueCount: 0,
      chromeExtensionIssueCount: 0,
      sandboxIssueCount: 0,
      statuslineIssueCount: 0,
      flaggedPluginCount: 0,
      modelDeprecationWarning: null,
      modelRestrictedWarning: null,
      existingClaudeSubscription: null
    },
    notifications: {
      current: null,
      queue: [],
      pinned: []
    },
    autoUpdaterResult: null,
    activeOverlays: new Set()
  };
}
function L(e) {
  let {
    bySlug: bySlug
  } = V3t();
  if (bySlug.size === 0) return e;
  return e.map(item => {
    let unattendedReplies = Math.min((bySlug.get(item.slug) ?? 0) + (item.unattendedReplies ?? 0), _ze);
    return unattendedReplies > 0 ? {
      ...item,
      unattendedReplies: unattendedReplies
    } : item;
  });
}
var P = 2000,
  R = "exit-handoff agent flush timeout";
function A() {
  let last = UK.of(j().host).last;
  return [...(hb()?.adoptShellOutputReadRoot ? [hb().adoptShellOutputReadRoot] : []), ...(last ? [xDt(lln(last.worktreePath))] : [])];
}
function x(e) {
  let jobDir = nc() ? r2() : void 0;
  if (!jobDir || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (jobDir) {
      let live = ee().live;
      if (kGt(jobDir), live.bootingWiredArms.size > 0) p("artifact_live_subscribe", "booting_consent_uncarried");
      hvt(live.inFlightSubscribes);
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: hb()?.adoptShellOutputRoot ?? xR(),
      mergeShellOutputReadRoots: A()
    };
  }
  let o = Y2(e),
    s = Object.values(e),
    workflows = s.filter(item => CGt(item, o)),
    agents = s.filter(item => Xwn(item, o)),
    f = qwn(jobDir),
    c = r => !ee().autoReact.userDisarmed && !eg(r.slug),
    y = kGt(jobDir),
    frameLive = L(Vwn([{
      entries: wGt(e),
      fallbackBasis: Date.now()
    }, {
      entries: y.filter(c),
      fallbackBasis: Date.now()
    }, {
      entries: GZn(jobDir).filter(c),
      fallbackBasis: Date.now()
    }])),
    k = new Set(frameLive.map(item => item.slug)),
    live_2 = ee().live;
  if ([...live_2.bootingWiredArms.keys()].some(item => !k.has(item))) p("artifact_live_subscribe", "booting_consent_uncarried");
  return hvt(new Set([...k, ...live_2.inFlightSubscribes])), {
    shells: s.filter(item => Ywn(item, o) && item.agentId === void 0),
    workflows: workflows,
    agents: agents,
    unresumedAgents: f.agents,
    unresumedWorkflows: f.workflows,
    frameLive: frameLive,
    frameLiveTaskIds: Object.values(e).filter(item => Mj(item) && item.frameLive !== void 0 && k.has(item.frameLive.slug)).map(item => item.id),
    jobDir: jobDir,
    agentTranscriptPaths: Object.fromEntries(agents.map(item => [item.agentId, Ig(go(item.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(workflows.map(item => [item.workflowRunId, uO(item.workflowRunId)])),
    projectTempDir: hb()?.adoptShellOutputRoot ?? xR(),
    mergeShellOutputReadRoots: A()
  };
}
function E({
  shells: shells,
  workflows: workflows_2,
  agents: agents_2,
  unresumedAgents: unresumedAgents,
  unresumedWorkflows: unresumedWorkflows,
  frameLive: frameLive_2,
  jobDir: jobDir_2,
  agentTranscriptPaths: agentTranscriptPaths,
  workflowTranscriptDirs: workflowTranscriptDirs,
  projectTempDir: S,
  mergeShellOutputReadRoots: mergeShellOutputReadRoots
}, T) {
  for (let g of workflows_2) g.abortController?.abort(Kl("background"));
  for (let g of agents_2) g.abortController?.abort(Kl("background"));
  let r = (async () => {
    let agents_3 = [];
    if (agents_2.length > 0) {
      try {
        await Ht((async () => {
          await Fv(), await ru();
        })(), P, R);
      } catch (error) {
        let v = error instanceof Error && error.message === R;
        p("task_local_agent_exit_handoff", v ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${error}`, {
          level: "warn"
        });
      }
      agents_3 = await Promise.all(agents_2.map(item => zwn(item, {
        derivedTranscriptPath: agentTranscriptPaths[item.agentId]
      })));
    }
    agents_3.push(...unresumedAgents);
    let shells_2 = (await Promise.all(shells.map(item => Wwn(item, {
        rerootOutputsTo: S
      })))).filter(item => item !== null),
      workflows_3 = [...(await Promise.all(workflows_2.map(item => Gwn(item, {
        derivedTranscriptDir: workflowTranscriptDirs[item.workflowRunId]
      })))), ...unresumedWorkflows];
    if (shells_2.length === 0 && workflows_3.length === 0 && agents_3.length === 0 && frameLive_2.length === 0 || !jobDir_2) return;
    try {
      if (await aje(jobDir_2, {
        writtenAtMs: Date.now(),
        origin: "exit",
        shells: shells_2,
        cron: [],
        workflows: workflows_3,
        agents: agents_3,
        ...(frameLive_2.length > 0 && {
          frameLive: frameLive_2
        })
      }, {
        mergeShellOutputRoot: [S, ...(mergeShellOutputReadRoots ?? [])]
      }, T), i("tengu_adopt_exit_handoff", {
        adopted_shells: shells_2.length,
        adopted_workflows: workflows_3.length,
        adopted_agents: agents_3.length,
        adopted_frame_live: frameLive_2.length
      }), shells_2.length > 0) _("task_local_shell_exit_handoff");
      if (workflows_3.length > 0) _("task_local_workflow_exit_handoff");
      if (agents_3.length > 0) _("task_local_agent_exit_handoff");
      t(`exit handoff: ${shells_2.length} background shell(s), ${workflows_3.length} workflow(s), ${agents_3.length} agent(s), and ${frameLive_2.length} comment-monitoring consent record(s) handed to the next wake of this session`);
    } catch (error) {
      for (let v of shells) try {
        v.shellCommand?.kill();
      } catch {}
      if (shells.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (workflows_2.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (agents_3.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (frameLive_2.length > 0 && jobDir_2 !== void 0) zZn(jobDir_2, frameLive_2), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${error}`, {
        level: "warn"
      });
    }
  })();
  return tdo(r), r;
}
function Myt(e, n) {
  let o = x(e),
    s = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? E(o, n) : void 0,
    h = new Set([...o.shells, ...o.workflows, ...o.agents].map(item => item.id));
  return Bwn(e, h), s;
}
function Bwn(e, n = new Set()) {
  for (let o of Object.values(e)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (_p(o)) o.shellCommand?.kill(), o.shellCommand?.cleanup();else if (Eo()) {
        Tp(o.id);
        continue;
      } else if ("abortController" in o) o.abortController?.abort();
      if (!Hd(o)) Si(o.id, "stopped", {
        toolUseId: o.toolUseId,
        summary: o.description,
        ambient: p9(o)
      });
      Tp(o.id);
    } catch (error) {
      d(error);
    }
  }
}
export { ZPe, xqo, bGt, OJe, Myt, Bwn, projectsSelfIdentity as jwn, MJe };