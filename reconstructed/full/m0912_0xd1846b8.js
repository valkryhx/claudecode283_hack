// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  sy,
  Prn
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Z1
} from "B:/~BUN/root/chunk-z24e0xw2.js";
import {
  o,
  ae,
  u,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var koe = "anthropic/devicePassthrough",
  gjo = ["get_device_info", "device_bash", "list_devices", "sync_files"],
  r = "Claude_Browser__",
  n = 128,
  MTn = 1,
  _ = f(() => u({
    v: A(MTn),
    tool: o().min(1).max(n),
    target: ae().optional()
  }));

function HSt(t) {
  let e = _().safeParse(t);
  if (!e.success) return;
  let s = Prn(e.data.target);
  return s === void 0 ? void 0 : {
    v: e.data.v,
    tool: sy(e.data.tool, n),
    target: s
  }
}
var a = gjo.map(Z1),
  c = `${Z1(r)}_`;

function i(t) {
  let e = `${Z1(t)}_`;
  return a.some((s) => e.startsWith(`${s}_`))
}
var E = new Set(["computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission"]),
  l = "device_bash";

function DTn(t) {
  let e = t.lastIndexOf("__"),
    s = e === -1 ? t : t.slice(e + 2);
  return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access")
}

function CSe(t) {
  return !i(t) && !`${Z1(t)}_`.startsWith(c) && !DTn(t)
}
export {
  koe,
  gjo,
  MTn,
  HSt,
  DTn,
  CSe
};
