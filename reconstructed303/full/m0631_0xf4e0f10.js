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
  Ze,
  we
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ke
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Q2,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  _a,
  Ox,
  hp,
  SJe,
  fB
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  bA
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  d0n,
  NAt,
  GL,
  Fue,
  z1,
  gl,
  zHe,
  a6,
  Zat,
  Rse,
  Udo,
  oM,
  Ap,
  Re,
  od,
  z$e
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  mr,
  UMe,
  Ri
} from "B:/~BUN/root/chunk-jkv8n5r0.js";
import {
  vt
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  le,
  uc
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  Pp
} from "B:/~BUN/root/chunk-7j5tvnqj.js";
import {
  wdt,
  Q0
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  $k
} from "B:/~BUN/root/chunk-k8twyg23.js";
import {
  Apt
} from "B:/~BUN/root/chunk-0m6vvjrw.js";
import {
  AR,
  x7
} from "B:/~BUN/root/chunk-fbgs9vjp.js";
import {
  Pos
} from "B:/~BUN/root/chunk-5nr49wcm.js";
import {
  KRe
} from "B:/~BUN/root/chunk-tabp3jhw.js";
import {
  zs
} from "B:/~BUN/root/chunk-c2nm18xm.js";
import {
  go
} from "B:/~BUN/root/chunk-y59h61rh.js";
import {
  lte
} from "B:/~BUN/root/chunk-q56gve2c.js";

