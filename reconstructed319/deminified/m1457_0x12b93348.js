// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c, ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Fb, yh, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { mO } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { JTe, x0t } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { $En, $At, Flt, a5e, mmi, aar, UAt } from "B:/~BUN/root/chunk-fk1gx2mz.js";
import { P7o, O7o } from "B:/~BUN/root/chunk-3e8b6pq9.js";
import { YIe } from "B:/~BUN/root/chunk-an15mqdc.js";
import { XIe } from "B:/~BUN/root/chunk-2mw7cstr.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var i5e = "creg_",
  w = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function o2(e) {
  if (!Nt(e)) throw new R(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function P(e, n, i, r) {
  let s = Buffer.alloc(w.length + 48 + 8),
    o = 0;
  return o += w.copy(s, o), o += o2(e).copy(s, o), o += o2(n).copy(s, o), o += o2(i).copy(s, o), s.writeBigUInt64BE(BigInt(r), o), s;
}
async function S(orgUuid, accountUuid, deviceUUID, r) {
  let issuedAtMs = Date.now(),
    o = await r.sign(P(orgUuid, accountUuid, deviceUUID, issuedAtMs));
  return {
    deviceUUID: deviceUUID,
    kid: i5e + deviceUUID,
    signature: o.toString("base64"),
    issuedAt: new Date(issuedAtMs).toISOString(),
    signedOver: {
      orgUuid: orgUuid,
      accountUuid: accountUuid,
      issuedAtMs: issuedAtMs
    }
  };
}
var A = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"),
  E = "00000000-0000-0000-0000-000000000000";
function T({
  orgUuid: orgUuid_2,
  accountUuid: accountUuid_2,
  sessionUuid: sessionUuid,
  expectedCurrentDeviceUuid: expectedCurrentDeviceUuid,
  newDeviceUuid: newDeviceUuid,
  issuedAtMs: issuedAtMs_2
}) {
  let u = Buffer.alloc(A.length + 80 + 8),
    a = 0;
  return a += A.copy(u, a), a += o2(orgUuid_2).copy(u, a), a += o2(accountUuid_2).copy(u, a), a += o2(sessionUuid).copy(u, a), a += o2(expectedCurrentDeviceUuid ?? E).copy(u, a), a += o2(newDeviceUuid).copy(u, a), u.writeBigUInt64BE(BigInt(issuedAtMs_2), a), u;
}
async function C7o({
  orgUuid: orgUuid_3,
  accountUuid: accountUuid_3,
  sessionUuid: sessionUuid_2,
  deviceUUID: r,
  key: key,
  now = Date.now
}) {
  let issuedAtMs_3 = now(),
    a = await key.sign(T({
      orgUuid: orgUuid_3,
      accountUuid: accountUuid_3,
      sessionUuid: sessionUuid_2,
      expectedCurrentDeviceUuid: void 0,
      newDeviceUuid: r,
      issuedAtMs: issuedAtMs_3
    }));
  return {
    deviceUUID: r,
    kid: i5e + r,
    signature: a.toString("base64"),
    issuedAt: new Date(issuedAtMs_3).toISOString()
  };
}
var H = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"),
  O = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"),
  x = /^[a-z0-9_.]{1,48}$/,
  F = 8;
function N(e) {
  return Buffer.concat([H, ...b(e), U(e.issuedAtMs)]);
}
function VXr(e) {
  let n = L(e).sort();
  return e.length >= 1 && e.length <= F && e.every(item => x.test(item)) && n.length === e.length && n.every((item, index) => item === e[index]) ? n : void 0;
}
function M(e, n) {
  if (VXr(n) === void 0) throw new R("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([O, ...b(e), _(n.length), ...n.flatMap(item => {
    let r = Buffer.from(item, "ascii");
    return [_(r.length), r];
  }), U(e.issuedAtMs)]);
}
async function R7o({
  orgUuid: orgUuid_4,
  accountUuid: accountUuid_4,
  sessionUuid: sessionUuid_3,
  deviceUUID: r,
  request: request,
  capabilities: capabilities,
  key: key_2,
  now: now_2 = Date.now
}) {
  let issuedAtMs_4 = now_2(),
    p = {
      orgUuid: orgUuid_4,
      accountUuid: accountUuid_4,
      sessionUuid: sessionUuid_3,
      deviceUuid: r,
      request: request,
      issuedAtMs: issuedAtMs_4
    },
    m = await key_2.sign(capabilities === void 0 ? N(p) : M(p, capabilities));
  return {
    deviceUUID: r,
    kid: i5e + r,
    signature: m.toString("base64"),
    issuedAt: new Date(issuedAtMs_4).toISOString()
  };
}
var C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");
function K(e, n) {
  let i = Buffer.from(n, "utf8");
  if (i.length === 0 || i.length > 65535) throw new R("deviceBind: tool-host resume nonce must be 1 to 65535 bytes", "deviceBind: malformed resume nonce");
  return Buffer.concat([C, ...b(e), _(i.length), i, U(e.issuedAtMs)]);
}
async function A7o({
  deviceUUID: e,
  nonce: nonce,
  key: key_3,
  now: now_3 = Date.now,
  ...s
}) {
  let issuedAtMs_5 = now_3(),
    u = await key_3.sign(K({
      ...s,
      deviceUuid: e,
      issuedAtMs: issuedAtMs_5
    }, nonce));
  return {
    deviceUUID: e,
    kid: i5e + e,
    signature: u.toString("base64"),
    issuedAt: new Date(issuedAtMs_5).toISOString()
  };
}
async function q() {
  return (await I()).ok;
}
async function I() {
  let {
    trustedDeviceTokenForBind: trustedDeviceTokenForBind
  } = await import("B:/~BUN/root/chunk-r0p2edvv.js");
  return trustedDeviceTokenForBind(void 0);
}
async function FEn(e) {
  if (e.launchedFromHome === void 0) await JTe();
  if ((e.launchedFromHome ?? x0t)()) return yh("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? YIe)();
  } catch {
    n = !1;
  }
  if (!n) return yh("egress");
  let i = P7o({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : O7o(e.credentials))
  });
  if (i.status === "missing") return yh("account");
  if (i.status === "mismatch") return yh("account_mismatch");
  return (await (e.hasDeviceProof ?? q)().catch(() => !1)) ? Fb({
    accountUuid: i.accountUuid,
    source: i.source
  }) : yh("no_device_proof");
}
async function lba(e) {
  let n = e.isEnabled ?? mO;
  try {
    if (!(await n())) return yh("gate");
  } catch (error) {
    return yh(y("gate", error));
  }
  let i = "no_device_proof",
    r = await FEn({
      ...e,
      hasDeviceProof: e.hasDeviceProof ?? (async () => {
        let m = await I();
        if (!m.ok && m.error !== "not_given") i = m.error;
        return m.ok;
      })
    });
  if (!r.ok) {
    let m = V(r.error);
    return r.error === "no_device_proof" ? yh(i) : m;
  }
  l("tengu_device_bind_account", {
    source: f(r.value.source)
  });
  let {
      accountUuid: accountUuid_5
    } = r.value,
    o = e.displayName ?? UAt(),
    u = !1,
    a = async relearn => {
      try {
        return Fb(await $En(accountUuid_5, o, e.credentials, {
          relearn: relearn
        }));
      } catch (error) {
        if (!(error instanceof a5e) || e.confirmReenroll === void 0 || u) return yh(y("register", error));
        return u = !0, (await j(e.confirmReenroll)) ? h(error.refusedPublicKey) : yh(y("register", error));
      }
    },
    h = async m => {
      try {
        return Fb(await ao("device_reenroll", () => mmi(accountUuid_5, o, m, e.credentials), W));
      } catch (error) {
        return yh(y("register", error));
      }
    },
    p = async m => {
      let v = await a(m);
      if (!v.ok) return v;
      let {
        deviceUUID: D,
        key: key_4
      } = v.value;
      return Fb({
        deviceUUID: D,
        held: {
          accountUuid: accountUuid_5,
          rowPk: D,
          key: key_4
        },
        sign: async () => {
          try {
            let B = await S(e.orgUuid, accountUuid_5, D, key_4);
            return g("device_bind"), B;
          } catch (error) {
            y("sign", error);
            return;
          }
        },
        reregister: async () => (await aar(accountUuid_5, e.credentials).catch(B => {
          t(`[deviceBind] could not forget the cached device id: ${B instanceof Error ? B.message : String(B)}`);
        }), p(!0))
      });
    };
  return p(!1);
}
function b({
  orgUuid: orgUuid_5,
  accountUuid: accountUuid_6,
  sessionUuid: sessionUuid_4,
  deviceUuid: deviceUuid,
  request: request_2
}) {
  let o = Buffer.from(request_2.workId, "utf8"),
    u = Buffer.from(request_2.environmentId, "utf8");
  if (o.length === 0 || u.length === 0 || o.length > 65535 || u.length > 65535) throw new R("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [o2(orgUuid_5), o2(accountUuid_6), o2(sessionUuid_4), o2(deviceUuid), _(o.length), o, _(u.length), u];
}
function _(e) {
  let n = Buffer.alloc(2);
  return n.writeUInt16BE(e), n;
}
function U(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}
function V(e) {
  return l("tengu_device_bind_skipped", {
    reason: f(e),
    ...XIe(e)
  }), yh(e);
}
async function j(e) {
  try {
    let confirmed = await e();
    return l("tengu_device_reenroll", {
      confirmed: confirmed,
      prompt_failed: !1
    }), confirmed;
  } catch (error) {
    return t(`[deviceBind] could not ask whether to register this machine again: ${d(error)}`), l("tengu_device_reenroll", {
      confirmed: !1,
      prompt_failed: !0
    }), !1;
  }
}
function W(e) {
  return e instanceof R && e.errorClass || "unexpected_error";
}
function y(e, n) {
  return l("tengu_device_bind_failed", {
    phase: f(e),
    limit_reached: n instanceof $At,
    registration_unavailable: n instanceof Flt,
    revoked: n instanceof a5e
  }), c("device_bind", n instanceof R && n.errorClass || e), t(`[deviceBind] continuing unbound: ${n instanceof Error ? n.message : String(n)}`), n instanceof $At ? "limit_reached" : n instanceof Flt ? "registration_unavailable" : n instanceof a5e ? "device_revoked" : n instanceof R && n.errorClass === "no_keychain" ? "no_keychain" : e;
}
export { i5e, o2, C7o, VXr, R7o, A7o, FEn, lba };