// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  LPo,
  Zu,
  vk,
  Hp,
  lY
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  qgt
} from "B:/~BUN/root/chunk-1ks9vs37.js";

function r() {
  if (vk() || lY()) return null;
  if (tn()) {
    let t = Zu();
    if (t === void 0 || !t.startsWith("remote") || LPo.has(t)) return null;
    return qgt() ? null : "cloud"
  }
  if (i.CLAUDE_CODE_REMOTE) return null;
  return Hp() ? "desktop" : null
}

function xvr() {
  return i.CLAUDE_CODE_ARTIFACT_SHARE === !0 && r() !== null
}
export {
  xvr
};
