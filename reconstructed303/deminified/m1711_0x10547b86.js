// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Qp, JE } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Fc } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { jd } from "B:/~BUN/root/chunk-we0fhavr.js";
import { Np, h5n } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Yu } from "B:/~BUN/root/chunk-k382hx6g.js";
var g = "claudecode/agentId",
  p = "claudecode/agentType",
  c = "claudecode/isObserver",
  d = 128,
  f = 64;
function LKt(r) {
  let {
    name: name,
    config: config
  } = r;
  if (name !== jd) return !1;
  return Np(config) || config.scope === "dynamic" && "url" in config && typeof config.url === "string" && h5n(config.url);
}
function QTn(r, n) {
  let {
    agentId: agentId,
    agentContext: agentContext
  } = n;
  if (agentId === void 0 || !LKt(r)) return {};
  if (JE(agentContext) && agentContext.isMainSession === !0 && agentContext.agentId === agentId) return {};
  let o = ne(Fc(n.agentType ?? ""), d);
  return {
    [g]: agentId,
    ...(o !== "" && {
      [p]: o
    }),
    ...(u(agentId, n) && {
      [c]: !0
    })
  };
}
function u(r, {
  agentContext: agentContext_2,
  taskRegistry: taskRegistry
}) {
  let t = [r],
    o = new Set();
  for (let i = t.pop(); i !== void 0; i = t.pop()) {
    if (o.has(i)) continue;
    if (o.size >= f) return !0;
    o.add(i);
    let s = taskRegistry.get(i);
    if (s !== void 0 && Yu(s)) return !0;
    if (s !== void 0 && "parentAgentId" in s && typeof s.parentAgentId === "string") t.push(s.parentAgentId);
    if (!Qp(agentContext_2)) {
      let a = i === agentContext_2.agentId ? agentContext_2.parentAgentId : i === r ? agentContext_2.agentId : void 0;
      if (a !== void 0) t.push(a);
    }
  }
  return !1;
}
export { LKt, QTn };