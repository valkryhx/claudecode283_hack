// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { rFt } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { randomBytes as o } from "crypto";
import { hostname } from "os";
var i = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,
  a = /^[A-Za-z]{1,64}$/,
  c = /^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/(\d{1,4})$/,
  m = 8,
  I = 64,
  d = 9999,
  r = {
    hostname: hostname,
    randomHex: t => o(t).toString("hex")
  };
function F3s(t = r) {
  return `dev-${t.randomHex(m)}`;
}
function zzt(t = r) {
  let [e = ""] = t.hostname().split(".");
  return rFt(e, I);
}
function H3s(t, e, n) {
  if (!i.test(t) || !a.test(e) || !Number.isInteger(n) || n < 0 || n > d) throw Error("cannot form a device hook id from these inputs");
  return `${t}/${e}/${n}`;
}
function kPe(t) {
  let e = c.exec(t);
  return e ? {
    instanceId: e[1],
    event: e[2],
    index: Number(e[3])
  } : null;
}
export { F3s, zzt, H3s, kPe };