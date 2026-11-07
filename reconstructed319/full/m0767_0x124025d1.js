// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  hi
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  co,
  Fnn
} from "B:/~BUN/root/chunk-tjfmeakx.js";
import {
  Fy
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  L5e
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  o,
  oe,
  u,
  me,
  B
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var n = p(() => u({
  behavior: B(["allow", "deny"]),
  updatedInput: me(o(), oe()).optional().transform((e) => e && Object.keys(e).length === 0 ? void 0 : e),
  updatedPermissions: L5e("refused", "bridge client"),
  message: o().optional().catch(void 0),
  toolName: o().optional().catch(void 0)
}));

function jii(e) {
  let s = n().safeParse(e);
  if (!s.success) {
    t(`Malformed bridge permission response ignored: ${s.error.issues[0]?.message??"unknown"}`, {
      level: "warn"
    }), m("permission_bridge_relay", "permission_response_malformed");
    return
  }
  if (typeof e === "object" && e !== null && e.updatedPermissions !== void 0 && s.data.updatedPermissions === void 0) return {
    ...s.data,
    updatedPermissionsDropped: !0
  };
  return s.data
}

function T6e(e, s, r) {
  if (typeof e !== "string") return !1;
  if (!wBe(e, s)) return g("bridge_permission_toolname_check"), !1;
  return t(`Ignoring can_use_tool control_response for request_id=${r}: toolName '${e}' does not match pending '${s}'`, {
    level: "warn"
  }), m("bridge_permission_toolname_check", "toolname_mismatch"), !0
}

function wBe(e, s) {
  return typeof e === "string" && e !== s
}

function iQ(e) {
  if (le() && (e === co || e === hi && Fy())) return Fnn;
  return (e.split("__").pop() || e).replace(/_/g, " ").replace(/\b\w/g, (r) => r.toUpperCase())
}
export {
  jii,
  T6e,
  wBe,
  iQ
};
