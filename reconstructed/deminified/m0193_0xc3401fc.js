// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { b, J, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ri, $m } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { o, E, C, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { mu } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { constants as k } from "fs";
import { lstat as j, open as me, unlink as ge } from "fs/promises";
import { verify as Z, X509Certificate as G } from "crypto";
var q = {
    "managed-settings": 86400,
    "policy-limits": 86400
  },
  ee = 300,
  w = 16384,
  te = 8192,
  ne = 300000,
  re = 3,
  ie = 86400000,
  ae = /^[A-Za-z0-9_-]+$/,
  oe = /^[A-Za-z0-9+/]+={0,2}$/,
  se = f(() => u({
    alg: A("ES256"),
    typ: A("cc-signed-cache+jws"),
    kid: o(),
    x5c: C(o().regex(oe)).min(1).max(re)
  })),
  ue = f(() => u({
    v: A(1),
    typ: o(),
    aud: o(),
    iat: E(),
    sha: o(),
    sub: o().optional(),
    ws: o().optional()
  }));
function XPo({
  jws: jws,
  ...n
}) {
  if (!jws) return {
    result: "unsigned"
  };
  let r = {};
  try {
    return {
      result: de(jws, n, r),
      ...r
    };
  } catch {
    return {
      result: "malformed",
      ...r
    };
  }
}
function de(e, {
  kind: kind,
  orgUuid: orgUuid,
  accountUuid: accountUuid,
  workspaceUuid: workspaceUuid,
  bodySha: bodySha,
  highWaterIat: highWaterIat,
  nowMs: nowMs,
  roots: roots
}, g) {
  if (e.length > w) return "malformed";
  let [S, _, R, ...L] = e.split(".");
  if (S === void 0 || _ === void 0 || R === void 0 || L.length > 0 || ![S, _, R].every(item => ae.test(item))) return "malformed";
  let D = se().safeParse(K(S)),
    m = ue().safeParse(K(_));
  if (!D.success || !m.success) return "malformed";
  g.issuedAt = m.data.iat, g.ageSeconds = Math.floor(nowMs / 1000) - m.data.iat, g.wsUnanchored = workspaceUuid === void 0 && m.data.ws !== void 0;
  let N = D.data.x5c.map(item => Buffer.from(item, "base64"));
  if (N.some(item => item.length > te)) return "malformed";
  let [V, ...H] = N,
    p = O(V);
  if (g.certDaysLeft = Math.floor((Date.parse(p.validTo) - nowMs) / ie), roots.length === 0) return "no_embedded_root";
  let y = [p, ...H.map(O)];
  for (let d = 0; d + 1 < y.length; d++) if (!v(y[d], y[d + 1])) return "bad_chain";
  let U = y.at(-1),
    h;
  for (let root of roots) {
    let certificate = new G(root.pem);
    if (v(U, certificate)) {
      h = {
        root: root,
        certificate: certificate
      };
      break;
    }
  }
  if (h === void 0) return "bad_chain";
  let W = m.data.iat * 1000;
  if (![...y, h.certificate].every(item => le(item, W))) return "cert_expired";
  if (!fe(p.subjectAltName ?? "").includes(`URI:${h.root.marker}`)) return "no_marker";
  if (p.publicKey.asymmetricKeyType !== "ec" || p.publicKey.asymmetricKeyDetails?.namedCurve !== "prime256v1") return "bad_signature";
  if (!Z("sha256", Buffer.from(`${S}.${_}`, "utf8"), {
    key: p.publicKey,
    dsaEncoding: "ieee-p1363"
  }, Buffer.from(R, "base64url"))) return "bad_signature";
  if (m.data.typ !== kind) return "wrong_type";
  if (m.data.aud !== orgUuid) return "aud_mismatch";
  if (m.data.sub !== accountUuid) return "sub_mismatch";
  if (workspaceUuid !== void 0 && m.data.ws !== workspaceUuid) return "ws_mismatch";
  if (m.data.sha !== bodySha) return "sha_mismatch";
  if (g.ageSeconds < -ee) return "future_iat";
  if (g.ageSeconds > q[kind]) return "stale";
  if (highWaterIat !== void 0 && m.data.iat < highWaterIat) return "rollback";
  return "valid";
}
function fe(e) {
  let n = [],
    r = "",
    c = !1;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    if (c) {
      if (a === "\\" && i + 1 < e.length) {
        r += a + e[i + 1], i++;
        continue;
      }
      if (r += a, a === '"') c = !1;
      continue;
    }
    if (a === '"') {
      c = !0, r += a;
      continue;
    }
    if (a === ",") {
      n.push(r), r = "";
      let s = i + 1;
      while (s < e.length && /\s/.test(e[s])) s++;
      i = s - 1;
      continue;
    }
    r += a;
  }
  if (c) return [];
  return n.push(r), n;
}
function v(e, n) {
  return n.ca && Boolean(e.checkIssued(n)) && e.verify(n.publicKey);
}
function O(e) {
  let n = new G(e);
  if (n.raw.length !== e.length) throw Error("trailing bytes after x5c certificate DER");
  return n;
}
function le(e, n) {
  return n >= Date.parse(e.validFrom) - ne && n <= Date.parse(e.validTo);
}
function K(e) {
  try {
    return J(Buffer.from(e, "base64url").toString("utf8"));
  } catch {
    return;
  }
}
var M = "x-claude-code-signature",
  pe = w + 256,
  ye = 3,
  Se = 2,
  _e = 15,
  he = {
    realpath: !1,
    retries: {
      retries: 6,
      factor: 2,
      minTimeout: 20,
      maxTimeout: 320
    },
    stale: 1e4
  },
  be = f(() => u({
    jws: o().min(1),
    receivedAt: E()
  })),
  Ee = f(() => u({
    typ: o(),
    aud: o().optional(),
    sub: o().optional(),
    ws: o().optional(),
    iat: E()
  }));
