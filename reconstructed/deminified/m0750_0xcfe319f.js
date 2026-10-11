// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { rj, o, E, M, uf, ae, C, u, ut, $e, Qo, HJ, fe, z, A, Bs, lp, Bi } from "B:/~BUN/root/chunk-n8qdr73v.js";
var Vpe = "2025-11-25",
  Ofr = "2025-03-26",
  A4 = [Vpe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  kse = "io.modelcontextprotocol/related-task",
  f = "2.0",
  e = lp(t => t !== null && (typeof t === "object" || typeof t === "function")),
  progressToken = $e([o(), E().int()]),
  v = o(),
  ee = ut({
    ttl: E().optional(),
    pollInterval: E().optional()
  }),
  F = u({
    ttl: E().optional()
  }),
  VIn = u({
    taskId: o()
  }),
  j = ut({
    progressToken: progressToken.optional(),
    [kse]: VIn.optional()
  }),
  s = u({
    _meta: j.optional()
  }),
  d = s.extend({
    task: F.optional()
  }),
  Mfr = t => d.safeParse(t).success,
  n = u({
    method: o(),
    params: s.loose().optional()
  }),
  i = u({
    _meta: j.optional()
  }),
  r = u({
    method: o(),
    params: i.loose().optional()
  }),
  result = ut({
    _meta: j.optional()
  }),
  id = $e([o(), E().int()]),
  U = u({
    jsonrpc: A(f),
    id: id,
    ...n.shape
  }).strict(),
  uW = t => U.safeParse(t).success,
  J = u({
    jsonrpc: A(f),
    ...r.shape
  }).strict(),
  KEt = t => J.safeParse(t).success,
  P = u({
    jsonrpc: A(f),
    id: id,
    result: result
  }).strict(),
  f8 = t => P.safeParse(t).success;
var Ps;
(function (t) {
  t[t.ConnectionClosed = -32000] = "ConnectionClosed", t[t.RequestTimeout = -32001] = "RequestTimeout", t[t.ParseError = -32700] = "ParseError", t[t.InvalidRequest = -32600] = "InvalidRequest", t[t.MethodNotFound = -32601] = "MethodNotFound", t[t.InvalidParams = -32602] = "InvalidParams", t[t.InternalError = -32603] = "InternalError", t[t.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Ps || (Ps = {}));
var T = u({
  jsonrpc: A(f),
  id: id.optional(),
  error: u({
    code: E().int(),
    message: o(),
    data: ae().optional()
  })
}).strict();
var qpe = t => T.safeParse(t).success;
var TO = $e([U, J, P, T]),
  oe = $e([P, T]),
  Kpe = result.strict(),
  params = i.extend({
    requestId: id.optional(),
    reason: o().optional()
  }),
  O9t = r.extend({
    method: A("notifications/cancelled"),
    params: params
  }),
  W = u({
    src: o(),
    mimeType: o().optional(),
    sizes: C(o()).optional(),
    theme: z(["light", "dark"]).optional()
  }),
  x = u({
    icons: C(W).optional()
  }),
  l = u({
    name: o(),
    title: o().optional()
  }),
  M9t = l.extend({
    ...l.shape,
    ...x.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  K = HJ(u({
    applyDefaults: M().optional()
  }), fe(o(), ae())),
  Y = Bi(t => {
    if (t && typeof t === "object" && !Array.isArray(t)) {
      if (Object.keys(t).length === 0) return {
        form: {}
      };
    }
    return t;
  }, HJ(u({
    form: K.optional(),
    url: e.optional()
  }), fe(o(), ae()).optional())),
  Q = ut({
    list: e.optional(),
    cancel: e.optional(),
    requests: ut({
      sampling: ut({
        createMessage: e.optional()
      }).optional(),
      elicitation: ut({
        create: e.optional()
      }).optional()
    }).optional()
  }),
  X = ut({
    list: e.optional(),
    cancel: e.optional(),
    requests: ut({
      tools: ut({
        call: e.optional()
      }).optional()
    }).optional()
  }),
  capabilities = u({
    experimental: fe(o(), e).optional(),
    sampling: u({
      context: e.optional(),
      tools: e.optional()
    }).optional(),
    elicitation: Y.optional(),
    roots: u({
      listChanged: M().optional()
    }).optional(),
    tasks: Q.optional(),
    extensions: fe(o(), e).optional()
  }),
  params_2 = s.extend({
    protocolVersion: o(),
    capabilities: capabilities,
    clientInfo: M9t
  }),
  D9t = n.extend({
    method: A("initialize"),
    params: params_2
  }),
  qIn = t => D9t.safeParse(t).success,
  capabilities_2 = u({
    experimental: fe(o(), e).optional(),
    logging: e.optional(),
    completions: e.optional(),
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
    tasks: X.optional(),
    extensions: fe(o(), e).optional()
  }),
  Y2e = result.extend({
    protocolVersion: o(),
    capabilities: capabilities_2,
    serverInfo: M9t,
    instructions: o().optional()
  }),
  L9t = r.extend({
    method: A("notifications/initialized"),
    params: i.optional()
  }),
  Dfr = t => L9t.safeParse(t).success,
  N9t = n.extend({
    method: A("ping"),
    params: s.optional()
  }),
  et = u({
    progress: E(),
    total: Bs(E()),
    message: Bs(o())
  }),
  params_3 = u({
    ...i.shape,
    ...et.shape,
    progressToken: progressToken
  }),
  H9t = r.extend({
    method: A("notifications/progress"),
    params: params_3
  }),
  nt = s.extend({
    cursor: v.optional()
  }),
  h = n.extend({
    params: nt.optional()
  }),
  g = result.extend({
    nextCursor: v.optional()
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
  Ese = result.extend({
    task: task
  }),
  params_4 = i.merge(task),
  D0e = r.extend({
    method: A("notifications/tasks/status"),
    params: params_4
  }),
  F9t = n.extend({
    method: A("tasks/get"),
    params: s.extend({
      taskId: o()
    })
  }),
  $9t = result.merge(task),
  U9t = n.extend({
    method: A("tasks/result"),
    params: s.extend({
      taskId: o()
    })
  }),
  ne = result.loose(),
  B9t = h.extend({
    method: A("tasks/list")
  }),
  j9t = g.extend({
    tasks: C(task)
  }),
  W9t = n.extend({
    method: A("tasks/cancel"),
    params: s.extend({
      taskId: o()
    })
  }),
  Lfr = result.merge(task),
  B = u({
    uri: o(),
    mimeType: Bs(o()),
    _meta: fe(o(), ae()).optional()
  }),
  G = B.extend({
    text: o()
  }),
  k = o().refine(t => {
    try {
      return atob(t), !0;
    } catch {
      return !1;
    }
  }, {
    message: "Invalid Base64 string"
  }),
  D = B.extend({
    blob: k
  }),
  role = z(["user", "assistant"]),
  p = u({
    audience: C(role).optional(),
    priority: E().min(0).max(1).optional(),
    lastModified: rj({
      offset: !0
    }).optional()
  }),
  z9t = u({
    ...l.shape,
    ...x.shape,
    uri: o(),
    description: Bs(o()),
    mimeType: Bs(o()),
    size: Bs(E()),
    annotations: p.optional(),
    _meta: Bs(ut({}))
  }),
  YIn = u({
    ...l.shape,
    ...x.shape,
    uriTemplate: o(),
    description: Bs(o()),
    mimeType: Bs(o()),
    annotations: p.optional(),
    _meta: Bs(ut({}))
  }),
  aWo = h.extend({
    method: A("resources/list")
  }),
  L0e = g.extend({
    resources: C(z9t)
  }),
  lWo = h.extend({
    method: A("resources/templates/list")
  }),
  YEt = g.extend({
    resourceTemplates: C(YIn)
  }),
  q = s.extend({
    uri: o()
  }),
  params_5 = q,
  cWo = n.extend({
    method: A("resources/read"),
    params: params_5
  }),
  XIn = result.extend({
    contents: C($e([G, D]))
  }),
  XEt = r.extend({
    method: A("notifications/resources/list_changed"),
    params: i.optional()
  }),
  params_6 = q,
  ct = n.extend({
    method: A("resources/subscribe"),
    params: params_6
  }),
  params_7 = q,
  pt = n.extend({
    method: A("resources/unsubscribe"),
    params: params_7
  }),
  params_8 = i.extend({
    uri: o()
  }),
  zt = r.extend({
    method: A("notifications/resources/updated"),
    params: params_8
  }),
  dt = u({
    name: o(),
    description: Bs(o()),
    required: Bs(M())
  }),
  JIn = u({
    ...l.shape,
    ...x.shape,
    description: Bs(o()),
    arguments: Bs(C(dt)),
    _meta: Bs(ut({}))
  }),
  dWo = h.extend({
    method: A("prompts/list")
  }),
  JEt = g.extend({
    prompts: C(JIn)
  }),
  params_9 = s.extend({
    name: o(),
    arguments: fe(o(), o()).optional()
  }),
  uWo = n.extend({
    method: A("prompts/get"),
    params: params_9
  }),
  O = u({
    type: A("text"),
    text: o(),
    annotations: p.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  N = u({
    type: A("image"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  I = u({
    type: A("audio"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  ht = u({
    type: A("tool_use"),
    name: o(),
    id: o(),
    input: fe(o(), ae()),
    _meta: fe(o(), ae()).optional()
  }),
  gt = u({
    type: A("resource"),
    resource: $e([G, D]),
    annotations: p.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  St = z9t.extend({
    type: A("resource_link")
  }),
  content = $e([O, N, I, St, gt]),
  bt = u({
    role: role,
    content: content
  }),
  QIn = result.extend({
    description: o().optional(),
    messages: C(bt)
  }),
  QEt = r.extend({
    method: A("notifications/prompts/list_changed"),
    params: i.optional()
  }),
  Rt = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
  }),
  ft = u({
    taskSupport: z(["required", "optional", "forbidden"]).optional()
  }),
  G9t = u({
    ...l.shape,
    ...x.shape,
    description: o().optional(),
    inputSchema: u({
      type: A("object"),
      properties: fe(o(), e).optional(),
      required: C(o()).optional()
    }).catchall(ae()),
    outputSchema: u({
      type: A("object"),
      properties: fe(o(), e).optional(),
      required: C(o()).optional()
    }).catchall(ae()).optional(),
    annotations: Rt.optional(),
    execution: ft.optional(),
    _meta: fe(o(), ae()).optional()
  }),
  D7 = h.extend({
    method: A("tools/list")
  }),
  utt = g.extend({
    tools: C(G9t)
  }),
  CG = result.extend({
    content: C(content).default([]),
    structuredContent: fe(o(), ae()).optional(),
    isError: M().optional()
  }),
  se = CG.or(result.extend({
    toolResult: ae()
  })),
  params_10 = d.extend({
    name: o(),
    arguments: fe(o(), ae()).optional()
  }),
  RG = n.extend({
    method: A("tools/call"),
    params: params_10
  }),
  ZEt = r.extend({
    method: A("notifications/tools/list_changed"),
    params: i.optional()
  }),
  Nfr = u({
    autoRefresh: M().default(!0),
    debounceMs: E().int().nonnegative().default(300)
  }),
  level = z(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  params_11 = s.extend({
    level: level
  }),
  ZIn = n.extend({
    method: A("logging/setLevel"),
    params: params_11
  }),
  params_12 = i.extend({
    level: level,
    logger: o().optional(),
    data: ae()
  }),
  Tt = r.extend({
    method: A("notifications/message"),
    params: params_12
  }),
  kt = u({
    name: o().optional()
  }),
  qt = u({
    hints: C(kt).optional(),
    costPriority: E().min(0).max(1).optional(),
    speedPriority: E().min(0).max(1).optional(),
    intelligencePriority: E().min(0).max(1).optional()
  }),
  Ct = u({
    mode: z(["auto", "required", "none"]).optional()
  }),
  Ot = u({
    type: A("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: C(content).default([]),
    structuredContent: u({}).loose().optional(),
    isError: M().optional(),
    _meta: fe(o(), ae()).optional()
  }),
  content_2 = Qo("type", [O, N, I]),
  R = Qo("type", [O, N, I, ht, Ot]),
  It = u({
    role: role,
    content: $e([R, C(R)]),
    _meta: fe(o(), ae()).optional()
  }),
  params_13 = d.extend({
    messages: C(It),
    modelPreferences: qt.optional(),
    systemPrompt: o().optional(),
    includeContext: z(["none", "thisServer", "allServers"]).optional(),
    temperature: E().optional(),
    maxTokens: E().int(),
    stopSequences: C(o()).optional(),
    metadata: e.optional(),
    tools: C(G9t).optional(),
    toolChoice: Ct.optional()
  }),
  eOn = n.extend({
    method: A("sampling/createMessage"),
    params: params_13
  }),
  N0e = result.extend({
    model: o(),
    stopReason: Bs(z(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: role,
    content: content_2
  }),
  ptt = result.extend({
    model: o(),
    stopReason: Bs(z(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: role,
    content: $e([R, C(R)])
  }),
  Lt = u({
    type: A("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
  }),
  _t = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: E().optional(),
    maxLength: E().optional(),
    format: z(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  wt = u({
    type: z(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: E().optional(),
    maximum: E().optional(),
    default: E().optional()
  }),
  Mt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    default: o().optional()
  }),
  vt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: C(u({
      const: o(),
      title: o()
    })),
    default: o().optional()
  }),
  Ut = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    enumNames: C(o()).optional(),
    default: o().optional()
  }),
  At = $e([Mt, vt]),
  Jt = u({
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
  Bt = u({
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
  Gt = $e([Jt, Bt]),
  Dt = $e([Ut, At, Gt]),
  Vt = $e([Dt, Lt, _t, wt]),
  Ft = d.extend({
    mode: A("form").optional(),
    message: o(),
    requestedSchema: u({
      type: A("object"),
      properties: fe(o(), Vt),
      required: C(o()).optional()
    })
  }),
  tOn = d.extend({
    mode: A("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
  }),
  params_14 = $e([Ft, tOn]),
  Lwe = n.extend({
    method: A("elicitation/create"),
    params: params_14
  }),
  params_15 = i.extend({
    elicitationId: o()
  }),
  ftt = r.extend({
    method: A("notifications/elicitation/complete"),
    params: params_15
  }),
  Nwe = result.extend({
    action: z(["accept", "decline", "cancel"]),
    content: Bi(t => t === null ? void 0 : t, fe(o(), $e([o(), E(), M(), C(o())])).optional())
  }),
  Wt = u({
    type: A("ref/resource"),
    uri: o()
  });
var Kt = u({
    type: A("ref/prompt"),
    name: o()
  }),
  params_16 = s.extend({
    ref: $e([Kt, Wt]),
    argument: u({
      name: o(),
      value: o()
    }),
    context: u({
      arguments: fe(o(), o()).optional()
    }).optional()
  }),
  pWo = n.extend({
    method: A("completion/complete"),
    params: params_16
  });
function W4o(t) {
  if (t.params.ref.type !== "ref/prompt") throw TypeError(`Expected CompleteRequestPrompt, but got ${t.params.ref.type}`);
}
function z4o(t) {
  if (t.params.ref.type !== "ref/resource") throw TypeError(`Expected CompleteRequestResourceTemplate, but got ${t.params.ref.type}`);
}
var nOn = result.extend({
    completion: ut({
      values: C(o()).max(100),
      total: Bs(E().int()),
      hasMore: Bs(M())
    })
  }),
  Qt = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: fe(o(), ae()).optional()
  }),
  rOn = n.extend({
    method: A("roots/list"),
    params: s.optional()
  }),
  oOn = result.extend({
    roots: C(Qt)
  }),
  Xt = r.extend({
    method: A("notifications/roots/list_changed"),
    params: i.optional()
  }),
  ie = $e([N9t, D9t, pWo, ZIn, uWo, dWo, aWo, lWo, cWo, ct, pt, RG, D7, F9t, U9t, B9t, W9t]),
  re = $e([O9t, H9t, L9t, Xt, D0e]),
  ce = $e([Kpe, N0e, ptt, Nwe, oOn, $9t, j9t, Ese]),
  le = $e([N9t, eOn, Lwe, rOn, F9t, U9t, B9t, W9t]),
  pe = $e([O9t, H9t, Tt, zt, XEt, ZEt, QEt, D0e, ftt]),
  me = $e([Kpe, Y2e, nOn, QIn, JEt, L0e, YEt, XIn, CG, utt, $9t, j9t, Ese]);
class McpError extends Error {
  constructor(t, c, m) {
    super(`MCP error ${t}: ${c}`);
    this.code = t, this.data = m, this.name = "McpError";
  }
  static fromError(t, c, m) {
    if (t === Ps.UrlElicitationRequired && m) {
      let _ = m;
      if (_.elicitations) return new V(_.elicitations, c);
    }
    return new McpError(t, c, m);
  }
}
class V extends McpError {
  constructor(elicitations, c = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
    super(Ps.UrlElicitationRequired, c, {
      elicitations: elicitations
    });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}
export { Vpe, Ofr, A4, kse, VIn, Mfr, uW, KEt, f8, Ps, qpe, TO, Kpe, O9t, M9t, D9t, qIn, capabilities_2 as KIn, Y2e, L9t, Dfr, N9t, H9t, Ese, D0e, F9t, $9t, U9t, B9t, j9t, W9t, Lfr, z9t, YIn, aWo, L0e, lWo, YEt, cWo, XIn, XEt, JIn, dWo, JEt, uWo, QIn, QEt, G9t, D7, utt, CG, RG, ZEt, Nfr, level as eTt, ZIn, eOn, N0e, ptt, tOn, Lwe, ftt, Nwe, pWo, W4o, z4o, nOn, rOn, oOn, McpError as bs };