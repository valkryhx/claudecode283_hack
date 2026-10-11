// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p,
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  zg,
  xf,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  jd
} from "B:/~BUN/root/chunk-f6h9k5ss.js";
import {
  oEe,
  TKe
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  bwt,
  VWe,
  uOe,
  MSe,
  meo,
  j4t,
  qWe
} from "B:/~BUN/root/chunk-ngj4p673.js";
import {
  Oir,
  Mir
} from "B:/~BUN/root/chunk-2yea34mb.js";
import {
  Aoe
} from "B:/~BUN/root/chunk-y1yq0gxq.js";
import {
  cpe
} from "B:/~BUN/root/chunk-1kweczhs.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
var ywt = "creg_",
  U = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");

function g(e) {
  if (!en(e)) throw new P(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex")
}

function E(e, n, r, o) {
  let d = Buffer.alloc(U.length + 48 + 8),
    s = 0;
  return s += U.copy(d, s), s += g(e).copy(d, s), s += g(n).copy(d, s), s += g(r).copy(d, s), d.writeBigUInt64BE(BigInt(o), s), d
}
async function S(e, n, r, o) {
  let d = Date.now(),
    s = await o.sign(E(e, n, r, d));
  return {
    deviceUUID: r,
    kid: ywt + r,
    signature: s.toString("base64"),
    issuedAt: new Date(d).toISOString()
  }
}
var k = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"),
  T = "00000000-0000-0000-0000-000000000000";

function H({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: r,
  expectedCurrentDeviceUuid: o,
  newDeviceUuid: d,
  issuedAtMs: s
}) {
  let u = Buffer.alloc(k.length + 80 + 8),
    a = 0;
  return a += k.copy(u, a), a += g(e).copy(u, a), a += g(n).copy(u, a), a += g(r).copy(u, a), a += g(o ?? T).copy(u, a), a += g(d).copy(u, a), u.writeBigUInt64BE(BigInt(s), a), u
}
async function Pir({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: r,
  deviceUUID: o,
  key: d,
  now: s = Date.now
}) {
  let u = s(),
    a = await d.sign(H({
      orgUuid: e,
      accountUuid: n,
      sessionUuid: r,
      expectedCurrentDeviceUuid: void 0,
      newDeviceUuid: o,
      issuedAtMs: u
    }));
  return {
    deviceUUID: o,
    kid: ywt + o,
    signature: a.toString("base64"),
    issuedAt: new Date(u).toISOString()
  }
}
var x = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"),
  O = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"),
  N = /^[a-z0-9_.]{1,48}$/,
  F = 8;

function C(e) {
  return Buffer.concat([x, ...I(e), R(e.issuedAtMs)])
}

function hCn(e) {
  let n = L(e).sort();
  return e.length >= 1 && e.length <= F && e.every((r) => N.test(r)) && n.length === e.length && n.every((r, o) => r === e[o]) ? n : void 0
}

function M(e, n) {
  if (hCn(n) === void 0) throw new P("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([O, ...I(e), h(n.length), ...n.flatMap((r) => {
    let o = Buffer.from(r, "ascii");
    return [h(o.length), o]
  }), R(e.issuedAtMs)])
}
async function Iir({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: r,
  deviceUUID: o,
  request: d,
  capabilities: s,
  key: u,
  now: a = Date.now
}) {
  let D = a(),
    B = {
      orgUuid: e,
      accountUuid: n,
      sessionUuid: r,
      deviceUuid: o,
      request: d,
      issuedAtMs: D
    },
    f = await u.sign(s === void 0 ? C(B) : M(B, s));
  return {
    deviceUUID: o,
    kid: ywt + o,
    signature: f.toString("base64"),
    issuedAt: new Date(D).toISOString()
  }
}
async function K() {
  return (await w()).ok
}
async function w() {
  let {
    trustedDeviceTokenForBind: e
  } = await import("B:/~BUN/root/chunk-7y6ync74.js");
  return e(void 0)
}
async function _wt(e) {
  if (e.launchedFromHome === void 0) await oEe();
  if ((e.launchedFromHome ?? TKe)()) return xf("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? Aoe)()
  } catch {
    n = !1
  }
  if (!n) return xf("egress");
  let r = Oir({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : Mir(e.credentials))
  });
  if (r.status === "missing") return xf("account");
  if (r.status === "mismatch") return xf("account_mismatch");
  return await (e.hasDeviceProof ?? K)().catch(() => !1) ? zg({
    accountUuid: r.accountUuid,
    source: r.source
  }) : xf("no_device_proof")
}
async function AKo(e) {
  let n = e.isEnabled ?? jd;
  try {
    if (!await n()) return xf("gate")
  } catch (f) {
    return xf(y("gate", f))
  }
  let r = "no_device_proof",
    o = await _wt({
      ...e,
      hasDeviceProof: e.hasDeviceProof ?? (async () => {
        let f = await w();
        if (!f.ok && f.error !== "not_given") r = f.error;
        return f.ok
      })
    });
  if (!o.ok) {
    let f = q(o.error);
    return o.error === "no_device_proof" ? xf(r) : f
  }
  i("tengu_device_bind_account", {
    source: c(o.value.source)
  });
  let {
    accountUuid: d
  } = o.value, s = e.displayName ?? qWe(), u = !1, a = async (f) => {
    try {
      return zg(await bwt(d, s, e.credentials, {
        relearn: f
      }))
    } catch (m) {
      if (!(m instanceof MSe) || e.confirmReenroll === void 0 || u) return xf(y("register", m));
      return u = !0, await V(e.confirmReenroll) ? D(m.refusedPublicKey) : xf(y("register", m))
    }
  }, D = async (f) => {
    try {
      return zg(await Or("device_reenroll", () => meo(d, s, f, e.credentials), j))
    } catch (m) {
      return xf(y("register", m))
    }
  }, B = async (f) => {
    let m = await a(f);
    if (!m.ok) return m;
    let {
      deviceUUID: b,
      key: A
    } = m.value;
    return zg({
      deviceUUID: b,
      sign: async () => {
        try {
          let v = await S(e.orgUuid, d, b, A);
          return _("device_bind"), v
        } catch (v) {
          y("sign", v);
          return
        }
      },
      reregister: async () => (await j4t(d, e.credentials).catch((v) => {
        t(`[deviceBind] could not forget the cached device id: ${v instanceof Error?v.message:String(v)}`)
      }), B(!0))
    })
  };
  return B(!1)
}

