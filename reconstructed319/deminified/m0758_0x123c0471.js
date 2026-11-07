// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { vG, Vnt } from "B:/~BUN/root/chunk-game8aqv.js";
import { lL } from "B:/~BUN/root/chunk-4vcs773m.js";
import { ss, I4, hr, xie, Bn } from "B:/~BUN/root/chunk-3v92y8yw.js";
function Nsi(a) {
  let e = a.trim(),
    env = ss(),
    slug = I4(e);
  if (slug !== null) return {
    slug: slug,
    url: Bn({
      slug: slug,
      env: env
    })
  };
  let slug_2 = e.toLowerCase();
  if (hr.test(slug_2)) return {
    slug: slug_2,
    url: Bn({
      slug: slug_2,
      env: env
    })
  };
  let o = xie(e);
  if (o === null) return {
    error: "Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"
  };
  if (o.env !== env) return {
    error: `Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${env}`
  };
  return {
    slug: o.slug,
    url: Bn(o)
  };
}
var s = null;
function Fsi(a) {
  s = a;
}
function Hsi() {
  let a = s;
  return s = null, a;
}
function $si() {
  return s;
}
function Obn(a) {
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
function oYr(a, e) {
  a = a.toLowerCase();
  let r = ["--watch-artifact", "--watch-artifact-no-autoreact"],
    t = vG(),
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
  if (o) Vnt(n), lL("--watch-artifact", ["--watch-artifact-no-autoreact"], null, void 0, e);
}
function Usi(a) {
  let e = vG(),
    r;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n === "--watch-artifact" && e[t + 1] !== void 0) r = e[t + 1].toLowerCase();else if (n.startsWith("--watch-artifact=")) r = n.slice(17).toLowerCase();
  }
  if (r === void 0) return !1;
  return Vnt([...Obn(vG()), "--watch-artifact-no-autoreact", r]), lL("--watch-artifact-no-autoreact", ["--watch-artifact"], r, void 0, a), !0;
}
export { Nsi, Fsi, Hsi, $si, Obn, oYr, Usi };