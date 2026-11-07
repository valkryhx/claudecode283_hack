// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Eo } from "B:/~BUN/root/chunk-b3jc87kv.js";
import { Pm } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Mle, KG, aSn, A6e, DCt, Ser } from "B:/~BUN/root/chunk-cgbh0rpf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function f(i) {
  if (i.length === 0) return Se.dim("  (no skills loaded)");
  let {
      cells: cells,
      widths: widths
    } = aSn(i),
    o = Se.dim(`  ${Mle("skill", widths.name)}  ${Mle("source", widths.source)}  ${KG("context", widths.context)}  ${KG("7d tokens", widths.week)}  ${KG("uses", widths.uses + 1)}  last used`),
    r = i.map((item, index) => {
      let u = cells[index],
        p = `  ${Mle(item.name, widths.name)}  ${Se.dim(Mle(item.source, widths.source))}  ${KG(u.context, widths.context)}  ${KG(u.week, widths.week)}  ${KG(String(item.usageCount), widths.uses)}\xD7  ${u.lastUsed}`;
      return item.usageCount === 0 ? Se.yellow(p) : p;
    }).join(`
`);
  return `${o}
${r}`;
}
async function y(i) {
  let {
      rows: rows,
      unusedOwned: unusedOwned,
      unusedSynced: unusedSynced,
      unusedFromPlugins: unusedFromPlugins,
      unusedFromMcp: unusedFromMcp,
      unusedMcpServers: unusedMcpServers,
      disusedPlugins: disusedPlugins,
      weekTokensNote: weekTokensNote
    } = await Ser(DCt(i)),
    s = [];
  if (s.push(Se.bold("Skills loaded this session")), s.push(""), s.push(f(rows)), rows.length > 0) s.push(""), s.push(Se.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(Se.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(Se.dim(weekTokensNote === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${weekTokensNote}`));
  if (s.push(""), unusedOwned.length > 0) s.push(Se.yellow(`${unusedOwned.length} ${P(unusedOwned.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (unusedSynced.length > 0) s.push(Se.yellow(`${unusedSynced.length} ${P(unusedSynced.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${unusedSynced.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (unusedFromPlugins.length > 0) {
    let n = L(unusedFromPlugins.map(item => item.pluginKey === void 0 ? item.source : Pm(item.pluginKey)));
    s.push(Se.yellow(`${unusedFromPlugins.length} plugin ${P(unusedFromPlugins.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
  }
  if (unusedFromMcp.length > 0) {
    let n = unusedMcpServers.length > 0 ? `, from ${unusedMcpServers.join(", ")}` : "",
      h = unusedMcpServers.length <= 1;
    s.push(Se.yellow(`${unusedFromMcp.length} MCP ${P(unusedFromMcp.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${h ? "that server" : "those servers"} off in /mcp also removes ${h ? "its" : "their"} tools.`));
  }
  if (rows.length > 0 && rows.every(item => item.usageCount > 0)) s.push(Se.green("All loaded skills have been used at least once."));
  if (disusedPlugins.length > 0) {
    s.push(""), s.push(Se.bold("Plugins not used recently")), s.push("");
    for (let n of disusedPlugins) s.push(`  ${Se.yellow(Pm(n.name))}  ${Se.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(Se.dim("  Manage these in /plugin"));
  }
  if (rows.length === 0) c("cli_skill_doctor", "no_user_skills");else if (weekTokensNote !== null) c("cli_skill_doctor", "scan_policy_denied");else g("cli_skill_doctor");
  return s.join(`
`);
}
var T4o = async (i, t) => {
  if (Eo(t.session)) return {
    type: "text",
    value: "Skill usage reports are not available on this connection."
  };
  try {
    let value = await y(t);
    if (Eo(t.session)) return {
      type: "text",
      value: "Skill usage reports are not available on this connection."
    };
    return {
      type: "text",
      value: value
    };
  } catch (error) {
    let o = error instanceof A6e ? error.cause : error;
    if (a(o), m("cli_skill_doctor", error instanceof A6e ? error.featureErrorCode : "render_failed"), Eo(t.session)) return {
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
export { T4o };