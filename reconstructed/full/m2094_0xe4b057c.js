// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  gtt
} from "B:/~BUN/root/chunk-eg1v19ms.js";
import {
  mtt,
  q9t
} from "B:/~BUN/root/chunk-y69xbd21.js";
import {
  Y
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  We,
  P
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  zt
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  J
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Ze
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Aa,
  li
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  G,
  X0,
  K1
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  wft,
  vft
} from "B:/~BUN/root/chunk-2ppgegpr.js";
import {
  JHe
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  ou,
  zB,
  CTe
} from "B:/~BUN/root/chunk-tgk1nfes.js";
import {
  CGe,
  zGe,
  tF
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Cl
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  gao
} from "B:/~BUN/root/chunk-p0ea6pj4.js";
import {
  rTt
} from "B:/~BUN/root/chunk-btqm7wqf.js";
import {
  L7
} from "B:/~BUN/root/chunk-dmfdsk0y.js";
import {
  zy
} from "B:/~BUN/root/chunk-kk0ky5aa.js";

function W(t) {
  return t.replace(/^www\./i, "")
}

function A(t) {
  if (t.startsWith("[")) {
    let n = t.indexOf("]");
    return n === -1 ? t : t.slice(0, n + 1)
  }
  let e = t.lastIndexOf(":");
  return e === -1 ? t : t.slice(0, e)
}

function h(t) {
  let e = wft(t).replace(/\.+(?=$|:)/, "").toLowerCase(),
    n = A(e),
    r = e.slice(n.length),
    o = (vft(n) || n).replace(/\.+$/, "");
  return W(o + r)
}

function L(t) {
  let e;
  try {
    e = new URL(t)
  } catch {
    return
  }
  if (e.host === "") return;
  return `${e.protocol}//${h(e.host)}`
}

function K(t, e) {
  let n = L(t),
    r = L(e);
  return n === void 0 || r === void 0 || n !== r
}

function M(t, e) {
  let n = ou().lastExecutedTabUrlByScope.get(t);
  if (n === void 0) return;
  return K(n, e) ? {
    from: n,
    to: e
  } : void 0
}

function x(t, e) {
  ou().lastExecutedTabUrlByScope.set(t, e)
}
var z = 200;

function B(t, e) {
  let n = ou().resolvedHostByToolUseId;
  if (n.size >= z) n.clear();
  n.set(t, e)
}

function Q(t, e) {
  let n = ou().resolvedUrlByToolUseId;
  if (n.size >= z) n.clear();
  n.set(t, e)
}

function j() {
  let t = Y();
  return {
    sessionId: t
  }
}

function G4o(t, e) {
  ou().bridgeBinding = {
    context: t,
    socketClient: e
  }
}
var X = new RegExp(`^${CTe}\\(([^)]+)\\)$`);

function D(t) {
  let e = new Set,
    n = [],
    r = new Set,
    o = new Map;
  return H(t.alwaysDenyRules, r, o), H(t.alwaysAllowRules, e, o, n, r), {
    allowed: e,
    denied: r,
    allowedRaw: n,
    sourceOf: o
  }
}

function Z(t, e) {
  let n = zB.slice(0, -2),
    r = `${zB}*`;
  for (let o of Object.values(t.alwaysAllowRules))
    for (let s of o ?? []) {
      let i = s.replace(/\(\*?\)$/, "");
      if (i === e || i === n || i === r) return !0
    }
  return !1
}

function O(t, e) {
  return t.has(e) || t.has(A(e))
}

function H(t, e, n, r, o) {
  for (let [s, i] of Object.entries(t))
    for (let b of i ?? []) {
      let l = X.exec(b);
      if (l?.[1]) {
        let c = h(l[1]);
        if (o && O(o, c)) continue;
        if (!e.has(c)) e.add(c), n.set(c, s), r?.push(l[1])
      }
    }
}
var ee = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;

