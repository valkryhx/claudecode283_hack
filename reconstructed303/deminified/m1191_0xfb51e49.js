// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { vp } from "B:/~BUN/root/chunk-jpdys232.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _, J, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { qs, ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { I, _De } from "B:/~BUN/root/chunk-je1b1drr.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ns, An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { dl, zm } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { by } from "B:/~BUN/root/chunk-j8w5f307.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { wl, R5n, qn } from "B:/~BUN/root/chunk-245a2x6v.js";
import { xB } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { rzn } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { Abe } from "B:/~BUN/root/chunk-5yjgxv55.js";
import { o, oe, _t, fe } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { hostname as _e } from "os";
import { createPrivateKey as ye, createPublicKey as le, generateKeyPairSync as ue, sign as me } from "crypto";
import { randomBytes as q } from "crypto";
import { chmod as X } from "fs/promises";
import { dirname as F, join as Q } from "path";
var G = f(() => _t({
    privateKeyPkcs8B64: o(),
    rowPk: o().optional()
  })),
  Z = f(() => _t({
    keys: fe(o(), oe())
  }));
function u(e, r) {
  let n = e?.keys[r];
  if (n === void 0) return;
  let i = G().safeParse(n);
  return i.success ? i.data : void 0;
}
var h = Symbol("deviceKeyStore.NO_KEYCHAIN");
function v(e) {
  return e === wl || e === h;
}
var C = "Claude Code-device-keys",
  timeout = 2000,
  U = 4032,
  ee = 44,
  re = new Set([37, 50]);
function A(e) {
  try {
    let r = Z().safeParse(J(e));
    return r.success ? r.data : void 0;
  } catch {
    return;
  }
}
var O = Promise.resolve();
async function L(e, r) {
  let n = O,
    i = Promise.withResolvers();
  O = i.promise;
  try {
    await n;
    let s = F(e());
    await se().mkdir(s);
    let a = await dl(Q(s, ".device-keys"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1000
      },
      stale: 15000,
      onCompromised: c => t(`[deviceKeyStore] write lock compromised: ${d(c)}`, {
        level: "warn"
      })
    });
    try {
      return await r();
    } finally {
      await zm(a, "[deviceKeyStore] write lock");
    }
  } finally {
    i.resolve();
  }
}
function te(e) {
  return {
    name: "file",
    async read() {
      let r = e(),
        n;
      try {
        n = await se().readFile(r, {
          encoding: "utf8"
        });
      } catch (error) {
        let c = k(error);
        if (c === "ENOENT") return null;
        return t(`[deviceKeyStore] file read failed: ${c ?? "unknown"}`, {
          level: "warn"
        }), wl;
      }
      if (!n.trim()) return null;
      let i = A(n);
      if (i) return i;
      let s = `${r}.corrupt-${Date.now()}-${process.pid}-${q(3).toString("hex")}`;
      try {
        await ns(r, s);
      } catch (error) {
        return t(`[deviceKeyStore] device-key file is not a device-key document and could not be set aside: ${k(error) ?? "unknown"}`, {
          level: "warn"
        }), wl;
      }
      return t(`[deviceKeyStore] device-key file was not a device-key document; set aside as ${s} and starting fresh`, {
        level: "warn"
      }), p("device_key_store", "corrupt_quarantined"), null;
    },
    async write(r) {
      let n = e();
      try {
        return await se().mkdir(F(n)), await An(n, _(r), 384), await X(n, 384), !0;
      } catch (error) {
        return t(`[deviceKeyStore] file write failed: ${k(error) ?? "unknown"}`, {
          level: "warn"
        }), !1;
      }
    },
    withWriteLock(r) {
      return L(e, r);
    }
  };
}
function ie(e) {
  return {
    name: "keychain",
    async read() {
      let {
        stdout: stdout,
        code: code
      } = await lt("security", ["find-generic-password", "-a", xB(), "-w", "-s", C], {
        useCwd: !1,
        preserveOutputOnError: !1,
        timeout: timeout
      });
      if (code === ee) return null;
      if (re.has(code)) return t(`[deviceKeyStore] this account has no login keychain (security exited ${code}); it holds no device key`), h;
      if (code !== 0) return t(`[deviceKeyStore] keychain read failed: security exited ${code}`, {
        level: "warn"
      }), wl;
      let i = stdout.trim();
      if (!i) return null;
      let s = A(i);
      if (!s) return t("[deviceKeyStore] keychain item is not a device-key document", {
        level: "warn"
      }), wl;
      return s;
    },
    async write(r) {
      let n = xB(),
        i = Buffer.from(_(r), "utf8").toString("hex"),
        input = `add-generic-password -U -a "${n}" -s "${C}" -X "${i}"
`;
      try {
        return (input.length <= U ? await by("security", ["-i"], {
          input: input,
          stdio: ["pipe", "pipe", "pipe"],
          reject: !1,
          timeout: timeout
        }) : await by("security", ["add-generic-password", "-U", "-a", n, "-s", C, "-X", i], {
          stdio: ["ignore", "pipe", "pipe"],
          reject: !1,
          timeout: timeout
        })).exitCode === 0;
      } catch {
        return !1;
      }
    },
    withWriteLock(r) {
      return L(e, r);
    }
  };
}
var ae = te(rzn),
  Xe = ie(rzn),
  ce = {
    name: "diskless",
    read: async () => wl,
    write: async () => !1,
    withWriteLock: async () => {
      throw Error("This hosted session (claude-code-server) keeps no device key on its machine");
    }
  },
  B;
