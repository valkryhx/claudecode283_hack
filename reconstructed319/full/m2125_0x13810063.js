// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Xmt,
  S7e
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  m_
} from "B:/~BUN/root/chunk-21s8ygah.js";

function lzt(o) {
  return o.flatMap((e) => Xmt(S7e([{
    type: "addRules",
    destination: "session",
    behavior: "allow",
    rules: [m_(e, "allow")]
  }])).map(mn))
}

function gYn(o, e) {
  let l = lzt(e);
  if (l.length === 0) return o;
  return t(`Applying permission update: Adding ${l.length} allow rule(s) to source 'mcpMount': ${_(l)}`), {
    ...o,
    alwaysAllowRules: {
      ...o.alwaysAllowRules,
      mcpMount: [...o.alwaysAllowRules.mcpMount ?? [], ...l]
    }
  }
}

function yYn(o, e, l) {
  let r = o.alwaysAllowRules.mcpMount ?? [],
    s = lzt(e),
    n = l === "every" ? r.filter((i) => !s.includes(i)) : [...r];
  if (l === "one")
    for (let i of s) {
      let u = n.lastIndexOf(i);
      if (u !== -1) n.splice(u, 1)
    }
  if (n.length === r.length) return o;
  return t(`Applying permission update: Removing ${r.length-n.length} allow rule(s) from source 'mcpMount', of ${_(s)}`), {
    ...o,
    alwaysAllowRules: {
      ...o.alwaysAllowRules,
      mcpMount: n
    }
  }
}
export {
  lzt,
  gYn,
  yYn
};
