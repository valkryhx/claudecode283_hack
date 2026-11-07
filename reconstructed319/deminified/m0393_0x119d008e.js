// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, Ee, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, d, k, tr, K, wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { FE, En, or, yS, bl, NC, Bb, MT, dqn, z$r, Cl, jb, Ks, T0, R0 } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, Tj, ZPo, m7, ps, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { hR, xee } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { ql, tb } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { um } from "B:/~BUN/root/chunk-1g25msn4.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { vH } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { Fte } from "B:/~BUN/root/chunk-pwj77283.js";
import { sz, L_e, RCe, mee, sk, k7e, OGe, xue, Ly, Gc, Aa, PCe } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { lo, dl } from "B:/~BUN/root/chunk-detjgwj4.js";
import { LQt, qP } from "B:/~BUN/root/chunk-pw7914mv.js";
import { Hze, dJe, Spt } from "B:/~BUN/root/chunk-hjds4dtx.js";
import { oFi, Dze } from "B:/~BUN/root/chunk-cj2cn5y2.js";
import { RF } from "B:/~BUN/root/chunk-pp5rqp7s.js";
import { Av, LBi, ymt } from "B:/~BUN/root/chunk-zx0hhrva.js";
import { ze as name } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { zFe as error_3, IDr as error_2 } from "B:/~BUN/root/chunk-e0q1m1z9.js";
import { oe, C } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { constants as ae } from "fs";
import { lstat as se, open as le, realpath as A, stat as de } from "fs/promises";
import { basename as Z, dirname as ce, extname as _e, isAbsolute as Ce, sep as I } from "path";
function K9(e, n) {
  let r = n.restricted && k7e(e);
  return r && !Ly(e, n, r) && PCe(e, {}, r, {
    restricted: !0
  }).behavior !== "allow" || xue(e, n);
}
class aJe extends Error {
  constructor() {
    super("the name or the place of a credential");
  }
}
var ue = 0,
  ye = 0,
  Pe = 0,
  PQt = 10485760,
  F = {
    tag: "chrome",
    validate: validate,
    rejection: rejection,
    noPaths: "file_upload requires a non-empty `paths` array of files the user has shared with this session.",
    namesSource: !1
  };
