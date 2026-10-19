// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, Ye, H, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { _, J, mL, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Ir } from "B:/~BUN/root/chunk-xf0m410v.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { i, Qs } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Kr, jt, ja } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { wTe, ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { $ft, gO, CX, Ij } from "B:/~BUN/root/chunk-472kxa0t.js";
import { no, jJ, Jg, zJ, Cn, kze, iR, Wn, Nd, p7e, eE } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Rt, Xs, Ge } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { zi } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { fn, rk } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { m8e, nDt, _H, bnn, Yl, $ie, g8e } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { Mj, CNt, _3, EK } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { fp, To } from "B:/~BUN/root/chunk-z1p6g436.js";
import { rA, DDs, LDs, up } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { Vk } from "B:/~BUN/root/chunk-hkh6hras.js";
import { JMt } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { zP, lps, q_r, hlt, Oys, QNn, blt, cd, m_, nd, Iy, Cq, Qm, Ku, mSr, lw, Ys, Yn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { oD, Cvs, Dwe, ect, N9, A3e, hm, tct, lPe, dPe } from "B:/~BUN/root/chunk-01qdq3qc.js";
import { OZt, die, oMt, U6 } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { TZt, rb, EC, Ype, lie } from "B:/~BUN/root/chunk-qegjq8ky.js";
import { kwt, SCe, S6o, w6o, x2r, ltt, Jde, dtt, v6o, ctt, Cwt, WZn, zZn } from "B:/~BUN/root/chunk-8svw5dn3.js";
import { kqe } from "B:/~BUN/root/chunk-a9ttgpjt.js";
import { Lye } from "B:/~BUN/root/chunk-ad9119bn.js";
import { Gnt as ignoreAnswersWithinMs, YVe } from "B:/~BUN/root/chunk-sms2rmkt.js";
import { AKe } from "B:/~BUN/root/chunk-ce7rdtzh.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { createHash as K, randomUUID as we } from "crypto";
import { readFile as j, stat as Ce } from "fs/promises";
import { join as B } from "path";
function Z(e) {
  let mcpServers = e.manifest.mcpServers,
    r = (typeof mcpServers === "string" ? [mcpServers] : Array.isArray(mcpServers) ? mcpServers : []).filter(item => typeof item === "string" && oD(item)),
    local = r.filter(item => Cvs(item));
  return {
    local: local,
    remoteCount: r.length - local.length
  };
}
async function Q(e, n, r) {
  let p = await Promise.all(n.map(async m => {
      try {
        let result = await A3e(m, e.path, e.repository, void 0, void 0, !0, r);
        return {
          spec: m,
          result: result
        };
      } catch (error) {
        return t(`post-install bundle read failed for ${m}: ${d(error)}`, {
          level: "warn"
        }), {
          spec: m,
          result: void 0
        };
      }
    })),
    f = new Map(),
    unreadable = [];
  for (let {
    spec: spec,
    result: result_2
  } of p) if (!result_2) unreadable.push(spec);else if ("status" in result_2) f.set(result_2.manifest.name, {
    serverName: result_2.manifest.name,
    schema: result_2.configSchema,
    existingConfig: result_2.existingConfig
  });
  return {
    bundles: [...f.values()],
    unreadable: unreadable
  };
}
function M(e) {
  let n = e.indexOf("=");
  if (n <= 0) throw new x(`--config expects KEY=VALUE, got "${e}". Use --config key=value (repeatable).`, "--config pair has no key");
  return {
    key: e.slice(0, n),
    raw: e.slice(n + 1)
  };
}
function V(e, n, r, p) {
  let pluginPairs = [],
    bundlePairs = new Map();
  for (let m of e) {
    let {
      key: u,
      raw: raw
    } = M(m);
    if (n && Object.hasOwn(n, u)) {
      pluginPairs.push(m);
      continue;
    }
    let s = r.flatMap(({
        serverName: serverName,
        schema: schema
      }) => {
        let C = [],
          v = `${serverName}.`;
        if (u.startsWith(v) && Object.hasOwn(schema, u.slice(v.length))) C.push({
          serverName: serverName,
          field: u.slice(v.length),
          bare: !1
        });
        if (Object.hasOwn(schema, u)) C.push({
          serverName: serverName,
          field: u,
          bare: !0
        });
        return C;
      }),
      [h, ...S] = s;
    if (h && S.length === 0) {
      if (h.bare && p.unreadable.length + p.remoteCount > 0) throw new x(`--config key "${u}" must name its server, because a bundled MCP server whose keys are unknown may declare it too; use ${Rt(`${h.serverName}.${h.field}`)}.` + L(p), "--config bare key with an unread bundled server");
      let y = bundlePairs.get(h.serverName) ?? [];
      y.push(`${h.field}=${raw}`), bundlePairs.set(h.serverName, y);
      continue;
    }
    if (h) throw new x(`--config key "${u}" is declared by more than one bundled MCP server; use ${s.map(item => Rt(`${item.serverName}.${item.field}`)).join(" or ")}.`, "--config key is ambiguous between bundled servers");
    let w = [...Object.keys(n ?? {}), ...r.flatMap(({
      serverName: serverName_2,
      schema: schema_2
    }) => Object.keys(schema_2).map(item => Rt(`${serverName_2}.${item}`)))];
    throw new x(`--config key "${u}" isn't declared in this plugin's userConfig` + (r.length > 0 ? " or by its bundled MCP servers." : ".") + (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : "") + L(p), "--config key is not declared");
  }
  return {
    pluginPairs: pluginPairs,
    bundlePairs: bundlePairs
  };
}
function L({
  unreadable: unreadable_2,
  remoteCount: remoteCount
}) {
  let r = [];
  if (unreadable_2.length > 0) r.push(`the bundled ${unreadable_2.map(item => Ge(item)).join(", ")} could not be read, so its keys are unknown \u2014 re-run with --debug-file <path> to log why`);
  if (remoteCount > 0) r.push(`${remoteCount} bundled ${O(remoteCount, "server is", "servers are")} fetched from a URL at session start and can only be configured in Claude Code (/plugin \u2192 Installed \u2192 Configure)`);
  let p = r.join("; ");
  return p ? ` (${p[0].toUpperCase()}${p.slice(1)}.)` : "";
}
function ee(e, n) {
  let r = N9(e.existingConfig, e.schema);
  if (r.valid) return;
  let p = Rt(e.serverName),
    f = Object.entries(e.schema).filter(([m, u]) => {
      let g = no(e.existingConfig, m);
      return u.required === !0 && (g === void 0 || g === "");
    }).map(([m]) => Rt(`${p}.${m}`)),
    o = f.length > 0 ? `set ${f.join(", ")} with --config KEY=VALUE` : `${r.errors.map(item => Rt(item)).join("; ")} \u2014 fix it with --config ${p}.KEY=VALUE`;
  return `MCP server "${Ge(e.serverName)}" needs configuration before it can start: ${o}, or in Claude Code run /plugin, select "${Ge(n)}" in the Installed tab, and choose Configure.`;
}
import { basename as ye } from "path";
function Hhn(e, n) {
  let r = SWr(n);
  return r === null ? e : `${e}
${te.warning} ${r}`;
}
function SWr(e) {
  try {
    if (e === void 0 || e === "managed") return null;
    let n = iR(e),
      r = fn(n);
    if (r === void 0 || n === "userSettings" && ye(r) === eE.cowork) return null;
    if (hlt(n) || n !== "userSettings" && q_r(r)) return null;
    let p = rk(n).filter(item => item.file === r && item.severity !== "warning"),
      [f] = p;
    if (f === void 0) return null;
    let o = p.length - 1,
      m = f.path !== "" ? `its "${Ge(f.path, 80)}" ${o > 0 ? `and ${o} other ${O(o, "value")} are` : "is"} not valid` : f.errorClass === "unreadable" ? "it could not be read" : "it is not a JSON object";
    return `${Xs(r)} does not load (${m}), so Claude Code ignores the whole file, including anything this command wrote there. Fix the file, then run this command again if its change is missing. If a newer Claude Code wrote the file, update Claude Code instead.`;
  } catch (error) {
    return t(`settings file check after a plugin command skipped: ${d(error)}`, {
      level: "warn"
    }), null;
  }
}
class PluginOperationFailedError extends x {
  result;
  pluginCommandErrorCategory;
  constructor(e, n = {}) {
    super(e, "plugin operation returned a failure result");
    if (this.name = "PluginOperationFailedError", this.result = n, n.failureCode === "invalid_plugin_id" || n.failureCode === "plugin_folder_held" || n.failureCode === "install_records_unreadable" || n.failureCode === "directory_identity_changed" || n.failureCode === "directory_binding_unreadable" || n.failureCode === "directory_loaded") this.pluginCommandErrorCategory = "validation";
  }
}
function oe(e) {
  let n = e.kind === "command_source" ? [e.kind, e.pluginId, e.command, e.mode, e.catalogRevision] : [e.kind, e.pluginId, e.command, e.archiveUrl, e.catalogRevision];
  return K("sha256").update(_(n), "utf8").digest("hex");
}
function wWr(e) {
  return {
    ...e,
    sha256: oe(e)
  };
}
function q(e, n) {
  return n === void 0 ? e : {
    ...e,
    acceptCommandMatched: Y(n, e)
  };
}
async function ae(e, pluginId, r) {
  return {
    kind: "entry_helper",
    pluginId: pluginId,
    command: e.command,
    archiveUrl: p7e(e).destination,
    catalogRevision: await se(pluginId, r)
  };
}
async function se(e, n) {
  let r = `unreadable:${we()}`;
  if (W() && n !== void 0) return r;
  let {
      marketplace: marketplace
    } = Cn(e),
    f = marketplace === void 0 ? void 0 : m_(await nd(n), marketplace);
  if (f === void 0) return r;
  if (f.source.source === "claudeai") return r;
  let o = f.installLocation;
  try {
    if (f.source.source === "github" || f.source.source === "git") {
      if (await Ce(B(o, ".git")).then(() => !0, () => !1)) {
        let u = wTe(o, {}),
          g = await ct(Ot(), [...u.inCheckoutArgs, "rev-parse", "HEAD"], {
            cwd: o,
            env: u.env,
            stdin: "ignore"
          });
        return g.code === 0 ? `git:${g.stdout.trim()}` : r;
      }
      if (Iy(o) === void 0) {
        let u = (await j(B(o, $ft), "utf8")).trim();
        return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(u) ? `gcs:${u}` : r;
      }
    }
    return f.source.source === "settings" ? `settings:${be([await ne(o), A(f.source)])}` : `sha256:${await ne(o)}`;
  } catch {
    return r;
  }
}
async function ne(e) {
  let n = o => ["ENOENT", "ENOTDIR"].includes(k(o) ?? ""),
    r,
    p = !0;
  try {
    r = await j(B(e, ".claude-plugin", "marketplace.json"), "utf8");
  } catch (error) {
    if (!n(error)) throw error;
    r = await j(e, "utf8"), p = !1;
  }
  let f = p ? await j(B(e, "package.json"), "utf8").catch(o => {
    if (n(o)) return null;
    throw o;
  }) : null;
  return K("sha256").update(_([A(J(Bo(r))), f === null ? null : A(J(Bo(f)))]), "utf8").digest("hex");
}
function be(e) {
  return K("sha256").update(_(e), "utf8").digest("hex");
}
function A(e) {
  if (Array.isArray(e)) return ["[", ...e.map(A)];
  if (e !== null && typeof e === "object") return ["{", ...Object.keys(e).sort().map(item => [item, A(e[item])])];
  return e;
}
function Y(e, n) {
  return e !== void 0 && e.trim().toLowerCase() === oe(n);
}
async function vye(e) {
  let n = e.failureCode !== void 0 && Se.has(e.failureCode) ? e : {
    ...e,
    shownCommand: void 0
  };
  await fp(mL(_({
    ...n,
    nonce: z.value
  })) + `
`);
}
var z = He({
  value: void 0
}, e => {
  e.value = void 0;
});
function Wqo() {
  return z.value;
}
function zqo() {
  z.value = a.CLAUDE_CODE_RESULT_NONCE || void 0, a.unset("CLAUDE_CODE_RESULT_NONCE");
}
var Se = new Set(["command_source_refused", "command_source_declined", "entry_helper_unconfirmed", "entry_helper_declined"]);
function ie(e, n) {
  if (e instanceof PluginOperationFailedError) return e.result.failureCode ?? "op_failed";
  if (e instanceof Yl && n === "update") {
    let telemetryMessage = e.telemetryMessage;
    if (telemetryMessage.startsWith(OZt)) return telemetryMessage.slice(OZt.length);
  }
  return vWr(e);
}
function vWr(e) {
  if (e instanceof Yl) return g8e(e).code;
  if (e instanceof zP) return `claudeai_${e.code}`;
  return `error_${le(U6(e))}`;
}
function le(e) {
  return e.replaceAll("-", "_");
}
var _e = {
    invalid_plugin_id: "validation",
    plugin_folder_held: "validation",
    marketplace_policy_blocked: "policy",
    plugin_policy_blocked: "policy",
    dependency_policy_blocked: "policy",
    directory_unavailable: "network",
    directory_off: "validation",
    directory_not_in_session: "validation",
    installed_from_other_marketplace: "validation",
    dependency_pinned_version_unsatisfied: "validation",
    directory_listing_not_installable: "validation",
    directory_identity_changed: "validation",
    directory_binding_unreadable: "validation",
    replace_unavailable: "validation",
    replace_needs_full_id: "validation",
    replace_needs_fresh_listing: "network",
    install_records_unreadable: "validation",
    not_installed: "validation",
    not_installed_at_scope: "validation",
    already_in_goal_state: "validation",
    settings_still_on: "validation"
  },
  ke = {
    install: "claude plugin install failed with an unclassified error",
    uninstall: "claude plugin uninstall failed with an unclassified error",
    enable: "claude plugin enable failed with an unclassified error",
    disable: "claude plugin disable failed with an unclassified error",
    "disable-all": "claude plugin disable --all failed with an unclassified error",
    update: "claude plugin update failed with an unclassified error",
    prune: "claude plugin prune failed with an unclassified error"
  };
function G(e, n) {
  return n.length === 0 ? e : [e.trimEnd(), ...n].join(`
`);
}
async function l2e(e, n, plugin, p, f, o, m = []) {
  let u = e instanceof PluginOperationFailedError ? e.result.failureCode : void 0,
    g = U6(e),
    s = g === "unknown" && u !== void 0 ? _e[u] ?? g : g,
    command = n === "disable-all" ? "disable" : n === "prune" ? void 0 : n;
  if (f && command) {
    let C = e instanceof PluginOperationFailedError ? e.result : {};
    await vye({
      command: command,
      outcome: "failed",
      ...(n === "disable-all" ? {
        all: !0
      } : {
        plugin: plugin
      }),
      pluginId: C.pluginId ?? f.pluginId ?? o,
      scope: f.scope,
      message: Nd(G(d(e), m)),
      failureCode: ie(e, n),
      alreadyInGoalState: C.alreadyInGoalState,
      installedScope: C.installedScope,
      reverseDependents: C.reverseDependents,
      dependencies: C.dependencies,
      disableFirst: C.disableFirst,
      governingScope: C.governingScope,
      shownCommand: f.shownCommand && wWr(f.shownCommand)
    });
  }
  if (e instanceof Yl && (n === "install" || n === "update")) {
    if (console.error(Nd(G(d(e), m))), n === "install") {
      let {
        code: code,
        kind: kind
      } = g8e(e);
      if (kind === "bad") await jt("cli_plugin_install", code);else await ja("cli_plugin_install", code);
    } else if (n === "update") await ja("cli_plugin_update", ie(e, "update"));
    return To(1);
  }
  let S = e instanceof zP ? `claudeai_${e.code}` : void 0;
  if (s === "unknown" && !(e instanceof PluginOperationFailedError) && S === void 0) l(Ye(H(e), ke[n]));else t(`Plugin command "${n}" failed: ${d(e)}`, {
    level: "error"
  });
  let w = plugin ? `${n} plugin "${plugin}"` : n === "disable-all" ? "disable all plugins" : `${n} plugins`;
  console.error(Nd(G(`${te.cross} Failed to ${w}: ${d(e)}`, m)));
  let y = S ?? (u !== void 0 && (g === "unknown" || u === "not_installed") ? u : le(s));
  switch (n) {
    case "install":
      await jt("cli_plugin_install", y);
      break;
    case "uninstall":
      await jt("cli_plugin_uninstall", y);
      break;
    case "update":
      await jt("cli_plugin_update", y);
      break;
    case "enable":
      await jt("cli_plugin_enable", "cli_plugin_enable_failed");
      break;
    default:
      break;
  }
  let P = plugin ? await Lye(o ?? plugin, up(), p) : {};
  return await Qs("tengu_plugin_command_failed", {
    command: c(n),
    error_category: c(s),
    ...{
      failure_code: pe(u)
    },
    ...P,
    ...(o !== void 0 ? {
      aliased_id: !0
    } : {})
  }), To(1);
}
function re(e, n, r = "") {
  let p = {};
  for (let m of e) {
    let {
        key: key,
        raw: raw_2
      } = M(m),
      s = Rt(`${r}${key}`),
      h = (raw_2.split(/\r\n|\r|\n/, 1)[0] ?? "").trim(),
      S = Object.hasOwn(n, key) ? n[key] : void 0;
    if (!S) {
      let w = Object.keys(n).map(item => Rt(`${r}${item}`));
      throw Error(`--config key "${s}" isn't declared in this plugin's userConfig.` + (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : ""));
    }
    if (h === "") throw Error(`--config ${s}: value is empty. Omit the flag to leave "${s}" unset.`);
    if (S.type === "number") {
      let w = Number(h);
      if (Number.isNaN(w)) throw Error(`--config ${s}: "${h}" is not a number`);
      p[key] = w;
    } else if (S.type === "boolean") {
      let w = AKe(h);
      if (w === void 0) throw Error(`--config ${s}: "${h}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
      p[key] = w;
    } else p[key] = h;
  }
  let f = Vk(n, (m, u) => Object.hasOwn(p, u)),
    o = N9(p, f);
  if (!o.valid) throw Error(`--config validation failed: ${o.errors.map(item => Rt(item)).join("; ")}`);
  return p;
}
async function ve(e, n, r) {
  cd(r);
  let {
      enabled: enabled,
      disabled: disabled
    } = await lw(r),
    o = tct([...enabled, ...disabled], e),
    m = n ?? [],
    u = m.length > 0;
  if (!o) {
    if (u) throw Error(`--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`);
    return "";
  }
  let userConfig = o.manifest.userConfig,
    s = userConfig && Object.keys(userConfig).length > 0 ? userConfig : void 0,
    h = m.map(M).some(({
      key: key_2
    }) => !(s && Object.hasOwn(s, key_2))),
    {
      local: local_2,
      remoteCount: remoteCount_2
    } = Z(o),
    {
      bundles: bundles,
      unreadable: unreadable_3
    } = local_2.length > 0 && (o.enabled || h) ? await Q(o, local_2, r) : {
      bundles: [],
      unreadable: []
    },
    C = {
      unreadable: unreadable_3,
      remoteCount: remoteCount_2
    };
  if (u) {
    if (!s && bundles.length === 0) throw Error(`--config was given but plugin "${e}" declares no userConfig options` + (local_2.length > unreadable_3.length ? " and its bundled MCP servers declare no user_config." : ".") + L(C));
    let {
        pluginPairs: pluginPairs_2,
        bundlePairs: bundlePairs_2
      } = V(m, s, bundles, C),
      F = s && pluginPairs_2.length > 0 ? re(pluginPairs_2, s) : void 0,
      he = bundles.flatMap(N => {
        let U = bundlePairs_2.get(N.serverName);
        return U ? [{
          bundle: N,
          values: re(U, N.schema, `${N.serverName}.`)
        }] : [];
      });
    if (s && F) await lPe(hm(o), F, s, r);
    for (let {
      bundle: bundle,
      values: values
    } of he) await ect(o.repository, bundle.serverName, values, bundle.schema, r), bundle.existingConfig = (await Dwe(o.repository, bundle.serverName)) ?? {};
  }
  let v = [];
  if (s) {
    let R = Object.keys(await dPe(o));
    if (R.length > 0) {
      let T = R.filter(item => s[item]?.required === !0);
      v.push(`${R.length} userConfig ${O(R.length, "option")} not yet set` + (T.length > 0 ? ` (${T.length} required)` : "") + ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`);
    }
  }
  if (o.enabled) for (let R of bundles) {
    let T = ee(R, o.name);
    if (T) v.push(T);
  }
  return v.join(`
`);
}
async function de(pluginId_2, n, {
  yes = !1,
  acceptedCommand: acceptedCommand,
  acceptCommand: acceptCommand,
  onShown: onShown,
  storageV5: storageV5
} = {}) {
  if (typeof n.source !== "object" || n.source.source !== "command") return;
  if (gO()) {
    Ir(`${CX()}
`);
    return;
  }
  if (n.source.mode === "link" && I() === "windows") {
    Ir(`${nDt}
`);
    return;
  }
  let command_2 = n.source.command,
    grantKey = _H(n.source);
  if (acceptedCommand === grantKey && !m8e()) return;
  let shown = {
    kind: "command_source",
    pluginId: pluginId_2,
    command: command_2,
    mode: n.source.mode === "link" ? "link" : "copy",
    catalogRevision: await se(pluginId_2, storageV5)
  };
  onShown?.({
    ...q(shown, acceptCommand),
    ...(acceptedCommand !== void 0 && {
      previousAcceptance: acceptedCommand !== grantKey ? "changed" : "unreliable"
    })
  });
  let {
      name: name,
      marketplace: marketplace_2
    } = Cn(pluginId_2),
    w = Rt(name ?? "", 200),
    y = Rt(marketplace_2 ?? "", 200),
    disclosure = `"${w}" is installed by running a command from marketplace "${y}" on this machine` + (acceptedCommand === void 0 ? "" : acceptedCommand !== grantKey ? " \u2014 and that command (or how its output is used) CHANGED since you accepted it" : " \u2014 your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") + `:
  ${command_2}
  (${bnn(n.source)})
`;
  Ir(disclosure);
  let C = await X({
    yes: yes,
    acceptCommand: acceptCommand,
    shown: shown,
    disclosure: disclosure
  });
  return C === "accepted" ? {
    kind: "accepted",
    grantKey: grantKey
  } : C === "declined" ? {
    kind: "declined"
  } : void 0;
}
async function X({
  yes: yes_2 = !1,
  acceptCommand: acceptCommand_2,
  shown: shown_2,
  disclosure: p = ""
}) {
  let f = process.stdout.isTTY && process.stdin.isTTY;
  if (yes_2 || shown_2 !== void 0 && Y(acceptCommand_2, shown_2)) {
    if (!JMt()) return "accepted";
    if (!f) return Ir(`${yes_2 ? "-y/--yes" : "--accept-command"} is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.
`), "unconfirmed";
  }
  if (!f && acceptCommand_2 !== void 0 && shown_2 !== void 0 && !Y(acceptCommand_2, shown_2)) return Ir(`--accept-command does not name the command shown above (it may have changed since it was shown), so it was not run. Show it to the person again before accepting it.
`), "unconfirmed";
  if (!f) return Ir(JMt() ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.
` : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.
`), "unconfirmed";
  return (await YVe("Run this command now?", process.stdin, {
    ignoreAnswersWithinMs: ignoreAnswersWithinMs,
    reaskPreamble: p
  })) ? "accepted" : "declined";
}
async function Gqo(e, n = {}, r) {
  if (kze(e) !== null) return null;
  let {
    name: name_2,
    marketplace: marketplace_3
  } = Cn(e);
  if (!name_2) return null;
  let o = marketplace_3 ?? n.resolvedMarketplace;
  if (!o) try {
    o = (await zZn(name_2, r))?.marketplace;
  } catch (error) {
    if (error instanceof Yl) return null;
    throw error;
  }
  if (!o) return null;
  let m = `${name_2}@${o}`;
  if (await x2r(m, n.scope ?? "user", r)) return null;
  let u = await Cwt(m, void 0, r);
  if (u === null) return null;
  let disclosure_2 = `${WZn(u)}
`;
  Ir(disclosure_2);
  let shown_3 = await ae(u, m, r);
  n.onShown?.(q(shown_3, n.acceptCommand));
  let h = await X({
    yes: n.yes,
    acceptCommand: n.acceptCommand,
    shown: shown_3,
    disclosure: disclosure_2
  });
  return h === "accepted" ? u : h;
}
async function Vqo(e, n = {}, storageV5_2) {
  if (kze(e) !== null) return;
  let {
    name: name_3,
    marketplace: marketplace_4
  } = Cn(e);
  if (!name_3) return;
  let o = await nd(storageV5_2),
    m = marketplace_4,
    entry;
  if (!m) {
    let v;
    try {
      v = await zZn(name_3, storageV5_2);
    } catch (error) {
      if (error instanceof Yl) return;
      throw error;
    }
    if (!v) return;
    m = v.marketplace, entry = v.entry, n.onResolvedMarketplace?.(m);
  }
  let g = m_(o, m);
  if (Ij(g?.source)) return;
  let s = `${name_3}@${m}`,
    h = entry && n.acceptCommand === void 0 ? {
      entry: entry
    } : void 0;
  if (!h) {
    let v = await kwt(m, g, storageV5_2);
    n.onMarketplaceRefreshResult?.(v);
    try {
      h = await Cq(s, storageV5_2);
    } catch (error) {
      if (error instanceof Yl) return;
      throw error;
    }
  }
  let S = h ? $ie(h.entry.source) : void 0;
  if (!h || !S) return;
  let w = (W() && storageV5_2 !== void 0 ? await Ku(storageV5_2) : Qm()).plugins[s] ?? [],
    grantKey_2 = _H(S),
    P = !m8e(),
    C = P && w.some(item => item.sourceCommand === grantKey_2);
  if (await QNn(s, n.scope ?? "user", storageV5_2)) {
    if (!C) {
      let v = w.every(item => item.sourceCommand === void 0);
      Ir(`"${Rt(Cn(s).name ?? "", 200)}" is already installed, and its marketplace ` + (v ? "entry now installs it by running a command on this machine that has not been reviewed yet." : "has since changed the command that installs it (or how its output is used).") + ` Review and accept it: ${Jg("plugin update", s, {
        extra: (n.scope ?? "user") === "user" ? void 0 : `--scope ${n.scope}`,
        fallback: "an explicit plugin update reviews it"
      })}.
`);
    }
    return;
  }
  if (C) return {
    kind: "accepted",
    grantKey: grantKey_2
  };
  return de(s, h.entry, {
    yes: n.yes,
    acceptedCommand: P ? w.find(item => item.sourceCommand !== void 0)?.sourceCommand : void 0,
    acceptCommand: n.acceptCommand,
    onShown: n.onShown,
    storageV5: storageV5_2
  });
}
async function qqo(plugin_2, scope_2 = "user", r, shownSourceCommand, shownEntryHelper, o, announceRefreshResult, u = {}) {
  let g = [];
  try {
    let s = await ltt(u.resolvedPlugin ?? plugin_2, scope_2, {
      shownSourceCommand: shownSourceCommand,
      shownEntryHelper: shownEntryHelper,
      announceRefreshResult: announceRefreshResult,
      replaceInstalledCopy: u.replaceInstalledCopy,
      npmRegistry: u.npmRegistry,
      gitHubHttpsFallback: lps(C => {
        g.push(C);
      })
    }, o);
    if (!s.success) throw new PluginOperationFailedError(s.message, s);
    let pluginId_3 = s.pluginId || plugin_2,
      scope = s.scope || scope_2;
    i("tengu_plugin_installed_cli", {
      ...(await Lye(pluginId_3, up(), o)),
      plugin_id: die(pluginId_3),
      scope: c(scope),
      install_source: b("cli-explicit"),
      ...oMt(pluginId_3, mSr(pluginId_3, {
        scope: scope
      })),
      ...TZt({
        pluginId: pluginId_3,
        surface: "cli",
        replaced: s.switched !== void 0
      }),
      ...(s.aliasedId ? {
        aliased_id: !0,
        ...(s.reenabled && {
          reenabled: !0
        })
      } : {})
    });
    let w = "",
      configApplied = r && r.length > 0 ? !0 : void 0;
    try {
      if (s.nothingWritten) {
        if (configApplied) w = `${te.warning} --config values were not saved, because this command changed nothing. To set them, run /plugin configure ${s.pluginId || plugin_2} in Claude Code.`, configApplied = !1;
      } else w = await ve(s.pluginId || plugin_2, r, o);
    } catch (error) {
      let v = d(error);
      if (t(`post-install userConfig step failed: ${v}`, {
        level: "warn"
      }), r && r.length > 0) w = `${te.warning} Installed, but --config not applied: ${v}`, configApplied = !1;
    }
    let P = Hhn([s.message, ...g, ...(w ? [w] : [])].join(`
`), s.scope ?? scope_2);
    if (u.json) await vye({
      command: "install",
      outcome: "ok",
      plugin: plugin_2,
      pluginId: s.pluginId,
      scope: s.scope || scope_2,
      message: Nd(P),
      configApplied: configApplied,
      installedVersion: s.installedVersion,
      availableVersion: s.availableVersion
    });
    return P;
  } catch (error) {
    return l2e(error, "install", plugin_2, o, u.json ? {
      scope: scope_2,
      shownCommand: u.shownCommand
    } : void 0, error instanceof PluginOperationFailedError && error.result.aliasedId ? error.result.pluginId : void 0, g);
  }
}
async function ue(e, n) {
  let r = SCe(e),
    {
      enabled: enabled_2,
      disabled: disabled_2
    } = await Ys(W() ? n : void 0);
  return DDs((W() && n !== void 0 ? await Ku(n) : Qm()).plugins, [...enabled_2, ...disabled_2], e, r);
}
async function vWt(plugin_3, n, r, {
  unlessNamedInSettings = !1,
  unlessDirectoryNameHeld = !1
} = {}) {
  {
    let o = await blt(plugin_3, r);
    if (o && !(unlessNamedInSettings && w6o(plugin_3))) {
      if (unlessDirectoryNameHeld && rb(plugin_3)) {
        let u = await lie().catch(() => {
          return;
        });
        if (u === void 0 || Ype(u) || EC(u.keys(), plugin_3).length > 0) return {
          plugin: plugin_3,
          aliased: !1
        };
      }
      let m = o.installed.pluginId;
      if (!n) Ir(`${Wn(`"${Ge(plugin_3, 120)}" is installed as ${m} (the same plugin from ${zJ(Cn(m).marketplace ?? "")}).`)}
`);
      return {
        plugin: m,
        aliased: !0
      };
    }
  }
  return {
    plugin: plugin_3,
    aliased: !1
  };
}
async function Kqo(plugin_4, scope_3 = "user", r = !1, p = !1, yes_3 = !1, o, m = {}) {
  let u = {
    plugin: plugin_4,
    aliased: !1
  };
  try {
    u = await vWt(plugin_4, m.json, o, {
      unlessDirectoryNameHeld: !0
    });
    let g = await Jde(u.plugin, scope_3, !r, o);
    if (!g.success) throw new PluginOperationFailedError(g.message, g);
    await Qs("tengu_plugin_uninstalled_cli", {
      ...(await Lye(g.pluginId || u.plugin, up(), o)),
      scope: c(g.scope || scope_3),
      ...(u.aliased ? {
        aliased_id: !0
      } : {}),
      ...(g.savedKept !== void 0 && {
        saved_kept: !0
      })
    });
    let s = !1,
      h = async S => {
        if (m.json) await vye({
          command: "uninstall",
          outcome: "ok",
          plugin: plugin_4,
          pluginId: g.pluginId,
          scope: g.scope || scope_3,
          keptData: g.dataDirKept ?? r,
          ...(g.savedKept !== void 0 && {
            savedKept: g.savedKept.reason
          }),
          message: Nd(S)
        });
        return S;
      };
    try {
      let S = await ue(scope_3, o);
      if (p) return Ir(`${te.tick} ${Wn(g.message)}
`), s = !0, await ce(S, scope_3, {
        dryRun: !1,
        yes: yes_3,
        deleteDataDir: !r
      }, o);
      return h(g.message + LDs(S.orphans, scope_3));
    } catch (error) {
      l(Ye(H(error), "claude plugin uninstall: post-uninstall orphan scan or prune failed"));
      let y = `(${p ? "prune" : "orphan scan"} failed: ${d(error)})`;
      if (s) return y;
      let P = p ? `${te.tick} ${g.message}` : g.message;
      return h(`${P}
${y}`);
    }
  } catch (error) {
    return l2e(error, "uninstall", plugin_4, o, m.json ? {
      scope: scope_3
    } : void 0, u.aliased ? u.plugin : void 0);
  }
}
async function Yqo(e = "user", {
  dryRun = !1,
  yes: yes_4 = !1
} = {}, p) {
  try {
    let f = await ue(e, p);
    return await ce(f, e, {
      dryRun: dryRun,
      yes: yes_4,
      deleteDataDir: !0
    }, p);
  } catch (error) {
    return l2e(error, "prune");
  }
}
async function ce(e, n, r, p) {
  if (e.unloadable.length > 0) return `Skipped \u2014 cannot determine orphans: ${e.unloadable.map(Wn).join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (e.orphans.size === 0) return e.autoCount === 0 ? `Nothing to prune (no auto-installed plugins at ${n} scope).` : `Nothing to prune (${e.autoCount} auto-installed ${O(e.autoCount, "plugin", "plugins")} at ${n} scope, all still needed).`;
  let plugins = (W() && p !== void 0 ? await Ku(p) : Qm()).plugins,
    o = SCe(n),
    m = [...e.orphans].map(item => {
      let h = rA(plugins[item], n, o);
      return `  ${Wn(item)}${h?.version ? ` (${Wn(h.version)})` : ""}`;
    }),
    u = `${e.orphans.size} auto-installed ${O(e.orphans.size, "plugin", "plugins")} no longer needed at ${n} scope:
${m.join(`
`)}`;
  if (r.dryRun) return `${u}
(dry run \u2014 nothing removed)`;
  if (!r.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let h = n === "user" ? "" : ` --scope ${n}`;
      return `${u}
Not a TTY \u2014 run \`claude plugin prune${h} -y\` to remove.`;
    }
    if (Ir(`${u}
`), !(await YVe("Remove?"))) return "Aborted.";
  }
  let g = await Oys(e.orphans, n, o, {
    deleteDataDir: r.deleteDataDir
  }, p);
  return await Qs("tengu_plugin_prune_cli", {
    scope: c(n),
    removed_count: g.length
  }), `Removed ${g.length} auto-installed ${O(g.length, "plugin", "plugins")}: ${g.map(item => Wn(Cn(item).name)).join(", ")}`;
}
async function Xqo(plugin_5, scope_4, r, p = {}) {
  let f = {
    plugin: plugin_5,
    aliased: !1
  };
  try {
    f = await vWt(plugin_5, p.json, r, {
      unlessNamedInSettings: !0
    });
    let o = await dtt(f.plugin, scope_4, r);
    if (!o.success) throw new PluginOperationFailedError(o.message, o);
    await Qs("tengu_plugin_disabled_cli", {
      ...(await Lye(o.pluginId || f.plugin, up(), r)),
      scope: pe(o.scope),
      ...(f.aliased ? {
        aliased_id: !0
      } : {})
    });
    let m = Hhn(o.message, o.scope ?? scope_4);
    if (p.json) await vye({
      command: "disable",
      outcome: "ok",
      plugin: plugin_5,
      pluginId: o.pluginId,
      scope: o.scope ?? scope_4,
      message: Nd(m)
    });
    return `${te.tick} ${m}`;
  } catch (error) {
    return l2e(error, "disable", plugin_5, r, p.json ? {
      scope: scope_4
    } : void 0, f.aliased ? f.plugin : void 0);
  }
}
async function Jqo(e, n = {}) {
  try {
    let r = await v6o(e);
    if (!r.success) throw new PluginOperationFailedError(r.message, r);
    if (await Qs("tengu_plugin_disabled_all_cli", {}), n.json) await vye({
      command: "disable",
      outcome: "ok",
      all: !0,
      message: Nd(r.message)
    });
    return `${te.tick} ${r.message}`;
  } catch (error) {
    return l2e(error, "disable-all", void 0, void 0, n.json ? {} : void 0);
  }
}
async function Qqo(plugin_6, scope_5, {
  yes: yes_5 = !1,
  json = !1,
  acceptCommand: acceptCommand_3
} = {}, storageV5_3) {
  let pluginId_4,
    shownCommand,
    g = {
      plugin: plugin_6,
      aliased: !1
    };
  try {
    if (g = await vWt(plugin_6, json, storageV5_3), !json) Ir(`${Wn(`Checking for updates for plugin "${g.plugin}"${scope_5 ? ` at ${scope_5} scope` : ""}\u2026`)}
`);
    let s = await ctt(g.plugin, scope_5, {
        explicit: !0,
        onEntryHelperDisclosure: async (w, y, P) => {
          Ir(`${w}
`);
          let shown_4 = await ae(y, P, storageV5_3),
            v = await X({
              yes: yes_5,
              acceptCommand: acceptCommand_3,
              shown: shown_4,
              disclosure: `${w}
`
            });
          return shownCommand = v === "accepted" ? void 0 : q(shown_4, acceptCommand_3), v;
        },
        announceCommandSource: async (w, y, acceptedCommand_2) => {
          let C = await de(w, y, {
            yes: yes_5,
            acceptedCommand: acceptedCommand_2,
            acceptCommand: acceptCommand_3,
            onShown: v => {
              shownCommand = v;
            },
            storageV5: storageV5_3
          });
          if (C?.kind === "accepted") shownCommand = void 0;
          if (C?.kind === "declined") throw new Yl("Aborted \u2014 the command was not run.", "plugin command source declined at the prompt");
          return C?.grantKey;
        }
      }, storageV5_3),
      message = Wn(s.message);
    pluginId_4 = s.pluginId;
    let {
      outcome: S
    } = s;
    if (S === "failed") {
      if (s.failureCode !== void 0 && S6o(s.failureCode)) throw new Yl(message, `${OZt}${s.failureCode}`);
      throw new PluginOperationFailedError(message, {
        failureCode: s.failureCode,
        pluginId: s.pluginId
      });
    }
    if (json) await vye({
      command: "update",
      outcome: "ok",
      plugin: plugin_6,
      pluginId: s.pluginId,
      scope: s.scope ?? scope_5,
      message: message,
      updateOutcome: S,
      oldVersion: s.oldVersion,
      newVersion: s.newVersion,
      skipReason: s.skipReason,
      blockedBy: s.blockedBy,
      refreshFailed: s.refreshFailed,
      refreshRefusedByPolicy: s.refreshRefusedByPolicy
    });else {
      if (s.folderNote !== void 0) Ir(`${Wn(s.folderNote)}
`);
      Ir(`${te.tick} ${message}
`);
    }
    if (s.outcome === "updated") {
      let w = s.pluginId || g.plugin;
      i("tengu_plugin_updated_cli", {
        ...(await Lye(w, up(), storageV5_3)),
        old_version: zi(s.oldVersion),
        new_version: zi(s.newVersion),
        ...oMt(w, s.gitCommitSha),
        ...(g.aliased ? {
          aliased_id: !0
        } : {})
      });
    }
    if (g.aliased) await Kr("cli_plugin_update", {
      aliased_id: !0
    });else await Kr("cli_plugin_update");
    await Yn(0);
  } catch (error) {
    return l2e(error, "update", plugin_6, storageV5_3, json ? {
      scope: scope_5,
      pluginId: pluginId_4,
      shownCommand: shownCommand
    } : void 0, g.aliased ? g.plugin : void 0);
  }
}
import { mkdir as fe, writeFile as Pe } from "fs/promises";
import { dirname as $e, join as D, relative as Ie, resolve as me, sep as Re } from "path";
var $schema = "https://anthropic.com/claude-code/plugin.schema.json",
  kWt = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"];
