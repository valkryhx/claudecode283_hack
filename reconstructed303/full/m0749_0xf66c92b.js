// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Or
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  pt
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  fYn,
  mYn,
  wln,
  t$t,
  pB,
  LD,
  k6n
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  sn
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  IBn,
  qq,
  Yct
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  gbe,
  hCt,
  est,
  O7
} from "B:/~BUN/root/chunk-2sjr2z8k.js";
import {
  Gxn,
  ais,
  rAe,
  tst,
  lis,
  LKe
} from "B:/~BUN/root/chunk-e6jzpkbb.js";
import {
  o,
  v,
  oe,
  u,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";

function Yrr() {
  let e = hCt();
  if (e === "essential_traffic" && ais()) {
    let a = hCt({
      skipEssentialTrafficGate: !0
    });
    return c(a)
  }
  return c(e)
}

function Xrr(e) {
  return e.source === "fallback" && e.credential !== void 0 && p(e.credential)
}

function P(e) {
  return e !== null && p(gbe(e))
}

function p(e) {
  switch (e) {
    case "oauth":
      return !1;
    case "api_key":
    case "profile":
    case "federation":
      return !0
  }
}

function c(e) {
  switch (e) {
    case "env_off":
    case "bare":
    case "essential_traffic":
    case "unix_socket":
    case "policy":
      return e;
    case "not_first_party":
      return "no_3p_reader";
    case "not_claude_ai_auth":
    case "api_key_helper":
      return sn("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
      return "served_applies";
    case null:
      if (P(O7())) return t$t()?.source === "served" ? "served_applies" : null;
      return "served_applies"
  }
}

function RVt() {
  return Yrr() === null
}

function jYr() {
  if (!RVt()) return "off";
  return est("published")
}
import {
  join as A
} from "path";
var h = 2,
  m = 3600000,
  S = 0.1,
  x = ["hosted", "custom_url", "file"],
  R = f(() => u({
    version: C(h),
    fetchedAt: v(),
    staleAt: v(),
    etag: o().refine(qq).optional(),
    source: U(x),
    documentBytes: o(),
    sidecar: oe(),
    rootId: o(),
    document: LKe()
  }));

function zvn(e) {
  return A(LD(), `published-${e}.json`)
}

function i() {
  return Or().publishedCatalogByKey
}
var g = rAe * 3 + tst + 4096;
async function qrr(e) {
  let a = i().get(e);
  if (a !== void 0) return a ?? void 0;
  let r = zvn(e),
    n;
  try {
    n = await pB().readRange(r, 0, g + 1)
  } catch (l) {
    if (!G(l)) t(`[publishedCatalog] cache read failed: ${k(l)??"unknown"}`);
    i().set(e, null);
    return
  }
  let s = n.length > g ? void 0 : R().safeParse(pt(n.toString("utf8"), !1));
  if (!s?.success) {
    t(`[publishedCatalog] cache file ${s===void 0?"oversized":"invalid"}, discarding`), await HYr(e);
    return
  }
  return await Krr(e, s.data, {
    verified: !1
  }), s.data
}
async function HYr(e) {
  i().set(e, null);
  try {
    await pB().delete(zvn(e))
  } catch {}
}

function jXo(e) {
  i().set(e, null)
}
async function $Yr(e, a) {
  await Krr(e, a, {
    verified: !0
  });
  try {
    let r = pB();
    await r.mkdir(LD()), await r.atomicWrite(zvn(e), _(a), 384)
  } catch (r) {
    t(`[publishedCatalog] cache write failed: ${k(r)??"unknown"}`)
  }
}
async function Krr(e, a, {
  verified: r
}) {
  if (i().set(e, a), r && a.rootId !== Gxn)
    for (let n of b(a.document)) mYn(n);
  await UYr(a.document)
}
async function UYr(e) {
  let a = b(e);
  for (let r of a) wln(r);
  await k6n(new Set(a.flatMap((r) => [...fYn(r)])))
}

function b(e) {
  return IBn.flatMap((a) => {
    let r = e.surfaces[a],
      n = r === void 0 ? null : Yct(r, a);
    return n === null ? [] : [n]
  })
}

function WXo({
  document: e,
  documentBytes: a,
  sidecar: r,
  etag: n,
  source: s,
  rootId: l,
  now: d = Date.now(),
  random: y = Math.random()
}) {
  return {
    version: h,
    fetchedAt: d,
    staleAt: E(d, y),
    ...n !== void 0 && {
      etag: n
    },
    source: s,
    documentBytes: Buffer.from(a).toString("base64"),
    sidecar: r,
    rootId: l,
    document: e
  }
}

function zXo(e, a = Date.now(), r = Math.random()) {
  return {
    ...e,
    fetchedAt: a,
    staleAt: E(a, r)
  }
}

function E(e, a) {
  let r = 1 + S * (2 * a - 1);
  return e + Math.round(m * r)
}

function BYr(e, a = Date.now()) {
  let r = lis(e.expires_at);
  return r !== void 0 && a >= r
}

function ZVe(e, a = Date.now()) {
  let r = e.fetchedAt + m * (1 + S);
  return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || BYr(e.document, a)
}
export {
  zvn,
  qrr,
  HYr,
  jXo,
  $Yr,
  Krr,
  UYr,
  WXo,
  zXo,
  BYr,
  ZVe,
  Yrr,
  Xrr,
  RVt,
  jYr
};
