// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var P = ["panel"];
function Wo({
  hideWhile = P,
  ...e
}) {
  return {
    ...e,
    hideWhile: hideWhile
  };
}
function nXi(a) {
  return async function (t, r, n) {
    if (jin(r)) return g(a, t, r, n);
    return h(a, t, r, n);
  };
}
function jin(a) {
  return typeof a === "object" && a !== null && Symbol.asyncIterator in a;
}
function f(a, e) {
  let t = e?.alsoHideWhile ?? [];
  return t.every(item => a.includes(item)) ? a : [...a, ...t.filter(item => !a.includes(item))];
}
async function h(a, e, t, r) {
  let n = e.payload().safeParse(t);
  if (!n.success) return e.default;
  let l;
  try {
    let {
      replied: replied
    } = a.request({
      kind: e.kind,
      payload: n.data,
      userInvoked: e.userInvoked,
      hideWhile: f(e.hideWhile, r),
      holdsTop: e.holdsTop
    }, r);
    l = await replied;
  } catch {
    return e.default;
  }
  if ("cancelled" in l) return e.default;
  let i = e.result().safeParse(l.result);
  return i.success ? i.data : e.default;
}
async function g(a, e, t, r) {
  let n = t[Symbol.asyncIterator](),
    l = await n.next();
  if (l.done) return e.default;
  let i = e.payload().safeParse(l.value);
  if (!i.success) return n.return?.(void 0), e.default;
  let abortController = new AbortController(),
    c = () => abortController.abort();
  if (r?.signal) if (r.signal.aborted) abortController.abort();else r.signal.addEventListener("abort", c, {
    once: !0
  });
  let {
      replied: replied_2,
      update: update
    } = a.request({
      kind: e.kind,
      payload: i.data,
      userInvoked: e.userInvoked,
      hideWhile: f(e.hideWhile, r),
      holdsTop: e.holdsTop
    }, {
      signal: abortController.signal,
      place: r?.place,
      askOrder: r?.askOrder,
      armInputGrace: r?.armInputGrace,
      succeeds: r?.succeeds,
      onFirstReveal: r?.onFirstReveal,
      onClaimed: r?.onClaimed,
      countedAsk: r?.countedAsk
    }),
    d;
  (async () => {
    try {
      while (!abortController.signal.aborted) {
        let s = await n.next();
        if (s.done) return;
        if (abortController.signal.aborted) return;
        let y = e.payload().safeParse(s.value);
        if (!y.success) continue;
        update(y.data);
      }
    } catch (error) {
      d = error, abortController.abort();
    }
  })().catch(() => {});
  let u;
  try {
    u = await replied_2;
  } finally {
    r?.signal?.removeEventListener("abort", c), n.return?.(void 0);
  }
  if (d !== void 0) throw d;
  if ("cancelled" in u) return e.default;
  let p = e.result().safeParse(u.result);
  return p.success ? p.data : e.default;
}
export { Wo, nXi, jin };