// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { te, l, as } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Fxe } from "B:/~BUN/root/chunk-54p0h65d.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { GS } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { z1 } from "B:/~BUN/root/chunk-qqgpf856.js";
import { VF } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { yGe, ave, ske, jwr, wen } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ms, c6 } from "B:/~BUN/root/chunk-rtyz5f1n.js";
import { LL } from "B:/~BUN/root/chunk-yeg3gem6.js";
import { Nu } from "B:/~BUN/root/chunk-q5ke49kw.js";
import { op, Yz, or } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import * as f from "fs/promises";
import * as u from "path";
async function iSn(n, e) {
  if (e === "builtin") {
    let h = VF(n.name);
    if (!h) throw Error(`Built-in plugin ${n.name} not found`);
    return {
      commands: [],
      agents: [],
      skills: h.skills?.map(D => ({
        name: D.name
      })) ?? [],
      hooks: h.hooks ? Object.keys(h.hooks) : [],
      mcpServers: h.mcpServers ? Object.keys(h.mcpServers) : [],
      lspServers: []
    };
  }
  let r = op(e) || e === GS,
    s = or(n.source).name || n.name,
    o = r ? void 0 : (await wen(e, void 0)).plugins.find(item => item.name === s);
  if (!o && !r) throw Error(`Plugin ${s} not found in marketplace ${e}`);
  let [commands, agents, skills] = await Promise.all([_([n.commandsPath, ...(n.commandsPaths ?? [])]), _([n.agentsPath, ...(n.agentsPaths ?? [])]), A([n.skillsPath, ...(n.skillsPaths ?? [])], n.name)]),
    hooks = n.hooksConfig ? Object.keys(n.hooksConfig) : k(o?.hooks),
    i = n.mcpServers ? Object.keys(n.mcpServers) : L(await F(n)),
    mcpServers = i.length > 0 ? i : k(o?.mcpServers),
    y = n.lspServers ? Object.keys(n.lspServers) : (await M(n)).concat(k(n.manifest.lspServers)),
    lspServers = y.length > 0 ? L(y) : k(o?.lspServers);
  return {
    commands: commands,
    agents: agents,
    skills: skills,
    hooks: hooks,
    mcpServers: mcpServers,
    lspServers: lspServers
  };
}
async function aqo(n, e, r) {
  let [s, m, o] = await Promise.all([Promise.all(n.skills.map(item => w(item.path ? u.join(item.path, "SKILL.md") : void 0, b(item, r)))), Promise.all(n.agents.map(item => w(item.path, item.name))), Promise.all(n.commands.map(item => w(item.path, b(item, r))))]),
    c = [...s, ...m, ...o],
    a = c.map(item => item.alwaysOn).filter(Boolean).join(`
`),
    p = c.map(item => item.onInvoke).filter(Boolean).join(`

`),
    tokens = {};
  for (let i of e) {
    let [always_on, on_invoke] = await Promise.all([j(a, i), j(p, i)]);
    if (always_on !== null && on_invoke !== null) tokens[i] = {
      always_on: always_on,
      on_invoke: on_invoke
    };
  }
  return {
    tokens: tokens,
    inventory: {
      ...n,
      skills: S(n.skills, s),
      agents: S(n.agents, m),
      commands: S(n.commands, o)
    }
  };
}
function lqo(n, e, r, s = 4) {
  if (r !== void 0 && e > 0) return Math.round(n / e * r);
  return Nu(" ".repeat(n), s);
}
var v = 1048576;
function b(n, e) {
  if (!e) return n.name;
  return `${e}:${n.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
async function w(n, name) {
  if (!n) return {
    alwaysOn: "",
    onInvoke: ""
  };
  let r;
  try {
    r = await E(n, v);
  } catch (error) {
    return C(n, error), {
      alwaysOn: "",
      onInvoke: ""
    };
  }
  let {
      frontmatter: frontmatter,
      content: content
    } = ms(r, n, {
      normalizeKeys: !0
    }),
    description = c6(frontmatter.description, name) ?? ave(content, "Skill"),
    whenToUse = frontmatter.when_to_use != null ? String(frontmatter.when_to_use) : void 0;
  return {
    alwaysOn: jwr({
      name: name,
      description: description,
      whenToUse: whenToUse
    }),
    onInvoke: content.trim()
  };
}
async function E(n, e) {
  let r = await f.open(n, "r");
  try {
    let {
        size: size
      } = await r.stat(),
      m = Math.min(size, e),
      o = Buffer.alloc(m),
      {
        bytesRead: bytesRead
      } = await r.read(o, 0, m, 0);
    return o.toString("utf8", 0, bytesRead);
  } finally {
    await r.close();
  }
}
function S(n, e) {
  return n.map((item, index) => {
    let m = e[index];
    if (!m) return item;
    return {
      ...item,
      chars: {
        always_on: m.alwaysOn.length,
        on_invoke: m.onInvoke.length
      }
    };
  });
}
async function j(content_2, e) {
  if (!content_2) return 0;
  return ske([{
    role: "user",
    content: content_2
  }], [], e);
}
function k(n) {
  return [n].flat().filter(item => item != null && typeof item === "object").flatMap(Object.keys);
}
async function F(n) {
  if (n.isBuiltin) return [];
  let e = [await I(await T(n, ".mcp.json"))];
  for (let r of [n.manifest.mcpServers ?? []].flat()) if (typeof r !== "string") e.push(k(r));else if (!LL(r) && !z1(r) && !Fxe(r)) e.push(await I(await yGe(n, r)));
  return e.flat();
}
async function I(n) {
  if (n === null) return [];
  try {
    let e = J(await E(n, v));
    if (e == null || typeof e !== "object") return [];
    let r = "mcpServers" in e && typeof e.mcpServers === "object" ? e.mcpServers : e;
    return r == null ? [] : Object.keys(r);
  } catch {
    return [];
  }
}
async function M(n) {
  try {
    let e = await T(n, ".lsp.json");
    if (e === null) return [];
    let r = await f.readFile(e, "utf-8"),
      s = J(r);
    if (s == null || typeof s !== "object") return [];
    return Object.keys(s);
  } catch {
    return [];
  }
}
async function T(n, e) {
  return Yz(n) ? yGe(n, e) : u.join(n.path, e);
}
async function _(n) {
  let e = [],
    r = new Set();
  for (let s of n) {
    if (!s) continue;
    let m;
    try {
      m = await f.readdir(s, {
        withFileTypes: !0
      });
    } catch (error) {
      C(s, error);
      continue;
    }
    for (let o of m) if (o.isFile() && o.name.endsWith(".md")) {
      let path = u.join(s, o.name),
        a = u.resolve(path);
      if (r.has(a)) continue;
      r.add(a), e.push({
        name: u.basename(o.name, ".md"),
        path: path
      });
    }
  }
  return e;
}
async function A(n, e) {
  let r = [],
    s = new Set(),
    m = (name_2, path_2) => {
      let a = u.resolve(path_2);
      if (s.has(a)) return;
      s.add(a), r.push({
        name: name_2,
        path: path_2
      });
    };
  for (let o of n) {
    if (!o) continue;
    try {
      let a = u.join(o, "SKILL.md");
      if ((await f.stat(a)).isFile()) {
        let g = "";
        try {
          let i = await E(a, v),
            {
              frontmatter: frontmatter_2
            } = ms(i, a),
            y = typeof frontmatter_2.name === "string" ? frontmatter_2.name.trim() : "";
          g = y.startsWith(`${e}:`) ? y.slice(e.length + 1) : y;
        } catch {}
        m(g || u.basename(o), o);
        continue;
      }
    } catch {}
    let c;
    try {
      c = await f.readdir(o, {
        withFileTypes: !0
      });
    } catch (error) {
      C(o, error);
      continue;
    }
    for (let a of c) {
      if (!a.isDirectory() && !a.isSymbolicLink()) continue;
      let p = u.join(o, a.name);
      try {
        if ((await f.stat(u.join(p, "SKILL.md"))).isFile()) m(a.name, p);
      } catch {}
    }
  }
  return r;
}
function C(n, e) {
  if (t(`Failed to read plugin components from ${n}: ${l(e)}`, {
    level: "error"
  }), as(e)) return;
  d(te(e));
}
export { iSn, aqo, lqo };