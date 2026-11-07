// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, oi, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { Qq } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { MK } from "B:/~BUN/root/chunk-s12bzehs.js";
import { o, C, u, Be, me, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { hostname } from "os";
import { dirname as x, join as D } from "path";
var version = 1,
  g = "device-mcp-snapshot",
  xDo = 8,
  z = 128;
function PDo(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var M = p(() => u({
  version: T(version),
  hostname: o(),
  servers: me(o(), Be([me(o(), o()), T("declined")])),
  withheld: me(o(), u({
    added: C(o()),
    changed: C(o())
  }))
}));
function O(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return nt(oi({
    name: e.name,
    description: e.description,
    inputSchema: e.inputSchema,
    searchHint: r[Qq.searchHint]
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
  return e.slice(0, xDo).map(item => item.slice(0, z));
}
function ODo(e, r) {
  if (r === void 0) return e;
  return {
    servers: {
      ...r.servers,
      ...e.servers
    },
    withheld: e.withheld
  };
}
function O4s(e, r) {
  let withheld = new Map(),
    servers = {
      ...r.servers
    },
    s = !1;
  for (let [a, y] of e) {
    let f = b(y),
      l = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (l === void 0) {
      servers[a] = f, s = !0;
      continue;
    }
    let S = j(f, l);
    if (S !== void 0) withheld.set(a, S);
  }
  let withheld_2 = Object.fromEntries([...withheld].filter(([, a]) => PDo(a)));
  return {
    withheld: withheld,
    next: {
      servers: servers,
      withheld: withheld_2
    },
    changed: s || oi(withheld_2) !== oi(r.withheld)
  };
}
function a4n(e, r, i) {
  let servers_2 = {
    ...e.servers
  };
  for (let s of r) if (i === "accepted") delete servers_2[s];else servers_2[s] = "declined";
  return {
    servers: servers_2,
    withheld: {}
  };
}
async function aPe(e) {
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
    let n = M().safeParse(ee(i));
    return n.success && MK(n.data.hostname) === MK(e.hostname()) ? {
      servers: n.data.servers,
      withheld: n.data.withheld
    } : r;
  } catch {
    return r;
  }
}
async function mkt(e, r) {
  try {
    return await r.writeText(_({
      version: version,
      hostname: MK(r.hostname()),
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
function h() {
  return D(Ue(), "state", `${g}.json`);
}
function I4s() {
  return `delete ${ks(h())} to reset every server's baseline`;
}
function lPe(e) {
  let r = X() && e !== void 0 ? e : void 0,
    i = Ve.state(g);
  return {
    readText: async () => {
      if (r) {
        let n = await r.readText([i]);
        if (!n.ok) throw Error("device-mcp snapshot read failed");
        let s = n.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await Dn().read(h());
      } catch (error) {
        if (K(error)) return;
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
      let s = h();
      await Dn().mkdir(x(s), 448), await Dn().atomicWrite(s, n, 384);
    },
    hostname: hostname
  };
}
export { xDo, PDo, ODo, O4s, a4n, aPe, mkt, I4s, lPe };