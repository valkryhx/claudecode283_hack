// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Zg } from "B:/~BUN/root/chunk-nggrknsv.js";
import { FJ, t8n, Zk, nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Lm } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { Rs } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { So, Y5e, ztn } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { fC, uSe, uHe, pHe, Y8t, X8t, $6e } from "B:/~BUN/root/chunk-9grc6xh0.js";
var fvt = ["on", "name-only", "user-invocable-only", "off"];
function x(e) {
  return e.type === "prompt" && e.hiddenBehindPlugin === void 0 && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp");
}
function Lqr(e) {
  let n = X8t(e);
  if (n) return {
    value: n.value,
    source: n.source === "policySettings" ? "policy" : "flag"
  };
  if (!uSe(e.name)) return {
    value: e.disableModelInvocation ? "user-invocable-only" : "on",
    source: "reserved-name"
  };
  if (e.disableModelInvocation) return {
    value: "user-invocable-only",
    source: "author"
  };
  if (e.source === "plugin") return {
    value: "on",
    source: "plugin"
  };
  return;
}
function F(e, {
  skipLocalBareKey = !1
} = {}) {
  if (e.loadedFrom === "mcp") {
    let a = [e.name, ...Y8t(e)];
    for (let h of ["projectSettings", "userSettings"]) {
      if (!nn(h)) continue;
      let m = pHe(me(h)?.skillOverrides, a);
      if (m !== void 0) return m;
    }
    return;
  }
  let i = a => nn(a) ? me(a)?.skillOverrides : void 0,
    o = a => fC(i("projectSettings"), a) ?? fC(i("userSettings"), a),
    t = uHe(e),
    f = skipLocalBareKey ? void 0 : fC(me("localSettings")?.skillOverrides, t);
  return o(e.name) ?? (t != null ? f ?? o(t) : void 0);
}
function b(e, n) {
  return e.loadedFrom === "mcp" ? pHe(n, [e.name, ...Y8t(e)]) : fC(n, e.name);
}
function vLe(e, n) {
  if (n === "syncedSkills") return FJ;
  switch (e) {
    case "mcp":
    case "plugin":
      return e;
    case "memoryStore":
      return "memory store";
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return Zk(e);
  }
}
function wVe(e) {
  let n = ztn(e);
  return n !== void 0 && So(e) === n ? n : e.name;
}
function Nqr(e, n) {
  let i = n.filter(item => item.loadedFrom !== "syncedSkills"),
    o = [];
  for (let l of e) {
    let unqualifiedName = l.unqualifiedName;
    if (l.loadedFrom !== "syncedSkills" || unqualifiedName === void 0 || Y5e(l) !== void 0) continue;
    let bare = Zg(unqualifiedName),
      u = Rs(unqualifiedName, i),
      O = Lm(unqualifiedName),
      v = g => [g.name, So(g), ...(g.aliases ?? [])],
      C = g => v(g).find(item => Lm(item) === O),
      d = u ?? i.find(item => C(item));
    if (!d) {
      o.push({
        bare: bare,
        sentence: `Your claude.ai skill can't use /${bare} in this session.`,
        held: !1,
        userCanFree: !1,
        renameNeedsNameLine: !1
      });
      continue;
    }
    let p = d.type === "prompt" ? d : void 0,
      k = p?.skillRoot !== void 0 ? "skill" : `command file ${Zg(d.name)}.md`,
      c,
      s = "",
      renameNeedsNameLine = !1;
    if (d.kind === "workflow") c = "a workflow";else if (d.loadedFrom === "plugin") c = "a command from a plugin";else switch (t8n(d)) {
      case "user":
        {
          let g = p?.skillRoot !== void 0 ? ` in ${Zg(Es(p.skillRoot))}` : "";
          c = `your own ${k}${g}`, renameNeedsNameLine = d.loadedFrom === "skills", s = renameNeedsNameLine ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
          break;
        }
      case "project":
        c = `this project's ${k}`;
        break;
      case "managed":
        c = `a ${k} your organization manages`;
        break;
      case "plugin":
        c = "a command from a plugin";
        break;
      case "remote":
        c = d.loadedFrom === "mcp" ? "a skill from an MCP server" : d.isMcp ? "a prompt from an MCP server" : "another command";
        break;
      case "builtin":
      case "bundled":
        c = "a built-in Claude Code command";
        break;
      default:
        c = "another command";
    }
    let w = `/${Zg(C(d) ?? d.name)}`,
      sentence = u !== void 0 ? `/${bare} runs ${c}${s ? `.${s}` : ", not your claude.ai skill."}` : `/${bare} is too close to ${w}, ${c}${s ? `.${s}` : ", so your claude.ai skill can't use it."}`;
    o.push({
      bare: bare,
      sentence: sentence,
      held: !0,
      userCanFree: s !== "",
      renameNeedsNameLine: renameNeedsNameLine
    });
  }
  if (o.length === 0) return;
  if (o.length === 1) return o[0].sentence;
  let t = o.every(item => item.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session",
    f = `${L(o)} ${t}, so they don't run your claude.ai skills.`,
    a = o.filter(item => item.userCanFree);
  if (a.length === 0) return f;
  let h = a.some(item => item.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename",
    m = a.length === 1 ? "one" : "ones";
  return `${f} ${h} or delete your own ${L(a)} to use the claude.ai ${m}.`;
}
function L(e) {
  let n = e.map(item => `/${item.bare}`);
  if (n.length === 1) return n[0];
  if (n.length <= 4) return `${n.slice(0, -1).join(", ")} and ${n.at(-1)}`;
  return `${n.slice(0, 3).join(", ")} and ${n.length - 3} more`;
}
function vVe(e, {
  sortByTokens = !1
} = {}) {
  let i = e.filter(x);
  if (sortByTokens) {
    let o = new Map(i.map(item => [item, $6e(item)]));
    return i.sort((itemA, itemB) => (o.get(itemB) ?? 0) - (o.get(itemA) ?? 0) || wVe(itemA).localeCompare(wVe(itemB)));
  }
  return i.sort((itemA, itemB) => vLe(itemA.source, itemA.loadedFrom).localeCompare(vLe(itemB.source, itemB.loadedFrom)) || wVe(itemA).localeCompare(wVe(itemB)));
}
function Rtr() {
  return Object.assign(Object.create(null), me("localSettings")?.skillOverrides);
}
function kVe(e, localOverrides = Rtr()) {
  let lowerTier = new Map(),
    locked = new Map();
  for (let t of e) {
    let f = F(t);
    if (f) lowerTier.set(t.name, f);
    let a = Lqr(t);
    if (a) locked.set(t, a);
  }
  return {
    localOverrides: localOverrides,
    lowerTier: lowerTier,
    locked: locked
  };
}
function EVe(e, n) {
  let i = Object.create(null);
  for (let o of e) {
    if (Object.hasOwn(i, o.name)) continue;
    i[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on";
  }
  return i;
}
function u2t(e, n, i) {
  let {
      localOverrides: localOverrides_2,
      lowerTier: lowerTier_2,
      locked: locked_2
    } = i,
    a = new Set(Array.from(locked_2.keys(), r => r.name)),
    h = new Set(a),
    diff = Object.create(null),
    writes = 0,
    effectiveChanged = 0;
  for (let r of e) {
    if (h.has(r.name)) continue;
    h.add(r.name);
    let u = fC(n, r.name) ?? "on",
      O = lowerTier_2.get(r.name) ?? "on",
      v = b(r, localOverrides_2) ?? O;
    if (r.loadedFrom === "mcp") {
      if (u === v) continue;
      let p = !1,
        k = u === O ? void 0 : u;
      if (k !== fC(localOverrides_2, r.name) || Object.hasOwn(diff, r.name)) diff[r.name] = k, p = !0;
      for (let c of Y8t(r)) {
        if (fC(localOverrides_2, c) === void 0) continue;
        for (let s of e) {
          if (s.name === r.name || s.loadedFrom !== "mcp" || !Y8t(s).includes(c) || Object.hasOwn(diff, s.name)) continue;
          let y = b(s, localOverrides_2);
          if ((a.has(s.name) || (fC(n, s.name) ?? "on") === (y ?? lowerTier_2.get(s.name) ?? "on")) && y !== void 0) diff[s.name] = y;
        }
        diff[c] = void 0, p = !0;
      }
      if (p) writes++;
      effectiveChanged++;
      continue;
    }
    let C = r.loadedFrom === "syncedSkills" ? uHe(r) : void 0;
    if (C != null && fC(localOverrides_2, C) !== void 0 && u !== v) {
      let p = F(r, {
          skipLocalBareKey: !0
        }) ?? "on",
        k = u === p ? void 0 : u;
      if (k !== fC(localOverrides_2, r.name)) diff[r.name] = k;
      diff[C] = void 0, writes++, effectiveChanged++;
      continue;
    }
    if (r.loadedFrom === "syncedSkills" && u === v) continue;
    let d = u === O ? void 0 : u;
    if (d !== fC(localOverrides_2, r.name)) diff[r.name] = d, writes++;
    if (u !== v) effectiveChanged++;
  }
  return {
    diff: diff,
    writes: writes,
    effectiveChanged: effectiveChanged
  };
}
export { fvt, Lqr, vLe, wVe, Nqr, vVe, Rtr, kVe, EVe, u2t };