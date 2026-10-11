// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { We } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Jd, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { pde, _2 } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { aX, KB, San, v3e, k3e, lX, qge, Kge, BTe, ft, lle } from "B:/~BUN/root/chunk-faawr4jv.js";
import { Fa } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { tl, uc } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Bn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { Uk } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { AXt, VTt, PG } from "B:/~BUN/root/chunk-at7axhcd.js";
import { sHe, XV, M3e, D3e, lzn, m0, dle, iHe, Can, XB, pX, L3e, Jge, tDt, AS, fX, nDt, ww } from "B:/~BUN/root/chunk-j36yaq51.js";
import { u0 } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { ev, MOn, $U, RT, mW, xse, efe, V0e, RTt, ATt, Xmr, Jmr, Qmr, Zmr, egr as timeout_2, xTt, PTt, Rtt } from "B:/~BUN/root/chunk-7z8vew74.js";
import { bO, vT } from "B:/~BUN/root/chunk-s9g1bc10.js";
import { de, fn, ho, lt, mg } from "B:/~BUN/root/chunk-8386ms9e.js";
import { createHash as G } from "crypto";
var V = "_files.json",
  fet = 4096,
  Pur = u0,
  j = 16777216,
  timeout = 90000,
  K = "x-frame-doc-sha256",
  X = "x-frame-doc-seq",
  Q = f(() => lt({
    ver: de(),
    files: mg(lt({
      sha256: de().regex(bO),
      size: fn().int().nonnegative().max(Pur),
      contentType: de().regex(vT)
    })),
    narrowed: ho().optional()
  }));
function D(r) {
  return r === "file list" ? "artifact_file_list" : "artifact_file_read";
}
function R(r, reason, u, g = !0) {
  if (g) m(D(r), reason);
  return {
    kind: "error",
    message: `${r} failed: ${u}`,
    reason: reason
  };
}
function U(r) {
  let n = r - 1;
  return n >= 1048576 ? `${n >> 20} MiB` : `${n >> 10} KiB`;
}
var Y = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help",
  Z = "published-file reads aren't available from this kind of session; retrying from here will not help";
