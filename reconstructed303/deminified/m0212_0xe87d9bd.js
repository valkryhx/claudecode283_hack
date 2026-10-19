// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vi } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { gu, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { aI, Bfn, lF, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Zs, Z7e } from "B:/~BUN/root/chunk-wegca9zh.js";
import { kn, ks } from "B:/~BUN/root/chunk-yw21pggd.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { pp, jOr, Pd, DX, umt, XNt, PH, XAo, JAo } from "B:/~BUN/root/chunk-0p1hpv0s.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
var le = String.raw`'([^']*)'(?:(=)(?:'([^']*)')?)?`,
  regExp = new RegExp(String.raw`^(?:${le}(?:[ \t\r\n]+${le})*)?[ \t\r\n]*$`);
function wvr(e = process.env) {
  let n = [],
    GIT_CONFIG_COUNT = e.GIT_CONFIG_COUNT;
  if (GIT_CONFIG_COUNT !== void 0) {
    if (!/^\d{1,3}$/.test(GIT_CONFIG_COUNT)) return {};
    for (let l = 0; l < Number(GIT_CONFIG_COUNT); l++) {
      let c = e[`GIT_CONFIG_KEY_${l}`],
        u = e[`GIT_CONFIG_VALUE_${l}`];
      if (c === void 0 || u === void 0) return {};
      n.push([c, u]);
    }
  }
  let GIT_CONFIG_PARAMETERS = e.GIT_CONFIG_PARAMETERS;
  if (GIT_CONFIG_PARAMETERS !== void 0 && regExp.test(GIT_CONFIG_PARAMETERS)) for (let [, l = "", c, u = ""] of GIT_CONFIG_PARAMETERS.matchAll(new RegExp(le, "g"))) {
    let w = c === void 0 ? l.indexOf("=") : -1;
    n.push(c !== void 0 || w === -1 ? [l, u] : [l.slice(0, w), l.slice(w + 1)]);
  }
  let o = {},
    s = 0;
  for (let [l, c] of n) if (l.toLowerCase() === "safe.directory") o[`GIT_CONFIG_KEY_${s}`] = "safe.directory", o[`GIT_CONFIG_VALUE_${s}`] = c, s++;
  if (s === 0) return {};
  return o.GIT_CONFIG_COUNT = String(s), o;
}
import { constants as K } from "fs";
import { lstat as Me, open as he, realpath as ne, stat as Pt } from "fs/promises";
import { basename as be, dirname as M, isAbsolute as Rt, join as F, normalize as re, parse as me, relative as xe, resolve as We, sep as Fe } from "path";
import { lstat as L, readdir as Oe, readlink as Ne, realpath as ue, stat as ce } from "fs/promises";
import { dirname as vt, isAbsolute as de, join as N, normalize as Q, relative as Et, resolve as ee, sep as Z } from "path";
var Re = 65536,
  $t = 4096,
  Tt = (e, n) => ct(Ot(), e, n);
