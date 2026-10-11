// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { kr, Fo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { P, st, te, l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { J, ce, Dp, ZJ, D$, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { z1 } from "B:/~BUN/root/chunk-qqgpf856.js";
import { CN, tl } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { vl, Un } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { pa } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Sne } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { wr, he, ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { De, DNt } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { iCe } from "B:/~BUN/root/chunk-hfe3cbfz.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { gN, kc, xNt, MLr, DLr, vdt, NLr, Fhe } from "B:/~BUN/root/chunk-n5swsemr.js";
import { fFe, Hhe, PLr } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { jCe, Jle } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { IB, ER, OB } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { rX } from "B:/~BUN/root/chunk-zfjnfpf7.js";
import { cn } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { o, E, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { isAbsolute as Re, normalize as Ne } from "path";
import { inflateRawSync as Ue } from "zlib";
var U = {
  MAX_FILE_SIZE: 536870912,
  MAX_TOTAL_SIZE: 1073741824,
  MAX_FILE_COUNT: 1e5,
  MAX_COMPRESSION_RATIO: 50
};
function Zen(e) {
  if (z1(e)) return !1;
  for (let n of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(n)) return !1;
  let r = Ne(e);
  if (Re(r)) return !1;
  return !0;
}
function je(e, r) {
  r.fileCount++;
  let error;
  if (r.fileCount > U.MAX_FILE_COUNT) error = `Archive contains too many files: ${r.fileCount} (max: ${U.MAX_FILE_COUNT})`;
  let i = cn(e.name, 120);
  if (!Zen(e.name)) error = `Unsafe file path detected: "${i}". Path traversal or absolute paths are not allowed.`;
  let s = e.originalSize || 0;
  if (s > U.MAX_FILE_SIZE) error = `File "${i}" is too large: ${Math.round(s / 1024 / 1024)}MB (max: ${Math.round(U.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (r.totalUncompressedSize += s, r.totalUncompressedSize > U.MAX_TOTAL_SIZE) error = `Archive total size is too large: ${Math.round(r.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(U.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let a = r.totalUncompressedSize / r.compressedSize;
  if (a > U.MAX_COMPRESSION_RATIO) error = `Suspicious compression ratio detected: ${a.toFixed(1)}:1 (max: ${U.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return error ? {
    isValid: !1,
    error: error
  } : {
    isValid: !0
  };
}
async function zDe(e) {
  let r = {
      fileCount: 0,
      totalUncompressedSize: 0,
      compressedSize: e.length,
      errors: []
    },
    n = Ye(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), i => {
      let s = je(i, r);
      if (!s.isValid) throw new P(s.error, "MCPB zip entry validation failed");
    });
  return t(`Zip extraction completed: ${r.fileCount} files, ${Math.round(r.totalUncompressedSize / 1024)}KB uncompressed`), n;
}
var Be = 101010256,
  Ve = 101075792,
  ze = 117853008,
  Ke = 33639248,
  We = 65557,
  Ge = 2048,
  Ze = 0,
  Xe = 8;
function R(e) {
  return e === void 0 ? Error("invalid zip data") : new P(`invalid zip data: ${e}`, "invalid zip data");
}
function I(e, r) {
  if (r + 2 > e.length) throw R();
  return e[r] | e[r + 1] << 8;
}
function A(e, r) {
  if (r + 4 > e.length) throw R();
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16 | e[r + 3] << 24) >>> 0;
}
function de(e, r) {
  return A(e, r) + A(e, r + 4) * 4294967296;
}
function qe(e) {
  let r = "";
  for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode(...e.subarray(n, n + 16384));
  return r;
}
function Ye(e, r) {
  let n = {},
    i = e.length - 22;
  while (i < 0 || A(e, i) !== Be) {
    if (i <= 0 || e.length - i > We) throw R();
    i--;
  }
  let s = I(e, i + 8);
  if (s === 0) return n;
  let a = A(e, i + 16),
    c = !1;
  if ((a === 4294967295 || s === 65535) && i >= 20 && A(e, i - 20) === ze) {
    let h = A(e, i - 12);
    if (h + 56 <= e.length && A(e, h) === Ve) c = !0, s = A(e, h + 32), a = A(e, h + 48);
  }
  let textDecoder = new TextDecoder();
  for (let h = 0; h < s; h++) {
    if (A(e, a) !== Ke) throw R();
    let p = I(e, a + 8),
      b = I(e, a + 10),
      g = I(e, a + 28),
      y = I(e, a + 30),
      w = I(e, a + 32),
      C = a + 46;
    if (C + g > e.length) throw R();
    let M = e.subarray(C, C + g),
      name = p & Ge ? textDecoder.decode(M) : qe(M),
      H = A(e, a + 20),
      originalSize = A(e, a + 24),
      x = A(e, a + 42),
      D = C + g;
    if (c && H === 4294967295) {
      let k = D + y,
        T = D;
      while (T + 4 <= k && I(e, T) !== 1) T += 4 + I(e, T + 2);
      if (T + 28 > k) throw R();
      originalSize = de(e, T + 4), H = de(e, T + 12), x = de(e, T + 20);
    }
    a = D + y + w, r({
      name: name,
      originalSize: originalSize
    });
    let W = x + 30 + I(e, x + 26) + I(e, x + 28);
    if (W + H > e.length) throw R();
    let q = e.subarray(W, W + H);
    if (b === Ze) {
      if (H !== originalSize) throw R("stored entry size mismatch");
      n[name] = q.slice();
    } else if (b === Xe) {
      if (H === 0 && originalSize === 0) {
        n[name] = new Uint8Array(0);
        continue;
      }
      let k;
      try {
        k = Ue(q, {
          maxOutputLength: Math.max(originalSize, 1),
          chunkSize: Math.min(Math.max(originalSize, 64), 1048576)
        });
      } catch (error) {
        let _ = error.code;
        throw R(typeof _ === "string" && _.startsWith("Z_") ? _ : "entry larger than declared");
      }
      n[name] = new Uint8Array(k.buffer, k.byteOffset, k.byteLength);
    } else throw R(`unsupported compression method ${b}`);
  }
  return n;
}
var GDe = 493;
function yPt(e) {
  let r = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    n = {},
    i = Math.max(0, r.length - 22 - 65535),
    s = -1;
  for (let m = r.length - 22; m >= i; m--) if (r.readUInt32LE(m) === 101010256) {
    s = m;
    break;
  }
  if (s < 0) return n;
  let a = r.readUInt16LE(s + 10),
    c = r.readUInt32LE(s + 16);
  for (let m = 0; m < a; m++) {
    if (c + 46 > r.length || r.readUInt32LE(c) !== 33639248) break;
    let h = r.readUInt16LE(c + 4),
      p = r.readUInt16LE(c + 28),
      b = r.readUInt16LE(c + 30),
      g = r.readUInt16LE(c + 32),
      y = r.readUInt32LE(c + 38),
      w = r.toString("utf8", c + 46, c + 46 + p);
    if (h >> 8 === 3) {
      let C = y >>> 16 & 65535;
      if (C) n[w] = C;
    }
    c += 46 + p + b + g;
  }
  return n;
}
import { createHash as ge } from "crypto";
import { chmod as tt, writeFile as ye } from "fs/promises";
import { dirname as rt, join as N } from "path";
async function Je(e) {
  let {
      McpbManifestSchema: McpbManifestSchema
    } = await import("B:/~BUN/root/chunk-q46e3vrk.js"),
    n = McpbManifestSchema.safeParse(e);
  if (!n.success) {
    let i = n.error.flatten(),
      s = [...Object.entries(i.fieldErrors).map(([a, c]) => `${a}: ${c?.join(", ")}`), ...(i.formErrors || [])].filter(Boolean).join("; ");
    throw new P(`Invalid manifest: ${s}`, "MCPB manifest schema validation failed");
  }
  return n.data;
}
async function Qe(e) {
  let r;
  try {
    r = J(e);
  } catch (error) {
    throw Error(`Invalid JSON in manifest.json: ${l(error)}`);
  }
  return Je(r);
}
async function me(e) {
  let r = new TextDecoder().decode(e);
  return Qe(r);
}
import { homedir as et } from "os";
import { join as z } from "path";
function xe(e) {
  let r = e?.platform ?? O(),
    HOME = e?.homedir ?? et(),
    i = e?.env ?? process.env,
    s = {
      HOME: HOME,
      DESKTOP: z(HOME, "Desktop"),
      DOCUMENTS: z(HOME, "Documents"),
      DOWNLOADS: z(HOME, "Downloads")
    };
  switch (r) {
    case "windows":
      {
        let a = i.USERPROFILE || HOME;
        return {
          HOME: HOME,
          DESKTOP: z(a, "Desktop"),
          DOCUMENTS: z(a, "Documents"),
          DOWNLOADS: z(a, "Downloads")
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
var ot = f(() => u({
  source: o(),
  contentHash: o(),
  extractedPath: o(),
  cachedAt: o(),
  lastChecked: o(),
  sourceMtimeMs: E().optional()
}));
function LL(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function ke(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
function Ce(e) {
  return N(e, ".mcpb-cache");
}
function nt(e, r) {
  let n = ge("md5").update(r).digest("hex").substring(0, 8);
  return N(e, `${n}.metadata.json`);
}
function Oe(e, r) {
  return rX(nt(e, r), () => ot().nullable(), {
    defaultValue: null,
    indent: 2
  });
}
function Ee(e, r) {
  return `${e}/${r}`;
}
async function VDe(e, r, n) {
  try {
    let i = jCe(e).mcpServers?.[r],
      s = (await Un().readAsync(n))?.pluginSecrets?.[Ee(e, r)];
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
async function etn(e, r, n, i, s, a) {
  try {
    let c = {},
      m = {};
    for (let [S, H] of Object.entries(n)) if (i[S]?.sensitive === !0) m[S] = String(H);else c[S] = H;
    let h = new Set(Object.keys(m)),
      p = new Set(Object.keys(c)),
      b = Ee(e, r),
      g = 0,
      y = await Un().mutate(S => {
        let H = S.pluginSecrets?.[b],
          L = H ? pa(H, (x, D) => p.has(D)) : void 0;
        if (g = L && H ? Object.keys(H).length - Object.keys(L).length : 0, Object.keys(m).length === 0 && g === 0) return S;
        return {
          ...S,
          pluginSecrets: {
            ...S.pluginSecrets,
            [b]: {
              ...L,
              ...m
            }
          }
        };
      }, a);
    if (!y.success) throw Error(`Failed to save sensitive config to secure storage for ${b}`);
    if (y.warning) t(`Server secrets save warning: ${y.warning}`, {
      level: "warn"
    });
    if (g > 0) t(`saveMcpServerUserConfig: scrubbed ${g} stale non-sensitive key(s) from secureStorage for ${b}`);
    let w = he("userSettings")?.pluginConfigs,
      pluginConfigs = {},
      M = 0;
    for (let S of Jle(e)) {
      let H = Object.keys(w?.[S]?.mcpServers?.[r] ?? {}).filter(item => h.has(item)),
        L = Object.fromEntries(H.map(item => [item, void 0])),
        x = S === e ? c : {};
      if (Object.keys(x).length > 0 || H.length > 0) pluginConfigs[S] = {
        mcpServers: {
          [r]: {
            ...x,
            ...L
          }
        }
      }, M += H.length;
    }
    if (Object.keys(pluginConfigs).length > 0) {
      let S = await ln("userSettings", {
        pluginConfigs: pluginConfigs
      }, void 0, s);
      if (S.error) throw S.error;
      if (M > 0) t(`saveMcpServerUserConfig: scrubbed ${M} plaintext sensitive key(s) from settings.json for ${e}/${r}`);
    }
    t(`Saved user config for ${e}/${r} (${Object.keys(c).length} non-sensitive, ${Object.keys(m).length} sensitive)`);
  } catch (error) {
    let m = te(error);
    throw t(`Failed to save user config for ${e}/${r}: ${m.message}`, {
      level: "error"
    }), Error(`Failed to save user configuration for ${e}/${r}: ${m.message}`);
  }
}
function kme(e, r) {
  let errors = [];
  for (let [i, s] of Object.entries(r)) {
    let a = e[i];
    if (s.required && (a === void 0 || a === "")) {
      errors.push(`${s.title || i} is required but not provided`);
      continue;
    }
    if (a === void 0 || a === "") continue;
    if (s.type === "string") {
      if (Array.isArray(a)) {
        if (!s.multiple) errors.push(`${s.title || i} must be a string, not an array`);else if (!a.every(item => typeof item === "string")) errors.push(`${s.title || i} must be an array of strings`);
      } else if (typeof a !== "string") errors.push(`${s.title || i} must be a string`);else if (s.options !== void 0 && !s.options.includes(a)) errors.push(`${s.title || i} must be one of: ${s.options.join(", ")}`);
    } else if (s.type === "number" && typeof a !== "number") errors.push(`${s.title || i} must be a number`);else if (s.type === "boolean" && typeof a !== "boolean") errors.push(`${s.title || i} must be a boolean`);else if ((s.type === "file" || s.type === "directory") && typeof a !== "string") errors.push(`${s.title || i} must be a path string`);
    if (s.type === "number" && typeof a === "number") {
      if (s.min !== void 0 && a < s.min) errors.push(`${s.title || i} must be at least ${s.min}`);
      if (s.max !== void 0 && a > s.max) errors.push(`${s.title || i} must be at most ${s.max}`);
    }
  }
  return {
    valid: errors.length === 0,
    errors: errors
  };
}
async function Y(manifest, extensionPath, userConfig = {}) {
  let {
      getMcpConfigForManifest: getMcpConfigForManifest
    } = await import("B:/~BUN/root/chunk-q46e3vrk.js"),
    s = await getMcpConfigForManifest({
      manifest: manifest,
      extensionPath: extensionPath,
      systemDirs: xe(),
      userConfig: userConfig,
      pathSeparator: "/"
    });
  if (!s) {
    let a = st(Error(`Failed to generate MCP server configuration from manifest "${manifest.name}"`), "MCPB manifest: failed to generate MCP server configuration");
    throw d(a), a;
  }
  return s;
}
async function Me(e, r) {
  try {
    return await Oe(e, r).read();
  } catch (error) {
    return t(`Failed to load MCPB cache metadata: ${error}`, {
      level: "error"
    }), null;
  }
}
async function pe(e, r, n) {
  await ce().mkdir(e), await Oe(e, r).write(n);
}
async function it(e, r, n) {
  let i = Dp(e);
  if (t(`Downloading MCPB from ${i}`), n) n(`Downloading ${i}...`);
  let s = performance.now(),
    a = !1;
  try {
    let m = await (CN(e) ? IB.get : tl.get)(e, {
        timeout: 120000,
        responseType: "arraybuffer",
        maxRedirects: 5,
        onDownloadProgress: p => {
          if (p.total && n) {
            let b = Math.round(p.loaded / p.total * 100);
            n(`Downloading... ${b}%`);
          }
        }
      }),
      uint8Array = new Uint8Array(m.data);
    if (ER("mcpb", e, "success", performance.now() - s), a = !0, await ye(r, Buffer.from(uint8Array)), t(`Downloaded ${uint8Array.length} bytes to ${r}`), n) n("Download complete");
    return uint8Array;
  } catch (error) {
    if (!a) ER("mcpb", e, "failure", performance.now() - s, OB(error));
    let m = D$(ZJ(l(error), e, i)),
      h = Error(`Failed to download MCPB file from ${i}: ${m}`);
    throw t(`Failed to download MCPB file from ${i}: ${m}`, {
      level: "error"
    }), h;
  }
}
async function at(e, r, n, i) {
  if (i) i("Extracting files...");
  await ce().mkdir(r);
  let s = 0,
    a = Object.entries(e).filter(([m]) => !m.endsWith("/")),
    c = a.length;
  for (let [m, h] of a) {
    let p = N(r, m),
      b = rt(p);
    if (b !== r) await ce().mkdir(b);
    if (m.endsWith(".json") || m.endsWith(".js") || m.endsWith(".ts") || m.endsWith(".txt") || m.endsWith(".md") || m.endsWith(".yml") || m.endsWith(".yaml")) {
      let w = new TextDecoder().decode(h);
      await ye(p, w, "utf-8");
    } else await ye(p, Buffer.from(h));
    let y = n[m];
    if (y && y & 73) await tt(p, y & GDe).catch(() => {});
    if (s++, i && s % 10 === 0) i(`Extracted ${s}/${c} files`);
  }
  if (t(`Extracted ${s} files to ${r}`), i) i(`Extraction complete (${s} files)`);
}
async function ft(e, r) {
  let n = ce(),
    i = Ce(r),
    s = await Me(i, e);
  if (!s) return !0;
  try {
    await n.stat(s.extractedPath);
  } catch (error) {
    if (v(error) === "ENOENT") t(`MCPB extraction path missing: ${s.extractedPath}`);else t(`MCPB extraction path inaccessible: ${s.extractedPath}: ${error}`, {
      level: "error"
    });
    return !0;
  }
  if (!ke(e)) {
    let a = N(r, e),
      c = N(r, Dp(e)),
      m;
    try {
      m = await n.stat(a);
    } catch (error) {
      if (v(error) === "ENOENT") t(`MCPB source file missing: ${c}`);else t(`MCPB source file inaccessible: ${c}: ${ZJ(String(error), a, c)}`, {
        level: "error"
      });
      return !0;
    }
    if (s.sourceMtimeMs === void 0) return !0;
    let h = Math.floor(m.mtimeMs);
    if (h !== s.sourceMtimeMs) return t(`MCPB file modified: mtime ${new Date(h).toISOString()} != cached ${new Date(s.sourceMtimeMs).toISOString()}`), !0;
  }
  return !1;
}
async function _Pt(source, r, n, i, s, a, c, m) {
  let h = Dp(source),
    p = ce(),
    b = Ce(r);
  await p.mkdir(b), t(`Loading MCPB from source: ${h}`);
  let g = await Me(b, source);
  if (g && !(await ft(source, r))) {
    t(`Using cached MCPB from ${g.extractedPath} (hash: ${g.contentHash})`);
    let k = N(g.extractedPath, "manifest.json"),
      T;
    try {
      T = await p.readFile(k, {
        encoding: "utf-8"
      });
    } catch (error) {
      if (B(error)) {
        let V = Error(`Cached manifest not found: ${k}`);
        throw d(V), V;
      }
      throw error;
    }
    let _ = new TextEncoder().encode(T),
      manifest_2 = await me(_);
    if (manifest_2.user_config && Object.keys(manifest_2.user_config).length > 0) {
      let j = manifest_2.name,
        V = await VDe(n, j, m),
        Se = s || V || {},
        ue = kme(Se, manifest_2.user_config);
      if (a || !ue.valid) return {
        status: "needs-config",
        manifest: manifest_2,
        extractedPath: g.extractedPath,
        contentHash: g.contentHash,
        configSchema: manifest_2.user_config,
        existingConfig: V || {},
        validationErrors: ue.valid ? [] : ue.errors
      };
      if (s) await etn(n, j, s, manifest_2.user_config ?? {}, c, m);
      let mcpConfig = await Y(manifest_2, g.extractedPath, Se);
      return {
        manifest: manifest_2,
        mcpConfig: mcpConfig,
        extractedPath: g.extractedPath,
        contentHash: g.contentHash
      };
    }
    let mcpConfig_2 = await Y(manifest_2, g.extractedPath);
    return {
      manifest: manifest_2,
      mcpConfig: mcpConfig_2,
      extractedPath: g.extractedPath,
      contentHash: g.contentHash
    };
  }
  let y, w, sourceMtimeMs;
  if (ke(source)) {
    let k = ge("md5").update(source).digest("hex").substring(0, 8);
    w = N(b, `${k}.mcpb`), y = await it(source, w, i);
  } else {
    let k = N(r, source);
    if (i) i(`Loading ${h}...`);
    try {
      y = await p.readFileBytes(k), w = k, sourceMtimeMs = Math.floor((await p.stat(k)).mtimeMs);
    } catch (error) {
      let _ = N(r, h);
      if (B(error)) {
        let F = Error(`MCPB file not found: ${_}`);
        throw t(`MCPB file not found: ${_}`, {
          level: "error"
        }), F;
      }
      throw k === _ ? error : new P(ZJ(l(error), k, _), "MCPB local file read failed");
    }
  }
  let contentHash = ge("sha256").update(y).digest("hex").substring(0, 16);
  if (t(`MCPB content hash: ${contentHash}`), i) i("Extracting MCPB archive...");
  let S = await zDe(Buffer.from(y)),
    H = yPt(y),
    L = S["manifest.json"];
  if (!L) {
    let k = Error("No manifest.json found in MCPB file");
    throw t(`No manifest.json found in MCPB file: ${w}`, {
      level: "error"
    }), k;
  }
  let manifest_3 = await me(L);
  if (t(`MCPB manifest: ${manifest_3.name} v${manifest_3.version} by ${manifest_3.author.name}`), !manifest_3.server) {
    let k = st(Error(`MCPB manifest for "${manifest_3.name}" does not define a server configuration`), "MCPB manifest does not define a server configuration");
    throw d(k), k;
  }
  let extractedPath = N(b, contentHash);
  if (await at(S, extractedPath, H, i), manifest_3.user_config && Object.keys(manifest_3.user_config).length > 0) {
    let k = manifest_3.name,
      T = await VDe(n, k, m),
      _ = s || T || {},
      F = kme(_, manifest_3.user_config);
    if (!F.valid) {
      let V = {
        source: source,
        contentHash: contentHash,
        extractedPath: extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: sourceMtimeMs
      };
      return await pe(b, source, V), {
        status: "needs-config",
        manifest: manifest_3,
        extractedPath: extractedPath,
        contentHash: contentHash,
        configSchema: manifest_3.user_config,
        existingConfig: T || {},
        validationErrors: F.errors
      };
    }
    if (s) await etn(n, k, s, manifest_3.user_config ?? {}, c, m);
    if (i) i("Generating MCP server configuration...");
    let mcpConfig_3 = await Y(manifest_3, extractedPath, _),
      j = {
        source: source,
        contentHash: contentHash,
        extractedPath: extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: sourceMtimeMs
      };
    return await pe(b, source, j), {
      manifest: manifest_3,
      mcpConfig: mcpConfig_3,
      extractedPath: extractedPath,
      contentHash: contentHash
    };
  }
  if (i) i("Generating MCP server configuration...");
  let mcpConfig_4 = await Y(manifest_3, extractedPath),
    q = {
      source: source,
      contentHash: contentHash,
      extractedPath: extractedPath,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: sourceMtimeMs
    };
  return await pe(b, source, q), t(`Successfully loaded MCPB: ${manifest_3.name} (extracted to ${extractedPath})`), {
    manifest: manifest_3,
    mcpConfig: mcpConfig_4,
    extractedPath: extractedPath,
    contentHash: contentHash
  };
}
function g_(e) {
  return e.source;
}
function ttn(e, r) {
  return e.find(item => item.repository === r || item.source === r);
}
function zO(e, r) {
  if (DNt()) return Promise.resolve({});
  let {
      optionValues: optionValues
    } = dt(),
    i = optionValues.get(e);
  if (i !== void 0) return i;
  let s = ct(e, r);
  return optionValues.set(e, s), s.catch(() => {
    if (optionValues.get(e) === s) optionValues.delete(e);
  }), s;
}
async function ct(e, r) {
  let n = jCe(e).options ?? {},
    i = (await Un().readAsync(r))?.pluginSecrets?.[e] ?? {};
  return {
    ...n,
    ...i
  };
}
function qDe() {
  dt().optionValues.clear();
}
async function Dqe(e, r, n, i, s) {
  let a = {},
    c = {};
  for (let [y, w] of Object.entries(r)) if (n[y]?.sensitive === !0) c[y] = String(w);else a[y] = w;
  let m = new Set(Object.keys(c)),
    h = new Set(Object.keys(a)),
    p = await Un().mutate(y => {
      let w = y.pluginSecrets?.[e],
        C = w ? pa(w, (S, H) => h.has(H)) : void 0,
        M = C && w && Object.keys(C).length !== Object.keys(w).length;
      if (Object.keys(c).length === 0 && !M) return y;
      return {
        ...y,
        pluginSecrets: {
          ...y.pluginSecrets,
          [e]: {
            ...C,
            ...c
          }
        }
      };
    }, s);
  if (!p.success) {
    let y = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw t(y.message, {
      level: "error"
    }), y;
  }
  if (p.warning) t(`Plugin secrets save warning: ${p.warning}`, {
    level: "warn"
  });
  let b = he("userSettings")?.pluginConfigs,
    pluginConfigs_2 = {};
  for (let y of Jle(e)) {
    let w = Object.keys(b?.[y]?.options ?? {}).filter(item => m.has(item)),
      C = Object.fromEntries(w.map(item => [item, void 0])),
      M = y === e ? a : {};
    if (Object.keys(M).length > 0 || w.length > 0) pluginConfigs_2[y] = {
      options: {
        ...M,
        ...C
      }
    };
  }
  if (Object.keys(pluginConfigs_2).length > 0) {
    let y = await ln("userSettings", {
      pluginConfigs: pluginConfigs_2
    }, void 0, i);
    if (y.error) throw t(`Failed to save plugin options for ${e} to settings.json: ${l(y.error)}`, {
      level: "error"
    }), Error(`Failed to save plugin options for ${e}: ${y.error.message}`);
  }
  qDe();
}
async function ut(e) {
  let r = he("userSettings");
  if (r !== null && r !== void 0) return r;
  let n = wr("userSettings");
  if (n === void 0 || (await Sne(n)) === "gone") return;
  return t(`deletePluginOptions: the user settings file (${n}) is there and could not be read, so options of ${e} may remain in it`, {
    level: "warn"
  }), "unreadable";
}
async function _yo(e, r, n, i) {
  let s = !0,
    a = await ut(e);
  if (a === "unreadable") s = !1, i?.push("settings_unreadable");
  let c = a === "unreadable" ? void 0 : a,
    m = Jle(e).filter(item => c?.pluginConfigs?.[item] !== void 0);
  if (m.length > 0) {
    let pluginConfigs_3 = Object.fromEntries(m.map(item => [item, void 0])),
      {
        error: error_2
      } = await ln("userSettings", {
        pluginConfigs: pluginConfigs_3
      }, void 0, r);
    if (error_2) t(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${error_2.message}`, {
      level: "warn"
    }), s = !1, i?.push("settings_write_failed");
  }
  let h = `${e}/`;
  try {
    let p = Un();
    if (!(await p.mutate(g => {
      if (!g.pluginSecrets) return g;
      let y = Object.entries(g.pluginSecrets).filter(([w]) => w !== e && !w.startsWith(h));
      if (y.length === Object.keys(g.pluginSecrets).length) return g;
      return {
        ...g,
        pluginSecrets: y.length > 0 ? Object.fromEntries(y) : void 0
      };
    }, n)).success) t(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
      level: "warn"
    }), s = !1, i?.push("secrets_write_failed");else {
      let g = p.readAsyncStrict ? await p.readAsyncStrict(n, {
        inaccessibleAs: "failure"
      }) : await p.readAsync(n);
      if (g === vl || Object.keys(g?.pluginSecrets ?? {}).some(item => item === e || item.startsWith(h))) t(`deletePluginOptions: after the delete, secure storage could not be read or still holds pluginSecrets for ${e}`, {
        level: "warn"
      }), s = !1, i?.push(g === vl ? "secrets_unreadable" : "secrets_remain");
    }
  } catch (error) {
    t(`deletePluginOptions: storage lock unavailable for ${e}: ${l(error)}`, {
      level: "warn"
    }), s = !1, i?.push("secrets_write_failed");
  }
  return qDe(), s;
}
async function Xot(e, r) {
  let userConfig_2 = e.manifest.userConfig;
  if (!userConfig_2 || Object.keys(userConfig_2).length === 0) return {};
  let i = await zO(g_(e), r),
    s = {};
  for (let [a, c] of Object.entries(userConfig_2)) {
    let m = i[a];
    if (m === void 0 || m === "" || c.sensitive !== !0 && !kme({
      [a]: m
    }, {
      [a]: c
    }).valid) s[a] = c;
  }
  return s;
}
function Bkr(e, r) {
  let n = e?.options;
  return n !== void 0 && !(typeof r === "string" && n.includes(r));
}
function Jot(e, r) {
  let n = {};
  for (let [s, a] of Object.entries(r)) {
    if (a.required && a.default === void 0) continue;
    n[s] = a.default ?? "";
  }
  let i = pa(e, (s, a) => {
    let c = r[a]?.options;
    if (c === void 0 || !Bkr(r[a], s)) return !1;
    return t(`plugin option ${a} holds a value that is not one of ${c.join(", ")}; it reads as unset`, {
      level: "warn"
    }), !0;
  });
  return {
    ...n,
    ...i
  };
}
function YZ(e, r) {
  let n = s => s.replace(/\\/g, "/"),
    i = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => n(r.path));
  if (i = i.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => n(Fo() ?? kr())), r.source) {
    let source_2 = r.source;
    i = i.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => n(iCe(source_2)));
  }
  return i;
}
function Qot(e, r) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (n, i) => {
    let s = r[i];
    if (s === void 0) throw Error(`Plugin option "${i}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${i}".`);
    return String(s);
  });
}
function Zot(e, r) {
  try {
    return Qot(e, r) !== e;
  } catch {
    return !0;
  }
}
function e$n(e, r, n, i) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (s, a) => {
    if (n[a]?.sensitive === !0) return `[sensitive option '${a}' not available in skill content]`;
    let c = r[a];
    if (c === void 0) return s;
    let m = String(c);
    return i ? i(m) : m;
  });
}
function hPt({
  pluginName: pluginName,
  pluginStorageId: pluginStorageId
}) {
  return pluginStorageId.startsWith(`${pluginName}@`) ? pluginStorageId : `${pluginStorageId}+${pluginName}`;
}
var jkr = e => hPt({
  pluginName: e.name,
  pluginStorageId: g_(e)
});
var Pe = e => typeof e === "string" ? e : `${e.plugin}#${e.registration}`;
var bPt = e => typeof e === "string" ? e : e.plugin;
function yt(e, r) {
  let n = new Set();
  for (let i of e ?? []) {
    if (bPt(i) !== r) continue;
    if (typeof i === "string") return "every";
    n.add(i.registration);
  }
  return [...n].sort((itemA, itemB) => itemA - itemB);
}
var SPt = e => (e ?? []).map(Pe).join(" > ");
function Q(e, r) {
  let n = [];
  for (let i of e) {
    let s = i.status();
    if (s.kind !== "live") {
      let a = s.kind === "retiring" || s.kind === "unloaded" && s.retired,
        c = s.kind === "unloaded";
      t(`hooks module ${a ? `${i.label}: its environment was retired by a reload during ${r}` : c ? `${i.label}: its environment was unloaded (during ${r})` : `${i.label}: ${s.reason} (during ${r})`}; passing on`);
      continue;
    }
    n.push(i);
  }
  return n;
}
var be = Rt(new Map(), e => e.clear());
var we = Rt(new Set(), e => e.clear());
function K(e, r, n) {
  let i = `${e.name}#${e.environmentId} ${r}`,
    s = be.get(i) ?? 0;
  if (s >= DLr) return;
  be.set(i, s + 1);
  let a = xNt(e.matcherFor(r), n);
  if (a === void 0) return;
  let c = `${i} ${a.path}`;
  if (we.has(c)) return;
  we.add(c), kc().log(MLr(e.name, r, a), "warn");
}
function QFn(e, r, n) {
  let i = e.matcherFor(r),
    s = e.hopKey.kind === "worker";
  if (i === void 0) return !0;
  let a = s ? NLr(i, n) : vdt(i, n);
  if (!a) K(e, r, n);
  return a;
}
function re(e, r, n) {
  let i = Q(e, r),
    s = i.findIndex(item => QFn(item, r, n));
  return s === -1 ? [] : i.slice(s);
}
var oe = (e, r, n) => e.map(item => {
  let s = r.get(item);
  if (s === void 0) throw new De(`${n}: a hop member is not one of these handlers`);
  return s;
});
var He = ({
  loaded: loaded,
  event: event,
  origin: n,
  raise: raise,
  owners: owners
}) => ({
  name: loaded.name,
  tier: loaded.tier,
  ...(PLr(loaded.args.modulePath) && {
    answersForEngine: !0
  }),
  run: (e_2, c, {
    call: call,
    floors: floors,
    cutAt: cutAt
  }) => t$n({
    members: [loaded],
    event: event,
    e: e_2,
    call: call,
    signal: c.signal,
    hookOrigin: n,
    raise: raise,
    origin: c.origin,
    floors: floors,
    cutAt: cutAt
  }),
  hop: {
    key: loaded.hopKey,
    run: a => t$n({
      members: oe(a.members, owners, event),
      event: event,
      e: a.e,
      call: a.call,
      signal: a.signal,
      hookOrigin: n,
      raise: raise,
      origin: a.origin,
      floors: a.floors,
      cutAt: a.cutAt
    })
  }
});
function Wkr(e, r, n) {
  let i = e.matcherFor(r);
  if (i === void 0) return !0;
  try {
    if (vdt(i, n)) return !0;
  } catch (error) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${l(error)}); the hop decides`), !0;
  }
  return K(e, r, n), !1;
}
function ne(e, r, n) {
  if (!n || n.length === 0) return e;
  let i = yt(n, e.name);
  if (i === "every") {
    t(`hooks module ${e.label} ${r} skipped: re-entry (the plugin's own code raised it; origin ${SPt(n)})`);
    return;
  }
  let s = e.registrationsFor(r),
    leftOut = i.filter(item => s.includes(item));
  if (leftOut.length === 0) return e;
  if (!e.hooks(r, leftOut)) {
    t(`hooks module ${e.label} ${r} skipped: re-entry (its own frame is being dispatched; origin ${SPt(n)})`);
    return;
  }
  return t(`hooks module ${e.label} ${r}: hooks ${leftOut.join(", ")} left out for re-entry (origin ${SPt(n)})`), {
    ...e,
    leftOut: leftOut,
    hooks: (c, m = []) => e.hooks(c, [...leftOut, ...m]),
    matcherFor: (c, m = []) => e.matcherFor(c, [...leftOut, ...m])
  };
}
var est = (e, r, n) => dt().loadedModules.filter(item => {
  let s = item.hooks(e) ? ne(item, e, n) : void 0;
  if (s === void 0) return !1;
  return Object.entries(r).every(([a, c]) => Fhe(s.matcherFor(e), a, c));
}).map(item => item.name);
function Te(e, r, {
  keys: keys,
  e: e_3
}) {
  let s = e.matcherFor(r);
  if (s === void 0 || !gN(e_3)) return !1;
  try {
    let c = keys.some(item => Object.hasOwn(e_3, item) && !Fhe(s, item, e_3[item]));
    if (c) K(e, r, e_3);
    return c;
  } catch (error) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${l(error)}); the hop decides`), !1;
  }
}
function wPt(e, r, {
  only: only,
  e: e_4,
  among: among,
  pinned: pinned
} = {}) {
  let c = (among ?? dt().loadedModules).flatMap(item => {
    if (!item.hooks(e) || item.name !== (only ?? item.name)) return [];
    let p = ne(item, e, r);
    return p === void 0 || pinned !== void 0 && Te(p, e, pinned) ? [] : [p];
  });
  if (e_4 === void 0) return c;
  let m = c.findIndex(item => Wkr(item, e, e_4));
  return m === -1 ? [] : c.slice(m);
}
var $e = e => e;
var $t = e => e;
var Fe = e => [...e];
function KDe(e) {
  let r = e?.at(-1);
  if (r === void 0) return fFe;
  let plugin = bPt(r),
    {
      loadedModules: loadedModules,
      moduleSeats: moduleSeats
    } = dt(),
    tier = loadedModules.find(item => item.name === plugin)?.tier ?? moduleSeats.get(plugin) ?? "user";
  return Object.freeze({
    plugin: plugin,
    tier: tier
  });
}
var _e = (e, r) => ({
  name: e.loaded.name,
  tier: e.loaded.tier,
  run: (e_5, i, {
    open: open,
    floors: floors_2
  }) => Le({
    members: [e.loaded],
    event: e.event,
    e: e_5,
    open: open,
    signal: i.signal,
    hookOrigin: e.origin,
    raise: e.raise,
    origin: i.origin,
    floors: floors_2
  }),
  hop: {
    key: e.loaded.hopKey,
    run: ({
      members: members,
      e: e_6,
      open: open_2,
      signal: signal,
      origin: origin,
      floors: floors_3
    }) => Le({
      members: oe(members, r, e.event),
      event: e.event,
      e: e_6,
      open: open_2,
      signal: signal,
      hookOrigin: e.origin,
      raise: e.raise,
      origin: origin,
      floors: floors_3
    })
  }
});
function Syo(event_2, origin_2, n = {}) {
  let i = new Map();
  return wPt(event_2, origin_2, n).flatMap(s => {
    if (s.streamLinks !== void 0) return Fe(It({
      loaded: s,
      event: event_2,
      origin: origin_2
    }));
    let a = _e({
      loaded: s,
      event: event_2,
      origin: origin_2,
      raise: n.raise
    }, i);
    return i.set(a, s), [a];
  });
}
var qzo = 3;
var wyo = e => `${e}: the op was aborted: the plugin's environment was unloaded`;
var hyo = e => Array.from(e).join(",") || "none";
var ZFn = e => e.map(item => item.label).join(", ");
var yyo = e => `next() result not cloneable: ${l(e)}`;
var byo = "the plugin is unloaded; /reload-plugins brings it back";
function se({
  members: members_2,
  event: event_3,
  e: n,
  hookOrigin: hookOrigin,
  origin: origin_3,
  raise: raise_2,
  floors: floors_4,
  cutAt: cutAt_2,
  kind: kind
}) {
  let [p] = members_2;
  if (hookOrigin) t(`hooks module ${ZFn(members_2)}: ${event_3}${kind} nested in ${SPt(hookOrigin)}`);
  let b = members_2.flatMap(item => {
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
    id: p ? p.hopKey.nextDispatchId() : 0,
    event: event_3,
    payload: n,
    environments: members_2.map(item => item.environmentId),
    leftOut: b.length === 0 ? void 0 : b,
    origin: origin_3,
    hookOrigin: hookOrigin,
    raise: raise_2,
    floors: floors_4.length === 0 ? void 0 : floors_4,
    cutAt: cutAt_2
  };
}
async function t$n(e) {
  let {
      event: event_4,
      e: e_7,
      call: call_2,
      signal: signal_2,
      floors: floors_5
    } = e,
    members_3 = re(e.members, event_4, e_7),
    m = members_3[0]?.hopKey;
  if (!m) return call_2(e_7, void 0, floors_5);
  let h = (w, C, M) => call_2(w, C, M),
    p = performance.now();
  for (let w of members_3) w.enter();
  let b;
  try {
    b = await m.dispatch(se({
      ...e,
      members: members_3,
      kind: ""
    }), h, signal_2);
  } finally {
    for (let w of members_3) w.leave();
  }
  let y = typeof e_7 === "object" && "requestId" in e_7 && typeof e_7.requestId === "string" ? ` key=${e_7.requestId}` : "";
  return t(`hooks module ${ZFn(members_3)} ${event_4} settled in ${(performance.now() - p).toFixed(1)}ms (${m.kind} hop, next() included)${y}`), $e(b.result);
}
function ae(e, r, n) {
  e.leave(), t(`hooks module ${e.label} ${r} settled in ${(performance.now() - n).toFixed(1)}ms (native link, next() included)`);
}
function fe({
  loaded: loaded_2,
  event: event_5,
  origin: origin_4
}, i) {
  let s = Q([loaded_2], event_5).length === 1 && QFn(loaded_2, event_5, i);
  if (s && origin_4) t(`hooks module ${loaded_2.label} (native): ${event_5} nested in ` + SPt(origin_4));
  return s;
}
function Kt(e) {
  let {
    loaded: loaded_3,
    event: event_6,
    origin: i
  } = e;
  if (loaded_3.link === void 0) throw new De(`${loaded_3.name}: ${event_6}: not a native module; it runs in a hop`);
  let s = loaded_3.link({
      event: event_6,
      leftOut: loaded_3.leftOut,
      hookOrigin: i
    }),
    a = s.catch;
  async function c(p) {
    let b = performance.now();
    loaded_3.enter();
    try {
      return await p();
    } finally {
      ae(loaded_3, event_6, b);
    }
  }
  async function m(p, b) {
    loaded_3.enter();
    try {
      return await a?.(p, b);
    } finally {
      loaded_3.leave();
    }
  }
  let run = (p, b, g) => fe({
    loaded: loaded_3,
    event: event_6,
    origin: i
  }, p) ? c(() => s.run(p, b, g)) : b(p);
  return $t({
    ...s,
    run: run,
    ...(a !== void 0 && {
      catch: m
    })
  });
}
function Le(e) {
  let {
      event: event_7,
      e: e_8,
      open: open_3,
      signal: signal_3,
      floors: floors_6
    } = e,
    members_4 = re(e.members, event_7, e_8),
    m = members_4[0]?.hopKey;
  if (!m) return open_3(e_8, void 0, floors_6);
  let h = (g, y, w) => Hhe(open_3(g, y, w)),
    p = performance.now();
  for (let g of members_4) g.enter();
  let b = m.dispatchStream(se({
    ...e,
    members: members_4,
    kind: " stream"
  }), h, signal_3);
  return async function* () {
    try {
      let g = yield* Hhe(b);
      return $e(g);
    } finally {
      for (let g of members_4) g.leave();
      t(`hooks module ${ZFn(members_4)} ${event_7} stream settled in ${(performance.now() - p).toFixed(1)}ms (${m.kind} hop, next() included)`);
    }
  }();
}
function It(e) {
  let {
    loaded: loaded_4,
    event: event_8,
    origin: i
  } = e;
  if (loaded_4.streamLinks === void 0) throw new De(`${loaded_4.name}: ${event_8}: not a native module; it runs in a hop`);
  function s(a) {
    let c = performance.now();
    return loaded_4.enter(), async function* () {
      try {
        return yield* a;
      } finally {
        ae(loaded_4, event_8, c);
      }
    }();
  }
  return loaded_4.streamLinks({
    event: event_8,
    leftOut: loaded_4.leftOut,
    hookOrigin: i
  }).map(item => {
    let c = item.catch;
    return {
      ...item,
      run: async (m, h, p) => fe({
        loaded: loaded_4,
        event: event_8,
        origin: i
      }, m) ? s(await item.run(m, h, p)) : h(m),
      ...(c !== void 0 && {
        catch: async (m, h, p) => s(await c(m, h, p))
      })
    };
  });
}
function Ae(e) {
  return e.loaded.link !== void 0 ? Kt(e) : He(e);
}
function pB(event_9, origin_5, n = {}) {
  let i = [],
    owners_2 = new Map();
  for (let loaded_5 of wPt(event_9, origin_5, n)) {
    let c = Ae({
      loaded: loaded_5,
      event: event_9,
      origin: origin_5,
      raise: n.raise,
      owners: owners_2
    });
    owners_2.set(c, loaded_5), i.push(c);
  }
  return i;
}
export { QFn, hyo, ZFn, hPt, yyo, Zen, zDe, GDe, yPt, LL, VDe, etn, kme, _Pt, g_, ttn, zO, qDe, Dqe, _yo, Xot, Bkr, Jot, YZ, Qot, Zot, e$n, jkr, byo, bPt, SPt, t$n, Wkr, wPt, pB, est, KDe, Syo, qzo, wyo };