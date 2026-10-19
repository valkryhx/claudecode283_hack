// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { K, kjr } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ke, kd, Ve, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { _, J, ti, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ir, Ejt } from "B:/~BUN/root/chunk-xf0m410v.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { vUr, f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { bcs, wcs, Xso, z4e, G4e } from "B:/~BUN/root/chunk-2w966ew9.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bn, vu, iGs, aGs, NLo, ncn, FLo, HLo, $Lo, ocn, GLo } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Tne } from "B:/~BUN/root/chunk-8z3a373v.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { lle, NO } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { WKn, FUs, HUs, $Us, zKn } from "B:/~BUN/root/chunk-7z3ndmqr.js";
import { X, Z0e } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Yg, rI } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { nfe } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Icn } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { BNs } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Xo } from "B:/~BUN/root/chunk-9tkh434c.js";
import { rgo, kvr, xE } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { kie } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { YTn } from "B:/~BUN/root/chunk-m2tvwn4z.js";
import { SM, Rj } from "B:/~BUN/root/chunk-c44qc88s.js";
import { c3 } from "B:/~BUN/root/chunk-ses0c36n.js";
import { _ao, ngr, Sao, jAe, vse as tool_name_3 } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { qpt as tool_name_2, iGn } from "B:/~BUN/root/chunk-fb07w30y.js";
import { xDt, r3, OBe, Je } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { Gws, xvr } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { jor, lqe, zor, rQo, oQo } from "B:/~BUN/root/chunk-ccn0h4wx.js";
import { CKe, OY } from "B:/~BUN/root/chunk-708tgcbz.js";
import { ooe, Okn } from "B:/~BUN/root/chunk-7ad3tead.js";
import { w_e } from "B:/~BUN/root/chunk-kyvzxx43.js";
import { X4t, J4t, wJr, Q4t } from "B:/~BUN/root/chunk-j96j964t.js";
import { Rrn } from "B:/~BUN/root/chunk-f561y43v.js";
import { As } from "B:/~BUN/root/chunk-xnas864x.js";
import { pr as toolName } from "B:/~BUN/root/chunk-j1zjtkgf.js";
import { ugt } from "B:/~BUN/root/chunk-jmms813f.js";
import { A3n } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { Xx, JJ, oe, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { randomUUID as D } from "crypto";
var U = e => ocn().options.some(item => item === e.subtype);
var Q = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function GLe(e) {
  return typeof e === "string" && Q.test(e) ? e : void 0;
}
var G = ["interrupt", "can_use_tool", "initialize", "set_permission_mode", "set_model", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_status", "get_context_usage", "get_session_cost", "list_models", "get_usage", "get_memory_dialog", "get_skills_dialog", "get_chrome_dialog", "get_chrome_browsers", "select_chrome_browser", "get_sandbox_dialog", "get_status", "export_conversation", "get_binary_version", "mcp_call", "file_suggestions", "hook_callback", "mcp_message", "rewind_files", "cancel_async_message", "read_file", "list_directory", "get_workspace_diff", "get_plan", "seed_read_state", "mcp_set_servers", "register_repo_root", "reload_plugins", "reload_skills", "reload_output_styles", "mcp_reconnect", "mcp_toggle", "set_mcp_permission_mode_override", "set_chrome_browser_hints", "set_prompt_suggestions_paused", "set_cwd", "claim_session", "register_device_hooks", "upload_device_hook_template", "message_rated", "oauth_token_refresh", "host_auth_token_refresh", "stop_task", "background_tasks", "get_task_output", "apply_flag_settings", "get_settings", "get_hooks_listing", "update_settings", "elicitation", "request_user_dialog", "submit_feedback", "remote_tools_announce", "remote_tool_call", "remote_plumbing_call", "remote_tools_probe", "remote_tools_reannounce", "ui_attach", "ui_detach", "ui_render", "ui_press", "ui_client_module", "ui_client_press", "ui_message", "ui_client_fault", "remote_control_work_secret", "turn_handoff", "list_permission_rules", "mcp_read_resource", "ui_input", "ui_select", "ui_panes", "ui_pane_show", "ui_pane_focus", "ui_close", "ui_scroll", "ui_focus", "ui_prompt_edit", "ui_prompt_autocomplete", "ui_copy", "ui_prompt_read", "ui_prompt_fill", "ui_prompt_suggest", "ui_read_selection"],
  Y = new Set(G);
function Nkt(e) {
  return typeof e === "string" && Y.has(e) ? e : void 0;
}
function roe(e, s) {
  return {
    [`${e}_${s}`]: !0
  };
}
function Dor(e) {
  let s = Array.isArray(e?.updatedPermissions) ? e.updatedPermissions : [],
    answer_kind = e?.behavior === "deny" ? "deny" : e?.behavior !== "allow" ? "other" : s.length === 0 ? "allow_once" : "allow_with_updates",
    r = o => answer_kind === "allow_with_updates" && s.some(item => typeof item === "object" && item !== null && o(item));
  return {
    answer_kind: answer_kind,
    ...roe("answer_kind", answer_kind),
    ...(r(o => (o.type === "addRules" || o.type === "replaceRules") && o.behavior === "allow") && {
      answer_updates_add_allow_rule: !0
    }),
    ...(r(o => o.type === "setMode") && {
      answer_updates_set_mode: !0
    }),
    ...(r(o => o.type === "addDirectories") && {
      answer_updates_add_directories: !0
    })
  };
}
function Fkt(e) {
  return Math.round(performance.now() - e);
}
var V = 30000,
  Z = 30000,
  ee = 45000,
  M = new Set(["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN"]),
  te = 300000,
  se = 70000,
  re = 0.01,
  ie = 262144,
  ae = 1000,
  ue = f(() => Gws(GLo())),
  de = 268435456;
function H(e) {
  return `Error: stream-json input carried over ${Math.round(e / 1024 / 1024)}M characters with no newline. Each stream-json message must be a single newline-terminated JSON line: either the producer is not newline-terminating its messages, or one message exceeded this budget.`;
}
var le = 64,
  ce = 1048576,
  E = '"control_response"',
  L = 512;
function j(e) {
  let s = kie().safeParse(e);
  if (!s.success) return null;
  return (typeof e === "object" && e !== null ? Object.keys(e).length : 0) > 0 && Object.keys(s.data).length === 0 ? null : s.data;
}
function x(e) {
  let s = ti(ne(e, 4096), {
    maxCodeUnits: 512
  });
  return e.length > 512 ? `${s}\u2026 [${e.length} chars total]` : s;
}
function I(e) {
  return typeof e === "string" ? ti(ne(e, 4096), {
    maxCodeUnits: 200
  }) : "a non-string error field";
}
function pe(e, s) {
  if (e === "delivered" || s === "accepted") return "delivered";
  if (e === "indeterminate" || s === "indeterminate") return "indeterminate";
  return s === "sending" ? "sending" : "queued";
}
function he(e) {
  return typeof e === "object" && e !== null && "subtype" in e ? e.subtype : void 0;
}
function fe(e) {
  switch (e) {
    case "delivered":
      return "delivered";
    case "queued":
      return "queued";
    case "sending":
      return "in_flight";
    case "indeterminate":
      return "indeterminate";
  }
}
function W(e, s) {
  if (e instanceof kd) return "stream_closed";
  if (e instanceof Xx) return "parse_failed";
  return s.aborted ? "timeout" : "aborted";
}
class S_e {
  input;
  replayUserMessages;
  maxLineChars;
  isRemoteTransport() {
    return !1;
  }
  uiSurfaceFrameOf(e, isAnySurfaceAttached) {
    let redactsWhatItPersists = this.redactsWhatItPersists();
    return this.isRemoteTransport() ? {
      isRemoteTransport: !0,
      redactsWhatItPersists: redactsWhatItPersists,
      isAnySurfaceAttached: isAnySurfaceAttached,
      createdAt: void 0,
      sessionWriters: void 0,
      isAtFloor: !1,
      leavesBelowFloor: !1
    } : {
      isRemoteTransport: !1,
      redactsWhatItPersists: redactsWhatItPersists,
      isAnySurfaceAttached: isAnySurfaceAttached
    };
  }
  surfaceRequestJudgedAt(e) {
    let s = this.surfaceRequestsJudgedAt.get(e) ?? Date.now();
    return this.surfaceRequestsJudgedAt.set(e, s), s;
  }
  surfaceRequestsJudgedAt = new WeakMap();
  redactsWhatItPersists() {
    return A3n({
      hostedWorker: this.isHostedWorker,
      transportPersists: this.persistsOutboundFrames
    });
  }
  uiSurfaceChannel() {
    return {
      redactsWhatItPersists: this.redactsWhatItPersists(),
      isRemoteTransport: this.isRemoteTransport(),
      sessionWriters: this.sessionWriters()
    };
  }
  sessionWriters() {
    return;
  }
  surfaceClientAttached(e, s) {
    return !0;
  }
  controlRequestEnded(e) {}
  answersSurfaceRefusal(e) {
    return !0;
  }
  surfaceSenderStands(e) {
    return !0;
  }
  setSurfaceRoster(e) {}
  setSubscribersReportedListener(e) {}
  taskHoldSince() {
    return;
  }
  structuredInput;
  pendingRequests = new Map();
  requestPending = Me();
  sdkHostHookGeneration = 0;
  retiredHostHookAnswer;
  deviceRequests = new Map();
  publishedPendingActionDetails = new Map();
  backgroundPromptIds = new Set();
  flipBackLeftToUnpublishedAsk = !1;
  streamCloseInterruptRequestIds = new Set();
  hostDialogAttestations = new Map();
  timedOutUserDialogs = new Map();
  unansweredSettleHandlers = new Map();
  restoredWorkerState = Promise.resolve(null);
  rereadWorkerState() {
    return Promise.resolve(null);
  }
  readProjectsBinding() {
    return Promise.resolve({
      read: !0,
      assertion: void 0
    });
  }
  workerEpoch() {
    return 0;
  }
  hydratePrefetch = Promise.resolve(null);
  inputClosed = !1;
  hasUnconsumedInput = !1;
  answerLinesWritten = 0;
  answerLinesRead = 0;
  receivedAnswersRead;
  tracksRequestDelivery = !1;
  unexpectedResponseCallback;
  unclaimedResponseObserver;
  resolvedToolUseIds = new Set();
  prependedLines = [];
  locallyPrependedMessages = new WeakSet();
  personsOwnPrepends = new WeakSet();
  prependWaker = null;
  stallTimer;
  stallFired = !1;
  sdkSchemaStretchSampled;
  sdkSchemaKept = new Map();
  sdkSchemaResultWritten = !1;
  sdkSchemaCheckTimer;
  createdAt = Date.now();
  onControlRequestSent;
  onControlRequestResolved;
  onStreamClosedWithParkedQuestion;
  onUserDialogParked;
  hostAnswersElicitations = !0;
  onCommandLifecycle;
  resultDelivery;
  commandLifecycleForwarderInstalled = !1;
  hostOwnsStdinOrigin = !0;
  persistsOutboundFrames = !1;
  get isHostedWorker() {
    return !1;
  }
  readOwnClientEvent(e) {
    return Promise.resolve({
      kind: "unavailable",
      why: "no_session_channel"
    });
  }
  sessionState;
  outbound = new xE();
  heldUntilInit = [];
  constructor(e, s, n, r = de) {
    this.input = e;
    this.replayUserMessages = s;
    this.maxLineChars = r;
    this.input = e, this.sessionState = n ?? new Rrn(), this.sessionState.getPendingActionDetails = o => {
      let h = [];
      for (let [m, y] of this.publishedPendingActionDetails) if (this.pendingRequests.has(m) || m === o) h.push(y);
      return h;
    }, this.sessionState.stateChanged.subscribe(o => {
      if (o !== "requires_action") this.flipBackLeftToUnpublishedAsk = !1;
      if (o === "idle") this.endSdkSchemaStretch();
    }), this.structuredInput = this.read();
  }
  trackResolvedToolUseId(e) {
    if (e.request.subtype === "can_use_tool") this.resolvedToolUseIds.add(e.request.tool_use_id);
    if (z4e(e)) zKn(e.request_id);
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  watchInternalEventPosts() {
    return;
  }
  refusedInternalEvents(e) {
    return [];
  }
  sessionServiceNow() {
    return;
  }
  readStreamFrameAt() {
    return;
  }
  newestSessionStreamCreatedAt() {
    return;
  }
  withdrawQueuedRequest(e) {
    return !1;
  }
  flushDeliveryAcks() {
    return Promise.resolve();
  }
  flushDeliveryAcksConfirmed() {
    return Promise.resolve(!0);
  }
  flushClientEvents() {
    return Promise.resolve(!0);
  }
  flushInternalEventsConfirmed() {
    return Promise.resolve(!0);
  }
  flushSessionState() {
    return Promise.resolve(!0);
  }
  get sessionStatePatchesRefused() {
    return 0;
  }
  get internalEventsPending() {
    return 0;
  }
  get unsentInternalEvents() {
    return 0;
  }
  get droppedInternalBatches() {
    return 0;
  }
  repliesLeftForNextProcess = 0;
  prependUserMessage(content, s = "process") {
    this.prependedLines.push({
      line: _({
        type: "user",
        session_id: "",
        message: {
          role: "user",
          content: content
        },
        parent_tool_use_id: null
      }),
      hostLocal: !0,
      personsOwn: s === "person"
    }), this.prependWaker?.();
  }
  readAgain(e) {
    this.prependedLines.push({
      line: _(e),
      hostLocal: !1,
      personsOwn: !1
    }), this.prependWaker?.();
  }
  noteInputWritten(e) {
    let s = e.indexOf(E);
    while (s !== -1) {
      let n = e.indexOf(`
`, s);
      if (n === -1) return;
      this.answerLinesWritten++, s = e.indexOf(E, n);
    }
  }
  whenReceivedAnswersRead() {
    if (this.answerLinesWritten <= this.answerLinesRead) return;
    return this.receivedAnswersRead ??= Promise.withResolvers(), this.receivedAnswersRead.promise;
  }
  noteAnswerLinesRead(e) {
    if (this.answerLinesRead = e, this.answerLinesWritten <= e) this.receivedAnswersRead?.resolve(), this.receivedAnswersRead = void 0;
  }
  isLocallyPrependedMessage(e) {
    return this.locallyPrependedMessages.has(e);
  }
  isPersonsOwnPrepend(e) {
    return this.personsOwnPrepends.has(e);
  }
  takeUserFrameReceivedWallMs(e) {
    return;
  }
  userFrameStartedAtMs(e) {
    return;
  }
  userFrameReceivedAtMs(e) {
    return;
  }
  async *read() {
    let e = "",
      s = [],
      n = 0,
      r = !1,
      o = 0,
      h = 0,
      m = !1;
    function y(w) {
      if (o++, h += w.length, m) return;
      m = !0, Yg().then(() => {
        o = 0, h = 0, m = !1;
      });
    }
    let S = async function* () {
        for (;;) {
          if (o >= le || h >= ce) await Yg(), o = 0, h = 0;
          let w = !1;
          while (this.prependedLines.length > 0) {
            let {
              line: line,
              hostLocal: hostLocal,
              personsOwn: personsOwn
            } = this.prependedLines.shift();
            w = !0, y(line);
            let O = await this.processLine(line);
            if (O) {
              if (hostLocal) this.locallyPrependedMessages.add(O);
              if (personsOwn) this.personsOwnPrepends.add(O);
              X("info", "cli_stdin_message_parsed", F(O)), yield O;
            }
          }
          if (w) continue;
          let q = e.indexOf(`
`);
          if (q === -1) break;
          let A = e.slice(0, q);
          e = e.slice(q + 1), y(A);
          let C = await this.processLine(A);
          if (C) X("info", "cli_stdin_message_parsed", F(C)), this.hasUnconsumedInput = e.trim().length > 0, yield C;
          if (this.answerLinesRead < this.answerLinesWritten && A.includes(E)) this.noteAnswerLinesRead(this.answerLinesRead + 1);
        }
        this.hasUnconsumedInput = e.trim().length > 0;
      }.bind(this),
      R = this.input[Symbol.asyncIterator](),
      v = null,
      k = !1;
    try {
      for (;;) {
        if (r || this.prependedLines.length > 0) {
          if (s.length > 0) e += s.join(""), s = [];
          if (yield* S(), n = e.length, n > this.maxLineChars) X("warn", "cli_stream_json_line_budget", {
            at: "tail"
          }), await this.exitOnFatalInput(H(this.maxLineChars));
          r = !1;
        }
        v ??= R.next();
        let w = await Promise.race([v.then(() => !1), new Promise(C => {
          this.prependWaker = () => C(!0);
        })]);
        if (this.prependWaker = null, w) continue;
        let q = await v;
        if (v = null, q.done) {
          k = !0;
          break;
        }
        n += q.value.length;
        let A = q.value.includes(`
`);
        if (!A && n > this.maxLineChars) X("warn", "cli_stream_json_line_budget", {
          at: "block"
        }), await this.exitOnFatalInput(H(this.maxLineChars));
        if (s.push(q.value), A) r = !0;else if (!this.hasUnconsumedInput && /\S/.test(q.value)) this.hasUnconsumedInput = !0;
      }
    } finally {
      if (this.prependWaker = null, this.noteAnswerLinesRead(Number.POSITIVE_INFINITY), !k) await R.return?.();
    }
    if (s.length > 0) e += s.join(""), s = [];
    if (e) {
      let w = await this.processLine(e);
      if (w) yield w;
    }
    this.inputClosed = !0;
    let P = bn();
    if (!P && jor()) {
      for (let [w, q] of this.pendingRequests.entries()) if (!q.forwarded && q.request.request.subtype === "can_use_tool" && q.request.request.tool_name === Xo) this.streamCloseInterruptRequestIds.add(w);
      if (this.streamCloseInterruptRequestIds.size > 0) this.onStreamClosedWithParkedQuestion?.();
    }
    for (let w of this.pendingRequests.values()) {
      if (P && this.asksOurHuman(w)) continue;
      w.reject(new kd(rgo));
    }
  }
  hasPendingRequests() {
    return this.pendingRequests.size > 0;
  }
  onRequestPending(e) {
    return this.requestPending.subscribe(e);
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map(item => item.request).filter(item => item.request.subtype === "can_use_tool");
  }
  getPendingUserDialogRequests() {
    return Array.from(this.pendingRequests.values()).map(item => item.request).filter(item => item.request.subtype === "request_user_dialog");
  }
  hasPendingPrompt() {
    for (let {
      request: request
    } of this.pendingRequests.values()) if (z4e(request)) return !0;
    return !1;
  }
  hasStandingPrompt() {
    if (this.sessionState.getState() !== "requires_action") return !1;
    if (this.flipBackLeftToUnpublishedAsk) return this.hasPendingPrompt();
    for (let e of this.publishedPendingActionDetails.keys()) if (this.pendingRequests.has(e)) return !0;
    return !1;
  }
  hasTurnPrompt() {
    for (let e of this.publishedPendingActionDetails.keys()) if (!this.backgroundPromptIds.has(e)) return !0;
    return !1;
  }
  listTurnPrompts() {
    return [...this.publishedPendingActionDetails.keys()].filter(item => !this.backgroundPromptIds.has(item));
  }
  retireSdkHostHookCallbacks(e) {
    this.sdkHostHookGeneration++, this.retiredHostHookAnswer = e;
    let s = 0;
    for (let [n, r] of Array.from(this.pendingRequests)) {
      let request_2 = r.request.request;
      if (request_2.subtype !== "hook_callback") continue;
      let h = e(request_2.input),
        m = r.schema ? r.schema.parse(h) : h;
      this.pendingRequests.delete(n), this.enqueueCancelRequest(n), r.resolve(m), s++;
    }
    return s;
  }
  republishSurvivingPendingAction() {
    let e;
    for (let [s, n] of this.publishedPendingActionDetails) if (this.pendingRequests.has(s)) e = n;
    if (!e) {
      this.flipBackLeftToUnpublishedAsk = this.sessionState.getState() === "requires_action";
      return;
    }
    this.sessionState.republishPendingAction(e), i("tengu_pending_action_republished", {
      survivor_kind: c(e.tool_name === tool_name_2 ? "elicitation" : e.tool_name.startsWith("dialog:") ? "dialog" : "permission"),
      pending_permission_requests: this.getPendingPermissionRequests().length,
      pending_dialog_requests: this.getPendingUserDialogRequests().length
    });
  }
  cancelPendingUserDialogs(e, s) {
    let n = 0;
    for (let {
      request: request_3
    } of Array.from(this.pendingRequests.values())) {
      if (request_3.request.subtype !== "request_user_dialog" || request_3.request.dialog_kind !== e) continue;
      if (!this.cancelDialogByMachine(request_3.request_id, "moved_on")) continue;
      i("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: an(e),
        reason: c(s)
      }), n += 1;
    }
    return n;
  }
  cancelDialogByMachine(request_id, s) {
    if (!this.pendingRequests.has(request_id) || bn()) return !1;
    let n = this.injectControlResponse({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id,
        response: {
          behavior: "cancelled"
        }
      }
    });
    if (n) this.unansweredSettleHandlers.get(request_id)?.(s);
    return n;
  }
  setUnexpectedResponseCallback(e) {
    this.unexpectedResponseCallback = e;
  }
  setUnclaimedResponseObserver(e) {
    this.unclaimedResponseObserver = e;
  }
  setMainLoopLiveness(e) {
    this.mainLoopLiveness = e;
  }
  mainLoopLiveness;
  ignoresErrorShapedDialogResponse(e, s) {
    if (s.subtype !== "error" || e.request.request.subtype !== "request_user_dialog" || e.forwarded) return !1;
    return i("tengu_request_user_dialog_response_ignored", {
      shape: c("error"),
      dialog_kind: an(e.request.request.dialog_kind)
    }), t(`Ignoring error-shaped control_response for parked request_user_dialog request_id=${s.request_id} \u2014 not a human choice; dialog stays parked (error: ${I(s.error)})`), !0;
  }
  ignoresErrorShapedUiHostResponse(e, s) {
    let {
      subtype: subtype
    } = e.request.request;
    if (s.subtype !== "error" || !U(e.request.request)) return !1;
    return t(`Ignoring error-shaped control_response for ${subtype} request_id=${s.request_id} - not the named client's answer; still waiting (error: ${I(s.error)})`), !0;
  }
  asksOurHuman(e) {
    return !e.forwarded && z4e(e.request);
  }
  get pendingHumanRequestCount() {
    let e = 0;
    for (let s of this.pendingRequests.values()) if (this.asksOurHuman(s)) e++;
    return e;
  }
  ignoresResponseAtShutdown(e, s) {
    if (!this.asksOurHuman(e) || !bn()) return !1;
    return t(`Leaving control_response for request_id=${s.request_id} to the next process \u2014 this one is shutting down and settles no question`), this.repliesLeftForNextProcess++, !0;
  }
  ignoresUnsettlingDeviceResponse(e, s) {
    let n = this.deviceRequests.get(s.request_id);
    if (!n) return !1;
    let subtype_2 = e.request.request.subtype;
    if (s.subtype === "error") return n.errorRepliesIgnored += 1, t(`Ignoring error-shaped control_response for device ${subtype_2} request_id=${s.request_id} \u2014 not the device's answer; still waiting (error: ${I(s.error)})`), !0;
    if (!n.accepts(s.response)) return n.malformedRepliesIgnored += 1, t(`Ignoring malformed control_response for device ${subtype_2} request_id=${s.request_id} \u2014 not an answer to it; still waiting`), !0;
    return !1;
  }
  hasCanUseToolNameMismatch(e, s) {
    let request_4 = e.request.request;
    if (request_4.subtype !== "can_use_tool" || s.subtype !== "success") return !1;
    return CKe(s.response?.toolName, request_4.tool_name, s.request_id);
  }
  injectControlResponse(e) {
    let request_id_2 = this.blankedPromptDenyTarget(e.response) ?? e.response?.request_id;
    if (!request_id_2) return !1;
    let n = this.pendingRequests.get(request_id_2);
    if (!n) return i("tengu_inject_control_response_unknown_id", {
      pending_control_requests: this.pendingRequests.size
    }), !1;
    if (this.ignoresErrorShapedDialogResponse(n, e.response)) return !1;
    if (this.ignoresErrorShapedUiHostResponse(n, e.response)) return !1;
    if (this.ignoresResponseAtShutdown(n, e.response)) return !1;
    if (this.ignoresUnsettlingDeviceResponse(n, e.response)) return !1;
    if (this.hasCanUseToolNameMismatch(n, e.response)) return !1;
    if (this.trackResolvedToolUseId(n.request), this.pendingRequests.delete(request_id_2), request_id_2 !== e.response?.request_id) this.onControlRequestResolved?.(request_id_2);
    if (this.outbound.ended) this.write({
      type: "control_cancel_request",
      request_id: request_id_2
    }).catch(r => {
      t(`control_cancel_request for request_id=${request_id_2} not written: ${d(r)}`, {
        level: "error"
      });
    });else this.enqueueCancelRequest(request_id_2);
    if (e.response.subtype === "error") n.reject(Error(e.response.error));else {
      let response = e.response.response;
      if (n.schema) try {
        n.resolve(n.schema.parse(response));
      } catch (error) {
        n.reject(error);
      } else n.resolve({});
    }
    return !0;
  }
  setOnControlRequestSent(e) {
    this.onControlRequestSent = e;
  }
  setOnControlRequestResolved(e) {
    this.onControlRequestResolved = e;
  }
  setOnStreamClosedWithParkedQuestion(e) {
    this.onStreamClosedWithParkedQuestion = e;
  }
  async processLine(e) {
    if (!e.trim()) return;
    e = Bo(e);
    try {
      let s = ugt(J(e));
      if (s.type === "keep_alive") return;
      if (s.type === "update_environment_variables") {
        if (!this.acceptsInboundEnvUpdates()) {
          let variables = s.variables,
            m = typeof variables === "object" && variables !== null ? Object.keys(variables) : [],
            y = m.filter(item => M.has(item)),
            S = m.length - y.length,
            R = S > 0 ? y.concat(`${S} other`) : y;
          t(`[structuredIO] refused update_environment_variables: this worker does not take environment updates from its inbound stream (keys: ${R.join(", ") || "none"})`, {
            level: "warn"
          }), this.retireDroppedFrame("uuid" in s ? s.uuid : void 0);
          return;
        }
        let variables_2 = s.variables;
        if (typeof variables_2 !== "object" || variables_2 === null || Array.isArray(variables_2) || Object.values(variables_2).some(item => typeof item !== "string")) {
          if (t("[structuredIO] dropped update_environment_variables: variables must be an object of string values"), typeof s.request_id === "string" && s.request_id) this.writeActivityLine(_({
            type: "control_response",
            response: {
              subtype: "error",
              request_id: s.request_id,
              error: "update_environment_variables: variables must be an object of string values"
            }
          }) + `
`);
          return;
        }
        let r = [],
          o = [];
        for (let [h, m] of Object.entries(s.variables)) {
          if (!M.has(h)) {
            o.push(h);
            continue;
          }
          process.env[h] = m, r.push(h);
        }
        if (o.length > 0) t(`[structuredIO] refused update_environment_variables for non-allowlisted keys: ${o.join(", ")}`);
        if (r.includes("CLAUDE_CODE_OAUTH_TOKEN")) NO();else lle();
        if (t(`[structuredIO] applied update_environment_variables: ${r.join(", ")}`), typeof s.request_id === "string" && s.request_id) this.writeActivityLine(_({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: s.request_id
          }
        }) + `
`);
        return;
      }
      if (s.type === "control_response") {
        let n = "uuid" in s && typeof s.uuid === "string" ? s.uuid : void 0,
          response_2 = s.response;
        if (typeof response_2 !== "object" || response_2 === null || Array.isArray(response_2)) {
          if (n) this.onCommandLifecycle?.(n, "completed");
          t("[structuredIO] dropped control_response with malformed response payload");
          return;
        }
        let o = this.blankedPromptDenyTarget(s.response) ?? s.response.request_id,
          h = this.pendingRequests.get(o);
        if (!h) {
          let y = this.settleUnknownResponse(s, n);
          if (y !== void 0) await y;
          return;
        }
        if (bn() && this.asksOurHuman(h)) {
          t(`Leaving control_response for request_id=${o} to the next process \u2014 this one is shutting down and settles no question`), this.repliesLeftForNextProcess++;
          return;
        }
        if (n) this.onCommandLifecycle?.(n, "completed");
        if (this.ignoresErrorShapedDialogResponse(h, s.response)) return;
        if (this.ignoresErrorShapedUiHostResponse(h, s.response)) return;
        if (this.ignoresUnsettlingDeviceResponse(h, s.response)) return;
        if (this.hasCanUseToolNameMismatch(h, s.response)) return;
        if (this.trackResolvedToolUseId(h.request), this.pendingRequests.delete(o), this.hostOwnsStdinOrigin && !h.forwarded && this.hostDialogAttestations.has(o) && h.request.request.subtype === "can_use_tool" && s.response.subtype === "success" && BNs(s.response.response)) this.hostDialogAttestations.set(o, !0);
        if (h.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) this.onControlRequestResolved(o);
        if (o !== s.response.request_id) this.enqueueCancelRequest(o);
        if (z4e(h.request) && !(h.forwarded && s.response.subtype === "error")) this.recordUserDrivenInbound(s), this.recordAnsweredPrompt(s, h.request.request.subtype);
        if (s.response.subtype === "error") {
          h.reject(Error(s.response.error));
          return;
        }
        let response_3 = s.response.response;
        if (h.schema) try {
          h.resolve(h.schema.parse(response_3));
        } catch (error) {
          h.reject(error);
        } else h.resolve({});
        if (this.replayUserMessages) return bcs(s);
        return;
      }
      if (s.type !== "workflow_launch" && s.type !== "user" && !(s.type === "control_request" && Okn(he(s.request), () => this.uiSurfaceFrameOf(s, !1), () => this.surfaceRequestJudgedAt(s))) && Xso(s, {
        hostOwnsOrigin: this.hostOwnsStdinOrigin
      })) this.recordUserDrivenInbound(s);
      if (s.type !== "user" && s.type !== "bash_command" && s.type !== "control_request" && s.type !== "control_cancel_request" && s.type !== "assistant" && s.type !== "system" && s.type !== "queued_notification" && s.type !== "session_notice" && s.type !== "workflow_launch") {
        let n = s.type;
        t(`Ignoring unknown message type: ${typeof n === "string" ? x(n) : `(a value of JSON type ${typeof n})`}`, {
          level: "warn"
        }), this.retireDroppedFrame(typeof s === "object" && s !== null && "uuid" in s ? s.uuid : void 0);
        return;
      }
      if (s.type === "workflow_launch") return s;
      if (s.type === "control_request") {
        if (this.isRemoteTransport()) {
          let request_5 = s.request,
            r = typeof request_5 !== "object" || request_5 === null || Array.isArray(request_5);
          if (r || !("subtype" in request_5) || typeof request_5.subtype !== "string") {
            i("tengu_sdk_malformed_input", {
              message_type: b("control_request"),
              reason: c(r ? "missing_request" : "subtype_not_string"),
              transport: b("remote"),
              outcome: b("dropped"),
              has_event_uuid: "uuid" in s && Vt(s.uuid) !== null
            }), t("Dropping control_request: missing request object or non-string subtype", {
              level: "warn"
            }), this.retireDroppedFrame("uuid" in s ? s.uuid : void 0);
            return;
          }
        } else if (!s.request) return this.exitOnFatalInput("Error: Missing request on control_request");
        return s;
      }
      if (s.type === "control_cancel_request") return typeof s.request_id === "string" ? s : void 0;
      if (s.type === "assistant" || s.type === "system") return s;
      if (s.type === "bash_command") return s;
      if (s.type === "queued_notification") return s;
      if (s.type === "session_notice") return s;
      if (s.message?.role !== "user") {
        if (!this.isRemoteTransport()) return this.exitOnFatalInput(`Error: Expected message role 'user', got '${x(String(s.message?.role))}'`);
        let n = Re(s.message),
          outcome = n === void 0 ? "dropped" : !n.plain ? "unwrap_refused" : a.CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR ? "repair_disabled" : "repaired",
          wire_shape = ye(s.message),
          has_event_uuid = Vt(s.uuid) !== null;
        if (i("tengu_sdk_malformed_input", {
          message_type: b("user"),
          reason: b("invalid_message_role"),
          transport: b("remote"),
          outcome: c(outcome),
          wire_shape: c(wire_shape),
          has_event_uuid: has_event_uuid
        }), X("warn", "cli_malformed_user_message", {
          outcome: outcome,
          wire_shape: wire_shape,
          has_event_uuid: has_event_uuid
        }), n === void 0 || outcome !== "repaired") {
          t(`Dropping malformed user message (${outcome}, ${wire_shape}, event uuid ${has_event_uuid ? "present" : "absent"}): expected message role 'user'`, {
            level: "warn"
          }), this.retireDroppedFrame(s.uuid);
          return;
        }
        let m = s;
        m.message = n.inner, t("Repaired a nested user message (one level)");
      }
      if (Xso(s, {
        hostOwnsOrigin: this.hostOwnsStdinOrigin
      })) this.recordUserDrivenInbound(s);
      return s;
    } catch (error) {
      return this.exitOnFatalInput(ve(e, error));
    }
  }
  blankedPromptDenyTarget(e) {
    if (e?.subtype !== "success" || e.response?.behavior !== "deny") return;
    let toolUseID = e.response.toolUseID;
    if (typeof toolUseID !== "string" || toolUseID === "" || e.request_id !== toolUseID || this.pendingRequests.has(toolUseID)) return;
    for (let [n, r] of this.publishedPendingActionDetails) if (r.request_id === "" && r.suppressed_request_id === n && r.tool_use_id === toolUseID && this.pendingRequests.get(n)?.request.request.subtype === "can_use_tool") return t(`[structuredIO] deny keyed on toolUseID=${toolUseID} settles its blanked prompt request_id=${n}`), n;
    return;
  }
  settleUnknownResponse(e, s) {
    if (bn()) {
      t(`Leaving control_response for request_id=${e.response.request_id} to the next process \u2014 this one is shutting down and settles no question`);
      return;
    }
    if (s) this.onCommandLifecycle?.(s, "completed");
    let n = this.timedOutUserDialogs.get(e.response.request_id);
    if (n) {
      this.timedOutUserDialogs.delete(e.response.request_id);
      let h = e.response.subtype === "success" ? e.response.response?.behavior : void 0,
        subtype_3 = e.response.subtype;
      i("tengu_request_user_dialog_late_answer", {
        dialog_kind: an(n.dialogKind),
        lateness_ms: Date.now() - n.timedOutAt,
        response_subtype: c(subtype_3 === "success" || subtype_3 === "error" ? subtype_3 : "other"),
        behavior: c(h === "completed" || h === "cancelled" ? h : h === void 0 ? "absent" : "other")
      }), t(`Ignoring late request_user_dialog answer for request_id=${e.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - n.timedOutAt}ms ago`);
      return;
    }
    let r = e.response.subtype === "success" ? e.response.response : void 0,
      o = r?.toolUseID;
    if (typeof o === "string" && this.resolvedToolUseIds.has(o)) {
      t(`Ignoring duplicate control_response for already-resolved toolUseID=${o} request_id=${e.response.request_id}`);
      return;
    }
    if (this.unexpectedResponseCallback === void 0) {
      try {
        this.unclaimedResponseObserver?.({
          answerKind: e.response.subtype === "success" ? Dor(r) : {},
          toolUseId: typeof o === "string" ? o : void 0
        });
      } catch (error) {
        l(error);
      }
      return;
    }
    return this.unexpectedResponseCallback(e);
  }
  resetStallWatchdog() {
    this.stallFired = !1;
  }
  recordUserDrivenInbound(e) {
    wcs();
  }
  recordAnsweredPrompt(e, s) {}
  retireDroppedFrame(e) {
    let s = Vt(e);
    if (s) this.onCommandLifecycle?.(s, "completed");
  }
  trackWrite(e) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (e.type !== "result" && !this.stallFired) this.stallTimer = setTimeout(n => {
      if (this.sessionState.getState() !== "running") return;
      this.stallFired = !0, i("tengu_sdk_stall", {
        session_age_ms: Date.now() - this.createdAt,
        session_state: c(this.sessionState.getState()),
        last_message_type: c(n),
        pending_control_requests: this.pendingRequests.size
      });
    }, te, e.type), this.stallTimer.unref();
    let s = e.type === "result" && this.resultDelivery ? this.resultDelivery.stamp(e) : e;
    if (s.type !== "system") this.sampleForSdkSchemaCheck(s);
    if (s.type === "result") this.sdkSchemaResultWritten = !0, this.armSdkSchemaCheck();
    return s;
  }
  sampleForSdkSchemaCheck(e) {
    if (this.sdkSchemaStretchSampled ??= Math.random() < re, !this.sdkSchemaStretchSampled) return;
    let s = this.sdkSchemaKept.get(e.type) ?? {
      frames: 0,
      json: void 0
    };
    if (s.frames += 1, this.sdkSchemaKept.set(e.type, s), Math.random() >= 1 / s.frames) return;
    try {
      let n = _(e);
      if (n.length <= ie) s.json = n;
    } catch {}
  }
  sdkSchemaFramesKept() {
    for (let e of this.sdkSchemaKept.values()) if (e.json !== void 0) return !0;
    return !1;
  }
  endSdkSchemaStretch() {
    if (this.sdkSchemaFramesKept()) {
      this.armSdkSchemaCheck();
      return;
    }
    this.sdkSchemaStretchSampled = void 0, this.sdkSchemaKept.clear();
  }
  armSdkSchemaCheck() {
    if (!this.sdkSchemaFramesKept() || !this.sdkSchemaResultWritten) return;
    clearTimeout(this.sdkSchemaCheckTimer), this.sdkSchemaCheckTimer = setTimeout(() => {
      if (this.sessionState.getState() !== "idle" || this.inputClosed || bn()) return;
      let e = [...this.sdkSchemaKept.entries()];
      this.sdkSchemaKept.clear(), this.sdkSchemaStretchSampled = void 0;
      let s = vUr.builtCount();
      try {
        let n = GLo();
        for (let [r, {
          json: json
        }] of e) {
          if (json === void 0) continue;
          let h = J(json),
            m = n.safeParse(h);
          if (!m.success) i("tengu_sdk_schema_violation", {
            message_type: c(r),
            error_path: xvr(m.error.issues[0]?.path, ue)
          });
        }
      } catch (error) {
        t(`Could not check the sampled frames against the SDK output schema; they are dropped: ${d(error)}`);
      } finally {
        vUr.releaseBuiltSince(s);
      }
    }, ae), this.sdkSchemaCheckTimer.unref();
  }
  writeActivityLine(e) {
    Ir(e);
  }
  acceptsInboundEnvUpdates() {
    return !0;
  }
  exitOnFatalInput(e) {
    return me(e);
  }
  async write(e) {
    let s = this.heldDueBefore(e);
    if (s.length > 0) await this.writeHeld(s);
    let n = this.trackWrite(e);
    Ir(w_e(n) + `
`);
    let r = this.heldDueAfter(n);
    if (r.length > 0) await this.writeHeld(r);
  }
  writeAfterInit(e) {
    this.heldUntilInit.push(e);
  }
  heldDueBefore(e) {
    return e.type === "result" ? this.heldUntilInit.splice(0) : [];
  }
  heldDueAfter(e) {
    return e.type === "system" && e.subtype === "init" ? this.heldUntilInit.splice(0) : [];
  }
  async writeHeld(e) {
    for (let s of e) try {
      await this.write(s);
    } catch (error) {
      t(`held frame write failed: ${error}`, {
        level: "warn"
      });
    }
  }
  passControlRequestToHost(e, {
    requestId: requestId,
    schema: schema,
    signal: signal
  }) {
    if (this.pendingRequests.has(requestId)) return Promise.reject(new Ke("a control request with this request_id is already pending"));
    return this.sendRequest(e, schema, signal, {
      requestId: requestId,
      forwarded: !0
    });
  }
  async sendRequest(request_6, schema_2, n, {
    requestId: r = D(),
    forwarded = !1,
    deviceHook = !1
  } = {}) {
    let m = {
        type: "control_request",
        request_id: r,
        request: request_6
      },
      request_7 = {
        ...m,
        request: rQo(request_6)
      },
      S = !forwarded && z4e(m);
    if (S && bn() && !n?.aborted) return vu();
    if (request_6.subtype === "elicitation" && !forwarded) HUs(r);else if (U(request_6) && !forwarded) $Us(r);else if (!forwarded && !deviceHook) WKn(r, {
      automated: !S
    });else if (deviceHook) FUs(r);
    if (this.inputClosed) throw new kd(kvr);
    if (n?.aborted) throw new Ke("Request aborted");
    if (this.outbound.enqueue(forwarded ? request_7 : m), request_6.subtype === "can_use_tool" && this.onControlRequestSent) this.onControlRequestSent(request_7);
    if (S) this.sessionState.beginUserDecision();
    let R = () => {
      if (S && bn()) return;
      if (m.request.subtype === "can_use_tool" && n !== void 0 && Icn(n)) this.answerOwnWithdrawnAsk(r, m.request.tool_use_id);
      this.enqueueCancelRequest(r);
      let k = this.pendingRequests.get(r);
      if (k) {
        if (this.trackResolvedToolUseId(k.request), k.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) this.onControlRequestResolved(r);
        this.pendingRequests.delete(r), k.reject(new Ke());
      }
    };
    if (n) n.addEventListener("abort", R, {
      once: !0
    });
    let v;
    try {
      return await new Promise((k, reject) => {
        v = {
          request: request_7,
          resolve: w => {
            k(w);
          },
          reject: reject,
          schema: schema_2,
          ...(forwarded && {
            forwarded: forwarded
          })
        }, this.pendingRequests.set(r, v), this.requestPending.emit();
      });
    } finally {
      if (n) n.removeEventListener("abort", R);
      if (this.pendingRequests.get(r) === v) this.pendingRequests.delete(r);
      if (S) this.sessionState.endUserDecision();
    }
  }
  emitPermissionDenied(tool_name, tool_use_id, agent_id, r) {
    let decisionReason = r.decisionReason;
    this.outbound.enqueue({
      type: "system",
      subtype: "permission_denied",
      tool_name: tool_name,
      tool_use_id: tool_use_id,
      agent_id: agent_id,
      decision_reason_type: decisionReason?.type,
      decision_reason_code: Tne(decisionReason),
      decision_reason: jAe(decisionReason),
      message: r.message,
      uuid: D(),
      session_id: K()
    });
  }
  createCanUseTool(e, s) {
    return oQo(e, this.permissionPromptHost(e.kind, s));
  }
  permissionPromptHost(e, s) {
    return {
      request: (n, r, requestId_2) => (this.hostDialogAttestations.set(requestId_2, !1), this.sendRequest(n, lqe(e), r, {
        requestId: requestId_2
      })),
      isPending: n => this.pendingRequests.has(n),
      interruptedAtStreamClose: n => this.streamCloseInterruptRequestIds.has(n),
      answeredAtHostDialog: n => {
        let r = this.hostDialogAttestations.get(n) === !0;
        if (r) this.hostDialogAttestations.set(n, !1);
        return r;
      },
      emitPermissionDenied: (n, r, o, h) => this.emitPermissionDenied(n, r, o, h),
      promptShown: s && ((n, r, o, h) => {
        if (this.publishedPendingActionDetails.set(n, r), h !== void 0) this.backgroundPromptIds.add(n);
        if (o !== void 0) this.sessionState.notifyNestedPromptBlocking(o);
        s(r);
      }),
      promptSettled: (n, r) => this.settlePermissionPrompt(n, r)
    };
  }
  settlePermissionPrompt(e, s) {
    if (s !== void 0) this.sessionState.notifyNestedPromptUnblocking(s);
    this.hostDialogAttestations.delete(e), this.settlePublishedPrompt(e, !0);
  }
  settlePublishedPrompt(e, s) {
    if (this.publishedPendingActionDetails.delete(e), this.backgroundPromptIds.delete(e), !this.hasPendingPrompt()) {
      this.flipBackFromRequiresAction();
      return;
    }
    if (s) this.sessionState.reteeWaitingOnUser();
    this.republishSurvivingPendingAction();
  }
  flipBackFromRequiresAction() {
    if (bn()) return;
    let e = this.sessionState.heldRequiresAction?.();
    if (e) {
      this.flipBackLeftToUnpublishedAsk = !1, this.sessionState.notifyStateChanged("requires_action", e);
      return;
    }
    this.sessionState.notifyStateChanged(this.mainLoopLiveness?.() === !1 ? "idle" : "running");
  }
  createHookCallback(callback_id, timeout) {
    let sdkHostHookGeneration = this.sdkHostHookGeneration;
    return {
      type: "callback",
      timeout: timeout,
      callback: async (input, o, h) => {
        if (sdkHostHookGeneration !== this.sdkHostHookGeneration && this.retiredHostHookAnswer) return this.retiredHostHookAnswer(input);
        try {
          let m = await this.sendRequest({
            subtype: "hook_callback",
            callback_id: callback_id,
            input: input,
            tool_use_id: o || void 0
          }, kie(), h);
          return kjr(), m;
        } catch (m) {
          if (Ve(m)) throw m;
          return kjr(), console.error(`Error in hook callback ${callback_id}:`, m), {};
        }
      }
    };
  }
  async sendUiHostRequest(e, s, n) {
    if (!ooe(this.uiSurfaceChannel())) return;
    let r = this.isRemoteTransport(),
      requestId_3 = D();
    if (r) this.trackDeviceRequest(requestId_3, "host_ask", () => !0);
    let h = AbortSignal.timeout(n),
      m = await this.sendRequest(e, s, h, {
        requestId: requestId_3
      }).then(answer => ({
        answer: answer,
        failure: void 0
      }), y => ({
        answer: void 0,
        failure: W(y, h)
      })).finally(() => this.deviceRequests.delete(requestId_3));
    if (r && m.failure === void 0) g("plugin_function_hooks_host_ask");else if (r && m.failure !== void 0) p("plugin_function_hooks_host_ask", m.failure);
    return m.answer;
  }
  takesUiHostAsks() {
    return !this.isRemoteTransport() || G4e(this.sessionWriters());
  }
  async sendUiHostAsk(e, s, n) {
    if (!ooe(this.uiSurfaceChannel())) return {
      answer: void 0,
      cause: "not_asked"
    };
    let r = AbortSignal.timeout(n);
    try {
      return {
        answer: await this.sendRequest(e, s, r),
        cause: void 0
      };
    } catch (error) {
      return {
        answer: void 0,
        cause: W(error, r)
      };
    }
  }
  sendDeviceHookCallback(e) {
    let requestId_4 = D(),
      n = this.trackDeviceRequest(requestId_4, "hook", m => j(m) !== null),
      abortController = new AbortController(),
      o = e.signal ? AbortSignal.any([e.signal, abortController.signal]) : abortController.signal,
      reply = this.sendRequest({
        subtype: "hook_callback",
        callback_id: e.callbackId,
        input: e.input,
        tool_use_id: e.toolUseID || void 0,
        issued_at: Math.trunc(e.issuedAt),
        deadline_ms: Math.max(1, Math.ceil(e.deadlineMs))
      }, oe(), o, {
        requestId: requestId_4,
        deviceHook: !0
      }).then(m => {
        let answer_2 = j(m);
        return answer_2 === null ? {
          malformed: !0
        } : {
          answer: answer_2
        };
      }, m => {
        if (Ve(m)) throw m;
        return t(`Device hook_callback request_id=${requestId_4} settled with a non-answer; treating as no opinion`, {
          level: "warn"
        }), {
          malformed: !0
        };
      }).finally(() => {
        this.deviceRequests.delete(requestId_4);
      });
    return {
      requestId: requestId_4,
      reply: reply,
      cancel: () => abortController.abort(),
      errorRepliesIgnored: () => n.errorRepliesIgnored,
      malformedRepliesIgnored: () => n.malformedRepliesIgnored
    };
  }
  trackDeviceRequest(e, kind, accepts, instanceId, onUpload) {
    if (this.deviceRequests.size >= L) t(`Device request bookkeeping past its expected ceiling (${L} live requests); keeping all of them`, {
      level: "warn"
    });
    let h = {
      kind: kind,
      errorRepliesIgnored: 0,
      malformedRepliesIgnored: 0,
      delivery: "queued",
      instanceId: instanceId,
      accepts: accepts,
      onUpload: onUpload
    };
    return this.deviceRequests.set(e, h), h;
  }
  waitsOnHostAsk() {
    for (let e of this.deviceRequests.values()) if (e.kind === "host_ask") return !0;
    return !1;
  }
  liveDeviceRequestKind(e) {
    return this.deviceRequests.get(e)?.kind;
  }
  abandonServedCalls(e, s) {
    let n = 0;
    for (let [r, o] of this.deviceRequests) {
      if (o.kind !== "served_call" || o.instanceId !== e) continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      this.enqueueCancelRequest(r), this.pendingRequests.delete(r), h.reject(new X4t(s)), n++;
    }
    return n;
  }
  withdrawStandingServedCall(e) {
    if (this.pendingRequests.has(e)) return !1;
    return this.enqueueCancelRequest(e), !0;
  }
  noteRequestsUpload(e, s) {
    let n = 0;
    for (let r of e) {
      let o = this.deviceRequests.get(r);
      if (o === void 0) continue;
      let h = pe(o.delivery, s);
      if (h !== o.delivery) o.delivery = h, n++;
      try {
        o.onUpload?.(s);
      } catch (error) {
        t(`A served call's upload listener threw (${s}); the delivery ledger is unaffected: ${d(error)}`, {
          level: "warn"
        });
      }
    }
    return n;
  }
  rejectUndeliveredRequests(e, s) {
    let n = 0;
    for (let r of e) {
      let o = this.deviceRequests.get(r);
      if (o?.kind !== "served_call") continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      this.pendingRequests.delete(r), h.reject(this.tracksRequestDelivery && o.delivery === "queued" ? new Q4t(s) : new J4t(s)), n++;
    }
    return n;
  }
  sendServedCallRequest(e) {
    let requestId_5 = D();
    if (this.inputClosed) {
      let reply_2 = Promise.reject(new kd(kvr));
      return reply_2.catch(() => {}), {
        requestId: requestId_5,
        sent: !1,
        delivery: () => "queued",
        withdraw: () => !1,
        reply: reply_2,
        cancel: () => {},
        errorRepliesIgnored: () => 0
      };
    }
    let n = this.trackDeviceRequest(requestId_5, "served_call", e.accepts, e.request.instance_id, e.onUpload),
      abortController_2 = new AbortController(),
      o = e.signal ? AbortSignal.any([e.signal, abortController_2.signal]) : abortController_2.signal,
      reply_3 = this.sendRequest(e.request, oe(), o, {
        requestId: requestId_5,
        deviceHook: !0
      }).finally(() => {
        this.deviceRequests.delete(requestId_5);
      });
    return {
      requestId: requestId_5,
      sent: !0,
      delivery: () => this.tracksRequestDelivery ? fe(n.delivery) : "untracked",
      withdraw: () => this.withdrawUnsentServedCall(requestId_5),
      reply: reply_3,
      cancel: () => {
        if (this.pendingRequests.has(requestId_5)) {
          abortController_2.abort();
          return;
        }
        this.enqueueCancelRequest(requestId_5);
      },
      errorRepliesIgnored: () => n.errorRepliesIgnored
    };
  }
  askToAnnounce(e, s) {
    this.sendRequest(e, oe(), s, {
      deviceHook: !0
    }).catch(() => {});
  }
  withdrawUnsentServedCall(e) {
    let s = this.deviceRequests.get(e),
      n = this.pendingRequests.get(e);
    if (!this.tracksRequestDelivery || n === void 0 || s?.kind !== "served_call" || s.delivery !== "queued") return !1;
    if (!this.withdrawQueuedRequest(e)) return !1;
    return this.pendingRequests.delete(e), n.reject(new wJr()), !0;
  }
  async handleElicitation(mcp_server_name, message, requested_schema, r, mode, url, elicitation_id, y, S = !1) {
    if (!this.hostAnswersElicitations) return {
      action: "cancel"
    };
    if (bn()) {
      if (r?.aborted) return {
        action: "cancel"
      };
      return vu();
    }
    if (this.inputClosed || r?.aborted) return {
      action: "cancel"
    };
    let R = D(),
      v = {
        tool_name: tool_name_2,
        display_tool_name: "Claude needs your input",
        action_description: "Answer the MCP server's question to continue",
        tool_use_id: "",
        request_id: R
      };
    if (this.publishedPendingActionDetails.set(R, v), S) this.backgroundPromptIds.add(R);
    this.sessionState.notifyStateChanged("requires_action", v), this.onUserDialogParked?.(v);
    let k = requested_schema?.properties;
    try {
      return await this.sendRequest({
        subtype: "elicitation",
        mcp_server_name: mcp_server_name,
        message: message,
        mode: mode,
        url: url,
        elicitation_id: elicitation_id,
        requested_schema: requested_schema,
        property_order: mode !== "url" && N(k) ? Object.keys(k) : void 0,
        title: y?.title,
        display_name: y?.displayName,
        description: y?.description
      }, NLo(), r, {
        requestId: R
      });
    } catch {
      return {
        action: "cancel"
      };
    } finally {
      this.settlePublishedPrompt(R, !r?.aborted);
    }
  }
  async requestUserDialog(dialog_kind, payload, n) {
    if (bn()) {
      if (n?.signal?.aborted) return {
        behavior: "cancelled"
      };
      return vu();
    }
    let requestId_6 = D(),
      o = iGn(dialog_kind, payload, requestId_6, n?.toolUseId);
    if (this.publishedPendingActionDetails.set(requestId_6, o), this.sessionState.notifyStateChanged("requires_action", o), this.onUserDialogParked?.(o), i("tengu_request_user_dialog_requires_action", {
      dialog_kind: an(dialog_kind)
    }), n?.onSettledUnanswered) this.unansweredSettleHandlers.set(requestId_6, n.onSettledUnanswered);
    let h = nfe(),
      m;
    if (h > 0) m = setTimeout((y, dialogKind, timeout_ms) => {
      if (this.timedOutUserDialogs.set(y, {
        dialogKind: dialogKind,
        timedOutAt: Date.now()
      }), !this.cancelDialogByMachine(y, "deadline")) {
        this.timedOutUserDialogs.delete(y);
        return;
      }
      i("tengu_request_user_dialog_timeout", {
        dialog_kind: an(dialogKind),
        timeout_ms: timeout_ms
      });
    }, h, requestId_6, dialog_kind, h), m.unref();
    try {
      return await this.sendRequest({
        subtype: "request_user_dialog",
        dialog_kind: dialog_kind,
        payload: payload,
        tool_use_id: n?.toolUseId
      }, ncn(), n?.signal, {
        requestId: requestId_6
      });
    } catch {
      return {
        behavior: "cancelled"
      };
    } finally {
      if (m !== void 0) clearTimeout(m);
      this.unansweredSettleHandlers.delete(requestId_6), this.settlePublishedPrompt(requestId_6, !this.timedOutUserDialogs.has(requestId_6));
    }
  }
  createSandboxAskCallback(e, s, n, r) {
    let o = new Map(),
      h = async host => {
        if (r3(host)) return t(`[StructuredIO] Refusing a sandbox network ask for a host srt would re-spell: ${_(host)}`, {
          level: "warn"
        }), !1;
        try {
          let y = {
              type: "addRules",
              rules: [{
                toolName: toolName,
                ruleContent: `domain:${OBe(host)}`
              }],
              behavior: "allow",
              destination: xDt() ?? "session"
            },
            S = zor(OY(tool_name_3), n, r),
            R;
          try {
            R = await this.sendRequest({
              subtype: "can_use_tool",
              tool_name: tool_name_3,
              display_name: OY(tool_name_3),
              input: {
                host: host
              },
              permission_suggestions: [y],
              tool_use_id: D(),
              description: `Allow network connection to ${host}?`
            }, lqe(e.kind));
          } finally {
            if (S(), this.flipBackLeftToUnpublishedAsk && !this.hasPendingPrompt()) this.flipBackFromRequiresAction();
          }
          if (R.behavior !== "allow") return !1;
          let updatedPermissions = R.updatedPermissions;
          switch (e.kind) {
            case "launcher":
              if (updatedPermissions && updatedPermissions.length > 0) {
                let k = c3(updatedPermissions, void 0);
                s?.(P => (k = c3(updatedPermissions, void 0, P), SM(P, k))), await Rj(k, n);
              }
              break;
            case "strict":
              if ((s ? Sao(e, _ao(updatedPermissions, e.limits), tool_name_3, s, ngr(updatedPermissions, e.limits.ruleLength)) : ngr(updatedPermissions, e.limits.ruleLength).length) > 0) return t("refused a sandbox network answer: a deny or ask rule that the answer added, or may have added, is not among the session's rules", {
                level: "warn"
              }), !1;
              break;
          }
          return Je.addSessionAllowedHost(host), !0;
        } catch {
          return !1;
        }
      };
    return m => {
      let y = m.host,
        S = o.get(y);
      if (S) return S;
      let R = h(y).finally(() => {
        o.delete(y);
      });
      return o.set(y, R), R;
    };
  }
  async sendMcpMessage(server_name, message_2, timeoutMs = se) {
    let o = YTn(message_2) ? void 0 : As(void 0, {
      timeoutMs: timeoutMs,
      refTimer: !0
    });
    try {
      return (await this.sendRequest({
        subtype: "mcp_message",
        server_name: server_name,
        message: message_2
      }, u({
        mcp_response: JJ().optional()
      }), o?.signal)).mcp_response;
    } finally {
      o?.cleanup();
    }
  }
  async requestOAuthTokenRefresh() {
    let e = Date.now(),
      s;
    try {
      s = await this.sendRequest({
        subtype: "oauth_token_refresh"
      }, HLo(), AbortSignal.timeout(V));
    } catch (error) {
      throw i("tengu_sdk_oauth_refresh_unfulfilled", {
        outcome: c(error instanceof kd ? "stream_closed" : Ve(error) ? "timeout" : error instanceof Xx ? "invalid_response" : "error"),
        reason: c("none"),
        duration_ms: Date.now() - e
      }), error;
    }
    if (typeof s.accessToken === "string" && s.accessToken) return aGs(), s.accessToken;
    let reason = s.reason;
    if (reason !== void 0) iGs(reason);
    return i("tengu_sdk_oauth_refresh_unfulfilled", {
      outcome: c(reason !== void 0 ? "declined" : "null"),
      reason: c(reason ?? "none"),
      duration_ms: Date.now() - e
    }), null;
  }
  async requestRemoteControlWorkSecret(session_id) {
    try {
      return (await this.sendRequest({
        subtype: "remote_control_work_secret",
        session_id: session_id
      }, FLo(), AbortSignal.timeout(ee))).work_secret || null;
    } catch (error) {
      return t(`[bridge:work-secret] host work-secret request failed (${error instanceof Error ? error.name : "unknown"})`, {
        level: "warn"
      }), null;
    }
  }
  async requestHostAuthTokenRefresh(e = Z) {
    return this.sendRequest({
      subtype: "host_auth_token_refresh"
    }, $Lo(), AbortSignal.timeout(e));
  }
  enqueueCancelRequest(request_id_3) {
    this.outbound.enqueue({
      type: "control_cancel_request",
      request_id: request_id_3
    });
  }
  answerOwnWithdrawnAsk(e, s) {}
}
async function me(e) {
  console.error(e);
  let s = Date.now() + 2000;
  await Nt(rI(), 2000, "write queue drain timeout (exit)").catch(() => {}), await Nt(Z0e(), Math.max(0, s - Date.now()), "diagnostic log flush timeout (exit)").catch(() => {}), await Ejt(Math.max(0, s - Date.now()), {
    scaleBudgetToQueue: !1
  }), process.exit(1);
}
var _e = new Set(["type", "message", "uuid", "session_id", "parent_tool_use_id", "timestamp"]);
function ge([e, s]) {
  return _e.has(e) || e === "isSynthetic" && s === !1 || e === "shouldQuery" && s === !0;
}
function ye(e) {
  if (e === void 0 || e === null) return "no_message";
  if (typeof e !== "object" || Array.isArray(e)) return "non_object_message";
  if (!("role" in e)) return "no_role";
  let role = e.role;
  if (role === void 0) return "no_role";
  if (role === null) return "role_null";
  if (Array.isArray(role)) return "role_array";
  switch (typeof role) {
    case "object":
      return "role_object";
    case "string":
      return "role_string";
    default:
      return "role_other";
  }
}
function Re(e) {
  if (typeof e !== "object" || e === null || !("message" in e)) return;
  let inner = e.message;
  if (typeof inner !== "object" || inner === null || !("role" in inner) || inner.role !== "user" || !("content" in inner) || typeof inner.content !== "string" && !Array.isArray(inner.content)) return;
  return {
    inner: inner,
    plain: (!("type" in e) || e.type === "user") && Object.entries(e).every(ge)
  };
}
function ve(e, s) {
  return `Error parsing streaming input line (type=${/"type"\s*:\s*"([\w-]{1,40})"/.exec(e)?.[1] ?? "unknown"}, ${e.length} chars): ${s instanceof Error ? s.name : typeof s}`;
}
function F(e) {
  return () => ({
    type: e.type,
    ...(e.type === "user" && {
      uuid: GLe(e.uuid)
    }),
    ...(e.type === "control_request" && {
      subtype: Nkt(e.request.subtype)
    })
  });
}
export { GLe, Nkt, roe, Dor, Fkt, S_e };