// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ts } from "B:/~BUN/root/chunk-3aez4b53.js";
import { fte, mte, hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Cde, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { Tv, Jts } from "B:/~BUN/root/chunk-431ja9am.js";
import { _w } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { Ne, ZVn } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { tZ, Ys } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { XT } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { DC, Qve } from "B:/~BUN/root/chunk-c44qc88s.js";
import { I4t } from "B:/~BUN/root/chunk-m3t3q7ca.js";
import { $4n } from "B:/~BUN/root/chunk-et37ax67.js";
import { Em, pa } from "B:/~BUN/root/chunk-wg7rg6k5.js";
import { join as E } from "path";
async function _(o, l, r, n, d) {
  let w = se(),
    e;
  try {
    e = await w.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(e.map(async item => {
    if (!(item.isFile() || item.isSymbolicLink())) return null;
    if (!item.name.endsWith(".js")) return null;
    return v(E(o, item.name), l, r, n, d);
  }))).filter(item => item !== null);
}
async function v(filePath, l, plugin, pluginManifest, d) {
  let w = se();
  if (Cde(w, filePath, d)) return null;
  try {
    let e = await XT(w, filePath, DC);
    if (e === null) return t(`Plugin workflow ${filePath}: not a regular file or exceeds ${DC} bytes \u2014 skipping`, {
      level: "warn"
    }), null;
    let script = Qve(e),
      s = Tv(script, {
        validateBody: !1
      });
    if ("error" in s) return t(`Plugin workflow ${filePath} has invalid meta: ${s.error} \u2014 skipping`, {
      level: "warn"
    }), null;
    let name = `${l}:${s.meta.name}`;
    return {
      source: "plugin",
      plugin: plugin,
      pluginManifest: pluginManifest,
      name: name,
      description: s.meta.description,
      whenToUse: s.meta.whenToUse,
      phases: s.meta.phases,
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
  let l = Ne();
  return l.workflows ??= (async () => {
    let {
        enabled: enabled,
        errors: errors
      } = await Ys(o),
      d = [];
    if (errors.length > 0) t(`Plugin loading errors: ${errors.map(item => _w(item)).join(", ")}`);
    let w = null;
    for (let e of enabled) {
      let i = new Set(),
        s = d.length;
      if (e.workflowsPath) try {
        let f = await _(e.workflowsPath, e.name, e.source, e.manifest, i);
        if (d.push(...f), f.length > 0) t(`Loaded ${f.length} workflows from plugin ${e.name} default directory`);
      } catch (error) {
        w = "plugin_load_workflows_dir_failed", t(`Failed to load workflows from plugin ${e.name} default directory: ${error}`, {
          level: "error"
        });
      }
      if (e.workflowsPaths) for (let f of e.workflowsPaths) try {
        let c = await se().stat(f);
        if (c.isDirectory()) {
          let k = await _(f, e.name, e.source, e.manifest, i);
          if (d.push(...k), k.length > 0) t(`Loaded ${k.length} workflows from plugin ${e.name} custom path: ${f}`);
        } else if (c.isFile() && f.endsWith(".js")) {
          let k = await v(f, e.name, e.source, e.manifest, i);
          if (k) d.push(k), t(`Loaded workflow from plugin ${e.name} custom file: ${f}`);
        }
      } catch (error) {
        w = "plugin_load_workflows_path_failed", t(`Failed to load workflows from plugin ${e.name} custom path ${f}: ${error}`, {
          level: "error"
        });
      }
      if (e.serverPluginId !== void 0) for (let f of d.slice(s)) f.serverPluginId = e.serverPluginId;
    }
    if (t(`Total plugin workflows loaded: ${d.length}`), w) m("plugin_load_workflows", w);else g("plugin_load_workflows");
    return d;
  })(), l.workflows;
}
import { join as h } from "path";
function W(o, l) {
  if (!l || Jts(o.script)) return !0;
  return t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${l.source} copy`, {
    level: "warn"
  }), !1;
}
function S(o) {
  let l = new Map();
  for (let r of o) {
    if (!W(r, l.get(r.name))) continue;
    l.set(r.name, r);
  }
  return [...l.values()];
}
import { join as F } from "path";
function pTt() {
  return F(Pe(), "workflows");
}
async function T(o, l) {
  try {
    return await tZ("workflows", o);
  } catch (error) {
    if (Ts(error)) return t(`loadWorkflowsDir: project-dir walk failed: ${error.code}`, {
      level: "error"
    }), l.walkFailed = !0, [];
    throw error;
  }
}
async function D(o, source, r, n) {
  if (n !== void 0 && source === "userSettings") return L(n, o, r);
  let d = se(),
    w;
  try {
    w = await d.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(w.map(async item => {
    if (!(item.isFile() || item.isSymbolicLink())) return null;
    if (!item.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(item.name)) r.nearMissExt++;
      return null;
    }
    let filePath_2 = h(o, item.name),
      f;
    try {
      f = await d.readFileBytes(filePath_2, DC + 1);
    } catch {
      return r.skippedUnreadable++, null;
    }
    if (f.byteLength > DC) return t(`Workflow ${filePath_2} exceeds ${DC} bytes \u2014 skipping`, {
      level: "warn"
    }), r.skippedOversize++, null;
    let script_2 = Qve(f.toString("utf-8")),
      c = Tv(script_2, {
        validateBody: !1
      });
    if ("error" in c) return t(`Workflow ${filePath_2} has invalid meta: ${c.error} \u2014 skipping`, {
      level: "warn"
    }), r.skippedInvalidMeta++, null;
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
async function L(o, l, r) {
  let n = [];
  switch ((await pa(cursor => o.listEntries({
    namespace: "userConfigDir",
    dir: "workflows"
  }, cursor === void 0 ? void 0 : {
    cursor: cursor
  }), e => {
    for (let i of e) {
      if (i.kind !== "key" || i.key.namespace !== "userConfigDir") continue;
      let name_2 = i.key.relPath.at(-1);
      if (name_2 === void 0 || i.key.relPath.length !== 1) continue;
      if (!name_2.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(name_2)) r.nearMissExt++;
        continue;
      }
      n.push({
        key: i.key,
        name: name_2
      });
    }
  })).status) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      t(`User workflows listing of ${l} truncated at ${Em} pages \u2014 loading the ${n.length} workflow files seen`, {
        level: "warn"
      }), r.userListingTruncated = !0;
      break;
  }
  return (await Promise.all(n.map(async ({
    key: key,
    name: name_3
  }) => {
    let s = await o.read([{
      key: key,
      offset: 0,
      length: DC + 1
    }]);
    if (!s.ok) return t(`Workflow ${h(l, name_3)} could not be read through the storage backend (${s.error.code}) \u2014 skipping`, {
      level: "warn"
    }), r.skippedUnreadable++, null;
    let f = s.value.items[0];
    if (f === void 0 || !f.found) return r.skippedUnreadable++, null;
    let filePath_3 = h(l, name_3);
    if (f.value.byteLength > DC) return t(`Workflow ${filePath_3} exceeds ${DC} bytes \u2014 skipping`, {
      level: "warn"
    }), r.skippedOversize++, null;
    let script_3 = Qve(Buffer.from(f.value).toString("utf-8")),
      k = Tv(script_3, {
        validateBody: !1
      });
    if ("error" in k) return t(`Workflow ${filePath_3} has invalid meta: ${k.error} \u2014 skipping`, {
      level: "warn"
    }), r.skippedInvalidMeta++, null;
    return {
      source: "userSettings",
      name: k.meta.name,
      description: k.meta.description,
      whenToUse: k.meta.whenToUse,
      phases: k.meta.phases,
      script: script_3,
      filePath: filePath_3
    };
  }))).filter(item => item !== null);
}
async function b(o, l) {
  let r = pTt(),
    n = {
      skippedInvalidMeta: 0,
      skippedOversize: 0,
      skippedUnreadable: 0,
      nearMissExt: 0,
      walkFailed: !1,
      userListingTruncated: !1
    },
    d = await T(o, n),
    [w, ...e] = await Promise.all([nn("userSettings") ? D(r, "userSettings", n, l) : Promise.resolve([]), ...(nn("projectSettings") ? d.map(item => D(item, "projectSettings", n)) : [])]),
    i = new Map();
  for (let u of w) {
    if (!W(u, i.get(u.name))) continue;
    i.set(u.name, u);
  }
  for (let u = e.length - 1; u >= 0; u--) for (let c of e[u]) {
    if (!W(c, i.get(c.name))) continue;
    i.set(c.name, c);
  }
  let s = n.walkFailed && nn("projectSettings"),
    f = n.skippedInvalidMeta + n.skippedOversize + n.skippedUnreadable;
  if (s || n.userListingTruncated || f > 0 || n.nearMissExt > 0) p("workflow_discover", s ? "project_dir_walk_failed" : n.userListingTruncated ? "user_listing_truncated" : n.skippedInvalidMeta > 0 ? "invalid_meta" : n.skippedOversize > 0 ? "oversize" : n.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", {
    found: i.size,
    skipped_invalid_meta: n.skippedInvalidMeta,
    skipped_oversize: n.skippedOversize,
    skipped_unreadable: n.skippedUnreadable,
    near_miss_ext: n.nearMissExt,
    ...(n.userListingTruncated && {
      user_listing_truncated: !0
    })
  });else g("workflow_discover", {
    found: i.size
  });
  return [...i.values()].sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
}
var Yts = "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
  WXr = "CLAUDE_REMOTE_WORKFLOW_ARGS",
  Xts = "CLAUDE_WORKFLOW_NAME_ONLY";
function yot() {
  return a.CLAUDE_WORKFLOW_NAME_ONLY;
}
function vNe(o, l) {
  return fte(hr().allWorkflows, `${$4n()}:${yot()}:${mte(o)}`, () => M(o, l));
}
async function M(o, l) {
  if (xr("workflows") || yot()) return [...I4t()];
  let [r, n] = await Promise.all([b(o, l), P(l)]),
    d = S(n),
    w = I4t(),
    e = new Map(w.map(item => [item.name, item])),
    i = O(d, e);
  for (let y of i) e.set(y.name, y);
  let s = O(r, e),
    f = new Set(s.map(item => item.name)),
    u = i.filter(item => !f.has(item.name)),
    c = new Set([...f, ...u.map(item => item.name)]);
  return [...w.filter(item => !c.has(item.name)), ...u, ...s];
}
function O(o, l) {
  return o.filter(item => W(item, l.get(item.name)));
}
async function O4t(o, l, r) {
  return (await vNe(l, r)).find(item => item.name === o);
}
function Oar() {
  hr().allWorkflows.clear(), ZVn();
}
export { Yts, WXr, Xts, yot, pTt, vNe, O4t, Oar };