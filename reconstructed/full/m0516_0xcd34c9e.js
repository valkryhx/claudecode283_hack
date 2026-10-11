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
  qe,
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  We
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  gv
} from "B:/~BUN/root/chunk-ehma26r8.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Si,
  co,
  WE,
  Sd,
  pD
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Vk
} from "B:/~BUN/root/chunk-6spmd6p4.js";
import {
  zt
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  me,
  Vf
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  Hn,
  Ile,
  Ci
} from "B:/~BUN/root/chunk-hqrtayw5.js";
import {
  Tp
} from "B:/~BUN/root/chunk-196w7fz7.js";
import {
  Vqe,
  VA
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  AJt,
  Ja,
  crt,
  HP,
  SZ,
  Bve,
  XG,
  H8,
  sbr,
  HO,
  Ce,
  Qa,
  KZt,
  Sp
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  _3e
} from "B:/~BUN/root/chunk-xdhy5nhb.js";
import {
  uL,
  rk,
  p4
} from "B:/~BUN/root/chunk-fwqmqt2f.js";
import {
  Lno
} from "B:/~BUN/root/chunk-0f5aa3v1.js";
import {
  _pe
} from "B:/~BUN/root/chunk-y96pqvt2.js";
import {
  ui
} from "B:/~BUN/root/chunk-3qp6kts8.js";
import {
  qae
} from "B:/~BUN/root/chunk-na2t7g12.js";
import {
  qee
} from "B:/~BUN/root/chunk-z9xwt6re.js";
import {
  _l
} from "B:/~BUN/root/chunk-gmsn86f4.js";

function k3t(e, r) {
  if (r || _l() || Te()) return !1;
  return e.background ?? !0
}
async function E3t({
  agentId: e,
  agentDefinition: r,
  command: s,
  description: n,
  prompt: u,
  promptMessages: a,
  context: o,
  canUseTool: c,
  getAppState: f,
  permissionLayers: l,
  readFileState: b,
  availableTools: h,
  webFetchReadmissionAllowed: k,
  spawnedBySkill: g,
  recordInvocationOnSuccess: C,
  frozenCommandDenies: A
}) {
  let {
    taskRegistry: d
  } = o, R = Date.now(), T = n.length > 50 ? re(n, 49) + "\u2026" : n, y = Sd(o.agentContext) + 1, v = uL(r.model, Vf(o), s.model, me(o).mode), w = () => {
    if (o.abortController.signal.aborted) {
      if (Ci(o.abortController.signal.reason) !== "interrupt") throw new We
    }
    for (let m of Object.values(d.all()))
      if (m.type === "local_agent" && !ui(m.status) && m.forkedSkillName === s.name) return p("subagent_launch", "forked_skill_live_duplicate"), !0;
    return !1
  };
  if (w()) return null;
  let L = gv();
  if (y > L) return p("subagent_launch", "forked_skill_depth_cap"), null;
  let F = {
    skillName: s.name,
    attributionName: g,
    ...r.effort !== void 0 && {
      effort: r.effort
    },
    ...A !== void 0 && A.length > 0 && {
      frozenCommandDenies: [...A]
    }
  };
  if (!AJt().safeParse(F).success) return p("subagent_launch", "forked_skill_scoping_unpersistable"), null;
  try {
    await Lno(go(e), F, o.storageV5)
  } catch (m) {
    return U(m), p("subagent_launch", "forked_skill_scoping_write_failed"), null
  }
  if (w()) return null;
  let I = H8({
      outputFileReadable: HO(o.options.tools),
      agentId: e,
      ownerAgentId: XG(o.agentId, d) ?? qe(),
      parentAgentId: o.agentId,
      spawnDepth: y,
      description: T,
      prompt: u,
      model: v,
      selectedAgent: r,
      taskRegistry: d,
      toolUseId: o.toolUseId,
      forkedSkillName: s.name,
      sessionScratch: o.session.sessionScratch
    }),
    M = I.abortController,
    S = o.agentLifecycle.allocateName(s.name);
  o.agentLifecycle.registerName(S, go(e)), VA(XG(o.agentId, d), `agent:${e}`, d);
  let N = {
      agentId: e,
      parentAgentId: o.agentId,
      depth: y,
      parentSessionId: Vk(),
      agentType: "subagent",
      subagentName: r.agentType,
      isBuiltIn: Ja(r),
      displayName: S,
      isAsync: !0,
      isBackgroundAgent: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...pD(o.agentContext)
    },
    B = {
      prompt: u,
      resolvedAgentModel: v,
      isBuiltInAgent: Ja(r),
      startTime: R,
      agentType: r.agentType,
      isAsync: !0,
      agentDepth: y,
      source: r.source
    };
  return WE(N, () => p4({
    taskId: I.agentId,
    abortController: M,
    makeStream: (m, j, O) => rk({
      agentDefinition: r,
      promptMessages: a,
      toolUseContext: {
        ...o,
        getAppState: f,
        permissionLayers: l
      },
      canUseTool: c,
      isAsync: !0,
      querySource: "agent:custom",
      spawnedBySkill: g,
      spawnedByForkedSkill: !0,
      model: s.model,
      onModelRestricted: _pe(g, o.appendSystemMessage),
      availableTools: h,
      webFetchReadmissionAllowed: k,
      override: {
        agentId: go(e),
        agentContext: N,
        abortController: M,
        readFileState: b
      },
      onCacheSafeParams: m,
      onQueryProgress: j,
      onStreamTokenEstimate: O,
      description: T,
      name: S
    }),
    metadata: B,
    description: T,
    toolUseContext: o,
    taskRegistry: d,
    agentIdForCleanup: e,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onTerminalSuccess: C
  })), _("subagent_launch"), {
    agentId: e,
    name: S
  }
}

