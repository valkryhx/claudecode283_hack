// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Gy,
  pn
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  P1s
} from "B:/~BUN/root/chunk-dzqsqewb.js";

function _t(e, {
  safe: t
}) {
  try {
    let {
      value: o,
      source: r
    } = pn(e, t), n = !Gy();
    return P1s({
      value: o,
      source: r,
      defaultHost: n
    }, t)
  } catch {
    return t
  }
}

function YKi(e, {
  safe: t,
  others: o
}) {
  try {
    let {
      value: r,
      source: n
    } = pn(e, t), a = o.find((c) => c === r);
    return a !== void 0 && n === "payload" && !Gy() ? a : t
  } catch {
    return t
  }
}
export {
  _t,
  YKi
};
