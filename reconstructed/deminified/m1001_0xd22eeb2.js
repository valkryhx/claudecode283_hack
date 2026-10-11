// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { vFt, Ki } from "B:/~BUN/root/chunk-33tn3weg.js";
import { BF } from "B:/~BUN/root/chunk-6pevpnkj.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { WRr, sb, VL, AEe, AV, ZA, D9, See, dge, Eee, h4e, FEe, RAr, ex, y4e, xOt, tx, aEo, lEo, cEo } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { bh, Gwt, _ar, nZe, bar, Sar, ato, rZe, YCn, war, kar } from "B:/~BUN/root/chunk-a716ngan.js";
import { nto } from "B:/~BUN/root/chunk-h7prpcgw.js";
import { j5 } from "B:/~BUN/root/chunk-gnzce1c4.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function pe(e) {
  return {
    sha256: e.sha256,
    gitBlobId: e.gitBlobId,
    mode: e.mode
  };
}
function ae(e, observedAtMs) {
  return {
    size: Number(e.size),
    mtimeMs: Number(e.mtimeMs),
    mode: Number(e.mode) & 511,
    observedAtMs: observedAtMs
  };
}
async function re(e, n, a) {
  try {
    let {
      handle: handle
    } = await Sar(e, n, a);
    try {
      let i = Date.now();
      return ae(await handle.stat(), i);
    } finally {
      await handle.close();
    }
  } catch {
    return null;
  }
}
async function G(e, n, a, r) {
  await U(e, n);
  let {
    handle: handle_2
  } = await Sar(e, n, a);
  try {
    await handle_2.chmod(r);
    let o = Date.now();
    return ae(await handle_2.stat(), o);
  } finally {
    await handle_2.close();
  }
}
async function ie(e, n, a, r) {
  try {
    return await G(e, n, a, r);
  } catch (error) {
    return t(`dirSync pull: mode not applied (${v(error) ?? "not an errno"})`), null;
  }
}
function fe(e) {
  return e.platform() !== "windows";
}
function V(e, n) {
  return e.backend === "by_name" ? AEe : n;
}
async function ee(e, n, a, r) {
  return n.backend === "by_name" ? G(e, n, a, r) : re(e, n, a);
}
async function oe(e, n) {
  try {
    return await e.fs.lstat(n), !0;
  } catch (error) {
    return v(error) !== "ENOENT";
  }
}
async function me(e, n, a, r, i) {
  let o = await i(n, a, r);
  if (o !== null) return {
    kind: "present",
    digest: pe(o)
  };
  return (await oe(e, e.path.join(n, r))) ? {
    kind: "unreadable"
  } : {
    kind: "absent"
  };
}
function le(e, n, a) {
  try {
    return nZe(e, _ar(e, n, e.path.join(n, a))) === a;
  } catch {
    return !1;
  }
}
function X(e, n) {
  return AV(e.platform()) && ZA(n);
}
async function ge(e, n) {
  try {
    return h4e(await e.fs.lstat(n)) !== null ? "refused" : "present";
  } catch {
    return "absent";
  }
}
function x(e, n, a = null) {
  if (e === null) return tx(n);
  if (a !== null && tx(e) !== tx(a)) return e & 511;
  let r = tx(n) === 493;
  return e & 438 | (r ? (e & 292) >> 2 : 0);
}
async function Y(e) {
  try {
    return await e(), !0;
  } catch (error) {
    let a = v(error);
    if (a === "EEXIST" || a === "WORKING_DEST_SYMLINK") return !1;
    throw error;
  }
}
var we = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g;
function jCn(e) {
  let n = Ki(e);
  return n === ".git" || /^git~\d+$/.test(n);
}
var he = ".claude",
  be = new Set([".mcp.json", ".claude.json"]);
