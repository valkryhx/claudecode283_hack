// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  X5,
  F,
  j,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  k,
  ez
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  zg
} from "B:/~BUN/root/chunk-7ybsx93y.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  g1s,
  Ggt,
  KHt,
  kDr,
  y1s,
  _1s,
  uA,
  ba,
  FWs,
  KWs,
  YWs,
  Iht,
  fzs,
  mMe,
  $6n,
  Mht,
  Gt,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  Bs
} from "B:/~BUN/root/chunk-yw21pggd.js";
import {
  pt
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  nBt
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  is,
  QT
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Ua
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  e0,
  ibt,
  Ff
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  zge
} from "B:/~BUN/root/chunk-245a2x6v.js";
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  rcs
} from "B:/~BUN/root/chunk-0620nbja.js";
import {
  JDt,
  Mrn,
  r0s
} from "B:/~BUN/root/chunk-ks7h6f0s.js";
import {
  fr,
  Nx,
  _W
} from "B:/~BUN/root/chunk-c6mbjdcy.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  o,
  v,
  oe,
  T,
  u,
  _t,
  fe,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var se = "anthropic.com/artifact-route",
  nt = 300000,
  rt = 5000,
  Te = 1000,
  Re = 5000,
  ot = 1048576,
  at = ["X-Frame-Surface", "X-Frame-Platform", "X-Frame-Client-Version", "X-Frame-Session-Id"];

function Ee(e) {
  let {
    recoverOAuth401: n,
    headers: r,
    ...i
  } = e;
  return {
    ...i,
    headers: {
      ...QT(r, at),
      Accept: "application/json, text/event-stream",
      "Content-Type": "application/json"
    }
  }
}
var st = {
    pin_artifact: "artifact_mcp_wire_pin",
    unpin_artifact: "artifact_mcp_wire_pin",
    publish_version: "artifact_mcp_wire_publish",
    list_artifacts: "artifact_mcp_wire_listing",
    list_types: "artifact_mcp_wire_listing"
  },
  be = /^\/api\/frame\/favorite\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})$/,
  he = ([, e]) => ({
    arguments: {
      slug: e
    },
    mark: {}
  }),
  we = 1048576,
  it = new Map([
    ["slug", "slug"],
    ["baseVersion", "base_version"],
    ["title", "title"],
    ["favicon", "favicon"],
    ["icon", "icon"],
    ["label", "label"],
    ["contract", "contract"],
    ["deadline", "deadline"],
    ["content", "content"]
  ]),
  Ae = ["manifest", "mode"],
  ut = new Set(["expectUnpublished", "description", "note", "entrypoint", "session_id", "request_id", "publish_context", "template", "origin_metadata", ...Ae]),
  lt = new Map([
    ["force", "force"],
    ["capabilities", "capabilities"],
    ["thumbnail", "thumbnail"],
    ["thumbnail_dark", "thumbnail"],
    ["auto_edit_attribution", "attribution"]
  ]),
  dt = ([, e], n) => {
    if (!N(n)) return "body";
    if (X5(N(n.manifest) ? Object.values(n.manifest) : [n], (S) => N(S) && typeof S.content === "string" ? S.content.length : 0) > we) return "size";
    let i = {},
      l = {
        description: ""
      };
    for (let [S, R] of Object.entries(n)) {
      let h = it.get(S);
      if (R === void 0) continue;
      if (h !== void 0) i[h] = R;
      else if (ut.has(S)) l[S] = R;
      else return lt.get(S) ?? "key"
    }
    for (let [S, R] of new URLSearchParams(e ?? ""))
      if (S === "attempt_id") l.attempt_id = R;
      else if (S === "resend" && R === "1") l.resend = !0;
    else return "query";
    let y = typeof i.slug === "string" ? ee().shareStatus.bySlug.get(i.slug) : void 0,
      d = y?.probeFailed ? void 0 : y?.mode;
    if (d === "users" || d === "org") i.shared_live = d;
    if (!Ae.some((S) => (S in l))) return {
      arguments: i,
      mark: l
    };
    return "content" in i ? "page_and_manifest" : {
      arguments: i,
      mark: l,
      needs: "manifest"
    }
  };

function me(e, n, r) {
  for (let [i, l] of new URLSearchParams(e ?? "")) {
    let [y, d] = Object.hasOwn(n, i) ? n[i] : [];
    if (y === void 0 || d === void 0 || Object.hasOwn(r[y], d)) return "query";
    if (d === "limit" && !/^\d{1,9}$/.test(l)) return "query";
    r[y][d] = d === "limit" ? Number(l) : l
  }
  return r
}

