// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Vm
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  aA,
  Te,
  nM,
  _re,
  kK,
  DBe,
  W$
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Ft
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  gce,
  iHt,
  dYe,
  M0,
  co,
  n2,
  YMo,
  Sd,
  pD,
  ro,
  $r
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Gc
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Wg
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  oH,
  hu
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  Jq,
  IJ
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  EY
} from "B:/~BUN/root/chunk-1f9marcm.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Ga
} from "B:/~BUN/root/chunk-fszjvjk0.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  vc,
  wle,
  ks,
  SX,
  PR
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  JAo,
  xHe,
  KDt
} from "B:/~BUN/root/chunk-hfe3cbfz.js";
import {
  Tln
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  pCe
} from "B:/~BUN/root/chunk-j14vfkmm.js";
import {
  aet
} from "B:/~BUN/root/chunk-0mn860zt.js";
import {
  Zs,
  w9,
  mSo,
  yae
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  lk,
  Vtt,
  q7,
  chr,
  _W,
  MG,
  cCt,
  Y7,
  mMe,
  ove,
  _Jt,
  vco,
  wCt,
  v8,
  uw,
  vM,
  PO,
  ynt,
  DP,
  EQt,
  TQt,
  $nt,
  Ja,
  KG,
  uLn,
  BMe,
  YG,
  crt,
  HP,
  bZ,
  SZ,
  rB,
  QRt,
  kie,
  TAt,
  CAt,
  ty,
  Ce,
  bf,
  vg,
  BO,
  lB,
  Svr,
  Sp,
  Sho,
  Wxt
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  TR,
  js
} from "B:/~BUN/root/chunk-5nfpvvfh.js";
import {
  Co,
  Gin,
  Yat,
  WB,
  Vee,
  Uge
} from "B:/~BUN/root/chunk-yzpw1mdr.js";
import {
  Boe,
  i6t,
  rk,
  mG,
  ST,
  xOe,
  JSe
} from "B:/~BUN/root/chunk-fwqmqt2f.js";
import {
  sZe,
  iZe
} from "B:/~BUN/root/chunk-4005qhef.js";
import {
  k3t,
  E3t,
  T3t,
  jar,
  Jwt
} from "B:/~BUN/root/chunk-6x8k31zb.js";
import {
  Z3t
} from "B:/~BUN/root/chunk-y96pqvt2.js";
import {
  uin,
  ba
} from "B:/~BUN/root/chunk-na2t7g12.js";
import {
  Ni,
  Oge
} from "B:/~BUN/root/chunk-aqngsaqg.js";
import {
  qee
} from "B:/~BUN/root/chunk-z9xwt6re.js";
import {
  IS
} from "B:/~BUN/root/chunk-xvp1x16p.js";
import {
  ycn
} from "B:/~BUN/root/chunk-hyp140x7.js";
import {
  VCe,
  xdn,
  qF,
  fOo,
  mOo,
  YX,
  HS,
  xd
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  at
} from "B:/~BUN/root/chunk-2h7x7bdj.js";
import {
  o,
  M,
  C,
  u,
  Qe,
  $e,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  _e
} from "B:/~BUN/root/chunk-batgyebn.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";

function Me() {
  return M0() === "default" ? " (use the Agent tool instead)" : ""
}

function Pe() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${uw()&&ba()?`\`find\`/${ro}, \`grep\`/${$r}, and ${at}`:`${ro}, ${$r}, and ${at}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${js} if you need to clarify approaches
6. Exit plan mode with ${IS} when ready to implement

`
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
`
}

function ge() {
  return Re()
}
var Oe = f(() => Qe({})),
  Ne = f(() => u({
    message: o().describe("Confirmation that plan mode was entered")
  })),
  Pqt = Ft({
    name: TR,
    searchHint: "switch to plan mode to design an approach before coding",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design"
    },
    async prompt() {
      return ge()
    },
    get inputSchema() {
      return Oe()
    },
    get outputSchema() {
      return Ne()
    },
    userFacingName() {
      return ""
    },
    shouldDefer: !0,
    isEnabled() {
      return mG.isEnabled()
    },
    isConcurrencySafe() {
      return !0
    },
    isReadOnly() {
      return !0
    },
    renderToolUseMessage() {
      return null
    },
    create(e) {
      return {
        async call(n) {
          if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
          return _re(e.permissions().mode, "plan"), e.setToolPermissionContext((s) => vc(aet(s), {
            type: "setMode",
            mode: "plan",
            destination: "session"
          })), {
            data: {
              message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
            }
          }
        }
      }
    },
    mapToolResultToToolResultBlockParam({
      message: e
    }, n) {
      return {
        type: "tool_result",
        content: `${e}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${js} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${IS} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: n
      }
    }
  });
var Ue = new Set(["cli"]),
  De = new Set(["local-desktop-app-uploads"]);

function Fe(e) {
  if (e.loadedFrom !== "plugin" || e.pluginInfo === void 0) return !1;
  if (e.pluginInfo.accountSkillsWrapper === !0) return !1;
  let {
    repository: n
  } = e.pluginInfo, s = xd(n);
  if (s === void 0 || n.lastIndexOf("@") === 0) return !1;
  let r = KDt(s.trim());
  if (r === "" || Jq(r) || xHe(s) || De.has(r)) return !1;
  let g = oH();
  if (g === void 0 || !Ue.has(g)) return !1;
  return JAo()
}

