// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pr
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  zt
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Em
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  $l
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  ku
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  za,
  tb,
  wc,
  aH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  _n
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  Fhi,
  tu
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ql
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  eO,
  ONn,
  SEr
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Kp
} from "B:/~BUN/root/chunk-xgwmwbnb.js";
import {
  pZ,
  nm,
  _2
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  yle
} from "B:/~BUN/root/chunk-ab1ryk8w.js";
import {
  qWr,
  YWr,
  XWr,
  j7,
  h5n,
  JWr,
  qvt,
  QWr,
  y5n,
  PHo,
  OHo,
  Tne,
  ezr,
  tzr,
  b5n
} from "B:/~BUN/root/chunk-s3ja9yx6.js";
import {
  xK
} from "B:/~BUN/root/chunk-q42n6mwr.js";
import {
  Dbn,
  gCt,
  hZn
} from "B:/~BUN/root/chunk-xp5ya8v1.js";
import {
  hb
} from "B:/~BUN/root/chunk-dq64svjd.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function F(r) {
  let {
    bySlug: n
  } = hZn();
  if (n.size === 0) return r;
  return r.map((o) => {
    let f = Math.min((n.get(o.slug) ?? 0) + (o.unattendedReplies ?? 0), gCt);
    return f > 0 ? {
      ...o,
      unattendedReplies: f
    } : o
  })
}
var O = 2000,
  R = "exit-handoff agent flush timeout";

function y() {
  let r = yle.of(H().host).last;
  return [...tb()?.adoptShellOutputReadRoot ? [tb().adoptShellOutputReadRoot] : [], ...r ? [ONn(SEr(r.worktreePath))] : []]
}

