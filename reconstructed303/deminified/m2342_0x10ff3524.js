// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { H6n, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { u5n as serverId, U2s as ccrEntryPath, nBt as path_4 } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Bct, NMt, IUe } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { AKt } from "B:/~BUN/root/chunk-p8gd2veh.js";
import { o, v, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
var A = new Set(["x-upload-token", "content-type"]),
  E = 4096,
  timeout = 120000,
  maxContentLength = 4096,
  P = f(() => u({
    sha256: o(),
    size: v()
  })),
  w = {
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
  C = 1e4;
async function S(a, p, m, i, signal) {
  let baseUrl = H6n(a.url),
    e = baseUrl === void 0 ? void 0 : new URL(a.url);
  if (baseUrl === void 0 || e === void 0 || e.search !== "" || e.hash !== "" || !i.endsWith("/") || !e.pathname.startsWith(i) || !/^[A-Za-z0-9_-]{1,256}$/.test(e.pathname.slice(i.length))) return "put_url_refused";
  let headers = {
    "content-type": "application/octet-stream"
  };
  for (let [r, n] of Object.entries(a.headers)) {
    if (!A.has(r.toLowerCase()) || n.length > E || /[^\x20-\x7e]/.test(n)) return "put_header_refused";
    headers[r.toLowerCase()] = n;
  }
  try {
    for (let r = 0;; r++) {
      let n = await Gt.put(`/${e.pathname.slice(1)}`, p, {
        auth: "none",
        baseUrl: baseUrl,
        headers: headers,
        maxRedirects: 0,
        maxBodyLength: p.length,
        maxContentLength: maxContentLength,
        timeout: timeout,
        signal: signal,
        validateStatus: () => !0
      });
      if (!n.ok) return n.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (n.status === 200) {
        let l = P().safeParse(n.data);
        return l.success && l.data.sha256 === m && l.data.size === p.length ? void 0 : "put_bad_answer";
      }
      let g = w[n.status] ?? "put_failed";
      if (g !== "put_busy" || r === F) return g;
      let h = Number(n.response.headers["retry-after"]);
      if (await Y(Number.isFinite(h) && h >= 0 ? Math.min(h * 1000, C) : x, signal), signal.aborted) return "canceled";
    }
  } catch (error) {
    if (signal.aborted) return "canceled";
    return t(`[file inputs] upload threw: ${d(error)}`, {
      level: "error"
    }), k(error) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network";
  }
}
function mTn({
  screen: screen,
  maxFileBytes: maxFileBytes,
  maxTotalBytes: maxTotalBytes,
  uploadPathPrefix: uploadPathPrefix
}) {
  return {
    async hash(c, s) {
      let e = [],
        _ = 0;
      for (let path of c) {
        if (s.aborted) return [...e, {
          path: path,
          code: "canceled"
        }];
        let n = await y(path, screen, maxFileBytes);
        if ("code" in n) return [...e, n];
        if (_ += n.buf.length, _ > maxTotalBytes) return [...e, {
          path: path,
          code: "too_large_total"
        }];
        e.push({
          path: path,
          name: n.name,
          size: n.buf.length,
          sha256: n.sha256
        });
      }
      return e;
    },
    async put(c, s) {
      let e = [],
        _ = 0;
      for (let {
        path: path_2,
        sha256: sha256,
        url: url,
        headers: headers_2
      } of c) {
        if (s.aborted) return [...e, {
          path: path_2,
          code: "canceled"
        }];
        let l = await y(path_2, screen, maxFileBytes);
        if ("code" in l) return [...e, l];
        if (_ += l.buf.length, _ > maxTotalBytes) return [...e, {
          path: path_2,
          code: "too_large_total"
        }];
        if (l.sha256 !== sha256) return [...e, {
          path: path_2,
          code: "changed"
        }];
        let code = await S({
          url: url,
          headers: headers_2
        }, l.buf, sha256, uploadPathPrefix, s);
        if (code !== void 0) return [...e, {
          path: path_2,
          code: code
        }];
        e.push({
          path: path_2,
          ok: !0
        });
      }
      return e;
    }
  };
}
async function y(path_3, p, m) {
  let i = await p(path_3);
  if (i === void 0) return {
    path: path_3,
    code: "path_rejected"
  };
  if (i.requiredDigest === void 0 && (await Bct(path_3, i.realPath))) return t("[file inputs] a path was rejected: a credential, or Claude's own"), {
    path: path_3,
    code: "path_rejected"
  };
  let name = await NMt(i.realPath);
  if (AKt.test(name)) return {
    path: path_3,
    code: "name_direction"
  };
  let s = await IUe(i.realPath, m);
  if (!("buf" in s)) return {
    path: path_3,
    code: s.refusal
  };
  let sha256_2 = st(s.buf);
  if (i.requiredDigest !== void 0 && sha256_2 !== i.requiredDigest) return {
    path: path_3,
    code: "path_rejected"
  };
  return {
    buf: s.buf,
    name: name,
    sha256: sha256_2
  };
}
var jrt = 256,
  bEt = 20971520,
  CKt = 67108864;
var RKt = [{
  path: path_4,
  serverId: serverId,
  policy: "allow_cobalt_plinth",
  uploadPathPrefix: `${path_4}/upload/`,
  ccrEntryPath: ccrEntryPath
}];
export { mTn, jrt, bEt, CKt, RKt };