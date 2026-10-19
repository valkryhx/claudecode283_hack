// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  dKt,
  cKt
} from "B:/~BUN/root/chunk-784cq7dm.js";
import {
  MHt
} from "B:/~BUN/root/chunk-h2myanpn.js";
import {
  orn
} from "B:/~BUN/root/chunk-0k9rq8e2.js";
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";

function hir(r) {
  return (r.some(orn) ? r.filter((e) => e.tier === "user") : []).flatMap((e) => {
    let o = e.registrationsFor("session.append"),
      s = L([...cKt(e.patterns), ...o.flatMap((t) => dKt(MHt(e.matcherFor("session.append", o.filter((a) => a !== t)))))]);
    return s.length > 0 ? [{
      type: "hooks-passed-over",
      source: e.args.pluginStorageId,
      patterns: s
    }] : []
  })
}
export {
  hir
};
