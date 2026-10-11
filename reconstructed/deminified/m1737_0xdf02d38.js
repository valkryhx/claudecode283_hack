// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { d8, I7 } from "B:/~BUN/root/chunk-q1w4fbjd.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Oo, ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
class g {
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
        serverName: serverName
      } = this.deps,
      s = "transportErrorState" in t ? t.transportErrorState : this.deps.transportErrorState;
    if (s) s.pendingElicitations++;
    ne(serverName, `Received elicitation request: ${b(e)}`);
    let {
        params: params
      } = e,
      d = h(params);
    i("tengu_mcp_elicitation_shown", {
      mode: c(d)
    });
    try {
      let n = await this.deps.runElicitationHooks(serverName, params, signal);
      if (n) return ne(serverName, `Elicitation resolved by hook: ${b(n)}`), i("tengu_mcp_elicitation_response", {
        mode: c(d),
        action: c(n.action)
      }), _("mcp_elicitation_handle"), n;
      let l = params.mode === "url" && this.hasCompletionChannel() ? params.elicitationId : void 0,
        {
          result: result,
          flow: flow
        } = await this.ask(params, signal, d, l, s);
      ne(serverName, `Elicitation response: ${b(result)}`);
      let p = await this.deps.runElicitationResultHooks(serverName, result, signal, d, l);
      if (params.mode === "url" && result.action === "accept" && p.action !== "accept") this.abandonWaiting(l, flow);
      return _("mcp_elicitation_handle"), p;
    } catch (error) {
      return Oo(serverName, `Elicitation error: ${error}`), m("mcp_elicitation_handle", "handler_error"), {
        action: "cancel"
      };
    } finally {
      if (s) s.pendingElicitations--, s.lastElicitationClosedAt = Date.now();
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
  async ask(params_2, signal_2, o, r, s) {
    if (signal_2.aborted) return {
      result: {
        action: "cancel"
      },
      flow: void 0
    };
    let {
        serverName: serverName_2,
        requestDialog: requestDialog
      } = this.deps,
      flow_2;
    if (r !== void 0) {
      flow_2 = {
        completed: !1,
        closeWaiting: void 0
      };
      let u = this.urlFlows.get(r);
      if (u) u.add(flow_2);else this.urlFlows.set(r, new Set([flow_2]));
    }
    let result_2 = await requestDialog(d8, {
      serverName: serverName_2,
      params: params_2
    }, {
      place: "under",
      signal: signal_2
    });
    if (!signal_2.aborted) i("tengu_mcp_elicitation_response", {
      mode: c(o),
      action: c(result_2.action)
    });
    if (params_2.mode === "url" && result_2.action === "accept" && flow_2) {
      if (flow_2.completed) this.forget(r, flow_2);else this.showWaiting(params_2, r, flow_2, signal_2, s);
    } else this.forget(r, flow_2);
    return {
      result: result_2,
      flow: flow_2
    };
  }
  async showWaiting(params_3, t, o, r, s) {
    let abortController = new AbortController();
    if (o.closeWaiting = () => abortController.abort(), s) s.pendingElicitations++;
    try {
      await this.deps.requestDialog(I7, {
        serverName: this.deps.serverName,
        params: params_3,
        waitingState: {
          actionLabel: "Skip confirmation"
        }
      }, {
        signal: AbortSignal.any([abortController.signal, r]),
        succeeds: !0
      });
    } finally {
      if (s) s.pendingElicitations--, s.lastElicitationClosedAt = Date.now();
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
function h(e) {
  return e.mode === "url" ? "url" : "form";
}
var weakMap = new WeakMap();
function att(e, t) {
  let o = weakMap.get(e);
  if (o) return o.rebind(t), o;
  let r = new g(t, e);
  return weakMap.set(e, r), r;
}
export { att };