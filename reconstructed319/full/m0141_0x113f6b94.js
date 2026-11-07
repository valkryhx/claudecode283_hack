// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  vj
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t,
  _,
  ee,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Zd
} from "B:/~BUN/root/chunk-3vtkd50k.js";
import {
  Zet,
  FU,
  gpe,
  NV,
  NWn,
  F4,
  HU
} from "B:/~BUN/root/chunk-hacd8gcc.js";
import {
  pS
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  eK
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  IWn,
  _0r,
  vCo,
  Xz,
  MWn,
  ECo,
  Ran
} from "B:/~BUN/root/chunk-f7w7sw0m.js";
import {
  b0r
} from "B:/~BUN/root/chunk-v8nkpg4j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readFileSync as Y
} from "fs";
import {
  homedir as me
} from "os";
import {
  join as V
} from "path";
var Bs = Symbol("secureStorage.READ_FAILED");
import {
  AsyncLocalStorage as Q
} from "async_hooks";
import {
  join as te
} from "path";
var D = new Q,
  M = Promise.resolve();
async function cBt(e) {
  if (D.getStore()) return e();
  let r = M,
    a;
  M = new Promise((n) => {
    a = n
  });
  try {
    if (await r, q()) return await D.run(!0, e);
    let n = FU();
    await ie().mkdir(n);
    let s = await Zd(te(n, ".storage-write"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1000
      },
      stale: 15000,
      onCompromised: (o) => t(`[secureStorage] write lock compromised: ${d(o)}`, {
        level: "warn"
      })
    });
    try {
      return await D.run(!0, e)
    } finally {
      await s().catch((o) => t(`[secureStorage] write lock release failed: ${d(o)}`, {
        level: "warn"
      }))
    }
  } finally {
    a()
  }
}
async function m7i(e) {
  return D.run(!0, e)
}

function p(e, r, a) {
  return cBt(async () => {
    e.invalidateCache?.();
    let n = await (e.readAsyncStrict?.(a, {
      inaccessibleAs: "failureIfTransient"
    }) ?? e.readAsync(a));
    if (n === Bs) return c("secure_storage_credentials_write", "read_failed_skip_write"), {
      success: !1,
      transient: !0
    };
    let s = n ?? {},
      o = r(s);
    return o === s ? {
      success: !0
    } : await e.update(o, a)
  })
}
var N = Symbol("secureStorage.fallbackLegs");

function L(e, r) {
  let a = r.osGuarded === !0 ? (s) => s : NLs,
    n = {
      name: `${e.name}-with-${r.name}-fallback`,
      [N]: [e, r],
      osGuarded: e.osGuarded === !0,
      read(s) {
        let o = e.read(s);
        if (o !== null && o !== void 0) return o;
        return a(r.read(s)) || {}
      },
      async readAsync(s) {
        let o = await e.readAsync();
        if (o !== null && o !== void 0) return o;
        return a(await r.readAsync(s)) || {}
      },
      async readAsyncStrict(s, o) {
        let i = await (e.readAsyncStrict?.(void 0, o) ?? e.readAsync());
        if (i === Bs) return Bs;
        if (i !== null || o?.inaccessibleAs === "failure") return i;
        let u = await (r.readAsyncStrict?.(s, o) ?? r.readAsync(s));
        return u === Bs ? u : a(u) || {}
      },
      invalidateCache() {
        e.invalidateCache?.(), r.invalidateCache?.()
      },
      mutate(s, o) {
        return p(n, s, o)
      },
      async update(s, o) {
        let i = await e.readAsync(),
          u = await e.update(s);
        if (u.success) {
          if (i === null) await r.delete(o);
          return g("secure_storage_credentials_write"), u
        }
        if (u.transient) return c("secure_storage_credentials_write", u.keychainLocked ? "keychain_locked_skip_fallback" : "primary_transient_skip_fallback"), u;
        let S = await r.update(s, o);
        if (S.success) {
          if (i !== null && !await e.delete()) return m("secure_storage_credentials_write", "plaintext_fallback_primary_not_cleared", u.exitCode === void 0 ? void 0 : {
            primary_write_exit_code: u.exitCode
          }), {
            success: !1,
            transient: !0,
            fallbackWritten: !0
          };
          return c("secure_storage_credentials_write", "plaintext_fallback_used"), {
            success: !0,
            warning: S.warning
          }
        }
        return m("secure_storage_credentials_write", "primary_and_fallback_failed"), {
          success: !1
        }
      },
      async delete(s) {
        let o = await r.readAsync(s) !== null,
          [i, u] = await Promise.all([e.delete(), r.delete(s)]);
        return i || o && u
      }
    };
  return n
}

