// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ir
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  dZe
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  Ao
} from "B:/~BUN/root/chunk-s6czymtt.js";
import {
  Qe,
  Rge
} from "B:/~BUN/root/chunk-5k20pvvh.js";
var JIo = 25000,
  HBs = ` To read it anyway, up to what still fits in your context, call ${Qe} again with ${Rge}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,
  QIo = ` Even with ${Rge}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,
  $Bs = ` ${Rge} is not available where this read runs; read it in parts with offset and limit.`,
  ZIo = 128;
class rle extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t, r = "") {
    super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError"
  }
}
var n = new WeakMap;

function eMo(e, t) {
  n.set(e, t)
}

function A4n(e) {
  return n.get(e)
}

function i() {
  let e = a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return
}

function rB() {
  let e = Ao();
  return e.defaultFileReadingLimits ??= {
    maxSizeBytes: dZe,
    maxTokens: i() ?? JIo
  }, e.defaultFileReadingLimits
}

function UXe() {
  return ir("tengu_tab_read_sep", !1)
}
export {
  JIo,
  HBs,
  QIo,
  $Bs,
  ZIo,
  rle,
  eMo,
  A4n,
  rB,
  UXe
};
