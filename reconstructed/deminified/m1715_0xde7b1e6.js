// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ej, n_e } from "B:/~BUN/root/chunk-p6k2cbn2.js";
import { rj, o, D8e, E, M, uf, eK, ae, C, u, ut, $e, Qo, HJ, fe, z, A, Bs, vC, Bi } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L8e } from "B:/~BUN/root/chunk-yvjds69w.js";
var nEt = "2025-11-25";
var o0e = [nEt, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  _pr = "io.modelcontextprotocol/related-task",
  s0e = "io.modelcontextprotocol/protocolVersion",
  rEt = "io.modelcontextprotocol/clientInfo",
  i0e = "io.modelcontextprotocol/serverInfo",
  Ret = "io.modelcontextprotocol/clientCapabilities",
  j5t = "io.modelcontextprotocol/subscriptionId",
  oEt = "io.modelcontextprotocol/logLevel";
var a = "2.0";
var hio = -32601;
var u2e = vC(() => $e([o(), E(), M(), uf(), fe(o(), u2e), C(u2e)])),
  SO = fe(o(), u2e),
  bpr = C(u2e),
  progressToken = $e([o(), E().int()]),
  z5t = o(),
  Gxn = u({
    ttl: E().optional()
  }),
  Aet = u({
    taskId: o()
  }),
  G5t = ut({
    progressToken: progressToken.optional(),
    [_pr]: Aet.optional()
  }),
  DU = u({
    _meta: G5t.optional()
  }),
  xet = DU.extend({
    task: Gxn.optional()
  }),
  wO = u({
    method: o(),
    params: DU.loose().optional()
  }),
  vG = u({
    _meta: G5t.optional()
  }),
  kG = u({
    method: o(),
    params: vG.loose().optional()
  }),
  V5t = ut({
    get [i0e]() {
      return l0e.optional().catch(void 0);
    }
  }),
  result = ut({
    _meta: V5t.optional()
  }),
  id = $e([o(), E().int()]),
  q5t = u({
    jsonrpc: A(a),
    id: id,
    ...wO.shape
  }).strict(),
  K5t = u({
    jsonrpc: A(a),
    ...kG.shape
  }).strict(),
  sEt = u({
    jsonrpc: A(a),
    id: id,
    result: result
  }).strict(),
  iEt = u({
    jsonrpc: A(a),
    id: id.optional(),
    error: u({
      code: E().int(),
      message: o(),
      data: ae().optional()
    })
  }).strict(),
  T4 = $e([q5t, K5t, sEt, iEt]),
  Spr = $e([sEt, iEt]),
  Y5t = result.strict(),
  params = vG.extend({
    requestId: id.optional(),
    reason: o().optional()
  }),
  X5t = kG.extend({
    method: A("notifications/cancelled"),
    params: params
  }),
  qxn = u({
    src: o(),
    mimeType: o().optional(),
    sizes: C(o()).optional(),
    theme: z(["light", "dark"]).optional()
  }),
  f2e = u({
    icons: C(qxn).optional()
  }),
  a0e = u({
    name: o(),
    title: o().optional()
  }),
  l0e = a0e.extend({
    ...a0e.shape,
    ...f2e.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  r = HJ(u({
    applyDefaults: M().optional()
  }), SO),
  c = Bi(e => {
    if (e && typeof e === "object" && !Array.isArray(e) && Object.keys(e).length === 0) return {
      form: {}
    };
    return e;
  }, HJ(u({
    form: r.optional(),
    url: SO.optional()
  }), SO.optional())),
  Kxn = ut({
    list: SO.optional(),
    cancel: SO.optional(),
    requests: ut({
      sampling: ut({
        createMessage: SO.optional()
      }).optional(),
      elicitation: ut({
        create: SO.optional()
      }).optional()
    }).optional()
  }),
  Yxn = ut({
    list: SO.optional(),
    cancel: SO.optional(),
    requests: ut({
      tools: ut({
        call: SO.optional()
      }).optional()
    }).optional()
  }),
  capabilities = u({
    experimental: fe(o(), SO).optional(),
    sampling: u({
      context: SO.optional(),
      tools: SO.optional()
    }).optional(),
    elicitation: c.optional(),
    roots: u({
      listChanged: M().optional()
    }).optional(),
    tasks: Kxn.optional(),
    extensions: fe(o(), SO).optional()
  }),
  params_2 = DU.extend({
    protocolVersion: o(),
    capabilities: capabilities,
    clientInfo: l0e
  }),
  J5t = wO.extend({
    method: A("initialize"),
    params: params_2
  }),
  capabilities_2 = u({
    experimental: fe(o(), SO).optional(),
    logging: SO.optional(),
    completions: SO.optional(),
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
    tasks: Yxn.optional(),
    extensions: fe(o(), SO).optional()
  }),
  c0e = result.extend({
    protocolVersion: o(),
    capabilities: capabilities_2,
    serverInfo: l0e,
    instructions: o().optional()
  }),
  Q5t = kG.extend({
    method: A("notifications/initialized"),
    params: vG.optional()
  }),
  Qxn = wO.extend({
    method: A("server/discover"),
    params: DU.optional()
  }),
  _we = result.extend({
    supportedVersions: C(o()),
    capabilities: capabilities_2,
    instructions: o().optional()
  }),
  Z5t = wO.extend({
    method: A("ping"),
    params: DU.optional()
  }),
  Zxn = u({
    progress: E(),
    total: Bs(E()),
    message: Bs(o())
  }),
  params_3 = u({
    ...vG.shape,
    ...Zxn.shape,
    progressToken: progressToken
  }),
  e8t = kG.extend({
    method: A("notifications/progress"),
    params: params_3
  }),
  tPn = DU.extend({
    cursor: z5t.optional()
  }),
  g2e = wO.extend({
    params: tPn.optional()
  }),
  h2e = result.extend({
    nextCursor: z5t.optional()
  }),
  t8t = u({
    uri: o(),
    mimeType: Bs(o()),
    _meta: fe(o(), ae()).optional()
  }),
  n8t = t8t.extend({
    text: o()
  }),
  s = o().refine(e => {
    try {
      return atob(e), !0;
    } catch {
      return !1;
    }
  }, {
    message: "Invalid Base64 string"
  }),
  r8t = t8t.extend({
    blob: s
  }),
  role = z(["user", "assistant"]),
  d0e = u({
    audience: C(role).optional(),
    priority: E().min(0).max(1).optional(),
    lastModified: rj({
      offset: !0
    }).optional()
  }),
  _2e = u({
    ...a0e.shape,
    ...f2e.shape,
    uri: o(),
    description: Bs(o()),
    mimeType: Bs(o()),
    size: Bs(E()),
    annotations: d0e.optional(),
    _meta: Bs(ut({}))
  }),
  Pet = u({
    ...a0e.shape,
    ...f2e.shape,
    uriTemplate: o(),
    description: Bs(o()),
    mimeType: Bs(o()),
    annotations: d0e.optional(),
    _meta: Bs(ut({}))
  }),
  nPn = g2e.extend({
    method: A("resources/list")
  }),
  bwe = h2e.extend({
    resources: C(_2e)
  }),
  rPn = g2e.extend({
    method: A("resources/templates/list")
  }),
  Iet = h2e.extend({
    resourceTemplates: C(Pet)
  }),
  aEt = DU.extend({
    uri: o()
  }),
  params_4 = aEt,
  sPn = wO.extend({
    method: A("resources/read"),
    params: params_4
  }),
  iPn = result.extend({
    contents: C($e([n8t, r8t]))
  }),
  aPn = kG.extend({
    method: A("notifications/resources/list_changed"),
    params: vG.optional()
  }),
  params_5 = aEt,
  cPn = wO.extend({
    method: A("resources/subscribe"),
    params: params_5
  }),
  params_6 = aEt,
  uPn = wO.extend({
    method: A("resources/unsubscribe"),
    params: params_6
  }),
  notifications = u({
    toolsListChanged: M().optional(),
    promptsListChanged: M().optional(),
    resourcesListChanged: M().optional(),
    resourceSubscriptions: C(o()).optional()
  }),
  params_7 = DU.extend({
    notifications: notifications
  }),
  fPn = wO.extend({
    method: A("subscriptions/listen"),
    params: params_7
  }),
  params_8 = vG.extend({
    notifications: notifications
  }),
  gPn = kG.extend({
    method: A("notifications/subscriptions/acknowledged"),
    params: params_8
  }),
  _meta = V5t.extend({
    [j5t]: id
  }),
  yPn = result.extend({
    _meta: _meta
  }),
  params_9 = vG.extend({
    uri: o()
  }),
  bPn = kG.extend({
    method: A("notifications/resources/updated"),
    params: params_9
  }),
  SPn = u({
    name: o(),
    description: Bs(o()),
    required: Bs(M())
  }),
  Oet = u({
    ...a0e.shape,
    ...f2e.shape,
    description: Bs(o()),
    arguments: Bs(C(SPn)),
    _meta: Bs(ut({}))
  }),
  wPn = g2e.extend({
    method: A("prompts/list")
  }),
  Met = h2e.extend({
    prompts: C(Oet)
  }),
  params_10 = DU.extend({
    name: o(),
    arguments: fe(o(), o()).optional()
  }),
  kPn = wO.extend({
    method: A("prompts/get"),
    params: params_10
  }),
  lEt = u({
    type: A("text"),
    text: o(),
    annotations: d0e.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  cEt = u({
    type: A("image"),
    data: s,
    mimeType: o(),
    annotations: d0e.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  dEt = u({
    type: A("audio"),
    data: s,
    mimeType: o(),
    annotations: d0e.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  EPn = u({
    type: A("tool_use"),
    name: o(),
    id: o(),
    input: fe(o(), ae()),
    _meta: fe(o(), ae()).optional()
  }),
  TPn = u({
    type: A("resource"),
    resource: $e([n8t, r8t]),
    annotations: d0e.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  CPn = _2e.extend({
    type: A("resource_link")
  }),
  content = $e([lEt, cEt, dEt, CPn, TPn]),
  RPn = u({
    role: role,
    content: content
  }),
  APn = result.extend({
    description: o().optional(),
    messages: C(RPn)
  }),
  xPn = kG.extend({
    method: A("notifications/prompts/list_changed"),
    params: vG.optional()
  }),
  PPn = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
  }),
  IPn = u({
    taskSupport: z(["required", "optional", "forbidden"]).optional()
  }),
  b2e = u({
    ...a0e.shape,
    ...f2e.shape,
    description: o().optional(),
    inputSchema: u({
      type: A("object"),
      properties: fe(o(), u2e).optional(),
      required: C(o()).optional()
    }).catchall(ae()),
    outputSchema: ut({
      $schema: o().optional()
    }).optional(),
    annotations: PPn.optional(),
    execution: IPn.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  OPn = g2e.extend({
    method: A("tools/list")
  }),
  u0e = h2e.extend({
    tools: C(b2e)
  }),
  p0e = result.extend({
    content: C(content).default([]),
    structuredContent: ae().optional(),
    isError: M().optional()
  }),
  pEt = p0e.or(result.extend({
    toolResult: ae()
  })),
  params_11 = xet.extend({
    name: o(),
    arguments: fe(o(), ae()).optional()
  }),
  DPn = wO.extend({
    method: A("tools/call"),
    params: params_11
  }),
  LPn = kG.extend({
    method: A("notifications/tools/list_changed"),
    params: vG.optional()
  }),
  s8t = u({
    autoRefresh: M().default(!0),
    debounceMs: E().int().nonnegative().default(300)
  }),
  level = z(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  params_12 = DU.extend({
    level: level
  }),
  HPn = wO.extend({
    method: A("logging/setLevel"),
    params: params_12
  }),
  params_13 = vG.extend({
    level: level,
    logger: o().optional(),
    data: ae()
  }),
  $Pn = kG.extend({
    method: A("notifications/message"),
    params: params_13
  }),
  UPn = u({
    name: o().optional()
  }),
  BPn = u({
    hints: C(UPn).optional(),
    costPriority: E().min(0).max(1).optional(),
    speedPriority: E().min(0).max(1).optional(),
    intelligencePriority: E().min(0).max(1).optional()
  }),
  jPn = u({
    mode: z(["auto", "required", "none"]).optional()
  }),
  WPn = u({
    type: A("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: C(content),
    structuredContent: ae().optional(),
    isError: M().optional(),
    _meta: fe(o(), ae()).optional()
  }),
  content_2 = Qo("type", [lEt, cEt, dEt]),
  Det = Qo("type", [lEt, cEt, dEt, EPn, WPn]),
  GPn = u({
    role: role,
    content: $e([Det, C(Det)]),
    _meta: fe(o(), ae()).optional()
  }),
  params_14 = xet.extend({
    messages: C(GPn),
    modelPreferences: BPn.optional(),
    systemPrompt: o().optional(),
    includeContext: z(["none", "thisServer", "allServers"]).optional(),
    temperature: E().optional(),
    maxTokens: E().int(),
    stopSequences: C(o()).optional(),
    metadata: SO.optional(),
    tools: C(b2e).optional(),
    toolChoice: jPn.optional()
  }),
  qPn = wO.extend({
    method: A("sampling/createMessage"),
    params: params_14
  }),
  KPn = result.extend({
    model: o(),
    stopReason: Bs(z(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: role,
    content: content_2
  }),
  YPn = result.extend({
    model: o(),
    stopReason: Bs(z(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: role,
    content: $e([Det, C(Det)])
  }),
  a8t = u({
    type: A("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
  }),
  fEt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: E().optional(),
    maxLength: E().optional(),
    format: z(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  mEt = u({
    type: z(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: E().optional(),
    maximum: E().optional(),
    default: E().optional()
  }),
  l8t = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    default: o().optional()
  }),
  c8t = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: C(u({
      const: o(),
      title: o()
    })),
    default: o().optional()
  }),
  d8t = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    enumNames: C(o()).optional(),
    default: o().optional()
  }),
  XPn = $e([l8t, c8t]),
  u8t = u({
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
  p8t = u({
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
  JPn = $e([u8t, p8t]),
  QPn = $e([d8t, XPn, JPn]),
  f8t = $e([QPn, a8t, fEt, mEt]),
  gEt = xet.extend({
    mode: A("form").optional(),
    message: o(),
    requestedSchema: u({
      type: A("object"),
      properties: fe(o(), f8t),
      required: C(o()).optional()
    }).catchall(ae())
  }),
  Let = xet.extend({
    mode: A("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
  }),
  params_15 = $e([gEt, Let]),
  ZPn = wO.extend({
    method: A("elicitation/create"),
    params: params_15
  }),
  params_16 = vG.extend({
    elicitationId: o()
  }),
  tIn = kG.extend({
    method: A("notifications/elicitation/complete"),
    params: params_16
  }),
  nIn = result.extend({
    action: z(["accept", "decline", "cancel"]),
    content: Bi(e => e === null ? void 0 : e, fe(o(), $e([o(), E(), M(), C(o())])).optional())
  }),
  rIn = u({
    type: A("ref/resource"),
    uri: o()
  }),
  oIn = u({
    type: A("ref/prompt"),
    name: o()
  }),
  params_17 = DU.extend({
    ref: $e([oIn, rIn]),
    argument: u({
      name: o(),
      value: o()
    }),
    context: u({
      arguments: fe(o(), o()).optional()
    }).optional()
  }),
  iIn = wO.extend({
    method: A("completion/complete"),
    params: params_17
  }),
  aIn = result.extend({
    completion: ut({
      values: C(o()).max(100),
      total: Bs(E().int()),
      hasMore: Bs(M())
    })
  }),
  lIn = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: fe(o(), ae()).optional()
  }),
  cIn = wO.extend({
    method: A("roots/list"),
    params: DU.optional()
  }),
  dIn = result.extend({
    roots: C(lIn)
  }),
  uIn = kG.extend({
    method: A("notifications/roots/list_changed"),
    params: vG.optional()
  }),
  wpr = ut({
    ttl: E().optional(),
    pollInterval: E().optional()
  }),
  status = z(["working", "input_required", "completed", "failed", "cancelled"]),
  task = u({
    taskId: o(),
    status: status,
    ttl: $e([E(), uf()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: Bs(E()),
    statusMessage: Bs(o())
  }),
  vpr = result.extend({
    task: task
  }),
  params_18 = vG.merge(task),
  kpr = kG.extend({
    method: A("notifications/tasks/status"),
    params: params_18
  }),
  Epr = wO.extend({
    method: A("tasks/get"),
    params: DU.extend({
      taskId: o()
    })
  }),
  hEt = result.merge(task),
  Tpr = wO.extend({
    method: A("tasks/result"),
    params: DU.extend({
      taskId: o()
    })
  }),
  Cpr = result.loose(),
  Rpr = g2e.extend({
    method: A("tasks/list")
  }),
  Apr = h2e.extend({
    tasks: C(task)
  }),
  xpr = wO.extend({
    method: A("tasks/cancel"),
    params: DU.extend({
      taskId: o()
    })
  }),
  w2e = result.merge(task),
  Ppr = $e([Z5t, J5t, Qxn, iIn, HPn, kPn, wPn, nPn, rPn, sPn, cPn, uPn, fPn, DPn, OPn]),
  Ipr = $e([X5t, e8t, Q5t, uIn]),
  Opr = $e([Y5t, KPn, YPn, nIn, dIn]),
  Mpr = $e([Z5t, qPn, ZPn, cIn]),
  Dpr = $e([X5t, e8t, $Pn, bPn, aPn, LPn, xPn, gPn, tIn]),
  Lpr = $e([Y5t, c0e, _we, aIn, APn, Met, bwe, Iet, iPn, p0e, u0e, yPn]),
  t = D8e().superRefine((e, n) => {
    if (!URL.canParse(e)) return n.addIssue({
      code: ej.custom,
      message: "URL must be parseable",
      fatal: !0
    }), L8e;
  }).refine(e => {
    let n = new URL(e);
    return n.protocol !== "javascript:" && n.protocol !== "data:" && n.protocol !== "vbscript:";
  }, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
  }),
  m8t = ut({
    resource: o().url(),
    authorization_servers: C(t).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: C(o()).optional(),
    bearer_methods_supported: C(o()).optional(),
    resource_signing_alg_values_supported: C(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: M().optional(),
    authorization_details_types_supported: C(o()).optional(),
    dpop_signing_alg_values_supported: C(o()).optional(),
    dpop_bound_access_tokens_required: M().optional()
  }),
  f0e = ut({
    issuer: o(),
    authorization_endpoint: t,
    token_endpoint: t,
    registration_endpoint: t.optional(),
    scopes_supported: C(o()).optional(),
    response_types_supported: C(o()),
    response_modes_supported: C(o()).optional(),
    grant_types_supported: C(o()).optional(),
    token_endpoint_auth_methods_supported: C(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    service_documentation: t.optional(),
    revocation_endpoint: t.optional(),
    revocation_endpoint_auth_methods_supported: C(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: C(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    code_challenge_methods_supported: C(o()).optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M().optional().catch(void 0)
  }),
  fIn = ut({
    issuer: o(),
    authorization_endpoint: t,
    token_endpoint: t,
    userinfo_endpoint: t.optional(),
    jwks_uri: t,
    registration_endpoint: t.optional(),
    scopes_supported: C(o()).optional(),
    response_types_supported: C(o()),
    response_modes_supported: C(o()).optional(),
    grant_types_supported: C(o()).optional(),
    acr_values_supported: C(o()).optional(),
    subject_types_supported: C(o()),
    id_token_signing_alg_values_supported: C(o()),
    id_token_encryption_alg_values_supported: C(o()).optional(),
    id_token_encryption_enc_values_supported: C(o()).optional(),
    userinfo_signing_alg_values_supported: C(o()).optional(),
    userinfo_encryption_alg_values_supported: C(o()).optional(),
    userinfo_encryption_enc_values_supported: C(o()).optional(),
    request_object_signing_alg_values_supported: C(o()).optional(),
    request_object_encryption_alg_values_supported: C(o()).optional(),
    request_object_encryption_enc_values_supported: C(o()).optional(),
    token_endpoint_auth_methods_supported: C(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    display_values_supported: C(o()).optional(),
    claim_types_supported: C(o()).optional(),
    claims_supported: C(o()).optional(),
    service_documentation: o().optional(),
    claims_locales_supported: C(o()).optional(),
    ui_locales_supported: C(o()).optional(),
    claims_parameter_supported: M().optional(),
    request_parameter_supported: M().optional(),
    request_uri_parameter_supported: M().optional(),
    require_request_uri_registration: M().optional(),
    op_policy_uri: t.optional(),
    op_tos_uri: t.optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M().optional().catch(void 0)
  }),
  v2e = u({
    ...fIn.shape,
    ...f0e.pick({
      code_challenge_methods_supported: !0
    }).shape
  }),
  k2e = u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: n_e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }).strip(),
  mIn = u({
    issued_token_type: A("urn:ietf:params:oauth:token-type:id-jag"),
    access_token: o(),
    token_type: o().optional(),
    expires_in: E().optional(),
    scope: o().optional()
  }).strip(),
  E2e = u({
    error: o(),
    error_description: o().optional(),
    error_uri: o().optional()
  }),
  i = t.optional().or(A("").transform(() => {
    return;
  })),
  gIn = u({
    redirect_uris: C(t),
    token_endpoint_auth_method: o().optional(),
    grant_types: C(o()).optional(),
    response_types: C(o()).optional(),
    application_type: o().optional(),
    client_name: o().optional(),
    client_uri: t.optional(),
    logo_uri: i,
    scope: o().optional(),
    contacts: C(o()).optional(),
    tos_uri: i,
    policy_uri: o().optional(),
    jwks_uri: t.optional(),
    jwks: eK().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
  }).strip(),
  hIn = u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: E().optional(),
    client_secret_expires_at: E().optional()
  }).strip(),
  g8t = gIn.merge(hIn),
  Npr = u({
    error: o(),
    error_description: o().optional()
  }).strip(),
  Hpr = u({
    token: o(),
    token_type_hint: o().optional()
  }).strip();
export { nEt, o0e, _pr, s0e, rEt, i0e, Ret, j5t, oEt, hio, u2e, SO, bpr, progressToken as W5t, z5t, Gxn, Aet, G5t, DU, xet, wO, vG, kG, V5t, result as ET, id as p2e, q5t, K5t, sEt, iEt, T4, Spr, Y5t, params as Vxn, X5t, qxn, f2e, a0e, l0e, Kxn, Yxn, capabilities as Xxn, params_2 as Jxn, J5t, capabilities_2 as m2e, c0e, Q5t, Qxn, _we, Z5t, Zxn, params_3 as ePn, e8t, tPn, g2e, h2e, t8t, n8t, r8t, role as y2e, d0e, _2e, Pet, nPn, bwe, rPn, Iet, aEt, params_4 as oPn, sPn, iPn, aPn, params_5 as lPn, cPn, params_6 as dPn, uPn, notifications as o8t, params_7 as pPn, fPn, params_8 as mPn, gPn, _meta as hPn, yPn, params_9 as _Pn, bPn, SPn, Oet, wPn, Met, params_10 as vPn, kPn, lEt, cEt, dEt, EPn, TPn, CPn, content as uEt, RPn, APn, xPn, PPn, IPn, b2e, OPn, u0e, p0e, pEt, params_11 as MPn, DPn, LPn, s8t, level as i8t, params_12 as NPn, HPn, params_13 as FPn, $Pn, UPn, BPn, jPn, WPn, content_2 as zPn, Det, GPn, params_14 as VPn, qPn, KPn, YPn, a8t, fEt, mEt, l8t, c8t, d8t, XPn, u8t, p8t, JPn, QPn, f8t, gEt, Let, params_15 as Net, ZPn, params_16 as eIn, tIn, nIn, rIn, oIn, params_17 as sIn, iIn, aIn, lIn, cIn, dIn, uIn, wpr, status as pIn, task as S2e, vpr, params_18 as Het, kpr, Epr, hEt, Tpr, Cpr, Rpr, Apr, xpr, w2e, Ppr, Ipr, Opr, Mpr, Dpr, Lpr, m8t, f0e, fIn, v2e, k2e, mIn, E2e, gIn, hIn, g8t, Npr, Hpr };