function ct(e, n) {
  let r = N(e) ? e.result : void 0,
    i = N(r) ? r.structuredContent : void 0;
  return N(i) && Object.hasOwn(i, n) ? i : void 0
}
var ft = [{
    method: "POST",
    route: be,
    tool: "pin_artifact",
    call: he
  }, {
    method: "DELETE",
    route: be,
    tool: "unpin_artifact",
    call: he
  }, {
    method: "POST",
    route: /^\/api\/frame\/deploy\/direct(?:\?(.*))?$/,
    tool: "publish_version",
    call: dt,
    textIsBody: !0,
    narrower: (e, n) => e === 404 || e === 403 && n === "not_owner" || e === 422 && n === "audience_conflict" || e === 400 && n === void 0
  }, {
    method: "GET",
    route: /^\/api\/frame\/frames\?(.*)$/,
    tool: "list_artifacts",
    call: ([, e]) => me(e, {
      limit: ["arguments", "limit"]
    }, {
      arguments: {},
      mark: {}
    }),
    reads: "frames"
  }, {
    method: "GET",
    route: /^\/api\/frame\/types(?:\?(.*))?$/,
    tool: "list_types",
    call: ([, e]) => me(e, {
      q: ["arguments", "query"],
      scopes: ["mark", "scopes"]
    }, {
      arguments: {},
      mark: {}
    }),
    reads: "types"
  }, {
    method: "GET",
    route: /^\/api\/frame\/types\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})\/instances\?(.*)$/,
    tool: "list_artifacts",
    call: ([, e, n]) => me(n, {
      limit: ["arguments", "limit"],
      rel: ["mark", "rel"]
    }, {
      arguments: {
        type: e
      },
      mark: {},
      needs: "type"
    }),
    reads: "instances"
  }],
  mt = f(() => u({
    [se]: u({
      status: v().int().min(200).max(599),
      headers: fe(o(), o()).optional().catch(void 0)
    })
  })),
  yt = f(() => u({
    error: u({
      code: v()
    }).optional(),
    result: u({
      _meta: mt(),
      content: T(u({
        text: o().optional()
      })).optional(),
      structuredContent: u({
        error: u({
          message: o().optional(),
          details: oe().optional()
        })
      }).optional().catch(void 0)
    }).optional()
  })),
  gt = f(() => u({
    result: u({
      tools: T(u({
        name: o(),
        _meta: u({
          [se]: _t({
            v: C(1)
          })
        }).optional().catch(void 0)
      }))
    })
  }));
class uit extends Error {
  status;
  constructor(e) {
    super("the MCP answer does not say whether the publish ran");
    this.status = e;
    this.name = "McpDoubtfulAnswerError"
  }
}
var Rt = new Set([-32700, -32600, -32601, -32602]);

