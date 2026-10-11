// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Hr,
  Ydn,
  Xdn,
  YNt,
  Vdt,
  Ex,
  Yun
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  v,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Xt
} from "B:/~BUN/root/chunk-3hjtxzqy.js";
import {
  Mnn,
  _B,
  wKe
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Zoe,
  QZe,
  Xze,
  _4
} from "B:/~BUN/root/chunk-pfpays63.js";
import {
  NYt,
  dso,
  xpe,
  Qze,
  uso,
  GOe
} from "B:/~BUN/root/chunk-ws24951p.js";
import {
  o,
  E,
  ae,
  u,
  z,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";

function kwn() {
  let e = QZe();
  if (e === "essential_traffic" && dso()) {
    let a = QZe({
      skipEssentialTrafficGate: !0
    });
    return c(a)
  }
  return c(e)
}

function Ewn(e) {
  return e.source === "fallback" && e.credential !== void 0 && p(e.credential)
}

function y(e) {
  return e !== null && p(Zoe(e))
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
      return Xt("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
      return "served_applies";
    case null:
      if (y(_4())) return Vdt()?.source === "served" ? "served_applies" : null;
      return "served_applies"
  }
}

function Ryt() {
  return kwn() === null
}

function vZn() {
  if (!Ryt()) return "off";
  return Xze("published")
}
import {
  join as x
} from "path";
var C = 2,
  m = 3600000,
  h = 0.1,
  D = ["hosted", "custom_url", "file"],
  w = f(() => u({
    version: A(C),
    fetchedAt: E(),
    staleAt: E(),
    etag: o().refine(_B).optional(),
    source: z(D),
    documentBytes: o(),
    sidecar: ae(),
    rootId: o(),
    document: GOe()
  }));

function cGt(e) {
  return x(Ex(), `published-${e}.json`)
}

function s() {
  return Hr().publishedCatalogByKey
}
var g = xpe * 3 + Qze + 4096;
async function wwn(e) {
  let a = s().get(e);
  if (a !== void 0) return a ?? void 0;
  let r = cGt(e),
    n;
  try {
    n = await Qt().readRange(r, 0, g + 1)
  } catch (l) {
    if (!B(l)) t(`[publishedCatalog] cache read failed: ${v(l)??"unknown"}`);
    s().set(e, null);
    return
  }
  let i = n.length > g ? void 0 : w().safeParse(ct(n.toString("utf8"), !1));
  if (!i?.success) {
    t(`[publishedCatalog] cache file ${i===void 0?"oversized":"invalid"}, discarding`), await _Zn(e);
    return
  }
  return await vwn(e, i.data, {
    verified: !1
  }), i.data
}
async function _Zn(e) {
  s().set(e, null);
  try {
    await Qt().delete(cGt(e))
  } catch {}
}

function f8r(e) {
  s().set(e, null)
}
async function bZn(e, a) {
  await vwn(e, a, {
    verified: !0
  });
  try {
    let r = Qt();
    await r.mkdir(Ex()), await r.atomicWrite(cGt(e), b(a), 384)
  } catch (r) {
    t(`[publishedCatalog] cache write failed: ${v(r)??"unknown"}`)
  }
}
async function vwn(e, a, {
  verified: r
}) {
  if (s().set(e, a), r && a.rootId !== NYt)
    for (let n of S(a.document)) Xdn(n);
  await SZn(a.document)
}
async function SZn(e) {
  let a = S(e);
  for (let r of a) YNt(r);
  await Yun(new Set(a.flatMap((r) => [...Ydn(r)])))
}

function S(e) {
  return Mnn.flatMap((a) => {
    let r = e.surfaces[a],
      n = r === void 0 ? null : wKe(r, a);
    return n === null ? [] : [n]
  })
}

function m8r({
  document: e,
  documentBytes: a,
  sidecar: r,
  etag: n,
  source: i,
  rootId: l,
  now: d = Date.now(),
  random: P = Math.random()
}) {
  return {
    version: C,
    fetchedAt: d,
    staleAt: _(d, P),
    ...n !== void 0 && {
      etag: n
    },
    source: i,
    documentBytes: Buffer.from(a).toString("base64"),
    sidecar: r,
    rootId: l,
    document: e
  }
}

function g8r(e, a = Date.now(), r = Math.random()) {
  return {
    ...e,
    fetchedAt: a,
    staleAt: _(a, r)
  }
}

function _(e, a) {
  let r = 1 + h * (2 * a - 1);
  return e + Math.round(m * r)
}

function wZn(e, a = Date.now()) {
  let r = uso(e.expires_at);
  return r !== void 0 && a >= r
}

function KPe(e, a = Date.now()) {
  let r = e.fetchedAt + m * (1 + h);
  return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || wZn(e.document, a)
}
export {
  cGt,
  wwn,
  _Zn,
  f8r,
  bZn,
  vwn,
  SZn,
  m8r,
  g8r,
  wZn,
  KPe,
  kwn,
  Ewn,
  Ryt,
  vZn
};
