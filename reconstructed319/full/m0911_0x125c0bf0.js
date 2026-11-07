// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jt,
  v,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  gn
} from "B:/~BUN/root/chunk-f0zgv0ya.js";
import {
  RBe,
  dQ,
  AB
} from "B:/~BUN/root/chunk-h434y56c.js";
import {
  L$
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  V9
} from "B:/~BUN/root/chunk-hskja58z.js";
import {
  Mn,
  ws,
  Ft
} from "B:/~BUN/root/chunk-b3kw6jpx.js";
var u = p(() => Ft({
  reviews_used: Mn(),
  reviews_limit: Mn(),
  reviews_remaining: Mn(),
  is_overage: ws()
}));
async function h(e) {
  let r = i.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r) try {
    let n = u().safeParse(ee(r));
    return n.success ? n.data : null
  } catch (n) {
    return t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null
  }
  try {
    let n = await jt.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3000,
      credentials: e
    });
    if (!n.ok) return c("api_ultrareview_quota", "request_failed"), null;
    let o = u().safeParse(n.data);
    if (!o.success) return t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), c("api_ultrareview_quota", "schema_mismatch"), null;
    return g("api_ultrareview_quota"), o.data
  } catch (n) {
    return t(`fetchUltrareviewQuota failed: ${n}`), c("api_ultrareview_quota", "request_failed"), null
  }
}
class s {
  quota = void 0;
  fetch = void 0
}
var S = new W(() => new s);

function m() {
  return S.of(H().host)
}
async function b4o(e) {
  let r = m();
  r.fetch ??= h(e), r.quota = await r.fetch
}

function her(e) {
  let r = m();
  if (r.quota === void 0) return b4o(e), null;
  return r.quota
}
var R = "tengu_ultrareview_awareness";

function U() {
  return v(R, null) ?? {}
}

function l6r(e) {
  if (!L$()) return !1;
  if (!gn("allow_remote_sessions")) return !1;
  return U()[e] === !0
}

function S4o() {
  return fe().hasRunUltrareview === !0
}

function Nai(e) {
  Le((r) => r.hasRunUltrareview ? r : {
    ...r,
    hasRunUltrareview: !0
  }, e)
}

function C(e) {
  l("tengu_ultrareview_awareness_shown", {
    surface: f(e)
  })
}

function w4o(e) {
  return `${e} free ${e===1?"review":"reviews"} left`
}

function Fai(e) {
  if (e !== "ultrareview" && e !== V9) return "";
  if (!l6r("slash_menu")) return "";
  let r = her();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left \xB7 ` : `${n} free /ultrareview \xB7 `
}
var A = "ultrareview-prose-pointer",
  E = "ultrareview-post-commit",
  b = 5;

function d(e, r, n, o, w) {
  if (!l6r(e)) return null;
  if (S4o()) return null;
  if (dQ(r) >= b) return null;
  if (AB(r) === 0) return null;
  RBe(r, o), C(e);
  let a = her(w),
    _ = a !== null && a.reviews_remaining > 0 ? ` \u2014 ${w4o(a.reviews_remaining)}` : "";
  return n(_)
}

function Hai(e, r) {
  return d("prose_pointer", A, (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r)
}

function $ai(e) {
  return d("post_commit", E, (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0)
}
export {
  b4o,
  her,
  l6r,
  S4o,
  Nai,
  w4o,
  Fai,
  Hai,
  $ai
};
