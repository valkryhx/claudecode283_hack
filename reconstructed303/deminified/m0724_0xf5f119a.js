// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ke, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { gu, _, Ey, lJn, jf, xo, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { zg } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { uA, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Ua } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { x4, e0 } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { Um, ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { pit, fit, Lz, KI, Q7, U4e, _Mn, lAt, eU, Z7, Qoe, B4e, vso, mit, AAe, Cfr, Eso, s8t } from "B:/~BUN/root/chunk-neajqqs3.js";
import { ste, YU, Gmt, Vmt, qmt, ite } from "B:/~BUN/root/chunk-t78esase.js";
import { Vbe, Yoe } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { rXe, Hh, BE, Mae as reason_4, xin } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { mD, lu } from "B:/~BUN/root/chunk-p64g0hj8.js";
import { k4e, $P, XA, zY, P4e, k5t, E5t, T5t, C5t, O4e, R5t, A5t, Zst } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { lIe, mFt, Mmt } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { QIn } from "B:/~BUN/root/chunk-r5t58c6e.js";
import { ge, mn, Vo, sr, St, Fp } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { closeSync as Q, constants as _e, fstatSync as fe, lstatSync as j, openSync as ye, read as be, realpathSync as Ae } from "fs";
import { extname as ke } from "path";
import { promisify as Se } from "util";
function B3t() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS ?? (U4e() || (QIn().capabilities?.includes("assets") ?? !1));
}
function Tls() {
  if (a.CLAUDE_CODE_ARTIFACT_ASSETS !== void 0) return "env";
  return U4e() ? "agent" : QIn().source;
}
var q = "image/svg+xml",
  we = 2097152;
