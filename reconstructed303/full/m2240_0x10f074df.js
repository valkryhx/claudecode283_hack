// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ec,
  eVs
} from "B:/~BUN/root/chunk-we0fhavr.js";
import {
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  $ge
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  zn,
  Sn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  Q_
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  du
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  lzr
} from "B:/~BUN/root/chunk-e3hy9n5j.js";
import {
  tse
} from "B:/~BUN/root/chunk-y83prpab.js";
import {
  Hr
} from "B:/~BUN/root/chunk-jynk66qn.js";
import {
  Oye
} from "B:/~BUN/root/chunk-e834hkp3.js";
import {
  a_e
} from "B:/~BUN/root/chunk-qzg0d2gn.js";
import {
  uo,
  _c,
  si
} from "B:/~BUN/root/chunk-b0487zs4.js";

function C() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule()
}
var G = [500, 1500, 4000, 15000, 60000];

function azr(s) {
  let {
    getAppState: w,
    setAppState: h,
    getDynamicMcpState: U
  } = s.stores, r = null, u = Promise.resolve(), y = !1, f = !1, M = 0, a = null;

  function j() {
    if (f) return !1;
    if (a !== null) return !0;
    let e = G[M];
    if (e === void 0) return t("[bridge:projects] reply mount retries exhausted \u2014 the mount stays as it is until the binding changes", {
      level: "warn"
    }), !1;
    return M++, a = setTimeout(() => {
      a = null, A("retry")
    }, e), a.unref(), !0
  }

  function R() {
    if (M = 0, a !== null) clearTimeout(a), a = null
  }

  function A(e) {
    return u = u.then(() => W(e)).catch((o) => {
      t(`[bridge:projects] converge (${e}) threw: ${d(o)}`, {
        level: "warn"
      })
    }), u
  }
  async function W(e) {
    if (f) return;
    if (e === "binding_changed") R();
    let o = await s.readHearthBinding();
    if (f) return;
    if (!o.read) {
      if (t(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, {
          level: "warn"
        }), !r || E(r)) j();
      return
    }
    let n = lzr({
      hearth: o.assertion
    }, {
      apiBaseUrl: s.apiBaseUrl,
      sessionId: s.sessionId
    });
    if (!n.binding) {
      if (R(), r) {
        t(`[bridge:projects] binding gone (${n.reason}, ${e}) \u2014 dropping the reply mount`);
        let i = r;
        r = null, await b(i)
      }
      return
    }
    if (S(), r && r.binding.mountUrl === n.binding.mountUrl) {
      if (E(r)) {
        t(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
        let i = r;
        if (r = null, await b(i), f) return;
        await B(n.binding);
        return
      }
      P(r, n.binding), r.binding = n.binding;
      return
    }
    t(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`), await B(n.binding)
  }
  async function B(e) {
    if (w().mcp.clients.some((i) => i.name === Ec) || Ec in U().configs || T()) {
      t(`[bridge:projects] reply mount skipped: a server named ${Ec} is already configured`, {
        level: "warn"
      }), p("bridge_projects_mcp_mount", "name_taken");
      return
    }
    let o = $ge({
        ...eVs(e.mountUrl, s.sessionId),
        scope: "dynamic",
        role: "comms"
      }, {
        getBearerToken: s.getBearerToken
      }),
      n = {
        binding: e,
        config: o,
        allowRules: []
      };
    if (r = n, h((i) => a_e(i, Ec, {
        client: {
          name: Ec,
          type: "pending",
          config: o
        },
        tools: [],
        commands: []
      })), !y) n.allowRules = O(e.autoAllowTools.map((i) => Sn({
      toolName: si(Ec, i)
    })));
    await N(n)
  }
  async function N(e) {
    let o = Hr(),
      n;
    try {
      n = {
        ...await C().reconnectMcpServerImpl(Ec, e.config, s.storageV5, s.credentials),
        attemptEpoch: o
      }
    } catch (c) {
      t(`[bridge:projects] reply mount connect threw: ${d(c)}`, {
        level: "warn"
      }), n = {
        client: {
          name: Ec,
          type: "failed",
          config: e.config,
          error: "Connection failed"
        },
        tools: [],
        commands: [],
        attemptEpoch: o
      }
    }
    if (r !== e) {
      if (n.client.type === "connected") await C().detachAndCloseConnection(n.client);
      return
    }
    let i = Oye(s.stores, Ec, n);
    if (i !== "applied") {
      p("bridge_projects_mcp_mount", i), S();
      return
    }
    if (n.client.type === "connected") R(), tse(Ec, void 0), g("bridge_projects_mcp_mount");
    else if (x(n.client))
      if (tse(Ec, Object.assign(Error("reply mount dial failed"), {
          mcpErrorSource: "downstream_unreachable"
        })), j()) p("bridge_projects_mcp_mount", "settled_failed_retrying");
      else m("bridge_projects_mcp_mount", "settled_failed");
    else m("bridge_projects_mcp_mount", n.client.type === "failed" ? `settled_failed_${(n.client.errorCode??"answered").toLowerCase()}` : `settled_${n.client.type}`)
  }

  function E(e) {
    let o = w().mcp.clients.find((n) => n.name === Ec);
    return o !== void 0 && o.config === e.config && x(o)
  }
  async function b(e) {
    _(e.allowRules);
    let o = w().mcp.clients.find((i) => i.name === Ec);
    if (o && o.config !== e.config) {
      await D(e.config);
      return
    }
    let n = uo(Ec);
    h((i) => {
      let {
        [Ec]: c, ...v
      } = i.mcp.resources, {
        [Ec]: I,
        ...H
      } = i.mcp.resourceTemplates;
      return {
        ...i,
        mcp: {
          ...i.mcp,
          clients: i.mcp.clients.filter((l) => l !== o),
          tools: i.mcp.tools.filter((l) => !_c(l, Ec, n)),
          commands: i.mcp.commands.filter((l) => !Q_(l, Ec)),
          resources: v,
          resourceTemplates: H
        }
      }
    }), await D(e.config)
  }

  function S() {
    if (!r) return;
    let e = w().mcp.clients.find((n) => n.name === Ec);
    if (e && e.config === r.config && !T()) {
      if (!y) P(r, r.binding);
      return
    }
    t("[bridge:projects] the reply mount\u2019s name is no longer held by its own row \u2014 retracting its pre-approvals", {
      level: "warn"
    });
    let o = r;
    r = null, b(o)
  }

  function T() {
    return Object.hasOwn(s.sdkHostConfigs(), Ec)
  }

  function L(e) {
    if (!Object.hasOwn(e, Ec)) return;
    if (y = !0, !r) return;
    let o = r.allowRules;
    r.allowRules = [], _(o)
  }

  function V() {
    y = !1, S()
  }

  function P(e, o) {
    if (y) return;
    let n = o.autoAllowTools.map((l) => Sn({
        toolName: si(Ec, l)
      })),
      i = new Set(n),
      c = new Set(e.allowRules),
      v = e.allowRules.filter((l) => !i.has(l));
    if (v.length > 0) _(v);
    let I = e.allowRules.filter((l) => i.has(l)),
      H = O(n.filter((l) => !c.has(l)));
    e.allowRules = [...I, ...H]
  }

  function k(e) {
    return F(w().toolPermissionContext.alwaysAllowRules.session ?? [], (o) => o === e)
  }

  function O(e) {
    if (f) return [];
    if (e.length === 0) return [];
    let o = new Map(e.map((n) => [n, k(n)]));
    return h((n) => ({
      ...n,
      toolPermissionContext: du(n.toolPermissionContext, {
        type: "addRules",
        destination: "session",
        behavior: "allow",
        rules: e.map(zn)
      })
    })), e.filter((n) => k(n) > (o.get(n) ?? 0))
  }

  function _(e) {
    if (e.length === 0) return;
    h((o) => {
      let n = [...o.toolPermissionContext.alwaysAllowRules.session ?? []];
      for (let i of e) {
        let c = n.indexOf(i);
        if (c !== -1) n.splice(c, 1)
      }
      return {
        ...o,
        toolPermissionContext: {
          ...o.toolPermissionContext,
          alwaysAllowRules: {
            ...o.toolPermissionContext.alwaysAllowRules,
            session: n
          }
        }
      }
    })
  }

  function D(e) {
    return C().clearServerCache(Ec, e).catch((o) => {
      t(`[bridge:projects] reply mount cleanup failed: ${d(o)}`, {
        level: "warn"
      })
    })
  }

  function Y() {
    if (f = !0, R(), r) {
      let e = r.allowRules;
      r.allowRules = [], _(e)
    }
    return u = u.then(async () => {
      if (!r) return;
      t("[bridge:projects] dropping the reply mount");
      let e = r;
      r = null, await b(e)
    }).catch((e) => {
      t(`[bridge:projects] drop threw: ${d(e)}`, {
        level: "warn"
      })
    }), u
  }
  return {
    sync: A,
    drop: Y,
    reassertOwnership: S,
    suspendAllowsForApply: L,
    reassertAfterApply: V,
    current: () => r?.binding ?? null,
    projectFilesDoor: () => r ? {
      channelId: r.binding.channelId,
      sessionId: s.sessionId,
      apiBaseUrl: s.apiBaseUrl,
      getBearerToken: s.getBearerToken,
      getWorkerEpoch: s.getWorkerEpoch
    } : null
  }
}

function x(s) {
  return s.type === "failed" && !q.has(s.errorCode ?? "")
}
var q = new Set(["CLI_OWNED_BEARER_REJECTED", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
export {
  azr
};
