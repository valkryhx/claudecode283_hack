// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  J8n
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  P,
  l,
  v,
  as
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  _i
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  _,
  m,
  p,
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  b,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  LBe
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  qx,
  Bm,
  dj,
  yt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  mn,
  No,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  Ri
} from "B:/~BUN/root/chunk-vpejnsp4.js";
import {
  cg,
  ca,
  nl
} from "B:/~BUN/root/chunk-6spmd6p4.js";
import {
  W1n
} from "B:/~BUN/root/chunk-0djrqga0.js";
import {
  B4e
} from "B:/~BUN/root/chunk-pgrf1rrh.js";
import {
  Zzn,
  Wf,
  cct,
  w0r,
  bln,
  eD,
  dct,
  r6
} from "B:/~BUN/root/chunk-10m2dkry.js";
import {
  mi
} from "B:/~BUN/root/chunk-3wnb3s8p.js";
import {
  mkdir as ee,
  readFile as N,
  rm as Y,
  writeFile as te
} from "fs/promises";
import {
  join as B,
  resolve as re
} from "path";
import {
  realpath as E
} from "fs/promises";
import {
  basename as G,
  dirname as z,
  join as Z,
  normalize as H,
  sep as X
} from "path";
async function ixr(e) {
  let r = await W1n(e, {
    dotGitLink: "vet"
  });
  if ("skipped" in r && r.skipped === "pointer") {
    let o = dj(e);
    if (o !== null && o !== e) r = await W1n(o, {
      dotGitLink: "vet"
    })
  }
  if ("skipped" in r) return r.skipped === "gone" || r.skipped === "not-a-repository" ? {
    ok: !1,
    outcome: "unlisted",
    reason: r.why
  } : {
    ok: !1,
    outcome: "kept",
    reason: `the repository's worktree registrations cannot be vetted before git lists them (${r.why})`
  };
  let n = r.refused.entries().next().value;
  if (n !== void 0) {
    let [o, i] = n;
    return {
      ok: !1,
      outcome: "kept",
      reason: `a registered worktree cannot be vetted before git lists them (${r.refused.size} refused; ${o}: ${i})`
    }
  }
  return {
    ok: !0,
    gitDir: r.gitDir
  }
}
async function K(e, r, n = {}) {
  let o = yt(),
    i = No(n.env),
    s = (g) => Ve(o, [...mn, ...g], {
      cwd: e,
      env: i
    }),
    a = (g) => (t(`Kept worktree ${r}: ${g}`, {
      level: "warn"
    }), {
      outcome: "kept",
      reason: g
    }),
    u = await E(e).catch(() => null),
    c = Wf(H(r)),
    f = Wf(H(e)),
    C = Zzn(c).startsWith(Zzn(f) + X),
    I, T = await ixr(e);
  if (!T.ok) {
    if (T.outcome === "kept") return a(T.reason);
    return t(`Worktree ${r} not listed: ${T.reason}`, {
      level: "warn"
    }), {
      outcome: "unlisted",
      reason: T.reason
    }
  }
  let w = ["--git-dir", T.gitDir],
    y = await F1n(e) ? await s([...w, "worktree", "list", "--porcelain", "-z"]) : null;
  if (y !== null && y.code === 0) {
    if (!w0r(y.stdout)) return a("git's worktree list holds a record git would not write (a path listed twice, or a spelling that is not absolute and plain)");
    let g = C ? null : await E(z(r)).catch(() => null),
      x = [c, ...g !== null ? [Z(g, G(r))] : C && u !== null ? [Wf(u) + c.slice(f.length)] : []],
      k = bln(y.stdout, x);
    if (k === null) {
      let A = await eD(r, e);
      if (A === "link" || A === "unknown") return a(`git lists no worktree at ${x.join(" or ")}, and the path has a link in a component, or one that cannot be probed`);
      let U = `git lists no worktree at ${x.join(" or ")}`;
      return t(`Unregistered worktree ${r}: ${U}`, {
        level: "warn"
      }), {
        outcome: "unregistered",
        reason: U
      }
    }
    if (cct(k, [e, ...u === null ? [] : [u]]) !== null) return a(`${k} names the main worktree`);
    if (_i(k, e)) return a(`${k} is on another host`);
    let S = await eD(k, e);
    if (S === "missing") {
      if (!await r6(k)) return a(`${k} holds a reparse point that could not be removed`);
      let A = await s([...w, "worktree", "remove", "--force", ...n.forceTwice ? ["--force"] : [], k]);
      return A.code === 0 ? {
        outcome: "removed"
      } : {
        outcome: "failed",
        stderr: A.stderr
      }
    }
    if (S !== "clear") return a(`${k} has a link in a component, or one that cannot be probed`);
    let h = await E(k).catch(() => null);
    if (h === null) return a(`${k} does not resolve`);
    if (u !== null && Wf(h) === Wf(u)) return a(`${k} resolves to the main worktree`);
    if (!await dct(k, h, e)) return a(`${k} is not intact (a link may have been introduced)`);
    I = k
  } else if (y !== null) {
    let g = `could not read git's worktree list: ${y.stderr.trim()}`;
    return t(`Worktree ${r} not listed: ${g}`, {
      level: "warn"
    }), {
      outcome: "unlisted",
      reason: g
    }
  } else {
    if (cct(r, [e, ...u === null ? [] : [u]]) !== null) return a(`${r} names the main worktree`);
    let g, x;
    if (C) g = c, x = c.slice(0, f.length);
    else {
      let h = await E(z(r)).catch(() => null);
      if (h === null) return a(`${r}'s parent does not resolve`);
      g = Z(h, G(r)), x = h
    }
    let k = await eD(g, x);
    if (k === "missing") {
      if (!await r6(g)) return a(`${g} holds a reparse point that could not be removed`);
      let h = await s([...w, "worktree", "remove", "--force", ...n.forceTwice ? ["--force"] : [], g]);
      return h.code === 0 ? {
        outcome: "removed"
      } : {
        outcome: "failed",
        stderr: h.stderr
      }
    }
    if (k !== "clear") return a(`${g} is a link, or cannot be probed`);
    let S = await E(g).catch(() => null);
    if (S !== null && u !== null && Wf(S) === Wf(u)) return a(`${g} resolves to the main worktree`);
    if (S === null || !await dct(g, S, x)) return a(`${g} is not intact`);
    I = g
  }
  if (!await r6(I)) return a(`${I} holds a reparse point that could not be removed`);
  let O = await s([...w, "worktree", "remove", "--force", ...n.forceTwice ? ["--force"] : [], I]);
  return O.code === 0 ? {
    outcome: "removed"
  } : {
    outcome: "failed",
    stderr: O.stderr
  }
}
var R = new Map;

