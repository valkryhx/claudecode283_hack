// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ltn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { j2e, vPr, EPr } from "B:/~BUN/root/chunk-r0s8ec1v.js";
import { zX, pZe, O3 } from "B:/~BUN/root/chunk-jy87sa4x.js";
import { join as P, posix as E } from "path";
import { constants as S } from "fs";
import { lstat as b, mkdir as x, open as w, readFile as C } from "fs/promises";
import v, { dirname as F } from "path";
var I = S.O_NOFOLLOW ?? 0,
  O = "wx";
async function T(e, o, n = 384) {
  let r = await w(e, O, n);
  try {
    if (n !== 384) await r.chmod(n);
    await r.writeFile(o, "utf8");
  } finally {
    await r.close();
  }
}
function B(e, o, n = v) {
  let r = n.normalize(o);
  if (n.isAbsolute(r) || r.split(n.sep).includes("..") || r.split("/").includes("..")) throw Error("bundled file path escapes its extraction dir");
  return n.join(e, r);
}
async function Gmo(e, o, n) {
  let r = new Map();
  for (let [s, c] of Object.entries(o)) {
    let a = B(e, s),
      d = F(a),
      u = [a, c, n?.mode?.(s) ?? 384],
      i = r.get(d);
    if (i) i.push(u);else r.set(d, [u]);
  }
  await Promise.all([...r].map(async ([s, c]) => {
    await x(s, {
      recursive: !0,
      mode: 448
    }), await Promise.all(c.map(([a, d, u]) => T(a, d, u).catch(i => {
      if (n?.tolerateExisting && k(i) === "EEXIST") {
        if (n.tolerateExisting !== "verify-content") return b(a).then(l => {
          if (!l.isFile()) throw i;
        });
        return b(a).then(l => {
          if (!l.isFile()) throw i;
          return C(a, "utf8");
        }).then(l => {
          if (l !== d) throw i;
        });
      }
      throw i;
    })));
  }));
}
function RNn(e) {
  Fr().bundledSkillSessionResetHooks.push(e);
}
function Umt() {
  for (let e of Fr().bundledSkillSessionResetHooks) try {
    e();
  } catch (error) {
    t(`[skills] session-reset hook failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
function Oca(e) {
  let {
      files: files
    } = e,
    n = typeof files === "function";
  if (!files || !n && Object.keys(files).length === 0) return {
    skillRoot: void 0,
    getPromptForCommand: e.getPromptForCommand
  };
  let r,
    s,
    getPromptForCommand = e.getPromptForCommand,
    getPromptForCommand_2 = async (d, u) => {
      s ??= (async () => {
        let f = r ?? (n ? await files(u) : files);
        if (Object.keys(f).length > 0) r = f;
        return R(e.name, f);
      })();
      let i = s,
        p;
      try {
        p = await i;
      } catch (error) {
        if (s === i) s = void 0, r = void 0;
        throw error;
      }
      if (s === i) s = void 0;
      let l = await getPromptForCommand(d, u, p);
      if (p === null) return l;
      let text = `Base directory for this skill: ${p}

`;
      if (l.length > 0 && l[0].type === "text") return [{
        type: "text",
        text: text + l[0].text
      }, ...l.slice(1)];
      return [{
        type: "text",
        text: text
      }, ...l];
    };
  return {
    skillRoot: Bmt(e.name),
    getPromptForCommand: getPromptForCommand_2
  };
}
function Nl(e) {
  let {
      skillRoot: skillRoot,
      getPromptForCommand: getPromptForCommand_3
    } = Oca(e),
    r = {
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
      skillRoot: skillRoot,
      context: e.context,
      getContext: e.getContext,
      agent: e.agent,
      background: e.background,
      formatForegroundForkResult: e.formatForegroundForkResult,
      isEnabled: e.isEnabled,
      policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate,
      requires: e.requires,
      isHidden: !(e.userInvocable ?? !0),
      progressMessage: e.progressMessage ?? "running",
      getPromptForCommand: getPromptForCommand_3,
      getEffort: e.getEffort,
      getDefaultEffort: e.getDefaultEffort,
      onUserTypedArgs: e.onUserTypedArgs,
      getArgumentCompletions: e.getArgumentCompletions,
      enterTakesArgumentCompletion: e.enterTakesArgumentCompletion
    };
  j2e(r, "description", e.description), j2e(r, "menuDescription", e.menuDescription), j2e(r, "argumentHint", e.argumentHint), j2e(r, "whenToUse", e.whenToUse), vPr(r, "disableModelInvocation", e.disableModelInvocation), EPr(r, e.policyGate);
  let s = Fr();
  if (e.survivesBundledKillSwitch) s.bundledSkillKillSwitchSurvivors.add(r);
  s.bundledSkills.push(r);
}
function dse() {
  let e = Fr();
  if (zX()) return e.bundledSkills.filter(item => e.bundledSkillKillSwitchSurvivors.has(item));
  if (pZe()) return e.bundledSkills.filter(item => e.bundledSkillKillSwitchSurvivors.has(item) || !O3(item.name));
  return [...e.bundledSkills];
}
function Uen(e) {
  if (e.type !== "prompt" || e.source !== "bundled") return !1;
  for (let o of Fr().bundledSkillKillSwitchSurvivors) if (o === e || o.name === e.name) return !1;
  return O3(e.name);
}
function ANn() {
  return [...Fr().bundledSkills];
}
function Bmt(e) {
  let bundledSkillFilesElsewhere = Fr().bundledSkillFilesElsewhere;
  return bundledSkillFilesElsewhere ? E.join(bundledSkillFilesElsewhere.root, e) : P(ltn(), e);
}
async function R(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = Bmt(e);
  try {
    return await y(n, o, "verify-content"), g("skill_bundled_extract"), n;
  } catch (error) {
    return t(`Failed to extract bundled skill '${e}' to ${n}: ${error instanceof Error ? error.message : String(error)}`), m("skill_bundled_extract", "skill_bundled_extract_write_failed"), null;
  }
}
async function Vmo(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = Bmt(e);
  try {
    return await y(n, o, !0), n;
  } catch (error) {
    return t(`Failed to extract additional skill files for '${e}' to ${n}: ${error instanceof Error ? error.message : String(error)}`), null;
  }
}
function y(e, o, tolerateExisting) {
  let bundledSkillFilesElsewhere_2 = Fr().bundledSkillFilesElsewhere;
  return bundledSkillFilesElsewhere_2 ? bundledSkillFilesElsewhere_2.write(e, o) : Gmo(e, o, {
    tolerateExisting: tolerateExisting
  });
}
export { Gmo, RNn, Umt, Oca, Nl, dse, Uen, ANn, Bmt, Vmo };