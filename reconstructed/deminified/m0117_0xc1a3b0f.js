// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { sH, gj, y1t, umt, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Do, D$e, FNo } from "B:/~BUN/root/chunk-9xz983aj.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { iE } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y, qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { zh } from "B:/~BUN/root/chunk-54p0h65d.js";
import { b, Vo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Gw } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Hh, R$e, Dv, Mx, oY, $c } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { cl, uC, wD, mi, yye, e5e, R$r, lh, IN, hJ, q4n, nY } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { MI, vD } from "B:/~BUN/root/chunk-3hn9fzjy.js";
import { pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { ca } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { cp, Ks } from "B:/~BUN/root/chunk-1652axk8.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
var tags = [gj, sH, y1t],
  ve = [...umt, "system-reminder"],
  D;
function K() {
  return D ??= FNo([{
    tags: tags
  }]), D;
}
function KYe(e) {
  return K().neutralize(e);
}
function U4n(e) {
  return K().openerOffsets(e);
}
var regExp = new RegExp(`[${D$e.open}]`, "u");
function z(e) {
  return regExp.test(e) || e.includes("\\u");
}
var oe = /^\s*(?:\{\s*["}]|\[\s*(?:["{[\]\d-]|true\b|false\b|null\b))/,
  ae = new Map([['"', '"'], ["\\", "\\"], ["/", "/"], ["b", "\b"], ["f", "\f"], ["n", `
`], ["r", "\r"], ["t", "\t"]]);
function j(e, n) {
  let r = n,
    i = 1;
  while (i % 2 === 1) {
    if (r = e.indexOf('"', r + 1), r === -1) return -1;
    i = 0;
    while (e.charCodeAt(r - i - 1) === 92) i++;
  }
  return r;
}
function de(e) {
  let n = [],
    r = e.indexOf('"');
  while (r !== -1) {
    let i = j(e, r);
    if (i === -1) {
      n.push([r + 1, e.length]);
      break;
    }
    n.push([r + 1, i]), r = e.indexOf('"', i + 1);
  }
  return n;
}
function ue(e) {
  if (oe.test(e)) return !0;
  let n = e.search(/\S/),
    r = e[n] === '"' ? j(e, n) : -1;
  return r !== -1 && e.slice(r + 1).trim() === "";
}
function ce(e, n, r) {
  let value = "",
    starts = [],
    ends = [];
  for (let c = n; c < r;) {
    let g = e[c],
      S = 1;
    if (g === "\\" && c + 1 < r) {
      let k = ae.get(e[c + 1]),
        p = e.slice(c + 2, c + 6);
      if (k !== void 0) g = k, S = 2;else if (e[c + 1] === "u" && c + 6 <= r && /^[0-9a-fA-F]{4}$/.test(p)) g = String.fromCharCode(parseInt(p, 16)), S = 6;
    }
    value += g, starts.push(c), ends.push(c + S), c += S;
  }
  return {
    value: value,
    starts: starts,
    ends: ends
  };
}
function fe(e) {
  let n = new Map();
  for (let d of U4n(e)) n.set(d, {
    end: d + 1,
    keepsOpener: e[d] === "<"
  });
  for (let [d, a] of de(e)) {
    if (!z(e.slice(d, a))) continue;
    let {
      value: value_2,
      starts: starts_2,
      ends: ends_2
    } = ce(e, d, a);
    for (let k of U4n(value_2)) n.set(starts_2[k], {
      end: ends_2[k],
      keepsOpener: value_2[k] === "<"
    });
  }
  let r = "",
    i = 0;
  for (let d of [...n.keys()].sort((itemA, itemB) => itemA - itemB)) {
    let {
      end: end,
      keepsOpener: keepsOpener
    } = n.get(d);
    r += e.slice(i, keepsOpener ? end : d) + (keepsOpener ? "\\\\" : "<\\\\"), i = end;
  }
  return r + e.slice(i);
}
function YYe(e) {
  if (!z(e)) return e;
  return ue(e) ? fe(e) : KYe(e);
}
var name = "main";
function Fce(e, n) {
  return `<${y1t} from="${Do(e)}">
${lpt(n)}
</${y1t}>`;
}
function lpt(e) {
  return YYe(e);
}
async function B4n(e, n) {
  let r = [],
    i;
  try {
    i = await Ks(cursor => e.listEntries({
      namespace: "session"
    }, {
      cursor: cursor,
      skipKeyStats: !0
    }), d => {
      for (let a of d) if (a.kind === "key" && a.key.namespace === "session") r.push(a.key.file);
    });
  } catch (error) {
    n.onIssue?.(`failed: ${l(error)}`);
    return;
  }
  switch (i.status) {
    case "done":
      return r;
    case "error":
      n.onIssue?.(`failed: ${rt(i.error)}`);
      return;
    case "capped":
      return n.onIssue?.(`truncated at ${cp} pages; ${r.length} names seen`, "warn"), n.partialOnCap ? r : void 0;
  }
}
import { createHash as le, randomBytes as U } from "crypto";
import { mkdir as me, readdir as q, unlink as v } from "fs/promises";
import { basename as pe, join as _, resolve as ge } from "path";
var type = "auth",
  Qpn = /^(\d+)\.[0-9a-f]{64}\.key$/,
  ke = /^(\d+)\.[0-9a-f]{64}\.key\.tmp\.[0-9a-f]+$/,
  C = 16,
  he = /^[0-9a-f]{32}$/,
  x = 4096,
  W = f(() => u({
    peerToken: o().regex(he),
    procStart: o().optional(),
    procStartFt: o().optional(),
    pidDomain: o().optional()
  }));
function Zpn() {
  return O() === "windows";
}
function PLo() {
  return {
    peerToken: U(C).toString("hex"),
    childToken: U(C).toString("hex")
  };
}
var efn = 25;
function i2() {
  return _(Se(), "sessions");
}
function xv(e) {
  let n = nY(e);
  if (n !== void 0) return `\\\\.\\pipe\\${q4n(n)}`;
  if (zh(e)) return;
  return ge(e);
}
function J(e) {
  let n = xv(e);
  return n === void 0 ? void 0 : le("sha256").update(n).digest("hex");
}
function Q(e, n) {
  let r = J(n);
  if (r === void 0) throw Error("refusing to derive a messaging key name for a non-canonical socket path");
  return `${e}.${r}.key`;
}
async function ILo(e, peerToken, r, {
  sweepPermitted: sweepPermitted
}) {
  if (H() && r !== void 0) return ye(r, e, peerToken);
  let d = i2();
  await me(d, {
    recursive: !0,
    mode: 448
  }), await be(d, sweepPermitted);
  let a = _(d, Q(process.pid, e));
  try {
    await v(a);
  } catch {}
  return await Cn(a, b({
    peerToken: peerToken,
    ...oY(await Dv()),
    pidDomain: await MI()
  }), 384), a;
}
async function ye(e, n, peerToken_2) {
  let i = Q(process.pid, n),
    d = await e.ensureScope({
      namespace: "session"
    });
  if (!d.ok) throw t(`[uds-auth] sessions scope unavailable: ${rt(d.error)}`), Error("messaging key folder could not be made through storage");
  try {
    await e.delete(Ae.session(i));
  } catch {}
  let a = await e.write(Ae.session(i), b({
    peerToken: peerToken_2,
    ...oY(await Dv()),
    pidDomain: await MI()
  }), {
    publishDiscipline: "atomic",
    mode: 384,
    exactMode: 384
  });
  if (!a.ok) throw t(`[uds-auth] key publish failed: ${rt(a.error)}`), Error("messaging key could not be published through storage");
  return _(i2(), i);
}
async function tfn(e) {
  try {
    let n = await cl(e, x);
    if (n === null) return;
    let r = W().safeParse(Vo(n));
    return r.success ? r.data.pidDomain : void 0;
  } catch {
    return;
  }
}
async function be(e, n) {
  if (!n) return;
  let r;
  try {
    r = await q(e);
  } catch {
    return;
  }
  let i = await MI();
  await Promise.all(r.map(async item => {
    let a = ke.exec(item);
    if (!a || !Hh(parseInt(a[1], 10))) return;
    let c = await tfn(_(e, item));
    if (c !== void 0 && c !== i) return;
    try {
      await v(_(e, item));
    } catch {}
  }));
}
async function OLo(e, n) {
  if (H() && n !== void 0) {
    try {
      await n.delete(Ae.session(pe(e)));
    } catch {}
    return;
  }
  try {
    await v(e);
  } catch {}
}
async function MLo(e, n, r) {
  let i = i2(),
    d;
  if (H() && n !== void 0) {
    let p = await B4n(n, {
      partialOnCap: !1
    });
    if (p === void 0) return {
      kind: "unusable"
    };
    d = p;
  } else try {
    d = await q(i);
  } catch (error) {
    return B(error) ? {
      kind: "no-key"
    } : {
      kind: "unusable"
    };
  }
  let a = J(e);
  if (a === void 0) return {
    kind: "no-key"
  };
  let c = `.${a}.key`,
    g = d.filter(item => item.endsWith(c)).map(p => {
      let h = Qpn.exec(p);
      return h ? {
        file: p,
        pid: parseInt(h[1], 10)
      } : void 0;
    }).filter(item => item !== void 0);
  if (g.length === 0) return {
    kind: "no-key"
  };
  let S = async p => {
    let h = H() && n !== void 0 ? await Ee(n, p) : await cl(_(i, p), x);
    if (h === null) return;
    try {
      let E = W().safeParse(Vo(h));
      return E.success ? E.data : void 0;
    } catch {
      return;
    }
  };
  if (g.length === 1) {
    let p = g[0];
    if (r?.requireLiveOwner && Hh(p.pid)) return {
      kind: "dead-owner"
    };
    let h = await S(p.file);
    if (h === void 0) return {
      kind: "unusable"
    };
    if (r?.requireLiveOwner) {
      let E = Mx(h);
      if (E !== void 0) {
        let w = await $c(p.pid, {
          skipCache: !0
        });
        if (w !== void 0 && !R$e(E, w)) return {
          kind: "dead-owner"
        };
      }
    }
    return {
      kind: "token",
      token: h.peerToken
    };
  }
  let k;
  for (let {
    file: file,
    pid: pid
  } of g) {
    let E = await S(file);
    if (E === void 0) continue;
    let rank = 0;
    if (!Hh(pid)) {
      let I = Mx(E),
        R = I === void 0 ? void 0 : await $c(pid, {
          skipCache: !0
        });
      if (I === void 0 || R === void 0) rank = 1;else rank = R$e(I, R) ? 2 : 0;
    }
    if (k === void 0 || rank > k.rank) k = {
      rank: rank,
      peerToken: E.peerToken
    };
  }
  if (k === void 0) return {
    kind: "unusable"
  };
  if (r?.requireLiveOwner && k.rank === 0) return {
    kind: "dead-owner"
  };
  return {
    kind: "token",
    token: k.peerToken
  };
}
async function Ee(e, n) {
  try {
    let r = await e.readText([{
      key: Ae.session(n),
      offset: 0,
      length: x + 1
    }]);
    if (!r.ok) return null;
    let i = r.value.items[0];
    if (!i.found || i.totalBytes > x) return null;
    return i.value;
  } catch {
    return null;
  }
}
function b$r(token) {
  return b({
    type: type,
    token: token
  }) + `
`;
}
var DLo = b$r("0".repeat(C * 2)).length;
function LLo(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === type;
}
function NLo(e, n) {
  if (n === void 0) return;
  if (vD(e, n.peerToken)) return "peer";
  if (vD(e, n.childToken)) return "child";
  return;
}
function Nq() {
  let {
    getFeatureValue_SESSION_PINNED: getFeatureValue_SESSION_PINNED
  } = import.meta.require("B:/~BUN/root/chunk-7qwqa2vj.js");
  try {
    return getFeatureValue_SESSION_PINNED("tengu_session_stable_address", !1);
  } catch {
    return !1;
  }
}
var Z = "sid:";
function cpt(e) {
  return `${Z}${e}`;
}
function XYe(e) {
  return e.startsWith(Z);
}
function f$e(e) {
  return !XYe(e.sock);
}
import { basename as we } from "path";
function j4n(e) {
  let n = typeof e === "string" ? e.trim() : "",
    r = one(n);
  return !n || !r || r === "untitled session" && n.toLowerCase() !== "untitled session";
}
function m$e(e) {
  return e.environmentKind !== void 0 && e.environmentKind !== "bridge";
}
function S$r(e) {
  return !m$e(e) && e.connected === !1;
}
function Rr(e) {
  return e.normalize("NFKC").replace(/[\p{Cc}\p{Cf}]/gu, n => /\s/.test(n) ? n : "").trim().toLowerCase().replace(/\s+/g, "-");
}
function g$e(e) {
  return typeof e !== "string" || II(e);
}
function JYe(e, n) {
  return e.name === mi && n !== void 0 && e.agentId === n;
}
function eY(e) {
  let teamContext = e.teamContext;
  if (teamContext?.leadAgentId && teamContext.isLeader !== !1) return teamContext.leadAgentId;
  let r = ca(teamContext);
  return r ? wD(mi, r) : void 0;
}
function h$e(e, n) {
  return e.members.filter(item => JYe(item, n) || !g$e(item.name));
}
function II(e) {
  let n = Rr(e);
  return n === name || n === mi || n === yye || n === e5e || iE(n) !== null;
}
var N = 6,
  w$r = 12,
  $ce = `[0-9a-f]{${N},${w$r}}`,
  regExp_2 = new RegExp(`^(.*\\S)\\s*\\[(${$ce})\\]$`);
function P1(e) {
  let n = regExp_2.exec(e.trim());
  return n ? {
    name: n[1],
    ref: n[2]
  } : null;
}
function I1(e, n) {
  let r = [];
  r.push({
    name: name,
    id: qe(),
    kind: "main",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  let i = new Set();
  for (let [id, m] of Object.entries(e.teamContext?.teammates ?? {})) i.add(id), r.push({
    name: m.name,
    id: id,
    kind: "teammate",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  for (let [name_2, id_2] of e.agentNameRegistry) {
    let y = e.tasks[id_2],
      A = y?.type === "local_agent" ? y : void 0;
    r.push({
      name: name_2,
      id: id_2,
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
  let d = Nq(),
    a = n.sessions.filter(f$e),
    c = d ? ne(a) : void 0,
    g = d ? te(Y(), a, c) : void 0;
  for (let s of a) {
    let m = c?.get(s)?.claims;
    r.push({
      name: s.name || we(s.cwd),
      id: s.sock,
      kind: "session",
      where: "this-machine",
      lastActive: s.statusUpdatedAt,
      sock: s.sock,
      ...(m !== void 0 && m.size > 0 && {
        claimedSessionIds: [...m].sort()
      }),
      ...(d && s.sessionId !== void 0 && !g.has(s.sessionId) && {
        stableId: cpt(s.sessionId)
      }),
      ...(d && s.nameSource === "derived" && {
        derivedName: !0
      }),
      ...(s.hostSessionId !== void 0 && {
        hostSessionId: s.hostSessionId
      })
    });
  }
  let S = new Map();
  for (let s of n.sessions) if (s.bridgeSessionId !== void 0) {
    let m = pr(s.bridgeSessionId);
    S.set(m, [...(S.get(m) ?? []), s.sock]);
  }
  let k = [];
  for (let s of n.cloud ?? []) {
    if (AFt(n.sessions, s.id)) {
      k.push({
        rawName: s.title || "untitled",
        socks: S.get(pr(s.id)) ?? []
      });
      continue;
    }
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "cloud-session",
      ...(j4n(s.title) && {
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
  let p = new Set((n.cloud ?? []).map(item => pr(item.id))),
    h = upt(n.sessions);
  for (let s of n.bridge ?? []) {
    let m = pr(s.id);
    if (p.has(m)) continue;
    if (h.has(m)) {
      k.push({
        rawName: s.title || "untitled",
        socks: S.get(m) ?? []
      });
      continue;
    }
    let y = Date.parse(s.updated_at);
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "bridge-session",
      ...(j4n(s.title) && {
        derivedName: !0
      }),
      ...(s.acceptsPeerMessages === !0 && {
        reportsInbound: !0
      }),
      ...(s.inboundReportUnavailable && {
        inboundReportUnavailable: !0
      }),
      where: m$e(s) ? "cloud" : "remote",
      lastActive: Number.isNaN(y) ? void 0 : y,
      sock: void 0,
      ...(S$r(s) && {
        offline: !0
      })
    });
  }
  let E = eY(e),
    w = r.flatMap(item => {
      let name_3 = one(item.name);
      if (name_3 === null || !F(name_3)) return [];
      let y = item.kind === "main" || item.kind === "teammate" && JYe({
          name: item.name,
          agentId: item.id
        }, E),
        A = (item.kind === "session" || item.kind === "cloud-session" || item.kind === "bridge-session") && Rr(name_3) === name;
      return y || A || !g$e(name_3) ? [{
        ...item,
        name: name_3
      }] : [];
    }),
    I = new Set(),
    candidates = Re(w.filter(item => {
      if (item.kind !== "session") return !0;
      let m = `${Rr(item.name)}\x00${xv(item.id) ?? item.id}`;
      if (I.has(m)) return !1;
      return I.add(m), !0;
    })),
    byName = new Map();
  for (let s of candidates) {
    let m = Rr(s.name),
      y = byName.get(m);
    if (y) y.push(s);else byName.set(m, [s]);
  }
  let remoteNamesClaimedLocally = new Map();
  for (let {
    rawName: rawName,
    socks: socks
  } of k) {
    let y = one(rawName);
    if (y === null || !F(y)) continue;
    let A = Rr(y),
      G = remoteNamesClaimedLocally.get(A) ?? new Set();
    for (let re of socks) G.add(re);
    remoteNamesClaimedLocally.set(A, G);
  }
  return {
    candidates: candidates,
    byName: byName,
    remoteNamesClaimedLocally: remoteNamesClaimedLocally
  };
}
function QYe(e, n, r) {
  let i = e.get(n);
  if (!i || i.length === 0) return;
  let d = r === void 0 ? [] : i.filter(item => item.name === r),
    candidate = (d.length > 0 ? d : i)[0];
  if (candidate.where === "in-process") return {
    kind: "one",
    candidate: candidate
  };
  return {
    kind: "ambiguous"
  };
}
function tY(e) {
  return `${e.name} [${e.ref}]`;
}
function W4n(e) {
  return e === "remote" ? `${z4n(e)} (Remote Control)` : z4n(e);
}
function z4n(e) {
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
function TFt(e, n) {
  let r = e.kind === "main" ? "main conversation" : e.kind === "session" || e.kind === "cloud-session" || e.kind === "bridge-session" ? "Claude session" : e.kind,
    i = W4n(e.where),
    d = e.lastActive === void 0 ? "" : `, ${e.kind === "subagent" ? "started" : "active"} ${Zt(Math.max(0, n - e.lastActive), {
      mostSignificantOnly: !0
    })} ago`;
  return `${tY(e)} \u2014 ${r}, ${i}${d}`;
}
var _e = uC;
function one(e) {
  if (typeof e !== "string") return null;
  return [...e.replace(/[\p{Cc}\p{Cf}]/gu, r => /\s/.test(r) ? r : "").replace(/\s+/g, " ").trim()].slice(0, _e).join("").trim() || "untitled session";
}
function nfn(e, n) {
  return e.find(item => item.name === n) ?? e.find(item => one(item.name) === n);
}
function sne(e) {
  let n = one(e);
  return n !== null && !dpt(n) && IN(n) ? n : null;
}
function CFt(e) {
  let n = one(e);
  return n !== null && F(n) && !II(n) ? n : null;
}
function F(e) {
  return !dpt(e) && IN(e) && !e.includes("@") && e !== "*";
}
function dpt(e) {
  let n = Rr(e);
  return lh(e).scheme !== "other" || lh(n).scheme !== "other" || R$r(e) || R$r(n);
}
function Re(e) {
  let n = e.map(item => T(item.kind, RFt(item))),
    r = xe().map(item => T("session", item)),
    i = L([...n, ...r]).sort(),
    d = new Map();
  for (let a = 0; a < i.length; a++) {
    let c = i[a],
      g = Math.max(a > 0 ? V(c, i[a - 1]) : 0, a + 1 < i.length ? V(c, i[a + 1]) : 0);
    d.set(c, Math.min(c.length, Math.max(N, g + 1)));
  }
  return e.map((item, index) => {
    let g = n[index];
    return {
      ...item,
      ref: g.slice(0, d.get(g))
    };
  });
}
function V(e, n) {
  let r = 0;
  while (r < e.length && r < n.length && e[r] === n[r]) r++;
  return r;
}
function T(e, n) {
  return String(pn(`${e}:${n}`));
}
function RFt(e) {
  return e.stableId ?? e.id;
}
function xe() {
  let CLAUDE_CODE_MESSAGING_SOCKET = Gw.CLAUDE_CODE_MESSAGING_SOCKET;
  return CLAUDE_CODE_MESSAGING_SOCKET === void 0 ? [] : ee(CLAUDE_CODE_MESSAGING_SOCKET);
}
function v$r(e) {
  return Nq() ? cpt(Y()) : e;
}
function ee(e) {
  let n = v$r(e);
  return n === e ? [e] : [n, e];
}
function k$r(e, n) {
  return ee(n).some(item => Te(e, "session", item));
}
function ne(e) {
  let n = [];
  for (let i of e) {
    let d = n.filter(item => item.records.some(item => hJ(item.sock, i.sock))),
      a = {
        records: [],
        claims: new Set()
      };
    for (let c of d) {
      a.records.push(...c.records);
      for (let g of c.claims) a.claims.add(g);
    }
    if (a.records.push(i), i.sessionId !== void 0) a.claims.add(i.sessionId);
    n = n.filter(item => !d.includes(item)), n.push(a);
  }
  let r = new Map();
  for (let i of n) for (let d of i.records) r.set(d, i);
  return r;
}
function te(e, n, r) {
  let i = new Set([e]),
    d = new Set();
  for (let a of n) {
    if (a.sessionId === void 0) continue;
    if (i.has(a.sessionId)) d.add(a.sessionId);
    i.add(a.sessionId);
  }
  for (let a of new Set(r.values())) if (a.records.length > 1) for (let c of a.claims) d.add(c);
  return d;
}
function HLo(e, sock, r) {
  if (r) return !0;
  let sessionId = Y(),
    d = e.filter(f$e);
  if (sock !== void 0) d.push({
    sock: sock,
    sessionId: sessionId
  });
  let a = ne(d);
  return te("", d, a).has(sessionId);
}
function y$e(e, n) {
  return T(e, n).slice(0, N);
}
function Te(e, n, r) {
  return e.length >= N && T(n, r).startsWith(e);
}
function upt(e) {
  return new Set(e.flatMap(item => item.bridgeSessionId ? [pr(item.bridgeSessionId)] : []));
}
function AFt(e, n) {
  let r = pr(n);
  return e.some(item => item.bridgeSessionId !== void 0 && pr(item.bridgeSessionId) === r);
}
export { KYe, U4n, YYe, name as Om, Fce, lpt, B4n, Qpn, Zpn, PLo, efn, i2, xv, ILo, tfn, OLo, MLo, b$r, DLo, LLo, NLo, Nq, cpt, XYe, f$e, j4n, m$e, S$r, Rr, g$e, JYe, eY, h$e, II, w$r, $ce, P1, I1, QYe, tY, W4n, z4n, TFt, one, nfn, sne, CFt, dpt, RFt, v$r, k$r, HLo, y$e, upt, AFt };