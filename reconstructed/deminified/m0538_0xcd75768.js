// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ORe, CN, tl } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { B, Xs } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { SKe, _B, Lnn, wKe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { yY, eft, Bv, J1 } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { gC } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { IB } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { o, E, u, fe, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { createHash as G } from "crypto";
import { fileURLToPath as z } from "url";
import { createPublicKey as H } from "crypto";
var F = {
    id: "claude-code-release-signing-key",
    spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ=="
  },
  roots = [F],
  id = "managed-model-catalog-public-key";
function HYt(e) {
  if (e === void 0) return;
  return e === id ? "managed_key" : "compiled_roots";
}
function M(e) {
  let n = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(e.trim());
  if (n === null || n[1] === void 0) return;
  let r = n[1].replace(/\s+/g, "");
  if (r.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(r)) return;
  let i = Buffer.from(r, "base64");
  return i.length > 0 && i.toString("base64") === r ? new Uint8Array(i) : void 0;
}
var y = 2048;
function P(e) {
  let der = M(e);
  if (der === void 0) return {
    ok: !1,
    reason: "not_spki_pem"
  };
  let r, i;
  try {
    let s = H({
      key: Buffer.from(der),
      format: "der",
      type: "spki"
    });
    r = s.asymmetricKeyType, i = s.asymmetricKeyDetails?.modulusLength;
  } catch {
    return {
      ok: !1,
      reason: "not_spki_pem"
    };
  }
  if (r !== "rsa") return {
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
function U() {
  let {
    url: url,
    publicKey: publicKey
  } = S();
  if (url === void 0 && publicKey === void 0) return {
    url: void 0,
    publicKey: void 0
  };
  let r = gC();
  if (!J1(r) && !(r === "remote" && Bv())) return t(`[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${r ?? "none"}${r === "remote" ? ", unconfirmed by the server" : ""})`), {
    url: void 0,
    publicKey: void 0
  };
  return {
    url: url,
    publicKey: publicKey
  };
}
function gkt() {
  let {
    url: url_2,
    publicKey: publicKey_2
  } = S();
  if (url_2 === void 0 && publicKey_2 === void 0) return !1;
  return gC() === "remote" && !Bv();
}
function cso() {
  if (!gkt()) return !1;
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
function T(e = U()) {
  return e.url ?? Y(a.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function dso() {
  let e = T();
  if (e === void 0) return !1;
  try {
    return _(new URL(e)) === "file";
  } catch {
    return !1;
  }
}
function Y(e) {
  let n = e?.trim();
  return n ? n : void 0;
}
function tet() {
  let e = U(),
    n = T(e) ?? k,
    r;
  try {
    r = new URL(n);
  } catch {
    return t("[publishedCatalog] configured catalog URL is not a URL; published path off"), {
      ok: !1,
      reason: "invalid_url"
    };
  }
  let kind = _(r);
  if (kind === void 0) return t(`[publishedCatalog] configured catalog URL has unsupported scheme ${r.protocol}; published path off`), {
    ok: !1,
    reason: "invalid_url"
  };
  if (kind !== "file" && yY(r.hostname)) return t("[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off"), {
    ok: !1,
    reason: "invalid_url"
  };
  let url_4 = r.toString();
  return {
    ok: !0,
    source: {
      kind: kind,
      url: url_4,
      trust: N(kind, e),
      cacheKey: Odr(url_4)
    }
  };
}
function _(e) {
  if (e.protocol === "file:") return e.hostname === "" || e.hostname === "localhost" ? "file" : void 0;
  if (e.protocol !== "https:" && e.protocol !== "http:") return;
  return e.toString() === k ? "hosted" : "custom_url";
}
function N(e, n) {
  if (e === "hosted" || n.publicKey === void 0) return {
    kind: "compiled_roots",
    roots: roots
  };
  if (n.url === void 0) return t("[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only"), {
    kind: "compiled_roots",
    roots: roots
  };
  let r = P(n.publicKey);
  if (!r.ok) return t(`[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${y} bits (${r.reason}); custom source refused`), {
    kind: "untrusted",
    reason: "invalid_public_key"
  };
  return {
    kind: "managed_key",
    roots: [...roots, {
      id: id,
      spkiBase64: Buffer.from(r.der).toString("base64")
    }]
  };
}
function Odr(e) {
  return G("sha256").update(e).digest("hex").slice(0, 32);
}
function x(e) {
  return z(e.url);
}
var FYt = 1,
  xpe = SKe,
  Qze = 16384,
  j = 1,
  V = "RSASSA-PKCS1-v1_5-SHA512",
  L = f(() => u({
    schema: A(j),
    algorithm: A(V),
    signature: o().min(1),
    publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
  }).loose()),
  X = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[Zz]|[+-]\d{2}:\d{2})$/;
function uso(e) {
  if (e === void 0 || !X.test(e)) return;
  let n = Date.parse(e);
  return Number.isFinite(n) ? n : void 0;
}
var GOe = f(() => u({
  $schema: o().optional(),
  schema_version: A(FYt),
  version: E().int().nonnegative(),
  issued_at: o().optional(),
  expires_at: o().optional(),
  key_id: o().optional(),
  surfaces: fe(o(), Lnn())
}).loose());
function FAn(e) {
  if (e === null || typeof e !== "object" || !("schema_version" in e)) return;
  let schema_version = e.schema_version;
  return typeof schema_version === "number" ? schema_version : void 0;
}
function net(e, surface) {
  for (let [r, i] of [[surface, e.surfaces[surface]], ["cc", e.surfaces.cc]]) {
    if (i === void 0) continue;
    let s = wKe(i, r);
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
var timeout = 1e4;
async function $Yt(e, {
  etag: etag,
  noCache = !1
} = {}) {
  try {
    return e.kind === "file" ? await Q(e) : await q(e, {
      etag: etag,
      noCache: noCache
    });
  } catch (error) {
    let {
      kind: kind_2,
      status: l
    } = Xs(error);
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
          reason: te(error) ? "too_large" : "network"
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
async function q(e, {
  etag: etag_2,
  noCache: noCache_2
}) {
  let beforeRedirect = W(e.url),
    headers = noCache_2 ? {
      "Cache-Control": "no-cache",
      Pragma: "no-cache"
    } : void 0,
    l = await D(e.url, {
      responseType: "arraybuffer",
      timeout: timeout,
      maxContentLength: xpe,
      maxBodyLength: xpe,
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
  let documentBytes = K(l.data);
  if (documentBytes.length > xpe) return {
    status: "error",
    reason: "too_large",
    httpStatus: httpStatus
  };
  let sidecar = void 0,
    hasSidecar = !1,
    p = await D(ee(e.url), {
      responseType: "arraybuffer",
      timeout: timeout,
      maxContentLength: Qze,
      maxBodyLength: Qze,
      validateStatus: () => !0,
      beforeRedirect: beforeRedirect,
      ...(headers !== void 0 && {
        headers: headers
      })
    });
  if (p.status >= 200 && p.status < 300) {
    let m = K(p.data);
    if (m.length <= Qze) hasSidecar = !0, sidecar = ct(Buffer.from(m).toString("utf8"), !1);
  } else t(`[publishedCatalog] sidecar fetch: HTTP ${p.status}`);
  return t(`[publishedCatalog] fetch ok: ${documentBytes.length} bytes${hasSidecar ? ", sidecar present" : ", no sidecar"}`), {
    status: "ok",
    documentBytes: documentBytes,
    sidecar: sidecar,
    hasSidecar: hasSidecar,
    sidecarHttpStatus: p.status,
    etag: ne(l.headers),
    httpStatus: httpStatus
  };
}
async function Q(e) {
  let n = x(e),
    r = ce(),
    i;
  try {
    i = await r.readFileBytes(n, xpe + 1);
  } catch (error) {
    return t(`[publishedCatalog] file read failed${B(error) ? " (no such file)" : ""}`), {
      status: "error",
      reason: "read_failed"
    };
  }
  if (i.length > xpe) return {
    status: "error",
    reason: "too_large"
  };
  let sidecar_2 = void 0,
    hasSidecar_2 = !1;
  try {
    let d = await r.readFileBytes(`${n}${b}`, Qze + 1);
    if (d.length <= Qze) hasSidecar_2 = !0, sidecar_2 = ct(d.toString("utf8"), !1);
  } catch (error) {
    if (!B(error)) t("[publishedCatalog] sidecar read failed");
  }
  return t(`[publishedCatalog] file read ok: ${i.length} bytes${hasSidecar_2 ? ", sidecar present" : ", no sidecar"}`), {
    status: "ok",
    documentBytes: new Uint8Array(i),
    sidecar: sidecar_2,
    hasSidecar: hasSidecar_2,
    sidecarHttpStatus: void 0,
    etag: void 0,
    httpStatus: void 0
  };
}
function D(e, n) {
  return CN(e) ? IB.get(e, n) : tl.get(e, n);
}
function W(e) {
  let n = CN(e),
    r = w(e),
    i = e.toLowerCase().startsWith("https:");
  return s => {
    let l = eft(s),
      d = Z(l),
      c = J(l),
      h = r !== "" && w(l) === r,
      g = i ? c === "https:" : h || c === "https:";
    if (!(d !== "" && (n ? CN(d) : !ORe(d)) && g && (h || !yY(d)))) throw Error("[publishedCatalog] redirect refused: a hop left the host the request was pinned to");
  };
}
function Z(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return "";
  }
}
function w(e) {
  try {
    let n = new URL(e).origin;
    return n === "null" ? "" : n;
  } catch {
    return "";
  }
}
function J(e) {
  try {
    return new URL(e).protocol.toLowerCase();
  } catch {
    return "";
  }
}
function ee(e) {
  let n = new URL(e);
  return n.pathname += b, n.toString();
}
function K(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  if (typeof e === "string") return new TextEncoder().encode(e);
  return new Uint8Array(0);
}
function te(e) {
  return typeof e === "object" && e !== null && "code" in e && (e.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e.code === "ERR_BAD_RESPONSE");
}
function ne(e) {
  let n = e?.etag;
  return _B(n) ? n : void 0;
}
var v = "claude-code-model-catalog-v1\x00",
  I = {
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-512"
  };
async function ret({
  documentBytes: documentBytes_2,
  sidecar: sidecar_3,
  roots: roots_2,
  context = v
}) {
  let s = L().safeParse(sidecar_3);
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
    let m = C(R(p));
    if ((await oe(m)) === s.data.publicKeySha256) {
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
    h = await crypto.subtle.importKey("spki", c, I, !1, ["verify"]);
  } catch (error) {
    return t(`[publishedCatalog] trust root ${d.id} is not an importable RSA key: ${error instanceof Error ? error.name : "error"}`), {
      ok: !1,
      reason: "key_unusable"
    };
  }
  let g;
  try {
    g = await crypto.subtle.verify(I.name, h, C(l), re(documentBytes_2, context));
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
function re(e, n = v) {
  let r = new TextEncoder().encode(n),
    uint8Array = new Uint8Array(r.length + e.length);
  return uint8Array.set(r), uint8Array.set(e, r.length), uint8Array;
}
async function oe(e) {
  let n = await crypto.subtle.digest("SHA-256", C(e));
  return Buffer.from(n).toString("hex");
}
function C(e) {
  let uint8Array_2 = new Uint8Array(e.byteLength);
  return uint8Array_2.set(e), uint8Array_2;
}
export { roots as mkt, id as NYt, HYt, gkt, cso, dso, tet, Odr, FYt, xpe, Qze, uso, GOe, FAn, net, $Yt, ret };