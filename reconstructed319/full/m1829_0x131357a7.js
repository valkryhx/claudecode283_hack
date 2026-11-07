// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  oy
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  FV,
  U0r,
  IR,
  Kt
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Z_
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  ks
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Ts,
  ni
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  bx,
  gMe,
  $5e,
  U5e,
  FTn,
  Fxt,
  yMe,
  $xt,
  $Tn,
  Xct
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  wX
} from "B:/~BUN/root/chunk-detjgwj4.js";
var h2t = ["on", "name-only", "user-invocable-only", "off"];

function x(e) {
  return e.type === "prompt" && e.hiddenBehindPlugin === void 0 && (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "commands_DEPRECATED" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp")
}

function P$o(e) {
  let n = Fxt(e);
  if (n) {
    let t = e.source === "plugin" ? yMe(e) : n.value;
    return {
      value: t,
      source: t !== n.value ? "plugin" : n.source === "policySettings" ? "policy" : "flag"
    }
  }
  if (!gMe(e.name)) return {
    value: e.disableModelInvocation ? "user-invocable-only" : "on",
    source: "reserved-name"
  };
  if (e.disableModelInvocation) return {
    value: "user-invocable-only",
    source: "author"
  };
  if (e.source === "plugin") return {
    value: yMe(e),
    source: "plugin"
  };
  return
}

function F(e, {
  skipLocalBareKey: n = !1
} = {}) {
  if (e.loadedFrom === "mcp") {
    let a = [e.name, ...FTn(e)];
    for (let y of ["projectSettings", "userSettings"]) {
      if (!Kt(y)) continue;
      let m = U5e(be(y)?.skillOverrides, a);
      if (m !== void 0) return m
    }
    return
  }
  let t = (a) => Kt(a) ? be(a)?.skillOverrides : void 0,
    o = (a) => bx(t("projectSettings"), a) ?? bx(t("userSettings"), a),
    i = $5e(e),
    f = n ? void 0 : bx(be("localSettings")?.skillOverrides, i);
  return o(e.name) ?? (i != null ? f ?? o(i) : void 0)
}

function b(e, n) {
  return e.loadedFrom === "mcp" ? U5e(n, [e.name, ...FTn(e)]) : bx(n, e.name)
}

function MYe({
  source: e,
  loadedFrom: n,
  pluginInfo: t
}) {
  if (n === "syncedSkills" || wX(t?.repository)) return FV;
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
      return IR(e)
  }
}

function ist(e) {
  let n = $Tn(e);
  return n !== void 0 && Ts(e) === n ? n : e.name
}