function I({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: r,
  deviceUuid: o,
  request: d
}) {
  let s = Buffer.from(d.workId, "utf8"),
    u = Buffer.from(d.environmentId, "utf8");
  if (s.length === 0 || u.length === 0 || s.length > 65535 || u.length > 65535) throw new P("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [g(e), g(n), g(r), g(o), h(s.length), s, h(u.length), u]
}

function h(e) {
  let n = Buffer.alloc(2);
  return n.writeUInt16BE(e), n
}

function R(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n
}

function q(e) {
  return i("tengu_device_bind_skipped", {
    reason: c(e),
    ...cpe(e)
  }), xf(e)
}
async function V(e) {
  try {
    let n = await e();
    return i("tengu_device_reenroll", {
      confirmed: n,
      prompt_failed: !1
    }), n
  } catch (n) {
    return t(`[deviceBind] could not ask whether to register this machine again: ${l(n)}`), i("tengu_device_reenroll", {
      confirmed: !1,
      prompt_failed: !0
    }), !1
  }
}

function j(e) {
  return e instanceof P && e.errorClass || "unexpected_error"
}

function y(e, n) {
  return i("tengu_device_bind_failed", {
    phase: c(e),
    limit_reached: n instanceof VWe,
    registration_unavailable: n instanceof uOe,
    revoked: n instanceof MSe
  }), p("device_bind", n instanceof P && n.errorClass || e), t(`[deviceBind] continuing unbound: ${n instanceof Error?n.message:String(n)}`), n instanceof VWe ? "limit_reached" : n instanceof uOe ? "registration_unavailable" : n instanceof MSe ? "device_revoked" : n instanceof P && n.errorClass === "no_keychain" ? "no_keychain" : e
}
export {
  ywt,
  Pir,
  hCn,
  Iir,
  _wt,
  AKo
};