function LLs(e) {
  return e[N]
}

function NLs(e) {
  let r = e?.slackTag;
  if (typeof r !== "object" || r === null || !("lastBinding" in r)) return e;
  let {
    lastBinding: a,
    ...n
  } = r;
  return {
    ...e,
    slackTag: n
  }
}
var B = 2000;
var re = 44;
async function h7i() {
  try {
    let {
      code: e
    } = await ut("security", ["find-generic-password", "-a", NV(), "-w", "-s", gpe()], {
      useCwd: !1,
      preserveOutputOnError: !1,
      timeout: B
    });
    return e === re
  } catch {
    return !1
  }
}
var y;

function FLs() {
  if (y !== void 0) return y;
  return y = Promise.resolve(!1), y
}
import {
  chmod as ae
} from "fs/promises";
import {
  join as ne
} from "path";

function C() {
  let e = FU(),
    r = ".credentials.json";
  return {
    storageDir: e,
    storagePath: ne(e, ".credentials.json")
  }
}

function A() {
  return q() ? null : C().storagePath
}
var wCo = "Warning: Storing credentials in plaintext.";

function oe(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return null;
  return Bs
}

function se(e, r) {
  return e === "ENOENT" ? null : Bs
}
var ce = {
    async read() {
      let {
        storagePath: e
      } = C();
      try {
        let r = await ie().readFile(e, {
          encoding: "utf8"
        });
        return ee(r)
      } catch {
        return null
      }
    },
    async readStrict(e) {
      let {
        storagePath: r
      } = C(), a;
      try {
        a = await ie().readFile(r, {
          encoding: "utf8"
        })
      } catch (n) {
        return (e ? se : oe)(k(n), "win32")
      }
      try {
        return ee(a)
      } catch {
        if (e) return Bs;
        return null
      }
    },
    async write(e) {
      try {
        let {
          storageDir: r,
          storagePath: a
        } = C();
        return await ie().mkdir(r), await eK(a, _(e), {
          mode: 384,
          flush: !0,
          flushForgivesEbadf: !0
        }), await ae(a, 384), {
          success: !0,
          warning: wCo
        }
      } catch (r) {
        return await b0r(r), {
          success: !1
        }
      } finally {
        if (X()) bKe()
      }
    },
    async remove() {
      let {
        storagePath: e
      } = C();
      try {
        return await ie().unlink(e), !0
      } catch (r) {
        if (k(r) === "ENOENT") return !0;
        return !1
      } finally {
        if (X()) bKe()
      }
    }
  },
  ue = {
    read: async () => null,
    readStrict: async () => null,
    write: async () => ({
      success: !1
    }),
    remove: async () => !0
  };

function le(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return Bs;
    default: {
      let r = e;
      return Bs
    }
  }
}

