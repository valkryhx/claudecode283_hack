// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
async function Y_(n, y, {
  concurrency = Number.POSITIVE_INFINITY,
  stopOnError = !0,
  signal: signal
} = {}) {
  return new Promise((N, T) => {
    if (n[Symbol.iterator] === void 0 && n[Symbol.asyncIterator] === void 0) throw TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof n})`);
    if (typeof y !== "function") throw TypeError("Mapper function is required");
    if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) throw TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
    let I = [],
      p = [],
      d = new Map(),
      w = !1,
      f = !1,
      m = !1,
      u = 0,
      b = 0,
      g = n[Symbol.iterator] === void 0 ? n[Symbol.asyncIterator]() : n[Symbol.iterator](),
      h = () => {
        a(signal.reason);
      },
      S = () => {
        signal?.removeEventListener("abort", h);
      },
      x = e => {
        N(e), S();
      },
      a = e => {
        w = !0, f = !0, T(e), S();
      };
    if (signal) {
      if (signal.aborted) a(signal.reason);
      signal.addEventListener("abort", h, {
        once: !0
      });
    }
    let l = async () => {
      if (f) return;
      let e = await g.next(),
        s = b;
      if (b++, e.done) {
        if (m = !0, u === 0 && !f) {
          if (!stopOnError && p.length > 0) {
            a(AggregateError(p));
            return;
          }
          if (f = !0, d.size === 0) {
            x(I);
            return;
          }
          let t = [];
          for (let [r, v] of I.entries()) {
            if (d.get(r) === E) continue;
            t.push(v);
          }
          x(t);
        }
        return;
      }
      u++, (async () => {
        try {
          let t = await e.value;
          if (f) return;
          let r = await y(t, s);
          if (r === E) d.set(s, r);
          I[s] = r, u--, await l();
        } catch (error) {
          if (stopOnError) a(error);else {
            p.push(error), u--;
            try {
              await l();
            } catch (error) {
              a(error);
            }
          }
        }
      })();
    };
    (async () => {
      for (let e = 0; e < concurrency; e++) {
        try {
          await l();
        } catch (error) {
          a(error);
          break;
        }
        if (m || w) break;
      }
    })();
  });
}
var E = Symbol("skip");
export { Y_ };