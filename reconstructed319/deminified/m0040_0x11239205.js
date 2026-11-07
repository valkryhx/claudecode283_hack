// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Jae, Pr } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { wqn } from "B:/~BUN/root/chunk-db8vh085.js";
import { GIo, UKs, _qn, T4e } from "B:/~BUN/root/chunk-wt4dg253.js";
import { WIo } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W, Hoa, Uoa } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { homedir as xt } from "os";
import { resolve as M, sep as ot } from "path";
import { basename as yt, dirname as He } from "path";
function cOo(e) {
  return typeof e === "object" && e !== null;
}
function _P(e, n) {
  return Oe(e, n, ft, !1);
}
function k(e, n) {
  return Oe(e, n, Object.entries, !0);
}
function Oe(e, n, o, r) {
  let s = new Map(),
    i = [[e, n]];
  while (i.length > 0) {
    let [a, l] = i.pop();
    if (!cOo(a) || !cOo(l)) {
      if (a !== l) return !1;
      continue;
    }
    let p = s.get(a);
    if (p !== void 0) {
      if (p.has(l)) continue;
      if (!r) return !1;
      p.add(l);
    } else s.set(a, new Set([l]));
    let f = new Map(o(l)),
      S = o(a);
    if (!mt(a, l) || S.length !== f.size) return !1;
    for (let [u, m] of S) {
      if (!f.has(u)) return !1;
      i.push([m, f.get(u)]);
    }
  }
  return !0;
}
function ft(e) {
  return Object.entries(e).filter(([, n]) => n !== void 0);
}
function mt(e, n) {
  if (Array.isArray(e) || Array.isArray(n)) return Array.isArray(e) && Array.isArray(n) && e.length === n.length;
  return Le(e) && Le(n);
}
function Le(e) {
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}
class A {
  walked = new Map();
  folderIsLink = new Map();
  managedMcp = null;
  clearWalk() {
    this.walked.clear(), this.folderIsLink.clear();
  }
  noteWalked(e, n) {
    if (!this.walked.has(e)) this.walked.set(e, n());
  }
  linkOf(e) {
    return this.walked.get(e) ?? null;
  }
  isLinked(e) {
    return this.linkOf(e) !== null;
  }
  all() {
    return [...this.walked.values(), this.managedMcp].filter(item => item !== null);
  }
}
var loa = ["not_admin_owned", "other_writable", "group_writable", "symlinked", "unknown", "not_evaluated", "protected"];
function doa({
  file: file,
  folder: folder,
  linked: linked,
  posix: posix
}) {
  if (!posix) return "not_evaluated";
  if (file === void 0 || folder === void 0) return linked ? "symlinked" : "unknown";
  if (file.uid !== 0 || folder.uid !== 0) return "not_admin_owned";
  let s = file.mode | folder.mode;
  if ((s & 2) !== 0) return "other_writable";
  if ((s & 16) !== 0) return "group_writable";
  return linked ? "symlinked" : "protected";
}
function coa({
  file: file_2,
  folder: folder_2,
  euid: euid,
  groups: groups,
  posix: posix_2
}) {
  if (!posix_2 || euid === void 0) return;
  if (euid === 0) return !0;
  let i = [file_2, folder_2].filter(item => item !== void 0),
    a = i.map(item => {
      if (item.uid === euid || (item.mode & 2) !== 0) return !0;
      if ((item.mode & 16) === 0) return !1;
      return item.gid === void 0 ? void 0 : groups().includes(item.gid);
    });
  if (a.includes(!0)) return !0;
  return i.length < 2 || a.includes(void 0) ? void 0 : !1;
}
class L {
  documents = new Map();
  folderOwners = new Map();
  siblingRecords = new Map();
  setsOrgPin = !1;
  clear() {
    this.documents.clear(), this.folderOwners.clear(), this.siblingRecords.clear(), this.setsOrgPin = !1;
  }
  note(e, n) {
    this.documents.set(e, n);
  }
  all() {
    return [...this.documents];
  }
}
function Fe() {
  return {
    answers: null,
    computed: null,
    pass: Promise.resolve(),
    queuedFor: void 0,
    isAnnouncing: !1,
    askedOf: "",
    askedAbout: null,
    visited: [],
    unsettled: new Set()
  };
}
class O {
  holders = 0;
  tiers;
  baseline;
  lingering;
  tier(e) {
    if (this.holders === 0 && this.lingering !== void 0) {
      let n = this.lingering();
      if (n === void 0) this.lingering = void 0;
      this.tiers = n;
    }
    return this.tiers?.get(e);
  }
  engage(e, n) {
    let o;
    if (this.holders === 0) {
      let s = e(),
        i = n?.() ?? s;
      if (this.lingering !== void 0) o = {
        tiers: this.tiers,
        lingering: this.lingering
      }, this.lingering = void 0;
      this.tiers = s, this.baseline = i;
    }
    this.holders++;
    let r = !1;
    return {
      release: () => {
        if (r) return {
          last: !1
        };
        if (r = !0, this.holders--, this.holders > 0) return {
          last: !1
        };
        return this.tiers = void 0, this.lingering = void 0, this.baseline = void 0, {
          last: !0
        };
      },
      abandon: () => {
        if (r) return;
        if (r = !0, this.holders--, this.holders === 0) this.tiers = o?.tiers, this.lingering = o?.lingering, this.baseline = void 0;
      }
    };
  }
  replace(e) {
    if (this.holders !== 1) throw Error("the held copy is shared");
    this.tiers = e(), this.baseline = this.tiers;
  }
  whileLive(e) {
    let tiers = this.tiers,
      lingering = this.lingering;
    this.tiers = void 0, this.lingering = void 0;
    try {
      return e();
    } finally {
      this.tiers = tiers, this.lingering = lingering;
    }
  }
  baselineTier(e) {
    return this.baseline?.get(e);
  }
  differingTiers(e) {
    return this.baseline === void 0 ? [] : St(this.baseline, e);
  }
  rebaseline(e, n) {
    if (this.baseline === void 0) return;
    let o = new Map(this.baseline);
    for (let r of n) {
      let s = e.get(r);
      if (s === void 0) o.delete(r);else o.set(r, s);
    }
    this.baseline = o;
  }
  linger(e, n) {
    if (this.holders === 0) this.tiers = e, this.lingering = n, this.baseline = void 0;
  }
  isHeld() {
    return this.holders > 0;
  }
}
function Ecn(e) {
  return e !== null && Object.keys(e).length === 0 ? null : e;
}
function Ie(e) {
  return {
    ...e,
    settings: Ecn(e.settings),
    unfiltered: Ecn(e.unfiltered),
    ...(e.legacy !== void 0 && {
      legacy: Ecn(e.legacy)
    })
  };
}
function St(e, n) {
  return [...e.keys(), ...[...n.keys()].filter(item => !e.has(item))].filter(item => {
    let r = e.get(item),
      s = n.get(item);
    return !k(r && Ie(r), s && Ie(s));
  });
}
var DWs = ["forceLoginOrgUUID", "forceLoginMethod", "forceLoginGatewayUrl"];
class $nt {
  mergedSettings = null;
  perSource = new Map();
  parsedFiles = new Map();
  firstReads = new Map();
  ownWritesBeforeFirstCheck = new Map();
  firstReadsChecked = !1;
  managedDocumentLinks = new A();
  managedFileProtections = new L();
  folderListings = new Map();
  managedFileReads = new Map();
  primedFiles = new Set();
  policyWalks = 0;
  walkedFolders = new Map();
  policy = {};
  lastPolicyEnvComposition = null;
  isLoadingFromDisk = !1;
  autoModeUntrustedSourceWarned = !1;
  parentLeftOutReason = null;
  changed = De();
  internalWrites = new Map();
  enabledSources;
  inlineFlagParse;
  repoTierFreeze = new O();
  hookedMerge = Fe();
  pluginBase;
  subagentStatusLinePluginContext;
  epoch = 0;
  systemSpaceServingLogged = !1;
  systemAttestationContradicted = !1;
  backendReadResetTail = Promise.resolve();
  backgroundWorkTail = Promise.resolve();
  invalidated = De();
  pluginBaseLoaded = !1;
  primer;
  lastSeededUserLayer;
  localStoreProbes = new Be();
  retained = new Map();
  retainedListings = new Map();
  noteFirstRead(e, n) {
    if (!this.firstReadsChecked && !this.firstReads.has(e)) this.firstReads.set(e, n);
  }
  noteOwnWrite(e, contentHash) {
    if (!this.firstReadsChecked) this.ownWritesBeforeFirstCheck.set(e, {
      writes: (this.ownWritesBeforeFirstCheck.get(e)?.writes ?? 0) + 1,
      contentHash: contentHash
    });
  }
  withdrawOwnWrite(e) {
    let n = this.ownWritesBeforeFirstCheck.get(e);
    if (n !== void 0 && n.writes > 1) this.ownWritesBeforeFirstCheck.set(e, {
      ...n,
      writes: n.writes - 1
    });else this.ownWritesBeforeFirstCheck.delete(e);
  }
  forgetFirstReads({
    checkAgain = !1
  } = {}) {
    if (this.firstReads.clear(), this.ownWritesBeforeFirstCheck.clear(), checkAgain) this.firstReadsChecked = !1;
  }
  setPluginBase(e) {
    this.pluginBase = e, this.pluginBaseLoaded = !0;
  }
  clearPluginBase() {
    this.pluginBase = void 0, this.subagentStatusLinePluginContext = void 0;
  }
  invalidateAll(e) {
    if (this.epoch++, this.mergedSettings = null, this.perSource.clear(), this.parsedFiles.clear(), this.managedDocumentLinks.clearWalk(), this.managedFileProtections.clear(), this.primedFiles.clear(), this.policyWalks = 0, this.walkedFolders.clear(), this.folderListings.clear(), this.policy = {}, e?.userLayer === "retain" && X() && this.primer !== void 0) {
      for (let [n, o] of this.retained) this.parsedFiles.set(n, o.parsed), this.primedFiles.add(n);
      for (let [n, o] of this.retainedListings) this.folderListings.set(n, o.names);
    } else this.retained.clear(), this.retainedListings.clear();
    this.invalidated.emit();
  }
  invalidatePolicyLayer() {
    this.mergedSettings = null, this.perSource.delete("policySettings"), this.policy = {};
  }
  onInvalidate(e) {
    return this.invalidated.subscribe(e);
  }
  seedParsedFile(path, n, o, r) {
    if (r !== this.epoch) return !1;
    let s = this.parsedFiles.get(path),
      i = s !== void 0 && F(s, o),
      a = !i,
      parsed = i ? s : o;
    if (this.parsedFiles.set(path, parsed), n === "userSettings") this.lastSeededUserLayer = {
      path: path,
      parsed: parsed
    };
    if (a || this.primedFiles.has(path)) this.primedFiles.add(path);
    let p = this.retained.get(path);
    if (p !== void 0) p.parsed = parsed;
    if (a) this.dropDerivedCaches(n);
    return !0;
  }
  walkReadDiffers(e, n) {
    let o = this.parsedFiles.get(e);
    return o !== void 0 && !this.primedFiles.has(e) && !k(o, n);
  }
  unseedParsedFile(e, n, o) {
    if (o !== this.epoch) return;
    if (this.retained.delete(e), !this.primedFiles.has(e) || n === "policySettings" && this.policyWalks > 0) return;
    this.primedFiles.delete(e), this.parsedFiles.delete(e), this.dropDerivedCaches(n);
  }
  dropDerivedCaches(e) {
    if (this.perSource.delete(e), this.mergedSettings = null, e === "policySettings") this.policy = {};
  }
  primedFolderListing(e) {
    return X() ? this.folderListings.get(e) : void 0;
  }
  folderListingForPolicyWalk(e) {
    if (!X()) return;
    this.policyWalks++;
    let n = this.folderListings.get(e);
    if (!this.walkedFolders.has(e) || n !== void 0) this.walkedFolders.set(e, n ?? null);
    return n;
  }
  noteWalkListing(e, n) {
    if (!X()) return;
    this.walkedFolders.set(e, n);
  }
  get policyWalkCount() {
    return this.policyWalks;
  }
  policyInstallVerdict(e, n, o) {
    let r = this.parsedFiles.get(e);
    if (r === void 0 || F(r, n)) return "install";
    if (!this.primedFiles.has(e)) return "raced";
    if (this.policyWalks === 0) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  folderInstallVerdict(e, n, o) {
    if (!this.walkedFolders.has(e)) return this.hasParsedDropInOutside(e, n) ? "raced" : "install";
    let r = this.walkedFolders.get(e);
    if (r !== null && r !== void 0 && k(r, n)) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  seedFolderListing(e, n, o) {
    if (o !== this.epoch) return !1;
    let r = this.folderListings.get(e);
    this.folderListings.set(e, n);
    let s = this.retainedListings.get(e);
    if (s !== void 0) s.names = n;
    if (r !== void 0 && !k(r, n)) this.dropDerivedCaches("policySettings");
    return !0;
  }
  walkReadManagedFileIn(e, n) {
    for (let [o, r] of this.parsedFiles) if (!o.includes("\x00") && !this.primedFiles.has(o) && (r.settings !== null || r.errors.length > 0) && (o === e || He(o) === n)) return !0;
    return !1;
  }
  walkRead(e) {
    return this.parsedFiles.has(e) && !this.primedFiles.has(e);
  }
  hasParsedDropInOutside(e, n) {
    for (let o of this.parsedFiles.keys()) if (!o.includes("\x00") && !this.primedFiles.has(o) && He(o) === e && !n.includes(yt(o))) return !0;
    return !1;
  }
  clearFolderListing(e, n) {
    if (n !== this.epoch) return;
    if (this.retainedListings.delete(e), !this.folderListings.has(e) || this.walkedFolders.has(e)) return;
    this.folderListings.delete(e), this.dropDerivedCaches("policySettings");
  }
  retainLayer(e, n) {
    let o = this.parsedFiles.get(e),
      r = {
        parsed: o !== void 0 && F(o, n) ? o : n
      };
    return this.retained.set(e, r), () => {
      if (this.retained.get(e) === r) this.retained.delete(e);
    };
  }
  dropRetainedLayer(e) {
    this.retained.delete(e);
  }
  retainFolderListing(e, names) {
    let o = {
      names: names
    };
    return this.retainedListings.set(e, o), () => {
      if (this.retainedListings.get(e) === o) this.retainedListings.delete(e);
    };
  }
}
class Be {
  ownerUidsByRoot = new Map();
  realHomeDir = void 0;
  canonicalRootOwnerUids(e, n) {
    let o = this.ownerUidsByRoot.get(e);
    if (o !== void 0) return o;
    let r = n(e);
    return this.ownerUidsByRoot.set(e, r), r;
  }
  hasCanonicalRootOwnerUids(e) {
    return this.ownerUidsByRoot.has(e);
  }
  primeCanonicalRootOwnerUids(e, n) {
    if (this.ownerUidsByRoot.has(e)) return !1;
    return this.ownerUidsByRoot.set(e, n), !0;
  }
  clearCanonicalRootOwnerUids() {
    this.ownerUidsByRoot.clear();
  }
  normalizedRealHomeDir(e) {
    return this.realHomeDir ??= e(), this.realHomeDir;
  }
  clearNormalizedRealHomeDir() {
    this.realHomeDir = void 0;
  }
}
var QHr = new W(() => new $nt());
function F(e, n) {
  return k({
    ...e,
    fileOwner: void 0
  }, {
    ...n,
    fileOwner: void 0
  });
}
function Eme() {
  return {
    sent: new Set(),
    rejected: new Set(),
    declaredTools: void 0,
    noChannelTools: void 0,
    turnDeniedTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(),
    surfacedOnWire: new Set(),
    definedByValue: new Set(),
    inlineToolsRefusal: {
      rejectedHeader: void 0,
      announcementsByName: new Set()
    },
    advisorHeld: void 0,
    wireShapeSeed: void 0,
    webSearchHistoryRejected: !1,
    mediaItemCap: void 0,
    refusedToolSchemas: new Map(),
    systemMessagesAcceptedBy: new Set(),
    nameOnlyEntries: {
      held: new Set(),
      refused: !1,
      reported: void 0
    }
  };
}
function XO(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: void 0,
    noChannelTools: void 0,
    turnDeniedTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    refusedToolSchemas: new Map(e.refusedToolSchemas),
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: {
      ...e.nameOnlyEntries,
      held: new Set(e.nameOnlyEntries.held)
    }
  };
}
function jjt(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: e.declaredTools,
    noChannelTools: e.noChannelTools,
    turnDeniedTools: e.turnDeniedTools,
    declaredToolsDecided: e.declaredToolsDecided,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    refusedToolSchemas: new Map(e.refusedToolSchemas),
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: {
      ...e.nameOnlyEntries,
      held: new Set(e.nameOnlyEntries.held)
    }
  };
}
function ZHr(e) {
  uOo(e), e.nameOnlyEntries.held.clear(), e.nameOnlyEntries.refused = !1, e.nameOnlyEntries.reported = void 0;
}
function uOo(e) {
  e.declaredTools = void 0, e.noChannelTools = void 0, e.declaredToolsDecided = !1;
}
function Wjt(e) {
  e.systemMessagesAcceptedBy.clear();
  let wireShapeSeed = e.wireShapeSeed;
  if (wireShapeSeed === void 0) return;
  for (let o of wireShapeSeed.sent) e.sent.delete(o);
  for (let o of wireShapeSeed.rejected) e.rejected.delete(o);
  e.wireShapeSeed = void 0;
}
function LWs(e, n) {
  for (let o of n.sent) g0(e, o);
  for (let o of n.rejected) Zm(e, o);
  e.wireShapeSeed = n;
}
function uoa(e, n) {
  let wireShapeSeed_2 = e.wireShapeSeed;
  e.wireShapeSeed = {
    record: wireShapeSeed_2?.record ?? {},
    sent: wireShapeSeed_2?.sent ?? [],
    rejected: [...(wireShapeSeed_2?.rejected ?? []), n]
  };
}
function zjt(e) {
  e.advisorHeld = void 0;
}
function e$r(e) {
  let {
    rejectedHeader: rejectedHeader,
    announcementsByName: announcementsByName
  } = e.inlineToolsRefusal;
  if (rejectedHeader !== void 0) e.rejected.delete(rejectedHeader), e.inlineToolsRefusal.rejectedHeader = void 0;
  for (let r of announcementsByName) e.nameOnlyAnnouncements.delete(r);
  announcementsByName.clear();
}
function foa(e) {
  return e.advisorHeld = void 0, e;
}
function Gjt(e) {
  e.declaredToolsDecided = !0;
}
function P(e) {
  let n = Eme();
  if (n.declaredTools = e.declaredTools, n.noChannelTools = e.noChannelTools, n.turnDeniedTools = e.turnDeniedTools, n.declaredToolsDecided = e.declaredToolsDecided, n.advisorHeld = e.advisorHeld, e.wireShapeSeed !== void 0) LWs(n, e.wireShapeSeed);
  let {
    rejectedHeader: rejectedHeader_2,
    announcementsByName: announcementsByName_2
  } = e.inlineToolsRefusal;
  if (rejectedHeader_2 !== void 0) NWs(n, rejectedHeader_2);
  FWs(n, announcementsByName_2), n.webSearchHistoryRejected = e.webSearchHistoryRejected, n.mediaItemCap = e.mediaItemCap;
  for (let [s, i] of e.refusedToolSchemas) n.refusedToolSchemas.set(s, i);
  return n.nameOnlyEntries.refused = e.nameOnlyEntries.refused, n.nameOnlyEntries.reported = e.nameOnlyEntries.reported, n;
}
function NWs(e, n) {
  Zm(e, n), e.inlineToolsRefusal.rejectedHeader = n;
}
function FWs(e, n) {
  for (let o of n) e.inlineToolsRefusal.announcementsByName.add(o), e.nameOnlyAnnouncements.add(o);
}
function GVn(e, n) {
  if (e.declaredTools === void 0) e.declaredTools = n;
  Gjt(e);
}
function Unt(e) {
  return e.definedByValue.size === 0 ? e.surfacedOnWire : new Set([...e.surfacedOnWire, ...e.definedByValue]);
}
function g0(e, n) {
  if (!e.rejected.has(n)) e.sent.add(n);
}
function L_(e, n) {
  return e.sent.has(n) && !e.rejected.has(n);
}
function Zm(e, n) {
  e.sent.delete(n), e.rejected.add(n);
}
function If(e, n) {
  return e.rejected.has(n);
}
function l4e(e, n) {
  e.sent.delete(n), e.rejected.delete(n);
}
function poa(e) {
  e.webSearchHistoryRejected = !0;
}
function t$r(e) {
  e.webSearchHistoryRejected = !1;
}
function fOo(e, n) {
  return e.mediaItemCap?.model === n ? e.mediaItemCap : void 0;
}
function pOo(e, n) {
  e.mediaItemCap = n;
}
function Vjt(e) {
  e.mediaItemCap = void 0;
}
function n$r(e) {
  e.refusedToolSchemas.clear();
}
class I {
  spawner = void 0;
  pairings = new Map();
  mainEnsureInFlight = !1;
  mainSlotBlocked = !1;
}
var VVn = /^[A-Za-z0-9_.:-]{1,256}$/,
  KR = "unreadable-tools-used-before-summary";
