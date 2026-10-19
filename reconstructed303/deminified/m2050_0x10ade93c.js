// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Lf, Cn } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { OG, I9e } from "B:/~BUN/root/chunk-472kxa0t.js";
import { cHe, Vw, nd, Iy, CT } from "B:/~BUN/root/chunk-9grc6xh0.js";
function d(e) {
  return e !== void 0 && Lf(e) ? {
    kind: "unresolved",
    reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more."
  } : {
    kind: "copy"
  };
}
async function kWr(e, o) {
  let [r, l] = await Promise.all([CT(e, o), nd(o)]),
    n = l[Cn(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let {
      source: source
    } = r.entry,
    c = cHe(source, n);
  if (typeof source !== "string" || !c) return {
    kind: "copy"
  };
  let i = Iy(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system",
    a = await OG(e, r.marketplaceInstallLocation, source, l, Vw(), o, i);
  return a.kind === "ok" ? {
    kind: "folder",
    path: a.entryPath
  } : {
    kind: "unresolved",
    reason: I9e(a, r.marketplaceInstallLocation, source).message
  };
}
export { kWr };