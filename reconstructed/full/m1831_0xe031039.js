// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ac,
  INo,
  Cye
} from "B:/~BUN/root/chunk-dv435n4g.js";
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Jn,
  Mn
} from "B:/~BUN/root/chunk-1f9marcm.js";
import {
  Qh
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  vc
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  tXn
} from "B:/~BUN/root/chunk-dw6dyevg.js";
import {
  a8
} from "B:/~BUN/root/chunk-d51hw63h.js";
import {
  br
} from "B:/~BUN/root/chunk-brdpd4rf.js";
import {
  cbe
} from "B:/~BUN/root/chunk-qnmjydnw.js";
import {
  kue
} from "B:/~BUN/root/chunk-7yf8jrt2.js";
import {
  hi,
  xc,
  Ia
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";

function C() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule()
}
var G = [500, 1500, 4000, 15000, 60000];

function eXn(s) {
  let {
    getAppState: g,
    setAppState: y,
    getDynamicMcpState: F
  } = s.stores, r = null, u = Promise.resolve(), w = !1, f = !1, M = 0, c = null;

  function j() {
    if (f) return !1;
    if (c !== null) return !0;
    let e = G[M];
    if (e === void 0) return t("[bridge:projects] reply mount retries exhausted \u2014 the mount stays as it is until the binding changes", {
      level: "warn"
    }), !1;
    return M++, c = setTimeout(() => {
      c = null, A("retry")
    }, e), c.unref(), !0
  }

  function h() {
    if (M = 0, c !== null) clearTimeout(c), c = null
  }

  function A(e) {
    return u = u.then(() => W(e)).catch((o) => {
      t(`[bridge:projects] converge (${e}) threw: ${l(o)}`, {
        level: "warn"
      })
    }), u
  }
  async function W(e) {
    if (f) return;
    if (e === "binding_changed") h();
    let o = await s.readHearthBinding();
    if (f) return;
    if (!o.read) {
      if (t(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, {
          level: "warn"
        }), !r || E(r)) j();
      return
    }
    let n = tXn({
      hearth: o.assertion
    }, {
      apiBaseUrl: s.apiBaseUrl,
      sessionId: s.sessionId
    });
    if (!n.binding) {
      if (h(), r) {
        t(`[bridge:projects] binding gone (${n.reason}, ${e}) \u2014 dropping the reply mount`);
        let i = r;
        r = null, await R(i)
      }
      return
    }
    if (b(), r && r.binding.mountUrl === n.binding.mountUrl) {
      if (E(r)) {
        t(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
        let i = r;
        if (r = null, await R(i), f) return;
        await B(n.binding);
        return
      }
      P(r, n.binding), r.binding = n.binding;
      return
    }
    t(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`), await B(n.binding)
  }
  async function B(e) {
    if (g().mcp.clients.some((i) => i.name === Ac) || Ac in F().configs || T()) {
      t(`[bridge:projects] reply mount skipped: a server named ${Ac} is already configured`, {
        level: "warn"
      }), p("bridge_projects_mcp_mount", "name_taken");
      return
    }
    let o = Cye({
        ...INo(e.mountUrl, s.sessionId),
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
    if (r = n, y((i) => kue(i, Ac, {
        client: {
          name: Ac,
          type: "pending",
          config: o
        },
        tools: [],
        commands: []
      })), !w) n.allowRules = O(e.autoAllowTools.map((i) => Mn({
      toolName: Ia(Ac, i)
    })));
    await N(n)
  }
  async function N(e) {
    let o = br(),
      n;
    try {
      n = {
        ...await C().reconnectMcpServerImpl(Ac, e.config, s.storageV5, s.credentials),
        attemptEpoch: o
      }
    } catch (d) {
      t(`[bridge:projects] reply mount connect threw: ${l(d)}`, {
        level: "warn"
      }), n = {
        client: {
          name: Ac,
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
    let i = cbe(s.stores, Ac, n);
    if (i !== "applied") {
      p("bridge_projects_mcp_mount", i), b();
      return
    }
    if (n.client.type === "connected") h(), a8(Ac, void 0), _("bridge_projects_mcp_mount");
    else if (x(n.client))
      if (a8(Ac, Object.assign(Error("reply mount dial failed"), {
          mcpErrorSource: "downstream_unreachable"
        })), j()) p("bridge_projects_mcp_mount", "settled_failed_retrying");
      else m("bridge_projects_mcp_mount", "settled_failed");
    else m("bridge_projects_mcp_mount", n.client.type === "failed" ? `settled_failed_${(n.client.errorCode??"answered").toLowerCase()}` : `settled_${n.client.type}`)
  }

  function E(e) {
    let o = g().mcp.clients.find((n) => n.name === Ac);
    return o !== void 0 && o.config === e.config && x(o)
  }
  async function R(e) {
    S(e.allowRules);
    let o = g().mcp.clients.find((i) => i.name === Ac);
    if (o && o.config !== e.config) {
      await D(e.config);
      return
    }
    let n = hi(Ac);
    y((i) => {
      let {
        [Ac]: d, ...v
      } = i.mcp.resources, {
        [Ac]: I,
        ...H
      } = i.mcp.resourceTemplates;
      return {
        ...i,
        mcp: {
          ...i.mcp,
          clients: i.mcp.clients.filter((a) => a !== o),
          tools: i.mcp.tools.filter((a) => !xc(a, Ac, n)),
          commands: i.mcp.commands.filter((a) => !Qh(a, Ac)),
          resources: v,
          resourceTemplates: H
        }
      }
    }), await D(e.config)
  }

  function b() {
    if (!r) return;
    let e = g().mcp.clients.find((n) => n.name === Ac);
    if (e && e.config === r.config && !T()) {
      if (!w) P(r, r.binding);
      return
    }
    t("[bridge:projects] the reply mount\u2019s name is no longer held by its own row \u2014 retracting its pre-approvals", {
      level: "warn"
    });
    let o = r;
    r = null, R(o)
  }

  function T() {
    return Object.hasOwn(s.sdkHostConfigs(), Ac)
  }

  function L(e) {
    if (!Object.hasOwn(e, Ac)) return;
    if (w = !0, !r) return;
    let o = r.allowRules;
    r.allowRules = [], S(o)
  }

  function V() {
    w = !1, b()
  }

  function P(e, o) {
    if (w) return;
    let n = o.autoAllowTools.map((a) => Mn({
        toolName: Ia(Ac, a)
      })),
      i = new Set(n),
      d = new Set(e.allowRules),
      v = e.allowRules.filter((a) => !i.has(a));
    if (v.length > 0) S(v);
    let I = e.allowRules.filter((a) => i.has(a)),
      H = O(n.filter((a) => !d.has(a)));
    e.allowRules = [...I, ...H]
  }

  function k(e) {
    return U(g().toolPermissionContext.alwaysAllowRules.session ?? [], (o) => o === e)
  }

  function O(e) {
    if (f) return [];
    if (e.length === 0) return [];
    let o = new Map(e.map((n) => [n, k(n)]));
    return y((n) => ({
      ...n,
      toolPermissionContext: vc(n.toolPermissionContext, {
        type: "addRules",
        destination: "session",
        behavior: "allow",
        rules: e.map(Jn)
      })
    })), e.filter((n) => k(n) > (o.get(n) ?? 0))
  }

  function S(e) {
    if (e.length === 0) return;
    y((o) => {
      let n = [...o.toolPermissionContext.alwaysAllowRules.session ?? []];
      for (let i of e) {
        let d = n.indexOf(i);
        if (d !== -1) n.splice(d, 1)
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
    return C().clearServerCache(Ac, e).catch((o) => {
      t(`[bridge:projects] reply mount cleanup failed: ${l(o)}`, {
        level: "warn"
      })
    })
  }

  function Y() {
    if (f = !0, h(), r) {
      let e = r.allowRules;
      r.allowRules = [], S(e)
    }
    return u = u.then(async () => {
      if (!r) return;
      t("[bridge:projects] dropping the reply mount");
      let e = r;
      r = null, await R(e)
    }).catch((e) => {
      t(`[bridge:projects] drop threw: ${l(e)}`, {
        level: "warn"
      })
    }), u
  }
  return {
    sync: A,
    drop: Y,
    reassertOwnership: b,
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
  eXn
};
