// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $e } from "B:/~BUN/root/chunk-fg0appz9.js";
import { R, qe, F, d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { TM, Jm, xxe, ew } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { BS, kR, LUn, Bxs, jxs, qd, dZe, lon, awo } from "B:/~BUN/root/chunk-2gz7xsvb.js";
import { NNe } from "B:/~BUN/root/chunk-02j0cm13.js";
import { YA, ye, Rk, qR, nIo } from "B:/~BUN/root/chunk-game8aqv.js";
import { Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { PC, yl, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, ee, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { ZV, Is } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { JU } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wr, i0 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Bln } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { un, Pl, qn, tl } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { X4 } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Bs, Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { jx, yfe, Vxr, m4i, h4i, g4i, ZQe, hRe, M2e, NSo, _xs } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Bf } from "B:/~BUN/root/chunk-sjvfcp1z.js";
import { bRe } from "B:/~BUN/root/chunk-hnth82be.js";
import { SRe, Mbe, hon } from "B:/~BUN/root/chunk-t0w3xyzh.js";
import { ih, aNe } from "B:/~BUN/root/chunk-esnm3r09.js";
import { Uye } from "B:/~BUN/root/chunk-v04fapnf.js";
import { vF, j9 } from "B:/~BUN/root/chunk-fkz77yzp.js";
import { qXe, YXe, uQt } from "B:/~BUN/root/chunk-zwf5p7y7.js";
import { Wco } from "B:/~BUN/root/chunk-zeshc0ep.js";
import { sX } from "B:/~BUN/root/chunk-dx2wvwvf.js";
import { go } from "B:/~BUN/root/chunk-eyrj3wyr.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var Ce = he(new Map(), e => e.clear());
var ve = he(new Set(), e => e.clear());
function W(e, r, n) {
  let s = `${e.name}#${e.environmentId} ${r}`,
    f = Ce.get(s) ?? 0;
  if (f >= jxs) return;
  Ce.set(s, f + 1);
  let m = LUn(e.matcherFor(r), n);
  if (m === void 0) return;
  let c = `${s} ${m.path}`;
  if (ve.has(c)) return;
  ve.add(c), qd().log(Bxs(e.name, r, m), "warn");
}
function Ilo(e, r, n) {
  let s = e.matcherFor(r),
    f = e.hopKey.kind === "worker";
  if (s === void 0) return !0;
  let m = NNe(r),
    c = f ? lon(s, n, m) : dZe(s, n, m);
  if (!c) W(e, r, n);
  return c;
}
function me(e, r, n) {
  let s = e.findIndex(item => Ilo(item, r, n));
  return s === -1 ? [] : e.slice(s);
}
function Y(e, r, n) {
  let s = BS(n) ? Object.fromEntries((yfe(r).pinnedKeys ?? []).filter(item => Object.hasOwn(n, item)).map(item => [item, n[item]])) : {};
  return e.catches(r, void 0, f => awo(f, s, NNe(r)));
}
function V(e, r) {
  let n = [];
  for (let s of e) {
    if (!Bf(s)) {
      t(`hooks module ${s.label}: judged under a policy text other than the one in force (during ${r}); passing on`);
      continue;
    }
    let f = s.status();
    if (f.kind !== "live") {
      let m = f.kind === "retiring" || f.kind === "unloaded" && f.retired,
        c = f.kind === "unloaded";
      t(`hooks module ${m ? `${s.label}: its environment was retired by a reload during ${r}` : c ? `${s.label}: its environment was unloaded (during ${r})` : `${s.label}: ${f.reason} (during ${r})`}; passing on`);
      continue;
    }
    n.push(s);
  }
  return n;
}
var ce = (e, r, n) => me(V(e, r), r, n);
var Vyr = he(go(), e => e.set(void 0));
var Hye = he(go(), e => e.set(void 0));
var qJt = he(go(), e => e.set(void 0));
function ifs() {
  return i.CLAUDE_CODE_PLUGIN_DIR_WATCH ?? !ye();
}
import { resolve as de } from "path";
function Mlo(e) {
  let r = new Set((Hye.get() ?? []).map(item => de(item))),
    n = new Set((qJt.get() ?? []).map(item => de(item)));
  return e.filter(item => r.has(de(item)) || !n.has(de(item)));
}
import { resolve as je } from "path";
function Dlo(e) {
  if (ifs()) return Mlo(e);
  let r = new Set((Hye.get() ?? []).map(item => je(item)));
  return i.CLAUDE_CODE_PLUGIN_DIR_WATCH === !1 ? [] : e.filter(item => r.has(je(item)));
}
var Llo = () => [...Rk(), ...qR()];
var wTe = () => Dlo(Llo()).length > 0;
var Kyr = 1e4;
function gXe(e) {
  return e.length <= Kyr ? e : `${Q(e, Kyr)}\u2026`;
}
var Ue = 100;
function wq(plugin, r, n = "again") {
  let text = gXe(r),
    f = Ae();
  if (t(`[${plugin}] $.ui.log: ${text}`), f.uiLogSink) {
    f.uiLogSink({
      plugin: plugin,
      text: text
    }, n);
    return;
  }
  if (f.pendingUiLog.length < Ue) f.pendingUiLog = [...f.pendingUiLog, {
    plugin: plugin,
    text: text
  }];
}
function kq(e, r, n = "again") {
  if (wTe()) {
    wq(e, Q(r, jx), n);
    return;
  }
  t(`${e}: ${r}`, {
    level: "error"
  });
}
var Te = (e, r) => e.filter(item => {
  let s = item.status();
  return s.kind === "dead" && s.reason === r;
});
var qyr = e => typeof e !== "string" && "rewritten" in e;
function afs(e) {
  let r = qyr(e),
    n = r ? e.of : e,
    f = typeof n === "string" ? [n] : [n.plugin, n.registration];
  return JSON.stringify([r, ...f]);
}
function ue(e, r, n) {
  let s = typeof e === "string",
    f = !s && "plugin" in e;
  return s ? e : f ? r(e) : n;
}
var Yyr = e => ue(e, r => `${r.plugin}#${r.registration}`, "/rewritten beneath");
var mft = e => ue(e, r => r.plugin, void 0);
function le(e, r) {
  let n = new Set();
  for (let s of e ?? []) {
    if (mft(s) !== r) continue;
    if (typeof s === "string") return "every";
    if ("registration" in s) n.add(s.registration);
  }
  return [...n].sort((itemA, itemB) => itemA - itemB);
}
function qo(e, r) {
  let n = e ?? [],
    s = n.length - 1;
  return {
    caller: le(n.slice(s), r),
    above: le(n.slice(0, s), r)
  };
}
function PIi(e, r) {
  if (typeof e === "string" || typeof r === "string") return e === r;
  let s = "plugin" in e && "plugin" in r,
    f = "rewritten" in e && "rewritten" in r;
  return s ? e.plugin === r.plugin && e.registration === r.registration : f && PIi(e.of, r.of);
}
var zMt = po(() => new WeakMap());
var aca = e => (e ?? []).map(afs).join(" > ");
var Nlo = e => (e ?? []).map(Yyr).join(" > ");
var lca = e => Object.freeze({
  rewritten: !0,
  of: e
});
var _In = ({
  name: name,
  method: method
}) => `$.${name}.${method}`;
var lfs = e => Array.from(e).join(",") || "none";
var dca = "the hooks worker was replaced; the plugin stays loaded for its .catch";
var GMt = e => e.map(item => item.label).join(", ");
function bIn({
  pluginName: pluginName,
  pluginStorageId: pluginStorageId
}) {
  return pluginStorageId.startsWith(`${pluginName}@`) ? pluginStorageId : `${pluginStorageId}+${pluginName}`;
}
var OIi = e => `next() result not cloneable: ${d(e)}`;
import { lstat as oe, rmdir as gt } from "fs/promises";
import { basename as te, dirname as re } from "path";
import { createHash as De } from "crypto";
import { chmod as ft, writeFile as Le } from "fs/promises";
import { dirname as pt, join as _ } from "path";
async function it(e) {
  let {
      McpbManifestSchema: McpbManifestSchema
    } = await import("B:/~BUN/root/chunk-8n6b5xf1.js"),
    n = McpbManifestSchema.safeParse(e);
  if (!n.success) {
    let s = n.error.flatten(),
      f = [...Object.entries(s.fieldErrors).map(([m, c]) => `${m}: ${c?.join(", ")}`), ...(s.formErrors || [])].filter(Boolean).join("; ");
    throw new R(`Invalid manifest: ${f}`, "MCPB manifest schema validation failed");
  }
  return n.data;
}
async function st(e) {
  let r;
  try {
    r = ee(e);
  } catch (error) {
    throw Error(`Invalid JSON in manifest.json: ${d(error)}`);
  }
  return it(r);
}
async function Pe(e) {
  let r = new TextDecoder().decode(e);
  return st(r);
}
import { homedir as at } from "os";
import { join as G } from "path";
function Be(e) {
  let r = e?.platform ?? x(),
    HOME = e?.homedir ?? at(),
    s = e?.env ?? process.env,
    f = {
      HOME: HOME,
      DESKTOP: G(HOME, "Desktop"),
      DOCUMENTS: G(HOME, "Documents"),
      DOWNLOADS: G(HOME, "Downloads")
    };
  switch (r) {
    case "windows":
      {
        let m = s.USERPROFILE || HOME;
        return {
          HOME: HOME,
          DESKTOP: G(m, "Desktop"),
          DOCUMENTS: G(m, "Documents"),
          DOWNLOADS: G(m, "Downloads")
        };
      }
    case "linux":
    case "wsl":
      return {
        HOME: HOME,
        DESKTOP: s.XDG_DESKTOP_DIR || f.DESKTOP,
        DOCUMENTS: s.XDG_DOCUMENTS_DIR || f.DOCUMENTS,
        DOWNLOADS: s.XDG_DOWNLOAD_DIR || f.DOWNLOADS
      };
    case "macos":
    default:
      {
        if (r === "unknown") t("Unknown platform detected, using default paths");
        return f;
      }
  }
}
var mt = p(() => u({
  source: o(),
  contentHash: o(),
  extractedPath: o(),
  cachedAt: o(),
  lastChecked: o(),
  sourceMtimeMs: E().optional()
}));
function pL(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function Re(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
function SIn(e) {
  return pL(e) && !Re(e);
}
function Ke(e) {
  return _(e, ".mcpb-cache");
}
function ct(e, r) {
  let n = De("md5").update(r).digest("hex").substring(0, 8);
  return _(e, `${n}.metadata.json`);
}
function We(e, r) {
  return Uye(ct(e, r), () => mt().nullable(), {
    defaultValue: null,
    indent: 2
  });
}
function Ve(e, r) {
  return `${e}/${r}`;
}
async function a0e(e, r, n) {
  try {
    let s = SRe(e).mcpServers?.[r],
      f = (await Kn().readAsync(n))?.pluginSecrets?.[Ve(e, r)];
    if (!s && !f) return null;
    return t(`Loaded user config for ${e}/${r} (settings + secureStorage)`), {
      ...s,
      ...f
    };
  } catch (error) {
    return t(`Failed to load user config for ${e}/${r}: ${error}`, {
      level: "error"
    }), null;
  }
}
async function VMt(e, r, n, s, f, m) {
  try {
    let c = {},
      l = {};
    for (let [C, O] of Object.entries(n)) if (s[C]?.sensitive === !0) l[C] = String(O);else c[C] = O;
    let g = new Set(Object.keys(l)),
      h = new Set(Object.keys(c)),
      w = Ve(e, r),
      H = 0,
      y = await Kn().mutate(C => {
        let O = C.pluginSecrets?.[w],
          T = O ? kR(O, (v, P) => !h.has(P)) : void 0;
        if (H = T && O ? Object.keys(O).length - Object.keys(T).length : 0, Object.keys(l).length === 0 && H === 0) return C;
        return {
          ...C,
          pluginSecrets: {
            ...C.pluginSecrets,
            [w]: {
              ...T,
              ...l
            }
          }
        };
      }, m);
    if (!y.success) throw Error(`Failed to save sensitive config to secure storage for ${w}`);
    if (y.warning) t(`Server secrets save warning: ${y.warning}`, {
      level: "warn"
    });
    if (H > 0) t(`saveMcpServerUserConfig: scrubbed ${H} stale non-sensitive key(s) from secureStorage for ${w}`);
    let b = Pl("userSettings")?.pluginConfigs,
      pluginConfigs = {},
      M = 0;
    for (let C of Mbe(e)) {
      let O = Object.keys(b?.[C]?.mcpServers?.[r] ?? {}).filter(item => g.has(item)),
        T = Object.fromEntries(O.map(item => [item, void 0])),
        v = C === e ? c : {};
      if (Object.keys(v).length > 0 || O.length > 0) pluginConfigs[C] = {
        mcpServers: {
          [r]: {
            ...v,
            ...T
          }
        }
      }, M += O.length;
    }
    if (Object.keys(pluginConfigs).length > 0) {
      let C = await qn("userSettings", {
        pluginConfigs: pluginConfigs
      }, void 0, f);
      if (C.error) throw C.error;
      if (M > 0) t(`saveMcpServerUserConfig: scrubbed ${M} plaintext sensitive key(s) from settings.json for ${e}/${r}`);
    }
    t(`Saved user config for ${e}/${r} (${Object.keys(c).length} non-sensitive, ${Object.keys(l).length} sensitive)`);
  } catch (error) {
    let l = F(error);
    throw t(`Failed to save user config for ${e}/${r}: ${l.message}`, {
      level: "error"
    }), Error(`Failed to save user configuration for ${e}/${r}: ${l.message}`);
  }
}
function EZ(e, r) {
  let errors = [];
  for (let [s, f] of Object.entries(r)) {
    let m = Wr(e, s);
    if (f.required && (m === void 0 || m === "")) {
      errors.push(`${f.title || s} is required but not provided`);
      continue;
    }
    if (m === void 0 || m === "") continue;
    if (f.type === "string") {
      if (Array.isArray(m)) {
        if (!f.multiple) errors.push(`${f.title || s} must be a string, not an array`);else if (!m.every(item => typeof item === "string")) errors.push(`${f.title || s} must be an array of strings`);
      } else if (typeof m !== "string") errors.push(`${f.title || s} must be a string`);else if (f.options !== void 0 && !f.options.includes(m)) errors.push(`${f.title || s} must be one of: ${f.options.join(", ")}`);
    } else if (f.type === "number" && typeof m !== "number") errors.push(`${f.title || s} must be a number`);else if (f.type === "boolean" && typeof m !== "boolean") errors.push(`${f.title || s} must be a boolean`);else if ((f.type === "file" || f.type === "directory") && typeof m !== "string") errors.push(`${f.title || s} must be a path string`);
    if (f.type === "number" && typeof m === "number") {
      if (f.min !== void 0 && m < f.min) errors.push(`${f.title || s} must be at least ${f.min}`);
      if (f.max !== void 0 && m > f.max) errors.push(`${f.title || s} must be at most ${f.max}`);
    }
  }
  return {
    valid: errors.length === 0,
    errors: errors
  };
}
async function ge(manifest, extensionPath, userConfig = {}) {
  let {
      getMcpConfigForManifest: getMcpConfigForManifest
    } = await import("B:/~BUN/root/chunk-8n6b5xf1.js"),
    f = await getMcpConfigForManifest({
      manifest: manifest,
      extensionPath: extensionPath,
      systemDirs: Be(),
      userConfig: userConfig,
      pathSeparator: "/"
    });
  if (!f) {
    let c = qe(Error(`Failed to generate MCP server configuration from manifest "${manifest.name}"`), "MCPB manifest: failed to generate MCP server configuration");
    throw a(c), c;
  }
  let configuredCommand = Bln(manifest.server.mcp_config, f);
  return {
    ...f,
    ...(configuredCommand && {
      configuredCommand: configuredCommand
    })
  };
}
async function Ge(e, r) {
  try {
    return await We(e, r).read();
  } catch (error) {
    return t(`Failed to load MCPB cache metadata: ${error}`, {
      level: "error"
    }), null;
  }
}
async function Fe(e, r, n) {
  await ie().mkdir(e), await We(e, r).write(n);
}
async function dt(e, r, n) {
  let s = Jm(e);
  if (t(`Downloading MCPB from ${s}`), n) n(`Downloading ${s}...`);
  let f = performance.now(),
    m = !1;
  try {
    let l = await (X4(e) ? sX.get : hd.get)(e, {
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
      uint8Array = new Uint8Array(l.data);
    if (vF("mcpb", e, "success", performance.now() - f), m = !0, await Le(r, Buffer.from(uint8Array)), t(`Downloaded ${uint8Array.length} bytes to ${r}`), n) n("Download complete");
    return uint8Array;
  } catch (error) {
    if (!m) vF("mcpb", e, "failure", performance.now() - f, j9(error));
    let l = ew(xxe(d(error), e, s)),
      g = Error(`Failed to download MCPB file from ${s}: ${l}`);
    throw t(`Failed to download MCPB file from ${s}: ${l}`, {
      level: "error"
    }), g;
  }
}
async function ut(e, r, n, s) {
  if (s) s("Extracting files...");
  await ie().mkdir(r);
  let f = 0,
    m = Object.entries(e).filter(([l]) => !l.endsWith("/")),
    c = m.length;
  for (let [l, g] of m) {
    let h = _(r, l),
      w = pt(h);
    if (w !== r) await ie().mkdir(w);
    if (l.endsWith(".json") || l.endsWith(".js") || l.endsWith(".ts") || l.endsWith(".txt") || l.endsWith(".md") || l.endsWith(".yml") || l.endsWith(".yaml")) {
      let b = new TextDecoder().decode(g);
      await Le(h, b, "utf-8");
    } else await Le(h, Buffer.from(g));
    let y = n[l];
    if (y && y & 73) await ft(h, y & YXe).catch(() => {});
    if (f++, s && f % 10 === 0) s(`Extracted ${f}/${c} files`);
  }
  if (t(`Extracted ${f} files to ${r}`), s) s(`Extraction complete (${f} files)`);
}
async function lt(e, r) {
  let n = ie(),
    s = Ke(r),
    f = await Ge(s, e);
  if (!f) return !0;
  try {
    await n.stat(f.extractedPath);
  } catch (error) {
    if (k(error) === "ENOENT") t(`MCPB extraction path missing: ${f.extractedPath}`);else t(`MCPB extraction path inaccessible: ${f.extractedPath}: ${error}`, {
      level: "error"
    });
    return !0;
  }
  if (!Re(e)) {
    let m = _(r, e),
      c = _(r, Jm(e)),
      l;
    try {
      l = await n.stat(m);
    } catch (error) {
      if (k(error) === "ENOENT") t(`MCPB source file missing: ${c}`);else t(`MCPB source file inaccessible: ${c}: ${xxe(String(error), m, c)}`, {
        level: "error"
      });
      return !0;
    }
    if (f.sourceMtimeMs === void 0) return !0;
    let g = Math.floor(l.mtimeMs);
    if (g !== f.sourceMtimeMs) return t(`MCPB file modified: mtime ${new Date(g).toISOString()} != cached ${new Date(f.sourceMtimeMs).toISOString()}`), !0;
  }
  return !1;
}
async function hft(source, r, n, s, f, m, c, l) {
  let g = Jm(source),
    h = ie(),
    w = Ke(r);
  await h.mkdir(w), t(`Loading MCPB from source: ${g}`);
  let H = await Ge(w, source);
  if (H && !(await lt(source, r))) {
    t(`Using cached MCPB from ${H.extractedPath} (hash: ${H.contentHash})`);
    let N = _(H.extractedPath, "manifest.json"),
      j;
    try {
      j = await h.readFile(N, {
        encoding: "utf-8"
      });
    } catch (error) {
      if (K(error)) {
        let B = Error(`Cached manifest not found: ${N}`);
        throw a(B), B;
      }
      throw error;
    }
    let U = new TextEncoder().encode(j),
      manifest_2 = await Pe(U);
    if (manifest_2.user_config && Object.keys(manifest_2.user_config).length > 0) {
      let I = manifest_2.name,
        B = await a0e(n, I, l),
        _e = f || B || {},
        Me = EZ(_e, manifest_2.user_config);
      if (m || !Me.valid) return {
        status: "needs-config",
        manifest: manifest_2,
        extractedPath: H.extractedPath,
        contentHash: H.contentHash,
        configSchema: manifest_2.user_config,
        existingConfig: B || {},
        validationErrors: Me.valid ? [] : Me.errors
      };
      if (f) await VMt(n, I, f, manifest_2.user_config ?? {}, c, l);
      let mcpConfig = await ge(manifest_2, H.extractedPath, _e);
      return {
        manifest: manifest_2,
        mcpConfig: mcpConfig,
        extractedPath: H.extractedPath,
        contentHash: H.contentHash
      };
    }
    let mcpConfig_2 = await ge(manifest_2, H.extractedPath);
    return {
      manifest: manifest_2,
      mcpConfig: mcpConfig_2,
      extractedPath: H.extractedPath,
      contentHash: H.contentHash
    };
  }
  let y, b, sourceMtimeMs;
  if (Re(source)) {
    let N = De("md5").update(source).digest("hex").substring(0, 8);
    b = _(w, `${N}.mcpb`), y = await dt(source, b, s);
  } else {
    let N = _(r, source);
    if (s) s(`Loading ${g}...`);
    try {
      y = await h.readFileBytes(N), b = N, sourceMtimeMs = Math.floor((await h.stat(N)).mtimeMs);
    } catch (error) {
      let U = _(r, g);
      if (K(error)) {
        let A = Error(`MCPB file not found: ${U}`);
        throw t(`MCPB file not found: ${U}`, {
          level: "error"
        }), A;
      }
      throw N === U ? error : new R(xxe(d(error), N, U), "MCPB local file read failed");
    }
  }
  let contentHash = De("sha256").update(y).digest("hex").substring(0, 16);
  if (t(`MCPB content hash: ${contentHash}`), s) s("Extracting MCPB archive...");
  let C = await qXe(Buffer.from(y)),
    O = uQt(y),
    T = C["manifest.json"];
  if (!T) {
    let N = Error("No manifest.json found in MCPB file");
    throw t(`No manifest.json found in MCPB file: ${b}`, {
      level: "error"
    }), N;
  }
  let manifest_3 = await Pe(T);
  if (t(`MCPB manifest: ${manifest_3.name} v${manifest_3.version} by ${manifest_3.author.name}`), !manifest_3.server) {
    let N = qe(Error(`MCPB manifest for "${manifest_3.name}" does not define a server configuration`), "MCPB manifest does not define a server configuration");
    throw a(N), N;
  }
  let extractedPath = _(w, contentHash);
  if (await ut(C, extractedPath, O, s), manifest_3.user_config && Object.keys(manifest_3.user_config).length > 0) {
    let N = manifest_3.name,
      j = await a0e(n, N, l),
      U = f || j || {},
      A = EZ(U, manifest_3.user_config);
    if (m || !A.valid) {
      let B = {
        source: source,
        contentHash: contentHash,
        extractedPath: extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: sourceMtimeMs
      };
      return await Fe(w, source, B), {
        status: "needs-config",
        manifest: manifest_3,
        extractedPath: extractedPath,
        contentHash: contentHash,
        configSchema: manifest_3.user_config,
        existingConfig: j || {},
        validationErrors: A.valid ? [] : A.errors
      };
    }
    if (f) await VMt(n, N, f, manifest_3.user_config ?? {}, c, l);
    if (s) s("Generating MCP server configuration...");
    let mcpConfig_3 = await ge(manifest_3, extractedPath, U),
      I = {
        source: source,
        contentHash: contentHash,
        extractedPath: extractedPath,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: sourceMtimeMs
      };
    return await Fe(w, source, I), {
      manifest: manifest_3,
      mcpConfig: mcpConfig_3,
      extractedPath: extractedPath,
      contentHash: contentHash
    };
  }
  if (s) s("Generating MCP server configuration...");
  let mcpConfig_4 = await ge(manifest_3, extractedPath),
    uo = {
      source: source,
      contentHash: contentHash,
      extractedPath: extractedPath,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: sourceMtimeMs
    };
  return await Fe(w, source, uo), t(`Successfully loaded MCPB: ${manifest_3.name} (extracted to ${extractedPath})`), {
    manifest: manifest_3,
    mcpConfig: mcpConfig_4,
    extractedPath: extractedPath,
    contentHash: contentHash
  };
}
function Gh(e) {
  return e.source;
}
function KMt(e, r) {
  return e.find(item => item.repository === r || item.source === r);
}
function mL(e, r) {
  if (bRe()) return Promise.resolve({});
  let {
      optionValues: optionValues
    } = Ae(),
    s = optionValues.get(e);
  if (s !== void 0) return s;
  let f = ht(e, r);
  return optionValues.set(e, f), f.catch(() => {
    if (optionValues.get(e) === f) optionValues.delete(e);
  }), f;
}
async function ht(e, r) {
  let n = SRe(e).options ?? {},
    s = (await Kn().readAsync(r))?.pluginSecrets,
    f = [...i0(e).toReversed(), e].reduce((acc, item) => ({
      ...acc,
      ...s?.[item]
    }), {});
  return {
    ...n,
    ...f
  };
}
function l0e() {
  Ae().optionValues.clear();
}
async function qWe(e, r, n, s, f) {
  let m = {},
    c = {};
  for (let [y, b] of Object.entries(r)) if (n[y]?.sensitive === !0) c[y] = String(b);else m[y] = b;
  let l = new Set(Object.keys(c)),
    g = new Set(Object.keys(m)),
    h = await Kn().mutate(y => {
      let b = hon(y.pluginSecrets, e),
        S = b.replaced.length === 0 ? y.pluginSecrets?.[b.written] : [...b.replaced.toReversed(), b.written].reduce((acc, item) => ({
          ...acc,
          ...y.pluginSecrets?.[item]
        }), {}),
        M = S ? kR(S, (O, T) => !g.has(T)) : void 0,
        C = M && S && Object.keys(M).length !== Object.keys(S).length;
      if (Object.keys(c).length === 0 && !C && b.replaced.length === 0) return y;
      return {
        ...y,
        pluginSecrets: {
          ...kR(y.pluginSecrets ?? {}, (O, T) => !b.replaced.includes(T)),
          [b.written]: {
            ...M,
            ...c
          }
        }
      };
    }, f);
  if (!h.success) {
    let y = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw t(y.message, {
      level: "error"
    }), y;
  }
  if (h.warning) t(`Plugin secrets save warning: ${h.warning}`, {
    level: "warn"
  });
  let w = Pl("userSettings")?.pluginConfigs,
    H = {};
  for (let y of Mbe(e)) {
    let b = Object.keys(w?.[y]?.options ?? {}).filter(item => l.has(item)),
      S = Object.fromEntries(b.map(item => [item, void 0])),
      M = y === e ? m : {};
    if (Object.keys(M).length > 0 || b.length > 0) H[y] = {
      options: {
        ...M,
        ...S
      }
    };
  }
  if (Object.keys(H).length > 0) {
    let y = await qn("userSettings", {
      pluginConfigs: yt(w, e, H)
    }, void 0, s);
    if (y.error) throw t(`Failed to save plugin options for ${e} to settings.json: ${d(y.error)}`, {
      level: "error"
    }), Error(`Failed to save plugin options for ${e}: ${y.error.message}`);
  }
  l0e();
}
async function IIi(e) {
  let unreadable = [],
    n = new Set();
  ir();
  let s = Pl("userSettings");
  if (s === null || s === void 0) {
    let f = un("userSettings");
    if (f !== void 0 && (await JU(f)) !== "gone") unreadable.push("settings_unreadable");
  }
  for (let f of Object.keys(s?.pluginConfigs ?? {})) n.add(f);
  try {
    let f = Kn(),
      m = f.readAsyncStrict ? await f.readAsyncStrict(e, {
        inaccessibleAs: "failure"
      }) : await f.readAsync(e);
    if (m === Bs) unreadable.push("secrets_unreadable");else for (let c of Object.keys(m?.pluginSecrets ?? {})) {
      let l = c.indexOf("/");
      n.add(l === -1 ? c : c.slice(0, l));
    }
  } catch {
    unreadable.push("secrets_unreadable");
  }
  return {
    ids: [...n],
    unreadable: unreadable
  };
}
async function ze(e) {
  ir();
  let r = Pl("userSettings");
  if (r !== null && r !== void 0) return r;
  let n = un("userSettings");
  if (n === void 0 || (await JU(n)) === "gone") return;
  return t(`deletePluginOptions: the user settings file (${n}) is there and could not be read, so options of ${e} may remain in it`, {
    level: "warn"
  }), "unreadable";
}
async function MIi(e, r, n, s) {
  let f = !0,
    m = await ze(e);
  if (m === "unreadable") f = !1, s?.push("settings_unreadable");
  let c = m === "unreadable" ? void 0 : m,
    l = Mbe(e).filter(item => c?.pluginConfigs?.[item] !== void 0);
  if (l.length > 0) {
    let pluginConfigs_2 = Object.fromEntries(l.map(item => [item, void 0])),
      {
        error: error_2
      } = await qn("userSettings", {
        pluginConfigs: pluginConfigs_2
      }, void 0, r);
    if (error_2) t(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${error_2.message}`, {
      level: "warn"
    }), f = !1, s?.push("settings_write_failed");else {
      let y = await ze(e);
      if (y === "unreadable") f = !1, s?.push("settings_unreadable");
      let b = y === "unreadable" ? void 0 : y?.pluginConfigs;
      if (l.some(item => b?.[item] !== void 0)) t(`deletePluginOptions: settings.pluginConfigs[${e}] still reads back after a write that reported no error`, {
        level: "warn"
      }), f = !1, s?.push("settings_remain");
    }
  }
  let g = [e, ...i0(e)],
    h = w => g.some(item => w === item || w.startsWith(`${item}/`));
  try {
    let w = Kn();
    if (!(await w.mutate(y => {
      if (!y.pluginSecrets) return y;
      let b = Object.entries(y.pluginSecrets).filter(([S]) => !h(S));
      if (b.length === Object.keys(y.pluginSecrets).length) return y;
      return {
        ...y,
        pluginSecrets: b.length > 0 ? Object.fromEntries(b) : void 0
      };
    }, n)).success) t(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
      level: "warn"
    }), f = !1, s?.push("secrets_write_failed");else {
      let y = w.readAsyncStrict ? await w.readAsyncStrict(n, {
        inaccessibleAs: "failure"
      }) : await w.readAsync(n);
      if (y === Bs || Object.keys(y?.pluginSecrets ?? {}).some(h)) t(`deletePluginOptions: after the delete, secure storage could not be read or still holds pluginSecrets for ${e}`, {
        level: "warn"
      }), f = !1, s?.push(y === Bs ? "secrets_unreadable" : "secrets_remain");
    }
  } catch (error) {
    t(`deletePluginOptions: storage lock unavailable for ${e}: ${d(error)}`, {
      level: "warn"
    }), f = !1, s?.push("secrets_write_failed");
  }
  return l0e(), f;
}
async function dfs(e, r, n, s, f) {
  {
    let optionsCarried = !0,
      targetHadOwn = !1,
      {
        error: error_3
      } = await tl("userSettings", C => {
        let O = C?.pluginConfigs?.[e];
        if (O === void 0) return null;
        if (C?.pluginConfigs?.[r] !== void 0) return targetHadOwn = !0, null;
        return {
          pluginConfigs: {
            [r]: O
          }
        };
      }, void 0, s);
    if (error_3) optionsCarried = !1, t(`copyPluginOptions: failed to copy settings.pluginConfigs[${e}]: ${error_3.message}`, {
      level: "warn"
    });
    if (!optionsCarried) return t(`copyPluginOptions: the settings write failed, so the secrets of ${e} were not copied`, {
      level: "warn"
    }), l0e(), {
      optionsCarried: optionsCarried,
      secretsCarried: !1,
      oldDataDirDisposable: !1,
      dataDirCopied: !1,
      targetHadOwn: targetHadOwn
    };
    let secretsCarried = !0;
    try {
      if (!(await Kn().mutate(O => {
        if (!O.pluginSecrets) return O;
        let T = {};
        for (let [v, P] of Object.entries(O.pluginSecrets)) {
          let J = Je(v, e, r);
          if (J === void 0) continue;
          if (O.pluginSecrets[J] === void 0) T[J] = P;else targetHadOwn = !0;
        }
        return Object.keys(T).length === 0 ? O : {
          ...O,
          pluginSecrets: {
            ...O.pluginSecrets,
            ...T
          }
        };
      }, f)).success) secretsCarried = !1, t(`copyPluginOptions: failed to copy pluginSecrets for ${e}`, {
        level: "warn"
      });
    } catch {
      secretsCarried = !1, t(`copyPluginOptions: secure storage unavailable for ${e}`, {
        level: "warn"
      });
    }
    if (!optionsCarried || !secretsCarried) return l0e(), {
      optionsCarried: optionsCarried,
      secretsCarried: secretsCarried,
      oldDataDirDisposable: !1,
      dataDirCopied: !1,
      targetHadOwn: targetHadOwn
    };
    let h = ih(e),
      w = ih(r),
      H = `${w}.switching-${process.pid}`,
      oldDataDirDisposable = !1,
      dataDirCopied = !1,
      dataDirKeptReason,
      M;
    try {
      let C = await JU(h);
      if (C === "gone") oldDataDirDisposable = !0;else if (C === "unreadable") dataDirKeptReason = "copy-failed", t(`copyPluginOptions: the data directory of ${e} could not be examined; it is kept and was not copied`, {
        level: "warn"
      });else if (!(M = await oe(h, {
        bigint: !0
      })).isDirectory() || !(await ZV(re(h), te(h)))) dataDirKeptReason = "copy-failed", t(`copyPluginOptions: the data directory of ${e} is not a real directory; it is kept and was not copied`, {
        level: "warn"
      });else {
        let O = await gt(w).then(() => {
          return;
        }, T => K(T) ? void 0 : k(T));
        if (O === void 0) {
          await yl(H);
          let T = await ZV(re(h), te(h)),
            v = await oe(h, {
              bigint: !0
            });
          if (!T || !v.isDirectory() || v.dev !== M?.dev || v.ino !== M?.ino) throw Error("the old data directory is not the real directory first seen");
          await n(h, H, h, H, h, !0, new Set(), void 0, !1, !0);
          let P = await oe(h, {
            bigint: !0
          });
          if (!P.isDirectory() || !(await ZV(re(h), te(h))) || P.dev !== v.dev || P.ino !== v.ino) throw Error("the old data directory changed during the copy");
          if (!(await oe(H)).isDirectory() || !(await ZV(re(H), te(H)))) throw Error("the staging folder is not a real directory");
          if (await Is(H, w), !(await oe(w)).isDirectory() || !(await ZV(re(w), te(w)))) throw await PC(w).catch(() => {}), Error("what stands at the target after the move is not a real directory");
          oldDataDirDisposable = !0, dataDirCopied = !0;
        } else dataDirKeptReason = O === "ENOTEMPTY" || O === "EEXIST" || O === "ENOTDIR" ? "target-had-own" : "copy-failed";
      }
    } catch (error) {
      dataDirKeptReason = "copy-failed", t(`copyPluginOptions: failed to copy the data directory of ${e}: ${d(error)}`, {
        level: "warn"
      }), await yl(H).catch(() => {});
    }
    return l0e(), {
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
function Je(e, r, n) {
  {
    let s = `${r}/`;
    return e === r ? n : e.startsWith(s) ? `${n}/${e.slice(s.length)}` : void 0;
  }
  return;
}
async function DIi(e, r) {
  {
    let n = Pl("userSettings")?.pluginConfigs;
    if (n?.[e] !== void 0 && n[r] !== void 0) return !0;
    try {
      let s = (await Kn().readAsync())?.pluginSecrets ?? {};
      return Object.keys(s).some(item => {
        let m = Je(item, e, r);
        return m !== void 0 && s[m] !== void 0;
      });
    } catch {
      return t(`wouldTargetKeepOwnPluginOptions: secure storage could not be read (switch from ${e}), so the answer is 'unknown'`, {
        level: "warn"
      }), "unknown";
    }
  }
  return !1;
}
async function YWe(e, r) {
  let userConfig_2 = e.manifest.userConfig;
  if (!userConfig_2 || Object.keys(userConfig_2).length === 0) return {};
  let s = await mL(Gh(e), r),
    f = {};
  for (let [m, c] of Object.entries(userConfig_2)) {
    let l = Wr(s, m);
    if (l === void 0 || l === "" || c.sensitive !== !0 && !EZ({
      [m]: l
    }, {
      [m]: c
    }).valid) f[m] = c;
  }
  return f;
}
function cfs(e, r) {
  let n = e?.options;
  return n !== void 0 && !(typeof r === "string" && n.includes(r));
}
function gft(e, r) {
  let n = {};
  for (let [f, m] of Object.entries(r)) {
    if (m.required && m.default === void 0) continue;
    n[f] = m.default ?? "";
  }
  let s = kR(e, (f, m) => {
    let c = r[m]?.options;
    if (c === void 0 || !cfs(r[m], f)) return !0;
    return t(`plugin option ${m} holds a value that is not one of ${c.join(", ")}; it reads as unset`, {
      level: "warn"
    }), !1;
  });
  return {
    ...n,
    ...s
  };
}
function $ye(e, r, n = s => s) {
  let s = m => n(m.replace(/\\/g, "/")),
    f = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => s(r.path));
  if (r.projectDir !== null) f = f.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => {
    let m = nIo();
    if (m === null) throw new YA();
    return s(m);
  });
  if (r.source) {
    let {
      source: source_2,
      dataDir: dataDir
    } = r;
    f = f.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => {
      let l = Ye({
        source: source_2,
        dataDir: dataDir
      }, aNe);
      if (l === null) throw new Ne();
      return s(l);
    });
  }
  return f;
}
class Ne extends Error {
  name = "PluginDataDirUnknownError";
  constructor() {
    super("CLAUDE_PLUGIN_DATA cannot be filled in: the plugin is on another machine, and its data folder there did not come with it");
  }
}
function LIi(e, r) {
  if (r.dataDir !== null) return !1;
  try {
    return $ye(e, {
      ...r,
      projectDir: null
    }), !1;
  } catch (error) {
    return error instanceof Ne;
  }
}
function Ye(e, r) {
  return e.dataDir === void 0 ? r(e.source) : e.dataDir;
}
var Xe = "${CLAUDE_";
function NIi(e, r, n = "") {
  let s = e.split(Xe).length - 1;
  if (s === 0) return 0;
  let f = nIo();
  return r.path.includes(Xe) || f?.includes("$") || r.dataDir?.includes("$") ? 1 / 0 : s * 3 * Math.max(r.path.length, f?.length ?? 0, TM, (Ye(r, ih) ?? "").length, n.length);
}
function YJt(e, r, {
  missingKey = "throw"
} = {}) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (s, f) => {
    let m = Wr(r, f);
    if (m === void 0) {
      if (missingKey === "literal") return s;
      throw Error(`Plugin option "${f}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${f}".`);
    }
    return String(m);
  });
}
function XJt(e, r) {
  try {
    return YJt(e, r) !== e;
  } catch {
    return !0;
  }
}
function Flo(e, r, n, s) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (f, m) => {
    if (n[m]?.sensitive === !0) return `[sensitive option '${m}' not available in skill content]`;
    let c = Wr(r, m);
    if (c === void 0) return f;
    let l = String(c);
    return s ? s(l) : l;
  });
}
function yt(e, r, n) {
  let s = hon(e, r);
  if (s.replaced.length === 0) return n;
  let f = [...s.replaced.toReversed(), s.written],
    m = kR(n, (g, h) => !s.replaced.includes(h)),
    options = {
      ...kR(f.reduce((acc, item) => ({
        ...acc,
        ...e?.[item]?.options,
        ...(item === s.written ? void 0 : n[item]?.options)
      }), {}), g => g !== void 0),
      ...m[s.written]?.options
    },
    l = L(f.flatMap(item => Object.keys(e?.[item]?.mcpServers ?? {})));
  return {
    ...m,
    ...Object.fromEntries(s.replaced.map(item => [item, void 0])),
    [s.written]: {
      options: options,
      ...(l.length === 0 ? {} : {
        mcpServers: Object.fromEntries(l.map(item => [item, f.reduce((acc, w) => ({
          ...acc,
          ...e?.[w]?.mcpServers?.[item]
        }), {})]))
      })
    }
  };
}
var Hlo = e => bIn({
  pluginName: e.name,
  pluginStorageId: Gh(e)
});
var FIi = (e, r, n) => `${e}: ${r} did not answer within ${n}ms`;
var HIi = "the plugin is unloaded; /reload-plugins brings it back";
function q({
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
  if (hookOrigin) t(`hooks module ${GMt(members)}: ${event}${kind} nested in ${Nlo(hookOrigin)}`);
  let H = members.flatMap(item => {
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
    leftOut: H.length === 0 ? void 0 : H,
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
function X(e, r, n) {
  if (!n || n.length === 0) return e;
  let s = zMt().get(n) ?? [],
    f = Date.now(),
    m = b => s[b]?.isLent !== !0 || s[b].isHeld === !0,
    {
      caller: caller,
      above: above
    } = qo(n.filter((item, index) => m(index) || f < (s[index]?.until ?? 0)), e.name),
    g = (b, S) => b === "every" || b.includes(S),
    h = le(n.slice(0, -1).filter((item, index) => m(index)), e.name),
    leftOut = e.registrationsFor(r).filter(item => g(caller, item) || g(h, item));
  if (leftOut.length === 0) return e;
  let y = `origin ${Nlo(n)}`;
  if (!e.hooks(r, leftOut)) {
    let b = caller === "every" || above === "every";
    t(`hooks module ${e.label} ${r} skipped: re-entry (` + (b ? `the plugin's own code raised it; ${y})` : `its own frame is being dispatched; ${y})`));
    return;
  }
  return t(`hooks module ${e.label} ${r}: hooks ${leftOut.join(", ")} left out for re-entry (${y})`), {
    ...e,
    leftOut: leftOut,
    hooks: (b, S = []) => e.hooks(b, [...leftOut, ...S]),
    catches: (b, S = [], M) => e.catches(b, [...leftOut, ...S], M),
    matcherFor: (b, S = []) => e.matcherFor(b, [...leftOut, ...S]),
    standingFor: (b, S = []) => e.standingFor(b, [...leftOut, ...S])
  };
}
async function Ze({
  members: members_2,
  event: event_2,
  hookOrigin: hookOrigin_2,
  signal: signal
}) {
  let f = members_2.find(item => item.status().kind === "dead")?.hopKey.replaced?.();
  if (f === void 0) return members_2;
  return t(`hooks module ${members_2.map(item => item.label).join(", ")}: ${event_2} waits for the hooks worker's replacement`), await new Promise(m => {
    signal.addEventListener("abort", () => m(), {
      once: !0
    }), f.then(m, m);
  }), members_2.flatMap(item => {
    let c = Ae().loadedModules.find(h => h.name === item.name);
    if (!(item.status().kind !== "live" && c !== void 0 && c.environmentId !== item.environmentId)) return [item];
    let g = c.hooks(event_2) && Bf(c) ? X(c, event_2, hookOrigin_2) : void 0;
    return g === void 0 ? [] : [g];
  });
}
async function Qe({
  hop: hop,
  dispatchId: dispatchId,
  members: members_3,
  error: error_4,
  called: called,
  beneath: beneath
}) {
  let {
      event: event_3,
      e: e_2,
      signal: signal_2
    } = hop,
    h = S => S.filter(item => Y(item, event_3, e_2)),
    reason = d(error_4),
    members_4 = Te(h(members_3), reason),
    y = members_4[0]?.hopKey,
    b = y?.kept;
  while (members_4.length > 0 && !signal_2.aborted) {
    let members_5 = h(V(await Ze({
        ...hop,
        members: members_4
      }), event_3)),
      M = members_5[0]?.hopKey,
      C = members_5.find(item => item.name === b?.plugin);
    if (M === void 0 || signal_2.aborted) break;
    t(`hooks module ${GMt(members_5)}: .catch asked in the replacement after the hooks worker ended during ${event_3}`);
    for (let O of members_5) O.enter();
    try {
      let O = await M.dispatch({
          ...q({
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
        T = C !== void 0 && b !== void 0 && y?.isKeptVerdict?.(dispatchId, O.unmatched !== !0) === !0;
      for (let v of members_5) if (O.answered?.includes(v.environmentId) === !0) kq(v.name, `the hooks worker was replaced during ${event_3}; ${v.name}'s .catch answered in place of its hook`);
      if (T) M.unloadCrashed?.(C.environmentId, b);
      return O;
    } catch (error) {
      reason = d(error), members_4 = Te(members_5, reason), t(`hooks module ${GMt(members_5)}: .catch not heard after the hooks worker ended during ${event_3}: ${reason}` + (members_4.length > 0 ? "; asked again of whoever stands" : ""), {
        level: "error"
      });
    } finally {
      for (let O of members_5) O.leave();
    }
  }
  if (members_4.length > 0) t(`hooks module ${GMt(members_4)}: no .catch is asked after the hooks worker ended during ${event_3}: ` + (signal_2.aborted ? "its caller is gone" : "no replacement that may be waited for holds its hook"), {
    level: "error"
  });
  return;
}
function xe(e) {
  let r = new $e(`${GMt(e)}: next refused: the floors handed back are not ones a next.to of these plugins leaves (host rule)`);
  return t(r.message, {
    level: "error"
  }), r;
}
import { isDeepStrictEqual as eo } from "util";
function oo(e, r, n, event_4, raised) {
  return r.some(item => eo(item, n)) ? r : e.slice(Math.max(e.findIndex(item => item.name === r.at(-1)?.plugin), 0)).filter(item => m4i(r, item.tier, item.name) === void 0).flatMap(item => (item.args.scan.nextTo ?? []).filter(l => l !== "user" || D(n) && n.isPastPeers === !0 && Vxr({
    clauses: item.standingFor(event_4),
    scan: item.args.scan,
    event: event_4,
    raised: raised
  })).map(l => g4i(r, {
    from: item.tier,
    to: l,
    plugin: item.name
  }))).find(item => eo(item.at(-1), n));
}
function we(e, r, n, s, f) {
  if (!Array.isArray(n)) return;
  let m = e;
  for (let c of n) if (m = oo(r, m, c, s, f), m === void 0) return;
  return m;
}
async function $lo(hop_2) {
  let {
      event: event_5,
      e: e_3,
      call: call,
      signal: signal_3,
      floors: floors_2
    } = hop_2,
    members_6 = ce(hop_2.members, event_5, e_3),
    l = members_6[0]?.hopKey;
  if (!l) return call(e_3, void 0, floors_2);
  let g,
    h = (M, C, O) => {
      let T = we(floors_2, members_6, O, event_5, e_3);
      if (T === void 0) return Promise.reject(xe(members_6));
      return g = call(M, C, T), g;
    },
    w = q({
      ...hop_2,
      members: members_6,
      kind: ""
    }),
    H = performance.now();
  for (let M of members_6) M.enter();
  let y;
  try {
    y = await l.dispatch({
      ...w,
      caughtBy: members_6.filter(item => Y(item, event_5, e_3)).map(item => item.environmentId)
    }, h, signal_3);
  } catch (error_5) {
    let C = await Qe({
      hop: hop_2,
      dispatchId: w.id,
      members: members_6,
      error: error_5,
      called: () => g !== void 0,
      beneath: (O, T, v) => g ?? h(O, T, v)
    });
    if (C === void 0) throw error_5;
    y = C;
  } finally {
    for (let M of members_6) M.leave();
  }
  let S = typeof e_3 === "object" && "requestId" in e_3 && typeof e_3.requestId === "string" ? ` key=${e_3.requestId}` : "";
  if (t(`hooks module ${GMt(members_6)} ${event_5} settled in ${(performance.now() - H).toFixed(1)}ms (${l.kind} hop, next() included)${S}`), y.withheld === !0) hop_2.withheld?.();
  return to(y.result);
}
function He(e, r, n) {
  e.leave(), t(`hooks module ${e.label} ${r} settled in ${(performance.now() - n).toFixed(1)}ms (native link, next() included)`);
}
function be({
  loaded: loaded,
  event: event_6,
  origin: origin_2
}, s) {
  let f = V([loaded], event_6).length === 1 && Ilo(loaded, event_6, s);
  if (f && origin_2) t(`hooks module ${loaded.label} (native): ${event_6} nested in ` + Nlo(origin_2));
  return f;
}
function Ft(e) {
  let {
    loaded: loaded_2,
    event: event_7,
    origin: s
  } = e;
  if (loaded_2.link === void 0) throw new $e(`${loaded_2.name}: ${event_7}: not a native module; it runs in a hop`);
  let f = loaded_2.link({
      event: event_7,
      leftOut: loaded_2.leftOut,
      hookOrigin: s,
      gestureAt: e.gestureAt
    }),
    m = f.catch;
  async function c(h) {
    let w = performance.now();
    loaded_2.enter();
    try {
      return await h();
    } finally {
      He(loaded_2, event_7, w);
    }
  }
  async function l(h, w) {
    loaded_2.enter();
    try {
      return await m?.(h, w);
    } finally {
      loaded_2.leave();
    }
  }
  let run = (h, w, H) => be({
    loaded: loaded_2,
    event: event_7,
    origin: s
  }, h) ? c(() => f.run(h, w, H)) : w(h);
  return $t({
    ...f,
    run: run,
    ...(m !== void 0 && {
      catch: l
    })
  });
}
function ro(e) {
  let {
      event: event_8,
      e: e_4,
      open: open,
      signal: signal_4,
      floors: floors_3
    } = e,
    members_7 = ce(e.members, event_8, e_4),
    l = members_7[0]?.hopKey;
  if (!l) return open(e_4, void 0, floors_3);
  let g = (H, y, b) => {
      let S = we(floors_3, members_7, b, event_8, e_4);
      if (S === void 0) throw xe(members_7);
      return M2e(open(H, y, S));
    },
    h = performance.now();
  for (let H of members_7) H.enter();
  let w = l.dispatchStream(q({
    ...e,
    members: members_7,
    kind: " stream"
  }), g, signal_4);
  return async function* () {
    try {
      let H = yield* M2e(w);
      return to(H);
    } finally {
      for (let H of members_7) H.leave();
      t(`hooks module ${GMt(members_7)} ${event_8} stream settled in ${(performance.now() - h).toFixed(1)}ms (${l.kind} hop, next() included)`);
    }
  }();
}
function Nt(e) {
  let {
    loaded: loaded_3,
    event: event_9,
    origin: s
  } = e;
  if (loaded_3.streamLinks === void 0) throw new $e(`${loaded_3.name}: ${event_9}: not a native module; it runs in a hop`);
  function f(m) {
    let c = performance.now();
    return loaded_3.enter(), async function* () {
      try {
        return yield* m;
      } finally {
        He(loaded_3, event_9, c);
      }
    }();
  }
  return loaded_3.streamLinks({
    event: event_9,
    leftOut: loaded_3.leftOut,
    hookOrigin: s
  }).map(item => {
    let c = item.catch;
    return {
      ...item,
      run: async (l, g, h) => be({
        loaded: loaded_3,
        event: event_9,
        origin: s
      }, l) ? f(await item.run(l, g, h)) : g(l),
      ...(c !== void 0 && {
        catch: async (l, g, h) => f(await c(l, g, h))
      })
    };
  });
}
var Se = (e, r, n) => e.map(item => {
  let f = r.get(item);
  if (f === void 0) throw new $e(`${n}: a hop member is not one of these handlers`);
  return f;
});
var no = ({
  loaded: loaded_4,
  event: event_10,
  origin: n,
  raise: raise_2,
  gestureAt: gestureAt_2,
  owners: owners,
  withheld: withheld
}) => ({
  name: loaded_4.name,
  tier: loaded_4.tier,
  ...(_xs(loaded_4.args.modulePath) && {
    answersForEngine: !0
  }),
  ...(withheld && {
    withheld: withheld
  }),
  run: (e_5, g, {
    call: call_2,
    floors: floors_4,
    cutAt: cutAt_2
  }) => $lo({
    members: [loaded_4],
    event: event_10,
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
    run: l => $lo({
      members: Se(l.members, owners, event_10),
      event: event_10,
      e: l.e,
      call: l.call,
      signal: l.signal,
      hookOrigin: n,
      raise: raise_2,
      gestureAt: gestureAt_2,
      withheld: withheld,
      origin: l.origin,
      floors: l.floors,
      cutAt: l.cutAt
    })
  }
});
function io(e) {
  return e.loaded.link !== void 0 ? Ft(e) : no(e);
}
function Ee(e) {
  let {
    loadedModules: loadedModules,
    moduleSeats: moduleSeats
  } = Ae();
  return loadedModules.find(item => item.name === e)?.tier ?? moduleSeats.get(e) ?? "user";
}
var JJt = e => h4i.some(item => item === Ee(e));
function ufs(e, r, n) {
  let s = e.matcherFor(r);
  if (s === void 0) return !0;
  try {
    if (dZe(s, n, NNe(r))) return !0;
  } catch (error) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${d(error)}); the hop decides`), !0;
  }
  return W(e, r, n), !1;
}
function so(e, r, {
  keys: keys,
  e: e_6
}) {
  let f = e.matcherFor(r);
  if (f === void 0 || !BS(e_6)) return !1;
  try {
    let c = NNe(r),
      l = keys.some(item => Object.hasOwn(e_6, item) && !awo(f, {
        [item]: e_6[item]
      }, c));
    if (l) W(e, r, e_6);
    return l;
  } catch (error) {
    return t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${d(error)}); the hop decides`), !1;
  }
}
function bce(e, r, {
  only: only,
  e: e_7,
  among: among,
  pinned: pinned
} = {}) {
  let c = (among ?? Ae().loadedModules).flatMap(item => {
    if (!(item.hooks(e) && item.name === (only ?? item.name) && Bf(item))) return [];
    let w = X(item, e, r);
    return w === void 0 || pinned !== void 0 && so(w, e, pinned) ? [] : [w];
  });
  if (e_7 === void 0) return c;
  let l = c.findIndex(item => ufs(item, e, e_7));
  return l === -1 ? [] : c.slice(l);
}
function ao({
  event: event_11,
  e: e_8,
  origin: origin_3,
  only: only_2
}) {
  let f = me(bce(event_11, origin_3, {
    only: only_2
  }), event_11, e_8).filter(item => item.link === void 0 && item.hopKey.isDeclared?.(item.name) !== !1 && Y(item, event_11, e_8)).map(item => item.name);
  return f.length === 0 ? void 0 : new $e(`${event_11} refused: the hooks worker is being replaced, and a hook on it with a .catch (${f.join(", ")}) cannot be asked until the reload is in`);
}
import { AsyncLocalStorage as Xt } from "async_hooks";
var wIn = new Xt();
function Ulo(e, r) {
  let n = {
      isOver: !1
    },
    s = e.run(n, r),
    f = () => {
      n.isOver = !0;
    };
  return s.then(f, f), s;
}
var cca = e => Ulo(wIn, e);
var ffs = () => wIn.getStore()?.isOver === !1;
function Xyr(e, r) {
  let n = [...Ae().hooksRespawns],
    s = n.length > 0 && ffs(),
    f = s ? ao(e) : void 0;
  if (f !== void 0) return t(f.message, {
    level: "error"
  }), Promise.reject(f);
  if (n.length === 0 || s) return;
  let m = Promise.all(n).then(() => {
    return;
  });
  return (r !== void 0 ? Ao(m, r, () => NSo(r)) : m).then(() => Xyr(e, r));
}
function QJt(e, r) {
  let n = Ae();
  return n.hooksRespawns.size > 0 && n.loadedModules.some(item => item.link === void 0 && item.hooks(e.event)) ? Xyr(e, r) : void 0;
}
function pfs(e, r) {
  let s = e.event === "classic.SessionEnd" ? void 0 : QJt(e, r);
  return s !== void 0 && r !== void 0 ? s.catch(m => Promise.reject(r.aborted ? hRe(r) : m)) : s;
}
function hL(event_12, origin_4, n = {}) {
  let s = [],
    owners_2 = new Map();
  for (let loaded_5 of bce(event_12, origin_4, n)) {
    let c = io({
      loaded: loaded_5,
      event: event_12,
      origin: origin_4,
      raise: n.raise,
      gestureAt: n.gestureAt,
      owners: owners_2,
      withheld: n.withheld
    });
    owners_2.set(c, loaded_5), s.push(c), n.drawn?.(c, loaded_5);
  }
  return s;
}
function F6(e, r, n) {
  let s = NNe(e);
  return Ae().loadedModules.filter(item => {
    let m = item.hooks(e) && Bf(item) ? X(item, e, n) : void 0;
    if (m === void 0) return !1;
    return Wco(m, e, r, s);
  }).map(item => item.name);
}
var to = e => e;
var $t = e => e;
var mo = e => [...e];
function TZ(e) {
  let plugin_2 = e?.map(mft).findLast(n => n !== void 0);
  if (plugin_2 === void 0) return ZQe;
  return Object.freeze({
    plugin: plugin_2,
    tier: Ee(plugin_2)
  });
}
function $Ii(e) {
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
var co = (e, r) => ({
  name: e.loaded.name,
  tier: e.loaded.tier,
  run: (e_9, s, {
    open: open_2,
    floors: floors_5
  }) => ro({
    members: [e.loaded],
    event: e.event,
    e: e_9,
    open: open_2,
    signal: s.signal,
    hookOrigin: e.origin,
    raise: e.raise,
    origin: s.origin,
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
    }) => ro({
      members: Se(members_8, r, e.event),
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
function UIi(event_13, origin_6, n = {}) {
  let s = new Map();
  return bce(event_13, origin_6, n).flatMap(f => {
    if (f.streamLinks !== void 0) return mo(Nt({
      loaded: f,
      event: event_13,
      origin: origin_6
    }));
    let m = co({
      loaded: f,
      event: event_13,
      origin: origin_6,
      raise: n.raise,
      gestureAt: void 0
    }, s);
    return s.set(m, f), [m];
  });
}
var uca = 3;
var BIi = e => `${e}: the op was aborted: the plugin's environment was unloaded`;
export { Ilo, Vyr, Hye, qJt, ifs, Mlo, Dlo, Llo, wTe, Kyr, gXe, wq, kq, qyr, afs, Yyr, mft, PIi, zMt, aca, Nlo, lca, _In, lfs, dca, GMt, bIn, OIi, pL, SIn, a0e, VMt, EZ, hft, Gh, KMt, mL, l0e, qWe, IIi, MIi, dfs, DIi, YWe, cfs, gft, $ye, LIi, NIi, YJt, XJt, Flo, Hlo, FIi, HIi, $lo, JJt, ufs, bce, wIn, Ulo, cca, ffs, Xyr, QJt, pfs, hL, F6, TZ, $Ii, UIi, uca, BIi };