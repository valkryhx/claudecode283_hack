// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Rn
} from "B:/~BUN/root/chunk-hwnj8m4g.js";
var jv = "SubagentHandback";
var ht = "Agent",
  Pqn = "Launch a new agent to handle complex, multi-step tasks",
  pHs = "The task for the agent to perform",
  fHs = "A short (3-5 word) description of the task",
  pxo = "Name for the spawned agent.",
  mHs = `${pxo} Makes it addressable via ${Rn}({to: name}) while running.`,
  VU = "fork",
  gHs = `agent:builtin:${VU}`,
  Op = "Task",
  wmt = 1e5,
  eFt = new Set(["Explore", "Plan"]),
  sIe = "NOTE: this agent stopped at its ",
  oIr = `; ${Rn} to task-id to continue`,
  Oqn = ` Send the agent a message (${Rn}) to let it continue from where it stopped.`,
  Iqn = `The subagent ended without delivering a report through ${jv}, so no report was delivered.`,
  Mqn = ` Send the agent a message (${Rn}) to ask it to deliver its report.`,
  fxo = ` Once its requests are accepted again, send the agent a message (${Rn}) to let it continue from where it stopped instead of starting a new agent.`,
  Dqn = "subagent_type is required: the general-purpose agent is not available in this session";
export {
  jv,
  ht,
  Pqn,
  pHs,
  fHs,
  pxo,
  mHs,
  VU,
  gHs,
  Op,
  wmt,
  eFt,
  sIe,
  oIr,
  Oqn,
  Iqn,
  Mqn,
  fxo,
  Dqn
};
