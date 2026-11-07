// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { K, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { t, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { qX, WNe, jgt, wYi } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { jJ, NAe, Cte, Yp, VV } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { zv } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { sX } from "B:/~BUN/root/chunk-dx2wvwvf.js";
import { cwe, X4 } from "B:/~BUN/root/chunk-wthaftk0.js";
import { createHash as O } from "crypto";
import { fileURLToPath as D } from "url";
import { createPublicKey as w } from "crypto";
var L = {
    id: "claude-code-release-signing-key",
    spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ=="
  },
  roots = [L],
  id = "managed-model-catalog-public-key";
function Car(e) {
  if (e === void 0) return;
  return e === id ? "managed_key" : "compiled_roots";
}
function B(e) {
  let r = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(e.trim());
  if (r === null || r[1] === void 0) return;
  let n = r[1].replace(/\s+/g, "");
  if (n.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(n)) return;
  let o = Buffer.from(n, "base64");
  return o.length > 0 && o.toString("base64") === n ? new Uint8Array(o) : void 0;
}
var g = 2048;
function C(e) {
  let der = B(e);
  if (der === void 0) return {
    ok: !1,
    reason: "not_spki_pem"
  };
  let n, o;
  try {
    let a = w({
      key: Buffer.from(der),
      format: "der",
      type: "spki"
    });
    n = a.asymmetricKeyType, o = a.asymmetricKeyDetails?.modulusLength;
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
  if (o === void 0 || o < g) return {
    ok: !1,
    reason: "modulus_too_short"
  };
  return {
    ok: !0,
    der: der
  };
}
function S(e) {
  return new Uint8Array(Buffer.from(e.spkiBase64, "base64"));
}
var _ = "https://downloads.claude.ai/model-catalog/v1/catalog.json",
  h = ".raw-sig.json";
function m() {
  return {
    url: void 0,
    publicKey: void 0
  };
}
function k() {
  let {
    url: url,
    publicKey: publicKey
  } = m();
  if (url === void 0 && publicKey === void 0) return {
    url: void 0,
    publicKey: void 0
  };
  let n = zv();
  if (!VV(n) && !(n === "remote" && Yp())) return t(`[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${n ?? "none"}${n === "remote" ? ", unconfirmed by the server" : ""})`), {
    url: void 0,
    publicKey: void 0
  };
  return {
    url: url,
    publicKey: publicKey
  };
}
function VEn() {
  let {
    url: url_2,
    publicKey: publicKey_2
  } = m();
  if (url_2 === void 0 && publicKey_2 === void 0) return !1;
  return zv() === "remote" && !Yp();
}
function Bmi() {
  if (!VEn()) return !1;
  let {
    url: url_3
  } = m();
  if (url_3 === void 0) return !1;
  try {
    return y(new URL(url_3)) === "file";
  } catch {
    return !1;
  }
}
function A(e = k()) {
  return e.url ?? I(i.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function z7o() {
  let e = A();
  if (e === void 0) return !1;
  try {
    return y(new URL(e)) === "file";
  } catch {
    return !1;
  }
}
function I(e) {
  let r = e?.trim();
  return r ? r : void 0;
}
function Blt({
  ignoreEnvUrl = !1
} = {}) {
  let r = k(),
    n = (ignoreEnvUrl ? r.url : A(r)) ?? _,
    o;
  try {
    o = new URL(n);
  } catch {
    return t("[publishedCatalog] configured catalog URL is not a URL; published path off"), {
      ok: !1,
      reason: "invalid_url"
    };
  }
  let kind = y(o);
  if (kind === void 0) return t(`[publishedCatalog] configured catalog URL has unsupported scheme ${o.protocol}; published path off`), {
    ok: !1,
    reason: "invalid_url"
  };
  if (kind !== "file" && jJ(o.hostname)) return t("[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off"), {
    ok: !1,
    reason: "invalid_url"
  };
  let url_4 = o.toString();
  return {
    ok: !0,
    source: {
      kind: kind,
      url: url_4,
      trust: F(kind, r),
      cacheKey: G7o(url_4)
    }
  };
}
function y(e) {
  if (e.protocol === "file:") return e.hostname === "" || e.hostname === "localhost" ? "file" : void 0;
  if (e.protocol !== "https:" && e.protocol !== "http:") return;
  return e.toString() === _ ? "hosted" : "custom_url";
}
function F(e, r) {
  if (e === "hosted" || r.publicKey === void 0) return {
    kind: "compiled_roots",
    roots: roots
  };
  if (r.url === void 0) return t("[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only"), {
    kind: "compiled_roots",
    roots: roots
  };
  let n = C(r.publicKey);
  if (!n.ok) return t(`[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${g} bits (${n.reason}); custom source refused`), {
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
function G7o(e) {
  return O("sha256").update(e).digest("hex").slice(0, 32);
}
function P(e) {
  return D(e.url);
}
var timeout = 1e4;
async function Rar(e, {
  etag: etag,
  noCache = !1
} = {}) {
  try {
    return e.kind === "file" ? await v(e) : await H(e, {
      etag: etag,
      noCache: noCache
    });
  } catch (error) {
    let {
      kind: kind_2,
      status: s
    } = Ai(error);
    switch (t(`[publishedCatalog] fetch failed: ${kind_2}${s !== void 0 ? ` ${s}` : ""}`), kind_2) {
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
        return s === void 0 ? {
          status: "error",
          reason: j(error) ? "too_large" : "network"
        } : {
          status: "error",
          reason: "http_status",
          httpStatus: s
        };
      case "other":
        return {
          status: "error",
          reason: "exception"
        };
    }
  }
}
async function H(e, {
  etag: etag_2,
  noCache: noCache_2
}) {
  let beforeRedirect = G(e.url),
    headers = noCache_2 ? {
      "Cache-Control": "no-cache",
      Pragma: "no-cache"
    } : void 0,
    s = await U(e.url, {
      responseType: "arraybuffer",
      timeout: timeout,
      maxContentLength: WNe,
      maxBodyLength: WNe,
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
    httpStatus = s.status;
  if (httpStatus === 304 && etag_2 !== void 0) return t("[publishedCatalog] fetch: not modified"), {
    status: "not_modified",
    httpStatus: httpStatus
  };
  if (httpStatus < 200 || httpStatus >= 300) return t(`[publishedCatalog] fetch: HTTP ${httpStatus}`), {
    status: "error",
    reason: "http_status",
    httpStatus: httpStatus
  };
  let documentBytes = E(s.data);
  if (documentBytes.length > WNe) return {
    status: "error",
    reason: "too_large",
    httpStatus: httpStatus
  };
  let sidecar = void 0,
    hasSidecar = !1,
    d = await U(Y(e.url), {
      responseType: "arraybuffer",
      timeout: timeout,
      maxContentLength: jgt,
      maxBodyLength: jgt,
      validateStatus: () => !0,
      beforeRedirect: beforeRedirect,
      ...(headers !== void 0 && {
        headers: headers
      })
    });
  if (d.status >= 200 && d.status < 300) {
    let p = E(d.data);
    if (p.length <= jgt) hasSidecar = !0, sidecar = et(Buffer.from(p).toString("utf8"), !1);
  } else t(`[publishedCatalog] sidecar fetch: HTTP ${d.status}`);
  return t(`[publishedCatalog] fetch ok: ${documentBytes.length} bytes${hasSidecar ? ", sidecar present" : ", no sidecar"}`), {
    status: "ok",
    documentBytes: documentBytes,
    sidecar: sidecar,
    hasSidecar: hasSidecar,
    sidecarHttpStatus: d.status,
    etag: V(s.headers),
    httpStatus: httpStatus
  };
}
async function v(e) {
  if (q()) return t("[publishedCatalog] file not read: a diskless session"), {
    status: "error",
    reason: "read_failed"
  };
  let r = P(e),
    n = ie(),
    o;
  try {
    o = await n.readFileBytes(r, WNe + 1);
  } catch (error) {
    return t(`[publishedCatalog] file read failed${K(error) ? " (no such file)" : ""}`), {
      status: "error",
      reason: "read_failed"
    };
  }
  if (o.length > WNe) return {
    status: "error",
    reason: "too_large"
  };
  let sidecar_2 = void 0,
    hasSidecar_2 = !1;
  try {
    let u = await n.readFileBytes(`${r}${h}`, jgt + 1);
    if (u.length <= jgt) hasSidecar_2 = !0, sidecar_2 = et(u.toString("utf8"), !1);
  } catch (error) {
    if (!K(error)) t("[publishedCatalog] sidecar read failed");
  }
  return t(`[publishedCatalog] file read ok: ${o.length} bytes${hasSidecar_2 ? ", sidecar present" : ", no sidecar"}`), {
    status: "ok",
    documentBytes: new Uint8Array(o),
    sidecar: sidecar_2,
    hasSidecar: hasSidecar_2,
    sidecarHttpStatus: void 0,
    etag: void 0,
    httpStatus: void 0
  };
}
function U(e, r) {
  return X4(e) ? sX.get(e, r) : hd.get(e, r);
}
function G(e) {
  let r = X4(e),
    n = e.toLowerCase().startsWith("https:");
  return o => {
    let a = NAe(o),
      s = M(a),
      u = N(a),
      l = Cte(e, a),
      f = n ? u === "https:" : l || u === "https:";
    if (!(s !== "" && (r ? X4(s) : !cwe(s)) && f && (l || !jJ(s)))) throw Error("[publishedCatalog] redirect refused: a hop left the host the request was pinned to");
  };
}
function M(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return "";
  }
}
function N(e) {
  try {
    return new URL(e).protocol.toLowerCase();
  } catch {
    return "";
  }
}
function Y(e) {
  let r = new URL(e);
  return r.pathname += h, r.toString();
}
function E(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  if (typeof e === "string") return new TextEncoder().encode(e);
  return new Uint8Array(0);
}
function j(e) {
  return typeof e === "object" && e !== null && "code" in e && (e.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e.code === "ERR_BAD_RESPONSE");
}
function V(e) {
  let r = e?.etag;
  return qX(r) ? r : void 0;
}
var x = "claude-code-model-catalog-v1\x00",
  T = {
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-512"
  };
async function E6t({
  documentBytes: documentBytes_2,
  sidecar: sidecar_3,
  roots: roots_2,
  context = x
}) {
  let a = wYi().safeParse(sidecar_3);
  if (!a.success) return {
    ok: !1,
    reason: "sidecar_invalid"
  };
  let s = Buffer.from(a.data.signature, "base64");
  if (s.length === 0 || s.toString("base64") !== a.data.signature) return {
    ok: !1,
    reason: "sidecar_invalid"
  };
  let u, l;
  for (let d of roots_2) {
    let p = b(S(d));
    if ((await z(p)) === a.data.publicKeySha256) {
      u = d, l = p;
      break;
    }
  }
  if (u === void 0 || l === void 0) return {
    ok: !1,
    reason: "unknown_key"
  };
  let f;
  try {
    f = await crypto.subtle.importKey("spki", l, T, !1, ["verify"]);
  } catch (error) {
    return t(`[publishedCatalog] trust root ${u.id} is not an importable RSA key: ${error instanceof Error ? error.name : "error"}`), {
      ok: !1,
      reason: "key_unusable"
    };
  }
  let c;
  try {
    c = await crypto.subtle.verify(T.name, f, b(s), X(documentBytes_2, context));
  } catch {
    c = !1;
  }
  return c ? {
    ok: !0,
    rootId: u.id
  } : {
    ok: !1,
    reason: "bad_signature"
  };
}
function X(e, r = x) {
  let n = new TextEncoder().encode(r),
    uint8Array = new Uint8Array(n.length + e.length);
  return uint8Array.set(n), uint8Array.set(e, n.length), uint8Array;
}
async function z(e) {
  let r = await crypto.subtle.digest("SHA-256", b(e));
  return Buffer.from(r).toString("hex");
}
function b(e) {
  let uint8Array_2 = new Uint8Array(e.byteLength);
  return uint8Array_2.set(e), uint8Array_2;
}
export { roots as GEn, id as Tar, Car, VEn, Bmi, z7o, Blt, G7o, Rar, E6t };