// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { b, fa, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { iL } from "B:/~BUN/root/chunk-myd8edm1.js";
import { aW } from "B:/~BUN/root/chunk-b8z99tfd.js";
import { o, C, u, $e, fe, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { hostname } from "os";
import { dirname as x, join as D } from "path";
var version = 1,
  g = "device-mcp-snapshot",
  TXn = 8,
  T = 128;
function CXn(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var z = f(() => u({
  version: A(version),
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
  }));
}
function O(e) {
  return Object.fromEntries(e.map(item => [item.name, M(item)]));
}
function _(e, r) {
  if (r === "declined") return {
    added: [],
    changed: []
  };
  let i = Object.keys(e).filter(item => !Object.hasOwn(r, item)),
    n = Object.keys(e).filter(item => Object.hasOwn(r, item) && r[item] !== e[item]);
  if (i.length === 0 && n.length === 0) return;
  return {
    added: m(i),
    changed: m(n)
  };
}
function m(e) {
  return e.slice(0, TXn).map(item => item.slice(0, T));
}
function RXn(e, r) {
  if (r === void 0) return e;
  return {
    servers: {
      ...r.servers,
      ...e.servers
    },
    withheld: e.withheld
  };
}
function N4r(e, r) {
  let withheld = new Map(),
    servers = {
      ...r.servers
    },
    s = !1;
  for (let [a, y] of e) {
    let p = O(y),
      h = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (h === void 0) {
      servers[a] = p, s = !0;
      continue;
    }
    let S = _(p, h);
    if (S !== void 0) withheld.set(a, S);
  }
  let withheld_2 = Object.fromEntries([...withheld].filter(([, a]) => CXn(a)));
  return {
    withheld: withheld,
    next: {
      servers: servers,
      withheld: withheld_2
    },
    changed: s || fa(withheld_2) !== fa(r.withheld)
  };
}
function yWt(e, r, i) {
  let servers_2 = {
    ...e.servers
  };
  for (let s of r) if (i === "accepted") delete servers_2[s];else servers_2[s] = "declined";
  return {
    servers: servers_2,
    withheld: {}
  };
}
async function Cre(e) {
  let r = {
      servers: {},
      withheld: {}
    },
    i;
  try {
    i = await e.readText();
  } catch (error) {
    return t(`device-mcp snapshot: store unreadable (${l(error)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (i === void 0) return r;
  try {
    let n = z().safeParse(J(i));
    return n.success && aW(n.data.hostname) === aW(e.hostname()) ? {
      servers: n.data.servers,
      withheld: n.data.withheld
    } : r;
  } catch {
    return r;
  }
}
async function JBe(e, r) {
  try {
    return await r.writeText(b({
      version: version,
      hostname: aW(r.hostname()),
      servers: e.servers,
      withheld: e.withheld
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`device-mcp snapshot: not saved (${l(error)})`, {
      level: "warn"
    }), !1;
  }
}
function c() {
  return D(Se(), "state", `${g}.json`);
}
function H4r() {
  return `delete ${xa(c())} to reset every server's baseline`;
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
        return s.found ? s.value : void 0;
      }
      try {
        return await Qt().read(c());
      } catch (error) {
        if (B(error)) return;
        throw error;
      }
    },
    writeText: async n => {
      if (r) {
        if (!(await r.write(i, n, {
          mode: 384
        })).ok) throw Error("device-mcp snapshot write failed");
        return;
      }
      let s = c();
      await Qt().mkdir(x(s), 448), await Qt().atomicWrite(s, n, 384);
    },
    hostname: hostname
  };
}
export { TXn, CXn, RXn, N4r, yWt, Cre, JBe, H4r, Rre };