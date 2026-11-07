// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { fn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { bCe, Lmo } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { k1e } from "B:/~BUN/root/chunk-eahns82c.js";
var c = "[Artifact comment sent to Claude]",
  Mbn = "Artifact: ",
  h = "Comment thread: ",
  m = "Sent to Claude at: ",
  g = "[Artifact comments sent to Claude]",
  E = "Comment threads: ",
  jKo = "desktop_app",
  M = 5000,
  y = 100,
  D = 32,
  w = 256,
  _ = 32,
  I = "tengu_madrone_spindle_corbel";
function fZn() {
  return v(I, !1) === !0;
}
var S = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
  O = /^[1-9][0-9]{0,5}$/;
function sYr(e) {
  return e != null && S.test(e);
}
function u(e, t, n) {
  return `${e.toLowerCase()}:${t.toLowerCase()}:${n}`;
}
function C(e, t) {
  return `${e.toLowerCase()}:*:${t}`;
}
function qKt(e) {
  let t = mZn(e);
  return t !== null && (t.startsWith(c) || t.startsWith(g));
}
function Pit(e) {
  if (!e.startsWith(c)) return null;
  let t = e.split(`
`, 4);
  if (t.length < 4 || t[0] !== c) return null;
  let n = t[1],
    o = t[2],
    r = t[3];
  if (!n.startsWith(Mbn) || !o.startsWith(h) || !r.startsWith(m)) return null;
  let slug = fn(n.slice(Mbn.length).trim())?.slug,
    threadId = o.slice(h.length).trim(),
    gestureAt = r.slice(m.length);
  if (slug === void 0 || Nt(threadId) === null || !S.test(gestureAt)) return null;
  return {
    slug: slug,
    threadId: threadId,
    gestureAt: gestureAt
  };
}
function A(e) {
  if (!e.startsWith(g)) return null;
  let t = e.split(`
`, 4);
  if (t.length < 4 || t[0] !== g) return null;
  let n = t[1],
    o = t[2],
    r = t[3];
  if (!n.startsWith(Mbn) || !o.startsWith(E) || !r.startsWith(m)) return null;
  let slug_2 = fn(n.slice(Mbn.length).trim())?.slug,
    l = o.slice(E.length),
    gestureAt_2 = r.slice(m.length);
  if (slug_2 === void 0 || !O.test(l) || !S.test(gestureAt_2)) return null;
  return {
    slug: slug_2,
    count: Number(l),
    gestureAt: gestureAt_2
  };
}
function x(e) {
  let t = Pit(e);
  if (t !== null) return u(t.slug, t.threadId, t.gestureAt);
  let n = A(e);
  return n === null ? null : C(n.slug, n.gestureAt);
}
function Qsi(e) {
  if (e.seededSummon !== !0) return null;
  let t = mZn(e.value),
    n = t === null ? null : x(t);
  if (t === null || n === null) return null;
  let o = Pit(t);
  if (o !== null) Lmo(o.slug, o.threadId, o.gestureAt);else {
    let r = A(t);
    if (r !== null) bCe(r.slug);
  }
  if (e.shouldQuery === !1) return null;
  if (L([n]), o !== null) R(n, o);
  return n;
}
function Zsi(e) {
  if (e.seededSummon !== !0 || e.shouldQuery === !1) return null;
  let t = mZn(e.value),
    n = t === null ? null : x(t);
  if (t === null || n === null) return null;
  let o = Pit(t);
  if (o !== null) Lmo(o.slug, o.threadId, o.gestureAt);
  return L([n]), n;
}
function R(e, t) {
  let {
    open: open
  } = te().summonSeeds;
  open.delete(e), open.set(e, {
    slug: t.slug.toLowerCase(),
    threadId: t.threadId.toLowerCase(),
    gestureAt: t.gestureAt
  });
  while (open.size > _) {
    let o = open.keys().next().value;
    if (o === void 0) break;
    open.delete(o);
  }
}
function eii(e, t, n) {
  let {
      open: open_2,
      settled: settled
    } = te().summonSeeds,
    s = e.toLowerCase(),
    l = t.toLowerCase();
  for (let [a, d] of open_2) if (d.slug === s && d.threadId === l) open_2.delete(a);
  let i = n == null ? null : Pit(n);
  if (i !== null && i.slug.toLowerCase() === s && i.threadId.toLowerCase() === l) {
    let a = u(i.slug, i.threadId, i.gestureAt);
    settled.delete(a), settled.add(a);
    while (settled.size > _) {
      let d = settled.values().next().value;
      if (d === void 0) break;
      settled.delete(d);
    }
  }
}
function tii(e) {
  return te().summonSeeds.settled.has(u(e.slug, e.threadId, e.gestureAt));
}
function nii(e) {
  return te().summonSeeds.open.get(u(e.slug, e.threadId, e.gestureAt));
}
function rii(e) {
  return e.declared === !0 && !e.isRemoteIO && e.isSynthetic !== !0 && !e.peerDelivered && e.inboundOrigin === void 0 && (e.clientPlatform === void 0 || e.clientPlatform === jKo);
}
function oii(e, t) {
  let n = [];
  for (let o of t) for (let r of k1e(o)) if (sYr(r.toClaudeAt)) n.push(u(e, o.id, r.toClaudeAt));
  return b(te().summonSeeds.readClaims, n, w), n.length;
}
function b(e, t, n) {
  for (let o of t) e.delete(o), e.add(o);
  while (e.size > n) {
    let o = e.values().next().value;
    if (o === void 0) break;
    e.delete(o);
  }
}
function L(e) {
  b(te().summonSeeds.claims, e, D);
}
var p = {
  hostSeeded: !0
};
function pZn(e, t, n, o = p) {
  return te().summonSeeds.readClaims.has(u(e, t, n)) || o.hostSeeded && iYr(e, t, n);
}
function iYr(e, t, n) {
  let {
    claims: claims
  } = te().summonSeeds;
  return claims.has(u(e, t, n)) || claims.has(C(e, n));
}
function f(e, t, n, o = p) {
  return n.length > 0 && n.every(item => pZn(e, t, item, o));
}
function WKo(e, t, n, o = p) {
  if (!f(e, t, n, o)) return !1;
  let {
    claims: claims_2,
    readClaims: readClaims
  } = te().summonSeeds;
  for (let l of n) if (readClaims.delete(u(e, t, l)), o.hostSeeded) claims_2.delete(u(e, t, l));
  return !0;
}
function sii(e, t, n) {
  let {
    readClaims: readClaims_2
  } = te().summonSeeds;
  for (let r of n) readClaims_2.delete(u(e, t, r));
}
async function iii(e, t, n, o) {
  let r = te().summonSeeds.graceMsOverride ?? M,
    s = Date.now() + r;
  while (Date.now() < s) {
    if (o.aborted) return !1;
    if (f(e, t, n)) return !0;
    await J(Math.min(y, Math.max(1, s - Date.now())), o);
  }
  return f(e, t, n);
}
function mZn(e) {
  if (typeof e === "string") return e;
  if (Array.isArray(e)) {
    let t = e.at(-1);
    if (t?.type === "text" && typeof t.text === "string") return t.text;
  }
  return null;
}
export { Mbn, jKo, fZn, sYr, qKt, Pit, Qsi, Zsi, eii, tii, nii, rii, oii, pZn, iYr, WKo, sii, iii, mZn };