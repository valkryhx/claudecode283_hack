// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ljt as maxSizeBytes } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { ze, kie } from "B:/~BUN/root/chunk-xwzn0yxv.js";
var kxs = 25000,
  O4i = ` To read it anyway, up to what still fits in your context, call ${ze} again with ${kie}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,
  vxs = ` Even with ${kie}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,
  I4i = ` ${kie} is not available where this read runs; read it in parts with offset and limit.`,
  Exs = 128;
class MaxFileReadTokenExceededError extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t, r = "") {
    super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError";
  }
}
var weakMap = new WeakMap();
function Txs(e, t) {
  weakMap.set(e, t);
}
function tPr(e) {
  return weakMap.get(e);
}
function o() {
  let CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS = i.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS !== void 0 && CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS > 0) return CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  return;
}
function yU() {
  let e = kr();
  return e.defaultFileReadingLimits ??= {
    maxSizeBytes: maxSizeBytes,
    maxTokens: o() ?? kxs
  }, e.defaultFileReadingLimits;
}
function Dgt() {
  return rn("tengu_tab_read_sep", !1);
}
export { kxs, O4i, vxs, I4i, Exs, MaxFileReadTokenExceededError as xbe, Txs, tPr, yU, Dgt };