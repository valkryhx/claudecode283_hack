// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jt } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Vi } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Er } from "B:/~BUN/root/chunk-yzpw1mdr.js";
function s() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
}
async function Uue(e, c, d) {
  let i = Er(e.name, e.config),
    {
      captureDiscoveryGrantLeg: captureDiscoveryGrantLeg,
      ensureDiscoveryCacheAccount: ensureDiscoveryCacheAccount,
      getMcpIdentityEpoch: getMcpIdentityEpoch,
      persistRefreshedToolsIfPresent: persistRefreshedToolsIfPresent
    } = s();
  ensureDiscoveryCacheAccount();
  let n = Vi() ? captureDiscoveryGrantLeg(e.name, e.config) : void 0,
    toolRefreshSequences = jt().toolRefreshSequences,
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
  if (r.applied = started, c(e.name, newTools), n) n.then(grantLeg => persistRefreshedToolsIfPresent(e, newTools, {
    identityEpoch: identityEpoch,
    grantLeg: grantLeg
  }));
  return {
    status: "refreshed",
    newTools: newTools,
    previousToolsPromise: previousToolsPromise
  };
}
export { Uue };