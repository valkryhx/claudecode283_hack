// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Eee, FEe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { nze } from "B:/~BUN/root/chunk-a3ac8bzj.js";
import { watch as ge } from "fs";
var V = 50;
function ye(n, u, o) {
  let d = ge(n, {
    recursive: !0,
    persistent: !1,
    encoding: "utf8"
  }, u);
  return d.on("error", o), d.unref(), {
    close: () => {
      d.removeAllListeners(), d.on("error", () => {}), d.close();
    }
  };
}
function we(n, u) {
  if (n === null || n === void 0) return null;
  let o = typeof n === "string" ? n : n.toString("utf8"),
    d = u === "\\" ? o.replaceAll("\\", "/") : o;
  return d === "" || d === "." ? null : d;
}
var ve = ".claude-cloud-trash",
  Se = ".DS_Store";
function be(path) {
  let u = path.split("/"),
    o = u.at(-1) ?? "",
    d = u.slice(0, -1);
  if (u.includes(".git") || u.includes(ve) || FEe(path) || Eee.has(o) || o === Se) return {
    kind: "drop"
  };
  if (o.endsWith(".tmp") || o.endsWith(".swp") || o.endsWith("~")) return d.length === 0 ? {
    kind: "unknown"
  } : {
    kind: "path",
    path: d.join("/")
  };
  return {
    kind: "path",
    path: path
  };
}
function X4t({
  root: root,
  watch = ye,
  separator = O() === "windows" ? "\\" : "/",
  settleMs = V,
  nowMs = Date.now
}) {
  let f = null,
    r = !1,
    events = 0,
    dropped = 0,
    lost = !1;
  function p() {
    r = !1;
    let y = f;
    f = null;
    try {
      y?.close();
    } catch {}
  }
  return {
    start(y) {
      p();
      let k = E => {
          try {
            y(E);
          } catch (error) {
            t(`dir-sync: change hint handler threw: ${l(error)}`);
          }
        },
        _ = E => {
          if (!r) return;
          p(), lost = !0, t(`dir-sync: directory watch lost (${E}); sync points carry on without it`), k({
            kind: "overflow",
            at: nowMs()
          });
        },
        A = (E, g) => {
          if (!r) return;
          if (events += 1, events === 1) t(`dir-sync: directory watch delivering events (first: ${E} ${g === null ? "<unnamed>" : "named"})`);
          let M = we(g, separator),
            C = M === null ? {
              kind: "unknown"
            } : be(M);
          switch (C.kind) {
            case "drop":
              if (dropped += 1, dropped === 1) t("dir-sync: directory watch dropping events for .git, dependency directories, the session trash or .DS_Store (first such event; counted from here)");
              return;
            case "unknown":
              k({
                kind: "unknown",
                at: nowMs()
              });
              return;
            case "path":
              k({
                kind: "paths",
                paths: [C.path],
                at: nowMs()
              });
              return;
          }
        },
        P;
      try {
        r = !0, P = watch(root, A, E => _(`watcher error: ${l(E)}`));
      } catch (error) {
        r = !1;
        let startError = `watch unavailable: ${l(error)} (${v(error) ?? "no code"})`;
        return t(`dir-sync: ${startError}`), {
          stop() {},
          started: !1,
          startError: startError
        };
      }
      if (!r) {
        try {
          P.close();
        } catch {}
        return {
          stop() {},
          started: !1,
          startError: "watcher error at start"
        };
      }
      return t("dir-sync: directory watch started on the synced root"), f = P, {
        stop() {
          if (f === P) p();
        },
        started: !0
      };
    },
    async flush() {
      if (r) await Q(settleMs);
    },
    stats: () => ({
      events: events,
      dropped: dropped,
      lost: lost
    })
  };
}
function se(n, u) {
  if (u === 0 || !n.includes("/")) return n;
  return u === 1 ? n.slice(0, n.lastIndexOf("/")) : n.slice(0, n.indexOf("/"));
}
var ke = 2;
function le(paths, grain, o) {
  if (paths.size <= o) return {
    paths: paths,
    grain: grain
  };
  if (grain >= ke) return {
    paths: "many",
    grain: grain
  };
  return le(new Set([...paths].map(item => se(item, grain + 1))), grain + 1, o);
}
var X = {
  setTimeout: (n, u) => {
    let o = setTimeout(n, u);
    return o.unref(), o;
  },
  clearTimeout: n => clearTimeout(n)
};
function ae({
  quietMs: quietMs,
  maxWaitMs: maxWaitMs,
  maxNamedPaths: maxNamedPaths,
  onBurst: onBurst,
  timers = X
}) {
  let f = null,
    r = 0,
    h = null,
    b = null;
  function w() {
    if (h !== null) timers.clearTimeout(h), h = null;
    if (b !== null) timers.clearTimeout(b), b = null;
  }
  function flush() {
    let y = f;
    if (f = null, r = 0, w(), y !== null) onBurst(y === "many" ? "many" : [...y]);
  }
  return {
    touch(y) {
      if (f === null) {
        if (f = new Set(), maxWaitMs !== void 0) b = timers.setTimeout(flush, maxWaitMs);
      }
      if (f !== "many") {
        let k = le(f.add(se(y, r)), r, maxNamedPaths);
        f = k.paths, r = k.grain;
      }
      if (h !== null) timers.clearTimeout(h);
      h = timers.setTimeout(flush, quietMs);
    },
    flush: flush,
    cancel() {
      f = null, r = 0, w();
    },
    pending: () => f !== null
  };
}
var maxNamedPaths_2 = 256;
function L(n) {
  return n === "many" ? "many paths" : `${n.length} path(s)`;
}
var J = "\x00",
  Ee = 3,
  _e = 5;
