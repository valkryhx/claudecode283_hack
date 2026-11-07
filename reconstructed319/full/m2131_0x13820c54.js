// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Fp,
  QS
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  fi
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  dje
} from "B:/~BUN/root/chunk-27h4st9h.js";
var i = "tengu_hazel_sluice";

function K1o() {
  return (Fp() || QS()) && dje(i) === "on"
}

function q1o(e, o, s) {
  if (o.mcpInfo === void 0 || s.length === 0 || !K1o()) return;
  let t = fi(o);
  if (!s.some((n) => n.type === "addRules" && n.behavior === "allow" && n.destination === "session" && n.rules.some((r) => r.toolName === t && r.ruleContent === void 0))) return;
  e.setSessionToolPermissionContext((n) => n.alwaysAllowRules.session?.includes(t) !== !0 || n.connectorCardAllows?.has(t) === !0 ? n : {
    ...n,
    connectorCardAllows: new Set([...n.connectorCardAllows ?? [], t])
  })
}

function jQs(e) {
  let o = zgn(e.toolPermissionContext);
  return o === e.toolPermissionContext ? e : {
    ...e,
    toolPermissionContext: o
  }
}

function zgn(e, o) {
  let s = e.connectorCardAllows;
  if (s === void 0 || o !== void 0 && !s.has(o)) return e;
  let t = new Set(o === void 0 ? [] : s);
  if (o !== void 0) t.delete(o);
  return {
    ...e,
    connectorCardAllows: t.size === 0 ? void 0 : t
  }
}
export {
  K1o,
  q1o,
  jQs,
  zgn
};
