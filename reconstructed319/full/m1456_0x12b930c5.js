// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  p_s,
  m_s,
  h_s
} from "B:/~BUN/root/chunk-dcmvdxnm.js";

function XIe(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return {
      ...p_s(o) && {
        only_refused_by: b("windows_profile_on_mount_without_drive")
      },
      ...m_s(o) && {
        on_volume_mounted_twice: !0
      },
      ...h_s(o) && {
        mount_source_unread: !0
      }
    }
  } catch (r) {
    return a(F(r)), {}
  }
}
export {
  XIe
};
