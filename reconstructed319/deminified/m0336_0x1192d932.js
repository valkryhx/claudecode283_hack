// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { SPr } from "B:/~BUN/root/chunk-dqan51g7.js";
import { u4 } from "B:/~BUN/root/chunk-z35xf1k7.js";
import { go } from "B:/~BUN/root/chunk-eyrj3wyr.js";
var Wmo = go();
var zmo = go();
function Bf(o) {
  let admissionText = Ae().admissionText;
  if ((o.judgedUnder ?? null) === admissionText) return !0;
  let pluginStorageId = o.args.pluginStorageId;
  return u4(pluginStorageId) || o.args.sealed === !0 && zmo.get()?.(pluginStorageId) === !0 || !SPr(pluginStorageId, Wmo.get()?.() ?? null);
}
export { Wmo, zmo, Bf };