async function M(target, n, u, credentials, {
  admitPublicRead: admitPublicRead,
  probeToolUseId: probeToolUseId
}) {
  if (!Bn.test(target.slug)) return R(n, "invalid_slug", "not a valid artifact id");
  let s = Can(),
    b = !s && (dle() || tDt() && !XB(Uk));
  if (!b && !s && a.CLAUDE_CODE_REMOTE) return R(n, "relay_unavailable", Y);
  let agentDirect = s || uc() && iHe();
  if (b && !m0(lzn) && !agentDirect) return R(n, "relay_not_served", Z);
  let i = await RT(target, D(n), u, {
    gatePublicRead: !1,
    relayOnly: !agentDirect,
    credentials: credentials,
    probeToolUseId: probeToolUseId
  });
  if (i.err !== null) {
    let w = i.errorCode === "boot_relay_error";
    if (w && (i.status === 403 || i.status === 404)) return {
      kind: "error",
      reason: "relay_refused",
      message: `${n} failed: published-file reads from a cloud session go through the session gateway's artifact relay, which is not enabled for this session yet; retrying from here will not help`
    };
    if (w && i.status === 401) return {
      kind: "error",
      reason: "relay_unauthorized",
      message: `${n} failed: the session gateway did not accept this session's credential for the artifact relay; retrying from here will not help`
    };
    return {
      kind: "error",
      message: i.err.replace(/^artifact read/, n),
      reason: i.errorCode
    };
  }
  let publicRead = i.assetToken === void 0;
  if (publicRead && !AS()) return R(n, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
  if (publicRead && admitPublicRead?.() !== !0) return p(D(n), fX), R(n, fX, nDt, !1);
  let cowritten = i.data.cowritten === !0 || i.data.artifactKind === ww || ft(target.slug)?.cowritten === !0 || ft(target.slug)?.artifactKind === ww,
    typeLocked = lle(target.slug, i.data.type),
    outsideOrg = BTe(i.data.perm?.role === "owner", Kge(i.data.outsideWriter), ft(target.slug)?.outsideWriter);
  return {
    kind: "ok",
    target: target,
    ver: i.ver,
    assetToken: i.assetToken,
    publicRead: publicRead,
    relay: b && !publicRead,
    agentDirect: agentDirect,
    cowritten: cowritten,
    typeLocked: typeLocked,
    writerClass: xse(i.data.perm?.role),
    foreign: i.data.authoredByOthers === !0 || ft(target.slug)?.authoredByOthers === !0 || i.data.perm?.role !== "owner" || cowritten || typeLocked || outsideOrg,
    outsideOrg: outsideOrg,
    orgRelation: Jmr(i),
    livePaths: AXt(i.data).map(item => item.path),
    source: Xmr(i),
    ...(i.data.title !== void 0 && {
      title: i.data.title
    }),
    ...(i.data.favicon !== void 0 && {
      favicon: i.data.favicon
    }),
    ...(i.data.publishPreconditions === !0 && {
      publishPreconditions: !0
    }),
    filesCounted: typeof i.data.fileCount === "number" && Number.isSafeInteger(i.data.fileCount) && i.data.fileCount > 0,
    reused: i.reused === !0
  };
}
async function x(r, n, u, maxContentLength, signal, retryBudget, s = !0, b = !1) {
  let o = (c, F) => R(u, c, F, s),
    i = status => ({
      kind: "status",
      status: status
    }),
    {
      target: target_2,
      assetToken: v,
      relay: relay
    } = r,
    {
      host: host,
      base: base,
      headers: headers
    } = xTt(target_2),
    L = () => (ee().contentHostEgressDenied.add(target_2.env), o("egress_blocked", `this environment's network allowlist blocks ${host}, so the file cannot be fetched (access to the artifact itself is fine). ${r.publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${PTt(target_2.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.frame.${target_2.env === "staging" ? "staging." : ""}claudeusercontent.com to the environment's allowed domains.`}`)),
    T = (c, F) => (t(`[artifact] ${u}: egress proxy denied (${F})`), o("egress_denied", `artifact content fetch refused by the environment's egress proxy (${c})`)),
    l;
  try {
    if (relay) {
      if (v === void 0) return o("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let c = await ATt(target_2.slug, n, {
        token: v,
        timeout: timeout,
        maxContentLength: maxContentLength,
        signal: signal,
        retryBudget: retryBudget
      });
      if (!c.ok) return o(c.reason.replace(/-/g, "_"), c.reason === "no-auth" ? sHe(c.detail) : `artifact content is unreachable from this session (${c.reason})`);
      l = {
        status: c.status,
        headers: c.response.headers,
        data: c.data
      };
    } else {
      let c = v === void 0 ? "" : `?__frame_t=${encodeURIComponent(v)}`,
        F = await tl.get(`${base}${n}${c}`, {
          signal: signal,
          timeout: timeout,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: maxContentLength,
          validateStatus: () => !0,
          ...(headers && {
            headers: headers
          })
        });
      if (KB(F.status, F.headers)) return L();
      let P = lX(F.headers);
      if (P !== void 0 && (F.status < 200 || F.status >= 300)) return T(`HTTP ${F.status}`, P);
      l = {
        status: F.status,
        headers: F.headers,
        data: F.data
      };
    }
  } catch (error) {
    if (Fa(error) || error instanceof We) throw error;
    if (relay && !b) Jge();
    let F = relay ? void 0 : _2(error);
    if (F !== void 0) {
      if (KB(F.connectStatus, F.headers)) return L();
      let P = lX(F.headers);
      if (P !== void 0) return T(pde(F.connectStatus), P);
      let N = k3e(F.headers);
      if (N !== void 0) t(`[artifact] ${u}: proxy refused, marker ${N}`);
      return b ? i(0) : o("proxy_refused", `the proxy refused the connection to the artifact's content host (${pde(F.connectStatus)})`);
    }
    return b ? i(0) : o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${U(maxContentLength)} limit`);
  }
  if (b && l.status !== 200) return i(l.status);
  if (!relay) ee().contentHostEgressDenied.delete(target_2.env);
  if (relay && L3e(l.status)) return o("relay_unavailable", Y);
  if (relay && D3e(l.status, l.data)) return o("network_off", `${M3e}; retrying from here will not help`);
  if (relay && mW(l.status)) return o(`http_${l.status}`, RTt(l.status));
  if (relay) Jge(l.status);
  if (l.status === 404) return {
    kind: "status",
    status: 404,
    frameNotFound: l.data !== void 0 && l.data.byteLength <= 256 && XV(Buffer.from(l.data).toString("utf8"))
  };
  if (v === void 0 && l.status === 403 && qge(l.headers, aX(l.headers, l.data, c => c))) return {
    kind: "status",
    status: 403
  };
  let E = relay ? void 0 : San({
    status: l.status,
    headers: l.headers,
    data: l.data,
    redact: c => Rtt(c, v),
    label: `[artifact] ${u}`
  });
  if (E !== void 0) return o(E, v3e[E]);
  if (l.status === 401 || l.status === 403) return o(`http_${l.status}`, relay ? "the cloud session's artifact mount refused the read \u2014 file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down");
  if (l.status !== 200) return o(`http_${l.status}`, `unexpected answer from the content host (HTTP ${l.status})`);
  if (relay) pX(Uk);
  let S = l.headers,
    A = relay ? S?.["x-frame-asset-content-type"] ?? S?.["content-type"] : S?.["content-type"],
    docSha256 = String(S?.[K] ?? "").toLowerCase(),
    C = String(S?.[X] ?? "");
  return {
    kind: "ok",
    status: 200,
    bytes: Buffer.from(l.data ?? new ArrayBuffer(0)),
    contentType: typeof A === "string" ? Ze(A, ";").trim().toLowerCase() : "",
    ...(bO.test(docSha256) && {
      docSha256: docSha256
    }),
    ...(/^\d{1,15}$/.test(C) && {
      docSeq: Number(C)
    })
  };
}
async function I(r, n, u, g, e = !0) {
  let d = await x(r, `/_f/${r.ver}/${V}`, n, j + 1, u, g, e);
  if (d.kind !== "ok") return d;
  let s;
  try {
    s = Q().safeParse(J(d.bytes.toString("utf8")));
  } catch {
    return R(n, "bad_json", "the artifact service answered with something other than a file list", e);
  }
  if (!s.success || s.data.ver !== r.ver) return R(n, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", e);
  let b = Object.entries(s.data.files);
  if (b.length > fet) return R(n, "too_many", `the file list names more than ${fet} files`, e);
  return {
    kind: "ok",
    files: b.filter(([i]) => i.length <= ev && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(i) && Jd(i) && !MOn(i)).map(([path, y]) => ({
      path: path,
      contentType: y.contentType,
      sizeBytes: y.size,
      sha256: y.sha256
    })).sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0),
    narrowed: s.data.narrowed === !0
  };
}
async function n8(r, n, u, g = {}) {
  let e = await M(r, "file list", n, u, g);
  if (e.kind === "error") return e;
  let d = await I(e, "file list", n, V0e());
  if (d.kind === "error") return d;
  if (d.kind === "status") {
    if (d.status === 404 && !e.filesCounted && (!e.relay || d.frameNotFound === !0)) return p("artifact_file_list", "single_page"), {
      kind: "error",
      reason: "single_page",
      message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself",
      ver: e.ver,
      cowritten: e.cowritten,
      typeLocked: e.typeLocked
    };
    if (e.publicRead && d.status === 403) {
      if (await te(e, n)) return p("artifact_file_list", "single_page"), {
        kind: "error",
        reason: "single_page",
        message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself",
        ver: e.ver,
        cowritten: e.cowritten,
        typeLocked: e.typeLocked
      };
      return R("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now \u2014 it may no longer be public, or it was taken down");
    }
    return m("artifact_file_list", `http_${d.status}`), R("file list", `http_${d.status}`, e.relay ? "not found through this cloud session's artifact mount \u2014 this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", !1);
  }
  return _("artifact_file_list", {
    relay: e.relay,
    files: d.files.length,
    ...(e.agentDirect && {
      agent_direct: !0
    }),
    ...(e.publicRead && {
      public: !0
    }),
    ...(e.reused && {
      boot_reused: !0
    })
  }), {
    kind: "ok",
    ver: e.ver,
    files: d.files.map(item => e.livePaths.includes(item.path) ? {
      ...item,
      live: !0
    } : item),
    relay: e.relay,
    agentDirect: e.agentDirect,
    cowritten: e.cowritten,
    typeLocked: e.typeLocked,
    writerClass: e.writerClass,
    foreign: e.foreign,
    outsideOrg: e.outsideOrg,
    publicRead: e.publicRead,
    narrowed: e.publicRead && d.narrowed,
    ...(e.title !== void 0 && {
      title: e.title
    }),
    ...(e.favicon !== void 0 && {
      favicon: e.favicon
    }),
    ...(e.publishPreconditions === !0 && {
      publishPreconditions: !0
    })
  };
}
function W(r) {
  return {
    ver: r.ver,
    relay: r.relay,
    agentDirect: r.agentDirect,
    cowritten: r.cowritten,
    typeLocked: r.typeLocked,
    writerClass: r.writerClass,
    foreign: r.foreign,
    outsideOrg: r.outsideOrg,
    ...(r.orgRelation === "external" && {
      external: !0
    }),
    offOrgRamp: Qmr(r.orgRelation),
    publicRead: r.publicRead
  };
}
function q(r, n, u = !0) {
  return R("file read", `http_${n}`, r.relay ? `not found through this cloud session's artifact mount \u2014 no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : r.publicRead ? 'this public artifact serves no file at that path to readers outside its organization \u2014 action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version \u2014 action "list_files" shows the paths', u);
}
async function te(r, signal_2) {
  let {
    base: base_2,
    headers: headers_2
  } = xTt(r.target);
  try {
    return (await tl.head(`${base_2}/_f/${r.ver}/`, {
      signal: signal_2,
      timeout: timeout_2,
      maxRedirects: 0,
      validateStatus: () => !0,
      ...(headers_2 && {
        headers: headers_2
      })
    })).status === 200;
  } catch (error) {
    if (Fa(error) || error instanceof We) throw error;
    return !1;
  }
}
async function z(r, path_2, u, g, e, d = !0) {
  let s = path_2.split("/").map(encodeURIComponent).join("/"),
    b = r.source ? await x(r, Zmr(r.ver, s), "file read", efe, u, g, d, !0) : void 0;
  if (b?.kind === "error") return b;
  let o = b?.kind === "ok" ? b : await x(r, `/_f/${r.ver}/${s}`, "file read", efe, u, g, d),
    i = o === b;
  if (o.kind !== "ok") return o;
  if (!vT.test(o.contentType)) return R("file read", "unexpected_type", "the content host served the file with a type this tool does not save", d);
  if (o.bytes.length >= efe) return R("file read", "size", `the file exceeds the ${U(efe)} limit`, d);
  let y = E => G("sha256").update(E).digest("hex"),
    bytes = o.bytes,
    sha256 = y(bytes),
    asPublished = !0,
    listing = "unused",
    docVerified = !1,
    docSeq,
    listedSha256,
    l = r.livePaths.includes(path_2);
  if (o.contentType === "text/html") {
    let E = await e(),
      S = E.kind === "ok" ? E.files.find(item => item.path === path_2)?.sha256 : void 0;
    if (listedSha256 = S, S === void 0) listing = l ? "live" : "missing", asPublished = !1;else if (sha256 === S) listing = "verified";else {
      let A = i ? void 0 : VTt(o.bytes, B => y(B) === S);
      if (A !== void 0) bytes = A, sha256 = S, listing = "verified";else listing = l ? "live" : "unverified", asPublished = !1;
    }
  }
  return {
    kind: "ok",
    path: path_2,
    bytes: bytes,
    contentType: o.contentType,
    sha256: sha256,
    asPublished: asPublished,
    listing: listing,
    ...(listedSha256 !== void 0 && {
      listedSha256: listedSha256
    }),
    docVerified: docVerified,
    ...(docSeq !== void 0 && {
      docSeq: docSeq
    }),
    ...(i && {
      source: !0
    })
  };
}
async function Ikt(r, n, u, g, e = {}) {
  let d = $U(n);
  if ("errMsg" in d) return R("file read", "invalid_path", d.errMsg);
  let s = await M(r, "file read", u, g, e);
  if (s.kind === "error") return s;
  let b = V0e(),
    o = await z(s, d.key, u, b, () => I(s, "file read", u, b, !1));
  if (o.kind === "error") return o;
  if (o.kind === "status") return q(s, o.status);
  return {
    ...o,
    ...W(s)
  };
}
var re = 4,
  ie = PG;
async function Bso(r, n, u, g, {
  byteBudget = ie,
  ...d
} = {}) {
  let s = await M(r, "file read", u, g, d);
  if (s.kind === "error") return s;
  let b = V0e(),
    o,
    i = () => o ??= I(s, "file read", u, b, !1).then(h => {
      if (h.kind !== "ok") o = void 0;
      return h;
    }),
    y = 0;
  return {
    kind: "ok",
    files: await ne(n, re, async path_3 => {
      let k = $U(path_3);
      if ("errMsg" in k) return {
        ...R("file read", "invalid_path", k.errMsg, !1),
        path: path_3
      };
      if (y >= byteBudget) return {
        kind: "error",
        reason: "batch_budget",
        message: `not fetched: the files read before it in this call already hold ${Math.floor(byteBudget / 1048576)}MB, the most one read carries \u2014 read it, and any after it, in another call`,
        path: k.key
      };
      if (s.livePaths.includes(k.key)) return {
        kind: "error",
        reason: "live_path",
        message: "this is a live file: read it by itself with `path`, which returns its current state",
        path: k.key
      };
      let w = await z(s, k.key, u, V0e(), i, !1);
      if (w.kind === "status") return {
        ...q(s, w.status, !1),
        path: k.key
      };
      if (w.kind === "ok") y += w.bytes.length;
      return w.kind === "error" ? {
        ...w,
        path: k.key
      } : w;
    }),
    ...W(s)
  };
}
async function ne(r, n, u) {
  let g = Array(r.length),
    e = 0,
    d = async () => {
      while (e < r.length) {
        let s = e++;
        g[s] = await u(r[s]);
      }
    };
  return await Promise.all(Array.from({
    length: Math.min(n, r.length)
  }, () => d())), g;
}
export { fet, Pur, n8, Ikt, Bso };