function le(e) {
  let n = fOo(e);
  return [...n.length > 0 && Fe(e) ? [] : n, ...mOo(e)]
}

function he(e) {
  let n = n2(e.name),
    s = L(le(e).map(n2)).filter((r) => r !== n);
  return s.length ? s : void 0
}

function ae(e) {
  let n = e.startsWith("/") ? e.substring(1) : e;
  return n.endsWith(":*") || n.endsWith(" *") ? {
    name: n,
    prefix: n.slice(0, -2)
  } : {
    name: n
  }
}

function te(e, n) {
  let {
    name: s,
    prefix: r
  } = ae(e);
  return s === n || r !== void 0 && n.startsWith(r)
}

function ke(e, n) {
  let {
    prefix: s
  } = ae(e);
  if (s === void 0) return te(e, n);
  let r = s.toLowerCase(),
    g = VCe.includes(r),
    a = xdn(r);
  if (!g && !a) return !xdn(n.toLowerCase()) && te(e, n);
  return !g && n === s || n.startsWith(`${s}:`)
}

function ue(e, n, s) {
  let {
    ordinary: r,
    packaging: g
  } = Le(n, s), a = Be.exec(e);
  if (a !== null) {
    let h = a[1].trim();
    if (r.some((d) => EY(h, d)) || (!h.includes("*") || hu()) && g.some((d) => EY(h, d))) return !0
  }
  return r.some((h) => te(e, h)) || g.some((h) => {
    if (!te(e, h)) return !1;
    let {
      prefix: d
    } = ae(e);
    return d === void 0 || d === h || hu()
  })
}
var Be = /^\s*skill\s*:(.*)$/s;

function Le(e, n) {
  if (n === void 0) return {
    ordinary: [e],
    packaging: []
  };
  let s = Co(n);
  return {
    ordinary: [e, n.name, s, ...n.aliases ?? [], ...n.type === "prompt" && n.unqualifiedName != null ? [n.unqualifiedName] : []],
    packaging: le(n)
  }
}

function ye(e, n, s) {
  let r = s && mMe(s),
    g = [n, ...s !== void 0 ? [s.name] : [], ...r !== void 0 ? [r] : []],
    a = g.some((l) => te(e, l));
  if (!Uge()) return a ? "allow" : "no-match";
  let h = s !== void 0 && Vee(s),
    d = g.some((l) => ke(e, l));
  if (g.some((l) => ke(e, l) && (h || !WB(l)))) return "allow";
  if (!a) return "no-match";
  return d ? "held-back-nonholder" : "held-back-boundary"
}

function Se(e, n, s) {
  let {
    prefix: r
  } = ae(e), g = r?.toLowerCase(), a = g !== void 0 ? VCe.includes(g) || xdn(g) : xdn(e.toLowerCase()), h = Yat(n) ?? n, d = a ? `Skill(${e}) only covers skills synced from your claude.ai account.` : `Skill(${e}) does not cover "${h}:" names, which are reserved for skills synced from your claude.ai account.`;
  switch (s.kind) {
    case "nonholder":
      return `${d} ${n} ${s.pluginName!==void 0?`comes from the plugin "${s.pluginName}"`:"is not synced"}, so no rule for that name can pre-approve it; it needs approval each time.`;
    case "boundary":
      return g !== void 0 && VCe.includes(g) ? `Skill(${e}) only covers names starting with "${r}:". Add Skill(${n}) to allow ${n} without asking.` : a ? `Skill(${e}) only covers ${r} and names starting with "${r}:". Add Skill(${n}) to allow ${n} without asking.` : `${d} Add Skill(${n}) to allow ${n} without asking.`
  }
}

function de(e, n = !1) {
  if (!Ni()) return `Ask the user to run /${e} themselves \u2014 it cannot be invoked via the ${co} tool.`;
  return n ? `It cannot be invoked via the ${co} tool in this session, by the coordinator or by workers \u2014 the user can run /${e} by typing it themselves.` : `It cannot be invoked via the ${co} tool in this session, by the coordinator or by workers \u2014 tell the user /${e} is not available here.`
}

