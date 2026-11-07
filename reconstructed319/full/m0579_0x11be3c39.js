// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  bte
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  BV,
  Un
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  vCr
} from "B:/~BUN/root/chunk-fzefftbw.js";

function Loe(r, o) {
  a(qe(F(r), o))
}

function dpt(r) {
  if (r.scope !== void 0 && BV(r.scope)) return !0;
  return r.pluginSource !== void 0 && vCr(r.pluginSource)
}

function EF(r, o) {
  if (!dpt(r)) return o();
  let {
    pluginSource: e
  } = r;
  return bte(o, e === void 0 ? {} : {
    keepsWrite: (n) => Un(n) === Un(e)
  })
}
export {
  dpt,
  EF,
  Loe
};