function O$o(e, n) {
  let t = n.filter((l) => l.loadedFrom !== "syncedSkills"),
    o = [];
  for (let l of e) {
    let S = l.unqualifiedName;
    if (l.loadedFrom !== "syncedSkills" || S === void 0 || $xt(l) !== void 0) continue;
    let r = oy(S),
      u = ni(S, t),
      O = Z_(S),
      v = (g) => [g.name, Ts(g), ...g.aliases ?? []],
      C = (g) => v(g).find((R) => Z_(R) === O),
      d = u ?? t.find((g) => C(g));
    if (!d) {
      o.push({
        bare: r,
        sentence: `Your claude.ai skill can't use /${r} in this session.`,
        held: !1,
        userCanFree: !1,
        renameNeedsNameLine: !1
      });
      continue
    }
    let p = d.type === "prompt" ? d : void 0,
      k = p?.skillRoot !== void 0 ? "skill" : `command file ${oy(d.name)}.md`,
      c, s = "",
      h = !1;
    if (d.kind === "workflow") c = "a workflow";
    else if (d.loadedFrom === "plugin") c = "a command from a plugin";
    else switch (U0r(d)) {
      case "user": {
        let g = p?.skillRoot !== void 0 ? ` in ${oy(ks(p.skillRoot))}` : "";
        c = `your own ${k}${g}`, h = d.loadedFrom === "skills", s = h ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one." : " Rename or delete it to use the claude.ai one.";
        break
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
        c = "another command"
    }
    let w = `/${oy(C(d)??d.name)}`,
      N = u !== void 0 ? `/${r} runs ${c}${s?`.${s}`:", not your claude.ai skill."}` : `/${r} is too close to ${w}, ${c}${s?`.${s}`:", so your claude.ai skill can't use it."}`;
    o.push({
      bare: r,
      sentence: N,
      held: !0,
      userCanFree: s !== "",
      renameNeedsNameLine: h
    })
  }
  if (o.length === 0) return;
  if (o.length === 1) return o[0].sentence;
  let i = o.every((l) => l.held) ? "are taken by other commands" : "are taken by other commands or unavailable in this session",
    f = `${L(o)} ${i}, so they don't run your claude.ai skills.`,
    a = o.filter((l) => l.userCanFree);
  if (a.length === 0) return f;
  let y = a.some((l) => l.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename",
    m = a.length === 1 ? "one" : "ones";
  return `${f} ${y} or delete your own ${L(a)} to use the claude.ai ${m}.`
}

function L(e) {
  let n = e.map((t) => `/${t.bare}`);
  if (n.length === 1) return n[0];
  if (n.length <= 4) return `${n.slice(0,-1).join(", ")} and ${n.at(-1)}`;
  return `${n.slice(0,3).join(", ")} and ${n.length-3} more`
}

function ast(e, {
  sortByTokens: n = !1
} = {}) {
  let t = e.filter(x);
  if (n) {
    let o = new Map(t.map((i) => [i, Xct(i)]));
    return t.sort((i, f) => (o.get(f) ?? 0) - (o.get(i) ?? 0) || ist(i).localeCompare(ist(f)))
  }
  return t.sort((o, i) => MYe(o).localeCompare(MYe(i)) || ist(o).localeCompare(ist(i)))
}

function Qzr() {
  return Object.assign(Object.create(null), be("localSettings")?.skillOverrides)
}

function lst(e, n = Qzr()) {
  let t = new Map,
    o = new Map;
  for (let i of e) {
    let f = F(i);
    if (f) t.set(i.name, f);
    let a = P$o(i);
    if (a) o.set(i, a)
  }
  return {
    localOverrides: n,
    lowerTier: t,
    locked: o
  }
}

function dst(e, n) {
  let t = Object.create(null);
  for (let o of e) {
    if (Object.hasOwn(t, o.name)) continue;
    t[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on"
  }
  return t
}

function Fhn(e, n, t) {
  let {
    localOverrides: o,
    lowerTier: i,
    locked: f
  } = t, a = new Set(Array.from(f.keys(), (r) => r.name)), y = new Set(a), m = Object.create(null), l = 0, S = 0;
  for (let r of e) {
    if (y.has(r.name)) continue;
    y.add(r.name);
    let u = bx(n, r.name) ?? "on",
      O = i.get(r.name) ?? "on",
      v = b(r, o) ?? O;
    if (r.loadedFrom === "mcp") {
      if (u === v) continue;
      let p = !1,
        k = u === O ? void 0 : u;
      if (k !== bx(o, r.name) || Object.hasOwn(m, r.name)) m[r.name] = k, p = !0;
      for (let c of FTn(r)) {
        if (bx(o, c) === void 0) continue;
        for (let s of e) {
          if (s.name === r.name || s.loadedFrom !== "mcp" || !FTn(s).includes(c) || Object.hasOwn(m, s.name)) continue;
          let h = b(s, o);
          if ((a.has(s.name) || (bx(n, s.name) ?? "on") === (h ?? i.get(s.name) ?? "on")) && h !== void 0) m[s.name] = h
        }
        m[c] = void 0, p = !0
      }
      if (p) l++;
      S++;
      continue
    }
    let C = r.loadedFrom === "syncedSkills" ? $5e(r) : void 0;
    if (C != null && bx(o, C) !== void 0 && u !== v) {
      let p = F(r, {
          skipLocalBareKey: !0
        }) ?? "on",
        k = u === p ? void 0 : u;
      if (k !== bx(o, r.name)) m[r.name] = k;
      m[C] = void 0, l++, S++;
      continue
    }
    if (r.loadedFrom === "syncedSkills" && u === v) continue;
    let d = u === O ? void 0 : u;
    if (d !== bx(o, r.name)) m[r.name] = d, l++;
    if (u !== v) S++
  }
  return {
    diff: m,
    writes: l,
    effectiveChanged: S
  }
}
export {
  h2t,
  P$o,
  MYe,
  ist,
  O$o,
  ast,
  Qzr,
  lst,
  dst,
  Fhn
};
