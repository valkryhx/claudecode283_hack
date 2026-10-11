// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  go
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  Fv
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  vp,
  cv,
  ry,
  oy,
  Mi,
  qW
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
import {
  Si,
  hb,
  nc,
  r2
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Eo
} from "B:/~BUN/root/chunk-8zp66ckr.js";
import {
  xR,
  xDt,
  lln
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  tdo,
  _p,
  ru
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Kl
} from "B:/~BUN/root/chunk-hqrtayw5.js";
import {
  Ig
} from "B:/~BUN/root/chunk-06ra9xdn.js";
import {
  Tp
} from "B:/~BUN/root/chunk-196w7fz7.js";
import {
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  IH
} from "B:/~BUN/root/chunk-k1r60xrk.js";
import {
  UK
} from "B:/~BUN/root/chunk-wkrgyaen.js";
import {
  eg
} from "B:/~BUN/root/chunk-1mdmjaqt.js";
import {
  Wwn,
  zwn,
  Gwn,
  Mj,
  wGt,
  Vwn,
  aje,
  qwn,
  kGt,
  zZn,
  GZn,
  Y2,
  Ywn,
  Xwn,
  CGt
} from "B:/~BUN/root/chunk-4hj9afs7.js";
import {
  uO
} from "B:/~BUN/root/chunk-zfm0jkby.js";
import {
  hvt,
  _ze,
  V3t
} from "B:/~BUN/root/chunk-tvk6phkz.js";
import {
  Hd,
  p9
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  Vt,
  Pe,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var F = 120000,
  B = 1800000,
  D = 1e4;

function C(e) {
  return !I(e) && e.tempo === "blocked" && e.needs !== ry
}

function I(e) {
  return Mi(e) && !(oy(e.state) === "success" && qW(e))
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
    this.#g = () => cv(void 0, n)
  }
  getSnapshot = () => this.#i;
  subscribe = (e) => {
    let n = this.#m.subscribe(e);
    if (this.#d++, !this.#s)
      if (this.#s = !0, this.#i === void 0) this.#r();
      else this.#e = setTimeout(() => void this.#r(), this.#l), this.#e.unref();
    let o = !1;
    return () => {
      if (o) return;
      if (o = !0, n(), this.#d--, this.#d === 0) this.#k()
    }
  };
  refetch = () => this.#r();
  async quiesce() {
    while (this.#t) await this.#t
  }
  setFocused(e) {
    if (e === this.#u) return;
    if (this.#u = e, !this.#s) return;
    if (e) this.#r();
    else this.#f()
  }
  recordOpenViaLeft() {
    if (this.#p(), this.#o > 0 && Date.now() - this.#o <= F) _("fleet_needs_input_nudge"), this.#o = 0;
    return this.#i
  }
  #r() {
    if (this.#f(), this.#t) return this.#a = !0, this.#t;
    return this.#t = this.#h().finally(() => {
      if (this.#t = null, this.#a) this.#a = !1, this.#r()
    }), this.#t
  }
  async #h() {
    let e;
    try {
      e = await this.#g()
    } catch {
      e = []
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
        continue
      }
      if (h++, C(c.state)) n++
    }
    if (n === 0) this.#p(), this.#o = 0;
    let f = this.#i;
    if (f?.needsInput !== n || f?.done !== o || f?.succeeded !== s) {
      let c = f !== void 0 && n > f.needsInput;
      if (this.#i = {
          needsInput: n,
          done: o,
          succeeded: s
        }, i("tengu_fleet_nudge_state", {
          needs_input_count: n,
          done_count: o,
          succeeded_count: s,
          increased: c
        }), c) this.#o = Date.now(), this.#S();
      this.#m.emit()
    }
    if (h > 0 && this.#u) this.#e = setTimeout(() => void this.#r(), this.#l), this.#e.unref()
  }
  #S() {
    this.#p(), this.#n = setTimeout(() => {
      this.#n = null, p("fleet_needs_input_nudge", "ignored"), this.#o = 0
    }, this.#c), this.#n.unref()
  }
  #f() {
    if (this.#e) clearTimeout(this.#e), this.#e = null
  }
  #p() {
    if (this.#n) clearTimeout(this.#n), this.#n = null
  }
  #k() {
    this.#f(), this.#a = !1, this.#s = !1
  }
}

function xqo(e, n) {
  return e.fleetNudgeStore ??= new ZPe({
    storageV5: n
  }), e.fleetNudgeStore
}
var bGt = Vt(null);

function OJe() {
  let e = Pe(bGt);
  if (!e) throw ReferenceError("useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)");
  return e
}
var jwn = {
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
    projectsSelfIdentity: jwn,
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
    activeOverlays: new Set
  }
}

function L(e) {
  let {
    bySlug: n
  } = V3t();
  if (n.size === 0) return e;
  return e.map((o) => {
    let s = Math.min((n.get(o.slug) ?? 0) + (o.unattendedReplies ?? 0), _ze);
    return s > 0 ? {
      ...o,
      unattendedReplies: s
    } : o
  })
}
var P = 2000,
  R = "exit-handoff agent flush timeout";

function A() {
  let e = UK.of(j().host).last;
  return [...hb()?.adoptShellOutputReadRoot ? [hb().adoptShellOutputReadRoot] : [], ...e ? [xDt(lln(e.worktreePath))] : []]
}

