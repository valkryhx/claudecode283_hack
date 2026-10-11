// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Po } from "B:/~BUN/root/chunk-6cq25d8x.js";
import { Nm } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ZK, gM, OSt, ESe, NWe, JKt } from "B:/~BUN/root/chunk-cbxkp61s.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function k(r) {
  if (r.length === 0) return pe.dim("  (no skills loaded)");
  let {
      cells: cells,
      widths: widths
    } = OSt(r),
    o = pe.dim(`  ${ZK("skill", widths.name)}  ${ZK("source", widths.source)}  ${gM("context", widths.context)}  ${gM("7d tokens", widths.week)}  ${gM("uses", widths.uses + 1)}  last used`),
    a = r.map((item, index) => {
      let u = cells[index],
        c = `  ${ZK(item.name, widths.name)}  ${pe.dim(ZK(item.source, widths.source))}  ${gM(u.context, widths.context)}  ${gM(u.week, widths.week)}  ${gM(String(item.usageCount), widths.uses)}\xD7  ${u.lastUsed}`;
      return item.usageCount === 0 ? pe.yellow(c) : c;
    }).join(`
`);
  return `${o}
${a}`;
}
async function f(r) {
  let {
      rows: rows,
      unusedOwned: unusedOwned,
      unusedSynced: unusedSynced,
      unusedFromPlugins: unusedFromPlugins,
      unusedFromMcp: unusedFromMcp,
      unusedMcpServers: unusedMcpServers,
      disusedPlugins: disusedPlugins,
      weekTokensNote: weekTokensNote
    } = await JKt(NWe(r)),
    s = [];
  if (s.push(pe.bold("Skills loaded this session")), s.push(""), s.push(k(rows)), rows.length > 0) s.push(""), s.push(pe.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(pe.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(pe.dim(weekTokensNote === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${weekTokensNote}`));
  if (s.push(""), unusedOwned.length > 0) s.push(pe.yellow(`${unusedOwned.length} ${I(unusedOwned.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (unusedSynced.length > 0) s.push(pe.yellow(`${unusedSynced.length} ${I(unusedSynced.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${unusedSynced.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (unusedFromPlugins.length > 0) {
    let n = L(unusedFromPlugins.map(item => item.source));
    s.push(pe.yellow(`${unusedFromPlugins.length} plugin ${I(unusedFromPlugins.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
  }
  if (unusedFromMcp.length > 0) {
    let n = unusedMcpServers.length > 0 ? `, from ${unusedMcpServers.join(", ")}` : "",
      g = unusedMcpServers.length <= 1;
    s.push(pe.yellow(`${unusedFromMcp.length} MCP ${I(unusedFromMcp.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${g ? "that server" : "those servers"} off in /mcp also removes ${g ? "its" : "their"} tools.`));
  }
  if (rows.length > 0 && rows.every(item => item.usageCount > 0)) s.push(pe.green("All loaded skills have been used at least once."));
  if (disusedPlugins.length > 0) {
    s.push(""), s.push(pe.bold("Plugins not used recently")), s.push("");
    for (let n of disusedPlugins) s.push(`  ${pe.yellow(Nm(n.name))}  ${pe.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(pe.dim("  Manage these in /plugin"));
  }
  if (rows.length === 0) p("cli_skill_doctor", "no_user_skills");else if (weekTokensNote !== null) p("cli_skill_doctor", "scan_policy_denied");else _("cli_skill_doctor");
  return s.join(`
`);
}
var Esr = async (r, t) => {
  if (Po(t.session)) return {
    type: "text",
    value: "Skill usage reports are not available on this connection."
  };
  try {
    let value = await f(t);
    if (Po(t.session)) return {
      type: "text",
      value: "Skill usage reports are not available on this connection."
    };
    return {
      type: "text",
      value: value
    };
  } catch (error) {
    let o = error instanceof ESe ? error.cause : error;
    if (d(o), m("cli_skill_doctor", error instanceof ESe ? error.featureErrorCode : "render_failed"), Po(t.session)) return {
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
    };
  }
};
export { Esr };