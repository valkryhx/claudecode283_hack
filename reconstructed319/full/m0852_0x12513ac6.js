// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  pr
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  _V,
  vU
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  o,
  E,
  u,
  me,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  join as b
} from "path";
var V7o = "published-floor.json",
  l = 1,
  h = 32,
  a = 65536,
  v = p(() => u({
    version: T(l),
    sources: me(o().min(1).max(64), u({
      version: E().int().nonnegative(),
      issuedAt: o().max(64),
      recordedAt: E().int().nonnegative()
    }))
  }));

function c() {
  return b(vU(), V7o)
}

function s() {
  return pr().publishedCatalogFloorMarks
}
async function Aar(e) {
  return await f(), s().get(e)?.version ?? 0
}
async function T6t(e, r, i = Date.now()) {
  await f();
  let n = s().get(e);
  if (n !== void 0 && n.version >= r.version) return;
  s().set(e, {
    version: r.version,
    issuedAt: (r.issued_at ?? "").slice(0, 64),
    recordedAt: i
  }), await F()
}

function f() {
  let e = pr();
  return e.publishedCatalogFloorRead ??= g().then(m), e.publishedCatalogFloorRead
}

function m(e) {
  if (e === void 0) return;
  for (let [r, i] of e) {
    let n = s().get(r);
    if (n === void 0 || i.version > n.version) s().set(r, i)
  }
}
async function g() {
  let e;
  try {
    e = await _V().readRange(c(), 0, a + 1)
  } catch (i) {
    if (!K(i)) t(`[publishedCatalog] floor file read failed: ${k(i)??"unknown"}; no persisted version marks this session`);
    return
  }
  let r = e.length > a ? void 0 : v().safeParse(et(e.toString("utf8"), !1));
  if (!r?.success) {
    t(`[publishedCatalog] floor file ${r===void 0?"oversized":"invalid"}; no persisted version marks this session`);
    return
  }
  return new Map(Object.entries(r.data.sources))
}

function F() {
  let e = pr(),
    r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return e.publishedCatalogFloorWrite = r, r
}
async function d() {
  try {
    m(await g());
    let e = [...s().entries()].sort(([, i], [, n]) => n.recordedAt - i.recordedAt).slice(0, h),
      r = _V();
    await r.mkdir(vU()), await r.atomicWrite(c(), _({
      version: l,
      sources: Object.fromEntries(e)
    }), 384)
  } catch (e) {
    t(`[publishedCatalog] floor file write failed: ${k(e)??"unknown"}`)
  }
}
export {
  V7o,
  Aar,
  T6t
};
