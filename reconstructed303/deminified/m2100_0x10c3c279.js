// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { DU, Iee, B8e, jve, LU, uGn } from "B:/~BUN/root/chunk-fb07w30y.js";
async function Dzt(f, r) {
  let [o, l] = await Promise.allSettled([LU(void 0, f, r), uGn(void 0, r)]),
    environmentsError = o.status === "rejected" ? d(o.reason) : null,
    i = o.status === "fulfilled" ? o.value : [],
    a = l.status === "fulfilled" ? l.value : [],
    availableTargets = [...i, ...a],
    e = jve(),
    ignoredUntrustedPool = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && Iee(e.id) && !availableTargets.some(item => DU(item) === e.id)) availableTargets.push({
    kind: "self_hosted_pool",
    pool_id: e.id,
    name: e.id,
    created_at: "",
    alive_runner_count: 0
  });
  if (availableTargets.length === 0) return {
    availableTargets: [],
    selectedTarget: null,
    selectedTargetSource: null,
    environmentsError: environmentsError,
    ignoredUntrustedPool: ignoredUntrustedPool
  };
  let selectedTarget = B8e(i, n => n.kind !== "bridge") ?? a[0] ?? availableTargets[0],
    selectedTargetSource = null;
  if (e.id !== void 0) {
    let n = availableTargets.find(item => DU(item) === e.id);
    if (n) selectedTarget = n, selectedTargetSource = e.source ?? null;
  }
  return {
    availableTargets: availableTargets,
    selectedTarget: selectedTarget,
    selectedTargetSource: selectedTargetSource,
    environmentsError: environmentsError,
    ignoredUntrustedPool: ignoredUntrustedPool
  };
}
export { Dzt };