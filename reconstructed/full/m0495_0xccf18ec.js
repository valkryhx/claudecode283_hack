// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j,
  Y
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  l,
  QI
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  gm,
  b,
  Vo,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  Qi
} from "B:/~BUN/root/chunk-mc8ranwc.js";
import {
  R9
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  UV
} from "B:/~BUN/root/chunk-na2t7g12.js";
import {
  Kt
} from "B:/~BUN/root/chunk-9fcn5kmc.js";

function gG(e) {
  let r = QI(e);
  return r === void 0 ? l(e) : `${l(e)} (${r})`
}

function POe(e) {
  return (r) => (t(`${e}: agent metadata sidecar unreadable, treating as absent: ${gG(r)}`), null)
}
import {
  promises as D
} from "fs";
import {
  dirname as B,
  join as L
} from "path";

function R(e, r) {
  let i = new Map,
    n = m(e, 0);
  if (e.charCodeAt(n) !== h) return;
  if (n = m(e, n + 1), e.charCodeAt(n) === f) return S(e, n + 1) ? i : void 0;
  for (;;) {
    if (e.charCodeAt(n) !== g) return;
    let o = y(e, n);
    if (o === -1) return;
    let a = e.slice(n + 1, o - 1);
    if (a.includes("\\")) try {
      let c = Vo(e.slice(n, o));
      if (typeof c !== "string") return;
      a = c
    } catch {
      return
    }
    if (n = m(e, o), e.charCodeAt(n) !== P) return;
    n = m(e, n + 1);
    let u = v(e, n);
    if (u === -1) return;
    if (r.has(a)) i.set(a, e.slice(n, u));
    n = m(e, u);
    let s = e.charCodeAt(n);
    if (s === x) {
      n = m(e, n + 1);
      continue
    }
    if (s === f) return S(e, n + 1) ? i : void 0;
    return
  }
}
var g = 34,
  F = 92,
  x = 44,
  P = 58,
  h = 123,
  f = 125,
  k = 91,
  C = 93;

function E(e) {
  return e === 32 || e === 9 || e === 10 || e === 13
}

function m(e, r) {
  while (E(e.charCodeAt(r))) r++;
  return r
}

function S(e, r) {
  return m(e, r) === e.length
}

function y(e, r) {
  let i = r;
  for (;;) {
    if (i = e.indexOf('"', i + 1), i === -1) return -1;
    let n = 0;
    while (e.charCodeAt(i - 1 - n) === F) n++;
    if ((n & 1) === 0) return i + 1
  }
}

function v(e, r) {
  let i = e.charCodeAt(r);
  if (i === g) return y(e, r);
  if (i === h || i === k) return I(e, r);
  let n = r;
  while (n < e.length) {
    let o = e.charCodeAt(n);
    if (o === x || o === f || o === C || E(o)) break;
    n++
  }
  return n === r ? -1 : n
}

function I(e, r) {
  let i = 0,
    n = r;
  while (n < e.length) {
    let o = e.charCodeAt(n);
    if (o === g) {
      if (n = y(e, n), n === -1) return -1;
      continue
    }
    if (o === h || o === k) i++;
    else if (o === f || o === C) {
      if (i--, i === 0) return n + 1
    }
    n++
  }
  return -1
}
var _ = new Set(["model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata"]),
  O = new Set([..._, "thread"]),
  M = / cc_(?:prev_req|prompt_id|turn_origin|workload)=[^;"\\]*;/g,
  U = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g,
  K = 5;
class w {
  recording = !0
}
var z = new q(() => new w);

function N() {
  return z.of(j().host).recording
}

function aro(e) {
  Qi().dumpPrompts.stateByAgent.delete(e)
}

function lro() {
  Qi().dumpPrompts.stateByAgent.clear()
}

function Q(e) {
  return
}

function W(e) {
  return L(Se(), "dump-prompts", `${e??Y()}.jsonl`)
}

function G(e, r, i) {
  Qi().dumpPrompts.appendQueue.run(e, async () => {
    if (i) {
      await i.storageV5.append(i.key, [{
        data: r + `
`
      }]);
      return
    }
    await D.mkdir(B(e), {
      recursive: !0
    }), await D.appendFile(e, r + `
`)
  }).catch(() => {})
}

function V(e, r, i, n, o) {
  try {
    return
  } catch {} finally {
    i.dumpInFlight = !1
  }
}

function cro(e, r) {
  if (!N()) return R9;
  let i = W(e),
    n = H() && r !== void 0 ? {
      storageV5: r,
      key: Ae.log(e, "apiDump")
    } : void 0;
  return async (o, a) => {
    let u = Qi().dumpPrompts.stateByAgent,
      s = u.get(e) ?? {
        initialized: !1,
        lastInitDataHash: "",
        dumpInFlight: !1
      };
    if (u.set(e, s), a?.method === "POST" && a.body && !s.dumpInFlight) {
      s.dumpInFlight = !0;
      let c = new Date().toISOString();
      setImmediate(V, a.body, c, s, i, n)
    }
    return R9(o, a)
  }
}

function J(e) {
  let r = e.get("thread");
  if (r === void 0) return !1;
  let i = Vo(r);
  if (typeof i !== "object" || i === null || !("type" in i) || i.type !== "continue") return !1;
  if (!e.has("tools")) return !0;
  let n = Vo(e.get("system") ?? "null");
  return Array.isArray(n) && n.length > 0 && n.every((o) => UV(o))
}
export {
  gG,
  POe,
  aro,
  lro,
  cro
};