function K() {
  if (B) return B;
  if (de()) return ce;
  return ae;
}
function R() {
  return ve;
}
var T = He(new Set(), e => e.clear());
function z(e) {
  return e?.inMemory === !0 || I() === "windows" && R5n();
}
var ve = {
  async load(e, r) {
    let n = await N(e, r, "load"),
      i = n && w(n.stored);
    return n && i ? E(e, n, i, r) : void 0;
  },
  async loadOrCreate(e, r) {
    let n = await N(e, r, "create");
    if (n) {
      let l = w(n.stored);
      if (l) return E(e, n, l, r);
      if (t("[deviceKey] stored device key is unreadable; minting a new one"), n.location === "legacy") await Y(e, n, r).catch(D => {
        t(`[deviceKey] could not retire the unreadable device key: ${d(D)}`);
      });
    }
    let i = await pe(e, r),
      s = i && w(i.stored);
    if (i && s) return t(`[deviceKey] adopting the device key already held in the ${i.location === "item" ? "device-key item" : "credentials store"}`), E(e, i, s, r);
    let a = {
        privateKeyPkcs8B64: ue("ec", {
          namedCurve: "P-256"
        }).privateKey.export({
          type: "pkcs8",
          format: "der"
        }).toString("base64")
      },
      c;
    try {
      c = z(r) ? await we(e, a, r) : await ge(e, a);
    } catch (error) {
      throw error instanceof x ? error : new x(`deviceRegistry: device key could not be persisted (${d(error)})`, "deviceRegistry: device key not persisted", "key_not_persisted");
    }
    let y = c && w(c.stored);
    if (!c || !y) throw new x("deviceRegistry: device key could not be persisted", "deviceRegistry: device key not persisted", "key_not_persisted");
    return E(e, c, y, r);
  }
};
function ge(e, r) {
  let n = K();
  return n.withWriteLock(async () => {
    let i = await n.read();
    if (v(i)) return H(i);
    let stored = u(i, e);
    if (stored && w(stored)) return {
      location: "item",
      stored: stored
    };
    if (!(await n.write({
      ...i,
      keys: {
        ...i?.keys,
        [e]: r
      }
    }))) {
      p("device_key_store", "item_write_failed");
      return;
    }
    let c = await n.read(),
      stored_2 = v(c) ? void 0 : u(c, e);
    if (!stored_2) p("device_key_store", "readback_mismatch");
    return stored_2 && {
      location: "item",
      stored: stored_2
    };
  });
}
async function we(e, r, n) {
  await qn().mutate(s => {
    if (s.coworkRemoteDevice?.[e]) return s;
    return {
      ...s,
      coworkRemoteDevice: {
        ...s.coworkRemoteDevice,
        [e]: r
      }
    };
  }, n);
  let stored_3 = (await qn().readAsync(n))?.coworkRemoteDevice?.[e];
  return stored_3 && {
    location: "legacy",
    stored: stored_3
  };
}
async function N(e, r, n) {
  let stored_4 = (await qn().readAsync(r))?.coworkRemoteDevice?.[e];
  if (z(r)) {
    if (stored_4 || r?.inMemory === !0) return stored_4 && {
      location: "legacy",
      stored: stored_4
    };
    let c = await K().read(),
      stored_5 = v(c) ? void 0 : u(c, e);
    return stored_5 && {
      location: "item",
      stored: stored_5
    };
  }
  let s = await K().read();
  if (v(s)) {
    if (stored_4 && w(stored_4)) {
      if (s === wl) p("device_key_store", "item_unreadable_using_legacy");
      return {
        location: "legacy",
        stored: stored_4
      };
    }
    if (s === h && n === "load") return;
    return H(s);
  }
  let stored_6 = u(s, e);
  if (stored_6) {
    if (stored_4?.privateKeyPkcs8B64 === stored_6.privateKeyPkcs8B64 && (n === "create" || !T.has(e))) await M(e, stored_6.privateKeyPkcs8B64, r);
    return {
      location: "item",
      stored: stored_6
    };
  }
  if (!stored_4) return;
  if (n === "load" && T.has(e)) return {
    location: "legacy",
    stored: stored_4
  };
  return {
    location: await ke(e, stored_4, r),
    stored: stored_4
  };
}
function H(e) {
  if (e === h) throw p("device_key_store", "no_keychain"), new x("deviceRegistry: this account has no login keychain to hold a device key", "deviceRegistry: no login keychain", "no_keychain");
  throw p("device_key_store", "item_read_failed"), new x("deviceRegistry: the device-key store could not be read", "deviceRegistry: device-key store unreadable", "key_store_unreadable");
}
async function pe(e, r) {
  if (r?.inMemory !== !0) {
    let i = await K().read();
    if (v(i)) return H(i);
    let stored_7 = u(i, e);
    if (stored_7 && w(stored_7)) return {
      location: "item",
      stored: stored_7
    };
  }
  let n = qn();
  for (let i of [{
    inaccessibleAs: "failure"
  }, void 0]) {
    let s = await (n.readAsyncStrict?.(r, i) ?? n.readAsync(r));
    if (s === wl) throw p("device_key_store", "legacy_read_failed"), new x("deviceRegistry: the credentials store could not be read for a device key", "deviceRegistry: credentials store unreadable", "key_store_unreadable");
    let stored_8 = s?.coworkRemoteDevice?.[e];
    if (stored_8 && w(stored_8)) return {
      location: "legacy",
      stored: stored_8
    };
  }
  return;
}
async function ke(e, r, n) {
  let i,
    s = K();
  try {
    i = await s.withWriteLock(async () => {
      let a = await s.read();
      if (v(a)) return S(e, a === h ? "no_keychain" : "item_read_failed");
      if (u(a, e) === void 0) {
        if (!(await s.write({
          ...a,
          keys: {
            ...a?.keys,
            [e]: r
          }
        }))) return S(e, "item_write_failed");
      }
      let c = await s.read(),
        y = v(c) ? void 0 : u(c, e);
      if (y === void 0) return S(e, "readback_mismatch");
      if (y.privateKeyPkcs8B64 !== r.privateKeyPkcs8B64 || y.rowPk !== r.rowPk) return S(e, "readback_foreign_key");
      return "item";
    });
  } catch (error) {
    return t(`[deviceKey] could not take the device-key lock to move the device key: ${d(error)}`), S(e, "lock_unavailable");
  }
  if (i === "item") await M(e, r.privateKeyPkcs8B64, n);
  return i;
}
function S(e, r) {
  return T.add(e), t(`[deviceKey] device key stays in the credentials store for now (${r})`), p("device_key_store", r), "legacy";
}
async function M(e, r, n) {
  let i = !1;
  try {
    if ((await qn().mutate(a => {
      if (a.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== r) return a;
      i = !0;
      let {
        [e]: c,
        ...coworkRemoteDevice
      } = a.coworkRemoteDevice;
      return {
        ...a,
        coworkRemoteDevice: coworkRemoteDevice
      };
    }, n)).success) {
      if (i) t("[deviceKey] moved the device key out of the credentials store into its own item"), g("device_key_store");
      return;
    }
  } catch (error) {
    t(`[deviceKey] could not clear the legacy device key: ${d(error)}`);
  }
  S(e, "legacy_delete_failed");
}
function w(e) {
  try {
    let r = ye({
      key: Buffer.from(e.privateKeyPkcs8B64, "base64"),
      format: "der",
      type: "pkcs8"
    });
    return r.asymmetricKeyType === "ec" && r.asymmetricKeyDetails?.namedCurve === "prime256v1" ? r : void 0;
  } catch {
    return;
  }
}
function E(e, {
  location: location,
  stored: stored_9
}, key, s) {
  return {
    rowPk: stored_9.rowPk,
    publicKeySpkiB64: le(key).export({
      type: "spki",
      format: "der"
    }).toString("base64"),
    sign: async a => me("sha256", a, {
      key: key,
      dsaEncoding: "ieee-p1363"
    }),
    setRowPk: rowPk_2 => j(e, {
      location: location,
      stored: stored_9
    }, c => {
      if (c.rowPk === rowPk_2) return c;
      if (rowPk_2 === void 0) {
        let {
          rowPk: rowPk,
          ...l
        } = c;
        return l;
      }
      return {
        ...c,
        rowPk: rowPk_2
      };
    }, s),
    drop: () => Y(e, {
      location: location,
      stored: stored_9
    }, s)
  };
}
async function j(e, {
  location: location_2,
  stored: stored_10
}, i, s) {
  if (location_2 === "legacy") {
    await qn().mutate(c => {
      let y = c.coworkRemoteDevice?.[e];
      if (y?.privateKeyPkcs8B64 !== stored_10.privateKeyPkcs8B64) return c;
      let l = i(y);
      if (l === y) return c;
      let {
        [e]: D,
        ...P
      } = c.coworkRemoteDevice ?? {};
      return {
        ...c,
        coworkRemoteDevice: l === void 0 ? P : {
          ...P,
          [e]: l
        }
      };
    }, s);
    return;
  }
  let a = K();
  await a.withWriteLock(async () => {
    let c = await a.read();
    if (v(c)) throw new x(`deviceRegistry: the ${a.name} device-key store could not be read`, "deviceRegistry: device-key store unreadable");
    let y = u(c, e);
    if (c === null || y?.privateKeyPkcs8B64 !== stored_10.privateKeyPkcs8B64) return;
    let l = i(y);
    if (l === y) return;
    let {
      [e]: D,
      ...P
    } = c.keys;
    if (!(await a.write({
      ...c,
      keys: l === void 0 ? P : {
        ...P,
        [e]: l
      }
    }))) throw new x(`deviceRegistry: the ${a.name} device-key store refused the write`, "deviceRegistry: device-key store write refused");
  });
}
function Y(e, r, n) {
  return j(e, r, () => {
    return;
  }, n);
}
var De = "/api/organizations/:orgUUID/cowork/remote_devices",
  Ke = "cowork_remote_device_limit_reached",
  he = "account_session_invalid",
  Se = "cowork_remote_device_registration_revoked";
