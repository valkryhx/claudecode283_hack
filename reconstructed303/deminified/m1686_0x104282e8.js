// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { tBt, p5n, Lyt } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { f0e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { zoe } from "B:/~BUN/root/chunk-wx6mfrph.js";
import { sno } from "B:/~BUN/root/chunk-8p0hra6g.js";
import { Zyr } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
var x9r = ["Docs"],
  m = new Set(["claudedocs", "claudepages"]);
function jir(e) {
  return e.tier === "core" && x9r.some(item => zoe(e.title) === zoe(item));
}
var $es = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";
function DKt(e) {
  return e.config.type === "claudeai-proxy" && f0e(e.config) && Zyr(e.config) || sno() && e.config.type === "sdk" && Vt(e.name) !== null && m.has(Lyt(e.serverInfo?.name ?? "")) || a.CLAUDE_CODE_REMOTE === !0 && e.config.type === "http" && e.config.scope === "dynamic" && (p5n(e.config) || tBt.has(e.name));
}
function Wir(e) {
  return e.some(item => (item.type === "connected" || item.type === "pending" || item.type === "cached") && DKt(item));
}
var u = "Claude Preview",
  p = "Claude Browser",
  d = Tn(u),
  C = Tn(p),
  f = new Set([d, C]);
function Bqe(e) {
  return f.has(Tn(e));
}
var E = new Set(["description", "activeForm"]);
function XTn(e, o, t, i) {
  let r = `mcp__${Tn(e)}__${o}`;
  return {
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `${e} requires permission.`,
        suggestions: [{
          type: "addRules",
          rules: [{
            toolName: r,
            ruleContent: void 0
          }],
          behavior: "allow",
          destination: "session"
        }],
        metadata: {
          command: {
            name: r,
            chrome: {
              hostHandlesOriginConsent: !0
            }
          }
        }
      };
    },
    ...(t !== void 0 && Object.hasOwn(t, "code") && {
      toAutoClassifierInput(s) {
        let c = Object.keys(s).filter(item => !E.has(item));
        return i(Object.fromEntries(c.map(item => [item, s[item]])), o);
      }
    })
  };
}
export { x9r, jir, $es, DKt, Wir, Bqe, XTn };