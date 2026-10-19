// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  wr
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  GFo,
  VFo,
  TVs,
  CVs
} from "B:/~BUN/root/chunk-rfp1pa77.js";
async function AFt(e, r = {}) {
  try {
    if (!wr()) {
      if (!a.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await GFo(e);
      await VFo(e), await TVs(e)
    }
    await CVs(e)
  } catch (o) {
    t(`Descriptor credential prime failed (non-fatal): ${d(o)}`, {
      level: "error"
    })
  }
}
export {
  AFt
};