function Oe(e, n) {
  if (a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let r = ft.find((i) => i.method === e && i.route.test(n));
  if (r === void 0) return null;
  return E(FWs, !1) === !0 ? r : null
}

function ue(e, n) {
  return n.mcpAdvert = {
    tools: e,
    until: Date.now() + nt
  }, e
}
var Z = new Set,
  Fe = new Set;
async function bt(e, n, r) {
  let i = n.mcpAdvert;
  if (i !== void 0 && i.until > Date.now()) return i.tools;
  let l = n.mcpAdvertAsked;
  if (l === void 0) {
    let y = ht(is(e, "signal"), n).catch(() => Z).finally(() => {
      n.mcpAdvertAsked = void 0
    });
    l = {
      answer: y,
      soon: je(y, Te)
    }, n.mcpAdvertAsked = l
  }
  if (!r || i?.tools.size === 0) return i?.tools ?? Z;
  return await l.soon ?? Fe
}
async function ht(e, n) {
  let r = n.mcpAdvert,
    i = Date.now(),
    l;
  try {
    l = await Gt.post(nBt, {
      jsonrpc: "2.0",
      id: 1,
      method: "tools/list"
    }, {
      ...is(Ee(e), "streamUpload"),
      timeout: rt,
      maxContentLength: ot
    })
  } catch {
    return p("artifact_mcp_wire_tools_list", "advert_request_error"), ue(Z, n)
  }
  if (!l.ok) return p("artifact_mcp_wire_tools_list", "advert_refused_locally"), Z;
  let y = l.status === 200 ? gt().safeParse(l.data).data : void 0;
  if (y === void 0) p("artifact_mcp_wire_tools_list", l.status === 200 ? "advert_unreadable" : "advert_not_served", {
    status: l.status
  });
  else if (Date.now() - i > Te) p("artifact_mcp_wire_tools_list", "advert_slow");
  else g("artifact_mcp_wire_tools_list");
  if (n.mcpAdvert !== r) return n.mcpAdvert?.tools ?? Z;
  return ue(new Set(y?.result.tools.flatMap(({
    name: d,
    _meta: S
  }) => S === void 0 || d.includes("#") ? [] : [d, ...Object.entries(S[se]).filter(([, R]) => R === !0).map(([R]) => `${d}#${R}`)])), n)
}

function Se(e) {
  let n = pt(e, !1);
  return N(n) ? n : void 0
}

function St(e) {
  return N(e) && typeof e.reason === "string" ? e.reason : void 0
}
async function Pe(e, n, r, i, l) {
  let y = st[e.tool],
    d = (s) => (p(y, s, {
      tool: c(e.tool)
    }), null),
    S = (s) => d(`cannot_carry_${s}`),
    R = () => {
      let s = e.route.exec(n);
      return s ? e.call(s, r) : "query"
    },
    h = R();
  if (typeof h === "string") return S(h);
  let {
    slug: O
  } = h.arguments, D = typeof O === "string" ? O : "", G = ee().frameRelay, {
    mcpNarrower: W
  } = G, B = e.reads !== void 0;
  if (!B && W.has(D)) return d("narrower_remembered");
  let P = await bt(i, G, !B),
    L = R();
  if (typeof L === "string") return S(L);
  if (!P.has(e.tool) || L.needs !== void 0 && !P.has(`${e.tool}#${L.needs}`)) return d(P === Fe ? "offer_late" : "no_offer");
  if (!B && W.has(D)) return d("narrower_remembered");
  let U = {
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: {
        name: e.tool,
        arguments: L.arguments,
        _meta: {
          [se]: L.mark
        }
      }
    },
    V = Buffer.byteLength(_(U));
  if (V > we) return S("size");
  let ne = {
      tool: c(e.tool),
      ...L.needs === "manifest" && {
        manifest: !0
      },
      ...L.needs === "type" && {
        by_type: !0
      }
    },
    X = (s, A) => (ue(Z, G), p(y, s, {
      ...ne,
      status: A
    }), null),
    re = (s, A) => {
      ue(Z, G), m(y, s, {
        ...ne,
        status: A
      })
    },
    w;
  try {
    l?.({
      json_bytes: V,
      wire_bytes: V,
      body_gzip: !1
    }), w = await Gt.post(nBt, U, {
      ...Ee(i),
      ...B && {
        timeout: Math.min(i.timeout ?? Re, Re)
      }
    })
  } catch (s) {
    if (Ua(s)) throw s;
    if (B) return X("request_error", 0);
    throw re("request_error", 0), s
  }
  if (!w.ok) return d("refused_locally");
  let ae = (s, A, J) => ({
    ...w,
    status: s,
    data: A,
    response: {
      ...w.response,
      status: s,
      data: A,
      headers: {
        ...QT(w.response.headers, "date"),
        ...J
      }
    }
  });
  if (w.status >= 300 && w.status < 500 && w.status !== 408 && w.status !== 499) return X("refused", w.status);
  if (B && w.status >= 300) return X("http_failed", w.status);
  let pe = e.textIsBody && D !== "" && L.mark.attempt_id !== void 0,
    Q = (s) => {
      if (pe) throw new uit(s);
      return {
        ...ae(200, void 0),
        mcpDoubt: s
      }
    };
  if (w.status >= 300) {
    if (re("http_failed", w.status), !e.textIsBody) return {
      ...w,
      data: w.data,
      response: w.response
    };
    return w.status === 503 && pe ? ae(503, void 0, QT(w.response.headers, "retry-after")) : Q(w.status)
  }
  let Y = w.status === 200 ? yt().safeParse(w.data).data : void 0;
  if (Y?.error !== void 0 && Rt.has(Y.error.code)) return X("not_dispatched", 0);
  if (Y?.result === void 0) {
    let s = Y?.error === void 0 ? "unreadable" : "rpc_error";
    if (B) return X(s, w.status);
    return re(s, w.status), e.textIsBody ? Q(w.status) : ae(502, void 0)
  }
  let {
    status: M,
    headers: x
  } = Y.result._meta[se], q = Y.result.structuredContent?.error, K = e.reads !== void 0 && M < 300 ? ct(w.data, e.reads) : q === void 0 && e.textIsBody ? Se(Y.result.content?.[0]?.text) : Se(q?.message) ?? (N(q?.details) ? q.details : void 0) ?? (q?.message || void 0);
  if (B && K === void 0) return X("unreadable", M);
  if (e.narrower?.(M, St(K))) return W.add(D), p(y, `narrower_${M}`, {
    ...ne,
    status: M,
    ...L.arguments.shared_live !== void 0 && {
      shared_live_sent: !0
    }
  }), null;
  if (e.textIsBody && K === void 0 && (M < 300 || M === 409 || M >= 500)) return re("unreadable", M), Q(M);
  return g(y, {
    ...ne,
    status: M
  }), ae(M, K, x)
}
var Tt = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
  Et = /^(?:0x[0-9a-f]*|[0-9]+)$/;

function wt(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let i = r.trim().toLowerCase();
    if (i === "") continue;
    let l = i.split(".");
    if (i.length > 253 || !l.every((y) => Tt.test(y)) || l.every((y) => Et.test(y))) return;
    n ??= i
  }
  return n
}

