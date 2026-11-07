// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c,
  ao
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Fb,
  yh,
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  mO
} from "B:/~BUN/root/chunk-psjm1gcn.js";
import {
  JTe,
  x0t
} from "B:/~BUN/root/chunk-dcmvdxnm.js";
import {
  $En,
  $At,
  Flt,
  a5e,
  mmi,
  aar,
  UAt
} from "B:/~BUN/root/chunk-fk1gx2mz.js";
import {
  P7o,
  O7o
} from "B:/~BUN/root/chunk-3e8b6pq9.js";
import {
  YIe
} from "B:/~BUN/root/chunk-an15mqdc.js";
import {
  XIe
} from "B:/~BUN/root/chunk-2mw7cstr.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var i5e = "creg_",
  w = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");

function o2(e) {
  if (!Nt(e)) throw new R(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex")
}

function P(e, n, i, r) {
  let s = Buffer.alloc(w.length + 48 + 8),
    o = 0;
  return o += w.copy(s, o), o += o2(e).copy(s, o), o += o2(n).copy(s, o), o += o2(i).copy(s, o), s.writeBigUInt64BE(BigInt(r), o), s
}
async function S(e, n, i, r) {
  let s = Date.now(),
    o = await r.sign(P(e, n, i, s));
  return {
    deviceUUID: i,
    kid: i5e + i,
    signature: o.toString("base64"),
    issuedAt: new Date(s).toISOString(),
    signedOver: {
      orgUuid: e,
      accountUuid: n,
      issuedAtMs: s
    }
  }
}
var A = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"),
  E = "00000000-0000-0000-0000-000000000000";

function T({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  expectedCurrentDeviceUuid: r,
  newDeviceUuid: s,
  issuedAtMs: o
}) {
  let u = Buffer.alloc(A.length + 80 + 8),
    a = 0;
  return a += A.copy(u, a), a += o2(e).copy(u, a), a += o2(n).copy(u, a), a += o2(i).copy(u, a), a += o2(r ?? E).copy(u, a), a += o2(s).copy(u, a), u.writeBigUInt64BE(BigInt(o), a), u
}
async function C7o({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  deviceUUID: r,
  key: s,
  now: o = Date.now
}) {
  let u = o(),
    a = await s.sign(T({
      orgUuid: e,
      accountUuid: n,
      sessionUuid: i,
      expectedCurrentDeviceUuid: void 0,
      newDeviceUuid: r,
      issuedAtMs: u
    }));
  return {
    deviceUUID: r,
    kid: i5e + r,
    signature: a.toString("base64"),
    issuedAt: new Date(u).toISOString()
  }
}
var H = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"),
  O = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"),
  x = /^[a-z0-9_.]{1,48}$/,
  F = 8;

function N(e) {
  return Buffer.concat([H, ...b(e), U(e.issuedAtMs)])
}

function VXr(e) {
  let n = L(e).sort();
  return e.length >= 1 && e.length <= F && e.every((i) => x.test(i)) && n.length === e.length && n.every((i, r) => i === e[r]) ? n : void 0
}

function M(e, n) {
  if (VXr(n) === void 0) throw new R("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([O, ...b(e), _(n.length), ...n.flatMap((i) => {
    let r = Buffer.from(i, "ascii");
    return [_(r.length), r]
  }), U(e.issuedAtMs)])
}
async function R7o({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  deviceUUID: r,
  request: s,
  capabilities: o,
  key: u,
  now: a = Date.now
}) {
  let h = a(),
    p = {
      orgUuid: e,
      accountUuid: n,
      sessionUuid: i,
      deviceUuid: r,
      request: s,
      issuedAtMs: h
    },
    m = await u.sign(o === void 0 ? N(p) : M(p, o));
  return {
    deviceUUID: r,
    kid: i5e + r,
    signature: m.toString("base64"),
    issuedAt: new Date(h).toISOString()
  }
}
var C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");