function Zqo(e) {
  let n = jJ().shape.name.safeParse(e);
  if (!n.success) return n.error.issues[0]?.message ?? null;
  if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".") return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!CNt(e) || EK(e) || _3(e)) return `Plugin name cannot be "${Mj}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  let p = kqe(e);
  if (p?.severity === "error") return p.message;
  return null;
}
function eKo(e) {
  let {
      name: n,
      description: description,
      author: author
    } = e,
    f = e.with ?? [],
    o = [],
    m = {
      $schema: $schema,
      name: n,
      version: "0.1.0",
      description: description ?? "TODO: describe what this plugin provides"
    };
  if (author) m.author = author;
  if (m.skills = ["./"], o.push({
    relPath: D(".claude-plugin", "plugin.json"),
    contents: _(m, null, 2) + `
`
  }), o.push({
    relPath: "SKILL.md",
    contents: ge(n)
  }), f.includes("skills")) o.push({
    relPath: D("skills", "example", "SKILL.md"),
    contents: ge("example")
  });
  if (f.includes("agents")) o.push({
    relPath: D("agents", "example.md"),
    contents: Oe()
  });
  if (f.includes("hooks")) o.push({
    relPath: D("hooks", "hooks.json"),
    contents: Ne()
  }, {
    relPath: D("hooks-handlers", "on-session-start.ts"),
    contents: De(),
    mode: 493
  });
  if (f.includes("mcp") && !f.includes("channel")) o.push({
    relPath: ".mcp.json",
    contents: xe()
  });
  if (f.includes("lsp")) o.push({
    relPath: ".lsp.json",
    contents: Te()
  });
  if (f.includes("output-style")) o.push({
    relPath: D("output-styles", `${n}.md`),
    contents: Ae(n)
  });
  if (f.includes("channel")) m.channels = [{
    server: n,
    displayName: n
  }], o.push({
    relPath: ".mcp.json",
    contents: Fe(n)
  }, {
    relPath: "server.ts",
    contents: Le(n)
  }, {
    relPath: "package.json",
    contents: Ue(n)
  });
  return o[0].contents = _(m, null, 2) + `
