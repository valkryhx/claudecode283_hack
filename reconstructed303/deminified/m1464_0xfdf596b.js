// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { _, Bi, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { h1 } from "B:/~BUN/root/chunk-sajqdp4j.js";
import { LY } from "B:/~BUN/root/chunk-bz422xf8.js";
import { o, T, u, $e, fe, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { hostname } from "os";
import { dirname as x, join as D } from "path";
var version = 1,
  g = "device-mcp-snapshot",
  Mzr = 8,
  z = 128;
function Dzr(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var M = f(() => u({
  version: C(version),
  hostname: o(),
  servers: fe(o(), $e([fe(o(), o()), C("declined")])),
  withheld: fe(o(), u({
    added: T(o()),
    changed: T(o())
  }))
}));
function O(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return st(Bi({
    name: e.name,
    description: e.description,
    inputSchema: e.inputSchema,
    searchHint: r[h1.searchHint]
  }));
}
function b(e) {
  return Object.fromEntries(e.map(item => [item.name, O(item)]));
}
function j(e, r) {
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
  return e.slice(0, Mzr).map(item => item.slice(0, z));
}
function Lzr(e, r) {
  if (r === void 0) return e;
  return {
    servers: {
      ...r.servers,
      ...e.servers
    },
    withheld: e.withheld
  };
}
function HKo(e, r) {
  let withheld = new Map(),
    servers = {
      ...r.servers
    },
    s = !1;
  for (let [a, y] of e) {
    let h = b(y),
      l = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (l === void 0) {
      servers[a] = h, s = !0;
      continue;
    }
    let S = j(h, l);
    if (S !== void 0) withheld.set(a, S);
  }
  let withheld_2 = Object.fromEntries([...withheld].filter(([, a]) => Dzr(a)));
  return {
    withheld: withheld,
    next: {
      servers: servers,
      withheld: withheld_2
    },
    changed: s || Bi(withheld_2) !== Bi(r.withheld)
  };
}
function uyn(e, r, i) {
  let servers_2 = {
    ...e.servers
  };
  for (let s of r) if (i === "accepted") delete servers_2[s];else servers_2[s] = "declined";
  return {
    servers: servers_2,
    withheld: {}
  };
}
async function Tye(e) {
  let r = {
      servers: {},
      withheld: {}
    },
    i;
  try {
    i = await e.readText();
  } catch (error) {
    return t(`device-mcp snapshot: store unreadable (${d(error)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (i === void 0) return r;
  try {
    let n = M().safeParse(J(i));
    return n.success && LY(n.data.hostname) === LY(e.hostname()) ? {
      servers: n.data.servers,
      withheld: n.data.withheld
    } : r;
  } catch {
    return r;
  }
}
async function Fet(e, r) {
  try {
    return await r.writeText(_({
      version: version,
      hostname: LY(r.hostname()),
      servers: e.servers,
      withheld: e.withheld
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`device-mcp snapshot: not saved (${d(error)})`, {
      level: "warn"
    }), !1;
  }
}
function p() {
  return D(Pe(), "state", `${g}.json`);
}
function $Ko() {
  return `delete ${Es(p())} to reset every server's baseline`;
}
function Cye(e) {
  let r = W() && e !== void 0 ? e : void 0,
    i = Be.state(g);
  return {
    readText: async () => {
      if (r) {
        let n = await r.readText([i]);
        if (!n.ok) throw Error("device-mcp snapshot read failed");
        let s = n.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await gn().read(p());
      } catch (error) {
        if (G(error)) return;
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
      let s = p();
      await gn().mkdir(x(s), 448), await gn().atomicWrite(s, n, 384);
    },
    hostname: hostname
  };
}
export { Mzr, Dzr, Lzr, HKo, uyn, Tye, Fet, $Ko, Cye };