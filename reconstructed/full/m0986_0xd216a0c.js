// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  P,
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Rt
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  dp
} from "B:/~BUN/root/chunk-zksmb712.js";
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  b,
  J,
  ce,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  qr,
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  O,
  P_e
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Dt
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Bo,
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  jm,
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  vl,
  IYn,
  Un
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  Ri,
  $m
} from "B:/~BUN/root/chunk-vpejnsp4.js";
import {
  DN
} from "B:/~BUN/root/chunk-2d028bdz.js";
import {
  cWn
} from "B:/~BUN/root/chunk-d8zzdckb.js";
import {
  Aoe
} from "B:/~BUN/root/chunk-y1yq0gxq.js";
import {
  o,
  ae,
  ut,
  fe
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  hostname as pe
} from "os";
import {
  createPrivateKey as se,
  createPublicKey as de,
  generateKeyPairSync as ye,
  sign as le
} from "crypto";
import {
  randomBytes as q
} from "crypto";
import {
  chmod as X
} from "fs/promises";
import {
  dirname as F,
  join as Q
} from "path";
var G = f(() => ut({
    privateKeyPkcs8B64: o(),
    rowPk: o().optional()
  })),
  Z = f(() => ut({
    keys: fe(o(), ae())
  }));

function u(e, r) {
  let n = e?.keys[r];
  if (n === void 0) return;
  let i = G().safeParse(n);
  return i.success ? i.data : void 0
}
var K = Symbol("deviceKeyStore.NO_KEYCHAIN");

function g(e) {
  return e === vl || e === K
}
var I = "Claude Code-device-keys",
  C = 2000,
  U = 4032,
  ee = 44,
  te = new Set([37, 50]);

function A(e) {
  try {
    let r = Z().safeParse(J(e));
    return r.success ? r.data : void 0
  } catch {
    return
  }
}
var H = Promise.resolve();
async function L(e, r) {
  let n = H,
    i = Promise.withResolvers();
  H = i.promise;
  try {
    await n;
    let a = F(e());
    await ce().mkdir(a);
    let s = await Ri(Q(a, ".device-keys"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1000
      },
      stale: 15000,
      onCompromised: (c) => t(`[deviceKeyStore] write lock compromised: ${l(c)}`, {
        level: "warn"
      })
    });
    try {
      return await r()
    } finally {
      await $m(s, "[deviceKeyStore] write lock")
    }
  } finally {
    i.resolve()
  }
}

function ie(e) {
  return {
    name: "file",
    async read() {
      let r = e(),
        n;
      try {
        n = await ce().readFile(r, {
          encoding: "utf8"
        })
      } catch (s) {
        let c = v(s);
        if (c === "ENOENT") return null;
        return t(`[deviceKeyStore] file read failed: ${c??"unknown"}`, {
          level: "warn"
        }), vl
      }
      if (!n.trim()) return null;
      let i = A(n);
      if (i) return i;
      let a = `${r}.corrupt-${Date.now()}-${process.pid}-${q(3).toString("hex")}`;
      try {
        await Bo(r, a)
      } catch (s) {
        return t(`[deviceKeyStore] device-key file is not a device-key document and could not be set aside: ${v(s)??"unknown"}`, {
          level: "warn"
        }), vl
      }
      return t(`[deviceKeyStore] device-key file was not a device-key document; set aside as ${a} and starting fresh`, {
        level: "warn"
      }), p("device_key_store", "corrupt_quarantined"), null
    },
    async write(r) {
      let n = e();
      try {
        return await ce().mkdir(F(n)), await Cn(n, b(r), 384), await X(n, 384), !0
      } catch (i) {
        return t(`[deviceKeyStore] file write failed: ${v(i)??"unknown"}`, {
          level: "warn"
        }), !1
      }
    },
    withWriteLock(r) {
      return L(e, r)
    }
  }
}

