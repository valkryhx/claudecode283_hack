// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ke
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  nf,
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  YJ,
  yM
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  nfe,
  rV,
  DFt,
  LFt,
  NFt,
  rfe
} from "B:/~BUN/root/chunk-b5ry9py2.js";
import {
  nl
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  hd
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  hr
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  tM
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  Cir,
  CAt,
  cre
} from "B:/~BUN/root/chunk-gvv6aaq0.js";
import {
  tU
} from "B:/~BUN/root/chunk-17caj8fw.js";
import {
  oee,
  kmt,
  vmt,
  Bvr,
  xL,
  sse,
  QJe,
  XLn,
  ZW,
  yue,
  Emt,
  CLe,
  fen
} from "B:/~BUN/root/chunk-hhd7smkx.js";
import {
  Dmt,
  wA,
  x_e,
  kNn,
  W2,
  fR
} from "B:/~BUN/root/chunk-z2c6k7e2.js";
import {
  rA,
  V9r,
  U8,
  Y9r,
  mI,
  B8,
  TQ,
  bve,
  K3e,
  qYt,
  YYt,
  XYt,
  JYt,
  q3e,
  J9r,
  Q9r,
  Z9r,
  eXr,
  Sir,
  QYt,
  ZYt,
  Clt
} from "B:/~BUN/root/chunk-gjq813eb.js";
import {
  pGe,
  OLe,
  l7e,
  Mt,
  MLe
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  PB,
  U0
} from "B:/~BUN/root/chunk-q720r12x.js";
import {
  ge,
  Mn,
  ws,
  Ft,
  v_
} from "B:/~BUN/root/chunk-b3kw6jpx.js";
import {
  createHash as j
} from "crypto";
var K = "_files.json",
  S4t = 4096,
  y5o = tU,
  X = 16777216,
  D = 90000,
  Q = "x-frame-doc-sha256",
  Z = "x-frame-doc-seq",
  J = p(() => Ft({
    ver: ge(),
    files: v_(Ft({
      sha256: ge().regex(PB),
      size: Mn().int().nonnegative().max(y5o),
      contentType: ge().regex(U0)
    })),
    narrowed: ws().optional()
  }));

function x(e) {
  return e === "file list" ? "artifact_file_list" : "artifact_file_read"
}

function v(e, s, f, h = !0) {
  if (h) m(x(e), s);
  return {
    kind: "error",
    message: `${e} failed: ${f}`,
    reason: s
  }
}

function M(e) {
  let s = e - 1;
  return s >= 1048576 ? `${s>>20} MiB` : `${s>>10} KiB`
}
var q = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help",
  re = "published-file reads aren't available from this kind of session; retrying from here will not help";
