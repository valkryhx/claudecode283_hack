// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pr
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  st,
  mo,
  ye,
  q,
  Gl
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Ke,
  ci
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Wp
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  za,
  DD,
  Cm,
  Dyt,
  SV
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  mY
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Kt
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  fr
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  fS
} from "B:/~BUN/root/chunk-88zb3509.js";
import {
  Xn,
  AJ,
  Zs
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  iM
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  RFt
} from "B:/~BUN/root/chunk-42915bn6.js";
import {
  ht
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  BDe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  qar,
  o3t,
  WB,
  Wve,
  YK,
  Ed,
  jdt,
  m8e,
  u9,
  JPt,
  eye,
  ens,
  oL,
  Zp,
  Ie,
  Wi,
  das,
  Jct,
  Qct
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  ur
} from "B:/~BUN/root/chunk-y5gyn2hc.js";
import {
  fd
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  se,
  ru
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  Kp
} from "B:/~BUN/root/chunk-xgwmwbnb.js";
import {
  C3
} from "B:/~BUN/root/chunk-ckdgegnz.js";
import {
  EIt,
  vI
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  H2
} from "B:/~BUN/root/chunk-65j4e9bn.js";
import {
  iR
} from "B:/~BUN/root/chunk-43aygqej.js";
import {
  Whe,
  dI,
  xle
} from "B:/~BUN/root/chunk-ra105wwp.js";
import {
  hii
} from "B:/~BUN/root/chunk-df199zqm.js";
import {
  SBe
} from "B:/~BUN/root/chunk-23ewg8ga.js";
import {
  Ko
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  $r
} from "B:/~BUN/root/chunk-xbnyqyft.js";
import {
  dirname as H,
  resolve as G
} from "path";
var K = 100;
async function O(o) {
  if (ur("skills") || !Kt("projectSettings") || fd("skills") || mo() !== null || q()) return [];
  let r = fr(o);
  if (r === null) return [];
  let n = await H2(r);
  if (!n.ok) return [];
  let i = await jdt(r, [...n.args, "status", "--porcelain", "-z", fS, "--untracked-files=normal"]);
  if (!i.ok) return [];
  let m = i.stdout.split("\x00"),
    s = new Map;
  for (let e = 0; e < m.length; e++) {
    let u = m[e] ?? "";
    if (u.length < 4) continue;
    let f = [u.slice(3)];
    if (/[RC]/.test(u.slice(0, 2))) e++, f.push(m[e] ?? "");
    for (let p of f) {
      let d = G(r, p);
      if (p !== "" && d !== r && s.size < K && Wp(r, d, {
          alreadyComparable: !0
        })) s.set(H(d), d)
    }
  }
  return [...s.values()]
}

