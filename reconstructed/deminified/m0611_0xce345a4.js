// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { We, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Wi, q$, ns } from "B:/~BUN/root/chunk-54p0h65d.js";
import { b, Uh, Yhn, ff, NY, To, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { oh } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Uk, Dt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { tl } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Fa } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { pde, _2 } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { Pp, Bn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { sHe, Ch, M3e, D3e, PF, m0, dle, iHe, Can, Elt, XB, Y3, pX, aHe, TOr, L3e, Jge, pzn, COr, tDt, AS, fX as reason_4, nDt } from "B:/~BUN/root/chunk-j36yaq51.js";
import { aX, KB, San, v3e, k3e, lX, qge, YMt, ylt } from "B:/~BUN/root/chunk-faawr4jv.js";
import { y8 } from "B:/~BUN/root/chunk-at7axhcd.js";
import { u0, $d } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { RT, mW, V0e, RTt, ATt, xTt, PTt, Rtt } from "B:/~BUN/root/chunk-7z8vew74.js";
import { vXt } from "B:/~BUN/root/chunk-as7rvra0.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { de, fn, ho, Xn, lt, qu } from "B:/~BUN/root/chunk-8386ms9e.js";
import { closeSync as Z, constants as ge, fstatSync as fe, lstatSync as j, openSync as _e, read as ye, realpathSync as be } from "fs";
import { extname as Ae } from "path";
import { promisify as ke } from "util";
function Okt() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS ?? (iHe() || (vXt().capabilities?.includes("assets") ?? !1));
}
function jso() {
  if (a.CLAUDE_CODE_ARTIFACT_ASSETS !== void 0) return "env";
  return iHe() ? "agent" : vXt().source;
}
var U = "image/svg+xml",
  Se = 2097152;
