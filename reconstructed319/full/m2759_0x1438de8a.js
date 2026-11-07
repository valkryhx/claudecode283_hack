// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ONt
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var t = new Je(() => ({
  byToolUse: new Map
}));

function ZJo(n, e, i) {
  t.of(n).byToolUse.set(e, i), ONt(n, e, () => {
    Hir(n, e)
  })
}

function Hir(n, e) {
  t.peek(n)?.byToolUse.delete(e)
}

function tba(n, e) {
  return e !== void 0 && t.peek(n)?.byToolUse.has(e) === !0
}

function e7o(n, e) {
  if (e === void 0) return;
  let i = t.peek(n)?.byToolUse.get(e);
  return Hir(n, e), i
}
export {
  ZJo,
  Hir,
  tba,
  e7o
};
