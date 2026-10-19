// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { poe, Oce } from "B:/~BUN/root/chunk-eqgp889f.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Lo, re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { qR } from "B:/~BUN/root/chunk-xyxdcn7p.js";
class E {
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
        serverName: o
      } = this.deps;
    if (qR({
      name: o
    }) !== void 0) return {
      action: "cancel"
    };
    let s = "transportErrorState" in t ? t.transportErrorState : this.deps.transportErrorState;
    if (s) s.pendingElicitations++;
    re(o, `Received elicitation request: ${_(e)}`);
    let {
        params: params
      } = e,
      l = w(params);
    i("tengu_mcp_elicitation_shown", {
      mode: c(l)
    });
    try {
      let r = await this.deps.runElicitationHooks(o, params, signal);
      if (r) return re(o, `Elicitation resolved by hook: ${_(r)}`), i("tengu_mcp_elicitation_response", {
        mode: c(l),
        action: c(r.action),
        byHook: !0
      }), g("mcp_elicitation_handle"), r;
      let d = params.mode === "url" && this.hasCompletionChannel() ? params.elicitationId : void 0,
        {
          result: result,
          flow: flow
        } = await this.ask(params, signal, l, d, s);
      re(o, `Elicitation response: ${_(result)}`);
      let p = await this.deps.runElicitationResultHooks(o, result, signal, l, d);
      if (p.action !== result.action) i("tengu_mcp_elicitation_result_hook", {
        mode: c(l),
        action: c(p.action)
      });
      if (params.mode === "url" && result.action === "accept" && p.action !== "accept") this.abandonWaiting(d, flow);
      return g("mcp_elicitation_handle"), p;
    } catch (error) {
      return Lo(o, `Elicitation error: ${error}`), m("mcp_elicitation_handle", "handler_error"), {
        action: "cancel"
      };
    } finally {
      if (s) s.pendingElicitations--, s.lastElicitationClosedAt = Date.now();
    }
  };
  complete = e => {
    let t = this.urlFlows.get(e);
    if (!t || t.size === 0) return !1;
    for (let n of t) n.completed = !0, n.closeWaiting?.();
    return !0;
  };
  abandonWaiting(e, t) {
    t?.closeWaiting?.(), this.forget(e, t);
  }
  async ask(params_2, signal_2, n, o, s) {
    if (signal_2.aborted) return {
      result: {
        action: "cancel"
      },
      flow: void 0
    };
    let {
        serverName: serverName,
        requestDialog: requestDialog
      } = this.deps,
      flow_2;
    if (o !== void 0) {
      flow_2 = {
        completed: !1,
        closeWaiting: void 0
      };
      let u = this.urlFlows.get(o);
      if (u) u.add(flow_2);else this.urlFlows.set(o, new Set([flow_2]));
    }
    let result_2 = await requestDialog(poe, {
      serverName: serverName,
      params: params_2,
      ...(params_2.mode === "url" && o === void 0 && {
        userConfirmsCompletion: !0
      })
    }, {
      place: "under",
      signal: signal_2
    });
    if (!signal_2.aborted) i("tengu_mcp_elicitation_response", {
      mode: c(n),
      action: c(result_2.action)
    });
    if (params_2.mode === "url" && result_2.action === "accept" && flow_2) {
      if (flow_2.completed) this.forget(o, flow_2);else this.showWaiting(params_2, o, flow_2, signal_2, s);
    } else this.forget(o, flow_2);
    return {
      result: result_2,
      flow: flow_2
    };
  }
  async showWaiting(params_3, t, n, o, s) {
    let abortController = new AbortController();
    if (n.closeWaiting = () => abortController.abort(), s) s.pendingElicitations++;
    try {
      await this.deps.requestDialog(Oce, {
        serverName: this.deps.serverName,
        params: params_3,
        waitingState: {
          actionLabel: "Skip confirmation"
        }
      }, {
        signal: AbortSignal.any([abortController.signal, o]),
        succeeds: !0
      });
    } finally {
      if (s) s.pendingElicitations--, s.lastElicitationClosedAt = Date.now();
    }
    this.forget(t, n);
  }
  forget(e, t) {
    if (e === void 0 || t === void 0) return;
    let n = this.urlFlows.get(e);
    if (!n) return;
    if (n.delete(t), n.size === 0) this.urlFlows.delete(e);
  }
}
function w(e) {
  return e.mode === "url" ? "url" : "form";
}
var weakMap = new WeakMap();
function FEt(e, t) {
  let n = weakMap.get(e);
  if (n) return n.rebind(t), n;
  let o = new E(t, e);
  return weakMap.set(e, o), o;
}
export { FEt };