function Z7e(e, n) {
  let a = e.map(Ki);
  return a.includes(he) || n === "file" && be.has(a.at(-1) ?? "");
}
var Ee = new Set([...vFt, ...Eee].filter(item => item.startsWith(".") || item.length > 8).map(item => item.replace(/^\.+/, "").replace(/[^a-z0-9_~!#$%&'()@^{}-]/g, "").slice(0, 6)).filter(item => item.length > 0));
function uar(e) {
  let n = se(e);
  return n !== null && Ee.has(n);
}
function se(e) {
  return /^(.{1,6})~\d+$/.exec(Ki(e))?.[1] ?? null;
}
function f3t(e, n = !1, a = O()) {
  return eZe(e, "/", "file", n, a);
}
function Jeo(e) {
  return eZe(e, "/", "directory");
}
function eZe(e, n, a, r = !1, i = O()) {
  let o = n === "/" ? e : e.split(n).join("/"),
    l = L([o.replace(we, ""), See(o)]);
  return ye.test(e) || VL(o) || AV(i) && D9(o) || l.some(item => {
    let d = item.split("/");
    return VL(item) || Z7e(d, a) || !(r && l.length === 1 && item === o && d.slice(0, -1).every(item => {
      let f = Ki(item);
      return !Eee.has(f) || f === item;
    })) && FEe(d.map(Ki).join("/")) || d.some(jCn) || a === "file" && Ki(d.at(-1) ?? "") === "head" || (a === "file" ? d.slice(0, -1) : d).some(item => se(item) !== null) || a === "file" && d.slice(-1).some(uar);
  });
}
var ye = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/;
async function par(e, n, a, r = !1, i = bh()) {
  return !(await Se(e, n, a, r, i)) && !yOe(a);
}
async function Se(e, n, a, r = !1, i = bh()) {
  return (await m3t(e, n, a, r, i)) !== null;
}
async function m3t(e, n, a, r, i) {
  if (!le(i, e, a)) return "place";
  if (eZe(a, "/", "file", r, i.platform()) || X(i, a) || dge(a)) return "name";
  return (await ce(i, i.path.join(e, a), e, n, r ? a : null)) ? "place" : null;
}
function yOe(e) {
  return L([e, See(e)]).some(item => {
    let a = Ki(item.split("/").at(-1) ?? "");
    return ue.has(a) || Le.has(Te(a) ?? "");
  });
}
var _e = ["makefile", "gnumakefile", "justfile", "package.json", "package-lock.json", "npm-shrinkwrap.json", "yarn.lock", "pnpm-lock.yaml", "bun.lock", "bun.lockb", "claude.md", "claude.local.md", "agents.md"],
  ue = new Set([...BF, ..._e]);
function Te(e) {
  let n = /^([^.~]{1,6})~\d+(\.[^.]{1,3})?$/.exec(e);
  return n === null ? null : (n[1] ?? "") + (n[2] ?? "");
}
var Le = new Set([...ue].map(item => {
  let n = item.replace(/^\.+/, ""),
    a = n.lastIndexOf("."),
    r = (a < 0 ? n : n.slice(0, a)).replace(/[^a-z0-9_!#$%&'()@^{}-]/g, ""),
    i = a < 0 ? "" : "." + n.slice(a + 1, a + 4);
  return r.slice(0, 6) + i;
}));
async function ce(e, n, a, r, i = null) {
  let {
      dirname: dirname,
      join: join,
      relative: relative,
      sep: sep
    } = e.path,
    g = relative(a, dirname(n)).split(sep).filter(Boolean),
    f = g.map((item, index) => join(a, ...g.slice(0, index + 1))),
    T = async h => {
      try {
        if ((await e.fs.lstat(h)).isSymbolicLink()) return "link";
      } catch (error) {
        return v(error) === "ENOENT" ? "absent" : "plain";
      }
      return (await far(h, e)) ? "repository" : "plain";
    },
    S = async (h, deepest) => {
      let [deepest_2, ...u] = h;
      if (deepest_2 === void 0) return {
        refused: !1,
        deepest: deepest
      };
      let y = await T(deepest_2);
      if (y === "absent") return {
        refused: !1,
        deepest: deepest
      };
      return y === "plain" ? S(u, deepest_2) : {
        refused: !0,
        deepest: deepest_2
      };
    },
    {
      refused: refused,
      deepest: deepest_3
    } = await S(f, a);
  if (refused) return !0;
  try {
    let h = relative(r, await e.fs.realpath(deepest_3)),
      w = relative(a, deepest_3),
      N = relative(h, w) === "";
    return h !== "" && q(e, h, "directory", i !== null && N ? nZe(e, h) : null);
  } catch {
    return !1;
  }
}
function q(e, n, a, r = null) {
  let i = nZe(e, n);
  return Gwt(e, n) || eZe(n, e.path.sep, a, r !== null && i === r, e.platform()) || a === "file" && dge(i);
}
async function far(e, n = bh()) {
  try {
    return !(await n.fs.lstat(n.path.join(e, "HEAD"))).isDirectory();
  } catch (error) {
    let r = v(error);
    return r !== "ENOENT" && r !== "ENOTDIR";
  }
}
function z(e) {
  let n = e === "WORKING_LANDED_OUTSIDE" ? Error("write landed outside the sync tree") : Error("destination resolves outside the sync tree");
  return n.code = e, n;
}
async function H(e, n, a, r = null) {
  if (n.backend === "by_name" && q(e, e.path.relative(n.realRoot, await e.fs.realpath(a)), "file", r)) throw z("WORKING_RESOLVES_OUTSIDE");
}
async function J(e, n, a, r, i = null) {
  if (n.backend !== "by_name") {
    if (!(await n.lstat(a.rel).catch(l => {
      throw B(l) ? z("WORKING_LANDED_OUTSIDE") : l;
    })).isFile()) throw z("WORKING_LANDED_OUTSIDE");
    return;
  }
  if (!q(e, e.path.relative(n.realRoot, await e.fs.realpath(a.abs)), "file", i)) return;
  if (await ke(n, a.rel, r)) await n.unlink(a.rel).catch(() => {});
  throw z("WORKING_LANDED_OUTSIDE");
}
async function ke(e, n, a) {
  try {
    if (!(await e.lstat(n)).isFile()) return !1;
    let r = await e.open(n, bar);
    try {
      let i = await r.stat({
        bigint: !0
      });
      if (!i.isFile() || i.size !== BigInt(a.length)) return !1;
      return (await r.readFile()).equals(a);
    } finally {
      await r.close();
    }
  } catch {
    return !1;
  }
}
var de = 255,
  Ae = de - 32,
  Ne = 96;
function Ie(e, n) {
  return Array.from(e).reduce((acc, item) => !acc.done && Buffer.byteLength(acc.text + item) <= n ? {
    text: acc.text + item,
    done: !1
  } : {
    text: acc.text,
    done: !0
  }, {
    text: "",
    done: !1
  }).text;
}
function Oe(e, n) {
  let a = e.path.basename(n.abs),
    r = `.incoming-${process.hrtime.bigint().toString(36).slice(-8)}`,
    i = Array.from(Ie(a, Ne)),
    l = (Array.from({
      length: i.length + 1
    }, (s, d) => i.slice(0, i.length - d).join("")).find(item => !X(e, item + r)) ?? "") + r;
  return {
    abs: n.abs.slice(0, -a.length) + l,
    rel: n.rel.slice(0, -e.path.posix.basename(n.rel).length) + l
  };
}
async function Pe({
  host: host,
  anchor: anchor,
  staging: staging,
  root: root,
  dest: dest,
  content: content,
  mode: mode
}) {
  let s = await kar(anchor, staging, host.path.posix.dirname(dest.rel));
  if (s === null) return null;
  let rel = war(s, "incoming");
  await U(host, anchor);
  try {
    await anchor.create(rel, content, V(anchor, mode));
  } catch (error) {
    if (v(error) !== "EEXIST") await rZe(anchor, rel);
    return null;
  }
  return {
    abs: host.path.join(root, ...rel.split("/")),
    rel: rel
  };
}
function De(e, etag, a) {
  return {
    agreed: {
      kind: "sha256",
      sha256: e.sha256
    },
    stat: a !== null && tx(a.mode) === e.mode && a.size === e.size ? a : null,
    etag: etag,
    origin: "pulled",
    ...(e.gen !== void 0 && {
      peerGen: e.gen
    })
  };
}
function Re(e, n, etag_2) {
  return {
    ...RAr(e),
    agreed: {
      kind: "sha256",
      sha256: n.sha256
    },
    stat: null,
    etag: etag_2,
    ...(n.gen !== void 0 && {
      peerGen: n.gen
    })
  };
}
function Be(e, etag_3) {
  return {
    agreed: {
      kind: "sha256",
      sha256: e.sha256
    },
    stat: null,
    etag: etag_3,
    origin: "pulled",
    ...(e.gen !== void 0 && {
      peerGen: e.gen
    })
  };
}
function Fe(e) {
  switch (e.kind) {
    case "unauthorized":
    case "lane_unavailable":
      return {
        status: "deferred",
        laneLost: e.kind
      };
    case "aborted":
      return {
        status: "deferred",
        laneLost: null
      };
    case "failed":
      return {
        status: e.status !== void 0 && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429 ? "failed" : "deferred",
        laneLost: null
      };
  }
}
async function Qeo({
  entry: entry,
  gitRoot: gitRoot,
  realRoot: realRoot,
  anchor: anchor_2,
  baseEntry: baseEntry,
  trackedHere = !1,
  deps: deps,
  signal: signal,
  kept: kept,
  staging: staging_2 = null
}) {
  let host_2 = deps.host ?? bh(),
    writeFile = We(host_2, deps.writeFile ?? ((m, b, k, I, A) => ato(host_2, I, m, b, k, dge, A, staging_2))),
    bytesFetched = 0,
    c = (status, entry_2 = null, k = {}) => ({
      change: {
        path: entry.path,
        status: status,
        copyPath: null
      },
      entry: entry_2,
      bytesWritten: 0,
      bytesFetched: bytesFetched,
      understated: !1,
      refused: !1,
      laneLost: null,
      credentialRefused: !1,
      nameRefused: !1,
      heldOpen: !1,
      replacedUnkept: !1,
      ...k
    }),
    dest_2 = {
      abs: host_2.path.join(gitRoot, entry.path),
      rel: entry.path
    };
  if (!le(host_2, gitRoot, entry.path)) return c("failed");
  if (eZe(entry.path, "/", "file", trackedHere, host_2.platform()) || X(host_2, entry.path)) return c("failed");
  let trackedRel = trackedHere ? entry.path : null;
  if (entry.size > sb) return c("failed");
  let w = await ge(host_2, dest_2.abs),
    N = entry.path.split("/");
  if (w === "refused" || N.slice(0, -1).some(item => Buffer.byteLength(item) > de) || w === "absent" && baseEntry === void 0 && Buffer.byteLength(N.at(-1) ?? "") > Ae) return c("failed");
  if (await ce(host_2, dest_2.abs, gitRoot, realRoot, trackedRel)) return c("failed", null, {
    refused: !0
  });
  if (dge(entry.path)) return c("failed", null, {
    credentialRefused: !0
  });
  let u = await (deps.fetchContent !== void 0 ? deps.fetchContent(entry, signal) : deps.client.getLaneFile(WRr(entry.path), signal, entry.size));
  if (u.kind !== "ok" && u.kind !== "not_found") {
    let {
      status: status_2,
      laneLost: laneLost
    } = Fe(u);
    return c(status_2, null, {
      laneLost: laneLost
    });
  }
  if (bytesFetched = u.kind === "ok" ? u.content.length : 0, u.kind === "not_found" || u.content.length !== entry.size || Kt(u.content) !== entry.sha256) return c("stale_entry", null, {
    understated: u.kind === "ok" && u.content.length > entry.size && !(baseEntry !== void 0 && xOt(baseEntry.agreed, y4e(u.content)))
  });
  let digestFile = deps.digestFile ?? ((m, b, k) => j5(m, b, k, anchor_2)),
    P = await me(host_2, gitRoot, realRoot, entry.path, digestFile);
  if (P.kind === "unreadable") return c("failed");
  let localDigest = P.kind === "present" ? P.digest : null,
    C = aEo(baseEntry, localDigest),
    D = C === "changed" && localDigest !== null && baseEntry !== void 0 && deps.cleanFilterBlobIds !== void 0 && (await nto(baseEntry.agreed, entry.path, deps.cleanFilterBlobIds, signal)),
    localChange = D ? "unchanged" : C,
    R = async m => (await U(host_2, anchor_2), m),
    K = m => {
      let b = v(m);
      if (t(`dirSync pull: row not applied (${b ?? "not an errno"})`), b === "WORKING_FILE_HELD") return c("deferred", null, {
        heldOpen: !0
      });
      return c("failed", null, {
        refused: Ce.has(b ?? ""),
        nameRefused: b === "WORKING_NAME_NOT_PLAIN"
      });
    };
  if (baseEntry !== void 0 && (localDigest === null || localDigest.sha256 !== entry.sha256) && xOt(baseEntry.agreed, {
    sha256: entry.sha256,
    gitBlobId: ex(u.content)
  })) {
    let m = D && localDigest !== null && tx(localDigest.mode) === entry.mode;
    return R(c("already_equal", m ? {
      ...RAr(baseEntry),
      etag: u.etag,
      ...(entry.gen !== void 0 && {
        peerGen: entry.gen
      })
    } : Re(baseEntry, entry, u.etag))).catch(K);
  }
  let j = lEo({
      localChange: localChange,
      localSha256: localDigest?.sha256 ?? null,
      localMode: localDigest?.mode ?? null,
      incomingSha256: entry.sha256,
      incomingMode: fe(host_2) || localDigest === null ? entry.mode : localDigest.mode
    }),
    W = yOe(entry.path),
    _ = j === "apply" && W ? "conflict" : j;
  if (_ === "conflict" && !W && deps.bothChanged === "skip") return c("skipped_local_change");
  let shadowedMode = localDigest?.mode ?? null;
  try {
    let m = I => baseEntry?.sent?.includes(entry.sha256) === !0 ? {
        ...I,
        origin: "pushed"
      } : I,
      b = I => m(De(entry, u.etag, I));
    switch (_) {
      case "already_equal":
        return await R(c("already_equal", b(await re(host_2, anchor_2, dest_2.rel))));
      case "apply":
        {
          let I = {
              host: host_2,
              anchor: anchor_2,
              entry: entry,
              gitRoot: gitRoot,
              realRoot: realRoot,
              dest: dest_2,
              trackedRel: trackedRel,
              localDigest: localDigest,
              agreedMode: baseEntry?.stat?.mode ?? null,
              content: u.content,
              writeFile: writeFile,
              digestFile: digestFile,
              kept: kept,
              staging: staging_2
            },
            A = await te(I).catch(Z => {
              if (staging_2 === null || v(Z) !== "EXDEV") throw Z;
              return te({
                ...I,
                staging: null
              });
            });
          if (A.kind !== "raced") return await R(c("applied", b(A.stat), {
            bytesWritten: A.kind === "written" ? u.content.length : 0,
            replacedUnkept: A.kind === "written" && A.replacedUnkept,
            ...(A.kind === "written" && A.keptAt !== null && {
              change: {
                path: entry.path,
                status: "applied",
                copyPath: null,
                keptAt: A.keptAt,
                ...(baseEntry !== void 0 && localDigest !== null && xOt(baseEntry.agreed, localDigest) && He(baseEntry) && {
                  keptEarlierCloudVersion: !0
                })
              }
            })
          }));
          if (deps.bothChanged === "skip") return c("skipped_local_change");
          shadowedMode = A.observedMode;
          break;
        }
      case "conflict":
        break;
    }
    let k = await xe({
      host: host_2,
      anchor: anchor_2,
      entry: entry,
      gitRoot: gitRoot,
      realRoot: realRoot,
      trackedHere: trackedHere,
      content: u.content,
      shadowedMode: shadowedMode,
      deps: deps,
      writeFile: writeFile,
      digestFile: digestFile
    });
    return k === null ? c("failed") : await R(c("conflict", m(Be(entry, u.etag)), {
      change: {
        path: entry.path,
        status: "conflict",
        copyPath: k.copyPath
      },
      bytesWritten: k.written ? u.content.length : 0
    }));
  } catch (error) {
    return K(error);
  }
}
var Ce = new Set(["WORKING_ANCHOR_UNAVAILABLE", "WORKING_DEST_REFUSED", "WORKING_LANDED_OUTSIDE", "WORKING_NAME_NOT_PLAIN", "WORKING_PARENT_ESCAPE", "WORKING_PARENT_NOT_DIRECTORY", "WORKING_RESOLVES_OUTSIDE"]);
async function te({
  host: host_3,
  anchor: anchor_3,
  entry: entry_3,
  gitRoot: r,
  realRoot: realRoot_2,
  dest: dest_3,
  trackedRel: trackedRel_2,
  localDigest: localDigest_2,
  agreedMode: agreedMode,
  content: content_2,
  writeFile: writeFile_2,
  digestFile: digestFile_2,
  kept: kept_2,
  staging: staging_3
}) {
  if (localDigest_2 === null) {
    let y = x(null, entry_3.mode);
    if (!(await Y(() => writeFile_2(r, dest_3.abs, content_2, anchor_3, V(anchor_3, y))))) {
      let p = await digestFile_2(r, realRoot_2, entry_3.path);
      if (p === null) return await ne(host_3, dest_3.abs), {
        kind: "raced",
        observedMode: null
      };
      if (p.sha256 !== entry_3.sha256) return {
        kind: "raced",
        observedMode: p.mode
      };
      return await H(host_3, anchor_3, dest_3.abs, trackedRel_2), {
        kind: "mode_only",
        stat: await G(host_3, anchor_3, dest_3.rel, x(p.mode, entry_3.mode, agreedMode))
      };
    }
    return await J(host_3, anchor_3, dest_3, content_2, trackedRel_2), {
      kind: "written",
      stat: await ee(host_3, anchor_3, dest_3.rel, y),
      keptAt: null,
      replacedUnkept: !1
    };
  }
  if (localDigest_2.sha256 === entry_3.sha256) return await H(host_3, anchor_3, dest_3.abs, trackedRel_2), {
    kind: "mode_only",
    stat: await G(host_3, anchor_3, dest_3.rel, x(localDigest_2.mode, entry_3.mode, agreedMode))
  };
  let mode_2 = localDigest_2.mode & 511,
    h = await Pe({
      host: host_3,
      anchor: anchor_3,
      staging: staging_3,
      root: r,
      dest: dest_3,
      content: content_2,
      mode: mode_2
    }),
    w = h ?? Oe(host_3, dest_3);
  if (!(h !== null || (await Y(() => writeFile_2(r, w.abs, content_2, anchor_3, V(anchor_3, mode_2)))))) {
    let y = Error("staging name taken");
    throw y.code = "EEXIST", y;
  }
  let u = () => rZe(anchor_3, w.rel);
  try {
    await J(host_3, anchor_3, w, content_2, trackedRel_2 === null ? null : w.rel);
    let stat_2 = await ee(host_3, anchor_3, w.rel, mode_2).catch(() => null);
    if (stat_2 === null) {
      if (!(await anchor_3.lstat(w.rel)).isFile()) return await u(), {
        kind: "raced",
        observedMode: localDigest_2.mode
      };
      throw Error("staged file could not be read back");
    }
    let P = await kept_2.shouldKeep(entry_3.path, localDigest_2),
      p = await digestFile_2(r, realRoot_2, entry_3.path),
      C = P && p !== null && p.sha256 === localDigest_2.sha256,
      keptAt = C ? await kept_2.keep(entry_3.path, p.content, p.mode) : null,
      M = !1,
      R = async (K, j, W) => {
        let _ = j && !C ? p : await digestFile_2(r, realRoot_2, entry_3.path);
        if (_ !== null && _.sha256 === entry_3.sha256) return await u(), await H(host_3, anchor_3, dest_3.abs, trackedRel_2), {
          kind: "mode_only",
          stat: await G(host_3, anchor_3, dest_3.rel, x(_.mode, entry_3.mode, agreedMode))
        };
        if (_ === null) return await u(), await ne(host_3, dest_3.abs), {
          kind: "raced",
          observedMode: null
        };
        if (_.sha256 !== localDigest_2.sha256) return await u(), {
          kind: "raced",
          observedMode: _.mode
        };
        let stat = _.mode === W.mode ? W.stat : await ie(host_3, anchor_3, w.rel, _.mode & 511);
        if (stat === null) throw Error("staged file did not take the mode it replaces");
        await H(host_3, anchor_3, dest_3.abs, trackedRel_2), await U(host_3, anchor_3);
        try {
          await anchor_3.rename(w.rel, dest_3.rel);
        } catch (error) {
          let [b, ...k] = K;
          if (b === void 0 || v(error) !== "WORKING_FILE_HELD") throw error;
          return t(`dirSync pull: the rename replacing ${Tn(entry_3.path)} met another program's hold; trying again in ${b} ms`), await Q(b), R(k, !1, {
            mode: _.mode,
            stat: stat
          });
        }
        return M = !0, await J(host_3, anchor_3, dest_3, content_2, trackedRel_2), {
          kind: "written",
          stat: stat,
          keptAt: keptAt,
          replacedUnkept: P && keptAt === null
        };
      };
    try {
      return await R(YCn, !0, {
        mode: localDigest_2.mode,
        stat: stat_2
      });
    } finally {
      if (!M && keptAt !== null) await kept_2.discard(keptAt).catch(() => {});
    }
  } catch (error) {
    throw await u(), error;
  }
}
async function U(e, n) {
  let a = o => {
      if (B(o) || v(o) === "ENOTDIR") return null;
      throw o;
    },
    [r, i] = await Promise.all([e.fs.lstat(n.realRoot, {
      bigint: !0
    }).catch(a), n.lstat("").catch(a)]);
  if (r === null || i === null || !r.isDirectory() || r.dev !== i.dev || r.ino !== i.ino) {
    let o = Error("sync root is gone");
    throw o.code = "WORKING_ROOT_GONE", o;
  }
}
function We(e, n) {
  return async (a, r, i, o, l) => (await U(e, o), n(a, r, i, o, l));
}
async function ne(e, n) {
  if (await oe(e, n)) {
    let a = Error("local file unreadable");
    throw a.code = "WORKING_LOCAL_UNREADABLE", a;
  }
}
async function xe({
  host: host_4,
  anchor: anchor_4,
  entry: entry_4,
  gitRoot: gitRoot_2,
  realRoot: realRoot_3,
  trackedHere: trackedHere_2 = !1,
  content: content_3,
  shadowedMode: shadowedMode_2,
  deps: deps_2,
  writeFile: writeFile_3,
  digestFile: digestFile_3
}) {
  let T = x(shadowedMode_2, entry_4.mode),
    written = !1,
    c = await cEo({
      path: entry_4.path,
      now: deps_2.now(),
      tryCandidate: async h => (written = await Y(() => writeFile_3(gitRoot_2, host_4.path.join(gitRoot_2, h), content_3, anchor_4, V(anchor_4, T))), written || (await digestFile_3(gitRoot_2, realRoot_3, h))?.sha256 === entry_4.sha256)
    });
  if (c === null) return null;
  let E = {
    abs: host_4.path.join(gitRoot_2, c),
    rel: c
  };
  if (written) await J(host_4, anchor_4, E, content_3, trackedHere_2 ? E.rel : null);else await H(host_4, anchor_4, E.abs, trackedHere_2 ? E.rel : null);
  if (!written || anchor_4.backend === "by_name") await ie(host_4, anchor_4, E.rel, T);
  return {
    copyPath: c,
    written: written
  };
}
function He(e) {
  return e.origin === "pulled" && e.gen === void 0 && (e.sent === void 0 || e.sent.length === 0);
}
export { jCn, Z7e, uar, f3t, Jeo, eZe, par, m3t, yOe, far, Qeo };