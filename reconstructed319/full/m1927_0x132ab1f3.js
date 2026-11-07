// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  pp,
  vVe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Dh
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  Xd
} from "B:/~BUN/root/chunk-q8eknvfd.js";
import {
  Yl
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  CDr
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  nm
} from "B:/~BUN/root/chunk-2fedt3ag.js";
var g = "claudecode/agentId",
  p = "claudecode/agentType",
  d = "claudecode/isObserver",
  c = 128,
  f = 64;

function xkn(r) {
  let {
    name: e,
    config: n
  } = r;
  if (e !== Xd) return !1;
  return Yl(n) || n.scope === "dynamic" && "url" in n && typeof n.url === "string" && CDr(n.url)
}

function Ior(r, e) {
  let n = vVe(e.agentId, e.agentContext);
  if (n === void 0 || !xkn(r)) return {};
  let t = Q(Dh(e.agentType ?? ""), c);
  return {
    [g]: n,
    ...t !== "" && {
      [p]: t
    },
    ...u(n, e) && {
      [d]: !0
    }
  }
}

function u(r, {
  agentContext: e,
  taskRegistry: n
}) {
  let t = [r],
    s = new Set;
  for (let i = t.pop(); i !== void 0; i = t.pop()) {
    if (s.has(i)) continue;
    if (s.size >= f) return !0;
    s.add(i);
    let o = n.get(i);
    if (o !== void 0 && nm(o)) return !0;
    if (o !== void 0 && "parentAgentId" in o && typeof o.parentAgentId === "string") t.push(o.parentAgentId);
    if (!pp(e)) {
      let a = i === e.agentId ? e.parentAgentId : i === r ? e.agentId : void 0;
      if (a !== void 0) t.push(a)
    }
  }
  return !1
}
export {
  xkn,
  Ior
};
