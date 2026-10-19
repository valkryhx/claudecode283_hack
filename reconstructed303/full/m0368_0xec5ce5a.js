// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  KH,
  GC,
  j$t,
  a2,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Ti
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  KO,
  gy,
  Nle
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  lo
} from "B:/~BUN/root/chunk-e4q58xft.js";
import {
  Ki
} from "B:/~BUN/root/chunk-19m6yp46.js";
import {
  ph,
  Srn,
  Oee,
  gX
} from "B:/~BUN/root/chunk-pwz0pnkt.js";
import {
  Kte,
  t2s
} from "B:/~BUN/root/chunk-61xa715y.js";
var M = 16,
  Y = 64;

function P(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "",
    i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid
}

function L(e, n, s) {
  return n.filter((i) => i.pid !== s && i.name !== void 0 && i.procStart !== void 0 && lo(i.name) === e)
}

function D(e) {
  return new Set(e.flatMap((n) => n.name === void 0 ? [] : [lo(n.name)]))
}

function O(e, n, s = Kte) {
  let i = (r) => `${ne(e,KO-r.length-1)}-${r}`;
  for (let r = 0; r < M; r++) {
    let o = i(s());
    if (!n.has(lo(o))) return o
  }
  for (let r = 2;; r++) {
    let o = i(`${s()}-${r}`);
    if (!n.has(lo(o))) return o
  }
}

function B(e) {
  let {
    desiredName: n,
    self: s,
    live: i,
    moment: r,
    slug: o
  } = e, u = e.suffixBase ?? n, p = lo(n);
  if (!p) return {
    kind: "keep"
  };
  let l = L(p, i, s.pid),
    a = r === "rename" ? l : r === "startup" ? l.filter((c) => P(c, s)) : l.filter((c) => P({
      ...c,
      startedAt: c.nameSince ?? c.startedAt
    }, {
      ...s,
      startedAt: s.nameSince ?? s.startedAt
    }));
  if (a.length === 0) return {
    kind: "keep"
  };
  return {
    kind: "yield",
    newName: O(u, D(i), o),
    holders: a
  }
}
class b {
  correspondents = new Map;
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = Me();
  pendingYield = void 0;
  noteCorrespondent(e, n, s) {
    if (!e || gy(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, {
        pid: n,
        procStart: s
      }), this.correspondents.size > Y) {
      let i = this.correspondents.keys().next().value;
      if (i !== void 0) this.correspondents.delete(i)
    }
  }
  announceYield(e, n) {
    this.pendingYield = [e, n], this.yielded.emit(e, n)
  }
  reset() {
    this.correspondents.clear(), this.lastYield = void 0, this.yielded.clear(), this.pendingYield = void 0, this.senderMode = null, this.userTypedName = void 0, this.hasAdopter = !1
  }
}
var F = new z(() => new b);

function IE() {
  return F.of(j().host)
}

function Fyo() {
  let e = GC();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && IE().userTypedName === e.name ? e.name : void 0
}

function Hyo(e, n, s) {
  IE().noteCorrespondent(e, n, s)
}

function Xkr() {
  let e = IE(),
    n = e.pendingYield;
  return e.pendingYield = void 0, n
}
var v = {
  whenRegistered: j$t,
  listLive: Oee
};

function x() {
  return E("tengu_session_name_uniqueness", !0)
}
async function oen(e, n, s = v, i = e) {
  if (!x()) return {
    name: e,
    yielded: !1
  };
  if (i = N(i) ?? i, !await s.whenRegistered()) return {
    name: e,
    yielded: !1
  };
  try {
    let r = await s.listLive(),
      o = r.find((a) => a.pid === process.pid);
    if (!o) return {
      name: e,
      yielded: !1
    };
    let u = B({
      desiredName: e,
      self: o,
      live: r,
      moment: n,
      slug: s.slug,
      suffixBase: i
    });
    if (u.kind === "keep") return {
      name: e,
      yielded: !1
    };
    let p = U(e, o),
      l = Ti(p !== void 0 && lo(p) !== lo(e) ? p : u.newName) || u.newName;
    return t(`[session-name] "${e}" is held by live pid ${u.holders[0]?.pid}; this session takes "${l}"`, {
      level: "info"
    }), g("session_name_collision"), IE().lastYield = {
      base: lo(i),
      name: l
    }, {
      name: l,
      yielded: !0
    }
  } catch (r) {
    return t(`[session-name] uniqueness check failed, keeping "${e}": ${d(r)}`, {
      level: "warn"
    }), m("session_name_collision", "check_failed"), {
      name: e,
      yielded: !1
    }
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
  return r.base.toLowerCase() === u.toLowerCase() ? i : void 0
}

function A(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !t2s(n[1].toLowerCase())) return;
  let s = e.slice(0, e.length - n[0].length);
  return s.length > 0 ? {
    base: s,
    suffix: n[0].slice(1)
  } : void 0
}