function oe(e) {
  return {
    name: "keychain",
    async read() {
      let {
        stdout: r,
        code: n
      } = await tt("security", ["find-generic-password", "-a", DN(), "-w", "-s", I], {
        useCwd: !1,
        preserveOutputOnError: !1,
        timeout: C
      });
      if (n === ee) return null;
      if (te.has(n)) return t(`[deviceKeyStore] this account has no login keychain (security exited ${n}); it holds no device key`), K;
      if (n !== 0) return t(`[deviceKeyStore] keychain read failed: security exited ${n}`, {
        level: "warn"
      }), vl;
      let i = r.trim();
      if (!i) return null;
      let a = A(i);
      if (!a) return t("[deviceKeyStore] keychain item is not a device-key document", {
        level: "warn"
      }), vl;
      return a
    },
    async write(r) {
      let n = DN(),
        i = Buffer.from(b(r), "utf8").toString("hex"),
        a = `add-generic-password -U -a "${n}" -s "${I}" -X "${i}"
`;
      try {
        return (a.length <= U ? await jm("security", ["-i"], {
          input: a,
          stdio: ["pipe", "pipe", "pipe"],
          reject: !1,
          timeout: C
        }) : await jm("security", ["add-generic-password", "-U", "-a", n, "-s", I, "-X", i], {
          stdio: ["ignore", "pipe", "pipe"],
          reject: !1,
          timeout: C
        })).exitCode === 0
      } catch {
        return !1
      }
    },
    withWriteLock(r) {
      return L(e, r)
    }
  }
}
var ne = ie(cWn),
  Ye = oe(cWn),
  B;

function D() {
  if (B) return B;
  return ne
}

function S() {
  return ue
}
var T = Rt(new Set, (e) => e.clear());

function z(e) {
  return e?.inMemory === !0 || O() === "windows" && IYn()
}
var ue = {
  async load(e, r) {
    let n = await N(e, r, "load"),
      i = n && w(n.stored);
    return n && i ? E(e, n, i, r) : void 0
  },
  async loadOrCreate(e, r) {
    let n = await N(e, r, "create");
    if (n) {
      let y = w(n.stored);
      if (y) return E(e, n, y, r);
      if (t("[deviceKey] stored device key is unreadable; minting a new one"), n.location === "legacy") await Y(e, n, r).catch((k) => {
        t(`[deviceKey] could not retire the unreadable device key: ${l(k)}`)
      })
    }
    let i = await ge(e, r),
      a = i && w(i.stored);
    if (i && a) return t(`[deviceKey] adopting the device key already held in the ${i.location==="item"?"device-key item":"credentials store"}`), E(e, i, a, r);
    let s = {
        privateKeyPkcs8B64: ye("ec", {
          namedCurve: "P-256"
        }).privateKey.export({
          type: "pkcs8",
          format: "der"
        }).toString("base64")
      },
      c;
    try {
      c = z(r) ? await ve(e, s, r) : await me(e, s)
    } catch (y) {
      throw y instanceof P ? y : new P(`deviceRegistry: device key could not be persisted (${l(y)})`, "deviceRegistry: device key not persisted", "key_not_persisted")
    }
    let d = c && w(c.stored);
    if (!c || !d) throw new P("deviceRegistry: device key could not be persisted", "deviceRegistry: device key not persisted", "key_not_persisted");
    return E(e, c, d, r)
  }
};

