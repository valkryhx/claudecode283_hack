// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Gt,
  E,
  Ce,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  sn
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  Bot,
  R7,
  Tz
} from "B:/~BUN/root/chunk-fv1y2eh7.js";
import {
  bN
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  DK
} from "B:/~BUN/root/chunk-72f62gjz.js";
import {
  mn,
  Vo,
  St
} from "B:/~BUN/root/chunk-rm2gz7kj.js";
var s = f(() => St({
  reviews_used: mn(),
  reviews_limit: mn(),
  reviews_remaining: mn(),
  is_overage: Vo()
}));
async function _(e) {
  let r = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r) try {
    let n = s().safeParse(J(r));
    return n.success ? n.data : null
  } catch (n) {
    return t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null
  }
  try {
    let n = await Gt.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3000,
      credentials: e
    });
    if (!n.ok) return p("api_ultrareview_quota", "request_failed"), null;
    let o = s().safeParse(n.data);
    if (!o.success) return t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), p("api_ultrareview_quota", "schema_mismatch"), null;
    return g("api_ultrareview_quota"), o.data
  } catch (n) {
    return t(`fetchUltrareviewQuota failed: ${n}`), p("api_ultrareview_quota", "request_failed"), null
  }
}
class l {
  quota = void 0;
  fetch = void 0
}
var h = new z(() => new l);

function m() {
  return h.of(j().host)
}
async function ZXr(e) {
  let r = m();
  r.fetch ??= _(e), r.quota = await r.fetch
}

function CRn(e) {
  let r = m();
  if (r.quota === void 0) return ZXr(e), null;
  return r.quota
}
var S = "tengu_ultrareview_awareness";

function R() {
  return E(S, null) ?? {}
}

function jar(e) {
  if (!bN()) return !1;
  if (!sn("allow_remote_sessions")) return !1;
  return R()[e] === !0
}

function eJr() {
  return ue().hasRunUltrareview === !0
}

function rns(e) {
  Ce((r) => r.hasRunUltrareview ? r : {
    ...r,
    hasRunUltrareview: !0
  }, e)
}

function U(e) {
  i("tengu_ultrareview_awareness_shown", {
    surface: c(e)
  })
}

function tJr(e) {
  return `${e} free ${e===1?"review":"reviews"} left`
}

function ons(e) {
  if (e !== "ultrareview" && e !== DK) return "";
  if (!jar("slash_menu")) return "";
  let r = CRn();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left \xB7 ` : `${n} free /ultrareview \xB7 `
}
var C = "ultrareview-prose-pointer",
  A = "ultrareview-post-commit",
  b = 5;

function d(e, r, n, o, w) {
  if (!jar(e)) return null;
  if (eJr()) return null;
  if (R7(r) >= b) return null;
  if (Tz(r) === 0) return null;
  Bot(r, o), U(e);
  let u = CRn(w),
    v = u !== null && u.reviews_remaining > 0 ? ` \u2014 ${tJr(u.reviews_remaining)}` : "";
  return n(v)
}

function sns(e, r) {
  return d("prose_pointer", C, (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r)
}

function ins(e) {
  return d("post_commit", A, (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0)
}
export {
  ZXr,
  CRn,
  jar,
  eJr,
  rns,
  tJr,
  ons,
  sns,
  ins
};
