// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Q$, zW, sLe, Q6, GW, ykr } from "B:/~BUN/root/chunk-e8znf4zw.js";
async function iit(f, r) {
  let [o, l] = await Promise.allSettled([GW(void 0, f, r), ykr(void 0, r)]),
    environmentsError = o.status === "rejected" ? d(o.reason) : null,
    i = o.status === "fulfilled" ? o.value : [],
    a = l.status === "fulfilled" ? l.value : [],
    availableTargets = [...i, ...a],
    e = Q6(),
    ignoredUntrustedPool = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && zW(e.id) && !availableTargets.some(item => Q$(item) === e.id)) availableTargets.push({
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
  let selectedTarget = sLe(i, n => n.kind !== "bridge") ?? a[0] ?? availableTargets[0],
    selectedTargetSource = null;
  if (e.id !== void 0) {
    let n = availableTargets.find(item => Q$(item) === e.id);
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
export { iit };