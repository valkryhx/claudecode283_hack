// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ke
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Ao
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  Lws,
  ken,
  Pmt
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  Mt,
  ILe,
  Pmo,
  r3,
  xen,
  dEr,
  $I
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  Elt
} from "B:/~BUN/root/chunk-gjq813eb.js";
var h = 1000;
async function Pp(e, r, t, n) {
  if (!!r.toolUseId && ILe(Mt(e.slug), r.toolUseId)) return;
  let {
    signal: o
  } = r.abortController;
  if (o.aborted) throw new Ke("artifact permission check aborted");
  let l = Pmt(),
    f = n?.readBack !== !0,
    w = f && (!l || Lws(e)),
    b = l ? ken(e, o) : void 0;
  if (w && k(e.slug) !== void 0) {
    if (await b, o.aborted) throw new Ke("artifact permission check aborted");
    if (S(e.slug, r.toolUseId)) return
  }
  let d = n?.readBack === !0 ? `${e.slug}?readback` : e.slug,
    c = C(d),
    a = c ?? g(d, e, r, n),
    [s] = await Promise.all([c !== void 0 ? P(c, o) : a.read, b]);
  if (s === void 0) {
    if (o.aborted) throw new Ke("artifact permission check aborted");
    let u = C(d);
    if (u !== void 0 && u !== c) a = u, s = await P(u, o)
  }
  if (s === void 0) {
    if (f && S(e.slug, r.toolUseId)) return;
    a = g(d, e, r, n), s = await a.read
  }
  xen(e.slug, s, {
    consumedByCheck: !0,
    toolUseId: r.toolUseId,
    issuedAt: a.issuedAt,
    probeId: a.id,
    debugLabel: t
  })
}
async function Trr(e, r, t) {
  let n = Date.now(),
    o = await Elt(e, r.abortController.signal, r.credentials);
  xen(e.slug, o, {
    consumedByCheck: !1,
    toolUseId: r.toolUseId,
    issuedAt: n,
    debugLabel: t
  })
}

function A(e) {
  let r = Date.now(),
    t = Math.min(i.CLAUDE_CODE_ARTIFACT_SHARE_PROBE_REUSE_MS ?? h, h);
  return r >= e && r - e < t && !$I(e)
}

function k(e) {
  let r = Mt(e);
  return r?.lastProbeAt !== void 0 && r.lastProbeIssuedAt !== void 0 && A(r.lastProbeIssuedAt) ? r : void 0
}

function m(e, r) {
  let {
    checkProbesInFlight: t
  } = te().shareStatus;
  if (t.get(e) === r) t.delete(e)
}

function g(e, r, t, n) {
  let o = {
    id: Symbol("share probe"),
    issuedAt: Date.now(),
    read: Elt(r, t.abortController.signal, t.credentials, n)
  };
  return o.read.then(() => m(e, o), () => m(e, o)), te().shareStatus.checkProbesInFlight.set(e, o), o
}

function S(e, r) {
  let t = k(e);
  if (t === void 0) return !1;
  if (r !== void 0) r3(e, {
    ...t,
    ...Pmo(t, r, !0)
  });
  return dEr(t, !1, !0), !0
}

function C(e) {
  let r = te().shareStatus.checkProbesInFlight.get(e);
  return r !== void 0 && A(r.issuedAt) ? r : void 0
}
async function P(e, r) {
  try {
    return await Ao(e.read, r, () => new Ke("artifact permission check aborted"))
  } catch (t) {
    if (r.aborted) throw t;
    return
  }
}
export {
  Pp,
  Trr
};
