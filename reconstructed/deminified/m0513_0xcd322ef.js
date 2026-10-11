// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { iye, v1, x, ps, Is, Bu } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { Fn, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
var F = [".claude/skills", ".claude/commands"],
  P = 3,
  w = 100;
function C(n) {
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
        let o = e.at(-1);
        if (!o.endsWith(".md")) return null;
        if (/^skill\.md$/i.test(o)) return e.length < 4 ? null : {
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
class y {
  inFlight = void 0;
  resolved = void 0;
  get(n) {
    return this.inFlight ??= this.scan(n), this.inFlight;
  }
  teammateAuthorOf(n) {
    return this.resolved?.find(e => !e.byCurrentUser && e.name === n)?.author || null;
  }
  async scan(n) {
    if (!ps()) return [];
    let cwd = Fn(oe());
    if (!cwd) return [];
    let [{
      stdout: stdout,
      code: code
    }, l] = await Promise.all([Ve(yt(), ["-c", "core.quotePath=false", "-c", "core.fsmonitor=", "-c", "core.hooksPath=/dev/null", "-c", "core.pager=", "-c", "log.showSignature=false", "log", "--since=7.days", "--diff-filter=A", "--name-only", "--format=COMMIT%x00%an%x00%ae", "--", ...F], {
      cwd: cwd,
      timeout: 5000
    }), iye()]);
    if (code !== 0) return [];
    let a = l?.toLowerCase(),
      s = [],
      f = new Set(),
      author = "",
      u = "";
    for (let path of stdout.split(`
`)) {
      if (path.startsWith("COMMIT\x00")) {
        let m = path.split("\x00");
        author = m[1] ?? "", u = (m[2] ?? "").toLowerCase();
        continue;
      }
      if (!path || f.has(path)) continue;
      f.add(path);
      let d = C(path);
      if (d) {
        let byCurrentUser = Boolean(a && u === a);
        s.push({
          path: path,
          author: author,
          byCurrentUser: byCurrentUser,
          ...d
        });
      }
    }
    this.resolved = s;
    let g = Is(),
      b = new Set(g.seenTeamArtifactPaths ?? []),
      hasUnseenTeamArtifacts = s.some(item => !item.byCurrentUser && !b.has(item.path)),
      E = new Set(g.loggedAuthoredArtifactPaths ?? []),
      h = s.filter(item => item.byCurrentUser && !E.has(item.path));
    for (let r of h) i("tengu_skill_authored", {
      is_skill: r.kind === "skill"
    });
    try {
      await Bu(r => {
        let d = r.hasUnseenTeamArtifacts === hasUnseenTeamArtifacts;
        if (h.length === 0 && d) return r;
        let m = d ? r : {
          ...r,
          hasUnseenTeamArtifacts: hasUnseenTeamArtifacts
        };
        if (h.length === 0) return m;
        let U = m.loggedAuthoredArtifactPaths ?? [],
          k = h.map(item => item.path),
          j = new Set(k),
          loggedAuthoredArtifactPaths = [...U.filter(item => !j.has(item)), ...k].slice(-w);
        return {
          ...m,
          loggedAuthoredArtifactPaths: loggedAuthoredArtifactPaths
        };
      }, n);
    } catch (error) {
      t(`team-artifact eligibility persist failed: ${error}`);
    }
    return s;
  }
}
var v = new Nt(() => new y());
function T(n, e) {
  return v.of(n).get(e);
}
function sZe(n, e, o) {
  if (e !== "projectSettings" || !x("tengu_tussock_oriole", !1)) return null;
  return v.of(n).teammateAuthorOf(o);
}
function _to(n, e) {
  if (v1()) T(n, e).catch(() => {});
  if (!x("tengu_tussock_oriole", !1)) return !1;
  return Is().hasUnseenTeamArtifacts === !0;
}
async function bto(n, e) {
  let o = await T(n, e);
  if (o.length === 0) return [];
  let c = new Set(Is().seenTeamArtifactPaths ?? []);
  return o.filter(item => !item.byCurrentUser && !c.has(item.path));
}
async function Sto(n, e) {
  let c = (await T(n, e)).filter(item => !item.byCurrentUser).map(item => item.path),
    l = new Set(c);
  await Bu(a => {
    let s = a.seenTeamArtifactPaths ?? [],
      seenTeamArtifactPaths = [...s.filter(item => !l.has(item)), ...c].slice(-w);
    if (seenTeamArtifactPaths.length === s.length && seenTeamArtifactPaths.every((item, index) => item === s[index]) && a.hasUnseenTeamArtifacts === !1) return a;
    return {
      ...a,
      seenTeamArtifactPaths: seenTeamArtifactPaths,
      hasUnseenTeamArtifacts: !1
    };
  }, e);
}
function wto(n) {
  let e = {
    skill: 0,
    command: 0
  };
  for (let o of n) e[o.kind]++;
  _("tips_team_artifact_show"), i("tengu_team_artifact_tip_shown", {
    skill_count: e.skill,
    command_count: e.command,
    overflow_count: Math.max(0, n.length - P)
  });
}
function iZe(n, e) {
  if (n !== "projectSettings") return {};
  return {
    via_team_tip: (Is().seenTeamArtifactPaths ?? []).some(item => C(item)?.name === e)
  };
}
function vto(n) {
  let e = n.filter(item => !item.byCurrentUser);
  if (e.length === 0) return "";
  let o = e.slice(0, P),
    c = o.map(item => `/${item.name} (${item.author || "a teammate"})`),
    l = c.length === 1 ? c[0] : `${c.slice(0, -1).join(", ")} and ${c.at(-1)}`,
    a = e.length - o.length;
  return `New from your team: ${l}${a > 0 ? `, plus ${a} more` : ""}`;
}
export { sZe, _to, bto, Sto, wto, iZe, vto };