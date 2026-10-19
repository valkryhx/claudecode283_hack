// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ne
} from "B:/~BUN/root/chunk-nvdqbkrt.js";
import {
  zBs
} from "B:/~BUN/root/chunk-hkh6hras.js";
import {
  tW
} from "B:/~BUN/root/chunk-dyer18a2.js";
import {
  Co
} from "B:/~BUN/root/chunk-d544j3ga.js";
var TAr = Co();

function jc(o) {
  let t = Ne().admissionText;
  if ((o.judgedUnder ?? null) === t) return !0;
  let r = o.args.pluginStorageId;
  return tW(r) || !zBs(r, TAr.get()?.() ?? null)
}
export {
  TAr,
  jc
};
