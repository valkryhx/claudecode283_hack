// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F, d, ci } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { O$e } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { aS, In, dm, d5, $n } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { bN } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { wR } from "B:/~BUN/root/chunk-zstr1969.js";
import { gc } from "B:/~BUN/root/chunk-yg4ttpr7.js";
import { w5e, _xt, l6, QJr, Gro, rpr, BOt, h9e, oas } from "B:/~BUN/root/chunk-27h4st9h.js";
import { td, Tue } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { xNt } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { pL } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import * as p from "fs/promises";
import * as u from "path";
async function V1r(n, e) {
  if (e === "builtin") {
    let g = wR(n.name);
    if (!g) throw Error(`Built-in plugin ${n.name} not found`);
    return {
      commands: [],
      agents: [],
      skills: g.skills?.map(_ => ({
        name: _.name
      })) ?? [],
      hooks: g.hooks ? Object.keys(g.hooks) : [],
      mcpServers: g.mcpServers ? Object.keys(g.mcpServers) : [],
      lspServers: []
    };
  }
  let r = dm(e) || e === aS,
    o = $n(n.source).name || n.name,
    c = e === In ? (await BOt(`${o}@${e}`, void 0, "load"))?.entry ?? (await Gro(o, void 0, !0))?.entry : void 0,
    m = r ? void 0 : c ?? (await rpr(e, void 0)).plugins.find(item => item.name === o);
  if (!m && !r) throw Error(`Plugin ${o} not found in marketplace ${e}`);
  let [commands, agents, skills] = await Promise.all([O([n.commandsPath, ...(n.commandsPaths ?? [])]), O([n.agentsPath, ...(n.agentsPaths ?? [])]), x([n.skillsPath, ...(n.skillsPaths ?? [])], n.name, n.entriesAnchor)]),
    hooks = n.hooksConfig ? Object.keys(n.hooksConfig) : k(m?.hooks),
    s = n.mcpServers ? Object.keys(n.mcpServers) : L(await M(n)),
    mcpServers = s.length > 0 ? s : k(m?.mcpServers),
    h = n.lspServers ? Object.keys(n.lspServers) : (await A(n)).concat(k(n.manifest.lspServers)),
    lspServers = h.length > 0 ? L(h) : k(m?.lspServers);
  return {
    commands: commands,
    agents: agents,
    skills: skills,
    hooks: hooks,
    mcpServers: mcpServers,
    lspServers: lspServers
  };
}
async function Mma(n, e, r) {
  let [o, c, m] = await Promise.all([Promise.all(n.skills.map(item => S(item.path ? u.join(item.path, "SKILL.md") : void 0, j(item, r)))), Promise.all(n.agents.map(item => S(item.path, item.name, "agent"))), Promise.all(n.commands.map(item => S(item.path, j(item, r))))]),
    i = [...o, ...c, ...m],
    f = i.map(item => item.alwaysOn).filter(Boolean).join(`
`),
    l = i.map(item => item.onInvoke).filter(Boolean).join(`

`),
    tokens = {};
  for (let s of e) {
    let [always_on, on_invoke] = await Promise.all([I(f, s), I(l, s)]);
    if (always_on !== null && on_invoke !== null) tokens[s] = {
      always_on: always_on,
      on_invoke: on_invoke
    };
  }
  return {
    tokens: tokens,
    inventory: {
      ...n,
      skills: v(n.skills, o),
      agents: v(n.agents, c),
      commands: v(n.commands, m)
    }
  };
}
function Dma(n, e, r, o = 4) {
  if (r !== void 0 && e > 0) return Math.round(n / e * r);
  return gc(" ".repeat(n), o);
}
var E = 1048576;
function j(n, e) {
  if (!e) return n.name;
  return `${e}:${n.name.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
async function S(n, name, r = "skill") {
  if (!n) return {
    alwaysOn: "",
    onInvoke: ""
  };
  let o;
  try {
    o = await b(n, E);
  } catch (error) {
    return C(n, error), {
      alwaysOn: "",
      onInvoke: ""
    };
  }
  let {
      frontmatter: frontmatter,
      content: content
    } = td(o, n, {
      normalizeKeys: !0
    }),
    i = {
      description: Tue(frontmatter.description, name) ?? w5e(content, "Skill"),
      whenToUse: frontmatter.when_to_use != null ? String(frontmatter.when_to_use) : void 0
    },
    {
      description: description,
      whenToUse: whenToUse
    } = r === "agent" ? i : xNt({
      ...i,
      argumentHint: void 0,
      argumentNames: []
    });
  return {
    alwaysOn: oas({
      name: name,
      description: description,
      whenToUse: whenToUse
    }),
    onInvoke: content.trim()
  };
}
async function b(n, e) {
  let r = await p.open(n, "r");
  try {
    let {
        size: size
      } = await r.stat(),
      c = Math.min(size, e),
      m = Buffer.alloc(c),
      {
        bytesRead: bytesRead
      } = await r.read(m, 0, c, 0);
    return m.toString("utf8", 0, bytesRead);
  } finally {
    await r.close();
  }
}
function v(n, e) {
  return n.map((item, index) => {
    let c = e[index];
    if (!c) return item;
    return {
      ...item,
      chars: {
        always_on: c.alwaysOn.length,
        on_invoke: c.onInvoke.length
      }
    };
  });
}
async function I(content_2, e) {
  if (!content_2) return 0;
  return h9e([{
    role: "user",
    content: content_2
  }], [], e);
}
function k(n) {
  return [n].flat().filter(item => item != null && typeof item === "object").flatMap(Object.keys);
}
async function M(n) {
  if (n.isBuiltin) return [];
  let e = [await D(await T(n, ".mcp.json"))];
  for (let r of [n.manifest.mcpServers ?? []].flat()) if (typeof r !== "string") e.push(k(r));else if (!pL(r) && !bN(r) && !O$e(r)) e.push(await D(n.filesAnchor === void 0 ? await _xt(n, r) : (await QJr(n.filesAnchor, n.path, r)) ? null : u.join(n.path, r)));
  return e.flat();
}
async function D(n) {
  if (n === null) return [];
  try {
    let e = ee(await b(n, E));
    if (e == null || typeof e !== "object") return [];
    let r = "mcpServers" in e && typeof e.mcpServers === "object" ? e.mcpServers : e;
    return r == null ? [] : Object.keys(r);
  } catch {
    return [];
  }
}
async function A(n) {
  try {
    let e = await T(n, ".lsp.json");
    if (e === null) return [];
    let r = await p.readFile(e, "utf-8"),
      o = ee(r);
    if (o == null || typeof o !== "object") return [];
    return Object.keys(o);
  } catch {
    return [];
  }
}
async function T(n, e) {
  if (d5(n)) return _xt(n, e);
  if (n.filesAnchor !== void 0 && (await QJr(n.filesAnchor, n.path, e))) return null;
  return u.join(n.path, e);
}
async function O(n) {
  let e = [],
    r = new Set();
  for (let o of n) {
    if (!o) continue;
    let c;
    try {
      c = await p.readdir(o, {
        withFileTypes: !0
      });
    } catch (error) {
      C(o, error);
      continue;
    }
    for (let m of c) if (m.isFile() && m.name.endsWith(".md")) {
      let path = u.join(o, m.name),
        f = u.resolve(path);
      if (r.has(f)) continue;
      r.add(f), e.push({
        name: u.basename(m.name, ".md"),
        path: path
      });
    }
  }
  return e;
}
async function x(n, e, r) {
  let o = [],
    c = new Set(),
    m = (name_2, path_2) => {
      let l = u.resolve(path_2);
      if (c.has(l)) return;
      c.add(l), o.push({
        name: name_2,
        path: path_2
      });
    };
  for (let i of n) {
    if (!i) continue;
    try {
      let l = u.join(i, "SKILL.md");
      if ((await p.stat(l)).isFile() && (r === void 0 || (await l6(r, i, "SKILL.md")) === void 0)) {
        let s = "";
        try {
          let P = await b(l, E),
            {
              frontmatter: frontmatter_2
            } = td(P, l),
            w = typeof frontmatter_2.name === "string" ? frontmatter_2.name.trim() : "";
          s = w.startsWith(`${e}:`) ? w.slice(e.length + 1) : w;
        } catch {}
        m(s || u.basename(i), i);
        continue;
      }
    } catch {}
    let f;
    try {
      f = await p.readdir(i, {
        withFileTypes: !0
      });
    } catch (error) {
      C(i, error);
      continue;
    }
    for (let l of f) {
      if (!l.isDirectory() && !l.isSymbolicLink()) continue;
      let y = u.join(i, l.name);
      try {
        if ((await p.stat(u.join(y, "SKILL.md"))).isFile() && (r === void 0 || (await l6(r, i, u.join(l.name, "SKILL.md"))) === void 0)) m(l.name, y);
      } catch {}
    }
  }
  return o;
}
function C(n, e) {
  if (t(`Failed to read plugin components from ${n}: ${d(e)}`, {
    level: "error"
  }), ci(e)) return;
  a(F(e));
}
export { V1r, Mma, Dma };