function x(e) {
  let n = nc() ? r2() : void 0;
  if (!n || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let r = ee().live;
      if (kGt(n), r.bootingWiredArms.size > 0) p("artifact_live_subscribe", "booting_consent_uncarried");
      hvt(r.inFlightSubscribes)
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
    }
  }
  let o = Y2(e),
    s = Object.values(e),
    h = s.filter((r) => CGt(r, o)),
    u = s.filter((r) => Xwn(r, o)),
    f = qwn(n),
    c = (r) => !ee().autoReact.userDisarmed && !eg(r.slug),
    y = kGt(n),
    S = L(Vwn([{
      entries: wGt(e),
      fallbackBasis: Date.now()
    }, {
      entries: y.filter(c),
      fallbackBasis: Date.now()
    }, {
      entries: GZn(n).filter(c),
      fallbackBasis: Date.now()
    }])),
    k = new Set(S.map((r) => r.slug)),
    T = ee().live;
  if ([...T.bootingWiredArms.keys()].some((r) => !k.has(r))) p("artifact_live_subscribe", "booting_consent_uncarried");
  return hvt(new Set([...k, ...T.inFlightSubscribes])), {
    shells: s.filter((r) => Ywn(r, o) && r.agentId === void 0),
    workflows: h,
    agents: u,
    unresumedAgents: f.agents,
    unresumedWorkflows: f.workflows,
    frameLive: S,
    frameLiveTaskIds: Object.values(e).filter((r) => Mj(r) && r.frameLive !== void 0 && k.has(r.frameLive.slug)).map((r) => r.id),
    jobDir: n,
    agentTranscriptPaths: Object.fromEntries(u.map((r) => [r.agentId, Ig(go(r.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(h.map((r) => [r.workflowRunId, uO(r.workflowRunId)])),
    projectTempDir: hb()?.adoptShellOutputRoot ?? xR(),
    mergeShellOutputReadRoots: A()
  }
}

function E({
  shells: e,
  workflows: n,
  agents: o,
  unresumedAgents: s,
  unresumedWorkflows: h,
  frameLive: u,
  jobDir: f,
  agentTranscriptPaths: c,
  workflowTranscriptDirs: y,
  projectTempDir: S,
  mergeShellOutputReadRoots: k
}, T) {
  for (let g of n) g.abortController?.abort(Kl("background"));
  for (let g of o) g.abortController?.abort(Kl("background"));
  let r = (async () => {
    let g = [];
    if (o.length > 0) {
      try {
        await Ht((async () => {
          await Fv(), await ru()
        })(), P, R)
      } catch (l) {
        let v = l instanceof Error && l.message === R;
        p("task_local_agent_exit_handoff", v ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${l}`, {
          level: "warn"
        })
      }
      g = await Promise.all(o.map((l) => zwn(l, {
        derivedTranscriptPath: c[l.agentId]
      })))
    }
    g.push(...s);
    let w = (await Promise.all(e.map((l) => Wwn(l, {
        rerootOutputsTo: S
      })))).filter((l) => l !== null),
      b = [...await Promise.all(n.map((l) => Gwn(l, {
        derivedTranscriptDir: y[l.workflowRunId]
      }))), ...h];
    if (w.length === 0 && b.length === 0 && g.length === 0 && u.length === 0 || !f) return;
    try {
      if (await aje(f, {
          writtenAtMs: Date.now(),
          origin: "exit",
          shells: w,
          cron: [],
          workflows: b,
          agents: g,
          ...u.length > 0 && {
            frameLive: u
          }
        }, {
          mergeShellOutputRoot: [S, ...k ?? []]
        }, T), i("tengu_adopt_exit_handoff", {
          adopted_shells: w.length,
          adopted_workflows: b.length,
          adopted_agents: g.length,
          adopted_frame_live: u.length
        }), w.length > 0) _("task_local_shell_exit_handoff");
      if (b.length > 0) _("task_local_workflow_exit_handoff");
      if (g.length > 0) _("task_local_agent_exit_handoff");
      t(`exit handoff: ${w.length} background shell(s), ${b.length} workflow(s), ${g.length} agent(s), and ${u.length} comment-monitoring consent record(s) handed to the next wake of this session`)
    } catch (l) {
      for (let v of e) try {
        v.shellCommand?.kill()
      } catch {}
      if (e.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (g.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (u.length > 0 && f !== void 0) zZn(f, u), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${l}`, {
        level: "warn"
      })
    }
  })();
  return tdo(r), r
}

function Myt(e, n) {
  let o = x(e),
    s = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? E(o, n) : void 0,
    h = new Set([...o.shells, ...o.workflows, ...o.agents].map((u) => u.id));
  return Bwn(e, h), s
}

function Bwn(e, n = new Set) {
  for (let o of Object.values(e)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (_p(o)) o.shellCommand?.kill(), o.shellCommand?.cleanup();
      else if (Eo()) {
        Tp(o.id);
        continue
      } else if ("abortController" in o) o.abortController?.abort();
      if (!Hd(o)) Si(o.id, "stopped", {
        toolUseId: o.toolUseId,
        summary: o.description,
        ambient: p9(o)
      });
      Tp(o.id)
    } catch (s) {
      d(s)
    }
  }
}
export {
  ZPe,
  xqo,
  bGt,
  OJe,
  Myt,
  Bwn,
  jwn,
  MJe
};
