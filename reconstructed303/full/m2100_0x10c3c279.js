// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  DU,
  Iee,
  B8e,
  jve,
  LU,
  uGn
} from "B:/~BUN/root/chunk-fb07w30y.js";
async function Dzt(f, r) {
  let [o, l] = await Promise.allSettled([LU(void 0, f, r), uGn(void 0, r)]), s = o.status === "rejected" ? d(o.reason) : null, i = o.status === "fulfilled" ? o.value : [], a = l.status === "fulfilled" ? l.value : [], t = [...i, ...a], e = jve(), u = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && Iee(e.id) && !t.some((n) => DU(n) === e.id)) t.push({
    kind: "self_hosted_pool",
    pool_id: e.id,
    name: e.id,
    created_at: "",
    alive_runner_count: 0
  });
  if (t.length === 0) return {
    availableTargets: [],
    selectedTarget: null,
    selectedTargetSource: null,
    environmentsError: s,
    ignoredUntrustedPool: u
  };
  let c = B8e(i, (n) => n.kind !== "bridge") ?? a[0] ?? t[0],
    g = null;
  if (e.id !== void 0) {
    let n = t.find((m) => DU(m) === e.id);
    if (n) c = n, g = e.source ?? null
  }
  return {
    availableTargets: t,
    selectedTarget: c,
    selectedTargetSource: g,
    environmentsError: s,
    ignoredUntrustedPool: u
  }
}
export {
  Dzt
};
