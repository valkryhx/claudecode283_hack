// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  cqo
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  pl,
  Ds
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  XI,
  zAe,
  fat,
  W1,
  mq,
  GP
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Js
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
var GRe = (() => {
  try {
    return cqo(process.cwd())
  } catch {
    return process.cwd()
  }
})();

function adr(r, e) {
  let n = XI(r),
    t = XI(e);
  if (W1(n) || W1(t)) return !0;
  if (n.skipped !== t.skipped) return !0;
  return zAe(n, t)
}

function _Ke(r, e) {
  if (Ds(r) || pl(r)) return [];
  let n = Js(r),
    t = n !== null && n !== void 0 ? [n] : (() => {
      let o = GP(r);
      return o.length > 0 ? o : [r]
    })();
  return e === void 0 ? t : t.filter((o) => mq(o, e) !== "same")
}

function Not(r, e) {
  if (Ds(r) || pl(r)) return [];
  let n = Js(r),
    t = n !== null && n !== void 0 ? [n] : GP(r);
  return e === void 0 ? t : t.filter((s) => mq(s, e) !== "same")
}

function VNe(r, e, n) {
  if (e.length === 0) return !1;
  if (!e.every((s) => {
      let o = mq(r, s);
      if (o === "indeterminate") return !1;
      if (o === "same") return !0;
      return !adr(s, r)
    })) return !1;
  if (n?.requireCovered === !0) {
    let s = XI(r);
    if (W1(s)) return !1;
    let o = (a) => a.some((u) => {
      let i = XI(u);
      if (W1(i)) return !1;
      return fat(s, i)
    });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? [])
  }
  return !0
}
export {
  GRe,
  adr,
  _Ke,
  Not,
  VNe
};
