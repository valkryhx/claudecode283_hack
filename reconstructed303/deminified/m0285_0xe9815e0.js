// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, K, Hc, we, KTe, de, JTe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, d, k, G, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, NA, rf, mre } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Km, _, jf, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Nl, Y5, hJn } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Gm } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { OB, ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Fu } from "B:/~BUN/root/chunk-97bdq2mm.js";
import { MFr, B3n, Kte } from "B:/~BUN/root/chunk-61xa715y.js";
import { Em, pa } from "B:/~BUN/root/chunk-wg7rg6k5.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { lstat as Fe, readdir as ve } from "fs/promises";
import { basename as y, dirname as T, join as h, resolve as M, sep as q } from "path";
import * as C from "fs/promises";
import { posix as ue } from "path";
var {
    dirname: dirname,
    isAbsolute: isAbsolute,
    join: join,
    normalize: normalize,
    relative: relative,
    sep: sep
  } = ue,
  _1e = "/mnt/user-data/uploads",
  b9e = "/uploads",
  YCo = "/uploads/cowork-folders/",
  Mon = join(dirname(_1e), "outputs"),
  XCo = "/mnt/attach/outputs",
  ge = join(dirname(_1e), "attachments"),
  me = "/home/claude",
  S9e = "/uploads/.home",
  ZLt = "/outputs",
  DN = ".stage-tmp.";