function K(e, n) {
  let i = Buffer.from(n, "utf8");
  if (i.length === 0 || i.length > 65535) throw new R("deviceBind: tool-host resume nonce must be 1 to 65535 bytes", "deviceBind: malformed resume nonce");
  return Buffer.concat([C, ...b(e), _(i.length), i, U(e.issuedAtMs)])
}
async function A7o({
  deviceUUID: e,
  nonce: n,
  key: i,
  now: r = Date.now,
  ...s
}) {
  let o = r(),
    u = await i.sign(K({
      ...s,
      deviceUuid: e,
      issuedAtMs: o
    }, n));
  return {
    deviceUUID: e,
    kid: i5e + e,
    signature: u.toString("base64"),
    issuedAt: new Date(o).toISOString()
  }
}
async function q() {
  return (await I()).ok
}
async function I() {
  let {
    trustedDeviceTokenForBind: e
  } = await import("B:/~BUN/root/chunk-r0p2edvv.js");
  return e(void 0)
}
async function FEn(e) {
  if (e.launchedFromHome === void 0) await JTe();
  if ((e.launchedFromHome ?? x0t)()) return yh("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? YIe)()
  } catch {
    n = !1
  }
  if (!n) return yh("egress");
  let i = P7o({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : O7o(e.credentials))
  });
  if (i.status === "missing") return yh("account");
  if (i.status === "mismatch") return yh("account_mismatch");
  return await (e.hasDeviceProof ?? q)().catch(() => !1) ? Fb({
    accountUuid: i.accountUuid,
    source: i.source
  }) : yh("no_device_proof")
}
async function lba(e) {
  let n = e.isEnabled ?? mO;
  try {
    if (!await n()) return yh("gate")
  } catch (m) {
    return yh(y("gate", m))
  }
  let i = "no_device_proof",
    r = await FEn({
      ...e,
      hasDeviceProof: e.hasDeviceProof ?? (async () => {
        let m = await I();
        if (!m.ok && m.error !== "not_given") i = m.error;
        return m.ok
      })
    });
  if (!r.ok) {
    let m = V(r.error);
    return r.error === "no_device_proof" ? yh(i) : m
  }
  l("tengu_device_bind_account", {
    source: f(r.value.source)
  });
  let {
    accountUuid: s
  } = r.value, o = e.displayName ?? UAt(), u = !1, a = async (m) => {
    try {
      return Fb(await $En(s, o, e.credentials, {
        relearn: m
      }))
    } catch (v) {
      if (!(v instanceof a5e) || e.confirmReenroll === void 0 || u) return yh(y("register", v));
      return u = !0, await j(e.confirmReenroll) ? h(v.refusedPublicKey) : yh(y("register", v))
    }
  }, h = async (m) => {
    try {
      return Fb(await ao("device_reenroll", () => mmi(s, o, m, e.credentials), W))
    } catch (v) {
      return yh(y("register", v))
    }
  }, p = async (m) => {
    let v = await a(m);
    if (!v.ok) return v;
    let {
      deviceUUID: D,
      key: k
    } = v.value;
    return Fb({
      deviceUUID: D,
      held: {
        accountUuid: s,
        rowPk: D,
        key: k
      },
      sign: async () => {
        try {
          let B = await S(e.orgUuid, s, D, k);
          return g("device_bind"), B
        } catch (B) {
          y("sign", B);
          return
        }
      },
      reregister: async () => (await aar(s, e.credentials).catch((B) => {
        t(`[deviceBind] could not forget the cached device id: ${B instanceof Error?B.message:String(B)}`)
      }), p(!0))
    })
  };
  return p(!1)
}

function b({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  deviceUuid: r,
  request: s
}) {
  let o = Buffer.from(s.workId, "utf8"),
    u = Buffer.from(s.environmentId, "utf8");
  if (o.length === 0 || u.length === 0 || o.length > 65535 || u.length > 65535) throw new R("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [o2(e), o2(n), o2(i), o2(r), _(o.length), o, _(u.length), u]
}

function _(e) {
  let n = Buffer.alloc(2);
  return n.writeUInt16BE(e), n
}

function U(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n
}

function V(e) {
  return l("tengu_device_bind_skipped", {
    reason: f(e),
    ...XIe(e)
  }), yh(e)
}
async function j(e) {
  try {
    let n = await e();
    return l("tengu_device_reenroll", {
      confirmed: n,
      prompt_failed: !1
    }), n
  } catch (n) {
    return t(`[deviceBind] could not ask whether to register this machine again: ${d(n)}`), l("tengu_device_reenroll", {
      confirmed: !1,
      prompt_failed: !0
    }), !1
  }
}

function W(e) {
  return e instanceof R && e.errorClass || "unexpected_error"
}

function y(e, n) {
  return l("tengu_device_bind_failed", {
    phase: f(e),
    limit_reached: n instanceof $At,
    registration_unavailable: n instanceof Flt,
    revoked: n instanceof a5e
  }), c("device_bind", n instanceof R && n.errorClass || e), t(`[deviceBind] continuing unbound: ${n instanceof Error?n.message:String(n)}`), n instanceof $At ? "limit_reached" : n instanceof Flt ? "registration_unavailable" : n instanceof a5e ? "device_revoked" : n instanceof R && n.errorClass === "no_keychain" ? "no_keychain" : e
}
export {
  i5e,
  o2,
  C7o,
  VXr,
  R7o,
  A7o,
  FEn,
  lba
};
