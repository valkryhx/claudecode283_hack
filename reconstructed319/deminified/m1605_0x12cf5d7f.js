// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { MX as product, Zue as attach, qCe } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { V6, F2, UZ } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { F$t, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ac } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { BLe } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { GTe, Vce } from "B:/~BUN/root/chunk-6bx54the.js";
import { Jce } from "B:/~BUN/root/chunk-5m83sh3a.js";
import { KIe } from "B:/~BUN/root/chunk-9hkf26x4.js";
import { Av } from "B:/~BUN/root/chunk-zx0hhrva.js";
import { o, E, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { basename as N, join as z, sep as M } from "path";
var A = new Set(["x-upload-token", "content-type"]),
  P = 4096,
  timeout = 120000,
  maxContentLength = 4096,
  U = p(() => u({
    sha256: o(),
    size: E()
  })),
  C = {
    400: "put_hash_mismatch",
    403: "put_refused",
    409: "put_already_used",
    410: "put_expired",
    413: "put_size_mismatch",
    429: "put_busy",
    503: "put_busy"
  },
  F = 2,
  x = 2000,
  L = 1e4;
async function T(e, s, l, h, signal) {
  let baseUrl = F$t(e.url),
    m = baseUrl === void 0 ? void 0 : new URL(e.url);
  if (baseUrl === void 0 || m === void 0 || m.search !== "" || m.hash !== "" || !h.endsWith("/") || !m.pathname.startsWith(h) || !/^[A-Za-z0-9_-]{1,256}$/.test(m.pathname.slice(h.length))) return "put_url_refused";
  let headers = {
    "content-type": "application/octet-stream"
  };
  for (let [r, a] of Object.entries(e.headers)) {
    if (!A.has(r.toLowerCase()) || a.length > P || /[^\x20-\x7e]/.test(a)) return "put_header_refused";
    headers[r.toLowerCase()] = a;
  }
  try {
    for (let r = 0;; r++) {
      let a = await jt.put(`/${m.pathname.slice(1)}`, s, {
        auth: "none",
        baseUrl: baseUrl,
        headers: headers,
        maxRedirects: 0,
        maxBodyLength: s.length,
        maxContentLength: maxContentLength,
        timeout: timeout,
        signal: signal,
        validateStatus: () => !0
      });
      if (!a.ok) return a.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (a.status === 200) {
        let S = U().safeParse(a.data);
        return S.success && S.data.sha256 === l && S.data.size === s.length ? void 0 : "put_bad_answer";
      }
      let c = C[a.status] ?? "put_failed";
      if (c !== "put_busy" || r === F) return c;
      let f = Number(a.response.headers["retry-after"]);
      if (await J(Number.isFinite(f) && f >= 0 ? Math.min(f * 1000, L) : x, signal), signal.aborted) return "canceled";
    }
  } catch (error) {
    if (signal.aborted) return "canceled";
    return t(`[file inputs] upload threw: ${d(error)}`, {
      level: "error"
    }), k(error) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network";
  }
}
function jir({
  screen: screen,
  maxFileBytes: maxFileBytes,
  maxTotalBytes: maxTotalBytes,
  uploadPathPrefix: uploadPathPrefix,
  namesResolvedPaths = !1,
  onRejectedPastScreen: onRejectedPastScreen
}) {
  return {
    async hash(m, _) {
      let r = [],
        a = 0;
      for (let path of m) {
        if (_.aborted) return [...r, {
          path: path,
          code: "canceled"
        }];
        let f = await OXr(path, screen, maxFileBytes, {
          onRejectedPastScreen: onRejectedPastScreen
        });
        if ("code" in f) return [...r, namesResolvedPaths ? f : {
          path: path,
          code: f.code
        }];
        if (a += f.buf.length, a > maxTotalBytes) return [...r, {
          path: path,
          code: "too_large_total"
        }];
        r.push({
          path: path,
          name: f.name,
          size: f.buf.length,
          sha256: f.sha256
        });
      }
      return r;
    },
    async put(m, _) {
      let r = [],
        a = 0;
      for (let {
        path: path_2,
        sha256: sha256,
        url: url,
        headers: headers_2
      } of m) {
        if (_.aborted) return [...r, {
          path: path_2,
          code: "canceled"
        }];
        let R = await OXr(path_2, screen, maxFileBytes, {
          onRejectedPastScreen: onRejectedPastScreen
        });
        if ("code" in R) return [...r, R.code === "resolves_elsewhere" ? {
          path: path_2,
          code: "changed"
        } : R];
        if (a += R.buf.length, a > maxTotalBytes) return [...r, {
          path: path_2,
          code: "too_large_total"
        }];
        if (R.sha256 !== sha256) return [...r, {
          path: path_2,
          code: "changed"
        }];
        let code = await T({
          url: url,
          headers: headers_2
        }, R.buf, sha256, uploadPathPrefix, _);
        if (code !== void 0) return [...r, {
          path: path_2,
          code: code
        }];
        r.push({
          path: path_2,
          ok: !0
        });
      }
      return r;
    }
  };
}
function v(e, s) {
  let l = Ac(e);
  if (l === null) return !0;
  return e !== s && w(l) !== w(s) && !(i.CLAUDE_CODE_REMOTE === !0 && Jce(l, s, {
    product: product,
    attach: attach
  })) && !(tn() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && Jce(l, s, qCe));
}
function w(e) {
  return BLe(En(e.length > 1 && e.endsWith(M) ? e.slice(0, -1) : e)).replace(/^[a-z]:/, s => s.toUpperCase());
}
async function o7o(e, s, {
  fromChat = !1
} = {}) {
  return (await UZ(e, s)) || !fromChat && [e, s].some(item => F2(item) || V6(item));
}
async function OXr(path_3, s, l, {
  followsLinks = !1,
  onRejectedPastScreen: onRejectedPastScreen_2
} = {}) {
  let n = await s(path_3);
  if (n === void 0) return {
    path: path_3,
    code: "path_rejected"
  };
  if (n.requiredDigest === void 0 && (await o7o(path_3, n.realPath, n))) return t("[file inputs] a path was rejected: a credential, or Claude's own"), onRejectedPastScreen_2?.(path_3, "credential_or_own_file"), {
    path: path_3,
    code: "path_rejected"
  };
  if (!followsLinks && v(path_3, n.realPath) && !(n.requiredDigest !== void 0 && Ac(path_3) === z(Av(), N(n.realPath)))) return {
    path: path_3,
    code: "resolves_elsewhere",
    resolved: n.realPath
  };
  let name = await GTe(n.realPath);
  if (KIe.test(name)) return {
    path: path_3,
    code: "name_direction"
  };
  let _ = await Vce(n.realPath, l);
  if (!("buf" in _)) return {
    path: path_3,
    code: _.refusal
  };
  let sha256_2 = nt(_.buf);
  if (n.requiredDigest !== void 0 && sha256_2 !== n.requiredDigest) return onRejectedPastScreen_2?.(path_3, "attachment_changed"), {
    path: path_3,
    code: "path_rejected"
  };
  return {
    buf: _.buf,
    name: name,
    sha256: sha256_2
  };
}
export { jir, o7o, OXr };