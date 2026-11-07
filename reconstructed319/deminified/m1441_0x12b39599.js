// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ln } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ZL } from "B:/~BUN/root/chunk-smrt7z22.js";
import { c2, Q0 } from "B:/~BUN/root/chunk-27h4st9h.js";
import { tp } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
function f(i, r) {
  if (Object.hasOwn(i, r)) return i[r];
  return Object.values(i).find(item => tp(item) && item.identity.resumableAgentId === r);
}
function Utr(i, r) {
  return new Map([...i].filter(([, s]) => {
    let e = f(r, s);
    if (e === void 0) return !1;
    if (!Ko(e.status)) return !0;
    return Q0(e) && "keepaliveReasons" in e && e.keepaliveReasons !== void 0 && [...e.keepaliveReasons].some(item => item !== c2);
  }));
}
var ZCt = {
  registerName() {},
  allocateName(i) {
    return i;
  },
  nameOf() {
    return;
  },
  clearTodos() {},
  setTeammate() {},
  setSendMessagePin() {}
};
function wdi(i, r) {
  return {
    registerName(s, e) {
      if (ZL(s)) {
        t(`[registerName] refused reserved or agent-id-shaped name "${s}" for ${e}`);
        return;
      }
      r(n => {
        if (n.agentNameRegistry.get(s) === e) return n;
        let agentNameRegistry = new Map(n.agentNameRegistry);
        return agentNameRegistry.set(s, e), {
          ...n,
          agentNameRegistry: agentNameRegistry
        };
      });
    },
    allocateName(s) {
      let e = u(s),
        n = i(),
        agentNameRegistry_2 = n.agentNameRegistry,
        g = new Set(Object.values(n.teamContext?.teammates ?? {}).map(item => item.name));
      for (let o = 1;; o++) {
        let m = o === 1 ? e : `${e}-${o}`;
        if (ZL(m) || g.has(m)) continue;
        let d = agentNameRegistry_2.get(m);
        if (d === void 0 || f(n.tasks, d) === void 0) return m;
      }
    },
    nameOf(s) {
      for (let [e, n] of i().agentNameRegistry) if (n === s) return e;
      return;
    },
    clearTodos(s) {
      r(e => {
        if (!(s in e.todos)) return e;
        let {
          [s]: n,
          ...todos
        } = e.todos;
        return {
          ...e,
          todos: todos
        };
      });
    },
    setSendMessagePin(s, e) {
      r(n => {
        let a = Object.hasOwn(n.sendMessagePins, s) ? n.sendMessagePins[s] : void 0;
        if (ln(a, e)) return n;
        return {
          ...n,
          sendMessagePins: {
            ...n.sendMessagePins,
            [s]: e
          }
        };
      });
    },
    setTeammate(s, e) {
      if (e !== void 0 && ZL(e.name)) {
        t(`[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${s}`);
        return;
      }
      r(n => {
        let teamContext = n.teamContext;
        if (!teamContext) return n;
        let g = teamContext.teammates?.[s];
        if (e === void 0) {
          if (!g) return n;
          let {
            [s]: o,
            ...teammates
          } = teamContext.teammates;
          return {
            ...n,
            teamContext: {
              ...teamContext,
              teammates: teammates
            }
          };
        }
        if (g === e) return n;
        return {
          ...n,
          teamContext: {
            ...teamContext,
            teammates: {
              ...teamContext.teammates,
              [s]: e
            }
          }
        };
      });
    }
  };
}
function u(i) {
  let r = i.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+/, "").slice(0, 64);
  return r.length > 0 ? r : "agent";
}
export { Utr, ZCt, wdi };