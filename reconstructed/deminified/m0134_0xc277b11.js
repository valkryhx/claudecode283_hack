// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ho } from "B:/~BUN/root/chunk-y72v2pst.js";
import { kFt, Ki } from "B:/~BUN/root/chunk-33tn3weg.js";
import { Pt } from "B:/~BUN/root/chunk-w5bkq1td.js";
function Jz(e) {
  return /^\w[\w.@-]*$/.test(e);
}
function al(e, n, t) {
  if (!Jz(n)) return null;
  return `claude ${e} ${n}${t ? ` ${t}` : ""}`;
}
function Fk(e, n, {
  extra: extra,
  tail = "",
  fallback: fallback
}) {
  let s = al(e, n, extra);
  return s === null ? fallback : `run \`${s}\`${tail ? ` ${tail}` : ""}`;
}
var pm = "anthropic-plugin-directory";
function Pdt(e) {
  return e.toLowerCase() === pm;
}
function XX(e) {
  return ZLr(e, pm);
}
function ZLr(e, n) {
  let t = e.normalize("NFKC");
  return h(e) === n || h(t) === n || h(t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase().replace(/[. ]+$/, "")) === n;
}
function h(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-").toLowerCase();
}
function hOo(e) {
  if (e.startsWith("@")) {
    let t = e.endsWith("@npm") ? e.slice(0, -4) : e;
    if (!t.includes("..") && !t.includes("//") && /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/.test(t)) return !1;
  }
  let n = e.split("@");
  return n.length > 1 && (XX(n[1] ?? "") || XX(n.at(-1) ?? ""));
}
var Idt = "";
function yOo(e, n) {
  let t = P(e);
  return t !== "" && t === P(n);
}
function P(e) {
  return e.normalize("NFKC").toUpperCase().toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}
function Ite(e) {
  return `"${e}" is a reserved marketplace name.`;
}
function _Oo(e, n) {
  return Jz(e) ? `"${e}" is another spelling of "${n}", a reserved marketplace name.` : `This marketplace's name is another spelling of "${n}", a reserved marketplace name. It is not exactly the reserved name it appears to be.`;
}
function T(e) {
  return e.endsWith(".") ? null : al("plugin marketplace remove", e);
}
function sqn(e, n, t = pm, r = !1) {
  let i = T(e);
  if (r) return i === null ? `known_marketplaces.json has an entry under another spelling of "${t}", a reserved marketplace name, so it is ignored. Remove that entry from known_marketplaces.json; its name is not exactly the reserved name it appears to be.` : `known_marketplaces.json has an entry named "${e}", another spelling of the reserved marketplace name "${t}", so it is ignored. Remove it with: ${i}`;
  return Ite(e);
}
function bOo(e) {
  return `The known_marketplaces.json entry named "${Pt(e)}" is already gone.`;
}
function SOo(e, n) {
  return "";
}
function eNr(e, n, {
  insideFailure = !1
} = {}) {
  return null;
}
function Odn(e) {
  return e;
}
function Zle(e) {
  return e?.source === "pluginDirectory";
}
var y = String.raw`[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.?`,
  m = "[A-Za-z0-9._-]+",
  _ = "[A-Za-z0-9._~-]",
  C = `${_}+(?::${_}*)?@`,
  L = ":[1-9][0-9]{0,4}",
  N = `(?:/(?:${_}|%[0-9A-Fa-f]{2})*)*`,
  regExp = new RegExp(`^${m}/${m}$`),
  regExp_2 = new RegExp(`^git@(${y}):(${m}(?:/${m})*)/?$`),
  k = `(?:${C})?(${y})(?:${L})?(${N})$`,
  regExp_3 = new RegExp(`^https://${k}`),
  regExp_4 = new RegExp(`^https?://${k}`),
  I = `ssh.${Ho}`,
  O = "wide:";