function ke(e) {
  if (e0(e) !== void 0) return !0;
  return ez(e, (n) => {
    let r = k(n);
    return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== void 0 && zge.has(r)
  }) !== void 0
}
class xe {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new ibt(e.proxyUrl, {
        ca: e.gatewayCa
      });
      n.options = {
        ...n.options,
        ca: e.gatewayCa
      }, this.builtFor = e, this.agent = n
    }
    return this.agent
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    this.warnedMalformed = e, t("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", {
      level: "warn"
    })
  }
}
var At = new z(() => new xe);

function ve() {
  if (!fr()) return;
  let e = a.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (e === void 0) return;
  let n = At.of(j().host),
    r = wt(e);
  if (r === void 0) {
    n.warnMalformedOnce(e);
    return
  }
  let i = rcs();
  if (i === void 0 || Ff() !== void 0) return;
  return {
    host: r,
    agent: n.agentFor(i)
  }
}
var le = 60,
  Ot = 180,
  Ft = 32768,
  Pt = 1048576,
  Me = 262144,
  kt = 1.25,
  Ce = {
    "Content-Encoding": "gzip",
    "Content-Type": "application/json"
  };

function kfr(e) {
  if (e === void 0 || e <= 0) return le;
  return Math.min(Ot, le + Math.floor(e / Ft))
}

function xt(e, n) {
  return n * kfr(e) <= e * le
}
async function vt({
  url: e,
  body: n,
  storageV5: r
}) {
  let i = _(n),
    l = i.length,
    y = JDt(e, i, r, "frame_publish");
  if (y === void 0) return {
    gzipped: null,
    encoding: void 0,
    jsonChars: l
  };
  let d = Buffer.byteLength(i),
    S = (O) => ({
      gzipped: null,
      jsonChars: l,
      encoding: {
        json_bytes: d,
        wire_bytes: d,
        body_gzip: !1,
        gzip_skip: O
      }
    });
  if (!y.gzip) return S(y.reason);
  let R = kfr(d) / le;
  if (d >= Pt) {
    let O = i.slice(0, Me),
      D = Buffer.byteLength(O) / (await KWs(O)).length;
    if (D * kt < R) return t(`[artifact] publish body sent uncompressed: its first ${Me} characters compress only ${D.toFixed(2)}x, and a body of ${d} bytes needs ${R.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`), S("deadline_ratio")
  }
  let h = await YWs(i);
  if (!xt(d, h.length)) return t(`[artifact] publish body sent uncompressed: gzip only got ${d} bytes down to ${h.length}, too little to finish inside the server's 60-second read limit for a compressed upload`), S("deadline_ratio");
  return {
    gzipped: h,
    jsonChars: l,
    encoding: {
      json_bytes: d,
      wire_bytes: h.length,
      body_gzip: !0
    }
  }
}

function Mt(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null
}

function Ct(e) {
  if (!e.ok) return {
    status: 0,
    header: () => {
      return
    },
    bodyText: async () => ""
  };
  return {
    status: e.status,
    header: (n) => {
      let r = e.response?.headers?.[n];
      return typeof r === "string" ? r : void 0
    },
    bodyText: async () => typeof e.data === "string" ? e.data : e.data === void 0 ? "" : _(e.data)
  }
}
async function De({
  url: e,
  body: n,
  storageV5: r,
  signal: i,
  send: l,
  onEncoding: y
}) {
  if (!Mt(n)) return l(null);
  let {
    gzipped: d,
    encoding: S,
    jsonChars: R
  } = await vt({
    url: e,
    body: n,
    storageV5: r
  });
  if (S !== void 0) y?.(S);
  if (d === null || S === void 0) return l(null);
  Mrn("frame_publish");
  let h = await l(d);
  return r0s({
    answer: h,
    facts: Ct,
    resendIdentity: () => (y?.({
      json_bytes: S.json_bytes,
      wire_bytes: S.json_bytes,
      body_gzip: !1,
      gzip_fallback_status: h.ok ? h.status : 0
    }), l(null)),
    aborted: () => i?.aborted === !0,
    bodyChars: R,
    storageV5: r,
    rollout: "frame_publish"
  })
}

function $4e(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served")
}
var Lt = "x-ccr-relay-upstream",
  Bt = "x-ccr-sandbox-egress",
  zt = new Set(["disabled", "restricted", "unrestricted"]);

function ecs(e) {
  if (!e.ok || e.route !== "relay" || !qY(e)) return;
  let n = e.response.headers?.[Bt];
  return typeof n === "string" && zt.has(n) ? n : void 0
}
var Dz = "forbidden: CCR agent tokens";

function z8(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found"
}

function tcs(e) {
  return typeof e === "string" && e.trim() === "no version"
}
var It = new Set([401, 403, 404, 413]),
  Nt = new Set(["organization network policy denies artifact storage reads for this session", "organization network policy could not be determined for this session; artifact storage reads denied"]);
