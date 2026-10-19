// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, de, Dw } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Mt, d, k, whn, ez } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ay } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { F5 } from "B:/~BUN/root/chunk-jpdys232.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { dl } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { nze, jx, ine, xB, mun, DJ, GD } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { by } from "B:/~BUN/root/chunk-j8w5f307.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { cun, M5n, THr, o$, uun, CHr, cBt } from "B:/~BUN/root/chunk-vr6ev6st.js";
import { readFileSync as q } from "fs";
import { homedir as Ae } from "os";
import { join as Z } from "path";
var wl = Symbol("secureStorage.READ_FAILED");
import { AsyncLocalStorage as oe } from "async_hooks";
import { join as ie } from "path";
var R = new oe(),
  U = Promise.resolve();
async function LFo(e) {
  if (R.getStore()) return e();
  let r = U,
    n;
  U = new Promise(s => {
    n = s;
  });
  try {
    if (await r, de()) return await R.run(!0, e);
    let s = jx();
    await se().mkdir(s);
    let a = await dl(ie(s, ".storage-write"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1000
      },
      stale: 15000,
      onCompromised: o => t(`[secureStorage] write lock compromised: ${d(o)}`, {
        level: "warn"
      })
    });
    try {
      return await R.run(!0, e);
    } finally {
      await a().catch(o => t(`[secureStorage] write lock release failed: ${d(o)}`, {
        level: "warn"
      }));
    }
  } finally {
    n();
  }
}
async function pVs(e) {
  return R.run(!0, e);
}
function S(e, r, n) {
  return LFo(async () => {
    e.invalidateCache?.();
    let s = await (e.readAsyncStrict?.(n, {
      inaccessibleAs: "failureIfTransient"
    }) ?? e.readAsync(n));
    if (s === wl) return p("secure_storage_credentials_write", "read_failed_skip_write"), {
      success: !1,
      transient: !0
    };
    let a = s ?? {},
      o = r(a);
    return o === a ? {
      success: !0
    } : await e.update(o, n);
  });
}
var H = Symbol("secureStorage.fallbackLegs");
function B(e, r) {
  let n = r.osGuarded === !0 ? a => a : FFo,
    s = {
      name: `${e.name}-with-${r.name}-fallback`,
      [H]: [e, r],
      osGuarded: e.osGuarded === !0,
      read(a) {
        let o = e.read(a);
        if (o !== null && o !== void 0) return o;
        return n(r.read(a)) || {};
      },
      async readAsync(a) {
        let o = await e.readAsync();
        if (o !== null && o !== void 0) return o;
        return n(await r.readAsync(a)) || {};
      },
      async readAsyncStrict(a, o) {
        let i = await (e.readAsyncStrict?.(void 0, o) ?? e.readAsync());
        if (i === wl) return wl;
        if (i !== null || o?.inaccessibleAs === "failure") return i;
        let c = await (r.readAsyncStrict?.(a, o) ?? r.readAsync(a));
        return c === wl ? c : n(c) || {};
      },
      invalidateCache() {
        e.invalidateCache?.(), r.invalidateCache?.();
      },
      mutate(a, o) {
        return S(s, a, o);
      },
      async update(a, o) {
        let i = await e.readAsync(),
          c = await e.update(a);
        if (c.success) {
          if (i === null) await r.delete(o);
          return g("secure_storage_credentials_write"), c;
        }
        if (c.transient) return p("secure_storage_credentials_write", c.keychainLocked ? "keychain_locked_skip_fallback" : "primary_transient_skip_fallback"), c;
        let l = await r.update(a, o);
        if (l.success) {
          if (i !== null && !(await e.delete())) return m("secure_storage_credentials_write", "plaintext_fallback_primary_not_cleared", c.exitCode === void 0 ? void 0 : {
            primary_write_exit_code: c.exitCode
          }), {
            success: !1,
            transient: !0
          };
          return p("secure_storage_credentials_write", "plaintext_fallback_used"), {
            success: !0,
            warning: l.warning
          };
        }
        return m("secure_storage_credentials_write", "primary_and_fallback_failed"), {
          success: !1
        };
      },
      async delete(a) {
        let o = (await r.readAsync(a)) !== null,
          [i, c] = await Promise.all([e.delete(), r.delete(a)]);
        return i || o && c;
      }
    };
  return s;
}
function NFo(e) {
  return e[H];
}
function FFo(e) {
  let r = e?.slackTag;
  if (typeof r !== "object" || r === null || !("lastBinding" in r)) return e;
  let {
    lastBinding: lastBinding,
    ...slackTag
  } = r;
  return {
    ...e,
    slackTag: slackTag
  };
}
var timeout = 2000;
var ce = 44;
async function fVs() {
  try {
    let {
      code: code
    } = await lt("security", ["find-generic-password", "-a", xB(), "-w", "-s", ine()], {
      useCwd: !1,
      preserveOutputOnError: !1,
      timeout: timeout
    });
    return code === ce;
  } catch {
    return !1;
  }
}
var h;
function HFo() {
  if (h !== void 0) return h;
  return h = Promise.resolve(!1), h;
}
import { chmod as ue } from "fs/promises";
import { join as le } from "path";
function A() {
  let storageDir = jx(),
    r = ".credentials.json";
  return {
    storageDir: storageDir,
    storagePath: le(storageDir, ".credentials.json")
  };
}
function C() {
  return de() ? null : A().storagePath;
}
var warning = "Warning: Storing credentials in plaintext.";
function fe(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return null;
  return wl;
}
function Se(e, r) {
  return e === "ENOENT" ? null : wl;
}
var ge = {
    async read() {
      let {
        storagePath: storagePath
      } = A();
      try {
        let r = await se().readFile(storagePath, {
          encoding: "utf8"
        });
        return J(r);
      } catch {
        return null;
      }
    },
    async readStrict(e) {
      let {
          storagePath: storagePath_2
        } = A(),
        n;
      try {
        n = await se().readFile(storagePath_2, {
          encoding: "utf8"
        });
      } catch (error) {
        return (e ? Se : fe)(k(error), "win32");
      }
      try {
        return J(n);
      } catch {
        if (e) return wl;
        return null;
      }
    },
    async write(e) {
      try {
        let {
          storageDir: storageDir_2,
          storagePath: storagePath_3
        } = A();
        return await se().mkdir(storageDir_2), await An(storagePath_3, _(e), 384), await ue(storagePath_3, 384), {
          success: !0,
          warning: warning
        };
      } catch {
        return {
          success: !1
        };
      } finally {
        if (W()) XMe();
      }
    },
    async remove() {
      let {
        storagePath: storagePath_4
      } = A();
      try {
        return await se().unlink(storagePath_4), !0;
      } catch (error) {
        if (k(error) === "ENOENT") return !0;
        return !1;
      } finally {
        if (W()) XMe();
      }
    }
  },
  me = {
    read: async () => null,
    readStrict: async () => null,
    write: async () => ({
      success: !1
    }),
    remove: async () => !0
  };