function E(r) {
  let n = wc() ? aH() : void 0,
    o = n && te().builtInArtifactHiddenForMcp ? L([...Array.from(te().live.supervisors.values()).filter((e) => e.autoReactWiring !== void 0).map((e) => e.slug), ...Object.values(r).flatMap((e) => e.type === "monitor_ws" && e.status === "running" && e.autoReactArmed === !0 && e.frameLive !== void 0 ? [e.frameLive.slug] : [])]) : [];
  if (!n || i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let e = te().live;
      if (y5n(n), e.bootingWiredArms.size > 0) c("artifact_live_subscribe", "booting_consent_uncarried");
      Dbn(new Set([...e.inFlightSubscribes, ...o]))
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      wakeOnlyFrameLiveSlugs: o,
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: tb()?.adoptShellOutputRoot ?? eO(),
      mergeShellOutputReadRoots: y()
    }
  }
  let f = Tne(r),
    p = Object.values(r),
    d = p.filter((e) => b5n(e, f)),
    u = p.filter((e) => tzr(e, f)),
    S = QWr(n),
    T = (e) => !te().autoReact.userDisarmed && !hb(e.slug),
    b = y5n(n),
    v = F(JWr([{
      entries: h5n(r),
      fallbackBasis: Date.now()
    }, {
      entries: b.filter(T),
      fallbackBasis: Date.now()
    }, {
      entries: OHo(n).filter(T),
      fallbackBasis: Date.now()
    }])),
    h = new Set(v.map((e) => e.slug)),
    k = te().live;
  if ([...k.bootingWiredArms.keys()].some((e) => !h.has(e))) c("artifact_live_subscribe", "booting_consent_uncarried");
  return Dbn(new Set([...h, ...k.inFlightSubscribes, ...o])), {
    shells: p.filter((e) => ezr(e, f) && e.agentId === void 0),
    workflows: d,
    agents: u,
    unresumedAgents: S.agents,
    unresumedWorkflows: S.workflows,
    frameLive: v,
    frameLiveTaskIds: Object.values(r).filter((e) => j7(e) && e.frameLive !== void 0 && h.has(e.frameLive.slug)).map((e) => e.id),
    wakeOnlyFrameLiveSlugs: o,
    jobDir: n,
    agentTranscriptPaths: Object.fromEntries(u.map((e) => [e.agentId, Em(Pr(e.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(d.map((e) => [e.workflowRunId, xK(e.workflowRunId)])),
    projectTempDir: tb()?.adoptShellOutputRoot ?? eO(),
    mergeShellOutputReadRoots: y()
  }
}

function x({
  shells: r,
  workflows: n,
  agents: o,
  unresumedAgents: f,
  unresumedWorkflows: p,
  frameLive: d,
  jobDir: u,
  agentTranscriptPaths: S,
  workflowTranscriptDirs: T,
  projectTempDir: b,
  mergeShellOutputReadRoots: v
}, h) {
  for (let e of n) e.abortController?.abort($l("background"));
  for (let e of o) e.abortController?.abort($l("background"));
  let k = (async () => {
    let e = [];
    if (o.length > 0) {
      try {
        await zt((async () => {
          await ku(), await tu()
        })(), O, R)
      } catch (s) {
        let A = s instanceof Error && s.message === R;
        c("task_local_agent_exit_handoff", A ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${s}`, {
          level: "warn"
        })
      }
      e = await Promise.all(o.map((s) => YWr(s, {
        derivedTranscriptPath: S[s.agentId]
      })))
    }
    e.push(...f);
    let w = (await Promise.all(r.map((s) => qWr(s, {
        rerootOutputsTo: b
      })))).filter((s) => s !== null),
      _ = [...await Promise.all(n.map((s) => XWr(s, {
        derivedTranscriptDir: T[s.workflowRunId]
      }))), ...p];
    if (w.length === 0 && _.length === 0 && e.length === 0 && d.length === 0 || !u) return;
    try {
      if (await qvt(u, {
          writtenAtMs: Date.now(),
          origin: "exit",
          shells: w,
          cron: [],
          workflows: _,
          agents: e,
          ...d.length > 0 && {
            frameLive: d
          }
        }, {
          mergeShellOutputRoot: [b, ...v ?? []]
        }, h), l("tengu_adopt_exit_handoff", {
          adopted_shells: w.length,
          adopted_workflows: _.length,
          adopted_agents: e.length,
          adopted_frame_live: d.length
        }), w.length > 0) g("task_local_shell_exit_handoff");
      if (_.length > 0) g("task_local_workflow_exit_handoff");
      if (e.length > 0) g("task_local_agent_exit_handoff");
      t(`exit handoff: ${w.length} background shell(s), ${_.length} workflow(s), ${e.length} agent(s), and ${d.length} comment-monitoring consent record(s) handed to the next wake of this session`)
    } catch (s) {
      for (let A of r) try {
        A.shellCommand?.kill()
      } catch {}
      if (r.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (e.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (d.length > 0 && u !== void 0) PHo(u, d), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${s}`, {
        level: "warn"
      })
    }
  })();
  return Fhi(k), k
}

function Kmn(r, n) {
  let o = E(r),
    f = o.shells.length > 0 || o.workflows.length > 0 || o.agents.length > 0 || o.unresumedAgents.length > 0 || o.unresumedWorkflows.length > 0 || o.frameLive.length > 0 ? x(o, n) : void 0,
    p = new Set([...o.shells, ...o.workflows, ...o.agents].map((d) => d.id));
  return GWr(r, p), f
}

function GWr(r, n = new Set) {
  for (let o of Object.values(r)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (Ql(o)) o.shellCommand?.kill(_n() ? {
        cause: "session_exit"
      } : void 0), o.shellCommand?.cleanup();
      else if (_n()) {
        Kp(o.id);
        continue
      } else if ("abortController" in o) o.abortController?.abort();
      if (!(le() && pZ(o)) && !nm(o)) za(o.id, "stopped", {
        toolUseId: o.toolUseId,
        summary: o.description,
        ambient: _2(o)
      });
      Kp(o.id)
    } catch (f) {
      a(f)
    }
  }
}
export {
  Kmn,
  GWr
};
