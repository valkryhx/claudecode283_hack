// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ie } from "B:/~BUN/root/chunk-hkh6hras.js";
import { Gfs, Dgr, I9t, M9t, Z8s, e9s, t9s, YXt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { tl } from "B:/~BUN/root/chunk-k8727s7d.js";
function m(e, n) {
  let agent = e.subagentType === n.agent.agentType ? n.agent : n.agents.find(item => item.agentType === e.subagentType);
  if (agent !== void 0) return {
    agent: agent
  };
  let r = n.agents.map(item => item.agentType),
    g = r.length > 0 ? `available: ${r.join(", ")}` : "none is available";
  return {
    deny: `a hook's subagentType '${e.subagentType}' names no agent this call can dispatch (${g})`
  };
}
var c = e => ({
  tool_use_id: e.tool_use_id,
  prompt: e.prompt,
  description: e.description,
  subagentType: e.agent.agentType,
  provider: Gfs(e.agent),
  model: e.model,
  parentModel: e.parentModel,
  ...(e.parentAgentId !== void 0 && {
    parentAgentId: e.parentAgentId
  }),
  permissionMode: e.permissionMode,
  background: e.background,
  fork: e.fork,
  ...(e.isTeammate === !0 && {
    isTeammate: !0
  }),
  ...(e.workflow !== void 0 && {
    workflow: e.workflow
  }),
  ...(e.resume !== void 0 && {
    resume: e.resume
  }),
  name: e.name,
  cwd: e.cwd
});
var d = e => ({
  started: ({
    agentId: agentId,
    model: model,
    teammateId: teammateId
  }) => e.done({
    model: model,
    agentId: agentId,
    ...(teammateId !== void 0 && {
      teammateId: teammateId
    })
  }),
  [Symbol.dispose]: e[Symbol.dispose]
});
var starting = Object.freeze({
  started: () => {
    return;
  },
  [Symbol.dispose]: () => {
    return;
  }
});
async function udr(e, n) {
  let {
      agent: agent_2,
      agents: agents,
      signal: signal,
      origin: origin
    } = e,
    t = c(e);
  if (!tl("agent.spawn")) return {
    spawn: t,
    agent: agent_2,
    starting: starting,
    isRewritten: !1
  };
  let a = M9t(t9s),
    f = await I9t(a, n({
      signal: signal,
      origin: origin,
      core: {
        "agent.spawn": Dgr(a)
      }
    }).agent.spawn(t));
  if (!f.arrived) return Z8s({
    result: f.answered,
    input: t,
    signal: signal
  });
  let p = f.arrived;
  e9s({
    input: t,
    spawn: p
  });
  let i = m(p, {
    agent: agent_2,
    agents: agents
  });
  if (i.deny !== void 0) return a.failed(new Ie(i.deny)), i;
  return {
    spawn: p,
    agent: i.agent,
    starting: d(a),
    isRewritten: !YXt({
      input: t
    }, p)
  };
}
export { starting as HQr, udr };