// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Sre,
  KK,
  A8e
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  zh
} from "B:/~BUN/root/chunk-cxcakgnv.js";

function s(i, r, d) {
  let {
    plugin: n
  } = i, e = n !== void 0 && Sre();
  if (e) zh(() => A8e(n));
  if (e && !i.recurring) KK(r, void 0, i.agentId ? "stays" : d);
  return e
}
var XBr = (i) => (r, d) => {
    let n = () => {
        if (d !== void 0) zh(d)
      },
      e = () => {
        if (s(r, e, n)) return;
        i(r, n)
      },
      o = s(r, e, n);
    if (!o) i(r, () => {});
    return o && !r.recurring
  },
  JBr = (i) => (r, d) => {
    let n = new Map;
    return r.forEach((e) => {
      n.set(e.plugin, [...n.get(e.plugin) ?? [], e])
    }), [...n].flatMap(([e, o]) => {
      let l = e === void 0 ? {} : {
          plugin: e
        },
        t = () => zh(() => d(o)),
        u = () => {
          if (s(l, u, t)) return;
          i(o, e, t)
        },
        a = s(l, u, t),
        f = !1,
        g = !1;
      if (!a) i(o, e, () => {
        if (f = !0, g) t()
      });
      return g = !0, a || !f ? o.map((c) => c.id) : []
    })
  };
export {
  XBr,
  JBr
};
