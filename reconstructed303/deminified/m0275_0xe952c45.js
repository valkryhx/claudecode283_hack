// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ZB, hI } from "B:/~BUN/root/chunk-6za2ez23.js";
import { B_ } from "B:/~BUN/root/chunk-gyr2a6wz.js";
function PAo(e) {
  if (e.loadedFrom === void 0) return Boolean(e.isMcp);
  switch (e.loadedFrom) {
    case "skills":
    case "commands_DEPRECATED":
    case "plugin":
    case "managed":
    case "bundled":
      return !1;
    case "syncedSkills":
    case "mcp":
    case "memoryStore":
    case "attachedFolder":
      return !0;
  }
}
function G9e(e) {
  if (e.loadedFrom === "syncedSkills") return !eqn();
  return PAo(e);
}
function eqn() {
  return Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || B_();
}
function tqn() {
  return {
    hooks: void 0,
    allowedTools: [],
    disallowedTools: [],
    executionContext: void 0,
    agent: void 0,
    background: void 0,
    model: void 0,
    effort: void 0,
    shell: void 0,
    paths: void 0,
    fallback: void 0,
    createdBy: void 0,
    displayName: void 0,
    metadata: void 0
  };
}
function Lsn(e) {
  return {
    description: i(e.description),
    argumentHint: e.argumentHint === void 0 ? void 0 : i(e.argumentHint),
    whenToUse: e.whenToUse === void 0 ? void 0 : i(e.whenToUse),
    argumentNames: e.argumentNames.map(i)
  };
}
function smt(e) {
  return {
    ...Lsn(e),
    argumentHint: e.argumentHint === void 0 ? void 0 : t(e.argumentHint)
  };
}
function TFs(e) {
  return {
    ...smt(e),
    displayName: r(e.displayName),
    fallback: void 0
  };
}
function r(e) {
  return e === void 0 ? void 0 : OX(e);
}
function OX(e) {
  return ZB(hI(e, " "));
}
function i(e) {
  return ZB(t(e));
}
function t(e) {
  return hI(e, " ", {
    keepSpelledJoiners: !0
  });
}
function Nsn(e) {
  return OX(e).replaceAll('"', "&quot;");
}
function imt(e) {
  return ZB(e.replace(/[\p{Cc}\p{Cs}]/gu, n => n === "\t" || n === `
` || n === "\r" ? n : ""));
}
export { PAo, G9e, eqn, tqn, Lsn, smt, TFs, OX, Nsn, imt };