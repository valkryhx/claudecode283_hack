// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { qo } from "B:/~BUN/root/chunk-327wfkv3.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function _R(m) {
  let R = w(2),
    {
      children: children,
      exitActive: exitActive,
      onInterrupt: onInterrupt
    } = m,
    s = exitActive === void 0 ? !0 : exitActive,
    {
      pending: pending,
      keyName: keyName
    } = qo(void 0, onInterrupt, s);
  const children_2 = pending ? `Press ${keyName} again to exit` : children;
  let r;
  if (R[0] !== children_2) r = e(n, {
    dimColor: !0,
    children: children_2
  }), R[0] = children_2, R[1] = r;else r = R[1];
  return r;
}
export { _R };