function met(e) {
  return e === U ? Se : u0;
}
var H = new Map([[".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".gif", "image/gif"], [".webp", "image/webp"], [".svg", U], [".mp4", "video/mp4"], [".webm", "video/webm"], [".pdf", "application/pdf"], [".woff2", "font/woff2"], [".woff", "font/woff"], [".ttf", "font/ttf"], [".otf", "font/otf"], [".csv", "text/csv"], [".md", "text/markdown"], [".markdown", "text/markdown"], [".json", "application/json"], [".txt", "text/plain"], [".ts", "text/plain"], [".css", "text/css"], [".js", "text/javascript"], [".mjs", "text/javascript"], [".cjs", "text/javascript"]]),
  Wso = L(H.values()).flatMap(item => wxn(item) ?? []),
  get = [...H.keys()].map(item => item.slice(1)).join(", ");
function Dpe(e) {
  return H.get(Ae(e).toLowerCase());
}
var we = new Set(["text/csv", "text/markdown", "application/json", "text/plain"]);
function het(e) {
  return e !== void 0 && we.has(e);
}
var message_2 = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again",
  message_3 = "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted",
  message_4 = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first",
  message_5 = "file_path must name a regular file to upload",
  Dkt = "the file is empty \u2014 nothing to upload";
function Lkt(e, r) {
  return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var message_6 = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";
function Iur(e) {
  let r = BigInt(e);
  return r === 0n || r === 0xffffffffffffffffn || r === 1n << 64n;
}
function N(e) {
  if (B(e)) return {
    kind: "missing"
  };
  let errnoCode = v(e);
  return {
    kind: "error",
    reason: "read_error",
    message: `cannot read file_path (${errnoCode ?? "unexpected error"})`,
    errnoCode: errnoCode
  };
}
function o2e(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function zso(e) {
  let r = e.split(":");
  if (r.length !== 4 || !r.every(item => /^\d+$/.test(item))) return;
  return Number(r[2]);
}
function I(e) {
  return ns(e) || Wi(e) || q$(e);
}
function w7(e) {
  if (I(e)) return !0;
  let {
    paths: paths,
    vetted: vetted
  } = NY(e);
  return !vetted || paths.some(I);
}
var message = "upload_asset reads only local files \u2014 file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";
function _L(e) {
  if (I(e)) return {
    kind: "network"
  };
  let r = ff(ce(), e);
  if (r === Uh) return {
    kind: "unresolved",
    error: Yhn(e)
  };
  if (r !== void 0 && I(r) || w7(e)) return {
    kind: "network"
  };
  let real;
  try {
    real = be(e);
  } catch (error) {
    return {
      kind: "unresolved",
      error: error
    };
  }
  return I(real) ? {
    kind: "network"
  } : {
    kind: "resolved",
    real: real
  };
}
function s2e(real_2) {
  try {
    let r = j(real_2, {
      bigint: !0
    });
    return {
      real: real_2,
      identity: o2e(r),
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
function u5t(e, r = _L(e), s = r.kind !== "network" && xe(e)) {
  return het(Dpe(e)) || r.kind === "resolved" && het(Dpe(r.real)) || s;
}
function xe(e) {
  return Lpe(e).link;
}
function Lpe(e) {
  try {
    return {
      link: j(e).isSymbolicLink(),
      unreadable: null
    };
  } catch (error) {
    return {
      link: !0,
      unreadable: v(error) ?? "unexpected error"
    };
  }
}
var ie = ke(ye);
function Our(e, r, s, d) {
  let n = r,
    l = typeof n === "object" && n !== null && typeof n.real === "string" ? {
      real: n.real,
      identity: typeof n.identity === "string" && (n.digest === void 0 || typeof n.digest === "string") ? n.identity : null,
      ...(typeof n.digest === "string" && {
        digest: n.digest
      })
    } : void 0,
    o = _L(e);
  if (o.kind === "network") return {
    kind: "error",
    reason: "network",
    message: message
  };
  if (o.kind === "unresolved") {
    if (l !== void 0 && l.identity !== null) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    let h = To(e).slice(1).map(s);
    return h.includes("deny") ? {
      kind: "error",
      reason: "read_denied",
      message: message_3
    } : h.some(item => item !== "allow") ? {
      kind: "error",
      reason: "via_link",
      message: message_4
    } : N(o.error);
  }
  let {
      real: real_3
    } = o,
    u = real_3 === e ? void 0 : s(real_3);
  if (u === "deny") return {
    kind: "error",
    reason: "read_denied",
    message: message_3
  };
  if (l !== void 0) {
    if (real_3 !== l.real) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
  } else if (u !== void 0 && u !== "allow") return {
    kind: "error",
    reason: "via_link",
    message: message_4
  };
  let w;
  try {
    w = j(real_3, {
      bigint: !0
    });
  } catch (error) {
    return l !== void 0 && B(error) ? {
      kind: "error",
      reason: "changed",
      message: message_2
    } : N(error);
  }
  if (w.isSymbolicLink()) return {
    kind: "error",
    reason: "changed",
    message: message_2
  };
  if (!w.isFile()) return {
    kind: "error",
    reason: "not_a_file",
    message: message_5
  };
  if (l === void 0 && w.nlink > 1n) return {
    kind: "error",
    reason: "hard_link",
    message: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and upload the copy"
  };
  let c = 0,
    fd;
  try {
    fd = _e(real_3, ge.O_RDONLY | c);
  } catch (error) {
    if (v(error) === "ELOOP") return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    return N(error);
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
    if (Iur(h.ino)) return {
      kind: "error",
      reason: "no_identity",
      message: message_6
    };
    if (o2e(h) !== (l !== void 0 ? l.identity : o2e(w))) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    try {
      let C = _L(e);
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
    let g = Number(h.size);
    if (g === 0 || g > d) return {
      kind: "error",
      reason: "size",
      message: g === 0 ? Dkt : Lkt(g, d),
      sizeBytes: g
    };
    return R = !0, {
      kind: "opened",
      fd: fd,
      size: g,
      real: real_3,
      identity: o2e(h),
      digest: l?.digest
    };
  } catch (error) {
    return N(error);
  } finally {
    if (!R) Z(fd);
  }
}
async function Mur(e) {
  let {
    fd: fd_2,
    size: size,
    identity: identity,
    digest: digest
  } = e;
  try {
    if (o2e(fe(fd_2, {
      bigint: !0
    })) !== identity) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    let bytes = Buffer.allocUnsafe(size),
      o = 0;
    while (o < size) {
      let {
        bytesRead: bytesRead
      } = await ie(fd_2, bytes, o, size - o, o);
      if (bytesRead === 0) break;
      o += bytesRead;
    }
    let {
      bytesRead: bytesRead_2
    } = await ie(fd_2, Buffer.alloc(1), 0, 1, size);
    if (o !== size || bytesRead_2 !== 0) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    if (digest !== void 0 && Kt(bytes) !== digest) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    return {
      kind: "ok",
      bytes: bytes
    };
  } catch (error) {
    return N(error);
  } finally {
    Z(fd_2);
  }
}
function Dur(e) {
  try {
    Z(e.fd);
  } catch {}
}
async function yet(e, r, s, d) {
  let n = Our(e, r, s, d);
  return n.kind === "opened" ? Mur(n) : n;
}
var ve = new Set(["invalid_request", "too_large", "unsupported_type", "quota_or_state", "rate_limited", "capability_disabled", "store_unavailable", "upstream_error", "credential_rejected", "not_found", "asset_not_found", "not_copyable"]),
  v7 = /^\/?_blob\/[0-9a-f]{32}$/;
function J(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var bO = /^[0-9a-f]{64}$/,
  limit = 50,
  p5t = 40,
  w4 = /^[A-Za-z0-9_=-]{1,4096}$/,
  Lur = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/,
  vT = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/,
  r8 = 10,
  vP = 25,
  k7 = 1024,
  pe = f(() => lt({
    opaque_id: de().regex(Pp),
    url: de().optional().catch(void 0),
    size_bytes: fn().int().nonnegative(),
    content_type: de().regex(vT),
    sha256: de().regex(bO).optional()
  })),
  Re = f(() => lt({
    assets: Xn(lt({
      opaque_id: de().regex(Pp),
      url: de().optional().catch(void 0),
      content_type: de().regex(vT).max(p5t),
      size_bytes: fn().int().nonnegative().max(u0),
      sha256: de().regex(bO).optional(),
      created_at: de().regex(Lur).max(p5t)
    })).max(1000),
    usage: lt({
      files: fn().int().nonnegative(),
      bytes: fn().int().nonnegative(),
      max_files: fn().int().nonnegative(),
      max_bytes: fn().int().nonnegative()
    }),
    next: de().regex(w4).or(qu("")).nullish().transform(e => e || void 0),
    cowritten: qu(!0).optional().catch(void 0),
    outside_writer: ho().optional().catch(void 0)
  })),
  Te = f(() => lt({
    deleted: ho()
  })),
  Fe = f(() => lt({
    error: lt({
      code: de(),
      message: de().optional()
    })
  })),
  $e = f(() => lt({
    error: de(),
    reason: de()
  })),
  Oe = 20000,
  te = 30000,
  Ce = 90000;
function Le(e) {
  return `/api/frame/blob/${e}/agent-upload`;
}
function me(e) {
  return `/api/frame/blob/${e}/agent-list`;
}
function De(e, r) {
  return `/api/frame/blob/${e}/${r}/agent-delete`;
}
function Me(e) {
  return `/api/frame/blob/${e}/agent-copy`;
}
function q(e, r) {
  let s = Fe().safeParse(r);
  if (s.success) {
    let d = s.data.error.code;
    if (ve.has(d)) {
      let detail = s.data.error.message && K(s.data.error.message);
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
    let d = $e().safeParse(r);
    if (d.success) return {
      code: "policy_denied",
      reason: "policy_denied",
      detail: K(d.data.error)
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
function K(e) {
  return re(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function Pe(e, r, s = "upload", d) {
  let n = `asset ${s} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${n}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;
    case "unsupported_type":
      return `${n}: ${r ?? `only these file types are accepted: ${get}`}`;
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
    message: Pe(code, n, r, reason),
    reason: reason
  });
}
var Be = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function Y(e, signal) {
  let {
      verb: verb,
      route: route,
      body: body,
      contentType: contentType,
      marks: marks,
      fail: fail
    } = e,
    u = failure => ({
      replied: !1,
      failure: failure
    }),
    w = iHe();
  if (w) marks.agent_direct = !0;
  let c = tDt() || dle() && Elt(PF),
    E = !w && c && !XB(PF),
    R = !w && !c && dle() || E,
    h = () => u(fail("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
  if (!R && !w && a.CLAUDE_CODE_REMOTE) return h();
  if (R && !m0(PF)) return u(fail("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
  let g = ee();
  if (!g.assetsOnRoster) {
    let accountEpoch = g.accountEpoch,
      x = g.roster ?? (await y8({
        timeoutMs: 5000,
        signal: signal,
        credentials: e.credentials
      }));
    if ("err" in x) marks[`roster_${x.cause}`] = !0;else if (ee() !== g || g.accountEpoch !== accountEpoch) marks.roster_outlived = !0;else if (g.roster = x, x.capabilities.includes("assets")) g.assetsOnRoster = !0;else if (!R) return u(fail("unavailable_to_account", "roster_no_assets"));else marks.roster_no_assets = !0;
  }
  let C = {
      maxRedirects: 0,
      headers: {
        ...$d(),
        "Content-Type": contentType,
        Accept: "application/json"
      },
      ...(e.verb === "upload" ? {
        streamUpload: {
          tailFloorMs: () => Ce,
          onSettled: T => {
            if (T.stalled) marks.stalled = !0;
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
    D = async () => R ? (await pzn("POST", route, body, C, PF)).res : Dt.post(route, body, {
      ...C,
      host: "frame",
      auth: "claude-ai-oauth",
      refreshOAuth: !0,
      credentials: e.credentials
    }),
    k;
  try {
    if (E && e.verb === "upload" && !aHe(PF)) {
      let x;
      try {
        x = (await pzn("POST", e.probeRoute, b({
          limit: 1
        }), {
          maxRedirects: 0,
          headers: {
            ...$d(),
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          timeout: te,
          maxContentLength: 262144,
          validateStatus: () => !0,
          signal: signal
        }, PF)).res;
      } catch (error) {
        if (Fa(error) || error instanceof We) throw error;
        return Y3(PF, !0), u(fail("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe"));
      }
      let F = COr(x);
      if (F.refused) return Y3(PF), h();
      if (!F.vouched) {
        if (!x.ok || x.status >= 500 || x.status === 499) Y3(PF, !0);
        return u(fail("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later"));
      }
      pX(PF);
    }
    let T = x => {
      if (!E) return !1;
      let F = COr(x);
      if (F.refused && !(x.ok && x.status === 413)) return Y3(PF), TOr(PF), !0;
      if (F.vouched) pX(PF);else if (!aHe(PF) && (!x.ok || x.status >= 500 || x.status === 499)) Y3(PF, !0);
      return !1;
    };
    if (k = await D(), T(k)) return h();
    if (k.ok && (k.status === 429 || k.status === 503) && q(k.status, k.data).code !== "policy_denied") {
      let x = k.response.headers?.["retry-after"],
        F = oh(typeof x === "string" ? x : void 0);
      if (F !== void 0 && F <= Oe) {
        if (await Q(F, signal), signal.aborted) throw new We();
        if (marks.retried = !0, k = await D(), T(k)) return h();
      }
    }
  } catch (error) {
    if (Fa(error) || error instanceof We) throw error;
    if (E && !aHe(PF)) Y3(PF, !0);
    if (_2(error) !== void 0) return u(fail("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent \u2014 one retry is safe"));
    return u(fail("store_unavailable", "request_error", verb === "upload" ? "the request failed in transit or timed out \u2014 a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)" : verb === "copy" ? 'the request failed in transit or timed out \u2014 a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out \u2014 one retry is safe"));
  }
  if (!k.ok) return u({
    ...fail("store_unavailable", k.reason.replace(/-/g, "_")),
    message: k.reason === "no-auth" ? R ? sHe(k.detail) : Ch(k.detail) : `asset ${verb} unavailable: ${k.reason}`
  });
  if (w && k.status === 403 && q(k.status, k.data).reason === "credential_rejected") return u({
    ...fail("credential_rejected", "agent_not_enabled"),
    message: `asset ${verb} failed (credential_rejected): ${Be}`
  });
  return {
    replied: !0,
    status: k.status,
    data: k.data,
    retryAfter: k.response.headers?.["retry-after"]
  };
}
function V(e, r) {
  let {
      code: code_2,
      reason: reason_2,
      detail: detail_2
    } = q(e.status, e.data),
    l = oh(e.retryAfter);
  return r(code_2, reason_2, code_2 === "rate_limited" ? l !== void 0 ? `${Math.max(1, Math.ceil(l / 1000))}s` : void 0 : code_2 === "upstream_error" && detail_2 === void 0 ? `HTTP ${e.status}` : detail_2);
}
async function Sxn(e, r) {
  let {
      slug: slug,
      bytes: d,
      contentType: contentType_2
    } = e,
    marks_2 = {},
    fail_2 = G(E => m("artifact_asset_upload", E, marks_2), "upload");
  if (!Bn.test(slug)) return fail_2("invalid_request", "invalid_slug", "not a valid artifact id");
  let i = met(contentType_2);
  if (d.length === 0 || d.length > i) return d.length === 0 ? fail_2("invalid_request", "size", "the file is empty") : fail_2("too_large", "size", contentType_2 === U ? `the SVG exceeds the ${i >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it` : `the file exceeds the ${i >> 20} MiB per-asset limit \u2014 compress or split it`);
  let u = await Y({
      verb: "upload",
      route: Le(slug),
      probeRoute: me(slug),
      body: d,
      contentType: contentType_2,
      maxBodyLength: u0 + 4096,
      marks: marks_2,
      fail: fail_2,
      credentials: e.credentials
    }, r),
    w = E => marks_2.retried === !0 ? {
      ...E,
      resent: !0
    } : E;
  if (!u.replied) return w(u.failure);
  if (u.status !== 200) return w(V(u, fail_2));
  let c = pe().safeParse(u.data);
  if (!c.success || c.data.content_type !== contentType_2 || (contentType_2 === U ? c.data.size_bytes === 0 || c.data.size_bytes > u0 : c.data.size_bytes !== d.length)) return w(fail_2("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it"));
  return ee().assetsOnRoster = !0, _("artifact_asset_upload", {
    ...marks_2,
    size_bytes: c.data.size_bytes
  }), {
    kind: "ok",
    id: c.data.opaque_id,
    url: J(c.data.opaque_id, c.data.url),
    sizeBytes: c.data.size_bytes,
    contentType: c.data.content_type,
    ...(c.data.sha256 !== void 0 && {
      sha256: c.data.sha256
    }),
    ...(marks_2.retried === !0 && {
      resent: !0
    })
  };
}
async function Gso(e, r) {
  let {
      slug: slug_2,
      after: after
    } = e,
    marks_3 = {},
    fail_3 = G(u => m("artifact_asset_list", u, marks_3), "list");
  if (!Bn.test(slug_2)) return fail_3("invalid_request", "invalid_slug", "not a valid artifact id");
  if (after !== void 0 && !w4.test(after)) return fail_3("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
  let o = await Y({
    verb: "list",
    route: me(slug_2),
    body: b({
      ...(after !== void 0 && {
        after: after
      }),
      limit: limit
    }),
    contentType: "application/json",
    timeoutMs: te,
    marks: marks_3,
    fail: fail_3,
    credentials: e.credentials
  }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return V(o, fail_3);
  let i = Re().safeParse(o.data);
  if (!i.success) return fail_3("upstream_error", "malformed_reply", "the listing was unreadable");
  return ee().assetsOnRoster = !0, YMt(slug_2, i.data.cowritten), ylt(slug_2, i.data.outside_writer), _("artifact_asset_list", {
    ...marks_3,
    count: i.data.assets.length
  }), {
    kind: "ok",
    assets: i.data.assets.map(item => ({
      id: item.opaque_id,
      url: J(item.opaque_id, item.url),
      contentType: item.content_type,
      sizeBytes: item.size_bytes,
      ...(item.sha256 !== void 0 && {
        sha256: item.sha256
      }),
      createdAt: K(item.created_at)
    })),
    usage: {
      files: i.data.usage.files,
      bytes: i.data.usage.bytes,
      maxFiles: i.data.usage.max_files,
      maxBytes: i.data.usage.max_bytes
    },
    ...(i.data.next !== void 0 && {
      next: i.data.next
    }),
    ...(i.data.cowritten && {
      cowritten: !0
    }),
    ...(i.data.outside_writer !== void 0 && {
      outsideWriter: i.data.outside_writer
    })
  };
}
async function Vso(e, r) {
  let {
      slug: slug_3,
      id: id
    } = e,
    marks_4 = {},
    fail_4 = G(u => m("artifact_asset_delete", u, marks_4), "delete");
  if (!Bn.test(slug_3)) return fail_4("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!Pp.test(id)) return fail_4("invalid_request", "invalid_id", "not a valid asset id");
  let o = await Y({
    verb: "delete",
    route: De(slug_3, id),
    body: "{}",
    contentType: "application/json",
    timeoutMs: te,
    marks: marks_4,
    fail: fail_4,
    credentials: e.credentials
  }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return V(o, fail_4);
  let i = Te().safeParse(o.data);
  if (!i.success) return fail_4("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable \u2014 list the assets to check");
  return ee().assetsOnRoster = !0, _("artifact_asset_delete", {
    ...marks_4,
    deleted: i.data.deleted
  }), {
    kind: "ok",
    deleted: i.data.deleted
  };
}
var Ne = f(() => lt({
    assets: Xn(pe().extend({
      from_id: de().regex(Pp)
    })).max(r8)
  })),
  timeoutMs = 120000;
async function qso(e, r) {
  let {
      slug: slug_4,
      fromSlug: fromSlug,
      ids: ids
    } = e,
    l = e.crossOrgOk === !0,
    marks_5 = {},
    fail_5 = G(c => m("artifact_asset_copy", c, marks_5), "copy");
  if (!Bn.test(slug_4) || !Bn.test(fromSlug)) return fail_5("invalid_request", "invalid_slug", "not a valid artifact id");
  if (slug_4 === fromSlug) return fail_5("invalid_request", "same_artifact", "from_url names the destination itself \u2014 its assets are already there");
  if (ids.length === 0 || ids.length > r8 || !ids.every(item => Pp.test(item)) || new Set(ids).size !== ids.length) return fail_5("invalid_request", "invalid_ids", `asset_ids must be 1\u2013${r8} distinct asset ids`);
  let u = await Y({
    verb: "copy",
    route: Me(slug_4),
    body: b({
      from: fromSlug,
      ids: ids,
      ...(l && {
        cross_org_ok: !0
      })
    }),
    contentType: "application/json",
    timeoutMs: timeoutMs,
    marks: marks_5,
    fail: fail_5,
    credentials: e.credentials
  }, r);
  if (!u.replied) return u.failure;
  if (u.status !== 200) return l && u.status === 400 && q(400, u.data).detail === "invalid request body" ? fail_5("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet") : V(u, fail_5);
  let w = Ne().safeParse(u.data);
  if (!w.success || w.data.assets.length !== ids.length || w.data.assets.some((item, index) => item.from_id !== ids[index])) return fail_5("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable \u2014 run action "list_assets" on the destination before retrying, or the assets may be copied twice');
  return ee().assetsOnRoster = !0, _("artifact_asset_copy", {
    ...marks_5,
    count: ids.length
  }), {
    kind: "ok",
    assets: w.data.assets.map(item => ({
      fromId: item.from_id,
      id: item.opaque_id,
      url: J(item.opaque_id, item.url),
      sizeBytes: item.size_bytes,
      contentType: item.content_type,
      ...(item.sha256 !== void 0 && {
        sha256: item.sha256
      })
    }))
  };
}
var timeout = 90000;
function wxn(e) {
  for (let [r, s] of H) if (s === e) return r;
  return;
}
var le = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function Kso(e, r, signal_2, credentials, {
  admitPublicRead: admitPublicRead,
  probeToolUseId: probeToolUseId
} = {}) {
  let o = (reason_3, S) => (m("artifact_asset_read", reason_3), {
    kind: "error",
    message: `asset read failed: ${S}`,
    reason: reason_3
  });
  if (!Bn.test(e.slug)) return o("invalid_slug", "not a valid artifact id");
  if (!Pp.test(r)) return o("invalid_id", "not a valid asset id");
  let i = Can(),
    agentDirect = iHe(),
    w = !i && (dle() || tDt() && !XB(Uk));
  if (!w && !i && a.CLAUDE_CODE_REMOTE) return o("relay_unavailable", le);
  let c = await RT(e, "artifact_asset_read", signal_2, {
    gatePublicRead: !1,
    credentials: credentials,
    probeToolUseId: probeToolUseId
  });
  if (c.err !== null) return {
    kind: "error",
    message: c.err.replace(/^artifact read/, "asset read"),
    reason: c.status === 404 ? "boot_404" : "boot"
  };
  let {
      ver: ver,
      assetToken: R
    } = c,
    publicRead = R === void 0;
  if (publicRead && !AS()) return o("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
  if (publicRead && admitPublicRead?.() !== !0) return p("artifact_asset_read", reason_4), {
    kind: "error",
    reason: reason_4,
    message: `asset read failed: ${nDt}`
  };
  let relay = w && !publicRead,
    C = `/_f/${ver}/_blob/${r}`,
    D = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    {
      host: host,
      base: base,
      headers: headers
    } = xTt(e),
    F = () => (ee().contentHostEgressDenied.add(e.env), o("egress_blocked", `this environment's network allowlist blocks ${host}, so the asset cannot be fetched (access to the artifact itself is fine). ${publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${PTt(e.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${D} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`)),
    M = (y, S) => (t(`[artifact] asset fetch: egress proxy denied (${S})`), o("egress_denied", `artifact content fetch refused by the environment's egress proxy (${pde(y)})`)),
    he = (y, S) => {
      if (S !== void 0) t(`[artifact] asset fetch: proxy refused, marker ${S}`);
      return o("proxy_refused", `the proxy refused the connection to the artifact's content host (${pde(y)})`);
    },
    A;
  try {
    if (relay) {
      if (R === void 0) return o("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let y = await ATt(e.slug, C, {
        token: R,
        timeout: timeout,
        maxContentLength: u0 + 1,
        signal: signal_2,
        retryBudget: V0e()
      });
      if (!y.ok) return o(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? sHe(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
      A = {
        status: y.status,
        headers: y.response.headers,
        data: y.data
      };
    } else {
      let y = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`,
        S = await tl.get(`${base}${C}${y}`, {
          signal: signal_2,
          timeout: timeout,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: u0 + 1,
          validateStatus: () => !0,
          ...(headers && {
            headers: headers
          })
        });
      if (KB(S.status, S.headers)) return F();
      let P = lX(S.headers);
      if (P !== void 0 && (S.status < 200 || S.status >= 300)) return M(S.status, P);
      ee().contentHostEgressDenied.delete(e.env), A = {
        status: S.status,
        headers: S.headers,
        data: S.data
      };
    }
  } catch (error) {
    if (Fa(error) || error instanceof We) throw error;
    if (relay) Jge();
    let S = relay ? void 0 : _2(error);
    if (S !== void 0) {
      if (KB(S.connectStatus, S.headers)) return F();
      let P = lX(S.headers);
      if (P !== void 0) return M(S.connectStatus, P);
      return he(S.connectStatus, k3e(S.headers));
    }
    return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${u0 >> 20} MiB limit`);
  }
  if (relay && L3e(A.status)) return o("relay_unavailable", le);
  if (relay && D3e(A.status, A.data)) return o("network_off", `${M3e}; retrying from here will not help`);
  if (relay && mW(A.status)) return o(`http_${A.status}`, RTt(A.status));
  if (relay) Jge(A.status);
  if (A.status === 404) return o("http_404", relay ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"');
  if (publicRead && A.status === 403 && qge(A.headers, aX(A.headers, A.data, y => y))) return o("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
  let W = relay ? void 0 : San({
    status: A.status,
    headers: A.headers,
    data: A.data,
    redact: y => Rtt(y, R),
    label: "[artifact] asset fetch"
  });
  if (W !== void 0) return o(W, v3e[W]);
  if (A.status === 401 || A.status === 403) return o(`http_${A.status}`, relay ? "the cloud session's artifact mount refused the read \u2014 asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down since the id was listed");
  if (A.status !== 200) return o(`http_${A.status}`, `unexpected answer from the content host (HTTP ${A.status})`);
  if (relay) pX(Uk);
  let X = A.headers,
    ne = relay ? X?.["x-frame-asset-content-type"] ?? X?.["content-type"] : X?.["content-type"],
    contentType_3 = typeof ne === "string" ? Ze(ne, ";").trim().toLowerCase() : "";
  if (wxn(contentType_3) === void 0) return o("unexpected_type", "the content host served a type this tool does not save");
  let bytes_2 = Buffer.from(A.data ?? new ArrayBuffer(0));
  if (bytes_2.length === 0 || bytes_2.length > u0) return o("size", bytes_2.length === 0 ? "the asset is empty" : `the asset exceeds the ${u0 >> 20} MiB limit`);
  return {
    kind: "ok",
    bytes: bytes_2,
    contentType: contentType_3,
    relay: relay,
    agentDirect: agentDirect,
    publicRead: publicRead
  };
}
export { Okt, jso, met, Wso, get, Dpe, het, message_5 as Mkt, Dkt, Lkt, message_6 as d5t, Iur, o2e, zso, w7, message as Nkt, _L, s2e, u5t, Lpe, Our, Mur, Dur, yet, v7, bO, p5t, w4, Lur, vT, r8, vP, k7, Sxn, Gso, Vso, qso, wxn, Kso };