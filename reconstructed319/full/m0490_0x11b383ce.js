// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H,
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  q1,
  RR,
  oet,
  z3,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  ta,
  Yfe,
  U9i
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  CO,
  iS,
  ASe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Yo
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  jl
} from "B:/~BUN/root/chunk-rzc1dapy.js";
import {
  q_,
  Gys,
  Qce,
  Woe
} from "B:/~BUN/root/chunk-5gm1xyqv.js";
var Y = 16,
  L = 64;

function A(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "",
    i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid
}

function E(e, n, s) {
  return n.filter((i) => i.pid !== s && i.name !== void 0 && i.procStart !== void 0 && Yo(i.name) === e)
}

function D(e) {
  return new Set(e.flatMap((n) => n.name === void 0 ? [] : [Yo(n.name)]))
}

function O(e, n, s = Yfe) {
  let i = (r) => `${Q(e,CO-r.length-1)}-${r}`;
  for (let r = 0; r < Y; r++) {
    let u = i(s());
    if (!n.has(Yo(u))) return u
  }
  for (let r = 2;; r++) {
    let u = i(`${s()}-${r}`);
    if (!n.has(Yo(u))) return u
  }
}

function B(e) {
  let {
    desiredName: n,
    self: s,
    live: i,
    moment: r,
    slug: u
  } = e, c = e.suffixBase ?? n, p = Yo(n);
  if (!p) return {
    kind: "keep"
  };
  let f = E(p, i, s.pid),
    o = r === "rename" ? f : r === "startup" ? f.filter((a) => A(a, s)) : f.filter((a) => A({
      ...a,
      startedAt: a.nameSince ?? a.startedAt
    }, {
      ...s,
      startedAt: s.nameSince ?? s.startedAt
    }));
  if (o.length === 0) return {
    kind: "keep"
  };
  return {
    kind: "yield",
    newName: O(c, D(i), u),
    holders: o
  }
}
class T {
  correspondents = new Map;
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = De();
  pendingYield = void 0;
  noteCorrespondent(e, n, s) {
    if (!e || iS(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, {
        pid: n,
        procStart: s
      }), this.correspondents.size > L) {
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
var F = new W(() => new T);

function mA() {
  return F.of(H().host)
}

function Dfs() {
  let e = RR();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && mA().userTypedName === e.name ? e.name : void 0
}

function Lfs(e, n, s) {
  mA().noteCorrespondent(e, n, s)
}

function Xlo() {
  let e = mA(),
    n = e.pendingYield;
  return e.pendingYield = void 0, n
}
var C = {
  whenRegistered: oet,
  listLive: Qce
};

function P() {
  return v("tengu_session_name_uniqueness", !0)
}
async function DIn(e, n, s = C, i = e) {
  if (!P()) return {
    name: e,
    yielded: !1
  };
  if (i = b(i) ?? i, !await s.whenRegistered()) return {
    name: e,
    yielded: !1
  };
  try {
    let r = z(),
      u = (await s.listLive()).filter((a) => a.pid === process.pid || a.sessionId !== r),
      c = u.find((a) => a.pid === process.pid);
    if (!c) return {
      name: e,
      yielded: !1
    };
    let p = B({
      desiredName: e,
      self: c,
      live: u,
      moment: n,
      slug: s.slug,
      suffixBase: i
    });
    if (p.kind === "keep") return {
      name: e,
      yielded: !1
    };
    let f = I(e, c),
      o = ta(f !== void 0 && Yo(f) !== Yo(e) ? f : p.newName) || p.newName;
    return t(`[session-name] "${e}" is held by live pid ${p.holders[0]?.pid}; this session takes "${o}"`, {
      level: "info"
    }), g("session_name_collision"), mA().lastYield = {
      base: Yo(i),
      name: o
    }, {
      name: o,
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

function I(e, n) {
  let s = Rft(e, n.name);
  if (s !== void 0) return s;
  let i = n.name,
    r = i === void 0 ? void 0 : R(i);
  if (i === void 0 || r === void 0) return;
  let u = b(e) ?? e,
    c = Q(u, CO - r.suffix.length - 1);
  return r.base.toLowerCase() === c.toLowerCase() ? i : void 0
}

function R(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !U9i(n[1].toLowerCase())) return;
  let s = e.slice(0, e.length - n[0].length);
  return s.length > 0 ? {
    base: s,
    suffix: n[0].slice(1)
  } : void 0
}

function Rft(e, n) {
  if (!P()) return;
  let s = mA().lastYield,
    i = b(e) ?? e;
  return s !== void 0 && n !== void 0 && Yo(s.name) === Yo(n) && s.base === Yo(i) ? n : void 0
}

function x(e) {
  let n = RR();
  return n !== void 0 && Yo(n.name) === Yo(e)
}

function b(e) {
  return R(e)?.base
}
var U = 3000;

function _(e) {
  setTimeout(e, U).unref()
}
async function Nfs(e) {
  let {
    sessionNameArg: n,
    interactive: s,
    writeName: i,
    onRenamed: r,
    deps: u
  } = e, c = e.scheduleRecheck ?? _;
  if (n && s) mA().userTypedName = n;
  if (n) await i(n, e.sessionNameArgSource ?? "user");
  let p = RR();
  if (!s || !p || p.source === "derived") return;
  let f = async (o, a, S = o) => {
    if (a && !x(o)) return;
    let l = await DIn(o, a ? "recheck" : "startup", u, S);
    if (!x(o)) return;
    if (!l.yielded) {
      if (!a) c(() => void f(o, !0));
      return
    }
    if (mA().userTypedName === o) mA().userTypedName = l.name;
    if (await i(l.name, "collision"), r?.(l.name, o), mA().announceYield(l.name, o), !a) c(() => void f(l.name, !0, o))
  };
  await f(p.name, !1)
}

function g_r(e) {
  let {
    name: n,
    onYield: s,
    deps: i
  } = e, r = e.suffixBase ?? n;
  (e.scheduleRecheck ?? _)(() => {
    (async () => {
      if (!x(n)) return;
      let c = await DIn(n, "recheck", i, r);
      if (!c.yielded || !x(n)) return;
      if (mA().userTypedName === n) mA().userTypedName = c.name;
      await s(c.name, n)
    })()
  })
}

function Jlo(e, n, s) {
  let i = RR();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && Rft(e?.name ?? n, i.name) !== void 0) return;
  let r = Yo(i.name);
  if (e !== void 0 && r === Yo(e.name) || r === Yo(n) || r === Yo(s)) return;
  return i
}
async function vce(e, n, s = {}) {
  let i = s.deps ?? C,
    r = e ? ta(e) : "";
  if (!r) return;
  let u = q1(),
    c = u.adoptions,
    p = ++u.restores,
    f = () => u.adoptions === c && (!s.yieldToLaterRestore || u.restores === p);
  if (!await i.whenRegistered() || !f()) return;
  if (s.keepLaunchName && RR()?.givenAtLaunch) return;
  if (s.autoOnly) {
    await z3(r, n, "auto");
    return
  }
  let o = RR();
  if (o !== void 0 && o.source !== "auto" && o.source !== "derived" && Yo(o.name) === Yo(r)) return;
  let a = await DIn(r, "rename", i);
  if (!f() || Jlo(o, r, a.name)) return;
  let S = RR();
  if (s.source === "auto" && S !== void 0 && S.source !== "derived" && (S.name !== o?.name || S.source !== o.source)) return;
  let l = s.source === "auto" ? "auto" : "collision",
    h = async (y, N) => {
      if (l === "auto" && RR()?.source !== "auto") return;
      await z3(y, n, l), mA().announceYield(y, N)
    };
  if (!a.yielded) {
    await z3(r, n, s.source), g_r({
      name: r,
      deps: i,
      onYield: h
    });
    return
  }
  if (await z3(a.name, n, l), mA().userTypedName === r) mA().userTypedName = a.name;
  if (g_r({
      name: a.name,
      suffixBase: r,
      deps: i,
      onYield: h
    }), a.name === o?.name) return;
  mA().announceYield(a.name, r)
}
async function Ffs(e, n, s, i, r = Gys, u = C.listLive) {
  if (!P() || !jl() || mA().correspondents.size === 0) return;
  let c = Woe(),
    [p, f, o] = [e, n, s].map(ta),
    a = `This session was renamed from "${p}" to "${f}" ("${o}" is held by another live session on this machine). Address this one as "${f}" from now on.`,
    S;
  try {
    S = new Map((await u(i)).map((l) => [l.pid, l.sock]))
  } catch (l) {
    t(`[session-name] rename notice skipped: registry unreadable (${k(l)??d(l)})`);
    return
  }
  await Promise.all([...mA().correspondents].map(async ([l, {
    pid: h,
    procStart: y
  }]) => {
    let {
      scheme: N,
      target: w
    } = iS(l);
    if (N !== "uds" || !w || c !== void 0 && ASe(w, c) || S.get(h) !== w) return;
    try {
      await r(w, a, i, f, void 0, void 0, mA().senderMode?.(), {
        trackReceipts: !1,
        expectPeerPid: h,
        ...y !== void 0 && {
          expectPeerProcStart: y
        }
      })
    } catch (M) {
      t(`[session-name] rename notice to ${q_(l)} failed: ${k(M)??"send error"}`)
    }
  }))
}
export {
  mA,
  Dfs,
  Lfs,
  Xlo,
  DIn,
  Rft,
  Nfs,
  g_r,
  Jlo,
  vce,
  Ffs
};
