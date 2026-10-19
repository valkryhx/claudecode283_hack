// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Zf,
  b3
} from "B:/~BUN/root/chunk-hhgqcegv.js";
import {
  cp
} from "B:/~BUN/root/chunk-72n790j1.js";
import {
  aOs
} from "B:/~BUN/root/chunk-8gzvb73z.js";
import {
  basename as r,
  sep as n
} from "path";

function Eas(i) {
  let s = cp(),
    {
      listedOwnerships: t
    } = s;
  t.clear(), s.listedSkillsAnswer = "none_yet";
  for (let e of i) {
    let l;
    try {
      l = Zf(r(b3(e.name, n)))
    } catch {
      continue
    }
    if (!t.has(l)) t.set(l, {
      listedName: e.name,
      ownership: aOs(e),
      savedFromAChat: typeof e.backing_plugin_id === "string"
    })
  }
  s.listedSkillsAnswer = "a_list"
}

function Geo(i) {
  return cp().listedOwnerships.get(Zf(i))
}
export {
  Eas,
  Geo
};
