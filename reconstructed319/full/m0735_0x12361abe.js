// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Nr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  mBs,
  hBs,
  Zea
} from "B:/~BUN/root/chunk-pwj77283.js";
import {
  Xea
} from "B:/~BUN/root/chunk-79595s9y.js";
async function Hnn(e, r = {}) {
  try {
    if (!Nr()) {
      if (!i.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await mBs(e);
      await hBs(e), await Zea(e)
    }
    await Xea(e)
  } catch (o) {
    t(`Descriptor credential prime failed (non-fatal): ${d(o)}`, {
      level: "error"
    })
  }
}
export {
  Hnn
};