function me(e, r) {
  let n = D();
  return n.withWriteLock(async () => {
    let i = await n.read();
    if (g(i)) return x(i);
    let a = u(i, e);
    if (a && w(a)) return {
      location: "item",
      stored: a
    };
    if (!await n.write({
        ...i,
        keys: {
          ...i?.keys,
          [e]: r
        }
      })) {
      p("device_key_store", "item_write_failed");
      return
    }
    let c = await n.read(),
      d = g(c) ? void 0 : u(c, e);
    if (!d) p("device_key_store", "readback_mismatch");
    return d && {
      location: "item",
      stored: d
    }
  })
}
async function ve(e, r, n) {
  await Un().mutate((a) => {
    if (a.coworkRemoteDevice?.[e]) return a;
    return {
      ...a,
      coworkRemoteDevice: {
        ...a.coworkRemoteDevice,
        [e]: r
      }
    }
  }, n);
  let i = (await Un().readAsync(n))?.coworkRemoteDevice?.[e];
  return i && {
    location: "legacy",
    stored: i
  }
}
async function N(e, r, n) {
  let i = (await Un().readAsync(r))?.coworkRemoteDevice?.[e];
  if (z(r)) {
    if (i || r?.inMemory === !0) return i && {
      location: "legacy",
      stored: i
    };
    let c = await D().read(),
      d = g(c) ? void 0 : u(c, e);
    return d && {
      location: "item",
      stored: d
    }
  }
  let a = await D().read();
  if (g(a)) {
    if (i && w(i)) {
      if (a === vl) p("device_key_store", "item_unreadable_using_legacy");
      return {
        location: "legacy",
        stored: i
      }
    }
    if (a === K && n === "load") return;
    return x(a)
  }
  let s = u(a, e);
  if (s) {
    if (i?.privateKeyPkcs8B64 === s.privateKeyPkcs8B64 && (n === "create" || !T.has(e))) await M(e, s.privateKeyPkcs8B64, r);
    return {
      location: "item",
      stored: s
    }
  }
  if (!i) return;
  if (n === "load" && T.has(e)) return {
    location: "legacy",
    stored: i
  };
  return {
    location: await we(e, i, r),
    stored: i
  }
}

function x(e) {
  if (e === K) throw p("device_key_store", "no_keychain"), new P("deviceRegistry: this account has no login keychain to hold a device key", "deviceRegistry: no login keychain", "no_keychain");
  throw p("device_key_store", "item_read_failed"), new P("deviceRegistry: the device-key store could not be read", "deviceRegistry: device-key store unreadable", "key_store_unreadable")
}
async function ge(e, r) {
  if (r?.inMemory !== !0) {
    let i = await D().read();
    if (g(i)) return x(i);
    let a = u(i, e);
    if (a && w(a)) return {
      location: "item",
      stored: a
    }
  }
  let n = Un();
  for (let i of [{
      inaccessibleAs: "failure"
    }, void 0]) {
    let a = await (n.readAsyncStrict?.(r, i) ?? n.readAsync(r));
    if (a === vl) throw p("device_key_store", "legacy_read_failed"), new P("deviceRegistry: the credentials store could not be read for a device key", "deviceRegistry: credentials store unreadable", "key_store_unreadable");
    let s = a?.coworkRemoteDevice?.[e];
    if (s && w(s)) return {
      location: "legacy",
      stored: s
    }
  }
  return
}
async function we(e, r, n) {
  let i, a = D();
  try {
    i = await a.withWriteLock(async () => {
      let s = await a.read();
      if (g(s)) return h(e, s === K ? "no_keychain" : "item_read_failed");
      if (u(s, e) === void 0) {
        if (!await a.write({
            ...s,
            keys: {
              ...s?.keys,
              [e]: r
            }
          })) return h(e, "item_write_failed")
      }
      let c = await a.read(),
        d = g(c) ? void 0 : u(c, e);
      if (d === void 0) return h(e, "readback_mismatch");
      if (d.privateKeyPkcs8B64 !== r.privateKeyPkcs8B64 || d.rowPk !== r.rowPk) return h(e, "readback_foreign_key");
      return "item"
    })
  } catch (s) {
    return t(`[deviceKey] could not take the device-key lock to move the device key: ${l(s)}`), h(e, "lock_unavailable")
  }
  if (i === "item") await M(e, r.privateKeyPkcs8B64, n);
  return i
}

