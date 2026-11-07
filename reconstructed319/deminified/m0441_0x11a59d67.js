// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bce } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ebe } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { Js } from "B:/~BUN/root/chunk-yr3hf5bg.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Ese } from "B:/~BUN/root/chunk-fzefftbw.js";
import { $ce, XT } from "B:/~BUN/root/chunk-xagk1yaq.js";
import { Li } from "B:/~BUN/root/chunk-zeshc0ep.js";
var p = new Set(["agent.offer", "attribution.text", "command.describe", "env.get", "prompt.section", "tool.describe"]);
function _ce(o, e, among) {
  if (!p.has(o) || i.CLAUDE_CODE_DISABLE_LONE_SEC_DEFAULT_SHORTCUT || Ae().hooksRespawns.size > 0 || Ebe()) return !1;
  let s = bce(o, e, {
    among: among
  });
  return s.length > 0 && s.every($ce);
}
function i0e(o) {
  let e = Ae(),
    t = o === "session.append" && e.appendsInFlight.size > 0;
  return (o === "session.append" || o === "prompt.attachment") && !t && !i.CLAUDE_CODE_DISABLE_LONE_SEC_DEFAULT_SHORTCUT && e.hooksRespawns.size === 0 && !Ebe() ? e.loadedModules.filter(item => !$ce(item)) : e.loadedModules;
}
var sfs = Object.freeze(["allowManagedModsOnly"]);
function Olo() {
  let o = be("policySettings")?.pluginConfigs?.[Ese]?.options ?? {};
  return Js(sfs.map(item => [item, o[item] ?? null]));
}
var jP = o => Li(`classic.${o}`, void 0, XT(`classic.${o}`));
function yIn(o) {
  if (i.CLAUDE_CODE_DISABLE_EMPTY_CLASSIC_DISPATCH_SKIP || Ae().hooksRespawns.size > 0 || Ebe()) return !1;
  let e = bce(`classic.${o}`);
  return e.length > 0 && e.every($ce);
}
export { i0e, sfs, Olo, jP, yIn, _ce };