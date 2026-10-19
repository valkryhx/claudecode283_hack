// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ULt } from "B:/~BUN/root/chunk-c44qc88s.js";
import { PIe, N4n, F4n } from "B:/~BUN/root/chunk-xj6zztfr.js";
import { WK, $je, VG } from "B:/~BUN/root/chunk-et37ax67.js";
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
async function lxr(e, o, n) {
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
function RTo(e) {
  hr().bundledSkillSessionResetHooks.push(e);
}
function G8e() {
  for (let e of hr().bundledSkillSessionResetHooks) try {
    e();
  } catch (error) {
    t(`[skills] session-reset hook failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
function EJs(e) {
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
    skillRoot: V8e(e.name),
    getPromptForCommand: getPromptForCommand_2
  };
}
function ri(e) {
  let {
      skillRoot: skillRoot,
      getPromptForCommand: getPromptForCommand_3
    } = EJs(e),
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
  PIe(r, "description", e.description), PIe(r, "menuDescription", e.menuDescription), PIe(r, "argumentHint", e.argumentHint), PIe(r, "whenToUse", e.whenToUse), N4n(r, "disableModelInvocation", e.disableModelInvocation), F4n(r, e.policyGate);
  let s = hr();
  if (e.survivesBundledKillSwitch) s.bundledSkillKillSwitchSurvivors.add(r);
  s.bundledSkills.push(r);
}
function _X() {
  let e = hr();
  if (WK()) return e.bundledSkills.filter(item => e.bundledSkillKillSwitchSurvivors.has(item));
  if ($je()) return e.bundledSkills.filter(item => e.bundledSkillKillSwitchSurvivors.has(item) || !VG(item.name));
  return [...e.bundledSkills];
}
function oLt(e) {
  if (e.type !== "prompt" || e.source !== "bundled") return !1;
  for (let o of hr().bundledSkillKillSwitchSurvivors) if (o === e || o.name === e.name) return !1;
  return VG(e.name);
}
function jrn() {
  return [...hr().bundledSkills];
}
function V8e(e) {
  let bundledSkillFilesElsewhere = hr().bundledSkillFilesElsewhere;
  return bundledSkillFilesElsewhere ? E.join(bundledSkillFilesElsewhere.root, e) : P(ULt(), e);
}
async function R(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = V8e(e);
  try {
    return await y(n, o, "verify-content"), g("skill_bundled_extract"), n;
  } catch (error) {
    return t(`Failed to extract bundled skill '${e}' to ${n}: ${error instanceof Error ? error.message : String(error)}`), m("skill_bundled_extract", "skill_bundled_extract_write_failed"), null;
  }
}
async function dxr(e, o) {
  if (Object.keys(o).length === 0) return null;
  let n = V8e(e);
  try {
    return await y(n, o, !0), n;
  } catch (error) {
    return t(`Failed to extract additional skill files for '${e}' to ${n}: ${error instanceof Error ? error.message : String(error)}`), null;
  }
}
function y(e, o, tolerateExisting) {
  let bundledSkillFilesElsewhere_2 = hr().bundledSkillFilesElsewhere;
  return bundledSkillFilesElsewhere_2 ? bundledSkillFilesElsewhere_2.write(e, o) : lxr(e, o, {
    tolerateExisting: tolerateExisting
  });
}
export { lxr, RTo, G8e, EJs, ri, _X, oLt, jrn, V8e, dxr };