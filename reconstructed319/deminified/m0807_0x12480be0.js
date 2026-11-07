// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { ore } from "B:/~BUN/root/chunk-jzac91sc.js";
import { Vd } from "B:/~BUN/root/chunk-27h4st9h.js";
import { mr } from "B:/~BUN/root/chunk-s20ae4sg.js";
function s() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
}
async function Che(e, c, d) {
  let i = mr(e.name, e.config),
    {
      captureDiscoveryGrantLeg: captureDiscoveryGrantLeg,
      ensureDiscoveryCacheAccount: ensureDiscoveryCacheAccount,
      getMcpIdentityEpoch: getMcpIdentityEpoch,
      persistRefreshedToolsIfPresent: persistRefreshedToolsIfPresent
    } = s();
  ensureDiscoveryCacheAccount();
  let a = Vd() ? captureDiscoveryGrantLeg(e.name, e.config) : void 0,
    toolRefreshSequences = bt().toolRefreshSequences,
    r = toolRefreshSequences.get(e) ?? {
      started: 0,
      applied: 0
    };
  toolRefreshSequences.set(e, r), r.started += 1;
  let started = r.started,
    {
      fetchToolsForClient: fetchToolsForClient
    } = s(),
    previousToolsPromise = fetchToolsForClient.cache.get(i),
    identityEpoch = getMcpIdentityEpoch();
  fetchToolsForClient.cache.delete(i);
  let newTools = await fetchToolsForClient(e, d),
    error = s().getToolsListErrorForResult(newTools);
  if (error) return {
    status: "kept-previous",
    error: error
  };
  if (e.discoveryAuthFailure && newTools.length === 0) return {
    status: "kept-previous",
    error: "the server rejected tool discovery as unauthorized \u2014 the user needs to authorize this connector (e.g. via /mcp) before its tools are available"
  };
  if (r.applied > started) return {
    status: "kept-previous",
    error: "superseded by a newer concurrent refresh of this server \u2014 the newer refresh result is the one applied"
  };
  if (r.applied = started, c(e.name, ore(e, newTools)), a) a.then(grantLeg => persistRefreshedToolsIfPresent(e, newTools, {
    identityEpoch: identityEpoch,
    grantLeg: grantLeg
  }));
  return {
    status: "refreshed",
    newTools: newTools,
    previousToolsPromise: previousToolsPromise
  };
}
export { Che };