// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Oi, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { dS, HNr } from "B:/~BUN/root/chunk-44q965xg.js";
import { wP } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { H, Po } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { BSt } from "B:/~BUN/root/chunk-dzqsqewb.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { randomUUID as we } from "crypto";
var v1t = 200,
  xHe = 128;
function uUs(e) {
  if (e.length <= v1t) return !1;
  let n = 0;
  for (let r of e) if (n++, n > v1t) return !0;
  return !1;
}
function CNr(e) {
  return typeof e === "string" && uUs(e) ? Oi(e, v1t) : void 0;
}
function GZi(e) {
  if (!Array.isArray(e)) return e;
  let n;
  return e.forEach((item, index) => {
    if (!j(item) || item.type !== "tool_use") return;
    let name = CNr(item.name);
    if (name === void 0) return;
    n ??= e.slice(), n[index] = {
      ...item,
      name: name
    };
  }), n === void 0 ? e : n;
}
function j(e) {
  return typeof e === "object" && e !== null;
}
var TGn = /^mem_[A-Za-z0-9_-]{1,120}$/;
function X(e) {
  let n = BigInt(58),
    r = Array(22).fill("1"),
    t = 21,
    o = e;
  while (o > 0n) {
    let i = Number(o % n);
    r[t] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[i], o = o / n, t--;
  }
  return r.join("");
}
function Y(e) {
  let n = e.replaceAll("-", "");
  if (n.length !== 32) throw Error(`Invalid UUID hex length: ${n.length}`);
  return BigInt("0x" + n);
}
function RNr(e, n) {
  try {
    let r = Y(n);
    return `${e}_01${X(r)}`;
  } catch {
    return;
  }
}
function V(e) {
  if (e.length !== 22) return;
  let n = BigInt(58),
    r = 0n;
  for (let t of e) {
    let o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(t);
    if (o < 0) return;
    r = r * n + BigInt(o);
  }
  return r;
}
function SC(e) {
  let n = e.lastIndexOf("_");
  if (n < 0) return;
  let r = e.slice(n + 1);
  if (!r.startsWith("01")) return;
  let t = V(r.slice(2));
  if (t === void 0) return;
  let o = t.toString(16).padStart(32, "0");
  if (o.length !== 32) return;
  return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20, 32)}`;
}
import { isIPv6 as Z } from "net";
var q = 54,
  Q = 253,
  J = 21,
  ee = 32,
  ne = 8,
  re = "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
  te = new Set(["001d7d58914b066125876ce23d2d6d112d8289118e9a57f569a430c38d8faa3c", "058c32f177ce90792b36d516790f6443d632f83c6119d72ef32b1a815be6ee87", "08c07051187ca5d47aa75782fc2060a206e136d85cb398778a9f54e3db2caa47", "0c3f27c51e8b8915edf0f99b20a24644f301d475247d6f6f08374b46bdd81b7c", "0ebe1e8065774e27792b7880d5caf63a366a8f4c135e5a42e15ba58769ae20f9", "0ff9d8927e9828d185f11126acb1b8da2e92a15012de9ed113b3d1a04a73f407", "10be6beef496b89dae799c37bd04e5eba2a6264a0a4d605f5661b50d7dc4d1ea", "132d17d1cd7966dd9d7519bf995a5f2af9e76abd489eb1cdde6cd6066cce4cb5", "1360816558a23fd518959284a182f4d9e1cb362f47e472cff3b455babcba3144", "1e5fb8ca7bc55583e22e442dbd431ba55b70a579c5d1e7429ec9c91d4d9cf008", "1f100a7fa106825b9587fc9102815e07bc345e84c6ef109b39ce776af439ce7f", "21a3230e03772a58aff1b3709a9e232850916337e1fba95c434076b6668c6e08", "243689f0a34348668a106d9b4c366eba9a279d3a38c831e34ca67a53430f35f8", "2824b7bb47f3e5ae3e0e90c4ea28182e5c0060e6497a4f7020a913a14d8c18cd", "2c1ce718525496974dc28bd457a3de87820bfd74fd5a499cac0db7aa6b33d9b8", "36c717254b394a2fd1d02f706960152d8d1ae2e7155a152037e730721dd3dbac", "380e87dd0048d82132f3259960c821b86a101e84da8ef94fa20cf8ceb4f905dd", "38c5db643cca7001e885f94c1c72bce5ffd5ca3e6c00f36b9381a1ff1c677515", "3d8c0d8ccdf38a6d9103dbda04b18dade7588e32db531e85b051a2bc07c55fe6", "4b75867727276e96a05d681ede545d314c7c7106b3fa9fbd5643c2dc1662cb94", "585b9501131729a7b00bd745e8fe7ab9687ffdaaf91e4c6408d94b7fc15e8f2b", "5c64a05e1995976045ec40d500cc0e173639525b7aac994a8cf2e5b152966c58", "66b8245886077eaaa79f378369261e020fb19d2c6ae53f94dfd8dfbc0282d029", "750bd39768d2b52a276a0f16e37e8d89cc51808ed2aee34292a613728c215aec", "7b1694f99542e733abaa2b776ab1261a98fc697118538d53d3b0242ffed329d3", "7deb7a951ec3b81573a7bf1e375e584b444c1bdf4cf5fc820708c663ba57b292", "82142dc93de09756fc53b25be1e0cedbcc71bb8418ee720d9d8a0ca8fc74b71a", "836e98bf162bd453eb76c3115a7bfc6649b5d8e0b09c61288aee7a7214dcabe3", "8f68ef8293d7c78db41cb358a2a5f3e54eada3985950d78ec79640d804cf9c26", "a6ebfa4f158ef450cef3c6738c4107a87e4300cfa8900ffe801de9cca91dfe0c", "ac4db1553b96800b17a9badb490cd250e8957f1516b0755985f92b98e6e77fb5", "b1f3f7220f5aa8683d21539155e87e170952dbed4ecc5c6637979100cc791b5d", "b4126249adb972b50222897e622fa7980e4ac2cb717c1891a2e250798331aff7", "b6ed110d3683e593243d76a62dc45f6a7374ebf59d23aec3fc5361fb34bad9dd", "c064fbca9d9de8dd9bb0624984403b28d0da807a69365d4f7fb09123ecb0c405", "d4c3e8a11256ab82a4fc72560eb4a2b0e87bad820c290dd9b03616de240aa6db", "d780682093f3c46cce9817cf19a8ae72d8e863af8e11d2e3c2017af411b17893", "dd7f1bcb57a00ea6327356b1bf0751320daae910c9d3309d22e83924ddb67cc4", "df471311a60874f28a0b62b44b471480efda48bcc55af7659834f0af40f32f71", "e32dc9b0503a1d4982d028acd3a7fd5c4d30f044e7e336f78632d572b40d5328", "e537c3eb39f7a75157dfb1d52e0fc930bbf1af9a0040456e74b2ee7b62136d2c", "ea307c363088a80405d68d46e1b4117c1a982dbe35eaab9fcf1d51577e2b8181", "fb099cb999784a21b51ca9a017b44877826f93f380021e05e6fee571d3861edb", "fe2914f62e20325b719ba405e6a8f299f46ce8f1ad11b6f03681ceda5a935454"]),
  oe = new Set(["0e4a7f621b2756c6d34c5f409d886ec7622482db96cbcfae01e14b142ce12b1d", "0f4dd7885db7d0bf0b1e86b5dd22c2d4f9937994c66e30f3cf0fd7468033f7d4", "12ca17b49af2289436f303e0166030a21e525d266e209267433801a8fd4071a0", "28cac3b96a52871fc67bc5f353858d4f945316d964778d026fafd408e9840cf5", "49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763", "d470ff28ce01e69add79d828d4085e3ec719a6536712b5d60afcf1a10976e451", "eff8e7ca506627fe15dda5e0e512fcaad70b6d520f37cc76597fdb4f2d83a1a3"]),
  se = /^([A-Za-z0-9._-]+)(?::[0-9]*)?$/,
  ie = /^\[([0-9A-Fa-f:.]+)\](?::[0-9]*)?$/,
  ae = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
  de = /^(?:[0-9]+|0x[0-9a-f]*)$/,
  ce = /^(?:0x)?[0-9a-f_]+$/,
  fe = "org-connector-";
function h(e) {
  return wP(`mcp://claude.ai/client-integration/${e}`, re);
}
function le(e) {
  return /^[A-Za-z0-9_-]+$/.test(e) && !e.includes("__") && !e.startsWith("_") && !e.endsWith("_");
}
function ye(e) {
  let n = ue(e.replace(/[\t\r\n]/g, "")),
    r = n.indexOf("://"),
    scheme = n.slice(0, r).toLowerCase();
  if (r < 0 || scheme !== "http" && scheme !== "https") return;
  let [o = ""] = n.slice(r + 3).split(/[/?#]/, 1);
  if (o.includes("\\")) return;
  let i = o.slice(o.lastIndexOf("@") + 1),
    s = se.exec(i) ?? ie.exec(i);
  if (!s?.[1] || i.startsWith("[") && !Z(s[1])) return;
  let host = s[1].toLowerCase().replace(/\.$/, "");
  return host === "" || oe.has(nt(host)) ? void 0 : {
    scheme: scheme,
    host: host
  };
}
function ue(e) {
  let n = 0,
    r = e.length;
  while (n < r && e.charCodeAt(n) <= 32) n++;
  while (r > n && e.charCodeAt(r - 1) <= 32) r--;
  return e.slice(n, r);
}
function ge(e) {
  for (let n = 1; n <= e.length; n++) if (te.has(nt(e.slice(0, n)))) return !0;
  return !1;
}
function pe(e, n) {
  let r = n.split("."),
    t = r.at(-1) ?? "";
  if (e !== "https" || n.length > Q || r.length < 2 || t.includes("-") || r.some(item => item.startsWith("sk-ant-")) || de.test(t) || !r.every(item => ae.test(item))) return;
  let o = r.join("_");
  return ge(o) || me(o) ? void 0 : o;
}
function me(e) {
  let n = e.replaceAll("-", "");
  return (n.length === 32 || n.length === 23) && ce.test(n);
}
function be(e) {
  return `${e}-`.replace(/[_-]+/g, "-").startsWith(fe);
}
function KAo(e) {
  let n = ye(e);
  if (n === void 0) return;
  let {
      scheme: scheme_2,
      host: host_2
    } = n,
    o = `${scheme_2}://${host_2.includes(":") ? `[${host_2}]` : host_2}`,
    i = nt(o).slice(0, ee),
    s = pe(scheme_2, host_2),
    a = `h-${i}`,
    d = s === void 0 ? a : s.length > q ? `${s.slice(0, J).replace(/^[_-]+|[_-]+$/g, "")}-${i}` : s,
    c = be(d) ? a : d;
  return le(c) ? c : void 0;
}
function Bln(e, n) {
  let args = e.args ?? [];
  return e.command === n.command && args.length === (n.args?.length ?? 0) && args.every((item, index) => item === n.args?.[index]) ? void 0 : {
    command: e.command,
    args: args
  };
}
function w(e, n) {
  return `${e}-a${nt(n).slice(0, ne)}`;
}
function N(e) {
  let n = new Map();
  for (let {
    id: id,
    key: key,
    pinned = !1
  } of e) {
    let a = n.get(id);
    if (key !== void 0 && (a === void 0 || pinned && !a.pinned || pinned === a.pinned && key < a.key)) n.set(id, {
      key: key,
      pinned: pinned
    });
  }
  let r = new Map(),
    t = new Map();
  for (let [o, {
    key: key_2,
    pinned: pinned_2
  }] of n) {
    if (pinned_2) {
      r.set(o, key_2);
      continue;
    }
    t.set(key_2, (t.get(key_2) ?? new Set()).add(o));
  }
  for (let [o, i] of t) for (let s of i) r.set(s, i.size > 1 ? w(o, s) : o);
  return r;
}
var g = "mcp__",
  Se = [],
  I = "mcp__retired-",
  ve = /-a[0-9a-f]{8}(?:__|$)/,
  _e = /^(.*[^_])-a[0-9a-f]{8}$/;
function M() {
  return {
    active: !1,
    enforcesGrants: !1,
    readLegacyKeyOwner: () => {
      return;
    },
    claimLegacyKeyOwner: async () => {
      return;
    },
    legacyKeyOwners: new Map(),
    unsavedLegacyKeys: new Set(),
    refusedLegacyKeys: new Map(),
    claimedMayNotOwn: new Set(),
    notedMayNotOwn: new Set(),
    needsRebuild: !1,
    servers: new Map(),
    tools: new Map(),
    wireByInternal: new Map(),
    internalByWire: new Map(),
    wireKeyByInternalKey: new Map(),
    internalKeyByWireKey: new Map(),
    keptLegacyNames: 0,
    serverKeyMoved: !1,
    sessionKeyById: new Map(),
    formerKeys: new Map(),
    formerSessionKeys: new Map(),
    spelledKeys: new Map(),
    otherDenyOrAskNames: new Map(),
    retiredWireNames: new Map(),
    wireHolders: new Map(),
    sentWires: new Map()
  };
}
var Ke = new Je(M),
  k = new W(() => ({
    used: !1
  })),
  he = M();
function l() {
  return Po(k).used ? Ke.of(H()) : he;
}
function VZi(e) {
  Po(k).used = !0;
  let n = l();
  n.active = !0, n.enforcesGrants = e.enforcesGrants, n.readLegacyKeyOwner = e.read, n.claimLegacyKeyOwner = e.claim;
}
function NR() {
  return l().active;
}
function KZi() {
  return l().serverKeyMoved;
}
function qAo() {
  let {
    tools: tools,
    wireByInternal: wireByInternal,
    sessionKeyById: sessionKeyById
  } = l();
  return [...tools].filter(([t, {
    serverId: serverId
  }]) => !wireByInternal.has(t) && sessionKeyById.has(serverId)).map(([t]) => t);
}
function qZi(e) {
  let {
    wireByInternal: wireByInternal_2,
    sentWires: sentWires
  } = l();
  return wireByInternal_2.has(e) && !sentWires.has(e);
}
function YZi() {
  let e = [...l().servers.values()].flatMap(({
    standardKey: standardKey
  }) => standardKey === void 0 ? [] : [standardKey.key]);
  return new Set(e).size < e.length;
}
function twe() {
  return l().enforcesGrants;
}
function XZi() {
  return l().keptLegacyNames;
}
function m(e) {
  return e.serverType === "claudeai-proxy" && e.serverId ? SC(e.serverId) ?? e.serverId : h(e.serverName);
}
function Ne(e, n, r, t) {
  let o = e.tools.get(n),
    i = o && e.servers.get(o.serverId)?.standardKey;
  if (o === void 0 || i === void 0 || i.pinned) return;
  let s = new Set(t.values());
  for (let a = 0; a <= e.tools.size; a++) {
    let d = a === 0 ? o.serverId : `${o.serverId}#${a}`,
      c = `${g}${w(i.key, d)}__${o.toolPart}`;
    if (c.length > xHe) return;
    if (!r.has(c) && !s.has(c)) return c;
  }
  return;
}
function R(e, n, r, t) {
  let o = e.servers.get(t);
  return r !== t && o?.standardKey?.key !== o?.legacyKey && !(n.has(r) && e.servers.get(r)?.mayRecordOwner === !1 && o?.mayRecordOwner !== !1);
}
function Re(e) {
  let n = [...e.servers.values()],
    r = N([...n.map(({
      id: id_2,
      standardKey: standardKey_2
    }) => ({
      id: id_2,
      key: standardKey_2?.key,
      pinned: standardKey_2?.pinned
    })), ...[...e.formerKeys].flatMap(([s, a]) => [...a].filter(item => item !== e.servers.get(s)?.standardKey?.key).map(d => ({
      id: `former:${d}:${s}`,
      key: d
    })))]);
  for (let {
    id: id_3,
    legacyKey: legacyKey
  } of n) {
    let d = tt(`${legacyKey}__`, "__");
    e.spelledKeys.set(d, (e.spelledKeys.get(d) ?? new Set()).add(id_3));
  }
  for (let [s, a] of r) {
    let d = e.servers.get(s)?.standardKey;
    if ([...(e.spelledKeys.get(a) ?? [])].some(item => R(e, r, item, s)) && d?.key === a && !d.pinned) r.set(s, w(a, s));
  }
  let t = new Map();
  for (let {
    legacyKey: legacyKey_2
  } of n) t.set(legacyKey_2, (t.get(legacyKey_2) ?? 0) + 1);
  let internalByWire = e.internalByWire;
  e.sessionKeyById = r, e.wireByInternal = new Map(), e.internalByWire = new Map(), e.wireKeyByInternalKey = new Map(), e.internalKeyByWireKey = new Map(), e.keptLegacyNames = 0;
  for (let {
    id: id_4,
    legacyKey: legacyKey_3
  } of n) {
    let d = r.get(id_4);
    if (d !== void 0) {
      if (d !== legacyKey_3) e.internalKeyByWireKey.set(d, legacyKey_3);
      if (t.get(legacyKey_3) === 1) e.wireKeyByInternalKey.set(legacyKey_3, d);
    }
  }
  let i = new Map();
  for (let [s, {
    serverId: serverId_2,
    toolPart: toolPart
  }] of e.tools) {
    let c = r.get(serverId_2),
      f = `${g}${c}__${toolPart}`;
    if (c !== void 0 && f.length <= xHe) i.set(s, f);
  }
  for (let [s, a] of e.sentWires) {
    let d = e.tools.get(s),
      c = d && e.servers.get(d.serverId),
      f = c?.standardKey;
    if (d !== void 0 && c !== void 0 && f !== void 0 && i.has(s)) {
      let y = [f.key, w(f.key, d.serverId)].find(item => a === `${g}${item}__${d.toolPart}`),
        u = [...(e.spelledKeys.get(f.key) ?? [])].some(item => R(e, r, item, d.serverId)),
        v = c.mayRecordOwner === !1 && [...e.servers.values()].some(item => item.id !== c.id && item.mayRecordOwner !== !1 && A(e, item, f.key));
      if (y !== void 0 && !(y === f.key && (u || v))) {
        if (i.set(s, a), e.internalKeyByWireKey.set(y, c.legacyKey), e.wireKeyByInternalKey.has(c.legacyKey)) e.wireKeyByInternalKey.set(c.legacyKey, y);
      }
    }
  }
  for (let s = !0; s;) {
    s = !1;
    let a = new Set([...e.tools.keys()].filter(item => !i.has(item))),
      d = new Set();
    for (let [c, f] of i) {
      let y = d.has(f) || a.has(f) && f !== c;
      if (d.add(f), y) {
        let u = Ne(e, c, a, i);
        if (u === void 0) i.delete(c);else i.set(c, u);
        s = !0;
      }
    }
  }
  e.keptLegacyNames = e.tools.size - i.size;
  for (let [s, a] of i) {
    e.wireByInternal.set(s, a), e.internalByWire.set(a, s);
    let d = e.wireHolders.get(a);
    e.wireHolders.set(a, d === void 0 || d === s ? s : null);
  }
  for (let [s, {
    serverId: serverId_3,
    toolPart: toolPart_2
  }] of e.tools) for (let c of e.formerKeys.get(serverId_3) ?? []) {
    let f = `${g}${c}__${toolPart_2}`;
    if (e.wireHolders.get(f) === s && !e.internalByWire.has(f) && (f === s || !e.tools.has(f))) e.internalByWire.set(f, s);
  }
  for (let [s, a] of internalByWire) {
    let d = s === a && e.tools.has(s) && !e.wireByInternal.has(s);
    if (!e.internalByWire.has(s) && !e.retiredWireNames.has(s) && !d) e.retiredWireNames.set(s, `${I}${we().replaceAll("-", "")}`);
  }
  e.otherDenyOrAskNames = new Map();
  for (let [s, {
    serverId: serverId_4,
    toolPart: toolPart_3
  }] of e.tools) {
    let c = i.get(s),
      f = L([...[r.get(serverId_4), e.servers.get(serverId_4)?.standardKey?.key, e.servers.get(serverId_4)?.denyKey].flatMap(item => item === void 0 ? [] : [`${g}${item}__${toolPart_3}`]), ...(c === void 0 ? [] : [c]), ...[...(e.formerKeys.get(serverId_4) ?? []), ...(e.formerSessionKeys.get(serverId_4) ?? [])].map(item => `${g}${item}__${toolPart_3}`)]).filter(item => item !== s);
    if (f.length > 0) e.otherDenyOrAskNames.set(s, f);
  }
}
async function ANr(e, n = !1, r = !0) {
  let t = l();
  if (!t.active) return !1;
  let o = bn(e.serverName),
    i = m(e);
  if (r) t.claimedMayNotOwn.delete(i);else t.claimedMayNotOwn.add(i);
  let s = n || (await Oe(t, o, i, r)) && (t.enforcesGrants || !r && b(t, o, !1, !0)),
    a = t.refusedLegacyKeys.get(o) ?? new Set();
  if (t.refusedLegacyKeys.set(o, a), s) a.add(i);else a.delete(i);
  return s;
}
function x(e) {
  let n = `${e}__`,
    r = [e];
  for (let t = n.indexOf("__"); t >= 0; t = n.indexOf("__", t + 1)) r.push(n.slice(0, t));
  return r;
}
function A(e, n, r) {
  return n.standardKey?.key === r || e.sessionKeyById.get(n.id) === r || e.formerKeys.get(n.id)?.has(r) === !0 || e.formerSessionKeys.get(n.id)?.has(r) === !0;
}
function b(e, n, r, t = !1) {
  let o = x(n);
  return [...e.servers.values()].some(item => {
    let s = !r && item.mayRecordOwner !== !1;
    return item.legacyKey !== n && !((r || t) && item.mayRecordOwner === !1) && (s ? o : [n]).some(a => s && item.legacyKey === a || A(e, item, a));
  });
}
function O(e, n) {
  let r = e.servers.get(n)?.mayRecordOwner;
  return r === void 0 ? e.claimedMayNotOwn.has(n) || e.notedMayNotOwn.has(n) : !r;
}
function Ltt(e) {
  let n = l();
  if (!n.active) return !1;
  return P(n, m(e), bn(e.serverName));
}
function P(e, n, r) {
  return e.enforcesGrants ? b(e, r, !O(e, n)) : O(e, n) && b(e, r, !1, !0);
}
async function Oe(e, n, r, t) {
  if (b(e, n, t)) return !0;
  let o = e.unsavedLegacyKeys.has(n) ? void 0 : e.readLegacyKeyOwner(n),
    i = e.legacyKeyOwners.get(n);
  if (o !== void 0 || i !== void 0) return (o ?? r) !== r || (i ?? r) !== r;
  if (!t) return e.unsavedLegacyKeys.has(n);
  e.unsavedLegacyKeys.add(n);
  let s = await e.claimLegacyKeyOwner(n, r);
  if (s === void 0) return !0;
  e.unsavedLegacyKeys.delete(n);
  let a = e.legacyKeyOwners.get(n) ?? s;
  return e.legacyKeyOwners.set(n, a), a !== r;
}
async function JZi(e) {
  let n = l();
  if (!n.active) return !1;
  let r = bn(e.serverName);
  if (b(n, r, !0)) return !1;
  let t = m(e),
    o = _(n, r);
  if (o !== void 0) n.legacyKeyOwners.set(r, o);
  if (n.unsavedLegacyKeys.add(r), (await n.claimLegacyKeyOwner(r, t, !0)) !== t) return !1;
  return n.legacyKeyOwners.set(r, t), n.unsavedLegacyKeys.delete(r), n.refusedLegacyKeys.get(r)?.delete(t), !0;
}
function xNr(e) {
  let n = l(),
    r = bn(e.serverName),
    t = n.legacyKeyOwners.get(r) ?? n.readLegacyKeyOwner(r);
  return n.active && (!n.unsavedLegacyKeys.has(r) || n.legacyKeyOwners.has(r)) && !b(n, r, !0) && t !== void 0 && t !== m(e);
}
function Ntt(e) {
  let n = l(),
    r = bn(e.serverName),
    t = m(e);
  return _(n, r) === t && (n.legacyKeyOwners.get(r) ?? t) === t;
}
function E1t(e) {
  return T(l(), bn(e.serverName), m(e));
}
function T(e, n, r) {
  let t = _(e, n);
  return e.active && e.enforcesGrants && (t === void 0 ? e.unsavedLegacyKeys.has(n) : t !== r);
}
function _(e, n) {
  return (e.unsavedLegacyKeys.has(n) ? void 0 : e.readLegacyKeyOwner(n)) ?? e.legacyKeyOwners.get(n);
}
function E(e, {
  server: server,
  standardKey: standardKey_3,
  denyKey: denyKey,
  mayRecordOwner: mayRecordOwner
}) {
  let id_5 = m(server),
    legacyKey_4 = bn(server.serverName),
    a = e.servers.get(id_5),
    d = a?.standardKey,
    standardKey_4 = standardKey_3 ?? d,
    denyKey_2 = denyKey ?? a?.denyKey,
    mayRecordOwner_2 = mayRecordOwner ?? a?.mayRecordOwner;
  if (a === void 0 || a.legacyKey !== legacyKey_4 || d?.key !== standardKey_4?.key || d?.pinned !== standardKey_4?.pinned || a.denyKey !== denyKey_2 || a.mayRecordOwner !== mayRecordOwner_2) {
    if (d !== void 0 && d.key !== standardKey_4?.key) e.serverKeyMoved = !0;
    if (d !== void 0 && !d.pinned && d.key !== standardKey_4?.key) {
      e.formerKeys.set(id_5, (e.formerKeys.get(id_5) ?? new Set()).add(d.key));
      let u = e.sessionKeyById.get(id_5);
      if (u !== void 0) e.formerSessionKeys.set(id_5, (e.formerSessionKeys.get(id_5) ?? new Set()).add(u));
    }
    e.needsRebuild = !0, e.servers.set(id_5, {
      id: id_5,
      legacyKey: legacyKey_4,
      standardKey: standardKey_4,
      denyKey: denyKey_2,
      mayRecordOwner: mayRecordOwner_2
    });
  }
  return id_5;
}
function B(e) {
  if (e.needsRebuild) {
    let n = {
      ...e
    };
    try {
      Re(e), e.needsRebuild = !1;
    } catch (error) {
      throw Object.assign(e, n), error;
    }
  }
}
function QZi(e) {
  let n = l();
  if (!n.active) return;
  for (let r of e) E(n, r);
  B(n);
}
function ZZi(e) {
  let n = l();
  if (!n.active) return;
  for (let r of e) {
    let serverId_5 = E(n, r),
      o = bn(r.server.serverName);
    if (n.tools.get(r.name)?.serverId !== serverId_5) n.needsRebuild = !0, n.tools.set(r.name, {
      serverId: serverId_5,
      toolPart: r.name.slice(`${g}${o}__`.length)
    });
  }
  B(n);
}
function PNr(e) {
  let {
    active: active,
    wireByInternal: wireByInternal_3,
    sentWires: sentWires_2
  } = l();
  if (active) for (let o of e) {
    let i = wireByInternal_3.get(o);
    if (i !== void 0) sentWires_2.set(o, i);
  }
}
function pN(e) {
  return l().wireByInternal.get(e) ?? e;
}
function T1t(e) {
  return (e.startsWith(I) ? [...l().retiredWireNames].find(([, r]) => r === e) : void 0)?.[0] ?? pN(e);
}
function ONr(e) {
  let n = T1t(e);
  return n === e && e.startsWith(g) && !l().tools.has(e) ? [e, INr(e)] : [n];
}
function nwe(e) {
  let {
    internalByWire: internalByWire_2,
    retiredWireNames: retiredWireNames
  } = l();
  return internalByWire_2.get(e) ?? retiredWireNames.get(e) ?? e;
}
function Ftt(e) {
  return l().internalKeyByWireKey.get(e) ?? e;
}
function C(e, n) {
  if (!e.startsWith(g)) return e;
  let r = e.slice(g.length),
    t = r.indexOf("__"),
    o = t === -1 ? r : r.slice(0, t);
  return `${g}${n(o)}${t === -1 ? "" : r.slice(t)}`;
}
function lqe(e) {
  return C(e, Ftt);
}
function INr(e, n) {
  let {
      refusedLegacyKeys: refusedLegacyKeys
    } = l(),
    t = Ie(e);
  return t === void 0 || n === "allow" && (refusedLegacyKeys.get(t.legacy)?.size ?? 0) > 0 ? e : `${g}${t.wire}${e.slice(g.length + t.legacy.length)}`;
}
function eea() {
  let e = l(),
    n = [...e.servers.values()].filter(item => (e.refusedLegacyKeys.get(item.legacyKey)?.size ?? 0) > 0 || T(e, item.legacyKey, item.id) || P(e, item.id, item.legacyKey)).flatMap(item => x(item.legacyKey)).map(item => `${g}${item}`);
  return r => n.some(item => r === item || r.startsWith(`${item}__`) || r.startsWith(`${item}(`));
}
function Ie(e) {
  let n;
  for (let [legacy, wire] of l().wireKeyByInternalKey) {
    let o = `${g}${legacy}`;
    if ((e === o || e.startsWith(`${o}__`) || e.startsWith(`${o}(`)) && legacy.length > (n?.legacy.length ?? -1)) n = {
      legacy: legacy,
      wire: wire
    };
  }
  return n;
}
function MNr(e) {
  return l().otherDenyOrAskNames.get(e) ?? Se;
}
function fUs(e) {
  if (!ve.test(e) || !l().active) return;
  let n = C(e, r => _e.exec(r)?.[1] ?? r);
  return n === e ? void 0 : n;
}
function CGn(e, n) {
  let rule = fUs(e);
  if (rule === void 0) return;
  let {
      tools: tools_2,
      servers: servers,
      sessionKeyById: sessionKeyById_2
    } = l(),
    s = tools_2.get(n),
    a = s === void 0 ? void 0 : servers.get(s.serverId)?.standardKey?.key;
  return s === void 0 || a === void 0 || sessionKeyById_2.get(s.serverId) !== a ? void 0 : {
    rule: rule,
    row: `${g}${a}__${s.toolPart}`
  };
}
var Me = "tengu_inherited_gosling",
  G = new BSt();
function tea(e) {
  return G.register(e);
}
function F() {
  return G.read(Me, !0);
}
function U(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0;
}
var ke = {
  always_allow: !0,
  always_ask: !0,
  always_deny: !0
};
function xe(e) {
  return typeof e === "string" && Object.hasOwn(ke, e);
}
function RGn(e) {
  if (!D(e) || typeof e.name !== "string") return;
  let {
    name: name_2,
    permission_policy: permission_policy
  } = e;
  if (permission_policy === void 0) return {
    policy: {
      name: name_2
    },
    rewritten: !1
  };
  return xe(permission_policy) ? {
    policy: {
      name: name_2,
      permission_policy: permission_policy
    },
    rewritten: !1
  } : {
    policy: {
      name: name_2,
      permission_policy: "always_ask"
    },
    rewritten: !0
  };
}
function DNr(e, n) {
  if (e === void 0 || n === void 0) return e === n;
  return e.length === n.length && e.every((item, index) => item.name === n[index]?.name && item.permission_policy === n[index]?.permission_policy);
}
function eSt(e) {
  if (!D(e)) return {
    settings: {},
    ignored: []
  };
  let {
      timeout: timeout,
      disableAutoBackground: disableAutoBackground,
      tools: tools_3,
      connectorId: connectorId
    } = e,
    timeout_2 = U(timeout),
    ignored = [];
  if (timeout !== void 0 && timeout_2 === void 0) ignored.push("timeout");
  if (disableAutoBackground !== void 0 && typeof disableAutoBackground !== "boolean") ignored.push("disableAutoBackground");
  let tools_4 = Ae(tools_3);
  if (tSt(e) !== void 0) ignored.push("tools");
  let d = typeof connectorId === "string" && connectorId !== "";
  if (connectorId !== void 0 && !d) ignored.push("connectorId");
  return {
    settings: {
      ...(timeout_2 !== void 0 && {
        timeout: timeout_2
      }),
      ...(disableAutoBackground === !0 && {
        disableAutoBackground: disableAutoBackground
      }),
      ...(tools_4 !== void 0 && {
        tools: tools_4
      }),
      ...(d && {
        connectorId: connectorId
      })
    },
    ignored: ignored
  };
}
function tSt(e) {
  let n = D(e) ? e.tools : void 0;
  if (n === void 0) return;
  if (!Array.isArray(n)) return {
    kind: "not_a_list"
  };
  let dropped = 0,
    rewritten = 0;
  for (let o of n) {
    let i = RGn(o);
    if (i === void 0) dropped++;else if (i.rewritten) rewritten++;
  }
  return dropped + rewritten > 0 ? {
    kind: "entries",
    dropped: dropped,
    rewritten: rewritten,
    kept: n.length - dropped
  } : void 0;
}
function C1t(e) {
  if (e.kind === "not_a_list") return "tools[] is not a list; no per-tool policy taken";
  let n = [];
  if (e.dropped > 0) n.push(`dropped ${e.dropped} malformed tools[] ${e.dropped === 1 ? "entry" : "entries"}`);
  if (e.rewritten > 0) n.push(`read ${e.rewritten} tools[] ${e.rewritten === 1 ? "entry" : "entries"} with an invalid permission_policy as always_ask`);
  return `${n.join(", ")}; kept ${e.kept}`;
}
function Ae(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let r of e) {
    let t = RGn(r);
    if (t !== void 0) n.push(t.policy);
  }
  return n;
}
var HA = "mcp__";
function gr(e) {
  let n = e.split("__"),
    [r, serverName, ...o] = n;
  if (r !== "mcp" || !serverName) return null;
  let toolName = o.length > 0 ? o.join("__") : void 0;
  return {
    serverName: serverName,
    toolName: toolName
  };
}
function nea(e, n) {
  let r = gr(n);
  return r?.serverName === e && r.toolName !== void 0 && /^[A-Za-z0-9-]+(?:_[A-Za-z0-9-]+)*$/.test(r.toolName);
}
function to(e) {
  return `${HA}${bn(e)}__`;
}
function Dd(e, n, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === n;
  return e.name.startsWith(r ?? to(n));
}
function PE(e) {
  return gr(`${to(e)}x`)?.serverName ?? bn(e);
}
function rea(e, {
  listedServer: listedServer,
  parsedServer: parsedServer
}) {
  if (listedServer !== void 0) return e === listedServer;
  return parsedServer !== void 0 && jln(parsedServer, e);
}
function br(e, n) {
  return `${to(e)}${bn(n)}`;
}
var z = {
  always_allow: 0,
  always_ask: 1,
  always_deny: 2
};
function nSt(...e) {
  let n = new Map();
  for (let i of e) for (let [s, a] of Object.entries(i)) {
    let d = a.type === "sdk";
    if (!d && a.type !== "http" && a.type !== "sse") continue;
    let tools_5 = a.tools;
    if (!Array.isArray(tools_5)) continue;
    for (let f of tools_5) {
      let y = RGn(f);
      if (y === void 0) continue;
      let permission_policy_2 = y.policy.permission_policy;
      if (permission_policy_2 === void 0 || (d ? permission_policy_2 === "always_allow" : y.rewritten)) continue;
      let v = z[permission_policy_2],
        p = br(s, y.policy.name),
        K = n.get(p);
      if (K === void 0 || v > z[K]) n.set(p, permission_policy_2);
    }
  }
  let allow = [],
    deny = [],
    ask = [];
  for (let [i, s] of n) if (s === "always_allow") allow.push(i);else if (s === "always_deny") deny.push(i);else ask.push(i);
  return {
    allow: allow,
    deny: deny,
    ask: ask
  };
}
function oea(e, n) {
  let r = Object.fromEntries(Object.entries(n).filter(([, s]) => s.scope === "dynamic" && s.type !== "sdk")),
    {
      allow: t,
      deny: o,
      ask: i
    } = nSt(r);
  if (t.length === 0 && o.length === 0 && i.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      ...(t.length > 0 && {
        mcpServerPolicy: t
      })
    },
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      ...(o.length > 0 && {
        mcpServerPolicy: o
      })
    },
    alwaysAskRules: {
      ...e.alwaysAskRules,
      ...(i.length > 0 && {
        mcpServerPolicy: i
      })
    }
  };
}
function LNr(e, n, r) {
  let t = (a, d) => {
      let c = a.mcpServerPolicy ?? [],
        mcpServerPolicy_2 = r === "replace" ? d : [...c, ...d.filter(item => !c.includes(item))];
      if (mcpServerPolicy_2.length === c.length && mcpServerPolicy_2.every((item, index) => item === c[index])) return a;
      if (mcpServerPolicy_2.length === 0) {
        let {
          mcpServerPolicy: mcpServerPolicy,
          ...u
        } = a;
        return u;
      }
      return {
        ...a,
        mcpServerPolicy: mcpServerPolicy_2
      };
    },
    alwaysAllowRules = t(e.alwaysAllowRules, n.allow),
    alwaysDenyRules = t(e.alwaysDenyRules, n.deny),
    alwaysAskRules = t(e.alwaysAskRules, n.ask);
  if (alwaysAllowRules === e.alwaysAllowRules && alwaysDenyRules === e.alwaysDenyRules && alwaysAskRules === e.alwaysAskRules) return e;
  return {
    ...e,
    alwaysAllowRules: alwaysAllowRules,
    alwaysDenyRules: alwaysDenyRules,
    alwaysAskRules: alwaysAskRules
  };
}
function fi(e) {
  return e.mcpInfo ? br(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name;
}
function PHe(e) {
  let n = e.mcpInfo?.nameKey !== void 0 && F() ? e.mcpInfo.nameKey : void 0;
  if (!e.mcpInfo || e.mcpInfo.denyKey === void 0 && n === void 0 && !NR()) return [];
  let r = fi(e),
    t = MNr(r),
    o = `${HA}${bn(e.mcpInfo.serverName)}__`,
    i = r.slice(o.length),
    s = [e.mcpInfo.standardKey?.key, e.mcpInfo.denyKey, n].flatMap(item => item === void 0 ? [] : [`${HA}${item}__${i}`]);
  return L([...t, ...s]).filter(item => item !== r);
}
function AGn(e, n) {
  let r = `mcp__${bn(n)}__`;
  return e.replace(r, "");
}
function xGn(e) {
  let n = e.replace(/\s*\(MCP\)\s*$/, "");
  n = n.trim();
  let r = n.indexOf(" - ");
  if (r !== -1) return n.substring(r + 3).trim();
  return n;
}
function rSt(e, n) {
  if (!n) return Et(e, S);
  let r = rwe(e);
  return r ? `${Et(r.serverName, S)} (from plugin ${Et(r.pluginName, S)})` : Et(e, S);
}
var S = 80;
function rwe(e) {
  if (!e.startsWith("plugin:")) return;
  let n = e.split(":");
  if (n.length < 3) return;
  return {
    pluginName: n[1],
    serverName: n.slice(2).join(":")
  };
}
function jln(e, n) {
  if (e.startsWith("plugin:") || n.startsWith("plugin:")) return e === n;
  return bn(e) === bn(n);
}
function YAo(e, n) {
  return XAo(e)(gr(n));
}
function sea(e) {
  let n = XAo(e);
  return qAo().filter(item => [item, ...MNr(item)].some(item => item === e || n(gr(item))));
}
function XAo(e) {
  let n = gr(e);
  if (n === null) return () => !1;
  let r = n.toolName === void 0 || n.toolName === "*",
    t = n.toolName !== void 0 && dS(n.toolName) ? n.toolName : void 0,
    o;
  return i => i !== null && n.serverName === i.serverName && (r || i.toolName !== void 0 && t !== void 0 && (o ??= HNr(t))(i.toolName));
}
function OHe(e) {
  if (e.mcpInfo) {
    let {
      serverName: serverName_2
    } = e.mcpInfo;
    return [`${HA}${bn(serverName_2)}`, `${HA}${PE(serverName_2)}`];
  }
  let n = [];
  if (!e.name.startsWith(HA)) return n;
  for (let r = e.name.indexOf("__", HA.length); r !== -1; r = e.name.indexOf("__", r + 1)) n.push(e.name.slice(0, r));
  return n;
}
function iea(name_3) {
  let n = gr(name_3);
  if (n === null || n.toolName === void 0) return n === null ? [] : [n];
  return OHe({
    name: name_3
  }).map(item => ({
    serverName: item.slice(HA.length),
    toolName: name_3.slice(item.length + 2)
  }));
}
function pUs(e, n) {
  return (n.mcpInfo ? [`${HA}${bn(n.mcpInfo.serverName)}`] : OHe(n)).every(item => e === item || e.startsWith(`${item}__`));
}
function oSt(e, n) {
  return YAo(e, fi(n)) && pUs(e, n);
}
function aea(e, n) {
  if (!n.mcpInfo) return !1;
  if (!NR()) return PHe(n).some(t => t === e || sSt(e, {
    name: t
  }));
  let r = CGn(e, fi(n));
  return PHe(n).includes(e) || r !== void 0 && r.rule === r.row || sSt(e, n);
}
function sSt(e, n) {
  let r = n.mcpInfo ? CGn(e, fi(n)) : void 0;
  return r !== void 0 && sSt(r.rule, {
    name: r.row
  }) || YAo(e, fi(n)) || e.startsWith(HA) && OHe(n).includes(e) || PHe(n).some(t => sSt(e, {
    name: t
  }));
}
export { v1t, xHe, uUs, CNr, GZi, TGn, RNr, SC, KAo, Bln, VZi, NR, KZi, qAo, qZi, YZi, twe, XZi, ANr, Ltt, JZi, xNr, Ntt, E1t, QZi, ZZi, PNr, pN, T1t, ONr, nwe, Ftt, lqe, INr, eea, MNr, fUs, CGn, tea, RGn, DNr, eSt, tSt, C1t, HA, gr, nea, to, Dd, PE, rea, br, nSt, oea, LNr, fi, PHe, AGn, xGn, rSt, rwe, jln, YAo, sea, XAo, OHe, iea, pUs, oSt, aea, sSt };