var Ut = new Set(["organization network policy denies artifact storage writes for this session", "organization network policy could not be determined for this session; artifact storage writes denied"]);

function Le(e) {
  if (!e.ok || qY(e) || e.status !== 403 || typeof e.data !== "string") return !1;
  let n = e.data.trim();
  return Nt.has(n) || qF() && Ut.has(n)
}
var jt = "relay approval required: this change was not approved by the person for this session";

function Be(e) {
  return e.ok && !qY(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === jt
}
var Yt = new Set(["organization network policy denies artifact reads for this session", "organization network policy could not be determined for this session"]),
  pit = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";

function fit(e, n) {
  return e === 403 && n !== void 0 && n.byteLength <= 256 && Yt.has(Buffer.from(n).toString("utf8").trim())
}
var ce = 300000,
  Wt = 15000,
  Ht = 65536,
  Ue = new WeakSet,
  Ge = new WeakMap,
  $t = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;

function Vt(e) {
  if (!e) return e;
  return Bs(e, (n, r) => $t.test(r))
}
var Efr = b("boot"),
  Lz = b("blobs"),
  o8t = b("comments"),
  hMn = b("subscriptions"),
  Ye = b("types"),
  We = b("type_files"),
  yMn = b("type_create"),
  He = b("db"),
  bso = b("sharing"),
  $e = b("publish"),
  Ve = b("frames_external"),
  qt = new Set([o8t, hMn, Efr, Ve, Ye, We, yMn, He, $e, Lz, ...[]]),
  Xt = "tengu_cobalt_plinth_burnet",
  Kt = [...I(Efr, ["GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track"]), ...I(Ve, ["GET /frames/external"]), ...I($e, ["POST /deploy/direct", "POST /deploy/prepare", "POST /upload", "GET /contract/latest", "GET /contract/{v}", "GET /contract/{v}/{file}", "GET /contract/{v}/prompt", "GET /read/{slug}"]), ...I(o8t, ["GET /comments/{slug}", "POST /comments/{slug}/{thread}", "POST /comments/{slug}/{thread}/resolve", "POST /comments/{slug}/{thread}/summon-status"]), ...I(He, ["POST /db/agent"]), ...I(Ye, ["GET /types", "GET /types/{slug}"]), ...I(yMn, ["POST /types/{slug}/create"]), ...I(b("type_instances"), ["GET /types/{slug}/instances"]), ...I(We, ["GET /types/{slug}/files/{a}", "GET /types/{slug}/files/{a}/{b}", "GET /types/{slug}/files/{a}/{b}/{c}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"]), ...I(hMn, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]), ...I(b("delete"), ["DELETE /{slug}"]), ...I(bso, ["GET /perm/{slug}", "PATCH /perm/{slug}"]), ...I(b("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]), ...[]].sort((e, n) => ze(e) - ze(n));

function I(e, n) {
  return n.map((r) => {
    let [i, l] = r.split(" ");
    return {
      method: i,
      pattern: l.split("/"),
      family: e
    }
  })
}

function ze(e) {
  return F(e.pattern, (n) => n.startsWith("{"))
}

function iAt(e, n) {
  let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
  return Kt.find((l) => l.method === e && l.pattern.length === r.length && l.pattern.every((y, d) => y.startsWith("{") ? r[d] !== "" : y === r[d]))?.family ?? null
}
var Sso = "tengu_cobalt_plinth_madder";

function J7() {
  if (!_W()) return !1;
  if (Iht() !== void 0) return !1;
  if (!E("tengu_cobalt_plinth_sorrel", !0)) return !1;
  if (!fr() && !E(Sso, !0)) return !1;
  return g1s()
}

function qF() {
  return de()
}

function KI(e = null) {
  return J7() && !qe(e)
}

function qe(e) {
  if (!Ggt() && !Xe()) return !1;
  if (e !== null && lAt(e)) return !1;
  let n = ee().frameRelay;
  if (!n.botContextNoted) n.botContextNoted = !0, p("artifact_frame_relay", "bot_context_not_served", {
    hosted: fr()
  });
  return !0
}

function Q7() {
  return fr() && J7()
}
var Jt = "tengu_cobalt_plinth_medlar";

function Xe() {
  return Nx() && E(Jt, !1) && kDr()
}

function aAt() {
  if (fr()) return Ggt() && KHt();
  return Xe()
}

function U4e() {
  return _W() && E("tengu_cobalt_plinth_fennel", !1) && aAt()
}
var Zt = "tengu_cobalt_plinth_comfrey";

function _Mn() {
  return Nx() && E(Zt, !1) && U4e()
}

function lAt(e) {
  return qt.has(e) && fr() && E(Xt, !1) && y1s()
}

function eU(e) {
  return (ee().frameRelay.declinedUntil.get(e) ?? 0) > Date.now()
}

function Z7(e, n = !1) {
  let r = ee().frameRelay,
    i = Date.now() + ce;
  if (r.declinedUntil.set(e, i), n) r.hopFailedUntil.set(e, i);
  else r.hopFailedUntil.delete(e)
}

function wso(e) {
  return (ee().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now()
}

function Tfr(e) {
  return (ee().frameRelay.servedUntil.get(e) ?? 0) > Date.now()
}

function Qoe(e) {
  let n = ee().frameRelay;
  n.declinedUntil.delete(e), n.servedUntil.set(e, Date.now() + ce), n.vouched.add(e)
}

function B4e(e) {
  return ee().frameRelay.vouched.has(e)
}

function vso(e) {
  ee().frameRelay.vouched.delete(e)
}

function Qt(e) {
  return (ee().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now()
}

function bMn(e) {
  return e.ok && e.status === 403 && kso(e.data)
}

function kso(e) {
  return typeof e === "string" && e.trimStart().startsWith(Dz)
}

function Ie(e, n) {
  if (!n.ok) return;
  let {
    directRefusedUntil: r
  } = ee().frameRelay;
  if (bMn(n)) r.set(e, Date.now() + ce);
  else r.delete(e)
}

function mit(e) {
  if (Q7() || !(e === 401 || e === 403 || e === 404)) return !1;
  if (B4e(uA)) {
    if (e !== 404) vso(uA);
    return !1
  }
  return Z7(uA), !0
}

function AAe(e) {
  if (Q7() || B4e(uA)) return;
  if (e === void 0 || e === 499) Z7(uA, !0)
}
var Ke = () => !0;

function ye(e, n, r) {
  ee().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + ce), p("artifact_frame_relay", "tunnel_declined", {
    family: e,
    cause: c(n),
    status: r
  })
}
var Je = new WeakSet;

function Ne(e) {
  return typeof e === "object" && e !== null && Je.has(e)
}
async function Cfr(e, n, r, i, l) {
  let d = (ee().frameRelay.tunnelDeclinedUntil.get(l) ?? 0) > Date.now() ? void 0 : ve();
  if (d !== void 0) {
    let R = 0;
    try {
      let h = await ie(e, n, r, {
        ...i,
        host: "frame",
        auth: "session-jwt",
        frameTunnel: d,
        maxRedirects: 0
      });
      if (!h.ok || qY(h)) return {
        res: h,
        tunnelled: !0
      };
      if (R = h.status, R >= 500 || R === 499) return ye(l, "hop_failed", R), {
        res: h,
        tunnelled: !0
      }
    } catch (h) {
      if (Ua(h)) throw h;
      if (!ke(h)) {
        if (ye(l, "threw", 0), typeof h === "object" && h !== null) Je.add(h);
        throw h
      }
    }
    ye(l, R === 0 ? "never_opened" : "refused", R)
  }
  return {
    res: await ie(e, _1s(n), r, {
      ...i,
      host: "ccr-gateway",
      auth: "session-jwt",
      maxRedirects: 0
    }),
    tunnelled: !1
  }
}

function ie(e, n, r, i) {
  switch (e) {
    case "GET":
      return Gt.get(n, i);
    case "POST":
      return Gt.post(n, r, i);
    case "PATCH":
      return Gt.patch(n, r, i);
    case "DELETE":
      return Gt.delete(n, r, i)
  }
}
async function en(e, n) {
  let r = "answered";
  try {
    let i = await e();
    if (i !== null) return {
      ...i,
      mcpWire: r
    };
    return r = "stood_aside", {
      ...await n(),
      mcpWire: r
    }
  } catch (i) {
    if (typeof i === "object" && i !== null) Ge.set(i, r);
    throw i
  }
}

function Ze(e, n, r, i, l = !0) {
  if (qF()) throw Error("frameApi: this session may not make the direct call");
  let {
    recoverOAuth401: y,
    gzipBody: d,
    httpOnly: S,
    ...R
  } = i, h = {
    ...R,
    host: "frame",
    auth: "claude-ai-oauth",
    maxRedirects: 0,
    validateStatus: Ke,
    ...y && !a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_REMOTE_SESSION_ID && {
      recoverOAuth401: y
    }
  }, O = l && !S ? Oe(e, n) : null;
  if (O) return en(() => Pe(O, n, r, h, d?.onEncoding), () => Ze(e, n, r, i, !1));
  let {
    streamUpload: D
  } = R;
  if (e !== "POST" || d === void 0 || D === void 0) return ie(e, n, r, h);
  return De({
    url: `${fzs()}${n}`,
    body: r,
    storageV5: R.storageV5,
    signal: R.signal,
    onEncoding: d.onEncoding,
    send: (G) => G === null ? ie(e, n, r, h) : ie(e, n, G, {
      ...h,
      headers: {
        ...h.headers,
        ...Ce
      },
      streamUpload: {
        ...D,
        tailFloorMs: () => d.tailFloorMs
      }
    })
  })
}

function tn() {
  return Iht() !== void 0 ? a.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0
}

function Rfr() {
  let e = tn();
  if (e) return mMe(`Bearer ${e}`);
  return $6n()
}
async function ncs(e) {
  if (!Mht()) return;
  try {
    await ba({
      credentials: e
    })
  } catch {}
}

function qY(e) {
  return e.ok && e.response.headers?.[Lt] !== void 0
}

function ge(e) {
  return e.ok && !qY(e) && It.has(e.status)
}

function Eso(e) {
  return {
    refused: ge(e),
    vouched: qY(e) || e.ok && e.status < 300
  }
}

function s8t() {
  return J7() && !fr()
}

function Qe(e, n, r, i = !1) {
  let l = r !== "fallback",
    y = r === "strict" && _W(),
    d = qF(),
    S = J7(),
    R = S ? iAt(e, n) : null;
  if (S && qe(R)) return d || y || r === "only" && fr() ? {
    leg: "not-served",
    relaying: !1,
    family: null
  } : {
    leg: "direct",
    relaying: !1,
    family: null
  };
  let h = S;
  if (R === null) return {
    leg: d || y || l && fr() && h ? "unsent" : "direct",
    relaying: h,
    family: R
  };
  let O = (r === "fallback" || r === "bound" && !et(R)) && !(i && fr() && Qt(R));
  if (!d && eU(R) && (O || !fr() && !y && wso(R))) return {
    leg: "direct",
    relaying: h,
    family: R
  };
  return {
    leg: "relay",
    relaying: !0,
    family: R
  }
}

function et(e) {
  return qF() || fr() && (e === null || !lAt(e))
}

function nn(e, n) {
  switch (e) {
    case "strict":
      return _W();
    case "only":
      return fr();
    case "bound":
      return et(n);
    case "fallback":
      return !1
  }
}

function SMn(e, n, r = "fallback") {
  return qF() || Qe(e, n, r).leg === "relay" ? "relay" : "direct"
}
async function H(e, n, r, i, l = "fallback") {
  let y = qF() || nn(l, iAt(e, n)),
    {
      relayProbe: d,
      relayOnCredentialRefusal: S,
      ...R
    } = i,
    h = async () => ({
      ...await Ze(e, n, r, R),
      route: "direct",
      fromFrame: !0
    }), O = Qe(e, n, l, S), D = O.relaying && !fr(), G = (s, A) => l === "fallback" ? {
      ok: !1,
      reason: "no-auth",
      detail: `its artifact connection did not carry the request${A?` (HTTP ${A})`:""}, so nothing was sent${s==="relay-unavailable"?"; one retry is safe":""}`,
      route: "relay",
      fromFrame: !1
    } : {
      ok: !1,
      reason: s,
      status: A,
      route: "relay",
      fromFrame: !1
    }, W = (s, A) => (p("artifact_frame_relay", "relay_only_unavailable", {
      ...O.family !== null && {
        family: O.family
      },
      status: s,
      probed: A,
      ...D && {
        runner: !0
      }
    }), G("relay-unavailable", s));
  if (O.leg === "not-served") return G("relay-not-served", 0);
  if (O.leg === "unsent") return W(0, !1);
  let B, P;
  if (O.leg === "relay") P = O.family;
  else {
    let s = await h();
    if (O.family === null || !fr()) return s;
    if (Ie(O.family, s), !s.ok || !bMn(s)) return s;
    if (p("artifact_frame_relay", "direct_refused", {
        family: O.family,
        status: s.status,
        reoffered: S === !0
      }), !S) return s;
    P = O.family, B = s
  }
  let L = !1,
    U = () => ({
      ...D && {
        runner: !0
      },
      ...L && {
        tunnel: !0
      },
      ...B !== void 0 && {
        reoffered: !0
      }
    }),
    V = async () => {
      if (B !== void 0) return B;
      let s = await h();
      if (!D) {
        if (Ie(P, s), s.ok && bMn(s)) p("artifact_frame_relay", "direct_refused", {
          family: P,
          status: s.status,
          reoffered: !1
        })
      }
      return s
    }, {
      refreshOAuth: ne,
      isBackground: X,
      credentials: re,
      recoverOAuth401: w,
      gzipBody: ae,
      httpOnly: pe,
      ...Q
    } = R, Y = async (s, A, J, te) => {
      let _e = await Cfr(s, A, J, {
        ...te,
        headers: Vt(te.headers),
        validateStatus: Ke
      }, P);
      return L = _e.tunnelled, _e.res
    }, M = async (s, A) => {
      if (Z7(P, s === 0 || s >= 500), y) return W(s, A);
      let J;
      try {
        let te = await V();
        return J = te.ok ? te.status : void 0, {
          ...te,
          gatewayDeclined: s
        }
      } finally {
        p("artifact_frame_relay", "relay_unavailable", {
          family: P,
          status: s,
          probed: A,
          ...J !== void 0 && {
            direct_status: J
          },
          ...U()
        })
      }
    };
  if (d !== void 0 && !Tfr(P)) {
    let s;
    try {
      s = await Y("GET", d, void 0, {
        signal: Q.signal,
        timeout: Wt,
        maxContentLength: Ht
      })
    } catch (A) {
      if (Ua(A)) throw A;
      return L = Ne(A), M(0, !0)
    }
    if (!s.ok) return y ? W(0, !0) : V();
    if (Le(s)) p("artifact_frame_relay", "relay_policy_refused", {
      family: P,
      status: s.status,
      probed: !0,
      ...U()
    });
    else if (ge(s) || !qY(s) && (s.status >= 500 || s.status === 499)) return M(s.status, !0);
    else if (!qY(s) && s.status >= 300) return y ? W(s.status, !0) : V();
    Qoe(P)
  }
  let x;
  try {
    x = await Y(e, n, r, Q)
  } catch (s) {
    if (!Ua(s)) {
      if (L = Ne(s), e0(s) !== void 0) return M(0, !1);
      if (Z7(P, !0), m("artifact_frame_relay", "request_error", {
          family: P,
          ...U()
        }), typeof s === "object" && s !== null) Ue.add(s)
    }
    throw s
  }
  if (!x.ok) return y ? W(0, !1) : V();
  if (Le(x) || Be(x)) {
    let s = Be(x);
    return Qoe(P), p("artifact_frame_relay", s ? "relay_approval_refused" : "relay_policy_refused", {
      family: P,
      status: x.status,
      ...U()
    }), {
      ...x,
      route: "relay",
      fromFrame: !1,
      gatewayPolicy: s ? "unapproved" : "network-off"
    }
  }
  if (ge(x)) return M(x.status, !1);
  let q = qY(x),
    K = q || x.status < 300;
  if (K) Qoe(P), g("artifact_frame_relay", {
    family: P,
    status: x.status,
    upstream: q,
    ...U()
  });
  else if (x.status >= 500 || x.status === 499) {
    let s = l !== "fallback" && x.status === 503 ? x.response.headers?.["retry-after"] : void 0,
      A = zg(typeof s === "string" ? s : void 0);
    if (A !== void 0) return p("artifact_frame_relay", "relay_busy", {
      family: P,
      status: x.status,
      retry_after_ms: A,
      ...U()
    }), {
      ...x,
      route: "relay",
      fromFrame: !1,
      gatewayRetryAfterMs: A
    };
    Z7(P, !0), m("artifact_frame_relay", "relay_error", {
      family: P,
      status: x.status,
      ...U()
    })
  } else p("artifact_frame_relay", "relay_refused", {
    family: P,
    status: x.status,
    ...U()
  });
  return {
    ...x,
    route: "relay",
    fromFrame: K
  }
}

function OR(e) {
  return typeof e === "object" && e !== null && Ue.has(e)
}

function tt(e) {
  switch (e) {
    case "answered":
      return b("mcp");
    case "stood_aside":
      return b("http_fallback");
    case void 0:
      return b("http")
  }
}

function Zoe(e) {
  return e.route === "relay" ? b("relay") : tt(e.mcpWire)
}

function wue(e) {
  if (OR(e)) return b("relay");
  return tt(typeof e === "object" && e !== null ? Ge.get(e) : void 0)
}
var Oc = {
  get(e, n) {
    return H("GET", e, void 0, n)
  },
  post(e, n, r) {
    return H("POST", e, n, r)
  },
  postRelayOnly(e, n, r) {
    return H("POST", e, n, r, "only")
  },
  postRelayStrict(e, n, r) {
    return H("POST", e, n, r, "strict")
  },
  getRelayOnly(e, n) {
    return H("GET", e, void 0, n, "only")
  },
  postRelayBound(e, n, r) {
    return H("POST", e, n, r, "bound")
  },
  getRelayBound(e, n) {
    return H("GET", e, void 0, n, "bound")
  },
  patchRelayOnly(e, n, r) {
    return H("PATCH", e, n, r, "only")
  },
  deleteRelayOnly(e, n) {
    return H("DELETE", e, void 0, n, "only")
  }
};
export {
  uit,
  kfr,
  $4e,
  ecs,
  Dz,
  z8,
  tcs,
  pit,
  fit,
  Efr,
  Lz,
  o8t,
  hMn,
  yMn,
  bso,
  iAt,
  Sso,
  J7,
  qF,
  KI,
  Q7,
  aAt,
  U4e,
  _Mn,
  lAt,
  eU,
  Z7,
  wso,
  Tfr,
  Qoe,
  B4e,
  vso,
  bMn,
  kso,
  mit,
  AAe,
  Cfr,
  Rfr,
  ncs,
  qY,
  Eso,
  s8t,
  SMn,
  OR,
  Zoe,
  wue,
  Oc
};
