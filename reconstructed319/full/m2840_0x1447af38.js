// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Zq
} from "B:/~BUN/root/chunk-wxhfn3za.js";
import {
  vf,
  GFn,
  P1
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  randomBytes as l
} from "crypto";

function Qpa(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${l(12).toString("hex")}`);
  return SUr(e?.content ?? "", t.data, e?.is_error === !0)
}

function SUr(o, t, e = !1, r = []) {
  return P1({
    envelope: {
      v: vf,
      outcome: "completed",
      target: xWt(),
      is_error: e,
      content: GFn(o),
      output: t,
      ...r.length > 0 && {
        notes: r
      }
    },
    content: o
  })
}

function xWt() {
  return {
    name: Zq(),
    working_dir: pe()
  }
}
export {
  Qpa,
  SUr,
  xWt
};
