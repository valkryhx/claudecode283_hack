// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { pd } from "B:/~BUN/root/chunk-tndjj29v.js";
import { randomUUID as S } from "crypto";
class u {
  #e = new Map();
  #n = new Set();
  note(e, n, r) {
    if (this.#n.has(e)) return;
    let s = this.#e.get(e);
    if (s !== void 0) {
      if (s.has(n)) return;
      if (s.size >= 4) {
        this.#t(e);
        return;
      }
      s.set(n, r);
      return;
    }
    if (this.#e.size >= 256) {
      let d = 128;
      for (let i of this.#e.keys()) if (this.#t(i), --d === 0) break;
    }
    this.#e.set(e, new Map([[n, r]]));
  }
  #t(e) {
    this.#e.delete(e), this.#n.add(e);
  }
  take(e, n) {
    let r = this.#e.get(e);
    return this.#e.delete(e), r?.get(n);
  }
}
class p {
  #e;
  #n;
  #t;
  #r = !1;
  constructor(e, n, r) {
    this.#e = e, this.#n = n, this.#t = r;
  }
  settle(e) {
    if (this.#r) return;
    if (this.#r = !0, this.#e.get(this.#n) !== this.#t) return;
    if (this.#t.pending--, e.wasWatching || e.teardown !== "unsent") this.#t.confirmed = !0;
    if (this.#t.pending === 0 && !this.#t.confirmed) this.#e.delete(this.#n);
  }
}
class c {
  #e = new Map();
  #n = 1;
  #t = new Set();
  #r = new u();
  isStopped(e) {
    return this.#e.has(e);
  }
  stoppedSlugs() {
    return this.#e.keys();
  }
  latchGeneration(e) {
    return this.#e.get(e)?.generation;
  }
  recordStop(e) {
    this.#t.delete(e);
    let n = this.#e.get(e);
    if (n === void 0) n = {
      pending: 0,
      confirmed: !1,
      generation: this.#n++
    }, this.#e.set(e, n);else n.generation = this.#n++;
    return n.pending++, new p(this.#e, e, n);
  }
  reaffirmStop(e) {
    this.#t.delete(e);
    let n = this.#e.get(e);
    if (n === void 0) this.confirmStop(e);else n.confirmed = !0;
  }
  confirmStop(e) {
    this.#t.delete(e);
    let n = this.#e.get(e);
    if (n === void 0) this.#e.set(e, {
      pending: 0,
      confirmed: !0,
      generation: this.#n++
    });else n.confirmed = !0, n.generation = this.#n++;
  }
  noteRelatchAsk(e, n) {
    this.#r.note(e, n, this.latchGeneration(n));
  }
  takeRelatchAsk(e, n) {
    return this.#r.take(e, n);
  }
  clearByApprovedRewatch(e, n) {
    let r = this.#e.get(e);
    if (r === void 0 || r.generation !== n) return;
    this.#e.delete(e), this.#t.add(e);
  }
  noteApprovedWatch(e) {
    if (!this.#e.has(e)) this.#t.add(e);
  }
  wasClearedByRewatch(e) {
    return this.#t.has(e) && !this.#e.has(e);
  }
}
var b = {
    baseMs: 1000,
    capMs: 30000,
    minUptimeMs: 60000,
    maxConsecutiveFailures: 10,
    spreadMinMs: 1000,
    spreadMaxMs: 20000,
    seedDeferMaxMs: 180000,
    idleTtlMs: 12600000,
    handshakeDeadlineMs: 150000,
    stallThresholdMs: 1e4,
    stallMinMs: 30000,
    stallMaxMs: 60000,
    longStallMinMs: 120000,
    longStallMaxMs: 240000,
    maxStallMs: 1800000,
    stallOutJitterMs: 900000
  },
  activityRefreshMs = 30000,
  activityEdgeDebounceMs = 100,
  g = {
    baseMs: 1000,
    capMs: 30000,
    minUptimeMs: 60000,
    stallThresholdMs: 1e4,
    stallMinMs: 60000,
    stallMaxMs: 600000,
    maxConsecutiveRefusals: 10,
    handshakeDeadlineMs: 30000
  },
  w = {
    ...g,
    presenceMs: 15000
  },
  y = {
    ...g,
    keepaliveMs: 25000
  };
function JB(e, n) {
  return `${e ?? "main"}
${n}`;
}
function m(e) {
  let n = [...e.codeliveredFollowups.values()];
  e.codeliveredFollowups.clear();
  for (let {
    revoke: revoke
  } of n) revoke("reset");
  e.coordinatorEditors.clear(), e.editorSettleWatch?.(), e.editorSettleWatch = null;
}
function sDt(e, n, r) {
  let current = a().current;
  if (current === void 0) return;
  for (let [d, i] of current.codeliveredFollowups) if (i.slug === e && i.agentId !== r?.exceptAgentId) current.codeliveredFollowups.delete(d), i.revoke(n);
}
var max = 64,
  vw = 10,
  cHe = 3 * vw;
function A() {
  return {
    live: {
      handoffGeneration: 0,
      inFlightSubscribes: new Set(),
      inFlightWiredIntent: new Set(),
      retiredInFlightArms: new Set(),
      armSettleWaiters: new Map(),
      bootingWiredArms: new Map(),
      pendingInFlightWiring: new Map(),
      supervisors: new Map(),
      heardVersions: new Map(),
      heardAheadOfClockReported: !1,
      commentCensus: new Map(),
      pendingRegistrations: 0,
      rewatchTiming: {
        ...b
      },
      mostRecentPublishSlug: void 0,
      pendingSubagentArms: new Map(),
      finishedSubagentAdopters: new Set(),
      activitySenders: new Map(),
      agentActivitySinks: new Map(),
      activityRefreshTimer: void 0,
      activityOnsetTimer: void 0,
      activityClearTimer: void 0,
      activityRefreshMs: activityRefreshMs,
      activityEdgeDebounceMs: activityEdgeDebounceMs,
      activityUnsubscribe: void 0,
      disposed: !1,
      activityOkReported: !1,
      summonDeclared: new Map(),
      summonArmOkReported: !1,
      armOutcomes: new Map(),
      mcpWriteSlugs: new Map(),
      announcedArmFailures: new Set(),
      nonEditorSlugs: new Set(),
      repliesConsent: {
        outstanding: new Map(),
        declined: new Map(),
        approved: new Set()
      },
      inFlightGenerations: new Map(),
      lastArtifactToolCallAt: 0,
      endAll: void 0
    },
    liveDocWatch: {
      ownSeqs: new Map(),
      rebases: new Map(),
      pendingOwnEdits: new Map(),
      watches: new Map(),
      stopCounts: new Map(),
      retiredWatches: new Map(),
      arming: new Map(),
      notLiveDoc: new Set(),
      noticeBudgets: new Map(),
      journalUnavailable: new Set(),
      journalNegotiations: new Set(),
      headSinks: new Map(),
      stopAll: void 0,
      stop: void 0
    },
    liveEditOps: {
      lastOwnAck: new Map(),
      unansweredKeys: new Map()
    },
    liveReplicas: {
      replicas: new Map(),
      unanswered: new Map(),
      unavailable: new Map(),
      tooOld: new Set(),
      cloudUnserved: new Set(),
      opening: new Map(),
      binding: new Map(),
      transport: void 0,
      engine: void 0,
      renderLevel: void 0,
      headMoved: void 0,
      workingCopyPath: void 0,
      settleFileChange: void 0,
      liveFileEnded: void 0,
      pushHeldSaves: void 0,
      heldSavesExitCleanup: void 0
    },
    autoReact: {
      artifacts: new Map(),
      optIn: null,
      responderDispatchOptIn: null,
      userDisarmed: !1,
      enabledMemo: null,
      unattendedReplies: new Map(),
      postSeq: 0,
      probeSeq: 0,
      coalesceMsOverride: null,
      maxAutoTurnsOverride: null,
      confirmDwellMsOverride: null,
      readRetryDelaysMsOverride: null,
      fastAckFlagRefresh: null,
      fastAckFlagRefreshDeadlineMsOverride: null,
      fastAckSelectDeadlineMsOverride: null,
      pendingLedger: null,
      ledgerLastWritten: null,
      ledgerLastWriteAt: null,
      ledgerLastWriteSid: null,
      ledgerLastWriteAccount: void 0,
      ledgerFailureSeqAtWrite: null,
      ledgerDeferredSince: null,
      ledgerLastAppend: null,
      ledgerOwnerSid: null,
      ledgerRetiredSids: new Set(),
      ledgerExitCleanup: void 0,
      ledgerExitReStamp: void 0,
      ledgerTimer: void 0,
      ledgerStorageV5: void 0,
      ledgerMaxAgeMsOverride: null,
      ledgerDebounceMsOverride: null,
      composeDeadlineMsOverride: null
    },
    summonSeeds: {
      claims: new Set(),
      readClaims: new Set(),
      graceMsOverride: null,
      open: new Map(),
      settled: new Set()
    },
    wakes: {
      wakes: new Map(),
      stoppedSlugs: new Set(),
      sweptSlugs: new Set(),
      orphanedSweptSlugs: new Set(),
      yieldedSlugs: new Map(),
      takenFrom: new Map(),
      latchChangedAt: new Map(),
      liftedAtScanGeneration: new Map(),
      humanTurnAtScanGeneration: null,
      pendingResumeDisclosure: new Set(),
      scanGeneration: 0,
      slugEpochs: new Map(),
      stopGenerations: new Map(),
      resumeSights: new u()
    },
    autoEditAttribution: {
      staged: new Map(),
      chainPublishIds: new Set(),
      chainPublishSlots: new Map()
    },
    summonAnswers: new Map(),
    pipelineReplyOrigins: new Map(),
    summonStatus: {
      sidBySlug: new Map(),
      seqBySid: new Map(),
      routeAbsentSince: null,
      handOffs: new Map()
    },
    noticeCoalesce: new Map(),
    shareStatus: {
      bySlug: new Map(),
      probeBoots: new Map(),
      filePathToSlug: new Map(),
      pendingNoticeSlugs: new Map(),
      otherComments: new Map(),
      otherCommentSeq: 0,
      noticeReadSights: {
        comments: new u(),
        read_db: new u(),
        read: new u(),
        read_page_data: new u(),
        verify: new u(),
        webfetch: new u()
      },
      shareProbesInFlight: new Map(),
      capsReadsInFlight: new Map()
    },
    noticeTap: void 0,
    templateLanes: {
      prototypeArmed: !1,
      boundSlugs: new Map(),
      heli: {
        armed: null,
        boards: new Map()
      }
    },
    postedReplyIds: new Set(),
    frameRelay: {
      declinedUntil: new Map(),
      tunnelDeclinedUntil: new Map(),
      hopFailedUntil: new Map(),
      servedUntil: new Map(),
      vouched: new Set(),
      botContextNoted: !1
    },
    contentHostEgressDenied: new Set(),
    contentHostEgressProbed: new Map(),
    contentHostEgressUnanswered: new Set(),
    contentHostEgressInFlight: new Map(),
    sessionHintsRefusedAt: void 0,
    sandboxEgress: new Map(),
    roster: void 0,
    rosterHeard: void 0,
    rosterWait: void 0,
    rosterWaitOver: !1,
    assetsOnRoster: !1,
    accountEpoch: 0,
    conversationEpoch: 0,
    ownPrincipalTokens: new Map(),
    ownPrincipalTokenAccount: null,
    ownPrincipalTokenEpoch: 0,
    profileNames: new Map(),
    profileIdsServed: new Map(),
    profileIdsForgets: new Map(),
    authoringProgress: {
      slotsByBlockIndex: new Map(),
      failureReported: !1
    },
    mintedStoredPageProbes: new WeakSet(),
    strandedMints: new Map(),
    reservedMints: new Set(),
    mintedRoundTripPublishSignals: new WeakSet(),
    durable: {
      rows: new Map(),
      registrySink: null,
      registryPublished: "null",
      unwatchedSlugs: new Set(),
      orphanTriggers: new Set(),
      pendingRestoredRows: new Map(),
      slugOps: new Map(),
      stopLatches: new c(),
      liveDocArmDeclined: new Set(),
      liveDocRegrantSights: new u(),
      firstWatchAskSights: new u(),
      pendingOps: new Set(),
      originatorRefused: !1,
      subscribeForbidden: null,
      subscribeUnrelayed: null,
      watchUrlWithheld: null,
      watchUrlGranted: !1,
      armsInFlight: new Map(),
      armOutcomes: new Map(),
      announcedArmFailures: new Set()
    },
    room: {
      conns: new Map(),
      nonces: new Map(),
      endedOwners: new Map(),
      timing: {
        ...w
      }
    },
    presence: {
      conns: new Map(),
      declined: new Set(),
      timing: {
        ...y
      }
    },
    commentMonitorIntent: {
      sid: null,
      bySlug: new Map(),
      pendingRestore: null,
      lastWritten: null,
      wroteCurrentLine: !1,
      failureSeqAtWrite: 0,
      storageV5: void 0,
      unsubscribeSwitch: void 0,
      unregisterExitDrain: void 0,
      transcriptPath: null,
      parked: new Map(),
      writeChain: Promise.resolve(),
      owedLines: new Map(),
      pendingLines: new Map(),
      exitStamped: !1,
      tornStops: new Set(),
      forgottenAt: new Map(),
      leftWith: null,
      unsubscribeMaterialized: void 0,
      earlySeed: void 0,
      onFile: !1,
      adoptPendingFor: null
    },
    interactionSchemas: void 0,
    approvedRootBases: new Map(),
    commentTargets: new Map(),
    refusedPublishBodies: new Map(),
    approvedSourcePins: new Map(),
    verifiedAttachments: new Map(),
    approvedCopySources: new Map(),
    gatedThumbnailHrefs: new Map(),
    approvalStashEvicted: !1,
    publishObservationNonce: S(),
    consumedPublishApprovals: new Set(),
    crashedPublishChecks: new Set(),
    readDeliveries: new Map(),
    pendingHandoverReads: new Map(),
    frozenReadPageDataSchemaNames: void 0,
    frozenWatchRail: void 0,
    frozenArtifactTypes: void 0,
    frozenAssets: void 0,
    frozenCopyFrom: void 0,
    frozenHotUpdate: void 0,
    frozenPathPin: void 0,
    frozenPathPinAck: void 0,
    pathPinSeq: 0,
    pathPins: new Map(),
    frozenDbStrReplace: void 0,
    frozenArtifactPins: void 0,
    frozenMultiFile: void 0,
    createdFromType: new Map(),
    deferredSurface: new Map(),
    remoteControlSkippedSlugs: new Set(),
    typeInstanceFiles: new Map(),
    typeCatalogVouch: new Map(),
    typeDescriptions: new Map(),
    attestedTypeArtifacts: new Map(),
    typeCapabilityReads: new Map(),
    verify: {
      lastPublish: void 0,
      reads: new Map()
    },
    ownPublishedSlugs: new Map(),
    ownCreatedSlugs: new Map(),
    roomJoinArming: new Set(),
    roomStoppedByUser: new Set(),
    roomArmAsked: new Map(),
    roomArmRefusedByUser: new Set(),
    coordinatorEditors: new Map(),
    editorSettleWatch: null,
    codeliveredFollowups: new Map(),
    prReviewComposeLatch: null,
    whiteboardVariantLatch: null,
    liveEditGateLatch: null,
    livePathsGateLatch: null,
    toolsetLatch: null,
    textVariantLatch: null,
    resultNotes: {
      kindSaid: !1,
      watchCodesSaid: new Set(),
      previewedPaths: new Set(),
      previewHintedPaths: new Set()
    },
    askClassLatch: null,
    inheritedTypeGrantLatch: null,
    routineRunTainted: !1,
    routineRepublishedPaths: new Set(),
    askClassConsent: new Set(),
    askClassPersonConsent: new Set(),
    askClassOutsideOrgConsent: new Set(),
    askNamedOtherOrg: new Map(),
    askClassRequestShown: new Map(),
    askConnectorsShown: new Map(),
    askClassPending: new Map(),
    notedUnreadRefusals: new Map(),
    askCards: new Map(),
    askClassCards: new Map(),
    askCardFacts: new Map(),
    dbWriteOpSights: new u(),
    askClassTaken: new Map(),
    askClassPersonAsked: new Map(),
    askClassNoClassifier: new Map(),
    askClassTakenByPerson: new Map(),
    askTelemetry: new Map(),
    consentCheckScopes: new Map(),
    consentCheckScopesEvicted: !1,
    designGuardFired: !1,
    quickstartGuidanceToolUseId: void 0,
    quickstartRan: new Map(),
    artifactDisabledSessionEvaluated: !1,
    artifactWithheldReasonsLogged: [],
    artifactWithheldRecoveryLogged: !1,
    artifactRegisteredSeen: !1,
    artifactWithheldListedLogged: !1,
    artifactPolicyFetchAnswer: null,
    heldStartupTelemetry: null,
    anchorSnippets: new Map(),
    marked: {
      plain: void 0,
      inertHtml: void 0,
      prReviewSubset: void 0
    },
    bundleEmbedVerdicts: {
      hljs: void 0
    },
    blockStripVerdicts: {
      hljs: void 0,
      mermaid: void 0
    },
    prReviewTemplate: {
      chrome: null,
      parts: null
    },
    workshopBlessedHashes: void 0,
    rejectBreaker: new pd({
      max: max
    })
  };
}
function iDt(e) {
  if (e.stopped = !0, e.abort.abort(), e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  delete e.lease, delete e.renewable, delete e.wake;
}
class f {
  current = void 0;
}
var C = new Nt(() => new f());
function a() {
  return C.of(j());
}
function ee() {
  let e = a();
  return e.current ??= A(), e.current;
}
function VRo(e, n) {
  let r = a().current?.autoReact.artifacts.get(e)?.threads.get(n);
  if (r !== void 0) r.lastAutoReplyAt = Date.now();
}
function Qge() {
  let current_2 = a().current;
  if (current_2 === void 0) return;
  for (let n of current_2.liveDocWatch.noticeBudgets.values()) n.disclosed = !1;
}
function H3e() {
  let current_3 = a().current;
  if (current_3 === void 0) return;
  current_3.refusedPublishBodies.clear(), POr();
}
function POr() {
  let current_4 = a().current;
  if (current_4 === void 0) return;
  for (let n of current_4.pendingHandoverReads.values()) n.linesReturned.clear(), n.linesPrepared.clear(), n.completedBy.clear(), n.confirmsResendFor.clear();
  current_4.readDeliveries.clear();
}
function qRo(e) {
  let current_5 = a().current;
  if (current_5 === void 0) return;
  let refusedPublishBodies = current_5.refusedPublishBodies,
    s = JB(void 0, "");
  for (let [d, i] of refusedPublishBodies) {
    if (!d.startsWith(s)) continue;
    if (!e.has(i.batch)) refusedPublishBodies.delete(d);else if (i.observedFrom !== void 0 && i.observedFrom !== "" && !e.has(i.observedFrom)) delete i.observedFrom;
  }
}
function aDt() {
  return a().current?.room;
}
function KRo() {
  return a().current?.presence;
}
function xan(e) {
  let n = a().current?.presence;
  n?.disposeSlug?.(n, e);
}
function YRo(e) {
  let n = a().current?.presence;
  n?.retireSlug?.(n, e);
}
function XRo(e) {
  return a().current?.presence.declined.has(e) === !0;
}
function WTe() {
  return a().current !== void 0;
}
function JRo() {
  let e = aDt();
  e?.consentChanged?.(e);
}
function QRo(e) {
  let n = aDt();
  n?.accountChanged?.(n, e);
}
function zTe() {
  let e = aDt();
  e?.dispose?.(e);
}
function P(e) {
  k(e);
  for (let n of e.docs.values()) T(n);
}
function k(e) {
  e.journalPos = void 0, e.journalPosOrd = void 0;
}
function T(e) {
  e.journalFence = void 0, e.journalGen += 1;
}
function D(e) {
  let journal = e.journal;
  e.journal = void 0, e.journalCap = void 0, P(e);
  for (let r of e.docs.values()) {
    if (r.batchTimer !== void 0) clearTimeout(r.batchTimer), r.batchTimer = void 0;
    r.batch = void 0, r.batchPos = void 0, r.batchHeardAt = void 0, r.settling = void 0;
  }
  journal?.stop({
    killTask: !1
  });
}
function IOr(e) {
  e.ownPrincipalTokens.clear(), e.ownPrincipalTokenAccount = null, e.ownPrincipalTokenEpoch++;
}
function ZRo(e = "signed_out", n) {
  let current_6 = a().current;
  if (current_6 === void 0) return;
  if (IOr(current_6), current_6.profileNames.clear(), current_6.profileIdsServed.clear(), e !== "same_account") {
    current_6.roster = void 0, current_6.rosterHeard = void 0, current_6.rosterWait = void 0, current_6.rosterWaitOver = !1, current_6.assetsOnRoster = !1, current_6.accountEpoch++, current_6.askClassOutsideOrgConsent.clear(), current_6.askNamedOtherOrg.clear(), current_6.postedReplyIds.clear(), current_6.commentTargets.clear(), current_6.summonStatus.handOffs.clear(), current_6.verify.lastPublish = void 0, current_6.verify.reads.clear(), current_6.ownPublishedSlugs.clear(), current_6.ownCreatedSlugs.clear(), current_6.strandedMints.clear(), current_6.reservedMints.clear(), current_6.live.heardVersions.clear(), current_6.roomJoinArming.clear(), m(current_6);
    for (let i of current_6.live.supervisors.values()) delete i.lease, delete i.renewable;
    current_6.live.nonEditorSlugs.clear();
    for (let i of current_6.shareStatus.otherComments.values()) i.judged.clear(), i.judgedSends.clear();
    current_6.live.pendingSubagentArms.clear(), current_6.live.finishedSubagentAdopters.clear(), current_6.live.repliesConsent.outstanding.clear(), current_6.live.repliesConsent.declined.clear(), current_6.live.repliesConsent.approved.clear();
    for (let i of current_6.autoReact.artifacts.values()) {
      i.heldReplyDeclined = !1, i.heldReplyChain = null;
      for (let o of i.threads.values()) o.ownReplyIds.clear(), o.ownReplyIdsIncomplete = !1;
    }
    current_6.liveDocWatch.journalUnavailable.clear();
    for (let i of current_6.liveDocWatch.journalNegotiations) i.abort();
    current_6.liveDocWatch.journalNegotiations.clear();
    for (let i of current_6.liveDocWatch.arming.values()) for (let o of i.reviving) D(o);
    current_6.liveDocWatch.stopAll?.(e), current_6.live.endAll?.(e);
    for (let i of current_6.liveReplicas.replicas.values()) i.watcher?.close(), clearTimeout(i.pushHold?.due);
    current_6.liveReplicas.replicas.clear(), current_6.liveReplicas.unavailable.clear(), current_6.liveReplicas.tooOld.clear(), current_6.liveReplicas.cloudUnserved.clear(), current_6.liveReplicas.opening.clear(), current_6.liveReplicas.unanswered.clear(), current_6.createdFromType.clear(), current_6.deferredSurface.clear(), current_6.remoteControlSkippedSlugs.clear(), current_6.typeInstanceFiles.clear(), current_6.pathPins.clear(), current_6.typeCatalogVouch.clear(), current_6.typeDescriptions.clear(), current_6.attestedTypeArtifacts.clear(), current_6.typeCapabilityReads.clear(), current_6.quickstartRan.clear(), current_6.anchorSnippets.clear(), current_6.shareStatus.accountBoundaryAt = Date.now(), current_6.shareStatus.probeBoots.clear();
    for (let [i, o] of current_6.shareStatus.bySlug) if (o.probeErrorCode !== void 0 || o.role !== void 0 || o.outsideOrgReader !== void 0 || o.external !== void 0 || o.endpointConnectors !== void 0 || o.connectorsIssuedAt !== void 0 || o.lastConnectorsReadToolUseId !== void 0) {
      let {
        probeErrorCode: probeErrorCode,
        probeGone: probeGone,
        role: role,
        outsideOrgReader: outsideOrgReader,
        external: external,
        endpointConnectors: endpointConnectors,
        connectorsIssuedAt: connectorsIssuedAt,
        lastConnectorsReadToolUseId: lastConnectorsReadToolUseId,
        ...h
      } = o;
      current_6.shareStatus.bySlug.set(i, h);
    }
  }
  let {
    room: room,
    presence: presence
  } = current_6;
  room.accountChanged?.(room, n), presence.accountChanged?.(presence, n);
}
async function eAo(e) {
  if (e === "same_account") return;
  let current_7 = a().current;
  if (current_7 === void 0 || current_7.liveReplicas.replicas.size === 0) return;
  let r = [],
    pushHeldSaves = current_7.liveReplicas.pushHeldSaves;
  if (pushHeldSaves !== void 0) r.push(pushHeldSaves().then(() => t("[liveReplica] held saves pushed before logout"), d => t(`[liveReplica] held saves not pushed before logout: ${l(d)}`)));
  for (let [d, i] of current_7.liveReplicas.replicas) r.push(i.replica.sendFinalReport().then(o => t(`[liveReplica] final divergence report before logout ${d}: ${o ? "tried" : "nothing due"}`), o => t(`[liveReplica] final divergence report before logout ${d} failed: ${l(o)}`)));
  await Promise.race([Promise.all(r), Q(2000)]);
}
function F3e() {
  let current_8 = a().current;
  if (current_8?.liveDocWatch.stopAll?.("clear"), current_8 !== void 0) for (let [n, r] of current_8.liveReplicas.replicas) r.replica.sendFinalReport().then(s => t(`[liveReplica] final divergence report at conversation retire ${n}: ${s ? "tried" : "nothing due"}`), s => t(`[liveReplica] final divergence report at conversation retire ${n} failed: ${l(s)}`));
}
function $3e(e) {
  let current_9 = a().current;
  if (current_9 === void 0) return;
  if (e?.continuesConversation !== !0) current_9.conversationEpoch++, current_9.ownPublishedSlugs.clear(), current_9.ownCreatedSlugs.clear(), current_9.strandedMints.clear(), current_9.reservedMints.clear(), current_9.live.heardVersions.clear(), current_9.roomJoinArming.clear(), current_9.roomStoppedByUser.clear(), current_9.roomArmAsked.clear(), current_9.roomArmRefusedByUser.clear(), m(current_9), current_9.live.nonEditorSlugs.clear(), current_9.live.pendingSubagentArms.clear(), current_9.live.finishedSubagentAdopters.clear(), current_9.live.repliesConsent.outstanding.clear(), current_9.live.repliesConsent.declined.clear(), current_9.live.repliesConsent.approved.clear(), current_9.deferredSurface.clear(), current_9.remoteControlSkippedSlugs.clear();
  if (current_9.createdFromType.clear(), current_9.verify.lastPublish = void 0, current_9.verify.reads.clear(), e?.continuesConversation !== !0) current_9.pathPins.clear(), current_9.resultNotes.kindSaid = !1, current_9.resultNotes.watchCodesSaid.clear(), current_9.resultNotes.previewedPaths.clear(), current_9.resultNotes.previewHintedPaths.clear();
}
export { JB, sDt, vw, cHe, iDt, ee, VRo, Qge, H3e, POr, qRo, aDt, KRo, xan, YRo, XRo, WTe, JRo, QRo, zTe, IOr, ZRo, eAo, F3e, $3e };