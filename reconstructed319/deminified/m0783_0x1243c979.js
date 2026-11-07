// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nf } from "B:/~BUN/root/chunk-n8cnxns2.js";
var kqo = 255,
  t = 255,
  e = /[\x00-\x20\x7f~^:?*[\\]/,
  o = /[\p{Cc}\p{Cf}\uFFFD]/u,
  i = 250;
function kZn(n) {
  return Buffer.byteLength(n, "utf8") <= t && l(n);
}
function l(n) {
  return n.length <= kqo && n !== "@" && n !== "HEAD" && nf(n) && s(n) && !o.test(n) && !n.startsWith("-") && n.split("/").every(item => Buffer.byteLength(item, "utf8") <= i);
}
function s(n) {
  return !e.test(n) && !n.endsWith(".") && !n.includes("..") && !n.includes("@{") && n.split("/").every(item => item !== "" && !item.startsWith(".") && !item.endsWith(".lock"));
}
export { kqo, kZn };