// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Qn } from "B:/~BUN/root/chunk-nw686kdq.js";
import { ume } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { MU } from "B:/~BUN/root/chunk-0k9rq8e2.js";
import { tl } from "B:/~BUN/root/chunk-k8727s7d.js";
var vU = o => tl(`classic.${o}`, void 0, MU(`classic.${o}`));
var pho = Object.freeze(["allowManagedModsOnly"]);
function Zvr() {
  let o = me("policySettings")?.pluginConfigs?.[ume]?.options ?? {};
  return Qn(pho.map(item => [item, o[item] ?? null]));
}
export { vU, pho, Zvr };