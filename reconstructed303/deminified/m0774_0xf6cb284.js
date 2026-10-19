// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vr } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ig } from "B:/~BUN/root/chunk-9080897a.js";
import { jl } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Yg } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { _a, A_, Qd, FM } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { bn } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { Tus, zp, Mu } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { _O, wsn, MVn } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Pp } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { Yu, I9 } from "B:/~BUN/root/chunk-k382hx6g.js";
import { s7 } from "B:/~BUN/root/chunk-bjn0ckra.js";
import { Kh } from "B:/~BUN/root/chunk-4bgwjb4z.js";
import { unr, pnr, fnr, pY, Awn, mnr, wnt, gnr, Pwn, ZKr, e4r, g8, ynr, _nr, Iwn } from "B:/~BUN/root/chunk-t0dcjzj9.js";
import { k1 } from "B:/~BUN/root/chunk-0eewnx21.js";
import { LYt, Lot, UAn } from "B:/~BUN/root/chunk-5qc8qrsy.js";
function x(r) {
  let {
    bySlug: bySlug
  } = UAn();
  if (bySlug.size === 0) return r;
  return r.map(item => {
    let unattendedReplies = Math.min((bySlug.get(item.slug) ?? 0) + (item.unattendedReplies ?? 0), Lot);
    return unattendedReplies > 0 ? {
      ...item,
      unattendedReplies: unattendedReplies
    } : item;
  });
}
var F = 2000,
  R = "exit-handoff agent flush timeout";
function y() {
  let last = s7.of(j().host).last;
  return [...(A_()?.adoptShellOutputReadRoot ? [A_().adoptShellOutputReadRoot] : []), ...(last ? [wsn(MVn(last.worktreePath))] : [])];
}
function L(r) {
  let jobDir = Qd() ? FM() : void 0;
  if (!jobDir || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (jobDir) {
      let live = ee().live;
      if (Pwn(jobDir), live.bootingWiredArms.size > 0) p("artifact_live_subscribe", "booting_consent_uncarried");
      LYt(live.inFlightSubscribes);
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
      projectTempDir: A_()?.adoptShellOutputRoot ?? _O(),
      mergeShellOutputReadRoots: y()
    };
  }
  let e = g8(r),
    d = Object.values(r),
    workflows = d.filter(item => Iwn(item, e)),
    agents = d.filter(item => _nr(item, e)),
    u = gnr(jobDir),
    T = o => !ee().autoReact.userDisarmed && !Kh(o.slug),
    A = Pwn(jobDir),
    frameLive = x(mnr([{
      entries: Awn(r),
      fallbackBasis: Date.now()
    }, {
      entries: A.filter(T),
      fallbackBasis: Date.now()
    }, {
      entries: e4r(jobDir).filter(T),
      fallbackBasis: Date.now()
    }])),
    w = new Set(frameLive.map(item => item.slug)),
    live_2 = ee().live;
  if ([...live_2.bootingWiredArms.keys()].some(item => !w.has(item))) p("artifact_live_subscribe", "booting_consent_uncarried");
  return LYt(new Set([...w, ...live_2.inFlightSubscribes])), {
    shells: d.filter(item => ynr(item, e) && item.agentId === void 0),
    workflows: workflows,
    agents: agents,
    unresumedAgents: u.agents,
    unresumedWorkflows: u.workflows,
    frameLive: frameLive,
    frameLiveTaskIds: Object.values(r).filter(item => pY(item) && item.frameLive !== void 0 && w.has(item.frameLive.slug)).map(item => item.id),
    jobDir: jobDir,
    agentTranscriptPaths: Object.fromEntries(agents.map(item => [item.agentId, ig(Vr(item.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(workflows.map(item => [item.workflowRunId, k1(item.workflowRunId)])),
    projectTempDir: A_()?.adoptShellOutputRoot ?? _O(),
    mergeShellOutputReadRoots: y()
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
  projectTempDir: h,
  mergeShellOutputReadRoots: mergeShellOutputReadRoots
}, b) {
  for (let c of workflows_2) c.abortController?.abort(jl("background"));
  for (let c of agents_2) c.abortController?.abort(jl("background"));
  let o = (async () => {
    let agents_3 = [];
    if (agents_2.length > 0) {
      try {
        await Nt((async () => {
          await Yg(), await Mu();
        })(), F, R);
      } catch (error) {
        let v = error instanceof Error && error.message === R;
        p("task_local_agent_exit_handoff", v ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${error}`, {
          level: "warn"
        });
      }
      agents_3 = await Promise.all(agents_2.map(item => pnr(item, {
        derivedTranscriptPath: agentTranscriptPaths[item.agentId]
      })));
    }
    agents_3.push(...unresumedAgents);
    let shells_2 = (await Promise.all(shells.map(item => unr(item, {
        rerootOutputsTo: h
      })))).filter(item => item !== null),
      workflows_3 = [...(await Promise.all(workflows_2.map(item => fnr(item, {
        derivedTranscriptDir: workflowTranscriptDirs[item.workflowRunId]
      })))), ...unresumedWorkflows];
    if (shells_2.length === 0 && workflows_3.length === 0 && agents_3.length === 0 && frameLive_2.length === 0 || !jobDir_2) return;
    try {
      if (await wnt(jobDir_2, {
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
        mergeShellOutputRoot: [h, ...(mergeShellOutputReadRoots ?? [])]
      }, b), i("tengu_adopt_exit_handoff", {
        adopted_shells: shells_2.length,
        adopted_workflows: workflows_3.length,
        adopted_agents: agents_3.length,
        adopted_frame_live: frameLive_2.length
      }), shells_2.length > 0) g("task_local_shell_exit_handoff");
      if (workflows_3.length > 0) g("task_local_workflow_exit_handoff");
      if (agents_3.length > 0) g("task_local_agent_exit_handoff");
      t(`exit handoff: ${shells_2.length} background shell(s), ${workflows_3.length} workflow(s), ${agents_3.length} agent(s), and ${frameLive_2.length} comment-monitoring consent record(s) handed to the next wake of this session`);
    } catch (error) {
      for (let v of shells) try {
        v.shellCommand?.kill();
      } catch {}
      if (shells.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (workflows_2.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (agents_3.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (frameLive_2.length > 0 && jobDir_2 !== void 0) ZKr(jobDir_2, frameLive_2), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${error}`, {
        level: "warn"
      });
    }
  })();
  return Tus(o), o;
}
function D2t(r, n) {
  let e = L(r),
    d = e.shells.length > 0 || e.workflows.length > 0 || e.agents.length > 0 || e.unresumedAgents.length > 0 || e.unresumedWorkflows.length > 0 || e.frameLive.length > 0 ? E(e, n) : void 0,
    k = new Set([...e.shells, ...e.workflows, ...e.agents].map(item => item.id));
  return dnr(r, k), d;
}
function dnr(r, n = new Set()) {
  for (let e of Object.values(r)) {
    if (e.status !== "running" || n.has(e.id)) continue;
    try {
      if (zp(e)) e.shellCommand?.kill(), e.shellCommand?.cleanup();else if (bn()) {
        Pp(e.id);
        continue;
      } else if ("abortController" in e) e.abortController?.abort();
      if (!Yu(e)) _a(e.id, "stopped", {
        toolUseId: e.toolUseId,
        summary: e.description,
        ambient: I9(e)
      });
      Pp(e.id);
    } catch (error) {
      l(error);
    }
  }
}
export { D2t, dnr };