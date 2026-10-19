// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  zM
} from "B:/~BUN/root/chunk-pstrqvja.js";
import {
  o,
  v,
  M,
  Sf,
  oe,
  T,
  u,
  _t,
  $e,
  Jr,
  Che,
  fe,
  U,
  C,
  na,
  Jc,
  wa
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var URe = "2025-11-25",
  WJr = "2025-03-26",
  E7 = [URe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  J_e = "io.modelcontextprotocol/related-task",
  R = "2.0",
  e = Jc((t) => t !== null && (typeof t === "object" || typeof t === "function")),
  _ = $e([o(), v().int()]),
  w = o(),
  ee = _t({
    ttl: v().optional(),
    pollInterval: v().optional()
  }),
  F = u({
    ttl: v().optional()
  }),
  ylr = u({
    taskId: o()
  }),
  y = _t({
    progressToken: _.optional(),
    [J_e]: ylr.optional()
  }),
  s = u({
    _meta: y.optional()
  }),
  z = s.extend({
    task: F.optional()
  }),
  zJr = (t) => z.safeParse(t).success,
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
  a = _t({
    _meta: y.optional()
  }),
  f = $e([o(), v().int()]),
  A = u({
    jsonrpc: C(R),
    id: f,
    ...n.shape
  }).strict(),
  xY = (t) => A.safeParse(t).success,
  J = u({
    jsonrpc: C(R),
    ...r.shape
  }).strict(),
  cYt = (t) => J.safeParse(t).success,
  j = u({
    jsonrpc: C(R),
    id: f,
    result: a
  }).strict(),
  koe = (t) => j.safeParse(t).success;
var Di;
(function(t) {
  t[t.ConnectionClosed = -32000] = "ConnectionClosed", t[t.RequestTimeout = -32001] = "RequestTimeout", t[t.ParseError = -32700] = "ParseError", t[t.InvalidRequest = -32600] = "InvalidRequest", t[t.MethodNotFound = -32601] = "MethodNotFound", t[t.InvalidParams = -32602] = "InvalidParams", t[t.InternalError = -32603] = "InternalError", t[t.UrlElicitationRequired = -32042] = "UrlElicitationRequired"
})(Di || (Di = {}));
var P = u({
  jsonrpc: C(R),
  id: f.optional(),
  error: u({
    code: v().int(),
    message: o(),
    data: oe().optional()
  })
}).strict();
var BRe = (t) => P.safeParse(t).success;
var UF = $e([A, J, j, P]),
  ne = $e([j, P]),
  jRe = a.strict(),
  H = i.extend({
    requestId: f.optional(),
    reason: o().optional()
  }),
  sAn = r.extend({
    method: C("notifications/cancelled"),
    params: H
  }),
  W = u({
    src: o(),
    mimeType: o().optional(),
    sizes: T(o()).optional(),
    theme: U(["light", "dark"]).optional()
  }),
  d = u({
    icons: T(W).optional()
  }),
  l = u({
    name: o(),
    title: o().optional()
  }),
  iAn = l.extend({
    ...l.shape,
    ...d.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  K = Che(u({
    applyDefaults: M().optional()
  }), fe(o(), oe())),
  Y = wa((t) => {
    if (t && typeof t === "object" && !Array.isArray(t)) {
      if (Object.keys(t).length === 0) return {
        form: {}
      }
    }
    return t
  }, Che(u({
    form: K.optional(),
    url: e.optional()
  }), fe(o(), oe()).optional())),
  Q = _t({
    list: e.optional(),
    cancel: e.optional(),
    requests: _t({
      sampling: _t({
        createMessage: e.optional()
      }).optional(),
      elicitation: _t({
        create: e.optional()
      }).optional()
    }).optional()
  }),
  X = _t({
    list: e.optional(),
    cancel: e.optional(),
    requests: _t({
      tools: _t({
        call: e.optional()
      }).optional()
    }).optional()
  }),
  Z = u({
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
  tt = s.extend({
    protocolVersion: o(),
    capabilities: Z,
    clientInfo: iAn
  }),
  aAn = n.extend({
    method: C("initialize"),
    params: tt
  }),
  _lr = (t) => aAn.safeParse(t).success,
  blr = u({
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
  Pot = a.extend({
    protocolVersion: o(),
    capabilities: blr,
    serverInfo: iAn,
    instructions: o().optional()
  }),
  lAn = r.extend({
    method: C("notifications/initialized"),
    params: i.optional()
  }),
  GJr = (t) => lAn.safeParse(t).success,
  dAn = n.extend({
    method: C("ping"),
    params: s.optional()
  }),
  et = u({
    progress: v(),
    total: na(v()),
    message: na(o())
  }),
  ot = u({
    ...i.shape,
    ...et.shape,
    progressToken: _
  }),
  cAn = r.extend({
    method: C("notifications/progress"),
    params: ot
  }),
  nt = s.extend({
    cursor: w.optional()
  }),
  x = n.extend({
    params: nt.optional()
  }),
  h = a.extend({
    nextCursor: w.optional()
  }),
  at = U(["working", "input_required", "completed", "failed", "cancelled"]),
  g = u({
    taskId: o(),
    status: at,
    ttl: $e([v(), Sf()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: na(v()),
    statusMessage: na(o())
  }),
  Q_e = a.extend({
    task: g
  }),
  st = i.merge(g),
  uYt = r.extend({
    method: C("notifications/tasks/status"),
    params: st
  }),
  uAn = n.extend({
    method: C("tasks/get"),
    params: s.extend({
      taskId: o()
    })
  }),
  pAn = a.merge(g),
  fAn = n.extend({
    method: C("tasks/result"),
    params: s.extend({
      taskId: o()
    })
  }),
  ae = a.loose(),
  mAn = x.extend({
    method: C("tasks/list")
  }),
  gAn = h.extend({
    tasks: T(g)
  }),
  hAn = n.extend({
    method: C("tasks/cancel"),
    params: s.extend({
      taskId: o()
    })
  }),
  VJr = a.merge(g),
  B = u({
    uri: o(),
    mimeType: na(o()),
    _meta: fe(o(), oe()).optional()
  }),
  G = B.extend({
    text: o()
  }),
  k = o().refine((t) => {
    try {
      return atob(t), !0
    } catch {
      return !1
    }
  }, {
    message: "Invalid Base64 string"
  }),
  D = B.extend({
    blob: k
  }),
  S = U(["user", "assistant"]),
  p = u({
    audience: T(S).optional(),
    priority: v().min(0).max(1).optional(),
    lastModified: $e([zM({
      offset: !0
    }), zM({
      offset: !0,
      precision: -1
    })]).optional()
  }),
  yAn = u({
    ...l.shape,
    ...d.shape,
    uri: o(),
    description: na(o()),
    mimeType: na(o()),
    size: na(v()),
    annotations: p.optional(),
    _meta: na(_t({}))
  }),
  Slr = u({
    ...l.shape,
    ...d.shape,
    uriTemplate: o(),
    description: na(o()),
    mimeType: na(o()),
    annotations: p.optional(),
    _meta: na(_t({}))
  }),
  u8s = x.extend({
    method: C("resources/list")
  }),
  pKe = h.extend({
    resources: T(yAn)
  }),
  p8s = x.extend({
    method: C("resources/templates/list")
  }),
  pYt = h.extend({
    resourceTemplates: T(Slr)
  }),
  q = s.extend({
    uri: o()
  }),
  it = q,
  f8s = n.extend({
    method: C("resources/read"),
    params: it
  }),
  wlr = a.extend({
    contents: T($e([G, D]))
  }),
  fYt = r.extend({
    method: C("notifications/resources/list_changed"),
    params: i.optional()
  }),
  rt = q,
  ct = n.extend({
    method: C("resources/subscribe"),
    params: rt
  }),
  lt = q,
  pt = n.extend({
    method: C("resources/unsubscribe"),
    params: lt
  }),
  mt = i.extend({
    uri: o()
  }),
  zt = r.extend({
    method: C("notifications/resources/updated"),
    params: mt
  }),
  ut = u({
    name: o(),
    description: na(o()),
    required: na(M())
  }),
  vlr = u({
    ...l.shape,
    ...d.shape,
    description: na(o()),
    arguments: na(T(ut)),
    _meta: na(_t({}))
  }),
  m8s = x.extend({
    method: C("prompts/list")
  }),
  mYt = h.extend({
    prompts: T(vlr)
  }),
  dt = s.extend({
    name: o(),
    arguments: fe(o(), o()).optional()
  }),
  g8s = n.extend({
    method: C("prompts/get"),
    params: dt
  }),
  O = u({
    type: C("text"),
    text: o(),
    annotations: p.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  N = u({
    type: C("image"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  I = u({
    type: C("audio"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  xt = u({
    type: C("tool_use"),
    name: o(),
    id: o(),
    input: fe(o(), oe()),
    _meta: fe(o(), oe()).optional()
  }),
  ht = u({
    type: C("resource"),
    resource: $e([G, D]),
    annotations: p.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  gt = yAn.extend({
    type: C("resource_link")
  }),
  E = $e([O, N, I, gt, ht]),
  St = u({
    role: S,
    content: E
  }),
  klr = a.extend({
    description: o().optional(),
    messages: T(St)
  }),
  gYt = r.extend({
    method: C("notifications/prompts/list_changed"),
    params: i.optional()
  }),
  bt = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
  }),
  Rt = u({
    taskSupport: U(["required", "optional", "forbidden"]).optional()
  }),
  _An = u({
    ...l.shape,
    ...d.shape,
    description: o().optional(),
    inputSchema: u({
      type: C("object"),
      properties: fe(o(), e).optional(),
      required: T(o()).optional()
    }).catchall(oe()),
    outputSchema: u({
      type: C("object"),
      properties: fe(o(), e).optional(),
      required: T(o()).optional()
    }).catchall(oe()).optional(),
    annotations: bt.optional(),
    execution: Rt.optional(),
    _meta: fe(o(), oe()).optional()
  }),
  zce = x.extend({
    method: C("tools/list")
  }),
  MTt = h.extend({
    tools: T(_An)
  }),
  Z_e = a.extend({
    content: T(E).default([]),
    structuredContent: fe(o(), oe()).optional(),
    isError: M().optional()
  }),
  qJr = Z_e.or(a.extend({
    toolResult: oe()
  })),
  ft = z.extend({
    name: o(),
    arguments: fe(o(), oe()).optional()
  }),
  x8 = n.extend({
    method: C("tools/call"),
    params: ft
  }),
  hYt = r.extend({
    method: C("notifications/tools/list_changed"),
    params: i.optional()
  }),
  KJr = u({
    autoRefresh: M().default(!0),
    debounceMs: v().int().nonnegative().default(300)
  }),
  yYt = U(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  yt = s.extend({
    level: yYt
  }),
  Elr = n.extend({
    method: C("logging/setLevel"),
    params: yt
  }),
  jt = i.extend({
    level: yYt,
    logger: o().optional(),
    data: oe()
  }),
  Pt = r.extend({
    method: C("notifications/message"),
    params: jt
  }),
  Tt = u({
    name: o().optional()
  }),
  kt = u({
    hints: T(Tt).optional(),
    costPriority: v().min(0).max(1).optional(),
    speedPriority: v().min(0).max(1).optional(),
    intelligencePriority: v().min(0).max(1).optional()
  }),
  qt = u({
    mode: U(["auto", "required", "none"]).optional()
  }),
  Ct = u({
    type: C("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: T(E).default([]),
    structuredContent: u({}).loose().optional(),
    isError: M().optional(),
    _meta: fe(o(), oe()).optional()
  }),
  Ot = Jr("type", [O, N, I]),
  b = Jr("type", [O, N, I, xt, Ct]),
  Nt = u({
    role: S,
    content: $e([b, T(b)]),
    _meta: fe(o(), oe()).optional()
  }),
  It = z.extend({
    messages: T(Nt),
    modelPreferences: kt.optional(),
    systemPrompt: o().optional(),
    includeContext: U(["none", "thisServer", "allServers"]).optional(),
    temperature: v().optional(),
    maxTokens: v().int(),
    stopSequences: T(o()).optional(),
    metadata: e.optional(),
    tools: T(_An).optional(),
    toolChoice: qt.optional()
  }),
  Tlr = n.extend({
    method: C("sampling/createMessage"),
    params: It
  }),
  fKe = a.extend({
    model: o(),
    stopReason: na(U(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: S,
    content: Ot
  }),
  DTt = a.extend({
    model: o(),
    stopReason: na(U(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: S,
    content: $e([b, T(b)])
  }),
  Et = u({
    type: C("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
  }),
  Lt = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: v().optional(),
    maxLength: v().optional(),
    format: U(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  wt = u({
    type: U(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: v().optional(),
    maximum: v().optional(),
    default: v().optional()
  }),
  Mt = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    default: o().optional()
  }),
  vt = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: T(u({
      const: o(),
      title: o()
    })),
    default: o().optional()
  }),
  Ut = u({
    type: C("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    enumNames: T(o()).optional(),
    default: o().optional()
  }),
  At = $e([Mt, vt]),
  Jt = u({
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
  Bt = u({
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
  Gt = $e([Jt, Bt]),
  Dt = $e([Ut, At, Gt]),
  Vt = $e([Dt, Et, Lt, wt]),
  Ft = z.extend({
    mode: C("form").optional(),
    message: o(),
    requestedSchema: u({
      type: C("object"),
      properties: fe(o(), Vt),
      required: T(o()).optional()
    })
  }),
  Clr = z.extend({
    mode: C("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
  }),
  Ht = $e([Ft, Clr]),
  $Ne = n.extend({
    method: C("elicitation/create"),
    params: Ht
  }),
  $t = i.extend({
    elicitationId: o()
  }),
  LTt = r.extend({
    method: C("notifications/elicitation/complete"),
    params: $t
  }),
  UNe = a.extend({
    action: U(["accept", "decline", "cancel"]),
    content: wa((t) => t === null ? void 0 : t, fe(o(), $e([o(), v(), M(), T(o())])).optional())
  }),
  Wt = u({
    type: C("ref/resource"),
    uri: o()
  });
var Kt = u({
    type: C("ref/prompt"),
    name: o()
  }),
  Yt = s.extend({
    ref: $e([Kt, Wt]),
    argument: u({
      name: o(),
      value: o()
    }),
    context: u({
      arguments: fe(o(), o()).optional()
    }).optional()
  }),
  h8s = n.extend({
    method: C("completion/complete"),
    params: Yt
  });

function Wni(t) {
  if (t.params.ref.type !== "ref/prompt") throw TypeError(`Expected CompleteRequestPrompt, but got ${t.params.ref.type}`)
}

function zni(t) {
  if (t.params.ref.type !== "ref/resource") throw TypeError(`Expected CompleteRequestResourceTemplate, but got ${t.params.ref.type}`)
}
var Rlr = a.extend({
    completion: _t({
      values: T(o()).max(100),
      total: na(v().int()),
      hasMore: na(M())
    })
  }),
  Qt = u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: fe(o(), oe()).optional()
  }),
  Alr = n.extend({
    method: C("roots/list"),
    params: s.optional()
  }),
  xlr = a.extend({
    roots: T(Qt)
  }),
  Xt = r.extend({
    method: C("notifications/roots/list_changed"),
    params: i.optional()
  }),
  se = $e([dAn, aAn, h8s, Elr, g8s, m8s, u8s, p8s, f8s, ct, pt, x8, zce, uAn, fAn, mAn, hAn]),
  ie = $e([sAn, cAn, lAn, Xt, uYt]),
  re = $e([jRe, fKe, DTt, UNe, xlr, pAn, gAn, Q_e]),
  ce = $e([dAn, Tlr, $Ne, Alr, uAn, fAn, mAn, hAn]),
  le = $e([sAn, cAn, Pt, zt, fYt, hYt, gYt, uYt, LTt]),
  pe = $e([jRe, Pot, Rlr, klr, mYt, pKe, pYt, wlr, Z_e, MTt, pAn, gAn, Q_e]);
class gi extends Error {
  constructor(t, c, m) {
    super(`MCP error ${t}: ${c}`);
    this.code = t, this.data = m, this.name = "McpError"
  }
  static fromError(t, c, m) {
    if (t === Di.UrlElicitationRequired && m) {
      let L = m;
      if (L.elicitations) return new V(L.elicitations, c)
    }
    return new gi(t, c, m)
  }
}
class V extends gi {
  constructor(t, c = `URL elicitation${t.length>1?"s":""} required`) {
    super(Di.UrlElicitationRequired, c, {
      elicitations: t
    })
  }
  get elicitations() {
    return this.data?.elicitations ?? []
  }
}
export {
  URe,
  WJr,
  E7,
  J_e,
  ylr,
  zJr,
  xY,
  cYt,
  koe,
  Di,
  BRe,
  UF,
  jRe,
  sAn,
  iAn,
  aAn,
  _lr,
  blr,
  Pot,
  lAn,
  GJr,
  dAn,
  cAn,
  Q_e,
  uYt,
  uAn,
  pAn,
  fAn,
  mAn,
  gAn,
  hAn,
  VJr,
  yAn,
  Slr,
  u8s,
  pKe,
  p8s,
  pYt,
  f8s,
  wlr,
  fYt,
  vlr,
  m8s,
  mYt,
  g8s,
  klr,
  gYt,
  _An,
  zce,
  MTt,
  Z_e,
  qJr,
  x8,
  hYt,
  KJr,
  yYt,
  Elr,
  Tlr,
  fKe,
  DTt,
  Clr,
  $Ne,
  LTt,
  UNe,
  h8s,
  Wni,
  zni,
  Rlr,
  Alr,
  xlr,
  gi
};
