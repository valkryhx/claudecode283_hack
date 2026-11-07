// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pn, v, Gyt, Vy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mO, xQe, k$n } from "B:/~BUN/root/chunk-psjm1gcn.js";
var NUe = "tengu_violin_willow";
function W8n() {
  try {
    let {
      value: value,
      source: source
    } = pn(NUe, !1);
    return Vy(source) ? value === !0 : void 0;
  } catch {
    return;
  }
}
function hst() {
  try {
    return v(NUe, !1);
  } catch {
    return !1;
  }
}
function gst() {
  return k$n() && W8n() === !0;
}
function LYe({
  cloudClient: cloudClient
}) {
  if (xQe()) return "tengu_violin_wood";
  return cloudClient && W8n() === !1 ? NUe : void 0;
}
async function IUo({
  cloudClient: cloudClient_2
}) {
  try {
    return (await mO()) && (!cloudClient_2 || (await Gyt(NUe)));
  } catch {
    return !1;
  }
}
export { NUe, W8n, hst, gst, LYe, IUo };