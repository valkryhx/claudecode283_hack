// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function Bp() {
  return !0;
}
function Of() {
  return typeof Bun < "u" && Bun.isStandaloneExecutable === !0;
}
function $jt() {
  if (!Bp() || Of()) return !1;
  let main = Bun.main;
  if (vWs(main)) return !1;
  return /\.[cm]?tsx?$/.test(main);
}
function vWs(n) {
  return /^(?:\/\$bunfs|[a-z]:[\\/]~BUN)(?:[\\/]|$)/i.test(n);
}
export { Bp, Of, $jt, vWs };