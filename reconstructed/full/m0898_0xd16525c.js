// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Po
} from "B:/~BUN/root/chunk-6cq25d8x.js";
import {
  Nm
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  ZK,
  gM,
  OSt,
  ESe,
  NWe,
  JKt
} from "B:/~BUN/root/chunk-cbxkp61s.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";

function k(r) {
  if (r.length === 0) return pe.dim("  (no skills loaded)");
  let {
    cells: t,
    widths: e
  } = OSt(r), o = pe.dim(`  ${ZK("skill",e.name)}  ${ZK("source",e.source)}  ${gM("context",e.context)}  ${gM("7d tokens",e.week)}  ${gM("uses",e.uses+1)}  last used`), a = r.map((i, h) => {
    let u = t[h],
      c = `  ${ZK(i.name,e.name)}  ${pe.dim(ZK(i.source,e.source))}  ${gM(u.context,e.context)}  ${gM(u.week,e.week)}  ${gM(String(i.usageCount),e.uses)}\xD7  ${u.lastUsed}`;
    return i.usageCount === 0 ? pe.yellow(c) : c
  }).join(`
`);
  return `${o}
${a}`
}
async function f(r) {
  let {
    rows: t,
    unusedOwned: e,
    unusedSynced: o,
    unusedFromPlugins: a,
    unusedFromMcp: i,
    unusedMcpServers: h,
    disusedPlugins: u,
    weekTokensNote: c
  } = await JKt(NWe(r)), s = [];
  if (s.push(pe.bold("Skills loaded this session")), s.push(""), s.push(k(t)), t.length > 0) s.push(""), s.push(pe.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(pe.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(pe.dim(c === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${c}`));
  if (s.push(""), e.length > 0) s.push(pe.yellow(`${e.length} ${I(e.length,"skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (o.length > 0) s.push(pe.yellow(`${o.length} ${I(o.length,"skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length===1?"it":"them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (a.length > 0) {
    let n = L(a.map((g) => g.source));
    s.push(pe.yellow(`${a.length} plugin ${I(a.length,"skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length===1?"the plugin":"those plugins"} in /plugin.`))
  }
  if (i.length > 0) {
    let n = h.length > 0 ? `, from ${h.join(", ")}` : "",
      g = h.length <= 1;
    s.push(pe.yellow(`${i.length} MCP ${I(i.length,"skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${g?"that server":"those servers"} off in /mcp also removes ${g?"its":"their"} tools.`))
  }
  if (t.length > 0 && t.every((n) => n.usageCount > 0)) s.push(pe.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    s.push(""), s.push(pe.bold("Plugins not used recently")), s.push("");
    for (let n of u) s.push(`  ${pe.yellow(Nm(n.name))}  ${pe.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(pe.dim("  Manage these in /plugin"))
  }
  if (t.length === 0) p("cli_skill_doctor", "no_user_skills");
  else if (c !== null) p("cli_skill_doctor", "scan_policy_denied");
  else _("cli_skill_doctor");
  return s.join(`
`)
}
var Esr = async (r, t) => {
  if (Po(t.session)) return {
    type: "text",
    value: "Skill usage reports are not available on this connection."
  };
  try {
    let e = await f(t);
    if (Po(t.session)) return {
      type: "text",
      value: "Skill usage reports are not available on this connection."
    };
    return {
      type: "text",
      value: e
    }
  } catch (e) {
    let o = e instanceof ESe ? e.cause : e;
    if (d(o), m("cli_skill_doctor", e instanceof ESe ? e.featureErrorCode : "render_failed"), Po(t.session)) return {
      type: "text",
      value: "Couldn't compute skill usage.",
      outcome: {
        kind: "failed"
      }
    };
    return {
      type: "text",
      value: `Couldn't compute skill usage. Run with --debug for details. (${l(o)})`,
      outcome: {
        kind: "failed"
      }
    }
  }
};
export {
  Esr
};