function S(e, n) {
  let t = regExp.test(e),
    r = regExp_2.exec(e),
    i = (n ? regExp_4 : regExp_3).exec(e),
    host = t ? Ho : r?.[1] ?? i?.[1];
  if (host === void 0) return;
  let c = host.toLowerCase().replace(/\.$/, "");
  if (host.endsWith(".") && c !== Ho && c !== `www.${Ho}`) return;
  let path = t ? `/${e}` : r ? `/${r[2]}` : i?.[2] || "/";
  if (path.split("/").some(item => /^(?:\.|%2e){1,2}$/i.test(item) || t && /^\.git$/i.test(item))) return;
  return {
    url: i ? e : `https://${host}${path}`,
    host: host,
    path: path,
    scp: r !== null
  };
}
function R(e, n, t) {
  let r = t?.blocklistDirection === !0,
    i,
    s,
    c,
    a = S(e, r);
  if (a === void 0) return;
  try {
    let o = new URL(a.url);
    if (o.hostname !== a.host.toLowerCase() || o.pathname !== a.path) return;
    let l = o.hostname.replace(/\.$/, "");
    if (l === I && !a.scp && !r) return;
    let p = l === `www.${Ho}` || l === I ? Ho : l;
    c = r || p === Ho && o.port === "";
    let A = r && (o.port === "80" || o.port === "443") ? "" : o.port;
    i = `${p}${A === "" ? "" : `:${A}`}`, s = o.pathname;
  } catch {
    return;
  }
  let g = s.replace(/%([0-9a-f]{2})/gi, (o, l) => {
    let p = String.fromCharCode(parseInt(l, 16));
    return /^[A-Za-z0-9._~-]$/.test(p) ? p : o;
  });
  if (g.includes("%")) return;
  let u = (c ? g.toLowerCase() : g).replace(/\/{2,}/g, "/").replace(/\/+$/, "").replace(/\/?\.git$/, "");
  if (r) {
    let o = u.length;
    while (u.endsWith(".git", o)) o -= u[o - 5] === "/" ? 5 : 4;
    u = u.slice(0, o);
  }
  if (n?.includes("\\")) return;
  let d = [];
  for (let o of (n ?? "").split("/")) {
    if (o === "" || o === ".") continue;
    if (o !== "..") {
      d.push(o);
      continue;
    }
    if (d.length === 0) return;
    d.pop();
  }
  if (!r) return `${i}${u}#${d.join("/")}`;
  let E = [];
  for (let o of d) {
    let l = x(o);
    if (l === void 0) return;
    E.push(l);
  }
  return `${O}${i}${u}#${E.join("/")}`;
}
function x(e) {
  let n = e.length;
  while (n > 0 && (e[n - 1] === "." || e[n - 1] === " ")) n--;
  let t = e.slice(0, n);
  if (t === "" || t.length > 255) return;
  let r = Ki(t.normalize("NFC"));
  if (/~\d/.test(r) || r.includes(":") || kFt.test(r)) return;
  return r.toUpperCase().toLowerCase().normalize("NFC");
}
function J6e(e, url, t) {
  let r = t?.blocklistDirection !== !0;
  if (typeof e === "string") {
    let a = typeof url === "string" ? {
      url: url,
      ref: void 0
    } : url;
    if (!a?.url || r && a.ref !== void 0) return;
    return R(a.url, e, t);
  }
  if (typeof e !== "object" || e === null) return;
  let i = e,
    s = typeof i.sha === "string" && /^[a-f0-9]{40}$/.test(i.sha);
  if (r && i.ref !== void 0 && !s) return;
  let c = typeof i.path === "string" ? i.path : void 0;
  switch (i.source) {
    case "github":
      return typeof i.repo === "string" ? R(i.repo, c, t) : void 0;
    case "url":
    case "git-subdir":
      return typeof i.url === "string" ? R(i.url, c, t) : void 0;
    default:
      return;
  }
}
function ece(e, n) {
  return;
}
function Odt(e, n) {
  let t = `-${n.substring(0, 12)}`;
  return e.endsWith(t) ? e : `${e}${t}`;
}
class PluginDirectoryUnavailableError extends Error {
  constructor(e) {
    super(e);
    this.name = "PluginDirectoryUnavailableError";
  }
}
export { Jz, al, Fk, pm, Pdt, XX, ZLr, hOo, Idt, yOo, Ite, _Oo, sqn, bOo, SOo, eNr, Odn, Zle, J6e, ece, Odt, PluginDirectoryUnavailableError as iqn };