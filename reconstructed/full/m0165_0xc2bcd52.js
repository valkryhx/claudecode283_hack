// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Hs
} from "B:/~BUN/root/chunk-aky7m4ay.js";
var Eln = Object.freeze({
  open: Object.freeze([]),
  unplaced: Object.freeze([]),
  asked: Object.freeze([]),
  shownId: null,
  focusedId: null,
  focusRequest: null,
  placements: 0,
  closing: Object.freeze([])
});
var E0r = () => ({
  values: Hs(new Map),
  readers: new Map,
  readersOf: new Map,
  mounted: new Map,
  folds: {
    steady: {
      stale: new Set,
      lastAt: Number.NEGATIVE_INFINITY,
      pending: void 0
    },
    live: {
      stale: new Set,
      lastAt: Number.NEGATIVE_INFINITY,
      pending: void 0
    }
  },
  staleListeners: new Set,
  bumps: 0,
  versionFloor: 0
});
var T0r = () => ({
  pending: void 0,
  pausedAt: void 0
});

function s() {
  return {
    pluginLoad: void 0,
    pluginLoadArm: void 0,
    pluginLoadCacheOnly: void 0,
    pluginLoadCacheOnlyArm: void 0,
    commands: void 0,
    skills: void 0,
    skillsV5: void 0,
    agents: void 0,
    handedIn: void 0,
    outputStyles: void 0,
    workflows: void 0,
    hookRegistration: void 0,
    hookModulesAwaitTrust: !1,
    hookRegistrationInFlight: void 0,
    hooksUnknownCause: void 0,
    pluginsWithHooks: new Set,
    hookRegistrationEpoch: 0,
    hookSwapEpoch: 0,
    unlatchedAbsentManagedIds: new Set,
    hookRegistrationArgs: void 0,
    hookHotReloadUnsubscribe: void 0,
    hookHotReloadSettingsSnapshot: void 0,
    hookHotReloadTierSnapshot: void 0,
    loadedModules: [],
    moduleSeats: new Map,
    notices: Hs(new Map),
    openCalls: new Map,
    spawnProvenance: new Map,
    registeredAgents: new Map,
    renderVersions: Hs(new Map),
    panes: Hs(Eln),
    pluginState: E0r(),
    toastClock: T0r(),
    hoverGroups: Hs(new Map),
    scrollSites: new Map,
    focusSites: new Map,
    focusSiteDraws: Me(),
    mountedRasters: new Map,
    mountedImages: new Map,
    rasterAdmission: void 0,
    uiLogSink: null,
    pendingUiLog: [],
    armedMonitorKeys: new Set,
    marketplaces: new Map,
    marketplaceRefreshesInFlight: new Map,
    marketplaceHelperMemo: new Map,
    addDirMarketplacesMemo: void 0,
    headlessInstallPass: void 0,
    installedPluginsMigrated: !1,
    installedPluginsFile: null,
    installedPluginsEpoch: 0,
    installedPluginsSnapshot: null,
    optionValues: new Map,
    flaggedPlugins: null,
    orphanedVersionGlobExclusions: null,
    recentActivity: [],
    pluginActivityFeatures: new Map,
    autoUpdateListener: null,
    commandSourceReresolve: null,
    pendingAutoUpdateNotification: null,
    ownInUseMarkerPaths: new Set,
    ownInUseMarkerHandles: new Map,
    commandProducerDirsDenied: new Set,
    commandProducerDirsScannedAt: 0,
    commandProducerDirsComparable: null,
    commandProducerDirsNeedCanonicalCandidate: !1,
    commandProducerDirsWslProviderUndeterminable: !1,
    commandProducerDirsChanged: Me(),
    inUseMarkerCleanup: void 0,
    hintedPluginIds: new Set,
    seenHintPluginIds: new Set,
    gitAvailable: void 0,
    operatorDeclaredMemo: void 0,
    marketplaceResolutionNoticesLogged: new Set,
    marketplaceAdmissionVerdicts: new Map,
    hiddenRegistryEntries: {
      raw: new Map,
      v5: new Map
    },
    releasedRegistryEntries: {
      raw: new Set,
      v5: new Set
    },
    cacheRootComparableMemo: void 0,
    provenLocalRoots: new Map,
    wslProviderOfPluginsRootMemo: void 0,
    inlinePluginRootsComparableMemo: void 0
  }
}
class n {
  registry = s()
}
var r = new q(() => new n);

function a() {
  return r.of(j().host)
}

function dt() {
  return a().registry
}

function oxo(e) {
  return dt().registeredAgents.has(e)
}

function Tln() {
  return dt().pluginLoadCacheOnly
}

function i2n() {
  dt().commands = void 0
}

function a2n() {
  let e = dt();
  e.skills = void 0, e.skillsV5 = void 0
}

function l2n() {
  dt().agents = void 0
}

function c2n() {
  dt().outputStyles = void 0
}

function Cln() {
  dt().workflows = void 0
}
export {
  Eln,
  E0r,
  T0r,
  dt,
  oxo,
  Tln,
  i2n,
  a2n,
  l2n,
  c2n,
  Cln
};
