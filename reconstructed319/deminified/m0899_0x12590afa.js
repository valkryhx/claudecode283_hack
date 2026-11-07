// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ke, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { sa, t, _, Zy, LHr, Og, ps, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { tM, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { nl } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { YJ, yM } from "B:/~BUN/root/chunk-wthaftk0.js";
import { wy, hr } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { tU, xu } from "B:/~BUN/root/chunk-17caj8fw.js";
import { kmt, vmt, Lq, xL, sse, QJe, XLn, vLt, ZW, ise, yue, ZJe, dmo, Emt, CLe, Wvr, umo, fen } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { nfe, rV, DFt, LFt, NFt, rfe } from "B:/~BUN/root/chunk-b5ry9py2.js";
import { jIe, wge } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { Dmt, Tb, wA, x_e as reason_4, kNn } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { _lt, G0, mI, B8, K3e, qYt, YYt, XYt, JYt, q3e, QYt, ZYt, Clt } from "B:/~BUN/root/chunk-gjq813eb.js";
import { pGe, Pen, MLt } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { Srr } from "B:/~BUN/root/chunk-an0nxdkx.js";
import { ge, Mn, ws, vr, Ft, Lp } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { closeSync as ee, constants as _e, fstatSync as fe, lstatSync as j, openSync as ye, read as be, realpathSync as Ae } from "fs";
import { extname as ke } from "path";
import { promisify as Se } from "util";
function Uwn() {
  return i.CLAUDE_CODE_ARTIFACT_ASSETS ?? (QJe() || (Srr().capabilities?.includes("assets") ?? !1));
}
function Wci() {
  if (i.CLAUDE_CODE_ARTIFACT_ASSETS !== void 0) return "env";
  return QJe() ? "agent" : Srr().source;
}
var q = "image/svg+xml",
  we = 2097152;
