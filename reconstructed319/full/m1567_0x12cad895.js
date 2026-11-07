// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Z3e
} from "B:/~BUN/root/chunk-bwsdfe7a.js";
import {
  o,
  C,
  He
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var n = p(() => o().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((r) => !(r in Object.prototype))),
  a = p(() => C(He({
    arg: n(),
    local: n(),
    ref: n()
  })).length(1));

function IAt(r) {
  let t = a().safeParse(r?.[Z3e]);
  if (!t.success) return;
  let [e] = t.data;
  return e !== void 0 && e.local !== e.ref ? e : void 0
}
export {
  IAt
};