function U(e) {
  t(`Failed to write forked-skill scoping sidecar: ${e}`)
}

function T3t({
  agentId: e,
  parentAgentId: r,
  spawnDepth: s,
  skillName: n,
  prompt: u,
  selectedAgent: a,
  taskRegistry: o,
  toolUseId: c,
  callerAbortController: f
}) {
  if (!_3e()) return {
    abortController: f,
    remove() {}
  };
  let l = Hn(),
    b = Ile(f, l),
    h = Vqe(e, l);
  Bve(e);
  let k = `/${n}`,
    g = sbr({
      agentId: e,
      ownerAgentId: XG(r, o) ?? qe(),
      parentAgentId: r,
      spawnDepth: s,
      description: k,
      prompt: u,
      selectedAgent: a,
      toolUseId: c,
      abortController: l,
      forkWorker: !0
    });
  return o.register(g), {
    abortController: l,
    remove(C) {
      b(), h(), o.remove(e), Tp(e), Si(e, l.signal.aborted ? "stopped" : C, {
        toolUseId: c,
        summary: k,
        outputFile: g.outputFile,
        skipTranscript: !0,
        ambient: !0
      })
    }
  }
}

function jar(e, r, s) {
  return e.filter((n) => n.type === "prompt" && crt(n, r) && SZ(n) && qee(n.name) && !(n.context === "fork" && s !== void 0 && HP(n) === s))
}
async function Jwt(e, r, s) {
  if (e.type !== "prompt" || e.unqualifiedName != null) return null;
  if (KZt().length === 0) return null;
  if (qae()) return null;
  if (!s.options.tools.some((a) => zt(a, co))) return null;
  let n = jar(await Sp(r, s.storageV5), e.name, s.options.spawnedBySkill);
  if (n.length === 0) return null;
  let u = n.map((a) => {
    let o = a.name.slice(0, a.name.length - e.name.length - 1);
    return `- \`${a.name}\` \u2014 for files under ${o}/`
  });
  return i("tengu_skill_scoped_variant_note", {
    variant_count: n.length
  }), Ce({
    content: Qa([`Directory-scoped variants of the "${e.name}" skill exist in this repo:`, ...u, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${co} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`].join(`
`)),
    isMeta: !0
  })
}
export {
  k3t,
  E3t,
  T3t,
  jar,
  Jwt
};
