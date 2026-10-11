// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p, Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { zg, xf, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { jd } from "B:/~BUN/root/chunk-f6h9k5ss.js";
import { oEe, TKe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { bwt, VWe, uOe, MSe, meo, j4t, qWe } from "B:/~BUN/root/chunk-ngj4p673.js";
import { Oir, Mir } from "B:/~BUN/root/chunk-2yea34mb.js";
import { Aoe } from "B:/~BUN/root/chunk-y1yq0gxq.js";
import { cpe } from "B:/~BUN/root/chunk-1kweczhs.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
var ywt = "creg_",
  U = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function g(e) {
  if (!en(e)) throw new P(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function E(e, n, r, o) {
  let d = Buffer.alloc(U.length + 48 + 8),
    s = 0;
  return s += U.copy(d, s), s += g(e).copy(d, s), s += g(n).copy(d, s), s += g(r).copy(d, s), d.writeBigUInt64BE(BigInt(o), s), d;
}
async function S(e, n, deviceUUID, o) {
  let d = Date.now(),
    s = await o.sign(E(e, n, deviceUUID, d));
  return {
    deviceUUID: deviceUUID,
    kid: ywt + deviceUUID,
    signature: s.toString("base64"),
    issuedAt: new Date(d).toISOString()
  };
}
var k = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"),
  T = "00000000-0000-0000-0000-000000000000";
function H({
  orgUuid: orgUuid,
  accountUuid: accountUuid,
  sessionUuid: sessionUuid,
  expectedCurrentDeviceUuid: expectedCurrentDeviceUuid,
  newDeviceUuid: newDeviceUuid,
  issuedAtMs: issuedAtMs
}) {
  let u = Buffer.alloc(k.length + 80 + 8),
    a = 0;
  return a += k.copy(u, a), a += g(orgUuid).copy(u, a), a += g(accountUuid).copy(u, a), a += g(sessionUuid).copy(u, a), a += g(expectedCurrentDeviceUuid ?? T).copy(u, a), a += g(newDeviceUuid).copy(u, a), u.writeBigUInt64BE(BigInt(issuedAtMs), a), u;
}
async function Pir({
  orgUuid: orgUuid_2,
  accountUuid: accountUuid_2,
  sessionUuid: sessionUuid_2,
  deviceUUID: o,
  key: key,
  now = Date.now
}) {
  let issuedAtMs_2 = now(),
    a = await key.sign(H({
      orgUuid: orgUuid_2,
      accountUuid: accountUuid_2,
      sessionUuid: sessionUuid_2,
      expectedCurrentDeviceUuid: void 0,
      newDeviceUuid: o,
      issuedAtMs: issuedAtMs_2
    }));
  return {
    deviceUUID: o,
    kid: ywt + o,
    signature: a.toString("base64"),
    issuedAt: new Date(issuedAtMs_2).toISOString()
  };
}
var x = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"),
  O = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"),
  N = /^[a-z0-9_.]{1,48}$/,
  F = 8;
function C(e) {
  return Buffer.concat([x, ...I(e), R(e.issuedAtMs)]);
}
function hCn(e) {
  let n = L(e).sort();
  return e.length >= 1 && e.length <= F && e.every(item => N.test(item)) && n.length === e.length && n.every((item, index) => item === e[index]) ? n : void 0;
}
function M(e, n) {
  if (hCn(n) === void 0) throw new P("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([O, ...I(e), h(n.length), ...n.flatMap(item => {
    let o = Buffer.from(item, "ascii");
    return [h(o.length), o];
  }), R(e.issuedAtMs)]);
}
async function Iir({
  orgUuid: orgUuid_3,
  accountUuid: accountUuid_3,
  sessionUuid: sessionUuid_3,
  deviceUUID: o,
  request: request,
  capabilities: capabilities,
  key: key_2,
  now: now_2 = Date.now
}) {
  let issuedAtMs_3 = now_2(),
    B = {
      orgUuid: orgUuid_3,
      accountUuid: accountUuid_3,
      sessionUuid: sessionUuid_3,
      deviceUuid: o,
      request: request,
      issuedAtMs: issuedAtMs_3
    },
    f = await key_2.sign(capabilities === void 0 ? C(B) : M(B, capabilities));
  return {
    deviceUUID: o,
    kid: ywt + o,
    signature: f.toString("base64"),
    issuedAt: new Date(issuedAtMs_3).toISOString()
  };
}
async function K() {
  return (await w()).ok;
}
async function w() {
  let {
    trustedDeviceTokenForBind: trustedDeviceTokenForBind
  } = await import("B:/~BUN/root/chunk-7y6ync74.js");
  return trustedDeviceTokenForBind(void 0);
}
async function _wt(e) {
  if (e.launchedFromHome === void 0) await oEe();
  if ((e.launchedFromHome ?? TKe)()) return xf("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? Aoe)();
  } catch {
    n = !1;
  }
  if (!n) return xf("egress");
  let r = Oir({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : Mir(e.credentials))
  });
  if (r.status === "missing") return xf("account");
  if (r.status === "mismatch") return xf("account_mismatch");
  return (await (e.hasDeviceProof ?? K)().catch(() => !1)) ? zg({
    accountUuid: r.accountUuid,
    source: r.source
  }) : xf("no_device_proof");
}
async function AKo(e) {
  let n = e.isEnabled ?? jd;
  try {
    if (!(await n())) return xf("gate");
  } catch (error) {
    return xf(y("gate", error));
  }
  let r = "no_device_proof",
    o = await _wt({
      ...e,
      hasDeviceProof: e.hasDeviceProof ?? (async () => {
        let f = await w();
        if (!f.ok && f.error !== "not_given") r = f.error;
        return f.ok;
      })
    });
  if (!o.ok) {
    let f = q(o.error);
    return o.error === "no_device_proof" ? xf(r) : f;
  }
  i("tengu_device_bind_account", {
    source: c(o.value.source)
  });
  let {
      accountUuid: accountUuid_4
    } = o.value,
    s = e.displayName ?? qWe(),
    u = !1,
    a = async relearn => {
      try {
        return zg(await bwt(accountUuid_4, s, e.credentials, {
          relearn: relearn
        }));
      } catch (error) {
        if (!(error instanceof MSe) || e.confirmReenroll === void 0 || u) return xf(y("register", error));
        return u = !0, (await V(e.confirmReenroll)) ? D(error.refusedPublicKey) : xf(y("register", error));
      }
    },
    D = async f => {
      try {
        return zg(await Or("device_reenroll", () => meo(accountUuid_4, s, f, e.credentials), j));
      } catch (error) {
        return xf(y("register", error));
      }
    },
    B = async f => {
      let m = await a(f);
      if (!m.ok) return m;
      let {
        deviceUUID: deviceUUID_2,
        key: key_3
      } = m.value;
      return zg({
        deviceUUID: deviceUUID_2,
        sign: async () => {
          try {
            let v = await S(e.orgUuid, accountUuid_4, deviceUUID_2, key_3);
            return _("device_bind"), v;
          } catch (error) {
            y("sign", error);
            return;
          }
        },
        reregister: async () => (await j4t(accountUuid_4, e.credentials).catch(v => {
          t(`[deviceBind] could not forget the cached device id: ${v instanceof Error ? v.message : String(v)}`);
        }), B(!0))
      });
    };
  return B(!1);
}
function I({
  orgUuid: orgUuid_4,
  accountUuid: accountUuid_5,
  sessionUuid: sessionUuid_4,
  deviceUuid: deviceUuid,
  request: request_2
}) {
  let s = Buffer.from(request_2.workId, "utf8"),
    u = Buffer.from(request_2.environmentId, "utf8");
  if (s.length === 0 || u.length === 0 || s.length > 65535 || u.length > 65535) throw new P("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [g(orgUuid_4), g(accountUuid_5), g(sessionUuid_4), g(deviceUuid), h(s.length), s, h(u.length), u];
}
function h(e) {
  let n = Buffer.alloc(2);
  return n.writeUInt16BE(e), n;
}
function R(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}
function q(e) {
  return i("tengu_device_bind_skipped", {
    reason: c(e),
    ...cpe(e)
  }), xf(e);
}
async function V(e) {
  try {
    let confirmed = await e();
    return i("tengu_device_reenroll", {
      confirmed: confirmed,
      prompt_failed: !1
    }), confirmed;
  } catch (error) {
    return t(`[deviceBind] could not ask whether to register this machine again: ${l(error)}`), i("tengu_device_reenroll", {
      confirmed: !1,
      prompt_failed: !0
    }), !1;
  }
}
function j(e) {
  return e instanceof P && e.errorClass || "unexpected_error";
}
function y(e, n) {
  return i("tengu_device_bind_failed", {
    phase: c(e),
    limit_reached: n instanceof VWe,
    registration_unavailable: n instanceof uOe,
    revoked: n instanceof MSe
  }), p("device_bind", n instanceof P && n.errorClass || e), t(`[deviceBind] continuing unbound: ${n instanceof Error ? n.message : String(n)}`), n instanceof VWe ? "limit_reached" : n instanceof uOe ? "registration_unavailable" : n instanceof MSe ? "device_revoked" : n instanceof P && n.errorClass === "no_keychain" ? "no_keychain" : e;
}
export { ywt, Pir, hCn, Iir, _wt, AKo };