// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { BQ } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Opn, nde, b7e, Ene, eE } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Bf, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { NJ, $Hr, pHo, fHo, ZVs, G5n, mHo, gHo, hHo, fn, wh, Xy, Bm } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { yi, dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { basename as D, dirname as _, join as h } from "path";
var b = 3,
  z = 8;
function v() {
  let s = fn("userSettings");
  return s !== void 0 && D(s) === eE.default ? s : void 0;
}
async function pPo(s, e) {
  if (!W()) return;
  let epoch = e.epoch;
  await Promise.all([N(s, e), R(s, e), F("managed-settings file tier", () => U(s, e, epoch))]), await F("project/local layers", () => O(s, e, e.epoch));
}
async function F(s, e) {
  try {
    await e();
  } catch (error) {
    t(`settingsPrime: start-up seed of the ${s} failed: ${d(error)}; the file reads serve`, {
      level: "warn"
    });
  }
}
async function R(s, e) {
  try {
    await q(s, e);
  } catch (error) {
    t(`settingsPrime: ownership read-ahead for the local settings root failed: ${d(error)}; the probe runs as today`, {
      level: "warn"
    });
  }
}
async function N(s, e) {
  try {
    let i = v();
    if (i === void 0) return;
    if (e.parsedFiles.has(i)) {
      t("settingsPrime: user settings already read before start-up; seed skipped");
      return;
    }
    let epoch_2 = e.epoch,
      r = await $Hr(s, i);
    if (r.kind === "absent") {
      if (b7e(i), e.seedParsedFile(i, "userSettings", Ene(), epoch_2)) t("settingsPrime: user settings absent; seeded as none");
      return;
    }
    if (r.kind !== "seeded") {
      t(`settingsPrime: start-up seed skipped (${G5n(r)}); the file read serves`);
      return;
    }
    if (e.seedParsedFile(i, "userSettings", r.parsed, epoch_2)) t(`settingsPrime: user settings seeded at start-up (${r.size} bytes)`);
  } catch (error) {
    t(`settingsPrime: start-up seed failed: ${d(error)}; the file read serves`, {
      level: "warn"
    });
  }
}
class T {
  storageV5;
  store;
  inFlight = null;
  followUpQueued = !1;
  disposed = !1;
  state = {
    kind: "unprimed"
  };
  consecutiveThrows = 0;
  runsInState = 0;
  loggedThrowMessages = new Set();
  loggedOwnershipThrowMessages = new Set();
  loggedHostFilesThrowMessages = new Set();
  unsubscribe;
  constructor(s, e) {
    this.storageV5 = s;
    this.store = e;
    this.unsubscribe = e.onInvalidate(() => {
      if (!this.disposed) this.seedAttestedTier(), this.keepUserLayer(), this.schedule();
    }), this.seedAttestedTier(), this.schedule();
  }
  keepUserLayer() {
    let s = BQ() ? this.store.lastSeededUserLayer : void 0;
    if (s !== void 0) this.store.seedParsedFile(s.path, "userSettings", s.parsed, this.store.epoch);
  }
  seedAttestedTier() {
    try {
      P(this.storageV5, this.store, this.store.epoch);
    } catch (error) {
      this.logThrowOnce(error, this.loggedHostFilesThrowMessages);
    }
  }
  schedule() {
    if (this.inFlight !== null) {
      this.followUpQueued = !0;
      return;
    }
    this.inFlight = this.run().finally(() => {
      if (this.disposed) return;
      if (this.inFlight = null, this.followUpQueued) this.followUpQueued = !1, this.schedule();
    });
  }
  async run() {
    let s = I(this.storageV5, this.store).then(e => (this.loggedOwnershipThrowMessages.clear(), e), e => {
      if (!this.disposed) this.logThrowOnce(e, this.loggedOwnershipThrowMessages);
      return;
    });
    try {
      let epoch_3 = this.store.epoch;
      try {
        let r = v();
        if (r !== void 0) {
          if (!(await this.seedFromBackend(r, epoch_3))) return;
        }
      } catch (error) {
        if (!this.disposed) this.onThrow(error);
        return;
      }
      let i = await s;
      if (this.disposed) return;
      if (E(this.store, i), (await Promise.all([this.seedLogged(epoch_3, O), this.seedLogged(epoch_3, U)])).includes(!1)) return;
      this.consecutiveThrows = 0;
      try {
        Bm(), this.loggedThrowMessages.clear();
      } catch (error) {
        if (!this.disposed) this.logThrowOnce(error);
      }
    } finally {
      await s;
    }
  }
  async seedLogged(s, e) {
    try {
      return await e(this.storageV5, this.store, s);
    } catch (error) {
      if (!this.disposed) this.logThrowOnce(error, this.loggedHostFilesThrowMessages);
      return this.store.epoch === s && !this.disposed;
    }
  }
  async seedFromBackend(s, e) {
    let state = this.state,
      n = await $Hr(this.storageV5, s, state.kind === "seeded" ? state : void 0);
    if (this.store.epoch !== e || this.disposed) return !1;
    if (n.kind === "seeded") {
      if (this.store.seedParsedFile(s, "userSettings", n.parsed, e), state.kind === "seeded" && state.contentHash === n.contentHash) return !0;
    } else if (n.kind === "absent") b7e(s), this.store.seedParsedFile(s, "userSettings", Ene(), e);
    return this.transition(n), !0;
  }
  transition(s) {
    let state_2 = this.state;
    if (this.state = s, state_2.kind === s.kind && (s.kind !== "failing" || state_2.kind === "failing" && state_2.code === s.code)) {
      this.runsInState++;
      return;
    }
    if (state_2.kind === "failing" && s.kind === "seeded") t(`settingsPrime: backend read recovered after ${this.runsInState} failing run(s)`);
    switch (this.runsInState = 1, s.kind) {
      case "seeded":
        t(`settingsPrime: user settings seeded (${s.size} bytes)`);
        return;
      case "absent":
        t("settingsPrime: user settings absent; served as none");
        return;
      case "oversize":
        t("settingsPrime: user settings not seeded (oversize); the last seed or the raw path serves");
        return;
      case "failing":
        t(`settingsPrime: backend read failed: ${s.code}${s.failureClass ? ` (${s.failureClass})` : ""}; the last seed or the raw path serves`, {
          level: "warn"
        });
        return;
      case "unprimed":
      case "broken":
        return;
    }
  }
  onThrow(s) {
    if (this.consecutiveThrows++, this.state = {
      kind: "broken"
    }, this.logThrowOnce(s), this.consecutiveThrows >= b) t(`settingsPrime: disabled after ${b} consecutive failures; the raw path serves from the next reset`, {
      level: "warn"
    }), this.dispose();
  }
  logThrowOnce(s, e = this.loggedThrowMessages) {
    let i = d(s);
    if (e.has(i) || e.size >= z) return;
    e.add(i), l(s);
  }
  primes(s) {
    return this.storageV5 === s;
  }
  async whenIdle() {
    while (this.inFlight !== null || this.followUpQueued) await (this.inFlight ?? Promise.resolve());
  }
  dispose() {
    if (this.disposed = !0, this.unsubscribe(), this.inFlight = null, this.followUpQueued = !1, this.store.primer === this) this.store.primer = void 0, this.store.managedFileReads.clear(), this.store.lastSeededUserLayer = void 0;
  }
}
async function fPo(s, e) {
  if (!W() || s === void 0) return;
  if (e.primer !== void 0) {
    if (!e.primer.primes(s)) t("settingsPrime: store already primed through another backend; second prime ignored");
    return;
  }
  Opn(s).catch(l), e.primer = new T(s, e), await e.primer.whenIdle();
}
async function Din(s) {
  let e = yi(),
    backendReadResetTail = e.backendReadResetTail,
    n;
  e.backendReadResetTail = new Promise(r => n = r), await backendReadResetTail;
  try {
    return await x(s, e);
  } finally {
    n();
  }
}
async function x(s, e) {
  if (await e.primer?.whenIdle(), e.primer !== void 0) await R(s, e);
  let i = e.primer === void 0 ? [] : (await Promise.all([...G(s).map(item => pHo(e, item)), X(s, e)])).flat().filter(item => item !== void 0);
  if (dr(i.length > 0 ? {
    userLayer: "retain"
  } : void 0), i.length === 0) return;
  return () => {
    for (let n of i) n();
  };
}
function G(s) {
  let e = v();
  return [...(e === void 0 ? [] : [fHo(s, e)]), ...B(s)];
}
function B(s) {
  let e = [];
  for (let i of ["projectSettings", "localSettings"]) {
    if (i === "projectSettings" && Xy()) continue;
    let n = fn(i);
    if (n !== void 0) e.push(mHo(s, i, n, i === "projectSettings" ? "project settings" : "local settings"));
    if (i === "localSettings") {
      let r = wh();
      if (r !== void 0 && r !== n) e.push(mHo(s, i, r, "legacy local settings"));
    }
  }
  return e;
}
async function M(s, e) {
  let hostFiles = s.hostFiles;
  if (!hostFiles.serves("system")) {
    if (!e.systemSpaceServingLogged) e.systemSpaceServingLogged = !0, t("settingsPrime: the managed-settings file tier is not read ahead (the backend does not serve 'system'); the policy walk reads the host's files itself");
    return;
  }
  let n = nde(NJ()),
    r = e.policyWalkCount,
    a = n.map(item => gHo(s, h(item, "managed-settings.json"), "managed settings", e)),
    [g, c] = await Promise.all([Promise.all(n.map(item => ZVs(hostFiles, h(item, "managed-settings.d")))), Promise.all(a.map(item => item.read()))]),
    o = {
      listings: [],
      unlisted: [],
      layers: [...a],
      walksAtReadStart: r
    },
    f = [];
  for (let [u, S] of n.entries()) {
    let p = g[u],
      dir = h(S, "managed-settings.d");
    if (p.kind === "failing") {
      t(`settingsPrime: ${dir} not listed through the backend (backend listing failed: ${p.code}${p.failureClass ? ` (${p.failureClass})` : ""}); the folder read serves`), o.unlisted.push(dir);
      continue;
    }
    if (p.names.length === 0) {
      t(`settingsPrime: ${dir} has no drop-ins to read ahead; the folder read confirms`), o.unlisted.push(dir);
      continue;
    }
    o.listings.push({
      dir: dir,
      names: p.names
    });
    for (let j of p.names) f.push(gHo(s, h(dir, j), "managed settings drop-in", e));
  }
  return o.layers.push(...f), {
    ...o,
    reads: Promise.all(f.map(item => item.read())).then(u => [...c, ...u])
  };
}
async function O(s, e, i) {
  let n = B(s);
  if (n.length === 0) return !0;
  let r = await Promise.all(n.map(item => item.read()));
  if (e.epoch !== i) return !1;
  return Q(e, n, r, i), !0;
}
var names = Object.freeze([]);
function P(s, e, i) {
  if (s.hostFiles.serving("system") !== "absent" || e.systemAttestationContradicted) return;
  let n = nde(NJ()).map(item => ({
    dropInDir: h(item, "managed-settings.d"),
    basePath: h(item, "managed-settings.json")
  }));
  if (n.some(({
    basePath: basePath,
    dropInDir: dropInDir
  }) => e.walkReadManagedFileIn(basePath, dropInDir))) {
    e.systemAttestationContradicted = !0;
    for (let {
      basePath: basePath_2,
      dropInDir: dropInDir_2
    } of n) e.clearFolderListing(dropInDir_2, i), e.unseedParsedFile(basePath_2, "policySettings", i);
    l(Error("settings: a managed-settings file was read from a folder the host attested absent ('system' space); the attestation is ignored for the rest of this process"));
    return;
  }
  if (!e.systemSpaceServingLogged) e.systemSpaceServingLogged = !0, t("settingsPrime: the host attests the 'system' space absent, so this machine's policy folder (or the one CLAUDE_CODE_MANAGED_SETTINGS_PATH names) is not read and the session has no managed-settings files");
  for (let {
    basePath: basePath_3,
    dropInDir: dropInDir_3
  } of n) if (e.seedFolderListing(dropInDir_3, names, i), !e.walkRead(basePath_3)) e.seedParsedFile(basePath_3, "policySettings", Ene(), i);
  return {
    listings: n.map(({
      dropInDir: r
    }) => ({
      dir: r,
      names: names
    })),
    layers: n.map(({
      basePath: r
    }) => ({
      path: r,
      parsed: Ene()
    }))
  };
}
async function U(s, e, i) {
  if (P(s, e, i) !== void 0) return e.epoch === i;
  let n = await M(s, e);
  if (n === void 0) return C(e, i), !0;
  let r = await n.reads;
  if (e.epoch !== i) return !1;
  let {
    verdicts: verdicts
  } = H(e, n, i);
  return A(e, n, r, verdicts, i), !0;
}
function A(s, e, i, n, r) {
  let a = [],
    g = new Set();
  for (let [c, layer] of e.layers.entries()) {
    let f = i[c];
    if (f.kind !== "seeded") {
      t(`settingsPrime: ${layer.label} not seeded (${G5n(f)}); the file read serves`), s.managedFileReads.delete(layer.path), s.unseedParsedFile(layer.path, layer.source, r);
      continue;
    }
    g.add(layer.path), s.managedFileReads.set(layer.path, {
      contentHash: f.contentHash,
      parsed: f.parsed
    });
    let u = n.get(_(layer.path)),
      S = u !== void 0 && u !== "install" ? u : s.policyInstallVerdict(layer.path, f.parsed, e.walksAtReadStart);
    if (S === "raced") {
      s.dropRetainedLayer(layer.path), t(`settingsPrime: ${layer.label} not installed (the walk read different content while this read was in flight); re-verified next generation`);
      continue;
    }
    if (S === "deferred") {
      t(`settingsPrime: ${layer.label} changed after this generation's policy walk; it applies from the next reset, as today`), a.push({
        layer: layer,
        parsed: f.parsed
      });
      continue;
    }
    if (s.seedParsedFile(layer.path, layer.source, f.parsed, r)) a.push({
      layer: layer,
      parsed: f.parsed
    });
  }
  for (let c of [...s.managedFileReads.keys()]) if (!g.has(c)) s.managedFileReads.delete(c), s.unseedParsedFile(c, "policySettings", r);
  return a;
}
function C(s, e) {
  for (let i of [...s.managedFileReads.keys()]) s.managedFileReads.delete(i), s.unseedParsedFile(i, "policySettings", e);
  for (let i of nde(NJ())) s.clearFolderListing(h(i, "managed-settings.d"), e);
}
function H(s, e, i) {
  for (let a of e.unlisted) s.clearFolderListing(a, i);
  let kept = [],
    verdicts_2 = new Map();
  for (let a of e.listings) {
    let g = s.folderInstallVerdict(a.dir, a.names, e.walksAtReadStart);
    if (verdicts_2.set(a.dir, g), g === "raced") s.clearFolderListing(a.dir, i), t(`settingsPrime: ${a.dir} listing not installed (a read this generation went by another membership while it was in flight); the walk's membership or its own folder read serves until the next reset`);else if (g === "deferred") t(`settingsPrime: ${a.dir} membership changed after this generation's policy walk; it applies from the next reset, as today`), kept.push(a);else if (s.seedFolderListing(a.dir, a.names, i)) kept.push(a);
  }
  return {
    kept: kept,
    verdicts: verdicts_2
  };
}
function Q(s, e, i, n) {
  for (let [r, a] of e.entries()) {
    let g = i[r],
      c = g.kind === "seeded" ? g.parsed : g.kind === "absent" && a.whenAbsent === "seedAbsence" ? Ene() : void 0;
    if (c !== void 0 && s.walkReadDiffers(a.path, c)) t(`settingsPrime: ${a.label} not installed (the file read already saw different content this generation)`);else if (g.kind === "seeded") s.seedParsedFile(a.path, a.source, g.parsed, n);else if (c !== void 0) b7e(a.path), s.seedParsedFile(a.path, a.source, c, n);else t(`settingsPrime: ${a.label} not seeded (${G5n(g)}); the file read serves`);
  }
}
async function X(s, e) {
  if (!W()) return [];
  let epoch_4 = e.epoch;
  try {
    let n = P(s, e, epoch_4);
    if (n !== void 0) return [...n.listings.map(({
      dir: dir_2,
      names: names_2
    }) => e.retainFolderListing(dir_2, names_2)), ...n.layers.map(({
      path: path,
      parsed: parsed
    }) => e.retainLayer(path, parsed))];
    let r = await M(s, e);
    if (r === void 0) return C(e, epoch_4), [];
    let a = await r.reads;
    if (e.epoch !== epoch_4) return [];
    let g = H(e, r, epoch_4);
    return [...g.kept.map(({
      dir: dir_3,
      names: names_3
    }) => e.retainFolderListing(dir_3, names_3)), ...A(e, r, a, g.verdicts, epoch_4).map(({
      layer: layer_2,
      parsed: parsed_2
    }) => e.retainLayer(layer_2.path, parsed_2))];
  } catch (error) {
    return t(`settings: managed settings not re-seeded: ${d(error)}; the file reads serve`, {
      level: "warn"
    }), [];
  }
}
async function q(s, e) {
  E(e, await I(s, e));
}
async function I(s, e) {
  if (!W()) return;
  if (typeof process.getuid !== "function" && typeof process.geteuid !== "function") return;
  let root = hHo();
  if (root === void 0 || e.localStoreProbes.hasCanonicalRootOwnerUids(root)) return;
  let hostFiles_2 = s.hostFiles;
  if (!hostFiles_2.serves("workspace")) {
    t("settingsPrime: ownership of the local settings root not read ahead (the backend does not serve the workspace); the probe runs as today");
    return;
  }
  let [r, a, g] = await Promise.allSettled([hostFiles_2.stat(Bf.workspace(root)), hostFiles_2.stat(Bf.workspace(h(root, ".git")), {
      follow: !1
    }), hostFiles_2.stat(Bf.workspace(h(root, ".claude")), {
      follow: !1
    })]),
    c = y(r),
    o = y(a),
    f = y(g),
    u = J(c, o, f);
  if ("skipped" in u) {
    t(`settingsPrime: ownership of the local settings root not read ahead (${u.skipped}); the probe runs as today`);
    return;
  }
  return {
    root: root,
    uids: u.uids
  };
}
function E(s, e) {
  if (e !== void 0 && s.localStoreProbes.primeCanonicalRootOwnerUids(e.root, e.uids)) t("settingsPrime: ownership of the local settings root read ahead through the backend");
}
function y(s) {
  if (s.status === "rejected") throw s.reason;
  return s.value;
}
function J(s, e, i) {
  if (!s.ok) return {
    skipped: `stat of the root failed: ${k(s.error)}`
  };
  if (!e.ok) return {
    skipped: `lstat of .git failed: ${k(e.error)}`
  };
  if (!i.ok) return {
    skipped: `lstat of .claude failed: ${k(i.error)}`
  };
  let rootUid = w(s.value);
  if (rootUid === void 0) return {
    skipped: s.value.kind === "absent" ? "the root is absent" : "no owner uid for the root"
  };
  let gitEntryUid = w(e.value);
  if (gitEntryUid === void 0) return {
    skipped: e.value.kind === "absent" ? "no .git entry (left to the probe's per-call throw)" : "no owner uid for .git"
  };
  let claudeEntryUid = null;
  if (i.value.kind !== "absent") {
    let g = w(i.value);
    if (g === void 0) return {
      skipped: "no owner uid for .claude"
    };
    claudeEntryUid = g;
  }
  return {
    uids: {
      rootUid: rootUid,
      gitEntryUid: gitEntryUid,
      claudeEntryUid: claudeEntryUid
    }
  };
}
function w(s) {
  return s.kind === "absent" ? void 0 : s.uid;
}
function k(s) {
  return s.code === "Failed" ? s.telemetryCode ?? s.failureClass : s.code;
}
export { pPo, fPo, Din };