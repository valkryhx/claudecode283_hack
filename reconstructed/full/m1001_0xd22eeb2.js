// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Tn
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  vFt,
  Ki
} from "B:/~BUN/root/chunk-33tn3weg.js";
import {
  BF
} from "B:/~BUN/root/chunk-6pevpnkj.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  WRr,
  sb,
  VL,
  AEe,
  AV,
  ZA,
  D9,
  See,
  dge,
  Eee,
  h4e,
  FEe,
  RAr,
  ex,
  y4e,
  xOt,
  tx,
  aEo,
  lEo,
  cEo
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Kt
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  bh,
  Gwt,
  _ar,
  nZe,
  bar,
  Sar,
  ato,
  rZe,
  YCn,
  war,
  kar
} from "B:/~BUN/root/chunk-a716ngan.js";
import {
  nto
} from "B:/~BUN/root/chunk-h7prpcgw.js";
import {
  j5
} from "B:/~BUN/root/chunk-gnzce1c4.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";

function pe(e) {
  return {
    sha256: e.sha256,
    gitBlobId: e.gitBlobId,
    mode: e.mode
  }
}

function ae(e, n) {
  return {
    size: Number(e.size),
    mtimeMs: Number(e.mtimeMs),
    mode: Number(e.mode) & 511,
    observedAtMs: n
  }
}
async function re(e, n, a) {
  try {
    let {
      handle: r
    } = await Sar(e, n, a);
    try {
      let i = Date.now();
      return ae(await r.stat(), i)
    } finally {
      await r.close()
    }
  } catch {
    return null
  }
}
async function G(e, n, a, r) {
  await U(e, n);
  let {
    handle: i
  } = await Sar(e, n, a);
  try {
    await i.chmod(r);
    let o = Date.now();
    return ae(await i.stat(), o)
  } finally {
    await i.close()
  }
}
async function ie(e, n, a, r) {
  try {
    return await G(e, n, a, r)
  } catch (i) {
    return t(`dirSync pull: mode not applied (${v(i)??"not an errno"})`), null
  }
}

function fe(e) {
  return e.platform() !== "windows"
}

function V(e, n) {
  return e.backend === "by_name" ? AEe : n
}
async function ee(e, n, a, r) {
  return n.backend === "by_name" ? G(e, n, a, r) : re(e, n, a)
}
async function oe(e, n) {
  try {
    return await e.fs.lstat(n), !0
  } catch (a) {
    return v(a) !== "ENOENT"
  }
}
async function me(e, n, a, r, i) {
  let o = await i(n, a, r);
  if (o !== null) return {
    kind: "present",
    digest: pe(o)
  };
  return await oe(e, e.path.join(n, r)) ? {
    kind: "unreadable"
  } : {
    kind: "absent"
  }
}

function le(e, n, a) {
  try {
    return nZe(e, _ar(e, n, e.path.join(n, a))) === a
  } catch {
    return !1
  }
}

function X(e, n) {
  return AV(e.platform()) && ZA(n)
}
async function ge(e, n) {
  try {
    return h4e(await e.fs.lstat(n)) !== null ? "refused" : "present"
  } catch {
    return "absent"
  }
}

function x(e, n, a = null) {
  if (e === null) return tx(n);
  if (a !== null && tx(e) !== tx(a)) return e & 511;
  let r = tx(n) === 493;
  return e & 438 | (r ? (e & 292) >> 2 : 0)
}
async function Y(e) {
  try {
    return await e(), !0
  } catch (n) {
    let a = v(n);
    if (a === "EEXIST" || a === "WORKING_DEST_SYMLINK") return !1;
    throw n
  }
}
var we = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g;

function jCn(e) {
  let n = Ki(e);
  return n === ".git" || /^git~\d+$/.test(n)
}
var he = ".claude",
  be = new Set([".mcp.json", ".claude.json"]);

