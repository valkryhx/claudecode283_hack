// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Qp,
  JE
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Fc
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  jd
} from "B:/~BUN/root/chunk-we0fhavr.js";
import {
  Np,
  h5n
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  Yu
} from "B:/~BUN/root/chunk-k382hx6g.js";
var g = "claudecode/agentId",
  p = "claudecode/agentType",
  c = "claudecode/isObserver",
  d = 128,
  f = 64;

function LKt(r) {
  let {
    name: n,
    config: e
  } = r;
  if (n !== jd) return !1;
  return Np(e) || e.scope === "dynamic" && "url" in e && typeof e.url === "string" && h5n(e.url)
}

function QTn(r, n) {
  let {
    agentId: e,
    agentContext: t
  } = n;
  if (e === void 0 || !LKt(r)) return {};
  if (JE(t) && t.isMainSession === !0 && t.agentId === e) return {};
  let o = ne(Fc(n.agentType ?? ""), d);
  return {
    [g]: e,
    ...o !== "" && {
      [p]: o
    },
    ...u(e, n) && {
      [c]: !0
    }
  }
}

function u(r, {
  agentContext: n,
  taskRegistry: e
}) {
  let t = [r],
    o = new Set;
  for (let i = t.pop(); i !== void 0; i = t.pop()) {
    if (o.has(i)) continue;
    if (o.size >= f) return !0;
    o.add(i);
    let s = e.get(i);
    if (s !== void 0 && Yu(s)) return !0;
    if (s !== void 0 && "parentAgentId" in s && typeof s.parentAgentId === "string") t.push(s.parentAgentId);
    if (!Qp(n)) {
      let a = i === n.agentId ? n.parentAgentId : i === r ? n.agentId : void 0;
      if (a !== void 0) t.push(a)
    }
  }
  return !1
}
export {
  LKt,
  QTn
};
