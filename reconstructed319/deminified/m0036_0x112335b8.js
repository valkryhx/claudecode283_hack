// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function Cy({
  attempt: attempt,
  baseMs: baseMs,
  capMs = 1 / 0,
  factor = 2,
  jitter = {
    kind: "none"
  },
  random = Math.random
}) {
  let i = Math.min(capMs, baseMs * factor ** (attempt - 1));
  switch (jitter.kind) {
    case "none":
      return i;
    case "proportional":
      return i + random() * jitter.ratio * i;
    case "symmetric":
      return Math.max(0, i + i * jitter.ratio * (2 * random() - 1));
    case "full":
      {
        let a = Math.min(jitter.floorMs, i);
        return a + random() * (i - a);
      }
  }
}
class WIo {
  now() {
    return Date.now();
  }
  monotonicNow() {
    return performance.now();
  }
  setTimeout(t, r, e) {
    let o = setTimeout(t, r);
    if (e?.unref) o.unref();
    return () => clearTimeout(o);
  }
}
var ga = new WIo();
function J(t, r, e) {
  return new Promise((o, n) => {
    if (r?.aborted) {
      if (e?.throwOnAbort || e?.abortError) n(e.abortError?.() ?? Error("aborted"));else o();
      return;
    }
    let m = (e?.clock ?? ga).setTimeout(() => {
      r?.removeEventListener("abort", i), o();
    }, t, {
      unref: e?.unref
    });
    function i() {
      if (m(), e?.throwOnAbort || e?.abortError) n(e.abortError?.() ?? Error("aborted"));else o();
    }
    r?.addEventListener("abort", i, {
      once: !0
    });
  });
}
var u = 60000;
function P0({
  baseMs: baseMs_2,
  capMs: capMs_2 = u,
  attempt: attempt_2,
  floorMs = 0,
  random: random_2 = Math.random
}) {
  return Math.floor(Cy({
    attempt: Math.max(0, attempt_2) + 1,
    baseMs: baseMs_2,
    capMs: capMs_2,
    jitter: {
      kind: "full",
      floorMs: floorMs
    },
    random: random_2
  }));
}
function c(t, r) {
  t(Error(r));
}
function zt(t, r, e) {
  let o,
    promise = new Promise((m, i) => {
      o = setTimeout(c, r, i, e);
    });
  return Promise.race([t, promise]).finally(() => {
    if (o !== void 0) clearTimeout(o);
  });
}
var zIo = (t, r) => {
  let e = setTimeout(t, r);
  return () => clearTimeout(e);
};
function we(t, r, e = zIo) {
  let o = () => {},
    promise_2 = new Promise(m => {
      o = e(() => m(void 0), r);
    });
  return Promise.race([t, promise_2]).finally(o);
}
async function Ao(t, r, e) {
  let o = () => {
    t.catch(() => {});
  };
  if (r.aborted) throw o(), e();
  let n = () => {};
  try {
    return await Promise.race([t, new Promise((m, i) => {
      n = () => i(e()), r.addEventListener("abort", n, {
        once: !0
      });
    })]);
  } catch (error) {
    throw o(), error;
  } finally {
    r.removeEventListener("abort", n);
  }
}
export { Cy, WIo, ga, J, P0, zt, zIo, we, Ao };