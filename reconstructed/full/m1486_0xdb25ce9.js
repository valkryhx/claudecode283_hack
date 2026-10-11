// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  hf
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  zq,
  imn,
  Yb,
  ar
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  b0
} from "B:/~BUN/root/chunk-gj0n7q1s.js";
import {
  Zs
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  xa
} from "B:/~BUN/root/chunk-qqgpf856.js";
import {
  he
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Co
} from "B:/~BUN/root/chunk-yzpw1mdr.js";
import {
  mMe,
  SCt,
  NA,
  hie,
  Hve,
  f7t,
  SDe
} from "B:/~BUN/root/chunk-3jyp964r.js";
var pQe = ["on", "name-only", "user-invocable-only", "off"];

function x(e) {
  return e.type === "prompt" && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp")
}

function mtr(e) {
  let o = f7t(e);
  if (o) return {
    value: o.value,
    source: o.source === "policySettings" ? "policy" : "flag"
  };
  if (!hie(e.name)) return {
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
  return
}

function w(e, {
  skipLocalBareKey: o = !1
} = {}) {
  let i = (l) => ar(l) ? he(l)?.skillOverrides : void 0,
    n = (l) => NA(i("projectSettings"), l) ?? NA(i("userSettings"), l),
    r = Hve(e),
    d = o ? void 0 : NA(he("localSettings")?.skillOverrides, r);
  return n(e.name) ?? (r != null ? d ?? n(r) : void 0)
}

function Ybe(e, o) {
  if (o === "syncedSkills") return zq;
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
      return Yb(e)
  }
}

function yIe(e) {
  let o = SCt(e);
  return o !== void 0 && Co(e) === o ? o : e.name
}

function gtr(e, o) {
  let i = o.filter((a) => a.loadedFrom !== "syncedSkills"),
    n = [];
  for (let a of e) {
    let f = a.unqualifiedName;
    if (a.loadedFrom !== "syncedSkills" || f === void 0 || mMe(a) !== void 0) continue;
    let t = hf(f),
      c = Zs(f, i),
      C = b0(f),
      y = (u) => [u.name, Co(u), ...u.aliases ?? []],
      k = (u) => y(u).find((N) => b0(N) === C),
      s = c ?? i.find((u) => k(u));
    if (!s) {
      n.push({
        bare: t,
        sentence: `Your claude.ai skill can't use /${t} in this session.`,
        held: !1,
        userCanFree: !1,
        renameNeedsNameLine: !1
      });
      continue
    }
    let v = s.type === "prompt" ? s : void 0,
      p = v?.skillRoot !== void 0 ? "skill" : `command file ${hf(s.name)}.md`,
      m, g = "",
      b = !1;
    if (s.kind === "workflow") m = "a workflow";
    else if (s.loadedFrom === "plugin") m = "a command from a plugin";
    else switch (imn(s)) {
      case "user": {
        let u = v?.skillRoot !== void 0 ? ` in ${hf(xa(v.skillRoot))}` : "";
        m = `your own ${p}${u}`, b = s.loadedFrom === "skills", g = b ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
        break
      }
      case "project":
        m = `this project's ${p}`;
        break;
      case "managed":
        m = `a ${p} your organization manages`;
        break;
      case "plugin":
        m = "a command from a plugin";
        break;
      case "remote":
        m = s.loadedFrom === "mcp" ? "a skill from an MCP server" : s.isMcp ? "a prompt from an MCP server" : "another command";
        break;
      case "builtin":
      case "bundled":
        m = "a built-in Claude Code command";
        break;
      default:
        m = "another command"
    }
    let L = `/${hf(k(s)??s.name)}`,
      F = c !== void 0 ? `/${t} runs ${m}${g?`.${g}`:", not your claude.ai skill."}` : `/${t} is too close to ${L}, ${m}${g?`.${g}`:", so your claude.ai skill can't use it."}`;
    n.push({
      bare: t,
      sentence: F,
      held: !0,
      userCanFree: g !== "",
      renameNeedsNameLine: b
    })
  }
  if (n.length === 0) return;
  if (n.length === 1) return n[0].sentence;
  let r = n.every((a) => a.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session",
    d = `${O(n)} ${r}, so they don't run your claude.ai skills.`,
    l = n.filter((a) => a.userCanFree);
  if (l.length === 0) return d;
  let h = l.some((a) => a.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename",
    S = l.length === 1 ? "one" : "ones";
  return `${d} ${h} or delete your own ${O(l)} to use the claude.ai ${S}.`
}

function O(e) {
  let o = e.map((i) => `/${i.bare}`);
  if (o.length === 1) return o[0];
  if (o.length <= 4) return `${o.slice(0,-1).join(", ")} and ${o.at(-1)}`;
  return `${o.slice(0,3).join(", ")} and ${o.length-3} more`
}

function _Ie(e, {
  sortByTokens: o = !1
} = {}) {
  let i = e.filter(x);
  if (o) {
    let n = new Map(i.map((r) => [r, SDe(r)]));
    return i.sort((r, d) => (n.get(d) ?? 0) - (n.get(r) ?? 0) || yIe(r).localeCompare(yIe(d)))
  }
  return i.sort((n, r) => Ybe(n.source, n.loadedFrom).localeCompare(Ybe(r.source, r.loadedFrom)) || yIe(n).localeCompare(yIe(r)))
}

function mkn() {
  return Object.assign(Object.create(null), he("localSettings")?.skillOverrides)
}

function bIe(e, o = mkn()) {
  let i = new Map,
    n = new Map;
  for (let r of e) {
    let d = w(r);
    if (d) i.set(r.name, d);
    let l = mtr(r);
    if (l) n.set(r, l)
  }
  return {
    localOverrides: o,
    lowerTier: i,
    locked: n
  }
}

function SIe(e, o) {
  let i = Object.create(null);
  for (let n of e) {
    if (Object.hasOwn(i, n.name)) continue;
    i[n.name] = o.locked.get(n)?.value ?? NA(o.localOverrides, n.name) ?? o.lowerTier.get(n.name) ?? "on"
  }
  return i
}

function U_t(e, o, i) {
  let {
    localOverrides: n,
    lowerTier: r,
    locked: d
  } = i, l = new Set(Array.from(d.keys(), (t) => t.name)), h = new Set(l), S = Object.create(null), a = 0, f = 0;
  for (let t of e) {
    if (h.has(t.name)) continue;
    h.add(t.name);
    let c = NA(o, t.name) ?? "on",
      C = r.get(t.name) ?? "on",
      y = NA(n, t.name) ?? C,
      k = t.loadedFrom === "syncedSkills" ? Hve(t) : void 0;
    if (k != null && NA(n, k) !== void 0 && c !== y) {
      let v = w(t, {
          skipLocalBareKey: !0
        }) ?? "on",
        p = c === v ? void 0 : c;
      if (p !== NA(n, t.name)) S[t.name] = p;
      S[k] = void 0, a++, f++;
      continue
    }
    if (t.loadedFrom === "syncedSkills" && c === y) continue;
    let s = c === C ? void 0 : c;
    if (s !== NA(n, t.name)) S[t.name] = s, a++;
    if (c !== y) f++
  }
  return {
    diff: S,
    writes: a,
    effectiveChanged: f
  }
}
export {
  pQe,
  mtr,
  Ybe,
  yIe,
  gtr,
  _Ie,
  mkn,
  bIe,
  SIe,
  U_t
};
