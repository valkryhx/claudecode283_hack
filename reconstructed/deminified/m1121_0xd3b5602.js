// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { o, ae, fe } from "B:/~BUN/root/chunk-n8qdr73v.js";
var Jjo = '<wake reason="external-event"';
function Qjo(n) {
  return n.startsWith(Jjo);
}
var y = /^[a-z0-9-]{1,32}$/,
  b = /^[a-z0-9_.-]{1,64}$/,
  x = 2048,
  c = /([a-z][a-z-]*)="([^"\s]{0,256})"/g,
  w = new Set(["reason", "current-time"]),
  R = new Set(["source", "kind", "from", "trust", "untrusted-keys"]),
  W = f(() => fe(o(), ae()));
function s(n) {
  return n.trim() === "";
}
function Vur(n) {
  if (!Qjo(n)) return null;
  let l = n.indexOf(">");
  if (l === -1 || l > x) return null;
  let T = n.slice(5, l);
  if (!s(T.replace(c, " "))) return null;
  for (let e of T.matchAll(c)) if (!w.has(e[1])) return null;
  let i = n.indexOf("<event ", l + 1);
  if (i === -1 || !s(n.slice(l + 1, i))) return null;
  let u = n.indexOf(">", i);
  if (u === -1 || u - i > x) return null;
  let d = n.indexOf("</event>", u + 1);
  if (d === -1) return null;
  let p = d + 8,
    E = n.indexOf("</wake>", p);
  if (E === -1 || !s(n.slice(p, E))) return null;
  if (!s(n.slice(E + 7))) return null;
  let t = new Map(),
    h = n.slice(i + 6, u);
  if (!s(h.replace(c, " "))) return null;
  for (let e of h.matchAll(c)) {
    if (!R.has(e[1])) return null;
    let _ = e[1];
    if (!t.has(_)) t.set(_, e[2]);
  }
  let source = t.get("source"),
    kind = t.get("kind");
  if (source === void 0 || kind === void 0 || !y.test(source) || !b.test(kind)) return null;
  let r = n.slice(u + 1, d),
    k = r.indexOf("<!--");
  if (k !== -1) {
    if (!s(r.slice(0, k))) return null;
    let e = r.indexOf("-->", k + 4);
    if (e === -1) return null;
    r = r.slice(e + 3);
  }
  let A = r.trim();
  if (!A.startsWith("{")) return null;
  let a;
  try {
    a = J(A);
  } catch {
    return null;
  }
  if (typeof a !== "object" || a === null || Array.isArray(a)) return null;
  let v = W().safeParse(a);
  if (!v.success) return null;
  let S = t.get("from"),
    untrustedKeys = (t.get("untrusted-keys") ?? "").split(",").filter(item => item !== "");
  return {
    source: source,
    kind: kind,
    ...(S !== void 0 && {
      from: S
    }),
    data: v.data,
    untrustedKeys: untrustedKeys
  };
}
function Bkt(n) {
  return n.source === "session-inbox" && n.kind === "message.received";
}
export { Jjo, Qjo, Vur, Bkt };