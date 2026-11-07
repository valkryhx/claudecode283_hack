// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Le
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Lr
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
async function Uot(o, r, n) {
  try {
    await Promise.all([Le((e) => e.managedSettingsNoticeSeenOrg === o ? e : {
      ...e,
      managedSettingsNoticeSeenOrg: o
    }, n), Lr("remote_managed_settings_login_notice", {
      surface: f(r)
    })])
  } catch (e) {
    t(`managed settings notice: not recorded as shown: ${d(e)}`, {
      level: "error"
    })
  }
}
export {
  Uot
};
