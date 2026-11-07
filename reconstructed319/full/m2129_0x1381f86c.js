// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  sre
} from "B:/~BUN/root/chunk-44wgxs8c.js";
import {
  TSt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  D2
} from "B:/~BUN/root/chunk-pjcve3z9.js";
import {
  pde,
  vMe,
  b$
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
var f = new RegExp(`^${D2}\\(([^)]+)\\)$`);

function b1e(r) {
  let e = new Set,
    n = [],
    o = new Set,
    t = new Map;
  return u(r.alwaysDenyRules, o, t), u(r.alwaysAllowRules, e, t, n, o), {
    allowed: e,
    denied: o,
    allowedRaw: n,
    sourceOf: t
  }
}

function e9r(r, e) {
  return r.has(e) || r.has(vMe(e))
}

function I3e(r, e) {
  let n = b$(e);
  if (!e9r(r.denied, n)) return;
  return {
    behavior: "deny",
    message: `Claude in Chrome is denied on ${e}.`,
    decisionReason: {
      type: "rule",
      rule: {
        source: r.sourceOf.get(n) ?? r.sourceOf.get(vMe(n)) ?? "session",
        ruleBehavior: "deny",
        ruleValue: {
          toolName: D2,
          ruleContent: e
        }
      }
    }
  }
}

function u(r, e, n, o, t) {
  for (let [a, l] of Object.entries(r))
    for (let c of l ?? []) {
      let s = f.exec(c);
      if (s?.[1]) {
        let i = b$(s[1]);
        if (t && e9r(t, i)) continue;
        if (!e.has(i)) e.add(i), n.set(i, a), o?.push(s[1])
      }
    }
}

function uvn(r) {
  return ["back", "forward"].includes(r.trim().toLowerCase())
}
var d = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;

function CYt(r) {
  let e = r.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""),
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
    if (d.test(TSt(e))) return
  }
  if (!n.host || n.username || n.password) return;
  return {
    host: n.host,
    url: n.href
  }
}

function fvn(r) {
  let e = new URL(r.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host
}

function pvn(r) {
  let e = CYt(r);
  return e && {
    ...e,
    host: fvn(e)
  }
}

function yfi(r) {
  if (!Array.isArray(r.actions)) return;
  for (let e of r.actions) {
    if (!D(e) || typeof e.name !== "string") continue;
    let n = D(e.input) ? e.input : {};
    if (sre.has(e.name) && pde(e.name, n)) continue;
    if (e.name === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof n.url === "string" || typeof n.tabId === "number") return {
      toolName: e.name,
      input: n
    }
  }
  return
}
export {
  b1e,
  e9r,
  I3e,
  uvn,
  CYt,
  fvn,
  pvn,
  yfi
};