async function Pdt(e, {
  dotGitLink = "refuse",
  run = Tt
} = {}) {
  let r = (skipped, why) => (t(`Could not vet the worktree registrations of ${e}: ${why}`, {
      level: "warn"
    }), {
      skipped: skipped,
      why: why
    }),
    o = I() === "windows",
    s = async p => {
      let E = await Ne(p).then(() => "link", v => k(v) === "EINVAL" ? "clear" : G(v) ? "missing" : "unknown");
      if (E !== "missing") return E;
      return (await JAo(p)) ? "missing" : "unknown";
    },
    l = N(e, ".git"),
    c = await PH(l, e),
    gitDir,
    w;
  if (c === "clear") {
    let [p, E] = await Promise.all([L(l).catch(() => null), ce(e).then(v => v, v => G(v) ? null : void 0)]);
    if (E === null) return r("gone", "the repository root is gone");
    if (E === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (p === null) return r("unvettable", ".git vanished");
    if (!p.isDirectory()) return r("pointer", ".git is not a real directory (a pointer file)");
    gitDir = l, w = [p.uid, E.uid];
  } else if (c === "missing") {
    let [p, E, v] = await Promise.all([L(N(e, "HEAD")).catch(() => null), L(N(e, "objects")).catch(() => null), ce(e).then(y => y, y => G(y) ? null : void 0)]);
    if (v === null) return r("gone", "the repository root is gone");
    if (v === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (p === null || !p.isFile() || E === null || !E.isDirectory()) return r("not-a-repository", "no .git, and the root is not a bare git directory");
    gitDir = e, w = [v.uid];
  } else if (c === "link" && dotGitLink === "vet") {
    let p = await ge(l, e);
    if ("refused" in p) return r("unvettable", `.git is a link whose text ${p.refused}`);
    let E = p.text,
      v = Pd(ee(e, E)),
      y = Pd(Q(e));
    if ((await PH(v, v.startsWith(y + Z) ? y : void 0)) !== "clear") return r("unvettable", ".git is a link whose target is missing, goes through another link, or cannot be probed");
    let [S, D, z, U] = await Promise.all([L(v).catch(() => null), L(N(v, "HEAD")).catch(() => null), L(N(v, "objects")).catch(() => null), ce(e).then(B => B, B => G(B) ? null : void 0)]);
    if (U === null) return r("gone", "the repository root is gone");
    if (U === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (S === null || !S.isDirectory() || D === null || !D.isFile() || z === null || !z.isDirectory()) return r("unvettable", ".git is a link to something other than a git directory");
    gitDir = v, w = [S.uid, U.uid];
  } else return r("unvettable", ".git is a link, a mount point, or cannot be probed");
  if ((await s(N(gitDir, "commondir"))) !== "missing") return r("unvettable", `${gitDir}/commondir exists, which git never writes into a main git dir`);
  let g = o || !w.every(St) ? await It(e, gitDir, run) : null;
  if (g !== null) return r("unvettable", g);
  let h = N(gitDir, "worktrees"),
    b = await PH(h, e),
    vetted = new Map(),
    refused = new Map();
  if (b === "missing") return {
    gitDir: gitDir,
    vetted: vetted,
    refused: refused
  };
  let f = b === "clear" ? await Oe(h, {
    encoding: "buffer"
  }).catch(() => null) : null;
  if (f === null) return r("unvettable", `${h} is a link or cannot be read`);
  for (let p of f) {
    let E = Ge(p);
    if (E === null) {
      let A = N(h, `<${p.toString("hex")}>`),
        S = "has a name this check and git would read differently";
      refused.set(A, "has a name this check and git would read differently"), t(`Refused worktree admin entry ${A}: has a name this check and git would read differently`, {
        level: "warn"
      });
      continue;
    }
    let v = N(h, E),
      y = await _t(v, e, s, o);
    if (y === "missing") continue;
    if (y === null) continue;
    if (typeof y === "object") vetted.set(v, y.worktree);else refused.set(v, y), t(`Refused worktree admin entry ${v}: ${y}`, {
      level: "warn"
    });
  }
  return {
    gitDir: gitDir,
    vetted: vetted,
    refused: refused
  };
}
async function te(e) {
  for (let n of ["objects", "config", "packed-refs", "hooks", "worktrees"]) if ((await e(n).catch(() => "unchecked")) !== null) return !0;
  return !1;
}
async function _t(e, n, i, r) {
  let o = await PH(e, n);
  if (o === "missing") return "missing";
  if (o !== "clear") return "is a link, a mount point, or cannot be probed";
  let s = await L(e).then(m => m, m => G(m) ? null : void 0);
  if (s === void 0) return "cannot be probed";
  if (s === null) return "missing";
  if (s.isSymbolicLink()) return "became a link";
  if (!s.isDirectory()) return r ? "is not a directory" : null;
  let l = await At(e, i, r ? 1 / 0 : 1);
  if (l !== null) return l;
  if (await te(m => L(N(e, m)).catch(f => {
    if (G(f)) return null;
    throw f;
  }))) return "holds a git directory's own files (objects, config, packed-refs, hooks or worktrees), or could not be checked for them";
  let c = N(e, "gitdir"),
    u = await L(c).then(m => m, m => G(m) ? null : void 0);
  if (u === void 0) return "gitdir cannot be probed";
  if (u === null) return (await i(c)) === "missing" ? {
    worktree: null
  } : "gitdir is absent to lstat but not to the probe (a shortcut beside it, or a race)";
  if (!u.isFile()) return "gitdir is not a regular file";
  if (u.size > Re) return "gitdir is larger than any git writes";
  let w = await aI(c, Re, {
    noFollow: !0
  }).catch(() => null);
  if (w === null) return "gitdir cannot be read";
  let g = w.replace(/[\r\n]+$/, "");
  if (g === "") return {
    worktree: null
  };
  let h = fe(g, n, r);
  if (h !== null) return h;
  let b, T;
  if (de(g)) {
    let m = Q(g),
      f = Pd(Q(n));
    b = [m];
    let p = (y, A) => r && A === 0 ? y.toLowerCase() : y,
      E = m.split(Z),
      v = f.split(Z);
    T = E.length > v.length && v.every((item, index) => p(item, index) === p(E[index] ?? "", index)) ? E.slice(0, v.length).join(Z) : void 0;
  } else {
    let m = await ue(n).catch(() => null);
    if (m === null) return "the repository root does not resolve";
    T = m;
    let f = Pd(Q(n)),
      p = e.startsWith(f + Z) ? N(m, Et(n, e)) : e;
    b = [ee(p, g), ee(m, g)];
  }
  for (let m of b) {
    if (Vi(m, T ?? n)) return "gitdir names another host";
    let f = await PH(vt(m), T);
    if (f === "link" || f === "unknown") return "gitdir walks through a link, or a component cannot be probed";
    if (f === "clear") {
      let p = await i(m);
      if (p === "link" || p === "unknown") return "gitdir names a link, or one that cannot be probed";
    }
  }
  return {
    worktree: b[0] ?? null
  };
}
async function It(cwd, n, i) {
  let r = {};
  for (let u of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let w = process.env[u];
    if (w !== void 0) r[u] = w;
  }
  let o = await i([...kn, "-C", cwd, "rev-parse", "--git-dir"], {
    cwd: cwd,
    env: ks({
      ...r,
      ...wvr()
    }),
    timeout: 1e4
  }).catch(u => (t(`Could not run git to check the ownership of ${n}: ${d(u)}`, {
    level: "error"
  }), null));
  if (o === null) return `git could not be run to check the ownership of ${n}`;
  if (o.code !== 0) return `git's ownership check for ${n} failed (exit ${o.code}); if another user owns it, it needs a safe.directory entry`;
  let s = o.stdout.trim();
  if (s === "") return `git gave no answer when checking the ownership of ${n}`;
  let [l, c] = await Promise.all([ue(ee(cwd, s)).catch(() => null), ue(n).catch(() => null)]);
  return l !== null && c !== null && Pd(l) === Pd(c) ? null : `git's ownership check did not name ${n}`;
}
function St(e) {
  let n = process.geteuid?.();
  if (n === void 0 || e === n) return !0;
  if (n !== 0) return !1;
  let SUDO_UID = a.SUDO_UID;
  return e === 0 || SUDO_UID !== void 0 && e === SUDO_UID;
}
function fe(e, n, i) {
  if (e.includes("\uFFFD") || /\p{Cc}/u.test(e) || /^[A-Za-z]:(?![\\/])/.test(e)) return "gitdir holds bytes git would read differently";
  let r = i ? /[\\/]+/ : /\/+/;
  if (i && e.split(r).some(item => item !== "." && item !== ".." && /[. ]$/.test(item))) return "gitdir holds a component ending in a dot or space";
  if (!de(e)) {
    let o = e.split(r),
      s = o.findIndex(item => item !== "..");
    return (s < 0 ? [] : o.slice(s)).some(item => item === "" || item === "." || item === "..") ? "gitdir is a relative value git would not write" : null;
  }
  if (e.split(r).some(item => item === "." || item === "..")) return "gitdir holds a dot segment git would not write";
  if (!XNt(e)) return "gitdir is rooted without a drive or a host";
  if (Vi(e, n)) return "gitdir names another host";
  return r.test(e.slice(-1)) ? "gitdir ends in a separator git would not write" : null;
}
async function ge(e, n) {
  let text = await Ne(e, {
    encoding: "buffer"
  }).then(s => {
    let l = s.toString("utf-8");
    return l.includes("\x00") || !Buffer.from(l, "utf-8").equals(s) ? null : l;
  }, () => null);
  if (text === null) return {
    refused: "cannot be read"
  };
  if (/[\p{Cc}\uFFFD]/u.test(text)) return {
    refused: "holds a control character or U+FFFD"
  };
  if (Vi(text, n)) return {
    refused: "names another host"
  };
  let r = I() === "windows",
    o = r ? /[\\/]+/ : /\/+/;
  if (text === "" || o.test(text.slice(-1)) || text.split(o).some(item => item === "." || item === "..") || de(text) && !XNt(text) || r && /^[A-Za-z]:(?![\\/])/.test(text)) return {
    refused: "is empty, ends in a separator, holds a dot segment, or is rooted or drive-relative in a way git would read differently"
  };
  return {
    text: text
  };
}
function Ge(e) {
  let n = e.toString("utf8");
  return !n.includes("\uFFFD") && !/\p{Cc}/u.test(n) && !(I() === "windows" && /[. ]$/.test(n)) && Buffer.from(n, "utf8").equals(e) ? n : null;
}
async function At(e, n, i) {
  let r = I() === "windows",
    o = $t,
    s = async (l, c) => {
      let u = await Oe(l, {
        encoding: "buffer"
      }).catch(() => null);
      if (u === null) return `${l} cannot be read`;
      for (let w of u) {
        if (--o < 0) return "holds more files than any entry git writes";
        let g = Ge(w);
        if (g === null) return `${l} holds a name that is not valid UTF-8`;
        if (r && g.toLowerCase().endsWith(".lnk")) return `${N(l, g)} is named as a shortcut, which git never writes here`;
        let h = N(l, g),
          b = await L(h).catch(() => null);
        if (b === null) return `${h} cannot be probed`;
        let T = r && b.isDirectory() ? await PH(h, l) : await n(h);
        if (T === "link" || T === "unknown") return `${h} is a link or cannot be probed`;
        if (b.isDirectory() && c > 1) {
          let m = await s(h, c - 1);
          if (m !== null) return m;
        }
      }
      return null;
    };
  return s(e, i);
}
var je = 65536,
  Ue = 65536,
  pe = He({
    afterMatch: null,
    beforeMutation: null
  }, e => {
    e.afterMatch = null, e.beforeMutation = null;
  });
async function M7t(e) {
  let n = await Pdt(e, {
    dotGitLink: "vet"
  });
  if ("skipped" in n) return null;
  let i = await Q$e(e, n.gitDir);
  if ("refused" in i) return t(`Could not vet the worktree registrations of ${e}: ${i.refused}`, {
    level: "warn"
  }), null;
  return i.gitDir;
}
async function Q$e(e, n) {
  let i = q(e),
    gitDir_2 = q(n);
  if (gitDir_2 === i) return (await Me(F(i, ".git")).then(() => !0, l => !G(l))) ? {
    refused: `the repository's .git is a link to its own root, ${i}, which cannot be used as a git directory safely`
  } : Ce(i, "");
  if (gitDir_2 === q(F(e, ".git"))) return Ce(i, ".git");
  let o = await Nt(gitDir_2, i);
  return o === "elsewhere" ? {
    gitDir: gitDir_2
  } : {
    refused: o === "inside" ? `the repository's .git is a link to ${gitDir_2}, inside its own working tree, which cannot be opened safely` : `the repository's .git is a link to ${gitDir_2}, which could not be checked against the working tree`
  };
}
async function Ce(e, n) {
  let i = await ne(e).catch(() => null);
  return i === null ? {
    refused: `${e} could not be resolved`
  } : {
    gitDir: F(i, n)
  };
}
function q(e) {
  let n = re(e);
  return me(n).root === n ? n : Pd(n);
}
async function Nt(e, n) {
  if (ve(DX(e), DX(n))) return "inside";
  let i = await Pt(n, {
    bigint: !0
  }).catch(() => null);
  if (i === null) return "unknown";
  for (let r = e;; r = M(r)) {
    let o = await Me(r, {
      bigint: !0
    }).catch(() => null);
    if (o === null) return "unknown";
    if (o.dev === i.dev && o.ino === i.ino) return "inside";
    if (M(r) === r) return "elsewhere";
  }
}
async function Ke(e) {
  let root = q(e),
    i = await ne(root).catch(() => null);
  return {
    root: root,
    tops: [root, i].filter(item => item !== null)
  };
}
async function Gt(e, n) {
  let gitdirs = new Set(),
    unresolved = [],
    {
      root: root_2,
      tops: tops
    } = await Ke(n);
  for (let l of e) {
    let c = Pd(re(l));
    if (gitdirs.add(F(c, ".git")), Vi(c, root_2)) continue;
    let u = M(c),
      w = await xt(u, Ve(u, tops));
    if ("refused" in w) {
      unresolved.push(`${c}: ${w.refused}`);
      continue;
    }
    gitdirs.add(F(w.resolved, be(c), ".git"));
  }
  return {
    gitdirs: gitdirs,
    unresolved: unresolved,
    tops: tops
  };
}
var Le = 16;
async function xt(e, n) {
  let resolved = e,
    r = n;
  for (let o = 0; o <= Le; o++) {
    let s = resolved === r ? {
      verdict: "clear",
      at: void 0
    } : await XAo(resolved, r);
    if (s.verdict === "clear" || s.verdict === "missing") {
      if (r === void 0) return {
        resolved: resolved
      };
      let u = await ne(r).catch(() => null);
      return u === null ? {
        refused: `${r} could not be resolved`
      } : {
        resolved: F(u, xe(r, resolved))
      };
    }
    if (s.verdict !== "link" || s.at === void 0) return {
      refused: `a component of ${resolved} cannot be probed`
    };
    let l = await ge(s.at, M(s.at));
    if ("refused" in l) return {
      refused: `the text of the link ${s.at} ${l.refused}`
    };
    let c = We(M(s.at), l.text);
    if (resolved = F(c, xe(s.at, resolved)), r !== void 0 && !ve(c, r)) r = void 0;
  }
  return {
    refused: `more than ${Le} links lead to ${e}`
  };
}
function ve(e, n) {
  return e === n || e.startsWith(n.endsWith(Fe) ? n : n + Fe);
}
function Ye(e, n) {
  let i = e.replace(/[\r\n]+$/, "");
  if (i === "" || fe(i, n, I() === "windows") !== null || Vi(i, n)) return null;
  let r = re(Rt(i) ? i : We(n, i));
  return be(r) === ".git" && XNt(r) ? r : null;
}
function Ve(e, n) {
  let i;
  for (let r of n) for (let o = r;; o = M(o)) {
    if (ve(e, o)) {
      if (i === void 0 || o.length > i.length) i = o;
      break;
    }
    if (M(o) === o) break;
  }
  return i;
}
async function ze(e, n, i) {
  let r = i?.tops ?? (await Ke(n.repoSpelled)).tops;
  return (await PH(e, Ve(M(e), r))) === "missing";
}
function Xe(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\\/\p{Cc}\uFFFD]/u.test(e);
}
function Ze(e) {
  let n = new Set();
  for (let i of e) {
    let r = be(Pd(re(i)));
    for (let o of [Ft(r), r]) {
      if (o === "") continue;
      n.add(o);
      for (let s = 1; s <= 99; s++) n.add(`${o}${s}`);
    }
  }
  return [...n];
}
function Ft(e) {
  let n = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i],
      o = r.charCodeAt(0);
    if (r === "." && (i === 0 || e[i - 1] === ".")) n += i === 0 ? "-" : "";else if (r === "{" && e[i - 1] === "@") n += "-";else if (o < 32 || o === 127 || " :?[\\^~*".includes(r)) n += "-";else n += r;
  }
  while (n.endsWith(".lock")) n = n.slice(0, -5);
  return n;
}
async function Ct() {
  let [e, n] = await Promise.all([import("B:/~BUN/root/chunk-6bcyern3.js"), import("B:/~BUN/root/chunk-41pbkjnp.js")]);
  return {
    ...e,
    host: n.createDeviceTreeHost()
  };
}
async function qe(e, n) {
  let modules = await Ct().catch(c => ({
    failed: d(c)
  }));
  if ("failed" in modules) return {
    unavailable: `its module did not load: ${modules.failed}`,
    modules: null
  };
  let r = await ne(q(n)).catch(() => null),
    o = r !== null && me(r).root !== r && e === F(r, ".git"),
    s = o ? r : e,
    l = await (o || me(e).root === e ? modules.openTreeAnchor(modules.host, {
      gitRoot: s,
      realRoot: s
    }) : modules.openTreeAnchorAtName(modules.host, e)).catch(c => ({
      unavailable: d(c)
    }));
  if ("unavailable" in l) return {
    unavailable: l.unavailable,
    modules: modules
  };
  if (!o) return l;
  try {
    let c = await l.anchorBeneath(".git"),
      u = await c.lstat("").catch(() => null);
    if (u === null || u.ino === 0n) return await c.close().catch(() => {}), {
      refused: u === null ? `${e}: its file id could not be read once it was opened` : `${e} is on a volume that reports no file ids`
    };
    return c;
  } catch (error) {
    return {
      refused: `could not open ${e} from ${s} without following a link: ${d(error)}`
    };
  } finally {
    await l.close().catch(() => {});
  }
}
async function Je(e, n, i) {
  let r = await e.open(n, K.O_RDONLY | K.O_NONBLOCK).catch(o => k(o) ?? "EIO");
  if (typeof r === "string") {
    if (r !== "ENOENT") return {
      unread: ye(r)
    };
    let o = await e.lstat(n).then(() => "present", s => k(s) ?? "EIO");
    return o === "ENOENT" ? "absent" : {
      unread: o === "present" ? "could not be opened where the held folder has it" : ye(o)
    };
  }
  try {
    let o = await r.stat({
      bigint: !0
    });
    if (e.backend === "darwin_at") {
      let l = await e.lstat(n);
      if (o.dev !== l.dev || o.ino !== l.ino) return {
        unread: "was replaced as it was opened"
      };
    }
    if (!o.isFile()) return {
      unread: "is not a regular file"
    };
    let text_2 = await ke(r, i);
    return text_2 === null ? {
      unread: "is larger than git writes"
    } : {
      text: text_2
    };
  } catch {
    return {
      unread: "could not be read"
    };
  } finally {
    await r.close().catch(() => {});
  }
}
async function ke(e, n) {
  let i = Buffer.alloc(n + 1),
    r = 0;
  for (;;) {
    let {
      bytesRead: bytesRead
    } = await e.read(i, r, i.length - r, r);
    if (bytesRead === 0) break;
    if (r += bytesRead, r > n) return null;
  }
  return i.subarray(0, r).toString("utf-8");
}
function Ee(e) {
  return typeof e.worktreePath === "string" ? [e.worktreePath] : e.worktreePath;
}
async function $e(e) {
  return "worktreePath" in e ? Gt(Ee(e), e.repoSpelled) : null;
}
function C(e, n) {
  e.unchecked++, e.kinds.add(n);
}
function ye(e) {
  return e === "ELOOP" ? "is a link" : e === "EISDIR" ? "is not a regular file" : "could not be opened";
}
function Qe(e) {
  return e.replace(/[\r\n]+$/, "") === "";
}
function Te(e, n, i) {
  let r = F(e, "worktrees"),
    {
      unchecked: unchecked,
      kinds: kinds
    } = i,
    l = [...(n === null || n.unresolved.length === 0 ? [] : [`a folder on the way to the worktree could not be resolved safely (${n.unresolved.join("; ")}), so a registration recorded under its resolved path could not be matched`]), ...(i.guessed ? [`${r} cannot be listed here without following links, so only the names git would have given this worktree were checked, and a registration under another name may remain`] : []), ...(unchecked === 0 ? [] : [i.guessed ? `some of the names tried in ${r} could not be checked (${[...kinds].join(", ")}), so one of them may still register this worktree` : `${unchecked === 1 ? "one entry" : `${unchecked} entries`} in ${r} could not be checked (${[...kinds].join(", ")}), so ${unchecked === 1 ? "it" : "one of them"} may still register this worktree`])];
  return l.length === 0 ? {
    outcome: "none"
  } : {
    unmatched: l.join("; ")
  };
}
function et(e, n) {
  return n === null || umt(De(e), [...n.gitdirs].map(De));
}
function De(e) {
  return I() === "windows" ? e.replace(/^[a-z](?=:)/, n => n.toUpperCase()) : e;
}
async function tt(e, n, i, r) {
  let o = {
      guessed: !1,
      unchecked: 0,
      kinds: new Set()
    },
    s = "entryId" in i ? [i.entryId] : await e.list("worktrees").catch(l => {
      if (G(l)) return [];
      if (k(l) === "WORKING_LIST_UNSUPPORTED") return o.guessed = !0, Ze(Ee(i));
      throw l;
    });
  for (let entryId of s) {
    if (!Xe(entryId)) {
      if (!o.guessed) C(o, "an entry name this check cannot read exactly");
      continue;
    }
    let rel = `worktrees/${entryId}`,
      u = await e.lstat(rel).catch(b => G(b) ? null : void 0);
    if (u === void 0) {
      C(o, "an entry that could not be inspected");
      continue;
    }
    if (u === null || !u.isDirectory()) {
      if (u?.isSymbolicLink()) C(o, "an entry that is a link");else if (u !== null && I() === "windows") C(o, "an entry that is not a folder");
      continue;
    }
    let w = await Je(e, `${rel}/gitdir`, je);
    if (w === "absent") continue;
    if ("unread" in w) {
      C(o, `a gitdir file that ${w.unread}`);
      continue;
    }
    let recordedGitdir = Ye(w.text, F(n, "worktrees", entryId));
    if (recordedGitdir === null && !Qe(w.text)) C(o, "a gitdir file whose path could not be checked safely");
    if (recordedGitdir === null || !et(recordedGitdir, r)) continue;
    let locked = await e.lstat(`${rel}/locked`).then(() => !0, b => !G(b));
    return {
      entryId: entryId,
      locked: locked,
      recordedGitdir: recordedGitdir,
      rel: rel,
      identity: {
        dev: u.dev,
        ino: u.ino
      }
    };
  }
  return o;
}
async function _e(e, n) {
  return Lt(e, n).catch(i => ({
    unavailable: d(i)
  }));
}
async function Lt(e, n) {
  let i = await qe(e, n.repoSpelled);
  if ("refused" in i) return {
    unavailable: i.refused
  };
  if ("unavailable" in i) return {
    unavailable: i.unavailable
  };
  try {
    let r = await $e(n),
      o = await tt(i, e, n, r);
    if ("unchecked" in o) {
      let s = Te(e, r, o);
      return "unmatched" in s ? {
        unavailable: s.unmatched
      } : null;
    }
    return {
      entryId: o.entryId,
      locked: o.locked,
      recordedGitdir: o.recordedGitdir
    };
  } finally {
    await i.close().catch(() => {});
  }
}
async function FZ(e, n, i) {
  return Dt(e, n, i).catch(r => P(e, d(r)));
}
async function Dt(e, n, i) {
  let r = await qe(e, n.repoSpelled);
  if ("refused" in r) return P(e, r.refused);
  if ("unavailable" in r) {
    let {
      modules: modules_2
    } = r;
    return r.unavailable === "no_ffi" && modules_2 !== null && modules_2.host.platform() === "macos" ? Vt(e, n, i, await modules_2.darwinNoFollowAnyEnforced(modules_2.host)) : P(e, `this build cannot open files here without following links (${r.unavailable})`);
  }
  try {
    let o = await $e(n),
      s = await tt(r, e, n, o);
    if ("unchecked" in s) {
      let u = Te(e, o, s);
      return "unmatched" in u ? P(e, u.unmatched) : u;
    }
    if (!(await ze(s.recordedGitdir, n, o))) return P(e, `could not confirm the worktree is gone: ${s.recordedGitdir} exists, or a link or unreadable folder is on the way to it`);
    await pe.afterMatch?.(s.entryId);
    let l = async () => {
      let u = await r.lstat(s.rel).catch(() => null);
      return u !== null && ie(u, s.identity);
    };
    if (!(await l())) return P(e, `worktrees/${s.entryId} changed since it was read, or this volume cannot show it is the same folder`);
    if (await Be(r, s.rel)) return P(e, `${nt(s.entryId)}, so nothing in it was removed`);
    if (s.locked) {
      if (!(await Yt(r, s.rel, i.locked))) return P(e, `worktrees/${s.entryId} is locked`);
    }
    if (await pe.beforeMutation?.(s.entryId), await r.unlink(`${s.rel}/gitdir`), !(await l())) return {
      outcome: "dropped",
      entryId: s.entryId,
      adminRemoved: !1
    };
    if (await Be(r, s.rel)) return t(`Dropped the registration worktrees/${s.entryId} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, {
      level: "warn"
    }), {
      outcome: "dropped",
      entryId: s.entryId,
      adminRemoved: !1
    };
    let adminRemoved = await Wt(r, s.rel, s.identity);
    return await r.rmdir("worktrees").catch(() => {}), {
      outcome: "dropped",
      entryId: s.entryId,
      adminRemoved: adminRemoved
    };
  } catch (error) {
    return P(e, d(error));
  } finally {
    await r.close().catch(() => {});
  }
}
async function Q6e(repoSpelled, worktreePath, i = {
  locked: "keep"
}) {
  let r = await M7t(repoSpelled);
  return r === null ? P(repoSpelled, 'the repository could not be vetted (see the "Could not vet the worktree registrations" line above)') : FZ(r, {
    worktreePath: worktreePath,
    repoSpelled: repoSpelled
  }, i);
}
function P(e, reason) {
  return t(`Left a git worktree registration in ${e} in place: ${reason}`, {
    level: "warn"
  }), {
    outcome: "kept",
    reason: reason
  };
}
var Bt = ["logs/HEAD", "HEAD", "ORIG_HEAD", "FETCH_HEAD", "AUTO_MERGE", "MERGE_HEAD", "MERGE_MSG", "MERGE_RR", "MERGE_AUTOSTASH", "MERGE_MODE", "SQUASH_MSG", "COMMIT_EDITMSG", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "BISECT_LOG", "BISECT_START", "BISECT_TERMS", "BISECT_NAMES", "BISECT_EXPECTED_REV", "BISECT_ANCESTORS_OK", "BISECT_RUN", "BISECT_FIRST_PARENT", "BISECT_HEAD", "index", "index.lock", "commondir", "locked", "config.worktree", "info/sparse-checkout", "CLAUDE_BASE"],
  Mt = ["refs/bisect", "refs/worktree", "refs/rewritten", "refs", "logs", "info"];
function Be(e, n) {
  return te(i => e.lstat(`${n}/${i}`).catch(r => {
    if (G(r)) return null;
    throw r;
  }));
}
function nt(e) {
  return `worktrees/${e} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them`;
}
async function Wt(e, n, i) {
  return await Ie(e, n, i), e.rmdir(n).then(() => !0, r => (t(`Dropped the registration ${n} but left its folder: ${d(r)}`, {
    level: "warn"
  }), !1));
}
function ie(e, n) {
  return e.isDirectory() && e.dev !== 0n && !gu(e.ino) && e.dev === n.dev && e.ino === n.ino;
}
async function Ie(e, n, i) {
  for (let r of Bt) await e.unlink(`${n}/${r}`).catch(() => {});
  await Kt(e, n, i);
  for (let r of Mt) await e.rmdir(`${n}/${r}`).catch(() => {});
}
var Ht = /^(?:tables\.list(?:\.lock)?|0x[0-9a-f]{12,16}-0x[0-9a-f]{12,16}-[0-9a-f]{8}\.(?:(?:ref|log)(?:\.lock)?|temp\.[A-Za-z0-9]{6}))$/,
  jt = 1024,
  Ut = "refs/heads",
  we = "reftable";
async function Kt(e, n, i) {
  let r = await Promise.resolve().then(() => e.anchorBeneath(n)).catch(() => null);
  if (r === null) return;
  try {
    let o = await r.lstat("").catch(() => null);
    if (o === null || !ie(o, i)) return;
    let s = await r.anchorBeneath(we).catch(() => null);
    if (s === null) return;
    try {
      let [l, c] = await Promise.all([s.lstat("").catch(() => null), e.lstat(we).catch(() => null)]);
      if (l === null || c === null || !l.isDirectory() || !c.isDirectory() || l.dev === c.dev && l.ino === c.ino) return;
      let u = await s.list("", jt).catch(w => k(w) === "WORKING_LIST_UNSUPPORTED" ? s.list("").catch(() => null) : null);
      if (u === null) return;
      for (let w of u) if (Ht.test(w)) await s.unlink(w).catch(() => {});
    } finally {
      await s.close().catch(() => {});
    }
    await r.unlink(Ut).catch(() => {}), await r.rmdir(we).catch(() => {});
  } finally {
    await r.close().catch(() => {});
  }
}
async function Yt(e, n, i) {
  if (i === "drop") return !0;
  if (i === "keep") return !1;
  let r = await Je(e, `${n}/locked`, Ue);
  if (r === "absent" || "unread" in r || !i.unlockIf(r.text.replace(/[\r\n]+$/, ""))) return !1;
  return await e.unlink(`${n}/locked`), !0;
}
async function Vt(e, n, i, r) {
  if (!r) return P(e, "this macOS version does not enforce O_NOFOLLOW_ANY, so links cannot be refused");
  let o = await $e(n),
    s = "entryId" in n ? [n.entryId] : Ze(Ee(n)),
    l = {
      guessed: !("entryId" in n),
      unchecked: 0,
      kinds: new Set()
    },
    c = K.O_NONBLOCK | Z7e | Zs;
  for (let entryId_2 of s) {
    if (!Xe(entryId_2)) {
      if (!l.guessed) C(l, "an entry name this check cannot read exactly");
      continue;
    }
    let g = F(e, "worktrees", entryId_2),
      h = await he(F(g, "gitdir"), K.O_RDWR | c).catch(b => k(b) ?? "EIO");
    if (typeof h === "string") {
      if (h !== "ENOENT" && h !== "ENOTDIR") C(l, h === "ELOOP" ? "a gitdir file that is a link, or a link on the way to it" : `a gitdir file that ${ye(h)}`);
      continue;
    }
    try {
      let b = await h.stat();
      if (!b.isFile() || b.nlink !== 1) {
        C(l, !b.isFile() ? "a gitdir file that is not a regular file" : b.nlink > 1 ? "a gitdir file with more than one name" : "a gitdir file that was removed after it was opened");
        continue;
      }
      let T = await ke(h, je),
        m = T === null ? null : Ye(T, g);
      if (T === null) C(l, "a gitdir file that is larger than git writes");else if (m === null && !Qe(T)) C(l, "a gitdir file whose path could not be checked safely");
      if (m === null || !et(m, o)) continue;
      let f = await he(F(g, "locked"), K.O_RDONLY | c).catch(p => G(p) ? null : void 0);
      if (f !== null) {
        let p = await f?.stat().catch(() => null),
          E = f !== void 0 && p?.isFile() === !0 ? await ke(f, Ue).catch(() => null) : null;
        if (await f?.close().catch(() => {}), E === null || i.locked === "keep" || i.locked !== "drop" && !i.locked.unlockIf(E.replace(/[\r\n]+$/, ""))) return P(e, `worktrees/${entryId_2} is locked`);
      }
      if (!(await ze(m, n, o))) return P(e, `could not confirm the worktree is gone: ${m} exists, or a link or unreadable folder is on the way to it`);
      if (await te(async p => {
        let E = await he(F(g, p), K.O_RDONLY | c).catch(v => {
          if (G(v)) return null;
          throw v;
        });
        if (E === null) return null;
        try {
          return await E.stat();
        } finally {
          await E.close().catch(() => {});
        }
      })) return P(e, `${nt(entryId_2)}, so nothing in it was changed`);
      return await pe.beforeMutation?.(entryId_2), await h.truncate(0), {
        outcome: "dropped",
        entryId: entryId_2,
        adminRemoved: !1
      };
    } catch (error) {
      return P(e, d(error));
    } finally {
      await h.close().catch(() => {});
    }
  }
  let u = Te(e, o, l);
  return "unmatched" in u ? P(e, u.unmatched) : u;
}
import { randomBytes as zt } from "crypto";
import { constants as Y } from "fs";
import { access as Xt, lstat as j, readlink as Zt, realpath as W, rm as qt } from "fs/promises";
import { basename as ut, dirname as V, isAbsolute as Se, join as O, normalize as H, parse as J, resolve as Jt, sep as R } from "path";
var Qt = 65536,
  en = 3,
  rt = null;
function tn() {
  return rt ??= Promise.all([import("B:/~BUN/root/chunk-6bcyern3.js"), import("B:/~BUN/root/chunk-41pbkjnp.js")]).then(([tree, n]) => ({
    tree: tree,
    host: n.createDeviceTreeHost()
  })).catch(e => {
    throw rt = null, e;
  });
}
function nn() {
  return I() === "windows" ? Y.O_RDONLY : Y.O_RDONLY | Y.O_NONBLOCK;
}
async function Odt(e, n, {
  forceTwice = !1,
  git: git,
  trustedRoot: trustedRoot,
  resolveAboveParent: s = !1,
  deregisterIfStopped = !1,
  pointerFirst = !1
} = {}) {
  let u = await ht(trustedRoot === void 0 ? [e] : [e, trustedRoot], n, {
    parentLinkToRoot: s
  });
  if (u === null) return {
    outcome: "refused",
    reason: `${n} has no parent directory`
  };
  if ("refused" in u) return {
    outcome: "refused",
    reason: u.refused
  };
  let {
      base: base,
      rel: rel_2,
      underRoot: underRoot
    } = u,
    b = git ?? (await un(e));
  if ("why" in b) return {
    outcome: "refused",
    reason: `the repository's git directory failed its safety checks (${b.why})`
  };
  let dir = b.dir,
    m = await ae(base, underRoot ? "root" : s ? "not_a_link" : "canonical");
  if (!("held" in m)) return m.outcome === "unanchored" ? m : {
    outcome: "refused",
    reason: m.reason
  };
  let {
    held: held,
    realBase: realBase
  } = m;
  try {
    let E = await held.lstat(rel_2).then(_ => _.isDirectory(), () => !1);
    if (E && (await held.list(rel_2).then(() => !1, _ => Ae(_)))) return {
      outcome: "unanchored",
      reason: "no_descriptor_listing"
    };
    let worktreePath_2 = underRoot || s ? [n, O(realBase, ...rel_2.split("/"))] : [n],
      y = await _e(dir, {
        worktreePath: worktreePath_2,
        repoSpelled: b.root
      });
    if (E && y !== null && !("unavailable" in y)) {
      let entryId_3 = await wn(held, rel_2, [n, O(realBase, ...rel_2.split("/"))], e, dir);
      if (entryId_3 !== null && entryId_3 !== y.entryId) {
        let X = await _e(dir, {
          entryId: entryId_3,
          worktreePath: worktreePath_2,
          repoSpelled: b.root
        });
        if (X !== null && !("unavailable" in X)) y = X;
      }
    }
    if (y !== null && "unavailable" in y) return {
      outcome: "refused",
      reason: `git's records of worktrees in ${dir} could not be checked safely (${y.unavailable})`
    };
    if (y === null) return {
      outcome: "not_registered"
    };
    if (!underRoot && !ft(y.recordedGitdir, [n, O(realBase, ...rel_2.split("/"))].map(item => O(H(item), ".git")))) return {
      outcome: "refused",
      reason: `the folder holding ${n} resolved to a different place while it was being checked (a link may have been swapped in)`
    };
    if (y.locked && !forceTwice) return {
      outcome: "locked"
    };
    let locked_2 = forceTwice ? "drop" : "keep",
      S = await held.lstat(rel_2).then(_ => _, error_2 => ({
        error: error_2
      }));
    if ("error" in S && G(S.error) && (await held.lstat(on(rel_2)).then(_ => _.isDirectory(), () => !1))) return at(n, await FZ(dir, {
      entryId: y.entryId,
      repoSpelled: b.root
    }, {
      locked: locked_2
    }), dir, y.entryId);
    if ("error" in S || !S.isDirectory()) return {
      outcome: "refused",
      reason: "error" in S && G(S.error) ? `the directory holding ${n} is missing` : `${n} is not a directory reachable without a link (${"error" in S ? k(S.error) ?? "unknown error" : "not a directory"})`
    };
    let D = await pt(held, `${rel_2}/.git`);
    if ("error" in D) return {
      outcome: "refused",
      reason: `the .git file in ${n} could not be read (${D.error})`
    };
    if (D.value === null || !(await mt(D.value, [n, O(realBase, ...rel_2.split("/"))], e, dir, y.entryId))) return {
      outcome: "not_pointing_back"
    };
    let z = deregisterIfStopped ? await dt(dir, y.entryId) : null,
      U = typeof z === "object" ? z : null,
      B = {
        deleted: !1
      };
    try {
      await pn(held, rel_2, D.bytes, B, {
        pointerFirst: pointerFirst
      });
    } catch (error) {
      if (!B.deleted && Ae(error)) return {
        outcome: "unanchored",
        reason: "no_descriptor_listing"
      };
      let reason_2 = fn(error);
      t(`Worktree checkout ${n} not fully deleted: ${d(error)}`, {
        level: "warn"
      });
      let deregistered = U !== null && B.deleted && (await dn(dir, y.entryId, U, locked_2));
      return {
        outcome: "delete_failed",
        reason: reason_2,
        started: B.deleted,
        deregistered: deregistered
      };
    }
    return at(n, await FZ(dir, {
      entryId: y.entryId,
      repoSpelled: b.root
    }, {
      locked: locked_2
    }), dir, y.entryId);
  } finally {
    await held.close().catch(() => {});
  }
}
async function rn(e, n, {
  rootIsCanonical = !1
} = {}) {
  let r = n === void 0 ? wt(e) : await ht([n], e);
  if (r === null) throw new x(`${e} has no parent directory`, "the path to delete has no parent directory");
  if ("refused" in r) throw new x(r.refused, "the path to delete reaches its root by a spelling that cannot be checked safely");
  let o = await ae(r.base, n === void 0 || !r.underRoot ? "not_a_link" : rootIsCanonical ? "canonical" : "root");
  if (!("held" in o)) {
    if (o.outcome === "unanchored") return {
      unanchored: o.reason
    };
    if (o.absent === !0) return "absent";
    throw new x(`could not open the directory above ${e}: ${o.reason}`, "the directory above the path to delete could not be opened");
  }
  try {
    return (await kt(o.held, r.rel)) ? "deleted" : "absent";
  } catch (error) {
    if (Ae(error)) return {
      unanchored: "no_descriptor_listing"
    };
    throw error;
  } finally {
    await o.held.close().catch(() => {});
  }
}
async function GSs(e, n, i = {}) {
  if (typeof (await rn(e, n, i)) === "object") await qt(e, {
    recursive: !0,
    force: !0
  });
}
function Qxe(e) {
  switch (e.outcome) {
    case "removed":
      return "removed";
    case "not_registered":
      return "git has no usable record of a worktree at this path; nothing was deleted";
    case "locked":
      return "the worktree is locked (by `git worktree lock`); nothing was deleted. `git worktree unlock <path>` unlocks it";
    case "not_pointing_back":
      return "the worktree's .git file is missing or does not point to git's record of it; nothing was deleted";
    case "refused":
      return `${e.reason}; nothing was deleted`;
    case "delete_failed":
      if (e.reason === it) return `${it}; try removing it again once nothing is writing to it`;
      if (e.reason === "WORKING_NAME_NOT_PLAIN") return "it holds a file name that Windows cannot delete this way; some of its other files may already be deleted";
      if (e.reason === "ENOTEMPTY") return "a folder in it could not be emptied: it may be unreadable, or something may still be writing to it; check its permissions and try removing it again";
      if (e.reason === "WORKING_FILE_HELD") return "a program has one of its files open; try removing it again once that program closes it";
      return e.reason === "EBUSY" ? "some of its files could not be deleted: EBUSY; a program may have them open, so try removing it again" : `some of its files could not be deleted: ${e.reason}`;
    case "registration_kept":
      return `its files were deleted, but git still lists it (${e.reason})`;
    case "unanchored":
      return e.reason === "no_descriptor_listing" ? "this machine cannot list a folder it holds open, so it cannot delete it without following links" : `this machine cannot open folders without following links (${e.reason})`;
  }
}
var it = "files kept appearing in the worktree while it was being deleted";
function Ae(e) {
  return k(e) === "WORKING_LIST_UNSUPPORTED";
}
function on(e) {
  return e.includes("/") ? e.slice(0, e.lastIndexOf("/")) : "";
}
async function ae(e, n, {
  holdBase = !1
} = {}) {
  let r = (reason_3, absent = !1) => ({
      outcome: "refused",
      reason: reason_3,
      absent: absent
    }),
    realBase_2 = await (async () => {
      if (n === "root") return W(e);
      let f = O(await W(V(e)), ut(e));
      return n === "not_a_link" && I() !== "windows" && (await ln(f)) ? W(f) : f;
    })().catch(f => G(f) ? void 0 : k(f) === "ELOOP" ? "link" : null);
  if (realBase_2 === "link") return r(`${e} is a link, or its spelling differs from the one on disk`);
  if (realBase_2 === void 0 || realBase_2 === null) return r(`${e} does not exist or cannot be read`, realBase_2 === void 0);
  if (n === "canonical" && !oe(realBase_2, e)) return r(`${e} is reached through a link, or its spelling differs from the one on disk (it resolves to ${realBase_2})`);
  let l = J(realBase_2).root,
    c = I() === "windows" || holdBase ? realBase_2 : await sn(realBase_2);
  if (c === null) return r(`a directory above ${e} cannot be read`);
  let u = await tn().catch(f => ({
    failed: d(f)
  }));
  if ("failed" in u) return r(`${e} could not be opened safely (${u.failed})`);
  let {
      tree: tree_2,
      host: host
    } = u,
    h = await tree_2.openTreeAnchor(host, {
      gitRoot: c,
      realRoot: c
    }).catch(f => ({
      failed: d(f),
      code: k(f)
    }));
  if ("failed" in h) {
    let f = c === realBase_2;
    return f && h.code === "ENOENT" ? r(`${e} does not exist`, !0) : f && (h.code === "ELOOP" || h.code === "ENOTDIR") ? r(`${e} is a link, or changed while it was being opened`) : f && h.code === "WORKING_ROOT_NOT_CANONICAL" ? r(`${e} is reached through a link, or its spelling differs from the one on disk`) : r(`${e} could not be opened safely (${h.failed})`);
  }
  if ("unavailable" in h) {
    let reason_4 = tree_2.getUnavailableReason(await tree_2.checkAnchoring(l, {
        host: host
      })),
      p = reason_4 === "no_ffi" || reason_4 === "remote_volume" && (n !== "not_a_link" || (await an(e, l)));
    return reason_4 !== null && (I() !== "windows" || p) ? {
      outcome: "unanchored",
      reason: reason_4
    } : r(`${e} could not be opened safely (${h.unavailable})`);
  }
  let b = c === realBase_2 ? "" : realBase_2.slice(Pd(c).length).split(R).filter(Boolean).join("/"),
    held_2 = cn(h, b),
    m = await held_2.lstat("").then(f => f, error_3 => ({
      error: error_3
    }));
  if ("error" in m || !m.isDirectory()) return await h.close().catch(() => {}), "error" in m && G(m.error) ? r(`${e} does not exist`, !0) : r(`${e} is a link, or changed while it was being opened`);
  return {
    held: held_2,
    realBase: realBase_2
  };
}
async function sn(e) {
  let n = J(e).root,
    i = e.slice(n.length).split(R).filter(Boolean),
    r = n,
    o = n,
    s = !1;
  for (let l of i) {
    let c = await Pe(o, Y.R_OK),
      u = await Pe(o, Y.W_OK);
    if (c === null || u === null) return null;
    if (!c) {
      let w = await j(o).then(g => g.uid, () => null);
      if (w === null || w === process.getuid?.() || u || s) return null;
      r = O(o, l);
    }
    s ||= u, o = O(o, l);
  }
  return r;
}
async function an(e, n) {
  let i = await W(J(e).root).catch(() => null);
  return i !== null && pp(Pd(J(i).root)) === pp(Pd(n));
}
async function Pe(e, n) {
  return Xt(e, n).then(() => !0, i => ["EACCES", "EPERM", "EROFS"].includes(k(i) ?? "") ? !1 : null);
}
async function ln(e) {
  let n = await j(e).catch(() => null);
  if (n === null || !n.isSymbolicLink()) return !1;
  for (let i = V(e);; i = V(i)) {
    if ((await j(i).then(o => o.uid, () => null)) !== 0 || (await Pe(i, Y.W_OK)) !== !1) return !1;
    if (V(i) === i) return !0;
  }
}
function cn(e, n) {
  let i = r => n === "" ? r : r === "" ? n : `${n}/${r}`;
  return {
    lstat: r => e.lstat(i(r)),
    list: (r, o) => e.list(i(r), o),
    unlink: r => e.unlink(i(r)),
    rmdir: r => e.rmdir(i(r)),
    rename: (r, o) => e.rename(i(r), i(o)),
    removeTree: (r, o) => e.removeTree(i(r), o),
    open: (r, o) => e.open(i(r), o),
    create: (r, o, s) => e.create(i(r), o, s),
    close: () => e.close(),
    anchorBeneath: r => e.anchorBeneath(i(r))
  };
}
async function un(root_3) {
  let root_4 = root_3,
    i = await Pdt(root_3, {
      dotGitLink: "vet"
    });
  if ("skipped" in i && i.skipped === "pointer") {
    let o = lF(root_3);
    if (o !== null && o !== root_3) root_4 = o, i = await Pdt(o, {
      dotGitLink: "vet"
    });else {
      let s = await Bfn(root_3);
      if (s === null) return {
        why: "its .git file names no usable git directory"
      };
      if ("refused" in (await Q$e(root_3, s))) return {
        why: `its .git file names ${s}, which is inside the working tree, or could not be checked against it`
      };
      let [dir_2, c] = await Promise.all([s, root_3].map(item => W(item).catch(() => null)));
      if (dir_2 == null || c == null) return {
        why: dir_2 == null ? `its .git file names ${s}, which does not exist or cannot be resolved` : "the repository root cannot be resolved"
      };
      if (gt(jOr(dir_2), jOr(c))) return {
        why: `its .git file names ${s}, which resolves into the working tree`
      };
      return (await j(O(dir_2, "commondir")).then(() => !1, w => G(w))) ? {
        dir: dir_2,
        root: root_3
      } : {
        why: "its .git file names another worktree"
      };
    }
  }
  if ("skipped" in i) return {
    why: i.why
  };
  let r = await Q$e(root_4, i.gitDir);
  return "refused" in r ? {
    why: r.refused
  } : {
    dir: r.gitDir,
    root: root_4
  };
}
async function ot(e, n, i) {
  return e.lstat(n).then(r => ie(r, i), () => !1);
}
async function st(e, n) {
  for (let i of ["objects", "config", "packed-refs", "hooks", "worktrees"]) if (await e.lstat(`${n}/${i}`).then(() => !0, o => !G(o))) return !0;
  return !1;
}
async function dn(e, n, i, r) {
  let o = await ae(e, "canonical", {
    holdBase: !0
  });
  if (!("held" in o)) return t(`Kept the registration ${n} in ${e}: ${o.reason}`, {
    level: "warn"
  }), !1;
  try {
    let s = `worktrees/${n}`;
    if (!(await ot(o.held, s, i))) throw Error("its folder changed after it was checked, or this volume cannot show it is the same folder");
    if (r === "keep" && (await o.held.lstat(`worktrees/${n}/locked`).then(() => !0, u => !G(u)))) throw Error("it was locked while the checkout was being deleted");
    let l = new x(`${s} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them, so nothing in it was removed`, "the registration entry has a git directory's own files in it, or could not be checked for them");
    if (await st(o.held, s)) throw l;
    if (await o.held.unlink(`${s}/gitdir`).catch(u => {
      if (!G(u)) throw u;
    }), await st(o.held, s)) return t(`Dropped the registration ${s} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, {
      level: "warn"
    }), !1;
    if (await Ie(o.held, s, i), await o.held.rmdir(s).then(() => !0, u => G(u))) return !0;
    if (!(await ot(o.held, s, i))) return t(`Dropped the registration ${s} in ${e} (git no longer lists it) but left its folder: it changed while it was being emptied`, {
      level: "warn"
    }), !1;
    let c = `${s}.claude-dropped-${zt(4).toString("hex")}`;
    return await o.held.rename(s, c).then(() => (t(`Dropped the registration ${s} in ${e}; its folder held files Claude Code does not delete (such as a submodule's git directory), so it was moved to ${c}; git worktree prune removes it`, {
      level: "warn"
    }), !0), u => (t(`Dropped the registration ${s} in ${e} (git no longer lists it) but could not move its folder aside (${d(u)}); git worktree prune removes it`, {
      level: "warn"
    }), !1));
  } catch (error) {
    return t(`Kept the registration ${n} in ${e}: ${d(error)}`, {
      level: "warn"
    }), !1;
  } finally {
    await o.held.close().catch(() => {});
  }
}
async function at(e, n, i, r) {
  let o = O(i, "worktrees", r);
  if (n.outcome === "dropped" || n.outcome === "none" && (await dt(i, r)) === "absent") return {
    outcome: "removed"
  };
  let reason_5 = n.outcome === "kept" ? n.reason : `git's record of it at ${o} could not be read`;
  return t(`Worktree ${e} is gone but git still lists it: ${reason_5}`, {
    level: "warn"
  }), {
    outcome: "registration_kept",
    reason: reason_5
  };
}
async function dt(e, n) {
  let i = await ae(e, "canonical", {
    holdBase: !0
  });
  if (!("held" in i)) return null;
  try {
    return await i.held.lstat(`worktrees/${n}`).then(r => ({
      dev: r.dev,
      ino: r.ino
    }), r => G(r) ? "absent" : null);
  } finally {
    await i.held.close().catch(() => {});
  }
}
function fn(e) {
  return k(e) === "ENOTEMPTY" && !("syscall" in Object(e)) ? d(e) : k(e) ?? "an unknown error";
}
function oe(e, n) {
  return se(e) === se(n);
}
function ft(e, n) {
  return umt(se(e), n.map(se));
}
function se(e) {
  return I() === "windows" ? e.replace(/^[a-z](?=:)/, n => n.toUpperCase()) : e;
}
function lt(e, n) {
  return e.length > n.length + 1 && oe(e.slice(0, n.length + 1), n + R);
}
function gt(e, n) {
  return e === n || e.startsWith(n.endsWith(R) ? n : n + R);
}
async function gn(e, n) {
  let [i, r, o] = await Promise.all([j(e, {
    bigint: !0
  }).catch(() => null), j(n, {
    bigint: !0
  }).catch(() => null), j(V(n), {
    bigint: !0
  }).catch(() => null)]);
  return i !== null && r !== null && o !== null && i.dev !== 0n && !gu(i.ino) && i.dev === r.dev && i.ino === r.ino && !(o.dev === r.dev && o.ino === r.ino);
}
async function ht(e, n, {
  parentLinkToRoot = !1
} = {}) {
  let r = Pd(H(n)),
    o = (g, h) => g.slice(h.length + 1).split(R).join("/"),
    s = [],
    l = [];
  for (let g of e) {
    let h = await W(g).catch(() => null);
    if (s.push(g, ...(h === null ? [] : [h])), h !== null) l.push(Pd(h));
  }
  let c = s.map(item => Pd(H(item)));
  for (let g of c) if (lt(r, g)) {
    let h = r.slice(0, g.length);
    return {
      base: h.endsWith(":") ? h + R : h,
      rel: o(r, g),
      underRoot: !0
    };
  }
  let u = g => pp(g.normalize("NFC")),
    base_2 = c.find(item => lt(u(r), u(item)));
  if (base_2 !== void 0) {
    let g = r.split(R),
      h = base_2.split(R).length;
    if (I() !== "windows" && (await gn(g.slice(0, h).join(R), base_2))) return {
      base: base_2,
      rel: g.slice(h).join("/"),
      underRoot: !0
    };
    return {
      refused: `${n} spells the repository folder ${base_2} in another letter case or Unicode form (use the path as git records it)`
    };
  }
  if (l.length > 0) {
    let g = r.split(R),
      h = null;
    for (let f = 1; f < g.length - 1; f++) {
      let p = g.slice(0, f).join(R),
        E = p === "" || p.endsWith(":") ? p + R : p,
        v = await W(E).catch(() => null);
      h = v;
      let y = v === null ? null : Pd(v),
        base_3 = y === null ? void 0 : l.find(item => oe(y, item));
      if (base_3 !== void 0) return {
        base: base_3,
        rel: g.slice(f).join("/"),
        underRoot: !0
      };
      if (y !== null && l.some(item => gt(y, item))) return {
        refused: `${n} is reached through a link into the repository at ${E}`
      };
    }
    let b = h === null ? null : O(h, g.at(-2)),
      T = b === null || !parentLinkToRoot ? null : await hn(b),
      base_4 = [b, T].flatMap(item => item === null ? [] : [item]).map(item => l.find(p => oe(item, p))).find(item => item !== void 0);
    if (base_4 !== void 0) return {
      base: base_4,
      rel: g.at(-1),
      underRoot: !0
    };
  }
  return wt(r);
}
async function hn(e) {
  let n = await Zt(e).catch(() => null);
  if (n === null) return null;
  let i = I() === "windows" && /^\\\\\?\\[A-Za-z]:\\/.test(n);
  if (i && n.includes("/")) return null;
  let r = i ? n.slice(4) : n,
    o = r.split(R === "\\" ? /[\\/]/ : /\//);
  if ((Se(r) ? o : o.slice(Math.max(0, o.findIndex(item => item !== "..")))).some(item => item === "." || item === "..")) return null;
  return Pd(H(Se(r) ? r : O(V(e), r)));
}
function wt(e) {
  let n = Pd(H(e)),
    i = J(n).root,
    r = n.lastIndexOf(R);
  if (n === i || r === n.length - 1 || r < 0) return null;
  return {
    base: r < i.length ? i : n.slice(0, r),
    rel: n.slice(r + 1),
    underRoot: !1
  };
}
async function mt(e, n, i, r, o) {
  let s = Se(e) ? [H(e)] : n.map(item => H(Jt(item, e))),
    l = await W(i).catch(() => null),
    c = [r, O(i, ".git")].concat(l === null ? [] : [O(l, ".git")]).map(item => O(item, "worktrees", o));
  return s.some(item => ft(item, c));
}
async function wn(e, n, i, r, o) {
  let s = await pt(e, `${n}/.git`);
  if ("error" in s || s.value === null) return null;
  let l = ut(H(s.value));
  return (await mt(s.value, i, r, o, l)) ? l : null;
}
async function mn(e, n) {
  let i = Buffer.alloc(n + 1),
    r = 0;
  for (;;) {
    let {
      bytesRead: bytesRead_2
    } = await e.read(i, r, i.length - r, r);
    if (bytesRead_2 === 0) return i.subarray(0, r);
    if (r += bytesRead_2, r > n) return null;
  }
}
async function pt(e, n) {
  let i = {
      value: null,
      bytes: Buffer.alloc(0)
    },
    r;
  try {
    r = await e.open(n, nn());
  } catch (o) {
    let s = k(o);
    return s === "ENOENT" || s === "ELOOP" || s === "EISDIR" ? i : {
      error: s ?? d(o)
    };
  }
  try {
    if (!(await r.stat()).isFile()) return i;
    let bytes = await mn(r, Qt);
    if (bytes === null) return i;
    let s = /^gitdir: ([^\r\n]+)[\r\n]*$/.exec(bytes.toString("utf8"));
    return {
      value: s ? s[1] : null,
      bytes: bytes
    };
  } catch (o) {
    return {
      error: k(o) ?? d(o)
    };
  } finally {
    await r.close().catch(() => {});
  }
}
async function kt(e, n, i = {
  deleted: !1
}) {
  try {
    return await e.unlink(n), i.deleted = !0, !0;
  } catch (error) {
    let o = k(error);
    if (o === "ENOENT") return !1;
    if (o !== "EISDIR" && o !== "EPERM" && o !== "EACCES") throw error;
    let s = await e.lstat(n).catch(() => null);
    if (s === null || !s.isDirectory()) throw error;
    return await e.removeTree(n, {
      onDeleted: () => {
        i.deleted = !0;
      }
    }), !0;
  }
}
async function pn(e, n, i, r = {
  deleted: !1
}, {
  pointerFirst: pointerFirst_2 = !1
} = {}) {
  if (pointerFirst_2) await e.unlink(`${n}/.git`), r.deleted = !0;
  for (let s = 0;; s++) {
    let l = (await e.list(n)).filter(item => item !== ".git");
    if (l.length === 0) break;
    if (s === en) {
      let c = Error("files kept appearing in the worktree while it was being deleted");
      throw c.code = "ENOTEMPTY", c;
    }
    if (l.some(item => item.includes("\uFFFD"))) {
      await e.removeTree(n, {
        keep: ".git",
        onDeleted: () => {
          r.deleted = !0;
        }
      });
      continue;
    }
    for (let c of l) await kt(e, `${n}/${c}`, r);
  }
  if (!pointerFirst_2) await e.unlink(`${n}/.git`), r.deleted = !0;
  try {
    await e.removeTree(n);
  } catch (error) {
    if (!pointerFirst_2) await e.create(`${n}/.git`, i, 420).catch(() => {});
    throw error;
  }
}
export { wvr, Pdt, M7t, Q$e, FZ, Q6e, Odt, GSs, Qxe };