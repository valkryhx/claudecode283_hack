// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { WS, Ew, eM, J2e, xA, Na, G3, ms, v, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, PM, F, d, k, kh, ci, K, wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Cy, J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vt, t, _, ee, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Is, Bqe, ZU } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { OR } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Zd, Tea } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { nb, hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { nl, rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { X4, VU } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Uz, O4, Gm } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { GDs } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { am, Mp } from "B:/~BUN/root/chunk-ht2sp6s6.js";
import { nJt, Dut } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Rze } from "B:/~BUN/root/chunk-3v5ng1y2.js";
import { g1 } from "B:/~BUN/root/chunk-wt8tyqt4.js";
import { dJr, qAt, Vlt, cJr, Dar, uJr, g5e, Klt, qlt } from "B:/~BUN/root/chunk-a66hbqcf.js";
import { p5e } from "B:/~BUN/root/chunk-v1x5zyj3.js";
import { Glt, lJr, XEn, JEn, Ive, QEn, ZEn } from "B:/~BUN/root/chunk-0ye1geyg.js";
import { Q7o, m5e, Mar } from "B:/~BUN/root/chunk-3d92p18g.js";
import { sX } from "B:/~BUN/root/chunk-dx2wvwvf.js";
import { tKi, _Ne, Mee } from "B:/~BUN/root/chunk-xdzcgcjh.js";
import { kn, pea } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, E, u, xt, me, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var _n = Oe(nb(), 1);
import { constants as Nr } from "fs";
import { access as Ir, chmod as Dr, copyFile as un, lstat as Mr, mkdir as he, readdir as Ce, readlink as fn, realpath as nn, rename as ve, rm as Ne, rmdir as Fr, stat as re, symlink as rn, unlink as ce, utimes as Lr, writeFile as Or } from "fs/promises";
import { homedir as pn } from "os";
import { randomBytes as mn } from "crypto";
import { basename as gn, delimiter as Vr, dirname as ne, join as Y, resolve as de } from "path";
import { createHash as it } from "crypto";
import { createReadStream as Qn, createWriteStream as Zn } from "fs";
import { chmod as Jn, rm as er } from "fs/promises";
import { dirname as tr, join as nr } from "path";
import { Readable as rr, Transform as At } from "stream";
import { pipeline as at } from "stream/promises";
import { createZstdDecompress as ir } from "zlib";
import { createHash as Dn, randomBytes as Mn } from "crypto";
import { constants as Je, createReadStream as bt, createWriteStream as Fn } from "fs";
import { lstat as tt, mkdir as kt, mkdtemp as Ln, open as On, readdir as $t, readlink as Vn, rm as Ie, stat as Bn, symlink as Un } from "fs/promises";
import { join as te, sep as zn } from "path";
import { pipeline as Tt } from "stream/promises";
import { createZstdDecompress as Gn } from "zlib";
import { createHash as Rn, createPublicKey as An, verify as xn } from "crypto";
function Ye() {
  return `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixB
UZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncr
mYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7
ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmV
NX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y
0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAs
IdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAi
p5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81Iw
H6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw
1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0
lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3Zp
IgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==
-----END PUBLIC KEY-----
`;
}
var wt = Buffer.from("claude-code-manifest-v1\x00"),
  Xe = "2.1.207",
  yt = "flag";
var Pn = 1,
  Cn = "RSASSA-PKCS1-v1_5-SHA512",
  Nn = p(() => u({
    schema: T(Pn),
    algorithm: T(Cn),
    signature: o().min(1),
    publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
  })),
  Qe = p(() => xt({
    version: o(),
    manifestSignatureEnforcement: o().optional(),
    platforms: me(o(), xt({
      checksum: o(),
      size: E().optional(),
      binary: o().optional()
    }))
  }));
class ManifestSignatureError extends R {
  reason;
  verifyThrew;
  constructor(e, n, r = "update", h) {
    super(r === "update" ? `Release verification failed for Claude Code ${e} (${n}). The update was not installed.` : `Release verification failed for the macOS app bundle of Claude Code ${e} (${n}).`, "Release manifest signature verification failed", n);
    this.name = "ManifestSignatureError", this.reason = n, this.verifyThrew = h?.verifyThrew;
  }
}
function Ze({
  manifestBytes: manifestBytes,
  sidecar: sidecar,
  expectedVersion: expectedVersion,
  publicKeyPem: publicKeyPem
}) {
  let s = Nn().safeParse(sidecar);
  if (!s.success) throw new ManifestSignatureError(expectedVersion, "sidecar_malformed");
  let {
    signature: signature,
    publicKeySha256: publicKeySha256
  } = s.data;
  if (Buffer.from(signature, "base64").toString("base64") !== signature) throw new ManifestSignatureError(expectedVersion, "sidecar_malformed");
  let y;
  try {
    y = An(publicKeyPem);
  } catch {
    throw new ManifestSignatureError(expectedVersion, "key_mismatch");
  }
  let b = Rn("sha256").update(y.export({
    type: "spki",
    format: "der"
  })).digest("hex");
  if (publicKeySha256 !== b) throw new ManifestSignatureError(expectedVersion, "key_mismatch");
  let A = !1,
    verifyThrew = !1;
  try {
    A = xn("sha512", Buffer.concat([wt, manifestBytes]), y, Buffer.from(signature, "base64"));
  } catch {
    A = !1, verifyThrew = !0;
  }
  if (!A) throw new ManifestSignatureError(expectedVersion, "signature_invalid", "update", {
    verifyThrew: verifyThrew
  });
  let N;
  try {
    let M = Qe().safeParse(ee(manifestBytes.toString("utf8")));
    N = M.success ? M.data : void 0;
  } catch {
    N = void 0;
  }
  if (!N || N.version !== expectedVersion) throw new ManifestSignatureError(expectedVersion, "version_mismatch");
  return N;
}
var In = p(() => u({
  checksum: o().regex(/^[a-f0-9]{64}$/),
  size: E().int().positive()
}));
function Et({
  platform: platform,
  expectedBinaryName: expectedBinaryName,
  ...r
}) {
  let h;
  try {
    h = Ze(r).platforms;
  } catch (error) {
    throw error instanceof ManifestSignatureError ? new ManifestSignatureError(r.expectedVersion, error.reason, "app_bundle") : error;
  }
  let s = Object.hasOwn(h, platform) ? h[platform] : void 0;
  if (s === void 0) return;
  if (s.binary !== expectedBinaryName) throw new ManifestSignatureError(r.expectedVersion, "binary_name_mismatch", "app_bundle");
  if (s.bundle === void 0) return;
  let w = In().safeParse(s.bundle);
  if (!w.success) throw new ManifestSignatureError(r.expectedVersion, "app_bundle_entry_malformed", "app_bundle");
  return w.data;
}
var De = "claude.app",
  Wn = 64,
  et = 65536,
  timeout_2 = 300000,
  timeout = 60000,
  qn = 45000,
  Kn = '=anchor apple generic and identifier "com.anthropic.claude-code" and certificate 1[field.1.2.840.113635.100.6.2.6] exists and certificate leaf[field.1.2.840.113635.100.6.1.13] exists and certificate leaf[subject.OU] = "Q6L2SF6YDW"',
  Me = {
    env: {
      PATH: "/usr/bin:/bin",
      USER_TYPE: "external",
      NODE_ENV: "production"
    },
    extendEnv: !1,
    stdin: "ignore",
    maxBuffer: 65536,
    withoutControllingTerminal: !0,
    waitForExitAfterKill: !0
  };
class Z extends R {
  reason;
  constructor(e) {
    super(`Could not install or verify the macOS app bundle (${e})`);
    this.reason = e;
  }
}
async function nt({
  versionsDir: versionsDir,
  name: name,
  version: r
}) {
  if (JEn.exec(name)?.[1] !== r) throw new Z("folder_name");
  let h = te(versionsDir, Glt),
    cwd = te(h, name);
  for (let D of [h, cwd]) {
    let I = await tt(D);
    if (!I.isDirectory() || !ZEn(I)) throw new Z(D === cwd ? "file_unsafe" : "bundles_folder_unsafe");
  }
  if ((await $t(cwd)).join() !== De) throw new Z("file_unexpected");
  let w = [te(cwd, De)],
    S = 0;
  for (let D = w.pop(); D !== void 0; D = w.pop()) {
    if (S++, S + w.length > Wn) throw new Z("file_unexpected");
    let I = await tt(D);
    if (!(I.isDirectory() || I.isFile() && I.nlink === 1) || !ZEn(I) || (I.mode & 3584) !== 0) throw new Z("file_unsafe");
    if (I.isDirectory()) {
      let V = D;
      w.push(...(await $t(V)).map(item => te(V, item)));
    }
  }
  let y = await On(te(cwd, De, "Contents", "Info.plist"), Je.O_RDONLY | Je.O_NOFOLLOW | Je.O_NONBLOCK),
    {
      bytesRead: bytesRead,
      buffer: buffer
    } = await y.read(Buffer.alloc(et + 1), 0, et + 1, 0).finally(() => y.close());
  if (bytesRead > et) throw new Z("info_plist");
  let C = buffer.toString("utf8", 0, bytesRead).replace(/\s+/g, ""),
    N = {
      CFBundleIdentifier: "com.anthropic.claude-code",
      CFBundleExecutable: "claude",
      CFBundleShortVersionString: r
    };
  for (let [D, I] of Object.entries(N)) if (!C.includes(`<key>${D}</key><string>${I}</string>`)) throw new Z("info_plist");
  let {
    exitCode: exitCode
  } = await lt("/usr/bin/codesign", ["--verify", "--deep", "--strict", "-R", Kn, te(cwd, De)], {
    ...Me,
    cwd: cwd,
    timeout: timeout
  });
  if (exitCode !== 0) throw new Z(exitCode === void 0 ? "codesign_unavailable" : "codesign");
}
async function Yn({
  versionsDir: versionsDir_2,
  version: version,
  checksum: checksum,
  downloadArchive: downloadArchive
}) {
  let cwd_3 = te(versionsDir_2, Glt),
    name_2 = `${version}@${checksum.slice(0, 12)}.${Mn(4).toString("hex")}`;
  if (!JEn.test(name_2)) throw new Z("folder_name");
  await kt(cwd_3, {
    recursive: !0,
    mode: 448
  });
  let S = await tt(cwd_3);
  if (!S.isDirectory() || !ZEn(S)) throw new Z("bundles_folder_unsafe");
  let y = await Ln(te(cwd_3, ".staging-")),
    b = Date.now();
  try {
    let A = y,
      C = te(A, "claude.app.tar.zst");
    await downloadArchive(C);
    let N = Dn("sha256");
    if (await Tt(bt(C), N), N.digest("hex") !== checksum) throw new Z("archive_checksum");
    let M = te(A, "claude.app.tar");
    await Tt(bt(C), Gn(), Fn(M, {
      flags: "wx"
    })), await Ie(C);
    let cwd_2 = te(A, "unpacked");
    await kt(cwd_2, {
      mode: 448
    });
    let I = await lt("/usr/bin/tar", ["-x", "-m", "-k", "-f", M, "-C", cwd_2, "--no-same-owner", "--no-same-permissions", "--no-xattrs", "--no-acls", "--no-fflags", "--no-mac-metadata"], {
      ...Me,
      cwd: cwd_2,
      timeout: timeout_2
    });
    if (I.code !== 0) throw t(`Could not unpack the bundle: ${I.stderr || I.error || "tar did not start"}`, {
      level: "warn"
    }), new Z("unpack");
    if (await Bqe(cwd_2, te(cwd_3, name_2)), y = te(cwd_3, name_2), await Ie(A, {
      recursive: !0,
      force: !0
    }), await nt({
      versionsDir: versionsDir_2,
      name: name_2,
      version: version
    }), Mp() !== null) throw new Z("process_wrapper");
    let V = te(y, XEn),
      z = g1({
        cmd: V,
        prefixArgs: [],
        target: V
      }),
      abortSignal = AbortSignal.timeout(qn),
      L = z.cmd !== V,
      O = await lt(z.cmd, [...z.prefixArgs, "--version"], {
        ...Me,
        cwd: cwd_3,
        env: L ? Rze(OR(() => ({
          ...process.env
        }))) : {
          ...Me.env,
          HOME: i.HOME,
          TMPDIR: i.TMPDIR
        },
        abortSignal: abortSignal,
        abortEndsProcessGroup: !0
      });
    if (abortSignal.aborted || O.code !== 0 || !O.stdout.startsWith(`${version} `)) throw t(`The new bundle failed its trial run (${V} --version${L ? ", through the process wrapper" : ""}): ${abortSignal.aborted ? "timed out" : `code ${O.code}, printed ${_(O.stdout.slice(0, 80))}`}`, {
      level: "warn"
    }), new Z("trial_run");
    if (Date.now() - b > lJr / 2) throw new Z("too_slow");
    await nt({
      versionsDir: versionsDir_2,
      name: name_2,
      version: version
    });
    let B = te(versionsDir_2, version),
      U = `${B}.tmp.${process.pid}.${Date.now()}`;
    try {
      await Un(te(Glt, name_2, XEn), U), await Bn(U), await Is(U, B);
    } catch (error) {
      throw await Ie(U, {
        force: !0
      }).catch(() => {}), t(`Could not link ${B} to its bundle: ${d(error)}`, {
        level: "warn"
      }), new Z("link");
    }
    return name_2;
  } catch (error) {
    throw await Ie(y, {
      recursive: !0,
      force: !0
    }).catch(() => {}), error;
  }
}
function Fe(e, n, r) {
  l("tengu_native_app_bundle_install", {
    outcome: f(e),
    reason: n === void 0 ? void 0 : f(n instanceof Z || n instanceof ManifestSignatureError ? n.reason : "other"),
    launcher_configured: am().length > 0 || Mp() !== null,
    latency_ms: Date.now() - r
  });
}
async function Rt({
  fetchArchive: fetchArchive,
  downloadArchive: downloadArchive_2,
  ...r
}) {
  let h = Date.now();
  try {
    let s = await fetchArchive();
    if (s === void 0) {
      Fe("release_has_none", void 0, h);
      return;
    }
    let w = await Yn({
      ...r,
      checksum: s.checksum,
      downloadArchive: async S => {
        try {
          await downloadArchive_2(s, S);
        } catch (error) {
          throw t(`Could not download the app bundle: ${d(error)}`, {
            level: "warn"
          }), new Z("download");
        }
      }
    });
    return Fe("installed", void 0, h), w;
  } catch (error) {
    t(`Could not install ${r.version} as an app bundle; installing the plain binary instead: ${d(error)}`, {
      level: "warn"
    }), Fe("failed", error, h);
    return;
  }
}
async function be(e) {
  let n = Date.now();
  try {
    return await nt(e), !0;
  } catch (error) {
    return t(`The installed app bundle of ${e.version} did not pass its check; installing the plain binary in its place: ${d(error)}`, {
      level: "warn"
    }), Fe("retained_failed", error, n), !1;
  }
}
async function ke(e, n) {
  if (x() !== "macos") return;
  let r = await Vn(te(e, n)).catch(() => ""),
    h = r.split(zn)[1] ?? "";
  return JEn.exec(h)?.[1] === n && r === te(Glt, h, XEn) ? h : void 0;
}
var Xn = !1;
function oe() {
  let platform_2 = i.platform,
    n = "x64";
  if (!n) {
    let r = Error("Unsupported architecture: x64");
    throw t("Native installer does not support architecture: x64", {
      level: "error"
    }), r;
  }
  if (Xn) n = "arm64";
  if (platform_2 === "linux") {
    if (xA.isAndroidEnvironment()) return `linux-${n}-android`;
    if (xA.isMuslEnvironment()) return `linux-${n}-musl`;
  }
  return `${platform_2}-${n}`;
}
var Be = "https://downloads.claude.ai/claude-code-releases",
  Pt = 30000,
  attempts = 3;
