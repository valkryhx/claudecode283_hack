// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { G, pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { yne, hze, Jle, cm, BB } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { eT } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Kct, qq, DBn, Yct } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Cge, fW, sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { sK } from "B:/~BUN/root/chunk-nsa84wqe.js";
import { o, v, u, fe, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { createHash as F } from "crypto";
import { fileURLToPath as M } from "url";
import { createPublicKey as K } from "crypto";
var I = {
    id: "claude-code-release-signing-key",
    spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ=="
  },
  roots = [I],
  id = "managed-model-catalog-public-key";
function Vxn(e) {
  if (e === void 0) return;
  return e === id ? "managed_key" : "compiled_roots";
}
function H(e) {
  let r = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(e.trim());
  if (r === null || r[1] === void 0) return;
  let n = r[1].replace(/\s+/g, "");
  if (n.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(n)) return;
  let i = Buffer.from(n, "base64");
  return i.length > 0 && i.toString("base64") === n ? new Uint8Array(i) : void 0;
}
var y = 2048;
function P(e) {
  let der = H(e);
  if (der === void 0) return {
    ok: !1,
    reason: "not_spki_pem"
  };
  let n, i;
  try {
    let s = K({
      key: Buffer.from(der),
      format: "der",
      type: "spki"
    });
    n = s.asymmetricKeyType, i = s.asymmetricKeyDetails?.modulusLength;
  } catch {
    return {
      ok: !1,
      reason: "not_spki_pem"
    };
  }
  if (n !== "rsa") return {
    ok: !1,
    reason: "not_rsa"
  };
  if (i === void 0 || i < y) return {
    ok: !1,
    reason: "modulus_too_short"
  };
  return {
    ok: !0,
    der: der
  };
}
function R(e) {
  return new Uint8Array(Buffer.from(e.spkiBase64, "base64"));
}
var k = "https://downloads.claude.ai/model-catalog/v1/catalog.json",
  b = ".raw-sig.json";
function S() {
  return {
    url: void 0,
    publicKey: void 0
  };
}
function E() {
  let {
    url: url,
    publicKey: publicKey
  } = S();
  if (url === void 0 && publicKey === void 0) return {
    url: void 0,
    publicKey: void 0
  };
  let n = eT();
  if (!BB(n) && !(n === "remote" && cm())) return t(`[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${n ?? "none"}${n === "remote" ? ", unconfirmed by the server" : ""})`), {
    url: void 0,
    publicKey: void 0
  };
  return {
    url: url,
    publicKey: publicKey
  };
}
function x6t() {
  let {
    url: url_2,
    publicKey: publicKey_2
  } = S();
  if (url_2 === void 0 && publicKey_2 === void 0) return !1;
  return eT() === "remote" && !cm();
}
function iis() {
  if (!x6t()) return !1;
  let {
    url: url_3
  } = S();
  if (url_3 === void 0) return !1;
  try {
    return _(new URL(url_3)) === "file";
  } catch {
    return !1;
  }
}
function U(e = E()) {
  return e.url ?? z(a.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function ais() {
  let e = U();
  if (e === void 0) return !1;
  try {
    return _(new URL(e)) === "file";
  } catch {
    return !1;
  }
}
function z(e) {
  let r = e?.trim();
  return r ? r : void 0;
}
function yCt() {
  let e = E(),
    r = U(e) ?? k,
    n;
  try {
    n = new URL(r);
  } catch {
    return t("[publishedCatalog] configured catalog URL is not a URL; published path off"), {
      ok: !1,
      reason: "invalid_url"
    };
  }
  let kind = _(n);
  if (kind === void 0) return t(`[publishedCatalog] configured catalog URL has unsupported scheme ${n.protocol}; published path off`), {
    ok: !1,
    reason: "invalid_url"
  };
  if (kind !== "file" && yne(n.hostname)) return t("[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off"), {
    ok: !1,
    reason: "invalid_url"
  };
  let url_4 = n.toString();
  return {
    ok: !0,
    source: {
      kind: kind,
      url: url_4,
      trust: Y(kind, e),
      cacheKey: uZr(url_4)
    }
  };
}
function _(e) {
  if (e.protocol === "file:") return e.hostname === "" || e.hostname === "localhost" ? "file" : void 0;
  if (e.protocol !== "https:" && e.protocol !== "http:") return;
  return e.toString() === k ? "hosted" : "custom_url";
}
function Y(e, r) {
  if (e === "hosted" || r.publicKey === void 0) return {
    kind: "compiled_roots",
    roots: roots
  };
  if (r.url === void 0) return t("[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only"), {
    kind: "compiled_roots",
    roots: roots
  };
  let n = P(r.publicKey);
  if (!n.ok) return t(`[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${y} bits (${n.reason}); custom source refused`), {
    kind: "untrusted",
    reason: "invalid_public_key"
  };
  return {
    kind: "managed_key",
    roots: [...roots, {
      id: id,
      spkiBase64: Buffer.from(n.der).toString("base64")
    }]
  };
}
function uZr(e) {
  return F("sha256").update(e).digest("hex").slice(0, 32);
}
function T(e) {
  return M(e.url);
}
var qxn = 1,
  rAe = Kct,
  tst = 16384,
  N = 1,
  j = "RSASSA-PKCS1-v1_5-SHA512",
  x = f(() => u({
    schema: C(N),
    algorithm: C(j),
    signature: o().min(1),
    publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
  }).loose()),
  V = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[Zz]|[+-]\d{2}:\d{2})$/;
function lis(e) {
  if (e === void 0 || !V.test(e)) return;
  let r = Date.parse(e);
  return Number.isFinite(r) ? r : void 0;
}
var LKe = f(() => u({
  $schema: o().optional(),
  schema_version: C(qxn),
  version: v().int().nonnegative(),
  issued_at: o().optional(),
  expires_at: o().optional(),
  key_id: o().optional(),
  surfaces: fe(o(), DBn())
}).loose());
function gcr(e) {
  if (e === null || typeof e !== "object" || !("schema_version" in e)) return;
  let schema_version = e.schema_version;
  return typeof schema_version === "number" ? schema_version : void 0;
}
function _Ct(e, surface) {
  for (let [n, i] of [[surface, e.surfaces[surface]], ["cc", e.surfaces.cc]]) {
    if (i === void 0) continue;
    let s = Yct(i, n);
    if (s === null) continue;
    if (s.state === void 0) return {
      surface: surface,
      config: s.config
    };
    let {
      org_enforced_default_model: org_enforced_default_model,
      selection_source: selection_source,
      ...state
    } = s.state;
    return {
      surface: surface,
      config: s.config,
      state: state
    };
  }
  return null;
}
var B = "claude-code-model-catalog-v1\x00",
  L = {
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-512"
  };
async function bCt({
  documentBytes: documentBytes,
  sidecar: sidecar,
  roots: roots_2,
  context = B
}) {
  let s = x().safeParse(sidecar);
  if (!s.success) return {
    ok: !1,
    reason: "sidecar_invalid"
  };
  let l = Buffer.from(s.data.signature, "base64");
  if (l.length === 0 || l.toString("base64") !== s.data.signature) return {
    ok: !1,
    reason: "sidecar_invalid"
  };
  let d, c;
  for (let p of roots_2) {
    let m = A(R(p));
    if ((await q(m)) === s.data.publicKeySha256) {
      d = p, c = m;
      break;
    }
  }
  if (d === void 0 || c === void 0) return {
    ok: !1,
    reason: "unknown_key"
  };
  let h;
  try {
    h = await crypto.subtle.importKey("spki", c, L, !1, ["verify"]);
  } catch (error) {
    return t(`[publishedCatalog] trust root ${d.id} is not an importable RSA key: ${error instanceof Error ? error.name : "error"}`), {
      ok: !1,
      reason: "key_unusable"
    };
  }
  let g;
  try {
    g = await crypto.subtle.verify(L.name, h, A(l), X(documentBytes, context));
  } catch {
    g = !1;
  }
  return g ? {
    ok: !0,
    rootId: d.id
  } : {
    ok: !1,
    reason: "bad_signature"
  };
}
function X(e, r = B) {
  let n = new TextEncoder().encode(r),
    uint8Array = new Uint8Array(n.length + e.length);
  return uint8Array.set(n), uint8Array.set(e, n.length), uint8Array;
}
async function q(e) {
  let r = await crypto.subtle.digest("SHA-256", A(e));
  return Buffer.from(r).toString("hex");
}
function A(e) {
  let uint8Array_2 = new Uint8Array(e.byteLength);
  return uint8Array_2.set(e), uint8Array_2;
}
var timeout = 1e4;
async function Kxn(e, {
  etag: etag,
  noCache = !1
} = {}) {
  try {
    return e.kind === "file" ? await W(e) : await Q(e, {
      etag: etag,
      noCache: noCache
    });
  } catch (error) {
    let {
      kind: kind_2,
      status: l
    } = pi(error);
    switch (t(`[publishedCatalog] fetch failed: ${kind_2}${l !== void 0 ? ` ${l}` : ""}`), kind_2) {
      case "timeout":
        return {
          status: "error",
          reason: "timeout"
        };
      case "network":
        return {
          status: "error",
          reason: "network"
        };
      case "auth":
      case "http":
        return l === void 0 ? {
          status: "error",
          reason: re(error) ? "too_large" : "network"
        } : {
          status: "error",
          reason: "http_status",
          httpStatus: l
        };
      case "other":
        return {
          status: "error",
          reason: "exception"
        };
    }
  }
}
async function Q(e, {
  etag: etag_2,
  noCache: noCache_2
}) {
  let beforeRedirect = Z(e.url),
    headers = noCache_2 ? {
      "Cache-Control": "no-cache",
      Pragma: "no-cache"
    } : void 0,
    l = await O(e.url, {
      responseType: "arraybuffer",
      timeout: timeout,
      maxContentLength: rAe,
      maxBodyLength: rAe,
      validateStatus: () => !0,
      beforeRedirect: beforeRedirect,
      ...((etag_2 !== void 0 || headers !== void 0) && {
        headers: {
          ...headers,
          ...(etag_2 !== void 0 && {
            "If-None-Match": etag_2
          })
        }
      })
    }),
    httpStatus = l.status;
  if (httpStatus === 304 && etag_2 !== void 0) return t("[publishedCatalog] fetch: not modified"), {
    status: "not_modified",
    httpStatus: httpStatus
  };
  if (httpStatus < 200 || httpStatus >= 300) return t(`[publishedCatalog] fetch: HTTP ${httpStatus}`), {
    status: "error",
    reason: "http_status",
    httpStatus: httpStatus
  };
  let documentBytes_2 = w(l.data);
  if (documentBytes_2.length > rAe) return {
    status: "error",
    reason: "too_large",
    httpStatus: httpStatus
  };
  let sidecar_2 = void 0,
    hasSidecar = !1,
    p = await O(te(e.url), {
      responseType: "arraybuffer",
      timeout: timeout,
      maxContentLength: tst,
      maxBodyLength: tst,
      validateStatus: () => !0,
      beforeRedirect: beforeRedirect,
      ...(headers !== void 0 && {
        headers: headers
      })
    });
  if (p.status >= 200 && p.status < 300) {
    let m = w(p.data);
    if (m.length <= tst) hasSidecar = !0, sidecar_2 = pt(Buffer.from(m).toString("utf8"), !1);
  } else t(`[publishedCatalog] sidecar fetch: HTTP ${p.status}`);
  return t(`[publishedCatalog] fetch ok: ${documentBytes_2.length} bytes${hasSidecar ? ", sidecar present" : ", no sidecar"}`), {
    status: "ok",
    documentBytes: documentBytes_2,
    sidecar: sidecar_2,
    hasSidecar: hasSidecar,
    sidecarHttpStatus: p.status,
    etag: ne(l.headers),
    httpStatus: httpStatus
  };
}
async function W(e) {
  if (de()) return t("[publishedCatalog] file not read: a diskless session"), {
    status: "error",
    reason: "read_failed"
  };
  let r = T(e),
    n = se(),
    i;
  try {
    i = await n.readFileBytes(r, rAe + 1);
  } catch (error) {
    return t(`[publishedCatalog] file read failed${G(error) ? " (no such file)" : ""}`), {
      status: "error",
      reason: "read_failed"
    };
  }
  if (i.length > rAe) return {
    status: "error",
    reason: "too_large"
  };
  let sidecar_3 = void 0,
    hasSidecar_2 = !1;
  try {
    let d = await n.readFileBytes(`${r}${b}`, tst + 1);
    if (d.length <= tst) hasSidecar_2 = !0, sidecar_3 = pt(d.toString("utf8"), !1);
  } catch (error) {
    if (!G(error)) t("[publishedCatalog] sidecar read failed");
  }
  return t(`[publishedCatalog] file read ok: ${i.length} bytes${hasSidecar_2 ? ", sidecar present" : ", no sidecar"}`), {
    status: "ok",
    documentBytes: new Uint8Array(i),
    sidecar: sidecar_3,
    hasSidecar: hasSidecar_2,
    sidecarHttpStatus: void 0,
    etag: void 0,
    httpStatus: void 0
  };
}
function O(e, r) {
  return fW(e) ? sK.get(e, r) : sl.get(e, r);
}
function Z(e) {
  let r = fW(e),
    n = e.toLowerCase().startsWith("https:");
  return i => {
    let s = hze(i),
      l = J(s),
      d = ee(s),
      c = Jle(e, s),
      h = n ? d === "https:" : c || d === "https:";
    if (!(l !== "" && (r ? fW(l) : !Cge(l)) && h && (c || !yne(l)))) throw Error("[publishedCatalog] redirect refused: a hop left the host the request was pinned to");
  };
}
function J(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return "";
  }
}
function ee(e) {
  try {
    return new URL(e).protocol.toLowerCase();
  } catch {
    return "";
  }
}
function te(e) {
  let r = new URL(e);
  return r.pathname += b, r.toString();
}
function w(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  if (typeof e === "string") return new TextEncoder().encode(e);
  return new Uint8Array(0);
}
function re(e) {
  return typeof e === "object" && e !== null && "code" in e && (e.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e.code === "ERR_BAD_RESPONSE");
}
function ne(e) {
  let r = e?.etag;
  return qq(r) ? r : void 0;
}
export { roots as A6t, id as Gxn, Vxn, x6t, iis, ais, yCt, uZr, qxn, rAe, tst, lis, LKe, gcr, _Ct, Kxn, bCt };