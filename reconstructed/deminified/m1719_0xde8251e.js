// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { nEt, o0e, s0e, rEt, i0e, Ret, j5t, oEt, u2e, SO, bpr, W5t, z5t, Gxn, Aet, G5t, DU, xet, wO, vG, kG, V5t, ET, p2e, q5t, K5t, sEt, iEt, T4, Spr, Y5t, Vxn, X5t, qxn, f2e, a0e, l0e, Kxn, Yxn, Xxn, Jxn, J5t, m2e, c0e, Q5t, Qxn, _we, Z5t, Zxn, ePn, e8t, tPn, g2e, h2e, t8t, n8t, r8t, y2e, d0e, _2e, Pet, nPn, bwe, rPn, Iet, aEt, oPn, sPn, iPn, aPn, lPn, cPn, dPn, uPn, o8t, pPn, fPn, mPn, gPn, hPn, yPn, _Pn, bPn, SPn, Oet, wPn, Met, vPn, kPn, lEt, cEt, dEt, EPn, TPn, CPn, uEt, RPn, APn, xPn, PPn, IPn, b2e, OPn, u0e, p0e, pEt, MPn, DPn, LPn, s8t, i8t, NPn, HPn, FPn, $Pn, UPn, BPn, jPn, WPn, zPn, Det, GPn, VPn, qPn, KPn, YPn, a8t, fEt, mEt, l8t, c8t, d8t, XPn, u8t, p8t, JPn, QPn, f8t, gEt, Let, Net, ZPn, eIn, tIn, nIn, rIn, oIn, sIn, iIn, aIn, lIn, cIn, dIn, uIn, wpr, pIn, S2e, vpr, Het, kpr, Epr, hEt, Tpr, Cpr, Rpr, Apr, xpr, w2e, Ppr, Ipr, Opr, Mpr, Dpr, Lpr, m8t as OAuthProtectedResourceMetadataSchema, f0e as OAuthMetadataSchema, fIn as OpenIdProviderMetadataSchema, v2e as OpenIdProviderDiscoveryMetadataSchema, k2e as OAuthTokensSchema, mIn as IdJagTokenExchangeResponseSchema, E2e as OAuthErrorResponseSchema, gIn as OAuthClientMetadataSchema, hIn as OAuthClientInformationSchema, g8t as OAuthClientInformationFullSchema, Npr as OAuthClientRegistrationErrorSchema, Hpr as OAuthTokenRevocationRequestSchema } from "B:/~BUN/root/chunk-gyysn9h9.js";
import { nTt } from "B:/~BUN/root/chunk-3q3x5rmb.js";
import { M0e } from "B:/~BUN/root/chunk-xjj2gd4k.js";
import { tTt } from "B:/~BUN/root/chunk-77ee9f8n.js";
import { fde, rj, aWr, hYn, o, GFo, D8e, E, M, uf, ae, C, u, ut, $e, Qo, HJ, fe, z, A, Bs, vC, Bi } from "B:/~BUN/root/chunk-n8qdr73v.js";
var {
    create: create,
    defineProperty: defineProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    getOwnPropertyNames: getOwnPropertyNames,
    getPrototypeOf: getPrototypeOf
  } = Object,
  $o = Object.prototype.hasOwnProperty,
  J = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports),
  vs = (e, t) => {
    let r = {};
    for (var s in e) defineProperty(r, s, {
      get: e[s],
      enumerable: !0
    });
    if (t) defineProperty(r, Symbol.toStringTag, {
      value: "Module"
    });
    return r;
  },
  Eo = (e, t, r, s) => {
    if (t && typeof t === "object" || typeof t === "function") {
      for (var a = getOwnPropertyNames(t), n = 0, i = a.length, l; n < i; n++) if (l = a[n], !$o.call(e, l) && l !== r) defineProperty(e, l, {
        get: (c => t[c]).bind(null, l),
        enumerable: !(s = getOwnPropertyDescriptor(t, l)) || s.enumerable
      });
    }
    return e;
  },
  Sr = (value, t, r) => (r = value != null ? create(getPrototypeOf(value)) : {}, Eo(t || !value || !value.__esModule ? defineProperty(r, "default", {
    value: value,
    enumerable: !0
  }) : r, value));
var Hr = Symbol.for("mcp.sdk.errorBrands");
function et(e, t) {
  let value_2 = new Set(),
    s = t;
  while (typeof s === "function") {
    let mcpBrand = s.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof mcpBrand === "string") value_2.add(mcpBrand);
    s = Object.getPrototypeOf(s);
  }
  if (value_2.size === 0) return;
  Object.defineProperty(e, Hr, {
    value: value_2,
    enumerable: !1,
    configurable: !0
  });
}
function Te(e, t) {
  try {
    if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e, "mcpBrand") && typeof e.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, Hr)) {
      let r = t[Hr];
      if (r && typeof r.has === "function" && r.has(e.mcpBrand)) return !0;
    }
  } catch {}
  return Function.prototype[Symbol.hasInstance].call(e, t);
}
var s8 = function (e) {
    return e.InvalidRequest = "invalid_request", e.InvalidClient = "invalid_client", e.InvalidGrant = "invalid_grant", e.UnauthorizedClient = "unauthorized_client", e.UnsupportedGrantType = "unsupported_grant_type", e.InvalidScope = "invalid_scope", e.AccessDenied = "access_denied", e.ServerError = "server_error", e.TemporarilyUnavailable = "temporarily_unavailable", e.UnsupportedResponseType = "unsupported_response_type", e.UnsupportedTokenType = "unsupported_token_type", e.InvalidToken = "invalid_token", e.MethodNotAllowed = "method_not_allowed", e.TooManyRequests = "too_many_requests", e.InvalidClientMetadata = "invalid_client_metadata", e.InvalidRedirectUri = "invalid_redirect_uri", e.InsufficientScope = "insufficient_scope", e.InvalidTarget = "invalid_target", e;
  }({}),
  MU = class OAuthError extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthError"
      });
    }
    static [Symbol.hasInstance](t) {
      return Te(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Te(this, t);
    }
    constructor(t, r, s) {
      super(r);
      this.code = t, this.errorUri = s, this.name = "OAuthError", et(this, new.target);
    }
    toResponseObject() {
      let t = {
        error: this.code,
        error_description: this.message
      };
      if (this.errorUri) t.error_uri = this.errorUri;
      return t;
    }
    static fromResponse(t) {
      return new OAuthError(t.error, t.error_description ?? t.error, t.error_uri);
    }
  },
  cs = function (e) {
    return e.NotConnected = "NOT_CONNECTED", e.AlreadyConnected = "ALREADY_CONNECTED", e.NotInitialized = "NOT_INITIALIZED", e.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED", e.RequestTimeout = "REQUEST_TIMEOUT", e.ConnectionClosed = "CONNECTION_CLOSED", e.SendFailed = "SEND_FAILED", e.InvalidResult = "INVALID_RESULT", e.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE", e.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED", e.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED", e.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION", e.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED", e.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED", e.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION", e.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN", e.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT", e.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM", e.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION", e;
  }({}),
  ws = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SdkError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Te(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Te(this, e);
    }
    constructor(e, t, r) {
      super(t);
      this.code = e, this.data = r, this.name = "SdkError", et(this, new.target);
    }
  },
  aw = class extends ws {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SdkHttpError"
      });
    }
    constructor(e, t, r) {
      super(e, t, r);
      this.name = "SdkHttpError";
    }
    get status() {
      return this.data.status;
    }
    get statusText() {
      return this.data.statusText;
    }
  };
function Hs(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function xs({
  requestedResource: requestedResource,
  configuredResource: configuredResource
}) {
  let r = typeof requestedResource === "string" ? new URL(requestedResource) : new URL(requestedResource.href),
    s = typeof configuredResource === "string" ? new URL(configuredResource) : new URL(configuredResource.href);
  if (r.origin !== s.origin) return !1;
  if (r.pathname.length < s.pathname.length) return !1;
  let a = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/",
    n = s.pathname.endsWith("/") ? s.pathname : s.pathname + "/";
  return a.startsWith(n);
}
var Ks = "2026-07-28",
  Br = [Ks];
function Ae(e) {
  return e >= Ks;
}
function Wr(e) {
  return e.filter(item => !Ae(item));
}
function Gt(e) {
  return e.filter(item => Ae(item));
}
function Js(e) {
  let structuredContent = e.structuredContent;
  if (structuredContent === void 0) return e;
  if (!(typeof structuredContent !== "object" || structuredContent === null || Array.isArray(structuredContent))) return e;
  if (e.content?.some(r => r.type === "text") ?? !1) return e;
  return {
    ...e,
    content: [...(e.content ?? []), {
      type: "text",
      text: JSON.stringify(structuredContent)
    }]
  };
}
var Gs = ["task", "inputRequests", "requestState"];
function Po(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e) || e.content !== void 0 || Gs.some(item => item in e)) return e;
  return {
    ...e,
    content: []
  };
}
function To() {
  let JSONValueSchema = vC(() => $e([o(), E(), M(), uf(), fe(o(), JSONValueSchema), C(JSONValueSchema)])),
    JSONObjectSchema = fe(o(), JSONValueSchema),
    r = $e([o(), E().int()]),
    CursorSchema = o(),
    TaskMetadataSchema = u({
      ttl: E().optional()
    }),
    RelatedTaskMetadataSchema = u({
      taskId: o()
    }),
    RequestMetaSchema = ut({
      progressToken: r.optional(),
      "io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema.optional()
    }),
    BaseRequestParamsSchema = u({
      _meta: RequestMetaSchema.optional()
    }),
    TaskAugmentedRequestParamsSchema = BaseRequestParamsSchema.extend({
      task: TaskMetadataSchema.optional()
    }),
    RequestSchema = u({
      method: o(),
      params: BaseRequestParamsSchema.loose().optional()
    }),
    NotificationsParamsSchema = u({
      _meta: RequestMetaSchema.optional()
    }),
    NotificationSchema = u({
      method: o(),
      params: NotificationsParamsSchema.loose().optional()
    }),
    ResultSchema = ut({
      _meta: RequestMetaSchema.optional()
    }),
    RequestIdSchema = $e([o(), E().int()]),
    EmptyResultSchema = ResultSchema.strict(),
    y = NotificationsParamsSchema.extend({
      requestId: RequestIdSchema.optional(),
      reason: o().optional()
    }),
    CancelledNotificationSchema = NotificationSchema.extend({
      method: A("notifications/cancelled"),
      params: y
    }),
    IconSchema = u({
      src: o(),
      mimeType: o().optional(),
      sizes: C(o()).optional(),
      theme: z(["light", "dark"]).optional()
    }),
    IconsSchema = u({
      icons: C(IconSchema).optional()
    }),
    BaseMetadataSchema = u({
      name: o(),
      title: o().optional()
    }),
    R = BaseMetadataSchema.extend({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    }),
    k = HJ(u({
      applyDefaults: M().optional()
    }), JSONObjectSchema),
    b = Bi(ye => {
      if (ye && typeof ye === "object" && !Array.isArray(ye) && Object.keys(ye).length === 0) return {
        form: {}
      };
      return ye;
    }, HJ(u({
      form: k.optional(),
      url: JSONObjectSchema.optional()
    }), JSONObjectSchema.optional())),
    ClientTasksCapabilitySchema = ut({
      list: JSONObjectSchema.optional(),
      cancel: JSONObjectSchema.optional(),
      requests: ut({
        sampling: ut({
          createMessage: JSONObjectSchema.optional()
        }).optional(),
        elicitation: ut({
          create: JSONObjectSchema.optional()
        }).optional()
      }).optional()
    }),
    ServerTasksCapabilitySchema = ut({
      list: JSONObjectSchema.optional(),
      cancel: JSONObjectSchema.optional(),
      requests: ut({
        tools: ut({
          call: JSONObjectSchema.optional()
        }).optional()
      }).optional()
    }),
    U = u({
      experimental: fe(o(), JSONObjectSchema).optional(),
      sampling: u({
        context: JSONObjectSchema.optional(),
        tools: JSONObjectSchema.optional()
      }).optional(),
      elicitation: b.optional(),
      roots: u({
        listChanged: M().optional()
      }).optional(),
      tasks: ClientTasksCapabilitySchema.optional(),
      extensions: fe(o(), JSONObjectSchema).optional()
    }),
    K = BaseRequestParamsSchema.extend({
      protocolVersion: o(),
      capabilities: U,
      clientInfo: R
    }),
    InitializeRequestSchema = RequestSchema.extend({
      method: A("initialize"),
      params: K
    }),
    H = u({
      experimental: fe(o(), JSONObjectSchema).optional(),
      logging: JSONObjectSchema.optional(),
      completions: JSONObjectSchema.optional(),
      prompts: u({
        listChanged: M().optional()
      }).optional(),
      resources: u({
        subscribe: M().optional(),
        listChanged: M().optional()
      }).optional(),
      tools: u({
        listChanged: M().optional()
      }).optional(),
      tasks: ServerTasksCapabilitySchema.optional(),
      extensions: fe(o(), JSONObjectSchema).optional()
    }),
    InitializeResultSchema = ResultSchema.extend({
      protocolVersion: o(),
      capabilities: H,
      serverInfo: R,
      instructions: o().optional()
    }),
    InitializedNotificationSchema = NotificationSchema.extend({
      method: A("notifications/initialized"),
      params: NotificationsParamsSchema.optional()
    }),
    PingRequestSchema = RequestSchema.extend({
      method: A("ping"),
      params: BaseRequestParamsSchema.optional()
    }),
    ProgressSchema = u({
      progress: E(),
      total: Bs(E()),
      message: Bs(o())
    }),
    ie = u({
      ...NotificationsParamsSchema.shape,
      ...ProgressSchema.shape,
      progressToken: r
    }),
    ProgressNotificationSchema = NotificationSchema.extend({
      method: A("notifications/progress"),
      params: ie
    }),
    PaginatedRequestParamsSchema = BaseRequestParamsSchema.extend({
      cursor: CursorSchema.optional()
    }),
    PaginatedRequestSchema = RequestSchema.extend({
      params: PaginatedRequestParamsSchema.optional()
    }),
    PaginatedResultSchema = ResultSchema.extend({
      nextCursor: CursorSchema.optional()
    }),
    ResourceContentsSchema = u({
      uri: o(),
      mimeType: Bs(o()),
      _meta: fe(o(), ae()).optional()
    }),
    TextResourceContentsSchema = ResourceContentsSchema.extend({
      text: o()
    }),
    O = o().refine(ye => {
      try {
        return atob(ye), !0;
      } catch {
        return !1;
      }
    }, {
      message: "Invalid Base64 string"
    }),
    BlobResourceContentsSchema = ResourceContentsSchema.extend({
      blob: O
    }),
    G = z(["user", "assistant"]),
    AnnotationsSchema = u({
      audience: C(G).optional(),
      priority: E().min(0).max(1).optional(),
      lastModified: rj({
        offset: !0
      }).optional()
    }),
    ResourceSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      uri: o(),
      description: Bs(o()),
      mimeType: Bs(o()),
      size: Bs(E()),
      annotations: AnnotationsSchema.optional(),
      _meta: Bs(ut({}))
    }),
    ResourceTemplateSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      uriTemplate: o(),
      description: Bs(o()),
      mimeType: Bs(o()),
      annotations: AnnotationsSchema.optional(),
      _meta: Bs(ut({}))
    }),
    ListResourcesRequestSchema = PaginatedRequestSchema.extend({
      method: A("resources/list")
    }),
    ListResourcesResultSchema = PaginatedResultSchema.extend({
      resources: C(ResourceSchema)
    }),
    ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
      method: A("resources/templates/list")
    }),
    ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
      resourceTemplates: C(ResourceTemplateSchema)
    }),
    ResourceRequestParamsSchema = BaseRequestParamsSchema.extend({
      uri: o()
    }),
    X = ResourceRequestParamsSchema,
    ReadResourceRequestSchema = RequestSchema.extend({
      method: A("resources/read"),
      params: X
    }),
    ReadResourceResultSchema = ResultSchema.extend({
      contents: C($e([TextResourceContentsSchema, BlobResourceContentsSchema]))
    }),
    ResourceListChangedNotificationSchema = NotificationSchema.extend({
      method: A("notifications/resources/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    Se = ResourceRequestParamsSchema,
    SubscribeRequestSchema = RequestSchema.extend({
      method: A("resources/subscribe"),
      params: Se
    }),
    pe = ResourceRequestParamsSchema,
    UnsubscribeRequestSchema = RequestSchema.extend({
      method: A("resources/unsubscribe"),
      params: pe
    }),
    ze = NotificationsParamsSchema.extend({
      uri: o()
    }),
    ResourceUpdatedNotificationSchema = NotificationSchema.extend({
      method: A("notifications/resources/updated"),
      params: ze
    }),
    PromptArgumentSchema = u({
      name: o(),
      description: Bs(o()),
      required: Bs(M())
    }),
    PromptSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      description: Bs(o()),
      arguments: Bs(C(PromptArgumentSchema)),
      _meta: Bs(ut({}))
    }),
    ListPromptsRequestSchema = PaginatedRequestSchema.extend({
      method: A("prompts/list")
    }),
    ListPromptsResultSchema = PaginatedResultSchema.extend({
      prompts: C(PromptSchema)
    }),
    Ue = BaseRequestParamsSchema.extend({
      name: o(),
      arguments: fe(o(), o()).optional()
    }),
    GetPromptRequestSchema = RequestSchema.extend({
      method: A("prompts/get"),
      params: Ue
    }),
    TextContentSchema = u({
      type: A("text"),
      text: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ImageContentSchema = u({
      type: A("image"),
      data: O,
      mimeType: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    AudioContentSchema = u({
      type: A("audio"),
      data: O,
      mimeType: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ToolUseContentSchema = u({
      type: A("tool_use"),
      name: o(),
      id: o(),
      input: fe(o(), ae()),
      _meta: fe(o(), ae()).optional()
    }),
    EmbeddedResourceSchema = u({
      type: A("resource"),
      resource: $e([TextResourceContentsSchema, BlobResourceContentsSchema]),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ResourceLinkSchema = ResourceSchema.extend({
      type: A("resource_link")
    }),
    Ce = $e([TextContentSchema, ImageContentSchema, AudioContentSchema, ResourceLinkSchema, EmbeddedResourceSchema]),
    PromptMessageSchema = u({
      role: G,
      content: Ce
    }),
    GetPromptResultSchema = ResultSchema.extend({
      description: o().optional(),
      messages: C(PromptMessageSchema)
    }),
    PromptListChangedNotificationSchema = NotificationSchema.extend({
      method: A("notifications/prompts/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    ToolAnnotationsSchema = u({
      title: o().optional(),
      readOnlyHint: M().optional(),
      destructiveHint: M().optional(),
      idempotentHint: M().optional(),
      openWorldHint: M().optional()
    }),
    ToolExecutionSchema = u({
      taskSupport: z(["required", "optional", "forbidden"]).optional()
    }),
    ToolSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      description: o().optional(),
      inputSchema: u({
        type: A("object"),
        properties: fe(o(), JSONValueSchema).optional(),
        required: C(o()).optional()
      }).catchall(ae()),
      outputSchema: u({
        type: A("object"),
        properties: fe(o(), JSONValueSchema).optional(),
        required: C(o()).optional()
      }).catchall(ae()).optional(),
      annotations: ToolAnnotationsSchema.optional(),
      execution: ToolExecutionSchema.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ListToolsRequestSchema = PaginatedRequestSchema.extend({
      method: A("tools/list")
    }),
    ListToolsResultSchema = PaginatedResultSchema.extend({
      tools: C(ToolSchema)
    }),
    CallToolResultSchema = ResultSchema.extend({
      content: C(Ce),
      structuredContent: fe(o(), ae()).optional(),
      isError: M().optional()
    }),
    ve = TaskAugmentedRequestParamsSchema.extend({
      name: o(),
      arguments: fe(o(), ae()).optional()
    }),
    CallToolRequestSchema = RequestSchema.extend({
      method: A("tools/call"),
      params: ve
    }),
    ToolListChangedNotificationSchema = NotificationSchema.extend({
      method: A("notifications/tools/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    it = z(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
    _t = BaseRequestParamsSchema.extend({
      level: it
    }),
    SetLevelRequestSchema = RequestSchema.extend({
      method: A("logging/setLevel"),
      params: _t
    }),
    yt = NotificationsParamsSchema.extend({
      level: it,
      logger: o().optional(),
      data: ae()
    }),
    LoggingMessageNotificationSchema = NotificationSchema.extend({
      method: A("notifications/message"),
      params: yt
    }),
    ModelHintSchema = u({
      name: o().optional()
    }),
    ModelPreferencesSchema = u({
      hints: C(ModelHintSchema).optional(),
      costPriority: E().min(0).max(1).optional(),
      speedPriority: E().min(0).max(1).optional(),
      intelligencePriority: E().min(0).max(1).optional()
    }),
    ToolChoiceSchema = u({
      mode: z(["auto", "required", "none"]).optional()
    }),
    ToolResultContentSchema = u({
      type: A("tool_result"),
      toolUseId: o().describe("The unique identifier for the corresponding tool call."),
      content: C(Ce),
      structuredContent: u({}).loose().optional(),
      isError: M().optional(),
      _meta: fe(o(), ae()).optional()
    }),
    Et = Qo("type", [TextContentSchema, ImageContentSchema, AudioContentSchema]),
    SamplingMessageContentBlockSchema = Qo("type", [TextContentSchema, ImageContentSchema, AudioContentSchema, ToolUseContentSchema, ToolResultContentSchema]),
    SamplingMessageSchema = u({
      role: G,
      content: $e([SamplingMessageContentBlockSchema, C(SamplingMessageContentBlockSchema)]),
      _meta: fe(o(), ae()).optional()
    }),
    Tt = TaskAugmentedRequestParamsSchema.extend({
      messages: C(SamplingMessageSchema),
      modelPreferences: ModelPreferencesSchema.optional(),
      systemPrompt: o().optional(),
      includeContext: z(["none", "thisServer", "allServers"]).optional(),
      temperature: E().optional(),
      maxTokens: E().int(),
      stopSequences: C(o()).optional(),
      metadata: JSONObjectSchema.optional(),
      tools: C(ToolSchema).optional(),
      toolChoice: ToolChoiceSchema.optional()
    }),
    CreateMessageRequestSchema = RequestSchema.extend({
      method: A("sampling/createMessage"),
      params: Tt
    }),
    CreateMessageResultSchema = ResultSchema.extend({
      model: o(),
      stopReason: Bs(z(["endTurn", "stopSequence", "maxTokens"]).or(o())),
      role: G,
      content: Et
    }),
    CreateMessageResultWithToolsSchema = ResultSchema.extend({
      model: o(),
      stopReason: Bs(z(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
      role: G,
      content: $e([SamplingMessageContentBlockSchema, C(SamplingMessageContentBlockSchema)])
    }),
    BooleanSchemaSchema = u({
      type: A("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: M().optional()
    }),
    StringSchemaSchema = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: E().optional(),
      maxLength: E().optional(),
      format: z(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    }),
    NumberSchemaSchema = u({
      type: z(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: E().optional(),
      maximum: E().optional(),
      default: E().optional()
    }),
    UntitledSingleSelectEnumSchemaSchema = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      default: o().optional()
    }),
    TitledSingleSelectEnumSchemaSchema = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: C(u({
        const: o(),
        title: o()
      })),
      default: o().optional()
    }),
    LegacyTitledEnumSchemaSchema = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      enumNames: C(o()).optional(),
      default: o().optional()
    }),
    SingleSelectEnumSchemaSchema = $e([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema]),
    UntitledMultiSelectEnumSchemaSchema = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: E().optional(),
      maxItems: E().optional(),
      items: u({
        type: A("string"),
        enum: C(o())
      }),
      default: C(o()).optional()
    }),
    TitledMultiSelectEnumSchemaSchema = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: E().optional(),
      maxItems: E().optional(),
      items: u({
        anyOf: C(u({
          const: o(),
          title: o()
        }))
      }),
      default: C(o()).optional()
    }),
    MultiSelectEnumSchemaSchema = $e([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema]),
    EnumSchemaSchema = $e([LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema]),
    PrimitiveSchemaDefinitionSchema = $e([EnumSchemaSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema]),
    ElicitRequestFormParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      mode: A("form").optional(),
      message: o(),
      requestedSchema: u({
        type: A("object"),
        properties: fe(o(), PrimitiveSchemaDefinitionSchema),
        required: C(o()).optional()
      }).catchall(ae())
    }),
    ElicitRequestURLParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      mode: A("url"),
      message: o(),
      elicitationId: o(),
      url: o().url()
    }),
    Ie = $e([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema]),
    ElicitRequestSchema = RequestSchema.extend({
      method: A("elicitation/create"),
      params: Ie
    }),
    sr = NotificationsParamsSchema.extend({
      elicitationId: o()
    }),
    ElicitationCompleteNotificationSchema = NotificationSchema.extend({
      method: A("notifications/elicitation/complete"),
      params: sr
    }),
    ElicitResultSchema = ResultSchema.extend({
      action: z(["accept", "decline", "cancel"]),
      content: Bi(ye => ye === null ? void 0 : ye, fe(o(), $e([o(), E(), M(), C(o())])).optional())
    }),
    ResourceTemplateReferenceSchema = u({
      type: A("ref/resource"),
      uri: o()
    }),
    PromptReferenceSchema = u({
      type: A("ref/prompt"),
      name: o()
    }),
    cr = BaseRequestParamsSchema.extend({
      ref: $e([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
      argument: u({
        name: o(),
        value: o()
      }),
      context: u({
        arguments: fe(o(), o()).optional()
      }).optional()
    }),
    CompleteRequestSchema = RequestSchema.extend({
      method: A("completion/complete"),
      params: cr
    }),
    CompleteResultSchema = ResultSchema.extend({
      completion: ut({
        values: C(o()).max(100),
        total: Bs(E().int()),
        hasMore: Bs(M())
      })
    }),
    RootSchema = u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ListRootsRequestSchema = RequestSchema.extend({
      method: A("roots/list"),
      params: BaseRequestParamsSchema.optional()
    }),
    ListRootsResultSchema = ResultSchema.extend({
      roots: C(RootSchema)
    }),
    RootsListChangedNotificationSchema = NotificationSchema.extend({
      method: A("notifications/roots/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    TaskCreationParamsSchema = ut({
      ttl: E().optional(),
      pollInterval: E().optional()
    }),
    mr = z(["working", "input_required", "completed", "failed", "cancelled"]),
    Fe = u({
      taskId: o(),
      status: mr,
      ttl: $e([E(), uf()]),
      createdAt: o(),
      lastUpdatedAt: o(),
      pollInterval: Bs(E()),
      statusMessage: Bs(o())
    }),
    CreateTaskResultSchema = ResultSchema.extend({
      task: Fe
    }),
    fr = NotificationsParamsSchema.merge(Fe),
    TaskStatusNotificationSchema = NotificationSchema.extend({
      method: A("notifications/tasks/status"),
      params: fr
    }),
    GetTaskRequestSchema = RequestSchema.extend({
      method: A("tasks/get"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    }),
    GetTaskResultSchema = ResultSchema.merge(Fe),
    GetTaskPayloadRequestSchema = RequestSchema.extend({
      method: A("tasks/result"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    }),
    GetTaskPayloadResultSchema = ResultSchema.loose(),
    ListTasksRequestSchema = PaginatedRequestSchema.extend({
      method: A("tasks/list")
    }),
    ListTasksResultSchema = PaginatedResultSchema.extend({
      tasks: C(Fe)
    }),
    CancelTaskRequestSchema = RequestSchema.extend({
      method: A("tasks/cancel"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    });
  return {
    JSONValueSchema: JSONValueSchema,
    JSONObjectSchema: JSONObjectSchema,
    ProgressTokenSchema: r,
    CursorSchema: CursorSchema,
    TaskMetadataSchema: TaskMetadataSchema,
    RelatedTaskMetadataSchema: RelatedTaskMetadataSchema,
    RequestMetaSchema: RequestMetaSchema,
    BaseRequestParamsSchema: BaseRequestParamsSchema,
    TaskAugmentedRequestParamsSchema: TaskAugmentedRequestParamsSchema,
    RequestSchema: RequestSchema,
    NotificationsParamsSchema: NotificationsParamsSchema,
    NotificationSchema: NotificationSchema,
    ResultSchema: ResultSchema,
    RequestIdSchema: RequestIdSchema,
    EmptyResultSchema: EmptyResultSchema,
    CancelledNotificationParamsSchema: y,
    CancelledNotificationSchema: CancelledNotificationSchema,
    IconSchema: IconSchema,
    IconsSchema: IconsSchema,
    BaseMetadataSchema: BaseMetadataSchema,
    ImplementationSchema: R,
    ClientTasksCapabilitySchema: ClientTasksCapabilitySchema,
    ServerTasksCapabilitySchema: ServerTasksCapabilitySchema,
    ClientCapabilitiesSchema: U,
    InitializeRequestParamsSchema: K,
    InitializeRequestSchema: InitializeRequestSchema,
    ServerCapabilitiesSchema: H,
    InitializeResultSchema: InitializeResultSchema,
    InitializedNotificationSchema: InitializedNotificationSchema,
    PingRequestSchema: PingRequestSchema,
    ProgressSchema: ProgressSchema,
    ProgressNotificationParamsSchema: ie,
    ProgressNotificationSchema: ProgressNotificationSchema,
    PaginatedRequestParamsSchema: PaginatedRequestParamsSchema,
    PaginatedRequestSchema: PaginatedRequestSchema,
    PaginatedResultSchema: PaginatedResultSchema,
    ResourceContentsSchema: ResourceContentsSchema,
    TextResourceContentsSchema: TextResourceContentsSchema,
    BlobResourceContentsSchema: BlobResourceContentsSchema,
    RoleSchema: G,
    AnnotationsSchema: AnnotationsSchema,
    ResourceSchema: ResourceSchema,
    ResourceTemplateSchema: ResourceTemplateSchema,
    ListResourcesRequestSchema: ListResourcesRequestSchema,
    ListResourcesResultSchema: ListResourcesResultSchema,
    ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema,
    ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema,
    ResourceRequestParamsSchema: ResourceRequestParamsSchema,
    ReadResourceRequestParamsSchema: X,
    ReadResourceRequestSchema: ReadResourceRequestSchema,
    ReadResourceResultSchema: ReadResourceResultSchema,
    ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema,
    SubscribeRequestParamsSchema: Se,
    SubscribeRequestSchema: SubscribeRequestSchema,
    UnsubscribeRequestParamsSchema: pe,
    UnsubscribeRequestSchema: UnsubscribeRequestSchema,
    ResourceUpdatedNotificationParamsSchema: ze,
    ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema,
    PromptArgumentSchema: PromptArgumentSchema,
    PromptSchema: PromptSchema,
    ListPromptsRequestSchema: ListPromptsRequestSchema,
    ListPromptsResultSchema: ListPromptsResultSchema,
    GetPromptRequestParamsSchema: Ue,
    GetPromptRequestSchema: GetPromptRequestSchema,
    TextContentSchema: TextContentSchema,
    ImageContentSchema: ImageContentSchema,
    AudioContentSchema: AudioContentSchema,
    ToolUseContentSchema: ToolUseContentSchema,
    EmbeddedResourceSchema: EmbeddedResourceSchema,
    ResourceLinkSchema: ResourceLinkSchema,
    ContentBlockSchema: Ce,
    PromptMessageSchema: PromptMessageSchema,
    GetPromptResultSchema: GetPromptResultSchema,
    PromptListChangedNotificationSchema: PromptListChangedNotificationSchema,
    ToolAnnotationsSchema: ToolAnnotationsSchema,
    ToolExecutionSchema: ToolExecutionSchema,
    ToolSchema: ToolSchema,
    ListToolsRequestSchema: ListToolsRequestSchema,
    ListToolsResultSchema: ListToolsResultSchema,
    CallToolResultSchema: CallToolResultSchema,
    CallToolRequestParamsSchema: ve,
    CallToolRequestSchema: CallToolRequestSchema,
    ToolListChangedNotificationSchema: ToolListChangedNotificationSchema,
    LoggingLevelSchema: it,
    SetLevelRequestParamsSchema: _t,
    SetLevelRequestSchema: SetLevelRequestSchema,
    LoggingMessageNotificationParamsSchema: yt,
    LoggingMessageNotificationSchema: LoggingMessageNotificationSchema,
    ModelHintSchema: ModelHintSchema,
    ModelPreferencesSchema: ModelPreferencesSchema,
    ToolChoiceSchema: ToolChoiceSchema,
    ToolResultContentSchema: ToolResultContentSchema,
    SamplingContentSchema: Et,
    SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema,
    SamplingMessageSchema: SamplingMessageSchema,
    CreateMessageRequestParamsSchema: Tt,
    CreateMessageRequestSchema: CreateMessageRequestSchema,
    CreateMessageResultSchema: CreateMessageResultSchema,
    CreateMessageResultWithToolsSchema: CreateMessageResultWithToolsSchema,
    BooleanSchemaSchema: BooleanSchemaSchema,
    StringSchemaSchema: StringSchemaSchema,
    NumberSchemaSchema: NumberSchemaSchema,
    UntitledSingleSelectEnumSchemaSchema: UntitledSingleSelectEnumSchemaSchema,
    TitledSingleSelectEnumSchemaSchema: TitledSingleSelectEnumSchemaSchema,
    LegacyTitledEnumSchemaSchema: LegacyTitledEnumSchemaSchema,
    SingleSelectEnumSchemaSchema: SingleSelectEnumSchemaSchema,
    UntitledMultiSelectEnumSchemaSchema: UntitledMultiSelectEnumSchemaSchema,
    TitledMultiSelectEnumSchemaSchema: TitledMultiSelectEnumSchemaSchema,
    MultiSelectEnumSchemaSchema: MultiSelectEnumSchemaSchema,
    EnumSchemaSchema: EnumSchemaSchema,
    PrimitiveSchemaDefinitionSchema: PrimitiveSchemaDefinitionSchema,
    ElicitRequestFormParamsSchema: ElicitRequestFormParamsSchema,
    ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema,
    ElicitRequestParamsSchema: Ie,
    ElicitRequestSchema: ElicitRequestSchema,
    ElicitationCompleteNotificationParamsSchema: sr,
    ElicitationCompleteNotificationSchema: ElicitationCompleteNotificationSchema,
    ElicitResultSchema: ElicitResultSchema,
    ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema,
    PromptReferenceSchema: PromptReferenceSchema,
    CompleteRequestParamsSchema: cr,
    CompleteRequestSchema: CompleteRequestSchema,
    CompleteResultSchema: CompleteResultSchema,
    RootSchema: RootSchema,
    ListRootsRequestSchema: ListRootsRequestSchema,
    ListRootsResultSchema: ListRootsResultSchema,
    RootsListChangedNotificationSchema: RootsListChangedNotificationSchema,
    TaskCreationParamsSchema: TaskCreationParamsSchema,
    TaskStatusSchema: mr,
    TaskSchema: Fe,
    CreateTaskResultSchema: CreateTaskResultSchema,
    TaskStatusNotificationParamsSchema: fr,
    TaskStatusNotificationSchema: TaskStatusNotificationSchema,
    GetTaskRequestSchema: GetTaskRequestSchema,
    GetTaskResultSchema: GetTaskResultSchema,
    GetTaskPayloadRequestSchema: GetTaskPayloadRequestSchema,
    GetTaskPayloadResultSchema: GetTaskPayloadResultSchema,
    ListTasksRequestSchema: ListTasksRequestSchema,
    ListTasksResultSchema: ListTasksResultSchema,
    CancelTaskRequestSchema: CancelTaskRequestSchema,
    CancelTaskResultSchema: ResultSchema.merge(Fe),
    ClientRequestSchema: $e([PingRequestSchema, InitializeRequestSchema, CompleteRequestSchema, SetLevelRequestSchema, GetPromptRequestSchema, ListPromptsRequestSchema, ListResourcesRequestSchema, ListResourceTemplatesRequestSchema, ReadResourceRequestSchema, SubscribeRequestSchema, UnsubscribeRequestSchema, CallToolRequestSchema, ListToolsRequestSchema, GetTaskRequestSchema, GetTaskPayloadRequestSchema, ListTasksRequestSchema, CancelTaskRequestSchema]),
    ClientNotificationSchema: $e([CancelledNotificationSchema, ProgressNotificationSchema, InitializedNotificationSchema, RootsListChangedNotificationSchema, TaskStatusNotificationSchema]),
    ClientResultSchema: $e([EmptyResultSchema, CreateMessageResultSchema, CreateMessageResultWithToolsSchema, ElicitResultSchema, ListRootsResultSchema, GetTaskResultSchema, ListTasksResultSchema, CreateTaskResultSchema]),
    ServerRequestSchema: $e([PingRequestSchema, CreateMessageRequestSchema, ElicitRequestSchema, ListRootsRequestSchema, GetTaskRequestSchema, GetTaskPayloadRequestSchema, ListTasksRequestSchema, CancelTaskRequestSchema]),
    ServerNotificationSchema: $e([CancelledNotificationSchema, ProgressNotificationSchema, LoggingMessageNotificationSchema, ResourceUpdatedNotificationSchema, ResourceListChangedNotificationSchema, ToolListChangedNotificationSchema, PromptListChangedNotificationSchema, TaskStatusNotificationSchema, ElicitationCompleteNotificationSchema]),
    ServerResultSchema: $e([EmptyResultSchema, InitializeResultSchema, CompleteResultSchema, GetPromptResultSchema, ListPromptsResultSchema, ListResourcesResultSchema, ListResourceTemplatesResultSchema, ReadResourceResultSchema, CallToolResultSchema, ListToolsResultSchema, GetTaskResultSchema, ListTasksResultSchema, CreateTaskResultSchema]),
    CallToolResultWireSchema: ae().superRefine((ye, vo) => {
      if (typeof ye !== "object" || ye === null || Array.isArray(ye) || ye.content !== void 0) return;
      for (let _s of Gs) if (_s in ye) {
        vo.addIssue({
          code: "custom",
          message: `content is required when the body carries '${_s}' \u2014 another result family cannot default into an empty tools/call success`
        });
        return;
      }
    }).transform(Po).pipe(CallToolResultSchema)
  };
}
var zo;
function Ws() {
  return zo ??= To();
}
function Ys(e) {
  return e.type !== "object";
}
var Co = new Set(["const", "enum", "default", "examples"]),
  ko = new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas"]);
function Io(result) {
  let $schema = typeof result.$schema === "string" ? result.$schema : void 0;
  if (result.$id !== void 0) return {
    ...($schema !== void 0 && {
      $schema: $schema
    }),
    type: "object",
    properties: {
      result: result
    },
    required: ["result"]
  };
  let r = (s, a) => {
    if (Array.isArray(s)) return s.map(item => r(item, !1));
    if (s === null || typeof s !== "object") return s;
    if (!a && s.$id !== void 0) return s;
    let n = {};
    for (let [i, l] of Object.entries(s)) if (a) n[i] = r(l, !1);else if ((i === "$ref" || i === "$dynamicRef") && typeof l === "string") n[i] = l === "#" ? "#/properties/result" : l.startsWith("#/") ? `#/properties/result${l.slice(1)}` : l;else if (Co.has(i)) n[i] = l;else if (ko.has(i)) n[i] = r(l, !0);else n[i] = r(l, !1);
    return n;
  };
  return {
    ...($schema !== void 0 && {
      $schema: $schema
    }),
    type: "object",
    properties: {
      result: r(result, !1)
    },
    required: ["result"]
  };
}
var Xs = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "tasks/get": null,
    "tasks/result": null,
    "tasks/list": null,
    "tasks/cancel": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null
  },
  Zs = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/initialized": null,
    "notifications/roots/list_changed": null,
    "notifications/tasks/status": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/elicitation/complete": null
  },
  qo = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null
  },
  gr;
function Yr() {
  if (gr) return gr;
  let e = Ws();
  return gr = {
    requestSchemas: {
      ping: e.PingRequestSchema,
      initialize: e.InitializeRequestSchema,
      "completion/complete": e.CompleteRequestSchema,
      "logging/setLevel": e.SetLevelRequestSchema,
      "prompts/get": e.GetPromptRequestSchema,
      "prompts/list": e.ListPromptsRequestSchema,
      "resources/list": e.ListResourcesRequestSchema,
      "resources/templates/list": e.ListResourceTemplatesRequestSchema,
      "resources/read": e.ReadResourceRequestSchema,
      "resources/subscribe": e.SubscribeRequestSchema,
      "resources/unsubscribe": e.UnsubscribeRequestSchema,
      "tools/call": e.CallToolRequestSchema,
      "tools/list": e.ListToolsRequestSchema,
      "tasks/get": e.GetTaskRequestSchema,
      "tasks/result": e.GetTaskPayloadRequestSchema,
      "tasks/list": e.ListTasksRequestSchema,
      "tasks/cancel": e.CancelTaskRequestSchema,
      "sampling/createMessage": e.CreateMessageRequestSchema,
      "elicitation/create": e.ElicitRequestSchema,
      "roots/list": e.ListRootsRequestSchema
    },
    notificationSchemas: {
      "notifications/cancelled": e.CancelledNotificationSchema,
      "notifications/progress": e.ProgressNotificationSchema,
      "notifications/initialized": e.InitializedNotificationSchema,
      "notifications/roots/list_changed": e.RootsListChangedNotificationSchema,
      "notifications/tasks/status": e.TaskStatusNotificationSchema,
      "notifications/message": e.LoggingMessageNotificationSchema,
      "notifications/resources/updated": e.ResourceUpdatedNotificationSchema,
      "notifications/resources/list_changed": e.ResourceListChangedNotificationSchema,
      "notifications/tools/list_changed": e.ToolListChangedNotificationSchema,
      "notifications/prompts/list_changed": e.PromptListChangedNotificationSchema,
      "notifications/elicitation/complete": e.ElicitationCompleteNotificationSchema
    },
    resultSchemas: {
      ping: e.EmptyResultSchema,
      initialize: e.InitializeResultSchema,
      "completion/complete": e.CompleteResultSchema,
      "logging/setLevel": e.EmptyResultSchema,
      "prompts/get": e.GetPromptResultSchema,
      "prompts/list": e.ListPromptsResultSchema,
      "resources/list": e.ListResourcesResultSchema,
      "resources/templates/list": e.ListResourceTemplatesResultSchema,
      "resources/read": e.ReadResourceResultSchema,
      "resources/subscribe": e.EmptyResultSchema,
      "resources/unsubscribe": e.EmptyResultSchema,
      "tools/call": e.CallToolResultWireSchema,
      "tools/list": e.ListToolsResultSchema,
      "sampling/createMessage": e.CreateMessageResultWithToolsSchema,
      "elicitation/create": e.ElicitResultSchema,
      "roots/list": e.ListRootsResultSchema
    }
  }, gr;
}
function hasRequestMethod(e) {
  return Object.prototype.hasOwnProperty.call(Xs, e);
}
function hasNotificationMethod(e) {
  return Object.prototype.hasOwnProperty.call(Zs, e);
}
function Oo(e) {
  return Object.prototype.hasOwnProperty.call(qo, e);
}
function No(e) {
  return Oo(e) ? Yr().resultSchemas[e] : void 0;
}
function Mo(e) {
  return hasRequestMethod(e) ? Yr().requestSchemas[e] : void 0;
}
function jo(e) {
  return hasNotificationMethod(e) ? Yr().notificationSchemas[e] : void 0;
}
var El = Object.keys(Xs),
  Pl = Object.keys(Zs);
function xr(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function _r(e, t) {
  if (e === void 0) return {
    ok: !1,
    reason: "not-in-era"
  };
  let r = e.safeParse(t);
  return r.success ? {
    ok: !0,
    value: r.data
  } : {
    ok: !1,
    reason: "invalid",
    message: String(r.error)
  };
}
var qs = {
  ok: !1,
  reason: "not-in-era"
};
function Os(e) {
  return xr(e) && xr(e.outputSchema) && Ys(e.outputSchema);
}
function Ms(e) {
  return e;
}
var Xr = {
  era: "2025-11-25",
  hasRequestMethod: hasRequestMethod,
  hasNotificationMethod: hasNotificationMethod,
  validateRequest: (e, t) => _r(Mo(e), t),
  validateResult: (e, t) => _r(No(e), t),
  validateNotification: (e, t) => _r(jo(e), t),
  hasInputRequestMethod: () => !1,
  validateInputRequest: () => qs,
  validateInputResponse: () => qs,
  samplingResultVariant: (e, t) => {
    let r = Ws();
    return _r(e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
  },
  outboundEnvelope: e => {
    return;
  },
  validateEnvelopeMeta: e => [],
  projectCallToolResult(e, t) {
    let r = Js(e),
      s = r.structuredContent;
    if (s === void 0) return r;
    let a = typeof s !== "object" || s === null || Array.isArray(s),
      n = t !== void 0 && Ys(t);
    if (!a && !n) return r;
    return {
      ...r,
      structuredContent: {
        result: s
      }
    };
  },
  decodeResult(e, t) {
    if (xr(t) && "resultType" in t) {
      let r = {
        ...t
      };
      return delete r.resultType, {
        kind: "complete",
        result: Ms(r)
      };
    }
    return {
      kind: "complete",
      result: Ms(t)
    };
  },
  encodeResult(e, t) {
    if (e !== "tools/list") return t;
    let tools = t.tools;
    if (!Array.isArray(tools) || !tools.some(item => Os(item))) return t;
    return {
      ...t,
      tools: tools.map(item => Os(item) ? {
        ...item,
        outputSchema: Io(item.outputSchema)
      } : item)
    };
  },
  encodeErrorCode: e => e === -32002 ? -32602 : e,
  checkInboundEnvelope: e => {
    return;
  }
};
function Ao() {
  let JSONValueSchema_2 = vC(() => $e([o(), E(), M(), uf(), fe(o(), JSONValueSchema_2), C(JSONValueSchema_2)])),
    JSONObjectSchema_2 = fe(o(), JSONValueSchema_2),
    r = $e([o(), E().int()]),
    CursorSchema_2 = o(),
    a = $e([o(), E().int()]),
    n = z(["user", "assistant"]),
    i = z(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
    l = o().refine(he => {
      try {
        return atob(he), !0;
      } catch {
        return !1;
      }
    }, {
      message: "Invalid Base64 string"
    }),
    TaskMetadataSchema_2 = u({
      ttl: E().optional()
    }),
    RelatedTaskMetadataSchema_2 = u({
      taskId: o()
    }),
    RequestMetaSchema_2 = ut({
      progressToken: r.optional(),
      "io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema_2.optional()
    }),
    BaseRequestParamsSchema_2 = u({
      _meta: RequestMetaSchema_2.optional()
    }),
    TaskAugmentedRequestParamsSchema_2 = BaseRequestParamsSchema_2.extend({
      task: TaskMetadataSchema_2.optional()
    }),
    NotificationsParamsSchema_2 = u({
      _meta: RequestMetaSchema_2.optional()
    }),
    NotificationSchema_2 = u({
      method: o(),
      params: NotificationsParamsSchema_2.loose().optional()
    }),
    IconSchema_2 = u({
      src: o(),
      mimeType: o().optional(),
      sizes: C(o()).optional(),
      theme: z(["light", "dark"]).optional()
    }),
    IconsSchema_2 = u({
      icons: C(IconSchema_2).optional()
    }),
    BaseMetadataSchema_2 = u({
      name: o(),
      title: o().optional()
    }),
    ImplementationSchema = BaseMetadataSchema_2.extend({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    }),
    p = HJ(u({
      applyDefaults: M().optional()
    }), JSONObjectSchema_2),
    R = Bi(he => {
      if (he && typeof he === "object" && !Array.isArray(he) && Object.keys(he).length === 0) return {
        form: {}
      };
      return he;
    }, HJ(u({
      form: p.optional(),
      url: JSONObjectSchema_2.optional()
    }), JSONObjectSchema_2.optional())),
    ClientTasksCapabilitySchema_2 = ut({
      list: JSONObjectSchema_2.optional(),
      cancel: JSONObjectSchema_2.optional(),
      requests: ut({
        sampling: ut({
          createMessage: JSONObjectSchema_2.optional()
        }).optional(),
        elicitation: ut({
          create: JSONObjectSchema_2.optional()
        }).optional()
      }).optional()
    }),
    ServerTasksCapabilitySchema_2 = ut({
      list: JSONObjectSchema_2.optional(),
      cancel: JSONObjectSchema_2.optional(),
      requests: ut({
        tools: ut({
          call: JSONObjectSchema_2.optional()
        }).optional()
      }).optional()
    }),
    ClientCapabilitiesSchema = u({
      experimental: fe(o(), JSONObjectSchema_2).optional(),
      sampling: u({
        context: JSONObjectSchema_2.optional(),
        tools: JSONObjectSchema_2.optional()
      }).optional(),
      elicitation: R.optional(),
      roots: u({
        listChanged: M().optional()
      }).optional(),
      tasks: ClientTasksCapabilitySchema_2.optional(),
      extensions: fe(o(), JSONObjectSchema_2).optional()
    }),
    ServerCapabilitiesSchema = u({
      experimental: fe(o(), JSONObjectSchema_2).optional(),
      logging: JSONObjectSchema_2.optional(),
      completions: JSONObjectSchema_2.optional(),
      prompts: u({
        listChanged: M().optional()
      }).optional(),
      resources: u({
        subscribe: M().optional(),
        listChanged: M().optional()
      }).optional(),
      tools: u({
        listChanged: M().optional()
      }).optional(),
      tasks: ServerTasksCapabilitySchema_2.optional(),
      extensions: fe(o(), JSONObjectSchema_2).optional()
    }),
    ProgressSchema_2 = u({
      progress: E(),
      total: Bs(E()),
      message: Bs(o())
    }),
    K = u({
      ...NotificationsParamsSchema_2.shape,
      ...ProgressSchema_2.shape,
      progressToken: r
    }),
    ProgressNotificationSchema_2 = NotificationSchema_2.extend({
      method: A("notifications/progress"),
      params: K
    }),
    H = NotificationsParamsSchema_2.extend({
      level: i,
      logger: o().optional(),
      data: ae()
    }),
    LoggingMessageNotificationSchema_2 = NotificationSchema_2.extend({
      method: A("notifications/message"),
      params: H
    }),
    ResourceContentsSchema_2 = u({
      uri: o(),
      mimeType: Bs(o()),
      _meta: fe(o(), ae()).optional()
    }),
    TextResourceContentsSchema_2 = ResourceContentsSchema_2.extend({
      text: o()
    }),
    BlobResourceContentsSchema_2 = ResourceContentsSchema_2.extend({
      blob: l
    }),
    AnnotationsSchema_2 = u({
      audience: C(n).optional(),
      priority: E().min(0).max(1).optional(),
      lastModified: rj({
        offset: !0
      }).optional()
    }),
    ResourceSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      uri: o(),
      description: Bs(o()),
      mimeType: Bs(o()),
      size: Bs(E()),
      annotations: AnnotationsSchema_2.optional(),
      _meta: Bs(ut({}))
    }),
    ResourceTemplateSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      uriTemplate: o(),
      description: Bs(o()),
      mimeType: Bs(o()),
      annotations: AnnotationsSchema_2.optional(),
      _meta: Bs(ut({}))
    }),
    ResourceListChangedNotificationSchema_2 = NotificationSchema_2.extend({
      method: A("notifications/resources/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    }),
    D = NotificationsParamsSchema_2.extend({
      uri: o()
    }),
    ResourceUpdatedNotificationSchema_2 = NotificationSchema_2.extend({
      method: A("notifications/resources/updated"),
      params: D
    }),
    PromptArgumentSchema_2 = u({
      name: o(),
      description: Bs(o()),
      required: Bs(M())
    }),
    PromptSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      description: Bs(o()),
      arguments: Bs(C(PromptArgumentSchema_2)),
      _meta: Bs(ut({}))
    }),
    PromptListChangedNotificationSchema_2 = NotificationSchema_2.extend({
      method: A("notifications/prompts/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    }),
    TextContentSchema_2 = u({
      type: A("text"),
      text: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ImageContentSchema_2 = u({
      type: A("image"),
      data: l,
      mimeType: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    AudioContentSchema_2 = u({
      type: A("audio"),
      data: l,
      mimeType: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ToolUseContentSchema_2 = u({
      type: A("tool_use"),
      name: o(),
      id: o(),
      input: fe(o(), ae()),
      _meta: fe(o(), ae()).optional()
    }),
    EmbeddedResourceSchema_2 = u({
      type: A("resource"),
      resource: $e([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ResourceLinkSchema_2 = ResourceSchema_2.extend({
      type: A("resource_link")
    }),
    q = $e([TextContentSchema_2, ImageContentSchema_2, AudioContentSchema_2, ResourceLinkSchema_2, EmbeddedResourceSchema_2]),
    PromptMessageSchema_2 = u({
      role: n,
      content: q
    }),
    ToolAnnotationsSchema_2 = u({
      title: o().optional(),
      readOnlyHint: M().optional(),
      destructiveHint: M().optional(),
      idempotentHint: M().optional(),
      openWorldHint: M().optional()
    }),
    ToolListChangedNotificationSchema_2 = NotificationSchema_2.extend({
      method: A("notifications/tools/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    }),
    ModelHintSchema_2 = u({
      name: o().optional()
    }),
    ModelPreferencesSchema_2 = u({
      hints: C(ModelHintSchema_2).optional(),
      costPriority: E().min(0).max(1).optional(),
      speedPriority: E().min(0).max(1).optional(),
      intelligencePriority: E().min(0).max(1).optional()
    }),
    ToolChoiceSchema_2 = u({
      mode: z(["auto", "required", "none"]).optional()
    }),
    BooleanSchemaSchema_2 = u({
      type: A("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: M().optional()
    }),
    StringSchemaSchema_2 = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: E().optional(),
      maxLength: E().optional(),
      format: z(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    }),
    NumberSchemaSchema_2 = u({
      type: z(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: E().optional(),
      maximum: E().optional(),
      default: E().optional()
    }),
    UntitledSingleSelectEnumSchemaSchema_2 = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      default: o().optional()
    }),
    TitledSingleSelectEnumSchemaSchema_2 = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: C(u({
        const: o(),
        title: o()
      })),
      default: o().optional()
    }),
    LegacyTitledEnumSchemaSchema_2 = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      enumNames: C(o()).optional(),
      default: o().optional()
    }),
    SingleSelectEnumSchemaSchema_2 = $e([UntitledSingleSelectEnumSchemaSchema_2, TitledSingleSelectEnumSchemaSchema_2]),
    UntitledMultiSelectEnumSchemaSchema_2 = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: E().optional(),
      maxItems: E().optional(),
      items: u({
        type: A("string"),
        enum: C(o())
      }),
      default: C(o()).optional()
    }),
    TitledMultiSelectEnumSchemaSchema_2 = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: E().optional(),
      maxItems: E().optional(),
      items: u({
        anyOf: C(u({
          const: o(),
          title: o()
        }))
      }),
      default: C(o()).optional()
    }),
    MultiSelectEnumSchemaSchema_2 = $e([UntitledMultiSelectEnumSchemaSchema_2, TitledMultiSelectEnumSchemaSchema_2]),
    EnumSchemaSchema_2 = $e([LegacyTitledEnumSchemaSchema_2, SingleSelectEnumSchemaSchema_2, MultiSelectEnumSchemaSchema_2]),
    PrimitiveSchemaDefinitionSchema_2 = $e([EnumSchemaSchema_2, BooleanSchemaSchema_2, StringSchemaSchema_2, NumberSchemaSchema_2]),
    ElicitRequestFormParamsSchema_2 = TaskAugmentedRequestParamsSchema_2.extend({
      mode: A("form").optional(),
      message: o(),
      requestedSchema: u({
        type: A("object"),
        properties: fe(o(), PrimitiveSchemaDefinitionSchema_2),
        required: C(o()).optional()
      }).catchall(ae())
    }),
    ResourceTemplateReferenceSchema_2 = u({
      type: A("ref/resource"),
      uri: o()
    }),
    PromptReferenceSchema_2 = u({
      type: A("ref/prompt"),
      name: o()
    }),
    RootSchema_2 = u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: fe(o(), ae()).optional()
    }),
    shape = ClientCapabilitiesSchema.shape,
    ClientCapabilities2026Schema = u({
      experimental: shape.experimental,
      sampling: shape.sampling,
      elicitation: shape.elicitation,
      roots: shape.roots,
      extensions: shape.extensions
    }),
    shape_2 = ServerCapabilitiesSchema.shape,
    tt = u({
      experimental: shape_2.experimental,
      logging: shape_2.logging,
      completions: shape_2.completions,
      prompts: shape_2.prompts,
      resources: shape_2.resources,
      tools: shape_2.tools,
      extensions: shape_2.extensions
    }),
    rt = ut({
      progressToken: r.optional(),
      [s0e]: o(),
      [rEt]: ImplementationSchema.optional(),
      [Ret]: ClientCapabilities2026Schema,
      [oEt]: i.optional()
    }),
    ToolSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      description: o().optional(),
      inputSchema: ut({
        $schema: o().optional(),
        type: A("object")
      }),
      outputSchema: ut({
        $schema: o().optional()
      }).optional(),
      annotations: ToolAnnotationsSchema_2.optional(),
      _meta: fe(o(), ae()).optional()
    }),
    ToolResultContentSchema_2 = u({
      type: A("tool_result"),
      toolUseId: o(),
      content: C(q),
      structuredContent: ae().optional(),
      isError: M().optional(),
      _meta: fe(o(), ae()).optional()
    }),
    SamplingMessageContentBlockSchema_2 = $e([TextContentSchema_2, ImageContentSchema_2, AudioContentSchema_2, ToolUseContentSchema_2, ToolResultContentSchema_2]),
    SamplingMessageSchema_2 = u({
      role: n,
      content: $e([SamplingMessageContentBlockSchema_2, C(SamplingMessageContentBlockSchema_2)]),
      _meta: fe(o(), ae()).optional()
    }),
    ResultTypeSchema = o(),
    ResultMetaSchema = ut({
      [i0e]: ImplementationSchema.optional().catch(void 0)
    }),
    _meta = ResultMetaSchema.optional();
  function ve(he) {
    return ut({
      _meta: _meta,
      resultType: ResultTypeSchema.default("complete"),
      ...he
    });
  }
  let ResultSchema_2 = ve({}),
    PaginatedResultSchema_2 = ve({
      nextCursor: CursorSchema_2.optional()
    }),
    CallToolResultSchema_2 = ve({
      content: C(q),
      structuredContent: ae().optional(),
      isError: M().optional()
    }),
    ListToolsResultSchema_2 = ve({
      ttlMs: E().int().min(0),
      cacheScope: z(["public", "private"]),
      tools: C(ToolSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    ListPromptsResultSchema_2 = ve({
      ttlMs: E().int().min(0),
      cacheScope: z(["public", "private"]),
      prompts: C(PromptSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    GetPromptResultSchema_2 = ve({
      description: o().optional(),
      messages: C(PromptMessageSchema_2)
    }),
    ListResourcesResultSchema_2 = ve({
      ttlMs: E().int().min(0),
      cacheScope: z(["public", "private"]),
      resources: C(ResourceSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    ListResourceTemplatesResultSchema_2 = ve({
      ttlMs: E().int().min(0),
      cacheScope: z(["public", "private"]),
      resourceTemplates: C(ResourceTemplateSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    ReadResourceResultSchema_2 = ve({
      ttlMs: E().int().min(0),
      cacheScope: z(["public", "private"]),
      contents: C($e([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]))
    }),
    CompleteResultSchema_2 = ve({
      completion: u({
        values: C(o()).max(100),
        total: E().int().optional(),
        hasMore: M().optional()
      }).loose()
    }),
    CacheableResultSchema = ve({
      ttlMs: E().int().min(0),
      cacheScope: z(["public", "private"])
    }),
    DiscoverResultSchema = ve({
      ttlMs: E().int().min(0).catch(0),
      cacheScope: z(["public", "private"]).catch("private"),
      supportedVersions: C(o()),
      capabilities: tt,
      instructions: o().optional()
    }),
    Ve = u({
      messages: C(SamplingMessageSchema_2),
      modelPreferences: ModelPreferencesSchema_2.optional(),
      systemPrompt: o().optional(),
      includeContext: z(["none", "thisServer", "allServers"]).optional(),
      temperature: E().optional(),
      maxTokens: E().int(),
      stopSequences: C(o()).optional(),
      metadata: JSONObjectSchema_2.optional(),
      tools: C(ToolSchema_2).optional(),
      toolChoice: ToolChoiceSchema_2.optional()
    }),
    CreateMessageRequestSchema_2 = u({
      method: A("sampling/createMessage"),
      params: Ve
    }),
    ListRootsRequestSchema_2 = u({
      method: A("roots/list"),
      params: u({
        _meta: fe(o(), ae()).optional()
      }).optional()
    }),
    CreateMessageResultSchema_2 = u({
      ...SamplingMessageSchema_2.shape,
      model: o(),
      stopReason: o().optional()
    }),
    ListRootsResultSchema_2 = u({
      roots: C(RootSchema_2)
    }),
    ElicitResultSchema_2 = u({
      action: z(["accept", "decline", "cancel"]),
      content: fe(o(), $e([o(), E(), M(), C(o())])).optional()
    }),
    ElicitRequestURLParamsSchema_2 = u({
      mode: A("url"),
      message: o(),
      url: o().url()
    }),
    qt = $e([ElicitRequestFormParamsSchema_2, ElicitRequestURLParamsSchema_2]),
    ElicitRequestSchema_2 = u({
      method: A("elicitation/create"),
      params: qt
    }),
    InputRequestSchema = $e([CreateMessageRequestSchema_2, ListRootsRequestSchema_2, ElicitRequestSchema_2]),
    InputResponseSchema = $e([CreateMessageResultSchema_2, ListRootsResultSchema_2, ElicitResultSchema_2]),
    InputRequestsSchema = fe(o(), InputRequestSchema),
    InputResponsesSchema = fe(o(), InputResponseSchema),
    InputRequiredResultSchema = ve({
      inputRequests: InputRequestsSchema.optional(),
      requestState: o().optional()
    }),
    Ye = {
      inputResponses: InputResponsesSchema.optional(),
      requestState: o().optional()
    },
    InputResponseRequestParamsSchema = u({
      _meta: rt,
      ...Ye
    }),
    tr = ut({
      progressToken: r.optional()
    });
  function Ee(he, Ze) {
    return u({
      method: A(he),
      params: u({
        _meta: rt,
        ...Ze
      })
    });
  }
  function Pe(he, Ze) {
    return u({
      method: A(he),
      params: u({
        _meta: tr.optional(),
        ...Ze
      }).optional()
    });
  }
  let Lt = {
      name: o(),
      arguments: fe(o(), ae()).optional(),
      ...Ye
    },
    Ie = {
      cursor: CursorSchema_2.optional()
    },
    CallToolRequestSchema_2 = Ee("tools/call", Lt),
    ListToolsRequestSchema_2 = Ee("tools/list", Ie),
    ListPromptsRequestSchema_2 = Ee("prompts/list", Ie),
    GetPromptRequestSchema_2 = Ee("prompts/get", {
      name: o(),
      arguments: fe(o(), o()).optional(),
      ...Ye
    }),
    ListResourcesRequestSchema_2 = Ee("resources/list", Ie),
    ListResourceTemplatesRequestSchema_2 = Ee("resources/templates/list", Ie),
    ReadResourceRequestSchema_2 = Ee("resources/read", {
      uri: o(),
      ...Ye
    }),
    Ut = {
      ref: $e([PromptReferenceSchema_2, ResourceTemplateReferenceSchema_2]),
      argument: u({
        name: o(),
        value: o()
      }),
      context: u({
        arguments: fe(o(), o()).optional()
      }).optional()
    },
    CompleteRequestSchema_2 = Ee("completion/complete", Ut),
    DiscoverRequestSchema = Ee("server/discover", {}),
    ct = u({
      toolsListChanged: M().optional(),
      promptsListChanged: M().optional(),
      resourcesListChanged: M().optional(),
      resourceSubscriptions: C(o()).optional()
    }),
    Dt = {
      notifications: ct
    },
    SubscriptionsListenRequestSchema = Ee("subscriptions/listen", Dt),
    hr = ResultMetaSchema.extend({
      "io.modelcontextprotocol/subscriptionId": a
    }),
    SubscriptionsListenResultSchema = ut({
      _meta: hr,
      resultType: ResultTypeSchema.default("complete")
    }),
    dispatchRequestSchemas = {
      "tools/call": Pe("tools/call", Lt),
      "tools/list": Pe("tools/list", Ie),
      "prompts/get": Pe("prompts/get", {
        name: o(),
        arguments: fe(o(), o()).optional()
      }),
      "prompts/list": Pe("prompts/list", Ie),
      "resources/list": Pe("resources/list", Ie),
      "resources/templates/list": Pe("resources/templates/list", Ie),
      "resources/read": Pe("resources/read", {
        uri: o()
      }),
      "completion/complete": Pe("completion/complete", Ut),
      "server/discover": Pe("server/discover", {}),
      "subscriptions/listen": Pe("subscriptions/listen", Dt)
    };
  function Re(he) {
    return ut({
      _meta: _meta,
      ...he
    });
  }
  let dispatchResultSchemas = {
      "tools/call": Re({
        content: C(q),
        structuredContent: ae().optional(),
        isError: M().optional()
      }),
      "tools/list": Re({
        ttlMs: E().int().min(0),
        cacheScope: z(["public", "private"]),
        tools: C(ToolSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "prompts/get": Re({
        description: o().optional(),
        messages: C(PromptMessageSchema_2)
      }),
      "prompts/list": Re({
        ttlMs: E().int().min(0),
        cacheScope: z(["public", "private"]),
        prompts: C(PromptSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "resources/list": Re({
        ttlMs: E().int().min(0),
        cacheScope: z(["public", "private"]),
        resources: C(ResourceSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "resources/templates/list": Re({
        ttlMs: E().int().min(0),
        cacheScope: z(["public", "private"]),
        resourceTemplates: C(ResourceTemplateSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "resources/read": Re({
        ttlMs: E().int().min(0),
        cacheScope: z(["public", "private"]),
        contents: C($e([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]))
      }),
      "completion/complete": Re({
        completion: u({
          values: C(o()).max(100),
          total: E().int().optional(),
          hasMore: M().optional()
        }).loose()
      }),
      "server/discover": Re({
        ttlMs: E().int().min(0).catch(0),
        cacheScope: z(["public", "private"]).catch("private"),
        supportedVersions: C(o()),
        capabilities: tt,
        instructions: o().optional()
      }),
      "subscriptions/listen": Re({})
    },
    NotificationMetaSchema = ut({
      "io.modelcontextprotocol/subscriptionId": a.optional()
    }),
    SubscriptionsAcknowledgedNotificationSchema = u({
      method: A("notifications/subscriptions/acknowledged"),
      params: u({
        _meta: NotificationMetaSchema.optional(),
        notifications: ct
      })
    }),
    dt = u({
      _meta: NotificationMetaSchema.optional(),
      requestId: a,
      reason: o().optional()
    }),
    CancelledNotificationSchema_2 = u({
      method: A("notifications/cancelled"),
      params: dt
    }),
    notificationSchemas2026 = {
      "notifications/cancelled": CancelledNotificationSchema_2,
      "notifications/progress": ProgressNotificationSchema_2,
      "notifications/message": LoggingMessageNotificationSchema_2,
      "notifications/resources/updated": ResourceUpdatedNotificationSchema_2,
      "notifications/resources/list_changed": ResourceListChangedNotificationSchema_2,
      "notifications/tools/list_changed": ToolListChangedNotificationSchema_2,
      "notifications/prompts/list_changed": PromptListChangedNotificationSchema_2,
      "notifications/subscriptions/acknowledged": SubscriptionsAcknowledgedNotificationSchema
    },
    we = result_2 => u({
      jsonrpc: A("2.0"),
      id: $e([o(), E().int()]),
      result: result_2
    }).strict();
  return {
    JSONValueSchema: JSONValueSchema_2,
    JSONObjectSchema: JSONObjectSchema_2,
    ProgressTokenSchema: r,
    CursorSchema: CursorSchema_2,
    RequestIdSchema: a,
    RoleSchema: n,
    LoggingLevelSchema: i,
    TaskMetadataSchema: TaskMetadataSchema_2,
    RelatedTaskMetadataSchema: RelatedTaskMetadataSchema_2,
    RequestMetaSchema: RequestMetaSchema_2,
    BaseRequestParamsSchema: BaseRequestParamsSchema_2,
    TaskAugmentedRequestParamsSchema: TaskAugmentedRequestParamsSchema_2,
    NotificationsParamsSchema: NotificationsParamsSchema_2,
    NotificationSchema: NotificationSchema_2,
    IconSchema: IconSchema_2,
    IconsSchema: IconsSchema_2,
    BaseMetadataSchema: BaseMetadataSchema_2,
    ImplementationSchema: ImplementationSchema,
    ClientTasksCapabilitySchema: ClientTasksCapabilitySchema_2,
    ServerTasksCapabilitySchema: ServerTasksCapabilitySchema_2,
    ClientCapabilitiesSchema: ClientCapabilitiesSchema,
    ServerCapabilitiesSchema: ServerCapabilitiesSchema,
    ProgressSchema: ProgressSchema_2,
    ProgressNotificationParamsSchema: K,
    ProgressNotificationSchema: ProgressNotificationSchema_2,
    LoggingMessageNotificationParamsSchema: H,
    LoggingMessageNotificationSchema: LoggingMessageNotificationSchema_2,
    ResourceContentsSchema: ResourceContentsSchema_2,
    TextResourceContentsSchema: TextResourceContentsSchema_2,
    BlobResourceContentsSchema: BlobResourceContentsSchema_2,
    AnnotationsSchema: AnnotationsSchema_2,
    ResourceSchema: ResourceSchema_2,
    ResourceTemplateSchema: ResourceTemplateSchema_2,
    ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema_2,
    ResourceUpdatedNotificationParamsSchema: D,
    ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema_2,
    PromptArgumentSchema: PromptArgumentSchema_2,
    PromptSchema: PromptSchema_2,
    PromptListChangedNotificationSchema: PromptListChangedNotificationSchema_2,
    TextContentSchema: TextContentSchema_2,
    ImageContentSchema: ImageContentSchema_2,
    AudioContentSchema: AudioContentSchema_2,
    ToolUseContentSchema: ToolUseContentSchema_2,
    EmbeddedResourceSchema: EmbeddedResourceSchema_2,
    ResourceLinkSchema: ResourceLinkSchema_2,
    ContentBlockSchema: q,
    PromptMessageSchema: PromptMessageSchema_2,
    ToolAnnotationsSchema: ToolAnnotationsSchema_2,
    ToolListChangedNotificationSchema: ToolListChangedNotificationSchema_2,
    ModelHintSchema: ModelHintSchema_2,
    ModelPreferencesSchema: ModelPreferencesSchema_2,
    ToolChoiceSchema: ToolChoiceSchema_2,
    BooleanSchemaSchema: BooleanSchemaSchema_2,
    StringSchemaSchema: StringSchemaSchema_2,
    NumberSchemaSchema: NumberSchemaSchema_2,
    UntitledSingleSelectEnumSchemaSchema: UntitledSingleSelectEnumSchemaSchema_2,
    TitledSingleSelectEnumSchemaSchema: TitledSingleSelectEnumSchemaSchema_2,
    LegacyTitledEnumSchemaSchema: LegacyTitledEnumSchemaSchema_2,
    SingleSelectEnumSchemaSchema: SingleSelectEnumSchemaSchema_2,
    UntitledMultiSelectEnumSchemaSchema: UntitledMultiSelectEnumSchemaSchema_2,
    TitledMultiSelectEnumSchemaSchema: TitledMultiSelectEnumSchemaSchema_2,
    MultiSelectEnumSchemaSchema: MultiSelectEnumSchemaSchema_2,
    EnumSchemaSchema: EnumSchemaSchema_2,
    PrimitiveSchemaDefinitionSchema: PrimitiveSchemaDefinitionSchema_2,
    ElicitRequestFormParamsSchema: ElicitRequestFormParamsSchema_2,
    ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema_2,
    PromptReferenceSchema: PromptReferenceSchema_2,
    RootSchema: RootSchema_2,
    ClientCapabilities2026Schema: ClientCapabilities2026Schema,
    ServerCapabilities2026Schema: tt,
    RequestMetaEnvelopeSchema: rt,
    ToolSchema: ToolSchema_2,
    ToolResultContentSchema: ToolResultContentSchema_2,
    SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema_2,
    SamplingMessageSchema: SamplingMessageSchema_2,
    ResultTypeSchema: ResultTypeSchema,
    ResultMetaSchema: ResultMetaSchema,
    ResultSchema: ResultSchema_2,
    PaginatedResultSchema: PaginatedResultSchema_2,
    CallToolResultSchema: CallToolResultSchema_2,
    ListToolsResultSchema: ListToolsResultSchema_2,
    ListPromptsResultSchema: ListPromptsResultSchema_2,
    GetPromptResultSchema: GetPromptResultSchema_2,
    ListResourcesResultSchema: ListResourcesResultSchema_2,
    ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema_2,
    ReadResourceResultSchema: ReadResourceResultSchema_2,
    CompleteResultSchema: CompleteResultSchema_2,
    CacheableResultSchema: CacheableResultSchema,
    DiscoverResultSchema: DiscoverResultSchema,
    CreateMessageRequestParamsSchema: Ve,
    CreateMessageRequestSchema: CreateMessageRequestSchema_2,
    ListRootsRequestSchema: ListRootsRequestSchema_2,
    CreateMessageResultSchema: CreateMessageResultSchema_2,
    ListRootsResultSchema: ListRootsResultSchema_2,
    ElicitResultSchema: ElicitResultSchema_2,
    ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema_2,
    ElicitRequestParamsSchema: qt,
    ElicitRequestSchema: ElicitRequestSchema_2,
    InputRequestSchema: InputRequestSchema,
    InputResponseSchema: InputResponseSchema,
    InputRequestsSchema: InputRequestsSchema,
    InputResponsesSchema: InputResponsesSchema,
    InputRequiredResultSchema: InputRequiredResultSchema,
    InputResponseRequestParamsSchema: InputResponseRequestParamsSchema,
    CallToolRequestSchema: CallToolRequestSchema_2,
    ListToolsRequestSchema: ListToolsRequestSchema_2,
    ListPromptsRequestSchema: ListPromptsRequestSchema_2,
    GetPromptRequestSchema: GetPromptRequestSchema_2,
    ListResourcesRequestSchema: ListResourcesRequestSchema_2,
    ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema_2,
    ReadResourceRequestSchema: ReadResourceRequestSchema_2,
    CompleteRequestSchema: CompleteRequestSchema_2,
    DiscoverRequestSchema: DiscoverRequestSchema,
    SubscriptionFilterSchema: ct,
    SubscriptionsListenRequestSchema: SubscriptionsListenRequestSchema,
    SubscriptionsListenResultMetaSchema: hr,
    SubscriptionsListenResultSchema: SubscriptionsListenResultSchema,
    dispatchRequestSchemas: dispatchRequestSchemas,
    dispatchResultSchemas: dispatchResultSchemas,
    NotificationMetaSchema: NotificationMetaSchema,
    SubscriptionsAcknowledgedNotificationSchema: SubscriptionsAcknowledgedNotificationSchema,
    CancelledNotificationParamsSchema: dt,
    CancelledNotificationSchema: CancelledNotificationSchema_2,
    notificationSchemas2026: notificationSchemas2026,
    JSONRPCResultResponseSchema: we(ResultSchema_2),
    CallToolResultResponseSchema: we($e([CallToolResultSchema_2, InputRequiredResultSchema])),
    ListToolsResultResponseSchema: we(ListToolsResultSchema_2),
    ListPromptsResultResponseSchema: we(ListPromptsResultSchema_2),
    GetPromptResultResponseSchema: we($e([GetPromptResultSchema_2, InputRequiredResultSchema])),
    ListResourcesResultResponseSchema: we(ListResourcesResultSchema_2),
    ListResourceTemplatesResultResponseSchema: we(ListResourceTemplatesResultSchema_2),
    ReadResourceResultResponseSchema: we($e([ReadResourceResultSchema_2, InputRequiredResultSchema])),
    CompleteResultResponseSchema: we(CompleteResultSchema_2),
    DiscoverResultResponseSchema: we(DiscoverResultSchema)
  };
}
var Lo;
function Qe() {
  return Lo ??= Ao();
}
var Uo = ["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"];
function Do(e) {
  return Uo.includes(e);
}
var Zr = Symbol("modelcontextprotocol.resultCacheHintFallback");
function Vo(e) {
  return e[Zr];
}
function ta(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function ra(e) {
  return e === "public" || e === "private";
}
var Ns = function (e) {
    return e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.ResourceNotFound = -32002] = "ResourceNotFound", e[e.MissingRequiredClientCapability = -32021] = "MissingRequiredClientCapability", e[e.UnsupportedProtocolVersion = -32022] = "UnsupportedProtocolVersion", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired", e;
  }({}),
  fl = class ProtocolError extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ProtocolError"
      });
    }
    static [Symbol.hasInstance](t) {
      return Te(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Te(this, t);
    }
    constructor(t, r, s) {
      super(r);
      this.code = t, this.data = s, this.name = "ProtocolError", et(this, new.target);
    }
    static fromError(t, r, s) {
      if (t === Ns.UrlElicitationRequired && s) {
        let a = s;
        if (a.elicitations) return new aa(a.elicitations, r);
      }
      if (t === Ns.UnsupportedProtocolVersion && s) {
        let a = s;
        if (Array.isArray(a.supported) && typeof a.requested === "string") return new wr({
          supported: a.supported,
          requested: a.requested
        }, r);
      }
      if (t === Ns.InvalidParams || t === Ns.ResourceNotFound) {
        let a = s;
        if (typeof a?.uri === "string" && (t === Ns.ResourceNotFound || Object.keys(a).length === 1)) return new sa(a.uri, r);
      }
      if (t === Ns.MissingRequiredClientCapability && s) {
        let a = s;
        if (a.requiredCapabilities !== null && typeof a.requiredCapabilities === "object" && !Array.isArray(a.requiredCapabilities)) return new oa({
          requiredCapabilities: a.requiredCapabilities
        }, r);
      }
      return new ProtocolError(t, r, s);
    }
  },
  sa = class extends fl {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ResourceNotFoundError"
      });
    }
    constructor(uri, t = `Resource not found: ${uri}`) {
      super(Ns.InvalidParams, t, {
        uri: uri
      });
    }
    get uri() {
      return this.data.uri;
    }
  },
  aa = class extends fl {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UrlElicitationRequiredError"
      });
    }
    constructor(elicitations, t = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
      super(Ns.UrlElicitationRequired, t, {
        elicitations: elicitations
      });
    }
    get elicitations() {
      return this.data?.elicitations ?? [];
    }
  },
  wr = class extends fl {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UnsupportedProtocolVersionError"
      });
    }
    constructor(e, t = `Unsupported protocol version: ${e.requested}`) {
      super(Ns.UnsupportedProtocolVersion, t, e);
    }
    get supported() {
      return this.data.supported;
    }
    get requested() {
      return this.data.requested;
    }
  },
  oa = class extends fl {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.MissingRequiredClientCapabilityError"
      });
    }
    constructor(e, t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`) {
      super(Ns.MissingRequiredClientCapability, t, e);
    }
    get requiredCapabilities() {
      return this.data.requiredCapabilities;
    }
  },
  Fo = 0,
  Ho = "private",
  xo = ["tools/call", "prompts/get", "resources/read"];
function Ko(e, t) {
  let resultType = t.resultType;
  if (resultType === void 0) return {
    ...t,
    resultType: "complete"
  };
  if (resultType === "complete") return t;
  if (xo.includes(e)) return t;
  throw new fl(Ns.InternalError, `Handler for ${e} returned resultType '${String(resultType)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`);
}
function Jo(e, t) {
  let r = Vo(t);
  if (t.resultType !== "complete" || !Do(e)) return r === void 0 ? t : Xo(t);
  let s = t,
    ttlMs = ta(s.ttlMs) ? s.ttlMs : Wo(r),
    cacheScope = ra(s.cacheScope) ? s.cacheScope : Yo(r),
    i = {
      ...s,
      ttlMs: ttlMs,
      cacheScope: cacheScope
    };
  return delete i[Zr], i;
}
function Go(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Bo(e, t) {
  if (t === void 0) return e;
  let _meta_2 = e._meta;
  if (_meta_2 === void 0) return {
    ...e,
    _meta: {
      [i0e]: t
    }
  };
  if (!Go(_meta_2)) return e;
  if (_meta_2[i0e] !== void 0) return e;
  return {
    ...e,
    _meta: {
      ..._meta_2,
      [i0e]: t
    }
  };
}
function Wo(e) {
  return e !== void 0 && ta(e.ttlMs) ? e.ttlMs : Fo;
}
function Yo(e) {
  return e !== void 0 && ra(e.cacheScope) ? e.cacheScope : Ho;
}
function Xo(e) {
  let t = {
    ...e
  };
  return delete t[Zr], t;
}
var Zo = ["elicitation/create", "sampling/createMessage", "roots/list"],
  vr;
function na() {
  if (vr) return vr;
  let e = Qe();
  return vr = {
    request: {
      "elicitation/create": u({
        method: A("elicitation/create"),
        params: e.ElicitRequestParamsSchema
      }),
      "sampling/createMessage": u({
        method: A("sampling/createMessage"),
        params: e.CreateMessageRequestParamsSchema
      }),
      "roots/list": u({
        method: A("roots/list"),
        params: ut({}).optional()
      })
    },
    response: {
      "elicitation/create": e.ElicitResultSchema,
      "sampling/createMessage": e.CreateMessageResultSchema,
      "roots/list": e.ListRootsResultSchema
    }
  }, vr;
}
function ia(e) {
  return Zo.includes(e);
}
function inputRequestSchema(e) {
  return ia(e) ? na().request[e] : void 0;
}
function en(e) {
  return ia(e) ? na().response[e] : void 0;
}
var Qr = {
    "tools/call": null,
    "tools/list": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "completion/complete": null,
    "server/discover": null,
    "subscriptions/listen": null
  },
  ca = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/subscriptions/acknowledged": null
  };
function hasRequestMethod_2(e) {
  return Object.prototype.hasOwnProperty.call(Qr, e);
}
function hasNotificationMethod_2(e) {
  return Object.prototype.hasOwnProperty.call(ca, e);
}
function tn(e) {
  return Object.prototype.hasOwnProperty.call(Qr, e);
}
function rn(e) {
  return hasRequestMethod_2(e) ? Qe().dispatchRequestSchemas[e] : void 0;
}
function sn(e) {
  return tn(e) ? Qe().dispatchResultSchemas[e] : void 0;
}
function an(e) {
  return hasNotificationMethod_2(e) ? Qe().notificationSchemas2026[e] : void 0;
}
var Tl = Object.keys(Qr),
  zl = Object.keys(ca);
function Ht(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Vt(e, t) {
  if (e === void 0) return {
    ok: !1,
    reason: "not-in-era"
  };
  let r = e.safeParse(t);
  return r.success ? {
    ok: !0,
    value: r.data
  } : {
    ok: !1,
    reason: "invalid",
    message: String(r.error)
  };
}
var on = {
    ok: !1,
    reason: "not-in-era"
  },
  nn = [s0e, Ret];
function cn(e, t) {
  let r = t,
    s = !1,
    a = () => {
      if (!s) r = {
        ...r
      }, s = !0;
      return r;
    },
    tools_2 = t.tools;
  if (e === "tools/list" && Array.isArray(tools_2) && tools_2.some(item => Ht(item) && "execution" in item)) a().tools = tools_2.map(item => {
    if (!Ht(item) || !("execution" in item)) return item;
    let c = {
      ...item
    };
    return delete c.execution, c;
  });
  let capabilities = t.capabilities;
  if (Ht(capabilities) && "tasks" in capabilities) {
    let l = {
      ...capabilities
    };
    delete l.tasks, a().capabilities = l;
  }
  return r;
}
var ln = "io.modelcontextprotocol/tasks",
  un = new Set(["working", "input_required", "completed", "failed", "cancelled"]);
function dn(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return !1;
  return typeof e.taskId === "string" && e.taskId.length > 0 && un.has(e.status) && typeof e.createdAt === "string" && typeof e.lastUpdatedAt === "string" && (e.ttlMs === null || typeof e.ttlMs === "number") && (e.pollIntervalMs === void 0 || typeof e.pollIntervalMs === "number");
}
var es = {
    era: "2026-07-28",
    hasRequestMethod: hasRequestMethod_2,
    hasNotificationMethod: hasNotificationMethod_2,
    hasInputRequestMethod: e => inputRequestSchema(e) !== void 0,
    validateRequest: (e, t) => Vt(rn(e), t),
    validateResult: (e, t) => Vt(sn(e), t),
    validateNotification: (e, t) => Vt(an(e), t),
    validateInputRequest: (e, t) => Vt(inputRequestSchema(e), t),
    validateInputResponse: (e, t) => Vt(en(e), t),
    samplingResultVariant: () => on,
    outboundEnvelope(e) {
      return {
        [s0e]: e.protocolVersion,
        [rEt]: e.clientInfo,
        [Ret]: e.clientCapabilities,
        ...(e.logLevel !== void 0 && {
          [oEt]: e.logLevel
        })
      };
    },
    validateEnvelopeMeta(e) {
      let t = [];
      for (let key of nn) if (!(key in e)) t.push({
        key: key,
        problem: "missing"
      });
      let r = Qe().RequestMetaEnvelopeSchema.safeParse(e);
      if (!r.success) for (let s of r.error.issues) {
        let a = s.path.map(String),
          key_2 = a.length > 0 ? a.join(".") : "_meta";
        if (a.length === 1 && t.some(item => item.key === key_2 && item.problem === "missing")) continue;
        t.push({
          key: key_2,
          problem: s.message
        });
      }
      return t;
    },
    projectCallToolResult: e => Js(e),
    inputRequestSchema: inputRequestSchema,
    decodeResult(method, result_3) {
      if (!Ht(result_3)) return {
        kind: "invalid",
        error: new ws(cs.InvalidResult, `Invalid result for ${method}: not an object`, {
          method: method
        })
      };
      let resultType_2 = result_3.resultType;
      if (resultType_2 === void 0) return {
        kind: "invalid",
        error: new ws(cs.InvalidResult, `Invalid result for ${method}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, {
          method: method,
          violation: "missing-resultType"
        })
      };
      if (typeof resultType_2 !== "string") return {
        kind: "invalid",
        error: new ws(cs.InvalidResult, `Invalid result for ${method}: non-string resultType`, {
          method: method,
          resultType: resultType_2
        })
      };
      if (resultType_2 === "input_required") {
        let inputRequests = result_3.inputRequests,
          inputRequests_2 = Ht(inputRequests) ? inputRequests : {},
          requestState = result_3.requestState;
        if (Object.keys(inputRequests_2).length === 0 && typeof requestState !== "string") return {
          kind: "invalid",
          error: new ws(cs.InvalidResult, `Invalid result for ${method}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, {
            method: method,
            violation: "input-required-missing-both"
          })
        };
        return {
          kind: "input_required",
          inputRequests: inputRequests_2,
          ...(typeof requestState === "string" && {
            requestState: requestState
          })
        };
      }
      if (resultType_2 === "task") return {
        kind: "task",
        result: result_3
      };
      if (resultType_2 !== "complete") return {
        kind: "invalid",
        error: new ws(cs.UnsupportedResultType, `Unsupported result type '${resultType_2}' for ${method}`, {
          resultType: resultType_2,
          method: method
        })
      };
      let s = hn(),
        a = Object.hasOwn(s, method) ? s[method] : void 0;
      if (a !== void 0) {
        let i = a.safeParse(result_3);
        if (!i.success) return {
          kind: "invalid",
          error: new ws(cs.InvalidResult, `Invalid result for ${method}: ${i.error}`, {
            method: method
          })
        };
      }
      let result_4 = {
        ...result_3
      };
      return delete result_4.resultType, {
        kind: "complete",
        result: result_4
      };
    },
    encodeResult(e, t, r) {
      return Bo(Jo(e, Ko(e, cn(e, t))), r);
    },
    encodeErrorCode: e => e === -32002 ? -32602 : e,
    checkInboundEnvelope(e) {
      if (e.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
      let t = Qe().RequestMetaEnvelopeSchema.safeParse(e.envelope);
      if (!t.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map(item => item.message).join("; ")}`;
    }
  },
  yr;
function hn() {
  if (yr) return yr;
  let e = Qe();
  return yr = {
    "tools/call": e.CallToolResultSchema,
    "tools/list": e.ListToolsResultSchema,
    "prompts/get": e.GetPromptResultSchema,
    "prompts/list": e.ListPromptsResultSchema,
    "resources/list": e.ListResourcesResultSchema,
    "resources/templates/list": e.ListResourceTemplatesResultSchema,
    "resources/read": e.ReadResourceResultSchema,
    "completion/complete": e.CompleteResultSchema,
    "server/discover": e.DiscoverResultSchema
  }, yr;
}
var $r = "2026-07-28";
function je(e) {
  return e !== void 0 && Ae(e) ? es : Xr;
}
function js(e) {
  if (e.revision !== void 0) return je(e.revision).era;
  return e.era === "modern" ? es.era : Xr.era;
}
function Dr(e) {
  return da.some(item => item.hasRequestMethod(e));
}
function Vr(e) {
  return da.some(item => item.hasNotificationMethod(e));
}
var da = [Xr, es],
  mn = vs({
    AnnotationsSchema: () => d0e,
    AudioContentSchema: () => dEt,
    BaseMetadataSchema: () => a0e,
    BaseRequestParamsSchema: () => DU,
    BlobResourceContentsSchema: () => r8t,
    BooleanSchemaSchema: () => a8t,
    CallToolRequestParamsSchema: () => MPn,
    CallToolRequestSchema: () => DPn,
    CallToolResultSchema: () => p0e,
    CancelTaskRequestSchema: () => xpr,
    CancelTaskResultSchema: () => w2e,
    CancelledNotificationParamsSchema: () => Vxn,
    CancelledNotificationSchema: () => X5t,
    ClientCapabilitiesSchema: () => Xxn,
    ClientNotificationSchema: () => Ipr,
    ClientRequestSchema: () => Ppr,
    ClientResultSchema: () => Opr,
    ClientTasksCapabilitySchema: () => Kxn,
    CompatibilityCallToolResultSchema: () => pEt,
    CompleteRequestParamsSchema: () => sIn,
    CompleteRequestSchema: () => iIn,
    CompleteResultSchema: () => aIn,
    ContentBlockSchema: () => uEt,
    CreateMessageRequestParamsSchema: () => VPn,
    CreateMessageRequestSchema: () => qPn,
    CreateMessageResultSchema: () => KPn,
    CreateMessageResultWithToolsSchema: () => YPn,
    CreateTaskResultSchema: () => vpr,
    CursorSchema: () => z5t,
    DiscoverRequestSchema: () => Qxn,
    DiscoverResultSchema: () => _we,
    ElicitRequestFormParamsSchema: () => gEt,
    ElicitRequestParamsSchema: () => Net,
    ElicitRequestSchema: () => ZPn,
    ElicitRequestURLParamsSchema: () => Let,
    ElicitResultSchema: () => nIn,
    ElicitationCompleteNotificationParamsSchema: () => eIn,
    ElicitationCompleteNotificationSchema: () => tIn,
    EmbeddedResourceSchema: () => TPn,
    EmptyResultSchema: () => Y5t,
    EnumSchemaSchema: () => QPn,
    GetPromptRequestParamsSchema: () => vPn,
    GetPromptRequestSchema: () => kPn,
    GetPromptResultSchema: () => APn,
    GetTaskPayloadRequestSchema: () => Tpr,
    GetTaskPayloadResultSchema: () => Cpr,
    GetTaskRequestSchema: () => Epr,
    GetTaskResultSchema: () => hEt,
    IconSchema: () => qxn,
    IconsSchema: () => f2e,
    ImageContentSchema: () => cEt,
    ImplementationSchema: () => l0e,
    InitializeRequestParamsSchema: () => Jxn,
    InitializeRequestSchema: () => J5t,
    InitializeResultSchema: () => c0e,
    InitializedNotificationSchema: () => Q5t,
    JSONArraySchema: () => bpr,
    JSONObjectSchema: () => SO,
    JSONRPCErrorResponseSchema: () => iEt,
    JSONRPCMessageSchema: () => T4,
    JSONRPCNotificationSchema: () => K5t,
    JSONRPCRequestSchema: () => q5t,
    JSONRPCResponseSchema: () => Spr,
    JSONRPCResultResponseSchema: () => sEt,
    JSONValueSchema: () => u2e,
    LegacyTitledEnumSchemaSchema: () => d8t,
    ListChangedOptionsBaseSchema: () => s8t,
    ListPromptsRequestSchema: () => wPn,
    ListPromptsResultSchema: () => Met,
    ListResourceTemplatesRequestSchema: () => rPn,
    ListResourceTemplatesResultSchema: () => Iet,
    ListResourcesRequestSchema: () => nPn,
    ListResourcesResultSchema: () => bwe,
    ListRootsRequestSchema: () => cIn,
    ListRootsResultSchema: () => dIn,
    ListTasksRequestSchema: () => Rpr,
    ListTasksResultSchema: () => Apr,
    ListToolsRequestSchema: () => OPn,
    ListToolsResultSchema: () => u0e,
    LoggingLevelSchema: () => i8t,
    LoggingMessageNotificationParamsSchema: () => FPn,
    LoggingMessageNotificationSchema: () => $Pn,
    ModelHintSchema: () => UPn,
    ModelPreferencesSchema: () => BPn,
    MultiSelectEnumSchemaSchema: () => JPn,
    NotificationSchema: () => kG,
    NotificationsParamsSchema: () => vG,
    NumberSchemaSchema: () => mEt,
    PaginatedRequestParamsSchema: () => tPn,
    PaginatedRequestSchema: () => g2e,
    PaginatedResultSchema: () => h2e,
    PingRequestSchema: () => Z5t,
    PrimitiveSchemaDefinitionSchema: () => f8t,
    ProgressNotificationParamsSchema: () => ePn,
    ProgressNotificationSchema: () => e8t,
    ProgressSchema: () => Zxn,
    ProgressTokenSchema: () => W5t,
    PromptArgumentSchema: () => SPn,
    PromptListChangedNotificationSchema: () => xPn,
    PromptMessageSchema: () => RPn,
    PromptReferenceSchema: () => oIn,
    PromptSchema: () => Oet,
    ReadResourceRequestParamsSchema: () => oPn,
    ReadResourceRequestSchema: () => sPn,
    ReadResourceResultSchema: () => iPn,
    RelatedTaskMetadataSchema: () => Aet,
    RequestIdSchema: () => p2e,
    RequestMetaSchema: () => G5t,
    RequestSchema: () => wO,
    ResourceContentsSchema: () => t8t,
    ResourceLinkSchema: () => CPn,
    ResourceListChangedNotificationSchema: () => aPn,
    ResourceRequestParamsSchema: () => aEt,
    ResourceSchema: () => _2e,
    ResourceTemplateReferenceSchema: () => rIn,
    ResourceTemplateSchema: () => Pet,
    ResourceUpdatedNotificationParamsSchema: () => _Pn,
    ResourceUpdatedNotificationSchema: () => bPn,
    ResultMetaObjectSchema: () => V5t,
    ResultSchema: () => ET,
    RoleSchema: () => y2e,
    RootSchema: () => lIn,
    RootsListChangedNotificationSchema: () => uIn,
    SamplingContentSchema: () => zPn,
    SamplingMessageContentBlockSchema: () => Det,
    SamplingMessageSchema: () => GPn,
    ServerCapabilitiesSchema: () => m2e,
    ServerNotificationSchema: () => Dpr,
    ServerRequestSchema: () => Mpr,
    ServerResultSchema: () => Lpr,
    ServerTasksCapabilitySchema: () => Yxn,
    SetLevelRequestParamsSchema: () => NPn,
    SetLevelRequestSchema: () => HPn,
    SingleSelectEnumSchemaSchema: () => XPn,
    StringSchemaSchema: () => fEt,
    SubscribeRequestParamsSchema: () => lPn,
    SubscribeRequestSchema: () => cPn,
    SubscriptionFilterSchema: () => o8t,
    SubscriptionsAcknowledgedNotificationParamsSchema: () => mPn,
    SubscriptionsAcknowledgedNotificationSchema: () => gPn,
    SubscriptionsListenRequestParamsSchema: () => pPn,
    SubscriptionsListenRequestSchema: () => fPn,
    SubscriptionsListenResultMetaSchema: () => hPn,
    SubscriptionsListenResultSchema: () => yPn,
    TaskAugmentedRequestParamsSchema: () => xet,
    TaskCreationParamsSchema: () => wpr,
    TaskMetadataSchema: () => Gxn,
    TaskSchema: () => S2e,
    TaskStatusNotificationParamsSchema: () => Het,
    TaskStatusNotificationSchema: () => kpr,
    TaskStatusSchema: () => pIn,
    TextContentSchema: () => lEt,
    TextResourceContentsSchema: () => n8t,
    TitledMultiSelectEnumSchemaSchema: () => p8t,
    TitledSingleSelectEnumSchemaSchema: () => c8t,
    ToolAnnotationsSchema: () => PPn,
    ToolChoiceSchema: () => jPn,
    ToolExecutionSchema: () => IPn,
    ToolListChangedNotificationSchema: () => LPn,
    ToolResultContentSchema: () => WPn,
    ToolSchema: () => b2e,
    ToolUseContentSchema: () => EPn,
    UnsubscribeRequestParamsSchema: () => dPn,
    UnsubscribeRequestSchema: () => uPn,
    UntitledMultiSelectEnumSchemaSchema: () => u8t,
    UntitledSingleSelectEnumSchemaSchema: () => l8t
  });
var R7 = e => q5t.safeParse(e).success,
  $xn = e => K5t.safeParse(e).success,
  hwe = e => sEt.safeParse(e).success,
  ywe = e => iEt.safeParse(e).success;
var ha = e => typeof e === "object" && e !== null && !Array.isArray(e) && e.resultType === "input_required";
var ts = e => J5t.safeParse(e).success,
  ma = e => Q5t.safeParse(e).success;
var fn = "Mcp-Param-",
  As = "x-mcp-header",
  pn = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
  Sn = new Set(["string", "integer", "boolean", "number"]);
function rs(e) {
  let declarations = [],
    r = new Map(),
    s = (n, path, l) => {
      if (n === null || typeof n !== "object") return;
      let c = n;
      if (As in c) {
        if (!l || path.length === 0) return `${br(path)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
        let headerName = c[As];
        if (typeof headerName !== "string" || headerName.length === 0) return `${br(path)}: x-mcp-header MUST be a non-empty string`;
        if (!pn.test(headerName)) return `${br(path)}: x-mcp-header '${headerName}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
        let type = typeof c.type === "string" ? c.type : void 0;
        if (type === void 0 || !Sn.has(type)) return `${br(path)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${type ?? "<none>"}`;
        let P = headerName.toLowerCase(),
          T = r.get(P);
        if (T !== void 0) return `x-mcp-header '${headerName}' is not case-insensitively unique (also declared as '${T}')`;
        r.set(P, headerName), declarations.push({
          path: path,
          headerName: headerName,
          type: type
        });
      }
      let properties = c.properties;
      if (properties !== null && typeof properties === "object") for (let [m, _] of Object.entries(properties)) {
        let P = s(_, [...path, m], l);
        if (P !== void 0) return P;
      }
      for (let m of gn) {
        let _ = c[m];
        if (_ === void 0) continue;
        let P = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && _n.has(m) ? Object.values(_) : [_];
        for (let T of P) {
          let v = s(T, [...path, `<${m}>`], !1);
          if (v !== void 0) return v;
        }
      }
    },
    reason = s(e, [], !0);
  return reason === void 0 ? {
    valid: !0,
    declarations: declarations
  } : {
    valid: !1,
    reason: reason
  };
}
var gn = ["items", "prefixItems", "contains", "additionalProperties", "unevaluatedProperties", "unevaluatedItems", "propertyNames", "patternProperties", "dependentSchemas", "oneOf", "anyOf", "allOf", "not", "if", "then", "else", "$defs", "definitions"],
  _n = new Set(["patternProperties", "dependentSchemas", "$defs", "definitions"]);
function br(e) {
  return e.length === 0 ? "<root>" : e.join(".");
}
var fa = "=?base64?",
  pa = "?=";
function vn(e) {
  if (typeof e === "string") return e;
  if (typeof e === "boolean") return e ? "true" : "false";
  if (typeof e === "number") {
    if (!Number.isFinite(e)) return;
    if (Number.isInteger(e) && !Number.isSafeInteger(e)) return;
    return String(e);
  }
}
function yn(e) {
  if (e.length === 0) return !0;
  if (e.startsWith(fa) && e.endsWith(pa)) return !0;
  if (e !== e.trim()) return !0;
  for (let t = 0; t < e.length; t++) {
    let r = e.codePointAt(t);
    if (r === 9 || r >= 32 && r <= 126) continue;
    return !0;
  }
  return !1;
}
function bn(e) {
  let t = new TextEncoder().encode(e),
    r = "";
  for (let s of t) r += String.fromCodePoint(s);
  return btoa(r);
}
function Er(e) {
  return yn(e) ? `${fa}${bn(e)}${pa}` : e;
}
function Rn(e, t) {
  let r = e;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function Sa(e, t) {
  let r = {};
  for (let s of e) {
    let a = Rn(t, s.path);
    if (a === void 0 || a === null) continue;
    let n = vn(a);
    if (n === void 0) continue;
    r[`${fn}${s.headerName}`] = Er(n);
  }
  return r;
}
var mt = -32020,
  Cl = [{
    rung: "http-method",
    order: 1,
    evaluatedAt: "edge",
    codes: [-32000],
    conformance: [],
    rationale: "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read."
  }, {
    rung: "jsonrpc-shape",
    order: 2,
    evaluatedAt: "edge",
    codes: [Ns.InvalidRequest],
    conformance: ["server-stateless"],
    rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic."
  }, {
    rung: "era-classification",
    order: 3,
    evaluatedAt: "edge",
    codes: [mt, Ns.UnsupportedProtocolVersion],
    conformance: ["server-stateless", "http-header-validation", "http-custom-header-server-validation"],
    rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions."
  }, {
    rung: "envelope",
    order: 4,
    evaluatedAt: "edge",
    codes: [Ns.InvalidParams],
    conformance: ["server-stateless"],
    rationale: "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400."
  }, {
    rung: "method-registry",
    order: 5,
    evaluatedAt: "dispatch",
    codes: [Ns.MethodNotFound],
    conformance: ["server-stateless"],
    rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at."
  }, {
    rung: "request-params",
    order: 6,
    evaluatedAt: "dispatch",
    codes: [Ns.InvalidParams],
    conformance: [],
    rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table."
  }, {
    rung: "standard-header-validation",
    order: 7,
    evaluatedAt: "pre-dispatch",
    codes: [mt],
    conformance: ["http-header-validation"],
    rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted."
  }, {
    rung: "client-capabilities",
    order: 8,
    evaluatedAt: "pre-dispatch",
    codes: [Ns.MissingRequiredClientCapability],
    conformance: ["server-stateless"],
    rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable."
  }, {
    rung: "param-header-validation",
    order: 9,
    evaluatedAt: "pre-dispatch",
    codes: [mt],
    conformance: ["http-custom-header-server-validation"],
    rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung."
  }],
  kl = {
    [Ns.ParseError]: 400,
    [Ns.InvalidRequest]: 400,
    [Ns.MethodNotFound]: 404,
    [Ns.UnsupportedProtocolVersion]: 400,
    [Ns.MissingRequiredClientCapability]: 400,
    [mt]: 400
  };
function Pr(e, t) {
  return hYn(e, t);
}
function Ft(e) {
  return new Set(e.flatMap(item => Object.keys(item.shape)));
}
function Kr(e) {
  if (e == null) return !1;
  let t = typeof e;
  if (t !== "object" && t !== "function") return !1;
  if (!("~standard" in e)) return !1;
  return typeof e["~standard"]?.validate === "function";
}
var Ls = !1,
  target = "draft-2020-12";
function wn(e, io_2 = "input") {
  let r = e["~standard"],
    s;
  if (r.jsonSchema) s = r.jsonSchema[io_2]({
    target: target
  });else if (r.vendor === "zod") {
    if (!("_zod" in e)) throw Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
    if (!Ls) Ls = !0, console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
    s = fde(e, {
      target: target,
      io: io_2
    });
  } else throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (io_2 === "output") {
    if (s.type !== void 0) return s;
    return ga(s) ? {
      type: "object",
      ...s
    } : s;
  }
  if (s.type !== void 0 && s.type !== "object") throw Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(s.type)}). Wrap your schema in z.object({...}) or equivalent.`);
  return {
    type: "object",
    ...s
  };
}
function ga(e) {
  if ("properties" in e || "patternProperties" in e || "additionalProperties" in e || "required" in e) return !0;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e[t];
    if (Array.isArray(r) && r.length > 0) return r.every(item => item !== null && typeof item === "object" && (item.type === "object" || ga(item)));
  }
  return !1;
}
function $n(e) {
  if (!e.path?.length) return e.message;
  return `${e.path.map(item => String(typeof item === "object" ? item.key : item)).join(".")}: ${e.message}`;
}
async function Fr(e, t) {
  let r = await e["~standard"].validate(t);
  if (r.issues && r.issues.length > 0) return {
    success: !1,
    error: r.issues.map(item => $n(item)).join(", ")
  };
  return {
    success: !0,
    data: r.value
  };
}
function En(e) {
  let t = fde(e, {
    target: target,
    io: "input"
  });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var Pn = /\\\.\\d\{(\d+)\}/;
function Tn(e) {
  let t = Pn.exec(e),
    r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [!1, !0].flatMap(s => [!1, !0].flatMap(a => r.map(n => rj({
    local: s,
    offset: a,
    precision: n
  }))));
}
function zn(e, t) {
  let r;
  switch (e) {
    case "email":
      r = [GFo()];
      break;
    case "uri":
      r = [D8e()];
      break;
    case "date":
      r = [aWr()];
      break;
    case "date-time":
      r = Tn(t);
      break;
  }
  return new Set(r.map(item => En(item)).filter(item => item !== void 0));
}
function Cn(e, t, r) {
  if (r !== "zod") return !0;
  return zn(e, t).has(t);
}
function Kt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function kn(e) {
  try {
    return wn(e, "input");
  } catch (error) {
    let r = error instanceof Error ? error.message : String(error);
    throw new fl(Ns.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
  }
}
var In = new Set(["$comment", "deprecated", "description", "examples", "readOnly", "title", "writeOnly"]);
function ss(e) {
  return In.has(e) || e.startsWith("x-");
}
var qn = new Set(["$schema", ...Object.keys(gEt.shape.requestedSchema.shape)]),
  Us = {
    string: Ft([fEt, l8t, c8t, d8t]),
    number: Ft([mEt]),
    integer: Ft([mEt]),
    boolean: Ft([a8t]),
    array: Ft([u8t, p8t])
  },
  On = new Set(fEt.shape.format.unwrap().options);
function Nn(e, t, r, s) {
  if (!Kt(e)) return e;
  let a = typeof e.type === "string" && Object.hasOwn(Us, e.type) ? Us[e.type] : void 0;
  if (a === void 0) return e;
  let n = {};
  for (let [i, l] of Object.entries(e)) if (a.has(i) || ss(i)) n[i] = l;else if (i === "pattern" && e.type === "string" && typeof e.format === "string") {
    if (!On.has(e.format)) n[i] = l;else if (typeof l !== "string" || !Cn(e.format, l, r)) s.push(`${t}.${i}`);
  } else s.push(`${t}.${i}`);
  return n;
}
function Mn(e, t) {
  let r = {},
    s = [];
  for (let [a, n] of Object.entries(e)) if (a === "properties" && Kt(n)) r[a] = Object.fromEntries(Object.entries(n).map(([i, l]) => [i, Nn(l, `properties.${i}`, t, s)]));else if (qn.has(a)) r[a] = n;else if (!ss(a)) s.push(a);
  if (s.length > 0) throw new fl(Ns.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
  return r;
}
function jn(e, t) {
  if (!Kt(e.properties)) return t;
  let r = Object.entries(e.properties).filter(([, s]) => !Pr(f8t, s).success).map(([s]) => `properties.${s}`);
  return r.length > 0 ? r.join(", ") : t;
}
function Gr(e, t, r = "") {
  if (Array.isArray(e) && Array.isArray(t)) return e.flatMap((item, index) => Gr(item, t[index], `${r}[${index}]`));
  if (!Kt(e) || !Kt(t)) return [];
  return Object.entries(e).flatMap(([s, a]) => {
    let n = r ? `${r}.${s}` : s;
    if (!Object.prototype.hasOwnProperty.call(t, s)) return ss(s) ? [] : [n];
    return Gr(a, t[s], n);
  });
}
function An(e) {
  if (!Kr(e.requestedSchema)) return {
    ...e,
    mode: "form",
    requestedSchema: e.requestedSchema
  };
  let vendor = e.requestedSchema["~standard"].vendor,
    r = Mn(kn(e.requestedSchema), vendor),
    s = Pr(gEt.shape.requestedSchema, r);
  if (!s.success) throw new fl(Ns.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${jn(r, s.error.message)}`);
  let a = Gr(r, s.data);
  if (a.length > 0) throw new fl(Ns.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`);
  let n = (s.data.required ?? []).filter(item => !Object.prototype.hasOwnProperty.call(s.data.properties, item));
  if (n.length > 0) throw new fl(Ns.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`);
  return {
    ...e,
    mode: "form",
    requestedSchema: s.data
  };
}
function Ln(e) {
  let t = e.inputRequests !== void 0 && Object.keys(e.inputRequests).length > 0,
    r = typeof e.requestState === "string";
  if (!t && !r) throw TypeError("inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)");
  return {
    resultType: "input_required",
    ...(e.inputRequests !== void 0 && {
      inputRequests: e.inputRequests
    }),
    ...(e.requestState !== void 0 && {
      requestState: e.requestState
    })
  };
}
var Il = Object.assign(Ln, {
  elicit(e) {
    try {
      return {
        method: "elicitation/create",
        params: An(e)
      };
    } catch (t) {
      throw t instanceof fl ? TypeError(t.message, {
        cause: t
      }) : t;
    }
  },
  elicitUrl(e) {
    return {
      method: "elicitation/create",
      params: {
        ...e,
        mode: "url"
      }
    };
  },
  createMessage(params) {
    return {
      method: "sampling/createMessage",
      params: params
    };
  },
  listRoots() {
    return {
      method: "roots/list"
    };
  }
});
var Un = !0,
  Dn = 10,
  Vn = 250;
function _a(e) {
  return {
    autoFulfill: e?.autoFulfill ?? Un,
    maxRounds: e?.maxRounds ?? Dn
  };
}
function Fn(e, inputResponses, requestState_2) {
  let s = inputResponses !== void 0 && Object.keys(inputResponses).length > 0;
  if (!s && requestState_2 === void 0) return e;
  return {
    ...e,
    ...(s && {
      inputResponses: inputResponses
    }),
    ...(requestState_2 !== void 0 && {
      requestState: requestState_2
    })
  };
}
function Hn(e, t) {
  return `Multi-round-trip request '${e}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function xn(e, t) {
  return new Promise((r, s) => {
    if (t?.aborted) {
      s(t.reason instanceof ws ? t.reason : new ws(cs.RequestTimeout, String(t.reason)));
      return;
    }
    let a = setTimeout(() => {
        t?.removeEventListener("abort", n), r();
      }, e),
      n = () => {
        clearTimeout(a), s(t?.reason instanceof ws ? t.reason : new ws(cs.RequestTimeout, String(t?.reason)));
      };
    t?.addEventListener("abort", n, {
      once: !0
    });
  });
}
function Kn(e) {
  let abortController = new AbortController(),
    r = () => abortController.abort(e?.reason);
  if (e?.addEventListener("abort", r, {
    once: !0
  }), e?.aborted) abortController.abort(e.reason);
  return {
    signal: abortController.signal,
    abort: s => abortController.abort(s),
    dispose: () => e?.removeEventListener("abort", r)
  };
}
async function Jn(e) {
  let {
      config: config,
      method: method_2,
      originalParams: originalParams,
      requestOptions: requestOptions,
      hooks: hooks,
      signal: signal
    } = e,
    l = e.flowStartedAt ?? Date.now(),
    firstPayload = e.firstPayload,
    progress = 0;
  while (!0) {
    if (progress += 1, progress > config.maxRounds) throw new ws(cs.InputRequiredRoundsExceeded, Hn(method_2, config.maxRounds), {
      rounds: config.maxRounds,
      lastResult: {
        inputRequests: firstPayload.inputRequests,
        ...(firstPayload.requestState !== void 0 && {
          requestState: firstPayload.requestState
        })
      }
    });
    requestOptions.onprogress?.({
      progress: progress,
      message: `Fulfilling input required by '${method_2}' (round ${progress})`
    });
    let m = Object.entries(firstPayload.inputRequests ?? {}),
      _;
    if (m.length > 0) {
      let v = Kn(signal);
      try {
        let y = await Promise.all(m.map(async ([f, h]) => {
          try {
            return [f, await hooks.dispatchInputRequest(f, h, v.signal)];
          } catch (error) {
            throw v.abort(error), error;
          }
        }));
        _ = Object.fromEntries(y);
      } finally {
        v.dispose();
      }
    } else await xn(Vn, signal);
    let P = {
      ...(requestOptions.timeout !== void 0 && {
        timeout: requestOptions.timeout
      })
    };
    if (requestOptions.maxTotalTimeout !== void 0) {
      let totalElapsed = Date.now() - l,
        y = requestOptions.maxTotalTimeout - totalElapsed;
      if (y <= 0) throw new ws(cs.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: requestOptions.maxTotalTimeout,
        totalElapsed: totalElapsed
      });
      P.maxTotalTimeout = y;
    }
    let T = await hooks.retry(Fn(originalParams, _, firstPayload.requestState), P);
    if (ha(T)) {
      firstPayload = {
        inputRequests: T.inputRequests ?? {},
        ...(T.requestState !== void 0 && {
          requestState: T.requestState
        })
      };
      continue;
    }
    return T;
  }
}
var Gn = ["AnnotationsSchema", "AudioContentSchema", "BaseMetadataSchema", "BlobResourceContentsSchema", "BooleanSchemaSchema", "CallToolRequestSchema", "CallToolRequestParamsSchema", "CallToolResultSchema", "CancelledNotificationSchema", "CancelledNotificationParamsSchema", "CancelTaskRequestSchema", "CancelTaskResultSchema", "ClientCapabilitiesSchema", "ClientNotificationSchema", "ClientRequestSchema", "ClientResultSchema", "CompatibilityCallToolResultSchema", "CompleteRequestSchema", "CompleteRequestParamsSchema", "CompleteResultSchema", "ContentBlockSchema", "CreateMessageRequestSchema", "CreateMessageRequestParamsSchema", "CreateMessageResultSchema", "CreateMessageResultWithToolsSchema", "CreateTaskResultSchema", "CursorSchema", "DiscoverRequestSchema", "DiscoverResultSchema", "ElicitationCompleteNotificationSchema", "ElicitationCompleteNotificationParamsSchema", "ElicitRequestSchema", "ElicitRequestFormParamsSchema", "ElicitRequestParamsSchema", "ElicitRequestURLParamsSchema", "ElicitResultSchema", "EmbeddedResourceSchema", "EmptyResultSchema", "EnumSchemaSchema", "GetPromptRequestSchema", "GetPromptRequestParamsSchema", "GetPromptResultSchema", "GetTaskPayloadRequestSchema", "GetTaskPayloadResultSchema", "GetTaskRequestSchema", "GetTaskResultSchema", "IconSchema", "IconsSchema", "ImageContentSchema", "ImplementationSchema", "InitializedNotificationSchema", "InitializeRequestSchema", "InitializeRequestParamsSchema", "InitializeResultSchema", "JSONArraySchema", "JSONObjectSchema", "JSONRPCErrorResponseSchema", "JSONRPCMessageSchema", "JSONRPCNotificationSchema", "JSONRPCRequestSchema", "JSONRPCResponseSchema", "JSONRPCResultResponseSchema", "JSONValueSchema", "LegacyTitledEnumSchemaSchema", "ListPromptsRequestSchema", "ListPromptsResultSchema", "ListResourcesRequestSchema", "ListResourcesResultSchema", "ListResourceTemplatesRequestSchema", "ListResourceTemplatesResultSchema", "ListRootsRequestSchema", "ListRootsResultSchema", "ListTasksRequestSchema", "ListTasksResultSchema", "ListToolsRequestSchema", "ListToolsResultSchema", "LoggingLevelSchema", "LoggingMessageNotificationSchema", "LoggingMessageNotificationParamsSchema", "ModelHintSchema", "ModelPreferencesSchema", "MultiSelectEnumSchemaSchema", "NotificationSchema", "NumberSchemaSchema", "PaginatedRequestSchema", "PaginatedRequestParamsSchema", "PaginatedResultSchema", "PingRequestSchema", "PrimitiveSchemaDefinitionSchema", "ProgressSchema", "ProgressNotificationSchema", "ProgressNotificationParamsSchema", "ProgressTokenSchema", "PromptSchema", "PromptArgumentSchema", "PromptListChangedNotificationSchema", "PromptMessageSchema", "PromptReferenceSchema", "ReadResourceRequestSchema", "ReadResourceRequestParamsSchema", "ReadResourceResultSchema", "RelatedTaskMetadataSchema", "RequestSchema", "RequestIdSchema", "RequestMetaSchema", "ResourceSchema", "ResourceContentsSchema", "ResourceLinkSchema", "ResourceListChangedNotificationSchema", "ResourceRequestParamsSchema", "ResourceTemplateSchema", "ResourceTemplateReferenceSchema", "ResourceUpdatedNotificationSchema", "ResourceUpdatedNotificationParamsSchema", "ResultMetaObjectSchema", "ResultSchema", "RoleSchema", "RootSchema", "RootsListChangedNotificationSchema", "SamplingContentSchema", "SamplingMessageSchema", "SamplingMessageContentBlockSchema", "ServerCapabilitiesSchema", "ServerNotificationSchema", "ServerRequestSchema", "ServerResultSchema", "SetLevelRequestSchema", "SetLevelRequestParamsSchema", "SingleSelectEnumSchemaSchema", "StringSchemaSchema", "SubscribeRequestSchema", "SubscribeRequestParamsSchema", "SubscriptionFilterSchema", "SubscriptionsAcknowledgedNotificationSchema", "SubscriptionsAcknowledgedNotificationParamsSchema", "SubscriptionsListenRequestSchema", "SubscriptionsListenRequestParamsSchema", "SubscriptionsListenResultSchema", "SubscriptionsListenResultMetaSchema", "TaskAugmentedRequestParamsSchema", "TaskCreationParamsSchema", "TaskMetadataSchema", "TaskSchema", "TaskStatusSchema", "TaskStatusNotificationSchema", "TaskStatusNotificationParamsSchema", "TextContentSchema", "TextResourceContentsSchema", "TitledMultiSelectEnumSchemaSchema", "TitledSingleSelectEnumSchemaSchema", "ToolSchema", "ToolAnnotationsSchema", "ToolChoiceSchema", "ToolExecutionSchema", "ToolListChangedNotificationSchema", "ToolResultContentSchema", "ToolUseContentSchema", "UnsubscribeRequestSchema", "UnsubscribeRequestParamsSchema", "UntitledMultiSelectEnumSchemaSchema", "UntitledSingleSelectEnumSchemaSchema"],
  Bn = {
    IdJagTokenExchangeResponseSchema: IdJagTokenExchangeResponseSchema,
    OAuthClientInformationFullSchema: OAuthClientInformationFullSchema,
    OAuthClientInformationSchema: OAuthClientInformationSchema,
    OAuthClientMetadataSchema: OAuthClientMetadataSchema,
    OAuthClientRegistrationErrorSchema: OAuthClientRegistrationErrorSchema,
    OAuthErrorResponseSchema: OAuthErrorResponseSchema,
    OAuthMetadataSchema: OAuthMetadataSchema,
    OAuthProtectedResourceMetadataSchema: OAuthProtectedResourceMetadataSchema,
    OAuthTokenRevocationRequestSchema: OAuthTokenRevocationRequestSchema,
    OAuthTokensSchema: OAuthTokensSchema,
    OpenIdProviderDiscoveryMetadataSchema: OpenIdProviderDiscoveryMetadataSchema,
    OpenIdProviderMetadataSchema: OpenIdProviderMetadataSchema
  },
  va = {},
  ya = {};
function ba(e, t) {
  let r = e.slice(0, -6);
  va[r] = t, ya[r] = s => t.safeParse(s).success;
}
for (let e of Gn) ba(e, mn[e]);
for (let [e, t] of Object.entries(Bn)) ba(e, t);
var Wn = Object.freeze(va),
  Ra = Object.freeze(ya);
function Yn(e) {
  switch (e) {
    case "initialize":
    case "notifications/initialized":
      return je(void 0);
    case "server/discover":
      return je($r);
    default:
      return;
  }
}
var Bt = 60000,
  Xn = [s0e, rEt, Ret, oEt],
  Zn = ["inputResponses", "requestState"];
function Ds(message, t) {
  let params_2 = message.params;
  if (!xt(params_2)) return {
    message: message,
    lifted: {}
  };
  let _meta_3 = params_2._meta,
    a = xt(_meta_3) ? Xn.filter(item => item in _meta_3) : [],
    n = t === "request" ? Zn.filter(item => item in params_2) : [];
  if (a.length === 0 && n.length === 0) return {
    message: message,
    lifted: {}
  };
  let lifted = {},
    params_3 = {
      ...params_2
    };
  if (a.length > 0 && xt(_meta_3)) {
    let c = {},
      d = {
        ..._meta_3
      };
    for (let m of a) c[m] = _meta_3[m], delete d[m];
    if (lifted.envelope = c, Object.keys(d).length > 0) params_3._meta = d;else delete params_3._meta;
  }
  for (let c of n) {
    if (c === "inputResponses") lifted.inputResponses = params_3[c];
    if (c === "requestState") lifted.requestState = params_3[c];
    delete params_3[c];
  }
  return {
    message: {
      ...message,
      params: params_3
    },
    lifted: lifted
  };
}
function Vs(e, t) {
  let r = e.validateResult(t, void 0);
  if (!r.ok && r.reason === "not-in-era") return;
  return {
    "~standard": {
      version: 1,
      vendor: "mcp-wire-codec",
      validate(s) {
        let a = e.validateResult(t, s);
        if (a.ok) return {
          value: a.value
        };
        return {
          issues: [{
            message: a.reason === "invalid" ? a.message : `not-in-era: ${t}`
          }]
        };
      }
    }
  };
}
function as(e) {
  return () => e;
}
var Qn = as(void 0),
  ei,
  wa = class {
    _transport;
    _requestMessageId = 0;
    _requestHandlers = new Map();
    _requestHandlerAbortControllers = new Map();
    _notificationHandlers = new Map();
    _responseHandlers = new Map();
    _progressHandlers = new Map();
    _timeoutInfo = new Map();
    _pendingDebouncedNotifications = new Set();
    _negotiatedProtocolVersion;
    static {
      ei = (e, t) => {
        e._negotiatedProtocolVersion = t;
      };
    }
    _supportedProtocolVersions;
    onclose;
    onerror;
    fallbackRequestHandler;
    fallbackNotificationHandler;
    constructor(e) {
      this._options = e, this._supportedProtocolVersions = e?.supportedProtocolVersions ?? o0e, this.setNotificationHandler("notifications/cancelled", t => {
        this._oncancel(t);
      }), this.setNotificationHandler("notifications/progress", t => {
        this._onprogress(t);
      }), this.setRequestHandler("ping", t => ({}));
    }
    _shouldDropInbound(e) {}
    _outboundMetaEnvelope() {}
    _envelopeOutbound(e) {
      let t = this._outboundMetaEnvelope();
      if (t === void 0) return e;
      let r = e.params ?? {};
      return {
        ...e,
        params: {
          ...r,
          _meta: {
            ...t,
            ...r._meta
          }
        }
      };
    }
    _resolveNonCompleteResult(e, t) {
      return Promise.reject(new ws(cs.UnsupportedResultType, `Unsupported result type '${e.kind}' for ${t.request.method}`, {
        resultType: e.kind,
        method: t.request.method
      }));
    }
    _getRequestHandler(e) {
      return this._requestHandlers.get(e);
    }
    async _oncancel(e) {
      if (!e.params.requestId) return;
      this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
    }
    _setupTimeout(e, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = !1) {
      this._timeoutInfo.set(e, {
        timeoutId: setTimeout(onTimeout, timeout),
        startTime: Date.now(),
        timeout: timeout,
        maxTotalTimeout: maxTotalTimeout,
        resetTimeoutOnProgress: resetTimeoutOnProgress,
        onTimeout: onTimeout
      });
    }
    _resetTimeout(e) {
      let t = this._timeoutInfo.get(e);
      if (!t) return !1;
      let totalElapsed_2 = Date.now() - t.startTime;
      if (t.maxTotalTimeout && totalElapsed_2 >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e), new ws(cs.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: t.maxTotalTimeout,
        totalElapsed: totalElapsed_2
      });
      return clearTimeout(t.timeoutId), t.timeoutId = setTimeout(t.onTimeout, t.timeout), !0;
    }
    _cleanupTimeout(e) {
      let t = this._timeoutInfo.get(e);
      if (t) clearTimeout(t.timeoutId), this._timeoutInfo.delete(e);
    }
    async connect(e) {
      this._transport = e;
      let t = this.transport?.onclose;
      this._transport.onclose = () => {
        try {
          t?.();
        } finally {
          this._onclose();
        }
      };
      let r = this.transport?.onerror;
      this._transport.onerror = a => {
        r?.(a), this._onerror(a);
      };
      let s = this._transport?.onmessage;
      this._transport.onmessage = (a, n) => {
        if (s?.(a, n), hwe(a) || ywe(a)) this._onresponse(a);else if (R7(a)) this._onrequest(a, n);else if ($xn(a)) this._onnotification(a, n);else this._onerror(Error(`Unknown message type: ${JSON.stringify(a)}`));
      }, e.setSupportedProtocolVersions?.(this._supportedProtocolVersions), await this._transport.start();
    }
    _onclose() {
      let _responseHandlers = this._responseHandlers;
      this._responseHandlers = new Map(), this._progressHandlers.clear(), this._pendingDebouncedNotifications.clear();
      for (let s of this._timeoutInfo.values()) clearTimeout(s.timeoutId);
      this._timeoutInfo.clear();
      let _requestHandlerAbortControllers = this._requestHandlerAbortControllers;
      this._requestHandlerAbortControllers = new Map();
      let r = new ws(cs.ConnectionClosed, "Connection closed");
      this._transport = void 0;
      try {
        this.onclose?.();
      } finally {
        for (let s of _responseHandlers.values()) s(r);
        for (let s of _requestHandlerAbortControllers.values()) s.abort(r);
      }
    }
    _onerror(e) {
      this.onerror?.(e);
    }
    _onnotification(e, t) {
      let {
          message: message_2
        } = Ds(e, "notification"),
        s = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") return;
      if (t?.classification !== void 0) {
        let i = js(t.classification);
        if (i !== s.era) {
          this._onerror(Error(`Era mismatch on inbound notification '${message_2.method}': classified as ${i} but this instance serves ${s.era}`));
          return;
        }
      }
      if (Vr(message_2.method) && !s.hasNotificationMethod(message_2.method)) return;
      let a = this._notificationHandlers.get(message_2.method),
        fallbackNotificationHandler = this.fallbackNotificationHandler;
      if (a === void 0 && fallbackNotificationHandler === void 0) return;
      Promise.resolve().then(() => a === void 0 ? fallbackNotificationHandler(message_2) : a(message_2, s)).catch(i => this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
    }
    _onrequest(e, t) {
      let {
          message: message_3,
          lifted: lifted_2
        } = Ds(e, "request"),
        a = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") {
        this._onerror(Error(`Dropped inbound request '${e.method}': not servable on this connection's protocol era`));
        return;
      }
      let _transport = this._transport,
        i = (code, message_4, data) => {
          let g = {
            jsonrpc: "2.0",
            id: message_3.id,
            error: {
              code: code,
              message: message_4,
              ...(data !== void 0 && {
                data: data
              })
            }
          };
          _transport?.send(g).catch(p => this._onerror(Error(`Failed to send an error response: ${p}`)));
        };
      if (t?.classification !== void 0) {
        let y = js(t.classification);
        if (y !== a.era) {
          this._onerror(Error(`Era mismatch on inbound request '${message_3.method}': classified as ${y} but this instance serves ${a.era}`));
          let requested = t.classification.revision ?? y;
          i(Ns.UnsupportedProtocolVersion, `Unsupported protocol version: ${requested}`, {
            supported: this._supportedProtocolVersions,
            requested: requested
          });
          return;
        }
      }
      if (Dr(message_3.method) && !a.hasRequestMethod(message_3.method)) {
        i(Ns.MethodNotFound, "Method not found");
        return;
      }
      let l = this._requestHandlers.get(message_3.method) ?? this.fallbackRequestHandler;
      if (l === void 0) {
        i(Ns.MethodNotFound, "Method not found");
        return;
      }
      let c = a.checkInboundEnvelope(lifted_2);
      if (c !== void 0) {
        i(Ns.InvalidParams, c);
        return;
      }
      let notify = (y, f) => this._notificationViaCodec(this._resolveOutboundCodec(y.method), y, {
          ...f,
          relatedRequestId: message_3.id
        }),
        m = (y, f, h) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(y.method), y, f, {
          ...h,
          relatedRequestId: message_3.id
        }),
        abortController_2 = new AbortController();
      this._requestHandlerAbortControllers.set(message_3.id, abortController_2);
      let P = lifted_2.inputResponses === void 0 ? void 0 : ti(lifted_2.inputResponses),
        T = {
          sessionId: _transport?.sessionId,
          mcpReq: {
            id: message_3.id,
            method: message_3.method,
            _meta: message_3.params?._meta,
            ...(lifted_2.envelope !== void 0 && {
              envelope: lifted_2.envelope
            }),
            ...(P !== void 0 && {
              inputResponses: P.accepted
            }),
            ...(P !== void 0 && P.droppedKeys.length > 0 && {
              droppedInputResponseKeys: P.droppedKeys
            }),
            requestState: lifted_2.requestState === void 0 ? Qn : as(lifted_2.requestState),
            signal: abortController_2.signal,
            send: (y, f, h) => {
              let g = this._resolveOutboundCodec(y.method);
              if (this._assertOutboundRequestInEra(g, y.method), Kr(f)) return m(y, f, h);
              let p = Vs(g, y.method);
              if (p === void 0) throw TypeError(`'${y.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
              return m(y, p, f);
            },
            notify: notify
          },
          http: t?.authInfo ? {
            authInfo: t.authInfo
          } : void 0
        },
        v = this.buildContext(T, t);
      Promise.resolve().then(() => l(message_3, v)).then(async y => {
        if (abortController_2.signal.aborted) return;
        let result_5;
        try {
          result_5 = a.encodeResult(message_3.method, y, this._outboundServerInfo());
        } catch (error) {
          this._onerror(Error(`Failed to encode result for ${message_3.method}: ${error}`)), i(Ns.InternalError, "Internal error");
          return;
        }
        let h = {
          result: result_5,
          jsonrpc: "2.0",
          id: message_3.id
        };
        await _transport?.send(h);
      }, async y => {
        if (abortController_2.signal.aborted) return;
        let f = Number.isSafeInteger(y.code) ? y.code : Ns.InternalError,
          h = {
            jsonrpc: "2.0",
            id: message_3.id,
            error: {
              code: a.encodeErrorCode(f),
              message: y.message ?? "Internal error",
              ...(y.data !== void 0 && {
                data: y.data
              })
            }
          };
        await _transport?.send(h);
      }).catch(y => this._onerror(Error(`Failed to send response: ${y}`))).finally(() => {
        if (this._requestHandlerAbortControllers.get(message_3.id) === abortController_2) this._requestHandlerAbortControllers.delete(message_3.id);
      });
    }
    _onprogress(e) {
      let {
          progressToken: progressToken,
          ...r
        } = e.params,
        s = Number(progressToken),
        a = this._progressHandlers.get(s);
      if (!a) {
        this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
        return;
      }
      let n = this._responseHandlers.get(s),
        i = this._timeoutInfo.get(s);
      if (i && n && i.resetTimeoutOnProgress) try {
        this._resetTimeout(s);
      } catch (error) {
        this._responseHandlers.delete(s), this._progressHandlers.delete(s), this._cleanupTimeout(s), n(error);
        return;
      }
      a(r);
    }
    _onresponse(e) {
      let t = Number(e.id),
        r = this._responseHandlers.get(t);
      if (r === void 0) {
        this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
        return;
      }
      if (this._responseHandlers.delete(t), this._cleanupTimeout(t), this._progressHandlers.delete(t), hwe(e)) r(e);else r(fl.fromError(e.error.code, e.error.message, e.error.data));
    }
    get transport() {
      return this._transport;
    }
    async close() {
      await this._transport?.close();
    }
    request(e, t, r) {
      let s = this._resolveOutboundCodec(e.method);
      if (this._assertOutboundRequestInEra(s, e.method), Kr(t)) return this._requestWithSchemaViaCodec(s, e, t, r);
      let a = Vs(s, e.method);
      if (a === void 0) throw TypeError(`'${e.method}' is not a spec method; pass a result schema as the second argument to request().`);
      return this._requestWithSchemaViaCodec(s, e, a, t);
    }
    _negotiatedWireCodec() {
      return je(this._negotiatedProtocolVersion);
    }
    _wireCodec() {
      return this._negotiatedWireCodec();
    }
    _resolveOutboundCodec(e) {
      if (this._negotiatedProtocolVersion === void 0) {
        let t = Yn(e);
        if (t) return t;
      }
      return this._negotiatedWireCodec();
    }
    _assertOutboundRequestInEra(e, method_3) {
      if (method_3.startsWith("tasks/")) return;
      if (Dr(method_3) && !e.hasRequestMethod(method_3)) throw new ws(cs.MethodNotSupportedByProtocolVersion, `Method '${method_3}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
        method: method_3,
        era: e.era
      });
    }
    _requestWithSchema(e, t, r) {
      let s = this._resolveOutboundCodec(e.method);
      return this._assertOutboundRequestInEra(s, e.method), this._requestWithSchemaViaCodec(s, e, t, r);
    }
    _requestWithSchemaViaCodec(codec, request, resultSchema, options) {
      let {
          relatedRequestId: relatedRequestId,
          resumptionToken: resumptionToken,
          onresumptiontoken: onresumptiontoken,
          headers: headers
        } = options ?? {},
        flowStartedAt = Date.now(),
        d,
        m;
      return new Promise((_, P) => {
        let T = b => {
          P(b);
        };
        if (!this._transport) {
          T(Error("Not connected"));
          return;
        }
        if (this._options?.enforceStrictCapabilities === !0) try {
          this.assertCapabilityForMethod(request.method);
        } catch (error) {
          T(error);
          return;
        }
        if (options?.signal?.aborted) {
          let reason_2 = options.signal.reason;
          throw reason_2 instanceof ws ? reason_2 : new ws(cs.RequestTimeout, String(reason_2));
        }
        let v = codec.era === $r && this._transport.hasPerRequestStream === !0 ? new AbortController() : void 0,
          y = this._requestMessageId++;
        m = y;
        let f = {
          ...request,
          jsonrpc: "2.0",
          id: y
        };
        if (options?.onprogress) this._progressHandlers.set(y, options.onprogress), f.params = {
          ...request.params,
          _meta: {
            ...request.params?._meta,
            progressToken: y
          }
        };
        let h = this._envelopeOutbound(f),
          g = !1,
          p = b => {
            if (g) return;
            if (this._progressHandlers.delete(y), v === void 0) this._transport?.send(this._envelopeOutbound({
              jsonrpc: "2.0",
              method: "notifications/cancelled",
              params: {
                requestId: y,
                reason: String(b)
              }
            }), {
              relatedRequestId: relatedRequestId,
              resumptionToken: resumptionToken,
              onresumptiontoken: onresumptiontoken
            }).catch(S => this._onerror(Error(`Failed to send cancellation: ${S}`)));else v.abort();
            P(b instanceof ws ? b : new ws(cs.RequestTimeout, String(b)));
          };
        this._responseHandlers.set(y, b => {
          if (options?.signal?.aborted) return;
          if (g = !0, b instanceof Error) return P(b);
          let S;
          try {
            S = codec.decodeResult(request.method, b.result);
          } catch (error) {
            return P(error instanceof Error ? error : Error(String(error)));
          }
          if (S.kind === "invalid") return P(S.error);
          if (S.kind === "task") {
            if (options?.allowTask === !0 && this._capabilities?.extensions?.[ln] !== void 0 && dn(S.result)) return _(S.result);
            return P(new ws(cs.UnsupportedResultType, `Unsupported result type 'task' for ${request.method}`, {
              method: request.method
            }));
          }
          if (S.kind === "input_required") {
            if (options?.allowInputRequired === !0) return _(oi(S));
            let U = {
              codec: codec,
              request: request,
              resultSchema: resultSchema,
              options: options,
              flowStartedAt: flowStartedAt,
              retry: (params_4, j) => this._requestWithSchemaViaCodec(codec, params_4 === void 0 ? {
                method: request.method
              } : {
                method: request.method,
                params: params_4
              }, resultSchema, j)
            };
            return _(this._resolveNonCompleteResult(S, U));
          }
          let result_6 = S.result;
          Fr(resultSchema, result_6).then(U => {
            if (U.success) _(U.data);else P(new ws(cs.InvalidResult, `Invalid result for ${request.method}: ${U.error}`));
          }, P);
        }), d = () => p(options?.signal?.reason), options?.signal?.addEventListener("abort", d, {
          once: !0
        });
        let timeout_2 = options?.timeout ?? Bt,
          k = () => p(new ws(cs.RequestTimeout, "Request timed out", {
            timeout: timeout_2
          }));
        this._setupTimeout(y, timeout_2, options?.maxTotalTimeout, k, options?.resetTimeoutOnProgress ?? !1), this._transport.send(h, {
          relatedRequestId: relatedRequestId,
          resumptionToken: resumptionToken,
          onresumptiontoken: onresumptiontoken,
          headers: headers,
          requestSignal: v?.signal
        }).catch(b => {
          this._progressHandlers.delete(y), P(b);
        });
      }).finally(() => {
        if (d) options?.signal?.removeEventListener("abort", d);
        if (m !== void 0) this._responseHandlers.delete(m), this._cleanupTimeout(m);
      });
    }
    async notification(e, t) {
      return this._notificationViaCodec(this._resolveOutboundCodec(e.method), e, t);
    }
    async _notificationViaCodec(e, t, r) {
      if (!this._transport) throw new ws(cs.NotConnected, "Not connected");
      if (Vr(t.method) && !e.hasNotificationMethod(t.method)) throw new ws(cs.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
        method: t.method,
        era: e.era
      });
      this.assertNotificationCapability(t.method);
      let s = this._envelopeOutbound({
        jsonrpc: "2.0",
        ...t
      });
      if ((this._options?.debouncedNotificationMethods ?? []).includes(t.method) && !t.params && !r?.relatedRequestId) {
        if (this._pendingDebouncedNotifications.has(t.method)) return;
        this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
          if (this._pendingDebouncedNotifications.delete(t.method), !this._transport) return;
          this._transport?.send(s, r).catch(a => this._onerror(a));
        });
        return;
      }
      await this._transport.send(s, r);
    }
    setRequestHandler(e, t, r) {
      this.assertRequestHandlerCapability(e);
      let s;
      if (typeof t === "function") {
        if (!Dr(e)) throw TypeError(`'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
        s = (a, n) => {
          let i = this._negotiatedWireCodec(),
            l = i.validateRequest(e, a);
          if (!l.ok && l.reason === "not-in-era") l = i.validateInputRequest(e, a);
          if (!l.ok) {
            if (l.reason === "not-in-era") throw new fl(Ns.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(l.message);
          }
          return Promise.resolve(t(l.value, n));
        };
      } else if (r) s = async (a, n) => {
        let i = await Fr(t.params, {
          ...a.params
        });
        if (!i.success) throw new fl(Ns.InvalidParams, `Invalid params for ${e}: ${i.error}`);
        return r(i.data, n);
      };else throw TypeError("setRequestHandler: handler is required");
      this._requestHandlers.set(e, this._wrapHandler(e, s));
    }
    _wrapHandler(e, t) {
      return t;
    }
    _outboundServerInfo() {}
    removeRequestHandler(e) {
      this._requestHandlers.delete(e);
    }
    assertCanSetRequestHandler(e) {
      if (this._requestHandlers.has(e)) throw Error(`A request handler for ${e} already exists, which would be overridden`);
    }
    setNotificationHandler(e, t, r) {
      if (typeof t === "function") {
        if (!Vr(e)) throw TypeError(`'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
        this._notificationHandlers.set(e, (s, a) => {
          let n = a.validateNotification(e, s);
          if (!n.ok) {
            if (n.reason === "not-in-era") throw new fl(Ns.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(n.message);
          }
          return Promise.resolve(t(n.value));
        });
        return;
      }
      if (!r) throw TypeError("setNotificationHandler: handler is required");
      this._notificationHandlers.set(e, async s => {
        let a = await Fr(t.params, {
          ...s.params
        });
        if (!a.success) throw new fl(Ns.InvalidParams, `Invalid params for notification ${e}: ${a.error}`);
        await r(a.data, s);
      });
    }
    removeNotificationHandler(e) {
      this._notificationHandlers.delete(e);
    }
  };
function xt(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function $a(e, t) {
  let r = {
    ...e
  };
  for (let s in t) {
    let a = s,
      n = t[a];
    if (n === void 0) continue;
    let i = r[a];
    r[a] = xt(i) && xt(n) ? {
      ...i,
      ...n
    } : n;
  }
  return r;
}
function Rr(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ti(e) {
  let accepted = {},
    droppedKeys = [];
  if (!Rr(e)) return {
    accepted: accepted,
    droppedKeys: droppedKeys
  };
  for (let [s, a] of Object.entries(e)) {
    if (!Rr(a) || "method" in a || "result" in a) {
      droppedKeys.push(s);
      continue;
    }
    accepted[s] = a;
  }
  return {
    accepted: accepted,
    droppedKeys: droppedKeys
  };
}
function Fs(e) {
  throw new ws(cs.SendFailed, `ctx.mcpReq.${e} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function ri(id, method_4, r, signal_2, sessionId) {
  return {
    sessionId: sessionId,
    mcpReq: {
      id: id,
      method: method_4,
      _meta: r?._meta,
      requestState: as(void 0),
      signal: signal_2,
      send: () => Fs("send"),
      notify: () => Fs("notify")
    }
  };
}
async function si(e, t, r, s, a) {
  if (!Rr(s) || typeof s.method !== "string") throw new ws(cs.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, {
    key: r
  });
  let method_5 = s.method;
  if (!t.hasInputRequestMethod(method_5)) throw new ws(cs.InvalidResult, `Invalid input request '${r}': '${method_5}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, {
    key: r,
    method: method_5
  });
  let i = e.getRequestHandler(method_5);
  if (i === void 0) throw new ws(cs.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${method_5}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, {
    key: r,
    method: method_5
  });
  let params_5 = Rr(s.params) ? s.params : void 0;
  return await i({
    jsonrpc: "2.0",
    id: r,
    method: method_5,
    ...(params_5 !== void 0 && {
      params: params_5
    })
  }, e.buildContext(ri(r, method_5, params_5, a, e.sessionId)));
}
function ai(e, t) {
  return {
    ...(e?.signal !== void 0 && {
      signal: e.signal
    }),
    ...(e?.onprogress !== void 0 && {
      onprogress: e.onprogress
    }),
    ...(e?.resetTimeoutOnProgress !== void 0 && {
      resetTimeoutOnProgress: e.resetTimeoutOnProgress
    }),
    ...(e?.headers !== void 0 && {
      headers: e.headers
    }),
    ...(t.timeout !== void 0 && {
      timeout: t.timeout
    }),
    ...(t.maxTotalTimeout !== void 0 && {
      maxTotalTimeout: t.maxTotalTimeout
    }),
    allowInputRequired: !0
  };
}
function Ea(e, config_2, r, s) {
  let {
      codec: codec_2,
      request: request_2,
      options: options_2,
      flowStartedAt: flowStartedAt_2
    } = s,
    firstPayload_2 = {
      inputRequests: r.inputRequests,
      ...(r.requestState !== void 0 && {
        requestState: r.requestState
      })
    },
    hooks_2 = {
      dispatchInputRequest: (m, _, P) => si(e, codec_2, m, _, P),
      retry: (m, _) => s.retry(m, ai(options_2, _))
    };
  return Jn({
    config: config_2,
    method: request_2.method,
    originalParams: request_2.params,
    firstPayload: firstPayload_2,
    flowStartedAt: flowStartedAt_2,
    signal: options_2?.signal,
    requestOptions: {
      ...(options_2?.timeout !== void 0 && {
        timeout: options_2.timeout
      }),
      ...(options_2?.maxTotalTimeout !== void 0 && {
        maxTotalTimeout: options_2.maxTotalTimeout
      }),
      ...(options_2?.onprogress !== void 0 && {
        onprogress: options_2.onprogress
      })
    },
    hooks: hooks_2
  });
}
function oi(e) {
  return {
    resultType: "input_required",
    inputRequests: e.inputRequests,
    ...(e.requestState !== void 0 && {
      requestState: e.requestState
    })
  };
} /*!
  * content-type
  * Copyright(c) 2015 Douglas Christopher Wilson
  * MIT Licensed
  */
var ni = J(e => {
    var t = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
      r = /\\([\u000b\u0020-\u00ff])/g,
      s = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    e.parse = a;
    function a(l) {
      if (!l) throw TypeError("argument string is required");
      var c = typeof l === "object" ? n(l) : l;
      if (typeof c !== "string") throw TypeError("argument string is required to be a string");
      var d = c.indexOf(";"),
        m = d !== -1 ? c.slice(0, d).trim() : c.trim();
      if (!s.test(m)) throw TypeError("invalid media type");
      var _ = new i(m.toLowerCase());
      if (d !== -1) {
        var P, T, v;
        t.lastIndex = d;
        while (T = t.exec(c)) {
          if (T.index !== d) throw TypeError("invalid parameter format");
          if (d += T[0].length, P = T[1].toLowerCase(), v = T[2], v.charCodeAt(0) === 34) {
            if (v = v.slice(1, -1), v.indexOf("\\") !== -1) v = v.replace(r, "$1");
          }
          _.parameters[P] = v;
        }
        if (d !== c.length) throw TypeError("invalid parameter format");
      }
      return _;
    }
    function n(l) {
      var c;
      if (typeof l.getHeader === "function") c = l.getHeader("content-type");else if (typeof l.headers === "object") c = l.headers && l.headers["content-type"];
      if (typeof c !== "string") throw TypeError("content-type header is missing from object");
      return c;
    }
    function i(l) {
      this.parameters = Object.create(null), this.type = l;
    }
  }),
  ii = Sr(ni(), 1);
function Pa(e) {
  if (!e) return;
  try {
    return ii.parse(e).type;
  } catch {
    let t = (e.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e.slice(t.length).includes(",")) return;
    return t;
  }
}
var Ta = 10485760,
  fpr = class {
    _buffer;
    _maxBufferSize;
    constructor(e) {
      this._maxBufferSize = e?.maxBufferSize ?? Ta;
    }
    append(e) {
      if ((this._buffer?.length ?? 0) + e.length > this._maxBufferSize) throw this.clear(), Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`);
      this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
    }
    readMessage() {
      while (this._buffer) {
        let e = this._buffer.indexOf(`
`);
        if (e === -1) return null;
        let t = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
        this._buffer = this._buffer.subarray(e + 1);
        try {
          return Uxn(t);
        } catch (error) {
          if (error instanceof SyntaxError) continue;
          throw error;
        }
      }
      return null;
    }
    clear() {
      this._buffer = void 0;
    }
  };
function Uxn(e) {
  return T4.parse(JSON.parse(e));
}
function mpr(e) {
  return JSON.stringify(e) + `
`;
}
function Jt(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return {
    ...e
  };
}
function eEt(e = fetch, t) {
  if (!t) return e;
  return async (r, s) => e(r, {
    ...t,
    ...s,
    headers: s?.headers ? {
      ...Jt(t.headers),
      ...Jt(s.headers)
    } : t.headers
  });
}
var Tr = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    var t = class {};
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var r = class extends t {
      constructor(h) {
        super();
        if (!e.IDENTIFIER.test(h)) throw Error("CodeGen: name must be a valid identifier");
        this.str = h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return {
          [this.str]: 1
        };
      }
    };
    e.Name = r;
    var s = class extends t {
      constructor(h) {
        super();
        this._items = typeof h === "string" ? [h] : h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return !1;
        let h = this._items[0];
        return h === "" || h === '""';
      }
      get str() {
        var h;
        return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((acc, item) => `${acc}${item}`, "");
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((acc, item) => {
          if (item instanceof r) acc[item.str] = (acc[item.str] || 0) + 1;
          return acc;
        }, {});
      }
    };
    e._Code = s, e.nil = new s("");
    function a(h, ...g) {
      let p = [h[0]],
        R = 0;
      while (R < g.length) l(p, g[R]), p.push(h[++R]);
      return new s(p);
    }
    e._ = a;
    let n = new s("+");
    function i(h, ...g) {
      let p = [T(h[0])],
        R = 0;
      while (R < g.length) p.push(n), l(p, g[R]), p.push(n, T(h[++R]));
      return c(p), new s(p);
    }
    e.str = i;
    function l(h, g) {
      if (g instanceof s) h.push(...g._items);else if (g instanceof r) h.push(g);else h.push(_(g));
    }
    e.addCodeArg = l;
    function c(h) {
      let g = 1;
      while (g < h.length - 1) {
        if (h[g] === n) {
          let p = d(h[g - 1], h[g + 1]);
          if (p !== void 0) {
            h.splice(g - 1, 3, p);
            continue;
          }
          h[g++] = "+";
        }
        g++;
      }
    }
    function d(h, g) {
      if (g === '""') return h;
      if (h === '""') return g;
      if (typeof h == "string") {
        if (g instanceof r || h[h.length - 1] !== '"') return;
        if (typeof g != "string") return `${h.slice(0, -1)}${g}"`;
        if (g[0] === '"') return h.slice(0, -1) + g.slice(1);
        return;
      }
      if (typeof g == "string" && g[0] === '"' && !(h instanceof r)) return `"${h}${g.slice(1)}`;
    }
    function m(h, g) {
      return g.emptyStr() ? h : h.emptyStr() ? g : i`${h}${g}`;
    }
    e.strConcat = m;
    function _(h) {
      return typeof h == "number" || typeof h == "boolean" || h === null ? h : T(Array.isArray(h) ? h.join(",") : h);
    }
    function P(h) {
      return new s(T(h));
    }
    e.stringify = P;
    function T(h) {
      return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = T;
    function v(h) {
      return typeof h == "string" && e.IDENTIFIER.test(h) ? new s(`.${h}`) : a`[${h}]`;
    }
    e.getProperty = v;
    function y(h) {
      if (typeof h == "string" && e.IDENTIFIER.test(h)) return new s(`${h}`);
      throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
    }
    e.getEsmExportName = y;
    function f(h) {
      return new s(h.toString());
    }
    e.regexpCode = f;
  }),
  za = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    let t = Tr();
    var r = class extends Error {
        constructor(c) {
          super(`CodeGen: "code" for ${c} not defined`);
          this.value = c.value;
        }
      },
      s;
    (function (c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(s || (e.UsedValueState = s = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    var a = class {
      constructor({
        prefixes: prefixes,
        parent: parent
      } = {}) {
        this._names = {}, this._prefixes = prefixes, this._parent = parent;
      }
      toName(c) {
        return c instanceof t.Name ? c : this.name(c);
      }
      name(c) {
        return new t.Name(this._newName(c));
      }
      _newName(c) {
        let d = this._names[c] || this._nameGroup(c);
        return `${c}${d.index++}`;
      }
      _nameGroup(prefix) {
        var d, m;
        if (((m = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null || m === void 0 ? void 0 : m.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) throw Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        return this._names[prefix] = {
          prefix: prefix,
          index: 0
        };
      }
    };
    e.Scope = a;
    var n = class extends t.Name {
      constructor(c, d) {
        super(d);
        this.prefix = c;
      }
      setValue(c, {
        property: property,
        itemIndex: itemIndex
      }) {
        this.value = c, this.scopePath = t._`.${new t.Name(property)}[${itemIndex}]`;
      }
    };
    e.ValueScopeName = n;
    let i = t._`\n`;
    var l = class extends a {
      constructor(c) {
        super(c);
        this._values = {}, this._scope = c.scope, this.opts = {
          ...c,
          _n: c.lines ? i : t.nil
        };
      }
      get() {
        return this._scope;
      }
      name(c) {
        return new n(c, this._newName(c));
      }
      value(c, d) {
        var m;
        if (d.ref === void 0) throw Error("CodeGen: ref must be passed in value");
        let _ = this.toName(c),
          {
            prefix: P
          } = _,
          T = (m = d.key) !== null && m !== void 0 ? m : d.ref,
          v = this._values[P];
        if (v) {
          let h = v.get(T);
          if (h) return h;
        } else v = this._values[P] = new Map();
        v.set(T, _);
        let y = this._scope[P] || (this._scope[P] = []),
          itemIndex_2 = y.length;
        return y[itemIndex_2] = d.ref, _.setValue(d, {
          property: P,
          itemIndex: itemIndex_2
        }), _;
      }
      getValue(c, d) {
        let m = this._values[c];
        if (!m) return;
        return m.get(d);
      }
      scopeRefs(c, d = this._values) {
        return this._reduceValues(d, m => {
          if (m.scopePath === void 0) throw Error(`CodeGen: name "${m}" has no value`);
          return t._`${c}${m.scopePath}`;
        });
      }
      scopeCode(c = this._values, d, m) {
        return this._reduceValues(c, _ => {
          if (_.value === void 0) throw Error(`CodeGen: name "${_}" has no value`);
          return _.value.code;
        }, d, m);
      }
      _reduceValues(c, d, m = {}, _) {
        let nil = t.nil;
        for (let T in c) {
          let v = c[T];
          if (!v) continue;
          let y = m[T] = m[T] || new Map();
          v.forEach(item => {
            if (y.has(item)) return;
            y.set(item, s.Started);
            let h = d(item);
            if (h) {
              let g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              nil = t._`${nil}${g} ${item} = ${h};${this.opts._n}`;
            } else if (h = _ === null || _ === void 0 ? void 0 : _(item)) nil = t._`${nil}${h}${this.opts._n}`;else throw new r(item);
            y.set(item, s.Completed);
          });
        }
        return nil;
      }
    };
    e.ValueScope = l;
  }),
  te = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    let t = Tr(),
      r = za();
    var s = Tr();
    Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return s._;
      }
    }), Object.defineProperty(e, "str", {
      enumerable: !0,
      get: function () {
        return s.str;
      }
    }), Object.defineProperty(e, "strConcat", {
      enumerable: !0,
      get: function () {
        return s.strConcat;
      }
    }), Object.defineProperty(e, "nil", {
      enumerable: !0,
      get: function () {
        return s.nil;
      }
    }), Object.defineProperty(e, "getProperty", {
      enumerable: !0,
      get: function () {
        return s.getProperty;
      }
    }), Object.defineProperty(e, "stringify", {
      enumerable: !0,
      get: function () {
        return s.stringify;
      }
    }), Object.defineProperty(e, "regexpCode", {
      enumerable: !0,
      get: function () {
        return s.regexpCode;
      }
    }), Object.defineProperty(e, "Name", {
      enumerable: !0,
      get: function () {
        return s.Name;
      }
    });
    var a = za();
    Object.defineProperty(e, "Scope", {
      enumerable: !0,
      get: function () {
        return a.Scope;
      }
    }), Object.defineProperty(e, "ValueScope", {
      enumerable: !0,
      get: function () {
        return a.ValueScope;
      }
    }), Object.defineProperty(e, "ValueScopeName", {
      enumerable: !0,
      get: function () {
        return a.ValueScopeName;
      }
    }), Object.defineProperty(e, "varKinds", {
      enumerable: !0,
      get: function () {
        return a.varKinds;
      }
    }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    var n = class {
        optimizeNodes() {
          return this;
        }
        optimizeNames(w, O) {
          return this;
        }
      },
      i = class extends n {
        constructor(w, O, L) {
          super();
          this.varKind = w, this.name = O, this.rhs = L;
        }
        render({
          es5: es5,
          _n: _n_2
        }) {
          let L = es5 ? r.varKinds.var : this.varKind,
            G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${L} ${this.name}${G};` + _n_2;
        }
        optimizeNames(w, O) {
          if (!w[this.name.str]) return;
          if (this.rhs) this.rhs = B(this.rhs, w, O);
          return this;
        }
        get names() {
          return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
        }
      },
      l = class extends n {
        constructor(w, O, L) {
          super();
          this.lhs = w, this.rhs = O, this.sideEffects = L;
        }
        render({
          _n: _n_3
        }) {
          return `${this.lhs} = ${this.rhs};` + _n_3;
        }
        optimizeNames(w, O) {
          if (this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects) return;
          return this.rhs = B(this.rhs, w, O), this;
        }
        get names() {
          return W(this.lhs instanceof t.Name ? {} : {
            ...this.lhs.names
          }, this.rhs);
        }
      },
      c = class extends l {
        constructor(w, O, L, G) {
          super(w, L, G);
          this.op = O;
        }
        render({
          _n: _n_4
        }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + _n_4;
        }
      },
      d = class extends n {
        constructor(w) {
          super();
          this.label = w, this.names = {};
        }
        render({
          _n: _n_5
        }) {
          return `${this.label}:` + _n_5;
        }
      },
      m = class extends n {
        constructor(w) {
          super();
          this.label = w, this.names = {};
        }
        render({
          _n: _n_6
        }) {
          return `break${this.label ? ` ${this.label}` : ""};` + _n_6;
        }
      },
      _ = class extends n {
        constructor(w) {
          super();
          this.error = w;
        }
        render({
          _n: _n_7
        }) {
          return `throw ${this.error};` + _n_7;
        }
        get names() {
          return this.error.names;
        }
      },
      P = class extends n {
        constructor(w) {
          super();
          this.code = w;
        }
        render({
          _n: _n_8
        }) {
          return `${this.code};` + _n_8;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(w, O) {
          return this.code = B(this.code, w, O), this;
        }
        get names() {
          return this.code instanceof t._CodeOrName ? this.code.names : {};
        }
      },
      T = class extends n {
        constructor(w = []) {
          super();
          this.nodes = w;
        }
        render(w) {
          return this.nodes.reduce((acc, item) => acc + item.render(w), "");
        }
        optimizeNodes() {
          let {
              nodes: nodes
            } = this,
            O = nodes.length;
          while (O--) {
            let L = nodes[O].optimizeNodes();
            if (Array.isArray(L)) nodes.splice(O, 1, ...L);else if (L) nodes[O] = L;else nodes.splice(O, 1);
          }
          return nodes.length > 0 ? this : void 0;
        }
        optimizeNames(w, O) {
          let {
              nodes: nodes_2
            } = this,
            G = nodes_2.length;
          while (G--) {
            let Y = nodes_2[G];
            if (Y.optimizeNames(w, O)) continue;
            se(w, Y.names), nodes_2.splice(G, 1);
          }
          return nodes_2.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((acc, item) => H(acc, item.names), {});
        }
      },
      v = class extends T {
        render(w) {
          return "{" + w._n + super.render(w) + "}" + w._n;
        }
      },
      y = class extends T {},
      f = class extends v {};
    f.kind = "else";
    var h = class w extends v {
      constructor(O, L) {
        super(L);
        this.condition = O;
      }
      render(O) {
        let L = `if(${this.condition})` + super.render(O);
        if (this.else) L += "else " + this.else.render(O);
        return L;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let condition = this.condition;
        if (condition === !0) return this.nodes;
        let L = this.else;
        if (L) {
          let G = L.optimizeNodes();
          L = this.else = Array.isArray(G) ? new f(G) : G;
        }
        if (L) {
          if (condition === !1) return L instanceof w ? L : L.nodes;
          if (this.nodes.length) return this;
          return new w(le(condition), L instanceof w ? [L] : L.nodes);
        }
        if (condition === !1 || !this.nodes.length) return;
        return this;
      }
      optimizeNames(O, L) {
        var G;
        if (this.else = (G = this.else) === null || G === void 0 ? void 0 : G.optimizeNames(O, L), !(super.optimizeNames(O, L) || this.else)) return;
        return this.condition = B(this.condition, O, L), this;
      }
      get names() {
        let names = super.names;
        if (W(names, this.condition), this.else) H(names, this.else.names);
        return names;
      }
    };
    h.kind = "if";
    var g = class extends v {};
    g.kind = "for";
    var p = class extends g {
        constructor(w) {
          super();
          this.iteration = w;
        }
        render(w) {
          return `for(${this.iteration})` + super.render(w);
        }
        optimizeNames(w, O) {
          if (!super.optimizeNames(w, O)) return;
          return this.iteration = B(this.iteration, w, O), this;
        }
        get names() {
          return H(super.names, this.iteration.names);
        }
      },
      R = class extends g {
        constructor(w, O, L, G) {
          super();
          this.varKind = w, this.name = O, this.from = L, this.to = G;
        }
        render(w) {
          let O = w.es5 ? r.varKinds.var : this.varKind,
            {
              name: name,
              from: G,
              to: to_2
            } = this;
          return `for(${O} ${name}=${G}; ${name}<${to_2}; ${name}++)` + super.render(w);
        }
        get names() {
          return W(W(super.names, this.from), this.to);
        }
      },
      k = class extends g {
        constructor(w, O, L, G) {
          super();
          this.loop = w, this.varKind = O, this.name = L, this.iterable = G;
        }
        render(w) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
        }
        optimizeNames(w, O) {
          if (!super.optimizeNames(w, O)) return;
          return this.iterable = B(this.iterable, w, O), this;
        }
        get names() {
          return H(super.names, this.iterable.names);
        }
      },
      b = class extends v {
        constructor(w, O, L) {
          super();
          this.name = w, this.args = O, this.async = L;
        }
        render(w) {
          return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
        }
      };
    b.kind = "func";
    var S = class extends T {
      render(w) {
        return "return " + super.render(w);
      }
    };
    S.kind = "return";
    var I = class extends v {
        render(w) {
          let O = "try" + super.render(w);
          if (this.catch) O += this.catch.render(w);
          if (this.finally) O += this.finally.render(w);
          return O;
        }
        optimizeNodes() {
          var w, O;
          return super.optimizeNodes(), (w = this.catch) === null || w === void 0 || w.optimizeNodes(), (O = this.finally) === null || O === void 0 || O.optimizeNodes(), this;
        }
        optimizeNames(w, O) {
          var L, G;
          return super.optimizeNames(w, O), (L = this.catch) === null || L === void 0 || L.optimizeNames(w, O), (G = this.finally) === null || G === void 0 || G.optimizeNames(w, O), this;
        }
        get names() {
          let names_2 = super.names;
          if (this.catch) H(names_2, this.catch.names);
          if (this.finally) H(names_2, this.finally.names);
          return names_2;
        }
      },
      U = class extends v {
        constructor(w) {
          super();
          this.error = w;
        }
        render(w) {
          return `catch(${this.error})` + super.render(w);
        }
      };
    U.kind = "catch";
    var K = class extends v {
      render(w) {
        return "finally" + super.render(w);
      }
    };
    K.kind = "finally";
    var j = class {
      constructor(parent_2, O = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
          ...O,
          _n: O.lines ? `
` : ""
        }, this._extScope = parent_2, this._scope = new r.Scope({
          parent: parent_2
        }), this._nodes = [new y()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(w) {
        return this._scope.name(w);
      }
      scopeName(w) {
        return this._extScope.name(w);
      }
      scopeValue(w, O) {
        let L = this._extScope.value(w, O);
        return (this._values[L.prefix] || (this._values[L.prefix] = new Set())).add(L), L;
      }
      getScopeValue(w, O) {
        return this._extScope.getValue(w, O);
      }
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, O, L, G) {
        let Y = this._scope.toName(O);
        if (L !== void 0 && G) this._constants[Y.str] = L;
        return this._leafNode(new i(w, Y, L)), Y;
      }
      const(w, O, L) {
        return this._def(r.varKinds.const, w, O, L);
      }
      let(w, O, L) {
        return this._def(r.varKinds.let, w, O, L);
      }
      var(w, O, L) {
        return this._def(r.varKinds.var, w, O, L);
      }
      assign(w, O, L) {
        return this._leafNode(new l(w, O, L));
      }
      add(w, O) {
        return this._leafNode(new c(w, e.operators.ADD, O));
      }
      code(w) {
        if (typeof w == "function") w();else if (w !== t.nil) this._leafNode(new P(w));
        return this;
      }
      object(...w) {
        let O = ["{"];
        for (let [L, G] of w) {
          if (O.length > 1) O.push(",");
          if (O.push(L), L !== G || this.opts.es5) O.push(":"), (0, t.addCodeArg)(O, G);
        }
        return O.push("}"), new t._Code(O);
      }
      if(w, O, L) {
        if (this._blockNode(new h(w)), O && L) this.code(O).else().code(L).endIf();else if (O) this.code(O).endIf();else if (L) throw Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(w) {
        return this._elseNode(new h(w));
      }
      else() {
        return this._elseNode(new f());
      }
      endIf() {
        return this._endBlockNode(h, f);
      }
      _for(w, O) {
        if (this._blockNode(w), O) this.code(O).endFor();
        return this;
      }
      for(w, O) {
        return this._for(new p(w), O);
      }
      forRange(w, O, L, G, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        let re = this._scope.toName(w);
        return this._for(new R(Y, re, O, L), () => G(re));
      }
      forOf(w, O, L, G = r.varKinds.const) {
        let Y = this._scope.toName(w);
        if (this.opts.es5) {
          let re = O instanceof t.Name ? O : this.var("_arr", O);
          return this.forRange("_i", 0, t._`${re}.length`, Q => {
            this.var(Y, t._`${re}[${Q}]`), L(Y);
          });
        }
        return this._for(new k("of", G, Y, O), () => L(Y));
      }
      forIn(w, O, L, G = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(w, t._`Object.keys(${O})`, L);
        let Y = this._scope.toName(w);
        return this._for(new k("in", G, Y, O), () => L(Y));
      }
      endFor() {
        return this._endBlockNode(g);
      }
      label(w) {
        return this._leafNode(new d(w));
      }
      break(w) {
        return this._leafNode(new m(w));
      }
      return(w) {
        let O = new S();
        if (this._blockNode(O), this.code(w), O.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
        return this._endBlockNode(S);
      }
      try(w, O, L) {
        if (!O && !L) throw Error('CodeGen: "try" without "catch" and "finally"');
        let G = new I();
        if (this._blockNode(G), this.code(w), O) {
          let Y = this.name("e");
          this._currNode = G.catch = new U(Y), O(Y);
        }
        if (L) this._currNode = G.finally = new K(), this.code(L);
        return this._endBlockNode(U, K);
      }
      throw(w) {
        return this._leafNode(new _(w));
      }
      block(w, O) {
        if (this._blockStarts.push(this._nodes.length), w) this.code(w).endBlock(O);
        return this;
      }
      endBlock(w) {
        let O = this._blockStarts.pop();
        if (O === void 0) throw Error("CodeGen: not in self-balancing block");
        let L = this._nodes.length - O;
        if (L < 0 || w !== void 0 && L !== w) throw Error(`CodeGen: wrong number of nodes: ${L} vs ${w} expected`);
        return this._nodes.length = O, this;
      }
      func(w, O = t.nil, L, G) {
        if (this._blockNode(new b(w, O, L)), G) this.code(G).endFunc();
        return this;
      }
      endFunc() {
        return this._endBlockNode(b);
      }
      optimize(w = 1) {
        while (w-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(w) {
        return this._currNode.nodes.push(w), this;
      }
      _blockNode(w) {
        this._currNode.nodes.push(w), this._nodes.push(w);
      }
      _endBlockNode(w, O) {
        let _currNode = this._currNode;
        if (_currNode instanceof w || O && _currNode instanceof O) return this._nodes.pop(), this;
        throw Error(`CodeGen: not in block "${O ? `${w.kind}/${O.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        let _currNode_2 = this._currNode;
        if (!(_currNode_2 instanceof h)) throw Error('CodeGen: "else" without "if"');
        return this._currNode = _currNode_2.else = w, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        let _nodes = this._nodes;
        return _nodes[_nodes.length - 1];
      }
      set _currNode(w) {
        let _nodes_2 = this._nodes;
        _nodes_2[_nodes_2.length - 1] = w;
      }
    };
    e.CodeGen = j;
    function H(w, O) {
      for (let L in O) w[L] = (w[L] || 0) + (O[L] || 0);
      return w;
    }
    function W(w, O) {
      return O instanceof t._CodeOrName ? H(w, O.names) : w;
    }
    function B(w, O, L) {
      if (w instanceof t.Name) return G(w);
      if (!Y(w)) return w;
      return new t._Code(w._items.reduce((acc, item) => {
        if (item instanceof t.Name) item = G(item);
        if (item instanceof t._Code) acc.push(...item._items);else acc.push(item);
        return acc;
      }, []));
      function G(re) {
        let Q = L[re.str];
        if (Q === void 0 || O[re.str] !== 1) return re;
        return delete O[re.str], Q;
      }
      function Y(re) {
        return re instanceof t._Code && re._items.some(item => item instanceof t.Name && O[item.str] === 1 && L[item.str] !== void 0);
      }
    }
    function se(w, O) {
      for (let L in O) w[L] = (w[L] || 0) - (O[L] || 0);
    }
    function le(w) {
      return typeof w == "boolean" || typeof w == "number" || w === null ? !w : t._`!${x(w)}`;
    }
    e.not = le;
    let ie = D(e.operators.AND);
    function me(...w) {
      return w.reduce(ie);
    }
    e.and = me;
    let oe = D(e.operators.OR);
    function N(...w) {
      return w.reduce(oe);
    }
    e.or = N;
    function D(w) {
      return (O, L) => O === t.nil ? L : L === t.nil ? O : t._`${x(O)} ${w} ${x(L)}`;
    }
    function x(w) {
      return w instanceof t.Name ? w : t._`(${w})`;
    }
  }),
  ne = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
    let t = te(),
      r = Tr();
    function s(b) {
      let S = {};
      for (let I of b) S[I] = !0;
      return S;
    }
    e.toHash = s;
    function a(b, S) {
      if (typeof S == "boolean") return S;
      if (Object.keys(S).length === 0) return !0;
      return n(b, S), !i(S, b.self.RULES.all);
    }
    e.alwaysValidSchema = a;
    function n(b, S = b.schema) {
      let {
        opts: opts,
        self: self
      } = b;
      if (!opts.strictSchema) return;
      if (typeof S === "boolean") return;
      let keywords = self.RULES.keywords;
      for (let j in S) if (!keywords[j]) k(b, `unknown keyword: "${j}"`);
    }
    e.checkUnknownRules = n;
    function i(b, S) {
      if (typeof b == "boolean") return !b;
      for (let I in b) if (S[I]) return !0;
      return !1;
    }
    e.schemaHasRules = i;
    function l(b, S) {
      if (typeof b == "boolean") return !b;
      for (let I in b) if (I !== "$ref" && S.all[I]) return !0;
      return !1;
    }
    e.schemaHasRulesButRef = l;
    function c({
      topSchemaRef: topSchemaRef,
      schemaPath: schemaPath
    }, I, U, K) {
      if (!K) {
        if (typeof I == "number" || typeof I == "boolean") return I;
        if (typeof I == "string") return t._`${I}`;
      }
      return t._`${topSchemaRef}${schemaPath}${(0, t.getProperty)(U)}`;
    }
    e.schemaRefOrVal = c;
    function d(b) {
      return P(decodeURIComponent(b));
    }
    e.unescapeFragment = d;
    function m(b) {
      return encodeURIComponent(_(b));
    }
    e.escapeFragment = m;
    function _(b) {
      if (typeof b == "number") return `${b}`;
      return b.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    e.escapeJsonPointer = _;
    function P(b) {
      return b.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = P;
    function T(b, S) {
      if (Array.isArray(b)) for (let I of b) S(I);else S(b);
    }
    e.eachItem = T;
    function v({
      mergeNames: mergeNames,
      mergeToName: mergeToName,
      mergeValues: mergeValues,
      resultToName: resultToName
    }) {
      return (K, j, H, W) => {
        let B = H === void 0 ? j : H instanceof t.Name ? (j instanceof t.Name ? mergeNames(K, j, H) : mergeToName(K, j, H), H) : j instanceof t.Name ? (mergeToName(K, H, j), j) : mergeValues(j, H);
        return W === t.Name && !(B instanceof t.Name) ? resultToName(K, B) : B;
      };
    }
    e.mergeEvaluated = {
      props: v({
        mergeNames: (b, S, I) => b.if(t._`${I} !== true && ${S} !== undefined`, () => {
          b.if(t._`${S} === true`, () => b.assign(I, !0), () => b.assign(I, t._`${I} || {}`).code(t._`Object.assign(${I}, ${S})`));
        }),
        mergeToName: (b, S, I) => b.if(t._`${I} !== true`, () => {
          if (S === !0) b.assign(I, !0);else b.assign(I, t._`${I} || {}`), f(b, I, S);
        }),
        mergeValues: (b, S) => b === !0 ? !0 : {
          ...b,
          ...S
        },
        resultToName: resultToName_2
      }),
      items: v({
        mergeNames: (b, S, I) => b.if(t._`${I} !== true && ${S} !== undefined`, () => b.assign(I, t._`${S} === true ? true : ${I} > ${S} ? ${I} : ${S}`)),
        mergeToName: (b, S, I) => b.if(t._`${I} !== true`, () => b.assign(I, S === !0 ? !0 : t._`${I} > ${S} ? ${I} : ${S}`)),
        mergeValues: (b, S) => b === !0 ? !0 : Math.max(b, S),
        resultToName: (b, S) => b.var("items", S)
      })
    };
    function resultToName_2(b, S) {
      if (S === !0) return b.var("props", !0);
      let I = b.var("props", t._`{}`);
      if (S !== void 0) f(b, I, S);
      return I;
    }
    e.evaluatedPropsToName = resultToName_2;
    function f(b, S, I) {
      Object.keys(I).forEach(item => b.assign(t._`${S}${(0, t.getProperty)(item)}`, !0));
    }
    e.setEvaluated = f;
    let h = {};
    function g(b, ref) {
      return b.scopeValue("func", {
        ref: ref,
        code: h[ref.code] || (h[ref.code] = new r._Code(ref.code))
      });
    }
    e.useFunc = g;
    var p;
    (function (b) {
      b[b.Num = 0] = "Num", b[b.Str = 1] = "Str";
    })(p || (e.Type = p = {}));
    function R(b, S, I) {
      if (b instanceof t.Name) {
        let U = S === p.Num;
        return I ? U ? t._`"[" + ${b} + "]"` : t._`"['" + ${b} + "']"` : U ? t._`"/" + ${b}` : t._`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return I ? (0, t.getProperty)(b).toString() : "/" + _(b);
    }
    e.getErrorPath = R;
    function k(b, S, I = b.opts.strictSchema) {
      if (!I) return;
      if (S = `strict mode: ${S}`, I === !0) throw Error(S);
      b.self.logger.warn(S);
    }
    e.checkStrictMode = k;
  }),
  qe = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = {
        data: new t.Name("data"),
        valCxt: new t.Name("valCxt"),
        instancePath: new t.Name("instancePath"),
        parentData: new t.Name("parentData"),
        parentDataProperty: new t.Name("parentDataProperty"),
        rootData: new t.Name("rootData"),
        dynamicAnchors: new t.Name("dynamicAnchors"),
        vErrors: new t.Name("vErrors"),
        errors: new t.Name("errors"),
        this: new t.Name("this"),
        self: new t.Name("self"),
        scope: new t.Name("scope"),
        json: new t.Name("json"),
        jsonPos: new t.Name("jsonPos"),
        jsonLen: new t.Name("jsonLen"),
        jsonPart: new t.Name("jsonPart")
      };
    e.default = r;
  }),
  Cr = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    let t = te(),
      r = ne(),
      s = qe();
    e.keywordError = {
      message: ({
        keyword: keyword
      }) => t.str`must pass "${keyword}" keyword validation`
    }, e.keyword$DataError = {
      message: ({
        keyword: keyword_2,
        schemaType: schemaType
      }) => schemaType ? t.str`"${keyword_2}" keyword must be ${schemaType} ($data)` : t.str`"${keyword_2}" keyword is invalid ($data)`
    };
    function a(f, h = e.keywordError, g, p) {
      let {
          it: it_2
        } = f,
        {
          gen: gen,
          compositeRule: compositeRule,
          allErrors: allErrors
        } = it_2,
        I = _(f, h, g);
      if (p !== null && p !== void 0 ? p : compositeRule || allErrors) c(gen, I);else d(it_2, t._`[${I}]`);
    }
    e.reportError = a;
    function n(f, h = e.keywordError, g) {
      let {
          it: it_3
        } = f,
        {
          gen: gen_2,
          compositeRule: compositeRule_2,
          allErrors: allErrors_2
        } = it_3;
      if (c(gen_2, _(f, h, g)), !(compositeRule_2 || allErrors_2)) d(it_3, s.default.vErrors);
    }
    e.reportExtraError = n;
    function i(f, h) {
      f.assign(s.default.errors, h), f.if(t._`${s.default.vErrors} !== null`, () => f.if(h, () => f.assign(t._`${s.default.vErrors}.length`, h), () => f.assign(s.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function l({
      gen: gen_3,
      keyword: keyword_3,
      schemaValue: schemaValue,
      data: data_2,
      errsCount: errsCount,
      it: it_4
    }) {
      if (errsCount === void 0) throw Error("ajv implementation error");
      let b = gen_3.name("err");
      gen_3.forRange("i", errsCount, s.default.errors, S => {
        if (gen_3.const(b, t._`${s.default.vErrors}[${S}]`), gen_3.if(t._`${b}.instancePath === undefined`, () => gen_3.assign(t._`${b}.instancePath`, (0, t.strConcat)(s.default.instancePath, it_4.errorPath))), gen_3.assign(t._`${b}.schemaPath`, t.str`${it_4.errSchemaPath}/${keyword_3}`), it_4.opts.verbose) gen_3.assign(t._`${b}.schema`, schemaValue), gen_3.assign(t._`${b}.data`, data_2);
      });
    }
    e.extendErrors = l;
    function c(f, h) {
      let g = f.const("err", h);
      f.if(t._`${s.default.vErrors} === null`, () => f.assign(s.default.vErrors, t._`[${g}]`), t._`${s.default.vErrors}.push(${g})`), f.code(t._`${s.default.errors}++`);
    }
    function d(f, h) {
      let {
        gen: gen_4,
        validateName: validateName,
        schemaEnv: schemaEnv
      } = f;
      if (schemaEnv.$async) gen_4.throw(t._`new ${f.ValidationError}(${h})`);else gen_4.assign(t._`${validateName}.errors`, h), gen_4.return(!1);
    }
    let m = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function _(f, h, g) {
      let {
        createErrors: createErrors
      } = f.it;
      if (createErrors === !1) return t._`{}`;
      return P(f, h, g);
    }
    function P(f, h, g = {}) {
      let {
          gen: gen_5,
          it: it_5
        } = f,
        k = [T(it_5, g), v(f, g)];
      return y(f, h, k), gen_5.object(...k);
    }
    function T({
      errorPath: errorPath
    }, {
      instancePath: instancePath
    }) {
      let g = instancePath ? t.str`${errorPath}${(0, r.getErrorPath)(instancePath, r.Type.Str)}` : errorPath;
      return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, g)];
    }
    function v({
      keyword: keyword_4,
      it: {
        errSchemaPath: errSchemaPath
      }
    }, {
      schemaPath: schemaPath_2,
      parentSchema: parentSchema
    }) {
      let R = parentSchema ? errSchemaPath : t.str`${errSchemaPath}/${keyword_4}`;
      if (schemaPath_2) R = t.str`${R}${(0, r.getErrorPath)(schemaPath_2, r.Type.Str)}`;
      return [m.schemaPath, R];
    }
    function y(f, {
      params: params_6,
      message: message_5
    }, p) {
      let {
          keyword: keyword_5,
          data: data_3,
          schemaValue: schemaValue_2,
          it: it_6
        } = f,
        {
          opts: opts_2,
          propertyName: propertyName,
          topSchemaRef: topSchemaRef_2,
          schemaPath: schemaPath_3
        } = it_6;
      if (p.push([m.keyword, keyword_5], [m.params, typeof params_6 == "function" ? params_6(f) : params_6 || t._`{}`]), opts_2.messages) p.push([m.message, typeof message_5 == "function" ? message_5(f) : message_5]);
      if (opts_2.verbose) p.push([m.schema, schemaValue_2], [m.parentSchema, t._`${topSchemaRef_2}${schemaPath_3}`], [s.default.data, data_3]);
      if (propertyName) p.push([m.propertyName, propertyName]);
    }
  }),
  ci = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
    let t = Cr(),
      r = te(),
      s = qe(),
      a = {
        message: "boolean schema is false"
      };
    function n(c) {
      let {
        gen: gen_6,
        schema: schema,
        validateName: validateName_2
      } = c;
      if (schema === !1) l(c, !1);else if (typeof schema == "object" && schema.$async === !0) gen_6.return(s.default.data);else gen_6.assign(r._`${validateName_2}.errors`, null), gen_6.return(!0);
    }
    e.topBoolOrEmptySchema = n;
    function i(c, d) {
      let {
        gen: gen_7,
        schema: schema_2
      } = c;
      if (schema_2 === !1) gen_7.var(d, !1), l(c);else gen_7.var(d, !0);
    }
    e.boolOrEmptySchema = i;
    function l(it_7, d) {
      let {
          gen: gen_8,
          data: data_4
        } = it_7,
        P = {
          gen: gen_8,
          keyword: "false schema",
          data: data_4,
          schema: !1,
          schemaCode: !1,
          schemaValue: !1,
          params: {},
          it: it_7
        };
      (0, t.reportError)(P, a, void 0, d);
    }
  }),
  Ca = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getRules = e.isJSONType = void 0;
    let t = new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
    function r(a) {
      return typeof a == "string" && t.has(a);
    }
    e.isJSONType = r;
    function s() {
      let a = {
        number: {
          type: "number",
          rules: []
        },
        string: {
          type: "string",
          rules: []
        },
        array: {
          type: "array",
          rules: []
        },
        object: {
          type: "object",
          rules: []
        }
      };
      return {
        types: {
          ...a,
          integer: !0,
          boolean: !0,
          null: !0
        },
        rules: [{
          rules: []
        }, a.number, a.string, a.array, a.object],
        post: {
          rules: []
        },
        all: {},
        keywords: {}
      };
    }
    e.getRules = s;
  }),
  ka = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0;
    function t({
      schema: schema_3,
      self: self_2
    }, i) {
      let l = self_2.RULES.types[i];
      return l && l !== !0 && r(schema_3, l);
    }
    e.schemaHasRulesForType = t;
    function r(a, n) {
      return n.rules.some(item => s(a, item));
    }
    e.shouldUseGroup = r;
    function s(a, n) {
      var i;
      return a[n.keyword] !== void 0 || ((i = n.definition.implements) === null || i === void 0 ? void 0 : i.some(item => a[item] !== void 0));
    }
    e.shouldUseRule = s;
  }),
  zr = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
    let t = Ca(),
      r = ka(),
      s = Cr(),
      a = te(),
      n = ne();
    var i;
    (function (p) {
      p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
    })(i || (e.DataType = i = {}));
    function l(p) {
      let R = c(p.type);
      if (R.includes("null")) {
        if (p.nullable === !1) throw Error("type: null contradicts nullable: false");
      } else {
        if (!R.length && p.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
        if (p.nullable === !0) R.push("null");
      }
      return R;
    }
    e.getSchemaTypes = l;
    function c(p) {
      let R = Array.isArray(p) ? p : p ? [p] : [];
      if (R.every(t.isJSONType)) return R;
      throw Error("type must be JSONType or JSONType[]: " + R.join(","));
    }
    e.getJSONTypes = c;
    function d(p, R) {
      let {
          gen: gen_9,
          data: data_5,
          opts: opts_3
        } = p,
        I = _(R, opts_3.coerceTypes),
        U = R.length > 0 && !(I.length === 0 && R.length === 1 && (0, r.schemaHasRulesForType)(p, R[0]));
      if (U) {
        let K = y(R, data_5, opts_3.strictNumbers, i.Wrong);
        gen_9.if(K, () => {
          if (I.length) P(p, R, I);else h(p);
        });
      }
      return U;
    }
    e.coerceAndCheckDataType = d;
    let m = new Set(["string", "number", "integer", "boolean", "null"]);
    function _(p, R) {
      return R ? p.filter(item => m.has(item) || R === "array" && item === "array") : [];
    }
    function P(p, R, k) {
      let {
          gen: gen_10,
          data: data_6,
          opts: opts_4
        } = p,
        U = gen_10.let("dataType", a._`typeof ${data_6}`),
        K = gen_10.let("coerced", a._`undefined`);
      if (opts_4.coerceTypes === "array") gen_10.if(a._`${U} == 'object' && Array.isArray(${data_6}) && ${data_6}.length == 1`, () => gen_10.assign(data_6, a._`${data_6}[0]`).assign(U, a._`typeof ${data_6}`).if(y(R, data_6, opts_4.strictNumbers), () => gen_10.assign(K, data_6)));
      gen_10.if(a._`${K} !== undefined`);
      for (let H of k) if (m.has(H) || H === "array" && opts_4.coerceTypes === "array") j(H);
      gen_10.else(), h(p), gen_10.endIf(), gen_10.if(a._`${K} !== undefined`, () => {
        gen_10.assign(data_6, K), T(p, K);
      });
      function j(H) {
        switch (H) {
          case "string":
            gen_10.elseIf(a._`${U} == "number" || ${U} == "boolean"`).assign(K, a._`"" + ${data_6}`).elseIf(a._`${data_6} === null`).assign(K, a._`""`);
            return;
          case "number":
            gen_10.elseIf(a._`${U} == "boolean" || ${data_6} === null
              || (${U} == "string" && ${data_6} && ${data_6} == +${data_6})`).assign(K, a._`+${data_6}`);
            return;
          case "integer":
            gen_10.elseIf(a._`${U} === "boolean" || ${data_6} === null
              || (${U} === "string" && ${data_6} && ${data_6} == +${data_6} && !(${data_6} % 1))`).assign(K, a._`+${data_6}`);
            return;
          case "boolean":
            gen_10.elseIf(a._`${data_6} === "false" || ${data_6} === 0 || ${data_6} === null`).assign(K, !1).elseIf(a._`${data_6} === "true" || ${data_6} === 1`).assign(K, !0);
            return;
          case "null":
            gen_10.elseIf(a._`${data_6} === "" || ${data_6} === 0 || ${data_6} === false`), gen_10.assign(K, null);
            return;
          case "array":
            gen_10.elseIf(a._`${U} === "string" || ${U} === "number"
              || ${U} === "boolean" || ${data_6} === null`).assign(K, a._`[${data_6}]`);
        }
      }
    }
    function T({
      gen: gen_11,
      parentData: parentData,
      parentDataProperty: parentDataProperty
    }, b) {
      gen_11.if(a._`${parentData} !== undefined`, () => gen_11.assign(a._`${parentData}[${parentDataProperty}]`, b));
    }
    function v(p, R, k, b = i.Correct) {
      let S = b === i.Correct ? a.operators.EQ : a.operators.NEQ,
        I;
      switch (p) {
        case "null":
          return a._`${R} ${S} null`;
        case "array":
          I = a._`Array.isArray(${R})`;
          break;
        case "object":
          I = a._`${R} && typeof ${R} == "object" && !Array.isArray(${R})`;
          break;
        case "integer":
          I = U(a._`!(${R} % 1) && !isNaN(${R})`);
          break;
        case "number":
          I = U();
          break;
        default:
          return a._`typeof ${R} ${S} ${p}`;
      }
      return b === i.Correct ? I : (0, a.not)(I);
      function U(K = a.nil) {
        return (0, a.and)(a._`typeof ${R} == "number"`, K, k ? a._`isFinite(${R})` : a.nil);
      }
    }
    e.checkDataType = v;
    function y(p, R, k, b) {
      if (p.length === 1) return v(p[0], R, k, b);
      let S,
        I = (0, n.toHash)(p);
      if (I.array && I.object) {
        let U = a._`typeof ${R} != "object"`;
        S = I.null ? U : a._`!${R} || ${U}`, delete I.null, delete I.array, delete I.object;
      } else S = a.nil;
      if (I.number) delete I.integer;
      for (let U in I) S = (0, a.and)(S, v(U, R, k, b));
      return S;
    }
    e.checkDataTypes = y;
    let f = {
      message: ({
        schema: schema_4
      }) => `must be ${schema_4}`,
      params: ({
        schema: schema_5,
        schemaValue: schemaValue_3
      }) => typeof schema_5 == "string" ? a._`{type: ${schema_5}}` : a._`{type: ${schemaValue_3}}`
    };
    function h(p) {
      let R = g(p);
      (0, s.reportError)(R, f);
    }
    e.reportTypeError = h;
    function g(it_8) {
      let {
          gen: gen_12,
          data: data_7,
          schema: b
        } = it_8,
        S = (0, n.schemaRefOrVal)(it_8, b, "type");
      return {
        gen: gen_12,
        keyword: "type",
        data: data_7,
        schema: b.type,
        schemaCode: S,
        schemaValue: S,
        parentSchema: b,
        params: {},
        it: it_8
      };
    }
  }),
  li = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.assignDefaults = void 0;
    let t = te(),
      r = ne();
    function s(n, i) {
      let {
        properties: properties_2,
        items: items
      } = n.schema;
      if (i === "object" && properties_2) for (let d in properties_2) a(n, d, properties_2[d].default);else if (i === "array" && Array.isArray(items)) items.forEach((item, index) => a(n, index, item.default));
    }
    e.assignDefaults = s;
    function a(n, i, l) {
      let {
        gen: gen_13,
        compositeRule: compositeRule_3,
        data: data_8,
        opts: opts_5
      } = n;
      if (l === void 0) return;
      let P = t._`${data_8}${(0, t.getProperty)(i)}`;
      if (compositeRule_3) {
        (0, r.checkStrictMode)(n, `default is ignored for: ${P}`);
        return;
      }
      let T = t._`${P} === undefined`;
      if (opts_5.useDefaults === "empty") T = t._`${T} || ${P} === null || ${P} === ""`;
      gen_13.if(T, t._`${P} = ${(0, t.stringify)(l)}`);
    }
  }),
  Oe = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
    let t = te(),
      r = ne(),
      s = qe(),
      a = ne();
    function n(p, R) {
      let {
        gen: gen_14,
        data: data_9,
        it: it_9
      } = p;
      gen_14.if(_(gen_14, data_9, R, it_9.opts.ownProperties), () => {
        p.setParams({
          missingProperty: t._`${R}`
        }, !0), p.error();
      });
    }
    e.checkReportMissingProp = n;
    function i({
      gen: gen_15,
      data: data_10,
      it: {
        opts: opts_6
      }
    }, b, S) {
      return (0, t.or)(...b.map(item => (0, t.and)(_(gen_15, data_10, item, opts_6.ownProperties), t._`${S} = ${item}`)));
    }
    e.checkMissingProp = i;
    function l(p, missingProperty) {
      p.setParams({
        missingProperty: missingProperty
      }, !0), p.error();
    }
    e.reportMissingProp = l;
    function c(p) {
      return p.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: t._`Object.prototype.hasOwnProperty`
      });
    }
    e.hasPropFunc = c;
    function d(p, R, k) {
      return t._`${c(p)}.call(${R}, ${k})`;
    }
    e.isOwnProperty = d;
    function m(p, R, k, b) {
      let S = t._`${R}${(0, t.getProperty)(k)} !== undefined`;
      return b ? t._`${S} && ${d(p, R, k)}` : S;
    }
    e.propertyInData = m;
    function _(p, R, k, b) {
      let S = t._`${R}${(0, t.getProperty)(k)} === undefined`;
      return b ? (0, t.or)(S, (0, t.not)(d(p, R, k))) : S;
    }
    e.noPropertyInData = _;
    function P(p) {
      return p ? Object.keys(p).filter(item => item !== "__proto__") : [];
    }
    e.allSchemaProperties = P;
    function T(p, R) {
      return P(R).filter(item => !(0, r.alwaysValidSchema)(p, R[item]));
    }
    e.schemaProperties = T;
    function v({
      schemaCode: schemaCode,
      data: data_11,
      it: {
        gen: gen_16,
        topSchemaRef: topSchemaRef_3,
        schemaPath: schemaPath_4,
        errorPath: errorPath_2
      },
      it: it_10
    }, K, j, H) {
      let W = H ? t._`${schemaCode}, ${data_11}, ${topSchemaRef_3}${schemaPath_4}` : data_11,
        B = [[s.default.instancePath, (0, t.strConcat)(s.default.instancePath, errorPath_2)], [s.default.parentData, it_10.parentData], [s.default.parentDataProperty, it_10.parentDataProperty], [s.default.rootData, s.default.rootData]];
      if (it_10.opts.dynamicRef) B.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
      let se = t._`${W}, ${gen_16.object(...B)}`;
      return j !== t.nil ? t._`${K}.call(${j}, ${se})` : t._`${K}(${se})`;
    }
    e.callValidateCode = v;
    let y = t._`new RegExp`;
    function f({
      gen: gen_17,
      it: {
        opts: opts_7
      }
    }, k) {
      let b = opts_7.unicodeRegExp ? "u" : "",
        {
          regExp: regExp
        } = opts_7.code,
        ref_2 = regExp(k, b);
      return gen_17.scopeValue("pattern", {
        key: ref_2.toString(),
        ref: ref_2,
        code: t._`${regExp.code === "new RegExp" ? y : (0, a.useFunc)(gen_17, regExp)}(${k}, ${b})`
      });
    }
    e.usePattern = f;
    function h(p) {
      let {
          gen: gen_18,
          data: data_12,
          keyword: keyword_6,
          it: it_11
        } = p,
        I = gen_18.name("valid");
      if (it_11.allErrors) {
        let K = gen_18.let("valid", !0);
        return U(() => gen_18.assign(K, !1)), K;
      }
      return gen_18.var(I, !0), U(() => gen_18.break()), I;
      function U(K) {
        let j = gen_18.const("len", t._`${data_12}.length`);
        gen_18.forRange("i", 0, j, dataProp => {
          p.subschema({
            keyword: keyword_6,
            dataProp: dataProp,
            dataPropType: r.Type.Num
          }, I), gen_18.if((0, t.not)(I), K);
        });
      }
    }
    e.validateArray = h;
    function g(p) {
      let {
        gen: gen_19,
        schema: schema_6,
        keyword: keyword_7,
        it: it_12
      } = p;
      if (!Array.isArray(schema_6)) throw Error("ajv implementation error");
      if (schema_6.some(item => (0, r.alwaysValidSchema)(it_12, item)) && !it_12.opts.unevaluated) return;
      let I = gen_19.let("valid", !1),
        U = gen_19.name("_valid");
      gen_19.block(() => schema_6.forEach((item, j) => {
        let H = p.subschema({
          keyword: keyword_7,
          schemaProp: j,
          compositeRule: !0
        }, U);
        if (gen_19.assign(I, t._`${I} || ${U}`), !p.mergeValidEvaluated(H, U)) gen_19.if((0, t.not)(I));
      })), p.result(I, () => p.reset(), () => p.error(!0));
    }
    e.validateUnion = g;
  }),
  ui = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
    let t = te(),
      r = qe(),
      s = Oe(),
      a = Cr();
    function n(T, v) {
      let {
          gen: gen_20,
          keyword: keyword_8,
          schema: schema_7,
          parentSchema: parentSchema_2,
          it: it_13
        } = T,
        schema_8 = v.macro.call(it_13.self, schema_7, parentSchema_2, it_13),
        topSchemaRef_4 = m(gen_20, keyword_8, schema_8);
      if (it_13.opts.validateSchema !== !1) it_13.self.validateSchema(schema_8, !0);
      let b = gen_20.name("valid");
      T.subschema({
        schema: schema_8,
        schemaPath: t.nil,
        errSchemaPath: `${it_13.errSchemaPath}/${keyword_8}`,
        topSchemaRef: topSchemaRef_4,
        compositeRule: !0
      }, b), T.pass(b, () => T.error(!0));
    }
    e.macroKeywordCode = n;
    function i(T, v) {
      var y;
      let {
        gen: gen_21,
        keyword: keyword_9,
        schema: schema_9,
        parentSchema: parentSchema_3,
        $data: $data,
        it: it_14
      } = T;
      d(it_14, v);
      let b = m(gen_21, keyword_9, !$data && v.compile ? v.compile.call(it_14.self, schema_9, parentSchema_3, it_14) : v.validate),
        S = gen_21.let("valid");
      T.block$data(S, I), T.ok((y = v.valid) !== null && y !== void 0 ? y : S);
      function I() {
        if (v.errors === !1) {
          if (j(), v.modifying) l(T);
          H(() => T.error());
        } else {
          let W = v.async ? U() : K();
          if (v.modifying) l(T);
          H(() => c(T, W));
        }
      }
      function U() {
        let W = gen_21.let("ruleErrs", null);
        return gen_21.try(() => j(t._`await `), B => gen_21.assign(S, !1).if(t._`${B} instanceof ${it_14.ValidationError}`, () => gen_21.assign(W, t._`${B}.errors`), () => gen_21.throw(B))), W;
      }
      function K() {
        let W = t._`${b}.errors`;
        return gen_21.assign(W, null), j(t.nil), W;
      }
      function j(W = v.async ? t._`await ` : t.nil) {
        let B = it_14.opts.passContext ? r.default.this : r.default.self,
          se = !("compile" in v && !$data || v.schema === !1);
        gen_21.assign(S, t._`${W}${(0, s.callValidateCode)(T, b, B, se)}`, v.modifying);
      }
      function H(W) {
        var B;
        gen_21.if((0, t.not)((B = v.valid) !== null && B !== void 0 ? B : S), W);
      }
    }
    e.funcKeywordCode = i;
    function l(T) {
      let {
        gen: gen_22,
        data: data_13,
        it: it_15
      } = T;
      gen_22.if(it_15.parentData, () => gen_22.assign(data_13, t._`${it_15.parentData}[${it_15.parentDataProperty}]`));
    }
    function c(T, v) {
      let {
        gen: gen_23
      } = T;
      gen_23.if(t._`Array.isArray(${v})`, () => {
        gen_23.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${v} : ${r.default.vErrors}.concat(${v})`).assign(r.default.errors, t._`${r.default.vErrors}.length`), (0, a.extendErrors)(T);
      }, () => T.error());
    }
    function d({
      schemaEnv: schemaEnv_2
    }, v) {
      if (v.async && !schemaEnv_2.$async) throw Error("async keyword in sync schema");
    }
    function m(T, v, ref_3) {
      if (ref_3 === void 0) throw Error(`keyword "${v}" failed to compile`);
      return T.scopeValue("keyword", typeof ref_3 == "function" ? {
        ref: ref_3
      } : {
        ref: ref_3,
        code: (0, t.stringify)(ref_3)
      });
    }
    function _(T, v, y = !1) {
      return !v.length || v.some(item => item === "array" ? Array.isArray(T) : item === "object" ? T && typeof T == "object" && !Array.isArray(T) : typeof T == item || y && typeof T > "u");
    }
    e.validSchemaType = _;
    function P({
      schema: schema_10,
      opts: opts_8,
      self: self_3,
      errSchemaPath: errSchemaPath_2
    }, h, g) {
      if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g) throw Error("ajv implementation error");
      let dependencies = h.dependencies;
      if (dependencies === null || dependencies === void 0 ? void 0 : dependencies.some(item => !Object.prototype.hasOwnProperty.call(schema_10, item))) throw Error(`parent schema must have dependencies of ${g}: ${dependencies.join(",")}`);
      if (h.validateSchema) {
        if (!h.validateSchema(schema_10[g])) {
          let R = `keyword "${g}" value is invalid at path "${errSchemaPath_2}": ` + self_3.errorsText(h.validateSchema.errors);
          if (opts_8.validateSchema === "log") self_3.logger.error(R);else throw Error(R);
        }
      }
    }
    e.validateKeywordUsage = P;
  }),
  di = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0;
    let t = te(),
      r = ne();
    function s(i, {
      keyword: keyword_10,
      schemaProp: schemaProp,
      schema: schema_11,
      schemaPath: schemaPath_5,
      errSchemaPath: errSchemaPath_3,
      topSchemaRef: topSchemaRef_5
    }) {
      if (keyword_10 !== void 0 && schema_11 !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
      if (keyword_10 !== void 0) {
        let schema_12 = i.schema[keyword_10];
        return schemaProp === void 0 ? {
          schema: schema_12,
          schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(keyword_10)}`,
          errSchemaPath: `${i.errSchemaPath}/${keyword_10}`
        } : {
          schema: schema_12[schemaProp],
          schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(keyword_10)}${(0, t.getProperty)(schemaProp)}`,
          errSchemaPath: `${i.errSchemaPath}/${keyword_10}/${(0, r.escapeFragment)(schemaProp)}`
        };
      }
      if (schema_11 !== void 0) {
        if (schemaPath_5 === void 0 || errSchemaPath_3 === void 0 || topSchemaRef_5 === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return {
          schema: schema_11,
          schemaPath: schemaPath_5,
          topSchemaRef: topSchemaRef_5,
          errSchemaPath: errSchemaPath_3
        };
      }
      throw Error('either "keyword" or "schema" must be passed');
    }
    e.getSubschema = s;
    function a(i, l, {
      dataProp: dataProp_2,
      dataPropType: dataPropType,
      data: data_14,
      dataTypes: dataTypes,
      propertyName: propertyName_2
    }) {
      if (data_14 !== void 0 && dataProp_2 !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
      let {
        gen: gen_24
      } = l;
      if (dataProp_2 !== void 0) {
        let {
          errorPath: errorPath_3,
          dataPathArr: dataPathArr,
          opts: opts_9
        } = l;
        v(gen_24.let("data", t._`${l.data}${(0, t.getProperty)(dataProp_2)}`, !0)), i.errorPath = t.str`${errorPath_3}${(0, r.getErrorPath)(dataProp_2, dataPropType, opts_9.jsPropertySyntax)}`, i.parentDataProperty = t._`${dataProp_2}`, i.dataPathArr = [...dataPathArr, i.parentDataProperty];
      }
      if (data_14 !== void 0) {
        if (v(data_14 instanceof t.Name ? data_14 : gen_24.let("data", data_14, !0)), propertyName_2 !== void 0) i.propertyName = propertyName_2;
      }
      if (dataTypes) i.dataTypes = dataTypes;
      function v(y) {
        i.data = y, i.dataLevel = l.dataLevel + 1, i.dataTypes = [], l.definedProperties = new Set(), i.parentData = l.data, i.dataNames = [...l.dataNames, y];
      }
    }
    e.extendSubschemaData = a;
    function n(i, {
      jtdDiscriminator: jtdDiscriminator,
      jtdMetadata: jtdMetadata,
      compositeRule: compositeRule_4,
      createErrors: createErrors_2,
      allErrors: allErrors_3
    }) {
      if (compositeRule_4 !== void 0) i.compositeRule = compositeRule_4;
      if (createErrors_2 !== void 0) i.createErrors = createErrors_2;
      if (allErrors_3 !== void 0) i.allErrors = allErrors_3;
      i.jtdDiscriminator = jtdDiscriminator, i.jtdMetadata = jtdMetadata;
    }
    e.extendSubschemaMode = n;
  }),
  Ia = J((e, t) => {
    t.exports = function r(s, a) {
      if (s === a) return !0;
      if (s && a && typeof s == "object" && typeof a == "object") {
        if (s.constructor !== a.constructor) return !1;
        var n, i, l;
        if (Array.isArray(s)) {
          if (n = s.length, n != a.length) return !1;
          for (i = n; i-- !== 0;) if (!r(s[i], a[i])) return !1;
          return !0;
        }
        if (s.constructor === RegExp) return s.source === a.source && s.flags === a.flags;
        if (s.valueOf !== Object.prototype.valueOf) return s.valueOf() === a.valueOf();
        if (s.toString !== Object.prototype.toString) return s.toString() === a.toString();
        if (l = Object.keys(s), n = l.length, n !== Object.keys(a).length) return !1;
        for (i = n; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(a, l[i])) return !1;
        for (i = n; i-- !== 0;) {
          var c = l[i];
          if (!r(s[c], a[c])) return !1;
        }
        return !0;
      }
      return s !== s && a !== a;
    };
  }),
  hi = J((e, t) => {
    var r = t.exports = function exports(n, i, l) {
      if (typeof i == "function") l = i, i = {};
      l = i.cb || l;
      var c = typeof l == "function" ? l : l.pre || function () {},
        d = l.post || function () {};
      s(i, c, d, n, "", n);
    };
    r.keywords = {
      additionalItems: !0,
      items: !0,
      contains: !0,
      additionalProperties: !0,
      propertyNames: !0,
      not: !0,
      if: !0,
      then: !0,
      else: !0
    }, r.arrayKeywords = {
      items: !0,
      allOf: !0,
      anyOf: !0,
      oneOf: !0
    }, r.propsKeywords = {
      $defs: !0,
      definitions: !0,
      properties: !0,
      patternProperties: !0,
      dependencies: !0
    }, r.skipKeywords = {
      default: !0,
      enum: !0,
      const: !0,
      required: !0,
      maximum: !0,
      minimum: !0,
      exclusiveMaximum: !0,
      exclusiveMinimum: !0,
      multipleOf: !0,
      maxLength: !0,
      minLength: !0,
      pattern: !0,
      format: !0,
      maxItems: !0,
      minItems: !0,
      uniqueItems: !0,
      maxProperties: !0,
      minProperties: !0
    };
    function s(n, i, l, c, d, m, _, P, T, v) {
      if (c && typeof c == "object" && !Array.isArray(c)) {
        i(c, d, m, _, P, T, v);
        for (var y in c) {
          var f = c[y];
          if (Array.isArray(f)) {
            if (y in r.arrayKeywords) for (var h = 0; h < f.length; h++) s(n, i, l, f[h], d + "/" + y + "/" + h, m, d, y, c, h);
          } else if (y in r.propsKeywords) {
            if (f && typeof f == "object") for (var g in f) s(n, i, l, f[g], d + "/" + y + "/" + a(g), m, d, y, c, g);
          } else if (y in r.keywords || n.allKeys && !(y in r.skipKeywords)) s(n, i, l, f, d + "/" + y, m, d, y, c);
        }
        l(c, d, m, _, P, T, v);
      }
    }
    function a(n) {
      return n.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }),
  kr = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
    let t = ne(),
      r = Ia(),
      s = hi(),
      a = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
    function n(f, h = !0) {
      if (typeof f == "boolean") return !0;
      if (h === !0) return !l(f);
      if (!h) return !1;
      return c(f) <= h;
    }
    e.inlineRef = n;
    let i = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function l(f) {
      for (let h in f) {
        if (i.has(h)) return !0;
        let g = f[h];
        if (Array.isArray(g) && g.some(l)) return !0;
        if (typeof g == "object" && l(g)) return !0;
      }
      return !1;
    }
    function c(f) {
      let h = 0;
      for (let g in f) {
        if (g === "$ref") return 1 / 0;
        if (h++, a.has(g)) continue;
        if (typeof f[g] == "object") (0, t.eachItem)(f[g], p => h += c(p));
        if (h === 1 / 0) return 1 / 0;
      }
      return h;
    }
    function d(f, h = "", g) {
      if (g !== !1) h = P(h);
      return m(f, f.parse(h));
    }
    e.getFullPath = d;
    function m(f, h) {
      return f.serialize(h).split("#")[0] + "#";
    }
    e._getFullPath = m;
    let _ = /#\/?$/;
    function P(f) {
      return f ? f.replace(_, "") : "";
    }
    e.normalizeId = P;
    function T(f, h, g) {
      return g = P(g), f.resolve(h, g);
    }
    e.resolveUrl = T;
    let v = /^[a-z_][-a-z0-9._]*$/i;
    function y(f, h) {
      if (typeof f == "boolean") return {};
      let {
          schemaId: schemaId,
          uriResolver: uriResolver
        } = this.opts,
        R = P(f[schemaId] || h),
        k = {
          "": R
        },
        b = d(uriResolver, R, !1),
        S = {},
        I = new Set();
      return s(f, {
        allKeys: !0
      }, (j, H, W, B) => {
        if (B === void 0) return;
        let se = b + H,
          le = k[B];
        if (typeof j[schemaId] == "string") le = ie.call(this, j[schemaId]);
        me.call(this, j.$anchor), me.call(this, j.$dynamicAnchor), k[H] = le;
        function ie(oe) {
          let N = this.opts.uriResolver.resolve;
          if (oe = P(le ? N(le, oe) : oe), I.has(oe)) throw K(oe);
          I.add(oe);
          let D = this.refs[oe];
          if (typeof D == "string") D = this.refs[D];
          if (typeof D == "object") U(j, D.schema, oe);else if (oe !== P(se)) if (oe[0] === "#") U(j, S[oe], oe), S[oe] = j;else this.refs[oe] = se;
          return oe;
        }
        function me(oe) {
          if (typeof oe == "string") {
            if (!v.test(oe)) throw Error(`invalid anchor "${oe}"`);
            ie.call(this, `#${oe}`);
          }
        }
      }), S;
      function U(j, H, W) {
        if (H !== void 0 && !r(j, H)) throw K(W);
      }
      function K(j) {
        return Error(`reference "${j}" resolves to more than one schema`);
      }
    }
    e.getSchemaRefs = y;
  }),
  Wt = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
    let t = ci(),
      r = zr(),
      s = ka(),
      a = zr(),
      n = li(),
      i = ui(),
      l = di(),
      c = te(),
      d = qe(),
      m = kr(),
      _ = ne(),
      P = Cr();
    function T(q) {
      if (b(q)) {
        if (I(q), k(q)) {
          h(q);
          return;
        }
      }
      v(q, () => (0, t.topBoolOrEmptySchema)(q));
    }
    e.validateFunctionCode = T;
    function v({
      gen: gen_25,
      validateName: validateName_3,
      schema: schema_13,
      schemaEnv: schemaEnv_3,
      opts: opts_10
    }, ee) {
      if (opts_10.code.es5) gen_25.func(validateName_3, c._`${d.default.data}, ${d.default.valCxt}`, schemaEnv_3.$async, () => {
        gen_25.code(c._`"use strict"; ${p(schema_13, opts_10)}`), f(gen_25, opts_10), gen_25.code(ee);
      });else gen_25.func(validateName_3, c._`${d.default.data}, ${y(opts_10)}`, schemaEnv_3.$async, () => gen_25.code(p(schema_13, opts_10)).code(ee));
    }
    function y(q) {
      return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${q.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
    }
    function f(q, V) {
      q.if(d.default.valCxt, () => {
        if (q.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`), q.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`), q.var(d.default.parentDataProperty, c._`${d.default.valCxt}.${d.default.parentDataProperty}`), q.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`), V.dynamicRef) q.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
      }, () => {
        if (q.var(d.default.instancePath, c._`""`), q.var(d.default.parentData, c._`undefined`), q.var(d.default.parentDataProperty, c._`undefined`), q.var(d.default.rootData, d.default.data), V.dynamicRef) q.var(d.default.dynamicAnchors, c._`{}`);
      });
    }
    function h(q) {
      let {
        schema: schema_14,
        opts: opts_11,
        gen: gen_26
      } = q;
      v(q, () => {
        if (opts_11.$comment && schema_14.$comment) B(q);
        if (j(q), gen_26.let(d.default.vErrors, null), gen_26.let(d.default.errors, 0), opts_11.unevaluated) g(q);
        U(q), se(q);
      });
    }
    function g(q) {
      let {
        gen: gen_27,
        validateName: validateName_4
      } = q;
      q.evaluated = gen_27.const("evaluated", c._`${validateName_4}.evaluated`), gen_27.if(c._`${q.evaluated}.dynamicProps`, () => gen_27.assign(c._`${q.evaluated}.props`, c._`undefined`)), gen_27.if(c._`${q.evaluated}.dynamicItems`, () => gen_27.assign(c._`${q.evaluated}.items`, c._`undefined`));
    }
    function p(q, V) {
      let F = typeof q == "object" && q[V.schemaId];
      return F && (V.code.source || V.code.process) ? c._`/*# sourceURL=${F} */` : c.nil;
    }
    function R(q, V) {
      if (b(q)) {
        if (I(q), k(q)) {
          S(q, V);
          return;
        }
      }
      (0, t.boolOrEmptySchema)(q, V);
    }
    function k({
      schema: schema_15,
      self: self_4
    }) {
      if (typeof schema_15 == "boolean") return !schema_15;
      for (let F in schema_15) if (self_4.RULES.all[F]) return !0;
      return !1;
    }
    function b(q) {
      return typeof q.schema != "boolean";
    }
    function S(q, V) {
      let {
        schema: schema_16,
        gen: gen_28,
        opts: opts_12
      } = q;
      if (opts_12.$comment && schema_16.$comment) B(q);
      H(q), W(q);
      let ee = gen_28.const("_errs", d.default.errors);
      U(q, ee), gen_28.var(V, c._`${ee} === ${d.default.errors}`);
    }
    function I(q) {
      (0, _.checkUnknownRules)(q), K(q);
    }
    function U(q, V) {
      if (q.opts.jtd) return ie(q, [], !1, V);
      let F = (0, r.getSchemaTypes)(q.schema);
      ie(q, F, !(0, r.coerceAndCheckDataType)(q, F), V);
    }
    function K(q) {
      let {
        schema: schema_17,
        errSchemaPath: errSchemaPath_4,
        opts: opts_13,
        self: self_5
      } = q;
      if (schema_17.$ref && opts_13.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(schema_17, self_5.RULES)) self_5.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath_4}"`);
    }
    function j(q) {
      let {
        schema: schema_18,
        opts: opts_14
      } = q;
      if (schema_18.default !== void 0 && opts_14.useDefaults && opts_14.strictSchema) (0, _.checkStrictMode)(q, "default is ignored in the schema root");
    }
    function H(q) {
      let V = q.schema[q.opts.schemaId];
      if (V) q.baseId = (0, m.resolveUrl)(q.opts.uriResolver, q.baseId, V);
    }
    function W(q) {
      if (q.schema.$async && !q.schemaEnv.$async) throw Error("async schema in sync schema");
    }
    function B({
      gen: gen_29,
      schemaEnv: schemaEnv_4,
      schema: schema_19,
      errSchemaPath: errSchemaPath_5,
      opts: opts_15
    }) {
      let $comment = schema_19.$comment;
      if (opts_15.$comment === !0) gen_29.code(c._`${d.default.self}.logger.log(${$comment})`);else if (typeof opts_15.$comment == "function") {
        let de = c.str`${errSchemaPath_5}/$comment`,
          Se = gen_29.scopeValue("root", {
            ref: schemaEnv_4.root
          });
        gen_29.code(c._`${d.default.self}.opts.$comment(${$comment}, ${de}, ${Se}.schema)`);
      }
    }
    function se(q) {
      let {
        gen: gen_30,
        schemaEnv: schemaEnv_5,
        validateName: validateName_5,
        ValidationError: ValidationError,
        opts: opts_16
      } = q;
      if (schemaEnv_5.$async) gen_30.if(c._`${d.default.errors} === 0`, () => gen_30.return(d.default.data), () => gen_30.throw(c._`new ${ValidationError}(${d.default.vErrors})`));else {
        if (gen_30.assign(c._`${validateName_5}.errors`, d.default.vErrors), opts_16.unevaluated) le(q);
        gen_30.return(c._`${d.default.errors} === 0`);
      }
    }
    function le({
      gen: gen_31,
      evaluated: evaluated,
      props: props,
      items: items_2
    }) {
      if (props instanceof c.Name) gen_31.assign(c._`${evaluated}.props`, props);
      if (items_2 instanceof c.Name) gen_31.assign(c._`${evaluated}.items`, items_2);
    }
    function ie(q, V, F, X) {
      let {
          gen: gen_32,
          schema: schema_20,
          data: data_15,
          allErrors: allErrors_4,
          opts: opts_17,
          self: self_6
        } = q,
        {
          RULES: RULES
        } = self_6;
      if (schema_20.$ref && (opts_17.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(schema_20, RULES))) {
        gen_32.block(() => re(q, "$ref", RULES.all.$ref.definition));
        return;
      }
      if (!opts_17.jtd) oe(q, V);
      gen_32.block(() => {
        for (let ge of RULES.rules) ze(ge);
        ze(RULES.post);
      });
      function ze(ge) {
        if (!(0, s.shouldUseGroup)(schema_20, ge)) return;
        if (ge.type) {
          if (gen_32.if((0, a.checkDataType)(ge.type, data_15, opts_17.strictNumbers)), me(q, ge), V.length === 1 && V[0] === ge.type && F) gen_32.else(), (0, a.reportTypeError)(q);
          gen_32.endIf();
        } else me(q, ge);
        if (!allErrors_4) gen_32.if(c._`${d.default.errors} === ${X || 0}`);
      }
    }
    function me(q, V) {
      let {
        gen: gen_33,
        schema: schema_21,
        opts: {
          useDefaults: useDefaults
        }
      } = q;
      if (useDefaults) (0, n.assignDefaults)(q, V.type);
      gen_33.block(() => {
        for (let ee of V.rules) if ((0, s.shouldUseRule)(schema_21, ee)) re(q, ee.keyword, ee.definition, V.type);
      });
    }
    function oe(q, V) {
      if (q.schemaEnv.meta || !q.opts.strictTypes) return;
      if (N(q, V), !q.opts.allowUnionTypes) D(q, V);
      x(q, q.dataTypes);
    }
    function N(q, V) {
      if (!V.length) return;
      if (!q.dataTypes.length) {
        q.dataTypes = V;
        return;
      }
      V.forEach(item => {
        if (!O(q.dataTypes, item)) G(q, `type "${item}" not allowed by context "${q.dataTypes.join(",")}"`);
      }), L(q, V);
    }
    function D(q, V) {
      if (V.length > 1 && !(V.length === 2 && V.includes("null"))) G(q, "use allowUnionTypes to allow union type keyword");
    }
    function x(q, V) {
      let F = q.self.RULES.all;
      for (let X in F) {
        let Z = F[X];
        if (typeof Z == "object" && (0, s.shouldUseRule)(q.schema, Z)) {
          let {
            type: type_2
          } = Z.definition;
          if (type_2.length && !type_2.some(item => w(V, item))) G(q, `missing type "${type_2.join(",")}" for keyword "${X}"`);
        }
      }
    }
    function w(q, V) {
      return q.includes(V) || V === "number" && q.includes("integer");
    }
    function O(q, V) {
      return q.includes(V) || V === "integer" && q.includes("number");
    }
    function L(q, V) {
      let F = [];
      for (let X of q.dataTypes) if (O(V, X)) F.push(X);else if (V.includes("integer") && X === "number") F.push("integer");
      q.dataTypes = F;
    }
    function G(q, V) {
      let F = q.schemaEnv.baseId + q.errSchemaPath;
      V += ` at "${F}" (strictTypes)`, (0, _.checkStrictMode)(q, V, q.opts.strictTypes);
    }
    var Y = class {
      constructor(q, V, F) {
        if ((0, i.validateKeywordUsage)(q, V, F), this.gen = q.gen, this.allErrors = q.allErrors, this.keyword = F, this.data = q.data, this.schema = q.schema[F], this.$data = V.$data && q.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(q, this.schema, F, this.$data), this.schemaType = V.schemaType, this.parentSchema = q.schema, this.params = {}, this.it = q, this.def = V, this.$data) this.schemaCode = q.gen.const("vSchema", be(this.$data, q));else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, V.schemaType, V.allowUndefined)) throw Error(`${F} value must be ${JSON.stringify(V.schemaType)}`);
        if ("code" in V ? V.trackErrors : V.errors !== !1) this.errsCount = q.gen.const("_errs", d.default.errors);
      }
      result(q, V, F) {
        this.failResult((0, c.not)(q), V, F);
      }
      failResult(q, V, F) {
        if (this.gen.if(q), F) F();else this.error();
        if (V) {
          if (this.gen.else(), V(), this.allErrors) this.gen.endIf();
        } else if (this.allErrors) this.gen.endIf();else this.gen.else();
      }
      pass(q, V) {
        this.failResult((0, c.not)(q), void 0, V);
      }
      fail(q) {
        if (q === void 0) {
          if (this.error(), !this.allErrors) this.gen.if(!1);
          return;
        }
        if (this.gen.if(q), this.error(), this.allErrors) this.gen.endIf();else this.gen.else();
      }
      fail$data(q) {
        if (!this.$data) return this.fail(q);
        let {
          schemaCode: schemaCode_2
        } = this;
        this.fail(c._`${schemaCode_2} !== undefined && (${(0, c.or)(this.invalid$data(), q)})`);
      }
      error(q, V, F) {
        if (V) {
          this.setParams(V), this._error(q, F), this.setParams({});
          return;
        }
        this._error(q, F);
      }
      _error(q, V) {
        (q ? P.reportExtraError : P.reportError)(this, this.def.error, V);
      }
      $dataError() {
        (0, P.reportError)(this, this.def.$dataError || P.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
        (0, P.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(q) {
        if (!this.allErrors) this.gen.if(q);
      }
      setParams(q, V) {
        if (V) Object.assign(this.params, q);else this.params = q;
      }
      block$data(q, V, F = c.nil) {
        this.gen.block(() => {
          this.check$data(q, F), V();
        });
      }
      check$data(q = c.nil, V = c.nil) {
        if (!this.$data) return;
        let {
          gen: gen_34,
          schemaCode: schemaCode_3,
          schemaType: schemaType_2,
          def: def
        } = this;
        if (gen_34.if((0, c.or)(c._`${schemaCode_3} === undefined`, V)), q !== c.nil) gen_34.assign(q, !0);
        if (schemaType_2.length || def.validateSchema) {
          if (gen_34.elseIf(this.invalid$data()), this.$dataError(), q !== c.nil) gen_34.assign(q, !1);
        }
        gen_34.else();
      }
      invalid$data() {
        let {
          gen: gen_35,
          schemaCode: schemaCode_4,
          schemaType: schemaType_3,
          def: def_2,
          it: it_16
        } = this;
        return (0, c.or)(ee(), de());
        function ee() {
          if (schemaType_3.length) {
            if (!(schemaCode_4 instanceof c.Name)) throw Error("ajv implementation error");
            let Se = Array.isArray(schemaType_3) ? schemaType_3 : [schemaType_3];
            return c._`${(0, a.checkDataTypes)(Se, schemaCode_4, it_16.opts.strictNumbers, a.DataType.Wrong)}`;
          }
          return c.nil;
        }
        function de() {
          if (def_2.validateSchema) {
            let Se = gen_35.scopeValue("validate$data", {
              ref: def_2.validateSchema
            });
            return c._`!${Se}(${schemaCode_4})`;
          }
          return c.nil;
        }
      }
      subschema(q, V) {
        let F = (0, l.getSubschema)(this.it, q);
        (0, l.extendSubschemaData)(F, this.it, q), (0, l.extendSubschemaMode)(F, q);
        let X = {
          ...this.it,
          ...F,
          items: void 0,
          props: void 0
        };
        return R(X, V), X;
      }
      mergeEvaluated(q, V) {
        let {
          it: it_17,
          gen: gen_36
        } = this;
        if (!it_17.opts.unevaluated) return;
        if (it_17.props !== !0 && q.props !== void 0) it_17.props = _.mergeEvaluated.props(gen_36, q.props, it_17.props, V);
        if (it_17.items !== !0 && q.items !== void 0) it_17.items = _.mergeEvaluated.items(gen_36, q.items, it_17.items, V);
      }
      mergeValidEvaluated(q, V) {
        let {
          it: it_18,
          gen: gen_37
        } = this;
        if (it_18.opts.unevaluated && (it_18.props !== !0 || it_18.items !== !0)) return gen_37.if(V, () => this.mergeEvaluated(q, c.Name)), !0;
      }
    };
    e.KeywordCxt = Y;
    function re(q, V, F, X) {
      let Z = new Y(q, F, V);
      if ("code" in F) F.code(Z, X);else if (Z.$data && F.validate) (0, i.funcKeywordCode)(Z, F);else if ("macro" in F) (0, i.macroKeywordCode)(Z, F);else if (F.compile || F.validate) (0, i.funcKeywordCode)(Z, F);
    }
    let Q = /^\/(?:[^~]|~0|~1)*$/,
      ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function be(q, {
      dataLevel: dataLevel,
      dataNames: dataNames,
      dataPathArr: dataPathArr_2
    }) {
      let Z, ee;
      if (q === "") return d.default.rootData;
      if (q[0] === "/") {
        if (!Q.test(q)) throw Error(`Invalid JSON-pointer: ${q}`);
        Z = q, ee = d.default.rootData;
      } else {
        let pe = ce.exec(q);
        if (!pe) throw Error(`Invalid JSON-pointer: ${q}`);
        let ue = +pe[1];
        if (Z = pe[2], Z === "#") {
          if (ue >= dataLevel) throw Error(_e("property/index", ue));
          return dataPathArr_2[dataLevel - ue];
        }
        if (ue > dataLevel) throw Error(_e("data", ue));
        if (ee = dataNames[dataLevel - ue], !Z) return ee;
      }
      let de = ee,
        Se = Z.split("/");
      for (let pe of Se) if (pe) ee = c._`${ee}${(0, c.getProperty)((0, _.unescapeJsonPointer)(pe))}`, de = c._`${de} && ${ee}`;
      return de;
      function _e(pe, ue) {
        return `Cannot access ${pe} ${ue} levels up, current level is ${dataLevel}`;
      }
    }
    e.getData = be;
  }),
  Ir = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var t = class extends Error {
      constructor(r) {
        super("validation failed");
        this.errors = r, this.ajv = this.validation = !0;
      }
    };
    e.default = t;
  }),
  Yt = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = kr();
    var r = class extends Error {
      constructor(s, a, n, i) {
        super(i || `can't resolve reference ${n} from id ${a}`);
        this.missingRef = (0, t.resolveUrl)(s, a, n), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(s, this.missingRef));
      }
    };
    e.default = r;
  }),
  qr = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
    let t = te(),
      r = Ir(),
      s = qe(),
      a = kr(),
      n = ne(),
      i = Wt();
    var l = class {
      constructor(h) {
        var g;
        this.refs = {}, this.dynamicAnchors = {};
        let p;
        if (typeof h.schema == "object") p = h.schema;
        this.schema = h.schema, this.schemaId = h.schemaId, this.root = h.root || this, this.baseId = (g = h.baseId) !== null && g !== void 0 ? g : (0, a.normalizeId)(p === null || p === void 0 ? void 0 : p[h.schemaId || "$id"]), this.schemaPath = h.schemaPath, this.localRefs = h.localRefs, this.meta = h.meta, this.$async = p === null || p === void 0 ? void 0 : p.$async, this.refs = {};
      }
    };
    e.SchemaEnv = l;
    function c(schemaEnv_6) {
      let g = _.call(this, schemaEnv_6);
      if (g) return g;
      let rootId = (0, a.getFullPath)(this.opts.uriResolver, schemaEnv_6.root.baseId),
        {
          es5: es5_2,
          lines: lines
        } = this.opts.code,
        {
          ownProperties: ownProperties
        } = this.opts,
        gen_38 = new t.CodeGen(this.scope, {
          es5: es5_2,
          lines: lines,
          ownProperties: ownProperties
        }),
        ValidationError_2;
      if (schemaEnv_6.$async) ValidationError_2 = gen_38.scopeValue("Error", {
        ref: r.default,
        code: t._`require("ajv/dist/runtime/validation_error").default`
      });
      let validateName_6 = gen_38.scopeName("validate");
      schemaEnv_6.validateName = validateName_6;
      let K = {
          gen: gen_38,
          allErrors: this.opts.allErrors,
          data: s.default.data,
          parentData: s.default.parentData,
          parentDataProperty: s.default.parentDataProperty,
          dataNames: [s.default.data],
          dataPathArr: [t.nil],
          dataLevel: 0,
          dataTypes: [],
          definedProperties: new Set(),
          topSchemaRef: gen_38.scopeValue("schema", this.opts.code.source === !0 ? {
            ref: schemaEnv_6.schema,
            code: (0, t.stringify)(schemaEnv_6.schema)
          } : {
            ref: schemaEnv_6.schema
          }),
          validateName: validateName_6,
          ValidationError: ValidationError_2,
          schema: schemaEnv_6.schema,
          schemaEnv: schemaEnv_6,
          rootId: rootId,
          baseId: schemaEnv_6.baseId || rootId,
          schemaPath: t.nil,
          errSchemaPath: schemaEnv_6.schemaPath || (this.opts.jtd ? "" : "#"),
          errorPath: t._`""`,
          opts: this.opts,
          self: this
        },
        j;
      try {
        this._compilations.add(schemaEnv_6), (0, i.validateFunctionCode)(K), gen_38.optimize(this.opts.code.optimize);
        let validateCode = gen_38.toString();
        if (j = `${gen_38.scopeRefs(s.default.scope)}return ${validateCode}`, this.opts.code.process) j = this.opts.code.process(j, schemaEnv_6);
        let ref_4 = Function(`${s.default.self}`, `${s.default.scope}`, j)(this, this.scope.get());
        if (this.scope.value(validateName_6, {
          ref: ref_4
        }), ref_4.errors = null, ref_4.schema = schemaEnv_6.schema, ref_4.schemaEnv = schemaEnv_6, schemaEnv_6.$async) ref_4.$async = !0;
        if (this.opts.code.source === !0) ref_4.source = {
          validateName: validateName_6,
          validateCode: validateCode,
          scopeValues: gen_38._values
        };
        if (this.opts.unevaluated) {
          let {
            props: props_2,
            items: items_3
          } = K;
          if (ref_4.evaluated = {
            props: props_2 instanceof t.Name ? void 0 : props_2,
            items: items_3 instanceof t.Name ? void 0 : items_3,
            dynamicProps: props_2 instanceof t.Name,
            dynamicItems: items_3 instanceof t.Name
          }, ref_4.source) ref_4.source.evaluated = (0, t.stringify)(ref_4.evaluated);
        }
        return schemaEnv_6.validate = ref_4, schemaEnv_6;
      } catch (H) {
        if (delete schemaEnv_6.validate, delete schemaEnv_6.validateName, j) this.logger.error("Error compiling schema, function code:", j);
        throw H;
      } finally {
        this._compilations.delete(schemaEnv_6);
      }
    }
    e.compileSchema = c;
    function d(root, baseId, p) {
      var R;
      p = (0, a.resolveUrl)(this.opts.uriResolver, baseId, p);
      let k = root.refs[p];
      if (k) return k;
      let b = T.call(this, root, p);
      if (b === void 0) {
        let schema_22 = (R = root.localRefs) === null || R === void 0 ? void 0 : R[p],
          {
            schemaId: schemaId_2
          } = this.opts;
        if (schema_22) b = new l({
          schema: schema_22,
          schemaId: schemaId_2,
          root: root,
          baseId: baseId
        });
      }
      if (b === void 0) return;
      return root.refs[p] = m.call(this, b);
    }
    e.resolveRef = d;
    function m(h) {
      if ((0, a.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
      return h.validate ? h : c.call(this, h);
    }
    function _(h) {
      for (let g of this._compilations) if (P(g, h)) return g;
    }
    e.getCompilingSchema = _;
    function P(h, g) {
      return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
    }
    function T(h, g) {
      let p;
      while (typeof (p = this.refs[g]) == "string") g = p;
      return p || this.schemas[g] || v.call(this, h, g);
    }
    function v(root_2, g) {
      let p = this.opts.uriResolver.parse(g),
        R = (0, a._getFullPath)(this.opts.uriResolver, p),
        baseId_2 = (0, a.getFullPath)(this.opts.uriResolver, root_2.baseId, void 0);
      if (Object.keys(root_2.schema).length > 0 && R === baseId_2) return f.call(this, p, root_2);
      let b = (0, a.normalizeId)(R),
        S = this.refs[b] || this.schemas[b];
      if (typeof S == "string") {
        let I = v.call(this, root_2, S);
        if (typeof (I === null || I === void 0 ? void 0 : I.schema) !== "object") return;
        return f.call(this, p, I);
      }
      if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object") return;
      if (!S.validate) c.call(this, S);
      if (b === (0, a.normalizeId)(g)) {
        let {
            schema: schema_23
          } = S,
          {
            schemaId: schemaId_3
          } = this.opts,
          K = schema_23[schemaId_3];
        if (K) baseId_2 = (0, a.resolveUrl)(this.opts.uriResolver, baseId_2, K);
        return new l({
          schema: schema_23,
          schemaId: schemaId_3,
          root: root_2,
          baseId: baseId_2
        });
      }
      return f.call(this, p, S);
    }
    e.resolveSchema = v;
    let y = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function f(h, {
      baseId: baseId_3,
      schema: schema_24,
      root: root_3
    }) {
      var k;
      if (((k = h.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/") return;
      for (let I of h.fragment.slice(1).split("/")) {
        if (typeof schema_24 === "boolean") return;
        let U = schema_24[(0, n.unescapeFragment)(I)];
        if (U === void 0) return;
        schema_24 = U;
        let K = typeof schema_24 === "object" && schema_24[this.opts.schemaId];
        if (!y.has(I) && K) baseId_3 = (0, a.resolveUrl)(this.opts.uriResolver, baseId_3, K);
      }
      let b;
      if (typeof schema_24 != "boolean" && schema_24.$ref && !(0, n.schemaHasRulesButRef)(schema_24, this.RULES)) {
        let I = (0, a.resolveUrl)(this.opts.uriResolver, baseId_3, schema_24.$ref);
        b = v.call(this, root_3, I);
      }
      let {
        schemaId: schemaId_4
      } = this.opts;
      if (b = b || new l({
        schema: schema_24,
        schemaId: schemaId_4,
        root: root_3,
        baseId: baseId_3
      }), b.schema !== b.root.schema) return b;
    }
  }),
  mi = J((e, t) => {
    t.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [{
            format: "relative-json-pointer"
          }, {
            format: "json-pointer"
          }]
        }
      },
      additionalProperties: !1
    };
  }),
  qa = J((e, t) => {
    let isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
      isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function stringArrayToHexStripped(v) {
      let y = "",
        f = 0,
        h = 0;
      for (h = 0; h < v.length; h++) {
        if (f = v[h].charCodeAt(0), f === 48) continue;
        if (!(f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102)) return "";
        y += v[h];
        break;
      }
      for (h += 1; h < v.length; h++) {
        if (f = v[h].charCodeAt(0), !(f >= 48 && f <= 57 || f >= 65 && f <= 70 || f >= 97 && f <= 102)) return "";
        y += v[h];
      }
      return y;
    }
    let nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function i(v) {
      return v.length = 0, !0;
    }
    function l(v, y, f) {
      if (v.length) {
        let h = stringArrayToHexStripped(v);
        if (h !== "") y.push(h);else return f.error = !0, !1;
        v.length = 0;
      }
      return !0;
    }
    function c(v) {
      let y = 0,
        f = {
          error: !1,
          address: "",
          zone: ""
        },
        h = [],
        g = [],
        p = !1,
        R = !1,
        k = l;
      for (let b = 0; b < v.length; b++) {
        let S = v[b];
        if (S === "[" || S === "]") continue;
        if (S === ":") {
          if (p === !0) R = !0;
          if (!k(g, h, f)) break;
          if (++y > 7) {
            f.error = !0;
            break;
          }
          if (b > 0 && v[b - 1] === ":") p = !0;
          h.push(":");
          continue;
        } else if (S === "%") {
          if (!k(g, h, f)) break;
          k = i;
        } else {
          g.push(S);
          continue;
        }
      }
      if (g.length) if (k === i) f.zone = g.join("");else if (R) h.push(g.join(""));else h.push(stringArrayToHexStripped(g));
      return f.address = h.join(""), f;
    }
    function normalizeIPv6(host) {
      if (m(host, ":") < 2) return {
        host: host,
        isIPV6: !1
      };
      let y = c(host);
      if (!y.error) {
        let {
          address: f,
          address: h
        } = y;
        if (y.zone) f += "%" + y.zone, h += "%25" + y.zone;
        return {
          host: f,
          isIPV6: !0,
          escapedHost: h
        };
      } else return {
        host: host,
        isIPV6: !1
      };
    }
    function m(v, y) {
      let f = 0;
      for (let h = 0; h < v.length; h++) if (v[h] === y) f++;
      return f;
    }
    function removeDotSegments(v) {
      let y = v,
        f = [],
        h = -1,
        g = 0;
      while (g = y.length) {
        if (g === 1) {
          if (y === ".") break;else if (y === "/") {
            f.push("/");
            break;
          } else {
            f.push(y);
            break;
          }
        } else if (g === 2) {
          if (y[0] === ".") {
            if (y[1] === ".") break;else if (y[1] === "/") {
              y = y.slice(2);
              continue;
            }
          } else if (y[0] === "/") {
            if (y[1] === "." || y[1] === "/") {
              f.push("/");
              break;
            }
          }
        } else if (g === 3) {
          if (y === "/..") {
            if (f.length !== 0) f.pop();
            f.push("/");
            break;
          }
        }
        if (y[0] === ".") {
          if (y[1] === ".") {
            if (y[2] === "/") {
              y = y.slice(3);
              continue;
            }
          } else if (y[1] === "/") {
            y = y.slice(2);
            continue;
          }
        } else if (y[0] === "/") {
          if (y[1] === ".") {
            if (y[2] === "/") {
              y = y.slice(2);
              continue;
            } else if (y[2] === ".") {
              if (y[3] === "/") {
                if (y = y.slice(3), f.length !== 0) f.pop();
                continue;
              }
            }
          }
        }
        if ((h = y.indexOf("/", 1)) === -1) {
          f.push(y);
          break;
        } else f.push(y.slice(0, h)), y = y.slice(h);
      }
      return f.join("");
    }
    function normalizeComponentEncoding(v, y) {
      let f = y !== !0 ? escape : unescape;
      if (v.scheme !== void 0) v.scheme = f(v.scheme);
      if (v.userinfo !== void 0) v.userinfo = f(v.userinfo);
      if (v.host !== void 0) v.host = f(v.host);
      if (v.path !== void 0) v.path = f(v.path);
      if (v.query !== void 0) v.query = f(v.query);
      if (v.fragment !== void 0) v.fragment = f(v.fragment);
      return v;
    }
    function recomposeAuthority(v) {
      let y = [];
      if (v.userinfo !== void 0) y.push(v.userinfo), y.push("@");
      if (v.host !== void 0) {
        let f = unescape(v.host);
        if (!isIPv4(f)) {
          let h = normalizeIPv6(f);
          if (h.isIPV6 === !0) f = `[${h.escapedHost}]`;else f = v.host;
        }
        y.push(f);
      }
      if (typeof v.port === "number" || typeof v.port === "string") y.push(":"), y.push(String(v.port));
      return y.length ? y.join("") : void 0;
    }
    t.exports = {
      nonSimpleDomain: nonSimpleDomain,
      recomposeAuthority: recomposeAuthority,
      normalizeComponentEncoding: normalizeComponentEncoding,
      removeDotSegments: removeDotSegments,
      isIPv4: isIPv4,
      isUUID: isUUID,
      normalizeIPv6: normalizeIPv6,
      stringArrayToHexStripped: stringArrayToHexStripped
    };
  }),
  fi = J((e, t) => {
    let {
        isUUID: isUUID_2
      } = qa(),
      s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
      a = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function isValidSchemeName(S) {
      return a.indexOf(S) !== -1;
    }
    function wsIsSecure(S) {
      if (S.secure === !0) return !0;else if (S.secure === !1) return !1;else if (S.scheme) return S.scheme.length === 3 && (S.scheme[0] === "w" || S.scheme[0] === "W") && (S.scheme[1] === "s" || S.scheme[1] === "S") && (S.scheme[2] === "s" || S.scheme[2] === "S");else return !1;
    }
    function parse(S) {
      if (!S.host) S.error = S.error || "HTTP URIs must have a host.";
      return S;
    }
    function serialize(S) {
      let I = String(S.scheme).toLowerCase() === "https";
      if (S.port === (I ? 443 : 80) || S.port === "") S.port = void 0;
      if (!S.path) S.path = "/";
      return S;
    }
    function parse_2(S) {
      return S.secure = wsIsSecure(S), S.resourceName = (S.path || "/") + (S.query ? "?" + S.query : ""), S.path = void 0, S.query = void 0, S;
    }
    function serialize_2(S) {
      if (S.port === (wsIsSecure(S) ? 443 : 80) || S.port === "") S.port = void 0;
      if (typeof S.secure === "boolean") S.scheme = S.secure ? "wss" : "ws", S.secure = void 0;
      if (S.resourceName) {
        let [I, U] = S.resourceName.split("?");
        S.path = I && I !== "/" ? I : void 0, S.query = U, S.resourceName = void 0;
      }
      return S.fragment = void 0, S;
    }
    function parse_3(S, I) {
      if (!S.path) return S.error = "URN can not be parsed", S;
      let U = S.path.match(s);
      if (U) {
        let K = I.scheme || S.scheme || "urn";
        S.nid = U[1].toLowerCase(), S.nss = U[2];
        let j = getSchemeHandler(`${K}:${I.nid || S.nid}`);
        if (S.path = void 0, j) S = j.parse(S, I);
      } else S.error = S.error || "URN can not be parsed.";
      return S;
    }
    function serialize_3(S, I) {
      if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
      let U = I.scheme || S.scheme || "urn",
        K = S.nid.toLowerCase(),
        j = getSchemeHandler(`${U}:${I.nid || K}`);
      if (j) S = j.serialize(S, I);
      let H = S,
        nss = S.nss;
      return H.path = `${K || I.nid}:${nss}`, I.skipEscape = !0, H;
    }
    function parse_4(S, I) {
      let U = S;
      if (U.uuid = U.nss, U.nss = void 0, !I.tolerant && (!U.uuid || !isUUID_2(U.uuid))) U.error = U.error || "UUID is not valid.";
      return U;
    }
    function serialize_4(S) {
      let I = S;
      return I.nss = (S.uuid || "").toLowerCase(), I;
    }
    let http = {
        scheme: "http",
        domainHost: !0,
        parse: parse,
        serialize: serialize
      },
      https = {
        scheme: "https",
        domainHost: http.domainHost,
        parse: parse,
        serialize: serialize
      },
      ws_2 = {
        scheme: "ws",
        domainHost: !0,
        parse: parse_2,
        serialize: serialize_2
      },
      wss = {
        scheme: "wss",
        domainHost: ws_2.domainHost,
        parse: ws_2.parse,
        serialize: ws_2.serialize
      },
      SCHEMES = {
        http: http,
        https: https,
        ws: ws_2,
        wss: wss,
        urn: {
          scheme: "urn",
          parse: parse_3,
          serialize: serialize_3,
          skipNormalize: !0
        },
        "urn:uuid": {
          scheme: "urn:uuid",
          parse: parse_4,
          serialize: serialize_4,
          skipNormalize: !0
        }
      };
    Object.setPrototypeOf(SCHEMES, null);
    function getSchemeHandler(S) {
      return S && (SCHEMES[S] || SCHEMES[S.toLowerCase()]) || void 0;
    }
    t.exports = {
      wsIsSecure: wsIsSecure,
      SCHEMES: SCHEMES,
      isValidSchemeName: isValidSchemeName,
      getSchemeHandler: getSchemeHandler
    };
  }),
  pi = J((e, t) => {
    let {
        normalizeIPv6: normalizeIPv6_2,
        removeDotSegments: removeDotSegments_2,
        recomposeAuthority: recomposeAuthority_2,
        normalizeComponentEncoding: normalizeComponentEncoding_2,
        isIPv4: isIPv4_2,
        nonSimpleDomain: nonSimpleDomain_2
      } = qa(),
      {
        SCHEMES: SCHEMES_2,
        getSchemeHandler: getSchemeHandler_2
      } = fi();
    function normalize(g, p) {
      if (typeof g === "string") g = serialize_5(parse_5(g, p), p);else if (typeof g === "object") g = parse_5(serialize_5(g, p), p);
      return g;
    }
    function resolve(g, p, R) {
      let k = R ? Object.assign({
          scheme: "null"
        }, R) : {
          scheme: "null"
        },
        b = resolveComponent(parse_5(g, k), parse_5(p, k), k, !0);
      return k.skipEscape = !0, serialize_5(b, k);
    }
    function resolveComponent(g, p, R, k) {
      let b = {};
      if (!k) g = parse_5(serialize_5(g, R), R), p = parse_5(serialize_5(p, R), R);
      if (R = R || {}, !R.tolerant && p.scheme) b.scheme = p.scheme, b.userinfo = p.userinfo, b.host = p.host, b.port = p.port, b.path = removeDotSegments_2(p.path || ""), b.query = p.query;else {
        if (p.userinfo !== void 0 || p.host !== void 0 || p.port !== void 0) b.userinfo = p.userinfo, b.host = p.host, b.port = p.port, b.path = removeDotSegments_2(p.path || ""), b.query = p.query;else {
          if (!p.path) {
            if (b.path = g.path, p.query !== void 0) b.query = p.query;else b.query = g.query;
          } else {
            if (p.path[0] === "/") b.path = removeDotSegments_2(p.path);else {
              if ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path) b.path = "/" + p.path;else if (!g.path) b.path = p.path;else b.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + p.path;
              b.path = removeDotSegments_2(b.path);
            }
            b.query = p.query;
          }
          b.userinfo = g.userinfo, b.host = g.host, b.port = g.port;
        }
        b.scheme = g.scheme;
      }
      return b.fragment = p.fragment, b;
    }
    function equal(g, p, R) {
      if (typeof g === "string") g = unescape(g), g = serialize_5(normalizeComponentEncoding_2(parse_5(g, R), !0), {
        ...R,
        skipEscape: !0
      });else if (typeof g === "object") g = serialize_5(normalizeComponentEncoding_2(g, !0), {
        ...R,
        skipEscape: !0
      });
      if (typeof p === "string") p = unescape(p), p = serialize_5(normalizeComponentEncoding_2(parse_5(p, R), !0), {
        ...R,
        skipEscape: !0
      });else if (typeof p === "object") p = serialize_5(normalizeComponentEncoding_2(p, !0), {
        ...R,
        skipEscape: !0
      });
      return g.toLowerCase() === p.toLowerCase();
    }
    function serialize_5(g, p) {
      let R = {
          host: g.host,
          scheme: g.scheme,
          userinfo: g.userinfo,
          port: g.port,
          path: g.path,
          query: g.query,
          nid: g.nid,
          nss: g.nss,
          uuid: g.uuid,
          fragment: g.fragment,
          reference: g.reference,
          resourceName: g.resourceName,
          secure: g.secure,
          error: ""
        },
        k = Object.assign({}, p),
        b = [],
        S = getSchemeHandler_2(k.scheme || R.scheme);
      if (S && S.serialize) S.serialize(R, k);
      if (R.path !== void 0) if (!k.skipEscape) {
        if (R.path = escape(R.path), R.scheme !== void 0) R.path = R.path.split("%3A").join(":");
      } else R.path = unescape(R.path);
      if (k.reference !== "suffix" && R.scheme) b.push(R.scheme, ":");
      let I = recomposeAuthority_2(R);
      if (I !== void 0) {
        if (k.reference !== "suffix") b.push("//");
        if (b.push(I), R.path && R.path[0] !== "/") b.push("/");
      }
      if (R.path !== void 0) {
        let U = R.path;
        if (!k.absolutePath && (!S || !S.absolutePath)) U = removeDotSegments_2(U);
        if (I === void 0 && U[0] === "/" && U[1] === "/") U = "/%2F" + U.slice(2);
        b.push(U);
      }
      if (R.query !== void 0) b.push("?", R.query);
      if (R.fragment !== void 0) b.push("#", R.fragment);
      return b.join("");
    }
    let y = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function parse_5(g, p) {
      let R = Object.assign({}, p),
        k = {
          scheme: void 0,
          userinfo: void 0,
          host: "",
          port: void 0,
          path: "",
          query: void 0,
          fragment: void 0
        },
        b = !1;
      if (R.reference === "suffix") if (R.scheme) g = R.scheme + ":" + g;else g = "//" + g;
      let S = g.match(y);
      if (S) {
        if (k.scheme = S[1], k.userinfo = S[3], k.host = S[4], k.port = parseInt(S[5], 10), k.path = S[6] || "", k.query = S[7], k.fragment = S[8], isNaN(k.port)) k.port = S[5];
        if (k.host) if (isIPv4_2(k.host) === !1) {
          let U = normalizeIPv6_2(k.host);
          k.host = U.host.toLowerCase(), b = U.isIPV6;
        } else b = !0;
        if (k.scheme === void 0 && k.userinfo === void 0 && k.host === void 0 && k.port === void 0 && k.query === void 0 && !k.path) k.reference = "same-document";else if (k.scheme === void 0) k.reference = "relative";else if (k.fragment === void 0) k.reference = "absolute";else k.reference = "uri";
        if (R.reference && R.reference !== "suffix" && R.reference !== k.reference) k.error = k.error || "URI is not a " + R.reference + " reference.";
        let I = getSchemeHandler_2(R.scheme || k.scheme);
        if (!R.unicodeSupport && (!I || !I.unicodeSupport)) {
          if (k.host && (R.domainHost || I && I.domainHost) && b === !1 && nonSimpleDomain_2(k.host)) try {
            k.host = URL.domainToASCII(k.host.toLowerCase());
          } catch (U) {
            k.error = k.error || "Host's domain name can not be converted to ASCII: " + U;
          }
        }
        if (!I || I && !I.skipNormalize) {
          if (g.indexOf("%") !== -1) {
            if (k.scheme !== void 0) k.scheme = unescape(k.scheme);
            if (k.host !== void 0) k.host = unescape(k.host);
          }
          if (k.path) k.path = escape(unescape(k.path));
          if (k.fragment) k.fragment = encodeURI(decodeURIComponent(k.fragment));
        }
        if (I && I.parse) I.parse(k, R);
      } else k.error = k.error || "URI can not be parsed.";
      return k;
    }
    let h = {
      SCHEMES: SCHEMES_2,
      normalize: normalize,
      resolve: resolve,
      resolveComponent: resolveComponent,
      equal: equal,
      serialize: serialize_5,
      parse: parse_5
    };
    t.exports = h, t.exports.default = h, t.exports.fastUri = h;
  }),
  Si = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = pi();
    t.code = 'require("ajv/dist/runtime/uri").default', e.default = t;
  }),
  Oa = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = Wt();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return t.KeywordCxt;
      }
    });
    var r = te();
    Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return r._;
      }
    }), Object.defineProperty(e, "str", {
      enumerable: !0,
      get: function () {
        return r.str;
      }
    }), Object.defineProperty(e, "stringify", {
      enumerable: !0,
      get: function () {
        return r.stringify;
      }
    }), Object.defineProperty(e, "nil", {
      enumerable: !0,
      get: function () {
        return r.nil;
      }
    }), Object.defineProperty(e, "Name", {
      enumerable: !0,
      get: function () {
        return r.Name;
      }
    }), Object.defineProperty(e, "CodeGen", {
      enumerable: !0,
      get: function () {
        return r.CodeGen;
      }
    });
    let s = Ir(),
      a = Yt(),
      n = Ca(),
      i = qr(),
      l = te(),
      c = kr(),
      d = zr(),
      m = ne(),
      _ = mi(),
      P = Si(),
      T = (N, D) => new RegExp(N, D);
    T.code = "new RegExp";
    let v = ["removeAdditional", "useDefaults", "coerceTypes"],
      prefixes_2 = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]),
      f = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
      },
      h = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
      },
      g = 200;
    function p(N) {
      var D, x, w, O, L, G, Y, re, Q, ce, be, q, V, F, X, Z, ee, de, Se, _e, pe, ue, ze, ge, Ne;
      let strict = N.strict,
        Me = (D = N.code) === null || D === void 0 ? void 0 : D.optimize,
        optimize = Me === !0 || Me === void 0 ? 1 : Me || 0,
        regExp_2 = (w = (x = N.code) === null || x === void 0 ? void 0 : x.regExp) !== null && w !== void 0 ? w : T,
        uriResolver_2 = (O = N.uriResolver) !== null && O !== void 0 ? O : P.default;
      return {
        strictSchema: (G = (L = N.strictSchema) !== null && L !== void 0 ? L : strict) !== null && G !== void 0 ? G : !0,
        strictNumbers: (re = (Y = N.strictNumbers) !== null && Y !== void 0 ? Y : strict) !== null && re !== void 0 ? re : !0,
        strictTypes: (ce = (Q = N.strictTypes) !== null && Q !== void 0 ? Q : strict) !== null && ce !== void 0 ? ce : "log",
        strictTuples: (q = (be = N.strictTuples) !== null && be !== void 0 ? be : strict) !== null && q !== void 0 ? q : "log",
        strictRequired: (F = (V = N.strictRequired) !== null && V !== void 0 ? V : strict) !== null && F !== void 0 ? F : !1,
        code: N.code ? {
          ...N.code,
          optimize: optimize,
          regExp: regExp_2
        } : {
          optimize: optimize,
          regExp: regExp_2
        },
        loopRequired: (X = N.loopRequired) !== null && X !== void 0 ? X : g,
        loopEnum: (Z = N.loopEnum) !== null && Z !== void 0 ? Z : g,
        meta: (ee = N.meta) !== null && ee !== void 0 ? ee : !0,
        messages: (de = N.messages) !== null && de !== void 0 ? de : !0,
        inlineRefs: (Se = N.inlineRefs) !== null && Se !== void 0 ? Se : !0,
        schemaId: (_e = N.schemaId) !== null && _e !== void 0 ? _e : "$id",
        addUsedSchema: (pe = N.addUsedSchema) !== null && pe !== void 0 ? pe : !0,
        validateSchema: (ue = N.validateSchema) !== null && ue !== void 0 ? ue : !0,
        validateFormats: (ze = N.validateFormats) !== null && ze !== void 0 ? ze : !0,
        unicodeRegExp: (ge = N.unicodeRegExp) !== null && ge !== void 0 ? ge : !0,
        int32range: (Ne = N.int32range) !== null && Ne !== void 0 ? Ne : !0,
        uriResolver: uriResolver_2
      };
    }
    var R = class {
      constructor(N = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set(), this._loading = {}, this._cache = new Map(), N = this.opts = {
          ...N,
          ...p(N)
        };
        let {
          es5: es5_3,
          lines: lines_2
        } = this.opts.code;
        this.scope = new l.ValueScope({
          scope: {},
          prefixes: prefixes_2,
          es5: es5_3,
          lines: lines_2
        }), this.logger = H(N.logger);
        let validateFormats = N.validateFormats;
        if (N.validateFormats = !1, this.RULES = (0, n.getRules)(), k.call(this, f, N, "NOT SUPPORTED"), k.call(this, h, N, "DEPRECATED", "warn"), this._metaOpts = K.call(this), N.formats) I.call(this);
        if (this._addVocabularies(), this._addDefaultMetaSchema(), N.keywords) U.call(this, N.keywords);
        if (typeof N.meta == "object") this.addMetaSchema(N.meta);
        S.call(this), N.validateFormats = validateFormats;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        let {
            $data: $data_2,
            meta: meta,
            schemaId: schemaId_5
          } = this.opts,
          w = _;
        if (schemaId_5 === "id") w = {
          ..._
        }, w.id = w.$id, delete w.$id;
        if (meta && $data_2) this.addMetaSchema(w, w[schemaId_5], !1);
      }
      defaultMeta() {
        let {
          meta: meta_2,
          schemaId: schemaId_6
        } = this.opts;
        return this.opts.defaultMeta = typeof meta_2 == "object" ? meta_2[schemaId_6] || meta_2 : void 0;
      }
      validate(N, D) {
        let x;
        if (typeof N == "string") {
          if (x = this.getSchema(N), !x) throw Error(`no schema with key or ref "${N}"`);
        } else x = this.compile(N);
        let w = x(D);
        if (!("$async" in x)) this.errors = x.errors;
        return w;
      }
      compile(N, D) {
        let x = this._addSchema(N, D);
        return x.validate || this._compileSchemaEnv(x);
      }
      compileAsync(N, D) {
        if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
        let {
          loadSchema: loadSchema
        } = this.opts;
        return w.call(this, N, D);
        async function w(Q, ce) {
          await O.call(this, Q.$schema);
          let be = this._addSchema(Q, ce);
          return be.validate || L.call(this, be);
        }
        async function O($ref) {
          if ($ref && !this.getSchema($ref)) await w.call(this, {
            $ref: $ref
          }, !0);
        }
        async function L(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (error) {
            if (!(error instanceof a.default)) throw error;
            return G.call(this, error), await Y.call(this, error.missingSchema), L.call(this, Q);
          }
        }
        function G({
          missingSchema: missingSchema,
          missingRef: missingRef
        }) {
          if (this.refs[missingSchema]) throw Error(`AnySchema ${missingSchema} is loaded but ${missingRef} cannot be resolved`);
        }
        async function Y(Q) {
          let ce = await re.call(this, Q);
          if (!this.refs[Q]) await O.call(this, ce.$schema);
          if (!this.refs[Q]) this.addSchema(ce, Q, D);
        }
        async function re(Q) {
          let ce = this._loading[Q];
          if (ce) return ce;
          try {
            return await (this._loading[Q] = loadSchema(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      addSchema(N, D, x, w = this.opts.validateSchema) {
        if (Array.isArray(N)) {
          for (let L of N) this.addSchema(L, void 0, x, w);
          return this;
        }
        let O;
        if (typeof N === "object") {
          let {
            schemaId: schemaId_7
          } = this.opts;
          if (O = N[schemaId_7], O !== void 0 && typeof O != "string") throw Error(`schema ${schemaId_7} must be string`);
        }
        return D = (0, c.normalizeId)(D || O), this._checkUnique(D), this.schemas[D] = this._addSchema(N, x, D, w, !0), this;
      }
      addMetaSchema(N, D, x = this.opts.validateSchema) {
        return this.addSchema(N, D, !0, x), this;
      }
      validateSchema(N, D) {
        if (typeof N == "boolean") return !0;
        let x;
        if (x = N.$schema, x !== void 0 && typeof x != "string") throw Error("$schema must be a string");
        if (x = x || this.opts.defaultMeta || this.defaultMeta(), !x) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        let w = this.validate(x, N);
        if (!w && D) {
          let O = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(O);else throw Error(O);
        }
        return w;
      }
      getSchema(N) {
        let D;
        while (typeof (D = b.call(this, N)) == "string") N = D;
        if (D === void 0) {
          let {
              schemaId: schemaId_8
            } = this.opts,
            w = new i.SchemaEnv({
              schema: {},
              schemaId: schemaId_8
            });
          if (D = i.resolveSchema.call(this, w, N), !D) return;
          this.refs[N] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
      }
      removeSchema(N) {
        if (N instanceof RegExp) return this._removeAllSchemas(this.schemas, N), this._removeAllSchemas(this.refs, N), this;
        switch (typeof N) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string":
            {
              let D = b.call(this, N);
              if (typeof D == "object") this._cache.delete(D.schema);
              return delete this.schemas[N], delete this.refs[N], this;
            }
          case "object":
            {
              let D = N;
              this._cache.delete(D);
              let x = N[this.opts.schemaId];
              if (x) x = (0, c.normalizeId)(x), delete this.schemas[x], delete this.refs[x];
              return this;
            }
          default:
            throw Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(N) {
        for (let D of N) this.addKeyword(D);
        return this;
      }
      addKeyword(N, D) {
        let x;
        if (typeof N == "string") {
          if (x = N, typeof D == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = x;
        } else if (typeof N == "object" && D === void 0) {
          if (D = N, x = D.keyword, Array.isArray(x) && !x.length) throw Error("addKeywords: keyword must be string or non-empty array");
        } else throw Error("invalid addKeywords parameters");
        if (B.call(this, x, D), !D) return (0, m.eachItem)(x, O => se.call(this, O)), this;
        ie.call(this, D);
        let w = {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        };
        return (0, m.eachItem)(x, w.type.length === 0 ? O => se.call(this, O, w) : O => w.type.forEach(item => se.call(this, O, w, item))), this;
      }
      getKeyword(N) {
        let D = this.RULES.all[N];
        return typeof D == "object" ? D.definition : !!D;
      }
      removeKeyword(N) {
        let {
          RULES: RULES_2
        } = this;
        delete RULES_2.keywords[N], delete RULES_2.all[N];
        for (let x of RULES_2.rules) {
          let w = x.rules.findIndex(item => item.keyword === N);
          if (w >= 0) x.rules.splice(w, 1);
        }
        return this;
      }
      addFormat(N, D) {
        if (typeof D == "string") D = new RegExp(D);
        return this.formats[N] = D, this;
      }
      errorsText(N = this.errors, {
        separator = ", ",
        dataVar = "data"
      } = {}) {
        if (!N || N.length === 0) return "No errors";
        return N.map(item => `${dataVar}${item.instancePath} ${item.message}`).reduce((acc, item) => acc + separator + item);
      }
      $dataMetaSchema(N, D) {
        let x = this.RULES.all;
        N = JSON.parse(JSON.stringify(N));
        for (let w of D) {
          let O = w.split("/").slice(1),
            L = N;
          for (let G of O) L = L[G];
          for (let G in x) {
            let Y = x[G];
            if (typeof Y != "object") continue;
            let {
                $data: $data_3
              } = Y.definition,
              Q = L[G];
            if ($data_3 && Q) L[G] = oe(Q);
          }
        }
        return N;
      }
      _removeAllSchemas(N, D) {
        for (let x in N) {
          let w = N[x];
          if (!D || D.test(x)) {
            if (typeof w == "string") delete N[x];else if (w && !w.meta) this._cache.delete(w.schema), delete N[x];
          }
        }
      }
      _addSchema(schema_25, meta_3, baseId_4, w = this.opts.validateSchema, O = this.opts.addUsedSchema) {
        let L,
          {
            schemaId: schemaId_9
          } = this.opts;
        if (typeof schema_25 == "object") L = schema_25[schemaId_9];else if (this.opts.jtd) throw Error("schema must be object");else if (typeof schema_25 != "boolean") throw Error("schema must be object or boolean");
        let Y = this._cache.get(schema_25);
        if (Y !== void 0) return Y;
        baseId_4 = (0, c.normalizeId)(L || baseId_4);
        let localRefs = c.getSchemaRefs.call(this, schema_25, baseId_4);
        if (Y = new i.SchemaEnv({
          schema: schema_25,
          schemaId: schemaId_9,
          meta: meta_3,
          baseId: baseId_4,
          localRefs: localRefs
        }), this._cache.set(Y.schema, Y), O && !baseId_4.startsWith("#")) {
          if (baseId_4) this._checkUnique(baseId_4);
          this.refs[baseId_4] = Y;
        }
        if (w) this.validateSchema(schema_25, !0);
        return Y;
      }
      _checkUnique(N) {
        if (this.schemas[N] || this.refs[N]) throw Error(`schema with key or id "${N}" already exists`);
      }
      _compileSchemaEnv(N) {
        if (N.meta) this._compileMetaSchema(N);else i.compileSchema.call(this, N);
        if (!N.validate) throw Error("ajv implementation error");
        return N.validate;
      }
      _compileMetaSchema(N) {
        let opts_18 = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, N);
        } finally {
          this.opts = opts_18;
        }
      }
    };
    R.ValidationError = s.default, R.MissingRefError = a.default, e.default = R;
    function k(N, D, x, w = "error") {
      for (let O in N) {
        let L = O;
        if (L in D) this.logger[w](`${x}: option ${O}. ${N[L]}`);
      }
    }
    function b(N) {
      return N = (0, c.normalizeId)(N), this.schemas[N] || this.refs[N];
    }
    function S() {
      let schemas = this.opts.schemas;
      if (!schemas) return;
      if (Array.isArray(schemas)) this.addSchema(schemas);else for (let D in schemas) this.addSchema(schemas[D], D);
    }
    function I() {
      for (let N in this.opts.formats) {
        let D = this.opts.formats[N];
        if (D) this.addFormat(N, D);
      }
    }
    function U(N) {
      if (Array.isArray(N)) {
        this.addVocabulary(N);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let D in N) {
        let x = N[D];
        if (!x.keyword) x.keyword = D;
        this.addKeyword(x);
      }
    }
    function K() {
      let N = {
        ...this.opts
      };
      for (let D of v) delete N[D];
      return N;
    }
    let j = {
      log() {},
      warn() {},
      error() {}
    };
    function H(N) {
      if (N === !1) return j;
      if (N === void 0) return console;
      if (N.log && N.warn && N.error) return N;
      throw Error("logger must implement log, warn and error methods");
    }
    let W = /^[a-z_$][a-z0-9_$:-]*$/i;
    function B(N, D) {
      let {
        RULES: RULES_3
      } = this;
      if ((0, m.eachItem)(N, w => {
        if (RULES_3.keywords[w]) throw Error(`Keyword ${w} is already defined`);
        if (!W.test(w)) throw Error(`Keyword ${w} has invalid name`);
      }), !D) return;
      if (D.$data && !("code" in D || "validate" in D)) throw Error('$data keyword must have "code" or "validate" function');
    }
    function se(keyword_11, D, type_4) {
      var w;
      let O = D === null || D === void 0 ? void 0 : D.post;
      if (type_4 && O) throw Error('keyword with "post" flag cannot have "type"');
      let {
          RULES: RULES_4
        } = this,
        G = O ? RULES_4.post : RULES_4.rules.find(({
          type: type_3
        }) => type_3 === type_4);
      if (!G) G = {
        type: type_4,
        rules: []
      }, RULES_4.rules.push(G);
      if (RULES_4.keywords[keyword_11] = !0, !D) return;
      let Y = {
        keyword: keyword_11,
        definition: {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        }
      };
      if (D.before) le.call(this, G, Y, D.before);else G.rules.push(Y);
      RULES_4.all[keyword_11] = Y, (w = D.implements) === null || w === void 0 || w.forEach(item => this.addKeyword(item));
    }
    function le(N, D, x) {
      let w = N.rules.findIndex(item => item.keyword === x);
      if (w >= 0) N.rules.splice(w, 0, D);else N.rules.push(D), this.logger.warn(`rule ${x} is not defined`);
    }
    function ie(N) {
      let {
        metaSchema: metaSchema
      } = N;
      if (metaSchema === void 0) return;
      if (N.$data && this.opts.$data) metaSchema = oe(metaSchema);
      N.validateSchema = this.compile(metaSchema, !0);
    }
    let me = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function oe(N) {
      return {
        anyOf: [N, me]
      };
    }
  });
var gi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = {
      keyword: "id",
      code() {
        throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    e.default = t;
  }),
  os = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.callRef = e.getValidate = void 0;
    let t = Yt(),
      r = Oe(),
      s = te(),
      a = qe(),
      n = qr(),
      i = ne(),
      l = {
        keyword: "$ref",
        schemaType: "string",
        code(m) {
          let {
              gen: gen_39,
              schema: P,
              it: it_19
            } = m,
            {
              baseId: baseId_5,
              schemaEnv: schemaEnv_7,
              validateName: validateName_7,
              opts: opts_19,
              self: self_7
            } = it_19,
            {
              root: p
            } = schemaEnv_7;
          if ((P === "#" || P === "#/") && baseId_5 === p.baseId) return k();
          let R = n.resolveRef.call(self_7, p, baseId_5, P);
          if (R === void 0) throw new t.default(it_19.opts.uriResolver, baseId_5, P);
          if (R instanceof n.SchemaEnv) return b(R);
          return S(R);
          function k() {
            if (schemaEnv_7 === p) return d(m, validateName_7, schemaEnv_7, schemaEnv_7.$async);
            let I = gen_39.scopeValue("root", {
              ref: p
            });
            return d(m, s._`${I}.validate`, p, p.$async);
          }
          function b(I) {
            d(m, c(m, I), I, I.$async);
          }
          function S(I) {
            let topSchemaRef_6 = gen_39.scopeValue("schema", opts_19.code.source === !0 ? {
                ref: I,
                code: (0, s.stringify)(I)
              } : {
                ref: I
              }),
              K = gen_39.name("valid"),
              j = m.subschema({
                schema: I,
                dataTypes: [],
                schemaPath: s.nil,
                topSchemaRef: topSchemaRef_6,
                errSchemaPath: P
              }, K);
            m.mergeEvaluated(j), m.ok(K);
          }
        }
      };
    function c(m, ref_5) {
      let {
        gen: gen_40
      } = m;
      return ref_5.validate ? gen_40.scopeValue("validate", {
        ref: ref_5.validate
      }) : s._`${gen_40.scopeValue("wrapper", {
        ref: ref_5
      })}.validate`;
    }
    e.getValidate = c;
    function d(m, _, P, T) {
      let {
          gen: gen_41,
          it: it_20
        } = m,
        {
          allErrors: allErrors_5,
          schemaEnv: schemaEnv_8,
          opts: opts_20
        } = it_20,
        p = opts_20.passContext ? a.default.this : s.nil;
      if (T) R();else k();
      function R() {
        if (!schemaEnv_8.$async) throw Error("async schema referenced by sync schema");
        let I = gen_41.let("valid");
        gen_41.try(() => {
          if (gen_41.code(s._`await ${(0, r.callValidateCode)(m, _, p)}`), S(_), !allErrors_5) gen_41.assign(I, !0);
        }, U => {
          if (gen_41.if(s._`!(${U} instanceof ${it_20.ValidationError})`, () => gen_41.throw(U)), b(U), !allErrors_5) gen_41.assign(I, !1);
        }), m.ok(I);
      }
      function k() {
        m.result((0, r.callValidateCode)(m, _, p), () => S(_), () => b(_));
      }
      function b(I) {
        let U = s._`${I}.errors`;
        gen_41.assign(a.default.vErrors, s._`${a.default.vErrors} === null ? ${U} : ${a.default.vErrors}.concat(${U})`), gen_41.assign(a.default.errors, s._`${a.default.vErrors}.length`);
      }
      function S(I) {
        var U;
        if (!it_20.opts.unevaluated) return;
        let K = (U = P === null || P === void 0 ? void 0 : P.validate) === null || U === void 0 ? void 0 : U.evaluated;
        if (it_20.props !== !0) if (K && !K.dynamicProps) {
          if (K.props !== void 0) it_20.props = i.mergeEvaluated.props(gen_41, K.props, it_20.props);
        } else {
          let j = gen_41.var("props", s._`${I}.evaluated.props`);
          it_20.props = i.mergeEvaluated.props(gen_41, j, it_20.props, s.Name);
        }
        if (it_20.items !== !0) if (K && !K.dynamicItems) {
          if (K.items !== void 0) it_20.items = i.mergeEvaluated.items(gen_41, K.items, it_20.items);
        } else {
          let j = gen_41.var("items", s._`${I}.evaluated.items`);
          it_20.items = i.mergeEvaluated.items(gen_41, j, it_20.items, s.Name);
        }
      }
    }
    e.callRef = d, e.default = l;
  }),
  Na = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = gi(),
      r = os(),
      s = ["$schema", "$id", "$defs", "$vocabulary", {
        keyword: "$comment"
      }, "definitions", t.default, r.default];
    e.default = s;
  }),
  _i = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      operators = t.operators,
      s = {
        maximum: {
          okStr: "<=",
          ok: operators.LTE,
          fail: operators.GT
        },
        minimum: {
          okStr: ">=",
          ok: operators.GTE,
          fail: operators.LT
        },
        exclusiveMaximum: {
          okStr: "<",
          ok: operators.LT,
          fail: operators.GTE
        },
        exclusiveMinimum: {
          okStr: ">",
          ok: operators.GT,
          fail: operators.LTE
        }
      },
      a = {
        keyword: Object.keys(s),
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
          message: ({
            keyword: keyword_12,
            schemaCode: schemaCode_5
          }) => t.str`must be ${s[keyword_12].okStr} ${schemaCode_5}`,
          params: ({
            keyword: keyword_13,
            schemaCode: schemaCode_6
          }) => t._`{comparison: ${s[keyword_13].okStr}, limit: ${schemaCode_6}}`
        },
        code(n) {
          let {
            keyword: keyword_14,
            data: data_16,
            schemaCode: schemaCode_7
          } = n;
          n.fail$data(t._`${data_16} ${s[keyword_14].fail} ${schemaCode_7} || isNaN(${data_16})`);
        }
      };
    e.default = a;
  }),
  vi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
          message: ({
            schemaCode: schemaCode_8
          }) => t.str`must be multiple of ${schemaCode_8}`,
          params: ({
            schemaCode: schemaCode_9
          }) => t._`{multipleOf: ${schemaCode_9}}`
        },
        code(s) {
          let {
              gen: gen_42,
              data: data_17,
              schemaCode: schemaCode_10,
              it: it_21
            } = s,
            multipleOfPrecision = it_21.opts.multipleOfPrecision,
            d = gen_42.let("res"),
            m = multipleOfPrecision ? t._`Math.abs(Math.round(${d}) - ${d}) > 1e-${multipleOfPrecision}` : t._`${d} !== parseInt(${d})`;
          s.fail$data(t._`(${schemaCode_10} === 0 || (${d} = ${data_17}/${schemaCode_10}, ${m}))`);
        }
      };
    e.default = r;
  }),
  yi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(r) {
      let s = r.length,
        a = 0,
        n = 0,
        i;
      while (n < s) if (a++, i = r.charCodeAt(n++), i >= 55296 && i <= 56319 && n < s) {
        if (i = r.charCodeAt(n), (i & 64512) === 56320) n++;
      }
      return a;
    }
    e.default = t, t.code = 'require("ajv/dist/runtime/ucs2length").default';
  }),
  bi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = yi(),
      a = {
        keyword: ["maxLength", "minLength"],
        type: "string",
        schemaType: "number",
        $data: !0,
        error: {
          message({
            keyword: keyword_15,
            schemaCode: schemaCode_11
          }) {
            let l = keyword_15 === "maxLength" ? "more" : "fewer";
            return t.str`must NOT have ${l} than ${schemaCode_11} characters`;
          },
          params: ({
            schemaCode: schemaCode_12
          }) => t._`{limit: ${schemaCode_12}}`
        },
        code(n) {
          let {
              keyword: keyword_16,
              data: data_18,
              schemaCode: schemaCode_13,
              it: it_22
            } = n,
            m = keyword_16 === "maxLength" ? t.operators.GT : t.operators.LT,
            _ = it_22.opts.unicode === !1 ? t._`${data_18}.length` : t._`${(0, r.useFunc)(n.gen, s.default)}(${data_18})`;
          n.fail$data(t._`${_} ${m} ${schemaCode_13}`);
        }
      };
    e.default = a;
  }),
  Ri = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Oe(),
      r = ne(),
      s = te(),
      a = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: !0,
        error: {
          message: ({
            schemaCode: schemaCode_14
          }) => s.str`must match pattern "${schemaCode_14}"`,
          params: ({
            schemaCode: schemaCode_15
          }) => s._`{pattern: ${schemaCode_15}}`
        },
        code(n) {
          let {
              gen: gen_43,
              data: data_19,
              $data: $data_4,
              schema: schema_26,
              schemaCode: schemaCode_16,
              it: it_23
            } = n,
            P = it_23.opts.unicodeRegExp ? "u" : "";
          if ($data_4) {
            let {
                regExp: regExp_3
              } = it_23.opts.code,
              v = regExp_3.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(gen_43, regExp_3),
              y = gen_43.let("valid");
            gen_43.try(() => gen_43.assign(y, s._`${v}(${schemaCode_16}, ${P}).test(${data_19})`), () => gen_43.assign(y, !1)), n.fail$data(s._`!${y}`);
          } else {
            let T = (0, t.usePattern)(n, schema_26);
            n.fail$data(s._`!${T}.test(${data_19})`);
          }
        }
      };
    e.default = a;
  }),
  wi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = {
        keyword: ["maxProperties", "minProperties"],
        type: "object",
        schemaType: "number",
        $data: !0,
        error: {
          message({
            keyword: keyword_17,
            schemaCode: schemaCode_17
          }) {
            let n = keyword_17 === "maxProperties" ? "more" : "fewer";
            return t.str`must NOT have ${n} than ${schemaCode_17} properties`;
          },
          params: ({
            schemaCode: schemaCode_18
          }) => t._`{limit: ${schemaCode_18}}`
        },
        code(s) {
          let {
              keyword: keyword_18,
              data: data_20,
              schemaCode: schemaCode_19
            } = s,
            l = keyword_18 === "maxProperties" ? t.operators.GT : t.operators.LT;
          s.fail$data(t._`Object.keys(${data_20}).length ${l} ${schemaCode_19}`);
        }
      };
    e.default = r;
  }),
  $i = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Oe(),
      r = te(),
      s = ne(),
      a = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: !0,
        error: {
          message: ({
            params: {
              missingProperty: missingProperty_2
            }
          }) => r.str`must have required property '${missingProperty_2}'`,
          params: ({
            params: {
              missingProperty: missingProperty_3
            }
          }) => r._`{missingProperty: ${missingProperty_3}}`
        },
        code(n) {
          let {
              gen: gen_44,
              schema: schema_27,
              schemaCode: schemaCode_20,
              data: data_21,
              $data: $data_5,
              it: it_24
            } = n,
            {
              opts: opts_21
            } = it_24;
          if (!$data_5 && schema_27.length === 0) return;
          let T = schema_27.length >= opts_21.loopRequired;
          if (it_24.allErrors) v();else y();
          if (opts_21.strictRequired) {
            let properties_3 = n.parentSchema.properties,
              {
                definedProperties: definedProperties
              } = n.it;
            for (let R of schema_27) if ((properties_3 === null || properties_3 === void 0 ? void 0 : properties_3[R]) === void 0 && !definedProperties.has(R)) {
              let k = `required property "${R}" is not defined at "${it_24.schemaEnv.baseId + it_24.errSchemaPath}" (strictRequired)`;
              (0, s.checkStrictMode)(it_24, k, it_24.opts.strictRequired);
            }
          }
          function v() {
            if (T || $data_5) n.block$data(r.nil, f);else for (let g of schema_27) (0, t.checkReportMissingProp)(n, g);
          }
          function y() {
            let g = gen_44.let("missing");
            if (T || $data_5) {
              let p = gen_44.let("valid", !0);
              n.block$data(p, () => h(g, p)), n.ok(p);
            } else gen_44.if((0, t.checkMissingProp)(n, schema_27, g)), (0, t.reportMissingProp)(n, g), gen_44.else();
          }
          function f() {
            gen_44.forOf("prop", schemaCode_20, missingProperty_4 => {
              n.setParams({
                missingProperty: missingProperty_4
              }), gen_44.if((0, t.noPropertyInData)(gen_44, data_21, missingProperty_4, opts_21.ownProperties), () => n.error());
            });
          }
          function h(missingProperty_5, p) {
            n.setParams({
              missingProperty: missingProperty_5
            }), gen_44.forOf(missingProperty_5, schemaCode_20, () => {
              gen_44.assign(p, (0, t.propertyInData)(gen_44, data_21, missingProperty_5, opts_21.ownProperties)), gen_44.if((0, r.not)(p), () => {
                n.error(), gen_44.break();
              });
            }, r.nil);
          }
        }
      };
    e.default = a;
  }),
  Ei = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = {
        keyword: ["maxItems", "minItems"],
        type: "array",
        schemaType: "number",
        $data: !0,
        error: {
          message({
            keyword: keyword_19,
            schemaCode: schemaCode_21
          }) {
            let n = keyword_19 === "maxItems" ? "more" : "fewer";
            return t.str`must NOT have ${n} than ${schemaCode_21} items`;
          },
          params: ({
            schemaCode: schemaCode_22
          }) => t._`{limit: ${schemaCode_22}}`
        },
        code(s) {
          let {
              keyword: keyword_20,
              data: data_22,
              schemaCode: schemaCode_23
            } = s,
            l = keyword_20 === "maxItems" ? t.operators.GT : t.operators.LT;
          s.fail$data(t._`${data_22}.length ${l} ${schemaCode_23}`);
        }
      };
    e.default = r;
  }),
  ns = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ia();
    t.code = 'require("ajv/dist/runtime/equal").default', e.default = t;
  }),
  Pi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = zr(),
      r = te(),
      s = ne(),
      a = ns(),
      n = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: !0,
        error: {
          message: ({
            params: {
              i,
              j: j_2
            }
          }) => r.str`must NOT have duplicate items (items ## ${j_2} and ${i} are identical)`,
          params: ({
            params: {
              i,
              j: j_3
            }
          }) => r._`{i: ${i}, j: ${j_3}}`
        },
        code(i) {
          let {
            gen: gen_45,
            data: data_23,
            $data: $data_6,
            schema: schema_28,
            parentSchema: parentSchema_4,
            schemaCode: schemaCode_24,
            it: it_25
          } = i;
          if (!$data_6 && !schema_28) return;
          let v = gen_45.let("valid"),
            y = parentSchema_4.items ? (0, t.getSchemaTypes)(parentSchema_4.items) : [];
          i.block$data(v, f, r._`${schemaCode_24} === false`), i.ok(v);
          function f() {
            let i_2 = gen_45.let("i", r._`${data_23}.length`),
              j_4 = gen_45.let("j");
            i.setParams({
              i: i_2,
              j: j_4
            }), gen_45.assign(v, !0), gen_45.if(r._`${i_2} > 1`, () => (h() ? g : p)(i_2, j_4));
          }
          function h() {
            return y.length > 0 && !y.some(item => item === "object" || item === "array");
          }
          function g(R, k) {
            let b = gen_45.name("item"),
              S = (0, t.checkDataTypes)(y, b, it_25.opts.strictNumbers, t.DataType.Wrong),
              I = gen_45.const("indices", r._`{}`);
            gen_45.for(r._`;${R}--;`, () => {
              if (gen_45.let(b, r._`${data_23}[${R}]`), gen_45.if(S, r._`continue`), y.length > 1) gen_45.if(r._`typeof ${b} == "string"`, r._`${b} += "_"`);
              gen_45.if(r._`typeof ${I}[${b}] == "number"`, () => {
                gen_45.assign(k, r._`${I}[${b}]`), i.error(), gen_45.assign(v, !1).break();
              }).code(r._`${I}[${b}] = ${R}`);
            });
          }
          function p(R, k) {
            let b = (0, s.useFunc)(gen_45, a.default),
              S = gen_45.name("outer");
            gen_45.label(S).for(r._`;${R}--;`, () => gen_45.for(r._`${k} = ${R}; ${k}--;`, () => gen_45.if(r._`${b}(${data_23}[${R}], ${data_23}[${k}])`, () => {
              i.error(), gen_45.assign(v, !1).break(S);
            })));
          }
        }
      };
    e.default = n;
  }),
  Ti = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = ns(),
      a = {
        keyword: "const",
        $data: !0,
        error: {
          message: "must be equal to constant",
          params: ({
            schemaCode: schemaCode_25
          }) => t._`{allowedValue: ${schemaCode_25}}`
        },
        code(n) {
          let {
            gen: gen_46,
            data: data_24,
            $data: $data_7,
            schemaCode: schemaCode_26,
            schema: schema_29
          } = n;
          if ($data_7 || schema_29 && typeof schema_29 == "object") n.fail$data(t._`!${(0, r.useFunc)(gen_46, s.default)}(${data_24}, ${schemaCode_26})`);else n.fail(t._`${schema_29} !== ${data_24}`);
        }
      };
    e.default = a;
  }),
  zi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = ns(),
      a = {
        keyword: "enum",
        schemaType: "array",
        $data: !0,
        error: {
          message: "must be equal to one of the allowed values",
          params: ({
            schemaCode: schemaCode_27
          }) => t._`{allowedValues: ${schemaCode_27}}`
        },
        code(n) {
          let {
            gen: gen_47,
            data: data_25,
            $data: $data_8,
            schema: schema_30,
            schemaCode: schemaCode_28,
            it: it_26
          } = n;
          if (!$data_8 && schema_30.length === 0) throw Error("enum must have non-empty array");
          let P = schema_30.length >= it_26.opts.loopEnum,
            T,
            v = () => T !== null && T !== void 0 ? T : T = (0, r.useFunc)(gen_47, s.default),
            y;
          if (P || $data_8) y = gen_47.let("valid"), n.block$data(y, f);else {
            if (!Array.isArray(schema_30)) throw Error("ajv implementation error");
            let g = gen_47.const("vSchema", schemaCode_28);
            y = (0, t.or)(...schema_30.map((item, index) => h(g, index)));
          }
          n.pass(y);
          function f() {
            gen_47.assign(y, !1), gen_47.forOf("v", schemaCode_28, g => gen_47.if(t._`${v()}(${data_25}, ${g})`, () => gen_47.assign(y, !0).break()));
          }
          function h(g, p) {
            let R = schema_30[p];
            return typeof R === "object" && R !== null ? t._`${v()}(${data_25}, ${g}[${p}])` : t._`${data_25} === ${R}`;
          }
        }
      };
    e.default = a;
  }),
  Ma = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = _i(),
      r = vi(),
      s = bi(),
      a = Ri(),
      n = wi(),
      i = $i(),
      l = Ei(),
      c = Pi(),
      d = Ti(),
      m = zi(),
      _ = [t.default, r.default, s.default, a.default, n.default, i.default, l.default, c.default, {
        keyword: "type",
        schemaType: ["string", "array"]
      }, {
        keyword: "nullable",
        schemaType: "boolean"
      }, d.default, m.default];
    e.default = _;
  }),
  ja = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateAdditionalItems = void 0;
    let t = te(),
      r = ne(),
      s = {
        keyword: "additionalItems",
        type: "array",
        schemaType: ["boolean", "object"],
        before: "uniqueItems",
        error: {
          message: ({
            params: {
              len: len
            }
          }) => t.str`must NOT have more than ${len} items`,
          params: ({
            params: {
              len: len_2
            }
          }) => t._`{limit: ${len_2}}`
        },
        code(n) {
          let {
              parentSchema: parentSchema_5,
              it: it_27
            } = n,
            {
              items: items_4
            } = parentSchema_5;
          if (!Array.isArray(items_4)) {
            (0, r.checkStrictMode)(it_27, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
          }
          a(n, items_4);
        }
      };
    function a(n, i) {
      let {
        gen: gen_48,
        schema: schema_31,
        data: data_26,
        keyword: keyword_21,
        it: it_28
      } = n;
      it_28.items = !0;
      let P = gen_48.const("len", t._`${data_26}.length`);
      if (schema_31 === !1) n.setParams({
        len: i.length
      }), n.pass(t._`${P} <= ${i.length}`);else if (typeof schema_31 == "object" && !(0, r.alwaysValidSchema)(it_28, schema_31)) {
        let v = gen_48.var("valid", t._`${P} <= ${i.length}`);
        gen_48.if((0, t.not)(v), () => T(v)), n.ok(v);
      }
      function T(v) {
        gen_48.forRange("i", i.length, P, dataProp_3 => {
          if (n.subschema({
            keyword: keyword_21,
            dataProp: dataProp_3,
            dataPropType: r.Type.Num
          }, v), !it_28.allErrors) gen_48.if((0, t.not)(v), () => gen_48.break());
        });
      }
    }
    e.validateAdditionalItems = a, e.default = s;
  }),
  Aa = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateTuple = void 0;
    let t = te(),
      r = ne(),
      s = Oe(),
      a = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "array", "boolean"],
        before: "uniqueItems",
        code(i) {
          let {
            schema: schema_32,
            it: it_29
          } = i;
          if (Array.isArray(schema_32)) return n(i, "additionalItems", schema_32);
          if (it_29.items = !0, (0, r.alwaysValidSchema)(it_29, schema_32)) return;
          i.ok((0, s.validateArray)(i));
        }
      };
    function n(i, l, c = i.schema) {
      let {
        gen: gen_49,
        parentSchema: parentSchema_6,
        data: data_27,
        keyword: keyword_22,
        it: it_30
      } = i;
      if (f(parentSchema_6), it_30.opts.unevaluated && c.length && it_30.items !== !0) it_30.items = r.mergeEvaluated.items(gen_49, c.length, it_30.items);
      let v = gen_49.name("valid"),
        y = gen_49.const("len", t._`${data_27}.length`);
      c.forEach((item, g) => {
        if ((0, r.alwaysValidSchema)(it_30, item)) return;
        gen_49.if(t._`${y} > ${g}`, () => i.subschema({
          keyword: keyword_22,
          schemaProp: g,
          dataProp: g
        }, v)), i.ok(v);
      });
      function f(h) {
        let {
            opts: opts_22,
            errSchemaPath: errSchemaPath_6
          } = it_30,
          R = c.length,
          k = R === h.minItems && (R === h.maxItems || h[l] === !1);
        if (opts_22.strictTuples && !k) {
          let b = `"${keyword_22}" is ${R}-tuple, but minItems or maxItems/${l} are not specified or different at path "${errSchemaPath_6}"`;
          (0, r.checkStrictMode)(it_30, b, opts_22.strictTuples);
        }
      }
    }
    e.validateTuple = n, e.default = a;
  }),
  Ci = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Aa(),
      r = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: s => (0, t.validateTuple)(s, "items")
      };
    e.default = r;
  }),
  ki = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = Oe(),
      a = ja(),
      n = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        error: {
          message: ({
            params: {
              len: len_3
            }
          }) => t.str`must NOT have more than ${len_3} items`,
          params: ({
            params: {
              len: len_4
            }
          }) => t._`{limit: ${len_4}}`
        },
        code(i) {
          let {
              schema: schema_33,
              parentSchema: parentSchema_7,
              it: it_31
            } = i,
            {
              prefixItems: prefixItems
            } = parentSchema_7;
          if (it_31.items = !0, (0, r.alwaysValidSchema)(it_31, schema_33)) return;
          if (prefixItems) (0, a.validateAdditionalItems)(i, prefixItems);else i.ok((0, s.validateArray)(i));
        }
      };
    e.default = n;
  }),
  Ii = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = {
        keyword: "contains",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        trackErrors: !0,
        error: {
          message: ({
            params: {
              min: min,
              max: max
            }
          }) => max === void 0 ? t.str`must contain at least ${min} valid item(s)` : t.str`must contain at least ${min} and no more than ${max} valid item(s)`,
          params: ({
            params: {
              min: min_2,
              max: max_2
            }
          }) => max_2 === void 0 ? t._`{minContains: ${min_2}}` : t._`{minContains: ${min_2}, maxContains: ${max_2}}`
        },
        code(a) {
          let {
              gen: gen_50,
              schema: schema_34,
              parentSchema: parentSchema_8,
              data: data_28,
              it: it_32
            } = a,
            min_3,
            max_3,
            {
              minContains: minContains,
              maxContains: maxContains
            } = parentSchema_8;
          if (it_32.opts.next) min_3 = minContains === void 0 ? 1 : minContains, max_3 = maxContains;else min_3 = 1;
          let v = gen_50.const("len", t._`${data_28}.length`);
          if (a.setParams({
            min: min_3,
            max: max_3
          }), max_3 === void 0 && min_3 === 0) {
            (0, r.checkStrictMode)(it_32, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
            return;
          }
          if (max_3 !== void 0 && min_3 > max_3) {
            (0, r.checkStrictMode)(it_32, '"minContains" > "maxContains" is always invalid'), a.fail();
            return;
          }
          if ((0, r.alwaysValidSchema)(it_32, schema_34)) {
            let p = t._`${v} >= ${min_3}`;
            if (max_3 !== void 0) p = t._`${p} && ${v} <= ${max_3}`;
            a.pass(p);
            return;
          }
          it_32.items = !0;
          let y = gen_50.name("valid");
          if (max_3 === void 0 && min_3 === 1) h(y, () => gen_50.if(y, () => gen_50.break()));else if (min_3 === 0) {
            if (gen_50.let(y, !0), max_3 !== void 0) gen_50.if(t._`${data_28}.length > 0`, f);
          } else gen_50.let(y, !1), f();
          a.result(y, () => a.reset());
          function f() {
            let p = gen_50.name("_valid"),
              R = gen_50.let("count", 0);
            h(p, () => gen_50.if(p, () => g(R)));
          }
          function h(p, R) {
            gen_50.forRange("i", 0, v, dataProp_4 => {
              a.subschema({
                keyword: "contains",
                dataProp: dataProp_4,
                dataPropType: r.Type.Num,
                compositeRule: !0
              }, p), R();
            });
          }
          function g(p) {
            if (gen_50.code(t._`${p}++`), max_3 === void 0) gen_50.if(t._`${p} >= ${min_3}`, () => gen_50.assign(y, !0).break());else if (gen_50.if(t._`${p} > ${max_3}`, () => gen_50.assign(y, !1).break()), min_3 === 1) gen_50.assign(y, !0);else gen_50.if(t._`${p} >= ${min_3}`, () => gen_50.assign(y, !0));
          }
        }
      };
    e.default = s;
  }),
  is = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    let t = te(),
      r = ne(),
      s = Oe();
    e.error = {
      message: ({
        params: {
          property: property_2,
          depsCount: depsCount,
          deps: deps
        }
      }) => {
        let _ = depsCount === 1 ? "property" : "properties";
        return t.str`must have ${_} ${deps} when property ${property_2} is present`;
      },
      params: ({
        params: {
          property: property_3,
          depsCount: depsCount_2,
          deps: deps_2,
          missingProperty: missingProperty_6
        }
      }) => t._`{property: ${property_3},
    missingProperty: ${missingProperty_6},
    depsCount: ${depsCount_2},
    deps: ${deps_2}}`
    };
    let a = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        let [d, m] = n(c);
        i(c, d), l(c, m);
      }
    };
    function n({
      schema: schema_35
    }) {
      let d = {},
        m = {};
      for (let _ in schema_35) {
        if (_ === "__proto__") continue;
        let P = Array.isArray(schema_35[_]) ? d : m;
        P[_] = schema_35[_];
      }
      return [d, m];
    }
    function i(c, d = c.schema) {
      let {
        gen: gen_51,
        data: data_29,
        it: it_33
      } = c;
      if (Object.keys(d).length === 0) return;
      let T = gen_51.let("missing");
      for (let property_4 in d) {
        let y = d[property_4];
        if (y.length === 0) continue;
        let f = (0, s.propertyInData)(gen_51, data_29, property_4, it_33.opts.ownProperties);
        if (c.setParams({
          property: property_4,
          depsCount: y.length,
          deps: y.join(", ")
        }), it_33.allErrors) gen_51.if(f, () => {
          for (let h of y) (0, s.checkReportMissingProp)(c, h);
        });else gen_51.if(t._`${f} && (${(0, s.checkMissingProp)(c, y, T)})`), (0, s.reportMissingProp)(c, T), gen_51.else();
      }
    }
    e.validatePropertyDeps = i;
    function l(c, d = c.schema) {
      let {
          gen: gen_52,
          data: data_30,
          keyword: keyword_23,
          it: it_34
        } = c,
        v = gen_52.name("valid");
      for (let schemaProp_2 in d) {
        if ((0, r.alwaysValidSchema)(it_34, d[schemaProp_2])) continue;
        gen_52.if((0, s.propertyInData)(gen_52, data_30, schemaProp_2, it_34.opts.ownProperties), () => {
          let f = c.subschema({
            keyword: keyword_23,
            schemaProp: schemaProp_2
          }, v);
          c.mergeValidEvaluated(f, v);
        }, () => gen_52.var(v, !0)), c.ok(v);
      }
    }
    e.validateSchemaDeps = l, e.default = a;
  }),
  qi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = {
        keyword: "propertyNames",
        type: "object",
        schemaType: ["object", "boolean"],
        error: {
          message: "property name must be valid",
          params: ({
            params: params_7
          }) => t._`{propertyName: ${params_7.propertyName}}`
        },
        code(a) {
          let {
            gen: gen_53,
            schema: schema_36,
            data: data_31,
            it: it_35
          } = a;
          if ((0, r.alwaysValidSchema)(it_35, schema_36)) return;
          let d = gen_53.name("valid");
          gen_53.forIn("key", data_31, m => {
            a.setParams({
              propertyName: m
            }), a.subschema({
              keyword: "propertyNames",
              data: m,
              dataTypes: ["string"],
              propertyName: m,
              compositeRule: !0
            }, d), gen_53.if((0, t.not)(d), () => {
              if (a.error(!0), !it_35.allErrors) gen_53.break();
            });
          }), a.ok(d);
        }
      };
    e.default = s;
  }),
  La = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Oe(),
      r = te(),
      s = qe(),
      a = ne(),
      n = {
        keyword: "additionalProperties",
        type: ["object"],
        schemaType: ["boolean", "object"],
        allowUndefined: !0,
        trackErrors: !0,
        error: {
          message: "must NOT have additional properties",
          params: ({
            params: params_8
          }) => r._`{additionalProperty: ${params_8.additionalProperty}}`
        },
        code(i) {
          let {
            gen: gen_54,
            schema: schema_37,
            parentSchema: parentSchema_9,
            data: data_32,
            errsCount: errsCount_2,
            it: it_36
          } = i;
          if (!errsCount_2) throw Error("ajv implementation error");
          let {
            allErrors: allErrors_6,
            opts: opts_23
          } = it_36;
          if (it_36.props = !0, opts_23.removeAdditional !== "all" && (0, a.alwaysValidSchema)(it_36, schema_37)) return;
          let y = (0, t.allSchemaProperties)(parentSchema_9.properties),
            f = (0, t.allSchemaProperties)(parentSchema_9.patternProperties);
          h(), i.ok(r._`${errsCount_2} === ${s.default.errors}`);
          function h() {
            gen_54.forIn("key", data_32, b => {
              if (!y.length && !f.length) R(b);else gen_54.if(g(b), () => R(b));
            });
          }
          function g(b) {
            let S;
            if (y.length > 8) {
              let I = (0, a.schemaRefOrVal)(it_36, parentSchema_9.properties, "properties");
              S = (0, t.isOwnProperty)(gen_54, I, b);
            } else if (y.length) S = (0, r.or)(...y.map(item => r._`${b} === ${item}`));else S = r.nil;
            if (f.length) S = (0, r.or)(S, ...f.map(item => r._`${(0, t.usePattern)(i, item)}.test(${b})`));
            return (0, r.not)(S);
          }
          function p(b) {
            gen_54.code(r._`delete ${data_32}[${b}]`);
          }
          function R(additionalProperty) {
            if (opts_23.removeAdditional === "all" || opts_23.removeAdditional && schema_37 === !1) {
              p(additionalProperty);
              return;
            }
            if (schema_37 === !1) {
              if (i.setParams({
                additionalProperty: additionalProperty
              }), i.error(), !allErrors_6) gen_54.break();
              return;
            }
            if (typeof schema_37 == "object" && !(0, a.alwaysValidSchema)(it_36, schema_37)) {
              let S = gen_54.name("valid");
              if (opts_23.removeAdditional === "failing") k(additionalProperty, S, !1), gen_54.if((0, r.not)(S), () => {
                i.reset(), p(additionalProperty);
              });else if (k(additionalProperty, S), !allErrors_6) gen_54.if((0, r.not)(S), () => gen_54.break());
            }
          }
          function k(dataProp_5, S, I) {
            let U = {
              keyword: "additionalProperties",
              dataProp: dataProp_5,
              dataPropType: a.Type.Str
            };
            if (I === !1) Object.assign(U, {
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1
            });
            i.subschema(U, S);
          }
        }
      };
    e.default = n;
  }),
  Oi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Wt(),
      r = Oe(),
      s = ne(),
      a = La(),
      n = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code(i) {
          let {
            gen: gen_55,
            schema: schema_38,
            parentSchema: parentSchema_10,
            data: data_33,
            it: it_37
          } = i;
          if (it_37.opts.removeAdditional === "all" && parentSchema_10.additionalProperties === void 0) a.default.code(new t.KeywordCxt(it_37, a.default, "additionalProperties"));
          let P = (0, r.allSchemaProperties)(schema_38);
          for (let h of P) it_37.definedProperties.add(h);
          if (it_37.opts.unevaluated && P.length && it_37.props !== !0) it_37.props = s.mergeEvaluated.props(gen_55, (0, s.toHash)(P), it_37.props);
          let T = P.filter(item => !(0, s.alwaysValidSchema)(it_37, schema_38[item]));
          if (T.length === 0) return;
          let v = gen_55.name("valid");
          for (let h of T) {
            if (y(h)) f(h);else {
              if (gen_55.if((0, r.propertyInData)(gen_55, data_33, h, it_37.opts.ownProperties)), f(h), !it_37.allErrors) gen_55.else().var(v, !0);
              gen_55.endIf();
            }
            i.it.definedProperties.add(h), i.ok(v);
          }
          function y(h) {
            return it_37.opts.useDefaults && !it_37.compositeRule && schema_38[h].default !== void 0;
          }
          function f(h) {
            i.subschema({
              keyword: "properties",
              schemaProp: h,
              dataProp: h
            }, v);
          }
        }
      };
    e.default = n;
  }),
  Ni = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Oe(),
      r = te(),
      s = ne(),
      a = ne(),
      n = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code(i) {
          let {
              gen: gen_56,
              schema: schema_39,
              data: data_34,
              parentSchema: parentSchema_11,
              it: it_38
            } = i,
            {
              opts: opts_24
            } = it_38,
            T = (0, t.allSchemaProperties)(schema_39),
            v = T.filter(item => (0, s.alwaysValidSchema)(it_38, schema_39[item]));
          if (T.length === 0 || v.length === T.length && (!it_38.opts.unevaluated || it_38.props === !0)) return;
          let y = opts_24.strictSchema && !opts_24.allowMatchingProperties && parentSchema_11.properties,
            f = gen_56.name("valid");
          if (it_38.props !== !0 && !(it_38.props instanceof r.Name)) it_38.props = (0, a.evaluatedPropsToName)(gen_56, it_38.props);
          let {
            props: props_3
          } = it_38;
          g();
          function g() {
            for (let k of T) {
              if (y) p(k);
              if (it_38.allErrors) R(k);else gen_56.var(f, !0), R(k), gen_56.if(f);
            }
          }
          function p(k) {
            for (let b in y) if (new RegExp(k).test(b)) (0, s.checkStrictMode)(it_38, `property ${b} matches pattern ${k} (use allowMatchingProperties)`);
          }
          function R(schemaProp_3) {
            gen_56.forIn("key", data_34, dataProp_6 => {
              gen_56.if(r._`${(0, t.usePattern)(i, schemaProp_3)}.test(${dataProp_6})`, () => {
                let S = v.includes(schemaProp_3);
                if (!S) i.subschema({
                  keyword: "patternProperties",
                  schemaProp: schemaProp_3,
                  dataProp: dataProp_6,
                  dataPropType: a.Type.Str
                }, f);
                if (it_38.opts.unevaluated && props_3 !== !0) gen_56.assign(r._`${props_3}[${dataProp_6}]`, !0);else if (!S && !it_38.allErrors) gen_56.if((0, r.not)(f), () => gen_56.break());
              });
            });
          }
        }
      };
    e.default = n;
  }),
  Mi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ne(),
      r = {
        keyword: "not",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        code(s) {
          let {
            gen: gen_57,
            schema: schema_40,
            it: it_39
          } = s;
          if ((0, t.alwaysValidSchema)(it_39, schema_40)) {
            s.fail();
            return;
          }
          let l = gen_57.name("valid");
          s.subschema({
            keyword: "not",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          }, l), s.failResult(l, () => s.reset(), () => s.error());
        },
        error: {
          message: "must NOT be valid"
        }
      };
    e.default = r;
  }),
  ji = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Oe().validateUnion,
      error: {
        message: "must match a schema in anyOf"
      }
    };
    e.default = t;
  }),
  Ai = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: !0,
        error: {
          message: "must match exactly one schema in oneOf",
          params: ({
            params: params_9
          }) => t._`{passingSchemas: ${params_9.passing}}`
        },
        code(a) {
          let {
            gen: gen_58,
            schema: schema_41,
            parentSchema: parentSchema_12,
            it: it_40
          } = a;
          if (!Array.isArray(schema_41)) throw Error("ajv implementation error");
          if (it_40.opts.discriminator && parentSchema_12.discriminator) return;
          let d = schema_41,
            m = gen_58.let("valid", !1),
            passing = gen_58.let("passing", null),
            P = gen_58.name("_valid");
          a.setParams({
            passing: passing
          }), gen_58.block(T), a.result(m, () => a.reset(), () => a.error(!0));
          function T() {
            d.forEach((item, y) => {
              let f;
              if ((0, r.alwaysValidSchema)(it_40, item)) gen_58.var(P, !0);else f = a.subschema({
                keyword: "oneOf",
                schemaProp: y,
                compositeRule: !0
              }, P);
              if (y > 0) gen_58.if(t._`${P} && ${m}`).assign(m, !1).assign(passing, t._`[${passing}, ${y}]`).else();
              gen_58.if(P, () => {
                if (gen_58.assign(m, !0), gen_58.assign(passing, y), f) a.mergeEvaluated(f, t.Name);
              });
            });
          }
        }
      };
    e.default = s;
  }),
  Li = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ne(),
      r = {
        keyword: "allOf",
        schemaType: "array",
        code(s) {
          let {
            gen: gen_59,
            schema: schema_42,
            it: it_41
          } = s;
          if (!Array.isArray(schema_42)) throw Error("ajv implementation error");
          let l = gen_59.name("valid");
          schema_42.forEach((item, d) => {
            if ((0, t.alwaysValidSchema)(it_41, item)) return;
            let m = s.subschema({
              keyword: "allOf",
              schemaProp: d
            }, l);
            s.ok(l), s.mergeEvaluated(m);
          });
        }
      };
    e.default = r;
  }),
  Ui = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = {
        keyword: "if",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        error: {
          message: ({
            params: params_10
          }) => t.str`must match "${params_10.ifClause}" schema`,
          params: ({
            params: params_11
          }) => t._`{failingKeyword: ${params_11.ifClause}}`
        },
        code(n) {
          let {
            gen: gen_60,
            parentSchema: parentSchema_13,
            it: it_42
          } = n;
          if (parentSchema_13.then === void 0 && parentSchema_13.else === void 0) (0, r.checkStrictMode)(it_42, '"if" without "then" and "else" is ignored');
          let d = a(it_42, "then"),
            m = a(it_42, "else");
          if (!d && !m) return;
          let _ = gen_60.let("valid", !0),
            P = gen_60.name("_valid");
          if (T(), n.reset(), d && m) {
            let ifClause = gen_60.let("ifClause");
            n.setParams({
              ifClause: ifClause
            }), gen_60.if(P, v("then", ifClause), v("else", ifClause));
          } else if (d) gen_60.if(P, v("then"));else gen_60.if((0, t.not)(P), v("else"));
          n.pass(_, () => n.error(!0));
          function T() {
            let y = n.subschema({
              keyword: "if",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1
            }, P);
            n.mergeEvaluated(y);
          }
          function v(y, f) {
            return () => {
              let h = n.subschema({
                keyword: y
              }, P);
              if (gen_60.assign(_, P), n.mergeValidEvaluated(h, _), f) gen_60.assign(f, t._`${y}`);else n.setParams({
                ifClause: y
              });
            };
          }
        }
      };
    function a(n, i) {
      let l = n.schema[i];
      return l !== void 0 && !(0, r.alwaysValidSchema)(n, l);
    }
    e.default = s;
  }),
  Di = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ne(),
      r = {
        keyword: ["then", "else"],
        schemaType: ["object", "boolean"],
        code({
          keyword: keyword_24,
          parentSchema: parentSchema_14,
          it: it_43
        }) {
          if (parentSchema_14.if === void 0) (0, t.checkStrictMode)(it_43, `"${keyword_24}" without "if" is ignored`);
        }
      };
    e.default = r;
  }),
  Ua = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ja(),
      r = Ci(),
      s = Aa(),
      a = ki(),
      n = Ii(),
      i = is(),
      l = qi(),
      c = La(),
      d = Oi(),
      m = Ni(),
      _ = Mi(),
      P = ji(),
      T = Ai(),
      v = Li(),
      y = Ui(),
      f = Di();
    function h(g = !1) {
      let p = [_.default, P.default, T.default, v.default, y.default, f.default, l.default, c.default, i.default, d.default, m.default];
      if (g) p.push(r.default, a.default);else p.push(t.default, s.default);
      return p.push(n.default), p;
    }
    e.default = h;
  }),
  Vi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = {
        keyword: "format",
        type: ["number", "string"],
        schemaType: "string",
        $data: !0,
        error: {
          message: ({
            schemaCode: schemaCode_29
          }) => t.str`must match format "${schemaCode_29}"`,
          params: ({
            schemaCode: schemaCode_30
          }) => t._`{format: ${schemaCode_30}}`
        },
        code(s, a) {
          let {
              gen: gen_61,
              data: data_35,
              $data: $data_9,
              schema: c,
              schemaCode: schemaCode_31,
              it: it_44
            } = s,
            {
              opts: opts_25,
              errSchemaPath: errSchemaPath_7,
              schemaEnv: schemaEnv_9,
              self: self_8
            } = it_44;
          if (!opts_25.validateFormats) return;
          if ($data_9) y();else f();
          function y() {
            let h = gen_61.scopeValue("formats", {
                ref: self_8.formats,
                code: opts_25.code.formats
              }),
              g = gen_61.const("fDef", t._`${h}[${schemaCode_31}]`),
              p = gen_61.let("fType"),
              R = gen_61.let("format");
            gen_61.if(t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => gen_61.assign(p, t._`${g}.type || "string"`).assign(R, t._`${g}.validate`), () => gen_61.assign(p, t._`"string"`).assign(R, g)), s.fail$data((0, t.or)(k(), b()));
            function k() {
              if (opts_25.strictSchema === !1) return t.nil;
              return t._`${schemaCode_31} && !${R}`;
            }
            function b() {
              let S = schemaEnv_9.$async ? t._`(${g}.async ? await ${R}(${data_35}) : ${R}(${data_35}))` : t._`${R}(${data_35})`,
                I = t._`(typeof ${R} == "function" ? ${S} : ${R}.test(${data_35}))`;
              return t._`${R} && ${R} !== true && ${p} === ${a} && !${I}`;
            }
          }
          function f() {
            let h = self_8.formats[c];
            if (!h) {
              k();
              return;
            }
            if (h === !0) return;
            let [g, p, R] = b(h);
            if (g === a) s.pass(S());
            function k() {
              if (opts_25.strictSchema === !1) {
                self_8.logger.warn(I());
                return;
              }
              throw Error(I());
              function I() {
                return `unknown format "${c}" ignored in schema at path "${errSchemaPath_7}"`;
              }
            }
            function b(ref_6) {
              let code_2 = ref_6 instanceof RegExp ? (0, t.regexpCode)(ref_6) : opts_25.code.formats ? t._`${opts_25.code.formats}${(0, t.getProperty)(c)}` : void 0,
                K = gen_61.scopeValue("formats", {
                  key: c,
                  ref: ref_6,
                  code: code_2
                });
              if (typeof ref_6 == "object" && !(ref_6 instanceof RegExp)) return [ref_6.type || "string", ref_6.validate, t._`${K}.validate`];
              return ["string", ref_6, K];
            }
            function S() {
              if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
                if (!schemaEnv_9.$async) throw Error("async format in sync schema");
                return t._`await ${R}(${data_35})`;
              }
              return typeof p == "function" ? t._`${R}(${data_35})` : t._`${R}.test(${data_35})`;
            }
          }
        }
      };
    e.default = r;
  }),
  Da = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = [Vi().default];
    e.default = t;
  }),
  Va = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"], e.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
  }),
  Fi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Na(),
      r = Ma(),
      s = Ua(),
      a = Da(),
      n = Va(),
      i = [t.default, r.default, (0, s.default)(), a.default, n.metadataVocabulary, n.contentVocabulary];
    e.default = i;
  }),
  Hi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.DiscrError = void 0;
    var t;
    (function (r) {
      r.Tag = "tag", r.Mapping = "mapping";
    })(t || (e.DiscrError = t = {}));
  }),
  Fa = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = Hi(),
      s = qr(),
      a = Yt(),
      n = ne(),
      i = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: {
          message: ({
            params: {
              discrError: discrError,
              tagName: tagName
            }
          }) => discrError === r.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
          params: ({
            params: {
              discrError: discrError_2,
              tag: tag,
              tagName: tagName_2
            }
          }) => t._`{error: ${discrError_2}, tag: ${tagName_2}, tagValue: ${tag}}`
        },
        code(l) {
          let {
              gen: gen_62,
              data: data_36,
              schema: schema_43,
              parentSchema: parentSchema_15,
              it: it_45
            } = l,
            {
              oneOf: oneOf
            } = parentSchema_15;
          if (!it_45.opts.discriminator) throw Error("discriminator: requires discriminator option");
          let v = schema_43.propertyName;
          if (typeof v != "string") throw Error("discriminator: requires propertyName");
          if (schema_43.mapping) throw Error("discriminator: mapping is not supported");
          if (!oneOf) throw Error("discriminator: requires oneOf keyword");
          let y = gen_62.let("valid", !1),
            tag_2 = gen_62.const("tag", t._`${data_36}${(0, t.getProperty)(v)}`);
          gen_62.if(t._`typeof ${tag_2} == "string"`, () => h(), () => l.error(!1, {
            discrError: r.DiscrError.Tag,
            tag: tag_2,
            tagName: v
          })), l.ok(y);
          function h() {
            let R = p();
            gen_62.if(!1);
            for (let k in R) gen_62.elseIf(t._`${tag_2} === ${k}`), gen_62.assign(y, g(R[k]));
            gen_62.else(), l.error(!1, {
              discrError: r.DiscrError.Mapping,
              tag: tag_2,
              tagName: v
            }), gen_62.endIf();
          }
          function g(schemaProp_4) {
            let k = gen_62.name("valid"),
              b = l.subschema({
                keyword: "oneOf",
                schemaProp: schemaProp_4
              }, k);
            return l.mergeEvaluated(b, t.Name), k;
          }
          function p() {
            var R;
            let k = {},
              b = I(parentSchema_15),
              S = !0;
            for (let j = 0; j < oneOf.length; j++) {
              let H = oneOf[j];
              if ((H === null || H === void 0 ? void 0 : H.$ref) && !(0, n.schemaHasRulesButRef)(H, it_45.self.RULES)) {
                let $ref_2 = H.$ref;
                if (H = s.resolveRef.call(it_45.self, it_45.schemaEnv.root, it_45.baseId, $ref_2), H instanceof s.SchemaEnv) H = H.schema;
                if (H === void 0) throw new a.default(it_45.opts.uriResolver, it_45.baseId, $ref_2);
              }
              let W = (R = H === null || H === void 0 ? void 0 : H.properties) === null || R === void 0 ? void 0 : R[v];
              if (typeof W != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
              S = S && (b || I(H)), U(W, j);
            }
            if (!S) throw Error(`discriminator: "${v}" must be required`);
            return k;
            function I({
              required: required
            }) {
              return Array.isArray(required) && required.includes(v);
            }
            function U(j, H) {
              if (j.const) K(j.const, H);else if (j.enum) for (let W of j.enum) K(W, H);else throw Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
            }
            function K(j, H) {
              if (typeof j != "string" || j in k) throw Error(`discriminator: "${v}" values must be unique strings`);
              k[j] = H;
            }
          }
        }
      };
    e.default = i;
  }),
  xi = J((e, t) => {
    t.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: {
            $ref: "#"
          }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [{
            $ref: "#/definitions/nonNegativeInteger"
          }, {
            default: 0
          }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: {
            type: "string"
          },
          uniqueItems: !0,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: !0,
        readOnly: {
          type: "boolean",
          default: !1
        },
        examples: {
          type: "array",
          items: !0
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: {
          $ref: "#/definitions/nonNegativeInteger"
        },
        minLength: {
          $ref: "#/definitions/nonNegativeIntegerDefault0"
        },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: {
          $ref: "#"
        },
        items: {
          anyOf: [{
            $ref: "#"
          }, {
            $ref: "#/definitions/schemaArray"
          }],
          default: !0
        },
        maxItems: {
          $ref: "#/definitions/nonNegativeInteger"
        },
        minItems: {
          $ref: "#/definitions/nonNegativeIntegerDefault0"
        },
        uniqueItems: {
          type: "boolean",
          default: !1
        },
        contains: {
          $ref: "#"
        },
        maxProperties: {
          $ref: "#/definitions/nonNegativeInteger"
        },
        minProperties: {
          $ref: "#/definitions/nonNegativeIntegerDefault0"
        },
        required: {
          $ref: "#/definitions/stringArray"
        },
        additionalProperties: {
          $ref: "#"
        },
        definitions: {
          type: "object",
          additionalProperties: {
            $ref: "#"
          },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: {
            $ref: "#"
          },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: {
            $ref: "#"
          },
          propertyNames: {
            format: "regex"
          },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{
              $ref: "#"
            }, {
              $ref: "#/definitions/stringArray"
            }]
          }
        },
        propertyNames: {
          $ref: "#"
        },
        const: !0,
        enum: {
          type: "array",
          items: !0,
          minItems: 1,
          uniqueItems: !0
        },
        type: {
          anyOf: [{
            $ref: "#/definitions/simpleTypes"
          }, {
            type: "array",
            items: {
              $ref: "#/definitions/simpleTypes"
            },
            minItems: 1,
            uniqueItems: !0
          }]
        },
        format: {
          type: "string"
        },
        contentMediaType: {
          type: "string"
        },
        contentEncoding: {
          type: "string"
        },
        if: {
          $ref: "#"
        },
        then: {
          $ref: "#"
        },
        else: {
          $ref: "#"
        },
        allOf: {
          $ref: "#/definitions/schemaArray"
        },
        anyOf: {
          $ref: "#/definitions/schemaArray"
        },
        oneOf: {
          $ref: "#/definitions/schemaArray"
        },
        not: {
          $ref: "#"
        }
      },
      default: !0
    };
  }),
  Ha = J((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
    let r = Oa(),
      s = Fi(),
      a = Fa(),
      n = xi(),
      i = ["/properties"],
      l = "http://json-schema.org/draft-07/schema";
    var c = class extends r.default {
      _addVocabularies() {
        if (super._addVocabularies(), s.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        let T = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
        this.addMetaSchema(T, l, !1), this.refs["http://json-schema.org/schema"] = l;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
      }
    };
    e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = c;
    var d = Wt();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return d.KeywordCxt;
      }
    });
    var m = te();
    Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return m._;
      }
    }), Object.defineProperty(e, "str", {
      enumerable: !0,
      get: function () {
        return m.str;
      }
    }), Object.defineProperty(e, "stringify", {
      enumerable: !0,
      get: function () {
        return m.stringify;
      }
    }), Object.defineProperty(e, "nil", {
      enumerable: !0,
      get: function () {
        return m.nil;
      }
    }), Object.defineProperty(e, "Name", {
      enumerable: !0,
      get: function () {
        return m.Name;
      }
    }), Object.defineProperty(e, "CodeGen", {
      enumerable: !0,
      get: function () {
        return m.CodeGen;
      }
    });
    var _ = Ir();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
    var P = Yt();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return P.default;
      }
    });
  }),
  xa = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dynamicAnchor = void 0;
    let t = te(),
      r = qe(),
      s = qr(),
      a = os(),
      n = {
        keyword: "$dynamicAnchor",
        schemaType: "string",
        code: c => i(c, c.schema)
      };
    function i(c, d) {
      let {
        gen: gen_63,
        it: it_46
      } = c;
      it_46.schemaEnv.root.dynamicAnchors[d] = !0;
      let P = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`,
        T = it_46.errSchemaPath === "#" ? it_46.validateName : l(c);
      gen_63.if(t._`!${P}`, () => gen_63.assign(P, T));
    }
    e.dynamicAnchor = i;
    function l(c) {
      let {
          schemaEnv: schemaEnv_10,
          schema: schema_44,
          self: self_9
        } = c.it,
        {
          root: root_4,
          baseId: baseId_6,
          localRefs: localRefs_2,
          meta: meta_4
        } = schemaEnv_10.root,
        {
          schemaId: schemaId_10
        } = self_9.opts,
        h = new s.SchemaEnv({
          schema: schema_44,
          schemaId: schemaId_10,
          root: root_4,
          baseId: baseId_6,
          localRefs: localRefs_2,
          meta: meta_4
        });
      return s.compileSchema.call(self_9, h), (0, a.getValidate)(c, h);
    }
    e.default = n;
  }),
  Ka = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dynamicRef = void 0;
    let t = te(),
      r = qe(),
      s = os(),
      a = {
        keyword: "$dynamicRef",
        schemaType: "string",
        code: i => n(i, i.schema)
      };
    function n(i, l) {
      let {
        gen: gen_64,
        keyword: keyword_25,
        it: it_47
      } = i;
      if (l[0] !== "#") throw Error(`"${keyword_25}" only supports hash fragment reference`);
      let _ = l.slice(1);
      if (it_47.allErrors) P();else {
        let v = gen_64.let("valid", !1);
        P(v), i.ok(v);
      }
      function P(v) {
        if (it_47.schemaEnv.root.dynamicAnchors[_]) {
          let y = gen_64.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
          gen_64.if(y, T(y, v), T(it_47.validateName, v));
        } else T(it_47.validateName, v)();
      }
      function T(v, y) {
        return y ? () => gen_64.block(() => {
          (0, s.callRef)(i, v), gen_64.let(y, !0);
        }) : () => (0, s.callRef)(i, v);
      }
    }
    e.dynamicRef = n, e.default = a;
  }),
  Ki = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = xa(),
      r = ne(),
      s = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code(a) {
          if (a.schema) (0, t.dynamicAnchor)(a, "");else (0, r.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
        }
      };
    e.default = s;
  }),
  Ji = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ka(),
      r = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: s => (0, t.dynamicRef)(s, s.schema)
      };
    e.default = r;
  }),
  Gi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = xa(),
      r = Ka(),
      s = Ki(),
      a = Ji(),
      n = [t.default, r.default, s.default, a.default];
    e.default = n;
  }),
  Wi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = is(),
      r = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: t.error,
        code: s => (0, t.validatePropertyDeps)(s)
      };
    e.default = r;
  }),
  Yi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = is(),
      r = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: s => (0, t.validateSchemaDeps)(s)
      };
    e.default = r;
  }),
  Xi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ne(),
      r = {
        keyword: ["maxContains", "minContains"],
        type: "array",
        schemaType: "number",
        code({
          keyword: keyword_26,
          parentSchema: parentSchema_16,
          it: it_48
        }) {
          if (parentSchema_16.contains === void 0) (0, t.checkStrictMode)(it_48, `"${keyword_26}" without "contains" is ignored`);
        }
      };
    e.default = r;
  }),
  Zi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Wi(),
      r = Yi(),
      s = Xi(),
      a = [t.default, r.default, s.default];
    e.default = a;
  }),
  Qi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = qe(),
      a = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: ["boolean", "object"],
        trackErrors: !0,
        error: {
          message: "must NOT have unevaluated properties",
          params: ({
            params: params_12
          }) => t._`{unevaluatedProperty: ${params_12.unevaluatedProperty}}`
        },
        code(n) {
          let {
            gen: gen_65,
            schema: schema_45,
            data: data_37,
            errsCount: errsCount_3,
            it: it_49
          } = n;
          if (!errsCount_3) throw Error("ajv implementation error");
          let {
            allErrors: allErrors_7,
            props: props_4
          } = it_49;
          if (props_4 instanceof t.Name) gen_65.if(t._`${props_4} !== true`, () => gen_65.forIn("key", data_37, f => gen_65.if(v(props_4, f), () => T(f))));else if (props_4 !== !0) gen_65.forIn("key", data_37, f => props_4 === void 0 ? T(f) : gen_65.if(y(props_4, f), () => T(f)));
          it_49.props = !0, n.ok(t._`${errsCount_3} === ${s.default.errors}`);
          function T(f) {
            if (schema_45 === !1) {
              if (n.setParams({
                unevaluatedProperty: f
              }), n.error(), !allErrors_7) gen_65.break();
              return;
            }
            if (!(0, r.alwaysValidSchema)(it_49, schema_45)) {
              let h = gen_65.name("valid");
              if (n.subschema({
                keyword: "unevaluatedProperties",
                dataProp: f,
                dataPropType: r.Type.Str
              }, h), !allErrors_7) gen_65.if((0, t.not)(h), () => gen_65.break());
            }
          }
          function v(f, h) {
            return t._`!${f} || !${f}[${h}]`;
          }
          function y(f, h) {
            let g = [];
            for (let p in f) if (f[p] === !0) g.push(t._`${h} !== ${p}`);
            return (0, t.and)(...g);
          }
        }
      };
    e.default = a;
  }),
  ec = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = {
        keyword: "unevaluatedItems",
        type: "array",
        schemaType: ["boolean", "object"],
        error: {
          message: ({
            params: {
              len: len_5
            }
          }) => t.str`must NOT have more than ${len_5} items`,
          params: ({
            params: {
              len: len_6
            }
          }) => t._`{limit: ${len_6}}`
        },
        code(a) {
          let {
              gen: gen_66,
              schema: schema_46,
              data: data_38,
              it: it_50
            } = a,
            len_7 = it_50.items || 0;
          if (len_7 === !0) return;
          let m = gen_66.const("len", t._`${data_38}.length`);
          if (schema_46 === !1) a.setParams({
            len: len_7
          }), a.fail(t._`${m} > ${len_7}`);else if (typeof schema_46 == "object" && !(0, r.alwaysValidSchema)(it_50, schema_46)) {
            let P = gen_66.var("valid", t._`${m} <= ${len_7}`);
            gen_66.if((0, t.not)(P), () => _(P, len_7)), a.ok(P);
          }
          it_50.items = !0;
          function _(P, T) {
            gen_66.forRange("i", T, m, dataProp_7 => {
              if (a.subschema({
                keyword: "unevaluatedItems",
                dataProp: dataProp_7,
                dataPropType: r.Type.Num
              }, P), !it_50.allErrors) gen_66.if((0, t.not)(P), () => gen_66.break());
            });
          }
        }
      };
    e.default = s;
  }),
  tc = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Qi(),
      r = ec(),
      s = [t.default, r.default];
    e.default = s;
  }),
  rc = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Na(),
      r = Ma(),
      s = Ua(),
      a = Gi(),
      n = Zi(),
      i = tc(),
      l = Da(),
      c = Va(),
      d = [a.default, t.default, r.default, (0, s.default)(!0), l.default, c.metadataVocabulary, c.contentVocabulary, n.default, i.default];
    e.default = d;
  }),
  sc = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/schema",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/core": !0,
        "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
        "https://json-schema.org/draft/2020-12/vocab/validation": !0,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
        "https://json-schema.org/draft/2020-12/vocab/content": !0
      },
      $dynamicAnchor: "meta",
      title: "Core and Validation specifications meta-schema",
      allOf: [{
        $ref: "meta/core"
      }, {
        $ref: "meta/applicator"
      }, {
        $ref: "meta/unevaluated"
      }, {
        $ref: "meta/validation"
      }, {
        $ref: "meta/meta-data"
      }, {
        $ref: "meta/format-annotation"
      }, {
        $ref: "meta/content"
      }],
      type: ["object", "boolean"],
      $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
      properties: {
        definitions: {
          $comment: '"definitions" has been replaced by "$defs".',
          type: "object",
          additionalProperties: {
            $dynamicRef: "#meta"
          },
          deprecated: !0,
          default: {}
        },
        dependencies: {
          $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
          type: "object",
          additionalProperties: {
            anyOf: [{
              $dynamicRef: "#meta"
            }, {
              $ref: "meta/validation#/$defs/stringArray"
            }]
          },
          deprecated: !0,
          default: {}
        },
        $recursiveAnchor: {
          $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
          $ref: "meta/core#/$defs/anchorString",
          deprecated: !0
        },
        $recursiveRef: {
          $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
          $ref: "meta/core#/$defs/uriReferenceString",
          deprecated: !0
        }
      }
    };
  }),
  ac = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/applicator",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/applicator": !0
      },
      $dynamicAnchor: "meta",
      title: "Applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        prefixItems: {
          $ref: "#/$defs/schemaArray"
        },
        items: {
          $dynamicRef: "#meta"
        },
        contains: {
          $dynamicRef: "#meta"
        },
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        properties: {
          type: "object",
          additionalProperties: {
            $dynamicRef: "#meta"
          },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: {
            $dynamicRef: "#meta"
          },
          propertyNames: {
            format: "regex"
          },
          default: {}
        },
        dependentSchemas: {
          type: "object",
          additionalProperties: {
            $dynamicRef: "#meta"
          },
          default: {}
        },
        propertyNames: {
          $dynamicRef: "#meta"
        },
        if: {
          $dynamicRef: "#meta"
        },
        then: {
          $dynamicRef: "#meta"
        },
        else: {
          $dynamicRef: "#meta"
        },
        allOf: {
          $ref: "#/$defs/schemaArray"
        },
        anyOf: {
          $ref: "#/$defs/schemaArray"
        },
        oneOf: {
          $ref: "#/$defs/schemaArray"
        },
        not: {
          $dynamicRef: "#meta"
        }
      },
      $defs: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: {
            $dynamicRef: "#meta"
          }
        }
      }
    };
  }),
  oc = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
      },
      $dynamicAnchor: "meta",
      title: "Unevaluated applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        unevaluatedItems: {
          $dynamicRef: "#meta"
        },
        unevaluatedProperties: {
          $dynamicRef: "#meta"
        }
      }
    };
  }),
  nc = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/content",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/content": !0
      },
      $dynamicAnchor: "meta",
      title: "Content vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        contentEncoding: {
          type: "string"
        },
        contentMediaType: {
          type: "string"
        },
        contentSchema: {
          $dynamicRef: "#meta"
        }
      }
    };
  }),
  ic = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/core",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/core": !0
      },
      $dynamicAnchor: "meta",
      title: "Core vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        $id: {
          $ref: "#/$defs/uriReferenceString",
          $comment: "Non-empty fragments not allowed.",
          pattern: "^[^#]*#?$"
        },
        $schema: {
          $ref: "#/$defs/uriString"
        },
        $ref: {
          $ref: "#/$defs/uriReferenceString"
        },
        $anchor: {
          $ref: "#/$defs/anchorString"
        },
        $dynamicRef: {
          $ref: "#/$defs/uriReferenceString"
        },
        $dynamicAnchor: {
          $ref: "#/$defs/anchorString"
        },
        $vocabulary: {
          type: "object",
          propertyNames: {
            $ref: "#/$defs/uriString"
          },
          additionalProperties: {
            type: "boolean"
          }
        },
        $comment: {
          type: "string"
        },
        $defs: {
          type: "object",
          additionalProperties: {
            $dynamicRef: "#meta"
          }
        }
      },
      $defs: {
        anchorString: {
          type: "string",
          pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        uriString: {
          type: "string",
          format: "uri"
        },
        uriReferenceString: {
          type: "string",
          format: "uri-reference"
        }
      }
    };
  }),
  cc = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
      },
      $dynamicAnchor: "meta",
      title: "Format vocabulary meta-schema for annotation results",
      type: ["object", "boolean"],
      properties: {
        format: {
          type: "string"
        }
      }
    };
  }),
  lc = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
      },
      $dynamicAnchor: "meta",
      title: "Meta-data vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: !0,
        deprecated: {
          type: "boolean",
          default: !1
        },
        readOnly: {
          type: "boolean",
          default: !1
        },
        writeOnly: {
          type: "boolean",
          default: !1
        },
        examples: {
          type: "array",
          items: !0
        }
      }
    };
  }),
  uc = J((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/validation",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/validation": !0
      },
      $dynamicAnchor: "meta",
      title: "Validation vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        type: {
          anyOf: [{
            $ref: "#/$defs/simpleTypes"
          }, {
            type: "array",
            items: {
              $ref: "#/$defs/simpleTypes"
            },
            minItems: 1,
            uniqueItems: !0
          }]
        },
        const: !0,
        enum: {
          type: "array",
          items: !0
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: {
          $ref: "#/$defs/nonNegativeInteger"
        },
        minLength: {
          $ref: "#/$defs/nonNegativeIntegerDefault0"
        },
        pattern: {
          type: "string",
          format: "regex"
        },
        maxItems: {
          $ref: "#/$defs/nonNegativeInteger"
        },
        minItems: {
          $ref: "#/$defs/nonNegativeIntegerDefault0"
        },
        uniqueItems: {
          type: "boolean",
          default: !1
        },
        maxContains: {
          $ref: "#/$defs/nonNegativeInteger"
        },
        minContains: {
          $ref: "#/$defs/nonNegativeInteger",
          default: 1
        },
        maxProperties: {
          $ref: "#/$defs/nonNegativeInteger"
        },
        minProperties: {
          $ref: "#/$defs/nonNegativeIntegerDefault0"
        },
        required: {
          $ref: "#/$defs/stringArray"
        },
        dependentRequired: {
          type: "object",
          additionalProperties: {
            $ref: "#/$defs/stringArray"
          }
        }
      },
      $defs: {
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          $ref: "#/$defs/nonNegativeInteger",
          default: 0
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: {
            type: "string"
          },
          uniqueItems: !0,
          default: []
        }
      }
    };
  }),
  dc = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = sc(),
      r = ac(),
      s = oc(),
      a = nc(),
      n = ic(),
      i = cc(),
      l = lc(),
      c = uc(),
      d = ["/properties"];
    function m(_) {
      return [t, r, s, a, n, P(this, i), l, P(this, c)].forEach(item => this.addMetaSchema(item, void 0, !1)), this;
      function P(T, v) {
        return _ ? T.$dataMetaSchema(v, d) : v;
      }
    }
    e.default = m;
  }),
  hc = J((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
    let r = Oa(),
      s = rc(),
      a = Fa(),
      n = dc(),
      i = "https://json-schema.org/draft/2020-12/schema";
    var l = class extends r.default {
      constructor(P = {}) {
        super({
          ...P,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        if (super._addVocabularies(), s.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        let {
          $data: $data_10,
          meta: meta_5
        } = this.opts;
        if (!meta_5) return;
        n.default.call(this, $data_10), this.refs["http://json-schema.org/schema"] = i;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    };
    e.Ajv2020 = l, t.exports = e = l, t.exports.Ajv2020 = l, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = l;
    var c = Wt();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return c.KeywordCxt;
      }
    });
    var d = te();
    Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return d._;
      }
    }), Object.defineProperty(e, "str", {
      enumerable: !0,
      get: function () {
        return d.str;
      }
    }), Object.defineProperty(e, "stringify", {
      enumerable: !0,
      get: function () {
        return d.stringify;
      }
    }), Object.defineProperty(e, "nil", {
      enumerable: !0,
      get: function () {
        return d.nil;
      }
    }), Object.defineProperty(e, "Name", {
      enumerable: !0,
      get: function () {
        return d.Name;
      }
    }), Object.defineProperty(e, "CodeGen", {
      enumerable: !0,
      get: function () {
        return d.CodeGen;
      }
    });
    var m = Ir();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return m.default;
      }
    });
    var _ = Yt();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
  }),
  mc = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(validate, compare) {
      return {
        validate: validate,
        compare: compare
      };
    }
    e.fullFormats = {
      date: t(n, i),
      time: t(c(!0), d),
      "date-time": t(P(!0), T),
      "iso-time": t(c(), m),
      "iso-date-time": t(P(), v),
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: uri_2,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: regex,
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      byte: byte,
      int32: {
        type: "number",
        validate: validate_2
      },
      int64: {
        type: "number",
        validate: validate_3
      },
      float: {
        type: "number",
        validate: validate_4
      },
      double: {
        type: "number",
        validate: validate_4
      },
      password: !0,
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, T),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, v),
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function r(j) {
      return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
    }
    let s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
      a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(j) {
      let H = s.exec(j);
      if (!H) return !1;
      let W = +H[1],
        B = +H[2],
        se = +H[3];
      return B >= 1 && B <= 12 && se >= 1 && se <= (B === 2 && r(W) ? 29 : a[B]);
    }
    function i(j, H) {
      if (!(j && H)) return;
      if (j > H) return 1;
      if (j < H) return -1;
      return 0;
    }
    let l = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(j) {
      return function (W) {
        let B = l.exec(W);
        if (!B) return !1;
        let se = +B[1],
          le = +B[2],
          ie = +B[3],
          me = B[4],
          oe = B[5] === "-" ? -1 : 1,
          N = +(B[6] || 0),
          D = +(B[7] || 0);
        if (N > 23 || D > 59 || j && !me) return !1;
        if (se <= 23 && le <= 59 && ie < 60) return !0;
        let x = le - D * oe,
          w = se - N * oe - (x < 0 ? 1 : 0);
        return (w === 23 || w === -1) && (x === 59 || x === -1) && ie < 61;
      };
    }
    function d(j, H) {
      if (!(j && H)) return;
      let W = new Date("2020-01-01T" + j).valueOf(),
        B = new Date("2020-01-01T" + H).valueOf();
      if (!(W && B)) return;
      return W - B;
    }
    function m(j, H) {
      if (!(j && H)) return;
      let W = l.exec(j),
        B = l.exec(H);
      if (!(W && B)) return;
      if (j = W[1] + W[2] + W[3], H = B[1] + B[2] + B[3], j > H) return 1;
      if (j < H) return -1;
      return 0;
    }
    let _ = /t|\s/i;
    function P(j) {
      let H = c(j);
      return function (B) {
        let se = B.split(_);
        return se.length === 2 && n(se[0]) && H(se[1]);
      };
    }
    function T(j, H) {
      if (!(j && H)) return;
      let W = new Date(j).valueOf(),
        B = new Date(H).valueOf();
      if (!(W && B)) return;
      return W - B;
    }
    function v(j, H) {
      if (!(j && H)) return;
      let [W, B] = j.split(_),
        [se, le] = H.split(_),
        ie = i(W, se);
      if (ie === void 0) return;
      return ie || d(B, le);
    }
    let y = /\/|:/,
      f = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri_2(j) {
      return y.test(j) && f.test(j);
    }
    let g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(j) {
      return g.lastIndex = 0, g.test(j);
    }
    let R = -2147483648,
      k = 2147483647;
    function validate_2(j) {
      return Number.isInteger(j) && j <= k && j >= R;
    }
    function validate_3(j) {
      return Number.isInteger(j);
    }
    function validate_4() {
      return !0;
    }
    let U = /[^\\]\\Z/;
    function regex(j) {
      if (U.test(j)) return !1;
      try {
        return new RegExp(j), !0;
      } catch (error) {
        return !1;
      }
    }
  }),
  fc = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.formatLimitDefinition = void 0;
    let t = Ha(),
      r = te(),
      operators_2 = r.operators,
      a = {
        formatMaximum: {
          okStr: "<=",
          ok: operators_2.LTE,
          fail: operators_2.GT
        },
        formatMinimum: {
          okStr: ">=",
          ok: operators_2.GTE,
          fail: operators_2.LT
        },
        formatExclusiveMaximum: {
          okStr: "<",
          ok: operators_2.LT,
          fail: operators_2.GTE
        },
        formatExclusiveMinimum: {
          okStr: ">",
          ok: operators_2.GT,
          fail: operators_2.LTE
        }
      },
      error_2 = {
        message: ({
          keyword: keyword_27,
          schemaCode: schemaCode_32
        }) => r.str`should be ${a[keyword_27].okStr} ${schemaCode_32}`,
        params: ({
          keyword: keyword_28,
          schemaCode: schemaCode_33
        }) => r._`{comparison: ${a[keyword_28].okStr}, limit: ${schemaCode_33}}`
      };
    e.formatLimitDefinition = {
      keyword: Object.keys(a),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: error_2,
      code(l) {
        let {
            gen: gen_67,
            data: data_39,
            schemaCode: schemaCode_34,
            keyword: keyword_29,
            it: it_51
          } = l,
          {
            opts: opts_26,
            self: self_10
          } = it_51;
        if (!opts_26.validateFormats) return;
        let y = new t.KeywordCxt(it_51, self_10.RULES.all.format.definition, "format");
        if (y.$data) f();else h();
        function f() {
          let p = gen_67.scopeValue("formats", {
              ref: self_10.formats,
              code: opts_26.code.formats
            }),
            R = gen_67.const("fmt", r._`${p}[${y.schemaCode}]`);
          l.fail$data((0, r.or)(r._`typeof ${R} != "object"`, r._`${R} instanceof RegExp`, r._`typeof ${R}.compare != "function"`, g(R)));
        }
        function h() {
          let p = y.schema,
            ref_7 = self_10.formats[p];
          if (!ref_7 || ref_7 === !0) return;
          if (typeof ref_7 != "object" || ref_7 instanceof RegExp || typeof ref_7.compare != "function") throw Error(`"${keyword_29}": format "${p}" does not define "compare" function`);
          let k = gen_67.scopeValue("formats", {
            key: p,
            ref: ref_7,
            code: opts_26.code.formats ? r._`${opts_26.code.formats}${(0, r.getProperty)(p)}` : void 0
          });
          l.fail$data(g(k));
        }
        function g(p) {
          return r._`${p}.compare(${data_39}, ${schemaCode_34}) ${a[keyword_29].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    let i = l => (l.addKeyword(e.formatLimitDefinition), l);
    e.default = i;
  }),
  pc = J((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let r = mc(),
      s = fc(),
      a = te(),
      n = new a.Name("fullFormats"),
      i = new a.Name("fastFormats"),
      l = (d, m = {
        keywords: !0
      }) => {
        if (Array.isArray(m)) return c(d, m, r.fullFormats, n), d;
        let [_, P] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
        if (c(d, m.formats || r.formatNames, _, P), m.keywords) (0, s.default)(d);
        return d;
      };
    l.get = (d, m = "full") => {
      let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!_) throw Error(`Unknown format "${d}"`);
      return _;
    };
    function c(d, m, _, P) {
      var T, v;
      (T = (v = d.opts.code).formats) !== null && T !== void 0 || (v.formats = a._`require("ajv-formats/dist/formats").${P}`);
      for (let y of m) d.addFormat(y, _[y]);
    }
    t.exports = e = l, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = l;
  }),
  Sc = Ha(),
  gc = hc(),
  _c = Sr(pc(), 1),
  vc = new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]),
  yc = _c.default;
function bc() {
  let e = new gc.Ajv2020({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return yc(e), e;
}
var tEt = class {
    _ajv;
    _userAjv;
    constructor(e) {
      this._userAjv = e !== void 0, this._ajv = e;
    }
    get ajv() {
      return this._ajv ??= bc();
    }
    getValidator(e) {
      if (!this._userAjv && "$schema" in e && typeof e.$schema === "string" && !vc.has(e.$schema.replace(/#$/, ""))) {
        let s = e.$schema.slice(0, 200);
        throw Error(`JSON Schema declares an unsupported dialect ("$schema": "${s}"). The default validator supports JSON Schema 2020-12 only; pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.`);
      }
      let ajv = this.ajv,
        r = "$id" in e && typeof e.$id === "string" ? ajv.getSchema(e.$id) ?? ajv.compile(e) : ajv.compile(e);
      return data_40 => r(data_40) ? {
        valid: !0,
        data: data_40,
        errorMessage: void 0
      } : {
        valid: !1,
        data: void 0,
        errorMessage: ajv.errorsText(r.errors)
      };
    }
  },
  Ajv = Sc.Ajv;
var Ja = !1;
var Xt = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthClientFlowError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Te(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Te(this, e);
    }
    constructor(e) {
      super(e);
      this.name = new.target.name, et(this, new.target);
    }
  },
  d2e = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.IssuerMismatchError"
      });
    }
    kind;
    expected;
    received;
    constructor(e, t, r) {
      super(`Issuer mismatch in ${e === "metadata" ? "authorization server metadata (RFC 8414 \xA73.3)" : "authorization response (RFC 9207)"}: expected ${JSON.stringify(t)}, received ${JSON.stringify(r)}`);
      this.kind = e, this.expected = t, this.received = r;
    }
  },
  Bxn = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.RegistrationRejectedError"
      });
    }
    status;
    body;
    submittedMetadata;
    constructor(e) {
      super(`Dynamic Client Registration rejected (HTTP ${e.status}): ${e.body}`);
      this.status = e.status, this.body = e.body, this.submittedMetadata = e.submittedMetadata;
    }
  },
  io = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.InsecureTokenEndpointError"
      });
    }
    tokenEndpoint;
    constructor(e) {
      super(`Refusing to send credentials to non-https token endpoint '${e}'. OAuth token requests MUST use TLS (localhost / 127.0.0.1 / ::1 are exempt).`);
      this.tokenEndpoint = e;
    }
  },
  ls = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.AuthorizationServerMismatchError"
      });
    }
    constructor(e, t) {
      super(`Authorization server changed between redirect and callback (redirected to ${JSON.stringify(e)}, callback resolved ${JSON.stringify(t)}); refusing to send authorization_code/code_verifier to a different token endpoint`);
      this.recordedIssuer = e, this.currentIssuer = t;
    }
  },
  Ga = class extends Xt {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.InsufficientScopeError"
      });
    }
    requiredScope;
    resourceMetadataUrl;
    errorDescription;
    constructor(e) {
      super(`Insufficient scope${e.requiredScope ? `: required "${e.requiredScope}"` : ""}`);
      this.requiredScope = e.requiredScope, this.resourceMetadataUrl = e.resourceMetadataUrl, this.errorDescription = e.errorDescription;
    }
  };
function Ba(e, t, r) {
  if (e === void 0) return;
  if (e.issuer === void 0) {
    if (r?.canPersistStamp !== !1) console.warn("[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.");
    return e;
  }
  return co(e.issuer, t) ? e : void 0;
}
function co(e, t) {
  return e === t || e.endsWith("/") && e.slice(0, -1) === t || t.endsWith("/") && t.slice(0, -1) === e;
}
function lo(e) {
  if (e == null) return !1;
  let t = e;
  return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function Rc(e, t, r) {
  let {
    resourceMetadataUrl: resourceMetadataUrl,
    scope: scope
  } = r0e(t.response);
  if ((await Tet(e, {
    serverUrl: t.serverUrl,
    resourceMetadataUrl: resourceMetadataUrl,
    scope: scope,
    fetchFn: t.fetchFn,
    ...r
  })) !== "AUTHORIZED") throw new kT();
}
function uo(e, t) {
  return {
    token: async () => (await e.tokens())?.access_token,
    onUnauthorized: async r => Rc(e, r, t)
  };
}
var kT = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", {
      value: "mcp.UnauthorizedError"
    });
  }
  static [Symbol.hasInstance](e) {
    return Te(this, e);
  }
  static isInstance(e) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Te(this, e);
  }
  constructor(e) {
    super(e ?? "Unauthorized");
    this.name = "UnauthorizedError", et(this, new.target);
  }
};
function jr(e) {
  return e?.authorization_response_iss_parameter_supported === !0;
}
function Ar({
  iss: iss,
  expectedIssuer: expectedIssuer,
  issParameterSupported: issParameterSupported
}) {
  if (expectedIssuer === void 0) return;
  if (iss === void 0) {
    if (issParameterSupported) throw new d2e("authorization_response", expectedIssuer, void 0);
    return;
  }
  if (iss !== expectedIssuer) throw new d2e("authorization_response", expectedIssuer, iss);
}
function us(...e) {
  let t = new Set();
  for (let r of e) {
    if (!r) continue;
    for (let s of r.split(/\s+/)) if (s) t.add(s);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function wc(e, t) {
  if (!e) return !1;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let s of e.split(/\s+/)) if (s && !r.has(s)) return !0;
  return !1;
}
async function ho(authorizationCode, iss_2, r, s, a) {
  if (typeof authorizationCode === "string") return {
    authorizationCode: authorizationCode,
    iss: iss_2
  };
  let iss_3 = authorizationCode.get("iss") ?? void 0,
    authorizationCode_2 = authorizationCode.get("code");
  if (authorizationCode_2) return {
    authorizationCode: authorizationCode_2,
    iss: iss_3
  };
  let l = (await r.discoveryState?.())?.authorizationServerMetadata;
  if (!l) try {
    l = (await Wxn(s, a)).authorizationServerMetadata;
  } catch {
    l = void 0;
  }
  if (!l) throw new kT("Authorization callback failed and the issuer could not be verified");
  Ar({
    iss: iss_3,
    expectedIssuer: l.issuer,
    issParameterSupported: jr(l)
  });
  let c = authorizationCode.get("error");
  if (c) throw new MU(c, authorizationCode.get("error_description") ?? c, authorizationCode.get("error_uri") ?? void 0);
  throw new kT("Authorization callback contained neither `code` nor `error`");
}
function $c(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var ds = "code",
  hs = "S256";
function Ec(e, t) {
  let r = e.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e && e.token_endpoint_auth_method && $c(e.token_endpoint_auth_method) && (t.length === 0 || t.includes(e.token_endpoint_auth_method))) return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function Pc(e, t, r, s) {
  let {
    client_id: client_id,
    client_secret: client_secret
  } = t;
  switch (e) {
    case "client_secret_basic":
      Tc(client_id, client_secret, r);
      return;
    case "client_secret_post":
      zc(client_id, client_secret, s);
      return;
    case "none":
      Cc(client_id, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function Tc(e, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function zc(e, t, r) {
  if (r.set("client_id", e), t) r.set("client_secret", t);
}
function Cc(e, t) {
  t.set("client_id", e);
}
function mo(e) {
  return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1";
}
function kc(e) {
  let t = new URL(String(e));
  if (t.protocol !== "https:" && !mo(t.hostname)) throw new io(t.href);
  return t;
}
function Ic(e) {
  for (let t of e ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (mo(r.hostname)) return "native";
  }
  return "web";
}
function qc(e) {
  let clientMetadata = e.clientMetadata;
  return {
    ...clientMetadata,
    grant_types: clientMetadata.grant_types ?? (e.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]),
    application_type: clientMetadata.application_type ?? Ic(clientMetadata.redirect_uris)
  };
}
async function Wa(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let s = OAuthErrorResponseSchema.parse(JSON.parse(r));
    return MU.fromResponse(s);
  } catch (error) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${error}. Raw body: ${r}`;
    return new MU(s8.ServerError, a);
  }
}
async function Tet(e, t) {
  try {
    return await ms(e, t);
  } catch (error) {
    if (error instanceof MU) {
      if (error.code === s8.InvalidClient || error.code === s8.UnauthorizedClient) return await e.invalidateCredentials?.("client"), await e.invalidateCredentials?.("tokens"), await ms(e, t);else if (error.code === s8.InvalidGrant) return await e.invalidateCredentials?.("tokens"), await ms(e, t);
    }
    throw error;
  }
}
function Oc(e) {
  let {
      requestedScope: requestedScope,
      resourceMetadata: resourceMetadata,
      authServerMetadata: authServerMetadata,
      clientMetadata: clientMetadata_2
    } = e,
    n = requestedScope || resourceMetadata?.scopes_supported?.join(" ") || clientMetadata_2.scope;
  if (n && authServerMetadata?.scopes_supported?.includes("offline_access") && !n.split(" ").includes("offline_access") && clientMetadata_2.grant_types?.includes("refresh_token")) n = `${n} offline_access`;
  return n;
}
async function ms(e, {
  serverUrl: serverUrl,
  authorizationCode: authorizationCode_3,
  iss: iss_4,
  scope: a,
  resourceMetadataUrl: resourceMetadataUrl_2,
  fetchFn: fetchFn,
  skipIssuerMetadataValidation: l,
  forceReauthorization: forceReauthorization
}) {
  let clientMetadata_3 = qc(e),
    m = await e.discoveryState?.(),
    resourceMetadata_2,
    P,
    T,
    v,
    resourceMetadataUrl_3 = resourceMetadataUrl_2;
  if (!resourceMetadataUrl_3 && m?.resourceMetadataUrl) resourceMetadataUrl_3 = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (P = m.authorizationServerUrl, resourceMetadata_2 = m.resourceMetadata, T = m.authorizationServerMetadata ?? (await Cet(P, {
      fetchFn: fetchFn,
      skipIssuerValidation: l
    })), !resourceMetadata_2) try {
      resourceMetadata_2 = await jxn(serverUrl, {
        resourceMetadataUrl: resourceMetadataUrl_3
      }, fetchFn);
    } catch (error) {
      if (error instanceof TypeError) throw error;
    }
    if (T !== m.authorizationServerMetadata || resourceMetadata_2 !== m.resourceMetadata) await e.saveDiscoveryState?.({
      authorizationServerUrl: String(P),
      resourceMetadataUrl: resourceMetadataUrl_3?.toString(),
      resourceMetadata: resourceMetadata_2,
      authorizationServerMetadata: T
    });
  } else {
    let j = await Wxn(serverUrl, {
      resourceMetadataUrl: resourceMetadataUrl_3,
      fetchFn: fetchFn,
      skipIssuerMetadataValidation: l
    });
    P = j.authorizationServerUrl, T = j.authorizationServerMetadata, resourceMetadata_2 = j.resourceMetadata, v = {
      authorizationServerUrl: String(P),
      resourceMetadataUrl: resourceMetadataUrl_3?.toString(),
      resourceMetadata: resourceMetadata_2,
      authorizationServerMetadata: T
    };
  }
  let issuer = T?.issuer ?? String(P),
    h = {
      issuer: issuer
    };
  if (await e.saveAuthorizationServerUrl?.(issuer), authorizationCode_3 !== void 0) {
    let j = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (j === void 0) {
      if (e.saveDiscoveryState !== void 0) throw new ls("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", issuer);
      console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) \u2014 see docs/migration/upgrade-to-v2.md \xA7SEP-2352.");
    } else if (!co(j, issuer)) throw new ls(j, issuer);
  }
  if (v) await e.saveDiscoveryState?.(v);
  let resource = await Mc(serverUrl, e, resourceMetadata_2);
  if (resource) await e.saveResourceUrl?.(String(resource));
  let scope_2 = Oc({
      requestedScope: a,
      resourceMetadata: resourceMetadata_2,
      authServerMetadata: T,
      clientMetadata: e.clientMetadata
    }),
    R = await Promise.resolve(e.clientInformation(h)),
    clientInformation = Ba(R, issuer, {
      canPersistStamp: e.saveClientInformation !== void 0
    });
  if (clientInformation === void 0 && R?.issuer && e.saveClientInformation === void 0) throw new ls(R.issuer, issuer);
  if (clientInformation && clientInformation.issuer === void 0) clientInformation = {
    ...clientInformation,
    issuer: issuer
  }, await e.saveClientInformation?.(clientInformation, h);
  if (!clientInformation) {
    if (authorizationCode_3 !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let j = T?.client_id_metadata_document_supported === !0,
      H = e.clientMetadataUrl;
    if (H && !Nc(H)) throw new MU(s8.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${H}`);
    if (j && H) clientInformation = {
      client_id: H,
      issuer: issuer
    }, await e.saveClientInformation?.(clientInformation, h);else {
      if (!e.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      clientInformation = {
        ...(await Vc(P, {
          metadata: T,
          clientMetadata: clientMetadata_3,
          scope: scope_2,
          fetchFn: fetchFn
        })),
        issuer: issuer
      }, await e.saveClientInformation(clientInformation, h);
    }
  }
  let b = !e.redirectUrl;
  if (authorizationCode_3 !== void 0 || b) {
    if (authorizationCode_3 !== void 0) Ar({
      iss: iss_4,
      expectedIssuer: T?.issuer,
      issParameterSupported: jr(T)
    });
    let j = await Dc(e, P, {
      metadata: T,
      resource: resource,
      authorizationCode: authorizationCode_3,
      iss: iss_4,
      scope: scope_2,
      fetchFn: fetchFn
    });
    return await e.saveTokens({
      ...j,
      issuer: issuer
    }, h), "AUTHORIZED";
  }
  let S = Ba(await e.tokens(h), issuer);
  if (S && S.issuer === void 0) S = {
    ...S,
    issuer: issuer
  }, await e.saveTokens(S, h);
  if (S?.refresh_token && !forceReauthorization) try {
    let j = await hpr(P, {
      metadata: T,
      clientInformation: clientInformation,
      refreshToken: S.refresh_token,
      resource: resource,
      addClientAuthentication: e.addClientAuthentication,
      fetchFn: fetchFn
    });
    return await e.saveTokens({
      ...j,
      issuer: issuer
    }, h), "AUTHORIZED";
  } catch (error) {
    if (error instanceof io) throw error;
    if (!(error instanceof MU) || error.code === s8.ServerError) ;else throw error;
  }
  let state = e.state ? await e.state() : void 0,
    {
      authorizationUrl: authorizationUrl,
      codeVerifier: codeVerifier
    } = await gpr(P, {
      metadata: T,
      clientInformation: clientInformation,
      state: state,
      redirectUrl: e.redirectUrl,
      scope: scope_2,
      resource: resource
    });
  return await e.saveCodeVerifier(codeVerifier), await e.redirectToAuthorization(authorizationUrl), "REDIRECT";
}
function Nc(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function Mc(e, t, r) {
  let requestedResource_2 = Hs(e);
  if (t.validateResourceURL) return await t.validateResourceURL(requestedResource_2, r?.resource);
  if (!r) return;
  if (!xs({
    requestedResource: requestedResource_2,
    configuredResource: r.resource
  })) throw Error(`Protected resource ${r.resource} does not match expected ${requestedResource_2} (or origin)`);
  return new URL(r.resource);
}
function r0e(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, s] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !s) return {};
  let a = Or(e, "resource_metadata") || void 0,
    resourceMetadataUrl_4;
  if (a) try {
    resourceMetadataUrl_4 = new URL(a);
  } catch {}
  let scope_3 = Or(e, "scope") || void 0,
    error_3 = Or(e, "error") || void 0,
    errorDescription = Or(e, "error_description") || void 0;
  return {
    resourceMetadataUrl: resourceMetadataUrl_4,
    scope: scope_3,
    error: error_3,
    errorDescription: errorDescription
  };
}
function Or(e, t) {
  let r = e.headers.get("WWW-Authenticate");
  if (!r) return null;
  let regExp_4 = new RegExp(String.raw`${t}=(?:"([^"]+)"|([^\s,]+))`),
    a = r.match(regExp_4);
  if (a) {
    let n = a[1] || a[2];
    if (n) return n;
  }
  return null;
}
async function jxn(e, t, r = fetch) {
  let s = await Lc(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl
  });
  if (!s || s.status === 404) throw await s?.text?.().catch(() => {}), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!s.ok) throw await s.text?.().catch(() => {}), Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`);
  return OAuthProtectedResourceMetadataSchema.parse(await s.json());
}
async function fo(e, headers_2, r = fetch) {
  try {
    return await r(e, {
      headers: headers_2
    });
  } catch (error) {
    if (!(error instanceof TypeError) || !Ja) throw error;
    if (headers_2) try {
      return await r(e, {});
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;
      return;
    }
    return;
  }
}
function jc(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Ya(e, t, r = fetch) {
  return await fo(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function Ac(e, t) {
  if (!e) return !0;
  if (t === "/") return !1;
  return e.status >= 400 && e.status < 500 || e.status === 502;
}
async function Lc(e, t, r, s) {
  let a = new URL(e),
    n = s?.protocolVersion ?? nEt,
    i;
  if (s?.metadataUrl) i = new URL(s.metadataUrl);else {
    let c = jc(t, a.pathname);
    i = new URL(c, s?.metadataServerUrl ?? a), i.search = a.search;
  }
  let l = await Ya(i, n, r);
  if (!s?.metadataUrl && Ac(l, a.pathname)) l = await Ya(new URL(`/.well-known/${t}`, a), n, r);
  return l;
}
function Uc(e) {
  let t = typeof e === "string" ? new URL(e) : e,
    r = t.pathname !== "/",
    s = [];
  if (!r) return s.push({
    url: new URL("/.well-known/oauth-authorization-server", t.origin),
    type: "oauth"
  }, {
    url: new URL("/.well-known/openid-configuration", t.origin),
    type: "oidc"
  }), s;
  let pathname = t.pathname;
  if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  return s.push({
    url: new URL(`/.well-known/oauth-authorization-server${pathname}`, t.origin),
    type: "oauth"
  }, {
    url: new URL(`/.well-known/openid-configuration${pathname}`, t.origin),
    type: "oidc"
  }, {
    url: new URL(`${pathname}/.well-known/openid-configuration`, t.origin),
    type: "oidc"
  }), s;
}
async function Cet(e, {
  fetchFn: fetchFn_2 = fetch,
  protocolVersion = nEt,
  skipIssuerValidation = !1
} = {}) {
  let a = {
      "MCP-Protocol-Version": protocolVersion,
      Accept: "application/json"
    },
    n = Uc(e);
  for (let {
    url: url,
    type: type_5
  } of n) {
    let c = await fo(url, a, fetchFn_2);
    if (!c) continue;
    if (!c.ok) {
      if (await c.text?.().catch(() => {}), c.status >= 400 && c.status < 500 || c.status === 502) continue;
      throw Error(`HTTP ${c.status} trying to load ${type_5 === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${url}`);
    }
    let d = type_5 === "oauth" ? OAuthMetadataSchema.parse(await c.json()) : OpenIdProviderDiscoveryMetadataSchema.parse(await c.json());
    if (!skipIssuerValidation) {
      let m = typeof e === "string" ? e : e.href;
      if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) throw new d2e("metadata", m, d.issuer);
    }
    return d;
  }
}
async function Wxn(e, t) {
  let resourceMetadata_3, authorizationServerUrl;
  try {
    if (resourceMetadata_3 = await jxn(e, {
      resourceMetadataUrl: t?.resourceMetadataUrl
    }, t?.fetchFn), resourceMetadata_3.authorization_servers && resourceMetadata_3.authorization_servers.length > 0) authorizationServerUrl = resourceMetadata_3.authorization_servers[0];
  } catch (error) {
    if (error instanceof TypeError) throw error;
  }
  if (!authorizationServerUrl) authorizationServerUrl = String(new URL("/", e));
  let authorizationServerMetadata = await Cet(authorizationServerUrl, {
    fetchFn: t?.fetchFn,
    skipIssuerValidation: t?.skipIssuerMetadataValidation
  });
  return {
    authorizationServerUrl: authorizationServerUrl,
    authorizationServerMetadata: authorizationServerMetadata,
    resourceMetadata: resourceMetadata_3
  };
}
async function gpr(e, {
  metadata: metadata,
  clientInformation: clientInformation_2,
  redirectUrl: redirectUrl,
  scope: scope_4,
  state: state_2,
  resource: resource_2
}) {
  let authorizationUrl_2;
  if (metadata) {
    if (authorizationUrl_2 = new URL(metadata.authorization_endpoint), !metadata.response_types_supported.includes(ds)) throw Error(`Incompatible auth server: does not support response type ${ds}`);
    if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes(hs)) throw Error(`Incompatible auth server: does not support code challenge method ${hs}`);
  } else authorizationUrl_2 = new URL("/authorize", e);
  let c = await nTt(),
    {
      code_verifier: d,
      code_challenge: code_challenge
    } = c;
  if (authorizationUrl_2.searchParams.set("response_type", ds), authorizationUrl_2.searchParams.set("client_id", clientInformation_2.client_id), authorizationUrl_2.searchParams.set("code_challenge", code_challenge), authorizationUrl_2.searchParams.set("code_challenge_method", hs), authorizationUrl_2.searchParams.set("redirect_uri", String(redirectUrl)), state_2) authorizationUrl_2.searchParams.set("state", state_2);
  if (scope_4) authorizationUrl_2.searchParams.set("scope", scope_4);
  if (scope_4?.split(" ").includes("offline_access")) authorizationUrl_2.searchParams.append("prompt", "consent");
  if (resource_2) authorizationUrl_2.searchParams.set("resource", resource_2.href);
  return {
    authorizationUrl: authorizationUrl_2,
    codeVerifier: d
  };
}
function po(code_3, code_verifier, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: code_3,
    code_verifier: code_verifier,
    redirect_uri: String(r)
  });
}
async function gs(e, {
  metadata: metadata_2,
  tokenRequestParams: r,
  clientInformation: clientInformation_3,
  addClientAuthentication: addClientAuthentication,
  resource: resource_3,
  fetchFn: fetchFn_3
}) {
  let l = kc(metadata_2?.token_endpoint ?? new URL("/token", e)),
    headers_3 = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });
  if (resource_3) r.set("resource", resource_3.href);
  if (addClientAuthentication) await addClientAuthentication(headers_3, r, l, metadata_2);else if (clientInformation_3) Pc(Ec(clientInformation_3, metadata_2?.token_endpoint_auth_methods_supported ?? []), clientInformation_3, headers_3, r);
  let d = await (fetchFn_3 ?? fetch)(l, {
    method: "POST",
    headers: headers_3,
    body: r
  });
  if (!d.ok) throw await Wa(d);
  let m = await d.json();
  try {
    return OAuthTokensSchema.parse(m);
  } catch (error) {
    if (typeof m === "object" && m !== null && "error" in m) throw await Wa(JSON.stringify(m));
    throw error;
  }
}
async function gio(e, {
  metadata: metadata_3,
  clientInformation: clientInformation_4,
  authorizationCode: authorizationCode_4,
  iss: iss_5,
  codeVerifier: codeVerifier_2,
  redirectUri: redirectUri,
  resource: resource_4,
  addClientAuthentication: addClientAuthentication_2,
  fetchFn: fetchFn_4
}) {
  return Ar({
    iss: iss_5,
    expectedIssuer: metadata_3?.issuer,
    issParameterSupported: jr(metadata_3)
  }), gs(e, {
    metadata: metadata_3,
    tokenRequestParams: po(authorizationCode_4, codeVerifier_2, redirectUri),
    clientInformation: clientInformation_4,
    addClientAuthentication: addClientAuthentication_2,
    resource: resource_4,
    fetchFn: fetchFn_4
  });
}
async function hpr(e, {
  metadata: metadata_4,
  clientInformation: clientInformation_5,
  refreshToken: s,
  resource: resource_5,
  addClientAuthentication: addClientAuthentication_3,
  fetchFn: fetchFn_5
}) {
  return {
    refresh_token: s,
    ...(await gs(e, {
      metadata: metadata_4,
      tokenRequestParams: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: s
      }),
      clientInformation: clientInformation_5,
      addClientAuthentication: addClientAuthentication_3,
      resource: resource_5,
      fetchFn: fetchFn_5
    }))
  };
}
async function Dc(e, t, {
  metadata: metadata_5,
  resource: resource_6,
  authorizationCode: authorizationCode_5,
  iss: iss_6,
  scope: scope_5,
  fetchFn: fetchFn_6
} = {}) {
  if (authorizationCode_5 !== void 0) Ar({
    iss: iss_6,
    expectedIssuer: metadata_5?.issuer,
    issParameterSupported: jr(metadata_5)
  });
  let c = scope_5 ?? e.clientMetadata.scope,
    tokenRequestParams;
  if (e.prepareTokenRequest) tokenRequestParams = await e.prepareTokenRequest(c);
  if (!tokenRequestParams) {
    if (!authorizationCode_5) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    tokenRequestParams = po(authorizationCode_5, await e.codeVerifier(), e.redirectUrl);
  }
  let m = await e.clientInformation({
    issuer: metadata_5?.issuer ?? String(t)
  });
  return gs(t, {
    metadata: metadata_5,
    tokenRequestParams: tokenRequestParams,
    clientInformation: m ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: resource_6,
    fetchFn: fetchFn_6
  });
}
async function Vc(e, {
  metadata: metadata_6,
  clientMetadata: clientMetadata_4,
  scope: scope_6,
  fetchFn: fetchFn_7
}) {
  let n;
  if (metadata_6) {
    if (!metadata_6.registration_endpoint) throw Error("Incompatible auth server: does not support dynamic client registration");
    n = new URL(metadata_6.registration_endpoint);
  } else n = new URL("/register", e);
  let submittedMetadata = {
      ...clientMetadata_4,
      ...(scope_6 === void 0 ? {} : {
        scope: scope_6
      })
    },
    l = await (fetchFn_7 ?? fetch)(n, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submittedMetadata)
    });
  if (!l.ok) throw new Bxn({
    status: l.status,
    body: await l.text(),
    submittedMetadata: submittedMetadata
  });
  return OAuthClientInformationFullSchema.parse(await l.json());
}
var Nr = new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "server/discover"]),
  Fc = class {
    _entries = new Map();
    _maxEntries;
    _stamp = 0;
    _cappedSize = 0;
    constructor(e) {
      this._maxEntries = e?.maxEntries ?? 512;
    }
    get size() {
      return this._entries.size;
    }
    get(e) {
      return this._entries.get(fs(e));
    }
    set(e, t) {
      let r = fs(e),
        s = Nr.has(e.method),
        a = !this._entries.has(r);
      if (!s && a && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
        for (let i of this._entries.keys()) if (!Nr.has(i.slice(0, i.indexOf("\x00")))) {
          this._entries.delete(i), this._cappedSize--;
          break;
        }
      }
      let stamp = ++this._stamp;
      if (this._entries.set(r, {
        ...t,
        stamp: stamp
      }), a && !s) this._cappedSize++;
      return stamp;
    }
    delete(e) {
      if (this._entries.delete(fs(e)) && !Nr.has(e.method)) this._cappedSize--;
    }
    evict(e) {
      let t = `${e}\x00`,
        r = Nr.has(e);
      for (let s of this._entries.keys()) if (s.startsWith(t)) {
        if (this._entries.delete(s), !r) this._cappedSize--;
      }
    }
    clear() {
      this._entries.clear(), this._cappedSize = 0;
    }
  };
function fs(e) {
  return `${e.method}\x00${JSON.stringify([e.partition ?? "", e.params ?? ""])}`;
}
function ps(e, t) {
  return t === void 0 ? e : `${e}\x00${t}`;
}
var Hc = 86400000,
  xc = class {
    _evictionGeneration = new Map();
    _toolIndex;
    _toolOutputValidatorIndex;
    _serverIdentity = "";
    constructor(e, t, r = () => {}, s = "", a = Date.now) {
      this._store = e, this._isUserSupplied = t, this._reportError = r, this._cachePartition = s, this._now = a;
    }
    now() {
      return this._now();
    }
    setServerIdentity(e) {
      this._serverIdentity = e;
    }
    _partitionFor(e) {
      return JSON.stringify([this._serverIdentity, e === "public" ? "" : this._cachePartition]);
    }
    async _probe(method_6, t) {
      let r = {
          method: method_6,
          params: t ?? ""
        },
        partition = this._partitionFor("private"),
        a = await this._store.get({
          ...r,
          partition: partition
        });
      if (a !== void 0) return a;
      let partition_2 = this._partitionFor("public");
      if (partition_2 === partition) return;
      let i = await this._store.get({
        ...r,
        partition: partition_2
      });
      return i?.scope === "public" ? i : void 0;
    }
    async evict(e) {
      this._evictionGeneration.set(e, (this._evictionGeneration.get(e) ?? 0) + 1), await this._deleteBoth(e, "");
    }
    async _deleteBoth(method_7, params_13) {
      let partition_3 = this._partitionFor("private"),
        partition_4 = this._partitionFor("public");
      try {
        await this._store.delete({
          method: method_7,
          params: params_13,
          partition: partition_3
        });
      } catch (error) {
        this._reportError(error);
      }
      if (partition_4 !== partition_3) try {
        await this._store.delete({
          method: method_7,
          params: params_13,
          partition: partition_4
        });
      } catch (error) {
        this._reportError(error);
      }
    }
    async evictKey(e, t) {
      let r = ps(e, t),
        s = this._evictionGeneration.get(r);
      if (s !== void 0) this._evictionGeneration.set(r, s + 1);
      await this._deleteBoth(e, t);
    }
    captureGeneration(e, t) {
      let r = ps(e, t),
        s = this._evictionGeneration.get(r) ?? 0;
      return this._evictionGeneration.set(r, s), s;
    }
    async write(method_8, t, r, s) {
      if ((this._evictionGeneration.get(ps(method_8, s?.params)) ?? 0) !== r) return;
      let params_14 = s?.params ?? "",
        n = this._partitionFor("private"),
        i = this._partitionFor("public"),
        partition_5 = (s?.scope ?? "private") === "public" ? i : n;
      try {
        await this._store.set({
          method: method_8,
          params: params_14,
          partition: partition_5
        }, {
          value: Kc(t),
          expiresAt: s?.expiresAt,
          scope: s?.scope
        });
      } catch (error) {
        this._reportError(error);
      }
      if (i !== n) try {
        await this._store.delete({
          method: method_8,
          params: params_14,
          partition: partition_5 === n ? i : n
        });
      } catch (error) {
        this._reportError(error);
      }
    }
    async read(e, t) {
      let r = await this._probe(e, t);
      if (r?.expiresAt === void 0 || !(r.expiresAt > this.now())) return;
      try {
        let value_3 = JSON.parse(r.value);
        if (typeof value_3 !== "object" || value_3 === null || Array.isArray(value_3)) throw TypeError("cached document is not an object");
        return {
          value: value_3
        };
      } catch (error) {
        this._reportError(error), await this._deleteBoth(e, t ?? "");
        return;
      }
    }
    resetForReconnect() {
      if (!this._isUserSupplied) this._store.clear();
      this._evictionGeneration.clear(), this._toolIndex = void 0, this._toolOutputValidatorIndex = void 0, this._serverIdentity = "";
    }
    async toolDefinition(e) {
      let t = await this._probe("tools/list");
      if (t === void 0) {
        this._toolIndex = void 0;
        return;
      }
      if (this._toolIndex?.stamp !== t.stamp) {
        let r = this._decodeListTools(t),
          byName = new Map();
        if (r !== void 0) for (let a of r.tools) byName.set(a.name, a);
        this._toolIndex = {
          stamp: t.stamp,
          byName: byName
        };
      }
      return this._toolIndex.byName.get(e);
    }
    async outputValidator(e, t) {
      let r = await this._probe("tools/list");
      if (r === void 0) {
        this._toolOutputValidatorIndex = void 0;
        return;
      }
      if (this._toolOutputValidatorIndex?.stamp !== r.stamp) {
        let s = this._decodeListTools(r) ?? {
            tools: []
          },
          byName_2 = new Map();
        for (let n of s.tools) {
          let i = t(n);
          if (i !== void 0) byName_2.set(n.name, i);
        }
        this._toolOutputValidatorIndex = {
          stamp: r.stamp,
          byName: byName_2
        };
      }
      return this._toolOutputValidatorIndex.byName.get(e);
    }
    _decodeListTools(e) {
      try {
        let t = JSON.parse(e.value);
        if (!Array.isArray(t?.tools) || !t.tools.every(item => item !== null && typeof item === "object")) throw TypeError("cached tools/list document has a malformed tools array");
        return t;
      } catch (error) {
        this._reportError(error);
        return;
      }
    }
  };
function Kc(e) {
  let t;
  try {
    t = JSON.stringify(e);
  } catch (error) {
    throw TypeError(`cache value is not JSON-serializable: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (typeof t !== "string") throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
  return t;
}
var Jc = -32022,
  Gc = new Set([-32001, -32020, -32021]);
function Bc(e, t) {
  switch (e.kind) {
    case "result":
      return Wc(e.result, t);
    case "rpc-error":
      return So(e, t);
    case "http-error":
      return Yc(e, t);
    case "network-error":
      return Xa(e.error, t);
    case "auth-required":
      return {
        kind: "error",
        error: e.error
      };
    case "closed":
      if (t.transportKind === "stdio") return {
        kind: "legacy"
      };
      return Xa(Error("Connection closed during the version negotiation probe"), t);
    case "timeout":
      if (t.transportKind === "stdio") return {
        kind: "legacy"
      };
      return {
        kind: "error",
        error: new ws(cs.RequestTimeout, `Version negotiation probe timed out after ${e.timeoutMs}ms`, {
          timeout: e.timeoutMs
        })
      };
    case "id-mismatch":
    case "malformed":
    case "stream-end":
      return {
        kind: "legacy"
      };
  }
}
function Wc(e, t) {
  let r = je($r).validateResult("server/discover", e);
  if (!r.ok) return {
    kind: "legacy"
  };
  let supportedVersions = r.value.supportedVersions,
    version = t.clientModernVersions.find(item => supportedVersions.includes(item));
  if (version !== void 0) return {
    kind: "modern",
    version: version,
    discover: r.value
  };
  if (t.fallbackAvailable) return {
    kind: "legacy"
  };
  return {
    kind: "error",
    error: new wr({
      supported: [...supportedVersions],
      requested: t.requestedVersion
    })
  };
}
function So(e, t) {
  let {
    code: code_4,
    message: message_6,
    data: data_41
  } = e;
  if (code_4 === Jc) {
    let supported = go(data_41);
    if (supported === void 0) return {
      kind: "legacy"
    };
    let error_4 = new wr({
        supported: supported,
        requested: Qc(data_41) ?? t.requestedVersion
      }, message_6),
      l = Gt(supported),
      version_2 = t.clientModernVersions.find(item => l.includes(item));
    if (version_2 !== void 0) return {
      kind: "corrective",
      version: version_2,
      error: error_4
    };
    if (l.length > 0) return {
      kind: "error",
      error: error_4
    };
    return t.fallbackAvailable ? {
      kind: "legacy"
    } : {
      kind: "error",
      error: error_4
    };
  }
  if (Gc.has(code_4)) return {
    kind: "legacy"
  };
  return {
    kind: "legacy"
  };
}
function Yc(e, t) {
  let r = el(e.body);
  if (r !== void 0) return So(r, t);
  return {
    kind: "legacy"
  };
}
function Xa(cause, t) {
  if (t.environment === "browser" && Xc(cause)) return {
    kind: "legacy"
  };
  return {
    kind: "error",
    error: new ws(cs.EraNegotiationFailed, `Version negotiation probe failed: ${Zc(cause)}`, {
      cause: cause
    })
  };
}
function Xc(e) {
  return e instanceof TypeError || e instanceof Error && e.name === "TypeError";
}
function Zc(e) {
  return e instanceof Error ? e.message : String(e);
}
function go(e) {
  if (typeof e !== "object" || e === null) return;
  let supported_2 = e.supported;
  if (!Array.isArray(supported_2) || supported_2.length === 0 || !supported_2.every(item => typeof item === "string")) return;
  return supported_2;
}
function Qc(e) {
  if (typeof e !== "object" || e === null) return;
  let requested_2 = e.requested;
  return typeof requested_2 === "string" ? requested_2 : void 0;
}
function el(e) {
  if (e === void 0 || e === "") return;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return;
  }
  if (typeof t !== "object" || t === null) return;
  let r = t.error;
  if (typeof r !== "object" || r === null) return;
  let {
    code: code_5,
    message: message_7,
    data: data_42
  } = r;
  if (typeof code_5 !== "number") return;
  return {
    code: code_5,
    message: typeof message_7 === "string" ? message_7 : "",
    data: data_42
  };
}
var tl = "legacy";
function rl(e, t) {
  let r = e?.mode ?? tl;
  if (r === "legacy") return {
    kind: "legacy"
  };
  let probe = e?.probe ?? {};
  if (typeof r === "object") {
    if (!Ae(r.pin)) throw TypeError(`versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`);
    return {
      kind: "pin",
      version: r.pin,
      probe: probe
    };
  }
  let a = t ? Gt(t) : [];
  return {
    kind: "auto",
    modernVersions: a.length > 0 ? a : [...Br],
    fallbackAvailable: t ? Wr(t).length > 0 : !0,
    probe: probe
  };
}
function Za() {
  let globalThis_2 = globalThis;
  return globalThis_2.window !== void 0 && globalThis_2.document !== void 0 ? "browser" : "node";
}
function Qa(e) {
  return "stderr" in e && "pid" in e ? "stdio" : "http";
}
var sl = class e {
    _pending;
    _probeCounter = 0;
    _transportKind;
    _issuedIds = new Set();
    _errorSinceSend;
    _savedOnMessage;
    _savedOnError;
    _savedOnClose;
    _closeDelivered = !1;
    constructor(t) {
      this._transport = t, this._savedOnMessage = t.onmessage, this._savedOnError = t.onerror, this._savedOnClose = t.onclose;
    }
    static async open(t, r) {
      let s = new e(t);
      s._transportKind = r, t.onmessage = a => {
        let _pending = s._pending;
        if (_pending !== void 0 && (hwe(a) || ywe(a)) && a.id === _pending.id) {
          if (s._pending = void 0, hwe(a)) _pending.resolve({
            kind: "response",
            result: a.result
          });else _pending.resolve({
            kind: "response",
            error: a.error
          });
          return;
        }
        if (_pending !== void 0 && s._transportKind === "http" && (hwe(a) || ywe(a)) && !s._issuedIds.has(a.id)) {
          s._pending = void 0;
          let i = eo(JSON.stringify(a.id)),
            l = Error(`server/discover probe reply did not echo the request id (expected ${JSON.stringify(_pending.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`);
          l.name = "McpProbeIdMismatchError", s._savedOnError?.(l), _pending.resolve({
            kind: "id-mismatch"
          });
          return;
        }
      }, t.onerror = a => {
        if (s._pending !== void 0 && s._errorSinceSend === void 0) s._errorSinceSend = a;
        let _pending_2 = s._pending;
        if (_pending_2 !== void 0 && s._transportKind === "http" && to(a)) setTimeout(() => {
          if (s._pending !== _pending_2) return;
          s._pending = void 0;
          let i = Error(`server/discover probe reply failed JSON-RPC message decoding (${eo(a instanceof Error ? a.message : String(a))}) \u2014 treating the server as pre-2026-07-28`);
          i.name = "McpProbeMalformedReplyError", s._savedOnError?.(i), _pending_2.resolve({
            kind: "malformed"
          });
        }, 0);
        s._savedOnError?.(a);
      }, t.onclose = () => {
        let _pending_3 = s._pending;
        if (_pending_3 !== void 0) s._pending = void 0, _pending_3.resolve({
          kind: "closed"
        });
        s._closeDelivered = !0, s._savedOnClose?.();
      };
      try {
        await t.start();
      } catch (error) {
        throw s.detach(), error;
      }
      return s;
    }
    async exchange(t, r) {
      let id_2 = `server-discover-probe-${++this._probeCounter}`;
      return this._issuedIds.add(id_2), this._errorSinceSend = void 0, new Promise(a => {
        let n = !1,
          resolve_2 = c => {
            if (n) return;
            if (n = !0, clearTimeout(l), this._pending?.id === id_2) this._pending = void 0;
            a(c);
          },
          l = setTimeout(() => resolve_2({
            kind: "timeout"
          }), r);
        this._pending = {
          id: id_2,
          resolve: resolve_2
        }, this._transport.send(t(id_2), {
          onRequestStreamEnd: () => {
            setTimeout(() => {
              let _errorSinceSend = this._errorSinceSend;
              if (_errorSinceSend !== void 0 && !to(_errorSinceSend)) {
                resolve_2({
                  kind: "send-error",
                  error: _errorSinceSend instanceof Error ? _errorSinceSend : Error(String(_errorSinceSend))
                });
                return;
              }
              resolve_2({
                kind: "stream-end"
              });
            }, 0);
          }
        }).catch(error_5 => resolve_2({
          kind: "send-error",
          error: error_5
        }));
      });
    }
    detach() {
      if (this._pending = void 0, this._transport.onmessage = this._savedOnMessage, this._transport.onerror = this._savedOnError, this._closeDelivered && this._savedOnClose !== void 0) {
        let _savedOnClose = this._savedOnClose,
          _transport_2 = this._transport,
          s = !1,
          a = () => {
            if (!s) {
              s = !0;
              return;
            }
            _savedOnClose();
          };
        _transport_2.onclose = a, weakMap.set(_transport_2, () => {
          if (_transport_2.onclose === a) _transport_2.onclose = _savedOnClose;
        });
      } else this._transport.onclose = this._savedOnClose;
    }
    release() {
      this.detach();
      let _transport_3 = this._transport,
        start = _transport_3.start,
        s = !0;
      _transport_3.start = async function start() {
        if (s) {
          s = !1, _transport_3.start = start;
          return;
        }
        return start.call(_transport_3);
      };
    }
  },
  weakMap = new WeakMap();
function eo(e) {
  let t = String(e);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}\u2026 [truncated]`;
}
function to(e) {
  if (e instanceof SyntaxError) return !0;
  return typeof e === "object" && e !== null && (e.name === "ZodError" || Array.isArray(e.issues));
}
function ro(e) {
  let t = weakMap.get(e);
  weakMap.delete(e), t?.();
}
function al(id_3, protocolVersion_2, clientInfo, clientCapabilities) {
  return {
    jsonrpc: "2.0",
    id: id_3,
    method: "server/discover",
    params: {
      _meta: je(protocolVersion_2).outboundEnvelope({
        protocolVersion: protocolVersion_2,
        clientInfo: clientInfo,
        clientCapabilities: clientCapabilities
      })
    }
  };
}
function ol(e, timeoutMs) {
  switch (e.kind) {
    case "response":
      return e.error === void 0 ? {
        kind: "result",
        result: e.result
      } : {
        kind: "rpc-error",
        ...e.error
      };
    case "send-error":
      {
        let error_6 = e.error;
        if (error_6 instanceof aw) {
          let s = error_6.data?.text;
          return {
            kind: "http-error",
            status: error_6.data.status,
            body: typeof s === "string" ? s : void 0
          };
        }
        if (error_6 instanceof kT || error_6 instanceof Error && error_6.name === "UnauthorizedError") return {
          kind: "auth-required",
          error: error_6
        };
        return {
          kind: "network-error",
          error: error_6
        };
      }
    case "closed":
      return {
        kind: "closed"
      };
    case "id-mismatch":
      return {
        kind: "id-mismatch"
      };
    case "malformed":
      return {
        kind: "malformed"
      };
    case "stream-end":
      return {
        kind: "stream-end"
      };
    case "timeout":
      return {
        kind: "timeout",
        timeoutMs: timeoutMs
      };
  }
}
async function _o(e, t) {
  let r = e.probe.timeoutMs ?? t.defaultTimeoutMs,
    s = Math.max(0, e.probe.maxRetries ?? 0),
    clientModernVersions = e.kind === "pin" ? [e.version] : e.modernVersions,
    fallbackAvailable = e.kind === "auto" && e.fallbackAvailable,
    i = await sl.open(t.transport, t.transportKind),
    l = async () => {
      let requestedVersion = clientModernVersions[0],
        m = !1,
        _ = s;
      for (;;) {
        let P = await i.exchange(y => al(y, requestedVersion, t.clientInfo, t.capabilities), r);
        if (P.kind === "timeout" && _ > 0) {
          _--;
          continue;
        }
        let T = ol(P, r);
        if (T.kind === "timeout") t.transport._anthropicProbeTimedOut = !0;
        let v = Bc(T, {
          clientModernVersions: clientModernVersions,
          requestedVersion: requestedVersion,
          fallbackAvailable: fallbackAvailable,
          environment: t.environment,
          transportKind: t.transportKind
        });
        switch (v.kind) {
          case "modern":
            return {
              era: "modern",
              version: v.version,
              discover: v.discover
            };
          case "corrective":
            if (m) throw v.error;
            m = !0, requestedVersion = v.version;
            continue;
          case "legacy":
            {
              if (T.kind === "id-mismatch" || T.kind === "malformed" || T.kind === "stream-end") t.transport._anthropicProbeLegacyEvidence = T.kind;
              let y = T.kind === "closed" ? "the connection closed during the server/discover probe" : void 0;
              if (e.kind === "pin") throw new ws(cs.EraNegotiationFailed, y === void 0 ? `Version negotiation failed: the server did not offer pinned protocol version ${e.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${y} before the server offered pinned protocol version ${e.version} (no fallback in pin mode)`);
              if (!e.fallbackAvailable) throw new ws(cs.EraNegotiationFailed, y === void 0 ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${y} and this client supports no pre-2026-07-28 protocol version to fall back to`);
              if (y !== void 0 && t.disposableProbe !== !0) throw new ws(cs.EraNegotiationFailed, `Version negotiation failed: ${y} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`);
              return {
                era: "legacy"
              };
            }
          case "error":
            throw v.error;
        }
      }
    },
    c;
  try {
    c = await l();
  } catch (error) {
    throw i.detach(), error;
  }
  return i.release(), c;
}
function nl(e) {
  let t = Object.getPrototypeOf(e);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) return;
  let _serverParams = e._serverParams;
  return typeof _serverParams === "object" && _serverParams !== null && typeof _serverParams.command === "string" ? _serverParams : void 0;
}
async function il(e, t, r, s) {
  let transport = new t.constructor({
      ...r,
      stderr: "ignore"
    }),
    i = t.close,
    l = !1,
    c,
    promise = new Promise((_, P) => {
      c = () => P(so());
    });
  t.close = async function close() {
    return l = !0, c?.(), i.call(t);
  };
  let m;
  try {
    let _ = _o(e, {
      ...s,
      transport: transport,
      transportKind: "stdio",
      disposableProbe: !0
    });
    _.catch(() => {}), m = await Promise.race([_, promise]);
  } finally {
    await cl(transport), t.close = i;
  }
  if (l) throw so();
  return m;
}
function so() {
  return new ws(cs.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
}
async function cl(e) {
  try {
    let _dispose = e._dispose;
    await (typeof _dispose === "function" ? _dispose.call(e) : e.close());
  } catch {}
}
function ao(e) {
  let t = e._meta?.[i0e];
  return Ra.Implementation(t) ? t : void 0;
}
function Mr(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let r = t,
      properties_4 = e.properties;
    for (let a of Object.keys(properties_4)) {
      let n = properties_4[a];
      if (r[a] === void 0 && Object.prototype.hasOwnProperty.call(n, "default")) r[a] = n.default;
      if (r[a] !== void 0) Mr(n, r[a]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let r of e.anyOf) if (typeof r !== "boolean") Mr(r, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let r of e.oneOf) if (typeof r !== "boolean") Mr(r, t);
  }
}
function ll(e) {
  if (!e) return {
    supportsFormMode: !1,
    supportsUrlMode: !1
  };
  let t = e.form !== void 0,
    supportsUrlMode = e.url !== void 0;
  return {
    supportsFormMode: t || !t && !supportsUrlMode,
    supportsUrlMode: supportsUrlMode
  };
}
function ul(e) {
  if (typeof e === "object" && e !== null) {
    if (e.kind === "legacy" && !("supportedVersions" in e) && !("discover" in e)) return e;
    if (e.kind === "modern" && _we.safeParse(e.discover).success) return e;
  }
  throw new ws(cs.EraNegotiationFailed, "connect({ prior }): unrecognized prior \u2014 expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
var oo = {
    "notifications/tools/list_changed": ["tools/list"],
    "notifications/prompts/list_changed": ["prompts/list"],
    "notifications/resources/list_changed": ["resources/list", "resources/templates/list"]
  },
  dl = 64,
  ypr = class extends wa {
    _serverCapabilities;
    _serverVersion;
    _capabilities;
    _instructions;
    _jsonSchemaValidator;
    _cache;
    _defaultCacheTtlMs;
    _listMaxPages;
    _listChangedDebounceTimers = new Map();
    _listChangedConfig;
    _enforceStrictCapabilities;
    _versionNegotiation;
    _supportedProtocolVersionsOption;
    _inputRequiredDriverConfig;
    _listenState = new Map();
    _nextListenId = 0;
    _autoOpenedSubscription;
    _discoverResult;
    _resetConnectionState() {
      if (this._negotiatedProtocolVersion = void 0, this._serverCapabilities = void 0, this._serverVersion = void 0, this._instructions = void 0, this._discoverResult = void 0, this._autoOpenedSubscription = void 0, this._listenState.size > 0) {
        let error_7 = new ws(cs.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
        for (let t of this._listenState.values()) t.settle({
          cause: "remote",
          error: error_7
        });
      }
      this._listenState.clear();
      for (let e of this._listChangedDebounceTimers.values()) clearTimeout(e);
      this._listChangedDebounceTimers.clear(), this._cache.resetForReconnect();
    }
    async close() {
      try {
        await super.close();
      } finally {
        this._resetConnectionState();
      }
    }
    constructor(e, t) {
      super(t);
      if (this._clientInfo = e, this._capabilities = t?.capabilities ? {
        ...t.capabilities
      } : {}, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new tEt(), this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? !1, this._versionNegotiation = t?.versionNegotiation, this._supportedProtocolVersionsOption = t?.supportedProtocolVersions, this._inputRequiredDriverConfig = _a(t?.inputRequired), this._cache = new xc(t?.responseCacheStore ?? new Fc(), t?.responseCacheStore !== void 0, r => this._reportStoreError(r), t?.cachePartition ?? ""), this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0, this._listMaxPages = t?.listMaxPages ?? dl, t?.listChanged) this._listChangedConfig = t.listChanged;
    }
    buildContext(e, t) {
      return e;
    }
    _shouldDropInbound(e) {
      if (this._negotiatedProtocolVersion !== void 0 && Ae(this._negotiatedProtocolVersion) && R7(e)) return "drop";
    }
    _outboundMetaEnvelope() {
      let e = this._negotiatedProtocolVersion;
      if (e === void 0) return;
      return this._wireCodec().outboundEnvelope({
        protocolVersion: e,
        clientInfo: this._clientInfo,
        clientCapabilities: this._capabilities
      });
    }
    _resolveNonCompleteResult(e, t) {
      if (!this._inputRequiredDriverConfig.autoFulfill) return Promise.reject(new ws(cs.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, {
        resultType: "input_required",
        method: t.request.method
      }));
      return Ea({
        getRequestHandler: r => this._getRequestHandler(r),
        buildContext: r => this.buildContext(r, void 0),
        sessionId: this.transport?.sessionId
      }, this._inputRequiredDriverConfig, e, t);
    }
    _setupListChangedHandlers(e) {
      if (e.tools && this._serverCapabilities?.tools?.listChanged) this._setupListChangedHandler("tools", "notifications/tools/list_changed", e.tools, async () => (await this.listTools(void 0, {
        cacheMode: "refresh"
      })).tools);
      if (e.prompts && this._serverCapabilities?.prompts?.listChanged) this._setupListChangedHandler("prompts", "notifications/prompts/list_changed", e.prompts, async () => (await this.listPrompts(void 0, {
        cacheMode: "refresh"
      })).prompts);
      if (e.resources && this._serverCapabilities?.resources?.listChanged) this._setupListChangedHandler("resources", "notifications/resources/list_changed", e.resources, async () => (await this.listResources(void 0, {
        cacheMode: "refresh"
      })).resources);
    }
    registerCapabilities(e) {
      if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
      this._capabilities = $a(this._capabilities, e);
    }
    setVersionNegotiation(e) {
      if (this.transport) throw Error("Cannot configure version negotiation after connecting to transport");
      this._versionNegotiation = e;
    }
    _wrapHandler(e, t) {
      if (e === "elicitation/create") return async (r, s) => {
        let a = je(this._negotiatedProtocolVersion),
          n = a.validateRequest("elicitation/create", r);
        if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("elicitation/create", r);
        if (!n.ok) throw new fl(n.reason === "not-in-era" ? Ns.InternalError : Ns.InvalidParams, n.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${n.message}`);
        let {
          params: params_15
        } = n.value;
        params_15.mode = params_15.mode ?? "form";
        let {
          supportsFormMode: supportsFormMode,
          supportsUrlMode: supportsUrlMode_2
        } = ll(this._capabilities.elicitation);
        if (params_15.mode === "form" && !supportsFormMode) throw new fl(Ns.InvalidParams, "Client does not support form-mode elicitation requests");
        if (params_15.mode === "url" && !supportsUrlMode_2) throw new fl(Ns.InvalidParams, "Client does not support URL-mode elicitation requests");
        let d = await t(r, s),
          m = a.validateResult("elicitation/create", d);
        if (!m.ok && m.reason === "not-in-era") m = a.validateInputResponse("elicitation/create", d);
        if (!m.ok) throw new fl(m.reason === "not-in-era" ? Ns.InternalError : Ns.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
        let _ = m.value,
          P = params_15.mode === "form" ? params_15.requestedSchema : void 0;
        if (params_15.mode === "form" && _.action === "accept" && _.content && P && this._capabilities.elicitation?.form?.applyDefaults) try {
          Mr(P, _.content);
        } catch {}
        return _;
      };
      if (e === "sampling/createMessage") return async (r, s) => {
        let a = je(this._negotiatedProtocolVersion),
          n = a.validateRequest("sampling/createMessage", r);
        if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("sampling/createMessage", r);
        if (!n.ok) throw new fl(n.reason === "not-in-era" ? Ns.InternalError : Ns.InvalidParams, n.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${n.message}`);
        let {
            params: params_16
          } = n.value,
          l = await t(r, s),
          c = Boolean(params_16.tools || params_16.toolChoice),
          d = a.samplingResultVariant(c, l);
        if (!d.ok && d.reason === "not-in-era") d = a.validateInputResponse("sampling/createMessage", l);
        if (!d.ok) throw new fl(d.reason === "not-in-era" ? Ns.InternalError : Ns.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
        return d.value;
      };
      return t;
    }
    assertCapability(e, t) {
      if (!this._serverCapabilities?.[e]) throw new ws(cs.CapabilityNotSupported, `Server does not support ${e} (required for ${t})`);
    }
    async connect(e, t) {
      if (t?.prior != null) return this._connectFromPrior(e, ul(t.prior), t);
      let r = rl(this._versionNegotiation, this._supportedProtocolVersionsOption);
      if (r.kind !== "legacy") return this._connectNegotiated(e, r, t);
      return this._connectPlainLegacy(e, t);
    }
    async _connectPlainLegacy(e, t) {
      if (await super.connect(e), e.sessionId !== void 0) {
        let _negotiatedProtocolVersion = this._negotiatedProtocolVersion;
        if (_negotiatedProtocolVersion !== void 0) e.setProtocolVersion?.(_negotiatedProtocolVersion);
        return;
      }
      this._resetConnectionState(), await this._legacyHandshake(e, t);
    }
    async _legacyHandshake(e, t, r = !0) {
      let s = Wr(this._supportedProtocolVersions);
      try {
        let protocolVersion_3 = s[0];
        if (protocolVersion_3 === void 0) throw new ws(cs.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
        let n = await this.request({
          method: "initialize",
          params: {
            protocolVersion: protocolVersion_3,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, t);
        if (n === void 0) throw Error(`Server sent invalid initialize result: ${n}`);
        if (!s.includes(n.protocolVersion)) throw Error(`Server's protocol version is not supported: ${n.protocolVersion}`);
        if (this._serverCapabilities = n.capabilities, this._serverVersion = n.serverInfo, this._cache.setServerIdentity(this._deriveServerIdentity(e)), e.setProtocolVersion) e.setProtocolVersion(n.protocolVersion);
        if (this._instructions = n.instructions, await this.notification({
          method: "notifications/initialized"
        }), this._negotiatedProtocolVersion = n.protocolVersion, this._listChangedConfig) this._setupListChangedHandlers(this._listChangedConfig);
      } catch (error) {
        if (r) this.close();
        throw error;
      }
    }
    async _discoverAfterRejectedInitialize(e, t, r, s) {
      let a = e._anthropicProbeTimedOut === !0 && t instanceof fl && t.code === Ns.UnsupportedProtocolVersion ? go(t.data) : void 0,
        version_3 = r.kind === "auto" && a !== void 0 ? r.modernVersions.find(item => a.includes(item)) : void 0;
      if (version_3 === void 0) throw this.close(), t;
      try {
        this._negotiatedProtocolVersion = version_3;
        let discover = await this.discover({
          ...s,
          timeout: Math.min(3000, r.probe.timeoutMs ?? s?.timeout ?? Bt)
        });
        if (!discover.supportedVersions.includes(version_3)) throw Error(`the second server/discover no longer offers ${version_3}`);
        return {
          era: "modern",
          version: version_3,
          discover: discover
        };
      } catch (error) {
        throw e._anthropicRediscoverError = error, this._negotiatedProtocolVersion = void 0, this.close(), t;
      }
    }
    async _connectNegotiated(transport_2, t, r) {
      if (transport_2.sessionId !== void 0) {
        await super.connect(transport_2);
        let _negotiatedProtocolVersion_2 = this._negotiatedProtocolVersion;
        if (_negotiatedProtocolVersion_2 !== void 0 && transport_2.setProtocolVersion) transport_2.setProtocolVersion(_negotiatedProtocolVersion_2);
        return;
      }
      this._resetConnectionState();
      let s;
      try {
        let transportKind = Qa(transport_2),
          n = {
            clientInfo: this._clientInfo,
            capabilities: this._capabilities,
            environment: Za(),
            defaultTimeoutMs: r?.timeout ?? Bt
          },
          i = transportKind === "stdio" ? nl(transport_2) : void 0;
        s = i === void 0 ? await _o(t, {
          ...n,
          transport: transport_2,
          transportKind: transportKind
        }) : await il(t, transport_2, i, n);
      } catch (error) {
        throw await transport_2.close().catch(() => {}), ro(transport_2), error;
      }
      if (ro(transport_2), await super.connect(transport_2), s.era === "legacy") try {
        await this._legacyHandshake(transport_2, r, !1);
        return;
      } catch (error) {
        s = await this._discoverAfterRejectedInitialize(transport_2, error, t, r);
      }
      if (this._serverCapabilities = s.discover.capabilities, this._serverVersion = ao(s.discover), this._cache.setServerIdentity(this._deriveServerIdentity(transport_2)), this._instructions = s.discover.instructions, this._discoverResult = s.discover, this._negotiatedProtocolVersion = s.version, transport_2.setProtocolVersion) transport_2.setProtocolVersion(s.version);
      if (this._listChangedConfig) {
        let _listChangedConfig = this._listChangedConfig,
          _serverCapabilities = this._serverCapabilities,
          i = {
            ...(_listChangedConfig.tools && _serverCapabilities?.tools?.listChanged && {
              tools: _listChangedConfig.tools
            }),
            ...(_listChangedConfig.prompts && _serverCapabilities?.prompts?.listChanged && {
              prompts: _listChangedConfig.prompts
            }),
            ...(_listChangedConfig.resources && _serverCapabilities?.resources?.listChanged && {
              resources: _listChangedConfig.resources
            })
          },
          l = !0;
        try {
          this._setupListChangedHandlers(i);
        } catch (error) {
          l = !1, this.onerror?.(error instanceof Error ? error : Error(String(error)));
        }
        let c = l ? {
          ...(i.tools && {
            toolsListChanged: !0
          }),
          ...(i.prompts && {
            promptsListChanged: !0
          }),
          ...(i.resources && {
            resourcesListChanged: !0
          })
        } : {};
        if (Object.keys(c).length > 0) {
          let abortController_3 = new AbortController(),
            m = () => abortController_3.abort(r?.signal?.reason);
          if (r?.signal?.aborted) m();
          r?.signal?.addEventListener("abort", m);
          try {
            this._autoOpenedSubscription = await this.listen(c, {
              timeout: r?.timeout,
              signal: abortController_3.signal
            });
          } catch (error) {
            if (r?.signal?.aborted) throw await this.close().catch(() => {}), error;
            this.onerror?.(error instanceof Error ? error : Error(String(error)));
          } finally {
            r?.signal?.removeEventListener("abort", m);
          }
        }
      }
    }
    async _connectFromPrior(e, t, r) {
      if (t.kind === "legacy") return this._connectPlainLegacy(e, r);
      let discover_2 = t.discover;
      this._resetConnectionState();
      let _supportedProtocolVersionsOption = this._supportedProtocolVersionsOption,
        n = (_supportedProtocolVersionsOption && Gt(_supportedProtocolVersionsOption).length > 0 ? Gt(_supportedProtocolVersionsOption) : Br).find(item => discover_2.supportedVersions.includes(item));
      if (n === void 0) throw new ws(cs.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
      if (await super.connect(e), this._discoverResult = discover_2, this._serverCapabilities = discover_2.capabilities, this._serverVersion = ao(discover_2), this._cache.setServerIdentity(this._deriveServerIdentity(e)), this._instructions = discover_2.instructions, this._negotiatedProtocolVersion = n, e.setProtocolVersion?.(n), this._listChangedConfig) try {
        this._setupListChangedHandlers(this._listChangedConfig);
      } catch (error) {
        this.onerror?.(error instanceof Error ? error : Error(String(error)));
      }
    }
    getServerCapabilities() {
      return this._serverCapabilities;
    }
    getServerVersion() {
      return this._serverVersion;
    }
    _deriveServerIdentity(e) {
      let _serverVersion = this._serverVersion;
      if (_serverVersion !== void 0) return `${_serverVersion.name}@${_serverVersion.version}`;
      return e.sessionId ?? `anonymous:${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
    getNegotiatedProtocolVersion() {
      return this._negotiatedProtocolVersion;
    }
    getProtocolEra() {
      let _negotiatedProtocolVersion_3 = this._negotiatedProtocolVersion;
      if (_negotiatedProtocolVersion_3 === void 0) return;
      return Ae(_negotiatedProtocolVersion_3) ? "modern" : "legacy";
    }
    getInstructions() {
      return this._instructions;
    }
    getDiscoverResult() {
      return this._discoverResult;
    }
    assertCapabilityForMethod(e) {
      switch (e) {
        case "logging/setLevel":
          if (!this._serverCapabilities?.logging) throw new ws(cs.CapabilityNotSupported, `Server does not support logging (required for ${e})`);
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._serverCapabilities?.prompts) throw new ws(cs.CapabilityNotSupported, `Server does not support prompts (required for ${e})`);
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
        case "resources/subscribe":
        case "resources/unsubscribe":
          if (!this._serverCapabilities?.resources) throw new ws(cs.CapabilityNotSupported, `Server does not support resources (required for ${e})`);
          if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new ws(cs.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e})`);
          break;
        case "tools/call":
        case "tools/list":
          if (!this._serverCapabilities?.tools) throw new ws(cs.CapabilityNotSupported, `Server does not support tools (required for ${e})`);
          break;
        case "completion/complete":
          if (!this._serverCapabilities?.completions) throw new ws(cs.CapabilityNotSupported, `Server does not support completions (required for ${e})`);
          break;
        case "initialize":
          break;
        case "server/discover":
          break;
        case "ping":
          break;
      }
    }
    assertNotificationCapability(e) {
      switch (e) {
        case "notifications/roots/list_changed":
          if (!this._capabilities.roots?.listChanged) throw new ws(cs.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e})`);
          break;
        case "notifications/initialized":
          break;
        case "notifications/cancelled":
          break;
        case "notifications/progress":
          break;
      }
    }
    assertRequestHandlerCapability(e) {
      switch (e) {
        case "sampling/createMessage":
          if (!this._capabilities.sampling) throw new ws(cs.CapabilityNotSupported, `Client does not support sampling capability (required for ${e})`);
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation) throw new ws(cs.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e})`);
          break;
        case "roots/list":
          if (!this._capabilities.roots) throw new ws(cs.CapabilityNotSupported, `Client does not support roots capability (required for ${e})`);
          break;
        case "ping":
          break;
      }
    }
    async ping(e) {
      return this.request({
        method: "ping"
      }, e);
    }
    async discover(e) {
      let t = await this._requestWithSchema({
        method: "server/discover"
      }, _we, e);
      return this._discoverResult = t, t;
    }
    async complete(params_17, t) {
      return this.request({
        method: "completion/complete",
        params: params_17
      }, t);
    }
    async setLoggingLevel(level, t) {
      return this.request({
        method: "logging/setLevel",
        params: {
          level: level
        }
      }, t);
    }
    async getPrompt(params_18, t) {
      return this.request({
        method: "prompts/get",
        params: params_18
      }, t);
    }
    async listPrompts(params_19, t) {
      if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities) return console.debug("Client.listPrompts() called but server does not advertise prompts capability - returning empty list"), {
        prompts: []
      };
      if (params_19?.cursor !== void 0) return this.request({
        method: "prompts/list",
        params: params_19
      }, t);
      let r = await this._serveFromCache("prompts/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("prompts/list", params_19, t, (s, a) => s.prompts.push(...a.prompts));
    }
    async listResources(params_20, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResources() called but server does not advertise resources capability - returning empty list"), {
        resources: []
      };
      if (params_20?.cursor !== void 0) return this.request({
        method: "resources/list",
        params: params_20
      }, t);
      let r = await this._serveFromCache("resources/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/list", params_20, t, (s, a) => s.resources.push(...a.resources));
    }
    async listResourceTemplates(params_21, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list"), {
        resourceTemplates: []
      };
      if (params_21?.cursor !== void 0) return this.request({
        method: "resources/templates/list",
        params: params_21
      }, t);
      let r = await this._serveFromCache("resources/templates/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/templates/list", params_21, t, (s, a) => s.resourceTemplates.push(...a.resourceTemplates));
    }
    async _listAllPages(method_9, t, r, s, a) {
      let n = r?.cacheMode === "bypass",
        i = this._cache.captureGeneration(method_9),
        l = await this.request({
          method: method_9,
          ...(t && {
            params: {
              ...t
            }
          })
        }, r),
        c = l.nextCursor,
        d = new Set(),
        m = 1;
      while (c !== void 0 && !d.has(c)) {
        if (this._listMaxPages !== 0 && m >= this._listMaxPages) throw new ws(cs.ListPaginationExceeded, `${method_9}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, {
          method: method_9,
          listMaxPages: this._listMaxPages
        });
        d.add(c);
        let _ = await this.request({
          method: method_9,
          params: {
            ...t,
            cursor: c
          }
        }, r);
        s(l, _), c = _.nextCursor, m++;
      }
      if (delete l.nextCursor, a?.(l), n) return l;
      return await this._cache.write(method_9, l, i, this._freshness(l)), l;
    }
    _freshness(e, params_22) {
      let r = e,
        s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs,
        scope_7 = r.cacheScope === "public" ? "public" : "private";
      return {
        expiresAt: this._cache.now() + Math.min(Math.max(0, s), Hc),
        scope: scope_7,
        params: params_22
      };
    }
    async _serveFromCache(e, t, r) {
      if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
      let s = await this._cache.read(e, t).catch(a => void this._reportStoreError(a));
      if (s !== void 0) {
        if (r?.signal?.aborted) {
          let reason_3 = r.signal.reason;
          throw reason_3 instanceof ws ? reason_3 : new ws(cs.RequestTimeout, String(reason_3));
        }
        return s.value;
      }
    }
    _reportStoreError(e) {
      this.onerror?.(e instanceof Error ? e : Error(String(e)));
    }
    _compileOutputValidator(e) {
      if (!e.outputSchema) return;
      try {
        return {
          ok: !0,
          validator: this._jsonSchemaValidator.getValidator(e.outputSchema)
        };
      } catch (t) {
        return {
          ok: !1,
          compileError: t
        };
      }
    }
    async _resolveXMcpHeaderScan(e, t) {
      let r = t ?? (await this._cache.toolDefinition(e));
      return r === void 0 ? void 0 : rs(r.inputSchema);
    }
    async readResource(params_23, t) {
      let r = await this._serveFromCache("resources/read", params_23.uri, t);
      if (r !== void 0) return r;
      let s = this._cache.captureGeneration("resources/read", params_23.uri),
        a = await this.request({
          method: "resources/read",
          params: params_23
        }, t);
      if (t?.cacheMode !== "bypass") {
        let n = this._freshness(a, params_23.uri);
        if (n.expiresAt > this._cache.now()) await this._cache.write("resources/read", a, s, n);else if (t?.cacheMode === "refresh") await this._cache.evictKey("resources/read", params_23.uri);
      }
      return a;
    }
    async subscribeResource(params_24, t) {
      return this.request({
        method: "resources/subscribe",
        params: params_24
      }, t);
    }
    async unsubscribeResource(params_25, t) {
      return this.request({
        method: "resources/unsubscribe",
        params: params_25
      }, t);
    }
    async listen(notifications, t) {
      if (this.transport === void 0) throw new ws(cs.NotConnected, "Not connected");
      let r = this._negotiatedProtocolVersion;
      if (r === void 0 || !Ae(r)) throw new ws(cs.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, {
        method: "subscriptions/listen",
        protocolVersion: r
      });
      if (t?.signal?.aborted) {
        let reason_4 = t.signal.reason;
        throw reason_4 instanceof ws ? reason_4 : new ws(cs.RequestTimeout, String(reason_4));
      }
      let abortController_4 = new AbortController(),
        a = `listen:${this._nextListenId++}`,
        n = "opening",
        i,
        l,
        c,
        d,
        promise_2 = new Promise((g, p) => {
          c = g, d = p;
        });
      promise_2.catch(() => {});
      let _,
        P = new Promise(g => {
          _ = g;
        }),
        settle = g => {
          if (n === "closed") return;
          let p = n === "opening";
          if (i !== void 0) clearTimeout(i), i = void 0;
          if ("ack" in g) {
            n = "open", c(g.ack);
            return;
          }
          if (n = "closed", l !== void 0) t?.signal?.removeEventListener("abort", l);
          if (this._listenState.delete(a), abortController_4.abort(), _(g.cause), p) d(g.error ?? new ws(cs.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
        },
        v = async () => {
          abortController_4.abort(), await this.notification({
            method: "notifications/cancelled",
            params: {
              requestId: a
            }
          }).catch(() => {});
        },
        close = async () => {
          if (n === "closed") return;
          settle({
            cause: "local"
          }), await v();
        };
      this._listenState.set(a, {
        settle: settle
      });
      let timeout_3 = t?.timeout ?? Bt;
      if (i = setTimeout(() => {
        settle({
          cause: "remote",
          error: new ws(cs.RequestTimeout, "subscriptions/listen ack timed out", {
            timeout: timeout_3
          })
        }), v().catch(() => {});
      }, timeout_3), t?.signal) {
        let g = t.signal;
        l = () => {
          if (n === "closed") return;
          let reason_5 = g.reason;
          settle({
            cause: "local",
            error: reason_5 instanceof Error ? reason_5 : Error(String(reason_5 ?? "Aborted"))
          }), v().catch(() => {});
        }, g.addEventListener("abort", l, {
          once: !0
        });
      }
      let h = {
        jsonrpc: "2.0",
        id: a,
        method: "subscriptions/listen",
        params: {
          _meta: {
            ...this._outboundMetaEnvelope()
          },
          notifications: notifications
        }
      };
      try {
        await this.transport.send(h, {
          requestSignal: abortController_4.signal,
          onRequestStreamEnd: () => settle({
            cause: "remote",
            error: Error("subscriptions/listen: stream ended")
          })
        });
      } catch (g) {
        settle({
          cause: "remote",
          error: g instanceof Error ? g : Error(String(g))
        });
      }
      return {
        honoredFilter: await promise_2,
        close: close,
        closed: P
      };
    }
    get autoOpenedSubscription() {
      return this._autoOpenedSubscription;
    }
    _onnotification(e, t) {
      let r = Object.hasOwn(oo, e.method) ? oo[e.method] : void 0;
      if (e.method === "notifications/resources/updated") {
        let s = e.params?.uri;
        if (typeof s === "string") this._cache.evictKey("resources/read", s);
      } else if (r !== void 0) for (let s of r) this._cache.evict(s);
      if (e.method === "notifications/subscriptions/acknowledged") {
        let s = e.params?._meta?.[j5t],
          a = typeof s === "string" ? this._listenState.get(s) : void 0;
        if (a !== void 0) {
          let n = this._wireCodec().validateNotification("notifications/subscriptions/acknowledged", e);
          a.settle({
            ack: n.ok ? n.value.params.notifications : {}
          });
          return;
        }
      }
      if (e.method === "notifications/cancelled") {
        let s = e.params?.requestId,
          a = typeof s === "string" ? this._listenState.get(s) : void 0;
        if (a !== void 0) {
          a.settle({
            cause: "remote",
            error: Error("subscriptions/listen: server cancelled the subscription")
          });
          return;
        }
      }
      super._onnotification(e, t);
    }
    _onresponse(e) {
      let t = e.id,
        r = typeof t === "string" ? this._listenState.get(t) : void 0;
      if (r !== void 0) {
        if (ywe(e)) r.settle({
          cause: "remote",
          error: fl.fromError(e.error.code, e.error.message, e.error.data)
        });else r.settle({
          cause: "graceful",
          error: new ws(cs.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging")
        });
        return;
      }
      super._onresponse(e);
    }
    _onclose() {
      if (this._listenState.size > 0) {
        let error_8 = new ws(cs.ConnectionClosed, "Connection closed");
        for (let t of this._listenState.values()) t.settle({
          cause: "remote",
          error: error_8
        });
        this._listenState.clear();
      }
      super._onclose();
    }
    async callTool(params_26, t) {
      let r = this.getProtocolEra() === "modern" && Za() !== "browser",
        s = async () => {
          if (!r) return t;
          let c;
          try {
            c = await this._resolveXMcpHeaderScan(params_26.name, t?.toolDefinition);
          } catch (error) {
            this._reportStoreError(error);
          }
          if (!c?.valid || c.declarations.length === 0) return t;
          let d = Sa(c.declarations, params_26.arguments);
          return Object.keys(d).length === 0 ? t : {
            ...t,
            headers: {
              ...t?.headers,
              ...d
            }
          };
        },
        a = t?.toolDefinition === void 0 ? await this._cache.outputValidator(params_26.name, c => this._compileOutputValidator(c)).catch(c => void this._reportStoreError(c)) : this._compileOutputValidator(t.toolDefinition),
        n = () => {
          if (a === void 0 || a.ok) return;
          let compileError = a.compileError,
            d = (compileError instanceof Error ? compileError.message : String(compileError)).slice(0, 200);
          throw new fl(Ns.InvalidParams, `Tool '${params_26.name}' has an invalid outputSchema: ${d}`);
        };
      n();
      let i;
      try {
        i = await this.request({
          method: "tools/call",
          params: params_26
        }, await s());
      } catch (error) {
        let d = error instanceof fl && error.code === mt;
        if (!r || !d || t?.toolDefinition !== void 0) throw error;
        let m = {
          signal: t?.signal,
          timeout: t?.timeout,
          cacheMode: "refresh"
        };
        await this._cache.evict("tools/list"), await this.listTools(void 0, m).catch(_ => this._reportStoreError(_)), a = await this._cache.outputValidator(params_26.name, _ => this._compileOutputValidator(_)).catch(_ => void this._reportStoreError(_)), n(), i = await this.request({
          method: "tools/call",
          params: params_26
        }, await s());
      }
      if (t?.allowTask === !0 && i.resultType === "task") return i;
      let l = a !== void 0 && a.ok ? a.validator : void 0;
      if (l) {
        if (i.structuredContent === void 0 && !i.isError) throw new fl(Ns.InvalidRequest, `Tool ${params_26.name} has an output schema but did not return structured content`);
        if (i.structuredContent !== void 0 && !i.isError) try {
          let c = l(i.structuredContent);
          if (!c.valid) throw new fl(Ns.InvalidParams, `Structured content does not match the tool's output schema: ${c.errorMessage}`);
        } catch (error) {
          if (error instanceof fl) throw error;
          throw new fl(Ns.InvalidParams, `Failed to validate structured content: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      return i;
    }
    async listTools(params_27, t) {
      if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities) return console.debug("Client.listTools() called but server does not advertise tools capability - returning empty list"), {
        tools: []
      };
      if (params_27?.cursor !== void 0) {
        let s = await this.request({
          method: "tools/list",
          params: params_27
        }, t);
        return this._excludeInvalidXMcpHeaderTools(s), s;
      }
      let r = await this._serveFromCache("tools/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("tools/list", params_27, t, (s, a) => s.tools.push(...a.tools), s => this._excludeInvalidXMcpHeaderTools(s));
    }
    _excludeInvalidXMcpHeaderTools(e) {
      if (this.getProtocolEra() !== "modern" || !this.transport || Qa(this.transport) === "stdio") return;
      let t = e.tools.filter(item => {
        let s = rs(item.inputSchema);
        if (!s.valid) return console.warn(`[mcp-sdk] excluding tool '${item.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${s.reason}`), !1;
        return !0;
      });
      if (t.length !== e.tools.length) e.tools = t;
    }
    _setupListChangedHandler(e, t, r, s) {
      let a = Pr(s8t, r);
      if (!a.success) throw Error(`Invalid ${e} listChanged options: ${a.error.message}`);
      if (typeof r.onChanged !== "function") throw TypeError(`Invalid ${e} listChanged options: onChanged must be a function`);
      let {
          autoRefresh: autoRefresh,
          debounceMs: debounceMs
        } = a.data,
        {
          onChanged: onChanged
        } = r,
        c = async () => {
          if (!autoRefresh) {
            onChanged(null, null);
            return;
          }
          try {
            onChanged(null, await s());
          } catch (error) {
            onChanged(error instanceof Error ? error : Error(String(error)), null);
          }
        },
        d = () => {
          if (debounceMs) {
            let m = this._listChangedDebounceTimers.get(e);
            if (m) clearTimeout(m);
            let _ = setTimeout(c, debounceMs);
            this._listChangedDebounceTimers.set(e, _);
          } else c();
        };
      this.setNotificationHandler(t, d);
    }
    async sendRootsListChanged() {
      return this.notification({
        method: "notifications/roots/list_changed"
      });
    }
  };
var zxn = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SseError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Te(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Te(this, e);
    }
    constructor(e, t, r) {
      super(`SSE error: ${t}`);
      this.code = e, this.event = r, et(this, new.target);
    }
  },
  U5t = class {
    _eventSource;
    _endpoint;
    _abortController;
    _url;
    _resourceMetadataUrl;
    _scope;
    _eventSourceInit;
    _requestInit;
    _authProvider;
    _oauthProvider;
    _skipIssuerMetadataValidation;
    _fetch;
    _fetchWithInit;
    _protocolVersion;
    onclose;
    onerror;
    onmessage;
    constructor(e, t) {
      if (this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = t?.eventSourceInit, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, lo(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = uo(t.authProvider, {
        skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
      });else this._authProvider = t?.authProvider;
      this._fetch = t?.fetch, this._fetchWithInit = eEt(t?.fetch, t?.requestInit);
    }
    _last401Response;
    async _commonHeaders() {
      let e = {},
        t = await this._authProvider?.token();
      if (t) e.Authorization = `Bearer ${t}`;
      if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
      let r = Jt(this._requestInit?.headers);
      return new Headers({
        ...e,
        ...r
      });
    }
    _startOrAuth() {
      let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
      return new Promise((t, r) => {
        this._eventSource = new M0e(this._url.href, {
          ...this._eventSourceInit,
          fetch: async (s, a) => {
            let headers_4 = await this._commonHeaders();
            headers_4.set("Accept", "text/event-stream");
            let i = await e(s, {
              ...a,
              headers: headers_4
            });
            if (i.status === 401) {
              if (this._last401Response = i, i.headers.has("www-authenticate")) {
                let {
                  resourceMetadataUrl: resourceMetadataUrl_5,
                  scope: scope_8
                } = r0e(i);
                this._resourceMetadataUrl = resourceMetadataUrl_5, this._scope = scope_8;
              }
            }
            return i;
          }
        }), this._abortController = new AbortController(), this._eventSource.onerror = s => {
          if (s.code === 401 && this._authProvider) {
            if (this._authProvider.onUnauthorized && this._last401Response) {
              let i = this._last401Response;
              this._last401Response = void 0, this._eventSource?.close(), this._authProvider.onUnauthorized({
                response: i,
                serverUrl: this._url,
                fetchFn: this._fetchWithInit
              }).then(() => this._startOrAuth().then(t, r), l => {
                this.onerror?.(l), r(l);
              });
              return;
            }
            let n = new kT();
            r(n), this.onerror?.(n);
            return;
          }
          let a = new zxn(s.code, s.message, s);
          r(a), this.onerror?.(a);
        }, this._eventSource.onopen = () => {}, this._eventSource.addEventListener("endpoint", s => {
          let a = s;
          try {
            if (this._endpoint = new URL(a.data, this._url), this._endpoint.origin !== this._url.origin) throw Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
          } catch (error) {
            r(error), this.onerror?.(error), this.close();
            return;
          }
          t();
        }), this._eventSource.onmessage = s => {
          let a = s,
            n;
          try {
            n = T4.parse(JSON.parse(a.data));
          } catch (error) {
            this.onerror?.(error);
            return;
          }
          this.onmessage?.(n);
        };
      });
    }
    async start() {
      if (this._eventSource) throw Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
      return await this._startOrAuth();
    }
    async finishAuth(e, t) {
      if (!this._oauthProvider) throw new kT("finishAuth requires an OAuthClientProvider");
      let {
        authorizationCode: authorizationCode_6,
        iss: iss_7
      } = await ho(e, t, this._oauthProvider, this._url, {
        fetchFn: this._fetchWithInit,
        resourceMetadataUrl: this._resourceMetadataUrl
      });
      if ((await Tet(this._oauthProvider, {
        serverUrl: this._url,
        authorizationCode: authorizationCode_6,
        iss: iss_7,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
        skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
      })) !== "AUTHORIZED") throw new kT("Failed to authorize");
    }
    async close() {
      this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
    }
    async send(e) {
      return this._send(e, !1);
    }
    async _send(e, t) {
      if (!this._endpoint) throw new ws(cs.NotConnected, "Not connected");
      try {
        let headers_5 = await this._commonHeaders();
        headers_5.set("content-type", "application/json");
        let s = {
            ...this._requestInit,
            method: "POST",
            headers: headers_5,
            body: JSON.stringify(e),
            signal: this._abortController?.signal
          },
          response = await (this._fetch ?? fetch)(this._endpoint, s);
        if (!response.ok) {
          if (response.status === 401 && this._authProvider) {
            if (response.headers.has("www-authenticate")) {
              let {
                resourceMetadataUrl: resourceMetadataUrl_6,
                scope: scope_9
              } = r0e(response);
              this._resourceMetadataUrl = resourceMetadataUrl_6, this._scope = scope_9;
            }
            if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({
              response: response,
              serverUrl: this._url,
              fetchFn: this._fetchWithInit
            }), await response.text?.().catch(() => {}), this._send(e, !0);
            if (await response.text?.().catch(() => {}), t) throw new aw(cs.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
              status: 401,
              statusText: response.statusText
            });
            throw new kT();
          }
          let n = await response.text?.().catch(() => null);
          throw Error(`Error POSTing to endpoint (HTTP ${response.status}): ${n}`);
        }
        await response.text?.().catch(() => {});
      } catch (error) {
        throw this.onerror?.(error), error;
      }
    }
    setProtocolVersion(e) {
      this._protocolVersion = e;
    }
  },
  hl = 1,
  ml = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
  },
  pl = new Set(["authorization", "content-type", "mcp-protocol-version", "mcp-method", "mcp-name", "mcp-session-id"]);
function no(e, t) {
  if (typeof AbortSignal.any === "function") return AbortSignal.any([e, t]);
  let abortController_5 = new AbortController();
  if (e.aborted) return abortController_5.abort(e.reason), abortController_5.signal;
  if (t.aborted) return abortController_5.abort(t.reason), abortController_5.signal;
  let s = () => {
    e.removeEventListener("abort", a), t.removeEventListener("abort", n);
  };
  function a() {
    s(), abortController_5.abort(e.reason);
  }
  function n() {
    s(), abortController_5.abort(t.reason);
  }
  return e.addEventListener("abort", a, {
    once: !0
  }), t.addEventListener("abort", n, {
    once: !0
  }), abortController_5.signal;
}
var B5t = class {
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _sessionId;
  _reconnectionOptions;
  _protocolVersion;
  _onInsufficientScope;
  _maxStepUpRetries;
  _serverRetryMs;
  _reconnectionScheduler;
  _cancelReconnection;
  onclose;
  onerror;
  onmessage;
  hasPerRequestStream = !0;
  constructor(e, t) {
    if (this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, lo(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = uo(t.authProvider, {
      skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
    });else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = eEt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._protocolVersion = t?.protocolVersion, this._reconnectionOptions = t?.reconnectionOptions ?? ml, this._reconnectionScheduler = t?.reconnectionScheduler, this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize", this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? hl);
  }
  async _stepUpAuthorize(e, t) {
    if (this._onInsufficientScope === "throw") throw new Ga({
      requiredScope: e.scope,
      resourceMetadataUrl: e.resourceMetadataUrl,
      errorDescription: e.errorDescription
    });
    if (!this._oauthProvider) throw new Ga({
      requiredScope: e.scope,
      resourceMetadataUrl: e.resourceMetadataUrl,
      errorDescription: e.errorDescription
    });
    if (t >= this._maxStepUpRetries) throw new aw(cs.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, {
      status: 403,
      statusText: e.statusText ?? "Forbidden",
      text: e.text
    });
    if (e.resourceMetadataUrl) this._resourceMetadataUrl = e.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(),
      scope_10 = us(this._scope, r?.scope, e.scope);
    this._scope = scope_10;
    let forceReauthorization_2 = wc(scope_10, r?.scope);
    return Tet(this._oauthProvider, {
      serverUrl: this._url,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: scope_10,
      forceReauthorization: forceReauthorization_2,
      fetchFn: this._fetchWithInit,
      skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
    });
  }
  async _commonHeaders() {
    let e = {},
      t = await this._authProvider?.token();
    if (t) e.Authorization = `Bearer ${t}`;
    if (this._sessionId) e["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
    let r = Jt(this._requestInit?.headers);
    return new Headers({
      ...e,
      ...r
    });
  }
  _applyBodyDerivedHeaders(e, t) {
    if (Array.isArray(t) || !R7(t)) return;
    let r = t.params?._meta?.[s0e];
    if (typeof r !== "string") return;
    e.set("mcp-protocol-version", r), e.set("mcp-method", t.method);
    let params_28 = t.params,
      a = t.method === "resources/read" ? typeof params_28?.uri === "string" ? params_28.uri : void 0 : typeof params_28?.name === "string" ? params_28.name : void 0;
    if (a !== void 0) e.set("mcp-name", Er(a));
    let n = t.method.startsWith("tasks/") && typeof params_28?.taskId === "string" ? params_28.taskId : void 0;
    if (n !== void 0) e.set("mcp-name", Er(n));
  }
  _isModernEnvelopedRequest(e) {
    if (Array.isArray(e) || !R7(e)) return !1;
    let t = e.params?._meta?.[s0e];
    return typeof t === "string" && Ae(t);
  }
  async _startOrAuthSse(e, t = !1, r = 0) {
    let {
        resumptionToken: resumptionToken_2,
        requestSignal: requestSignal
      } = e,
      n = () => this._abortController?.signal.aborted === !0 || requestSignal?.aborted === !0;
    try {
      let headers_6 = await this._commonHeaders(),
        l = [...(headers_6.get("accept")?.split(",").map(_ => _.trim().toLowerCase()) ?? []), "text/event-stream"];
      if (headers_6.set("accept", [...new Set(l)].join(", ")), resumptionToken_2) headers_6.set("last-event-id", resumptionToken_2);
      let c = this._abortController?.signal,
        signal_3 = requestSignal !== void 0 && c !== void 0 ? no(c, requestSignal) : requestSignal ?? c,
        response_2 = await (this._fetch ?? fetch)(this._url, {
          ...this._requestInit,
          method: "GET",
          headers: headers_6,
          signal: signal_3
        });
      if (!response_2.ok) {
        if (response_2.status === 401 && this._authProvider) {
          if (response_2.headers.has("www-authenticate")) {
            let {
              resourceMetadataUrl: resourceMetadataUrl_7,
              scope: scope_11
            } = r0e(response_2);
            this._resourceMetadataUrl = resourceMetadataUrl_7, this._scope = us(this._scope, scope_11);
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({
            response: response_2,
            serverUrl: this._url,
            fetchFn: this._fetchWithInit
          }), await response_2.text?.().catch(() => {}), this._startOrAuthSse(e, !0, r);
          if (await response_2.text?.().catch(() => {}), t) throw new aw(cs.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
            status: 401,
            statusText: response_2.statusText
          });
          throw new kT();
        }
        if (response_2.status === 403) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_8,
            scope: scope_12,
            error: error_9,
            errorDescription: errorDescription_2
          } = r0e(response_2);
          if (error_9 === "insufficient_scope") {
            let text = await response_2.text?.().catch(() => null);
            if ((await this._stepUpAuthorize({
              scope: scope_12,
              resourceMetadataUrl: resourceMetadataUrl_8,
              errorDescription: errorDescription_2,
              statusText: response_2.statusText,
              text: text
            }, r)) !== "AUTHORIZED") throw new kT();
            return this._startOrAuthSse(e, t, r + 1);
          }
        }
        if (await response_2.text?.().catch(() => {}), response_2.status === 405) {
          e.onRequestStreamEnd?.();
          return;
        }
        throw new aw(cs.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${response_2.statusText}`, {
          status: response_2.status,
          statusText: response_2.statusText
        });
      }
      this._handleSseStream(response_2.body, e, !0);
    } catch (error) {
      if (!n()) this.onerror?.(error);
      throw error;
    }
  }
  _getNextReconnectionDelay(e) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let initialReconnectionDelay = this._reconnectionOptions.initialReconnectionDelay,
      reconnectionDelayGrowFactor = this._reconnectionOptions.reconnectionDelayGrowFactor,
      maxReconnectionDelay = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(initialReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, e), maxReconnectionDelay);
  }
  _scheduleReconnection(e, t = 0) {
    let maxRetries = this._reconnectionOptions.maxRetries;
    if (t >= maxRetries) {
      this.onerror?.(Error(`Maximum reconnection attempts (${maxRetries}) exceeded.`)), e.onRequestStreamEnd?.();
      return;
    }
    let s = this._getNextReconnectionDelay(t),
      a = () => {
        if (this._cancelReconnection = void 0, this._abortController?.signal.aborted || e.requestSignal?.aborted) return;
        this._startOrAuthSse(e).catch(n => {
          if (this._abortController?.signal.aborted || e.requestSignal?.aborted) return;
          this.onerror?.(Error(`Failed to reconnect SSE stream: ${n instanceof Error ? n.message : String(n)}`));
          try {
            this._scheduleReconnection(e, t + 1);
          } catch (error) {
            this.onerror?.(error instanceof Error ? error : Error(String(error)));
          }
        });
      };
    if (this._reconnectionScheduler) {
      let n = this._reconnectionScheduler(a, s, t);
      this._cancelReconnection = typeof n === "function" ? n : void 0;
    } else {
      let n = setTimeout(a, s);
      this._cancelReconnection = () => clearTimeout(n);
    }
  }
  _handleSseStream(e, t, r) {
    if (!e) {
      t.onRequestStreamEnd?.();
      return;
    }
    let {
        onresumptiontoken: onresumptiontoken_2,
        replayMessageId: replayMessageId,
        requestSignal: requestSignal_2,
        onRequestStreamEnd: onRequestStreamEnd
      } = t,
      l = () => this._abortController?.signal.aborted === !0 || requestSignal_2?.aborted === !0,
      resumptionToken_3,
      d = !1,
      m = !1;
    (async () => {
      try {
        let P = e.pipeThrough(new TextDecoderStream()).pipeThrough(new tTt({
          onRetry: T => {
            this._serverRetryMs = T;
          }
        })).getReader();
        while (!0) {
          let {
            value: value_4,
            done: done
          } = await P.read();
          if (done) break;
          if (value_4.id) resumptionToken_3 = value_4.id, d = !0, onresumptiontoken_2?.(value_4.id);
          if (!value_4.data) continue;
          if (!value_4.event || value_4.event === "message") try {
            let y = T4.parse(JSON.parse(value_4.data));
            if (hwe(y) || ywe(y)) {
              if (m = !0, replayMessageId !== void 0) y.id = replayMessageId;
            }
            this.onmessage?.(y);
          } catch (error) {
            this.onerror?.(error);
          }
        }
        if ((r || d) && !m && this._abortController && !l()) this._scheduleReconnection({
          resumptionToken: resumptionToken_3,
          onresumptiontoken: onresumptiontoken_2,
          replayMessageId: replayMessageId,
          requestSignal: requestSignal_2,
          onRequestStreamEnd: onRequestStreamEnd
        }, 0);else if (!l()) onRequestStreamEnd?.();
      } catch (error) {
        if (l()) return;
        if (this.onerror?.(Error(`SSE stream disconnected: ${error}`)), (r || d) && !m && this._abortController && !l()) try {
          this._scheduleReconnection({
            resumptionToken: resumptionToken_3,
            onresumptiontoken: onresumptiontoken_2,
            replayMessageId: replayMessageId,
            requestSignal: requestSignal_2,
            onRequestStreamEnd: onRequestStreamEnd
          }, 0);
        } catch (error) {
          this.onerror?.(Error(`Failed to reconnect: ${error instanceof Error ? error.message : String(error)}`)), onRequestStreamEnd?.();
        } else onRequestStreamEnd?.();
      }
    })();
  }
  async start() {
    if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  async finishAuth(e, t) {
    if (!this._oauthProvider) throw new kT("finishAuth requires an OAuthClientProvider");
    let {
      authorizationCode: authorizationCode_7,
      iss: iss_8
    } = await ho(e, t, this._oauthProvider, this._url, {
      fetchFn: this._fetchWithInit,
      resourceMetadataUrl: this._resourceMetadataUrl
    });
    if ((await Tet(this._oauthProvider, {
      serverUrl: this._url,
      authorizationCode: authorizationCode_7,
      iss: iss_8,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit,
      skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
    })) !== "AUTHORIZED") throw new kT("Failed to authorize");
  }
  async close() {
    try {
      this._cancelReconnection?.();
    } finally {
      this._cancelReconnection = void 0, this._abortController?.abort(), this.onclose?.();
    }
  }
  async send(e, t) {
    return this._send(e, t, !1);
  }
  async _send(e, t, r, s = 0) {
    try {
      let {
        resumptionToken: resumptionToken_4,
        onresumptiontoken: onresumptiontoken_3
      } = t || {};
      if (resumptionToken_4) {
        this._startOrAuthSse({
          resumptionToken: resumptionToken_4,
          replayMessageId: R7(e) ? e.id : void 0,
          requestSignal: t?.requestSignal
        }).catch(f => this.onerror?.(f));
        return;
      }
      let headers_7 = await this._commonHeaders();
      this._applyBodyDerivedHeaders(headers_7, e);
      let l = Array.isArray(e) ? e.some(item => ts(item)) : ts(e);
      if (l) headers_7.delete("mcp-session-id");
      if (t?.headers !== void 0) for (let [f, h] of Object.entries(t.headers)) {
        if (pl.has(f.toLowerCase())) continue;
        headers_7.set(f, h);
      }
      headers_7.set("content-type", "application/json");
      let c = [...(headers_7.get("accept")?.split(",").map(f => f.trim().toLowerCase()) ?? []), "application/json", "text/event-stream"];
      headers_7.set("accept", [...new Set(c)].join(", "));
      let d = this._abortController?.signal,
        signal_4 = t?.requestSignal !== void 0 && d !== void 0 ? no(d, t.requestSignal) : t?.requestSignal ?? d,
        _ = {
          ...this._requestInit,
          method: "POST",
          headers: headers_7,
          body: JSON.stringify(e),
          signal: signal_4
        },
        response_3 = await (this._fetch ?? fetch)(this._url, _);
      if (l && response_3.ok) this._sessionId = response_3.headers.get("mcp-session-id") || void 0;
      if (!response_3.ok) {
        if (response_3.status === 401 && this._authProvider) {
          if (response_3.headers.has("www-authenticate")) {
            let {
              resourceMetadataUrl: resourceMetadataUrl_9,
              scope: scope_13
            } = r0e(response_3);
            this._resourceMetadataUrl = resourceMetadataUrl_9, this._scope = us(this._scope, scope_13);
          }
          if (this._authProvider.onUnauthorized && !r) return await this._authProvider.onUnauthorized({
            response: response_3,
            serverUrl: this._url,
            fetchFn: this._fetchWithInit
          }), await response_3.text?.().catch(() => {}), this._send(e, t, !0, s);
          if (await response_3.text?.().catch(() => {}), r) throw new aw(cs.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
            status: 401,
            statusText: response_3.statusText
          });
          throw new kT();
        }
        let text_2 = await response_3.text?.().catch(() => null);
        if (response_3.status === 403) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_10,
            scope: scope_14,
            error: error_10,
            errorDescription: errorDescription_3
          } = r0e(response_3);
          if (error_10 === "insufficient_scope") {
            if ((await this._stepUpAuthorize({
              scope: scope_14,
              resourceMetadataUrl: resourceMetadataUrl_10,
              errorDescription: errorDescription_3,
              statusText: response_3.statusText,
              text: text_2
            }, s)) !== "AUTHORIZED") throw new kT();
            return this._send(e, t, r, s + 1);
          }
        }
        if (response_3.status === 400 && typeof text_2 === "string" && this._isModernEnvelopedRequest(e)) try {
          let h = T4.parse(JSON.parse(text_2)),
            g = (Array.isArray(e) ? e : [e]).filter(item => R7(item));
          if (ywe(h) && g.some(item => item.id === h.id)) {
            this.onmessage?.(h);
            return;
          }
        } catch {}
        throw new aw(cs.ClientHttpNotImplemented, `Error POSTing to endpoint: ${text_2}`, {
          status: response_3.status,
          statusText: response_3.statusText,
          text: text_2
        });
      }
      if (response_3.status === 202) {
        if (await response_3.text?.().catch(() => {}), ma(e)) this._startOrAuthSse({
          resumptionToken: void 0
        }).catch(f => this.onerror?.(f));
        return;
      }
      let T = (Array.isArray(e) ? e : [e]).some(item => "method" in item && "id" in item && item.id !== void 0),
        contentType = response_3.headers.get("content-type"),
        y = Pa(contentType);
      if (T) {
        if (y === "text/event-stream") this._handleSseStream(response_3.body, {
          onresumptiontoken: onresumptiontoken_3,
          requestSignal: t?.requestSignal,
          onRequestStreamEnd: t?.onRequestStreamEnd
        }, !1);else if (y === "application/json") {
          let f = await response_3.json(),
            h = Array.isArray(f) ? f.map(item => T4.parse(item)) : [T4.parse(f)];
          for (let g of h) this.onmessage?.(g);
        } else throw await response_3.text?.().catch(() => {}), new ws(cs.ClientHttpUnexpectedContent, `Unexpected content type: ${contentType}`, {
          contentType: contentType
        });
      } else await response_3.text?.().catch(() => {});
    } catch (error) {
      if (t?.requestSignal?.aborted !== !0) this.onerror?.(error);
      throw error;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let headers_8 = await this._commonHeaders(),
        t = {
          ...this._requestInit,
          method: "DELETE",
          headers: headers_8,
          signal: this._abortController?.signal
        },
        r = await (this._fetch ?? fetch)(this._url, t);
      if (await r.text?.().catch(() => {}), !r.ok && r.status !== 405) throw new aw(cs.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, {
        status: r.status,
        statusText: r.statusText
      });
      this._sessionId = void 0;
    } catch (error) {
      throw this.onerror?.(error), error;
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(resumptionToken_5, t) {
    await this._startOrAuthSse({
      resumptionToken: resumptionToken_5,
      onresumptiontoken: t?.onresumptiontoken
    });
  }
};
export { s8, MU, cs, ws, aw, Ns, fl, R7, $xn, hwe, ywe, fpr, Uxn, mpr, eEt, tEt, d2e, Bxn, kT, Tet, r0e, jxn, Cet, Wxn, gpr, gio, hpr, ypr, zxn, U5t, B5t };