function g7r(o, r, n) {
  return o.filter((s) => s.type === "prompt" && NAt(s, r) && Fue(s) && Q2(s.name) && !(s.context === "fork" && n !== void 0 && GL(s) === n))
}
async function VYt(o, r, n) {
  if (o.type !== "prompt" || o.unqualifiedName != null) return null;
  if (z$e().length === 0) return null;
  if (!n.options.tools.some((a) => vt(a, go))) return null;
  let s = g7r(await Ap(r, n.storageV5), o.name, n.options.spawnedBySkill);
  if (s.length === 0) return null;
  let l = s.map((a) => {
    let e = a.name.slice(0, a.name.length - o.name.length - 1);
    return `- \`${a.name}\` \u2014 for files under ${e}/`
  });
  return i("tengu_skill_scoped_variant_note", {
    variant_count: s.length
  }), Re({
    content: od([`Directory-scoped variants of the "${o.name}" skill exist in this repo:`, ...l, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${go} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`].join(`
`)),
    isMeta: !0
  })
}

function ZAn(o, r, n) {
  if (n || r.spawnedByWorkflowRunId !== void 0 || lte() || we()) return !1;
  return o.background ?? !0
}
async function exn({
  agentId: o,
  agentDefinition: r,
  command: n,
  description: s,
  prompt: l,
  promptMessages: a,
  context: e,
  canUseTool: f,
  getAppState: k,
  permissionLayers: m,
  readFileState: b,
  availableTools: C,
  webFetchReadmissionAllowed: y,
  spawnedBySkill: d,
  recordInvocationOnSuccess: A,
  frozenCommandDenies: T
}) {
  let {
    taskRegistry: c
  } = e, L = Date.now(), w = s.length > 50 ? ne(s, 49) + "\u2026" : s, S = hp(e.agentContext) + 1, v = z1(r.model, uc(e), n.model, le(e).mode), _ = () => {
    if (e.abortController.signal.aborted) {
      if (Ri(e.abortController.signal.reason) !== "interrupt") throw new Ke
    }
    for (let u of Object.values(c.all()))
      if (u.type === "local_agent" && !zs(u.status) && u.forkedSkillName === n.name) return p("subagent_launch", "forked_skill_live_duplicate"), !0;
    return !1
  };
  if (_()) return null;
  let U = $k();
  if (S > U) return p("subagent_launch", "forked_skill_depth_cap"), null;
  let F = {
    skillName: n.name,
    attributionName: d,
    ...r.effort !== void 0 && {
      effort: r.effort
    },
    ...T !== void 0 && T.length > 0 && {
      frozenCommandDenies: [...T]
    }
  };
  if (!d0n().safeParse(F).success) return p("subagent_launch", "forked_skill_scoping_unpersistable"), null;
  try {
    await Pos(Vr(o), F, e.storageV5)
  } catch (u) {
    return D(u), p("subagent_launch", "forked_skill_scoping_write_failed"), null
  }
  if (_()) return null;
  let I = a6(e.agentId, c) ?? Ze(),
    M = Zat(e, I),
    R = Rse({
      outputFileReadable: oM(e.options.tools),
      ownerCanContinueAgents: M,
      agentId: o,
      ownerAgentId: I,
      parentAgentId: e.agentId,
      spawnDepth: S,
      description: w,
      prompt: l,
      model: v,
      selectedAgent: r,
      taskRegistry: c,
      toolUseId: e.toolUseId,
      forkedSkillName: n.name,
      sessionScratch: e.session.sessionScratch
    }),
    B = R.abortController,
    h = e.agentLifecycle.allocateName(n.name);
  e.agentLifecycle.registerName(h, Vr(o)), Q0(a6(e.agentId, c), `agent:${o}`, c);
  let N = {
      agentId: o,
      parentAgentId: e.agentId,
      depth: S,
      ...SJe(e) && {
        spawnedByMainThread: !0
      },
      parentSessionId: bA(),
      agentType: "subagent",
      subagentName: r.agentType,
      isBuiltIn: gl(r),
      displayName: h,
      isAsync: !0,
      isBackgroundAgent: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...fB(e.agentContext)
    },
    j = {
      prompt: l,
      resolvedAgentModel: v,
      isBuiltInAgent: gl(r),
      startTime: L,
      agentType: r.agentType,
      isAsync: !0,
      agentDepth: S,
      callerCanContinueAgents: M,
      source: r.source
    };
  return Ox(N, () => x7({
    taskId: R.agentId,
    abortController: B,
    makeStream: (u, O, P) => AR({
      agentDefinition: r,
      promptMessages: a,
      turnPrompt: l,
      toolUseContext: {
        ...e,
        getAppState: k,
        permissionLayers: m
      },
      canUseTool: f,
      isAsync: !0,
      querySource: "agent:custom",
      spawnedBySkill: d,
      spawnedByForkedSkill: !0,
      model: n.model,
      onModelRestricted: KRe(d, e.appendSystemMessage),
      availableTools: C,
      webFetchReadmissionAllowed: y,
      override: {
        agentId: Vr(o),
        agentContext: N,
        abortController: B,
        readFileState: b
      },
      onCacheSafeParams: u,
      onQueryProgress: O,
      onStreamTokenEstimate: P,
      description: w,
      name: h
    }),
    metadata: j,
    description: w,
    toolUseContext: e,
    taskRegistry: c,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onTerminalSuccess: A
  })), g("subagent_launch"), {
    agentId: o,
    name: h
  }
}

function D(o) {
  t(`Failed to write forked-skill scoping sidecar: ${o}`)
}

function txn({
  agentId: o,
  parentAgentId: r,
  spawnDepth: n,
  skillName: s,
  prompt: l,
  selectedAgent: a,
  taskRegistry: e,
  toolUseId: f,
  callerAbortController: k
}) {
  if (!Apt()) return {
    abortController: k,
    remove() {}
  };
  let m = mr(),
    b = UMe(k, m),
    C = wdt(o, m);
  zHe(o);
  let y = `/${s}`,
    d = Udo({
      agentId: o,
      ownerAgentId: a6(r, e) ?? Ze(),
      parentAgentId: r,
      spawnDepth: n,
      description: y,
      prompt: l,
      selectedAgent: a,
      toolUseId: f,
      abortController: m,
      forkWorker: !0
    });
  return e.register(d), {
    abortController: m,
    remove(A) {
      b(), C(), e.remove(o), Pp(o), _a(o, m.signal.aborted ? "stopped" : A, {
        toolUseId: f,
        summary: y,
        outputFile: d.outputFile,
        skipTranscript: !0,
        ambient: !0
      })
    }
  }
}
export {
  ZAn,
  exn,
  txn,
  g7r,
  VYt
};
