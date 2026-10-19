// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at,
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  lMe,
  uW,
  E,
  Ms,
  Sa,
  fg
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  ATe,
  qm,
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  yr,
  Ot
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  ct
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
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
    case "commands": {
      let o = e.at(-1);
      if (!o.endsWith(".md")) return null;
      if (/^skill\.md$/i.test(o)) return e.length < 4 ? null : {
        kind: "command",
        name: e.slice(2, -1).join(":")
      };
      return {
        kind: "command",
        name: e.slice(2).join(":").slice(0, -3)
      }
    }
    default:
      return null
  }
}
class v {
  inFlight = void 0;
  resolved = void 0;
  get(n) {
    return this.inFlight ??= this.scan(n), this.inFlight
  }
  teammateAuthorOf(n) {
    return this.resolved?.find((e) => !e.byCurrentUser && e.name === n)?.author || null
  }
  async scan(n) {
    if (!Ms()) return [];
    let e = ATe(ce(), ke()),
      o = yr(e);
    if (!o) return [];
    let [{
      stdout: a,
      code: m
    }, s] = await Promise.all([ct(Ot(), ["-c", "core.quotePath=false", "-c", "core.fsmonitor=", "-c", "core.hooksPath=/dev/null", "-c", "core.pager=", "-c", "log.showSignature=false", "log", "--since=7.days", "--diff-filter=A", "--name-only", "--format=COMMIT%x00%an%x00%ae", "--", ...L], {
      cwd: o,
      timeout: 5000
    }), qm(e, lMe)]);
    if (m !== 0) return [];
    let c = s?.toLowerCase(),
      l = [],
      A = new Set,
      u = "",
      h = "";
    for (let r of a.split(`
`)) {
      if (r.startsWith("COMMIT\x00")) {
        let f = r.split("\x00");
        u = f[1] ?? "", h = (f[2] ?? "").toLowerCase();
        continue
      }
      if (!r || A.has(r)) continue;
      A.add(r);
      let d = y(r);
      if (d) {
        let f = Boolean(c && h === c);
        l.push({
          path: r,
          author: u,
          byCurrentUser: f,
          ...d
        })
      }
    }
    this.resolved = l;
    let k = Sa(),
      b = new Set(k.seenTeamArtifactPaths ?? []),
      w = l.some((r) => !r.byCurrentUser && !b.has(r.path)),
      U = new Set(k.loggedAuthoredArtifactPaths ?? []),
      p = l.filter((r) => r.byCurrentUser && !U.has(r.path));
    for (let r of p) i("tengu_skill_authored", {
      is_skill: r.kind === "skill"
    });
    try {
      await fg((r) => {
        let d = r.hasUnseenTeamArtifacts === w;
        if (p.length === 0 && d) return r;
        let f = d ? r : {
          ...r,
          hasUnseenTeamArtifacts: w
        };
        if (p.length === 0) return f;
        let j = f.loggedAuthoredArtifactPaths ?? [],
          P = p.map((T) => T.path),
          B = new Set(P),
          F = [...j.filter((T) => !B.has(T)), ...P].slice(-_);
        return {
          ...f,
          loggedAuthoredArtifactPaths: F
        }
      }, n)
    } catch (r) {
      t(`team-artifact eligibility persist failed: ${r}`)
    }
    return l
  }
}
var x = new at(() => new v);

function S(n, e) {
  return x.of(n).get(e)
}

function GTt(n, e, o) {
  if (e !== "projectSettings" || !E("tengu_tussock_oriole", !1)) return null;
  return x.of(n).teammateAuthorOf(o)
}

function vos(n, e) {
  if (uW()) S(n, e).catch(() => {});
  if (!E("tengu_tussock_oriole", !1)) return !1;
  return Sa().hasUnseenTeamArtifacts === !0
}
async function kos(n, e) {
  let o = await S(n, e);
  if (o.length === 0) return [];
  let a = new Set(Sa().seenTeamArtifactPaths ?? []);
  return o.filter((m) => !m.byCurrentUser && !a.has(m.path))
}
async function Eos(n, e) {
  let a = (await S(n, e)).filter((s) => !s.byCurrentUser).map((s) => s.path),
    m = new Set(a);
  await fg((s) => {
    let c = s.seenTeamArtifactPaths ?? [],
      l = [...c.filter((u) => !m.has(u)), ...a].slice(-_);
    if (l.length === c.length && l.every((u, h) => u === c[h]) && s.hasUnseenTeamArtifacts === !1) return s;
    return {
      ...s,
      seenTeamArtifactPaths: l,
      hasUnseenTeamArtifacts: !1
    }
  }, e)
}

function Tos(n) {
  let e = {
    skill: 0,
    command: 0
  };
  for (let o of n) e[o.kind]++;
  g("tips_team_artifact_show"), i("tengu_team_artifact_tip_shown", {
    skill_count: e.skill,
    command_count: e.command,
    overflow_count: Math.max(0, n.length - C)
  })
}

function VTt(n, e) {
  if (n !== "projectSettings") return {};
  return {
    via_team_tip: (Sa().seenTeamArtifactPaths ?? []).some((a) => y(a)?.name === e)
  }
}

function Cos(n) {
  let e = n.filter((c) => !c.byCurrentUser);
  if (e.length === 0) return "";
  let o = e.slice(0, C),
    a = o.map((c) => `/${c.name} (${c.author||"a teammate"})`),
    m = a.length === 1 ? a[0] : `${a.slice(0,-1).join(", ")} and ${a.at(-1)}`,
    s = e.length - o.length;
  return `New from your team: ${m}${s>0?`, plus ${s} more`:""}`
}
export {
  GTt,
  vos,
  kos,
  Eos,
  Tos,
  VTt,
  Cos
};
