// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Rf as name, gJi } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { gte } from "B:/~BUN/root/chunk-ja520myc.js";
import { mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { to, Dd, br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { Gw } from "B:/~BUN/root/chunk-27h4st9h.js";
import { rDo } from "B:/~BUN/root/chunk-b1fhxw8g.js";
import { rde } from "B:/~BUN/root/chunk-dh9acrmw.js";
import { zr } from "B:/~BUN/root/chunk-7jbamvvk.js";
import { mPe } from "B:/~BUN/root/chunk-9n8bhmd5.js";
import { lzt, gYn, yYn } from "B:/~BUN/root/chunk-4r9mjwrh.js";
import { $Pe } from "B:/~BUN/root/chunk-j9h732qg.js";
import { XF } from "B:/~BUN/root/chunk-3xtmwvra.js";
function j() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
}
var Y = [500, 1500, 4000, 15000, 60000];
function nDo(s) {
  let {
      getAppState: getAppState,
      setAppState: setAppState,
      getDynamicMcpState: getDynamicMcpState
    } = s.stores,
    A = XF(setAppState, "toolPermissionContext"),
    n = null,
    u = Promise.resolve(),
    f = !1,
    p = !1,
    M = 0,
    a = null;
  function B() {
    if (p) return !1;
    if (a !== null) return !0;
    let e = Y[M];
    if (e === void 0) return t("[bridge:projects] reply mount retries exhausted \u2014 the mount stays as it is until the binding changes", {
      level: "warn"
    }), !1;
    return M++, a = setTimeout(() => {
      a = null, sync("retry");
    }, e), a.unref(), !0;
  }
  function y() {
    if (M = 0, a !== null) clearTimeout(a), a = null;
  }
  function sync(e) {
    return u = u.then(() => N(e)).catch(o => {
      t(`[bridge:projects] converge (${e}) threw: ${d(o)}`, {
        level: "warn"
      });
    }), u;
  }
  async function N(e) {
    if (p) return;
    if (e === "binding_changed") y();
    let o = await s.readHearthBinding();
    if (p) return;
    if (!o.read) {
      if (t(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, {
        level: "warn"
      }), !n || C(n)) B();
      return;
    }
    let r = rDo({
      hearth: o.assertion
    }, {
      apiBaseUrl: s.apiBaseUrl,
      sessionId: s.sessionId
    });
    if (!r.binding) {
      if (y(), n) {
        t(`[bridge:projects] binding gone (${r.reason}, ${e}) \u2014 dropping the reply mount`);
        let i = n;
        n = null, await h(i);
      }
      return;
    }
    if (reassertOwnership(), n && n.binding.mountUrl === r.binding.mountUrl) {
      if (C(n)) {
        t(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
        let i = n;
        if (n = null, await h(i), p) return;
        await T(r.binding);
        return;
      }
      P(n, r.binding), n.binding = r.binding;
      return;
    }
    t(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`), await T(r.binding);
  }
  async function T(binding) {
    if (getAppState().mcp.clients.some(item => item.name === name) || name in getDynamicMcpState().configs || k()) {
      t(`[bridge:projects] reply mount skipped: a server named ${name} is already configured`, {
        level: "warn"
      }), c("bridge_projects_mcp_mount", "name_taken");
      return;
    }
    let config = gte({
        ...gJi(binding.mountUrl, s.sessionId),
        scope: "dynamic",
        role: "comms"
      }, {
        getBearerToken: s.getBearerToken
      }),
      r = {
        binding: binding,
        config: config,
        allowRules: []
      };
    if (n = r, setAppState(i => $Pe(i, name, {
      client: {
        name: name,
        type: "pending",
        config: config
      },
      tools: [],
      commands: []
    })), !f) r.allowRules = O(binding.autoAllowTools.map(item => mn({
      toolName: br(name, item)
    })));
    await U(r);
  }
  async function U(e) {
    let attemptEpoch = zr(),
      r;
    try {
      r = {
        ...(await j().reconnectMcpServerImpl(name, e.config, s.storageV5, s.credentials)),
        attemptEpoch: attemptEpoch
      };
    } catch (R) {
      t(`[bridge:projects] reply mount connect threw: ${d(R)}`, {
        level: "warn"
      }), r = {
        client: {
          name: name,
          type: "failed",
          config: e.config,
          error: "Connection failed"
        },
        tools: [],
        commands: [],
        attemptEpoch: attemptEpoch
      };
    }
    if (n !== e) {
      if (r.client.type === "connected") await j().detachAndCloseConnection(r.client);
      return;
    }
    let i = mPe(s.stores, name, r);
    if (i !== "applied") {
      c("bridge_projects_mcp_mount", i), reassertOwnership();
      return;
    }
    if (r.client.type === "connected") y(), rde(name, void 0), g("bridge_projects_mcp_mount");else if (F(r.client)) {
      if (rde(name, Object.assign(Error("reply mount dial failed"), {
        mcpErrorSource: "downstream_unreachable"
      })), B()) c("bridge_projects_mcp_mount", "settled_failed_retrying");else m("bridge_projects_mcp_mount", "settled_failed");
    } else m("bridge_projects_mcp_mount", r.client.type === "failed" ? `settled_failed_${(r.client.errorCode ?? "answered").toLowerCase()}` : `settled_${r.client.type}`);
  }
  function C(e) {
    let o = getAppState().mcp.clients.find(item => item.name === name);
    return o !== void 0 && o.config === e.config && F(o);
  }
  async function h(e) {
    _(e.allowRules);
    let o = getAppState().mcp.clients.find(item => item.name === name);
    if (o && o.config !== e.config) {
      await D(e.config);
      return;
    }
    let r = to(name);
    setAppState(i => {
      let {
          [name]: R,
          ...resources
        } = i.mcp.resources,
        {
          [name]: I,
          ...resourceTemplates
        } = i.mcp.resourceTemplates;
      return {
        ...i,
        mcp: {
          ...i.mcp,
          clients: i.mcp.clients.filter(item => item !== o),
          tools: i.mcp.tools.filter(item => !Dd(item, name, r)),
          commands: i.mcp.commands.filter(item => !Gw(item, name)),
          resources: resources,
          resourceTemplates: resourceTemplates
        }
      };
    }), await D(e.config);
  }
  function reassertOwnership() {
    if (!n) return;
    let e = getAppState().mcp.clients.find(item => item.name === name);
    if (e && e.config === n.config && !k()) {
      if (!f) P(n, n.binding);
      return;
    }
    t("[bridge:projects] the reply mount\u2019s name is no longer held by its own row \u2014 retracting its pre-approvals", {
      level: "warn"
    });
    let o = n;
    n = null, h(o);
  }
  function k() {
    return Object.hasOwn(s.sdkHostConfigs(), name);
  }
  function suspendAllowsForApply(e) {
    if (!Object.hasOwn(e, name)) return;
    if (f = !0, !n) return;
    let allowRules = n.allowRules;
    n.allowRules = [], _(allowRules);
  }
  function reassertAfterApply() {
    f = !1, reassertOwnership();
  }
  function P(e, o) {
    if (f) return;
    let r = o.autoAllowTools.map(item => mn({
        toolName: br(name, item)
      })),
      i = new Set(r),
      R = new Set(e.allowRules),
      b = e.allowRules.filter(item => !i.has(item));
    if (b.length > 0) _(b);
    let I = e.allowRules.filter(item => i.has(item)),
      H = O(r.filter(item => !R.has(item)));
    e.allowRules = [...I, ...H];
  }
  function O(e) {
    if (p) return [];
    let o = lzt(e);
    return A(r => gYn(r, o)), o;
  }
  function _(e) {
    A(o => yYn(o, e, "one"));
  }
  function D(e) {
    return j().clearServerCache(name, e).catch(o => {
      t(`[bridge:projects] reply mount cleanup failed: ${d(o)}`, {
        level: "warn"
      });
    });
  }
  function drop() {
    if (p = !0, y(), n) {
      let allowRules_2 = n.allowRules;
      n.allowRules = [], _(allowRules_2);
    }
    return u = u.then(async () => {
      if (!n) return;
      t("[bridge:projects] dropping the reply mount");
      let e = n;
      n = null, await h(e);
    }).catch(e => {
      t(`[bridge:projects] drop threw: ${d(e)}`, {
        level: "warn"
      });
    }), u;
  }
  return {
    sync: sync,
    drop: drop,
    reassertOwnership: reassertOwnership,
    suspendAllowsForApply: suspendAllowsForApply,
    reassertAfterApply: reassertAfterApply,
    current: () => n?.binding ?? null,
    projectFilesDoor: () => n ? {
      channelId: n.binding.channelId,
      sessionId: s.sessionId,
      apiBaseUrl: s.apiBaseUrl,
      getBearerToken: s.getBearerToken,
      getWorkerEpoch: s.getWorkerEpoch
    } : null
  };
}
function F(s) {
  return s.type === "failed" && !G.has(s.errorCode ?? "");
}
var G = new Set(["CLI_OWNED_BEARER_REJECTED", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
export { nDo };