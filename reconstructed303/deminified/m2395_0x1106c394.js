// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { zn, Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { Ji } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { dt, Kt, We } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { o, v, T, De } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { createHash as u } from "crypto";
var Cet = "anthropic/returnToolOutput",
  UQn = [2],
  wKo = 4194304;
function GWr() {
  return !0;
}
function qhn(e) {
  return Dn(e) && e.tool_host_interface !== void 0;
}
var d = 64;
var l = 1024,
  a = 1024,
  p = 65536,
  i = f(() => T(v().int()).max(d)),
  c = f(() => T(o().min(1).max(a)).max(l).refine(e => e.reduce((acc, item) => acc + item.length, 0) <= p)),
  y = f(() => De({
    versions: i(),
    deny_rules_digest: o().regex(/^[0-9a-f]{64}$/)
  }));
function vKo(e) {
  let n = s(e)?.[Cet];
  if (n === void 0) return {
    kind: "absent"
  };
  let t = i().safeParse(s(n)?.versions);
  if (!t.success) return {
    kind: "malformed"
  };
  if (m(t.data).length === 0) return {
    kind: "no_shared_version",
    versions: t.data
  };
  let r = y().safeParse(n);
  return r.success ? {
    kind: "requested",
    denyRulesDigest: r.data.deny_rules_digest
  } : {
    kind: "malformed"
  };
}
function m(e) {
  return UQn.filter(item => e.includes(item));
}
var O = {
    [We]: [Qe, dt],
    [dt]: [Qe],
    [Kt]: [dt, Qe],
    [Ji]: [dt, Qe]
  },
  g = L([We, ...Object.values(O).flat()]);
function VWr(e) {
  return L(e.map(zn).filter(({
    toolName: toolName,
    ruleContent: ruleContent
  }) => ruleContent !== void 0 && g.includes(toolName)).map(Sn)).toSorted();
}
function qWr(e) {
  return c().safeParse(e).success;
}
function kKo(e) {
  return u("sha256").update(_(e)).digest("hex");
}
function EKo({
  tools: tools,
  denyRules: denyRules
}) {
  return {
    versions: [...UQn],
    tools: [...tools],
    deny_rules: VWr(denyRules)
  };
}
function s(e) {
  return Dn(e) ? e : void 0;
}
export { Cet, UQn, wKo, GWr, qhn, vKo, VWr, qWr, kKo, EKo };