function Iqt(e, n) {
  let {
    commandName: s,
    userTypedThisTurn: r,
    isMainSession: g,
    permissionContext: a
  } = n;
  if (e.type === "prompt" && e.loadDefinition !== void 0 && !r) return {
    reason: "not_loaded",
    message: `Skill ${s} could not be loaded. Proceed without it.`,
    errorCode: 10
  };
  if (e.disableModelInvocation && !r) return {
    reason: "disable_model_invocation",
    message: `Skill ${s} cannot be used with ${co} tool due to disable-model-invocation. ${de(s)} Do not replicate this skill's workflow by other means \u2014 it is reserved for explicit user invocation.`,
    errorCode: 4
  };
  if (g) {
    let d = W$();
    if (d !== void 0 && w9([e], d).length === 0) return {
      reason: "not_allowlisted",
      message: `Skill ${s} is not in this session's skills allowlist`,
      errorCode: 8
    }
  }
  let h = BMe(e);
  if (h === "off" || h === "user-invocable-only" && !r) {
    let d = Je(),
      S = ycn(e, d),
      l = uLn(e),
      v = l === "user-invocable-only" || l === "off",
      O = "by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var";
    return {
      reason: "override_disabled",
      message: `Skill ${s} is disabled for model invocation ${S?v?"by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var, and by an explicit skillOverrides entry":"by the disableBundledSkills setting or CLAUDE_CODE_DISABLE_BUNDLED_SKILLS env var":"in skillOverrides settings"}`,
      errorCode: 7,
      killSwitchOnly: S && !v
    }
  }
  if (e.type !== "prompt") {
    let d = e.type === "local-jsx" ? "UI" : "built-in CLI";
    return {
      reason: "not_prompt_type",
      message: `${s} is a ${d} command, not a skill. ${de(s,!0)}`,
      errorCode: 5
    }
  }
  if (e.isMcp && e.loadedFrom !== "mcp") return {
    reason: "mcp_prompt",
    message: `${s} is an MCP prompt, not a skill. ${de(s)}`,
    errorCode: 12
  };
  if (a !== void 0) {
    let d = ks(a, {
      name: co
    }) ?? ks(a, {
      name: n2(e.name),
      aliasSkillToolNames: YMo(e),
      packagingAliasSkillToolNames: he(e)
    });
    if (d) return {
      reason: "deny_rule",
      message: "Skill execution blocked by permission rules",
      errorCode: 11,
      rule: d
    };
    let S = PR(a, co, "deny");
    for (let [l, v] of S.entries())
      if (ue(l, s, e)) return {
        reason: "deny_rule",
        message: "Skill execution blocked by permission rules",
        errorCode: 11,
        rule: v
      }
  }
  return null
}

function qJr(e) {
  return pCe(e) || YX(e.source)
}

function yEn(e) {
  switch (e.type) {
    case "generic-error":
    case "manifest-validation-error":
    case "path-not-found":
      return e.plugin === void 0 ? e.path : void 0;
    default:
      return
  }
}
var ze = {
  "path-not-found": "path not found",
  "manifest-validation-error": "manifest invalid",
  "dependency-unsatisfied": "unmet dependency",
  "dependency-version-unsatisfied": "unmet dependency"
};

function We(e) {
  return e.flatMap((n) => {
    let s = ze[n.type] ?? "load error",
      r = yEn(n);
    if (r !== void 0) {
      let g = n.type === "generic-error" ? n.manifestName : void 0,
        a = Wxt(r, HS(n.source) ?? "");
      return [{
        names: g ? [g, a] : [a],
        category: s
      }]
    }
    return pCe(n) ? [{
      names: [n.plugin],
      category: s
    }] : []
  })
}

function be(e, n, s) {
  let r = We(n);
  if (r.length === 0) return;
  let g = e.indexOf(":"),
    a = g > 0 ? e.slice(0, g) : void 0,
    h = a === void 0 || s.has(a) ? void 0 : r.find((l) => l.names.includes(a));
  if (h !== void 0) return `The plugin "${a}" did not load in this session (${h.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
  let d = L(r.map((l) => l.category)).join(", ");
  return `${r.length===1?`1 plugin did not load in this session (${d}); if this skill belongs to it`:`${r.length} plugins did not load in this session (${d}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`
}

function ve({
  skill: e
}, {
  commands: n,
  teammateAuthorOf: s
}) {
  if (!e) return null;
  let r = e.trim(),
    g = r.startsWith("/") ? r.substring(1) : r,
    a = n?.find((S) => S.name === g),
    h = a?.loadedFrom === "commands_DEPRECATED" ? `/${g}` : g,
    d = s?.(a?.type === "prompt" ? a.source : void 0, g) ?? null;
  return d ? `${h} \xB7 by ${d}` : h
}

function je(e) {
  let n = new Map,
    s = (r) => Boolean(r.disableModelInvocation) || YG(r);
  for (let r of e) {
    let g = n.get(r.name);
    if (g === void 0 || s(g) && !s(r) && r.type === "prompt" && !(Vee(g) && !Vee(r))) n.set(r.name, r)
  }
  return [...n.values()]
}

function qe(e) {
  if (!Ga().claim(`skill_reserved_namespace_rule_held_back_${e}`)) return;
  p("skill_reserved_namespace", e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary", {
    interactive: !Te(),
    host_prompt: nM() !== void 0
  })
}
async function oe(e) {
  let n = await Sp(aA(), e.storageV5),
    s = e.mcpCommands(),
    r = s.filter((h) => h.type === "prompt" && h.loadedFrom === "mcp"),
    g = yae(),
    a = rB(n, s);
  return bZ(je([...a, ...g, ...r]))
}

function we(e, n) {
  let s = e.filter(SZ);
  return n ? w9(s, W$()) : s
}

function Ie(e, n) {
  return e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? !1)
}