function F1n(e) {
  let r = yt(),
    n = R.get(r);
  if (n === void 0) n = Ve(r, [...mn, "--version"], {
    cwd: e,
    env: No(),
    timeout: 1e4
  }).then((o) => {
    let i = /git version (\d+)\.(\d+)/.exec(o.stdout);
    if (o.code !== 0 || i === null) return R.delete(r), !0;
    let [s, a] = [Number(i[1]), Number(i[2])];
    return s > 2 || s === 2 && a >= 36
  }, () => (R.delete(r), !0)), R.set(r, n);
  return n
}
class KL extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError"
  }
}
var V = /\p{Cc}/u;

function VEo(e) {
  return V.test(e)
}

function L4e(e) {
  let r = V.exec(e);
  if (r) {
    let n = r[0].codePointAt(0);
    throw new KL(`Refusing to send command containing control character U+${n.toString(16).padStart(4,"0").toUpperCase()} to terminal pane`)
  }
}

function vsn(e) {
  return e === "tmux" || e === "iterm2"
}

function ksn(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()
}

function axr(e) {
  return e.replaceAll("@", "-")
}

function L(e) {
  return B(LBe(), ksn(e))
}

function KEe(e) {
  return B(L(e), "config.json")
}

function j(e) {
  return Ae.team(ksn(e))
}