function pe(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return wl;
    default:
      {
        let r = e;
        return wl;
      }
  }
}
function Ee(e) {
  return {
    async read() {
      let r = C(),
        n = y(),
        generation = n.generation,
        a = await w(e.readCredentials(), n);
      return K(n, a, r, generation), a.state === "present" ? a.data : null;
    },
    async readStrict(r) {
      let n = C(),
        s = y(),
        generation_2 = s.generation,
        o = await w(r ? e.readCredentials() : e.readCredentialsStrict(), s);
      if (K(s, o, n, generation_2), r) return o.state === "present" ? o.data : o.state === "absent" ? null : wl;
      return pe(o);
    },
    async write(r) {
      let n = C(),
        s = y(),
        generation_3 = s.generation,
        o = await w(e.writeCredentials(r), s);
      if (o.state === "written" && generation_3 === s.generation) I(s, n, _(r));else E(s);
      return o.state === "written" ? {
        success: !0,
        warning: warning
      } : {
        success: !1
      };
    },
    async remove() {
      let r = C(),
        n = y(),
        generation_4 = n.generation,
        a = await w(e.deleteCredentials(), n);
      if (a.state === "deleted" && generation_4 === n.generation) I(n, r, null);else E(n);
      return a.state === "deleted";
    }
  };
}
async function w(e, r) {
  try {
    return await e;
  } catch (error) {
    throw E(r), error;
  }
}
class Y {
  copy = void 0;
  generation = 0;
}
var he = new z(() => new Y());
function y() {
  return he.of(j().host);
}
function I(e, storagePath_5, text) {
  e.copy = {
    storagePath: storagePath_5,
    text: text
  }, e.generation++;
}
function K(e, r, n, s) {
  if (s !== e.generation) {
    E(e);
    return;
  }
  switch (r.state) {
    case "present":
      I(e, n, _(r.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      I(e, n, null);
      return;
    case "read-failed":
      E(e);
      return;
    default:
      {
        let a = r;
        E(e);
      }
  }
}
function E(e) {
  e.copy = void 0, e.generation++;
}
function XMe() {
  E(y());
}
function T(e) {
  return W() && e !== void 0 ? Ee(e) : de() ? me : ge;
}
var D = {
  name: "plaintext",
  osGuarded: !1,
  read(e) {
    let r = C();
    try {
      let n = W() && e?.fromStoreCopy === !0 ? y().copy : void 0;
      if (n !== void 0 && n.storagePath === r) {
        if (n.text === null) return null;
        return JSON.parse(n.text);
      }
      if (r === null) return null;
      let s = se().readFileSync(r, {
        encoding: "utf8"
      });
      return J(s);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    XMe();
  },
  readAsync(e) {
    return T(e).read();
  },
  readAsyncStrict(e, r) {
    return T(e).readStrict(r?.unreadableFileAs === "failure");
  },
  mutate(e, r) {
    return S(D, e, r);
  },
  update(e, r) {
    return T(r).write(e);
  },
  delete(e) {
    return T(e).remove();
  }
};
function O() {
  let e = globalThis.Bun?.secrets;
  if (e && typeof e.get === "function" && typeof e.set === "function" && typeof e.delete === "function") return e;
  return null;
}
function P() {
  return {
    service: ine(nze),
    name: xB()
  };
}
var V = 2000;
function u(e, r) {
  let n;
  return Promise.race([e.finally(() => n !== void 0 && clearTimeout(n)), new Promise((s, a) => {
    n = setTimeout((o, i) => o(Error(`${i} timed out after ${V}ms`)), V, a, r).unref();
  })]);
}
class x extends Error {}
async function L(e, r) {
  let n = await u(e.get(o$(r, "m")), "Bun.secrets.get");
  if (!n) return null;
  try {
    return THr(JSON.parse(n));
  } catch {
    return null;
  }
}
async function X(e, r) {
  let n = await L(e, r);
  if (!n) return u(e.get(r), "Bun.secrets.get");
  let s = await Promise.all(Array.from({
      length: n.n
    }, (o, i) => u(e.get(o$(r, i)), "Bun.secrets.get"))),
    a = s.join("");
  if (a.length !== n.l || s.some(item => item == null)) throw Error(`chunked read inconsistent: got ${a.length}B of ${n.l}B across ${n.n} chunks`);
  return Buffer.from(a, "base64").toString("utf8");
}
async function _e(e, r, value) {
  let s = await L(e, r),
    a = Buffer.byteLength(value, "utf8");
  if (a <= cun) {
    if (await u(e.set({
      ...r,
      value: value
    }), "Bun.secrets.set"), s) await u(e.set({
      ...o$(r, "p"),
      value: String(s.n)
    }), "Bun.secrets.set"), await u(e.delete(o$(r, "m")), "Bun.secrets.delete"), await Promise.allSettled(Array.from({
      length: s.n
    }, (l, f) => u(e.delete(o$(r, f)), "Bun.secrets.delete"))), await u(e.delete(o$(r, "p")), "Bun.secrets.delete").catch(() => {});
    return;
  }
  let o = Buffer.from(value, "utf8").toString("base64"),
    i = Math.ceil(o.length / cun);
  if (i > M5n) throw new x(`SecureStorageData too large for Credential Manager (${a}B; max ~${Math.floor(M5n * cun * 3 / 4)}B)`);
  await u(e.set({
    ...o$(r, "p"),
    value: String(Math.max(s?.n ?? 0, i))
  }), "Bun.secrets.set"), await Promise.all(Array.from({
    length: i
  }, (l, f) => u(e.set({
    ...o$(r, f),
    value: o.slice(f * cun, (f + 1) * cun)
  }), "Bun.secrets.set"))), await u(e.set({
    ...o$(r, "m"),
    value: JSON.stringify({
      n: i,
      l: o.length
    })
  }), "Bun.secrets.set");
  let c = [u(e.delete(r), "Bun.secrets.delete")];
  for (let l = i; l < (s?.n ?? 0); l++) c.push(u(e.delete(o$(r, l)), "Bun.secrets.delete"));
  await Promise.allSettled(c), await u(e.delete(o$(r, "p")), "Bun.secrets.delete").catch(() => {});
}
async function ye(e, r) {
  let n = await L(e, r),
    s = [u(e.delete(r), "Bun.secrets.delete")];
  if (n) {
    for (let l = 0; l < n.n; l++) s.push(u(e.delete(o$(r, l)), "Bun.secrets.delete"));
    s.push(u(e.delete(o$(r, "m")), "Bun.secrets.delete"));
  }
  await Promise.all(s);
  let a = await u(e.get(o$(r, "p")), "Bun.secrets.get").catch(() => null),
    o = a ? Math.min(Math.max(parseInt(a, 10) || 0, 0), M5n) : 0,
    i = n?.n ?? 0,
    c = Math.max(i, o);
  if (c === 0) try {
    while (c < M5n && (await u(e.get(o$(r, c)), "Bun.secrets.get")) !== null) c++;
  } catch {}
  await Promise.allSettled([u(e.delete(o$(r, "m")), "Bun.secrets.delete"), u(e.delete(o$(r, "p")), "Bun.secrets.delete"), ...Array.from({
    length: c - i
  }, (l, f) => u(e.delete(o$(r, i + f)), "Bun.secrets.delete"))]);
}
var v = {
  name: "windows-credman",
  osGuarded: !0,
  read() {
    let e = DJ();
    if (!uun()) return null;
    return e.cache.cachedAt !== 0 ? e.cache.data : CHr();
  },
  async readAsync() {
    let e = DJ();
    if (!uun()) return null;
    let r = e.cache;
    if (Date.now() - r.cachedAt < mun) return r.data;
    if (e.readInFlight) return e.readInFlight;
    let n = O();
    if (!n) return null;
    let generation_5 = e.generation,
      a = X(n, P()).then(o => {
        let data = o ? J(o) : null;
        if (generation_5 === e.generation) e.cache = {
          data: data,
          cachedAt: Date.now()
        }, cBt(data), e.readInFlight = null;
        return data;
      }).catch(o => {
        if (t(`[windows-credman] load failed: ${d(o)}`, {
          level: "warn"
        }), generation_5 === e.generation) {
          if (r.cachedAt !== 0) e.cache = {
            data: r.data,
            cachedAt: Date.now()
          };
          e.readInFlight = null;
        }
        return r.cachedAt !== 0 ? r.data : CHr();
      });
    return e.readInFlight = a, a;
  },
  async readAsyncStrict(e, r) {
    let n = DJ(),
      s = uun() ? O() : null;
    if (!s) return r?.inaccessibleAs === "failure" ? wl : null;
    let generation_6 = n.generation,
      o;
    try {
      o = await X(s, P());
    } catch (error) {
      return t(`[windows-credman] strict load failed: ${d(error)}`, {
        level: "warn"
      }), wl;
    }
    let i;
    try {
      i = o ? J(o) : null;
    } catch {
      if (r?.unparsableEntryAs === "failure") return wl;
      i = null;
    }
    if (generation_6 === n.generation) {
      let data_2 = i ?? n.cache.data;
      if (n.cache = {
        data: data_2,
        cachedAt: Date.now()
      }, data_2 !== null) cBt(data_2);
    }
    return i;
  },
  invalidateCache() {
    GD();
  },
  mutate(e) {
    return S(v, e);
  },
  async update(data_3) {
    let r = DJ();
    if (!uun()) return {
      success: !1
    };
    let n = O();
    if (!n) return {
      success: !1
    };
    GD();
    try {
      return await _e(n, P(), _(data_3)), r.cache = {
        data: data_3,
        cachedAt: Date.now()
      }, cBt(data_3), r.generation++, r.readInFlight = null, {
        success: !0
      };
    } catch (error) {
      if (t(`[windows-credman] store failed: ${d(error)}`, {
        level: "warn"
      }), error instanceof x) p("secure_storage_credentials_write", "credman_oversize");
      return {
        success: !1
      };
    }
  },
  async delete() {
    let e = DJ();
    GD(), cBt(null);
    let r = O();
    if (!r) return !1;
    try {
      return await ye(r, P()), e.cache = {
        data: null,
        cachedAt: Date.now()
      }, cBt(null), e.generation++, e.readInFlight = null, !0;
    } catch (error) {
      return t(`[windows-credman] remove failed: ${d(error)}`, {
        level: "warn"
      }), !1;
    }
  }
};
class ee {
  memo;
  handedIn;
  prime(enabled, r) {
    if (this.memo !== void 0) return;
    this.handedIn = {
      enabled: enabled,
      ...r()
    };
  }
  resolve(e, r) {
    if (this.memo !== void 0) return this.memo;
    try {
      let n = e(),
        handedIn = this.handedIn;
      if (handedIn !== void 0 && handedIn.legacyPath === n.legacyPath && handedIn.configPath === n.configPath) this.memo = handedIn.enabled;else this.memo = r(n);
    } catch {
      this.memo = !1;
    }
    return this.memo;
  }
  reset() {
    this.memo = void 0, this.handedIn = void 0;
  }
}
var Ce = new z(() => new ee());
function te() {
  return Ce.of(j().host);
}
function re() {
  return {
    legacyPath: Z(Pe(), ".config.json"),
    configPath: Z(process.env.CLAUDE_CONFIG_DIR || Ae(), `.claude${F5()}.json`)
  };
}
function R5n() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return !0;
  return te().resolve(re, Re);
}
function Re({
  legacyPath: legacyPath,
  configPath: configPath
}) {
  let n = "";
  try {
    n = q(legacyPath, "utf8");
  } catch (error) {
    let o = k(error);
    if (o !== "ENOENT" && o !== "ENOTDIR" && o !== "EISDIR" && o !== "ELOOP") throw error;
  }
  if (n === "") n = q(configPath, "utf8");
  return JSON.parse(n).cachedGrowthBookFeatures?.tengu_windows_credman === !0;
}
function $Fo(e) {
  te().prime(e, re);
}
var Q;
function _Hr() {
  return R5n() ? "credential-manager" : "file";
}
function qn() {
  if (Q) return Q;
  if (R5n()) return B(v, D);
  return D;
}
import { STATUS_CODES as Te } from "http";
var we = 500,
  ratio = 0.25;
function r$(attempt, r, capMs = 32000, random = Math.random, baseMs = we) {
  let o = Math.round(Ay({
    attempt: attempt,
    baseMs: baseMs,
    capMs: capMs,
    jitter: {
      kind: "proportional",
      ratio: ratio
    },
    random: random
  }));
  if (r) {
    let i = parseInt(r, 10);
    if (!isNaN(i)) return Math.max(i * 1000, o);
  }
  return o;
}
var mVs = 600000;
function bHr(e) {
  return e.escalated ? e.retryWindowMs : e.firstWindowMs;
}
class StreamNoResponseError extends Error {
  deadline;
  sleptMs;
  code = "StreamNoResponse";
  constructor(e, r) {
    super("No response from API within the first-byte window");
    this.deadline = e;
    this.sleptMs = r;
    this.name = "StreamNoResponseError";
  }
}
function aun(e) {
  let r = ez(e, n => n instanceof StreamNoResponseError);
  return r instanceof StreamNoResponseError ? r : void 0;
}
var Ml = "API Error",
  Gyt = 1000;
function rne(e) {
  if (!(e instanceof Mt)) return !1;
  let r = e.message ?? "";
  return e.status === 403 && r.includes("OAuth token has been revoked") || e.status === 401 && r.includes("OAuth access token has been revoked");
}
function Vyt(e) {
  if (!(e instanceof Mt) || e.status !== 403) return !1;
  let r = e.message ?? "";
  return (e.type === "permission_error" || r.includes('"type":"permission_error"')) && r.includes("model:");
}
function BFo(e) {
  return e.type === "not_found_error" || (e.message?.includes('"type":"not_found_error"') ?? !1);
}
function JMe(e) {
  if (!(e instanceof Mt) || e.status !== 404) return !1;
  return BFo(e) && (e.message ?? "").includes("model:");
}
function EW(e) {
  if (!(e instanceof Mt)) return !1;
  return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1);
}
function ae(e) {
  return e instanceof Mt && e.status === 503 && e.headers?.get("x-should-retry") === "false";
}
function SHr(e) {
  return ae(e) ? b("headerless_decline") : b("headerless_retryable_503");
}
function wHr(e) {
  return ae(e) ? 0 : r$(1);
}
function Ie(e) {
  if (!(e instanceof Mt)) return !1;
  return e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? !1);
}
function vHr(e) {
  return e >= 400 && e < 500 && e !== 401 && e !== 408 && e !== 409 && e !== 429 && e !== 451;
}
var QMe = "dlp_request_denied";
function xQe(e) {
  return A5n(e) === QMe;
}
function gVs(e) {
  if (!(e instanceof Mt) || e.status !== 400 || !M(e)) return !1;
  return e.error?.error?.type === "policy_blocked";
}
var qyt = "claude_code_version_too_old";
function kHr(e) {
  return A5n(e) === qyt;
}
var De = /\bClaude Code \S+ (?:does not support this model; version \S+ or newer is required|is older than the minimum version required by your organization's policy)/;
function hVs(e) {
  if (kHr(e)) return !0;
  if (!(e instanceof Mt) || e.status !== 400) return !1;
  return De.test(F(e) ?? e.message);
}
var one = "safety_monitor_blocked";
function tze(e) {
  return !1;
}
function dBt(e) {
  return !1;
}
function A5n(e) {
  if (!(e instanceof Mt) || !M(e)) return;
  return e.error?.error?.details?.error_code;
}
var Oe = /^[a-z][a-z0-9_]{0,63}$/;
function yVs(e) {
  let r = A5n(e);
  return typeof r === "string" && Oe.test(r) ? r : void 0;
}
function x5n(e) {
  if (typeof e.status === "number") return e.status;
  if (EW(e)) return 529;
  if (Ie(e)) return 429;
  return;
}
var zge = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "CERT_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CERT_REVOKED", "CERT_REJECTED", "CERT_UNTRUSTED", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_CHAIN_TOO_LONG", "PATH_LENGTH_EXCEEDED", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH"]),
  _Vs = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN"]),
  Ne = new Set([...zge, "ERR_TLS_HANDSHAKE_TIMEOUT", "ERR_SSL_WRONG_VERSION_NUMBER", "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"]),
  AB = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "FailedToOpenSocket", "ERR_PROXY_TUNNEL"]),
  S2 = new Set(["ECONNRESET", "EPIPE", "ConnectionClosed", "UND_ERR_SOCKET", "ETIMEDOUT", "ECONNABORTED", "ERR_SOCKET_CLOSED", "StreamSuspended", "StreamTruncated"]);