async function N(e, s, f, h, {
  admitPublicRead: r,
  probeToolUseId: d
}) {
  if (!hr.test(e.slug)) return v(s, "invalid_slug", "not a valid artifact id");
  let l = XLn(),
    F = !l && (sse() || fen() && !ZW(tM));
  if (!F && !l && i.CLAUDE_CODE_REMOTE) return v(s, "relay_unavailable", q);
  let a = l || tn() && QJe();
  if (F && !xL(Bvr) && !a) return v(s, "relay_not_served", re);
  let n = await mI(e, x(s), f, {
    gatePublicRead: !1,
    relayOnly: !a,
    credentials: h,
    probeToolUseId: d
  });
  if (n.err !== null) {
    let w = n.errorCode === "boot_relay_error";
    if (w && (n.status === 403 || n.status === 404)) return {
      kind: "error",
      reason: "relay_refused",
      message: `${s} failed: published-file reads from a cloud session go through the session gateway's artifact relay, which is not enabled for this session yet; retrying from here will not help`
    };
    if (w && n.status === 401) return {
      kind: "error",
      reason: "relay_unauthorized",
      message: `${s} failed: the session gateway did not accept this session's credential for the artifact relay; retrying from here will not help`
    };
    return {
      kind: "error",
      message: n.err.replace(/^artifact read/, s),
      reason: n.errorCode
    }
  }
  let y = n.assetToken === void 0;
  if (y && !wA()) return v(s, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
  if (y && r?.() !== !0) return c(x(s), x_e), v(s, x_e, kNn, !1);
  let R = n.data.cowritten === !0 || n.data.artifactKind === fR || Mt(e.slug)?.cowritten === !0 || Mt(e.slug)?.artifactKind === fR,
    b = MLe(e.slug, n.data.type),
    k = l7e(n.data.perm?.role === "owner", OLe(n.data.outsideWriter), Mt(e.slug)?.outsideWriter);
  return {
    kind: "ok",
    target: e,
    ver: n.ver,
    assetToken: n.assetToken,
    publicRead: y,
    relay: F && !y,
    frameContent: !F && !y && XYt(n.data),
    credentials: h,
    agentDirect: a,
    cowritten: R,
    typeLocked: b,
    writerClass: TQ(n.data.perm?.role),
    foreign: n.data.authoredByOthers === !0 || Mt(e.slug)?.authoredByOthers === !0 || W2(n.data.outsidersMayHaveWritten) || Mt(e.slug)?.outsidersMayHaveWritten === !0 || n.data.perm?.role !== "owner" || R || b || k,
    outsideOrg: k,
    orgRelation: Q9r(n),
    livePaths: Cir(n.data).map((w) => w.path),
    typePaths: Y9r(n.data.files)?.type ?? [],
    source: J9r(n),
    ...typeof n.data.title === "string" && {
      title: n.data.title
    },
    ...n.data.favicon !== void 0 && {
      favicon: n.data.favicon
    },
    ...n.data.publishPreconditions === !0 && {
      publishPreconditions: !0
    },
    filesCounted: typeof n.data.fileCount === "number" && Number.isSafeInteger(n.data.fileCount) && n.data.fileCount > 0,
    reused: n.reused === !0
  }
}
async function I(e, s, f, h, r, d, l = !0, F = !1) {
  let a = (u, _) => v(f, u, _, l),
    n = (u) => ({
      kind: "status",
      status: u
    }),
    {
      target: y,
      assetToken: R,
      relay: b
    } = e,
    {
      host: k,
      base: w,
      headers: C
    } = QYt(y),
    P = () => (te().contentHostEgressDenied.add(y.env), a("egress_blocked", `this environment's network allowlist blocks ${k}, so the file cannot be fetched (access to the artifact itself is fine). ${e.publicRead?`Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${ZYt(y.env)}`:i.CLAUDE_CODE_REMOTE?"This is a restriction of where this session runs; retrying from here will not help.":`To allow it, add *.frame.${y.env==="staging"?"staging.":""}claudeusercontent.com to the environment's allowed domains.`}`)),
    L = (u, _) => (t(`[artifact] ${f}: egress proxy denied (${_})`), a("egress_denied", `artifact content fetch refused by the environment's egress proxy (${u})`)),
    A = !1,
    S;
  if (e.frameContent && R !== void 0) {
    try {
      S = await JYt(y.slug, s, {
        token: R,
        timeout: D,
        maxContentLength: h,
        signal: r,
        credentials: e.credentials
      })
    } catch (u) {
      if (nl(u) || u instanceof Ke) throw u;
      return F ? n(0) : a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`)
    }
    A = S.kind === "answer"
  }
  let o;
  try {
    if (S?.kind === "answer") o = S;
    else if (b) {
      if (R === void 0) return a("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let u = await YYt(y.slug, s, {
        token: R,
        timeout: D,
        maxContentLength: h,
        signal: r,
        retryBudget: d
      });
      if (!u.ok) return a(u.reason.replace(/-/g, "_"), u.reason === "no-auth" ? Dmt(u.detail) : `artifact content is unreachable from this session (${u.reason})`);
      o = {
        status: u.status,
        headers: u.response.headers,
        data: u.data
      }
    } else {
      let u = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`,
        _ = await hd.get(`${w}${s}${u}`, {
          signal: r,
          timeout: D,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: h,
          validateStatus: () => !0,
          ...C && {
            headers: C
          }
        });
      if (rV(_.status, _.headers)) return P();
      let B = rfe(_.headers);
      if (B !== void 0 && (_.status < 200 || _.status >= 300)) return L(`HTTP ${_.status}`, B);
      o = {
        status: _.status,
        headers: _.headers,
        data: _.data
      }
    }
  } catch (u) {
    if (nl(u) || u instanceof Ke) throw u;
    if (b && !F) CLe();
    let _ = b ? void 0 : yM(u);
    if (_ !== void 0) {
      if (rV(_.connectStatus, _.headers)) return P();
      let B = rfe(_.headers);
      if (B !== void 0) return L(YJ(_.connectStatus), B);
      let W = NFt(_.headers);
      if (W !== void 0) t(`[artifact] ${f}: proxy refused, marker ${W}`);
      return F ? n(0) : a("proxy_refused", `the proxy refused the connection to the artifact's content host (${YJ(_.connectStatus)})`)
    }
    return F ? n(0) : a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`)
  }
  if (F && o.status !== 200) return n(o.status);
  if (!b && !A) te().contentHostEgressDenied.delete(y.env);
  if (b && Emt(o.status)) return a("relay_unavailable", q);
  if (b && vmt(o.status, o.data)) return a("network_off", `${kmt}; retrying from here will not help`);
  if (b && B8(o.status)) return a(`http_${o.status}`, qYt(o.status));
  if (b) CLe(o.status);
  if (o.status === 404) return {
    kind: "status",
    status: 404,
    frameNotFound: o.data !== void 0 && o.data.byteLength <= 256 && oee(Buffer.from(o.data).toString("utf8"))
  };
  if (R === void 0 && o.status === 403 && pGe(o.headers, nfe(o.headers, o.data, (u) => u))) return {
    kind: "status",
    status: 403
  };
  let E = b ? void 0 : DFt({
    status: o.status,
    headers: o.headers,
    data: o.data,
    redact: (u) => Clt(u, R),
    label: `[artifact] ${f}`
  });
  if (E !== void 0) return a(E, LFt[E]);
  if (o.status === 401 || o.status === 403) return a(`http_${o.status}`, b ? "the cloud session's artifact mount refused the read \u2014 file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down");
  if (o.status !== 200) return a(`http_${o.status}`, `unexpected answer from the ${A?"artifact service":"content host"} (HTTP ${o.status})`);
  if (b) yue(tM);
  let T = o.headers,
    O = b || A ? q3e(T) : T?.["content-type"],
    U = String(T?.[Q] ?? "").toLowerCase(),
    Y = String(T?.[Z] ?? "");
  return {
    kind: "ok",
    status: 200,
    bytes: Buffer.from(o.data ?? new ArrayBuffer(0)),
    contentType: typeof O === "string" ? tt(O, ";").trim().toLowerCase() : "",
    ...PB.test(U) && {
      docSha256: U
    },
    .../^\d{1,15}$/.test(Y) && {
      docSeq: Number(Y)
    }
  }
}
async function H(e, s, f, h, r = !0) {
  let d = await I(e, `/_f/${e.ver}/${K}`, s, X + 1, f, h, r);
  if (d.kind !== "ok") return d;
  let l;
  try {
    l = J().safeParse(ee(d.bytes.toString("utf8")))
  } catch {
    return v(s, "bad_json", "the artifact service answered with something other than a file list", r)
  }
  if (!l.success || l.data.ver !== e.ver) return v(s, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", r);
  let F = Object.entries(l.data.files);
  if (F.length > S4t) return v(s, "too_many", `the file list names more than ${S4t} files`, r);
  return {
    kind: "ok",
    files: F.filter(([n]) => n.length <= rA && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(n) && nf(n) && !V9r(n)).map(([n, y]) => ({
      path: n,
      contentType: y.contentType,
      sizeBytes: y.size,
      sha256: y.sha256
    })).sort((n, y) => n.path < y.path ? -1 : n.path > y.path ? 1 : 0),
    narrowed: l.data.narrowed === !0
  }
}
async function tge(e, s, f, h = {}) {
  let r = await N(e, "file list", s, f, h);
  if (r.kind === "error") return r;
  let d = await H(r, "file list", s, K3e());
  if (d.kind === "error") return d;
  if (d.kind === "status") {
    if (d.status === 404 && !r.filesCounted && (!r.relay || d.frameNotFound === !0)) return c("artifact_file_list", "single_page"), {
      kind: "error",
      reason: "single_page",
      message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself",
      ver: r.ver,
      cowritten: r.cowritten,
      typeLocked: r.typeLocked
    };
    if (r.publicRead && d.status === 403) {
      if (await ie(r, s)) return c("artifact_file_list", "single_page"), {
        kind: "error",
        reason: "single_page",
        message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself",
        ver: r.ver,
        cowritten: r.cowritten,
        typeLocked: r.typeLocked
      };
      return v("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now \u2014 it may no longer be public, or it was taken down")
    }
    return m("artifact_file_list", `http_${d.status}`), v("file list", `http_${d.status}`, r.relay ? "not found through this cloud session's artifact mount \u2014 this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", !1)
  }
  return g("artifact_file_list", {
    relay: r.relay,
    files: d.files.length,
    ...r.agentDirect && {
      agent_direct: !0
    },
    ...r.publicRead && {
      public: !0
    },
    ...r.reused && {
      boot_reused: !0
    }
  }), {
    kind: "ok",
    ver: r.ver,
    files: d.files.map((l) => r.livePaths.includes(l.path) ? {
      ...l,
      live: !0
    } : l),
    relay: r.relay,
    agentDirect: r.agentDirect,
    cowritten: r.cowritten,
    typeLocked: r.typeLocked,
    writerClass: r.writerClass,
    foreign: r.foreign,
    outsideOrg: r.outsideOrg,
    publicRead: r.publicRead,
    narrowed: r.publicRead && d.narrowed,
    ...r.typePaths.length > 0 && {
      typePaths: r.typePaths
    },
    ...r.title !== void 0 && {
      title: r.title
    },
    ...r.favicon !== void 0 && {
      favicon: r.favicon
    },
    ...r.publishPreconditions === !0 && {
      publishPreconditions: !0
    }
  }
}

function z(e) {
  return {
    ver: e.ver,
    relay: e.relay,
    agentDirect: e.agentDirect,
    cowritten: e.cowritten,
    typeLocked: e.typeLocked,
    writerClass: e.writerClass,
    foreign: e.foreign,
    outsideOrg: e.outsideOrg,
    ...e.orgRelation === "external" && {
      external: !0
    },
    offOrgRamp: Z9r(e.orgRelation),
    publicRead: e.publicRead,
    ...e.title !== void 0 && {
      title: e.title
    }
  }
}

function G(e, s, f = !0) {
  return v("file read", `http_${s}`, e.relay ? `not found through this cloud session's artifact mount \u2014 no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : e.publicRead ? 'this public artifact serves no file at that path to readers outside its organization \u2014 action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version \u2014 action "list_files" shows the paths', f)
}
async function ie(e, s) {
  let {
    base: f,
    headers: h
  } = QYt(e.target);
  try {
    return (await hd.head(`${f}/_f/${e.ver}/`, {
      signal: s,
      timeout: Sir,
      maxRedirects: 0,
      validateStatus: () => !0,
      ...h && {
        headers: h
      }
    })).status === 200
  } catch (r) {
    if (nl(r) || r instanceof Ke) throw r;
    return !1
  }
}
async function V(e, s, f, h, r, d = !0) {
  let l = s.split("/").map(encodeURIComponent).join("/"),
    F = e.source ? await I(e, eXr(e.ver, l), "file read", bve, f, h, d, !0) : void 0;
  if (F?.kind === "error") return F;
  let a = F?.kind === "ok" ? F : await I(e, `/_f/${e.ver}/${l}`, "file read", bve, f, h, d),
    n = a === F;
  if (a.kind !== "ok") return a;
  if (!U0.test(a.contentType)) return v("file read", "unexpected_type", "the content host served the file with a type this tool does not save", d);
  if (a.bytes.length >= bve) return v("file read", "size", `the file exceeds the ${M(bve)} limit`, d);
  let y = (S) => j("sha256").update(S).digest("hex"),
    R = a.bytes,
    b = y(R),
    k = !0,
    w = "unused",
    C = !1,
    P, L, A = e.livePaths.includes(s);
  if (a.contentType === "text/html") {
    let S = await r(),
      o = S.kind === "ok" ? S.files.find((E) => E.path === s)?.sha256 : void 0;
    if (L = o, o === void 0) w = A ? "live" : "missing", k = !1;
    else if (b === o) w = "verified";
    else {
      let E = n ? void 0 : CAt(a.bytes, (T) => y(T) === o);
      if (E !== void 0) R = E, b = o, w = "verified";
      else w = A ? "live" : "unverified", k = !1
    }
  }
  return {
    kind: "ok",
    path: s,
    bytes: R,
    contentType: a.contentType,
    sha256: b,
    asPublished: k,
    listing: w,
    ...L !== void 0 && {
      listedSha256: L
    },
    docVerified: C,
    ...P !== void 0 && {
      docSeq: P
    },
    ...n && {
      source: !0
    }
  }
}
async function $wn(e, s, f, h, r = {}) {
  let d = U8(s);
  if ("errMsg" in d) return v("file read", "invalid_path", d.errMsg);
  let l = await N(e, "file read", f, h, r);
  if (l.kind === "error") return l;
  let F = K3e(),
    a = await V(l, d.key, f, F, () => H(l, "file read", f, F, !1));
  if (a.kind === "error") return a;
  if (a.kind === "status") return G(l, a.status);
  return {
    ...a,
    ...z(l)
  }
}
var _5o = 4,
  ne = cre;
async function jci(e, s, f, h, {
  byteBudget: r = ne,
  ...d
} = {}) {
  let l = await N(e, "file read", f, h, d);
  if (l.kind === "error") return l;
  let F = K3e(),
    a, n = () => a ??= H(l, "file read", f, F, !1).then((b) => {
      if (b.kind !== "ok") a = void 0;
      return b
    }),
    y = 0;
  return {
    kind: "ok",
    files: await se(s, _5o, async (b) => {
      let k = U8(b);
      if ("errMsg" in k) return {
        ...v("file read", "invalid_path", k.errMsg, !1),
        path: b
      };
      if (y >= r) return {
        kind: "error",
        reason: "batch_budget",
        message: `not fetched: the files read before it in this call already hold ${Math.floor(r/1048576)}MB, the most one read carries \u2014 read it, and any after it, in another call`,
        path: k.key
      };
      if (l.livePaths.includes(k.key)) return {
        kind: "error",
        reason: "live_path",
        message: "this is a live file: read it by itself with `path`, which returns its current state",
        path: k.key
      };
      let w = await V(l, k.key, f, K3e(), n, !1);
      if (w.kind === "status") return {
        ...G(l, w.status, !1),
        path: k.key
      };
      if (w.kind === "ok") y += w.bytes.length;
      return w.kind === "error" ? {
        ...w,
        path: k.key
      } : w
    }),
    ...z(l)
  }
}
async function se(e, s, f) {
  let h = Array(e.length),
    r = 0,
    d = async () => {
      while (r < e.length) {
        let l = r++;
        h[l] = await f(e[l])
      }
    };
  return await Promise.all(Array.from({
    length: Math.min(s, e.length)
  }, () => d())), h
}
export {
  S4t,
  y5o,
  tge,
  $wn,
  _5o,
  jci
};
