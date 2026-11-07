// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { sre } from "B:/~BUN/root/chunk-44wgxs8c.js";
import { akn, M4t, i1e, P8 } from "B:/~BUN/root/chunk-1pb6cmje.js";
import { grr } from "B:/~BUN/root/chunk-8b9g5aw6.js";
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { ga, J, zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Id, dN } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { yo, ta } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { a0 } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { bV } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { qy } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { vi } from "B:/~BUN/root/chunk-knfpag6d.js";
import { See, LCe, Ivs } from "B:/~BUN/root/chunk-78494p3w.js";
import { Xb } from "B:/~BUN/root/chunk-7vfy9z2g.js";
import { txt, pde, adr, b$, JB } from "B:/~BUN/root/chunk-27h4st9h.js";
import { dD, D2 as toolName } from "B:/~BUN/root/chunk-pjcve3z9.js";
import { gfi } from "B:/~BUN/root/chunk-cyfw9sb9.js";
import { b1e, e9r, I3e, CYt, fvn, yfi } from "B:/~BUN/root/chunk-560mcemn.js";
import { rui } from "B:/~BUN/root/chunk-jckq2qps.js";
import { V5o, skn } from "B:/~BUN/root/chunk-mwd1j0ax.js";
import { dlt } from "B:/~BUN/root/chunk-hm7jb5w7.js";
import { Osr, kfi } from "B:/~BUN/root/chunk-grafhwky.js";
import { zM } from "B:/~BUN/root/chunk-kr1v6gnh.js";
import { Al } from "B:/~BUN/root/chunk-md18120p.js";
import { Ta } from "B:/~BUN/root/chunk-e0q1m1z9.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { uwe } from "B:/~BUN/root/chunk-79595s9y.js";
function x(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return;
  }
  if (o.host === "") return;
  return `${o.protocol}//${b$(o.host)}`;
}
function oe(e, o) {
  let t = x(e),
    i = x(o);
  return t === void 0 || i === void 0 || t !== i;
}
function B(e, to) {
  let t = vi().lastExecutedTabUrlByScope.get(e);
  if (t === void 0) return;
  return oe(t, to) ? {
    from: t,
    to: to
  } : void 0;
}
function F(e, o) {
  vi().lastExecutedTabUrlByScope.set(e, o);
}
var Y = 200;
function N(e, o) {
  let resolvedHostByToolUseId = vi().resolvedHostByToolUseId;
  if (resolvedHostByToolUseId.size >= Y) resolvedHostByToolUseId.clear();
  resolvedHostByToolUseId.set(e, o);
}
function te(e, o) {
  let resolvedUrlByToolUseId = vi().resolvedUrlByToolUseId;
  if (resolvedUrlByToolUseId.size >= Y) resolvedUrlByToolUseId.clear();
  resolvedUrlByToolUseId.set(e, o);
}
function Q() {
  let {
      key: e,
      fromHost: fromHost
    } = V5o(),
    t = vi().chromeTabGroupTitle;
  if (t !== void 0 && uwe() && gn("allow_chrome_tab_group_title")) return {
    sessionId: e,
    displayName: t
  };
  if (fromHost) return {
    sessionId: e
  };
  let sessionId = z();
  return {
    sessionId: sessionId
  };
}
function v_a(context, socketClient) {
  vi().bridgeBinding = {
    context: context,
    socketClient: socketClient
  };
}
function H(e, o) {
  let t = dD.slice(0, -2),
    i = `${dD}*`;
  for (let n of Object.values(e.alwaysAllowRules)) for (let s of n ?? []) {
    let p = s.replace(/\(\*?\)$/, "");
    if (p === o || p === t || p === i) return !0;
  }
  return !1;
}
var re = new Set(["tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "resize_window", "shortcuts_list", "list_connected_browsers"]),
  ne = new Set(["switch_browser", "select_browser"]),
  ie = {
    tab_missing: "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
    batch_multiple_tabs: "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
    batch_after_navigate: "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item: "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch."
  };
function ae(name, input) {
  let t = [];
  if (name === "browser_batch") {
    if (!Array.isArray(input.actions)) return {
      kind: "deny",
      code: "batch_malformed_item"
    };
    for (let s of input.actions) {
      if (!D(s) || typeof s.name !== "string" || s.name === "browser_batch") return {
        kind: "deny",
        code: "batch_malformed_item"
      };
      t.push({
        name: s.name,
        input: D(s.input) ? s.input : {}
      });
    }
  } else t.push({
    name: name,
    input: input
  });
  let i = new Set(),
    n = !1;
  for (let s of t) {
    if (s.name === "navigate") {
      n = !0;
      continue;
    }
    if (ne.has(s.name)) {
      if (t.length > 1) return {
        kind: "deny",
        code: "batch_browser_switch"
      };
      continue;
    }
    if (re.has(s.name)) continue;
    if (n) return {
      kind: "deny",
      code: "batch_after_navigate"
    };
    if (typeof s.input.tabId !== "number") return {
      kind: "deny",
      code: "tab_missing"
    };
    i.add(s.input.tabId);
  }
  if (i.size === 0) return {
    kind: "none"
  };
  if (i.size > 1) return {
    kind: "deny",
    code: "batch_multiple_tabs"
  };
  return {
    kind: "tab",
    tabId: [...i][0]
  };
}
var X = 5000,
  ce = 2500,
  de = new Set(["connect_timeout", "no_browser_selected_timeout", "browser_selected_late_timeout", "answer_timeout"]);
async function G(e) {
  let o = ga.monotonicNow(),
    t = Promise.withResolvers(),
    abortController = new AbortController(),
    n = O({
      onSentToSelectedBrowser: t.resolve
    }).then(l => (abortController.abort(), q(l, e))),
    s = {
      sent: !1
    },
    p = t.promise.then(async () => {
      await J(ce, abortController.signal);
      let capMs = X - (ga.monotonicNow() - o),
        d = vi().bridgeBinding?.socketClient;
      if (abortController.signal.aborted || capMs <= 0 || d?.isConnected() !== !0 || d.hasActiveSelection?.() !== !0) return;
      s.sent = !0;
      let r = q(await O({
        capMs: capMs
      }), e);
      if (L(r)) return r;
      if (r.ok || !de.has(r.failure)) s.callMs = r.callMs;
      return;
    }).catch(l => {
      a(l);
      return;
    }),
    _ = await Promise.race([n.then(() => {
      return;
    }), p]);
  if (_ === void 0) {
    let l = await n;
    if (s.sent && !l.ok && l.failure === "answer_timeout") return {
      ...l,
      failure: "answer_timeout_after_retry",
      retryCallMs: s.callMs
    };
    return l;
  }
  return n.then(l => {
    let d = {
        connect_ms: l.connectMs,
        call_ms: l.callMs,
        retry_call_ms: _.callMs
      },
      r = L(l);
    if (r) {
      if (b$(r.host) !== b$(L(_)?.host ?? "")) c("chrome_permission_prompt", "tab_lookup_hosts_differed", d);
      return;
    }
    let u = l.ok ? "non_web_tab_url" : l.failure;
    if (u === "answer_timeout") {
      c("chrome_permission_prompt", "tab_lookup_rescued_after_answer_timeout", d);
      return;
    }
    c("chrome_permission_prompt", "tab_lookup_rescued_after_failure", {
      ...d,
      first_lookup_failure: f(u)
    });
  }).catch(a), _;
}
function j(e) {
  return {
    connect_ms: e.connectMs,
    call_ms: e.callMs,
    ...(!e.ok && e.retryCallMs !== void 0 && {
      retry_call_ms: e.retryCallMs
    })
  };
}
function L(e) {
  return e.ok ? CYt(e.url) : void 0;
}
function q(e, o) {
  if (!e.ok) return e;
  let {
      tabs: tabs,
      connectMs: connectMs,
      callMs: callMs
    } = e,
    s = tabs.findIndex(item => item == null || item.tabId === o),
    p = tabs[s];
  if (s === -1) return {
    ok: !1,
    failure: tabs.length === 0 ? "empty_tab_list" : "tab_not_listed",
    connectMs: connectMs,
    callMs: callMs
  };
  if (p == null || typeof p.url !== "string") return {
    ok: !1,
    failure: "malformed_tab_list",
    connectMs: connectMs,
    callMs: callMs
  };
  if (p.url === "") return {
    ok: !1,
    failure: "tab_url_empty",
    connectMs: connectMs,
    callMs: callMs
  };
  return {
    ok: !0,
    url: p.url,
    connectMs: connectMs,
    callMs: callMs
  };
}
async function O(e) {
  let o = ga.monotonicNow(),
    t = {},
    i;
  try {
    let bridgeBinding = vi().bridgeBinding;
    if (!bridgeBinding) return {
      ok: !1,
      failure: "binding_missing",
      connectMs: 0,
      callMs: 0
    };
    let {
      socketClient: socketClient_2
    } = bridgeBinding;
    i = await zt((async () => {
      if (!(await socketClient_2.ensureConnected())) return "not_connected";
      if (t.browserSelected = socketClient_2.hasActiveSelection?.(), t.startedAt = ga.monotonicNow(), t.browserSelected === !0) e?.onSentToSelectedBrowser?.();
      let d = await socketClient_2.callTool("tabs_context_mcp", {
        createIfEmpty: !1,
        includePermissionState: !1
      }, {
        permissionMode: "ask",
        sessionScope: Q()
      });
      if (!d) return "empty_result";
      if (d.error) return `tool_error_${akn("tabs_context_mcp", M4t(d.error))}`;
      let r = d.result?.content,
        u = Array.isArray(r) && r[0] && typeof r[0] === "object" && "text" in r[0] && typeof r[0].text === "string" ? r[0].text : void 0;
      if (!u) return "no_text";
      let y;
      try {
        y = ee(u);
      } catch {
        return u.includes("createIfEmpty") ? "no_tab_group" : "not_json";
      }
      let w = y?.availableTabs;
      return Array.isArray(w) ? w : "no_tab_list";
    })().catch(d => {
      if (t.startedAt === void 0) return "connect_threw";
      if (d instanceof Error && (d.name === "SocketConnectionError" || d.name === "ToolCallLostError")) return "connection_lost";
      if (d instanceof i1e) return "no_extension";
      if (d instanceof P8) return "extension_disconnected";
      return "call_threw";
    }), e?.capMs ?? X, "queryTabUrl bridge call").catch(() => {
      if (t.startedAt === void 0) return "connect_timeout";
      if (socketClient_2.hasActiveSelection?.() === !1) return "no_browser_selected_timeout";
      return t.browserSelected === !1 ? "browser_selected_late_timeout" : "answer_timeout";
    });
  } catch {
    i = "other_threw";
  }
  let n = ga.monotonicNow(),
    connectMs_2 = Math.round((t.startedAt ?? n) - o),
    callMs_2 = t.startedAt === void 0 ? 0 : Math.round(n - t.startedAt);
  return typeof i === "string" ? {
    ok: !1,
    failure: i,
    connectMs: connectMs_2,
    callMs: callMs_2
  } : {
    ok: !0,
    tabs: i,
    connectMs: connectMs_2,
    callMs: callMs_2
  };
}
rui(async () => {
  let e = await O();
  return e.ok ? e.tabs : void 0;
});
var ue = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function K(e) {
  return {
    type: "text",
    text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]`
  };
}
function me(e) {
  if (!e) return !1;
  let o = tt(e, ";").trim().toLowerCase();
  return ue.has(o === "image/jpg" ? "image/jpeg" : o);
}
async function fe(e, o) {
  let limits = Al(o),
    i = [];
  for (let n of e.content ?? []) if (n.type === "text") i.push({
    type: "text",
    text: n.text
  });else if (n.type === "image") if (me(n.mimeType)) try {
    let {
      block: block
    } = await Xb({
      data: String(n.data),
      mediaType: n.mimeType,
      limits: limits
    });
    i.push(block);
  } catch {
    i.push(K("could not be decoded"));
  } else i.push(K(`unsupported type ${n.mimeType ?? "unknown"}`));
  return i;
}
function pe(e) {
  if (!Array.isArray(e.actions)) return !1;
  return e.actions.some(item => {
    if (!D(item) || typeof item.name !== "string") return !0;
    return item.name === "browser_batch" || sre.has(item.name) && !pde(item.name, D(item.input) ? item.input : {});
  });
}
function Z(e) {
  if (!Array.isArray(e.actions)) return [];
  let o = [];
  for (let t of e.actions) {
    if (!D(t)) continue;
    let i = D(t.input) ? t.input : {};
    if (t.name === "browser_batch") {
      let p = Z(i);
      if (p === "unvettable") return p;
      o.push(...p);
      continue;
    }
    if (t.name !== "navigate" || typeof i.url !== "string") continue;
    let n = i.url.trim().toLowerCase();
    if (n === "back" || n === "forward") continue;
    let s = CYt(i.url);
    if (!s) return "unvettable";
    o.push(s.host, fvn(s));
  }
  return o;
}
function V(ruleContent, source) {
  return {
    source: source,
    ruleBehavior: "allow",
    ruleValue: {
      toolName: toolName,
      ruleContent: ruleContent
    }
  };
}
function W(e, o, t) {
  let i = dlt(e, o);
  return t ? `Allow Claude in Chrome to ${i} on ${t}?` : `Allow Claude in Chrome to ${i}?`;
}
function be(e, o) {
  return async t => {
    let i;
    try {
      i = new URL(t.url);
    } catch {}
    let n = !!i?.host && e.has(b$(i.host)) && !e9r(o, b$(fvn({
      url: i.href
    })));
    if (!n) m("chrome_permission_prompt", "stale_host_mismatch");
    return n;
  };
}
async function _e(e, o, t, i, n, s, p) {
  let bridgeBinding_2 = vi().bridgeBinding;
  if (!bridgeBinding_2) throw m("chrome_permission_prompt", "binding_missing"), Error("Claude in Chrome bridge is not initialized in this session.");
  if (t.aborted) throw new Ke("Claude in Chrome tool call aborted");
  let l,
    promise = new Promise((k, h) => {
      l = () => h(new Ke("Claude in Chrome tool call aborted")), t.addEventListener("abort", l, {
        once: !0
      });
    }),
    r,
    u = s?.mark("external");
  try {
    r = await Promise.race([grr(bridgeBinding_2.context, bridgeBinding_2.socketClient, e, adr(o ?? {}), n), promise]);
  } finally {
    if (u?.(), l) t.removeEventListener("abort", l);
  }
  if (r.isError) {
    let k = (r.content ?? []).flatMap(item => item.type === "text" ? [item.text] : []).join(`
`) || `${e} failed`,
      _meta = r._meta,
      T = _meta?.toolCallFailureCause,
      v = _meta?.isBridgeTimeout === !0 ? "bridge_timeout" : _meta?.isFrontLoadBoundExceeded === !0 ? "front_load_bound_exceeded" : T === "connection_lost_mid_call" || T === "connection_lost_before_call" ? T : void 0,
      _meta_2 = D(_meta) ? zM(_meta) : void 0;
    throw Object.assign(new qy(k, "Claude in Chrome tool returned error", _meta_2 ? {
      _meta: _meta_2
    } : void 0, `chrome_${v ?? akn(e, k)}`), {
      mcpErrorSource: "other"
    });
  }
  let data = await fe(await gfi(r, e, t, p), i),
    _meta_3 = zM(r._meta);
  return {
    data: data,
    ...(_meta_3 && {
      mcpMeta: {
        _meta: _meta_3
      }
    })
  };
}
function z5o(toolName_2) {
  let o = `${dD}${toolName_2}`;
  return {
    checkPermissions: async (n, s) => {
      Osr(s.options?.messageClientPlatform);
      let toolUseId = s.toolUseId,
        _ = sre.has(toolName_2);
      if (_ && pde(toolName_2, n)) {
        let b = se(s);
        if (b?.chromeHostToolAsksEnabled !== !1 && b?.mcpAskForTools?.[Ta]?.includes(toolName_2) === !0 && !a0(b) && b.mode !== "dontAsk") return {
          behavior: "ask",
          message: "Claude in Chrome requires permission.",
          suppressAlwaysAllowRule: !0,
          decisionReason: {
            type: "other",
            reason: "Claude in Chrome action"
          },
          metadata: {
            command: {
              name: o,
              description: W(toolName_2, n, void 0)
            }
          }
        };
        return {
          behavior: "allow",
          updatedInput: n
        };
      }
      let l = _ && !pde(toolName_2, n) || toolName_2 === "browser_batch" && pe(n);
      if (toolName_2 === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) return {
        behavior: "allow",
        updatedInput: n
      };
      let d = toolName_2 === "browser_batch" ? yfi(n) : {
          input: n,
          toolName: toolName_2
        },
        r;
      if (d && d.toolName === "navigate" && typeof d.input.url === "string") {
        if (r = CYt(d.input.url), !r) return m("chrome_permission_prompt", "non_web_url"), {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable URL",
            classifierApprovable: !1
          }
        };
      } else if (d && typeof d.input.tabId === "number") {
        let b = await G(d.input.tabId);
        if (!b.ok) return m("chrome_permission_prompt", `tab_url_unresolved_${b.failure}`, j(b)), {
          behavior: "deny",
          message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: tab URL unresolved",
            classifierApprovable: !1
          }
        };
        if (r = CYt(b.url), !r) return m("chrome_permission_prompt", "non_web_tab_url"), {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable tab URL",
            classifierApprovable: !1
          }
        };
      }
      let u = se(s),
        y = Id(s.options?.tools?.find(b => ht(b, o)), u),
        w = y === "bypassPermissions" || dN(y, u.isBypassPermissionsModeAvailable),
        k = u.chromeNavigationClassifierEnabled === !0 && !w && (u.chromeClassifierFloorEnabled === !0 || yo(y)),
        navigation,
        T,
        v = () => {
          if (!toolUseId) return;
          if (T === void 0) vi().resolvedUrlByToolUseId.delete(toolUseId);else te(toolUseId, T);
          if (navigation === void 0) txt(toolUseId);
        };
      if (k) {
        let b = ae(toolName_2, n);
        if (b.kind === "deny") return m("chrome_permission_prompt", b.code), v(), {
          behavior: "deny",
          message: ie[b.code],
          decisionReason: {
            type: "safetyCheck",
            reason: `Claude in Chrome: ${b.code}`,
            classifierApprovable: !1
          }
        };
        if (b.kind === "tab") {
          let C = r && d?.toolName !== "navigate" && d?.input.tabId === b.tabId ? {
              ok: !0,
              url: r.url,
              connectMs: 0,
              callMs: 0
            } : await G(b.tabId),
            U = C.ok ? CYt(C.url) : void 0;
          if (U === void 0) return m("chrome_permission_prompt", `tab_url_unresolved_${C.ok ? "non_web_tab_url" : C.failure}`, j(C)), v(), {
            behavior: "deny",
            message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: tab URL unresolved",
              classifierApprovable: !1
            }
          };
          if (navigation = B(skn(), U.url), !(l && u.mode === "plan")) T = U.url;
        }
      }
      v();
      let S = toolName_2 === "browser_batch" ? Z(n) : [];
      if (S === "unvettable") return m("chrome_permission_prompt", "non_web_url"), {
        behavior: "deny",
        message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
        decisionReason: {
          type: "safetyCheck",
          reason: "Claude in Chrome: non-web or unparseable URL",
          classifierApprovable: !1
        }
      };
      let A = b1e(u),
        P = [...(r ? [r.host, fvn(r)] : []), ...S].map(item => I3e(A, item)).find(item => item !== void 0);
      if (P) return c("chrome_permission_prompt", "domain_rule_denied"), P;
      let domainAllowed = !1,
        grantRule;
      if (r) {
        let b = b$(r.host),
          C = A.sourceOf.get(b) ?? "session";
        if (domainAllowed = A.allowed.has(b), grantRule = domainAllowed ? V(r.host, C) : void 0, domainAllowed && navigation === void 0 && u.chromeClassifierFloorEnabled !== !0 && !l) {
          if (toolUseId) N(toolUseId, r);
          return {
            behavior: "allow",
            updatedInput: n,
            decisionReason: {
              type: "rule",
              rule: V(r.host, C)
            }
          };
        }
        if (toolUseId && (domainAllowed || u.chromeClassifierFloorEnabled === !0 || !H(u, o))) N(toolUseId, r);
      }
      let bridgeBinding_3 = vi().bridgeBinding;
      if (toolUseId && bridgeBinding_3 && !w && !(u.chromeClassifierFloorEnabled !== !0 && H(u, o)) && (await kfi(s.abortController.signal))) return {
        behavior: "deny",
        message: bridgeBinding_3.context.onToolCallDisconnected(),
        decisionReason: {
          type: "other",
          reason: "Claude in Chrome: no browser connected"
        }
      };
      if (l && u.mode === "plan") return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission.",
        suggestions: [{
          type: "addRules",
          rules: [{
            toolName: o,
            ruleContent: void 0
          }],
          behavior: "allow",
          destination: "session"
        }]
      };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: r ? domainAllowed ? void 0 : [{
          type: "addRules",
          rules: [{
            toolName: toolName,
            ruleContent: r.host
          }],
          behavior: "allow",
          destination: "session"
        }] : [{
          type: "addRules",
          rules: [{
            toolName: o,
            ruleContent: void 0
          }],
          behavior: "allow",
          destination: "session"
        }],
        decisionReason: navigation ? {
          type: "safetyCheck",
          reason: "Claude in Chrome: cross-site navigation pending",
          classifierApprovable: !0
        } : {
          type: "other",
          reason: r ? `Claude in Chrome action on ${r.host}` : "Claude in Chrome action"
        },
        metadata: {
          command: {
            name: o,
            description: W(toolName_2, n, r?.host),
            chrome: r ? {
              ...r,
              domainAllowed: domainAllowed,
              navigation: navigation,
              ...(grantRule && {
                grantRule: grantRule,
                classifierUnavailable: u.chromeClassifierFloorEnabled === !0 && u.canAutoClassifierRun === !1
              })
            } : void 0
          }
        }
      };
    },
    call: async (n, s, p, _, l, d) => {
      let toolUseId_2 = s.toolUseId,
        u = toolUseId_2 ? vi().resolvedHostByToolUseId.get(toolUseId_2) : void 0,
        y = u?.host,
        w = toolUseId_2 ? vi().resolvedUrlByToolUseId.get(toolUseId_2) : void 0;
      if (toolUseId_2) vi().resolvedHostByToolUseId.delete(toolUseId_2), vi().resolvedUrlByToolUseId.delete(toolUseId_2);
      if (le() && See({
        agentId: s.agentId,
        stickyBetas: s.stickyBetas,
        namesShownToApi: s.namesShownToApi,
        toolName: o
      })) throw new R(See() ? LCe() : Ivs(), "Claude in Chrome call refused in REPL mode");
      let k = se(s),
        h = b1e(k),
        allowed = h.allowed,
        allowedDomains = [...h.allowedRaw],
        S = u && [u.host, u.url === void 0 ? `${u.host}:80` : fvn({
          url: u.url
        })].map(item => I3e(h, item)).find(item => item !== void 0);
      if (S) throw c("chrome_permission_prompt", "domain_rule_denied"), new R(S.message, "Claude in Chrome call refused under a deny rule");
      if (y && !allowed.has(b$(y))) allowed.add(b$(y)), allowedDomains.push(y);
      let A = s.options?.tools?.find(C => ht(C, o)),
        P = Id(A, k),
        M = P === "bypassPermissions" || P === "auto" && s.autoModeClassified === !0 && y !== void 0 && h.denied.size === 0 && u?.keepHostPin !== !0,
        sessionScope = Q(),
        I = M ? {
          permissionMode: "skip_all_permission_checks",
          sessionScope: sessionScope
        } : y ? {
          permissionMode: "follow_a_plan",
          allowedDomains: allowedDomains,
          onPermissionRequest: be(allowed, h.denied),
          sessionScope: sessionScope
        } : allowedDomains.length > 0 ? {
          permissionMode: "follow_a_plan",
          allowedDomains: allowedDomains,
          sessionScope: sessionScope
        } : {
          permissionMode: "ask",
          sessionScope: sessionScope
        },
        b = await _e(toolName_2, n, s.abortController.signal, s.options.mainLoopModel, I, d?.timing, s);
      if (w !== void 0) {
        let C = skn();
        if (bV(s) === void 0 || !vi().lastExecutedTabUrlByScope.has(C)) F(C, w);
      }
      if (y) g("chrome_permission_prompt");
      return b;
    },
    ignoresWholeToolAllowRule: n => sre.has(toolName_2) && pde(toolName_2, n)
  };
}
export { v_a, z5o };