function W(e) {
  let r = "failureClass" in e ? `/${e.failureClass}` : "",
    n = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${r}${n}`
}

function q(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect"
}

function ne(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended"
}

function M(e) {
  return e.code === "Unavailable" || e.code === "NotFound" || e.code === "Failed" && (e.failureClass === "permission" || e.failureClass === "resource" || e.failureClass === "environment" || e.failureClass === "unknown" && as(e.cause))
}

function D(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let r = e,
    n = Array.isArray(r.members) ? r.members.filter(oe) : [];
  return Array.isArray(r.members) && n.length === r.members.length ? r : {
    ...r,
    members: n
  }
}

function oe(e) {
  return typeof e === "object" && e !== null && "agentId" in e && typeof e.agentId === "string" && "name" in e && typeof e.name === "string"
}
async function ay(e, r) {
  if (r) {
    let n = await r.read([j(e)]);
    if (!n.ok) return t(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`), null;
    let o = n.value.items[0];
    if (!o.found) return null;
    try {
      return D(J(Buffer.from(o.value).toString("utf8")))
    } catch (i) {
      return t(`[TeammateTool] Failed to read team file for ${e}: ${l(i)}`), null
    }
  }
  try {
    let n = await N(KEe(e), "utf-8");
    return D(J(n))
  } catch (n) {
    if (v(n) === "ENOENT") return null;
    return t(`[TeammateTool] Failed to read team file for ${e}: ${l(n)}`), null
  }
}

function $1n(e, r) {
  if (as(r)) t(`[TeammateTool] Failed to write team file for ${e} (${v(r)}): ${l(r)}`, {
    level: "error"
  });
  else if (ie(r)) t(`[TeammateTool] Failed to write team file for ${e}: ${l(r)}`, {
    level: "error"
  });
  else d(r)
}

function ie(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return !1;
  let r = e.cause;
  if (typeof r !== "object" || typeof r.code !== "string") return !1;
  return M(r)
}
var ae = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: () => {}
};

