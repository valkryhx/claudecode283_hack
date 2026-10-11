// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Dt,
  x,
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Xt
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  fze,
  l4,
  UH
} from "B:/~BUN/root/chunk-90dp6ktw.js";
import {
  rI
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  VB
} from "B:/~BUN/root/chunk-zav2qxje.js";
import {
  fn,
  ho,
  lt
} from "B:/~BUN/root/chunk-8386ms9e.js";
var s = f(() => lt({
  reviews_used: fn(),
  reviews_limit: fn(),
  reviews_remaining: fn(),
  is_overage: ho()
}));
async function g(e) {
  let r = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r) try {
    let n = s().safeParse(J(r));
    return n.success ? n.data : null
  } catch (n) {
    return t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null
  }
  try {
    let n = await Dt.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3000,
      credentials: e
    });
    if (!n.ok) return p("api_ultrareview_quota", "request_failed"), null;
    let o = s().safeParse(n.data);
    if (!o.success) return t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), p("api_ultrareview_quota", "schema_mismatch"), null;
    return _("api_ultrareview_quota"), o.data
  } catch (n) {
    return t(`fetchUltrareviewQuota failed: ${n}`), p("api_ultrareview_quota", "request_failed"), null
  }
}
class l {
  quota = void 0;
  fetch = void 0
}
var h = new q(() => new l);

function m() {
  return h.of(j().host)
}
async function Fsr(e) {
  let r = m();
  r.fetch ??= g(e), r.quota = await r.fetch
}

function s4t(e) {
  let r = m();
  if (r.quota === void 0) return Fsr(e), null;
  return r.quota
}
var S = "tengu_ultrareview_awareness";

function R() {
  return x(S, null) ?? {}
}

function BTn(e) {
  if (!rI()) return !1;
  if (!Xt("allow_remote_sessions")) return !1;
  return R()[e] === !0
}

function $sr() {
  return le().hasRunUltrareview === !0
}

function bZr(e) {
  Ee((r) => r.hasRunUltrareview ? r : {
    ...r,
    hasRunUltrareview: !0
  }, e)
}

function U(e) {
  i("tengu_ultrareview_awareness_shown", {
    surface: c(e)
  })
}

function Usr(e) {
  return `${e} free ${e===1?"review":"reviews"} left`
}

function SZr(e) {
  if (e !== "ultrareview" && e !== VB) return "";
  if (!BTn("slash_menu")) return "";
  let r = s4t();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left \xB7 ` : `${n} free /ultrareview \xB7 `
}
var C = "ultrareview-prose-pointer",
  A = "ultrareview-post-commit",
  E = 5;

function d(e, r, n, o, w) {
  if (!BTn(e)) return null;
  if ($sr()) return null;
  if (l4(r) >= E) return null;
  if (UH(r) === 0) return null;
  fze(r, o), U(e);
  let u = s4t(w),
    v = u !== null && u.reviews_remaining > 0 ? ` \u2014 ${Usr(u.reviews_remaining)}` : "";
  return n(v)
}

function wZr(e, r) {
  return d("prose_pointer", C, (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r)
}

function vZr(e) {
  return d("post_commit", A, (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0)
}
export {
  Fsr,
  s4t,
  BTn,
  $sr,
  bZr,
  Usr,
  SZr,
  wZr,
  vZr
};
