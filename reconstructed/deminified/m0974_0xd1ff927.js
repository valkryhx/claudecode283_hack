// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { So } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { II } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { Y4, PT } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Qu } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { ui } from "B:/~BUN/root/chunk-3qp6kts8.js";
function f(r, i) {
  if (Object.hasOwn(r, i)) return r[i];
  return Object.values(r).find(item => Qu(item) && item.identity.resumableAgentId === i);
}
function A4t(r, i) {
  return new Map([...r].filter(([, n]) => {
    let e = f(i, n);
    if (e === void 0) return !1;
    if (!ui(e.status)) return !0;
    return PT(e) && "keepaliveReasons" in e && e.keepaliveReasons !== void 0 && [...e.keepaliveReasons].some(item => item !== Y4);
  }));
}
var UWe = {
  markTypeInvoked() {},
  registerName() {},
  allocateName(r) {
    return r;
  },
  nameOf() {
    return;
  },
  clearTodos() {},
  setTeammate() {},
  setSendMessagePin() {}
};
function XZr(r, i) {
  return {
    markTypeInvoked(n) {
      i(e => e.agentTypesInvokedThisSession.has(n) ? e : {
        ...e,
        agentTypesInvokedThisSession: new Set(e.agentTypesInvokedThisSession).add(n)
      });
    },
    registerName(n, e) {
      if (II(n)) {
        t(`[registerName] refused reserved or agent-id-shaped name "${n}" for ${e}`);
        return;
      }
      i(s => {
        if (s.agentNameRegistry.get(n) === e) return s;
        let agentNameRegistry = new Map(s.agentNameRegistry);
        return agentNameRegistry.set(n, e), {
          ...s,
          agentNameRegistry: agentNameRegistry
        };
      });
    },
    allocateName(n) {
      let e = u(n),
        s = r(),
        agentNameRegistry_2 = s.agentNameRegistry,
        g = new Set(Object.values(s.teamContext?.teammates ?? {}).map(item => item.name));
      for (let o = 1;; o++) {
        let m = o === 1 ? e : `${e}-${o}`;
        if (II(m) || g.has(m)) continue;
        let d = agentNameRegistry_2.get(m);
        if (d === void 0 || f(s.tasks, d) === void 0) return m;
      }
    },
    nameOf(n) {
      for (let [e, s] of r().agentNameRegistry) if (s === n) return e;
      return;
    },
    clearTodos(n) {
      i(e => {
        if (!(n in e.todos)) return e;
        let {
          [n]: s,
          ...todos
        } = e.todos;
        return {
          ...e,
          todos: todos
        };
      });
    },
    setSendMessagePin(n, e) {
      i(s => {
        let a = Object.hasOwn(s.sendMessagePins, n) ? s.sendMessagePins[n] : void 0;
        if (So(a, e)) return s;
        return {
          ...s,
          sendMessagePins: {
            ...s.sendMessagePins,
            [n]: e
          }
        };
      });
    },
    setTeammate(n, e) {
      if (e !== void 0 && II(e.name)) {
        t(`[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${n}`);
        return;
      }
      i(s => {
        let teamContext = s.teamContext;
        if (!teamContext) return s;
        let g = teamContext.teammates?.[n];
        if (e === void 0) {
          if (!g) return s;
          let {
            [n]: o,
            ...teammates
          } = teamContext.teammates;
          return {
            ...s,
            teamContext: {
              ...teamContext,
              teammates: teammates
            }
          };
        }
        if (g === e) return s;
        return {
          ...s,
          teamContext: {
            ...teamContext,
            teammates: {
              ...teamContext.teammates,
              [n]: e
            }
          }
        };
      });
    }
  };
}
function u(r) {
  let i = r.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+/, "").slice(0, 64);
  return i.length > 0 ? i : "agent";
}
export { A4t, UWe, XZr };