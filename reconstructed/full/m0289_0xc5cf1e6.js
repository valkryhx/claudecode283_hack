// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  no
} from "B:/~BUN/root/chunk-ewvnv67m.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  jzn
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  Ub
} from "B:/~BUN/root/chunk-hyp140x7.js";
import {
  Uhe,
  Rdn,
  Adn
} from "B:/~BUN/root/chunk-yzqr5eyd.js";
import {
  join as B,
  posix as P
} from "path";
import {
  constants as h
} from "fs";
import {
  lstat as b,
  mkdir as k,
  open as x,
  readFile as S
} from "fs/promises";
import w, {
  dirname as C
} from "path";
var U = h.O_NOFOLLOW ?? 0,
  F = "wx";
async function O(e, n, r = 384) {
  let o = await x(e, F, r);
  try {
    if (r !== 384) await o.chmod(r);
    await o.writeFile(n, "utf8")
  } finally {
    await o.close()
  }
}

function T(e, n, r = w) {
  let o = r.normalize(n);
  if (r.isAbsolute(o) || o.split(r.sep).includes("..") || o.split("/").includes("..")) throw Error("bundled file path escapes its extraction dir");
  return r.join(e, o)
}
async function mzn(e, n, r) {
  let o = new Map;
  for (let [s, c] of Object.entries(n)) {
    let a = T(e, s),
      d = C(a),
      u = [a, c, r?.mode?.(s) ?? 384],
      i = o.get(d);
    if (i) i.push(u);
    else o.set(d, [u])
  }
  await Promise.all([...o].map(async ([s, c]) => {
    await k(s, {
      recursive: !0,
      mode: 448
    }), await Promise.all(c.map(([a, d, u]) => O(a, d, u).catch((i) => {
      if (r?.tolerateExisting && v(i) === "EEXIST") {
        if (r.tolerateExisting !== "verify-content") return b(a).then((l) => {
          if (!l.isFile()) throw i
        });
        return b(a).then((l) => {
          if (!l.isFile()) throw i;
          return S(a, "utf8")
        }).then((l) => {
          if (l !== d) throw i
        })
      }
      throw i
    })))
  }))
}

function OOr(e) {
  no().bundledSkillSessionResetHooks.push(e)
}

function dHe() {
  for (let e of no().bundledSkillSessionResetHooks) try {
    e()
  } catch (n) {
    t(`[skills] session-reset hook failed: ${n instanceof Error?n.message:String(n)}`)
  }
}

function p2o(e) {
  let {
    files: n
  } = e, r = typeof n === "function";
  if (!n || !r && Object.keys(n).length === 0) return {
    skillRoot: void 0,
    getPromptForCommand: e.getPromptForCommand
  };
  let o, s, c = e.getPromptForCommand,
    a = async (d, u) => {
      s ??= (async () => {
        let p = o ?? (r ? await n(u) : n);
        if (Object.keys(p).length > 0) o = p;
        return E(e.name, p)
      })();
      let i = s,
        g;
      try {
        g = await i
      } catch (p) {
        if (s === i) s = void 0, o = void 0;
        throw p
      }
      if (s === i) s = void 0;
      let l = await c(d, u, g);
      if (g === null) return l;
      let f = `Base directory for this skill: ${g}

`;
      if (l.length > 0 && l[0].type === "text") return [{
        type: "text",
        text: f + l[0].text
      }, ...l.slice(1)];
      return [{
        type: "text",
        text: f
      }, ...l]
    };
  return {
    skillRoot: uHe(e.name),
    getPromptForCommand: a
  }
}

function ds(e) {
  let {
    skillRoot: n,
    getPromptForCommand: r
  } = p2o(e), o = {
    type: "prompt",
    name: e.name,
    description: typeof e.description === "function" ? "" : e.description,
    menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription,
    aliases: e.aliases,
    subcommands: e.subcommands,
    subcommandsBareOnly: e.subcommandsBareOnly,
    hasUserSpecifiedDescription: !0,
    allowedTools: e.allowedTools ?? [],
    getAllowedTools: e.getAllowedTools,
    disallowedTools: e.disallowedTools ?? [],
    argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
    whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
    model: e.model,
    disableModelInvocation: typeof e.disableModelInvocation === "function" ? !0 : e.disableModelInvocation ?? !1,
    disableBridgeInvocation: e.disableBridgeInvocation,
    userInvocable: e.userInvocable ?? !0,
    terminalOriented: e.terminalOriented,
    argsMayContainSlashCommands: e.argsMayContainSlashCommands,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: e.hooks,
    skillRoot: n,
    context: e.context,
    getContext: e.getContext,
    agent: e.agent,
    background: e.background,
    isEnabled: e.isEnabled,
    policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate,
    requires: e.requires,
    isHidden: !(e.userInvocable ?? !0),
    progressMessage: e.progressMessage ?? "running",
    getPromptForCommand: r,
    getEffort: e.getEffort,
    getDefaultEffort: e.getDefaultEffort,
    onUserTypedArgs: e.onUserTypedArgs,
    getArgumentCompletions: e.getArgumentCompletions
  };
  Uhe(o, "description", e.description), Uhe(o, "menuDescription", e.menuDescription), Uhe(o, "argumentHint", e.argumentHint), Uhe(o, "whenToUse", e.whenToUse), Rdn(o, "disableModelInvocation", e.disableModelInvocation), Adn(o, e.policyGate);
  let s = no();
  if (e.survivesBundledKillSwitch) s.bundledSkillKillSwitchSurvivors.add(o);
  s.bundledSkills.push(o)
}

function ule() {
  let e = no();
  if (Ub()) return e.bundledSkills.filter((n) => e.bundledSkillKillSwitchSurvivors.has(n));
  return [...e.bundledSkills]
}

function MOr() {
  return [...no().bundledSkills]
}

function uHe(e) {
  let n = no().bundledSkillFilesElsewhere;
  return n ? P.join(n.root, e) : B(jzn(), e)
}
async function E(e, n) {
  if (Object.keys(n).length === 0) return null;
  let r = uHe(e);
  try {
    return await y(r, n, "verify-content"), _("skill_bundled_extract"), r
  } catch (o) {
    return t(`Failed to extract bundled skill '${e}' to ${r}: ${o instanceof Error?o.message:String(o)}`), m("skill_bundled_extract", "skill_bundled_extract_write_failed"), null
  }
}
async function gzn(e, n) {
  if (Object.keys(n).length === 0) return null;
  let r = uHe(e);
  try {
    return await y(r, n, !0), r
  } catch (o) {
    return t(`Failed to extract additional skill files for '${e}' to ${r}: ${o instanceof Error?o.message:String(o)}`), null
  }
}

function y(e, n, r) {
  let o = no().bundledSkillFilesElsewhere;
  return o ? o.write(e, n) : mzn(e, n, {
    tolerateExisting: r
  })
}
export {
  mzn,
  OOr,
  dHe,
  p2o,
  ds,
  ule,
  MOr,
  uHe,
  gzn
};