class K7o extends R {}
function ot(e, n) {
  return X4(e) ? sX.get(e, n) : hd.get(e, n);
}
async function ar(e = "latest", n, r) {
  let h = Date.now(),
    attempt = 0,
    w;
  try {
    w = await dJr(signal => (attempt++, ot(`${n}/${e}`, {
      timeout: Pt,
      responseType: "text",
      signal: signal,
      ...r
    })), {
      attempts: attempts,
      timeoutMs: Pt,
      onRetry: (A, C) => {
        t(`Version check failed on attempt ${A}/${attempts}, retrying: ${C instanceof Error ? C.message : String(C)}`);
      }
    });
  } catch (error) {
    let latency_ms = Date.now() - h,
      N = error instanceof Error ? error.message : String(error),
      http_status = we(error);
    m("update_check", "update_check_binary_repo_failed"), l("tengu_version_check_failure", {
      latency_ms: latency_ms,
      http_status: http_status,
      is_timeout: Se(error),
      attempt: attempt,
      platform: G3(Er()),
      channel: f(e)
    });
    let D = new R(`Failed to fetch version from ${n}/${e} after ${attempt} attempt(s): ${N}`, "Failed to fetch version from binary repo");
    throw t(`Failed to fetch version from ${n}/${e} after ${attempt} attempt(s): ${N}`, {
      level: "error"
    }), D;
  }
  let latency_ms_2 = Date.now() - h,
    y = w.data.trim(),
    b = y.length;
  if (!J2e(y)) throw m("update_check", "update_check_binary_repo_invalid_response"), new R(`Version pointer for ${e} did not return a version (got ${b} bytes)`, "Version pointer returned a non-version body");
  if (l("tengu_version_check_success", {
    latency_ms: latency_ms_2,
    attempt: attempt
  }), attempt > 1) c("update_check", "update_check_binary_repo_retry");else g("update_check");
  return y;
}
async function xar(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let r = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(r)) throw new R(`Version ${r} is not available for installation. Use 'stable' or 'latest'.`, "Test-fixture version rejected outside test builds");
    return r;
  }
  let n = e;
  if (n !== "stable" && n !== "latest" && n !== "rc") throw new R(`Invalid channel: ${e}. Use 'latest' or 'stable'`, "Invalid release channel");
  if (n === "rc") throw new R(`Invalid channel: ${e}. Use 'stable' or 'latest'`, "Invalid release channel");
  return ar(n, Be);
}
var Ca = p(() => u({
  dist: u({
    integrity: o().min(1),
    tarball: o().min(1).optional()
  })
}));
var or = 120000,
  $e = 3,
  timeout_3 = 600000,
  timeout_4 = 1e4,
  baseMs = 1000,
  maxAttempts = 5,
  Ve = 33000,
  lr = 2 * Ve;
