// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Uv
} from "B:/~BUN/root/chunk-vfmvkxsr.js";
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  L,
  ke,
  Qr,
  nf,
  so,
  hc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  b
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Ye,
  H,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  Bf,
  bt,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  yr,
  Js
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  mZ,
  V1,
  nx,
  QL,
  ppo,
  XOt,
  Wxe,
  Mq,
  Qbs,
  HHn
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Mj
} from "B:/~BUN/root/chunk-hhgqcegv.js";
import * as k from "path";
var ae = 1000,
  le = 500,
  ce = 300,
  ue = 2000,
  X = 30000,
  de = 60000,
  K = "<skill-watcher-idle-wake>",
  Z = 1e4,
  fe = 2000,
  q = !0;
async function he(o) {
  let s = await Wxe(Qr(), o),
    n = ke(),
    w = n !== Qr() ? await Wxe(n, o) : [],
    m = new Map;
  for (let g of [...s, ...w]) m.set(g.name, g.type === "prompt" ? g.contentHash ?? "" : "");
  return m
}

function me(o) {
  let s = o?.stabilityThreshold ?? ae,
    n = o?.pollInterval ?? le,
    w = o?.reloadDebounce ?? ce,
    m = o?.chokidarInterval ?? ue,
    g, _ = o?.getFingerprint ?? (() => he(g)),
    D = o?.now ?? Date.now,
    j = o?.lastInteractionTime ?? nf,
    p = Me(),
    T = V1.subscribe(() => p.emit()),
    e = null,
    c = null,
    P = null,
    O = !1,
    v = [],
    E = 0,
    A = new Set,
    y = null,
    B = !1,
    S = !1,
    F = null,
    R = null,
    N;
  async function te(r, a) {
    if (B || S) return;
    if (B = !0, N = r, g = a, !F) F = Qbs(() => {
      nx(), p.emit()
    });
    let f = ++E,
      u = await V(a);
    if (S || f !== E) return;
    if (v = u, v.length === 0) return;
    if (y = await _().catch(() => null), S || f !== E) return;
    t(`Watching for changes in skill/command directories: ${v.join(", ")}...`), e = z(m);
    let C = e;
    if (await new Promise((h) => C.once("ready", () => h())), q) P = setInterval(x, Z), P.unref?.();
    R = bt(G)
  }

  function z(r) {
    let a = Uv.watch(v, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 2,
      awaitWriteFinish: {
        stabilityThreshold: s,
        pollInterval: n
      },
      ignored: (f, u) => {
        if (u && !u.isFile() && !u.isDirectory() && !u.isSymbolicLink()) return !0;
        if (f.split(/[/\\]/).some((C) => C === ".git")) return !0;
        if (u?.isFile()) return !f.endsWith(".md");
        return !1
      },
      ignorePermissionErrors: !0,
      usePolling: q,
      interval: r,
      binaryInterval: r,
      atomic: !0
    });
    return a.on("add", U), a.on("change", U), a.on("unlink", U), a.on("error", (f) => t(`[skills] watcher error: ${d(f)}`, {
      level: "warn"
    })), a
  }

  function x() {
    if (S || !e) return;
    let r = D() - j() > de;
    if (r === O) return;
    O = r;
    let a = r ? X : m;
    if (t(`[skills] ${r?"idle":"active"} \u2014 switching poll interval to ${a}ms`), e.close(), e = z(a), !r) J(K)
  }
  async function ne() {
    if (!B || S) return;
    let r = await V(g);
    if (S) return;
    let a = L([...v, ...r]);
    if (a.length === v.length) return;
    let f = ++E;
    if (v = a, t(`[skills] session moved \u2014 watching skill/command directories: ${v.join(", ")}`), e) e.close();
    e = z(O ? X : m);
    let u = e,
      C = new Promise((h) => u.once("ready", () => h()));
    if (await Promise.race([C, Y(fe, void 0, {
        unref: !0
      })]), S || f !== E) return;
    if (q && P === null) P = setInterval(x, Z), P.unref?.();
    R ??= bt(G)
  }

  function G() {
    if (S = !0, R) R(), R = null;
    if (F) F(), F = null;
    if (P) clearInterval(P), P = null;
    let r = Promise.resolve();
    if (e) r = e.close(), e = null;
    if (c) clearTimeout(c), c = null;
    return A.clear(), T(), p.clear(), r
  }

  function U(r) {
    t(`Detected skill change: ${r}`), i("tengu_skill_file_changed", {
      source: b("chokidar")
    }), J(r)
  }

  function J(r) {
    if (A.add(r), c) clearTimeout(c);
    c = setTimeout(async () => {
      c = null;
      let a = [...A];
      A.clear();
      let f = a.length === 1 && a[0] === K;
      if (!f) {
        let h = a.find((I) => I !== K) ?? a[0];
        if (await ie(h)) {
          t(`ConfigChange hook blocked skill reload (${a.length} paths)`);
          return
        }
      }
      Mq();
      let u = await _().catch(() => null);
      if (u === null) {
        QL(), mZ(), Q();
        return
      }
      let C = y !== null && u.size === y.size && [...y].every(([h, I]) => u.get(h) === I);
      if (C && f) {
        mZ();
        return
      }
      if (QL(), mZ(), await HHn().catch((h) => t(`[skills] re-reading the moved directory's skills failed: ${d(h)}`, {
          level: "warn"
        })), C) t(`[skills] ${a.length} fs event(s) but skill list unchanged \u2014 skipping re-announce`);
      else {
        if (y !== null) {
          let h = [...y].filter(([I, oe]) => u.get(I) !== oe).map(([I]) => I);
          if (h.length > 0) ppo(h)
        }
        y = u
      }
      Q()
    }, w)
  }

  function ie(r) {
    if (!N) return l(Error("skillChangeDetector: ConfigChange hook gate not wired")), Promise.resolve(!0);
    return N("skills", r)
  }

  function Q() {
    try {
      p.emit()
    } catch (r) {
      for (let a of r instanceof AggregateError ? r.errors : [r]) l(Ye(H(a), "skillChangeDetector: subscriber threw during reload"))
    }
  }

  function re() {
    if (S) return;
    T(), T = V1.subscribe(() => p.emit())
  }
  return {
    initialize: te,
    dispose: G,
    rehome: ne,
    [Symbol.asyncDispose]: G,
    subscribe: p.subscribe,
    rebridgeSkillsChanged: re,
    _checkIdleTransitionForTest: x
  }
}
var Uoe = me();
async function V(o) {
  let s = se(),
    n = [],
    w = XOt("userSettings", "skills");
  if (w) try {
    await s.stat(w), n.push(w)
  } catch {}
  if (w) {
    let e = k.join(w, Mj);
    try {
      await s.stat(e), n.push(e)
    } catch {}
  }
  let m = XOt("userSettings", "commands");
  if (m) try {
    await s.stat(m), n.push(m)
  } catch {}
  let g = XOt("projectSettings", "skills");
  if (g) try {
    let e = k.resolve(g);
    if (W() && o !== void 0) {
      if (await M(o, e)) n.push(e)
    } else await s.stat(e), n.push(e)
  } catch {}
  let _ = yr(ke()),
    D = Js(ke());
  if (so() === null && _ && D && _ !== D) {
    let e = k.join(_, ".claude", "skills"),
      c = k.join(D, ".claude", "skills");
    if (!n.includes(e) && !await ee(s, o, e) && await ee(s, o, c)) n.push(c)
  }
  let j = XOt("projectSettings", "commands");
  if (j) try {
    let e = k.resolve(j);
    if (W() && o !== void 0) {
      if (await M(o, e)) n.push(e)
    } else await s.stat(e), n.push(e)
  } catch {}
  let p = XOt("userSettings", "agents");
  if (p) try {
    await s.stat(p), n.push(p)
  } catch {}
  let T = XOt("projectSettings", "agents");
  if (T) try {
    let e = k.resolve(T);
    if (W() && o !== void 0) {
      if (await M(o, e)) n.push(e)
    } else await s.stat(e), n.push(e)
  } catch {}
  for (let e of hc()) {
    let c = k.join(e, ".claude", "skills");
    try {
      if (W() && o !== void 0) {
        if (await M(o, k.resolve(c))) n.push(c)
      } else await s.stat(c), n.push(c)
    } catch {}
  }
  return n
}
async function M(o, s) {
  let n = await o.hostFiles.stat(Bf.workspace(s));
  return n.ok && n.value.kind !== "absent"
}
async function ee(o, s, n) {
  try {
    if (W() && s !== void 0) return await M(s, n);
    return await o.stat(n), !0
  } catch {
    return !1
  }
}
export {
  Uoe
};
