// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
function Q(t, e, r) {
  return new Promise((o, n) => {
    if (e?.aborted) {
      if (r?.throwOnAbort || r?.abortError) n(r.abortError?.() ?? Error("aborted"));else o();
      return;
    }
    let i = setTimeout((a, u, c) => {
      a?.removeEventListener("abort", u), c();
    }, t, e, m, o);
    function m() {
      if (clearTimeout(i), r?.throwOnAbort || r?.abortError) n(r.abortError?.() ?? Error("aborted"));else o();
    }
    if (e?.addEventListener("abort", m, {
      once: !0
    }), r?.unref) i.unref();
  });
}
var d = 60000;
function e5({
  baseMs: baseMs,
  capMs = d,
  attempt: attempt,
  floorMs = 0,
  random = Math.random
}) {
  let i = Math.min(capMs, baseMs * 2 ** Math.max(0, attempt)),
    m = Math.min(floorMs, i);
  return Math.floor(m + random() * (i - m));
}
function b(t, e) {
  t(Error(e));
}
function Ht(t, e, r) {
  let o,
    promise = new Promise((i, m) => {
      o = setTimeout(b, e, m, r);
    });
  return Promise.race([t, promise]).finally(() => {
    if (o !== void 0) clearTimeout(o);
  });
}
var s = (t, e) => {
  let r = setTimeout(t, e);
  return () => clearTimeout(r);
};
function nt(t, e, r = s) {
  let o = () => {},
    promise_2 = new Promise(i => {
      o = r(() => i(void 0), e);
    });
  return Promise.race([t, promise_2]).finally(o);
}
async function eu(t, e, r) {
  let o = () => {
    t.catch(() => {});
  };
  if (e.aborted) throw o(), r();
  let n = () => {};
  try {
    return await Promise.race([t, new Promise((i, m) => {
      n = () => m(r()), e.addEventListener("abort", n, {
        once: !0
      });
    })]);
  } catch (error) {
    throw o(), error;
  } finally {
    e.removeEventListener("abort", n);
  }
}
export { Q, e5, Ht, nt, eu };