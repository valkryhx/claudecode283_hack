// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nC
} from "B:/~BUN/root/chunk-eswth6m1.js";
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Ee,
  Oo,
  lB,
  pm,
  mo,
  q,
  Gl
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  qe,
  F,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  og,
  vt,
  t,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  fr,
  Gi
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  kde,
  XK,
  NP,
  qB,
  iIt,
  uWe,
  kW,
  PTi,
  fmr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Z2,
  _nn
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  kwn
} from "B:/~BUN/root/chunk-kak11zak.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import * as h from "path";
var Ce = 1000,
  Ie = 500,
  _e = 300,
  ye = 2000,
  be = 30000,
  U = 60000,
  oe = "<skill-watcher-idle-wake>",
  me = 5000,
  Te = 600000,
  Re = 40000,
  Ae = 2000,
  re = !0;
async function Le(i) {
  let u = await uWe(Oo(), i),
    o = Ee(),
    v = o !== Oo() ? await uWe(o, i) : [],
    C = new Map;
  for (let p of [...u, ...v]) C.set(p.name, p.type === "prompt" ? p.contentHash ?? "" : "");
  return C
}

function Fe(i) {
  let u = i?.stabilityThreshold ?? Ce,
    o = i?.pollInterval ?? Ie,
    v = i?.reloadDebounce ?? _e,
    C = i?.chokidarInterval ?? ye,
    p = i?.idleChokidarInterval ?? be,
    I, D = i?.getFingerprint ?? (() => Le(I)),
    P = i?.now ?? Date.now,
    E = i?.lastInteractionTime ?? pm,
    B = i?.onInteraction ?? lB,
    n = De(),
    k = Number.NEGATIVE_INFINITY;

  function ae() {
    k = P(), n.emit()
  }
  let Y = XK.subscribe(ae),
    g = null,
    le = 0,
    W = !1,
    _ = null,
    y = null,
    R = null,
    x = null,
    A = !1,
    se = new Set,
    w = [],
    M = 0,
    H = new Set,
    N = null,
    K = !1,
    S = !1,
    j = null,
    O = null,
    Q;
  async function ke(e, r) {
    if (K || S || q()) return;
    if (K = !0, Q = e, I = r, !j) j = PTi(() => {
      NP(), n.emit()
    });
    let s = ++M,
      f = await ge(r);
    if (S || s !== M) return;
    if (w = f, w.length === 0) return;
    if (N = await D().catch(() => null), S || s !== M) return;
    t(`Watching for changes in skill/command directories: ${w.join(", ")}...`), g = ee(Z());
    let m = g;
    if (await new Promise((c) => m.once("ready", () => c())), re) ce();
    O = vt(z)
  }

  function Z() {
    return kwn() ? p : C
  }

  function ee(e) {
    le = P(), W = !1;
    let r = iIt("userSettings", "skills"),
      s = nC.watch(w, {
        persistent: !0,
        ignoreInitial: !0,
        depth: 2,
        awaitWriteFinish: {
          stabilityThreshold: u,
          pollInterval: o
        },
        ignored: (m, c) => {
          if (c && !c.isFile() && !c.isDirectory() && !c.isSymbolicLink()) return !0;
          if (m.split(/[/\\]/).some((T) => T === ".git")) return !0;
          if (h.relative(r, m).split(h.sep)[0] === _nn) return !0;
          if (c?.isFile()) return !m.endsWith(".md");
          return !1
        },
        ignorePermissionErrors: !0,
        usePolling: re,
        interval: e,
        binaryInterval: e,
        atomic: !0
      });
    s.on("add", ne), s.on("change", ne), s.on("unlink", ne);
    let f = !1;
    return s.on("unlinkDir", (m) => {
      f ||= w.some((c) => h.resolve(c) === h.resolve(m)), W &&= !f
    }), s.once("ready", () => {
      let m = s.getWatched();
      W = !f && w.every((c) => (h.resolve(c) in m))
    }), s.on("error", (m) => t(`[skills] watcher error: ${d(m)}`, {
      level: "warn"
    })), s
  }

  function ce() {
    x ??= B(() => {
      if (A) R ??= setTimeout(() => {
        R = null, ue()
      }, 0)
    }), te()
  }

  function ue() {
    try {
      de()
    } catch (e) {
      a(qe(F(e), "skillChangeDetector: idle check failed; will check again later"))
    }
    te()
  }

  function te() {
    if (S || A || y !== null) return;
    let e = U - (P() - E()) + 1,
      r = e < me ? me : e <= U ? e : U + 1;
    y = setTimeout(() => {
      y = null, ue()
    }, r), y.unref?.()
  }

  function de() {
    if (S || !g) return;
    let e = P() - E() > U;
    if (e === A) return;
    A = e;
    let r = e ? p : Z();
    t(`[skills] ${e?"idle":"active"} \u2014 switching poll interval to ${r}ms`);
    let s = !1;
    if (W && (e || P() - le <= Te)) try {
      g.setPollInterval(r), s = !0
    } catch (f) {
      a(qe(F(f), "skillChangeDetector: could not change the poll interval in place; built a new watcher instead"))
    }
    if (!s) t("[skills] building a new watcher for the switch"), g.close(), g = ee(r);
    if (!e) fe(oe), te()
  }
  async function we() {
    if (!K || S) return;
    let e = await ge(I);
    if (S) return;
    let r = L([...w, ...e]);
    if (r.length === w.length) return;
    let s = ++M;
    if (w = r, t(`[skills] session moved \u2014 watching skill/command directories: ${w.join(", ")}`), g) g.close();
    g = ee(A ? p : Z());
    let f = g,
      m = new Promise((c) => f.once("ready", () => c()));
    if (await Promise.race([m, J(Ae, void 0, {
        unref: !0
      })]), S || s !== M) return;
    if (re) ce();
    O ??= vt(z)
  }

  function z() {
    if (S = !0, O) O(), O = null;
    if (j) j(), j = null;
    if (y) clearTimeout(y), y = null;
    if (R) clearTimeout(R), R = null;
    x?.(), x = null;
    let e = Promise.resolve();
    if (g) e = g.close(), g = null;
    if (_) clearTimeout(_), _ = null;
    return H.clear(), Y(), n.clear(), e
  }

  function ne(e) {
    t(`Detected skill change: ${e}`), l("tengu_skill_file_changed", {
      source: b("chokidar")
    }), Se(e), fe(e)
  }

  function Se(e) {
    let r = e.split(/[/\\]/).some((m, c, T) => m === Z2 && T[c - 1] === "skills"),
      s = P() - k <= Re,
      f = `${r}:${s}`;
    if (se.has(f)) return;
    se.add(f), V("info", "skill_watch_saw_change", {
      in_synced_skills_folder: r,
      within_40s_of_announced_reload: s,
      ...kwn() && {
        kept_at_idle_poll_interval: !0
      }
    })
  }

  function fe(e) {
    if (H.add(e), _) clearTimeout(_);
    _ = setTimeout(async () => {
      _ = null;
      let r = [...H];
      H.clear();
      let s = r.length === 1 && r[0] === oe;
      if (!s) {
        let c = r.find((T) => T !== oe) ?? r[0];
        if (await ve(c)) {
          t(`ConfigChange hook blocked skill reload (${r.length} paths)`);
          return
        }
      }
      kW();
      let f = await D().catch(() => null);
      if (f === null) {
        qB(), kde(), he();
        return
      }
      if (N !== null && f.size === N.size && [...N].every(([c, T]) => f.get(c) === T) && s) {
        kde();
        return
      }
      qB(), kde(), await fmr().catch((c) => t(`[skills] re-reading the moved directory's skills failed: ${d(c)}`, {
        level: "warn"
      })), N = f, he()
    }, v)
  }

  function ve(e) {
    if (!Q) return a(Error("skillChangeDetector: ConfigChange hook gate not wired")), Promise.resolve(!0);
    return Q("skills", e)
  }

  function he() {
    try {
      n.emit()
    } catch (e) {
      for (let r of e instanceof AggregateError ? e.errors : [e]) a(qe(F(r), "skillChangeDetector: subscriber threw during reload"))
    }
  }

  function Pe() {
    if (S) return;
    Y(), Y = XK.subscribe(ae)
  }
  return {
    initialize: ke,
    dispose: z,
    rehome: we,
    [Symbol.asyncDispose]: z,
    subscribe: n.subscribe,
    rebridgeSkillsChanged: Pe,
    _checkIdleTransitionForTest: de
  }
}
var Zhe = Fe();
async function ge(i) {
  let u = ie(),
    o = [],
    v = iIt("userSettings", "skills");
  if (v) try {
    await u.stat(v), o.push(v)
  } catch {}
  if (v) {
    let n = h.join(v, Z2);
    try {
      await u.stat(n), o.push(n)
    } catch {}
  }
  let C = iIt("userSettings", "commands");
  if (C) try {
    await u.stat(C), o.push(C)
  } catch {}
  let p = iIt("projectSettings", "skills");
  if (p) try {
    let n = h.resolve(p);
    if (X() && i !== void 0) {
      if (await G(i, n)) o.push(n)
    } else await u.stat(n), o.push(n)
  } catch {}
  let I = fr(Ee()),
    D = Gi(Ee());
  if (mo() === null && I && D && I !== D) {
    let n = h.join(I, ".claude", "skills"),
      k = h.join(D, ".claude", "skills");
    if (!o.includes(n) && !await pe(u, i, n) && await pe(u, i, k)) o.push(k)
  }
  let P = iIt("projectSettings", "commands");
  if (P) try {
    let n = h.resolve(P);
    if (X() && i !== void 0) {
      if (await G(i, n)) o.push(n)
    } else await u.stat(n), o.push(n)
  } catch {}
  let E = iIt("userSettings", "agents");
  if (E) try {
    await u.stat(E), o.push(E)
  } catch {}
  let B = iIt("projectSettings", "agents");
  if (B) try {
    let n = h.resolve(B);
    if (X() && i !== void 0) {
      if (await G(i, n)) o.push(n)
    } else await u.stat(n), o.push(n)
  } catch {}
  for (let n of Gl()) {
    let k = h.join(n, ".claude", "skills");
    try {
      if (X() && i !== void 0) {
        if (await G(i, h.resolve(k))) o.push(k)
      } else await u.stat(k), o.push(k)
    } catch {}
  }
  return o
}
async function G(i, u) {
  let o = await i.hostFiles.stat(og.workspace(u));
  return o.ok && o.value.kind !== "absent"
}
async function pe(i, u, o) {
  try {
    if (X() && u !== void 0) return await G(u, o);
    return await i.stat(o), !0
  } catch {
    return !1
  }
}
export {
  Zhe
};
