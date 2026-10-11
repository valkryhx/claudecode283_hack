// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  lpn,
  KKn,
  XKn
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  t8e
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  c8
} from "B:/~BUN/root/chunk-pv8vnm5m.js";
import {
  Qpr
} from "B:/~BUN/root/chunk-atp0ztev.js";
import {
  BMn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  vn
} from "B:/~BUN/root/chunk-z24e0xw2.js";
var zpr = ["Docs"],
  t = new Set(["claudedocs", "claudepages"]);

function vIn(e) {
  return e.tier === "core" && zpr.some((o) => c8(e.title) === c8(o))
}
var Tio = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";

function TEt(e) {
  return e.config.type === "claudeai-proxy" && t8e(e.config) && BMn(e.config) || Qpr() && e.config.type === "sdk" && en(e.name) !== null && t.has(XKn(e.serverInfo?.name ?? "")) || a.CLAUDE_CODE_REMOTE === !0 && e.config.type === "http" && e.config.scope === "dynamic" && (KKn(e.config) || lpn.has(e.name))
}

function kIn(e) {
  return e.some((o) => (o.type === "connected" || o.type === "pending") && TEt(o))
}
var r = "Claude Preview",
  s = "Claude Browser",
  i = vn(r),
  c = vn(s),
  m = new Set([i, c]);

function b0e(e) {
  return m.has(vn(e))
}

function z8t(e, o) {
  let n = `mcp__${vn(e)}__${o}`;
  return {
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `${e} requires permission.`,
        suggestions: [{
          type: "addRules",
          rules: [{
            toolName: n,
            ruleContent: void 0
          }],
          behavior: "allow",
          destination: "session"
        }],
        metadata: {
          command: {
            name: n,
            chrome: {
              hostHandlesOriginConsent: !0
            }
          }
        }
      }
    }
  }
}
export {
  zpr,
  vIn,
  Tio,
  TEt,
  kIn,
  b0e,
  z8t
};
