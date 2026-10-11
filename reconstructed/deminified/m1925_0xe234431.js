// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { gF, k3, E3, T3, Cnn } from "B:/~BUN/root/chunk-90zbw58x.js";
async function kht(g, r) {
  let [o, s] = await Promise.allSettled([T3(void 0, g, r), Cnn(void 0, r)]),
    environmentsError = o.status === "rejected" ? l(o.reason) : null,
    d = o.status === "fulfilled" ? o.value : [],
    a = s.status === "fulfilled" ? s.value : [],
    availableTargets = [...d, ...a],
    e = E3(),
    ignoredUntrustedPool = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && k3(e.id) && !availableTargets.some(item => gF(item) === e.id)) availableTargets.push({
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
  let selectedTarget = d.find(item => item.kind !== "bridge") ?? a[0] ?? availableTargets[0],
    selectedTargetSource = null;
  if (e.id !== void 0) {
    let n = availableTargets.find(item => gF(item) === e.id);
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
export { kht };