`, o;
}
async function tKo(e, n, r) {
  let p = me(e);
  if (!r.force) try {
    await fe(D(p, ".claude-plugin"));
  } catch (o) {
    if (k(o) === "EEXIST") return {
      ok: !1,
      error: `${D(p, ".claude-plugin")} already exists. Use --force to overwrite.`
    };
    if (k(o) !== "ENOENT") throw o;
  }
  let skipped = [];
  for (let o of n) {
    let m = me(p, o.relPath),
      u = Ie(p, m);
    if (u.startsWith(".." + Re) || u === "..") return {
      ok: !1,
      error: `Refusing to write outside ${p}: ${o.relPath}`
    };
    if (await fe($e(m), {
      recursive: !0
    }), r.force) await An(m, o.contents, o.mode);else try {
      await Pe(m, o.contents, {
        flag: "wx",
        mode: o.mode
      });
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
      skipped.push(o.relPath);
    }
  }
  return {
    ok: !0,
    skipped: skipped
  };
}
function ge(e) {
  return `---
name: ${e}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${e}

TODO: what this skill does, and the steps Claude should take.
`;
}
function Oe() {
  return `---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`;
}
function Ne() {
  return _({
    hooks: {
      SessionStart: [{
        hooks: [{
          type: "command",
          command: 'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"'
        }]
      }]
    }
  }, null, 2) + `
