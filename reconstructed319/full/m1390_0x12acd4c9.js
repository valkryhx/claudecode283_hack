// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Hu,
  rCr
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  BO
} from "B:/~BUN/root/chunk-2631cdbp.js";
import {
  o,
  oe,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var GOe = "anthropic/devicePassthrough",
  r = ["get_device_info", "device_bash", "list_devices", "sync_files"],
  _ = "Claude_Browser__",
  n = 128,
  M6r = 1,
  a = p(() => u({
    v: T(M6r),
    tool: o().min(1).max(n),
    target: oe().optional()
  }));

function kSn(t) {
  let e = a().safeParse(t);
  if (!e.success) return;
  let s = rCr(e.data.target);
  return s === void 0 ? void 0 : {
    v: e.data.v,
    tool: Hu(e.data.tool, n),
    target: s
  }
}
var c = r.map(BO),
  i = `${BO(_)}_`;

function E(t) {
  let e = `${BO(t)}_`;
  return c.some((s) => e.startsWith(`${s}_`))
}
var l = new Set(["computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission"]),
  d = "device_bash";

function D6r(t) {
  let e = t.lastIndexOf("__"),
    s = e === -1 ? t : t.slice(e + 2);
  return l.has(s) || t === d || `__${t}`.endsWith("__Claude_Browser__request_access")
}

function O6e(t) {
  return !E(t) && !`${BO(t)}_`.startsWith(i) && !D6r(t)
}
export {
  GOe,
  M6r,
  kSn,
  D6r,
  O6e
};
