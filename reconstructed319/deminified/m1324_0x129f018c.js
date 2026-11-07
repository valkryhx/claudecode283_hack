// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ci } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { epe, tpe, Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, Owe, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { $T, Koi } from "B:/~BUN/root/chunk-9x9jgvy9.js";
import { ck } from "B:/~BUN/root/chunk-esnm3r09.js";
import { dT, xjn } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Ae, BUn } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { ode, l6, ki } from "B:/~BUN/root/chunk-27h4st9h.js";
import { nO, $Le } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { lbn } from "B:/~BUN/root/chunk-q0kcbt3r.js";
import { TPr } from "B:/~BUN/root/chunk-jy87sa4x.js";
import { ny, qa } from "B:/~BUN/root/chunk-qzcyr88d.js";
import { join as _ } from "path";
async function v(o, a, s, l, d, w) {
  let e = ie(),
    n;
  try {
    n = await e.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(n.map(async item => {
    if (!(item.isFile() || item.isSymbolicLink())) return null;
    if (!item.name.endsWith(".js")) return null;
    let u = w === void 0 ? void 0 : await l6(w, o, item.name);
    if (u !== void 0) return t(`Plugin ${a}: did not read the workflow ${_(o, item.name)}: ${u}`, {
      level: "error"
    }), null;
    return P(_(o, item.name), a, s, l, d);
  }))).filter(item => item !== null);
}
async function P(filePath, a, plugin, pluginManifest, d) {
  let w = ie();
  if (Owe(w, filePath, d)) return null;
  try {
    let e = await dT(w, filePath, nO);
    if (e === null) return t(`Plugin workflow ${filePath}: not a regular file or exceeds ${nO} bytes \u2014 skipping`, {
      level: "warn"
    }), null;
    let script = $Le(e),
      f = $T(script, {
        validateBody: !1
      });
    if ("error" in f) return t(`Plugin workflow ${filePath} has invalid meta: ${f.error} \u2014 skipping`, {
      level: "warn"
    }), null;
    let name = `${a}:${f.meta.name}`;
    return {
      source: "plugin",
      plugin: plugin,
      pluginManifest: pluginManifest,
      name: name,
      description: f.meta.description,
      whenToUse: f.meta.whenToUse,
      phases: f.meta.phases,
      script: script,
      filePath: filePath
    };
  } catch (error) {
    return t(`Failed to load workflow from ${filePath}: ${error}`, {
      level: "error"
    }), null;
  }
}
function S(o) {
  let a = Ae();
  return a.workflows ??= (async () => {
    let {
        enabled: enabled,
        errors: errors
      } = await ki(o),
      d = [];
    if (errors.length > 0) t(`Plugin loading errors: ${errors.map(item => ck(item)).join(", ")}`);
    let w = null;
    for (let e of enabled) {
      let n = new Set(),
        f = d.length;
      if (e.workflowsPath) try {
        let r = await v(e.workflowsPath, e.name, e.source, e.manifest, n, e.entriesAnchor);
        if (d.push(...r), r.length > 0) t(`Loaded ${r.length} workflows from plugin ${e.name} default directory`);
      } catch (error) {
        w = "plugin_load_workflows_dir_failed", t(`Failed to load workflows from plugin ${e.name} default directory: ${error}`, {
          level: "error"
        });
      }
      if (e.workflowsPaths) for (let r of e.workflowsPaths) try {
        let p = await ie().stat(r);
        if (p.isDirectory()) {
          let k = await v(r, e.name, e.source, e.manifest, n, e.entriesAnchor);
          if (d.push(...k), k.length > 0) t(`Loaded ${k.length} workflows from plugin ${e.name} custom path: ${r}`);
        } else if (p.isFile() && r.endsWith(".js")) {
          let k = await P(r, e.name, e.source, e.manifest, n);
          if (k) d.push(k), t(`Loaded workflow from plugin ${e.name} custom file: ${r}`);
        }
      } catch (error) {
        w = "plugin_load_workflows_path_failed", t(`Failed to load workflows from plugin ${e.name} custom path ${r}: ${error}`, {
          level: "error"
        });
      }
      if (e.serverPluginId !== void 0) for (let r of d.slice(f)) r.serverPluginId = e.serverPluginId;
    }
    if (t(`Total plugin workflows loaded: ${d.length}`), w) m("plugin_load_workflows", w);else g("plugin_load_workflows");
    return d;
  })(), a.workflows;
}
import { join as W } from "path";
function y(o, a) {
  if (!a || Koi(o.script)) return !0;
  return t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${a.source} copy`, {
    level: "warn"
  }), !1;
}
function D(o) {
  let a = new Map();
  for (let s of o) {
    if (!y(s, a.get(s.name))) continue;
    a.set(s.name, s);
  }
  return [...a.values()];
}
import { join as F } from "path";
function MKt() {
  return F(Ue(), "workflows");
}
async function T(o, a) {
  try {
    return await ode("workflows", o);
  } catch (error) {
    if (ci(error)) return t(`loadWorkflowsDir: project-dir walk failed: ${error.code}`, {
      level: "error"
    }), a.walkFailed = !0, [];
    throw error;
  }
}
async function b(o, source, s, l) {
  if (l !== void 0 && source === "userSettings") return L(l, o, s);
  let d = ie(),
    w;
  try {
    w = await d.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(w.map(async item => {
    if (!(item.isFile() || item.isSymbolicLink())) return null;
    if (!item.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(item.name)) s.nearMissExt++;
      return null;
    }
    let filePath_2 = W(o, item.name),
      r;
    try {
      if (item.isSymbolicLink() && (await xjn(d, filePath_2, Number.POSITIVE_INFINITY)).verdict !== "read") return t(`Workflow ${filePath_2} is a link to no regular file, or one refused for where it leads \u2014 skipping`, {
        level: "warn"
      }), s.skippedUnreadable++, null;
      r = await d.readFileBytes(filePath_2, nO + 1);
    } catch {
      return s.skippedUnreadable++, null;
    }
    if (r.byteLength > nO) return t(`Workflow ${filePath_2} exceeds ${nO} bytes \u2014 skipping`, {
      level: "warn"
    }), s.skippedOversize++, null;
    let script_2 = $Le(r.toString("utf-8")),
      p = $T(script_2, {
        validateBody: !1
      });
    if ("error" in p) return t(`Workflow ${filePath_2} has invalid meta: ${p.error} \u2014 skipping`, {
      level: "warn"
    }), s.skippedInvalidMeta++, null;
    return {
      source: source,
      name: p.meta.name,
      description: p.meta.description,
      whenToUse: p.meta.whenToUse,
      phases: p.meta.phases,
      script: script_2,
      filePath: filePath_2
    };
  }))).filter(item => item !== null);
}
async function L(o, a, s) {
  let l = [];
  switch ((await qa(cursor => o.listEntries({
    namespace: "userConfigDir",
    dir: "workflows"
  }, cursor === void 0 ? void 0 : {
    cursor: cursor
  }), e => {
    for (let n of e) {
      if (n.kind !== "key" || n.key.namespace !== "userConfigDir") continue;
      let name_2 = n.key.relPath.at(-1);
      if (name_2 === void 0 || n.key.relPath.length !== 1) continue;
      if (!name_2.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(name_2)) s.nearMissExt++;
        continue;
      }
      l.push({
        key: n.key,
        name: name_2
      });
    }
  })).status) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      t(`User workflows listing of ${a} truncated at ${ny} pages \u2014 loading the ${l.length} workflow files seen`, {
        level: "warn"
      }), s.userListingTruncated = !0;
      break;
  }
  return (await Promise.all(l.map(async ({
    key: key,
    name: name_3
  }) => {
    let f = await o.read([{
      key: key,
      offset: 0,
      length: nO + 1
    }]);
    if (!f.ok) return t(`Workflow ${W(a, name_3)} could not be read through the storage backend (${f.error.code}) \u2014 skipping`, {
      level: "warn"
    }), s.skippedUnreadable++, null;
    let r = f.value.items[0];
    if (r === void 0 || !r.found) return s.skippedUnreadable++, null;
    let filePath_3 = W(a, name_3);
    if (r.value.byteLength > nO) return t(`Workflow ${filePath_3} exceeds ${nO} bytes \u2014 skipping`, {
      level: "warn"
    }), s.skippedOversize++, null;
    let script_3 = $Le(Buffer.from(r.value).toString("utf-8")),
      k = $T(script_3, {
        validateBody: !1
      });
    if ("error" in k) return t(`Workflow ${filePath_3} has invalid meta: ${k.error} \u2014 skipping`, {
      level: "warn"
    }), s.skippedInvalidMeta++, null;
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
async function O(o, a) {
  let s = MKt(),
    l = {
      skippedInvalidMeta: 0,
      skippedOversize: 0,
      skippedUnreadable: 0,
      nearMissExt: 0,
      walkFailed: !1,
      userListingTruncated: !1
    },
    d = await T(o, l),
    [w, ...e] = await Promise.all([Kt("userSettings") ? b(s, "userSettings", l, a) : Promise.resolve([]), ...(Kt("projectSettings") ? d.map(item => b(item, "projectSettings", l)) : [])]),
    n = new Map();
  for (let u of w) {
    if (!y(u, n.get(u.name))) continue;
    n.set(u.name, u);
  }
  for (let u = e.length - 1; u >= 0; u--) for (let p of e[u]) {
    if (!y(p, n.get(p.name))) continue;
    n.set(p.name, p);
  }
  let f = l.walkFailed && Kt("projectSettings"),
    r = l.skippedInvalidMeta + l.skippedOversize + l.skippedUnreadable;
  if (f || l.userListingTruncated || r > 0 || l.nearMissExt > 0) c("workflow_discover", f ? "project_dir_walk_failed" : l.userListingTruncated ? "user_listing_truncated" : l.skippedInvalidMeta > 0 ? "invalid_meta" : l.skippedOversize > 0 ? "oversize" : l.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", {
    found: n.size,
    skipped_invalid_meta: l.skippedInvalidMeta,
    skipped_oversize: l.skippedOversize,
    skipped_unreadable: l.skippedUnreadable,
    near_miss_ext: l.nearMissExt,
    ...(l.userListingTruncated && {
      user_listing_truncated: !0
    })
  });else g("workflow_discover", {
    found: n.size
  });
  return [...n.values()].sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
}
var Goi = "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
  GVo = "CLAUDE_REMOTE_WORKFLOW_ARGS",
  Voi = "CLAUDE_WORKFLOW_NAME_ONLY";
function iCt() {
  return i.CLAUDE_WORKFLOW_NAME_ONLY;
}
function m6e(o, a) {
  return epe(Fr().allWorkflows, `${TPr()}:${iCt()}:${tpe(o)}`, () => M(o, a));
}
async function M(o, a) {
  if (ur("workflows") || iCt()) return [...lbn()];
  let [s, l] = await Promise.all([O(o, a), S(a)]),
    d = D(l),
    w = lbn(),
    e = new Map(w.map(item => [item.name, item])),
    n = E(d, e);
  for (let h of n) e.set(h.name, h);
  let f = E(s, e),
    r = new Set(f.map(item => item.name)),
    u = n.filter(item => !r.has(item.name)),
    p = new Set([...r, ...u.map(item => item.name)]);
  return [...w.filter(item => !p.has(item.name)), ...u, ...f];
}
function E(o, a) {
  return o.filter(item => y(item, a.get(item.name)));
}
async function abn(o, a, s) {
  return (await m6e(a, s)).find(item => item.name === o);
}
function C4r() {
  Fr().allWorkflows.clear(), BUn();
}
export { Goi, GVo, Voi, iCt, MKt, m6e, abn, C4r };