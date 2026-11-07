// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Jae, wP, Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
var r = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function ekt(s) {
  return wP(s.trim(), r);
}
function bWt() {
  let s = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return s ? wP(s, r) : null;
}
function _pa() {
  if (!Pe(process.env.CLAUDE_CODE_CHILD_SESSION) || bWt() === null) return !1;
  let s = process.argv ?? [],
    e = s.indexOf("--");
  return !s.slice(0, e === -1 ? void 0 : e).some((item, index) => item === "--sdk-url" ? Boolean(s[index + 1]) : item.startsWith("--sdk-url=") && item !== "--sdk-url=") && !(s[2] === "mcp" && s[3] === "serve");
}
function wqn() {
  return _pa() && !Pe(process.env.CLAUDE_CODE_DISABLE_NESTED_SESSION_ID) ? null : bWt();
}
function KIo(s) {
  if (s.toLowerCase().endsWith(".jsonl")) return {
    sessionId: Jae(),
    ingressUrl: null,
    isUrl: !1,
    jsonlFile: s,
    isJsonlFile: !0
  };
  if (Nt(s)) return {
    sessionId: s,
    ingressUrl: null,
    isUrl: !1,
    jsonlFile: null,
    isJsonlFile: !1
  };
  try {
    let e = new URL(s);
    return {
      sessionId: bWt() ?? wP(e.href, r),
      ingressUrl: e.href,
      isUrl: !0,
      jsonlFile: null,
      isJsonlFile: !1
    };
  } catch {}
  return null;
}
export { ekt, bWt, _pa, wqn, KIo };