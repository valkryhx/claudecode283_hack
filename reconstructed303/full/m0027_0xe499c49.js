// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  e1
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a0
} from "B:/~BUN/root/chunk-eya7pdzx.js";
var Ljo = new Set(["http", "https", "ws", "wss", "ftp"]);

function N4(t) {
  t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
  let n = t.indexOf("://");
  if (n === -1) return !1;
  let r = t.slice(n + 3),
    s = t.slice(0, n).toLowerCase();
  if (Ljo.has(s)) {
    let o = r.match(/^[/\\]+/)?.[0] ?? "";
    if (o.includes("\\")) return !0;
    r = r.slice(o.length)
  }
  let e = r.search(/[/?#]/);
  return (e === -1 ? r : r.slice(0, e)).includes("\\")
}
var ur = "github.com",
  Njo = [`git@${ur}:`, `ssh://git@${ur}/`],
  m = [`https://${ur}`, `https://${ur}/`, ur],
  x = `users.noreply.${ur}`,
  a = "https://api.github.com",
  u = /[:/\\?#@\s]/,
  SZe = /^(?!\.{1,2}$)[a-z0-9.-]+$/,
  _mn = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;

function PA(t) {
  let n = c(t.replace(/[\t\n\r]/g, "").toLowerCase());
  if (n === "" || u.test(n)) return n;
  try {
    let r = new URL(`https://${n}`);
    if (r.username !== "" || r.password !== "" || r.port !== "" || r.pathname !== "/" || r.search !== "" || r.hash !== "") return n;
    return c(r.hostname)
  } catch {
    return n
  }
}
var wZe = a0(function(n) {
  let r = PA(n);
  while (r.startsWith("www.")) r = r.slice(4);
  return r
}, (t) => t, 50);

function J1t(t, n) {
  return wZe(t) === n
}

function ro(t) {
  return J1t(t, ur)
}

function gGe(t, n) {
  if (!t || !n) return !1;
  let r = PA(t);
  return r !== "" && r === PA(n)
}

function $ne(t) {
  return ro(t) ? a : `https://${t}/api/v3`
}

function IYs(t) {
  return ro(t) ? `${a}/graphql` : `https://${t}/api/graphql`
}

function i(t) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t)
}

function F4(t) {
  if (e1(t)) return !0;
  if (t.includes("://")) {
    if (N4(t)) return !0;
    try {
      let e = new URL(t);
      if (e.protocol === "http:" || e.protocol === "https:") return !1;
      return i(e.hostname)
    } catch {
      return !0
    }
  }
  let n = t.indexOf(":"),
    r = t.indexOf("@");
  if (n >= 0 && r > n) return !0;
  let s = t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
  return s ? i(s) : !1
}

function c(t) {
  let n = t.length;
  while (n > 0 && t[n - 1] === ".") n--;
  return t.slice(0, n)
}
export {
  Ljo,
  N4,
  ur,
  Njo,
  SZe,
  _mn,
  PA,
  wZe,
  J1t,
  ro,
  gGe,
  $ne,
  IYs,
  F4
};
