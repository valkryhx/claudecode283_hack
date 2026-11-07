// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { yVe, T4, v, Us, fl, Sy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { s$e, Xm, pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { fr, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var L = [".claude/skills", ".claude/commands"],
  C = 3,
  _ = 100;
function y(n) {
  let e = n.split("/");
  if (e[0] !== ".claude" || e.length < 3) return null;
  switch (e[1]) {
    case "skills":
      if (e.length === 4 && e[3] === "SKILL.md") return {
        kind: "skill",
        name: e[2]
      };
      return null;
    case "commands":
      {
        let i = e.at(-1);
        if (!i.endsWith(".md")) return null;
        if (/^skill\.md$/i.test(i)) return e.length < 4 ? null : {
          kind: "command",
          name: e.slice(2, -1).join(":")
        };
        return {
          kind: "command",
          name: e.slice(2).join(":").slice(0, -3)
        };
      }
    default:
      return null;
  }
}
class x {
  inFlight = void 0;
  resolved = void 0;
  get(n) {
    return this.inFlight ??= this.scan(n), this.inFlight;
  }
  teammateAuthorOf(n) {
    return this.resolved?.find(e => !e.byCurrentUser && e.name === n)?.author || null;
  }
  async scan(n) {
    if (!Us()) return [];
    let e = s$e(pe(), Ee()),
      cwd = fr(e);
    if (!cwd) return [];
    let [{
      stdout: stdout,
      code: code
    }, a] = await Promise.all([lt(Pt(), ["-c", "core.quotePath=false", "-c", "core.fsmonitor=", "-c", "core.hooksPath=/dev/null", "-c", "core.pager=", "-c", "log.showSignature=false", "log", "--since=7.days", "--diff-filter=A", "--name-only", "--format=COMMIT%x00%an%x00%ae", "--", ...L], {
      cwd: cwd,
      timeout: 5000
    }), Xm(e, yVe)]);
    if (code !== 0) return [];
    let s = a?.toLowerCase(),
      c = [],
      A = new Set(),
      author = "",
      h = "";
    for (let path of stdout.split(`
`)) {
      if (path.startsWith("COMMIT\x00")) {
        let f = path.split("\x00");
        author = f[1] ?? "", h = (f[2] ?? "").toLowerCase();
        continue;
      }
      if (!path || A.has(path)) continue;
      A.add(path);
      let d = y(path);
      if (d) {
        let byCurrentUser = Boolean(s && h === s);
        c.push({
          path: path,
          author: author,
          byCurrentUser: byCurrentUser,
          ...d
        });
      }
    }
    this.resolved = c;
    let k = fl(),
      E = new Set(k.seenTeamArtifactPaths ?? []),
      hasUnseenTeamArtifacts = c.some(item => !item.byCurrentUser && !E.has(item.path)),
      U = new Set(k.loggedAuthoredArtifactPaths ?? []),
      p = c.filter(item => item.byCurrentUser && !U.has(item.path));
    for (let r of p) l("tengu_skill_authored", {
      is_skill: r.kind === "skill"
    });
    try {
      await Sy(r => {
        let d = r.hasUnseenTeamArtifacts === hasUnseenTeamArtifacts;
        if (p.length === 0 && d) return r;
        let f = d ? r : {
          ...r,
          hasUnseenTeamArtifacts: hasUnseenTeamArtifacts
        };
        if (p.length === 0) return f;
        let j = f.loggedAuthoredArtifactPaths ?? [],
          P = p.map(item => item.path),
          B = new Set(P),
          loggedAuthoredArtifactPaths = [...j.filter(item => !B.has(item)), ...P].slice(-_);
        return {
          ...f,
          loggedAuthoredArtifactPaths: loggedAuthoredArtifactPaths
        };
      }, n);
    } catch (error) {
      t(`team-artifact eligibility persist failed: ${error}`);
    }
    return c;
  }
}
var b = new Je(() => new x());
function S(n, e) {
  return b.of(n).get(e);
}
function UKt(n, e, i) {
  if (e !== "projectSettings" || !v("tengu_tussock_oriole", !1)) return null;
  return b.of(n).teammateAuthorOf(i);
}
function tsi(n, e) {
  if (T4()) S(n, e).catch(() => {});
  if (!v("tengu_tussock_oriole", !1)) return !1;
  return fl().hasUnseenTeamArtifacts === !0;
}
async function nsi(n, e) {
  let i = await S(n, e);
  if (i.length === 0) return [];
  let o = new Set(fl().seenTeamArtifactPaths ?? []);
  return i.filter(item => !item.byCurrentUser && !o.has(item.path));
}
async function rsi(n, e) {
  let o = (await S(n, e)).filter(item => !item.byCurrentUser).map(item => item.path),
    m = new Set(o);
  await Sy(a => {
    let s = a.seenTeamArtifactPaths ?? [],
      seenTeamArtifactPaths = [...s.filter(item => !m.has(item)), ...o].slice(-_);
    if (seenTeamArtifactPaths.length === s.length && seenTeamArtifactPaths.every((item, index) => item === s[index]) && a.hasUnseenTeamArtifacts === !1) return a;
    return {
      ...a,
      seenTeamArtifactPaths: seenTeamArtifactPaths,
      hasUnseenTeamArtifacts: !1
    };
  }, e);
}
function osi(n) {
  let e = {
    skill: 0,
    command: 0
  };
  for (let i of n) e[i.kind]++;
  g("tips_team_artifact_show"), l("tengu_team_artifact_tip_shown", {
    skill_count: e.skill,
    command_count: e.command,
    overflow_count: Math.max(0, n.length - C)
  });
}
function BKt(n, e) {
  if (n !== "projectSettings") return {};
  return {
    via_team_tip: (fl().seenTeamArtifactPaths ?? []).some(item => y(item)?.name === e)
  };
}
function ssi(n) {
  let e = n.filter(item => !item.byCurrentUser);
  if (e.length === 0) return "";
  let i = e.slice(0, C),
    o = i.map(item => `/${item.name} (${item.author || "a teammate"})`),
    m = o.length === 1 ? o[0] : `${o.slice(0, -1).join(", ")} and ${o.at(-1)}`,
    a = e.length - i.length;
  return `New from your team: ${m}${a > 0 ? `, plus ${a} more` : ""}`;
}
export { UKt, tsi, nsi, rsi, osi, BKt, ssi };