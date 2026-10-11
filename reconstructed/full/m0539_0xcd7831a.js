// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  Hr,
  Ex
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  o,
  E,
  u,
  fe,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  join as h
} from "path";
var Mdr = "published-floor.json",
  l = 1,
  F = 32,
  a = 65536,
  C = f(() => u({
    version: A(l),
    sources: fe(o().min(1).max(64), u({
      version: E().int().nonnegative(),
      issuedAt: o().max(64),
      recordedAt: E().int().nonnegative()
    }))
  }));

function c() {
  return h(Ex(), Mdr)
}

function s() {
  return Hr().publishedCatalogFloorMarks
}
async function UYt(e) {
  return await m(), s().get(e)?.version ?? 0
}
async function oet(e, r, i = Date.now()) {
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
  let e = Hr();
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
    e = await Qt().readRange(c(), 0, a + 1)
  } catch (i) {
    if (!B(i)) t(`[publishedCatalog] floor file read failed: ${v(i)??"unknown"}; no persisted version marks this session`);
    return
  }
  let r = e.length > a ? void 0 : C().safeParse(ct(e.toString("utf8"), !1));
  if (!r?.success) {
    t(`[publishedCatalog] floor file ${r===void 0?"oversized":"invalid"}; no persisted version marks this session`);
    return
  }
  return new Map(Object.entries(r.data.sources))
}

function P() {
  let e = Hr(),
    r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return e.publishedCatalogFloorWrite = r, r
}
async function d() {
  try {
    g(await p());
    let e = [...s().entries()].sort(([, i], [, n]) => n.recordedAt - i.recordedAt).slice(0, F),
      r = Qt();
    await r.mkdir(Ex()), await r.atomicWrite(c(), b({
      version: l,
      sources: Object.fromEntries(e)
    }), 384)
  } catch (e) {
    t(`[publishedCatalog] floor file write failed: ${v(e)??"unknown"}`)
  }
}
export {
  Mdr,
  UYt,
  oet
};
