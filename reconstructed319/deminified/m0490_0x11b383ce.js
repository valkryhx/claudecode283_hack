// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, z } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { q1, RR, oet as whenRegistered, z3, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { ta, Yfe, U9i } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { CO, iS, ASe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Yo } from "B:/~BUN/root/chunk-smrt7z22.js";
import { jl } from "B:/~BUN/root/chunk-rzc1dapy.js";
import { q_, Gys, Qce as listLive, Woe } from "B:/~BUN/root/chunk-5gm1xyqv.js";
var Y = 16,
  L = 64;
function A(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "",
    i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid;
}
function E(e, n, s) {
  return n.filter(item => item.pid !== s && item.name !== void 0 && item.procStart !== void 0 && Yo(item.name) === e);
}
function D(e) {
  return new Set(e.flatMap(item => item.name === void 0 ? [] : [Yo(item.name)]));
}
function O(e, n, s = Yfe) {
  let i = r => `${Q(e, CO - r.length - 1)}-${r}`;
  for (let r = 0; r < Y; r++) {
    let u = i(s());
    if (!n.has(Yo(u))) return u;
  }
  for (let r = 2;; r++) {
    let u = i(`${s()}-${r}`);
    if (!n.has(Yo(u))) return u;
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
    c = e.suffixBase ?? desiredName,
    p = Yo(desiredName);
  if (!p) return {
    kind: "keep"
  };
  let f = E(p, live, self.pid),
    holders = moment === "rename" ? f : moment === "startup" ? f.filter(item => A(item, self)) : f.filter(item => A({
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
    newName: O(c, D(live), slug),
    holders: holders
  };
}
class T {
  correspondents = new Map();
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = De();
  pendingYield = void 0;
  noteCorrespondent(e, pid, procStart) {
    if (!e || iS(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, {
      pid: pid,
      procStart: procStart
    }), this.correspondents.size > L) {
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
var F = new W(() => new T());
function mA() {
  return F.of(H().host);
}
function Dfs() {
  let e = RR();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && mA().userTypedName === e.name ? e.name : void 0;
}
function Lfs(e, n, s) {
  mA().noteCorrespondent(e, n, s);
}
function Xlo() {
  let e = mA(),
    pendingYield = e.pendingYield;
  return e.pendingYield = void 0, pendingYield;
}
var C = {
  whenRegistered: whenRegistered,
  listLive: listLive
};
function P() {
  return v("tengu_session_name_uniqueness", !0);
}
async function DIn(e, moment_2, s = C, suffixBase = e) {
  if (!P()) return {
    name: e,
    yielded: !1
  };
  if (suffixBase = b(suffixBase) ?? suffixBase, !(await s.whenRegistered())) return {
    name: e,
    yielded: !1
  };
  try {
    let r = z(),
      live_2 = (await s.listLive()).filter(item => item.pid === process.pid || item.sessionId !== r),
      self_2 = live_2.find(item => item.pid === process.pid);
    if (!self_2) return {
      name: e,
      yielded: !1
    };
    let p = B({
      desiredName: e,
      self: self_2,
      live: live_2,
      moment: moment_2,
      slug: s.slug,
      suffixBase: suffixBase
    });
    if (p.kind === "keep") return {
      name: e,
      yielded: !1
    };
    let f = I(e, self_2),
      name = ta(f !== void 0 && Yo(f) !== Yo(e) ? f : p.newName) || p.newName;
    return t(`[session-name] "${e}" is held by live pid ${p.holders[0]?.pid}; this session takes "${name}"`, {
      level: "info"
    }), g("session_name_collision"), mA().lastYield = {
      base: Yo(suffixBase),
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
function I(e, n) {
  let s = Rft(e, n.name);
  if (s !== void 0) return s;
  let i = n.name,
    r = i === void 0 ? void 0 : R(i);
  if (i === void 0 || r === void 0) return;
  let u = b(e) ?? e,
    c = Q(u, CO - r.suffix.length - 1);
  return r.base.toLowerCase() === c.toLowerCase() ? i : void 0;
}
function R(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !U9i(n[1].toLowerCase())) return;
  let base = e.slice(0, e.length - n[0].length);
  return base.length > 0 ? {
    base: base,
    suffix: n[0].slice(1)
  } : void 0;
}
function Rft(e, n) {
  if (!P()) return;
  let lastYield = mA().lastYield,
    i = b(e) ?? e;
  return lastYield !== void 0 && n !== void 0 && Yo(lastYield.name) === Yo(n) && lastYield.base === Yo(i) ? n : void 0;
}
function x(e) {
  let n = RR();
  return n !== void 0 && Yo(n.name) === Yo(e);
}
function b(e) {
  return R(e)?.base;
}
var U = 3000;
function _(e) {
  setTimeout(e, U).unref();
}
async function Nfs(e) {
  let {
      sessionNameArg: sessionNameArg,
      interactive: interactive,
      writeName: writeName,
      onRenamed: onRenamed,
      deps: deps
    } = e,
    c = e.scheduleRecheck ?? _;
  if (sessionNameArg && interactive) mA().userTypedName = sessionNameArg;
  if (sessionNameArg) await writeName(sessionNameArg, e.sessionNameArgSource ?? "user");
  let p = RR();
  if (!interactive || !p || p.source === "derived") return;
  let f = async (o, a, S = o) => {
    if (a && !x(o)) return;
    let l = await DIn(o, a ? "recheck" : "startup", deps, S);
    if (!x(o)) return;
    if (!l.yielded) {
      if (!a) c(() => void f(o, !0));
      return;
    }
    if (mA().userTypedName === o) mA().userTypedName = l.name;
    if (await writeName(l.name, "collision"), onRenamed?.(l.name, o), mA().announceYield(l.name, o), !a) c(() => void f(l.name, !0, o));
  };
  await f(p.name, !1);
}
function g_r(e) {
  let {
      name: name_2,
      onYield: onYield,
      deps: deps_2
    } = e,
    r = e.suffixBase ?? name_2;
  (e.scheduleRecheck ?? _)(() => {
    (async () => {
      if (!x(name_2)) return;
      let c = await DIn(name_2, "recheck", deps_2, r);
      if (!c.yielded || !x(name_2)) return;
      if (mA().userTypedName === name_2) mA().userTypedName = c.name;
      await onYield(c.name, name_2);
    })();
  });
}
function Jlo(e, n, s) {
  let i = RR();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && Rft(e?.name ?? n, i.name) !== void 0) return;
  let r = Yo(i.name);
  if (e !== void 0 && r === Yo(e.name) || r === Yo(n) || r === Yo(s)) return;
  return i;
}
async function vce(e, n, s = {}) {
  let deps_3 = s.deps ?? C,
    r = e ? ta(e) : "";
  if (!r) return;
  let u = q1(),
    adoptions = u.adoptions,
    p = ++u.restores,
    f = () => u.adoptions === adoptions && (!s.yieldToLaterRestore || u.restores === p);
  if (!(await deps_3.whenRegistered()) || !f()) return;
  if (s.keepLaunchName && RR()?.givenAtLaunch) return;
  if (s.autoOnly) {
    await z3(r, n, "auto");
    return;
  }
  let o = RR();
  if (o !== void 0 && o.source !== "auto" && o.source !== "derived" && Yo(o.name) === Yo(r)) return;
  let a = await DIn(r, "rename", deps_3);
  if (!f() || Jlo(o, r, a.name)) return;
  let S = RR();
  if (s.source === "auto" && S !== void 0 && S.source !== "derived" && (S.name !== o?.name || S.source !== o.source)) return;
  let l = s.source === "auto" ? "auto" : "collision",
    onYield_2 = async (y, N) => {
      if (l === "auto" && RR()?.source !== "auto") return;
      await z3(y, n, l), mA().announceYield(y, N);
    };
  if (!a.yielded) {
    await z3(r, n, s.source), g_r({
      name: r,
      deps: deps_3,
      onYield: onYield_2
    });
    return;
  }
  if (await z3(a.name, n, l), mA().userTypedName === r) mA().userTypedName = a.name;
  if (g_r({
    name: a.name,
    suffixBase: r,
    deps: deps_3,
    onYield: onYield_2
  }), a.name === o?.name) return;
  mA().announceYield(a.name, r);
}
async function Ffs(e, n, s, i, r = Gys, u = C.listLive) {
  if (!P() || !jl() || mA().correspondents.size === 0) return;
  let c = Woe(),
    [p, f, o] = [e, n, s].map(ta),
    a = `This session was renamed from "${p}" to "${f}" ("${o}" is held by another live session on this machine). Address this one as "${f}" from now on.`,
    S;
  try {
    S = new Map((await u(i)).map(item => [item.pid, item.sock]));
  } catch (error) {
    t(`[session-name] rename notice skipped: registry unreadable (${k(error) ?? d(error)})`);
    return;
  }
  await Promise.all([...mA().correspondents].map(async ([l, {
    pid: h,
    procStart: y
  }]) => {
    let {
      scheme: scheme,
      target: target
    } = iS(l);
    if (scheme !== "uds" || !target || c !== void 0 && ASe(target, c) || S.get(h) !== target) return;
    try {
      await r(target, a, i, f, void 0, void 0, mA().senderMode?.(), {
        trackReceipts: !1,
        expectPeerPid: h,
        ...(y !== void 0 && {
          expectPeerProcStart: y
        })
      });
    } catch (error) {
      t(`[session-name] rename notice to ${q_(l)} failed: ${k(error) ?? "send error"}`);
    }
  }));
}
export { mA, Dfs, Lfs, Xlo, DIn, Rft, Nfs, g_r, Jlo, vce, Ffs };