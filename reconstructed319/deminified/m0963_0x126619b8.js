// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pr } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Em } from "B:/~BUN/root/chunk-ke150ry1.js";
import { $l } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ku } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { za, tb, wc, aH } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { _n } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { Fhi, tu } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ql } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { eO, ONn, SEr } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Kp } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { pZ, nm, _2 } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { yle } from "B:/~BUN/root/chunk-ab1ryk8w.js";
import { qWr, YWr, XWr, j7, h5n, JWr, qvt, QWr, y5n, PHo, OHo, Tne, ezr, tzr, b5n } from "B:/~BUN/root/chunk-s3ja9yx6.js";
import { xK } from "B:/~BUN/root/chunk-q42n6mwr.js";
import { Dbn, gCt, hZn } from "B:/~BUN/root/chunk-xp5ya8v1.js";
import { hb } from "B:/~BUN/root/chunk-dq64svjd.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function F(r) {
  let {
    bySlug: bySlug
  } = hZn();
  if (bySlug.size === 0) return r;
  return r.map(item => {
    let unattendedReplies = Math.min((bySlug.get(item.slug) ?? 0) + (item.unattendedReplies ?? 0), gCt);
    return unattendedReplies > 0 ? {
      ...item,
      unattendedReplies: unattendedReplies
    } : item;
  });
}
var O = 2000,
  R = "exit-handoff agent flush timeout";
