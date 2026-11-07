// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { sre } from "B:/~BUN/root/chunk-44wgxs8c.js";
import { TSt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { D2 as toolName } from "B:/~BUN/root/chunk-pjcve3z9.js";
import { pde, vMe, b$ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var regExp = new RegExp(`^${toolName}\\(([^)]+)\\)$`);
function b1e(r) {
  let allowed = new Set(),
    allowedRaw = [],
    denied = new Set(),
    sourceOf = new Map();
  return u(r.alwaysDenyRules, denied, sourceOf), u(r.alwaysAllowRules, allowed, sourceOf, allowedRaw, denied), {
    allowed: allowed,
    denied: denied,
    allowedRaw: allowedRaw,
    sourceOf: sourceOf
  };
}
function e9r(r, e) {
  return r.has(e) || r.has(vMe(e));
}
function I3e(r, ruleContent) {
  let n = b$(ruleContent);
  if (!e9r(r.denied, n)) return;
  return {
    behavior: "deny",
    message: `Claude in Chrome is denied on ${ruleContent}.`,
    decisionReason: {
      type: "rule",
      rule: {
        source: r.sourceOf.get(n) ?? r.sourceOf.get(vMe(n)) ?? "session",
        ruleBehavior: "deny",
        ruleValue: {
          toolName: toolName,
          ruleContent: ruleContent
        }
      }
    }
  };
}
function u(r, e, n, o, t) {
  for (let [a, l] of Object.entries(r)) for (let c of l ?? []) {
    let s = regExp.exec(c);
    if (s?.[1]) {
      let i = b$(s[1]);
      if (t && e9r(t, i)) continue;
      if (!e.has(i)) e.add(i), n.set(i, a), o?.push(s[1]);
    }
  }
}
function uvn(r) {
  return ["back", "forward"].includes(r.trim().toLowerCase());
}
var d = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;
function CYt(r) {
  let e = r.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""),
    n;
  try {
    if (n = new URL(e), n.protocol !== "http:" && n.protocol !== "https:") {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0;
    }
  } catch {}
  if (!n) {
    if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) return;
    try {
      n = new URL(`https://${e}`);
    } catch {
      return;
    }
    if (d.test(TSt(e))) return;
  }
  if (!n.host || n.username || n.password) return;
  return {
    host: n.host,
    url: n.href
  };
}
function fvn(r) {
  let e = new URL(r.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host;
}
function pvn(r) {
  let e = CYt(r);
  return e && {
    ...e,
    host: fvn(e)
  };
}
function yfi(r) {
  if (!Array.isArray(r.actions)) return;
  for (let e of r.actions) {
    if (!D(e) || typeof e.name !== "string") continue;
    let input = D(e.input) ? e.input : {};
    if (sre.has(e.name) && pde(e.name, input)) continue;
    if (e.name === "navigate" && typeof input.url === "string" && (input.url.trim().toLowerCase() === "back" || input.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof input.url === "string" || typeof input.tabId === "number") return {
      toolName: e.name,
      input: input
    };
  }
  return;
}
export { b1e, e9r, I3e, uvn, CYt, fvn, pvn, yfi };