function vCe(e) {
  return `${e}.signature.json`;
}
function XHe(e) {
  return `${e}.signature-iat.json`;
}
function FLt(e) {
  return iDr(e && M in e ? e[M] : void 0);
}
function iDr(e) {
  return typeof e === "string" && e.length > 0 && e.length <= w ? e : void 0;
}
async function kCe(e, jws_2) {
  if (jws_2 === void 0) {
    await z(vCe(e));
    return;
  }
  let r = {
    jws: jws_2,
    receivedAt: Date.now()
  };
  await Ce(vCe(e), r);
}
async function $Lt(e) {
  await Promise.all([z(vCe(e)), z(XHe(e))]);
}
async function ULt(e, n) {
  if (!n && (await we(e))) return !1;
  return await $Lt(e), !0;
}
async function we(e) {
  try {
    return await j(e), !0;
  } catch (error) {
    return !B(error);
  }
}
async function JPo(e) {
  return Re(vCe(e), be());
}
async function QPo(e, n) {
  return X(XHe(e), n, !1);
}
async function X(e, n, r) {
  let c = Ee(),
    i = await T(e, c);
  for (let s = 0; i.kind === "unparsable" && s < Se; s++) await Q(_e), i = await T(e, c);
  if (i.kind === "unparsable" && !r) {
    let s = await F(e);
    try {
      i = await T(e, c);
    } finally {
      await $m(s, "Signed cache: accepted-iat lock");
    }
  }
  let a = i.kind === "ok" ? i.value : null;
  return a !== null && a.typ === n.typ && a.aud === n.aud && a.sub === n.sub && a.ws === n.ws ? a.iat : void 0;
}
async function F(e) {
  try {
    return await Ri(e, {
      ...he,
      onCompromised: n => t(`Signed cache: accepted-iat lock compromised - ${l(n)}`)
    });
  } catch (error) {
    t(`Signed cache: accepted-iat lock unavailable, proceeding unlocked - ${l(error)}`);
    return;
  }
}
async function ZPo(e, n, iat) {
  let c = XHe(e),
    i = await F(c);
  try {
    for (let a = 0; a < ye; a++) {
      let s = await X(c, n, i !== void 0);
      if (s !== void 0 && s >= iat) return;
      if (!(await Ae(c, {
        ...n,
        iat: iat
      }))) return;
    }
  } finally {
    await $m(i, "Signed cache: accepted-iat lock");
  }
}
async function Ae(e, n) {
  try {
    return await Cn(e, b(n), 384), !0;
  } catch (error) {
    return t(`Signed cache: failed to write ${e} - ${l(error)}`), !1;
  }
}
async function Ce(e, n) {
  try {
    if (mu === 0 && (await Te(e))) return;
    let r = await me(e, k.O_WRONLY | k.O_CREAT | k.O_TRUNC | mu, 384);
    try {
      await r.writeFile(b(n), {
        encoding: "utf-8"
      });
    } finally {
      await r.close();
    }
  } catch (error) {
    t(`Signed cache: failed to write ${e} - ${l(error)}`);
  }
}
async function Te(e) {
  try {
    return (await j(e)).isSymbolicLink();
  } catch {
    return !1;
  }
}
async function z(e) {
  try {
    await ge(e);
  } catch (error) {
    if (!B(error)) t(`Signed cache: failed to remove ${e} - ${l(error)}`);
  }
}
async function T(e, n) {
  try {
    let r = await ce().readFileFdGated(e, pe);
    if (r === null) return {
      kind: "absent"
    };
    let c = n.safeParse(J(r.content));
    return c.success ? {
      kind: "ok",
      value: c.data
    } : {
      kind: "unparsable"
    };
  } catch {
    return {
      kind: "unparsable"
    };
  }
}
async function Re(e, n) {
  let r = await T(e, n);
  return r.kind === "ok" ? r.value : null;
}
export { XPo, vCe, XHe, FLt, iDr, kCe, $Lt, ULt, JPo, QPo, ZPo };