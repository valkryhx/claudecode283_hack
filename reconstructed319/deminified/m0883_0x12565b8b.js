// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Um, Aee } from "B:/~BUN/root/chunk-esnm3r09.js";
import { kf } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { $br } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { basename as o, sep as n } from "path";
function eci(s) {
  let e = kf(),
    {
      listedOwnerships: listedOwnerships
    } = e;
  listedOwnerships.clear(), e.listedSkillsAnswer = "none_yet";
  for (let t of s) {
    let l;
    try {
      l = Um(o(Aee(t.name, n)));
    } catch {
      continue;
    }
    if (!listedOwnerships.has(l)) listedOwnerships.set(l, {
      listedName: t.name,
      ownership: $br(t),
      savedFromAChat: typeof t.backing_plugin_id === "string"
    });
  }
  e.listedSkillsAnswer = "a_list", e.lastRoundCouldNotAsk = !1;
}
function J3r(s) {
  return kf().listedOwnerships.get(Um(s));
}
export { eci, J3r };