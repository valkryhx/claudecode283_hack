// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Ac } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { Jce } from "B:/~BUN/root/chunk-5m83sh3a.js";
import { MX as product, Zue as attach } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { basename as l, resolve as u } from "path";
var s = 100,
  f = 900,
  h = 300;
function Zle(t) {
  return _(t).replace(/[^\x20-\x7e]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function FAt(t) {
  let n = Zle(t);
  if (n.length <= h) return n;
  let e = [...t],
    r = e.length,
    o = 5;
  while (r > 0) {
    if (o += Zle(e[r - 1]).length - 2, o > h) break;
    r--;
  }
  return Zle(`...${e.slice(r).join("")}`);
}
function lmi(t) {
  let n = [],
    e = 0;
  for (let {
    path: path,
    name: name,
    size: size
  } of t) {
    let g = `${FAt(path)}${l(path) === name ? "" : `, the file ${FAt(name)}`} (${size} bytes)`;
    if (e += g.length + 2, e > f) break;
    n.push(g);
  }
  let r = t.length - n.length;
  return `Attaches ${t.length} ${P(t.length, "file")}: ${n.join("; ")}${r > 0 ? `; and ${r} more` : ""}`;
}
function dmi(t) {
  if (t === "") return;
  let n = t.slice(1).split("/").map(item => item.replaceAll("~1", "/").replaceAll("~0", "~")).map((item, index) => index === 0 ? item : /^\d+$/.test(item) ? `[${item}]` : `.${item}`).join("");
  return ure(n);
}
function ure(t) {
  return Zle(t.length > s ? `${Q(t, s)}...` : t);
}
function p(t) {
  return t.replace(/[^\x20-\x7e]|[<>]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function o5e(t) {
  return p(_(t));
}
function Llt(t) {
  let n = o5e(t);
  if (n.length <= h) return n;
  let e = [...t],
    r = e.length,
    o = 5;
  while (r > 0) {
    if (o += o5e(e[r - 1]).length - 2, o > h) break;
    r--;
  }
  return o5e(`...${e.slice(r).join("")}`);
}
function ede(t) {
  return o5e(t.length > s ? `${Q(t, s)}...` : t);
}
var d = /^[A-Za-z0-9_.-]+$/;
function Cve(t) {
  return t.length <= s && d.test(t) ? t : ede(t);
}
function MEn(t) {
  return u(Ac(t) ?? t);
}
function cmi(t, n) {
  let e = MEn(t);
  return n !== e && !(i.CLAUDE_CODE_REMOTE === !0 && Jce(e, n, {
    product: product,
    attach: attach
  }));
}
function umi(t, n, e) {
  let r = n !== void 0 && n.length <= 1000 && !n.endsWith("\\") && /^[\x20\x21\x23-\x3b\x3d\x3f-\x7e]+$/.test(n) ? n : void 0;
  return `Cannot send ${t}: it resolves to another path${r === void 0 ? ", through a link or a name that is stored otherwise" : `, "${r}"`}. A file is sent only by the path it resolves to, so that the path a person approves names the file that is sent. If that is the file you mean, call again with ${r === void 0 ? "the path it resolves to" : "that path"}. ${e}`;
}
export { Zle, FAt, lmi, dmi, ure, o5e, Llt, ede, Cve, MEn, cmi, umi };