function P5n(e) {
  return S2.has(e) || AB.has(e) ? xn(e) : b("other");
}
function Kyt(e) {
  return AB.has(e) || S2.has(e) || zge.has(e) ? xn(e) : void 0;
}
function PQe(e, r) {
  let n = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
  return xn(`API error: type=${n} status=${typeof r === "number" ? r : "none"}`);
}
var ne = "Failed to resolve AWS credentials from the credential provider chain.",
  O5n = "Failed to acquire Google OAuth credentials.";
function yg(e) {
  if (!e || typeof e !== "object") return null;
  let r = e,
    n = 5,
    s = 0;
  while (r && s < n) {
    if (r instanceof Error) {
      if ("code" in r && typeof r.code === "string") {
        let code_2 = r.code,
          isSSLError = Ne.has(code_2);
        return {
          code: code_2,
          message: r.message,
          isSSLError: isSSLError
        };
      }
      if (r.message.startsWith(whn)) return {
        code: "ConnectionClosed",
        message: r.message,
        isSSLError: !1
      };
    }
    if (r instanceof Error && "cause" in r && r.cause !== r) r = r.cause, s++;else break;
  }
  return null;
}
function be(e) {
  let r = yg(e);
  return r !== null && AB.has(r.code);
}
function lun(e) {
  return yg(e)?.code === "StreamSuspended";
}
function MJ(e) {
  let r = yg(e);
  if (!r?.isSSLError) return null;
  return `SSL certificate error (${r.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`;
}
function N(e) {
  if (e.includes("<!DOCTYPE html") || e.includes("<html")) {
    let r = e.match(/<title>([^<]+)<\/title>/);
    if (r && r[1]) return r[1].trim();
    return "";
  }
  return e;
}
function jFo(e) {
  let r = e.message;
  if (!r) return "";
  return N(r);
}
function M(e) {
  return typeof e === "object" && e !== null && "error" in e && typeof e.error === "object" && e.error !== null;
}
function F(e) {
  if (!M(e)) return null;
  let n = e.error,
    s = n?.error?.message;
  if (typeof s === "string" && s.length > 0) {
    let o = N(s);
    if (o.length > 0) return o;
  }
  let a = n?.message;
  if (typeof a === "string" && a.length > 0) {
    let o = N(a);
    if (o.length > 0) return o;
  }
  return null;
}
function Gge(e) {
  let r = yg(e);
  if (r) {
    let {
      code: code_3,
      isSSLError: isSSLError_2
    } = r;
    if (code_3 === "StreamSuspended") return Dw() ? "Connection lost" : "Connection lost while your computer was asleep";
    if (code_3 === "StreamTruncated") return "Connection closed before the response finished";
    if (code_3 === "StreamNoResponse") return "No response from API";
    if (code_3 === "BedrockUnexpectedContentType") return r.message;
    if (code_3 === "ETIMEDOUT") return Dw() ? "Request timed out" : "Request timed out. Check your internet connection and proxy settings";
    if (isSSLError_2) {
      let i = `(${code_3}). The certificate comes from an authority Claude Code doesn't trust, usually a TLS-inspecting corporate proxy or a gateway signed by a private CA: set NODE_EXTRA_CA_CERTS to that CA bundle, or add it to the system certificate store \xB7 see https://code.claude.com/docs/en/network-config`;
      switch (code_3) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return `Unable to connect to API: SSL certificate verification failed ${i}`;
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return `Unable to connect to API: Self-signed certificate detected ${i}`;
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${code_3})`;
      }
    }
  }
  if (e.message === ne || e.message === O5n) {
    let a = ez(e.cause, o => o.message.trim().length > 0 && o.message !== ne && o.message !== O5n);
    if (a) {
      let o = N(a.message.trim());
      if (o.length > 0) return o;
    }
  }
  if (e.message === "Connection error.") {
    let a = r?.code;
    if (Dw()) return a === void 0 ? "Unable to connect to API" : `Unable to connect to API (${a})`;
    if (a === void 0) return "Unable to connect to API. Check your internet connection";
    switch (a) {
      case "ECONNRESET":
      case "EPIPE":
      case "ECONNABORTED":
      case "ConnectionClosed":
      case "ERR_SOCKET_CLOSED":
      case "UND_ERR_SOCKET":
        return `Connection dropped (${a})`;
      case "ECONNREFUSED":
      case "ConnectionRefused":
        return `Connection refused \u2014 a firewall or proxy may be blocking it (${a})`;
      case "ENOTFOUND":
      case "EAI_AGAIN":
      case "FailedToOpenSocket":
        return `Can't reach the API server \u2014 check your internet or DNS (${a})`;
      case "ENETUNREACH":
      case "ENETDOWN":
      case "EHOSTUNREACH":
      case "EHOSTDOWN":
        return `No internet route \u2014 check your connection or VPN (${a})`;
      case "ERR_PROXY_TUNNEL":
        return `Couldn't connect through your proxy (${a}) \u2014 the proxy refused the tunnel: check its credentials and that it allows this host`;
      default:
        return `Unable to connect to API (${a})`;
    }
  }
  if (!e.message) return F(e) ?? `API error (status ${e.status ?? "unknown"})`;
  if (e.message.includes('{"')) {
    let a = F(e);
    if (a) return e.status ? `${e.status} ${a}` : a;
  }
  let n = jFo(e),
    s = /^(\d+ )?\s*</.test(e.message);
  if (n.length === 0 && s) {
    if (!e.status) return "API error (status unknown)";
    let a = Te[e.status];
    return a ? `${e.status} ${a}` : String(e.status);
  }
  if (n !== e.message && n.length > 0) {
    let a = e.status ? String(e.status) : void 0;
    return a && !n.match(/\d+/g)?.includes(a) ? `${a} ${n}` : n;
  }
  return e.message.trimEnd();
}
function I5n(e) {
  let r = i => e.headers?.get?.(i) ?? void 0,
    rateLimitType = r("anthropic-ratelimit-unified-representative-claim"),
    s = r("anthropic-ratelimit-unified-reset"),
    a = r("anthropic-ratelimit-unified-overage-status"),
    o = aun(e);
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: Gge(e),
    connection: yg(e),
    isNetworkDown: be(e),
    rateLimits: rateLimitType || a ? {
      ...(rateLimitType && {
        rateLimitType: rateLimitType
      }),
      ...(s && {
        resetsAt: Math.round(Number(s))
      })
    } : null,
    noResponse: o ? {
      waitedMs: bHr(o.deadline),
      retryWaitMs: o.deadline.retryWindowMs
    } : null
  };
}
class StreamNoEventsError extends Error {
  constructor() {
    super("Stream ended without receiving any events");
    this.name = "StreamNoEventsError";
  }
}
class StreamMalformedEventError extends Error {
  blockState;
  constructor(e) {
    super("Content block not found");
    if (this.name = "StreamMalformedEventError", this.blockState = e, e === "closed") this.message = "Content block already closed";
    if (e === "unreadable") this.message = "Stream event unreadable";
  }
}
class StreamTruncatedError extends Error {
  code = "StreamTruncated";
  constructor() {
    super("Stream ended before the response was complete");
    this.name = "StreamTruncatedError";
  }
}
function bVs({
  connDetails: connDetails,
  isStaleConnection: isStaleConnection,
  isContextHintSse: isContextHintSse,
  streamIdleAborted: streamIdleAborted,
  noEvents: noEvents,
  malformedStream: malformedStream
}) {
  if (connDetails?.code === "StreamSuspended") return "stream_suspended";
  if (connDetails?.code === "StreamTruncated") return "stream_truncated";
  if (isStaleConnection) return "stale_connection";
  if (isContextHintSse) return "context_hint_sse";
  if (streamIdleAborted) return "watchdog";
  if (noEvents) return "no_events";
  if (malformedStream) return "malformed_stream";
  return "other";
}
export { wl, LFo, pVs, NFo, FFo, fVs, HFo, warning as yHr, XMe, R5n, $Fo, _Hr, qn, ratio as UFo, r$, mVs, bHr, StreamNoResponseError as lBt, aun, Ml, Gyt, rne, Vyt, BFo, JMe, EW, SHr, wHr, vHr, QMe, xQe, gVs, qyt, kHr, hVs, one, tze, dBt, A5n, yVs, x5n, zge, _Vs, AB, S2, P5n, Kyt, PQe, O5n, yg, lun, MJ, jFo, Gge, I5n, StreamNoEventsError as dun, StreamMalformedEventError as sne, StreamTruncatedError as EHr, bVs };