function ie(e, n, s) {
  let r = s.agentId === void 0,
    g = Zs(e, n);
  if (g !== void 0) {
    let h = Ie(g, e) ? we(n, r) : [];
    if (h.includes(g)) {
      let d = h.filter((S) => Ie(S, e) || S.type === "prompt" && S.loadedFrom !== "syncedSkills" && S.name.endsWith(`:${e}`));
      if (d.length > 1) return {
        kind: "ambiguous",
        command: void 0,
        candidates: d
      }
    }
    return {
      kind: "exact",
      command: g
    }
  }
  if (Svr(e) || n.some((h) => crt(h, e))) return {
    kind: "none",
    command: void 0
  };
  let a = mSo(e, we(n, r));
  switch (a.kind) {
    case "unique":
      return {
        kind: "suggestion", command: void 0, suggestion: a.command
      };
    case "ambiguous":
      return {
        kind: "ambiguous", command: void 0, candidates: a.candidates
      };
    case "none":
      return {
        kind: "none", command: void 0
      }
  }
}

function He(e, n) {
  if (n.agentId !== void 0) return !1;
  let s = new RegExp(`(?<!\\S)/${Gc(e)}(?=$|\\s)`);
  for (let r = n.messages.length - 1; r >= n.turnStartIndex; r--) {
    let g = n.messages[r];
    if (g.type !== "user" || g.isMeta) continue;
    let a = g.message.content;
    if (typeof a === "string") {
      if (a.includes(`<${Wg}>`)) continue
    } else if (a.some((h) => h.type === "tool_result")) continue;
    if (s.test(vg(g) ?? "")) return !0
  }
  return !1
}
async function Ve(e, n, s, r, g, a, h, d) {
  let S = Date.now(),
    l = Vm(),
    v = BO().has(n),
    O = MG(e),
    R = e.source === "bundled",
    {
      sanitizedName: T,
      skillNameHash: k
    } = _W({
      rawName: n,
      canonicalName: e.name,
      isMcp: e.loadedFrom === "mcp",
      isBuiltIn: v,
      isBundled: R,
      isOfficial: O
    }),
    D = r.queryTracking?.depth ?? 0,
    N = D > 0 ? "nested-skill" : "claude-proactive",
    b = r.agentId;
  if (e.pluginInfo) DP(e.pluginInfo.repository, "skill", ynt(e, e.pluginInfo.pluginManifest.name));
  i("tengu_skill_tool_invocation", {
    command_name: T,
    _PROTO_skill_name: n,
    ...k,
    execution_context: y("fork"),
    invocation_trigger: c(N),
    query_depth: D,
    ...r.queryTracking && {
      query_chain_id: _e(r.queryTracking.chainId)
    },
    ...chr(h, h !== void 0 && lB().has(h)),
    ...b && {
      parent_agent_id: _e(b)
    },
    ...q7(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...iZe(e.source, n),
    attribution_shown: sZe(r.session, e.source, n) !== null,
    skill_content_chars: e.contentLength,
    ...!1,
    ...e.pluginInfo && cCt(e),
    ...Y7(e)
  }), Vtt(n, e, N);
  let w = {
      agentId: l,
      parentAgentId: r.agentId,
      depth: Sd(r.agentContext) + 1,
      agentType: "subagent",
      isAsync: !1,
      isBackgroundAgent: r.agentContext && "isBackgroundAgent" in r.agentContext ? r.agentContext.isBackgroundAgent : void 0,
      ...pD(r.agentContext)
    },
    I = k3t(e),
    {
      modifiedGetAppState: U,
      contextLayers: F,
      recordInvocation: z,
      baseAgent: V,
      promptMessages: G,
      skillContent: X,
      forkReadFileState: se,
      availableTools: H,
      webFetchReadmissionAllowed: K,
      frozenCommandDenies: re
    } = await TAt(e, s || "", r, w, {
      replaceCommandRules: I,
      freezeCommandDenies: I,
      deferInvocationRecording: I
    }),
    Y = await Jwt(e, aA(), {
      options: {
        tools: ST(V, K ? KG(V, H, me(r), {
          activeAgents: r.options.agentDefinitions.activeAgents
        }) : H, I, !1, !1, 0, PO(r).mode).resolvedTools,
        spawnedBySkill: HP(e)
      },
      storageV5: r.storageV5
    });
  if (Y) G.push(Y);
  let J = e.getEffort?.(s || "", r) ?? e.getDefaultEffort?.(s || "", r)?.value ?? e.effort,
    W = J !== void 0 ? {
      ...V,
      effort: J
    } : V,
    j = [];
  if (t(`SkillTool executing forked skill ${n} with agent ${W.agentType}`), I) {
    let E = await E3t({
      agentId: l,
      agentDefinition: W,
      command: e,
      description: `/${Co(e)} ${s??""}`.trim(),
      prompt: X,
      promptMessages: G,
      context: r,
      canUseTool: g,
      getAppState: U,
      permissionLayers: F.length > 0 ? [...r.permissionLayers ?? [], ...F] : r.permissionLayers,
      readFileState: se,
      availableTools: H,
      webFetchReadmissionAllowed: K,
      spawnedBySkill: HP(e),
      recordInvocationOnSuccess: z,
      frozenCommandDenies: re
    });
    if (E) return _("skill_invoke"), {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        background: !0,
        agentId: l,
        result: `Running in the background as @${E.name}`
      }
    };
    z()
  }
  let Z = {
      ...w,
      subagentName: W.agentType,
      isBuiltIn: Ja(W)
    },
    ee = r.options.forwardSubagentText,
    q = (E, B) => {
      d?.({
        type: "progress",
        toolUseID: `skill_${a.message.id}`,
        data: {
          message: E,
          type: "skill_progress",
          prompt: B,
          agentId: l,
          agentType: W.agentType,
          description: e.description
        }
      })
    },
    ne = T3t({
      agentId: l,
      parentAgentId: b,
      spawnDepth: Sd(Z),
      skillName: Co(e),
      prompt: X,
      selectedAgent: W,
      taskRegistry: r.taskRegistry,
      toolUseId: r.toolUseId,
      callerAbortController: r.abortController
    }),
    Q = "failed";
  try {
    let E = bf(G).find((x) => x.type === "user");
    if (E) q({
      ...E,
      isMeta: void 0
    }, X);
    let B = !1;
    for await (let x of rk({
      agentDefinition: W,
      promptMessages: G,
      onModelRestricted: Z3t(HP(e), d),
      toolUseContext: {
        ...r,
        getAppState: U,
        permissionLayers: F.length > 0 ? [...r.permissionLayers ?? [], ...F] : r.permissionLayers
      },
      canUseTool: g,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: HP(e),
      spawnedByForkedSkill: !0,
      model: e.model,
      availableTools: H,
      webFetchReadmissionAllowed: K,
      override: {
        agentId: l,
        agentContext: Z,
        abortController: ne.abortController,
        shareFileHistory: !0,
        readFileState: se
      }
    })) {
      if (x.type === "api_metrics") {
        d?.(x);
        continue
      }
      if (x.type === "set_in_progress_tool_use_ids" || x.type === "spinner_mode" || x.type === "query_model_change") continue;
      if (j.push(x), Boe(x)) {
        if (ee) d?.(i6t(x));
        continue
      }
      if (x.type !== "assistant" && x.type !== "user") continue;
      if (!d) continue;
      if (x.type === "user" && x.isMeta && !B) continue;
      if (x.type === "assistant") B = !0;
      for (let pe of bf([x])) {
        let fe = pe.message.content[0];
        if (!ee && fe?.type !== "tool_use" && fe?.type !== "tool_result") continue;
        q(pe, "")
      }
    }
    let ce = xOe(ty(j));
    if (!ce) JSe(l, r);
    let Ae = kie(j) + CAt(j, "Skill execution completed");
    j.length = 0;
    let Ee = Date.now() - S;
    return t(`SkillTool forked skill ${n} completed in ${Ee}ms`), _("skill_invoke"), Q = ce ? "failed" : "completed", {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        agentId: l,
        result: Ae
      }
    }
  } finally {
    ne.remove(Q), DBe(l)
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
    return $e([e, n])
  });

