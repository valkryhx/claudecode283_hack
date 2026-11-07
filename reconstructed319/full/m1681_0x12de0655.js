// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";

function Oor(e) {
  return "method" in e && "id" in e && e.id !== null
}
var jRt = Object.freeze({}),
  WRt = Object.freeze({
    name: "claude-code",
    title: "Claude Code",
    description: "Anthropic's agentic coding tool",
    websiteUrl: "https://claude.com/claude-code"
  }),
  n = Symbol("swallow");
class Akn {
  serverName;
  sendMcpMessage;
  isClosed = !1;
  manifestInitializeResult;
  manifestToolsListResult;
  swallowNextInitializedNotification = !1;
  outcome;
  onclose;
  onerror;
  onmessage;
  constructor(e, i, t, s = !1) {
    this.serverName = e;
    this.sendMcpMessage = i;
    this.manifestInitializeResult = s ? void 0 : t?.initializeResult, this.manifestToolsListResult = t?.toolsListResult, this.outcome = t === void 0 ? "none" : s ? "replayed" : "pending"
  }
  get manifestOutcome() {
    return this.outcome
  }
  async start() {}
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    let i = this.answerFromManifest(e);
    if (i === n) return;
    if (i !== void 0) {
      queueMicrotask(() => this.onmessage?.(i));
      return
    }
    let t = await this.sendMcpMessage(this.serverName, e);
    if (this.onmessage) this.onmessage(t)
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.()
  }
  answerFromManifest(e) {
    if (this.manifestInitializeResult === void 0 && this.manifestToolsListResult === void 0 && !this.swallowNextInitializedNotification) return;
    if (!("method" in e)) {
      this.dropManifest("unexpected_message");
      return
    }
    switch (e.method) {
      case "initialize": {
        let i = this.manifestInitializeResult;
        if (i === void 0 || !("id" in e)) {
          this.dropManifest("unexpected_message");
          return
        }
        this.manifestInitializeResult = void 0;
        let t = e.params;
        if (t === void 0 || typeof t.protocolVersion !== "string" || t.protocolVersion !== i.protocolVersion) {
          this.dropManifest("protocol_version_mismatch");
          return
        }
        if (!r(t.capabilities)) {
          this.dropManifest("client_capabilities_declared");
          return
        }
        if (!o(i)) {
          this.dropManifest("malformed_result");
          return
        }
        return this.swallowNextInitializedNotification = !0, this.outcome = "replayed", {
          jsonrpc: "2.0",
          id: e.id,
          result: i
        }
      }
      case "notifications/initialized": {
        if (!this.swallowNextInitializedNotification) {
          this.dropManifest("unexpected_message");
          return
        }
        return this.swallowNextInitializedNotification = !1, n
      }
      case "tools/list": {
        let i = this.manifestToolsListResult;
        if (i === void 0 || !("id" in e) || this.swallowNextInitializedNotification || e.params !== void 0 && e.params.cursor !== void 0) {
          this.dropManifest("unexpected_message");
          return
        }
        if (this.manifestToolsListResult = void 0, !o(i)) return;
        return {
          jsonrpc: "2.0",
          id: e.id,
          result: i
        }
      }
      default: {
        this.dropManifest("unexpected_message");
        return
      }
    }
  }
  dropManifest(e) {
    if (this.manifestInitializeResult = void 0, this.manifestToolsListResult = void 0, this.swallowNextInitializedNotification = !1, this.outcome === "pending") this.outcome = e
  }
}

function r(e) {
  return D(e) && Object.keys(e).length === 0
}

function o(e) {
  let i = e._meta;
  if (i === void 0) return !0;
  if (!D(i)) return !1;
  let {
    progressToken: t
  } = i;
  if (t !== void 0 && typeof t !== "string" && typeof t !== "number") return !1;
  let s = i["io.modelcontextprotocol/related-task"];
  return s === void 0 || D(s) && typeof s.taskId === "string"
}
class B8o {
  sendMcpMessage;
  isClosed = !1;
  constructor(e) {
    this.sendMcpMessage = e
  }
  onclose;
  onerror;
  onmessage;
  async start() {}
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    this.sendMcpMessage(e)
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.()
  }
}
export {
  Oor,
  jRt,
  WRt,
  Akn,
  B8o
};
