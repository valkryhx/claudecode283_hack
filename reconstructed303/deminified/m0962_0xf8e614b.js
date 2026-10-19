// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { rC } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var n = ve(rC()),
  e = typeof Buffer < "u" && Buffer.from ? function (r) {
    return Buffer.from(r, "utf8");
  } : n.fromUtf8;
function cHt(r) {
  if (r instanceof Uint8Array) return r;
  if (typeof r === "string") return e(r);
  if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  return new Uint8Array(r);
}
function ban(r) {
  if (typeof r === "string") return r.length === 0;
  return r.byteLength === 0;
}
function BOo(r) {
  return new Uint8Array([(r & 4278190080) >> 24, (r & 16711680) >> 16, (r & 65280) >> 8, r & 255]);
}
function jOo(r) {
  if (!Uint32Array.from) {
    var uint32Array = new Uint32Array(r.length),
      f = 0;
    while (f < r.length) uint32Array[f] = r[f], f += 1;
    return uint32Array;
  }
  return Uint32Array.from(r);
}
export { cHt, ban, BOo, jOo };