// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { KPe } from "B:/~BUN/root/chunk-emd6eb45.js";
import { vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { Rn, Qi } from "B:/~BUN/root/chunk-qey16aan.js";
import { ue, O, qo, Zt, A, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function pt(action, handler, n = {}) {
  let {
      context = "Global",
      isActive = !0
    } = n,
    s = vd(),
    [i] = y(() => ({
      handler: handler
    }));
  Zt(() => {
    i.handler = handler;
  }), O(() => {
    if (!s || !isActive) return;
    return s.registerHandler({
      action: action,
      context: context,
      handler: () => i.handler(),
      singleKey: !0
    });
  }, [action, context, s, isActive, i]);
}
function Sn(handlers, t = {}) {
  let {
      context: context_2 = "Global",
      isActive: isActive_2 = !0
    } = t,
    o = vd(),
    [s] = y(() => ({
      handlers: handlers
    })),
    i = Object.keys(handlers).sort().join("|");
  Zt(() => {
    s.handlers = handlers;
  }), O(() => {
    if (!o || !isActive_2) return;
    let c = Object.keys(s.handlers).map(u => o.registerHandler({
      action: u,
      context: context_2,
      handler: () => s.handlers[u]?.(),
      singleKey: !0
    }));
    return () => {
      for (let u of c) u();
    };
  }, [context_2, i, o, isActive_2, s]);
}
function o$o(e) {
  let t = vd(),
    n = At(t?.keyHandlerRegistry.handlersChanged.subscribe ?? KPe, () => t?.hasHandler(e) ?? !1);
  return t !== null && n ? () => t.runAction(e) : null;
}
function Mm(handler_2, {
  isActive: isActive_3 = !0
} = {}) {
  let n = vd(),
    [r] = y(() => ({
      handler: handler_2
    }));
  Zt(() => {
    r.handler = handler_2;
  }), O(() => {
    if (!isActive_3 || !n) return;
    return n.registerPreDispatch({
      handler: (o, s, i) => r.handler(o, s, i)
    });
  }, [isActive_3, n, r]);
}
j();
var a = 800;
function G7(e, t, n, r = a) {
  let o = Rn(),
    s = Qi(),
    i = A(0),
    c = A(void 0),
    u = qo(() => e(!1)),
    l = ue(() => {
      if (c.current) c.current(), c.current = void 0;
    }, []);
  return O(() => () => {
    if (c.current) l(), u();
  }, [l]), ue(() => {
    let d = s();
    if (d - i.current <= r && c.current !== void 0) l(), e(!1), t();else n?.(), e(!0), l(), c.current = o.setTimeout(() => {
      e(!1), c.current = void 0;
    }, r);
    i.current = d;
  }, [e, t, n, l, o, s, r]);
}
export { pt, Sn, o$o, Mm, G7 };