function Don(n) {
  if (!n) return _1e;
  if (!isAbsolute(n)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return normalize(n);
}
function bK() {
  return Don(a.CLAUDE_STAGE_FILE_ROOT);
}
function ame() {
  return join(dirname(bK()), "outputs");
}
function Wee() {
  return me;
}
function Lon() {
  return ge;
}
var oPr = [_1e, Mon];
function JCo() {
  return oPr;
}
function Non(n, e) {
  let i = relative(n, e);
  return !(i === ".." || i.startsWith(".." + sep) || isAbsolute(i));
}
function Fon() {
  let CLAUDE_CODE_ENVIRONMENT_KIND = a.CLAUDE_CODE_ENVIRONMENT_KIND;
  if (CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" || CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") return CLAUDE_CODE_ENVIRONMENT_KIND;
  return null;
}
function CH(n, e) {
  return Boolean(n) && (!e || e === "anthropic_cloud");
}
async function wDs() {
  if (!CH(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) return;
  try {
    let n = [bK(), ame()];
    await Promise.all(n.map(item => C.mkdir(item).catch(i => {
      let r = k(i);
      if (r !== "EEXIST" && r !== "ENOENT") X("warn", "user_data_roots_mkdir_failed", {
        code: r ?? "unknown"
      });
    })));
  } catch (error) {
    t(`uploads and outputs directories not created: ${d(error)}`, {
      level: "error"
    });
  }
}
var ye = 10,
  maxObservationLagMs = 2000,
  ke = 8,
  Se = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Ee = 100;
class V {
  primedListing = null;
  slugMeta = new Map();
  planFileCache = null;
  planFileBackend = null;
  planFileWatches = new Map();
  primeInFlight = null;
  waitCapMs = maxObservationLagMs;
  stopReleasingOnSwitch = null;
  lastUnwatched = new Map();
  earlyObserved = new Map();
  earlyGeneration = 0;
  lastSnapshottedWorkshopDoc = null;
  snapshotChain = Promise.resolve();
  planFileCacheKeyFor(n) {
    if (this.planFileCache === null) return null;
    let e = M(n);
    if (T(e) !== F()) return null;
    return y(e);
  }
  notePlanFileWritten(n, e) {
    if (this.planFileCache === null) {
      this.noteEarly(n, e);
      return;
    }
    let i = this.planFileCacheKeyFor(n);
    if (i !== null) {
      let r = this.planFileWatches.get(i);
      if (r !== void 0) r.generation++;
      if (this.planFileCache.set(i, e), this.primedListing !== null && this.primedListing.dir === F()) this.primedListing.listing.add(i);
    }
  }
  notePlanFileForgotten(n) {
    if (this.planFileCache === null) {
      this.noteEarly(n, void 0);
      return;
    }
    let e = this.planFileCacheKeyFor(n);
    if (e !== null) {
      let i = this.planFileWatches.get(e);
      if (i !== void 0) {
        this.dropToUnknown(e, i), this.refreshPlanFile(e, i);
        return;
      }
      this.planFileCache.delete(e);
    }
  }
  resetPlanFileCacheToUnknown() {
    if (this.planFileCache === null) return;
    for (let n of [...this.planFileCache.keys()]) {
      let e = this.planFileWatches.get(n);
      if (e !== void 0) this.dropToUnknown(n, e), this.refreshPlanFile(n, e);else this.planFileCache.delete(n);
    }
  }
  activatePlanFileCache(n) {
    if (this.planFileCache ??= new Map(), W() && n !== void 0 && this.planFileBackend === null) {
      this.planFileBackend = n, this.stopReleasingOnSwitch = Hc(() => this.releaseStaleWatches());
      for (let e of new Set(JTe().values())) this.watchSlug(e, !1);
      this.earlyObserved.clear();
    }
  }
  noteEarly(n, e) {
    if (!W()) return;
    let i = M(n);
    if (T(i) !== F()) return;
    if (this.earlyGeneration++, e === void 0) this.earlyObserved.delete(y(i));else this.earlyObserved.set(y(i), e);
  }
  watchSlug(n, e) {
    this.releaseStaleWatches();
    for (let i of v(n)) this.watchPlanFile(n, i, e);
    this.lastUnwatched.clear();
  }
  releaseStaleWatches() {
    if (this.planFileWatches.size === 0) return;
    let n = new Set(JTe().values());
    for (let [e, i] of this.planFileWatches) if (!n.has(i.slug)) this.stopWatch(e, i);
  }
  watchPlanFile(slug, e, i) {
    let planFileBackend = this.planFileBackend;
    if (planFileBackend === null || this.planFileCache === null || this.planFileWatches.has(e) || !m() || Gm(g(S(e))) !== void 0) return;
    let s = {
      slug: slug,
      generation: 0,
      seededAbsent: !1,
      subscription: void 0,
      refreshing: void 0,
      refreshAgain: !1,
      resubscribed: !1,
      stopped: !1
    };
    this.planFileWatches.set(e, s);
    let o = this.earlyObserved.has(e) ? this.earlyObserved.get(e) : this.lastUnwatched.get(e);
    if (this.earlyObserved.delete(e), this.lastUnwatched.delete(e), o !== void 0) this.planFileCache.set(e, o);else if (i && !this.planFileCache.has(e)) this.planFileCache.set(e, null), s.seededAbsent = !0;
    this.subscribePlanFile(planFileBackend, e, s);
  }
  observePlanFile(n) {
    let watch = this.planFileWatches.get(n);
    return {
      watch: watch,
      generation: watch?.generation ?? this.earlyGeneration
    };
  }
  notePlanFileObserved(n, e, i) {
    let r = this.planFileWatches.get(n);
    if (r !== void 0) {
      if (i.watch === r && r.generation === i.generation) this.installPlanFile(n, r, e);else this.refreshPlanFile(n, r);
    } else if (this.planFileBackend === null && W() && i.watch === void 0 && this.earlyGeneration === i.generation) this.earlyObserved.set(n, e);
  }
  watchAgentPlanFile(n, e) {
    if (this.planFileBackend === null) return;
    let i = this.planFileWatches.get(e);
    if (i !== void 0) {
      this.planFileWatches.delete(e), this.planFileWatches.set(e, i);
      return;
    }
    let r = new Set(v(n)),
      s = [...this.planFileWatches].filter(([o, u]) => u.slug === n && !r.has(o));
    for (let [o, u] of s.slice(0, Math.max(0, s.length - ke + 1))) {
      let f = this.planFileCache?.get(o);
      if (this.stopWatch(o, u), typeof f === "string") this.planFileCache?.set(o, f);
    }
    this.watchPlanFile(n, e, !1);
  }
  async subscribePlanFile(n, e, i) {
    let generation = i.generation,
      s;
    try {
      let o = await n.subscribe({
        target: "key",
        key: g(S(e))
      }, u => this.onPlanFileEvent(e, i, generation, u), {
        maxObservationLagMs: maxObservationLagMs
      });
      if (o.ok) {
        if (i.stopped) o.value.unsubscribe();else i.subscription = o.value, t(`plans: watching ${e} through the storage interface (changes trail by at most ${o.value.observationLagMs} ms)`);
        return;
      }
      s = yt(o.error);
    } catch (error) {
      s = String(error);
    }
    if (i.stopped) return;
    if (t(`plans: watching ${e} through the storage interface failed (${s}); serving its last read and in-process writes`), this.planFileCache?.has(e) !== !0) this.refreshPlanFile(e, i);
  }
  onPlanFileEvent(n, e, i, r) {
    if (e.stopped) return;
    if (!r.ok) {
      if (r.error.code === "Unavailable") {
        queueMicrotask(() => void this.refreshPlanFile(n, e));
        return;
      }
      if (e.subscription = void 0, Km()) return;
      t(`plans: the watch on ${n} ended: ${yt(r.error)}`);
      let planFileBackend_2 = this.planFileBackend;
      if (planFileBackend_2 !== null && !e.resubscribed) e.resubscribed = !0, this.subscribePlanFile(planFileBackend_2, n, e);else this.stopWatch(n, e);
      return;
    }
    let s = r.value;
    if (s.kind === "snapshot" && e.generation === i) {
      if (!("absent" in s)) {
        this.installPlanFile(n, e, Buffer.from(s.value).toString("utf-8"));
        return;
      }
      if (e.seededAbsent && e.generation === 0) {
        this.installPlanFile(n, e, null);
        return;
      }
    }
    queueMicrotask(() => void this.refreshPlanFile(n, e));
  }
  installPlanFile(n, e, i) {
    e.generation++, this.planFileCache?.set(n, i);
  }
  refreshPlanFile(n, e) {
    if (e.refreshing !== void 0) return e.refreshAgain = !0, e.refreshing;
    let planFileBackend_3 = this.planFileBackend;
    if (planFileBackend_3 === null) return Promise.resolve();
    let r = async () => {
      await Promise.resolve();
      try {
        do {
          e.refreshAgain = !1;
          let generation_2 = e.generation,
            o = await this.readPlanFileForWatch(planFileBackend_3, n);
          if (e.stopped) return;
          if (o === void 0) {
            if (e.generation === generation_2) e.generation++, this.planFileCache?.delete(n);
            continue;
          }
          if (e.generation === generation_2) this.installPlanFile(n, e, o);else e.refreshAgain = !0;
        } while (e.refreshAgain && !e.stopped);
      } finally {
        e.refreshing = void 0;
      }
    };
    return e.refreshing = r(), e.refreshing;
  }
  async readPlanFileForWatch(n, e) {
    try {
      let i = await n.read([g(S(e))]);
      if (i.ok) {
        let r = i.value.items[0];
        return r?.found ? Buffer.from(r.value).toString("utf-8") : null;
      }
      t(`plans: v5 read of ${e} failed: ${i.error.code}`);
    } catch (error) {
      t(`plans: v5 read of ${e} threw: ${error}`);
    }
    return;
  }
  async settlePlanFile(n) {
    let e = this.planFileWatches.get(n);
    if (e === void 0) return;
    let i = e.refreshing ?? (this.planFileCache?.has(n) !== !0 ? this.refreshPlanFile(n, e) : void 0);
    if (i !== void 0 && !(await N(i, this.waitCapMs))) this.giveUpWaiting(n, e);
  }
  dropToUnknown(n, e) {
    if (e.stopped) return;
    e.generation++, this.planFileCache?.delete(n);
  }
  giveUpWaiting(n, e) {
    if (this.planFileCache?.has(n)) this.dropToUnknown(n, e);
  }
  unwatchSlug(n) {
    for (let [e, i] of this.planFileWatches) if (i.slug === n) this.stopWatch(e, i);
  }
  unwatchAllPlanFiles() {
    this.lastUnwatched.clear();
    for (let [n, e] of this.planFileWatches) {
      let i = this.planFileCache?.get(n);
      if (i !== void 0) this.lastUnwatched.set(n, i);
      this.stopWatch(n, e);
    }
  }
  stopWatch(n, e) {
    e.stopped = !0, e.subscription?.unsubscribe(), e.subscription = void 0, this.planFileWatches.delete(n), this.planFileCache?.delete(n);
  }
  commitPlanListing(dir, e) {
    let listing = new Set(e);
    this.primedListing = {
      dir: dir,
      listing: listing
    };
    let r = JTe(),
      s = [...this.slugMeta].filter(([, u]) => u.validatedDir !== dir),
      o = new Set(s.map(([u]) => u));
    for (let [u, f] of r) if (!o.has(u)) for (let c of v(f)) listing.add(c);
    for (let [u, f] of s) {
      let c = r.get(u);
      if (c === void 0) {
        this.slugMeta.delete(u);
        continue;
      }
      if (v(c).some(item => listing.has(item))) {
        if (f.consumed) {
          t(`Plan slug collision for '${c}' in ${dir} detected after the plan path was already in use \u2014 keeping the slug (the pre-existing plan file may be overwritten).`, {
            level: "warn"
          }), f.validatedDir = dir;
          continue;
        }
        if (r.delete(u), this.slugMeta.delete(u), ![...r.values()].includes(c)) this.unwatchSlug(c);
        this.getPlanSlug(u, f.seed);
      } else {
        for (let p of v(c)) listing.add(p);
        f.validatedDir = dir;
      }
    }
  }
  getPlanSlug(n, seed) {
    let i = JTe(),
      r = i.get(n);
    if (!r) {
      let s = seed ? B3n(seed) : "",
        o = !0;
      for (let c = 0; c < ye; c++) if (r = s ? `${s}-${Kte()}` : MFr(), o = v(r).some(item => this.primedListing?.listing.has(item) === !0), !o) break;
      let u = !we() && !KTe();
      this.slugMeta.set(n, {
        validatedDir: u || this.primedListing === null ? null : this.primedListing.dir,
        consumed: !1,
        seed: seed
      });
      let f = !o && this.primedListing !== null && this.primedListing.dir === F();
      if (this.primedListing !== null) for (let c of v(r)) this.primedListing.listing.add(c);
      i.set(n, r), this.lastUnwatched.clear(), this.watchSlug(r, f);
    }
    return r;
  }
  markPlanPathServed(n) {
    let e = this.slugMeta.get(n);
    if (e) e.consumed = !0;
  }
  exemptSlugFromRevalidation(n, e) {
    if (this.slugMeta.delete(n), this.primedListing !== null) for (let i of v(e)) this.primedListing.listing.add(i);
    this.watchSlug(e, !1);
  }
  clearAllPlanSlugs() {
    JTe().clear(), this.slugMeta.clear(), this.unwatchAllPlanFiles();
  }
  noteWorkshopDocSnapshotted(sessionId, doc) {
    this.lastSnapshottedWorkshopDoc = {
      sessionId: sessionId,
      doc: doc
    };
  }
  reset() {
    this.primedListing = null, this.slugMeta.clear(), this.unwatchAllPlanFiles(), this.lastUnwatched.clear(), this.earlyObserved.clear(), this.primeInFlight = null, this.waitCapMs = maxObservationLagMs, this.stopReleasingOnSwitch?.(), this.stopReleasingOnSwitch = null, this.planFileBackend = null, this.planFileCache = null, this.lastSnapshottedWorkshopDoc = null, this.snapshotChain = Promise.resolve();
  }
}
var _e = new z(() => new V());
function U() {
  return j().host;
}
function Gb() {
  return _e.of(U());
}
function ike(n, e) {
  Gb().notePlanFileWritten(n, e);
}
function Wy(n) {
  Gb().notePlanFileForgotten(n);
}
function Hon() {
  Gb().resetPlanFileCacheToUnknown();
}
async function be(n) {
  let e = [];
  try {
    let i = await pa(cursor => n.listEntries({
      namespace: "plan"
    }, {
      cursor: cursor,
      skipKeyStats: !0
    }), r => {
      for (let s of r) if (s.kind === "key" && s.key.namespace === "plan") e.push(`${s.key.name}.md`);
    });
    switch (i.status) {
      case "done":
        return e;
      case "error":
        return t(`primePlanSlugCollisions: v5 list failed: ${i.error.code}`), null;
      case "capped":
        return t(`primePlanSlugCollisions: v5 list exceeded ${Em} pages; leaving the listing unprimed`), null;
    }
  } catch (error) {
    return t(`primePlanSlugCollisions: v5 list threw: ${error}`), null;
  }
}
async function Ae(n, e) {
  let i = await be(n);
  if (e !== O()) return;
  if (i !== null) Gb().activatePlanFileCache(n), Gb().commitPlanListing(e, i);
}
async function N(n, e) {
  let i = mr(),
    r = !1;
  return await Promise.race([n.catch(() => {}).finally(() => {
    r = !0, i.abort();
  }), Y(e, i.signal)]), r;
}
async function QCo() {
  let n = Gb();
  if (n.primeInFlight !== null) await N(n.primeInFlight, n.waitCapMs);
}
async function yw(n) {
  let e = O();
  if (n && e === F()) {
    let i = Gb(),
      r = Ae(n, e);
    i.primeInFlight = r;
    try {
      await r;
    } finally {
      if (i.primeInFlight === r) i.primeInFlight = null;
    }
    return;
  }
  if (de()) {
    Gb().commitPlanListing(e, []);
    return;
  }
  try {
    let i = await ve(e);
    if (e !== O()) return;
    Gb().commitPlanListing(e, i);
  } catch (error) {
    if (!G(error) && !Wt(error)) l(error);
    if (e !== O()) return;
    if (G(error)) Gb().commitPlanListing(e, []);
  }
}
function O() {
  if (!we() && !KTe()) return F();
  return Jd();
}
function F() {
  return h(Pe(), "plans");
}
function g(n) {
  return Be.plan(n);
}
function S(n) {
  return n.endsWith(".md") ? n.slice(0, -3) : n;
}
var w = {
  publishDiscipline: "inPlace"
};
async function J(n) {
  if (de()) return w;
  try {
    let e = await Fe(h(Jd(), `${n}.md`));
    return {
      ...w,
      mode: e.mode & 511
    };
  } catch {
    return w;
  }
}
function m() {
  return Jd() === F();
}
function v(n) {
  return [`${n}.md`, `${n}.workshop.md`];
}
function p3(n, e) {
  return Gb().getPlanSlug(n ?? K(), e);
}
function ake(n) {
  return JTe().get(n ?? K());
}
function ee(n) {
  return typeof n === "string" && n.length <= Ee && Se.test(n) && !hJn.test(n);
}
function te(n, e) {
  let i = typeof e === "string" ? _(Nl(e.replace(Y5, ""), 80)) : `<non-string slug of type ${typeof e}>`;
  t(`${n}: refusing invalid plan slug ${i}`, {
    level: "error"
  });
}
function sPr(n, e) {
  if (!ee(e)) {
    te("setPlanSlug", e);
    return;
  }
  JTe().set(n, e), Gb().exemptSlugFromRevalidation(n, e);
}
function ZCo() {
  Gb().clearAllPlanSlugs();
}
class ne {
  #e = void 0;
  directory() {
    if (this.#e !== void 0) mre("config_home");
    return this.#e ??= this.#t(), this.#e;
  }
  #t() {
    if (de()) return F();
    let plansDirectory = ut().plansDirectory;
    if (plansDirectory) {
      let i = ce(),
        r = M(i, plansDirectory);
      if ($e(r, i)) return r;
      t(`plansDirectory must be within project root, with no backslash in its path off Windows: ${plansDirectory}`, {
        level: "error"
      });
    }
    return F();
  }
  reset() {
    this.#e = void 0;
  }
}
var Q = new z(() => new ne()),
  Jd = Object.assign(function () {
    return Q.of(U()).directory();
  }, {
    cache: {
      clear() {
        Q.of(U()).reset();
      }
    }
  });
function $e(n, e) {
  if (n !== e && !n.startsWith(e + q)) return !1;
  if (NA(n)) return !1;
  if (jf(se(), n) !== void 0) return !1;
  let i = rf(e);
  if (i === null) return !1;
  let r = n;
  for (;;) {
    let s = rf(r);
    if (s !== null) return s === i || s.startsWith(i + q);
    let o = T(r);
    if (o === r) return !1;
    r = o;
  }
}
async function P(n) {
  let e = Jd();
  if (de()) return e;
  try {
    await gn().mkdir(e);
  } catch (error) {
    t(`Failed to create plans directory ${e}: ${error}`, {
      level: "error"
    });
  }
  return e;
}
async function w9e(n, e) {
  if (e && m()) {
    let r = `${MFr()}-ultraplan`,
      s = h(await P(e), `${r}.md`),
      o = await e.write(g(r), n, w);
    if (!o.ok) throw new x(`saveRejectedUltraplan: v5 write failed: ${o.error.code}`, "saveRejectedUltraplan: v5 write failed");
    return s;
  }
  if (de()) throw OB("rejected_ultraplan", Jd()), new x("Cannot save the plan: this session does not write to disk");
  let i = h(await P(), `${MFr()}-ultraplan.md`);
  return await gn().write(i, n), i;
}
async function eRo(n, e, i) {
  try {
    await P(i);
    let r = y(n, ".md"),
      s = i !== void 0 && m() && T(n) === Jd() && Gm(g(r)) === void 0 ? g(r) : void 0;
    if (i !== void 0 && s !== void 0) {
      let o = await i.write(s, e, w);
      if (!o.ok) {
        Z(n, o.error.code);
        return;
      }
    } else if (de()) {
      OB("plan_edit", n);
      return;
    } else await gn().write(n, e);
    ike(n, e);
  } catch (error) {
    Z(n, error instanceof Error ? error.message : String(error));
  }
}
function Z(n, e) {
  Wy(n), t(`Failed to persist plan to ${n}: ${e}`, {
    level: "error"
  });
}
function Bk(n) {
  let e = K(),
    i = p3(e);
  if (Gb().markPlanPathServed(e), !n) return h(Jd(), `${i}.md`);
  return h(Jd(), `${i}-agent-${n}.md`);
}
function b1e() {
  let n = p3(K());
  return h(Jd(), `${n}.workshop.md`);
}
async function B(n, e, i) {
  let r = await n.read([g(e)]);
  if (!r.ok) return t(`${i}: v5 read failed: ${r.error.code}`), null;
  let s = r.value.items[0];
  return s.found ? Buffer.from(s.value).toString("utf-8") : null;
}
async function tRo(n) {
  if (n && m()) return B(n, `${p3(K())}.workshop`, "getPlanWorkshopDoc");
  if (de()) return null;
  let e = b1e();
  try {
    return await se().readFile(e, {
      encoding: "utf-8"
    });
  } catch (error) {
    if (G(error)) return null;
    if (Wt(error)) return t(`getPlanWorkshopDoc: read failed for ${e}: ${error}`), null;
    return l(error), null;
  }
}
function R2n() {
  let planFileCache = Gb().planFileCache;
  if (planFileCache !== null && m()) {
    let e = planFileCache.get(`${p3(K())}.workshop.md`);
    if (e !== void 0) return e !== null;
  }
  if (de()) return !1;
  try {
    return se().existsSync(b1e());
  } catch {
    return !1;
  }
}
async function nRo(n) {
  if (n === void 0 || !m()) return R2n();
  let e = `${p3(K())}.workshop`;
  await Gb().settlePlanFile(`${e}.md`);
  let i = Gb().planFileCache?.get(`${e}.md`);
  if (i !== void 0) return i !== null;
  return (await n.statMeta(g(e))).ok;
}
function f3(n) {
  let e = Bk(n),
    planFileCache_2 = Gb().planFileCache;
  if (planFileCache_2 !== null && m()) {
    if (n) Gb().watchAgentPlanFile(p3(K()), y(e));
    let r = planFileCache_2.get(y(e));
    if (r !== void 0) return r;
  }
  return re(e);
}
async function v9e(n, e) {
  if (e === void 0 || !m()) return f3(n);
  let i = ie(n);
  await Gb().settlePlanFile(i);
  let r = Gb().planFileCache?.get(i);
  if (r !== void 0) return r;
  return B(e, S(i), "getPlan");
}
function ie(n) {
  let e = y(Bk(n)),
    i = Gb();
  if (n && i.planFileCache !== null) i.watchAgentPlanFile(p3(K()), e);
  return e;
}
async function rRo(n, e) {
  if (e === void 0 || !m()) return f3(n) !== null;
  let i = ie(n);
  await Gb().settlePlanFile(i);
  let r = Gb().planFileCache?.get(i);
  if (r !== void 0) return r !== null;
  return (await e.statMeta(g(S(i)))).ok;
}
async function oRo(n) {
  let e = Bk();
  if (W() && n !== void 0 && m()) {
    let i = y(e),
      r = Gb(),
      s = r.planFileWatches.get(i);
    if (s !== void 0) {
      if (!(await N(r.refreshPlanFile(i, s), r.waitCapMs))) r.giveUpWaiting(i, s);
      let o = r.planFileCache?.get(i);
      if (o !== void 0) return o;
    }
    return B(n, S(i), "readPlanFileFresh");
  }
  return re(e);
}
function re(n) {
  if (de()) return null;
  try {
    return se().readFileSync(n, {
      encoding: "utf-8"
    });
  } catch (error) {
    if (G(error)) return null;
    if (Wt(error)) return t(`getPlan: read failed for ${n}: ${error}`), null;
    return l(error), null;
  }
}
function oe(n) {
  let e, i;
  for (let r of n.messages) {
    let slug_2 = r.slug;
    if (!slug_2 || slug_2 === e) continue;
    if (ee(slug_2)) e = slug_2;else i ??= slug_2;
  }
  if (e === void 0 && i !== void 0) te("getSlugFromLog", i);
  return e;
}
async function ae(n, e, i) {
  if (Fon() === null) return;
  if (i && m()) return Ce(i, n, e).catch(l);
  if (de()) return;
  let r = h(Jd(), `${e}.workshop.md`);
  try {
    await gn().read(r);
    return;
  } catch (error) {
    if (!G(error)) {
      if (Wt(error)) t(`recoverWorkshopDocForResume: read failed for ${r}: ${error}`);else l(error);
      return;
    }
  }
  let s = R(n, "workshop");
  if (!s || s.content.length === 0 || s.content.length > $on) return;
  try {
    await P(), await gn().write(r, s.content), t(`Workshop doc recovered from file snapshot, ${s.content.length} chars`, {
      level: "info"
    });
  } catch (error) {
    if (Wt(error)) {
      t(`Workshop doc recovery write failed for ${r}: ${error}`);
      return;
    }
    l(error);
  } finally {
    Wy(r);
  }
}
async function Ce(n, e, i) {
  let r = `${i}.workshop.md`,
    s = g(`${i}.workshop`),
    o = Gb().observePlanFile(r),
    u = await n.read([s]);
  if (!u.ok) {
    t(`recoverWorkshopDocForResume: v5 read failed for ${i}: ${u.error.code}`);
    return;
  }
  let f = u.value.items[0];
  if (Gb().notePlanFileObserved(r, f?.found ? Buffer.from(f.value).toString("utf-8") : null, o), f?.found) return;
  let c = R(e, "workshop");
  if (!c || c.content.length === 0 || c.content.length > $on) return;
  let p = h(Jd(), r),
    E = !1;
  try {
    await P(n);
    let b = await n.write(s, c.content, w);
    if (!b.ok) {
      t(`Workshop doc recovery write failed for ${i}: ${b.error.code}`);
      return;
    }
    E = !0, t(`Workshop doc recovered from file snapshot, ${c.content.length} chars`, {
      level: "info"
    });
  } finally {
    if (E) ike(p, c.content);else Wy(p);
  }
}
async function eNt(n, e, i) {
  let r = oe(n);
  if (!r) return !1;
  let s = e ?? K();
  if (sPr(s, r), i && m()) return We(i, n, r).catch(u => (l(u), !1));
  let o = h(Jd(), `${r}.md`);
  if (await ae(n, r).catch(l), de()) return !1;
  try {
    return await gn().read(o), !0;
  } catch (error) {
    if (!G(error)) {
      if (Wt(error)) return t(`copyPlanForResume: read failed for ${o}: ${error}`), !1;
      return l(error), !1;
    }
    if (Fon() === null) return !1;
    t(`Plan file missing during resume: ${o}. Attempting recovery.`);
    let f = R(n, "plan"),
      c = null;
    if (f && A(f.content)) c = f.content, t(`Plan recovered from file snapshot, ${c.length} chars`, {
      level: "info"
    });else if (c = le(n), c) t(`Plan recovered from message history, ${c.length} chars`, {
      level: "info"
    });
    if (c) try {
      return await P(), await gn().write(o, c), !0;
    } catch (error) {
      if (Wt(error)) return t(`Plan recovery write failed for ${o}: ${error}`), !1;
      return l(error), !1;
    } finally {
      Wy(o);
    }
    return t("Plan file recovery failed: no file snapshot or plan content found in message history"), !1;
  }
}
async function Oe(n, e) {
  let i = `${e}.workshop.md`,
    r = Gb();
  if (r.planFileWatches.has(i)) {
    await r.settlePlanFile(i);
    return;
  }
  if (r.planFileCache?.has(i)) return;
  let s = r.observePlanFile(i),
    o = await n.read([g(`${e}.workshop`)]);
  if (!o.ok) {
    t(`copyPlanForResume: v5 read failed for ${e}.workshop: ${o.error.code}`);
    return;
  }
  let u = o.value.items[0];
  r.notePlanFileObserved(i, u?.found ? Buffer.from(u.value).toString("utf-8") : null, s);
}
async function We(n, e, i) {
  await ae(e, i, n).catch(l);
  let r = `${i}.md`,
    s = Gb().observePlanFile(r),
    o = await n.read([g(i)]);
  if (!o.ok) return t(`copyPlanForResume: v5 read failed for ${i}: ${o.error.code}`), !1;
  let u = o.value.items[0];
  if (Gb().notePlanFileObserved(r, u?.found ? Buffer.from(u.value).toString("utf-8") : null, s), await Oe(n, i), u?.found) return !0;
  if (Fon() === null) return !1;
  t(`Plan file missing during resume: ${i}. Attempting recovery.`);
  let f = R(e, "plan"),
    c = null;
  if (f && A(f.content)) c = f.content, t(`Plan recovered from file snapshot, ${c.length} chars`, {
    level: "info"
  });else if (c = le(e), c) t(`Plan recovered from message history, ${c.length} chars`, {
    level: "info"
  });
  if (c) {
    let p = h(Jd(), r),
      E = !1;
    try {
      await P(n);
      let b = await n.write(g(i), c, w);
      if (!b.ok) return t(`Plan recovery write failed for ${i}: ${b.error.code}`), !1;
      return E = !0, !0;
    } finally {
      if (E) ike(p, c);else Wy(p);
    }
  }
  return t("Plan file recovery failed: no file snapshot or plan content found in message history"), !1;
}
async function sRo(n, e, i) {
  let r = oe(n);
  if (!r) return !1;
  let s = Jd(),
    o = h(s, `${r}.md`),
    u = p3(e),
    f = h(s, `${u}.md`);
  if (Gb().exemptSlugFromRevalidation(e, u), i && m()) return Te(i, r, u).catch(c => (l(c), !1));
  await P();
  try {
    if (!de()) await gn().copy(h(s, `${r}.workshop.md`), h(s, `${u}.workshop.md`));
  } catch (error) {
    if (!G(error)) if (Wt(error)) t(`copyPlanForFork: workshop sibling copy failed: ${error}`);else l(error);
  } finally {
    Wy(h(s, `${u}.workshop.md`));
  }
  try {
    if (de()) return !1;
    return await gn().copy(o, f), !0;
  } catch (error) {
    if (G(error)) return !1;
    if (Wt(error)) return t(`copyPlanForFork: copy failed for ${o}: ${error}`), !1;
    return l(error), !1;
  } finally {
    Wy(f);
  }
}
async function Te(n, e, i) {
  let r = h(Jd(), `${i}.workshop.md`),
    s;
  try {
    await P(n);
    let f = await n.read([g(`${e}.workshop`)]);
    if (!f.ok) t(`copyPlanForFork: v5 workshop sibling read failed: ${f.error.code}`);else if (f.value.items[0].found) {
      let c = f.value.items[0].value,
        p = await n.write(g(`${i}.workshop`), c, await J(`${e}.workshop`));
      if (!p.ok) t(`copyPlanForFork: v5 workshop sibling copy failed: ${p.error.code}`);else s = Buffer.from(c).toString("utf-8");
    }
  } finally {
    if (s !== void 0) ike(r, s);else Wy(r);
  }
  let o = h(Jd(), `${i}.md`),
    u;
  try {
    let f = await n.read([g(e)]);
    if (!f.ok) return t(`copyPlanForFork: v5 read failed for ${e}: ${f.error.code}`), !1;
    if (!f.value.items[0].found) return !1;
    let c = f.value.items[0].value,
      p = await n.write(g(i), c, await J(e));
    if (!p.ok) return t(`copyPlanForFork: v5 write failed for ${i}: ${p.error.code}`), !1;
    return u = Buffer.from(c).toString("utf-8"), !0;
  } finally {
    if (u !== void 0) ike(o, u);else Wy(o);
  }
}
function le(n) {
  for (let e = n.messages.length - 1; e >= 0; e--) {
    let i = n.messages[e];
    if (typeof i !== "object" || i === null) continue;
    if (i.type === "assistant") {
      let r = i.message?.content;
      if (Array.isArray(r)) {
        for (let s of r) if (typeof s === "object" && s !== null && s.type === "tool_use" && s.name === Fu) {
          let input = s.input,
            u = typeof input === "object" && input !== null ? input.plan : void 0;
          if (A(u)) return u;
        }
      }
    }
    if (i.type === "user") {
      let r = i;
      if (A(r.planContent)) return r.planContent;
    }
    if (i.type === "attachment") {
      let r = i;
      if (r.attachment?.type === "plan_file_reference") {
        let planContent = r.attachment.planContent;
        if (A(planContent)) return planContent;
      }
    }
  }
  return null;
}
function R(n, e) {
  let i = [...n.messages, ...(n.fileSnapshots ?? [])];
  for (let r = i.length - 1; r >= 0; r--) {
    let s = i[r];
    if (s?.type === "system" && "subtype" in s && s.subtype === "file_snapshot" && "snapshotFiles" in s) {
      let snapshotFiles = s.snapshotFiles;
      if (!Array.isArray(snapshotFiles)) continue;
      let u = snapshotFiles.find(item => typeof item === "object" && item !== null && item.key === e && typeof item.path === "string" && typeof item.content === "string");
      if (u !== void 0) return u;
    }
  }
  return;
}
var $on = 2000000,
  iPr = $on;
function A(n) {
  return typeof n === "string" && n.length > 0 && n.length <= iPr;
}
export { _1e, b9e, YCo, Mon, XCo, S9e, ZLt, DN, Don, bK, ame, Wee, Lon, oPr, JCo, Non, Fon, CH, wDs, Gb, ike, Wy, Hon, QCo, yw, p3, ake, sPr, ZCo, Jd, w9e, eRo, Bk, b1e, tRo, R2n, nRo, f3, v9e, rRo, oRo, eNt, sRo, $on, iPr };