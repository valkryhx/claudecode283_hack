// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { kh, Bwe } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { P6i, jt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { id } from "B:/~BUN/root/chunk-65j2302z.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { kAe } from "B:/~BUN/root/chunk-5az22yft.js";
import { xg } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Q1 } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { nl, rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { kjn, Gm } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { sNn } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, oe, C, u, xt, me, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { AT } from "B:/~BUN/root/chunk-mzfrv3wm.js";
function _e(e, r) {
  var s,
    n = -1,
    d = e.length;
  while (++n < d) {
    var y = r(e[n]);
    if (y !== void 0) s = s === void 0 ? y : s + y;
  }
  return s;
}
var fmo = _e;
function ge(e, r) {
  return e && e.length ? fmo(e, AT(r, 2)) : 0;
}
var ase = ge;
var tU = 20971520,
  ye = "application/vnd.ant.frame-refusal+json";
function xu() {
  return {
    Accept: `application/json, ${ye}`,
    "X-Frame-CP": "go",
    "X-Frame-Surface": "code",
    "X-Frame-Platform": id() ? "desktop" : "cli",
    "X-Frame-Client-Version": {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION,
    "X-Frame-Session-Id": aws() ?? z()
  };
}
var Ee = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function aws() {
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? sNn();
  return e && Ee.test(e) ? e : void 0;
}
var he = /^req_[A-Za-z0-9_-]{4,128}$/;
function RLe(request_id) {
  return request_id !== void 0 && he.test(request_id) ? {
    request_id: request_id
  } : {};
}
var pen = "create_confirmed=1",
  pmo = "anthropic/frameCreateConfirmed",
  mCe = /unknown field|not a recognized|not allowlisted/i;
function C1(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let r = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return e.error + r;
    }
    return _(e) ?? "";
  }
  return "";
}
function ELt(e, r) {
  return e.includes(`'${r}'`) || new RegExp(`"${r}"(?!\\??:)`).test(e);
}
function Gvr(e, r) {
  let s = C1(e);
  return mCe.test(s) && ELt(s, r);
}
var cX = /^[A-Za-z0-9_-]{1,64}$/;
import { Agent as be } from "http";
function t3(e, r) {
  let err_code = Bwe(Gm(e)?.code) ?? kh(e);
  return {
    transport: Q1(e),
    ...(err_code !== void 0 && {
      err_code: err_code
    }),
    elapsed_ms: Math.round(performance.now() - r)
  };
}
function Re(e) {
  if (!Q1(e) || !rc(e)) return !1;
  let r = Gm(e)?.code;
  return r !== void 0 && kjn.has(r) && D(e.request) && e.request.reusedSocket === !0;
}
function Se(e) {
  if (!rc(e) || !D(e.request)) return;
  let {
      agent: agent
    } = e.request,
    s = URL.parse(e.config?.url ?? "", e.config?.baseURL);
  if (!(agent instanceof be) || s === null) return;
  let n = s.port || (s.protocol === "https:" ? "443" : "80"),
    y = `${s.hostname.replace(/^\[(.*)\]$/, "$1")}:${n}:`;
  for (let [l, S] of Object.entries(agent.freeSockets)) if (l.startsWith(y)) for (let w of S?.slice() ?? []) w.destroy();
}
async function Vvr({
  isRead: isRead,
  wire: wire,
  send: send,
  signal: signal,
  timeoutMs: timeoutMs
}) {
  let y = performance.now();
  try {
    return await send(!1);
  } catch (error) {
    if (!Re(error)) throw error;
    try {
      Se(error);
    } catch (error) {
      a(error);
    }
    let S = {
      ...t3(error, y),
      wire: f(wire)
    };
    if (!isRead || signal?.aborted) throw c("artifact_stale_socket", isRead ? "read_cancelled" : "write_not_resent", S), error;
    let w = timeoutMs === void 0 || !Number.isFinite(timeoutMs) || timeoutMs <= 0 ? void 0 : timeoutMs - (performance.now() - y);
    if (w !== void 0 && w < 1) throw m("artifact_stale_socket", "no_time_to_resend", S), error;
    t("[artifact] a read-only request failed because the server had already closed its reused connection \u2014 sending it once more on a new connection");
    try {
      let h = await send(!0, w === void 0 ? void 0 : Math.floor(w));
      return g("artifact_stale_socket", S), h;
    } catch (error) {
      if (!nl(error)) m("artifact_stale_socket", "resend_failed", {
        ...t3(error, y),
        wire: f(wire)
      });
      throw error;
    }
  }
}
var L = "anthropic.com/artifact-route",
  Ce = 300000,
  timeoutMs_2 = 5000,
  ce = 1000,
  ne = 5000,
  maxContentLength = 1048576,
  mmo = ["X-Frame-Surface", "X-Frame-Platform", "X-Frame-Client-Version", "X-Frame-Session-Id"];