function ZVo(o, r, n) {
  return o.filter((i) => i.type === "prompt" && o3t(i, r) && Wve(i) && mY(i.name) && !(i.context === "fork" && n !== void 0 && WB(i) === n))
}
async function pbn(o, r, n) {
  if (o.type !== "prompt" || o.unqualifiedName != null) return null;
  if (r !== null && n.session !== void 0 && BDe(o.name) !== null) try {
    let s = await O(r);
    if (s.length > 0) await Jct(await das(n.session.host, s, r, n.storageV5))
  } catch (s) {
    if (ci(s)) t(`[skills] Changed files not searched for nested skills: ${s}`);
    else a(s)
  }
  if (Qct().length === 0 && Gl().length === 0) return null;
  if (!n.options.tools.some((s) => ht(s, $r))) return null;
  let i = ZVo(await Zp(r, n.storageV5), o.name, n.options.spawnedBySkill);
  if (i.length === 0) return null;
  let m = i.map((s) => {
    let e = s.name.slice(0, s.name.length - o.name.length - 1);
    return `- \`${s.name}\` \u2014 for files under ${e}/`
  });
  return l("tengu_skill_scoped_variant_note", {
    variant_count: i.length
  }), Ie({
    content: Wi([`Directory-scoped variants of the "${o.name}" skill exist in this repo:`, ...m, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${$r} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`].join(`
`)),
    isMeta: !0
  })
}

function UQn(o, r, n) {
  if (n || r.spawnedByWorkflowRunId !== void 0 || C3() || ye()) return !1;
  return o.background ?? !0
}
async function BQn({
  agentId: o,
  agentDefinition: r,
  command: n,
  description: i,
  prompt: m,
  promptMessages: s,
  context: e,
  canUseTool: u,
  getAppState: f,
  permissionLayers: p,
  readFileState: d,
  availableTools: A,
  webFetchReadmissionAllowed: S,
  spawnedBySkill: y,
  recordInvocationOnSuccess: T,
  frozenCommandDenies: v
}) {
  let {
    taskRegistry: h
  } = e, E = Date.now(), w = i.length > 50 ? Q(i, 49) + "\u2026" : i, C = Cm(e.agentContext) + 1, _ = YK(r.model, ru(e), n.model, se(e).mode), M = () => {
    if (e.abortController.signal.aborted) {
      if (Zs(e.abortController.signal.reason) !== "interrupt") throw new Ke
    }
    for (let k of Object.values(h.all()))
      if (k.type === "local_agent" && !Ko(k.status) && k.forkedSkillName === n.name) return c("subagent_launch", "forked_skill_live_duplicate"), !0;
    return !1
  };
  if (M()) return null;
  let P = iR();
  if (C > P) return c("subagent_launch", "forked_skill_depth_cap"), null;
  let R = {
    skillName: n.name,
    attributionName: y,
    ...r.effort !== void 0 && {
      effort: r.effort
    },
    ...v !== void 0 && v.length > 0 && {
      frozenCommandDenies: [...v]
    }
  };
  if (!qar().safeParse(R).success) return c("subagent_launch", "forked_skill_scoping_unpersistable"), null;
  try {
    await hii(Pr(o), R, e.storageV5)
  } catch (k) {
    return z(k), c("subagent_launch", "forked_skill_scoping_write_failed"), null
  }
  if (M()) return null;
  let D = u9(e.agentId, h) ?? st(),
    I = JPt(e, D),
    N = eye({
      outputFileReadable: oL(e.options.tools),
      ownerCanContinueAgents: I,
      agentId: o,
      ownerAgentId: D,
      parentAgentId: e.agentId,
      spawnDepth: C,
      description: w,
      prompt: m,
      model: _,
      selectedAgent: r,
      taskRegistry: h,
      toolUseId: e.toolUseId,
      forkedSkillName: n.name,
      sessionScratch: e.session.sessionScratch
    }),
    B = N.abortController,
    b = e.agentLifecycle.allocateName(n.name);
  e.agentLifecycle.registerName(b, Pr(o)), vI(u9(e.agentId, h), `agent:${o}`, h);
  let F = {
      agentId: o,
      parentAgentId: e.agentId,
      depth: C,
      ...Dyt(e) && {
        spawnedByMainThread: !0
      },
      parentSessionId: iM(),
      agentType: "subagent",
      subagentName: r.agentType,
      isBuiltIn: Ed(r),
      displayName: b,
      isAsync: !0,
      isBackgroundAgent: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...SV(e.agentContext)
    },
    L = {
      prompt: m,
      resolvedAgentModel: _,
      isBuiltInAgent: Ed(r),
      startTime: E,
      agentType: r.agentType,
      isAsync: !0,
      agentDepth: C,
      callerCanContinueAgents: I,
      source: r.source
    },
    {
      onToolPool: U,
      reviewTools: j
    } = Whe(e.options.tools);
  return DD(F, () => xle({
    taskId: N.agentId,
    abortController: B,
    makeStream: (k, V, W) => dI({
      agentDefinition: r,
      promptMessages: s,
      turnPrompt: m,
      toolUseContext: {
        ...e,
        getAppState: f,
        permissionLayers: p
      },
      canUseTool: u,
      isAsync: !0,
      querySource: "agent:custom",
      spawnedBySkill: y,
      spawnedByForkedSkill: !0,
      model: n.model,
      onModelRestricted: SBe(y, e.appendSystemMessage),
      availableTools: A,
      webFetchReadmissionAllowed: S,
      override: {
        agentId: Pr(o),
        agentContext: F,
        abortController: B,
        readFileState: d
      },
      onCacheSafeParams: k,
      onQueryProgress: V,
      onStreamTokenEstimate: W,
      onToolPool: U,
      description: w,
      name: b
    }),
    metadata: {
      ...L,
      agentContext: F
    },
    description: w,
    toolUseContext: e,
    reviewTools: j,
    taskRegistry: h,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onTerminalSuccess: T
  })), g("subagent_launch"), {
    agentId: o,
    name: b
  }
}

function z(o) {
  t(`Failed to write forked-skill scoping sidecar: ${o}`)
}

function jQn({
  agentId: o,
  parentAgentId: r,
  spawnDepth: n,
  skillName: i,
  prompt: m,
  selectedAgent: s,
  taskRegistry: e,
  toolUseId: u,
  callerAbortController: f
}) {
  if (!RFt()) return {
    abortController: f,
    remove() {}
  };
  let p = Xn(),
    d = AJ(f, p),
    A = EIt(o, p);
  m8e(o);
  let S = `/${i}`,
    y = ens({
      agentId: o,
      ownerAgentId: u9(r, e) ?? st(),
      parentAgentId: r,
      spawnDepth: n,
      description: S,
      prompt: m,
      selectedAgent: s,
      toolUseId: u,
      abortController: p,
      forkWorker: !0
    });
  return e.register(y), {
    abortController: p,
    remove(T) {
      d(), A(), e.remove(o), Kp(o), za(o, p.signal.aborted ? "stopped" : T, {
        toolUseId: u,
        summary: S,
        outputFile: y.outputFile,
        skipTranscript: !0,
        ambient: !0
      })
    }
  }
}
export {
  UQn,
  BQn,
  jQn,
  ZVo,
  pbn
};