function U(t) {
  let e = t.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""),
    n;
  try {
    if (n = new URL(e), n.protocol !== "http:" && n.protocol !== "https:") {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0
    }
  } catch {}
  if (!n) {
    if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) return;
    try {
      n = new URL(`https://${e}`)
    } catch {
      return
    }
    if (ee.test(JHe(e))) return
  }
  if (!n.host || n.username || n.password) return;
  return {
    host: n.host,
    url: n.href
  }
}
var te = new Set(["tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "resize_window", "shortcuts_list", "list_connected_browsers"]),
  ne = new Set(["switch_browser", "select_browser"]),
  oe = {
    tab_missing: "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
    batch_multiple_tabs: "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
    batch_after_navigate: "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item: "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch."
  };

function re(t, e) {
  let n = [];
  if (t === "browser_batch") {
    if (!Array.isArray(e.actions)) return {
      kind: "deny",
      code: "batch_malformed_item"
    };
    for (let s of e.actions) {
      if (!G(s) || typeof s.name !== "string" || s.name === "browser_batch") return {
        kind: "deny",
        code: "batch_malformed_item"
      };
      n.push({
        name: s.name,
        input: G(s.input) ? s.input : {}
      })
    }
  } else n.push({
    name: t,
    input: e
  });
  let r = new Set,
    o = !1;
  for (let s of n) {
    if (s.name === "navigate") {
      o = !0;
      continue
    }
    if (ne.has(s.name)) {
      if (n.length > 1) return {
        kind: "deny",
        code: "batch_browser_switch"
      };
      continue
    }
    if (te.has(s.name)) continue;
    if (o) return {
      kind: "deny",
      code: "batch_after_navigate"
    };
    if (typeof s.input.tabId !== "number") return {
      kind: "deny",
      code: "tab_missing"
    };
    r.add(s.input.tabId)
  }
  if (r.size === 0) return {
    kind: "none"
  };
  if (r.size > 1) return {
    kind: "deny",
    code: "batch_multiple_tabs"
  };
  return {
    kind: "tab",
    tabId: [...r][0]
  }
}
var se = 5000;
async function F(t) {
  try {
    return (await q())?.find((n) => n.tabId === t)?.url
  } catch {
    return
  }
}
async function q() {
  let t = ou().bridgeBinding;
  if (!t) return;
  try {
    return await Ht((async () => {
      if (!await t.socketClient.ensureConnected()) return;
      let e = await t.socketClient.callTool("tabs_context_mcp", {
        createIfEmpty: !1,
        includePermissionState: !1
      }, {
        permissionMode: "ask",
        sessionScope: j()
      });
      if (!e || e.error) return;
      let n = e.result?.content,
        r = Array.isArray(n) && n[0] && typeof n[0] === "object" && "text" in n[0] && typeof n[0].text === "string" ? n[0].text : void 0;
      if (!r) return;
      return J(r).availableTabs
    })(), se, "queryTabUrl bridge call")
  } catch {
    return
  }
}
gao(q);
var ie = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);

function N(t) {
  return {
    type: "text",
    text: `[Image from Claude in Chrome \u2014 ${t}; not inlined]`
  }
}

function ae(t) {
  if (!t) return !1;
  let e = Ze(t, ";").trim().toLowerCase();
  return ie.has(e === "image/jpg" ? "image/jpeg" : e)
}
async function le(t, e) {
  let n = Cl(e),
    r = [];
  for (let o of t.content ?? [])
    if (o.type === "text") r.push({
      type: "text",
      text: o.text
    });
    else if (o.type === "image")
    if (ae(o.mimeType)) try {
      let {
        block: s
      } = await zy({
        data: String(o.data),
        mediaType: o.mimeType,
        limits: n
      });
      r.push(s)
    } catch {
      r.push(N("could not be decoded"))
    } else r.push(N(`unsupported type ${o.mimeType??"unknown"}`));
  return r
}

function de(t) {
  if (!Array.isArray(t.actions)) return;
  for (let e of t.actions) {
    if (!G(e) || typeof e.name !== "string") continue;
    let n = G(e.input) ? e.input : {};
    if (gtt.has(e.name) && zGe(e.name, n)) continue;
    if (e.name === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof n.url === "string" || typeof n.tabId === "number") return {
      toolName: e.name,
      input: n
    }
  }
  return
}

function ce(t) {
  if (!Array.isArray(t.actions)) return !1;
  return t.actions.some((e) => {
    if (!G(e) || typeof e.name !== "string") return !0;
    return e.name === "browser_batch" || gtt.has(e.name) && !zGe(e.name, G(e.input) ? e.input : {})
  })
}

function V(t) {
  if (!Array.isArray(t.actions)) return [];
  let e = [];
  for (let n of t.actions) {
    if (!G(n)) continue;
    let r = G(n.input) ? n.input : {};
    if (n.name === "browser_batch") {
      let i = V(r);
      if (i === "unvettable") return i;
      e.push(...i);
      continue
    }
    if (n.name !== "navigate" || typeof r.url !== "string") continue;
    let o = r.url.trim().toLowerCase();
    if (o === "back" || o === "forward") continue;
    let s = U(r.url);
    if (!s) return "unvettable";
    e.push(s.host)
  }
  return e
}

function ue(t, e, n) {
  let r = rTt(t, e);
  return n ? `Allow Claude in Chrome to ${r} on ${n}?` : `Allow Claude in Chrome to ${r}?`
}

function fe(t) {
  return async (e) => {
    let n;
    try {
      n = new URL(e.url).host
    } catch {}
    let r = !!n && t.has(h(n));
    if (!r) m("chrome_permission_prompt", "stale_host_mismatch");
    return r
  }
}
async function pe(t, e, n, r, o) {
  let s = ou().bridgeBinding;
  if (!s) throw m("chrome_permission_prompt", "binding_missing"), Error("Claude in Chrome bridge is not initialized in this session.");
  if (n.aborted) throw new We("Claude in Chrome tool call aborted");
  let i, b = new Promise((u, f) => {
      i = () => f(new We("Claude in Chrome tool call aborted")), n.addEventListener("abort", i, {
        once: !0
      })
    }),
    l;
  try {
    l = await Promise.race([q9t(s.context, s.socketClient, t, e ?? {}, o), b])
  } finally {
    if (i) n.removeEventListener("abort", i)
  }
  if (l.isError) {
    let u = (l.content ?? []).flatMap((v) => v.type === "text" ? [v.text] : []).join(`
`) || `${t} failed`,
      f = l._meta,
      g = f?.isBridgeTimeout === !0 ? "bridge_timeout" : f?.isFrontLoadBoundExceeded === !0 ? "front_load_bound_exceeded" : void 0;
    throw new P(u, "Claude in Chrome tool returned error", `chrome_${g??mtt(t,u)}`)
  }
  let c = await le(l, r),
    a = L7(l._meta);
  return {
    data: c,
    ...a && {
      mcpMeta: {
        _meta: a
      }
    }
  }
}

function Hfr(t) {
  let e = `${zB}${t}`;
  return {
    checkPermissions: async (o, s) => {
      let i = s.toolUseId,
        b = gtt.has(t);
      if (b && zGe(t, o)) return {
        behavior: "allow",
        updatedInput: o
      };
      let l = b && !zGe(t, o) || t === "browser_batch" && ce(o);
      if (t === "navigate" && typeof o.url === "string" && (o.url.trim().toLowerCase() === "back" || o.url.trim().toLowerCase() === "forward")) return {
        behavior: "allow",
        updatedInput: o
      };
      let c = t === "browser_batch" ? de(o) : {
          input: o,
          toolName: t
        },
        a;
      if (c && c.toolName === "navigate" && typeof c.input.url === "string") {
        if (a = U(c.input.url), !a) return m("chrome_permission_prompt", "non_web_url"), {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable URL",
            classifierApprovable: !1
          }
        }
      } else if (c && typeof c.input.tabId === "number") {
        let d = await F(c.input.tabId);
        if (!d) return m("chrome_permission_prompt", "tab_url_unresolved"), {
          behavior: "deny",
          message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: tab URL unresolved",
            classifierApprovable: !1
          }
        };
        if (a = U(d), !a) return m("chrome_permission_prompt", "non_web_tab_url"), {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable tab URL",
            classifierApprovable: !1
          }
        }
      }
      let u = me(s),
        f = X0(s.options?.tools?.find((d) => zt(d, e)), u),
        g = f === "bypassPermissions" || K1(f, u.isBypassPermissionsModeAvailable),
        v = u.chromeNavigationClassifierEnabled === !0 && !g && (u.chromeClassifierFloorEnabled === !0 || Aa(f)),
        y, T, C = () => {
          if (!i) return;
          if (T === void 0) ou().resolvedUrlByToolUseId.delete(i);
          else Q(i, T);
          if (y === void 0) CGe(i)
        };
      if (v) {
        let d = re(t, o);
        if (d.kind === "deny") return m("chrome_permission_prompt", d.code), C(), {
          behavior: "deny",
          message: oe[d.code],
          decisionReason: {
            type: "safetyCheck",
            reason: `Claude in Chrome: ${d.code}`,
            classifierApprovable: !1
          }
        };
        if (d.kind === "tab") {
          let S = a && c?.toolName !== "navigate" && c?.input.tabId === d.tabId ? a.url : await F(d.tabId),
            E = S === void 0 ? void 0 : U(S);
          if (E === void 0) return m("chrome_permission_prompt", "tab_url_unresolved"), C(), {
            behavior: "deny",
            message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: tab URL unresolved",
              classifierApprovable: !1
            }
          };
          if (y = M(Y(), E.url), !(l && u.mode === "plan")) T = E.url
        }
      }
      C();
      let I = t === "browser_batch" ? V(o) : [];
      if (I === "unvettable") return m("chrome_permission_prompt", "non_web_url"), {
        behavior: "deny",
        message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
        decisionReason: {
          type: "safetyCheck",
          reason: "Claude in Chrome: non-web or unparseable URL",
          classifierApprovable: !1
        }
      };
      let w = D(u),
        R = a && O(w.denied, h(a.host)) ? a.host : I.find((d) => O(w.denied, h(d)));
      if (R !== void 0) {
        let d = h(R),
          S = w.sourceOf.get(d) ?? w.sourceOf.get(A(d)) ?? "session";
        return p("chrome_permission_prompt", "domain_rule_denied"), {
          behavior: "deny",
          message: `Claude in Chrome is denied on ${R}.`,
          decisionReason: {
            type: "rule",
            rule: {
              source: S,
              ruleBehavior: "deny",
              ruleValue: {
                toolName: CTe,
                ruleContent: R
              }
            }
          }
        }
      }
      let k = !1;
      if (a) {
        let d = h(a.host),
          S = w.sourceOf.get(d) ?? "session";
        if (k = w.allowed.has(d), k && y === void 0 && u.chromeClassifierFloorEnabled !== !0 && !l) {
          if (i) B(i, a);
          return {
            behavior: "allow",
            updatedInput: o,
            decisionReason: {
              type: "rule",
              rule: {
                source: S,
                ruleBehavior: "allow",
                ruleValue: {
                  toolName: CTe,
                  ruleContent: a.host
                }
              }
            }
          }
        }
        if (i && (k || u.chromeClassifierFloorEnabled === !0 || !Z(u, e))) B(i, a)
      }
      if (l && u.mode === "plan") return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission."
      };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: a ? k ? void 0 : [{
          type: "addRules",
          rules: [{
            toolName: CTe,
            ruleContent: a.host
          }],
          behavior: "allow",
          destination: "session"
        }] : [{
          type: "addRules",
          rules: [{
            toolName: e,
            ruleContent: void 0
          }],
          behavior: "allow",
          destination: "session"
        }],
        decisionReason: y ? {
          type: "safetyCheck",
          reason: "Claude in Chrome: cross-site navigation pending",
          classifierApprovable: !0
        } : {
          type: "other",
          reason: a ? `Claude in Chrome action on ${a.host}` : "Claude in Chrome action"
        },
        metadata: {
          command: {
            name: e,
            description: ue(t, o, a?.host),
            chrome: a ? {
              ...a,
              domainAllowed: k,
              navigation: y
            } : void 0
          }
        }
      }
    },
    call: async (o, s) => {
      let i = s.toolUseId,
        b = i ? ou().resolvedHostByToolUseId.get(i) : void 0,
        l = b?.host,
        c = i ? ou().resolvedUrlByToolUseId.get(i) : void 0;
      if (i) ou().resolvedHostByToolUseId.delete(i), ou().resolvedUrlByToolUseId.delete(i);
      let a = me(s),
        u = D(a),
        f = u.allowed,
        g = [...u.allowedRaw];
      if (l && !f.has(h(l))) f.add(h(l)), g.push(l);
      let v = s.options?.tools?.find((R) => zt(R, e)),
        y = X0(v, a),
        T = y === "bypassPermissions" || y === "auto" && s.autoModeClassified === !0 && l !== void 0 && u.denied.size === 0 && b?.keepHostPin !== !0,
        C = j(),
        I = T ? {
          permissionMode: "skip_all_permission_checks",
          sessionScope: C
        } : l ? {
          permissionMode: "follow_a_plan",
          allowedDomains: g,
          onPermissionRequest: fe(f),
          sessionScope: C
        } : g.length > 0 ? {
          permissionMode: "follow_a_plan",
          allowedDomains: g,
          sessionScope: C
        } : {
          permissionMode: "ask",
          sessionScope: C
        },
        w = await pe(t, o, s.abortController.signal, s.options.mainLoopModel, I);
      if (c !== void 0) x(Y(), c);
      if (l) _("chrome_permission_prompt");
      return w
    }
  }
}
export {
  G4o,
  Hfr
};
