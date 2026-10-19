// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vk, Ie, Gy, Qan, iMo, aMo, _d, Ogt, D4n, L4n } from "B:/~BUN/root/chunk-hkh6hras.js";
import { x, Ye, H, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { J, se, zf, qhe, hR, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { RIe } from "B:/~BUN/root/chunk-pm2vnc51.js";
import { L, Qr, yu, so, we, cS, cT } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ka } from "B:/~BUN/root/chunk-89mss1tj.js";
import { eo } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { fk, za, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { lL } from "B:/~BUN/root/chunk-ek28wssa.js";
import { GB, ns } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { BW } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { no, Kx } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { fn, me, In, ca } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { fW, sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { wl, qn } from "B:/~BUN/root/chunk-245a2x6v.js";
import { dA, Kme, Rje, Yme, wIe, F0r, $Io } from "B:/~BUN/root/chunk-nw686kdq.js";
import { OBs } from "B:/~BUN/root/chunk-h2myanpn.js";
import { jc } from "B:/~BUN/root/chunk-183sjefx.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Co, Ngt } from "B:/~BUN/root/chunk-d544j3ga.js";
import { ag, R1e } from "B:/~BUN/root/chunk-472kxa0t.js";
import { uie } from "B:/~BUN/root/chunk-m5caq93p.js";
import { sK, yM, iK } from "B:/~BUN/root/chunk-nsa84wqe.js";
import { ege, ale, HHt } from "B:/~BUN/root/chunk-xpy44yvr.js";
import { o, v, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
var Te = He(new Map(), e => e.clear());
var Pe = He(new Set(), e => e.clear());
function X(e, r, n) {
  let i = `${e.name}#${e.environmentId} ${r}`,
    s = Te.get(i) ?? 0;
  if (s >= aMo) return;
  Te.set(i, s + 1);
  let m = Qan(e.matcherFor(r), n);
  if (m === void 0) return;
  let c = `${i} ${m.path}`;
  if (Pe.has(c)) return;
  Pe.add(c), _d().log(iMo(e.name, r, m), "warn");
}
function okr(e, r, n) {
  let i = e.matcherFor(r),
    s = e.hopKey.kind === "worker";
  if (i === void 0) return !0;
  let m = RIe(r),
    c = s ? D4n(i, n, m) : Ogt(i, n, m);
  if (!c) X(e, r, n);
  return c;
}
function ge(e, r, n) {
  let i = e.findIndex(item => okr(item, r, n));
  return i === -1 ? [] : e.slice(i);
}
function te(e, r, n) {
  let i = Gy(n) ? Object.fromEntries((Kme(r).pinnedKeys ?? []).filter(item => Object.hasOwn(n, item)).map(item => [item, n[item]])) : {};
  return e.catches(r, void 0, s => L4n(s, i, RIe(r)));
}
function Z(e, r) {
  let n = [];
  for (let i of e) {
    if (!jc(i)) {
      t(`hooks module ${i.label}: judged under a policy text other than the one in force (during ${r}); passing on`);
      continue;
    }
    let s = i.status();
    if (s.kind !== "live") {
      let m = s.kind === "retiring" || s.kind === "unloaded" && s.retired,
        c = s.kind === "unloaded";
      t(`hooks module ${m ? `${i.label}: its environment was retired by a reload during ${r}` : c ? `${i.label}: its environment was unloaded (during ${r})` : `${i.label}: ${s.reason} (during ${r})`}; passing on`);
      continue;
    }
    n.push(i);
  }
  return n;
}
var he = (e, r, n) => ge(Z(e, r), r, n);
var J$n = He(Co(), e => e.set(void 0));
var iie = He(Co(), e => e.set(void 0));
var XIt = He(Co(), e => e.set(void 0));
function gho() {
  return a.CLAUDE_CODE_PLUGIN_DIR_WATCH ?? !we();
}
import { resolve as ye } from "path";
function tkr(e) {
  let r = new Set((iie.get() ?? []).map(item => ye(item))),
    n = new Set((XIt.get() ?? []).map(item => ye(item)));
  return e.filter(item => r.has(ye(item)) || !n.has(ye(item)));
}
import { resolve as Ve } from "path";
function nkr(e) {
  if (gho()) return tkr(e);
  let r = new Set((iie.get() ?? []).map(item => Ve(item)));
  return a.CLAUDE_CODE_PLUGIN_DIR_WATCH === !1 ? [] : e.filter(item => r.has(Ve(item)));
}
var rkr = () => [...cS(), ...cT()];
var qpe = () => nkr(rkr()).length > 0;
var Q$n = 1e4;
function dUe(e) {
  return e.length <= Q$n ? e : `${ne(e, Q$n)}\u2026`;
}
var Ke = 100;
function F9(plugin, r, n = "again") {
  let text = dUe(r),
    s = Ne();
  if (t(`[${plugin}] $.ui.log: ${text}`), s.uiLogSink) {
    s.uiLogSink({
      plugin: plugin,
      text: text
    }, n);
    return;
  }
  if (s.pendingUiLog.length < Ke) s.pendingUiLog = [...s.pendingUiLog, {
    plugin: plugin,
    text: text
  }];
}
function oj(e, r, n = "again") {
  if (qpe()) {
    F9(e, ne(r, dA), n);
    return;
  }
  t(`${e}: ${r}`, {
    level: "error"
  });
}
var $e = (e, r) => e.filter(item => {
  let i = item.status();
  return i.kind === "dead" && i.reason === r;
});
var Z$n = e => typeof e !== "string" && "rewritten" in e;
function hho(e) {
  let r = Z$n(e),
    n = r ? e.of : e,
    s = typeof n === "string" ? [n] : [n.plugin, n.registration];
  return JSON.stringify([r, ...s]);
}
function ke(e, r, n) {
  let i = typeof e === "string",
    s = !i && "plugin" in e;
  return i ? e : s ? r(e) : n;
}
var eUn = e => ke(e, r => `${r.plugin}#${r.registration}`, "/rewritten beneath");
var P3e = e => ke(e, r => r.plugin, void 0);
function xe(e, r) {
  let n = new Set();
  for (let i of e ?? []) {
    if (P3e(i) !== r) continue;
    if (typeof i === "string") return "every";
    if ("registration" in i) n.add(i.registration);
  }
  return [...n].sort((itemA, itemB) => itemA - itemB);
}
function Wt(e, r) {
  let n = e ?? [],
    i = n.length - 1;
  return {
    caller: xe(n.slice(i), r),
    above: xe(n.slice(0, i), r)
  };
}
function Ivs(e, r) {
  if (typeof e === "string" || typeof r === "string") return e === r;
  let i = "plugin" in e && "plugin" in r,
    s = "rewritten" in e && "rewritten" in r;
  return i ? e.plugin === r.plugin && e.registration === r.registration : s && Ivs(e.of, r.of);
}
var nct = eo(() => new WeakMap());
var QXs = e => (e ?? []).map(hho).join(" > ");
var skr = e => (e ?? []).map(eUn).join(" > ");
var ZXs = e => Object.freeze({
  rewritten: !0,
  of: e
});
var wZt = ({
  name: name,
  method: method
}) => `$.${name}.${method}`;
var yho = e => Array.from(e).join(",") || "none";
var eJs = "the hooks worker was replaced; the plugin stays loaded for its .catch";
var JIt = e => e.map(item => item.label).join(", ");
function vZt({
  pluginName: pluginName,
  pluginStorageId: pluginStorageId
}) {
  return pluginStorageId.startsWith(`${pluginName}@`) ? pluginStorageId : `${pluginStorageId}+${pluginName}`;
}
var Mvs = e => `next() result not cloneable: ${d(e)}`;
import { lstat as re, rmdir as Do } from "fs/promises";
import { basename as ie, dirname as ae } from "path";
import { createHash as Re } from "crypto";
import { chmod as Eo, writeFile as Ae } from "fs/promises";
import { dirname as Oo, join as B } from "path";
async function io(e) {
  let {
      McpbManifestSchema: McpbManifestSchema
    } = await import("B:/~BUN/root/chunk-m0e5bmth.js"),
    n = McpbManifestSchema.safeParse(e);
  if (!n.success) {
    let i = n.error.flatten(),
      s = [...Object.entries(i.fieldErrors).map(([m, c]) => `${m}: ${c?.join(", ")}`), ...(i.formErrors || [])].filter(Boolean).join("; ");
    throw new x(`Invalid manifest: ${s}`, "MCPB manifest schema validation failed");
  }
  return n.data;
}
async function ao(e) {
  let r;
  try {
    r = J(e);
  } catch (error) {
    throw Error(`Invalid JSON in manifest.json: ${d(error)}`);
  }
  return io(r);
}
async function De(e) {
  let r = new TextDecoder().decode(e);
  return ao(r);
}
import { isAbsolute as fo, normalize as mo } from "path";
import { inflateRawSync as co } from "zlib";
var K = {
  MAX_FILE_SIZE: 536870912,
  MAX_TOTAL_SIZE: 1073741824,
  MAX_FILE_COUNT: 1e5,
  MAX_COMPRESSION_RATIO: 50
};
function X$n(e) {
  if (lL(e)) return !1;
  for (let n of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(n)) return !1;
  let r = mo(e);
  if (fo(r)) return !1;
  return !0;
}
function po(e, r) {
  r.fileCount++;
  let error_2;
  if (r.fileCount > K.MAX_FILE_COUNT) error_2 = `Archive contains too many files: ${r.fileCount} (max: ${K.MAX_FILE_COUNT})`;
  let i = Rt(e.name, 120);
  if (!X$n(e.name)) error_2 = `Unsafe file path detected: "${i}". Path traversal or absolute paths are not allowed.`;
  let s = e.originalSize || 0;
  if (s > K.MAX_FILE_SIZE) error_2 = `File "${i}" is too large: ${Math.round(s / 1024 / 1024)}MB (max: ${Math.round(K.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (r.totalUncompressedSize += s, r.totalUncompressedSize > K.MAX_TOTAL_SIZE) error_2 = `Archive total size is too large: ${Math.round(r.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(K.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let m = r.totalUncompressedSize / r.compressedSize;
  if (m > K.MAX_COMPRESSION_RATIO) error_2 = `Suspicious compression ratio detected: ${m.toFixed(1)}:1 (max: ${K.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return error_2 ? {
    isValid: !1,
    error: error_2
  } : {
    isValid: !0
  };
}
async function C3e(e) {
  let r = {
      fileCount: 0,
      totalUncompressedSize: 0,
      compressedSize: e.length,
      errors: []
    },
    n = So(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i => {
      let s = po(i, r);
      if (!s.isValid) throw new x(s.error, "MCPB zip entry validation failed");
    });
  return t(`Zip extraction completed: ${r.fileCount} files, ${Math.round(r.totalUncompressedSize / 1024)}KB uncompressed`), n;
}
var lo = 101010256,
  uo = 101075792,
  go = 117853008,
  ho = 33639248,
  yo = 65557,
  ko = 2048,
  xo = 0,
  wo = 8;
function j(e) {
  return e === void 0 ? Error("invalid zip data") : new x(`invalid zip data: ${e}`, "invalid zip data");
}
function U(e, r) {
  if (r + 2 > e.length) throw j();
  return e[r] | e[r + 1] << 8;
}
function N(e, r) {
  if (r + 4 > e.length) throw j();
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24) >>> 0;
}
function Fe(e, r) {
  return N(e, r) + N(e, r + 4) * 4294967296;
}
function bo(e) {
  let r = "";
  for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode(...e.subarray(n, n + 16384));
  return r;
}
function So(e, r) {
  let n = {},
    i = e.length - 22;
  while (i < 0 || N(e, i) !== lo) {
    if (i <= 0 || e.length - i > yo) throw j();
    i--;
  }
  let s = U(e, i + 8);
  if (s === 0) return n;
  let m = N(e, i + 16),
    c = !1;
  if ((m === 4294967295 || s === 65535) && i >= 20 && N(e, i - 20) === go) {
    let g = N(e, i - 12);
    if (g + 56 <= e.length && N(e, g) === uo) c = !0, s = N(e, g + 32), m = N(e, g + 48);
  }
  let textDecoder = new TextDecoder();
  for (let g = 0; g < s; g++) {
    if (N(e, m) !== ho) throw j();
    let h = U(e, m + 8),
      w = U(e, m + 10),
      b = U(e, m + 28),
      y = U(e, m + 30),
      S = U(e, m + 32),
      E = m + 46;
    if (E + b > e.length) throw j();
    let M = e.subarray(E, E + b),
      name_2 = h & ko ? textDecoder.decode(M) : bo(M),
      O = N(e, m + 20),
      originalSize = N(e, m + 24),
      T = N(e, m + 42),
      D = E + b;
    if (c && O === 4294967295) {
      let F = D + y,
        R = D;
      while (R + 4 <= F && U(e, R) !== 1) R += 4 + U(e, R + 2);
      if (R + 28 > F) throw j();
      originalSize = Fe(e, R + 4), O = Fe(e, R + 12), T = Fe(e, R + 20);
    }
    m = D + y + S, r({
      name: name_2,
      originalSize: originalSize
    });
    let V = T + 30 + U(e, T + 26) + U(e, T + 28);
    if (V + O > e.length) throw j();
    let ue = e.subarray(V, V + O);
    if (w === xo) {
      if (O !== originalSize) throw j("stored entry size mismatch");
      n[name_2] = ue.slice();
    } else if (w === wo) {
      if (O === 0 && originalSize === 0) {
        n[name_2] = new Uint8Array(0);
        continue;
      }
      let F;
      try {
        F = co(ue, {
          maxOutputLength: Math.max(originalSize, 1),
          chunkSize: Math.min(Math.max(originalSize, 64), 1048576)
        });
      } catch (error) {
        let _ = error.code;
        throw j(typeof _ === "string" && _.startsWith("Z_") ? _ : "entry larger than declared");
      }
      n[name_2] = new Uint8Array(F.buffer, F.byteOffset, F.byteLength);
    } else throw j(`unsupported compression method ${w}`);
  }
  return n;
}
var R3e = 493;
function SZt(e) {
  let r = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    n = {},
    i = Math.max(0, r.length - 22 - 65535),
    s = -1;
  for (let p = r.length - 22; p >= i; p--) if (r.readUInt32LE(p) === 101010256) {
    s = p;
    break;
  }
  if (s < 0) return n;
  let m = r.readUInt16LE(s + 10),
    c = r.readUInt32LE(s + 16);
  for (let p = 0; p < m; p++) {
    if (c + 46 > r.length || r.readUInt32LE(c) !== 33639248) break;
    let g = r.readUInt16LE(c + 4),
      h = r.readUInt16LE(c + 28),
      w = r.readUInt16LE(c + 30),
      b = r.readUInt16LE(c + 32),
      y = r.readUInt32LE(c + 38),
      S = r.toString("utf8", c + 46, c + 46 + h);
    if (g >> 8 === 3) {
      let E = y >>> 16 & 65535;
      if (E) n[S] = E;
    }
    c += 46 + h + w + b;
  }
  return n;
}
import { homedir as Ho } from "os";
import { join as q } from "path";
function We(e) {
  let r = e?.platform ?? I(),
    HOME = e?.homedir ?? Ho(),
    i = e?.env ?? process.env,
    s = {
      HOME: HOME,
      DESKTOP: q(HOME, "Desktop"),
      DOCUMENTS: q(HOME, "Documents"),
      DOWNLOADS: q(HOME, "Downloads")
    };
  switch (r) {
    case "windows":
      {
        let m = i.USERPROFILE || HOME;
        return {
          HOME: HOME,
          DESKTOP: q(m, "Desktop"),
          DOCUMENTS: q(m, "Documents"),
          DOWNLOADS: q(m, "Downloads")
        };
      }
    case "linux":
    case "wsl":
      return {
        HOME: HOME,
        DESKTOP: i.XDG_DESKTOP_DIR || s.DESKTOP,
        DOCUMENTS: i.XDG_DOCUMENTS_DIR || s.DOCUMENTS,
        DOWNLOADS: i.XDG_DOWNLOAD_DIR || s.DOWNLOADS
      };
    case "macos":
    default:
      {
        if (r === "unknown") t("Unknown platform detected, using default paths");
        return s;
      }
  }
}
var Mo = f(() => u({
  source: o(),
  contentHash: o(),
  extractedPath: o(),
  cachedAt: o(),
  lastChecked: o(),
  sourceMtimeMs: v().optional()
}));
function oD(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function _e(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
function Cvs(e) {
  return oD(e) && !_e(e);
}
function Ge(e) {
  return B(e, ".mcpb-cache");
}
function vo(e, r) {
  let n = Re("md5").update(r).digest("hex").substring(0, 8);
  return B(e, `${n}.metadata.json`);
}
function Xe(e, r) {
  return uie(vo(e, r), () => Mo().nullable(), {
    defaultValue: null,
    indent: 2
  });
}
function Ze(e, r) {
  return `${e}/${r}`;
}
async function Dwe(e, r, n) {
  try {
    let i = ege(e).mcpServers?.[r],
      s = (await qn().readAsync(n))?.pluginSecrets?.[Ze(e, r)];
    if (!i && !s) return null;
    return t(`Loaded user config for ${e}/${r} (settings + secureStorage)`), {
      ...i,
      ...s
    };
  } catch (error) {
    return t(`Failed to load user config for ${e}/${r}: ${error}`, {
      level: "error"
    }), null;
  }
}
async function ect(e, r, n, i, s, m) {
  try {
    let c = {},
      p = {};
    for (let [C, O] of Object.entries(n)) if (i[C]?.sensitive === !0) p[C] = String(O);else c[C] = O;
    let g = new Set(Object.keys(p)),
      h = new Set(Object.keys(c)),
      w = Ze(e, r),
      b = 0,
      y = await qn().mutate(C => {
        let O = C.pluginSecrets?.[w],
          P = O ? Vk(O, (T, D) => !h.has(D)) : void 0;
        if (b = P && O ? Object.keys(O).length - Object.keys(P).length : 0, Object.keys(p).length === 0 && b === 0) return C;
        return {
          ...C,
          pluginSecrets: {
            ...C.pluginSecrets,
            [w]: {
              ...P,
              ...p
            }
          }
        };
      }, m);
    if (!y.success) throw Error(`Failed to save sensitive config to secure storage for ${w}`);
    if (y.warning) t(`Server secrets save warning: ${y.warning}`, {
      level: "warn"
    });
    if (b > 0) t(`saveMcpServerUserConfig: scrubbed ${b} stale non-sensitive key(s) from secureStorage for ${w}`);
    let S = me("userSettings")?.pluginConfigs,
      pluginConfigs = {},
      M = 0;
    for (let C of ale(e)) {
      let O = Object.keys(S?.[C]?.mcpServers?.[r] ?? {}).filter(item => g.has(item)),
        P = Object.fromEntries(O.map(item => [item, void 0])),
        T = C === e ? c : {};
      if (Object.keys(T).length > 0 || O.length > 0) pluginConfigs[C] = {
        mcpServers: {
          [r]: {
            ...T,
            ...P
          }
        }
      }, M += O.length;
    }
    if (Object.keys(pluginConfigs).length > 0) {
      let C = await In("userSettings", {
        pluginConfigs: pluginConfigs
      }, void 0, s);
      if (C.error) throw C.error;
      if (M > 0) t(`saveMcpServerUserConfig: scrubbed ${M} plaintext sensitive key(s) from settings.json for ${e}/${r}`);
    }
    t(`Saved user config for ${e}/${r} (${Object.keys(c).length} non-sensitive, ${Object.keys(p).length} sensitive)`);
  } catch (error) {
    let p = H(error);
    throw t(`Failed to save user config for ${e}/${r}: ${p.message}`, {
      level: "error"
    }), Error(`Failed to save user configuration for ${e}/${r}: ${p.message}`);
  }
}
function N9(e, r) {
  let errors = [];
  for (let [i, s] of Object.entries(r)) {
    let m = no(e, i);
    if (s.required && (m === void 0 || m === "")) {
      errors.push(`${s.title || i} is required but not provided`);
      continue;
    }
    if (m === void 0 || m === "") continue;
    if (s.type === "string") {
      if (Array.isArray(m)) {
        if (!s.multiple) errors.push(`${s.title || i} must be a string, not an array`);else if (!m.every(item => typeof item === "string")) errors.push(`${s.title || i} must be an array of strings`);
      } else if (typeof m !== "string") errors.push(`${s.title || i} must be a string`);else if (s.options !== void 0 && !s.options.includes(m)) errors.push(`${s.title || i} must be one of: ${s.options.join(", ")}`);
    } else if (s.type === "number" && typeof m !== "number") errors.push(`${s.title || i} must be a number`);else if (s.type === "boolean" && typeof m !== "boolean") errors.push(`${s.title || i} must be a boolean`);else if ((s.type === "file" || s.type === "directory") && typeof m !== "string") errors.push(`${s.title || i} must be a path string`);
    if (s.type === "number" && typeof m === "number") {
      if (s.min !== void 0 && m < s.min) errors.push(`${s.title || i} must be at least ${s.min}`);
      if (s.max !== void 0 && m > s.max) errors.push(`${s.title || i} must be at most ${s.max}`);
    }
  }
  return {
    valid: errors.length === 0,
    errors: errors
  };
}
async function be(manifest, extensionPath, userConfig = {}) {
  let {
      getMcpConfigForManifest: getMcpConfigForManifest
    } = await import("B:/~BUN/root/chunk-m0e5bmth.js"),
    s = await getMcpConfigForManifest({
      manifest: manifest,
      extensionPath: extensionPath,
      systemDirs: We(),
      userConfig: userConfig,
      pathSeparator: "/"
    });
  if (!s) {
    let m = Ye(Error(`Failed to generate MCP server configuration from manifest "${manifest.name}"`), "MCPB manifest: failed to generate MCP server configuration");
    throw l(m), m;
  }
  return s;
}
async function qe(e, r) {
  try {
    return await Xe(e, r).read();
  } catch (error) {
    return t(`Failed to load MCPB cache metadata: ${error}`, {
      level: "error"
    }), null;
  }
}
async function Le(e, r, n) {
  await se().mkdir(e), await Xe(e, r).write(n);
}
async function To(e, r, n) {
  let i = zf(e);
  if (t(`Downloading MCPB from ${i}`), n) n(`Downloading ${i}...`);
  let s = performance.now(),
    m = !1;
  try {
    let p = await (fW(e) ? sK.get : sl.get)(e, {
        timeout: 120000,
        responseType: "arraybuffer",
        maxRedirects: 5,
        onDownloadProgress: h => {
          if (h.total && n) {
            let w = Math.round(h.loaded / h.total * 100);
            n(`Downloading... ${w}%`);
          }
        }
      }),
      uint8Array = new Uint8Array(p.data);
    if (yM("mcpb", e, "success", performance.now() - s), m = !0, await Ae(r, Buffer.from(uint8Array)), t(`Downloaded ${uint8Array.length} bytes to ${r}`), n) n("Download complete");
    return uint8Array;
  } catch (error) {
    if (!m) yM("mcpb", e, "failure", performance.now() - s, iK(error));
    let p = hR(qhe(d(error), e, i)),
      g = Error(`Failed to download MCPB file from ${i}: ${p}`);
    throw t(`Failed to download MCPB file from ${i}: ${p}`, {
      level: "error"
    }), g;
  }
}
async function Po(e, r, n, i) {
  if (i) i("Extracting files...");
  await se().mkdir(r);
  let s = 0,
    m = Object.entries(e).filter(([p]) => !p.endsWith("/")),
    c = m.length;
  for (let [p, g] of m) {
    let h = B(r, p),
      w = Oo(h);
    if (w !== r) await se().mkdir(w);
    if (p.endsWith(".json") || p.endsWith(".js") || p.endsWith(".ts") || p.endsWith(".txt") || p.endsWith(".md") || p.endsWith(".yml") || p.endsWith(".yaml")) {
      let S = new TextDecoder().decode(g);
      await Ae(h, S, "utf-8");
    } else await Ae(h, Buffer.from(g));
    let y = n[p];
    if (y && y & 73) await Eo(h, y & R3e).catch(() => {});
    if (s++, i && s % 10 === 0) i(`Extracted ${s}/${c} files`);
  }
  if (t(`Extracted ${s} files to ${r}`), i) i(`Extraction complete (${s} files)`);
}
async function $o(e, r) {
  let n = se(),
    i = Ge(r),
    s = await qe(i, e);
  if (!s) return !0;
  try {
    await n.stat(s.extractedPath);
  } catch (error) {
    if (k(error) === "ENOENT") t(`MCPB extraction path missing: ${s.extractedPath}`);else t(`MCPB extraction path inaccessible: ${s.extractedPath}: ${error}`, {
      level: "error"
    });
    return !0;
  }
  if (!_e(e)) {
    let m = B(r, e),
      c = B(r, zf(e)),
      p;
    try {
      p = await n.stat(m);
    } catch (error) {
      if (k(error) === "ENOENT") t(`MCPB source file missing: ${c}`);else t(`MCPB source file inaccessible: ${c}: ${qhe(String(error), m, c)}`, {
        level: "error"
      });
      return !0;
    }
    if (s.sourceMtimeMs === void 0) return !0;
    let g = Math.floor(p.mtimeMs);
    if (g !== s.sourceMtimeMs) return t(`MCPB file modified: mtime ${new Date(g).toISOString()} != cached ${new Date(s.sourceMtimeMs).toISOString()}`), !0;
  }
  return !1;
}
async function A3e(source, r, n, i, s, m, c, p) {
  let g = zf(source),
    h = se(),
    w = Ge(r);
  await h.mkdir(w), t(`Loading MCPB from source: ${g}`);
  let b = await qe(w, source);
  if (b && !(await $o(source, r))) {
    t(`Using cached MCPB from ${b.extractedPath} (hash: ${b.contentHash})`);
    let F = B(b.extractedPath, "manifest.json"),
      R;
    try {
      R = await h.readFile(F, {
        encoding: "utf-8"
      });
    } catch (error) {
      if (G(error)) {
        let W = Error(`Cached manifest not found: ${F}`);
        throw l(W), W;
      }
      throw error;
    }
    let _ = new TextEncoder().encode(R),
      manifest_2 = await De(_);
    if (manifest_2.user_config && Object.keys(manifest_2.user_config).length > 0) {
      let z = manifest_2.name,
        W = await Dwe(n, z, p),
        Be = s || W || {},
        ve = N9(Be, manifest_2.user_config);
      if (m || !ve.valid) return {
        status: "needs-config",
        manifest: manifest_2,
        extractedPath: b.extractedPath,
        contentHash: b.contentHash,
        configSchema: manifest_2.user_config,
        existingConfig: W || {},
        validationErrors: ve.valid ? [] : ve.errors
      };
      if (s) await ect(n, z, s, manifest_2.user_config ?? {}, c, p);
      let mcpConfig = await be(manifest_2, b.extractedPath, Be);
      return {
        manifest: manifest_2,
        mcpConfig: mcpConfig,
        extractedPath: b.extractedPath,
        contentHash: b.contentHash
      };
    }
    let mcpConfig_2 = await be(manifest_2, b.extractedPath);
    return {
      manifest: manifest_2,
      mcpConfig: mcpConfig_2,
      extractedPath: b.extractedPath,
      contentHash: b.contentHash
    };
  }
  let y, S, sourceMtimeMs;
  if (_e(source)) {
    let F = Re("md5").update(source).digest("hex").substring(0, 8);
    S = B(w, `${F}.mcpb`), y = await To(source, S, i);
  } else {
    let F = B(r, source);
    if (i) i(`Loading ${g}...`);
    try {
      y = await h.readFileBytes(F), S = F, sourceMtimeMs = Math.floor((await h.stat(F)).mtimeMs);
    } catch (error) {
      let _ = B(r, g);
      if (G(error)) {
        let A = Error(`MCPB file not found: ${_}`);
        throw t(`MCPB file not found: ${_}`, {
          level: "error"
        }), A;
      }
      throw F === _ ? error : new x(qhe(d(error), F, _), "MCPB local file read failed");
    }
  }
  let contentHash = Re("sha256").update(y).digest("hex").substring(0, 16);
  if (t(`MCPB content hash: ${contentHash}`), i) i("Extracting MCPB archive...");
  let C = await C3e(Buffer.from(y)),
    O = SZt(y),
    P = C["manifest.json"];
  if (!P) {
    let F = Error("No manifest.json found in MCPB file");
    throw t(`No manifest.json found in MCPB file: ${S}`, {
      level: "error"
    }), F;
  }
  let manifest_3 = await De(P);
  if (t(`MCPB manifest: ${manifest_3.name} v${manifest_3.version} by ${manifest_3.author.name}`), !manifest_3.server) {
    let F = Ye(Error(`MCPB manifest for "${manifest_3.name}" does not define a server configuration`), "MCPB manifest does not define a server configuration");
    throw l(F), F;
  }
  let extractedPath = B(w, contentHash);
  if (await Po(C, extractedPath, O, i), manifest_3.user_config && Object.keys(manifest_3.user_config).length > 0) {
    let F = manifest_3.name,
      R = await Dwe(n, F, p),
      _ = s || R || {},
      A = N9(_, manifest_3.user_config);
    if (m || !A.valid) {
      let W = {
        source: source,
        contentHash: contentHash,
        extractedPath: extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: sourceMtimeMs
      };
      return await Le(w, source, W), {
        status: "needs-config",
        manifest: manifest_3,
        extractedPath: extractedPath,
        contentHash: contentHash,
        configSchema: manifest_3.user_config,
        existingConfig: R || {},
        validationErrors: A.valid ? [] : A.errors
      };
    }
    if (s) await ect(n, F, s, manifest_3.user_config ?? {}, c, p);
    if (i) i("Generating MCP server configuration...");
    let mcpConfig_3 = await be(manifest_3, extractedPath, _),
      z = {
        source: source,
        contentHash: contentHash,
        extractedPath: extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: sourceMtimeMs
      };
    return await Le(w, source, z), {
      manifest: manifest_3,
      mcpConfig: mcpConfig_3,
      extractedPath: extractedPath,
      contentHash: contentHash
    };
  }
  if (i) i("Generating MCP server configuration...");
  let mcpConfig_4 = await be(manifest_3, extractedPath),
    ue = {
      source: source,
      contentHash: contentHash,
      extractedPath: extractedPath,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: sourceMtimeMs
    };
  return await Le(w, source, ue), t(`Successfully loaded MCPB: ${manifest_3.name} (extracted to ${extractedPath})`), {
    manifest: manifest_3,
    mcpConfig: mcpConfig_4,
    extractedPath: extractedPath,
    contentHash: contentHash
  };
}
function hm(e) {
  return e.source;
}
function tct(e, r) {
  return e.find(item => item.repository === r || item.source === r);
}
function QP(e, r) {
  if (Ngt()) return Promise.resolve({});
  let {
      optionValues: optionValues
    } = Ne(),
    i = optionValues.get(e);
  if (i !== void 0) return i;
  let s = Fo(e, r);
  return optionValues.set(e, s), s.catch(() => {
    if (optionValues.get(e) === s) optionValues.delete(e);
  }), s;
}
async function Fo(e, r) {
  let n = ege(e).options ?? {},
    i = (await qn().readAsync(r))?.pluginSecrets,
    s = [...Kx(e).toReversed(), e].reduce((acc, item) => ({
      ...acc,
      ...i?.[item]
    }), {});
  return {
    ...n,
    ...s
  };
}
function Lwe() {
  Ne().optionValues.clear();
}
async function lPe(e, r, n, i, s) {
  let m = {},
    c = {};
  for (let [y, S] of Object.entries(r)) if (n[y]?.sensitive === !0) c[y] = String(S);else m[y] = S;
  let p = new Set(Object.keys(c)),
    g = new Set(Object.keys(m)),
    h = await qn().mutate(y => {
      let S = HHt(y.pluginSecrets, e),
        E = S.replaced.length === 0 ? y.pluginSecrets?.[S.written] : [...S.replaced.toReversed(), S.written].reduce((acc, item) => ({
          ...acc,
          ...y.pluginSecrets?.[item]
        }), {}),
        M = E ? Vk(E, (O, P) => !g.has(P)) : void 0,
        C = M && E && Object.keys(M).length !== Object.keys(E).length;
      if (Object.keys(c).length === 0 && !C && S.replaced.length === 0) return y;
      return {
        ...y,
        pluginSecrets: {
          ...Vk(y.pluginSecrets ?? {}, (O, P) => !S.replaced.includes(P)),
          [S.written]: {
            ...M,
            ...c
          }
        }
      };
    }, s);
  if (!h.success) {
    let y = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw t(y.message, {
      level: "error"
    }), y;
  }
  if (h.warning) t(`Plugin secrets save warning: ${h.warning}`, {
    level: "warn"
  });
  let w = me("userSettings")?.pluginConfigs,
    b = {};
  for (let y of ale(e)) {
    let S = Object.keys(w?.[y]?.options ?? {}).filter(item => p.has(item)),
      E = Object.fromEntries(S.map(item => [item, void 0])),
      M = y === e ? m : {};
    if (Object.keys(M).length > 0 || S.length > 0) b[y] = {
      options: {
        ...M,
        ...E
      }
    };
  }
  if (Object.keys(b).length > 0) {
    let y = await In("userSettings", {
      pluginConfigs: Lo(w, e, b)
    }, void 0, i);
    if (y.error) throw t(`Failed to save plugin options for ${e} to settings.json: ${d(y.error)}`, {
      level: "error"
    }), Error(`Failed to save plugin options for ${e}: ${y.error.message}`);
  }
  Lwe();
}
async function Rvs(e) {
  let unreadable = [],
    n = new Set();
  dr();
  let i = me("userSettings");
  if (i === null || i === void 0) {
    let s = fn("userSettings");
    if (s !== void 0 && (await BW(s)) !== "gone") unreadable.push("settings_unreadable");
  }
  for (let s of Object.keys(i?.pluginConfigs ?? {})) n.add(s);
  try {
    let s = qn(),
      m = s.readAsyncStrict ? await s.readAsyncStrict(e, {
        inaccessibleAs: "failure"
      }) : await s.readAsync(e);
    if (m === wl) unreadable.push("secrets_unreadable");else for (let c of Object.keys(m?.pluginSecrets ?? {})) {
      let p = c.indexOf("/");
      n.add(p === -1 ? c : c.slice(0, p));
    }
  } catch {
    unreadable.push("secrets_unreadable");
  }
  return {
    ids: [...n],
    unreadable: unreadable
  };
}
async function Je(e) {
  dr();
  let r = me("userSettings");
  if (r !== null && r !== void 0) return r;
  let n = fn("userSettings");
  if (n === void 0 || (await BW(n)) === "gone") return;
  return t(`deletePluginOptions: the user settings file (${n}) is there and could not be read, so options of ${e} may remain in it`, {
    level: "warn"
  }), "unreadable";
}
async function Avs(e, r, n, i) {
  let s = !0,
    m = await Je(e);
  if (m === "unreadable") s = !1, i?.push("settings_unreadable");
  let c = m === "unreadable" ? void 0 : m,
    p = ale(e).filter(item => c?.pluginConfigs?.[item] !== void 0);
  if (p.length > 0) {
    let pluginConfigs_2 = Object.fromEntries(p.map(item => [item, void 0])),
      {
        error: error_3
      } = await In("userSettings", {
        pluginConfigs: pluginConfigs_2
      }, void 0, r);
    if (error_3) t(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${error_3.message}`, {
      level: "warn"
    }), s = !1, i?.push("settings_write_failed");else {
      let y = await Je(e);
      if (y === "unreadable") s = !1, i?.push("settings_unreadable");
      let S = y === "unreadable" ? void 0 : y?.pluginConfigs;
      if (p.some(item => S?.[item] !== void 0)) t(`deletePluginOptions: settings.pluginConfigs[${e}] still reads back after a write that reported no error`, {
        level: "warn"
      }), s = !1, i?.push("settings_remain");
    }
  }
  let g = [e, ...Kx(e)],
    h = w => g.some(item => w === item || w.startsWith(`${item}/`));
  try {
    let w = qn();
    if (!(await w.mutate(y => {
      if (!y.pluginSecrets) return y;
      let S = Object.entries(y.pluginSecrets).filter(([E]) => !h(E));
      if (S.length === Object.keys(y.pluginSecrets).length) return y;
      return {
        ...y,
        pluginSecrets: S.length > 0 ? Object.fromEntries(S) : void 0
      };
    }, n)).success) t(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
      level: "warn"
    }), s = !1, i?.push("secrets_write_failed");else {
      let y = w.readAsyncStrict ? await w.readAsyncStrict(n, {
        inaccessibleAs: "failure"
      }) : await w.readAsync(n);
      if (y === wl || Object.keys(y?.pluginSecrets ?? {}).some(h)) t(`deletePluginOptions: after the delete, secure storage could not be read or still holds pluginSecrets for ${e}`, {
        level: "warn"
      }), s = !1, i?.push(y === wl ? "secrets_unreadable" : "secrets_remain");
    }
  } catch (error) {
    t(`deletePluginOptions: storage lock unavailable for ${e}: ${d(error)}`, {
      level: "warn"
    }), s = !1, i?.push("secrets_write_failed");
  }
  return Lwe(), s;
}
async function fho(e, r, n, i, s) {
  {
    let optionsCarried = !0,
      targetHadOwn = !1,
      {
        error: error_4
      } = await ca("userSettings", C => {
        let O = C?.pluginConfigs?.[e];
        if (O === void 0) return null;
        if (C?.pluginConfigs?.[r] !== void 0) return targetHadOwn = !0, null;
        return {
          pluginConfigs: {
            [r]: O
          }
        };
      }, void 0, i);
    if (error_4) optionsCarried = !1, t(`copyPluginOptions: failed to copy settings.pluginConfigs[${e}]: ${error_4.message}`, {
      level: "warn"
    });
    if (!optionsCarried) return t(`copyPluginOptions: the settings write failed, so the secrets of ${e} were not copied`, {
      level: "warn"
    }), Lwe(), {
      optionsCarried: optionsCarried,
      secretsCarried: !1,
      oldDataDirDisposable: !1,
      dataDirCopied: !1,
      targetHadOwn: targetHadOwn
    };
    let secretsCarried = !0;
    try {
      if (!(await qn().mutate(O => {
        if (!O.pluginSecrets) return O;
        let P = {};
        for (let [T, D] of Object.entries(O.pluginSecrets)) {
          let V = et(T, e, r);
          if (V === void 0) continue;
          if (O.pluginSecrets[V] === void 0) P[V] = D;else targetHadOwn = !0;
        }
        return Object.keys(P).length === 0 ? O : {
          ...O,
          pluginSecrets: {
            ...O.pluginSecrets,
            ...P
          }
        };
      }, s)).success) secretsCarried = !1, t(`copyPluginOptions: failed to copy pluginSecrets for ${e}`, {
        level: "warn"
      });
    } catch {
      secretsCarried = !1, t(`copyPluginOptions: secure storage unavailable for ${e}`, {
        level: "warn"
      });
    }
    if (!optionsCarried || !secretsCarried) return Lwe(), {
      optionsCarried: optionsCarried,
      secretsCarried: secretsCarried,
      oldDataDirDisposable: !1,
      dataDirCopied: !1,
      targetHadOwn: targetHadOwn
    };
    let h = ag(e),
      w = ag(r),
      b = `${w}.switching-${process.pid}`,
      oldDataDirDisposable = !1,
      dataDirCopied = !1,
      dataDirKeptReason,
      M;
    try {
      let C = await BW(h);
      if (C === "gone") oldDataDirDisposable = !0;else if (C === "unreadable") dataDirKeptReason = "copy-failed", t(`copyPluginOptions: the data directory of ${e} could not be examined; it is kept and was not copied`, {
        level: "warn"
      });else if (!(M = await re(h, {
        bigint: !0
      })).isDirectory() || !(await GB(ae(h), ie(h)))) dataDirKeptReason = "copy-failed", t(`copyPluginOptions: the data directory of ${e} is not a real directory; it is kept and was not copied`, {
        level: "warn"
      });else {
        let O = await Do(w).then(() => {
          return;
        }, P => G(P) ? void 0 : k(P));
        if (O === void 0) {
          await za(b);
          let P = await GB(ae(h), ie(h)),
            T = await re(h, {
              bigint: !0
            });
          if (!P || !T.isDirectory() || T.dev !== M?.dev || T.ino !== M?.ino) throw Error("the old data directory is not the real directory first seen");
          await n(h, b, h, b, h, !0, new Set(), void 0, !1, !0);
          let D = await re(h, {
            bigint: !0
          });
          if (!D.isDirectory() || !(await GB(ae(h), ie(h))) || D.dev !== T.dev || D.ino !== T.ino) throw Error("the old data directory changed during the copy");
          if (!(await re(b)).isDirectory() || !(await GB(ae(b), ie(b)))) throw Error("the staging folder is not a real directory");
          if (await ns(b, w), !(await re(w)).isDirectory() || !(await GB(ae(w), ie(w)))) throw await fk(w).catch(() => {}), Error("what stands at the target after the move is not a real directory");
          oldDataDirDisposable = !0, dataDirCopied = !0;
        } else dataDirKeptReason = O === "ENOTEMPTY" || O === "EEXIST" || O === "ENOTDIR" ? "target-had-own" : "copy-failed";
      }
    } catch (error) {
      dataDirKeptReason = "copy-failed", t(`copyPluginOptions: failed to copy the data directory of ${e}: ${d(error)}`, {
        level: "warn"
      }), await za(b).catch(() => {});
    }
    return Lwe(), {
      optionsCarried: optionsCarried,
      secretsCarried: secretsCarried,
      oldDataDirDisposable: oldDataDirDisposable,
      dataDirCopied: dataDirCopied,
      dataDirKeptReason: dataDirKeptReason,
      targetHadOwn: targetHadOwn
    };
  }
  return {
    optionsCarried: !1,
    secretsCarried: !1,
    oldDataDirDisposable: !1,
    dataDirCopied: !1,
    targetHadOwn: !1
  };
}
function et(e, r, n) {
  {
    let i = `${r}/`;
    return e === r ? n : e.startsWith(i) ? `${n}/${e.slice(i.length)}` : void 0;
  }
  return;
}
async function xvs(e, r) {
  {
    let n = me("userSettings")?.pluginConfigs;
    if (n?.[e] !== void 0 && n[r] !== void 0) return !0;
    try {
      let i = (await qn().readAsync())?.pluginSecrets ?? {};
      return Object.keys(i).some(item => {
        let m = et(item, e, r);
        return m !== void 0 && i[m] !== void 0;
      });
    } catch {
      return t(`wouldTargetKeepOwnPluginOptions: secure storage could not be read (switch from ${e}), so the answer is 'unknown'`, {
        level: "warn"
      }), "unknown";
    }
  }
  return !1;
}
async function dPe(e, r) {
  let userConfig_2 = e.manifest.userConfig;
  if (!userConfig_2 || Object.keys(userConfig_2).length === 0) return {};
  let i = await QP(hm(e), r),
    s = {};
  for (let [m, c] of Object.entries(userConfig_2)) {
    let p = no(i, m);
    if (p === void 0 || p === "" || c.sensitive !== !0 && !N9({
      [m]: p
    }, {
      [m]: c
    }).valid) s[m] = c;
  }
  return s;
}
function mho(e, r) {
  let n = e?.options;
  return n !== void 0 && !(typeof r === "string" && n.includes(r));
}
function x3e(e, r) {
  let n = {};
  for (let [s, m] of Object.entries(r)) {
    if (m.required && m.default === void 0) continue;
    n[s] = m.default ?? "";
  }
  let i = Vk(e, (s, m) => {
    let c = r[m]?.options;
    if (c === void 0 || !mho(r[m], s)) return !0;
    return t(`plugin option ${m} holds a value that is not one of ${c.join(", ")}; it reads as unset`, {
      level: "warn"
    }), !1;
  });
  return {
    ...n,
    ...i
  };
}
function sie(e, r) {
  let n = s => s.replace(/\\/g, "/"),
    i = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => n(r.path));
  if (i = i.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => n(so() ?? Qr())), r.source) {
    let {
      source: source_2,
      dataDir: dataDir
    } = r;
    i = i.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => {
      let c = tt({
        source: source_2,
        dataDir: dataDir
      }, R1e);
      if (c === null) throw new Ue();
      return n(c);
    });
  }
  return i;
}
class Ue extends Error {
  name = "PluginDataDirUnknownError";
  constructor() {
    super("CLAUDE_PLUGIN_DATA cannot be filled in: the plugin is on another machine, and its data folder there did not come with it");
  }
}
function Pvs(e, r) {
  if (r.dataDir !== null) return !1;
  try {
    return sie(e, r), !1;
  } catch (error) {
    return error instanceof Ue;
  }
}
function tt(e, r) {
  return e.dataDir === void 0 ? r(e.source) : e.dataDir;
}
var Qe = "${CLAUDE_";
function Ovs(e, r, n = "") {
  let i = e.split(Qe).length - 1;
  if (i === 0) return 0;
  let s = so() ?? yu() ?? "";
  return r.path.includes(Qe) || s.includes("$") || r.dataDir?.includes("$") ? 1 / 0 : i * 3 * Math.max(r.path.length, s.length, (tt(r, ag) ?? "").length, n.length);
}
function KIt(e, r, {
  missingKey = "throw"
} = {}) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (i, s) => {
    let m = no(r, s);
    if (m === void 0) {
      if (missingKey === "literal") return i;
      throw Error(`Plugin option "${s}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${s}".`);
    }
    return String(m);
  });
}
function YIt(e, r) {
  try {
    return KIt(e, r) !== e;
  } catch {
    return !0;
  }
}
function ekr(e, r, n, i) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (s, m) => {
    if (n[m]?.sensitive === !0) return `[sensitive option '${m}' not available in skill content]`;
    let c = no(r, m);
    if (c === void 0) return s;
    let p = String(c);
    return i ? i(p) : p;
  });
}
function Lo(e, r, n) {
  let i = HHt(e, r);
  if (i.replaced.length === 0) return n;
  let s = [...i.replaced.toReversed(), i.written],
    m = Vk(n, (g, h) => !i.replaced.includes(h)),
    options = {
      ...Vk(s.reduce((acc, item) => ({
        ...acc,
        ...e?.[item]?.options,
        ...(item === i.written ? void 0 : n[item]?.options)
      }), {}), g => g !== void 0),
      ...m[i.written]?.options
    },
    p = L(s.flatMap(item => Object.keys(e?.[item]?.mcpServers ?? {})));
  return {
    ...m,
    ...Object.fromEntries(i.replaced.map(item => [item, void 0])),
    [i.written]: {
      options: options,
      ...(p.length === 0 ? {} : {
        mcpServers: Object.fromEntries(p.map(item => [item, s.reduce((acc, w) => ({
          ...acc,
          ...e?.[w]?.mcpServers?.[item]
        }), {})]))
      })
    }
  };
}
var ikr = e => vZt({
  pluginName: e.name,
  pluginStorageId: hm(e)
});
var Dvs = (e, r, n) => `${e}: ${r} did not answer within ${n}ms`;
var Lvs = "the plugin is unloaded; /reload-plugins brings it back";
function Y({
  members: members,
  event: event,
  e: n,
  hookOrigin: hookOrigin,
  origin: origin,
  raise: raise,
  floors: floors,
  cutAt: cutAt,
  gestureAt: gestureAt,
  kind: kind
}) {
  let [w] = members;
  if (hookOrigin) t(`hooks module ${JIt(members)}: ${event}${kind} nested in ${skr(hookOrigin)}`);
  let b = members.flatMap(item => {
    let registrations = [...(item.leftOut ?? [])],
      {
        environmentId: environmentId
      } = item;
    return registrations.length > 0 ? [{
      environmentId: environmentId,
      registrations: registrations
    }] : [];
  });
  return {
    id: w ? w.hopKey.nextDispatchId() : 0,
    event: event,
    payload: n,
    environments: members.map(item => item.environmentId),
    leftOut: b.length === 0 ? void 0 : b,
    origin: origin,
    hookOrigin: hookOrigin,
    raise: raise,
    floors: floors.length === 0 ? void 0 : floors,
    cutAt: cutAt,
    ...(gestureAt !== void 0 && {
      gestureAt: gestureAt
    })
  };
}
function Q(e, r, n) {
  if (!n || n.length === 0) return e;
  let i = nct().get(n) ?? [],
    s = Date.now(),
    m = S => i[S]?.isLent !== !0 || i[S].isHeld === !0,
    {
      caller: caller,
      above: above
    } = Wt(n.filter((item, index) => m(index) || s < (i[index]?.until ?? 0)), e.name),
    g = (S, E) => S === "every" || S.includes(E),
    h = xe(n.slice(0, -1).filter((item, index) => m(index)), e.name),
    leftOut = e.registrationsFor(r).filter(item => g(caller, item) || g(h, item));
  if (leftOut.length === 0) return e;
  let y = `origin ${skr(n)}`;
  if (!e.hooks(r, leftOut)) {
    let S = caller === "every" || above === "every";
    t(`hooks module ${e.label} ${r} skipped: re-entry (` + (S ? `the plugin's own code raised it; ${y})` : `its own frame is being dispatched; ${y})`));
    return;
  }
  return t(`hooks module ${e.label} ${r}: hooks ${leftOut.join(", ")} left out for re-entry (${y})`), {
    ...e,
    leftOut: leftOut,
    hooks: (S, E = []) => e.hooks(S, [...leftOut, ...E]),
    catches: (S, E = [], M) => e.catches(S, [...leftOut, ...E], M),
    matcherFor: (S, E = []) => e.matcherFor(S, [...leftOut, ...E])
  };
}
async function ot({
  members: members_2,
  event: event_2,
  hookOrigin: hookOrigin_2,
  signal: signal
}) {
  let s = members_2.find(item => item.status().kind === "dead")?.hopKey.replaced?.();
  if (s === void 0) return members_2;
  return t(`hooks module ${members_2.map(item => item.label).join(", ")}: ${event_2} waits for the hooks worker's replacement`), await new Promise(m => {
    signal.addEventListener("abort", () => m(), {
      once: !0
    }), s.then(m, m);
  }), members_2.flatMap(item => {
    let c = Ne().loadedModules.find(h => h.name === item.name);
    if (!(item.status().kind !== "live" && c !== void 0 && c.environmentId !== item.environmentId)) return [item];
    let g = c.hooks(event_2) && jc(c) ? Q(c, event_2, hookOrigin_2) : void 0;
    return g === void 0 ? [] : [g];
  });
}
async function rt({
  hop: hop,
  dispatchId: dispatchId,
  members: members_3,
  error: error_5,
  called: called,
  beneath: beneath
}) {
  let {
      event: event_3,
      e: e_2,
      signal: signal_2
    } = hop,
    h = E => E.filter(item => te(item, event_3, e_2)),
    reason = d(error_5),
    members_4 = $e(h(members_3), reason),
    y = members_4[0]?.hopKey,
    S = y?.kept;
  while (members_4.length > 0 && !signal_2.aborted) {
    let members_5 = h(Z(await ot({
        ...hop,
        members: members_4
      }), event_3)),
      M = members_5[0]?.hopKey,
      C = members_5.find(item => item.name === S?.plugin);
    if (M === void 0 || signal_2.aborted) break;
    t(`hooks module ${JIt(members_5)}: .catch asked in the replacement after the hooks worker ended during ${event_3}`);
    for (let O of members_5) O.enter();
    try {
      let O = await M.dispatch({
          ...Y({
            ...hop,
            members: members_5,
            kind: ""
          }),
          ended: {
            reason: reason,
            called: called(),
            ...(C !== void 0 && {
              kept: C.environmentId
            })
          }
        }, beneath, signal_2),
        P = C !== void 0 && S !== void 0 && y?.isKeptVerdict?.(dispatchId, O.unmatched !== !0) === !0;
      for (let T of members_5) if (O.answered?.includes(T.environmentId) === !0) oj(T.name, `the hooks worker was replaced during ${event_3}; ${T.name}'s .catch answered in place of its hook`);
      if (P) M.unloadCrashed?.(C.environmentId, S);
      return O;
    } catch (error) {
      reason = d(error), members_4 = $e(members_5, reason), t(`hooks module ${JIt(members_5)}: .catch not heard after the hooks worker ended during ${event_3}: ${reason}` + (members_4.length > 0 ? "; asked again of whoever stands" : ""), {
        level: "error"
      });
    } finally {
      for (let O of members_5) O.leave();
    }
  }
  if (members_4.length > 0) t(`hooks module ${JIt(members_4)}: no .catch is asked after the hooks worker ended during ${event_3}: ` + (signal_2.aborted ? "its caller is gone" : "no replacement that may be waited for holds its hook"), {
    level: "error"
  });
  return;
}
async function akr(hop_2) {
  let {
      event: event_4,
      e: e_3,
      call: call,
      signal: signal_3,
      floors: floors_2
    } = hop_2,
    members_6 = he(hop_2.members, event_4, e_3),
    p = members_6[0]?.hopKey;
  if (!p) return call(e_3, void 0, floors_2);
  let g,
    h = (M, C, O) => (g = call(M, C, O), g),
    w = Y({
      ...hop_2,
      members: members_6,
      kind: ""
    }),
    b = performance.now();
  for (let M of members_6) M.enter();
  let y;
  try {
    y = await p.dispatch({
      ...w,
      caughtBy: members_6.filter(item => te(item, event_4, e_3)).map(item => item.environmentId)
    }, h, signal_3);
  } catch (error_6) {
    let C = await rt({
      hop: hop_2,
      dispatchId: w.id,
      members: members_6,
      error: error_6,
      called: () => g !== void 0,
      beneath: (O, P, T) => g ?? h(O, P, T)
    });
    if (C === void 0) throw error_6;
    y = C;
  } finally {
    for (let M of members_6) M.leave();
  }
  let E = typeof e_3 === "object" && "requestId" in e_3 && typeof e_3.requestId === "string" ? ` key=${e_3.requestId}` : "";
  if (t(`hooks module ${JIt(members_6)} ${event_4} settled in ${(performance.now() - b).toFixed(1)}ms (${p.kind} hop, next() included)${E}`), y.withheld === !0) hop_2.withheld?.();
  return nt(y.result);
}
function Se(e, r, n) {
  e.leave(), t(`hooks module ${e.label} ${r} settled in ${(performance.now() - n).toFixed(1)}ms (native link, next() included)`);
}
function Ee({
  loaded: loaded,
  event: event_5,
  origin: origin_2
}, i) {
  let s = Z([loaded], event_5).length === 1 && okr(loaded, event_5, i);
  if (s && origin_2) t(`hooks module ${loaded.label} (native): ${event_5} nested in ` + skr(origin_2));
  return s;
}
function zo(e) {
  let {
    loaded: loaded_2,
    event: event_6,
    origin: i
  } = e;
  if (loaded_2.link === void 0) throw new Ie(`${loaded_2.name}: ${event_6}: not a native module; it runs in a hop`);
  let s = loaded_2.link({
      event: event_6,
      leftOut: loaded_2.leftOut,
      hookOrigin: i,
      gestureAt: e.gestureAt
    }),
    m = s.catch;
  async function c(h) {
    let w = performance.now();
    loaded_2.enter();
    try {
      return await h();
    } finally {
      Se(loaded_2, event_6, w);
    }
  }
  async function p(h, w) {
    loaded_2.enter();
    try {
      return await m?.(h, w);
    } finally {
      loaded_2.leave();
    }
  }
  let run = (h, w, b) => Ee({
    loaded: loaded_2,
    event: event_6,
    origin: i
  }, h) ? c(() => s.run(h, w, b)) : w(h);
  return Wo({
    ...s,
    run: run,
    ...(m !== void 0 && {
      catch: p
    })
  });
}
function it(e) {
  let {
      event: event_7,
      e: e_4,
      open: open,
      signal: signal_4,
      floors: floors_3
    } = e,
    members_7 = he(e.members, event_7, e_4),
    p = members_7[0]?.hopKey;
  if (!p) return open(e_4, void 0, floors_3);
  let g = (b, y, S) => wIe(open(b, y, S)),
    h = performance.now();
  for (let b of members_7) b.enter();
  let w = p.dispatchStream(Y({
    ...e,
    members: members_7,
    kind: " stream"
  }), g, signal_4);
  return async function* () {
    try {
      let b = yield* wIe(w);
      return nt(b);
    } finally {
      for (let b of members_7) b.leave();
      t(`hooks module ${JIt(members_7)} ${event_7} stream settled in ${(performance.now() - h).toFixed(1)}ms (${p.kind} hop, next() included)`);
    }
  }();
}
function qo(e) {
  let {
    loaded: loaded_3,
    event: event_8,
    origin: i
  } = e;
  if (loaded_3.streamLinks === void 0) throw new Ie(`${loaded_3.name}: ${event_8}: not a native module; it runs in a hop`);
  function s(m) {
    let c = performance.now();
    return loaded_3.enter(), async function* () {
      try {
        return yield* m;
      } finally {
        Se(loaded_3, event_8, c);
      }
    }();
  }
  return loaded_3.streamLinks({
    event: event_8,
    leftOut: loaded_3.leftOut,
    hookOrigin: i
  }).map(item => {
    let c = item.catch;
    return {
      ...item,
      run: async (p, g, h) => Ee({
        loaded: loaded_3,
        event: event_8,
        origin: i
      }, p) ? s(await item.run(p, g, h)) : g(p),
      ...(c !== void 0 && {
        catch: async (p, g, h) => s(await c(p, g, h))
      })
    };
  });
}
var Oe = (e, r, n) => e.map(item => {
  let s = r.get(item);
  if (s === void 0) throw new Ie(`${n}: a hop member is not one of these handlers`);
  return s;
});
var st = ({
  loaded: loaded_4,
  event: event_9,
  origin: n,
  raise: raise_2,
  gestureAt: gestureAt_2,
  owners: owners,
  withheld: withheld
}) => ({
  name: loaded_4.name,
  tier: loaded_4.tier,
  ...($Io(loaded_4.args.modulePath) && {
    answersForEngine: !0
  }),
  ...(withheld && {
    withheld: withheld
  }),
  run: (e_5, g, {
    call: call_2,
    floors: floors_4,
    cutAt: cutAt_2
  }) => akr({
    members: [loaded_4],
    event: event_9,
    e: e_5,
    call: call_2,
    signal: g.signal,
    hookOrigin: n,
    raise: raise_2,
    gestureAt: gestureAt_2,
    withheld: withheld,
    origin: g.origin,
    floors: floors_4,
    cutAt: cutAt_2
  }),
  hop: {
    key: loaded_4.hopKey,
    run: p => akr({
      members: Oe(p.members, owners, event_9),
      event: event_9,
      e: p.e,
      call: p.call,
      signal: p.signal,
      hookOrigin: n,
      raise: raise_2,
      gestureAt: gestureAt_2,
      withheld: withheld,
      origin: p.origin,
      floors: p.floors,
      cutAt: p.cutAt
    })
  }
});
function at(e) {
  return e.loaded.link !== void 0 ? zo(e) : st(e);
}
function Me(e) {
  let {
    loadedModules: loadedModules,
    moduleSeats: moduleSeats
  } = Ne();
  return loadedModules.find(item => item.name === e)?.tier ?? moduleSeats.get(e) ?? "user";
}
var QIt = e => OBs.some(item => item === Me(e));
function _ho(e, r, n) {
  let i = e.matcherFor(r);
  if (i === void 0) return !0;
  try {
    if (Ogt(i, n, RIe(r))) return !0;
  } catch (error) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${d(error)}); the hop decides`), !0;
  }
  return X(e, r, n), !1;
}
function ft(e, r, {
  keys: keys,
  e: e_6
}) {
  let s = e.matcherFor(r);
  if (s === void 0 || !Gy(e_6)) return !1;
  try {
    let c = RIe(r),
      p = keys.some(item => Object.hasOwn(e_6, item) && !L4n(s, {
        [item]: e_6[item]
      }, c));
    if (p) X(e, r, e_6);
    return p;
  } catch (error) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${d(error)}); the hop decides`), !1;
  }
}
function cUe(e, r, {
  only: only,
  e: e_7,
  among: among,
  pinned: pinned
} = {}) {
  let c = (among ?? Ne().loadedModules).flatMap(item => {
    if (!(item.hooks(e) && item.name === (only ?? item.name) && jc(item))) return [];
    let w = Q(item, e, r);
    return w === void 0 || pinned !== void 0 && ft(w, e, pinned) ? [] : [w];
  });
  if (e_7 === void 0) return c;
  let p = c.findIndex(item => _ho(item, e, e_7));
  return p === -1 ? [] : c.slice(p);
}
function mt({
  event: event_10,
  e: e_8,
  origin: origin_3,
  only: only_2
}) {
  let s = ge(cUe(event_10, origin_3, {
    only: only_2
  }), event_10, e_8).filter(item => item.link === void 0 && item.hopKey.isDeclared?.(item.name) !== !1 && te(item, event_10, e_8)).map(item => item.name);
  return s.length === 0 ? void 0 : new Ie(`${event_10} refused: the hooks worker is being replaced, and a hook on it with a .catch (${s.join(", ")}) cannot be asked until the reload is in`);
}
import { AsyncLocalStorage as mr } from "async_hooks";
var kZt = new mr();
function lkr(e, r) {
  let n = {
      isOver: !1
    },
    i = e.run(n, r),
    s = () => {
      n.isOver = !0;
    };
  return i.then(s, s), i;
}
var tJs = e => lkr(kZt, e);
var bho = () => kZt.getStore()?.isOver === !1;
function tUn(e, r) {
  let n = [...Ne().hooksRespawns],
    i = n.length > 0 && bho(),
    s = i ? mt(e) : void 0;
  if (s !== void 0) return t(s.message, {
    level: "error"
  }), Promise.reject(s);
  if (n.length === 0 || i) return;
  let m = Promise.all(n).then(() => {
    return;
  });
  return (r !== void 0 ? ka(m, r, () => F0r(r)) : m).then(() => tUn(e, r));
}
function EZt(e, r) {
  let n = Ne();
  return n.hooksRespawns.size > 0 && n.loadedModules.some(item => item.link === void 0 && item.hooks(e.event)) ? tUn(e, r) : void 0;
}
function Sho(e, r) {
  let i = e.event === "classic.SessionEnd" ? void 0 : EZt(e, r);
  return i !== void 0 && r !== void 0 ? i.catch(m => Promise.reject(r.aborted ? Yme(r) : m)) : i;
}
function sD(event_11, origin_4, n = {}) {
  let i = [],
    owners_2 = new Map();
  for (let loaded_5 of cUe(event_11, origin_4, n)) {
    let c = at({
      loaded: loaded_5,
      event: event_11,
      origin: origin_4,
      raise: n.raise,
      gestureAt: n.gestureAt,
      owners: owners_2,
      withheld: n.withheld
    });
    owners_2.set(c, loaded_5), i.push(c), n.drawn?.(c, loaded_5);
  }
  return i;
}
function Hq(e, r, n) {
  let i = RIe(e);
  return Ne().loadedModules.filter(item => {
    let m = item.hooks(e) && jc(item) ? Q(item, e, n) : void 0;
    if (m === void 0) return !1;
    return L4n(m.matcherFor(e), r, i);
  }).map(item => item.name);
}
var nt = e => e;
var Wo = e => e;
var pt = e => [...e];
function VZ(e) {
  let plugin_2 = e?.map(P3e).findLast(n => n !== void 0);
  if (plugin_2 === void 0) return Rje;
  return Object.freeze({
    plugin: plugin_2,
    tier: Me(plugin_2)
  });
}
function Nvs(e) {
  let {
    promise: r,
    resolve: resolve
  } = Promise.withResolvers();
  return e.add(r), {
    respawn: r,
    loaded: () => {
      e.delete(r), resolve();
    }
  };
}
var lt = (e, r) => ({
  name: e.loaded.name,
  tier: e.loaded.tier,
  run: (e_9, i, {
    open: open_2,
    floors: floors_5
  }) => it({
    members: [e.loaded],
    event: e.event,
    e: e_9,
    open: open_2,
    signal: i.signal,
    hookOrigin: e.origin,
    raise: e.raise,
    origin: i.origin,
    floors: floors_5
  }),
  hop: {
    key: e.loaded.hopKey,
    run: ({
      members: members_8,
      e: e_10,
      open: open_3,
      signal: signal_5,
      origin: origin_5,
      floors: floors_6
    }) => it({
      members: Oe(members_8, r, e.event),
      event: e.event,
      e: e_10,
      open: open_3,
      signal: signal_5,
      hookOrigin: e.origin,
      raise: e.raise,
      origin: origin_5,
      floors: floors_6
    })
  }
});
function Fvs(event_12, origin_6, n = {}) {
  let i = new Map();
  return cUe(event_12, origin_6, n).flatMap(s => {
    if (s.streamLinks !== void 0) return pt(qo({
      loaded: s,
      event: event_12,
      origin: origin_6
    }));
    let m = lt({
      loaded: s,
      event: event_12,
      origin: origin_6,
      raise: n.raise,
      gestureAt: void 0
    }, i);
    return i.set(m, s), [m];
  });
}
var nJs = 3;
var Hvs = e => `${e}: the op was aborted: the plugin's environment was unloaded`;
export { X$n, C3e, R3e, SZt, oD, Cvs, Dwe, ect, N9, A3e, hm, tct, QP, Lwe, lPe, Rvs, Avs, fho, xvs, dPe, mho, x3e, sie, Pvs, Ovs, KIt, YIt, ekr, J$n, iie, XIt, gho, tkr, nkr, rkr, qpe, Q$n, dUe, F9, oj, okr, Z$n, hho, eUn, P3e, Ivs, nct, QXs, skr, ZXs, wZt, yho, eJs, JIt, vZt, Mvs, ikr, Dvs, Lvs, akr, QIt, _ho, cUe, kZt, lkr, tJs, bho, tUn, EZt, Sho, sD, Hq, VZ, Nvs, Fvs, nJs, Hvs };