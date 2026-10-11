// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { ta } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { se, R, Gr, sn, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function ze(action, handler, r = {}) {
  let {
      context = "Global",
      isActive = !0
    } = r,
    n = Ya(),
    [i] = g(() => ({
      handler: handler
    }));
  sn(() => {
    i.handler = handler;
  }), R(() => {
    if (!n || !isActive) return;
    return n.registerHandler({
      action: action,
      context: context,
      handler: () => i.handler(),
      singleKey: !0
    });
  }, [action, context, n, isActive, i]);
}
function Wt(handlers, o = {}) {
  let {
      context: context_2 = "Global",
      isActive: isActive_2 = !0
    } = o,
    s = Ya(),
    [n] = g(() => ({
      handlers: handlers
    })),
    i = Object.keys(handlers).sort().join("|");
  sn(() => {
    n.handlers = handlers;
  }), R(() => {
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
function K_(handler_2, {
  isActive: isActive_3 = !0
} = {}) {
  let r = Ya(),
    [t] = g(() => ({
      handler: handler_2
    }));
  sn(() => {
    t.handler = handler_2;
  }), R(() => {
    if (!isActive_3 || !r) return;
    return r.registerPreDispatch({
      handler: (s, n, i) => t.handler(s, n, i)
    });
  }, [isActive_3, r, t]);
}
N();
var a = 800;
function $j(e, o, r, t = a) {
  let s = Yt(),
    n = ta(),
    i = T(0),
    c = T(void 0),
    u = Gr(() => e(!1)),
    l = se(() => {
      if (c.current) c.current(), c.current = void 0;
    }, []);
  return R(() => () => {
    if (c.current) l(), u();
  }, [l]), se(() => {
    let d = n();
    if (d - i.current <= t && c.current !== void 0) l(), e(!1), o();else r?.(), e(!0), l(), c.current = s.setTimeout(() => {
      e(!1), c.current = void 0;
    }, t);
    i.current = d;
  }, [e, o, r, l, s, n, t]);
}
export { $j, ze, Wt, K_ };