function Y3e(e, n) {
  if (!x()) return;
  let s = IE().lastYield,
    i = N(e) ?? e;
  return s !== void 0 && n !== void 0 && lo(s.name) === lo(n) && s.base === lo(i) ? n : void 0
}

function w(e) {
  let n = GC();
  return n !== void 0 && lo(n.name) === lo(e)
}

function N(e) {
  return A(e)?.base
}
var I = 3000;

function T(e) {
  setTimeout(e, I).unref()
}
async function $yo(e) {
  let {
    sessionNameArg: n,
    interactive: s,
    writeName: i,
    onRenamed: r,
    deps: o
  } = e, u = e.scheduleRecheck ?? T;
  if (n && s) IE().userTypedName = n;
  if (n) await i(n, e.sessionNameArgSource ?? "user");
  let p = GC();
  if (!s || !p || p.source === "derived") return;
  let l = async (a, c, S = a) => {
    if (c && !w(a)) return;
    let f = await oen(a, c ? "recheck" : "startup", o, S);
    if (!w(a)) return;
    if (!f.yielded) {
      if (!c) u(() => void l(a, !0));
      return
    }
    if (IE().userTypedName === a) IE().userTypedName = f.name;
    if (await i(f.name, "collision"), r?.(f.name, a), IE().announceYield(f.name, a), !c) u(() => void l(f.name, !0, a))
  };
  await l(p.name, !1)
}

function XUn(e) {
  let {
    name: n,
    onYield: s,
    deps: i
  } = e, r = e.suffixBase ?? n;
  (e.scheduleRecheck ?? T)(() => {
    (async () => {
      if (!w(n)) return;
      let u = await oen(n, "recheck", i, r);
      if (!u.yielded || !w(n)) return;
      if (IE().userTypedName === n) IE().userTypedName = u.name;
      await s(u.name, n)
    })()
  })
}

function Jkr(e, n, s) {
  let i = GC();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && Y3e(e?.name ?? n, i.name) !== void 0) return;
  let r = lo(i.name);
  if (e !== void 0 && r === lo(e.name) || r === lo(n) || r === lo(s)) return;
  return i
}
async function jwe(e, n, s = {}) {
  let i = s.deps ?? v,
    r = e ? Ti(e) : "";
  if (!r) return;
  let o = KH(),
    u = o.adoptions,
    p = ++o.restores,
    l = () => o.adoptions === u && (!s.yieldToLaterRestore || o.restores === p);
  if (!await i.whenRegistered() || !l()) return;
  if (s.autoOnly) {
    await a2(r, n, "auto");
    return
  }
  let a = GC();
  if (a !== void 0 && a.source !== "auto" && a.source !== "derived" && lo(a.name) === lo(r)) return;
  let c = await oen(r, "rename", i);
  if (!l() || Jkr(a, r, c.name)) return;
  let S = async (f, h) => {
    await a2(f, n, "collision"), IE().announceYield(f, h)
  };
  if (!c.yielded) {
    await a2(r, n, s.source), XUn({
      name: r,
      deps: i,
      onYield: S
    });
    return
  }
  if (await a2(c.name, n, "collision"), IE().userTypedName === r) IE().userTypedName = c.name;
  if (XUn({
      name: c.name,
      suffixBase: r,
      deps: i,
      onYield: S
    }), c.name === a?.name) return;
  IE().announceYield(c.name, r)
}
async function Uyo(e, n, s, i, r = Srn, o = v.listLive) {
  if (!x() || !Ki() || IE().correspondents.size === 0) return;
  let u = gX(),
    [p, l, a] = [e, n, s].map(Ti),
    c = `This session was renamed from "${p}" to "${l}" ("${a}" is held by another live session on this machine). Address this one as "${l}" from now on.`,
    S;
  try {
    S = new Map((await o(i)).map((f) => [f.pid, f.sock]))
  } catch (f) {
    t(`[session-name] rename notice skipped: registry unreadable (${k(f)??d(f)})`);
    return
  }
  await Promise.all([...IE().correspondents].map(async ([f, {
    pid: h,
    procStart: C
  }]) => {
    let {
      scheme: R,
      target: y
    } = gy(f);
    if (R !== "uds" || !y || u !== void 0 && Nle(y, u) || S.get(h) !== y) return;
    try {
      await r(y, c, i, l, void 0, void 0, IE().senderMode?.(), {
        trackReceipts: !1,
        expectPeerPid: h,
        ...C !== void 0 && {
          expectPeerProcStart: C
        }
      })
    } catch (_) {
      t(`[session-name] rename notice to ${ph(f)} failed: ${k(_)??"send error"}`)
    }
  }))
}
export {
  IE,
  Fyo,
  Hyo,
  Xkr,
  oen,
  Y3e,
  $yo,
  XUn,
  Jkr,
  jwe,
  Uyo
};
