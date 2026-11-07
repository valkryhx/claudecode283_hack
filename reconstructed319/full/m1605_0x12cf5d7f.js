// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  En
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  MX,
  Zue,
  qCe
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  V6,
  F2,
  UZ
} from "B:/~BUN/root/chunk-hjds4dtx.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  F$t,
  jt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ac
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  BLe
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  GTe,
  Vce
} from "B:/~BUN/root/chunk-6bx54the.js";
import {
  Jce
} from "B:/~BUN/root/chunk-5m83sh3a.js";
import {
  KIe
} from "B:/~BUN/root/chunk-9hkf26x4.js";
import {
  Av
} from "B:/~BUN/root/chunk-zx0hhrva.js";
import {
  o,
  E,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  basename as N,
  join as z,
  sep as M
} from "path";
var A = new Set(["x-upload-token", "content-type"]),
  P = 4096,
  D = 120000,
  O = 4096,
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
async function T(e, s, l, h, g) {
  let n = F$t(e.url),
    m = n === void 0 ? void 0 : new URL(e.url);
  if (n === void 0 || m === void 0 || m.search !== "" || m.hash !== "" || !h.endsWith("/") || !m.pathname.startsWith(h) || !/^[A-Za-z0-9_-]{1,256}$/.test(m.pathname.slice(h.length))) return "put_url_refused";
  let _ = {
    "content-type": "application/octet-stream"
  };
  for (let [r, a] of Object.entries(e.headers)) {
    if (!A.has(r.toLowerCase()) || a.length > P || /[^\x20-\x7e]/.test(a)) return "put_header_refused";
    _[r.toLowerCase()] = a
  }
  try {
    for (let r = 0;; r++) {
      let a = await jt.put(`/${m.pathname.slice(1)}`, s, {
        auth: "none",
        baseUrl: n,
        headers: _,
        maxRedirects: 0,
        maxBodyLength: s.length,
        maxContentLength: O,
        timeout: D,
        signal: g,
        validateStatus: () => !0
      });
      if (!a.ok) return a.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (a.status === 200) {
        let S = U().safeParse(a.data);
        return S.success && S.data.sha256 === l && S.data.size === s.length ? void 0 : "put_bad_answer"
      }
      let c = C[a.status] ?? "put_failed";
      if (c !== "put_busy" || r === F) return c;
      let f = Number(a.response.headers["retry-after"]);
      if (await J(Number.isFinite(f) && f >= 0 ? Math.min(f * 1000, L) : x, g), g.aborted) return "canceled"
    }
  } catch (r) {
    if (g.aborted) return "canceled";
    return t(`[file inputs] upload threw: ${d(r)}`, {
      level: "error"
    }), k(r) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network"
  }
}

function jir({
  screen: e,
  maxFileBytes: s,
  maxTotalBytes: l,
  uploadPathPrefix: h,
  namesResolvedPaths: g = !1,
  onRejectedPastScreen: n
}) {
  return {
    async hash(m, _) {
      let r = [],
        a = 0;
      for (let c of m) {
        if (_.aborted) return [...r, {
          path: c,
          code: "canceled"
        }];
        let f = await OXr(c, e, s, {
          onRejectedPastScreen: n
        });
        if ("code" in f) return [...r, g ? f : {
          path: c,
          code: f.code
        }];
        if (a += f.buf.length, a > l) return [...r, {
          path: c,
          code: "too_large_total"
        }];
        r.push({
          path: c,
          name: f.name,
          size: f.buf.length,
          sha256: f.sha256
        })
      }
      return r
    },
    async put(m, _) {
      let r = [],
        a = 0;
      for (let {
          path: c,
          sha256: f,
          url: S,
          headers: y
        }
        of m) {
        if (_.aborted) return [...r, {
          path: c,
          code: "canceled"
        }];
        let R = await OXr(c, e, s, {
          onRejectedPastScreen: n
        });
        if ("code" in R) return [...r, R.code === "resolves_elsewhere" ? {
          path: c,
          code: "changed"
        } : R];
        if (a += R.buf.length, a > l) return [...r, {
          path: c,
          code: "too_large_total"
        }];
        if (R.sha256 !== f) return [...r, {
          path: c,
          code: "changed"
        }];
        let b = await T({
          url: S,
          headers: y
        }, R.buf, f, h, _);
        if (b !== void 0) return [...r, {
          path: c,
          code: b
        }];
        r.push({
          path: c,
          ok: !0
        })
      }
      return r
    }
  }
}

function v(e, s) {
  let l = Ac(e);
  if (l === null) return !0;
  return e !== s && w(l) !== w(s) && !(i.CLAUDE_CODE_REMOTE === !0 && Jce(l, s, {
    product: MX,
    attach: Zue
  })) && !(tn() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && Jce(l, s, qCe))
}

function w(e) {
  return BLe(En(e.length > 1 && e.endsWith(M) ? e.slice(0, -1) : e)).replace(/^[a-z]:/, (s) => s.toUpperCase())
}
async function o7o(e, s, {
  fromChat: l = !1
} = {}) {
  return await UZ(e, s) || !l && [e, s].some((h) => F2(h) || V6(h))
}
async function OXr(e, s, l, {
  followsLinks: h = !1,
  onRejectedPastScreen: g
} = {}) {
  let n = await s(e);
  if (n === void 0) return {
    path: e,
    code: "path_rejected"
  };
  if (n.requiredDigest === void 0 && await o7o(e, n.realPath, n)) return t("[file inputs] a path was rejected: a credential, or Claude's own"), g?.(e, "credential_or_own_file"), {
    path: e,
    code: "path_rejected"
  };
  if (!h && v(e, n.realPath) && !(n.requiredDigest !== void 0 && Ac(e) === z(Av(), N(n.realPath)))) return {
    path: e,
    code: "resolves_elsewhere",
    resolved: n.realPath
  };
  let m = await GTe(n.realPath);
  if (KIe.test(m)) return {
    path: e,
    code: "name_direction"
  };
  let _ = await Vce(n.realPath, l);
  if (!("buf" in _)) return {
    path: e,
    code: _.refusal
  };
  let r = nt(_.buf);
  if (n.requiredDigest !== void 0 && r !== n.requiredDigest) return g?.(e, "attachment_changed"), {
    path: e,
    code: "path_rejected"
  };
  return {
    buf: _.buf,
    name: m,
    sha256: r
  }
}
export {
  jir,
  o7o,
  OXr
};
