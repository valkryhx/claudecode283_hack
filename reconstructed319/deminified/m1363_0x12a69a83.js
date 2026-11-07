// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { posix as o } from "path";
var zle = ".ccr-seed",
  Zci = 501,
  R4t = o.join(zle, "manifest.json"),
  S = o.join(zle, "ready.json"),
  T = o.join(zle, "laptop.json"),
  x = o.join(zle, "worker.json"),
  rge = o.join(zle, "home", "pack.json"),
  wRt = o.join(zle, "home", "ready.json");
var f = o.join(zle, "overlay.bundle"),
  s = 256,
  i = 500,
  _ = 4,
  c = 2,
  l = 1,
  r = _ + c + l,
  e = 200,
  E = 2,
  A = Math.min(e, i - r - E - e),
  L = s - r,
  eui = 400;
function Cat(n) {
  let t = o.join("/", n.replaceAll("\\", "/"));
  return t === `/${zle}` || t.startsWith(`/${zle}/`);
}
function Vwn(n) {
  return !n.split("/").some(item => item === "" || item === "." || item === "..");
}
var R = /^\.\.namedfork$/i;
function tui(n) {
  return n.split("/").some(item => R.test(item));
}
export { zle, Zci, R4t, rge, wRt, eui, Cat, Vwn, tui };