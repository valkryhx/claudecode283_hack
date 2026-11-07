// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Sre, KK, A8e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { zh } from "B:/~BUN/root/chunk-cxcakgnv.js";
function s(i, r, d) {
  let {
      plugin: plugin
    } = i,
    e = plugin !== void 0 && Sre();
  if (e) zh(() => A8e(plugin));
  if (e && !i.recurring) KK(r, void 0, i.agentId ? "stays" : d);
  return e;
}
var XBr = i => (r, d) => {
    let n = () => {
        if (d !== void 0) zh(d);
      },
      e = () => {
        if (s(r, e, n)) return;
        i(r, n);
      },
      o = s(r, e, n);
    if (!o) i(r, () => {});
    return o && !r.recurring;
  },
  JBr = i => (r, d) => {
    let n = new Map();
    return r.forEach(item => {
      n.set(item.plugin, [...(n.get(item.plugin) ?? []), item]);
    }), [...n].flatMap(([plugin_2, o]) => {
      let l = plugin_2 === void 0 ? {} : {
          plugin: plugin_2
        },
        t = () => zh(() => d(o)),
        u = () => {
          if (s(l, u, t)) return;
          i(o, plugin_2, t);
        },
        a = s(l, u, t),
        f = !1,
        g = !1;
      if (!a) i(o, plugin_2, () => {
        if (f = !0, g) t();
      });
      return g = !0, a || !f ? o.map(item => item.id) : [];
    });
  };
export { XBr, JBr };