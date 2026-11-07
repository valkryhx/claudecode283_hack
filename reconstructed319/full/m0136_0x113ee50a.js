// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  _a
} from "B:/~BUN/root/chunk-5xe4wxb1.js";
class o {
  reconnect = null;
  toggle = null;
  isDisabled = null;
  dialBlockCause = null;
  policyColdStartWaiter = null;
  skippedDynamicServers = [];
  subagentBroughtOwnArtifactsServer = !1;
  cliOwnedConfigs = new WeakSet;
  cliOwnedFirstPartyServerIds = new WeakMap;
  cliOwnedFileUploadSwitches = new WeakMap;
  cliOwnedBearerProviders = new WeakMap;
  cliOwnedAsyncBearerProviders = new WeakMap;
  cliOwnedResponseObservers = new WeakMap;
  cliOwnedRequestHeaderProviders = new WeakMap;
  cliOwnedBeforeRequestHooks = new WeakMap;
  cliOwnedCredentialRequestHeaders = new WeakMap;
  cliOwnedWithheldBearerRefusals = new WeakMap;
  cliOwnedResendDeciders = new WeakMap;
  ccrInjectedConfigs = new WeakSet;
  ccrLaunchMcpUrls = new Map;
  ccrLaunchMcpOrigins = new Map;
  ccrMetaEntries = new WeakSet;
  ownToolContainerConfigs = new WeakSet;
  ownReplyServerConfigs = new WeakSet;
  clientAuthProviders = new WeakMap;
  clientFirstPartyBearers = new WeakMap;
  clientTasksDeclaredBeforeServerList = new WeakMap;
  clientsBuiltWithTasks = new WeakMap;
  sessionFollowsTasks = !1;
  firstToolsListReports = new WeakMap;
  toolsListAhead = new WeakMap;
  stepUpReauthFlights = new Map;
  stepUpReauthExhausted = new Map;
  identityEpoch = 0;
  identityBaseline = void 0;
  identitySeedAttempted = !1;
  identityChangedThisProcess = !1;
  identityTrippedHandler = null;
  identityTripUnowned = !1;
  headlessMcpTeardown = null;
  headlessConnectorMountInFlight = void 0;
  transientRetryPasses = new Map;
  awaitsNextTurnRedial = null;
  searchRedial = null;
  searchRedialFailures = new Map;
  authCacheRead = null;
  authCacheWriteChain = Promise.resolve();
  rejectedStoredTokens = new Map;
  connectsToRedialWithoutToken = new WeakMap;
  tokenlessRejections = new Map;
  savedAccessTokens = new Map;
  discoverVerdictsRead = null;
  discoverVerdictsWriteChain = Promise.resolve();
  firstPartyDesignConsentAsks = new Map;
  claudeAiConfigsFetch = null;
  claudeAiConnectorIdIndex = void 0;
  claudeAiConnectorListStatus = "pending";
  claudeAiConnectorBlockIndex = void 0;
  claudeAiConnectorBlockIndexSeq = 0;
  claudeAiConnectorBlockIndexRows = 0;
  claudeAiConnectorListSkippedBySwitch = !1;
  claudeAiConnectorListCutWhileOff = !1;
  claudeAiConnectorListGeneration = 0;
  claudeAiConnectorListFetchSeq = 0;
  claudeAiConnectorListSettledSeq = 0;
  claudeAiConfigsFetchTransientFailures = new WeakSet;
  pendingCrossOrgNotice = void 0;
  claudeAiConnectedThisSession = new Set;
  needsAuthNoticedThisSession = new Set;
  pendingScopeExpansionNotice = void 0;
  scopeExpansionDisclosed = !1;
  officialUrls = void 0;
  listableUrlLookedUp = !1;
  officialUrlsFetchAwaitsLookup = !1;
  officialUrlsFetch = void 0;
  urlsRegistryCannotList = new Set;
  vscodeClient = null;
  stopVscodePolicyGatesRefresh = null;
  notificationErrorHookedClients = new WeakSet;
  toolRefreshSequences = new WeakMap;
  droppedToolsSeqByConnection = new WeakMap;
  toolsListErrorByResult = new WeakMap;
  discoveryFetchErrors = new WeakMap;
  rawToolsByResult = new WeakMap;
  rawCommandsByResult = new WeakMap;
  rawResourcesByResult = new WeakMap;
  rawFetchedAtByResult = new WeakMap;
  persistedDiscoveryRounds = new WeakSet;
  listChangedRefetchHandlers = new WeakMap;
  burnedListingDiscoverPriors = new Set;
  skillsFunnelSeen = new Set;
  skillsFetcher = null;
  discoveryCacheStore = null;
  connectionCache = null;
  cachedFirstDialArmsRan = new WeakSet;
  supersededDials = new WeakSet;
  swrRefreshDialsInFlight = new WeakSet;
  reauthDecisionSinkForTest = void 0;
  holdStaleReauthEntryForTest = !1;
  stdioProbeTimeoutMsForTest = void 0;
  oauthCallbackListeners = new Map;
  oauthCallbackSubmitters = new Map;
  activeOAuthFlows = new Map;
  authLost = De();
  reauthReconnect = De();
  cachedAdopt = De();
  cachedDialFailed = De()
}
var s = new W(() => new o);

