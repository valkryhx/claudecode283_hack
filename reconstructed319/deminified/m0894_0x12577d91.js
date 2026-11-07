// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { uc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { gn, xd } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { o, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var l = p(() => C(u({
  marketplace: o(),
  plugin: o()
})));
function O4r() {
  let e = v("tengu_harbor_ledger", []),
    n = l().safeParse(e);
  return n.success ? n.data : [];
}
function zG() {
  return gn("allow_channels") && v("tengu_harbor", !1);
}
function FKt() {
  if (!v("tengu_harbor", !1)) return !0;
  let e = xd("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing";
}
function cbn(e) {
  if (!e) return !1;
  let {
    name: name,
    marketplace: marketplace
  } = uc(e);
  if (!marketplace) return !1;
  return O4r().some(item => item.plugin === name && item.marketplace === marketplace);
}
export { O4r, zG, FKt, cbn };