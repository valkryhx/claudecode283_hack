// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vr
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ig
} from "B:/~BUN/root/chunk-9080897a.js";
import {
  jl
} from "B:/~BUN/root/chunk-jkv8n5r0.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Yg
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  _a,
  A_,
  Qd,
  FM
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  bn
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  Tus,
  zp,
  Mu
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  _O,
  wsn,
  MVn
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  Pp
} from "B:/~BUN/root/chunk-7j5tvnqj.js";
import {
  Yu,
  I9
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  s7
} from "B:/~BUN/root/chunk-bjn0ckra.js";
import {
  Kh
} from "B:/~BUN/root/chunk-4bgwjb4z.js";
import {
  unr,
  pnr,
  fnr,
  pY,
  Awn,
  mnr,
  wnt,
  gnr,
  Pwn,
  ZKr,
  e4r,
  g8,
  ynr,
  _nr,
  Iwn
} from "B:/~BUN/root/chunk-t0dcjzj9.js";
import {
  k1
} from "B:/~BUN/root/chunk-0eewnx21.js";
import {
  LYt,
  Lot,
  UAn
} from "B:/~BUN/root/chunk-5qc8qrsy.js";

function x(r) {
  let {
    bySlug: n
  } = UAn();
  if (n.size === 0) return r;
  return r.map((e) => {
    let d = Math.min((n.get(e.slug) ?? 0) + (e.unattendedReplies ?? 0), Lot);
    return d > 0 ? {
      ...e,
      unattendedReplies: d
    } : e
  })
}
var F = 2000,
  R = "exit-handoff agent flush timeout";

function y() {
  let r = s7.of(j().host).last;
  return [...A_()?.adoptShellOutputReadRoot ? [A_().adoptShellOutputReadRoot] : [], ...r ? [wsn(MVn(r.worktreePath))] : []]
}

function L(r) {
  let n = Qd() ? FM() : void 0;
  if (!n || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let o = ee().live;
      if (Pwn(n), o.bootingWiredArms.size > 0) p("artifact_live_subscribe", "booting_consent_uncarried");
      LYt(o.inFlightSubscribes)
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
    }
  }
  let e = g8(r),
    d = Object.values(r),
    k = d.filter((o) => Iwn(o, e)),
    f = d.filter((o) => _nr(o, e)),
    u = gnr(n),
    T = (o) => !ee().autoReact.userDisarmed && !Kh(o.slug),
    A = Pwn(n),
    h = x(mnr([{
      entries: Awn(r),
      fallbackBasis: Date.now()
    }, {
      entries: A.filter(T),
      fallbackBasis: Date.now()
    }, {
      entries: e4r(n).filter(T),
      fallbackBasis: Date.now()
    }])),
    w = new Set(h.map((o) => o.slug)),
    b = ee().live;
  if ([...b.bootingWiredArms.keys()].some((o) => !w.has(o))) p("artifact_live_subscribe", "booting_consent_uncarried");
  return LYt(new Set([...w, ...b.inFlightSubscribes])), {
    shells: d.filter((o) => ynr(o, e) && o.agentId === void 0),
    workflows: k,
    agents: f,
    unresumedAgents: u.agents,
    unresumedWorkflows: u.workflows,
    frameLive: h,
    frameLiveTaskIds: Object.values(r).filter((o) => pY(o) && o.frameLive !== void 0 && w.has(o.frameLive.slug)).map((o) => o.id),
    jobDir: n,
    agentTranscriptPaths: Object.fromEntries(f.map((o) => [o.agentId, ig(Vr(o.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(k.map((o) => [o.workflowRunId, k1(o.workflowRunId)])),
    projectTempDir: A_()?.adoptShellOutputRoot ?? _O(),
    mergeShellOutputReadRoots: y()
  }
}

function E({
  shells: r,
  workflows: n,
  agents: e,
  unresumedAgents: d,
  unresumedWorkflows: k,
  frameLive: f,
  jobDir: u,
  agentTranscriptPaths: T,
  workflowTranscriptDirs: A,
  projectTempDir: h,
  mergeShellOutputReadRoots: w
}, b) {
  for (let c of n) c.abortController?.abort(jl("background"));
  for (let c of e) c.abortController?.abort(jl("background"));
  let o = (async () => {
    let c = [];
    if (e.length > 0) {
      try {
        await Nt((async () => {
          await Yg(), await Mu()
        })(), F, R)
      } catch (s) {
        let v = s instanceof Error && s.message === R;
        p("task_local_agent_exit_handoff", v ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${s}`, {
          level: "warn"
        })
      }
      c = await Promise.all(e.map((s) => pnr(s, {
        derivedTranscriptPath: T[s.agentId]
      })))
    }
    c.push(...d);
    let _ = (await Promise.all(r.map((s) => unr(s, {
        rerootOutputsTo: h
      })))).filter((s) => s !== null),
      S = [...await Promise.all(n.map((s) => fnr(s, {
        derivedTranscriptDir: A[s.workflowRunId]
      }))), ...k];
    if (_.length === 0 && S.length === 0 && c.length === 0 && f.length === 0 || !u) return;
    try {
      if (await wnt(u, {
          writtenAtMs: Date.now(),
          origin: "exit",
          shells: _,
          cron: [],
          workflows: S,
          agents: c,
          ...f.length > 0 && {
            frameLive: f
          }
        }, {
          mergeShellOutputRoot: [h, ...w ?? []]
        }, b), i("tengu_adopt_exit_handoff", {
          adopted_shells: _.length,
          adopted_workflows: S.length,
          adopted_agents: c.length,
          adopted_frame_live: f.length
        }), _.length > 0) g("task_local_shell_exit_handoff");
      if (S.length > 0) g("task_local_workflow_exit_handoff");
      if (c.length > 0) g("task_local_agent_exit_handoff");
      t(`exit handoff: ${_.length} background shell(s), ${S.length} workflow(s), ${c.length} agent(s), and ${f.length} comment-monitoring consent record(s) handed to the next wake of this session`)
    } catch (s) {
      for (let v of r) try {
        v.shellCommand?.kill()
      } catch {}
      if (r.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (c.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (f.length > 0 && u !== void 0) ZKr(u, f), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${s}`, {
        level: "warn"
      })
    }
  })();
  return Tus(o), o
}

function D2t(r, n) {
  let e = L(r),
    d = e.shells.length > 0 || e.workflows.length > 0 || e.agents.length > 0 || e.unresumedAgents.length > 0 || e.unresumedWorkflows.length > 0 || e.frameLive.length > 0 ? E(e, n) : void 0,
    k = new Set([...e.shells, ...e.workflows, ...e.agents].map((f) => f.id));
  return dnr(r, k), d
}

function dnr(r, n = new Set) {
  for (let e of Object.values(r)) {
    if (e.status !== "running" || n.has(e.id)) continue;
    try {
      if (zp(e)) e.shellCommand?.kill(), e.shellCommand?.cleanup();
      else if (bn()) {
        Pp(e.id);
        continue
      } else if ("abortController" in e) e.abortController?.abort();
      if (!Yu(e)) _a(e.id, "stopped", {
        toolUseId: e.toolUseId,
        summary: e.description,
        ambient: I9(e)
      });
      Pp(e.id)
    } catch (d) {
      l(d)
    }
  }
}
export {
  D2t,
  dnr
};