function ue(e) {
  let {
    recoverOAuth401: recoverOAuth401,
    headers: headers,
    ...n
  } = e;
  return {
    ...n,
    headers: {
      ...xg(headers, mmo),
      Accept: "application/json, text/event-stream",
      "Content-Type": "application/json"
    }
  };
}
var NSa = ["pin_artifact", "unpin_artifact", "publish_version", "list_artifacts", "list_types"],
  Te = {
    pin_artifact: "artifact_mcp_wire_pin",
    unpin_artifact: "artifact_mcp_wire_pin",
    publish_version: "artifact_mcp_wire_publish",
    list_artifacts: "artifact_mcp_wire_listing",
    list_types: "artifact_mcp_wire_listing"
  },
  route = /^\/api\/frame\/favorite\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})$/,
  call = ([, slug]) => ({
    arguments: {
      slug: slug
    },
    mark: {}
  }),
  de = 1048576,
  Me = new Map([["slug", "slug"], ["baseVersion", "base_version"], ["title", "title"], ["favicon", "favicon"], ["icon", "icon"], ["label", "label"], ["contract", "contract"], ["deadline", "deadline"], ["content", "content"]]),
  le = ["manifest", "mode"],
  ke = new Set(["expectUnpublished", "description", "note", "entrypoint", "session_id", "request_id", "publish_context", "template", "origin_metadata", ...le]),
  xe = new Map([["force", "force"], ["capabilities", "capabilities"], ["thumbnail", "thumbnail"], ["thumbnail_dark", "thumbnail"], ["auto_edit_attribution", "attribution"]]),
  call_2 = ([, e], r) => {
    if (!D(r)) return "body";
    if (ase(D(r.manifest) ? Object.values(r.manifest) : [r], h => D(h) && typeof h.content === "string" ? h.content.length : 0) > de) return "size";
    let n = {},
      mark = {
        description: ""
      };
    for (let [h, k] of Object.entries(r)) {
      let F = Me.get(h);
      if (k === void 0) continue;
      if (F !== void 0) n[F] = k;else if (ke.has(h)) mark[h] = k;else return xe.get(h) ?? "key";
    }
    let createConfirmed = !1;
    for (let [h, k] of new URLSearchParams(e ?? "")) if (h === "attempt_id") mark.attempt_id = k;else if (h === "resend" && k === "1") mark.resend = !0;else if (`${h}=${k}` === pen) createConfirmed = !0;else return "query";
    let l = typeof n.slug === "string" ? te().shareStatus.bySlug.get(n.slug) : void 0,
      S = l?.probeFailed ? void 0 : l?.mode;
    if (S === "users" || S === "org") n.shared_live = S;
    let w = {
      arguments: n,
      mark: mark,
      createConfirmed: createConfirmed
    };
    if (!le.some(item => item in mark)) return w;
    return "content" in n ? "page_and_manifest" : {
      ...w,
      needs: "manifest"
    };
  };
