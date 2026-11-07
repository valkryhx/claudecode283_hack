// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Se
} from "B:/~BUN/root/chunk-x24hm796.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Eo
} from "B:/~BUN/root/chunk-b3jc87kv.js";
import {
  Pm
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Mle,
  KG,
  aSn,
  A6e,
  DCt,
  Ser
} from "B:/~BUN/root/chunk-cgbh0rpf.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function f(i) {
  if (i.length === 0) return Se.dim("  (no skills loaded)");
  let {
    cells: t,
    widths: e
  } = aSn(i), o = Se.dim(`  ${Mle("skill",e.name)}  ${Mle("source",e.source)}  ${KG("context",e.context)}  ${KG("7d tokens",e.week)}  ${KG("uses",e.uses+1)}  last used`), r = i.map((l, k) => {
    let u = t[k],
      p = `  ${Mle(l.name,e.name)}  ${Se.dim(Mle(l.source,e.source))}  ${KG(u.context,e.context)}  ${KG(u.week,e.week)}  ${KG(String(l.usageCount),e.uses)}\xD7  ${u.lastUsed}`;
    return l.usageCount === 0 ? Se.yellow(p) : p
  }).join(`
`);
  return `${o}
${r}`
}
async function y(i) {
  let {
    rows: t,
    unusedOwned: e,
    unusedSynced: o,
    unusedFromPlugins: r,
    unusedFromMcp: l,
    unusedMcpServers: k,
    disusedPlugins: u,
    weekTokensNote: p
  } = await Ser(DCt(i)), s = [];
  if (s.push(Se.bold("Skills loaded this session")), s.push(""), s.push(f(t)), t.length > 0) s.push(""), s.push(Se.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(Se.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(Se.dim(p === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${p}`));
  if (s.push(""), e.length > 0) s.push(Se.yellow(`${e.length} ${P(e.length,"skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (o.length > 0) s.push(Se.yellow(`${o.length} ${P(o.length,"skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length===1?"it":"them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (r.length > 0) {
    let n = L(r.map((h) => h.pluginKey === void 0 ? h.source : Pm(h.pluginKey)));
    s.push(Se.yellow(`${r.length} plugin ${P(r.length,"skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length===1?"the plugin":"those plugins"} in /plugin.`))
  }
  if (l.length > 0) {
    let n = k.length > 0 ? `, from ${k.join(", ")}` : "",
      h = k.length <= 1;
    s.push(Se.yellow(`${l.length} MCP ${P(l.length,"skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${h?"that server":"those servers"} off in /mcp also removes ${h?"its":"their"} tools.`))
  }
  if (t.length > 0 && t.every((n) => n.usageCount > 0)) s.push(Se.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    s.push(""), s.push(Se.bold("Plugins not used recently")), s.push("");
    for (let n of u) s.push(`  ${Se.yellow(Pm(n.name))}  ${Se.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(Se.dim("  Manage these in /plugin"))
  }
  if (t.length === 0) c("cli_skill_doctor", "no_user_skills");
  else if (p !== null) c("cli_skill_doctor", "scan_policy_denied");
  else g("cli_skill_doctor");
  return s.join(`
`)
}
var T4o = async (i, t) => {
  if (Eo(t.session)) return {
    type: "text",
    value: "Skill usage reports are not available on this connection."
  };
  try {
    let e = await y(t);
    if (Eo(t.session)) return {
      type: "text",
      value: "Skill usage reports are not available on this connection."
    };
    return {
      type: "text",
      value: e
    }
  } catch (e) {
    let o = e instanceof A6e ? e.cause : e;
    if (a(o), m("cli_skill_doctor", e instanceof A6e ? e.featureErrorCode : "render_failed"), Eo(t.session)) return {
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
    }
  }
};
export {
  T4o
};
