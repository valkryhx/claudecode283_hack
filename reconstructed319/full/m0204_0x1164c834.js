// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ri,
  Un
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
var u4 = (o) => o.endsWith(`@${ri}`);

function LHt(o, e) {
  let t = Un(o);
  return [...e ?? []].some((r) => !u4(r) && Un(r) === t)
}
export {
  u4,
  LHt
};