function bt() {
  return s.of(H().host)
}

function MDr(e) {
  return bt().clientAuthProviders.has(_a(e.client))
}

function gte(e, n) {
  let r = bt();
  if (r.cliOwnedConfigs.add(e), n?.firstPartyServer !== void 0) r.cliOwnedFirstPartyServerIds.set(e, n.firstPartyServer.id), r.cliOwnedFileUploadSwitches.set(e, n.firstPartyServer.allowsFileUpload);
  if (n?.getBearerToken) r.cliOwnedBearerProviders.set(e, n.getBearerToken);
  if (n?.resolveBearerToken) r.cliOwnedAsyncBearerProviders.set(e, n.resolveBearerToken);
  if (n?.onResponse) r.cliOwnedResponseObservers.set(e, n.onResponse);
  if (n?.requestHeaders) r.cliOwnedRequestHeaderProviders.set(e, n.requestHeaders);
  if (n?.beforeRequest) r.cliOwnedBeforeRequestHooks.set(e, n.beforeRequest);
  if (n?.credentialRequestHeaders) r.cliOwnedCredentialRequestHeaders.set(e, new Set(n.credentialRequestHeaders.map((t) => t.toLowerCase())));
  if (n?.resendAfter) r.cliOwnedResendDeciders.set(e, n.resendAfter);
  if (n?.withheldBearerRefusal !== void 0) r.cliOwnedWithheldBearerRefusals.set(e, n.withheldBearerRefusal);
  return e
}

function DDr(e) {
  return typeof e === "object" && e !== null ? bt().cliOwnedWithheldBearerRefusals.get(e) : void 0
}

function Yl(e) {
  return typeof e === "object" && e !== null && bt().cliOwnedConfigs.has(e)
}

function VFe(e) {
  return typeof e === "object" && e !== null ? bt().cliOwnedFirstPartyServerIds.get(e) : void 0
}

function pJi(e) {
  if (typeof e !== "object" || e === null) return !0;
  let n = bt().cliOwnedFileUploadSwitches.get(e);
  if (n === void 0) return VFe(e) === void 0;
  return n()
}

function zet(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = bt();
  return n.cliOwnedBearerProviders.has(e) || n.cliOwnedAsyncBearerProviders.has(e)
}

function i(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = bt().cliOwnedBearerProviders.get(e);
  if (!n) return null;
  try {
    return n() || null
  } catch {
    return null
  }
}
async function LDr(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = bt().cliOwnedAsyncBearerProviders.get(e);
  if (!n) return i(e);
  try {
    return await n() || null
  } catch {
    return null
  }
}
async function NDr(e, n) {
  if (typeof e !== "object" || e === null) return;
  try {
    await bt().cliOwnedBeforeRequestHooks.get(e)?.(n)
  } catch {}
}

function FDr(e, n) {
  if (typeof e !== "object" || e === null) return {};
  let r = bt().cliOwnedRequestHeaderProviders.get(e);
  if (!r) return {};
  try {
    return r(n)
  } catch {
    return {}
  }
}

function ian(e, n) {
  return typeof e === "object" && e !== null && (bt().cliOwnedCredentialRequestHeaders.get(e)?.has(n.toLowerCase()) ?? !1)
}
async function aan(e, n, r) {
  if (typeof e !== "object" || e === null) return !1;
  try {
    let t = bt().cliOwnedResendDeciders.get(e);
    return t === void 0 ? !1 : await t({
      status: n.status,
      headers: n.headers
    }, r)
  } catch {
    return !1
  }
}

function HDr(e, n) {
  if (typeof e !== "object" || e === null) return;
  let r = bt().cliOwnedResponseObservers.get(e);
  if (!r) return;
  try {
    r({
      method: n.method,
      status: n.status,
      headers: n.headers,
      requestHeaders: n.requestHeaders,
      bearerFingerprint: n.bearerFingerprint
    })
  } catch {}
}
export {
  bt,
  MDr,
  gte,
  DDr,
  Yl,
  VFe,
  pJi,
  zet,
  LDr,
  NDr,
  FDr,
  ian,
  aan,
  HDr
};
