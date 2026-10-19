// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d4t } from "B:/~BUN/root/chunk-30ttjk6q.js";
import { Kqe } from "B:/~BUN/root/chunk-hqw5n8hb.js";
import { l4t } from "B:/~BUN/root/chunk-v2jgahn8.js";
import { zM, p7s } from "B:/~BUN/root/chunk-pstrqvja.js";
import { C4, L0e } from "B:/~BUN/root/chunk-9j3awrp0.js";
import { U7e, CUr, o, XKs, b1t, v, M, Sf, JJ, oe, T, u, _t, $e, Jr, Che, fe, U, C, na, sT, wa } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { D2 } from "B:/~BUN/root/chunk-axjnbnmy.js";
var {
    create: create,
    defineProperty: defineProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    getOwnPropertyNames: getOwnPropertyNames,
    getPrototypeOf: getPrototypeOf
  } = Object,
  Ec = Object.prototype.hasOwnProperty,
  J = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports),
  Tn = (e, t) => {
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
  Pc = (e, t, r, s) => {
    if (t && typeof t === "object" || typeof t === "function") {
      for (var a = getOwnPropertyNames(t), n = 0, i = a.length, l; n < i; n++) if (l = a[n], !Ec.call(e, l) && l !== r) defineProperty(e, l, {
        get: (c => t[c]).bind(null, l),
        enumerable: !(s = getOwnPropertyDescriptor(t, l)) || s.enumerable
      });
    }
    return e;
  },
  $s = (value, t, r) => (r = value != null ? create(getPrototypeOf(value)) : {}, Pc(t || !value || !value.__esModule ? defineProperty(r, "default", {
    value: value,
    enumerable: !0
  }) : r, value));
var Ot = "2025-11-25";
var Krt = [Ot, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  GKt = "io.modelcontextprotocol/related-task",
  Fe = "io.modelcontextprotocol/protocolVersion",
  Nt = "io.modelcontextprotocol/clientInfo",
  He = "io.modelcontextprotocol/serverInfo",
  pNe = "io.modelcontextprotocol/clientCapabilities",
  vr = "io.modelcontextprotocol/subscriptionId",
  Mt = "io.modelcontextprotocol/logLevel";
var gt = "2.0";
var ECn = -32601;
var Qe = sT(() => $e([o(), v(), M(), Sf(), fe(o(), Qe), T(Qe)])),
  de = fe(o(), Qe),
  Po = T(Qe),
  progressToken = $e([o(), v().int()]),
  Rr = o(),
  Es = u({
    ttl: v().optional()
  }),
  VKt = u({
    taskId: o()
  }),
  zr = _t({
    progressToken: progressToken.optional(),
    [GKt]: VKt.optional()
  }),
  be = u({
    _meta: zr.optional()
  }),
  yt = be.extend({
    task: Es.optional()
  }),
  he = u({
    method: o(),
    params: be.loose().optional()
  }),
  Ee = u({
    _meta: zr.optional()
  }),
  Pe = u({
    method: o(),
    params: Ee.loose().optional()
  }),
  wr = _t({
    get [He]() {
      return Yrt.optional().catch(void 0);
    }
  }),
  result = _t({
    _meta: wr.optional()
  }),
  id_2 = $e([o(), v().int()]),
  $r = u({
    jsonrpc: C(gt),
    id: id_2,
    ...he.shape
  }).strict(),
  Er = u({
    jsonrpc: C(gt),
    ...Pe.shape
  }).strict(),
  jt = u({
    jsonrpc: C(gt),
    id: id_2,
    result: result
  }).strict(),
  At = u({
    jsonrpc: C(gt),
    id: id_2.optional(),
    error: u({
      code: v().int(),
      message: o(),
      data: oe().optional()
    })
  }).strict(),
  foe = $e([$r, Er, jt, At]),
  To = $e([jt, At]),
  Pr = result.strict(),
  params = Ee.extend({
    requestId: id_2.optional(),
    reason: o().optional()
  }),
  Tr = Pe.extend({
    method: C("notifications/cancelled"),
    params: params
  }),
  Ts = u({
    src: o(),
    mimeType: o().optional(),
    sizes: T(o()).optional(),
    theme: U(["light", "dark"]).optional()
  }),
  tt = u({
    icons: T(Ts).optional()
  }),
  xe = u({
    name: o(),
    title: o().optional()
  }),
  Yrt = xe.extend({
    ...xe.shape,
    ...tt.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  kc = Che(u({
    applyDefaults: M().optional()
  }), de),
  qc = wa(e => {
    if (e && typeof e === "object" && !Array.isArray(e) && Object.keys(e).length === 0) return {
      form: {}
    };
    return e;
  }, Che(u({
    form: kc.optional(),
    url: de.optional()
  }), de.optional())),
  Cs = _t({
    list: de.optional(),
    cancel: de.optional(),
    requests: _t({
      sampling: _t({
        createMessage: de.optional()
      }).optional(),
      elicitation: _t({
        create: de.optional()
      }).optional()
    }).optional()
  }),
  ks = _t({
    list: de.optional(),
    cancel: de.optional(),
    requests: _t({
      tools: _t({
        call: de.optional()
      }).optional()
    }).optional()
  }),
  capabilities = u({
    experimental: fe(o(), de).optional(),
    sampling: u({
      context: de.optional(),
      tools: de.optional()
    }).optional(),
    elicitation: qc.optional(),
    roots: u({
      listChanged: M().optional()
    }).optional(),
    tasks: Cs.optional(),
    extensions: fe(o(), de).optional()
  }),
  params_2 = be.extend({
    protocolVersion: o(),
    capabilities: capabilities,
    clientInfo: Yrt
  }),
  Cr = he.extend({
    method: C("initialize"),
    params: params_2
  }),
  capabilities_2 = u({
    experimental: fe(o(), de).optional(),
    logging: de.optional(),
    completions: de.optional(),
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
    tasks: ks.optional(),
    extensions: fe(o(), de).optional()
  }),
  Xrt = result.extend({
    protocolVersion: o(),
    capabilities: capabilities_2,
    serverInfo: Yrt,
    instructions: o().optional()
  }),
  kr = Pe.extend({
    method: C("notifications/initialized"),
    params: Ee.optional()
  }),
  Os = he.extend({
    method: C("server/discover"),
    params: be.optional()
  }),
  Gqe = result.extend({
    supportedVersions: T(o()),
    capabilities: capabilities_2,
    instructions: o().optional()
  }),
  qr = he.extend({
    method: C("ping"),
    params: be.optional()
  }),
  Ns = u({
    progress: v(),
    total: na(v()),
    message: na(o())
  }),
  params_3 = u({
    ...Ee.shape,
    ...Ns.shape,
    progressToken: progressToken
  }),
  Ir = Pe.extend({
    method: C("notifications/progress"),
    params: params_3
  }),
  js = be.extend({
    cursor: Rr.optional()
  }),
  rt = he.extend({
    params: js.optional()
  }),
  st = result.extend({
    nextCursor: Rr.optional()
  }),
  Or = u({
    uri: o(),
    mimeType: na(o()),
    _meta: fe(o(), oe()).optional()
  }),
  Nr = Or.extend({
    text: o()
  }),
  Co = o().refine(e => {
    try {
      return atob(e), !0;
    } catch {
      return !1;
    }
  }, {
    message: "Invalid Base64 string"
  }),
  Mr = Or.extend({
    blob: Co
  }),
  role = U(["user", "assistant"]),
  Ke = u({
    audience: T(role).optional(),
    priority: v().min(0).max(1).optional(),
    lastModified: $e([zM({
      offset: !0
    }), zM({
      offset: !0,
      precision: -1
    })]).optional()
  }),
  $Et = u({
    ...xe.shape,
    ...tt.shape,
    uri: o(),
    description: na(o()),
    mimeType: na(o()),
    size: na(v()),
    annotations: Ke.optional(),
    _meta: na(_t({}))
  }),
  qKt = u({
    ...xe.shape,
    ...tt.shape,
    uriTemplate: o(),
    description: na(o()),
    mimeType: na(o()),
    annotations: Ke.optional(),
    _meta: na(_t({}))
  }),
  As = rt.extend({
    method: C("resources/list")
  }),
  Vqe = st.extend({
    resources: T($Et)
  }),
  Us = rt.extend({
    method: C("resources/templates/list")
  }),
  KKt = st.extend({
    resourceTemplates: T(qKt)
  }),
  Lt = be.extend({
    uri: o()
  }),
  params_4 = Lt,
  Vs = he.extend({
    method: C("resources/read"),
    params: params_4
  }),
  xs = result.extend({
    contents: T($e([Nr, Mr]))
  }),
  Fs = Pe.extend({
    method: C("notifications/resources/list_changed"),
    params: Ee.optional()
  }),
  params_5 = Lt,
  Js = he.extend({
    method: C("resources/subscribe"),
    params: params_5
  }),
  params_6 = Lt,
  Bs = he.extend({
    method: C("resources/unsubscribe"),
    params: params_6
  }),
  notifications = u({
    toolsListChanged: M().optional(),
    promptsListChanged: M().optional(),
    resourcesListChanged: M().optional(),
    resourceSubscriptions: T(o()).optional()
  }),
  params_7 = be.extend({
    notifications: notifications
  }),
  Ys = he.extend({
    method: C("subscriptions/listen"),
    params: params_7
  }),
  params_8 = Ee.extend({
    notifications: notifications
  }),
  Zs = Pe.extend({
    method: C("notifications/subscriptions/acknowledged"),
    params: params_8
  }),
  _meta = wr.extend({
    [vr]: id_2
  }),
  ea = result.extend({
    _meta: _meta
  }),
  params_9 = Ee.extend({
    uri: o()
  }),
  ra = Pe.extend({
    method: C("notifications/resources/updated"),
    params: params_9
  }),
  sa = u({
    name: o(),
    description: na(o()),
    required: na(M())
  }),
  YKt = u({
    ...xe.shape,
    ...tt.shape,
    description: na(o()),
    arguments: na(T(sa)),
    _meta: na(_t({}))
  }),
  aa = rt.extend({
    method: C("prompts/list")
  }),
  XKt = st.extend({
    prompts: T(YKt)
  }),
  params_10 = be.extend({
    name: o(),
    arguments: fe(o(), o()).optional()
  }),
  ia = he.extend({
    method: C("prompts/get"),
    params: params_10
  }),
  Ut = u({
    type: C("text"),
    text: o(),
    annotations: Ke.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  Dt = u({
    type: C("image"),
    data: Co,
    mimeType: o(),
    annotations: Ke.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  Vt = u({
    type: C("audio"),
    data: Co,
    mimeType: o(),
    annotations: Ke.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  ca = u({
    type: C("tool_use"),
    name: o(),
    id: o(),
    input: fe(o(), oe()),
    _meta: fe(o(), oe()).optional()
  }),
  la = u({
    type: C("resource"),
    resource: $e([Nr, Mr]),
    annotations: Ke.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  ua = $Et.extend({
    type: C("resource_link")
  }),
  content = $e([Ut, Dt, Vt, ua, la]),
  da = u({
    role: role,
    content: content
  }),
  ha = result.extend({
    description: o().optional(),
    messages: T(da)
  }),
  ma = Pe.extend({
    method: C("notifications/prompts/list_changed"),
    params: Ee.optional()
  }),
  pa = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
  }),
  fa = u({
    taskSupport: U(["required", "optional", "forbidden"]).optional()
  }),
  UEt = u({
    ...xe.shape,
    ...tt.shape,
    description: o().optional(),
    inputSchema: u({
      type: C("object"),
      properties: fe(o(), Qe).optional(),
      required: T(o()).optional()
    }).catchall(oe()),
    outputSchema: _t({
      $schema: o().optional()
    }).optional(),
    annotations: pa.optional(),
    execution: fa.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  Sa = rt.extend({
    method: C("tools/list")
  }),
  qqe = st.extend({
    tools: T(UEt)
  }),
  Ar = result.extend({
    content: T(content).default([]),
    structuredContent: oe().optional(),
    isError: M().optional()
  }),
  JKt = Ar.or(result.extend({
    toolResult: oe()
  })),
  params_11 = yt.extend({
    name: o(),
    arguments: fe(o(), oe()).optional()
  }),
  _a = he.extend({
    method: C("tools/call"),
    params: params_11
  }),
  ya = Pe.extend({
    method: C("notifications/tools/list_changed"),
    params: Ee.optional()
  }),
  Lr = u({
    autoRefresh: M().default(!0),
    debounceMs: v().int().nonnegative().default(300)
  }),
  level = U(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  params_12 = be.extend({
    level: level
  }),
  ba = he.extend({
    method: C("logging/setLevel"),
    params: params_12
  }),
  params_13 = Ee.extend({
    level: level,
    logger: o().optional(),
    data: oe()
  }),
  za = Pe.extend({
    method: C("notifications/message"),
    params: params_13
  }),
  $a = u({
    name: o().optional()
  }),
  Ea = u({
    hints: T($a).optional(),
    costPriority: v().min(0).max(1).optional(),
    speedPriority: v().min(0).max(1).optional(),
    intelligencePriority: v().min(0).max(1).optional()
  }),
  Pa = u({
    mode: U(["auto", "required", "none"]).optional()
  }),
  Ta = u({
    type: C("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: T(content),
    structuredContent: oe().optional(),
    isError: M().optional(),
    _meta: fe(o(), oe()).optional()
  }),
  content_2 = Jr("type", [Ut, Dt, Vt]),
  St = Jr("type", [Ut, Dt, Vt, ca, Ta]),
  ka = u({
    role: role,
    content: $e([St, T(St)]),
    _meta: fe(o(), oe()).optional()
  }),
  params_14 = yt.extend({
    messages: T(ka),
    modelPreferences: Ea.optional(),
    systemPrompt: o().optional(),
    includeContext: U(["none", "thisServer", "allServers"]).optional(),
    temperature: v().optional(),
    maxTokens: v().int(),
    stopSequences: T(o()).optional(),
    metadata: de.optional(),
    tools: T(UEt).optional(),
    toolChoice: Pa.optional()
  }),
  Ia = he.extend({
    method: C("sampling/createMessage"),
    params: params_14
  }),
  Oa = result.extend({
    model: o(),
    stopReason: na(U(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: role,
    content: content_2
  }),
  Na = result.extend({
    model: o(),
    stopReason: na(U(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: role,
    content: $e([St, T(St)])
  }),
  Dr = u({
    type: C("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
  }),
  Ft = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: v().optional(),
    maxLength: v().optional(),
    format: U(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  Ht = u({
    type: U(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: v().optional(),
    maximum: v().optional(),
    default: v().optional()
  }),
  Vr = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    default: o().optional()
  }),
  xr = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: T(u({
      const: o(),
      title: o()
    })),
    default: o().optional()
  }),
  Fr = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    enumNames: T(o()).optional(),
    default: o().optional()
  }),
  Ma = $e([Vr, xr]),
  Hr = u({
    type: C("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: v().optional(),
    maxItems: v().optional(),
    items: u({
      type: C("string"),
      enum: T(o())
    }),
    default: T(o()).optional()
  }),
  Kr = u({
    type: C("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: v().optional(),
    maxItems: v().optional(),
    items: u({
      anyOf: T(u({
        const: o(),
        title: o()
      }))
    }),
    default: T(o()).optional()
  }),
  ja = $e([Hr, Kr]),
  Aa = $e([Fr, Ma, ja]),
  Gr = $e([Aa, Dr, Ft, Ht]),
  Kt = yt.extend({
    mode: C("form").optional(),
    message: o(),
    requestedSchema: u({
      type: C("object"),
      properties: fe(o(), Gr),
      required: T(o()).optional()
    }).catchall(oe())
  }),
  BEt = yt.extend({
    mode: C("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
  }),
  params_15 = $e([Kt, BEt]),
  La = he.extend({
    method: C("elicitation/create"),
    params: params_15
  }),
  params_16 = Ee.extend({
    elicitationId: o()
  }),
  Da = Pe.extend({
    method: C("notifications/elicitation/complete"),
    params: params_16
  }),
  Va = result.extend({
    action: U(["accept", "decline", "cancel"]),
    content: wa(e => e === null ? void 0 : e, fe(o(), $e([o(), v(), M(), T(o())])).optional())
  }),
  xa = u({
    type: C("ref/resource"),
    uri: o()
  }),
  Fa = u({
    type: C("ref/prompt"),
    name: o()
  }),
  params_17 = be.extend({
    ref: $e([Fa, xa]),
    argument: u({
      name: o(),
      value: o()
    }),
    context: u({
      arguments: fe(o(), o()).optional()
    }).optional()
  }),
  Ka = he.extend({
    method: C("completion/complete"),
    params: params_17
  }),
  Ja = result.extend({
    completion: _t({
      values: T(o()).max(100),
      total: na(v().int()),
      hasMore: na(M())
    })
  }),
  Ga = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: fe(o(), oe()).optional()
  }),
  Ba = he.extend({
    method: C("roots/list"),
    params: be.optional()
  }),
  Wa = result.extend({
    roots: T(Ga)
  }),
  Ya = Pe.extend({
    method: C("notifications/roots/list_changed"),
    params: Ee.optional()
  }),
  ko = _t({
    ttl: v().optional(),
    pollInterval: v().optional()
  }),
  status = U(["working", "input_required", "completed", "failed", "cancelled"]),
  task = u({
    taskId: o(),
    status: status,
    ttl: $e([v(), Sf()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: na(v()),
    statusMessage: na(o())
  }),
  qo = result.extend({
    task: task
  }),
  params_18 = Ee.merge(task),
  Io = Pe.extend({
    method: C("notifications/tasks/status"),
    params: params_18
  }),
  Oo = he.extend({
    method: C("tasks/get"),
    params: be.extend({
      taskId: o()
    })
  }),
  No = result.merge(task),
  Mo = he.extend({
    method: C("tasks/result"),
    params: be.extend({
      taskId: o()
    })
  }),
  jo = result.loose(),
  Ao = rt.extend({
    method: C("tasks/list")
  }),
  Lo = st.extend({
    tasks: T(task)
  }),
  Uo = he.extend({
    method: C("tasks/cancel"),
    params: be.extend({
      taskId: o()
    })
  }),
  Do = result.merge(task),
  Vo = $e([qr, Cr, Os, Ka, ba, ia, aa, As, Us, Vs, Js, Bs, Ys, _a, Sa]),
  xo = $e([Tr, Ir, kr, Ya]),
  Fo = $e([Pr, Oa, Na, Va, Wa]),
  Ho = $e([qr, Ia, La, Ba]),
  Ko = $e([Tr, Ir, za, ra, Fs, ya, ma, Zs, Da]),
  Jo = $e([Pr, Xrt, Gqe, Ja, ha, XKt, Vqe, KKt, xs, Ar, qqe, ea]),
  ve = b1t().superRefine((e, t) => {
    if (!URL.canParse(e)) return t.addIssue({
      code: C4.custom,
      message: "URL must be parseable",
      fatal: !0
    }), D2;
  }).refine(e => {
    let t = new URL(e);
    return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
  }, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
  }),
  OAuthProtectedResourceMetadataSchema = _t({
    resource: o().url(),
    authorization_servers: T(ve).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: T(o()).optional(),
    bearer_methods_supported: T(o()).optional(),
    resource_signing_alg_values_supported: T(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: M().optional(),
    authorization_details_types_supported: T(o()).optional(),
    dpop_signing_alg_values_supported: T(o()).optional(),
    dpop_bound_access_tokens_required: M().optional()
  }),
  OAuthMetadataSchema = _t({
    issuer: o(),
    authorization_endpoint: ve,
    token_endpoint: ve,
    registration_endpoint: ve.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    service_documentation: ve.optional(),
    revocation_endpoint: ve.optional(),
    revocation_endpoint_auth_methods_supported: T(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: T(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    code_challenge_methods_supported: T(o()).optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M().optional().catch(void 0)
  }),
  OpenIdProviderMetadataSchema = _t({
    issuer: o(),
    authorization_endpoint: ve,
    token_endpoint: ve,
    userinfo_endpoint: ve.optional(),
    jwks_uri: ve,
    registration_endpoint: ve.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    acr_values_supported: T(o()).optional(),
    subject_types_supported: T(o()),
    id_token_signing_alg_values_supported: T(o()),
    id_token_encryption_alg_values_supported: T(o()).optional(),
    id_token_encryption_enc_values_supported: T(o()).optional(),
    userinfo_signing_alg_values_supported: T(o()).optional(),
    userinfo_encryption_alg_values_supported: T(o()).optional(),
    userinfo_encryption_enc_values_supported: T(o()).optional(),
    request_object_signing_alg_values_supported: T(o()).optional(),
    request_object_encryption_alg_values_supported: T(o()).optional(),
    request_object_encryption_enc_values_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    display_values_supported: T(o()).optional(),
    claim_types_supported: T(o()).optional(),
    claims_supported: T(o()).optional(),
    service_documentation: o().optional(),
    claims_locales_supported: T(o()).optional(),
    ui_locales_supported: T(o()).optional(),
    claims_parameter_supported: M().optional(),
    request_parameter_supported: M().optional(),
    request_uri_parameter_supported: M().optional(),
    require_request_uri_registration: M().optional(),
    op_policy_uri: ve.optional(),
    op_tos_uri: ve.optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M().optional().catch(void 0)
  }),
  OpenIdProviderDiscoveryMetadataSchema = u({
    ...OpenIdProviderMetadataSchema.shape,
    ...OAuthMetadataSchema.pick({
      code_challenge_methods_supported: !0
    }).shape
  }),
  OAuthTokensSchema = u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: L0e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }).strip(),
  IdJagTokenExchangeResponseSchema = u({
    issued_token_type: C("urn:ietf:params:oauth:token-type:id-jag"),
    access_token: o(),
    token_type: o().optional(),
    expires_in: v().optional(),
    scope: o().optional()
  }).strip(),
  OAuthErrorResponseSchema = u({
    error: o(),
    error_description: o().optional(),
    error_uri: o().optional()
  }),
  Eo = ve.optional().or(C("").transform(() => {
    return;
  })),
  OAuthClientMetadataSchema = u({
    redirect_uris: T(ve),
    token_endpoint_auth_method: o().optional(),
    grant_types: T(o()).optional(),
    response_types: T(o()).optional(),
    application_type: o().optional(),
    client_name: o().optional(),
    client_uri: ve.optional(),
    logo_uri: Eo,
    scope: o().optional(),
    contacts: T(o()).optional(),
    tos_uri: Eo,
    policy_uri: o().optional(),
    jwks_uri: ve.optional(),
    jwks: JJ().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
  }).strip(),
  OAuthClientInformationSchema = u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: v().optional(),
    client_secret_expires_at: v().optional()
  }).strip(),
  OAuthClientInformationFullSchema = OAuthClientMetadataSchema.merge(OAuthClientInformationSchema),
  OAuthClientRegistrationErrorSchema = u({
    error: o(),
    error_description: o().optional()
  }).strip(),
  OAuthTokenRevocationRequestSchema = u({
    token: o(),
    token_type_hint: o().optional()
  }).strip();
var Qo = Symbol.for("mcp.sdk.errorBrands");
function bt(e, t) {
  let value_2 = new Set(),
    s = t;
  while (typeof s === "function") {
    let mcpBrand = s.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof mcpBrand === "string") value_2.add(mcpBrand);
    s = Object.getPrototypeOf(s);
  }
  if (value_2.size === 0) return;
  Object.defineProperty(e, Qo, {
    value: value_2,
    enumerable: !1,
    configurable: !0
  });
}
function Oe(e, t) {
  try {
    if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e, "mcpBrand") && typeof e.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, Qo)) {
      let r = t[Qo];
      if (r && typeof r.has === "function" && r.has(e.mcpBrand)) return !0;
    }
  } catch {}
  return Function.prototype[Symbol.hasInstance].call(e, t);
}
var moe = function (e) {
    return e.InvalidRequest = "invalid_request", e.InvalidClient = "invalid_client", e.InvalidGrant = "invalid_grant", e.UnauthorizedClient = "unauthorized_client", e.UnsupportedGrantType = "unsupported_grant_type", e.InvalidScope = "invalid_scope", e.AccessDenied = "access_denied", e.ServerError = "server_error", e.TemporarilyUnavailable = "temporarily_unavailable", e.UnsupportedResponseType = "unsupported_response_type", e.UnsupportedTokenType = "unsupported_token_type", e.InvalidToken = "invalid_token", e.MethodNotAllowed = "method_not_allowed", e.TooManyRequests = "too_many_requests", e.InvalidClientMetadata = "invalid_client_metadata", e.InvalidRedirectUri = "invalid_redirect_uri", e.InsufficientScope = "insufficient_scope", e.InvalidTarget = "invalid_target", e;
  }({}),
  $V = class OAuthError extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthError"
      });
    }
    static [Symbol.hasInstance](t) {
      return Oe(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Oe(this, t);
    }
    constructor(t, r, s) {
      super(r);
      this.code = t, this.errorUri = s, this.name = "OAuthError", bt(this, new.target);
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
  Ls = function (e) {
    return e.NotConnected = "NOT_CONNECTED", e.AlreadyConnected = "ALREADY_CONNECTED", e.NotInitialized = "NOT_INITIALIZED", e.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED", e.RequestTimeout = "REQUEST_TIMEOUT", e.ConnectionClosed = "CONNECTION_CLOSED", e.SendFailed = "SEND_FAILED", e.InvalidResult = "INVALID_RESULT", e.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE", e.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED", e.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED", e.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION", e.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED", e.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED", e.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION", e.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN", e.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT", e.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM", e.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION", e;
  }({}),
  Ks = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SdkError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Oe(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Oe(this, e);
    }
    constructor(e, t, r) {
      super(t);
      this.code = e, this.data = r, this.name = "SdkError", bt(this, new.target);
    }
  },
  SE = class extends Ks {
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
function Gn(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function Bn({
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
var Wn = "2026-07-28",
  an = [Wn];
function Ge(e) {
  return e >= Wn;
}
function on(e) {
  return e.filter(item => !Ge(item));
}
function rs(e) {
  return e.filter(item => Ge(item));
}
function Yn(e) {
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
var Xn = ["task", "inputRequests", "requestState"];
function Ic(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e) || e.content !== void 0 || Xn.some(item => item in e)) return e;
  return {
    ...e,
    content: []
  };
}
function Oc() {
  let JSONValueSchema = sT(() => $e([o(), v(), M(), Sf(), fe(o(), JSONValueSchema), T(JSONValueSchema)])),
    JSONObjectSchema = fe(o(), JSONValueSchema),
    r = $e([o(), v().int()]),
    CursorSchema = o(),
    TaskMetadataSchema = u({
      ttl: v().optional()
    }),
    RelatedTaskMetadataSchema = u({
      taskId: o()
    }),
    RequestMetaSchema = _t({
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
    ResultSchema = _t({
      _meta: RequestMetaSchema.optional()
    }),
    RequestIdSchema = $e([o(), v().int()]),
    EmptyResultSchema = ResultSchema.strict(),
    b = NotificationsParamsSchema.extend({
      requestId: RequestIdSchema.optional(),
      reason: o().optional()
    }),
    CancelledNotificationSchema = NotificationSchema.extend({
      method: C("notifications/cancelled"),
      params: b
    }),
    IconSchema = u({
      src: o(),
      mimeType: o().optional(),
      sizes: T(o()).optional(),
      theme: U(["light", "dark"]).optional()
    }),
    IconsSchema = u({
      icons: T(IconSchema).optional()
    }),
    BaseMetadataSchema = u({
      name: o(),
      title: o().optional()
    }),
    z = BaseMetadataSchema.extend({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    }),
    k = Che(u({
      applyDefaults: M().optional()
    }), JSONObjectSchema),
    R = wa(we => {
      if (we && typeof we === "object" && !Array.isArray(we) && Object.keys(we).length === 0) return {
        form: {}
      };
      return we;
    }, Che(u({
      form: k.optional(),
      url: JSONObjectSchema.optional()
    }), JSONObjectSchema.optional())),
    ClientTasksCapabilitySchema = _t({
      list: JSONObjectSchema.optional(),
      cancel: JSONObjectSchema.optional(),
      requests: _t({
        sampling: _t({
          createMessage: JSONObjectSchema.optional()
        }).optional(),
        elicitation: _t({
          create: JSONObjectSchema.optional()
        }).optional()
      }).optional()
    }),
    ServerTasksCapabilitySchema = _t({
      list: JSONObjectSchema.optional(),
      cancel: JSONObjectSchema.optional(),
      requests: _t({
        tools: _t({
          call: JSONObjectSchema.optional()
        }).optional()
      }).optional()
    }),
    L = u({
      experimental: fe(o(), JSONObjectSchema).optional(),
      sampling: u({
        context: JSONObjectSchema.optional(),
        tools: JSONObjectSchema.optional()
      }).optional(),
      elicitation: R.optional(),
      roots: u({
        listChanged: M().optional()
      }).optional(),
      tasks: ClientTasksCapabilitySchema.optional(),
      extensions: fe(o(), JSONObjectSchema).optional()
    }),
    K = BaseRequestParamsSchema.extend({
      protocolVersion: o(),
      capabilities: L,
      clientInfo: z
    }),
    InitializeRequestSchema = RequestSchema.extend({
      method: C("initialize"),
      params: K
    }),
    F = u({
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
      capabilities: F,
      serverInfo: z,
      instructions: o().optional()
    }),
    InitializedNotificationSchema = NotificationSchema.extend({
      method: C("notifications/initialized"),
      params: NotificationsParamsSchema.optional()
    }),
    PingRequestSchema = RequestSchema.extend({
      method: C("ping"),
      params: BaseRequestParamsSchema.optional()
    }),
    ProgressSchema = u({
      progress: v(),
      total: na(v()),
      message: na(o())
    }),
    ie = u({
      ...NotificationsParamsSchema.shape,
      ...ProgressSchema.shape,
      progressToken: r
    }),
    ProgressNotificationSchema = NotificationSchema.extend({
      method: C("notifications/progress"),
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
      mimeType: na(o()),
      _meta: fe(o(), oe()).optional()
    }),
    TextResourceContentsSchema = ResourceContentsSchema.extend({
      text: o()
    }),
    O = o().refine(we => {
      try {
        return atob(we), !0;
      } catch {
        return !1;
      }
    }, {
      message: "Invalid Base64 string"
    }),
    BlobResourceContentsSchema = ResourceContentsSchema.extend({
      blob: O
    }),
    G = U(["user", "assistant"]),
    AnnotationsSchema = u({
      audience: T(G).optional(),
      priority: v().min(0).max(1).optional(),
      lastModified: $e([zM({
        offset: !0
      }), zM({
        offset: !0,
        precision: -1
      })]).optional()
    }),
    ResourceSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      uri: o(),
      description: na(o()),
      mimeType: na(o()),
      size: na(v()),
      annotations: AnnotationsSchema.optional(),
      _meta: na(_t({}))
    }),
    ResourceTemplateSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      uriTemplate: o(),
      description: na(o()),
      mimeType: na(o()),
      annotations: AnnotationsSchema.optional(),
      _meta: na(_t({}))
    }),
    ListResourcesRequestSchema = PaginatedRequestSchema.extend({
      method: C("resources/list")
    }),
    ListResourcesResultSchema = PaginatedResultSchema.extend({
      resources: T(ResourceSchema)
    }),
    ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
      method: C("resources/templates/list")
    }),
    ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
      resourceTemplates: T(ResourceTemplateSchema)
    }),
    ResourceRequestParamsSchema = BaseRequestParamsSchema.extend({
      uri: o()
    }),
    X = ResourceRequestParamsSchema,
    ReadResourceRequestSchema = RequestSchema.extend({
      method: C("resources/read"),
      params: X
    }),
    ReadResourceResultSchema = ResultSchema.extend({
      contents: T($e([TextResourceContentsSchema, BlobResourceContentsSchema]))
    }),
    ResourceListChangedNotificationSchema = NotificationSchema.extend({
      method: C("notifications/resources/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    _e = ResourceRequestParamsSchema,
    SubscribeRequestSchema = RequestSchema.extend({
      method: C("resources/subscribe"),
      params: _e
    }),
    ge = ResourceRequestParamsSchema,
    UnsubscribeRequestSchema = RequestSchema.extend({
      method: C("resources/unsubscribe"),
      params: ge
    }),
    Ne = NotificationsParamsSchema.extend({
      uri: o()
    }),
    ResourceUpdatedNotificationSchema = NotificationSchema.extend({
      method: C("notifications/resources/updated"),
      params: Ne
    }),
    PromptArgumentSchema = u({
      name: o(),
      description: na(o()),
      required: na(M())
    }),
    PromptSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      description: na(o()),
      arguments: na(T(PromptArgumentSchema)),
      _meta: na(_t({}))
    }),
    ListPromptsRequestSchema = PaginatedRequestSchema.extend({
      method: C("prompts/list")
    }),
    ListPromptsResultSchema = PaginatedResultSchema.extend({
      prompts: T(PromptSchema)
    }),
    We = BaseRequestParamsSchema.extend({
      name: o(),
      arguments: fe(o(), o()).optional()
    }),
    GetPromptRequestSchema = RequestSchema.extend({
      method: C("prompts/get"),
      params: We
    }),
    TextContentSchema = u({
      type: C("text"),
      text: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ImageContentSchema = u({
      type: C("image"),
      data: O,
      mimeType: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    AudioContentSchema = u({
      type: C("audio"),
      data: O,
      mimeType: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ToolUseContentSchema = u({
      type: C("tool_use"),
      name: o(),
      id: o(),
      input: fe(o(), oe()),
      _meta: fe(o(), oe()).optional()
    }),
    EmbeddedResourceSchema = u({
      type: C("resource"),
      resource: $e([TextResourceContentsSchema, BlobResourceContentsSchema]),
      annotations: AnnotationsSchema.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ResourceLinkSchema = ResourceSchema.extend({
      type: C("resource_link")
    }),
    Me = $e([TextContentSchema, ImageContentSchema, AudioContentSchema, ResourceLinkSchema, EmbeddedResourceSchema]),
    PromptMessageSchema = u({
      role: G,
      content: Me
    }),
    GetPromptResultSchema = ResultSchema.extend({
      description: o().optional(),
      messages: T(PromptMessageSchema)
    }),
    PromptListChangedNotificationSchema = NotificationSchema.extend({
      method: C("notifications/prompts/list_changed"),
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
      taskSupport: U(["required", "optional", "forbidden"]).optional()
    }),
    ToolSchema = u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      description: o().optional(),
      inputSchema: u({
        type: C("object"),
        properties: fe(o(), JSONValueSchema).optional(),
        required: T(o()).optional()
      }).catchall(oe()),
      outputSchema: u({
        type: C("object"),
        properties: fe(o(), JSONValueSchema).optional(),
        required: T(o()).optional()
      }).catchall(oe()).optional(),
      annotations: ToolAnnotationsSchema.optional(),
      execution: ToolExecutionSchema.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ListToolsRequestSchema = PaginatedRequestSchema.extend({
      method: C("tools/list")
    }),
    ListToolsResultSchema = PaginatedResultSchema.extend({
      tools: T(ToolSchema)
    }),
    CallToolResultSchema = ResultSchema.extend({
      content: T(Me),
      structuredContent: fe(o(), oe()).optional(),
      isError: M().optional()
    }),
    ze = TaskAugmentedRequestParamsSchema.extend({
      name: o(),
      arguments: fe(o(), oe()).optional()
    }),
    CallToolRequestSchema = RequestSchema.extend({
      method: C("tools/call"),
      params: ze
    }),
    ToolListChangedNotificationSchema = NotificationSchema.extend({
      method: C("notifications/tools/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    Tt = U(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
    Xt = BaseRequestParamsSchema.extend({
      level: Tt
    }),
    SetLevelRequestSchema = RequestSchema.extend({
      method: C("logging/setLevel"),
      params: Xt
    }),
    Qt = NotificationsParamsSchema.extend({
      level: Tt,
      logger: o().optional(),
      data: oe()
    }),
    LoggingMessageNotificationSchema = NotificationSchema.extend({
      method: C("notifications/message"),
      params: Qt
    }),
    ModelHintSchema = u({
      name: o().optional()
    }),
    ModelPreferencesSchema = u({
      hints: T(ModelHintSchema).optional(),
      costPriority: v().min(0).max(1).optional(),
      speedPriority: v().min(0).max(1).optional(),
      intelligencePriority: v().min(0).max(1).optional()
    }),
    ToolChoiceSchema = u({
      mode: U(["auto", "required", "none"]).optional()
    }),
    ToolResultContentSchema = u({
      type: C("tool_result"),
      toolUseId: o().describe("The unique identifier for the corresponding tool call."),
      content: T(Me),
      structuredContent: u({}).loose().optional(),
      isError: M().optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ar = Jr("type", [TextContentSchema, ImageContentSchema, AudioContentSchema]),
    SamplingMessageContentBlockSchema = Jr("type", [TextContentSchema, ImageContentSchema, AudioContentSchema, ToolUseContentSchema, ToolResultContentSchema]),
    SamplingMessageSchema = u({
      role: G,
      content: $e([SamplingMessageContentBlockSchema, T(SamplingMessageContentBlockSchema)]),
      _meta: fe(o(), oe()).optional()
    }),
    nr = TaskAugmentedRequestParamsSchema.extend({
      messages: T(SamplingMessageSchema),
      modelPreferences: ModelPreferencesSchema.optional(),
      systemPrompt: o().optional(),
      includeContext: U(["none", "thisServer", "allServers"]).optional(),
      temperature: v().optional(),
      maxTokens: v().int(),
      stopSequences: T(o()).optional(),
      metadata: JSONObjectSchema.optional(),
      tools: T(ToolSchema).optional(),
      toolChoice: ToolChoiceSchema.optional()
    }),
    CreateMessageRequestSchema = RequestSchema.extend({
      method: C("sampling/createMessage"),
      params: nr
    }),
    CreateMessageResultSchema = ResultSchema.extend({
      model: o(),
      stopReason: na(U(["endTurn", "stopSequence", "maxTokens"]).or(o())),
      role: G,
      content: ar
    }),
    CreateMessageResultWithToolsSchema = ResultSchema.extend({
      model: o(),
      stopReason: na(U(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
      role: G,
      content: $e([SamplingMessageContentBlockSchema, T(SamplingMessageContentBlockSchema)])
    }),
    BooleanSchemaSchema = u({
      type: C("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: M().optional()
    }),
    StringSchemaSchema = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: v().optional(),
      maxLength: v().optional(),
      format: U(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    }),
    NumberSchemaSchema = u({
      type: U(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: v().optional(),
      maximum: v().optional(),
      default: v().optional()
    }),
    UntitledSingleSelectEnumSchemaSchema = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      default: o().optional()
    }),
    TitledSingleSelectEnumSchemaSchema = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: T(u({
        const: o(),
        title: o()
      })),
      default: o().optional()
    }),
    LegacyTitledEnumSchemaSchema = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      enumNames: T(o()).optional(),
      default: o().optional()
    }),
    SingleSelectEnumSchemaSchema = $e([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema]),
    UntitledMultiSelectEnumSchemaSchema = u({
      type: C("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({
        type: C("string"),
        enum: T(o())
      }),
      default: T(o()).optional()
    }),
    TitledMultiSelectEnumSchemaSchema = u({
      type: C("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({
        anyOf: T(u({
          const: o(),
          title: o()
        }))
      }),
      default: T(o()).optional()
    }),
    MultiSelectEnumSchemaSchema = $e([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema]),
    EnumSchemaSchema = $e([LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema]),
    PrimitiveSchemaDefinitionSchema = $e([EnumSchemaSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema]),
    ElicitRequestFormParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      mode: C("form").optional(),
      message: o(),
      requestedSchema: u({
        type: C("object"),
        properties: fe(o(), PrimitiveSchemaDefinitionSchema),
        required: T(o()).optional()
      }).catchall(oe())
    }),
    ElicitRequestURLParamsSchema = TaskAugmentedRequestParamsSchema.extend({
      mode: C("url"),
      message: o(),
      elicitationId: o(),
      url: o().url()
    }),
    Ae = $e([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema]),
    ElicitRequestSchema = RequestSchema.extend({
      method: C("elicitation/create"),
      params: Ae
    }),
    hs = NotificationsParamsSchema.extend({
      elicitationId: o()
    }),
    ElicitationCompleteNotificationSchema = NotificationSchema.extend({
      method: C("notifications/elicitation/complete"),
      params: hs
    }),
    ElicitResultSchema = ResultSchema.extend({
      action: U(["accept", "decline", "cancel"]),
      content: wa(we => we === null ? void 0 : we, fe(o(), $e([o(), v(), M(), T(o())])).optional())
    }),
    ResourceTemplateReferenceSchema = u({
      type: C("ref/resource"),
      uri: o()
    }),
    PromptReferenceSchema = u({
      type: C("ref/prompt"),
      name: o()
    }),
    gs = BaseRequestParamsSchema.extend({
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
      method: C("completion/complete"),
      params: gs
    }),
    CompleteResultSchema = ResultSchema.extend({
      completion: _t({
        values: T(o()).max(100),
        total: na(v().int()),
        hasMore: na(M())
      })
    }),
    RootSchema = u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ListRootsRequestSchema = RequestSchema.extend({
      method: C("roots/list"),
      params: BaseRequestParamsSchema.optional()
    }),
    ListRootsResultSchema = ResultSchema.extend({
      roots: T(RootSchema)
    }),
    RootsListChangedNotificationSchema = NotificationSchema.extend({
      method: C("notifications/roots/list_changed"),
      params: NotificationsParamsSchema.optional()
    }),
    TaskCreationParamsSchema = _t({
      ttl: v().optional(),
      pollInterval: v().optional()
    }),
    Rs = U(["working", "input_required", "completed", "failed", "cancelled"]),
    Ze = u({
      taskId: o(),
      status: Rs,
      ttl: $e([v(), Sf()]),
      createdAt: o(),
      lastUpdatedAt: o(),
      pollInterval: na(v()),
      statusMessage: na(o())
    }),
    CreateTaskResultSchema = ResultSchema.extend({
      task: Ze
    }),
    zs = NotificationsParamsSchema.merge(Ze),
    TaskStatusNotificationSchema = NotificationSchema.extend({
      method: C("notifications/tasks/status"),
      params: zs
    }),
    GetTaskRequestSchema = RequestSchema.extend({
      method: C("tasks/get"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    }),
    GetTaskResultSchema = ResultSchema.merge(Ze),
    GetTaskPayloadRequestSchema = RequestSchema.extend({
      method: C("tasks/result"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    }),
    GetTaskPayloadResultSchema = ResultSchema.loose(),
    ListTasksRequestSchema = PaginatedRequestSchema.extend({
      method: C("tasks/list")
    }),
    ListTasksResultSchema = PaginatedResultSchema.extend({
      tasks: T(Ze)
    }),
    CancelTaskRequestSchema = RequestSchema.extend({
      method: C("tasks/cancel"),
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
    CancelledNotificationParamsSchema: b,
    CancelledNotificationSchema: CancelledNotificationSchema,
    IconSchema: IconSchema,
    IconsSchema: IconsSchema,
    BaseMetadataSchema: BaseMetadataSchema,
    ImplementationSchema: z,
    ClientTasksCapabilitySchema: ClientTasksCapabilitySchema,
    ServerTasksCapabilitySchema: ServerTasksCapabilitySchema,
    ClientCapabilitiesSchema: L,
    InitializeRequestParamsSchema: K,
    InitializeRequestSchema: InitializeRequestSchema,
    ServerCapabilitiesSchema: F,
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
    SubscribeRequestParamsSchema: _e,
    SubscribeRequestSchema: SubscribeRequestSchema,
    UnsubscribeRequestParamsSchema: ge,
    UnsubscribeRequestSchema: UnsubscribeRequestSchema,
    ResourceUpdatedNotificationParamsSchema: Ne,
    ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema,
    PromptArgumentSchema: PromptArgumentSchema,
    PromptSchema: PromptSchema,
    ListPromptsRequestSchema: ListPromptsRequestSchema,
    ListPromptsResultSchema: ListPromptsResultSchema,
    GetPromptRequestParamsSchema: We,
    GetPromptRequestSchema: GetPromptRequestSchema,
    TextContentSchema: TextContentSchema,
    ImageContentSchema: ImageContentSchema,
    AudioContentSchema: AudioContentSchema,
    ToolUseContentSchema: ToolUseContentSchema,
    EmbeddedResourceSchema: EmbeddedResourceSchema,
    ResourceLinkSchema: ResourceLinkSchema,
    ContentBlockSchema: Me,
    PromptMessageSchema: PromptMessageSchema,
    GetPromptResultSchema: GetPromptResultSchema,
    PromptListChangedNotificationSchema: PromptListChangedNotificationSchema,
    ToolAnnotationsSchema: ToolAnnotationsSchema,
    ToolExecutionSchema: ToolExecutionSchema,
    ToolSchema: ToolSchema,
    ListToolsRequestSchema: ListToolsRequestSchema,
    ListToolsResultSchema: ListToolsResultSchema,
    CallToolResultSchema: CallToolResultSchema,
    CallToolRequestParamsSchema: ze,
    CallToolRequestSchema: CallToolRequestSchema,
    ToolListChangedNotificationSchema: ToolListChangedNotificationSchema,
    LoggingLevelSchema: Tt,
    SetLevelRequestParamsSchema: Xt,
    SetLevelRequestSchema: SetLevelRequestSchema,
    LoggingMessageNotificationParamsSchema: Qt,
    LoggingMessageNotificationSchema: LoggingMessageNotificationSchema,
    ModelHintSchema: ModelHintSchema,
    ModelPreferencesSchema: ModelPreferencesSchema,
    ToolChoiceSchema: ToolChoiceSchema,
    ToolResultContentSchema: ToolResultContentSchema,
    SamplingContentSchema: ar,
    SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema,
    SamplingMessageSchema: SamplingMessageSchema,
    CreateMessageRequestParamsSchema: nr,
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
    ElicitRequestParamsSchema: Ae,
    ElicitRequestSchema: ElicitRequestSchema,
    ElicitationCompleteNotificationParamsSchema: hs,
    ElicitationCompleteNotificationSchema: ElicitationCompleteNotificationSchema,
    ElicitResultSchema: ElicitResultSchema,
    ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema,
    PromptReferenceSchema: PromptReferenceSchema,
    CompleteRequestParamsSchema: gs,
    CompleteRequestSchema: CompleteRequestSchema,
    CompleteResultSchema: CompleteResultSchema,
    RootSchema: RootSchema,
    ListRootsRequestSchema: ListRootsRequestSchema,
    ListRootsResultSchema: ListRootsResultSchema,
    RootsListChangedNotificationSchema: RootsListChangedNotificationSchema,
    TaskCreationParamsSchema: TaskCreationParamsSchema,
    TaskStatusSchema: Rs,
    TaskSchema: Ze,
    CreateTaskResultSchema: CreateTaskResultSchema,
    TaskStatusNotificationParamsSchema: zs,
    TaskStatusNotificationSchema: TaskStatusNotificationSchema,
    GetTaskRequestSchema: GetTaskRequestSchema,
    GetTaskResultSchema: GetTaskResultSchema,
    GetTaskPayloadRequestSchema: GetTaskPayloadRequestSchema,
    GetTaskPayloadResultSchema: GetTaskPayloadResultSchema,
    ListTasksRequestSchema: ListTasksRequestSchema,
    ListTasksResultSchema: ListTasksResultSchema,
    CancelTaskRequestSchema: CancelTaskRequestSchema,
    CancelTaskResultSchema: ResultSchema.merge(Ze),
    ClientRequestSchema: $e([PingRequestSchema, InitializeRequestSchema, CompleteRequestSchema, SetLevelRequestSchema, GetPromptRequestSchema, ListPromptsRequestSchema, ListResourcesRequestSchema, ListResourceTemplatesRequestSchema, ReadResourceRequestSchema, SubscribeRequestSchema, UnsubscribeRequestSchema, CallToolRequestSchema, ListToolsRequestSchema, GetTaskRequestSchema, GetTaskPayloadRequestSchema, ListTasksRequestSchema, CancelTaskRequestSchema]),
    ClientNotificationSchema: $e([CancelledNotificationSchema, ProgressNotificationSchema, InitializedNotificationSchema, RootsListChangedNotificationSchema, TaskStatusNotificationSchema]),
    ClientResultSchema: $e([EmptyResultSchema, CreateMessageResultSchema, CreateMessageResultWithToolsSchema, ElicitResultSchema, ListRootsResultSchema, GetTaskResultSchema, ListTasksResultSchema, CreateTaskResultSchema]),
    ServerRequestSchema: $e([PingRequestSchema, CreateMessageRequestSchema, ElicitRequestSchema, ListRootsRequestSchema, GetTaskRequestSchema, GetTaskPayloadRequestSchema, ListTasksRequestSchema, CancelTaskRequestSchema]),
    ServerNotificationSchema: $e([CancelledNotificationSchema, ProgressNotificationSchema, LoggingMessageNotificationSchema, ResourceUpdatedNotificationSchema, ResourceListChangedNotificationSchema, ToolListChangedNotificationSchema, PromptListChangedNotificationSchema, TaskStatusNotificationSchema, ElicitationCompleteNotificationSchema]),
    ServerResultSchema: $e([EmptyResultSchema, InitializeResultSchema, CompleteResultSchema, GetPromptResultSchema, ListPromptsResultSchema, ListResourcesResultSchema, ListResourceTemplatesResultSchema, ReadResourceResultSchema, CallToolResultSchema, ListToolsResultSchema, GetTaskResultSchema, ListTasksResultSchema, CreateTaskResultSchema]),
    CallToolResultWireSchema: oe().superRefine((we, bc) => {
      if (typeof we !== "object" || we === null || Array.isArray(we) || we.content !== void 0) return;
      for (let Pn of Xn) if (Pn in we) {
        bc.addIssue({
          code: "custom",
          message: `content is required when the body carries '${Pn}' \u2014 another result family cannot default into an empty tools/call success`
        });
        return;
      }
    }).transform(Ic).pipe(CallToolResultSchema)
  };
}
var Nc;
function Zn() {
  return Nc ??= Oc();
}
function Qn(e) {
  return e.type !== "object";
}
var Mc = new Set(["const", "enum", "default", "examples"]),
  jc = new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas"]);
function Ac(result_2) {
  let $schema = typeof result_2.$schema === "string" ? result_2.$schema : void 0;
  if (result_2.$id !== void 0) return {
    ...($schema !== void 0 && {
      $schema: $schema
    }),
    type: "object",
    properties: {
      result: result_2
    },
    required: ["result"]
  };
  let r = (s, a) => {
    if (Array.isArray(s)) return s.map(item => r(item, !1));
    if (s === null || typeof s !== "object") return s;
    if (!a && s.$id !== void 0) return s;
    let n = {};
    for (let [i, l] of Object.entries(s)) if (a) n[i] = r(l, !1);else if ((i === "$ref" || i === "$dynamicRef") && typeof l === "string") n[i] = l === "#" ? "#/properties/result" : l.startsWith("#/") ? `#/properties/result${l.slice(1)}` : l;else if (Mc.has(i)) n[i] = l;else if (jc.has(i)) n[i] = r(l, !0);else n[i] = r(l, !1);
    return n;
  };
  return {
    ...($schema !== void 0 && {
      $schema: $schema
    }),
    type: "object",
    properties: {
      result: r(result_2, !1)
    },
    required: ["result"]
  };
}
var ei = {
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
  ti = {
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
  Lc = {
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
  so;
function nn() {
  if (so) return so;
  let e = Zn();
  return so = {
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
  }, so;
}
function hasRequestMethod(e) {
  return Object.prototype.hasOwnProperty.call(ei, e);
}
function hasNotificationMethod(e) {
  return Object.prototype.hasOwnProperty.call(ti, e);
}
function Uc(e) {
  return Object.prototype.hasOwnProperty.call(Lc, e);
}
function Dc(e) {
  return Uc(e) ? nn().resultSchemas[e] : void 0;
}
function Vc(e) {
  return hasRequestMethod(e) ? nn().requestSchemas[e] : void 0;
}
function xc(e) {
  return hasNotificationMethod(e) ? nn().notificationSchemas[e] : void 0;
}
var Eh = Object.keys(ei),
  Ph = Object.keys(ti);
function en(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function ao(e, t) {
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
var An = {
  ok: !1,
  reason: "not-in-era"
};
function Ln(e) {
  return en(e) && en(e.outputSchema) && Qn(e.outputSchema);
}
function Un(e) {
  return e;
}
var cn = {
  era: "2025-11-25",
  hasRequestMethod: hasRequestMethod,
  hasNotificationMethod: hasNotificationMethod,
  validateRequest: (e, t) => ao(Vc(e), t),
  validateResult: (e, t) => ao(Dc(e), t),
  validateNotification: (e, t) => ao(xc(e), t),
  hasInputRequestMethod: () => !1,
  validateInputRequest: () => An,
  validateInputResponse: () => An,
  samplingResultVariant: (e, t) => {
    let r = Zn();
    return ao(e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
  },
  outboundEnvelope: e => {
    return;
  },
  validateEnvelopeMeta: e => [],
  projectCallToolResult(e, t) {
    let r = Yn(e),
      s = r.structuredContent;
    if (s === void 0) return r;
    let a = typeof s !== "object" || s === null || Array.isArray(s),
      n = t !== void 0 && Qn(t);
    if (!a && !n) return r;
    return {
      ...r,
      structuredContent: {
        result: s
      }
    };
  },
  decodeResult(e, t) {
    if (en(t) && "resultType" in t) {
      let r = {
        ...t
      };
      return delete r.resultType, {
        kind: "complete",
        result: Un(r)
      };
    }
    return {
      kind: "complete",
      result: Un(t)
    };
  },
  encodeResult(e, t) {
    if (e !== "tools/list") return t;
    let tools = t.tools;
    if (!Array.isArray(tools) || !tools.some(item => Ln(item))) return t;
    return {
      ...t,
      tools: tools.map(item => Ln(item) ? {
        ...item,
        outputSchema: Ac(item.outputSchema)
      } : item)
    };
  },
  encodeErrorCode: e => e === -32002 ? -32602 : e,
  checkInboundEnvelope: e => {
    return;
  }
};
function Fc() {
  let JSONValueSchema_2 = sT(() => $e([o(), v(), M(), Sf(), fe(o(), JSONValueSchema_2), T(JSONValueSchema_2)])),
    JSONObjectSchema_2 = fe(o(), JSONValueSchema_2),
    r = $e([o(), v().int()]),
    CursorSchema_2 = o(),
    a = $e([o(), v().int()]),
    n = U(["user", "assistant"]),
    i = U(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
    l = o().refine(pe => {
      try {
        return atob(pe), !0;
      } catch {
        return !1;
      }
    }, {
      message: "Invalid Base64 string"
    }),
    TaskMetadataSchema_2 = u({
      ttl: v().optional()
    }),
    RelatedTaskMetadataSchema_2 = u({
      taskId: o()
    }),
    RequestMetaSchema_2 = _t({
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
      sizes: T(o()).optional(),
      theme: U(["light", "dark"]).optional()
    }),
    IconsSchema_2 = u({
      icons: T(IconSchema_2).optional()
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
    f = Che(u({
      applyDefaults: M().optional()
    }), JSONObjectSchema_2),
    z = wa(pe => {
      if (pe && typeof pe === "object" && !Array.isArray(pe) && Object.keys(pe).length === 0) return {
        form: {}
      };
      return pe;
    }, Che(u({
      form: f.optional(),
      url: JSONObjectSchema_2.optional()
    }), JSONObjectSchema_2.optional())),
    ClientTasksCapabilitySchema_2 = _t({
      list: JSONObjectSchema_2.optional(),
      cancel: JSONObjectSchema_2.optional(),
      requests: _t({
        sampling: _t({
          createMessage: JSONObjectSchema_2.optional()
        }).optional(),
        elicitation: _t({
          create: JSONObjectSchema_2.optional()
        }).optional()
      }).optional()
    }),
    ServerTasksCapabilitySchema_2 = _t({
      list: JSONObjectSchema_2.optional(),
      cancel: JSONObjectSchema_2.optional(),
      requests: _t({
        tools: _t({
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
      elicitation: z.optional(),
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
      progress: v(),
      total: na(v()),
      message: na(o())
    }),
    K = u({
      ...NotificationsParamsSchema_2.shape,
      ...ProgressSchema_2.shape,
      progressToken: r
    }),
    ProgressNotificationSchema_2 = NotificationSchema_2.extend({
      method: C("notifications/progress"),
      params: K
    }),
    F = NotificationsParamsSchema_2.extend({
      level: i,
      logger: o().optional(),
      data: oe()
    }),
    LoggingMessageNotificationSchema_2 = NotificationSchema_2.extend({
      method: C("notifications/message"),
      params: F
    }),
    ResourceContentsSchema_2 = u({
      uri: o(),
      mimeType: na(o()),
      _meta: fe(o(), oe()).optional()
    }),
    TextResourceContentsSchema_2 = ResourceContentsSchema_2.extend({
      text: o()
    }),
    BlobResourceContentsSchema_2 = ResourceContentsSchema_2.extend({
      blob: l
    }),
    AnnotationsSchema_2 = u({
      audience: T(n).optional(),
      priority: v().min(0).max(1).optional(),
      lastModified: $e([zM({
        offset: !0
      }), zM({
        offset: !0,
        precision: -1
      })]).optional()
    }),
    ResourceSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      uri: o(),
      description: na(o()),
      mimeType: na(o()),
      size: na(v()),
      annotations: AnnotationsSchema_2.optional(),
      _meta: na(_t({}))
    }),
    ResourceTemplateSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      uriTemplate: o(),
      description: na(o()),
      mimeType: na(o()),
      annotations: AnnotationsSchema_2.optional(),
      _meta: na(_t({}))
    }),
    ResourceListChangedNotificationSchema_2 = NotificationSchema_2.extend({
      method: C("notifications/resources/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    }),
    D = NotificationsParamsSchema_2.extend({
      uri: o()
    }),
    ResourceUpdatedNotificationSchema_2 = NotificationSchema_2.extend({
      method: C("notifications/resources/updated"),
      params: D
    }),
    PromptArgumentSchema_2 = u({
      name: o(),
      description: na(o()),
      required: na(M())
    }),
    PromptSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      description: na(o()),
      arguments: na(T(PromptArgumentSchema_2)),
      _meta: na(_t({}))
    }),
    PromptListChangedNotificationSchema_2 = NotificationSchema_2.extend({
      method: C("notifications/prompts/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    }),
    TextContentSchema_2 = u({
      type: C("text"),
      text: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ImageContentSchema_2 = u({
      type: C("image"),
      data: l,
      mimeType: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    AudioContentSchema_2 = u({
      type: C("audio"),
      data: l,
      mimeType: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ToolUseContentSchema_2 = u({
      type: C("tool_use"),
      name: o(),
      id: o(),
      input: fe(o(), oe()),
      _meta: fe(o(), oe()).optional()
    }),
    EmbeddedResourceSchema_2 = u({
      type: C("resource"),
      resource: $e([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]),
      annotations: AnnotationsSchema_2.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ResourceLinkSchema_2 = ResourceSchema_2.extend({
      type: C("resource_link")
    }),
    I = $e([TextContentSchema_2, ImageContentSchema_2, AudioContentSchema_2, ResourceLinkSchema_2, EmbeddedResourceSchema_2]),
    PromptMessageSchema_2 = u({
      role: n,
      content: I
    }),
    ToolAnnotationsSchema_2 = u({
      title: o().optional(),
      readOnlyHint: M().optional(),
      destructiveHint: M().optional(),
      idempotentHint: M().optional(),
      openWorldHint: M().optional()
    }),
    ToolListChangedNotificationSchema_2 = NotificationSchema_2.extend({
      method: C("notifications/tools/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    }),
    ModelHintSchema_2 = u({
      name: o().optional()
    }),
    ModelPreferencesSchema_2 = u({
      hints: T(ModelHintSchema_2).optional(),
      costPriority: v().min(0).max(1).optional(),
      speedPriority: v().min(0).max(1).optional(),
      intelligencePriority: v().min(0).max(1).optional()
    }),
    ToolChoiceSchema_2 = u({
      mode: U(["auto", "required", "none"]).optional()
    }),
    BooleanSchemaSchema_2 = u({
      type: C("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: M().optional()
    }),
    StringSchemaSchema_2 = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: v().optional(),
      maxLength: v().optional(),
      format: U(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    }),
    NumberSchemaSchema_2 = u({
      type: U(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: v().optional(),
      maximum: v().optional(),
      default: v().optional()
    }),
    UntitledSingleSelectEnumSchemaSchema_2 = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      default: o().optional()
    }),
    TitledSingleSelectEnumSchemaSchema_2 = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: T(u({
        const: o(),
        title: o()
      })),
      default: o().optional()
    }),
    LegacyTitledEnumSchemaSchema_2 = u({
      type: C("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      enumNames: T(o()).optional(),
      default: o().optional()
    }),
    SingleSelectEnumSchemaSchema_2 = $e([UntitledSingleSelectEnumSchemaSchema_2, TitledSingleSelectEnumSchemaSchema_2]),
    UntitledMultiSelectEnumSchemaSchema_2 = u({
      type: C("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({
        type: C("string"),
        enum: T(o())
      }),
      default: T(o()).optional()
    }),
    TitledMultiSelectEnumSchemaSchema_2 = u({
      type: C("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({
        anyOf: T(u({
          const: o(),
          title: o()
        }))
      }),
      default: T(o()).optional()
    }),
    MultiSelectEnumSchemaSchema_2 = $e([UntitledMultiSelectEnumSchemaSchema_2, TitledMultiSelectEnumSchemaSchema_2]),
    EnumSchemaSchema_2 = $e([LegacyTitledEnumSchemaSchema_2, SingleSelectEnumSchemaSchema_2, MultiSelectEnumSchemaSchema_2]),
    PrimitiveSchemaDefinitionSchema_2 = $e([EnumSchemaSchema_2, BooleanSchemaSchema_2, StringSchemaSchema_2, NumberSchemaSchema_2]),
    ElicitRequestFormParamsSchema_2 = TaskAugmentedRequestParamsSchema_2.extend({
      mode: C("form").optional(),
      message: o(),
      requestedSchema: u({
        type: C("object"),
        properties: fe(o(), PrimitiveSchemaDefinitionSchema_2),
        required: T(o()).optional()
      }).catchall(oe())
    }),
    ResourceTemplateReferenceSchema_2 = u({
      type: C("ref/resource"),
      uri: o()
    }),
    PromptReferenceSchema_2 = u({
      type: C("ref/prompt"),
      name: o()
    }),
    RootSchema_2 = u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: fe(o(), oe()).optional()
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
    Rt = u({
      experimental: shape_2.experimental,
      logging: shape_2.logging,
      completions: shape_2.completions,
      prompts: shape_2.prompts,
      resources: shape_2.resources,
      tools: shape_2.tools,
      extensions: shape_2.extensions
    }),
    zt = _t({
      progressToken: r.optional(),
      [Fe]: o(),
      [Nt]: ImplementationSchema.optional(),
      [pNe]: ClientCapabilities2026Schema,
      [Mt]: i.optional()
    }),
    ToolSchema_2 = u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      description: o().optional(),
      inputSchema: _t({
        $schema: o().optional(),
        type: C("object")
      }),
      outputSchema: _t({
        $schema: o().optional()
      }).optional(),
      annotations: ToolAnnotationsSchema_2.optional(),
      _meta: fe(o(), oe()).optional()
    }),
    ToolResultContentSchema_2 = u({
      type: C("tool_result"),
      toolUseId: o(),
      content: T(I),
      structuredContent: oe().optional(),
      isError: M().optional(),
      _meta: fe(o(), oe()).optional()
    }),
    SamplingMessageContentBlockSchema_2 = $e([TextContentSchema_2, ImageContentSchema_2, AudioContentSchema_2, ToolUseContentSchema_2, ToolResultContentSchema_2]),
    SamplingMessageSchema_2 = u({
      role: n,
      content: $e([SamplingMessageContentBlockSchema_2, T(SamplingMessageContentBlockSchema_2)]),
      _meta: fe(o(), oe()).optional()
    }),
    ResultTypeSchema = o(),
    ResultMetaSchema = _t({
      [He]: ImplementationSchema.optional().catch(void 0)
    }),
    _meta_2 = ResultMetaSchema.optional();
  function ze(pe) {
    return _t({
      _meta: _meta_2,
      resultType: ResultTypeSchema.default("complete"),
      ...pe
    });
  }
  let ResultSchema_2 = ze({}),
    PaginatedResultSchema_2 = ze({
      nextCursor: CursorSchema_2.optional()
    }),
    CallToolResultSchema_2 = ze({
      content: T(I),
      structuredContent: oe().optional(),
      isError: M().optional()
    }),
    ListToolsResultSchema_2 = ze({
      ttlMs: v().int().min(0),
      cacheScope: U(["public", "private"]),
      tools: T(ToolSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    ListPromptsResultSchema_2 = ze({
      ttlMs: v().int().min(0),
      cacheScope: U(["public", "private"]),
      prompts: T(PromptSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    GetPromptResultSchema_2 = ze({
      description: o().optional(),
      messages: T(PromptMessageSchema_2)
    }),
    ListResourcesResultSchema_2 = ze({
      ttlMs: v().int().min(0),
      cacheScope: U(["public", "private"]),
      resources: T(ResourceSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    ListResourceTemplatesResultSchema_2 = ze({
      ttlMs: v().int().min(0),
      cacheScope: U(["public", "private"]),
      resourceTemplates: T(ResourceTemplateSchema_2),
      nextCursor: CursorSchema_2.optional()
    }),
    ReadResourceResultSchema_2 = ze({
      ttlMs: v().int().min(0),
      cacheScope: U(["public", "private"]),
      contents: T($e([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]))
    }),
    CompleteResultSchema_2 = ze({
      completion: u({
        values: T(o()).max(100),
        total: v().int().optional(),
        hasMore: M().optional()
      }).loose()
    }),
    CacheableResultSchema = ze({
      ttlMs: v().int().min(0),
      cacheScope: U(["public", "private"])
    }),
    DiscoverResultSchema = ze({
      ttlMs: v().int().min(0).catch(0),
      cacheScope: U(["public", "private"]).catch("private"),
      supportedVersions: T(o()),
      capabilities: Rt,
      instructions: o().optional()
    }),
    Xe = u({
      messages: T(SamplingMessageSchema_2),
      modelPreferences: ModelPreferencesSchema_2.optional(),
      systemPrompt: o().optional(),
      includeContext: U(["none", "thisServer", "allServers"]).optional(),
      temperature: v().optional(),
      maxTokens: v().int(),
      stopSequences: T(o()).optional(),
      metadata: JSONObjectSchema_2.optional(),
      tools: T(ToolSchema_2).optional(),
      toolChoice: ToolChoiceSchema_2.optional()
    }),
    CreateMessageRequestSchema_2 = u({
      method: C("sampling/createMessage"),
      params: Xe
    }),
    ListRootsRequestSchema_2 = u({
      method: C("roots/list"),
      params: u({
        _meta: fe(o(), oe()).optional()
      }).optional()
    }),
    CreateMessageResultSchema_2 = u({
      ...SamplingMessageSchema_2.shape,
      model: o(),
      stopReason: o().optional()
    }),
    ListRootsResultSchema_2 = u({
      roots: T(RootSchema_2)
    }),
    ElicitResultSchema_2 = u({
      action: U(["accept", "decline", "cancel"]),
      content: fe(o(), $e([o(), v(), M(), T(o())])).optional()
    }),
    ElicitRequestURLParamsSchema_2 = u({
      mode: C("url"),
      message: o(),
      url: o().url()
    }),
    dr = $e([ElicitRequestFormParamsSchema_2, ElicitRequestURLParamsSchema_2]),
    ElicitRequestSchema_2 = u({
      method: C("elicitation/create"),
      params: dr
    }),
    InputRequestSchema = $e([CreateMessageRequestSchema_2, ListRootsRequestSchema_2, ElicitRequestSchema_2]),
    InputResponseSchema = $e([CreateMessageResultSchema_2, ListRootsResultSchema_2, ElicitResultSchema_2]),
    InputRequestsSchema = fe(o(), InputRequestSchema),
    InputResponsesSchema = fe(o(), InputResponseSchema),
    InputRequiredResultSchema = ze({
      inputRequests: InputRequestsSchema.optional(),
      requestState: o().optional()
    }),
    mt = {
      inputResponses: InputResponsesSchema.optional(),
      requestState: o().optional()
    },
    InputResponseRequestParamsSchema = u({
      _meta: zt,
      ...mt
    }),
    us = _t({
      progressToken: r.optional()
    });
  function qe(pe, ft) {
    return u({
      method: C(pe),
      params: u({
        _meta: zt,
        ...ft
      })
    });
  }
  function Ie(pe, ft) {
    return u({
      method: C(pe),
      params: u({
        _meta: us.optional(),
        ...ft
      }).optional()
    });
  }
  let gr = {
      name: o(),
      arguments: fe(o(), oe()).optional(),
      ...mt
    },
    Ae = {
      cursor: CursorSchema_2.optional()
    },
    CallToolRequestSchema_2 = qe("tools/call", gr),
    ListToolsRequestSchema_2 = qe("tools/list", Ae),
    ListPromptsRequestSchema_2 = qe("prompts/list", Ae),
    GetPromptRequestSchema_2 = qe("prompts/get", {
      name: o(),
      arguments: fe(o(), o()).optional(),
      ...mt
    }),
    ListResourcesRequestSchema_2 = qe("resources/list", Ae),
    ListResourceTemplatesRequestSchema_2 = qe("resources/templates/list", Ae),
    ReadResourceRequestSchema_2 = qe("resources/read", {
      uri: o(),
      ...mt
    }),
    _r = {
      ref: $e([PromptReferenceSchema_2, ResourceTemplateReferenceSchema_2]),
      argument: u({
        name: o(),
        value: o()
      }),
      context: u({
        arguments: fe(o(), o()).optional()
      }).optional()
    },
    CompleteRequestSchema_2 = qe("completion/complete", _r),
    DiscoverRequestSchema = qe("server/discover", {}),
    Ct = u({
      toolsListChanged: M().optional(),
      promptsListChanged: M().optional(),
      resourcesListChanged: M().optional(),
      resourceSubscriptions: T(o()).optional()
    }),
    yr = {
      notifications: Ct
    },
    SubscriptionsListenRequestSchema = qe("subscriptions/listen", yr),
    bs = ResultMetaSchema.extend({
      "io.modelcontextprotocol/subscriptionId": a
    }),
    SubscriptionsListenResultSchema = _t({
      _meta: bs,
      resultType: ResultTypeSchema.default("complete")
    }),
    dispatchRequestSchemas = {
      "tools/call": Ie("tools/call", gr),
      "tools/list": Ie("tools/list", Ae),
      "prompts/get": Ie("prompts/get", {
        name: o(),
        arguments: fe(o(), o()).optional()
      }),
      "prompts/list": Ie("prompts/list", Ae),
      "resources/list": Ie("resources/list", Ae),
      "resources/templates/list": Ie("resources/templates/list", Ae),
      "resources/read": Ie("resources/read", {
        uri: o()
      }),
      "completion/complete": Ie("completion/complete", _r),
      "server/discover": Ie("server/discover", {}),
      "subscriptions/listen": Ie("subscriptions/listen", yr)
    };
  function Ce(pe) {
    return _t({
      _meta: _meta_2,
      ...pe
    });
  }
  let dispatchResultSchemas = {
      "tools/call": Ce({
        content: T(I),
        structuredContent: oe().optional(),
        isError: M().optional()
      }),
      "tools/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: U(["public", "private"]),
        tools: T(ToolSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "prompts/get": Ce({
        description: o().optional(),
        messages: T(PromptMessageSchema_2)
      }),
      "prompts/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: U(["public", "private"]),
        prompts: T(PromptSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "resources/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: U(["public", "private"]),
        resources: T(ResourceSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "resources/templates/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: U(["public", "private"]),
        resourceTemplates: T(ResourceTemplateSchema_2),
        nextCursor: CursorSchema_2.optional()
      }),
      "resources/read": Ce({
        ttlMs: v().int().min(0),
        cacheScope: U(["public", "private"]),
        contents: T($e([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]))
      }),
      "completion/complete": Ce({
        completion: u({
          values: T(o()).max(100),
          total: v().int().optional(),
          hasMore: M().optional()
        }).loose()
      }),
      "server/discover": Ce({
        ttlMs: v().int().min(0).catch(0),
        cacheScope: U(["public", "private"]).catch("private"),
        supportedVersions: T(o()),
        capabilities: Rt,
        instructions: o().optional()
      }),
      "subscriptions/listen": Ce({})
    },
    NotificationMetaSchema = _t({
      "io.modelcontextprotocol/subscriptionId": a.optional()
    }),
    SubscriptionsAcknowledgedNotificationSchema = u({
      method: C("notifications/subscriptions/acknowledged"),
      params: u({
        _meta: NotificationMetaSchema.optional(),
        notifications: Ct
      })
    }),
    qt = u({
      _meta: NotificationMetaSchema.optional(),
      requestId: a,
      reason: o().optional()
    }),
    CancelledNotificationSchema_2 = u({
      method: C("notifications/cancelled"),
      params: qt
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
    ke = result_3 => u({
      jsonrpc: C("2.0"),
      id: $e([o(), v().int()]),
      result: result_3
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
    LoggingMessageNotificationParamsSchema: F,
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
    ContentBlockSchema: I,
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
    ServerCapabilities2026Schema: Rt,
    RequestMetaEnvelopeSchema: zt,
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
    CreateMessageRequestParamsSchema: Xe,
    CreateMessageRequestSchema: CreateMessageRequestSchema_2,
    ListRootsRequestSchema: ListRootsRequestSchema_2,
    CreateMessageResultSchema: CreateMessageResultSchema_2,
    ListRootsResultSchema: ListRootsResultSchema_2,
    ElicitResultSchema: ElicitResultSchema_2,
    ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema_2,
    ElicitRequestParamsSchema: dr,
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
    SubscriptionFilterSchema: Ct,
    SubscriptionsListenRequestSchema: SubscriptionsListenRequestSchema,
    SubscriptionsListenResultMetaSchema: bs,
    SubscriptionsListenResultSchema: SubscriptionsListenResultSchema,
    dispatchRequestSchemas: dispatchRequestSchemas,
    dispatchResultSchemas: dispatchResultSchemas,
    NotificationMetaSchema: NotificationMetaSchema,
    SubscriptionsAcknowledgedNotificationSchema: SubscriptionsAcknowledgedNotificationSchema,
    CancelledNotificationParamsSchema: qt,
    CancelledNotificationSchema: CancelledNotificationSchema_2,
    notificationSchemas2026: notificationSchemas2026,
    JSONRPCResultResponseSchema: ke(ResultSchema_2),
    CallToolResultResponseSchema: ke($e([CallToolResultSchema_2, InputRequiredResultSchema])),
    ListToolsResultResponseSchema: ke(ListToolsResultSchema_2),
    ListPromptsResultResponseSchema: ke(ListPromptsResultSchema_2),
    GetPromptResultResponseSchema: ke($e([GetPromptResultSchema_2, InputRequiredResultSchema])),
    ListResourcesResultResponseSchema: ke(ListResourcesResultSchema_2),
    ListResourceTemplatesResultResponseSchema: ke(ListResourceTemplatesResultSchema_2),
    ReadResourceResultResponseSchema: ke($e([ReadResourceResultSchema_2, InputRequiredResultSchema])),
    CompleteResultResponseSchema: ke(CompleteResultSchema_2),
    DiscoverResultResponseSchema: ke(DiscoverResultSchema)
  };
}
var Hc;
function vt() {
  return Hc ??= Fc();
}
var Kc = ["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"];
function Jc(e) {
  return Kc.includes(e);
}
var ln = Symbol("modelcontextprotocol.resultCacheHintFallback");
function Gc(e) {
  return e[ln];
}
function ai(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function oi(e) {
  return e === "public" || e === "private";
}
var Mi = function (e) {
    return e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.ResourceNotFound = -32002] = "ResourceNotFound", e[e.MissingRequiredClientCapability = -32021] = "MissingRequiredClientCapability", e[e.UnsupportedProtocolVersion = -32022] = "UnsupportedProtocolVersion", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired", e;
  }({}),
  ed = class ProtocolError extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ProtocolError"
      });
    }
    static [Symbol.hasInstance](t) {
      return Oe(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Oe(this, t);
    }
    constructor(t, r, s) {
      super(r);
      this.code = t, this.data = s, this.name = "ProtocolError", bt(this, new.target);
    }
    static fromError(t, r, s) {
      if (t === Mi.UrlElicitationRequired && s) {
        let a = s;
        if (a.elicitations) return new ii(a.elicitations, r);
      }
      if (t === Mi.UnsupportedProtocolVersion && s) {
        let a = s;
        if (Array.isArray(a.supported) && typeof a.requested === "string") return new lo({
          supported: a.supported,
          requested: a.requested
        }, r);
      }
      if (t === Mi.InvalidParams || t === Mi.ResourceNotFound) {
        let a = s;
        if (typeof a?.uri === "string" && (t === Mi.ResourceNotFound || Object.keys(a).length === 1)) return new ni(a.uri, r);
      }
      if (t === Mi.MissingRequiredClientCapability && s) {
        let a = s;
        if (a.requiredCapabilities !== null && typeof a.requiredCapabilities === "object" && !Array.isArray(a.requiredCapabilities)) return new ci({
          requiredCapabilities: a.requiredCapabilities
        }, r);
      }
      return new ProtocolError(t, r, s);
    }
  },
  ni = class extends ed {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ResourceNotFoundError"
      });
    }
    constructor(uri, t = `Resource not found: ${uri}`) {
      super(Mi.InvalidParams, t, {
        uri: uri
      });
    }
    get uri() {
      return this.data.uri;
    }
  },
  ii = class extends ed {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UrlElicitationRequiredError"
      });
    }
    constructor(elicitations, t = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
      super(Mi.UrlElicitationRequired, t, {
        elicitations: elicitations
      });
    }
    get elicitations() {
      return this.data?.elicitations ?? [];
    }
  },
  lo = class extends ed {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UnsupportedProtocolVersionError"
      });
    }
    constructor(e, t = `Unsupported protocol version: ${e.requested}`) {
      super(Mi.UnsupportedProtocolVersion, t, e);
    }
    get supported() {
      return this.data.supported;
    }
    get requested() {
      return this.data.requested;
    }
  },
  ci = class extends ed {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.MissingRequiredClientCapabilityError"
      });
    }
    constructor(e, t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`) {
      super(Mi.MissingRequiredClientCapability, t, e);
    }
    get requiredCapabilities() {
      return this.data.requiredCapabilities;
    }
  },
  Bc = 0,
  Wc = "private",
  Yc = ["tools/call", "prompts/get", "resources/read"];
function Xc(e, t) {
  let resultType = t.resultType;
  if (resultType === void 0) return {
    ...t,
    resultType: "complete"
  };
  if (resultType === "complete") return t;
  if (Yc.includes(e)) return t;
  throw new ed(Mi.InternalError, `Handler for ${e} returned resultType '${String(resultType)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`);
}
function Zc(e, t) {
  let r = Gc(t);
  if (t.resultType !== "complete" || !Jc(e)) return r === void 0 ? t : sl(t);
  let s = t,
    ttlMs = ai(s.ttlMs) ? s.ttlMs : tl(r),
    cacheScope = oi(s.cacheScope) ? s.cacheScope : rl(r),
    i = {
      ...s,
      ttlMs: ttlMs,
      cacheScope: cacheScope
    };
  return delete i[ln], i;
}
function Qc(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function el(e, t) {
  if (t === void 0) return e;
  let _meta_3 = e._meta;
  if (_meta_3 === void 0) return {
    ...e,
    _meta: {
      [He]: t
    }
  };
  if (!Qc(_meta_3)) return e;
  if (_meta_3[He] !== void 0) return e;
  return {
    ...e,
    _meta: {
      ..._meta_3,
      [He]: t
    }
  };
}
function tl(e) {
  return e !== void 0 && ai(e.ttlMs) ? e.ttlMs : Bc;
}
function rl(e) {
  return e !== void 0 && oi(e.cacheScope) ? e.cacheScope : Wc;
}
function sl(e) {
  let t = {
    ...e
  };
  return delete t[ln], t;
}
var al = ["elicitation/create", "sampling/createMessage", "roots/list"],
  oo;
function li() {
  if (oo) return oo;
  let e = vt();
  return oo = {
    request: {
      "elicitation/create": u({
        method: C("elicitation/create"),
        params: e.ElicitRequestParamsSchema
      }),
      "sampling/createMessage": u({
        method: C("sampling/createMessage"),
        params: e.CreateMessageRequestParamsSchema
      }),
      "roots/list": u({
        method: C("roots/list"),
        params: _t({}).optional()
      })
    },
    response: {
      "elicitation/create": e.ElicitResultSchema,
      "sampling/createMessage": e.CreateMessageResultSchema,
      "roots/list": e.ListRootsResultSchema
    }
  }, oo;
}
function ui(e) {
  return al.includes(e);
}
function inputRequestSchema(e) {
  return ui(e) ? li().request[e] : void 0;
}
function ol(e) {
  return ui(e) ? li().response[e] : void 0;
}
var un = {
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
  di = {
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
  return Object.prototype.hasOwnProperty.call(un, e);
}
function hasNotificationMethod_2(e) {
  return Object.prototype.hasOwnProperty.call(di, e);
}
function nl(e) {
  return Object.prototype.hasOwnProperty.call(un, e);
}
function il(e) {
  return hasRequestMethod_2(e) ? vt().dispatchRequestSchemas[e] : void 0;
}
function cl(e) {
  return nl(e) ? vt().dispatchResultSchemas[e] : void 0;
}
function ll(e) {
  return hasNotificationMethod_2(e) ? vt().notificationSchemas2026[e] : void 0;
}
var Th = Object.keys(un),
  Ch = Object.keys(di);
function Zr(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Yr(e, t) {
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
var ul = {
    ok: !1,
    reason: "not-in-era"
  },
  dl = [Fe, pNe];
function hl(e, t) {
  let r = t,
    s = !1,
    a = () => {
      if (!s) r = {
        ...r
      }, s = !0;
      return r;
    },
    tools_2 = t.tools;
  if (e === "tools/list" && Array.isArray(tools_2) && tools_2.some(item => Zr(item) && "execution" in item)) a().tools = tools_2.map(item => {
    if (!Zr(item) || !("execution" in item)) return item;
    let c = {
      ...item
    };
    return delete c.execution, c;
  });
  let capabilities_3 = t.capabilities;
  if (Zr(capabilities_3) && "tasks" in capabilities_3) {
    let l = {
      ...capabilities_3
    };
    delete l.tasks, a().capabilities = l;
  }
  return r;
}
var ml = "io.modelcontextprotocol/tasks",
  pl = new Set(["working", "input_required", "completed", "failed", "cancelled"]);
function fl(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return !1;
  return typeof e.taskId === "string" && e.taskId.length > 0 && pl.has(e.status) && typeof e.createdAt === "string" && typeof e.lastUpdatedAt === "string" && (e.ttlMs === null || typeof e.ttlMs === "number") && (e.pollIntervalMs === void 0 || typeof e.pollIntervalMs === "number");
}
var dn = {
    era: "2026-07-28",
    hasRequestMethod: hasRequestMethod_2,
    hasNotificationMethod: hasNotificationMethod_2,
    hasInputRequestMethod: e => inputRequestSchema(e) !== void 0,
    validateRequest: (e, t) => Yr(il(e), t),
    validateResult: (e, t) => Yr(cl(e), t),
    validateNotification: (e, t) => Yr(ll(e), t),
    validateInputRequest: (e, t) => Yr(inputRequestSchema(e), t),
    validateInputResponse: (e, t) => Yr(ol(e), t),
    samplingResultVariant: () => ul,
    outboundEnvelope(e) {
      return {
        [Fe]: e.protocolVersion,
        [Nt]: e.clientInfo,
        [pNe]: e.clientCapabilities,
        ...(e.logLevel !== void 0 && {
          [Mt]: e.logLevel
        })
      };
    },
    validateEnvelopeMeta(e) {
      let t = [];
      for (let key of dl) if (!(key in e)) t.push({
        key: key,
        problem: "missing"
      });
      let r = vt().RequestMetaEnvelopeSchema.safeParse(e);
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
    projectCallToolResult: e => Yn(e),
    inputRequestSchema: inputRequestSchema,
    decodeResult(method, result_4) {
      if (!Zr(result_4)) return {
        kind: "invalid",
        error: new Ks(Ls.InvalidResult, `Invalid result for ${method}: not an object`, {
          method: method
        })
      };
      let resultType_2 = result_4.resultType;
      if (resultType_2 === void 0) return {
        kind: "invalid",
        error: new Ks(Ls.InvalidResult, `Invalid result for ${method}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, {
          method: method,
          violation: "missing-resultType"
        })
      };
      if (typeof resultType_2 !== "string") return {
        kind: "invalid",
        error: new Ks(Ls.InvalidResult, `Invalid result for ${method}: non-string resultType`, {
          method: method,
          resultType: resultType_2
        })
      };
      if (resultType_2 === "input_required") {
        let inputRequests = result_4.inputRequests,
          inputRequests_2 = Zr(inputRequests) ? inputRequests : {},
          requestState = result_4.requestState;
        if (Object.keys(inputRequests_2).length === 0 && typeof requestState !== "string") return {
          kind: "invalid",
          error: new Ks(Ls.InvalidResult, `Invalid result for ${method}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, {
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
        result: result_4
      };
      if (resultType_2 !== "complete") return {
        kind: "invalid",
        error: new Ks(Ls.UnsupportedResultType, `Unsupported result type '${resultType_2}' for ${method}`, {
          resultType: resultType_2,
          method: method
        })
      };
      let s = Sl(),
        a = Object.hasOwn(s, method) ? s[method] : void 0;
      if (a !== void 0) {
        let i = a.safeParse(result_4);
        if (!i.success) return {
          kind: "invalid",
          error: new Ks(Ls.InvalidResult, `Invalid result for ${method}: ${i.error}`, {
            method: method
          })
        };
      }
      let result_5 = {
        ...result_4
      };
      return delete result_5.resultType, {
        kind: "complete",
        result: result_5
      };
    },
    encodeResult(e, t, r) {
      return el(Zc(e, Xc(e, hl(e, t))), r);
    },
    encodeErrorCode: e => e === -32002 ? -32602 : e,
    checkInboundEnvelope(e) {
      if (e.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
      let t = vt().RequestMetaEnvelopeSchema.safeParse(e.envelope);
      if (!t.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map(item => item.message).join("; ")}`;
    }
  },
  no;
function Sl() {
  if (no) return no;
  let e = vt();
  return no = {
    "tools/call": e.CallToolResultSchema,
    "tools/list": e.ListToolsResultSchema,
    "prompts/get": e.GetPromptResultSchema,
    "prompts/list": e.ListPromptsResultSchema,
    "resources/list": e.ListResourcesResultSchema,
    "resources/templates/list": e.ListResourceTemplatesResultSchema,
    "resources/read": e.ReadResourceResultSchema,
    "completion/complete": e.CompleteResultSchema,
    "server/discover": e.DiscoverResultSchema
  }, no;
}
var uo = "2026-07-28";
function Je(e) {
  return e !== void 0 && Ge(e) ? dn : cn;
}
function Dn(e) {
  if (e.revision !== void 0) return Je(e.revision).era;
  return e.era === "modern" ? dn.era : cn.era;
}
function Yo(e) {
  return pi.some(item => item.hasRequestMethod(e));
}
function Xo(e) {
  return pi.some(item => item.hasNotificationMethod(e));
}
var pi = [cn, dn],
  gl = Tn({
    AnnotationsSchema: () => Ke,
    AudioContentSchema: () => Vt,
    BaseMetadataSchema: () => xe,
    BaseRequestParamsSchema: () => be,
    BlobResourceContentsSchema: () => Mr,
    BooleanSchemaSchema: () => Dr,
    CallToolRequestParamsSchema: () => params_11,
    CallToolRequestSchema: () => _a,
    CallToolResultSchema: () => Ar,
    CancelTaskRequestSchema: () => Uo,
    CancelTaskResultSchema: () => Do,
    CancelledNotificationParamsSchema: () => params,
    CancelledNotificationSchema: () => Tr,
    ClientCapabilitiesSchema: () => capabilities,
    ClientNotificationSchema: () => xo,
    ClientRequestSchema: () => Vo,
    ClientResultSchema: () => Fo,
    ClientTasksCapabilitySchema: () => Cs,
    CompatibilityCallToolResultSchema: () => JKt,
    CompleteRequestParamsSchema: () => params_17,
    CompleteRequestSchema: () => Ka,
    CompleteResultSchema: () => Ja,
    ContentBlockSchema: () => content,
    CreateMessageRequestParamsSchema: () => params_14,
    CreateMessageRequestSchema: () => Ia,
    CreateMessageResultSchema: () => Oa,
    CreateMessageResultWithToolsSchema: () => Na,
    CreateTaskResultSchema: () => qo,
    CursorSchema: () => Rr,
    DiscoverRequestSchema: () => Os,
    DiscoverResultSchema: () => Gqe,
    ElicitRequestFormParamsSchema: () => Kt,
    ElicitRequestParamsSchema: () => params_15,
    ElicitRequestSchema: () => La,
    ElicitRequestURLParamsSchema: () => BEt,
    ElicitResultSchema: () => Va,
    ElicitationCompleteNotificationParamsSchema: () => params_16,
    ElicitationCompleteNotificationSchema: () => Da,
    EmbeddedResourceSchema: () => la,
    EmptyResultSchema: () => Pr,
    EnumSchemaSchema: () => Aa,
    GetPromptRequestParamsSchema: () => params_10,
    GetPromptRequestSchema: () => ia,
    GetPromptResultSchema: () => ha,
    GetTaskPayloadRequestSchema: () => Mo,
    GetTaskPayloadResultSchema: () => jo,
    GetTaskRequestSchema: () => Oo,
    GetTaskResultSchema: () => No,
    IconSchema: () => Ts,
    IconsSchema: () => tt,
    ImageContentSchema: () => Dt,
    ImplementationSchema: () => Yrt,
    InitializeRequestParamsSchema: () => params_2,
    InitializeRequestSchema: () => Cr,
    InitializeResultSchema: () => Xrt,
    InitializedNotificationSchema: () => kr,
    JSONArraySchema: () => Po,
    JSONObjectSchema: () => de,
    JSONRPCErrorResponseSchema: () => At,
    JSONRPCMessageSchema: () => foe,
    JSONRPCNotificationSchema: () => Er,
    JSONRPCRequestSchema: () => $r,
    JSONRPCResponseSchema: () => To,
    JSONRPCResultResponseSchema: () => jt,
    JSONValueSchema: () => Qe,
    LegacyTitledEnumSchemaSchema: () => Fr,
    ListChangedOptionsBaseSchema: () => Lr,
    ListPromptsRequestSchema: () => aa,
    ListPromptsResultSchema: () => XKt,
    ListResourceTemplatesRequestSchema: () => Us,
    ListResourceTemplatesResultSchema: () => KKt,
    ListResourcesRequestSchema: () => As,
    ListResourcesResultSchema: () => Vqe,
    ListRootsRequestSchema: () => Ba,
    ListRootsResultSchema: () => Wa,
    ListTasksRequestSchema: () => Ao,
    ListTasksResultSchema: () => Lo,
    ListToolsRequestSchema: () => Sa,
    ListToolsResultSchema: () => qqe,
    LoggingLevelSchema: () => level,
    LoggingMessageNotificationParamsSchema: () => params_13,
    LoggingMessageNotificationSchema: () => za,
    ModelHintSchema: () => $a,
    ModelPreferencesSchema: () => Ea,
    MultiSelectEnumSchemaSchema: () => ja,
    NotificationSchema: () => Pe,
    NotificationsParamsSchema: () => Ee,
    NumberSchemaSchema: () => Ht,
    PaginatedRequestParamsSchema: () => js,
    PaginatedRequestSchema: () => rt,
    PaginatedResultSchema: () => st,
    PingRequestSchema: () => qr,
    PrimitiveSchemaDefinitionSchema: () => Gr,
    ProgressNotificationParamsSchema: () => params_3,
    ProgressNotificationSchema: () => Ir,
    ProgressSchema: () => Ns,
    ProgressTokenSchema: () => progressToken,
    PromptArgumentSchema: () => sa,
    PromptListChangedNotificationSchema: () => ma,
    PromptMessageSchema: () => da,
    PromptReferenceSchema: () => Fa,
    PromptSchema: () => YKt,
    ReadResourceRequestParamsSchema: () => params_4,
    ReadResourceRequestSchema: () => Vs,
    ReadResourceResultSchema: () => xs,
    RelatedTaskMetadataSchema: () => VKt,
    RequestIdSchema: () => id_2,
    RequestMetaSchema: () => zr,
    RequestSchema: () => he,
    ResourceContentsSchema: () => Or,
    ResourceLinkSchema: () => ua,
    ResourceListChangedNotificationSchema: () => Fs,
    ResourceRequestParamsSchema: () => Lt,
    ResourceSchema: () => $Et,
    ResourceTemplateReferenceSchema: () => xa,
    ResourceTemplateSchema: () => qKt,
    ResourceUpdatedNotificationParamsSchema: () => params_9,
    ResourceUpdatedNotificationSchema: () => ra,
    ResultMetaObjectSchema: () => wr,
    ResultSchema: () => result,
    RoleSchema: () => role,
    RootSchema: () => Ga,
    RootsListChangedNotificationSchema: () => Ya,
    SamplingContentSchema: () => content_2,
    SamplingMessageContentBlockSchema: () => St,
    SamplingMessageSchema: () => ka,
    ServerCapabilitiesSchema: () => capabilities_2,
    ServerNotificationSchema: () => Ko,
    ServerRequestSchema: () => Ho,
    ServerResultSchema: () => Jo,
    ServerTasksCapabilitySchema: () => ks,
    SetLevelRequestParamsSchema: () => params_12,
    SetLevelRequestSchema: () => ba,
    SingleSelectEnumSchemaSchema: () => Ma,
    StringSchemaSchema: () => Ft,
    SubscribeRequestParamsSchema: () => params_5,
    SubscribeRequestSchema: () => Js,
    SubscriptionFilterSchema: () => notifications,
    SubscriptionsAcknowledgedNotificationParamsSchema: () => params_8,
    SubscriptionsAcknowledgedNotificationSchema: () => Zs,
    SubscriptionsListenRequestParamsSchema: () => params_7,
    SubscriptionsListenRequestSchema: () => Ys,
    SubscriptionsListenResultMetaSchema: () => _meta,
    SubscriptionsListenResultSchema: () => ea,
    TaskAugmentedRequestParamsSchema: () => yt,
    TaskCreationParamsSchema: () => ko,
    TaskMetadataSchema: () => Es,
    TaskSchema: () => task,
    TaskStatusNotificationParamsSchema: () => params_18,
    TaskStatusNotificationSchema: () => Io,
    TaskStatusSchema: () => status,
    TextContentSchema: () => Ut,
    TextResourceContentsSchema: () => Nr,
    TitledMultiSelectEnumSchemaSchema: () => Kr,
    TitledSingleSelectEnumSchemaSchema: () => xr,
    ToolAnnotationsSchema: () => pa,
    ToolChoiceSchema: () => Pa,
    ToolExecutionSchema: () => fa,
    ToolListChangedNotificationSchema: () => ya,
    ToolResultContentSchema: () => Ta,
    ToolSchema: () => UEt,
    ToolUseContentSchema: () => ca,
    UnsubscribeRequestParamsSchema: () => params_6,
    UnsubscribeRequestSchema: () => Bs,
    UntitledMultiSelectEnumSchemaSchema: () => Hr,
    UntitledSingleSelectEnumSchemaSchema: () => Vr
  });
var m7 = e => $r.safeParse(e).success,
  Xir = e => Er.safeParse(e).success,
  CRe = e => jt.safeParse(e).success,
  H_e = e => At.safeParse(e).success;
var fi = e => typeof e === "object" && e !== null && !Array.isArray(e) && e.resultType === "input_required";
var TCn = e => Cr.safeParse(e).success,
  Jir = e => kr.safeParse(e).success;
var _l = "Mcp-Param-",
  Vn = "x-mcp-header",
  yl = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
  vl = new Set(["string", "integer", "boolean", "number"]);
function hn(e) {
  let declarations = [],
    r = new Map(),
    s = (n, path, l) => {
      if (n === null || typeof n !== "object") return;
      let c = n;
      if (Vn in c) {
        if (!l || path.length === 0) return `${io(path)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
        let headerName = c[Vn];
        if (typeof headerName !== "string" || headerName.length === 0) return `${io(path)}: x-mcp-header MUST be a non-empty string`;
        if (!yl.test(headerName)) return `${io(path)}: x-mcp-header '${headerName}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
        let type = typeof c.type === "string" ? c.type : void 0;
        if (type === void 0 || !vl.has(type)) return `${io(path)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${type ?? "<none>"}`;
        let E = headerName.toLowerCase(),
          P = r.get(E);
        if (P !== void 0) return `x-mcp-header '${headerName}' is not case-insensitively unique (also declared as '${P}')`;
        r.set(E, headerName), declarations.push({
          path: path,
          headerName: headerName,
          type: type
        });
      }
      let properties = c.properties;
      if (properties !== null && typeof properties === "object") for (let [m, _] of Object.entries(properties)) {
        let E = s(_, [...path, m], l);
        if (E !== void 0) return E;
      }
      for (let m of bl) {
        let _ = c[m];
        if (_ === void 0) continue;
        let E = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && Rl.has(m) ? Object.values(_) : [_];
        for (let P of E) {
          let y = s(P, [...path, `<${m}>`], !1);
          if (y !== void 0) return y;
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
var bl = ["items", "prefixItems", "contains", "additionalProperties", "unevaluatedProperties", "unevaluatedItems", "propertyNames", "patternProperties", "dependentSchemas", "oneOf", "anyOf", "allOf", "not", "if", "then", "else", "$defs", "definitions"],
  Rl = new Set(["patternProperties", "dependentSchemas", "$defs", "definitions"]);
function io(e) {
  return e.length === 0 ? "<root>" : e.join(".");
}
var Si = "=?base64?",
  gi = "?=";
function zl(e) {
  if (typeof e === "string") return e;
  if (typeof e === "boolean") return e ? "true" : "false";
  if (typeof e === "number") {
    if (!Number.isFinite(e)) return;
    if (Number.isInteger(e) && !Number.isSafeInteger(e)) return;
    return String(e);
  }
}
function wl(e) {
  if (e.length === 0) return !0;
  if (e.startsWith(Si) && e.endsWith(gi)) return !0;
  if (e !== e.trim()) return !0;
  for (let t = 0; t < e.length; t++) {
    let r = e.codePointAt(t);
    if (r === 9 || r >= 32 && r <= 126) continue;
    return !0;
  }
  return !1;
}
function $l(e) {
  let t = new TextEncoder().encode(e),
    r = "";
  for (let s of t) r += String.fromCodePoint(s);
  return btoa(r);
}
function ho(e) {
  return wl(e) ? `${Si}${$l(e)}${gi}` : e;
}
function El(e, t) {
  let r = e;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function _i(e, t) {
  let r = {};
  for (let s of e) {
    let a = El(t, s.path);
    if (a === void 0 || a === null) continue;
    let n = zl(a);
    if (n === void 0) continue;
    r[`${_l}${s.headerName}`] = ho(n);
  }
  return r;
}
var Jt = -32020,
  kh = [{
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
    codes: [Mi.InvalidRequest],
    conformance: ["server-stateless"],
    rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic."
  }, {
    rung: "era-classification",
    order: 3,
    evaluatedAt: "edge",
    codes: [Jt, Mi.UnsupportedProtocolVersion],
    conformance: ["server-stateless", "http-header-validation", "http-custom-header-server-validation"],
    rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions."
  }, {
    rung: "envelope",
    order: 4,
    evaluatedAt: "edge",
    codes: [Mi.InvalidParams],
    conformance: ["server-stateless"],
    rationale: "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400."
  }, {
    rung: "method-registry",
    order: 5,
    evaluatedAt: "dispatch",
    codes: [Mi.MethodNotFound],
    conformance: ["server-stateless"],
    rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at."
  }, {
    rung: "request-params",
    order: 6,
    evaluatedAt: "dispatch",
    codes: [Mi.InvalidParams],
    conformance: [],
    rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table."
  }, {
    rung: "standard-header-validation",
    order: 7,
    evaluatedAt: "pre-dispatch",
    codes: [Jt],
    conformance: ["http-header-validation"],
    rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted."
  }, {
    rung: "client-capabilities",
    order: 8,
    evaluatedAt: "pre-dispatch",
    codes: [Mi.MissingRequiredClientCapability],
    conformance: ["server-stateless"],
    rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable."
  }, {
    rung: "param-header-validation",
    order: 9,
    evaluatedAt: "pre-dispatch",
    codes: [Jt],
    conformance: ["http-custom-header-server-validation"],
    rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung."
  }],
  qh = {
    [Mi.ParseError]: 400,
    [Mi.InvalidRequest]: 400,
    [Mi.MethodNotFound]: 404,
    [Mi.UnsupportedProtocolVersion]: 400,
    [Mi.MissingRequiredClientCapability]: 400,
    [Jt]: 400
  };
function mo(e, t) {
  return CUr(e, t);
}
function Xr(e) {
  return new Set(e.flatMap(item => Object.keys(item.shape)));
}
function tn(e) {
  if (e == null) return !1;
  let t = typeof e;
  if (t !== "object" && t !== "function") return !1;
  if (!("~standard" in e)) return !1;
  return typeof e["~standard"]?.validate === "function";
}
var xn = !1,
  target = "draft-2020-12";
function Pl(e, io_2 = "input") {
  let r = e["~standard"],
    s;
  if (r.jsonSchema) s = r.jsonSchema[io_2]({
    target: target
  });else if (r.vendor === "zod") {
    if (!("_zod" in e)) throw Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
    if (!xn) xn = !0, console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
    s = U7e(e, {
      target: target,
      io: io_2
    });
  } else throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (io_2 === "output") {
    if (s.type !== void 0) return s;
    return yi(s) ? {
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
function yi(e) {
  if ("properties" in e || "patternProperties" in e || "additionalProperties" in e || "required" in e) return !0;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e[t];
    if (Array.isArray(r) && r.length > 0) return r.every(item => item !== null && typeof item === "object" && (item.type === "object" || yi(item)));
  }
  return !1;
}
function Tl(e) {
  if (!e.path?.length) return e.message;
  return `${e.path.map(item => String(typeof item === "object" ? item.key : item)).join(".")}: ${e.message}`;
}
async function Zo(e, t) {
  let r = await e["~standard"].validate(t);
  if (r.issues && r.issues.length > 0) return {
    success: !1,
    error: r.issues.map(item => Tl(item)).join(", ")
  };
  return {
    success: !0,
    data: r.value
  };
}
function Cl(e) {
  let t = U7e(e, {
    target: target,
    io: "input"
  });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var kl = /\\\.\\d\{(\d+)\}/;
function ql(e) {
  let t = kl.exec(e),
    r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [!1, !0].flatMap(s => [!1, !0].flatMap(a => r.map(n => zM({
    local: s,
    offset: a,
    precision: n
  }))));
}
function Il(e, t) {
  let r;
  switch (e) {
    case "email":
      r = [XKs()];
      break;
    case "uri":
      r = [b1t()];
      break;
    case "date":
      r = [p7s()];
      break;
    case "date-time":
      r = ql(t);
      break;
  }
  return new Set(r.map(item => Cl(item)).filter(item => item !== void 0));
}
function Ol(e, t, r) {
  if (r !== "zod") return !0;
  return Il(e, t).has(t);
}
function es(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Nl(e) {
  try {
    return Pl(e, "input");
  } catch (error) {
    let r = error instanceof Error ? error.message : String(error);
    throw new ed(Mi.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
  }
}
var Ml = new Set(["$comment", "deprecated", "description", "examples", "readOnly", "title", "writeOnly"]);
function mn(e) {
  return Ml.has(e) || e.startsWith("x-");
}
var jl = new Set(["$schema", ...Object.keys(Kt.shape.requestedSchema.shape)]),
  Fn = {
    string: Xr([Ft, Vr, xr, Fr]),
    number: Xr([Ht]),
    integer: Xr([Ht]),
    boolean: Xr([Dr]),
    array: Xr([Hr, Kr])
  },
  Al = new Set(Ft.shape.format.unwrap().options);
function Ll(e, t, r, s) {
  if (!es(e)) return e;
  let a = typeof e.type === "string" && Object.hasOwn(Fn, e.type) ? Fn[e.type] : void 0;
  if (a === void 0) return e;
  let n = {};
  for (let [i, l] of Object.entries(e)) if (a.has(i) || mn(i)) n[i] = l;else if (i === "pattern" && e.type === "string" && typeof e.format === "string") {
    if (!Al.has(e.format)) n[i] = l;else if (typeof l !== "string" || !Ol(e.format, l, r)) s.push(`${t}.${i}`);
  } else s.push(`${t}.${i}`);
  return n;
}
function Ul(e, t) {
  let r = {},
    s = [];
  for (let [a, n] of Object.entries(e)) if (a === "properties" && es(n)) r[a] = Object.fromEntries(Object.entries(n).map(([i, l]) => [i, Ll(l, `properties.${i}`, t, s)]));else if (jl.has(a)) r[a] = n;else if (!mn(a)) s.push(a);
  if (s.length > 0) throw new ed(Mi.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
  return r;
}
function Dl(e, t) {
  if (!es(e.properties)) return t;
  let r = Object.entries(e.properties).filter(([, s]) => !mo(Gr, s).success).map(([s]) => `properties.${s}`);
  return r.length > 0 ? r.join(", ") : t;
}
function sn(e, t, r = "") {
  if (Array.isArray(e) && Array.isArray(t)) return e.flatMap((item, index) => sn(item, t[index], `${r}[${index}]`));
  if (!es(e) || !es(t)) return [];
  return Object.entries(e).flatMap(([s, a]) => {
    let n = r ? `${r}.${s}` : s;
    if (!Object.prototype.hasOwnProperty.call(t, s)) return mn(s) ? [] : [n];
    return sn(a, t[s], n);
  });
}
function Vl(e) {
  if (!tn(e.requestedSchema)) return {
    ...e,
    mode: "form",
    requestedSchema: e.requestedSchema
  };
  let vendor = e.requestedSchema["~standard"].vendor,
    r = Ul(Nl(e.requestedSchema), vendor),
    s = mo(Kt.shape.requestedSchema, r);
  if (!s.success) throw new ed(Mi.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${Dl(r, s.error.message)}`);
  let a = sn(r, s.data);
  if (a.length > 0) throw new ed(Mi.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`);
  let n = (s.data.required ?? []).filter(item => !Object.prototype.hasOwnProperty.call(s.data.properties, item));
  if (n.length > 0) throw new ed(Mi.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`);
  return {
    ...e,
    mode: "form",
    requestedSchema: s.data
  };
}
function xl(e) {
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
var Ih = Object.assign(xl, {
  elicit(e) {
    try {
      return {
        method: "elicitation/create",
        params: Vl(e)
      };
    } catch (t) {
      throw t instanceof ed ? TypeError(t.message, {
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
  createMessage(params_19) {
    return {
      method: "sampling/createMessage",
      params: params_19
    };
  },
  listRoots() {
    return {
      method: "roots/list"
    };
  }
});
var Fl = !0,
  Hl = 10,
  Kl = 250;
function vi(e) {
  return {
    autoFulfill: e?.autoFulfill ?? Fl,
    maxRounds: e?.maxRounds ?? Hl
  };
}
function Jl(e, inputResponses, requestState_2) {
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
function Gl(e, t) {
  return `Multi-round-trip request '${e}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function Bl(e, t) {
  return new Promise((r, s) => {
    if (t?.aborted) {
      s(t.reason instanceof Ks ? t.reason : new Ks(Ls.RequestTimeout, String(t.reason)));
      return;
    }
    let a = setTimeout(() => {
        t?.removeEventListener("abort", n), r();
      }, e),
      n = () => {
        clearTimeout(a), s(t?.reason instanceof Ks ? t.reason : new Ks(Ls.RequestTimeout, String(t?.reason)));
      };
    t?.addEventListener("abort", n, {
      once: !0
    });
  });
}
function Wl(e) {
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
async function Yl(e) {
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
    if (progress += 1, progress > config.maxRounds) throw new Ks(Ls.InputRequiredRoundsExceeded, Gl(method_2, config.maxRounds), {
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
      let y = Wl(signal);
      try {
        let b = await Promise.all(m.map(async ([p, h]) => {
          try {
            return [p, await hooks.dispatchInputRequest(p, h, y.signal)];
          } catch (error) {
            throw y.abort(error), error;
          }
        }));
        _ = Object.fromEntries(b);
      } finally {
        y.dispose();
      }
    } else await Bl(Kl, signal);
    let E = {
      ...(requestOptions.timeout !== void 0 && {
        timeout: requestOptions.timeout
      })
    };
    if (requestOptions.maxTotalTimeout !== void 0) {
      let totalElapsed = Date.now() - l,
        b = requestOptions.maxTotalTimeout - totalElapsed;
      if (b <= 0) throw new Ks(Ls.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: requestOptions.maxTotalTimeout,
        totalElapsed: totalElapsed
      });
      E.maxTotalTimeout = b;
    }
    let P = await hooks.retry(Jl(originalParams, _, firstPayload.requestState), E);
    if (fi(P)) {
      firstPayload = {
        inputRequests: P.inputRequests ?? {},
        ...(P.requestState !== void 0 && {
          requestState: P.requestState
        })
      };
      continue;
    }
    return P;
  }
}
var Xl = ["AnnotationsSchema", "AudioContentSchema", "BaseMetadataSchema", "BlobResourceContentsSchema", "BooleanSchemaSchema", "CallToolRequestSchema", "CallToolRequestParamsSchema", "CallToolResultSchema", "CancelledNotificationSchema", "CancelledNotificationParamsSchema", "CancelTaskRequestSchema", "CancelTaskResultSchema", "ClientCapabilitiesSchema", "ClientNotificationSchema", "ClientRequestSchema", "ClientResultSchema", "CompatibilityCallToolResultSchema", "CompleteRequestSchema", "CompleteRequestParamsSchema", "CompleteResultSchema", "ContentBlockSchema", "CreateMessageRequestSchema", "CreateMessageRequestParamsSchema", "CreateMessageResultSchema", "CreateMessageResultWithToolsSchema", "CreateTaskResultSchema", "CursorSchema", "DiscoverRequestSchema", "DiscoverResultSchema", "ElicitationCompleteNotificationSchema", "ElicitationCompleteNotificationParamsSchema", "ElicitRequestSchema", "ElicitRequestFormParamsSchema", "ElicitRequestParamsSchema", "ElicitRequestURLParamsSchema", "ElicitResultSchema", "EmbeddedResourceSchema", "EmptyResultSchema", "EnumSchemaSchema", "GetPromptRequestSchema", "GetPromptRequestParamsSchema", "GetPromptResultSchema", "GetTaskPayloadRequestSchema", "GetTaskPayloadResultSchema", "GetTaskRequestSchema", "GetTaskResultSchema", "IconSchema", "IconsSchema", "ImageContentSchema", "ImplementationSchema", "InitializedNotificationSchema", "InitializeRequestSchema", "InitializeRequestParamsSchema", "InitializeResultSchema", "JSONArraySchema", "JSONObjectSchema", "JSONRPCErrorResponseSchema", "JSONRPCMessageSchema", "JSONRPCNotificationSchema", "JSONRPCRequestSchema", "JSONRPCResponseSchema", "JSONRPCResultResponseSchema", "JSONValueSchema", "LegacyTitledEnumSchemaSchema", "ListPromptsRequestSchema", "ListPromptsResultSchema", "ListResourcesRequestSchema", "ListResourcesResultSchema", "ListResourceTemplatesRequestSchema", "ListResourceTemplatesResultSchema", "ListRootsRequestSchema", "ListRootsResultSchema", "ListTasksRequestSchema", "ListTasksResultSchema", "ListToolsRequestSchema", "ListToolsResultSchema", "LoggingLevelSchema", "LoggingMessageNotificationSchema", "LoggingMessageNotificationParamsSchema", "ModelHintSchema", "ModelPreferencesSchema", "MultiSelectEnumSchemaSchema", "NotificationSchema", "NumberSchemaSchema", "PaginatedRequestSchema", "PaginatedRequestParamsSchema", "PaginatedResultSchema", "PingRequestSchema", "PrimitiveSchemaDefinitionSchema", "ProgressSchema", "ProgressNotificationSchema", "ProgressNotificationParamsSchema", "ProgressTokenSchema", "PromptSchema", "PromptArgumentSchema", "PromptListChangedNotificationSchema", "PromptMessageSchema", "PromptReferenceSchema", "ReadResourceRequestSchema", "ReadResourceRequestParamsSchema", "ReadResourceResultSchema", "RelatedTaskMetadataSchema", "RequestSchema", "RequestIdSchema", "RequestMetaSchema", "ResourceSchema", "ResourceContentsSchema", "ResourceLinkSchema", "ResourceListChangedNotificationSchema", "ResourceRequestParamsSchema", "ResourceTemplateSchema", "ResourceTemplateReferenceSchema", "ResourceUpdatedNotificationSchema", "ResourceUpdatedNotificationParamsSchema", "ResultMetaObjectSchema", "ResultSchema", "RoleSchema", "RootSchema", "RootsListChangedNotificationSchema", "SamplingContentSchema", "SamplingMessageSchema", "SamplingMessageContentBlockSchema", "ServerCapabilitiesSchema", "ServerNotificationSchema", "ServerRequestSchema", "ServerResultSchema", "SetLevelRequestSchema", "SetLevelRequestParamsSchema", "SingleSelectEnumSchemaSchema", "StringSchemaSchema", "SubscribeRequestSchema", "SubscribeRequestParamsSchema", "SubscriptionFilterSchema", "SubscriptionsAcknowledgedNotificationSchema", "SubscriptionsAcknowledgedNotificationParamsSchema", "SubscriptionsListenRequestSchema", "SubscriptionsListenRequestParamsSchema", "SubscriptionsListenResultSchema", "SubscriptionsListenResultMetaSchema", "TaskAugmentedRequestParamsSchema", "TaskCreationParamsSchema", "TaskMetadataSchema", "TaskSchema", "TaskStatusSchema", "TaskStatusNotificationSchema", "TaskStatusNotificationParamsSchema", "TextContentSchema", "TextResourceContentsSchema", "TitledMultiSelectEnumSchemaSchema", "TitledSingleSelectEnumSchemaSchema", "ToolSchema", "ToolAnnotationsSchema", "ToolChoiceSchema", "ToolExecutionSchema", "ToolListChangedNotificationSchema", "ToolResultContentSchema", "ToolUseContentSchema", "UnsubscribeRequestSchema", "UnsubscribeRequestParamsSchema", "UntitledMultiSelectEnumSchemaSchema", "UntitledSingleSelectEnumSchemaSchema"],
  Zl = {
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
  bi = {},
  Ri = {};
function zi(e, t) {
  let r = e.slice(0, -6);
  bi[r] = t, Ri[r] = s => t.safeParse(s).success;
}
for (let e of Xl) zi(e, gl[e]);
for (let [e, t] of Object.entries(Zl)) zi(e, t);
var Ql = Object.freeze(bi),
  wi = Object.freeze(Ri);
function eu(e) {
  switch (e) {
    case "initialize":
    case "notifications/initialized":
      return Je(void 0);
    case "server/discover":
      return Je(uo);
    default:
      return;
  }
}
var ss = 60000,
  tu = [Fe, Nt, pNe, Mt],
  ru = ["inputResponses", "requestState"];
function Hn(message, t) {
  let params_20 = message.params;
  if (!Qr(params_20)) return {
    message: message,
    lifted: {}
  };
  let _meta_4 = params_20._meta,
    a = Qr(_meta_4) ? tu.filter(item => item in _meta_4) : [],
    n = t === "request" ? ru.filter(item => item in params_20) : [];
  if (a.length === 0 && n.length === 0) return {
    message: message,
    lifted: {}
  };
  let lifted = {},
    params_21 = {
      ...params_20
    };
  if (a.length > 0 && Qr(_meta_4)) {
    let c = {},
      d = {
        ..._meta_4
      };
    for (let m of a) c[m] = _meta_4[m], delete d[m];
    if (lifted.envelope = c, Object.keys(d).length > 0) params_21._meta = d;else delete params_21._meta;
  }
  for (let c of n) {
    if (c === "inputResponses") lifted.inputResponses = params_21[c];
    if (c === "requestState") lifted.requestState = params_21[c];
    delete params_21[c];
  }
  return {
    message: {
      ...message,
      params: params_21
    },
    lifted: lifted
  };
}
function Kn(e, t) {
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
function pn(e) {
  return () => e;
}
var su = pn(void 0),
  au,
  $i = class {
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
      au = (e, t) => {
        e._negotiatedProtocolVersion = t;
      };
    }
    _supportedProtocolVersions;
    onclose;
    onerror;
    fallbackRequestHandler;
    fallbackNotificationHandler;
    constructor(e) {
      this._options = e, this._supportedProtocolVersions = e?.supportedProtocolVersions ?? Krt, this.setNotificationHandler("notifications/cancelled", t => {
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
      return Promise.reject(new Ks(Ls.UnsupportedResultType, `Unsupported result type '${e.kind}' for ${t.request.method}`, {
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
      if (t.maxTotalTimeout && totalElapsed_2 >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e), new Ks(Ls.RequestTimeout, "Maximum total timeout exceeded", {
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
        if (s?.(a, n), CRe(a) || H_e(a)) this._onresponse(a);else if (m7(a)) this._onrequest(a, n);else if (Xir(a)) this._onnotification(a, n);else this._onerror(Error(`Unknown message type: ${JSON.stringify(a)}`));
      }, e.setSupportedProtocolVersions?.(this._supportedProtocolVersions), await this._transport.start();
    }
    _onclose() {
      let _responseHandlers = this._responseHandlers;
      this._responseHandlers = new Map(), this._progressHandlers.clear(), this._pendingDebouncedNotifications.clear();
      for (let s of this._timeoutInfo.values()) clearTimeout(s.timeoutId);
      this._timeoutInfo.clear();
      let _requestHandlerAbortControllers = this._requestHandlerAbortControllers;
      this._requestHandlerAbortControllers = new Map();
      let r = new Ks(Ls.ConnectionClosed, "Connection closed");
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
        } = Hn(e, "notification"),
        s = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") return;
      if (t?.classification !== void 0) {
        let i = Dn(t.classification);
        if (i !== s.era) {
          this._onerror(Error(`Era mismatch on inbound notification '${message_2.method}': classified as ${i} but this instance serves ${s.era}`));
          return;
        }
      }
      if (Xo(message_2.method) && !s.hasNotificationMethod(message_2.method)) return;
      let a = this._notificationHandlers.get(message_2.method),
        fallbackNotificationHandler = this.fallbackNotificationHandler;
      if (a === void 0 && fallbackNotificationHandler === void 0) return;
      Promise.resolve().then(() => a === void 0 ? fallbackNotificationHandler(message_2) : a(message_2, s)).catch(i => this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
    }
    _onrequest(e, t) {
      let {
          message: message_3,
          lifted: lifted_2
        } = Hn(e, "request"),
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
          _transport?.send(g).catch(f => this._onerror(Error(`Failed to send an error response: ${f}`)));
        };
      if (t?.classification !== void 0) {
        let b = Dn(t.classification);
        if (b !== a.era) {
          this._onerror(Error(`Era mismatch on inbound request '${message_3.method}': classified as ${b} but this instance serves ${a.era}`));
          let requested = t.classification.revision ?? b;
          i(Mi.UnsupportedProtocolVersion, `Unsupported protocol version: ${requested}`, {
            supported: this._supportedProtocolVersions,
            requested: requested
          });
          return;
        }
      }
      if (Yo(message_3.method) && !a.hasRequestMethod(message_3.method)) {
        i(Mi.MethodNotFound, "Method not found");
        return;
      }
      let l = this._requestHandlers.get(message_3.method) ?? this.fallbackRequestHandler;
      if (l === void 0) {
        i(Mi.MethodNotFound, "Method not found");
        return;
      }
      let c = a.checkInboundEnvelope(lifted_2);
      if (c !== void 0) {
        i(Mi.InvalidParams, c);
        return;
      }
      let notify = (b, p) => this._notificationViaCodec(this._resolveOutboundCodec(b.method), b, {
          ...p,
          relatedRequestId: message_3.id
        }),
        m = (b, p, h) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(b.method), b, p, {
          ...h,
          relatedRequestId: message_3.id
        }),
        abortController_2 = new AbortController();
      this._requestHandlerAbortControllers.set(message_3.id, abortController_2);
      let E = lifted_2.inputResponses === void 0 ? void 0 : ou(lifted_2.inputResponses),
        P = {
          sessionId: _transport?.sessionId,
          mcpReq: {
            id: message_3.id,
            method: message_3.method,
            _meta: message_3.params?._meta,
            ...(lifted_2.envelope !== void 0 && {
              envelope: lifted_2.envelope
            }),
            ...(E !== void 0 && {
              inputResponses: E.accepted
            }),
            ...(E !== void 0 && E.droppedKeys.length > 0 && {
              droppedInputResponseKeys: E.droppedKeys
            }),
            requestState: lifted_2.requestState === void 0 ? su : pn(lifted_2.requestState),
            signal: abortController_2.signal,
            send: (b, p, h) => {
              let g = this._resolveOutboundCodec(b.method);
              if (this._assertOutboundRequestInEra(g, b.method), tn(p)) return m(b, p, h);
              let f = Kn(g, b.method);
              if (f === void 0) throw TypeError(`'${b.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
              return m(b, f, p);
            },
            notify: notify
          },
          http: t?.authInfo ? {
            authInfo: t.authInfo
          } : void 0
        },
        y = this.buildContext(P, t);
      Promise.resolve().then(() => l(message_3, y)).then(async b => {
        if (abortController_2.signal.aborted) return;
        let result_6;
        try {
          result_6 = a.encodeResult(message_3.method, b, this._outboundServerInfo());
        } catch (error) {
          this._onerror(Error(`Failed to encode result for ${message_3.method}: ${error}`)), i(Mi.InternalError, "Internal error");
          return;
        }
        let h = {
          result: result_6,
          jsonrpc: "2.0",
          id: message_3.id
        };
        await _transport?.send(h);
      }, async b => {
        if (abortController_2.signal.aborted) return;
        let p = Number.isSafeInteger(b.code) ? b.code : Mi.InternalError,
          h = {
            jsonrpc: "2.0",
            id: message_3.id,
            error: {
              code: a.encodeErrorCode(p),
              message: b.message ?? "Internal error",
              ...(b.data !== void 0 && {
                data: b.data
              })
            }
          };
        await _transport?.send(h);
      }).catch(b => this._onerror(Error(`Failed to send response: ${b}`))).finally(() => {
        if (this._requestHandlerAbortControllers.get(message_3.id) === abortController_2) this._requestHandlerAbortControllers.delete(message_3.id);
      });
    }
    _onprogress(e) {
      let {
          progressToken: progressToken_2,
          ...r
        } = e.params,
        s = Number(progressToken_2),
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
      if (this._responseHandlers.delete(t), this._cleanupTimeout(t), this._progressHandlers.delete(t), CRe(e)) r(e);else r(ed.fromError(e.error.code, e.error.message, e.error.data));
    }
    get transport() {
      return this._transport;
    }
    async close() {
      await this._transport?.close();
    }
    request(e, t, r) {
      let s = this._resolveOutboundCodec(e.method);
      if (this._assertOutboundRequestInEra(s, e.method), tn(t)) return this._requestWithSchemaViaCodec(s, e, t, r);
      let a = Kn(s, e.method);
      if (a === void 0) throw TypeError(`'${e.method}' is not a spec method; pass a result schema as the second argument to request().`);
      return this._requestWithSchemaViaCodec(s, e, a, t);
    }
    _negotiatedWireCodec() {
      return Je(this._negotiatedProtocolVersion);
    }
    _wireCodec() {
      return this._negotiatedWireCodec();
    }
    _resolveOutboundCodec(e) {
      if (this._negotiatedProtocolVersion === void 0) {
        let t = eu(e);
        if (t) return t;
      }
      return this._negotiatedWireCodec();
    }
    _assertOutboundRequestInEra(e, method_3) {
      if (method_3.startsWith("tasks/")) return;
      if (Yo(method_3) && !e.hasRequestMethod(method_3)) throw new Ks(Ls.MethodNotSupportedByProtocolVersion, `Method '${method_3}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
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
      return new Promise((_, E) => {
        let P = R => {
          E(R);
        };
        if (!this._transport) {
          P(Error("Not connected"));
          return;
        }
        if (this._options?.enforceStrictCapabilities === !0) try {
          this.assertCapabilityForMethod(request.method);
        } catch (error) {
          P(error);
          return;
        }
        if (options?.signal?.aborted) {
          let reason_2 = options.signal.reason;
          throw reason_2 instanceof Ks ? reason_2 : new Ks(Ls.RequestTimeout, String(reason_2));
        }
        let y = codec.era === uo && this._transport.hasPerRequestStream === !0 ? new AbortController() : void 0,
          b = this._requestMessageId++;
        m = b;
        let p = {
          ...request,
          jsonrpc: "2.0",
          id: b
        };
        if (options?.onprogress) this._progressHandlers.set(b, options.onprogress), p.params = {
          ...request.params,
          _meta: {
            ...request.params?._meta,
            progressToken: b
          }
        };
        let h = this._envelopeOutbound(p),
          g = !1,
          f = R => {
            if (g) return;
            if (this._progressHandlers.delete(b), y === void 0) this._transport?.send(this._envelopeOutbound({
              jsonrpc: "2.0",
              method: "notifications/cancelled",
              params: {
                requestId: b,
                reason: String(R)
              }
            }), {
              relatedRequestId: relatedRequestId,
              resumptionToken: resumptionToken,
              onresumptiontoken: onresumptiontoken
            }).catch(S => this._onerror(Error(`Failed to send cancellation: ${S}`)));else y.abort();
            E(R instanceof Ks ? R : new Ks(Ls.RequestTimeout, String(R)));
          };
        this._responseHandlers.set(b, R => {
          if (options?.signal?.aborted) return;
          if (g = !0, R instanceof Error) return E(R);
          let S;
          try {
            S = codec.decodeResult(request.method, R.result);
          } catch (error) {
            return E(error instanceof Error ? error : Error(String(error)));
          }
          if (S.kind === "invalid") return E(S.error);
          if (S.kind === "task") {
            if (options?.allowTask === !0 && this._capabilities?.extensions?.[ml] !== void 0 && fl(S.result)) return _(S.result);
            return E(new Ks(Ls.UnsupportedResultType, `Unsupported result type 'task' for ${request.method}`, {
              method: request.method
            }));
          }
          if (S.kind === "input_required") {
            if (options?.allowInputRequired === !0) return _(lu(S));
            let L = {
              codec: codec,
              request: request,
              resultSchema: resultSchema,
              options: options,
              flowStartedAt: flowStartedAt,
              retry: (params_22, j) => this._requestWithSchemaViaCodec(codec, params_22 === void 0 ? {
                method: request.method
              } : {
                method: request.method,
                params: params_22
              }, resultSchema, j)
            };
            return _(this._resolveNonCompleteResult(S, L));
          }
          let result_7 = S.result;
          Zo(resultSchema, result_7).then(L => {
            if (L.success) _(L.data);else E(new Ks(Ls.InvalidResult, `Invalid result for ${request.method}: ${L.error}`));
          }, E);
        }), d = () => f(options?.signal?.reason), options?.signal?.addEventListener("abort", d, {
          once: !0
        });
        let timeout_2 = options?.timeout ?? ss,
          k = () => f(new Ks(Ls.RequestTimeout, "Request timed out", {
            timeout: timeout_2
          }));
        this._setupTimeout(b, timeout_2, options?.maxTotalTimeout, k, options?.resetTimeoutOnProgress ?? !1), this._transport.send(h, {
          relatedRequestId: relatedRequestId,
          resumptionToken: resumptionToken,
          onresumptiontoken: onresumptiontoken,
          headers: headers,
          requestSignal: y?.signal
        }).catch(R => {
          this._progressHandlers.delete(b), E(R);
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
      if (!this._transport) throw new Ks(Ls.NotConnected, "Not connected");
      if (Xo(t.method) && !e.hasNotificationMethod(t.method)) throw new Ks(Ls.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
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
        if (!Yo(e)) throw TypeError(`'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
        s = (a, n) => {
          let i = this._negotiatedWireCodec(),
            l = i.validateRequest(e, a);
          if (!l.ok && l.reason === "not-in-era") l = i.validateInputRequest(e, a);
          if (!l.ok) {
            if (l.reason === "not-in-era") throw new ed(Mi.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(l.message);
          }
          return Promise.resolve(t(l.value, n));
        };
      } else if (r) s = async (a, n) => {
        let i = await Zo(t.params, {
          ...a.params
        });
        if (!i.success) throw new ed(Mi.InvalidParams, `Invalid params for ${e}: ${i.error}`);
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
        if (!Xo(e)) throw TypeError(`'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
        this._notificationHandlers.set(e, (s, a) => {
          let n = a.validateNotification(e, s);
          if (!n.ok) {
            if (n.reason === "not-in-era") throw new ed(Mi.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(n.message);
          }
          return Promise.resolve(t(n.value));
        });
        return;
      }
      if (!r) throw TypeError("setNotificationHandler: handler is required");
      this._notificationHandlers.set(e, async s => {
        let a = await Zo(t.params, {
          ...s.params
        });
        if (!a.success) throw new ed(Mi.InvalidParams, `Invalid params for notification ${e}: ${a.error}`);
        await r(a.data, s);
      });
    }
    removeNotificationHandler(e) {
      this._notificationHandlers.delete(e);
    }
  };
function Qr(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Ei(e, t) {
  let r = {
    ...e
  };
  for (let s in t) {
    let a = s,
      n = t[a];
    if (n === void 0) continue;
    let i = r[a];
    r[a] = Qr(i) && Qr(n) ? {
      ...i,
      ...n
    } : n;
  }
  return r;
}
function co(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ou(e) {
  let accepted = {},
    droppedKeys = [];
  if (!co(e)) return {
    accepted: accepted,
    droppedKeys: droppedKeys
  };
  for (let [s, a] of Object.entries(e)) {
    if (!co(a) || "method" in a || "result" in a) {
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
function Jn(e) {
  throw new Ks(Ls.SendFailed, `ctx.mcpReq.${e} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function nu(id_3, method_4, r, signal_2, sessionId) {
  return {
    sessionId: sessionId,
    mcpReq: {
      id: id_3,
      method: method_4,
      _meta: r?._meta,
      requestState: pn(void 0),
      signal: signal_2,
      send: () => Jn("send"),
      notify: () => Jn("notify")
    }
  };
}
async function iu(e, t, r, s, a) {
  if (!co(s) || typeof s.method !== "string") throw new Ks(Ls.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, {
    key: r
  });
  let method_5 = s.method;
  if (!t.hasInputRequestMethod(method_5)) throw new Ks(Ls.InvalidResult, `Invalid input request '${r}': '${method_5}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, {
    key: r,
    method: method_5
  });
  let i = e.getRequestHandler(method_5);
  if (i === void 0) throw new Ks(Ls.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${method_5}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, {
    key: r,
    method: method_5
  });
  let params_23 = co(s.params) ? s.params : void 0;
  return await i({
    jsonrpc: "2.0",
    id: r,
    method: method_5,
    ...(params_23 !== void 0 && {
      params: params_23
    })
  }, e.buildContext(nu(r, method_5, params_23, a, e.sessionId)));
}
function cu(e, t) {
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
    ...(e?.allowTask === !0 && {
      allowTask: !0
    }),
    allowInputRequired: !0
  };
}
function Pi(e, config_2, r, s) {
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
      dispatchInputRequest: (m, _, E) => iu(e, codec_2, m, _, E),
      retry: (m, _) => s.retry(m, cu(options_2, _))
    };
  return Yl({
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
function lu(e) {
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
var uu = J(e => {
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
        var E, P, y;
        t.lastIndex = d;
        while (P = t.exec(c)) {
          if (P.index !== d) throw TypeError("invalid parameter format");
          if (d += P[0].length, E = P[1].toLowerCase(), y = P[2], y.charCodeAt(0) === 34) {
            if (y = y.slice(1, -1), y.indexOf("\\") !== -1) y = y.replace(r, "$1");
          }
          _.parameters[E] = y;
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
  du = $s(uu(), 1);
function Ti(e) {
  if (!e) return;
  try {
    return du.parse(e).type;
  } catch {
    let t = (e.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e.slice(t.length).includes(",")) return;
    return t;
  }
}
var Ci = 10485760,
  F9r = class {
    _buffer;
    _maxBufferSize;
    constructor(e) {
      this._maxBufferSize = e?.maxBufferSize ?? Ci;
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
          return Qir(t);
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
function Qir(e) {
  return foe.parse(JSON.parse(e));
}
function H9r(e) {
  return JSON.stringify(e) + `
`;
}
function ts(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return {
    ...e
  };
}
function ZKt(e = fetch, t) {
  if (!t) return e;
  return async (r, s) => e(r, {
    ...t,
    ...s,
    headers: s?.headers ? {
      ...ts(t.headers),
      ...ts(s.headers)
    } : t.headers
  });
}
var po = J(e => {
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
      let f = [h[0]],
        z = 0;
      while (z < g.length) l(f, g[z]), f.push(h[++z]);
      return new s(f);
    }
    e._ = a;
    let n = new s("+");
    function i(h, ...g) {
      let f = [P(h[0])],
        z = 0;
      while (z < g.length) f.push(n), l(f, g[z]), f.push(n, P(h[++z]));
      return c(f), new s(f);
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
          let f = d(h[g - 1], h[g + 1]);
          if (f !== void 0) {
            h.splice(g - 1, 3, f);
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
      return typeof h == "number" || typeof h == "boolean" || h === null ? h : P(Array.isArray(h) ? h.join(",") : h);
    }
    function E(h) {
      return new s(P(h));
    }
    e.stringify = E;
    function P(h) {
      return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = P;
    function y(h) {
      return typeof h == "string" && e.IDENTIFIER.test(h) ? new s(`.${h}`) : a`[${h}]`;
    }
    e.getProperty = y;
    function b(h) {
      if (typeof h == "string" && e.IDENTIFIER.test(h)) return new s(`${h}`);
      throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function p(h) {
      return new s(h.toString());
    }
    e.regexpCode = p;
  }),
  ki = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    let t = po();
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
            prefix: E
          } = _,
          P = (m = d.key) !== null && m !== void 0 ? m : d.ref,
          y = this._values[E];
        if (y) {
          let h = y.get(P);
          if (h) return h;
        } else y = this._values[E] = new Map();
        y.set(P, _);
        let b = this._scope[E] || (this._scope[E] = []),
          itemIndex_2 = b.length;
        return b[itemIndex_2] = d.ref, _.setValue(d, {
          property: E,
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
        for (let P in c) {
          let y = c[P];
          if (!y) continue;
          let b = m[P] = m[P] || new Map();
          y.forEach(item => {
            if (b.has(item)) return;
            b.set(item, s.Started);
            let h = d(item);
            if (h) {
              let g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              nil = t._`${nil}${g} ${item} = ${h};${this.opts._n}`;
            } else if (h = _ === null || _ === void 0 ? void 0 : _(item)) nil = t._`${nil}${h}${this.opts._n}`;else throw new r(item);
            b.set(item, s.Completed);
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
    let t = po(),
      r = ki();
    var s = po();
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
    var a = ki();
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
        constructor(w, O, A) {
          super();
          this.varKind = w, this.name = O, this.rhs = A;
        }
        render({
          es5: es5,
          _n: _n_2
        }) {
          let A = es5 ? r.varKinds.var : this.varKind,
            G = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${A} ${this.name}${G};` + _n_2;
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
        constructor(w, O, A) {
          super();
          this.lhs = w, this.rhs = O, this.sideEffects = A;
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
        constructor(w, O, A, G) {
          super(w, A, G);
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
      E = class extends n {
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
      P = class extends n {
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
            let A = nodes[O].optimizeNodes();
            if (Array.isArray(A)) nodes.splice(O, 1, ...A);else if (A) nodes[O] = A;else nodes.splice(O, 1);
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
          return this.nodes.reduce((acc, item) => F(acc, item.names), {});
        }
      },
      y = class extends P {
        render(w) {
          return "{" + w._n + super.render(w) + "}" + w._n;
        }
      },
      b = class extends P {},
      p = class extends y {};
    p.kind = "else";
    var h = class w extends y {
      constructor(O, A) {
        super(A);
        this.condition = O;
      }
      render(O) {
        let A = `if(${this.condition})` + super.render(O);
        if (this.else) A += "else " + this.else.render(O);
        return A;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let condition = this.condition;
        if (condition === !0) return this.nodes;
        let A = this.else;
        if (A) {
          let G = A.optimizeNodes();
          A = this.else = Array.isArray(G) ? new p(G) : G;
        }
        if (A) {
          if (condition === !1) return A instanceof w ? A : A.nodes;
          if (this.nodes.length) return this;
          return new w(le(condition), A instanceof w ? [A] : A.nodes);
        }
        if (condition === !1 || !this.nodes.length) return;
        return this;
      }
      optimizeNames(O, A) {
        var G;
        if (this.else = (G = this.else) === null || G === void 0 ? void 0 : G.optimizeNames(O, A), !(super.optimizeNames(O, A) || this.else)) return;
        return this.condition = B(this.condition, O, A), this;
      }
      get names() {
        let names = super.names;
        if (W(names, this.condition), this.else) F(names, this.else.names);
        return names;
      }
    };
    h.kind = "if";
    var g = class extends y {};
    g.kind = "for";
    var f = class extends g {
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
          return F(super.names, this.iteration.names);
        }
      },
      z = class extends g {
        constructor(w, O, A, G) {
          super();
          this.varKind = w, this.name = O, this.from = A, this.to = G;
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
        constructor(w, O, A, G) {
          super();
          this.loop = w, this.varKind = O, this.name = A, this.iterable = G;
        }
        render(w) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w);
        }
        optimizeNames(w, O) {
          if (!super.optimizeNames(w, O)) return;
          return this.iterable = B(this.iterable, w, O), this;
        }
        get names() {
          return F(super.names, this.iterable.names);
        }
      },
      R = class extends y {
        constructor(w, O, A) {
          super();
          this.name = w, this.args = O, this.async = A;
        }
        render(w) {
          return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w);
        }
      };
    R.kind = "func";
    var S = class extends P {
      render(w) {
        return "return " + super.render(w);
      }
    };
    S.kind = "return";
    var q = class extends y {
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
          var A, G;
          return super.optimizeNames(w, O), (A = this.catch) === null || A === void 0 || A.optimizeNames(w, O), (G = this.finally) === null || G === void 0 || G.optimizeNames(w, O), this;
        }
        get names() {
          let names_2 = super.names;
          if (this.catch) F(names_2, this.catch.names);
          if (this.finally) F(names_2, this.finally.names);
          return names_2;
        }
      },
      L = class extends y {
        constructor(w) {
          super();
          this.error = w;
        }
        render(w) {
          return `catch(${this.error})` + super.render(w);
        }
      };
    L.kind = "catch";
    var K = class extends y {
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
        }), this._nodes = [new b()];
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
        let A = this._extScope.value(w, O);
        return (this._values[A.prefix] || (this._values[A.prefix] = new Set())).add(A), A;
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
      _def(w, O, A, G) {
        let Y = this._scope.toName(O);
        if (A !== void 0 && G) this._constants[Y.str] = A;
        return this._leafNode(new i(w, Y, A)), Y;
      }
      const(w, O, A) {
        return this._def(r.varKinds.const, w, O, A);
      }
      let(w, O, A) {
        return this._def(r.varKinds.let, w, O, A);
      }
      var(w, O, A) {
        return this._def(r.varKinds.var, w, O, A);
      }
      assign(w, O, A) {
        return this._leafNode(new l(w, O, A));
      }
      add(w, O) {
        return this._leafNode(new c(w, e.operators.ADD, O));
      }
      code(w) {
        if (typeof w == "function") w();else if (w !== t.nil) this._leafNode(new E(w));
        return this;
      }
      object(...w) {
        let O = ["{"];
        for (let [A, G] of w) {
          if (O.length > 1) O.push(",");
          if (O.push(A), A !== G || this.opts.es5) O.push(":"), (0, t.addCodeArg)(O, G);
        }
        return O.push("}"), new t._Code(O);
      }
      if(w, O, A) {
        if (this._blockNode(new h(w)), O && A) this.code(O).else().code(A).endIf();else if (O) this.code(O).endIf();else if (A) throw Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(w) {
        return this._elseNode(new h(w));
      }
      else() {
        return this._elseNode(new p());
      }
      endIf() {
        return this._endBlockNode(h, p);
      }
      _for(w, O) {
        if (this._blockNode(w), O) this.code(O).endFor();
        return this;
      }
      for(w, O) {
        return this._for(new f(w), O);
      }
      forRange(w, O, A, G, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        let re = this._scope.toName(w);
        return this._for(new z(Y, re, O, A), () => G(re));
      }
      forOf(w, O, A, G = r.varKinds.const) {
        let Y = this._scope.toName(w);
        if (this.opts.es5) {
          let re = O instanceof t.Name ? O : this.var("_arr", O);
          return this.forRange("_i", 0, t._`${re}.length`, Q => {
            this.var(Y, t._`${re}[${Q}]`), A(Y);
          });
        }
        return this._for(new k("of", G, Y, O), () => A(Y));
      }
      forIn(w, O, A, G = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(w, t._`Object.keys(${O})`, A);
        let Y = this._scope.toName(w);
        return this._for(new k("in", G, Y, O), () => A(Y));
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
      try(w, O, A) {
        if (!O && !A) throw Error('CodeGen: "try" without "catch" and "finally"');
        let G = new q();
        if (this._blockNode(G), this.code(w), O) {
          let Y = this.name("e");
          this._currNode = G.catch = new L(Y), O(Y);
        }
        if (A) this._currNode = G.finally = new K(), this.code(A);
        return this._endBlockNode(L, K);
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
        let A = this._nodes.length - O;
        if (A < 0 || w !== void 0 && A !== w) throw Error(`CodeGen: wrong number of nodes: ${A} vs ${w} expected`);
        return this._nodes.length = O, this;
      }
      func(w, O = t.nil, A, G) {
        if (this._blockNode(new R(w, O, A)), G) this.code(G).endFunc();
        return this;
      }
      endFunc() {
        return this._endBlockNode(R);
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
    function F(w, O) {
      for (let A in O) w[A] = (w[A] || 0) + (O[A] || 0);
      return w;
    }
    function W(w, O) {
      return O instanceof t._CodeOrName ? F(w, O.names) : w;
    }
    function B(w, O, A) {
      if (w instanceof t.Name) return G(w);
      if (!Y(w)) return w;
      return new t._Code(w._items.reduce((acc, item) => {
        if (item instanceof t.Name) item = G(item);
        if (item instanceof t._Code) acc.push(...item._items);else acc.push(item);
        return acc;
      }, []));
      function G(re) {
        let Q = A[re.str];
        if (Q === void 0 || O[re.str] !== 1) return re;
        return delete O[re.str], Q;
      }
      function Y(re) {
        return re instanceof t._Code && re._items.some(item => item instanceof t.Name && O[item.str] === 1 && A[item.str] !== void 0);
      }
    }
    function se(w, O) {
      for (let A in O) w[A] = (w[A] || 0) - (O[A] || 0);
    }
    function le(w) {
      return typeof w == "boolean" || typeof w == "number" || w === null ? !w : t._`!${H(w)}`;
    }
    e.not = le;
    let ie = D(e.operators.AND);
    function Se(...w) {
      return w.reduce(ie);
    }
    e.and = Se;
    let ae = D(e.operators.OR);
    function N(...w) {
      return w.reduce(ae);
    }
    e.or = N;
    function D(w) {
      return (O, A) => O === t.nil ? A : A === t.nil ? O : t._`${H(O)} ${w} ${H(A)}`;
    }
    function H(w) {
      return w instanceof t.Name ? w : t._`(${w})`;
    }
  }),
  ne = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
    let t = te(),
      r = po();
    function s(R) {
      let S = {};
      for (let q of R) S[q] = !0;
      return S;
    }
    e.toHash = s;
    function a(R, S) {
      if (typeof S == "boolean") return S;
      if (Object.keys(S).length === 0) return !0;
      return n(R, S), !i(S, R.self.RULES.all);
    }
    e.alwaysValidSchema = a;
    function n(R, S = R.schema) {
      let {
        opts: opts,
        self: self
      } = R;
      if (!opts.strictSchema) return;
      if (typeof S === "boolean") return;
      let keywords = self.RULES.keywords;
      for (let j in S) if (!keywords[j]) k(R, `unknown keyword: "${j}"`);
    }
    e.checkUnknownRules = n;
    function i(R, S) {
      if (typeof R == "boolean") return !R;
      for (let q in R) if (S[q]) return !0;
      return !1;
    }
    e.schemaHasRules = i;
    function l(R, S) {
      if (typeof R == "boolean") return !R;
      for (let q in R) if (q !== "$ref" && S.all[q]) return !0;
      return !1;
    }
    e.schemaHasRulesButRef = l;
    function c({
      topSchemaRef: topSchemaRef,
      schemaPath: schemaPath
    }, q, L, K) {
      if (!K) {
        if (typeof q == "number" || typeof q == "boolean") return q;
        if (typeof q == "string") return t._`${q}`;
      }
      return t._`${topSchemaRef}${schemaPath}${(0, t.getProperty)(L)}`;
    }
    e.schemaRefOrVal = c;
    function d(R) {
      return E(decodeURIComponent(R));
    }
    e.unescapeFragment = d;
    function m(R) {
      return encodeURIComponent(_(R));
    }
    e.escapeFragment = m;
    function _(R) {
      if (typeof R == "number") return `${R}`;
      return R.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    e.escapeJsonPointer = _;
    function E(R) {
      return R.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = E;
    function P(R, S) {
      if (Array.isArray(R)) for (let q of R) S(q);else S(R);
    }
    e.eachItem = P;
    function y({
      mergeNames: mergeNames,
      mergeToName: mergeToName,
      mergeValues: mergeValues,
      resultToName: resultToName
    }) {
      return (K, j, F, W) => {
        let B = F === void 0 ? j : F instanceof t.Name ? (j instanceof t.Name ? mergeNames(K, j, F) : mergeToName(K, j, F), F) : j instanceof t.Name ? (mergeToName(K, F, j), j) : mergeValues(j, F);
        return W === t.Name && !(B instanceof t.Name) ? resultToName(K, B) : B;
      };
    }
    e.mergeEvaluated = {
      props: y({
        mergeNames: (R, S, q) => R.if(t._`${q} !== true && ${S} !== undefined`, () => {
          R.if(t._`${S} === true`, () => R.assign(q, !0), () => R.assign(q, t._`${q} || {}`).code(t._`Object.assign(${q}, ${S})`));
        }),
        mergeToName: (R, S, q) => R.if(t._`${q} !== true`, () => {
          if (S === !0) R.assign(q, !0);else R.assign(q, t._`${q} || {}`), p(R, q, S);
        }),
        mergeValues: (R, S) => R === !0 ? !0 : {
          ...R,
          ...S
        },
        resultToName: resultToName_2
      }),
      items: y({
        mergeNames: (R, S, q) => R.if(t._`${q} !== true && ${S} !== undefined`, () => R.assign(q, t._`${S} === true ? true : ${q} > ${S} ? ${q} : ${S}`)),
        mergeToName: (R, S, q) => R.if(t._`${q} !== true`, () => R.assign(q, S === !0 ? !0 : t._`${q} > ${S} ? ${q} : ${S}`)),
        mergeValues: (R, S) => R === !0 ? !0 : Math.max(R, S),
        resultToName: (R, S) => R.var("items", S)
      })
    };
    function resultToName_2(R, S) {
      if (S === !0) return R.var("props", !0);
      let q = R.var("props", t._`{}`);
      if (S !== void 0) p(R, q, S);
      return q;
    }
    e.evaluatedPropsToName = resultToName_2;
    function p(R, S, q) {
      Object.keys(q).forEach(item => R.assign(t._`${S}${(0, t.getProperty)(item)}`, !0));
    }
    e.setEvaluated = p;
    let h = {};
    function g(R, ref) {
      return R.scopeValue("func", {
        ref: ref,
        code: h[ref.code] || (h[ref.code] = new r._Code(ref.code))
      });
    }
    e.useFunc = g;
    var f;
    (function (R) {
      R[R.Num = 0] = "Num", R[R.Str = 1] = "Str";
    })(f || (e.Type = f = {}));
    function z(R, S, q) {
      if (R instanceof t.Name) {
        let L = S === f.Num;
        return q ? L ? t._`"[" + ${R} + "]"` : t._`"['" + ${R} + "']"` : L ? t._`"/" + ${R}` : t._`"/" + ${R}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return q ? (0, t.getProperty)(R).toString() : "/" + _(R);
    }
    e.getErrorPath = z;
    function k(R, S, q = R.opts.strictSchema) {
      if (!q) return;
      if (S = `strict mode: ${S}`, q === !0) throw Error(S);
      R.self.logger.warn(S);
    }
    e.checkStrictMode = k;
  }),
  Le = J(e => {
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
  So = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    let t = te(),
      r = ne(),
      s = Le();
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
    function a(p, h = e.keywordError, g, f) {
      let {
          it: it_2
        } = p,
        {
          gen: gen,
          compositeRule: compositeRule,
          allErrors: allErrors
        } = it_2,
        q = _(p, h, g);
      if (f !== null && f !== void 0 ? f : compositeRule || allErrors) c(gen, q);else d(it_2, t._`[${q}]`);
    }
    e.reportError = a;
    function n(p, h = e.keywordError, g) {
      let {
          it: it_3
        } = p,
        {
          gen: gen_2,
          compositeRule: compositeRule_2,
          allErrors: allErrors_2
        } = it_3;
      if (c(gen_2, _(p, h, g)), !(compositeRule_2 || allErrors_2)) d(it_3, s.default.vErrors);
    }
    e.reportExtraError = n;
    function i(p, h) {
      p.assign(s.default.errors, h), p.if(t._`${s.default.vErrors} !== null`, () => p.if(h, () => p.assign(t._`${s.default.vErrors}.length`, h), () => p.assign(s.default.vErrors, null)));
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
      let R = gen_3.name("err");
      gen_3.forRange("i", errsCount, s.default.errors, S => {
        if (gen_3.const(R, t._`${s.default.vErrors}[${S}]`), gen_3.if(t._`${R}.instancePath === undefined`, () => gen_3.assign(t._`${R}.instancePath`, (0, t.strConcat)(s.default.instancePath, it_4.errorPath))), gen_3.assign(t._`${R}.schemaPath`, t.str`${it_4.errSchemaPath}/${keyword_3}`), it_4.opts.verbose) gen_3.assign(t._`${R}.schema`, schemaValue), gen_3.assign(t._`${R}.data`, data_2);
      });
    }
    e.extendErrors = l;
    function c(p, h) {
      let g = p.const("err", h);
      p.if(t._`${s.default.vErrors} === null`, () => p.assign(s.default.vErrors, t._`[${g}]`), t._`${s.default.vErrors}.push(${g})`), p.code(t._`${s.default.errors}++`);
    }
    function d(p, h) {
      let {
        gen: gen_4,
        validateName: validateName,
        schemaEnv: schemaEnv
      } = p;
      if (schemaEnv.$async) gen_4.throw(t._`new ${p.ValidationError}(${h})`);else gen_4.assign(t._`${validateName}.errors`, h), gen_4.return(!1);
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
    function _(p, h, g) {
      let {
        createErrors: createErrors
      } = p.it;
      if (createErrors === !1) return t._`{}`;
      return E(p, h, g);
    }
    function E(p, h, g = {}) {
      let {
          gen: gen_5,
          it: it_5
        } = p,
        k = [P(it_5, g), y(p, g)];
      return b(p, h, k), gen_5.object(...k);
    }
    function P({
      errorPath: errorPath
    }, {
      instancePath: instancePath
    }) {
      let g = instancePath ? t.str`${errorPath}${(0, r.getErrorPath)(instancePath, r.Type.Str)}` : errorPath;
      return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, g)];
    }
    function y({
      keyword: keyword_4,
      it: {
        errSchemaPath: errSchemaPath
      }
    }, {
      schemaPath: schemaPath_2,
      parentSchema: parentSchema
    }) {
      let z = parentSchema ? errSchemaPath : t.str`${errSchemaPath}/${keyword_4}`;
      if (schemaPath_2) z = t.str`${z}${(0, r.getErrorPath)(schemaPath_2, r.Type.Str)}`;
      return [m.schemaPath, z];
    }
    function b(p, {
      params: params_24,
      message: message_5
    }, f) {
      let {
          keyword: keyword_5,
          data: data_3,
          schemaValue: schemaValue_2,
          it: it_6
        } = p,
        {
          opts: opts_2,
          propertyName: propertyName,
          topSchemaRef: topSchemaRef_2,
          schemaPath: schemaPath_3
        } = it_6;
      if (f.push([m.keyword, keyword_5], [m.params, typeof params_24 == "function" ? params_24(p) : params_24 || t._`{}`]), opts_2.messages) f.push([m.message, typeof message_5 == "function" ? message_5(p) : message_5]);
      if (opts_2.verbose) f.push([m.schema, schemaValue_2], [m.parentSchema, t._`${topSchemaRef_2}${schemaPath_3}`], [s.default.data, data_3]);
      if (propertyName) f.push([m.propertyName, propertyName]);
    }
  }),
  hu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
    let t = So(),
      r = te(),
      s = Le(),
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
        E = {
          gen: gen_8,
          keyword: "false schema",
          data: data_4,
          schema: !1,
          schemaCode: !1,
          schemaValue: !1,
          params: {},
          it: it_7
        };
      (0, t.reportError)(E, a, void 0, d);
    }
  }),
  qi = J(e => {
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
  Ii = J(e => {
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
  fo = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
    let t = qi(),
      r = Ii(),
      s = So(),
      a = te(),
      n = ne();
    var i;
    (function (f) {
      f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
    })(i || (e.DataType = i = {}));
    function l(f) {
      let z = c(f.type);
      if (z.includes("null")) {
        if (f.nullable === !1) throw Error("type: null contradicts nullable: false");
      } else {
        if (!z.length && f.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
        if (f.nullable === !0) z.push("null");
      }
      return z;
    }
    e.getSchemaTypes = l;
    function c(f) {
      let z = Array.isArray(f) ? f : f ? [f] : [];
      if (z.every(t.isJSONType)) return z;
      throw Error("type must be JSONType or JSONType[]: " + z.join(","));
    }
    e.getJSONTypes = c;
    function d(f, z) {
      let {
          gen: gen_9,
          data: data_5,
          opts: opts_3
        } = f,
        q = _(z, opts_3.coerceTypes),
        L = z.length > 0 && !(q.length === 0 && z.length === 1 && (0, r.schemaHasRulesForType)(f, z[0]));
      if (L) {
        let K = b(z, data_5, opts_3.strictNumbers, i.Wrong);
        gen_9.if(K, () => {
          if (q.length) E(f, z, q);else h(f);
        });
      }
      return L;
    }
    e.coerceAndCheckDataType = d;
    let m = new Set(["string", "number", "integer", "boolean", "null"]);
    function _(f, z) {
      return z ? f.filter(item => m.has(item) || z === "array" && item === "array") : [];
    }
    function E(f, z, k) {
      let {
          gen: gen_10,
          data: data_6,
          opts: opts_4
        } = f,
        L = gen_10.let("dataType", a._`typeof ${data_6}`),
        K = gen_10.let("coerced", a._`undefined`);
      if (opts_4.coerceTypes === "array") gen_10.if(a._`${L} == 'object' && Array.isArray(${data_6}) && ${data_6}.length == 1`, () => gen_10.assign(data_6, a._`${data_6}[0]`).assign(L, a._`typeof ${data_6}`).if(b(z, data_6, opts_4.strictNumbers), () => gen_10.assign(K, data_6)));
      gen_10.if(a._`${K} !== undefined`);
      for (let F of k) if (m.has(F) || F === "array" && opts_4.coerceTypes === "array") j(F);
      gen_10.else(), h(f), gen_10.endIf(), gen_10.if(a._`${K} !== undefined`, () => {
        gen_10.assign(data_6, K), P(f, K);
      });
      function j(F) {
        switch (F) {
          case "string":
            gen_10.elseIf(a._`${L} == "number" || ${L} == "boolean"`).assign(K, a._`"" + ${data_6}`).elseIf(a._`${data_6} === null`).assign(K, a._`""`);
            return;
          case "number":
            gen_10.elseIf(a._`${L} == "boolean" || ${data_6} === null
              || (${L} == "string" && ${data_6} && ${data_6} == +${data_6})`).assign(K, a._`+${data_6}`);
            return;
          case "integer":
            gen_10.elseIf(a._`${L} === "boolean" || ${data_6} === null
              || (${L} === "string" && ${data_6} && ${data_6} == +${data_6} && !(${data_6} % 1))`).assign(K, a._`+${data_6}`);
            return;
          case "boolean":
            gen_10.elseIf(a._`${data_6} === "false" || ${data_6} === 0 || ${data_6} === null`).assign(K, !1).elseIf(a._`${data_6} === "true" || ${data_6} === 1`).assign(K, !0);
            return;
          case "null":
            gen_10.elseIf(a._`${data_6} === "" || ${data_6} === 0 || ${data_6} === false`), gen_10.assign(K, null);
            return;
          case "array":
            gen_10.elseIf(a._`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${data_6} === null`).assign(K, a._`[${data_6}]`);
        }
      }
    }
    function P({
      gen: gen_11,
      parentData: parentData,
      parentDataProperty: parentDataProperty
    }, R) {
      gen_11.if(a._`${parentData} !== undefined`, () => gen_11.assign(a._`${parentData}[${parentDataProperty}]`, R));
    }
    function y(f, z, k, R = i.Correct) {
      let S = R === i.Correct ? a.operators.EQ : a.operators.NEQ,
        q;
      switch (f) {
        case "null":
          return a._`${z} ${S} null`;
        case "array":
          q = a._`Array.isArray(${z})`;
          break;
        case "object":
          q = a._`${z} && typeof ${z} == "object" && !Array.isArray(${z})`;
          break;
        case "integer":
          q = L(a._`!(${z} % 1) && !isNaN(${z})`);
          break;
        case "number":
          q = L();
          break;
        default:
          return a._`typeof ${z} ${S} ${f}`;
      }
      return R === i.Correct ? q : (0, a.not)(q);
      function L(K = a.nil) {
        return (0, a.and)(a._`typeof ${z} == "number"`, K, k ? a._`isFinite(${z})` : a.nil);
      }
    }
    e.checkDataType = y;
    function b(f, z, k, R) {
      if (f.length === 1) return y(f[0], z, k, R);
      let S,
        q = (0, n.toHash)(f);
      if (q.array && q.object) {
        let L = a._`typeof ${z} != "object"`;
        S = q.null ? L : a._`!${z} || ${L}`, delete q.null, delete q.array, delete q.object;
      } else S = a.nil;
      if (q.number) delete q.integer;
      for (let L in q) S = (0, a.and)(S, y(L, z, k, R));
      return S;
    }
    e.checkDataTypes = b;
    let p = {
      message: ({
        schema: schema_4
      }) => `must be ${schema_4}`,
      params: ({
        schema: schema_5,
        schemaValue: schemaValue_3
      }) => typeof schema_5 == "string" ? a._`{type: ${schema_5}}` : a._`{type: ${schemaValue_3}}`
    };
    function h(f) {
      let z = g(f);
      (0, s.reportError)(z, p);
    }
    e.reportTypeError = h;
    function g(it_8) {
      let {
          gen: gen_12,
          data: data_7,
          schema: R
        } = it_8,
        S = (0, n.schemaRefOrVal)(it_8, R, "type");
      return {
        gen: gen_12,
        keyword: "type",
        data: data_7,
        schema: R.type,
        schemaCode: S,
        schemaValue: S,
        parentSchema: R,
        params: {},
        it: it_8
      };
    }
  }),
  mu = J(e => {
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
      let E = t._`${data_8}${(0, t.getProperty)(i)}`;
      if (compositeRule_3) {
        (0, r.checkStrictMode)(n, `default is ignored for: ${E}`);
        return;
      }
      let P = t._`${E} === undefined`;
      if (opts_5.useDefaults === "empty") P = t._`${P} || ${E} === null || ${E} === ""`;
      gen_13.if(P, t._`${E} = ${(0, t.stringify)(l)}`);
    }
  }),
  Ue = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
    let t = te(),
      r = ne(),
      s = Le(),
      a = ne();
    function n(f, z) {
      let {
        gen: gen_14,
        data: data_9,
        it: it_9
      } = f;
      gen_14.if(_(gen_14, data_9, z, it_9.opts.ownProperties), () => {
        f.setParams({
          missingProperty: t._`${z}`
        }, !0), f.error();
      });
    }
    e.checkReportMissingProp = n;
    function i({
      gen: gen_15,
      data: data_10,
      it: {
        opts: opts_6
      }
    }, R, S) {
      return (0, t.or)(...R.map(item => (0, t.and)(_(gen_15, data_10, item, opts_6.ownProperties), t._`${S} = ${item}`)));
    }
    e.checkMissingProp = i;
    function l(f, missingProperty) {
      f.setParams({
        missingProperty: missingProperty
      }, !0), f.error();
    }
    e.reportMissingProp = l;
    function c(f) {
      return f.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: t._`Object.prototype.hasOwnProperty`
      });
    }
    e.hasPropFunc = c;
    function d(f, z, k) {
      return t._`${c(f)}.call(${z}, ${k})`;
    }
    e.isOwnProperty = d;
    function m(f, z, k, R) {
      let S = t._`${z}${(0, t.getProperty)(k)} !== undefined`;
      return R ? t._`${S} && ${d(f, z, k)}` : S;
    }
    e.propertyInData = m;
    function _(f, z, k, R) {
      let S = t._`${z}${(0, t.getProperty)(k)} === undefined`;
      return R ? (0, t.or)(S, (0, t.not)(d(f, z, k))) : S;
    }
    e.noPropertyInData = _;
    function E(f) {
      return f ? Object.keys(f).filter(item => item !== "__proto__") : [];
    }
    e.allSchemaProperties = E;
    function P(f, z) {
      return E(z).filter(item => !(0, r.alwaysValidSchema)(f, z[item]));
    }
    e.schemaProperties = P;
    function y({
      schemaCode: schemaCode,
      data: data_11,
      it: {
        gen: gen_16,
        topSchemaRef: topSchemaRef_3,
        schemaPath: schemaPath_4,
        errorPath: errorPath_2
      },
      it: it_10
    }, K, j, F) {
      let W = F ? t._`${schemaCode}, ${data_11}, ${topSchemaRef_3}${schemaPath_4}` : data_11,
        B = [[s.default.instancePath, (0, t.strConcat)(s.default.instancePath, errorPath_2)], [s.default.parentData, it_10.parentData], [s.default.parentDataProperty, it_10.parentDataProperty], [s.default.rootData, s.default.rootData]];
      if (it_10.opts.dynamicRef) B.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
      let se = t._`${W}, ${gen_16.object(...B)}`;
      return j !== t.nil ? t._`${K}.call(${j}, ${se})` : t._`${K}(${se})`;
    }
    e.callValidateCode = y;
    let b = t._`new RegExp`;
    function p({
      gen: gen_17,
      it: {
        opts: opts_7
      }
    }, k) {
      let R = opts_7.unicodeRegExp ? "u" : "",
        {
          regExp: regExp
        } = opts_7.code,
        ref_2 = regExp(k, R);
      return gen_17.scopeValue("pattern", {
        key: ref_2.toString(),
        ref: ref_2,
        code: t._`${regExp.code === "new RegExp" ? b : (0, a.useFunc)(gen_17, regExp)}(${k}, ${R})`
      });
    }
    e.usePattern = p;
    function h(f) {
      let {
          gen: gen_18,
          data: data_12,
          keyword: keyword_6,
          it: it_11
        } = f,
        q = gen_18.name("valid");
      if (it_11.allErrors) {
        let K = gen_18.let("valid", !0);
        return L(() => gen_18.assign(K, !1)), K;
      }
      return gen_18.var(q, !0), L(() => gen_18.break()), q;
      function L(K) {
        let j = gen_18.const("len", t._`${data_12}.length`);
        gen_18.forRange("i", 0, j, dataProp => {
          f.subschema({
            keyword: keyword_6,
            dataProp: dataProp,
            dataPropType: r.Type.Num
          }, q), gen_18.if((0, t.not)(q), K);
        });
      }
    }
    e.validateArray = h;
    function g(f) {
      let {
        gen: gen_19,
        schema: schema_6,
        keyword: keyword_7,
        it: it_12
      } = f;
      if (!Array.isArray(schema_6)) throw Error("ajv implementation error");
      if (schema_6.some(item => (0, r.alwaysValidSchema)(it_12, item)) && !it_12.opts.unevaluated) return;
      let q = gen_19.let("valid", !1),
        L = gen_19.name("_valid");
      gen_19.block(() => schema_6.forEach((item, j) => {
        let F = f.subschema({
          keyword: keyword_7,
          schemaProp: j,
          compositeRule: !0
        }, L);
        if (gen_19.assign(q, t._`${q} || ${L}`), !f.mergeValidEvaluated(F, L)) gen_19.if((0, t.not)(q));
      })), f.result(q, () => f.reset(), () => f.error(!0));
    }
    e.validateUnion = g;
  }),
  pu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
    let t = te(),
      r = Le(),
      s = Ue(),
      a = So();
    function n(P, y) {
      let {
          gen: gen_20,
          keyword: keyword_8,
          schema: schema_7,
          parentSchema: parentSchema_2,
          it: it_13
        } = P,
        schema_8 = y.macro.call(it_13.self, schema_7, parentSchema_2, it_13),
        topSchemaRef_4 = m(gen_20, keyword_8, schema_8);
      if (it_13.opts.validateSchema !== !1) it_13.self.validateSchema(schema_8, !0);
      let R = gen_20.name("valid");
      P.subschema({
        schema: schema_8,
        schemaPath: t.nil,
        errSchemaPath: `${it_13.errSchemaPath}/${keyword_8}`,
        topSchemaRef: topSchemaRef_4,
        compositeRule: !0
      }, R), P.pass(R, () => P.error(!0));
    }
    e.macroKeywordCode = n;
    function i(P, y) {
      var b;
      let {
        gen: gen_21,
        keyword: keyword_9,
        schema: schema_9,
        parentSchema: parentSchema_3,
        $data: $data,
        it: it_14
      } = P;
      d(it_14, y);
      let R = m(gen_21, keyword_9, !$data && y.compile ? y.compile.call(it_14.self, schema_9, parentSchema_3, it_14) : y.validate),
        S = gen_21.let("valid");
      P.block$data(S, q), P.ok((b = y.valid) !== null && b !== void 0 ? b : S);
      function q() {
        if (y.errors === !1) {
          if (j(), y.modifying) l(P);
          F(() => P.error());
        } else {
          let W = y.async ? L() : K();
          if (y.modifying) l(P);
          F(() => c(P, W));
        }
      }
      function L() {
        let W = gen_21.let("ruleErrs", null);
        return gen_21.try(() => j(t._`await `), B => gen_21.assign(S, !1).if(t._`${B} instanceof ${it_14.ValidationError}`, () => gen_21.assign(W, t._`${B}.errors`), () => gen_21.throw(B))), W;
      }
      function K() {
        let W = t._`${R}.errors`;
        return gen_21.assign(W, null), j(t.nil), W;
      }
      function j(W = y.async ? t._`await ` : t.nil) {
        let B = it_14.opts.passContext ? r.default.this : r.default.self,
          se = !("compile" in y && !$data || y.schema === !1);
        gen_21.assign(S, t._`${W}${(0, s.callValidateCode)(P, R, B, se)}`, y.modifying);
      }
      function F(W) {
        var B;
        gen_21.if((0, t.not)((B = y.valid) !== null && B !== void 0 ? B : S), W);
      }
    }
    e.funcKeywordCode = i;
    function l(P) {
      let {
        gen: gen_22,
        data: data_13,
        it: it_15
      } = P;
      gen_22.if(it_15.parentData, () => gen_22.assign(data_13, t._`${it_15.parentData}[${it_15.parentDataProperty}]`));
    }
    function c(P, y) {
      let {
        gen: gen_23
      } = P;
      gen_23.if(t._`Array.isArray(${y})`, () => {
        gen_23.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`).assign(r.default.errors, t._`${r.default.vErrors}.length`), (0, a.extendErrors)(P);
      }, () => P.error());
    }
    function d({
      schemaEnv: schemaEnv_2
    }, y) {
      if (y.async && !schemaEnv_2.$async) throw Error("async keyword in sync schema");
    }
    function m(P, y, ref_3) {
      if (ref_3 === void 0) throw Error(`keyword "${y}" failed to compile`);
      return P.scopeValue("keyword", typeof ref_3 == "function" ? {
        ref: ref_3
      } : {
        ref: ref_3,
        code: (0, t.stringify)(ref_3)
      });
    }
    function _(P, y, b = !1) {
      return !y.length || y.some(item => item === "array" ? Array.isArray(P) : item === "object" ? P && typeof P == "object" && !Array.isArray(P) : typeof P == item || b && typeof P > "u");
    }
    e.validSchemaType = _;
    function E({
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
          let z = `keyword "${g}" value is invalid at path "${errSchemaPath_2}": ` + self_3.errorsText(h.validateSchema.errors);
          if (opts_8.validateSchema === "log") self_3.logger.error(z);else throw Error(z);
        }
      }
    }
    e.validateKeywordUsage = E;
  }),
  fu = J(e => {
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
        y(gen_24.let("data", t._`${l.data}${(0, t.getProperty)(dataProp_2)}`, !0)), i.errorPath = t.str`${errorPath_3}${(0, r.getErrorPath)(dataProp_2, dataPropType, opts_9.jsPropertySyntax)}`, i.parentDataProperty = t._`${dataProp_2}`, i.dataPathArr = [...dataPathArr, i.parentDataProperty];
      }
      if (data_14 !== void 0) {
        if (y(data_14 instanceof t.Name ? data_14 : gen_24.let("data", data_14, !0)), propertyName_2 !== void 0) i.propertyName = propertyName_2;
      }
      if (dataTypes) i.dataTypes = dataTypes;
      function y(b) {
        i.data = b, i.dataLevel = l.dataLevel + 1, i.dataTypes = [], l.definedProperties = new Set(), i.parentData = l.data, i.dataNames = [...l.dataNames, b];
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
  Oi = J((e, t) => {
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
  Su = J((e, t) => {
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
    function s(n, i, l, c, d, m, _, E, P, y) {
      if (c && typeof c == "object" && !Array.isArray(c)) {
        i(c, d, m, _, E, P, y);
        for (var b in c) {
          var p = c[b];
          if (Array.isArray(p)) {
            if (b in r.arrayKeywords) for (var h = 0; h < p.length; h++) s(n, i, l, p[h], d + "/" + b + "/" + h, m, d, b, c, h);
          } else if (b in r.propsKeywords) {
            if (p && typeof p == "object") for (var g in p) s(n, i, l, p[g], d + "/" + b + "/" + a(g), m, d, b, c, g);
          } else if (b in r.keywords || n.allKeys && !(b in r.skipKeywords)) s(n, i, l, p, d + "/" + b, m, d, b, c);
        }
        l(c, d, m, _, E, P, y);
      }
    }
    function a(n) {
      return n.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }),
  go = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
    let t = ne(),
      r = Oi(),
      s = Su(),
      a = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
    function n(p, h = !0) {
      if (typeof p == "boolean") return !0;
      if (h === !0) return !l(p);
      if (!h) return !1;
      return c(p) <= h;
    }
    e.inlineRef = n;
    let i = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function l(p) {
      for (let h in p) {
        if (i.has(h)) return !0;
        let g = p[h];
        if (Array.isArray(g) && g.some(l)) return !0;
        if (typeof g == "object" && l(g)) return !0;
      }
      return !1;
    }
    function c(p) {
      let h = 0;
      for (let g in p) {
        if (g === "$ref") return 1 / 0;
        if (h++, a.has(g)) continue;
        if (typeof p[g] == "object") (0, t.eachItem)(p[g], f => h += c(f));
        if (h === 1 / 0) return 1 / 0;
      }
      return h;
    }
    function d(p, h = "", g) {
      if (g !== !1) h = E(h);
      return m(p, p.parse(h));
    }
    e.getFullPath = d;
    function m(p, h) {
      return p.serialize(h).split("#")[0] + "#";
    }
    e._getFullPath = m;
    let _ = /#\/?$/;
    function E(p) {
      return p ? p.replace(_, "") : "";
    }
    e.normalizeId = E;
    function P(p, h, g) {
      return g = E(g), p.resolve(h, g);
    }
    e.resolveUrl = P;
    let y = /^[a-z_][-a-z0-9._]*$/i;
    function b(p, h) {
      if (typeof p == "boolean") return {};
      let {
          schemaId: schemaId,
          uriResolver: uriResolver
        } = this.opts,
        z = E(p[schemaId] || h),
        k = {
          "": z
        },
        R = d(uriResolver, z, !1),
        S = {},
        q = new Set();
      return s(p, {
        allKeys: !0
      }, (j, F, W, B) => {
        if (B === void 0) return;
        let se = R + F,
          le = k[B];
        if (typeof j[schemaId] == "string") le = ie.call(this, j[schemaId]);
        Se.call(this, j.$anchor), Se.call(this, j.$dynamicAnchor), k[F] = le;
        function ie(ae) {
          let N = this.opts.uriResolver.resolve;
          if (ae = E(le ? N(le, ae) : ae), q.has(ae)) throw K(ae);
          q.add(ae);
          let D = this.refs[ae];
          if (typeof D == "string") D = this.refs[D];
          if (typeof D == "object") L(j, D.schema, ae);else if (ae !== E(se)) if (ae[0] === "#") L(j, S[ae], ae), S[ae] = j;else this.refs[ae] = se;
          return ae;
        }
        function Se(ae) {
          if (typeof ae == "string") {
            if (!y.test(ae)) throw Error(`invalid anchor "${ae}"`);
            ie.call(this, `#${ae}`);
          }
        }
      }), S;
      function L(j, F, W) {
        if (F !== void 0 && !r(j, F)) throw K(W);
      }
      function K(j) {
        return Error(`reference "${j}" resolves to more than one schema`);
      }
    }
    e.getSchemaRefs = b;
  }),
  as = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
    let t = hu(),
      r = fo(),
      s = Ii(),
      a = fo(),
      n = mu(),
      i = pu(),
      l = fu(),
      c = te(),
      d = Le(),
      m = go(),
      _ = ne(),
      E = So();
    function P(I) {
      if (R(I)) {
        if (q(I), k(I)) {
          h(I);
          return;
        }
      }
      y(I, () => (0, t.topBoolOrEmptySchema)(I));
    }
    e.validateFunctionCode = P;
    function y({
      gen: gen_25,
      validateName: validateName_3,
      schema: schema_13,
      schemaEnv: schemaEnv_3,
      opts: opts_10
    }, ee) {
      if (opts_10.code.es5) gen_25.func(validateName_3, c._`${d.default.data}, ${d.default.valCxt}`, schemaEnv_3.$async, () => {
        gen_25.code(c._`"use strict"; ${f(schema_13, opts_10)}`), p(gen_25, opts_10), gen_25.code(ee);
      });else gen_25.func(validateName_3, c._`${d.default.data}, ${b(opts_10)}`, schemaEnv_3.$async, () => gen_25.code(f(schema_13, opts_10)).code(ee));
    }
    function b(I) {
      return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${I.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
    }
    function p(I, V) {
      I.if(d.default.valCxt, () => {
        if (I.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`), I.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`), I.var(d.default.parentDataProperty, c._`${d.default.valCxt}.${d.default.parentDataProperty}`), I.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`), V.dynamicRef) I.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
      }, () => {
        if (I.var(d.default.instancePath, c._`""`), I.var(d.default.parentData, c._`undefined`), I.var(d.default.parentDataProperty, c._`undefined`), I.var(d.default.rootData, d.default.data), V.dynamicRef) I.var(d.default.dynamicAnchors, c._`{}`);
      });
    }
    function h(I) {
      let {
        schema: schema_14,
        opts: opts_11,
        gen: gen_26
      } = I;
      y(I, () => {
        if (opts_11.$comment && schema_14.$comment) B(I);
        if (j(I), gen_26.let(d.default.vErrors, null), gen_26.let(d.default.errors, 0), opts_11.unevaluated) g(I);
        L(I), se(I);
      });
    }
    function g(I) {
      let {
        gen: gen_27,
        validateName: validateName_4
      } = I;
      I.evaluated = gen_27.const("evaluated", c._`${validateName_4}.evaluated`), gen_27.if(c._`${I.evaluated}.dynamicProps`, () => gen_27.assign(c._`${I.evaluated}.props`, c._`undefined`)), gen_27.if(c._`${I.evaluated}.dynamicItems`, () => gen_27.assign(c._`${I.evaluated}.items`, c._`undefined`));
    }
    function f(I, V) {
      let x = typeof I == "object" && I[V.schemaId];
      return x && (V.code.source || V.code.process) ? c._`/*# sourceURL=${x} */` : c.nil;
    }
    function z(I, V) {
      if (R(I)) {
        if (q(I), k(I)) {
          S(I, V);
          return;
        }
      }
      (0, t.boolOrEmptySchema)(I, V);
    }
    function k({
      schema: schema_15,
      self: self_4
    }) {
      if (typeof schema_15 == "boolean") return !schema_15;
      for (let x in schema_15) if (self_4.RULES.all[x]) return !0;
      return !1;
    }
    function R(I) {
      return typeof I.schema != "boolean";
    }
    function S(I, V) {
      let {
        schema: schema_16,
        gen: gen_28,
        opts: opts_12
      } = I;
      if (opts_12.$comment && schema_16.$comment) B(I);
      F(I), W(I);
      let ee = gen_28.const("_errs", d.default.errors);
      L(I, ee), gen_28.var(V, c._`${ee} === ${d.default.errors}`);
    }
    function q(I) {
      (0, _.checkUnknownRules)(I), K(I);
    }
    function L(I, V) {
      if (I.opts.jtd) return ie(I, [], !1, V);
      let x = (0, r.getSchemaTypes)(I.schema);
      ie(I, x, !(0, r.coerceAndCheckDataType)(I, x), V);
    }
    function K(I) {
      let {
        schema: schema_17,
        errSchemaPath: errSchemaPath_4,
        opts: opts_13,
        self: self_5
      } = I;
      if (schema_17.$ref && opts_13.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(schema_17, self_5.RULES)) self_5.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath_4}"`);
    }
    function j(I) {
      let {
        schema: schema_18,
        opts: opts_14
      } = I;
      if (schema_18.default !== void 0 && opts_14.useDefaults && opts_14.strictSchema) (0, _.checkStrictMode)(I, "default is ignored in the schema root");
    }
    function F(I) {
      let V = I.schema[I.opts.schemaId];
      if (V) I.baseId = (0, m.resolveUrl)(I.opts.uriResolver, I.baseId, V);
    }
    function W(I) {
      if (I.schema.$async && !I.schemaEnv.$async) throw Error("async schema in sync schema");
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
        let me = c.str`${errSchemaPath_5}/$comment`,
          _e = gen_29.scopeValue("root", {
            ref: schemaEnv_4.root
          });
        gen_29.code(c._`${d.default.self}.opts.$comment(${$comment}, ${me}, ${_e}.schema)`);
      }
    }
    function se(I) {
      let {
        gen: gen_30,
        schemaEnv: schemaEnv_5,
        validateName: validateName_5,
        ValidationError: ValidationError,
        opts: opts_16
      } = I;
      if (schemaEnv_5.$async) gen_30.if(c._`${d.default.errors} === 0`, () => gen_30.return(d.default.data), () => gen_30.throw(c._`new ${ValidationError}(${d.default.vErrors})`));else {
        if (gen_30.assign(c._`${validateName_5}.errors`, d.default.vErrors), opts_16.unevaluated) le(I);
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
    function ie(I, V, x, X) {
      let {
          gen: gen_32,
          schema: schema_20,
          data: data_15,
          allErrors: allErrors_4,
          opts: opts_17,
          self: self_6
        } = I,
        {
          RULES: RULES
        } = self_6;
      if (schema_20.$ref && (opts_17.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(schema_20, RULES))) {
        gen_32.block(() => re(I, "$ref", RULES.all.$ref.definition));
        return;
      }
      if (!opts_17.jtd) ae(I, V);
      gen_32.block(() => {
        for (let ye of RULES.rules) Ne(ye);
        Ne(RULES.post);
      });
      function Ne(ye) {
        if (!(0, s.shouldUseGroup)(schema_20, ye)) return;
        if (ye.type) {
          if (gen_32.if((0, a.checkDataType)(ye.type, data_15, opts_17.strictNumbers)), Se(I, ye), V.length === 1 && V[0] === ye.type && x) gen_32.else(), (0, a.reportTypeError)(I);
          gen_32.endIf();
        } else Se(I, ye);
        if (!allErrors_4) gen_32.if(c._`${d.default.errors} === ${X || 0}`);
      }
    }
    function Se(I, V) {
      let {
        gen: gen_33,
        schema: schema_21,
        opts: {
          useDefaults: useDefaults
        }
      } = I;
      if (useDefaults) (0, n.assignDefaults)(I, V.type);
      gen_33.block(() => {
        for (let ee of V.rules) if ((0, s.shouldUseRule)(schema_21, ee)) re(I, ee.keyword, ee.definition, V.type);
      });
    }
    function ae(I, V) {
      if (I.schemaEnv.meta || !I.opts.strictTypes) return;
      if (N(I, V), !I.opts.allowUnionTypes) D(I, V);
      H(I, I.dataTypes);
    }
    function N(I, V) {
      if (!V.length) return;
      if (!I.dataTypes.length) {
        I.dataTypes = V;
        return;
      }
      V.forEach(item => {
        if (!O(I.dataTypes, item)) G(I, `type "${item}" not allowed by context "${I.dataTypes.join(",")}"`);
      }), A(I, V);
    }
    function D(I, V) {
      if (V.length > 1 && !(V.length === 2 && V.includes("null"))) G(I, "use allowUnionTypes to allow union type keyword");
    }
    function H(I, V) {
      let x = I.self.RULES.all;
      for (let X in x) {
        let Z = x[X];
        if (typeof Z == "object" && (0, s.shouldUseRule)(I.schema, Z)) {
          let {
            type: type_2
          } = Z.definition;
          if (type_2.length && !type_2.some(item => w(V, item))) G(I, `missing type "${type_2.join(",")}" for keyword "${X}"`);
        }
      }
    }
    function w(I, V) {
      return I.includes(V) || V === "number" && I.includes("integer");
    }
    function O(I, V) {
      return I.includes(V) || V === "integer" && I.includes("number");
    }
    function A(I, V) {
      let x = [];
      for (let X of I.dataTypes) if (O(V, X)) x.push(X);else if (V.includes("integer") && X === "number") x.push("integer");
      I.dataTypes = x;
    }
    function G(I, V) {
      let x = I.schemaEnv.baseId + I.errSchemaPath;
      V += ` at "${x}" (strictTypes)`, (0, _.checkStrictMode)(I, V, I.opts.strictTypes);
    }
    var Y = class {
      constructor(I, V, x) {
        if ((0, i.validateKeywordUsage)(I, V, x), this.gen = I.gen, this.allErrors = I.allErrors, this.keyword = x, this.data = I.data, this.schema = I.schema[x], this.$data = V.$data && I.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(I, this.schema, x, this.$data), this.schemaType = V.schemaType, this.parentSchema = I.schema, this.params = {}, this.it = I, this.def = V, this.$data) this.schemaCode = I.gen.const("vSchema", Te(this.$data, I));else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, V.schemaType, V.allowUndefined)) throw Error(`${x} value must be ${JSON.stringify(V.schemaType)}`);
        if ("code" in V ? V.trackErrors : V.errors !== !1) this.errsCount = I.gen.const("_errs", d.default.errors);
      }
      result(I, V, x) {
        this.failResult((0, c.not)(I), V, x);
      }
      failResult(I, V, x) {
        if (this.gen.if(I), x) x();else this.error();
        if (V) {
          if (this.gen.else(), V(), this.allErrors) this.gen.endIf();
        } else if (this.allErrors) this.gen.endIf();else this.gen.else();
      }
      pass(I, V) {
        this.failResult((0, c.not)(I), void 0, V);
      }
      fail(I) {
        if (I === void 0) {
          if (this.error(), !this.allErrors) this.gen.if(!1);
          return;
        }
        if (this.gen.if(I), this.error(), this.allErrors) this.gen.endIf();else this.gen.else();
      }
      fail$data(I) {
        if (!this.$data) return this.fail(I);
        let {
          schemaCode: schemaCode_2
        } = this;
        this.fail(c._`${schemaCode_2} !== undefined && (${(0, c.or)(this.invalid$data(), I)})`);
      }
      error(I, V, x) {
        if (V) {
          this.setParams(V), this._error(I, x), this.setParams({});
          return;
        }
        this._error(I, x);
      }
      _error(I, V) {
        (I ? E.reportExtraError : E.reportError)(this, this.def.error, V);
      }
      $dataError() {
        (0, E.reportError)(this, this.def.$dataError || E.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
        (0, E.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(I) {
        if (!this.allErrors) this.gen.if(I);
      }
      setParams(I, V) {
        if (V) Object.assign(this.params, I);else this.params = I;
      }
      block$data(I, V, x = c.nil) {
        this.gen.block(() => {
          this.check$data(I, x), V();
        });
      }
      check$data(I = c.nil, V = c.nil) {
        if (!this.$data) return;
        let {
          gen: gen_34,
          schemaCode: schemaCode_3,
          schemaType: schemaType_2,
          def: def
        } = this;
        if (gen_34.if((0, c.or)(c._`${schemaCode_3} === undefined`, V)), I !== c.nil) gen_34.assign(I, !0);
        if (schemaType_2.length || def.validateSchema) {
          if (gen_34.elseIf(this.invalid$data()), this.$dataError(), I !== c.nil) gen_34.assign(I, !1);
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
        return (0, c.or)(ee(), me());
        function ee() {
          if (schemaType_3.length) {
            if (!(schemaCode_4 instanceof c.Name)) throw Error("ajv implementation error");
            let _e = Array.isArray(schemaType_3) ? schemaType_3 : [schemaType_3];
            return c._`${(0, a.checkDataTypes)(_e, schemaCode_4, it_16.opts.strictNumbers, a.DataType.Wrong)}`;
          }
          return c.nil;
        }
        function me() {
          if (def_2.validateSchema) {
            let _e = gen_35.scopeValue("validate$data", {
              ref: def_2.validateSchema
            });
            return c._`!${_e}(${schemaCode_4})`;
          }
          return c.nil;
        }
      }
      subschema(I, V) {
        let x = (0, l.getSubschema)(this.it, I);
        (0, l.extendSubschemaData)(x, this.it, I), (0, l.extendSubschemaMode)(x, I);
        let X = {
          ...this.it,
          ...x,
          items: void 0,
          props: void 0
        };
        return z(X, V), X;
      }
      mergeEvaluated(I, V) {
        let {
          it: it_17,
          gen: gen_36
        } = this;
        if (!it_17.opts.unevaluated) return;
        if (it_17.props !== !0 && I.props !== void 0) it_17.props = _.mergeEvaluated.props(gen_36, I.props, it_17.props, V);
        if (it_17.items !== !0 && I.items !== void 0) it_17.items = _.mergeEvaluated.items(gen_36, I.items, it_17.items, V);
      }
      mergeValidEvaluated(I, V) {
        let {
          it: it_18,
          gen: gen_37
        } = this;
        if (it_18.opts.unevaluated && (it_18.props !== !0 || it_18.items !== !0)) return gen_37.if(V, () => this.mergeEvaluated(I, c.Name)), !0;
      }
    };
    e.KeywordCxt = Y;
    function re(I, V, x, X) {
      let Z = new Y(I, x, V);
      if ("code" in x) x.code(Z, X);else if (Z.$data && x.validate) (0, i.funcKeywordCode)(Z, x);else if ("macro" in x) (0, i.macroKeywordCode)(Z, x);else if (x.compile || x.validate) (0, i.funcKeywordCode)(Z, x);
    }
    let Q = /^\/(?:[^~]|~0|~1)*$/,
      ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function Te(I, {
      dataLevel: dataLevel,
      dataNames: dataNames,
      dataPathArr: dataPathArr_2
    }) {
      let Z, ee;
      if (I === "") return d.default.rootData;
      if (I[0] === "/") {
        if (!Q.test(I)) throw Error(`Invalid JSON-pointer: ${I}`);
        Z = I, ee = d.default.rootData;
      } else {
        let ge = ce.exec(I);
        if (!ge) throw Error(`Invalid JSON-pointer: ${I}`);
        let ue = +ge[1];
        if (Z = ge[2], Z === "#") {
          if (ue >= dataLevel) throw Error(Re("property/index", ue));
          return dataPathArr_2[dataLevel - ue];
        }
        if (ue > dataLevel) throw Error(Re("data", ue));
        if (ee = dataNames[dataLevel - ue], !Z) return ee;
      }
      let me = ee,
        _e = Z.split("/");
      for (let ge of _e) if (ge) ee = c._`${ee}${(0, c.getProperty)((0, _.unescapeJsonPointer)(ge))}`, me = c._`${me} && ${ee}`;
      return me;
      function Re(ge, ue) {
        return `Cannot access ${ge} ${ue} levels up, current level is ${dataLevel}`;
      }
    }
    e.getData = Te;
  }),
  _o = J(e => {
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
  os = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = go();
    var r = class extends Error {
      constructor(s, a, n, i) {
        super(i || `can't resolve reference ${n} from id ${a}`);
        this.missingRef = (0, t.resolveUrl)(s, a, n), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(s, this.missingRef));
      }
    };
    e.default = r;
  }),
  yo = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
    let t = te(),
      r = _o(),
      s = Le(),
      a = go(),
      n = ne(),
      i = as();
    var l = class {
      constructor(h) {
        var g;
        this.refs = {}, this.dynamicAnchors = {};
        let f;
        if (typeof h.schema == "object") f = h.schema;
        this.schema = h.schema, this.schemaId = h.schemaId, this.root = h.root || this, this.baseId = (g = h.baseId) !== null && g !== void 0 ? g : (0, a.normalizeId)(f === null || f === void 0 ? void 0 : f[h.schemaId || "$id"]), this.schemaPath = h.schemaPath, this.localRefs = h.localRefs, this.meta = h.meta, this.$async = f === null || f === void 0 ? void 0 : f.$async, this.refs = {};
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
      } catch (F) {
        if (delete schemaEnv_6.validate, delete schemaEnv_6.validateName, j) this.logger.error("Error compiling schema, function code:", j);
        throw F;
      } finally {
        this._compilations.delete(schemaEnv_6);
      }
    }
    e.compileSchema = c;
    function d(root, baseId, f) {
      var z;
      f = (0, a.resolveUrl)(this.opts.uriResolver, baseId, f);
      let k = root.refs[f];
      if (k) return k;
      let R = P.call(this, root, f);
      if (R === void 0) {
        let schema_22 = (z = root.localRefs) === null || z === void 0 ? void 0 : z[f],
          {
            schemaId: schemaId_2
          } = this.opts;
        if (schema_22) R = new l({
          schema: schema_22,
          schemaId: schemaId_2,
          root: root,
          baseId: baseId
        });
      }
      if (R === void 0) return;
      return root.refs[f] = m.call(this, R);
    }
    e.resolveRef = d;
    function m(h) {
      if ((0, a.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
      return h.validate ? h : c.call(this, h);
    }
    function _(h) {
      for (let g of this._compilations) if (E(g, h)) return g;
    }
    e.getCompilingSchema = _;
    function E(h, g) {
      return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
    }
    function P(h, g) {
      let f;
      while (typeof (f = this.refs[g]) == "string") g = f;
      return f || this.schemas[g] || y.call(this, h, g);
    }
    function y(root_2, g) {
      let f = this.opts.uriResolver.parse(g),
        z = (0, a._getFullPath)(this.opts.uriResolver, f),
        baseId_2 = (0, a.getFullPath)(this.opts.uriResolver, root_2.baseId, void 0);
      if (Object.keys(root_2.schema).length > 0 && z === baseId_2) return p.call(this, f, root_2);
      let R = (0, a.normalizeId)(z),
        S = this.refs[R] || this.schemas[R];
      if (typeof S == "string") {
        let q = y.call(this, root_2, S);
        if (typeof (q === null || q === void 0 ? void 0 : q.schema) !== "object") return;
        return p.call(this, f, q);
      }
      if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object") return;
      if (!S.validate) c.call(this, S);
      if (R === (0, a.normalizeId)(g)) {
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
      return p.call(this, f, S);
    }
    e.resolveSchema = y;
    let b = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function p(h, {
      baseId: baseId_3,
      schema: schema_24,
      root: root_3
    }) {
      var k;
      if (((k = h.fragment) === null || k === void 0 ? void 0 : k[0]) !== "/") return;
      for (let q of h.fragment.slice(1).split("/")) {
        if (typeof schema_24 === "boolean") return;
        let L = schema_24[(0, n.unescapeFragment)(q)];
        if (L === void 0) return;
        schema_24 = L;
        let K = typeof schema_24 === "object" && schema_24[this.opts.schemaId];
        if (!b.has(q) && K) baseId_3 = (0, a.resolveUrl)(this.opts.uriResolver, baseId_3, K);
      }
      let R;
      if (typeof schema_24 != "boolean" && schema_24.$ref && !(0, n.schemaHasRulesButRef)(schema_24, this.RULES)) {
        let q = (0, a.resolveUrl)(this.opts.uriResolver, baseId_3, schema_24.$ref);
        R = y.call(this, root_3, q);
      }
      let {
        schemaId: schemaId_4
      } = this.opts;
      if (R = R || new l({
        schema: schema_24,
        schemaId: schemaId_4,
        root: root_3,
        baseId: baseId_3
      }), R.schema !== R.root.schema) return R;
    }
  }),
  gu = J((e, t) => {
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
  Ni = J((e, t) => {
    let isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
      isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function stringArrayToHexStripped(y) {
      let b = "",
        p = 0,
        h = 0;
      for (h = 0; h < y.length; h++) {
        if (p = y[h].charCodeAt(0), p === 48) continue;
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
        b += y[h];
        break;
      }
      for (h += 1; h < y.length; h++) {
        if (p = y[h].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
        b += y[h];
      }
      return b;
    }
    let nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function i(y) {
      return y.length = 0, !0;
    }
    function l(y, b, p) {
      if (y.length) {
        let h = stringArrayToHexStripped(y);
        if (h !== "") b.push(h);else return p.error = !0, !1;
        y.length = 0;
      }
      return !0;
    }
    function c(y) {
      let b = 0,
        p = {
          error: !1,
          address: "",
          zone: ""
        },
        h = [],
        g = [],
        f = !1,
        z = !1,
        k = l;
      for (let R = 0; R < y.length; R++) {
        let S = y[R];
        if (S === "[" || S === "]") continue;
        if (S === ":") {
          if (f === !0) z = !0;
          if (!k(g, h, p)) break;
          if (++b > 7) {
            p.error = !0;
            break;
          }
          if (R > 0 && y[R - 1] === ":") f = !0;
          h.push(":");
          continue;
        } else if (S === "%") {
          if (!k(g, h, p)) break;
          k = i;
        } else {
          g.push(S);
          continue;
        }
      }
      if (g.length) if (k === i) p.zone = g.join("");else if (z) h.push(g.join(""));else h.push(stringArrayToHexStripped(g));
      return p.address = h.join(""), p;
    }
    function normalizeIPv6(host) {
      if (m(host, ":") < 2) return {
        host: host,
        isIPV6: !1
      };
      let b = c(host);
      if (!b.error) {
        let {
          address: p,
          address: h
        } = b;
        if (b.zone) p += "%" + b.zone, h += "%25" + b.zone;
        return {
          host: p,
          isIPV6: !0,
          escapedHost: h
        };
      } else return {
        host: host,
        isIPV6: !1
      };
    }
    function m(y, b) {
      let p = 0;
      for (let h = 0; h < y.length; h++) if (y[h] === b) p++;
      return p;
    }
    function removeDotSegments(y) {
      let b = y,
        p = [],
        h = -1,
        g = 0;
      while (g = b.length) {
        if (g === 1) {
          if (b === ".") break;else if (b === "/") {
            p.push("/");
            break;
          } else {
            p.push(b);
            break;
          }
        } else if (g === 2) {
          if (b[0] === ".") {
            if (b[1] === ".") break;else if (b[1] === "/") {
              b = b.slice(2);
              continue;
            }
          } else if (b[0] === "/") {
            if (b[1] === "." || b[1] === "/") {
              p.push("/");
              break;
            }
          }
        } else if (g === 3) {
          if (b === "/..") {
            if (p.length !== 0) p.pop();
            p.push("/");
            break;
          }
        }
        if (b[0] === ".") {
          if (b[1] === ".") {
            if (b[2] === "/") {
              b = b.slice(3);
              continue;
            }
          } else if (b[1] === "/") {
            b = b.slice(2);
            continue;
          }
        } else if (b[0] === "/") {
          if (b[1] === ".") {
            if (b[2] === "/") {
              b = b.slice(2);
              continue;
            } else if (b[2] === ".") {
              if (b[3] === "/") {
                if (b = b.slice(3), p.length !== 0) p.pop();
                continue;
              }
            }
          }
        }
        if ((h = b.indexOf("/", 1)) === -1) {
          p.push(b);
          break;
        } else p.push(b.slice(0, h)), b = b.slice(h);
      }
      return p.join("");
    }
    function normalizeComponentEncoding(y, b) {
      let p = b !== !0 ? escape : unescape;
      if (y.scheme !== void 0) y.scheme = p(y.scheme);
      if (y.userinfo !== void 0) y.userinfo = p(y.userinfo);
      if (y.host !== void 0) y.host = p(y.host);
      if (y.path !== void 0) y.path = p(y.path);
      if (y.query !== void 0) y.query = p(y.query);
      if (y.fragment !== void 0) y.fragment = p(y.fragment);
      return y;
    }
    function recomposeAuthority(y) {
      let b = [];
      if (y.userinfo !== void 0) b.push(y.userinfo), b.push("@");
      if (y.host !== void 0) {
        let p = unescape(y.host);
        if (!isIPv4(p)) {
          let h = normalizeIPv6(p);
          if (h.isIPV6 === !0) p = `[${h.escapedHost}]`;else p = y.host;
        }
        b.push(p);
      }
      if (typeof y.port === "number" || typeof y.port === "string") b.push(":"), b.push(String(y.port));
      return b.length ? b.join("") : void 0;
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
  _u = J((e, t) => {
    let {
        isUUID: isUUID_2
      } = Ni(),
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
      let q = String(S.scheme).toLowerCase() === "https";
      if (S.port === (q ? 443 : 80) || S.port === "") S.port = void 0;
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
        let [q, L] = S.resourceName.split("?");
        S.path = q && q !== "/" ? q : void 0, S.query = L, S.resourceName = void 0;
      }
      return S.fragment = void 0, S;
    }
    function parse_3(S, q) {
      if (!S.path) return S.error = "URN can not be parsed", S;
      let L = S.path.match(s);
      if (L) {
        let K = q.scheme || S.scheme || "urn";
        S.nid = L[1].toLowerCase(), S.nss = L[2];
        let j = getSchemeHandler(`${K}:${q.nid || S.nid}`);
        if (S.path = void 0, j) S = j.parse(S, q);
      } else S.error = S.error || "URN can not be parsed.";
      return S;
    }
    function serialize_3(S, q) {
      if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
      let L = q.scheme || S.scheme || "urn",
        K = S.nid.toLowerCase(),
        j = getSchemeHandler(`${L}:${q.nid || K}`);
      if (j) S = j.serialize(S, q);
      let F = S,
        nss = S.nss;
      return F.path = `${K || q.nid}:${nss}`, q.skipEscape = !0, F;
    }
    function parse_4(S, q) {
      let L = S;
      if (L.uuid = L.nss, L.nss = void 0, !q.tolerant && (!L.uuid || !isUUID_2(L.uuid))) L.error = L.error || "UUID is not valid.";
      return L;
    }
    function serialize_4(S) {
      let q = S;
      return q.nss = (S.uuid || "").toLowerCase(), q;
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
  yu = J((e, t) => {
    let {
        normalizeIPv6: normalizeIPv6_2,
        removeDotSegments: removeDotSegments_2,
        recomposeAuthority: recomposeAuthority_2,
        normalizeComponentEncoding: normalizeComponentEncoding_2,
        isIPv4: isIPv4_2,
        nonSimpleDomain: nonSimpleDomain_2
      } = Ni(),
      {
        SCHEMES: SCHEMES_2,
        getSchemeHandler: getSchemeHandler_2
      } = _u();
    function normalize(g, f) {
      if (typeof g === "string") g = serialize_5(parse_5(g, f), f);else if (typeof g === "object") g = parse_5(serialize_5(g, f), f);
      return g;
    }
    function resolve(g, f, z) {
      let k = z ? Object.assign({
          scheme: "null"
        }, z) : {
          scheme: "null"
        },
        R = resolveComponent(parse_5(g, k), parse_5(f, k), k, !0);
      return k.skipEscape = !0, serialize_5(R, k);
    }
    function resolveComponent(g, f, z, k) {
      let R = {};
      if (!k) g = parse_5(serialize_5(g, z), z), f = parse_5(serialize_5(f, z), z);
      if (z = z || {}, !z.tolerant && f.scheme) R.scheme = f.scheme, R.userinfo = f.userinfo, R.host = f.host, R.port = f.port, R.path = removeDotSegments_2(f.path || ""), R.query = f.query;else {
        if (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) R.userinfo = f.userinfo, R.host = f.host, R.port = f.port, R.path = removeDotSegments_2(f.path || ""), R.query = f.query;else {
          if (!f.path) {
            if (R.path = g.path, f.query !== void 0) R.query = f.query;else R.query = g.query;
          } else {
            if (f.path[0] === "/") R.path = removeDotSegments_2(f.path);else {
              if ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path) R.path = "/" + f.path;else if (!g.path) R.path = f.path;else R.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + f.path;
              R.path = removeDotSegments_2(R.path);
            }
            R.query = f.query;
          }
          R.userinfo = g.userinfo, R.host = g.host, R.port = g.port;
        }
        R.scheme = g.scheme;
      }
      return R.fragment = f.fragment, R;
    }
    function equal(g, f, z) {
      if (typeof g === "string") g = unescape(g), g = serialize_5(normalizeComponentEncoding_2(parse_5(g, z), !0), {
        ...z,
        skipEscape: !0
      });else if (typeof g === "object") g = serialize_5(normalizeComponentEncoding_2(g, !0), {
        ...z,
        skipEscape: !0
      });
      if (typeof f === "string") f = unescape(f), f = serialize_5(normalizeComponentEncoding_2(parse_5(f, z), !0), {
        ...z,
        skipEscape: !0
      });else if (typeof f === "object") f = serialize_5(normalizeComponentEncoding_2(f, !0), {
        ...z,
        skipEscape: !0
      });
      return g.toLowerCase() === f.toLowerCase();
    }
    function serialize_5(g, f) {
      let z = {
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
        k = Object.assign({}, f),
        R = [],
        S = getSchemeHandler_2(k.scheme || z.scheme);
      if (S && S.serialize) S.serialize(z, k);
      if (z.path !== void 0) if (!k.skipEscape) {
        if (z.path = escape(z.path), z.scheme !== void 0) z.path = z.path.split("%3A").join(":");
      } else z.path = unescape(z.path);
      if (k.reference !== "suffix" && z.scheme) R.push(z.scheme, ":");
      let q = recomposeAuthority_2(z);
      if (q !== void 0) {
        if (k.reference !== "suffix") R.push("//");
        if (R.push(q), z.path && z.path[0] !== "/") R.push("/");
      }
      if (z.path !== void 0) {
        let L = z.path;
        if (!k.absolutePath && (!S || !S.absolutePath)) L = removeDotSegments_2(L);
        if (q === void 0 && L[0] === "/" && L[1] === "/") L = "/%2F" + L.slice(2);
        R.push(L);
      }
      if (z.query !== void 0) R.push("?", z.query);
      if (z.fragment !== void 0) R.push("#", z.fragment);
      return R.join("");
    }
    let b = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function parse_5(g, f) {
      let z = Object.assign({}, f),
        k = {
          scheme: void 0,
          userinfo: void 0,
          host: "",
          port: void 0,
          path: "",
          query: void 0,
          fragment: void 0
        },
        R = !1;
      if (z.reference === "suffix") if (z.scheme) g = z.scheme + ":" + g;else g = "//" + g;
      let S = g.match(b);
      if (S) {
        if (k.scheme = S[1], k.userinfo = S[3], k.host = S[4], k.port = parseInt(S[5], 10), k.path = S[6] || "", k.query = S[7], k.fragment = S[8], isNaN(k.port)) k.port = S[5];
        if (k.host) if (isIPv4_2(k.host) === !1) {
          let L = normalizeIPv6_2(k.host);
          k.host = L.host.toLowerCase(), R = L.isIPV6;
        } else R = !0;
        if (k.scheme === void 0 && k.userinfo === void 0 && k.host === void 0 && k.port === void 0 && k.query === void 0 && !k.path) k.reference = "same-document";else if (k.scheme === void 0) k.reference = "relative";else if (k.fragment === void 0) k.reference = "absolute";else k.reference = "uri";
        if (z.reference && z.reference !== "suffix" && z.reference !== k.reference) k.error = k.error || "URI is not a " + z.reference + " reference.";
        let q = getSchemeHandler_2(z.scheme || k.scheme);
        if (!z.unicodeSupport && (!q || !q.unicodeSupport)) {
          if (k.host && (z.domainHost || q && q.domainHost) && R === !1 && nonSimpleDomain_2(k.host)) try {
            k.host = URL.domainToASCII(k.host.toLowerCase());
          } catch (L) {
            k.error = k.error || "Host's domain name can not be converted to ASCII: " + L;
          }
        }
        if (!q || q && !q.skipNormalize) {
          if (g.indexOf("%") !== -1) {
            if (k.scheme !== void 0) k.scheme = unescape(k.scheme);
            if (k.host !== void 0) k.host = unescape(k.host);
          }
          if (k.path) k.path = escape(unescape(k.path));
          if (k.fragment) k.fragment = encodeURI(decodeURIComponent(k.fragment));
        }
        if (q && q.parse) q.parse(k, z);
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
  vu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = yu();
    t.code = 'require("ajv/dist/runtime/uri").default', e.default = t;
  }),
  ji = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = as();
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
    let s = _o(),
      a = os(),
      n = qi(),
      i = yo(),
      l = te(),
      c = go(),
      d = fo(),
      m = ne(),
      _ = gu(),
      E = vu(),
      P = (N, D) => new RegExp(N, D);
    P.code = "new RegExp";
    let y = ["removeAdditional", "useDefaults", "coerceTypes"],
      prefixes_2 = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]),
      p = {
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
    function f(N) {
      var D, H, w, O, A, G, Y, re, Q, ce, Te, I, V, x, X, Z, ee, me, _e, Re, ge, ue, Ne, ye, De;
      let strict = N.strict,
        Ve = (D = N.code) === null || D === void 0 ? void 0 : D.optimize,
        optimize = Ve === !0 || Ve === void 0 ? 1 : Ve || 0,
        regExp_2 = (w = (H = N.code) === null || H === void 0 ? void 0 : H.regExp) !== null && w !== void 0 ? w : P,
        uriResolver_2 = (O = N.uriResolver) !== null && O !== void 0 ? O : E.default;
      return {
        strictSchema: (G = (A = N.strictSchema) !== null && A !== void 0 ? A : strict) !== null && G !== void 0 ? G : !0,
        strictNumbers: (re = (Y = N.strictNumbers) !== null && Y !== void 0 ? Y : strict) !== null && re !== void 0 ? re : !0,
        strictTypes: (ce = (Q = N.strictTypes) !== null && Q !== void 0 ? Q : strict) !== null && ce !== void 0 ? ce : "log",
        strictTuples: (I = (Te = N.strictTuples) !== null && Te !== void 0 ? Te : strict) !== null && I !== void 0 ? I : "log",
        strictRequired: (x = (V = N.strictRequired) !== null && V !== void 0 ? V : strict) !== null && x !== void 0 ? x : !1,
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
        messages: (me = N.messages) !== null && me !== void 0 ? me : !0,
        inlineRefs: (_e = N.inlineRefs) !== null && _e !== void 0 ? _e : !0,
        schemaId: (Re = N.schemaId) !== null && Re !== void 0 ? Re : "$id",
        addUsedSchema: (ge = N.addUsedSchema) !== null && ge !== void 0 ? ge : !0,
        validateSchema: (ue = N.validateSchema) !== null && ue !== void 0 ? ue : !0,
        validateFormats: (Ne = N.validateFormats) !== null && Ne !== void 0 ? Ne : !0,
        unicodeRegExp: (ye = N.unicodeRegExp) !== null && ye !== void 0 ? ye : !0,
        int32range: (De = N.int32range) !== null && De !== void 0 ? De : !0,
        uriResolver: uriResolver_2
      };
    }
    var z = class {
      constructor(N = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set(), this._loading = {}, this._cache = new Map(), N = this.opts = {
          ...N,
          ...f(N)
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
        }), this.logger = F(N.logger);
        let validateFormats = N.validateFormats;
        if (N.validateFormats = !1, this.RULES = (0, n.getRules)(), k.call(this, p, N, "NOT SUPPORTED"), k.call(this, h, N, "DEPRECATED", "warn"), this._metaOpts = K.call(this), N.formats) q.call(this);
        if (this._addVocabularies(), this._addDefaultMetaSchema(), N.keywords) L.call(this, N.keywords);
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
        let H;
        if (typeof N == "string") {
          if (H = this.getSchema(N), !H) throw Error(`no schema with key or ref "${N}"`);
        } else H = this.compile(N);
        let w = H(D);
        if (!("$async" in H)) this.errors = H.errors;
        return w;
      }
      compile(N, D) {
        let H = this._addSchema(N, D);
        return H.validate || this._compileSchemaEnv(H);
      }
      compileAsync(N, D) {
        if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
        let {
          loadSchema: loadSchema
        } = this.opts;
        return w.call(this, N, D);
        async function w(Q, ce) {
          await O.call(this, Q.$schema);
          let Te = this._addSchema(Q, ce);
          return Te.validate || A.call(this, Te);
        }
        async function O($ref) {
          if ($ref && !this.getSchema($ref)) await w.call(this, {
            $ref: $ref
          }, !0);
        }
        async function A(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (error) {
            if (!(error instanceof a.default)) throw error;
            return G.call(this, error), await Y.call(this, error.missingSchema), A.call(this, Q);
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
      addSchema(N, D, H, w = this.opts.validateSchema) {
        if (Array.isArray(N)) {
          for (let A of N) this.addSchema(A, void 0, H, w);
          return this;
        }
        let O;
        if (typeof N === "object") {
          let {
            schemaId: schemaId_7
          } = this.opts;
          if (O = N[schemaId_7], O !== void 0 && typeof O != "string") throw Error(`schema ${schemaId_7} must be string`);
        }
        return D = (0, c.normalizeId)(D || O), this._checkUnique(D), this.schemas[D] = this._addSchema(N, H, D, w, !0), this;
      }
      addMetaSchema(N, D, H = this.opts.validateSchema) {
        return this.addSchema(N, D, !0, H), this;
      }
      validateSchema(N, D) {
        if (typeof N == "boolean") return !0;
        let H;
        if (H = N.$schema, H !== void 0 && typeof H != "string") throw Error("$schema must be a string");
        if (H = H || this.opts.defaultMeta || this.defaultMeta(), !H) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        let w = this.validate(H, N);
        if (!w && D) {
          let O = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(O);else throw Error(O);
        }
        return w;
      }
      getSchema(N) {
        let D;
        while (typeof (D = R.call(this, N)) == "string") N = D;
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
              let D = R.call(this, N);
              if (typeof D == "object") this._cache.delete(D.schema);
              return delete this.schemas[N], delete this.refs[N], this;
            }
          case "object":
            {
              let D = N;
              this._cache.delete(D);
              let H = N[this.opts.schemaId];
              if (H) H = (0, c.normalizeId)(H), delete this.schemas[H], delete this.refs[H];
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
        let H;
        if (typeof N == "string") {
          if (H = N, typeof D == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = H;
        } else if (typeof N == "object" && D === void 0) {
          if (D = N, H = D.keyword, Array.isArray(H) && !H.length) throw Error("addKeywords: keyword must be string or non-empty array");
        } else throw Error("invalid addKeywords parameters");
        if (B.call(this, H, D), !D) return (0, m.eachItem)(H, O => se.call(this, O)), this;
        ie.call(this, D);
        let w = {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        };
        return (0, m.eachItem)(H, w.type.length === 0 ? O => se.call(this, O, w) : O => w.type.forEach(item => se.call(this, O, w, item))), this;
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
        for (let H of RULES_2.rules) {
          let w = H.rules.findIndex(item => item.keyword === N);
          if (w >= 0) H.rules.splice(w, 1);
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
        let H = this.RULES.all;
        N = JSON.parse(JSON.stringify(N));
        for (let w of D) {
          let O = w.split("/").slice(1),
            A = N;
          for (let G of O) A = A[G];
          for (let G in H) {
            let Y = H[G];
            if (typeof Y != "object") continue;
            let {
                $data: $data_3
              } = Y.definition,
              Q = A[G];
            if ($data_3 && Q) A[G] = ae(Q);
          }
        }
        return N;
      }
      _removeAllSchemas(N, D) {
        for (let H in N) {
          let w = N[H];
          if (!D || D.test(H)) {
            if (typeof w == "string") delete N[H];else if (w && !w.meta) this._cache.delete(w.schema), delete N[H];
          }
        }
      }
      _addSchema(schema_25, meta_3, baseId_4, w = this.opts.validateSchema, O = this.opts.addUsedSchema) {
        let A,
          {
            schemaId: schemaId_9
          } = this.opts;
        if (typeof schema_25 == "object") A = schema_25[schemaId_9];else if (this.opts.jtd) throw Error("schema must be object");else if (typeof schema_25 != "boolean") throw Error("schema must be object or boolean");
        let Y = this._cache.get(schema_25);
        if (Y !== void 0) return Y;
        baseId_4 = (0, c.normalizeId)(A || baseId_4);
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
    z.ValidationError = s.default, z.MissingRefError = a.default, e.default = z;
    function k(N, D, H, w = "error") {
      for (let O in N) {
        let A = O;
        if (A in D) this.logger[w](`${H}: option ${O}. ${N[A]}`);
      }
    }
    function R(N) {
      return N = (0, c.normalizeId)(N), this.schemas[N] || this.refs[N];
    }
    function S() {
      let schemas = this.opts.schemas;
      if (!schemas) return;
      if (Array.isArray(schemas)) this.addSchema(schemas);else for (let D in schemas) this.addSchema(schemas[D], D);
    }
    function q() {
      for (let N in this.opts.formats) {
        let D = this.opts.formats[N];
        if (D) this.addFormat(N, D);
      }
    }
    function L(N) {
      if (Array.isArray(N)) {
        this.addVocabulary(N);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let D in N) {
        let H = N[D];
        if (!H.keyword) H.keyword = D;
        this.addKeyword(H);
      }
    }
    function K() {
      let N = {
        ...this.opts
      };
      for (let D of y) delete N[D];
      return N;
    }
    let j = {
      log() {},
      warn() {},
      error() {}
    };
    function F(N) {
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
    function le(N, D, H) {
      let w = N.rules.findIndex(item => item.keyword === H);
      if (w >= 0) N.rules.splice(w, 0, D);else N.rules.push(D), this.logger.warn(`rule ${H} is not defined`);
    }
    function ie(N) {
      let {
        metaSchema: metaSchema
      } = N;
      if (metaSchema === void 0) return;
      if (N.$data && this.opts.$data) metaSchema = ae(metaSchema);
      N.validateSchema = this.compile(metaSchema, !0);
    }
    let Se = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ae(N) {
      return {
        anyOf: [N, Se]
      };
    }
  });
var bu = J(e => {
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
  fn = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.callRef = e.getValidate = void 0;
    let t = os(),
      r = Ue(),
      s = te(),
      a = Le(),
      n = yo(),
      i = ne(),
      l = {
        keyword: "$ref",
        schemaType: "string",
        code(m) {
          let {
              gen: gen_39,
              schema: E,
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
              root: f
            } = schemaEnv_7;
          if ((E === "#" || E === "#/") && baseId_5 === f.baseId) return k();
          let z = n.resolveRef.call(self_7, f, baseId_5, E);
          if (z === void 0) throw new t.default(it_19.opts.uriResolver, baseId_5, E);
          if (z instanceof n.SchemaEnv) return R(z);
          return S(z);
          function k() {
            if (schemaEnv_7 === f) return d(m, validateName_7, schemaEnv_7, schemaEnv_7.$async);
            let q = gen_39.scopeValue("root", {
              ref: f
            });
            return d(m, s._`${q}.validate`, f, f.$async);
          }
          function R(q) {
            d(m, c(m, q), q, q.$async);
          }
          function S(q) {
            let topSchemaRef_6 = gen_39.scopeValue("schema", opts_19.code.source === !0 ? {
                ref: q,
                code: (0, s.stringify)(q)
              } : {
                ref: q
              }),
              K = gen_39.name("valid"),
              j = m.subschema({
                schema: q,
                dataTypes: [],
                schemaPath: s.nil,
                topSchemaRef: topSchemaRef_6,
                errSchemaPath: E
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
    function d(m, _, E, P) {
      let {
          gen: gen_41,
          it: it_20
        } = m,
        {
          allErrors: allErrors_5,
          schemaEnv: schemaEnv_8,
          opts: opts_20
        } = it_20,
        f = opts_20.passContext ? a.default.this : s.nil;
      if (P) z();else k();
      function z() {
        if (!schemaEnv_8.$async) throw Error("async schema referenced by sync schema");
        let q = gen_41.let("valid");
        gen_41.try(() => {
          if (gen_41.code(s._`await ${(0, r.callValidateCode)(m, _, f)}`), S(_), !allErrors_5) gen_41.assign(q, !0);
        }, L => {
          if (gen_41.if(s._`!(${L} instanceof ${it_20.ValidationError})`, () => gen_41.throw(L)), R(L), !allErrors_5) gen_41.assign(q, !1);
        }), m.ok(q);
      }
      function k() {
        m.result((0, r.callValidateCode)(m, _, f), () => S(_), () => R(_));
      }
      function R(q) {
        let L = s._`${q}.errors`;
        gen_41.assign(a.default.vErrors, s._`${a.default.vErrors} === null ? ${L} : ${a.default.vErrors}.concat(${L})`), gen_41.assign(a.default.errors, s._`${a.default.vErrors}.length`);
      }
      function S(q) {
        var L;
        if (!it_20.opts.unevaluated) return;
        let K = (L = E === null || E === void 0 ? void 0 : E.validate) === null || L === void 0 ? void 0 : L.evaluated;
        if (it_20.props !== !0) if (K && !K.dynamicProps) {
          if (K.props !== void 0) it_20.props = i.mergeEvaluated.props(gen_41, K.props, it_20.props);
        } else {
          let j = gen_41.var("props", s._`${q}.evaluated.props`);
          it_20.props = i.mergeEvaluated.props(gen_41, j, it_20.props, s.Name);
        }
        if (it_20.items !== !0) if (K && !K.dynamicItems) {
          if (K.items !== void 0) it_20.items = i.mergeEvaluated.items(gen_41, K.items, it_20.items);
        } else {
          let j = gen_41.var("items", s._`${q}.evaluated.items`);
          it_20.items = i.mergeEvaluated.items(gen_41, j, it_20.items, s.Name);
        }
      }
    }
    e.callRef = d, e.default = l;
  }),
  Ai = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = bu(),
      r = fn(),
      s = ["$schema", "$id", "$defs", "$vocabulary", {
        keyword: "$comment"
      }, "definitions", t.default, r.default];
    e.default = s;
  }),
  Ru = J(e => {
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
  zu = J(e => {
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
  wu = J(e => {
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
  $u = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = wu(),
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
  Eu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ue(),
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
            E = it_23.opts.unicodeRegExp ? "u" : "";
          if ($data_4) {
            let {
                regExp: regExp_3
              } = it_23.opts.code,
              y = regExp_3.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(gen_43, regExp_3),
              b = gen_43.let("valid");
            gen_43.try(() => gen_43.assign(b, s._`${y}(${schemaCode_16}, ${E}).test(${data_19})`), () => gen_43.assign(b, !1)), n.fail$data(s._`!${b}`);
          } else {
            let P = (0, t.usePattern)(n, schema_26);
            n.fail$data(s._`!${P}.test(${data_19})`);
          }
        }
      };
    e.default = a;
  }),
  Pu = J(e => {
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
  Tu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ue(),
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
          let P = schema_27.length >= opts_21.loopRequired;
          if (it_24.allErrors) y();else b();
          if (opts_21.strictRequired) {
            let properties_3 = n.parentSchema.properties,
              {
                definedProperties: definedProperties
              } = n.it;
            for (let z of schema_27) if ((properties_3 === null || properties_3 === void 0 ? void 0 : properties_3[z]) === void 0 && !definedProperties.has(z)) {
              let k = `required property "${z}" is not defined at "${it_24.schemaEnv.baseId + it_24.errSchemaPath}" (strictRequired)`;
              (0, s.checkStrictMode)(it_24, k, it_24.opts.strictRequired);
            }
          }
          function y() {
            if (P || $data_5) n.block$data(r.nil, p);else for (let g of schema_27) (0, t.checkReportMissingProp)(n, g);
          }
          function b() {
            let g = gen_44.let("missing");
            if (P || $data_5) {
              let f = gen_44.let("valid", !0);
              n.block$data(f, () => h(g, f)), n.ok(f);
            } else gen_44.if((0, t.checkMissingProp)(n, schema_27, g)), (0, t.reportMissingProp)(n, g), gen_44.else();
          }
          function p() {
            gen_44.forOf("prop", schemaCode_20, missingProperty_4 => {
              n.setParams({
                missingProperty: missingProperty_4
              }), gen_44.if((0, t.noPropertyInData)(gen_44, data_21, missingProperty_4, opts_21.ownProperties), () => n.error());
            });
          }
          function h(missingProperty_5, f) {
            n.setParams({
              missingProperty: missingProperty_5
            }), gen_44.forOf(missingProperty_5, schemaCode_20, () => {
              gen_44.assign(f, (0, t.propertyInData)(gen_44, data_21, missingProperty_5, opts_21.ownProperties)), gen_44.if((0, r.not)(f), () => {
                n.error(), gen_44.break();
              });
            }, r.nil);
          }
        }
      };
    e.default = a;
  }),
  Cu = J(e => {
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
  Sn = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Oi();
    t.code = 'require("ajv/dist/runtime/equal").default', e.default = t;
  }),
  ku = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = fo(),
      r = te(),
      s = ne(),
      a = Sn(),
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
          let y = gen_45.let("valid"),
            b = parentSchema_4.items ? (0, t.getSchemaTypes)(parentSchema_4.items) : [];
          i.block$data(y, p, r._`${schemaCode_24} === false`), i.ok(y);
          function p() {
            let i_2 = gen_45.let("i", r._`${data_23}.length`),
              j_4 = gen_45.let("j");
            i.setParams({
              i: i_2,
              j: j_4
            }), gen_45.assign(y, !0), gen_45.if(r._`${i_2} > 1`, () => (h() ? g : f)(i_2, j_4));
          }
          function h() {
            return b.length > 0 && !b.some(item => item === "object" || item === "array");
          }
          function g(z, k) {
            let R = gen_45.name("item"),
              S = (0, t.checkDataTypes)(b, R, it_25.opts.strictNumbers, t.DataType.Wrong),
              q = gen_45.const("indices", r._`{}`);
            gen_45.for(r._`;${z}--;`, () => {
              if (gen_45.let(R, r._`${data_23}[${z}]`), gen_45.if(S, r._`continue`), b.length > 1) gen_45.if(r._`typeof ${R} == "string"`, r._`${R} += "_"`);
              gen_45.if(r._`typeof ${q}[${R}] == "number"`, () => {
                gen_45.assign(k, r._`${q}[${R}]`), i.error(), gen_45.assign(y, !1).break();
              }).code(r._`${q}[${R}] = ${z}`);
            });
          }
          function f(z, k) {
            let R = (0, s.useFunc)(gen_45, a.default),
              S = gen_45.name("outer");
            gen_45.label(S).for(r._`;${z}--;`, () => gen_45.for(r._`${k} = ${z}; ${k}--;`, () => gen_45.if(r._`${R}(${data_23}[${z}], ${data_23}[${k}])`, () => {
              i.error(), gen_45.assign(y, !1).break(S);
            })));
          }
        }
      };
    e.default = n;
  }),
  qu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = Sn(),
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
  Iu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = Sn(),
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
          let E = schema_30.length >= it_26.opts.loopEnum,
            P,
            y = () => P !== null && P !== void 0 ? P : P = (0, r.useFunc)(gen_47, s.default),
            b;
          if (E || $data_8) b = gen_47.let("valid"), n.block$data(b, p);else {
            if (!Array.isArray(schema_30)) throw Error("ajv implementation error");
            let g = gen_47.const("vSchema", schemaCode_28);
            b = (0, t.or)(...schema_30.map((item, index) => h(g, index)));
          }
          n.pass(b);
          function p() {
            gen_47.assign(b, !1), gen_47.forOf("v", schemaCode_28, g => gen_47.if(t._`${y()}(${data_25}, ${g})`, () => gen_47.assign(b, !0).break()));
          }
          function h(g, f) {
            let z = schema_30[f];
            return typeof z === "object" && z !== null ? t._`${y()}(${data_25}, ${g}[${f}])` : t._`${data_25} === ${z}`;
          }
        }
      };
    e.default = a;
  }),
  Li = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ru(),
      r = zu(),
      s = $u(),
      a = Eu(),
      n = Pu(),
      i = Tu(),
      l = Cu(),
      c = ku(),
      d = qu(),
      m = Iu(),
      _ = [t.default, r.default, s.default, a.default, n.default, i.default, l.default, c.default, {
        keyword: "type",
        schemaType: ["string", "array"]
      }, {
        keyword: "nullable",
        schemaType: "boolean"
      }, d.default, m.default];
    e.default = _;
  }),
  Ui = J(e => {
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
      let E = gen_48.const("len", t._`${data_26}.length`);
      if (schema_31 === !1) n.setParams({
        len: i.length
      }), n.pass(t._`${E} <= ${i.length}`);else if (typeof schema_31 == "object" && !(0, r.alwaysValidSchema)(it_28, schema_31)) {
        let y = gen_48.var("valid", t._`${E} <= ${i.length}`);
        gen_48.if((0, t.not)(y), () => P(y)), n.ok(y);
      }
      function P(y) {
        gen_48.forRange("i", i.length, E, dataProp_3 => {
          if (n.subschema({
            keyword: keyword_21,
            dataProp: dataProp_3,
            dataPropType: r.Type.Num
          }, y), !it_28.allErrors) gen_48.if((0, t.not)(y), () => gen_48.break());
        });
      }
    }
    e.validateAdditionalItems = a, e.default = s;
  }),
  Di = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateTuple = void 0;
    let t = te(),
      r = ne(),
      s = Ue(),
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
      if (p(parentSchema_6), it_30.opts.unevaluated && c.length && it_30.items !== !0) it_30.items = r.mergeEvaluated.items(gen_49, c.length, it_30.items);
      let y = gen_49.name("valid"),
        b = gen_49.const("len", t._`${data_27}.length`);
      c.forEach((item, g) => {
        if ((0, r.alwaysValidSchema)(it_30, item)) return;
        gen_49.if(t._`${b} > ${g}`, () => i.subschema({
          keyword: keyword_22,
          schemaProp: g,
          dataProp: g
        }, y)), i.ok(y);
      });
      function p(h) {
        let {
            opts: opts_22,
            errSchemaPath: errSchemaPath_6
          } = it_30,
          z = c.length,
          k = z === h.minItems && (z === h.maxItems || h[l] === !1);
        if (opts_22.strictTuples && !k) {
          let R = `"${keyword_22}" is ${z}-tuple, but minItems or maxItems/${l} are not specified or different at path "${errSchemaPath_6}"`;
          (0, r.checkStrictMode)(it_30, R, opts_22.strictTuples);
        }
      }
    }
    e.validateTuple = n, e.default = a;
  }),
  Ou = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Di(),
      r = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: s => (0, t.validateTuple)(s, "items")
      };
    e.default = r;
  }),
  Nu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = Ue(),
      a = Ui(),
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
  Mu = J(e => {
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
          let y = gen_50.const("len", t._`${data_28}.length`);
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
            let f = t._`${y} >= ${min_3}`;
            if (max_3 !== void 0) f = t._`${f} && ${y} <= ${max_3}`;
            a.pass(f);
            return;
          }
          it_32.items = !0;
          let b = gen_50.name("valid");
          if (max_3 === void 0 && min_3 === 1) h(b, () => gen_50.if(b, () => gen_50.break()));else if (min_3 === 0) {
            if (gen_50.let(b, !0), max_3 !== void 0) gen_50.if(t._`${data_28}.length > 0`, p);
          } else gen_50.let(b, !1), p();
          a.result(b, () => a.reset());
          function p() {
            let f = gen_50.name("_valid"),
              z = gen_50.let("count", 0);
            h(f, () => gen_50.if(f, () => g(z)));
          }
          function h(f, z) {
            gen_50.forRange("i", 0, y, dataProp_4 => {
              a.subschema({
                keyword: "contains",
                dataProp: dataProp_4,
                dataPropType: r.Type.Num,
                compositeRule: !0
              }, f), z();
            });
          }
          function g(f) {
            if (gen_50.code(t._`${f}++`), max_3 === void 0) gen_50.if(t._`${f} >= ${min_3}`, () => gen_50.assign(b, !0).break());else if (gen_50.if(t._`${f} > ${max_3}`, () => gen_50.assign(b, !1).break()), min_3 === 1) gen_50.assign(b, !0);else gen_50.if(t._`${f} >= ${min_3}`, () => gen_50.assign(b, !0));
          }
        }
      };
    e.default = s;
  }),
  gn = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    let t = te(),
      r = ne(),
      s = Ue();
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
        let E = Array.isArray(schema_35[_]) ? d : m;
        E[_] = schema_35[_];
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
      let P = gen_51.let("missing");
      for (let property_4 in d) {
        let b = d[property_4];
        if (b.length === 0) continue;
        let p = (0, s.propertyInData)(gen_51, data_29, property_4, it_33.opts.ownProperties);
        if (c.setParams({
          property: property_4,
          depsCount: b.length,
          deps: b.join(", ")
        }), it_33.allErrors) gen_51.if(p, () => {
          for (let h of b) (0, s.checkReportMissingProp)(c, h);
        });else gen_51.if(t._`${p} && (${(0, s.checkMissingProp)(c, b, P)})`), (0, s.reportMissingProp)(c, P), gen_51.else();
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
        y = gen_52.name("valid");
      for (let schemaProp_2 in d) {
        if ((0, r.alwaysValidSchema)(it_34, d[schemaProp_2])) continue;
        gen_52.if((0, s.propertyInData)(gen_52, data_30, schemaProp_2, it_34.opts.ownProperties), () => {
          let p = c.subschema({
            keyword: keyword_23,
            schemaProp: schemaProp_2
          }, y);
          c.mergeValidEvaluated(p, y);
        }, () => gen_52.var(y, !0)), c.ok(y);
      }
    }
    e.validateSchemaDeps = l, e.default = a;
  }),
  ju = J(e => {
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
            params: params_25
          }) => t._`{propertyName: ${params_25.propertyName}}`
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
  Vi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ue(),
      r = te(),
      s = Le(),
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
            params: params_26
          }) => r._`{additionalProperty: ${params_26.additionalProperty}}`
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
          let b = (0, t.allSchemaProperties)(parentSchema_9.properties),
            p = (0, t.allSchemaProperties)(parentSchema_9.patternProperties);
          h(), i.ok(r._`${errsCount_2} === ${s.default.errors}`);
          function h() {
            gen_54.forIn("key", data_32, R => {
              if (!b.length && !p.length) z(R);else gen_54.if(g(R), () => z(R));
            });
          }
          function g(R) {
            let S;
            if (b.length > 8) {
              let q = (0, a.schemaRefOrVal)(it_36, parentSchema_9.properties, "properties");
              S = (0, t.isOwnProperty)(gen_54, q, R);
            } else if (b.length) S = (0, r.or)(...b.map(item => r._`${R} === ${item}`));else S = r.nil;
            if (p.length) S = (0, r.or)(S, ...p.map(item => r._`${(0, t.usePattern)(i, item)}.test(${R})`));
            return (0, r.not)(S);
          }
          function f(R) {
            gen_54.code(r._`delete ${data_32}[${R}]`);
          }
          function z(additionalProperty) {
            if (opts_23.removeAdditional === "all" || opts_23.removeAdditional && schema_37 === !1) {
              f(additionalProperty);
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
                i.reset(), f(additionalProperty);
              });else if (k(additionalProperty, S), !allErrors_6) gen_54.if((0, r.not)(S), () => gen_54.break());
            }
          }
          function k(dataProp_5, S, q) {
            let L = {
              keyword: "additionalProperties",
              dataProp: dataProp_5,
              dataPropType: a.Type.Str
            };
            if (q === !1) Object.assign(L, {
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1
            });
            i.subschema(L, S);
          }
        }
      };
    e.default = n;
  }),
  Au = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = as(),
      r = Ue(),
      s = ne(),
      a = Vi(),
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
          let E = (0, r.allSchemaProperties)(schema_38);
          for (let h of E) it_37.definedProperties.add(h);
          if (it_37.opts.unevaluated && E.length && it_37.props !== !0) it_37.props = s.mergeEvaluated.props(gen_55, (0, s.toHash)(E), it_37.props);
          let P = E.filter(item => !(0, s.alwaysValidSchema)(it_37, schema_38[item]));
          if (P.length === 0) return;
          let y = gen_55.name("valid");
          for (let h of P) {
            if (b(h)) p(h);else {
              if (gen_55.if((0, r.propertyInData)(gen_55, data_33, h, it_37.opts.ownProperties)), p(h), !it_37.allErrors) gen_55.else().var(y, !0);
              gen_55.endIf();
            }
            i.it.definedProperties.add(h), i.ok(y);
          }
          function b(h) {
            return it_37.opts.useDefaults && !it_37.compositeRule && schema_38[h].default !== void 0;
          }
          function p(h) {
            i.subschema({
              keyword: "properties",
              schemaProp: h,
              dataProp: h
            }, y);
          }
        }
      };
    e.default = n;
  }),
  Lu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ue(),
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
            P = (0, t.allSchemaProperties)(schema_39),
            y = P.filter(item => (0, s.alwaysValidSchema)(it_38, schema_39[item]));
          if (P.length === 0 || y.length === P.length && (!it_38.opts.unevaluated || it_38.props === !0)) return;
          let b = opts_24.strictSchema && !opts_24.allowMatchingProperties && parentSchema_11.properties,
            p = gen_56.name("valid");
          if (it_38.props !== !0 && !(it_38.props instanceof r.Name)) it_38.props = (0, a.evaluatedPropsToName)(gen_56, it_38.props);
          let {
            props: props_3
          } = it_38;
          g();
          function g() {
            for (let k of P) {
              if (b) f(k);
              if (it_38.allErrors) z(k);else gen_56.var(p, !0), z(k), gen_56.if(p);
            }
          }
          function f(k) {
            for (let R in b) if (new RegExp(k).test(R)) (0, s.checkStrictMode)(it_38, `property ${R} matches pattern ${k} (use allowMatchingProperties)`);
          }
          function z(schemaProp_3) {
            gen_56.forIn("key", data_34, dataProp_6 => {
              gen_56.if(r._`${(0, t.usePattern)(i, schemaProp_3)}.test(${dataProp_6})`, () => {
                let S = y.includes(schemaProp_3);
                if (!S) i.subschema({
                  keyword: "patternProperties",
                  schemaProp: schemaProp_3,
                  dataProp: dataProp_6,
                  dataPropType: a.Type.Str
                }, p);
                if (it_38.opts.unevaluated && props_3 !== !0) gen_56.assign(r._`${props_3}[${dataProp_6}]`, !0);else if (!S && !it_38.allErrors) gen_56.if((0, r.not)(p), () => gen_56.break());
              });
            });
          }
        }
      };
    e.default = n;
  }),
  Uu = J(e => {
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
  Du = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Ue().validateUnion,
      error: {
        message: "must match a schema in anyOf"
      }
    };
    e.default = t;
  }),
  Vu = J(e => {
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
            params: params_27
          }) => t._`{passingSchemas: ${params_27.passing}}`
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
            E = gen_58.name("_valid");
          a.setParams({
            passing: passing
          }), gen_58.block(P), a.result(m, () => a.reset(), () => a.error(!0));
          function P() {
            d.forEach((item, b) => {
              let p;
              if ((0, r.alwaysValidSchema)(it_40, item)) gen_58.var(E, !0);else p = a.subschema({
                keyword: "oneOf",
                schemaProp: b,
                compositeRule: !0
              }, E);
              if (b > 0) gen_58.if(t._`${E} && ${m}`).assign(m, !1).assign(passing, t._`[${passing}, ${b}]`).else();
              gen_58.if(E, () => {
                if (gen_58.assign(m, !0), gen_58.assign(passing, b), p) a.mergeEvaluated(p, t.Name);
              });
            });
          }
        }
      };
    e.default = s;
  }),
  xu = J(e => {
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
  Fu = J(e => {
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
            params: params_28
          }) => t.str`must match "${params_28.ifClause}" schema`,
          params: ({
            params: params_29
          }) => t._`{failingKeyword: ${params_29.ifClause}}`
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
            E = gen_60.name("_valid");
          if (P(), n.reset(), d && m) {
            let ifClause = gen_60.let("ifClause");
            n.setParams({
              ifClause: ifClause
            }), gen_60.if(E, y("then", ifClause), y("else", ifClause));
          } else if (d) gen_60.if(E, y("then"));else gen_60.if((0, t.not)(E), y("else"));
          n.pass(_, () => n.error(!0));
          function P() {
            let b = n.subschema({
              keyword: "if",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1
            }, E);
            n.mergeEvaluated(b);
          }
          function y(b, p) {
            return () => {
              let h = n.subschema({
                keyword: b
              }, E);
              if (gen_60.assign(_, E), n.mergeValidEvaluated(h, _), p) gen_60.assign(p, t._`${b}`);else n.setParams({
                ifClause: b
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
  Hu = J(e => {
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
  xi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ui(),
      r = Ou(),
      s = Di(),
      a = Nu(),
      n = Mu(),
      i = gn(),
      l = ju(),
      c = Vi(),
      d = Au(),
      m = Lu(),
      _ = Uu(),
      E = Du(),
      P = Vu(),
      y = xu(),
      b = Fu(),
      p = Hu();
    function h(g = !1) {
      let f = [_.default, E.default, P.default, y.default, b.default, p.default, l.default, c.default, i.default, d.default, m.default];
      if (g) f.push(r.default, a.default);else f.push(t.default, s.default);
      return f.push(n.default), f;
    }
    e.default = h;
  }),
  Ku = J(e => {
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
          if ($data_9) b();else p();
          function b() {
            let h = gen_61.scopeValue("formats", {
                ref: self_8.formats,
                code: opts_25.code.formats
              }),
              g = gen_61.const("fDef", t._`${h}[${schemaCode_31}]`),
              f = gen_61.let("fType"),
              z = gen_61.let("format");
            gen_61.if(t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => gen_61.assign(f, t._`${g}.type || "string"`).assign(z, t._`${g}.validate`), () => gen_61.assign(f, t._`"string"`).assign(z, g)), s.fail$data((0, t.or)(k(), R()));
            function k() {
              if (opts_25.strictSchema === !1) return t.nil;
              return t._`${schemaCode_31} && !${z}`;
            }
            function R() {
              let S = schemaEnv_9.$async ? t._`(${g}.async ? await ${z}(${data_35}) : ${z}(${data_35}))` : t._`${z}(${data_35})`,
                q = t._`(typeof ${z} == "function" ? ${S} : ${z}.test(${data_35}))`;
              return t._`${z} && ${z} !== true && ${f} === ${a} && !${q}`;
            }
          }
          function p() {
            let h = self_8.formats[c];
            if (!h) {
              k();
              return;
            }
            if (h === !0) return;
            let [g, f, z] = R(h);
            if (g === a) s.pass(S());
            function k() {
              if (opts_25.strictSchema === !1) {
                self_8.logger.warn(q());
                return;
              }
              throw Error(q());
              function q() {
                return `unknown format "${c}" ignored in schema at path "${errSchemaPath_7}"`;
              }
            }
            function R(ref_6) {
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
                return t._`await ${z}(${data_35})`;
              }
              return typeof f == "function" ? t._`${z}(${data_35})` : t._`${z}.test(${data_35})`;
            }
          }
        }
      };
    e.default = r;
  }),
  Fi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = [Ku().default];
    e.default = t;
  }),
  Hi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"], e.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
  }),
  Ju = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ai(),
      r = Li(),
      s = xi(),
      a = Fi(),
      n = Hi(),
      i = [t.default, r.default, (0, s.default)(), a.default, n.metadataVocabulary, n.contentVocabulary];
    e.default = i;
  }),
  Gu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.DiscrError = void 0;
    var t;
    (function (r) {
      r.Tag = "tag", r.Mapping = "mapping";
    })(t || (e.DiscrError = t = {}));
  }),
  Ki = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = Gu(),
      s = yo(),
      a = os(),
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
          let y = schema_43.propertyName;
          if (typeof y != "string") throw Error("discriminator: requires propertyName");
          if (schema_43.mapping) throw Error("discriminator: mapping is not supported");
          if (!oneOf) throw Error("discriminator: requires oneOf keyword");
          let b = gen_62.let("valid", !1),
            tag_2 = gen_62.const("tag", t._`${data_36}${(0, t.getProperty)(y)}`);
          gen_62.if(t._`typeof ${tag_2} == "string"`, () => h(), () => l.error(!1, {
            discrError: r.DiscrError.Tag,
            tag: tag_2,
            tagName: y
          })), l.ok(b);
          function h() {
            let z = f();
            gen_62.if(!1);
            for (let k in z) gen_62.elseIf(t._`${tag_2} === ${k}`), gen_62.assign(b, g(z[k]));
            gen_62.else(), l.error(!1, {
              discrError: r.DiscrError.Mapping,
              tag: tag_2,
              tagName: y
            }), gen_62.endIf();
          }
          function g(schemaProp_4) {
            let k = gen_62.name("valid"),
              R = l.subschema({
                keyword: "oneOf",
                schemaProp: schemaProp_4
              }, k);
            return l.mergeEvaluated(R, t.Name), k;
          }
          function f() {
            var z;
            let k = {},
              R = q(parentSchema_15),
              S = !0;
            for (let j = 0; j < oneOf.length; j++) {
              let F = oneOf[j];
              if ((F === null || F === void 0 ? void 0 : F.$ref) && !(0, n.schemaHasRulesButRef)(F, it_45.self.RULES)) {
                let $ref_2 = F.$ref;
                if (F = s.resolveRef.call(it_45.self, it_45.schemaEnv.root, it_45.baseId, $ref_2), F instanceof s.SchemaEnv) F = F.schema;
                if (F === void 0) throw new a.default(it_45.opts.uriResolver, it_45.baseId, $ref_2);
              }
              let W = (z = F === null || F === void 0 ? void 0 : F.properties) === null || z === void 0 ? void 0 : z[y];
              if (typeof W != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
              S = S && (R || q(F)), L(W, j);
            }
            if (!S) throw Error(`discriminator: "${y}" must be required`);
            return k;
            function q({
              required: required
            }) {
              return Array.isArray(required) && required.includes(y);
            }
            function L(j, F) {
              if (j.const) K(j.const, F);else if (j.enum) for (let W of j.enum) K(W, F);else throw Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
            }
            function K(j, F) {
              if (typeof j != "string" || j in k) throw Error(`discriminator: "${y}" values must be unique strings`);
              k[j] = F;
            }
          }
        }
      };
    e.default = i;
  }),
  Bu = J((e, t) => {
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
  Ji = J((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
    let r = ji(),
      s = Ju(),
      a = Ki(),
      n = Bu(),
      i = ["/properties"],
      l = "http://json-schema.org/draft-07/schema";
    var c = class extends r.default {
      _addVocabularies() {
        if (super._addVocabularies(), s.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        let P = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
        this.addMetaSchema(P, l, !1), this.refs["http://json-schema.org/schema"] = l;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
      }
    };
    e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = c;
    var d = as();
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
    var _ = _o();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
    var E = os();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return E.default;
      }
    });
  }),
  Gi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dynamicAnchor = void 0;
    let t = te(),
      r = Le(),
      s = yo(),
      a = fn(),
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
      let E = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`,
        P = it_46.errSchemaPath === "#" ? it_46.validateName : l(c);
      gen_63.if(t._`!${E}`, () => gen_63.assign(E, P));
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
  Bi = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dynamicRef = void 0;
    let t = te(),
      r = Le(),
      s = fn(),
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
      if (it_47.allErrors) E();else {
        let y = gen_64.let("valid", !1);
        E(y), i.ok(y);
      }
      function E(y) {
        if (it_47.schemaEnv.root.dynamicAnchors[_]) {
          let b = gen_64.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
          gen_64.if(b, P(b, y), P(it_47.validateName, y));
        } else P(it_47.validateName, y)();
      }
      function P(y, b) {
        return b ? () => gen_64.block(() => {
          (0, s.callRef)(i, y), gen_64.let(b, !0);
        }) : () => (0, s.callRef)(i, y);
      }
    }
    e.dynamicRef = n, e.default = a;
  }),
  Wu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Gi(),
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
  Yu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Bi(),
      r = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: s => (0, t.dynamicRef)(s, s.schema)
      };
    e.default = r;
  }),
  Xu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Gi(),
      r = Bi(),
      s = Wu(),
      a = Yu(),
      n = [t.default, r.default, s.default, a.default];
    e.default = n;
  }),
  Zu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = gn(),
      r = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: t.error,
        code: s => (0, t.validatePropertyDeps)(s)
      };
    e.default = r;
  }),
  Qu = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = gn(),
      r = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: s => (0, t.validateSchemaDeps)(s)
      };
    e.default = r;
  }),
  td = J(e => {
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
  rd = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Zu(),
      r = Qu(),
      s = td(),
      a = [t.default, r.default, s.default];
    e.default = a;
  }),
  sd = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = te(),
      r = ne(),
      s = Le(),
      a = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: ["boolean", "object"],
        trackErrors: !0,
        error: {
          message: "must NOT have unevaluated properties",
          params: ({
            params: params_30
          }) => t._`{unevaluatedProperty: ${params_30.unevaluatedProperty}}`
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
          if (props_4 instanceof t.Name) gen_65.if(t._`${props_4} !== true`, () => gen_65.forIn("key", data_37, p => gen_65.if(y(props_4, p), () => P(p))));else if (props_4 !== !0) gen_65.forIn("key", data_37, p => props_4 === void 0 ? P(p) : gen_65.if(b(props_4, p), () => P(p)));
          it_49.props = !0, n.ok(t._`${errsCount_3} === ${s.default.errors}`);
          function P(p) {
            if (schema_45 === !1) {
              if (n.setParams({
                unevaluatedProperty: p
              }), n.error(), !allErrors_7) gen_65.break();
              return;
            }
            if (!(0, r.alwaysValidSchema)(it_49, schema_45)) {
              let h = gen_65.name("valid");
              if (n.subschema({
                keyword: "unevaluatedProperties",
                dataProp: p,
                dataPropType: r.Type.Str
              }, h), !allErrors_7) gen_65.if((0, t.not)(h), () => gen_65.break());
            }
          }
          function y(p, h) {
            return t._`!${p} || !${p}[${h}]`;
          }
          function b(p, h) {
            let g = [];
            for (let f in p) if (p[f] === !0) g.push(t._`${h} !== ${f}`);
            return (0, t.and)(...g);
          }
        }
      };
    e.default = a;
  }),
  ad = J(e => {
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
            let E = gen_66.var("valid", t._`${m} <= ${len_7}`);
            gen_66.if((0, t.not)(E), () => _(E, len_7)), a.ok(E);
          }
          it_50.items = !0;
          function _(E, P) {
            gen_66.forRange("i", P, m, dataProp_7 => {
              if (a.subschema({
                keyword: "unevaluatedItems",
                dataProp: dataProp_7,
                dataPropType: r.Type.Num
              }, E), !it_50.allErrors) gen_66.if((0, t.not)(E), () => gen_66.break());
            });
          }
        }
      };
    e.default = s;
  }),
  od = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = sd(),
      r = ad(),
      s = [t.default, r.default];
    e.default = s;
  }),
  nd = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ai(),
      r = Li(),
      s = xi(),
      a = Xu(),
      n = rd(),
      i = od(),
      l = Fi(),
      c = Hi(),
      d = [a.default, t.default, r.default, (0, s.default)(!0), l.default, c.metadataVocabulary, c.contentVocabulary, n.default, i.default];
    e.default = d;
  }),
  id = J((e, t) => {
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
  cd = J((e, t) => {
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
  ld = J((e, t) => {
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
  ud = J((e, t) => {
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
  dd = J((e, t) => {
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
  hd = J((e, t) => {
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
  md = J((e, t) => {
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
  pd = J((e, t) => {
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
  fd = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = id(),
      r = cd(),
      s = ld(),
      a = ud(),
      n = dd(),
      i = hd(),
      l = md(),
      c = pd(),
      d = ["/properties"];
    function m(_) {
      return [t, r, s, a, n, E(this, i), l, E(this, c)].forEach(item => this.addMetaSchema(item, void 0, !1)), this;
      function E(P, y) {
        return _ ? P.$dataMetaSchema(y, d) : y;
      }
    }
    e.default = m;
  }),
  Sd = J((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
    let r = ji(),
      s = nd(),
      a = Ki(),
      n = fd(),
      i = "https://json-schema.org/draft/2020-12/schema";
    var l = class extends r.default {
      constructor(E = {}) {
        super({
          ...E,
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
    var c = as();
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
    var m = _o();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return m.default;
      }
    });
    var _ = os();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
  }),
  gd = J(e => {
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
      "date-time": t(E(!0), P),
      "iso-time": t(c(), m),
      "iso-date-time": t(E(), y),
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
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, P),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, y),
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
      let F = s.exec(j);
      if (!F) return !1;
      let W = +F[1],
        B = +F[2],
        se = +F[3];
      return B >= 1 && B <= 12 && se >= 1 && se <= (B === 2 && r(W) ? 29 : a[B]);
    }
    function i(j, F) {
      if (!(j && F)) return;
      if (j > F) return 1;
      if (j < F) return -1;
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
          Se = B[4],
          ae = B[5] === "-" ? -1 : 1,
          N = +(B[6] || 0),
          D = +(B[7] || 0);
        if (N > 23 || D > 59 || j && !Se) return !1;
        if (se <= 23 && le <= 59 && ie < 60) return !0;
        let H = le - D * ae,
          w = se - N * ae - (H < 0 ? 1 : 0);
        return (w === 23 || w === -1) && (H === 59 || H === -1) && ie < 61;
      };
    }
    function d(j, F) {
      if (!(j && F)) return;
      let W = new Date("2020-01-01T" + j).valueOf(),
        B = new Date("2020-01-01T" + F).valueOf();
      if (!(W && B)) return;
      return W - B;
    }
    function m(j, F) {
      if (!(j && F)) return;
      let W = l.exec(j),
        B = l.exec(F);
      if (!(W && B)) return;
      if (j = W[1] + W[2] + W[3], F = B[1] + B[2] + B[3], j > F) return 1;
      if (j < F) return -1;
      return 0;
    }
    let _ = /t|\s/i;
    function E(j) {
      let F = c(j);
      return function (B) {
        let se = B.split(_);
        return se.length === 2 && n(se[0]) && F(se[1]);
      };
    }
    function P(j, F) {
      if (!(j && F)) return;
      let W = new Date(j).valueOf(),
        B = new Date(F).valueOf();
      if (!(W && B)) return;
      return W - B;
    }
    function y(j, F) {
      if (!(j && F)) return;
      let [W, B] = j.split(_),
        [se, le] = F.split(_),
        ie = i(W, se);
      if (ie === void 0) return;
      return ie || d(B, le);
    }
    let b = /\/|:/,
      p = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri_2(j) {
      return b.test(j) && p.test(j);
    }
    let g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(j) {
      return g.lastIndex = 0, g.test(j);
    }
    let z = -2147483648,
      k = 2147483647;
    function validate_2(j) {
      return Number.isInteger(j) && j <= k && j >= z;
    }
    function validate_3(j) {
      return Number.isInteger(j);
    }
    function validate_4() {
      return !0;
    }
    let L = /[^\\]\\Z/;
    function regex(j) {
      if (L.test(j)) return !1;
      try {
        return new RegExp(j), !0;
      } catch (error) {
        return !1;
      }
    }
  }),
  _d = J(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.formatLimitDefinition = void 0;
    let t = Ji(),
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
        let b = new t.KeywordCxt(it_51, self_10.RULES.all.format.definition, "format");
        if (b.$data) p();else h();
        function p() {
          let f = gen_67.scopeValue("formats", {
              ref: self_10.formats,
              code: opts_26.code.formats
            }),
            z = gen_67.const("fmt", r._`${f}[${b.schemaCode}]`);
          l.fail$data((0, r.or)(r._`typeof ${z} != "object"`, r._`${z} instanceof RegExp`, r._`typeof ${z}.compare != "function"`, g(z)));
        }
        function h() {
          let f = b.schema,
            ref_7 = self_10.formats[f];
          if (!ref_7 || ref_7 === !0) return;
          if (typeof ref_7 != "object" || ref_7 instanceof RegExp || typeof ref_7.compare != "function") throw Error(`"${keyword_29}": format "${f}" does not define "compare" function`);
          let k = gen_67.scopeValue("formats", {
            key: f,
            ref: ref_7,
            code: opts_26.code.formats ? r._`${opts_26.code.formats}${(0, r.getProperty)(f)}` : void 0
          });
          l.fail$data(g(k));
        }
        function g(f) {
          return r._`${f}.compare(${data_39}, ${schemaCode_34}) ${a[keyword_29].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    let i = l => (l.addKeyword(e.formatLimitDefinition), l);
    e.default = i;
  }),
  yd = J((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let r = gd(),
      s = _d(),
      a = te(),
      n = new a.Name("fullFormats"),
      i = new a.Name("fastFormats"),
      l = (d, m = {
        keywords: !0
      }) => {
        if (Array.isArray(m)) return c(d, m, r.fullFormats, n), d;
        let [_, E] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
        if (c(d, m.formats || r.formatNames, _, E), m.keywords) (0, s.default)(d);
        return d;
      };
    l.get = (d, m = "full") => {
      let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!_) throw Error(`Unknown format "${d}"`);
      return _;
    };
    function c(d, m, _, E) {
      var P, y;
      (P = (y = d.opts.code).formats) !== null && P !== void 0 || (y.formats = a._`require("ajv-formats/dist/formats").${E}`);
      for (let b of m) d.addFormat(b, _[b]);
    }
    t.exports = e = l, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = l;
  }),
  vd = Ji(),
  bd = Sd(),
  Rd = $s(yd(), 1),
  zd = new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]),
  wd = Rd.default;
function $d() {
  let e = new bd.Ajv2020({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return wd(e), e;
}
var e4t = class {
    _ajv;
    _userAjv;
    constructor(e) {
      this._userAjv = e !== void 0, this._ajv = e;
    }
    get ajv() {
      return this._ajv ??= $d();
    }
    getValidator(e) {
      if (!this._userAjv && "$schema" in e && typeof e.$schema === "string" && !zd.has(e.$schema.replace(/#$/, ""))) {
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
  Ajv = vd.Ajv;
var Wi = !1;
var ns = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthClientFlowError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Oe(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Oe(this, e);
    }
    constructor(e) {
      super(e);
      this.name = new.target.name, bt(this, new.target);
    }
  },
  Qrt = class extends ns {
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
  Zir = class extends ns {
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
  uc = class extends ns {
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
  _n = class extends ns {
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
  Yi = class extends ns {
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
function Xi(e, t, r) {
  if (e === void 0) return;
  if (e.issuer === void 0) {
    if (r?.canPersistStamp !== !1) console.warn("[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.");
    return e;
  }
  return dc(e.issuer, t) ? e : void 0;
}
function dc(e, t) {
  return e === t || e.endsWith("/") && e.slice(0, -1) === t || t.endsWith("/") && t.slice(0, -1) === e;
}
function hc(e) {
  if (e == null) return !1;
  let t = e;
  return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function Ed(e, t, r) {
  let {
    resourceMetadataUrl: resourceMetadataUrl,
    scope: scope
  } = fNe(t.response);
  if ((await GEt(e, {
    serverUrl: t.serverUrl,
    resourceMetadataUrl: resourceMetadataUrl,
    scope: scope,
    fetchFn: t.fetchFn,
    ...r
  })) !== "AUTHORIZED") throw new PP();
}
function mc(e, t) {
  return {
    token: async () => (await e.tokens())?.access_token,
    onUnauthorized: async r => Ed(e, r, t)
  };
}
var PP = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", {
      value: "mcp.UnauthorizedError"
    });
  }
  static [Symbol.hasInstance](e) {
    return Oe(this, e);
  }
  static isInstance(e) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Oe(this, e);
  }
  constructor(e) {
    super(e ?? "Unauthorized");
    this.name = "UnauthorizedError", bt(this, new.target);
  }
};
function zo(e) {
  return e?.authorization_response_iss_parameter_supported === !0;
}
function wo({
  iss: iss,
  expectedIssuer: expectedIssuer,
  issParameterSupported: issParameterSupported
}) {
  if (expectedIssuer === void 0) return;
  if (iss === void 0) {
    if (issParameterSupported) throw new Qrt("authorization_response", expectedIssuer, void 0);
    return;
  }
  if (iss !== expectedIssuer) throw new Qrt("authorization_response", expectedIssuer, iss);
}
function yn(...e) {
  let t = new Set();
  for (let r of e) {
    if (!r) continue;
    for (let s of r.split(/\s+/)) if (s) t.add(s);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function Pd(e, t) {
  if (!e) return !1;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let s of e.split(/\s+/)) if (s && !r.has(s)) return !0;
  return !1;
}
async function pc(authorizationCode, iss_2, r, s, a) {
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
    l = (await tar(s, a)).authorizationServerMetadata;
  } catch {
    l = void 0;
  }
  if (!l) throw new PP("Authorization callback failed and the issuer could not be verified");
  wo({
    iss: iss_3,
    expectedIssuer: l.issuer,
    issParameterSupported: zo(l)
  });
  let c = authorizationCode.get("error");
  if (c) throw new $V(c, authorizationCode.get("error_description") ?? c, authorizationCode.get("error_uri") ?? void 0);
  throw new PP("Authorization callback contained neither `code` nor `error`");
}
function Td(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var vn = "code",
  bn = "S256";
function Cd(e, t) {
  let r = e.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e && e.token_endpoint_auth_method && Td(e.token_endpoint_auth_method) && (t.length === 0 || t.includes(e.token_endpoint_auth_method))) return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function kd(e, t, r, s) {
  let {
    client_id: client_id,
    client_secret: client_secret
  } = t;
  switch (e) {
    case "client_secret_basic":
      qd(client_id, client_secret, r);
      return;
    case "client_secret_post":
      Id(client_id, client_secret, s);
      return;
    case "none":
      Od(client_id, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function qd(e, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function Id(e, t, r) {
  if (r.set("client_id", e), t) r.set("client_secret", t);
}
function Od(e, t) {
  t.set("client_id", e);
}
function fc(e) {
  return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1";
}
function Nd(e) {
  let t = new URL(String(e));
  if (t.protocol !== "https:" && !fc(t.hostname)) throw new uc(t.href);
  return t;
}
function Md(e) {
  for (let t of e ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (fc(r.hostname)) return "native";
  }
  return "web";
}
function jd(e) {
  let clientMetadata = e.clientMetadata;
  return {
    ...clientMetadata,
    grant_types: clientMetadata.grant_types ?? (e.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]),
    application_type: clientMetadata.application_type ?? Md(clientMetadata.redirect_uris)
  };
}
async function Zi(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let s = OAuthErrorResponseSchema.parse(JSON.parse(r));
    return $V.fromResponse(s);
  } catch (error) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${error}. Raw body: ${r}`;
    return new $V(moe.ServerError, a);
  }
}
async function GEt(e, t) {
  try {
    return await Rn(e, t);
  } catch (error) {
    if (error instanceof $V) {
      if (error.code === moe.InvalidClient || error.code === moe.UnauthorizedClient) return await e.invalidateCredentials?.("client"), await e.invalidateCredentials?.("tokens"), await Rn(e, t);else if (error.code === moe.InvalidGrant) return await e.invalidateCredentials?.("tokens"), await Rn(e, t);
    }
    throw error;
  }
}
function Ad(e) {
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
async function Rn(e, {
  serverUrl: serverUrl,
  authorizationCode: authorizationCode_3,
  iss: iss_4,
  scope: a,
  resourceMetadataUrl: resourceMetadataUrl_2,
  fetchFn: fetchFn,
  skipIssuerMetadataValidation: l,
  forceReauthorization: forceReauthorization
}) {
  let clientMetadata_3 = jd(e),
    m = await e.discoveryState?.(),
    resourceMetadata_2,
    E,
    P,
    y,
    resourceMetadataUrl_3 = resourceMetadataUrl_2;
  if (!resourceMetadataUrl_3 && m?.resourceMetadataUrl) resourceMetadataUrl_3 = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (E = m.authorizationServerUrl, resourceMetadata_2 = m.resourceMetadata, P = m.authorizationServerMetadata ?? (await VEt(E, {
      fetchFn: fetchFn,
      skipIssuerValidation: l
    })), !resourceMetadata_2) try {
      resourceMetadata_2 = await ear(serverUrl, {
        resourceMetadataUrl: resourceMetadataUrl_3
      }, fetchFn);
    } catch (error) {
      if (error instanceof TypeError) throw error;
    }
    if (P !== m.authorizationServerMetadata || resourceMetadata_2 !== m.resourceMetadata) await e.saveDiscoveryState?.({
      authorizationServerUrl: String(E),
      resourceMetadataUrl: resourceMetadataUrl_3?.toString(),
      resourceMetadata: resourceMetadata_2,
      authorizationServerMetadata: P
    });
  } else {
    let j = await tar(serverUrl, {
      resourceMetadataUrl: resourceMetadataUrl_3,
      fetchFn: fetchFn,
      skipIssuerMetadataValidation: l
    });
    E = j.authorizationServerUrl, P = j.authorizationServerMetadata, resourceMetadata_2 = j.resourceMetadata, y = {
      authorizationServerUrl: String(E),
      resourceMetadataUrl: resourceMetadataUrl_3?.toString(),
      resourceMetadata: resourceMetadata_2,
      authorizationServerMetadata: P
    };
  }
  let issuer = P?.issuer ?? String(E),
    h = {
      issuer: issuer
    };
  if (await e.saveAuthorizationServerUrl?.(issuer), authorizationCode_3 !== void 0) {
    let j = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (j === void 0) {
      if (e.saveDiscoveryState !== void 0) throw new _n("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", issuer);
      console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) \u2014 see docs/migration/upgrade-to-v2.md \xA7SEP-2352.");
    } else if (!dc(j, issuer)) throw new _n(j, issuer);
  }
  if (y) await e.saveDiscoveryState?.(y);
  let resource = await Ud(serverUrl, e, resourceMetadata_2);
  if (resource) await e.saveResourceUrl?.(String(resource));
  let scope_2 = Ad({
      requestedScope: a,
      resourceMetadata: resourceMetadata_2,
      authServerMetadata: P,
      clientMetadata: e.clientMetadata
    }),
    z = await Promise.resolve(e.clientInformation(h)),
    clientInformation = Xi(z, issuer, {
      canPersistStamp: e.saveClientInformation !== void 0
    });
  if (clientInformation === void 0 && z?.issuer && e.saveClientInformation === void 0) throw new _n(z.issuer, issuer);
  if (clientInformation && clientInformation.issuer === void 0) clientInformation = {
    ...clientInformation,
    issuer: issuer
  }, await e.saveClientInformation?.(clientInformation, h);
  if (!clientInformation) {
    if (authorizationCode_3 !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let j = P?.client_id_metadata_document_supported === !0,
      F = e.clientMetadataUrl;
    if (F && !Ld(F)) throw new $V(moe.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${F}`);
    if (j && F) clientInformation = {
      client_id: F,
      issuer: issuer
    }, await e.saveClientInformation?.(clientInformation, h);else {
      if (!e.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      clientInformation = {
        ...(await Kd(E, {
          metadata: P,
          clientMetadata: clientMetadata_3,
          scope: scope_2,
          fetchFn: fetchFn
        })),
        issuer: issuer
      }, await e.saveClientInformation(clientInformation, h);
    }
  }
  let R = !e.redirectUrl;
  if (authorizationCode_3 !== void 0 || R) {
    if (authorizationCode_3 !== void 0) wo({
      iss: iss_4,
      expectedIssuer: P?.issuer,
      issParameterSupported: zo(P)
    });
    let j = await Hd(e, E, {
      metadata: P,
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
  let S = Xi(await e.tokens(h), issuer);
  if (S && S.issuer === void 0) S = {
    ...S,
    issuer: issuer
  }, await e.saveTokens(S, h);
  if (S?.refresh_token && !forceReauthorization) try {
    let j = await U9r(E, {
      metadata: P,
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
    if (error instanceof uc) throw error;
    if (!(error instanceof $V) || error.code === moe.ServerError) ;else throw error;
  }
  let state = e.state ? await e.state() : void 0,
    {
      authorizationUrl: authorizationUrl,
      codeVerifier: codeVerifier
    } = await $9r(E, {
      metadata: P,
      clientInformation: clientInformation,
      state: state,
      redirectUrl: e.redirectUrl,
      scope: scope_2,
      resource: resource
    });
  return await e.saveCodeVerifier(codeVerifier), await e.redirectToAuthorization(authorizationUrl), "REDIRECT";
}
function Ld(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function Ud(e, t, r) {
  let requestedResource_2 = Gn(e);
  if (t.validateResourceURL) return await t.validateResourceURL(requestedResource_2, r?.resource);
  if (!r) return;
  if (!Bn({
    requestedResource: requestedResource_2,
    configuredResource: r.resource
  })) throw Error(`Protected resource ${r.resource} does not match expected ${requestedResource_2} (or origin)`);
  return new URL(r.resource);
}
function fNe(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, s] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !s) return {};
  let a = vo(e, "resource_metadata") || void 0,
    resourceMetadataUrl_4;
  if (a) try {
    resourceMetadataUrl_4 = new URL(a);
  } catch {}
  let scope_3 = vo(e, "scope") || void 0,
    error_3 = vo(e, "error") || void 0,
    errorDescription = vo(e, "error_description") || void 0;
  return {
    resourceMetadataUrl: resourceMetadataUrl_4,
    scope: scope_3,
    error: error_3,
    errorDescription: errorDescription
  };
}
function vo(e, t) {
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
async function ear(e, t, r = fetch) {
  let s = await xd(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl
  });
  if (!s || s.status === 404) throw await s?.text?.().catch(() => {}), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!s.ok) throw await s.text?.().catch(() => {}), Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`);
  return OAuthProtectedResourceMetadataSchema.parse(await s.json());
}
async function Sc(e, headers_2, r = fetch) {
  try {
    return await r(e, {
      headers: headers_2
    });
  } catch (error) {
    if (!(error instanceof TypeError) || !Wi) throw error;
    if (headers_2) try {
      return await r(e, {});
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;
      return;
    }
    return;
  }
}
function Dd(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Qi(e, t, r = fetch) {
  return await Sc(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function Vd(e, t) {
  if (!e) return !0;
  if (t === "/") return !1;
  return e.status >= 400 && e.status < 500 || e.status === 502;
}
async function xd(e, t, r, s) {
  let a = new URL(e),
    n = s?.protocolVersion ?? Ot,
    i;
  if (s?.metadataUrl) i = new URL(s.metadataUrl);else {
    let c = Dd(t, a.pathname);
    i = new URL(c, s?.metadataServerUrl ?? a), i.search = a.search;
  }
  let l = await Qi(i, n, r);
  if (!s?.metadataUrl && Vd(l, a.pathname)) l = await Qi(new URL(`/.well-known/${t}`, a), n, r);
  return l;
}
function Fd(e) {
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
async function VEt(e, {
  fetchFn: fetchFn_2 = fetch,
  protocolVersion = Ot,
  skipIssuerValidation = !1
} = {}) {
  let a = {
      "MCP-Protocol-Version": protocolVersion,
      Accept: "application/json"
    },
    n = Fd(e);
  for (let {
    url: url,
    type: type_5
  } of n) {
    let c = await Sc(url, a, fetchFn_2);
    if (!c) continue;
    if (!c.ok) {
      if (await c.text?.().catch(() => {}), c.status >= 400 && c.status < 500 || c.status === 502) continue;
      throw Error(`HTTP ${c.status} trying to load ${type_5 === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${url}`);
    }
    let d = type_5 === "oauth" ? OAuthMetadataSchema.parse(await c.json()) : OpenIdProviderDiscoveryMetadataSchema.parse(await c.json());
    if (!skipIssuerValidation) {
      let m = typeof e === "string" ? e : e.href;
      if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) throw new Qrt("metadata", m, d.issuer);
    }
    return d;
  }
}
async function tar(e, t) {
  let resourceMetadata_3, authorizationServerUrl;
  try {
    if (resourceMetadata_3 = await ear(e, {
      resourceMetadataUrl: t?.resourceMetadataUrl
    }, t?.fetchFn), resourceMetadata_3.authorization_servers && resourceMetadata_3.authorization_servers.length > 0) authorizationServerUrl = resourceMetadata_3.authorization_servers[0];
  } catch (error) {
    if (error instanceof TypeError) throw error;
  }
  if (!authorizationServerUrl) authorizationServerUrl = String(new URL("/", e));
  let authorizationServerMetadata = await VEt(authorizationServerUrl, {
    fetchFn: t?.fetchFn,
    skipIssuerValidation: t?.skipIssuerMetadataValidation
  });
  return {
    authorizationServerUrl: authorizationServerUrl,
    authorizationServerMetadata: authorizationServerMetadata,
    resourceMetadata: resourceMetadata_3
  };
}
async function $9r(e, {
  metadata: metadata,
  clientInformation: clientInformation_2,
  redirectUrl: redirectUrl,
  scope: scope_4,
  state: state_2,
  resource: resource_2
}) {
  let authorizationUrl_2;
  if (metadata) {
    if (authorizationUrl_2 = new URL(metadata.authorization_endpoint), !metadata.response_types_supported.includes(vn)) throw Error(`Incompatible auth server: does not support response type ${vn}`);
    if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes(bn)) throw Error(`Incompatible auth server: does not support code challenge method ${bn}`);
  } else authorizationUrl_2 = new URL("/authorize", e);
  let c = await d4t(),
    {
      code_verifier: d,
      code_challenge: code_challenge
    } = c;
  if (authorizationUrl_2.searchParams.set("response_type", vn), authorizationUrl_2.searchParams.set("client_id", clientInformation_2.client_id), authorizationUrl_2.searchParams.set("code_challenge", code_challenge), authorizationUrl_2.searchParams.set("code_challenge_method", bn), authorizationUrl_2.searchParams.set("redirect_uri", String(redirectUrl)), state_2) authorizationUrl_2.searchParams.set("state", state_2);
  if (scope_4) authorizationUrl_2.searchParams.set("scope", scope_4);
  if (scope_4?.split(" ").includes("offline_access")) authorizationUrl_2.searchParams.append("prompt", "consent");
  if (resource_2) authorizationUrl_2.searchParams.set("resource", resource_2.href);
  return {
    authorizationUrl: authorizationUrl_2,
    codeVerifier: d
  };
}
function gc(code_3, code_verifier, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: code_3,
    code_verifier: code_verifier,
    redirect_uri: String(r)
  });
}
async function En(e, {
  metadata: metadata_2,
  tokenRequestParams: r,
  clientInformation: clientInformation_3,
  addClientAuthentication: addClientAuthentication,
  resource: resource_3,
  fetchFn: fetchFn_3
}) {
  let l = Nd(metadata_2?.token_endpoint ?? new URL("/token", e)),
    headers_3 = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });
  if (resource_3) r.set("resource", resource_3.href);
  if (addClientAuthentication) await addClientAuthentication(headers_3, r, l, metadata_2);else if (clientInformation_3) kd(Cd(clientInformation_3, metadata_2?.token_endpoint_auth_methods_supported ?? []), clientInformation_3, headers_3, r);
  let d = await (fetchFn_3 ?? fetch)(l, {
    method: "POST",
    headers: headers_3,
    body: r
  });
  if (!d.ok) throw await Zi(d);
  let m = await d.json();
  try {
    return OAuthTokensSchema.parse(m);
  } catch (error) {
    if (typeof m === "object" && m !== null && "error" in m) throw await Zi(JSON.stringify(m));
    throw error;
  }
}
async function Yes(e, {
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
  return wo({
    iss: iss_5,
    expectedIssuer: metadata_3?.issuer,
    issParameterSupported: zo(metadata_3)
  }), En(e, {
    metadata: metadata_3,
    tokenRequestParams: gc(authorizationCode_4, codeVerifier_2, redirectUri),
    clientInformation: clientInformation_4,
    addClientAuthentication: addClientAuthentication_2,
    resource: resource_4,
    fetchFn: fetchFn_4
  });
}
async function U9r(e, {
  metadata: metadata_4,
  clientInformation: clientInformation_5,
  refreshToken: s,
  resource: resource_5,
  addClientAuthentication: addClientAuthentication_3,
  fetchFn: fetchFn_5
}) {
  return {
    refresh_token: s,
    ...(await En(e, {
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
async function Hd(e, t, {
  metadata: metadata_5,
  resource: resource_6,
  authorizationCode: authorizationCode_5,
  iss: iss_6,
  scope: scope_5,
  fetchFn: fetchFn_6
} = {}) {
  if (authorizationCode_5 !== void 0) wo({
    iss: iss_6,
    expectedIssuer: metadata_5?.issuer,
    issParameterSupported: zo(metadata_5)
  });
  let c = scope_5 ?? e.clientMetadata.scope,
    tokenRequestParams;
  if (e.prepareTokenRequest) tokenRequestParams = await e.prepareTokenRequest(c);
  if (!tokenRequestParams) {
    if (!authorizationCode_5) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    tokenRequestParams = gc(authorizationCode_5, await e.codeVerifier(), e.redirectUrl);
  }
  let m = await e.clientInformation({
    issuer: metadata_5?.issuer ?? String(t)
  });
  return En(t, {
    metadata: metadata_5,
    tokenRequestParams: tokenRequestParams,
    clientInformation: m ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: resource_6,
    fetchFn: fetchFn_6
  });
}
async function Kd(e, {
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
  if (!l.ok) throw new Zir({
    status: l.status,
    body: await l.text(),
    submittedMetadata: submittedMetadata
  });
  return OAuthClientInformationFullSchema.parse(await l.json());
}
var bo = new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "server/discover"]),
  Jd = class {
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
      return this._entries.get(zn(e));
    }
    set(e, t) {
      let r = zn(e),
        s = bo.has(e.method),
        a = !this._entries.has(r);
      if (!s && a && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
        for (let i of this._entries.keys()) if (!bo.has(i.slice(0, i.indexOf("\x00")))) {
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
      if (this._entries.delete(zn(e)) && !bo.has(e.method)) this._cappedSize--;
    }
    evict(e) {
      let t = `${e}\x00`,
        r = bo.has(e);
      for (let s of this._entries.keys()) if (s.startsWith(t)) {
        if (this._entries.delete(s), !r) this._cappedSize--;
      }
    }
    clear() {
      this._entries.clear(), this._cappedSize = 0;
    }
  };
function zn(e) {
  return `${e.method}\x00${JSON.stringify([e.partition ?? "", e.params ?? ""])}`;
}
function wn(e, t) {
  return t === void 0 ? e : `${e}\x00${t}`;
}
var Gd = 86400000,
  Bd = class {
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
    async _deleteBoth(method_7, params_31) {
      let partition_3 = this._partitionFor("private"),
        partition_4 = this._partitionFor("public");
      try {
        await this._store.delete({
          method: method_7,
          params: params_31,
          partition: partition_3
        });
      } catch (error) {
        this._reportError(error);
      }
      if (partition_4 !== partition_3) try {
        await this._store.delete({
          method: method_7,
          params: params_31,
          partition: partition_4
        });
      } catch (error) {
        this._reportError(error);
      }
    }
    async evictKey(e, t) {
      let r = wn(e, t),
        s = this._evictionGeneration.get(r);
      if (s !== void 0) this._evictionGeneration.set(r, s + 1);
      await this._deleteBoth(e, t);
    }
    captureGeneration(e, t) {
      let r = wn(e, t),
        s = this._evictionGeneration.get(r) ?? 0;
      return this._evictionGeneration.set(r, s), s;
    }
    async write(method_8, t, r, s) {
      if ((this._evictionGeneration.get(wn(method_8, s?.params)) ?? 0) !== r) return;
      let params_32 = s?.params ?? "",
        n = this._partitionFor("private"),
        i = this._partitionFor("public"),
        partition_5 = (s?.scope ?? "private") === "public" ? i : n;
      try {
        await this._store.set({
          method: method_8,
          params: params_32,
          partition: partition_5
        }, {
          value: Wd(t),
          expiresAt: s?.expiresAt,
          scope: s?.scope
        });
      } catch (error) {
        this._reportError(error);
      }
      if (i !== n) try {
        await this._store.delete({
          method: method_8,
          params: params_32,
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
function Wd(e) {
  let t;
  try {
    t = JSON.stringify(e);
  } catch (error) {
    throw TypeError(`cache value is not JSON-serializable: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (typeof t !== "string") throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
  return t;
}
var Yd = -32022,
  Xd = new Set([-32001, -32020, -32021]);
function Zd(e, t) {
  switch (e.kind) {
    case "result":
      return Qd(e.result, t);
    case "rpc-error":
      return _c(e, t);
    case "http-error":
      return eh(e, t);
    case "network-error":
      return ec(e.error, t);
    case "auth-required":
      return {
        kind: "error",
        error: e.error
      };
    case "closed":
      if (t.transportKind === "stdio") return {
        kind: "legacy"
      };
      return ec(Error("Connection closed during the version negotiation probe"), t);
    case "timeout":
      if (t.transportKind === "stdio") return {
        kind: "legacy"
      };
      return {
        kind: "error",
        error: new Ks(Ls.RequestTimeout, `Version negotiation probe timed out after ${e.timeoutMs}ms`, {
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
function Qd(e, t) {
  let r = Je(uo).validateResult("server/discover", e);
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
    error: new lo({
      supported: [...supportedVersions],
      requested: t.requestedVersion
    })
  };
}
function _c(e, t) {
  let {
    code: code_4,
    message: message_6,
    data: data_41
  } = e;
  if (code_4 === Yd) {
    let supported = yc(data_41);
    if (supported === void 0) return {
      kind: "legacy"
    };
    let error_4 = new lo({
        supported: supported,
        requested: sh(data_41) ?? t.requestedVersion
      }, message_6),
      l = rs(supported),
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
  if (Xd.has(code_4)) return {
    kind: "legacy"
  };
  return {
    kind: "legacy"
  };
}
function eh(e, t) {
  let r = ah(e.body);
  if (r !== void 0) return _c(r, t);
  return {
    kind: "legacy"
  };
}
function ec(cause, t) {
  if (t.environment === "browser" && th(cause)) return {
    kind: "legacy"
  };
  return {
    kind: "error",
    error: new Ks(Ls.EraNegotiationFailed, `Version negotiation probe failed: ${rh(cause)}`, {
      cause: cause
    })
  };
}
function th(e) {
  return e instanceof TypeError || e instanceof Error && e.name === "TypeError";
}
function rh(e) {
  return e instanceof Error ? e.message : String(e);
}
function yc(e) {
  if (typeof e !== "object" || e === null) return;
  let supported_2 = e.supported;
  if (!Array.isArray(supported_2) || supported_2.length === 0 || !supported_2.every(item => typeof item === "string")) return;
  return supported_2;
}
function sh(e) {
  if (typeof e !== "object" || e === null) return;
  let requested_2 = e.requested;
  return typeof requested_2 === "string" ? requested_2 : void 0;
}
function ah(e) {
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
var oh = "legacy";
function nh(e, t) {
  let r = e?.mode ?? oh;
  if (r === "legacy") return {
    kind: "legacy"
  };
  let probe = e?.probe ?? {};
  if (typeof r === "object") {
    if (!Ge(r.pin)) throw TypeError(`versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`);
    return {
      kind: "pin",
      version: r.pin,
      probe: probe
    };
  }
  let a = t ? rs(t) : [];
  return {
    kind: "auto",
    modernVersions: a.length > 0 ? a : [...an],
    fallbackAvailable: t ? on(t).length > 0 : !0,
    probe: probe
  };
}
function tc() {
  let globalThis_2 = globalThis;
  return globalThis_2.window !== void 0 && globalThis_2.document !== void 0 ? "browser" : "node";
}
function rc(e) {
  return "stderr" in e && "pid" in e ? "stdio" : "http";
}
var ih = class e {
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
        if (_pending !== void 0 && (CRe(a) || H_e(a)) && a.id === _pending.id) {
          if (s._pending = void 0, CRe(a)) _pending.resolve({
            kind: "response",
            result: a.result
          });else _pending.resolve({
            kind: "response",
            error: a.error
          });
          return;
        }
        if (_pending !== void 0 && s._transportKind === "http" && (CRe(a) || H_e(a)) && !s._issuedIds.has(a.id)) {
          s._pending = void 0;
          let i = sc(JSON.stringify(a.id)),
            l = Error(`server/discover probe reply did not echo the request id (expected ${JSON.stringify(_pending.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`);
          l.name = "McpProbeIdMismatchError", s._savedOnError?.(l), _pending.resolve({
            kind: "id-mismatch"
          });
          return;
        }
      }, t.onerror = a => {
        if (s._pending !== void 0 && s._errorSinceSend === void 0) s._errorSinceSend = a;
        let _pending_2 = s._pending;
        if (_pending_2 !== void 0 && s._transportKind === "http" && ac(a)) setTimeout(() => {
          if (s._pending !== _pending_2) return;
          s._pending = void 0;
          let i = Error(`server/discover probe reply failed JSON-RPC message decoding (${sc(a instanceof Error ? a.message : String(a))}) \u2014 treating the server as pre-2026-07-28`);
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
      let id_4 = `server-discover-probe-${++this._probeCounter}`;
      return this._issuedIds.add(id_4), this._errorSinceSend = void 0, new Promise(a => {
        let n = !1,
          resolve_2 = c => {
            if (n) return;
            if (n = !0, clearTimeout(l), this._pending?.id === id_4) this._pending = void 0;
            a(c);
          },
          l = setTimeout(() => resolve_2({
            kind: "timeout"
          }), r);
        this._pending = {
          id: id_4,
          resolve: resolve_2
        }, this._transport.send(t(id_4), {
          onRequestStreamEnd: () => {
            setTimeout(() => {
              let _errorSinceSend = this._errorSinceSend;
              if (_errorSinceSend !== void 0 && !ac(_errorSinceSend)) {
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
function sc(e) {
  let t = String(e);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}\u2026 [truncated]`;
}
function ac(e) {
  if (e instanceof SyntaxError) return !0;
  return typeof e === "object" && e !== null && (e.name === "ZodError" || Array.isArray(e.issues));
}
function oc(e) {
  let t = weakMap.get(e);
  weakMap.delete(e), t?.();
}
function ch(id_5, protocolVersion_2, clientInfo, clientCapabilities) {
  return {
    jsonrpc: "2.0",
    id: id_5,
    method: "server/discover",
    params: {
      _meta: Je(protocolVersion_2).outboundEnvelope({
        protocolVersion: protocolVersion_2,
        clientInfo: clientInfo,
        clientCapabilities: clientCapabilities
      })
    }
  };
}
function lh(e, timeoutMs) {
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
        if (error_6 instanceof SE) {
          let s = error_6.data?.text;
          return {
            kind: "http-error",
            status: error_6.data.status,
            body: typeof s === "string" ? s : void 0
          };
        }
        if (error_6 instanceof PP || error_6 instanceof Error && error_6.name === "UnauthorizedError") return {
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
async function vc(e, t) {
  let r = e.probe.timeoutMs ?? t.defaultTimeoutMs,
    s = Math.max(0, e.probe.maxRetries ?? 0),
    clientModernVersions = e.kind === "pin" ? [e.version] : e.modernVersions,
    fallbackAvailable = e.kind === "auto" && e.fallbackAvailable,
    i = await ih.open(t.transport, t.transportKind),
    l = async () => {
      let requestedVersion = clientModernVersions[0],
        m = !1,
        _ = s;
      for (;;) {
        let E = await i.exchange(b => ch(b, requestedVersion, t.clientInfo, t.capabilities), r);
        if (E.kind === "timeout" && _ > 0) {
          _--;
          continue;
        }
        let P = lh(E, r);
        if (P.kind === "timeout") t.transport._anthropicProbeTimedOut = !0;
        let y = Zd(P, {
          clientModernVersions: clientModernVersions,
          requestedVersion: requestedVersion,
          fallbackAvailable: fallbackAvailable,
          environment: t.environment,
          transportKind: t.transportKind
        });
        switch (y.kind) {
          case "modern":
            return {
              era: "modern",
              version: y.version,
              discover: y.discover
            };
          case "corrective":
            if (m) throw y.error;
            m = !0, requestedVersion = y.version;
            continue;
          case "legacy":
            {
              if (P.kind === "id-mismatch" || P.kind === "malformed" || P.kind === "stream-end") t.transport._anthropicProbeLegacyEvidence = P.kind;
              let b = P.kind === "closed" ? "the connection closed during the server/discover probe" : void 0;
              if (e.kind === "pin") throw new Ks(Ls.EraNegotiationFailed, b === void 0 ? `Version negotiation failed: the server did not offer pinned protocol version ${e.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${b} before the server offered pinned protocol version ${e.version} (no fallback in pin mode)`);
              if (!e.fallbackAvailable) throw new Ks(Ls.EraNegotiationFailed, b === void 0 ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${b} and this client supports no pre-2026-07-28 protocol version to fall back to`);
              if (b !== void 0 && t.disposableProbe !== !0) throw new Ks(Ls.EraNegotiationFailed, `Version negotiation failed: ${b} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`);
              return {
                era: "legacy"
              };
            }
          case "error":
            throw y.error;
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
function uh(e) {
  let t = Object.getPrototypeOf(e);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) return;
  let _serverParams = e._serverParams;
  return typeof _serverParams === "object" && _serverParams !== null && typeof _serverParams.command === "string" ? _serverParams : void 0;
}
async function dh(e, t, r, s) {
  let transport = new t.constructor({
      ...r,
      stderr: "ignore"
    }),
    i = t.close,
    l = !1,
    c,
    promise = new Promise((_, E) => {
      c = () => E(nc());
    });
  t.close = async function close() {
    return l = !0, c?.(), i.call(t);
  };
  let m;
  try {
    let _ = vc(e, {
      ...s,
      transport: transport,
      transportKind: "stdio",
      disposableProbe: !0
    });
    _.catch(() => {}), m = await Promise.race([_, promise]);
  } finally {
    await hh(transport), t.close = i;
  }
  if (l) throw nc();
  return m;
}
function nc() {
  return new Ks(Ls.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
}
async function hh(e) {
  try {
    let _dispose = e._dispose;
    await (typeof _dispose === "function" ? _dispose.call(e) : e.close());
  } catch {}
}
function ic(e) {
  let t = e._meta?.[He];
  return wi.Implementation(t) ? t : void 0;
}
function Ro(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let r = t,
      properties_4 = e.properties;
    for (let a of Object.keys(properties_4)) {
      let n = properties_4[a];
      if (r[a] === void 0 && Object.prototype.hasOwnProperty.call(n, "default")) r[a] = n.default;
      if (r[a] !== void 0) Ro(n, r[a]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let r of e.anyOf) if (typeof r !== "boolean") Ro(r, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let r of e.oneOf) if (typeof r !== "boolean") Ro(r, t);
  }
}
function mh(e) {
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
function ph(e) {
  if (typeof e === "object" && e !== null) {
    if (e.kind === "legacy" && !("supportedVersions" in e) && !("discover" in e)) return e;
    if (e.kind === "modern" && Gqe.safeParse(e.discover).success) return e;
  }
  throw new Ks(Ls.EraNegotiationFailed, "connect({ prior }): unrecognized prior \u2014 expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
var cc = {
    "notifications/tools/list_changed": ["tools/list"],
    "notifications/prompts/list_changed": ["prompts/list"],
    "notifications/resources/list_changed": ["resources/list", "resources/templates/list"]
  },
  fh = 64,
  B9r = class extends $i {
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
        let error_7 = new Ks(Ls.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
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
      } : {}, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new e4t(), this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? !1, this._versionNegotiation = t?.versionNegotiation, this._supportedProtocolVersionsOption = t?.supportedProtocolVersions, this._inputRequiredDriverConfig = vi(t?.inputRequired), this._cache = new Bd(t?.responseCacheStore ?? new Jd(), t?.responseCacheStore !== void 0, r => this._reportStoreError(r), t?.cachePartition ?? ""), this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0, this._listMaxPages = t?.listMaxPages ?? fh, t?.listChanged) this._listChangedConfig = t.listChanged;
    }
    buildContext(e, t) {
      return e;
    }
    _shouldDropInbound(e) {
      if (this._negotiatedProtocolVersion !== void 0 && Ge(this._negotiatedProtocolVersion) && m7(e)) return "drop";
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
      if (!this._inputRequiredDriverConfig.autoFulfill) return Promise.reject(new Ks(Ls.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, {
        resultType: "input_required",
        method: t.request.method
      }));
      return Pi({
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
      this._capabilities = Ei(this._capabilities, e);
    }
    setVersionNegotiation(e) {
      if (this.transport) throw Error("Cannot configure version negotiation after connecting to transport");
      this._versionNegotiation = e;
    }
    _wrapHandler(e, t) {
      if (e === "elicitation/create") return async (r, s) => {
        let a = Je(this._negotiatedProtocolVersion),
          n = a.validateRequest("elicitation/create", r);
        if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("elicitation/create", r);
        if (!n.ok) throw new ed(n.reason === "not-in-era" ? Mi.InternalError : Mi.InvalidParams, n.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${n.message}`);
        let {
          params: params_33
        } = n.value;
        params_33.mode = params_33.mode ?? "form";
        let {
          supportsFormMode: supportsFormMode,
          supportsUrlMode: supportsUrlMode_2
        } = mh(this._capabilities.elicitation);
        if (params_33.mode === "form" && !supportsFormMode) throw new ed(Mi.InvalidParams, "Client does not support form-mode elicitation requests");
        if (params_33.mode === "url" && !supportsUrlMode_2) throw new ed(Mi.InvalidParams, "Client does not support URL-mode elicitation requests");
        let d = await t(r, s),
          m = a.validateResult("elicitation/create", d);
        if (!m.ok && m.reason === "not-in-era") m = a.validateInputResponse("elicitation/create", d);
        if (!m.ok) throw new ed(m.reason === "not-in-era" ? Mi.InternalError : Mi.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
        let _ = m.value,
          E = params_33.mode === "form" ? params_33.requestedSchema : void 0;
        if (params_33.mode === "form" && _.action === "accept" && _.content && E && this._capabilities.elicitation?.form?.applyDefaults) try {
          Ro(E, _.content);
        } catch {}
        return _;
      };
      if (e === "sampling/createMessage") return async (r, s) => {
        let a = Je(this._negotiatedProtocolVersion),
          n = a.validateRequest("sampling/createMessage", r);
        if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("sampling/createMessage", r);
        if (!n.ok) throw new ed(n.reason === "not-in-era" ? Mi.InternalError : Mi.InvalidParams, n.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${n.message}`);
        let {
            params: params_34
          } = n.value,
          l = await t(r, s),
          c = Boolean(params_34.tools || params_34.toolChoice),
          d = a.samplingResultVariant(c, l);
        if (!d.ok && d.reason === "not-in-era") d = a.validateInputResponse("sampling/createMessage", l);
        if (!d.ok) throw new ed(d.reason === "not-in-era" ? Mi.InternalError : Mi.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
        return d.value;
      };
      return t;
    }
    assertCapability(e, t) {
      if (!this._serverCapabilities?.[e]) throw new Ks(Ls.CapabilityNotSupported, `Server does not support ${e} (required for ${t})`);
    }
    async connect(e, t) {
      if (t?.prior != null) return this._connectFromPrior(e, ph(t.prior), t);
      let r = nh(this._versionNegotiation, this._supportedProtocolVersionsOption);
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
      let s = on(this._supportedProtocolVersions);
      try {
        let protocolVersion_3 = s[0];
        if (protocolVersion_3 === void 0) throw new Ks(Ls.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
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
      let a = r.kind === "auto" && e._anthropicProbeTimedOut === !0 && t instanceof ed,
        n = a && t.code === Mi.UnsupportedProtocolVersion ? yc(t.data) : void 0,
        version_3 = !a ? void 0 : n === void 0 ? r.modernVersions[0] : r.modernVersions.find(item => n.includes(item));
      if (version_3 === void 0) throw this.close(), t;
      try {
        this._negotiatedProtocolVersion = version_3;
        let discover = await this.discover({
          ...s,
          timeout: Math.min(3000, r.probe.timeoutMs ?? s?.timeout ?? ss)
        });
        if (!discover.supportedVersions.includes(version_3)) throw Error(`the second server/discover does not offer ${version_3}`);
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
        let transportKind = rc(transport_2),
          n = {
            clientInfo: this._clientInfo,
            capabilities: this._capabilities,
            environment: tc(),
            defaultTimeoutMs: r?.timeout ?? ss
          },
          i = transportKind === "stdio" ? uh(transport_2) : void 0;
        s = i === void 0 ? await vc(t, {
          ...n,
          transport: transport_2,
          transportKind: transportKind
        }) : await dh(t, transport_2, i, n);
      } catch (error) {
        throw await transport_2.close().catch(() => {}), oc(transport_2), error;
      }
      if (oc(transport_2), await super.connect(transport_2), s.era === "legacy") try {
        await this._legacyHandshake(transport_2, r, !1);
        return;
      } catch (error) {
        s = await this._discoverAfterRejectedInitialize(transport_2, error, t, r);
      }
      if (this._serverCapabilities = s.discover.capabilities, this._serverVersion = ic(s.discover), this._cache.setServerIdentity(this._deriveServerIdentity(transport_2)), this._instructions = s.discover.instructions, this._discoverResult = s.discover, this._negotiatedProtocolVersion = s.version, transport_2.setProtocolVersion) transport_2.setProtocolVersion(s.version);
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
        n = (_supportedProtocolVersionsOption && rs(_supportedProtocolVersionsOption).length > 0 ? rs(_supportedProtocolVersionsOption) : an).find(item => discover_2.supportedVersions.includes(item));
      if (n === void 0) throw new Ks(Ls.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
      if (await super.connect(e), this._discoverResult = discover_2, this._serverCapabilities = discover_2.capabilities, this._serverVersion = ic(discover_2), this._cache.setServerIdentity(this._deriveServerIdentity(e)), this._instructions = discover_2.instructions, this._negotiatedProtocolVersion = n, e.setProtocolVersion?.(n), this._listChangedConfig) try {
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
      return Ge(_negotiatedProtocolVersion_3) ? "modern" : "legacy";
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
          if (!this._serverCapabilities?.logging) throw new Ks(Ls.CapabilityNotSupported, `Server does not support logging (required for ${e})`);
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._serverCapabilities?.prompts) throw new Ks(Ls.CapabilityNotSupported, `Server does not support prompts (required for ${e})`);
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
        case "resources/subscribe":
        case "resources/unsubscribe":
          if (!this._serverCapabilities?.resources) throw new Ks(Ls.CapabilityNotSupported, `Server does not support resources (required for ${e})`);
          if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new Ks(Ls.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e})`);
          break;
        case "tools/call":
        case "tools/list":
          if (!this._serverCapabilities?.tools) throw new Ks(Ls.CapabilityNotSupported, `Server does not support tools (required for ${e})`);
          break;
        case "completion/complete":
          if (!this._serverCapabilities?.completions) throw new Ks(Ls.CapabilityNotSupported, `Server does not support completions (required for ${e})`);
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
          if (!this._capabilities.roots?.listChanged) throw new Ks(Ls.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e})`);
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
          if (!this._capabilities.sampling) throw new Ks(Ls.CapabilityNotSupported, `Client does not support sampling capability (required for ${e})`);
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation) throw new Ks(Ls.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e})`);
          break;
        case "roots/list":
          if (!this._capabilities.roots) throw new Ks(Ls.CapabilityNotSupported, `Client does not support roots capability (required for ${e})`);
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
      }, Gqe, e);
      return this._discoverResult = t, t;
    }
    async complete(params_35, t) {
      return this.request({
        method: "completion/complete",
        params: params_35
      }, t);
    }
    async setLoggingLevel(level_2, t) {
      return this.request({
        method: "logging/setLevel",
        params: {
          level: level_2
        }
      }, t);
    }
    async getPrompt(params_36, t) {
      return this.request({
        method: "prompts/get",
        params: params_36
      }, t);
    }
    async listPrompts(params_37, t) {
      if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities) return console.debug("Client.listPrompts() called but server does not advertise prompts capability - returning empty list"), {
        prompts: []
      };
      if (params_37?.cursor !== void 0) return this.request({
        method: "prompts/list",
        params: params_37
      }, t);
      let r = await this._serveFromCache("prompts/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("prompts/list", params_37, t, (s, a) => s.prompts.push(...a.prompts));
    }
    async listResources(params_38, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResources() called but server does not advertise resources capability - returning empty list"), {
        resources: []
      };
      if (params_38?.cursor !== void 0) return this.request({
        method: "resources/list",
        params: params_38
      }, t);
      let r = await this._serveFromCache("resources/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/list", params_38, t, (s, a) => s.resources.push(...a.resources));
    }
    async listResourceTemplates(params_39, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list"), {
        resourceTemplates: []
      };
      if (params_39?.cursor !== void 0) return this.request({
        method: "resources/templates/list",
        params: params_39
      }, t);
      let r = await this._serveFromCache("resources/templates/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/templates/list", params_39, t, (s, a) => s.resourceTemplates.push(...a.resourceTemplates));
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
        if (this._listMaxPages !== 0 && m >= this._listMaxPages) throw new Ks(Ls.ListPaginationExceeded, `${method_9}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, {
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
    _freshness(e, params_40) {
      let r = e,
        s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs,
        scope_7 = r.cacheScope === "public" ? "public" : "private";
      return {
        expiresAt: this._cache.now() + Math.min(Math.max(0, s), Gd),
        scope: scope_7,
        params: params_40
      };
    }
    async _serveFromCache(e, t, r) {
      if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
      let s = await this._cache.read(e, t).catch(a => void this._reportStoreError(a));
      if (s !== void 0) {
        if (r?.signal?.aborted) {
          let reason_3 = r.signal.reason;
          throw reason_3 instanceof Ks ? reason_3 : new Ks(Ls.RequestTimeout, String(reason_3));
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
      return r === void 0 ? void 0 : hn(r.inputSchema);
    }
    async readResource(params_41, t) {
      let r = await this._serveFromCache("resources/read", params_41.uri, t);
      if (r !== void 0) return r;
      let s = this._cache.captureGeneration("resources/read", params_41.uri),
        a = await this.request({
          method: "resources/read",
          params: params_41
        }, t);
      if (t?.cacheMode !== "bypass") {
        let n = this._freshness(a, params_41.uri);
        if (n.expiresAt > this._cache.now()) await this._cache.write("resources/read", a, s, n);else if (t?.cacheMode === "refresh") await this._cache.evictKey("resources/read", params_41.uri);
      }
      return a;
    }
    async subscribeResource(params_42, t) {
      return this.request({
        method: "resources/subscribe",
        params: params_42
      }, t);
    }
    async unsubscribeResource(params_43, t) {
      return this.request({
        method: "resources/unsubscribe",
        params: params_43
      }, t);
    }
    async listen(notifications_2, t) {
      if (this.transport === void 0) throw new Ks(Ls.NotConnected, "Not connected");
      let r = this._negotiatedProtocolVersion;
      if (r === void 0 || !Ge(r)) throw new Ks(Ls.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, {
        method: "subscriptions/listen",
        protocolVersion: r
      });
      if (t?.signal?.aborted) {
        let reason_4 = t.signal.reason;
        throw reason_4 instanceof Ks ? reason_4 : new Ks(Ls.RequestTimeout, String(reason_4));
      }
      let abortController_4 = new AbortController(),
        a = `listen:${this._nextListenId++}`,
        n = "opening",
        i,
        l,
        c,
        d,
        promise_2 = new Promise((g, f) => {
          c = g, d = f;
        });
      promise_2.catch(() => {});
      let _,
        E = new Promise(g => {
          _ = g;
        }),
        settle = g => {
          if (n === "closed") return;
          let f = n === "opening";
          if (i !== void 0) clearTimeout(i), i = void 0;
          if ("ack" in g) {
            n = "open", c(g.ack);
            return;
          }
          if (n = "closed", l !== void 0) t?.signal?.removeEventListener("abort", l);
          if (this._listenState.delete(a), abortController_4.abort(), _(g.cause), f) d(g.error ?? new Ks(Ls.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
        },
        y = async () => {
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
          }), await y();
        };
      this._listenState.set(a, {
        settle: settle
      });
      let timeout_3 = t?.timeout ?? ss;
      if (i = setTimeout(() => {
        settle({
          cause: "remote",
          error: new Ks(Ls.RequestTimeout, "subscriptions/listen ack timed out", {
            timeout: timeout_3
          })
        }), y().catch(() => {});
      }, timeout_3), t?.signal) {
        let g = t.signal;
        l = () => {
          if (n === "closed") return;
          let reason_5 = g.reason;
          settle({
            cause: "local",
            error: reason_5 instanceof Error ? reason_5 : Error(String(reason_5 ?? "Aborted"))
          }), y().catch(() => {});
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
          notifications: notifications_2
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
        closed: E
      };
    }
    get autoOpenedSubscription() {
      return this._autoOpenedSubscription;
    }
    _onnotification(e, t) {
      let r = Object.hasOwn(cc, e.method) ? cc[e.method] : void 0;
      if (e.method === "notifications/resources/updated") {
        let s = e.params?.uri;
        if (typeof s === "string") this._cache.evictKey("resources/read", s);
      } else if (r !== void 0) for (let s of r) this._cache.evict(s);
      if (e.method === "notifications/subscriptions/acknowledged") {
        let s = e.params?._meta?.[vr],
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
        if (H_e(e)) r.settle({
          cause: "remote",
          error: ed.fromError(e.error.code, e.error.message, e.error.data)
        });else r.settle({
          cause: "graceful",
          error: new Ks(Ls.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging")
        });
        return;
      }
      super._onresponse(e);
    }
    _onclose() {
      if (this._listenState.size > 0) {
        let error_8 = new Ks(Ls.ConnectionClosed, "Connection closed");
        for (let t of this._listenState.values()) t.settle({
          cause: "remote",
          error: error_8
        });
        this._listenState.clear();
      }
      super._onclose();
    }
    async callTool(params_44, t) {
      let r = this.getProtocolEra() === "modern" && tc() !== "browser",
        s = async () => {
          if (!r) return t;
          let c;
          try {
            c = await this._resolveXMcpHeaderScan(params_44.name, t?.toolDefinition);
          } catch (error) {
            this._reportStoreError(error);
          }
          if (!c?.valid || c.declarations.length === 0) return t;
          let d = _i(c.declarations, params_44.arguments);
          return Object.keys(d).length === 0 ? t : {
            ...t,
            headers: {
              ...t?.headers,
              ...d
            }
          };
        },
        a = t?.toolDefinition === void 0 ? await this._cache.outputValidator(params_44.name, c => this._compileOutputValidator(c)).catch(c => void this._reportStoreError(c)) : this._compileOutputValidator(t.toolDefinition),
        n = () => {
          if (a === void 0 || a.ok) return;
          let compileError = a.compileError,
            d = (compileError instanceof Error ? compileError.message : String(compileError)).slice(0, 200);
          throw new ed(Mi.InvalidParams, `Tool '${params_44.name}' has an invalid outputSchema: ${d}`);
        };
      n();
      let i;
      try {
        i = await this.request({
          method: "tools/call",
          params: params_44
        }, await s());
      } catch (error) {
        let d = error instanceof ed && error.code === Jt;
        if (!r || !d || t?.toolDefinition !== void 0) throw error;
        let m = {
          signal: t?.signal,
          timeout: t?.timeout,
          cacheMode: "refresh"
        };
        await this._cache.evict("tools/list"), await this.listTools(void 0, m).catch(_ => this._reportStoreError(_)), a = await this._cache.outputValidator(params_44.name, _ => this._compileOutputValidator(_)).catch(_ => void this._reportStoreError(_)), n(), i = await this.request({
          method: "tools/call",
          params: params_44
        }, await s());
      }
      if (t?.allowTask === !0 && i.resultType === "task") return i;
      let l = a !== void 0 && a.ok ? a.validator : void 0;
      if (l) {
        if (i.structuredContent === void 0 && !i.isError) throw new ed(Mi.InvalidRequest, `Tool ${params_44.name} has an output schema but did not return structured content`);
        if (i.structuredContent !== void 0 && !i.isError) try {
          let c = l(i.structuredContent);
          if (!c.valid) throw new ed(Mi.InvalidParams, `Structured content does not match the tool's output schema: ${c.errorMessage}`);
        } catch (error) {
          if (error instanceof ed) throw error;
          throw new ed(Mi.InvalidParams, `Failed to validate structured content: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      return i;
    }
    async listTools(params_45, t) {
      if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities) return console.debug("Client.listTools() called but server does not advertise tools capability - returning empty list"), {
        tools: []
      };
      if (params_45?.cursor !== void 0) {
        let s = await this.request({
          method: "tools/list",
          params: params_45
        }, t);
        return this._excludeInvalidXMcpHeaderTools(s), s;
      }
      let r = await this._serveFromCache("tools/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("tools/list", params_45, t, (s, a) => s.tools.push(...a.tools), s => this._excludeInvalidXMcpHeaderTools(s));
    }
    _excludeInvalidXMcpHeaderTools(e) {
      if (this.getProtocolEra() !== "modern" || !this.transport || rc(this.transport) === "stdio") return;
      let t = e.tools.filter(item => {
        let s = hn(item.inputSchema);
        if (!s.valid) return console.warn(`[mcp-sdk] excluding tool '${item.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${s.reason}`), !1;
        return !0;
      });
      if (t.length !== e.tools.length) e.tools = t;
    }
    _setupListChangedHandler(e, t, r, s) {
      let a = mo(Lr, r);
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
var nar = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SseError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Oe(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Oe(this, e);
    }
    constructor(e, t, r) {
      super(`SSE error: ${t}`);
      this.code = e, this.event = r, bt(this, new.target);
    }
  },
  CCn = class {
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
      if (this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = t?.eventSourceInit, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, hc(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = mc(t.authProvider, {
        skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
      });else this._authProvider = t?.authProvider;
      this._fetch = t?.fetch, this._fetchWithInit = ZKt(t?.fetch, t?.requestInit);
    }
    _last401Response;
    async _commonHeaders() {
      let e = {},
        t = await this._authProvider?.token();
      if (t) e.Authorization = `Bearer ${t}`;
      if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
      let r = ts(this._requestInit?.headers);
      return new Headers({
        ...e,
        ...r
      });
    }
    _startOrAuth() {
      let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
      return new Promise((t, r) => {
        this._eventSource = new Kqe(this._url.href, {
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
                } = fNe(i);
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
            let n = new PP();
            r(n), this.onerror?.(n);
            return;
          }
          let a = new nar(s.code, s.message, s);
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
            n = foe.parse(JSON.parse(a.data));
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
      if (!this._oauthProvider) throw new PP("finishAuth requires an OAuthClientProvider");
      let {
        authorizationCode: authorizationCode_6,
        iss: iss_7
      } = await pc(e, t, this._oauthProvider, this._url, {
        fetchFn: this._fetchWithInit,
        resourceMetadataUrl: this._resourceMetadataUrl
      });
      if ((await GEt(this._oauthProvider, {
        serverUrl: this._url,
        authorizationCode: authorizationCode_6,
        iss: iss_7,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
        skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
      })) !== "AUTHORIZED") throw new PP("Failed to authorize");
    }
    async close() {
      this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
    }
    async send(e) {
      return this._send(e, !1);
    }
    async _send(e, t) {
      if (!this._endpoint) throw new Ks(Ls.NotConnected, "Not connected");
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
              } = fNe(response);
              this._resourceMetadataUrl = resourceMetadataUrl_6, this._scope = scope_9;
            }
            if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({
              response: response,
              serverUrl: this._url,
              fetchFn: this._fetchWithInit
            }), await response.text?.().catch(() => {}), this._send(e, !0);
            if (await response.text?.().catch(() => {}), t) throw new SE(Ls.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
              status: 401,
              statusText: response.statusText
            });
            throw new PP();
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
  Sh = 1,
  gh = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
  },
  _h = new Set(["authorization", "content-type", "mcp-protocol-version", "mcp-method", "mcp-name", "mcp-session-id"]);
function lc(e, t) {
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
var t4t = class {
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
    if (this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, hc(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = mc(t.authProvider, {
      skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
    });else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = ZKt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._protocolVersion = t?.protocolVersion, this._reconnectionOptions = t?.reconnectionOptions ?? gh, this._reconnectionScheduler = t?.reconnectionScheduler, this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize", this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? Sh);
  }
  async _stepUpAuthorize(e, t) {
    if (this._onInsufficientScope === "throw") throw new Yi({
      requiredScope: e.scope,
      resourceMetadataUrl: e.resourceMetadataUrl,
      errorDescription: e.errorDescription
    });
    if (!this._oauthProvider) throw new Yi({
      requiredScope: e.scope,
      resourceMetadataUrl: e.resourceMetadataUrl,
      errorDescription: e.errorDescription
    });
    if (t >= this._maxStepUpRetries) throw new SE(Ls.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, {
      status: 403,
      statusText: e.statusText ?? "Forbidden",
      text: e.text
    });
    if (e.resourceMetadataUrl) this._resourceMetadataUrl = e.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(),
      scope_10 = yn(this._scope, r?.scope, e.scope);
    this._scope = scope_10;
    let forceReauthorization_2 = Pd(scope_10, r?.scope);
    return GEt(this._oauthProvider, {
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
    let r = ts(this._requestInit?.headers);
    return new Headers({
      ...e,
      ...r
    });
  }
  _applyBodyDerivedHeaders(e, t) {
    if (Array.isArray(t) || !m7(t)) return;
    let r = t.params?._meta?.[Fe];
    if (typeof r !== "string") return;
    e.set("mcp-protocol-version", r), e.set("mcp-method", t.method);
    let params_46 = t.params,
      a = t.method === "resources/read" ? typeof params_46?.uri === "string" ? params_46.uri : void 0 : typeof params_46?.name === "string" ? params_46.name : void 0;
    if (a !== void 0) e.set("mcp-name", ho(a));
    let n = t.method.startsWith("tasks/") && typeof params_46?.taskId === "string" ? params_46.taskId : void 0;
    if (n !== void 0) e.set("mcp-name", ho(n));
  }
  _isModernEnvelopedRequest(e) {
    if (Array.isArray(e) || !m7(e)) return !1;
    let t = e.params?._meta?.[Fe];
    return typeof t === "string" && Ge(t);
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
        signal_3 = requestSignal !== void 0 && c !== void 0 ? lc(c, requestSignal) : requestSignal ?? c,
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
            } = fNe(response_2);
            this._resourceMetadataUrl = resourceMetadataUrl_7, this._scope = yn(this._scope, scope_11);
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({
            response: response_2,
            serverUrl: this._url,
            fetchFn: this._fetchWithInit
          }), await response_2.text?.().catch(() => {}), this._startOrAuthSse(e, !0, r);
          if (await response_2.text?.().catch(() => {}), t) throw new SE(Ls.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
            status: 401,
            statusText: response_2.statusText
          });
          throw new PP();
        }
        if (response_2.status === 403) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_8,
            scope: scope_12,
            error: error_9,
            errorDescription: errorDescription_2
          } = fNe(response_2);
          if (error_9 === "insufficient_scope") {
            let text = await response_2.text?.().catch(() => null);
            if ((await this._stepUpAuthorize({
              scope: scope_12,
              resourceMetadataUrl: resourceMetadataUrl_8,
              errorDescription: errorDescription_2,
              statusText: response_2.statusText,
              text: text
            }, r)) !== "AUTHORIZED") throw new PP();
            return this._startOrAuthSse(e, t, r + 1);
          }
        }
        if (await response_2.text?.().catch(() => {}), response_2.status === 405) {
          e.onRequestStreamEnd?.();
          return;
        }
        throw new SE(Ls.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${response_2.statusText}`, {
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
        let E = e.pipeThrough(new TextDecoderStream()).pipeThrough(new l4t({
          onRetry: P => {
            this._serverRetryMs = P;
          }
        })).getReader();
        while (!0) {
          let {
            value: value_4,
            done: done
          } = await E.read();
          if (done) break;
          if (value_4.id) resumptionToken_3 = value_4.id, d = !0, onresumptiontoken_2?.(value_4.id);
          if (!value_4.data) continue;
          if (!value_4.event || value_4.event === "message") try {
            let b = foe.parse(JSON.parse(value_4.data));
            if (CRe(b) || H_e(b)) {
              if (m = !0, replayMessageId !== void 0) b.id = replayMessageId;
            }
            this.onmessage?.(b);
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
    if (!this._oauthProvider) throw new PP("finishAuth requires an OAuthClientProvider");
    let {
      authorizationCode: authorizationCode_7,
      iss: iss_8
    } = await pc(e, t, this._oauthProvider, this._url, {
      fetchFn: this._fetchWithInit,
      resourceMetadataUrl: this._resourceMetadataUrl
    });
    if ((await GEt(this._oauthProvider, {
      serverUrl: this._url,
      authorizationCode: authorizationCode_7,
      iss: iss_8,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit,
      skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
    })) !== "AUTHORIZED") throw new PP("Failed to authorize");
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
          replayMessageId: m7(e) ? e.id : void 0,
          requestSignal: t?.requestSignal
        }).catch(p => this.onerror?.(p));
        return;
      }
      let headers_7 = await this._commonHeaders();
      this._applyBodyDerivedHeaders(headers_7, e);
      let l = Array.isArray(e) ? e.some(item => TCn(item)) : TCn(e);
      if (l) headers_7.delete("mcp-session-id");
      if (t?.headers !== void 0) for (let [p, h] of Object.entries(t.headers)) {
        if (_h.has(p.toLowerCase())) continue;
        headers_7.set(p, h);
      }
      headers_7.set("content-type", "application/json");
      let c = [...(headers_7.get("accept")?.split(",").map(p => p.trim().toLowerCase()) ?? []), "application/json", "text/event-stream"];
      headers_7.set("accept", [...new Set(c)].join(", "));
      let d = this._abortController?.signal,
        signal_4 = t?.requestSignal !== void 0 && d !== void 0 ? lc(d, t.requestSignal) : t?.requestSignal ?? d,
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
            } = fNe(response_3);
            this._resourceMetadataUrl = resourceMetadataUrl_9, this._scope = yn(this._scope, scope_13);
          }
          if (this._authProvider.onUnauthorized && !r) return await this._authProvider.onUnauthorized({
            response: response_3,
            serverUrl: this._url,
            fetchFn: this._fetchWithInit
          }), await response_3.text?.().catch(() => {}), this._send(e, t, !0, s);
          if (await response_3.text?.().catch(() => {}), r) throw new SE(Ls.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
            status: 401,
            statusText: response_3.statusText
          });
          throw new PP();
        }
        let text_2 = await response_3.text?.().catch(() => null);
        if (response_3.status === 403) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_10,
            scope: scope_14,
            error: error_10,
            errorDescription: errorDescription_3
          } = fNe(response_3);
          if (error_10 === "insufficient_scope") {
            if ((await this._stepUpAuthorize({
              scope: scope_14,
              resourceMetadataUrl: resourceMetadataUrl_10,
              errorDescription: errorDescription_3,
              statusText: response_3.statusText,
              text: text_2
            }, s)) !== "AUTHORIZED") throw new PP();
            return this._send(e, t, r, s + 1);
          }
        }
        if (response_3.status === 400 && typeof text_2 === "string" && this._isModernEnvelopedRequest(e)) try {
          let h = foe.parse(JSON.parse(text_2)),
            g = (Array.isArray(e) ? e : [e]).filter(item => m7(item));
          if (H_e(h) && g.some(item => item.id === h.id)) {
            this.onmessage?.(h);
            return;
          }
        } catch {}
        throw new SE(Ls.ClientHttpNotImplemented, `Error POSTing to endpoint: ${text_2}`, {
          status: response_3.status,
          statusText: response_3.statusText,
          text: text_2
        });
      }
      if (response_3.status === 202) {
        if (await response_3.text?.().catch(() => {}), Jir(e)) this._startOrAuthSse({
          resumptionToken: void 0
        }).catch(p => this.onerror?.(p));
        return;
      }
      let P = (Array.isArray(e) ? e : [e]).some(item => "method" in item && "id" in item && item.id !== void 0),
        contentType = response_3.headers.get("content-type"),
        b = Ti(contentType);
      if (P) {
        if (b === "text/event-stream") this._handleSseStream(response_3.body, {
          onresumptiontoken: onresumptiontoken_3,
          requestSignal: t?.requestSignal,
          onRequestStreamEnd: t?.onRequestStreamEnd
        }, !1);else if (b === "application/json") {
          let p = await response_3.json(),
            h = Array.isArray(p) ? p.map(item => foe.parse(item)) : [foe.parse(p)];
          for (let g of h) this.onmessage?.(g);
        } else throw await response_3.text?.().catch(() => {}), new Ks(Ls.ClientHttpUnexpectedContent, `Unexpected content type: ${contentType}`, {
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
      if (await r.text?.().catch(() => {}), !r.ok && r.status !== 405) throw new SE(Ls.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, {
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
export { Krt, GKt, pNe, ECn, VKt, result as xP, foe, Yrt, capabilities_2 as HEt, Xrt, Gqe, $Et, qKt, Vqe, KKt, YKt, XKt, UEt, qqe, JKt, BEt, params_15 as QKt, OAuthMetadataSchema as Jrt, OpenIdProviderDiscoveryMetadataSchema as jEt, OAuthTokensSchema as WEt, OAuthErrorResponseSchema as zEt, moe, $V, Ls, Ks, SE, Mi, ed, m7, Xir, CRe, H_e, TCn, Jir, F9r, Qir, H9r, ZKt, e4t, Qrt, Zir, PP, GEt, fNe, ear, VEt, tar, $9r, Yes, U9r, B9r, nar, CCn, t4t };