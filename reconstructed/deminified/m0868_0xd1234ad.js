// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { as } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { cre, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I6, O6, no } from "B:/~BUN/root/chunk-ewvnv67m.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ar } from "B:/~BUN/root/chunk-290k5gh5.js";
import { Br } from "B:/~BUN/root/chunk-3daz140w.js";
import { Fy, K7r } from "B:/~BUN/root/chunk-5w2ram39.js";
import { MS } from "B:/~BUN/root/chunk-j14vfkmm.js";
import { dt, Cln } from "B:/~BUN/root/chunk-hhgrczac.js";
import { Use, Ti } from "B:/~BUN/root/chunk-3jyp964r.js";
import { OI } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Nb } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { CSt } from "B:/~BUN/root/chunk-65fmhpf1.js";
import { Ub } from "B:/~BUN/root/chunk-hyp140x7.js";
import { cp, Ks } from "B:/~BUN/root/chunk-1652axk8.js";
var V7r = "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
  _sr = "CLAUDE_REMOTE_WORKFLOW_ARGS",
  q7r = "CLAUDE_WORKFLOW_NAME_ONLY";
function OWe() {
  return a.CLAUDE_WORKFLOW_NAME_ONLY;
}
import { join as F } from "path";
async function h(o, s, n, i, d) {
  let w = ce(),
    e;
  try {
    e = await w.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(e.map(async item => {
    if (!(item.isFile() || item.isSymbolicLink())) return null;
    if (!item.name.endsWith(".js")) return null;
    return v(F(o, item.name), s, n, i, d);
  }))).filter(item => item !== null);
}
async function v(filePath, s, plugin, pluginManifest, d) {
  let w = ce();
  if (cre(w, filePath, d)) return null;
  try {
    let script = await OI(w, filePath, Nb);
    if (script === null) return t(`Plugin workflow ${filePath}: not a regular file or exceeds ${Nb} bytes \u2014 skipping`, {
      level: "warn"
    }), null;
    let r = Fy(script, {
      validateBody: !1
    });
    if ("error" in r) return t(`Plugin workflow ${filePath} has invalid meta: ${r.error} \u2014 skipping`, {
      level: "warn"
    }), null;
    let name = `${s}:${r.meta.name}`;
    return {
      source: "plugin",
      plugin: plugin,
      pluginManifest: pluginManifest,
      name: name,
      description: r.meta.description,
      whenToUse: r.meta.whenToUse,
      phases: r.meta.phases,
      script: script,
      filePath: filePath
    };
  } catch (error) {
    return t(`Failed to load workflow from ${filePath}: ${error}`, {
      level: "error"
    }), null;
  }
}
function P(o) {
  let s = dt();
  return s.workflows ??= (async () => {
    let {
        enabled: enabled,
        errors: errors
      } = await Ti(o),
      d = [];
    if (errors.length > 0) t(`Plugin loading errors: ${errors.map(item => MS(item)).join(", ")}`);
    let w = null;
    for (let e of enabled) {
      let r = new Set(),
        l = d.length;
      if (e.workflowsPath) try {
        let f = await h(e.workflowsPath, e.name, e.source, e.manifest, r);
        if (d.push(...f), f.length > 0) t(`Loaded ${f.length} workflows from plugin ${e.name} default directory`);
      } catch (error) {
        w = "plugin_load_workflows_dir_failed", t(`Failed to load workflows from plugin ${e.name} default directory: ${error}`, {
          level: "error"
        });
      }
      if (e.workflowsPaths) for (let f of e.workflowsPaths) try {
        let c = await ce().stat(f);
        if (c.isDirectory()) {
          let g = await h(f, e.name, e.source, e.manifest, r);
          if (d.push(...g), g.length > 0) t(`Loaded ${g.length} workflows from plugin ${e.name} custom path: ${f}`);
        } else if (c.isFile() && f.endsWith(".js")) {
          let g = await v(f, e.name, e.source, e.manifest, r);
          if (g) d.push(g), t(`Loaded workflow from plugin ${e.name} custom file: ${f}`);
        }
      } catch (error) {
        w = "plugin_load_workflows_path_failed", t(`Failed to load workflows from plugin ${e.name} custom path ${f}: ${error}`, {
          level: "error"
        });
      }
      if (e.serverPluginId !== void 0) for (let f of d.slice(l)) f.serverPluginId = e.serverPluginId;
    }
    if (t(`Total plugin workflows loaded: ${d.length}`), w) m("plugin_load_workflows", w);else _("plugin_load_workflows");
    return d;
  })(), s.workflows;
}
import { join as W } from "path";
function y(o, s) {
  if (!s || K7r(o.script)) return !0;
  return t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${s.source} copy`, {
    level: "warn"
  }), !1;
}
function S(o) {
  let s = new Map();
  for (let n of o) {
    if (!y(n, s.get(n.name))) continue;
    s.set(n.name, n);
  }
  return [...s.values()];
}
import { join as E } from "path";
function S7e() {
  return E(Se(), "workflows");
}
async function T(o, s) {
  try {
    return await Use("workflows", o);
  } catch (error) {
    if (as(error)) return t(`loadWorkflowsDir: project-dir walk failed: ${error.code}`, {
      level: "error"
    }), s.walkFailed = !0, [];
    throw error;
  }
}
async function D(o, source, n, i) {
  if (i !== void 0 && source === "userSettings") return M(i, o, n);
  let d = ce(),
    w;
  try {
    w = await d.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(w.map(async item => {
    if (!(item.isFile() || item.isSymbolicLink())) return null;
    if (!item.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(item.name)) n.nearMissExt++;
      return null;
    }
    let filePath_2 = W(o, item.name),
      f;
    try {
      f = await d.readFileBytes(filePath_2, Nb + 1);
    } catch {
      return n.skippedUnreadable++, null;
    }
    if (f.byteLength > Nb) return t(`Workflow ${filePath_2} exceeds ${Nb} bytes \u2014 skipping`, {
      level: "warn"
    }), n.skippedOversize++, null;
    let script_2 = f.toString("utf-8"),
      c = Fy(script_2, {
        validateBody: !1
      });
    if ("error" in c) return t(`Workflow ${filePath_2} has invalid meta: ${c.error} \u2014 skipping`, {
      level: "warn"
    }), n.skippedInvalidMeta++, null;
    return {
      source: source,
      name: c.meta.name,
      description: c.meta.description,
      whenToUse: c.meta.whenToUse,
      phases: c.meta.phases,
      script: script_2,
      filePath: filePath_2
    };
  }))).filter(item => item !== null);
}
async function M(o, s, n) {
  let i = [];
  switch ((await Ks(cursor => o.listEntries({
    namespace: "userConfigDir",
    dir: "workflows"
  }, cursor === void 0 ? void 0 : {
    cursor: cursor
  }), e => {
    for (let r of e) {
      if (r.kind !== "key" || r.key.namespace !== "userConfigDir") continue;
      let name_2 = r.key.relPath.at(-1);
      if (name_2 === void 0 || r.key.relPath.length !== 1) continue;
      if (!name_2.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(name_2)) n.nearMissExt++;
        continue;
      }
      i.push({
        key: r.key,
        name: name_2
      });
    }
  })).status) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      t(`User workflows listing of ${s} truncated at ${cp} pages \u2014 loading the ${i.length} workflow files seen`, {
        level: "warn"
      }), n.userListingTruncated = !0;
      break;
  }
  return (await Promise.all(i.map(async ({
    key: key,
    name: name_3
  }) => {
    let l = await o.read([{
      key: key,
      offset: 0,
      length: Nb + 1
    }]);
    if (!l.ok) return t(`Workflow ${W(s, name_3)} could not be read through the storage backend (${l.error.code}) \u2014 skipping`, {
      level: "warn"
    }), n.skippedUnreadable++, null;
    let f = l.value.items[0];
    if (f === void 0 || !f.found) return n.skippedUnreadable++, null;
    let filePath_3 = W(s, name_3);
    if (f.value.byteLength > Nb) return t(`Workflow ${filePath_3} exceeds ${Nb} bytes \u2014 skipping`, {
      level: "warn"
    }), n.skippedOversize++, null;
    let script_3 = Buffer.from(f.value).toString("utf-8"),
      g = Fy(script_3, {
        validateBody: !1
      });
    if ("error" in g) return t(`Workflow ${filePath_3} has invalid meta: ${g.error} \u2014 skipping`, {
      level: "warn"
    }), n.skippedInvalidMeta++, null;
    return {
      source: "userSettings",
      name: g.meta.name,
      description: g.meta.description,
      whenToUse: g.meta.whenToUse,
      phases: g.meta.phases,
      script: script_3,
      filePath: filePath_3
    };
  }))).filter(item => item !== null);
}
async function b(o, s) {
  let n = S7e(),
    i = {
      skippedInvalidMeta: 0,
      skippedOversize: 0,
      skippedUnreadable: 0,
      nearMissExt: 0,
      walkFailed: !1,
      userListingTruncated: !1
    },
    d = await T(o, i),
    [w, ...e] = await Promise.all([ar("userSettings") ? D(n, "userSettings", i, s) : Promise.resolve([]), ...(ar("projectSettings") ? d.map(item => D(item, "projectSettings", i)) : [])]),
    r = new Map();
  for (let u of w) {
    if (!y(u, r.get(u.name))) continue;
    r.set(u.name, u);
  }
  for (let u = e.length - 1; u >= 0; u--) for (let c of e[u]) {
    if (!y(c, r.get(c.name))) continue;
    r.set(c.name, c);
  }
  let l = i.walkFailed && ar("projectSettings"),
    f = i.skippedInvalidMeta + i.skippedOversize + i.skippedUnreadable;
  if (l || i.userListingTruncated || f > 0 || i.nearMissExt > 0) p("workflow_discover", l ? "project_dir_walk_failed" : i.userListingTruncated ? "user_listing_truncated" : i.skippedInvalidMeta > 0 ? "invalid_meta" : i.skippedOversize > 0 ? "oversize" : i.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", {
    found: r.size,
    skipped_invalid_meta: i.skippedInvalidMeta,
    skipped_oversize: i.skippedOversize,
    skipped_unreadable: i.skippedUnreadable,
    near_miss_ext: i.nearMissExt,
    ...(i.userListingTruncated && {
      user_listing_truncated: !0
    })
  });else _("workflow_discover", {
    found: r.size
  });
  return [...r.values()].sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
}
function kSe(o, s) {
  return I6(no().allWorkflows, `${Ub()}:${OWe()}:${O6(o)}`, () => j(o, s));
}
async function j(o, s) {
  if (Br("workflows") || OWe()) return [...CSt()];
  let [n, i] = await Promise.all([b(o, s), P(s)]),
    d = S(i),
    w = CSt(),
    e = new Map(w.map(item => [item.name, item])),
    r = O(d, e);
  for (let k of r) e.set(k.name, k);
  let l = O(n, e),
    f = new Set(l.map(item => item.name)),
    u = r.filter(item => !f.has(item.name)),
    c = new Set([...f, ...u.map(item => item.name)]);
  return [...w.filter(item => !c.has(item.name)), ...u, ...l];
}
function O(o, s) {
  return o.filter(item => y(item, s.get(item.name)));
}
async function TSt(o, s, n) {
  return (await kSe(s, n)).find(item => item.name === o);
}
function ATn() {
  no().allWorkflows.clear(), Cln();
}
export { V7r, _sr, q7r, OWe, S7e, kSe, TSt, ATn };