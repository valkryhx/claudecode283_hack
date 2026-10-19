// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Cy
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  K
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  bjt,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  mr
} from "B:/~BUN/root/chunk-jkv8n5r0.js";
import {
  TB
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  w2s
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  vt
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  xp,
  vn
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  iO
} from "B:/~BUN/root/chunk-74f4ssah.js";
import {
  AUe,
  lBn
} from "B:/~BUN/root/chunk-r1z1wgpe.js";
import {
  PT
} from "B:/~BUN/root/chunk-f06s8ws5.js";
import {
  AE,
  tb
} from "B:/~BUN/root/chunk-c2nm18xm.js";
var S = 50;

function Fsr(o) {
  let s = bjt(o, S),
    e = ne(s, S);
  return e.length < s.length ? `${e}...` : e
}

function b(o, s) {
  if (s) return "plan";
  if (o === "plan" || o === "dontAsk") return "default";
  return o
}
async function o8r(o, s) {
  let {
    name: e,
    teamName: d,
    prompt: I,
    color: k,
    planModeRequired: l,
    model: w
  } = o, {
    taskRegistry: A
  } = s, r = TB(e, d), c = AE("in_process_teammate"), f = o.resumableAgentId ?? Cy(e);
  t(`[spawnInProcessTeammate] Spawning ${r} (taskId: ${c})`);
  try {
    let n = mr(),
      a = K(),
      P = {
        agentId: r,
        agentName: e,
        teamName: d,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        resumableAgentId: f
      },
      C = w2s({
        agentId: r,
        agentName: e,
        teamName: d,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        hasTaskListTools: iO() && s.rootToolSurface.tools.some((p) => vt(p, PT)),
        abortController: n
      });
    if (AUe()) lBn(r, e, a);
    let M = o.description || Fsr(I),
      _ = {
        ...tb(c, "in_process_teammate", M, s.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: P,
        spawnedWith: o.spawnedWith,
        prompt: o.shownPrompt ?? I,
        model: w,
        abortController: n,
        awaitingPlanApproval: !1,
        permissionMode: o.permissionMode ?? b(le(s).mode, l),
        isIdle: !1,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: []
      };
    A.register(_);
    let y = s.getAppState(),
      i = y.agentNameRegistry.get(e);
    if (i !== f) {
      let p = i !== void 0 ? y.tasks[i] : void 0,
        T = i !== void 0 && (p?.status === "running" || vn(p) || Object.values(y.tasks).some((u) => xp(u) && u.status === "running" && u.identity.resumableAgentId === i)) ? s.agentLifecycle.allocateName(e) : e;
      if (T !== e) t(`[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${T}" instead`);
      s.agentLifecycle.registerName(T, f)
    }
    return t(`[spawnInProcessTeammate] Registered ${r} in AppState`), g("swarm_in_process_spawn"), {
      ok: !0,
      agentId: r,
      identity: P,
      taskId: c,
      abortController: n,
      teammateContext: C
    }
  } catch (n) {
    let a = n instanceof Error ? n.message : "Unknown error during spawn";
    return t(`[spawnInProcessTeammate] Failed to spawn ${r}: ${a}`), m("swarm_in_process_spawn", "spawn_failed"), {
      ok: !1,
      agentId: r,
      error: a
    }
  }
}
export {
  Fsr,
  o8r
};
