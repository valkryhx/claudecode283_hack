// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Qh,
  $n
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  _3,
  Iht
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  O5e,
  zE,
  Nc,
  AS,
  vx
} from "B:/~BUN/root/chunk-27h4st9h.js";

function d(e) {
  return e !== void 0 && Qh(e) ? {
    kind: "unresolved",
    reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more."
  } : {
    kind: "copy"
  }
}
async function fMo(e, o) {
  let [r, l] = await Promise.all([vx(e, o), Nc(o)]), n = l[$n(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let {
    source: t
  } = r.entry, c = O5e(t, n);
  if (typeof t !== "string" || !c) return {
    kind: "copy"
  };
  let i = AS(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system",
    a = await _3(e, r.marketplaceInstallLocation, t, l, zE(), o, i);
  return a.kind === "ok" ? {
    kind: "folder",
    path: a.entryPath
  } : {
    kind: "unresolved",
    reason: Iht(a, r.marketplaceInstallLocation, t).message
  }
}
export {
  fMo
};
