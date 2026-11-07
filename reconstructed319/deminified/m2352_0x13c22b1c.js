// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { _, Ri } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Gs, ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { JRt, fsr, evn } from "B:/~BUN/root/chunk-fphj3e2e.js";
import { rre, uve } from "B:/~BUN/root/chunk-y9wt6fg7.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { NI } from "B:/~BUN/root/chunk-yhafkw66.js";
import { tee } from "B:/~BUN/root/chunk-j5zjtxy5.js";
class q {
  urlFlows = new Map();
  deps;
  client;
  constructor(e, t) {
    this.deps = e, this.client = t;
  }
  hasCompletionChannel() {
    return this.client?.getProtocolEra?.() !== "modern";
  }
  rebind(e) {
    this.deps = e;
  }
  handle = async (e, t) => {
    let {
        signal: signal
      } = t,
      {
        serverName: i,
        pluginSource: pluginSource
      } = this.deps;
    if (NI({
      name: i
    }) !== void 0) return {
      action: "cancel"
    };
    let a = "transportErrorState" in t ? t.transportErrorState : this.deps.transportErrorState;
    if (a) a.pendingElicitations++;
    ae(i, `Received elicitation request: ${_(e)}`);
    let {
        params: params
      } = e,
      u = F(params);
    l("tengu_mcp_elicitation_shown", {
      mode: f(u)
    });
    let d = fsr(i, pluginSource);
    try {
      let n = await this.deps.runElicitationHooks(i, d ? Ri(params) : params, signal);
      if (d && n?.action === "accept") ae(i, "An Elicitation hook answered accept. Only a person can accept the questions of a built-in plugin's server of this name, so the question goes to the person");else if (n) {
        let w = d ? {
          action: "cancel"
        } : n;
        return ae(i, d ? `An Elicitation hook answered ${n.action}. The person was not asked, and this server gets cancel: it takes only the person's own accept or decline` : `Elicitation resolved by hook: ${_(n)}`), l("tengu_mcp_elicitation_response", {
          mode: f(u),
          action: f(w.action),
          byHook: !0
        }), g("mcp_elicitation_handle"), w;
      }
      let p = params.mode === "url" && this.hasCompletionChannel() ? params.elicitationId : void 0,
        {
          result: result,
          flow: flow
        } = await this.ask(params, signal, u, p, a),
        C = "requestedSchema" in params ? params.requestedSchema.properties : void 0,
        P = result.content === void 0 ? result : {
          ...result,
          content: Er(result.content, (w, S) => {
            let v = C?.[S];
            return typeof v === "object" && v !== null && evn(i, pluginSource, S, v) ? "[masked]" : w;
          })
        };
      ae(i, `Elicitation response: ${_(P)}`);
      let R = d ? Ri(result) : result,
        h = await this.deps.runElicitationResultHooks(i, R, signal, u, p),
        y = result.action === "accept" && h.action !== "accept",
        M = y ? {
          action: "cancel"
        } : result;
      if (d && h !== R) ae(i, y ? `An ElicitationResult hook answered ${h.action}, so the person's accept goes to this server as cancel` : `An ElicitationResult hook answered ${h.action}. For this server a hook can only turn the person's accept into cancel, so the server gets the person's own answer: ${result.action}`);
      let E = d ? M : h;
      if (E.action !== result.action) l("tengu_mcp_elicitation_result_hook", {
        mode: f(u),
        action: f(E.action)
      });
      if (params.mode === "url" && result.action === "accept" && E.action !== "accept") this.abandonWaiting(p, flow);
      return g("mcp_elicitation_handle"), E;
    } catch (error) {
      return Gs(i, `Elicitation error: ${error}`), m("mcp_elicitation_handle", "handler_error"), {
        action: "cancel"
      };
    } finally {
      if (a) a.pendingElicitations--, a.lastElicitationClosedAt = Date.now();
    }
  };
  complete = e => {
    let t = this.urlFlows.get(e);
    if (!t || t.size === 0) return !1;
    for (let o of t) o.completed = !0, o.closeWaiting?.();
    return !0;
  };
  abandonWaiting(e, t) {
    t?.closeWaiting?.(), this.forget(e, t);
  }
  async ask(params_2, signal_2, o, i, c) {
    if (signal_2.aborted || tee()) return {
      result: {
        action: "cancel"
      },
      flow: void 0
    };
    let {
        serverName: serverName,
        pluginSource: pluginSource_2,
        requestDialog: requestDialog
      } = this.deps,
      d = JRt(serverName, pluginSource_2),
      flow_2;
    if (i !== void 0) {
      flow_2 = {
        completed: !1,
        closeWaiting: void 0
      };
      let r = this.urlFlows.get(i);
      if (r) r.add(flow_2);else this.urlFlows.set(i, new Set([flow_2]));
    }
    let result_2 = await requestDialog(rre, {
      serverName: serverName,
      ...(pluginSource_2 !== void 0 && {
        pluginSource: pluginSource_2
      }),
      params: params_2,
      ...(params_2.mode === "url" && i === void 0 && {
        userConfirmsCompletion: !0
      })
    }, {
      place: "under",
      signal: signal_2,
      ...(d && {
        alsoHideWhile: ["draft"]
      })
    });
    if (!signal_2.aborted) l("tengu_mcp_elicitation_response", {
      mode: f(o),
      action: f(result_2.action)
    });
    if (params_2.mode === "url" && result_2.action === "accept" && flow_2) {
      if (flow_2.completed) this.forget(i, flow_2);else this.showWaiting(params_2, i, flow_2, signal_2, c);
    } else this.forget(i, flow_2);
    return {
      result: result_2,
      flow: flow_2
    };
  }
  async showWaiting(params_3, t, o, i, c) {
    let abortController = new AbortController();
    if (o.closeWaiting = () => abortController.abort(), c) c.pendingElicitations++;
    try {
      await this.deps.requestDialog(uve, {
        serverName: this.deps.serverName,
        params: params_3,
        waitingState: {
          actionLabel: "Skip confirmation"
        }
      }, {
        signal: AbortSignal.any([abortController.signal, i]),
        succeeds: !0
      });
    } finally {
      if (c) c.pendingElicitations--, c.lastElicitationClosedAt = Date.now();
    }
    this.forget(t, o);
  }
  forget(e, t) {
    if (e === void 0 || t === void 0) return;
    let o = this.urlFlows.get(e);
    if (!o) return;
    if (o.delete(t), o.size === 0) this.urlFlows.delete(e);
  }
}
function F(e) {
  return e.mode === "url" ? "url" : "form";
}
var weakMap = new WeakMap();
function _Yt(e, t) {
  let o = weakMap.get(e);
  if (o) return o.rebind(t), o;
  let i = new q(t, e);
  return weakMap.set(e, i), i;
}
export { _Yt };