function h(e, r) {
  return T.add(e), t(`[deviceKey] device key stays in the credentials store for now (${r})`), p("device_key_store", r), "legacy"
}
async function M(e, r, n) {
  let i = !1;
  try {
    if ((await Un().mutate((s) => {
        if (s.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== r) return s;
        i = !0;
        let {
          [e]: c, ...d
        } = s.coworkRemoteDevice;
        return {
          ...s,
          coworkRemoteDevice: d
        }
      }, n)).success) {
      if (i) t("[deviceKey] moved the device key out of the credentials store into its own item"), _("device_key_store");
      return
    }
  } catch (a) {
    t(`[deviceKey] could not clear the legacy device key: ${l(a)}`)
  }
  h(e, "legacy_delete_failed")
}

function w(e) {
  try {
    let r = se({
      key: Buffer.from(e.privateKeyPkcs8B64, "base64"),
      format: "der",
      type: "pkcs8"
    });
    return r.asymmetricKeyType === "ec" && r.asymmetricKeyDetails?.namedCurve === "prime256v1" ? r : void 0
  } catch {
    return
  }
}

function E(e, {
  location: r,
  stored: n
}, i, a) {
  return {
    rowPk: n.rowPk,
    publicKeySpkiB64: de(i).export({
      type: "spki",
      format: "der"
    }).toString("base64"),
    sign: async (s) => le("sha256", s, {
      key: i,
      dsaEncoding: "ieee-p1363"
    }),
    setRowPk: (s) => j(e, {
      location: r,
      stored: n
    }, (c) => {
      if (c.rowPk === s) return c;
      if (s === void 0) {
        let {
          rowPk: d,
          ...y
        } = c;
        return y
      }
      return {
        ...c,
        rowPk: s
      }
    }, a),
    drop: () => Y(e, {
      location: r,
      stored: n
    }, a)
  }
}
async function j(e, {
  location: r,
  stored: n
}, i, a) {
  if (r === "legacy") {
    await Un().mutate((c) => {
      let d = c.coworkRemoteDevice?.[e];
      if (d?.privateKeyPkcs8B64 !== n.privateKeyPkcs8B64) return c;
      let y = i(d);
      if (y === d) return c;
      let {
        [e]: k, ...R
      } = c.coworkRemoteDevice ?? {};
      return {
        ...c,
        coworkRemoteDevice: y === void 0 ? R : {
          ...R,
          [e]: y
        }
      }
    }, a);
    return
  }
  let s = D();
  await s.withWriteLock(async () => {
    let c = await s.read();
    if (g(c)) throw new P(`deviceRegistry: the ${s.name} device-key store could not be read`, "deviceRegistry: device-key store unreadable");
    let d = u(c, e);
    if (c === null || d?.privateKeyPkcs8B64 !== n.privateKeyPkcs8B64) return;
    let y = i(d);
    if (y === d) return;
    let {
      [e]: k, ...R
    } = c.keys;
    if (!await s.write({
        ...c,
        keys: y === void 0 ? R : {
          ...R,
          [e]: y
        }
      })) throw new P(`deviceRegistry: the ${s.name} device-key store refused the write`, "deviceRegistry: device-key store write refused")
  })
}

function Y(e, r, n) {
  return j(e, r, () => {
    return
  }, n)
}
var ke = "/api/organizations/:orgUUID/cowork/remote_devices",
  _e = "cowork_remote_device_limit_reached",
  De = "account_session_invalid",
  Ke = "cowork_remote_device_registration_revoked";
async function B7e(e, r) {
  if (r?.accountUuid === e) return r.rowPk;
  return en((await S().load(e, void 0))?.rowPk)?.toLowerCase()
}
async function feo(e, r) {
  let n = await S().load(e, r),
    i = en(n?.rowPk)?.toLowerCase();
  return n && i ? {
    rowPk: i,
    key: n
  } : void 0
}

function he() {
  return "win32"
}

