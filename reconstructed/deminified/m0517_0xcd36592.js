// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Vm } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { aA, Te, nM, _re, kK, DBe, W$ } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ft } from "B:/~BUN/root/chunk-msy8grqx.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { gce, iHt, dYe, M0, co, n2, YMo, Sd, pD, ro, $r } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Gc } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Wg } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { oH, hu } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Jq, IJ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { EY } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ga } from "B:/~BUN/root/chunk-fszjvjk0.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { vc, wle, ks, SX, PR } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { JAo, xHe, KDt } from "B:/~BUN/root/chunk-hfe3cbfz.js";
import { Tln } from "B:/~BUN/root/chunk-hhgrczac.js";
import { pCe } from "B:/~BUN/root/chunk-j14vfkmm.js";
import { aet } from "B:/~BUN/root/chunk-0mn860zt.js";
import { Zs, w9, mSo, yae } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { lk, Vtt, q7, chr, _W, MG, cCt, Y7, mMe, ove, _Jt, vco, wCt, v8, uw, vM, PO, ynt, DP, EQt, TQt, $nt, Ja, KG, uLn, BMe, YG, crt, HP, bZ, SZ, rB, QRt, kie, TAt, CAt, ty, Ce, bf, vg, BO, lB, Svr, Sp, Sho, Wxt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { TR as name, js } from "B:/~BUN/root/chunk-5nfpvvfh.js";
import { Co, Gin, Yat, WB, Vee, Uge } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { Boe, i6t, rk, mG, ST, xOe, JSe } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { sZe, iZe } from "B:/~BUN/root/chunk-4005qhef.js";
import { k3t, E3t, T3t, jar, Jwt } from "B:/~BUN/root/chunk-6x8k31zb.js";
import { Z3t } from "B:/~BUN/root/chunk-y96pqvt2.js";
import { uin, ba } from "B:/~BUN/root/chunk-na2t7g12.js";
import { Ni, Oge } from "B:/~BUN/root/chunk-aqngsaqg.js";
import { qee } from "B:/~BUN/root/chunk-z9xwt6re.js";
import { IS } from "B:/~BUN/root/chunk-xvp1x16p.js";
import { ycn } from "B:/~BUN/root/chunk-hyp140x7.js";
import { VCe, xdn, qF, fOo, mOo, YX, HS, xd } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { o, M, C, u, Qe, $e, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function Me() {
  return M0() === "default" ? " (use the Agent tool instead)" : "";
}
function Pe() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${uw() && ba() ? `\`find\`/${ro}, \`grep\`/${$r}, and ${at}` : `${ro}, ${$r}, and ${at}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${js} if you need to clarify approaches
6. Exit plan mode with ${IS} when ready to implement

`;
}
function Re() {
  let e = Me();
  return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${js} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${Pe()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`;
}
function ge() {
  return Re();
}
var Oe = f(() => Qe({})),
  Ne = f(() => u({
    message: o().describe("Confirmation that plan mode was entered")
  })),
  Pqt = Ft({
    name: name,
    searchHint: "switch to plan mode to design an approach before coding",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt() {
      return ge();
    },
    get inputSchema() {
      return Oe();
    },
    get outputSchema() {
      return Ne();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !0,
    isEnabled() {
      return mG.isEnabled();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      return {
        async call(n) {
          if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
          return _re(e.permissions().mode, "plan"), e.setToolPermissionContext(s => vc(aet(s), {
            type: "setMode",
            mode: "plan",
            destination: "session"
          })), {
            data: {
              message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      message: message
    }, tool_use_id) {
      return {
        type: "tool_result",
        content: `${message}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${js} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${IS} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: tool_use_id
      };
    }
  });
var Ue = new Set(["cli"]),
  De = new Set(["local-desktop-app-uploads"]);
