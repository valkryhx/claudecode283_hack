// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Eh, $p, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Cx } from "B:/~BUN/root/chunk-r4y1700s.js";
import { DUe, zct } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { C3t, Ast, s4e, vFe, Qas, LOn, xst } from "B:/~BUN/root/chunk-wm0xaa4j.js";
import { Dto, Lto } from "B:/~BUN/root/chunk-enq05gxv.js";
import { Abe } from "B:/~BUN/root/chunk-5yjgxv55.js";
import { xbe } from "B:/~BUN/root/chunk-8fr0ycwm.js";
var wFe = "creg_",
  w = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function Q$(e) {
  if (!Vt(e)) throw new x(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function P(e, n, r, o) {
  let u = Buffer.alloc(w.length + 48 + 8),
    s = 0;
  return s += w.copy(u, s), s += Q$(e).copy(u, s), s += Q$(n).copy(u, s), s += Q$(r).copy(u, s), u.writeBigUInt64BE(BigInt(o), s), u;
}
async function R(orgUuid, accountUuid, deviceUUID, o) {
  let issuedAtMs = Date.now(),
    s = await o.sign(P(orgUuid, accountUuid, deviceUUID, issuedAtMs));
  return {
    deviceUUID: deviceUUID,
    kid: wFe + deviceUUID,
    signature: s.toString("base64"),
    issuedAt: new Date(issuedAtMs).toISOString(),
    signedOver: {
      orgUuid: orgUuid,
      accountUuid: accountUuid,
      issuedAtMs: issuedAtMs
    }
  };
}
var A = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"),
  S = "00000000-0000-0000-0000-000000000000";
function E({
  orgUuid: orgUuid_2,
  accountUuid: accountUuid_2,
  sessionUuid: sessionUuid,
  expectedCurrentDeviceUuid: expectedCurrentDeviceUuid,
  newDeviceUuid: newDeviceUuid,
  issuedAtMs: issuedAtMs_2
}) {
  let a = Buffer.alloc(A.length + 80 + 8),
    f = 0;
  return f += A.copy(a, f), f += Q$(orgUuid_2).copy(a, f), f += Q$(accountUuid_2).copy(a, f), f += Q$(sessionUuid).copy(a, f), f += Q$(expectedCurrentDeviceUuid ?? S).copy(a, f), f += Q$(newDeviceUuid).copy(a, f), a.writeBigUInt64BE(BigInt(issuedAtMs_2), f), a;
}
async function Pto({
  orgUuid: orgUuid_3,
  accountUuid: accountUuid_3,
  sessionUuid: sessionUuid_2,
  deviceUUID: o,
  key: key,
  now = Date.now
}) {
  let issuedAtMs_3 = now(),
    f = await key.sign(E({
      orgUuid: orgUuid_3,
      accountUuid: accountUuid_3,
      sessionUuid: sessionUuid_2,
      expectedCurrentDeviceUuid: void 0,
      newDeviceUuid: o,
      issuedAtMs: issuedAtMs_3
    }));
  return {
    deviceUUID: o,
    kid: wFe + o,
    signature: f.toString("base64"),
    issuedAt: new Date(issuedAtMs_3).toISOString()
  };
}
var T = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"),
  H = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"),
  O = /^[a-z0-9_.]{1,48}$/,
  F = 8;
function N(e) {
  return Buffer.concat([T, ...b(e), U(e.issuedAtMs)]);
}
function Rur(e) {
  let n = L(e).sort();
  return e.length >= 1 && e.length <= F && e.every(item => O.test(item)) && n.length === e.length && n.every((item, index) => item === e[index]) ? n : void 0;
}
function M(e, n) {
  if (Rur(n) === void 0) throw new x("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([H, ...b(e), _(n.length), ...n.flatMap(item => {
    let o = Buffer.from(item, "ascii");
    return [_(o.length), o];
  }), U(e.issuedAtMs)]);
}
async function Oto({
  orgUuid: orgUuid_4,
  accountUuid: accountUuid_4,
  sessionUuid: sessionUuid_3,
  deviceUUID: o,
  request: request,
  capabilities: capabilities,
  key: key_2,
  now: now_2 = Date.now
}) {
  let issuedAtMs_4 = now_2(),
    B = {
      orgUuid: orgUuid_4,
      accountUuid: accountUuid_4,
      sessionUuid: sessionUuid_3,
      deviceUuid: o,
      request: request,
      issuedAtMs: issuedAtMs_4
    },
    l = await key_2.sign(capabilities === void 0 ? N(B) : M(B, capabilities));
  return {
    deviceUUID: o,
    kid: wFe + o,
    signature: l.toString("base64"),
    issuedAt: new Date(issuedAtMs_4).toISOString()
  };
}
var C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");
function K(e, n) {
  let r = Buffer.from(n, "utf8");
  if (r.length === 0 || r.length > 65535) throw new x("deviceBind: tool-host resume nonce must be 1 to 65535 bytes", "deviceBind: malformed resume nonce");
  return Buffer.concat([C, ...b(e), _(r.length), r, U(e.issuedAtMs)]);
}
async function Ito({
  deviceUUID: e,
  nonce: nonce,
  key: key_3,
  now: now_3 = Date.now,
  ...u
}) {
  let issuedAtMs_5 = now_3(),
    a = await key_3.sign(K({
      ...u,
      deviceUuid: e,
      issuedAtMs: issuedAtMs_5
    }, nonce));
  return {
    deviceUUID: e,
    kid: wFe + e,
    signature: a.toString("base64"),
    issuedAt: new Date(issuedAtMs_5).toISOString()
  };
}
async function q() {
  return (await I()).ok;
}
async function I() {
  let {
    trustedDeviceTokenForBind: trustedDeviceTokenForBind
  } = await import("B:/~BUN/root/chunk-2fnw3gv0.js");
  return trustedDeviceTokenForBind(void 0);
}
async function E3t(e) {
  if (e.launchedFromHome === void 0) await DUe();
  if ((e.launchedFromHome ?? zct)()) return $p("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? Abe)();
  } catch {
    n = !1;
  }
  if (!n) return $p("egress");
  let r = Dto({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : Lto(e.credentials))
  });
  if (r.status === "missing") return $p("account");
  if (r.status === "mismatch") return $p("account_mismatch");
  return (await (e.hasDeviceProof ?? q)().catch(() => !1)) ? Eh({
    accountUuid: r.accountUuid,
    source: r.source
  }) : $p("no_device_proof");
}
async function Sri(e) {
  let n = e.isEnabled ?? Cx;
  try {
    if (!(await n())) return $p("gate");
  } catch (error) {
    return $p(y("gate", error));
  }
  let r = "no_device_proof",
    o = await E3t({
      ...e,
      hasDeviceProof: e.hasDeviceProof ?? (async () => {
        let l = await I();
        if (!l.ok && l.error !== "not_given") r = l.error;
        return l.ok;
      })
    });
  if (!o.ok) {
    let l = V(o.error);
    return o.error === "no_device_proof" ? $p(r) : l;
  }
  i("tengu_device_bind_account", {
    source: c(o.value.source)
  });
  let {
      accountUuid: accountUuid_5
    } = o.value,
    s = e.displayName ?? xst(),
    a = !1,
    f = async relearn => {
      try {
        return Eh(await C3t(accountUuid_5, s, e.credentials, {
          relearn: relearn
        }));
      } catch (error) {
        if (!(error instanceof vFe) || e.confirmReenroll === void 0 || a) return $p(y("register", error));
        return a = !0, (await j(e.confirmReenroll)) ? h(error.refusedPublicKey) : $p(y("register", error));
      }
    },
    h = async l => {
      try {
        return Eh(await po("device_reenroll", () => Qas(accountUuid_5, s, l, e.credentials), W));
      } catch (error) {
        return $p(y("register", error));
      }
    },
    B = async l => {
      let m = await f(l);
      if (!m.ok) return m;
      let {
        deviceUUID: D,
        key: key_4
      } = m.value;
      return Eh({
        deviceUUID: D,
        held: {
          accountUuid: accountUuid_5,
          rowPk: D,
          key: key_4
        },
        sign: async () => {
          try {
            let v = await R(e.orgUuid, accountUuid_5, D, key_4);
            return g("device_bind"), v;
          } catch (error) {
            y("sign", error);
            return;
          }
        },
        reregister: async () => (await LOn(accountUuid_5, e.credentials).catch(v => {
          t(`[deviceBind] could not forget the cached device id: ${v instanceof Error ? v.message : String(v)}`);
        }), B(!0))
      });
    };
  return B(!1);
}
function b({
  orgUuid: orgUuid_5,
  accountUuid: accountUuid_6,
  sessionUuid: sessionUuid_4,
  deviceUuid: deviceUuid,
  request: request_2
}) {
  let s = Buffer.from(request_2.workId, "utf8"),
    a = Buffer.from(request_2.environmentId, "utf8");
  if (s.length === 0 || a.length === 0 || s.length > 65535 || a.length > 65535) throw new x("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [Q$(orgUuid_5), Q$(accountUuid_6), Q$(sessionUuid_4), Q$(deviceUuid), _(s.length), s, _(a.length), a];
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
  return i("tengu_device_bind_skipped", {
    reason: c(e),
    ...xbe(e)
  }), $p(e);
}
async function j(e) {
  try {
    let confirmed = await e();
    return i("tengu_device_reenroll", {
      confirmed: confirmed,
      prompt_failed: !1
    }), confirmed;
  } catch (error) {
    return t(`[deviceBind] could not ask whether to register this machine again: ${d(error)}`), i("tengu_device_reenroll", {
      confirmed: !1,
      prompt_failed: !0
    }), !1;
  }
}
function W(e) {
  return e instanceof x && e.errorClass || "unexpected_error";
}
function y(e, n) {
  return i("tengu_device_bind_failed", {
    phase: c(e),
    limit_reached: n instanceof Ast,
    registration_unavailable: n instanceof s4e,
    revoked: n instanceof vFe
  }), p("device_bind", n instanceof x && n.errorClass || e), t(`[deviceBind] continuing unbound: ${n instanceof Error ? n.message : String(n)}`), n instanceof Ast ? "limit_reached" : n instanceof s4e ? "registration_unavailable" : n instanceof vFe ? "device_revoked" : n instanceof x && n.errorClass === "no_keychain" ? "no_keychain" : e;
}
export { wFe, Q$, Pto, Rur, Oto, Ito, E3t, Sri };