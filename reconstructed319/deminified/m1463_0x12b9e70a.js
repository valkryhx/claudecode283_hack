// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
var _ = "Claude Preview",
  c = "Claude Browser",
  E = bn(_),
  l = bn(c),
  u = new Set([E, l]);
function _1e(e) {
  return u.has(bn(e));
}
var oAt = ["file_upload"],
  Rsr = "anthropic/hostAsksPerUploadedFile",
  d = new Set(["description", "activeForm"]);
function Asr(e, o, n, i) {
  let t = `mcp__${bn(e)}__${o}`;
  return {
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `${e} requires permission.`,
        suggestions: [{
          type: "addRules",
          rules: [{
            toolName: t,
            ruleContent: void 0
          }],
          behavior: "allow",
          destination: "session"
        }],
        metadata: {
          command: {
            name: t,
            chrome: {
              hostHandlesOriginConsent: !0
            }
          }
        }
      };
    },
    ...(n !== void 0 && Object.hasOwn(n, "code") && {
      toAutoClassifierInput(r) {
        let a = Object.keys(r).filter(item => !d.has(item));
        return i(Object.fromEntries(a.map(item => [item, r[item]])), o);
      }
    })
  };
}
export { _1e, oAt, Rsr, Asr };