function de(e) {
  return {
    async read() {
      let r = A(),
        a = w(),
        n = a.generation,
        s = await E(e.readCredentials(), a);
      return U(a, s, r, n), s.state === "present" ? s.data : null
    },
    async readStrict(r) {
      let a = A(),
        n = w(),
        s = n.generation,
        o = await E(r ? e.readCredentials() : e.readCredentialsStrict(), n);
      if (U(n, o, a, s), r) return o.state === "present" ? o.data : o.state === "absent" ? null : Bs;
      return le(o)
    },
    async write(r) {
      let a = A(),
        n = w(),
        s = n.generation,
        o = await E(e.writeCredentials(r), n);
      if (o.state === "written" && s === n.generation) P(n, a, _(r));
      else h(n);
      return o.state === "written" ? {
        success: !0,
        warning: wCo
      } : {
        success: !1
      }
    },
    async remove() {
      let r = A(),
        a = w(),
        n = a.generation,
        s = await E(e.deleteCredentials(), a);
      if (s.state === "deleted" && n === a.generation) P(a, r, null);
      else h(a);
      return s.state === "deleted"
    }
  }
}
async function E(e, r) {
  try {
    return await e
  } catch (a) {
    throw h(r), a
  }
}
class K {
  copy = void 0;
  generation = 0
}
var ge = new W(() => new K);

function w() {
  return ge.of(H().host)
}

function P(e, r, a) {
  e.copy = {
    storagePath: r,
    text: a
  }, e.generation++
}

