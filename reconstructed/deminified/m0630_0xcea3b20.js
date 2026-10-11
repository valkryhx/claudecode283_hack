// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ub } from "B:/~BUN/root/chunk-zz5hnasr.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { we, kr, Gm, Fo, xu } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { st, te, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Gu, gt, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Fn, Lo } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { lie, PL, cot, wxt, LZ, Ugo, YZt, MT, zP, Dvr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { d6 } from "B:/~BUN/root/chunk-gj0n7q1s.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import * as k from "path";
var ae = 1000,
  se = 500,
  le = 300,
  ue = 2000,
  J = 30000,
  de = 60000,
  Y = "<skill-watcher-idle-wake>",
  X = 1e4,
  fe = 2000,
  usePolling = !0;
async function he(o) {
  let s = await wxt(kr(), o),
    n = we(),
    w = n !== kr() ? await wxt(n, o) : [],
    m = new Map();
  for (let g of [...s, ...w]) m.set(g.name, g.type === "prompt" ? g.contentHash ?? "" : "");
  return m;
}
function me(o) {
  let stabilityThreshold = o?.stabilityThreshold ?? ae,
    pollInterval = o?.pollInterval ?? se,
    w = o?.reloadDebounce ?? le,
    m = o?.chokidarInterval ?? ue,
    g,
    _ = o?.getFingerprint ?? (() => he(g)),
    D = o?.now ?? Date.now,
    j = o?.lastInteractionTime ?? Gm,
    p = Me(),
    T = PL.subscribe(() => p.emit()),
    e = null,
    c = null,
    P = null,
    O = !1,
    v = [],
    E = 0,
    A = new Set(),
    b = null,
    B = !1,
    S = !1,
    F = null,
    R = null,
    N;
  async function initialize(r, a) {
    if (B || S) return;
    if (B = !0, N = r, g = a, !F) F = Ugo(() => {
      MT(), p.emit();
    });
    let f = ++E,
      u = await Z(a);
    if (S || f !== E) return;
    if (v = u, v.length === 0) return;
    if (b = await _().catch(() => null), S || f !== E) return;
    t(`Watching for changes in skill/command directories: ${v.join(", ")}...`), e = W(m);
    let C = e;
    if (await new Promise(h => C.once("ready", () => h())), usePolling) P = setInterval(_checkIdleTransitionForTest, X), P.unref?.();
    R = gt(dispose);
  }
  function W(r) {
    let a = ub.watch(v, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 2,
      awaitWriteFinish: {
        stabilityThreshold: stabilityThreshold,
        pollInterval: pollInterval
      },
      ignored: (f, u) => {
        if (u && !u.isFile() && !u.isDirectory() && !u.isSymbolicLink()) return !0;
        if (f.split(/[/\\]/).some(item => item === ".git")) return !0;
        if (u?.isFile()) return !f.endsWith(".md");
        return !1;
      },
      ignorePermissionErrors: !0,
      usePolling: usePolling,
      interval: r,
      binaryInterval: r,
      atomic: !0
    });
    return a.on("add", x), a.on("change", x), a.on("unlink", x), a.on("error", f => t(`[skills] watcher error: ${l(f)}`, {
      level: "warn"
    })), a;
  }
  function _checkIdleTransitionForTest() {
    if (S || !e) return;
    let r = D() - j() > de;
    if (r === O) return;
    O = r;
    let a = r ? J : m;
    if (t(`[skills] ${r ? "idle" : "active"} \u2014 switching poll interval to ${a}ms`), e.close(), e = W(a), !r) K(Y);
  }
  async function rehome() {
    if (!B || S) return;
    let r = await Z(g);
    if (S) return;
    let a = L([...v, ...r]);
    if (a.length === v.length) return;
    let f = ++E;
    if (v = a, t(`[skills] session moved \u2014 watching skill/command directories: ${v.join(", ")}`), e) e.close();
    e = W(O ? J : m);
    let u = e,
      promise = new Promise(h => u.once("ready", () => h()));
    if (await Promise.race([promise, Q(fe, void 0, {
      unref: !0
    })]), S || f !== E) return;
    if (usePolling && P === null) P = setInterval(_checkIdleTransitionForTest, X), P.unref?.();
    R ??= gt(dispose);
  }
  function dispose() {
    if (S = !0, R) R(), R = null;
    if (F) F(), F = null;
    if (P) clearInterval(P), P = null;
    let r = Promise.resolve();
    if (e) r = e.close(), e = null;
    if (c) clearTimeout(c), c = null;
    return A.clear(), T(), p.clear(), r;
  }
  function x(r) {
    t(`Detected skill change: ${r}`), i("tengu_skill_file_changed", {
      source: y("chokidar")
    }), K(r);
  }
  function K(r) {
    if (A.add(r), c) clearTimeout(c);
    c = setTimeout(async () => {
      c = null;
      let a = [...A];
      A.clear();
      let f = a.length === 1 && a[0] === Y;
      if (!f) {
        let h = a.find(item => item !== Y) ?? a[0];
        if (await ie(h)) {
          t(`ConfigChange hook blocked skill reload (${a.length} paths)`);
          return;
        }
      }
      LZ();
      let u = await _().catch(() => null);
      if (u === null) {
        zP(), lie(), q();
        return;
      }
      let C = b !== null && u.size === b.size && [...b].every(([h, I]) => u.get(h) === I);
      if (C && f) {
        lie();
        return;
      }
      if (zP(), lie(), await YZt().catch(h => t(`[skills] re-reading the moved directory's skills failed: ${l(h)}`, {
        level: "warn"
      })), C) t(`[skills] ${a.length} fs event(s) but skill list unchanged \u2014 skipping re-announce`);else {
        if (b !== null) {
          let h = [...b].filter(([I, oe]) => u.get(I) !== oe).map(([I]) => I);
          if (h.length > 0) Dvr(h);
        }
        b = u;
      }
      q();
    }, w);
  }
  function ie(r) {
    if (!N) return d(Error("skillChangeDetector: ConfigChange hook gate not wired")), Promise.resolve(!0);
    return N("skills", r);
  }
  function q() {
    try {
      p.emit();
    } catch (error) {
      for (let a of error instanceof AggregateError ? error.errors : [error]) d(st(te(a), "skillChangeDetector: subscriber threw during reload"));
    }
  }
  function rebridgeSkillsChanged() {
    if (S) return;
    T(), T = PL.subscribe(() => p.emit());
  }
  return {
    initialize: initialize,
    dispose: dispose,
    rehome: rehome,
    [Symbol.asyncDispose]: dispose,
    subscribe: p.subscribe,
    rebridgeSkillsChanged: rebridgeSkillsChanged,
    _checkIdleTransitionForTest: _checkIdleTransitionForTest
  };
}
var uG = me();
async function Z(o) {
  let s = ce(),
    n = [],
    w = cot("userSettings", "skills");
  if (w) try {
    await s.stat(w), n.push(w);
  } catch {}
  if (w) {
    let e = k.join(w, d6);
    try {
      await s.stat(e), n.push(e);
    } catch {}
  }
  let m = cot("userSettings", "commands");
  if (m) try {
    await s.stat(m), n.push(m);
  } catch {}
  let g = cot("projectSettings", "skills");
  if (g) try {
    let e = k.resolve(g);
    if (H() && o !== void 0) {
      if (await M(o, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {}
  let _ = Fn(we()),
    D = Lo(we());
  if (Fo() === null && _ && D && _ !== D) {
    let e = k.join(_, ".claude", "skills"),
      c = k.join(D, ".claude", "skills");
    if (!n.includes(e) && !(await V(s, o, e)) && (await V(s, o, c))) n.push(c);
  }
  let j = cot("projectSettings", "commands");
  if (j) try {
    let e = k.resolve(j);
    if (H() && o !== void 0) {
      if (await M(o, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {}
  let p = cot("userSettings", "agents");
  if (p) try {
    await s.stat(p), n.push(p);
  } catch {}
  let T = cot("projectSettings", "agents");
  if (T) try {
    let e = k.resolve(T);
    if (H() && o !== void 0) {
      if (await M(o, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {}
  for (let e of xu()) {
    let c = k.join(e, ".claude", "skills");
    try {
      if (H() && o !== void 0) {
        if (await M(o, k.resolve(c))) n.push(c);
      } else await s.stat(c), n.push(c);
    } catch {}
  }
  return n;
}
async function M(o, s) {
  let n = await o.hostFiles.stat(Gu.workspace(s));
  return n.ok && n.value.kind !== "absent";
}
async function V(o, s, n) {
  try {
    if (H() && s !== void 0) return await M(s, n);
    return await o.stat(n), !0;
  } catch {
    return !1;
  }
}
export { uG };