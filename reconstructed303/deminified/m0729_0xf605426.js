// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ke } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { mc, nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { x4, e0 } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ste, YU, Gmt, Vmt, qmt, ite } from "B:/~BUN/root/chunk-t78esase.js";
import { Ua } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { uA } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { oMn, dit, W8 } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { z8, pit, fit, Efr, KI, Q7, U4e, _Mn, eU, Qoe, mit, AAe, s8t } from "B:/~BUN/root/chunk-neajqqs3.js";
import { rXe, BE, Mae, xin, BT } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { mD } from "B:/~BUN/root/chunk-p64g0hj8.js";
import { kE, Bpr, eq, XA, zY, fue, Wbe, P4e, k5t, E5t, T5t, C5t, O4e, ioo, aoo, loo, doo, Ypr as timeout_2, R5t, A5t, Zst } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { lIe, dIe, tje, kt, Cke } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { BL, HP } from "B:/~BUN/root/chunk-qf6y2ts9.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { ge, mn, Vo, St, hg } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { createHash as j } from "crypto";
var K = "_files.json",
  hRt = 4096,
  hno = mD,
  X = 16777216,
  timeout = 90000,
  Q = "x-frame-doc-sha256",
  Z = "x-frame-doc-seq",
  te = f(() => St({
    ver: ge(),
    files: hg(St({
      sha256: ge().regex(BL),
      size: mn().int().nonnegative().max(hno),
      contentType: ge().regex(HP)
    })),
    narrowed: Vo().optional()
  }));
function x(e) {
  return e === "file list" ? "artifact_file_list" : "artifact_file_read";
}
function v(e, reason, c, h = !0) {
  if (h) m(x(e), reason);
  return {
    kind: "error",
    message: `${e} failed: ${c}`,
    reason: reason
  };
}
function M(e) {
  let n = e - 1;
  return n >= 1048576 ? `${n >> 20} MiB` : `${n >> 10} KiB`;
}
var W = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help",
  re = "published-file reads aren't available from this kind of session; retrying from here will not help";