function Z7e(e, n) {
  let a = e.map(Ki);
  return a.includes(he) || n === "file" && be.has(a.at(-1) ?? "")
}
var Ee = new Set([...vFt, ...Eee].filter((e) => e.startsWith(".") || e.length > 8).map((e) => e.replace(/^\.+/, "").replace(/[^a-z0-9_~!#$%&'()@^{}-]/g, "").slice(0, 6)).filter((e) => e.length > 0));

function uar(e) {
  let n = se(e);
  return n !== null && Ee.has(n)
}

function se(e) {
  return /^(.{1,6})~\d+$/.exec(Ki(e))?.[1] ?? null
}

function f3t(e, n = !1, a = O()) {
  return eZe(e, "/", "file", n, a)
}

function Jeo(e) {
  return eZe(e, "/", "directory")
}

function eZe(e, n, a, r = !1, i = O()) {
  let o = n === "/" ? e : e.split(n).join("/"),
    l = L([o.replace(we, ""), See(o)]);
  return ye.test(e) || VL(o) || AV(i) && D9(o) || l.some((s) => {
    let d = s.split("/");
    return VL(s) || Z7e(d, a) || !(r && l.length === 1 && s === o && d.slice(0, -1).every((g) => {
      let f = Ki(g);
      return !Eee.has(f) || f === g
    })) && FEe(d.map(Ki).join("/")) || d.some(jCn) || a === "file" && Ki(d.at(-1) ?? "") === "head" || (a === "file" ? d.slice(0, -1) : d).some((g) => se(g) !== null) || a === "file" && d.slice(-1).some(uar)
  })
}
var ye = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/;
async function par(e, n, a, r = !1, i = bh()) {
  return !await Se(e, n, a, r, i) && !yOe(a)
}
async function Se(e, n, a, r = !1, i = bh()) {
  return await m3t(e, n, a, r, i) !== null
}
async function m3t(e, n, a, r, i) {
  if (!le(i, e, a)) return "place";
  if (eZe(a, "/", "file", r, i.platform()) || X(i, a) || dge(a)) return "name";
  return await ce(i, i.path.join(e, a), e, n, r ? a : null) ? "place" : null
}

function yOe(e) {
  return L([e, See(e)]).some((n) => {
    let a = Ki(n.split("/").at(-1) ?? "");
    return ue.has(a) || Le.has(Te(a) ?? "")
  })
}
var _e = ["makefile", "gnumakefile", "justfile", "package.json", "package-lock.json", "npm-shrinkwrap.json", "yarn.lock", "pnpm-lock.yaml", "bun.lock", "bun.lockb", "claude.md", "claude.local.md", "agents.md"],
  ue = new Set([...BF, ..._e]);

function Te(e) {
  let n = /^([^.~]{1,6})~\d+(\.[^.]{1,3})?$/.exec(e);
  return n === null ? null : (n[1] ?? "") + (n[2] ?? "")
}
var Le = new Set([...ue].map((e) => {
  let n = e.replace(/^\.+/, ""),
    a = n.lastIndexOf("."),
    r = (a < 0 ? n : n.slice(0, a)).replace(/[^a-z0-9_!#$%&'()@^{}-]/g, ""),
    i = a < 0 ? "" : "." + n.slice(a + 1, a + 4);
  return r.slice(0, 6) + i
}));
async function ce(e, n, a, r, i = null) {
  let {
    dirname: o,
    join: l,
    relative: s,
    sep: d
  } = e.path, g = s(a, o(n)).split(d).filter(Boolean), f = g.map((h, w) => l(a, ...g.slice(0, w + 1))), T = async (h) => {
    try {
      if ((await e.fs.lstat(h)).isSymbolicLink()) return "link"
    } catch (w) {
      return v(w) === "ENOENT" ? "absent" : "plain"
    }
    return await far(h, e) ? "repository" : "plain"
  }, S = async (h, w) => {
    let [N, ...u] = h;
    if (N === void 0) return {
      refused: !1,
      deepest: w
    };
    let y = await T(N);
    if (y === "absent") return {
      refused: !1,
      deepest: w
    };
    return y === "plain" ? S(u, N) : {
      refused: !0,
      deepest: N
    }
  }, {
    refused: c,
    deepest: E
  } = await S(f, a);
  if (c) return !0;
  try {
    let h = s(r, await e.fs.realpath(E)),
      w = s(a, E),
      N = s(h, w) === "";
    return h !== "" && q(e, h, "directory", i !== null && N ? nZe(e, h) : null)
  } catch {
    return !1
  }
}

function q(e, n, a, r = null) {
  let i = nZe(e, n);
  return Gwt(e, n) || eZe(n, e.path.sep, a, r !== null && i === r, e.platform()) || a === "file" && dge(i)
}
async function far(e, n = bh()) {
  try {
    return !(await n.fs.lstat(n.path.join(e, "HEAD"))).isDirectory()
  } catch (a) {
    let r = v(a);
    return r !== "ENOENT" && r !== "ENOTDIR"
  }
}

function z(e) {
  let n = e === "WORKING_LANDED_OUTSIDE" ? Error("write landed outside the sync tree") : Error("destination resolves outside the sync tree");
  return n.code = e, n
}
async function H(e, n, a, r = null) {
  if (n.backend === "by_name" && q(e, e.path.relative(n.realRoot, await e.fs.realpath(a)), "file", r)) throw z("WORKING_RESOLVES_OUTSIDE")
}
async function J(e, n, a, r, i = null) {
  if (n.backend !== "by_name") {
    if (!(await n.lstat(a.rel).catch((l) => {
        throw B(l) ? z("WORKING_LANDED_OUTSIDE") : l
      })).isFile()) throw z("WORKING_LANDED_OUTSIDE");
    return
  }
  if (!q(e, e.path.relative(n.realRoot, await e.fs.realpath(a.abs)), "file", i)) return;
  if (await ke(n, a.rel, r)) await n.unlink(a.rel).catch(() => {});
  throw z("WORKING_LANDED_OUTSIDE")
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
      return (await r.readFile()).equals(a)
    } finally {
      await r.close()
    }
  } catch {
    return !1
  }
}
var de = 255,
  Ae = de - 32,
  Ne = 96;

function Ie(e, n) {
  return Array.from(e).reduce((a, r) => !a.done && Buffer.byteLength(a.text + r) <= n ? {
    text: a.text + r,
    done: !1
  } : {
    text: a.text,
    done: !0
  }, {
    text: "",
    done: !1
  }).text
}

function Oe(e, n) {
  let a = e.path.basename(n.abs),
    r = `.incoming-${process.hrtime.bigint().toString(36).slice(-8)}`,
    i = Array.from(Ie(a, Ne)),
    l = (Array.from({
      length: i.length + 1
    }, (s, d) => i.slice(0, i.length - d).join("")).find((s) => !X(e, s + r)) ?? "") + r;
  return {
    abs: n.abs.slice(0, -a.length) + l,
    rel: n.rel.slice(0, -e.path.posix.basename(n.rel).length) + l
  }
}
async function Pe({
  host: e,
  anchor: n,
  staging: a,
  root: r,
  dest: i,
  content: o,
  mode: l
}) {
  let s = await kar(n, a, e.path.posix.dirname(i.rel));
  if (s === null) return null;
  let d = war(s, "incoming");
  await U(e, n);
  try {
    await n.create(d, o, V(n, l))
  } catch (g) {
    if (v(g) !== "EEXIST") await rZe(n, d);
    return null
  }
  return {
    abs: e.path.join(r, ...d.split("/")),
    rel: d
  }
}

function De(e, n, a) {
  return {
    agreed: {
      kind: "sha256",
      sha256: e.sha256
    },
    stat: a !== null && tx(a.mode) === e.mode && a.size === e.size ? a : null,
    etag: n,
    origin: "pulled",
    ...e.gen !== void 0 && {
      peerGen: e.gen
    }
  }
}

function Re(e, n, a) {
  return {
    ...RAr(e),
    agreed: {
      kind: "sha256",
      sha256: n.sha256
    },
    stat: null,
    etag: a,
    ...n.gen !== void 0 && {
      peerGen: n.gen
    }
  }
}

function Be(e, n) {
  return {
    agreed: {
      kind: "sha256",
      sha256: e.sha256
    },
    stat: null,
    etag: n,
    origin: "pulled",
    ...e.gen !== void 0 && {
      peerGen: e.gen
    }
  }
}

function Fe(e) {
  switch (e.kind) {
    case "unauthorized":
    case "lane_unavailable":
      return {
        status: "deferred", laneLost: e.kind
      };
    case "aborted":
      return {
        status: "deferred", laneLost: null
      };
    case "failed":
      return {
        status: e.status !== void 0 && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429 ? "failed" : "deferred", laneLost: null
      }
  }
}
async function Qeo({
  entry: e,
  gitRoot: n,
  realRoot: a,
  anchor: r,
  baseEntry: i,
  trackedHere: o = !1,
  deps: l,
  signal: s,
  kept: d,
  staging: g = null
}) {
  let f = l.host ?? bh(),
    T = We(f, l.writeFile ?? ((m, b, k, I, A) => ato(f, I, m, b, k, dge, A, g))),
    S = 0,
    c = (m, b = null, k = {}) => ({
      change: {
        path: e.path,
        status: m,
        copyPath: null
      },
      entry: b,
      bytesWritten: 0,
      bytesFetched: S,
      understated: !1,
      refused: !1,
      laneLost: null,
      credentialRefused: !1,
      nameRefused: !1,
      heldOpen: !1,
      replacedUnkept: !1,
      ...k
    }),
    E = {
      abs: f.path.join(n, e.path),
      rel: e.path
    };
  if (!le(f, n, e.path)) return c("failed");
  if (eZe(e.path, "/", "file", o, f.platform()) || X(f, e.path)) return c("failed");
  let h = o ? e.path : null;
  if (e.size > sb) return c("failed");
  let w = await ge(f, E.abs),
    N = e.path.split("/");
  if (w === "refused" || N.slice(0, -1).some((m) => Buffer.byteLength(m) > de) || w === "absent" && i === void 0 && Buffer.byteLength(N.at(-1) ?? "") > Ae) return c("failed");
  if (await ce(f, E.abs, n, a, h)) return c("failed", null, {
    refused: !0
  });
  if (dge(e.path)) return c("failed", null, {
    credentialRefused: !0
  });
  let u = await (l.fetchContent !== void 0 ? l.fetchContent(e, s) : l.client.getLaneFile(WRr(e.path), s, e.size));
  if (u.kind !== "ok" && u.kind !== "not_found") {
    let {
      status: m,
      laneLost: b
    } = Fe(u);
    return c(m, null, {
      laneLost: b
    })
  }
  if (S = u.kind === "ok" ? u.content.length : 0, u.kind === "not_found" || u.content.length !== e.size || Kt(u.content) !== e.sha256) return c("stale_entry", null, {
    understated: u.kind === "ok" && u.content.length > e.size && !(i !== void 0 && xOt(i.agreed, y4e(u.content)))
  });
  let y = l.digestFile ?? ((m, b, k) => j5(m, b, k, r)),
    P = await me(f, n, a, e.path, y);
  if (P.kind === "unreadable") return c("failed");
  let p = P.kind === "present" ? P.digest : null,
    C = aEo(i, p),
    D = C === "changed" && p !== null && i !== void 0 && l.cleanFilterBlobIds !== void 0 && await nto(i.agreed, e.path, l.cleanFilterBlobIds, s),
    M = D ? "unchanged" : C,
    R = async (m) => (await U(f, r), m), K = (m) => {
      let b = v(m);
      if (t(`dirSync pull: row not applied (${b??"not an errno"})`), b === "WORKING_FILE_HELD") return c("deferred", null, {
        heldOpen: !0
      });
      return c("failed", null, {
        refused: Ce.has(b ?? ""),
        nameRefused: b === "WORKING_NAME_NOT_PLAIN"
      })
    };
  if (i !== void 0 && (p === null || p.sha256 !== e.sha256) && xOt(i.agreed, {
      sha256: e.sha256,
      gitBlobId: ex(u.content)
    })) {
    let m = D && p !== null && tx(p.mode) === e.mode;
    return R(c("already_equal", m ? {
      ...RAr(i),
      etag: u.etag,
      ...e.gen !== void 0 && {
        peerGen: e.gen
      }
    } : Re(i, e, u.etag))).catch(K)
  }
  let j = lEo({
      localChange: M,
      localSha256: p?.sha256 ?? null,
      localMode: p?.mode ?? null,
      incomingSha256: e.sha256,
      incomingMode: fe(f) || p === null ? e.mode : p.mode
    }),
    W = yOe(e.path),
    _ = j === "apply" && W ? "conflict" : j;
  if (_ === "conflict" && !W && l.bothChanged === "skip") return c("skipped_local_change");
  let F = p?.mode ?? null;
  try {
    let m = (I) => i?.sent?.includes(e.sha256) === !0 ? {
        ...I,
        origin: "pushed"
      } : I,
      b = (I) => m(De(e, u.etag, I));
    switch (_) {
      case "already_equal":
        return await R(c("already_equal", b(await re(f, r, E.rel))));
      case "apply": {
        let I = {
            host: f,
            anchor: r,
            entry: e,
            gitRoot: n,
            realRoot: a,
            dest: E,
            trackedRel: h,
            localDigest: p,
            agreedMode: i?.stat?.mode ?? null,
            content: u.content,
            writeFile: T,
            digestFile: y,
            kept: d,
            staging: g
          },
          A = await te(I).catch((Z) => {
            if (g === null || v(Z) !== "EXDEV") throw Z;
            return te({
              ...I,
              staging: null
            })
          });
        if (A.kind !== "raced") return await R(c("applied", b(A.stat), {
          bytesWritten: A.kind === "written" ? u.content.length : 0,
          replacedUnkept: A.kind === "written" && A.replacedUnkept,
          ...A.kind === "written" && A.keptAt !== null && {
            change: {
              path: e.path,
              status: "applied",
              copyPath: null,
              keptAt: A.keptAt,
              ...i !== void 0 && p !== null && xOt(i.agreed, p) && He(i) && {
                keptEarlierCloudVersion: !0
              }
            }
          }
        }));
        if (l.bothChanged === "skip") return c("skipped_local_change");
        F = A.observedMode;
        break
      }
      case "conflict":
        break
    }
    let k = await xe({
      host: f,
      anchor: r,
      entry: e,
      gitRoot: n,
      realRoot: a,
      trackedHere: o,
      content: u.content,
      shadowedMode: F,
      deps: l,
      writeFile: T,
      digestFile: y
    });
    return k === null ? c("failed") : await R(c("conflict", m(Be(e, u.etag)), {
      change: {
        path: e.path,
        status: "conflict",
        copyPath: k.copyPath
      },
      bytesWritten: k.written ? u.content.length : 0
    }))
  } catch (m) {
    return K(m)
  }
}
var Ce = new Set(["WORKING_ANCHOR_UNAVAILABLE", "WORKING_DEST_REFUSED", "WORKING_LANDED_OUTSIDE", "WORKING_NAME_NOT_PLAIN", "WORKING_PARENT_ESCAPE", "WORKING_PARENT_NOT_DIRECTORY", "WORKING_RESOLVES_OUTSIDE"]);
async function te({
  host: e,
  anchor: n,
  entry: a,
  gitRoot: r,
  realRoot: i,
  dest: o,
  trackedRel: l,
  localDigest: s,
  agreedMode: d,
  content: g,
  writeFile: f,
  digestFile: T,
  kept: S,
  staging: c
}) {
  if (s === null) {
    let y = x(null, a.mode);
    if (!await Y(() => f(r, o.abs, g, n, V(n, y)))) {
      let p = await T(r, i, a.path);
      if (p === null) return await ne(e, o.abs), {
        kind: "raced",
        observedMode: null
      };
      if (p.sha256 !== a.sha256) return {
        kind: "raced",
        observedMode: p.mode
      };
      return await H(e, n, o.abs, l), {
        kind: "mode_only",
        stat: await G(e, n, o.rel, x(p.mode, a.mode, d))
      }
    }
    return await J(e, n, o, g, l), {
      kind: "written",
      stat: await ee(e, n, o.rel, y),
      keptAt: null,
      replacedUnkept: !1
    }
  }
  if (s.sha256 === a.sha256) return await H(e, n, o.abs, l), {
    kind: "mode_only",
    stat: await G(e, n, o.rel, x(s.mode, a.mode, d))
  };
  let E = s.mode & 511,
    h = await Pe({
      host: e,
      anchor: n,
      staging: c,
      root: r,
      dest: o,
      content: g,
      mode: E
    }),
    w = h ?? Oe(e, o);
  if (!(h !== null || await Y(() => f(r, w.abs, g, n, V(n, E))))) {
    let y = Error("staging name taken");
    throw y.code = "EEXIST", y
  }
  let u = () => rZe(n, w.rel);
  try {
    await J(e, n, w, g, l === null ? null : w.rel);
    let y = await ee(e, n, w.rel, E).catch(() => null);
    if (y === null) {
      if (!(await n.lstat(w.rel)).isFile()) return await u(), {
        kind: "raced",
        observedMode: s.mode
      };
      throw Error("staged file could not be read back")
    }
    let P = await S.shouldKeep(a.path, s),
      p = await T(r, i, a.path),
      C = P && p !== null && p.sha256 === s.sha256,
      D = C ? await S.keep(a.path, p.content, p.mode) : null,
      M = !1,
      R = async (K, j, W) => {
        let _ = j && !C ? p : await T(r, i, a.path);
        if (_ !== null && _.sha256 === a.sha256) return await u(), await H(e, n, o.abs, l), {
          kind: "mode_only",
          stat: await G(e, n, o.rel, x(_.mode, a.mode, d))
        };
        if (_ === null) return await u(), await ne(e, o.abs), {
          kind: "raced",
          observedMode: null
        };
        if (_.sha256 !== s.sha256) return await u(), {
          kind: "raced",
          observedMode: _.mode
        };
        let F = _.mode === W.mode ? W.stat : await ie(e, n, w.rel, _.mode & 511);
        if (F === null) throw Error("staged file did not take the mode it replaces");
        await H(e, n, o.abs, l), await U(e, n);
        try {
          await n.rename(w.rel, o.rel)
        } catch (m) {
          let [b, ...k] = K;
          if (b === void 0 || v(m) !== "WORKING_FILE_HELD") throw m;
          return t(`dirSync pull: the rename replacing ${Tn(a.path)} met another program's hold; trying again in ${b} ms`), await Q(b), R(k, !1, {
            mode: _.mode,
            stat: F
          })
        }
        return M = !0, await J(e, n, o, g, l), {
          kind: "written",
          stat: F,
          keptAt: D,
          replacedUnkept: P && D === null
        }
      };
    try {
      return await R(YCn, !0, {
        mode: s.mode,
        stat: y
      })
    } finally {
      if (!M && D !== null) await S.discard(D).catch(() => {})
    }
  } catch (y) {
    throw await u(), y
  }
}
async function U(e, n) {
  let a = (o) => {
      if (B(o) || v(o) === "ENOTDIR") return null;
      throw o
    },
    [r, i] = await Promise.all([e.fs.lstat(n.realRoot, {
      bigint: !0
    }).catch(a), n.lstat("").catch(a)]);
  if (r === null || i === null || !r.isDirectory() || r.dev !== i.dev || r.ino !== i.ino) {
    let o = Error("sync root is gone");
    throw o.code = "WORKING_ROOT_GONE", o
  }
}

function We(e, n) {
  return async (a, r, i, o, l) => (await U(e, o), n(a, r, i, o, l))
}
async function ne(e, n) {
  if (await oe(e, n)) {
    let a = Error("local file unreadable");
    throw a.code = "WORKING_LOCAL_UNREADABLE", a
  }
}
async function xe({
  host: e,
  anchor: n,
  entry: a,
  gitRoot: r,
  realRoot: i,
  trackedHere: o = !1,
  content: l,
  shadowedMode: s,
  deps: d,
  writeFile: g,
  digestFile: f
}) {
  let T = x(s, a.mode),
    S = !1,
    c = await cEo({
      path: a.path,
      now: d.now(),
      tryCandidate: async (h) => (S = await Y(() => g(r, e.path.join(r, h), l, n, V(n, T))), S || (await f(r, i, h))?.sha256 === a.sha256)
    });
  if (c === null) return null;
  let E = {
    abs: e.path.join(r, c),
    rel: c
  };
  if (S) await J(e, n, E, l, o ? E.rel : null);
  else await H(e, n, E.abs, o ? E.rel : null);
  if (!S || n.backend === "by_name") await ie(e, n, E.rel, T);
  return {
    copyPath: c,
    written: S
  }
}

function He(e) {
  return e.origin === "pulled" && e.gen === void 0 && (e.sent === void 0 || e.sent.length === 0)
}
export {
  jCn,
  Z7e,
  uar,
  f3t,
  Jeo,
  eZe,
  par,
  m3t,
  yOe,
  far,
  Qeo
};
