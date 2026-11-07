// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hH } from "B:/~BUN/root/chunk-vxnm6skh.js";
import { o, E, I, Ih, oe, C, u, xt, Be, Dr, oxe, me, B, T, rl, Ep, gl } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var n1e = "2025-11-25",
  H5o = "2025-03-26",
  Gle = [n1e, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  fIe = "io.modelcontextprotocol/related-task",
  R = "2.0",
  e = Ep(t => t !== null && (typeof t === "object" || typeof t === "function")),
  progressToken = Be([o(), E().int()]),
  v = o(),
  ee = xt({
    ttl: E().optional(),
    pollInterval: E().optional()
  }),
  F = u({
    ttl: E().optional()
  }),
  $5r = u({
    taskId: o()
  }),
  y = xt({
    progressToken: progressToken.optional(),
    [fIe]: $5r.optional()
  }),
  s = u({
    _meta: y.optional()
  }),
  z = s.extend({
    task: F.optional()
  }),
  $5o = t => z.safeParse(t).success,
  n = u({
    method: o(),
    params: s.loose().optional()
  }),
  i = u({
    _meta: y.optional()
  }),
  r = u({
    method: o(),
    params: i.loose().optional()
  }),
  result = xt({
    _meta: y.optional()
  }),
  id = Be([o(), E().int()]),
  U = u({
    jsonrpc: T(R),
    id: id,
    ...n.shape
  }).strict(),
  bQ = t => U.safeParse(t).success,
  A = u({
    jsonrpc: T(R),
    ...r.shape
  }).strict(),
  Jwn = t => A.safeParse(t).success,
  j = u({
    jsonrpc: T(R),
    id: id,
    result: result
  }).strict(),
  ige = t => j.safeParse(t).success;
var ja;
(function (t) {
  t[t.ConnectionClosed = -32000] = "ConnectionClosed", t[t.RequestTimeout = -32001] = "RequestTimeout", t[t.ParseError = -32700] = "ParseError", t[t.InvalidRequest = -32600] = "InvalidRequest", t[t.MethodNotFound = -32601] = "MethodNotFound", t[t.InvalidParams = -32602] = "InvalidParams", t[t.InternalError = -32603] = "InternalError", t[t.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(ja || (ja = {}));
var P = u({
  jsonrpc: T(R),
  id: id.optional(),
  error: u({
    code: E().int(),
    message: o(),
    data: oe().optional()
  })
}).strict();
var r1e = t => P.safeParse(t).success;
var eW = Be([U, A, j, P]),
  ne = Be([j, P]),
  o1e = result.strict(),
  params = i.extend({
    requestId: id.optional(),
    reason: o().optional()
  }),
  nrr = r.extend({
    method: T("notifications/cancelled"),
    params: params
  }),
  W = u({
    src: o(),
    mimeType: o().optional(),
    sizes: C(o()).optional(),
    theme: B(["light", "dark"]).optional()
  }),
  d = u({
    icons: C(W).optional()
  }),
  l = u({
    name: o(),
    title: o().optional()
  }),
  rrr = l.extend({
    ...l.shape,
    ...d.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  K = oxe(u({
    applyDefaults: I().optional()
  }), me(o(), oe())),
  Y = gl(t => {
    if (t && typeof t === "object" && !Array.isArray(t)) {
      if (Object.keys(t).length === 0) return {
        form: {}
      };
    }
    return t;
  }, oxe(u({
    form: K.optional(),
    url: e.optional()
  }), me(o(), oe()).optional())),
  Q = xt({
    list: e.optional(),
    cancel: e.optional(),
    requests: xt({
      sampling: xt({
        createMessage: e.optional()
      }).optional(),
      elicitation: xt({
        create: e.optional()
      }).optional()
    }).optional()
  }),
  X = xt({
    list: e.optional(),
    cancel: e.optional(),
    requests: xt({
      tools: xt({
        call: e.optional()
      }).optional()
    }).optional()
  }),
  capabilities = u({
    experimental: me(o(), e).optional(),
    sampling: u({
      context: e.optional(),
      tools: e.optional()
    }).optional(),
    elicitation: Y.optional(),
    roots: u({
      listChanged: I().optional()
    }).optional(),
    tasks: Q.optional(),
    extensions: me(o(), e).optional()
  }),
  params_2 = s.extend({
    protocolVersion: o(),
    capabilities: capabilities,
    clientInfo: rrr
  }),
  orr = n.extend({
    method: T("initialize"),
    params: params_2
  }),
  U5r = t => orr.safeParse(t).success,
  capabilities_2 = u({
    experimental: me(o(), e).optional(),
    logging: e.optional(),
    completions: e.optional(),
    prompts: u({
      listChanged: I().optional()
    }).optional(),
    resources: u({
      subscribe: I().optional(),
      listChanged: I().optional()
    }).optional(),
    tools: u({
      listChanged: I().optional()
    }).optional(),
    tasks: X.optional(),
    extensions: me(o(), e).optional()
  }),
  CRt = result.extend({
    protocolVersion: o(),
    capabilities: capabilities_2,
    serverInfo: rrr,
    instructions: o().optional()
  }),
  srr = r.extend({
    method: T("notifications/initialized"),
    params: i.optional()
  }),
  U5o = t => srr.safeParse(t).success,
  irr = n.extend({
    method: T("ping"),
    params: s.optional()
  }),
  et = u({
    progress: E(),
    total: rl(E()),
    message: rl(o())
  }),
  params_3 = u({
    ...i.shape,
    ...et.shape,
    progressToken: progressToken
  }),
  arr = r.extend({
    method: T("notifications/progress"),
    params: params_3
  }),
  nt = s.extend({
    cursor: v.optional()
  }),
  x = n.extend({
    params: nt.optional()
  }),
  h = result.extend({
    nextCursor: v.optional()
  }),
  status = B(["working", "input_required", "completed", "failed", "cancelled"]),
  task = u({
    taskId: o(),
    status: status,
    ttl: Be([E(), Ih()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: rl(E()),
    statusMessage: rl(o())
  }),
  pIe = result.extend({
    task: task
  }),
  params_4 = i.merge(task),
  Qwn = r.extend({
    method: T("notifications/tasks/status"),
    params: params_4
  }),
  lrr = n.extend({
    method: T("tasks/get"),
    params: s.extend({
      taskId: o()
    })
  }),
  drr = result.merge(task),
  crr = n.extend({
    method: T("tasks/result"),
    params: s.extend({
      taskId: o()
    })
  }),
  ae = result.loose(),
  urr = x.extend({
    method: T("tasks/list")
  }),
  frr = h.extend({
    tasks: C(task)
  }),
  prr = n.extend({
    method: T("tasks/cancel"),
    params: s.extend({
      taskId: o()
    })
  }),
  B5o = result.merge(task),
  J = u({
    uri: o(),
    mimeType: rl(o()),
    _meta: me(o(), oe()).optional()
  }),
  G = J.extend({
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
  D = J.extend({
    blob: k
  }),
  role = B(["user", "assistant"]),
  p = u({
    audience: C(role).optional(),
    priority: E().min(0).max(1).optional(),
    lastModified: Be([hH({
      offset: !0
    }), hH({
      offset: !0,
      precision: -1
    })]).optional()
  }),
  mrr = u({
    ...l.shape,
    ...d.shape,
    uri: o(),
    description: rl(o()),
    mimeType: rl(o()),
    size: rl(E()),
    annotations: p.optional(),
    _meta: rl(xt({}))
  }),
  j5r = u({
    ...l.shape,
    ...d.shape,
    uriTemplate: o(),
    description: rl(o()),
    mimeType: rl(o()),
    annotations: p.optional(),
    _meta: rl(xt({}))
  }),
  caa = x.extend({
    method: T("resources/list")
  }),
  Aat = h.extend({
    resources: C(mrr)
  }),
  uaa = x.extend({
    method: T("resources/templates/list")
  }),
  Zwn = h.extend({
    resourceTemplates: C(j5r)
  }),
  q = s.extend({
    uri: o()
  }),
  params_5 = q,
  faa = n.extend({
    method: T("resources/read"),
    params: params_5
  }),
  W5r = result.extend({
    contents: C(Be([G, D]))
  }),
  ekn = r.extend({
    method: T("notifications/resources/list_changed"),
    params: i.optional()
  }),
  params_6 = q,
  ct = n.extend({
    method: T("resources/subscribe"),
    params: params_6
  }),
  params_7 = q,
  pt = n.extend({
    method: T("resources/unsubscribe"),
    params: params_7
  }),
  params_8 = i.extend({
    uri: o()
  }),
  zt = r.extend({
    method: T("notifications/resources/updated"),
    params: params_8
  }),
  ut = u({
    name: o(),
    description: rl(o()),
    required: rl(I())
  }),
  z5r = u({
    ...l.shape,
    ...d.shape,
    description: rl(o()),
    arguments: rl(C(ut)),
    _meta: rl(xt({}))
  }),
  paa = x.extend({
    method: T("prompts/list")
  }),
  tkn = h.extend({
    prompts: C(z5r)
  }),
  params_9 = s.extend({
    name: o(),
    arguments: me(o(), o()).optional()
  }),
  maa = n.extend({
    method: T("prompts/get"),
    params: params_9
  }),
  O = u({
    type: T("text"),
    text: o(),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  N = u({
    type: T("image"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  L = u({
    type: T("audio"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  ht = u({
    type: T("tool_use"),
    name: o(),
    id: o(),
    input: me(o(), oe()),
    _meta: me(o(), oe()).optional()
  }),
  gt = u({
    type: T("resource"),
    resource: Be([G, D]),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  St = mrr.extend({
    type: T("resource_link")
  }),
  content = Be([O, N, L, St, gt]),
  bt = u({
    role: role,
    content: content
  }),
  G5r = result.extend({
    description: o().optional(),
    messages: C(bt)
  }),
  nkn = r.extend({
    method: T("notifications/prompts/list_changed"),
    params: i.optional()
  }),
  Rt = u({
    title: o().optional(),
    readOnlyHint: I().optional(),
    destructiveHint: I().optional(),
    idempotentHint: I().optional(),
    openWorldHint: I().optional()
  }),
  ft = u({
    taskSupport: B(["required", "optional", "forbidden"]).optional()
  }),
  hrr = u({
    ...l.shape,
    ...d.shape,
    description: o().optional(),
    inputSchema: u({
      type: T("object"),
      properties: me(o(), e).optional(),
      required: C(o()).optional()
    }).catchall(oe()),
    outputSchema: u({
      type: T("object"),
      properties: me(o(), e).optional(),
      required: C(o()).optional()
    }).catchall(oe()).optional(),
    annotations: Rt.optional(),
    execution: ft.optional(),
    _meta: me(o(), oe()).optional()
  }),
  ove = x.extend({
    method: T("tools/list")
  }),
  P4t = h.extend({
    tools: C(hrr)
  }),
  mIe = result.extend({
    content: C(content).default([]),
    structuredContent: me(o(), oe()).optional(),
    isError: I().optional()
  }),
  j5o = mIe.or(result.extend({
    toolResult: oe()
  })),
  params_10 = z.extend({
    name: o(),
    arguments: me(o(), oe()).optional()
  }),
  Jne = n.extend({
    method: T("tools/call"),
    params: params_10
  }),
  rkn = r.extend({
    method: T("notifications/tools/list_changed"),
    params: i.optional()
  }),
  W5o = u({
    autoRefresh: I().default(!0),
    debounceMs: E().int().nonnegative().default(300)
  }),
  level = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  params_11 = s.extend({
    level: level
  }),
  V5r = n.extend({
    method: T("logging/setLevel"),
    params: params_11
  }),
  params_12 = i.extend({
    level: level,
    logger: o().optional(),
    data: oe()
  }),
  Tt = r.extend({
    method: T("notifications/message"),
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
    mode: B(["auto", "required", "none"]).optional()
  }),
  Ot = u({
    type: T("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: C(content).default([]),
    structuredContent: u({}).loose().optional(),
    isError: I().optional(),
    _meta: me(o(), oe()).optional()
  }),
  content_2 = Dr("type", [O, N, L]),
  b = Dr("type", [O, N, L, ht, Ot]),
  It = u({
    role: role,
    content: Be([b, C(b)]),
    _meta: me(o(), oe()).optional()
  }),
  params_13 = z.extend({
    messages: C(It),
    modelPreferences: qt.optional(),
    systemPrompt: o().optional(),
    includeContext: B(["none", "thisServer", "allServers"]).optional(),
    temperature: E().optional(),
    maxTokens: E().int(),
    stopSequences: C(o()).optional(),
    metadata: e.optional(),
    tools: C(hrr).optional(),
    toolChoice: Ct.optional()
  }),
  K5r = n.extend({
    method: T("sampling/createMessage"),
    params: params_13
  }),
  xat = result.extend({
    model: o(),
    stopReason: rl(B(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: role,
    content: content_2
  }),
  O4t = result.extend({
    model: o(),
    stopReason: rl(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: role,
    content: Be([b, C(b)])
  }),
  Lt = u({
    type: T("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: I().optional()
  }),
  _t = u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: E().optional(),
    maxLength: E().optional(),
    format: B(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  wt = u({
    type: B(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: E().optional(),
    maximum: E().optional(),
    default: E().optional()
  }),
  Mt = u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    default: o().optional()
  }),
  vt = u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: C(u({
      const: o(),
      title: o()
    })),
    default: o().optional()
  }),
  Ut = u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    enumNames: C(o()).optional(),
    default: o().optional()
  }),
  At = Be([Mt, vt]),
  Jt = u({
    type: T("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: E().optional(),
    maxItems: E().optional(),
    items: u({
      type: T("string"),
      enum: C(o())
    }),
    default: C(o()).optional()
  }),
  Bt = u({
    type: T("array"),
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
  Gt = Be([Jt, Bt]),
  Dt = Be([Ut, At, Gt]),
  Vt = Be([Dt, Lt, _t, wt]),
  Ft = z.extend({
    mode: T("form").optional(),
    message: o(),
    requestedSchema: u({
      type: T("object"),
      properties: me(o(), Vt),
      required: C(o()).optional()
    })
  }),
  q5r = z.extend({
    mode: T("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
  }),
  params_14 = Be([Ft, q5r]),
  s3e = n.extend({
    method: T("elicitation/create"),
    params: params_14
  }),
  params_15 = i.extend({
    elicitationId: o()
  }),
  I4t = r.extend({
    method: T("notifications/elicitation/complete"),
    params: params_15
  }),
  i3e = result.extend({
    action: B(["accept", "decline", "cancel"]),
    content: gl(t => t === null ? void 0 : t, me(o(), Be([o(), E(), I(), C(o())])).optional())
  }),
  Wt = u({
    type: T("ref/resource"),
    uri: o()
  });
var Kt = u({
    type: T("ref/prompt"),
    name: o()
  }),
  params_16 = s.extend({
    ref: Be([Kt, Wt]),
    argument: u({
      name: o(),
      value: o()
    }),
    context: u({
      arguments: me(o(), o()).optional()
    }).optional()
  }),
  haa = n.extend({
    method: T("completion/complete"),
    params: params_16
  });
function w_a(t) {
  if (t.params.ref.type !== "ref/prompt") throw TypeError(`Expected CompleteRequestPrompt, but got ${t.params.ref.type}`);
}
function k_a(t) {
  if (t.params.ref.type !== "ref/resource") throw TypeError(`Expected CompleteRequestResourceTemplate, but got ${t.params.ref.type}`);
}
var Y5r = result.extend({
    completion: xt({
      values: C(o()).max(100),
      total: rl(E().int()),
      hasMore: rl(I())
    })
  }),
  Qt = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: me(o(), oe()).optional()
  }),
  X5r = n.extend({
    method: T("roots/list"),
    params: s.optional()
  }),
  J5r = result.extend({
    roots: C(Qt)
  }),
  Xt = r.extend({
    method: T("notifications/roots/list_changed"),
    params: i.optional()
  }),
  se = Be([irr, orr, haa, V5r, maa, paa, caa, uaa, faa, ct, pt, Jne, ove, lrr, crr, urr, prr]),
  ie = Be([nrr, arr, srr, Xt, Qwn]),
  re = Be([o1e, xat, O4t, i3e, J5r, drr, frr, pIe]),
  ce = Be([irr, K5r, s3e, X5r, lrr, crr, urr, prr]),
  le = Be([nrr, arr, Tt, zt, ekn, rkn, nkn, Qwn, I4t]),
  pe = Be([o1e, CRt, Y5r, G5r, tkn, Aat, Zwn, W5r, mIe, P4t, drr, frr, pIe]);
class McpError extends Error {
  constructor(t, c, m) {
    super(`MCP error ${t}: ${c}`);
    this.code = t, this.data = m, this.name = "McpError";
  }
  static fromError(t, c, m) {
    if (t === ja.UrlElicitationRequired && m) {
      let w = m;
      if (w.elicitations) return new V(w.elicitations, c);
    }
    return new McpError(t, c, m);
  }
}
class V extends McpError {
  constructor(elicitations, c = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
    super(ja.UrlElicitationRequired, c, {
      elicitations: elicitations
    });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}
export { n1e, H5o, Gle, fIe, $5r, $5o, bQ, Jwn, ige, ja, r1e, eW, o1e, nrr, rrr, orr, U5r, capabilities_2 as B5r, CRt, srr, U5o, irr, arr, pIe, Qwn, lrr, drr, crr, urr, frr, prr, B5o, mrr, j5r, caa, Aat, uaa, Zwn, faa, W5r, ekn, z5r, paa, tkn, maa, G5r, nkn, hrr, ove, P4t, mIe, j5o, Jne, rkn, W5o, level as okn, V5r, K5r, xat, O4t, q5r, s3e, I4t, i3e, haa, w_a, k_a, Y5r, X5r, J5r, McpError as Ea };