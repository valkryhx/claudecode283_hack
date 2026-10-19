// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { F_o, H_o, $_o } from "B:/~BUN/root/chunk-dn8rakwm.js";
function xbe(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return {
      ...(F_o(o) && {
        only_refused_by: b("windows_profile_on_mount_without_drive")
      }),
      ...(H_o(o) && {
        on_volume_mounted_twice: !0
      }),
      ...($_o(o) && {
        mount_source_unread: !0
      })
    };
  } catch (error) {
    return l(H(error)), {};
  }
}
export { xbe };