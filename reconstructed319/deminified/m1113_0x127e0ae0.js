// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { n1e, Gle, ja, o1e, orr, srr, pIe, mIe, Jne, okn, V5r, xat, O4t, i3e, J5r, Ea } from "B:/~BUN/root/chunk-ahv8vexc.js";
import { yit, Fne, wKt, N_n, eQn, F_n, tQn, nQn } from "B:/~BUN/root/chunk-eh2h5nfr.js";
class g {
  constructor(e) {
    this._server = e;
  }
  requestStream(e, t, i) {
    return this._server.requestStream(e, t, i);
  }
  createMessageStream(params, t) {
    let i = this._server.getClientCapabilities();
    if ((params.tools || params.toolChoice) && !i?.sampling?.tools) throw Error("Client does not support sampling tools capability.");
    if (params.messages.length > 0) {
      let s = params.messages[params.messages.length - 1],
        o = Array.isArray(s.content) ? s.content : [s.content],
        n = o.some(item => item.type === "tool_result"),
        r = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0,
        h = r ? Array.isArray(r.content) ? r.content : [r.content] : [],
        c = h.some(item => item.type === "tool_use");
      if (n) {
        if (o.some(item => item.type !== "tool_result")) throw Error("The last message must contain only tool_result content if any is present");
        if (!c) throw Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (c) {
        let a = new Set(h.filter(item => item.type === "tool_use").map(item => item.id)),
          l = new Set(o.filter(item => item.type === "tool_result").map(item => item.toolUseId));
        if (a.size !== l.size || ![...a].every(item => l.has(item))) throw Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    return this.requestStream({
      method: "sampling/createMessage",
      params: params
    }, xat, t);
  }
  elicitInputStream(e, t) {
    let i = this._server.getClientCapabilities(),
      s = e.mode ?? "form";
    switch (s) {
      case "url":
        {
          if (!i?.elicitation?.url) throw Error("Client does not support url elicitation.");
          break;
        }
      case "form":
        {
          if (!i?.elicitation?.form) throw Error("Client does not support form elicitation.");
          break;
        }
    }
    let params_2 = s === "form" && e.mode === void 0 ? {
      ...e,
      mode: "form"
    } : e;
    return this.requestStream({
      method: "elicitation/create",
      params: params_2
    }, i3e, t);
  }
  async getTask(taskId, t) {
    return this._server.getTask({
      taskId: taskId
    }, t);
  }
  async getTaskResult(taskId_2, t, i) {
    return this._server.getTaskResult({
      taskId: taskId_2
    }, t, i);
  }
  async listTasks(cursor, t) {
    return this._server.listTasks(cursor ? {
      cursor: cursor
    } : void 0, t);
  }
  async cancelTask(taskId_3, t) {
    return this._server.cancelTask({
      taskId: taskId_3
    }, t);
  }
}
class Nke extends N_n {
  constructor(e, t) {
    super(t);
    if (this._serverInfo = e, this._loggingLevels = new Map(), this.LOG_LEVEL_SEVERITY = new Map(okn.options.map((item, index) => [item, index])), this.isMessageIgnored = (i, s) => {
      let o = this._loggingLevels.get(s);
      return o ? this.LOG_LEVEL_SEVERITY.get(i) < this.LOG_LEVEL_SEVERITY.get(o) : !1;
    }, this._capabilities = t?.capabilities ?? {}, this._instructions = t?.instructions, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new F_n(), this.setRequestHandler(orr, i => this._oninitialize(i)), this.setNotificationHandler(srr, () => this.oninitialized?.()), this._capabilities.logging) this.setRequestHandler(V5r, async (i, s) => {
      let o = s.sessionId || s.requestInfo?.headers["mcp-session-id"] || void 0,
        {
          level: level
        } = i.params,
        r = okn.safeParse(level);
      if (r.success) this._loggingLevels.set(o, r.data);
      return {};
    });
  }
  get experimental() {
    if (!this._experimental) this._experimental = {
      tasks: new g(this)
    };
    return this._experimental;
  }
  registerCapabilities(e) {
    if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = eQn(this._capabilities, e);
  }
  setRequestHandler(e, t) {
    let s = wKt(e)?.method;
    if (!s) throw Error("Schema is missing a method literal");
    let o;
    if (yit(s)) {
      let r = s;
      o = r._zod?.def?.value ?? r.value;
    } else {
      let r = s;
      o = r._def?.value ?? r.value;
    }
    if (typeof o !== "string") throw Error("Schema method literal must be a string");
    if (o === "tools/call") {
      let r = async (h, c) => {
        let a = Fne(Jne, h);
        if (!a.success) {
          let p = a.error instanceof Error ? a.error.message : String(a.error);
          throw new Ea(ja.InvalidParams, `Invalid tools/call request: ${p}`);
        }
        let {
            params: params_3
          } = a.data,
          u = await Promise.resolve(t(h, c));
        if (params_3.task) {
          let p = Fne(pIe, u);
          if (!p.success) {
            let d = p.error instanceof Error ? p.error.message : String(p.error);
            throw new Ea(ja.InvalidParams, `Invalid task creation result: ${d}`);
          }
          return p.data;
        }
        let f = Fne(mIe, u);
        if (!f.success) {
          let p = f.error instanceof Error ? f.error.message : String(f.error);
          throw new Ea(ja.InvalidParams, `Invalid tools/call result: ${p}`);
        }
        return f.data;
      };
      return super.setRequestHandler(e, r);
    }
    return super.setRequestHandler(e, t);
  }
  assertCapabilityForMethod(e) {
    switch (e) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling) throw Error(`Client does not support sampling (required for ${e})`);
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation) throw Error(`Client does not support elicitation (required for ${e})`);
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots) throw Error(`Client does not support listing roots (required for ${e})`);
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(e) {
    switch (e) {
      case "notifications/message":
        if (!this._capabilities.logging) throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) throw Error(`Server does not support notifying about resources (required for ${e})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) throw Error(`Server does not support notifying of tool list changes (required for ${e})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) throw Error(`Server does not support notifying of prompt list changes (required for ${e})`);
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url) throw Error(`Client does not support URL elicitation (required for ${e})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(e) {
    if (!this._capabilities) return;
    switch (e) {
      case "completion/complete":
        if (!this._capabilities.completions) throw Error(`Server does not support completions (required for ${e})`);
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) throw Error(`Server does not support prompts (required for ${e})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) throw Error(`Server does not support resources (required for ${e})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw Error(`Server does not support tools (required for ${e})`);
        break;
      case "tasks/get":
      case "tasks/list":
      case "tasks/result":
      case "tasks/cancel":
        if (!this._capabilities.tasks) throw Error(`Server does not support tasks capability (required for ${e})`);
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  assertTaskCapability(e) {
    nQn(this._clientCapabilities?.tasks?.requests, e, "Client");
  }
  assertTaskHandlerCapability(e) {
    if (!this._capabilities) return;
    tQn(this._capabilities.tasks?.requests, e, "Server");
  }
  async _oninitialize(e) {
    let protocolVersion = e.params.protocolVersion;
    return this._clientCapabilities = e.params.capabilities, this._clientVersion = e.params.clientInfo, {
      protocolVersion: Gle.includes(protocolVersion) ? protocolVersion : n1e,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...(this._instructions && {
        instructions: this._instructions
      })
    };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({
      method: "ping"
    }, o1e);
  }
  async createMessage(params_4, t) {
    if (params_4.tools || params_4.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools) throw Error("Client does not support sampling tools capability.");
    }
    if (params_4.messages.length > 0) {
      let i = params_4.messages[params_4.messages.length - 1],
        s = Array.isArray(i.content) ? i.content : [i.content],
        o = s.some(item => item.type === "tool_result"),
        n = params_4.messages.length > 1 ? params_4.messages[params_4.messages.length - 2] : void 0,
        r = n ? Array.isArray(n.content) ? n.content : [n.content] : [],
        h = r.some(item => item.type === "tool_use");
      if (o) {
        if (s.some(item => item.type !== "tool_result")) throw Error("The last message must contain only tool_result content if any is present");
        if (!h) throw Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (h) {
        let c = new Set(r.filter(item => item.type === "tool_use").map(item => item.id)),
          a = new Set(s.filter(item => item.type === "tool_result").map(item => item.toolUseId));
        if (c.size !== a.size || ![...c].every(item => a.has(item))) throw Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    if (params_4.tools) return this.request({
      method: "sampling/createMessage",
      params: params_4
    }, O4t, t);
    return this.request({
      method: "sampling/createMessage",
      params: params_4
    }, xat, t);
  }
  async elicitInput(e, t) {
    switch (e.mode ?? "form") {
      case "url":
        {
          if (!this._clientCapabilities?.elicitation?.url) throw Error("Client does not support url elicitation.");
          let params_5 = e;
          return this.request({
            method: "elicitation/create",
            params: params_5
          }, i3e, t);
        }
      case "form":
        {
          if (!this._clientCapabilities?.elicitation?.form) throw Error("Client does not support form elicitation.");
          let params_6 = e.mode === "form" ? e : {
              ...e,
              mode: "form"
            },
            o = await this.request({
              method: "elicitation/create",
              params: params_6
            }, i3e, t);
          if (o.action === "accept" && o.content && params_6.requestedSchema) try {
            let r = this._jsonSchemaValidator.getValidator(params_6.requestedSchema)(o.content);
            if (!r.valid) throw new Ea(ja.InvalidParams, `Elicitation response content does not match requested schema: ${r.errorMessage}`);
          } catch (error) {
            if (error instanceof Ea) throw error;
            throw new Ea(ja.InternalError, `Error validating elicitation response: ${error instanceof Error ? error.message : String(error)}`);
          }
          return o;
        }
    }
  }
  createElicitationCompletionNotifier(elicitationId, t) {
    if (!this._clientCapabilities?.elicitation?.url) throw Error("Client does not support URL elicitation (required for notifications/elicitation/complete)");
    return () => this.notification({
      method: "notifications/elicitation/complete",
      params: {
        elicitationId: elicitationId
      }
    }, t);
  }
  async listRoots(params_7, t) {
    return this.request({
      method: "roots/list",
      params: params_7
    }, J5r, t);
  }
  async sendLoggingMessage(params_8, t) {
    if (this._capabilities.logging) {
      if (!this.isMessageIgnored(params_8.level, t)) return this.notification({
        method: "notifications/message",
        params: params_8
      });
    }
  }
  async sendResourceUpdated(params_9) {
    return this.notification({
      method: "notifications/resources/updated",
      params: params_9
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    });
  }
  async sendToolListChanged() {
    return this.notification({
      method: "notifications/tools/list_changed"
    });
  }
  async sendPromptListChanged() {
    return this.notification({
      method: "notifications/prompts/list_changed"
    });
  }
}
export { Nke };