// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  _S
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Axe
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  EN
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  Md,
  Ape,
  jAe,
  MLr,
  kbt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  dHe,
  OR
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  RV,
  AXi
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  DXi
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  ht
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  fU
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  Mp
} from "B:/~BUN/root/chunk-ht2sp6s6.js";
import {
  Nre
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tp,
  Cn
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  Ni
} from "B:/~BUN/root/chunk-ghar8fn5.js";
import {
  I2
} from "B:/~BUN/root/chunk-98qgaht2.js";
import {
  bL
} from "B:/~BUN/root/chunk-k5xd4a86.js";
import {
  EXe,
  D_r
} from "B:/~BUN/root/chunk-vy4t7613.js";
import {
  zc,
  g1
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  nce
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  OS,
  $g
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  vb
} from "B:/~BUN/root/chunk-az6xed3t.js";
import {
  no
} from "B:/~BUN/root/chunk-qszgzq5m.js";

function nGo() {
  return OR(N)
}

function N() {
  let e = Mp();
  if (e) throw new I2(`${e} \u2014 the teammate is not started unwrapped; fix the launcher setting, then retry`);
  let o = process.env[AXi],
    {
      cmd: r,
      prefixArgs: n
    } = o ? g1({
      cmd: o,
      prefixArgs: [],
      target: o
    }) : zc({
      pinToCurrentBinary: !0
    });
  return [r, ...n]
}

function R(e, o) {
  if (o) return "plan";
  if (e === "plan" || e === "dontAsk") return "default";
  return e
}