function Q(e) {
  return new P(`Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`, "Team file missing (session team not initialized)")
}
async function Bae(e, r, n, o) {
  if (o) return se(e, r, n, o);
  let i = KEe(e),
    s;
  try {
    s = await Ri(i, {
      lockfilePath: `${i}.lock`,
      ...ae
    })
  } catch (a) {
    if (v(a) === "ENOENT") throw Q(e);
    throw a
  }
  try {
    let a = await ay(e);
    if (!a) throw Error("Team config file unreadable (lock acquired, read failed)");
    let u = r(a);
    if (u === !1) return;
    try {
      await U1n(e, a)
    } catch (c) {
      if (!n?.bestEffortWrite) throw c;
      $1n(e, c)
    }
    return u
  } finally {
    try {
      await s()
    } catch (a) {
      t(`[TeammateTool] updateTeamFile lock release failed: ${l(a)}`)
    }
  }
}
async function lxr(e, r, n) {
  try {
    await Bae(e, (o) => {
      let i = o.members.findIndex((s) => s.agentId === r);
      if (i === -1) return !1;
      o.members.splice(i, 1)
    }, void 0, n)
  } catch (o) {
    t(`[TeammateTool] removeTeamMember(${r}) failed: ${l(o)}`)
  }
}
async function se(e, r, n, o) {
  let i = j(e),
    s = 5,
    a = B4e(50),
    u, c = (T) => {
      if (T === void 0) return {
        skip: !0,
        result: {
          kind: "missing"
        }
      };
      let w;
      try {
        w = D(J(Buffer.from(T.value).toString("utf8"))) ?? void 0
      } catch (y) {
        return {
          skip: !0,
          result: {
            kind: "unreadable",
            parseError: l(y)
          }
        }
      }
      if (!w) return {
        skip: !0,
        result: {
          kind: "unreadable"
        }
      };
      let F;
      try {
        F = r(w)
      } catch (y) {
        return {
          skip: !0,
          result: {
            kind: "threw",
            error: y
          }
        }
      }
      if (F === !1) return {
        skip: !0,
        result: {
          kind: "declined"
        }
      };
      return u = F, {
        write: b(w, null, 2),
        result: {
          kind: "applied",
          result: F
        }
      }
    },
    f;
  for (let T = 1;; T++) {
    if (f = await o.update(i, c), !f.ok) {
      if (q(f.error) && T < 5) {
        await a(T);
        continue
      }
      break
    }
    let w = f.value.result;
    if (w === void 0 || w.kind === "declined") return;
    switch (w.kind) {
      case "missing":
        throw Q(e);
      case "unreadable":
        if (w.parseError !== void 0) t(`[TeammateTool] Failed to read team file for ${e}: ${w.parseError}`);
        if (T < 5) {
          await a(T);
          continue
        }
        throw Error("Team config file unreadable (lock acquired, read failed)");
      case "threw":
        throw w.error;
      case "applied":
        return _("swarm_team_file_update"), w.result;
      default:
        return w
    }
  }
  let C = ne(f.error);
  if (C) p("swarm_team_file_update", "lock_contended");
  if (!n?.bestEffortWrite) {
    let T = new P(`Team file update failed (${W(f.error)}) for ${e}`, "Team file update failed (storage v5)");
    if (T.cause = f.error, !C && !M(f.error)) m("swarm_team_file_update", f.error.code);
    throw T
  }
  if (!q(f.error) && M(f.error)) t(`[TeammateTool] Failed to update team file for ${e} (${W(f.error)})`, {
    level: "error"
  });
  else {
    let T = new P(`Team file update failed (${W(f.error)}) for ${e}`, "Team file update failed (storage v5)");
    T.cause = f.error, m("swarm_team_file_update", f.error.code), d(T)
  }
  return u
}
async function U1n(e, r, n) {
  if (n) {
    let i = await n.write(j(e), b(r, null, 2), {
      precondition: {
        type: "none"
      }
    });
    if (!i.ok) {
      let s = new P(`Team file write failed (${W(i.error)}) for ${e}`, "Team file write failed (storage v5)");
      throw s.cause = i.error, s
    }
    return
  }
  let o = L(e);
  await ee(o, {
    recursive: !0
  }), await te(KEe(e), b(r, null, 2))
}
async function mNe(e, r, n) {
  let o = r.agentId || r.name;
  if (!o) return t("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), !1;
  let i = !1;
  try {
    let s = await Bae(e, (a) => {
      i = !1;
      let u = a.members.length;
      a.members = a.members.filter((f) => {
        if (r.agentId && f.agentId === r.agentId) return !1;
        if (r.name && f.name === r.name) return !1;
        return !0
      });
      let c = a.members.length !== u;
      return i = !c, c
    }, {
      bestEffortWrite: !0
    }, n) ?? !1;
    if (s) t(`[TeammateTool] Removed teammate from team file: ${o}`);
    else if (i) t(`[TeammateTool] Teammate ${o} not found in team file for "${e}"`);
    return s
  } catch (s) {
    return t(`[TeammateTool] Cannot remove teammate ${o} from "${e}": ${l(s)}`), !1
  }
}
async function o0t(e, r, n, o) {
  let i = !1;
  try {
    let s = await Bae(e, (a) => {
      let u = a.members.findIndex((f) => f.agentId === r),
        c = a.members[u];
      if (!c) return i = !1, !1;
      if (n?.onlyIfJoinedBefore !== void 0 && c.joinedAt >= n.onlyIfJoinedBefore) return i = !0, !1;
      return i = !1, a.members.splice(u, 1), !0
    }, {
      bestEffortWrite: !0
    }, o) ?? !1;
    if (s) t(`[TeammateTool] Removed member ${r} from team ${e}`);
    else if (i) t(`[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`);
    return s
  } catch (s) {
    return t(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${l(s)}`), !1
  }
}
async function B1n(e, r, n, o) {
  let i = "unchanged";
  try {
    if (await Bae(e, (s) => {
        let a = s.members.find((u) => u.name === r);
        if (!a) return i = "absent", !1;
        if (a.mode === n) return i = "unchanged", !1;
        i = "set", a.mode = n
      }, void 0, o), i === "absent") t(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`);
    else if (i === "set") t(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`)
  } catch (s) {
    t(`[TeammateTool] Cannot set member mode: ${l(s)}`)
  }
}
async function s0t(e, r, n) {
  if (!nl()) return;
  let o = r ?? ca(),
    i = cg();
  if (o && i) await B1n(o, i, e, n)
}
async function i0t(e, r, n, o) {
  let i = "unchanged";
  try {
    if (await Bae(e, (s) => {
        let a = s.members.find((u) => u.name === r);
        if (!a) return i = "absent", !1;
        if (a.isActive === n) return i = "unchanged", !1;
        i = "set", a.isActive = n
      }, void 0, o), i === "absent") t(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`);
    else if (i === "set") t(`[TeammateTool] Set member ${r} in team ${e} to ${n?"active":"idle"}`)
  } catch (s) {
    t(`[TeammateTool] Cannot set member active: ${l(s)}`)
  }
}
async function le(e) {
  let r = B(e, ".git"),
    n = null;
  try {
    if (qx(r, e)) throw Error(".git pointer file is a symlink");
    let i = (await N(r, "utf-8")).trim().match(/^gitdir:\s*(.+)$/);
    if (i && i[1] && !_i(i[1].trim(), e) && !Bm(i[1].trim(), e)) {
      let s = re(e, i[1].trim()),
        a = B(s, "..", "..");
      n = B(a, "..")
    }
  } catch {}
  if (n) {
    let o = await K(n, e);
    switch (o.outcome) {
      case "removed":
        t(`[TeammateTool] Removed worktree via git: ${e}`);
        return;
      case "unregistered":
        t(`[TeammateTool] Worktree already removed: ${e}`);
        return;
      case "kept":
        t(`[TeammateTool] kept worktree ${e}: ${o.reason}`);
        return;
      case "unlisted":
        t(`[TeammateTool] worktree not listed, falling back to rm: ${o.reason}`);
        break;
      case "failed":
        if (o.stderr.includes("not a working tree")) {
          t(`[TeammateTool] Worktree already removed: ${e}`);
          return
        }
        t(`[TeammateTool] git worktree remove failed, falling back to rm: ${o.stderr}`)
    }
  }
  if (!await r6(e)) {
    t(`[TeammateTool] kept worktree \u2014 unremovable reparse point in ${e}`);
    return
  }
  try {
    await Y(e, {
      recursive: !0,
      force: !0
    }), t(`[TeammateTool] Removed worktree directory manually: ${e}`)
  } catch (o) {
    t(`[TeammateTool] Failed to remove worktree ${e}: ${l(o)}`)
  }
}

function cxr(e) {
  J8n().add(e)
}
async function K3o(e) {
  return Or("swarm_session_cleanup", async () => {
    let r = J8n();
    if (r.size === 0) return;
    let n = Array.from(r);
    t(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`), await Promise.allSettled(n.map((o) => me(o, e))), await Promise.allSettled(n.map((o) => de(o, e))), r.clear()
  })
}
async function me(e, r) {
  let n = await ay(e, r);
  if (!n) return;
  let o = n.members.filter((c) => c.name !== mi && c.tmuxPaneId && c.backendType && vsn(c.backendType));
  if (o.length === 0) return;
  let [{
    ensureBackendsRegistered: i,
    getBackendByType: s
  }, {
    isInsideTmux: a
  }] = await Promise.all([import("B:/~BUN/root/chunk-fn4z6ygw.js"), import("B:/~BUN/root/chunk-sdhz154x.js")]);
  await i();
  let u = !await a();
  await Promise.allSettled(o.map(async (c) => {
    if (!c.tmuxPaneId || !c.backendType || !vsn(c.backendType)) return;
    let f = await s(c.backendType).killPane(c.tmuxPaneId, u);
    t(`cleanupSessionTeams: killPane ${c.name} (${c.backendType} ${c.tmuxPaneId}) \u2192 ${f}`)
  }))
}
async function de(e, r) {
  return Or("swarm_team_cleanup", async () => {
    let n = await ay(e, r),
      o = [];
    if (n) {
      for (let s of n.members)
        if (s.worktreePath) o.push(s.worktreePath)
    }
    for (let s of o) await le(s);
    let i = L(e);
    try {
      await Y(i, {
        recursive: !0,
        force: !0
      }), t(`[TeammateTool] Cleaned up team directory: ${i}`)
    } catch (s) {
      t(`[TeammateTool] Failed to clean up team directory ${i}: ${l(s)}`)
    }
  })
}
export {
  ixr,
  F1n,
  KL,
  VEo,
  L4e,
  vsn,
  ksn,
  axr,
  KEe,
  ay,
  $1n,
  Bae,
  lxr,
  U1n,
  mNe,
  o0t,
  B1n,
  s0t,
  i0t,
  cxr,
  K3o
};
