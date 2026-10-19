// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { th } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { L, K, Ze } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { n_ } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { oC } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, jo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { qW, mF, W4, Hmn, CGe, U5 } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Vs, b2, OFo as tail, oun } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { id } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { rn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { al, KO, TB, Oa, WMe, kyt, qNo, gy, ZN, Nle, WFr, ene } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { am, GEe, O_, jD, tne, ad } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { eR, BD } from "B:/~BUN/root/chunk-m3q01n4y.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Em, pa } from "B:/~BUN/root/chunk-wg7rg6k5.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { basename as Ie } from "path";
var tags = [W4, qW, Hmn],
  Ce = [...CGe, "system-reminder"],
  D;
function z() {
  return D ??= oun([{
    tags: tags
  }]), D;
}
function gyt(e) {
  return z().neutralize(e);
}
function LFr(e) {
  return z().openerOffsets(e);
}
var H;
function j() {
  return H ??= oun([{
    tags: U5.filter(item => item !== mF)
  }, {
    tags: [mF],
    tail: tail
  }, {
    tags: ["antml"],
    tail: ({
      colon: colon
    }) => `[${colon}]`
  }]), H;
}
function Ole(e) {
  return j().neutralize(e);
}
function n2s(e) {
  return j().openerOffsets(e);
}
var regExp = new RegExp(`[${b2.open}]`, "u");
function U(e) {
  return regExp.test(e) || e.includes("\\u");
}
var de = /^\s*(?:\{\s*["}]|\[\s*(?:["{[\]\d-]|true\b|false\b|null\b))/,
  ue = new Map([['"', '"'], ["\\", "\\"], ["/", "/"], ["b", "\b"], ["f", "\f"], ["n", `
`], ["r", "\r"], ["t", "\t"]]);
function q(e, n) {
  let r = n,
    i = 1;
  while (i % 2 === 1) {
    if (r = e.indexOf('"', r + 1), r === -1) return -1;
    i = 0;
    while (e.charCodeAt(r - i - 1) === 92) i++;
  }
  return r;
}
function ce(e) {
  let n = [],
    r = e.indexOf('"');
  while (r !== -1) {
    let i = q(e, r);
    if (i === -1) {
      n.push([r + 1, e.length]);
      break;
    }
    n.push([r + 1, i]), r = e.indexOf('"', i + 1);
  }
  return n;
}
function fe(e) {
  if (de.test(e)) return !0;
  let n = e.search(/\S/),
    r = e[n] === '"' ? q(e, n) : -1;
  return r !== -1 && e.slice(r + 1).trim() === "";
}
function le(e, n, r) {
  let value = "",
    starts = [],
    ends = [];
  for (let l = n; l < r;) {
    let p = e[l],
      k = 1;
    if (p === "\\" && l + 1 < r) {
      let S = ue.get(e[l + 1]),
        g = e.slice(l + 2, l + 6);
      if (S !== void 0) p = S, k = 2;else if (e[l + 1] === "u" && l + 6 <= r && /^[0-9a-fA-F]{4}$/.test(g)) p = String.fromCharCode(parseInt(g, 16)), k = 6;
    }
    value += p, starts.push(l), ends.push(l + k), l += k;
  }
  return {
    value: value,
    starts: starts,
    ends: ends
  };
}
function me(e) {
  let n = new Map();
  for (let c of LFr(e)) n.set(c, {
    end: c + 1,
    keepsOpener: e[c] === "<"
  });
  for (let [c, a] of ce(e)) {
    if (!U(e.slice(c, a))) continue;
    let {
      value: value_2,
      starts: starts_2,
      ends: ends_2
    } = le(e, c, a);
    for (let S of LFr(value_2)) n.set(starts_2[S], {
      end: ends_2[S],
      keepsOpener: value_2[S] === "<"
    });
  }
  let r = "",
    i = 0;
  for (let c of [...n.keys()].sort((itemA, itemB) => itemA - itemB)) {
    let {
      end: end,
      keepsOpener: keepsOpener
    } = n.get(c);
    r += e.slice(i, keepsOpener ? end : c) + (keepsOpener ? "\\\\" : "<\\\\"), i = end;
  }
  return r + e.slice(i);
}
function hyt(e) {
  if (!U(e)) return e;
  return fe(e) ? me(e) : gyt(e);
}
var name = "main";
function UEe(e, n) {
  return `<${Hmn} from="${Vs(e)}">
${yyt(n)}
</${Hmn}>`;
}
function yyt(e) {
  return hyt(e);
}
import { createHash as ge, randomBytes as X } from "crypto";
import { mkdir as pe, readdir as Y, unlink as O } from "fs/promises";
import { basename as Se, join as T, resolve as ke } from "path";
async function NFr(e, n) {
  let r = [],
    i;
  try {
    i = await pa(cursor => e.listEntries({
      namespace: "session"
    }, {
      cursor: cursor,
      skipKeyStats: !0
    }), c => {
      for (let a of c) if (a.kind === "key" && a.key.namespace === "session") r.push(a.key.file);
    });
  } catch (error) {
    n.onIssue?.(`failed: ${d(error)}`);
    return;
  }
  switch (i.status) {
    case "done":
      return r;
    case "error":
      n.onIssue?.(`failed: ${yt(i.error)}`);
      return;
    case "capped":
      return n.onIssue?.(`truncated at ${Em} pages; ${r.length} names seen`, "warn"), n.partialOnCap ? r : void 0;
  }
}
var type = "auth",
  j3n = /^(\d+)\.[0-9a-f]{64}\.key$/,
  he = /^(\d+)\.[0-9a-f]{64}\.key\.tmp\.[0-9a-f]+$/,
  v = 16,
  be = /^[0-9a-f]{32}$/,
  R = 4096,
  Q = f(() => u({
    peerToken: o().regex(be),
    procStart: o().optional(),
    procStartFt: o().optional(),
    pidDomain: o().optional()
  }));
function W3n() {
  return I() === "windows";
}
function r2s() {
  return {
    peerToken: X(v).toString("hex"),
    childToken: X(v).toString("hex")
  };
}
var z3n = 25;
function Qte() {
  return T(Pe(), "sessions");
}
function ZC(e) {
  let n = ene(e);
  if (n !== void 0) return `\\\\.\\pipe\\${WFr(n)}`;
  if (n_(e)) return;
  return ke(e);
}
function Z(e) {
  let n = ZC(e);
  return n === void 0 ? void 0 : ge("sha256").update(n).digest("hex");
}
function V(e, n) {
  let r = Z(n);
  if (r === void 0) throw Error("refusing to derive a messaging key name for a non-canonical socket path");
  return `${e}.${r}.key`;
}
async function o2s(e, peerToken, r, {
  sweepPermitted: sweepPermitted
}) {
  if (W() && r !== void 0) return ye(r, e, peerToken);
  let c = Qte();
  await pe(c, {
    recursive: !0,
    mode: 448
  }), await Ee(c, sweepPermitted);
  let a = T(c, V(process.pid, e));
  try {
    await O(a);
  } catch {}
  return await An(a, _({
    peerToken: peerToken,
    ...tne(await O_()),
    pidDomain: await eR()
  }), 384), a;
}
async function ye(e, n, peerToken_2) {
  let i = V(process.pid, n),
    c = await e.ensureScope({
      namespace: "session"
    });
  if (!c.ok) throw t(`[uds-auth] sessions scope unavailable: ${yt(c.error)}`), Error("messaging key folder could not be made through storage");
  try {
    await e.delete(Be.session(i));
  } catch {}
  let a = await e.write(Be.session(i), _({
    peerToken: peerToken_2,
    ...tne(await O_()),
    pidDomain: await eR()
  }), {
    publishDiscipline: "atomic",
    mode: 384,
    exactMode: 384
  });
  if (!a.ok) throw t(`[uds-auth] key publish failed: ${yt(a.error)}`), Error("messaging key could not be published through storage");
  return T(Qte(), i);
}
async function G3n(e) {
  try {
    let n = await al(e, R);
    if (n === null) return;
    let r = Q().safeParse(jo(n));
    return r.success ? r.data.pidDomain : void 0;
  } catch {
    return;
  }
}
async function Ee(e, n) {
  if (!n) return;
  let r;
  try {
    r = await Y(e);
  } catch {
    return;
  }
  let i = await eR();
  await Promise.all(r.map(async item => {
    let a = he.exec(item);
    if (!a || !am(parseInt(a[1], 10))) return;
    let l = await G3n(T(e, item));
    if (l !== void 0 && l !== i) return;
    try {
      await O(T(e, item));
    } catch {}
  }));
}
async function s2s(e, n) {
  if (W() && n !== void 0) {
    try {
      await n.delete(Be.session(Se(e)));
    } catch {}
    return;
  }
  try {
    await O(e);
  } catch {}
}
async function i2s(e, n, r) {
  let i = Qte(),
    c;
  if (W() && n !== void 0) {
    let g = await NFr(n, {
      partialOnCap: !1
    });
    if (g === void 0) return {
      kind: "unusable"
    };
    c = g;
  } else try {
    c = await Y(i);
  } catch (error) {
    return G(error) ? {
      kind: "no-key"
    } : {
      kind: "unusable"
    };
  }
  let a = Z(e);
  if (a === void 0) return {
    kind: "no-key"
  };
  let l = `.${a}.key`,
    p = c.filter(item => item.endsWith(l)).map(g => {
      let h = j3n.exec(g);
      return h ? {
        file: g,
        pid: parseInt(h[1], 10)
      } : void 0;
    }).filter(item => item !== void 0);
  if (p.length === 0) return {
    kind: "no-key"
  };
  let k = async g => {
    let h = W() && n !== void 0 ? await we(n, g) : await al(T(i, g), R);
    if (h === null) return;
    try {
      let y = Q().safeParse(jo(h));
      return y.success ? y.data : void 0;
    } catch {
      return;
    }
  };
  if (p.length === 1) {
    let g = p[0];
    if (r?.requireLiveOwner && am(g.pid)) return {
      kind: "dead-owner"
    };
    let h = await k(g.file);
    if (h === void 0) return {
      kind: "unusable"
    };
    if (r?.requireLiveOwner) {
      let y = jD(h);
      if (y !== void 0) {
        let E = await ad(g.pid, {
          skipCache: !0
        });
        if (E !== void 0 && !GEe(y, E)) return {
          kind: "dead-owner"
        };
      }
    }
    return {
      kind: "token",
      token: h.peerToken
    };
  }
  let S;
  for (let {
    file: file,
    pid: pid
  } of p) {
    let y = await k(file);
    if (y === void 0) continue;
    let rank = 0;
    if (!am(pid)) {
      let w = jD(y),
        x = w === void 0 ? void 0 : await ad(pid, {
          skipCache: !0
        });
      if (w === void 0 || x === void 0) rank = 1;else rank = GEe(w, x) ? 2 : 0;
    }
    if (S === void 0 || rank > S.rank) S = {
      rank: rank,
      peerToken: y.peerToken
    };
  }
  if (S === void 0) return {
    kind: "unusable"
  };
  if (r?.requireLiveOwner && S.rank === 0) return {
    kind: "dead-owner"
  };
  return {
    kind: "token",
    token: S.peerToken
  };
}
async function we(e, n) {
  try {
    let r = await e.readText([{
      key: Be.session(n),
      offset: 0,
      length: R + 1
    }]);
    if (!r.ok) return null;
    let i = r.value.items[0];
    if (!i.found || i.totalBytes > R) return null;
    return i.value;
  } catch {
    return null;
  }
}
function UNo(token) {
  return _({
    type: type,
    token: token
  }) + `
`;
}
var a2s = UNo("0".repeat(v * 2)).length;
function l2s(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === type;
}
function d2s(e, n) {
  if (n === void 0) return;
  if (BD(e, n.peerToken)) return "peer";
  if (BD(e, n.childToken)) return "child";
  return;
}
function PJ() {
  let {
    getFeatureValue_SESSION_PINNED: getFeatureValue_SESSION_PINNED
  } = import.meta.require("B:/~BUN/root/chunk-xvnv0v80.js");
  try {
    return getFeatureValue_SESSION_PINNED("tengu_session_stable_address", !1);
  } catch {
    return !1;
  }
}
var ee = "sid:";
function zUt(e) {
  return `${ee}${e}`;
}
function _yt(e) {
  return e.startsWith(ee);
}
function aQe(e) {
  return !_yt(e.sock);
}
function FFr(e) {
  let n = typeof e === "string" ? e.trim() : "",
    r = Mge(n);
  return !n || !r || r === "untitled session" && n.toLowerCase() !== "untitled session";
}
function zWe(e) {
  return e.environmentKind !== void 0 && e.environmentKind !== "bridge";
}
function HFr(e) {
  return !zWe(e) && e.connected === !1;
}
function lo(e) {
  return e.normalize("NFKC").replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, n => /\s/.test(n) ? n : "").trim().toLowerCase().replace(/\s+/g, "-");
}
function c2s(e) {
  return th(lo(e)) !== null;
}
function lQe(e) {
  return typeof e !== "string" || qO(e);
}
function byt(e, n) {
  return e.name === Oa && n !== void 0 && e.agentId === n;
}
function Zte(e) {
  let teamContext = e.teamContext;
  if (teamContext?.leadAgentId && teamContext.isLeader !== !1) return teamContext.leadAgentId;
  let r = id(teamContext);
  return r ? TB(Oa, r) : void 0;
}
function dQe(e, n) {
  return e.members.filter(item => byt(item, n) || !lQe(item.name));
}
function qO(e) {
  let n = lo(e);
  return n === name || n === Oa || n === WMe || n === kyt || th(n) !== null;
}
var M = 6,
  BNo = 12,
  BMe = `[0-9a-f]{${M},${BNo}}`,
  regExp_2 = new RegExp(`^(.*\\S)\\s*\\[(${BMe})\\]$`);
