// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { yH, B_e } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Tr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Br } from "B:/~BUN/root/chunk-3daz140w.js";
import { Mh, LMr, Bb, _6 } from "B:/~BUN/root/chunk-mrt797ke.js";
import { rb } from "B:/~BUN/root/chunk-spgj5paf.js";
function Gke(e) {
  if (Br("hooks")) return [];
  let n = yH()?.[e] ?? [];
  if (Bb()) return n.filter(item => !("pluginRoot" in item) && !("deviceOwner" in item));
  let t = Mh(),
    i = t && !Tr() ? rb() : null,
    r = LMr();
  return [...(_6()?.[e] ?? []), ...(t ? [] : B_e()?.[e] ?? []), ...n.filter(item => !(t && "pluginRoot" in item && !i?.has(item.pluginId)) && !(r && "deviceOwner" in item))];
}
function UEr() {
  return !Br("hooks") && !Bb() && !Tr();
}
export { Gke, UEr };