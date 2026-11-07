// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nK } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { uG } from "B:/~BUN/root/chunk-4hj5k2m3.js";
var O1s = new Set(["http", "https", "ws", "wss", "ftp"]);
function r7(t) {
  t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
  let n = t.indexOf("://");
  if (n === -1) return !1;
  let r = t.slice(n + 3),
    s = t.slice(0, n).toLowerCase();
  if (O1s.has(s)) {
    let o = r.match(/^[/\\]+/)?.[0] ?? "";
    if (o.includes("\\")) return !0;
    r = r.slice(o.length);
  }
  let e = r.search(/[/?#]/);
  return (e === -1 ? r : r.slice(0, e)).includes("\\");
}
var jr = "github.com",
  I1s = [`git@${jr}:`, `ssh://git@${jr}/`],
  m = [`https://${jr}`, `https://${jr}/`, jr],
  x = `users.noreply.${jr}`,
  a = "https://api.github.com",
  u = /[:/\\?#@\s]/,
  bxe = /^(?!\.{1,2}$)[a-z0-9.-]+$/,
  Swe = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;
function GO(t) {
  let n = c(t.replace(/[\t\n\r]/g, "").toLowerCase());
  if (n === "" || u.test(n)) return n;
  try {
    let r = new URL(`https://${n}`);
    if (r.username !== "" || r.password !== "" || r.port !== "" || r.pathname !== "/" || r.search !== "" || r.hash !== "") return n;
    return c(r.hostname);
  } catch {
    return n;
  }
}
var jSt = uG(function (n) {
  let r = GO(n);
  while (r.startsWith("www.")) r = r.slice(4);
  return r;
}, t => t, 50);
function $dn(t, n) {
  return jSt(t) === n;
}
function fo(t) {
  return $dn(t, jr);
}
function Sxe(t, n) {
  if (!t || !n) return !1;
  let r = GO(t);
  return r !== "" && r === GO(n);
}
function sme(t) {
  return fo(t) ? a : `https://${t}/api/v3`;
}
function cna(t) {
  return fo(t) ? `${a}/graphql` : `https://${t}/api/graphql`;
}
function i(t) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t);
}
function o7(t) {
  if (nK(t)) return !0;
  if (t.includes("://")) {
    if (r7(t)) return !0;
    try {
      let e = new URL(t);
      if (e.protocol === "http:" || e.protocol === "https:") return !1;
      return i(e.hostname);
    } catch {
      return !0;
    }
  }
  let n = t.indexOf(":"),
    r = t.indexOf("@");
  if (n >= 0 && r > n) return !0;
  let s = t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
  return s ? i(s) : !1;
}
function c(t) {
  let n = t.length;
  while (n > 0 && t[n - 1] === ".") n--;
  return t.slice(0, n);
}
export { O1s, r7, jr, I1s, bxe, Swe, GO, jSt, $dn, fo, Sxe, sme, cna, o7 };