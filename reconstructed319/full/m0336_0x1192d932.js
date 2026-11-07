// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  SPr
} from "B:/~BUN/root/chunk-dqan51g7.js";
import {
  u4
} from "B:/~BUN/root/chunk-z35xf1k7.js";
import {
  go
} from "B:/~BUN/root/chunk-eyrj3wyr.js";
var Wmo = go();
var zmo = go();

function Bf(o) {
  let t = Ae().admissionText;
  if ((o.judgedUnder ?? null) === t) return !0;
  let r = o.args.pluginStorageId;
  return u4(r) || o.args.sealed === !0 && zmo.get()?.(r) === !0 || !SPr(r, Wmo.get()?.() ?? null)
}
export {
  Wmo,
  zmo,
  Bf
};
