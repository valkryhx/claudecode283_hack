// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  x2
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  Tn
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  _z
} from "B:/~BUN/root/chunk-z9xwt6re.js";

function i(e) {
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
      return !0
  }
}

function UNe(e) {
  if (e.loadedFrom === "syncedSkills") return !yIr();
  return i(e)
}

function yIr() {
  return Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || x2()
}

function qin() {
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
  }
}

function _Mt(e) {
  return {
    description: Yin(e.description),
    argumentHint: Kin(e.argumentHint),
    whenToUse: Kin(e.whenToUse),
    argumentNames: e.argumentNames.map(Yin)
  }
}

function tRo(e) {
  return {
    ..._Mt(e),
    displayName: Kin(e.displayName),
    argumentHint: e.argumentHint === void 0 ? void 0 : Tn(e.argumentHint),
    fallback: void 0
  }
}

function Kin(e) {
  return e === void 0 ? void 0 : Yin(e)
}

function Yin(e) {
  return _z(Tn(e))
}

function Xin(e) {
  return _z(e.replace(/\p{Cc}/gu, (n) => n === "\t" || n === `
` || n === "\r" ? n : ""))
}
export {
  UNe,
  yIr,
  qin,
  _Mt,
  tRo,
  Kin,
  Yin,
  Xin
};