function Fe(e) {
  if (e.loadedFrom !== "plugin" || e.pluginInfo === void 0) return !1;
  if (e.pluginInfo.accountSkillsWrapper === !0) return !1;
  let {
      repository: repository
    } = e.pluginInfo,
    s = xd(repository);
  if (s === void 0 || repository.lastIndexOf("@") === 0) return !1;
  let r = KDt(s.trim());
  if (r === "" || Jq(r) || xHe(s) || De.has(r)) return !1;
  let g = oH();
  if (g === void 0 || !Ue.has(g)) return !1;
  return JAo();
}
function le(e) {
  let n = fOo(e);
  return [...(n.length > 0 && Fe(e) ? [] : n), ...mOo(e)];
}
function he(e) {
  let n = n2(e.name),
    s = L(le(e).map(n2)).filter(item => item !== n);
  return s.length ? s : void 0;
}
function ae(e) {
  let name_2 = e.startsWith("/") ? e.substring(1) : e;
  return name_2.endsWith(":*") || name_2.endsWith(" *") ? {
    name: name_2,
    prefix: name_2.slice(0, -2)
  } : {
    name: name_2
  };
}
function te(e, n) {
  let {
    name: name_3,
    prefix: prefix
  } = ae(e);
  return name_3 === n || prefix !== void 0 && n.startsWith(prefix);
}
function ke(e, n) {
  let {
    prefix: prefix_2
  } = ae(e);
  if (prefix_2 === void 0) return te(e, n);
  let r = prefix_2.toLowerCase(),
    g = VCe.includes(r),
    a = xdn(r);
  if (!g && !a) return !xdn(n.toLowerCase()) && te(e, n);
  return !g && n === prefix_2 || n.startsWith(`${prefix_2}:`);
}
function ue(e, n, s) {
  let {
      ordinary: ordinary,
      packaging: packaging
    } = Le(n, s),
    a = Be.exec(e);
  if (a !== null) {
    let h = a[1].trim();
    if (ordinary.some(item => EY(h, item)) || (!h.includes("*") || hu()) && packaging.some(item => EY(h, item))) return !0;
  }
  return ordinary.some(item => te(e, item)) || packaging.some(item => {
    if (!te(e, item)) return !1;
    let {
      prefix: prefix_3
    } = ae(e);
    return prefix_3 === void 0 || prefix_3 === item || hu();
  });
}
var Be = /^\s*skill\s*:(.*)$/s;
function Le(e, n) {
  if (n === void 0) return {
    ordinary: [e],
    packaging: []
  };
  let s = Co(n);
  return {
    ordinary: [e, n.name, s, ...(n.aliases ?? []), ...(n.type === "prompt" && n.unqualifiedName != null ? [n.unqualifiedName] : [])],
    packaging: le(n)
  };
}
function ye(e, n, s) {
  let r = s && mMe(s),
    g = [n, ...(s !== void 0 ? [s.name] : []), ...(r !== void 0 ? [r] : [])],
    a = g.some(item => te(e, item));
  if (!Uge()) return a ? "allow" : "no-match";
  let h = s !== void 0 && Vee(s),
    d = g.some(item => ke(e, item));
  if (g.some(item => ke(e, item) && (h || !WB(item)))) return "allow";
  if (!a) return "no-match";
  return d ? "held-back-nonholder" : "held-back-boundary";
}
function Se(e, n, s) {
  let {
      prefix: prefix_4
    } = ae(e),
    g = prefix_4?.toLowerCase(),
    a = g !== void 0 ? VCe.includes(g) || xdn(g) : xdn(e.toLowerCase()),
    h = Yat(n) ?? n,
    d = a ? `Skill(${e}) only covers skills synced from your claude.ai account.` : `Skill(${e}) does not cover "${h}:" names, which are reserved for skills synced from your claude.ai account.`;
  switch (s.kind) {
    case "nonholder":
      return `${d} ${n} ${s.pluginName !== void 0 ? `comes from the plugin "${s.pluginName}"` : "is not synced"}, so no rule for that name can pre-approve it; it needs approval each time.`;
    case "boundary":
      return g !== void 0 && VCe.includes(g) ? `Skill(${e}) only covers names starting with "${prefix_4}:". Add Skill(${n}) to allow ${n} without asking.` : a ? `Skill(${e}) only covers ${prefix_4} and names starting with "${prefix_4}:". Add Skill(${n}) to allow ${n} without asking.` : `${d} Add Skill(${n}) to allow ${n} without asking.`;
  }
}
function de(e, n = !1) {
  if (!Ni()) return `Ask the user to run /${e} themselves \u2014 it cannot be invoked via the ${co} tool.`;
  return n ? `It cannot be invoked via the ${co} tool in this session, by the coordinator or by workers \u2014 the user can run /${e} by typing it themselves.` : `It cannot be invoked via the ${co} tool in this session, by the coordinator or by workers \u2014 tell the user /${e} is not available here.`;
}
function Iqt(e, n) {
  let {
    commandName: commandName,
    userTypedThisTurn: userTypedThisTurn,
    isMainSession: isMainSession,
    permissionContext: permissionContext
  } = n;
  if (e.type === "prompt" && e.loadDefinition !== void 0 && !userTypedThisTurn) return {
    reason: "not_loaded",
    message: `Skill ${commandName} could not be loaded. Proceed without it.`,
    errorCode: 10
  };
  if (e.disableModelInvocation && !userTypedThisTurn) return {
    reason: "disable_model_invocation",
    message: `Skill ${commandName} cannot be used with ${co} tool due to disable-model-invocation. ${de(commandName)} Do not replicate this skill's workflow by other means \u2014 it is reserved for explicit user invocation.`,
    errorCode: 4
  };
  if (isMainSession) {
    let d = W$();
    if (d !== void 0 && w9([e], d).length === 0) return {
      reason: "not_allowlisted",
      message: `Skill ${commandName} is not in this session's skills allowlist`,
      errorCode: 8
    };
  }
  let h = BMe(e);
  if (h === "off" || h === "user-invocable-only" && !userTypedThisTurn) {
    let d = Je(),
      S = ycn(e, d),
      l = uLn(e),
      v = l === "user-invocable-only" || l === "off",
      O = "by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var";
    return {
      reason: "override_disabled",
      message: `Skill ${commandName} is disabled for model invocation ${S ? v ? "by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var, and by an explicit skillOverrides entry" : "by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var" : "in skillOverrides settings"}`,
      errorCode: 7,
      killSwitchOnly: S && !v
    };
  }
  if (e.type !== "prompt") {
    let d = e.type === "local-jsx" ? "UI" : "built-in CLI";
    return {
      reason: "not_prompt_type",
      message: `${commandName} is a ${d} command, not a skill. ${de(commandName, !0)}`,
      errorCode: 5
    };
  }
  if (e.isMcp && e.loadedFrom !== "mcp") return {
    reason: "mcp_prompt",
    message: `${commandName} is an MCP prompt, not a skill. ${de(commandName)}`,
    errorCode: 12
  };
  if (permissionContext !== void 0) {
    let rule = ks(permissionContext, {
      name: co
    }) ?? ks(permissionContext, {
      name: n2(e.name),
      aliasSkillToolNames: YMo(e),
      packagingAliasSkillToolNames: he(e)
    });
    if (rule) return {
      reason: "deny_rule",
      message: "Skill execution blocked by permission rules",
      errorCode: 11,
      rule: rule
    };
    let S = PR(permissionContext, co, "deny");
    for (let [l, rule_2] of S.entries()) if (ue(l, commandName, e)) return {
      reason: "deny_rule",
      message: "Skill execution blocked by permission rules",
      errorCode: 11,
      rule: rule_2
    };
  }
  return null;
}
function qJr(e) {
  return pCe(e) || YX(e.source);
}
function yEn(e) {
  switch (e.type) {
    case "generic-error":
    case "manifest-validation-error":
    case "path-not-found":
      return e.plugin === void 0 ? e.path : void 0;
    default:
      return;
  }
}
var ze = {
  "path-not-found": "path not found",
  "manifest-validation-error": "manifest invalid",
  "dependency-unsatisfied": "unmet dependency",
  "dependency-version-unsatisfied": "unmet dependency"
};
function We(e) {
  return e.flatMap(item => {
    let category = ze[item.type] ?? "load error",
      r = yEn(item);
    if (r !== void 0) {
      let g = item.type === "generic-error" ? item.manifestName : void 0,
        a = Wxt(r, HS(item.source) ?? "");
      return [{
        names: g ? [g, a] : [a],
        category: category
      }];
    }
    return pCe(item) ? [{
      names: [item.plugin],
      category: category
    }] : [];
  });
}
function be(e, n, s) {
  let r = We(n);
  if (r.length === 0) return;
  let g = e.indexOf(":"),
    a = g > 0 ? e.slice(0, g) : void 0,
    h = a === void 0 || s.has(a) ? void 0 : r.find(item => item.names.includes(a));
  if (h !== void 0) return `The plugin "${a}" did not load in this session (${h.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
  let d = L(r.map(item => item.category)).join(", ");
  return `${r.length === 1 ? `1 plugin did not load in this session (${d}); if this skill belongs to it` : `${r.length} plugins did not load in this session (${d}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`;
}
function renderToolUseMessage({
  skill: skill
}, {
  commands: commands,
  teammateAuthorOf: teammateAuthorOf
}) {
  if (!skill) return null;
  let r = skill.trim(),
    g = r.startsWith("/") ? r.substring(1) : r,
    a = commands?.find(S => S.name === g),
    h = a?.loadedFrom === "commands_DEPRECATED" ? `/${g}` : g,
    d = teammateAuthorOf?.(a?.type === "prompt" ? a.source : void 0, g) ?? null;
  return d ? `${h} \xB7 by ${d}` : h;
}
function je(e) {
  let n = new Map(),
    s = r => Boolean(r.disableModelInvocation) || YG(r);
  for (let r of e) {
    let g = n.get(r.name);
    if (g === void 0 || s(g) && !s(r) && r.type === "prompt" && !(Vee(g) && !Vee(r))) n.set(r.name, r);
  }
  return [...n.values()];
}
function qe(e) {
  if (!Ga().claim(`skill_reserved_namespace_rule_held_back_${e}`)) return;
  p("skill_reserved_namespace", e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary", {
    interactive: !Te(),
    host_prompt: nM() !== void 0
  });
}
async function oe(e) {
  let n = await Sp(aA(), e.storageV5),
    s = e.mcpCommands(),
    r = s.filter(item => item.type === "prompt" && item.loadedFrom === "mcp"),
    g = yae(),
    a = rB(n, s);
  return bZ(je([...a, ...g, ...r]));
}
function we(e, n) {
  let s = e.filter(SZ);
  return n ? w9(s, W$()) : s;
}
function Ie(e, n) {
  return e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? !1);
}
function ie(e, n, s) {
  let r = s.agentId === void 0,
    command = Zs(e, n);
  if (command !== void 0) {
    let h = Ie(command, e) ? we(n, r) : [];
    if (h.includes(command)) {
      let candidates = h.filter(item => Ie(item, e) || item.type === "prompt" && item.loadedFrom !== "syncedSkills" && item.name.endsWith(`:${e}`));
      if (candidates.length > 1) return {
        kind: "ambiguous",
        command: void 0,
        candidates: candidates
      };
    }
    return {
      kind: "exact",
      command: command
    };
  }
  if (Svr(e) || n.some(item => crt(item, e))) return {
    kind: "none",
    command: void 0
  };
  let a = mSo(e, we(n, r));
  switch (a.kind) {
    case "unique":
      return {
        kind: "suggestion",
        command: void 0,
        suggestion: a.command
      };
    case "ambiguous":
      return {
        kind: "ambiguous",
        command: void 0,
        candidates: a.candidates
      };
    case "none":
      return {
        kind: "none",
        command: void 0
      };
  }
}
function He(e, n) {
  if (n.agentId !== void 0) return !1;
  let regExp = new RegExp(`(?<!\\S)/${Gc(e)}(?=$|\\s)`);
  for (let r = n.messages.length - 1; r >= n.turnStartIndex; r--) {
    let g = n.messages[r];
    if (g.type !== "user" || g.isMeta) continue;
    let content = g.message.content;
    if (typeof content === "string") {
      if (content.includes(`<${Wg}>`)) continue;
    } else if (content.some(item => item.type === "tool_result")) continue;
    if (regExp.test(vg(g) ?? "")) return !0;
  }
  return !1;
}
async function Ve(command_2, n, s, context, canUseTool, a, h, d) {
  let S = Date.now(),
    agentId = Vm(),
    isBuiltIn = BO().has(n),
    isOfficial = MG(command_2),
    isBundled = command_2.source === "bundled",
    {
      sanitizedName: T,
      skillNameHash: skillNameHash
    } = _W({
      rawName: n,
      canonicalName: command_2.name,
      isMcp: command_2.loadedFrom === "mcp",
      isBuiltIn: isBuiltIn,
      isBundled: isBundled,
      isOfficial: isOfficial
    }),
    query_depth = context.queryTracking?.depth ?? 0,
    N = query_depth > 0 ? "nested-skill" : "claude-proactive",
    b = context.agentId;
  if (command_2.pluginInfo) DP(command_2.pluginInfo.repository, "skill", ynt(command_2, command_2.pluginInfo.pluginManifest.name));
  i("tengu_skill_tool_invocation", {
    command_name: T,
    _PROTO_skill_name: n,
    ...skillNameHash,
    execution_context: y("fork"),
    invocation_trigger: c(N),
    query_depth: query_depth,
    ...(context.queryTracking && {
      query_chain_id: _e(context.queryTracking.chainId)
    }),
    ...chr(h, h !== void 0 && lB().has(h)),
    ...(b && {
      parent_agent_id: _e(b)
    }),
    ...q7(command_2.source, command_2.loadedFrom, command_2.kind, command_2.createdBy),
    ...iZe(command_2.source, n),
    attribution_shown: sZe(context.session, command_2.source, n) !== null,
    skill_content_chars: command_2.contentLength,
    ...!1,
    ...(command_2.pluginInfo && cCt(command_2)),
    ...Y7(command_2)
  }), Vtt(n, command_2, N);
  let w = {
      agentId: agentId,
      parentAgentId: context.agentId,
      depth: Sd(context.agentContext) + 1,
      agentType: "subagent",
      isAsync: !1,
      isBackgroundAgent: context.agentContext && "isBackgroundAgent" in context.agentContext ? context.agentContext.isBackgroundAgent : void 0,
      ...pD(context.agentContext)
    },
    I = k3t(command_2),
    {
      modifiedGetAppState: U,
      contextLayers: contextLayers,
      recordInvocation: z,
      baseAgent: baseAgent,
      promptMessages: promptMessages,
      skillContent: X,
      forkReadFileState: se,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      frozenCommandDenies: frozenCommandDenies
    } = await TAt(command_2, s || "", context, w, {
      replaceCommandRules: I,
      freezeCommandDenies: I,
      deferInvocationRecording: I
    }),
    Y = await Jwt(command_2, aA(), {
      options: {
        tools: ST(baseAgent, webFetchReadmissionAllowed ? KG(baseAgent, availableTools, me(context), {
          activeAgents: context.options.agentDefinitions.activeAgents
        }) : availableTools, I, !1, !1, 0, PO(context).mode).resolvedTools,
        spawnedBySkill: HP(command_2)
      },
      storageV5: context.storageV5
    });
  if (Y) promptMessages.push(Y);
  let effort = command_2.getEffort?.(s || "", context) ?? command_2.getDefaultEffort?.(s || "", context)?.value ?? command_2.effort,
    W = effort !== void 0 ? {
      ...baseAgent,
      effort: effort
    } : baseAgent,
    j = [];
  if (t(`SkillTool executing forked skill ${n} with agent ${W.agentType}`), I) {
    let E = await E3t({
      agentId: agentId,
      agentDefinition: W,
      command: command_2,
      description: `/${Co(command_2)} ${s ?? ""}`.trim(),
      prompt: X,
      promptMessages: promptMessages,
      context: context,
      canUseTool: canUseTool,
      getAppState: U,
      permissionLayers: contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers,
      readFileState: se,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      spawnedBySkill: HP(command_2),
      recordInvocationOnSuccess: z,
      frozenCommandDenies: frozenCommandDenies
    });
    if (E) return _("skill_invoke"), {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        background: !0,
        agentId: agentId,
        result: `Running in the background as @${E.name}`
      }
    };
    z();
  }
  let agentContext = {
      ...w,
      subagentName: W.agentType,
      isBuiltIn: Ja(W)
    },
    forwardSubagentText = context.options.forwardSubagentText,
    q = (message_2, prompt) => {
      d?.({
        type: "progress",
        toolUseID: `skill_${a.message.id}`,
        data: {
          message: message_2,
          type: "skill_progress",
          prompt: prompt,
          agentId: agentId,
          agentType: W.agentType,
          description: command_2.description
        }
      });
    },
    ne = T3t({
      agentId: agentId,
      parentAgentId: b,
      spawnDepth: Sd(agentContext),
      skillName: Co(command_2),
      prompt: X,
      selectedAgent: W,
      taskRegistry: context.taskRegistry,
      toolUseId: context.toolUseId,
      callerAbortController: context.abortController
    }),
    Q = "failed";
  try {
    let E = bf(promptMessages).find(item => item.type === "user");
    if (E) q({
      ...E,
      isMeta: void 0
    }, X);
    let B = !1;
    for await (let x of rk({
      agentDefinition: W,
      promptMessages: promptMessages,
      onModelRestricted: Z3t(HP(command_2), d),
      toolUseContext: {
        ...context,
        getAppState: U,
        permissionLayers: contextLayers.length > 0 ? [...(context.permissionLayers ?? []), ...contextLayers] : context.permissionLayers
      },
      canUseTool: canUseTool,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: HP(command_2),
      spawnedByForkedSkill: !0,
      model: command_2.model,
      availableTools: availableTools,
      webFetchReadmissionAllowed: webFetchReadmissionAllowed,
      override: {
        agentId: agentId,
        agentContext: agentContext,
        abortController: ne.abortController,
        shareFileHistory: !0,
        readFileState: se
      }
    })) {
      if (x.type === "api_metrics") {
        d?.(x);
        continue;
      }
      if (x.type === "set_in_progress_tool_use_ids" || x.type === "spinner_mode" || x.type === "query_model_change") continue;
      if (j.push(x), Boe(x)) {
        if (forwardSubagentText) d?.(i6t(x));
        continue;
      }
      if (x.type !== "assistant" && x.type !== "user") continue;
      if (!d) continue;
      if (x.type === "user" && x.isMeta && !B) continue;
      if (x.type === "assistant") B = !0;
      for (let pe of bf([x])) {
        let fe = pe.message.content[0];
        if (!forwardSubagentText && fe?.type !== "tool_use" && fe?.type !== "tool_result") continue;
        q(pe, "");
      }
    }
    let ce = xOe(ty(j));
    if (!ce) JSe(agentId, context);
    let result = kie(j) + CAt(j, "Skill execution completed");
    j.length = 0;
    let Ee = Date.now() - S;
    return t(`SkillTool forked skill ${n} completed in ${Ee}ms`), _("skill_invoke"), Q = ce ? "failed" : "completed", {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        agentId: agentId,
        result: result
      }
    };
  } finally {
    ne.remove(Q), DBe(agentId);
  }
}
var Ge = f(() => u({
    skill: o().describe("The name of a skill from the available-skills list. Do not guess names."),
    args: o().optional().describe("Optional arguments for the skill")
  })),
  Ke = f(() => {
    let e = u({
        success: M().describe("Whether the skill is valid"),
        commandName: o().describe("The name of the skill"),
        allowedTools: C(o()).optional().describe("Tools allowed by this skill"),
        model: o().optional().describe("Resolved model the skill turn runs on when a frontmatter model override took effect; omitted otherwise"),
        status: A("inline").optional().describe("Execution status"),
        readOnly: M().optional().describe("True when the skill instructions were loaded read-only (nothing was executed)")
      }),
      n = u({
        success: M().describe("Whether the skill completed successfully"),
        commandName: o().describe("The name of the skill"),
        status: A("forked").describe("Execution status"),
        agentId: o().describe("The ID of the sub-agent that executed the skill"),
        result: o().describe("The result from the forked skill execution"),
        background: M().optional().describe("True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification.")
      });
    return $e([e, n]);
  });
