// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  cc,
  AVn
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  A4
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  o,
  oe,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var q_e = "anthropic/devicePassthrough",
  l8s = ["get_device_info", "device_bash", "list_devices", "sync_files"],
  r = "Claude_Browser__",
  n = 128,
  slr = 1,
  _ = f(() => u({
    v: C(slr),
    tool: o().min(1).max(n),
    target: oe().optional()
  }));

function V4t(t) {
  let e = _().safeParse(t);
  if (!e.success) return;
  let s = AVn(e.data.target);
  return s === void 0 ? void 0 : {
    v: e.data.v,
    tool: cc(e.data.tool, n),
    target: s
  }
}
var a = l8s.map(A4),
  c = `${A4(r)}_`;

function i(t) {
  let e = `${A4(t)}_`;
  return a.some((s) => e.startsWith(`${s}_`))
}
var E = new Set(["computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission"]),
  l = "device_bash";

function ilr(t) {
  let e = t.lastIndexOf("__"),
    s = e === -1 ? t : t.slice(e + 2);
  return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access")
}

function CNe(t) {
  return !i(t) && !`${A4(t)}_`.startsWith(c) && !ilr(t)
}
export {
  q_e,
  l8s,
  slr,
  V4t,
  ilr,
  CNe
};
