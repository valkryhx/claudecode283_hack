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
  pt
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Or
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  pB,
  LD
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  o,
  v,
  u,
  fe,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  join as b
} from "path";
var tto = "published-floor.json",
  l = 1,
  h = 32,
  a = 65536,
  F = f(() => u({
    version: C(l),
    sources: fe(o().min(1).max(64), u({
      version: v().int().nonnegative(),
      issuedAt: o().max(64),
      recordedAt: v().int().nonnegative()
    }))
  }));

function c() {
  return b(LD(), tto)
}

function s() {
  return Or().publishedCatalogFloorMarks
}
async function yOn(e) {
  return await m(), s().get(e)?.version ?? 0
}
async function eRt(e, r, i = Date.now()) {
  await m();
  let n = s().get(e);
  if (n !== void 0 && n.version >= r.version) return;
  s().set(e, {
    version: r.version,
    issuedAt: (r.issued_at ?? "").slice(0, 64),
    recordedAt: i
  }), await P()
}

function m() {
  let e = Or();
  return e.publishedCatalogFloorRead ??= p().then(g), e.publishedCatalogFloorRead
}

function g(e) {
  if (e === void 0) return;
  for (let [r, i] of e) {
    let n = s().get(r);
    if (n === void 0 || i.version > n.version) s().set(r, i)
  }
}
async function p() {
  let e;
  try {
    e = await pB().readRange(c(), 0, a + 1)
  } catch (i) {
    if (!G(i)) t(`[publishedCatalog] floor file read failed: ${k(i)??"unknown"}; no persisted version marks this session`);
    return
  }
  let r = e.length > a ? void 0 : F().safeParse(pt(e.toString("utf8"), !1));
  if (!r?.success) {
    t(`[publishedCatalog] floor file ${r===void 0?"oversized":"invalid"}; no persisted version marks this session`);
    return
  }
  return new Map(Object.entries(r.data.sources))
}

function P() {
  let e = Or(),
    r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return e.publishedCatalogFloorWrite = r, r
}
async function d() {
  try {
    g(await p());
    let e = [...s().entries()].sort(([, i], [, n]) => n.recordedAt - i.recordedAt).slice(0, h),
      r = pB();
    await r.mkdir(LD()), await r.atomicWrite(c(), _({
      version: l,
      sources: Object.fromEntries(e)
    }), 384)
  } catch (e) {
    t(`[publishedCatalog] floor file write failed: ${k(e)??"unknown"}`)
  }
}
export {
  tto,
  yOn,
  eRt
};