function Ye(e) {
  return {
    storageV5: e.storageV5,
    mcpCommands: () => e.getAppState().mcp.commands
  };
}
async function Xe({
  input: {
    skill: skill_2,
    args: args
  },
  toolUseContext: toolUseContext,
  canUseTool: canUseTool_2,
  parentMessage: parentMessage,
  onProgress: onProgress
}) {
  if (toolUseContext.agentId !== void 0 && vM(toolUseContext.agentId)) throw m("subagent_launch", "skill_fork_spawner_stop_pending"), Error("This agent has been stopped and its stop is still completing; it cannot launch skills.");
  let h = skill_2.trim(),
    d = h.startsWith("/") ? h.substring(1) : h,
    activeSkill = toolUseContext.options.activeSkill,
    l = activeSkill ?? toolUseContext.options.spawnedBySkill;
  toolUseContext.options.activeSkill = d;
  let v = Oge(toolUseContext),
    O = !1;
  try {
    let R = await oe(Ye(toolUseContext)),
      T = ie(d, R, toolUseContext);
    if (T.kind === "ambiguous") {
      let E = T.candidates.every(item => qee(item.name)) ? `: ${T.candidates.map(item => item.name).join(", ")}` : "";
      throw new P(`Skill ${d} now matches several skills${E} \u2014 invoke one by its full name.`, "Skill tool: bare name ambiguous at dispatch");
    }
    let command_3 = T.command;
    if (command_3) toolUseContext.options.activeSkill = HP(command_3);
    if (!v) {
      if (QRt(toolUseContext.session, d, toolUseContext.storageV5), command_3?.type === "prompt" && command_3.pluginInfo) lk(command_3.pluginInfo.repository);
    }
    if (command_3?.type === "prompt" && Gin(command_3, args || "", toolUseContext) === "fork" && !v) try {
      return await Ve(command_3, d, args, toolUseContext, canUseTool_2, parentMessage, l, onProgress);
    } finally {
      toolUseContext.options.activeSkill = activeSkill;
    }
    let D = `${toolUseContext.agentId ?? ""}:${command_3?.name ?? d}`,
      N = kK().get(D),
      {
        processPromptSlashCommand: processPromptSlashCommand
      } = await import("B:/~BUN/root/chunk-7es6rq4w.js"),
      w = await processPromptSlashCommand(d, args || "", R, toolUseContext, v);
    if (!w.shouldQuery) throw m("skill_invoke", "skill_invoke_process_failed"), Error("Command processing failed");
    let allowedTools = v ? [] : w.allowedTools || [],
      skillModel = v ? void 0 : gce(w.model),
      effort_2 = v ? void 0 : w.effort,
      isBuiltIn_2 = BO().has(d),
      isBundled_2 = command_3?.type === "prompt" && command_3.source === "bundled",
      isOfficial_2 = command_3?.type === "prompt" && MG(command_3),
      {
        sanitizedName: X,
        skillNameHash: skillNameHash_2
      } = _W({
        rawName: d,
        canonicalName: command_3?.name ?? d,
        isMcp: command_3?.loadedFrom === "mcp",
        isBuiltIn: isBuiltIn_2,
        isBundled: isBundled_2,
        isOfficial: isOfficial_2
      }),
      query_depth_2 = toolUseContext.queryTracking?.depth ?? 0,
      K = query_depth_2 > 0 ? "nested-skill" : "claude-proactive",
      agentId_2 = toolUseContext.agentId,
      Y = command_3?.type === "prompt" ? command_3.source : void 0,
      skill_body_chars = 0;
    for (let E of w.messages) skill_body_chars += TQt(E)?.length ?? 0;
    if (command_3?.type === "prompt" && command_3.pluginInfo && !v) DP(command_3.pluginInfo.repository, "skill", ynt(command_3, command_3.pluginInfo.pluginManifest.name));
    i("tengu_skill_tool_invocation", {
      command_name: X,
      _PROTO_skill_name: d,
      ...skillNameHash_2,
      execution_context: v ? y("read-only") : y("inline"),
      invocation_trigger: c(K),
      query_depth: query_depth_2,
      ...(toolUseContext.queryTracking && {
        query_chain_id: _e(toolUseContext.queryTracking.chainId)
      }),
      ...chr(l, l !== void 0 && lB().has(l)),
      ...(agentId_2 && {
        parent_agent_id: _e(agentId_2)
      }),
      ...q7(Y, command_3?.loadedFrom, command_3?.kind, command_3?.type === "prompt" ? command_3.createdBy : void 0),
      ...iZe(Y, d),
      attribution_shown: sZe(toolUseContext.session, Y, d) !== null,
      ...(command_3?.type === "prompt" && {
        skill_content_chars: command_3.contentLength
      }),
      skill_body_chars: skill_body_chars,
      ...!1,
      ...(command_3?.type === "prompt" && command_3.pluginInfo && cCt(command_3)),
      ...(command_3?.type === "prompt" && Y7(command_3))
    }), Vtt(d, command_3, K);
    let W = toolUseContext.toolUseId ?? on(parentMessage, co),
      messages = w.messages.filter(item => {
        if (item.type === "progress") return !1;
        if (item.type === "user" && "message" in item) {
          let content_2 = item.message.content;
          if (typeof content_2 === "string" && content_2.includes(`<${Wg}>`)) return !1;
        }
        return !0;
      }),
      Z = v ? messages.map(TQt).find(item => item !== null) ?? void 0 : void 0,
      newMessages = tn(nn({
        messages: messages,
        contextMessages: toolUseContext.messages,
        commandName: d,
        args: args,
        priorContent: N?.content ?? Z,
        renderedContent: kK().get(D)?.content ?? Z
      }), W);
    t(`SkillTool returning ${newMessages.length} newMessages for skill ${d}`), _("skill_invoke");
    let contextLayers_2 = [];
    if (allowedTools.length > 0) contextLayers_2.push({
      kind: "allowed_tools",
      allowedTools: allowedTools
    });
    let ne = toolUseContext.getAppState(),
      Q = skillModel && dYe({
        skillModel: skillModel,
        mode: ne.toolPermissionContext.mode,
        fastMode: ne.fastMode ?? !1
      }) ? iHt(skillModel, toolUseContext.options.mainLoopModel) : void 0;
    if (Q) contextLayers_2.push({
      kind: "model",
      mainLoopModel: Q
    });
    if (effort_2 !== void 0) contextLayers_2.push({
      kind: "effort",
      effort: effort_2
    });
    return O = !0, {
      data: {
        success: !0,
        commandName: d,
        allowedTools: allowedTools.length > 0 ? allowedTools : void 0,
        model: Q,
        ...(v && {
          readOnly: !0
        })
      },
      newMessages: newMessages,
      ...(contextLayers_2.length > 0 && {
        contextLayers: contextLayers_2
      })
    };
  } finally {
    if (v || !O) toolUseContext.options.activeSkill = activeSkill;
  }
}
var Zje = Ft({
    name: co,
    searchHint: "invoke a slash-command skill",
    isEnabled() {
      return uin();
    },
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    get inputSchema() {
      return Ge();
    },
    get outputSchema() {
      return Ke();
    },
    description: async ({
      skill: skill_3
    }) => `Execute skill: ${skill_3}`,
    prompt: async () => Sho(),
    toAutoClassifierInput: ({
      skill: skill_4
    }) => skill_4 ?? "",
    create(e) {
      let n = e;
      return {
        async validateInput({
          skill: skill_5
        }) {
          let r = skill_5.trim();
          if (!r) return m("skill_invoke", "skill_invoke_empty_name"), {
            result: !1,
            message: `Invalid skill format: ${skill_5}`,
            errorCode: 1
          };
          let g = r.startsWith("/");
          if (g) i("tengu_skill_tool_slash_prefix", {});
          let a = g ? r.substring(1) : r,
            h,
            d = await oe(n),
            S = ie(a, d, n),
            command_4 = S.command,
            v = qF(a);
          if (ove(n.session) && (!command_4 || wCt(command_4)) && (command_4 !== void 0 || vco(v))) {
            let R = await _Jt(v);
            if (!R.ok) h = R.reason;else d = await oe(n), S = ie(a, d, n), command_4 = S.command;
          }
          if (command_4?.type === "prompt" && command_4.loadDefinition !== void 0) await command_4.loadDefinition(), d = await oe(n), S = ie(a, d, n), command_4 = S.command;
          if (h !== void 0 && (!command_4 || wCt(command_4))) return m("skill_invoke", "skill_invoke_not_materialized"), {
            result: !1,
            message: `Skill ${a} could not be downloaded (${h}). Proceed without it.`,
            errorCode: 10
          };
          if (command_4?.loadedFrom === "syncedSkills" && v8()) return m("skill_invoke", "skill_invoke_sync_vetoed"), {
            result: !1,
            message: `Unknown skill: ${a}`,
            errorCode: 13
          };
          if (!command_4) {
            let R = jar(d, a, n.spawnedBySkill);
            if (R.length > 0) {
              let b = S.kind === "ambiguous" ? S.candidates.filter(item => !crt(item, a) && qee(item.name)) : [];
              if (S.kind === "ambiguous") i("tengu_skill_tool_suffix_match", {
                candidate_count: S.candidates.length
              });
              return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: b.length > 0 ? `Unknown skill: ${a}. Several skills match that name: ${[...b, ...R].map(item => item.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.` : `Unknown skill: ${a}. Directory-scoped variants exist: ${R.map(item => item.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                errorCode: 2
              };
            }
            if (S.kind === "suggestion") {
              if (i("tengu_skill_tool_suffix_match", {
                candidate_count: 1
              }), qee(S.suggestion.name)) return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: `Unknown skill: ${a}. Did you mean ${S.suggestion.name}? Invoke it by that full name.`,
                errorCode: 2
              };
            }
            if (S.kind === "ambiguous") {
              i("tengu_skill_tool_suffix_match", {
                candidate_count: S.candidates.length
              });
              let b = S.candidates.filter(item => !crt(item, a)),
                w = b.length === 1 ? b[0] : void 0;
              if (b.length > 0 && b.every(item => qee(item.name))) return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: w !== void 0 ? `Unknown skill: ${a}. Did you mean ${w.name}? Invoke it by that full name.` : `Unknown skill: ${a}. Several skills match that name: ${b.map(item => item.name).join(", ")} \u2014 invoke one by its full name.`,
                errorCode: 2
              };
            }
            let T = IJ(a, d.map(item => ({
              name: Co(item),
              aliases: item.aliases
            })), {
              maxEditDistance: 2
            });
            m("skill_invoke", "skill_invoke_not_found");
            let k = await Tln()?.catch(() => {
                return;
              }),
              D = k && be(a, k.errors, new Set(k.enabled.map(item => item.name))),
              N = T ? `Unknown skill: ${a}. Did you mean ${T}?` : `Unknown skill: ${a}`;
            return {
              result: !1,
              message: D ? `${N}${T ? "" : "."} ${D}` : N,
              errorCode: 2
            };
          }
          if (command_4.type === "prompt" && (command_4.context === "fork" || command_4.getContext !== void 0 && n.spawnedByForkedSkill === !0) && n.spawnedBySkill === HP(command_4)) return m("skill_invoke", "skill_invoke_fork_recursion"), i("tengu_skill_tool_fork_recursion_blocked", {}), {
            result: !1,
            message: `Skill ${a} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${co} tool.`,
            errorCode: 9
          };
          let O = Iqt(command_4, {
            commandName: a,
            userTypedThisTurn: !Oge(n) && He(a, {
              agentId: n.agentId,
              messages: n.messages(),
              turnStartIndex: n.turnStartIndex
            }),
            isMainSession: n.agentId === void 0,
            permissionContext: void 0
          });
          if (O !== null) {
            switch (O.reason) {
              case "disable_model_invocation":
                {
                  let {
                    sanitizedName: R,
                    skillNameHash: skillNameHash_3
                  } = _W({
                    rawName: a,
                    canonicalName: command_4.name,
                    isMcp: command_4.loadedFrom === "mcp",
                    isBuiltIn: BO().has(a),
                    isBundled: command_4.type === "prompt" && command_4.source === "bundled",
                    isOfficial: command_4.type === "prompt" && MG(command_4)
                  });
                  m("skill_invoke", "skill_invoke_model_disabled", {
                    command_name: R,
                    ...skillNameHash_3
                  });
                  break;
                }
              case "not_loaded":
                m("skill_invoke", "skill_invoke_not_materialized");
                break;
              case "not_allowlisted":
                m("skill_invoke", "skill_invoke_not_allowlisted");
                break;
              case "override_disabled":
                m("skill_invoke", O.killSwitchOnly ? "skill_invoke_bundled_skills_disabled" : "skill_invoke_override_disabled");
                break;
              case "not_prompt_type":
                m("skill_invoke", "skill_invoke_not_prompt_type");
                break;
              case "mcp_prompt":
                break;
              case "deny_rule":
                break;
            }
            return {
              result: !1,
              message: O.message,
              errorCode: O.errorCode
            };
          }
          return {
            result: !0
          };
        },
        async checkPermissions({
          skill: skill_6,
          args: args_2
        }) {
          let g = skill_6.trim(),
            ruleContent = g.startsWith("/") ? g.substring(1) : g,
            h = n.permissions(),
            d = await oe(n),
            S = ie(ruleContent, d, n),
            command_5 = S.command,
            v = S.kind === "ambiguous" ? S.candidates : [command_5],
            O = SX(h, Zje, "deny");
          for (let [U, rule_3] of O.entries()) if (v.some(item => ue(U, ruleContent, item))) return {
            behavior: "deny",
            message: "Skill execution blocked by permission rules",
            decisionReason: {
              type: "rule",
              rule: rule_3
            }
          };
          let R = SX(h, Zje, "allow"),
            T;
          for (let [rule_5, rule_4] of R.entries()) {
            let z = ye(rule_5, ruleContent, command_5);
            if (z === "allow") return {
              behavior: "allow",
              updatedInput: {
                skill: skill_6,
                args: args_2
              },
              decisionReason: {
                type: "rule",
                rule: rule_4
              }
            };
            if (z === "held-back-nonholder") T = {
              rule: rule_5,
              kind: "nonholder"
            };else if (z === "held-back-boundary") T ??= {
              rule: rule_5,
              kind: "boundary"
            };
          }
          if (command_5?.type === "prompt" && (en(command_5) || Oge(n))) return {
            behavior: "allow",
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            decisionReason: void 0
          };
          let pluginName = command_5?.type === "prompt" && command_5.source === "plugin" ? command_5.pluginInfo?.pluginManifest.name : void 0,
            D = Uge() && WB(ruleContent) && !(command_5 !== void 0 && Vee(command_5)),
            N = T === void 0 ? void 0 : D ? "nonholder" : T.kind;
          if (N !== void 0 && h.mode !== "bypassPermissions" && wle(h, Zje) === null) qe(N);
          let reason = T === void 0 || N === void 0 ? void 0 : Se(T.rule, command_5?.name ?? ruleContent, N === "nonholder" ? {
              kind: "nonholder",
              pluginName: pluginName
            } : {
              kind: "boundary"
            }),
            decisionReason = reason === void 0 ? void 0 : {
              type: "other",
              reason: reason
            };
          if (D) return {
            behavior: "ask",
            message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
            decisionReason: decisionReason,
            suppressAlwaysAllowRule: !0,
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            metadata: command_5 ? {
              command: command_5
            } : void 0
          };
          let suggestions = [{
            type: "addRules",
            rules: [{
              toolName: co,
              ruleContent: ruleContent
            }],
            behavior: "allow",
            destination: "localSettings"
          }, {
            type: "addRules",
            rules: [{
              toolName: co,
              ruleContent: `${ruleContent}:*`
            }],
            behavior: "allow",
            destination: "localSettings"
          }];
          return {
            behavior: "ask",
            message: `Execute skill: ${ruleContent}${reason ? ` \u2014 ${reason}` : ""}`,
            decisionReason: decisionReason,
            suggestions: suggestions,
            updatedInput: {
              skill: skill_6,
              args: args_2
            },
            metadata: command_5 ? {
              command: command_5
            } : void 0
          };
        },
        call(input, r) {
          if (!r.runEngine) return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
          return r.runEngine(Xe, {
            input: input,
            parentMessage: r.parentMessage,
            onProgress: r.onProgress
          });
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id_2) {
      if ("status" in e && e.status === "forked") return {
        type: "tool_result",
        tool_use_id: tool_use_id_2,
        content: e.background ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}` : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`
      };
      if ("readOnly" in e && e.readOnly) return {
        type: "tool_result",
        tool_use_id: tool_use_id_2,
        content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`
      };
      return {
        type: "tool_result",
        tool_use_id: tool_use_id_2,
        content: `Launching skill: ${e.commandName}`
      };
    },
    renderToolUseMessage: renderToolUseMessage
  }),
  Ze = new Set(["type", "progressMessage", "contentLength", "contentHash", "argNames", "model", "effort", "source", "pluginInfo", "serverAttribution", "disableNonInteractive", "skillRoot", "skillDir", "context", "agent", "background", "getPromptForCommand", "getEffort", "getDefaultEffort", "onUserTypedArgs", "getContext", "declaredFields", "pluginSource", "metadata", "createdBy", "fallback", "unqualifiedName", "bareNameReserved", "name", "description", "menuDescription", "hasUserSpecifiedDescription", "isEnabled", "isHidden", "aliases", "subcommands", "subcommandsBareOnly", "isMcp", "argumentHint", "whenToUse", "paths", "version", "disableModelInvocation", "disableBridgeInvocation", "userInvocable", "loadedFrom", "immediate", "userFacingName", "getArgumentCompletions"]);
function en(e) {
  for (let n of Object.keys(e)) {
    if (Ze.has(n)) continue;
    let s = e[n];
    if (s === void 0 || s === null) continue;
    if (Array.isArray(s) && s.length === 0) continue;
    if (typeof s === "object" && !Array.isArray(s) && Object.keys(s).length === 0) continue;
    return !1;
  }
  return !0;
}
function nn({
  messages: messages_2,
  contextMessages: contextMessages,
  commandName: commandName_2,
  args: args_3,
  priorContent: priorContent,
  renderedContent: renderedContent
}) {
  if (!priorContent || !renderedContent) return messages_2;
  if (messages_2.some(item => item.type === "user" && item.promptShellHandOff !== void 0)) return messages_2;
  let h = $nt(contextMessages, priorContent);
  if (!h) return messages_2;
  if (priorContent !== renderedContent) {
    let content_3 = priorContent.endsWith(EQt) ? `(Re-invocation of /${commandName_2} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)` : `(Re-invocation of /${commandName_2} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
    return [Ce({
      content: content_3,
      isMeta: !0
    }), ...messages_2];
  }
  let d = !1,
    S = messages_2.map(item => {
      if (TQt(item) !== renderedContent) return item;
      return d = !0, Ce({
        content: h === "attachment" ? `Skill /${commandName_2} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${args_3 ? ` Arguments: ${args_3}` : ""}` : `Skill /${commandName_2} is already loaded above; instructions unchanged.${args_3 ? ` Arguments: ${args_3}` : ""}`,
        isMeta: !0
      });
    });
  if (d) t(`SkillTool eliding byte-identical re-invocation of skill ${commandName_2}`);
  return S;
}
function tn(e, sourceToolUseID) {
  if (!sourceToolUseID) return e;
  return e.map(item => {
    if (item.type === "user") return {
      ...item,
      sourceToolUseID: sourceToolUseID
    };
    return item;
  });
}
function on(e, n) {
  let s = e.message.content.find(item => item.type === "tool_use" && item.name === n);
  return s && s.type === "tool_use" ? s.id : void 0;
}
export { Pqt, Iqt, qJr, yEn, Zje };