function Se(e) {
  return qr(e.trim(), 255) || qr(qWe().trim(), 255)
}
async function bwt(e, r, n, {
  relearn: i = !1
} = {}) {
  try {
    if (!Aoe()) throw new uOe("client egress policy");
    return await Pe(e, r, n, i)
  } catch (a) {
    throw m("device_registry_register", a instanceof P && a.errorClass || "unexpected_error"), a
  }
}
async function Pe(e, r, n, i) {
  let a = await S().loadOrCreate(e, n);
  if (a.rowPk && !i) return _("device_registry_register"), {
    deviceUUID: a.rowPk,
    key: a
  };
  let s = await Dt.post(ke, {
    display_name: Se(r),
    platform: he(),
    public_key: a.publicKeySpkiB64
  }, {
    auth: "teleport-org",
    headers: {
      "anthropic-beta": dp
    },
    timeout: 1e4,
    validateStatus: () => !0,
    credentials: n
  }).catch((k) => {
    throw new P(`deviceRegistry: register request failed (${l(k)})`, "deviceRegistry: register request failed", "request_failed")
  });
  if (!s.ok) throw new P(`deviceRegistry: register not sent (${s.reason})`, "deviceRegistry: register not sent", "not_sent");
  if (t(`[deviceRegistry] register status=${s.status} request_id=${String(s.response.headers?.["request-id"]??"")}`), s.status === 400 && s.data?.error?.details?.error_code === _e) throw new VWe;
  if (s.status === 403 && s.data?.error?.details?.error_code !== De || s.status === 404) throw new uOe(`HTTP ${s.status}`);
  let c = s.data?.error?.details?.error_code;
  if (c === Ke || s.status === 409 && c === void 0) throw new MSe(a.publicKeySpkiB64);
  let d = en(s.data?.id);
  if (s.status !== 201 || d === null) throw new P(`deviceRegistry: register ${s.status}: ${re(String(b(s.data)??""),200)}`, "deviceRegistry: register HTTP error", "http_error");
  if (s.data?.revoked_at !== null && s.data?.revoked_at !== void 0) throw new MSe(a.publicKeySpkiB64);
  let y = d.toLowerCase();
  return await a.setRowPk(y).catch((k) => {
    t(`[deviceRegistry] registered device row=${y} but could not cache it: ${l(k)}`)
  }), t(`[deviceRegistry] registered device row=${y}`), _("device_registry_register"), {
    deviceUUID: y,
    key: a
  }
}
class VWe extends P {
  constructor() {
    super("deviceRegistry: account device limit reached", "deviceRegistry: account device limit reached", "limit_reached")
  }
}
class uOe extends P {
  constructor(e) {
    super(`deviceRegistry: device registration unavailable for this account or organization (${e})`, "deviceRegistry: device registration unavailable for this account or organization", "registration_unavailable")
  }
}
class MSe extends P {
  refusedPublicKey;
  constructor(e) {
    super("deviceRegistry: this machine's device registration was removed from the account", "deviceRegistry: device registration revoked", "registration_revoked");
    this.refusedPublicKey = e
  }
}
async function meo(e, r, n, i) {
  return await W(e, n, i, 2), bwt(e, r, i, {
    relearn: !0
  })
}
async function W(e, r, n, i) {
  let a = await S().load(e, n);
  if (a?.publicKeySpkiB64 !== r) return;
  if (i === 0) throw V("it is still stored after being dropped");
  return await a.drop().catch((s) => {
    throw V(l(s))
  }), W(e, r, n, i - 1)
}

function V(e) {
  return new P(`deviceRegistry: the removed device's key could not be retired (${e})`, "deviceRegistry: device key not retired", "key_not_retired")
}
async function j4t(e, r) {
  await (await S().load(e, r))?.setRowPk(void 0)
}

function qWe() {
  return `Claude Code on ${pe()} \xB7 ${P_e("win32")}`
}
export {
  B7e,
  feo,
  bwt,
  VWe,
  uOe,
  MSe,
  meo,
  j4t,
  qWe
};
