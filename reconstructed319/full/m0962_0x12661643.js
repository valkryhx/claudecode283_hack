// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H$t
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  bRo,
  Bie
} from "B:/~BUN/root/chunk-3xdsa4p8.js";

function t(e) {
  if (!e?.length) return;
  let o = Object.create(null);
  for (let r of e) {
    if (!r.org_max_permission || r.org_max_permission === "allow") continue;
    let n = Bie().safeParse(r.org_max_permission);
    o[r.name] = n.success ? n.data : "blocked"
  }
  return Object.keys(o).length > 0 ? o : void 0
}

function q$e(e) {
  let o;
  if (e.type === "http" || e.type === "sse") {
    let {
      tools: r,
      ...n
    } = e, i = bRo(n), s = t(r);
    o = {
      ...i,
      ...s && {
        toolPermissions: s
      },
      scope: "dynamic"
    }
  } else o = {
    ...e,
    scope: "dynamic"
  };
  if (c(e)) delete o.displayName;
  return H$t(e, o)
}

function c(e) {
  let o = "scope" in e ? e.scope : void 0;
  return o !== void 0 && o !== "dynamic" && o !== "claudeai"
}
export {
  q$e
};