function yRt(e) {
  return e === q ? we : mD;
}
var H = new Map([[".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".gif", "image/gif"], [".webp", "image/webp"], [".svg", q], [".mp4", "video/mp4"], [".webm", "video/webm"], [".pdf", "application/pdf"], [".woff2", "font/woff2"], [".woff", "font/woff"], [".ttf", "font/ttf"], [".otf", "font/otf"], [".csv", "text/csv"], [".md", "text/markdown"], [".markdown", "text/markdown"], [".json", "application/json"], [".txt", "text/plain"], [".ts", "text/plain"], [".css", "text/css"], [".js", "text/javascript"], [".mjs", "text/javascript"], [".cjs", "text/javascript"]]),
  Cls = L(H.values()).flatMap(item => Zur(item) ?? []),
  _Rt = [...H.keys()].map(item => item.slice(1)).join(", ");
function bAe(e) {
  return H.get(ke(e).toLowerCase());
}
var ve = new Set(["text/csv", "text/markdown", "application/json", "text/plain"]);
function bRt(e) {
  return e !== void 0 && ve.has(e);
}
var message_2 = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again",
  message_3 = "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted",
  message_4 = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first",
  message_5 = "file_path must name a regular file to upload",
  W3t = "the file is empty \u2014 nothing to upload";
function z3t(e, r) {
  return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var message_6 = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";
function B(e) {
  if (G(e)) return {
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
function Dst(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function Rls(e) {
  let r = e.split(":");
  if (r.length !== 4 || !r.every(item => /^\d+$/.test(item))) return;
  return Number(r[2]);
}
var message = "upload_asset reads only local files \u2014 file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";
function D1(e) {
  if (k4e(e)) return {
    kind: "network"
  };
  let r = jf(se(), e);
  if (r === Ey) return {
    kind: "unresolved",
    error: lJn(e)
  };
  if (r !== void 0 && k4e(r) || $P(e)) return {
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
  return k4e(real) ? {
    kind: "network"
  } : {
    kind: "resolved",
    real: real
  };
}
function Lst(real_2) {
  try {
    let r = j(real_2, {
      bigint: !0
    });
    return {
      real: real_2,
      identity: Dst(r),
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
function tIn(e, r = D1(e), s = r.kind !== "network" && xe(e)) {
  return bRt(bAe(e)) || r.kind === "resolved" && bRt(bAe(r.real)) || s;
}
function xe(e) {
  return SAe(e).link;
}
function SAe(e) {
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
function _no(e, r, s, d) {
  let n = r,
    u = typeof n === "object" && n !== null && typeof n.real === "string" ? {
      real: n.real,
      identity: typeof n.identity === "string" && (n.digest === void 0 || typeof n.digest === "string") ? n.identity : null,
      ...(typeof n.digest === "string" && {
        digest: n.digest
      })
    } : void 0,
    o = D1(e);
  if (o.kind === "network") return {
    kind: "error",
    reason: "network",
    message: message
  };
  if (o.kind === "unresolved") {
    if (u !== void 0 && u.identity !== null) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    let h = xo(e).slice(1).map(s);
    return h.includes("deny") ? {
      kind: "error",
      reason: "read_denied",
      message: message_3
    } : h.some(item => item !== "allow") ? {
      kind: "error",
      reason: "via_link",
      message: message_4
    } : B(o.error);
  }
  let {
      real: real_3
    } = o,
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
    return u !== void 0 && G(error) ? {
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
  let c = 0,
    fd;
  try {
    fd = ye(real_3, _e.O_RDONLY | c);
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
    if (gu(h.ino)) return {
      kind: "error",
      reason: "no_identity",
      message: message_6
    };
    if (Dst(h) !== (u !== void 0 ? u.identity : Dst(v))) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    try {
      let C = D1(e);
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
      message: b === 0 ? W3t : z3t(b, d),
      sizeBytes: b
    };
    return R = !0, {
      kind: "opened",
      fd: fd,
      size: b,
      real: real_3,
      identity: Dst(h),
      digest: u?.digest
    };
  } catch (error) {
    return B(error);
  } finally {
    if (!R) Q(fd);
  }
}
async function bno(e) {
  let {
    fd: fd_2,
    size: size,
    identity: identity,
    digest: digest
  } = e;
  try {
    if (Dst(fe(fd_2, {
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
      } = await ue(fd_2, bytes, o, size - o, o);
      if (bytesRead === 0) break;
      o += bytesRead;
    }
    let {
      bytesRead: bytesRead_2
    } = await ue(fd_2, Buffer.alloc(1), 0, 1, size);
    if (o !== size || bytesRead_2 !== 0) return {
      kind: "error",
      reason: "changed",
      message: message_2
    };
    if (digest !== void 0 && st(bytes) !== digest) return {
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
    Q(fd_2);
  }
}
function Sno(e) {
  try {
    Q(e.fd);
  } catch {}
}
async function SRt(e, r, s, d) {
  let n = _no(e, r, s, d);
  return n.kind === "opened" ? bno(n) : n;
}
var Ee = new Set(["invalid_request", "too_large", "unsupported_type", "quota_or_state", "rate_limited", "capability_disabled", "store_unavailable", "upstream_error", "credential_rejected", "not_found", "asset_not_found", "not_copyable"]),
  aue = /^\/?_blob\/[0-9a-f]{32}$/;
function te(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var BL = /^[0-9a-f]{64}$/,
  limit = 50,
  nIn = 40,
  z7 = /^[A-Za-z0-9_=-]{1,4096}$/,
  wno = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/,
  HP = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/,
  Woe = 10,
  VI = 25,
  lue = 1024,
  pe = f(() => St({
    opaque_id: ge().regex(Um),
    url: ge().optional().catch(void 0),
    size_bytes: mn().int().nonnegative(),
    content_type: ge().regex(HP),
    sha256: ge().regex(BL).optional()
  })),
  Te = f(() => St({
    assets: sr(St({
      opaque_id: ge().regex(Um),
      url: ge().optional().catch(void 0),
      content_type: ge().regex(HP).max(nIn),
      size_bytes: mn().int().nonnegative().max(mD),
      sha256: ge().regex(BL).optional(),
      created_at: ge().regex(wno).max(nIn)
    })).max(1000),
    usage: St({
      files: mn().int().nonnegative(),
      bytes: mn().int().nonnegative(),
      max_files: mn().int().nonnegative(),
      max_bytes: mn().int().nonnegative()
    }),
    next: ge().regex(z7).or(Fp("")).nullish().transform(e => e || void 0),
    cowritten: Fp(!0).optional().catch(void 0),
    outside_writer: Vo().optional().catch(void 0)
  })),
  Fe = f(() => St({
    deleted: Vo()
  })),
  $e = f(() => St({
    error: St({
      code: ge(),
      message: ge().optional()
    })
  })),
  Oe = f(() => St({
    error: ge(),
    reason: ge()
  })),
  Ce = 20000,
  re = 30000,
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
      let detail = s.data.error.message && J(s.data.error.message);
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
      detail: J(d.data.error)
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
function J(e) {
  return ne(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function Be(e, r, s = "upload", d) {
  let n = `asset ${s} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${n}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;
    case "unsupported_type":
      return `${n}: ${r ?? `only these file types are accepted: ${_Rt}`}`;
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
function V(e, r) {
  return (code, reason, n) => (e(reason), {
    kind: "error",
    code: code,
    message: Be(code, n, r, reason),
    reason: reason
  });
}
var Ne = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function W(e, signal) {
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
    v = U4e();
  if (v) marks.agent_direct = !0;
  let c = s8t() || Q7() && lAt(Lz),
    E = !v && c && !eU(Lz),
    R = !v && !c && Q7() || E,
    h = () => l(fail("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
  if (!R && !v && a.CLAUDE_CODE_REMOTE) return h();
  if (R && !KI(Lz)) return l(fail("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
  let session = ee();
  if (!session.assetsOnRoster) {
    let F = session.accountEpoch,
      x = session.roster === void 0,
      roster = session.roster ?? (await Yoe({
        timeoutMs: 5000,
        signal: signal,
        credentials: e.credentials
      }));
    if ("err" in roster) marks[`roster_${roster.cause}`] = !0;else if (x && !Vbe({
      session: session,
      epoch: F,
      roster: roster,
      storageV5: void 0
    }).adopted) marks.roster_outlived = !0;else if (!roster.capabilities.includes("assets")) if (!R) return l(fail("unavailable_to_account", "roster_no_assets"));else marks.roster_no_assets = !0;
  }
  let C = {
      maxRedirects: 0,
      headers: {
        ...lu(),
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
    D = async () => R ? (await Cfr("POST", route, body, C, Lz)).res : Gt.post(route, body, {
      ...C,
      host: "frame",
      auth: "claude-ai-oauth",
      refreshOAuth: !0,
      credentials: e.credentials
    }),
    S;
  try {
    if (E && e.verb === "upload" && !B4e(Lz)) {
      let x;
      try {
        x = (await Cfr("POST", e.probeRoute, _({
          limit: 1
        }), {
          maxRedirects: 0,
          headers: {
            ...lu(),
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          timeout: re,
          maxContentLength: 262144,
          validateStatus: () => !0,
          signal: signal
        }, Lz)).res;
      } catch (error) {
        if (Ua(error) || error instanceof Ke) throw error;
        return Z7(Lz, !0), l(fail("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe"));
      }
      let T = Eso(x);
      if (T.refused) return Z7(Lz), h();
      if (!T.vouched) {
        if (!x.ok || x.status >= 500 || x.status === 499) Z7(Lz, !0);
        return l(fail("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later"));
      }
      Qoe(Lz);
    }
    let F = x => {
      if (!E) return !1;
      let T = Eso(x);
      if (T.refused && !(x.ok && x.status === 413)) return Z7(Lz), vso(Lz), !0;
      if (T.vouched) Qoe(Lz);else if (!B4e(Lz) && (!x.ok || x.status >= 500 || x.status === 499)) Z7(Lz, !0);
      return !1;
    };
    if (S = await D(), F(S)) return h();
    if (S.ok && (S.status === 429 || S.status === 503) && U(S.status, S.data).code !== "policy_denied") {
      let x = S.response.headers?.["retry-after"],
        T = zg(typeof x === "string" ? x : void 0);
      if (T !== void 0 && T <= Ce) {
        if (await Y(T, signal), signal.aborted) throw new Ke();
        if (marks.retried = !0, S = await D(), F(S)) return h();
      }
    }
  } catch (error) {
    if (Ua(error) || error instanceof Ke) throw error;
    if (E && !B4e(Lz)) Z7(Lz, !0);
    if (e0(error) !== void 0) return l(fail("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent \u2014 one retry is safe"));
    return l(fail("store_unavailable", "request_error", verb === "upload" ? "the request failed in transit or timed out \u2014 a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)" : verb === "copy" ? 'the request failed in transit or timed out \u2014 a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out \u2014 one retry is safe"));
  }
  if (!S.ok) return l({
    ...fail("store_unavailable", S.reason.replace(/-/g, "_")),
    message: S.reason === "no-auth" ? R ? rXe(S.detail) : Hh(S.detail) : `asset ${verb} unavailable: ${S.reason}`
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
function X(e, r) {
  let {
      code: code_2,
      reason: reason_2,
      detail: detail_2
    } = U(e.status, e.data),
    u = zg(e.retryAfter);
  return r(code_2, reason_2, code_2 === "rate_limited" ? u !== void 0 ? `${Math.max(1, Math.ceil(u / 1000))}s` : void 0 : code_2 === "upstream_error" && detail_2 === void 0 ? `HTTP ${e.status}` : detail_2);
}
async function Qur(e, r) {
  let {
      slug: slug,
      bytes: d,
      contentType: contentType_2
    } = e,
    marks_2 = {},
    fail_2 = V(E => m("artifact_asset_upload", E, marks_2), "upload");
  if (!ar.test(slug)) return fail_2("invalid_request", "invalid_slug", "not a valid artifact id");
  let i = yRt(contentType_2);
  if (d.length === 0 || d.length > i) return d.length === 0 ? fail_2("invalid_request", "size", "the file is empty") : fail_2("too_large", "size", contentType_2 === q ? `the SVG exceeds the ${i >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it` : `the file exceeds the ${i >> 20} MiB per-asset limit \u2014 compress or split it`);
  let l = await W({
      verb: "upload",
      route: De(slug),
      probeRoute: me(slug),
      body: d,
      contentType: contentType_2,
      maxBodyLength: mD + 4096,
      marks: marks_2,
      fail: fail_2,
      credentials: e.credentials
    }, r),
    v = E => marks_2.retried === !0 ? {
      ...E,
      resent: !0
    } : E;
  if (!l.replied) return v(l.failure);
  if (l.status !== 200) return v(X(l, fail_2));
  let c = pe().safeParse(l.data);
  if (!c.success || c.data.content_type !== contentType_2 || (contentType_2 === q ? c.data.size_bytes === 0 || c.data.size_bytes > mD : c.data.size_bytes !== d.length)) return v(fail_2("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it"));
  return ee().assetsOnRoster = !0, g("artifact_asset_upload", {
    ...marks_2,
    size_bytes: c.data.size_bytes
  }), {
    kind: "ok",
    id: c.data.opaque_id,
    url: te(c.data.opaque_id, c.data.url),
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
async function Als(e, r) {
  let {
      slug: slug_2,
      after: after
    } = e,
    marks_3 = {},
    fail_3 = V(l => m("artifact_asset_list", l, marks_3), "list");
  if (!ar.test(slug_2)) return fail_3("invalid_request", "invalid_slug", "not a valid artifact id");
  if (after !== void 0 && !z7.test(after)) return fail_3("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
  let o = await W({
    verb: "list",
    route: me(slug_2),
    body: _({
      ...(after !== void 0 && {
        after: after
      }),
      limit: limit
    }),
    contentType: "application/json",
    timeoutMs: re,
    marks: marks_3,
    fail: fail_3,
    credentials: e.credentials
  }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return X(o, fail_3);
  let i = Te().safeParse(o.data);
  if (!i.success) return fail_3("upstream_error", "malformed_reply", "the listing was unreadable");
  return ee().assetsOnRoster = !0, mFt(slug_2, i.data.cowritten), Mmt(slug_2, i.data.outside_writer), g("artifact_asset_list", {
    ...marks_3,
    count: i.data.assets.length
  }), {
    kind: "ok",
    assets: i.data.assets.map(item => ({
      id: item.opaque_id,
      url: te(item.opaque_id, item.url),
      contentType: item.content_type,
      sizeBytes: item.size_bytes,
      ...(item.sha256 !== void 0 && {
        sha256: item.sha256
      }),
      createdAt: J(item.created_at)
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
async function xls(e, r) {
  let {
      slug: slug_3,
      id: id
    } = e,
    marks_4 = {},
    fail_4 = V(l => m("artifact_asset_delete", l, marks_4), "delete");
  if (!ar.test(slug_3)) return fail_4("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!Um.test(id)) return fail_4("invalid_request", "invalid_id", "not a valid asset id");
  let o = await W({
    verb: "delete",
    route: Me(slug_3, id),
    body: "{}",
    contentType: "application/json",
    timeoutMs: re,
    marks: marks_4,
    fail: fail_4,
    credentials: e.credentials
  }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return X(o, fail_4);
  let i = Fe().safeParse(o.data);
  if (!i.success) return fail_4("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable \u2014 list the assets to check");
  return ee().assetsOnRoster = !0, g("artifact_asset_delete", {
    ...marks_4,
    deleted: i.data.deleted
  }), {
    kind: "ok",
    deleted: i.data.deleted
  };
}
var Ie = f(() => St({
    assets: sr(pe().extend({
      from_id: ge().regex(Um)
    })).max(Woe)
  })),
  timeoutMs = 120000;
async function Pls(e, r) {
  let {
      slug: slug_4,
      fromSlug: fromSlug,
      ids: ids
    } = e,
    u = e.crossOrgOk === !0,
    marks_5 = {},
    fail_5 = V(c => m("artifact_asset_copy", c, marks_5), "copy");
  if (!ar.test(slug_4) || !ar.test(fromSlug)) return fail_5("invalid_request", "invalid_slug", "not a valid artifact id");
  if (slug_4 === fromSlug) return fail_5("invalid_request", "same_artifact", "from_url names the destination itself \u2014 its assets are already there");
  if (ids.length === 0 || ids.length > Woe || !ids.every(item => Um.test(item)) || new Set(ids).size !== ids.length) return fail_5("invalid_request", "invalid_ids", `asset_ids must be 1\u2013${Woe} distinct asset ids`);
  let l = await W({
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
  if (l.status !== 200) return u && l.status === 400 && U(400, l.data).detail === "invalid request body" ? fail_5("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet") : X(l, fail_5);
  let v = Ie().safeParse(l.data);
  if (!v.success || v.data.assets.length !== ids.length || v.data.assets.some((item, index) => item.from_id !== ids[index])) return fail_5("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable \u2014 run action "list_assets" on the destination before retrying, or the assets may be copied twice');
  return ee().assetsOnRoster = !0, g("artifact_asset_copy", {
    ...marks_5,
    count: ids.length
  }), {
    kind: "ok",
    assets: v.data.assets.map(item => ({
      fromId: item.from_id,
      id: item.opaque_id,
      url: te(item.opaque_id, item.url),
      sizeBytes: item.size_bytes,
      contentType: item.content_type,
      ...(item.sha256 !== void 0 && {
        sha256: item.sha256
      })
    }))
  };
}
var timeout = 90000;
function Zur(e) {
  for (let [r, s] of H) if (s === e) return r;
  return;
}
var ce = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function Ols(e, r, signal_2, credentials, {
  admitPublicRead: admitPublicRead,
  probeToolUseId: probeToolUseId
} = {}) {
  let o = (reason_3, w) => (m("artifact_asset_read", reason_3), {
    kind: "error",
    message: `asset read failed: ${w}`,
    reason: reason_3
  });
  if (!ar.test(e.slug)) return o("invalid_slug", "not a valid artifact id");
  if (!Um.test(r)) return o("invalid_id", "not a valid asset id");
  let i = _Mn(),
    agentDirect = U4e(),
    v = !i && (Q7() || s8t() && !eU(uA));
  if (!v && !i && a.CLAUDE_CODE_REMOTE) return o("relay_unavailable", ce);
  let c = await XA(e, "artifact_asset_read", signal_2, {
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
  if (publicRead && !BE()) return o("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
  if (publicRead && admitPublicRead?.() !== !0) return p("artifact_asset_read", reason_4), {
    kind: "error",
    reason: reason_4,
    message: `asset read failed: ${xin}`
  };
  let relay = v && !publicRead,
    C = `/_f/${ver}/_blob/${r}`,
    D = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    {
      host: host,
      base: base,
      headers: headers
    } = R5t(e),
    T = () => (ee().contentHostEgressDenied.add(e.env), o("egress_blocked", `this environment's network allowlist blocks ${host}, so the asset cannot be fetched (access to the artifact itself is fine). ${publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${A5t(e.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${D} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`)),
    M = (y, w) => (t(`[artifact] asset fetch: egress proxy denied (${w})`), o("egress_denied", `artifact content fetch refused by the environment's egress proxy (${x4(y)})`)),
    he = (y, w) => {
      if (w !== void 0) t(`[artifact] asset fetch: proxy refused, marker ${w}`);
      return o("proxy_refused", `the proxy refused the connection to the artifact's content host (${x4(y)})`);
    },
    N = !1,
    I;
  if (!relay && R !== void 0 && T5t(c.data)) {
    try {
      I = await C5t(e.slug, C, {
        token: R,
        timeout: timeout,
        maxContentLength: mD + 1,
        signal: signal_2,
        credentials: credentials
      });
    } catch (error) {
      if (Ua(error) || error instanceof Ke) throw error;
      return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${mD >> 20} MiB limit`);
    }
    N = I.kind === "answer";
  }
  let A;
  try {
    if (I?.kind === "answer") A = I;else if (relay) {
      if (R === void 0) return o("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let y = await E5t(e.slug, C, {
        token: R,
        timeout: timeout,
        maxContentLength: mD + 1,
        signal: signal_2,
        retryBudget: P4e()
      });
      if (!y.ok) return o(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? rXe(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
      A = {
        status: y.status,
        headers: y.response.headers,
        data: y.data
      };
    } else {
      let y = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`,
        w = await sl.get(`${base}${C}${y}`, {
          signal: signal_2,
          timeout: timeout,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: mD + 1,
          validateStatus: () => !0,
          ...(headers && {
            headers: headers
          })
        });
      if (YU(w.status, w.headers)) return T();
      let P = ite(w.headers);
      if (P !== void 0 && (w.status < 200 || w.status >= 300)) return M(w.status, P);
      ee().contentHostEgressDenied.delete(e.env), A = {
        status: w.status,
        headers: w.headers,
        data: w.data
      };
    }
  } catch (error) {
    if (Ua(error) || error instanceof Ke) throw error;
    if (relay) AAe();
    let w = relay ? void 0 : e0(error);
    if (w !== void 0) {
      if (YU(w.connectStatus, w.headers)) return T();
      let P = ite(w.headers);
      if (P !== void 0) return M(w.connectStatus, P);
      return he(w.connectStatus, qmt(w.headers));
    }
    return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${mD >> 20} MiB limit`);
  }
  if (relay && mit(A.status)) return o("relay_unavailable", ce);
  if (relay && fit(A.status, A.data)) return o("network_off", `${pit}; retrying from here will not help`);
  if (relay && zY(A.status)) return o(`http_${A.status}`, k5t(A.status));
  if (relay) AAe(A.status);
  if (A.status === 404) return o("http_404", relay ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"');
  if (publicRead && A.status === 403 && lIe(A.headers, ste(A.headers, A.data, y => y))) return o("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
  let K = relay ? void 0 : Gmt({
    status: A.status,
    headers: A.headers,
    data: A.data,
    redact: y => Zst(y, R),
    label: "[artifact] asset fetch"
  });
  if (K !== void 0) return o(K, Vmt[K]);
  if (A.status === 401 || A.status === 403) return o(`http_${A.status}`, relay ? "the cloud session's artifact mount refused the read \u2014 asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down since the id was listed");
  if (A.status !== 200) return o(`http_${A.status}`, `unexpected answer from the ${N ? "artifact service" : "content host"} (HTTP ${A.status})`);
  if (relay) Qoe(uA);
  let ae = A.headers,
    oe = relay || N ? O4e(ae) : ae?.["content-type"],
    contentType_3 = typeof oe === "string" ? nt(oe, ";").trim().toLowerCase() : "";
  if (Zur(contentType_3) === void 0) return o("unexpected_type", `the ${N ? "artifact service" : "content host"} served a type this tool does not save`);
  let bytes_2 = Buffer.from(A.data ?? new ArrayBuffer(0));
  if (bytes_2.length === 0 || bytes_2.length > mD) return o("size", bytes_2.length === 0 ? "the asset is empty" : `the asset exceeds the ${mD >> 20} MiB limit`);
  return {
    kind: "ok",
    bytes: bytes_2,
    contentType: contentType_3,
    relay: relay,
    agentDirect: agentDirect,
    publicRead: publicRead
  };
}
export { B3t, Tls, yRt, Cls, _Rt, bAe, bRt, message_5 as j3t, W3t, z3t, message_6 as eIn, Dst, Rls, message as G3t, D1, Lst, tIn, SAe, _no, bno, Sno, SRt, aue, BL, nIn, z7, wno, HP, Woe, VI, lue, Qur, Als, xls, Pls, Zur, Ols };