async function N(target, n, c, credentials, {
  admitPublicRead: admitPublicRead,
  probeToolUseId: probeToolUseId
}) {
  if (!ar.test(target.slug)) return v(n, "invalid_slug", "not a valid artifact id");
  let l = _Mn(),
    F = !l && (Q7() || s8t() && !eU(uA));
  if (!F && !l && a.CLAUDE_CODE_REMOTE) return v(n, "relay_unavailable", W);
  let agentDirect = l || fr() && U4e();
  if (F && !KI(Efr) && !agentDirect) return v(n, "relay_not_served", re);
  let i = await XA(target, x(n), c, {
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
  if (publicRead && !BE()) return v(n, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
  if (publicRead && admitPublicRead?.() !== !0) return p(x(n), Mae), v(n, Mae, xin, !1);
  let cowritten = i.data.cowritten === !0 || i.data.artifactKind === BT || kt(target.slug)?.cowritten === !0 || kt(target.slug)?.artifactKind === BT,
    typeLocked = Cke(target.slug, i.data.type),
    outsideOrg = tje(i.data.perm?.role === "owner", dIe(i.data.outsideWriter), kt(target.slug)?.outsideWriter);
  return {
    kind: "ok",
    target: target,
    ver: i.ver,
    assetToken: i.assetToken,
    publicRead: publicRead,
    relay: F && !publicRead,
    frameContent: !F && !publicRead && T5t(i.data),
    credentials: credentials,
    agentDirect: agentDirect,
    cowritten: cowritten,
    typeLocked: typeLocked,
    writerClass: fue(i.data.perm?.role),
    foreign: i.data.authoredByOthers === !0 || kt(target.slug)?.authoredByOthers === !0 || i.data.perm?.role !== "owner" || cowritten || typeLocked || outsideOrg,
    outsideOrg: outsideOrg,
    orgRelation: aoo(i),
    livePaths: oMn(i.data).map(item => item.path),
    source: ioo(i),
    ...(typeof i.data.title === "string" && {
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
async function I(e, n, c, maxContentLength, signal, retryBudget, l = !0, F = !1) {
  let s = (u, _) => v(c, u, _, l),
    i = status => ({
      kind: "status",
      status: status
    }),
    {
      target: target_2,
      assetToken: R,
      relay: relay
    } = e,
    {
      host: host,
      base: base,
      headers: headers
    } = R5t(target_2),
    B = () => (ee().contentHostEgressDenied.add(target_2.env), s("egress_blocked", `this environment's network allowlist blocks ${host}, so the file cannot be fetched (access to the artifact itself is fine). ${e.publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${A5t(target_2.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.frame.${target_2.env === "staging" ? "staging." : ""}claudeusercontent.com to the environment's allowed domains.`}`)),
    L = (u, _) => (t(`[artifact] ${c}: egress proxy denied (${_})`), s("egress_denied", `artifact content fetch refused by the environment's egress proxy (${u})`)),
    A = !1,
    S;
  if (e.frameContent && R !== void 0) {
    try {
      S = await C5t(target_2.slug, n, {
        token: R,
        timeout: timeout,
        maxContentLength: maxContentLength,
        signal: signal,
        credentials: e.credentials
      });
    } catch (error) {
      if (Ua(error) || error instanceof Ke) throw error;
      return F ? i(0) : s("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(maxContentLength)} limit`);
    }
    A = S.kind === "answer";
  }
  let o;
  try {
    if (S?.kind === "answer") o = S;else if (relay) {
      if (R === void 0) return s("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let u = await E5t(target_2.slug, n, {
        token: R,
        timeout: timeout,
        maxContentLength: maxContentLength,
        signal: signal,
        retryBudget: retryBudget
      });
      if (!u.ok) return s(u.reason.replace(/-/g, "_"), u.reason === "no-auth" ? rXe(u.detail) : `artifact content is unreachable from this session (${u.reason})`);
      o = {
        status: u.status,
        headers: u.response.headers,
        data: u.data
      };
    } else {
      let u = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`,
        _ = await sl.get(`${base}${n}${u}`, {
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
      if (YU(_.status, _.headers)) return B();
      let C = ite(_.headers);
      if (C !== void 0 && (_.status < 200 || _.status >= 300)) return L(`HTTP ${_.status}`, C);
      o = {
        status: _.status,
        headers: _.headers,
        data: _.data
      };
    }
  } catch (error) {
    if (Ua(error) || error instanceof Ke) throw error;
    if (relay && !F) AAe();
    let _ = relay ? void 0 : e0(error);
    if (_ !== void 0) {
      if (YU(_.connectStatus, _.headers)) return B();
      let C = ite(_.headers);
      if (C !== void 0) return L(x4(_.connectStatus), C);
      let q = qmt(_.headers);
      if (q !== void 0) t(`[artifact] ${c}: proxy refused, marker ${q}`);
      return F ? i(0) : s("proxy_refused", `the proxy refused the connection to the artifact's content host (${x4(_.connectStatus)})`);
    }
    return F ? i(0) : s("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(maxContentLength)} limit`);
  }
  if (F && o.status !== 200) return i(o.status);
  if (!relay && !A) ee().contentHostEgressDenied.delete(target_2.env);
  if (relay && mit(o.status)) return s("relay_unavailable", W);
  if (relay && fit(o.status, o.data)) return s("network_off", `${pit}; retrying from here will not help`);
  if (relay && zY(o.status)) return s(`http_${o.status}`, k5t(o.status));
  if (relay) AAe(o.status);
  if (o.status === 404) return {
    kind: "status",
    status: 404,
    frameNotFound: o.data !== void 0 && o.data.byteLength <= 256 && z8(Buffer.from(o.data).toString("utf8"))
  };
  if (R === void 0 && o.status === 403 && lIe(o.headers, ste(o.headers, o.data, u => u))) return {
    kind: "status",
    status: 403
  };
  let E = relay ? void 0 : Gmt({
    status: o.status,
    headers: o.headers,
    data: o.data,
    redact: u => Zst(u, R),
    label: `[artifact] ${c}`
  });
  if (E !== void 0) return s(E, Vmt[E]);
  if (o.status === 401 || o.status === 403) return s(`http_${o.status}`, relay ? "the cloud session's artifact mount refused the read \u2014 file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down");
  if (o.status !== 200) return s(`http_${o.status}`, `unexpected answer from the ${A ? "artifact service" : "content host"} (HTTP ${o.status})`);
  if (relay) Qoe(uA);
  let T = o.headers,
    O = relay || A ? O4e(T) : T?.["content-type"],
    docSha256 = String(T?.[Q] ?? "").toLowerCase(),
    Y = String(T?.[Z] ?? "");
  return {
    kind: "ok",
    status: 200,
    bytes: Buffer.from(o.data ?? new ArrayBuffer(0)),
    contentType: typeof O === "string" ? nt(O, ";").trim().toLowerCase() : "",
    ...(BL.test(docSha256) && {
      docSha256: docSha256
    }),
    ...(/^\d{1,15}$/.test(Y) && {
      docSeq: Number(Y)
    })
  };
}
async function H(e, n, c, h, r = !0) {
  let d = await I(e, `/_f/${e.ver}/${K}`, n, X + 1, c, h, r);
  if (d.kind !== "ok") return d;
  let l;
  try {
    l = te().safeParse(J(d.bytes.toString("utf8")));
  } catch {
    return v(n, "bad_json", "the artifact service answered with something other than a file list", r);
  }
  if (!l.success || l.data.ver !== e.ver) return v(n, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", r);
  let F = Object.entries(l.data.files);
  if (F.length > hRt) return v(n, "too_many", `the file list names more than ${hRt} files`, r);
  return {
    kind: "ok",
    files: F.filter(([i]) => i.length <= kE && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(i) && mc(i) && !Bpr(i)).map(([path, y]) => ({
      path: path,
      contentType: y.contentType,
      sizeBytes: y.size,
      sha256: y.sha256
    })).sort((itemA, itemB) => itemA.path < itemB.path ? -1 : itemA.path > itemB.path ? 1 : 0),
    narrowed: l.data.narrowed === !0
  };
}
async function joe(e, n, c, h = {}) {
  let r = await N(e, "file list", n, c, h);
  if (r.kind === "error") return r;
  let d = await H(r, "file list", n, P4e());
  if (d.kind === "error") return d;
  if (d.kind === "status") {
    if (d.status === 404 && !r.filesCounted && (!r.relay || d.frameNotFound === !0)) return p("artifact_file_list", "single_page"), {
      kind: "error",
      reason: "single_page",
      message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself",
      ver: r.ver,
      cowritten: r.cowritten,
      typeLocked: r.typeLocked
    };
    if (r.publicRead && d.status === 403) {
      if (await ie(r, n)) return p("artifact_file_list", "single_page"), {
        kind: "error",
        reason: "single_page",
        message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself",
        ver: r.ver,
        cowritten: r.cowritten,
        typeLocked: r.typeLocked
      };
      return v("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now \u2014 it may no longer be public, or it was taken down");
    }
    return m("artifact_file_list", `http_${d.status}`), v("file list", `http_${d.status}`, r.relay ? "not found through this cloud session's artifact mount \u2014 this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", !1);
  }
  return g("artifact_file_list", {
    relay: r.relay,
    files: d.files.length,
    ...(r.agentDirect && {
      agent_direct: !0
    }),
    ...(r.publicRead && {
      public: !0
    }),
    ...(r.reused && {
      boot_reused: !0
    })
  }), {
    kind: "ok",
    ver: r.ver,
    files: d.files.map(item => r.livePaths.includes(item.path) ? {
      ...item,
      live: !0
    } : item),
    relay: r.relay,
    agentDirect: r.agentDirect,
    cowritten: r.cowritten,
    typeLocked: r.typeLocked,
    writerClass: r.writerClass,
    foreign: r.foreign,
    outsideOrg: r.outsideOrg,
    publicRead: r.publicRead,
    narrowed: r.publicRead && d.narrowed,
    ...(r.title !== void 0 && {
      title: r.title
    }),
    ...(r.favicon !== void 0 && {
      favicon: r.favicon
    }),
    ...(r.publishPreconditions === !0 && {
      publishPreconditions: !0
    })
  };
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
    ...(e.orgRelation === "external" && {
      external: !0
    }),
    offOrgRamp: loo(e.orgRelation),
    publicRead: e.publicRead,
    ...(e.title !== void 0 && {
      title: e.title
    })
  };
}
function G(e, n, c = !0) {
  return v("file read", `http_${n}`, e.relay ? `not found through this cloud session's artifact mount \u2014 no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : e.publicRead ? 'this public artifact serves no file at that path to readers outside its organization \u2014 action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version \u2014 action "list_files" shows the paths', c);
}
async function ie(e, signal_2) {
  let {
    base: base_2,
    headers: headers_2
  } = R5t(e.target);
  try {
    return (await sl.head(`${base_2}/_f/${e.ver}/`, {
      signal: signal_2,
      timeout: timeout_2,
      maxRedirects: 0,
      validateStatus: () => !0,
      ...(headers_2 && {
        headers: headers_2
      })
    })).status === 200;
  } catch (error) {
    if (Ua(error) || error instanceof Ke) throw error;
    return !1;
  }
}
async function V(e, path_2, c, h, r, d = !0) {
  let l = path_2.split("/").map(encodeURIComponent).join("/"),
    F = e.source ? await I(e, doo(e.ver, l), "file read", Wbe, c, h, d, !0) : void 0;
  if (F?.kind === "error") return F;
  let s = F?.kind === "ok" ? F : await I(e, `/_f/${e.ver}/${l}`, "file read", Wbe, c, h, d),
    i = s === F;
  if (s.kind !== "ok") return s;
  if (!HP.test(s.contentType)) return v("file read", "unexpected_type", "the content host served the file with a type this tool does not save", d);
  if (s.bytes.length >= Wbe) return v("file read", "size", `the file exceeds the ${M(Wbe)} limit`, d);
  let y = S => j("sha256").update(S).digest("hex"),
    bytes = s.bytes,
    sha256 = y(bytes),
    asPublished = !0,
    listing = "unused",
    docVerified = !1,
    docSeq,
    listedSha256,
    A = e.livePaths.includes(path_2);
  if (s.contentType === "text/html") {
    let S = await r(),
      o = S.kind === "ok" ? S.files.find(item => item.path === path_2)?.sha256 : void 0;
    if (listedSha256 = o, o === void 0) listing = A ? "live" : "missing", asPublished = !1;else if (sha256 === o) listing = "verified";else {
      let E = i ? void 0 : dit(s.bytes, T => y(T) === o);
      if (E !== void 0) bytes = E, sha256 = o, listing = "verified";else listing = A ? "live" : "unverified", asPublished = !1;
    }
  }
  return {
    kind: "ok",
    path: path_2,
    bytes: bytes,
    contentType: s.contentType,
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
async function U3t(e, n, c, h, r = {}) {
  let d = eq(n);
  if ("errMsg" in d) return v("file read", "invalid_path", d.errMsg);
  let l = await N(e, "file read", c, h, r);
  if (l.kind === "error") return l;
  let F = P4e(),
    s = await V(l, d.key, c, F, () => H(l, "file read", c, F, !1));
  if (s.kind === "error") return s;
  if (s.kind === "status") return G(l, s.status);
  return {
    ...s,
    ...z(l)
  };
}
var yno = 4,
  ne = W8;
async function Els(e, n, c, h, {
  byteBudget = ne,
  ...d
} = {}) {
  let l = await N(e, "file read", c, h, d);
  if (l.kind === "error") return l;
  let F = P4e(),
    s,
    i = () => s ??= H(l, "file read", c, F, !1).then(b => {
      if (b.kind !== "ok") s = void 0;
      return b;
    }),
    y = 0;
  return {
    kind: "ok",
    files: await se(n, yno, async path_3 => {
      let k = eq(path_3);
      if ("errMsg" in k) return {
        ...v("file read", "invalid_path", k.errMsg, !1),
        path: path_3
      };
      if (y >= byteBudget) return {
        kind: "error",
        reason: "batch_budget",
        message: `not fetched: the files read before it in this call already hold ${Math.floor(byteBudget / 1048576)}MB, the most one read carries \u2014 read it, and any after it, in another call`,
        path: k.key
      };
      if (l.livePaths.includes(k.key)) return {
        kind: "error",
        reason: "live_path",
        message: "this is a live file: read it by itself with `path`, which returns its current state",
        path: k.key
      };
      let w = await V(l, k.key, c, P4e(), i, !1);
      if (w.kind === "status") return {
        ...G(l, w.status, !1),
        path: k.key
      };
      if (w.kind === "ok") y += w.bytes.length;
      return w.kind === "error" ? {
        ...w,
        path: k.key
      } : w;
    }),
    ...z(l)
  };
}
async function se(e, n, c) {
  let h = Array(e.length),
    r = 0,
    d = async () => {
      while (r < e.length) {
        let l = r++;
        h[l] = await c(e[l]);
      }
    };
  return await Promise.all(Array.from({
    length: Math.min(n, e.length)
  }, () => d())), h;
}
export { hRt, hno, joe, U3t, yno, Els };