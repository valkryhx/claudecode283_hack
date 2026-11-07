// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  tT
} from "B:/~BUN/root/chunk-hr1m6fe3.js";
import {
  o,
  E,
  xt,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var l = p(() => xt({
    eval: E().refine(Number.isSafeInteger),
    status: o().optional().catch(void 0)
  })),
  m = p(() => xt({
    kind: T(tT),
    fields: l()
  }));

function uwn(n, r) {
  if (!le()) return;
  let t = m().safeParse(r);
  if (t.success) return u(t.data.fields);
  let a = /^<event\b([^>]*)>(?:\n(\{[^\n]*\})\n<\/event(?: nonce="([A-Za-z0-9_-]+)")?>$)?/,
    [, e, d, f] = a.exec(n) ?? [];
  if (e === void 0 || !e.includes(` kind="${tT}"`)) return;
  let s = / eval="(\d+)"/.exec(e)?.[1];
  if (s !== void 0) return {
    evalId: Number(s),
    status: / status="([^"]*)"/.exec(e)?.[1]
  };
  if (d === void 0 || f !== / nonce="([A-Za-z0-9_-]+)"/.exec(e)?.[1]) return;
  let i = l().safeParse(et(d, !1));
  return i.success ? u(i.data) : void 0
}

function Wdi(n) {
  if (!le()) return [];
  let r = /<event\b[^>]*>(?:\n\{[^\n]*\}\n<\/event(?: nonce="[A-Za-z0-9_-]+")?>)?/g,
    t = [];
  for (let [a] of n.matchAll(r)) {
    let e = uwn(a, void 0);
    if (e !== void 0) t.push(e)
  }
  return t
}

function u(n) {
  return {
    evalId: n.eval,
    status: n.status
  }
}
export {
  uwn,
  Wdi
};