function yY(e) {
  return VVn.test(e) ? e : "unreadable-tools-used-before-summary";
}
var qA = "tools-used-before-summary";
function mOo(e) {
  return `<${qA}>${e.map(yY).join(", ")}</${qA}>`;
}
function KVn(e) {
  return /(?:^|__|:)download_gmail_attachment$/.test(e);
}
var vt = 256;
class E {
  #e = new Set();
  #t = 0;
  #n = !1;
  #r;
  #o;
  #s;
  #i = !1;
  #d = new Set();
  #l = new Map();
  record(e) {
    let n = !1;
    for (let o of e) {
      if (typeof o !== "string" || o === "") continue;
      let r = yY(o);
      for (let s of this.#d) s.push(r);
      if (!this.#e.has(r)) this.#e.add(r), n = !0;
    }
    if (n) this.#t++;
    return n;
  }
  has(e) {
    return this.#e.has(e);
  }
  noteDelivered(e, n) {
    this.#l.delete(e), this.#l.set(e, n);
    for (let o of this.#l.keys()) {
      if (this.#l.size <= vt) break;
      this.#l.delete(o);
    }
  }
  takeDelivered(e) {
    let n = this.#l.get(e);
    return this.#l.delete(e), n;
  }
  names() {
    return [...this.#e];
  }
  size() {
    return this.#e.size;
  }
  generation() {
    return this.#t;
  }
  built(e) {
    if (this.#o?.generation !== this.#t) this.#o = {
      generation: this.#t,
      value: e(this.names())
    };
    return this.#o.value;
  }
  raiseHeaderSizeSteps(e) {
    let n = this.#r;
    if (n && e.count <= n.count && e.bytes <= n.bytes && (n.capped || !e.capped)) return !1;
    return this.#r = {
      count: Math.max(e.count, n?.count ?? 0),
      bytes: Math.max(e.bytes, n?.bytes ?? 0),
      capped: e.capped || n?.capped === !0
    }, !0;
  }
  reportTruncationOnce() {
    if (this.#n) return !1;
    return this.#n = !0, !0;
  }
  connectorDownloadsInReach() {
    return this.#s;
  }
  noteConnectorDownloadsInReach(e) {
    if (this.#s !== "found") this.#s = e;
  }
  connectorDataFromEarlierDownload() {
    return this.#i;
  }
  noteConnectorDataFromEarlierDownload() {
    this.#i = !0;
  }
  captureRecords() {
    let e = [];
    return this.#d.add(e), e;
  }
  endCapture(e) {
    this.#d.delete(e);
  }
  replace(e) {
    this.clear(), this.record(e);
  }
  clear() {
    this.#e.clear(), this.#t++, this.#n = !1, this.#s = void 0, this.#i = !1;
  }
}
class D {
  #e = Eme();
  #t = void 0;
  #n;
  toolsUsed = new E();
  stickyBetas() {
    return this.#e;
  }
  unlatchStickyBetas() {
    this.#e = P(this.#e);
  }
  atisLatch() {
    return this.#t;
  }
  replaceAtisLatch(e) {
    this.#t = e, this.#n?.(e);
  }
  watchAtisLatch(e) {
    this.#n = e;
  }
  reset() {
    this.#e = Eme(), this.#t = void 0, this.toolsUsed.clear();
  }
}
var Kjt = {
  inputTokens: 0,
  outputTokens: 0,
  cacheReadInputTokens: 0,
  cacheCreationInputTokens: 0
};
function C(e) {
  let n = Object.create(null);
  return Object.assign(n, e);
}
function Ue(e) {
  let n = C();
  for (let [o, r] of Object.entries(e)) n[o] = {
    ...r
  };
  return n;
}
class B {
  #e = 0;
  #t = 0;
  #n = 0;
  #r = 0;
  #o = Date.now();
  #s = void 0;
  #i = 0;
  #d = 0;
  #l = 0;
  #c = Kjt;
  #u = 0;
  #h = Kjt;
  #p = !1;
  #a = 0;
  #f = C();
  #v = void 0;
  #S = null;
  #y = null;
  #g = null;
  spendRecorded = De();
  totalCostUSD() {
    return this.#e;
  }
  restoredCostUSD() {
    return this.#l;
  }
  restoredTokens() {
    return this.#c;
  }
  sideQueryCostUSD() {
    return this.#u;
  }
  totalAPIDuration() {
    return this.#t;
  }
  totalAPIDurationWithoutRetries() {
    return this.#n;
  }
  totalToolDuration() {
    return this.#r;
  }
  totalDuration() {
    return Math.max(0, Date.now() - this.#o);
  }
  sessionStartTime() {
    return this.#s ?? this.#o;
  }
  totalLinesAdded() {
    return this.#i;
  }
  totalLinesRemoved() {
    return this.#d;
  }
  hasUnknownModelCost() {
    return this.#p;
  }
  safetyStops() {
    return this.#a;
  }
  modelUsage() {
    return this.#f;
  }
  usageForModel(e) {
    return this.#f[e];
  }
  trackUsageSinceLastResult() {
    this.#v ??= C();
  }
  usageSinceLastResult() {
    return this.#v;
  }
  takeUsageSinceLastResult() {
    let e = this.#v;
    if (e !== void 0) this.#v = C();
    return e;
  }
  totalInputTokens() {
    return this.#m("inputTokens");
  }
  totalOutputTokens() {
    return this.#m("outputTokens");
  }
  totalCacheReadInputTokens() {
    return this.#m("cacheReadInputTokens");
  }
  totalCacheCreationInputTokens() {
    return this.#m("cacheCreationInputTokens");
  }
  totalWebSearchRequests() {
    return this.#m("webSearchRequests");
  }
  #m(e) {
    let n = 0;
    for (let o of Object.values(this.#f)) n += o[e];
    return n;
  }
  recordApiDuration(e, n) {
    this.#t += e, this.#n += n;
  }
  spentTokens() {
    return this.#h;
  }
  recordSpentTokens(e) {
    let n = this.#h;
    this.#h = {
      inputTokens: n.inputTokens + e.inputTokens,
      outputTokens: n.outputTokens + e.outputTokens,
      cacheReadInputTokens: n.cacheReadInputTokens + e.cacheReadInputTokens,
      cacheCreationInputTokens: n.cacheCreationInputTokens + e.cacheCreationInputTokens
    }, this.spendRecorded.emit();
  }
  recordCost(e, n, o) {
    this.#f[o] = n, this.#e += e, this.spendRecorded.emit();
  }
  recordSideQueryCost(e) {
    if (Number.isFinite(e) && e >= 0) this.#u += e, this.spendRecorded.emit();
  }
  recordToolDuration(e) {
    this.#r += e;
  }
  recordLinesChanged(e, n) {
    this.#i += e, this.#d += n;
  }
  markUnknownModelCost() {
    this.#p = !0;
  }
  recordSafetyStop() {
    this.#a += 1;
  }
  zeroDurationsAndCostForTests() {
    this.#t = 0, this.#n = 0, this.#e = 0, this.#l = 0;
  }
  restartClock() {
    this.#o = Date.now(), this.anchorLogicalStart(void 0);
  }
  anchorLogicalStart(e) {
    this.#s = e === void 0 ? void 0 : Math.min(e, this.#o);
  }
  restore({
    totalCostUSD: totalCostUSD,
    totalAPIDuration: totalAPIDuration,
    totalAPIDurationWithoutRetries: totalAPIDurationWithoutRetries,
    totalToolDuration: totalToolDuration,
    totalLinesAdded: totalLinesAdded,
    totalLinesRemoved: totalLinesRemoved,
    lastDuration: lastDuration,
    startTime: startTime,
    modelUsage: modelUsage,
    hasUnknownModelCost: hasUnknownModelCost
  }, S) {
    if (this.#g = S, this.#e = totalCostUSD, this.#l = totalCostUSD, this.#t = totalAPIDuration, this.#n = totalAPIDurationWithoutRetries, this.#r = totalToolDuration, this.#i = totalLinesAdded, this.#d = totalLinesRemoved, this.#p = hasUnknownModelCost ?? !1, modelUsage) this.#f = C(modelUsage);
    if (this.#c = {
      inputTokens: this.totalInputTokens(),
      outputTokens: this.totalOutputTokens(),
      cacheReadInputTokens: this.totalCacheReadInputTokens(),
      cacheCreationInputTokens: this.totalCacheCreationInputTokens()
    }, lastDuration !== void 0) this.#o = Date.now() - lastDuration;
    this.anchorLogicalStart(startTime);
  }
  registerSaver(e) {
    this.#S = e;
  }
  runSaver(e, n) {
    (this.#S ?? (n ? n.#S : null))?.(e);
  }
  registerTranscriptRecorder(e) {
    this.#y = e;
  }
  runTranscriptRecorder(e, n, o) {
    (this.#y ?? (o ? o.#y : null))?.(e, n);
  }
  snapshot() {
    return {
      ownerSessionId: this.#g,
      totalCostUSD: this.#e,
      totalAPIDuration: this.#t,
      totalAPIDurationWithoutRetries: this.#n,
      totalToolDuration: this.#r,
      startTime: this.#o,
      sessionLogicalStartTime: this.#s,
      totalLinesAdded: this.#i,
      totalLinesRemoved: this.#d,
      restoredCostUSD: this.#l,
      restoredTokens: this.#c,
      hasUnknownModelCost: this.#p,
      safetyStops: this.#a,
      modelUsage: Ue(this.#f)
    };
  }
  restoreSnapshot(e) {
    this.#g = e.ownerSessionId, this.#e = e.totalCostUSD, this.#t = e.totalAPIDuration, this.#n = e.totalAPIDurationWithoutRetries, this.#r = e.totalToolDuration, this.#o = e.startTime, this.#s = e.sessionLogicalStartTime, this.#i = e.totalLinesAdded, this.#d = e.totalLinesRemoved, this.#l = e.restoredCostUSD, this.#c = e.restoredTokens, this.#p = e.hasUnknownModelCost, this.#a = e.safetyStops, this.#f = Ue(e.modelUsage);
  }
  claim(e) {
    this.#g ??= e;
  }
  scopeTo(e) {
    this.#g = e;
  }
  ownerSessionId() {
    return this.#g;
  }
  belongsTo(e) {
    return this.#g === e;
  }
  reset(e) {
    this.#g = e, this.#e = 0, this.#l = 0, this.#c = Kjt, this.#t = 0, this.#n = 0, this.#r = 0, this.#o = Date.now(), this.anchorLogicalStart(void 0), this.#i = 0, this.#d = 0, this.#p = !1, this.#a = 0, this.#f = C();
  }
}
class j {
  #e = new Set();
  #t = new Map();
  consentSessionFallback(e) {
    return this.#e.has(e);
  }
  replaceConsentSessionFallback(e, n) {
    if (n) this.#e.add(e);else this.#e.delete(e);
  }
  sessionConsentKey(e) {
    return this.#t.get(e) ?? null;
  }
  replaceSessionConsentKey(e, n) {
    if (n === null) this.#t.delete(e);else this.#t.set(e, n);
  }
  reset() {
    this.#e.clear(), this.#t.clear();
  }
}
class N {
  #e = {
    registeredHooks: null
  };
  #t = void 0;
  #n = void 0;
  holder() {
    return this.#e;
  }
  mainThreadAgentType() {
    return this.#t;
  }
  replaceMainThreadAgentType(e) {
    this.#t = e;
  }
  mainThreadAgentHooks() {
    return this.#n;
  }
  replaceMainThreadAgentHooks(e) {
    this.#n = e;
  }
  reset() {
    this.#e = {
      registeredHooks: null
    }, this.#t = void 0, this.#n = void 0;
  }
}
class _ {
  #e = new Map();
  skills() {
    return this.#e;
  }
  lookup(e) {
    return this.#e.get(e);
  }
  record(e, n) {
    this.#e.set(e, n);
  }
  forget(e) {
    this.#e.delete(e);
  }
  forgetAll() {
    this.#e.clear();
  }
  reset() {
    this.#e = new Map();
  }
}
class G {
  #e = [];
  #t;
  #n;
  #r;
  #o;
  #s;
  approvedServers() {
    return this.#e;
  }
  approveServers(workspaceKey, n) {
    for (let name of n) if (!this.#e.some(item => item.name === name && item.workspaceKey === workspaceKey)) this.#e.push({
      name: name,
      workspaceKey: workspaceKey
    });
  }
  registerClientsAccessor(e) {
    this.#t = e;
  }
  acquireClientsAccessor(e) {
    if (this.#t) return () => {};
    return this.#t = e, () => {
      if (this.#t === e) this.#t = void 0;
    };
  }
  clientsFromAccessor() {
    return this.#t?.();
  }
  registerTenantClients(e) {
    this.#n = e;
  }
  clientsFromAccessorOrTenant() {
    return (this.#t ?? this.#n)?.();
  }
  registerConnectedClientWiring(e) {
    this.#r = e;
  }
  connectedClientWiring() {
    return this.#r;
  }
  registerToolsSwapper(e) {
    this.#o = e;
  }
  acquireToolsSwapper(e) {
    if (this.#o) return () => {};
    return this.#o = e, () => {
      if (this.#o === e) this.#o = void 0;
    };
  }
  swapServerTools(e, n, o) {
    if (!this.#o) return !1;
    return this.#o(e, n, o);
  }
  registerConnections(e) {
    this.#s = e;
  }
  acquireConnections(e) {
    if (this.#s) return () => {};
    return this.#s = e, () => {
      if (this.#s === e) this.#s = void 0;
    };
  }
  connections() {
    return this.#s;
  }
  reset() {
    this.#e = [], this.#t = void 0;
  }
}
class V {
  #e = void 0;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #o = void 0;
  #s = void 0;
  #i = !1;
  #d = !1;
  #l = void 0;
  #c = !1;
  #u = void 0;
  #h = void 0;
  #p = void 0;
  mainLoopModelOverride() {
    return this.#e;
  }
  overrideMainLoopModel(e) {
    this.#e = e;
  }
  mainLoopEffortState() {
    return this.#t;
  }
  replaceMainLoopEffortState(e) {
    this.#t = e;
  }
  initialMainLoopModel() {
    return this.#n;
  }
  replaceInitialMainLoopModel(e) {
    this.#n = e;
  }
  initialModelSettingLayer() {
    return this.#r;
  }
  replaceInitialModelSettingLayer(e) {
    this.#r = e;
  }
  resolvedOrgDefault() {
    return this.#o;
  }
  replaceResolvedOrgDefault(e) {
    this.#o = e;
  }
  initialEnvDefaultModel() {
    return this.#s;
  }
  replaceInitialEnvDefaultModel(e) {
    this.#s = e;
  }
  refusalFallbackOccurred() {
    return this.#i;
  }
  markRefusalFallbackOccurred(e) {
    this.#i = !0, this.#l ??= e;
  }
  refusalFallbackHeaderArmed() {
    return this.#d;
  }
  armRefusalFallbackHeader(e) {
    this.#d = !0, this.#l ??= e;
  }
  refusalFallbackLatchOriginRequestId() {
    return this.#l;
  }
  silentLaneServerArmed() {
    return this.#c;
  }
  armSilentLaneFromServer() {
    this.#c = !0;
  }
  forgetRefusalFallbackOccurred() {
    this.#i = !1, this.#d = !1, this.#c = !1, this.#l = void 0;
  }
  refusalFallbackModelLatch() {
    return this.#u;
  }
  replaceRefusalFallbackModelLatch(e, n = "superseded") {
    if (this.#u?.carriedEffort !== void 0 && e?.carriedEffort === void 0) this.#h = n;
    this.#u = e;
  }
  unlatchRefusalFallbackModel(e) {
    this.replaceRefusalFallbackModelLatch(void 0, e);
  }
  takeCarriedEffortEnd() {
    let e = this.#h;
    return this.#h = void 0, e;
  }
  availabilityFallbackChain() {
    return this.#p;
  }
  replaceAvailabilityFallbackChain(e) {
    this.#p = e;
  }
  reset() {
    this.#e = void 0, this.#t = void 0, this.#n = void 0, this.#r = void 0, this.#o = void 0, this.#s = void 0, this.#i = !1, this.#d = !1, this.#c = !1, this.#l = void 0, this.#u = void 0, this.#h = void 0, this.#p = void 0;
  }
}
class K {
  #e = new Map();
  #t = 0;
  #n = void 0;
  sections() {
    return this.#e;
  }
  recordSection(e, n) {
    this.#e.set(e, n);
  }
  forgetAllSections() {
    this.#e.clear();
  }
  noteInvalidation(e = "other") {
    this.#t += 1, this.#n = e;
  }
  epoch() {
    return this.#t;
  }
  lastInvalidationReason() {
    return this.#n;
  }
  reset() {
    this.#e = new Map();
  }
}
class J {
  #e = null;
  #t = null;
  #n = null;
  #r = null;
  #o = null;
  #s = 0;
  #i = null;
  #d = void 0;
  #l = 0;
  #c = void 0;
  #u = null;
  #h = null;
  #p = null;
  #a = null;
  #f = null;
  #v = !1;
  #S = null;
  #y = null;
  #g = !1;
  lastAPIRequest() {
    return this.#e;
  }
  replaceLastAPIRequest(e) {
    this.#e = e;
  }
  lastCancelledAPIMessageId() {
    return this.#t;
  }
  replaceLastCancelledAPIMessageId(e) {
    this.#t = e;
  }
  lastAPIRequestMessages() {
    return this.#n;
  }
  replaceLastAPIRequestMessages(e) {
    this.#n = e;
  }
  lastClassifierRequests() {
    return this.#r;
  }
  replaceLastClassifierRequests(e) {
    this.#r = e;
  }
  promptId() {
    return this.#o;
  }
  replacePromptId(e) {
    this.#o = e;
  }
  promptIndex() {
    return this.#s;
  }
  replacePromptIndex(e) {
    this.#s = e;
  }
  incrementPromptIndex() {
    return this.#s++, this.#s;
  }
  lastPersonPrompt() {
    return this.#i;
  }
  replaceLastPersonPrompt(e) {
    this.#i = e;
  }
  lastMainRequestId() {
    return this.#d;
  }
  replaceLastMainRequestId(e, n) {
    if (this.#d = e, this.#c = n, e === void 0) this.#l += 1;
  }
  lastMainResponse() {
    return this.#c;
  }
  mainChainReleaseCount() {
    return this.#l;
  }
  lastMainThreadCacheTtlMs() {
    return this.#u;
  }
  replaceLastMainThreadCacheTtlMs(ttlMs, model, o = !1) {
    this.#u = ttlMs, this.#a = Date.now(), this.#p = {
      ttlMs: ttlMs,
      model: model,
      requestAt: this.#a,
      askedAt: o ? this.#p?.askedAt ?? this.#a : this.#a
    }, this.#f = this.#a, this.#v = !0;
  }
  isLastMainThreadAskLive(e, n) {
    let o = this.#p;
    return o !== null && o.requestAt === this.#a && o.ttlMs === e && o.model === n && Date.now() - o.askedAt < e;
  }
  adjustLastMainThreadCacheTtlMs(e) {
    this.#u = e;
  }
  recordLastMainThreadCacheRenewal(e) {
    if (this.#a !== null) this.#h = {
      requestAt: this.#a,
      at: Math.max(e, this.lastMainThreadCacheRenewedAt() ?? -1 / 0)
    };
  }
  lastMainThreadCacheRenewedAt() {
    let e = this.#h;
    return e !== null && e.requestAt === this.#a ? e.at : null;
  }
  lastLiveMainThreadRequestAt() {
    return this.#f;
  }
  lastMainThreadRequestAt() {
    return this.#a;
  }
  mainThreadRequestedInProcess() {
    return this.#v;
  }
  recordMainThreadTurnStart() {
    this.#v = !0;
  }
  replaceLastMainThreadRequest(e, n) {
    this.#a = e, this.#u = n;
  }
  lastMainThreadContextTokens() {
    return this.#S;
  }
  replaceLastMainThreadContextTokens(e) {
    this.#S = e;
  }
  stageResumeSeed(e) {
    this.#m = e;
  }
  applyResumeSeed(e) {
    this.#m = null, this.#u = e.ttlMs, this.#a = e.requestAt, this.#p = je(e), this.#S = e.contextTokens;
  }
  #m = null;
  clearLastMainThreadRequest(e) {
    let n = e !== void 0 && this.#m?.sessionId === e ? this.#m : null;
    this.#m = null, this.#u = n?.ttlMs ?? null, this.#a = n?.requestAt ?? null, this.#p = je(n), this.#S = n?.contextTokens ?? null, this.#f = null, this.#v = !1;
  }
  lastApiCompletionTimestamp() {
    return this.#y;
  }
  replaceLastApiCompletionTimestamp(e) {
    this.#y = e;
  }
  pendingPostCompaction() {
    return this.#g;
  }
  replacePendingPostCompaction(e) {
    this.#g = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#r = null, this.#o = null, this.#s = 0, this.#i = null, this.#d = void 0, this.#c = void 0, this.#l += 1, this.#u = null, this.#a = null, this.#f = null, this.#v = !1, this.#S = null, this.#m = null, this.#y = null, this.#g = !1;
  }
}
function je(e) {
  return e?.ask !== void 0 && e.requestAt !== null && e.requestAt <= Date.now() ? {
    ...e.ask,
    requestAt: e.requestAt,
    askedAt: e.requestAt
  } : null;
}
class Q {
  #e = [];
  #t = Object.create(null);
  #n = null;
  #r = void 0;
  #o = 0;
  #s = !1;
  #i = 0;
  changed = De();
  pendingLoopWakeup = De();
  tasks() {
    return this.#e;
  }
  schedule(e) {
    this.#e.push(e);
  }
  replaceTasks(e) {
    this.#e = e;
  }
  chainStartedAt(e) {
    return this.#t[e];
  }
  recordChainStart(e, n) {
    this.#t[e] = n;
  }
  forgetChainStart(e) {
    delete this.#t[e];
  }
  tickInFlightPrompt() {
    return this.#n;
  }
  tickInFlightPlugin() {
    return this.#r;
  }
  replaceTickInFlightPrompt(e, n) {
    this.#n = e, this.#r = e === null ? void 0 : n;
  }
  consecutiveKeepalives() {
    return this.#o;
  }
  replaceConsecutiveKeepalives(e) {
    this.#o = e;
  }
  ended() {
    return this.#s;
  }
  replaceEnded(e) {
    this.#s = e;
  }
  wakeFires() {
    return this.#i;
  }
  recordWakeFire() {
    this.#i++;
  }
  resetWakeFires() {
    this.#i = 0;
  }
  reset() {
    this.#e = [], this.#t = Object.create(null), this.#n = null, this.#r = void 0, this.#o = 0, this.#s = !1, this.#i = 0;
  }
}
class Y {
  #e = !1;
  #t = !1;
  #n = !1;
  #r = !1;
  #o = !1;
  #s = !1;
  #i = !1;
  #d = !1;
  #l = !1;
  #c = !1;
  #u = !1;
  #h = void 0;
  #p = !1;
  #a = void 0;
  #f = !1;
  #v = !1;
  #S = null;
  #y = null;
  #g = null;
  #m = !1;
  #b = null;
  #k = !1;
  #x = !1;
  #C = !1;
  #P = !1;
  #w = !1;
  #M = void 0;
  #R = void 0;
  #T = void 0;
  #O = void 0;
  #A = null;
  #L = null;
  onboardingShownThisSession() {
    return this.#e;
  }
  replaceOnboardingShownThisSession(e) {
    this.#e = e;
  }
  lspRecommendationShownThisSession() {
    return this.#t;
  }
  replaceLspRecommendationShownThisSession(e) {
    this.#t = e;
  }
  sessionTrustAccepted() {
    return this.#n;
  }
  replaceSessionTrustAccepted(e) {
    this.#n = e;
  }
  homeTrustDialogAccepted() {
    return this.#r;
  }
  replaceHomeTrustDialogAccepted(e) {
    this.#r = e;
  }
  hasExitedPlanMode() {
    return this.#o;
  }
  replaceHasExitedPlanMode(e) {
    this.#o = e;
  }
  needsPlanModeExitAttachment() {
    return this.#s;
  }
  replaceNeedsPlanModeExitAttachment(e) {
    this.#s = e;
  }
  needsAutoModeExitAttachment() {
    return this.#i;
  }
  replaceNeedsAutoModeExitAttachment(e) {
    this.#i = e;
  }
  memoryToggledOff() {
    return this.#d;
  }
  replaceMemoryToggledOff(e) {
    this.#d = e;
  }
  autoMemoryOffThisSession() {
    return this.#l;
  }
  replaceAutoMemoryOffThisSession(e) {
    this.#l = e;
  }
  memoryPausedByCommand() {
    return this.#u;
  }
  replaceMemoryPausedByCommand(e) {
    this.#u = e;
  }
  accountMemorySessionMode() {
    return this.#h;
  }
  replaceAccountMemorySessionMode(e, n = !1) {
    this.#h = e, this.#p = n && e !== void 0;
  }
  accountMemorySessionModeRestored() {
    return this.#p;
  }
  accountMemoryLaunchMode() {
    return this.#a;
  }
  replaceAccountMemoryLaunchMode(e) {
    this.#a = e;
  }
  restoredMemoryPause() {
    return this.#f;
  }
  replaceRestoredMemoryPause(e) {
    this.#f = e;
  }
  restoredAutoMemoryOff() {
    return this.#c;
  }
  replaceRestoredAutoMemoryOff(e) {
    this.#c = e;
  }
  teardownUnwindRequested() {
    return this.#m;
  }
  replaceTeardownUnwindRequested(e) {
    this.#m = e;
  }
  backgroundAutoModeSetupInFlight() {
    return this.#v;
  }
  replaceBackgroundAutoModeSetupInFlight(e) {
    this.#v = e;
  }
  deferredToolStubGateLatch() {
    return this.#S;
  }
  replaceDeferredToolStubGateLatch(e) {
    this.#S = e;
  }
  verifySkillRolloutGateLatch() {
    return this.#y;
  }
  replaceVerifySkillRolloutGateLatch(e) {
    this.#y = e;
  }
  commitSkillRolloutGateLatch() {
    return this.#g;
  }
  replaceCommitSkillRolloutGateLatch(e) {
    this.#g = e;
  }
  memoryToolsShapeLatch() {
    return this.#b;
  }
  replaceMemoryToolsShapeLatch(e) {
    this.#b = e;
  }
  proposeGoalAvailabilityLogged() {
    return this.#k;
  }
  markProposeGoalAvailabilityLogged() {
    this.#k = !0;
  }
  activeRoutine() {
    return this.#T;
  }
  replaceActiveRoutine(e) {
    this.#T = e;
  }
  inheritedTeamName() {
    return this.#O;
  }
  replaceInheritedTeamName(e) {
    this.#O = e;
  }
  teleportedSessionInfo() {
    return this.#A;
  }
  replaceTeleportedSessionInfo(e) {
    this.#A = e;
  }
  markFirstTeleportMessageLogged() {
    if (this.#A) this.#A.hasLoggedFirstMessage = !0;
  }
  cachedClaudeMdContent() {
    return this.#L;
  }
  replaceCachedClaudeMdContent(e) {
    this.#L = e;
  }
  accountSkillsSyncEnabled() {
    return this.#x;
  }
  replaceAccountSkillsSyncEnabled(e) {
    this.#x = e;
  }
  skillsSyncVetoed() {
    return this.#C;
  }
  replaceSkillsSyncVetoed(e) {
    this.#C = e;
  }
  accountPluginsSyncEnabled() {
    return this.#P;
  }
  replaceAccountPluginsSyncEnabled(e) {
    this.#P = e;
  }
  pluginsSyncVetoed() {
    return this.#w;
  }
  replacePluginsSyncVetoed(e) {
    this.#w = e;
  }
  armPendingContextCompacted(e, n) {
    this.#M = e, this.#R = n;
  }
  consumePendingContextCompacted() {
    let e = this.#M;
    return this.#M = void 0, e;
  }
  forgetPendingContextCompacted() {
    this.#M = void 0, this.#R = void 0;
  }
  responseBeforeCompaction() {
    return this.#R;
  }
  forgetResponseBeforeCompaction() {
    this.#R = void 0;
  }
  reset() {
    this.#x = !1, this.#C = !1, this.#P = !1, this.#w = !1, this.#e = !1, this.#t = !1, this.#n = !1, this.#r = !1, this.#o = !1, this.#s = !1, this.#i = !1, this.#d = !1, this.#l = !1, this.#u = !1, this.#h = void 0, this.#p = !1, this.#a = void 0, this.#f = !1, this.#c = !1, this.#m = !1, this.#v = !1, this.#S = null, this.#y = null, this.#g = null, this.#b = null, this.#k = !1, this.#T = void 0, this.#O = void 0, this.#A = null, this.#L = null, this.#M = void 0, this.#R = void 0;
  }
}
function qe() {
  return {
    messagesArriving: 0,
    lastInLine: Promise.resolve(),
    gaveUpOn: void 0,
    besideLine: 0,
    lastBesideLine: Promise.resolve(),
    gaveUpOnBeside: void 0,
    pathsArrivingBeside: new Map(),
    toolCallsWaiting: 0,
    pathsArriving: new Map(),
    messagesInLine: []
  };
}
class Z {
  #e = new Map();
  #t = new Map();
  #n = null;
  #r = new Map();
  #o = new Set();
  #s = new Set();
  #i = new Set();
  #d = new Set();
  #l = new Set();
  #c = new Set();
  #u = new Set();
  #h = new Set();
  #p = new Set();
  #a = new Set();
  #f = new Map();
  #v = new Map();
  #S = new Map();
  #y;
  #g = {
    byFileUuid: new Map(),
    recentPrefetchStarts: []
  };
  #m = qe();
  #b = new Set();
  #k = void 0;
  #x = void 0;
  #C = void 0;
  #P = void 0;
  #w = void 0;
  planSlugCache() {
    return this.#e;
  }
  forgetPlanSlug(e) {
    this.#e.delete(e);
  }
  pendingBranchLinks() {
    return this.#t;
  }
  replacePendingBranchLinks() {
    this.#t = new Map();
  }
  vimSharedState() {
    return this.#n;
  }
  replaceVimSharedState(e) {
    this.#n = e;
  }
  agentColorMap() {
    return this.#r;
  }
  sessionCreatedTeams() {
    return this.#o;
  }
  sessionSpawnedTeammatePanes() {
    return this.#s;
  }
  surfacedHookSpawnFailures() {
    return this.#i;
  }
  bareMcpServerMatchersWarned() {
    return this.#d;
  }
  pendingConversationEditKinds() {
    return this.#l;
  }
  clientTruncatedAssistantIds() {
    return this.#c;
  }
  heldStatelessReplyIds() {
    return this.#u;
  }
  unsupportedThreadKeys() {
    return this.#h;
  }
  pendingPrLinks() {
    return this.#p;
  }
  policyPredicateTelemetryEmitted() {
    return this.#a;
  }
  humanAttachmentDigests() {
    return this.#f;
  }
  inboundAttachmentFiles() {
    return this.#v;
  }
  filesPlacedByName() {
    return this.#S;
  }
  filesPlacedByNameRead() {
    return this.#y;
  }
  setFilesPlacedByNameRead(e) {
    this.#y = e;
  }
  inboundAttachmentDownloads() {
    return this.#g;
  }
  arrivingInboundFiles() {
    return this.#m;
  }
  chromeAvailabilityStagesLogged() {
    return this.#b;
  }
  replaceChromeAvailabilityStagesLogged(e) {
    if (this.#b = new Set(), e) this.#k = Date.now();
  }
  chromeAvailabilityAnchorMs() {
    return this.#k;
  }
  pendingGoalIdleCheckin() {
    return this.#x;
  }
  replacePendingGoalIdleCheckin(e) {
    this.#x = e;
  }
  pendingGoalReprompt() {
    return this.#C;
  }
  replacePendingGoalReprompt(e) {
    this.#C = e;
  }
  goalInterruptionStreak() {
    return this.#P;
  }
  replaceGoalInterruptionStreak(e) {
    this.#P = e;
  }
  workerCheckin() {
    return this.#w;
  }
  replaceWorkerCheckin(e) {
    this.#w = e;
  }
  reset() {
    this.#e = new Map(), this.#t = new Map(), this.#n = null, this.#r = new Map(), this.#o = new Set(), this.#s = new Set(), this.#i = new Set(), this.#d = new Set(), this.#l = new Set(), this.#c = new Set(), this.#u = new Set(), this.#h = new Set(), this.#p = new Set(), this.#a = new Set(), this.#f = new Map(), this.#v = new Map(), this.#S = new Map(), this.#y = void 0;
    for (let e of this.#g.byFileUuid.values()) clearTimeout(e.expiry), e.abort.abort();
    this.#g = {
      byFileUuid: new Map(),
      recentPrefetchStarts: []
    }, this.#m = qe(), this.#b = new Set(), this.#k = void 0, clearTimeout(this.#x), this.#x = void 0, clearTimeout(this.#C), this.#C = void 0, this.#P = void 0, clearInterval(this.#w?.timer), this.#w = void 0;
  }
}
var Ne = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null
};
class ee {
  #e = !1;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #o = void 0;
  #s = void 0;
  #i = void 0;
  #d = null;
  #l = !1;
  #c = void 0;
  #u = Ne;
  #h = !1;
  #p = "idle";
  #a = null;
  attacherCapsChanged = De();
  rvSupervisorLinkChanged = De();
  cloudCwdChanged = De();
  sdkDialogHostActive() {
    return this.#e;
  }
  markSdkDialogHostActive(e) {
    this.#e = e;
  }
  sdkSupportedDialogKinds() {
    return this.#t;
  }
  sdkSupportedDialogKindsSource() {
    return this.#n;
  }
  declareDialogKinds(e, n) {
    this.#t = e, this.#n = e === void 0 ? void 0 : n;
  }
  sdkPerTaskStopAffordance() {
    return this.#r;
  }
  declarePerTaskStopAffordance(e) {
    this.#r = e;
  }
  sdkRapidFollowupPreempt() {
    return this.#o;
  }
  declareRapidFollowupPreempt(e) {
    this.#o = e;
  }
  sdkForwardNestedSubagentToolCalls() {
    return this.#s;
  }
  declareForwardNestedSubagentToolCalls(e) {
    this.#s = e;
  }
  hostRendersChromeSetupOffer() {
    return this.#i;
  }
  declareHostRendersChromeSetupOffer(e) {
    this.#i = e;
  }
  attacherCaps() {
    return this.#d;
  }
  replaceAttacherCaps(e) {
    this.#d = e, this.attacherCapsChanged.emit();
  }
  rvSupervisorLinkLive() {
    return this.#l;
  }
  replaceRvSupervisorLinkLive(e) {
    if (this.#l === e) return;
    this.#l = e, this.rvSupervisorLinkChanged.emit();
  }
  sdkBetas() {
    return this.#c;
  }
  replaceSdkBetas(e) {
    this.#c = e;
  }
  caps() {
    return this.#u;
  }
  replaceCaps(e) {
    this.#u = e;
  }
  markRemote(e) {
    this.#u = {
      ...this.#u,
      workspace: e ? "remote" : "local"
    };
  }
  cloudCwdOfSession(e) {
    return this.#u.workspace === "remote" && this.#a?.sessionId === e ? this.#a.cwd : null;
  }
  replaceCloudCwd(e) {
    this.#a = e, this.cloudCwdChanged.emit();
  }
  replBridgeActive() {
    return this.#h;
  }
  replaceReplBridgeActive(e) {
    if (this.#h === e) return;
    this.#h = e;
  }
  mainLoopBusy() {
    return this.#p !== "idle";
  }
  mainQueryRunning() {
    return this.#p === "running";
  }
  replaceMainLoopStatus(e) {
    this.#p = e;
  }
  reset() {
    this.#e = !1, this.#t = void 0, this.#n = void 0, this.#r = void 0, this.#o = void 0, this.#s = void 0, this.#i = void 0, this.#d = null, this.#c = void 0, this.#u = Ne, this.#h = !1, this.#p = "idle", this.#l = !1, this.#a = null, this.attacherCapsChanged.clear(), this.rvSupervisorLinkChanged.clear(), this.cloudCwdChanged.clear();
  }
}
var We = 150;
class te {
  #e = Date.now();
  #t = !1;
  #n = 0;
  #r = -1 / 0;
  interactionFired = De();
  #o = void 0;
  terminalFocusFired = De();
  #s = !1;
  #i;
  lastInteractionTime() {
    return this.#e;
  }
  lastSubmitTime() {
    return this.#n;
  }
  recordSubmit() {
    this.#n = Date.now();
  }
  personWroteAt() {
    return this.#r;
  }
  notePersonWrote() {
    this.#r = performance.now();
  }
  recordInteraction(e) {
    if (e) this.#d();else this.#t = !0;
  }
  flushIfDirty() {
    if (this.#t) this.#d();
  }
  #d() {
    this.#e = Date.now(), this.#t = !1, this.interactionFired.emit();
  }
  resetBaseline() {
    this.#e = Date.now(), this.#t = !1;
  }
  terminalFocus() {
    return this.#o;
  }
  updateTerminalFocus(e) {
    this.#o = e, this.terminalFocusFired.emit();
  }
  scrollDraining() {
    return this.#s;
  }
  markScrollActivity() {
    if (this.#s = !0, this.#i) clearTimeout(this.#i);
    this.#i = setTimeout(() => {
      this.#s = !1, this.#i = void 0;
    }, We), this.#i.unref?.();
  }
  async waitForScrollIdle() {
    while (this.#s) await new Promise(e => setTimeout(e, We));
  }
  reset() {
    this.#e = Date.now(), this.#n = 0, this.#r = -1 / 0, this.#o = void 0, this.interactionFired.clear(), this.terminalFocusFired.clear();
  }
}
var Mf = "(no content)",
  r$r = "[This message had one more image. It was in this chat until the deletion that a later note reports. You saw it in each answer that you gave below before that note.]";
function moa(e) {
  return e === 1 ? "An image that was attached earlier in this chat was deleted just before this message. A mark stands at its old place. An image that you can still see in this chat was not deleted. What you said about it up to now, you said while you could see it. You cannot see it now, so give no new detail of it. Do not open or recover any saved copy of it, even by its path. If the person asks about it or asks you to open it, tell them that it was deleted." : `${e} images that were attached earlier in this chat were deleted just before this message. A mark stands at the old place of each. An image that you can still see in this chat was not deleted. What you said about them up to now, you said while you could see them. You cannot see them now, so give no new detail of them. Do not open or recover any saved copy of them, even by its path. If the person asks about them or asks you to open them, tell them that they were deleted.`;
}
var Tcn = "[This message had one more image. It was in this chat until it was hidden from you, which a later note reports. You saw it in each answer that you gave below before that note.]";
function hoa(e) {
  return e === 1 ? "An image that was attached earlier in this chat was hidden from you just before this message. A mark stands at its old place. An image that you can still see in this chat was not hidden. What you said about it up to now, you said while you could see it. You cannot see it now, so give no new detail of it. Do not open or recover any saved copy of it, even by its path. If the person asks about it, tell them that it is hidden from you, that a file of this chat was deleted, that you cannot tell whether it was this image, and that they can send the image again." : `${e} images that were attached earlier in this chat were hidden from you just before this message. A mark stands at the old place of each. An image that you can still see in this chat was not hidden. What you said about them up to now, you said while you could see them. You cannot see them now, so give no new detail of them. Do not open or recover any saved copy of them, even by its path. If the person asks about them, tell them that they are hidden from you, that a file of this chat was deleted, that you cannot tell whether it was one of these images, and that they can send the images again.`;
}
var qjt = "[This call's result was here when the call ended. It was removed later, because a file that the call named was deleted.]",
  HWs = "[A file was attached here. It was deleted at a later time. It is not in this chat now.]";
function goa(e) {
  return e === 1 ? "A file that was attached earlier in this chat was deleted just before this message. A mark stands wherever the file or a read of it stood. What you said about it up to now, you said while it was in this chat. It is not in this chat now, so give no new detail of it. Do not open or recover any saved copy of it, even by its path. If the person asks about it or asks you to open it, tell them that it was deleted." : `${e} files that were attached earlier in this chat were deleted just before this message. A mark stands wherever one of them or a read of it stood. What you said about them up to now, you said while they were in this chat. They are not in this chat now, so give no new detail of them. Do not open or recover any saved copy of them, even by its path. If the person asks about them or asks you to open them, tell them that they were deleted.`;
}
var wG = "No response requested.",
  Mi = "<synthetic>",
  yoa = "Auto Mode Active",
  o$r = "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read",
  $Ws = "Restored files go back whole, losing later changes by anyone. Bash changes to other files are not undone.",
  qVn = "Claude can't use thinking from another organization",
  _oa = "resume signed in to that organization to use it again";
function Ub(e) {
  return (e.type === "user" || e.type === "assistant") && e.isVirtual === !0;
}
function F5(e) {
  return e.type === "assistant" && e.isApiErrorMessage === !0 && e.message?.model === Mi;
}
function RM(e) {
  return e.type === "system" && e.subtype === "local_command";
}
function sy(e) {
  if (e.type === "api_system") return !1;
  return e.type === "progress" || e.type === "system" && (!RM(e) || e.isDisplayOnly === !0) || Ub(e) || F5(e) || e.type === "attachment" && (e.attachment?.type === "thinking_drop" || e.attachment?.type === "credential_org" || e.attachment?.type === "prompt_snapshot" || e.attachment?.type === "prompt_render_point" || e.attachment?.type === "deferred_tools_record");
}
var bt = ["sdk_single_prompt_gate", "subagent_estimate", "subagent_final_turn", "rows_unreadable"],
  kt = 8;
class ne {
  byAgent = new Map();
  attemptsByAgent = new Map();
  cappedFailuresByAgent = new Map();
  armGateEventEmitted = new Set();
  vetoedUnderPrompt = new Map();
  sidecarIo = Promise.resolve();
  rehydrateAttemptedSessions = new Set();
  sidecarReadsAhead = new Map();
  get(e) {
    return this.byAgent.get(e);
  }
  has(e) {
    return this.byAgent.has(e);
  }
  put(e, n) {
    this.byAgent.set(e, n);
  }
  remove(e) {
    this.byAgent.delete(e);
  }
  nextAttemptNumber(e) {
    let n = (this.attemptsByAgent.get(e) ?? 0) + 1;
    return this.attemptsByAgent.set(e, n), n;
  }
  consecutiveCountedFailures(e) {
    return this.cappedFailuresByAgent.get(e) ?? 0;
  }
  recordCountedFailure(e) {
    let n = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
    return this.cappedFailuresByAgent.set(e, n), n;
  }
  clearCountedFailures(e) {
    this.cappedFailuresByAgent.delete(e);
  }
  recordVeto(e, n) {
    this.vetoedUnderPrompt.set(e, n);
  }
  isVetoedUnder(e, n) {
    return this.vetoedUnderPrompt.get(e) === n;
  }
  latchArmGateEvent(e) {
    if (this.armGateEventEmitted.has(e)) return !1;
    return this.armGateEventEmitted.add(e), !0;
  }
  enqueueSidecarIo(e, n) {
    return this.sidecarIo = this.sidecarIo.then(e, e).catch(n), this.sidecarIo;
  }
  sidecarIoSettled() {
    return this.sidecarIo;
  }
  hasAttemptedRehydrate(e) {
    return this.rehydrateAttemptedSessions.has(e);
  }
  markRehydrateAttempted(e) {
    this.rehydrateAttemptedSessions.add(e);
  }
  keepSidecarReadAhead(e, n) {
    this.sidecarReadsAhead.delete(e);
    while (this.sidecarReadsAhead.size >= kt) {
      let o = this.sidecarReadsAhead.keys().next().value;
      if (o === void 0) break;
      this.sidecarReadsAhead.delete(o);
    }
    this.sidecarReadsAhead.set(e, n);
  }
  takeSidecarReadAhead(e) {
    let n = this.sidecarReadsAhead.get(e);
    return this.sidecarReadsAhead.delete(e), n;
  }
  dropSidecarReadAhead(e) {
    this.sidecarReadsAhead.delete(e);
  }
  forgetSubagentTelemetry(e) {
    this.attemptsByAgent.delete(e), this.cappedFailuresByAgent.delete(e), this.vetoedUnderPrompt.delete(e);
    for (let n of bt) this.armGateEventEmitted.delete(`${e}:${n}`);
  }
}
function Dwe(e) {
  return e ?? "main";
}
function boa(e) {
  let n = e.get(Dwe(void 0));
  return n?.status === "ready" && n.armTrigger === "idle";
}
function s$r({
  messages: messages,
  rowUuids: rowUuids
}, lastUuid) {
  return {
    lastUuid: lastUuid,
    seenUuids: new Set(messages.map(item => item.uuid)),
    rowUuids: rowUuids
  };
}
function hOo({
  coverage: coverage,
  kept: kept,
  sent: sent,
  received: received,
  instructions: instructions,
  fit: fit
}) {
  let a = ({
      uuid: uuid
    }) => coverage.seenUuids.has(uuid),
    l = new Set(sent.messages.map(item => item.uuid));
  if (!l.has(coverage.lastUuid)) return {
    kind: "refuse",
    reason: "boundary_uuid_missing"
  };
  if (!coverage.rowUuids.every(item => l.has(item))) return {
    kind: "refuse",
    reason: "covered_messages_changed"
  };
  if (kept.some(item => a(item) && !l.has(item.uuid))) return {
    kind: "refuse",
    reason: "kept_message_missing"
  };
  if (sent.messages.slice(0, sent.messages.findLastIndex(a)).some(item => item.type === "assistant" && !Ub(item) && !a(item))) return {
    kind: "refuse",
    reason: "unseen_reply"
  };
  let f = sent.rowUuids.slice(0, sent.rowUuids.findLastIndex(d => coverage.seenUuids.has(d)) + 1);
  if (instructions || !received.messages.some(({
    uuid: uuid_2
  }) => uuid_2 === coverage.lastUuid) || !_e(received.rowUuids, f)) return {
    kind: "refuse",
    reason: "hook_rewrite"
  };
  let S = received.messages.findLastIndex(a),
    u = received.messages.flatMap((d, index) => d.type === "progress" || a(d) ? [] : [{
      message: d,
      isEarly: index < S
    }]),
    m = ({
      message: message,
      isEarly: isEarly
    }) => isEarly && Ub(message),
    h = new Set(u.filter(m).map(({
      message: message_2
    }) => message_2)),
    g = u.filter(item => !m(item)),
    tail = g.map(({
      message: message_3
    }) => message_3),
    x = fit && Ct(fit, received.messages.filter(item => !h.has(item)), [...kept, ...tail]);
  if (x?.givesWay) return {
    kind: "refuse",
    reason: "would_not_fit",
    sizes: x.sizes
  };
  return {
    kind: "reuse",
    tail: tail,
    earlyTailCount: U(g, ({
      isEarly: isEarly_2
    }) => isEarly_2),
    displayOnlyLeftOutCount: h.size,
    headReordered: !_e(received.rowUuids, coverage.rowUuids),
    sizes: x?.sizes
  };
}
function Ct({
  thresholdTokens: thresholdTokens,
  windowTokens: windowTokens,
  liveTokens: liveTokens,
  madeFromTokens: madeFromTokens,
  summary: summary,
  sizeOf: sizeOf
}, a, l) {
  let p = new Set(l.map(item => item.uuid)),
    f = new Set(a.map(item => item.uuid)),
    S = a.filter(item => !p.has(item.uuid)),
    u = a.filter(item => p.has(item.uuid)),
    m = l.filter(item => !f.has(item.uuid)),
    postSwapTokens = Math.max(liveTokens - sizeOf(S), sizeOf(u)) + sizeOf([...summary, ...m]);
  return {
    sizes: {
      postSwapTokens: postSwapTokens,
      thresholdTokens: thresholdTokens,
      windowTokens: windowTokens
    },
    givesWay: postSwapTokens >= thresholdTokens && madeFromTokens < windowTokens
  };
}
function _e(e, n) {
  return n.every((item, index) => e[index] === item);
}
function i$r(e) {
  return e.findLast(o => o.type === "user" && !o.isMeta && o.toolUseResult === void 0 && (typeof o.message.content === "string" || !o.message.content.some(item => item.type === "tool_result")))?.uuid ?? "";
}
function Soa(e, n, o) {
  e.recordVeto(Dwe(n), i$r(o));
}
class oe {
  #e = void 0;
  get current() {
    return this.#e;
  }
  adopt(e) {
    this.#e = e;
  }
}
class re {
  #e = null;
  #t = null;
  mainAgentId(e) {
    return this.#e ??= Pr(e), this.#e;
  }
  projectDir() {
    return this.#t;
  }
  replaceProjectDir(e) {
    this.#t = e;
  }
}
class se {
  openToolUseId;
  answeredThisSession = !1;
  get answered() {
    return this.answeredThisSession;
  }
  markAnswered() {
    this.answeredThisSession = !0;
  }
  isOpenElsewhere(e) {
    return this.openToolUseId !== void 0 && this.openToolUseId !== e;
  }
  open(e) {
    this.openToolUseId = e;
  }
  closeFor(e) {
    if (e !== void 0 && this.openToolUseId === e) this.openToolUseId = void 0;
  }
}
class ie {
  granted = !1;
  isGranted() {
    return this.granted;
  }
  grant() {
    this.granted = !0;
  }
}
class ae {
  inFlight = null;
  startedForTurnEnd = !1;
  reset() {
    this.inFlight?.abort(), this.inFlight = null, this.startedForTurnEnd = !1;
  }
}
class le {
  firstSyncPromise = null;
  accountListing = "pending";
  syncErrors = [];
  lastRoundListed = !1;
  listedStamp = null;
  changesLanded = 0;
  changesReloaded = 0;
  reloadsCompleted = 0;
  holdsSet = 0;
  reloadHeld = !1;
  lastCompleteList = null;
  lastSyncedLaneLoad = null;
  syncedLaneOpened = !1;
  syncedDirsLoadedHere = new Set();
  dirsNewHere = new Set();
  awaitsFirstRun = !1;
  removalsDeferredHere = new Set();
  pendingTrashRemovals = [];
  ensureBucketRoot = null;
  deferredRelist = null;
  missingEntry = {
    resync: null,
    resyncAt: -1 / 0,
    swept: !1
  };
  settingsInstall = {
    current: null,
    next: null,
    loaded: null
  };
  holdReload() {
    this.reloadHeld = !0, this.holdsSet++;
  }
  endHoldSetBefore(e) {
    this.reloadHeld &&= this.holdsSet !== e;
  }
  reloaded(e) {
    this.changesReloaded = Math.max(this.changesReloaded, e), this.reloadsCompleted++;
  }
}
class de {
  abortController = null;
  eligibleTurns = 0;
  unusedInARow = 0;
  askOnNextTurn() {
    this.eligibleTurns = 0;
  }
  reset() {
    this.abortController?.abort(), this.abortController = null;
  }
  arm() {
    let abortController = new AbortController();
    return this.abortController = abortController, abortController;
  }
}
class ue {
  #e = void 0;
  #t = void 0;
  ccrSessionID() {
    return this.#e;
  }
  latchCcrSessionID(e) {
    this.#e = e;
  }
  syncEnabled() {
    return this.#t;
  }
  latchSyncEnabled(e) {
    return this.#t = e, e;
  }
}
class ce {
  autonomousPreambleDelivered = !1;
  lastLoopFileDelivered = null;
  reset() {
    this.autonomousPreambleDelivered = !1, this.lastLoopFileDelivered = null;
  }
}
class pe {
  exchanges = [];
  replace(e) {
    this.exchanges = e;
  }
  append(question, response, fallbackNotice, agentId) {
    this.exchanges = [...this.exchanges, {
      question: question,
      response: response,
      ...(fallbackNotice && {
        fallbackNotice: fallbackNotice
      }),
      ...(agentId && {
        agentId: agentId
      })
    }].slice(-20);
  }
  pendingReopen = null;
  reopenAway = !1;
  get reopenPending() {
    return this.pendingReopen !== null;
  }
  armReopen(e, n) {
    if (this.pendingReopen) {
      this.pendingReopen.owners.add(e);
      return;
    }
    this.pendingReopen = {
      owners: new Set([e]),
      cancel: n()
    };
  }
  clearPendingReopen(e) {
    let pendingReopen = this.pendingReopen;
    if (!pendingReopen) {
      this.reopenAway = !1;
      return;
    }
    if (e !== void 0) {
      if (pendingReopen.owners.delete(e), pendingReopen.owners.size > 0) return;
    }
    pendingReopen.cancel(), this.pendingReopen = null, this.reopenAway = !1;
  }
  reopener = null;
  setReopener(e) {
    this.reopener = e;
  }
  get hasReopener() {
    return this.reopener !== null;
  }
  reopenNow() {
    return this.reopener?.() ?? !1;
  }
  inFlightQuestions = [];
  get inFlight() {
    return this.inFlightQuestions.at(-1) ?? null;
  }
  pendingBesidesTop() {
    return this.inFlightQuestions.slice(0, -1);
  }
  setInFlight(e) {
    if (!this.inFlightQuestions.includes(e)) this.inFlightQuestions = [...this.inFlightQuestions, e];
  }
  clearInFlight(e) {
    if (this.inFlightQuestions.includes(e)) this.inFlightQuestions = this.inFlightQuestions.filter(item => item !== e);
  }
}
var Rt = 16;
class he {
  pending = null;
  shownThisSession = !1;
  changed = De();
  submitted = [];
  submittedChanged = De();
  subscribe = this.changed.subscribe;
  getSnapshot = () => this.pending;
  subscribeSubmitted = this.submittedChanged.subscribe;
  submit(e) {
    if (this.shownThisSession) return;
    if (this.submitted.length >= Rt) this.submitted.shift();
    this.submitted.push(e), this.submittedChanged.emit();
  }
  takeSubmitted() {
    let submitted = this.submitted;
    return this.submitted = [], submitted;
  }
  offer(e) {
    if (this.shownThisSession) return;
    this.pending = e, this.changed.emit();
  }
  dismiss() {
    if (this.pending !== null) this.pending = null, this.changed.emit();
  }
  markShown() {
    this.shownThisSession = !0;
  }
}
var m$e = Symbol("permission-stash-evicted");
class fe {
  entriesCap;
  evictedKeysCap;
  lanes = {
    write: new Map(),
    read: new Map()
  };
  evicted = {
    write: new Set(),
    read: new Set()
  };
  poisoned = {
    write: !1,
    read: !1
  };
  identities = new Map();
  identitiesEvicted = new Set();
  identitiesPoisoned = !1;
  constructor(e = 256, n = 1048576) {
    this.entriesCap = e;
    this.evictedKeysCap = n;
  }
  stash(e, n, o, r = "write") {
    if (e === void 0) return;
    let s = this.lanes[r],
      i = this.evicted[r],
      a = ge(e, n);
    if (i.has(a)) return;
    let l = s.get(a);
    if (l !== void 0) {
      let p = new Set(o);
      s.set(a, l.filter(item => p.has(item)));
      return;
    }
    if (s.size >= this.entriesCap) {
      let p = s.keys().next().value;
      if (p !== void 0) {
        if (s.delete(p), i.add(p), i.size > this.evictedKeysCap) {
          this.poisoned[r] = !0;
          let f = i.values().next().value;
          if (f !== void 0) i.delete(f);
        }
      }
    }
    s.set(a, o);
  }
  holds(e, n, o = "write") {
    return e !== void 0 && this.lanes[o].has(ge(e, n));
  }
  stashIdentity(e, n, o) {
    if (e === void 0) return;
    let r = this.identities.get(e),
      s = r?.get(n);
    if (r !== void 0 && s !== void 0) {
      if (s === null || o === null || s.dev !== o.dev || s.ino !== o.ino) r.set(n, null);
      return;
    }
    let i = this.identitiesEvicted.has(e) || this.identitiesPoisoned;
    if (r === void 0) {
      if (!i && this.identities.size >= this.entriesCap) {
        let a = this.identities.keys().next().value;
        if (a !== void 0) {
          if (this.identities.delete(a), this.identitiesEvicted.add(a), this.identitiesEvicted.size > this.evictedKeysCap) {
            this.identitiesPoisoned = !0;
            let l = this.identitiesEvicted.values().next().value;
            if (l !== void 0) this.identitiesEvicted.delete(l);
          }
        }
      }
      r = new Map(), this.identities.set(e, r);
    }
    r.set(n, i ? null : o);
  }
  takeIdentity(e, n) {
    if (e === void 0) return;
    let o = this.identities.get(e),
      r = o?.get(n);
    if (o?.delete(n) && o.size === 0) this.identities.delete(e);
    return r;
  }
  consume(e, n, o = "write") {
    if (e === void 0) return;
    let r = this.lanes[o],
      s = ge(e, n),
      i = r.get(s),
      a = i === void 0 && (this.evicted[o].delete(s) || this.poisoned[o]),
      l = `${e}\x00`;
    for (let p of r.keys()) if (p.startsWith(l)) r.delete(p);
    if (o === "read") this.identities.delete(e), this.identitiesEvicted.delete(e);
    if (a) return m$e;
    return i;
  }
}
function ge(e, n) {
  return `${e}\x00${n}`;
}
var Ge = "NoProjectDirectoryError",
  Ve = new W(() => ({}));
var Ke = () => {};
function ze(e) {
  Ke = e;
}
class YA extends Error {
  name = Ge;
  constructor() {
    super("This session has no working directory.");
    try {
      Ke(this);
    } catch {}
  }
}
function Ixe(e) {
  try {
    return e instanceof Error && e.name === Ge;
  } catch {
    return !1;
  }
}
function Bo(e) {
  let {
    project: project
  } = e;
  if (project === null) throw new YA();
  return project;
}
function gOo(e) {
  return Qe({
    kind: "root",
    host: e.host,
    id: e.id,
    parentId: e.parentId
  }, e.project, e.project?.isolationRoot);
}
function w(e, n) {
  let o = n.originalCwd ?? e?.originalCwd,
    r = n.projectRoot ?? e?.projectRoot,
    s = n.cwd ?? e?.cwd;
  if (o === void 0 && r === void 0 && s === void 0) return null;
  if (o === void 0 || r === void 0 || s === void 0) throw new YA();
  return {
    originalCwd: En(o),
    projectRoot: En(r),
    cwd: En(s)
  };
}
function Qe(e, n, o) {
  let r = {
      project: n === null ? null : w(null, n)
    },
    s = o,
    i = De(),
    observers = e.kind === "fork" ? e.root.observers : new I(),
    autonomousLoopPreamble = e.kind === "fork" ? e.root.autonomousLoopPreamble : new ce(),
    precompute = e.kind === "fork" ? e.root.precompute : new ne(),
    f = {
      get originalCwd() {
        return Bo(r).originalCwd;
      },
      get projectRoot() {
        return Bo(r).projectRoot;
      },
      get cwd() {
        return Bo(r).cwd;
      },
      get isolationRoot() {
        return s;
      }
    },
    S = {
      host: e.kind === "fork" ? e.root.host : e.host,
      get id() {
        return e.kind === "fork" ? e.root.id : e.id;
      },
      get parentId() {
        return e.kind === "fork" ? e.root.parentId : e.parentId;
      },
      get root() {
        return e.kind === "fork" ? e.root : S;
      },
      get project() {
        return r.project === null ? null : f;
      },
      observers: observers,
      autonomousLoopPreamble: autonomousLoopPreamble,
      btwHistory: e.kind === "fork" ? e.root.btwHistory : new pe(),
      ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new ae(),
      conversationLatches: e.kind === "fork" ? e.root.conversationLatches : new D(),
      costLedger: e.kind === "fork" ? e.root.costLedger : new B(),
      engineStore: e.kind === "fork" ? e.root.engineStore : new oe(),
      usageCreditsOnlyModelConsentSlots: e.kind === "fork" ? e.root.usageCreditsOnlyModelConsentSlots : new j(),
      hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new N(),
      identity: e.kind === "fork" ? e.root.identity : new re(),
      invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new _(),
      mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new G(),
      modelSelection: e.kind === "fork" ? e.root.modelSelection : new V(),
      promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new K(),
      promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new de(),
      pendingHint: e.kind === "fork" ? e.root.pendingHint : new he(),
      pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new le(),
      precompute: precompute,
      requestJournal: e.kind === "fork" ? e.root.requestJournal : new J(),
      sessionCron: e.kind === "fork" ? e.root.sessionCron : new Q(),
      sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new Y(),
      sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new ue(),
      sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new Z(),
      surfaceCapabilities: e.kind === "fork" ? e.root.surfaceCapabilities : new ee(),
      userPresence: e.kind === "fork" ? e.root.userPresence : new te(),
      workflowUsageConsent: e.kind === "fork" ? e.root.workflowUsageConsent : new ie(),
      outsideReadPrompt: e.kind === "fork" ? e.root.outsideReadPrompt : new se(),
      writePermissionStash: e.kind === "fork" ? e.root.writePermissionStash : new fe(),
      subscribe(u) {
        let m = i.subscribe(u);
        if (e.kind !== "fork") return m;
        let h = e.root,
          {
            id: id,
            parentId: parentId
          } = h,
          x = h.subscribe(() => {
            if (h.id === id && h.parentId === parentId) return;
            id = h.id, parentId = h.parentId, u();
          });
        return () => {
          m(), x();
        };
      },
      setCwd(cwd) {
        S.update({
          project: {
            cwd: cwd
          }
        });
      },
      setIsolationRoot(u) {
        if (u !== s) s = u, i.emit();
      },
      withProject(u) {
        return Qe({
          kind: "fork",
          root: S.root
        }, w(r.project, u), u.isolationRoot ?? s);
      },
      update(u) {
        let m = u.project === void 0 ? r.project : u.project === null ? null : w(r.project, u.project),
          h = !1;
        if (u.id !== void 0 || "parentId" in u) {
          if (e.kind === "fork") throw Error("A withProject fork cannot re-identify the session \u2014 update the root session instead");
          if (u.id !== void 0 && u.id !== e.id) e.id = u.id, h = !0;
          if ("parentId" in u && u.parentId !== e.parentId) e.parentId = u.parentId, h = !0;
        }
        if (m?.originalCwd !== r.project?.originalCwd || m?.projectRoot !== r.project?.projectRoot || m?.cwd !== r.project?.cwd) r.project = m, h = !0;
        let g = u.project?.isolationRoot;
        if (g !== void 0 && g !== s) s = g, h = !0;
        if (h) i.emit();
      }
    };
  return S;
}
class me {
  #e = !1;
  #t = !1;
  #n = !1;
  #r = null;
  #o = !1;
  #s = void 0;
  #i = !1;
  #d = !1;
  #l = !1;
  #c = !1;
  #u = void 0;
  #h = !1;
  #p = !1;
  #a = null;
  #f = null;
  #v = new Map();
  #S = "cli";
  #y = "fresh";
  #g = void 0;
  #m = !1;
  #b = !1;
  #k = [];
  #x = !1;
  #C = !1;
  #P = !1;
  #w = new Set();
  #M = !1;
  #R = !1;
  #T = !1;
  #O = !1;
  #A = "none";
  #L = !1;
  #D = !1;
  #F = !1;
  #H = !1;
  #I = !1;
  #B = void 0;
  #U = void 0;
  #E = !1;
  #j = void 0;
  #q = void 0;
  #N = void 0;
  #W = !1;
  #G = void 0;
  #V = !1;
  #K = !1;
  #J = !1;
  #z = null;
  #Q = null;
  #Y = !0;
  #$ = null;
  #_ = !1;
  #ae = De();
  #X = null;
  #Z = !1;
  #ee = !1;
  #te = !1;
  #ne = !1;
  #oe = {};
  #re = null;
  #se = "none";
  #ie = void 0;
  isInteractive() {
    return this.#e;
  }
  isInteractivityDecided() {
    return this.#t;
  }
  isNoDialogLaunch() {
    return this.#n;
  }
  markNoDialogLaunch() {
    this.#n = !0;
  }
  replaceIsInteractive(e) {
    this.#e = e, this.#t = !0;
  }
  printOutputFormat() {
    return this.#r;
  }
  replacePrintOutputFormat(e) {
    this.#r = e;
  }
  thinkingDisplayExplicit() {
    return this.#o;
  }
  replaceThinkingDisplayExplicit(e) {
    this.#o = e;
  }
  permissionPromptToolName() {
    return this.#s;
  }
  replacePermissionPromptToolName(e) {
    this.#s = e;
  }
  hasStreamingInput() {
    return this.#i;
  }
  replaceHasStreamingInput(e) {
    this.#i = e;
  }
  singleShotPrintSession() {
    return this.#d;
  }
  replaceSingleShotPrintSession(e) {
    this.#d = e;
  }
  printInputClosed() {
    return this.#l;
  }
  markPrintInputClosed() {
    this.#l = !0;
  }
  modelOverrideOptOutForSession() {
    return this.#c;
  }
  replaceModelOverrideOptOutForSession(e) {
    this.#c = e;
  }
  rendererMode() {
    return this.#u;
  }
  replaceRendererMode(e) {
    this.#u = e;
  }
  strictToolResultPairing() {
    return this.#h;
  }
  replaceStrictToolResultPairing(e) {
    this.#h = e;
  }
  restrictedSession() {
    return this.#p;
  }
  replaceRestrictedSession(e) {
    this.#p = e;
  }
  workspaceRestrictionState() {
    return this.#a;
  }
  replaceWorkspaceRestrictionState(e) {
    this.#a = e;
  }
  replaceWorkspaceRestrictionUnsubscribe(e) {
    this.#f?.(), this.#f = e;
  }
  restrictedWorkspaceRoots() {
    return this.#v;
  }
  addRestrictedWorkspaceRoot(e, n) {
    this.#v.set(e, n);
  }
  clearRestrictedWorkspaceRoots() {
    this.#v = new Map();
  }
  clientType() {
    return this.#S;
  }
  replaceClientType(e) {
    this.#S = e;
  }
  sessionStartType() {
    return this.#y;
  }
  replaceSessionStartType(e) {
    this.#y = e;
  }
  questionPreviewFormat() {
    return this.#g;
  }
  replaceQuestionPreviewFormat(e) {
    this.#g = e;
  }
  extendedQuestionsEnabled() {
    return this.#m;
  }
  replaceExtendedQuestionsEnabled(e) {
    this.#m = e;
  }
  questionOptionDescriptionsOptional() {
    return this.#b;
  }
  replaceQuestionOptionDescriptionsOptional(e) {
    this.#b = e;
  }
  replConfigArgv() {
    return this.#k;
  }
  replaceReplConfigArgv(e) {
    this.#k = e;
  }
  userMsgOptIn() {
    return this.#x;
  }
  replaceUserMsgOptIn(e) {
    this.#x = e;
  }
  searchToolsOptIn() {
    return this.#C;
  }
  replaceSearchToolsOptIn(e) {
    this.#C = e;
  }
  todoToolsOptIn() {
    return this.#P;
  }
  replaceTodoToolsOptIn(e) {
    this.#P = e;
  }
  toolsOmittedByLaunchList() {
    return this.#w;
  }
  replaceToolsOmittedByLaunchList(e) {
    this.#w = e;
  }
  wizardOperatorToolsEnabled() {
    return this.#M;
  }
  replaceWizardOperatorToolsEnabled(e) {
    this.#M = e;
  }
  runnerDeclaredNestedRepositoryDiff() {
    return this.#R;
  }
  replaceRunnerDeclaredNestedRepositoryDiff(e) {
    this.#R = e;
  }
  runnerDeclaredNoRepositoryCheckedOut() {
    return this.#T;
  }
  replaceRunnerDeclaredNoRepositoryCheckedOut(e) {
    this.#T = e;
  }
  runnerDeclaredFreshMachinePerSession() {
    return this.#O;
  }
  replaceRunnerDeclaredFreshMachinePerSession(e) {
    this.#O = e;
  }
  pollEventIngress() {
    return this.#A;
  }
  markPollEventIngress(e) {
    this.#A = e;
  }
  ownEventDeliveryRequested() {
    return this.#L && !this.#D;
  }
  replaceOwnEventDeliveryHeld(e) {
    this.#D = e;
  }
  markOwnEventDeliveryRequested() {
    this.#L = !0;
  }
  sdkAgentProgressSummariesEnabled() {
    return this.#F;
  }
  replaceSdkAgentProgressSummariesEnabled(e) {
    this.#F = e;
  }
  sessionPersistenceDisabled() {
    return this.#H;
  }
  replaceSessionPersistenceDisabled(e) {
    this.#H = e;
  }
  diskless() {
    return this.#I;
  }
  replaceDiskless(e) {
    this.#I = e;
  }
  ccrSessionUrl() {
    return this.#B;
  }
  replaceCcrSessionUrl(e) {
    this.#B = e;
  }
  ccrDerivedSurface() {
    return this.#U;
  }
  replaceCcrDerivedSurface(e) {
    this.#U = e;
  }
  autoCompactWindowSurface() {
    return this.#q;
  }
  replaceAutoCompactWindowSurface(e) {
    this.#q = e;
  }
  wrapUpOffered() {
    return this.#E;
  }
  replaceWrapUpOffered(e) {
    this.#E = e;
  }
  entrypointOnRequests() {
    return this.#j;
  }
  replaceEntrypointOnRequests(e) {
    this.#j = e;
  }
  coworkEnrollment() {
    return this.#N;
  }
  replaceCoworkEnrollment(e) {
    this.#N = e;
  }
  ccrSessionLimited() {
    return this.#W;
  }
  replaceCcrSessionLimited(e) {
    this.#W = e;
  }
  toolsMachine() {
    return this.#G;
  }
  replaceToolsMachine(e) {
    this.#G = e;
  }
  sessionBypassPermissionsMode() {
    return this.#V;
  }
  replaceSessionBypassPermissionsMode(e) {
    this.#V = e;
  }
  disableSlashCommands() {
    return this.#K;
  }
  replaceDisableSlashCommands(e) {
    this.#K = e;
  }
  disableFileMentions() {
    return this.#J;
  }
  replaceDisableFileMentions(e) {
    this.#J = e;
  }
  sessionUploadsDir() {
    return this.#z;
  }
  replaceSessionUploadsDir(e) {
    this.#z = e;
  }
  localUploadsRoot() {
    return this.#Q;
  }
  replaceLocalUploadsRoot(e) {
    this.#Q = e;
  }
  mayForwardHomeSettings() {
    return this.#Y;
  }
  replaceMayForwardHomeSettings(e) {
    this.#Y = e;
  }
  homeSettingsHostConsent() {
    return this.#$;
  }
  replaceHomeSettingsHostConsent(e) {
    this.#$ = e;
  }
  scheduledTasksEnabled() {
    return this.#_;
  }
  replaceScheduledTasksEnabled(e) {
    let n = e && !this.#_;
    if (this.#_ = e, n) this.#ae.emit();
  }
  onScheduledTasksEnabled(e) {
    return this.#ae.subscribe(e);
  }
  initJsonSchema() {
    return this.#X;
  }
  replaceInitJsonSchema(e) {
    this.#X = e;
  }
  cliSessionConfigCarried() {
    return this.#Z;
  }
  replaceCliSessionConfigCarried(e) {
    this.#Z = e;
  }
  cloudLaunchCarriesOnlyModel() {
    return this.#ee;
  }
  replaceCloudLaunchCarriesOnlyModel(e) {
    this.#ee = e;
  }
  cliConfigBeyondSessionState() {
    return this.#te;
  }
  replaceCliConfigBeyondSessionState(e) {
    this.#te = e;
  }
  forkRestrictedLaunchConfig() {
    return this.#ne;
  }
  replaceForkRestrictedLaunchConfig(e) {
    this.#ne = e;
  }
  forkReplayLaunchConfig() {
    return this.#oe;
  }
  spareClaimState() {
    return this.#se;
  }
  replaceSpareClaimState(e) {
    this.#se = e;
  }
  spareParkedAtMs() {
    return this.#ie;
  }
  replaceSpareParkedAtMs(e) {
    this.#ie = e;
  }
  replaceForkReplayLaunchConfig(e) {
    this.#oe = e;
  }
  projectConfigRoot() {
    return this.#re;
  }
  replaceProjectConfigRoot(e) {
    this.#re = e;
  }
  reset() {
    this.#e = !1, this.#t = !1, this.#n = !1, this.#r = null, this.#se = "none", this.#ie = void 0, this.#o = !1, this.#s = void 0, this.#i = !1, this.#d = !1, this.#l = !1, this.#c = !1, this.#u = void 0, this.#h = !1, this.#p = !1, this.#a = null, this.replaceWorkspaceRestrictionUnsubscribe(null), this.#v = new Map(), this.#S = "cli", this.#y = "fresh", this.#g = void 0, this.#m = !1, this.#b = !1, this.#k = [], this.#x = !1, this.#C = !1, this.#P = !1, this.#w = new Set(), this.#M = !1, this.#R = !1, this.#T = !1, this.#O = !1, this.#A = "none", this.#L = !1, this.#D = !1, this.#F = !1, this.#H = !1, this.#I = !1, this.#B = void 0, this.#U = void 0, this.#q = void 0, this.#E = !1, this.#j = void 0, this.#N = void 0, this.#W = !1, this.#G = void 0, this.#V = !1, this.#K = !1, this.#J = !1, this.#z = null, this.#Q = null, this.#Y = !0, this.#$ = null, this.#_ = !1, this.#X = null, this.#Z = !1, this.#ee = !1, this.#te = !1, this.#ne = !1, this.#oe = {}, this.#re = null;
  }
}
class Se {
  #e = void 0;
  #t = [];
  #n = [];
  #r = void 0;
  #o = void 0;
  #s = null;
  #i = null;
  #d = !1;
  #l = null;
  #c = Ye();
  #u = null;
  #h = !1;
  flagSettingsPath() {
    return this.#e;
  }
  replaceFlagSettingsPath(e) {
    this.#e = e;
  }
  flagAgentsFilePaths() {
    return this.#t;
  }
  replaceFlagAgentsFilePaths(e) {
    this.#t = e;
  }
  flagMcpConfigFilePaths() {
    return this.#n;
  }
  replaceFlagMcpConfigFilePaths(e) {
    this.#n = e;
  }
  flagSettingsExpectedContent() {
    return this.#r;
  }
  replaceFlagSettingsExpectedContent(e) {
    this.#r = e;
  }
  flagSettingsFilePinnedContent() {
    return this.#o;
  }
  replaceFlagSettingsFilePinnedContent(e) {
    this.#o = e;
  }
  flagSettingsInline() {
    return this.#s;
  }
  replaceFlagSettingsInline(e) {
    this.#s = e;
  }
  parentManagedSettings() {
    return this.#i;
  }
  replaceParentManagedSettings(e, n = null) {
    this.#i = e, this.#l = n;
  }
  parentManagedSettingsInvalid() {
    return this.#d;
  }
  replaceParentManagedSettingsInvalid(e) {
    this.#d = e;
  }
  parentOrganizationSettings() {
    return this.#l;
  }
  allowedSettingSources() {
    return this.#c;
  }
  replaceAllowedSettingSources(e) {
    this.#c = e;
  }
  allowedSettingSourcesWithoutRepoDirSources() {
    let e = this.#c;
    if (this.#u?.of !== e) this.#u = {
      of: e,
      result: e.filter(item => item !== "projectSettings" && item !== "localSettings")
    };
    return this.#u.result;
  }
  useCoworkPlugins() {
    return this.#h;
  }
  replaceUseCoworkPlugins(e) {
    this.#h = e;
  }
  reset() {
    this.#e = void 0, this.#t = [], this.#n = [], this.#r = void 0, this.#o = void 0, this.#s = null, this.#i = null, this.#d = !1, this.#l = null, this.#c = Ye(), this.#u = null, this.#h = !1;
  }
}
function Ye() {
  return ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
}
class ve {
  #e = [];
  #t = [];
  #n = [];
  #r = void 0;
  #o = new Map();
  #s = new Map();
  #i = new Map();
  #d = [];
  #l = void 0;
  #c = [];
  #u = !1;
  #h = void 0;
  #p = void 0;
  #a = void 0;
  inlinePlugins() {
    return this.#e;
  }
  replaceInlinePlugins(e) {
    this.#e = e;
  }
  inlinePluginsNoMcp() {
    return this.#t;
  }
  replaceInlinePluginsNoMcp(e) {
    this.#t = e;
  }
  inlinePluginUrls() {
    return this.#n;
  }
  replaceInlinePluginUrls(e) {
    this.#n = e;
  }
  syncedPluginDirs() {
    return this.#r ?? [];
  }
  syncedPluginDirsRegistered() {
    return this.#r !== void 0;
  }
  syncedPluginAttestation(e) {
    return this.#o.get(e);
  }
  syncedPluginRowId(e) {
    return this.#s.get(e);
  }
  replaceSyncedPluginDirs(e, n = new Map(), o = new Map()) {
    this.#r = e, this.#o = n, this.#s = o, this.#i = this.#f(this.#i);
  }
  clearSyncedPluginDirs() {
    this.#r = void 0, this.#o = new Map(), this.#s = new Map(), this.#i = new Map();
  }
  attestedOfficialPluginMarketplace(e) {
    return this.#i.get(e);
  }
  replaceAttestedOfficialPluginIds(e) {
    this.#i = this.#f(e);
  }
  #f(e) {
    let n = new Set([...this.#o.values()].map(item => `${item.pluginName}@${item.marketplace}`));
    return new Map([...e].filter(([o, r]) => n.has(`${o.slice(0, o.lastIndexOf("@"))}@${r}`)));
  }
  additionalDirectoriesForClaudeMd() {
    return this.#d;
  }
  replaceAdditionalDirectoriesForClaudeMd(e) {
    this.#d = e;
  }
  claudeMdAdditionalDirectoriesAsked() {
    return this.#l;
  }
  askClaudeMdAdditionalDirectories(e) {
    this.#l = e;
  }
  allowedChannels() {
    return this.#c;
  }
  replaceAllowedChannels(e) {
    this.#c = e;
  }
  hasDevChannels() {
    return this.#u;
  }
  replaceHasDevChannels(e) {
    this.#u = e;
  }
  sessionSkillAllowlist() {
    return this.#h;
  }
  replaceSessionSkillAllowlist(e) {
    this.#h = e;
  }
  chromeFlagOverride() {
    return this.#p;
  }
  replaceChromeFlagOverride(e) {
    this.#p = e;
  }
  teammateAgentId() {
    return this.#a;
  }
  replaceTeammateAgentId(e) {
    this.#a = e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = [], this.clearSyncedPluginDirs(), this.#d = [], this.#l = void 0, this.#c = [], this.#u = !1, this.#h = void 0, this.#p = void 0, this.#a = void 0;
  }
}
class be {
  #e = null;
  #t = null;
  #n = new Set();
  modelStrings() {
    return this.#e;
  }
  replaceModelStrings(e) {
    this.#e = e;
  }
  invalidate() {
    this.#e = null, this.#n = new Set();
  }
  admin3PSteeringSnapshot() {
    return this.#t;
  }
  recordAdmin3PSteeringSnapshot(e) {
    this.#t = e;
  }
  probeRefutedDocumentDefaults() {
    return this.#n;
  }
  recordProbeRefutedDocumentDefault(e) {
    this.#n.add(e);
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = new Set();
  }
}
var $e = [];
class ke {
  #e = [];
  #t = [];
  #n = void 0;
  errorLog() {
    return this.#e;
  }
  recordError(e) {
    if (this.#e.length >= 100) this.#e.shift();
    this.#e.push(e);
  }
  recordSlowOperation(e, n) {
    return;
  }
  slowOperations() {
    if (this.#t.length === 0) return $e;
    let e = Date.now();
    if (this.#t.some(item => e - item.timestamp >= 1e4)) {
      if (this.#t = this.#t.filter(item => e - item.timestamp < 1e4), this.#t.length === 0) return $e;
    }
    return this.#t;
  }
  recordDevBarAlert(e) {
    return;
  }
  devBarAlert() {
    let e = this.#n;
    if (e && Date.now() - e.timestamp >= 60000) {
      this.#n = void 0;
      return;
    }
    return e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = void 0;
  }
}
var woa = 100;
function Xe() {
  return {
    direct: {
      strict: null,
      customer: null
    },
    proxied: {
      strict: null,
      customer: null
    }
  };
}
function Ze() {
  return {
    rateTokens: null,
    rateLastRefillMs: null,
    featureOkLogged: !1,
    reportedDropReasons: new Set()
  };
}
class Ce {
  #e = null;
  #t = null;
  #n = null;
  #r = null;
  #o = null;
  #s = null;
  #i = null;
  #d = null;
  #l = null;
  #c = null;
  #u = null;
  #h = null;
  #p = null;
  #a = [];
  #f = null;
  #v = Ze();
  #S = null;
  #y = null;
  #g = null;
  #m = Xe();
  #b = null;
  #k = null;
  installMeter(e, n, {
    omitUnits = !1
  } = {}) {
    this.#e = e;
    let r = s => omitUnits ? void 0 : s;
    this.#t = n("claude_code.session.count", {
      description: "Count of CLI sessions started"
    }), this.#n = n("claude_code.lines_of_code.count", {
      description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change"
    }), this.#r = n("claude_code.pull_request.count", {
      description: "Number of pull requests created"
    }), this.#o = n("claude_code.commit.count", {
      description: "Number of git commits created"
    }), this.#s = n("claude_code.cost.usage", {
      description: "Cost of the Claude Code session",
      unit: r("USD")
    }), this.#i = n("claude_code.token.usage", {
      description: "Number of tokens used",
      unit: r("tokens")
    }), this.#d = n("claude_code.code_edit_tool.decision", {
      description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
    }), this.#l = n("claude_code.active_time.total", {
      description: "Total active time in seconds",
      unit: r("s")
    });
  }
  meter() {
    return this.#e;
  }
  sessionCounter() {
    return this.#t;
  }
  locCounter() {
    return this.#n;
  }
  prCounter() {
    return this.#r;
  }
  commitCounter() {
    return this.#o;
  }
  costCounter() {
    return this.#s;
  }
  tokenCounter() {
    return this.#i;
  }
  codeEditToolDecisionCounter() {
    return this.#d;
  }
  activeTimeCounter() {
    return this.#l;
  }
  statsStore() {
    return this.#c;
  }
  replaceStatsStore(e) {
    this.#c = e;
  }
  loggerProvider() {
    return this.#u;
  }
  replaceLoggerProvider(e) {
    this.#u = e;
  }
  eventLogger() {
    return this.#h;
  }
  eventLoggerOwner() {
    return this.#p;
  }
  attachEventLogger(e, n) {
    if (this.#h = e, this.#p = e ? n : null, !e) return;
    let o = this.#a;
    if (this.#a = null, o) for (let r of o) e.emit(r);
  }
  bufferPendingEvent(e) {
    if (this.#a === null || this.#a.length >= 100) return !1;
    return this.#a.push(e), !0;
  }
  closeWindow(e) {
    this.#a = null, this.#f = e;
  }
  windowCloseCause() {
    return this.#f;
  }
  isWindowOpen() {
    return this.#a !== null;
  }
  hostOtel() {
    return this.#v;
  }
  meterProvider() {
    return this.#S;
  }
  replaceMeterProvider(e) {
    this.#S = e;
  }
  tracerProvider() {
    return this.#y;
  }
  replaceTracerProvider(e) {
    this.#y = e;
  }
  cachedTelemetryResource() {
    return this.#g;
  }
  replaceCachedTelemetryResource(e) {
    this.#g = e;
  }
  cachedOtlpHttpAgentFactory(e, n) {
    return this.#m[e ? "proxied" : "direct"][n];
  }
  replaceCachedOtlpHttpAgentFactory(e, n, o) {
    this.#m[e ? "proxied" : "direct"][n] = o;
  }
  inClusterOtlpTrustRoots() {
    return this.#b;
  }
  replaceInClusterOtlpTrustRoots(e) {
    this.#b = e;
  }
  inClusterOtlpAgentFactory() {
    return this.#k;
  }
  replaceInClusterOtlpAgentFactory(e) {
    this.#k = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#r = null, this.#o = null, this.#s = null, this.#i = null, this.#d = null, this.#l = null, this.#c = null, this.#u = null, this.#h = null, this.#p = null, this.#a = [], this.#f = null, this.#v = Ze(), this.#S = null, this.#y = null, this.#g = null, this.#m = Xe(), this.#b = null, this.#k = null;
  }
}
function et(e, n) {
  return e.accountUuid === n.accountUuid && e.emailAddress === n.emailAddress && e.organizationUuid === n.organizationUuid;
}
class Re {
  #e = void 0;
  #t = null;
  #n = void 0;
  #r = !1;
  #o = null;
  #s = null;
  #i = void 0;
  #d = void 0;
  #l = new Set();
  #c = new Map();
  #u = void 0;
  #h = null;
  #p = new Set();
  #a = null;
  #f = 0;
  #v = null;
  #S = null;
  #y = null;
  #g = !1;
  #m = [];
  #b = "single";
  #k = null;
  #x = !1;
  #C = !1;
  #P = () => !1;
  #w = null;
  #M = void 0;
  #R = null;
  #T = null;
  sessionIngressToken() {
    return this.#e;
  }
  replaceSessionIngressToken(e) {
    this.#e = e;
  }
  inferenceRequestToken() {
    return this.#t;
  }
  replaceInferenceRequestToken(e) {
    this.#t = e;
  }
  oauthTokenFromFd() {
    return this.#n;
  }
  replaceOauthTokenFromFd(e) {
    this.#n = e;
  }
  oauthTokenFromBgSnapshot() {
    return this.#r;
  }
  replaceOauthTokenFromBgSnapshot(e) {
    this.#r = e;
  }
  loginStashedInTokenSlot() {
    return this.#o;
  }
  replaceLoginStashedInTokenSlot(e) {
    this.#o = e;
  }
  oauthOrgFromBgSnapshot() {
    return this.#s;
  }
  replaceOauthOrgFromBgSnapshot(e) {
    this.#s = e;
  }
  oauthScopesFromFd() {
    return this.#i;
  }
  replaceOauthScopesFromFd(e) {
    this.#i = e;
  }
  apiKeyFromFd() {
    return this.#d;
  }
  replaceApiKeyFromFd(e) {
    this.#d = e;
  }
  descriptorAnnouncementConsumed(e) {
    return this.#l.has(e);
  }
  markDescriptorAnnouncementConsumed(e) {
    this.#l.add(e);
  }
  credentialRoad(e) {
    return this.#c.get(e);
  }
  noteCredentialRoad(e, n, o) {
    if (o !== null && !this.#c.has(e)) this.#c.set(e, n);
  }
  gatewayTokenFromDescriptor() {
    return this.#u;
  }
  replaceGatewayTokenFromDescriptor(e) {
    this.#u = e;
  }
  resetFdCredentialState() {
    this.#e = void 0, this.#n = void 0, this.#r = !1, this.#o = null, this.#s = null, this.#i = void 0, this.#d = void 0;
  }
  gatewayAuth() {
    return this.#h;
  }
  replaceGatewayAuth(e) {
    this.#h = e;
  }
  isGatewayHostHeldStrict(e) {
    return this.#p.has(e);
  }
  holdGatewayHostStrict(e) {
    this.#p.add(e);
  }
  releaseGatewayHost(e) {
    this.#p.delete(e);
  }
  gatewayServerProcess() {
    return this.#C;
  }
  replaceGatewayServerProcess(e) {
    this.#C = e;
  }
  gatewayRequiredByHostPolicy() {
    return this.#P();
  }
  replaceGatewayRequiredByHostPolicyReader(e) {
    this.#P = e;
  }
  authenticatedAccount() {
    return this.#a;
  }
  authenticatedAccountEpoch() {
    return this.#f;
  }
  stampAuthenticatedAccount(e) {
    let n = this.#a;
    if (e !== null && n !== null && et(e, n)) {
      if (e.seatTier !== n.seatTier) this.#a = e;
      return;
    }
    this.#f += 1, this.#a = e, this.#v = null;
    let o = e !== null && this.#y !== null && et(e, this.#y);
    if (this.#y = null, this.#g = !1, this.#x = !1, !o) this.#S = null, this.#m = [], this.#b = "single", this.#k = null;
  }
  dropAuthenticatedAccountForNewToken(e) {
    let n = this.#a ?? this.#y,
      o = !e || this.#a === null && this.#g,
      r = this.#S,
      s = this.#m,
      i = this.#b,
      a = this.#k;
    this.stampAuthenticatedAccount(null), this.#y = n, this.#g = o, this.#S = r, this.#m = s, this.#b = i, this.#k = a, this.#x = !0;
  }
  tokenAdoptedSinceStamp() {
    return this.#x;
  }
  programUseCaseOwner() {
    return this.#g ? null : this.#y;
  }
  programUseCaseAwaitsAccount() {
    return this.#g;
  }
  bearerPlan() {
    return this.#v;
  }
  replaceBearerPlan(e) {
    this.#v = e;
  }
  programUseCaseId() {
    return this.#S;
  }
  replaceProgramUseCaseId(e) {
    this.#S = e;
  }
  programUseCaseChoices() {
    return this.#m;
  }
  replaceProgramUseCaseChoices(e) {
    this.#m = e;
  }
  programUseCaseChoiceMode() {
    return this.#b;
  }
  replaceProgramUseCaseChoiceMode(e) {
    this.#b = e;
  }
  programUseCaseRefusal() {
    return this.#k;
  }
  replaceProgramUseCaseRefusal(e) {
    this.#k = e;
  }
  startupPolicySnapshot() {
    return this.#M;
  }
  replaceStartupPolicySnapshot(e) {
    this.#M = e;
  }
  gatewayRefreshInFlight() {
    return this.#w;
  }
  replaceGatewayRefreshInFlight(e) {
    this.#w = e;
  }
  sdkOAuthTokenRefreshCallback() {
    return this.#R;
  }
  replaceSdkOAuthTokenRefreshCallback(e) {
    this.#R = e;
  }
  hostAuthTokenRefreshCallback() {
    return this.#T;
  }
  replaceHostAuthTokenRefreshCallback(e) {
    this.#T = e;
  }
  resetForTests() {
    this.#e = null, this.#t = null, this.#n = null, this.#r = !1, this.#o = null, this.#i = void 0, this.#d = null, this.#l.clear(), this.#c.clear(), this.#u = void 0, this.#h = null, this.#p.clear(), this.#a = null, this.#f = 0, this.#v = null, this.#y = null, this.#g = !1, this.#S = null, this.#m = [], this.#b = "single", this.#k = null, this.#x = !1, this.#C = !1, this.#P = () => !1, this.#w = null, this.#M = void 0, this.#R = null, this.#T = null;
  }
}
class xe {
  #e = void 0;
  #t = !1;
  #n = !1;
  #r;
  directConnectServerUrl() {
    return this.#e;
  }
  replaceDirectConnectServerUrl(e) {
    this.#e = e;
  }
  connectNonBlocking() {
    return this.#t;
  }
  replaceConnectNonBlocking(e) {
    this.#t = e;
  }
  strictConfig() {
    return this.#n;
  }
  replaceStrictConfig(e) {
    this.#n = e;
  }
  registerEnsureConnectedClient(e) {
    this.#r = e;
  }
  ensureConnectedClient() {
    return this.#r;
  }
  reset() {
    this.#e = void 0, this.#t = !1, this.#n = !1;
  }
}
class we {
  #e = null;
  #t = new Map();
  #n = new Map();
  #r = new Set();
  #o = new Set();
  #s = new Set();
  #i = new Map();
  #d = new Map();
  #l = !1;
  #c = !1;
  #u = !1;
  #h = !1;
  #p = !1;
  #a = !1;
  #f = !1;
  #v = !1;
  #S = !1;
  #y = !1;
  #g = new Set();
  #m = !1;
  #b = new Set();
  #k = !1;
  #x = !1;
  #C = !1;
  #P = !1;
  #w = !1;
  #M = !1;
  #R = new Map();
  #T = void 0;
  #O = void 0;
  #A = !1;
  #L = void 0;
  #D = !1;
  #F = !1;
  #H = !1;
  #I = !1;
  #B = !1;
  #U = void 0;
  #E = void 0;
  #j = void 0;
  #q = !1;
  #N = new Map();
  #W = new Map();
  promptCache1hAllowlist() {
    return this.#e;
  }
  replacePromptCache1hAllowlist(e) {
    this.#e = e;
  }
  thinkingTypeOverrides() {
    return this.#t;
  }
  recordThinkingTypeOverride(e, n) {
    this.#t.set(e, n);
  }
  servedModelsByRequestedModel() {
    return this.#n;
  }
  recordServedModels(e, n) {
    this.#n.set(e, n);
  }
  effortUnsupportedModels() {
    return this.#r;
  }
  markEffortUnsupported(e) {
    this.#r.add(e);
  }
  structuredOutputsUnsupportedModels() {
    return this.#o;
  }
  markStructuredOutputsUnsupported(e) {
    this.#o.add(e);
  }
  clearStructuredOutputsUnsupported() {
    this.#o = new Set();
  }
  context1mRefusedModels() {
    return this.#s;
  }
  markContext1mRefused(e) {
    this.#s.add(e);
  }
  clearContext1mRefused() {
    this.#s = new Set();
  }
  refusedBetas(e) {
    return this.#i.get(e) ?? [];
  }
  markBetaRefused(e, n) {
    let o = this.#i.get(e);
    if (o) o.add(n);else this.#i.set(e, new Set([n]));
  }
  learnedEffortCaps() {
    return this.#d;
  }
  midConvCachePromotionRejected() {
    return this.#l;
  }
  markMidConvCachePromotionRejected() {
    this.#l = !0;
  }
  toolProvenanceServerUrlRefused() {
    return this.#c;
  }
  markToolProvenanceServerUrlRefused() {
    this.#c = !0;
  }
  perTurnEffortOkEmitted() {
    return this.#u;
  }
  markPerTurnEffortOkEmitted() {
    this.#u = !0;
  }
  lateToolAdditionsOkEmitted() {
    return this.#h;
  }
  markLateToolAdditionsOkEmitted() {
    this.#h = !0;
  }
  toolResultScreeningOkEmitted() {
    return this.#p;
  }
  markToolResultScreeningOkEmitted() {
    this.#p = !0;
  }
  toolChangeHeaderRefused() {
    return this.#a;
  }
  markToolChangeHeaderRefused() {
    this.#a = !0;
  }
  promptEndMarkRefused() {
    return this.#f;
  }
  markPromptEndMarkRefused() {
    this.#f = !0;
  }
  inlineToolsRefused() {
    return this.#v;
  }
  markInlineToolsRefused() {
    this.#v = !0;
  }
  inlineToolsOkEmitted() {
    return this.#S;
  }
  markInlineToolsOkEmitted() {
    this.#S = !0;
  }
  thinkingResumptionRefused() {
    return this.#y;
  }
  markThinkingResumptionRefused() {
    this.#y = !0;
  }
  refusedBetaHeaders() {
    return this.#g;
  }
  markBetaHeaderRefused(e) {
    this.#g.add(e);
  }
  unmarkBetaHeaderRefused(e) {
    this.#g.delete(e);
  }
  thinkingHighlightsRefused() {
    return this.#m;
  }
  markThinkingHighlightsRefused() {
    this.#m = !0;
  }
  toolChangeUnsupportedModels() {
    return this.#b;
  }
  markToolChangeUnsupportedModel(e) {
    this.#b.add(e);
  }
  internalModelFieldsRefused() {
    return this.#k;
  }
  markInternalModelFieldsRefused() {
    this.#k = !0;
  }
  internalModelFieldsRefusalAnnounced() {
    return this.#x;
  }
  markInternalModelFieldsRefusalAnnounced() {
    this.#x = !0;
  }
  thirdPartyServerClassifierRefused() {
    return this.#C;
  }
  markThirdPartyServerClassifierRefused() {
    this.#C = !0;
  }
  releaseThirdPartyServerClassifierRefusal() {
    this.#C = !1;
  }
  serverCheckEntryAnswered() {
    return this.#P;
  }
  markServerCheckEntryAnswered() {
    this.#P = !0;
  }
  serverCheckRefusalSuspected() {
    return this.#w;
  }
  markServerCheckRefusalSuspected() {
    this.#w = !0;
  }
  threadsHeldForServerClassifier() {
    return this.#M;
  }
  markThreadsHeldForServerClassifier() {
    this.#M = !0;
  }
  autoModeUnavailableResponse(e) {
    return this.#R.get(e);
  }
  autoModeUnavailableResponsesInARow(e, {
    noCheckOnly = !1
  } = {}) {
    let o = 0;
    for (let r of this.#R.values()) if (r.runKey === e && (!noCheckOnly || r.noCheck)) o++;
    return o;
  }
  dropAutoModeUnavailableResponsesOfOtherTurns(e, n) {
    for (let [o, r] of this.#R) if (r.runKey === e && r.turn !== void 0 && r.turn !== n) this.#R.delete(o);
  }
  noteAutoModeUnavailableResponse(e, n) {
    this.#R.set(e, n);
  }
  clearAutoModeUnavailableResponses(e) {
    for (let [n, o] of this.#R) if (o.runKey === e) this.#R.delete(n);
  }
  setAutoModeUnavailableStopNotice(e) {
    this.#T = e;
  }
  autoModeUnavailableStopNotice() {
    return this.#T;
  }
  setLocalCommandExitCode(e) {
    this.#O = e;
  }
  localCommandExitCode() {
    return this.#O;
  }
  observedGateway() {
    return this.#U;
  }
  serverClassifierFallbackChoice() {
    return this.#E;
  }
  setServerClassifierFallbackChoice(e) {
    this.#E = e;
  }
  clearServerClassifierFallbackChoice() {
    this.#E = void 0;
  }
  openAutoModeEndOffer() {
    return this.#j;
  }
  setOpenAutoModeEndOffer(e) {
    this.#j = e;
  }
  keepsLocalClassifierFallback() {
    return this.#q;
  }
  keepLocalClassifierFallback() {
    this.#q = !0;
  }
  noteObservedGateway(e) {
    this.#U ??= e;
  }
  takeServerClassifierFallbackAnnouncement() {
    if (!this.#C || this.#A) return !1;
    return this.#A = !0, !0;
  }
  takeFallbackUnacknowledgedAnnouncement() {
    if (!this.#C || this.#B) return !1;
    return this.#B = !0, !0;
  }
  noteNoServerCheck(e) {
    if (this.#L !== void 0) return !1;
    return this.#L = e, !0;
  }
  noteNoServerCheckStoppedTurn() {
    this.#F = !0;
  }
  takeNoServerCheckStoppedTurn() {
    let e = this.#F;
    return this.#F = !1, e;
  }
  serverCheckDeclined() {
    return this.#H;
  }
  setServerCheckDeclined(e) {
    this.#H = e;
  }
  noteRefusedStreakStoppedTurn() {
    this.#I = !0;
  }
  takeRefusedStreakStoppedTurn() {
    let e = this.#I;
    return this.#I = !1, e;
  }
  takeNoServerCheckAnnouncement() {
    if (this.#D || this.#L === void 0) return;
    return this.#D = !0, this.#L;
  }
  inferenceProfileBackingModels() {
    return this.#N;
  }
  recordInferenceProfileBackingModel(e, n) {
    this.#N.set(e, n);
  }
  foundryDeploymentCapabilities() {
    return this.#W;
  }
  reset() {
    this.#e = null, this.#t = new Map(), this.#n = new Map(), this.#r = new Set(), this.#o = new Set(), this.#s = new Set(), this.#i = new Map(), this.#d = new Map(), this.#l = !1, this.#c = !1, this.#u = !1, this.#h = !1, this.#p = !1, this.#a = !1, this.#f = !1, this.#v = !1, this.#S = !1, this.#y = !1, this.#g = new Set(), this.#m = !1, this.#b = new Set(), this.#k = !1, this.#x = !1, this.#C = !1, this.#P = !1, this.#w = !1, this.#M = !1, this.#R.clear(), this.#T = void 0, this.#O = void 0, this.#A = !1, this.#B = !1, this.#L = void 0, this.#D = !1, this.#F = !1, this.#H = !1, this.#I = !1, this.#U = void 0, this.#E = void 0, this.#j = void 0, this.#q = !1, this.#N = new Map(), this.#W = new Map();
  }
}
class Pe {
  #e = !1;
  #t = !1;
  longContext1mCreditsBlocked() {
    return this.#e;
  }
  replaceLongContext1mCreditsBlocked(e) {
    this.#e = e;
  }
  usageCreditsRequired() {
    return this.#t;
  }
  replaceUsageCreditsRequired(e) {
    this.#t = e;
  }
  reset() {
    this.#e = !1, this.#t = !1;
  }
}
class Me {
  #e = !1;
  #t = !1;
  #n = tt;
  #r = De();
  selectorGate() {
    return this.#e;
  }
  selectorGateEverOn() {
    return this.#t;
  }
  replaceSelectorGate(e) {
    this.#e = e, this.#t ||= e;
  }
  inheritSelectorGateEverOn() {
    this.#t = !0;
  }
  resampleSelectorGate(e) {
    let n = this.#e;
    if (this.#e = e, this.#t ||= e, n !== e) this.#r.emit(e);
  }
  subscribeSelectorGateChanged(e) {
    return this.#r.subscribe(e);
  }
  replaceHostGateSubscription(e) {
    let n = this.#n;
    this.#n = e, n();
  }
  dropHostGateSubscription() {
    this.replaceHostGateSubscription(tt);
  }
}
function tt() {}
class Te {
  started = !1;
  stagingReaped = !1;
  claim() {
    if (this.started) return !1;
    return this.started = !0, !0;
  }
  claimStagingReap() {
    if (this.stagingReaped) return !1;
    return this.stagingReaped = !0, !0;
  }
}
class Ae {
  clock;
  backgroundHousekeeping;
  launchOptions;
  settingsSource;
  extensionsConfig;
  modelStringsCache;
  diagnostics;
  telemetryHandles;
  credentialSlots;
  mcpProcessWiring;
  requestLatches;
  accountCreditLatches;
  proactivity;
  constructor(e) {
    this.clock = e.clock, this.backgroundHousekeeping = e.backgroundHousekeeping, this.launchOptions = e.launchOptions, this.settingsSource = e.settingsSource, this.extensionsConfig = e.extensionsConfig, this.modelStringsCache = e.modelStringsCache, this.diagnostics = e.diagnostics, this.telemetryHandles = e.telemetryHandles, this.credentialSlots = e.credentialSlots, this.mcpProcessWiring = e.mcpProcessWiring, this.requestLatches = e.requestLatches, this.accountCreditLatches = e.accountCreditLatches, this.proactivity = e.proactivity;
  }
}
function nt() {
  return new Ae({
    clock: new WIo(),
    backgroundHousekeeping: new Te(),
    launchOptions: new me(),
    settingsSource: new Se(),
    extensionsConfig: new ve(),
    modelStringsCache: new be(),
    diagnostics: new ke(),
    telemetryHandles: new Ce(),
    credentialSlots: new Re(),
    mcpProcessWiring: new xe(),
    requestLatches: new we(),
    accountCreditLatches: new Pe(),
    proactivity: new Me()
  });
}
function wt(e = UKs()) {
  return gOo({
    host: nt(),
    id: wqn() ?? Jae(),
    project: {
      originalCwd: e,
      projectRoot: e,
      cwd: e
    }
  });
}
var y = wt(_qn);
function H() {
  return t();
}
function t() {
  return b()?.session ?? y;
}
function Po(e) {
  return e.of(y.host);
}
function c() {
  let e = b();
  return e?.session ? void 0 : e;
}
var b = () => {
  return;
};
function Mva(e) {
  b = e;
}
ze(e => Ve.of(t().host).reporter?.(e));
Hoa({
  isDiskless: () => q(),
  isDisklessProcess: () => Qp(),
  reportBuilt: e => Uoa.of(t().host).reporter?.(e)
});
function z() {
  return c()?.sessionId ?? t().id;
}
function st() {
  let e = c()?.sessionId;
  if (e) return Pr(e);
  let n = t();
  return n.identity.mainAgentId(n.id);
}
function rt() {
  let e = t();
  return e.requestJournal.promptIndex() > 0 || e.sessionScratch.chromeAvailabilityStagesLogged().size > 0;
}
function UWs(e = {}) {
  let n = t(),
    parentId_2 = n.id;
  n.sessionScratch.forgetPlanSlug(parentId_2), n.identity.replaceProjectDir(null);
  let r = rt();
  n.requestJournal.replacePromptIndex(0), n.requestJournal.replaceLastPersonPrompt(null), n.requestJournal.replaceLastCancelledAPIMessageId(null), n.requestJournal.clearLastMainThreadRequest(), n.requestJournal.replaceLastMainRequestId(void 0, void 0), n.modelSelection.forgetRefusalFallbackOccurred(), n.sessionFlags.forgetPendingContextCompacted(), n.sessionScratch.replacePendingBranchLinks(), n.sessionScratch.replaceChromeAvailabilityStagesLogged(r);
  let s = lt(),
    id_2 = e.next ?? Jae();
  return n.costLedger.scopeTo(id_2), n.update({
    id: id_2,
    ...(e.setCurrentAsParent && {
      parentId: parentId_2
    })
  }), it(n, "clear", s), n.id;
}
function it(e, n, o) {
  let r = dt.of(e);
  if (o) r.emit(e.id, n, o);else r.emit(e.id, n);
}
function at(e) {
  ct.of(e).emit(Bo(e).originalCwd);
}
function d4e() {
  let e = c();
  return e ? e.parentSessionId : t().parentId;
}
function Nw(id_3, n, o = null, r) {
  let s = t(),
    project_2 = r ? w(s.project, ut(r)) : r,
    a,
    parentId_3 = s.parentId;
  if (s.id !== id_3) {
    if (s.sessionScratch.forgetPlanSlug(s.id), s.requestJournal.replaceLastCancelledAPIMessageId(null), s.requestJournal.replaceLastPersonPrompt(null), s.requestJournal.clearLastMainThreadRequest(id_3), n !== "fork") s.requestJournal.replaceLastMainRequestId(void 0, void 0);
    s.modelSelection.forgetRefusalFallbackOccurred(), s.sessionFlags.forgetPendingContextCompacted(), s.sessionScratch.replacePendingBranchLinks(), s.sessionScratch.replaceChromeAvailabilityStagesLogged(rt()), a = lt(), parentId_3 = void 0;
  }
  if (s.identity.replaceProjectDir(o), s.update({
    id: id_3,
    parentId: parentId_3,
    ...(project_2 !== void 0 && {
      project: project_2
    })
  }), it(s, n, a), r?.originalCwd !== void 0) at(s);
}
function lt() {
  let e = t(),
    n = e.modelSelection.refusalFallbackModelLatch();
  if (e.modelSelection.unlatchRefusalFallbackModel("session_transition"), !n || e.modelSelection.mainLoopModelOverride() !== n.fallbackModel) return;
  return e.modelSelection.overrideMainLoopModel(n.previousOverride), {
    appStateModel: n.previousAppStateModel,
    forSessionValue: n.previousModelForSession,
    overrideValue: n.previousOverride,
    restoredToExplicitOverride: n.previousOverride !== void 0,
    fallbackModel: n.fallbackModel
  };
}
var dt = new Je(() => De());
function rf(e) {
  return dt.of(t()).subscribe(e);
}
function yOo() {
  return t().sessionScratch.humanAttachmentDigests();
}
function BWs() {
  return t().sessionScratch.inboundAttachmentFiles();
}
function Tme() {
  return t().sessionScratch.filesPlacedByName();
}
function a$r() {
  return t().sessionScratch.filesPlacedByNameRead();
}
function _Oo(e) {
  t().sessionScratch.setFilesPlacedByNameRead(e);
}
function Yjt() {
  return t().sessionScratch.inboundAttachmentDownloads();
}
function Bnt() {
  return t().sessionScratch.arrivingInboundFiles();
}
function Mxe() {
  let e = c();
  return e ? e.sessionProjectDir : t().identity.projectDir();
}
function Ee() {
  return c()?.originalCwd ?? Bo(t()).originalCwd;
}
function Vs() {
  if (c()?.originalCwd === void 0 && t().project === null) return null;
  return Ee();
}
function lne() {
  return T4e();
}
function bP() {
  return Ee() === xt();
}
function Oo() {
  return c()?.projectRoot ?? Bo(t()).projectRoot;
}
function Uc() {
  if (c()?.projectRoot === void 0 && t().project === null) return null;
  return Oo();
}
function ut(e) {
  return e;
}
function YVn(e) {
  let n = t();
  if (n.update({
    project: ut(e)
  }), e.originalCwd !== void 0) at(n);
}
function y0(originalCwd) {
  YVn({
    originalCwd: originalCwd
  });
}
var ct = new Je(() => De());
function jWs(e) {
  return ct.of(t()).subscribe(e);
}
function h$e(projectRoot) {
  YVn({
    projectRoot: projectRoot
  });
}
function MC() {
  return Bo(t()).cwd;
}
function Awt(cwd_2) {
  YVn({
    cwd: cwd_2
  });
}
function XVn() {
  t().costLedger.restartClock();
}
function Dxe() {
  return t().costLedger.sessionStartTime();
}
function WWs() {
  return t().host.mcpProcessWiring.directConnectServerUrl();
}
function Lwe() {
  return t().host.mcpProcessWiring.connectNonBlocking();
}
function zWs(e) {
  t().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}
function GWs() {
  return t().sessionFlags.teardownUnwindRequested();
}
function bOo(e) {
  t().sessionFlags.replaceTeardownUnwindRequested(e);
}
function VWs() {
  return t().sessionFlags.backgroundAutoModeSetupInFlight();
}
function SOo(e) {
  t().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}
function KWs() {
  return t().sessionFlags.deferredToolStubGateLatch();
}
function qWs(e) {
  t().sessionFlags.replaceDeferredToolStubGateLatch(e);
}
function YWs() {
  return t().sessionFlags.verifySkillRolloutGateLatch();
}
function XWs(e) {
  t().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}
function JWs() {
  return t().sessionFlags.commitSkillRolloutGateLatch();
}
function QWs(e) {
  t().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}
function ZWs() {
  return t().sessionFlags.memoryToolsShapeLatch();
}
function l$r(e) {
  t().sessionFlags.replaceMemoryToolsShapeLatch(e);
}
function JVn(e, n) {
  let o = t();
  o.sessionFlags.armPendingContextCompacted(e, o.requestJournal.lastMainRequestId() === n ? o.requestJournal.lastMainResponse() ?? o.sessionFlags.responseBeforeCompaction() : void 0);
}
function ezs() {
  return t().sessionFlags.consumePendingContextCompacted();
}
function tzs() {
  return t().sessionFlags.responseBeforeCompaction();
}
function wOo() {
  t().sessionFlags.forgetResponseBeforeCompaction();
}
function nzs() {
  t().sessionFlags.forgetPendingContextCompacted();
}
function Ck() {
  return t().host.mcpProcessWiring.strictConfig();
}
function QVn(e) {
  t().host.mcpProcessWiring.replaceStrictConfig(e);
}
function ZVn() {
  return t().host.launchOptions.cliSessionConfigCarried();
}
function eKn(e) {
  t().host.launchOptions.replaceCliSessionConfigCarried(e);
}
function rzs() {
  return t().host.launchOptions.cliConfigBeyondSessionState();
}
function tKn(e) {
  t().host.launchOptions.replaceCliConfigBeyondSessionState(e);
}
function MN() {
  return t().host.launchOptions.forkRestrictedLaunchConfig();
}
function ozs(e) {
  t().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}
function Lae() {
  return t().host.launchOptions.forkReplayLaunchConfig();
}
function szs(e) {
  t().host.launchOptions.replaceForkReplayLaunchConfig(e);
}
function nKn() {
  return t().mcpSessionWiring.approvedServers();
}
function d$r(e, n) {
  t().mcpSessionWiring.approveServers(e, n);
}
function izs(e, n) {
  t().costLedger.recordApiDuration(e, n);
}
function azs(e, n, o) {
  t().costLedger.recordCost(e, n, o);
}
function lzs(e) {
  t().costLedger.recordSpentTokens(e);
}
function Ty() {
  return t().costLedger.totalCostUSD();
}
function dzs(e) {
  t().costLedger.recordSideQueryCost(e);
}
function czs() {
  return t().costLedger.sideQueryCostUSD();
}
function Rj() {
  return t().costLedger.totalAPIDuration();
}
function Lxe() {
  return t().costLedger.totalDuration();
}
function kOo() {
  return t().costLedger.totalAPIDurationWithoutRetries();
}
function vOo() {
  return t().costLedger.totalToolDuration();
}
function EOo(e) {
  t().costLedger.recordToolDuration(e);
}
function Xjt() {
  return t().host.telemetryHandles.statsStore();
}
function uzs(e) {
  t().host.telemetryHandles.replaceStatsStore(e);
}
function H5(e) {
  t().userPresence.recordInteraction(e);
}
function Nae() {
  t().userPresence.flushIfDirty();
}
function lB(e) {
  return t().userPresence.interactionFired.subscribe(e);
}
function fzs() {
  t().userPresence.resetBaseline();
}
function pzs(e, n) {
  t().costLedger.recordLinesChanged(e, n);
}
function Nwe() {
  return t().costLedger.totalLinesAdded();
}
function Fwe() {
  return t().costLedger.totalLinesRemoved();
}
function jnt() {
  return t().costLedger.totalInputTokens();
}
function ab() {
  return t().costLedger.totalOutputTokens();
}
function Ccn() {
  return t().costLedger.totalCacheReadInputTokens();
}
function Wnt() {
  return t().costLedger.totalCacheCreationInputTokens();
}
function mzs() {
  return t().costLedger.totalWebSearchRequests();
}
function hzs() {
  t().costLedger.markUnknownModelCost();
}
function TOo() {
  return t().costLedger.hasUnknownModelCost();
}
function COo() {
  t().costLedger.recordSafetyStop();
}
function y7() {
  return t().costLedger.safetyStops();
}
function $5() {
  return t().requestJournal.lastMainRequestId();
}
function gzs(e, n) {
  t().requestJournal.replaceLastMainRequestId(e, n);
}
function c$r() {
  t().requestJournal.replaceLastMainRequestId(void 0, void 0);
}
function xwt() {
  c$r(), wOo();
}
function Pwt() {
  return t().requestJournal.mainChainReleaseCount();
}
function _7() {
  return t().requestJournal.lastMainThreadCacheTtlMs();
}
function yzs(e, n) {
  return t().requestJournal.isLastMainThreadAskLive(e, n);
}
function kG() {
  return t().requestJournal.lastMainThreadRequestAt();
}
function rKn() {
  return t().requestJournal.lastLiveMainThreadRequestAt();
}
function _zs(e, n, o) {
  t().requestJournal.replaceLastMainThreadCacheTtlMs(e, n, o);
}
function u$r(e) {
  t().requestJournal.adjustLastMainThreadCacheTtlMs(e);
}
function bzs(e) {
  t().requestJournal.recordLastMainThreadCacheRenewal(e);
}
function Jjt() {
  return t().requestJournal.lastMainThreadCacheRenewedAt();
}
function c4e() {
  return t().requestJournal.lastMainThreadContextTokens();
}
function u4e(e) {
  t().requestJournal.replaceLastMainThreadContextTokens(e);
}
function Szs(e) {
  let n = t();
  if (e.sessionId !== void 0 && e.sessionId === n.id) n.requestJournal.applyResumeSeed(e);else n.requestJournal.stageResumeSeed(e);
}
function dne() {
  return t().requestJournal.lastApiCompletionTimestamp();
}
function f$r(e) {
  t().requestJournal.replaceLastApiCompletionTimestamp(e);
}
function Rcn(e, {
  keepsCachedPrefix = !1
} = {}) {
  let requestJournal = t().requestJournal;
  if (requestJournal.replacePendingPostCompaction(!0), requestJournal.replaceLastMainThreadContextTokens(e), !keepsCachedPrefix) requestJournal.replaceLastMainThreadRequest(null, null);
}
function wzs() {
  let e = t(),
    n = e.requestJournal.pendingPostCompaction();
  return e.requestJournal.replacePendingPostCompaction(!1), n;
}
function pm() {
  return t().userPresence.lastInteractionTime();
}
function ROo() {
  return t().userPresence.lastSubmitTime();
}
function Owt() {
  t().userPresence.recordSubmit();
}
var znt = 60000;
function kzs(e) {
  t().userPresence.updateTerminalFocus(e);
}
function f4e() {
  return t().userPresence.terminalFocus();
}
function vzs(e) {
  return t().userPresence.terminalFocusFired.subscribe(e);
}
function Ezs() {
  let e = f4e();
  if (e !== void 0) return e;
  return Date.now() - pm() < znt;
}
function AOo() {
  t().userPresence.markScrollActivity();
}
function Qjt() {
  return t().userPresence.scrollDraining();
}
async function oKn() {
  return t().userPresence.waitForScrollIdle();
}
function _0() {
  return t().costLedger.modelUsage();
}
function Tzs(e) {
  return t().costLedger.usageForModel(e);
}
function Czs() {
  t().costLedger.trackUsageSinceLastResult();
}
function Rzs() {
  return t().costLedger.usageSinceLastResult();
}
function Azs() {
  return t().costLedger.takeUsageSinceLastResult();
}
function of() {
  return t().modelSelection.mainLoopModelOverride();
}
function dB() {
  return t().modelSelection.initialMainLoopModel();
}
function eh(e) {
  t().modelSelection.overrideMainLoopModel(e);
}
function Iwt() {
  return t().modelSelection.mainLoopEffortState();
}
function sKn(e) {
  t().modelSelection.replaceMainLoopEffortState(e);
}
function xzs(e) {
  t().modelSelection.markRefusalFallbackOccurred(e);
}
function U5() {
  return t().modelSelection.refusalFallbackOccurred();
}
function Acn(e) {
  t().modelSelection.armRefusalFallbackHeader(e);
}
function Gnt() {
  return t().modelSelection.refusalFallbackHeaderArmed();
}
function Pzs() {
  t().modelSelection.armSilentLaneFromServer();
}
function xOo() {
  return t().modelSelection.silentLaneServerArmed();
}
function Ozs() {
  return t().modelSelection.refusalFallbackLatchOriginRequestId();
}
function xcn(e) {
  let n = t(),
    o = n.modelSelection.refusalFallbackModelLatch();
  if (o && n.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
    n.modelSelection.replaceRefusalFallbackModelLatch({
      ...o,
      fallbackModel: e.fallbackModel,
      carriedEffort: e.carriedEffort ?? o.carriedEffort
    });
    return;
  }
  n.modelSelection.replaceRefusalFallbackModelLatch(e);
}
function Nxe() {
  t().modelSelection.unlatchRefusalFallbackModel("model_pick");
}
function _Y() {
  return t().modelSelection.refusalFallbackModelLatch();
}
function iKn(e) {
  let {
      modelSelection: modelSelection
    } = t(),
    o = modelSelection.refusalFallbackModelLatch();
  if (o !== void 0) modelSelection.replaceRefusalFallbackModelLatch({
    ...o,
    carriedEffort: void 0
  }, e);
}
function Izs() {
  return t().modelSelection.takeCarriedEffortEnd();
}
function Mzs(previousOverride) {
  let n = t(),
    o = n.modelSelection.refusalFallbackModelLatch();
  if (o) n.modelSelection.replaceRefusalFallbackModelLatch({
    ...o,
    previousOverride: previousOverride
  });
}
function Dzs() {
  t().modelSelection.forgetRefusalFallbackOccurred();
}
function Lzs(e) {
  t().surfaceCapabilities.markSdkDialogHostActive(e);
}
function Aj() {
  return t().surfaceCapabilities.sdkDialogHostActive();
}
function POo(e, n) {
  t().surfaceCapabilities.declareDialogKinds(e, n);
}
function Hwe() {
  return t().surfaceCapabilities.sdkSupportedDialogKinds();
}
function Nzs() {
  let e = t();
  if (e.surfaceCapabilities.sdkSupportedDialogKinds() === void 0) return "none";
  return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}
function Fzs(e) {
  t().surfaceCapabilities.declarePerTaskStopAffordance(e);
}
function aKn() {
  return t().surfaceCapabilities.sdkPerTaskStopAffordance() === !0;
}
function Hzs(e) {
  t().surfaceCapabilities.declareRapidFollowupPreempt(e);
}
function $zs() {
  return t().surfaceCapabilities.sdkRapidFollowupPreempt() === !0;
}
function Uzs(e) {
  t().surfaceCapabilities.declareForwardNestedSubagentToolCalls(e);
}
function p$r(e) {
  t().surfaceCapabilities.declareHostRendersChromeSetupOffer(e);
}
function Zjt() {
  return t().surfaceCapabilities.hostRendersChromeSetupOffer() === !0;
}
function vG() {
  return t().host.launchOptions.replConfigArgv();
}
function Vnt(e) {
  t().host.launchOptions.replaceReplConfigArgv(e);
}
function Bzs(e) {
  t().modelSelection.replaceInitialMainLoopModel(e);
}
function jzs() {
  return t().modelSelection.availabilityFallbackChain();
}
function Wzs(e) {
  t().modelSelection.replaceAvailabilityFallbackChain(e);
}
function lKn() {
  return t().modelSelection.initialModelSettingLayer();
}
function zzs(e) {
  t().modelSelection.replaceInitialModelSettingLayer(e);
}
function Gzs() {
  return t().modelSelection.resolvedOrgDefault();
}
function Knt(e) {
  t().modelSelection.replaceResolvedOrgDefault(e);
}
function Vzs() {
  return t().modelSelection.initialEnvDefaultModel();
}
function Kzs(e) {
  t().modelSelection.replaceInitialEnvDefaultModel(e);
}
function jp() {
  return c()?.sdkBetas ?? t().surfaceCapabilities.sdkBetas();
}
function qzs(e) {
  t().surfaceCapabilities.replaceSdkBetas(e);
}
function g$e() {
  return t().host.accountCreditLatches.longContext1mCreditsBlocked();
}
function Yzs(e) {
  t().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}
function Xzs() {
  return t().host.accountCreditLatches.usageCreditsRequired();
}
function dKn(e) {
  t().host.accountCreditLatches.replaceUsageCreditsRequired(e);
}
function OOo(e) {
  return t().usageCreditsOnlyModelConsentSlots.consentSessionFallback(e);
}
function IOo(e, n) {
  t().usageCreditsOnlyModelConsentSlots.replaceConsentSessionFallback(e, n);
}
function Jzs(e) {
  return t().usageCreditsOnlyModelConsentSlots.sessionConsentKey(e);
}
function MOo(e, n) {
  t().usageCreditsOnlyModelConsentSlots.replaceSessionConsentKey(e, n);
}
function Cme() {
  return t().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}
function Pcn(e) {
  t().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}
function qnt() {
  return t().host.credentialSlots.hostAuthTokenRefreshCallback();
}
function cKn(e) {
  t().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}
function Qzs(e) {
  y.costLedger.registerSaver(e);
}
function Zzs(e) {
  t().costLedger.runSaver(e, y.costLedger);
}
function eGs(e) {
  y.costLedger.registerTranscriptRecorder(e);
}
function tGs(e, n) {
  t().costLedger.runTranscriptRecorder(e, n, y.costLedger);
}
function nGs() {
  let e = t();
  return e.costLedger.belongsTo(e.id);
}
function Ocn() {
  let e = t();
  e.costLedger.claim(e.id);
}
function rGs() {
  let e = t();
  e.costLedger.scopeTo(e.id);
}
function Mwt() {
  let e = t();
  e.costLedger.reset(e.id), e.requestJournal.replacePromptId(null);
}
function oGs(e) {
  let n = t();
  n.costLedger.restore(e, n.id);
}
function mo() {
  return t().host.launchOptions.projectConfigRoot();
}
function sGs(e) {
  t().host.launchOptions.replaceProjectConfigRoot(e);
}
function Icn() {
  return t().host.modelStringsCache.modelStrings();
}
function m$r(e) {
  t().host.modelStringsCache.replaceModelStrings(e);
}
function iGs() {
  t().host.modelStringsCache.invalidate();
}
function aGs(e) {
  t().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}
function lGs() {
  return t().host.modelStringsCache.admin3PSteeringSnapshot();
}
function dGs(e) {
  t().host.modelStringsCache.recordProbeRefutedDocumentDefault(e);
}
function cGs() {
  return t().host.modelStringsCache.probeRefutedDocumentDefaults();
}
function eWt() {
  return t().host.telemetryHandles.loggerProvider();
}
function DOo(e) {
  t().host.telemetryHandles.replaceLoggerProvider(e);
}
function p4e() {
  return t().host.telemetryHandles.eventLogger();
}
function LOo() {
  return t().host.telemetryHandles.eventLoggerOwner();
}
function NOo(e, n = "org") {
  t().host.telemetryHandles.attachEventLogger(e, n);
}
function uGs(e) {
  return t().host.telemetryHandles.bufferPendingEvent(e);
}
function FOo(e) {
  t().host.telemetryHandles.closeWindow(e);
}
function fGs() {
  return t().host.telemetryHandles.windowCloseCause();
}
function y$e() {
  return t().host.telemetryHandles.isWindowOpen();
}
function Mcn() {
  return t().host.telemetryHandles.hostOtel();
}
function Dwt() {
  return t().host.telemetryHandles.tracerProvider();
}
function HOo(e) {
  t().host.telemetryHandles.replaceTracerProvider(e);
}
function h$r() {
  return t().host.requestLatches.foundryDeploymentCapabilities();
}
function pGs() {
  return t().host.telemetryHandles.cachedTelemetryResource();
}
function mGs(e) {
  t().host.telemetryHandles.replaceCachedTelemetryResource(e);
}
function g$r(e, n) {
  return t().host.telemetryHandles.cachedOtlpHttpAgentFactory(e, n);
}
function hGs(e, n, o) {
  t().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, n, o);
}
function ye() {
  return !t().host.launchOptions.isInteractive();
}
function Fxe() {
  return t().host.launchOptions.spareClaimState();
}
function b0() {
  return t().host.launchOptions.spareClaimState() === "parked";
}
function gGs() {
  let launchOptions = t().host.launchOptions;
  launchOptions.replaceSpareClaimState("parked"), launchOptions.replaceSpareParkedAtMs(Date.now());
}
function yGs() {
  let launchOptions_2 = t().host.launchOptions,
    n = launchOptions_2.spareParkedAtMs();
  return launchOptions_2.replaceSpareClaimState("claiming"), n === void 0 ? void 0 : Date.now() - n;
}
function _Gs() {
  t().host.launchOptions.replaceSpareClaimState("claimed");
}
function bGs() {
  t().host.launchOptions.replaceSpareClaimState("failed");
}
function Ynt() {
  let e = t().host.launchOptions.spareClaimState();
  return e === "parked" || e === "claiming" || e === "failed";
}
function Ml() {
  return t().host.launchOptions.isInteractive();
}
function SGs() {
  return t().host.launchOptions.isInteractivityDecided();
}
function wGs() {
  return t().host.launchOptions.isNoDialogLaunch();
}
function Dva() {
  t().host.launchOptions.markNoDialogLaunch();
}
function Xnt(e) {
  let n = t(),
    o = n.host.launchOptions.isInteractive() !== e;
  if (n.host.launchOptions.replaceIsInteractive(e), o) QHr.of(n.host).invalidateAll();
}
function B5() {
  return t().host.launchOptions.printOutputFormat();
}
function kGs(e) {
  t().host.launchOptions.replacePrintOutputFormat(e);
}
function Lwt() {
  return t().host.launchOptions.thinkingDisplayExplicit();
}
function Nwt(e) {
  t().host.launchOptions.replaceThinkingDisplayExplicit(e);
}
function LE() {
  return t().host.launchOptions.permissionPromptToolName();
}
function vGs(e) {
  t().host.launchOptions.replacePermissionPromptToolName(e);
}
function sf() {
  return t().surfaceCapabilities.attacherCaps();
}
function EGs(e) {
  t().surfaceCapabilities.replaceAttacherCaps(e);
}
function XA(e) {
  return t().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}
function TGs() {
  return t().surfaceCapabilities.rvSupervisorLinkLive();
}
function uKn(e) {
  t().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}
function CGs(e) {
  return t().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}
function tWt() {
  return t().host.launchOptions.hasStreamingInput();
}
function RGs(e) {
  t().host.launchOptions.replaceHasStreamingInput(e);
}
function AGs({
  hasStreamingInput: hasStreamingInput,
  sdkUrl: sdkUrl
}) {
  return !hasStreamingInput && !sdkUrl;
}
function Pt(e) {
  if (e.entrypoint === "terminal") return e.ownEventsRequested ? "terminal" : "none";
  if (e.ownEventsOnly) return "evals";
  if (e.hasStreamingInput || e.sdkUrl) return "host";
  if (e.ownEventsRequested) return "evals";
  return "none";
}
function xGs(e) {
  t().host.launchOptions.replaceSingleShotPrintSession(e);
}
function b7() {
  return t().host.launchOptions.singleShotPrintSession();
}
function PGs() {
  t().host.launchOptions.markPrintInputClosed();
}
function S7() {
  return t().host.launchOptions.printInputClosed();
}
function fKn() {
  return t().host.launchOptions.clientType();
}
function OGs(e) {
  t().host.launchOptions.replaceClientType(e);
}
function Hxe() {
  return t().host.launchOptions.sdkAgentProgressSummariesEnabled();
}
function pKn(e) {
  t().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}
function mKn() {
  return t().host.launchOptions.rendererMode();
}
function IGs(e) {
  t().host.launchOptions.replaceRendererMode(e);
}
function Dcn() {
  return t().host.launchOptions.strictToolResultPairing();
}
function IT() {
  return t().host.launchOptions.restrictedSession();
}
function hKn(e) {
  t().host.launchOptions.replaceRestrictedSession(e);
}
function gKn() {
  return t().host.launchOptions.workspaceRestrictionState()?.restriction ?? null;
}
function AM() {
  return gKn() !== null;
}
function Mt(e) {
  for (let [n, o] of t().host.launchOptions.restrictedWorkspaceRoots()) if (e === n || e.startsWith(n.endsWith(ot) ? n : n + ot)) return o;
  return null;
}
function MGs(e) {
  return Mt(e) !== null;
}
function DGs(e) {
  if (gKn()?.gateKeys.includes(e)) return !0;
  for (let n of t().host.launchOptions.restrictedWorkspaceRoots().values()) if (n.gateKeys.includes(e)) return !0;
  return !1;
}
function LGs() {
  return t().sessionFlags.accountMemoryLaunchMode();
}
function S0() {
  return t().sessionFlags.memoryToggledOff();
}
function Rme(e) {
  let n = t();
  if (n.sessionFlags.memoryToggledOff() === e) return;
  n.sessionFlags.replaceMemoryToggledOff(e), pt.of(n).emit(e);
}
var pt = new Je(() => De());
function yKn(e, n = t()) {
  return pt.of(n).subscribe(e);
}
function $xe() {
  return t().sessionFlags.autoMemoryOffThisSession();
}
function Fwt(e) {
  let n = t();
  if (n.sessionFlags.autoMemoryOffThisSession() === e) return;
  if (n.sessionFlags.replaceAutoMemoryOffThisSession(e), n.sessionFlags.accountMemorySessionMode() !== "off") n.sessionFlags.replaceMemoryPausedByCommand(!1);
  ht.of(n).emit(e);
}
var ht = new Je(() => De());
function _Kn(e, n = t()) {
  return ht.of(n).subscribe(e);
}
function $Oo() {
  return t().sessionFlags.restoredMemoryPause();
}
function Lcn(e) {
  t().sessionFlags.replaceRestoredMemoryPause(e);
}
function NGs() {
  return t().sessionFlags.restoredAutoMemoryOff();
}
function Hwt(e) {
  t().sessionFlags.replaceRestoredAutoMemoryOff(e);
}
function FGs(e) {
  if (e === !1) throw Error("setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production");
  t().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}
function HGs() {
  return t().host.launchOptions.wizardOperatorToolsEnabled();
}
function Lva(e) {
  if (e === !1) throw Error("setRunnerDeclaredNestedRepositoryDiff(false) is test-only: the runner's declaration is one-way in production");
  t().host.launchOptions.replaceRunnerDeclaredNestedRepositoryDiff(e);
}
function $Gs() {
  return t().host.launchOptions.runnerDeclaredNestedRepositoryDiff();
}
function Nva(e) {
  if (e === !1) throw Error("setRunnerDeclaredNoRepositoryCheckedOut(false) is test-only: the runner's declaration is one-way in production");
  t().host.launchOptions.replaceRunnerDeclaredNoRepositoryCheckedOut(e);
}
function UGs() {
  return t().host.launchOptions.runnerDeclaredNoRepositoryCheckedOut();
}
function Fva(e) {
  if (e === !1) throw Error("setRunnerDeclaredFreshMachinePerSession(false) is test-only: the runner's declaration is one-way in production");
  t().host.launchOptions.replaceRunnerDeclaredFreshMachinePerSession(e);
}
function nWt() {
  return t().host.launchOptions.pollEventIngress();
}
function BGs() {
  return nWt() !== "none";
}
function Tt(e) {
  t().host.launchOptions.markPollEventIngress(e);
}
function UOo() {
  return t().host.launchOptions.ownEventDeliveryRequested();
}
function At() {
  t().host.launchOptions.markOwnEventDeliveryRequested();
}
function BOo(e) {
  t().host.launchOptions.replaceOwnEventDeliveryHeld(e);
}
function bKn(e) {
  let n = Pt(e);
  if (n !== "none" && !(n === "host" && nWt() === "evals")) Tt(n);
  if (e.ownEventsRequested) At();
}
function bY() {
  return t().host.launchOptions.userMsgOptIn();
}
function m4e(e) {
  t().host.launchOptions.replaceUserMsgOptIn(e);
}
function jGs() {
  return t().host.launchOptions.searchToolsOptIn();
}
function WGs(e) {
  t().host.launchOptions.replaceSearchToolsOptIn(e);
}
function zGs() {
  return t().host.launchOptions.todoToolsOptIn();
}
function GGs(e) {
  t().host.launchOptions.replaceTodoToolsOptIn(e);
}
function VGs() {
  return t().host.launchOptions.toolsOmittedByLaunchList();
}
function KGs(e) {
  t().host.launchOptions.replaceToolsOmittedByLaunchList(new Set(e));
}
function qGs() {
  return t().host.launchOptions.sessionStartType();
}
function SKn(e) {
  t().host.launchOptions.replaceSessionStartType(e);
}
function jOo() {
  return t().host.launchOptions.questionPreviewFormat();
}
function WOo(e) {
  t().host.launchOptions.replaceQuestionPreviewFormat(e);
}
function _$e() {
  return t().host.launchOptions.extendedQuestionsEnabled();
}
function YGs(e) {
  t().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}
function XGs() {
  return t().host.launchOptions.questionOptionDescriptionsOptional();
}
function JGs(e) {
  t().host.launchOptions.replaceQuestionOptionDescriptionsOptional(e);
}
function zOo() {
  return t().sessionScratch.agentColorMap();
}
function FH() {
  return t().host.settingsSource.flagSettingsPath();
}
function QGs(e) {
  t().host.settingsSource.replaceFlagSettingsPath(e);
}
function Uxe() {
  return t().host.settingsSource.flagAgentsFilePaths();
}
function ZGs(e) {
  t().host.settingsSource.replaceFlagAgentsFilePaths(e);
}
function Bxe() {
  return t().host.settingsSource.flagMcpConfigFilePaths();
}
function e2s(e) {
  t().host.settingsSource.replaceFlagMcpConfigFilePaths(e);
}
function lv() {
  return t().host.settingsSource.flagSettingsExpectedContent();
}
function t2s(e) {
  t().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}
function SY() {
  return t().host.settingsSource.flagSettingsFilePinnedContent();
}
function n2s(e) {
  t().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}
function Pc() {
  return t().host.settingsSource.flagSettingsInline();
}
function DC(e) {
  t().host.settingsSource.replaceFlagSettingsInline(e);
}
function rWt() {
  return t().host.settingsSource.parentManagedSettings();
}
function r2s(e, n = null) {
  t().host.settingsSource.replaceParentManagedSettings(e, n);
}
function w7() {
  return t().host.settingsSource.parentManagedSettingsInvalid();
}
function GOo(e) {
  t().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}
function o2s() {
  return t().host.settingsSource.parentOrganizationSettings();
}
function Jnt() {
  let e = b();
  return e ? e.secrets.sessionIngressToken : t().host.credentialSlots.sessionIngressToken();
}
function jxe(e) {
  let n = b();
  if (n) n.secrets.sessionIngressToken = e;else t().host.credentialSlots.replaceSessionIngressToken(e);
}
function j5() {
  return t().host.credentialSlots.oauthTokenFromFd();
}
function DN(e) {
  t().host.credentialSlots.replaceOauthTokenFromFd(e);
}
function JA() {
  return t().host.credentialSlots.oauthTokenFromBgSnapshot();
}
function Ncn(e) {
  t().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}
function s2s() {
  return t().host.credentialSlots.loginStashedInTokenSlot();
}
function wKn(e) {
  t().host.credentialSlots.replaceLoginStashedInTokenSlot(e);
}
function i2s() {
  return t().host.credentialSlots.oauthOrgFromBgSnapshot();
}
function VOo(e) {
  t().host.credentialSlots.replaceOauthOrgFromBgSnapshot(e);
}
function a2s() {
  return t().host.credentialSlots.oauthScopesFromFd();
}
function Fcn(e) {
  t().host.credentialSlots.replaceOauthScopesFromFd(e);
}
function y$r() {
  return t().host.credentialSlots.apiKeyFromFd();
}
function KOo(e) {
  t().host.credentialSlots.replaceApiKeyFromFd(e);
}
function kKn(e) {
  return t().host.credentialSlots.descriptorAnnouncementConsumed(e);
}
function Wxe(e) {
  t().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}
function Hcn(e) {
  return t().host.credentialSlots.credentialRoad(e);
}
function zxe(e, n, o) {
  t().host.credentialSlots.noteCredentialRoad(e, n, o);
}
function qOo() {
  return t().host.credentialSlots.gatewayTokenFromDescriptor();
}
function _$r(e) {
  t().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}
function l2s() {
  t().host.credentialSlots.resetFdCredentialState();
}
function Xr() {
  return t().host.credentialSlots.gatewayAuth();
}
function $wt() {
  let e = t().host.credentialSlots.gatewayAuth();
  return !!e && e.expiresAt <= Date.now();
}
function w0(e) {
  return !!e && !e.unpinned;
}
function b$r(e) {
  let n = e?.hostVerdict;
  return n !== void 0 && "verified" in n && n.verified;
}
function vKn(e) {
  return w0(e) || b$r(e);
}
function d2s(e) {
  t().host.credentialSlots.replaceGatewayServerProcess(e);
}
function Uwt() {
  return t().host.credentialSlots.gatewayServerProcess();
}
function Bwt(e) {
  t().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}
function b$e() {
  return t().host.credentialSlots.gatewayRequiredByHostPolicy();
}
function Fae(e) {
  t().host.credentialSlots.replaceGatewayAuth(e);
}
function c2s(e) {
  return t().host.credentialSlots.isGatewayHostHeldStrict(e);
}
function $cn(e) {
  t().host.credentialSlots.holdGatewayHostStrict(e.replace(/\.$/, ""));
}
function u2s(e) {
  t().host.credentialSlots.releaseGatewayHost(e.replace(/\.$/, ""));
}
function EKn() {
  return t().host.credentialSlots.authenticatedAccount();
}
function Qnt(e) {
  t().host.credentialSlots.stampAuthenticatedAccount(e);
}
function TKn(e) {
  t().host.credentialSlots.dropAuthenticatedAccountForNewToken(e);
}
function f2s() {
  return t().host.credentialSlots.programUseCaseOwner();
}
function p2s() {
  return t().host.credentialSlots.tokenAdoptedSinceStamp();
}
function Ucn() {
  return t().host.credentialSlots.programUseCaseAwaitsAccount();
}
function Gxe() {
  return t().host.credentialSlots.authenticatedAccountEpoch();
}
function YOo() {
  return t().host.credentialSlots.bearerPlan();
}
function m2s(e) {
  t().host.credentialSlots.replaceBearerPlan(e);
}
function S$e() {
  return t().host.credentialSlots.programUseCaseId();
}
function Znt(e) {
  t().host.credentialSlots.replaceProgramUseCaseId(e);
}
function rK() {
  return t().host.credentialSlots.programUseCaseChoices();
}
function h2s(e) {
  t().host.credentialSlots.replaceProgramUseCaseChoices(e);
}
function jwt() {
  return t().host.credentialSlots.programUseCaseChoiceMode();
}
function g2s(e) {
  t().host.credentialSlots.replaceProgramUseCaseChoiceMode(e);
}
function oWt() {
  return t().host.credentialSlots.programUseCaseRefusal();
}
function Bcn(e) {
  t().host.credentialSlots.replaceProgramUseCaseRefusal(e);
}
function y2s() {
  return t().host.credentialSlots.startupPolicySnapshot();
}
function _2s(e) {
  t().host.credentialSlots.replaceStartupPolicySnapshot(e);
}
function h4e() {
  return t().host.credentialSlots.gatewayRefreshInFlight();
}
function XOo(e) {
  t().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}
function b2s(e) {
  t().requestJournal.replaceLastAPIRequest(e);
}
function CKn() {
  return t().requestJournal.lastAPIRequest();
}
function S$r(e) {
  t().requestJournal.replaceLastCancelledAPIMessageId(e);
}
function g4e() {
  return t().requestJournal.lastCancelledAPIMessageId();
}
function S2s(e) {
  t().requestJournal.replaceLastAPIRequestMessages(e);
}
function w$r(e) {
  t().requestJournal.replaceLastClassifierRequests(e);
}
function JOo() {
  return t().requestJournal.lastClassifierRequests();
}
function RKn(e) {
  let n = c();
  if (n) n.cachedClaudeMdContent = e;else t().sessionFlags.replaceCachedClaudeMdContent(e);
}
function w2s() {
  let e = c();
  return e ? e.cachedClaudeMdContent : t().sessionFlags.cachedClaudeMdContent();
}
function ert() {
  let {
    settingsSource: settingsSource,
    launchOptions: launchOptions_3
  } = t().host;
  return launchOptions_3.workspaceRestrictionState()?.restriction ? settingsSource.allowedSettingSourcesWithoutRepoDirSources() : settingsSource.allowedSettingSources();
}
function Vxe() {
  return t().host.settingsSource.allowedSettingSources();
}
function QOo(e) {
  t().host.settingsSource.replaceAllowedSettingSources(e);
}
function AKn() {
  return ye() && t().host.launchOptions.clientType() !== "claude-vscode";
}
function EG(e) {
  t().host.extensionsConfig.replaceInlinePlugins(e);
}
function Rk() {
  return t().host.extensionsConfig.inlinePlugins();
}
function Kxe(e) {
  t().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}
function qR() {
  return t().host.extensionsConfig.inlinePluginsNoMcp();
}
function k2s(e) {
  t().host.extensionsConfig.replaceInlinePluginUrls(e);
}
function qxe() {
  return t().host.extensionsConfig.inlinePluginUrls();
}
function sWt(e, n, o) {
  t().host.extensionsConfig.replaceSyncedPluginDirs(e, n, o);
}
function v2s(e) {
  return t().host.extensionsConfig.syncedPluginRowId(e);
}
function xKn(e) {
  return t().host.extensionsConfig.syncedPluginAttestation(e);
}
function E2s(e) {
  t().host.extensionsConfig.replaceAttestedOfficialPluginIds(e);
}
function T2s(e) {
  return t().host.extensionsConfig.attestedOfficialPluginMarketplace(e);
}
function iWt() {
  return t().host.extensionsConfig.syncedPluginDirsRegistered();
}
function trt() {
  return t().pluginsSync.syncedLaneOpened;
}
function C2s() {
  t().pluginsSync.syncedLaneOpened = !0;
}
function ZOo(e) {
  for (let n of e) t().pluginsSync.syncedDirsLoadedHere.add(M(n));
}
function R2s(e) {
  return t().pluginsSync.syncedDirsLoadedHere.has(M(e));
}
function A2s(e) {
  t().pluginsSync.dirsNewHere.add(M(e));
}
function k$r(e) {
  t().pluginsSync.awaitsFirstRun = e;
}
function x2s(e) {
  let {
    awaitsFirstRun: awaitsFirstRun,
    dirsNewHere: dirsNewHere
  } = t().pluginsSync;
  return awaitsFirstRun && dirsNewHere.has(M(e));
}
function HH() {
  return t().pluginsSync;
}
function PKn() {
  return t().pluginsSync.lastCompleteList;
}
function Wwt() {
  return t().pluginsSync.lastSyncedLaneLoad;
}
function P2s(e) {
  t().pluginsSync.lastSyncedLaneLoad = e;
}
function O2s() {
  t().host.extensionsConfig.clearSyncedPluginDirs(), t().pluginsSync.syncedLaneOpened = !1, t().pluginsSync.syncedDirsLoadedHere.clear(), t().pluginsSync.dirsNewHere.clear(), t().pluginsSync.removalsDeferredHere.clear(), t().pluginsSync.lastSyncedLaneLoad = null;
}
function W5() {
  return t().host.extensionsConfig.syncedPluginDirs();
}
function OKn(e) {
  t().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}
function IKn() {
  return t().sessionFlags.accountSkillsSyncEnabled();
}
function MKn(e) {
  t().sessionFlags.replaceSkillsSyncVetoed(e);
}
function QA() {
  return t().sessionFlags.skillsSyncVetoed();
}
function I2s(e) {
  t().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}
function y4e() {
  return t().sessionFlags.accountPluginsSyncEnabled();
}
function M2s(e) {
  t().sessionFlags.replacePluginsSyncVetoed(e);
}
function oK() {
  return t().sessionFlags.pluginsSyncVetoed();
}
function D2s(e) {
  t().host.extensionsConfig.replaceChromeFlagOverride(e);
}
function $we() {
  return t().host.extensionsConfig.chromeFlagOverride();
}
function L2s(e) {
  t().host.extensionsConfig.replaceTeammateAgentId(e);
}
function Sh() {
  return t().host.extensionsConfig.teammateAgentId();
}
function N2s(e) {
  t().sessionFlags.replaceOnboardingShownThisSession(e);
}
function F2s() {
  return t().sessionFlags.onboardingShownThisSession();
}
function z5(e) {
  let n = t();
  n.host.settingsSource.replaceUseCoworkPlugins(e), QHr.of(n.host).invalidateAll();
}
function DKn() {
  return t().host.settingsSource.useCoworkPlugins();
}
function H2s(e) {
  t().host.launchOptions.replaceDisableSlashCommands(e);
}
function tw() {
  return t().host.launchOptions.disableSlashCommands();
}
function LKn() {
  return t().host.launchOptions.disableFileMentions();
}
function LN() {
  return t().host.launchOptions.sessionUploadsDir();
}
function $2s(e) {
  t().host.launchOptions.replaceLocalUploadsRoot(e);
}
function Hae() {
  return t().host.launchOptions.localUploadsRoot();
}
function NKn(e) {
  t().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}
function $ae() {
  return t().host.launchOptions.sessionBypassPermissionsMode();
}
function k7(e) {
  t().host.launchOptions.replaceScheduledTasksEnabled(e);
}
function v$r() {
  return t().host.launchOptions.scheduledTasksEnabled();
}
function U2s(e) {
  return t().host.launchOptions.onScheduledTasksEnabled(e);
}
function Jp() {
  return c()?.sessionCronTasks ?? t().sessionCron.tasks();
}
function w$e(e) {
  let n = c();
  if (n) n.sessionCronTasks.push(e);else t().sessionCron.schedule(e);
  t().sessionCron.changed.emit();
}
function B2s(e) {
  return t().sessionCron.chainStartedAt(e);
}
function eIo(e, n) {
  t().sessionCron.recordChainStart(e, n);
}
function FKn(e) {
  t().sessionCron.forgetChainStart(e);
}
function Yxe() {
  return t().sessionCron.tickInFlightPrompt();
}
function j2s() {
  return t().sessionCron.tickInFlightPlugin();
}
function aWt(e, n) {
  t().sessionCron.replaceTickInFlightPrompt(e, n);
}
function tIo() {
  return t().sessionCron.consecutiveKeepalives();
}
function HKn(e) {
  t().sessionCron.replaceConsecutiveKeepalives(e);
}
function zwt() {
  return t().sessionCron.ended();
}
function jcn() {
  return t().sessionCron.wakeFires();
}
function $Kn() {
  t().sessionCron.recordWakeFire();
}
function Wcn() {
  t().sessionCron.resetWakeFires();
}
function E$r(e) {
  if (t().sessionCron.replaceEnded(e), e) t().sessionCron.changed.emit();
}
function cne(e, {
  handOff = !1
} = {}) {
  if (e.length === 0) return 0;
  let o = new Set(e),
    r = c(),
    s = r ? r.sessionCronTasks : t().sessionCron.tasks(),
    i = s.filter(item => !o.has(item.id)),
    a = s.length - i.length;
  if (a === 0) return 0;
  let l = !handOff && s.some(item => item.kind === "loop" && o.has(item.id));
  if (r) r.sessionCronTasks.length = 0, r.sessionCronTasks.push(...i);else t().sessionCron.replaceTasks(i);
  if (l) t().sessionCron.pendingLoopWakeup.emit(void 0);
  return t().sessionCron.changed.emit(), a;
}
function UKn(e) {
  return t().sessionCron.changed.subscribe(e);
}
function W2s(e) {
  return t().sessionCron.pendingLoopWakeup.subscribe(e);
}
function zcn(e) {
  t().sessionCron.pendingLoopWakeup.emit(e);
}
function NN(e) {
  t().sessionFlags.replaceSessionTrustAccepted(e);
}
function k$e() {
  return t().sessionFlags.sessionTrustAccepted();
}
function nrt(e) {
  t().sessionFlags.replaceHomeTrustDialogAccepted(e);
}
function v$e() {
  return t().sessionFlags.homeTrustDialogAccepted();
}
function BKn(e) {
  t().host.launchOptions.replaceSessionPersistenceDisabled(e);
}
function k0() {
  return t().host.launchOptions.sessionPersistenceDisabled();
}
function q() {
  return er();
}
function er() {
  return t().host.launchOptions.diskless();
}
function Qp() {
  return y.host.launchOptions.diskless();
}
function jKn() {
  return t().host.launchOptions.ccrSessionUrl();
}
function v7() {
  return t().host.launchOptions.ccrDerivedSurface();
}
function z2s(e) {
  t().host.launchOptions.replaceWrapUpOffered(e);
}
function G2s() {
  return t().host.launchOptions.wrapUpOffered();
}
function WKn(e) {
  t().host.launchOptions.replaceEntrypointOnRequests(e);
}
function une() {
  return t().host.launchOptions.entrypointOnRequests();
}
function V2s() {
  return t().host.launchOptions.autoCompactWindowSurface();
}
function K2s() {
  return t().host.launchOptions.coworkEnrollment();
}
function zKn() {
  return t().host.launchOptions.ccrSessionLimited();
}
function v0() {
  return t().host.launchOptions.toolsMachine();
}
function nIo() {
  let e = v0();
  return e ? e.directory?.path ?? null : mo() ?? Uc();
}
function GKn() {
  return t().sessionFlags.hasExitedPlanMode();
}
function TG(e) {
  t().sessionFlags.replaceHasExitedPlanMode(e);
}
function rIo() {
  return t().host.proactivity.selectorGate();
}
function q2s() {
  return t().host.proactivity.selectorGateEverOn();
}
function Y2s() {
  t().host.proactivity.inheritSelectorGateEverOn();
}
function oIo(e) {
  t().host.proactivity.replaceSelectorGate(e);
}
function X2s(e) {
  t().host.proactivity.resampleSelectorGate(e);
}
function Gcn(e) {
  return t().host.proactivity.subscribeSelectorGateChanged(e);
}
function J2s(e) {
  t().host.proactivity.replaceHostGateSubscription(e);
}
function Q2s() {
  return t().sessionFlags.needsPlanModeExitAttachment();
}
function E7(e) {
  t().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}
function Xxe(e, n) {
  if (n === "plan" && e !== "plan") t().sessionFlags.replaceNeedsPlanModeExitAttachment(!1);
  if (e === "plan" && n !== "plan") t().sessionFlags.replaceNeedsPlanModeExitAttachment(!0);
}
function Z2s() {
  return t().sessionFlags.needsAutoModeExitAttachment();
}
function xj(e) {
  t().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}
function eVs(e, n) {
  if (e === "auto" && n === "plan" || e === "plan" && n === "auto") return;
  let o = e === "auto",
    r = n === "auto";
  if (r && !o) t().sessionFlags.replaceNeedsAutoModeExitAttachment(!1);
  if (o && !r) t().sessionFlags.replaceNeedsAutoModeExitAttachment(!0);
}
function sIo() {
  return t().sessionFlags.lspRecommendationShownThisSession();
}
function iIo(e) {
  t().sessionFlags.replaceLspRecommendationShownThisSession(e);
}
function tVs(e) {
  t().host.launchOptions.replaceInitJsonSchema(e);
}
function aIo() {
  return t().host.launchOptions.initJsonSchema();
}
function nVs(e) {
  t().mcpSessionWiring.registerClientsAccessor(e);
}
function lIo(e) {
  return t().mcpSessionWiring.acquireClientsAccessor(e);
}
function e_() {
  return t().mcpSessionWiring.clientsFromAccessor();
}
function E$e() {
  return t().mcpSessionWiring.clientsFromAccessorOrTenant();
}
function VKn(e) {
  t().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}
function fne() {
  return t().host.mcpProcessWiring.ensureConnectedClient();
}
function lWt(e) {
  t().mcpSessionWiring.registerConnectedClientWiring(e);
}
function KKn() {
  return t().mcpSessionWiring.connectedClientWiring();
}
function rVs(e) {
  t().mcpSessionWiring.registerToolsSwapper(e);
}
function dIo(e) {
  return t().mcpSessionWiring.acquireToolsSwapper(e);
}
function qKn(e, n, o) {
  return t().mcpSessionWiring.swapServerTools(e, n, o);
}
function v() {
  return c() ?? t().hookRegistry.holder();
}
function Pj(e) {
  let n = v();
  if (!n.registeredHooks) n.registeredHooks = {};
  for (let [o, r] of Object.entries(e)) {
    let s = o;
    if (!n.registeredHooks[s]) n.registeredHooks[s] = [];
    n.registeredHooks[s].push(...r);
  }
  Uae();
}
function LC() {
  return v().registeredHooks;
}
function oVs() {
  return y.hookRegistry.holder().registeredHooks;
}
function YKn() {
  let e = v();
  e.registeredHooks = null, e.sdkHostOutOfReachNoted = void 0, Uae();
}
function sVs() {
  let e = v();
  if (e.sdkHostOutOfReachNoted) return !1;
  return e.sdkHostOutOfReachNoted = !0, !0;
}
function cIo() {
  v().sdkHostOutOfReachNoted = void 0;
}
function Ig() {
  return v().pluginHookRunner;
}
function iVs(e, n) {
  let o = v();
  o.replyGatePolicy = e, o.launchReplyGatePolicyOutcome = n && "accepted";
}
function aVs() {
  return v().replyGatePolicy;
}
function lVs() {
  v().launchReplyGatePolicyOutcome = "refused";
}
function XKn() {
  return v().launchReplyGatePolicyOutcome;
}
function T$r(e) {
  let n = Ig();
  Lt();
  let o = {};
  for (let [r, s] of Object.entries(e)) o[r] = s.filter(item => !("pluginRoot" in item) || n?.holds(item.pluginId) !== !0);
  Pj(o);
}
function Lt() {
  let e = v();
  if (!e.registeredHooks) return;
  let pluginHookRunner = e.pluginHookRunner,
    o = {};
  for (let [r, s] of Object.entries(e.registeredHooks)) {
    let i = s.filter(item => !("pluginRoot" in item) || pluginHookRunner?.holds(item.pluginId) === !0);
    if (i.length > 0) o[r] = i;
  }
  e.registeredHooks = Object.keys(o).length > 0 ? o : null, Uae();
}
var gt = new W(() => De());
function Uae() {
  Po(gt).emit();
}
function dVs(e) {
  return Po(gt).subscribe(e);
}
function T$e() {
  return t().sessionScratch.planSlugCache();
}
function Vcn() {
  return c()?.sessionCreatedTeams ?? t().sessionScratch.sessionCreatedTeams();
}
function uIo() {
  return c()?.sessionSpawnedTeammatePanes ?? t().sessionScratch.sessionSpawnedTeammatePanes();
}
function C$r() {
  return c()?.surfacedHookSpawnFailures ?? t().sessionScratch.surfacedHookSpawnFailures();
}
function fIo() {
  return b()?.pendingConversationEditKinds ?? y.sessionScratch.pendingConversationEditKinds();
}
function R$r() {
  return b()?.clientTruncatedAssistantIds ?? y.sessionScratch.clientTruncatedAssistantIds();
}
function A$r() {
  return b()?.heldStatelessReplyIds ?? y.sessionScratch.heldStatelessReplyIds();
}
function pIo() {
  return b()?.unsupportedThreadKeys ?? y.sessionScratch.unsupportedThreadKeys();
}
function cVs() {
  return c()?.bareMcpServerMatchersWarned ?? t().sessionScratch.bareMcpServerMatchersWarned();
}
function x$r() {
  return c()?.pendingBranchLinks ?? t().sessionScratch.pendingBranchLinks();
}
function mIo() {
  return t().sessionScratch.pendingPrLinks();
}
function uVs() {
  return t().sessionScratch.policyPredicateTelemetryEmitted();
}
function dWt() {
  return c()?.chromeAvailabilityStagesLogged ?? t().sessionScratch.chromeAvailabilityStagesLogged();
}
function fVs() {
  return t().sessionScratch.chromeAvailabilityAnchorMs();
}
function pVs() {
  return t().sessionFlags.proposeGoalAvailabilityLogged();
}
function mVs() {
  t().sessionFlags.markProposeGoalAvailabilityLogged();
}
function P$r() {
  return t().sessionFlags.inheritedTeamName();
}
function hIo(e) {
  t().sessionFlags.replaceInheritedTeamName(e);
}
function Kcn(e) {
  t().sessionFlags.replaceTeleportedSessionInfo({
    isTeleported: !0,
    hasLoggedFirstMessage: !1,
    sessionId: e.sessionId
  });
}
function rrt() {
  return t().sessionFlags.teleportedSessionInfo();
}
function gIo() {
  t().sessionFlags.markFirstTeleportMessageLogged();
}
function Ame(skillName, skillPath, content, agentId_2 = null, servedByMcp = !1, invokedAt = Date.now()) {
  let a = `${agentId_2 ?? ""}:${skillName}`;
  t().invokedSkills.record(a, {
    skillName: skillName,
    skillPath: skillPath,
    content: content,
    invokedAt: invokedAt,
    agentId: agentId_2,
    ...(servedByMcp && {
      servedByMcp: servedByMcp
    })
  });
}
function Bae() {
  return t().invokedSkills.skills();
}
function yIo(e, content_2) {
  let o = t(),
    r = o.invokedSkills.lookup(e);
  if (r) o.invokedSkills.record(e, {
    ...r,
    content: content_2
  });
}
function JKn(e) {
  let n = e ?? null,
    o = new Map();
  for (let [r, s] of t().invokedSkills.skills()) if (s.agentId === n) o.set(r, s);
  return o;
}
function hVs(e) {
  let n = t();
  if (!e || e.size === 0) {
    n.invokedSkills.forgetAll();
    return;
  }
  for (let [o, r] of n.invokedSkills.skills()) if (r.agentId === null || !e.has(r.agentId)) n.invokedSkills.forget(o);
}
function Gwt(e) {
  let n = t();
  for (let [o, r] of n.invokedSkills.skills()) if (r.agentId === e) n.invokedSkills.forget(o);
}
function Hva(e, n) {
  t().host.diagnostics.recordSlowOperation(e, n);
}
function $va() {
  return t().host.diagnostics.slowOperations();
}
function Uva() {
  return t().host.diagnostics.devBarAlert();
}
function gS() {
  let e = c();
  return e ? e.mainThreadAgentType : t().hookRegistry.mainThreadAgentType();
}
function Uwe(e) {
  let n = c();
  if (n) n.mainThreadAgentType = e;else t().hookRegistry.replaceMainThreadAgentType(e);
}
function wY() {
  let e = c();
  return e ? e.mainThreadAgentHooks : t().hookRegistry.mainThreadAgentHooks();
}
function gVs() {
  return y.hookRegistry.mainThreadAgentHooks();
}
function O$r(e) {
  let n = c();
  if (n) n.mainThreadAgentHooks = e;else t().hookRegistry.replaceMainThreadAgentHooks(e);
  Uae();
}
function G5() {
  return t().host.extensionsConfig.sessionSkillAllowlist();
}
function yVs(e) {
  t().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}
function FN() {
  return t().surfaceCapabilities.caps();
}
function QKn(e) {
  t().surfaceCapabilities.replaceCaps(e);
}
function xn() {
  return t().surfaceCapabilities.caps().workspace === "remote";
}
function jae(e) {
  t().surfaceCapabilities.markRemote(e);
}
function ZKn() {
  let e = t();
  return e.surfaceCapabilities.cloudCwdOfSession(e.id);
}
function _Vs(e) {
  t().surfaceCapabilities.replaceCloudCwd({
    sessionId: e.sessionId,
    cwd: GIo(e.cwd)
  });
}
function bVs(e) {
  return t().surfaceCapabilities.cloudCwdChanged.subscribe(e);
}
function ort() {
  return t().promptAssembly.sections();
}
function SVs(e, n) {
  t().promptAssembly.recordSection(e, n);
}
function C$e(e) {
  t().promptAssembly.forgetAllSections(), HN(e);
}
function HN(e) {
  t().promptAssembly.noteInvalidation(e);
}
function T7() {
  return t().promptAssembly.epoch();
}
function Bva() {
  return t().promptAssembly.lastInvalidationReason();
}
function wVs() {
  return t().sessionScratch.vimSharedState();
}
function kVs(e) {
  t().sessionScratch.replaceVimSharedState(e);
}
function Gl() {
  return q() ? [] : t().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}
function cB(e) {
  t().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}
function vVs() {
  return t().host.extensionsConfig.claudeMdAdditionalDirectoriesAsked();
}
function _Io(e) {
  t().host.extensionsConfig.askClaudeMdAdditionalDirectories(e);
}
function dv() {
  return t().host.extensionsConfig.allowedChannels();
}
function srt(e) {
  t().host.extensionsConfig.replaceAllowedChannels(e);
}
function eqn() {
  return t().host.extensionsConfig.hasDevChannels();
}
function EVs(e) {
  t().host.extensionsConfig.replaceHasDevChannels(e);
}
function TVs() {
  return t().host.requestLatches.promptCache1hAllowlist();
}
function CVs(e) {
  t().host.requestLatches.replacePromptCache1hAllowlist(e);
}
function irt(e) {
  return t().host.requestLatches.thinkingTypeOverrides().get(e);
}
function RVs(e, n) {
  t().host.requestLatches.recordThinkingTypeOverride(e, n);
}
function tqn(e) {
  return t().host.requestLatches.servedModelsByRequestedModel().get(e);
}
function bIo(e, n) {
  if (e === n) return;
  let requestLatches = t().host.requestLatches,
    r = requestLatches.servedModelsByRequestedModel().get(e);
  if (r) r.add(n);else requestLatches.recordServedModels(e, new Set([n]));
}
function I$r(e) {
  return t().host.requestLatches.effortUnsupportedModels().has(e);
}
function nqn(e) {
  t().host.requestLatches.markEffortUnsupported(e);
}
function AVs(e) {
  return t().host.requestLatches.structuredOutputsUnsupportedModels().has(e);
}
function xVs(e) {
  t().host.requestLatches.markStructuredOutputsUnsupported(e);
}
function PVs() {
  t().host.requestLatches.clearStructuredOutputsUnsupported();
}
function OVs(e) {
  return t().host.requestLatches.context1mRefusedModels().has(e);
}
function IVs(e) {
  t().host.requestLatches.markContext1mRefused(e);
}
function SIo() {
  t().host.requestLatches.clearContext1mRefused();
}
function qcn(e) {
  return t().host.requestLatches.refusedBetas(e);
}
function MVs(e, n) {
  t().host.requestLatches.markBetaRefused(e, n);
}
function R$e() {
  return t().host.requestLatches.learnedEffortCaps();
}
function DVs() {
  return t().host.requestLatches.midConvCachePromotionRejected();
}
function LVs() {
  t().host.requestLatches.markMidConvCachePromotionRejected();
}
function NVs() {
  return t().host.requestLatches.toolProvenanceServerUrlRefused();
}
function FVs() {
  t().host.requestLatches.markToolProvenanceServerUrlRefused();
}
function sK() {
  return t().host.requestLatches.thirdPartyServerClassifierRefused();
}
function cWt() {
  t().host.requestLatches.markThirdPartyServerClassifierRefused();
}
function M$r() {
  return t().host.requestLatches.serverCheckEntryAnswered();
}
function HVs() {
  t().host.requestLatches.markServerCheckEntryAnswered();
}
function $Vs() {
  return t().host.requestLatches.serverCheckRefusalSuspected();
}
function UVs() {
  t().host.requestLatches.markServerCheckRefusalSuspected();
}
function BVs() {
  t().host.requestLatches.releaseThirdPartyServerClassifierRefusal();
}
function rqn() {
  return t().host.requestLatches.threadsHeldForServerClassifier();
}
function jVs() {
  t().host.requestLatches.markThreadsHeldForServerClassifier();
}
function WVs(e) {
  return t().host.requestLatches.autoModeUnavailableResponse(e);
}
function uWt(e, n) {
  return t().host.requestLatches.autoModeUnavailableResponsesInARow(e, n);
}
function zVs(e, n) {
  t().host.requestLatches.dropAutoModeUnavailableResponsesOfOtherTurns(e, n);
}
function wIo(e, n) {
  t().host.requestLatches.noteAutoModeUnavailableResponse(e, n);
}
function kIo(e) {
  t().host.requestLatches.clearAutoModeUnavailableResponses(e);
}
function Ycn(e) {
  t().host.requestLatches.setAutoModeUnavailableStopNotice(e);
}
function Xcn() {
  return t().host.requestLatches.autoModeUnavailableStopNotice();
}
function GVs(e) {
  t().host.requestLatches.setLocalCommandExitCode(e);
}
function vIo() {
  return t().host.requestLatches.localCommandExitCode();
}
function VVs() {
  return t().host.requestLatches.observedGateway();
}
function KVs(e) {
  t().host.requestLatches.noteObservedGateway(e);
}
function fWt() {
  return t().host.requestLatches.serverClassifierFallbackChoice();
}
function qVs(e) {
  t().host.requestLatches.setServerClassifierFallbackChoice(e);
}
function YVs() {
  return t().host.requestLatches.keepsLocalClassifierFallback();
}
function EIo() {
  t().host.requestLatches.clearServerClassifierFallbackChoice();
}
function XVs() {
  return t().host.requestLatches.openAutoModeEndOffer();
}
function TIo(e) {
  t().host.requestLatches.setOpenAutoModeEndOffer(e);
}
function JVs() {
  return t().host.requestLatches.takeServerClassifierFallbackAnnouncement();
}
function QVs() {
  return t().host.requestLatches.takeFallbackUnacknowledgedAnnouncement();
}
function CIo(e) {
  return t().host.requestLatches.noteNoServerCheck(e);
}
function ZVs() {
  t().host.requestLatches.noteNoServerCheckStoppedTurn();
}
function eKs() {
  return t().host.requestLatches.takeNoServerCheckStoppedTurn();
}
function tKs() {
  return t().host.requestLatches.serverCheckDeclined();
}
function RIo(e) {
  t().host.requestLatches.setServerCheckDeclined(e);
}
function nKs() {
  t().host.requestLatches.noteRefusedStreakStoppedTurn();
}
function rKs() {
  return t().host.requestLatches.takeRefusedStreakStoppedTurn();
}
function oKs() {
  return t().host.requestLatches.takeNoServerCheckAnnouncement();
}
function sKs() {
  return t().host.requestLatches.perTurnEffortOkEmitted();
}
function iKs() {
  t().host.requestLatches.markPerTurnEffortOkEmitted();
}
function aKs() {
  return t().host.requestLatches.lateToolAdditionsOkEmitted();
}
function lKs() {
  t().host.requestLatches.markLateToolAdditionsOkEmitted();
}
function dKs() {
  return t().host.requestLatches.toolChangeHeaderRefused();
}
function cKs() {
  t().host.requestLatches.markToolChangeHeaderRefused();
}
function uKs() {
  return t().host.requestLatches.promptEndMarkRefused();
}
function fKs() {
  t().host.requestLatches.markPromptEndMarkRefused();
}
function D$r() {
  return t().host.requestLatches.inlineToolsRefused();
}
function AIo() {
  t().host.requestLatches.markInlineToolsRefused();
}
function pKs() {
  return t().host.requestLatches.inlineToolsOkEmitted();
}
function mKs() {
  t().host.requestLatches.markInlineToolsOkEmitted();
}
function xIo() {
  return t().host.requestLatches.thinkingResumptionRefused();
}
function hKs() {
  t().host.requestLatches.markThinkingResumptionRefused();
}
function PIo() {
  return t().host.requestLatches.refusedBetaHeaders();
}
function _4e(e) {
  t().host.requestLatches.markBetaHeaderRefused(e);
}
function Jcn(e) {
  t().host.requestLatches.unmarkBetaHeaderRefused(e);
}
function oqn() {
  return t().host.requestLatches.thinkingHighlightsRefused();
}
function gKs() {
  t().host.requestLatches.markThinkingHighlightsRefused();
}
function yKs(e) {
  return t().host.requestLatches.toolChangeUnsupportedModels().has(e);
}
function _Ks(e) {
  t().host.requestLatches.markToolChangeUnsupportedModel(e);
}
function A$e(e) {
  return t().host.requestLatches.inferenceProfileBackingModels().get(e);
}
function bKs(e, n) {
  t().host.requestLatches.recordInferenceProfileBackingModel(e, n);
}
function ns() {
  return c()?.stickyBetas ?? t().conversationLatches.stickyBetas();
}
function Wae() {
  let e = c();
  return e ? e.conversationAtisLatch : t().conversationLatches.atisLatch();
}
function art(e) {
  let n = c();
  if (n) n.conversationAtisLatch = e;else t().conversationLatches.replaceAtisLatch(e);
}
function Nd() {
  return c()?.conversationToolsUsed ?? t().conversationLatches.toolsUsed;
}
function L$r() {
  let e = c();
  if (e) e.stickyBetas = P(e.stickyBetas);else t().conversationLatches.unlatchStickyBetas();
  SIo();
}
function $H() {
  return t().requestJournal.promptId();
}
function Qcn(e) {
  t().requestJournal.replacePromptId(e);
}
function SKs() {
  return t().requestJournal.incrementPromptIndex();
}
function V5() {
  return t().requestJournal.promptIndex();
}
function sqn(uuid_3, timestamp, clientPlatform) {
  let requestJournal_2 = t().requestJournal,
    s = requestJournal_2.lastPersonPrompt(),
    i = Date.parse(timestamp);
  if (s === null || !Number.isNaN(i) && !(i < Date.parse(s.timestamp))) requestJournal_2.replaceLastPersonPrompt({
    uuid: uuid_3,
    timestamp: timestamp,
    clientPlatform: clientPlatform
  });
}
function b4e() {
  return t().requestJournal.lastPersonPrompt();
}
function Du() {
  return t().surfaceCapabilities.replBridgeActive();
}
function lrt(e) {
  t().surfaceCapabilities.replaceReplBridgeActive(e);
}
function x$e() {
  return t().surfaceCapabilities.mainLoopBusy();
}
function iqn() {
  return t().surfaceCapabilities.mainQueryRunning();
}
function wKs(e) {
  t().surfaceCapabilities.replaceMainLoopStatus(e);
}
export { cOo, _P, loa, doa, coa, Ecn, DWs, $nt, QHr, Eme, XO, jjt, ZHr, uOo, Wjt, LWs, uoa, zjt, e$r, foa, Gjt, NWs, FWs, GVn, Unt, g0, L_, Zm, If, l4e, poa, t$r, fOo, pOo, Vjt, n$r, VVn, KR, yY, qA, mOo, KVn, Kjt, Mf, r$r, moa, Tcn, hoa, qjt, HWs, goa, wG, Mi, yoa, o$r, $Ws, qVn, _oa, Ub, F5, RM, sy, Dwe, boa, s$r, hOo, i$r, Soa, m$e, YA, Ixe, Bo, gOo, woa, H, Po, Mva, z, st, UWs, d4e, Nw, rf, yOo, BWs, Tme, a$r, _Oo, Yjt, Bnt, Mxe, Ee, Vs, lne, bP, Oo, Uc, YVn, y0, jWs, h$e, MC, Awt, XVn, Dxe, WWs, Lwe, zWs, GWs, bOo, VWs, SOo, KWs, qWs, YWs, XWs, JWs, QWs, ZWs, l$r, JVn, ezs, tzs, wOo, nzs, Ck, QVn, ZVn, eKn, rzs, tKn, MN, ozs, Lae, szs, nKn, d$r, izs, azs, lzs, Ty, dzs, czs, Rj, Lxe, kOo, vOo, EOo, Xjt, uzs, H5, Nae, lB, fzs, pzs, Nwe, Fwe, jnt, ab, Ccn, Wnt, mzs, hzs, TOo, COo, y7, $5, gzs, c$r, xwt, Pwt, _7, yzs, kG, rKn, _zs, u$r, bzs, Jjt, c4e, u4e, Szs, dne, f$r, Rcn, wzs, pm, ROo, Owt, znt, kzs, f4e, vzs, Ezs, AOo, Qjt, oKn, _0, Tzs, Czs, Rzs, Azs, of, dB, eh, Iwt, sKn, xzs, U5, Acn, Gnt, Pzs, xOo, Ozs, xcn, Nxe, _Y, iKn, Izs, Mzs, Dzs, Lzs, Aj, POo, Hwe, Nzs, Fzs, aKn, Hzs, $zs, Uzs, p$r, Zjt, vG, Vnt, Bzs, jzs, Wzs, lKn, zzs, Gzs, Knt, Vzs, Kzs, jp, qzs, g$e, Yzs, Xzs, dKn, OOo, IOo, Jzs, MOo, Cme, Pcn, qnt, cKn, Qzs, Zzs, eGs, tGs, nGs, Ocn, rGs, Mwt, oGs, mo, sGs, Icn, m$r, iGs, aGs, lGs, dGs, cGs, eWt, DOo, p4e, LOo, NOo, uGs, FOo, fGs, y$e, Mcn, Dwt, HOo, h$r, pGs, mGs, g$r, hGs, ye, Fxe, b0, gGs, yGs, _Gs, bGs, Ynt, Ml, SGs, wGs, Dva, Xnt, B5, kGs, Lwt, Nwt, LE, vGs, sf, EGs, XA, TGs, uKn, CGs, tWt, RGs, AGs, xGs, b7, PGs, S7, fKn, OGs, Hxe, pKn, mKn, IGs, Dcn, IT, hKn, gKn, AM, MGs, DGs, LGs, S0, Rme, yKn, $xe, Fwt, _Kn, $Oo, Lcn, NGs, Hwt, FGs, HGs, Lva, $Gs, Nva, UGs, Fva, nWt, BGs, UOo, BOo, bKn, bY, m4e, jGs, WGs, zGs, GGs, VGs, KGs, qGs, SKn, jOo, WOo, _$e, YGs, XGs, JGs, zOo, FH, QGs, Uxe, ZGs, Bxe, e2s, lv, t2s, SY, n2s, Pc, DC, rWt, r2s, w7, GOo, o2s, Jnt, jxe, j5, DN, JA, Ncn, s2s, wKn, i2s, VOo, a2s, Fcn, y$r, KOo, kKn, Wxe, Hcn, zxe, qOo, _$r, l2s, Xr, $wt, w0, b$r, vKn, d2s, Uwt, Bwt, b$e, Fae, c2s, $cn, u2s, EKn, Qnt, TKn, f2s, p2s, Ucn, Gxe, YOo, m2s, S$e, Znt, rK, h2s, jwt, g2s, oWt, Bcn, y2s, _2s, h4e, XOo, b2s, CKn, S$r, g4e, S2s, w$r, JOo, RKn, w2s, ert, Vxe, QOo, AKn, EG, Rk, Kxe, qR, k2s, qxe, sWt, v2s, xKn, E2s, T2s, iWt, trt, C2s, ZOo, R2s, A2s, k$r, x2s, HH, PKn, Wwt, P2s, O2s, W5, OKn, IKn, MKn, QA, I2s, y4e, M2s, oK, D2s, $we, L2s, Sh, N2s, F2s, z5, DKn, H2s, tw, LKn, LN, $2s, Hae, NKn, $ae, k7, v$r, U2s, Jp, w$e, B2s, eIo, FKn, Yxe, j2s, aWt, tIo, HKn, zwt, jcn, $Kn, Wcn, E$r, cne, UKn, W2s, zcn, NN, k$e, nrt, v$e, BKn, k0, q, er, Qp, jKn, v7, z2s, G2s, WKn, une, V2s, K2s, zKn, v0, nIo, GKn, TG, rIo, q2s, Y2s, oIo, X2s, Gcn, J2s, Q2s, E7, Xxe, Z2s, xj, eVs, sIo, iIo, tVs, aIo, nVs, lIo, e_, E$e, VKn, fne, lWt, KKn, rVs, dIo, qKn, Pj, LC, oVs, YKn, sVs, cIo, Ig, iVs, aVs, lVs, XKn, T$r, Uae, dVs, T$e, Vcn, uIo, C$r, fIo, R$r, A$r, pIo, cVs, x$r, mIo, uVs, dWt, fVs, pVs, mVs, P$r, hIo, Kcn, rrt, gIo, Ame, Bae, yIo, JKn, hVs, Gwt, Hva, $va, Uva, gS, Uwe, wY, gVs, O$r, G5, yVs, FN, QKn, xn, jae, ZKn, _Vs, bVs, ort, SVs, C$e, HN, T7, Bva, wVs, kVs, Gl, cB, vVs, _Io, dv, srt, eqn, EVs, TVs, CVs, irt, RVs, tqn, bIo, I$r, nqn, AVs, xVs, PVs, OVs, IVs, SIo, qcn, MVs, R$e, DVs, LVs, NVs, FVs, sK, cWt, M$r, HVs, $Vs, UVs, BVs, rqn, jVs, WVs, uWt, zVs, wIo, kIo, Ycn, Xcn, GVs, vIo, VVs, KVs, fWt, qVs, YVs, EIo, XVs, TIo, JVs, QVs, CIo, ZVs, eKs, tKs, RIo, nKs, rKs, oKs, sKs, iKs, aKs, lKs, dKs, cKs, uKs, fKs, D$r, AIo, pKs, mKs, xIo, hKs, PIo, _4e, Jcn, oqn, gKs, yKs, _Ks, A$e, bKs, ns, Wae, art, Nd, L$r, $H, Qcn, SKs, V5, sqn, b4e, Du, lrt, x$e, iqn, wKs };