function Ye(e) {
  return {
    storageV5: e.storageV5,
    mcpCommands: () => e.getAppState().mcp.commands
  }
}
async function Xe({
  input: {
    skill: e,
    args: n
  },
  toolUseContext: s,
  canUseTool: r,
  parentMessage: g,
  onProgress: a
}) {
  if (s.agentId !== void 0 && vM(s.agentId)) throw m("subagent_launch", "skill_fork_spawner_stop_pending"), Error("This agent has been stopped and its stop is still completing; it cannot launch skills.");
  let h = e.trim(),
    d = h.startsWith("/") ? h.substring(1) : h,
    S = s.options.activeSkill,
    l = S ?? s.options.spawnedBySkill;
  s.options.activeSkill = d;
  let v = Oge(s),
    O = !1;
  try {
    let R = await oe(Ye(s)),
      T = ie(d, R, s);
    if (T.kind === "ambiguous") {
      let E = T.candidates.every((B) => qee(B.name)) ? `: ${T.candidates.map((B)=>B.name).join(", ")}` : "";
      throw new P(`Skill ${d} now matches several skills${E} \u2014 invoke one by its full name.`, "Skill tool: bare name ambiguous at dispatch")
    }
    let k = T.command;
    if (k) s.options.activeSkill = HP(k);
    if (!v) {
      if (QRt(s.session, d, s.storageV5), k?.type === "prompt" && k.pluginInfo) lk(k.pluginInfo.repository)
    }
    if (k?.type === "prompt" && Gin(k, n || "", s) === "fork" && !v) try {
      return await Ve(k, d, n, s, r, g, l, a)
    } finally {
      s.options.activeSkill = S
    }
    let D = `${s.agentId??""}:${k?.name??d}`,
      N = kK().get(D),
      {
        processPromptSlashCommand: b
      } = await import("B:/~BUN/root/chunk-7es6rq4w.js"),
      w = await b(d, n || "", R, s, v);
    if (!w.shouldQuery) throw m("skill_invoke", "skill_invoke_process_failed"), Error("Command processing failed");
    let I = v ? [] : w.allowedTools || [],
      U = v ? void 0 : gce(w.model),
      F = v ? void 0 : w.effort,
      z = BO().has(d),
      V = k?.type === "prompt" && k.source === "bundled",
      G = k?.type === "prompt" && MG(k),
      {
        sanitizedName: X,
        skillNameHash: se
      } = _W({
        rawName: d,
        canonicalName: k?.name ?? d,
        isMcp: k?.loadedFrom === "mcp",
        isBuiltIn: z,
        isBundled: V,
        isOfficial: G
      }),
      H = s.queryTracking?.depth ?? 0,
      K = H > 0 ? "nested-skill" : "claude-proactive",
      re = s.agentId,
      Y = k?.type === "prompt" ? k.source : void 0,
      J = 0;
    for (let E of w.messages) J += TQt(E)?.length ?? 0;
    if (k?.type === "prompt" && k.pluginInfo && !v) DP(k.pluginInfo.repository, "skill", ynt(k, k.pluginInfo.pluginManifest.name));
    i("tengu_skill_tool_invocation", {
      command_name: X,
      _PROTO_skill_name: d,
      ...se,
      execution_context: v ? y("read-only") : y("inline"),
      invocation_trigger: c(K),
      query_depth: H,
      ...s.queryTracking && {
        query_chain_id: _e(s.queryTracking.chainId)
      },
      ...chr(l, l !== void 0 && lB().has(l)),
      ...re && {
        parent_agent_id: _e(re)
      },
      ...q7(Y, k?.loadedFrom, k?.kind, k?.type === "prompt" ? k.createdBy : void 0),
      ...iZe(Y, d),
      attribution_shown: sZe(s.session, Y, d) !== null,
      ...k?.type === "prompt" && {
        skill_content_chars: k.contentLength
      },
      skill_body_chars: J,
      ...!1,
      ...k?.type === "prompt" && k.pluginInfo && cCt(k),
      ...k?.type === "prompt" && Y7(k)
    }), Vtt(d, k, K);
    let W = s.toolUseId ?? on(g, co),
      j = w.messages.filter((E) => {
        if (E.type === "progress") return !1;
        if (E.type === "user" && "message" in E) {
          let B = E.message.content;
          if (typeof B === "string" && B.includes(`<${Wg}>`)) return !1
        }
        return !0
      }),
      Z = v ? j.map(TQt).find((E) => E !== null) ?? void 0 : void 0,
      ee = tn(nn({
        messages: j,
        contextMessages: s.messages,
        commandName: d,
        args: n,
        priorContent: N?.content ?? Z,
        renderedContent: kK().get(D)?.content ?? Z
      }), W);
    t(`SkillTool returning ${ee.length} newMessages for skill ${d}`), _("skill_invoke");
    let q = [];
    if (I.length > 0) q.push({
      kind: "allowed_tools",
      allowedTools: I
    });
    let ne = s.getAppState(),
      Q = U && dYe({
        skillModel: U,
        mode: ne.toolPermissionContext.mode,
        fastMode: ne.fastMode ?? !1
      }) ? iHt(U, s.options.mainLoopModel) : void 0;
    if (Q) q.push({
      kind: "model",
      mainLoopModel: Q
    });
    if (F !== void 0) q.push({
      kind: "effort",
      effort: F
    });
    return O = !0, {
      data: {
        success: !0,
        commandName: d,
        allowedTools: I.length > 0 ? I : void 0,
        model: Q,
        ...v && {
          readOnly: !0
        }
      },
      newMessages: ee,
      ...q.length > 0 && {
        contextLayers: q
      }
    }
  } finally {
    if (v || !O) s.options.activeSkill = S
  }
}
var Zje = Ft({
    name: co,
    searchHint: "invoke a slash-command skill",
    isEnabled() {
      return uin()
    },
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    get inputSchema() {
      return Ge()
    },
    get outputSchema() {
      return Ke()
    },
    description: async ({
      skill: e
    }) => `Execute skill: ${e}`,
    prompt: async () => Sho(),
    toAutoClassifierInput: ({
      skill: e
    }) => e ?? "",
    create(e) {
      let n = e;
      return {
        async validateInput({
          skill: s
        }) {
          let r = s.trim();
          if (!r) return m("skill_invoke", "skill_invoke_empty_name"), {
            result: !1,
            message: `Invalid skill format: ${s}`,
            errorCode: 1
          };
          let g = r.startsWith("/");
          if (g) i("tengu_skill_tool_slash_prefix", {});
          let a = g ? r.substring(1) : r,
            h, d = await oe(n),
            S = ie(a, d, n),
            l = S.command,
            v = qF(a);
          if (ove(n.session) && (!l || wCt(l)) && (l !== void 0 || vco(v))) {
            let R = await _Jt(v);
            if (!R.ok) h = R.reason;
            else d = await oe(n), S = ie(a, d, n), l = S.command
          }
          if (l?.type === "prompt" && l.loadDefinition !== void 0) await l.loadDefinition(), d = await oe(n), S = ie(a, d, n), l = S.command;
          if (h !== void 0 && (!l || wCt(l))) return m("skill_invoke", "skill_invoke_not_materialized"), {
            result: !1,
            message: `Skill ${a} could not be downloaded (${h}). Proceed without it.`,
            errorCode: 10
          };
          if (l?.loadedFrom === "syncedSkills" && v8()) return m("skill_invoke", "skill_invoke_sync_vetoed"), {
            result: !1,
            message: `Unknown skill: ${a}`,
            errorCode: 13
          };
          if (!l) {
            let R = jar(d, a, n.spawnedBySkill);
            if (R.length > 0) {
              let b = S.kind === "ambiguous" ? S.candidates.filter((w) => !crt(w, a) && qee(w.name)) : [];
              if (S.kind === "ambiguous") i("tengu_skill_tool_suffix_match", {
                candidate_count: S.candidates.length
              });
              return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: b.length > 0 ? `Unknown skill: ${a}. Several skills match that name: ${[...b,...R].map((w)=>w.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.` : `Unknown skill: ${a}. Directory-scoped variants exist: ${R.map((w)=>w.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                errorCode: 2
              }
            }
            if (S.kind === "suggestion") {
              if (i("tengu_skill_tool_suffix_match", {
                  candidate_count: 1
                }), qee(S.suggestion.name)) return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: `Unknown skill: ${a}. Did you mean ${S.suggestion.name}? Invoke it by that full name.`,
                errorCode: 2
              }
            }
            if (S.kind === "ambiguous") {
              i("tengu_skill_tool_suffix_match", {
                candidate_count: S.candidates.length
              });
              let b = S.candidates.filter((I) => !crt(I, a)),
                w = b.length === 1 ? b[0] : void 0;
              if (b.length > 0 && b.every((I) => qee(I.name))) return m("skill_invoke", "skill_invoke_not_found"), {
                result: !1,
                message: w !== void 0 ? `Unknown skill: ${a}. Did you mean ${w.name}? Invoke it by that full name.` : `Unknown skill: ${a}. Several skills match that name: ${b.map((I)=>I.name).join(", ")} \u2014 invoke one by its full name.`,
                errorCode: 2
              }
            }
            let T = IJ(a, d.map((b) => ({
              name: Co(b),
              aliases: b.aliases
            })), {
              maxEditDistance: 2
            });
            m("skill_invoke", "skill_invoke_not_found");
            let k = await Tln()?.catch(() => {
                return
              }),
              D = k && be(a, k.errors, new Set(k.enabled.map((b) => b.name))),
              N = T ? `Unknown skill: ${a}. Did you mean ${T}?` : `Unknown skill: ${a}`;
            return {
              result: !1,
              message: D ? `${N}${T?"":"."} ${D}` : N,
              errorCode: 2
            }
          }
          if (l.type === "prompt" && (l.context === "fork" || l.getContext !== void 0 && n.spawnedByForkedSkill === !0) && n.spawnedBySkill === HP(l)) return m("skill_invoke", "skill_invoke_fork_recursion"), i("tengu_skill_tool_fork_recursion_blocked", {}), {
            result: !1,
            message: `Skill ${a} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${co} tool.`,
            errorCode: 9
          };
          let O = Iqt(l, {
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
              case "disable_model_invocation": {
                let {
                  sanitizedName: R,
                  skillNameHash: T
                } = _W({
                  rawName: a,
                  canonicalName: l.name,
                  isMcp: l.loadedFrom === "mcp",
                  isBuiltIn: BO().has(a),
                  isBundled: l.type === "prompt" && l.source === "bundled",
                  isOfficial: l.type === "prompt" && MG(l)
                });
                m("skill_invoke", "skill_invoke_model_disabled", {
                  command_name: R,
                  ...T
                });
                break
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
                break
            }
            return {
              result: !1,
              message: O.message,
              errorCode: O.errorCode
            }
          }
          return {
            result: !0
          }
        },
        async checkPermissions({
          skill: s,
          args: r
        }) {
          let g = s.trim(),
            a = g.startsWith("/") ? g.substring(1) : g,
            h = n.permissions(),
            d = await oe(n),
            S = ie(a, d, n),
            l = S.command,
            v = S.kind === "ambiguous" ? S.candidates : [l],
            O = SX(h, Zje, "deny");
          for (let [U, F] of O.entries())
            if (v.some((z) => ue(U, a, z))) return {
              behavior: "deny",
              message: "Skill execution blocked by permission rules",
              decisionReason: {
                type: "rule",
                rule: F
              }
            };
          let R = SX(h, Zje, "allow"),
            T;
          for (let [U, F] of R.entries()) {
            let z = ye(U, a, l);
            if (z === "allow") return {
              behavior: "allow",
              updatedInput: {
                skill: s,
                args: r
              },
              decisionReason: {
                type: "rule",
                rule: F
              }
            };
            if (z === "held-back-nonholder") T = {
              rule: U,
              kind: "nonholder"
            };
            else if (z === "held-back-boundary") T ??= {
              rule: U,
              kind: "boundary"
            }
          }
          if (l?.type === "prompt" && (en(l) || Oge(n))) return {
            behavior: "allow",
            updatedInput: {
              skill: s,
              args: r
            },
            decisionReason: void 0
          };
          let k = l?.type === "prompt" && l.source === "plugin" ? l.pluginInfo?.pluginManifest.name : void 0,
            D = Uge() && WB(a) && !(l !== void 0 && Vee(l)),
            N = T === void 0 ? void 0 : D ? "nonholder" : T.kind;
          if (N !== void 0 && h.mode !== "bypassPermissions" && wle(h, Zje) === null) qe(N);
          let b = T === void 0 || N === void 0 ? void 0 : Se(T.rule, l?.name ?? a, N === "nonholder" ? {
              kind: "nonholder",
              pluginName: k
            } : {
              kind: "boundary"
            }),
            w = b === void 0 ? void 0 : {
              type: "other",
              reason: b
            };
          if (D) return {
            behavior: "ask",
            message: `Execute skill: ${a}${b?` \u2014 ${b}`:""}`,
            decisionReason: w,
            suppressAlwaysAllowRule: !0,
            updatedInput: {
              skill: s,
              args: r
            },
            metadata: l ? {
              command: l
            } : void 0
          };
          let I = [{
            type: "addRules",
            rules: [{
              toolName: co,
              ruleContent: a
            }],
            behavior: "allow",
            destination: "localSettings"
          }, {
            type: "addRules",
            rules: [{
              toolName: co,
              ruleContent: `${a}:*`
            }],
            behavior: "allow",
            destination: "localSettings"
          }];
          return {
            behavior: "ask",
            message: `Execute skill: ${a}${b?` \u2014 ${b}`:""}`,
            decisionReason: w,
            suggestions: I,
            updatedInput: {
              skill: s,
              args: r
            },
            metadata: l ? {
              command: l
            } : void 0
          }
        },
        call(s, r) {
          if (!r.runEngine) return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
          return r.runEngine(Xe, {
            input: s,
            parentMessage: r.parentMessage,
            onProgress: r.onProgress
          })
        }
      }
    },
    mapToolResultToToolResultBlockParam(e, n) {
      if ("status" in e && e.status === "forked") return {
        type: "tool_result",
        tool_use_id: n,
        content: e.background ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}` : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`
      };
      if ("readOnly" in e && e.readOnly) return {
        type: "tool_result",
        tool_use_id: n,
        content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`
      };
      return {
        type: "tool_result",
        tool_use_id: n,
        content: `Launching skill: ${e.commandName}`
      }
    },
    renderToolUseMessage: ve
  }),
  Ze = new Set(["type", "progressMessage", "contentLength", "contentHash", "argNames", "model", "effort", "source", "pluginInfo", "serverAttribution", "disableNonInteractive", "skillRoot", "skillDir", "context", "agent", "background", "getPromptForCommand", "getEffort", "getDefaultEffort", "onUserTypedArgs", "getContext", "declaredFields", "pluginSource", "metadata", "createdBy", "fallback", "unqualifiedName", "bareNameReserved", "name", "description", "menuDescription", "hasUserSpecifiedDescription", "isEnabled", "isHidden", "aliases", "subcommands", "subcommandsBareOnly", "isMcp", "argumentHint", "whenToUse", "paths", "version", "disableModelInvocation", "disableBridgeInvocation", "userInvocable", "loadedFrom", "immediate", "userFacingName", "getArgumentCompletions"]);

function en(e) {
  for (let n of Object.keys(e)) {
    if (Ze.has(n)) continue;
    let s = e[n];
    if (s === void 0 || s === null) continue;
    if (Array.isArray(s) && s.length === 0) continue;
    if (typeof s === "object" && !Array.isArray(s) && Object.keys(s).length === 0) continue;
    return !1
  }
  return !0
}

function nn({
  messages: e,
  contextMessages: n,
  commandName: s,
  args: r,
  priorContent: g,
  renderedContent: a
}) {
  if (!g || !a) return e;
  if (e.some((l) => l.type === "user" && l.promptShellHandOff !== void 0)) return e;
  let h = $nt(n, g);
  if (!h) return e;
  if (g !== a) {
    let l = g.endsWith(EQt) ? `(Re-invocation of /${s} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)` : `(Re-invocation of /${s} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
    return [Ce({
      content: l,
      isMeta: !0
    }), ...e]
  }
  let d = !1,
    S = e.map((l) => {
      if (TQt(l) !== a) return l;
      return d = !0, Ce({
        content: h === "attachment" ? `Skill /${s} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${r?` Arguments: ${r}`:""}` : `Skill /${s} is already loaded above; instructions unchanged.${r?` Arguments: ${r}`:""}`,
        isMeta: !0
      })
    });
  if (d) t(`SkillTool eliding byte-identical re-invocation of skill ${s}`);
  return S
}

function tn(e, n) {
  if (!n) return e;
  return e.map((s) => {
    if (s.type === "user") return {
      ...s,
      sourceToolUseID: n
    };
    return s
  })
}

function on(e, n) {
  let s = e.message.content.find((r) => r.type === "tool_use" && r.name === n);
  return s && s.type === "tool_use" ? s.id : void 0
}
export {
  Pqt,
  Iqt,
  qJr,
  yEn,
  Zje
};