async function Re(e) {
  let n = [{
    path: Av(),
    kind: "attachments"
  }];
  if (e.isRemoteMode || i.CLAUDE_STAGE_FILE_ROOT) try {
    if (n.push({
      path: hR(),
      kind: "staging",
      fromChat: !0
    }), sz(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)) n.push({
      path: xee(),
      kind: "staging"
    });
  } catch (error) {
    t(`[chrome file_upload] stage root unresolvable, skipping staging roots (${error instanceof Error ? error.message : String(error)})`);
  }
  return n;
}
async function xgs(e, input, r, {
  maxTotalBytes: a = PQt,
  hosted: hosted,
  screen: s = F.validate
} = {}) {
  let l = {
      remaining: a,
      total: a
    },
    f = () => L(e, input, b => he(b, r, l, {
      ...F,
      validate: s
    }));
  if (hosted === void 0) return f();
  if (e !== "file_upload") {
    let b = {
      error: error_2
    };
    return L(e, input, async () => b, Dze.peek(hosted.session)?.host ? b : z);
  }
  if ("files" in input) return {
    error: "file_upload takes `paths`, not `files`. Nothing was uploaded. Call it again without `files`."
  };
  let w = q() ? Dze.peek(hosted.session)?.host : void 0,
    h;
  if (w) {
    let {
      paths: paths
    } = input;
    if (!Array.isArray(paths) || paths.length === 0) return {
      error: F.noPaths
    };
    h = await w.read(paths, r, a, hosted.signal, !1);
  } else {
    let b = await f();
    h = {
      files: b.input?.files,
      error: b.error
    };
  }
  return h.error !== void 0 ? {
    error: h.error
  } : {
    input: input,
    callMeta: {
      [oFi]: h.files
    }
  };
}
async function Pgs(e, n, {
  hostAsksPerFile: hostAsksPerFile
}) {
  if (q()) return z;
  if (Array.isArray(e.paths) && e.paths.length > 1) return {
    error: "file_upload takes one file per call in this browser pane. Nothing was uploaded. Call it once for each file."
  };
  return he(e, n, {
    remaining: PQt,
    total: PQt
  }, {
    tag: "pane",
    validate: (o, s) => Fe(o, s, hostAsksPerFile),
    rejection: rejection_2,
    noPaths: "file_upload needs `paths` to be an array holding one absolute file path. Nothing was uploaded.",
    namesSource: !0
  });
}
async function fSa(e, n, r) {
  return L(e, n, async a => {
    let paths_2 = a.paths;
    if (!Array.isArray(paths_2) || paths_2.length === 0) return {
      error: "file_upload requires a non-empty `paths` array of files the user has shared with this session."
    };
    let paths_4 = [];
    for (let h of paths_2) {
      if (typeof h !== "string") return {
        error: "file_upload `paths` entries must be strings."
      };
      try {
        paths_4.push(await xe(h, r));
      } catch (b) {
        return t(`[chrome file_upload] rejected path (pass-through): ${h} (${b instanceof Error ? b.message : String(b)})`), {
          error: b instanceof V ? ve(h) : b instanceof aJe ? fe(h) : rejection_2(h)
        };
      }
    }
    let {
      files: files,
      paths: paths_3,
      ...w
    } = a;
    return {
      input: {
        ...w,
        paths: paths_4
      }
    };
  });
}
async function L(e, input_2, r, a = z) {
  if (e === "file_upload") return q() ? a : r(input_2);
  if (e === "browser_batch") {
    if (!Array.isArray(input_2.actions)) return {
      error: "browser_batch requires an `actions` array."
    };
    let actions = [...input_2.actions],
      s = !1;
    for (let l = 0; l < actions.length; l++) {
      let f = actions[l];
      if (typeof f !== "object" || f === null || typeof f.name !== "string") return {
        error: "browser_batch sub-actions must be objects with a string name, and browser_batch cannot be nested."
      };
      let w = f.name;
      if (!/^[\x20-\x7E]+$/.test(w)) return {
        error: ee(w)
      };
      let h = w.trim().toLowerCase();
      if (h === "browser_batch") return {
        error: "browser_batch sub-actions must be objects with a string name, and browser_batch cannot be nested."
      };
      if (h === "file_upload" && w !== "file_upload") return {
        error: ee(w)
      };
      if (w !== "file_upload") continue;
      let b = f,
        P = typeof b.input === "object" && b.input !== null ? b.input : {},
        y = q() ? a : await r(P);
      if (y.error) return {
        error: y.error
      };
      if (y.input !== b.input) actions[l] = {
        ...b,
        input: y.input
      }, s = !0;
    }
    return s ? {
      input: {
        ...input_2,
        actions: actions
      }
    } : {
      input: input_2
    };
  }
  return {
    input: input_2
  };
}
var z = {
  error: error_3
};
function E(e) {
  return e.replace(/["\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, "\uFFFD");
}
function rejection(e) {
  return `Cannot upload "${E(e)}": only files this session is allowed to read can be uploaded. Ask the user to share the file with this session, or to add its folder with /add-dir.`;
}
function fe(e) {
  return `Cannot upload "${E(e)}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not uploaded on Claude's word alone. Tell the user it was not uploaded.`;
}
function rejection_2(e) {
  return `Cannot upload "${E(e)}": only files this session is allowed to read can be uploaded. Ask the user to share the file or its folder with this session.`;
}
function ve(e) {
  return `Cannot upload "${E(e)}": file_upload \`paths\` must be absolute paths as this session sees them (for example /sessions/\u2026 in a Cowork VM, or a drive-letter path on Windows).`;
}
function ee(e) {
  return `browser_batch sub-action name "${E(e)}" is not a valid tool name.`;
}
async function he(e, n, r, a) {
  let paths_5 = e.paths;
  if (!Array.isArray(paths_5) || paths_5.length === 0) return {
    error: a.noPaths
  };
  let files_2 = [];
  for (let u of paths_5) {
    if (typeof u !== "string") return {
      error: "file_upload `paths` entries must be strings."
    };
    let _, requiredDigest, outsideWorkingFolders, needsHostAsk;
    try {
      ({
        realPath: _,
        requiredDigest: requiredDigest,
        outsideWorkingFolders: outsideWorkingFolders,
        needsHostAsk: needsHostAsk
      } = await a.validate(u, n));
    } catch (T) {
      return t(`[${a.tag} file_upload] rejected path: ${u} (${T instanceof Error ? T.message : String(T)})`), {
        error: T instanceof aJe ? fe(u) : a.rejection(u)
      };
    }
    let U = await je(u, _, r, a.tag, outsideWorkingFolders ? a.rejection : void 0);
    if ("error" in U) return {
      error: U.error
    };
    if (requiredDigest !== void 0 && nt(U.buf) !== requiredDigest) return t(`[${a.tag} file_upload] registered attachment digest mismatch: ${u}`), {
      error: a.rejection(u)
    };
    files_2.push({
      data: U.buf.toString("base64"),
      name: await GTe(_),
      mimeType: Me(_),
      ...(a.namesSource && {
        sourcePath: _,
        requestedPath: E(u).replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, "\uFFFD"),
        needsHostAsk: needsHostAsk !== !1
      })
    });
  }
  let {
    paths: paths_6,
    ...f
  } = e;
  if (!a.namesSource) return {
    input: {
      ...f,
      files: files_2
    }
  };
  let {
    needsHostAsk: needsHostAsk_2,
    sourcePath: sourcePath,
    requestedPath: requestedPath,
    hostAsksPerFile: hostAsksPerFile_2,
    ...y
  } = f;
  return {
    input: {
      ...y,
      files: files_2
    }
  };
}
async function GTe(e) {
  let n = await A(Av()).catch(() => {
    return;
  });
  return n !== void 0 && ce(e) === n ? LBi(Z(e)) : Z(e);
}
function ge(e, n, r = !1) {
  let absPath = r ? e.trim() : mt(e),
    o = e.trim();
  if (yS(o) || yS(absPath)) throw new R(`network path not allowed: ${yS(o) ? o : absPath}`, "claudeInChrome/fileUpload: network path rejected before filesystem access");
  let {
    paths: s,
    vetted: vetted
  } = r ? {
    paths: [absPath],
    vetted: !0
  } : m7(absPath);
  if (!vetted) throw new R("path could not be vetted (symbolic link chain or unreadable component)", "claudeInChrome/fileUpload: unvettable path ancestry rejected before filesystem access");
  let trustedNetworkDirectories = n.trustedNetworkDirectories;
  for (let w of [o, ...s]) B(w, trustedNetworkDirectories);
  return {
    absPath: absPath,
    absChain: s
  };
}
function B(e, n) {
  if (L_e(e, n) || RCe(e, n)) throw new R(`network path not allowed: ${e}`, "claudeInChrome/fileUpload: network path rejected");
  if (mee(e, n)) throw new R(`suspicious path spelling: ${e}`, "claudeInChrome/fileUpload: suspicious Windows path pattern rejected");
}
function M(e, n, r = {}) {
  for (let a of e) {
    if (Aa(a, n, "read", "deny", r)) throw new R(`read denied: ${a}`, "claudeInChrome/fileUpload: path matches a read deny rule");
    if (Aa(a, n, "read", "ask", r)) throw new R(`read requires approval: ${a}`, "claudeInChrome/fileUpload: path matches a read ask rule");
  }
}
var Ae = 4096,
  me = 3,
  Oe = 64;
async function xe(e, n, r = me, a = new Set()) {
  return (await IDn(e, n, r, a)).judged;
}
async function IDn(e, n, r = me, a = new Set(), {
  mappedByHost = !1
} = {}) {
  let s = e.trim();
  if (s !== e) throw new R("surrounding whitespace", "claudeInChrome/fileUpload: whitespace-padded path rejected on the pass-through");
  if (s.length > Ae) throw new R("path too long", "claudeInChrome/fileUpload: over-long path rejected on the pass-through");
  if (r < 0) throw new R(`nested percent-encoding: ${s}`, "claudeInChrome/fileUpload: multiply percent-encoded path rejected on the pass-through");
  if (s.split(/[/\\]/).some(item => item === "..")) throw new R(`parent-segment spelling not allowed: ${s}`, "claudeInChrome/fileUpload: dot-dot segment rejected on the pass-through");
  j(s);
  let judged = mappedByHost ? s : mt(s);
  if (mappedByHost ? !s.startsWith("/") : !De(s, judged)) throw new V();
  if (x() !== "windows" && s.includes("\\")) throw new R(`backslash in a POSIX spelling: ${s}`, "claudeInChrome/fileUpload: backslash spelling rejected on the pass-through");
  if (/[/\\]\.?$/.test(s)) throw new R("trailing separator", "claudeInChrome/fileUpload: trailing-separator path rejected on the pass-through");
  if (lo(n, {
    name: name
  }) !== null || dl(n, {
    name: name
  }) !== null) throw new R("Read tool is restricted for this session", "claudeInChrome/fileUpload: Read tool denied or ask-gated for this session (pass-through)");
  for (let u of [s, judged]) {
    let _ = await ne(u);
    if (_ !== void 0) throw _ === "credential_name" ? new aJe() : N("a kernel or device path, or one of Claude Code's own credentials");
  }
  let f = s.split(/([/\\])/).map(item => {
    if (item === "/" || item === "\\" || !item.includes("%")) return item;
    try {
      return decodeURIComponent(item);
    } catch {
      return item;
    }
  }).join("");
  if (f !== s) await IDn(f, n, r - 1, a, {
    mappedByHost: mappedByHost
  });
  let {
    absChain: absChain
  } = ge(s, n, mappedByHost);
  for (let u of absChain) j(u);
  let {
    realPath: h,
    looped: looped,
    spellings: spellings
  } = mappedByHost ? {
    realPath: void 0,
    looped: !1,
    spellings: []
  } : await Ie(judged);
  for (let u of spellings) B(u, n.trustedNetworkDirectories), j(u);
  let y = new Set();
  for (let u of new Set([s, ...absChain, ...spellings])) {
    let _ = Te(u);
    if (_ !== null && !a.has(_)) {
      if (a.size >= Oe) throw new R("too many stream-base spellings", "claudeInChrome/fileUpload: stream-base fan-out rejected on the pass-through");
      a.add(_);
      try {
        await IDn(_, n, r, a, {
          mappedByHost: mappedByHost
        });
      } catch (error) {
        throw error instanceof aJe ? N(te) : error;
      }
    }
    for (let S of [u, MT(u)]) y.add(S).add(S.normalize("NFC")).add(S.normalize("NFD"));
  }
  M(y, n), M(y, n, {
    caseInsensitiveTarget: !0
  });
  for (let u of y) if ((await ne(u)) !== void 0) throw N(te);
  return {
    judged: judged,
    resolved: h,
    linked: absChain.length > 1 || looped
  };
}
function ne(e) {
  return dJe(e, e, {
    readable: !0
  });
}
var te = "a name or place reached through a link, a case- or Unicode-folded spelling, or the file before a ':stream'";
function N(e) {
  return new R(e, "claudeInChrome/fileUpload: path refused by its name or place on the pass-through");
}
function De(e, n) {
  if (or(e) || or(n)) return !0;
  if (!Ce(e)) return !1;
  return x() !== "windows" || /^[a-z]:[\\/]/i.test(n);
}
function Te(e) {
  let n = e.length;
  for (;;) {
    let l = e[n - 1];
    if (l === "/" || l === "\\") {
      n -= 1;
      continue;
    }
    if (l === "." && n >= 2 && (e[n - 2] === "/" || e[n - 2] === "\\")) {
      n -= 2;
      continue;
    }
    break;
  }
  let r = e.slice(0, n),
    a = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\")) + 1,
    o = r.indexOf(":", a + 1);
  if (o === -1 || a === 0 && o === 1) return null;
  let s = o;
  while (s > a && r[s - 1] === " ") s -= 1;
  return r.slice(0, s);
}
class V extends Error {
  constructor() {
    super("not an anchored absolute path");
  }
}
async function Ie(e) {
  let realPath;
  try {
    realPath = await A(e);
  } catch (error) {
    return {
      realPath: void 0,
      looped: k(error) === "ELOOP",
      spellings: []
    };
  }
  return {
    realPath: realPath,
    looped: !1,
    spellings: ps(realPath)
  };
}
function j(e) {
  let n = e.replace(/\\/g, "/");
  if (/^\/(?:dev|proc)(?:\/|$)/i.test(n) || Bb(n) || /(?:^|\/)\.\.namedfork(?:\/|$)/i.test(n) || /:\$[a-z_]/i.test(n) || jb(n) || n.split("/").some(FE)) throw new R(`alias namespace path not allowed: ${e}`, "claudeInChrome/fileUpload: kernel alias namespace path rejected on the pass-through");
}
async function D(e, n) {
  if ((await dJe(e, n, {
    readable: !0
  })) === "credential_name") throw new aJe();
}
async function G(e, n) {
  if (e.length > Hze) throw new R("path too long", "claudeInChrome/fileUpload: over-long path rejected");
  let r = await Re(n),
    a = mt(e);
  if (!r.some(item => (item.fromChat || item.kind === "attachments") && a.startsWith(item.path + I))) await D(a, a);
  let {
      absPath: absPath_2,
      absChain: absChain_2
    } = ge(e, n),
    trustedNetworkDirectories_2 = n.trustedNetworkDirectories,
    realPath_2 = await A(absPath_2),
    pathsToCheck = new Set([...absChain_2, ...ps(realPath_2)]);
  for (let h of pathsToCheck) B(h, trustedNetworkDirectories_2);
  if (M(pathsToCheck, n), (await dJe(absPath_2, realPath_2, {
    readable: !0,
    attached: !0
  })) !== void 0) throw new R(`kernel or device path, or one of Claude Code's credentials: ${realPath_2}`, "claudeInChrome/fileUpload: kernel or device path, or one of Claude Code's own credentials");
  for (let h of r) {
    let b = await se(h.path).catch(() => null);
    if (b === null || b.isSymbolicLink() || !b.isDirectory()) continue;
    let P = await le(h.path, ae.O_RDONLY | Pe | ue).catch(() => null);
    if (P === null) continue;
    let y;
    try {
      let u = await P.stat();
      if (!u.isDirectory()) continue;
      let _ = await A(h.path).catch(() => {
        return;
      });
      if (_ === void 0) continue;
      let S = await de(_).catch(() => null);
      if (S === null || S.ino !== u.ino || S.dev !== u.dev) continue;
      y = _;
    } finally {
      await P.close();
    }
    if (realPath_2 === y || realPath_2.startsWith(y + I)) {
      if (h.kind === "staging") {
        let _ = await A(Ue()).catch(() => Ue());
        if (y === _ || y.startsWith(_ + I) || _.startsWith(y + I)) continue;
        if (!h.fromChat) await D(absPath_2, realPath_2);
        return {
          absPath: absPath_2,
          realPath: realPath_2,
          pathsToCheck: pathsToCheck,
          sharedWithSession: h.fromChat ? {
            fromChat: !0
          } : {},
          sessionRoot: h.kind
        };
      }
      let requiredDigest_2 = ymt(realPath_2);
      if (requiredDigest_2 !== void 0) return {
        absPath: absPath_2,
        realPath: realPath_2,
        pathsToCheck: pathsToCheck,
        sharedWithSession: {
          requiredDigest: requiredDigest_2
        },
        sessionRoot: h.kind
      };
      break;
    }
  }
  if (lo(n, {
    name: name
  }) !== null || dl(n, {
    name: name
  }) !== null) throw new R("Read tool is restricted for this session", "claudeInChrome/fileUpload: Read tool denied or ask-gated for this session");
  if (n.blockReadsOutsideWorkingDirectories) for (let h of pathsToCheck) {
    let b = qP(h, n, "read");
    if (!b.allowed && b.decisionReason?.type === "safetyCheck" && b.decisionReason.reason === vH) throw new R(`read not allowed: ${h}`, "claudeInChrome/fileUpload: path outside the working directories under the read block");
  }
  return {
    absPath: absPath_2,
    realPath: realPath_2,
    pathsToCheck: pathsToCheck
  };
}
class YSr extends R {
  constructor(e) {
    super(`read not allowed: ${e}`, "claudeInChrome/fileUpload: path read not allowed by session permissions");
  }
}
async function validate(e, n) {
  let {
    absPath: absPath_3,
    realPath: realPath_3,
    pathsToCheck: pathsToCheck_2,
    sharedWithSession: sharedWithSession
  } = await G(e, n);
  if (sharedWithSession !== void 0) return {
    realPath: realPath_3,
    ...sharedWithSession
  };
  if (n.mode === "bypassPermissions" && !n.restricted) return await D(absPath_3, realPath_3), {
    realPath: realPath_3
  };
  for (let l of pathsToCheck_2) {
    let f = qP(l, n, "read");
    if (LQt(f)) throw new YSr(l);
    if (!f.allowed) throw new R(`read not allowed: ${l}`, "claudeInChrome/fileUpload: path read not allowed by session permissions");
    if (n.restricted && K9(l, n)) throw new R(`read not allowed under --restricted: ${l}`, "claudeInChrome/fileUpload: restricted mode refused a file only an allow rule opens");
  }
  return await D(absPath_3, realPath_3), {
    realPath: realPath_3
  };
}
async function Ogs(e, n) {
  let {
    realPath: realPath_4,
    sharedWithSession: sharedWithSession_2,
    sessionRoot: sessionRoot
  } = await G(e, n);
  return sharedWithSession_2 === void 0 ? validate(e, n) : {
    realPath: realPath_4,
    ...sharedWithSession_2,
    sessionRoot: sessionRoot
  };
}
async function Fe(e, n, r) {
  let {
    absPath: absPath_4,
    realPath: realPath_5,
    pathsToCheck: pathsToCheck_3,
    sharedWithSession: sharedWithSession_3
  } = await G(e, n);
  if (sharedWithSession_3 !== void 0) return {
    realPath: realPath_5,
    ...sharedWithSession_3,
    needsHostAsk: !0
  };
  let {
      restricted: restricted
    } = n,
    w = $e(realPath_5, n),
    h = !1,
    b = !1;
  for (let y of pathsToCheck_3) {
    let u = qP(y, n, "read");
    if (u.allowed && !(restricted && u.decisionReason?.type === "rule") && (u.decisionReason !== void 0 || w)) {
      b ||= u.decisionReason !== void 0;
      continue;
    }
    let _ = !u.allowed && !LQt(u) ? `refused by isPathAllowed (${u.decisionReason?.type ?? "no reason given"})` : restricted ? "--restricted session: no rule or host question reaches outside the working folders" : !r ? "outside the working folders, and the host does not ask per file" : void 0;
    if (_ !== void 0) throw new R(`read not allowed (${_}): ${y}`, "claudeInChrome/fileUpload: pane path read not allowed by session permissions");
    h = !0;
  }
  if (!h) return await D(absPath_4, realPath_5), {
    realPath: realPath_5,
    needsHostAsk: b || (await Spt(realPath_5, realDirectory).catch(y => (t(`[pane file_upload] own-files check failed, so the host asks: ${d(y)}`), !0)))
  };
  let P = await dJe(absPath_4, realPath_5, {
    realDirectory: realDirectory
  });
  if (P !== void 0) throw new R(`refused by its name or place (${P}): ${realPath_5}`, "claudeInChrome/fileUpload: pane path outside the working folders is one of Claude Code's own files or is named like a credential");
  return {
    realPath: realPath_5,
    outsideWorkingFolders: !0,
    needsHostAsk: !0
  };
}
function $e(e, n) {
  return Array.from(sk(n)).flatMap(item => OGe(item)).some(item => Gc(e, item, {
    caseFold: !1,
    skipPrivateAlias: !0,
    uncShapeParity: !0
  }));
}
async function realDirectory(e) {
  try {
    return await A(e);
  } catch (error) {
    if (Ne(e, error)) return;
    throw error;
  }
}
function Ne(e, n) {
  if (wr(n)) return !0;
  let r = k(n);
  return e === ce(Fte) && (r === "EACCES" || r === "EPERM");
}
async function We(e, n) {
  let r = n + 1,
    a = Buffer.allocUnsafe(r),
    o = 0;
  while (o < r) {
    let {
      bytesRead: bytesRead
    } = await e.read(a, o, r - o, o);
    if (bytesRead === 0) break;
    o += bytesRead;
  }
  if (o > n) return "grew";
  return {
    buf: a.subarray(0, o)
  };
}
async function puo(e, n, r) {
  let o = (await A(n).catch(() => null)) === n ? await de(n).catch(() => null) : null;
  if (o === null || o.ino !== r.ino || o.dev !== r.dev) return "moved";
  return "ok";
}
async function Vce(e, n, r) {
  let a = await se(e).catch(() => null);
  if (a === null || !a.isFile()) return {
    refusal: "not_regular"
  };
  let o;
  try {
    o = await le(e, ae.O_RDONLY | ue | ye);
  } catch (error) {
    return t(`readValidatedFileWithin: open failed: ${d(error)}`), {
      refusal: "open_failed",
      detail: tr(error) ?? "unknown error"
    };
  }
  try {
    let s = await o.stat();
    if (s.nlink > 1) return {
      refusal: "hard_links"
    };
    if (!s.isFile()) return {
      refusal: "moved"
    };
    if ((await puo(o, e, s)) === "moved") return {
      refusal: "moved"
    };
    if (r !== void 0) {
      if (s.size > n) return {
        refusal: "too_large",
        size: s.size
      };
      return await r(o, s.size), {
        buf: Buffer.alloc(0)
      };
    }
    if (s.size > n) return {
      refusal: "too_large"
    };
    let l = await We(o, s.size);
    if (l === "grew") return {
      refusal: "grew"
    };
    return {
      buf: l.buf
    };
  } catch (error) {
    return t(`readValidatedFileWithin: read failed: ${d(error)}`), {
      refusal: "read_failed",
      detail: tr(error) ?? "unknown error"
    };
  } finally {
    await o.close();
  }
}
async function je(e, n, r, a, o) {
  let s = await Vce(n, r.remaining);
  if ("buf" in s) return r.remaining -= s.buf.length, s;
  if (o !== void 0) {
    let l = "detail" in s ? `: ${s.detail}` : "";
    return t(`[${a} file_upload] read refused (${s.refusal}${l}): ${e}`), {
      error: o(e)
    };
  }
  return {
    error: Le(e, s, r.total)
  };
}
function Le(e, n, r = PQt) {
  let a = E(e);
  switch (n.refusal) {
    case "not_regular":
      return `Cannot upload "${a}": not a regular file.`;
    case "open_failed":
      return `Cannot upload "${a}": failed to open file (${n.detail}).`;
    case "hard_links":
      return `Cannot upload "${a}": the file has multiple hard links, which can alias a file outside the session's allowed directories. This commonly triggers for files inside package-manager stores like node_modules (Bun and pnpm hard-link packages). Copy the file (e.g. with cp) and upload the copy.`;
    case "moved":
      return `Cannot upload "${a}": path moved during validation.`;
    case "too_large":
      return `Cannot upload "${a}": total upload size would exceed ${r >= 1048576 ? `${Math.floor(r * 10 / 1048576) / 10} MB` : r >= 1024 ? `${Math.floor(r / 1024)} KB` : `${r} bytes`}. file_upload sends file contents over the browser bridge in a single message; use a smaller file, or split across multiple file_upload calls if the page accepts files one at a time.`;
    case "grew":
      return `Cannot upload "${a}": file grew during read.`;
    case "read_failed":
      return `Cannot upload "${a}": failed to read file (${n.detail}).`;
  }
}
var He = {
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".csv": "text/csv",
  ".tsv": "text/tab-separated-values",
  ".json": "application/json",
  ".html": "text/html",
  ".htm": "text/html",
  ".xml": "application/xml",
  ".zip": "application/zip",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".webm": "video/webm"
};
function Me(e) {
  return He[_e(e).toLowerCase()] ?? "application/octet-stream";
}
import { win32 as Be } from "path";
function ZDt(e) {
  let n = /^[\\/]{2}/.test(e);
  return (n ? "\\\\" : "") + (n ? e.replace(/^[\\/]{2,}/, "") : e).replace(/[\\/]+/g, "\\");
}
function v(lexical, n, surfaced) {
  return t(`bg-containment: refusing ${n} spelling for containment: ${lexical}`, {
    level: "warn"
  }), surfaced === void 0 ? {
    lexical: lexical,
    canonical: null,
    skipped: !1
  } : {
    lexical: lexical,
    canonical: null,
    skipped: !1,
    surfaced: surfaced
  };
}
function qe(e) {
  if (!NC(e)) return e;
  let n = /^[\\/]{2}\?[\\/]([A-Za-z]:[\\/].*)$/.exec(e);
  if (n) return n[1];
  let r = /^[\\/]{2}\?[\\/]UNC[\\/](.+)$/i.exec(e);
  if (r) return "\\\\" + r[1];
  return null;
}
var we = /[. ](?=[\\/]|$)/;
function Ke(e, n = "win32") {
  if (bl(e)) return v(En(e), "dot-segment");
  let r = En(e);
  if (n === "win32") {
    if (r = r.replace(/^([\\/])[\\/]{2,}/, (f, w) => w + w), NC(r) || R0(r)) return v(r, "device-namespace");
    if (r = z$r(r), we.test(r)) return v(r, "trailing-dot-or-space");
    if (Ks(r)) return {
      lexical: ZDt(r),
      canonical: null,
      skipped: !0
    };
    r = ZDt(r);
  } else {
    if (r = r.replace(/\/{2,}/g, "/"), n === "darwin") r = T0(r);
    if (Cl(r)) return {
      lexical: dqn(r, n),
      canonical: null,
      skipped: !0
    };
  }
  let a = Tj(ie(), r, {
    surfaceDotDotTargets: !0
  });
  if (a === void 0) return {
    lexical: r,
    canonical: r,
    skipped: !1
  };
  let o = n === "win32" ? qe(a) : a;
  if (o === null) return v(r, "resolves-to-device-namespace");
  let s = n === "win32" ? o : n === "darwin" ? T0(o.replace(/^\/{2,}/, "/")) : o.replace(/^\/{2,}/, "/");
  if (Ks(s) || Cl(s) || Bb(s)) return v(r, "resolves-to-network", dqn(En(n === "win32" ? ZDt(s) : s), n));
  if (bl(s)) return v(r, "resolves-to-dot-segment");
  if (n === "win32" && we.test(s)) return v(r, "resolves-to-trailing-dot-or-space");
  let l = n === "win32" ? ZDt(s) : s.replace(/\/{2,}/g, "/");
  return {
    lexical: r,
    canonical: En(l),
    skipped: !1
  };
}
function Ox(e, n = "win32") {
  let a,
    canonical = e;
  try {
    for (let s = 0; s < 8; s++) {
      let l = Ke(canonical, n);
      if (a ??= l, l.skipped) return s === 0 ? l : v(a.lexical, "resolves-to-network");
      if (l.canonical === null) return s === 0 ? l : {
        ...l,
        lexical: a.lexical
      };
      if (l.canonical === canonical) {
        try {
          if (ie().lstatSync(canonical).isSymbolicLink()) return v(a.lexical, "resolution-not-convergent", canonical !== e ? canonical : void 0);
        } catch (error) {
          if (!K(error)) throw error;
          if (n === "win32") try {
            ie().realpathSync(Be.dirname(canonical));
          } catch (error) {
            if (!K(error)) return v(a.lexical, "resolution-not-convergent", canonical !== e ? canonical : void 0);
          }
        }
        return {
          lexical: a.lexical,
          canonical: canonical,
          skipped: !1
        };
      }
      canonical = l.canonical;
    }
  } catch {
    return v(a?.lexical ?? En(e), "resolution-error", canonical !== e ? canonical : void 0);
  }
  return v(a.lexical, "resolution-not-convergent", canonical !== e ? canonical : void 0);
}
function Gce(e, n) {
  if (jW(e)) return !0;
  if (jW(n)) {
    if (e.skipped) return !0;
    if (O(e.lexical, n.lexical) || e.canonical !== null && O(e.canonical, n.lexical)) return !0;
    if (n.surfaced !== void 0 && (O(e.lexical, n.surfaced) || e.canonical !== null && O(e.canonical, n.surfaced))) return !0;
    return !1;
  }
  if (e.skipped && !n.skipped) return t(`bg-containment: denying network-shaped target against a local root: ${e.lexical}`, {
    level: "warn"
  }), !0;
  if (e.skipped || n.skipped) return O(e.lexical, n.lexical);
  return O(e.lexical, n.lexical) || O(e.canonical, n.canonical) || Xe(e.canonical, n.canonical);
}
function O(e, n) {
  return RF(e, n, !0);
}
var Ve = 64;
class be {
  expansionByRootCanonical = new Map();
  expand(e) {
    let n = this.expansionByRootCanonical.get(e);
    if (n === void 0) {
      if (n = ZPo(e), this.expansionByRootCanonical.size >= Ve) this.expansionByRootCanonical.clear();
      this.expansionByRootCanonical.set(e, n);
    }
    return n;
  }
  clear() {
    this.expansionByRootCanonical.clear();
  }
}
var Ge = new W(() => new be());
function Ye() {
  return Ge.of(H().host);
}
function Xe(e, n) {
  if (x() !== "windows") return !1;
  let r = ZPo(e),
    a = Ye().expand(n);
  if (r === e && a === n) return !1;
  return Je(En(ZDt(r)), En(ZDt(a)));
}
function Je(e, n) {
  return RF(e, n, !0);
}
function ypt(e, n) {
  if (jW(e) || jW(n)) return !1;
  if (e.skipped !== n.skipped) return !1;
  if (e.skipped) return ke(e.lexical, n.lexical);
  return ke(e.canonical, n.canonical);
}
function ke(e, n) {
  return RF(e, n, !1);
}
function jW(e) {
  return e.canonical === null && !e.skipped;
}
import { homedir as Qe } from "os";
import { isAbsolute as Ze } from "path";
var en = p(() => C(oe()).min(1));
function _pt(e, n) {
  return (x() === "linux" ? ypt : Gce)({
    lexical: n,
    canonical: n,
    skipped: !1
  }, {
    lexical: e,
    canonical: e,
    skipped: !1
  });
}
function Y(value) {
  if (typeof value !== "string" || !Ze(value)) return {
    code: "not_absolute",
    value: value
  };
  let {
    canonical: n,
    skipped: skipped
  } = Ox(value);
  return n === null ? {
    code: skipped ? "network_path" : "unresolvable_path",
    value: value
  } : {
    at: n
  };
}
function nn(e, value_2, value_3) {
  let a = en().safeParse(et(value_2, !1));
  if (!a.success) return {
    problems: [{
      code: "bad_fence",
      value: value_2
    }]
  };
  let o = Y(e);
  if ("code" in o) return {
    problems: [o]
  };
  let s = Y(value_3);
  if ("code" in s) return {
    problems: [s]
  };
  if (!_pt(o.at, s.at)) return {
    problems: [{
      code: "session_outside_worktree",
      value: value_3
    }]
  };
  let l = Ox(Qe()),
    f = l.canonical ?? l.lexical,
    fence = [],
    problems = [];
  for (let value_4 of a.data) {
    let P = Y(value_4);
    if ("code" in P) problems.push(P);else if (_pt(P.at, f) && !_pt(f, P.at)) problems.push({
      code: "fence_too_wide",
      value: value_4
    });else fence.push(P.at);
  }
  return {
    answer: fence.length > 0 ? {
      tree: o.at,
      fence: fence
    } : void 0,
    problems: problems
  };
}
function X() {
  let e = i.CLAUDE_CODE_HOST_WORKTREE,
    n = i.CLAUDE_CODE_HOST_WORKTREE_FENCE;
  return e === void 0 && n === void 0 ? void 0 : {
    declared: e,
    declaredFence: n
  };
}
function SFi() {
  let e = X();
  if (e === void 0) return;
  let {
      declared: declared,
      declaredFence: declaredFence
    } = e,
    a = ql()?.preEnterOriginalCwd ?? Ee(),
    {
      answer: answer,
      problems: problems_2
    } = nn(declared, declaredFence, a),
    l = `CLAUDE_CODE_HOST_WORKTREE=${declared ?? "(not set)"} CLAUDE_CODE_HOST_WORKTREE_FENCE=${declaredFence ?? "(not set)"}, session folder ${a}: ${answer === void 0 ? "ignored, so they block no file write" : `file tools may not write in ${answer.fence.join(", ")}, except inside ${answer.tree}`}${problems_2.map(item => `; ${item.code}${typeof item.value === "string" ? ` ${JSON.stringify(item.value)}` : ""}`).join("")}`,
    f = um();
  if (f.hostWorktreeReport !== l) if (f.hostWorktreeReport = l, t(l, {
    level: problems_2.length > 0 ? "warn" : "debug"
  }), problems_2.length === 0) g("worktree_host_declared");else if (answer === void 0) m("worktree_host_declared", problems_2[0].code);else c("worktree_host_declared", problems_2[0].code);
  return answer;
}
function VTe(e) {
  if (e.agentWorktree) return e.agentWorktree;
  if (!OQt()) {
    let n = e.session.project?.isolationRoot;
    if (n && !U0e()) return n;
  }
  return ql()?.worktreePath || void 0;
}
function OQt() {
  return i.CLAUDE_CODE_SESSION_KIND === "bg" || tb() !== null;
}
function U0e() {
  return X() !== void 0;
}
export { ZDt, Ox, Gce, ypt, jW, K9, aJe, PQt, xgs, Pgs, fSa, GTe, IDn, YSr, validate as $0e, Ogs, puo, Vce, _pt, SFi, VTe, OQt, U0e };