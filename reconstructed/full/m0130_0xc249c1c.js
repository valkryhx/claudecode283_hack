// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  qs
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  W$e
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  bo
} from "B:/~BUN/root/chunk-846280n0.js";
var KLr = 25000,
  YLr = 128;
class GCe extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t) {
    super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`);
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError"
  }
}
var n = new WeakMap;

function uOo(e, t) {
  n.set(e, t)
}

function pOo(e) {
  return n.get(e)
}

function r() {
  let e = a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return
}

function KX() {
  let e = bo();
  return e.defaultFileReadingLimits ??= {
    maxSizeBytes: W$e,
    maxTokens: r() ?? KLr
  }, e.defaultFileReadingLimits
}

function K6e() {
  return qs("tengu_tab_read_sep", !1)
}
export {
  KLr,
  YLr,
  GCe,
  uOo,
  pOo,
  KX,
  K6e
};
