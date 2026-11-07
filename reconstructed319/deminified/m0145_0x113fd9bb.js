// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { bj } from "B:/~BUN/root/chunk-rr294jrm.js";
class d {
  captured = r();
  capturedOwn = n();
  carrier = s();
  ownSessionIds = o();
  selfHostedRunnerChild = t();
  toolsGrantedRunnerChild = i();
  get atStartup() {
    return this.captured;
  }
  get isSessionIngressUrlSet() {
    return this.capturedOwn;
  }
  get ownCcrSessionIds() {
    return this.ownSessionIds;
  }
  get isSelfHostedRunnerChild() {
    return this.selfHostedRunnerChild;
  }
  get isToolsGrantedRunnerChild() {
    return this.toolsGrantedRunnerChild;
  }
  get bridgeCarrier() {
    return this.carrier;
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child";
  }
  reset() {
    this.captured = r(), this.capturedOwn = n(), this.carrier = s(), this.ownSessionIds = o(), this.selfHostedRunnerChild = t(), this.toolsGrantedRunnerChild = i();
  }
}
var Jl = new d();
function r() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}
function n() {
  return process.env.SESSION_INGRESS_URL !== void 0;
}
function s() {
  let CLAUDE_CODE_BRIDGE_MCP_CARRIER = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (CLAUDE_CODE_BRIDGE_MCP_CARRIER === "1" || !CLAUDE_CODE_BRIDGE_MCP_CARRIER) return CLAUDE_CODE_BRIDGE_MCP_CARRIER ? "child" : void 0;
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && Pe(process.env.CLAUDE_CODE_REMOTE)) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return;
  }
  return "descendant";
}
function o() {
  return [process.env.CLAUDE_CODE_REMOTE_SESSION_ID, process.env.CLAUDE_CODE_SESSION_ID].filter(item => item !== void 0 && bj(item));
}
function t() {
  return Pe(process.env.CLAUDE_CODE_REMOTE) && process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
function i() {
  return !1;
}
export { Jl };