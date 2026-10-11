// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { dT } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { zh, Fxe } from "B:/~BUN/root/chunk-54p0h65d.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I, kd, fr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Mk, cLt } from "B:/~BUN/root/chunk-rtyz5f1n.js";
import { G, Z$e, Xpt, e8e, kUt, Kq, Cne, Xq, jmn, Xb, Ane, Vmn, c8e, k1r, rft, E6n, Pne, oft, rUe, qmn, d8e, P6n, I6n, Jmn, O6n, C1r, R1r, A1r, u8e, f2, IAe, qR, sft, sr, ign, Dne, Nm, wY } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { af } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { Fn, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { vb, No, tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Jo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { Tge, Dxr } from "B:/~BUN/root/chunk-r6m7remx.js";
import { Idt, yOo } from "B:/~BUN/root/chunk-f1dj0k6n.js";
import { O0t } from "B:/~BUN/root/chunk-384x2wn9.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { qt } from "B:/~BUN/root/chunk-9xz983aj.js";
import { dae, Ztn } from "B:/~BUN/root/chunk-nrrn2axm.js";
import { cSo, vKe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { $se, w8, Jyr, OL, mke, dme, nqe, rqe, mho, _k, ny, wot } from "B:/~BUN/root/chunk-3jyp964r.js";
import { x6, bFe, K2o } from "B:/~BUN/root/chunk-gbtzpa3e.js";
import { tb } from "B:/~BUN/root/chunk-846bv8b5.js";
import { HVn } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { e4t, mjo } from "B:/~BUN/root/chunk-atkxw78x.js";
import { vu } from "B:/~BUN/root/chunk-xmtkv29j.js";
import { op, YX, HS, Xz, xd, Zp } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { cn, Hm } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { o, C, u, fe, Bi } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { join as _e } from "path";
async function kPe(e, n, s, a) {
  let r = Object.hasOwn(s, e) ? s[e]?.installLocation : void 0;
  if (r === void 0) return n;
  let i;
  try {
    i = _k();
  } catch {
    return n;
  }
  return tb(n, c => st(c, e, r, s, i, a), {
    concurrency: 8
  });
}
async function st(e, n, s, a, r, i) {
  let source = e.source;
  if (!d8e(source)) return e;
  try {
    let f = await w8(OL(e.name, n), s, source, a, r, i, ny(s) !== void 0 ? "system" : "workspace");
    if (f.kind !== "ok") return e;
    let d = _e(f.entryPath, ".claude-plugin");
    if (!(await mke(d))) return e;
    let manifestPath = _e(d, "plugin.json"),
      k = await nqe(manifestPath);
    if (k === void 0) return e;
    let P = $se(J(Jo(k)), "plugin-json", {
      pluginName: e.name,
      manifestPath: manifestPath
    });
    if (!P.ok) return e;
    let manifest = P.manifest,
      b = {
        ...e
      };
    if (Z(b.displayName) && manifest.displayName !== void 0) b.displayName = manifest.displayName;
    if (Z(b.description) && manifest.description !== void 0) b.description = manifest.description;
    if (b.author === void 0 && manifest.author !== void 0) b.author = manifest.author;
    if (Z(b.homepage) && manifest.homepage !== void 0) b.homepage = manifest.homepage;
    if (Z(b.repository) && manifest.repository !== void 0) b.repository = manifest.repository;
    if (Z(b.license) && manifest.license !== void 0) b.license = manifest.license;
    if (!b.keywords?.length && manifest.keywords !== void 0) b.keywords = manifest.keywords;
    return b;
  } catch (error) {
    return t(`Display metadata for ${OL(e.name, n)} not read from its plugin.json: ${l(error)}`), e;
  }
}
function Z(e) {
  return Dne(e) === void 0;
}
var rt = /^[\x21-\x7e]+$/,
  je = /^[A-Za-z0-9._-]{1,64}$/;
function vPe(e) {
  return Idt === "" || me(e, rt) ? e : ge(e);
}
function l2t(e) {
  return Idt === "" || me(e, je) ? e : qt(ge(e));
}
function pe(e) {
  return me(e, je) ? e : ge(e);
}
function me(e, n) {
  return n.test(e) && !yOo(Idt, Le(e));
}
function ge(e) {
  return Hm(cn(Le(e), 64)) || "\u201C\u201D";
}
function Le(e) {
  return sr(e).replace(ign, "").trimEnd();
}
var he = e => e.fromPluginDirectory === !0;
function aSn(e, n) {
  if (!n) return;
  let s = n.get(e.pluginId);
  for (let a of e.installCountIds ?? []) {
    let r = n.get(a);
    if (r !== void 0 && (s === void 0 || r > s)) s = r;
  }
  return s;
}
function OQn(e, n) {
  let s = new Map(e.map((item, index) => [item, index]));
  e.sort((itemA, itemB) => {
    let i = aSn(itemA, n) ?? 0,
      c = aSn(itemB, n) ?? 0;
    if (i !== c) return c - i;
    let f = he(itemA),
      d = he(itemB);
    if (f !== d) return f ? -1 : 1;
    return f ? (s.get(itemA) ?? 0) - (s.get(itemB) ?? 0) : itemA.entry.name.localeCompare(itemB.entry.name);
  });
}
function c2t(e) {
  return pe(e.marketplaceName);
}
function CYr(e) {
  return [];
}
function RYr(e) {
  let n = s => s === vu ? "official" : s;
  return [e.marketplaceName, ...(e.alsoListedIn ?? []).map(n)].join(" + ");
}
function AYr(e) {
  let n = new Map(),
    s;
  for (let r of e) {
    if (he(r)) s = r.marketplaceName;
    for (let i of [r.marketplaceName, ...(r.alsoListedIn ?? [])]) n.set(i, (n.get(i) ?? 0) + 1);
  }
  let a = [...n].map(([marketplace, count]) => ({
    marketplace: marketplace,
    label: pe(marketplace),
    count: count
  })).sort((itemA, itemB) => {
    if (itemA.marketplace === s) return -1;
    if (itemB.marketplace === s) return 1;
    return itemB.count - itemA.count || itemA.label.localeCompare(itemB.label);
  });
  return [{
    marketplace: null,
    label: "All",
    count: e.length
  }, ...a];
}
function xYr(e, n, s) {
  return [e.marketplaceName, ...(e.alsoListedIn ?? [])].some(item => {
    if (!n.has(item)) return !1;
    if (item === vu) return !0;
    let r = s[item]?.source;
    return r !== void 0 && O0t(item, r);
  });
}
function PYr(e, n) {
  return n === null || e.marketplaceName === n || (e.alsoListedIn?.includes(n) ?? !1);
}
function ke(e, n, s) {
  if (d2t(e)) return !1;
  if (e.source === n) return !0;
  return "plugin" in e && e.plugin === s && HS(e.source) === HS(n);
}
function d2t(e) {
  return "orphan" in e && e.orphan === !0;
}
function lSn(e, n) {
  return ke(e, n.source, n.name);
}
function cSn(e, n) {
  return ke(e, n.source, n.name);
}
function at(e, n, s) {
  if (YX(e.source)) return !1;
  if (e.source === n) return !0;
  let a = xd(e.source);
  return "plugin" in e && e.plugin === s && (a === void 0 || a === xd(n));
}
function cue(e, n, s) {
  return op(xd(n)) ? ke(e, n, s) : at(e, n, s) && !d2t(e);
}
function IYr(e, n) {
  let s = n.filter(item => cue(e, item.source, item.name)),
    a = s.length === 1 ? s[0] : s.find(item => Zp(item.source, e.source));
  if (a) return {
    name: a.name,
    marketplace: xd(a.source)
  };
  let [r] = s;
  if (r !== void 0) return {
    name: r.name,
    marketplace: void 0
  };
  let {
    name: name,
    marketplace: marketplace_2
  } = Xz(e.source);
  if (marketplace_2 !== void 0) return {
    name: name,
    marketplace: marketplace_2
  };
  let marketplace_3 = HS(e.source);
  return {
    name: marketplace_3 !== void 0 && "plugin" in e && e.plugin ? e.plugin : name,
    marketplace: marketplace_3
  };
}
import { lstat as pt, readdir as Ae, readFile as Ie, stat as Ke } from "fs/promises";
import * as y from "path";
var we = ["monitors", "themes"],
  ot = [{
    key: "workflows",
    bareStringIndexed: !0
  }],
  lt = [{
    key: "commands",
    recordPathProperty: "source"
  }, {
    key: "hooks",
    bareStringIndexed: !0,
    jsonFile: !0
  }, {
    key: "agents",
    bareStringIndexed: !0
  }, {
    key: "skills",
    bareStringIndexed: !0
  }, {
    key: "outputStyles"
  }, {
    key: "themes"
  }, {
    key: "monitors",
    jsonFile: !0
  }, {
    key: "lspServers",
    jsonFile: !0
  }, ...ot, {
    key: "types",
    bareStringOnly: !0
  }, {
    key: "mcpServers",
    jsonFile: !0,
    acceptsUrl: !0,
    missingConsequence: e => e.endsWith(".json") ? "The plugin loader skips a missing MCP servers file without reporting it, so none of its servers will load." : void 0
  }];
function xe(e) {
  let n = G(e.experimental) ? e.experimental : void 0,
    s = [];
  for (let spec of lt) {
    let r = e[spec.key],
      i = spec.key,
      c = n !== void 0 && we.includes(spec.key) && Object.hasOwn(n, spec.key) ? n[spec.key] : void 0;
    if (c != null) r = c, i = `experimental.${spec.key}`;
    let f = [];
    if (spec.bareStringOnly) f.push([i, r]);else if (Array.isArray(r)) for (let [d, w] of r.entries()) f.push([`${i}[${d}]`, w]);else if (!G(r)) f.push([spec.bareStringIndexed ? `${i}[0]` : i, r]);else if (spec.recordPathProperty !== void 0) {
      for (let [d, w] of Object.entries(r)) if (G(w)) f.push([`${i}.${d}.${spec.recordPathProperty}`, w[spec.recordPathProperty]]);
    }
    for (let [field, relPath] of f) if (typeof relPath === "string" && !(spec.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(relPath))) s.push({
      spec: spec,
      field: field,
      relPath: relPath
    });
  }
  return s;
}
var Oe = new Set(["icon", "screenshots", "classification", "privacyPolicyUrl", "privacy_policy", "privacyPolicy", "supportUrl", "support", "bugs", "termsOfServiceUrl", "terms_of_service", "documentationUrl", "docs"]);
var ct = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA", "CLAUDE_PROJECT_DIR"];
function Fe(e) {
  let n = [];
  for (let [event, a] of Object.entries(e)) for (let r of a ?? []) for (let i of r.hooks) {
    if (i.type !== "command" || i.args !== void 0 || i.shell === "powershell") continue;
    let placeholders = ut(i.command);
    if (placeholders.length > 0) n.push({
      event: event,
      command: i.command,
      placeholders: placeholders
    });
  }
  return n;
}
function ut(e) {
  let n = new Set(),
    s = !1,
    a = !1;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (!s && i === "\\") {
      r++;
      continue;
    }
    if (i === "'" && !a) {
      s = !s;
      continue;
    }
    if (i === '"' && !s) {
      a = !a;
      continue;
    }
    if (i !== "$" || s || a) continue;
    for (let c of ct) {
      let f = e.startsWith(`{${c}}`, r + 1),
        d = e.startsWith(c, r + 1) && !/[A-Za-z0-9_]/.test(e.charAt(r + 1 + c.length));
      if (f || d) {
        n.add(`\${${c}}`);
        break;
      }
    }
  }
  return [...n];
}
var ft = new Set(["category", "source", "tags", "strict", "id", "relevance", "headers", "headersHelper"]),
  Be = new Map([["publisher", "a VS Code/Cursor extension manifest"], ["engines", "a VS Code/Cursor extension manifest"], ["categories", "a VS Code/Cursor extension manifest"], ["icon", "a VS Code/Cursor extension manifest"], ["contributes", "a VS Code/Cursor extension manifest"], ["activationEvents", "a VS Code/Cursor extension manifest"], ["preview", "a VS Code/Cursor extension manifest"], ["main", "an npm package.json"], ["type", "an npm package.json"], ["files", "an npm package.json"], ["bin", "an npm package.json"], ["scripts", "an npm package.json"], ["private", "an npm package.json"], ["bugs", "an npm package.json"], ["contributors", "an npm package.json"], ["dxt_version", "an MCPB/DXT manifest"], ["mcpb_version", "an MCPB/DXT manifest"], ["user_config", "an MCPB/DXT manifest"], ["compatibility", "an MCPB/DXT manifest"], ["server", "an MCP server manifest"], ["tools", "an MCP server manifest"], ["prompts", "an MCP server manifest"], ["resources", "an MCP server manifest"], ["logo", "manifests across many tools"], ["readme", "manifests across many tools"], ["changelog", "manifests across many tools"], ["support", "manifests across many tools"], ["privacy_policy", "manifests across many tools"], ["privacy_policies", "manifests across many tools"], ["terms_of_service", "manifests across many tools"], ["_comment", "manifests across many tools"], ["$id", "a JSON Schema document"], ["$comment", "a JSON Schema document"]]),
  mt = new Map([["user_config", "userConfig"]]),
  We = new Set(["themes", "monitors", "outputStyles", "evals", "syntaxHighlighting"]);
function OYr(e, n) {
  let noErrors = e.every(item => item.success),
    hasWarnings = e.some(item => item.warnings.length > 0);
  return {
    noErrors: noErrors,
    hasWarnings: hasWarnings,
    allSuccess: n.strict ? noErrors && !hasWarnings : noErrors
  };
}
function z(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function gt(e) {
  let n = y.basename(e),
    s = y.basename(y.dirname(e));
  if (n === "plugin.json") return "plugin";
  if (n === "marketplace.json") return "marketplace";
  if (s === ".claude-plugin") return "plugin";
  return "unknown";
}
function Q(e) {
  return e.issues.map(item => ({
    path: item.path.join(".") || "root",
    message: item.message,
    code: item.code
  }));
}
function ht(e, n) {
  if (Be.has(e)) return;
  let s = e.length <= 3 ? 1 : 2,
    a = e.toLowerCase(),
    r,
    i = s + 1;
  for (let c of n) {
    if (Math.abs(c.length - e.length) > s) continue;
    if (c.toLowerCase() === a) return c;
    let f = wY(e, c);
    if (f < i) i = f, r = c;
  }
  return r;
}
function kt(e, n, s) {
  if (s?.has(e)) return `Field '${e}' belongs in the marketplace entry (marketplace.json), ` + "not plugin.json. It's harmless here but unused \u2014 Claude Code " + "ignores it at load time.";
  let a = ht(e, n);
  if (a) return `Unknown field '${e}' \u2014 did you mean '${a}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let r = mt.get(e);
  if (r && n.has(r)) return `Field '${e}' is the cross-tool spelling of Claude Code's '${r}'. Rename it to '${r}' for Claude Code to read it (the option ` + "shapes differ slightly \u2014 re-run validate after renaming to check). " + "As-is, Claude Code ignores it at load time.";
  let i = Be.get(e);
  if (i) return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function K(e, n, s, a, r, i) {
  for (let c of Object.keys(e)) {
    if (n.has(c) || i?.has(c)) continue;
    a.push({
      path: s ? `${s}.${c}` : c,
      message: kt(c, n, r)
    });
  }
}
function ce(e) {
  let n = e.replace(/^[a-zA-Z]:/, "");
  return zh(n) || Fxe(n);
}
function $e(e, path, s, a) {
  if (ce(e)) s.push({
    path: path,
    message: a ? `Path contains "..": ${e}. ${a}` : `Path contains ".." which could be a path traversal attempt: ${e}`
  });
}
function wt(e) {
  let n = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${n !== e ? `./${n}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function ee(e) {
  return q(await bt(e));
}
async function bt(e) {
  let filePath = y.resolve(e),
    s;
  try {
    s = await Ie(filePath, {
      encoding: "utf-8"
    });
  } catch (error) {
    let code = v(error),
      message;
    if (code === "ENOENT") message = `File not found: ${filePath}`;else if (code === "EISDIR") message = `Path is not a file: ${filePath}`;else message = `Failed to read file: ${l(error)}`;
    return {
      success: !1,
      errors: [{
        path: "file",
        message: message,
        code: code
      }],
      warnings: [],
      filePath: filePath,
      fileType: "plugin"
    };
  }
  return He(filePath, s);
}
async function He(e, n) {
  let errors = [],
    warnings = [],
    notes = [],
    i;
  try {
    i = J(Jo(n));
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "json",
        message: `Invalid JSON syntax: ${l(error)}`
      }],
      warnings: [],
      filePath: e,
      fileType: "plugin"
    };
  }
  let c = $se(i, "plugin-json", {
    pluginName: y.basename(y.dirname(y.dirname(e))),
    manifestPath: e
  });
  if (!c.ok) errors.push(...c.errors.map(item => ({
    ...item,
    path: item.path || "root"
  })));else warnings.push(...c.hookNotes.map(item => ({
    path: "hooks",
    message: `${item} at runtime`
  })));
  if (i && typeof i === "object") {
    let d = c.rawCandidate ?? i,
      w = y.dirname(e),
      k = y.basename(w) === ".claude-plugin" ? y.dirname(w) : w,
      P = async (m, path_2, E = "The runtime loader will report this as a load failure.") => {
        if ($e(m, path_2, errors), ce(m) || y.isAbsolute(m) || /^[a-zA-Z]:/.test(m)) return;
        try {
          return await Ke(y.resolve(k, m));
        } catch (error) {
          let p = v(error);
          errors.push({
            path: path_2,
            message: `Path not found: ${m}${p && p !== "ENOENT" ? ` (${p})` : ""}. ${E}`
          });
          return;
        }
      };
    for (let {
      spec: spec_2,
      field: b,
      relPath: relPath_2
    } of xe(d)) {
      let S = await P(relPath_2, b, spec_2.missingConsequence?.(relPath_2));
      if (S === void 0) continue;
      if (spec_2.key === "skills" && !S.isDirectory()) {
        let p = y.dirname(relPath_2),
          g = y.basename(relPath_2).toLowerCase() === "skill.md" ? p === "." ? " \u2014 point to the plugin root '.' instead" : ` \u2014 point to the parent directory '${p}' instead` : "";
        errors.push({
          path: b,
          message: `Path is a file; skills entries must be directories containing SKILL.md${g}: ${relPath_2}`
        });
      }
      if (spec_2.jsonFile && relPath_2.endsWith(".json") && S.isDirectory()) errors.push({
        path: b,
        message: `Path is a directory; ${spec_2.key} must point to a JSON file: ${relPath_2}`
      });
      if (spec_2.key === "types") {
        let p = await e4t(relPath_2, k, y.basename(k));
        if (p.kind === "refused") errors.push(...p.problems.map(g => ({
          path: b,
          message: g
        })));else if (notes.push(`types ${relPath_2} declares on $: ` + (p.nouns.length > 0 ? p.nouns.map(item => `$.${item}`).join(", ") : "nothing (no EngineInterface member)")), p.state.length > 0) notes.push(`types ${relPath_2} declares state: ` + p.state.flatMap(({
          plugin: plugin,
          keys: keys
        }) => keys.map(R => bFe({
          plugin: plugin,
          key: R
        }))).join(", "));
      }
    }
    if (d.mcpServers !== void 0) {
      let m = Array.isArray(d.mcpServers) ? d.mcpServers : [d.mcpServers],
        b;
      for (let [E, S] of m.entries()) {
        let p = Array.isArray(d.mcpServers) ? `mcpServers[${E}]` : "mcpServers";
        if (G(S)) {
          b ??= await Ut(d, e);
          for (let [g, h] of Object.entries(S)) {
            let R = Ye(`${p}.${oS(g, 64)}`, h, b(g));
            errors.push(...R.errors), warnings.push(...R.warnings);
          }
        }
      }
    }
  }
  if (G(i)) {
    let d = i,
      w = c.rawCandidate ?? d;
    if (K(w, new Set(Object.keys(rUe().shape)), "", warnings, ft, Oe), "capabilities" in w) {
      let k = warnings.findIndex(item => item.path === "capabilities"),
        P = {
          path: "capabilities",
          message: "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field."
        };
      if (k === -1) warnings.push(P);else warnings[k] = P;
    }
    for (let path_3 of we) if (path_3 in d) warnings.push({
      path: path_3,
      message: `'${path_3}' is an experimental component; declare it under 'experimental.${path_3}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`
    });
    if ("experimental" in d) if (G(d.experimental)) {
      let experimental = d.experimental;
      K(experimental, We, "experimental", warnings);
    } else warnings.push({
      path: "experimental",
      message: `'experimental' must be an object containing component declarations; got ${z(d.experimental)}. It will be ignored at load time.`
    });
    if ("metadata" in w && !G(w.metadata)) warnings.push({
      path: "metadata",
      message: `'metadata' must be a free-form object; got ${z(w.metadata)}. It will be ignored at load time.`
    });
    if ("binaries" in d) if (G(d.binaries)) {
      let k = oft(d.binaries) ?? {},
        P = 0;
      for (let [b, E] of Object.entries(d.binaries)) {
        if (c8e.test(b) && typeof E === "object" && E !== null && typeof E.sha256 === "string" && k1r.test(E.sha256)) {
          P++;
          continue;
        }
        if (!Object.hasOwn(k, b)) warnings.push({
          path: `binaries.${b}`,
          message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(c8e)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`
        });
      }
      if (P > E6n) warnings.push({
        path: "binaries",
        message: `${P} valid binaries entries declared, but the install hook processes at most ${E6n}; the rest are dropped entirely.`
      });
      let m = Object.keys(k).length;
      if (m > rft) warnings.push({
        path: "binaries",
        message: `${m} valid binaries entries declared, but only the first ${rft} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`
      });
    } else warnings.push({
      path: "binaries",
      message: `'binaries' must be an object mapping basenames to { sha256 }; got ${z(d.binaries)}. It will be ignored at install time.`
    });
  }
  let manifest_2 = c.manifest;
  if (manifest_2) {
    let d = manifest_2;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.name)) {
      let w = "Claude Code accepts it, but the";
      if (sft.test(d.name)) w = "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The";else if (!IAe(d.name)) w = "Claude Code cannot install it from a marketplace that lists it under this name, and the";
      warnings.push({
        path: "name",
        message: `Plugin name "${d.name}" is not kebab-case. ${w} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` + X(d.name)
      });
    }
    if (!d.version) warnings.push({
      path: "version",
      message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
    });
    if (!d.description) warnings.push({
      path: "description",
      message: "No description provided. Adding a description helps users understand what your plugin does"
    });
    if (!d.author) warnings.push({
      path: "author",
      message: "No author information provided. Consider adding author details for plugin attribution"
    });
  }
  return {
    success: errors.length === 0,
    errors: errors,
    warnings: warnings,
    filePath: e,
    fileType: "plugin",
    ...(notes.length > 0 && {
      notes: notes
    })
  };
}
var De = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/,
  vt = new Set(["org", "org-provisioned", "unknown"]),
  code_3 = "UNRECORDABLE_NAME",
  Ve = 'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';
function X(e) {
  return oS(e, e.length) === e ? "" : " The name holds a character that is not shown here.";
}
async function ve(e) {
  return q(await Pt(e));
}
async function Pt(e) {
  let errors_2 = [],
    warnings_2 = [],
    filePath_2 = y.resolve(e),
    r;
  try {
    r = await Ie(filePath_2, {
      encoding: "utf-8"
    });
  } catch (error) {
    let code_2 = v(error),
      message_2;
    if (code_2 === "ENOENT") message_2 = `File not found: ${filePath_2}`;else if (code_2 === "EISDIR") message_2 = `Path is not a file: ${filePath_2}`;else message_2 = `Failed to read file: ${l(error)}`;
    return {
      success: !1,
      errors: [{
        path: "file",
        message: message_2,
        code: code_2
      }],
      warnings: [],
      filePath: filePath_2,
      fileType: "marketplace"
    };
  }
  let i;
  try {
    i = J(Jo(r));
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "json",
        message: `Invalid JSON syntax: ${l(error)}`
      }],
      warnings: [],
      filePath: filePath_2,
      fileType: "marketplace"
    };
  }
  let c = [],
    f = G(i) && G(i.metadata) ? i.metadata.pluginRoot : void 0,
    d = C1r(f);
  if (i && typeof i === "object") {
    let p = i;
    if (Array.isArray(p.plugins)) c = p.plugins, p.plugins.forEach((item, index) => {
      if (item && typeof item === "object" && "source" in item) {
        let source_2 = item.source;
        if (typeof source_2 === "string") $e(source_2, `plugins[${index}].source`, errors_2, wt(source_2));
        if (O6n(source_2) && d === void 0) errors_2.push({
          path: `plugins[${index}].source`,
          message: f === void 0 ? `Bare source name "${source_2}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.` : typeof f === "string" ? `Bare source name "${source_2}" cannot resolve: metadata.pluginRoot ("${f}") must be a relative path inside the marketplace (e.g. "./plugins").` : `Bare source name "${source_2}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`
        });
        if (source_2 && typeof source_2 === "object" && "path" in source_2 && typeof source_2.path === "string") $e(source_2.path, `plugins[${index}].source.path`, errors_2);
      }
    });
  }
  let w = I6n().extend({
      topic: o().min(1).max(64).optional(),
      signals: P6n().extend({
        cli: C(o().min(1).max(64)).max(10).optional(),
        hosts: C(o().min(1).max(128).refine(p => /^[a-z0-9.-]+$/.test(p), "must be a lowercase bare hostname (no scheme, port, or path)")).max(20).optional(),
        filesRead: C(o().min(1).max(256).refine(p => !p.includes("\\"), 'must use forward slashes (e.g. "**/*.tf"), not backslashes')).max(10).optional(),
        manifestDeps: C(u({
          file: o().min(1).max(256).refine(qmn, "must be a valid regular expression"),
          pattern: o().min(1).max(256).refine(qmn, "must be a valid regular expression")
        })).min(1).max(10).optional(),
        cwd: C(o().min(1).max(256).refine(p => !p.includes("\\"), 'must use forward slashes (e.g. "Engine/Source/**"), not backslashes')).max(10).optional()
      }).refine(p => (p.cli?.length ?? 0) > 0 || (p.hosts?.length ?? 0) > 0 || (p.filesRead?.length ?? 0) > 0 || (p.manifestDeps?.length ?? 0) > 0 || (p.cwd?.length ?? 0) > 0, "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)")
    }).optional(),
    k = Jmn().extend({
      relevance: Bi(p => G(p) ? p : void 0, w)
    }).refine(p => typeof p.source === "string" || p.source.source !== "unsupported", {
      message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored"
    }),
    m = u8e().extend({
      plugins: C(k),
      renames: fe(o(), o().nullable()).optional()
    }).safeParse(A1r(i));
  if (!m.success) errors_2.push(...Q(m.error));
  if (m.success && m.data.renames) {
    let p = new Set(m.data.plugins.map(item => item.name));
    for (let g of Object.keys(m.data.renames)) {
      let h = wot(g, m.data.renames, p);
      if (h?.kind === "unresolved") errors_2.push({
        path: `renames.${g}`,
        message: `chain does not resolve (${h.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`
      });else if (h?.kind === "renamed" && !qR().safeParse(`${h.to}@placeholder`).success) errors_2.push({
        path: `renames.${g}`,
        message: `target "${h.to}" is not a valid plugin name (PluginIdSchema)`
      });
    }
  }
  if (G(i)) {
    let p = i;
    if (K(p, new Set(Object.keys(u8e().shape)), "", warnings_2), typeof p.name === "string" && p.name) {
      let h = IAe(p.name);
      if (!h) errors_2.push({
        path: "name",
        code: code_3,
        message: `Claude Code cannot install plugins from marketplace "${oS(p.name, 64)}". ${Ve} Change the marketplace's "name".` + X(p.name)
      });
      if (vt.has(p.name.toLowerCase())) warnings_2.push({
        path: "name",
        message: `Marketplace name "${p.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`
      });else if (!De.test(p.name)) warnings_2.push({
        path: "name",
        message: `Marketplace name "${p.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (h ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace." + X(p.name)
      });
    }
    let metadata = p.metadata;
    if (G(metadata)) K(metadata, new Set(Object.keys(u8e().shape.metadata.unwrap().shape)), "metadata", warnings_2);
    if (Array.isArray(p.plugins)) {
      let h = new Set(Object.keys(Jmn().shape)),
        R = new Set(Object.keys(I6n().shape)),
        N = new Set(Object.keys(P6n().shape));
      p.plugins.forEach((item, index) => {
        if (!G(item)) return;
        let T = item;
        if (K(T, h, `plugins[${index}]`, warnings_2), typeof T.name === "string" && T.name) {
          let F = IAe(T.name);
          if (!F) errors_2.push({
            path: `plugins[${index}].name`,
            code: code_3,
            message: `Claude Code cannot install plugin "${oS(T.name, 64)}". ${Ve} Change this entry's "name".` + X(T.name)
          });
          if (!De.test(T.name)) warnings_2.push({
            path: `plugins[${index}].name`,
            message: `Plugin name "${T.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (F ? "Claude Code accepts it, but the " : "The ") + "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry." + X(T.name)
          });
        }
        let experimental_2 = T.experimental;
        if (G(experimental_2)) K(experimental_2, We, `plugins[${index}].experimental`, warnings_2);else if (experimental_2 !== void 0) warnings_2.push({
          path: `plugins[${index}].experimental`,
          message: `'experimental' must be an object containing component declarations; got ${z(experimental_2)}. It will be ignored at load time.`
        });
        let relevance = T.relevance;
        if (G(relevance)) {
          K(relevance, R, `plugins[${index}].relevance`, warnings_2);
          let signals = relevance.signals;
          if (G(signals)) K(signals, N, `plugins[${index}].relevance.signals`, warnings_2);
        } else if (relevance !== void 0) warnings_2.push({
          path: `plugins[${index}].relevance`,
          message: `'relevance' must be an object containing topic and signals; got ${z(relevance)}. It will be ignored at load time.`
        });
        let metadata_2 = T.metadata;
        if (metadata_2 !== void 0 && !G(metadata_2)) warnings_2.push({
          path: `plugins[${index}].metadata`,
          message: `'metadata' must be a free-form object; got ${z(metadata_2)}. It will be ignored at load time.`
        });
      });
    }
  }
  if (m.success) {
    let p = m.data;
    if (!p.plugins || p.plugins.length === 0) warnings_2.push({
      path: "plugins",
      message: "Marketplace has no plugins defined"
    });
    if (p.plugins) p.plugins.forEach((item, index) => {
      if (p.plugins.filter(A => A.name === item.name).length > 1) errors_2.push({
        path: `plugins[${index}].name`,
        message: `Duplicate plugin name "${item.name}" found in marketplace`
      });
      let N = typeof item.source === "object" && item.source.source === "archive";
      if (N && Tge(item) && item.strict !== !1) errors_2.push({
        path: `plugins[${index}].headersHelper`,
        message: `Plugin "${Nm(item.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`
      });
      if ((item.headers !== void 0 || Tge(item)) && !N) warnings_2.push({
        path: `plugins[${index}].${Tge(item) ? "headersHelper" : "headers"}`,
        message: `Plugin "${Nm(item.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`
      });else if (Tge(item) && typeof item.source === "object" && item.source.source === "archive" && !item.source.sha256) warnings_2.push({
        path: `plugins[${index}].source.sha256`,
        message: `Plugin "${Nm(item.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`
      });
      for (let A of N ? Object.keys(item.headers ?? {}) : []) if (Dxr(A)) warnings_2.push({
        path: `plugins[${index}].headers.${Nm(A)}`,
        message: `Header "${Nm(A)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`
      });
    });
    if (!p.description && !p.metadata?.description) warnings_2.push({
      path: "description",
      message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
    });
  }
  let b = Jmn(),
    E = y.dirname(filePath_2),
    S = y.basename(E) === ".claude-plugin" ? y.dirname(E) : E;
  for (let [p, g] of c.entries()) {
    let h = b.safeParse(R1r(g, d));
    if (!h.success) continue;
    let R = h.data,
      source_3 = R.source;
    if (!d8e(source_3) || ce(source_3)) continue;
    let A = y.join(S, source_3),
      _ = y.join(A, ".claude-plugin", "plugin.json"),
      T = y.relative(S, _),
      O = await dme(S, y.join(A, ".claude-plugin"));
    if (O === "not-a-directory") {
      errors_2.push({
        path: `plugins[${p}] plugin.json \u2192 file`,
        code: "ENOTDIR",
        message: `A path component of ${T} is not a directory, so the file cannot be read. The entry will fail to load at install time.`
      });
      continue;
    }
    if (O === "refused") {
      warnings_2.push({
        path: `plugins[${p}].source`,
        message: `Local source "${source_3}" is or traverses a symlink, so ${T} was not read \u2014 ` + "validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately."
      });
      continue;
    }
    if (O !== "ok") continue;
    let L;
    try {
      L = await rqe(_);
    } catch (error) {
      errors_2.push({
        path: `plugins[${p}] plugin.json \u2192 file`,
        message: `Failed to read ${T}: ${l(error)}`
      });
      continue;
    }
    if (L.kind === "refused" || L.kind === "too-large") {
      warnings_2.push({
        path: `plugins[${p}].source`,
        message: `${T} ${L.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${Pne} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`
      });
      continue;
    }
    if (L.kind === "absent") continue;
    let content = L.content;
    if (R.version) {
      let j;
      try {
        let M = J(Jo(content));
        if (typeof M.version === "string") j = M.version;
      } catch (error) {
        warnings_2.push({
          path: `plugins[${p}].source`,
          message: `Could not parse ${y.relative(S, _)} for version cross-check: ${l(error)}`
        });
      }
      if (j && j !== R.version) {
        let M = y.relative(S, _);
        warnings_2.push({
          path: `plugins[${p}].version`,
          message: `Entry declares version "${R.version}" but ${M} says "${j}". ` + "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " + `Update this entry to "${j}" to match.`
        });
      }
    }
    let F = q(await He(_, content)),
      se = `plugins[${p}] plugin.json \u2192 `;
    for (let j of F.errors) errors_2.push({
      ...j,
      path: se + j.path
    });
    for (let j of F.warnings) warnings_2.push({
      ...j,
      path: se + j.path
    });
  }
  return {
    success: errors_2.length === 0,
    errors: errors_2,
    warnings: warnings_2,
    filePath: filePath_2,
    fileType: "marketplace"
  };
}
function oS(e, n) {
  return fr(kd(af(e), n));
}
function q(e) {
  return {
    ...e,
    errors: e.errors.map(item => ({
      ...item,
      path: oS(item.path, 200),
      message: oS(item.message, 1000)
    })),
    warnings: e.warnings.map(item => ({
      path: oS(item.path, 200),
      message: oS(item.message, 1000)
    })),
    ...(e.notes !== void 0 && {
      notes: e.notes.map(item => oS(item, 1000))
    })
  };
}
function $t(filePath_3, n, fileType, a) {
  let errors_3 = [],
    warnings_3 = [],
    c = a === "project" && fileType === "agent",
    f = Jo(n).match(Mk);
  if (!f) {
    if (!c) warnings_3.push({
      path: "frontmatter",
      message: "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata."
    });
    return {
      success: !0,
      errors: errors_3,
      warnings: warnings_3,
      filePath: filePath_3,
      fileType: fileType
    };
  }
  let d = cLt(f[1] || "");
  if (!d.ok) {
    let m = fileType !== "agent" ? `At runtime this ${fileType} loads with empty metadata (all frontmatter fields silently dropped).` : a === "project" ? "At runtime this agent does not load at all \u2014 with no frontmatter " + "name it is treated as a co-located reference document and skipped." : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return errors_3.push({
      path: "frontmatter",
      message: `YAML frontmatter failed to parse: ${oS(d.error, 200)}. ` + m
    }), {
      success: !1,
      errors: errors_3,
      warnings: warnings_3,
      filePath: filePath_3,
      fileType: fileType
    };
  }
  let w = d.value;
  if (w !== null && !G(w)) return errors_3.push({
    path: "frontmatter",
    message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(w) ? "an array" : typeof w}.`
  }), {
    success: !1,
    errors: errors_3,
    warnings: warnings_3,
    filePath: filePath_3,
    fileType: fileType
  };
  let k = w ?? {};
  if (k.description !== void 0) {
    let description = k.description;
    if (typeof description !== "string" && typeof description !== "number" && typeof description !== "boolean" && description !== null) errors_3.push({
      path: "description",
      message: `description must be a string, got ${Array.isArray(description) ? "array" : typeof description}. At runtime this value is dropped.`
    });
  } else if (!c || typeof k.name === "string") warnings_3.push({
    path: "description",
    message: `No description in frontmatter. A description helps users and Claude understand when to use this ${fileType}.`
  });
  if (k.name !== void 0 && k.name !== null && typeof k.name !== "string") errors_3.push({
    path: "name",
    message: `name must be a string, got ${typeof k.name}.`
  });
  let P = k["allowed-tools"];
  if (P !== void 0 && P !== null) {
    if (typeof P !== "string" && !Array.isArray(P)) errors_3.push({
      path: "allowed-tools",
      message: `allowed-tools must be a string or array of strings, got ${typeof P}.`
    });else if (Array.isArray(P) && P.some(item => typeof item !== "string")) errors_3.push({
      path: "allowed-tools",
      message: "allowed-tools array must contain only strings."
    });
  }
  if (fileType === "skill" || fileType === "command") {
    let m = !1;
    (E => {
      if (E == null || G(E)) return;
      m = !0, warnings_3.push({
        path: "metadata",
        message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(E) ? "array" : typeof E}. It is dropped at load time.`
      });
    })(k.metadata);
  }
  if (fileType === "skill" || fileType === "command") {
    let shell = k.shell;
    if (shell !== void 0 && shell !== null) if (typeof shell !== "string") errors_3.push({
      path: "shell",
      message: `shell must be a string, got ${typeof shell}.`
    });else {
      let b = shell.trim().toLowerCase();
      if (b !== "bash" && b !== "powershell") errors_3.push({
        path: "shell",
        message: `shell must be 'bash' or 'powershell', got '${oS(shell, 64)}'.`
      });
    }
  }
  return {
    success: errors_3.length === 0,
    errors: errors_3,
    warnings: warnings_3,
    filePath: filePath_3,
    fileType: fileType
  };
}
async function Et(filePath_4, n) {
  let s = {
      result: {
        success: !0,
        errors: [],
        warnings: [],
        filePath: filePath_4,
        fileType: "hooks"
      },
      modules: []
    },
    a = h => ({
      result: V(filePath_4, "hooks", `${h} \u2014 hooks are read without following symlinks and are capped at ` + `${Pne} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`),
      modules: []
    }),
    r = y.dirname(filePath_4),
    i = await dme(y.dirname(r), r);
  if (i === "refused") return a("The hooks directory is a symlink and was not read");
  if (i !== "ok") return s;
  let c;
  try {
    c = await rqe(filePath_4);
  } catch (error) {
    return {
      result: {
        success: !1,
        errors: [{
          path: "file",
          message: `Failed to read file: ${l(error)}`
        }],
        warnings: [],
        filePath: filePath_4,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (c.kind === "refused") return a("hooks.json is not a regular file (a symlink, a FIFO, a directory)");
  if (c.kind === "too-large") return a("hooks.json is past the size cap and was not read");
  if (c.kind === "absent") return s;
  let content_2 = c.content,
    d;
  try {
    d = J(content_2);
  } catch (error) {
    return {
      result: {
        success: !1,
        errors: [{
          path: "json",
          message: `Invalid JSON syntax: ${l(error)}. At runtime this breaks the entire plugin load.`
        }],
        warnings: [],
        filePath: filePath_4,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (Xq(d, jmn) || Cne(d)) return {
    result: {
      success: !1,
      errors: [{
        path: "hooks",
        message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${Xb}`
      }],
      warnings: [],
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: []
  };
  let w = d && typeof d === "object" && "hooks" in d ? Ane(d.hooks) : {
      notes: [],
      unloadableGuards: []
    },
    warnings_4 = w.notes.map(item => ({
      path: "hooks",
      message: `${item} at runtime`
    }));
  if (w.unloadableGuards.length > 0) return {
    result: {
      success: !1,
      errors: w.unloadableGuards.map(item => ({
        path: "hooks",
        message: `${item} \u2014 ${Xb}`
      })),
      warnings: warnings_4,
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: []
  };
  let P = Vmn().safeParse(d);
  if (!P.success) return {
    result: {
      success: !1,
      errors: Q(P.error),
      warnings: warnings_4,
      filePath: filePath_4,
      fileType: "hooks"
    },
    modules: []
  };
  let m = [];
  for (let h of Fe(P.data.hooks ?? {})) m.push({
    path: `hooks.${h.event}`,
    message: `Shell command uses ${h.placeholders.join(", ")} without quotes: ${oS(h.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.`
  });
  let errors_4 = [],
    notes_2 = [],
    modules = P.data.modules ?? [],
    p = modules.length > 0 ? await St(n) : Ee,
    nouns = p.nouns;
  for (let h of modules) {
    let R = y.resolve(r, h),
      N = y.relative(n, R);
    if (N === ".." || N.startsWith(`..${y.sep}`) || y.resolve(N) === N || Fxe(h)) {
      errors_4.push({
        path: `modules.${h}`,
        message: "The module path leaves the plugin directory"
      });
      continue;
    }
    try {
      let {
          scan: scan,
          registrations: registrations,
          renderMatchers: renderMatchers,
          helperCalls: helperCalls
        } = await K2o(R, n, y.basename(n)),
        L = registrations.length === 0 ? "nothing" : registrations.join(", "),
        D = [...scan.calls.map(item => {
          let x = helperCalls.get(item);
          return x === void 0 ? `$.${item}` : `$.${item} (via ${x.join(", ")})`;
        }), ...(scan.nextTo ?? []).map(item => `next.to:${item}`)],
        F = D.length === 0 ? "nothing on $" : D.join(", ");
      notes_2.push(`${h} hooks: ${L}`, `${h} calls: ${F}`);
      for (let {
        registration: registration,
        matcher: matcher
      } of renderMatchers) {
        let W = HVn(matcher);
        if (W !== void 0) warnings_4.push({
          path: `modules.${h}`,
          message: `on ${registration}: ${W}`
        });
      }
      let se = scan.hooks.some(item => x6(item, "engine.create"));
      if (nouns.length > 0 && !se) warnings_4.push({
        path: `modules.${h}`,
        message: `the manifest's types contract declares ${nouns.map(item => `$.${item}`).join(", ")} on EngineInterface, but ${h} registers no hook on engine.create, so the plugin never adds ${I(nouns.length, "it", "them")} to $`
      });
      if (scan.env !== void 0) {
        let M = x => x.length === 0 ? "nothing" : x.join(", ");
        notes_2.push(`${h} env writes: ${M(scan.env.writes)}`, `${h} env reads: ${M(scan.env.reads)}`);
      }
      if (scan.state !== void 0) {
        let M = W => W.length === 0 ? "nothing" : W.map(item => bFe(item)).join(", ");
        notes_2.push(`${h} state writes: ${M(scan.state.writes)}`, `${h} state reads: ${M(scan.state.reads)}`);
        let x = mjo({
          names: scan.state,
          owner: p.name ?? y.basename(n),
          declared: p.state,
          others: await Rt(n)
        });
        if (errors_4.push(...x.problems.map(W => ({
          path: `modules.${h}`,
          message: W
        }))), x.unchecked.length > 0) notes_2.push(`${h} state of other plugins, not checked (run validate in a session with them enabled): ${x.unchecked.join(", ")}`);
      }
      let j = await Jyr(scan.clients, n, y.basename(n));
      if (j !== void 0) notes_2.push(`${h} surface modules: ${j.map(item => item.module).join(", ")}`);
    } catch (error) {
      errors_4.push({
        path: `modules.${h}`,
        message: oS(l(error), 400)
      });
    }
  }
  return {
    result: {
      success: errors_4.length === 0,
      errors: errors_4,
      warnings: [...warnings_4, ...m],
      filePath: filePath_4,
      fileType: "hooks",
      ...(notes_2.length > 0 && {
        notes: notes_2
      })
    },
    modules: modules
  };
}
var Ee = {
  name: void 0,
  nouns: [],
  state: []
};
async function St(e) {
  let n = await H(y.join(e, ".claude-plugin", "plugin.json")),
    s = n === void 0 ? void 0 : Y(Jo(n)),
    name_2 = typeof s?.name === "string" ? s.name : void 0,
    r = s?.types;
  if (typeof r !== "string") return {
    ...Ee,
    name: name_2
  };
  let i = await e4t(r, e, y.basename(e));
  return i.kind === "read" ? {
    name: name_2,
    nouns: i.nouns,
    state: i.state
  } : {
    ...Ee,
    name: name_2
  };
}
async function Rt(e) {
  let n = dt(),
    s = n.pluginLoadCacheOnly ?? n.pluginLoad;
  if (s === void 0) return;
  let a;
  try {
    a = (await s).enabled;
  } catch {
    return;
  }
  let r = [];
  for (let i of a) {
    let types = i.manifest.types;
    if (!(typeof types === "string" && y.resolve(i.path) !== y.resolve(e))) continue;
    let d = await e4t(types, i.path, i.name);
    if (d.kind === "read") r.push(...d.state);
  }
  return r;
}
async function Ct(e) {
  let n = [y.join(e, "hooks", "hooks.json")];
  if (!(await mke(y.join(e, ".claude-plugin")))) return n;
  let s = await H(y.join(e, ".claude-plugin", "plugin.json")),
    a = s === void 0 ? void 0 : Y(Jo(s))?.hooks,
    r = Array.isArray(a) ? a : [a];
  for (let i of r) {
    if (typeof i !== "string") continue;
    let c = y.resolve(e, i),
      f = y.relative(e, c);
    if (f === ".." || f.startsWith(`..${y.sep}`) || y.resolve(f) === f || Fxe(i)) continue;
    if (!n.includes(c)) n.push(c);
  }
  return n;
}
async function At(e) {
  let n = [],
    s = [];
  for (let r of await Ct(e)) {
    let {
      result: result,
      modules: modules_2
    } = await Et(r, e);
    if (modules_2.length > 0) s.push(r);
    if (result.errors.length > 0 || result.warnings.length > 0 || result.notes !== void 0) n.push(result);
  }
  let [, filePath_5] = s;
  if (filePath_5 !== void 0) {
    let r = s.map(item => y.relative(e, item));
    n.push({
      success: !1,
      errors: [{
        path: "modules",
        message: `The plugin names one hooks module per plugin, but ${r.join(" and ")} each name one; the loader refuses both`
      }],
      warnings: [],
      filePath: filePath_5,
      fileType: "hooks"
    });
  }
  return n;
}
var It = new Set(["stdio", "http", "streamable-http", "sse", "ws", "sdk", "sse-ide", "ws-ide", "claudeai-proxy"]),
  Mt = /\$\{user_config\.([^}$]+)\}/g,
  Ge = /\$\{[^}$]+\}/,
  Se = 16,
  Nt = 8192,
  Tt = [/\bsk-[A-Za-z0-9_-]{16,}/, /\bgh[opsur]_[A-Za-z0-9]{30,}/, /\bgithub_pat_[A-Za-z0-9_]{30,}/, /\bxox[abeprs]-[A-Za-z0-9-]{10,}/, /\bAKIA[0-9A-Z]{16}\b/, /\bglpat-[A-Za-z0-9_-]{20,}/, /\bAIza[0-9A-Za-z_-]{35}\b/, /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/],
  _t = /authorization|api[-_]?key|token|secret|password|credential/i,
  jt = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;
function Lt(e) {
  let n = new Map();
  for (let a of e) n.set(a, (n.get(a) ?? 0) + 1);
  let s = 0;
  for (let a of n.values()) {
    let r = a / e.length;
    s -= r * Math.log2(r);
  }
  return s;
}
function xt(e, n) {
  if (n.length > Nt || Ge.test(n) || jt.test(n)) return !1;
  let s = n.trim();
  if (Tt.some(item => item.test(s))) return !0;
  if (!_t.test(e)) return !1;
  let a = s.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? s;
  return a.length >= 20 && !/\s/.test(a) && Lt(a) >= 3;
}
var Ot = /\$\{[^}$]+\}/g;
function re(e, n) {
  return URL.parse(e.replace(Ot, n)) ?? void 0;
}
function Ft(e) {
  let n = re(e, "probe-a.invalid") ?? re(e, "1"),
    s = re(e, "probe-b.invalid") ?? re(e, "2");
  if (!n || !s || n.hostname !== s.hostname) return;
  let a = n.protocol === "http:" ? "http" : n.protocol === "ws:" ? "ws" : void 0;
  if (a === void 0) return;
  let hostname = n.hostname;
  if (hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "127.0.0.1" || hostname === "[::1]") return;
  let i = a === "http" ? "https" : "wss";
  return `url uses ${a}:// to a non-loopback host \u2014 requests, headers and any ` + `credentials travel in cleartext. Use ${i}://; plugin directories may reject insecure remote server urls.`;
}
function Dt(e) {
  let n = [],
    s = [],
    a;
  if (e.type === void 0 || e.type === "stdio") {
    if (s.push("command"), a = "env", Array.isArray(e.args)) {
      for (let [i, value] of e.args.entries()) if (typeof value === "string") n.push({
        field: `args[${i}]`,
        value: value
      });
    }
  } else if (Re(e.type)) s.push("url", "headersHelper"), a = "headers";
  for (let field_2 of s) {
    let value_2 = e[field_2];
    if (typeof value_2 === "string") n.push({
      field: field_2,
      value: value_2
    });
  }
  let r = a === void 0 ? void 0 : e[a];
  if (a !== void 0 && G(r)) {
    for (let [i, value_3] of Object.entries(r)) if (typeof value_3 === "string") n.push({
      field: `${a}.${i}`,
      value: value_3
    });
  }
  return n;
}
function Re(e) {
  return e === "http" || e === "streamable-http" || e === "sse" || e === "ws";
}
function Ye(e, n, s) {
  let errors_5 = [],
    warnings_5 = [];
  if (!G(n)) return {
    errors: errors_5,
    warnings: warnings_5
  };
  for (let {
    field: field_3,
    value: value_4
  } of Dt(n)) {
    let f = new Set([...value_4.matchAll(Mt)].map(item => item[1]));
    if (f.size === 0) continue;
    let path_4 = `${e}.${oS(field_3, 64)}`;
    if (field_3 === "headersHelper") {
      errors_5.push({
        path: path_4,
        message: 'headersHelper references ${user_config.*}. Options are never substituted into headersHelper: the plugin loader refuses the server when the plugin declares any options (the value would be spliced into a shell command), and otherwise the literal text reaches the shell. Read the value inside the helper script instead (for example from a variable set in the server\'s "env" block).'
      });
      continue;
    }
    if (s === null) continue;
    for (let w of f) if (w !== void 0 && !s.has(w)) errors_5.push({
      path: path_4,
      message: `references \${user_config.${oS(w, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.`
    });
  }
  if (Re(n.type) && typeof n.url === "string") if (n.url.trim() === "") {
    if (typeof n.directory === "string" && n.directory !== "") warnings_5.push({
      path: `${e}.directory`,
      message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.`
    });
  } else if (!Ge.test(n.url) && !URL.canParse(n.url)) errors_5.push({
    path: `${e}.url`,
    message: 'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.'
  });else {
    let message_3 = Ft(n.url);
    if (message_3) warnings_5.push({
      path: `${e}.url`,
      message: message_3
    });
  }
  if (Re(n.type) && G(n.headers)) {
    for (let [i, c] of Object.entries(n.headers)) if (typeof c === "string" && xt(i, c)) warnings_5.push({
      path: `${e}.headers.${oS(i, 64)}`,
      message: "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value."
    });
  }
  return {
    errors: errors_5,
    warnings: warnings_5
  };
}
function Vt(path_5, n, s) {
  if (!G(n)) return [{
    path: path_5,
    message: `server config must be an object (got ${z(n)}). The plugin loader silently drops this server at load.`
  }];
  let r = n.type;
  if (r === void 0 && !("command" in n) && "url" in n) return [{
    path: `${path_5}.type`,
    message: 'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.'
  }];
  if (r !== void 0 && (typeof r !== "string" || !It.has(r))) {
    let d = typeof r === "string" ? `"${oS(r, 32)}"` : z(r);
    return [{
      path: `${path_5}.type`,
      message: `unknown server type ${d} \u2014 expected "stdio" (or no type) for a local ` + 'command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.'
    }];
  }
  let c = (r === void 0 || r === "stdio" ? Z$e() : r === "http" || r === "streamable-http" ? e8e() : r === "sse" ? Xpt() : r === "ws" ? kUt() : void 0)?.safeParse(n);
  if (!c) return [{
    path: path_5,
    message: `is not a valid "${String(r)}" server config (${Q(s)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.`
  }];
  return (c.success ? Q(s) : Q(c.error)).map(item => ({
    ...item,
    path: item.path === "root" ? path_5 : `${path_5}.${item.path}`,
    message: `${item.message}. The plugin loader silently drops this server at load.`
  }));
}
async function Ue(e, filePath_6, s) {
  let r = b => V(filePath_6, "mcp", `${b} \u2014 MCP server files are read without following symlinks and are capped at ` + `${Pne} bytes. The plugin loader has neither limit, so validate the real file separately.`),
    i;
  try {
    i = await rqe(e);
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "file",
        message: `Failed to read file: ${l(error)}`
      }],
      warnings: [],
      filePath: filePath_6,
      fileType: "mcp"
    };
  }
  if (i.kind === "absent") return null;
  if (i.kind === "refused") return r("The file is not a regular file (a symlink, a FIFO, a directory) and was not read");
  if (i.kind === "too-large") return r("The file is past the size cap and was not read");
  let c;
  try {
    c = J(i.content);
  } catch (error) {
    return {
      success: !1,
      errors: [{
        path: "json",
        message: `Invalid JSON syntax: ${i.content.startsWith("\uFEFF") ? "the file starts with a UTF-8 byte-order mark (BOM), which this file (unlike plugin.json) must not have \u2014 re-save it as UTF-8 without BOM" : l(error)}. The plugin loader logs this at debug level and loads no servers from the file.`
      }],
      warnings: [],
      filePath: filePath_6,
      fileType: "mcp"
    };
  }
  let errors_6 = [],
    warnings_6 = [],
    w = G(c) && Boolean(c.mcpServers),
    k = w && G(c) ? c.mcpServers : c,
    path_6 = w ? "mcpServers" : "root",
    m;
  if (G(k)) m = Object.entries(k);else if (Array.isArray(k)) {
    if (m = k.map((item, index) => [String(index), item]), k.length > 0) warnings_6.push({
      path: path_6,
      message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.`
    });
  } else return {
    success: !1,
    errors: [{
      path: path_6,
      message: `must be an object mapping server names to server configs (got ${z(k)}). No servers load from this file.`
    }],
    warnings: [],
    filePath: filePath_6,
    fileType: "mcp"
  };
  for (let [b, E] of m) {
    let S = oS(b, 64),
      p = w ? `mcpServers.${S}` : S,
      g = Kq().safeParse(E);
    if (!g.success) {
      errors_6.push(...Vt(p, E, g.error));
      continue;
    }
    let h = Ye(p, E, s(b));
    errors_6.push(...h.errors), warnings_6.push(...h.warnings);
  }
  return {
    success: errors_6.length === 0,
    errors: errors_6,
    warnings: warnings_6,
    filePath: filePath_6,
    fileType: "mcp"
  };
}
function qe(e) {
  let n = new Set(G(e.userConfig) ? Object.keys(e.userConfig) : []),
    s = new Map();
  if (Array.isArray(e.channels)) {
    for (let a of e.channels) if (G(a) && typeof a.server === "string" && !s.has(a.server)) s.set(a.server, new Set(G(a.userConfig) ? Object.keys(a.userConfig) : []));
  }
  return a => {
    let r = s.get(a);
    return r === void 0 ? n : {
      has: i => n.has(i) || r.has(i)
    };
  };
}
async function Ut(e, n) {
  return qe(e);
}
async function zt(e, n) {
  let s,
    manifestPath_2 = y.join(e, ".claude-plugin", "plugin.json");
  if (await mke(y.dirname(manifestPath_2))) {
    let S = await H(manifestPath_2),
      p = S === void 0 ? void 0 : Y(Jo(S));
    if (p) s = $se(p, "plugin-json", {
      pluginName: y.basename(e),
      manifestPath: manifestPath_2
    }).rawCandidate ?? p;
  }
  let i = s ? qe(s) : void 0,
    c = S => i ? i(S) : null,
    f = [],
    d = y.join(e, ".mcp.json"),
    w = await Ue(d, d, c);
  if (w) f.push(w);
  let k = new Set([y.resolve(d)]),
    P = s?.mcpServers,
    m = P === void 0 ? [] : Array.isArray(P) ? P : [P],
    b = Se,
    E = 0;
  for (let S of m) {
    if (typeof S !== "string") continue;
    if (!S.startsWith("./") || !S.endsWith(".json") || S.includes("..")) continue;
    let p = y.join(e, S),
      g = y.resolve(p);
    if (k.has(g)) continue;
    if (k.add(g), b <= 0) {
      E++;
      continue;
    }
    b--;
    let h = y.join(e, oS(S, 128)),
      R = await dme(e, y.dirname(p));
    if (R === "refused") {
      f.push(V(h, "mcp", "A directory on the way to this MCP servers file is a symlink or " + "escapes the plugin, and the file was not read \u2014 the plugin loader " + "follows it, so validate the real file separately."));
      continue;
    }
    if (R !== "ok") continue;
    let N = await Ue(p, h, c);
    if (N) f.push(N);
  }
  if (E > 0) f.push(V(manifestPath_2, "mcp", `plugin.json names more than ${Se} MCP server files; ${E} ${I(E, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`));
  return f.filter(item => item.errors.length > 0 || item.warnings.length > 0);
}
async function Me(e, n) {
  let s;
  try {
    s = await Ae(e, {
      withFileTypes: !0
    });
  } catch (error) {
    let c = v(error);
    if (c === "ENOENT" || c === "ENOTDIR") return {
      files: [],
      skippedSymlinks: 0
    };
    throw error;
  }
  let skippedSymlinks = U(s, i => i.isSymbolicLink());
  if (n) return {
    files: s.filter(item => item.isDirectory()).map(item => y.join(e, item.name, "SKILL.md")),
    skippedSymlinks: skippedSymlinks
  };
  let files = [];
  for (let i of s) {
    let c = y.join(e, i.name);
    if (i.isDirectory()) {
      let f = await Me(c, !1);
      files.push(...f.files), skippedSymlinks += f.skippedSymlinks;
    } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) files.push(c);
  }
  return {
    files: files,
    skippedSymlinks: skippedSymlinks
  };
}
var code_4 = "NO_MANIFEST",
  Je = new Map([["skills", "skill"], ["agents", "agent"], ["commands", "command"]]);
function ze(e, n) {
  return e === "project" || n === "skill";
}
async function Ce(e) {
  let n = [...Je].map(([a, r]) => [r, y.join(e, a)]),
    s = await Promise.all(n.map(([, a]) => dme(e, a)));
  return {
    dirs: n.filter((item, index) => s[index] === "ok"),
    refused: n.filter((item, index) => s[index] === "refused")
  };
}
async function Kt(e) {
  if ((await dme(e, y.join(e, ".claude-plugin"))) === "ok") return !0;
  let n = y.join(e, "skills"),
    s = await dme(e, n);
  if (s === "refused") return !0;
  if (s !== "ok") return !1;
  let {
    files: files_2
  } = await Me(n, !0);
  for (let r of files_2) if (await pt(r).then(() => !0, c => {
    let f = v(c);
    return f !== "ENOENT" && f !== "ENOTDIR";
  })) return !0;
  return !1;
}
function V(filePath_7, fileType_2, message_4) {
  return {
    success: !0,
    errors: [],
    warnings: [{
      path: "directory",
      message: message_4
    }],
    filePath: filePath_7,
    fileType: fileType_2
  };
}
async function ae(e, n, s) {
  let results = [],
    scanned = 0,
    skipped = n.length;
  for (let [c, f] of n) results.push(V(f, c, "This directory is a symlink and nothing in it was read \u2014 component " + `directories are read without following symlinks. A session loading this ${s === "plugin" ? "plugin" : "project"} does follow it, so validate the real directory separately.`));
  for (let [fileType_3, f] of e) {
    let {
        files: files_3,
        skippedSymlinks: skippedSymlinks_2
      } = await Me(f, fileType_3 === "skill"),
      k = ze(s, fileType_3) ? skippedSymlinks_2 : 0,
      P = 0,
      m = 0;
    for (let E of files_3) {
      let filePath_8 = oS(E, 256),
        p;
      try {
        p = await rqe(E);
      } catch (error) {
        results.push({
          success: !1,
          errors: [{
            path: "file",
            message: `Failed to read: ${oS(l(error), 200)}`
          }],
          warnings: [],
          filePath: filePath_8,
          fileType: fileType_3
        });
        continue;
      }
      if (p.kind !== "ok") {
        if (p.kind === "refused" && ze(s, fileType_3)) P++;else if (p.kind === "too-large") m++;
        continue;
      }
      scanned++;
      let g = $t(filePath_8, p.content, fileType_3, s);
      if (g.errors.length > 0 || g.warnings.length > 0) results.push(g);
    }
    skipped += k + P + m;
    let b = "A session loading this " + (s === "plugin" ? "plugin" : "directory") + " does follow them, so validate the real paths separately.";
    if (k > 0) results.push(V(f, fileType_3, `${k} ${I(k, "entry", "entries")} here ${I(k, "is", "are")} ${I(k, "a symlink", "symlinks")} and ${I(k, "was", "were")} not read \u2014 components are read ` + `without following symlinks. ${b}`));
    if (P > 0) results.push(V(f, fileType_3, `${P} ${I(P, "component")} here ${I(P, "was", "were")} not read \u2014 the path is not a ` + `regular file (a symlink, a FIFO, a directory). ${b}`));
    if (m > 0) results.push(V(f, fileType_3, `${m} ${I(m, "file")} here ${I(m, "is", "are")} larger than ${Pne} bytes and ${I(m, "was", "were")} not validated.`));
  }
  return {
    results: results,
    scanned: scanned,
    skipped: skipped
  };
}
async function Bt(e) {
  return (await Wt(e))?.map(q) ?? null;
}
async function Wt(filePath_9) {
  let fileType_4 = Je.get(y.basename(filePath_9));
  if (fileType_4) {
    let E = y.dirname(filePath_9),
      S;
    if (y.basename(E) === ".claude" && !(await mke(E))) S = "The enclosing .claude directory is a symlink.";else if (!(await mke(filePath_9))) S = "This path is a symlink.";
    if (S) return [{
      success: !1,
      errors: [{
        path: "directory",
        message: `${S} Component directories are read without following symlinks, so nothing here was validated. Pass the real directory instead.`
      }],
      warnings: [],
      filePath: filePath_9,
      fileType: fileType_4
    }];
    return (await ae([[fileType_4, filePath_9]], [], "project")).results;
  }
  let s = y.join(filePath_9, ".claude"),
    a = y.basename(filePath_9) === ".claude",
    [r, i] = await Promise.all([dme(filePath_9, s), a ? Promise.resolve(!1) : Kt(filePath_9)]),
    c = a || i ? await Ce(filePath_9) : {
      dirs: [],
      refused: []
    },
    f = r === "ok" ? await Ce(s) : {
      dirs: [],
      refused: []
    },
    d = a ? "project" : "plugin",
    [w, k] = await Promise.all([ae(c.dirs, c.refused, d), ae(f.dirs, f.refused, "project")]),
    P = [...w.results, ...k.results],
    m = w.scanned + k.scanned,
    b = w.skipped + k.skipped;
  if (r === "refused") P.push(V(s, "plugin", "This directory is a symlink and nothing in it was read \u2014 .claude is " + "read without following symlinks. A session loading this project does follow it, so validate the real directory separately."));
  return m > 0 || b > 0 || P.length > 0 ? P : null;
}
async function Ne(e) {
  let n = [],
    s = new Set(["claude.md", "claude.local.md"]),
    a = [];
  try {
    a = await Ae(e, {
      withFileTypes: !0
    });
  } catch {}
  for (let i of a) {
    if (!i.isFile() || !s.has(i.name.toLowerCase())) continue;
    let f = i.name.toLowerCase() === "claude.local.md" ? "Remove it from the plugin root." : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    n.push({
      success: !0,
      errors: [],
      warnings: [{
        path: "root",
        message: `${i.name} at the plugin root is not loaded as project context. ${f}`
      }],
      filePath: y.join(e, oS(i.name, 64)),
      fileType: "plugin"
    });
  }
  n.push(...(await Gt(e)));
  let r = await Ce(e);
  return n.push(...(await ae(r.dirs, r.refused, "plugin")).results), n.push(...(await At(e))), n.push(...(await zt(e, a))), n.map(q);
}
async function MQn(e, n) {
  let s = q(await Ht(e));
  if (n?.unrecordableNames !== "warn") return s;
  let errors_7 = s.errors.filter(item => item.code !== code_3),
    r = s.errors.filter(item => item.code === code_3).map(({
      path: path_7,
      message: message_5
    }) => ({
      path: path_7,
      message: message_5
    }));
  return {
    ...s,
    success: errors_7.length === 0,
    errors: errors_7,
    warnings: [...r, ...s.warnings]
  };
}
async function Ht(e) {
  let filePath_10 = y.resolve(e),
    s = null;
  try {
    s = await Ke(filePath_10);
  } catch (error) {
    if (!B(error)) throw error;
  }
  if (s?.isDirectory()) {
    let r = y.join(filePath_10, ".claude-plugin", "marketplace.json"),
      i = await ve(r),
      c = i.errors[0];
    if (!(c?.path === "file" && (c.code === "ENOENT" || c.code === "ENOTDIR"))) return i;
    let d = y.join(filePath_10, ".claude-plugin", "plugin.json"),
      w = await ee(d),
      k = w.errors[0]?.code;
    if (k !== "ENOENT" && k !== "ENOTDIR") return w;
    return {
      success: !1,
      errors: [{
        path: "directory",
        code: code_4,
        message: "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json"
      }],
      warnings: [],
      filePath: filePath_10,
      fileType: "plugin"
    };
  }
  switch (gt(e)) {
    case "plugin":
      return ee(e);
    case "marketplace":
      return ve(e);
    case "unknown":
      {
        try {
          let r = await Ie(filePath_10, {
              encoding: "utf-8"
            }),
            i = J(Jo(r));
          if (Array.isArray(i.plugins)) return ve(e);
        } catch (error) {
          if (v(error) === "ENOENT") return {
            success: !1,
            errors: [{
              path: "file",
              message: `File not found: ${filePath_10}`
            }],
            warnings: [],
            filePath: filePath_10,
            fileType: "plugin"
          };
        }
        return ee(e);
      }
  }
}
async function xht(e) {
  let manifest_3 = await MQn(e),
    s = manifest_3.filePath;
  if (manifest_3.errors.some(item => item.code === code_4)) {
    let contents = await Bt(s);
    return contents ? {
      manifest: null,
      contents: contents,
      resolvedPath: s
    } : {
      manifest: manifest_3,
      contents: [],
      resolvedPath: s
    };
  }
  let a = y.dirname(s),
    contents_2 = manifest_3.fileType === "plugin" && y.basename(a) === ".claude-plugin" ? await Ne(y.dirname(a)) : [];
  return {
    manifest: manifest_3,
    contents: contents_2,
    resolvedPath: s
  };
}
async function H(e) {
  return nqe(e).catch(() => {
    return;
  });
}
function te(e) {
  return G(e) ? e : void 0;
}
function Y(e) {
  try {
    return te(J(e));
  } catch {
    return;
  }
}
function Pe(e, n, s) {
  let a = [];
  for (let [r, i] of Object.entries(e)) {
    let c = te(i);
    if (!c || typeof c.command !== "string") continue;
    let d = c.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (d === void 0 || n.has(d) || s.has(d)) continue;
    let w = oS(r, 64),
      k = oS(d, 64);
    a.push({
      path: `mcpServers.${w}`,
      message: `bin/${k} is not a shipped file, a declared binaries entry, or ` + "a name derivable from the declared entries \u2014 the server will " + 'fail to start. Check for a typo against the "binaries" map in plugin.json.'
    });
  }
  return a;
}
async function Gt(e) {
  if (!(await mke(y.join(e, ".claude-plugin")))) return [];
  let n = y.join(e, ".claude-plugin", "plugin.json"),
    s = await H(n);
  if (s === void 0) return [];
  let a = Y(Jo(s)),
    r = oft(a?.binaries);
  if (!a || !r) return [];
  let i = new Set(Object.keys(r));
  for (let p of cSo) {
    let g = new Map();
    for (let h of Object.keys(r)) {
      let R = vKe(h, p);
      if (R !== void 0) g.set(R, (g.get(R) ?? 0) + 1);
    }
    for (let [h, R] of g) if (R === 1) i.add(h);
  }
  let c = y.join(e, "bin"),
    f = new Set();
  if (await mke(c)) f = await Ae(c).then(p => new Set(p)).catch(() => new Set());
  let d = [];
  function w(filePath_11, warnings_7) {
    if (warnings_7.length > 0) d.push({
      success: !0,
      errors: [],
      warnings: warnings_7,
      filePath: filePath_11,
      fileType: "plugin"
    });
  }
  let k = y.join(e, ".mcp.json"),
    P = await H(k);
  if (P !== void 0) {
    let p = Y(P);
    if (p) {
      let g = te(p.mcpServers || p);
      if (g) w(k, Pe(g, f, i));
    }
  }
  let mcpServers = a.mcpServers,
    b = mcpServers === void 0 ? [] : Array.isArray(mcpServers) ? mcpServers : [mcpServers],
    E = [],
    S = Se;
  for (let p of b) {
    if (typeof p === "string" && S <= 0) continue;
    if (typeof p === "string") {
      if (S--, !p.startsWith("./") || ce(p)) continue;
      let h = y.join(e, p);
      if ((await dme(e, y.dirname(h))) !== "ok") continue;
      let R = await H(h);
      if (R === void 0) continue;
      let N = Y(R);
      if (!N) continue;
      let A = te(N.mcpServers || N);
      if (A) w(y.join(e, oS(p, 128)), Pe(A, f, i));
      continue;
    }
    let g = te(p);
    if (g) E.push(...Pe(g, f, i));
  }
  return w(n, E), d;
}
var et = be(ih(), 1);
import { readFile as Qe, stat as Yt } from "fs/promises";
import { dirname as ue, join as de, relative as ne, resolve as Te, sep as Xe } from "path";
async function Pht(e, n = {}) {
  let warnings_8 = [],
    a = await Zt(e);
  if (!a.ok) return {
    ok: !1,
    error: a.error,
    warnings: warnings_8
  };
  let {
      pluginRoot: pluginRoot,
      manifestPath: manifestPath_3,
      manifest: manifest_4
    } = a,
    f = await ee(manifestPath_3),
    validation = [f];
  if (f.success) validation.push(...(await Ne(pluginRoot)));
  for (let g of validation) for (let h of g.warnings) warnings_8.push(`${ne(oe(), g.filePath)}: ${h.message}`);
  let w = validation.find(item => !item.success);
  if (w) {
    let g = w.errors.map(item => `  ${item.path}: ${item.message}`).join(`
`);
    return {
      ok: !1,
      error: `Plugin validation failed for ${w.filePath}:
${g}`,
      warnings: warnings_8
    };
  }
  let pluginName = manifest_4.name;
  if (typeof pluginName !== "string" || pluginName.length === 0) return {
    ok: !1,
    error: `plugin.json at ${manifestPath_3} has no "name" field`,
    warnings: warnings_8
  };
  let P = await Jt(pluginRoot, pluginName),
    m = typeof manifest_4.version === "string" && manifest_4.version.length > 0 ? manifest_4.version : void 0,
    version,
    versionFrom;
  if (m !== void 0) version = m, versionFrom = "plugin.json";else if (P?.entry.version) version = P.entry.version, versionFrom = "marketplace entry";else return {
    ok: !1,
    error: `No version to tag. Set "version" in ${ne(oe(), manifestPath_3)}` + (P ? ` or in the marketplace entry at ${ne(oe(), P.path)} plugins[${P.entryIndex}].` : ".") + " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
    warnings: warnings_8
  };
  if (P?.entry.version && m !== void 0 && P.entry.version !== m) return {
    ok: !1,
    error: `Version mismatch: plugin.json says "${m}" but ${ne(oe(), P.path)} plugins[${P.entryIndex}].version says "${P.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${m}" (or remove it) before tagging.`,
    warnings: warnings_8
  };
  if (et.valid(version) === null) return {
    ok: !1,
    error: `Version "${version}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
    warnings: warnings_8
  };
  let tag = mho(pluginName, version);
  if (!dT(tag)) return {
    ok: !1,
    error: `Computed tag name "${tag}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
    warnings: warnings_8
  };
  let gitRoot = Fn(pluginRoot);
  if (gitRoot === null) return {
    ok: !1,
    error: `${pluginRoot} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
    warnings: warnings_8
  };
  if (!n.force) {
    let g = await tn(gitRoot, P ? [pluginRoot, P.path] : [pluginRoot]);
    if (g.length > 0) {
      let h = g.slice(0, 5).join(`
  `),
        R = g.length > 5 ? `
  \u2026and ${g.length - 5} more` : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${h}${R}`,
        warnings: warnings_8
      };
    }
  }
  if (!n.force) {
    if (await nn(gitRoot, tag)) return {
      ok: !1,
      error: `Tag "${tag}" already exists locally. Bump the version in ${versionFrom}, or re-run with --force to move the tag.`,
      warnings: warnings_8
    };
  }
  return {
    ok: !0,
    warnings: warnings_8,
    plan: {
      pluginName: pluginName,
      version: version,
      versionFrom: versionFrom,
      tag: tag,
      pluginRoot: pluginRoot,
      gitRoot: gitRoot,
      marketplace: P ? {
        path: P.path,
        entryIndex: P.entryIndex,
        entryVersion: P.entry.version
      } : void 0,
      validation: validation
    }
  };
}
async function Iht(e, n) {
  let s = No(),
    a = await Ztn(e.gitRoot, sn, {
      envPins: {},
      base: s,
      repository: dae(e.gitRoot)
    });
  if (a === null) t(`[plugin tag] could not read the user's git signing configuration; ${e.tag} is created unsigned`, {
    level: "warn"
  });
  let r = ["-C", e.gitRoot, ...[...rn, ...(a ?? [])].flatMap(([d, w]) => ["-c", `${d}=${w}`]), "tag"];
  if (n.force) r.push("-f");
  r.push("-a", "-m", GXe(e, n.message), "--", e.tag, "HEAD");
  let i = await tt(yt(), r, {
    env: s,
    useCwd: !0
  });
  if (i.code !== 0) return {
    ok: !1,
    error: `git tag failed (exit ${i.code}): ${i.stderr.trim() || i.stdout.trim()}`
  };
  if (!n.push) return {
    ok: !0,
    pushed: !1
  };
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(n.remote)) return {
    ok: !1,
    error: `Tag created locally but not pushed: "${n.remote}" is not a valid remote name.`
  };
  let c = ["-C", e.gitRoot, "push"];
  if (n.force) c.push("--force");
  c.push(n.remote, `refs/tags/${e.tag}`);
  let f = await tt("git", c, {
    allowRepoGitHooks: !0,
    allowGitTerminalPrompt: n.allowGitTerminalPrompt,
    useCwd: !0
  });
  if (f.code !== 0) return {
    ok: !1,
    error: `Tag created locally but push failed (exit ${f.code}): ${f.stderr.trim() || f.stdout.trim()}`
  };
  return {
    ok: !0,
    pushed: !0
  };
}
function GXe(e, n) {
  return n === void 0 ? `${e.pluginName} ${e.version}` : n.replaceAll("%s", e.version);
}
async function Zt(e) {
  let n = Te(e),
    s;
  try {
    s = await Yt(n);
  } catch (r) {
    return {
      ok: !1,
      error: B(r) ? `Path not found: ${n}` : `Cannot stat ${n}: ${l(r)}`
    };
  }
  let a = s.isFile() ? [[ue(ue(n)), n]] : [[n, de(n, ".claude-plugin", "plugin.json")], [ue(n), de(n, "plugin.json")]];
  for (let [pluginRoot_2, manifestPath_4] of a) {
    let c;
    try {
      c = await Qe(manifestPath_4, {
        encoding: "utf-8"
      });
    } catch (d) {
      if (B(d)) continue;
      return {
        ok: !1,
        error: `Cannot read ${manifestPath_4}: ${l(d)}`
      };
    }
    let f;
    try {
      f = J(Jo(c));
    } catch (d) {
      return {
        ok: !1,
        error: `Invalid JSON in ${manifestPath_4}: ${l(d)}`
      };
    }
    return {
      ok: !0,
      pluginRoot: pluginRoot_2,
      manifestPath: manifestPath_4,
      manifest: typeof f === "object" && f !== null ? f : {}
    };
  }
  return {
    ok: !1,
    error: `No plugin manifest found. Expected ${de(n, ".claude-plugin", "plugin.json")}.`
  };
}
async function Jt(e, n) {
  let s = Fn(e) ?? void 0,
    a = e;
  for (;;) {
    let path_8 = de(a, ".claude-plugin", "marketplace.json"),
      i = await Xt(path_8);
    if (i) {
      for (let [entryIndex, entry] of i.plugins.entries()) if (Qt(entry, a, e, n)) return {
        path: path_8,
        entryIndex: entryIndex,
        entry: entry
      };
    }
    if (a === s) return;
    let c = ue(a);
    if (c === a) return;
    a = c;
  }
}
async function Xt(e) {
  let n;
  try {
    n = await Qe(e, {
      encoding: "utf-8"
    });
  } catch (error) {
    if (B(error)) return;
    return;
  }
  let s;
  try {
    s = J(Jo(n));
  } catch {
    return;
  }
  let a = f2().safeParse(s);
  return a.success ? a.data : void 0;
}
function Qt(e, n, s, a) {
  if (typeof e.source === "string") {
    let r = Te(n, e.source);
    return en(r, s);
  }
  return e.name === a;
}
function en(e, n) {
  let s = a => {
    let r = Te(a);
    return r.endsWith(Xe) ? r.slice(0, -Xe.length) : r;
  };
  return s(e) === s(n);
}
async function tn(e, n) {
  let s = n.map(item => ne(e, item) || "."),
    a = await tt(yt(), ["-C", e, "status", "--porcelain", vb, "--", ...s], {
      env: No(),
      useCwd: !0
    });
  if (a.code !== 0) return [];
  return a.stdout.split(`
`).map(item => item.slice(3).trim()).filter(item => item.length > 0);
}
async function nn(e, n) {
  let s = await tt(yt(), ["-C", e, "tag", "-l", "--", n], {
    env: No(),
    useCwd: !0
  });
  return s.code === 0 && s.stdout.trim() === n;
}
var sn = "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$",
  rn = [["tag.gpgSign", "false"], ["tag.forceSignAnnotated", "false"], ["gpg.format", "openpgp"], ["gpg.program", "gpg"], ["gpg.x509.program", "gpgsm"], ["gpg.ssh.program", "ssh-keygen"], ["gpg.ssh.defaultKeyCommand", ""]];
export { vPe, l2t, kPe, aSn, OQn, c2t, CYr, RYr, AYr, xYr, PYr, d2t, lSn, cSn, cue, IYr, OYr, oS, MQn, xht, Pht, Iht, GXe };