// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bo } from "B:/~BUN/root/chunk-wje8pvrc.js";
import { yy } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { S7, z$, $4t, ENe, Sot, xRn } from "B:/~BUN/root/chunk-qzbd8k9a.js";
function f(r) {
  if (r.length === 0) return he.dim("  (no skills loaded)");
  let {
      cells: cells,
      widths: widths
    } = $4t(r),
    o = he.dim(`  ${S7("skill", widths.name)}  ${S7("source", widths.source)}  ${z$("context", widths.context)}  ${z$("7d tokens", widths.week)}  ${z$("uses", widths.uses + 1)}  last used`),
    a = r.map((item, index) => {
      let u = cells[index],
        c = `  ${S7(item.name, widths.name)}  ${he.dim(S7(item.source, widths.source))}  ${z$(u.context, widths.context)}  ${z$(u.week, widths.week)}  ${z$(String(item.usageCount), widths.uses)}\xD7  ${u.lastUsed}`;
      return item.usageCount === 0 ? he.yellow(c) : c;
    }).join(`
`);
  return `${o}
${a}`;
}
async function y(r) {
  let {
      rows: rows,
      unusedOwned: unusedOwned,
      unusedSynced: unusedSynced,
      unusedFromPlugins: unusedFromPlugins,
      unusedFromMcp: unusedFromMcp,
      unusedMcpServers: unusedMcpServers,
      disusedPlugins: disusedPlugins,
      weekTokensNote: weekTokensNote
    } = await xRn(Sot(r)),
    s = [];
  if (s.push(he.bold("Skills loaded this session")), s.push(""), s.push(f(rows)), rows.length > 0) s.push(""), s.push(he.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(he.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(he.dim(weekTokensNote === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${weekTokensNote}`));
  if (s.push(""), unusedOwned.length > 0) s.push(he.yellow(`${unusedOwned.length} ${O(unusedOwned.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (unusedSynced.length > 0) s.push(he.yellow(`${unusedSynced.length} ${O(unusedSynced.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${unusedSynced.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (unusedFromPlugins.length > 0) {
    let n = L(unusedFromPlugins.map(item => item.source));
    s.push(he.yellow(`${unusedFromPlugins.length} plugin ${O(unusedFromPlugins.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
  }
  if (unusedFromMcp.length > 0) {
    let n = unusedMcpServers.length > 0 ? `, from ${unusedMcpServers.join(", ")}` : "",
      k = unusedMcpServers.length <= 1;
    s.push(he.yellow(`${unusedFromMcp.length} MCP ${O(unusedFromMcp.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${k ? "that server" : "those servers"} off in /mcp also removes ${k ? "its" : "their"} tools.`));
  }
  if (rows.length > 0 && rows.every(item => item.usageCount > 0)) s.push(he.green("All loaded skills have been used at least once."));
  if (disusedPlugins.length > 0) {
    s.push(""), s.push(he.bold("Plugins not used recently")), s.push("");
    for (let n of disusedPlugins) s.push(`  ${he.yellow(yy(n.name))}  ${he.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(he.dim("  Manage these in /plugin"));
  }
  if (rows.length === 0) p("cli_skill_doctor", "no_user_skills");else if (weekTokensNote !== null) p("cli_skill_doctor", "scan_policy_denied");else g("cli_skill_doctor");
  return s.join(`
`);
}
var rJr = async (r, t) => {
  if (bo(t.session)) return {
    type: "text",
    value: "Skill usage reports are not available on this connection."
  };
  try {
    let value = await y(t);
    if (bo(t.session)) return {
      type: "text",
      value: "Skill usage reports are not available on this connection."
    };
    return {
      type: "text",
      value: value
    };
  } catch (error) {
    let o = error instanceof ENe ? error.cause : error;
    if (l(o), m("cli_skill_doctor", error instanceof ENe ? error.featureErrorCode : "render_failed"), bo(t.session)) return {
      type: "text",
      value: "Couldn't compute skill usage.",
      outcome: {
        kind: "failed"
      }
    };
    return {
      type: "text",
      value: `Couldn't compute skill usage. Run with --debug for details. (${d(o)})`,
      outcome: {
        kind: "failed"
      }
    };
  }
};
export { rJr };