`;
}
function De() {
  return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`;
}
function xe() {
  return _({
    mcpServers: {
      "example-remote": {
        type: "http",
        url: "https://example.com/mcp"
      },
      "example-local": {
        command: "npx",
        args: ["<your-mcp-server-package>"]
      }
    }
  }, null, 2) + `
`;
}
function Te() {
  return _({
    example: {
      command: "example-language-server",
      args: ["--stdio"],
      extensionToLanguage: {
        ".example": "example"
      }
    }
  }, null, 2) + `
`;
}
function Ae(e) {
  return `---
name: ${e}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`;
}
function Fe(e) {
  return _({
    mcpServers: {
      [e]: {
        command: "bun",
        args: ["run", "--cwd", "${CLAUDE_PLUGIN_ROOT}", "--shell=bun", "--silent", "start"]
      }
    }
  }, null, 2) + `
`;
}
function Ue(e) {
  return _({
    name: `claude-channel-${e}`,
    version: "0.1.0",
    type: "module",
    scripts: {
      start: "bun install --no-summary && bun server.ts"
    },
    dependencies: {
      "@modelcontextprotocol/sdk": "^1.0.0"
    }
  }, null, 2) + `
`;
}
function Le(e) {
  return `#!/usr/bin/env bun
/**
 * ${e} channel server \u2014 stdio MCP server implementing the channel contract.
 * See https://code.claude.com/docs/en/channels-reference.
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const mcp = new Server(
  { name: '${e}', version: '0.1.0' },
  {
    capabilities: {
      tools: {},
      // Required: presence of this key registers the channel notification
      // listener on Claude's side.
      experimental: { 'claude/channel': {} },
    },
    instructions:
      "Events from ${e} arrive as <channel source=\\"${e}\\" ...>. Anything " +
      "you want the sender to see must go through the reply tool \u2014 your " +
      "transcript output never reaches the channel.",
  },
)

mcp.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'reply',
      description: 'Send a message back to the ${e} channel.',
      inputSchema: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  ],
}))

mcp.setRequestHandler(CallToolRequestSchema, async req => {
  const args = (req.params.arguments ?? {}) as Record<string, unknown>
  if (req.params.name === 'reply') {
    // TODO: deliver args.text to the external service.
    return { content: [{ type: 'text', text: 'sent' }] }
  }
  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }
})

// TODO: when the external service has an inbound event, push it to Claude:
//
//   await mcp.notification({
//     method: 'notifications/claude/channel',
//     params: {
//       content: 'the event body',
//       meta: { chat_id: '...', sender: '...' },
//     },
//   })
//
// Each meta key becomes an attribute on the <channel> tag. Keys must be
// identifiers (letters/digits/underscores) \u2014 others are silently dropped.

await mcp.connect(new StdioServerTransport())
`;
}
export { Hhn, SWr, PluginOperationFailedError as bre, wWr, vye, Wqo, zqo, vWr, l2e, Gqo, Vqo, qqo, vWt, Kqo, Yqo, Xqo, Jqo, Qqo, kWt, Zqo, eKo, tKo };