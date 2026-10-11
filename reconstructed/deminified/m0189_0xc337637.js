// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { D0, Rv, Out as whenRegistered, n$, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Z6, xLo } from "B:/~BUN/root/chunk-jd3kqn1r.js";
import { li } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { uC, lh, hJ } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Rr } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { Ws } from "B:/~BUN/root/chunk-mmnpv22v.js";
import { Uf, KOt, N3 as listLive, LV } from "B:/~BUN/root/chunk-affnknva.js";
var Y = 16,
  E = 64;
function P(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "",
    i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid;
}
function L(e, n, s) {
  return n.filter(item => item.pid !== s && item.name !== void 0 && item.procStart !== void 0 && Rr(item.name) === e);
}
function D(e) {
  return new Set(e.flatMap(item => item.name === void 0 ? [] : [Rr(item.name)]));
}
function O(e, n, s = Z6) {
  let i = r => `${re(e, uC - r.length - 1)}-${r}`;
  for (let r = 0; r < Y; r++) {
    let o = i(s());
    if (!n.has(Rr(o))) return o;
  }
  for (let r = 2;; r++) {
    let o = i(`${s()}-${r}`);
    if (!n.has(Rr(o))) return o;
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
    d = e.suffixBase ?? desiredName,
    p = Rr(desiredName);
  if (!p) return {
    kind: "keep"
  };
  let c = L(p, live, self.pid),
    holders = moment === "rename" ? c : moment === "startup" ? c.filter(item => P(item, self)) : c.filter(item => P({
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
    newName: O(d, D(live), slug),
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
    if (!e || lh(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, {
      pid: pid,
      procStart: procStart
    }), this.correspondents.size > E) {
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
var F = new q(() => new b());
function vS() {
  return F.of(j().host);
}
function zEr() {
  let e = Rv();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && vS().userTypedName === e.name ? e.name : void 0;
}
function GEr(e, n, s) {
  vS().noteCorrespondent(e, n, s);
}
function Y$n() {
  let e = vS(),
    pendingYield = e.pendingYield;
  return e.pendingYield = void 0, pendingYield;
}
var w = {
  whenRegistered: whenRegistered,
  listLive: listLive
};
function N() {
  return x("tengu_session_name_uniqueness", !0);
}
async function nIt(e, moment_2, s = w, suffixBase = e) {
  if (!N()) return {
    name: e,
    yielded: !1
  };
  if (suffixBase = C(suffixBase) ?? suffixBase, !(await s.whenRegistered())) return {
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
    let d = B({
      desiredName: e,
      self: self_2,
      live: live_2,
      moment: moment_2,
      slug: s.slug,
      suffixBase: suffixBase
    });
    if (d.kind === "keep") return {
      name: e,
      yielded: !1
    };
    let p = U(e, self_2),
      name = li(p !== void 0 && Rr(p) !== Rr(e) ? p : d.newName) || d.newName;
    return t(`[session-name] "${e}" is held by live pid ${d.holders[0]?.pid}; this session takes "${name}"`, {
      level: "info"
    }), _("session_name_collision"), vS().lastYield = {
      base: Rr(suffixBase),
      name: name
    }, {
      name: name,
      yielded: !0
    };
  } catch (error) {
    return t(`[session-name] uniqueness check failed, keeping "${e}": ${l(error)}`, {
      level: "warn"
    }), m("session_name_collision", "check_failed"), {
      name: e,
      yielded: !1
    };
  }
}
function U(e, n) {
  let s = fLe(e, n.name);
  if (s !== void 0) return s;
  let i = n.name,
    r = i === void 0 ? void 0 : A(i);
  if (i === void 0 || r === void 0) return;
  let o = C(e) ?? e,
    d = re(o, uC - r.suffix.length - 1);
  return r.base.toLowerCase() === d.toLowerCase() ? i : void 0;
}
function A(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !xLo(n[1].toLowerCase())) return;
  let base = e.slice(0, e.length - n[0].length);
  return base.length > 0 ? {
    base: base,
    suffix: n[0].slice(1)
  } : void 0;
}
function fLe(e, n) {
  if (!N()) return;
  let lastYield = vS().lastYield,
    i = C(e) ?? e;
  return lastYield !== void 0 && n !== void 0 && Rr(lastYield.name) === Rr(n) && lastYield.base === Rr(i) ? n : void 0;
}
function y(e) {
  let n = Rv();
  return n !== void 0 && Rr(n.name) === Rr(e);
}
function C(e) {
  return A(e)?.base;
}
var z = 3000;
function T(e) {
  setTimeout(e, z).unref();
}
async function VEr(e) {
  let {
      sessionNameArg: sessionNameArg,
      interactive: interactive,
      writeName: writeName,
      onRenamed: onRenamed,
      deps: deps
    } = e,
    d = e.scheduleRecheck ?? T;
  if (sessionNameArg && interactive) vS().userTypedName = sessionNameArg;
  if (sessionNameArg) await writeName(sessionNameArg, e.sessionNameArgSource ?? "user");
  let p = Rv();
  if (!interactive || !p || p.source === "derived") return;
  let c = async (a, u, g = a) => {
    if (u && !y(a)) return;
    let f = await nIt(a, u ? "recheck" : "startup", deps, g);
    if (!y(a)) return;
    if (!f.yielded) {
      if (!u) d(() => void c(a, !0));
      return;
    }
    if (vS().userTypedName === a) vS().userTypedName = f.name;
    if (await writeName(f.name, "collision"), onRenamed?.(f.name, a), vS().announceYield(f.name, a), !u) d(() => void c(f.name, !0, a));
  };
  await c(p.name, !1);
}
function Jtn(e) {
  let {
      name: name_2,
      onYield: onYield,
      deps: deps_2
    } = e,
    r = e.suffixBase ?? name_2;
  (e.scheduleRecheck ?? T)(() => {
    (async () => {
      if (!y(name_2)) return;
      let d = await nIt(name_2, "recheck", deps_2, r);
      if (!d.yielded || !y(name_2)) return;
      if (vS().userTypedName === name_2) vS().userTypedName = d.name;
      await onYield(d.name, name_2);
    })();
  });
}
function X$n(e, n, s) {
  let i = Rv();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && fLe(e?.name ?? n, i.name) !== void 0) return;
  let r = Rr(i.name);
  if (e !== void 0 && r === Rr(e.name) || r === Rr(n) || r === Rr(s)) return;
  return i;
}
async function lae(e, n, s = {}) {
  let deps_3 = s.deps ?? w,
    r = e ? li(e) : "";
  if (!r) return;
  let o = D0(),
    adoptions = o.adoptions,
    p = ++o.restores,
    c = () => o.adoptions === adoptions && (!s.yieldToLaterRestore || o.restores === p);
  if (!(await deps_3.whenRegistered()) || !c()) return;
  if (s.autoOnly) {
    await n$(r, n, "auto");
    return;
  }
  let a = Rv();
  if (a !== void 0 && a.source !== "auto" && a.source !== "derived" && Rr(a.name) === Rr(r)) return;
  let u = await nIt(r, "rename", deps_3);
  if (!c() || X$n(a, r, u.name)) return;
  let onYield_2 = async (f, S) => {
    await n$(f, n, "collision"), vS().announceYield(f, S);
  };
  if (!u.yielded) {
    await n$(r, n, s.source), Jtn({
      name: r,
      deps: deps_3,
      onYield: onYield_2
    });
    return;
  }
  if (await n$(u.name, n, "collision"), vS().userTypedName === r) vS().userTypedName = u.name;
  if (Jtn({
    name: u.name,
    suffixBase: r,
    deps: deps_3,
    onYield: onYield_2
  }), u.name === a?.name) return;
  vS().announceYield(u.name, r);
}
async function qEr(e, n, s, i, r = KOt, o = w.listLive) {
  if (!N() || !Ws() || vS().correspondents.size === 0) return;
  let d = LV(),
    [p, c, a] = [e, n, s].map(li),
    u = `This session was renamed from "${p}" to "${c}" ("${a}" is held by another live session on this machine). Address this one as "${c}" from now on.`,
    g;
  try {
    g = new Map((await o(i)).map(item => [item.pid, item.sock]));
  } catch (error) {
    t(`[session-name] rename notice skipped: registry unreadable (${v(error) ?? l(error)})`);
    return;
  }
  await Promise.all([...vS().correspondents].map(async ([f, {
    pid: S,
    procStart: k
  }]) => {
    let {
      scheme: scheme,
      target: target
    } = lh(f);
    if (scheme !== "uds" || !target || d !== void 0 && hJ(target, d) || g.get(S) !== target) return;
    try {
      await r(target, u, i, c, void 0, void 0, vS().senderMode?.(), {
        trackReceipts: !1,
        expectPeerPid: S,
        ...(k !== void 0 && {
          expectPeerProcStart: k
        })
      });
    } catch (error) {
      t(`[session-name] rename notice to ${Uf(f)} failed: ${v(error) ?? "send error"}`);
    }
  }));
}
export { vS, zEr, GEr, Y$n, nIt, fLe, VEr, Jtn, X$n, lae, qEr };