function Deo(n, {
  timers: timers_2 = X
} = {}) {
  let o = null,
    d = null,
    m = nze,
    f = null,
    r = !1,
    h = !0,
    b = -1 / 0,
    w = null,
    p = !1,
    y = -1 / 0,
    k = null,
    _ = !1,
    A = 0,
    P = 0,
    E = !1,
    g = new Set(),
    M = null,
    C = [],
    W = !1,
    T = !1,
    Z = -1 / 0,
    I = !1,
    H = !1,
    R = !0,
    F = 0,
    q = !1,
    seq = 0,
    S = {
      hints: 0,
      bursts: 0,
      ignoredBursts: 0,
      watchPasses: 0,
      ships: 0,
      overflows: 0,
      feedEvents: 0,
      feedDropped: 0
    };
  function G(e, a) {
    i("tengu_dir_sync_watch", {
      event: c(e),
      start_error: ue(a === void 0 ? null : a.includes("EMFILE") ? "emfile" : a.includes("ENOSPC") ? "enospc" : a.includes("ERR_FEATURE_UNAVAILABLE_ON_PLATFORM") ? "unsupported" : "other"),
      hints: S.hints,
      bursts: S.bursts,
      ignored_bursts: S.ignoredBursts,
      watch_passes: S.watchPasses,
      ships: S.ships,
      overflows: S.overflows,
      feed_events: S.feedEvents,
      feed_dropped: S.feedDropped,
      quiet_ms: m.quietMs,
      max_wait_ms: m.maxWaitMs,
      min_gap_ms: m.minGapMs
    });
  }
  function z() {
    let e = o,
      a = d?.stats?.();
    if (S.feedEvents += a?.events ?? 0, S.feedDropped += a?.dropped ?? 0, o = null, d = null, R = !0, F += 1, f?.cancel(), f = null, k !== null) timers_2.clearTimeout(k), k = null;
    if (p = !1, T = !1, e !== null) e.stop(), G("stopped");
  }
  let N = null;
  function D(e) {
    if (N !== e) N = e, t(`dir-sync: change hints are not streamed just now (${e}); the tree is marked changed for the next sync point`);
  }
  function ce(e) {
    if (r) {
      D("sync stopped");
      return;
    }
    if (S.hints += 1, b = Math.max(b, e.at, n.nowMs()), h = !0, R = e.kind === "overflow", e.kind === "overflow") S.overflows += 1;
    let a = n.notRunning();
    if (a !== null) {
      D(`sync not running: ${a}`);
      return;
    }
    if (I || n.nowMs() < Z) {
      D("an install's own writes");
      return;
    }
    if (g.size > 0) {
      D("a command runs on this machine"), T = !0;
      return;
    }
    if (!n.turnOpen()) {
      D("no turn this machine sent is open");
      return;
    }
    if (N !== null) N = null, t("dir-sync: change hints stream again");
    switch (e.kind) {
      case "paths":
        e.paths.forEach(item => f?.touch(item));
        return;
      case "unknown":
      case "overflow":
        f?.touch(J);
        return;
    }
  }
  function onBurst_2(e) {
    S.bursts += 1;
    let a = F;
    he(e).then(s => {
      if (a !== F) {
        t(`dir-sync: burst of ${L(e)} left to the sync point that ran meanwhile`);
        return;
      }
      if (!s) {
        S.ignoredBursts += 1, t(`dir-sync: burst of ${L(e)} touched only ignored paths; nothing to upload`);
        return;
      }
      U(L(e));
    }, () => {
      if (a === F) U(L(e));
    });
  }
  async function he(e) {
    if (n.inScope === void 0 || q || e === "many" || e.includes(J) || e.length > maxNamedPaths_2) return !0;
    q = !0;
    try {
      return await n.inScope(e);
    } finally {
      q = !1;
    }
  }
  function U(e = "owed") {
    if (r || _ || g.size > 0 || !n.turnOpen() || n.notRunning() !== null) {
      T ||= g.size > 0, p ||= _, t(`dir-sync: burst of ${e} not uploaded now (${r ? "stopped" : _ ? "paused until a sync point ships" : g.size > 0 ? "a command runs here" : !n.turnOpen() ? "no open turn" : "sync not running"})`);
      return;
    }
    if (!h) {
      p = !1, t(`dir-sync: burst of ${e} already carried by a pass that began after it; nothing to upload`);
      return;
    }
    if (w !== null || k !== null) {
      p = !0, t(`dir-sync: burst of ${e} rides the next upload (one in flight or the gap not yet passed)`);
      return;
    }
    let a = y + m.minGapMs - n.nowMs();
    if (a > 0) {
      p = !0, k = timers_2.setTimeout(() => {
        k = null, B();
      }, a);
      return;
    }
    if (n.mayShip?.(n.facts().gen + 1) === !1) {
      p = !0, t(`dir-sync: burst of ${e} held back by the barrier ledger (the peer has not taken the last generation)`);
      return;
    }
    S.watchPasses += 1, t(`dir-sync: burst of ${e} \u2192 upload pass queued (watch)`), w = n.send("watch").then(s => {
      if (t(`dir-sync: watch-triggered pass ended: ${s.landed ? s.outcome : `not landed (${s.reason ?? s.outcome})`}, generation ${s.generation}`), s.landed && s.outcome === "sent" && s.trigger === "watch") S.ships += 1;
      if (!s.landed && s.reason === "held_for_command") {
        T = !0;
        return;
      }
      if (!s.landed && s.reason === "muted") return;
      if (!s.landed) {
        _ = !0, t(`dir-sync: a watcher-triggered upload did not land (${s.reason ?? s.outcome}); the next sync point uploads instead`);
        return;
      }
      if (!s.tookSnapshot) {
        p = o !== null;
        return;
      }
      if (A = s.outcome === "sent" || s.trigger !== "watch" ? 0 : A + 1, A >= Ee) _ = !0, t("dir-sync: the watcher keeps firing with nothing to upload; pausing it until the next sync point ships");
      if (s.trigger === "watch" && s.outcome === "sent") {
        if (P += 1, P >= _e) E = !_, _ = !0, t("dir-sync: several uploads went up with no sign of life from the cloud session; pausing the watcher until the next message or sync point lands");
      }
    }, s => {
      _ = !0, t(`dir-sync: a watcher-triggered upload failed: ${l(s)}`);
    }).finally(() => {
      w = null, y = n.nowMs(), B();
    });
  }
  function B() {
    if (p) p = !1, U();
  }
  function te() {
    if (I || H) return;
    let e = C;
    C = [], e.forEach(item => item());
  }
  function ne() {
    let e = M === null ? 0 : n.nowMs() - M;
    if (M = null, W) {
      if (W = !1, t(`dir-sync: install deferred while serving a command on this machine, running now (held for ${e} ms)`), !r && n.notRunning() === null) n.pull();
    }
    if (T) T = !1, f?.touch(J);
  }
  function passEnded(e) {
    if (!e.landed) return;
    if (e.tookSnapshot) {
      if (e.trigger !== "watch" || e.outcome === "sent") _ = !1, E = !1, A = 0;
      if (e.trigger !== "watch") P = 0;
      if (e.startedAtMs >= b) h = !1, p = !1;
      if (e.trigger !== "watch") y = Math.max(y, e.endedAtMs);
    }
    if (w === null && k === null) B();
  }
  function me(e) {
    let ms = e.endedAtMs - e.startedAtMs;
    if (e.landed && !e.tookSnapshot) return {
      kind: "failed",
      reason: "no_snapshot",
      gen: e.generation
    };
    if (e.landed) return e.outcome === "sent" ? {
      kind: "shipped",
      gen: e.generation,
      files: e.files,
      ms: ms
    } : {
      kind: "unchanged",
      gen: e.generation,
      ms: ms
    };
    let reason = n.notRunning();
    if (reason !== null) return {
      kind: "not_running",
      reason: reason
    };
    return e.kept ? {
      kind: "kept_here",
      reason: e.reason ?? e.outcome,
      gen: e.generation
    } : {
      kind: "failed",
      reason: e.reason ?? e.outcome,
      gen: e.generation
    };
  }
  function re(reason_2, startedAtMs) {
    return {
      trigger: "settle",
      landed: !1,
      outcome: "not_run",
      reason: reason_2,
      kept: !1,
      generation: n.facts().gen,
      files: 0,
      tookSnapshot: !1,
      startedAtMs: startedAtMs,
      endedAtMs: n.nowMs()
    };
  }
  return {
    streaming: {
      start(e, a = nze) {
        if (z(), r) return;
        if (m = a, d = e, f = ae({
          quietMs: m.quietMs,
          maxWaitMs: m.maxWaitMs,
          maxNamedPaths: maxNamedPaths_2,
          onBurst: onBurst_2,
          timers: timers_2
        }), o = e.start(ce), o.started) {
          R = !1, G("started");
          return;
        }
        G("start_failed", o.startError), t(`dir-sync: no directory watch (${o.startError ?? "unknown"}); changes upload at sync points only`), o = null, d = null, f = null;
      },
      async stop() {
        z(), await w;
      },
      async settle(e, a) {
        let s = n.nowMs();
        if (d !== null) await d.flush().catch(Y => {
          t(`dir-sync: change feed flush failed: ${l(Y)}`);
        });
        f?.cancel(), F += 1, p = !1, T = !1;
        let reason_3 = n.notRunning(),
          j = () => ie(re("aborted", s)),
          ie = () => {},
          x = reason_3 !== null ? {
            kind: "not_running",
            reason: reason_3
          } : me(await (() => {
            let promise = new Promise(K => {
              if (ie = K, a?.aborted === !0) j();else a?.addEventListener("abort", j, {
                once: !0
              });
            });
            return Promise.race([n.send("settle").catch(K => (t(`dir-sync: a barrier's upload failed: ${l(K)}`), re("unexpected", s))), promise]).finally(() => a?.removeEventListener("abort", j));
          })());
        return y = n.nowMs(), i("tengu_dir_sync_settle", {
          point: c(e),
          outcome: c(x.kind),
          files: x.kind === "shipped" ? x.files : 0,
          duration_ms: x.kind === "shipped" || x.kind === "unchanged" ? x.ms : 0
        }), x;
      },
      holdInstalls(e) {
        if (g.size === 0) M = n.nowMs();
        if (g.add(e), !I && !H) return Promise.resolve();
        return new Promise(a => {
          C.push(a);
        });
      },
      releaseInstalls(e) {
        if (g.delete(e) && g.size === 0) ne();
      },
      frame() {
        let e = n.facts();
        return seq += 1, {
          side: "laptop",
          gen: e.gen,
          tree: e.tree,
          taken: e.taken,
          dirty: h || R || e.snapshotting || e.shipping !== null,
          shipping: e.shipping,
          takes: e.takes,
          instance: n.instance,
          seq: seq
        };
      }
    },
    deferPull() {
      if (g.size === 0 || r) return !1;
      return W = !0, !0;
    },
    held: () => g.size > 0 && !r,
    dropHolds() {
      if (g.size === 0) return;
      g.clear(), ne();
    },
    peerAlive() {
      if (P = 0, E) E = !1, _ = !1, t("dir-sync: the cloud session showed a sign of life; the watcher streams again"), B();
    },
    installing(e) {
      if (I = e, !e) Z = n.nowMs() + V, te();
    },
    takingIn(e) {
      if (H = e, !e) te();
    },
    passEnded: passEnded,
    resumed() {
      if (r || !h || o === null) return;
      if (p = !0, w === null && k === null) B();
    },
    halt() {
      r = !0, z();
    }
  };
}
var instance = "opening";
function Leo(n, u) {
  let o = null,
    seq_2 = 0,
    m = new Set(),
    f = n.then(r => (o = r, m.forEach(item => void r?.holdInstalls(item)), m.clear(), r));
  return {
    start(r, h) {
      f.then(b => b?.start(r, h));
    },
    async stop() {
      await (await f)?.stop();
    },
    async settle(r, h) {
      return (o ?? (await new Promise(w => {
        if (h?.aborted === !0) {
          w(null);
          return;
        }
        let p = () => w(null);
        h?.addEventListener("abort", p, {
          once: !0
        }), nt(f, u).then(y => {
          h?.removeEventListener("abort", p), w(y);
        });
      })))?.settle(r, h) ?? {
        kind: "not_running",
        reason: "not_open"
      };
    },
    holdInstalls(r) {
      if (o !== null) return o.holdInstalls(r);
      return m.add(r), Promise.resolve();
    },
    releaseInstalls(r) {
      if (o !== null) {
        o.releaseInstalls(r);
        return;
      }
      m.delete(r);
    },
    frame() {
      if (o !== null) {
        let r = o.frame();
        return {
          ...r,
          seq: r.seq + seq_2
        };
      }
      return seq_2 += 1, {
        side: "laptop",
        gen: 0,
        tree: null,
        taken: 0,
        dirty: !0,
        shipping: null,
        takes: !1,
        instance: instance,
        seq: seq_2
      };
    }
  };
}
export { X4t, Deo, Leo };