// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { v$, $Ge } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { XP } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { Uo, bW, ar, xJ, Hn } from "B:/~BUN/root/chunk-qp0344nb.js";
function Frs(a) {
  let e = a.trim(),
    env = Uo(),
    slug = bW(e);
  if (slug !== null) return {
    slug: slug,
    url: Hn({
      slug: slug,
      env: env
    })
  };
  let slug_2 = e.toLowerCase();
  if (ar.test(slug_2)) return {
    slug: slug_2,
    url: Hn({
      slug: slug_2,
      env: env
    })
  };
  let o = xJ(e);
  if (o === null) return {
    error: "Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"
  };
  if (o.env !== env) return {
    error: `Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${env}`
  };
  return {
    slug: o.slug,
    url: Hn(o)
  };
}
var s = null;
function Hrs(a) {
  s = a;
}
function $rs() {
  let a = s;
  return s = null, a;
}
function Urs() {
  return s;
}
function MYt(a) {
  let e = [];
  for (let r = 0; r < a.length; r++) {
    let t = a[r];
    if (t === "--watch-artifact" || t === "--watch-artifact-no-autoreact") {
      r++;
      continue;
    }
    if (t.startsWith("--watch-artifact=") || t.startsWith("--watch-artifact-no-autoreact=")) continue;
    e.push(t);
  }
  return e;
}
function tdr(a, e) {
  a = a.toLowerCase();
  let r = ["--watch-artifact", "--watch-artifact-no-autoreact"],
    t = v$(),
    n = [],
    o = !1;
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (r.some(item => c === item && t[i + 1]?.toLowerCase() === a || c.toLowerCase() === `${item}=${a}`)) {
      if (c.indexOf("=") === -1) i++;
      o = !0;
      continue;
    }
    n.push(c);
  }
  if (o) $Ge(n), XP("--watch-artifact", ["--watch-artifact-no-autoreact"], null, void 0, e);
}
function Brs(a) {
  let e = v$(),
    r;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n === "--watch-artifact" && e[t + 1] !== void 0) r = e[t + 1].toLowerCase();else if (n.startsWith("--watch-artifact=")) r = n.slice(17).toLowerCase();
  }
  if (r === void 0) return !1;
  return $Ge([...MYt(v$()), "--watch-artifact-no-autoreact", r]), XP("--watch-artifact-no-autoreact", ["--watch-artifact"], r, void 0, a), !0;
}
export { Frs, Hrs, $rs, Urs, MYt, tdr, Brs };