function U(e, r, a, n) {
  if (n !== e.generation) {
    h(e);
    return
  }
  switch (r.state) {
    case "present":
      P(e, a, _(r.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      P(e, a, null);
      return;
    case "read-failed":
      h(e);
      return;
    default: {
      let s = r;
      h(e)
    }
  }
}

function h(e) {
  e.copy = void 0, e.generation++
}

function bKe() {
  h(w())
}

function b(e) {
  return X() && e !== void 0 ? de(e) : q() ? ue : ce
}
var R = {
  name: "plaintext",
  osGuarded: !1,
  read(e) {
    let r = A();
    try {
      let a = X() && e?.fromStoreCopy === !0 ? w().copy : void 0;
      if (a !== void 0 && a.storagePath === r) {
        if (a.text === null) return null;
        return JSON.parse(a.text)
      }
      if (r === null) return null;
      let n = ie().readFileSync(r, {
        encoding: "utf8"
      });
      return ee(n)
    } catch {
      return null
    }
  },
  invalidateCache() {
    bKe()
  },
  readAsync(e) {
    return b(e).read()
  },
  readAsyncStrict(e, r) {
    return b(e).readStrict(r?.unreadableFileAs === "failure")
  },
  mutate(e, r) {
    return p(R, e, r)
  },
  update(e, r) {
    return b(r).write(e)
  },
  delete(e) {
    return b(e).remove()
  }
};

function I() {
  let e = globalThis.Bun?.secrets;
  if (e && typeof e.get === "function" && typeof e.set === "function" && typeof e.delete === "function") return e;
  return null
}

function T() {
  return {
    service: gpe(Zet),
    name: NV()
  }
}
var j = 2000;

function l(e, r) {
  let a;
  return Promise.race([e.finally(() => a !== void 0 && clearTimeout(a)), new Promise((n, s) => {
    a = setTimeout((o, i) => o(Error(`${i} timed out after ${j}ms`)), j, s, r).unref()
  })])
}
class x extends Error {}
async function O(e, r) {
  let a = await l(e.get(Xz(r, "m")), "Bun.secrets.get");
  if (!a) return null;
  try {
    return vCo(JSON.parse(a))
  } catch {
    return null
  }
}
async function G(e, r) {
  let a = await O(e, r);
  if (!a) return l(e.get(r), "Bun.secrets.get");
  let n = await Promise.all(Array.from({
      length: a.n
    }, (o, i) => l(e.get(Xz(r, i)), "Bun.secrets.get"))),
    s = n.join("");
  if (s.length !== a.l || n.some((o) => o == null)) throw Error(`chunked read inconsistent: got ${s.length}B of ${a.l}B across ${a.n} chunks`);
  return Buffer.from(s, "base64").toString("utf8")
}
async function Se(e, r, a) {
  let n = await O(e, r),
    s = Buffer.byteLength(a, "utf8");
  if (s <= IWn) {
    if (await l(e.set({
        ...r,
        value: a
      }), "Bun.secrets.set"), n) await l(e.set({
      ...Xz(r, "p"),
      value: String(n.n)
    }), "Bun.secrets.set"), await l(e.delete(Xz(r, "m")), "Bun.secrets.delete"), await Promise.allSettled(Array.from({
      length: n.n
    }, (S, f) => l(e.delete(Xz(r, f)), "Bun.secrets.delete"))), await l(e.delete(Xz(r, "p")), "Bun.secrets.delete").catch(() => {});
    return
  }
  let o = Buffer.from(a, "utf8").toString("base64"),
    i = Math.ceil(o.length / IWn);
  if (i > _0r) throw new x(`SecureStorageData too large for Credential Manager (${s}B; max ~${Math.floor(_0r*IWn*3/4)}B)`);
  await l(e.set({
    ...Xz(r, "p"),
    value: String(Math.max(n?.n ?? 0, i))
  }), "Bun.secrets.set"), await Promise.all(Array.from({
    length: i
  }, (S, f) => l(e.set({
    ...Xz(r, f),
    value: o.slice(f * IWn, (f + 1) * IWn)
  }), "Bun.secrets.set"))), await l(e.set({
    ...Xz(r, "m"),
    value: JSON.stringify({
      n: i,
      l: o.length
    })
  }), "Bun.secrets.set");
  let u = [l(e.delete(r), "Bun.secrets.delete")];
  for (let S = i; S < (n?.n ?? 0); S++) u.push(l(e.delete(Xz(r, S)), "Bun.secrets.delete"));
  await Promise.allSettled(u), await l(e.delete(Xz(r, "p")), "Bun.secrets.delete").catch(() => {})
}
async function fe(e, r) {
  let a = await O(e, r),
    n = [l(e.delete(r), "Bun.secrets.delete")];
  if (a) {
    for (let S = 0; S < a.n; S++) n.push(l(e.delete(Xz(r, S)), "Bun.secrets.delete"));
    n.push(l(e.delete(Xz(r, "m")), "Bun.secrets.delete"))
  }
  await Promise.all(n);
  let s = await l(e.get(Xz(r, "p")), "Bun.secrets.get").catch(() => null),
    o = s ? Math.min(Math.max(parseInt(s, 10) || 0, 0), _0r) : 0,
    i = a?.n ?? 0,
    u = Math.max(i, o);
  if (u === 0) try {
    while (u < _0r && await l(e.get(Xz(r, u)), "Bun.secrets.get") !== null) u++
  } catch {}
  await Promise.allSettled([l(e.delete(Xz(r, "m")), "Bun.secrets.delete"), l(e.delete(Xz(r, "p")), "Bun.secrets.delete"), ...Array.from({
    length: u - i
  }, (S, f) => l(e.delete(Xz(r, i + f)), "Bun.secrets.delete"))])
}
var v = {
  name: "windows-credman",
  osGuarded: !0,
  read() {
    let e = F4();
    if (!MWn()) return null;
    return e.cache.cachedAt !== 0 ? e.cache.data : ECo()
  },
  async readAsync() {
    let e = F4();
    if (!MWn()) return null;
    let r = e.cache;
    if (Date.now() - r.cachedAt < NWn) return r.data;
    if (e.readInFlight) return e.readInFlight;
    let a = I();
    if (!a) return null;
    let n = e.generation,
      s = G(a, T()).then((o) => {
        let i = o ? ee(o) : null;
        if (n === e.generation) e.cache = {
          data: i,
          cachedAt: Date.now()
        }, Ran(i), e.readInFlight = null;
        return i
      }).catch((o) => {
        if (t(`[windows-credman] load failed: ${d(o)}`, {
            level: "warn"
          }), n === e.generation) {
          if (r.cachedAt !== 0) e.cache = {
            data: r.data,
            cachedAt: Date.now()
          };
          e.readInFlight = null
        }
        return r.cachedAt !== 0 ? r.data : ECo()
      });
    return e.readInFlight = s, s
  },
  async readAsyncStrict(e, r) {
    let a = F4(),
      n = MWn() ? I() : null;
    if (!n) return r?.inaccessibleAs === "failure" ? Bs : null;
    let s = a.generation,
      o;
    try {
      o = await G(n, T())
    } catch (u) {
      return t(`[windows-credman] strict load failed: ${d(u)}`, {
        level: "warn"
      }), Bs
    }
    let i;
    try {
      i = o ? ee(o) : null
    } catch {
      if (r?.unparsableEntryAs === "failure") return Bs;
      i = null
    }
    if (s === a.generation) {
      let u = i ?? a.cache.data;
      if (a.cache = {
          data: u,
          cachedAt: Date.now()
        }, u !== null) Ran(u)
    }
    return i
  },
  invalidateCache() {
    HU()
  },
  mutate(e) {
    return p(v, e)
  },
  async update(e) {
    let r = F4();
    if (!MWn()) return {
      success: !1
    };
    let a = I();
    if (!a) return {
      success: !1
    };
    HU();
    try {
      return await Se(a, T(), _(e)), r.cache = {
        data: e,
        cachedAt: Date.now()
      }, Ran(e), r.generation++, r.readInFlight = null, {
        success: !0
      }
    } catch (n) {
      if (t(`[windows-credman] store failed: ${d(n)}`, {
          level: "warn"
        }), n instanceof x) c("secure_storage_credentials_write", "credman_oversize");
      return {
        success: !1
      }
    }
  },
  async delete() {
    let e = F4();
    HU(), Ran(null);
    let r = I();
    if (!r) return !1;
    try {
      return await fe(r, T()), e.cache = {
        data: null,
        cachedAt: Date.now()
      }, Ran(null), e.generation++, e.readInFlight = null, !0
    } catch (a) {
      return t(`[windows-credman] remove failed: ${d(a)}`, {
        level: "warn"
      }), !1
    }
  }
};
class z {
  memo;
  handedIn;
  prime(e, r) {
    if (this.memo !== void 0) return;
    this.handedIn = {
      enabled: e,
      ...r()
    }
  }
  resolve(e, r) {
    if (this.memo !== void 0) return this.memo;
    try {
      let a = e(),
        n = this.handedIn;
      if (n !== void 0 && n.legacyPath === a.legacyPath && n.configPath === a.configPath) this.memo = n.enabled;
      else this.memo = r(a)
    } catch {
      this.memo = !1
    }
    return this.memo
  }
  reset() {
    this.memo = void 0, this.handedIn = void 0
  }
}
var pe = new W(() => new z);

function J() {
  return pe.of(H().host)
}

function Z() {
  return {
    legacyPath: V(Ue(), ".config.json"),
    configPath: V(process.env.CLAUDE_CONFIG_DIR || me(), `.claude${vj()}.json`)
  }
}

function OWn() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return !0;
  return J().resolve(Z, he)
}

function he({
  legacyPath: e,
  configPath: r
}) {
  let a = "";
  try {
    a = Y(e, "utf8")
  } catch (s) {
    let o = k(s);
    if (o !== "ENOENT" && o !== "ENOTDIR" && o !== "EISDIR" && o !== "ELOOP") throw s
  }
  if (a === "") a = Y(r, "utf8");
  return JSON.parse(a).cachedGrowthBookFeatures?.tengu_windows_credman === !0
}

function HLs(e) {
  J().prime(e, Z)
}
var F;

function TAe() {
  return OWn() ? "credential-manager" : "file"
}

function Kn() {
  if (F) return F;
  if (OWn()) return L(v, R);
  return R
}

function kCo() {
  if (F) return [];
  return !OWn() ? [v] : []
}
export {
  Bs,
  cBt,
  m7i,
  LLs,
  NLs,
  h7i,
  FLs,
  wCo,
  bKe,
  OWn,
  HLs,
  TAe,
  Kn,
  kCo
};