function w4t(e) {
  return e === q ? we : tU;
}
var H = new Map([[".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".gif", "image/gif"], [".webp", "image/webp"], [".svg", q], [".mp4", "video/mp4"], [".webm", "video/webm"], [".pdf", "application/pdf"], [".woff2", "font/woff2"], [".woff", "font/woff"], [".ttf", "font/ttf"], [".otf", "font/otf"], [".csv", "text/csv"], [".md", "text/markdown"], [".markdown", "text/markdown"], [".json", "application/json"], [".txt", "text/plain"], [".ts", "text/plain"], [".css", "text/css"], [".js", "text/javascript"], [".mjs", "text/javascript"], [".cjs", "text/javascript"]]),
  zci = L(H.values()).flatMap(item => O5r(item) ?? []),
  k4t = [...H.keys()].map(item => item.slice(1)).join(", ");
function XBe(e) {
  return H.get(ke(e).toLowerCase());
}
var ve = new Set(["text/csv", "text/markdown", "application/json", "text/plain"]);
function v4t(e) {
  return e !== void 0 && ve.has(e);
}
var message_2 = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again",
  message_3 = "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted",
  message_4 = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first",
  message_5 = "file_path must name a regular file to upload",
  jwn = "the file is empty \u2014 nothing to upload";
function Wwn(e, r) {
  return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var message_6 = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";
function B(e) {
  if (K(e)) return {
    kind: "missing"
  };
  let errnoCode = k(e);
  return {
    kind: "error",
    reason: "read_error",
    message: `cannot read file_path (${errnoCode ?? "unexpected error"})`,
    errnoCode: errnoCode
  };
}
function _Rt(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function Gci(e) {
  let r = e.split(":");
  if (r.length !== 4 || !r.every(item => /^\d+$/.test(item))) return;
  return Number(r[2]);
}
var message = "upload_asset reads only local files \u2014 file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";
function HK(e) {
  if (_lt(e)) return {
    kind: "network"
  };
  let r = Og(ie(), e);
  if (r === Zy) return {
    kind: "unresolved",
    error: LHr(e)
  };
  if (r !== void 0 && _lt(r) || G0(e)) return {
    kind: "network"
  };
  let real;
  try {
    real = Ae(e);
  } catch (error) {
    return {
      kind: "unresolved",
      error: error
    };
  }
  return _lt(real) ? {
    kind: "network"
  } : {
    kind: "resolved",
    real: real
  };
}
function bRt(real_2) {
  try {
    let r = j(real_2, {
      bigint: !0
    });
    return {
      real: real_2,
      identity: _Rt(r),
      ...(r.isFile() && r.nlink > 1n && {
        linked: !0
      })
    };
  } catch {
    return {
      real: real_2,
      identity: null
    };
  }
}
function Knr(e, r = HK(e), s = r.kind !== "network" && xe(e)) {
  return v4t(XBe(e)) || r.kind === "resolved" && v4t(XBe(r.real)) || s;
}
function xe(e) {
  return JBe(e).link;
}
function JBe(e) {
  try {
    return {
      link: j(e).isSymbolicLink(),
      unreadable: null
    };
  } catch (error) {
    return {
      link: !0,
      unreadable: k(error) ?? "unexpected error"
    };
  }
}
var ue = Se(be);
function b5o(e, r, s, d) {
  let n = r,
    u = typeof n === "object" && n !== null && typeof n.real === "string" ? {
      real: n.real,
      identity: typeof n.identity === "string" && (n.digest === void 0 || typeof n.digest === "string") ? n.identity : null,
      ...(typeof n.digest === "string" && {
        digest: n.digest
      })
    } : void 0,
    a = HK(e);
  if (a.kind === "network") return {
    kind: "error",
    reason: "network",
    message: message
  };
  if (a.kind === "unresolved") {
    if (u !== void 0 && u.identity !== null) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    let h = ps(e).slice(1).map(s);
    return h.includes("deny") ? {
      kind: "error",
      reason: "read_denied",
      message: message_3
    } : h.some(item => item !== "allow") ? {
      kind: "error",
      reason: "via_link",
      message: message_4
    } : B(a.error);
  }
  let {
      real: real_3
    } = a,
    l = real_3 === e ? void 0 : s(real_3);
  if (l === "deny") return {
    kind: "error",
    reason: "read_denied",
    message: message_3
  };
  if (u !== void 0) {
    if (real_3 !== u.real) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
  } else if (l !== void 0 && l !== "allow") return {
    kind: "error",
    reason: "via_link",
    message: message_4
  };
  let v;
  try {
    v = j(real_3, {
      bigint: !0
    });
  } catch (error) {
    return u !== void 0 && K(error) ? {
      kind: "error",
      reason: "changed",
      message: message_2
    } : B(error);
  }
  if (v.isSymbolicLink()) return {
    kind: "error",
    reason: "changed",
    message: message_2
  };
  if (!v.isFile()) return {
    kind: "error",
    reason: "not_a_file",
    message: message_5
  };
  if (u === void 0 && v.nlink > 1n) return {
    kind: "error",
    reason: "hard_link",
    message: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and upload the copy"
  };
  let f = 0,
    fd;
  try {
    fd = ye(real_3, _e.O_RDONLY | f);
  } catch (error) {
    if (k(error) === "ELOOP") return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    return B(error);
  }
  let R = !1;
  try {
    let h = fe(fd, {
      bigint: !0
    });
    if (!h.isFile()) return {
      kind: "error",
      reason: "not_a_file",
      message: message_5
    };
    if (sa(h.ino)) return {
      kind: "error",
      reason: "no_identity",
      message: message_6
    };
    if (_Rt(h) !== (u !== void 0 ? u.identity : _Rt(v))) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    try {
      let C = HK(e);
      if (C.kind !== "resolved" || C.real !== real_3) return {
        kind: "error",
        reason: "changed",
        message: message_2
      };
      let D = j(real_3, {
        bigint: !0
      });
      if (D.dev !== h.dev || D.ino !== h.ino) return {
        kind: "error",
        reason: "changed",
        message: message_2
      };
    } catch {
      return {
        kind: "error",
        reason: "changed",
        message: message_2
      };
    }
    let b = Number(h.size);
    if (b === 0 || b > d) return {
      kind: "error",
      reason: "size",
      message: b === 0 ? jwn : Wwn(b, d),
      sizeBytes: b
    };
    return R = !0, {
      kind: "opened",
      fd: fd,
      size: b,
      real: real_3,
      identity: _Rt(h),
      digest: u?.digest
    };
  } catch (error) {
    return B(error);
  } finally {
    if (!R) ee(fd);
  }
}
async function S5o(e) {
  let {
    fd: fd_2,
    size: size,
    identity: identity,
    digest: digest
  } = e;
  try {
    if (_Rt(fe(fd_2, {
      bigint: !0
    })) !== identity) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    let bytes = Buffer.allocUnsafe(size),
      a = 0;
    while (a < size) {
      let {
        bytesRead: bytesRead
      } = await ue(fd_2, bytes, a, size - a, a);
      if (bytesRead === 0) break;
      a += bytesRead;
    }
    let {
      bytesRead: bytesRead_2
    } = await ue(fd_2, Buffer.alloc(1), 0, 1, size);
    if (a !== size || bytesRead_2 !== 0) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    if (digest !== void 0 && nt(bytes) !== digest) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    return {
      kind: "ok",
      bytes: bytes
    };
  } catch (error) {
    return B(error);
  } finally {
    ee(fd_2);
  }
}
function w5o(e) {
  try {
    ee(e.fd);
  } catch {}
}
async function E4t(e, r, s, d) {
  let n = b5o(e, r, s, d);
  return n.kind === "opened" ? S5o(n) : n;
}
var Ee = new Set(["invalid_request", "too_large", "unsupported_type", "quota_or_state", "rate_limited", "capability_disabled", "store_unavailable", "upstream_error", "credential_rejected", "not_found", "asset_not_found", "not_copyable"]),
  eve = /^\/?_blob\/[0-9a-f]{32}$/;
function re(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var PB = /^[0-9a-f]{64}$/,
  limit = 50,
  qnr = 40,
  Wle = /^[A-Za-z0-9_=-]{1,4096}$/,
  k5o = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/,
  U0 = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/,
  nge = 10,
  iF = 25,
  tve = 1024,
  pe = p(() => Ft({
    opaque_id: ge().regex(wy),
    url: ge().optional().catch(void 0),
    size_bytes: Mn().int().nonnegative(),
    content_type: ge().regex(U0),
    sha256: ge().regex(PB).optional()
  })),
  Te = p(() => Ft({
    assets: vr(Ft({
      opaque_id: ge().regex(wy),
      url: ge().optional().catch(void 0),
      content_type: ge().regex(U0).max(qnr),
      size_bytes: Mn().int().nonnegative().max(tU),
      sha256: ge().regex(PB).optional(),
      created_at: ge().regex(k5o).max(qnr)
    })).max(1000),
    usage: Ft({
      files: Mn().int().nonnegative(),
      bytes: Mn().int().nonnegative(),
      max_files: Mn().int().nonnegative(),
      max_bytes: Mn().int().nonnegative()
    }),
    next: ge().regex(Wle).or(Lp("")).nullish().transform(e => e || void 0),
    cowritten: Lp(!0).optional().catch(void 0),
    outside_writer: ws().optional().catch(void 0)
  })),
  Fe = p(() => Ft({
    deleted: ws()
  })),
  $e = p(() => Ft({
    error: Ft({
      code: ge(),
      message: ge().optional()
    })
  })),
  Oe = p(() => Ft({
    error: ge(),
    reason: ge()
  })),
  Ce = 20000,
  ne = 30000,
  Le = 90000;
function De(e) {
  return `/api/frame/blob/${e}/agent-upload`;
}
function me(e) {
  return `/api/frame/blob/${e}/agent-list`;
}
function Me(e, r) {
  return `/api/frame/blob/${e}/${r}/agent-delete`;
}
function Pe(e) {
  return `/api/frame/blob/${e}/agent-copy`;
}
function U(e, r) {
  let s = $e().safeParse(r);
  if (s.success) {
    let d = s.data.error.code;
    if (Ee.has(d)) {
      let detail = s.data.error.message && Z(s.data.error.message);
      return {
        code: d,
        reason: d,
        ...(detail && {
          detail: detail
        })
      };
    }
    return {
      code: "upstream_error",
      reason: "unknown_code"
    };
  }
  if (e === 403 || e === 503) {
    let d = Oe().safeParse(r);
    if (d.success) return {
      code: "policy_denied",
      reason: "policy_denied",
      detail: Z(d.data.error)
    };
  }
  if (e === 403) {
    if (typeof r === "string" && r.trim() === "not a writer") return {
      code: "not_writer",
      reason: "not_writer"
    };
    if (typeof r === "string" && /^\s*</.test(r)) return {
      code: "upstream_error",
      reason: "http_403_page"
    };
    return {
      code: "credential_rejected",
      reason: "http_403"
    };
  }
  if (e === 404) return typeof r === "string" && r.trim() === "not found" ? {
    code: "not_found",
    reason: "http_404"
  } : {
    code: "store_unavailable",
    reason: "unrouted",
    detail: "this asset route is not served on this path yet (an older deployment, or a cloud session whose gateway does not relay it) \u2014 nothing changed; retry later"
  };
  if (e === 401) return {
    code: "upstream_auth",
    reason: "http_401"
  };
  if (e === 409) return {
    code: "quota_or_state",
    reason: "http_409"
  };
  if (e === 413) return {
    code: "too_large",
    reason: "http_413"
  };
  if (e === 415) return {
    code: "unsupported_type",
    reason: "http_415"
  };
  if (e === 429) return {
    code: "rate_limited",
    reason: "http_429"
  };
  if (e === 502 || e === 503 || e === 504) return {
    code: "store_unavailable",
    reason: `http_${e}`
  };
  return {
    code: "upstream_error",
    reason: `http_${e}`
  };
}
function Z(e) {
  return Q(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function Be(e, r, s = "upload", d) {
  let n = `asset ${s} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${n}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;
    case "unsupported_type":
      return `${n}: ${r ?? `only these file types are accepted: ${k4t}`}`;
    case "quota_or_state":
      return `${n}: ${r ?? (s === "upload" || s === "copy" ? "the Artifact cannot take uploads right now \u2014 it is a live document, unpublished, retired, being deleted, or over its asset storage quota" : "the Artifact has no asset store right now \u2014 it is a live document, unpublished, retired, or being deleted")}`;
    case "rate_limited":
      return `${n}: calling too often \u2014 wait${r ? ` ${r}` : ""} before retrying, and never loop`;
    case "upstream_auth":
      return `${n}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "capability_disabled":
      return `${n}: the Artifact's published version does not declare the assets capability \u2014 republish it with assets: {} added to its declared capabilities, then retry`;
    case "store_unavailable":
      return `${n}: ${r ?? `the asset store is unavailable right now \u2014 retry once after a short wait${s === "upload" ? " (an upload that timed out upstream may already be stored; a duplicate costs only quota)" : ""}`}`;
    case "upstream_error":
      return `${n}: unexpected answer from the server${r ? ` (${r})` : ""}`;
    case "not_found":
      return s === "copy" && d === "not_found" ? `${n}: the SOURCE Artifact (from_url) does not exist, is not one this session can open, or cannot be copied from \u2014 the cases are deliberately indistinguishable; check from_url with action "list", scope "shared"` : `${n}: no such Artifact, or artifact assets are not available to this account or Artifact \u2014 the cases are deliberately indistinguishable; check the url with action "list"`;
    case "asset_not_found":
      return `${n}: ${r ?? "the source Artifact holds no asset with one of the given ids"} \u2014 run action "list_assets" on from_url for its current ids; nothing was copied`;
    case "not_copyable":
      return `${n}: ${r ?? "this source cannot be copied from"}; nothing was copied`;
    case "not_writer":
      return `${n}: this account can open the Artifact but not edit it \u2014 only writers can ${s === "copy" ? "copy assets into it" : `${s} assets`}`;
    case "credential_rejected":
      return `${n}: the server refused this session's credential at the asset door \u2014 not an access or existence answer; report this as a client/server integration fault${r ? ` (${r})` : ""}`;
    case "policy_denied":
      return `${n}: ${r ?? "blocked by the organization's artifact policy"}`;
    case "unavailable_to_account":
      return `${n}: artifact assets are not available to this account`;
  }
}
function G(e, r) {
  return (code, reason, n) => (e(reason), {
    kind: "error",
    code: code,
    message: Be(code, n, r, reason),
    reason: reason
  });
}
var Ne = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function Y(e, signal) {
  let {
      verb: verb,
      route: route,
      body: body,
      contentType: contentType,
      marks: marks,
      fail: fail
    } = e,
    l = failure => ({
      replied: !1,
      failure: failure
    }),
    v = QJe();
  if (v) marks.agent_direct = !0;
  let f = fen() || sse() && vLt(Lq),
    E = !v && f && !ZW(Lq),
    R = !v && !f && sse() || E,
    h = () => l(fail("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
  if (!R && !v && i.CLAUDE_CODE_REMOTE) return h();
  if (R && !xL(Lq)) return l(fail("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
  let session = te();
  if (!session.assetsOnRoster) {
    let F = session.accountEpoch,
      x = session.roster === void 0,
      roster = session.roster ?? (await wge({
        timeoutMs: 5000,
        signal: signal,
        credentials: e.credentials
      }));
    if ("err" in roster) marks[`roster_${roster.cause}`] = !0;else if (x && !jIe({
      session: session,
      epoch: F,
      roster: roster,
      storageV5: void 0
    }).adopted) marks.roster_outlived = !0;else if (!roster.capabilities.includes("assets")) if (!R) return l(fail("unavailable_to_account", "roster_no_assets"));else marks.roster_no_assets = !0;
  }
  let C = {
      maxRedirects: 0,
      headers: {
        ...xu(),
        "Content-Type": contentType,
        Accept: "application/json"
      },
      ...(e.verb === "upload" ? {
        streamUpload: {
          tailFloorMs: () => Le,
          onSettled: F => {
            if (F.stalled) marks.stalled = !0;
          }
        }
      } : {
        timeout: e.timeoutMs
      }),
      ...(e.maxBodyLength !== void 0 && {
        maxBodyLength: e.maxBodyLength
      }),
      maxContentLength: 262144,
      validateStatus: () => !0,
      signal: signal
    },
    D = async () => R ? (await Wvr("POST", route, body, C, Lq)).res : jt.post(route, body, {
      ...C,
      host: "frame",
      auth: "claude-ai-oauth",
      refreshOAuth: !0,
      credentials: e.credentials
    }),
    S;
  try {
    if (E && e.verb === "upload" && !ZJe(Lq)) {
      let x;
      try {
        x = (await Wvr("POST", e.probeRoute, _({
          limit: 1
        }), {
          maxRedirects: 0,
          headers: {
            ...xu(),
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          timeout: ne,
          maxContentLength: 262144,
          validateStatus: () => !0,
          signal: signal
        }, Lq)).res;
      } catch (error) {
        if (nl(error) || error instanceof Ke) throw error;
        return ise(Lq, !0), l(fail("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe"));
      }
      let T = umo(x);
      if (T.refused) return ise(Lq), h();
      if (!T.vouched) {
        if (!x.ok || x.status >= 500 || x.status === 499) ise(Lq, !0);
        return l(fail("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later"));
      }
      yue(Lq);
    }
    let F = x => {
      if (!E) return !1;
      let T = umo(x);
      if (T.refused && !(x.ok && x.status === 413)) return ise(Lq), dmo(Lq), !0;
      if (T.vouched) yue(Lq);else if (!ZJe(Lq) && (!x.ok || x.status >= 500 || x.status === 499)) ise(Lq, !0);
      return !1;
    };
    if (S = await D(), F(S)) return h();
    if (S.ok && (S.status === 429 || S.status === 503) && U(S.status, S.data).code !== "policy_denied") {
      let x = S.response.headers?.["retry-after"],
        T = y_(typeof x === "string" ? x : void 0);
      if (T !== void 0 && T <= Ce) {
        if (await J(T, signal), signal.aborted) throw new Ke();
        if (marks.retried = !0, S = await D(), F(S)) return h();
      }
    }
  } catch (error) {
    if (nl(error) || error instanceof Ke) throw error;
    if (E && !ZJe(Lq)) ise(Lq, !0);
    if (yM(error) !== void 0) return l(fail("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent \u2014 one retry is safe"));
    return l(fail("store_unavailable", "request_error", verb === "upload" ? "the request failed in transit or timed out \u2014 a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)" : verb === "copy" ? 'the request failed in transit or timed out \u2014 a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out \u2014 one retry is safe"));
  }
  if (!S.ok) return l({
    ...fail("store_unavailable", S.reason.replace(/-/g, "_")),
    message: S.reason === "no-auth" ? R ? Dmt(S.detail) : Tb(S.detail) : `asset ${verb} unavailable: ${S.reason}`
  });
  if (v && S.status === 403 && U(S.status, S.data).reason === "credential_rejected") return l({
    ...fail("credential_rejected", "agent_not_enabled"),
    message: `asset ${verb} failed (credential_rejected): ${Ne}`
  });
  return {
    replied: !0,
    status: S.status,
    data: S.data,
    retryAfter: S.response.headers?.["retry-after"]
  };
}
function V(e, r) {
  let {
      code: code_2,
      reason: reason_2,
      detail: detail_2
    } = U(e.status, e.data),
    u = y_(e.retryAfter);
  return r(code_2, reason_2, code_2 === "rate_limited" ? u !== void 0 ? `${Math.max(1, Math.ceil(u / 1000))}s` : void 0 : code_2 === "upstream_error" && detail_2 === void 0 ? `HTTP ${e.status}` : detail_2);
}
async function P5r(e, r) {
  let {
      slug: slug,
      bytes: d,
      contentType: contentType_2
    } = e,
    marks_2 = {},
    fail_2 = G(E => m("artifact_asset_upload", E, marks_2), "upload");
  if (!hr.test(slug)) return fail_2("invalid_request", "invalid_slug", "not a valid artifact id");
  let o = w4t(contentType_2);
  if (d.length === 0 || d.length > o) return d.length === 0 ? fail_2("invalid_request", "size", "the file is empty") : fail_2("too_large", "size", contentType_2 === q ? `the SVG exceeds the ${o >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it` : `the file exceeds the ${o >> 20} MiB per-asset limit \u2014 compress or split it`);
  let l = await Y({
      verb: "upload",
      route: De(slug),
      probeRoute: me(slug),
      body: d,
      contentType: contentType_2,
      maxBodyLength: tU + 4096,
      marks: marks_2,
      fail: fail_2,
      credentials: e.credentials
    }, r),
    v = E => marks_2.retried === !0 ? {
      ...E,
      resent: !0
    } : E;
  if (!l.replied) return v(l.failure);
  if (l.status !== 200) return v(V(l, fail_2));
  let f = pe().safeParse(l.data);
  if (!f.success || f.data.content_type !== contentType_2 || (contentType_2 === q ? f.data.size_bytes === 0 || f.data.size_bytes > tU : f.data.size_bytes !== d.length)) return v(fail_2("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it"));
  return te().assetsOnRoster = !0, g("artifact_asset_upload", {
    ...marks_2,
    size_bytes: f.data.size_bytes
  }), {
    kind: "ok",
    id: f.data.opaque_id,
    url: re(f.data.opaque_id, f.data.url),
    sizeBytes: f.data.size_bytes,
    contentType: f.data.content_type,
    ...(f.data.sha256 !== void 0 && {
      sha256: f.data.sha256
    }),
    ...(marks_2.retried === !0 && {
      resent: !0
    })
  };
}
async function Vci(e, r) {
  let {
      slug: slug_2,
      after: after
    } = e,
    marks_3 = {},
    fail_3 = G(l => m("artifact_asset_list", l, marks_3), "list");
  if (!hr.test(slug_2)) return fail_3("invalid_request", "invalid_slug", "not a valid artifact id");
  if (after !== void 0 && !Wle.test(after)) return fail_3("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
  let a = await Y({
    verb: "list",
    route: me(slug_2),
    body: _({
      ...(after !== void 0 && {
        after: after
      }),
      limit: limit
    }),
    contentType: "application/json",
    timeoutMs: ne,
    marks: marks_3,
    fail: fail_3,
    credentials: e.credentials
  }, r);
  if (!a.replied) return a.failure;
  if (a.status !== 200) return V(a, fail_3);
  let o = Te().safeParse(a.data);
  if (!o.success) return fail_3("upstream_error", "malformed_reply", "the listing was unreadable");
  return te().assetsOnRoster = !0, Pen(slug_2, o.data.cowritten), MLt(slug_2, o.data.outside_writer), g("artifact_asset_list", {
    ...marks_3,
    count: o.data.assets.length
  }), {
    kind: "ok",
    assets: o.data.assets.map(item => ({
      id: item.opaque_id,
      url: re(item.opaque_id, item.url),
      contentType: item.content_type,
      sizeBytes: item.size_bytes,
      ...(item.sha256 !== void 0 && {
        sha256: item.sha256
      }),
      createdAt: Z(item.created_at)
    })),
    usage: {
      files: o.data.usage.files,
      bytes: o.data.usage.bytes,
      maxFiles: o.data.usage.max_files,
      maxBytes: o.data.usage.max_bytes
    },
    ...(o.data.next !== void 0 && {
      next: o.data.next
    }),
    ...(o.data.cowritten && {
      cowritten: !0
    }),
    ...(o.data.outside_writer !== void 0 && {
      outsideWriter: o.data.outside_writer
    })
  };
}
async function Kci(e, r) {
  let {
      slug: slug_3,
      id: id
    } = e,
    marks_4 = {},
    fail_4 = G(l => m("artifact_asset_delete", l, marks_4), "delete");
  if (!hr.test(slug_3)) return fail_4("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!wy.test(id)) return fail_4("invalid_request", "invalid_id", "not a valid asset id");
  let a = await Y({
    verb: "delete",
    route: Me(slug_3, id),
    body: "{}",
    contentType: "application/json",
    timeoutMs: ne,
    marks: marks_4,
    fail: fail_4,
    credentials: e.credentials
  }, r);
  if (!a.replied) return a.failure;
  if (a.status !== 200) return V(a, fail_4);
  let o = Fe().safeParse(a.data);
  if (!o.success) return fail_4("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable \u2014 list the assets to check");
  return te().assetsOnRoster = !0, g("artifact_asset_delete", {
    ...marks_4,
    deleted: o.data.deleted
  }), {
    kind: "ok",
    deleted: o.data.deleted
  };
}
var Ie = p(() => Ft({
    assets: vr(pe().extend({
      from_id: ge().regex(wy)
    })).max(nge)
  })),
  timeoutMs = 120000;
async function qci(e, r) {
  let {
      slug: slug_4,
      fromSlug: fromSlug,
      ids: ids
    } = e,
    u = e.crossOrgOk === !0,
    marks_5 = {},
    fail_5 = G(f => m("artifact_asset_copy", f, marks_5), "copy");
  if (!hr.test(slug_4) || !hr.test(fromSlug)) return fail_5("invalid_request", "invalid_slug", "not a valid artifact id");
  if (slug_4 === fromSlug) return fail_5("invalid_request", "same_artifact", "from_url names the destination itself \u2014 its assets are already there");
  if (ids.length === 0 || ids.length > nge || !ids.every(item => wy.test(item)) || new Set(ids).size !== ids.length) return fail_5("invalid_request", "invalid_ids", `asset_ids must be 1\u2013${nge} distinct asset ids`);
  let l = await Y({
    verb: "copy",
    route: Pe(slug_4),
    body: _({
      from: fromSlug,
      ids: ids,
      ...(u && {
        cross_org_ok: !0
      })
    }),
    contentType: "application/json",
    timeoutMs: timeoutMs,
    marks: marks_5,
    fail: fail_5,
    credentials: e.credentials
  }, r);
  if (!l.replied) return l.failure;
  if (l.status !== 200) return u && l.status === 400 && U(400, l.data).detail === "invalid request body" ? fail_5("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet") : V(l, fail_5);
  let v = Ie().safeParse(l.data);
  if (!v.success || v.data.assets.length !== ids.length || v.data.assets.some((item, index) => item.from_id !== ids[index])) return fail_5("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable \u2014 run action "list_assets" on the destination before retrying, or the assets may be copied twice');
  return te().assetsOnRoster = !0, g("artifact_asset_copy", {
    ...marks_5,
    count: ids.length
  }), {
    kind: "ok",
    assets: v.data.assets.map(item => ({
      fromId: item.from_id,
      id: item.opaque_id,
      url: re(item.opaque_id, item.url),
      sizeBytes: item.size_bytes,
      contentType: item.content_type,
      ...(item.sha256 !== void 0 && {
        sha256: item.sha256
      })
    }))
  };
}
var timeout = 90000;
function O5r(e) {
  for (let [r, s] of H) if (s === e) return r;
  return;
}
var ce = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function Yci(e, r, signal_2, credentials, {
  admitPublicRead: admitPublicRead,
  probeToolUseId: probeToolUseId
} = {}) {
  let a = (reason_3, w) => (m("artifact_asset_read", reason_3), {
    kind: "error",
    message: `asset read failed: ${w}`,
    reason: reason_3
  });
  if (!hr.test(e.slug)) return a("invalid_slug", "not a valid artifact id");
  if (!wy.test(r)) return a("invalid_id", "not a valid asset id");
  let o = XLn(),
    agentDirect = QJe(),
    v = !o && (sse() || fen() && !ZW(tM));
  if (!v && !o && i.CLAUDE_CODE_REMOTE) return a("relay_unavailable", ce);
  let f = await mI(e, "artifact_asset_read", signal_2, {
    gatePublicRead: !1,
    credentials: credentials,
    probeToolUseId: probeToolUseId
  });
  if (f.err !== null) return {
    kind: "error",
    message: f.err.replace(/^artifact read/, "asset read"),
    reason: f.status === 404 ? "boot_404" : "boot"
  };
  let {
      ver: ver,
      assetToken: R
    } = f,
    publicRead = R === void 0;
  if (publicRead && !wA()) return a("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
  if (publicRead && admitPublicRead?.() !== !0) return c("artifact_asset_read", reason_4), {
    kind: "error",
    reason: reason_4,
    message: `asset read failed: ${kNn}`
  };
  let relay = v && !publicRead,
    C = `/_f/${ver}/_blob/${r}`,
    D = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    {
      host: host,
      base: base,
      headers: headers
    } = QYt(e),
    T = () => (te().contentHostEgressDenied.add(e.env), a("egress_blocked", `this environment's network allowlist blocks ${host}, so the asset cannot be fetched (access to the artifact itself is fine). ${publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${ZYt(e.env)}` : i.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${D} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`)),
    M = (y, w) => (t(`[artifact] asset fetch: egress proxy denied (${w})`), a("egress_denied", `artifact content fetch refused by the environment's egress proxy (${YJ(y)})`)),
    he = (y, w) => {
      if (w !== void 0) t(`[artifact] asset fetch: proxy refused, marker ${w}`);
      return a("proxy_refused", `the proxy refused the connection to the artifact's content host (${YJ(y)})`);
    },
    N = !1,
    I;
  if (!relay && R !== void 0 && XYt(f.data)) {
    try {
      I = await JYt(e.slug, C, {
        token: R,
        timeout: timeout,
        maxContentLength: tU + 1,
        signal: signal_2,
        credentials: credentials
      });
    } catch (error) {
      if (nl(error) || error instanceof Ke) throw error;
      return a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${tU >> 20} MiB limit`);
    }
    N = I.kind === "answer";
  }
  let A;
  try {
    if (I?.kind === "answer") A = I;else if (relay) {
      if (R === void 0) return a("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let y = await YYt(e.slug, C, {
        token: R,
        timeout: timeout,
        maxContentLength: tU + 1,
        signal: signal_2,
        retryBudget: K3e()
      });
      if (!y.ok) return a(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? Dmt(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
      A = {
        status: y.status,
        headers: y.response.headers,
        data: y.data
      };
    } else {
      let y = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`,
        w = await hd.get(`${base}${C}${y}`, {
          signal: signal_2,
          timeout: timeout,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: tU + 1,
          validateStatus: () => !0,
          ...(headers && {
            headers: headers
          })
        });
      if (rV(w.status, w.headers)) return T();
      let P = rfe(w.headers);
      if (P !== void 0 && (w.status < 200 || w.status >= 300)) return M(w.status, P);
      te().contentHostEgressDenied.delete(e.env), A = {
        status: w.status,
        headers: w.headers,
        data: w.data
      };
    }
  } catch (error) {
    if (nl(error) || error instanceof Ke) throw error;
    if (relay) CLe();
    let w = relay ? void 0 : yM(error);
    if (w !== void 0) {
      if (rV(w.connectStatus, w.headers)) return T();
      let P = rfe(w.headers);
      if (P !== void 0) return M(w.connectStatus, P);
      return he(w.connectStatus, NFt(w.headers));
    }
    return a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${tU >> 20} MiB limit`);
  }
  if (relay && Emt(A.status)) return a("relay_unavailable", ce);
  if (relay && vmt(A.status, A.data)) return a("network_off", `${kmt}; retrying from here will not help`);
  if (relay && B8(A.status)) return a(`http_${A.status}`, qYt(A.status));
  if (relay) CLe(A.status);
  if (A.status === 404) return a("http_404", relay ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"');
  if (publicRead && A.status === 403 && pGe(A.headers, nfe(A.headers, A.data, y => y))) return a("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
  let W = relay ? void 0 : DFt({
    status: A.status,
    headers: A.headers,
    data: A.data,
    redact: y => Clt(y, R),
    label: "[artifact] asset fetch"
  });
  if (W !== void 0) return a(W, LFt[W]);
  if (A.status === 401 || A.status === 403) return a(`http_${A.status}`, relay ? "the cloud session's artifact mount refused the read \u2014 asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down since the id was listed");
  if (A.status !== 200) return a(`http_${A.status}`, `unexpected answer from the ${N ? "artifact service" : "content host"} (HTTP ${A.status})`);
  if (relay) yue(tM);
  let se = A.headers,
    ae = relay || N ? q3e(se) : se?.["content-type"],
    contentType_3 = typeof ae === "string" ? tt(ae, ";").trim().toLowerCase() : "";
  if (O5r(contentType_3) === void 0) return a("unexpected_type", `the ${N ? "artifact service" : "content host"} served a type this tool does not save`);
  let bytes_2 = Buffer.from(A.data ?? new ArrayBuffer(0));
  if (bytes_2.length === 0 || bytes_2.length > tU) return a("size", bytes_2.length === 0 ? "the asset is empty" : `the asset exceeds the ${tU >> 20} MiB limit`);
  return {
    kind: "ok",
    bytes: bytes_2,
    contentType: contentType_3,
    relay: relay,
    agentDirect: agentDirect,
    publicRead: publicRead
  };
}
export { Uwn, Wci, w4t, zci, k4t, XBe, v4t, message_5 as Bwn, jwn, Wwn, message_6 as Vnr, _Rt, Gci, message as zwn, HK, bRt, Knr, JBe, b5o, S5o, w5o, E4t, eve, PB, qnr, Wle, k5o, U0, nge, iF, tve, P5r, Vci, Kci, qci, O5r, Yci };