function y() {
  let last = yle.of(H().host).last;
  return [...(tb()?.adoptShellOutputReadRoot ? [tb().adoptShellOutputReadRoot] : []), ...(last ? [ONn(SEr(last.worktreePath))] : [])];
}
function E(r) {
  let jobDir = wc() ? aH() : void 0,
    wakeOnlyFrameLiveSlugs = jobDir && te().builtInArtifactHiddenForMcp ? L([...Array.from(te().live.supervisors.values()).filter(item => item.autoReactWiring !== void 0).map(item => item.slug), ...Object.values(r).flatMap(item => item.type === "monitor_ws" && item.status === "running" && item.autoReactArmed === !0 && item.frameLive !== void 0 ? [item.frameLive.slug] : [])]) : [];
  if (!jobDir || i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (jobDir) {
      let live = te().live;
      if (y5n(jobDir), live.bootingWiredArms.size > 0) c("artifact_live_subscribe", "booting_consent_uncarried");
      Dbn(new Set([...live.inFlightSubscribes, ...wakeOnlyFrameLiveSlugs]));
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      wakeOnlyFrameLiveSlugs: wakeOnlyFrameLiveSlugs,
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: tb()?.adoptShellOutputRoot ?? eO(),
      mergeShellOutputReadRoots: y()
    };
  }
  let f = Tne(r),
    p = Object.values(r),
    workflows = p.filter(item => b5n(item, f)),
    agents = p.filter(item => tzr(item, f)),
    S = QWr(jobDir),
    T = e => !te().autoReact.userDisarmed && !hb(e.slug),
    b = y5n(jobDir),
    frameLive = F(JWr([{
      entries: h5n(r),
      fallbackBasis: Date.now()
    }, {
      entries: b.filter(T),
      fallbackBasis: Date.now()
    }, {
      entries: OHo(jobDir).filter(T),
      fallbackBasis: Date.now()
    }])),
    h = new Set(frameLive.map(item => item.slug)),
    live_2 = te().live;
  if ([...live_2.bootingWiredArms.keys()].some(item => !h.has(item))) c("artifact_live_subscribe", "booting_consent_uncarried");
  return Dbn(new Set([...h, ...live_2.inFlightSubscribes, ...wakeOnlyFrameLiveSlugs])), {
    shells: p.filter(item => ezr(item, f) && item.agentId === void 0),
    workflows: workflows,
    agents: agents,
    unresumedAgents: S.agents,
    unresumedWorkflows: S.workflows,
    frameLive: frameLive,
    frameLiveTaskIds: Object.values(r).filter(item => j7(item) && item.frameLive !== void 0 && h.has(item.frameLive.slug)).map(item => item.id),
    wakeOnlyFrameLiveSlugs: wakeOnlyFrameLiveSlugs,
    jobDir: jobDir,
    agentTranscriptPaths: Object.fromEntries(agents.map(item => [item.agentId, Em(Pr(item.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(workflows.map(item => [item.workflowRunId, xK(item.workflowRunId)])),
    projectTempDir: tb()?.adoptShellOutputRoot ?? eO(),
    mergeShellOutputReadRoots: y()
  };
}
function x({
  shells: shells,
  workflows: workflows_2,
  agents: agents_2,
  unresumedAgents: unresumedAgents,
  unresumedWorkflows: unresumedWorkflows,
  frameLive: frameLive_2,
  jobDir: jobDir_2,
  agentTranscriptPaths: agentTranscriptPaths,
  workflowTranscriptDirs: workflowTranscriptDirs,
  projectTempDir: b,
  mergeShellOutputReadRoots: mergeShellOutputReadRoots
}, h) {
  for (let e of workflows_2) e.abortController?.abort($l("background"));
  for (let e of agents_2) e.abortController?.abort($l("background"));
  let k = (async () => {
    let agents_3 = [];
    if (agents_2.length > 0) {
      try {
        await zt((async () => {
          await ku(), await tu();
        })(), O, R);
      } catch (error) {
        let A = error instanceof Error && error.message === R;
        c("task_local_agent_exit_handoff", A ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${error}`, {
          level: "warn"
        });
      }
      agents_3 = await Promise.all(agents_2.map(item => YWr(item, {
        derivedTranscriptPath: agentTranscriptPaths[item.agentId]
      })));
    }
    agents_3.push(...unresumedAgents);
    let shells_2 = (await Promise.all(shells.map(item => qWr(item, {
        rerootOutputsTo: b
      })))).filter(item => item !== null),
      workflows_3 = [...(await Promise.all(workflows_2.map(item => XWr(item, {
        derivedTranscriptDir: workflowTranscriptDirs[item.workflowRunId]
      })))), ...unresumedWorkflows];
    if (shells_2.length === 0 && workflows_3.length === 0 && agents_3.length === 0 && frameLive_2.length === 0 || !jobDir_2) return;
    try {
      if (await qvt(jobDir_2, {
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
        mergeShellOutputRoot: [b, ...(mergeShellOutputReadRoots ?? [])]
      }, h), l("tengu_adopt_exit_handoff", {
        adopted_shells: shells_2.length,
        adopted_workflows: workflows_3.length,
        adopted_agents: agents_3.length,
        adopted_frame_live: frameLive_2.length
      }), shells_2.length > 0) g("task_local_shell_exit_handoff");
      if (workflows_3.length > 0) g("task_local_workflow_exit_handoff");
      if (agents_3.length > 0) g("task_local_agent_exit_handoff");
      t(`exit handoff: ${shells_2.length} background shell(s), ${workflows_3.length} workflow(s), ${agents_3.length} agent(s), and ${frameLive_2.length} comment-monitoring consent record(s) handed to the next wake of this session`);
    } catch (error) {
      for (let A of shells) try {
        A.shellCommand?.kill();
      } catch {}
      if (shells.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (workflows_2.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (agents_3.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (frameLive_2.length > 0 && jobDir_2 !== void 0) PHo(jobDir_2, frameLive_2), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${error}`, {
        level: "warn"
      });
    }
  })();
  return Fhi(k), k;
}
function Kmn(r, n) {
  let o = E(r),
    f = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? x(o, n) : void 0,
    p = new Set([...o.shells, ...o.workflows, ...o.agents].map(item => item.id));
  return GWr(r, p), f;
}
function GWr(r, n = new Set()) {
  for (let o of Object.values(r)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (Ql(o)) o.shellCommand?.kill(_n() ? {
        cause: "session_exit"
      } : void 0), o.shellCommand?.cleanup();else if (_n()) {
        Kp(o.id);
        continue;
      } else if ("abortController" in o) o.abortController?.abort();
      if (!(le() && pZ(o)) && !nm(o)) za(o.id, "stopped", {
        toolUseId: o.toolUseId,
        summary: o.description,
        ambient: _2(o)
      });
      Kp(o.id);
    } catch (error) {
      a(error);
    }
  }
}
export { Kmn, GWr };