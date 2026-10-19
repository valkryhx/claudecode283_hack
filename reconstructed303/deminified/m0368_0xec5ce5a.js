// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { KH, GC, j$t as whenRegistered, a2, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Ti } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { KO, gy, Nle } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { lo } from "B:/~BUN/root/chunk-e4q58xft.js";
import { Ki } from "B:/~BUN/root/chunk-19m6yp46.js";
import { ph, Srn, Oee as listLive, gX } from "B:/~BUN/root/chunk-pwz0pnkt.js";
import { Kte, t2s } from "B:/~BUN/root/chunk-61xa715y.js";
var M = 16,
  Y = 64;
function P(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "",
    i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid;
}
function L(e, n, s) {
  return n.filter(item => item.pid !== s && item.name !== void 0 && item.procStart !== void 0 && lo(item.name) === e);
}
function D(e) {
  return new Set(e.flatMap(item => item.name === void 0 ? [] : [lo(item.name)]));
}
function O(e, n, s = Kte) {
  let i = r => `${ne(e, KO - r.length - 1)}-${r}`;
  for (let r = 0; r < M; r++) {
    let o = i(s());
    if (!n.has(lo(o))) return o;
  }
  for (let r = 2;; r++) {
    let o = i(`${s()}-${r}`);
    if (!n.has(lo(o))) return o;
  }
}
function B(e) {
  let {
      desiredName: desiredName,
      self: self,
      live: live,
      moment: moment,
      slug: slug
    } = e,
    u = e.suffixBase ?? desiredName,
    p = lo(desiredName);
  if (!p) return {
    kind: "keep"
  };
  let l = L(p, live, self.pid),
    holders = moment === "rename" ? l : moment === "startup" ? l.filter(item => P(item, self)) : l.filter(item => P({
      ...item,
      startedAt: item.nameSince ?? item.startedAt
    }, {
      ...self,
      startedAt: self.nameSince ?? self.startedAt
    }));
  if (holders.length === 0) return {
    kind: "keep"
  };
  return {
    kind: "yield",
    newName: O(u, D(live), slug),
    holders: holders
  };
}
class b {
  correspondents = new Map();
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = Me();
  pendingYield = void 0;
  noteCorrespondent(e, pid, procStart) {
    if (!e || gy(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, {
      pid: pid,
      procStart: procStart
    }), this.correspondents.size > Y) {
      let i = this.correspondents.keys().next().value;
      if (i !== void 0) this.correspondents.delete(i);
    }
  }
  announceYield(e, n) {
    this.pendingYield = [e, n], this.yielded.emit(e, n);
  }
  reset() {
    this.correspondents.clear(), this.lastYield = void 0, this.yielded.clear(), this.pendingYield = void 0, this.senderMode = null, this.userTypedName = void 0, this.hasAdopter = !1;
  }
}
var F = new z(() => new b());
function IE() {
  return F.of(j().host);
}
function Fyo() {
  let e = GC();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && IE().userTypedName === e.name ? e.name : void 0;
}
function Hyo(e, n, s) {
  IE().noteCorrespondent(e, n, s);
}
function Xkr() {
  let e = IE(),
    pendingYield = e.pendingYield;
  return e.pendingYield = void 0, pendingYield;
}
var v = {
  whenRegistered: whenRegistered,
  listLive: listLive
};
function x() {
  return E("tengu_session_name_uniqueness", !0);
}
async function oen(e, moment_2, s = v, suffixBase = e) {
  if (!x()) return {
    name: e,
    yielded: !1
  };
  if (suffixBase = N(suffixBase) ?? suffixBase, !(await s.whenRegistered())) return {
    name: e,
    yielded: !1
  };
  try {
    let live_2 = await s.listLive(),
      self_2 = live_2.find(item => item.pid === process.pid);
    if (!self_2) return {
      name: e,
      yielded: !1
    };
    let u = B({
      desiredName: e,
      self: self_2,
      live: live_2,
      moment: moment_2,
      slug: s.slug,
      suffixBase: suffixBase
    });
    if (u.kind === "keep") return {
      name: e,
      yielded: !1
    };
    let p = U(e, self_2),
      name = Ti(p !== void 0 && lo(p) !== lo(e) ? p : u.newName) || u.newName;
    return t(`[session-name] "${e}" is held by live pid ${u.holders[0]?.pid}; this session takes "${name}"`, {
      level: "info"
    }), g("session_name_collision"), IE().lastYield = {
      base: lo(suffixBase),
      name: name
    }, {
      name: name,
      yielded: !0
    };
  } catch (error) {
    return t(`[session-name] uniqueness check failed, keeping "${e}": ${d(error)}`, {
      level: "warn"
    }), m("session_name_collision", "check_failed"), {
      name: e,
      yielded: !1
    };
  }
}
function U(e, n) {
  let s = Y3e(e, n.name);
  if (s !== void 0) return s;
  let i = n.name,
    r = i === void 0 ? void 0 : A(i);
  if (i === void 0 || r === void 0) return;
  let o = N(e) ?? e,
    u = ne(o, KO - r.suffix.length - 1);
  return r.base.toLowerCase() === u.toLowerCase() ? i : void 0;
}
function A(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !t2s(n[1].toLowerCase())) return;
  let base = e.slice(0, e.length - n[0].length);
  return base.length > 0 ? {
    base: base,
    suffix: n[0].slice(1)
  } : void 0;
}
function Y3e(e, n) {
  if (!x()) return;
  let lastYield = IE().lastYield,
    i = N(e) ?? e;
  return lastYield !== void 0 && n !== void 0 && lo(lastYield.name) === lo(n) && lastYield.base === lo(i) ? n : void 0;
}
function w(e) {
  let n = GC();
  return n !== void 0 && lo(n.name) === lo(e);
}
function N(e) {
  return A(e)?.base;
}
var I = 3000;
function T(e) {
  setTimeout(e, I).unref();
}
async function $yo(e) {
  let {
      sessionNameArg: sessionNameArg,
      interactive: interactive,
      writeName: writeName,
      onRenamed: onRenamed,
      deps: deps
    } = e,
    u = e.scheduleRecheck ?? T;
  if (sessionNameArg && interactive) IE().userTypedName = sessionNameArg;
  if (sessionNameArg) await writeName(sessionNameArg, e.sessionNameArgSource ?? "user");
  let p = GC();
  if (!interactive || !p || p.source === "derived") return;
  let l = async (a, c, S = a) => {
    if (c && !w(a)) return;
    let f = await oen(a, c ? "recheck" : "startup", deps, S);
    if (!w(a)) return;
    if (!f.yielded) {
      if (!c) u(() => void l(a, !0));
      return;
    }
    if (IE().userTypedName === a) IE().userTypedName = f.name;
    if (await writeName(f.name, "collision"), onRenamed?.(f.name, a), IE().announceYield(f.name, a), !c) u(() => void l(f.name, !0, a));
  };
  await l(p.name, !1);
}
function XUn(e) {
  let {
      name: name_2,
      onYield: onYield,
      deps: deps_2
    } = e,
    r = e.suffixBase ?? name_2;
  (e.scheduleRecheck ?? T)(() => {
    (async () => {
      if (!w(name_2)) return;
      let u = await oen(name_2, "recheck", deps_2, r);
      if (!u.yielded || !w(name_2)) return;
      if (IE().userTypedName === name_2) IE().userTypedName = u.name;
      await onYield(u.name, name_2);
    })();
  });
}
function Jkr(e, n, s) {
  let i = GC();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && Y3e(e?.name ?? n, i.name) !== void 0) return;
  let r = lo(i.name);
  if (e !== void 0 && r === lo(e.name) || r === lo(n) || r === lo(s)) return;
  return i;
}
async function jwe(e, n, s = {}) {
  let deps_3 = s.deps ?? v,
    r = e ? Ti(e) : "";
  if (!r) return;
  let o = KH(),
    adoptions = o.adoptions,
    p = ++o.restores,
    l = () => o.adoptions === adoptions && (!s.yieldToLaterRestore || o.restores === p);
  if (!(await deps_3.whenRegistered()) || !l()) return;
  if (s.autoOnly) {
    await a2(r, n, "auto");
    return;
  }
  let a = GC();
  if (a !== void 0 && a.source !== "auto" && a.source !== "derived" && lo(a.name) === lo(r)) return;
  let c = await oen(r, "rename", deps_3);
  if (!l() || Jkr(a, r, c.name)) return;
  let onYield_2 = async (f, h) => {
    await a2(f, n, "collision"), IE().announceYield(f, h);
  };
  if (!c.yielded) {
    await a2(r, n, s.source), XUn({
      name: r,
      deps: deps_3,
      onYield: onYield_2
    });
    return;
  }
  if (await a2(c.name, n, "collision"), IE().userTypedName === r) IE().userTypedName = c.name;
  if (XUn({
    name: c.name,
    suffixBase: r,
    deps: deps_3,
    onYield: onYield_2
  }), c.name === a?.name) return;
  IE().announceYield(c.name, r);
}
async function Uyo(e, n, s, i, r = Srn, o = v.listLive) {
  if (!x() || !Ki() || IE().correspondents.size === 0) return;
  let u = gX(),
    [p, l, a] = [e, n, s].map(Ti),
    c = `This session was renamed from "${p}" to "${l}" ("${a}" is held by another live session on this machine). Address this one as "${l}" from now on.`,
    S;
  try {
    S = new Map((await o(i)).map(item => [item.pid, item.sock]));
  } catch (error) {
    t(`[session-name] rename notice skipped: registry unreadable (${k(error) ?? d(error)})`);
    return;
  }
  await Promise.all([...IE().correspondents].map(async ([f, {
    pid: h,
    procStart: C
  }]) => {
    let {
      scheme: scheme,
      target: target
    } = gy(f);
    if (scheme !== "uds" || !target || u !== void 0 && Nle(target, u) || S.get(h) !== target) return;
    try {
      await r(target, c, i, l, void 0, void 0, IE().senderMode?.(), {
        trackReceipts: !1,
        expectPeerPid: h,
        ...(C !== void 0 && {
          expectPeerProcStart: C
        })
      });
    } catch (error) {
      t(`[session-name] rename notice to ${ph(f)} failed: ${k(error) ?? "send error"}`);
    }
  }));
}
export { IE, Fyo, Hyo, Xkr, oen, Y3e, $yo, XUn, Jkr, jwe, Uyo };