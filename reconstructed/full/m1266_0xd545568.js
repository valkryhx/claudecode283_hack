// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  b,
  fa,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  xa
} from "B:/~BUN/root/chunk-qqgpf856.js";
import {
  iL
} from "B:/~BUN/root/chunk-myd8edm1.js";
import {
  aW
} from "B:/~BUN/root/chunk-b8z99tfd.js";
import {
  o,
  C,
  u,
  $e,
  fe,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  Kt
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  hostname as w
} from "os";
import {
  dirname as x,
  join as D
} from "path";
var v = 1,
  g = "device-mcp-snapshot",
  TXn = 8,
  T = 128;

function CXn(e) {
  return e.added.length > 0 || e.changed.length > 0
}
var z = f(() => u({
  version: A(v),
  hostname: o(),
  servers: fe(o(), $e([fe(o(), o()), A("declined")])),
  withheld: fe(o(), u({
    added: C(o()),
    changed: C(o())
  }))
}));

function M(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return Kt(fa({
    name: e.name,
    description: e.description,
    inputSchema: e.inputSchema,
    searchHint: r[iL.searchHint]
  }))
}

function O(e) {
  return Object.fromEntries(e.map((r) => [r.name, M(r)]))
}

function _(e, r) {
  if (r === "declined") return {
    added: [],
    changed: []
  };
  let i = Object.keys(e).filter((s) => !Object.hasOwn(r, s)),
    n = Object.keys(e).filter((s) => Object.hasOwn(r, s) && r[s] !== e[s]);
  if (i.length === 0 && n.length === 0) return;
  return {
    added: m(i),
    changed: m(n)
  }
}

function m(e) {
  return e.slice(0, TXn).map((r) => r.slice(0, T))
}

function RXn(e, r) {
  if (r === void 0) return e;
  return {
    servers: {
      ...r.servers,
      ...e.servers
    },
    withheld: e.withheld
  }
}

function N4r(e, r) {
  let i = new Map,
    n = {
      ...r.servers
    },
    s = !1;
  for (let [a, y] of e) {
    let p = O(y),
      h = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (h === void 0) {
      n[a] = p, s = !0;
      continue
    }
    let S = _(p, h);
    if (S !== void 0) i.set(a, S)
  }
  let d = Object.fromEntries([...i].filter(([, a]) => CXn(a)));
  return {
    withheld: i,
    next: {
      servers: n,
      withheld: d
    },
    changed: s || fa(d) !== fa(r.withheld)
  }
}

function yWt(e, r, i) {
  let n = {
    ...e.servers
  };
  for (let s of r)
    if (i === "accepted") delete n[s];
    else n[s] = "declined";
  return {
    servers: n,
    withheld: {}
  }
}
async function Cre(e) {
  let r = {
      servers: {},
      withheld: {}
    },
    i;
  try {
    i = await e.readText()
  } catch (n) {
    return t(`device-mcp snapshot: store unreadable (${l(n)})`, {
      level: "warn"
    }), "unreadable"
  }
  if (i === void 0) return r;
  try {
    let n = z().safeParse(J(i));
    return n.success && aW(n.data.hostname) === aW(e.hostname()) ? {
      servers: n.data.servers,
      withheld: n.data.withheld
    } : r
  } catch {
    return r
  }
}
async function JBe(e, r) {
  try {
    return await r.writeText(b({
      version: v,
      hostname: aW(r.hostname()),
      servers: e.servers,
      withheld: e.withheld
    }, null, 2) + `
`), !0
  } catch (i) {
    return t(`device-mcp snapshot: not saved (${l(i)})`, {
      level: "warn"
    }), !1
  }
}

function c() {
  return D(Se(), "state", `${g}.json`)
}

function H4r() {
  return `delete ${xa(c())} to reset every server's baseline`
}

function Rre(e) {
  let r = H() && e !== void 0 ? e : void 0,
    i = Ae.state(g);
  return {
    readText: async () => {
      if (r) {
        let n = await r.readText([i]);
        if (!n.ok) throw Error("device-mcp snapshot read failed");
        let s = n.value.items[0];
        return s.found ? s.value : void 0
      }
      try {
        return await Qt().read(c())
      } catch (n) {
        if (B(n)) return;
        throw n
      }
    },
    writeText: async (n) => {
      if (r) {
        if (!(await r.write(i, n, {
            mode: 384
          })).ok) throw Error("device-mcp snapshot write failed");
        return
      }
      let s = c();
      await Qt().mkdir(x(s), 448), await Qt().atomicWrite(s, n, 384)
    },
    hostname: w
  }
}
export {
  TXn,
  CXn,
  RXn,
  N4r,
  yWt,
  Cre,
  JBe,
  H4r,
  Rre
};