async function Jas(e, r) {
  return (await T3t(e, r))?.rowPk;
}
async function Mto(e, r) {
  let key_2 = await R().load(e, r),
    rowPk_3 = Vt(key_2?.rowPk)?.toLowerCase();
  return key_2 && rowPk_3 ? {
    rowPk: rowPk_3,
    key: key_2
  } : void 0;
}
async function T3t(accountUuid, r, n) {
  if (n?.accountUuid === accountUuid) return n;
  let i = await Mto(accountUuid, r);
  return i && {
    accountUuid: accountUuid,
    ...i
  };
}
function Pe() {
  return "win32";
}
function Re(e) {
  return qs(e.trim(), 255) || qs(xst().trim(), 255);
}
async function C3t(e, r, n, {
  relearn = !1
} = {}) {
  try {
    if (!Abe()) throw new s4e("client egress policy");
    return await Ee(e, r, n, relearn);
  } catch (error) {
    throw m("device_registry_register", error instanceof x && error.errorClass || "unexpected_error"), error;
  }
}
async function Ee(e, r, credentials, i) {
  let key_3 = await R().loadOrCreate(e, credentials);
  if (key_3.rowPk && !i) return g("device_registry_register"), {
    deviceUUID: key_3.rowPk,
    key: key_3
  };
  let a = await Gt.post(De, {
    display_name: Re(r),
    platform: Pe(),
    public_key: key_3.publicKeySpkiB64
  }, {
    auth: "teleport-org",
    headers: {
      "anthropic-beta": vp
    },
    timeout: 1e4,
    validateStatus: () => !0,
    credentials: credentials
  }).catch(D => {
    throw new x(`deviceRegistry: register request failed (${d(D)})`, "deviceRegistry: register request failed", "request_failed");
  });
  if (!a.ok) throw new x(`deviceRegistry: register not sent (${a.reason})`, "deviceRegistry: register not sent", "not_sent");
  if (t(`[deviceRegistry] register status=${a.status} request_id=${String(a.response.headers?.["request-id"] ?? "")}`), a.status === 400 && a.data?.error?.details?.error_code === Ke) throw new Ast();
  if (a.status === 403 && a.data?.error?.details?.error_code !== he || a.status === 404) throw new s4e(`HTTP ${a.status}`);
  let c = a.data?.error?.details?.error_code;
  if (c === Se || a.status === 409 && c === void 0) throw new vFe(key_3.publicKeySpkiB64);
  let y = Vt(a.data?.id);
  if (a.status !== 201 || y === null) throw new x(`deviceRegistry: register ${a.status}: ${ne(String(_(a.data) ?? ""), 200)}`, "deviceRegistry: register HTTP error", "http_error");
  if (a.data?.revoked_at !== null && a.data?.revoked_at !== void 0) throw new vFe(key_3.publicKeySpkiB64);
  let deviceUUID = y.toLowerCase();
  return await key_3.setRowPk(deviceUUID).catch(D => {
    t(`[deviceRegistry] registered device row=${deviceUUID} but could not cache it: ${d(D)}`);
  }), t(`[deviceRegistry] registered device row=${deviceUUID}`), g("device_registry_register"), {
    deviceUUID: deviceUUID,
    key: key_3
  };
}
class Ast extends x {
  constructor() {
    super("deviceRegistry: account device limit reached", "deviceRegistry: account device limit reached", "limit_reached");
  }
}
class s4e extends x {
  constructor(e) {
    super(`deviceRegistry: device registration unavailable for this account or organization (${e})`, "deviceRegistry: device registration unavailable for this account or organization", "registration_unavailable");
  }
}
class vFe extends x {
  refusedPublicKey;
  constructor(e) {
    super("deviceRegistry: this machine's device registration was removed from the account", "deviceRegistry: device registration revoked", "registration_revoked");
    this.refusedPublicKey = e;
  }
}
async function Qas(e, r, n, i) {
  return await W(e, n, i, 2), C3t(e, r, i, {
    relearn: !0
  });
}
async function W(e, r, n, i) {
  let s = await R().load(e, n);
  if (s?.publicKeySpkiB64 !== r) return;
  if (i === 0) throw V("it is still stored after being dropped");
  return await s.drop().catch(a => {
    throw V(d(a));
  }), W(e, r, n, i - 1);
}
function V(e) {
  return new x(`deviceRegistry: the removed device's key could not be retired (${e})`, "deviceRegistry: device key not retired", "key_not_retired");
}
async function LOn(e, r) {
  await (await R().load(e, r))?.setRowPk(void 0);
}
function xst() {
  return `Claude Code on ${_e()} \xB7 ${_De("win32")}`;
}
export { Jas, Mto, T3t, C3t, Ast, s4e, vFe, Qas, LOn, xst };