function Z(e, r, s) {
  for (let [n, d] of new URLSearchParams(e ?? "")) {
    let [y, l] = Object.hasOwn(r, n) ? r[n] : [];
    if (y === void 0 || l === void 0 || Object.hasOwn(s[y], l)) return "query";
    if (l === "limit" && !/^\d{1,9}$/.test(d)) return "query";
    s[y][l] = l === "limit" ? Number(d) : d;
  }
  return s;
}
function Fe(e, r) {
  let s = D(e) ? e.result : void 0,
    n = D(s) ? s.structuredContent : void 0;
  return D(n) && Object.hasOwn(n, r) ? n : void 0;
}
var De = [{
    method: "POST",
    route: route,
    tool: "pin_artifact",
    call: call
  }, {
    method: "DELETE",
    route: route,
    tool: "unpin_artifact",
    call: call
  }, {
    method: "POST",
    route: /^\/api\/frame\/deploy\/direct(?:\?(.*))?$/,
    tool: "publish_version",
    call: call_2,
    textIsBody: !0,
    narrower: (e, r) => e === 404 || e === 403 && r === "not_owner" || e === 422 && r === "audience_conflict" || e === 400 && r === void 0
  }, {
    method: "GET",
    route: /^\/api\/frame\/frames\?(.*)$/,
    tool: "list_artifacts",
    call: ([, e]) => Z(e, {
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
    call: ([, e]) => Z(e, {
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
    call: ([, type, r]) => Z(r, {
      limit: ["arguments", "limit"],
      rel: ["mark", "rel"]
    }, {
      arguments: {
        type: type
      },
      mark: {},
      needs: "type"
    }),
    reads: "instances"
  }],
  ve = p(() => u({
    [L]: u({
      status: E().int().min(200).max(599),
      headers: me(o(), o()).optional().catch(void 0)
    })
  })),
  Pe = p(() => u({
    error: u({
      code: E()
    }).optional(),
    result: u({
      _meta: ve(),
      content: C(u({
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
  Ie = p(() => u({
    result: u({
      tools: C(u({
        name: o(),
        _meta: u({
          [L]: xt({
            v: T(1)
          })
        }).optional().catch(void 0)
      }))
    })
  }));
class McpDoubtfulAnswerError extends Error {
  status;
  constructor(e) {
    super("the MCP answer does not say whether the publish ran");
    this.status = e;
    this.name = "McpDoubtfulAnswerError";
  }
}
var je = new Set([-32700, -32600, -32601, -32602]);
function lws(e, r) {
  if (i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let s = De.find(item => item.method === e && item.route.test(r));
  if (s === void 0) return null;
  return v(P6i, !1) === !0 ? s : null;
}
function V(tools, r) {
  return r.mcpAdvert = {
    tools: tools,
    until: Date.now() + Ce
  }, tools;
}
var I = new Set(),
  fe = new Set();
async function ze(e, r, s) {
  let mcpAdvert = r.mcpAdvert;
  if (mcpAdvert !== void 0 && mcpAdvert.until > Date.now()) return mcpAdvert.tools;
  let mcpAdvertAsked = r.mcpAdvertAsked;
  if (mcpAdvertAsked === void 0) {
    let answer = Ne(vo(e, "signal"), r).catch(() => I).finally(() => {
      r.mcpAdvertAsked = void 0;
    });
    mcpAdvertAsked = {
      answer: answer,
      soon: we(answer, ce)
    }, r.mcpAdvertAsked = mcpAdvertAsked;
  }
  if (!s || mcpAdvert?.tools.size === 0) return mcpAdvert?.tools ?? I;
  return (await mcpAdvertAsked.soon) ?? fe;
}
async function Ne(e, r) {
  let mcpAdvert_2 = r.mcpAdvert,
    n = Date.now(),
    d;
  try {
    d = await Vvr({
      isRead: !0,
      wire: "mcp",
      timeoutMs: timeoutMs_2,
      send: (freshConnection, S) => jt.post(kAe, {
        jsonrpc: "2.0",
        id: 1,
        method: "tools/list"
      }, {
        ...vo(ue(e), "streamUpload"),
        timeout: S ?? timeoutMs_2,
        maxContentLength: maxContentLength,
        ...(freshConnection && {
          freshConnection: freshConnection
        })
      })
    });
  } catch {
    return c("artifact_mcp_wire_tools_list", "advert_request_error"), V(I, r);
  }
  if (!d.ok) return c("artifact_mcp_wire_tools_list", "advert_refused_locally"), I;
  let y = d.status === 200 ? Ie().safeParse(d.data).data : void 0;
  if (y === void 0) c("artifact_mcp_wire_tools_list", d.status === 200 ? "advert_unreadable" : "advert_not_served", {
    status: d.status
  });else if (Date.now() - n > ce) c("artifact_mcp_wire_tools_list", "advert_slow");else g("artifact_mcp_wire_tools_list");
  if (r.mcpAdvert !== mcpAdvert_2) return r.mcpAdvert?.tools ?? I;
  return V(new Set(y?.result.tools.flatMap(({
    name: name,
    _meta: _meta
  }) => _meta === void 0 || name.includes("#") ? [] : [name, ...Object.entries(_meta[L]).filter(([, w]) => w === !0).map(([w]) => `${name}#${w}`)])), r);
}
function ae(e) {
  let r = et(e, !1);
  return D(r) ? r : void 0;
}
function Le(e) {
  return D(e) && typeof e.reason === "string" ? e.reason : void 0;
}
async function dws(e, r, s, n, d) {
  let y = Te[e.tool],
    l = R => (c(y, R, {
      tool: f(e.tool)
    }), null),
    S = R => l(`cannot_carry_${R}`),
    w = () => {
      let R = e.route.exec(r);
      return R ? e.call(R, s) : "query";
    },
    h = w();
  if (typeof h === "string") return S(h);
  let {
      slug: slug_2
    } = h.arguments,
    F = typeof slug_2 === "string" ? slug_2 : "",
    frameRelay = te().frameRelay,
    {
      mcpNarrower: mcpNarrower
    } = frameRelay,
    isRead_2 = e.reads !== void 0;
  if (!isRead_2 && mcpNarrower.has(F)) return l("narrower_remembered");
  let W = await ze(n, frameRelay, !isRead_2),
    M = w();
  if (typeof M === "string") return S(M);
  if (!W.has(e.tool) || M.needs !== void 0 && !W.has(`${e.tool}#${M.needs}`)) return l(W === fe ? "offer_late" : "no_offer");
  if (!isRead_2 && mcpNarrower.has(F)) return l("narrower_remembered");
  let J = {
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: {
        name: e.tool,
        arguments: M.arguments,
        _meta: {
          [L]: M.mark,
          ...(M.createConfirmed === !0 && {
            [pmo]: !0
          })
        }
      }
    },
    G = Buffer.byteLength(_(J));
  if (G > de) return S("size");
  let B = {
      tool: f(e.tool),
      ...(M.needs === "manifest" && {
        manifest: !0
      }),
      ...(M.needs === "type" && {
        by_type: !0
      })
    },
    j = (R, status) => (V(I, frameRelay), c(y, R, {
      ...B,
      status: status
    }), null),
    q = (R, status_2) => {
      V(I, frameRelay), m(y, R, {
        ...B,
        status: status_2
      });
    },
    b;
  try {
    d?.({
      json_bytes: G,
      wire_bytes: G,
      body_gzip: !1
    });
    let timeoutMs_3 = isRead_2 ? Math.min(n.timeout ?? ne, ne) : void 0;
    b = await Vvr({
      isRead: isRead_2,
      wire: "mcp",
      signal: n.signal,
      timeoutMs: timeoutMs_3,
      send: (freshConnection_2, Q) => jt.post(kAe, J, {
        ...ue(n),
        ...(isRead_2 && {
          timeout: Q ?? timeoutMs_3
        }),
        ...(freshConnection_2 && {
          freshConnection: freshConnection_2
        })
      })
    });
  } catch (error) {
    if (nl(error)) throw error;
    if (isRead_2) return j("request_error", 0);
    throw q("request_error", 0), error;
  }
  if (!b.ok) return l("refused_locally");
  let Y = (status_3, data, Q) => ({
    ...b,
    status: status_3,
    data: data,
    response: {
      ...b.response,
      status: status_3,
      data: data,
      headers: {
        ...xg(b.response.headers, "date"),
        ...Q
      }
    }
  });
  if (b.status >= 300 && b.status < 500 && b.status !== 408 && b.status !== 499) return j("refused", b.status);
  if (isRead_2 && b.status >= 300) return j("http_failed", b.status);
  let ee = e.textIsBody && F !== "" && M.mark.attempt_id !== void 0,
    K = mcpDoubt => {
      if (ee) throw new McpDoubtfulAnswerError(mcpDoubt);
      return {
        ...Y(200, void 0),
        mcpDoubt: mcpDoubt
      };
    };
  if (b.status >= 300) {
    if (q("http_failed", b.status), !e.textIsBody) return {
      ...b,
      data: b.data,
      response: b.response
    };
    return b.status === 503 && ee ? Y(503, void 0, xg(b.response.headers, "retry-after")) : K(b.status);
  }
  let P = b.status === 200 ? Pe().safeParse(b.data).data : void 0;
  if (P?.error !== void 0 && je.has(P.error.code)) return j("not_dispatched", 0);
  if (P?.result === void 0) {
    let R = P?.error === void 0 ? "unreadable" : "rpc_error";
    if (isRead_2) return j(R, b.status);
    return q(R, b.status), e.textIsBody ? K(b.status) : Y(502, void 0);
  }
  let {
      status: status_4,
      headers: headers_2
    } = P.result._meta[L],
    N = P.result.structuredContent?.error,
    X = e.reads !== void 0 && status_4 < 300 ? Fe(b.data, e.reads) : N === void 0 && e.textIsBody ? ae(P.result.content?.[0]?.text) : ae(N?.message) ?? (D(N?.details) ? N.details : void 0) ?? (N?.message || void 0);
  if (isRead_2 && X === void 0) return j("unreadable", status_4);
  if (e.narrower?.(status_4, Le(X))) return mcpNarrower.add(F), c(y, `narrower_${status_4}`, {
    ...B,
    status: status_4,
    ...(M.arguments.shared_live !== void 0 && {
      shared_live_sent: !0
    })
  }), null;
  if (e.textIsBody && X === void 0 && (status_4 < 300 || status_4 === 409 || status_4 >= 500)) return q("unreadable", status_4), K(status_4);
  return g(y, {
    ...B,
    status: status_4
  }), Y(status_4, X, headers_2);
}
export { fmo, ase, tU, xu, aws, RLe, pen, pmo, mCe, C1, ELt, Gvr, cX, t3, Vvr, mmo, NSa, McpDoubtfulAnswerError as Tmt, lws, dws };