function dr() {
  return Number(i.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || or;
}
function ur() {
  return Number(i.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || timeout_3;
}
class StallTimeoutError extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
}
function Dt(e) {
  if (rc(e) && e.response) return !1;
  let n = Gm(e)?.code;
  if (n === "ECONNABORTED" || n === "ETIMEDOUT") return !1;
  if (n !== void 0 && (O4.has(n) || Uz.has(n))) return !0;
  return PM(e, "aborted");
}
async function rt(e, n, r, h = {}, s, w) {
  let S,
    checksumRetried = !1,
    dropRetried = !1;
  for (let attempt_2 = 1; attempt_2 <= $e; attempt_2++) {
    let abortController = new AbortController(),
      N = !1,
      M = !1,
      D,
      I,
      V,
      z = () => {
        if (D) clearTimeout(D), D = void 0;
        if (I) clearTimeout(I), I = void 0;
      },
      P = () => {
        if (D) D.refresh();else D = setTimeout(L => L.abort("stall"), dr(), abortController);
      };
    try {
      P(), I = setTimeout(q => q.abort("deadline"), ur(), abortController);
      let L = await ot(e, {
          timeout: timeout_3,
          responseType: "stream",
          signal: abortController.signal,
          ...h
        }),
        O = it("sha256"),
        B = s ? it("sha256") : void 0,
        U = B ?? O,
        G = 0,
        X = new At({
          transform(q, j, Q) {
            if (P(), G += q.length, w !== void 0 && G > w) {
              Q(new R(`Download exceeds the signed size of ${w} bytes`));
              return;
            }
            U.update(q), Q(null, q);
          }
        });
      if (V = Zn(r, {
        highWaterMark: 4194304
      }), V.on("drain", P), s) {
        let q = 0,
          j = new At({
            transform(Q, ue, le) {
              if (q += Q.length, q > s.decompressedSize) {
                le(new R(`Decompressed binary exceeds the manifest size of ${s.decompressedSize} bytes`, "Decompressed binary larger than manifest size"));
                return;
              }
              O.update(Q), le(null, Q);
            }
          });
        await at(L.data, X, ir(), j, V, {
          signal: abortController.signal
        });
      } else await at(L.data, X, V, {
        signal: abortController.signal
      });
      if (N = !0, z(), s) {
        let q = B?.digest("hex");
        if (q !== s.checksum) throw new R(`Checksum mismatch: expected ${s.checksum}, got ${q} (compressed)`, "Checksum mismatch during compressed binary download");
      }
      let se = O.digest("hex");
      if (se !== n) throw Object.assign(new R(`Checksum mismatch: expected ${n}, got ${se}`, "Checksum mismatch during binary download"), {
        deterministic: s !== void 0
      });
      return M = !0, await Jn(r, 493), {
        checksumRetried: checksumRetried,
        dropRetried: dropRetried
      };
    } catch (L) {
      z();
      let O = _r(L) ? Object.assign(new R(`Checksum mismatch: zstd decoder rejected the frame (${k(L)})`, "zstd decoder rejected the frame"), {
        cause: L
      }) : L;
      if (rc(O) && O.response?.data instanceof rr) O.response.data.destroy();
      if (V && !M) {
        let j = V;
        await new Promise(Q => j.close(() => Q())), await er(r, {
          force: !0
        }).catch(Q => t(`Failed to remove partial download: ${Q instanceof Error ? Q.message : String(Q)}`, {
          level: "error"
        }));
      }
      let B = abortController.signal.aborted ? abortController.signal.reason : void 0,
        U = B === "deadline",
        G = !U && (B === "stall" || nl(O));
      if (U) throw Object.assign(new R("Download timed out: exceeded the total deadline"), {
        attempt: attempt_2
      });
      let X = O instanceof Error && O.message.includes("Checksum mismatch"),
        se = !N && (Dt(O) || Gm(O)?.code === "ERR_STREAM_PREMATURE_CLOSE"),
        cause = G ? new StallTimeoutError() : F(O);
      if (S = cause, (G || X || se) && !yr(O) && attempt_2 < $e) {
        if (X) checksumRetried = !0;else if (se) dropRetried = !0;
        t(`Download ${X ? "checksum mismatch" : G ? "stalled" : "connection dropped"} on attempt ${attempt_2}/${$e}, retrying...`), await J(1000);
        continue;
      }
      if (se) {
        let code = k(cause);
        throw Object.assign(new R(`The connection dropped while downloading the update (attempt ${attempt_2}/${$e}: ${cause.message}). Check your network \u2014 proxies sometimes cut off large downloads.`, "Connection dropped repeatedly during binary download"), {
          attempt: attempt_2,
          connectionDrop: !0,
          cause: cause,
          ...(code && {
            code: code
          })
        });
      }
      throw Object.assign(cause, {
        attempt: attempt_2
      });
    }
  }
  throw S ?? Error("Download failed after all retries");
}
function Mt() {
  return v("tengu_elegant_pancake", null);
}
function st(e, n = Mt()) {
  return e === "always" ? n !== !1 : n === !0;
}
function Ft() {
  return yt;
}
function fr() {
  return st(Ft());
}
function pr(e, n) {
  return e === "always" || e === "flag" && st("flag", n);
}
async function Lt(e, expectedVersion_2, {
  authConfig: authConfig,
  signaturePolicy: signaturePolicy,
  platform: platform_3,
  startTime: startTime,
  purpose = "download"
}) {
  let y = purpose === "download",
    manifestBytes_2,
    manifest,
    metadataDropRetried = !1,
    N = qEn(platform_3);
  try {
    let I = await Ae(`${e}/${expectedVersion_2}/manifest.json`, {
      timeout: timeout_4,
      ...authConfig,
      responseType: "arraybuffer",
      maxContentLength: 1048576
    });
    metadataDropRetried = I.dropRetried, manifestBytes_2 = Buffer.from(I.data);
    let V = Qe().safeParse(ee(manifestBytes_2.toString("utf8")));
    if (!V.success) throw new R(`Manifest for ${expectedVersion_2} is not a valid release manifest`, "Release manifest failed schema validation");
    manifest = V.data;
  } catch (error) {
    let latency_ms_3 = Date.now() - startTime,
      z = error instanceof Error ? error.message : String(error);
    if (y) m("update_download", "update_download_manifest_failed");
    throw l("tengu_binary_manifest_fetch_failure", {
      latency_ms: latency_ms_3,
      http_status: we(error),
      is_timeout: Se(error),
      platform: G3(platform_3)
    }), t(`Failed to fetch manifest from ${e}/${expectedVersion_2}/manifest.json: ${z}`, {
      level: "error"
    }), error;
  }
  let manifestAuthenticated = !1,
    signatureVerified = !1;
  if (signaturePolicy !== "skip") {
    let I = `${e}/${expectedVersion_2}/manifest.json.raw-sig.json`,
      V = Date.now(),
      http_status_2,
      attempt_3 = 1,
      L,
      sidecar_2;
    try {
      let B = !1;
      try {
        let U = await Ae(I, {
          timeout: timeout_4,
          ...authConfig,
          responseType: "json",
          maxContentLength: 65536
        }, {
          maxAttempts: maxAttempts,
          alsoRetry: G => {
            let X = we(G);
            return X === void 0 ? Se(G) : X === 429 || X >= 500;
          },
          deadline: AbortSignal.timeout(Ve)
        });
        attempt_3 = U.attempt, metadataDropRetried ||= U.dropRetried, sidecar_2 = U.data;
      } catch (error) {
        if (http_status_2 = we(error), attempt_3 = zt(error) ?? 1, http_status_2 !== 404) throw new ManifestSignatureError(expectedVersion_2, http_status_2 !== void 0 ? "sidecar_fetch_http_error" : Date.now() - V > lr ? "sidecar_fetch_interrupted" : Se(error) ? "sidecar_fetch_timeout" : "sidecar_fetch_connection_error");
        if (signaturePolicy !== "allow-unsigned-legacy") throw new ManifestSignatureError(expectedVersion_2, "sidecar_missing");
        B = !0;
      }
      if (B) c("update_manifest_signature", "unsigned_legacy"), t(`No manifest signature published for ${expectedVersion_2} (predates ${Xe}); continuing with checksum-only verification`, {
        level: "warn"
      });else {
        let U = Ze({
          manifestBytes: manifestBytes_2,
          sidecar: sidecar_2,
          expectedVersion: expectedVersion_2,
          publicKeyPem: Ye()
        });
        t(`Verified manifest signature for ${expectedVersion_2}`);
        let G = U.platforms[platform_3];
        if (G && G.binary !== N) throw new ManifestSignatureError(expectedVersion_2, "binary_name_mismatch");
        if (manifest = U, manifestAuthenticated = !0, signaturePolicy === "require-enforcing-release") {
          if (await ms().catch(() => null), L = {
            flag: Mt()
          }, !pr(U.manifestSignatureEnforcement, L.flag)) throw new ManifestSignatureError(expectedVersion_2, "release_predates_enforcement");
        }
        signatureVerified = !0, g("update_manifest_signature", {
          attempt: attempt_3
        });
      }
    } catch (error) {
      if (!(error instanceof ManifestSignatureError)) throw error;
      let latency_ms_4 = Date.now() - V;
      await ms().catch(() => null);
      let enforced = L ? st(Ft(), L.flag) : fr();
      if (l("tengu_binary_manifest_signature_failed", {
        reason: f(error.reason),
        http_status: http_status_2,
        attempt: attempt_3,
        enforced: enforced,
        platform: G3(platform_3),
        latency_ms: latency_ms_4,
        purpose: f(purpose),
        target_version: Na(expectedVersion_2),
        manifest_bytes: manifestAuthenticated ? void 0 : manifestBytes_2.length,
        manifest_sha12: manifestAuthenticated ? void 0 : pea(manifestBytes_2),
        sidecar_signature_sha12: !manifestAuthenticated && sidecar_2 !== null && typeof sidecar_2 === "object" && "signature" in sidecar_2 && typeof sidecar_2.signature === "string" ? kn(sidecar_2.signature) : void 0,
        verify_threw: error.verifyThrew,
        https_proxy: VU() !== void 0,
        extra_ca_certs: Boolean(i.NODE_EXTRA_CA_CERTS)
      }), enforced) {
        if (error.reason === "release_predates_enforcement") c("update_manifest_signature", error.reason), t(`${expectedVersion_2} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`, {
          level: "warn"
        });else if (error.reason === "sidecar_fetch_interrupted") c("update_manifest_signature", error.reason), t(`Signature sidecar fetch for ${expectedVersion_2} was interrupted (process suspended mid-request); will retry on the next update check`, {
          level: "warn"
        });else {
          if (m("update_manifest_signature", error.reason), y) m("update_download", "update_download_manifest_signature");
          t(`Manifest signature check failed for ${I}: ${error.reason}`, {
            level: "error"
          });
        }
        throw error;
      }
      c("update_manifest_signature", error.reason), t(`Manifest signature check failed for ${I}: ${error.reason} (enforcement disabled; continuing)`, {
        level: "warn"
      });
    }
  }
  return {
    manifest: manifest,
    manifestAuthenticated: manifestAuthenticated,
    signatureVerified: signatureVerified,
    metadataDropRetried: metadataDropRetried
  };
}
async function mr(version_2, n, r, {
  authConfig: authConfig_2,
  signaturePolicy: signaturePolicy_2,
  appBundleVersionsDir: w
}) {
  let S = ie();
  await S.rm(n, {
    recursive: !0,
    force: !0
  });
  let platform_4 = oe(),
    b = qEn(platform_4),
    startTime_2 = Date.now();
  l("tengu_binary_download_attempt", {});
  let [C, N] = await Promise.all([Lt(r, version_2, {
      authConfig: authConfig_2,
      signaturePolicy: signaturePolicy_2,
      platform: platform_4,
      startTime: startTime_2
    }), Ae(`${r}/${version_2}/manifest.zst.json`, {
      timeout: timeout_4,
      ...authConfig_2,
      responseType: "json",
      maxContentLength: 1048576
    }).catch(j => {
      t(`No compressed manifest for ${version_2}: ${d(j)}`);
      return;
    })]),
    {
      manifest: manifest_2,
      signatureVerified: signatureVerified_2
    } = C,
    I = N?.data,
    V = C.metadataDropRetried || N?.dropRetried === !0,
    z = manifest_2.platforms[platform_4];
  if (!z) throw m("update_download", "update_download_platform_not_found"), l("tengu_binary_platform_not_found", {}), new R(`Native binaries for ${platform_4} are not available on this release channel (version ${version_2} ships: ${Object.keys(manifest_2.platforms).sort().join(", ")}).`, "Native binaries not available for platform on this channel");
  let P = z.checksum,
    L = startTime_2;
  if (w !== void 0 && signatureVerified_2) {
    let j,
      appBundleName = await Rt({
        versionsDir: w,
        version: version_2,
        fetchArchive: () => gr(version_2, platform_4),
        downloadArchive: async (ue, le) => {
          j = await rt(`${r}/${version_2}/${platform_4}/claude.app.tar.zst`, ue.checksum, le, authConfig_2 || {}, void 0, ue.size);
        }
      });
    if (appBundleName !== void 0) {
      if (j?.checksumRetried) c("update_download", "update_download_checksum_retry");else if (j?.dropRetried || V) c("update_download", "update_download_drop_retry");else g("update_download");
      return l("tengu_binary_download_success", {
        latency_ms: Date.now() - startTime_2,
        compressed: !0,
        app_bundle: !0
      }), {
        signatureVerified: signatureVerified_2,
        expectedChecksum: P,
        appBundleName: appBundleName
      };
    }
    L = Date.now();
  } else if (w !== void 0) t(`Installing ${version_2} as the plain binary, not as an app bundle: its manifest did not pass every check`);
  let checksum_2 = I?.platforms?.[platform_4]?.checksum,
    decompressedSize = z.size,
    U = checksum_2 !== void 0 && /^[a-f0-9]{64}$/.test(checksum_2) && decompressedSize !== void 0 && Number.isInteger(decompressedSize) && decompressedSize > 0 ? {
      checksum: checksum_2,
      decompressedSize: decompressedSize
    } : void 0,
    G = `${r}/${version_2}/${platform_4}/${b}`;
  await S.mkdir(n);
  let X = nr(n, b),
    compressed = U !== void 0,
    q = compressed ? `${G}.zst` : G;
  try {
    let j;
    if (U) try {
      j = await rt(q, P, X, authConfig_2 || {}, U);
    } catch (error) {
      if (we(error) === void 0 && !hr(error)) throw error;
      compressed = !1, q = G, t(`Compressed binary unusable (${error instanceof Error ? error.message : String(error)}), falling back to ${G}`);
    }
    let {
        checksumRetried: checksumRetried_2,
        dropRetried: dropRetried_2
      } = j ?? (await rt(q, P, X, authConfig_2 || {})),
      latency_ms_5 = Date.now() - L;
    if (U && !compressed) c("update_download", "update_download_zst_fallback");else if (checksumRetried_2) c("update_download", "update_download_checksum_retry");else if (dropRetried_2 || V) c("update_download", "update_download_drop_retry");else g("update_download");
    return l("tengu_binary_download_success", {
      latency_ms: latency_ms_5,
      compressed: compressed
    }), {
      signatureVerified: signatureVerified_2,
      expectedChecksum: P
    };
  } catch (error) {
    let latency_ms_6 = Date.now() - L,
      ue = error instanceof Error ? error.message : String(error),
      is_checksum_mismatch = ue.includes("Checksum mismatch");
    if (is_checksum_mismatch) m("update_download", "update_download_checksum_mismatch");else if (error instanceof StallTimeoutError) m("update_download", "update_download_stall_timeout");else if (vr(error)) m("update_download", "update_download_connection_drop");else m("update_download", "update_download_binary_failed");
    throw l("tengu_binary_download_failure", {
      latency_ms: latency_ms_6,
      http_status: we(error),
      is_timeout: Se(error),
      is_checksum_mismatch: is_checksum_mismatch,
      attempt: zt(error),
      platform: G3(platform_4),
      compressed: compressed
    }), t(`Failed to download binary from ${q}: ${ue}`, {
      level: "error"
    }), error;
  }
}
function Ot(e, {
  explicitVersionRequested: explicitVersionRequested,
  requireEnforcingRelease: requireEnforcingRelease
}) {
  return requireEnforcingRelease ? "require-enforcing-release" : explicitVersionRequested && eM(e, Xe) ? "allow-unsigned-legacy" : "require";
}
async function Vt(version_3, n, r) {
  let platform_5 = oe(),
    {
      manifest: manifest_3,
      manifestAuthenticated: manifestAuthenticated_2,
      signatureVerified: signatureVerified_3
    } = await Lt(Be, version_3, {
      signaturePolicy: Ot(version_3, r),
      platform: platform_5,
      startTime: Date.now(),
      purpose: "reverify"
    }),
    versionsDir_3 = tr(n),
    b = await ke(versionsDir_3, version_3);
  if (b !== void 0) return {
    signatureVerified: signatureVerified_3,
    binaryMatches: await be({
      versionsDir: versionsDir_3,
      name: b,
      version: version_3
    }),
    expectedChecksum: void 0,
    appBundleName: b
  };
  if (!manifestAuthenticated_2) return t(`Manifest for retained ${version_3} is unauthenticated; activating the retained copy without a checksum comparison`, {
    level: "warn"
  }), {
    signatureVerified: !1,
    binaryMatches: !0,
    expectedChecksum: void 0
  };
  let expectedChecksum = manifest_3.platforms[platform_5]?.checksum,
    binaryMatches = expectedChecksum !== void 0 && (await ze(n, expectedChecksum));
  if (!binaryMatches) t(`Retained ${version_3} does not match its signed manifest checksum; re-downloading`);
  return {
    signatureVerified: signatureVerified_3,
    binaryMatches: binaryMatches,
    expectedChecksum: expectedChecksum
  };
}
function ct() {
  return Te() === "firstParty" && !St();
}
async function gr(expectedVersion_3, platform_6) {
  if (!ct()) return;
  let r = `${Be}/${expectedVersion_3}/manifest.zst.json`,
    [h, s] = await Promise.all([Ae(r, {
      timeout: timeout_4,
      responseType: "arraybuffer",
      maxContentLength: 1048576
    }, {
      deadline: AbortSignal.timeout(Ve)
    }), Ae(`${r}.raw-sig.json`, {
      timeout: timeout_4,
      responseType: "json",
      maxContentLength: 65536
    }, {
      deadline: AbortSignal.timeout(Ve)
    })]);
  return Et({
    manifestBytes: Buffer.from(h.data),
    sidecar: s.data,
    expectedVersion: expectedVersion_3,
    publicKeyPem: Ye(),
    platform: platform_6,
    expectedBinaryName: `${qEn(platform_6)}.zst`
  });
}
function Bt(e) {
  if (!rc(e) || e.response) return !1;
  let n = Gm(e)?.code;
  return n !== void 0 && (Uz.has(n) || n === "ETIMEDOUT");
}
async function Ue(e) {
  let n = it("sha256");
  return await at(Qn(e), n), n.digest("hex");
}
async function ze(e, n) {
  try {
    return (await Ue(e)) === n;
  } catch (error) {
    return t(`Could not hash ${e} (${k(error) ?? F(error).name}); treating as mismatched`), !1;
  }
}
async function Ut(e, n, {
  explicitVersionRequested: explicitVersionRequested_2,
  requireEnforcingRelease: requireEnforcingRelease_2,
  appBundleVersionsDir: appBundleVersionsDir
}) {
  let {
    signatureVerified: signatureVerified_4,
    expectedChecksum: expectedChecksum_2,
    appBundleName: appBundleName_2
  } = await mr(e, n, Be, {
    signaturePolicy: Ot(e, {
      explicitVersionRequested: explicitVersionRequested_2,
      requireEnforcingRelease: requireEnforcingRelease_2
    }),
    appBundleVersionsDir: appBundleVersionsDir
  });
  return {
    downloadType: "binary",
    signatureVerified: signatureVerified_4,
    expectedChecksum: expectedChecksum_2,
    appBundleName: appBundleName_2
  };
}
function we(e) {
  if (rc(e) && e.response) return e.response.status;
  return;
}
function Se(e) {
  if (e instanceof StallTimeoutError) return !0;
  if (nl(e)) return !0;
  if (rc(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return !0;
  if (e !== null && typeof e === "object" && "code" in e && e.code === "ETIMEDOUT") return !0;
  let n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("timeout") || n.includes("timed out");
}
function _r(e) {
  return k(e)?.startsWith("ZSTD_error_") === !0;
}
function hr(e) {
  let n = e instanceof Error ? e.message : String(e);
  return n.includes("Checksum mismatch") || n.includes("exceeds the manifest size");
}
function yr(e) {
  return e !== null && typeof e === "object" && "deterministic" in e && e.deterministic === !0;
}
function vr(e) {
  return e !== null && typeof e === "object" && "connectionDrop" in e && e.connectionDrop === !0;
}
function zt(e) {
  if (e !== null && typeof e === "object" && "attempt" in e && typeof e.attempt === "number") return e.attempt;
  return;
}
function Er() {
  try {
    return oe();
  } catch {
    return "unknown";
  }
}
async function Ae(e, n, {
  maxAttempts: maxAttempts_2 = $e,
  alsoRetry: alsoRetry,
  deadline: s
} = {}) {
  let dropRetried_3 = !1,
    S;
  for (let attempt_4 = 1;; attempt_4++) try {
    return {
      data: (await ot(e, {
        ...n,
        signal: s
      })).data,
      attempt: attempt_4,
      dropRetried: dropRetried_3
    };
  } catch (error) {
    let A = Object.assign(s?.aborted && nl(error) && S || F(error), {
        attempt: attempt_4
      }),
      C = Dt(A);
    if (attempt_4 >= maxAttempts_2 || s?.aborted || !(C || alsoRetry?.(A))) throw A;
    if (S = A, dropRetried_3 ||= C, await J(Cy({
      attempt: attempt_4,
      baseMs: baseMs,
      jitter: {
        kind: "symmetric",
        ratio: 0.25
      }
    }), s), s?.aborted) throw A;
    t(`Fetch of ${e} failed on attempt ${attempt_4}/${maxAttempts_2} (${we(A) ?? "no response"}), retrying...`);
  }
}
import { lstat as dt, readdir as br, realpath as kr, rm as $r, stat as Sr } from "fs/promises";
import { join as Ge, sep as We } from "path";
var Tr = /^\.staging-[A-Za-z0-9]+$/;
async function Gt(e, n) {
  let r = Ge(e, Glt),
    h,
    s;
  try {
    if (s = await dt(r), !s.isDirectory() || !ZEn(s)) return t(`Not cleaning up ${r}: it must be a real folder that you own and only you can write`, {
      level: "warn"
    }), "refused";
    h = await br(r);
  } catch (error) {
    return t(`Could not list ${r} to clean it up: ${d(error)}`), wr(error) ? 0 : "unreadable";
  }
  let w = "",
    S = !0;
  if (n !== void 0) try {
    w = await kr(n.launcherPath);
  } catch (error) {
    if (S = wr(error), !S) t(`Keeping every app bundle in this cleanup: could not follow the launcher link ${n.launcherPath}: ${d(error)}`, {
      level: "warn"
    });
  }
  let y = Date.now(),
    b = 0;
  for (let A of h) {
    let C = JEn.exec(A)?.[1];
    if (C === void 0 && !Tr.test(A)) continue;
    let N = Ge(r, A);
    try {
      let M = await dt(N);
      if (!M.isDirectory() || y - M.mtimeMs <= lJr) continue;
      if (C !== void 0) {
        if (n === void 0 || !S || process.execPath.includes(We + A + We) || w.includes(We + A + We)) continue;
        try {
          await Sr(Ge(e, C));
          continue;
        } catch (error) {
          if (!wr(error)) throw error;
        }
        if (await n.isVersionLockActive(Ge(N, XEn))) continue;
      }
      let D = await dt(r);
      if (D.dev !== s.dev || D.ino !== s.ino) return t(`Stopped cleaning up ${r}: it is no longer the folder that was checked`, {
        level: "warn"
      }), "refused";
      await $r(N, {
        recursive: !0,
        force: !0
      }), b++, t(`Cleaned up ${A} in ${r}`);
    } catch (error) {
      t(`Could not clean up ${A} in ${r}: ${d(error)}`);
    }
  }
  return b;
}
import { lstat as Rr, readdir as qt } from "fs/promises";
import { join as He } from "path";
var Ar = 7200000;
function xe(e) {
  if (e <= 1) return !1;
  try {
    return process.kill(e, 0), !0;
  } catch (error) {
    return k(error) === "EPERM";
  }
}
function xr(e, n) {
  if (!xe(e)) return !1;
  if (e === process.pid) return !0;
  try {
    let r = GDs(e);
    if (!r) return !0;
    let h = r.toLowerCase(),
      s = n.toLowerCase();
    return h.includes("claude") || h.includes(s);
  } catch {
    return !0;
  }
}
function qe(e) {
  try {
    if (!e || e.trim() === "") return null;
    let n = ee(e);
    if (typeof n.pid !== "number" || !n.version || !n.execPath) return null;
    return n;
  } catch {
    return null;
  }
}
function pe(e) {
  let n = ie();
  try {
    let r = n.readFileSync(e, {
      encoding: "utf8"
    });
    return qe(r);
  } catch {
    return null;
  }
}
function ge(e, n) {
  let r = n !== void 0 ? n : pe(e);
  if (!r) return !1;
  let {
    pid: pid,
    execPath: execPath
  } = r;
  if (!xe(pid)) return !1;
  if (!xr(pid, execPath)) return t(`Lock PID ${pid} is running but does not appear to be Claude - treating as stale`), !1;
  let w = ie();
  try {
    let S = w.statSync(e);
    if (Date.now() - S.mtimeMs > Ar) {
      if (!xe(pid)) return !1;
    }
  } catch {}
  return !0;
}
function Kt(e, n) {
  ZU(e, _(n, null, 2));
}
async function ft(e, n) {
  let r = ie(),
    version_4 = QEn(e);
  if (ge(n)) {
    let w = pe(n);
    return t(`Cannot acquire lock for ${version_4} - held by PID ${w?.pid}`), null;
  }
  let s = {
    pid: process.pid,
    version: version_4,
    execPath: process.execPath,
    acquiredAt: Date.now()
  };
  try {
    if (Kt(n, s), pe(n)?.pid !== process.pid) return null;
    return t(`Acquired PID lock for ${version_4} (PID ${process.pid})`), () => {
      try {
        if (pe(n)?.pid === process.pid) r.unlinkSync(n), t(`Released PID lock for ${version_4}`);
      } catch (error) {
        t(`Failed to release lock for ${version_4}: ${error}`);
      }
    };
  } catch (error) {
    return t(`Failed to acquire lock for ${version_4}: ${error}`), null;
  }
}
async function Yt(e, n) {
  let r = await ft(e, n);
  if (!r) return !1;
  let h = () => {
    try {
      r();
    } catch {}
  };
  return process.on("exit", h), process.on("SIGINT", h), process.on("SIGTERM", h), !0;
}
async function Xt(e, n, r) {
  let h = await ft(e, n);
  if (!h) return !1;
  try {
    return await r(), !0;
  } finally {
    h();
  }
}
async function Qt(e) {
  let n = ie(),
    r = 0,
    h;
  try {
    h = (await qt(e)).filter(item => item.endsWith(".lock"));
  } catch (error) {
    if (K(error)) return 0;
    return t(`Failed to readdir locks directory: ${F(error).message}`, {
      level: "error"
    }), 0;
  }
  for (let s of h) {
    let w = He(e, s);
    try {
      if ((await Rr(w)).isDirectory()) n.rmSync(w, {
        recursive: !0,
        force: !0
      }), r++, t(`Cleaned up legacy directory lock: ${s}`);else {
        let y = null,
          b = !1;
        try {
          y = n.readFileSync(w, {
            encoding: "utf8"
          });
        } catch (error) {
          if (K(error)) continue;
          b = !0, t(`Skipping stale-lock sweep of unreadable lock ${s}: ${F(error).message}`);
        }
        if (!b && !ge(w, qe(y ?? ""))) n.unlinkSync(w), r++, t(`Cleaned up stale lock: ${s}`);
      }
    } catch {}
    await new Promise(S => setImmediate(S));
  }
  return r;
}
var Pr = new Set(["EMFILE", "ENFILE", "EAGAIN", "EINTR", "EBUSY"]);
function ut(e) {
  let n = k(e);
  if (n && Pr.has(n)) return "transient";
  if (n === "EISDIR" || n === "ENOTDIR") return "directory";
  return "permanent";
}
var Zt = "#";
function pt(e, n, r) {
  return He(e, `${n}${Zt}${r}.lock`);
}
function Cr(e, n) {
  return e === `${n}.lock` || e.startsWith(`${n}${Zt}`) && e.endsWith(".lock");
}
var je = null,
  Wt = !1;
function mt(e, n) {
  let r = ie(),
    version_5 = QEn(e),
    s = pt(n, version_5, process.pid);
  try {
    Kt(s, {
      pid: process.pid,
      version: version_5,
      execPath: process.execPath,
      acquiredAt: Date.now()
    });
  } catch (error) {
    return t(`NON-FATAL: Failed to write per-PID lock for ${version_5}: ${error}`), !1;
  }
  if (je = s, !Wt) {
    Wt = !0;
    let w = () => {
      try {
        if (je) r.unlinkSync(je), je = null;
      } catch {}
    };
    process.on("exit", w);
  }
  return t(`Wrote per-PID lock for ${version_5} (PID ${process.pid})`), !0;
}
var jt = null,
  Ht = !1;
async function Jt(e, n) {
  let r = await ft(e, n);
  if (!r) return !1;
  if (jt = r, !Ht) {
    Ht = !0;
    let h = () => {
      try {
        jt?.();
      } catch {}
    };
    process.on("exit", h);
  }
  return !0;
}
async function en(e) {
  let n = new Set(),
    r;
  try {
    r = (await qt(e)).filter(item => item.endsWith(".lock"));
  } catch (error) {
    if (K(error)) return n;
    let w = ut(error) === "transient";
    if (t(`Failed to readdir locks directory (${w ? "transient" : "permanent"}): ${F(error).message}`, {
      level: "error"
    }), !w) a(F(error));
    return null;
  }
  let h = ie();
  for (let s of r) {
    let w = He(e, s),
      S;
    try {
      S = h.readFileSync(w, {
        encoding: "utf8"
      });
    } catch (error) {
      if (K(error)) continue;
      let A = ut(error);
      if (A === "transient") return null;
      if (A === "permanent") a(F(error));
      continue;
    }
    let y = qe(S);
    if (y && !n.has(y.version)) try {
      if (ge(w, y)) n.add(y.version);
    } catch {}
    await new Promise(b => setImmediate(b));
  }
  return n;
}
function tn(e, n) {
  let r = ie(),
    h;
  try {
    h = r.readdirSync(e).map(item => item.name).filter(item => Cr(item, n));
  } catch (error) {
    return !K(error);
  }
  for (let s of h) {
    let w = He(e, s),
      S;
    try {
      S = r.readFileSync(w, {
        encoding: "utf8"
      });
    } catch (error) {
      if (K(error)) continue;
      if (ut(error) === "transient") return !0;
      continue;
    }
    let y = qe(S);
    if (y && y.version === n && y.pid !== process.pid && ge(w, y)) return !0;
  }
  return !1;
}
var retained_count = 2,
  stale = 604800000;
function qEn(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}
function ae() {
  let e = oe(),
    n = qEn(e);
  return {
    versions: _Ne(),
    staging: Y(tKi(), "claude", "staging"),
    locks: Q7o(),
    executable: Y(Mee(), n)
  };
}
async function hn(e) {
  return re(e).then(n => n.isFile() && n.size > 0, () => !1);
}
async function Br(e, n) {
  for (let r of e) if (await hn(n(r))) return r;
  return;
}
function Ur(e) {
  return `${e}.old.${Date.now()}.${process.pid}`;
}
var zr = 2592000000;
function Gr(e, n) {
  if (!e.toLowerCase().startsWith(`${n.toLowerCase()}.`)) return;
  let r = /^(?:old\.(\d+)(?:\.(\d+))?|new\.\d+\.(\d+)\.[0-9a-f]+)$/i.exec(e.slice(n.length + 1));
  return r === null ? void 0 : r[1] !== void 0 ? {
    kind: "backup",
    stampedMs: Number(r[1]),
    ownerPid: r[2] === void 0 ? void 0 : Number(r[2])
  } : {
    kind: "staged",
    stampedMs: Number(r[3])
  };
}
async function _e(e) {
  try {
    let n = await re(e);
    if (!n.isFile() || n.size === 0) return !1;
    return !0;
  } catch {
    return !1;
  }
}
async function ht(e) {
  let n = ae(),
    r = [n.versions, n.staging, n.locks];
  await Promise.all(r.map(item => he(item, {
    recursive: !0
  })));
  let h = ne(n.executable);
  if (await he(h, {
    recursive: !0
  }), !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".") throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
  let installPath = Y(n.versions, e);
  try {
    await Or(installPath, "", {
      encoding: "utf8",
      flag: "wx"
    });
  } catch (error) {
    if (k(error) !== "EEXIST") throw error;
    try {
      if ((await re(installPath)).size === 0) {
        let date = new Date();
        await Lr(installPath, date, date);
      }
    } catch {}
  }
  return {
    stagingPath: Y(n.staging, e),
    installPath: installPath
  };
}
async function wn(e, n, retries = 0) {
  let h = ae(),
    lockfilePath = Ee(h, e);
  if (await he(h.locks, {
    recursive: !0
  }), m5e()) {
    let S = 0,
      attempts_2 = retries + 1,
      b = retries > 0 ? 1000 : 100,
      A = retries > 0 ? 5000 : 500;
    while (S < attempts_2) {
      if (await Xt(e, lockfilePath, async () => {
        try {
          await n();
        } catch (error) {
          throw t(`Native installer version-lock callback failed: ${error}`, {
            level: "error"
          }), error;
        }
      })) return l("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !1,
        attempts: S + 1
      }), !0;
      if (S++, S < attempts_2) {
        let N = Math.min(b * Math.pow(2, S - 1), A);
        await J(N);
      }
    }
    return l("tengu_version_lock_failed", {
      is_pid_based: !0,
      is_lifetime_lock: !1,
      attempts: attempts_2
    }), Ke(e, Error("Lock held by another process")), !1;
  }
  let w = null;
  try {
    try {
      w = await Zd(e, {
        stale: stale,
        retries: {
          retries: retries,
          minTimeout: retries > 0 ? 1000 : 100,
          maxTimeout: retries > 0 ? 5000 : 500
        },
        lockfilePath: lockfilePath,
        onCompromised: S => {
          t(`NON-FATAL: Version lock was compromised during operation: ${S.message}`, {
            level: "info"
          });
        }
      });
    } catch (error) {
      return l("tengu_version_lock_failed", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), Ke(e, error), !1;
    }
    try {
      return await n(), l("tengu_version_lock_acquired", {
        is_pid_based: !1,
        is_lifetime_lock: !1
      }), !0;
    } catch (error) {
      throw t(`tryWithVersionLock: callback failed under version lock: ${d(error)}`, {
        level: "error"
      }), error;
    }
  } finally {
    if (w) await w();
  }
}
var an = [100, 500, 2000];
class YEn extends R {
  constructor() {
    super("Staged binary no longer matches the verified checksum; refusing to install", "Staged binary checksum mismatch at install");
  }
}
async function yn(e, n, r) {
  await he(ne(n), {
    recursive: !0
  });
  let h;
  for (let attempts_3 = 1; attempts_3 <= an.length + 1; attempts_3++) {
    let w = `${n}.tmp.${process.pid}.${Date.now()}.${attempts_3}`;
    try {
      if (await un(e, w), await Dr(w, 493), r !== void 0 && (await Ue(w)) !== r) throw new YEn();
      return await ve(w, n), t(`Atomically installed binary to ${n}` + (attempts_3 > 1 ? ` (attempt ${attempts_3})` : "")), {
        attempts: attempts_3
      };
    } catch (error) {
      h = error;
      try {
        await ce(w);
      } catch {}
      let y = k(error),
        b = y === "EBUSY" || y === "EPERM" && !0,
        A = an[attempts_3 - 1];
      if (!b || A === void 0) throw error;
      t(`atomicMoveToInstallPath attempt ${attempts_3} failed with ${y}; retrying in ${A}ms`), await J(A);
    }
  }
  throw h;
}
async function Wr(e, n, r) {
  try {
    let h = Y(e, "node_modules", "@anthropic-ai"),
      w = (await Ce(h)).find(item => item.startsWith("claude-cli-native-"));
    if (!w) throw l("tengu_native_install_package_failure", {
      stage_find_package: !0,
      error_package_not_found: !0
    }), Error("Could not find platform-specific native package");
    let S = Y(h, w, "cli");
    try {
      await re(S);
    } catch {
      throw l("tengu_native_install_package_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0
      }), Error("Native binary not found in staged package");
    }
    let {
      attempts: y
    } = await yn(S, n, r);
    return await Ne(e, {
      recursive: !0,
      force: !0
    }), l("tengu_native_install_package_success", {
      install_attempts: y
    }), {
      moveRetried: y > 1
    };
  } catch (error) {
    let s = d(error);
    if (!(s.includes("Could not find platform-specific") || s.includes("Native binary not found"))) {
      if (l("tengu_native_install_package_failure", {
        stage_atomic_move: !0,
        error_move_failed: !0
      }), m("update_apply", "update_apply_native_move_failed"), ci(error)) t(`installVersionFromPackage: atomic move failed: ${s}`, {
        level: "error"
      });else a(F(error));
    } else m("update_apply", "update_apply_native_staging_missing"), t(`installVersionFromPackage: ${s}`, {
      level: "error"
    });
    throw error;
  }
}
async function jr(e, n, r) {
  try {
    let h = oe(),
      s = qEn(h),
      w = Y(e, s);
    try {
      await re(w);
    } catch (error) {
      throw l("tengu_native_install_binary_failure", {
        stage_binary_exists: !0,
        error_binary_not_found: !0,
        error_code: kh(error)
      }), Error("Staged binary not found");
    }
    let {
      attempts: S
    } = await yn(w, n, r);
    return await Ne(e, {
      recursive: !0,
      force: !0
    }), l("tengu_native_install_binary_success", {
      install_attempts: S
    }), {
      moveRetried: S > 1
    };
  } catch (error) {
    if (error instanceof YEn) l("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_checksum_mismatch: !0
    }), m("update_apply", "update_apply_staged_checksum_mismatch");else if (!d(error).includes("Staged binary not found")) l("tengu_native_install_binary_failure", {
      stage_atomic_move: !0,
      error_move_failed: !0,
      error_code: kh(error)
    }), m("update_apply", "update_apply_native_move_failed");else m("update_apply", "update_apply_native_staging_missing");
    if (ci(error)) t(`installVersionFromBinary: atomic move failed: ${d(error)}`, {
      level: "error"
    });else a(F(error));
    throw error;
  }
}
async function Hr(e, n, r, h) {
  if (r === "npm") return Wr(e, n, h);
  return jr(e, n, h);
}
var qr = new W(() => new Map());
async function on(version_6, {
  forceReinstall: forceReinstall,
  explicitVersionRequested: explicitVersionRequested_3,
  requireEnforcingRelease: h
}) {
  let {
      stagingPath: stagingPath,
      installPath: installPath_2
    } = await ht(version_6),
    {
      executable: executable
    } = ae(),
    y = Pe("true"),
    b = y ? `${stagingPath}.${process.pid}.${Date.now()}.${mn(4).toString("hex")}` : stagingPath,
    A = qr.of(H().host),
    C = A.get(version_6),
    N = C !== void 0 && C.appBundleName === (await ke(ne(installPath_2), version_6)) ? C : void 0,
    M = !(N && (N.enforcingRelease || !h)),
    D = {
      wasNewInstall: !1,
      moveRetried: !1,
      activationFailed: !1,
      activationRefused: !1,
      skippedUnverifiedRelease: !0
    },
    I = M ? void 0 : N?.checksum,
    wasNewInstall = forceReinstall || !(await vn(version_6)),
    z = !1;
  if (!wasNewInstall && M) try {
    let O = await Vt(version_6, installPath_2, {
      explicitVersionRequested: explicitVersionRequested_3,
      requireEnforcingRelease: h
    });
    if (I = O.expectedChecksum, !O.binaryMatches) wasNewInstall = !0, z = O.appBundleName !== void 0;else if (O.signatureVerified) A.set(version_6, {
      enforcingRelease: h,
      checksum: I,
      appBundleName: O.appBundleName
    });
  } catch (error) {
    if (error instanceof ManifestSignatureError) {
      if (h && error.reason === "release_predates_enforcement") return D;
      throw error;
    }
    if (!explicitVersionRequested_3 || h || !Bt(error)) throw error;
    let versionsDir_4 = ne(installPath_2),
      name_3 = await ke(versionsDir_4, version_6);
    if (name_3 === void 0) t(`Could not re-verify retained ${version_6} (${F(error).name}); offline, activating as requested`, {
      level: "warn"
    });else if (!(await be({
      versionsDir: versionsDir_4,
      name: name_3,
      version: version_6
    }))) wasNewInstall = !0, z = !0;
  } else if (!wasNewInstall && N?.appBundleName !== void 0) {
    if (!(await be({
      versionsDir: ne(installPath_2),
      name: N.appBundleName,
      version: version_6
    }))) A.delete(version_6), wasNewInstall = !0, z = !0;
  } else if (!wasNewInstall && N?.checksum !== void 0) {
    if (!(await ze(installPath_2, N.checksum))) t(`Retained ${version_6} no longer matches the checksum verified earlier in this process; re-downloading`, {
      level: "warn"
    }), A.delete(version_6), wasNewInstall = !0;
  }
  let moveRetried = !1;
  if (wasNewInstall) {
    t(forceReinstall ? `Force reinstalling native installer version ${version_6}` : `Downloading native installer version ${version_6}`), await Sn(ne(b));
    let appBundleVersionsDir_2 = !z && (await Kr(version_6)) ? ne(installPath_2) : void 0,
      downloadType,
      signatureVerified_5,
      appBundleName_3;
    try {
      if ({
        downloadType: downloadType,
        signatureVerified: signatureVerified_5,
        expectedChecksum: I,
        appBundleName: appBundleName_3
      } = await Ut(version_6, b, {
        explicitVersionRequested: explicitVersionRequested_3,
        requireEnforcingRelease: h,
        appBundleVersionsDir: appBundleVersionsDir_2
      }), appBundleName_3 === void 0) ({
        moveRetried: moveRetried
      } = await Hr(b, installPath_2, downloadType, I));
    } catch (error) {
      if (h && error instanceof ManifestSignatureError && error.reason === "release_predates_enforcement") return D;
      throw error;
    } finally {
      if (y) await Ne(b, {
        recursive: !0,
        force: !0
      }).catch(X => t(`Could not remove the update staging directory (a later update removes it after one hour): ${d(X)}`, {
        level: "warn"
      }));
    }
    if (signatureVerified_5) A.set(version_6, {
      enforcingRelease: h,
      checksum: I,
      appBundleName: appBundleName_3
    });
  } else t(`Version ${version_6} already installed, updating symlink`);
  await Jr(executable);
  let L = await ei(executable, installPath_2, {
    expectedChecksum: I
  });
  if (L !== "updated" && !(await _e(executable))) {
    let O = !1;
    try {
      await re(installPath_2), O = !0;
    } catch {}
    throw m("update_apply", "update_apply_native_symlink_failed"), Error(`Failed to create executable at ${executable}. Source file exists: ${O}. Either ${executable} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`);
  }
  return {
    wasNewInstall: wasNewInstall,
    moveRetried: moveRetried,
    activationFailed: L === "failed",
    activationRefused: L === "refused",
    skippedUnverifiedRelease: !1
  };
}
async function Kr(e) {
  try {
    if (x() !== "macos" || !1 || !ct() || !Ew(e, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION) || !(await En()) || (await re(ae().versions)).uid !== process.getuid?.()) return !1;
    return i.CLAUDE_CODE_NATIVE_APP_BUNDLE ?? v("tengu_purring_aurora", !1) === !0;
  } catch (error) {
    return t(`Installing ${e} as the plain binary: could not tell whether an app bundle is allowed: ${d(error)}`), !1;
  }
}
async function vn(e) {
  let {
    installPath: installPath_3
  } = await ht(e);
  return _e(installPath_3);
}
async function Yr() {
  if (await En()) return !0;
  let {
    executable: executable_2
  } = ae();
  return (await _e(executable_2)) && !(await Dut(executable_2).catch(() => !1));
}
async function En() {
  let {
      versions: versions,
      executable: executable_3
    } = ae(),
    r = !0,
    h = [{
      versions: versions,
      executable: executable_3
    }],
    [versions_2, w] = await Promise.all([nn(versions).catch(() => versions), nn(ne(executable_3)).catch(() => ne(executable_3))]),
    executable_4 = Y(w, gn(executable_3));
  if (versions_2 !== versions || executable_4 !== executable_3) h.push({
    versions: versions_2,
    executable: executable_4
  });
  return h.some(item => Xr(process.execPath, {
    ...item,
    isWindows: !0
  }));
}
function Xr(e, {
  versions: versions_3,
  executable: executable_5,
  isWindows: isWindows
}) {
  let s = y => isWindows ? y.replaceAll("\\", "/").toLowerCase() : y,
    w = s(e),
    S = s(versions_3).replace(/\/+$/, "") + "/";
  return w.startsWith(S) || w === s(executable_5);
}
function Qr() {
  try {
    let e = v("tengu_canary", {});
    return typeof e.external === "string" && _n.valid(e.external) || null;
  } catch (error) {
    return t(`getCanaryVersion: GB read failed, falling through: ${d(error)}`), null;
  }
}
async function Zr(e, n = !1) {
  let r = Date.now(),
    {
      executable: executable_6
    } = ae(),
    s = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e),
    {
      maxVersion: maxVersion,
      forceDowngradeEnabled: forceDowngradeEnabled
    } = await g5e(),
    y = forceDowngradeEnabled && !n && s && !!maxVersion && Klt({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, maxVersion, "native_update"),
    latestVersion = y ? maxVersion : await xar(e),
    A = latestVersion.length;
  if (!J2e(latestVersion)) throw new R(`Invalid version string from ${s ? "version pointer" : "argument"}: not a well-formed version (${A} characters)`, "Invalid version string: not a well-formed version");
  t(`Checking for native installer update to version ${latestVersion}`);
  let requireEnforcingRelease_3 = s && (await Yr());
  if (e === "latest" && !y) {
    let P = Qr(),
      L = P && maxVersion && WS(P, maxVersion);
    if (P && WS(P, latestVersion) && !L) t(`Native installer: canary ${P} active, overriding ${latestVersion}`), latestVersion = P;else if (L) t(`Native installer: canary ${P} exceeds maxVersion ${maxVersion}, not applying`);
  }
  if (!y && !n && maxVersion && WS(latestVersion, maxVersion)) {
    if (t(`Native installer: maxVersion ${maxVersion} is set, capping update from ${latestVersion} to ${maxVersion}`), Ew({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, maxVersion)) return t(`Native installer: current version ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION} is already at or above maxVersion ${maxVersion}, skipping update`), l("tengu_native_update_skipped_max_version", {
      latency_ms: Date.now() - r,
      max_version: Na(maxVersion),
      available_version: Na(latestVersion)
    }), {
      success: !0,
      wasSkipped: !0,
      latestVersion: latestVersion
    };
    latestVersion = maxVersion;
  }
  if (!n && latestVersion === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION && (await vn(latestVersion)) && (await _e(executable_6))) return t(`Found ${latestVersion} at ${executable_6}, skipping install`), l("tengu_native_update_complete", {
    latency_ms: Date.now() - r,
    was_new_install: !1,
    was_force_reinstall: !1,
    was_already_running: !0
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: latestVersion
  };
  if (!n && qlt(latestVersion)) return l("tengu_native_update_skipped_minimum_version", {
    latency_ms: Date.now() - r,
    target_version: Na(latestVersion)
  }), {
    success: !0,
    wasSkipped: !0,
    latestVersion: latestVersion
  };
  if (y) l("tengu_native_update_forced_downgrade", {
    from_version: Na({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION),
    to_version: Na(latestVersion)
  });
  let N = !1,
    moveRetried_2 = !1,
    activationFailed = !1,
    activationRefused = !1,
    skippedUnverifiedRelease = !1,
    latency_ms_7;
  if (Pe("true")) ({
    wasNewInstall: N,
    moveRetried: moveRetried_2,
    activationFailed: activationFailed,
    activationRefused: activationRefused,
    skippedUnverifiedRelease: skippedUnverifiedRelease
  } = await on(latestVersion, {
    forceReinstall: n,
    explicitVersionRequested: !s,
    requireEnforcingRelease: requireEnforcingRelease_3
  })), latency_ms_7 = Date.now() - r;else {
    let {
      installPath: installPath_4
    } = await ht(latestVersion);
    if (n) await oi(installPath_4);
    let L = await wn(installPath_4, async () => {
      ({
        wasNewInstall: N,
        moveRetried: moveRetried_2,
        activationFailed: activationFailed,
        activationRefused: activationRefused,
        skippedUnverifiedRelease: skippedUnverifiedRelease
      } = await on(latestVersion, {
        forceReinstall: n,
        explicitVersionRequested: !s,
        requireEnforcingRelease: requireEnforcingRelease_3
      }));
    }, 3);
    if (latency_ms_7 = Date.now() - r, !L) {
      let O = ae(),
        B;
      if (m5e()) {
        let U = Ee(O, installPath_4);
        if (ge(U)) B = pe(U)?.pid;
      }
      return c("update_apply", "update_apply_native_lock_failed"), l("tengu_native_update_lock_failed", {
        latency_ms: latency_ms_7,
        lock_holder_pid: B
      }), {
        success: !1,
        latestVersion: latestVersion,
        lockFailed: !0,
        lockHolderPid: B
      };
    }
  }
  if (skippedUnverifiedRelease) return l("tengu_native_update_skipped_unverified_release", {
    latency_ms: latency_ms_7,
    target_version: Na(latestVersion)
  }), t(`Native installer: resolved ${latestVersion} predates manifest signature enforcement; staying on ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}`, {
    level: "warn"
  }), {
    success: !0,
    wasSkipped: !0,
    skippedUnverifiedRelease: !0,
    latestVersion: latestVersion
  };
  if (activationFailed) c("update_apply", "update_apply_native_activation_failed_old_binary_kept");else if (activationRefused) c("update_apply", "update_apply_native_activation_refused_external_launcher");else if (moveRetried_2) c("update_apply", "update_apply_native_move_retry");else g("update_apply");
  return l("tengu_native_update_complete", {
    latency_ms: latency_ms_7,
    was_new_install: N,
    was_force_reinstall: n
  }), t(`Successfully updated to version ${latestVersion}`), {
    success: !0,
    latestVersion: latestVersion
  };
}
async function Jr(e) {
  try {
    await Fr(e), t(`Removed empty directory at ${e}`);
  } catch (error) {
    let r = k(error);
    if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY") t(`Could not remove directory at ${e}: ${error}`);
  }
}
async function ei(e, n, {
  expectedChecksum: expectedChecksum_3
} = {}) {
  if (oe().startsWith("win32")) try {
    let y = ne(e);
    await he(y, {
      recursive: !0
    });
    let b;
    try {
      b = await re(e);
    } catch {}
    if (b) try {
      let N = await re(n);
      if (b.size === N.size && (expectedChecksum_3 === void 0 || (await ze(e, expectedChecksum_3)))) return "noop";
    } catch {}
    let A = `${e}.new.${process.pid}.${Date.now()}.${mn(4).toString("hex")}`;
    try {
      await un(n, A);
    } catch (error) {
      if (K(error)) throw Error(`Source file does not exist: ${n}`);
      throw error;
    }
    let C;
    try {
      C = expectedChecksum_3 === void 0 || (await Ue(A)) === expectedChecksum_3;
    } catch (error) {
      throw await ce(A).catch(() => {}), error;
    }
    if (!C) return await ce(A).catch(() => {}), t(`Refusing to install a launcher copy of ${n} that does not match its signed checksum`, {
      level: "error"
    }), "failed";
    try {
      let N = b !== void 0;
      if (!N) try {
        await ve(A, e);
      } catch (error) {
        let D = k(error);
        if (D !== "EEXIST" && D !== "EPERM" && D !== "EBUSY") throw error;
        N = !0;
      }
      if (N) {
        let M = Ur(e);
        await ve(e, M);
        try {
          await ve(A, e);
        } catch (D) {
          try {
            await ve(M, e);
          } catch (error) {
            let V = Error(`Failed to restore old executable: ${error}`, {
              cause: D
            });
            throw a(V), V;
          }
          throw D;
        }
      }
    } catch (error) {
      throw await ce(A).catch(() => {}), error;
    }
    return "updated";
  } catch (error) {
    return t(`Failed to copy executable from ${n} to ${e}: ${error}`, {
      level: "error"
    }), "failed";
  }
  let w = ne(e);
  try {
    await he(w, {
      recursive: !0
    }), t(`Created directory ${w} for symlink`);
  } catch (error) {
    return t(`Failed to create directory ${w}: ${error}`, {
      level: "error"
    }), "failed";
  }
  try {
    return await rn(n, e), t(`Created symlink ${e} -> ${n}`), "updated";
  } catch (error) {
    if (k(error) !== "EEXIST") return t(`Failed to create symlink from ${e} to ${n}: ${error}`, {
      level: "error"
    }), "failed";
  }
  if (!(await nJt(e)) && !(await Dut(e).catch(() => !1))) return t(`Not replacing ${e}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${e} and re-run the update to let the installer manage the launcher again.`, {
    level: "warn"
  }), "refused";
  let S = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return await rn(n, S), await ve(S, e), t(`Atomically updated symlink ${e} -> ${n}`), "updated";
  } catch (error) {
    try {
      await ce(S);
    } catch {}
    return t(`Failed to create symlink from ${e} to ${n}: ${error}`, {
      level: "error"
    }), "failed";
  }
}
async function jlt(e = !1) {
  if (Pe(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let n = await p5e();
  if (n === "development") return [];
  let r = fe();
  if (!(e || n === "native" || r.installMethod === "native")) return [];
  let s = ae(),
    w = [],
    S = [],
    y = ne(s.executable),
    b = de(y),
    C = oe().startsWith("win32");
  try {
    await Ir(y);
  } catch {
    w.push({
      message: `claude command at ${s.executable} missing or broken (${y} does not exist)`,
      userActionRequired: !0,
      type: "error"
    }), S.push("bin_dir_missing");
  }
  if (C) {
    if (!(await _e(s.executable))) w.push({
      message: `claude command at ${s.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), S.push("executable_missing");
  } else try {
    let M = await fn(s.executable),
      D = de(ne(s.executable), M);
    if (!(await _e(D))) w.push({
      message: `claude command at ${s.executable} missing or broken (symlink points to ${M})`,
      userActionRequired: !0,
      type: "error"
    }), S.push("executable_invalid");
  } catch (error) {
    if (K(error)) w.push({
      message: `claude command at ${s.executable} missing or broken`,
      userActionRequired: !0,
      type: "error"
    }), S.push("executable_missing");else if (!(await _e(s.executable))) w.push({
      message: `claude command at ${s.executable} missing or broken (not a valid Claude binary)`,
      userActionRequired: !0,
      type: "error"
    }), S.push("executable_invalid");
  }
  if (!(i.PATH || "").split(Vr).some(item => {
    try {
      let D = de(item);
      if (C) return D.toLowerCase() === b.toLowerCase();
      return D === b;
    } catch {
      return !1;
    }
  })) if (S.push("not_in_path"), C) {
    let M = y.replaceAll("/", "\\");
    w.push({
      message: `Native installation exists but ${M} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
      userActionRequired: !0,
      type: "path"
    });
  } else {
    let M = qAt(),
      I = Vlt()[M],
      V = I ? I.replace(pn(), "~") : "your shell config file";
    w.push({
      message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${V} && source ${V}`,
      userActionRequired: !0,
      type: "path"
    });
  }
  if (S.length === 0) g("native_check_install");else c("native_check_install", S[0]);
  return w;
}
class bn {
  inFlight = null;
  begin(e) {
    this.inFlight = e;
  }
  reset() {
    this.inFlight = null;
  }
}
var ti = new W(() => new bn());
function Wlt(e, n = !1, r) {
  if (n) return sn(e, n, r);
  let h = ti.of(H().host);
  if (h.inFlight) return t("installLatest: joining in-flight call"), h.inFlight;
  let s = sn(e, n, r);
  h.begin(s);
  let w = () => {
    h.reset();
  };
  return s.then(w, w), s;
}
async function sn(e, n = !1, r) {
  let h = await Zr(e, n);
  if (!h.success) return {
    latestVersion: null,
    wasUpdated: !1,
    lockFailed: h.lockFailed,
    lockHolderPid: h.lockHolderPid
  };
  if (h.skippedUnverifiedRelease) return {
    latestVersion: h.latestVersion,
    wasUpdated: !1,
    wasSkipped: !0,
    skippedUnverifiedRelease: !0,
    lockFailed: !1
  };
  if (fe().installMethod !== "native") await Le(w => ({
    ...w,
    installMethod: "native",
    autoUpdates: !1,
    autoUpdatesProtectedForNative: !0
  }), r), t('Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection');
  return sJr(), {
    latestVersion: h.latestVersion,
    wasUpdated: h.success && !h.wasSkipped,
    wasSkipped: h.wasSkipped,
    lockFailed: !1
  };
}
async function ni(e) {
  try {
    let n = await fn(e),
      r = de(ne(e), n);
    if (await _e(r)) return r;
  } catch {}
  return null;
}
function Ee(e, n) {
  return Y(e.locks, `${QEn(n)}.lock`);
}
async function $n(e, n) {
  let lockfilePath_2 = Ee(e, n);
  if (m5e()) {
    if (ge(lockfilePath_2)) return !0;
    let h = Ive(n);
    if (h === void 0) return !1;
    let s;
    try {
      s = await Ce(e.locks);
    } catch (error) {
      if (K(error)) return !1;
      return t(`Keeping the app bundle of ${h}: could not list the locks folder ${e.locks}: ${d(error)}`, {
        level: "warn"
      }), !0;
    }
    return s.some(item => item.startsWith(`${h}@`) && /^\d+\.lock$/.test(item.slice(h.length + 1)) && ge(Y(e.locks, item)));
  }
  try {
    return await Tea(n, {
      stale: stale,
      lockfilePath: lockfilePath_2
    });
  } catch (error) {
    return Ive(n) !== void 0 && !K(error);
  }
}
var ri = 300000,
  cn = null;
function ii() {
  if (cn) return;
  let e = setInterval(() => {
    ai();
  }, ri);
  e.unref?.(), cn = e;
}
async function ai() {
  try {
    if (!m5e()) return;
    let e = ae();
    if (!process.execPath.includes(e.versions) && Ive(process.execPath) === void 0) return;
    let n = de(process.execPath);
    await he(e.locks, {
      recursive: !0
    });
    let r = pt(e.locks, QEn(n), process.pid);
    if (pe(r)?.pid !== process.pid) mt(n, e.locks);
    let h = Ee(e, n),
      s = pe(h);
    if (s?.pid === process.pid) return;
    if (s && xe(s.pid)) return;
    await Jt(n, h);
  } catch (error) {
    t(`NON-FATAL: version lock maintenance failed: ${d(error)}`);
  }
}
async function eMe() {
  let e = ae();
  if (!process.execPath.includes(e.versions) && Ive(process.execPath) === void 0) return;
  let n = de(process.execPath);
  try {
    let lockfilePath_3 = Ee(e, n);
    if (await he(e.locks, {
      recursive: !0
    }), m5e()) {
      let per_pid_lock_written = mt(n, e.locks);
      if (ii(), await Mar(), !(await Yt(n, lockfilePath_3))) {
        l("tengu_version_lock_failed", {
          is_pid_based: !0,
          is_lifetime_lock: !0,
          per_pid_lock_written: per_pid_lock_written
        }), Ke(n, Error("Lock already held by another process"));
        return;
      }
      l("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !0,
        per_pid_lock_written: per_pid_lock_written
      }), t(`Acquired PID lock on running version: ${n}`);
    } else {
      let h;
      try {
        h = await Zd(n, {
          stale: stale,
          retries: 0,
          lockfilePath: lockfilePath_3,
          onCompromised: s => {
            t(`NON-FATAL: Lock on running version was compromised: ${s.message}`, {
              level: "info"
            });
          }
        }), l("tengu_version_lock_acquired", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), t(`Acquired mtime-based lock on running version: ${n}`), vt(async () => {
          try {
            await h?.();
          } catch {}
        });
      } catch (error) {
        if (K(error)) {
          t(`Cannot lock current version - file does not exist: ${n}`, {
            level: "info"
          });
          return;
        }
        l("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !0
        }), Ke(n, error);
        return;
      }
    }
  } catch (error) {
    if (K(error)) {
      t(`Cannot lock current version - file does not exist: ${n}`, {
        level: "info"
      });
      return;
    }
    t(`NON-FATAL: Failed to lock current version during execution ${d(error)}`, {
      level: "info"
    });
  }
}
function Ke(e, n) {
  t(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${d(n)}`, {
    level: "error"
  });
}
async function oi(e) {
  let n = ae(),
    r = Ee(n, e);
  try {
    await ce(r), t(`Force-removed lock file at ${r}`);
  } catch (error) {
    t(`Failed to force-remove lock file: ${d(error)}`);
  }
}
var si = 3600000;
async function Sn(e) {
  let n = Date.now() - si;
  try {
    let r = await Ce(e),
      cleaned_count = 0;
    for (let s of r) {
      let w = Y(e, s);
      try {
        if ((await re(w)).mtime.getTime() < n) await Ne(w, {
          recursive: !0,
          force: !0
        }), cleaned_count++, t(`Cleaned up old staging directory: ${s}`);
      } catch {}
    }
    if (cleaned_count > 0) t(`Cleaned up ${cleaned_count} orphaned staging directories`), l("tengu_native_staging_cleanup", {
      cleaned_count: cleaned_count
    });
  } catch (error) {
    if (!K(error)) t(`Failed to clean up staging directories: ${error}`);
  }
}
async function sJr() {
  await Promise.resolve();
  let e = ae(),
    n = Date.now() - 3600000,
    r = Date.now() - 1209600000,
    h = Date.now() - zr;
  if (oe().startsWith("win32")) {
    let b = ne(e.executable),
      A = gn(e.executable);
    try {
      let C = await Ce(b),
        N = C.flatMap(P => {
          let L = Gr(P, A);
          return L === void 0 ? [] : [{
            file: P,
            ...L
          }];
        }),
        M = N.filter(item => item.kind === "backup").sort((itemA, itemB) => itemB.stampedMs - itemA.stampedMs),
        D = C.find(item => item.toLowerCase() === A.toLowerCase()),
        I = M.length > 0 && !(D !== void 0 && (await hn(Y(b, D)))),
        V = I ? await Br(M, P => Y(b, P.file)) : void 0,
        z = 0;
      for (let P of N) {
        if (P.kind === "backup" && I && (P === V && P.stampedMs >= h || P.stampedMs >= r)) continue;
        try {
          let L = Y(b, P.file);
          if (P.stampedMs >= n || (await re(L)).mtime.getTime() >= n) continue;
          await ce(L), z++;
        } catch {}
      }
      if (z > 0) t(`Cleaned up ${z} old Windows executables on startup`);
    } catch (error) {
      if (!K(error)) t(`Failed to clean up old Windows executables: ${error}`);
    }
  }
  if (await Sn(e.staging), m5e()) {
    let cleaned_count_2 = await Qt(e.locks);
    if (cleaned_count_2 > 0) t(`Cleaned up ${cleaned_count_2} stale version locks`), l("tengu_native_stale_locks_cleanup", {
      cleaned_count: cleaned_count_2
    });
  }
  let s;
  try {
    s = await Ce(e.versions);
  } catch (error) {
    if (!K(error)) t(`Failed to readdir versions directory: ${error}`), c("native_cleanup_versions", "readdir_failed");else g("native_cleanup_versions");
    return;
  }
  let w = [],
    cleaned_count_3 = 0;
  for (let name_4 of s) {
    let path = Y(e.versions, name_4);
    if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(name_4)) {
      try {
        if ((await Mr(path)).mtime.getTime() < n) await ce(path), cleaned_count_3++, t(`Cleaned up orphaned temp install file: ${name_4}`);
      } catch {}
      continue;
    }
    try {
      let C = await re(path);
      if (!C.isFile()) continue;
      w.push({
        name: name_4,
        path: path,
        resolvedPath: de(path),
        mtime: C.mtime,
        size: C.size
      });
    } catch {}
  }
  if (cleaned_count_3 > 0) t(`Cleaned up ${cleaned_count_3} orphaned temp install files`), l("tengu_native_temp_files_cleanup", {
    cleaned_count: cleaned_count_3
  });
  let y = s.includes(Glt);
  if (w.length === 0 && !y) {
    g("native_cleanup_versions");
    return;
  }
  if (!(await nJt(e.executable)) && !(await Dut(e.executable).catch(() => !1))) {
    if (y) await ln(e, {
      keepEveryBundle: !0
    });
    t(`Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`), c("native_cleanup_versions", "skipped_external_launcher");
    return;
  }
  try {
    let execPath_2 = process.execPath,
      A = new Set();
    if (execPath_2 && execPath_2.includes(e.versions)) A.add(de(execPath_2));
    let C = Ive(execPath_2);
    if (C !== void 0) A.add(de(e.versions, C));
    let N = await ni(e.executable);
    if (N) A.add(N);else if (oe().startsWith("win32")) try {
      let P = await re(e.executable);
      for (let L of w) if (L.size === P.size) A.add(L.resolvedPath);
    } catch {}
    if (m5e()) {
      let P = await en(e.locks);
      if (P === null) {
        t("Skipping version cleanup: could not read the locks, so lock protection is unavailable", {
          level: "error"
        }), c("native_cleanup_versions", "lock_scan_failed");
        return;
      }
      for (let L of w) {
        if (A.has(L.resolvedPath)) continue;
        if (P.has(L.name)) A.add(L.resolvedPath), t(`Protecting locked version from cleanup: ${L.name}`);
      }
    } else for (let P of w) {
      if (A.has(P.resolvedPath)) continue;
      if (await $n(e, P.resolvedPath)) A.add(P.resolvedPath), t(`Protecting locked version from cleanup: ${P.name}`);
      await new Promise(L => setImmediate(L));
    }
    let M = w.filter(item => !A.has(item.resolvedPath)).sort((itemA, itemB) => itemB.mtime.getTime() - itemA.mtime.getTime()),
      D = [...M.filter(item => item.size > 0).slice(retained_count), ...M.filter(item => item.size === 0 && item.mtime.getTime() < n)];
    if (D.length === 0) {
      l("tengu_native_version_cleanup", {
        total_count: w.length,
        deleted_count: 0,
        protected_count: A.size,
        retained_count: retained_count,
        lock_failed_count: 0,
        error_count: 0
      }), g("native_cleanup_versions");
      return;
    }
    let deleted_count = 0,
      lock_failed_count = 0,
      error_count = 0;
    if (await Promise.all(D.map(async item => {
      try {
        let L = !0,
          O = !1,
          B = await wn(item.path, async () => {
            if (item.size === 0) {
              let U = await re(item.path);
              if (U.size > 0 || U.mtime.getTime() >= n) {
                L = !1;
                return;
              }
            }
            if (m5e() && tn(e.locks, item.name)) {
              O = !0;
              return;
            }
            await ce(item.path);
          });
        if (B && O) lock_failed_count++, t(`Skipping deletion of ${item.name} - a live process may be using it`);else if (B && L) deleted_count++;else if (!B) lock_failed_count++, t(`Skipping deletion of ${item.name} - locked by another process`);
      } catch (error) {
        error_count++, t(`Failed to delete version ${item.name}: ${error}`, {
          level: "error"
        });
      }
    })), l("tengu_native_version_cleanup", {
      total_count: w.length,
      deleted_count: deleted_count,
      protected_count: A.size,
      retained_count: retained_count,
      lock_failed_count: lock_failed_count,
      error_count: error_count
    }), error_count > 0) c("native_cleanup_versions", "delete_errors");else if (lock_failed_count > 0) c("native_cleanup_versions", "lock_failed");else g("native_cleanup_versions");
  } catch (error) {
    if (!K(error)) a(Error(`Version cleanup failed: ${error}`)), c("native_cleanup_versions", "unexpected_error");else g("native_cleanup_versions");
  } finally {
    if (y) await ln(e, {
      keepEveryBundle: !1
    });
  }
}
async function ln(e, {
  keepEveryBundle: keepEveryBundle
}) {
  let cleaned_count_4 = await Gt(e.versions, keepEveryBundle ? void 0 : {
    launcherPath: e.executable,
    isVersionLockActive: h => $n(e, h)
  });
  if (typeof cleaned_count_4 === "number") g("native_cleanup_app_bundles", {
    cleaned_count: cleaned_count_4
  });else c("native_cleanup_app_bundles", cleaned_count_4);
}
async function C6t() {
  let e = ae();
  try {
    if (await Dut(e.executable).catch(n => {
      if (K(n)) return !1;
      throw n;
    })) {
      t(`Skipping removal of ${e.executable} - appears to be npm-managed`), g("native_remove_symlink");
      return;
    }
    if (!(await nJt(e.executable))) {
      t(`Skipping removal of ${e.executable} - not created by the native installer`), g("native_remove_symlink");
      return;
    }
    await ce(e.executable), t(`Removed claude symlink at ${e.executable}`), g("native_remove_symlink");
  } catch (error) {
    if (K(error)) {
      g("native_remove_symlink");
      return;
    }
    t(`Failed to remove claude symlink: ${error}`, {
      level: "error"
    }), m("native_remove_symlink", "unlink_failed");
  }
}
async function q7o() {
  let e = [],
    n = Vlt(),
    r = !1;
  for (let [h, s] of Object.entries(n)) try {
    let w = await Dar(s);
    if (!w) continue;
    let {
      filtered: filtered,
      hadAlias: hadAlias
    } = cJr(w);
    if (hadAlias) await uJr(s, filtered), e.push({
      message: `Removed claude alias from ${s}. Run: unalias claude`,
      userActionRequired: !0,
      type: "alias"
    }), t(`Cleaned up claude alias from ${h} config`);
  } catch (error) {
    r = !0, t(`Failed to clean up claude alias from ${s}: ${error}`, {
      level: "error"
    }), e.push({
      message: `Failed to clean up ${s}: ${error}`,
      userActionRequired: !1,
      type: "error"
    });
  }
  if (r) c("native_cleanup_aliases", "config_write_failed");else g("native_cleanup_aliases");
  return e;
}
async function li(e) {
  try {
    let n = await lt("npm", ["config", "get", "prefix"], {
      useToolMemoryCgroup: !1
    });
    if (n.code !== 0 || !n.stdout) return {
      success: !1,
      error: "Failed to get npm global prefix"
    };
    let r = n.stdout.trim(),
      h = !1;
    async function s(w, S) {
      try {
        return await ce(w), t(`Manually removed ${S}: ${w}`), !0;
      } catch {
        return !1;
      }
    }
    if (oe().startsWith("win32")) {
      let w = Y(r, "claude.cmd"),
        S = Y(r, "claude.ps1"),
        y = Y(r, "claude");
      if (await s(w, "bin script")) h = !0;
      if (await s(S, "PowerShell script")) h = !0;
      if (await s(y, "bin executable")) h = !0;
    } else {
      let w = Y(r, "bin", "claude");
      if (await s(w, "bin symlink")) h = !0;
    }
    if (h) {
      t(`Successfully removed ${e} manually`);
      let w = oe().startsWith("win32") ? Y(r, "node_modules", e) : Y(r, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${w}`
      };
    } else return {
      success: !1
    };
  } catch (n) {
    return t(`Manual removal failed: ${n}`, {
      level: "error"
    }), {
      success: !1,
      error: `Manual removal failed: ${n}`
    };
  }
}
async function dn(e) {
  let {
    code: code_2,
    stderr: stderr
  } = await lt("npm", ["uninstall", "-g", e], {
    cwd: process.cwd(),
    useToolMemoryCgroup: !1
  });
  if (code_2 === 0) return t(`Removed global npm installation of ${e}`), {
    success: !0
  };else if (stderr && !stderr.includes("npm ERR! code E404")) {
    if (stderr.includes("npm error code ENOTEMPTY")) {
      t(`Failed to uninstall global npm package ${e}: ${stderr}`, {
        level: "error"
      }), t("Attempting manual removal due to ENOTEMPTY error");
      let h = await li(e);
      if (h.success) return {
        success: !0,
        warning: h.warning
      };else if (h.error) return {
        success: !1,
        error: `Failed to remove global npm installation of ${e}: ${stderr}. Manual removal also failed: ${h.error}`
      };
    }
    return t(`Failed to uninstall global npm package ${e}: ${stderr}`, {
      level: "error"
    }), {
      success: !1,
      error: `Failed to remove global npm installation of ${e}: ${stderr}`
    };
  }
  return {
    success: !1
  };
}
async function Y7o() {
  let errors = [],
    warnings = [],
    removed = 0,
    h = !1,
    s = !1,
    w = await dn("@anthropic-ai/claude-code");
  if (w.success) {
    if (removed++, w.warning) warnings.push(w.warning);
  } else if (w.error) errors.push(w.error), h = !0;
  if ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL && {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.PACKAGE_URL !== "@anthropic-ai/claude-code") {
    let y = await dn({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.PACKAGE_URL);
    if (y.success) {
      if (removed++, y.warning) warnings.push(y.warning);
    } else if (y.error) errors.push(y.error), h = !0;
  }
  let S = Y(pn(), ".claude", "local");
  try {
    await Ne(S, {
      recursive: !0
    }), removed++, t(`Removed local installation at ${S}`);
  } catch (error) {
    if (!K(error)) errors.push(`Failed to remove ${S}: ${error}`), t(`Failed to remove local installation: ${error}`, {
      level: "error"
    }), s = !0;
  }
  if (errors.length === 0) g("native_cleanup_npm");else if (removed > 0) c("native_cleanup_npm", "partial_errors");else if (h && !s) m("native_cleanup_npm", "npm_uninstall_failed");else if (s && !h) m("native_cleanup_npm", "local_install_remove_failed");else m("native_cleanup_npm", "npm_uninstall_failed");
  return {
    removed: removed,
    errors: errors,
    warnings: warnings
  };
}
export { ManifestSignatureError as hx, K7o, xar, StallTimeoutError as KEn, qEn, YEn, jlt, Wlt, eMe, sJr, C6t, q7o, Y7o };