function nni({
  planModeRequired: e,
  permissionMode: o,
  proactivityLevel: r,
  autoPickedByLevel: n = !1
}) {
  if (o === void 0) return [];
  let a = R(o, e ?? !1);
  if (!e && r !== void 0) a = Nre(a, r, n);
  switch (a) {
    case "bypassPermissions":
      return ["--dangerously-skip-permissions"];
    case "acceptEdits":
      return ["--permission-mode acceptEdits"];
    case "auto":
      return ["--permission-mode auto"];
    case "default":
    case "plan":
    case "dontAsk":
    case "bubble":
      return [`--permission-mode ${Md(a)}`]
  }
}
var y = ["CLAUDE_CODE_USE_BEDROCK", "CLAUDE_CODE_USE_VERTEX", "CLAUDE_CODE_USE_FOUNDRY", "CLAUDE_CODE_USE_ANTHROPIC_AWS", "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", "CLAUDE_CODE_USE_MANTLE", "CLAUDE_CODE_USE_GATEWAY", "ANTHROPIC_AWS_WORKSPACE_ID", "ANTHROPIC_AWS_BASE_URL", "ANTHROPIC_AWS_API_KEY", "CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH", "ANTHROPIC_GOOGLE_CLOUD_PROJECT", "GOOGLE_CLOUD_PROJECT", "ANTHROPIC_GOOGLE_CLOUD_LOCATION", "ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID", "ANTHROPIC_GOOGLE_CLOUD_BASE_URL", "CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH", "AWS_BEARER_TOKEN_BEDROCK", "ANTHROPIC_BEDROCK_MANTLE_BASE_URL", "CLAUDE_CODE_SKIP_MANTLE_AUTH", "AWS_REGION", "AWS_DEFAULT_REGION", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "ANTHROPIC_BEDROCK_SERVICE_TIER", "CLAUDE_CODE_AUTO_MODE_SERVER", "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS", "CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS", "ANTHROPIC_BEDROCK_REGION_PREFIX", "CLAUDE_CODE_SUBAGENT_EFFORT", "CLAUDE_CODE_SUBAGENT_MODEL", "CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL", "CLAUDE_CODE_DISABLE_PROACTIVITY", "CLAUDE_CODE_DISABLE_FILE_MENTIONS", "CLAUDE_CODE_DISABLE_WEB_FETCH", "CLAUDE_CODE_DISABLE_MCP_TASKS", "CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_DISABLE_ULTRATHINK", "DISABLE_COMPACT", "CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG", "CLAUDE_CODE_PERSONAL_CONFIG_FIX", "CLAUDE_CODE_MODEL_CATALOG", "ANTHROPIC_BASE_URL", "CLAUDE_CONFIG_DIR", "CLAUDE_CODE_REMOTE", "CLAUDE_CODE_REMOTE_MEMORY_DIR", "HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "NO_PROXY", "no_proxy", "CLAUDE_CODE_PROXY_RESOLVES_HOSTS", ...Ape, ...Object.keys(jAe), ...MLr, "CLAUDE_CODE_DISABLE_FEATURE_FLAGS", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "DISABLE_ERROR_REPORTING", "DISABLE_GROWTHBOOK", "DISABLE_TELEMETRY", "DO_NOT_TRACK"];

function rGo() {
  return OR(M)
}

function M() {
  let e = ["CLAUDECODE=1", "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1"],
    {
      sessionListId: o
    } = Ni().taskList;
  if (o) e.push(`CLAUDE_CODE_TASK_LIST_ID=${no([o])}`);
  if (EN()) e.push("CLAUDE_CODE_HOST_GATEWAY_LINEAGE=1");
  let r = new Set(kbt(process.env));
  r.delete("CLAUDE_CODE_HOST_CREDS_FILE");
  let n = fU(process.env);
  for (let s of new Set(y)) {
    if (r.has(s)) continue;
    let E = s === "CLAUDE_CODE_AUTO_MODE_SERVER" && Pe(n[s]) ? dHe(() => i.CLAUDE_CODE_AUTO_MODE_SERVER) : n[s];
    if (E !== void 0 && E !== "") e.push(`${s}=${no([E])}`);
    else if (process.env[s] !== E) e.push(`${s}=''`)
  }
  let a = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (a !== void 0) e.push(`CLAUDE_SECURESTORAGE_CONFIG_DIR=${no([a])}`);
  let O = i.CLAUDE_CODE_AUTO_MODE_TIER;
  if (O !== void 0) e.push(`CLAUDE_CODE_AUTO_MODE_TIER=${no([O])}`);
  return e.push(`CLAUDE_CODE_ATTRIBUTION_PROJECT=${no([i.CLAUDE_CODE_ATTRIBUTION_PROJECT??""])}`), e.push("CLAUDE_CODE_EVEN_MORE_DANGEROUSLY_SKIP_PERMISSIONS="), e.join(" ")
}

function Lne(e, o) {
  return nce(o) ? `${e} ${no([o])}` : `${e}=${no([o])}`
}
var f = 50;

function LKr(e) {
  let o = Axe(e, f),
    r = Q(o, f);
  return r.length < o.length ? `${r}...` : r
}
async function oGo(e, o) {
  let {
    name: r,
    teamName: n,
    prompt: a,
    color: O,
    planModeRequired: s,
    model: E
  } = e, {
    taskRegistry: l
  } = o, _ = RV(r, n), D = OS("in_process_teammate"), L = e.resumableAgentId ?? _S(r);
  t(`[spawnInProcessTeammate] Spawning ${_} (taskId: ${D})`);
  try {
    let A = Xn(),
      p = z(),
      c = {
        agentId: _,
        agentName: r,
        teamName: n,
        color: O,
        planModeRequired: s,
        parentSessionId: p,
        resumableAgentId: L
      },
      U = DXi({
        agentId: _,
        agentName: r,
        teamName: n,
        color: O,
        planModeRequired: s,
        parentSessionId: p,
        hasTaskListTools: bL() && o.rootToolSurface.tools.some((T) => ht(T, vb)),
        abortController: A
      });
    if (EXe()) D_r(_, r, p);
    let u = e.description || LKr(a),
      P = {
        ...$g(D, "in_process_teammate", u, o.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: c,
        spawnedWith: e.spawnedWith,
        prompt: e.shownPrompt ?? a,
        model: E,
        abortController: A,
        awaitingPlanApproval: !1,
        permissionMode: e.permissionMode ?? R(se(o).mode, s),
        isIdle: !1,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: []
      };
    l.register(P);
    let S = o.getAppState(),
      C = S.agentNameRegistry.get(r);
    if (C !== L) {
      let T = C !== void 0 ? S.tasks[C] : void 0,
        d = C !== void 0 && (T?.status === "running" || Cn(T) || Object.values(S.tasks).some((I) => tp(I) && I.status === "running" && I.identity.resumableAgentId === C)) ? o.agentLifecycle.allocateName(r) : r;
      if (d !== r) t(`[spawnInProcessTeammate] name "${r}" already routes to live ${C}; registry entry uses "${d}" instead`);
      o.agentLifecycle.registerName(d, L)
    }
    return t(`[spawnInProcessTeammate] Registered ${_} in AppState`), g("swarm_in_process_spawn"), {
      ok: !0,
      agentId: _,
      identity: c,
      taskId: D,
      abortController: A,
      teammateContext: U
    }
  } catch (A) {
    let p = A instanceof Error ? A.message : "Unknown error during spawn";
    return t(`[spawnInProcessTeammate] Failed to spawn ${_}: ${p}`), m("swarm_in_process_spawn", "spawn_failed"), {
      ok: !1,
      agentId: _,
      error: p
    }
  }
}
export {
  nGo,
  nni,
  rGo,
  Lne,
  LKr,
  oGo
};
