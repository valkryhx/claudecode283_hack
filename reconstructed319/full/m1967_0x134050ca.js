// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Q$,
  zW,
  sLe,
  Q6,
  GW,
  ykr
} from "B:/~BUN/root/chunk-e8znf4zw.js";
async function iit(f, r) {
  let [o, l] = await Promise.allSettled([GW(void 0, f, r), ykr(void 0, r)]), s = o.status === "rejected" ? d(o.reason) : null, i = o.status === "fulfilled" ? o.value : [], a = l.status === "fulfilled" ? l.value : [], t = [...i, ...a], e = Q6(), u = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && zW(e.id) && !t.some((n) => Q$(n) === e.id)) t.push({
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
  let c = sLe(i, (n) => n.kind !== "bridge") ?? a[0] ?? t[0],
    g = null;
  if (e.id !== void 0) {
    let n = t.find((m) => Q$(m) === e.id);
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
  iit
};
