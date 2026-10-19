// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { dn, xa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { ae, P, Mo, Jt, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function rt(action, handler, r = {}) {
  let {
      context = "Global",
      isActive = !0
    } = r,
    n = Zl(),
    [i] = y(() => ({
      handler: handler
    }));
  Jt(() => {
    i.handler = handler;
  }), P(() => {
    if (!n || !isActive) return;
    return n.registerHandler({
      action: action,
      context: context,
      handler: () => i.handler(),
      singleKey: !0
    });
  }, [action, context, n, isActive, i]);
}
function on(handlers, o = {}) {
  let {
      context: context_2 = "Global",
      isActive: isActive_2 = !0
    } = o,
    s = Zl(),
    [n] = y(() => ({
      handlers: handlers
    })),
    i = Object.keys(handlers).sort().join("|");
  Jt(() => {
    n.handlers = handlers;
  }), P(() => {
    if (!s || !isActive_2) return;
    let c = Object.keys(n.handlers).map(u => s.registerHandler({
      action: u,
      context: context_2,
      handler: () => n.handlers[u]?.(),
      singleKey: !0
    }));
    return () => {
      for (let u of c) u();
    };
  }, [context_2, i, s, isActive_2, n]);
}
function xg(handler_2, {
  isActive: isActive_3 = !0
} = {}) {
  let r = Zl(),
    [t] = y(() => ({
      handler: handler_2
    }));
  Jt(() => {
    t.handler = handler_2;
  }), P(() => {
    if (!isActive_3 || !r) return;
    return r.registerPreDispatch({
      handler: (s, n, i) => t.handler(s, n, i)
    });
  }, [isActive_3, r, t]);
}
B();
var a = 800;
function mY(e, o, r, t = a) {
  let s = dn(),
    n = xa(),
    i = A(0),
    c = A(void 0),
    u = Mo(() => e(!1)),
    l = ae(() => {
      if (c.current) c.current(), c.current = void 0;
    }, []);
  return P(() => () => {
    if (c.current) l(), u();
  }, [l]), ae(() => {
    let d = n();
    if (d - i.current <= t && c.current !== void 0) l(), e(!1), o();else r?.(), e(!0), l(), c.current = s.setTimeout(() => {
      e(!1), c.current = void 0;
    }, t);
    i.current = d;
  }, [e, o, r, l, s, n, t]);
}
export { rt, on, xg, mY };