function d4(e) {
  let n = regExp_2.exec(e.trim());
  return n ? {
    name: n[1],
    ref: n[2]
  } : null;
}
function c4(e, n) {
  let r = [];
  r.push({
    name: name,
    id: Ze(),
    kind: "main",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  let i = new Set();
  for (let [id_2, m] of Object.entries(e.teamContext?.teammates ?? {})) i.add(id_2), r.push({
    name: m.name,
    id: id_2,
    kind: "teammate",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  for (let [name_2, id_3] of e.agentNameRegistry) {
    let b = e.tasks[id_3],
      A = b?.type === "local_agent" ? b : void 0;
    r.push({
      name: name_2,
      id: id_3,
      kind: "subagent",
      where: "in-process",
      lastActive: A?.startTime,
      sock: void 0
    });
  }
  for (let s of n.teamFile?.members ?? []) {
    if (i.has(s.agentId)) continue;
    i.add(s.agentId), r.push({
      name: s.name,
      id: s.agentId,
      kind: "teammate",
      where: "this-machine",
      lastActive: void 0,
      sock: void 0
    });
  }
  let c = PJ(),
    a = n.sessions.filter(aQe),
    l = c ? re(a) : void 0,
    p = c ? se(K(), a, l) : void 0;
  for (let s of a) {
    let m = l?.get(s)?.claims;
    r.push({
      name: s.name || Ie(s.cwd),
      id: s.sock,
      kind: "session",
      where: "this-machine",
      lastActive: s.statusUpdatedAt,
      sock: s.sock,
      ...(m !== void 0 && m.size > 0 && {
        claimedSessionIds: [...m].sort()
      }),
      ...(c && s.sessionId !== void 0 && !p.has(s.sessionId) && {
        stableId: zUt(s.sessionId)
      }),
      ...(c && s.nameSource === "derived" && {
        derivedName: !0
      }),
      ...(s.hostSessionId !== void 0 && {
        hostSessionId: s.hostSessionId
      })
    });
  }
  let k = new Map();
  for (let s of n.sessions) if (s.bridgeSessionId !== void 0) {
    let m = er(s.bridgeSessionId);
    k.set(m, [...(k.get(m) ?? []), s.sock]);
  }
  let S = [];
  for (let s of n.cloud ?? []) {
    if (Ncn(n.sessions, s.id)) {
      S.push({
        rawName: s.title || "untitled",
        socks: k.get(er(s.id)) ?? []
      });
      continue;
    }
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "cloud-session",
      ...(FFr(s.title) && {
        derivedName: !0
      }),
      ...(s.acceptsPeerMessages === !0 && {
        reportsInbound: !0
      }),
      where: s.remoteControl ? "remote" : "cloud",
      lastActive: s.lastActive,
      sock: void 0,
      ...(s.offline && {
        offline: !0
      })
    });
  }
  let g = new Set((n.cloud ?? []).map(item => er(item.id))),
    h = VUt(n.sessions);
  for (let s of n.bridge ?? []) {
    let m = er(s.id);
    if (g.has(m)) continue;
    if (h.has(m)) {
      S.push({
        rawName: s.title || "untitled",
        socks: k.get(m) ?? []
      });
      continue;
    }
    let b = Date.parse(s.updated_at);
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "bridge-session",
      ...(FFr(s.title) && {
        derivedName: !0
      }),
      ...(s.acceptsPeerMessages === !0 && {
        reportsInbound: !0
      }),
      ...(s.inboundReportUnavailable && {
        inboundReportUnavailable: !0
      }),
      where: zWe(s) ? "cloud" : "remote",
      lastActive: Number.isNaN(b) ? void 0 : b,
      sock: void 0,
      ...(HFr(s) && {
        offline: !0
      })
    });
  }
  let y = Zte(e),
    E = r.flatMap(item => {
      let name_3 = Mge(item.name);
      if (name_3 === null || !F(name_3)) return [];
      let b = item.kind === "main" || item.kind === "teammate" && byt({
          name: item.name,
          agentId: item.id
        }, y),
        A = (item.kind === "session" || item.kind === "cloud-session" || item.kind === "bridge-session") && lo(name_3) === name;
      return b || A || !lQe(name_3) ? [{
        ...item,
        name: name_3
      }] : [];
    }),
    w = new Set(),
    candidates = _e(E.filter(item => {
      if (item.kind !== "session") return !0;
      let m = `${lo(item.name)}\x00${ZC(item.id) ?? item.id}`;
      if (w.has(m)) return !1;
      return w.add(m), !0;
    })),
    byName = new Map();
  for (let s of candidates) {
    let m = lo(s.name),
      b = byName.get(m);
    if (b) b.push(s);else byName.set(m, [s]);
  }
  let remoteNamesClaimedLocally = new Map();
  for (let {
    rawName: rawName,
    socks: socks
  } of S) {
    let b = Mge(rawName);
    if (b === null || !F(b)) continue;
    let A = lo(b),
      B = remoteNamesClaimedLocally.get(A) ?? new Set();
    for (let ie of socks) B.add(ie);
    remoteNamesClaimedLocally.set(A, B);
  }
  return {
    candidates: candidates,
    byName: byName,
    remoteNamesClaimedLocally: remoteNamesClaimedLocally
  };
}
function Syt(e, n, r) {
  let i = e.get(n);
  if (!i || i.length === 0) return;
  let c = r === void 0 ? [] : i.filter(item => item.name === r),
    candidate = (c.length > 0 ? c : i)[0];
  if (candidate.where === "in-process") return {
    kind: "one",
    candidate: candidate
  };
  return {
    kind: "ambiguous"
  };
}
function BEe(e) {
  return `${e.name} [${e.ref}]`;
}
function $Fr(e) {
  return e === "remote" ? `${UFr(e)} (Remote Control)` : UFr(e);
}
function UFr(e) {
  switch (e) {
    case "in-process":
      return "in this session";
    case "cloud":
      return "in the cloud";
    case "remote":
      return "on another machine";
    case "this-machine":
      return "on this machine";
  }
}
function Mcn(e, n) {
  let r = e.kind === "main" ? "main conversation" : e.kind === "session" || e.kind === "cloud-session" || e.kind === "bridge-session" ? "Claude session" : e.kind,
    i = $Fr(e.where),
    c = e.lastActive === void 0 ? "" : `, ${e.kind === "subagent" ? "started" : "active"} ${rn(Math.max(0, n - e.lastActive), {
      mostSignificantOnly: !0
    })} ago`;
  return `${BEe(e)} \u2014 ${r}, ${i}${c}`;
}
var Te = KO;
function Mge(e) {
  if (typeof e !== "string") return null;
  return [...e.replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, r => /\s/.test(r) ? r : "").replace(/\s+/g, " ").trim()].slice(0, Te).join("").trim() || "untitled session";
}
function V3n(e, n) {
  return e.find(item => item.name === n) ?? e.find(item => Mge(item.name) === n);
}
function jMe(e) {
  let n = Mge(e);
  return n !== null && !GUt(n) && ZN(n) ? n : null;
}
function Dcn(e) {
  let n = Mge(e);
  return n !== null && F(n) && !qO(n) ? n : null;
}
function F(e) {
  return !GUt(e) && ZN(e) && !e.includes("@") && e !== "*";
}
function GUt(e) {
  let n = lo(e);
  return gy(e).scheme !== "other" || gy(n).scheme !== "other" || qNo(e) || qNo(n);
}
function _e(e) {
  let n = e.map(item => N(item.kind, Lcn(item))),
    r = xe().map(item => N("session", item)),
    i = L([...n, ...r]).sort(),
    c = new Map();
  for (let a = 0; a < i.length; a++) {
    let l = i[a],
      p = Math.max(a > 0 ? ne(l, i[a - 1]) : 0, a + 1 < i.length ? ne(l, i[a + 1]) : 0);
    c.set(l, Math.min(l.length, Math.max(M, p + 1)));
  }
  return e.map((item, index) => {
    let p = n[index];
    return {
      ...item,
      ref: p.slice(0, c.get(p))
    };
  });
}
function ne(e, n) {
  let r = 0;
  while (r < e.length && r < n.length && e[r] === n[r]) r++;
  return r;
}
function N(e, n) {
  return String(an(`${e}:${n}`));
}
function Lcn(e) {
  return e.stableId ?? e.id;
}
function xe() {
  let CLAUDE_CODE_MESSAGING_SOCKET = oC.CLAUDE_CODE_MESSAGING_SOCKET;
  return CLAUDE_CODE_MESSAGING_SOCKET === void 0 ? [] : te(CLAUDE_CODE_MESSAGING_SOCKET);
}
function jNo(e) {
  return PJ() ? zUt(K()) : e;
}
function te(e) {
  let n = jNo(e);
  return n === e ? [e] : [n, e];
}
function WNo(e, n) {
  return te(n).some(item => Re(e, "session", item));
}
function re(e) {
  let n = [];
  for (let i of e) {
    let c = n.filter(item => item.records.some(item => Nle(item.sock, i.sock))),
      a = {
        records: [],
        claims: new Set()
      };
    for (let l of c) {
      a.records.push(...l.records);
      for (let p of l.claims) a.claims.add(p);
    }
    if (a.records.push(i), i.sessionId !== void 0) a.claims.add(i.sessionId);
    n = n.filter(item => !c.includes(item)), n.push(a);
  }
  let r = new Map();
  for (let i of n) for (let c of i.records) r.set(c, i);
  return r;
}
function se(e, n, r) {
  let i = new Set([e]),
    c = new Set();
  for (let a of n) {
    if (a.sessionId === void 0) continue;
    if (i.has(a.sessionId)) c.add(a.sessionId);
    i.add(a.sessionId);
  }
  for (let a of new Set(r.values())) if (a.records.length > 1) for (let l of a.claims) c.add(l);
  return c;
}
function u2s(e, sock, r) {
  if (r) return !0;
  let sessionId = K(),
    c = e.filter(aQe);
  if (sock !== void 0) c.push({
    sock: sock,
    sessionId: sessionId
  });
  let a = re(c);
  return se("", c, a).has(sessionId);
}
function cQe(e, n) {
  return N(e, n).slice(0, M);
}
function Re(e, n, r) {
  return e.length >= M && N(n, r).startsWith(e);
}
function VUt(e) {
  return new Set(e.flatMap(item => item.bridgeSessionId ? [er(item.bridgeSessionId)] : []));
}
function Ncn(e, n) {
  let r = er(n);
  return e.some(item => item.bridgeSessionId !== void 0 && er(item.bridgeSessionId) === r);
}
export { gyt, LFr, Ole, n2s, hyt, name as Sh, UEe, yyt, NFr, j3n, W3n, r2s, z3n, Qte, ZC, o2s, G3n, s2s, i2s, UNo, a2s, l2s, d2s, PJ, zUt, _yt, aQe, FFr, zWe, HFr, lo, c2s, lQe, byt, Zte, dQe, qO, BNo, BMe, d4, c4, Syt, BEe, $Fr, UFr, Mcn, Mge, V3n, jMe, Dcn, GUt, Lcn, jNo, WNo, u2s, cQe, VUt, Ncn };