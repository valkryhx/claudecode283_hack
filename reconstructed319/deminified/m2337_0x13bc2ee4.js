// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { cvn } from "B:/~BUN/root/chunk-47qakrcr.js";
import { tlt } from "B:/~BUN/root/chunk-zwc1c4bc.js";
import { dvn } from "B:/~BUN/root/chunk-849qxzy0.js";
import { hH, Dfa } from "B:/~BUN/root/chunk-vxnm6skh.js";
import { KJ, uqe } from "B:/~BUN/root/chunk-9e7wny6c.js";
import { cSt, axo, o, Pea, Wtt, E, I, Ih, tae, oe, C, u, xt, Be, Dr, oxe, me, B, T, rl, $R, gl } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { g5 } from "B:/~BUN/root/chunk-9ewk1qr5.js";
var {
    create: create,
    defineProperty: defineProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    getOwnPropertyNames: getOwnPropertyNames,
    getPrototypeOf: getPrototypeOf
  } = Object,
  Ic = Object.prototype.hasOwnProperty,
  G = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports),
  In = (e, t) => {
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
  Oc = (e, t, r, s) => {
    if (t && typeof t === "object" || typeof t === "function") {
      for (var a = getOwnPropertyNames(t), n = 0, i = a.length, l; n < i; n++) if (l = a[n], !Ic.call(e, l) && l !== r) defineProperty(e, l, {
        get: (c => t[c]).bind(null, l),
        enumerable: !(s = getOwnPropertyDescriptor(t, l)) || s.enumerable
      });
    }
    return e;
  },
  Co = (value, t, r) => (r = value != null ? create(getPrototypeOf(value)) : {}, Oc(t || !value || !value.__esModule ? defineProperty(r, "default", {
    value: value,
    enumerable: !0
  }) : r, value));
var At = "2025-11-25";
var VRt = [At, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  zkn = "io.modelcontextprotocol/related-task",
  Ke = "io.modelcontextprotocol/protocolVersion",
  Lt = "io.modelcontextprotocol/clientInfo",
  h1e = "io.modelcontextprotocol/serverInfo",
  vIe = "io.modelcontextprotocol/clientCapabilities",
  wr = "io.modelcontextprotocol/subscriptionId",
  Ut = "io.modelcontextprotocol/logLevel";
var bt = "2.0";
var dsr = -32601;
function tt(e) {
  if (e.build !== void 0) e.schema = e.build(), e.build = void 0;
  return e.schema;
}
var jc = {
  get: (e, t, r) => Reflect.get(tt(e), t, r),
  has: (e, t) => t in tt(e),
  set: (e, t, r) => Reflect.set(tt(e), t, r),
  defineProperty: (e, t, r) => Reflect.defineProperty(tt(e), t, r),
  deleteProperty: (e, t) => Reflect.deleteProperty(tt(e), t),
  getPrototypeOf: e => Object.getPrototypeOf(tt(e)),
  ownKeys: e => Reflect.ownKeys(tt(e)),
  preventExtensions: () => !1,
  getOwnPropertyDescriptor(e, t) {
    let r = Reflect.getOwnPropertyDescriptor(tt(e), t);
    return r && {
      ...r,
      configurable: !0
    };
  }
};
function A(build) {
  return new Proxy({
    build: build,
    schema: void 0
  }, jc);
}
var rt = $R(() => Be([o(), E(), I(), Ih(), me(o(), rt), C(rt)])),
  pe = A(() => me(o(), rt)),
  ka = A(() => C(rt)),
  progressToken = A(() => Be([o(), E().int()])),
  Er = A(() => o()),
  ko = A(() => u({
    ttl: E().optional()
  })),
  Gkn = A(() => u({
    taskId: o()
  })),
  Pr = A(() => xt({
    progressToken: progressToken.optional(),
    [zkn]: Gkn.optional()
  })),
  ze = A(() => u({
    _meta: Pr.optional()
  })),
  Rt = A(() => ze.extend({
    task: ko.optional()
  })),
  fe = A(() => u({
    method: o(),
    params: ze.loose().optional()
  })),
  Pe = A(() => u({
    _meta: Pr.optional()
  })),
  Te = A(() => u({
    method: o(),
    params: Pe.loose().optional()
  })),
  Tr = A(() => xt({
    get [h1e]() {
      return KRt.optional().catch(void 0);
    }
  })),
  result = A(() => xt({
    _meta: Tr.optional()
  })),
  id_2 = A(() => Be([o(), E().int()])),
  qo = A(() => u({
    jsonrpc: T(bt),
    id: id_2,
    ...fe.shape
  }).strict()),
  Io = A(() => u({
    jsonrpc: T(bt),
    ...Te.shape
  }).strict()),
  Dt = A(() => u({
    jsonrpc: T(bt),
    id: id_2,
    result: result
  }).strict()),
  Cr = A(() => u({
    jsonrpc: T(bt),
    id: id_2.optional(),
    error: u({
      code: E().int(),
      message: o(),
      data: oe().optional()
    })
  }).strict()),
  Jat = A(() => Be([qo, Io, Dt, Cr])),
  qa = A(() => Be([Dt, Cr])),
  kr = A(() => result.strict()),
  params = A(() => Pe.extend({
    requestId: id_2.optional(),
    reason: o().optional()
  })),
  qr = A(() => Te.extend({
    method: T("notifications/cancelled"),
    params: params
  })),
  No = A(() => u({
    src: o(),
    mimeType: o().optional(),
    sizes: C(o()).optional(),
    theme: B(["light", "dark"]).optional()
  })),
  st = A(() => u({
    icons: C(No).optional()
  })),
  He = A(() => u({
    name: o(),
    title: o().optional()
  })),
  KRt = A(() => He.extend({
    ...He.shape,
    ...st.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  })),
  Ac = A(() => oxe(u({
    applyDefaults: I().optional()
  }), pe)),
  Lc = gl(e => {
    if (e && typeof e === "object" && !Array.isArray(e) && Object.keys(e).length === 0) return {
      form: {}
    };
    return e;
  }, oxe(u({
    form: Ac.optional(),
    url: pe.optional()
  }), pe.optional())),
  Mo = A(() => xt({
    list: pe.optional(),
    cancel: pe.optional(),
    requests: xt({
      sampling: xt({
        createMessage: pe.optional()
      }).optional(),
      elicitation: xt({
        create: pe.optional()
      }).optional()
    }).optional()
  })),
  jo = A(() => xt({
    list: pe.optional(),
    cancel: pe.optional(),
    requests: xt({
      tools: xt({
        call: pe.optional()
      }).optional()
    }).optional()
  })),
  capabilities = A(() => u({
    experimental: me(o(), pe).optional(),
    sampling: u({
      context: pe.optional(),
      tools: pe.optional()
    }).optional(),
    elicitation: Lc.optional(),
    roots: u({
      listChanged: I().optional()
    }).optional(),
    tasks: Mo.optional(),
    extensions: me(o(), pe).optional()
  })),
  params_2 = A(() => ze.extend({
    protocolVersion: o(),
    capabilities: capabilities,
    clientInfo: KRt
  })),
  Ir = A(() => fe.extend({
    method: T("initialize"),
    params: params_2
  })),
  capabilities_2 = A(() => u({
    experimental: me(o(), pe).optional(),
    logging: pe.optional(),
    completions: pe.optional(),
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
    tasks: jo.optional(),
    extensions: me(o(), pe).optional()
  })),
  qRt = A(() => result.extend({
    protocolVersion: o(),
    capabilities: capabilities_2,
    serverInfo: KRt,
    instructions: o().optional()
  })),
  Or = A(() => Te.extend({
    method: T("notifications/initialized"),
    params: Pe.optional()
  })),
  Uo = A(() => fe.extend({
    method: T("server/discover"),
    params: ze.optional()
  })),
  g1e = A(() => result.extend({
    supportedVersions: C(o()),
    capabilities: capabilities_2,
    instructions: o().optional()
  })),
  Nr = A(() => fe.extend({
    method: T("ping"),
    params: ze.optional()
  })),
  Do = A(() => u({
    progress: E(),
    total: rl(E()),
    message: rl(o())
  })),
  params_3 = A(() => u({
    ...Pe.shape,
    ...Do.shape,
    progressToken: progressToken
  })),
  Mr = A(() => Te.extend({
    method: T("notifications/progress"),
    params: params_3
  })),
  xo = A(() => ze.extend({
    cursor: Er.optional()
  })),
  at = A(() => fe.extend({
    params: xo.optional()
  })),
  nt = A(() => result.extend({
    nextCursor: Er.optional()
  })),
  jr = A(() => u({
    uri: o(),
    mimeType: rl(o()),
    _meta: me(o(), oe()).optional()
  })),
  Ar = A(() => jr.extend({
    text: o()
  })),
  Ia = o().refine(e => {
    try {
      return atob(e), !0;
    } catch {
      return !1;
    }
  }, {
    message: "Invalid Base64 string"
  }),
  Lr = A(() => jr.extend({
    blob: Ia
  })),
  role = A(() => B(["user", "assistant"])),
  Je = A(() => u({
    audience: C(role).optional(),
    priority: E().min(0).max(1).optional(),
    lastModified: Be([hH({
      offset: !0
    }), hH({
      offset: !0,
      precision: -1
    })]).optional()
  })),
  cYt = A(() => u({
    ...He.shape,
    ...st.shape,
    uri: o(),
    description: rl(o()),
    mimeType: rl(o()),
    size: rl(E()),
    annotations: Je.optional(),
    _meta: rl(xt({}))
  })),
  Vkn = A(() => u({
    ...He.shape,
    ...st.shape,
    uriTemplate: o(),
    description: rl(o()),
    mimeType: rl(o()),
    annotations: Je.optional(),
    _meta: rl(xt({}))
  })),
  Fo = A(() => at.extend({
    method: T("resources/list")
  })),
  Qat = A(() => nt.extend({
    resources: C(cYt)
  })),
  Ho = A(() => at.extend({
    method: T("resources/templates/list")
  })),
  Kkn = A(() => nt.extend({
    resourceTemplates: C(Vkn)
  })),
  Vt = A(() => ze.extend({
    uri: o()
  })),
  params_4 = Vt,
  Jo = A(() => fe.extend({
    method: T("resources/read"),
    params: params_4
  })),
  Go = A(() => result.extend({
    contents: C(Be([Ar, Lr]))
  })),
  Bo = A(() => Te.extend({
    method: T("notifications/resources/list_changed"),
    params: Pe.optional()
  })),
  params_5 = Vt,
  Yo = A(() => fe.extend({
    method: T("resources/subscribe"),
    params: params_5
  })),
  params_6 = Vt,
  Zo = A(() => fe.extend({
    method: T("resources/unsubscribe"),
    params: params_6
  })),
  notifications = A(() => u({
    toolsListChanged: I().optional(),
    promptsListChanged: I().optional(),
    resourcesListChanged: I().optional(),
    resourceSubscriptions: C(o()).optional()
  })),
  params_7 = A(() => ze.extend({
    notifications: notifications
  })),
  es = A(() => fe.extend({
    method: T("subscriptions/listen"),
    params: params_7
  })),
  params_8 = A(() => Pe.extend({
    notifications: notifications
  })),
  rs = A(() => Te.extend({
    method: T("notifications/subscriptions/acknowledged"),
    params: params_8
  })),
  _meta = A(() => Tr.extend({
    [wr]: id_2
  })),
  ss = A(() => result.extend({
    _meta: _meta
  })),
  as = A(() => Pe.extend({
    uri: o()
  })),
  ns = A(() => Te.extend({
    method: T("notifications/resources/updated"),
    params: as
  })),
  is = A(() => u({
    name: o(),
    description: rl(o()),
    required: rl(I())
  })),
  qkn = A(() => u({
    ...He.shape,
    ...st.shape,
    description: rl(o()),
    arguments: rl(C(is)),
    _meta: rl(xt({}))
  })),
  cs = A(() => at.extend({
    method: T("prompts/list")
  })),
  Ykn = A(() => nt.extend({
    prompts: C(qkn)
  })),
  params_9 = A(() => ze.extend({
    name: o(),
    arguments: me(o(), o()).optional()
  })),
  us = A(() => fe.extend({
    method: T("prompts/get"),
    params: params_9
  })),
  Ft = A(() => u({
    type: T("text"),
    text: o(),
    annotations: Je.optional(),
    _meta: me(o(), oe()).optional()
  })),
  Ht = A(() => u({
    type: T("image"),
    data: Ia,
    mimeType: o(),
    annotations: Je.optional(),
    _meta: me(o(), oe()).optional()
  })),
  Kt = A(() => u({
    type: T("audio"),
    data: Ia,
    mimeType: o(),
    annotations: Je.optional(),
    _meta: me(o(), oe()).optional()
  })),
  ds = A(() => u({
    type: T("tool_use"),
    name: o(),
    id: o(),
    input: me(o(), oe()),
    _meta: me(o(), oe()).optional()
  })),
  hs = A(() => u({
    type: T("resource"),
    resource: Be([Ar, Lr]),
    annotations: Je.optional(),
    _meta: me(o(), oe()).optional()
  })),
  ms = A(() => cYt.extend({
    type: T("resource_link")
  })),
  content = A(() => Be([Ft, Ht, Kt, ms, hs])),
  ps = A(() => u({
    role: role,
    content: content
  })),
  fs = A(() => result.extend({
    description: o().optional(),
    messages: C(ps)
  })),
  Ss = A(() => Te.extend({
    method: T("notifications/prompts/list_changed"),
    params: Pe.optional()
  })),
  gs = A(() => u({
    title: o().optional(),
    readOnlyHint: I().optional(),
    destructiveHint: I().optional(),
    idempotentHint: I().optional(),
    openWorldHint: I().optional()
  })),
  _s = A(() => u({
    taskSupport: B(["required", "optional", "forbidden"]).optional()
  })),
  Zat = A(() => u({
    ...He.shape,
    ...st.shape,
    description: o().optional(),
    inputSchema: u({
      type: T("object"),
      properties: me(o(), rt).optional(),
      required: C(o()).optional()
    }).catchall(oe()),
    outputSchema: xt({
      $schema: o().optional()
    }).optional(),
    annotations: gs.optional(),
    execution: _s.optional(),
    _meta: me(o(), oe()).optional()
  })),
  ys = A(() => at.extend({
    method: T("tools/list")
  })),
  elt = A(() => nt.extend({
    tools: C(Zat)
  })),
  Vr = A(() => result.extend({
    content: C(content).default([]),
    structuredContent: oe().optional(),
    isError: I().optional()
  })),
  Xkn = A(() => Vr.or(result.extend({
    toolResult: oe()
  }))),
  params_10 = A(() => Rt.extend({
    name: o(),
    arguments: me(o(), oe()).optional()
  })),
  bs = A(() => fe.extend({
    method: T("tools/call"),
    params: params_10
  })),
  Rs = A(() => Te.extend({
    method: T("notifications/tools/list_changed"),
    params: Pe.optional()
  })),
  xr = A(() => u({
    autoRefresh: I().default(!0),
    debounceMs: E().int().nonnegative().default(300)
  })),
  level = A(() => B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])),
  params_11 = A(() => ze.extend({
    level: level
  })),
  ws = A(() => fe.extend({
    method: T("logging/setLevel"),
    params: params_11
  })),
  params_12 = A(() => Pe.extend({
    level: level,
    logger: o().optional(),
    data: oe()
  })),
  Es = A(() => Te.extend({
    method: T("notifications/message"),
    params: params_12
  })),
  Ps = A(() => u({
    name: o().optional()
  })),
  Ts = A(() => u({
    hints: C(Ps).optional(),
    costPriority: E().min(0).max(1).optional(),
    speedPriority: E().min(0).max(1).optional(),
    intelligencePriority: E().min(0).max(1).optional()
  })),
  Cs = A(() => u({
    mode: B(["auto", "required", "none"]).optional()
  })),
  ks = A(() => u({
    type: T("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: C(content),
    structuredContent: oe().optional(),
    isError: I().optional(),
    _meta: me(o(), oe()).optional()
  })),
  content_2 = A(() => Dr("type", [Ft, Ht, Kt])),
  vt = A(() => Dr("type", [Ft, Ht, Kt, ds, ks])),
  Is = A(() => u({
    role: role,
    content: Be([vt, C(vt)]),
    _meta: me(o(), oe()).optional()
  })),
  params_13 = A(() => Rt.extend({
    messages: C(Is),
    modelPreferences: Ts.optional(),
    systemPrompt: o().optional(),
    includeContext: B(["none", "thisServer", "allServers"]).optional(),
    temperature: E().optional(),
    maxTokens: E().int(),
    stopSequences: C(o()).optional(),
    metadata: pe.optional(),
    tools: C(Zat).optional(),
    toolChoice: Cs.optional()
  })),
  Ns = A(() => fe.extend({
    method: T("sampling/createMessage"),
    params: params_13
  })),
  Ms = A(() => result.extend({
    model: o(),
    stopReason: rl(B(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: role,
    content: content_2
  })),
  js = A(() => result.extend({
    model: o(),
    stopReason: rl(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: role,
    content: Be([vt, C(vt)])
  })),
  Hr = A(() => u({
    type: T("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: I().optional()
  })),
  Gt = A(() => u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: E().optional(),
    maxLength: E().optional(),
    format: B(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  })),
  Bt = A(() => u({
    type: B(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: E().optional(),
    maximum: E().optional(),
    default: E().optional()
  })),
  Kr = A(() => u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    default: o().optional()
  })),
  Jr = A(() => u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: C(u({
      const: o(),
      title: o()
    })),
    default: o().optional()
  })),
  Gr = A(() => u({
    type: T("string"),
    title: o().optional(),
    description: o().optional(),
    enum: C(o()),
    enumNames: C(o()).optional(),
    default: o().optional()
  })),
  As = A(() => Be([Kr, Jr])),
  Br = A(() => u({
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
  })),
  Wr = A(() => u({
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
  })),
  Ls = A(() => Be([Br, Wr])),
  Us = A(() => Be([Gr, As, Ls])),
  Yr = A(() => Be([Us, Hr, Gt, Bt])),
  Wt = A(() => Rt.extend({
    mode: T("form").optional(),
    message: o(),
    requestedSchema: u({
      type: T("object"),
      properties: me(o(), Yr),
      required: C(o()).optional()
    }).catchall(oe())
  })),
  uYt = A(() => Rt.extend({
    mode: T("url"),
    message: o(),
    elicitationId: o(),
    url: o().url()
  })),
  params_14 = A(() => Be([Wt, uYt])),
  Ds = A(() => fe.extend({
    method: T("elicitation/create"),
    params: params_14
  })),
  params_15 = A(() => Pe.extend({
    elicitationId: o()
  })),
  xs = A(() => Te.extend({
    method: T("notifications/elicitation/complete"),
    params: params_15
  })),
  Fs = A(() => result.extend({
    action: B(["accept", "decline", "cancel"]),
    content: gl(e => e === null ? void 0 : e, me(o(), Be([o(), E(), I(), C(o())])).optional())
  })),
  Hs = A(() => u({
    type: T("ref/resource"),
    uri: o()
  })),
  Ks = A(() => u({
    type: T("ref/prompt"),
    name: o()
  })),
  params_16 = A(() => ze.extend({
    ref: Be([Ks, Hs]),
    argument: u({
      name: o(),
      value: o()
    }),
    context: u({
      arguments: me(o(), o()).optional()
    }).optional()
  })),
  Gs = A(() => fe.extend({
    method: T("completion/complete"),
    params: params_16
  })),
  Bs = A(() => result.extend({
    completion: xt({
      values: C(o()).max(100),
      total: rl(E().int()),
      hasMore: rl(I())
    })
  })),
  Ws = A(() => u({
    uri: o().startsWith("file://"),
    name: o().optional(),
    _meta: me(o(), oe()).optional()
  })),
  Ys = A(() => fe.extend({
    method: T("roots/list"),
    params: ze.optional()
  })),
  Xs = A(() => result.extend({
    roots: C(Ws)
  })),
  Zs = A(() => Te.extend({
    method: T("notifications/roots/list_changed"),
    params: Pe.optional()
  })),
  Oa = A(() => xt({
    ttl: E().optional(),
    pollInterval: E().optional()
  })),
  status = A(() => B(["working", "input_required", "completed", "failed", "cancelled"])),
  task = A(() => u({
    taskId: o(),
    status: status,
    ttl: Be([E(), Ih()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: rl(E()),
    statusMessage: rl(o())
  })),
  Na = A(() => result.extend({
    task: task
  })),
  params_17 = A(() => Pe.merge(task)),
  Ma = A(() => Te.extend({
    method: T("notifications/tasks/status"),
    params: params_17
  })),
  ja = A(() => fe.extend({
    method: T("tasks/get"),
    params: ze.extend({
      taskId: o()
    })
  })),
  Aa = A(() => result.merge(task)),
  La = A(() => fe.extend({
    method: T("tasks/result"),
    params: ze.extend({
      taskId: o()
    })
  })),
  Ua = A(() => result.loose()),
  Da = A(() => at.extend({
    method: T("tasks/list")
  })),
  Va = A(() => nt.extend({
    tasks: C(task)
  })),
  xa = A(() => fe.extend({
    method: T("tasks/cancel"),
    params: ze.extend({
      taskId: o()
    })
  })),
  Fa = A(() => result.merge(task)),
  Ha = A(() => Be([Nr, Ir, Uo, Gs, ws, us, cs, Fo, Ho, Jo, Yo, Zo, es, bs, ys])),
  Ka = A(() => Be([qr, Mr, Or, Zs])),
  Ja = A(() => Be([kr, Ms, js, Fs, Xs])),
  Ga = A(() => Be([Nr, Ns, Ds, Ys])),
  Ba = A(() => Be([qr, Mr, Es, ns, Bo, Rs, Ss, rs, xs])),
  Ya = A(() => Be([kr, qRt, g1e, Bs, fs, Ykn, Qat, Kkn, Go, Vr, elt, ss])),
  Re = Wtt().superRefine((e, t) => {
    if (!URL.canParse(e)) return t.addIssue({
      code: KJ.custom,
      message: "URL must be parseable",
      fatal: !0
    }), g5;
  }).refine(e => {
    let t = new URL(e);
    return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
  }, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
  }),
  OAuthProtectedResourceMetadataSchema = A(() => xt({
    resource: o().url(),
    authorization_servers: C(Re).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: C(o()).optional(),
    bearer_methods_supported: C(o()).optional(),
    resource_signing_alg_values_supported: C(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: I().optional(),
    authorization_details_types_supported: C(o()).optional(),
    dpop_signing_alg_values_supported: C(o()).optional(),
    dpop_bound_access_tokens_required: I().optional()
  })),
  OAuthMetadataSchema = A(() => xt({
    issuer: o(),
    authorization_endpoint: Re,
    token_endpoint: Re,
    registration_endpoint: Re.optional(),
    scopes_supported: C(o()).optional(),
    response_types_supported: C(o()),
    response_modes_supported: C(o()).optional(),
    grant_types_supported: C(o()).optional(),
    token_endpoint_auth_methods_supported: C(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    service_documentation: Re.optional(),
    revocation_endpoint: Re.optional(),
    revocation_endpoint_auth_methods_supported: C(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: C(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: C(o()).optional(),
    code_challenge_methods_supported: C(o()).optional(),
    client_id_metadata_document_supported: I().optional(),
    authorization_response_iss_parameter_supported: I().optional().catch(void 0)
  })),
  OpenIdProviderMetadataSchema = A(() => xt({
    issuer: o(),
    authorization_endpoint: Re,
    token_endpoint: Re,
    userinfo_endpoint: Re.optional(),
    jwks_uri: Re,
    registration_endpoint: Re.optional(),
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
    claims_parameter_supported: I().optional(),
    request_parameter_supported: I().optional(),
    request_uri_parameter_supported: I().optional(),
    require_request_uri_registration: I().optional(),
    op_policy_uri: Re.optional(),
    op_tos_uri: Re.optional(),
    client_id_metadata_document_supported: I().optional(),
    authorization_response_iss_parameter_supported: I().optional().catch(void 0)
  })),
  OpenIdProviderDiscoveryMetadataSchema = A(() => u({
    ...OpenIdProviderMetadataSchema.shape,
    ...OAuthMetadataSchema.pick({
      code_challenge_methods_supported: !0
    }).shape
  })),
  OAuthTokensSchema = A(() => u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: uqe().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }).strip()),
  IdJagTokenExchangeResponseSchema = A(() => u({
    issued_token_type: T("urn:ietf:params:oauth:token-type:id-jag"),
    access_token: o(),
    token_type: o().optional(),
    expires_in: E().optional(),
    scope: o().optional()
  }).strip()),
  OAuthErrorResponseSchema = A(() => u({
    error: o(),
    error_description: o().optional(),
    error_uri: o().optional()
  })),
  Ca = A(() => Re.optional().or(T("").transform(() => {
    return;
  }))),
  OAuthClientMetadataSchema = A(() => u({
    redirect_uris: C(Re),
    token_endpoint_auth_method: o().optional(),
    grant_types: C(o()).optional(),
    response_types: C(o()).optional(),
    application_type: o().optional(),
    client_name: o().optional(),
    client_uri: Re.optional(),
    logo_uri: Ca,
    scope: o().optional(),
    contacts: C(o()).optional(),
    tos_uri: Ca,
    policy_uri: o().optional(),
    jwks_uri: Re.optional(),
    jwks: tae().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
  }).strip()),
  OAuthClientInformationSchema = A(() => u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: E().optional(),
    client_secret_expires_at: E().optional()
  }).strip()),
  OAuthClientInformationFullSchema = A(() => OAuthClientMetadataSchema.merge(OAuthClientInformationSchema)),
  OAuthClientRegistrationErrorSchema = A(() => u({
    error: o(),
    error_description: o().optional()
  }).strip()),
  OAuthTokenRevocationRequestSchema = A(() => u({
    token: o(),
    token_type_hint: o().optional()
  }).strip());
var on = Symbol.for("mcp.sdk.errorBrands");
function wt(e, t) {
  let value_2 = new Set(),
    s = t;
  while (typeof s === "function") {
    let mcpBrand = s.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof mcpBrand === "string") value_2.add(mcpBrand);
    s = Object.getPrototypeOf(s);
  }
  if (value_2.size === 0) return;
  Object.defineProperty(e, on, {
    value: value_2,
    enumerable: !1,
    configurable: !0
  });
}
function Ne(e, t) {
  try {
    if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e, "mcpBrand") && typeof e.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, on)) {
      let r = t[on];
      if (r && typeof r.has === "function" && r.has(e.mcpBrand)) return !0;
    }
  } catch {}
  return Function.prototype[Symbol.hasInstance].call(e, t);
}
var fge = function (e) {
    return e.InvalidRequest = "invalid_request", e.InvalidClient = "invalid_client", e.InvalidGrant = "invalid_grant", e.UnauthorizedClient = "unauthorized_client", e.UnsupportedGrantType = "unsupported_grant_type", e.InvalidScope = "invalid_scope", e.AccessDenied = "access_denied", e.ServerError = "server_error", e.TemporarilyUnavailable = "temporarily_unavailable", e.UnsupportedResponseType = "unsupported_response_type", e.UnsupportedTokenType = "unsupported_token_type", e.InvalidToken = "invalid_token", e.MethodNotAllowed = "method_not_allowed", e.TooManyRequests = "too_many_requests", e.InvalidClientMetadata = "invalid_client_metadata", e.InvalidRedirectUri = "invalid_redirect_uri", e.InsufficientScope = "insufficient_scope", e.InvalidTarget = "invalid_target", e;
  }({}),
  F8 = class OAuthError extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthError"
      });
    }
    static [Symbol.hasInstance](t) {
      return Ne(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Ne(this, t);
    }
    constructor(t, r, s) {
      super(r);
      this.code = t, this.errorUri = s, this.name = "OAuthError", wt(this, new.target);
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
  xi = function (e) {
    return e.NotConnected = "NOT_CONNECTED", e.AlreadyConnected = "ALREADY_CONNECTED", e.NotInitialized = "NOT_INITIALIZED", e.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED", e.RequestTimeout = "REQUEST_TIMEOUT", e.ConnectionClosed = "CONNECTION_CLOSED", e.SendFailed = "SEND_FAILED", e.InvalidResult = "INVALID_RESULT", e.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE", e.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED", e.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED", e.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION", e.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED", e.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED", e.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION", e.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN", e.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT", e.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM", e.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION", e;
  }({}),
  Vi = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SdkError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Ne(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Ne(this, e);
    }
    constructor(e, t, r) {
      super(t);
      this.code = e, this.data = r, this.name = "SdkError", wt(this, new.target);
    }
  },
  nA = class extends Vi {
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
function Xn(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function Zn({
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
var Qn = "2026-07-28",
  ln = [Qn];
function We(e) {
  return e >= Qn;
}
function un(e) {
  return e.filter(item => !We(item));
}
function ao(e) {
  return e.filter(item => We(item));
}
function ei(e) {
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
var ti = ["task", "inputRequests", "requestState"];
function Uc(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e) || e.content !== void 0 || ti.some(item => item in e)) return e;
  return {
    ...e,
    content: []
  };
}
function lt(e) {
  if (e.build !== void 0) e.schema = e.build(), e.build = void 0;
  return e.schema;
}
var Vc = {
  get: (e, t, r) => Reflect.get(lt(e), t, r),
  has: (e, t) => t in lt(e),
  set: (e, t, r) => Reflect.set(lt(e), t, r),
  defineProperty: (e, t, r) => Reflect.defineProperty(lt(e), t, r),
  deleteProperty: (e, t) => Reflect.deleteProperty(lt(e), t),
  getPrototypeOf: e => Object.getPrototypeOf(lt(e)),
  ownKeys: e => Reflect.ownKeys(lt(e)),
  preventExtensions: () => !1,
  getOwnPropertyDescriptor(e, t) {
    let r = Reflect.getOwnPropertyDescriptor(lt(e), t);
    return r && {
      ...r,
      configurable: !0
    };
  }
};
function P(build_2) {
  return new Proxy({
    build: build_2,
    schema: void 0
  }, Vc);
}
function xc() {
  let JSONValueSchema = $R(() => Be([o(), E(), I(), Ih(), me(o(), JSONValueSchema), C(JSONValueSchema)])),
    JSONObjectSchema = P(() => me(o(), JSONValueSchema)),
    r = P(() => Be([o(), E().int()])),
    CursorSchema = P(() => o()),
    TaskMetadataSchema = P(() => u({
      ttl: E().optional()
    })),
    RelatedTaskMetadataSchema = P(() => u({
      taskId: o()
    })),
    RequestMetaSchema = P(() => xt({
      progressToken: r.optional(),
      "io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema.optional()
    })),
    BaseRequestParamsSchema = P(() => u({
      _meta: RequestMetaSchema.optional()
    })),
    TaskAugmentedRequestParamsSchema = P(() => BaseRequestParamsSchema.extend({
      task: TaskMetadataSchema.optional()
    })),
    RequestSchema = P(() => u({
      method: o(),
      params: BaseRequestParamsSchema.loose().optional()
    })),
    NotificationsParamsSchema = P(() => u({
      _meta: RequestMetaSchema.optional()
    })),
    NotificationSchema = P(() => u({
      method: o(),
      params: NotificationsParamsSchema.loose().optional()
    })),
    ResultSchema = P(() => xt({
      _meta: RequestMetaSchema.optional()
    })),
    RequestIdSchema = P(() => Be([o(), E().int()])),
    EmptyResultSchema = P(() => ResultSchema.strict()),
    v = P(() => NotificationsParamsSchema.extend({
      requestId: RequestIdSchema.optional(),
      reason: o().optional()
    })),
    CancelledNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/cancelled"),
      params: v
    })),
    IconSchema = P(() => u({
      src: o(),
      mimeType: o().optional(),
      sizes: C(o()).optional(),
      theme: B(["light", "dark"]).optional()
    })),
    IconsSchema = P(() => u({
      icons: C(IconSchema).optional()
    })),
    BaseMetadataSchema = P(() => u({
      name: o(),
      title: o().optional()
    })),
    R = P(() => BaseMetadataSchema.extend({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    })),
    q = P(() => oxe(u({
      applyDefaults: I().optional()
    }), JSONObjectSchema)),
    b = gl(Ee => {
      if (Ee && typeof Ee === "object" && !Array.isArray(Ee) && Object.keys(Ee).length === 0) return {
        form: {}
      };
      return Ee;
    }, oxe(u({
      form: q.optional(),
      url: JSONObjectSchema.optional()
    }), JSONObjectSchema.optional())),
    ClientTasksCapabilitySchema = P(() => xt({
      list: JSONObjectSchema.optional(),
      cancel: JSONObjectSchema.optional(),
      requests: xt({
        sampling: xt({
          createMessage: JSONObjectSchema.optional()
        }).optional(),
        elicitation: xt({
          create: JSONObjectSchema.optional()
        }).optional()
      }).optional()
    })),
    ServerTasksCapabilitySchema = P(() => xt({
      list: JSONObjectSchema.optional(),
      cancel: JSONObjectSchema.optional(),
      requests: xt({
        tools: xt({
          call: JSONObjectSchema.optional()
        }).optional()
      }).optional()
    })),
    x = P(() => u({
      experimental: me(o(), JSONObjectSchema).optional(),
      sampling: u({
        context: JSONObjectSchema.optional(),
        tools: JSONObjectSchema.optional()
      }).optional(),
      elicitation: b.optional(),
      roots: u({
        listChanged: I().optional()
      }).optional(),
      tasks: ClientTasksCapabilitySchema.optional(),
      extensions: me(o(), JSONObjectSchema).optional()
    })),
    K = P(() => BaseRequestParamsSchema.extend({
      protocolVersion: o(),
      capabilities: x,
      clientInfo: R
    })),
    InitializeRequestSchema = P(() => RequestSchema.extend({
      method: T("initialize"),
      params: K
    })),
    F = P(() => u({
      experimental: me(o(), JSONObjectSchema).optional(),
      logging: JSONObjectSchema.optional(),
      completions: JSONObjectSchema.optional(),
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
      tasks: ServerTasksCapabilitySchema.optional(),
      extensions: me(o(), JSONObjectSchema).optional()
    })),
    InitializeResultSchema = P(() => ResultSchema.extend({
      protocolVersion: o(),
      capabilities: F,
      serverInfo: R,
      instructions: o().optional()
    })),
    InitializedNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/initialized"),
      params: NotificationsParamsSchema.optional()
    })),
    PingRequestSchema = P(() => RequestSchema.extend({
      method: T("ping"),
      params: BaseRequestParamsSchema.optional()
    })),
    ProgressSchema = P(() => u({
      progress: E(),
      total: rl(E()),
      message: rl(o())
    })),
    le = P(() => u({
      ...NotificationsParamsSchema.shape,
      ...ProgressSchema.shape,
      progressToken: r
    })),
    ProgressNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/progress"),
      params: le
    })),
    PaginatedRequestParamsSchema = P(() => BaseRequestParamsSchema.extend({
      cursor: CursorSchema.optional()
    })),
    PaginatedRequestSchema = P(() => RequestSchema.extend({
      params: PaginatedRequestParamsSchema.optional()
    })),
    PaginatedResultSchema = P(() => ResultSchema.extend({
      nextCursor: CursorSchema.optional()
    })),
    ResourceContentsSchema = P(() => u({
      uri: o(),
      mimeType: rl(o()),
      _meta: me(o(), oe()).optional()
    })),
    TextResourceContentsSchema = P(() => ResourceContentsSchema.extend({
      text: o()
    })),
    M = o().refine(Ee => {
      try {
        return atob(Ee), !0;
      } catch {
        return !1;
      }
    }, {
      message: "Invalid Base64 string"
    }),
    BlobResourceContentsSchema = P(() => ResourceContentsSchema.extend({
      blob: M
    })),
    W = P(() => B(["user", "assistant"])),
    AnnotationsSchema = P(() => u({
      audience: C(W).optional(),
      priority: E().min(0).max(1).optional(),
      lastModified: Be([hH({
        offset: !0
      }), hH({
        offset: !0,
        precision: -1
      })]).optional()
    })),
    ResourceSchema = P(() => u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      uri: o(),
      description: rl(o()),
      mimeType: rl(o()),
      size: rl(E()),
      annotations: AnnotationsSchema.optional(),
      _meta: rl(xt({}))
    })),
    ResourceTemplateSchema = P(() => u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      uriTemplate: o(),
      description: rl(o()),
      mimeType: rl(o()),
      annotations: AnnotationsSchema.optional(),
      _meta: rl(xt({}))
    })),
    ListResourcesRequestSchema = P(() => PaginatedRequestSchema.extend({
      method: T("resources/list")
    })),
    ListResourcesResultSchema = P(() => PaginatedResultSchema.extend({
      resources: C(ResourceSchema)
    })),
    ListResourceTemplatesRequestSchema = P(() => PaginatedRequestSchema.extend({
      method: T("resources/templates/list")
    })),
    ListResourceTemplatesResultSchema = P(() => PaginatedResultSchema.extend({
      resourceTemplates: C(ResourceTemplateSchema)
    })),
    ResourceRequestParamsSchema = P(() => BaseRequestParamsSchema.extend({
      uri: o()
    })),
    Q = ResourceRequestParamsSchema,
    ReadResourceRequestSchema = P(() => RequestSchema.extend({
      method: T("resources/read"),
      params: Q
    })),
    ReadResourceResultSchema = P(() => ResultSchema.extend({
      contents: C(Be([TextResourceContentsSchema, BlobResourceContentsSchema]))
    })),
    ResourceListChangedNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/resources/list_changed"),
      params: NotificationsParamsSchema.optional()
    })),
    ve = ResourceRequestParamsSchema,
    SubscribeRequestSchema = P(() => RequestSchema.extend({
      method: T("resources/subscribe"),
      params: ve
    })),
    ye = ResourceRequestParamsSchema,
    UnsubscribeRequestSchema = P(() => RequestSchema.extend({
      method: T("resources/unsubscribe"),
      params: ye
    })),
    Me = P(() => NotificationsParamsSchema.extend({
      uri: o()
    })),
    ResourceUpdatedNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/resources/updated"),
      params: Me
    })),
    PromptArgumentSchema = P(() => u({
      name: o(),
      description: rl(o()),
      required: rl(I())
    })),
    PromptSchema = P(() => u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      description: rl(o()),
      arguments: rl(C(PromptArgumentSchema)),
      _meta: rl(xt({}))
    })),
    ListPromptsRequestSchema = P(() => PaginatedRequestSchema.extend({
      method: T("prompts/list")
    })),
    ListPromptsResultSchema = P(() => PaginatedResultSchema.extend({
      prompts: C(PromptSchema)
    })),
    Xe = P(() => BaseRequestParamsSchema.extend({
      name: o(),
      arguments: me(o(), o()).optional()
    })),
    GetPromptRequestSchema = P(() => RequestSchema.extend({
      method: T("prompts/get"),
      params: Xe
    })),
    TextContentSchema = P(() => u({
      type: T("text"),
      text: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ImageContentSchema = P(() => u({
      type: T("image"),
      data: M,
      mimeType: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: me(o(), oe()).optional()
    })),
    AudioContentSchema = P(() => u({
      type: T("audio"),
      data: M,
      mimeType: o(),
      annotations: AnnotationsSchema.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ToolUseContentSchema = P(() => u({
      type: T("tool_use"),
      name: o(),
      id: o(),
      input: me(o(), oe()),
      _meta: me(o(), oe()).optional()
    })),
    EmbeddedResourceSchema = P(() => u({
      type: T("resource"),
      resource: Be([TextResourceContentsSchema, BlobResourceContentsSchema]),
      annotations: AnnotationsSchema.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ResourceLinkSchema = P(() => ResourceSchema.extend({
      type: T("resource_link")
    })),
    je = P(() => Be([TextContentSchema, ImageContentSchema, AudioContentSchema, ResourceLinkSchema, EmbeddedResourceSchema])),
    PromptMessageSchema = P(() => u({
      role: W,
      content: je
    })),
    GetPromptResultSchema = P(() => ResultSchema.extend({
      description: o().optional(),
      messages: C(PromptMessageSchema)
    })),
    PromptListChangedNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/prompts/list_changed"),
      params: NotificationsParamsSchema.optional()
    })),
    ToolAnnotationsSchema = P(() => u({
      title: o().optional(),
      readOnlyHint: I().optional(),
      destructiveHint: I().optional(),
      idempotentHint: I().optional(),
      openWorldHint: I().optional()
    })),
    ToolExecutionSchema = P(() => u({
      taskSupport: B(["required", "optional", "forbidden"]).optional()
    })),
    ToolSchema = P(() => u({
      ...BaseMetadataSchema.shape,
      ...IconsSchema.shape,
      description: o().optional(),
      inputSchema: u({
        type: T("object"),
        properties: me(o(), JSONValueSchema).optional(),
        required: C(o()).optional()
      }).catchall(oe()),
      outputSchema: u({
        type: T("object"),
        properties: me(o(), JSONValueSchema).optional(),
        required: C(o()).optional()
      }).catchall(oe()).optional(),
      annotations: ToolAnnotationsSchema.optional(),
      execution: ToolExecutionSchema.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ListToolsRequestSchema = P(() => PaginatedRequestSchema.extend({
      method: T("tools/list")
    })),
    ListToolsResultSchema = P(() => PaginatedResultSchema.extend({
      tools: C(ToolSchema)
    })),
    CallToolResultSchema = P(() => ResultSchema.extend({
      content: C(je),
      structuredContent: me(o(), oe()).optional(),
      isError: I().optional()
    })),
    $e = P(() => TaskAugmentedRequestParamsSchema.extend({
      name: o(),
      arguments: me(o(), oe()).optional()
    })),
    CallToolRequestSchema = P(() => RequestSchema.extend({
      method: T("tools/call"),
      params: $e
    })),
    ToolListChangedNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/tools/list_changed"),
      params: NotificationsParamsSchema.optional()
    })),
    It = P(() => B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])),
    tr = P(() => BaseRequestParamsSchema.extend({
      level: It
    })),
    SetLevelRequestSchema = P(() => RequestSchema.extend({
      method: T("logging/setLevel"),
      params: tr
    })),
    or = P(() => NotificationsParamsSchema.extend({
      level: It,
      logger: o().optional(),
      data: oe()
    })),
    LoggingMessageNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/message"),
      params: or
    })),
    ModelHintSchema = P(() => u({
      name: o().optional()
    })),
    ModelPreferencesSchema = P(() => u({
      hints: C(ModelHintSchema).optional(),
      costPriority: E().min(0).max(1).optional(),
      speedPriority: E().min(0).max(1).optional(),
      intelligencePriority: E().min(0).max(1).optional()
    })),
    ToolChoiceSchema = P(() => u({
      mode: B(["auto", "required", "none"]).optional()
    })),
    ToolResultContentSchema = P(() => u({
      type: T("tool_result"),
      toolUseId: o().describe("The unique identifier for the corresponding tool call."),
      content: C(je),
      structuredContent: u({}).loose().optional(),
      isError: I().optional(),
      _meta: me(o(), oe()).optional()
    })),
    cr = P(() => Dr("type", [TextContentSchema, ImageContentSchema, AudioContentSchema])),
    SamplingMessageContentBlockSchema = P(() => Dr("type", [TextContentSchema, ImageContentSchema, AudioContentSchema, ToolUseContentSchema, ToolResultContentSchema])),
    SamplingMessageSchema = P(() => u({
      role: W,
      content: Be([SamplingMessageContentBlockSchema, C(SamplingMessageContentBlockSchema)]),
      _meta: me(o(), oe()).optional()
    })),
    ur = P(() => TaskAugmentedRequestParamsSchema.extend({
      messages: C(SamplingMessageSchema),
      modelPreferences: ModelPreferencesSchema.optional(),
      systemPrompt: o().optional(),
      includeContext: B(["none", "thisServer", "allServers"]).optional(),
      temperature: E().optional(),
      maxTokens: E().int(),
      stopSequences: C(o()).optional(),
      metadata: JSONObjectSchema.optional(),
      tools: C(ToolSchema).optional(),
      toolChoice: ToolChoiceSchema.optional()
    })),
    CreateMessageRequestSchema = P(() => RequestSchema.extend({
      method: T("sampling/createMessage"),
      params: ur
    })),
    CreateMessageResultSchema = P(() => ResultSchema.extend({
      model: o(),
      stopReason: rl(B(["endTurn", "stopSequence", "maxTokens"]).or(o())),
      role: W,
      content: cr
    })),
    CreateMessageResultWithToolsSchema = P(() => ResultSchema.extend({
      model: o(),
      stopReason: rl(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
      role: W,
      content: Be([SamplingMessageContentBlockSchema, C(SamplingMessageContentBlockSchema)])
    })),
    BooleanSchemaSchema = P(() => u({
      type: T("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: I().optional()
    })),
    StringSchemaSchema = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: E().optional(),
      maxLength: E().optional(),
      format: B(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    })),
    NumberSchemaSchema = P(() => u({
      type: B(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: E().optional(),
      maximum: E().optional(),
      default: E().optional()
    })),
    UntitledSingleSelectEnumSchemaSchema = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      default: o().optional()
    })),
    TitledSingleSelectEnumSchemaSchema = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: C(u({
        const: o(),
        title: o()
      })),
      default: o().optional()
    })),
    LegacyTitledEnumSchemaSchema = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      enumNames: C(o()).optional(),
      default: o().optional()
    })),
    SingleSelectEnumSchemaSchema = P(() => Be([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema])),
    UntitledMultiSelectEnumSchemaSchema = P(() => u({
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
    })),
    TitledMultiSelectEnumSchemaSchema = P(() => u({
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
    })),
    MultiSelectEnumSchemaSchema = P(() => Be([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema])),
    EnumSchemaSchema = P(() => Be([LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema])),
    PrimitiveSchemaDefinitionSchema = P(() => Be([EnumSchemaSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema])),
    ElicitRequestFormParamsSchema = P(() => TaskAugmentedRequestParamsSchema.extend({
      mode: T("form").optional(),
      message: o(),
      requestedSchema: u({
        type: T("object"),
        properties: me(o(), PrimitiveSchemaDefinitionSchema),
        required: C(o()).optional()
      }).catchall(oe())
    })),
    ElicitRequestURLParamsSchema = P(() => TaskAugmentedRequestParamsSchema.extend({
      mode: T("url"),
      message: o(),
      elicitationId: o(),
      url: o().url()
    })),
    Ue = P(() => Be([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema])),
    ElicitRequestSchema = P(() => RequestSchema.extend({
      method: T("elicitation/create"),
      params: Ue
    })),
    So = P(() => NotificationsParamsSchema.extend({
      elicitationId: o()
    })),
    ElicitationCompleteNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/elicitation/complete"),
      params: So
    })),
    ElicitResultSchema = P(() => ResultSchema.extend({
      action: B(["accept", "decline", "cancel"]),
      content: gl(Ee => Ee === null ? void 0 : Ee, me(o(), Be([o(), E(), I(), C(o())])).optional())
    })),
    ResourceTemplateReferenceSchema = P(() => u({
      type: T("ref/resource"),
      uri: o()
    })),
    PromptReferenceSchema = P(() => u({
      type: T("ref/prompt"),
      name: o()
    })),
    bo = P(() => BaseRequestParamsSchema.extend({
      ref: Be([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
      argument: u({
        name: o(),
        value: o()
      }),
      context: u({
        arguments: me(o(), o()).optional()
      }).optional()
    })),
    CompleteRequestSchema = P(() => RequestSchema.extend({
      method: T("completion/complete"),
      params: bo
    })),
    CompleteResultSchema = P(() => ResultSchema.extend({
      completion: xt({
        values: C(o()).max(100),
        total: rl(E().int()),
        hasMore: rl(I())
      })
    })),
    RootSchema = P(() => u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: me(o(), oe()).optional()
    })),
    ListRootsRequestSchema = P(() => RequestSchema.extend({
      method: T("roots/list"),
      params: BaseRequestParamsSchema.optional()
    })),
    ListRootsResultSchema = P(() => ResultSchema.extend({
      roots: C(RootSchema)
    })),
    RootsListChangedNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/roots/list_changed"),
      params: NotificationsParamsSchema.optional()
    })),
    TaskCreationParamsSchema = P(() => xt({
      ttl: E().optional(),
      pollInterval: E().optional()
    })),
    Eo = P(() => B(["working", "input_required", "completed", "failed", "cancelled"])),
    et = P(() => u({
      taskId: o(),
      status: Eo,
      ttl: Be([E(), Ih()]),
      createdAt: o(),
      lastUpdatedAt: o(),
      pollInterval: rl(E()),
      statusMessage: rl(o())
    })),
    CreateTaskResultSchema = P(() => ResultSchema.extend({
      task: et
    })),
    Po = P(() => NotificationsParamsSchema.merge(et)),
    TaskStatusNotificationSchema = P(() => NotificationSchema.extend({
      method: T("notifications/tasks/status"),
      params: Po
    })),
    GetTaskRequestSchema = P(() => RequestSchema.extend({
      method: T("tasks/get"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    })),
    GetTaskResultSchema = P(() => ResultSchema.merge(et)),
    GetTaskPayloadRequestSchema = P(() => RequestSchema.extend({
      method: T("tasks/result"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    })),
    GetTaskPayloadResultSchema = P(() => ResultSchema.loose()),
    ListTasksRequestSchema = P(() => PaginatedRequestSchema.extend({
      method: T("tasks/list")
    })),
    ListTasksResultSchema = P(() => PaginatedResultSchema.extend({
      tasks: C(et)
    })),
    CancelTaskRequestSchema = P(() => RequestSchema.extend({
      method: T("tasks/cancel"),
      params: BaseRequestParamsSchema.extend({
        taskId: o()
      })
    }));
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
    CancelledNotificationParamsSchema: v,
    CancelledNotificationSchema: CancelledNotificationSchema,
    IconSchema: IconSchema,
    IconsSchema: IconsSchema,
    BaseMetadataSchema: BaseMetadataSchema,
    ImplementationSchema: R,
    ClientTasksCapabilitySchema: ClientTasksCapabilitySchema,
    ServerTasksCapabilitySchema: ServerTasksCapabilitySchema,
    ClientCapabilitiesSchema: x,
    InitializeRequestParamsSchema: K,
    InitializeRequestSchema: InitializeRequestSchema,
    ServerCapabilitiesSchema: F,
    InitializeResultSchema: InitializeResultSchema,
    InitializedNotificationSchema: InitializedNotificationSchema,
    PingRequestSchema: PingRequestSchema,
    ProgressSchema: ProgressSchema,
    ProgressNotificationParamsSchema: le,
    ProgressNotificationSchema: ProgressNotificationSchema,
    PaginatedRequestParamsSchema: PaginatedRequestParamsSchema,
    PaginatedRequestSchema: PaginatedRequestSchema,
    PaginatedResultSchema: PaginatedResultSchema,
    ResourceContentsSchema: ResourceContentsSchema,
    TextResourceContentsSchema: TextResourceContentsSchema,
    BlobResourceContentsSchema: BlobResourceContentsSchema,
    RoleSchema: W,
    AnnotationsSchema: AnnotationsSchema,
    ResourceSchema: ResourceSchema,
    ResourceTemplateSchema: ResourceTemplateSchema,
    ListResourcesRequestSchema: ListResourcesRequestSchema,
    ListResourcesResultSchema: ListResourcesResultSchema,
    ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema,
    ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema,
    ResourceRequestParamsSchema: ResourceRequestParamsSchema,
    ReadResourceRequestParamsSchema: Q,
    ReadResourceRequestSchema: ReadResourceRequestSchema,
    ReadResourceResultSchema: ReadResourceResultSchema,
    ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema,
    SubscribeRequestParamsSchema: ve,
    SubscribeRequestSchema: SubscribeRequestSchema,
    UnsubscribeRequestParamsSchema: ye,
    UnsubscribeRequestSchema: UnsubscribeRequestSchema,
    ResourceUpdatedNotificationParamsSchema: Me,
    ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema,
    PromptArgumentSchema: PromptArgumentSchema,
    PromptSchema: PromptSchema,
    ListPromptsRequestSchema: ListPromptsRequestSchema,
    ListPromptsResultSchema: ListPromptsResultSchema,
    GetPromptRequestParamsSchema: Xe,
    GetPromptRequestSchema: GetPromptRequestSchema,
    TextContentSchema: TextContentSchema,
    ImageContentSchema: ImageContentSchema,
    AudioContentSchema: AudioContentSchema,
    ToolUseContentSchema: ToolUseContentSchema,
    EmbeddedResourceSchema: EmbeddedResourceSchema,
    ResourceLinkSchema: ResourceLinkSchema,
    ContentBlockSchema: je,
    PromptMessageSchema: PromptMessageSchema,
    GetPromptResultSchema: GetPromptResultSchema,
    PromptListChangedNotificationSchema: PromptListChangedNotificationSchema,
    ToolAnnotationsSchema: ToolAnnotationsSchema,
    ToolExecutionSchema: ToolExecutionSchema,
    ToolSchema: ToolSchema,
    ListToolsRequestSchema: ListToolsRequestSchema,
    ListToolsResultSchema: ListToolsResultSchema,
    CallToolResultSchema: CallToolResultSchema,
    CallToolRequestParamsSchema: $e,
    CallToolRequestSchema: CallToolRequestSchema,
    ToolListChangedNotificationSchema: ToolListChangedNotificationSchema,
    LoggingLevelSchema: It,
    SetLevelRequestParamsSchema: tr,
    SetLevelRequestSchema: SetLevelRequestSchema,
    LoggingMessageNotificationParamsSchema: or,
    LoggingMessageNotificationSchema: LoggingMessageNotificationSchema,
    ModelHintSchema: ModelHintSchema,
    ModelPreferencesSchema: ModelPreferencesSchema,
    ToolChoiceSchema: ToolChoiceSchema,
    ToolResultContentSchema: ToolResultContentSchema,
    SamplingContentSchema: cr,
    SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema,
    SamplingMessageSchema: SamplingMessageSchema,
    CreateMessageRequestParamsSchema: ur,
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
    ElicitRequestParamsSchema: Ue,
    ElicitRequestSchema: ElicitRequestSchema,
    ElicitationCompleteNotificationParamsSchema: So,
    ElicitationCompleteNotificationSchema: ElicitationCompleteNotificationSchema,
    ElicitResultSchema: ElicitResultSchema,
    ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema,
    PromptReferenceSchema: PromptReferenceSchema,
    CompleteRequestParamsSchema: bo,
    CompleteRequestSchema: CompleteRequestSchema,
    CompleteResultSchema: CompleteResultSchema,
    RootSchema: RootSchema,
    ListRootsRequestSchema: ListRootsRequestSchema,
    ListRootsResultSchema: ListRootsResultSchema,
    RootsListChangedNotificationSchema: RootsListChangedNotificationSchema,
    TaskCreationParamsSchema: TaskCreationParamsSchema,
    TaskStatusSchema: Eo,
    TaskSchema: et,
    CreateTaskResultSchema: CreateTaskResultSchema,
    TaskStatusNotificationParamsSchema: Po,
    TaskStatusNotificationSchema: TaskStatusNotificationSchema,
    GetTaskRequestSchema: GetTaskRequestSchema,
    GetTaskResultSchema: GetTaskResultSchema,
    GetTaskPayloadRequestSchema: GetTaskPayloadRequestSchema,
    GetTaskPayloadResultSchema: GetTaskPayloadResultSchema,
    ListTasksRequestSchema: ListTasksRequestSchema,
    ListTasksResultSchema: ListTasksResultSchema,
    CancelTaskRequestSchema: CancelTaskRequestSchema,
    CancelTaskResultSchema: P(() => ResultSchema.merge(et)),
    ClientRequestSchema: P(() => Be([PingRequestSchema, InitializeRequestSchema, CompleteRequestSchema, SetLevelRequestSchema, GetPromptRequestSchema, ListPromptsRequestSchema, ListResourcesRequestSchema, ListResourceTemplatesRequestSchema, ReadResourceRequestSchema, SubscribeRequestSchema, UnsubscribeRequestSchema, CallToolRequestSchema, ListToolsRequestSchema, GetTaskRequestSchema, GetTaskPayloadRequestSchema, ListTasksRequestSchema, CancelTaskRequestSchema])),
    ClientNotificationSchema: P(() => Be([CancelledNotificationSchema, ProgressNotificationSchema, InitializedNotificationSchema, RootsListChangedNotificationSchema, TaskStatusNotificationSchema])),
    ClientResultSchema: P(() => Be([EmptyResultSchema, CreateMessageResultSchema, CreateMessageResultWithToolsSchema, ElicitResultSchema, ListRootsResultSchema, GetTaskResultSchema, ListTasksResultSchema, CreateTaskResultSchema])),
    ServerRequestSchema: P(() => Be([PingRequestSchema, CreateMessageRequestSchema, ElicitRequestSchema, ListRootsRequestSchema, GetTaskRequestSchema, GetTaskPayloadRequestSchema, ListTasksRequestSchema, CancelTaskRequestSchema])),
    ServerNotificationSchema: P(() => Be([CancelledNotificationSchema, ProgressNotificationSchema, LoggingMessageNotificationSchema, ResourceUpdatedNotificationSchema, ResourceListChangedNotificationSchema, ToolListChangedNotificationSchema, PromptListChangedNotificationSchema, TaskStatusNotificationSchema, ElicitationCompleteNotificationSchema])),
    ServerResultSchema: P(() => Be([EmptyResultSchema, InitializeResultSchema, CompleteResultSchema, GetPromptResultSchema, ListPromptsResultSchema, ListResourcesResultSchema, ListResourceTemplatesResultSchema, ReadResourceResultSchema, CallToolResultSchema, ListToolsResultSchema, GetTaskResultSchema, ListTasksResultSchema, CreateTaskResultSchema])),
    CallToolResultWireSchema: oe().superRefine((Ee, Pc) => {
      if (typeof Ee !== "object" || Ee === null || Array.isArray(Ee) || Ee.content !== void 0) return;
      for (let qn of ti) if (qn in Ee) {
        Pc.addIssue({
          code: "custom",
          message: `content is required when the body carries '${qn}' \u2014 another result family cannot default into an empty tools/call success`
        });
        return;
      }
    }).transform(Uc).pipe(CallToolResultSchema)
  };
}
var Fc;
function ri() {
  return Fc ??= xc();
}
function oi(e) {
  return e.type !== "object";
}
var Hc = new Set(["const", "enum", "default", "examples"]),
  Kc = new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas"]);
function Jc(result_2) {
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
    for (let [i, l] of Object.entries(s)) if (a) n[i] = r(l, !1);else if ((i === "$ref" || i === "$dynamicRef") && typeof l === "string") n[i] = l === "#" ? "#/properties/result" : l.startsWith("#/") ? `#/properties/result${l.slice(1)}` : l;else if (Hc.has(i)) n[i] = l;else if (Kc.has(i)) n[i] = r(l, !0);else n[i] = r(l, !1);
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
var si = {
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
  ai = {
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
  Gc = {
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
  aa;
function dn() {
  if (aa) return aa;
  let e = ri();
  return aa = {
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
  }, aa;
}
function hasRequestMethod(e) {
  return Object.prototype.hasOwnProperty.call(si, e);
}
function hasNotificationMethod(e) {
  return Object.prototype.hasOwnProperty.call(ai, e);
}
function Bc(e) {
  return Object.prototype.hasOwnProperty.call(Gc, e);
}
function Wc(e) {
  return Bc(e) ? dn().resultSchemas[e] : void 0;
}
function Yc(e) {
  return hasRequestMethod(e) ? dn().requestSchemas[e] : void 0;
}
function Xc(e) {
  return hasNotificationMethod(e) ? dn().notificationSchemas[e] : void 0;
}
var Ah = Object.keys(si),
  Lh = Object.keys(ai);
function sn(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function na(e, t) {
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
var Vn = {
  ok: !1,
  reason: "not-in-era"
};
function xn(e) {
  return sn(e) && sn(e.outputSchema) && oi(e.outputSchema);
}
function Fn(e) {
  return e;
}
var hn = {
  era: "2025-11-25",
  hasRequestMethod: hasRequestMethod,
  hasNotificationMethod: hasNotificationMethod,
  validateRequest: (e, t) => na(Yc(e), t),
  validateResult: (e, t) => na(Wc(e), t),
  validateNotification: (e, t) => na(Xc(e), t),
  hasInputRequestMethod: () => !1,
  validateInputRequest: () => Vn,
  validateInputResponse: () => Vn,
  samplingResultVariant: (e, t) => {
    let r = ri();
    return na(e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
  },
  outboundEnvelope: e => {
    return;
  },
  validateEnvelopeMeta: e => [],
  projectCallToolResult(e, t) {
    let r = ei(e),
      s = r.structuredContent;
    if (s === void 0) return r;
    let a = typeof s !== "object" || s === null || Array.isArray(s),
      n = t !== void 0 && oi(t);
    if (!a && !n) return r;
    return {
      ...r,
      structuredContent: {
        result: s
      }
    };
  },
  decodeResult(e, t) {
    if (sn(t) && "resultType" in t) {
      let r = {
        ...t
      };
      return delete r.resultType, {
        kind: "complete",
        result: Fn(r)
      };
    }
    return {
      kind: "complete",
      result: Fn(t)
    };
  },
  encodeResult(e, t) {
    if (e !== "tools/list") return t;
    let tools = t.tools;
    if (!Array.isArray(tools) || !tools.some(item => xn(item))) return t;
    return {
      ...t,
      tools: tools.map(item => xn(item) ? {
        ...item,
        outputSchema: Jc(item.outputSchema)
      } : item)
    };
  },
  encodeErrorCode: e => e === -32002 ? -32602 : e,
  checkInboundEnvelope: e => {
    return;
  }
};
function Zc() {
  let JSONValueSchema_2 = $R(() => Be([o(), E(), I(), Ih(), me(o(), JSONValueSchema_2), C(JSONValueSchema_2)])),
    JSONObjectSchema_2 = P(() => me(o(), JSONValueSchema_2)),
    r = P(() => Be([o(), E().int()])),
    CursorSchema_2 = P(() => o()),
    a = P(() => Be([o(), E().int()])),
    n = P(() => B(["user", "assistant"])),
    i = P(() => B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])),
    l = o().refine(ge => {
      try {
        return atob(ge), !0;
      } catch {
        return !1;
      }
    }, {
      message: "Invalid Base64 string"
    }),
    TaskMetadataSchema_2 = P(() => u({
      ttl: E().optional()
    })),
    RelatedTaskMetadataSchema_2 = P(() => u({
      taskId: o()
    })),
    RequestMetaSchema_2 = P(() => xt({
      progressToken: r.optional(),
      "io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema_2.optional()
    })),
    BaseRequestParamsSchema_2 = P(() => u({
      _meta: RequestMetaSchema_2.optional()
    })),
    TaskAugmentedRequestParamsSchema_2 = P(() => BaseRequestParamsSchema_2.extend({
      task: TaskMetadataSchema_2.optional()
    })),
    NotificationsParamsSchema_2 = P(() => u({
      _meta: RequestMetaSchema_2.optional()
    })),
    NotificationSchema_2 = P(() => u({
      method: o(),
      params: NotificationsParamsSchema_2.loose().optional()
    })),
    IconSchema_2 = P(() => u({
      src: o(),
      mimeType: o().optional(),
      sizes: C(o()).optional(),
      theme: B(["light", "dark"]).optional()
    })),
    IconsSchema_2 = P(() => u({
      icons: C(IconSchema_2).optional()
    })),
    BaseMetadataSchema_2 = P(() => u({
      name: o(),
      title: o().optional()
    })),
    ImplementationSchema = P(() => BaseMetadataSchema_2.extend({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    })),
    f = P(() => oxe(u({
      applyDefaults: I().optional()
    }), JSONObjectSchema_2)),
    R = gl(ge => {
      if (ge && typeof ge === "object" && !Array.isArray(ge) && Object.keys(ge).length === 0) return {
        form: {}
      };
      return ge;
    }, oxe(u({
      form: f.optional(),
      url: JSONObjectSchema_2.optional()
    }), JSONObjectSchema_2.optional())),
    ClientTasksCapabilitySchema_2 = P(() => xt({
      list: JSONObjectSchema_2.optional(),
      cancel: JSONObjectSchema_2.optional(),
      requests: xt({
        sampling: xt({
          createMessage: JSONObjectSchema_2.optional()
        }).optional(),
        elicitation: xt({
          create: JSONObjectSchema_2.optional()
        }).optional()
      }).optional()
    })),
    ServerTasksCapabilitySchema_2 = P(() => xt({
      list: JSONObjectSchema_2.optional(),
      cancel: JSONObjectSchema_2.optional(),
      requests: xt({
        tools: xt({
          call: JSONObjectSchema_2.optional()
        }).optional()
      }).optional()
    })),
    ClientCapabilitiesSchema = P(() => u({
      experimental: me(o(), JSONObjectSchema_2).optional(),
      sampling: u({
        context: JSONObjectSchema_2.optional(),
        tools: JSONObjectSchema_2.optional()
      }).optional(),
      elicitation: R.optional(),
      roots: u({
        listChanged: I().optional()
      }).optional(),
      tasks: ClientTasksCapabilitySchema_2.optional(),
      extensions: me(o(), JSONObjectSchema_2).optional()
    })),
    ServerCapabilitiesSchema = P(() => u({
      experimental: me(o(), JSONObjectSchema_2).optional(),
      logging: JSONObjectSchema_2.optional(),
      completions: JSONObjectSchema_2.optional(),
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
      tasks: ServerTasksCapabilitySchema_2.optional(),
      extensions: me(o(), JSONObjectSchema_2).optional()
    })),
    ProgressSchema_2 = P(() => u({
      progress: E(),
      total: rl(E()),
      message: rl(o())
    })),
    K = P(() => u({
      ...NotificationsParamsSchema_2.shape,
      ...ProgressSchema_2.shape,
      progressToken: r
    })),
    ProgressNotificationSchema_2 = P(() => NotificationSchema_2.extend({
      method: T("notifications/progress"),
      params: K
    })),
    F = P(() => NotificationsParamsSchema_2.extend({
      level: i,
      logger: o().optional(),
      data: oe()
    })),
    LoggingMessageNotificationSchema_2 = P(() => NotificationSchema_2.extend({
      method: T("notifications/message"),
      params: F
    })),
    ResourceContentsSchema_2 = P(() => u({
      uri: o(),
      mimeType: rl(o()),
      _meta: me(o(), oe()).optional()
    })),
    TextResourceContentsSchema_2 = P(() => ResourceContentsSchema_2.extend({
      text: o()
    })),
    BlobResourceContentsSchema_2 = P(() => ResourceContentsSchema_2.extend({
      blob: l
    })),
    AnnotationsSchema_2 = P(() => u({
      audience: C(n).optional(),
      priority: E().min(0).max(1).optional(),
      lastModified: Be([hH({
        offset: !0
      }), hH({
        offset: !0,
        precision: -1
      })]).optional()
    })),
    ResourceSchema_2 = P(() => u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      uri: o(),
      description: rl(o()),
      mimeType: rl(o()),
      size: rl(E()),
      annotations: AnnotationsSchema_2.optional(),
      _meta: rl(xt({}))
    })),
    ResourceTemplateSchema_2 = P(() => u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      uriTemplate: o(),
      description: rl(o()),
      mimeType: rl(o()),
      annotations: AnnotationsSchema_2.optional(),
      _meta: rl(xt({}))
    })),
    ResourceListChangedNotificationSchema_2 = P(() => NotificationSchema_2.extend({
      method: T("notifications/resources/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    })),
    D = P(() => NotificationsParamsSchema_2.extend({
      uri: o()
    })),
    ResourceUpdatedNotificationSchema_2 = P(() => NotificationSchema_2.extend({
      method: T("notifications/resources/updated"),
      params: D
    })),
    PromptArgumentSchema_2 = P(() => u({
      name: o(),
      description: rl(o()),
      required: rl(I())
    })),
    PromptSchema_2 = P(() => u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      description: rl(o()),
      arguments: rl(C(PromptArgumentSchema_2)),
      _meta: rl(xt({}))
    })),
    PromptListChangedNotificationSchema_2 = P(() => NotificationSchema_2.extend({
      method: T("notifications/prompts/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    })),
    TextContentSchema_2 = P(() => u({
      type: T("text"),
      text: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ImageContentSchema_2 = P(() => u({
      type: T("image"),
      data: l,
      mimeType: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: me(o(), oe()).optional()
    })),
    AudioContentSchema_2 = P(() => u({
      type: T("audio"),
      data: l,
      mimeType: o(),
      annotations: AnnotationsSchema_2.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ToolUseContentSchema_2 = P(() => u({
      type: T("tool_use"),
      name: o(),
      id: o(),
      input: me(o(), oe()),
      _meta: me(o(), oe()).optional()
    })),
    EmbeddedResourceSchema_2 = P(() => u({
      type: T("resource"),
      resource: Be([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]),
      annotations: AnnotationsSchema_2.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ResourceLinkSchema_2 = P(() => ResourceSchema_2.extend({
      type: T("resource_link")
    })),
    N = P(() => Be([TextContentSchema_2, ImageContentSchema_2, AudioContentSchema_2, ResourceLinkSchema_2, EmbeddedResourceSchema_2])),
    PromptMessageSchema_2 = P(() => u({
      role: n,
      content: N
    })),
    ToolAnnotationsSchema_2 = P(() => u({
      title: o().optional(),
      readOnlyHint: I().optional(),
      destructiveHint: I().optional(),
      idempotentHint: I().optional(),
      openWorldHint: I().optional()
    })),
    ToolListChangedNotificationSchema_2 = P(() => NotificationSchema_2.extend({
      method: T("notifications/tools/list_changed"),
      params: NotificationsParamsSchema_2.optional()
    })),
    ModelHintSchema_2 = P(() => u({
      name: o().optional()
    })),
    ModelPreferencesSchema_2 = P(() => u({
      hints: C(ModelHintSchema_2).optional(),
      costPriority: E().min(0).max(1).optional(),
      speedPriority: E().min(0).max(1).optional(),
      intelligencePriority: E().min(0).max(1).optional()
    })),
    ToolChoiceSchema_2 = P(() => u({
      mode: B(["auto", "required", "none"]).optional()
    })),
    BooleanSchemaSchema_2 = P(() => u({
      type: T("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: I().optional()
    })),
    StringSchemaSchema_2 = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: E().optional(),
      maxLength: E().optional(),
      format: B(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    })),
    NumberSchemaSchema_2 = P(() => u({
      type: B(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: E().optional(),
      maximum: E().optional(),
      default: E().optional()
    })),
    UntitledSingleSelectEnumSchemaSchema_2 = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      default: o().optional()
    })),
    TitledSingleSelectEnumSchemaSchema_2 = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: C(u({
        const: o(),
        title: o()
      })),
      default: o().optional()
    })),
    LegacyTitledEnumSchemaSchema_2 = P(() => u({
      type: T("string"),
      title: o().optional(),
      description: o().optional(),
      enum: C(o()),
      enumNames: C(o()).optional(),
      default: o().optional()
    })),
    SingleSelectEnumSchemaSchema_2 = P(() => Be([UntitledSingleSelectEnumSchemaSchema_2, TitledSingleSelectEnumSchemaSchema_2])),
    UntitledMultiSelectEnumSchemaSchema_2 = P(() => u({
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
    })),
    TitledMultiSelectEnumSchemaSchema_2 = P(() => u({
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
    })),
    MultiSelectEnumSchemaSchema_2 = P(() => Be([UntitledMultiSelectEnumSchemaSchema_2, TitledMultiSelectEnumSchemaSchema_2])),
    EnumSchemaSchema_2 = P(() => Be([LegacyTitledEnumSchemaSchema_2, SingleSelectEnumSchemaSchema_2, MultiSelectEnumSchemaSchema_2])),
    PrimitiveSchemaDefinitionSchema_2 = P(() => Be([EnumSchemaSchema_2, BooleanSchemaSchema_2, StringSchemaSchema_2, NumberSchemaSchema_2])),
    ElicitRequestFormParamsSchema_2 = P(() => TaskAugmentedRequestParamsSchema_2.extend({
      mode: T("form").optional(),
      message: o(),
      requestedSchema: u({
        type: T("object"),
        properties: me(o(), PrimitiveSchemaDefinitionSchema_2),
        required: C(o()).optional()
      }).catchall(oe())
    })),
    ResourceTemplateReferenceSchema_2 = P(() => u({
      type: T("ref/resource"),
      uri: o()
    })),
    PromptReferenceSchema_2 = P(() => u({
      type: T("ref/prompt"),
      name: o()
    })),
    RootSchema_2 = P(() => u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: me(o(), oe()).optional()
    })),
    shape = ClientCapabilitiesSchema.shape,
    ClientCapabilities2026Schema = P(() => u({
      experimental: shape.experimental,
      sampling: shape.sampling,
      elicitation: shape.elicitation,
      roots: shape.roots,
      extensions: shape.extensions
    })),
    shape_2 = ServerCapabilitiesSchema.shape,
    Et = P(() => u({
      experimental: shape_2.experimental,
      logging: shape_2.logging,
      completions: shape_2.completions,
      prompts: shape_2.prompts,
      resources: shape_2.resources,
      tools: shape_2.tools,
      extensions: shape_2.extensions
    })),
    Pt = P(() => xt({
      progressToken: r.optional(),
      [Ke]: o(),
      [Lt]: ImplementationSchema.optional(),
      [vIe]: ClientCapabilities2026Schema,
      [Ut]: i.optional()
    })),
    ToolSchema_2 = P(() => u({
      ...BaseMetadataSchema_2.shape,
      ...IconsSchema_2.shape,
      description: o().optional(),
      inputSchema: xt({
        $schema: o().optional(),
        type: T("object")
      }),
      outputSchema: xt({
        $schema: o().optional()
      }).optional(),
      annotations: ToolAnnotationsSchema_2.optional(),
      _meta: me(o(), oe()).optional()
    })),
    ToolResultContentSchema_2 = P(() => u({
      type: T("tool_result"),
      toolUseId: o(),
      content: C(N),
      structuredContent: oe().optional(),
      isError: I().optional(),
      _meta: me(o(), oe()).optional()
    })),
    SamplingMessageContentBlockSchema_2 = P(() => Be([TextContentSchema_2, ImageContentSchema_2, AudioContentSchema_2, ToolUseContentSchema_2, ToolResultContentSchema_2])),
    SamplingMessageSchema_2 = P(() => u({
      role: n,
      content: Be([SamplingMessageContentBlockSchema_2, C(SamplingMessageContentBlockSchema_2)]),
      _meta: me(o(), oe()).optional()
    })),
    ResultTypeSchema = P(() => o()),
    ResultMetaSchema = P(() => xt({
      [h1e]: ImplementationSchema.optional().catch(void 0)
    })),
    _meta_2 = ResultMetaSchema.optional();
  function $e(ge) {
    return xt({
      _meta: _meta_2,
      resultType: ResultTypeSchema.default("complete"),
      ...ge
    });
  }
  let ResultSchema_2 = P(() => $e({})),
    PaginatedResultSchema_2 = P(() => $e({
      nextCursor: CursorSchema_2.optional()
    })),
    CallToolResultSchema_2 = P(() => $e({
      content: C(N),
      structuredContent: oe().optional(),
      isError: I().optional()
    })),
    ListToolsResultSchema_2 = P(() => $e({
      ttlMs: E().int().min(0),
      cacheScope: B(["public", "private"]),
      tools: C(ToolSchema_2),
      nextCursor: CursorSchema_2.optional()
    })),
    ListPromptsResultSchema_2 = P(() => $e({
      ttlMs: E().int().min(0),
      cacheScope: B(["public", "private"]),
      prompts: C(PromptSchema_2),
      nextCursor: CursorSchema_2.optional()
    })),
    GetPromptResultSchema_2 = P(() => $e({
      description: o().optional(),
      messages: C(PromptMessageSchema_2)
    })),
    ListResourcesResultSchema_2 = P(() => $e({
      ttlMs: E().int().min(0),
      cacheScope: B(["public", "private"]),
      resources: C(ResourceSchema_2),
      nextCursor: CursorSchema_2.optional()
    })),
    ListResourceTemplatesResultSchema_2 = P(() => $e({
      ttlMs: E().int().min(0),
      cacheScope: B(["public", "private"]),
      resourceTemplates: C(ResourceTemplateSchema_2),
      nextCursor: CursorSchema_2.optional()
    })),
    ReadResourceResultSchema_2 = P(() => $e({
      ttlMs: E().int().min(0),
      cacheScope: B(["public", "private"]),
      contents: C(Be([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]))
    })),
    CompleteResultSchema_2 = P(() => $e({
      completion: u({
        values: C(o()).max(100),
        total: E().int().optional(),
        hasMore: I().optional()
      }).loose()
    })),
    CacheableResultSchema = P(() => $e({
      ttlMs: E().int().min(0),
      cacheScope: B(["public", "private"])
    })),
    DiscoverResultSchema = P(() => $e({
      ttlMs: E().int().min(0).catch(0),
      cacheScope: B(["public", "private"]).catch("private"),
      supportedVersions: C(o()),
      capabilities: Et,
      instructions: o().optional()
    })),
    Qe = P(() => u({
      messages: C(SamplingMessageSchema_2),
      modelPreferences: ModelPreferencesSchema_2.optional(),
      systemPrompt: o().optional(),
      includeContext: B(["none", "thisServer", "allServers"]).optional(),
      temperature: E().optional(),
      maxTokens: E().int(),
      stopSequences: C(o()).optional(),
      metadata: JSONObjectSchema_2.optional(),
      tools: C(ToolSchema_2).optional(),
      toolChoice: ToolChoiceSchema_2.optional()
    })),
    CreateMessageRequestSchema_2 = P(() => u({
      method: T("sampling/createMessage"),
      params: Qe
    })),
    ListRootsRequestSchema_2 = P(() => u({
      method: T("roots/list"),
      params: u({
        _meta: me(o(), oe()).optional()
      }).optional()
    })),
    CreateMessageResultSchema_2 = P(() => u({
      ...SamplingMessageSchema_2.shape,
      model: o(),
      stopReason: o().optional()
    })),
    ListRootsResultSchema_2 = P(() => u({
      roots: C(RootSchema_2)
    })),
    ElicitResultSchema_2 = P(() => u({
      action: B(["accept", "decline", "cancel"]),
      content: me(o(), Be([o(), E(), I(), C(o())])).optional()
    })),
    ElicitRequestURLParamsSchema_2 = P(() => u({
      mode: T("url"),
      message: o(),
      url: o().url()
    })),
    fr = P(() => Be([ElicitRequestFormParamsSchema_2, ElicitRequestURLParamsSchema_2])),
    ElicitRequestSchema_2 = P(() => u({
      method: T("elicitation/create"),
      params: fr
    })),
    InputRequestSchema = P(() => Be([CreateMessageRequestSchema_2, ListRootsRequestSchema_2, ElicitRequestSchema_2])),
    InputResponseSchema = P(() => Be([CreateMessageResultSchema_2, ListRootsResultSchema_2, ElicitResultSchema_2])),
    InputRequestsSchema = P(() => me(o(), InputRequestSchema)),
    InputResponsesSchema = P(() => me(o(), InputResponseSchema)),
    InputRequiredResultSchema = P(() => $e({
      inputRequests: InputRequestsSchema.optional(),
      requestState: o().optional()
    })),
    gt = {
      inputResponses: InputResponsesSchema.optional(),
      requestState: o().optional()
    },
    InputResponseRequestParamsSchema = P(() => u({
      _meta: Pt,
      ...gt
    })),
    po = P(() => xt({
      progressToken: r.optional()
    }));
  function Ie(ge, yt) {
    return u({
      method: T(ge),
      params: u({
        _meta: Pt,
        ...yt
      })
    });
  }
  function Oe(ge, yt) {
    return u({
      method: T(ge),
      params: u({
        _meta: po.optional(),
        ...yt
      }).optional()
    });
  }
  let br = {
      name: o(),
      arguments: me(o(), oe()).optional(),
      ...gt
    },
    Ue = {
      cursor: CursorSchema_2.optional()
    },
    CallToolRequestSchema_2 = P(() => Ie("tools/call", br)),
    ListToolsRequestSchema_2 = P(() => Ie("tools/list", Ue)),
    ListPromptsRequestSchema_2 = P(() => Ie("prompts/list", Ue)),
    GetPromptRequestSchema_2 = P(() => Ie("prompts/get", {
      name: o(),
      arguments: me(o(), o()).optional(),
      ...gt
    })),
    ListResourcesRequestSchema_2 = P(() => Ie("resources/list", Ue)),
    ListResourceTemplatesRequestSchema_2 = P(() => Ie("resources/templates/list", Ue)),
    ReadResourceRequestSchema_2 = P(() => Ie("resources/read", {
      uri: o(),
      ...gt
    })),
    Rr = {
      ref: Be([PromptReferenceSchema_2, ResourceTemplateReferenceSchema_2]),
      argument: u({
        name: o(),
        value: o()
      }),
      context: u({
        arguments: me(o(), o()).optional()
      }).optional()
    },
    CompleteRequestSchema_2 = P(() => Ie("completion/complete", Rr)),
    DiscoverRequestSchema = P(() => Ie("server/discover", {})),
    Ot = P(() => u({
      toolsListChanged: I().optional(),
      promptsListChanged: I().optional(),
      resourcesListChanged: I().optional(),
      resourceSubscriptions: C(o()).optional()
    })),
    zr = {
      notifications: Ot
    },
    SubscriptionsListenRequestSchema = P(() => Ie("subscriptions/listen", zr)),
    $o = P(() => ResultMetaSchema.extend({
      "io.modelcontextprotocol/subscriptionId": a
    })),
    SubscriptionsListenResultSchema = P(() => xt({
      _meta: $o,
      resultType: ResultTypeSchema.default("complete")
    })),
    dispatchRequestSchemas = {
      "tools/call": P(() => Oe("tools/call", br)),
      "tools/list": P(() => Oe("tools/list", Ue)),
      "prompts/get": P(() => Oe("prompts/get", {
        name: o(),
        arguments: me(o(), o()).optional()
      })),
      "prompts/list": P(() => Oe("prompts/list", Ue)),
      "resources/list": P(() => Oe("resources/list", Ue)),
      "resources/templates/list": P(() => Oe("resources/templates/list", Ue)),
      "resources/read": P(() => Oe("resources/read", {
        uri: o()
      })),
      "completion/complete": P(() => Oe("completion/complete", Rr)),
      "server/discover": P(() => Oe("server/discover", {})),
      "subscriptions/listen": P(() => Oe("subscriptions/listen", zr))
    };
  function ke(ge) {
    return xt({
      _meta: _meta_2,
      ...ge
    });
  }
  let dispatchResultSchemas = {
      "tools/call": P(() => ke({
        content: C(N),
        structuredContent: oe().optional(),
        isError: I().optional()
      })),
      "tools/list": P(() => ke({
        ttlMs: E().int().min(0),
        cacheScope: B(["public", "private"]),
        tools: C(ToolSchema_2),
        nextCursor: CursorSchema_2.optional()
      })),
      "prompts/get": P(() => ke({
        description: o().optional(),
        messages: C(PromptMessageSchema_2)
      })),
      "prompts/list": P(() => ke({
        ttlMs: E().int().min(0),
        cacheScope: B(["public", "private"]),
        prompts: C(PromptSchema_2),
        nextCursor: CursorSchema_2.optional()
      })),
      "resources/list": P(() => ke({
        ttlMs: E().int().min(0),
        cacheScope: B(["public", "private"]),
        resources: C(ResourceSchema_2),
        nextCursor: CursorSchema_2.optional()
      })),
      "resources/templates/list": P(() => ke({
        ttlMs: E().int().min(0),
        cacheScope: B(["public", "private"]),
        resourceTemplates: C(ResourceTemplateSchema_2),
        nextCursor: CursorSchema_2.optional()
      })),
      "resources/read": P(() => ke({
        ttlMs: E().int().min(0),
        cacheScope: B(["public", "private"]),
        contents: C(Be([TextResourceContentsSchema_2, BlobResourceContentsSchema_2]))
      })),
      "completion/complete": P(() => ke({
        completion: u({
          values: C(o()).max(100),
          total: E().int().optional(),
          hasMore: I().optional()
        }).loose()
      })),
      "server/discover": P(() => ke({
        ttlMs: E().int().min(0).catch(0),
        cacheScope: B(["public", "private"]).catch("private"),
        supportedVersions: C(o()),
        capabilities: Et,
        instructions: o().optional()
      })),
      "subscriptions/listen": P(() => ke({}))
    },
    NotificationMetaSchema = P(() => xt({
      "io.modelcontextprotocol/subscriptionId": a.optional()
    })),
    SubscriptionsAcknowledgedNotificationSchema = P(() => u({
      method: T("notifications/subscriptions/acknowledged"),
      params: u({
        _meta: NotificationMetaSchema.optional(),
        notifications: Ot
      })
    })),
    Mt = P(() => u({
      _meta: NotificationMetaSchema.optional(),
      requestId: a,
      reason: o().optional()
    })),
    CancelledNotificationSchema_2 = P(() => u({
      method: T("notifications/cancelled"),
      params: Mt
    })),
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
    qe = result_3 => u({
      jsonrpc: T("2.0"),
      id: Be([o(), E().int()]),
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
    ContentBlockSchema: N,
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
    ServerCapabilities2026Schema: Et,
    RequestMetaEnvelopeSchema: Pt,
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
    CreateMessageRequestParamsSchema: Qe,
    CreateMessageRequestSchema: CreateMessageRequestSchema_2,
    ListRootsRequestSchema: ListRootsRequestSchema_2,
    CreateMessageResultSchema: CreateMessageResultSchema_2,
    ListRootsResultSchema: ListRootsResultSchema_2,
    ElicitResultSchema: ElicitResultSchema_2,
    ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema_2,
    ElicitRequestParamsSchema: fr,
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
    SubscriptionFilterSchema: Ot,
    SubscriptionsListenRequestSchema: SubscriptionsListenRequestSchema,
    SubscriptionsListenResultMetaSchema: $o,
    SubscriptionsListenResultSchema: SubscriptionsListenResultSchema,
    dispatchRequestSchemas: dispatchRequestSchemas,
    dispatchResultSchemas: dispatchResultSchemas,
    NotificationMetaSchema: NotificationMetaSchema,
    SubscriptionsAcknowledgedNotificationSchema: SubscriptionsAcknowledgedNotificationSchema,
    CancelledNotificationParamsSchema: Mt,
    CancelledNotificationSchema: CancelledNotificationSchema_2,
    notificationSchemas2026: notificationSchemas2026,
    JSONRPCResultResponseSchema: P(() => qe(ResultSchema_2)),
    CallToolResultResponseSchema: P(() => qe(Be([CallToolResultSchema_2, InputRequiredResultSchema]))),
    ListToolsResultResponseSchema: P(() => qe(ListToolsResultSchema_2)),
    ListPromptsResultResponseSchema: P(() => qe(ListPromptsResultSchema_2)),
    GetPromptResultResponseSchema: P(() => qe(Be([GetPromptResultSchema_2, InputRequiredResultSchema]))),
    ListResourcesResultResponseSchema: P(() => qe(ListResourcesResultSchema_2)),
    ListResourceTemplatesResultResponseSchema: P(() => qe(ListResourceTemplatesResultSchema_2)),
    ReadResourceResultResponseSchema: P(() => qe(Be([ReadResourceResultSchema_2, InputRequiredResultSchema]))),
    CompleteResultResponseSchema: P(() => qe(CompleteResultSchema_2)),
    DiscoverResultResponseSchema: P(() => qe(DiscoverResultSchema))
  };
}
var Qc;
function zt() {
  return Qc ??= Zc();
}
var el = ["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"];
function tl(e) {
  return el.includes(e);
}
var mn = Symbol("modelcontextprotocol.resultCacheHintFallback");
function ol(e) {
  return e[mn];
}
function ci(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function li(e) {
  return e === "public" || e === "private";
}
var Wa = function (e) {
    return e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.ResourceNotFound = -32002] = "ResourceNotFound", e[e.MissingRequiredClientCapability = -32021] = "MissingRequiredClientCapability", e[e.UnsupportedProtocolVersion = -32022] = "UnsupportedProtocolVersion", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired", e;
  }({}),
  Dc = class ProtocolError extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ProtocolError"
      });
    }
    static [Symbol.hasInstance](t) {
      return Ne(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Ne(this, t);
    }
    constructor(t, r, s) {
      super(r);
      this.code = t, this.data = s, this.name = "ProtocolError", wt(this, new.target);
    }
    static fromError(t, r, s) {
      if (t === Wa.UrlElicitationRequired && s) {
        let a = s;
        if (a.elicitations) return new di(a.elicitations, r);
      }
      if (t === Wa.UnsupportedProtocolVersion && s) {
        let a = s;
        if (Array.isArray(a.supported) && typeof a.requested === "string") return new da({
          supported: a.supported,
          requested: a.requested
        }, r);
      }
      if (t === Wa.InvalidParams || t === Wa.ResourceNotFound) {
        let a = s;
        if (typeof a?.uri === "string" && (t === Wa.ResourceNotFound || Object.keys(a).length === 1)) return new ui(a.uri, r);
      }
      if (t === Wa.MissingRequiredClientCapability && s) {
        let a = s;
        if (a.requiredCapabilities !== null && typeof a.requiredCapabilities === "object" && !Array.isArray(a.requiredCapabilities)) return new hi({
          requiredCapabilities: a.requiredCapabilities
        }, r);
      }
      return new ProtocolError(t, r, s);
    }
  },
  ui = class extends Dc {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.ResourceNotFoundError"
      });
    }
    constructor(uri, t = `Resource not found: ${uri}`) {
      super(Wa.InvalidParams, t, {
        uri: uri
      });
    }
    get uri() {
      return this.data.uri;
    }
  },
  di = class extends Dc {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UrlElicitationRequiredError"
      });
    }
    constructor(elicitations, t = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
      super(Wa.UrlElicitationRequired, t, {
        elicitations: elicitations
      });
    }
    get elicitations() {
      return this.data?.elicitations ?? [];
    }
  },
  da = class extends Dc {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.UnsupportedProtocolVersionError"
      });
    }
    constructor(e, t = `Unsupported protocol version: ${e.requested}`) {
      super(Wa.UnsupportedProtocolVersion, t, e);
    }
    get supported() {
      return this.data.supported;
    }
    get requested() {
      return this.data.requested;
    }
  },
  hi = class extends Dc {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.MissingRequiredClientCapabilityError"
      });
    }
    constructor(e, t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`) {
      super(Wa.MissingRequiredClientCapability, t, e);
    }
    get requiredCapabilities() {
      return this.data.requiredCapabilities;
    }
  },
  sl = 0,
  al = "private",
  nl = ["tools/call", "prompts/get", "resources/read"];
function il(e, t) {
  let resultType = t.resultType;
  if (resultType === void 0) return {
    ...t,
    resultType: "complete"
  };
  if (resultType === "complete") return t;
  if (nl.includes(e)) return t;
  throw new Dc(Wa.InternalError, `Handler for ${e} returned resultType '${String(resultType)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`);
}
function cl(e, t) {
  let r = ol(t);
  if (t.resultType !== "complete" || !tl(e)) return r === void 0 ? t : ml(t);
  let s = t,
    ttlMs = ci(s.ttlMs) ? s.ttlMs : dl(r),
    cacheScope = li(s.cacheScope) ? s.cacheScope : hl(r),
    i = {
      ...s,
      ttlMs: ttlMs,
      cacheScope: cacheScope
    };
  return delete i[mn], i;
}
function ll(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function ul(e, t) {
  if (t === void 0) return e;
  let _meta_3 = e._meta;
  if (_meta_3 === void 0) return {
    ...e,
    _meta: {
      [h1e]: t
    }
  };
  if (!ll(_meta_3)) return e;
  if (_meta_3[h1e] !== void 0) return e;
  return {
    ...e,
    _meta: {
      ..._meta_3,
      [h1e]: t
    }
  };
}
function dl(e) {
  return e !== void 0 && ci(e.ttlMs) ? e.ttlMs : sl;
}
function hl(e) {
  return e !== void 0 && li(e.cacheScope) ? e.cacheScope : al;
}
function ml(e) {
  let t = {
    ...e
  };
  return delete t[mn], t;
}
var pl = ["elicitation/create", "sampling/createMessage", "roots/list"],
  ia;
function mi() {
  if (ia) return ia;
  let e = zt();
  return ia = {
    request: {
      "elicitation/create": u({
        method: T("elicitation/create"),
        params: e.ElicitRequestParamsSchema
      }),
      "sampling/createMessage": u({
        method: T("sampling/createMessage"),
        params: e.CreateMessageRequestParamsSchema
      }),
      "roots/list": u({
        method: T("roots/list"),
        params: xt({}).optional()
      })
    },
    response: {
      "elicitation/create": e.ElicitResultSchema,
      "sampling/createMessage": e.CreateMessageResultSchema,
      "roots/list": e.ListRootsResultSchema
    }
  }, ia;
}
function pi(e) {
  return pl.includes(e);
}
function inputRequestSchema(e) {
  return pi(e) ? mi().request[e] : void 0;
}
function fl(e) {
  return pi(e) ? mi().response[e] : void 0;
}
var pn = {
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
  fi = {
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
  return Object.prototype.hasOwnProperty.call(pn, e);
}
function hasNotificationMethod_2(e) {
  return Object.prototype.hasOwnProperty.call(fi, e);
}
function Sl(e) {
  return Object.prototype.hasOwnProperty.call(pn, e);
}
function _l(e) {
  return hasRequestMethod_2(e) ? zt().dispatchRequestSchemas[e] : void 0;
}
function yl(e) {
  return Sl(e) ? zt().dispatchResultSchemas[e] : void 0;
}
function vl(e) {
  return hasNotificationMethod_2(e) ? zt().notificationSchemas2026[e] : void 0;
}
var Uh = Object.keys(pn),
  Dh = Object.keys(fi);
function to(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Qr(e, t) {
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
var bl = {
    ok: !1,
    reason: "not-in-era"
  },
  Rl = [Ke, vIe];
function zl(e, t) {
  let r = t,
    s = !1,
    a = () => {
      if (!s) r = {
        ...r
      }, s = !0;
      return r;
    },
    tools_2 = t.tools;
  if (e === "tools/list" && Array.isArray(tools_2) && tools_2.some(item => to(item) && "execution" in item)) a().tools = tools_2.map(item => {
    if (!to(item) || !("execution" in item)) return item;
    let c = {
      ...item
    };
    return delete c.execution, c;
  });
  let capabilities_3 = t.capabilities;
  if (to(capabilities_3) && "tasks" in capabilities_3) {
    let l = {
      ...capabilities_3
    };
    delete l.tasks, a().capabilities = l;
  }
  return r;
}
var wl = "io.modelcontextprotocol/tasks",
  $l = new Set(["working", "input_required", "completed", "failed", "cancelled"]);
function El(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return !1;
  return typeof e.taskId === "string" && e.taskId.length > 0 && $l.has(e.status);
}
var fn = {
    era: "2026-07-28",
    hasRequestMethod: hasRequestMethod_2,
    hasNotificationMethod: hasNotificationMethod_2,
    hasInputRequestMethod: e => inputRequestSchema(e) !== void 0,
    validateRequest: (e, t) => Qr(_l(e), t),
    validateResult: (e, t) => Qr(yl(e), t),
    validateNotification: (e, t) => Qr(vl(e), t),
    validateInputRequest: (e, t) => Qr(inputRequestSchema(e), t),
    validateInputResponse: (e, t) => Qr(fl(e), t),
    samplingResultVariant: () => bl,
    outboundEnvelope(e) {
      return {
        [Ke]: e.protocolVersion,
        [Lt]: e.clientInfo,
        [vIe]: e.clientCapabilities,
        ...(e.logLevel !== void 0 && {
          [Ut]: e.logLevel
        })
      };
    },
    validateEnvelopeMeta(e) {
      let t = [];
      for (let key of Rl) if (!(key in e)) t.push({
        key: key,
        problem: "missing"
      });
      let r = zt().RequestMetaEnvelopeSchema.safeParse(e);
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
    projectCallToolResult: e => ei(e),
    inputRequestSchema: inputRequestSchema,
    decodeResult(method, result_4, r) {
      if (!to(result_4)) return {
        kind: "invalid",
        error: new Vi(xi.InvalidResult, `Invalid result for ${method}: not an object`, {
          method: method
        })
      };
      let resultType_2 = result_4.resultType;
      if (resultType_2 === void 0) return {
        kind: "invalid",
        error: new Vi(xi.InvalidResult, `Invalid result for ${method}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, {
          method: method,
          violation: "missing-resultType"
        })
      };
      if (typeof resultType_2 !== "string") return {
        kind: "invalid",
        error: new Vi(xi.InvalidResult, `Invalid result for ${method}: non-string resultType`, {
          method: method,
          resultType: resultType_2
        })
      };
      if (resultType_2 === "input_required") {
        let inputRequests = result_4.inputRequests,
          inputRequests_2 = to(inputRequests) ? inputRequests : {},
          requestState = result_4.requestState;
        if (Object.keys(inputRequests_2).length === 0 && typeof requestState !== "string") return {
          kind: "invalid",
          error: new Vi(xi.InvalidResult, `Invalid result for ${method}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, {
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
        error: new Vi(xi.UnsupportedResultType, `Unsupported result type '${resultType_2}' for ${method}`, {
          resultType: resultType_2,
          method: method
        })
      };
      let a = Pl(),
        n = Object.hasOwn(a, method) ? a[method] : void 0;
      if (n !== void 0 && r !== !0) {
        let l = n.safeParse(result_4);
        if (!l.success) return {
          kind: "invalid",
          error: new Vi(xi.InvalidResult, `Invalid result for ${method}: ${l.error}`, {
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
      return ul(cl(e, il(e, zl(e, t))), r);
    },
    encodeErrorCode: e => e === -32002 ? -32602 : e,
    checkInboundEnvelope(e) {
      if (e.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
      let t = zt().RequestMetaEnvelopeSchema.safeParse(e.envelope);
      if (!t.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map(item => item.message).join("; ")}`;
    }
  },
  ca;
function Pl() {
  if (ca) return ca;
  let e = zt();
  return ca = {
    "tools/call": e.CallToolResultSchema,
    "tools/list": e.ListToolsResultSchema,
    "prompts/get": e.GetPromptResultSchema,
    "prompts/list": e.ListPromptsResultSchema,
    "resources/list": e.ListResourcesResultSchema,
    "resources/templates/list": e.ListResourceTemplatesResultSchema,
    "resources/read": e.ReadResourceResultSchema,
    "completion/complete": e.CompleteResultSchema,
    "server/discover": e.DiscoverResultSchema
  }, ca;
}
var ha = "2026-07-28";
function Ge(e) {
  return e !== void 0 && We(e) ? fn : hn;
}
function Hn(e) {
  if (e.revision !== void 0) return Ge(e.revision).era;
  return e.era === "modern" ? fn.era : hn.era;
}
function en(e) {
  return _i.some(item => item.hasRequestMethod(e));
}
function tn(e) {
  return _i.some(item => item.hasNotificationMethod(e));
}
var _i = [hn, fn],
  Tl = In({
    AnnotationsSchema: () => Je,
    AudioContentSchema: () => Kt,
    BaseMetadataSchema: () => He,
    BaseRequestParamsSchema: () => ze,
    BlobResourceContentsSchema: () => Lr,
    BooleanSchemaSchema: () => Hr,
    CallToolRequestParamsSchema: () => params_10,
    CallToolRequestSchema: () => bs,
    CallToolResultSchema: () => Vr,
    CancelTaskRequestSchema: () => xa,
    CancelTaskResultSchema: () => Fa,
    CancelledNotificationParamsSchema: () => params,
    CancelledNotificationSchema: () => qr,
    ClientCapabilitiesSchema: () => capabilities,
    ClientNotificationSchema: () => Ka,
    ClientRequestSchema: () => Ha,
    ClientResultSchema: () => Ja,
    ClientTasksCapabilitySchema: () => Mo,
    CompatibilityCallToolResultSchema: () => Xkn,
    CompleteRequestParamsSchema: () => params_16,
    CompleteRequestSchema: () => Gs,
    CompleteResultSchema: () => Bs,
    ContentBlockSchema: () => content,
    CreateMessageRequestParamsSchema: () => params_13,
    CreateMessageRequestSchema: () => Ns,
    CreateMessageResultSchema: () => Ms,
    CreateMessageResultWithToolsSchema: () => js,
    CreateTaskResultSchema: () => Na,
    CursorSchema: () => Er,
    DiscoverRequestSchema: () => Uo,
    DiscoverResultSchema: () => g1e,
    ElicitRequestFormParamsSchema: () => Wt,
    ElicitRequestParamsSchema: () => params_14,
    ElicitRequestSchema: () => Ds,
    ElicitRequestURLParamsSchema: () => uYt,
    ElicitResultSchema: () => Fs,
    ElicitationCompleteNotificationParamsSchema: () => params_15,
    ElicitationCompleteNotificationSchema: () => xs,
    EmbeddedResourceSchema: () => hs,
    EmptyResultSchema: () => kr,
    EnumSchemaSchema: () => Us,
    GetPromptRequestParamsSchema: () => params_9,
    GetPromptRequestSchema: () => us,
    GetPromptResultSchema: () => fs,
    GetTaskPayloadRequestSchema: () => La,
    GetTaskPayloadResultSchema: () => Ua,
    GetTaskRequestSchema: () => ja,
    GetTaskResultSchema: () => Aa,
    IconSchema: () => No,
    IconsSchema: () => st,
    ImageContentSchema: () => Ht,
    ImplementationSchema: () => KRt,
    InitializeRequestParamsSchema: () => params_2,
    InitializeRequestSchema: () => Ir,
    InitializeResultSchema: () => qRt,
    InitializedNotificationSchema: () => Or,
    JSONArraySchema: () => ka,
    JSONObjectSchema: () => pe,
    JSONRPCErrorResponseSchema: () => Cr,
    JSONRPCMessageSchema: () => Jat,
    JSONRPCNotificationSchema: () => Io,
    JSONRPCRequestSchema: () => qo,
    JSONRPCResponseSchema: () => qa,
    JSONRPCResultResponseSchema: () => Dt,
    JSONValueSchema: () => rt,
    LegacyTitledEnumSchemaSchema: () => Gr,
    ListChangedOptionsBaseSchema: () => xr,
    ListPromptsRequestSchema: () => cs,
    ListPromptsResultSchema: () => Ykn,
    ListResourceTemplatesRequestSchema: () => Ho,
    ListResourceTemplatesResultSchema: () => Kkn,
    ListResourcesRequestSchema: () => Fo,
    ListResourcesResultSchema: () => Qat,
    ListRootsRequestSchema: () => Ys,
    ListRootsResultSchema: () => Xs,
    ListTasksRequestSchema: () => Da,
    ListTasksResultSchema: () => Va,
    ListToolsRequestSchema: () => ys,
    ListToolsResultSchema: () => elt,
    LoggingLevelSchema: () => level,
    LoggingMessageNotificationParamsSchema: () => params_12,
    LoggingMessageNotificationSchema: () => Es,
    ModelHintSchema: () => Ps,
    ModelPreferencesSchema: () => Ts,
    MultiSelectEnumSchemaSchema: () => Ls,
    NotificationSchema: () => Te,
    NotificationsParamsSchema: () => Pe,
    NumberSchemaSchema: () => Bt,
    PaginatedRequestParamsSchema: () => xo,
    PaginatedRequestSchema: () => at,
    PaginatedResultSchema: () => nt,
    PingRequestSchema: () => Nr,
    PrimitiveSchemaDefinitionSchema: () => Yr,
    ProgressNotificationParamsSchema: () => params_3,
    ProgressNotificationSchema: () => Mr,
    ProgressSchema: () => Do,
    ProgressTokenSchema: () => progressToken,
    PromptArgumentSchema: () => is,
    PromptListChangedNotificationSchema: () => Ss,
    PromptMessageSchema: () => ps,
    PromptReferenceSchema: () => Ks,
    PromptSchema: () => qkn,
    ReadResourceRequestParamsSchema: () => params_4,
    ReadResourceRequestSchema: () => Jo,
    ReadResourceResultSchema: () => Go,
    RelatedTaskMetadataSchema: () => Gkn,
    RequestIdSchema: () => id_2,
    RequestMetaSchema: () => Pr,
    RequestSchema: () => fe,
    ResourceContentsSchema: () => jr,
    ResourceLinkSchema: () => ms,
    ResourceListChangedNotificationSchema: () => Bo,
    ResourceRequestParamsSchema: () => Vt,
    ResourceSchema: () => cYt,
    ResourceTemplateReferenceSchema: () => Hs,
    ResourceTemplateSchema: () => Vkn,
    ResourceUpdatedNotificationParamsSchema: () => as,
    ResourceUpdatedNotificationSchema: () => ns,
    ResultMetaObjectSchema: () => Tr,
    ResultSchema: () => result,
    RoleSchema: () => role,
    RootSchema: () => Ws,
    RootsListChangedNotificationSchema: () => Zs,
    SamplingContentSchema: () => content_2,
    SamplingMessageContentBlockSchema: () => vt,
    SamplingMessageSchema: () => Is,
    ServerCapabilitiesSchema: () => capabilities_2,
    ServerNotificationSchema: () => Ba,
    ServerRequestSchema: () => Ga,
    ServerResultSchema: () => Ya,
    ServerTasksCapabilitySchema: () => jo,
    SetLevelRequestParamsSchema: () => params_11,
    SetLevelRequestSchema: () => ws,
    SingleSelectEnumSchemaSchema: () => As,
    StringSchemaSchema: () => Gt,
    SubscribeRequestParamsSchema: () => params_5,
    SubscribeRequestSchema: () => Yo,
    SubscriptionFilterSchema: () => notifications,
    SubscriptionsAcknowledgedNotificationParamsSchema: () => params_8,
    SubscriptionsAcknowledgedNotificationSchema: () => rs,
    SubscriptionsListenRequestParamsSchema: () => params_7,
    SubscriptionsListenRequestSchema: () => es,
    SubscriptionsListenResultMetaSchema: () => _meta,
    SubscriptionsListenResultSchema: () => ss,
    TaskAugmentedRequestParamsSchema: () => Rt,
    TaskCreationParamsSchema: () => Oa,
    TaskMetadataSchema: () => ko,
    TaskSchema: () => task,
    TaskStatusNotificationParamsSchema: () => params_17,
    TaskStatusNotificationSchema: () => Ma,
    TaskStatusSchema: () => status,
    TextContentSchema: () => Ft,
    TextResourceContentsSchema: () => Ar,
    TitledMultiSelectEnumSchemaSchema: () => Wr,
    TitledSingleSelectEnumSchemaSchema: () => Jr,
    ToolAnnotationsSchema: () => gs,
    ToolChoiceSchema: () => Cs,
    ToolExecutionSchema: () => _s,
    ToolListChangedNotificationSchema: () => Rs,
    ToolResultContentSchema: () => ks,
    ToolSchema: () => Zat,
    ToolUseContentSchema: () => ds,
    UnsubscribeRequestParamsSchema: () => params_6,
    UnsubscribeRequestSchema: () => Zo,
    UntitledMultiSelectEnumSchemaSchema: () => Br,
    UntitledSingleSelectEnumSchemaSchema: () => Kr
  });
function $t(e) {
  if (e?.method === void 0 && EIe(e)) return Dt.parse(e);
  return Jat.parse(e);
}
function Ae(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ma(e) {
  return typeof e === "string" || Number.isSafeInteger(e);
}
function pa(e, t, r, s, a) {
  for (let n in e) if (n !== t && n !== r && n !== s && n !== a) return !1;
  return !0;
}
function yi(e) {
  if (e === void 0) return !0;
  if (!Ae(e)) return !1;
  let _meta_4 = e._meta;
  if (_meta_4 === void 0) return !0;
  if (!Ae(_meta_4)) return !1;
  if (_meta_4.progressToken !== void 0 && !ma(_meta_4.progressToken)) return !1;
  let r = _meta_4["io.modelcontextprotocol/related-task"];
  return r === void 0 || Ae(r) && typeof r.taskId === "string";
}
var nre = e => Ae(e) && e.jsonrpc === "2.0" && ma(e.id) && typeof e.method === "string" && yi(e.params) && pa(e, "jsonrpc", "id", "method", "params"),
  W8r = e => Ae(e) && e.jsonrpc === "2.0" && typeof e.method === "string" && yi(e.params) && pa(e, "jsonrpc", "method", "params"),
  EIe = e => Ae(e) && e.jsonrpc === "2.0" && ma(e.id) && Ae(e.result) && (e.result._meta === void 0 || Ae(e.result._meta)) && pa(e, "jsonrpc", "id", "result"),
  TIe = e => Ae(e) && e.jsonrpc === "2.0" && (e.id === void 0 || ma(e.id)) && Ae(e.error) && Number.isSafeInteger(e.error.code) && typeof e.error.message === "string" && pa(e, "jsonrpc", "id", "error");
var vi = e => typeof e === "object" && e !== null && !Array.isArray(e) && e.resultType === "input_required";
var csr = e => Ae(e) && e.method === "initialize" && Ir.safeParse(e).success,
  z8r = e => Ae(e) && e.method === "notifications/initialized" && Or.safeParse(e).success;
var Cl = "Mcp-Param-",
  Kn = "x-mcp-header",
  kl = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
  ql = new Set(["string", "integer", "boolean", "number"]);
function Sn(e) {
  let declarations = [],
    r = new Map(),
    s = (n, path, l) => {
      if (n === null || typeof n !== "object") return;
      let c = n;
      if (Kn in c) {
        if (!l || path.length === 0) return `${la(path)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
        let headerName = c[Kn];
        if (typeof headerName !== "string" || headerName.length === 0) return `${la(path)}: x-mcp-header MUST be a non-empty string`;
        if (!kl.test(headerName)) return `${la(path)}: x-mcp-header '${headerName}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
        let type = typeof c.type === "string" ? c.type : void 0;
        if (type === void 0 || !ql.has(type)) return `${la(path)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${type ?? "<none>"}`;
        let w = headerName.toLowerCase(),
          k = r.get(w);
        if (k !== void 0) return `x-mcp-header '${headerName}' is not case-insensitively unique (also declared as '${k}')`;
        r.set(w, headerName), declarations.push({
          path: path,
          headerName: headerName,
          type: type
        });
      }
      let properties = c.properties;
      if (properties !== null && typeof properties === "object") for (let [m, _] of Object.entries(properties)) {
        let w = s(_, [...path, m], l);
        if (w !== void 0) return w;
      }
      for (let m of Il) {
        let _ = c[m];
        if (_ === void 0) continue;
        let w = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && Ol.has(m) ? Object.values(_) : [_];
        for (let k of w) {
          let y = s(k, [...path, `<${m}>`], !1);
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
var Il = ["items", "prefixItems", "contains", "additionalProperties", "unevaluatedProperties", "unevaluatedItems", "propertyNames", "patternProperties", "dependentSchemas", "oneOf", "anyOf", "allOf", "not", "if", "then", "else", "$defs", "definitions"],
  Ol = new Set(["patternProperties", "dependentSchemas", "$defs", "definitions"]);
function la(e) {
  return e.length === 0 ? "<root>" : e.join(".");
}
var bi = "=?base64?",
  Ri = "?=";
function Nl(e) {
  if (typeof e === "string") return e;
  if (typeof e === "boolean") return e ? "true" : "false";
  if (typeof e === "number") {
    if (!Number.isFinite(e)) return;
    if (Number.isInteger(e) && !Number.isSafeInteger(e)) return;
    return String(e);
  }
}
function Ml(e) {
  if (e.length === 0) return !0;
  if (e.startsWith(bi) && e.endsWith(Ri)) return !0;
  if (e !== e.trim()) return !0;
  for (let t = 0; t < e.length; t++) {
    let r = e.codePointAt(t);
    if (r === 9 || r >= 32 && r <= 126) continue;
    return !0;
  }
  return !1;
}
function jl(e) {
  let t = new TextEncoder().encode(e),
    r = "";
  for (let s of t) r += String.fromCodePoint(s);
  return btoa(r);
}
function fa(e) {
  return Ml(e) ? `${bi}${jl(e)}${Ri}` : e;
}
function Al(e, t) {
  let r = e;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function zi(e, t) {
  let r = {};
  for (let s of e) {
    let a = Al(t, s.path);
    if (a === void 0 || a === null) continue;
    let n = Nl(a);
    if (n === void 0) continue;
    r[`${Cl}${s.headerName}`] = fa(n);
  }
  return r;
}
var Yt = -32020,
  Vh = [{
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
    codes: [Wa.InvalidRequest],
    conformance: ["server-stateless"],
    rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic."
  }, {
    rung: "era-classification",
    order: 3,
    evaluatedAt: "edge",
    codes: [Yt, Wa.UnsupportedProtocolVersion],
    conformance: ["server-stateless", "http-header-validation", "http-custom-header-server-validation"],
    rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions."
  }, {
    rung: "envelope",
    order: 4,
    evaluatedAt: "edge",
    codes: [Wa.InvalidParams],
    conformance: ["server-stateless"],
    rationale: "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400."
  }, {
    rung: "method-registry",
    order: 5,
    evaluatedAt: "dispatch",
    codes: [Wa.MethodNotFound],
    conformance: ["server-stateless"],
    rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at."
  }, {
    rung: "request-params",
    order: 6,
    evaluatedAt: "dispatch",
    codes: [Wa.InvalidParams],
    conformance: [],
    rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table."
  }, {
    rung: "standard-header-validation",
    order: 7,
    evaluatedAt: "pre-dispatch",
    codes: [Yt],
    conformance: ["http-header-validation"],
    rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted."
  }, {
    rung: "client-capabilities",
    order: 8,
    evaluatedAt: "pre-dispatch",
    codes: [Wa.MissingRequiredClientCapability],
    conformance: ["server-stateless"],
    rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable."
  }, {
    rung: "param-header-validation",
    order: 9,
    evaluatedAt: "pre-dispatch",
    codes: [Yt],
    conformance: ["http-custom-header-server-validation"],
    rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung."
  }],
  xh = {
    [Wa.ParseError]: 400,
    [Wa.InvalidRequest]: 400,
    [Wa.MethodNotFound]: 404,
    [Wa.UnsupportedProtocolVersion]: 400,
    [Wa.MissingRequiredClientCapability]: 400,
    [Yt]: 400
  };
function Sa(e, t) {
  return axo(e, t);
}
function eo(e) {
  return new Set(e.flatMap(item => Object.keys(item.shape)));
}
function an(e) {
  if (e == null) return !1;
  let t = typeof e;
  if (t !== "object" && t !== "function") return !1;
  if (!("~standard" in e)) return !1;
  return typeof e["~standard"]?.validate === "function";
}
var Jn = !1,
  target = "draft-2020-12";
function Ll(e, io_2 = "input") {
  let r = e["~standard"],
    s;
  if (r.jsonSchema) s = r.jsonSchema[io_2]({
    target: target
  });else if (r.vendor === "zod") {
    if (!("_zod" in e)) throw Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
    if (!Jn) Jn = !0, console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
    s = cSt(e, {
      target: target,
      io: io_2
    });
  } else throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (io_2 === "output") {
    if (s.type !== void 0) return s;
    return wi(s) ? {
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
function wi(e) {
  if ("properties" in e || "patternProperties" in e || "additionalProperties" in e || "required" in e) return !0;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e[t];
    if (Array.isArray(r) && r.length > 0) return r.every(item => item !== null && typeof item === "object" && (item.type === "object" || wi(item)));
  }
  return !1;
}
function Ul(e) {
  if (!e.path?.length) return e.message;
  return `${e.path.map(item => String(typeof item === "object" ? item.key : item)).join(".")}: ${e.message}`;
}
async function rn(e, t) {
  let r = await e["~standard"].validate(t);
  if (r.issues && r.issues.length > 0) return {
    success: !1,
    error: r.issues.map(item => Ul(item)).join(", ")
  };
  return {
    success: !0,
    data: r.value
  };
}
function Dl(e) {
  let t = cSt(e, {
    target: target,
    io: "input"
  });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var Vl = /\\\.\\d\{(\d+)\}/;
function xl(e) {
  let t = Vl.exec(e),
    r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [!1, !0].flatMap(s => [!1, !0].flatMap(a => r.map(n => hH({
    local: s,
    offset: a,
    precision: n
  }))));
}
function Fl(e, t) {
  let r;
  switch (e) {
    case "email":
      r = [Pea()];
      break;
    case "uri":
      r = [Wtt()];
      break;
    case "date":
      r = [Dfa()];
      break;
    case "date-time":
      r = xl(t);
      break;
  }
  return new Set(r.map(item => Dl(item)).filter(item => item !== void 0));
}
function Hl(e, t, r) {
  if (r !== "zod") return !0;
  return Fl(e, t).has(t);
}
function oo(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Kl(e) {
  try {
    return Ll(e, "input");
  } catch (error) {
    let r = error instanceof Error ? error.message : String(error);
    throw new Dc(Wa.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
  }
}
var Jl = new Set(["$comment", "deprecated", "description", "examples", "readOnly", "title", "writeOnly"]);
function gn(e) {
  return Jl.has(e) || e.startsWith("x-");
}
var Gl = new Set(["$schema", ...Object.keys(Wt.shape.requestedSchema.shape)]),
  Gn = {
    string: eo([Gt, Kr, Jr, Gr]),
    number: eo([Bt]),
    integer: eo([Bt]),
    boolean: eo([Hr]),
    array: eo([Br, Wr])
  },
  Bl = new Set(Gt.shape.format.unwrap().options);
function Wl(e, t, r, s) {
  if (!oo(e)) return e;
  let a = typeof e.type === "string" && Object.hasOwn(Gn, e.type) ? Gn[e.type] : void 0;
  if (a === void 0) return e;
  let n = {};
  for (let [i, l] of Object.entries(e)) if (a.has(i) || gn(i)) n[i] = l;else if (i === "pattern" && e.type === "string" && typeof e.format === "string") {
    if (!Bl.has(e.format)) n[i] = l;else if (typeof l !== "string" || !Hl(e.format, l, r)) s.push(`${t}.${i}`);
  } else s.push(`${t}.${i}`);
  return n;
}
function Yl(e, t) {
  let r = {},
    s = [];
  for (let [a, n] of Object.entries(e)) if (a === "properties" && oo(n)) r[a] = Object.fromEntries(Object.entries(n).map(([i, l]) => [i, Wl(l, `properties.${i}`, t, s)]));else if (Gl.has(a)) r[a] = n;else if (!gn(a)) s.push(a);
  if (s.length > 0) throw new Dc(Wa.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
  return r;
}
function Xl(e, t) {
  if (!oo(e.properties)) return t;
  let r = Object.entries(e.properties).filter(([, s]) => !Sa(Yr, s).success).map(([s]) => `properties.${s}`);
  return r.length > 0 ? r.join(", ") : t;
}
function cn(e, t, r = "") {
  if (Array.isArray(e) && Array.isArray(t)) return e.flatMap((item, index) => cn(item, t[index], `${r}[${index}]`));
  if (!oo(e) || !oo(t)) return [];
  return Object.entries(e).flatMap(([s, a]) => {
    let n = r ? `${r}.${s}` : s;
    if (!Object.prototype.hasOwnProperty.call(t, s)) return gn(s) ? [] : [n];
    return cn(a, t[s], n);
  });
}
function Zl(e) {
  if (!an(e.requestedSchema)) return {
    ...e,
    mode: "form",
    requestedSchema: e.requestedSchema
  };
  let vendor = e.requestedSchema["~standard"].vendor,
    r = Yl(Kl(e.requestedSchema), vendor),
    s = Sa(Wt.shape.requestedSchema, r);
  if (!s.success) throw new Dc(Wa.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${Xl(r, s.error.message)}`);
  let a = cn(r, s.data);
  if (a.length > 0) throw new Dc(Wa.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`);
  let n = (s.data.required ?? []).filter(item => !Object.prototype.hasOwnProperty.call(s.data.properties, item));
  if (n.length > 0) throw new Dc(Wa.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`);
  return {
    ...e,
    mode: "form",
    requestedSchema: s.data
  };
}
function Ql(e) {
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
var Fh = Object.assign(Ql, {
  elicit(e) {
    try {
      return {
        method: "elicitation/create",
        params: Zl(e)
      };
    } catch (t) {
      throw t instanceof Dc ? TypeError(t.message, {
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
  createMessage(params_18) {
    return {
      method: "sampling/createMessage",
      params: params_18
    };
  },
  listRoots() {
    return {
      method: "roots/list"
    };
  }
});
var eu = !0,
  tu = 10,
  ru = 250;
function $i(e) {
  return {
    autoFulfill: e?.autoFulfill ?? eu,
    maxRounds: e?.maxRounds ?? tu
  };
}
function ou(e, inputResponses, requestState_2) {
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
function su(e, t) {
  return `Multi-round-trip request '${e}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function au(e, t) {
  return new Promise((r, s) => {
    if (t?.aborted) {
      s(t.reason instanceof Vi ? t.reason : new Vi(xi.RequestTimeout, String(t.reason)));
      return;
    }
    let a = setTimeout(() => {
        t?.removeEventListener("abort", n), r();
      }, e),
      n = () => {
        clearTimeout(a), s(t?.reason instanceof Vi ? t.reason : new Vi(xi.RequestTimeout, String(t?.reason)));
      };
    t?.addEventListener("abort", n, {
      once: !0
    });
  });
}
function nu(e) {
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
async function iu(e) {
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
    if (progress += 1, progress > config.maxRounds) throw new Vi(xi.InputRequiredRoundsExceeded, su(method_2, config.maxRounds), {
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
      let y = nu(signal);
      try {
        let v = await Promise.all(m.map(async ([p, h]) => {
          try {
            return [p, await hooks.dispatchInputRequest(p, h, y.signal)];
          } catch (error) {
            throw y.abort(error), error;
          }
        }));
        _ = Object.fromEntries(v);
      } finally {
        y.dispose();
      }
    } else await au(ru, signal);
    let w = {
      ...(requestOptions.timeout !== void 0 && {
        timeout: requestOptions.timeout
      })
    };
    if (requestOptions.maxTotalTimeout !== void 0) {
      let totalElapsed = Date.now() - l,
        v = requestOptions.maxTotalTimeout - totalElapsed;
      if (v <= 0) throw new Vi(xi.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: requestOptions.maxTotalTimeout,
        totalElapsed: totalElapsed
      });
      w.maxTotalTimeout = v;
    }
    let k = await hooks.retry(ou(originalParams, _, firstPayload.requestState), w);
    if (vi(k)) {
      firstPayload = {
        inputRequests: k.inputRequests ?? {},
        ...(k.requestState !== void 0 && {
          requestState: k.requestState
        })
      };
      continue;
    }
    return k;
  }
}
var cu = ["AnnotationsSchema", "AudioContentSchema", "BaseMetadataSchema", "BlobResourceContentsSchema", "BooleanSchemaSchema", "CallToolRequestSchema", "CallToolRequestParamsSchema", "CallToolResultSchema", "CancelledNotificationSchema", "CancelledNotificationParamsSchema", "CancelTaskRequestSchema", "CancelTaskResultSchema", "ClientCapabilitiesSchema", "ClientNotificationSchema", "ClientRequestSchema", "ClientResultSchema", "CompatibilityCallToolResultSchema", "CompleteRequestSchema", "CompleteRequestParamsSchema", "CompleteResultSchema", "ContentBlockSchema", "CreateMessageRequestSchema", "CreateMessageRequestParamsSchema", "CreateMessageResultSchema", "CreateMessageResultWithToolsSchema", "CreateTaskResultSchema", "CursorSchema", "DiscoverRequestSchema", "DiscoverResultSchema", "ElicitationCompleteNotificationSchema", "ElicitationCompleteNotificationParamsSchema", "ElicitRequestSchema", "ElicitRequestFormParamsSchema", "ElicitRequestParamsSchema", "ElicitRequestURLParamsSchema", "ElicitResultSchema", "EmbeddedResourceSchema", "EmptyResultSchema", "EnumSchemaSchema", "GetPromptRequestSchema", "GetPromptRequestParamsSchema", "GetPromptResultSchema", "GetTaskPayloadRequestSchema", "GetTaskPayloadResultSchema", "GetTaskRequestSchema", "GetTaskResultSchema", "IconSchema", "IconsSchema", "ImageContentSchema", "ImplementationSchema", "InitializedNotificationSchema", "InitializeRequestSchema", "InitializeRequestParamsSchema", "InitializeResultSchema", "JSONArraySchema", "JSONObjectSchema", "JSONRPCErrorResponseSchema", "JSONRPCMessageSchema", "JSONRPCNotificationSchema", "JSONRPCRequestSchema", "JSONRPCResponseSchema", "JSONRPCResultResponseSchema", "JSONValueSchema", "LegacyTitledEnumSchemaSchema", "ListPromptsRequestSchema", "ListPromptsResultSchema", "ListResourcesRequestSchema", "ListResourcesResultSchema", "ListResourceTemplatesRequestSchema", "ListResourceTemplatesResultSchema", "ListRootsRequestSchema", "ListRootsResultSchema", "ListTasksRequestSchema", "ListTasksResultSchema", "ListToolsRequestSchema", "ListToolsResultSchema", "LoggingLevelSchema", "LoggingMessageNotificationSchema", "LoggingMessageNotificationParamsSchema", "ModelHintSchema", "ModelPreferencesSchema", "MultiSelectEnumSchemaSchema", "NotificationSchema", "NumberSchemaSchema", "PaginatedRequestSchema", "PaginatedRequestParamsSchema", "PaginatedResultSchema", "PingRequestSchema", "PrimitiveSchemaDefinitionSchema", "ProgressSchema", "ProgressNotificationSchema", "ProgressNotificationParamsSchema", "ProgressTokenSchema", "PromptSchema", "PromptArgumentSchema", "PromptListChangedNotificationSchema", "PromptMessageSchema", "PromptReferenceSchema", "ReadResourceRequestSchema", "ReadResourceRequestParamsSchema", "ReadResourceResultSchema", "RelatedTaskMetadataSchema", "RequestSchema", "RequestIdSchema", "RequestMetaSchema", "ResourceSchema", "ResourceContentsSchema", "ResourceLinkSchema", "ResourceListChangedNotificationSchema", "ResourceRequestParamsSchema", "ResourceTemplateSchema", "ResourceTemplateReferenceSchema", "ResourceUpdatedNotificationSchema", "ResourceUpdatedNotificationParamsSchema", "ResultMetaObjectSchema", "ResultSchema", "RoleSchema", "RootSchema", "RootsListChangedNotificationSchema", "SamplingContentSchema", "SamplingMessageSchema", "SamplingMessageContentBlockSchema", "ServerCapabilitiesSchema", "ServerNotificationSchema", "ServerRequestSchema", "ServerResultSchema", "SetLevelRequestSchema", "SetLevelRequestParamsSchema", "SingleSelectEnumSchemaSchema", "StringSchemaSchema", "SubscribeRequestSchema", "SubscribeRequestParamsSchema", "SubscriptionFilterSchema", "SubscriptionsAcknowledgedNotificationSchema", "SubscriptionsAcknowledgedNotificationParamsSchema", "SubscriptionsListenRequestSchema", "SubscriptionsListenRequestParamsSchema", "SubscriptionsListenResultSchema", "SubscriptionsListenResultMetaSchema", "TaskAugmentedRequestParamsSchema", "TaskCreationParamsSchema", "TaskMetadataSchema", "TaskSchema", "TaskStatusSchema", "TaskStatusNotificationSchema", "TaskStatusNotificationParamsSchema", "TextContentSchema", "TextResourceContentsSchema", "TitledMultiSelectEnumSchemaSchema", "TitledSingleSelectEnumSchemaSchema", "ToolSchema", "ToolAnnotationsSchema", "ToolChoiceSchema", "ToolExecutionSchema", "ToolListChangedNotificationSchema", "ToolResultContentSchema", "ToolUseContentSchema", "UnsubscribeRequestSchema", "UnsubscribeRequestParamsSchema", "UntitledMultiSelectEnumSchemaSchema", "UntitledSingleSelectEnumSchemaSchema"],
  lu = {
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
  Ei = {},
  Pi = {};
function Ti(e, t) {
  let r = e.slice(0, -6);
  Ei[r] = t, Pi[r] = s => t.safeParse(s).success;
}
for (let e of cu) Ti(e, Tl[e]);
for (let [e, t] of Object.entries(lu)) Ti(e, t);
var uu = Object.freeze(Ei),
  Ci = Object.freeze(Pi);
function du(e) {
  switch (e) {
    case "initialize":
    case "notifications/initialized":
      return Ge(void 0);
    case "server/discover":
      return Ge(ha);
    default:
      return;
  }
}
var no = 60000,
  hu = [Ke, Lt, vIe, Ut],
  mu = ["inputResponses", "requestState"];
function Bn(message, t) {
  let params_19 = message.params;
  if (!ro(params_19)) return {
    message: message,
    lifted: {}
  };
  let _meta_5 = params_19._meta,
    a = ro(_meta_5) ? hu.filter(item => item in _meta_5) : [],
    n = t === "request" ? mu.filter(item => item in params_19) : [];
  if (a.length === 0 && n.length === 0) return {
    message: message,
    lifted: {}
  };
  let lifted = {},
    params_20 = {
      ...params_19
    };
  if (a.length > 0 && ro(_meta_5)) {
    let c = {},
      d = {
        ..._meta_5
      };
    for (let m of a) c[m] = _meta_5[m], delete d[m];
    if (lifted.envelope = c, Object.keys(d).length > 0) params_20._meta = d;else delete params_20._meta;
  }
  for (let c of n) {
    if (c === "inputResponses") lifted.inputResponses = params_20[c];
    if (c === "requestState") lifted.requestState = params_20[c];
    delete params_20[c];
  }
  return {
    message: {
      ...message,
      params: params_20
    },
    lifted: lifted
  };
}
function Wn(e, t) {
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
function _n(e) {
  return () => e;
}
var pu = _n(void 0),
  fu,
  ki = class {
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
      fu = (e, t) => {
        e._negotiatedProtocolVersion = t;
      };
    }
    _supportedProtocolVersions;
    onclose;
    onerror;
    fallbackRequestHandler;
    fallbackNotificationHandler;
    constructor(e) {
      this._options = e, this._supportedProtocolVersions = e?.supportedProtocolVersions ?? VRt, this.setNotificationHandler("notifications/cancelled", t => {
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
      return Promise.reject(new Vi(xi.UnsupportedResultType, `Unsupported result type '${e.kind}' for ${t.request.method}`, {
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
      if (t.maxTotalTimeout && totalElapsed_2 >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e), new Vi(xi.RequestTimeout, "Maximum total timeout exceeded", {
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
        if (s?.(a, n), EIe(a) || TIe(a)) this._onresponse(a);else if (nre(a)) this._onrequest(a, n);else if (W8r(a)) this._onnotification(a, n);else this._onerror(Error(`Unknown message type: ${JSON.stringify(a)}`));
      }, e.setSupportedProtocolVersions?.(this._supportedProtocolVersions), await this._transport.start();
    }
    _onclose() {
      let _responseHandlers = this._responseHandlers;
      this._responseHandlers = new Map(), this._progressHandlers.clear(), this._pendingDebouncedNotifications.clear();
      for (let s of this._timeoutInfo.values()) clearTimeout(s.timeoutId);
      this._timeoutInfo.clear();
      let _requestHandlerAbortControllers = this._requestHandlerAbortControllers;
      this._requestHandlerAbortControllers = new Map();
      let r = new Vi(xi.ConnectionClosed, "Connection closed");
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
        } = Bn(e, "notification"),
        s = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") return;
      if (t?.classification !== void 0) {
        let i = Hn(t.classification);
        if (i !== s.era) {
          this._onerror(Error(`Era mismatch on inbound notification '${message_2.method}': classified as ${i} but this instance serves ${s.era}`));
          return;
        }
      }
      if (tn(message_2.method) && !s.hasNotificationMethod(message_2.method)) return;
      let a = this._notificationHandlers.get(message_2.method),
        fallbackNotificationHandler = this.fallbackNotificationHandler;
      if (a === void 0 && fallbackNotificationHandler === void 0) return;
      Promise.resolve().then(() => a === void 0 ? fallbackNotificationHandler(message_2) : a(message_2, s)).catch(i => this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
    }
    _onrequest(e, t) {
      let {
          message: message_3,
          lifted: lifted_2
        } = Bn(e, "request"),
        a = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") {
        this._onerror(Error(`Dropped inbound request '${e.method}': not servable on this connection's protocol era`));
        return;
      }
      let _transport = this._transport,
        i = (code, message_4, data) => {
          let S = {
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
          _transport?.send(S).catch(f => this._onerror(Error(`Failed to send an error response: ${f}`)));
        };
      if (t?.classification !== void 0) {
        let v = Hn(t.classification);
        if (v !== a.era) {
          this._onerror(Error(`Era mismatch on inbound request '${message_3.method}': classified as ${v} but this instance serves ${a.era}`));
          let requested = t.classification.revision ?? v;
          i(Wa.UnsupportedProtocolVersion, `Unsupported protocol version: ${requested}`, {
            supported: this._supportedProtocolVersions,
            requested: requested
          });
          return;
        }
      }
      if (en(message_3.method) && !a.hasRequestMethod(message_3.method)) {
        i(Wa.MethodNotFound, "Method not found");
        return;
      }
      let l = this._requestHandlers.get(message_3.method) ?? this.fallbackRequestHandler;
      if (l === void 0) {
        i(Wa.MethodNotFound, "Method not found");
        return;
      }
      let c = a.checkInboundEnvelope(lifted_2);
      if (c !== void 0) {
        i(Wa.InvalidParams, c);
        return;
      }
      let notify = (v, p) => this._notificationViaCodec(this._resolveOutboundCodec(v.method), v, {
          ...p,
          relatedRequestId: message_3.id
        }),
        m = (v, p, h) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(v.method), v, p, {
          ...h,
          relatedRequestId: message_3.id
        }),
        abortController_2 = new AbortController();
      this._requestHandlerAbortControllers.set(message_3.id, abortController_2);
      let w = lifted_2.inputResponses === void 0 ? void 0 : Su(lifted_2.inputResponses),
        k = {
          sessionId: _transport?.sessionId,
          mcpReq: {
            id: message_3.id,
            method: message_3.method,
            _meta: message_3.params?._meta,
            ...(lifted_2.envelope !== void 0 && {
              envelope: lifted_2.envelope
            }),
            ...(w !== void 0 && {
              inputResponses: w.accepted
            }),
            ...(w !== void 0 && w.droppedKeys.length > 0 && {
              droppedInputResponseKeys: w.droppedKeys
            }),
            requestState: lifted_2.requestState === void 0 ? pu : _n(lifted_2.requestState),
            signal: abortController_2.signal,
            send: (v, p, h) => {
              let S = this._resolveOutboundCodec(v.method);
              if (this._assertOutboundRequestInEra(S, v.method), an(p)) return m(v, p, h);
              let f = Wn(S, v.method);
              if (f === void 0) throw TypeError(`'${v.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
              return m(v, f, p);
            },
            notify: notify
          },
          http: t?.authInfo ? {
            authInfo: t.authInfo
          } : void 0
        },
        y = this.buildContext(k, t);
      Promise.resolve().then(() => l(message_3, y)).then(async v => {
        if (abortController_2.signal.aborted) return;
        let result_6;
        try {
          result_6 = a.encodeResult(message_3.method, v, this._outboundServerInfo());
        } catch (error) {
          this._onerror(Error(`Failed to encode result for ${message_3.method}: ${error}`)), i(Wa.InternalError, "Internal error");
          return;
        }
        let h = {
          result: result_6,
          jsonrpc: "2.0",
          id: message_3.id
        };
        await _transport?.send(h);
      }, async v => {
        if (abortController_2.signal.aborted) return;
        let p = Number.isSafeInteger(v.code) ? v.code : Wa.InternalError,
          h = {
            jsonrpc: "2.0",
            id: message_3.id,
            error: {
              code: a.encodeErrorCode(p),
              message: v.message ?? "Internal error",
              ...(v.data !== void 0 && {
                data: v.data
              })
            }
          };
        await _transport?.send(h);
      }).catch(v => this._onerror(Error(`Failed to send response: ${v}`))).finally(() => {
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
      if (this._responseHandlers.delete(t), this._cleanupTimeout(t), this._progressHandlers.delete(t), EIe(e)) r(e);else r(Dc.fromError(e.error.code, e.error.message, e.error.data));
    }
    get transport() {
      return this._transport;
    }
    async close() {
      await this._transport?.close();
    }
    request(e, t, r) {
      let s = this._resolveOutboundCodec(e.method);
      if (this._assertOutboundRequestInEra(s, e.method), an(t)) return this._requestWithSchemaViaCodec(s, e, t, r);
      let a = Wn(s, e.method);
      if (a === void 0) throw TypeError(`'${e.method}' is not a spec method; pass a result schema as the second argument to request().`);
      return this._requestWithSchemaViaCodec(s, e, a, t);
    }
    _negotiatedWireCodec() {
      return Ge(this._negotiatedProtocolVersion);
    }
    _wireCodec() {
      return this._negotiatedWireCodec();
    }
    _resolveOutboundCodec(e) {
      if (this._negotiatedProtocolVersion === void 0) {
        let t = du(e);
        if (t) return t;
      }
      return this._negotiatedWireCodec();
    }
    _assertOutboundRequestInEra(e, method_3) {
      if (method_3.startsWith("tasks/")) return;
      if (en(method_3) && !e.hasRequestMethod(method_3)) throw new Vi(xi.MethodNotSupportedByProtocolVersion, `Method '${method_3}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
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
      return new Promise((_, w) => {
        let k = b => {
          w(b);
        };
        if (!this._transport) {
          k(Error("Not connected"));
          return;
        }
        if (this._options?.enforceStrictCapabilities === !0) try {
          this.assertCapabilityForMethod(request.method);
        } catch (error) {
          k(error);
          return;
        }
        if (options?.signal?.aborted) {
          let reason_2 = options.signal.reason;
          throw reason_2 instanceof Vi ? reason_2 : new Vi(xi.RequestTimeout, String(reason_2));
        }
        let y = codec.era === ha && this._transport.hasPerRequestStream === !0 ? new AbortController() : void 0,
          v = this._requestMessageId++;
        m = v;
        let p = {
          ...request,
          jsonrpc: "2.0",
          id: v
        };
        if (options?.onprogress) this._progressHandlers.set(v, options.onprogress), p.params = {
          ...request.params,
          _meta: {
            ...request.params?._meta,
            progressToken: v
          }
        };
        let h = this._envelopeOutbound(p),
          S = !1,
          f = b => {
            if (S) return;
            if (this._progressHandlers.delete(v), y === void 0) this._transport?.send(this._envelopeOutbound({
              jsonrpc: "2.0",
              method: "notifications/cancelled",
              params: {
                requestId: v,
                reason: String(b)
              }
            }), {
              relatedRequestId: relatedRequestId,
              resumptionToken: resumptionToken,
              onresumptiontoken: onresumptiontoken
            }).catch(g => this._onerror(Error(`Failed to send cancellation: ${g}`)));else y.abort();
            w(b instanceof Vi ? b : new Vi(xi.RequestTimeout, String(b)));
          };
        this._responseHandlers.set(v, b => {
          if (options?.signal?.aborted) return;
          if (S = !0, b instanceof Error) return w(b);
          let g = resultSchema?.["~standard"]?.vendor === "mcp-wire-codec",
            O;
          try {
            O = codec.decodeResult(request.method, b.result, g);
          } catch (error) {
            return w(error instanceof Error ? error : Error(String(error)));
          }
          if (O.kind === "invalid") return w(O.error);
          if (O.kind === "task") {
            if (options?.allowTask === !0 && this._capabilities?.extensions?.[wl] !== void 0 && El(O.result)) return _(O.result);
            return w(new Vi(xi.UnsupportedResultType, `Unsupported result type 'task' for ${request.method}`, {
              method: request.method
            }));
          }
          if (O.kind === "input_required") {
            if (options?.allowInputRequired === !0) return _(vu(O));
            let K = {
              codec: codec,
              request: request,
              resultSchema: resultSchema,
              options: options,
              flowStartedAt: flowStartedAt,
              retry: (params_21, F) => this._requestWithSchemaViaCodec(codec, params_21 === void 0 ? {
                method: request.method
              } : {
                method: request.method,
                params: params_21
              }, resultSchema, F)
            };
            return _(this._resolveNonCompleteResult(O, K));
          }
          let result_7 = O.result;
          rn(resultSchema, result_7).then(K => {
            if (K.success) return _(K.data);
            let L;
            try {
              L = g ? codec.decodeResult(request.method, b.result) : void 0;
            } catch (error) {
              return w(error instanceof Error ? error : Error(String(error)));
            }
            w(L?.kind === "invalid" ? L.error : new Vi(xi.InvalidResult, `Invalid result for ${request.method}: ${K.error}`));
          }, w);
        }), d = () => f(options?.signal?.reason), options?.signal?.addEventListener("abort", d, {
          once: !0
        });
        let timeout_2 = options?.timeout ?? no,
          q = () => f(new Vi(xi.RequestTimeout, "Request timed out", {
            timeout: timeout_2
          }));
        this._setupTimeout(v, timeout_2, options?.maxTotalTimeout, q, options?.resetTimeoutOnProgress ?? !1), this._transport.send(h, {
          relatedRequestId: relatedRequestId,
          resumptionToken: resumptionToken,
          onresumptiontoken: onresumptiontoken,
          headers: headers,
          requestSignal: y?.signal
        }).catch(b => {
          this._progressHandlers.delete(v), w(b);
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
      if (!this._transport) throw new Vi(xi.NotConnected, "Not connected");
      if (tn(t.method) && !e.hasNotificationMethod(t.method)) throw new Vi(xi.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`, {
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
        if (!en(e)) throw TypeError(`'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
        s = (a, n) => {
          let i = this._negotiatedWireCodec(),
            l = i.validateRequest(e, a);
          if (!l.ok && l.reason === "not-in-era") l = i.validateInputRequest(e, a);
          if (!l.ok) {
            if (l.reason === "not-in-era") throw new Dc(Wa.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(l.message);
          }
          return Promise.resolve(t(l.value, n));
        };
      } else if (r) s = async (a, n) => {
        let i = await rn(t.params, {
          ...a.params
        });
        if (!i.success) throw new Dc(Wa.InvalidParams, `Invalid params for ${e}: ${i.error}`);
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
        if (!tn(e)) throw TypeError(`'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
        this._notificationHandlers.set(e, (s, a) => {
          let n = a.validateNotification(e, s);
          if (!n.ok) {
            if (n.reason === "not-in-era") throw new Dc(Wa.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(n.message);
          }
          return Promise.resolve(t(n.value));
        });
        return;
      }
      if (!r) throw TypeError("setNotificationHandler: handler is required");
      this._notificationHandlers.set(e, async s => {
        let a = await rn(t.params, {
          ...s.params
        });
        if (!a.success) throw new Dc(Wa.InvalidParams, `Invalid params for notification ${e}: ${a.error}`);
        await r(a.data, s);
      });
    }
    removeNotificationHandler(e) {
      this._notificationHandlers.delete(e);
    }
  };
function ro(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function qi(e, t) {
  let r = {
    ...e
  };
  for (let s in t) {
    let a = s,
      n = t[a];
    if (n === void 0) continue;
    let i = r[a];
    r[a] = ro(i) && ro(n) ? {
      ...i,
      ...n
    } : n;
  }
  return r;
}
function ua(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Su(e) {
  let accepted = {},
    droppedKeys = [];
  if (!ua(e)) return {
    accepted: accepted,
    droppedKeys: droppedKeys
  };
  for (let [s, a] of Object.entries(e)) {
    if (!ua(a) || "method" in a || "result" in a) {
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
function Yn(e) {
  throw new Vi(xi.SendFailed, `ctx.mcpReq.${e} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function gu(id_3, method_4, r, signal_2, sessionId) {
  return {
    sessionId: sessionId,
    mcpReq: {
      id: id_3,
      method: method_4,
      _meta: r?._meta,
      requestState: _n(void 0),
      signal: signal_2,
      send: () => Yn("send"),
      notify: () => Yn("notify")
    }
  };
}
async function _u(e, t, r, s, a) {
  if (!ua(s) || typeof s.method !== "string") throw new Vi(xi.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, {
    key: r
  });
  let method_5 = s.method;
  if (!t.hasInputRequestMethod(method_5)) throw new Vi(xi.InvalidResult, `Invalid input request '${r}': '${method_5}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, {
    key: r,
    method: method_5
  });
  let i = e.getRequestHandler(method_5);
  if (i === void 0) throw new Vi(xi.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${method_5}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, {
    key: r,
    method: method_5
  });
  let params_22 = ua(s.params) ? s.params : void 0;
  return await i({
    jsonrpc: "2.0",
    id: r,
    method: method_5,
    ...(params_22 !== void 0 && {
      params: params_22
    })
  }, e.buildContext(gu(r, method_5, params_22, a, e.sessionId)));
}
function yu(e, t) {
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
function Ii(e, config_2, r, s) {
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
      dispatchInputRequest: (m, _, w) => _u(e, codec_2, m, _, w),
      retry: (m, _) => s.retry(m, yu(options_2, _))
    };
  return iu({
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
function vu(e) {
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
var bu = G(e => {
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
        var w, k, y;
        t.lastIndex = d;
        while (k = t.exec(c)) {
          if (k.index !== d) throw TypeError("invalid parameter format");
          if (d += k[0].length, w = k[1].toLowerCase(), y = k[2], y.charCodeAt(0) === 34) {
            if (y = y.slice(1, -1), y.indexOf("\\") !== -1) y = y.replace(r, "$1");
          }
          _.parameters[w] = y;
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
  Ru = Co(bu(), 1);
function Oi(e) {
  if (!e) return;
  try {
    return Ru.parse(e).type;
  } catch {
    let t = (e.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e.slice(t.length).includes(",")) return;
    return t;
  }
}
var Ni = 10485760,
  X8o = class {
    _buffer;
    _maxBufferSize;
    constructor(e) {
      this._maxBufferSize = e?.maxBufferSize ?? Ni;
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
          return G8r(t);
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
function G8r(e) {
  return $t(JSON.parse(e));
}
function J8o(e) {
  return JSON.stringify(e) + `
`;
}
function so(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return {
    ...e
  };
}
function hYt(e = fetch, t) {
  if (!t) return e;
  return async (r, s) => e(r, {
    ...t,
    ...s,
    headers: s?.headers ? {
      ...so(t.headers),
      ...so(s.headers)
    } : t.headers
  });
}
var ga = G(e => {
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
    function a(h, ...S) {
      let f = [h[0]],
        R = 0;
      while (R < S.length) l(f, S[R]), f.push(h[++R]);
      return new s(f);
    }
    e._ = a;
    let n = new s("+");
    function i(h, ...S) {
      let f = [k(h[0])],
        R = 0;
      while (R < S.length) f.push(n), l(f, S[R]), f.push(n, k(h[++R]));
      return c(f), new s(f);
    }
    e.str = i;
    function l(h, S) {
      if (S instanceof s) h.push(...S._items);else if (S instanceof r) h.push(S);else h.push(_(S));
    }
    e.addCodeArg = l;
    function c(h) {
      let S = 1;
      while (S < h.length - 1) {
        if (h[S] === n) {
          let f = d(h[S - 1], h[S + 1]);
          if (f !== void 0) {
            h.splice(S - 1, 3, f);
            continue;
          }
          h[S++] = "+";
        }
        S++;
      }
    }
    function d(h, S) {
      if (S === '""') return h;
      if (h === '""') return S;
      if (typeof h == "string") {
        if (S instanceof r || h[h.length - 1] !== '"') return;
        if (typeof S != "string") return `${h.slice(0, -1)}${S}"`;
        if (S[0] === '"') return h.slice(0, -1) + S.slice(1);
        return;
      }
      if (typeof S == "string" && S[0] === '"' && !(h instanceof r)) return `"${h}${S.slice(1)}`;
    }
    function m(h, S) {
      return S.emptyStr() ? h : h.emptyStr() ? S : i`${h}${S}`;
    }
    e.strConcat = m;
    function _(h) {
      return typeof h == "number" || typeof h == "boolean" || h === null ? h : k(Array.isArray(h) ? h.join(",") : h);
    }
    function w(h) {
      return new s(k(h));
    }
    e.stringify = w;
    function k(h) {
      return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = k;
    function y(h) {
      return typeof h == "string" && e.IDENTIFIER.test(h) ? new s(`.${h}`) : a`[${h}]`;
    }
    e.getProperty = y;
    function v(h) {
      if (typeof h == "string" && e.IDENTIFIER.test(h)) return new s(`${h}`);
      throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
    }
    e.getEsmExportName = v;
    function p(h) {
      return new s(h.toString());
    }
    e.regexpCode = p;
  }),
  Mi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    let t = ga();
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
            prefix: w
          } = _,
          k = (m = d.key) !== null && m !== void 0 ? m : d.ref,
          y = this._values[w];
        if (y) {
          let h = y.get(k);
          if (h) return h;
        } else y = this._values[w] = new Map();
        y.set(k, _);
        let v = this._scope[w] || (this._scope[w] = []),
          itemIndex_2 = v.length;
        return v[itemIndex_2] = d.ref, _.setValue(d, {
          property: w,
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
        for (let k in c) {
          let y = c[k];
          if (!y) continue;
          let v = m[k] = m[k] || new Map();
          y.forEach(item => {
            if (v.has(item)) return;
            v.set(item, s.Started);
            let h = d(item);
            if (h) {
              let S = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              nil = t._`${nil}${S} ${item} = ${h};${this.opts._n}`;
            } else if (h = _ === null || _ === void 0 ? void 0 : _(item)) nil = t._`${nil}${h}${this.opts._n}`;else throw new r(item);
            v.set(item, s.Completed);
          });
        }
        return nil;
      }
    };
    e.ValueScope = l;
  }),
  se = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    let t = ga(),
      r = Mi();
    var s = ga();
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
    var a = Mi();
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
        optimizeNames(z, M) {
          return this;
        }
      },
      i = class extends n {
        constructor(z, M, U) {
          super();
          this.varKind = z, this.name = M, this.rhs = U;
        }
        render({
          es5: es5,
          _n: _n_2
        }) {
          let U = es5 ? r.varKinds.var : this.varKind,
            W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${U} ${this.name}${W};` + _n_2;
        }
        optimizeNames(z, M) {
          if (!z[this.name.str]) return;
          if (this.rhs) this.rhs = Y(this.rhs, z, M);
          return this;
        }
        get names() {
          return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
        }
      },
      l = class extends n {
        constructor(z, M, U) {
          super();
          this.lhs = z, this.rhs = M, this.sideEffects = U;
        }
        render({
          _n: _n_3
        }) {
          return `${this.lhs} = ${this.rhs};` + _n_3;
        }
        optimizeNames(z, M) {
          if (this.lhs instanceof t.Name && !z[this.lhs.str] && !this.sideEffects) return;
          return this.rhs = Y(this.rhs, z, M), this;
        }
        get names() {
          return X(this.lhs instanceof t.Name ? {} : {
            ...this.lhs.names
          }, this.rhs);
        }
      },
      c = class extends l {
        constructor(z, M, U, W) {
          super(z, U, W);
          this.op = M;
        }
        render({
          _n: _n_4
        }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + _n_4;
        }
      },
      d = class extends n {
        constructor(z) {
          super();
          this.label = z, this.names = {};
        }
        render({
          _n: _n_5
        }) {
          return `${this.label}:` + _n_5;
        }
      },
      m = class extends n {
        constructor(z) {
          super();
          this.label = z, this.names = {};
        }
        render({
          _n: _n_6
        }) {
          return `break${this.label ? ` ${this.label}` : ""};` + _n_6;
        }
      },
      _ = class extends n {
        constructor(z) {
          super();
          this.error = z;
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
      w = class extends n {
        constructor(z) {
          super();
          this.code = z;
        }
        render({
          _n: _n_8
        }) {
          return `${this.code};` + _n_8;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(z, M) {
          return this.code = Y(this.code, z, M), this;
        }
        get names() {
          return this.code instanceof t._CodeOrName ? this.code.names : {};
        }
      },
      k = class extends n {
        constructor(z = []) {
          super();
          this.nodes = z;
        }
        render(z) {
          return this.nodes.reduce((acc, item) => acc + item.render(z), "");
        }
        optimizeNodes() {
          let {
              nodes: nodes
            } = this,
            M = nodes.length;
          while (M--) {
            let U = nodes[M].optimizeNodes();
            if (Array.isArray(U)) nodes.splice(M, 1, ...U);else if (U) nodes[M] = U;else nodes.splice(M, 1);
          }
          return nodes.length > 0 ? this : void 0;
        }
        optimizeNames(z, M) {
          let {
              nodes: nodes_2
            } = this,
            W = nodes_2.length;
          while (W--) {
            let Z = nodes_2[W];
            if (Z.optimizeNames(z, M)) continue;
            ne(z, Z.names), nodes_2.splice(W, 1);
          }
          return nodes_2.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((acc, item) => F(acc, item.names), {});
        }
      },
      y = class extends k {
        render(z) {
          return "{" + z._n + super.render(z) + "}" + z._n;
        }
      },
      v = class extends k {},
      p = class extends y {};
    p.kind = "else";
    var h = class z extends y {
      constructor(M, U) {
        super(U);
        this.condition = M;
      }
      render(M) {
        let U = `if(${this.condition})` + super.render(M);
        if (this.else) U += "else " + this.else.render(M);
        return U;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let condition = this.condition;
        if (condition === !0) return this.nodes;
        let U = this.else;
        if (U) {
          let W = U.optimizeNodes();
          U = this.else = Array.isArray(W) ? new p(W) : W;
        }
        if (U) {
          if (condition === !1) return U instanceof z ? U : U.nodes;
          if (this.nodes.length) return this;
          return new z(de(condition), U instanceof z ? [U] : U.nodes);
        }
        if (condition === !1 || !this.nodes.length) return;
        return this;
      }
      optimizeNames(M, U) {
        var W;
        if (this.else = (W = this.else) === null || W === void 0 ? void 0 : W.optimizeNames(M, U), !(super.optimizeNames(M, U) || this.else)) return;
        return this.condition = Y(this.condition, M, U), this;
      }
      get names() {
        let names = super.names;
        if (X(names, this.condition), this.else) F(names, this.else.names);
        return names;
      }
    };
    h.kind = "if";
    var S = class extends y {};
    S.kind = "for";
    var f = class extends S {
        constructor(z) {
          super();
          this.iteration = z;
        }
        render(z) {
          return `for(${this.iteration})` + super.render(z);
        }
        optimizeNames(z, M) {
          if (!super.optimizeNames(z, M)) return;
          return this.iteration = Y(this.iteration, z, M), this;
        }
        get names() {
          return F(super.names, this.iteration.names);
        }
      },
      R = class extends S {
        constructor(z, M, U, W) {
          super();
          this.varKind = z, this.name = M, this.from = U, this.to = W;
        }
        render(z) {
          let M = z.es5 ? r.varKinds.var : this.varKind,
            {
              name: name,
              from: W,
              to: to_2
            } = this;
          return `for(${M} ${name}=${W}; ${name}<${to_2}; ${name}++)` + super.render(z);
        }
        get names() {
          return X(X(super.names, this.from), this.to);
        }
      },
      q = class extends S {
        constructor(z, M, U, W) {
          super();
          this.loop = z, this.varKind = M, this.name = U, this.iterable = W;
        }
        render(z) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(z);
        }
        optimizeNames(z, M) {
          if (!super.optimizeNames(z, M)) return;
          return this.iterable = Y(this.iterable, z, M), this;
        }
        get names() {
          return F(super.names, this.iterable.names);
        }
      },
      b = class extends y {
        constructor(z, M, U) {
          super();
          this.name = z, this.args = M, this.async = U;
        }
        render(z) {
          return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(z);
        }
      };
    b.kind = "func";
    var g = class extends k {
      render(z) {
        return "return " + super.render(z);
      }
    };
    g.kind = "return";
    var O = class extends y {
        render(z) {
          let M = "try" + super.render(z);
          if (this.catch) M += this.catch.render(z);
          if (this.finally) M += this.finally.render(z);
          return M;
        }
        optimizeNodes() {
          var z, M;
          return super.optimizeNodes(), (z = this.catch) === null || z === void 0 || z.optimizeNodes(), (M = this.finally) === null || M === void 0 || M.optimizeNodes(), this;
        }
        optimizeNames(z, M) {
          var U, W;
          return super.optimizeNames(z, M), (U = this.catch) === null || U === void 0 || U.optimizeNames(z, M), (W = this.finally) === null || W === void 0 || W.optimizeNames(z, M), this;
        }
        get names() {
          let names_2 = super.names;
          if (this.catch) F(names_2, this.catch.names);
          if (this.finally) F(names_2, this.finally.names);
          return names_2;
        }
      },
      x = class extends y {
        constructor(z) {
          super();
          this.error = z;
        }
        render(z) {
          return `catch(${this.error})` + super.render(z);
        }
      };
    x.kind = "catch";
    var K = class extends y {
      render(z) {
        return "finally" + super.render(z);
      }
    };
    K.kind = "finally";
    var L = class {
      constructor(parent_2, M = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
          ...M,
          _n: M.lines ? `
` : ""
        }, this._extScope = parent_2, this._scope = new r.Scope({
          parent: parent_2
        }), this._nodes = [new v()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(z) {
        return this._scope.name(z);
      }
      scopeName(z) {
        return this._extScope.name(z);
      }
      scopeValue(z, M) {
        let U = this._extScope.value(z, M);
        return (this._values[U.prefix] || (this._values[U.prefix] = new Set())).add(U), U;
      }
      getScopeValue(z, M) {
        return this._extScope.getValue(z, M);
      }
      scopeRefs(z) {
        return this._extScope.scopeRefs(z, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(z, M, U, W) {
        let Z = this._scope.toName(M);
        if (U !== void 0 && W) this._constants[Z.str] = U;
        return this._leafNode(new i(z, Z, U)), Z;
      }
      const(z, M, U) {
        return this._def(r.varKinds.const, z, M, U);
      }
      let(z, M, U) {
        return this._def(r.varKinds.let, z, M, U);
      }
      var(z, M, U) {
        return this._def(r.varKinds.var, z, M, U);
      }
      assign(z, M, U) {
        return this._leafNode(new l(z, M, U));
      }
      add(z, M) {
        return this._leafNode(new c(z, e.operators.ADD, M));
      }
      code(z) {
        if (typeof z == "function") z();else if (z !== t.nil) this._leafNode(new w(z));
        return this;
      }
      object(...z) {
        let M = ["{"];
        for (let [U, W] of z) {
          if (M.length > 1) M.push(",");
          if (M.push(U), U !== W || this.opts.es5) M.push(":"), (0, t.addCodeArg)(M, W);
        }
        return M.push("}"), new t._Code(M);
      }
      if(z, M, U) {
        if (this._blockNode(new h(z)), M && U) this.code(M).else().code(U).endIf();else if (M) this.code(M).endIf();else if (U) throw Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(z) {
        return this._elseNode(new h(z));
      }
      else() {
        return this._elseNode(new p());
      }
      endIf() {
        return this._endBlockNode(h, p);
      }
      _for(z, M) {
        if (this._blockNode(z), M) this.code(M).endFor();
        return this;
      }
      for(z, M) {
        return this._for(new f(z), M);
      }
      forRange(z, M, U, W, Z = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        let ae = this._scope.toName(z);
        return this._for(new R(Z, ae, M, U), () => W(ae));
      }
      forOf(z, M, U, W = r.varKinds.const) {
        let Z = this._scope.toName(z);
        if (this.opts.es5) {
          let ae = M instanceof t.Name ? M : this.var("_arr", M);
          return this.forRange("_i", 0, t._`${ae}.length`, te => {
            this.var(Z, t._`${ae}[${te}]`), U(Z);
          });
        }
        return this._for(new q("of", W, Z, M), () => U(Z));
      }
      forIn(z, M, U, W = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(z, t._`Object.keys(${M})`, U);
        let Z = this._scope.toName(z);
        return this._for(new q("in", W, Z, M), () => U(Z));
      }
      endFor() {
        return this._endBlockNode(S);
      }
      label(z) {
        return this._leafNode(new d(z));
      }
      break(z) {
        return this._leafNode(new m(z));
      }
      return(z) {
        let M = new g();
        if (this._blockNode(M), this.code(z), M.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
        return this._endBlockNode(g);
      }
      try(z, M, U) {
        if (!M && !U) throw Error('CodeGen: "try" without "catch" and "finally"');
        let W = new O();
        if (this._blockNode(W), this.code(z), M) {
          let Z = this.name("e");
          this._currNode = W.catch = new x(Z), M(Z);
        }
        if (U) this._currNode = W.finally = new K(), this.code(U);
        return this._endBlockNode(x, K);
      }
      throw(z) {
        return this._leafNode(new _(z));
      }
      block(z, M) {
        if (this._blockStarts.push(this._nodes.length), z) this.code(z).endBlock(M);
        return this;
      }
      endBlock(z) {
        let M = this._blockStarts.pop();
        if (M === void 0) throw Error("CodeGen: not in self-balancing block");
        let U = this._nodes.length - M;
        if (U < 0 || z !== void 0 && U !== z) throw Error(`CodeGen: wrong number of nodes: ${U} vs ${z} expected`);
        return this._nodes.length = M, this;
      }
      func(z, M = t.nil, U, W) {
        if (this._blockNode(new b(z, M, U)), W) this.code(W).endFunc();
        return this;
      }
      endFunc() {
        return this._endBlockNode(b);
      }
      optimize(z = 1) {
        while (z-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(z) {
        return this._currNode.nodes.push(z), this;
      }
      _blockNode(z) {
        this._currNode.nodes.push(z), this._nodes.push(z);
      }
      _endBlockNode(z, M) {
        let _currNode = this._currNode;
        if (_currNode instanceof z || M && _currNode instanceof M) return this._nodes.pop(), this;
        throw Error(`CodeGen: not in block "${M ? `${z.kind}/${M.kind}` : z.kind}"`);
      }
      _elseNode(z) {
        let _currNode_2 = this._currNode;
        if (!(_currNode_2 instanceof h)) throw Error('CodeGen: "else" without "if"');
        return this._currNode = _currNode_2.else = z, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        let _nodes = this._nodes;
        return _nodes[_nodes.length - 1];
      }
      set _currNode(z) {
        let _nodes_2 = this._nodes;
        _nodes_2[_nodes_2.length - 1] = z;
      }
    };
    e.CodeGen = L;
    function F(z, M) {
      for (let U in M) z[U] = (z[U] || 0) + (M[U] || 0);
      return z;
    }
    function X(z, M) {
      return M instanceof t._CodeOrName ? F(z, M.names) : z;
    }
    function Y(z, M, U) {
      if (z instanceof t.Name) return W(z);
      if (!Z(z)) return z;
      return new t._Code(z._items.reduce((acc, item) => {
        if (item instanceof t.Name) item = W(item);
        if (item instanceof t._Code) acc.push(...item._items);else acc.push(item);
        return acc;
      }, []));
      function W(ae) {
        let te = U[ae.str];
        if (te === void 0 || M[ae.str] !== 1) return ae;
        return delete M[ae.str], te;
      }
      function Z(ae) {
        return ae instanceof t._Code && ae._items.some(item => item instanceof t.Name && M[item.str] === 1 && U[item.str] !== void 0);
      }
    }
    function ne(z, M) {
      for (let U in M) z[U] = (z[U] || 0) - (M[U] || 0);
    }
    function de(z) {
      return typeof z == "boolean" || typeof z == "number" || z === null ? !z : t._`!${J(z)}`;
    }
    e.not = de;
    let le = D(e.operators.AND);
    function _e(...z) {
      return z.reduce(le);
    }
    e.and = _e;
    let ie = D(e.operators.OR);
    function j(...z) {
      return z.reduce(ie);
    }
    e.or = j;
    function D(z) {
      return (M, U) => M === t.nil ? U : U === t.nil ? M : t._`${J(M)} ${z} ${J(U)}`;
    }
    function J(z) {
      return z instanceof t.Name ? z : t._`(${z})`;
    }
  }),
  ce = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
    let t = se(),
      r = ga();
    function s(b) {
      let g = {};
      for (let O of b) g[O] = !0;
      return g;
    }
    e.toHash = s;
    function a(b, g) {
      if (typeof g == "boolean") return g;
      if (Object.keys(g).length === 0) return !0;
      return n(b, g), !i(g, b.self.RULES.all);
    }
    e.alwaysValidSchema = a;
    function n(b, g = b.schema) {
      let {
        opts: opts,
        self: self
      } = b;
      if (!opts.strictSchema) return;
      if (typeof g === "boolean") return;
      let keywords = self.RULES.keywords;
      for (let L in g) if (!keywords[L]) q(b, `unknown keyword: "${L}"`);
    }
    e.checkUnknownRules = n;
    function i(b, g) {
      if (typeof b == "boolean") return !b;
      for (let O in b) if (g[O]) return !0;
      return !1;
    }
    e.schemaHasRules = i;
    function l(b, g) {
      if (typeof b == "boolean") return !b;
      for (let O in b) if (O !== "$ref" && g.all[O]) return !0;
      return !1;
    }
    e.schemaHasRulesButRef = l;
    function c({
      topSchemaRef: topSchemaRef,
      schemaPath: schemaPath
    }, O, x, K) {
      if (!K) {
        if (typeof O == "number" || typeof O == "boolean") return O;
        if (typeof O == "string") return t._`${O}`;
      }
      return t._`${topSchemaRef}${schemaPath}${(0, t.getProperty)(x)}`;
    }
    e.schemaRefOrVal = c;
    function d(b) {
      return w(decodeURIComponent(b));
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
    function w(b) {
      return b.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = w;
    function k(b, g) {
      if (Array.isArray(b)) for (let O of b) g(O);else g(b);
    }
    e.eachItem = k;
    function y({
      mergeNames: mergeNames,
      mergeToName: mergeToName,
      mergeValues: mergeValues,
      resultToName: resultToName
    }) {
      return (K, L, F, X) => {
        let Y = F === void 0 ? L : F instanceof t.Name ? (L instanceof t.Name ? mergeNames(K, L, F) : mergeToName(K, L, F), F) : L instanceof t.Name ? (mergeToName(K, F, L), L) : mergeValues(L, F);
        return X === t.Name && !(Y instanceof t.Name) ? resultToName(K, Y) : Y;
      };
    }
    e.mergeEvaluated = {
      props: y({
        mergeNames: (b, g, O) => b.if(t._`${O} !== true && ${g} !== undefined`, () => {
          b.if(t._`${g} === true`, () => b.assign(O, !0), () => b.assign(O, t._`${O} || {}`).code(t._`Object.assign(${O}, ${g})`));
        }),
        mergeToName: (b, g, O) => b.if(t._`${O} !== true`, () => {
          if (g === !0) b.assign(O, !0);else b.assign(O, t._`${O} || {}`), p(b, O, g);
        }),
        mergeValues: (b, g) => b === !0 ? !0 : {
          ...b,
          ...g
        },
        resultToName: resultToName_2
      }),
      items: y({
        mergeNames: (b, g, O) => b.if(t._`${O} !== true && ${g} !== undefined`, () => b.assign(O, t._`${g} === true ? true : ${O} > ${g} ? ${O} : ${g}`)),
        mergeToName: (b, g, O) => b.if(t._`${O} !== true`, () => b.assign(O, g === !0 ? !0 : t._`${O} > ${g} ? ${O} : ${g}`)),
        mergeValues: (b, g) => b === !0 ? !0 : Math.max(b, g),
        resultToName: (b, g) => b.var("items", g)
      })
    };
    function resultToName_2(b, g) {
      if (g === !0) return b.var("props", !0);
      let O = b.var("props", t._`{}`);
      if (g !== void 0) p(b, O, g);
      return O;
    }
    e.evaluatedPropsToName = resultToName_2;
    function p(b, g, O) {
      Object.keys(O).forEach(item => b.assign(t._`${g}${(0, t.getProperty)(item)}`, !0));
    }
    e.setEvaluated = p;
    let h = {};
    function S(b, ref) {
      return b.scopeValue("func", {
        ref: ref,
        code: h[ref.code] || (h[ref.code] = new r._Code(ref.code))
      });
    }
    e.useFunc = S;
    var f;
    (function (b) {
      b[b.Num = 0] = "Num", b[b.Str = 1] = "Str";
    })(f || (e.Type = f = {}));
    function R(b, g, O) {
      if (b instanceof t.Name) {
        let x = g === f.Num;
        return O ? x ? t._`"[" + ${b} + "]"` : t._`"['" + ${b} + "']"` : x ? t._`"/" + ${b}` : t._`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return O ? (0, t.getProperty)(b).toString() : "/" + _(b);
    }
    e.getErrorPath = R;
    function q(b, g, O = b.opts.strictSchema) {
      if (!O) return;
      if (g = `strict mode: ${g}`, O === !0) throw Error(g);
      b.self.logger.warn(g);
    }
    e.checkStrictMode = q;
  }),
  De = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
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
  ya = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    let t = se(),
      r = ce(),
      s = De();
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
    function a(p, h = e.keywordError, S, f) {
      let {
          it: it_2
        } = p,
        {
          gen: gen,
          compositeRule: compositeRule,
          allErrors: allErrors
        } = it_2,
        O = _(p, h, S);
      if (f !== null && f !== void 0 ? f : compositeRule || allErrors) c(gen, O);else d(it_2, t._`[${O}]`);
    }
    e.reportError = a;
    function n(p, h = e.keywordError, S) {
      let {
          it: it_3
        } = p,
        {
          gen: gen_2,
          compositeRule: compositeRule_2,
          allErrors: allErrors_2
        } = it_3;
      if (c(gen_2, _(p, h, S)), !(compositeRule_2 || allErrors_2)) d(it_3, s.default.vErrors);
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
      let b = gen_3.name("err");
      gen_3.forRange("i", errsCount, s.default.errors, g => {
        if (gen_3.const(b, t._`${s.default.vErrors}[${g}]`), gen_3.if(t._`${b}.instancePath === undefined`, () => gen_3.assign(t._`${b}.instancePath`, (0, t.strConcat)(s.default.instancePath, it_4.errorPath))), gen_3.assign(t._`${b}.schemaPath`, t.str`${it_4.errSchemaPath}/${keyword_3}`), it_4.opts.verbose) gen_3.assign(t._`${b}.schema`, schemaValue), gen_3.assign(t._`${b}.data`, data_2);
      });
    }
    e.extendErrors = l;
    function c(p, h) {
      let S = p.const("err", h);
      p.if(t._`${s.default.vErrors} === null`, () => p.assign(s.default.vErrors, t._`[${S}]`), t._`${s.default.vErrors}.push(${S})`), p.code(t._`${s.default.errors}++`);
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
    function _(p, h, S) {
      let {
        createErrors: createErrors
      } = p.it;
      if (createErrors === !1) return t._`{}`;
      return w(p, h, S);
    }
    function w(p, h, S = {}) {
      let {
          gen: gen_5,
          it: it_5
        } = p,
        q = [k(it_5, S), y(p, S)];
      return v(p, h, q), gen_5.object(...q);
    }
    function k({
      errorPath: errorPath
    }, {
      instancePath: instancePath
    }) {
      let S = instancePath ? t.str`${errorPath}${(0, r.getErrorPath)(instancePath, r.Type.Str)}` : errorPath;
      return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, S)];
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
      let R = parentSchema ? errSchemaPath : t.str`${errSchemaPath}/${keyword_4}`;
      if (schemaPath_2) R = t.str`${R}${(0, r.getErrorPath)(schemaPath_2, r.Type.Str)}`;
      return [m.schemaPath, R];
    }
    function v(p, {
      params: params_23,
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
      if (f.push([m.keyword, keyword_5], [m.params, typeof params_23 == "function" ? params_23(p) : params_23 || t._`{}`]), opts_2.messages) f.push([m.message, typeof message_5 == "function" ? message_5(p) : message_5]);
      if (opts_2.verbose) f.push([m.schema, schemaValue_2], [m.parentSchema, t._`${topSchemaRef_2}${schemaPath_3}`], [s.default.data, data_3]);
      if (propertyName) f.push([m.propertyName, propertyName]);
    }
  }),
  zu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
    let t = ya(),
      r = se(),
      s = De(),
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
        w = {
          gen: gen_8,
          keyword: "false schema",
          data: data_4,
          schema: !1,
          schemaCode: !1,
          schemaValue: !1,
          params: {},
          it: it_7
        };
      (0, t.reportError)(w, a, void 0, d);
    }
  }),
  ji = G(e => {
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
  Ai = G(e => {
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
  _a = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
    let t = ji(),
      r = Ai(),
      s = ya(),
      a = se(),
      n = ce();
    var i;
    (function (f) {
      f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
    })(i || (e.DataType = i = {}));
    function l(f) {
      let R = c(f.type);
      if (R.includes("null")) {
        if (f.nullable === !1) throw Error("type: null contradicts nullable: false");
      } else {
        if (!R.length && f.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
        if (f.nullable === !0) R.push("null");
      }
      return R;
    }
    e.getSchemaTypes = l;
    function c(f) {
      let R = Array.isArray(f) ? f : f ? [f] : [];
      if (R.every(t.isJSONType)) return R;
      throw Error("type must be JSONType or JSONType[]: " + R.join(","));
    }
    e.getJSONTypes = c;
    function d(f, R) {
      let {
          gen: gen_9,
          data: data_5,
          opts: opts_3
        } = f,
        O = _(R, opts_3.coerceTypes),
        x = R.length > 0 && !(O.length === 0 && R.length === 1 && (0, r.schemaHasRulesForType)(f, R[0]));
      if (x) {
        let K = v(R, data_5, opts_3.strictNumbers, i.Wrong);
        gen_9.if(K, () => {
          if (O.length) w(f, R, O);else h(f);
        });
      }
      return x;
    }
    e.coerceAndCheckDataType = d;
    let m = new Set(["string", "number", "integer", "boolean", "null"]);
    function _(f, R) {
      return R ? f.filter(item => m.has(item) || R === "array" && item === "array") : [];
    }
    function w(f, R, q) {
      let {
          gen: gen_10,
          data: data_6,
          opts: opts_4
        } = f,
        x = gen_10.let("dataType", a._`typeof ${data_6}`),
        K = gen_10.let("coerced", a._`undefined`);
      if (opts_4.coerceTypes === "array") gen_10.if(a._`${x} == 'object' && Array.isArray(${data_6}) && ${data_6}.length == 1`, () => gen_10.assign(data_6, a._`${data_6}[0]`).assign(x, a._`typeof ${data_6}`).if(v(R, data_6, opts_4.strictNumbers), () => gen_10.assign(K, data_6)));
      gen_10.if(a._`${K} !== undefined`);
      for (let F of q) if (m.has(F) || F === "array" && opts_4.coerceTypes === "array") L(F);
      gen_10.else(), h(f), gen_10.endIf(), gen_10.if(a._`${K} !== undefined`, () => {
        gen_10.assign(data_6, K), k(f, K);
      });
      function L(F) {
        switch (F) {
          case "string":
            gen_10.elseIf(a._`${x} == "number" || ${x} == "boolean"`).assign(K, a._`"" + ${data_6}`).elseIf(a._`${data_6} === null`).assign(K, a._`""`);
            return;
          case "number":
            gen_10.elseIf(a._`${x} == "boolean" || ${data_6} === null
              || (${x} == "string" && ${data_6} && ${data_6} == +${data_6})`).assign(K, a._`+${data_6}`);
            return;
          case "integer":
            gen_10.elseIf(a._`${x} === "boolean" || ${data_6} === null
              || (${x} === "string" && ${data_6} && ${data_6} == +${data_6} && !(${data_6} % 1))`).assign(K, a._`+${data_6}`);
            return;
          case "boolean":
            gen_10.elseIf(a._`${data_6} === "false" || ${data_6} === 0 || ${data_6} === null`).assign(K, !1).elseIf(a._`${data_6} === "true" || ${data_6} === 1`).assign(K, !0);
            return;
          case "null":
            gen_10.elseIf(a._`${data_6} === "" || ${data_6} === 0 || ${data_6} === false`), gen_10.assign(K, null);
            return;
          case "array":
            gen_10.elseIf(a._`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${data_6} === null`).assign(K, a._`[${data_6}]`);
        }
      }
    }
    function k({
      gen: gen_11,
      parentData: parentData,
      parentDataProperty: parentDataProperty
    }, b) {
      gen_11.if(a._`${parentData} !== undefined`, () => gen_11.assign(a._`${parentData}[${parentDataProperty}]`, b));
    }
    function y(f, R, q, b = i.Correct) {
      let g = b === i.Correct ? a.operators.EQ : a.operators.NEQ,
        O;
      switch (f) {
        case "null":
          return a._`${R} ${g} null`;
        case "array":
          O = a._`Array.isArray(${R})`;
          break;
        case "object":
          O = a._`${R} && typeof ${R} == "object" && !Array.isArray(${R})`;
          break;
        case "integer":
          O = x(a._`!(${R} % 1) && !isNaN(${R})`);
          break;
        case "number":
          O = x();
          break;
        default:
          return a._`typeof ${R} ${g} ${f}`;
      }
      return b === i.Correct ? O : (0, a.not)(O);
      function x(K = a.nil) {
        return (0, a.and)(a._`typeof ${R} == "number"`, K, q ? a._`isFinite(${R})` : a.nil);
      }
    }
    e.checkDataType = y;
    function v(f, R, q, b) {
      if (f.length === 1) return y(f[0], R, q, b);
      let g,
        O = (0, n.toHash)(f);
      if (O.array && O.object) {
        let x = a._`typeof ${R} != "object"`;
        g = O.null ? x : a._`!${R} || ${x}`, delete O.null, delete O.array, delete O.object;
      } else g = a.nil;
      if (O.number) delete O.integer;
      for (let x in O) g = (0, a.and)(g, y(x, R, q, b));
      return g;
    }
    e.checkDataTypes = v;
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
      let R = S(f);
      (0, s.reportError)(R, p);
    }
    e.reportTypeError = h;
    function S(it_8) {
      let {
          gen: gen_12,
          data: data_7,
          schema: b
        } = it_8,
        g = (0, n.schemaRefOrVal)(it_8, b, "type");
      return {
        gen: gen_12,
        keyword: "type",
        data: data_7,
        schema: b.type,
        schemaCode: g,
        schemaValue: g,
        parentSchema: b,
        params: {},
        it: it_8
      };
    }
  }),
  wu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.assignDefaults = void 0;
    let t = se(),
      r = ce();
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
      let w = t._`${data_8}${(0, t.getProperty)(i)}`;
      if (compositeRule_3) {
        (0, r.checkStrictMode)(n, `default is ignored for: ${w}`);
        return;
      }
      let k = t._`${w} === undefined`;
      if (opts_5.useDefaults === "empty") k = t._`${k} || ${w} === null || ${w} === ""`;
      gen_13.if(k, t._`${w} = ${(0, t.stringify)(l)}`);
    }
  }),
  Ve = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
    let t = se(),
      r = ce(),
      s = De(),
      a = ce();
    function n(f, R) {
      let {
        gen: gen_14,
        data: data_9,
        it: it_9
      } = f;
      gen_14.if(_(gen_14, data_9, R, it_9.opts.ownProperties), () => {
        f.setParams({
          missingProperty: t._`${R}`
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
    }, b, g) {
      return (0, t.or)(...b.map(item => (0, t.and)(_(gen_15, data_10, item, opts_6.ownProperties), t._`${g} = ${item}`)));
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
    function d(f, R, q) {
      return t._`${c(f)}.call(${R}, ${q})`;
    }
    e.isOwnProperty = d;
    function m(f, R, q, b) {
      let g = t._`${R}${(0, t.getProperty)(q)} !== undefined`;
      return b ? t._`${g} && ${d(f, R, q)}` : g;
    }
    e.propertyInData = m;
    function _(f, R, q, b) {
      let g = t._`${R}${(0, t.getProperty)(q)} === undefined`;
      return b ? (0, t.or)(g, (0, t.not)(d(f, R, q))) : g;
    }
    e.noPropertyInData = _;
    function w(f) {
      return f ? Object.keys(f).filter(item => item !== "__proto__") : [];
    }
    e.allSchemaProperties = w;
    function k(f, R) {
      return w(R).filter(item => !(0, r.alwaysValidSchema)(f, R[item]));
    }
    e.schemaProperties = k;
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
    }, K, L, F) {
      let X = F ? t._`${schemaCode}, ${data_11}, ${topSchemaRef_3}${schemaPath_4}` : data_11,
        Y = [[s.default.instancePath, (0, t.strConcat)(s.default.instancePath, errorPath_2)], [s.default.parentData, it_10.parentData], [s.default.parentDataProperty, it_10.parentDataProperty], [s.default.rootData, s.default.rootData]];
      if (it_10.opts.dynamicRef) Y.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
      let ne = t._`${X}, ${gen_16.object(...Y)}`;
      return L !== t.nil ? t._`${K}.call(${L}, ${ne})` : t._`${K}(${ne})`;
    }
    e.callValidateCode = y;
    let v = t._`new RegExp`;
    function p({
      gen: gen_17,
      it: {
        opts: opts_7
      }
    }, q) {
      let b = opts_7.unicodeRegExp ? "u" : "",
        {
          regExp: regExp
        } = opts_7.code,
        ref_2 = regExp(q, b);
      return gen_17.scopeValue("pattern", {
        key: ref_2.toString(),
        ref: ref_2,
        code: t._`${regExp.code === "new RegExp" ? v : (0, a.useFunc)(gen_17, regExp)}(${q}, ${b})`
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
        O = gen_18.name("valid");
      if (it_11.allErrors) {
        let K = gen_18.let("valid", !0);
        return x(() => gen_18.assign(K, !1)), K;
      }
      return gen_18.var(O, !0), x(() => gen_18.break()), O;
      function x(K) {
        let L = gen_18.const("len", t._`${data_12}.length`);
        gen_18.forRange("i", 0, L, dataProp => {
          f.subschema({
            keyword: keyword_6,
            dataProp: dataProp,
            dataPropType: r.Type.Num
          }, O), gen_18.if((0, t.not)(O), K);
        });
      }
    }
    e.validateArray = h;
    function S(f) {
      let {
        gen: gen_19,
        schema: schema_6,
        keyword: keyword_7,
        it: it_12
      } = f;
      if (!Array.isArray(schema_6)) throw Error("ajv implementation error");
      if (schema_6.some(item => (0, r.alwaysValidSchema)(it_12, item)) && !it_12.opts.unevaluated) return;
      let O = gen_19.let("valid", !1),
        x = gen_19.name("_valid");
      gen_19.block(() => schema_6.forEach((item, L) => {
        let F = f.subschema({
          keyword: keyword_7,
          schemaProp: L,
          compositeRule: !0
        }, x);
        if (gen_19.assign(O, t._`${O} || ${x}`), !f.mergeValidEvaluated(F, x)) gen_19.if((0, t.not)(O));
      })), f.result(O, () => f.reset(), () => f.error(!0));
    }
    e.validateUnion = S;
  }),
  $u = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
    let t = se(),
      r = De(),
      s = Ve(),
      a = ya();
    function n(k, y) {
      let {
          gen: gen_20,
          keyword: keyword_8,
          schema: schema_7,
          parentSchema: parentSchema_2,
          it: it_13
        } = k,
        schema_8 = y.macro.call(it_13.self, schema_7, parentSchema_2, it_13),
        topSchemaRef_4 = m(gen_20, keyword_8, schema_8);
      if (it_13.opts.validateSchema !== !1) it_13.self.validateSchema(schema_8, !0);
      let b = gen_20.name("valid");
      k.subschema({
        schema: schema_8,
        schemaPath: t.nil,
        errSchemaPath: `${it_13.errSchemaPath}/${keyword_8}`,
        topSchemaRef: topSchemaRef_4,
        compositeRule: !0
      }, b), k.pass(b, () => k.error(!0));
    }
    e.macroKeywordCode = n;
    function i(k, y) {
      var v;
      let {
        gen: gen_21,
        keyword: keyword_9,
        schema: schema_9,
        parentSchema: parentSchema_3,
        $data: $data,
        it: it_14
      } = k;
      d(it_14, y);
      let b = m(gen_21, keyword_9, !$data && y.compile ? y.compile.call(it_14.self, schema_9, parentSchema_3, it_14) : y.validate),
        g = gen_21.let("valid");
      k.block$data(g, O), k.ok((v = y.valid) !== null && v !== void 0 ? v : g);
      function O() {
        if (y.errors === !1) {
          if (L(), y.modifying) l(k);
          F(() => k.error());
        } else {
          let X = y.async ? x() : K();
          if (y.modifying) l(k);
          F(() => c(k, X));
        }
      }
      function x() {
        let X = gen_21.let("ruleErrs", null);
        return gen_21.try(() => L(t._`await `), Y => gen_21.assign(g, !1).if(t._`${Y} instanceof ${it_14.ValidationError}`, () => gen_21.assign(X, t._`${Y}.errors`), () => gen_21.throw(Y))), X;
      }
      function K() {
        let X = t._`${b}.errors`;
        return gen_21.assign(X, null), L(t.nil), X;
      }
      function L(X = y.async ? t._`await ` : t.nil) {
        let Y = it_14.opts.passContext ? r.default.this : r.default.self,
          ne = !("compile" in y && !$data || y.schema === !1);
        gen_21.assign(g, t._`${X}${(0, s.callValidateCode)(k, b, Y, ne)}`, y.modifying);
      }
      function F(X) {
        var Y;
        gen_21.if((0, t.not)((Y = y.valid) !== null && Y !== void 0 ? Y : g), X);
      }
    }
    e.funcKeywordCode = i;
    function l(k) {
      let {
        gen: gen_22,
        data: data_13,
        it: it_15
      } = k;
      gen_22.if(it_15.parentData, () => gen_22.assign(data_13, t._`${it_15.parentData}[${it_15.parentDataProperty}]`));
    }
    function c(k, y) {
      let {
        gen: gen_23
      } = k;
      gen_23.if(t._`Array.isArray(${y})`, () => {
        gen_23.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`).assign(r.default.errors, t._`${r.default.vErrors}.length`), (0, a.extendErrors)(k);
      }, () => k.error());
    }
    function d({
      schemaEnv: schemaEnv_2
    }, y) {
      if (y.async && !schemaEnv_2.$async) throw Error("async keyword in sync schema");
    }
    function m(k, y, ref_3) {
      if (ref_3 === void 0) throw Error(`keyword "${y}" failed to compile`);
      return k.scopeValue("keyword", typeof ref_3 == "function" ? {
        ref: ref_3
      } : {
        ref: ref_3,
        code: (0, t.stringify)(ref_3)
      });
    }
    function _(k, y, v = !1) {
      return !y.length || y.some(item => item === "array" ? Array.isArray(k) : item === "object" ? k && typeof k == "object" && !Array.isArray(k) : typeof k == item || v && typeof k > "u");
    }
    e.validSchemaType = _;
    function w({
      schema: schema_10,
      opts: opts_8,
      self: self_3,
      errSchemaPath: errSchemaPath_2
    }, h, S) {
      if (Array.isArray(h.keyword) ? !h.keyword.includes(S) : h.keyword !== S) throw Error("ajv implementation error");
      let dependencies = h.dependencies;
      if (dependencies === null || dependencies === void 0 ? void 0 : dependencies.some(item => !Object.prototype.hasOwnProperty.call(schema_10, item))) throw Error(`parent schema must have dependencies of ${S}: ${dependencies.join(",")}`);
      if (h.validateSchema) {
        if (!h.validateSchema(schema_10[S])) {
          let R = `keyword "${S}" value is invalid at path "${errSchemaPath_2}": ` + self_3.errorsText(h.validateSchema.errors);
          if (opts_8.validateSchema === "log") self_3.logger.error(R);else throw Error(R);
        }
      }
    }
    e.validateKeywordUsage = w;
  }),
  Eu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0;
    let t = se(),
      r = ce();
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
      function y(v) {
        i.data = v, i.dataLevel = l.dataLevel + 1, i.dataTypes = [], l.definedProperties = new Set(), i.parentData = l.data, i.dataNames = [...l.dataNames, v];
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
  Li = G((e, t) => {
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
  Pu = G((e, t) => {
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
    function s(n, i, l, c, d, m, _, w, k, y) {
      if (c && typeof c == "object" && !Array.isArray(c)) {
        i(c, d, m, _, w, k, y);
        for (var v in c) {
          var p = c[v];
          if (Array.isArray(p)) {
            if (v in r.arrayKeywords) for (var h = 0; h < p.length; h++) s(n, i, l, p[h], d + "/" + v + "/" + h, m, d, v, c, h);
          } else if (v in r.propsKeywords) {
            if (p && typeof p == "object") for (var S in p) s(n, i, l, p[S], d + "/" + v + "/" + a(S), m, d, v, c, S);
          } else if (v in r.keywords || n.allKeys && !(v in r.skipKeywords)) s(n, i, l, p, d + "/" + v, m, d, v, c);
        }
        l(c, d, m, _, w, k, y);
      }
    }
    function a(n) {
      return n.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }),
  va = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
    let t = ce(),
      r = Li(),
      s = Pu(),
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
        let S = p[h];
        if (Array.isArray(S) && S.some(l)) return !0;
        if (typeof S == "object" && l(S)) return !0;
      }
      return !1;
    }
    function c(p) {
      let h = 0;
      for (let S in p) {
        if (S === "$ref") return 1 / 0;
        if (h++, a.has(S)) continue;
        if (typeof p[S] == "object") (0, t.eachItem)(p[S], f => h += c(f));
        if (h === 1 / 0) return 1 / 0;
      }
      return h;
    }
    function d(p, h = "", S) {
      if (S !== !1) h = w(h);
      return m(p, p.parse(h));
    }
    e.getFullPath = d;
    function m(p, h) {
      return p.serialize(h).split("#")[0] + "#";
    }
    e._getFullPath = m;
    let _ = /#\/?$/;
    function w(p) {
      return p ? p.replace(_, "") : "";
    }
    e.normalizeId = w;
    function k(p, h, S) {
      return S = w(S), p.resolve(h, S);
    }
    e.resolveUrl = k;
    let y = /^[a-z_][-a-z0-9._]*$/i;
    function v(p, h) {
      if (typeof p == "boolean") return {};
      let {
          schemaId: schemaId,
          uriResolver: uriResolver
        } = this.opts,
        R = w(p[schemaId] || h),
        q = {
          "": R
        },
        b = d(uriResolver, R, !1),
        g = {},
        O = new Set();
      return s(p, {
        allKeys: !0
      }, (L, F, X, Y) => {
        if (Y === void 0) return;
        let ne = b + F,
          de = q[Y];
        if (typeof L[schemaId] == "string") de = le.call(this, L[schemaId]);
        _e.call(this, L.$anchor), _e.call(this, L.$dynamicAnchor), q[F] = de;
        function le(ie) {
          let j = this.opts.uriResolver.resolve;
          if (ie = w(de ? j(de, ie) : ie), O.has(ie)) throw K(ie);
          O.add(ie);
          let D = this.refs[ie];
          if (typeof D == "string") D = this.refs[D];
          if (typeof D == "object") x(L, D.schema, ie);else if (ie !== w(ne)) if (ie[0] === "#") x(L, g[ie], ie), g[ie] = L;else this.refs[ie] = ne;
          return ie;
        }
        function _e(ie) {
          if (typeof ie == "string") {
            if (!y.test(ie)) throw Error(`invalid anchor "${ie}"`);
            le.call(this, `#${ie}`);
          }
        }
      }), g;
      function x(L, F, X) {
        if (F !== void 0 && !r(L, F)) throw K(X);
      }
      function K(L) {
        return Error(`reference "${L}" resolves to more than one schema`);
      }
    }
    e.getSchemaRefs = v;
  }),
  io = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
    let t = zu(),
      r = _a(),
      s = Ai(),
      a = _a(),
      n = wu(),
      i = $u(),
      l = Eu(),
      c = se(),
      d = De(),
      m = va(),
      _ = ce(),
      w = ya();
    function k(N) {
      if (b(N)) {
        if (O(N), q(N)) {
          h(N);
          return;
        }
      }
      y(N, () => (0, t.topBoolOrEmptySchema)(N));
    }
    e.validateFunctionCode = k;
    function y({
      gen: gen_25,
      validateName: validateName_3,
      schema: schema_13,
      schemaEnv: schemaEnv_3,
      opts: opts_10
    }, re) {
      if (opts_10.code.es5) gen_25.func(validateName_3, c._`${d.default.data}, ${d.default.valCxt}`, schemaEnv_3.$async, () => {
        gen_25.code(c._`"use strict"; ${f(schema_13, opts_10)}`), p(gen_25, opts_10), gen_25.code(re);
      });else gen_25.func(validateName_3, c._`${d.default.data}, ${v(opts_10)}`, schemaEnv_3.$async, () => gen_25.code(f(schema_13, opts_10)).code(re));
    }
    function v(N) {
      return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${N.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
    }
    function p(N, V) {
      N.if(d.default.valCxt, () => {
        if (N.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`), N.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`), N.var(d.default.parentDataProperty, c._`${d.default.valCxt}.${d.default.parentDataProperty}`), N.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`), V.dynamicRef) N.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
      }, () => {
        if (N.var(d.default.instancePath, c._`""`), N.var(d.default.parentData, c._`undefined`), N.var(d.default.parentDataProperty, c._`undefined`), N.var(d.default.rootData, d.default.data), V.dynamicRef) N.var(d.default.dynamicAnchors, c._`{}`);
      });
    }
    function h(N) {
      let {
        schema: schema_14,
        opts: opts_11,
        gen: gen_26
      } = N;
      y(N, () => {
        if (opts_11.$comment && schema_14.$comment) Y(N);
        if (L(N), gen_26.let(d.default.vErrors, null), gen_26.let(d.default.errors, 0), opts_11.unevaluated) S(N);
        x(N), ne(N);
      });
    }
    function S(N) {
      let {
        gen: gen_27,
        validateName: validateName_4
      } = N;
      N.evaluated = gen_27.const("evaluated", c._`${validateName_4}.evaluated`), gen_27.if(c._`${N.evaluated}.dynamicProps`, () => gen_27.assign(c._`${N.evaluated}.props`, c._`undefined`)), gen_27.if(c._`${N.evaluated}.dynamicItems`, () => gen_27.assign(c._`${N.evaluated}.items`, c._`undefined`));
    }
    function f(N, V) {
      let H = typeof N == "object" && N[V.schemaId];
      return H && (V.code.source || V.code.process) ? c._`/*# sourceURL=${H} */` : c.nil;
    }
    function R(N, V) {
      if (b(N)) {
        if (O(N), q(N)) {
          g(N, V);
          return;
        }
      }
      (0, t.boolOrEmptySchema)(N, V);
    }
    function q({
      schema: schema_15,
      self: self_4
    }) {
      if (typeof schema_15 == "boolean") return !schema_15;
      for (let H in schema_15) if (self_4.RULES.all[H]) return !0;
      return !1;
    }
    function b(N) {
      return typeof N.schema != "boolean";
    }
    function g(N, V) {
      let {
        schema: schema_16,
        gen: gen_28,
        opts: opts_12
      } = N;
      if (opts_12.$comment && schema_16.$comment) Y(N);
      F(N), X(N);
      let re = gen_28.const("_errs", d.default.errors);
      x(N, re), gen_28.var(V, c._`${re} === ${d.default.errors}`);
    }
    function O(N) {
      (0, _.checkUnknownRules)(N), K(N);
    }
    function x(N, V) {
      if (N.opts.jtd) return le(N, [], !1, V);
      let H = (0, r.getSchemaTypes)(N.schema);
      le(N, H, !(0, r.coerceAndCheckDataType)(N, H), V);
    }
    function K(N) {
      let {
        schema: schema_17,
        errSchemaPath: errSchemaPath_4,
        opts: opts_13,
        self: self_5
      } = N;
      if (schema_17.$ref && opts_13.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(schema_17, self_5.RULES)) self_5.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath_4}"`);
    }
    function L(N) {
      let {
        schema: schema_18,
        opts: opts_14
      } = N;
      if (schema_18.default !== void 0 && opts_14.useDefaults && opts_14.strictSchema) (0, _.checkStrictMode)(N, "default is ignored in the schema root");
    }
    function F(N) {
      let V = N.schema[N.opts.schemaId];
      if (V) N.baseId = (0, m.resolveUrl)(N.opts.uriResolver, N.baseId, V);
    }
    function X(N) {
      if (N.schema.$async && !N.schemaEnv.$async) throw Error("async schema in sync schema");
    }
    function Y({
      gen: gen_29,
      schemaEnv: schemaEnv_4,
      schema: schema_19,
      errSchemaPath: errSchemaPath_5,
      opts: opts_15
    }) {
      let $comment = schema_19.$comment;
      if (opts_15.$comment === !0) gen_29.code(c._`${d.default.self}.logger.log(${$comment})`);else if (typeof opts_15.$comment == "function") {
        let Se = c.str`${errSchemaPath_5}/$comment`,
          ve = gen_29.scopeValue("root", {
            ref: schemaEnv_4.root
          });
        gen_29.code(c._`${d.default.self}.opts.$comment(${$comment}, ${Se}, ${ve}.schema)`);
      }
    }
    function ne(N) {
      let {
        gen: gen_30,
        schemaEnv: schemaEnv_5,
        validateName: validateName_5,
        ValidationError: ValidationError,
        opts: opts_16
      } = N;
      if (schemaEnv_5.$async) gen_30.if(c._`${d.default.errors} === 0`, () => gen_30.return(d.default.data), () => gen_30.throw(c._`new ${ValidationError}(${d.default.vErrors})`));else {
        if (gen_30.assign(c._`${validateName_5}.errors`, d.default.vErrors), opts_16.unevaluated) de(N);
        gen_30.return(c._`${d.default.errors} === 0`);
      }
    }
    function de({
      gen: gen_31,
      evaluated: evaluated,
      props: props,
      items: items_2
    }) {
      if (props instanceof c.Name) gen_31.assign(c._`${evaluated}.props`, props);
      if (items_2 instanceof c.Name) gen_31.assign(c._`${evaluated}.items`, items_2);
    }
    function le(N, V, H, Q) {
      let {
          gen: gen_32,
          schema: schema_20,
          data: data_15,
          allErrors: allErrors_4,
          opts: opts_17,
          self: self_6
        } = N,
        {
          RULES: RULES
        } = self_6;
      if (schema_20.$ref && (opts_17.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(schema_20, RULES))) {
        gen_32.block(() => ae(N, "$ref", RULES.all.$ref.definition));
        return;
      }
      if (!opts_17.jtd) ie(N, V);
      gen_32.block(() => {
        for (let be of RULES.rules) Me(be);
        Me(RULES.post);
      });
      function Me(be) {
        if (!(0, s.shouldUseGroup)(schema_20, be)) return;
        if (be.type) {
          if (gen_32.if((0, a.checkDataType)(be.type, data_15, opts_17.strictNumbers)), _e(N, be), V.length === 1 && V[0] === be.type && H) gen_32.else(), (0, a.reportTypeError)(N);
          gen_32.endIf();
        } else _e(N, be);
        if (!allErrors_4) gen_32.if(c._`${d.default.errors} === ${Q || 0}`);
      }
    }
    function _e(N, V) {
      let {
        gen: gen_33,
        schema: schema_21,
        opts: {
          useDefaults: useDefaults
        }
      } = N;
      if (useDefaults) (0, n.assignDefaults)(N, V.type);
      gen_33.block(() => {
        for (let re of V.rules) if ((0, s.shouldUseRule)(schema_21, re)) ae(N, re.keyword, re.definition, V.type);
      });
    }
    function ie(N, V) {
      if (N.schemaEnv.meta || !N.opts.strictTypes) return;
      if (j(N, V), !N.opts.allowUnionTypes) D(N, V);
      J(N, N.dataTypes);
    }
    function j(N, V) {
      if (!V.length) return;
      if (!N.dataTypes.length) {
        N.dataTypes = V;
        return;
      }
      V.forEach(item => {
        if (!M(N.dataTypes, item)) W(N, `type "${item}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), U(N, V);
    }
    function D(N, V) {
      if (V.length > 1 && !(V.length === 2 && V.includes("null"))) W(N, "use allowUnionTypes to allow union type keyword");
    }
    function J(N, V) {
      let H = N.self.RULES.all;
      for (let Q in H) {
        let ee = H[Q];
        if (typeof ee == "object" && (0, s.shouldUseRule)(N.schema, ee)) {
          let {
            type: type_2
          } = ee.definition;
          if (type_2.length && !type_2.some(item => z(V, item))) W(N, `missing type "${type_2.join(",")}" for keyword "${Q}"`);
        }
      }
    }
    function z(N, V) {
      return N.includes(V) || V === "number" && N.includes("integer");
    }
    function M(N, V) {
      return N.includes(V) || V === "integer" && N.includes("number");
    }
    function U(N, V) {
      let H = [];
      for (let Q of N.dataTypes) if (M(V, Q)) H.push(Q);else if (V.includes("integer") && Q === "number") H.push("integer");
      N.dataTypes = H;
    }
    function W(N, V) {
      let H = N.schemaEnv.baseId + N.errSchemaPath;
      V += ` at "${H}" (strictTypes)`, (0, _.checkStrictMode)(N, V, N.opts.strictTypes);
    }
    var Z = class {
      constructor(N, V, H) {
        if ((0, i.validateKeywordUsage)(N, V, H), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = H, this.data = N.data, this.schema = N.schema[H], this.$data = V.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(N, this.schema, H, this.$data), this.schemaType = V.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = V, this.$data) this.schemaCode = N.gen.const("vSchema", Ce(this.$data, N));else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, V.schemaType, V.allowUndefined)) throw Error(`${H} value must be ${JSON.stringify(V.schemaType)}`);
        if ("code" in V ? V.trackErrors : V.errors !== !1) this.errsCount = N.gen.const("_errs", d.default.errors);
      }
      result(N, V, H) {
        this.failResult((0, c.not)(N), V, H);
      }
      failResult(N, V, H) {
        if (this.gen.if(N), H) H();else this.error();
        if (V) {
          if (this.gen.else(), V(), this.allErrors) this.gen.endIf();
        } else if (this.allErrors) this.gen.endIf();else this.gen.else();
      }
      pass(N, V) {
        this.failResult((0, c.not)(N), void 0, V);
      }
      fail(N) {
        if (N === void 0) {
          if (this.error(), !this.allErrors) this.gen.if(!1);
          return;
        }
        if (this.gen.if(N), this.error(), this.allErrors) this.gen.endIf();else this.gen.else();
      }
      fail$data(N) {
        if (!this.$data) return this.fail(N);
        let {
          schemaCode: schemaCode_2
        } = this;
        this.fail(c._`${schemaCode_2} !== undefined && (${(0, c.or)(this.invalid$data(), N)})`);
      }
      error(N, V, H) {
        if (V) {
          this.setParams(V), this._error(N, H), this.setParams({});
          return;
        }
        this._error(N, H);
      }
      _error(N, V) {
        (N ? w.reportExtraError : w.reportError)(this, this.def.error, V);
      }
      $dataError() {
        (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
        (0, w.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(N) {
        if (!this.allErrors) this.gen.if(N);
      }
      setParams(N, V) {
        if (V) Object.assign(this.params, N);else this.params = N;
      }
      block$data(N, V, H = c.nil) {
        this.gen.block(() => {
          this.check$data(N, H), V();
        });
      }
      check$data(N = c.nil, V = c.nil) {
        if (!this.$data) return;
        let {
          gen: gen_34,
          schemaCode: schemaCode_3,
          schemaType: schemaType_2,
          def: def
        } = this;
        if (gen_34.if((0, c.or)(c._`${schemaCode_3} === undefined`, V)), N !== c.nil) gen_34.assign(N, !0);
        if (schemaType_2.length || def.validateSchema) {
          if (gen_34.elseIf(this.invalid$data()), this.$dataError(), N !== c.nil) gen_34.assign(N, !1);
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
        return (0, c.or)(re(), Se());
        function re() {
          if (schemaType_3.length) {
            if (!(schemaCode_4 instanceof c.Name)) throw Error("ajv implementation error");
            let ve = Array.isArray(schemaType_3) ? schemaType_3 : [schemaType_3];
            return c._`${(0, a.checkDataTypes)(ve, schemaCode_4, it_16.opts.strictNumbers, a.DataType.Wrong)}`;
          }
          return c.nil;
        }
        function Se() {
          if (def_2.validateSchema) {
            let ve = gen_35.scopeValue("validate$data", {
              ref: def_2.validateSchema
            });
            return c._`!${ve}(${schemaCode_4})`;
          }
          return c.nil;
        }
      }
      subschema(N, V) {
        let H = (0, l.getSubschema)(this.it, N);
        (0, l.extendSubschemaData)(H, this.it, N), (0, l.extendSubschemaMode)(H, N);
        let Q = {
          ...this.it,
          ...H,
          items: void 0,
          props: void 0
        };
        return R(Q, V), Q;
      }
      mergeEvaluated(N, V) {
        let {
          it: it_17,
          gen: gen_36
        } = this;
        if (!it_17.opts.unevaluated) return;
        if (it_17.props !== !0 && N.props !== void 0) it_17.props = _.mergeEvaluated.props(gen_36, N.props, it_17.props, V);
        if (it_17.items !== !0 && N.items !== void 0) it_17.items = _.mergeEvaluated.items(gen_36, N.items, it_17.items, V);
      }
      mergeValidEvaluated(N, V) {
        let {
          it: it_18,
          gen: gen_37
        } = this;
        if (it_18.opts.unevaluated && (it_18.props !== !0 || it_18.items !== !0)) return gen_37.if(V, () => this.mergeEvaluated(N, c.Name)), !0;
      }
    };
    e.KeywordCxt = Z;
    function ae(N, V, H, Q) {
      let ee = new Z(N, H, V);
      if ("code" in H) H.code(ee, Q);else if (ee.$data && H.validate) (0, i.funcKeywordCode)(ee, H);else if ("macro" in H) (0, i.macroKeywordCode)(ee, H);else if (H.compile || H.validate) (0, i.funcKeywordCode)(ee, H);
    }
    let te = /^\/(?:[^~]|~0|~1)*$/,
      ue = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function Ce(N, {
      dataLevel: dataLevel,
      dataNames: dataNames,
      dataPathArr: dataPathArr_2
    }) {
      let ee, re;
      if (N === "") return d.default.rootData;
      if (N[0] === "/") {
        if (!te.test(N)) throw Error(`Invalid JSON-pointer: ${N}`);
        ee = N, re = d.default.rootData;
      } else {
        let ye = ue.exec(N);
        if (!ye) throw Error(`Invalid JSON-pointer: ${N}`);
        let he = +ye[1];
        if (ee = ye[2], ee === "#") {
          if (he >= dataLevel) throw Error(we("property/index", he));
          return dataPathArr_2[dataLevel - he];
        }
        if (he > dataLevel) throw Error(we("data", he));
        if (re = dataNames[dataLevel - he], !ee) return re;
      }
      let Se = re,
        ve = ee.split("/");
      for (let ye of ve) if (ye) re = c._`${re}${(0, c.getProperty)((0, _.unescapeJsonPointer)(ye))}`, Se = c._`${Se} && ${re}`;
      return Se;
      function we(ye, he) {
        return `Cannot access ${ye} ${he} levels up, current level is ${dataLevel}`;
      }
    }
    e.getData = Ce;
  }),
  ba = G(e => {
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
  co = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = va();
    var r = class extends Error {
      constructor(s, a, n, i) {
        super(i || `can't resolve reference ${n} from id ${a}`);
        this.missingRef = (0, t.resolveUrl)(s, a, n), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(s, this.missingRef));
      }
    };
    e.default = r;
  }),
  Ra = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
    let t = se(),
      r = ba(),
      s = De(),
      a = va(),
      n = ce(),
      i = io();
    var l = class {
      constructor(h) {
        var S;
        this.refs = {}, this.dynamicAnchors = {};
        let f;
        if (typeof h.schema == "object") f = h.schema;
        this.schema = h.schema, this.schemaId = h.schemaId, this.root = h.root || this, this.baseId = (S = h.baseId) !== null && S !== void 0 ? S : (0, a.normalizeId)(f === null || f === void 0 ? void 0 : f[h.schemaId || "$id"]), this.schemaPath = h.schemaPath, this.localRefs = h.localRefs, this.meta = h.meta, this.$async = f === null || f === void 0 ? void 0 : f.$async, this.refs = {};
      }
    };
    e.SchemaEnv = l;
    function c(schemaEnv_6) {
      let S = _.call(this, schemaEnv_6);
      if (S) return S;
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
        L;
      try {
        this._compilations.add(schemaEnv_6), (0, i.validateFunctionCode)(K), gen_38.optimize(this.opts.code.optimize);
        let validateCode = gen_38.toString();
        if (L = `${gen_38.scopeRefs(s.default.scope)}return ${validateCode}`, this.opts.code.process) L = this.opts.code.process(L, schemaEnv_6);
        let ref_4 = Function(`${s.default.self}`, `${s.default.scope}`, L)(this, this.scope.get());
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
        if (delete schemaEnv_6.validate, delete schemaEnv_6.validateName, L) this.logger.error("Error compiling schema, function code:", L);
        throw F;
      } finally {
        this._compilations.delete(schemaEnv_6);
      }
    }
    e.compileSchema = c;
    function d(root, baseId, f) {
      var R;
      f = (0, a.resolveUrl)(this.opts.uriResolver, baseId, f);
      let q = root.refs[f];
      if (q) return q;
      let b = k.call(this, root, f);
      if (b === void 0) {
        let schema_22 = (R = root.localRefs) === null || R === void 0 ? void 0 : R[f],
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
      return root.refs[f] = m.call(this, b);
    }
    e.resolveRef = d;
    function m(h) {
      if ((0, a.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
      return h.validate ? h : c.call(this, h);
    }
    function _(h) {
      for (let S of this._compilations) if (w(S, h)) return S;
    }
    e.getCompilingSchema = _;
    function w(h, S) {
      return h.schema === S.schema && h.root === S.root && h.baseId === S.baseId;
    }
    function k(h, S) {
      let f;
      while (typeof (f = this.refs[S]) == "string") S = f;
      return f || this.schemas[S] || y.call(this, h, S);
    }
    function y(root_2, S) {
      let f = this.opts.uriResolver.parse(S),
        R = (0, a._getFullPath)(this.opts.uriResolver, f),
        baseId_2 = (0, a.getFullPath)(this.opts.uriResolver, root_2.baseId, void 0);
      if (Object.keys(root_2.schema).length > 0 && R === baseId_2) return p.call(this, f, root_2);
      let b = (0, a.normalizeId)(R),
        g = this.refs[b] || this.schemas[b];
      if (typeof g == "string") {
        let O = y.call(this, root_2, g);
        if (typeof (O === null || O === void 0 ? void 0 : O.schema) !== "object") return;
        return p.call(this, f, O);
      }
      if (typeof (g === null || g === void 0 ? void 0 : g.schema) !== "object") return;
      if (!g.validate) c.call(this, g);
      if (b === (0, a.normalizeId)(S)) {
        let {
            schema: schema_23
          } = g,
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
      return p.call(this, f, g);
    }
    e.resolveSchema = y;
    let v = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function p(h, {
      baseId: baseId_3,
      schema: schema_24,
      root: root_3
    }) {
      var q;
      if (((q = h.fragment) === null || q === void 0 ? void 0 : q[0]) !== "/") return;
      for (let O of h.fragment.slice(1).split("/")) {
        if (typeof schema_24 === "boolean") return;
        let x = schema_24[(0, n.unescapeFragment)(O)];
        if (x === void 0) return;
        schema_24 = x;
        let K = typeof schema_24 === "object" && schema_24[this.opts.schemaId];
        if (!v.has(O) && K) baseId_3 = (0, a.resolveUrl)(this.opts.uriResolver, baseId_3, K);
      }
      let b;
      if (typeof schema_24 != "boolean" && schema_24.$ref && !(0, n.schemaHasRulesButRef)(schema_24, this.RULES)) {
        let O = (0, a.resolveUrl)(this.opts.uriResolver, baseId_3, schema_24.$ref);
        b = y.call(this, root_3, O);
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
  Tu = G((e, t) => {
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
  Ui = G((e, t) => {
    let isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
      isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function stringArrayToHexStripped(y) {
      let v = "",
        p = 0,
        h = 0;
      for (h = 0; h < y.length; h++) {
        if (p = y[h].charCodeAt(0), p === 48) continue;
        if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
        v += y[h];
        break;
      }
      for (h += 1; h < y.length; h++) {
        if (p = y[h].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
        v += y[h];
      }
      return v;
    }
    let nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function i(y) {
      return y.length = 0, !0;
    }
    function l(y, v, p) {
      if (y.length) {
        let h = stringArrayToHexStripped(y);
        if (h !== "") v.push(h);else return p.error = !0, !1;
        y.length = 0;
      }
      return !0;
    }
    function c(y) {
      let v = 0,
        p = {
          error: !1,
          address: "",
          zone: ""
        },
        h = [],
        S = [],
        f = !1,
        R = !1,
        q = l;
      for (let b = 0; b < y.length; b++) {
        let g = y[b];
        if (g === "[" || g === "]") continue;
        if (g === ":") {
          if (f === !0) R = !0;
          if (!q(S, h, p)) break;
          if (++v > 7) {
            p.error = !0;
            break;
          }
          if (b > 0 && y[b - 1] === ":") f = !0;
          h.push(":");
          continue;
        } else if (g === "%") {
          if (!q(S, h, p)) break;
          q = i;
        } else {
          S.push(g);
          continue;
        }
      }
      if (S.length) if (q === i) p.zone = S.join("");else if (R) h.push(S.join(""));else h.push(stringArrayToHexStripped(S));
      return p.address = h.join(""), p;
    }
    function normalizeIPv6(host) {
      if (m(host, ":") < 2) return {
        host: host,
        isIPV6: !1
      };
      let v = c(host);
      if (!v.error) {
        let {
          address: p,
          address: h
        } = v;
        if (v.zone) p += "%" + v.zone, h += "%25" + v.zone;
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
    function m(y, v) {
      let p = 0;
      for (let h = 0; h < y.length; h++) if (y[h] === v) p++;
      return p;
    }
    function removeDotSegments(y) {
      let v = y,
        p = [],
        h = -1,
        S = 0;
      while (S = v.length) {
        if (S === 1) {
          if (v === ".") break;else if (v === "/") {
            p.push("/");
            break;
          } else {
            p.push(v);
            break;
          }
        } else if (S === 2) {
          if (v[0] === ".") {
            if (v[1] === ".") break;else if (v[1] === "/") {
              v = v.slice(2);
              continue;
            }
          } else if (v[0] === "/") {
            if (v[1] === "." || v[1] === "/") {
              p.push("/");
              break;
            }
          }
        } else if (S === 3) {
          if (v === "/..") {
            if (p.length !== 0) p.pop();
            p.push("/");
            break;
          }
        }
        if (v[0] === ".") {
          if (v[1] === ".") {
            if (v[2] === "/") {
              v = v.slice(3);
              continue;
            }
          } else if (v[1] === "/") {
            v = v.slice(2);
            continue;
          }
        } else if (v[0] === "/") {
          if (v[1] === ".") {
            if (v[2] === "/") {
              v = v.slice(2);
              continue;
            } else if (v[2] === ".") {
              if (v[3] === "/") {
                if (v = v.slice(3), p.length !== 0) p.pop();
                continue;
              }
            }
          }
        }
        if ((h = v.indexOf("/", 1)) === -1) {
          p.push(v);
          break;
        } else p.push(v.slice(0, h)), v = v.slice(h);
      }
      return p.join("");
    }
    function normalizeComponentEncoding(y, v) {
      let p = v !== !0 ? escape : unescape;
      if (y.scheme !== void 0) y.scheme = p(y.scheme);
      if (y.userinfo !== void 0) y.userinfo = p(y.userinfo);
      if (y.host !== void 0) y.host = p(y.host);
      if (y.path !== void 0) y.path = p(y.path);
      if (y.query !== void 0) y.query = p(y.query);
      if (y.fragment !== void 0) y.fragment = p(y.fragment);
      return y;
    }
    function recomposeAuthority(y) {
      let v = [];
      if (y.userinfo !== void 0) v.push(y.userinfo), v.push("@");
      if (y.host !== void 0) {
        let p = unescape(y.host);
        if (!isIPv4(p)) {
          let h = normalizeIPv6(p);
          if (h.isIPV6 === !0) p = `[${h.escapedHost}]`;else p = y.host;
        }
        v.push(p);
      }
      if (typeof y.port === "number" || typeof y.port === "string") v.push(":"), v.push(String(y.port));
      return v.length ? v.join("") : void 0;
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
  Cu = G((e, t) => {
    let {
        isUUID: isUUID_2
      } = Ui(),
      s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
      a = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function isValidSchemeName(g) {
      return a.indexOf(g) !== -1;
    }
    function wsIsSecure(g) {
      if (g.secure === !0) return !0;else if (g.secure === !1) return !1;else if (g.scheme) return g.scheme.length === 3 && (g.scheme[0] === "w" || g.scheme[0] === "W") && (g.scheme[1] === "s" || g.scheme[1] === "S") && (g.scheme[2] === "s" || g.scheme[2] === "S");else return !1;
    }
    function parse(g) {
      if (!g.host) g.error = g.error || "HTTP URIs must have a host.";
      return g;
    }
    function serialize(g) {
      let O = String(g.scheme).toLowerCase() === "https";
      if (g.port === (O ? 443 : 80) || g.port === "") g.port = void 0;
      if (!g.path) g.path = "/";
      return g;
    }
    function parse_2(g) {
      return g.secure = wsIsSecure(g), g.resourceName = (g.path || "/") + (g.query ? "?" + g.query : ""), g.path = void 0, g.query = void 0, g;
    }
    function serialize_2(g) {
      if (g.port === (wsIsSecure(g) ? 443 : 80) || g.port === "") g.port = void 0;
      if (typeof g.secure === "boolean") g.scheme = g.secure ? "wss" : "ws", g.secure = void 0;
      if (g.resourceName) {
        let [O, x] = g.resourceName.split("?");
        g.path = O && O !== "/" ? O : void 0, g.query = x, g.resourceName = void 0;
      }
      return g.fragment = void 0, g;
    }
    function parse_3(g, O) {
      if (!g.path) return g.error = "URN can not be parsed", g;
      let x = g.path.match(s);
      if (x) {
        let K = O.scheme || g.scheme || "urn";
        g.nid = x[1].toLowerCase(), g.nss = x[2];
        let L = getSchemeHandler(`${K}:${O.nid || g.nid}`);
        if (g.path = void 0, L) g = L.parse(g, O);
      } else g.error = g.error || "URN can not be parsed.";
      return g;
    }
    function serialize_3(g, O) {
      if (g.nid === void 0) throw Error("URN without nid cannot be serialized");
      let x = O.scheme || g.scheme || "urn",
        K = g.nid.toLowerCase(),
        L = getSchemeHandler(`${x}:${O.nid || K}`);
      if (L) g = L.serialize(g, O);
      let F = g,
        nss = g.nss;
      return F.path = `${K || O.nid}:${nss}`, O.skipEscape = !0, F;
    }
    function parse_4(g, O) {
      let x = g;
      if (x.uuid = x.nss, x.nss = void 0, !O.tolerant && (!x.uuid || !isUUID_2(x.uuid))) x.error = x.error || "UUID is not valid.";
      return x;
    }
    function serialize_4(g) {
      let O = g;
      return O.nss = (g.uuid || "").toLowerCase(), O;
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
    function getSchemeHandler(g) {
      return g && (SCHEMES[g] || SCHEMES[g.toLowerCase()]) || void 0;
    }
    t.exports = {
      wsIsSecure: wsIsSecure,
      SCHEMES: SCHEMES,
      isValidSchemeName: isValidSchemeName,
      getSchemeHandler: getSchemeHandler
    };
  }),
  ku = G((e, t) => {
    let {
        normalizeIPv6: normalizeIPv6_2,
        removeDotSegments: removeDotSegments_2,
        recomposeAuthority: recomposeAuthority_2,
        normalizeComponentEncoding: normalizeComponentEncoding_2,
        isIPv4: isIPv4_2,
        nonSimpleDomain: nonSimpleDomain_2
      } = Ui(),
      {
        SCHEMES: SCHEMES_2,
        getSchemeHandler: getSchemeHandler_2
      } = Cu();
    function normalize(S, f) {
      if (typeof S === "string") S = serialize_5(parse_5(S, f), f);else if (typeof S === "object") S = parse_5(serialize_5(S, f), f);
      return S;
    }
    function resolve(S, f, R) {
      let q = R ? Object.assign({
          scheme: "null"
        }, R) : {
          scheme: "null"
        },
        b = resolveComponent(parse_5(S, q), parse_5(f, q), q, !0);
      return q.skipEscape = !0, serialize_5(b, q);
    }
    function resolveComponent(S, f, R, q) {
      let b = {};
      if (!q) S = parse_5(serialize_5(S, R), R), f = parse_5(serialize_5(f, R), R);
      if (R = R || {}, !R.tolerant && f.scheme) b.scheme = f.scheme, b.userinfo = f.userinfo, b.host = f.host, b.port = f.port, b.path = removeDotSegments_2(f.path || ""), b.query = f.query;else {
        if (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) b.userinfo = f.userinfo, b.host = f.host, b.port = f.port, b.path = removeDotSegments_2(f.path || ""), b.query = f.query;else {
          if (!f.path) {
            if (b.path = S.path, f.query !== void 0) b.query = f.query;else b.query = S.query;
          } else {
            if (f.path[0] === "/") b.path = removeDotSegments_2(f.path);else {
              if ((S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0) && !S.path) b.path = "/" + f.path;else if (!S.path) b.path = f.path;else b.path = S.path.slice(0, S.path.lastIndexOf("/") + 1) + f.path;
              b.path = removeDotSegments_2(b.path);
            }
            b.query = f.query;
          }
          b.userinfo = S.userinfo, b.host = S.host, b.port = S.port;
        }
        b.scheme = S.scheme;
      }
      return b.fragment = f.fragment, b;
    }
    function equal(S, f, R) {
      if (typeof S === "string") S = unescape(S), S = serialize_5(normalizeComponentEncoding_2(parse_5(S, R), !0), {
        ...R,
        skipEscape: !0
      });else if (typeof S === "object") S = serialize_5(normalizeComponentEncoding_2(S, !0), {
        ...R,
        skipEscape: !0
      });
      if (typeof f === "string") f = unescape(f), f = serialize_5(normalizeComponentEncoding_2(parse_5(f, R), !0), {
        ...R,
        skipEscape: !0
      });else if (typeof f === "object") f = serialize_5(normalizeComponentEncoding_2(f, !0), {
        ...R,
        skipEscape: !0
      });
      return S.toLowerCase() === f.toLowerCase();
    }
    function serialize_5(S, f) {
      let R = {
          host: S.host,
          scheme: S.scheme,
          userinfo: S.userinfo,
          port: S.port,
          path: S.path,
          query: S.query,
          nid: S.nid,
          nss: S.nss,
          uuid: S.uuid,
          fragment: S.fragment,
          reference: S.reference,
          resourceName: S.resourceName,
          secure: S.secure,
          error: ""
        },
        q = Object.assign({}, f),
        b = [],
        g = getSchemeHandler_2(q.scheme || R.scheme);
      if (g && g.serialize) g.serialize(R, q);
      if (R.path !== void 0) if (!q.skipEscape) {
        if (R.path = escape(R.path), R.scheme !== void 0) R.path = R.path.split("%3A").join(":");
      } else R.path = unescape(R.path);
      if (q.reference !== "suffix" && R.scheme) b.push(R.scheme, ":");
      let O = recomposeAuthority_2(R);
      if (O !== void 0) {
        if (q.reference !== "suffix") b.push("//");
        if (b.push(O), R.path && R.path[0] !== "/") b.push("/");
      }
      if (R.path !== void 0) {
        let x = R.path;
        if (!q.absolutePath && (!g || !g.absolutePath)) x = removeDotSegments_2(x);
        if (O === void 0 && x[0] === "/" && x[1] === "/") x = "/%2F" + x.slice(2);
        b.push(x);
      }
      if (R.query !== void 0) b.push("?", R.query);
      if (R.fragment !== void 0) b.push("#", R.fragment);
      return b.join("");
    }
    let v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function parse_5(S, f) {
      let R = Object.assign({}, f),
        q = {
          scheme: void 0,
          userinfo: void 0,
          host: "",
          port: void 0,
          path: "",
          query: void 0,
          fragment: void 0
        },
        b = !1;
      if (R.reference === "suffix") if (R.scheme) S = R.scheme + ":" + S;else S = "//" + S;
      let g = S.match(v);
      if (g) {
        if (q.scheme = g[1], q.userinfo = g[3], q.host = g[4], q.port = parseInt(g[5], 10), q.path = g[6] || "", q.query = g[7], q.fragment = g[8], isNaN(q.port)) q.port = g[5];
        if (q.host) if (isIPv4_2(q.host) === !1) {
          let x = normalizeIPv6_2(q.host);
          q.host = x.host.toLowerCase(), b = x.isIPV6;
        } else b = !0;
        if (q.scheme === void 0 && q.userinfo === void 0 && q.host === void 0 && q.port === void 0 && q.query === void 0 && !q.path) q.reference = "same-document";else if (q.scheme === void 0) q.reference = "relative";else if (q.fragment === void 0) q.reference = "absolute";else q.reference = "uri";
        if (R.reference && R.reference !== "suffix" && R.reference !== q.reference) q.error = q.error || "URI is not a " + R.reference + " reference.";
        let O = getSchemeHandler_2(R.scheme || q.scheme);
        if (!R.unicodeSupport && (!O || !O.unicodeSupport)) {
          if (q.host && (R.domainHost || O && O.domainHost) && b === !1 && nonSimpleDomain_2(q.host)) try {
            q.host = URL.domainToASCII(q.host.toLowerCase());
          } catch (x) {
            q.error = q.error || "Host's domain name can not be converted to ASCII: " + x;
          }
        }
        if (!O || O && !O.skipNormalize) {
          if (S.indexOf("%") !== -1) {
            if (q.scheme !== void 0) q.scheme = unescape(q.scheme);
            if (q.host !== void 0) q.host = unescape(q.host);
          }
          if (q.path) q.path = escape(unescape(q.path));
          if (q.fragment) q.fragment = encodeURI(decodeURIComponent(q.fragment));
        }
        if (O && O.parse) O.parse(q, R);
      } else q.error = q.error || "URI can not be parsed.";
      return q;
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
  qu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ku();
    t.code = 'require("ajv/dist/runtime/uri").default', e.default = t;
  }),
  Di = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = io();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return t.KeywordCxt;
      }
    });
    var r = se();
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
    let s = ba(),
      a = co(),
      n = ji(),
      i = Ra(),
      l = se(),
      c = va(),
      d = _a(),
      m = ce(),
      _ = Tu(),
      w = qu(),
      k = (j, D) => new RegExp(j, D);
    k.code = "new RegExp";
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
      S = 200;
    function f(j) {
      var D, J, z, M, U, W, Z, ae, te, ue, Ce, N, V, H, Q, ee, re, Se, ve, we, ye, he, Me, be, xe;
      let strict = j.strict,
        Fe = (D = j.code) === null || D === void 0 ? void 0 : D.optimize,
        optimize = Fe === !0 || Fe === void 0 ? 1 : Fe || 0,
        regExp_2 = (z = (J = j.code) === null || J === void 0 ? void 0 : J.regExp) !== null && z !== void 0 ? z : k,
        uriResolver_2 = (M = j.uriResolver) !== null && M !== void 0 ? M : w.default;
      return {
        strictSchema: (W = (U = j.strictSchema) !== null && U !== void 0 ? U : strict) !== null && W !== void 0 ? W : !0,
        strictNumbers: (ae = (Z = j.strictNumbers) !== null && Z !== void 0 ? Z : strict) !== null && ae !== void 0 ? ae : !0,
        strictTypes: (ue = (te = j.strictTypes) !== null && te !== void 0 ? te : strict) !== null && ue !== void 0 ? ue : "log",
        strictTuples: (N = (Ce = j.strictTuples) !== null && Ce !== void 0 ? Ce : strict) !== null && N !== void 0 ? N : "log",
        strictRequired: (H = (V = j.strictRequired) !== null && V !== void 0 ? V : strict) !== null && H !== void 0 ? H : !1,
        code: j.code ? {
          ...j.code,
          optimize: optimize,
          regExp: regExp_2
        } : {
          optimize: optimize,
          regExp: regExp_2
        },
        loopRequired: (Q = j.loopRequired) !== null && Q !== void 0 ? Q : S,
        loopEnum: (ee = j.loopEnum) !== null && ee !== void 0 ? ee : S,
        meta: (re = j.meta) !== null && re !== void 0 ? re : !0,
        messages: (Se = j.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (ve = j.inlineRefs) !== null && ve !== void 0 ? ve : !0,
        schemaId: (we = j.schemaId) !== null && we !== void 0 ? we : "$id",
        addUsedSchema: (ye = j.addUsedSchema) !== null && ye !== void 0 ? ye : !0,
        validateSchema: (he = j.validateSchema) !== null && he !== void 0 ? he : !0,
        validateFormats: (Me = j.validateFormats) !== null && Me !== void 0 ? Me : !0,
        unicodeRegExp: (be = j.unicodeRegExp) !== null && be !== void 0 ? be : !0,
        int32range: (xe = j.int32range) !== null && xe !== void 0 ? xe : !0,
        uriResolver: uriResolver_2
      };
    }
    var R = class {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set(), this._loading = {}, this._cache = new Map(), j = this.opts = {
          ...j,
          ...f(j)
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
        }), this.logger = F(j.logger);
        let validateFormats = j.validateFormats;
        if (j.validateFormats = !1, this.RULES = (0, n.getRules)(), q.call(this, p, j, "NOT SUPPORTED"), q.call(this, h, j, "DEPRECATED", "warn"), this._metaOpts = K.call(this), j.formats) O.call(this);
        if (this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords) x.call(this, j.keywords);
        if (typeof j.meta == "object") this.addMetaSchema(j.meta);
        g.call(this), j.validateFormats = validateFormats;
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
          z = _;
        if (schemaId_5 === "id") z = {
          ..._
        }, z.id = z.$id, delete z.$id;
        if (meta && $data_2) this.addMetaSchema(z, z[schemaId_5], !1);
      }
      defaultMeta() {
        let {
          meta: meta_2,
          schemaId: schemaId_6
        } = this.opts;
        return this.opts.defaultMeta = typeof meta_2 == "object" ? meta_2[schemaId_6] || meta_2 : void 0;
      }
      validate(j, D) {
        let J;
        if (typeof j == "string") {
          if (J = this.getSchema(j), !J) throw Error(`no schema with key or ref "${j}"`);
        } else J = this.compile(j);
        let z = J(D);
        if (!("$async" in J)) this.errors = J.errors;
        return z;
      }
      compile(j, D) {
        let J = this._addSchema(j, D);
        return J.validate || this._compileSchemaEnv(J);
      }
      compileAsync(j, D) {
        if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
        let {
          loadSchema: loadSchema
        } = this.opts;
        return z.call(this, j, D);
        async function z(te, ue) {
          await M.call(this, te.$schema);
          let Ce = this._addSchema(te, ue);
          return Ce.validate || U.call(this, Ce);
        }
        async function M($ref) {
          if ($ref && !this.getSchema($ref)) await z.call(this, {
            $ref: $ref
          }, !0);
        }
        async function U(te) {
          try {
            return this._compileSchemaEnv(te);
          } catch (error) {
            if (!(error instanceof a.default)) throw error;
            return W.call(this, error), await Z.call(this, error.missingSchema), U.call(this, te);
          }
        }
        function W({
          missingSchema: missingSchema,
          missingRef: missingRef
        }) {
          if (this.refs[missingSchema]) throw Error(`AnySchema ${missingSchema} is loaded but ${missingRef} cannot be resolved`);
        }
        async function Z(te) {
          let ue = await ae.call(this, te);
          if (!this.refs[te]) await M.call(this, ue.$schema);
          if (!this.refs[te]) this.addSchema(ue, te, D);
        }
        async function ae(te) {
          let ue = this._loading[te];
          if (ue) return ue;
          try {
            return await (this._loading[te] = loadSchema(te));
          } finally {
            delete this._loading[te];
          }
        }
      }
      addSchema(j, D, J, z = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (let U of j) this.addSchema(U, void 0, J, z);
          return this;
        }
        let M;
        if (typeof j === "object") {
          let {
            schemaId: schemaId_7
          } = this.opts;
          if (M = j[schemaId_7], M !== void 0 && typeof M != "string") throw Error(`schema ${schemaId_7} must be string`);
        }
        return D = (0, c.normalizeId)(D || M), this._checkUnique(D), this.schemas[D] = this._addSchema(j, J, D, z, !0), this;
      }
      addMetaSchema(j, D, J = this.opts.validateSchema) {
        return this.addSchema(j, D, !0, J), this;
      }
      validateSchema(j, D) {
        if (typeof j == "boolean") return !0;
        let J;
        if (J = j.$schema, J !== void 0 && typeof J != "string") throw Error("$schema must be a string");
        if (J = J || this.opts.defaultMeta || this.defaultMeta(), !J) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        let z = this.validate(J, j);
        if (!z && D) {
          let M = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(M);else throw Error(M);
        }
        return z;
      }
      getSchema(j) {
        let D;
        while (typeof (D = b.call(this, j)) == "string") j = D;
        if (D === void 0) {
          let {
              schemaId: schemaId_8
            } = this.opts,
            z = new i.SchemaEnv({
              schema: {},
              schemaId: schemaId_8
            });
          if (D = i.resolveSchema.call(this, z, j), !D) return;
          this.refs[j] = D;
        }
        return D.validate || this._compileSchemaEnv(D);
      }
      removeSchema(j) {
        if (j instanceof RegExp) return this._removeAllSchemas(this.schemas, j), this._removeAllSchemas(this.refs, j), this;
        switch (typeof j) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string":
            {
              let D = b.call(this, j);
              if (typeof D == "object") this._cache.delete(D.schema);
              return delete this.schemas[j], delete this.refs[j], this;
            }
          case "object":
            {
              let D = j;
              this._cache.delete(D);
              let J = j[this.opts.schemaId];
              if (J) J = (0, c.normalizeId)(J), delete this.schemas[J], delete this.refs[J];
              return this;
            }
          default:
            throw Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(j) {
        for (let D of j) this.addKeyword(D);
        return this;
      }
      addKeyword(j, D) {
        let J;
        if (typeof j == "string") {
          if (J = j, typeof D == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = J;
        } else if (typeof j == "object" && D === void 0) {
          if (D = j, J = D.keyword, Array.isArray(J) && !J.length) throw Error("addKeywords: keyword must be string or non-empty array");
        } else throw Error("invalid addKeywords parameters");
        if (Y.call(this, J, D), !D) return (0, m.eachItem)(J, M => ne.call(this, M)), this;
        le.call(this, D);
        let z = {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        };
        return (0, m.eachItem)(J, z.type.length === 0 ? M => ne.call(this, M, z) : M => z.type.forEach(item => ne.call(this, M, z, item))), this;
      }
      getKeyword(j) {
        let D = this.RULES.all[j];
        return typeof D == "object" ? D.definition : !!D;
      }
      removeKeyword(j) {
        let {
          RULES: RULES_2
        } = this;
        delete RULES_2.keywords[j], delete RULES_2.all[j];
        for (let J of RULES_2.rules) {
          let z = J.rules.findIndex(item => item.keyword === j);
          if (z >= 0) J.rules.splice(z, 1);
        }
        return this;
      }
      addFormat(j, D) {
        if (typeof D == "string") D = new RegExp(D);
        return this.formats[j] = D, this;
      }
      errorsText(j = this.errors, {
        separator = ", ",
        dataVar = "data"
      } = {}) {
        if (!j || j.length === 0) return "No errors";
        return j.map(item => `${dataVar}${item.instancePath} ${item.message}`).reduce((acc, item) => acc + separator + item);
      }
      $dataMetaSchema(j, D) {
        let J = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (let z of D) {
          let M = z.split("/").slice(1),
            U = j;
          for (let W of M) U = U[W];
          for (let W in J) {
            let Z = J[W];
            if (typeof Z != "object") continue;
            let {
                $data: $data_3
              } = Z.definition,
              te = U[W];
            if ($data_3 && te) U[W] = ie(te);
          }
        }
        return j;
      }
      _removeAllSchemas(j, D) {
        for (let J in j) {
          let z = j[J];
          if (!D || D.test(J)) {
            if (typeof z == "string") delete j[J];else if (z && !z.meta) this._cache.delete(z.schema), delete j[J];
          }
        }
      }
      _addSchema(schema_25, meta_3, baseId_4, z = this.opts.validateSchema, M = this.opts.addUsedSchema) {
        let U,
          {
            schemaId: schemaId_9
          } = this.opts;
        if (typeof schema_25 == "object") U = schema_25[schemaId_9];else if (this.opts.jtd) throw Error("schema must be object");else if (typeof schema_25 != "boolean") throw Error("schema must be object or boolean");
        let Z = this._cache.get(schema_25);
        if (Z !== void 0) return Z;
        baseId_4 = (0, c.normalizeId)(U || baseId_4);
        let localRefs = c.getSchemaRefs.call(this, schema_25, baseId_4);
        if (Z = new i.SchemaEnv({
          schema: schema_25,
          schemaId: schemaId_9,
          meta: meta_3,
          baseId: baseId_4,
          localRefs: localRefs
        }), this._cache.set(Z.schema, Z), M && !baseId_4.startsWith("#")) {
          if (baseId_4) this._checkUnique(baseId_4);
          this.refs[baseId_4] = Z;
        }
        if (z) this.validateSchema(schema_25, !0);
        return Z;
      }
      _checkUnique(j) {
        if (this.schemas[j] || this.refs[j]) throw Error(`schema with key or id "${j}" already exists`);
      }
      _compileSchemaEnv(j) {
        if (j.meta) this._compileMetaSchema(j);else i.compileSchema.call(this, j);
        if (!j.validate) throw Error("ajv implementation error");
        return j.validate;
      }
      _compileMetaSchema(j) {
        let opts_18 = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, j);
        } finally {
          this.opts = opts_18;
        }
      }
    };
    R.ValidationError = s.default, R.MissingRefError = a.default, e.default = R;
    function q(j, D, J, z = "error") {
      for (let M in j) {
        let U = M;
        if (U in D) this.logger[z](`${J}: option ${M}. ${j[U]}`);
      }
    }
    function b(j) {
      return j = (0, c.normalizeId)(j), this.schemas[j] || this.refs[j];
    }
    function g() {
      let schemas = this.opts.schemas;
      if (!schemas) return;
      if (Array.isArray(schemas)) this.addSchema(schemas);else for (let D in schemas) this.addSchema(schemas[D], D);
    }
    function O() {
      for (let j in this.opts.formats) {
        let D = this.opts.formats[j];
        if (D) this.addFormat(j, D);
      }
    }
    function x(j) {
      if (Array.isArray(j)) {
        this.addVocabulary(j);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let D in j) {
        let J = j[D];
        if (!J.keyword) J.keyword = D;
        this.addKeyword(J);
      }
    }
    function K() {
      let j = {
        ...this.opts
      };
      for (let D of y) delete j[D];
      return j;
    }
    let L = {
      log() {},
      warn() {},
      error() {}
    };
    function F(j) {
      if (j === !1) return L;
      if (j === void 0) return console;
      if (j.log && j.warn && j.error) return j;
      throw Error("logger must implement log, warn and error methods");
    }
    let X = /^[a-z_$][a-z0-9_$:-]*$/i;
    function Y(j, D) {
      let {
        RULES: RULES_3
      } = this;
      if ((0, m.eachItem)(j, z => {
        if (RULES_3.keywords[z]) throw Error(`Keyword ${z} is already defined`);
        if (!X.test(z)) throw Error(`Keyword ${z} has invalid name`);
      }), !D) return;
      if (D.$data && !("code" in D || "validate" in D)) throw Error('$data keyword must have "code" or "validate" function');
    }
    function ne(keyword_11, D, type_4) {
      var z;
      let M = D === null || D === void 0 ? void 0 : D.post;
      if (type_4 && M) throw Error('keyword with "post" flag cannot have "type"');
      let {
          RULES: RULES_4
        } = this,
        W = M ? RULES_4.post : RULES_4.rules.find(({
          type: type_3
        }) => type_3 === type_4);
      if (!W) W = {
        type: type_4,
        rules: []
      }, RULES_4.rules.push(W);
      if (RULES_4.keywords[keyword_11] = !0, !D) return;
      let Z = {
        keyword: keyword_11,
        definition: {
          ...D,
          type: (0, d.getJSONTypes)(D.type),
          schemaType: (0, d.getJSONTypes)(D.schemaType)
        }
      };
      if (D.before) de.call(this, W, Z, D.before);else W.rules.push(Z);
      RULES_4.all[keyword_11] = Z, (z = D.implements) === null || z === void 0 || z.forEach(item => this.addKeyword(item));
    }
    function de(j, D, J) {
      let z = j.rules.findIndex(item => item.keyword === J);
      if (z >= 0) j.rules.splice(z, 0, D);else j.rules.push(D), this.logger.warn(`rule ${J} is not defined`);
    }
    function le(j) {
      let {
        metaSchema: metaSchema
      } = j;
      if (metaSchema === void 0) return;
      if (j.$data && this.opts.$data) metaSchema = ie(metaSchema);
      j.validateSchema = this.compile(metaSchema, !0);
    }
    let _e = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ie(j) {
      return {
        anyOf: [j, _e]
      };
    }
  });
var Iu = G(e => {
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
  yn = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.callRef = e.getValidate = void 0;
    let t = co(),
      r = Ve(),
      s = se(),
      a = De(),
      n = Ra(),
      i = ce(),
      l = {
        keyword: "$ref",
        schemaType: "string",
        code(m) {
          let {
              gen: gen_39,
              schema: w,
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
          if ((w === "#" || w === "#/") && baseId_5 === f.baseId) return q();
          let R = n.resolveRef.call(self_7, f, baseId_5, w);
          if (R === void 0) throw new t.default(it_19.opts.uriResolver, baseId_5, w);
          if (R instanceof n.SchemaEnv) return b(R);
          return g(R);
          function q() {
            if (schemaEnv_7 === f) return d(m, validateName_7, schemaEnv_7, schemaEnv_7.$async);
            let O = gen_39.scopeValue("root", {
              ref: f
            });
            return d(m, s._`${O}.validate`, f, f.$async);
          }
          function b(O) {
            d(m, c(m, O), O, O.$async);
          }
          function g(O) {
            let topSchemaRef_6 = gen_39.scopeValue("schema", opts_19.code.source === !0 ? {
                ref: O,
                code: (0, s.stringify)(O)
              } : {
                ref: O
              }),
              K = gen_39.name("valid"),
              L = m.subschema({
                schema: O,
                dataTypes: [],
                schemaPath: s.nil,
                topSchemaRef: topSchemaRef_6,
                errSchemaPath: w
              }, K);
            m.mergeEvaluated(L), m.ok(K);
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
    function d(m, _, w, k) {
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
      if (k) R();else q();
      function R() {
        if (!schemaEnv_8.$async) throw Error("async schema referenced by sync schema");
        let O = gen_41.let("valid");
        gen_41.try(() => {
          if (gen_41.code(s._`await ${(0, r.callValidateCode)(m, _, f)}`), g(_), !allErrors_5) gen_41.assign(O, !0);
        }, x => {
          if (gen_41.if(s._`!(${x} instanceof ${it_20.ValidationError})`, () => gen_41.throw(x)), b(x), !allErrors_5) gen_41.assign(O, !1);
        }), m.ok(O);
      }
      function q() {
        m.result((0, r.callValidateCode)(m, _, f), () => g(_), () => b(_));
      }
      function b(O) {
        let x = s._`${O}.errors`;
        gen_41.assign(a.default.vErrors, s._`${a.default.vErrors} === null ? ${x} : ${a.default.vErrors}.concat(${x})`), gen_41.assign(a.default.errors, s._`${a.default.vErrors}.length`);
      }
      function g(O) {
        var x;
        if (!it_20.opts.unevaluated) return;
        let K = (x = w === null || w === void 0 ? void 0 : w.validate) === null || x === void 0 ? void 0 : x.evaluated;
        if (it_20.props !== !0) if (K && !K.dynamicProps) {
          if (K.props !== void 0) it_20.props = i.mergeEvaluated.props(gen_41, K.props, it_20.props);
        } else {
          let L = gen_41.var("props", s._`${O}.evaluated.props`);
          it_20.props = i.mergeEvaluated.props(gen_41, L, it_20.props, s.Name);
        }
        if (it_20.items !== !0) if (K && !K.dynamicItems) {
          if (K.items !== void 0) it_20.items = i.mergeEvaluated.items(gen_41, K.items, it_20.items);
        } else {
          let L = gen_41.var("items", s._`${O}.evaluated.items`);
          it_20.items = i.mergeEvaluated.items(gen_41, L, it_20.items, s.Name);
        }
      }
    }
    e.callRef = d, e.default = l;
  }),
  Fi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Iu(),
      r = yn(),
      s = ["$schema", "$id", "$defs", "$vocabulary", {
        keyword: "$comment"
      }, "definitions", t.default, r.default];
    e.default = s;
  }),
  Ou = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
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
  Nu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
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
  Mu = G(e => {
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
  ju = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = Mu(),
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
  Au = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ve(),
      r = ce(),
      s = se(),
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
            w = it_23.opts.unicodeRegExp ? "u" : "";
          if ($data_4) {
            let {
                regExp: regExp_3
              } = it_23.opts.code,
              y = regExp_3.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(gen_43, regExp_3),
              v = gen_43.let("valid");
            gen_43.try(() => gen_43.assign(v, s._`${y}(${schemaCode_16}, ${w}).test(${data_19})`), () => gen_43.assign(v, !1)), n.fail$data(s._`!${v}`);
          } else {
            let k = (0, t.usePattern)(n, schema_26);
            n.fail$data(s._`!${k}.test(${data_19})`);
          }
        }
      };
    e.default = a;
  }),
  Lu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
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
  Uu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ve(),
      r = se(),
      s = ce(),
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
          let k = schema_27.length >= opts_21.loopRequired;
          if (it_24.allErrors) y();else v();
          if (opts_21.strictRequired) {
            let properties_3 = n.parentSchema.properties,
              {
                definedProperties: definedProperties
              } = n.it;
            for (let R of schema_27) if ((properties_3 === null || properties_3 === void 0 ? void 0 : properties_3[R]) === void 0 && !definedProperties.has(R)) {
              let q = `required property "${R}" is not defined at "${it_24.schemaEnv.baseId + it_24.errSchemaPath}" (strictRequired)`;
              (0, s.checkStrictMode)(it_24, q, it_24.opts.strictRequired);
            }
          }
          function y() {
            if (k || $data_5) n.block$data(r.nil, p);else for (let S of schema_27) (0, t.checkReportMissingProp)(n, S);
          }
          function v() {
            let S = gen_44.let("missing");
            if (k || $data_5) {
              let f = gen_44.let("valid", !0);
              n.block$data(f, () => h(S, f)), n.ok(f);
            } else gen_44.if((0, t.checkMissingProp)(n, schema_27, S)), (0, t.reportMissingProp)(n, S), gen_44.else();
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
  Du = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
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
  vn = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Li();
    t.code = 'require("ajv/dist/runtime/equal").default', e.default = t;
  }),
  Vu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = _a(),
      r = se(),
      s = ce(),
      a = vn(),
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
            v = parentSchema_4.items ? (0, t.getSchemaTypes)(parentSchema_4.items) : [];
          i.block$data(y, p, r._`${schemaCode_24} === false`), i.ok(y);
          function p() {
            let i_2 = gen_45.let("i", r._`${data_23}.length`),
              j_4 = gen_45.let("j");
            i.setParams({
              i: i_2,
              j: j_4
            }), gen_45.assign(y, !0), gen_45.if(r._`${i_2} > 1`, () => (h() ? S : f)(i_2, j_4));
          }
          function h() {
            return v.length > 0 && !v.some(item => item === "object" || item === "array");
          }
          function S(R, q) {
            let b = gen_45.name("item"),
              g = (0, t.checkDataTypes)(v, b, it_25.opts.strictNumbers, t.DataType.Wrong),
              O = gen_45.const("indices", r._`{}`);
            gen_45.for(r._`;${R}--;`, () => {
              if (gen_45.let(b, r._`${data_23}[${R}]`), gen_45.if(g, r._`continue`), v.length > 1) gen_45.if(r._`typeof ${b} == "string"`, r._`${b} += "_"`);
              gen_45.if(r._`typeof ${O}[${b}] == "number"`, () => {
                gen_45.assign(q, r._`${O}[${b}]`), i.error(), gen_45.assign(y, !1).break();
              }).code(r._`${O}[${b}] = ${R}`);
            });
          }
          function f(R, q) {
            let b = (0, s.useFunc)(gen_45, a.default),
              g = gen_45.name("outer");
            gen_45.label(g).for(r._`;${R}--;`, () => gen_45.for(r._`${q} = ${R}; ${q}--;`, () => gen_45.if(r._`${b}(${data_23}[${R}], ${data_23}[${q}])`, () => {
              i.error(), gen_45.assign(y, !1).break(g);
            })));
          }
        }
      };
    e.default = n;
  }),
  xu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = vn(),
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
  Fu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = vn(),
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
          let w = schema_30.length >= it_26.opts.loopEnum,
            k,
            y = () => k !== null && k !== void 0 ? k : k = (0, r.useFunc)(gen_47, s.default),
            v;
          if (w || $data_8) v = gen_47.let("valid"), n.block$data(v, p);else {
            if (!Array.isArray(schema_30)) throw Error("ajv implementation error");
            let S = gen_47.const("vSchema", schemaCode_28);
            v = (0, t.or)(...schema_30.map((item, index) => h(S, index)));
          }
          n.pass(v);
          function p() {
            gen_47.assign(v, !1), gen_47.forOf("v", schemaCode_28, S => gen_47.if(t._`${y()}(${data_25}, ${S})`, () => gen_47.assign(v, !0).break()));
          }
          function h(S, f) {
            let R = schema_30[f];
            return typeof R === "object" && R !== null ? t._`${y()}(${data_25}, ${S}[${f}])` : t._`${data_25} === ${R}`;
          }
        }
      };
    e.default = a;
  }),
  Hi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ou(),
      r = Nu(),
      s = ju(),
      a = Au(),
      n = Lu(),
      i = Uu(),
      l = Du(),
      c = Vu(),
      d = xu(),
      m = Fu(),
      _ = [t.default, r.default, s.default, a.default, n.default, i.default, l.default, c.default, {
        keyword: "type",
        schemaType: ["string", "array"]
      }, {
        keyword: "nullable",
        schemaType: "boolean"
      }, d.default, m.default];
    e.default = _;
  }),
  Ki = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateAdditionalItems = void 0;
    let t = se(),
      r = ce(),
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
      let w = gen_48.const("len", t._`${data_26}.length`);
      if (schema_31 === !1) n.setParams({
        len: i.length
      }), n.pass(t._`${w} <= ${i.length}`);else if (typeof schema_31 == "object" && !(0, r.alwaysValidSchema)(it_28, schema_31)) {
        let y = gen_48.var("valid", t._`${w} <= ${i.length}`);
        gen_48.if((0, t.not)(y), () => k(y)), n.ok(y);
      }
      function k(y) {
        gen_48.forRange("i", i.length, w, dataProp_3 => {
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
  Ji = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateTuple = void 0;
    let t = se(),
      r = ce(),
      s = Ve(),
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
        v = gen_49.const("len", t._`${data_27}.length`);
      c.forEach((item, S) => {
        if ((0, r.alwaysValidSchema)(it_30, item)) return;
        gen_49.if(t._`${v} > ${S}`, () => i.subschema({
          keyword: keyword_22,
          schemaProp: S,
          dataProp: S
        }, y)), i.ok(y);
      });
      function p(h) {
        let {
            opts: opts_22,
            errSchemaPath: errSchemaPath_6
          } = it_30,
          R = c.length,
          q = R === h.minItems && (R === h.maxItems || h[l] === !1);
        if (opts_22.strictTuples && !q) {
          let b = `"${keyword_22}" is ${R}-tuple, but minItems or maxItems/${l} are not specified or different at path "${errSchemaPath_6}"`;
          (0, r.checkStrictMode)(it_30, b, opts_22.strictTuples);
        }
      }
    }
    e.validateTuple = n, e.default = a;
  }),
  Hu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ji(),
      r = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: s => (0, t.validateTuple)(s, "items")
      };
    e.default = r;
  }),
  Ku = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = Ve(),
      a = Ki(),
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
  Ju = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
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
          let v = gen_50.name("valid");
          if (max_3 === void 0 && min_3 === 1) h(v, () => gen_50.if(v, () => gen_50.break()));else if (min_3 === 0) {
            if (gen_50.let(v, !0), max_3 !== void 0) gen_50.if(t._`${data_28}.length > 0`, p);
          } else gen_50.let(v, !1), p();
          a.result(v, () => a.reset());
          function p() {
            let f = gen_50.name("_valid"),
              R = gen_50.let("count", 0);
            h(f, () => gen_50.if(f, () => S(R)));
          }
          function h(f, R) {
            gen_50.forRange("i", 0, y, dataProp_4 => {
              a.subschema({
                keyword: "contains",
                dataProp: dataProp_4,
                dataPropType: r.Type.Num,
                compositeRule: !0
              }, f), R();
            });
          }
          function S(f) {
            if (gen_50.code(t._`${f}++`), max_3 === void 0) gen_50.if(t._`${f} >= ${min_3}`, () => gen_50.assign(v, !0).break());else if (gen_50.if(t._`${f} > ${max_3}`, () => gen_50.assign(v, !1).break()), min_3 === 1) gen_50.assign(v, !0);else gen_50.if(t._`${f} >= ${min_3}`, () => gen_50.assign(v, !0));
          }
        }
      };
    e.default = s;
  }),
  bn = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    let t = se(),
      r = ce(),
      s = Ve();
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
        let w = Array.isArray(schema_35[_]) ? d : m;
        w[_] = schema_35[_];
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
      let k = gen_51.let("missing");
      for (let property_4 in d) {
        let v = d[property_4];
        if (v.length === 0) continue;
        let p = (0, s.propertyInData)(gen_51, data_29, property_4, it_33.opts.ownProperties);
        if (c.setParams({
          property: property_4,
          depsCount: v.length,
          deps: v.join(", ")
        }), it_33.allErrors) gen_51.if(p, () => {
          for (let h of v) (0, s.checkReportMissingProp)(c, h);
        });else gen_51.if(t._`${p} && (${(0, s.checkMissingProp)(c, v, k)})`), (0, s.reportMissingProp)(c, k), gen_51.else();
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
  Gu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = {
        keyword: "propertyNames",
        type: "object",
        schemaType: ["object", "boolean"],
        error: {
          message: "property name must be valid",
          params: ({
            params: params_24
          }) => t._`{propertyName: ${params_24.propertyName}}`
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
  Gi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ve(),
      r = se(),
      s = De(),
      a = ce(),
      n = {
        keyword: "additionalProperties",
        type: ["object"],
        schemaType: ["boolean", "object"],
        allowUndefined: !0,
        trackErrors: !0,
        error: {
          message: "must NOT have additional properties",
          params: ({
            params: params_25
          }) => r._`{additionalProperty: ${params_25.additionalProperty}}`
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
          let v = (0, t.allSchemaProperties)(parentSchema_9.properties),
            p = (0, t.allSchemaProperties)(parentSchema_9.patternProperties);
          h(), i.ok(r._`${errsCount_2} === ${s.default.errors}`);
          function h() {
            gen_54.forIn("key", data_32, b => {
              if (!v.length && !p.length) R(b);else gen_54.if(S(b), () => R(b));
            });
          }
          function S(b) {
            let g;
            if (v.length > 8) {
              let O = (0, a.schemaRefOrVal)(it_36, parentSchema_9.properties, "properties");
              g = (0, t.isOwnProperty)(gen_54, O, b);
            } else if (v.length) g = (0, r.or)(...v.map(item => r._`${b} === ${item}`));else g = r.nil;
            if (p.length) g = (0, r.or)(g, ...p.map(item => r._`${(0, t.usePattern)(i, item)}.test(${b})`));
            return (0, r.not)(g);
          }
          function f(b) {
            gen_54.code(r._`delete ${data_32}[${b}]`);
          }
          function R(additionalProperty) {
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
              let g = gen_54.name("valid");
              if (opts_23.removeAdditional === "failing") q(additionalProperty, g, !1), gen_54.if((0, r.not)(g), () => {
                i.reset(), f(additionalProperty);
              });else if (q(additionalProperty, g), !allErrors_6) gen_54.if((0, r.not)(g), () => gen_54.break());
            }
          }
          function q(dataProp_5, g, O) {
            let x = {
              keyword: "additionalProperties",
              dataProp: dataProp_5,
              dataPropType: a.Type.Str
            };
            if (O === !1) Object.assign(x, {
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1
            });
            i.subschema(x, g);
          }
        }
      };
    e.default = n;
  }),
  Bu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = io(),
      r = Ve(),
      s = ce(),
      a = Gi(),
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
          let w = (0, r.allSchemaProperties)(schema_38);
          for (let h of w) it_37.definedProperties.add(h);
          if (it_37.opts.unevaluated && w.length && it_37.props !== !0) it_37.props = s.mergeEvaluated.props(gen_55, (0, s.toHash)(w), it_37.props);
          let k = w.filter(item => !(0, s.alwaysValidSchema)(it_37, schema_38[item]));
          if (k.length === 0) return;
          let y = gen_55.name("valid");
          for (let h of k) {
            if (v(h)) p(h);else {
              if (gen_55.if((0, r.propertyInData)(gen_55, data_33, h, it_37.opts.ownProperties)), p(h), !it_37.allErrors) gen_55.else().var(y, !0);
              gen_55.endIf();
            }
            i.it.definedProperties.add(h), i.ok(y);
          }
          function v(h) {
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
  Wu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ve(),
      r = se(),
      s = ce(),
      a = ce(),
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
            k = (0, t.allSchemaProperties)(schema_39),
            y = k.filter(item => (0, s.alwaysValidSchema)(it_38, schema_39[item]));
          if (k.length === 0 || y.length === k.length && (!it_38.opts.unevaluated || it_38.props === !0)) return;
          let v = opts_24.strictSchema && !opts_24.allowMatchingProperties && parentSchema_11.properties,
            p = gen_56.name("valid");
          if (it_38.props !== !0 && !(it_38.props instanceof r.Name)) it_38.props = (0, a.evaluatedPropsToName)(gen_56, it_38.props);
          let {
            props: props_3
          } = it_38;
          S();
          function S() {
            for (let q of k) {
              if (v) f(q);
              if (it_38.allErrors) R(q);else gen_56.var(p, !0), R(q), gen_56.if(p);
            }
          }
          function f(q) {
            for (let b in v) if (new RegExp(q).test(b)) (0, s.checkStrictMode)(it_38, `property ${b} matches pattern ${q} (use allowMatchingProperties)`);
          }
          function R(schemaProp_3) {
            gen_56.forIn("key", data_34, dataProp_6 => {
              gen_56.if(r._`${(0, t.usePattern)(i, schemaProp_3)}.test(${dataProp_6})`, () => {
                let g = y.includes(schemaProp_3);
                if (!g) i.subschema({
                  keyword: "patternProperties",
                  schemaProp: schemaProp_3,
                  dataProp: dataProp_6,
                  dataPropType: a.Type.Str
                }, p);
                if (it_38.opts.unevaluated && props_3 !== !0) gen_56.assign(r._`${props_3}[${dataProp_6}]`, !0);else if (!g && !it_38.allErrors) gen_56.if((0, r.not)(p), () => gen_56.break());
              });
            });
          }
        }
      };
    e.default = n;
  }),
  Yu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ce(),
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
  Xu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Ve().validateUnion,
      error: {
        message: "must match a schema in anyOf"
      }
    };
    e.default = t;
  }),
  Zu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: !0,
        error: {
          message: "must match exactly one schema in oneOf",
          params: ({
            params: params_26
          }) => t._`{passingSchemas: ${params_26.passing}}`
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
            w = gen_58.name("_valid");
          a.setParams({
            passing: passing
          }), gen_58.block(k), a.result(m, () => a.reset(), () => a.error(!0));
          function k() {
            d.forEach((item, v) => {
              let p;
              if ((0, r.alwaysValidSchema)(it_40, item)) gen_58.var(w, !0);else p = a.subschema({
                keyword: "oneOf",
                schemaProp: v,
                compositeRule: !0
              }, w);
              if (v > 0) gen_58.if(t._`${w} && ${m}`).assign(m, !1).assign(passing, t._`[${passing}, ${v}]`).else();
              gen_58.if(w, () => {
                if (gen_58.assign(m, !0), gen_58.assign(passing, v), p) a.mergeEvaluated(p, t.Name);
              });
            });
          }
        }
      };
    e.default = s;
  }),
  Qu = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ce(),
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
  ed = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = {
        keyword: "if",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        error: {
          message: ({
            params: params_27
          }) => t.str`must match "${params_27.ifClause}" schema`,
          params: ({
            params: params_28
          }) => t._`{failingKeyword: ${params_28.ifClause}}`
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
            w = gen_60.name("_valid");
          if (k(), n.reset(), d && m) {
            let ifClause = gen_60.let("ifClause");
            n.setParams({
              ifClause: ifClause
            }), gen_60.if(w, y("then", ifClause), y("else", ifClause));
          } else if (d) gen_60.if(w, y("then"));else gen_60.if((0, t.not)(w), y("else"));
          n.pass(_, () => n.error(!0));
          function k() {
            let v = n.subschema({
              keyword: "if",
              compositeRule: !0,
              createErrors: !1,
              allErrors: !1
            }, w);
            n.mergeEvaluated(v);
          }
          function y(v, p) {
            return () => {
              let h = n.subschema({
                keyword: v
              }, w);
              if (gen_60.assign(_, w), n.mergeValidEvaluated(h, _), p) gen_60.assign(p, t._`${v}`);else n.setParams({
                ifClause: v
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
  td = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ce(),
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
  Bi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Ki(),
      r = Hu(),
      s = Ji(),
      a = Ku(),
      n = Ju(),
      i = bn(),
      l = Gu(),
      c = Gi(),
      d = Bu(),
      m = Wu(),
      _ = Yu(),
      w = Xu(),
      k = Zu(),
      y = Qu(),
      v = ed(),
      p = td();
    function h(S = !1) {
      let f = [_.default, w.default, k.default, y.default, v.default, p.default, l.default, c.default, i.default, d.default, m.default];
      if (S) f.push(r.default, a.default);else f.push(t.default, s.default);
      return f.push(n.default), f;
    }
    e.default = h;
  }),
  rd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
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
          if ($data_9) v();else p();
          function v() {
            let h = gen_61.scopeValue("formats", {
                ref: self_8.formats,
                code: opts_25.code.formats
              }),
              S = gen_61.const("fDef", t._`${h}[${schemaCode_31}]`),
              f = gen_61.let("fType"),
              R = gen_61.let("format");
            gen_61.if(t._`typeof ${S} == "object" && !(${S} instanceof RegExp)`, () => gen_61.assign(f, t._`${S}.type || "string"`).assign(R, t._`${S}.validate`), () => gen_61.assign(f, t._`"string"`).assign(R, S)), s.fail$data((0, t.or)(q(), b()));
            function q() {
              if (opts_25.strictSchema === !1) return t.nil;
              return t._`${schemaCode_31} && !${R}`;
            }
            function b() {
              let g = schemaEnv_9.$async ? t._`(${S}.async ? await ${R}(${data_35}) : ${R}(${data_35}))` : t._`${R}(${data_35})`,
                O = t._`(typeof ${R} == "function" ? ${g} : ${R}.test(${data_35}))`;
              return t._`${R} && ${R} !== true && ${f} === ${a} && !${O}`;
            }
          }
          function p() {
            let h = self_8.formats[c];
            if (!h) {
              q();
              return;
            }
            if (h === !0) return;
            let [S, f, R] = b(h);
            if (S === a) s.pass(g());
            function q() {
              if (opts_25.strictSchema === !1) {
                self_8.logger.warn(O());
                return;
              }
              throw Error(O());
              function O() {
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
            function g() {
              if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
                if (!schemaEnv_9.$async) throw Error("async format in sync schema");
                return t._`await ${R}(${data_35})`;
              }
              return typeof f == "function" ? t._`${R}(${data_35})` : t._`${R}.test(${data_35})`;
            }
          }
        }
      };
    e.default = r;
  }),
  Wi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = [rd().default];
    e.default = t;
  }),
  Yi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"], e.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
  }),
  od = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Fi(),
      r = Hi(),
      s = Bi(),
      a = Wi(),
      n = Yi(),
      i = [t.default, r.default, (0, s.default)(), a.default, n.metadataVocabulary, n.contentVocabulary];
    e.default = i;
  }),
  sd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.DiscrError = void 0;
    var t;
    (function (r) {
      r.Tag = "tag", r.Mapping = "mapping";
    })(t || (e.DiscrError = t = {}));
  }),
  Xi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = sd(),
      s = Ra(),
      a = co(),
      n = ce(),
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
          let v = gen_62.let("valid", !1),
            tag_2 = gen_62.const("tag", t._`${data_36}${(0, t.getProperty)(y)}`);
          gen_62.if(t._`typeof ${tag_2} == "string"`, () => h(), () => l.error(!1, {
            discrError: r.DiscrError.Tag,
            tag: tag_2,
            tagName: y
          })), l.ok(v);
          function h() {
            let R = f();
            gen_62.if(!1);
            for (let q in R) gen_62.elseIf(t._`${tag_2} === ${q}`), gen_62.assign(v, S(R[q]));
            gen_62.else(), l.error(!1, {
              discrError: r.DiscrError.Mapping,
              tag: tag_2,
              tagName: y
            }), gen_62.endIf();
          }
          function S(schemaProp_4) {
            let q = gen_62.name("valid"),
              b = l.subschema({
                keyword: "oneOf",
                schemaProp: schemaProp_4
              }, q);
            return l.mergeEvaluated(b, t.Name), q;
          }
          function f() {
            var R;
            let q = {},
              b = O(parentSchema_15),
              g = !0;
            for (let L = 0; L < oneOf.length; L++) {
              let F = oneOf[L];
              if ((F === null || F === void 0 ? void 0 : F.$ref) && !(0, n.schemaHasRulesButRef)(F, it_45.self.RULES)) {
                let $ref_2 = F.$ref;
                if (F = s.resolveRef.call(it_45.self, it_45.schemaEnv.root, it_45.baseId, $ref_2), F instanceof s.SchemaEnv) F = F.schema;
                if (F === void 0) throw new a.default(it_45.opts.uriResolver, it_45.baseId, $ref_2);
              }
              let X = (R = F === null || F === void 0 ? void 0 : F.properties) === null || R === void 0 ? void 0 : R[y];
              if (typeof X != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);
              g = g && (b || O(F)), x(X, L);
            }
            if (!g) throw Error(`discriminator: "${y}" must be required`);
            return q;
            function O({
              required: required
            }) {
              return Array.isArray(required) && required.includes(y);
            }
            function x(L, F) {
              if (L.const) K(L.const, F);else if (L.enum) for (let X of L.enum) K(X, F);else throw Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
            }
            function K(L, F) {
              if (typeof L != "string" || L in q) throw Error(`discriminator: "${y}" values must be unique strings`);
              q[L] = F;
            }
          }
        }
      };
    e.default = i;
  }),
  ad = G((e, t) => {
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
  Zi = G((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv = void 0;
    let r = Di(),
      s = od(),
      a = Xi(),
      n = ad(),
      i = ["/properties"],
      l = "http://json-schema.org/draft-07/schema";
    var c = class extends r.default {
      _addVocabularies() {
        if (super._addVocabularies(), s.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        let k = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
        this.addMetaSchema(k, l, !1), this.refs["http://json-schema.org/schema"] = l;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
      }
    };
    e.Ajv = c, t.exports = e = c, t.exports.Ajv = c, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = c;
    var d = io();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return d.KeywordCxt;
      }
    });
    var m = se();
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
    var _ = ba();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
    var w = co();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return w.default;
      }
    });
  }),
  Qi = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dynamicAnchor = void 0;
    let t = se(),
      r = De(),
      s = Ra(),
      a = yn(),
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
      let w = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`,
        k = it_46.errSchemaPath === "#" ? it_46.validateName : l(c);
      gen_63.if(t._`!${w}`, () => gen_63.assign(w, k));
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
  ec = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dynamicRef = void 0;
    let t = se(),
      r = De(),
      s = yn(),
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
      if (it_47.allErrors) w();else {
        let y = gen_64.let("valid", !1);
        w(y), i.ok(y);
      }
      function w(y) {
        if (it_47.schemaEnv.root.dynamicAnchors[_]) {
          let v = gen_64.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
          gen_64.if(v, k(v, y), k(it_47.validateName, y));
        } else k(it_47.validateName, y)();
      }
      function k(y, v) {
        return v ? () => gen_64.block(() => {
          (0, s.callRef)(i, y), gen_64.let(v, !0);
        }) : () => (0, s.callRef)(i, y);
      }
    }
    e.dynamicRef = n, e.default = a;
  }),
  nd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Qi(),
      r = ce(),
      s = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code(a) {
          if (a.schema) (0, t.dynamicAnchor)(a, "");else (0, r.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
        }
      };
    e.default = s;
  }),
  id = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ec(),
      r = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: s => (0, t.dynamicRef)(s, s.schema)
      };
    e.default = r;
  }),
  cd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Qi(),
      r = ec(),
      s = nd(),
      a = id(),
      n = [t.default, r.default, s.default, a.default];
    e.default = n;
  }),
  ld = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = bn(),
      r = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: t.error,
        code: s => (0, t.validatePropertyDeps)(s)
      };
    e.default = r;
  }),
  ud = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = bn(),
      r = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: s => (0, t.validateSchemaDeps)(s)
      };
    e.default = r;
  }),
  dd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ce(),
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
  hd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = ld(),
      r = ud(),
      s = dd(),
      a = [t.default, r.default, s.default];
    e.default = a;
  }),
  md = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
      s = De(),
      a = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: ["boolean", "object"],
        trackErrors: !0,
        error: {
          message: "must NOT have unevaluated properties",
          params: ({
            params: params_29
          }) => t._`{unevaluatedProperty: ${params_29.unevaluatedProperty}}`
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
          if (props_4 instanceof t.Name) gen_65.if(t._`${props_4} !== true`, () => gen_65.forIn("key", data_37, p => gen_65.if(y(props_4, p), () => k(p))));else if (props_4 !== !0) gen_65.forIn("key", data_37, p => props_4 === void 0 ? k(p) : gen_65.if(v(props_4, p), () => k(p)));
          it_49.props = !0, n.ok(t._`${errsCount_3} === ${s.default.errors}`);
          function k(p) {
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
          function v(p, h) {
            let S = [];
            for (let f in p) if (p[f] === !0) S.push(t._`${h} !== ${f}`);
            return (0, t.and)(...S);
          }
        }
      };
    e.default = a;
  }),
  pd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = se(),
      r = ce(),
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
            let w = gen_66.var("valid", t._`${m} <= ${len_7}`);
            gen_66.if((0, t.not)(w), () => _(w, len_7)), a.ok(w);
          }
          it_50.items = !0;
          function _(w, k) {
            gen_66.forRange("i", k, m, dataProp_7 => {
              if (a.subschema({
                keyword: "unevaluatedItems",
                dataProp: dataProp_7,
                dataPropType: r.Type.Num
              }, w), !it_50.allErrors) gen_66.if((0, t.not)(w), () => gen_66.break());
            });
          }
        }
      };
    e.default = s;
  }),
  fd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = md(),
      r = pd(),
      s = [t.default, r.default];
    e.default = s;
  }),
  Sd = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = Fi(),
      r = Hi(),
      s = Bi(),
      a = cd(),
      n = hd(),
      i = fd(),
      l = Wi(),
      c = Yi(),
      d = [a.default, t.default, r.default, (0, s.default)(!0), l.default, c.metadataVocabulary, c.contentVocabulary, n.default, i.default];
    e.default = d;
  }),
  gd = G((e, t) => {
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
  _d = G((e, t) => {
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
  yd = G((e, t) => {
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
  vd = G((e, t) => {
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
  bd = G((e, t) => {
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
  Rd = G((e, t) => {
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
  zd = G((e, t) => {
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
  wd = G((e, t) => {
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
  $d = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let t = gd(),
      r = _d(),
      s = yd(),
      a = vd(),
      n = bd(),
      i = Rd(),
      l = zd(),
      c = wd(),
      d = ["/properties"];
    function m(_) {
      return [t, r, s, a, n, w(this, i), l, w(this, c)].forEach(item => this.addMetaSchema(item, void 0, !1)), this;
      function w(k, y) {
        return _ ? k.$dataMetaSchema(y, d) : y;
      }
    }
    e.default = m;
  }),
  Ed = G((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
    let r = Di(),
      s = Sd(),
      a = Xi(),
      n = $d(),
      i = "https://json-schema.org/draft/2020-12/schema";
    var l = class extends r.default {
      constructor(w = {}) {
        super({
          ...w,
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
    var c = io();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return c.KeywordCxt;
      }
    });
    var d = se();
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
    var m = ba();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return m.default;
      }
    });
    var _ = co();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
  }),
  Pd = G(e => {
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
      "date-time": t(w(!0), k),
      "iso-time": t(c(), m),
      "iso-date-time": t(w(), y),
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
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, k),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, y),
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function r(L) {
      return L % 4 === 0 && (L % 100 !== 0 || L % 400 === 0);
    }
    let s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
      a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(L) {
      let F = s.exec(L);
      if (!F) return !1;
      let X = +F[1],
        Y = +F[2],
        ne = +F[3];
      return Y >= 1 && Y <= 12 && ne >= 1 && ne <= (Y === 2 && r(X) ? 29 : a[Y]);
    }
    function i(L, F) {
      if (!(L && F)) return;
      if (L > F) return 1;
      if (L < F) return -1;
      return 0;
    }
    let l = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(L) {
      return function (X) {
        let Y = l.exec(X);
        if (!Y) return !1;
        let ne = +Y[1],
          de = +Y[2],
          le = +Y[3],
          _e = Y[4],
          ie = Y[5] === "-" ? -1 : 1,
          j = +(Y[6] || 0),
          D = +(Y[7] || 0);
        if (j > 23 || D > 59 || L && !_e) return !1;
        if (ne <= 23 && de <= 59 && le < 60) return !0;
        let J = de - D * ie,
          z = ne - j * ie - (J < 0 ? 1 : 0);
        return (z === 23 || z === -1) && (J === 59 || J === -1) && le < 61;
      };
    }
    function d(L, F) {
      if (!(L && F)) return;
      let X = new Date("2020-01-01T" + L).valueOf(),
        Y = new Date("2020-01-01T" + F).valueOf();
      if (!(X && Y)) return;
      return X - Y;
    }
    function m(L, F) {
      if (!(L && F)) return;
      let X = l.exec(L),
        Y = l.exec(F);
      if (!(X && Y)) return;
      if (L = X[1] + X[2] + X[3], F = Y[1] + Y[2] + Y[3], L > F) return 1;
      if (L < F) return -1;
      return 0;
    }
    let _ = /t|\s/i;
    function w(L) {
      let F = c(L);
      return function (Y) {
        let ne = Y.split(_);
        return ne.length === 2 && n(ne[0]) && F(ne[1]);
      };
    }
    function k(L, F) {
      if (!(L && F)) return;
      let X = new Date(L).valueOf(),
        Y = new Date(F).valueOf();
      if (!(X && Y)) return;
      return X - Y;
    }
    function y(L, F) {
      if (!(L && F)) return;
      let [X, Y] = L.split(_),
        [ne, de] = F.split(_),
        le = i(X, ne);
      if (le === void 0) return;
      return le || d(Y, de);
    }
    let v = /\/|:/,
      p = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri_2(L) {
      return v.test(L) && p.test(L);
    }
    let S = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(L) {
      return S.lastIndex = 0, S.test(L);
    }
    let R = -2147483648,
      q = 2147483647;
    function validate_2(L) {
      return Number.isInteger(L) && L <= q && L >= R;
    }
    function validate_3(L) {
      return Number.isInteger(L);
    }
    function validate_4() {
      return !0;
    }
    let x = /[^\\]\\Z/;
    function regex(L) {
      if (x.test(L)) return !1;
      try {
        return new RegExp(L), !0;
      } catch (error) {
        return !1;
      }
    }
  }),
  Td = G(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.formatLimitDefinition = void 0;
    let t = Zi(),
      r = se(),
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
        let v = new t.KeywordCxt(it_51, self_10.RULES.all.format.definition, "format");
        if (v.$data) p();else h();
        function p() {
          let f = gen_67.scopeValue("formats", {
              ref: self_10.formats,
              code: opts_26.code.formats
            }),
            R = gen_67.const("fmt", r._`${f}[${v.schemaCode}]`);
          l.fail$data((0, r.or)(r._`typeof ${R} != "object"`, r._`${R} instanceof RegExp`, r._`typeof ${R}.compare != "function"`, S(R)));
        }
        function h() {
          let f = v.schema,
            ref_7 = self_10.formats[f];
          if (!ref_7 || ref_7 === !0) return;
          if (typeof ref_7 != "object" || ref_7 instanceof RegExp || typeof ref_7.compare != "function") throw Error(`"${keyword_29}": format "${f}" does not define "compare" function`);
          let q = gen_67.scopeValue("formats", {
            key: f,
            ref: ref_7,
            code: opts_26.code.formats ? r._`${opts_26.code.formats}${(0, r.getProperty)(f)}` : void 0
          });
          l.fail$data(S(q));
        }
        function S(f) {
          return r._`${f}.compare(${data_39}, ${schemaCode_34}) ${a[keyword_29].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    let i = l => (l.addKeyword(e.formatLimitDefinition), l);
    e.default = i;
  }),
  Cd = G((e, t) => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    let r = Pd(),
      s = Td(),
      a = se(),
      n = new a.Name("fullFormats"),
      i = new a.Name("fastFormats"),
      l = (d, m = {
        keywords: !0
      }) => {
        if (Array.isArray(m)) return c(d, m, r.fullFormats, n), d;
        let [_, w] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
        if (c(d, m.formats || r.formatNames, _, w), m.keywords) (0, s.default)(d);
        return d;
      };
    l.get = (d, m = "full") => {
      let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!_) throw Error(`Unknown format "${d}"`);
      return _;
    };
    function c(d, m, _, w) {
      var k, y;
      (k = (y = d.opts.code).formats) !== null && k !== void 0 || (y.formats = a._`require("ajv-formats/dist/formats").${w}`);
      for (let v of m) d.addFormat(v, _[v]);
    }
    t.exports = e = l, Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = l;
  }),
  kd = Zi(),
  qd = Ed(),
  Id = Co(Cd(), 1),
  Od = new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]),
  Nd = Id.default;
function Md() {
  let e = new qd.Ajv2020({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return Nd(e), e;
}
var Qkn = class {
    _ajv;
    _userAjv;
    constructor(e) {
      this._userAjv = e !== void 0, this._ajv = e;
    }
    get ajv() {
      return this._ajv ??= Md();
    }
    getValidator(e) {
      if (!this._userAjv && "$schema" in e && typeof e.$schema === "string" && !Od.has(e.$schema.replace(/#$/, ""))) {
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
  Ajv = kd.Ajv;
var tc = !1;
var lo = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.OAuthClientFlowError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Ne(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Ne(this, e);
    }
    constructor(e) {
      super(e);
      this.name = new.target.name, wt(this, new.target);
    }
  },
  XRt = class extends lo {
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
  V8r = class extends lo {
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
  Sc = class extends lo {
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
  Rn = class extends lo {
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
  rc = class extends lo {
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
function oc(e, t, r) {
  if (e === void 0) return;
  if (e.issuer === void 0) {
    if (r?.canPersistStamp !== !1) console.warn("[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.");
    return e;
  }
  return gc(e.issuer, t) ? e : void 0;
}
function gc(e, t) {
  return e === t || e.endsWith("/") && e.slice(0, -1) === t || t.endsWith("/") && t.slice(0, -1) === e;
}
function _c(e) {
  if (e == null) return !1;
  let t = e;
  return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function jd(e, t, r) {
  let {
    resourceMetadataUrl: resourceMetadataUrl,
    scope: scope
  } = S3e(t.response);
  if ((await gYt(e, {
    serverUrl: t.serverUrl,
    resourceMetadataUrl: resourceMetadataUrl,
    scope: scope,
    fetchFn: t.fetchFn,
    ...r
  })) !== "AUTHORIZED") throw new z0();
}
function yc(e, t) {
  return {
    token: async () => (await e.tokens())?.access_token,
    onUnauthorized: async r => jd(e, r, t)
  };
}
var z0 = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", {
      value: "mcp.UnauthorizedError"
    });
  }
  static [Symbol.hasInstance](e) {
    return Ne(this, e);
  }
  static isInstance(e) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ne(this, e);
  }
  constructor(e) {
    super(e ?? "Unauthorized");
    this.name = "UnauthorizedError", wt(this, new.target);
  }
};
function Ea(e) {
  return e?.authorization_response_iss_parameter_supported === !0;
}
function Pa({
  iss: iss,
  expectedIssuer: expectedIssuer,
  issParameterSupported: issParameterSupported
}) {
  if (expectedIssuer === void 0) return;
  if (iss === void 0) {
    if (issParameterSupported) throw new XRt("authorization_response", expectedIssuer, void 0);
    return;
  }
  if (iss !== expectedIssuer) throw new XRt("authorization_response", expectedIssuer, iss);
}
function zn(...e) {
  let t = new Set();
  for (let r of e) {
    if (!r) continue;
    for (let s of r.split(/\s+/)) if (s) t.add(s);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function Ad(e, t) {
  if (!e) return !1;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let s of e.split(/\s+/)) if (s && !r.has(s)) return !0;
  return !1;
}
async function vc(authorizationCode, iss_2, r, s, a) {
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
    l = (await q8r(s, a)).authorizationServerMetadata;
  } catch {
    l = void 0;
  }
  if (!l) throw new z0("Authorization callback failed and the issuer could not be verified");
  Pa({
    iss: iss_3,
    expectedIssuer: l.issuer,
    issParameterSupported: Ea(l)
  });
  let c = authorizationCode.get("error");
  if (c) throw new F8(c, authorizationCode.get("error_description") ?? c, authorizationCode.get("error_uri") ?? void 0);
  throw new z0("Authorization callback contained neither `code` nor `error`");
}
function Ld(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var wn = "code",
  $n = "S256";
function Ud(e, t) {
  let r = e.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e && e.token_endpoint_auth_method && Ld(e.token_endpoint_auth_method) && (t.length === 0 || t.includes(e.token_endpoint_auth_method))) return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function Dd(e, t, r, s) {
  let {
    client_id: client_id,
    client_secret: client_secret
  } = t;
  switch (e) {
    case "client_secret_basic":
      Vd(client_id, client_secret, r);
      return;
    case "client_secret_post":
      xd(client_id, client_secret, s);
      return;
    case "none":
      Fd(client_id, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function Vd(e, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function xd(e, t, r) {
  if (r.set("client_id", e), t) r.set("client_secret", t);
}
function Fd(e, t) {
  t.set("client_id", e);
}
function bc(e) {
  return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1";
}
function Hd(e) {
  let t = new URL(String(e));
  if (t.protocol !== "https:" && !bc(t.hostname)) throw new Sc(t.href);
  return t;
}
function Kd(e) {
  for (let t of e ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (bc(r.hostname)) return "native";
  }
  return "web";
}
function Jd(e) {
  let clientMetadata = e.clientMetadata;
  return {
    ...clientMetadata,
    grant_types: clientMetadata.grant_types ?? (e.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]),
    application_type: clientMetadata.application_type ?? Kd(clientMetadata.redirect_uris)
  };
}
async function sc(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let s = OAuthErrorResponseSchema.parse(JSON.parse(r));
    return F8.fromResponse(s);
  } catch (error) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${error}. Raw body: ${r}`;
    return new F8(fge.ServerError, a);
  }
}
async function gYt(e, t) {
  try {
    return await En(e, t);
  } catch (error) {
    if (error instanceof F8) {
      if (error.code === fge.InvalidClient || error.code === fge.UnauthorizedClient) return await e.invalidateCredentials?.("client"), await e.invalidateCredentials?.("tokens"), await En(e, t);else if (error.code === fge.InvalidGrant) return await e.invalidateCredentials?.("tokens"), await En(e, t);
    }
    throw error;
  }
}
function Gd(e) {
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
async function En(e, {
  serverUrl: serverUrl,
  authorizationCode: authorizationCode_3,
  iss: iss_4,
  scope: a,
  resourceMetadataUrl: resourceMetadataUrl_2,
  fetchFn: fetchFn,
  skipIssuerMetadataValidation: l,
  forceReauthorization: forceReauthorization
}) {
  let clientMetadata_3 = Jd(e),
    m = await e.discoveryState?.(),
    resourceMetadata_2,
    w,
    k,
    y,
    resourceMetadataUrl_3 = resourceMetadataUrl_2;
  if (!resourceMetadataUrl_3 && m?.resourceMetadataUrl) resourceMetadataUrl_3 = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (w = m.authorizationServerUrl, resourceMetadata_2 = m.resourceMetadata, k = m.authorizationServerMetadata ?? (await yYt(w, {
      fetchFn: fetchFn,
      skipIssuerValidation: l
    })), !resourceMetadata_2) try {
      resourceMetadata_2 = await K8r(serverUrl, {
        resourceMetadataUrl: resourceMetadataUrl_3
      }, fetchFn);
    } catch (error) {
      if (error instanceof TypeError) throw error;
    }
    if (k !== m.authorizationServerMetadata || resourceMetadata_2 !== m.resourceMetadata) await e.saveDiscoveryState?.({
      authorizationServerUrl: String(w),
      resourceMetadataUrl: resourceMetadataUrl_3?.toString(),
      resourceMetadata: resourceMetadata_2,
      authorizationServerMetadata: k
    });
  } else {
    let L = await q8r(serverUrl, {
      resourceMetadataUrl: resourceMetadataUrl_3,
      fetchFn: fetchFn,
      skipIssuerMetadataValidation: l
    });
    w = L.authorizationServerUrl, k = L.authorizationServerMetadata, resourceMetadata_2 = L.resourceMetadata, y = {
      authorizationServerUrl: String(w),
      resourceMetadataUrl: resourceMetadataUrl_3?.toString(),
      resourceMetadata: resourceMetadata_2,
      authorizationServerMetadata: k
    };
  }
  let issuer = k?.issuer ?? String(w),
    h = {
      issuer: issuer
    };
  if (await e.saveAuthorizationServerUrl?.(issuer), authorizationCode_3 !== void 0) {
    let L = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (L === void 0) {
      if (e.saveDiscoveryState !== void 0) throw new Rn("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", issuer);
      console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) \u2014 see docs/migration/upgrade-to-v2.md \xA7SEP-2352.");
    } else if (!gc(L, issuer)) throw new Rn(L, issuer);
  }
  if (y) await e.saveDiscoveryState?.(y);
  let resource = await Wd(serverUrl, e, resourceMetadata_2);
  if (resource) await e.saveResourceUrl?.(String(resource));
  let scope_2 = Gd({
      requestedScope: a,
      resourceMetadata: resourceMetadata_2,
      authServerMetadata: k,
      clientMetadata: e.clientMetadata
    }),
    R = await Promise.resolve(e.clientInformation(h)),
    clientInformation = oc(R, issuer, {
      canPersistStamp: e.saveClientInformation !== void 0
    });
  if (clientInformation === void 0 && R?.issuer && e.saveClientInformation === void 0) throw new Rn(R.issuer, issuer);
  if (clientInformation && clientInformation.issuer === void 0) clientInformation = {
    ...clientInformation,
    issuer: issuer
  }, await e.saveClientInformation?.(clientInformation, h);
  if (!clientInformation) {
    if (authorizationCode_3 !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let L = k?.client_id_metadata_document_supported === !0,
      F = e.clientMetadataUrl;
    if (F && !Bd(F)) throw new F8(fge.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${F}`);
    if (L && F) clientInformation = {
      client_id: F,
      issuer: issuer
    }, await e.saveClientInformation?.(clientInformation, h);else {
      if (!e.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      clientInformation = {
        ...(await th(w, {
          metadata: k,
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
    if (authorizationCode_3 !== void 0) Pa({
      iss: iss_4,
      expectedIssuer: k?.issuer,
      issParameterSupported: Ea(k)
    });
    let L = await eh(e, w, {
      metadata: k,
      resource: resource,
      authorizationCode: authorizationCode_3,
      iss: iss_4,
      scope: scope_2,
      fetchFn: fetchFn
    });
    return await e.saveTokens({
      ...L,
      issuer: issuer
    }, h), "AUTHORIZED";
  }
  let g = oc(await e.tokens(h), issuer);
  if (g && g.issuer === void 0) g = {
    ...g,
    issuer: issuer
  }, await e.saveTokens(g, h);
  if (g?.refresh_token && !forceReauthorization) try {
    let L = await Z8o(w, {
      metadata: k,
      clientInformation: clientInformation,
      refreshToken: g.refresh_token,
      resource: resource,
      addClientAuthentication: e.addClientAuthentication,
      fetchFn: fetchFn
    });
    return await e.saveTokens({
      ...L,
      issuer: issuer
    }, h), "AUTHORIZED";
  } catch (error) {
    if (error instanceof Sc) throw error;
    if (!(error instanceof F8) || error.code === fge.ServerError) ;else throw error;
  }
  let state = e.state ? await e.state() : void 0,
    {
      authorizationUrl: authorizationUrl,
      codeVerifier: codeVerifier
    } = await Q8o(w, {
      metadata: k,
      clientInformation: clientInformation,
      state: state,
      redirectUrl: e.redirectUrl,
      scope: scope_2,
      resource: resource
    });
  return await e.saveCodeVerifier(codeVerifier), await e.redirectToAuthorization(authorizationUrl), "REDIRECT";
}
function Bd(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function Wd(e, t, r) {
  let requestedResource_2 = Xn(e);
  if (t.validateResourceURL) return await t.validateResourceURL(requestedResource_2, r?.resource);
  if (!r) return;
  if (!Zn({
    requestedResource: requestedResource_2,
    configuredResource: r.resource
  })) throw Error(`Protected resource ${r.resource} does not match expected ${requestedResource_2} (or origin)`);
  return new URL(r.resource);
}
function S3e(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, s] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !s) return {};
  let a = za(e, "resource_metadata") || void 0,
    resourceMetadataUrl_4;
  if (a) try {
    resourceMetadataUrl_4 = new URL(a);
  } catch {}
  let scope_3 = za(e, "scope") || void 0,
    error_3 = za(e, "error") || void 0,
    errorDescription = za(e, "error_description") || void 0;
  return {
    resourceMetadataUrl: resourceMetadataUrl_4,
    scope: scope_3,
    error: error_3,
    errorDescription: errorDescription
  };
}
function za(e, t) {
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
async function K8r(e, t, r = fetch) {
  let s = await Zd(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl
  });
  if (!s || s.status === 404) throw await s?.text?.().catch(() => {}), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!s.ok) throw await s.text?.().catch(() => {}), Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`);
  return OAuthProtectedResourceMetadataSchema.parse(await s.json());
}
async function Rc(e, headers_2, r = fetch) {
  try {
    return await r(e, {
      headers: headers_2
    });
  } catch (error) {
    if (!(error instanceof TypeError) || !tc) throw error;
    if (headers_2) try {
      return await r(e, {});
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;
      return;
    }
    return;
  }
}
function Yd(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function ac(e, t, r = fetch) {
  return await Rc(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function Xd(e, t) {
  if (!e) return !0;
  if (t === "/") return !1;
  return e.status >= 400 && e.status < 500 || e.status === 502;
}
async function Zd(e, t, r, s) {
  let a = new URL(e),
    n = s?.protocolVersion ?? At,
    i;
  if (s?.metadataUrl) i = new URL(s.metadataUrl);else {
    let c = Yd(t, a.pathname);
    i = new URL(c, s?.metadataServerUrl ?? a), i.search = a.search;
  }
  let l = await ac(i, n, r);
  if (!s?.metadataUrl && Xd(l, a.pathname)) l = await ac(new URL(`/.well-known/${t}`, a), n, r);
  return l;
}
function Qd(e) {
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
async function yYt(e, {
  fetchFn: fetchFn_2 = fetch,
  protocolVersion = At,
  skipIssuerValidation = !1
} = {}) {
  let a = {
      "MCP-Protocol-Version": protocolVersion,
      Accept: "application/json"
    },
    n = Qd(e);
  for (let {
    url: url,
    type: type_5
  } of n) {
    let c = await Rc(url, a, fetchFn_2);
    if (!c) continue;
    if (!c.ok) {
      if (await c.text?.().catch(() => {}), c.status >= 400 && c.status < 500 || c.status === 502) continue;
      throw Error(`HTTP ${c.status} trying to load ${type_5 === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${url}`);
    }
    let d = type_5 === "oauth" ? OAuthMetadataSchema.parse(await c.json()) : OpenIdProviderDiscoveryMetadataSchema.parse(await c.json());
    if (!skipIssuerValidation) {
      let m = typeof e === "string" ? e : e.href;
      if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) throw new XRt("metadata", m, d.issuer);
    }
    return d;
  }
}
async function q8r(e, t) {
  let resourceMetadata_3, authorizationServerUrl;
  try {
    if (resourceMetadata_3 = await K8r(e, {
      resourceMetadataUrl: t?.resourceMetadataUrl
    }, t?.fetchFn), resourceMetadata_3.authorization_servers && resourceMetadata_3.authorization_servers.length > 0) authorizationServerUrl = resourceMetadata_3.authorization_servers[0];
  } catch (error) {
    if (error instanceof TypeError) throw error;
  }
  if (!authorizationServerUrl) authorizationServerUrl = String(new URL("/", e));
  let authorizationServerMetadata = await yYt(authorizationServerUrl, {
    fetchFn: t?.fetchFn,
    skipIssuerValidation: t?.skipIssuerMetadataValidation
  });
  return {
    authorizationServerUrl: authorizationServerUrl,
    authorizationServerMetadata: authorizationServerMetadata,
    resourceMetadata: resourceMetadata_3
  };
}
async function Q8o(e, {
  metadata: metadata,
  clientInformation: clientInformation_2,
  redirectUrl: redirectUrl,
  scope: scope_4,
  state: state_2,
  resource: resource_2
}) {
  let authorizationUrl_2;
  if (metadata) {
    if (authorizationUrl_2 = new URL(metadata.authorization_endpoint), !metadata.response_types_supported.includes(wn)) throw Error(`Incompatible auth server: does not support response type ${wn}`);
    if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes($n)) throw Error(`Incompatible auth server: does not support code challenge method ${$n}`);
  } else authorizationUrl_2 = new URL("/authorize", e);
  let c = await cvn(),
    {
      code_verifier: d,
      code_challenge: code_challenge
    } = c;
  if (authorizationUrl_2.searchParams.set("response_type", wn), authorizationUrl_2.searchParams.set("client_id", clientInformation_2.client_id), authorizationUrl_2.searchParams.set("code_challenge", code_challenge), authorizationUrl_2.searchParams.set("code_challenge_method", $n), authorizationUrl_2.searchParams.set("redirect_uri", String(redirectUrl)), state_2) authorizationUrl_2.searchParams.set("state", state_2);
  if (scope_4) authorizationUrl_2.searchParams.set("scope", scope_4);
  if (scope_4?.split(" ").includes("offline_access")) authorizationUrl_2.searchParams.append("prompt", "consent");
  if (resource_2) authorizationUrl_2.searchParams.set("resource", resource_2.href);
  return {
    authorizationUrl: authorizationUrl_2,
    codeVerifier: d
  };
}
function zc(code_3, code_verifier, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: code_3,
    code_verifier: code_verifier,
    redirect_uri: String(r)
  });
}
async function kn(e, {
  metadata: metadata_2,
  tokenRequestParams: r,
  clientInformation: clientInformation_3,
  addClientAuthentication: addClientAuthentication,
  resource: resource_3,
  fetchFn: fetchFn_3
}) {
  let l = Hd(metadata_2?.token_endpoint ?? new URL("/token", e)),
    headers_3 = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });
  if (resource_3) r.set("resource", resource_3.href);
  if (addClientAuthentication) await addClientAuthentication(headers_3, r, l, metadata_2);else if (clientInformation_3) Dd(Ud(clientInformation_3, metadata_2?.token_endpoint_auth_methods_supported ?? []), clientInformation_3, headers_3, r);
  let d = await (fetchFn_3 ?? fetch)(l, {
    method: "POST",
    headers: headers_3,
    body: r
  });
  if (!d.ok) throw await sc(d);
  let m = await d.json();
  try {
    return OAuthTokensSchema.parse(m);
  } catch (error) {
    if (typeof m === "object" && m !== null && "error" in m) throw await sc(JSON.stringify(m));
    throw error;
  }
}
async function Kui(e, {
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
  return Pa({
    iss: iss_5,
    expectedIssuer: metadata_3?.issuer,
    issParameterSupported: Ea(metadata_3)
  }), kn(e, {
    metadata: metadata_3,
    tokenRequestParams: zc(authorizationCode_4, codeVerifier_2, redirectUri),
    clientInformation: clientInformation_4,
    addClientAuthentication: addClientAuthentication_2,
    resource: resource_4,
    fetchFn: fetchFn_4
  });
}
async function Z8o(e, {
  metadata: metadata_4,
  clientInformation: clientInformation_5,
  refreshToken: s,
  resource: resource_5,
  addClientAuthentication: addClientAuthentication_3,
  fetchFn: fetchFn_5
}) {
  return {
    refresh_token: s,
    ...(await kn(e, {
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
async function eh(e, t, {
  metadata: metadata_5,
  resource: resource_6,
  authorizationCode: authorizationCode_5,
  iss: iss_6,
  scope: scope_5,
  fetchFn: fetchFn_6
} = {}) {
  if (authorizationCode_5 !== void 0) Pa({
    iss: iss_6,
    expectedIssuer: metadata_5?.issuer,
    issParameterSupported: Ea(metadata_5)
  });
  let c = scope_5 ?? e.clientMetadata.scope,
    tokenRequestParams;
  if (e.prepareTokenRequest) tokenRequestParams = await e.prepareTokenRequest(c);
  if (!tokenRequestParams) {
    if (!authorizationCode_5) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    tokenRequestParams = zc(authorizationCode_5, await e.codeVerifier(), e.redirectUrl);
  }
  let m = await e.clientInformation({
    issuer: metadata_5?.issuer ?? String(t)
  });
  return kn(t, {
    metadata: metadata_5,
    tokenRequestParams: tokenRequestParams,
    clientInformation: m ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: resource_6,
    fetchFn: fetchFn_6
  });
}
async function th(e, {
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
  if (!l.ok) throw new V8r({
    status: l.status,
    body: await l.text(),
    submittedMetadata: submittedMetadata
  });
  return OAuthClientInformationFullSchema.parse(await l.json());
}
var wa = new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "server/discover"]),
  rh = class {
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
      return this._entries.get(Pn(e));
    }
    set(e, t) {
      let r = Pn(e),
        s = wa.has(e.method),
        a = !this._entries.has(r);
      if (!s && a && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
        for (let i of this._entries.keys()) if (!wa.has(i.slice(0, i.indexOf("\x00")))) {
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
      if (this._entries.delete(Pn(e)) && !wa.has(e.method)) this._cappedSize--;
    }
    evict(e) {
      let t = `${e}\x00`,
        r = wa.has(e);
      for (let s of this._entries.keys()) if (s.startsWith(t)) {
        if (this._entries.delete(s), !r) this._cappedSize--;
      }
    }
    clear() {
      this._entries.clear(), this._cappedSize = 0;
    }
  };
function Pn(e) {
  return `${e.method}\x00${JSON.stringify([e.partition ?? "", e.params ?? ""])}`;
}
function Tn(e, t) {
  return t === void 0 ? e : `${e}\x00${t}`;
}
var oh = 86400000,
  sh = class {
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
    async _deleteBoth(method_7, params_30) {
      let partition_3 = this._partitionFor("private"),
        partition_4 = this._partitionFor("public");
      try {
        await this._store.delete({
          method: method_7,
          params: params_30,
          partition: partition_3
        });
      } catch (error) {
        this._reportError(error);
      }
      if (partition_4 !== partition_3) try {
        await this._store.delete({
          method: method_7,
          params: params_30,
          partition: partition_4
        });
      } catch (error) {
        this._reportError(error);
      }
    }
    async evictKey(e, t) {
      let r = Tn(e, t),
        s = this._evictionGeneration.get(r);
      if (s !== void 0) this._evictionGeneration.set(r, s + 1);
      await this._deleteBoth(e, t);
    }
    captureGeneration(e, t) {
      let r = Tn(e, t),
        s = this._evictionGeneration.get(r) ?? 0;
      return this._evictionGeneration.set(r, s), s;
    }
    async write(method_8, t, r, s) {
      if ((this._evictionGeneration.get(Tn(method_8, s?.params)) ?? 0) !== r) return;
      let params_31 = s?.params ?? "",
        n = this._partitionFor("private"),
        i = this._partitionFor("public"),
        partition_5 = (s?.scope ?? "private") === "public" ? i : n;
      try {
        await this._store.set({
          method: method_8,
          params: params_31,
          partition: partition_5
        }, {
          value: ah(t),
          expiresAt: s?.expiresAt,
          scope: s?.scope
        });
      } catch (error) {
        this._reportError(error);
      }
      if (i !== n) try {
        await this._store.delete({
          method: method_8,
          params: params_31,
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
      let _toolOutputValidatorIndex = this._toolOutputValidatorIndex,
        a;
      if (_toolOutputValidatorIndex?.stamp !== r.stamp) {
        a = this._decodeListTools(r), _toolOutputValidatorIndex = {
          stamp: r.stamp,
          byName: new Map(),
          pending: new Set(),
          whole: String(r.value).includes('"$id"')
        };
        for (let n of a?.tools ?? []) if (n.outputSchema) _toolOutputValidatorIndex.pending.add(n.name);
      }
      if (_toolOutputValidatorIndex.whole ? _toolOutputValidatorIndex.pending.size > 0 : _toolOutputValidatorIndex.pending.has(e)) {
        a ??= this._decodeListTools(r);
        for (let n of a?.tools ?? []) if (_toolOutputValidatorIndex.whole || n.name === e) {
          let i = t(n);
          if (i !== void 0) _toolOutputValidatorIndex.byName.set(n.name, i);
        }
        if (_toolOutputValidatorIndex.whole) _toolOutputValidatorIndex.pending.clear();else _toolOutputValidatorIndex.pending.delete(e);
      }
      return this._toolOutputValidatorIndex = _toolOutputValidatorIndex, _toolOutputValidatorIndex.byName.get(e);
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
function ah(e) {
  let t;
  try {
    t = JSON.stringify(e);
  } catch (error) {
    throw TypeError(`cache value is not JSON-serializable: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (typeof t !== "string") throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
  return t;
}
var nh = -32022,
  ih = new Set([-32001, -32020, -32021]);
function ch(e, t) {
  switch (e.kind) {
    case "result":
      return lh(e.result, t);
    case "rpc-error":
      return wc(e, t);
    case "http-error":
      return uh(e, t);
    case "network-error":
      return nc(e.error, t);
    case "auth-required":
      return {
        kind: "error",
        error: e.error
      };
    case "closed":
      if (t.transportKind === "stdio") return {
        kind: "legacy"
      };
      return nc(Error("Connection closed during the version negotiation probe"), t);
    case "timeout":
      if (t.transportKind === "stdio") return {
        kind: "legacy"
      };
      return {
        kind: "error",
        error: new Vi(xi.RequestTimeout, `Version negotiation probe timed out after ${e.timeoutMs}ms`, {
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
function lh(e, t) {
  let r = Ge(ha).validateResult("server/discover", e);
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
    error: new da({
      supported: [...supportedVersions],
      requested: t.requestedVersion
    })
  };
}
function wc(e, t) {
  let {
    code: code_4,
    message: message_6,
    data: data_41
  } = e;
  if (code_4 === nh) {
    let supported = $c(data_41);
    if (supported === void 0) return {
      kind: "legacy"
    };
    let error_4 = new da({
        supported: supported,
        requested: mh(data_41) ?? t.requestedVersion
      }, message_6),
      l = ao(supported),
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
  if (ih.has(code_4)) return {
    kind: "legacy"
  };
  return {
    kind: "legacy"
  };
}
function uh(e, t) {
  let r = ph(e.body);
  if (r !== void 0) return wc(r, t);
  return {
    kind: "legacy"
  };
}
function nc(cause, t) {
  if (t.environment === "browser" && dh(cause)) return {
    kind: "legacy"
  };
  return {
    kind: "error",
    error: new Vi(xi.EraNegotiationFailed, `Version negotiation probe failed: ${hh(cause)}`, {
      cause: cause
    })
  };
}
function dh(e) {
  return e instanceof TypeError || e instanceof Error && e.name === "TypeError";
}
function hh(e) {
  return e instanceof Error ? e.message : String(e);
}
function $c(e) {
  if (typeof e !== "object" || e === null) return;
  let supported_2 = e.supported;
  if (!Array.isArray(supported_2) || supported_2.length === 0 || !supported_2.every(item => typeof item === "string")) return;
  return supported_2;
}
function mh(e) {
  if (typeof e !== "object" || e === null) return;
  let requested_2 = e.requested;
  return typeof requested_2 === "string" ? requested_2 : void 0;
}
function ph(e) {
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
var fh = "legacy";
function Sh(e, t) {
  let r = e?.mode ?? fh;
  if (r === "legacy") return {
    kind: "legacy"
  };
  let probe = e?.probe ?? {};
  if (typeof r === "object") {
    if (!We(r.pin)) throw TypeError(`versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`);
    return {
      kind: "pin",
      version: r.pin,
      probe: probe
    };
  }
  let a = t ? ao(t) : [];
  return {
    kind: "auto",
    modernVersions: a.length > 0 ? a : [...ln],
    fallbackAvailable: t ? un(t).length > 0 : !0,
    probe: probe
  };
}
function ic() {
  let globalThis_2 = globalThis;
  return globalThis_2.window !== void 0 && globalThis_2.document !== void 0 ? "browser" : "node";
}
function cc(e) {
  return "stderr" in e && "pid" in e ? "stdio" : "http";
}
var gh = class e {
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
        if (_pending !== void 0 && (EIe(a) || TIe(a)) && a.id === _pending.id) {
          if (s._pending = void 0, EIe(a)) _pending.resolve({
            kind: "response",
            result: a.result
          });else _pending.resolve({
            kind: "response",
            error: a.error
          });
          return;
        }
        if (_pending !== void 0 && s._transportKind === "http" && (EIe(a) || TIe(a)) && !s._issuedIds.has(a.id)) {
          s._pending = void 0;
          let i = lc(JSON.stringify(a.id)),
            l = Error(`server/discover probe reply did not echo the request id (expected ${JSON.stringify(_pending.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`);
          l.name = "McpProbeIdMismatchError", s._savedOnError?.(l), _pending.resolve({
            kind: "id-mismatch"
          });
          return;
        }
      }, t.onerror = a => {
        if (s._pending !== void 0 && s._errorSinceSend === void 0) s._errorSinceSend = a;
        let _pending_2 = s._pending;
        if (_pending_2 !== void 0 && s._transportKind === "http" && uc(a)) setTimeout(() => {
          if (s._pending !== _pending_2) return;
          s._pending = void 0;
          let i = Error(`server/discover probe reply failed JSON-RPC message decoding (${lc(a instanceof Error ? a.message : String(a))}) \u2014 treating the server as pre-2026-07-28`);
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
              if (_errorSinceSend !== void 0 && !uc(_errorSinceSend)) {
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
function lc(e) {
  let t = String(e);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}\u2026 [truncated]`;
}
function uc(e) {
  if (e instanceof SyntaxError) return !0;
  return typeof e === "object" && e !== null && (e.name === "ZodError" || Array.isArray(e.issues));
}
function dc(e) {
  let t = weakMap.get(e);
  weakMap.delete(e), t?.();
}
function _h(id_5, protocolVersion_2, clientInfo, clientCapabilities) {
  return {
    jsonrpc: "2.0",
    id: id_5,
    method: "server/discover",
    params: {
      _meta: Ge(protocolVersion_2).outboundEnvelope({
        protocolVersion: protocolVersion_2,
        clientInfo: clientInfo,
        clientCapabilities: clientCapabilities
      })
    }
  };
}
function yh(e, timeoutMs) {
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
        if (error_6 instanceof nA) {
          let s = error_6.data?.text;
          return {
            kind: "http-error",
            status: error_6.data.status,
            body: typeof s === "string" ? s : void 0
          };
        }
        if (error_6 instanceof z0 || error_6 instanceof Error && error_6.name === "UnauthorizedError") return {
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
async function Ec(e, t) {
  let r = e.probe.timeoutMs ?? t.defaultTimeoutMs,
    s = Math.max(0, e.probe.maxRetries ?? 0),
    clientModernVersions = e.kind === "pin" ? [e.version] : e.modernVersions,
    fallbackAvailable = e.kind === "auto" && e.fallbackAvailable,
    i = await gh.open(t.transport, t.transportKind),
    l = async () => {
      let requestedVersion = clientModernVersions[0],
        m = !1,
        _ = s;
      for (;;) {
        let w = await i.exchange(v => _h(v, requestedVersion, t.clientInfo, t.capabilities), r);
        if (w.kind === "timeout" && _ > 0) {
          _--;
          continue;
        }
        let k = yh(w, r);
        if (k.kind === "timeout") t.transport._anthropicProbeTimedOut = !0;
        let y = ch(k, {
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
              if (k.kind === "id-mismatch" || k.kind === "malformed" || k.kind === "stream-end") t.transport._anthropicProbeLegacyEvidence = k.kind;
              let v = k.kind === "closed" ? "the connection closed during the server/discover probe" : void 0;
              if (e.kind === "pin") throw new Vi(xi.EraNegotiationFailed, v === void 0 ? `Version negotiation failed: the server did not offer pinned protocol version ${e.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${v} before the server offered pinned protocol version ${e.version} (no fallback in pin mode)`);
              if (!e.fallbackAvailable) throw new Vi(xi.EraNegotiationFailed, v === void 0 ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${v} and this client supports no pre-2026-07-28 protocol version to fall back to`);
              if (v !== void 0 && t.disposableProbe !== !0) throw new Vi(xi.EraNegotiationFailed, `Version negotiation failed: ${v} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`);
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
function vh(e) {
  let t = Object.getPrototypeOf(e);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) return;
  let _serverParams = e._serverParams;
  return typeof _serverParams === "object" && _serverParams !== null && typeof _serverParams.command === "string" ? _serverParams : void 0;
}
async function bh(e, t, r, s) {
  let transport = new t.constructor({
      ...r,
      stderr: "ignore"
    }),
    i = t.close,
    l = !1,
    c,
    promise = new Promise((_, w) => {
      c = () => w(hc());
    });
  t.close = async function close() {
    return l = !0, c?.(), i.call(t);
  };
  let m;
  try {
    let _ = Ec(e, {
      ...s,
      transport: transport,
      transportKind: "stdio",
      disposableProbe: !0
    });
    _.catch(() => {}), m = await Promise.race([_, promise]);
  } finally {
    await Rh(transport), t.close = i;
  }
  if (l) throw hc();
  return m;
}
function hc() {
  return new Vi(xi.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
}
async function Rh(e) {
  try {
    let _dispose = e._dispose;
    await (typeof _dispose === "function" ? _dispose.call(e) : e.close());
  } catch {}
}
function mc(e) {
  let t = e._meta?.[h1e];
  return Ci.Implementation(t) ? t : void 0;
}
function $a(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let r = t,
      properties_4 = e.properties;
    for (let a of Object.keys(properties_4)) {
      let n = properties_4[a];
      if (r[a] === void 0 && Object.prototype.hasOwnProperty.call(n, "default")) r[a] = n.default;
      if (r[a] !== void 0) $a(n, r[a]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let r of e.anyOf) if (typeof r !== "boolean") $a(r, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let r of e.oneOf) if (typeof r !== "boolean") $a(r, t);
  }
}
function zh(e) {
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
function wh(e) {
  if (typeof e === "object" && e !== null) {
    if (e.kind === "legacy" && !("supportedVersions" in e) && !("discover" in e)) return e;
    if (e.kind === "modern" && g1e.safeParse(e.discover).success) return e;
  }
  throw new Vi(xi.EraNegotiationFailed, "connect({ prior }): unrecognized prior \u2014 expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
var pc = {
    "notifications/tools/list_changed": ["tools/list"],
    "notifications/prompts/list_changed": ["prompts/list"],
    "notifications/resources/list_changed": ["resources/list", "resources/templates/list"]
  },
  $h = 64,
  e9o = class extends ki {
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
        let error_7 = new Vi(xi.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
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
      } : {}, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new Qkn(), this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? !1, this._versionNegotiation = t?.versionNegotiation, this._supportedProtocolVersionsOption = t?.supportedProtocolVersions, this._inputRequiredDriverConfig = $i(t?.inputRequired), this._cache = new sh(t?.responseCacheStore ?? new rh(), t?.responseCacheStore !== void 0, r => this._reportStoreError(r), t?.cachePartition ?? ""), this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0, this._listMaxPages = t?.listMaxPages ?? $h, t?.listChanged) this._listChangedConfig = t.listChanged;
    }
    buildContext(e, t) {
      return e;
    }
    _shouldDropInbound(e) {
      if (this._negotiatedProtocolVersion !== void 0 && We(this._negotiatedProtocolVersion) && nre(e)) return "drop";
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
      if (!this._inputRequiredDriverConfig.autoFulfill) return Promise.reject(new Vi(xi.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, {
        resultType: "input_required",
        method: t.request.method
      }));
      return Ii({
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
      this._capabilities = qi(this._capabilities, e);
    }
    setVersionNegotiation(e) {
      if (this.transport) throw Error("Cannot configure version negotiation after connecting to transport");
      this._versionNegotiation = e;
    }
    _wrapHandler(e, t) {
      if (e === "elicitation/create") return async (r, s) => {
        let a = Ge(this._negotiatedProtocolVersion),
          n = a.validateRequest("elicitation/create", r);
        if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("elicitation/create", r);
        if (!n.ok) throw new Dc(n.reason === "not-in-era" ? Wa.InternalError : Wa.InvalidParams, n.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${n.message}`);
        let {
          params: params_32
        } = n.value;
        params_32.mode = params_32.mode ?? "form";
        let {
          supportsFormMode: supportsFormMode,
          supportsUrlMode: supportsUrlMode_2
        } = zh(this._capabilities.elicitation);
        if (params_32.mode === "form" && !supportsFormMode) throw new Dc(Wa.InvalidParams, "Client does not support form-mode elicitation requests");
        if (params_32.mode === "url" && !supportsUrlMode_2) throw new Dc(Wa.InvalidParams, "Client does not support URL-mode elicitation requests");
        let d = await t(r, s),
          m = a.validateResult("elicitation/create", d);
        if (!m.ok && m.reason === "not-in-era") m = a.validateInputResponse("elicitation/create", d);
        if (!m.ok) throw new Dc(m.reason === "not-in-era" ? Wa.InternalError : Wa.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
        let _ = m.value,
          w = params_32.mode === "form" ? params_32.requestedSchema : void 0;
        if (params_32.mode === "form" && _.action === "accept" && _.content && w && this._capabilities.elicitation?.form?.applyDefaults) try {
          $a(w, _.content);
        } catch {}
        return _;
      };
      if (e === "sampling/createMessage") return async (r, s) => {
        let a = Ge(this._negotiatedProtocolVersion),
          n = a.validateRequest("sampling/createMessage", r);
        if (!n.ok && n.reason === "not-in-era") n = a.validateInputRequest("sampling/createMessage", r);
        if (!n.ok) throw new Dc(n.reason === "not-in-era" ? Wa.InternalError : Wa.InvalidParams, n.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${n.message}`);
        let {
            params: params_33
          } = n.value,
          l = await t(r, s),
          c = Boolean(params_33.tools || params_33.toolChoice),
          d = a.samplingResultVariant(c, l);
        if (!d.ok && d.reason === "not-in-era") d = a.validateInputResponse("sampling/createMessage", l);
        if (!d.ok) throw new Dc(d.reason === "not-in-era" ? Wa.InternalError : Wa.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
        return d.value;
      };
      return t;
    }
    assertCapability(e, t) {
      if (!this._serverCapabilities?.[e]) throw new Vi(xi.CapabilityNotSupported, `Server does not support ${e} (required for ${t})`);
    }
    async connect(e, t) {
      if (t?.prior != null) return this._connectFromPrior(e, wh(t.prior), t);
      let r = Sh(this._versionNegotiation, this._supportedProtocolVersionsOption);
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
      let s = un(this._supportedProtocolVersions);
      try {
        let protocolVersion_3 = s[0];
        if (protocolVersion_3 === void 0) throw new Vi(xi.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
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
      let a = r.kind === "auto" && e._anthropicProbeTimedOut === !0 && t instanceof Dc,
        n = a && t.code === Wa.UnsupportedProtocolVersion ? $c(t.data) : void 0,
        version_3 = !a ? void 0 : n === void 0 ? r.modernVersions[0] : r.modernVersions.find(item => n.includes(item));
      if (version_3 === void 0) throw this.close(), t;
      try {
        this._negotiatedProtocolVersion = version_3;
        let discover = await this.discover({
          ...s,
          timeout: Math.min(3000, r.probe.timeoutMs ?? s?.timeout ?? no)
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
        let transportKind = cc(transport_2),
          n = {
            clientInfo: this._clientInfo,
            capabilities: this._capabilities,
            environment: ic(),
            defaultTimeoutMs: r?.timeout ?? no
          },
          i = transportKind === "stdio" ? vh(transport_2) : void 0;
        s = i === void 0 ? await Ec(t, {
          ...n,
          transport: transport_2,
          transportKind: transportKind
        }) : await bh(t, transport_2, i, n);
      } catch (error) {
        throw await transport_2.close().catch(() => {}), dc(transport_2), error;
      }
      if (dc(transport_2), await super.connect(transport_2), s.era === "legacy") try {
        await this._legacyHandshake(transport_2, r, !1);
        return;
      } catch (error) {
        s = await this._discoverAfterRejectedInitialize(transport_2, error, t, r);
      }
      if (this._serverCapabilities = s.discover.capabilities, this._serverVersion = mc(s.discover), this._cache.setServerIdentity(this._deriveServerIdentity(transport_2)), this._instructions = s.discover.instructions, this._discoverResult = s.discover, this._negotiatedProtocolVersion = s.version, transport_2.setProtocolVersion) transport_2.setProtocolVersion(s.version);
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
        n = (_supportedProtocolVersionsOption && ao(_supportedProtocolVersionsOption).length > 0 ? ao(_supportedProtocolVersionsOption) : ln).find(item => discover_2.supportedVersions.includes(item));
      if (n === void 0) throw new Vi(xi.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
      if (await super.connect(e), this._discoverResult = discover_2, this._serverCapabilities = discover_2.capabilities, this._serverVersion = mc(discover_2), this._cache.setServerIdentity(this._deriveServerIdentity(e)), this._instructions = discover_2.instructions, this._negotiatedProtocolVersion = n, e.setProtocolVersion?.(n), this._listChangedConfig) try {
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
      return We(_negotiatedProtocolVersion_3) ? "modern" : "legacy";
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
          if (!this._serverCapabilities?.logging) throw new Vi(xi.CapabilityNotSupported, `Server does not support logging (required for ${e})`);
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._serverCapabilities?.prompts) throw new Vi(xi.CapabilityNotSupported, `Server does not support prompts (required for ${e})`);
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
        case "resources/subscribe":
        case "resources/unsubscribe":
          if (!this._serverCapabilities?.resources) throw new Vi(xi.CapabilityNotSupported, `Server does not support resources (required for ${e})`);
          if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new Vi(xi.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e})`);
          break;
        case "tools/call":
        case "tools/list":
          if (!this._serverCapabilities?.tools) throw new Vi(xi.CapabilityNotSupported, `Server does not support tools (required for ${e})`);
          break;
        case "completion/complete":
          if (!this._serverCapabilities?.completions) throw new Vi(xi.CapabilityNotSupported, `Server does not support completions (required for ${e})`);
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
          if (!this._capabilities.roots?.listChanged) throw new Vi(xi.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e})`);
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
          if (!this._capabilities.sampling) throw new Vi(xi.CapabilityNotSupported, `Client does not support sampling capability (required for ${e})`);
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation) throw new Vi(xi.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e})`);
          break;
        case "roots/list":
          if (!this._capabilities.roots) throw new Vi(xi.CapabilityNotSupported, `Client does not support roots capability (required for ${e})`);
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
      }, g1e, e);
      return this._discoverResult = t, t;
    }
    async complete(params_34, t) {
      return this.request({
        method: "completion/complete",
        params: params_34
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
    async getPrompt(params_35, t) {
      return this.request({
        method: "prompts/get",
        params: params_35
      }, t);
    }
    async listPrompts(params_36, t) {
      if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities) return console.debug("Client.listPrompts() called but server does not advertise prompts capability - returning empty list"), {
        prompts: []
      };
      if (params_36?.cursor !== void 0) return this.request({
        method: "prompts/list",
        params: params_36
      }, t);
      let r = await this._serveFromCache("prompts/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("prompts/list", params_36, t, (s, a) => s.prompts.push(...a.prompts));
    }
    async listResources(params_37, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResources() called but server does not advertise resources capability - returning empty list"), {
        resources: []
      };
      if (params_37?.cursor !== void 0) return this.request({
        method: "resources/list",
        params: params_37
      }, t);
      let r = await this._serveFromCache("resources/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/list", params_37, t, (s, a) => s.resources.push(...a.resources));
    }
    async listResourceTemplates(params_38, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list"), {
        resourceTemplates: []
      };
      if (params_38?.cursor !== void 0) return this.request({
        method: "resources/templates/list",
        params: params_38
      }, t);
      let r = await this._serveFromCache("resources/templates/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/templates/list", params_38, t, (s, a) => s.resourceTemplates.push(...a.resourceTemplates));
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
        if (this._listMaxPages !== 0 && m >= this._listMaxPages) throw new Vi(xi.ListPaginationExceeded, `${method_9}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, {
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
    _freshness(e, params_39) {
      let r = e,
        s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs,
        scope_7 = r.cacheScope === "public" ? "public" : "private";
      return {
        expiresAt: this._cache.now() + Math.min(Math.max(0, s), oh),
        scope: scope_7,
        params: params_39
      };
    }
    async _serveFromCache(e, t, r) {
      if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
      let s = await this._cache.read(e, t).catch(a => void this._reportStoreError(a));
      if (s !== void 0) {
        if (r?.signal?.aborted) {
          let reason_3 = r.signal.reason;
          throw reason_3 instanceof Vi ? reason_3 : new Vi(xi.RequestTimeout, String(reason_3));
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
      return r === void 0 ? void 0 : Sn(r.inputSchema);
    }
    async readResource(params_40, t) {
      let r = await this._serveFromCache("resources/read", params_40.uri, t);
      if (r !== void 0) return r;
      let s = this._cache.captureGeneration("resources/read", params_40.uri),
        a = await this.request({
          method: "resources/read",
          params: params_40
        }, t);
      if (t?.cacheMode !== "bypass") {
        let n = this._freshness(a, params_40.uri);
        if (n.expiresAt > this._cache.now()) await this._cache.write("resources/read", a, s, n);else if (t?.cacheMode === "refresh") await this._cache.evictKey("resources/read", params_40.uri);
      }
      return a;
    }
    async subscribeResource(params_41, t) {
      return this.request({
        method: "resources/subscribe",
        params: params_41
      }, t);
    }
    async unsubscribeResource(params_42, t) {
      return this.request({
        method: "resources/unsubscribe",
        params: params_42
      }, t);
    }
    async listen(notifications_2, t) {
      if (this.transport === void 0) throw new Vi(xi.NotConnected, "Not connected");
      let r = this._negotiatedProtocolVersion;
      if (r === void 0 || !We(r)) throw new Vi(xi.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, {
        method: "subscriptions/listen",
        protocolVersion: r
      });
      if (t?.signal?.aborted) {
        let reason_4 = t.signal.reason;
        throw reason_4 instanceof Vi ? reason_4 : new Vi(xi.RequestTimeout, String(reason_4));
      }
      let abortController_4 = new AbortController(),
        a = `listen:${this._nextListenId++}`,
        n = "opening",
        i,
        l,
        c,
        d,
        promise_2 = new Promise((S, f) => {
          c = S, d = f;
        });
      promise_2.catch(() => {});
      let _,
        w = new Promise(S => {
          _ = S;
        }),
        settle = S => {
          if (n === "closed") return;
          let f = n === "opening";
          if (i !== void 0) clearTimeout(i), i = void 0;
          if ("ack" in S) {
            n = "open", c(S.ack);
            return;
          }
          if (n = "closed", l !== void 0) t?.signal?.removeEventListener("abort", l);
          if (this._listenState.delete(a), abortController_4.abort(), _(S.cause), f) d(S.error ?? new Vi(xi.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
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
      let timeout_3 = t?.timeout ?? no;
      if (i = setTimeout(() => {
        settle({
          cause: "remote",
          error: new Vi(xi.RequestTimeout, "subscriptions/listen ack timed out", {
            timeout: timeout_3
          })
        }), y().catch(() => {});
      }, timeout_3), t?.signal) {
        let S = t.signal;
        l = () => {
          if (n === "closed") return;
          let reason_5 = S.reason;
          settle({
            cause: "local",
            error: reason_5 instanceof Error ? reason_5 : Error(String(reason_5 ?? "Aborted"))
          }), y().catch(() => {});
        }, S.addEventListener("abort", l, {
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
      } catch (S) {
        settle({
          cause: "remote",
          error: S instanceof Error ? S : Error(String(S))
        });
      }
      return {
        honoredFilter: await promise_2,
        close: close,
        closed: w
      };
    }
    get autoOpenedSubscription() {
      return this._autoOpenedSubscription;
    }
    _onnotification(e, t) {
      let r = Object.hasOwn(pc, e.method) ? pc[e.method] : void 0;
      if (e.method === "notifications/resources/updated") {
        let s = e.params?.uri;
        if (typeof s === "string") this._cache.evictKey("resources/read", s);
      } else if (r !== void 0) for (let s of r) this._cache.evict(s);
      if (e.method === "notifications/subscriptions/acknowledged") {
        let s = e.params?._meta?.[wr],
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
        if (TIe(e)) r.settle({
          cause: "remote",
          error: Dc.fromError(e.error.code, e.error.message, e.error.data)
        });else r.settle({
          cause: "graceful",
          error: new Vi(xi.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging")
        });
        return;
      }
      super._onresponse(e);
    }
    _onclose() {
      if (this._listenState.size > 0) {
        let error_8 = new Vi(xi.ConnectionClosed, "Connection closed");
        for (let t of this._listenState.values()) t.settle({
          cause: "remote",
          error: error_8
        });
        this._listenState.clear();
      }
      super._onclose();
    }
    async callTool(params_43, t) {
      let r = this.getProtocolEra() === "modern" && ic() !== "browser",
        s = async () => {
          if (!r) return t;
          let c;
          try {
            c = await this._resolveXMcpHeaderScan(params_43.name, t?.toolDefinition);
          } catch (error) {
            this._reportStoreError(error);
          }
          if (!c?.valid || c.declarations.length === 0) return t;
          let d = zi(c.declarations, params_43.arguments);
          return Object.keys(d).length === 0 ? t : {
            ...t,
            headers: {
              ...t?.headers,
              ...d
            }
          };
        },
        a = t?.toolDefinition === void 0 ? await this._cache.outputValidator(params_43.name, c => this._compileOutputValidator(c)).catch(c => void this._reportStoreError(c)) : this._compileOutputValidator(t.toolDefinition),
        n = () => {
          if (a === void 0 || a.ok) return;
          let compileError = a.compileError,
            d = (compileError instanceof Error ? compileError.message : String(compileError)).slice(0, 200);
          throw new Dc(Wa.InvalidParams, `Tool '${params_43.name}' has an invalid outputSchema: ${d}`);
        };
      n();
      let i;
      try {
        i = await this.request({
          method: "tools/call",
          params: params_43
        }, await s());
      } catch (error) {
        let d = error instanceof Dc && error.code === Yt;
        if (!r || !d || t?.toolDefinition !== void 0) throw error;
        let m = {
          signal: t?.signal,
          timeout: t?.timeout,
          cacheMode: "refresh"
        };
        await this._cache.evict("tools/list"), await this.listTools(void 0, m).catch(_ => this._reportStoreError(_)), a = await this._cache.outputValidator(params_43.name, _ => this._compileOutputValidator(_)).catch(_ => void this._reportStoreError(_)), n(), i = await this.request({
          method: "tools/call",
          params: params_43
        }, await s());
      }
      if (t?.allowTask === !0 && i.resultType === "task") return i;
      if (t?.allowInputRequired === !0 && i.resultType === "input_required") return i;
      let l = a !== void 0 && a.ok ? a.validator : void 0;
      if (l) {
        if (i.structuredContent === void 0 && !i.isError) throw new Dc(Wa.InvalidRequest, `Tool ${params_43.name} has an output schema but did not return structured content`);
        if (i.structuredContent !== void 0 && !i.isError) try {
          let c = l(i.structuredContent);
          if (!c.valid) throw new Dc(Wa.InvalidParams, `Structured content does not match the tool's output schema: ${c.errorMessage}`);
        } catch (error) {
          if (error instanceof Dc) throw error;
          throw new Dc(Wa.InvalidParams, `Failed to validate structured content: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      return i;
    }
    async listTools(params_44, t) {
      if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities) return console.debug("Client.listTools() called but server does not advertise tools capability - returning empty list"), {
        tools: []
      };
      if (params_44?.cursor !== void 0) {
        let s = await this.request({
          method: "tools/list",
          params: params_44
        }, t);
        return this._excludeInvalidXMcpHeaderTools(s), s;
      }
      let r = await this._serveFromCache("tools/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("tools/list", params_44, t, (s, a) => s.tools.push(...a.tools), s => this._excludeInvalidXMcpHeaderTools(s));
    }
    _excludeInvalidXMcpHeaderTools(e) {
      if (this.getProtocolEra() !== "modern" || !this.transport || cc(this.transport) === "stdio") return;
      try {
        if (!JSON.stringify(e.tools).includes("x-mcp-header")) return;
      } catch {}
      let t = e.tools.filter(item => {
        let s = Sn(item.inputSchema);
        if (!s.valid) return console.warn(`[mcp-sdk] excluding tool '${item.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${s.reason}`), !1;
        return !0;
      });
      if (t.length !== e.tools.length) e.tools = t;
    }
    _setupListChangedHandler(e, t, r, s) {
      let a = Sa(xr, r);
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
var Y8r = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.SseError"
      });
    }
    static [Symbol.hasInstance](e) {
      return Ne(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
      return Ne(this, e);
    }
    constructor(e, t, r) {
      super(`SSE error: ${t}`);
      this.code = e, this.event = r, wt(this, new.target);
    }
  },
  usr = class {
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
      if (this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = t?.eventSourceInit, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, _c(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = yc(t.authProvider, {
        skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
      });else this._authProvider = t?.authProvider;
      this._fetch = t?.fetch, this._fetchWithInit = hYt(t?.fetch, t?.requestInit);
    }
    _last401Response;
    async _commonHeaders() {
      let e = {},
        t = await this._authProvider?.token();
      if (t) e.Authorization = `Bearer ${t}`;
      if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
      let r = so(this._requestInit?.headers);
      return new Headers({
        ...e,
        ...r
      });
    }
    _startOrAuth() {
      let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
      return new Promise((t, r) => {
        this._eventSource = new tlt(this._url.href, {
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
                } = S3e(i);
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
            let n = new z0();
            r(n), this.onerror?.(n);
            return;
          }
          let a = new Y8r(s.code, s.message, s);
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
            n = $t(JSON.parse(a.data));
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
      if (!this._oauthProvider) throw new z0("finishAuth requires an OAuthClientProvider");
      let {
        authorizationCode: authorizationCode_6,
        iss: iss_7
      } = await vc(e, t, this._oauthProvider, this._url, {
        fetchFn: this._fetchWithInit,
        resourceMetadataUrl: this._resourceMetadataUrl
      });
      if ((await gYt(this._oauthProvider, {
        serverUrl: this._url,
        authorizationCode: authorizationCode_6,
        iss: iss_7,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
        skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
      })) !== "AUTHORIZED") throw new z0("Failed to authorize");
    }
    async close() {
      this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
    }
    async send(e) {
      return this._send(e, !1);
    }
    async _send(e, t) {
      if (!this._endpoint) throw new Vi(xi.NotConnected, "Not connected");
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
              } = S3e(response);
              this._resourceMetadataUrl = resourceMetadataUrl_6, this._scope = scope_9;
            }
            if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({
              response: response,
              serverUrl: this._url,
              fetchFn: this._fetchWithInit
            }), await response.text?.().catch(() => {}), this._send(e, !0);
            if (await response.text?.().catch(() => {}), t) throw new nA(xi.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
              status: 401,
              statusText: response.statusText
            });
            throw new z0();
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
  Eh = 1,
  Ph = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
  },
  Th = new Set(["authorization", "content-type", "mcp-protocol-version", "mcp-method", "mcp-name", "mcp-session-id"]);
function fc(e, t) {
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
var Zkn = class {
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
    if (this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, _c(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = yc(t.authProvider, {
      skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
    });else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = hYt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._protocolVersion = t?.protocolVersion, this._reconnectionOptions = t?.reconnectionOptions ?? Ph, this._reconnectionScheduler = t?.reconnectionScheduler, this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize", this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? Eh);
  }
  async _stepUpAuthorize(e, t) {
    if (this._onInsufficientScope === "throw") throw new rc({
      requiredScope: e.scope,
      resourceMetadataUrl: e.resourceMetadataUrl,
      errorDescription: e.errorDescription
    });
    if (!this._oauthProvider) throw new rc({
      requiredScope: e.scope,
      resourceMetadataUrl: e.resourceMetadataUrl,
      errorDescription: e.errorDescription
    });
    if (t >= this._maxStepUpRetries) throw new nA(xi.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, {
      status: 403,
      statusText: e.statusText ?? "Forbidden",
      text: e.text
    });
    if (e.resourceMetadataUrl) this._resourceMetadataUrl = e.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(),
      scope_10 = zn(this._scope, r?.scope, e.scope);
    this._scope = scope_10;
    let forceReauthorization_2 = Ad(scope_10, r?.scope);
    return gYt(this._oauthProvider, {
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
    let r = so(this._requestInit?.headers);
    return new Headers({
      ...e,
      ...r
    });
  }
  _applyBodyDerivedHeaders(e, t) {
    if (Array.isArray(t) || !nre(t)) return;
    let r = t.params?._meta?.[Ke];
    if (typeof r !== "string") return;
    e.set("mcp-protocol-version", r), e.set("mcp-method", t.method);
    let params_45 = t.params,
      a = t.method === "resources/read" ? typeof params_45?.uri === "string" ? params_45.uri : void 0 : typeof params_45?.name === "string" ? params_45.name : void 0;
    if (a !== void 0) e.set("mcp-name", fa(a));
    let n = t.method.startsWith("tasks/") && typeof params_45?.taskId === "string" ? params_45.taskId : void 0;
    if (n !== void 0) e.set("mcp-name", fa(n));
  }
  _isModernEnvelopedRequest(e) {
    if (Array.isArray(e) || !nre(e)) return !1;
    let t = e.params?._meta?.[Ke];
    return typeof t === "string" && We(t);
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
        signal_3 = requestSignal !== void 0 && c !== void 0 ? fc(c, requestSignal) : requestSignal ?? c,
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
            } = S3e(response_2);
            this._resourceMetadataUrl = resourceMetadataUrl_7, this._scope = zn(this._scope, scope_11);
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({
            response: response_2,
            serverUrl: this._url,
            fetchFn: this._fetchWithInit
          }), await response_2.text?.().catch(() => {}), this._startOrAuthSse(e, !0, r);
          if (await response_2.text?.().catch(() => {}), t) throw new nA(xi.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
            status: 401,
            statusText: response_2.statusText
          });
          throw new z0();
        }
        if (response_2.status === 403) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_8,
            scope: scope_12,
            error: error_9,
            errorDescription: errorDescription_2
          } = S3e(response_2);
          if (error_9 === "insufficient_scope") {
            let text = await response_2.text?.().catch(() => null);
            if ((await this._stepUpAuthorize({
              scope: scope_12,
              resourceMetadataUrl: resourceMetadataUrl_8,
              errorDescription: errorDescription_2,
              statusText: response_2.statusText,
              text: text
            }, r)) !== "AUTHORIZED") throw new z0();
            return this._startOrAuthSse(e, t, r + 1);
          }
        }
        if (await response_2.text?.().catch(() => {}), response_2.status === 405) {
          e.onRequestStreamEnd?.();
          return;
        }
        throw new nA(xi.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${response_2.statusText}`, {
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
        let w = e.pipeThrough(new TextDecoderStream()).pipeThrough(new dvn({
          onRetry: k => {
            this._serverRetryMs = k;
          }
        })).getReader();
        while (!0) {
          let {
            value: value_4,
            done: done
          } = await w.read();
          if (done) break;
          if (value_4.id) resumptionToken_3 = value_4.id, d = !0, onresumptiontoken_2?.(value_4.id);
          if (!value_4.data) continue;
          if (!value_4.event || value_4.event === "message") try {
            let v = $t(JSON.parse(value_4.data));
            if (EIe(v) || TIe(v)) {
              if (m = !0, replayMessageId !== void 0) v.id = replayMessageId;
            }
            this.onmessage?.(v);
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
    if (!this._oauthProvider) throw new z0("finishAuth requires an OAuthClientProvider");
    let {
      authorizationCode: authorizationCode_7,
      iss: iss_8
    } = await vc(e, t, this._oauthProvider, this._url, {
      fetchFn: this._fetchWithInit,
      resourceMetadataUrl: this._resourceMetadataUrl
    });
    if ((await gYt(this._oauthProvider, {
      serverUrl: this._url,
      authorizationCode: authorizationCode_7,
      iss: iss_8,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit,
      skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
    })) !== "AUTHORIZED") throw new z0("Failed to authorize");
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
          replayMessageId: nre(e) ? e.id : void 0,
          requestSignal: t?.requestSignal
        }).catch(p => this.onerror?.(p));
        return;
      }
      let headers_7 = await this._commonHeaders();
      this._applyBodyDerivedHeaders(headers_7, e);
      let l = Array.isArray(e) ? e.some(item => csr(item)) : csr(e);
      if (l) headers_7.delete("mcp-session-id");
      if (t?.headers !== void 0) for (let [p, h] of Object.entries(t.headers)) {
        if (Th.has(p.toLowerCase())) continue;
        headers_7.set(p, h);
      }
      headers_7.set("content-type", "application/json");
      let c = [...(headers_7.get("accept")?.split(",").map(p => p.trim().toLowerCase()) ?? []), "application/json", "text/event-stream"];
      headers_7.set("accept", [...new Set(c)].join(", "));
      let d = this._abortController?.signal,
        signal_4 = t?.requestSignal !== void 0 && d !== void 0 ? fc(d, t.requestSignal) : t?.requestSignal ?? d,
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
            } = S3e(response_3);
            this._resourceMetadataUrl = resourceMetadataUrl_9, this._scope = zn(this._scope, scope_13);
          }
          if (this._authProvider.onUnauthorized && !r) return await this._authProvider.onUnauthorized({
            response: response_3,
            serverUrl: this._url,
            fetchFn: this._fetchWithInit
          }), await response_3.text?.().catch(() => {}), this._send(e, t, !0, s);
          if (await response_3.text?.().catch(() => {}), r) throw new nA(xi.ClientHttpAuthentication, "Server returned 401 after re-authentication", {
            status: 401,
            statusText: response_3.statusText
          });
          throw new z0();
        }
        let text_2 = await response_3.text?.().catch(() => null);
        if (response_3.status === 403) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_10,
            scope: scope_14,
            error: error_10,
            errorDescription: errorDescription_3
          } = S3e(response_3);
          if (error_10 === "insufficient_scope") {
            if ((await this._stepUpAuthorize({
              scope: scope_14,
              resourceMetadataUrl: resourceMetadataUrl_10,
              errorDescription: errorDescription_3,
              statusText: response_3.statusText,
              text: text_2
            }, s)) !== "AUTHORIZED") throw new z0();
            return this._send(e, t, r, s + 1);
          }
        }
        if (response_3.status === 400 && typeof text_2 === "string" && this._isModernEnvelopedRequest(e)) try {
          let h = $t(JSON.parse(text_2)),
            S = (Array.isArray(e) ? e : [e]).filter(item => nre(item));
          if (TIe(h) && S.some(item => item.id === h.id)) {
            this.onmessage?.(h);
            return;
          }
        } catch {}
        throw new nA(xi.ClientHttpNotImplemented, `Error POSTing to endpoint: ${text_2}`, {
          status: response_3.status,
          statusText: response_3.statusText,
          text: text_2
        });
      }
      if (response_3.status === 202) {
        if (await response_3.text?.().catch(() => {}), z8r(e)) this._startOrAuthSse({
          resumptionToken: void 0
        }).catch(p => this.onerror?.(p));
        return;
      }
      let k = (Array.isArray(e) ? e : [e]).some(item => "method" in item && "id" in item && item.id !== void 0),
        contentType = response_3.headers.get("content-type"),
        v = Oi(contentType);
      if (k) {
        if (v === "text/event-stream") this._handleSseStream(response_3.body, {
          onresumptiontoken: onresumptiontoken_3,
          requestSignal: t?.requestSignal,
          onRequestStreamEnd: t?.onRequestStreamEnd
        }, !1);else if (v === "application/json") {
          let p = await response_3.json(),
            h = Array.isArray(p) ? p.map(item => $t(item)) : [$t(p)];
          for (let S of h) this.onmessage?.(S);
        } else throw await response_3.text?.().catch(() => {}), new Vi(xi.ClientHttpUnexpectedContent, `Unexpected content type: ${contentType}`, {
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
      if (await r.text?.().catch(() => {}), !r.ok && r.status !== 405) throw new nA(xi.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, {
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
export { VRt, zkn, h1e, vIe, dsr, Gkn, result as W0, Jat, KRt, capabilities_2 as dYt, qRt, g1e, cYt, Vkn, Qat, Kkn, qkn, Ykn, Zat, elt, Xkn, uYt, params_14 as Jkn, OAuthMetadataSchema as YRt, OpenIdProviderDiscoveryMetadataSchema as fYt, OAuthTokensSchema as pYt, OAuthErrorResponseSchema as mYt, fge, F8, xi, Vi, nA, Wa, Dc, nre, W8r, EIe, TIe, csr, z8r, X8o, G8r, J8o, hYt, Qkn, XRt, V8r, z0, gYt, S3e, K8r, yYt, q8r, Q8o, Kui, Z8o, e9o, Y8r, usr, Zkn };