// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, qe, F, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { oo } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { LH } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { l, pi } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Lr, Ut, Ls } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { GHe, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { YNt, Z2, bnn, Ree, RX, ML, Rse, L1 } from "B:/~BUN/root/chunk-esnm3r09.js";
import { Gie, Rg, Yie, $n, ktt, HO, Qn, vu, Abt, DR } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Et, Ji, Qe } from "B:/~BUN/root/chunk-2f1svh63.js";
import { Na } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { gs } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { un, hT } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Qfe } from "B:/~BUN/root/chunk-7s3m410n.js";
import { Qft, G7t, FW, LMn, yc, Qye, Zft } from "B:/~BUN/root/chunk-63btkzab.js";
import { Xu, Co } from "B:/~BUN/root/chunk-wd9jb4af.js";
import { GI, EGi, TGi, sp } from "B:/~BUN/root/chunk-fzefftbw.js";
import { kR } from "B:/~BUN/root/chunk-2gz7xsvb.js";
import { coe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { q0, Pgi, lno, hOt, Cki, lfr, Dje, Lc, cw, Nc, AS, b9, Py, em, Xro, dE, ki, sr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { a0e, VMt, EZ, Gh, KMt, qWe, YWe } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { AIn, jye, n7t, AZ } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { kIn, ek, WP, kTe, Bye } from "B:/~BUN/root/chunk-5fdpyc78.js";
import { Hzt, nUe, k3s, v3s, VLo, Kkt, Xwe, qkt, E3s, Ykt, Bzt, Y1r, X1r } from "B:/~BUN/root/chunk-q426ym2p.js";
import { nit } from "B:/~BUN/root/chunk-dsg3ep96.js";
import { y3s, _3s, z1r, b3s, G1r, S3s, SPe } from "B:/~BUN/root/chunk-gjf3ma5x.js";
import { $Ue as ignoreAnswersWithinMs, iOe } from "B:/~BUN/root/chunk-32cnqnds.js";
import { Yit } from "B:/~BUN/root/chunk-n7pt3r9e.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { createHash as G, randomUUID as pe } from "crypto";
import { readFile as M, stat as me } from "fs/promises";
import { join as j } from "path";
import { basename as ce } from "path";
function $qn(e, n) {
  let r = mMo(n);
  return r === null ? e : `${e}
${re.warning} ${r}`;
}
function mMo(e) {
  try {
    if (e === void 0 || e === "managed") return null;
    let n = HO(e),
      r = un(n);
    if (r === void 0 || n === "userSettings" && ce(r) === DR.cowork) return null;
    if (hOt(n) || n !== "userSettings" && lno(r)) return null;
    let c = hT(n).filter(item => item.file === r && item.severity !== "warning"),
      [u] = c;
    if (u === void 0) return null;
    let o = c.length - 1,
      g = u.path !== "" ? `its "${Qe(u.path, 80)}" ${o > 0 ? `and ${o} other ${P(o, "value")} are` : "is"} not valid` : u.errorClass === "unreadable" ? "it could not be read" : "it is not a JSON object";
    return `${Ji(r)} does not load (${g}), so Claude Code ignores the whole file, including anything this command wrote there. Fix the file, then run this command again if its change is missing. If a newer Claude Code wrote the file, update Claude Code instead.`;
  } catch (error) {
    return t(`settings file check after a plugin command skipped: ${d(error)}`, {
      level: "warn"
    }), null;
  }
}
class PluginOperationFailedError extends R {
  result;
  pluginCommandErrorCategory;
  constructor(e, n = {}) {
    super(e, "plugin operation returned a failure result");
    if (this.name = "PluginOperationFailedError", this.result = n, n.failureCode === "invalid_plugin_id" || n.failureCode === "plugin_folder_held" || n.failureCode === "install_records_unreadable" || n.failureCode === "directory_identity_changed" || n.failureCode === "directory_binding_unreadable" || n.failureCode === "directory_loaded") this.pluginCommandErrorCategory = "validation";
  }
}
function Z(e) {
  let n = e.kind === "command_source" ? [e.kind, e.pluginId, e.command, e.mode, e.catalogRevision] : [e.kind, e.pluginId, e.command, e.archiveUrl, e.catalogRevision];
  return G("sha256").update(_(n), "utf8").digest("hex");
}
function hMo(e) {
  return {
    ...e,
    sha256: Z(e)
  };
}
function Y(e, n) {
  return n === void 0 ? e : {
    ...e,
    acceptCommandMatched: H(n, e)
  };
}
async function Q(e, pluginId, r) {
  return {
    kind: "entry_helper",
    pluginId: pluginId,
    command: e.command,
    archiveUrl: Abt(e).destination,
    catalogRevision: await V(pluginId, r)
  };
}
async function V(e, n) {
  let r = `unreadable:${pe()}`;
  if (X() && n !== void 0) return r;
  let {
      marketplace: marketplace
    } = $n(e),
    u = marketplace === void 0 ? void 0 : cw(await Nc(n), marketplace);
  if (u === void 0) return r;
  if (u.source.source === "claudeai") return r;
  let o = u.installLocation;
  try {
    if (u.source.source === "github" || u.source.source === "git") {
      if (await me(j(o, ".git")).then(() => !0, () => !1)) {
        let p = GHe(o, {}),
          m = await lt(Pt(), [...p.inCheckoutArgs, "rev-parse", "HEAD"], {
            cwd: o,
            env: p.env,
            stdin: "ignore"
          });
        return m.code === 0 ? `git:${m.stdout.trim()}` : r;
      }
      if (AS(o) === void 0) {
        let p = (await M(j(o, YNt), "utf8")).trim();
        return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(p) ? `gcs:${p}` : r;
      }
    }
    return u.source.source === "settings" ? `settings:${fe([await q(o), A(u.source)])}` : `sha256:${await q(o)}`;
  } catch {
    return r;
  }
}
async function q(e) {
  let n = o => ["ENOENT", "ENOTDIR"].includes(k(o) ?? ""),
    r,
    c = !0;
  try {
    r = await M(j(e, ".claude-plugin", "marketplace.json"), "utf8");
  } catch (error) {
    if (!n(error)) throw error;
    r = await M(e, "utf8"), c = !1;
  }
  let u = c ? await M(j(e, "package.json"), "utf8").catch(o => {
    if (n(o)) return null;
    throw o;
  }) : null;
  return G("sha256").update(_([A(ee(gs(r))), u === null ? null : A(ee(gs(u)))]), "utf8").digest("hex");
}
function fe(e) {
  return G("sha256").update(_(e), "utf8").digest("hex");
}
function A(e) {
  if (Array.isArray(e)) return ["[", ...e.map(A)];
  if (e !== null && typeof e === "object") return ["{", ...Object.keys(e).sort().map(item => [item, A(e[item])])];
  return e;
}
function H(e, n) {
  return e !== void 0 && e.trim().toLowerCase() === Z(n);
}
async function rPe(e) {
  let n = e.failureCode !== void 0 && ge.has(e.failureCode) ? e : {
    ...e,
    shownCommand: void 0
  };
  await Xu(LH(_({
    ...n,
    nonce: K.value
  })) + `
`);
}
var K = he({
  value: void 0
}, e => {
  e.value = void 0;
});
function mqs() {
  return K.value;
}
function hqs() {
  K.value = i.CLAUDE_CODE_RESULT_NONCE || void 0, i.unset("CLAUDE_CODE_RESULT_NONCE");
}
var ge = new Set(["command_source_refused", "command_source_declined", "entry_helper_unconfirmed", "entry_helper_declined"]);
function J(e, n) {
  if (e instanceof PluginOperationFailedError) return e.result.failureCode ?? "op_failed";
  if (e instanceof yc && n === "update") {
    let telemetryMessage = e.telemetryMessage;
    if (telemetryMessage.startsWith(AIn)) return telemetryMessage.slice(AIn.length);
  }
  return gMo(e);
}
function gMo(e) {
  if (e instanceof yc) return Zft(e).code;
  if (e instanceof q0) return `claudeai_${e.code}`;
  return `error_${ne(AZ(e))}`;
}
function ne(e) {
  return e.replaceAll("-", "_");
}
var ye = {
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
  we = {
    install: "claude plugin install failed with an unclassified error",
    uninstall: "claude plugin uninstall failed with an unclassified error",
    enable: "claude plugin enable failed with an unclassified error",
    disable: "claude plugin disable failed with an unclassified error",
    "disable-all": "claude plugin disable --all failed with an unclassified error",
    update: "claude plugin update failed with an unclassified error",
    prune: "claude plugin prune failed with an unclassified error"
  };
function B(e, n) {
  return n.length === 0 ? e : [e.trimEnd(), ...n].join(`
`);
}
async function hrt(e, n, plugin, c, u, o, g = []) {
  if (n === "install" && u === void 0 && process.stdout.isTTY) Qfe(!1);
  let p = e instanceof PluginOperationFailedError ? e.result.failureCode : void 0,
    m = AZ(e),
    s = m === "unknown" && p !== void 0 ? ye[p] ?? m : m,
    command = n === "disable-all" ? "disable" : n === "prune" ? void 0 : n;
  if (u && command) {
    let C = e instanceof PluginOperationFailedError ? e.result : {};
    await rPe({
      command: command,
      outcome: "failed",
      ...(n === "disable-all" ? {
        all: !0
      } : {
        plugin: plugin
      }),
      pluginId: C.pluginId ?? u.pluginId ?? o,
      scope: u.scope,
      message: vu(B(d(e), g)),
      failureCode: J(e, n),
      alreadyInGoalState: C.alreadyInGoalState,
      installedScope: C.installedScope,
      reverseDependents: C.reverseDependents,
      dependencies: C.dependencies,
      disableFirst: C.disableFirst,
      governingScope: C.governingScope,
      shownCommand: u.shownCommand && hMo(u.shownCommand)
    });
  }
  if (e instanceof yc && (n === "install" || n === "update")) {
    if (console.error(vu(B(d(e), g))), n === "install") {
      let {
        code: code,
        kind: kind
      } = Zft(e);
      if (kind === "bad") await Ut("cli_plugin_install", code);else await Ls("cli_plugin_install", code);
    } else if (n === "update") await Ls("cli_plugin_update", J(e, "update"));
    return Co(1);
  }
  let w = e instanceof q0 ? `claudeai_${e.code}` : void 0;
  if (s === "unknown" && !(e instanceof PluginOperationFailedError) && w === void 0) a(qe(F(e), we[n]));else t(`Plugin command "${n}" failed: ${d(e)}`, {
    level: "error"
  });
  let y = plugin ? `${n} plugin "${plugin}"` : n === "disable-all" ? "disable all plugins" : `${n} plugins`;
  console.error(vu(B(`${re.cross} Failed to ${y}: ${d(e)}`, g)));
  let S = w ?? (p !== void 0 && (m === "unknown" || p === "not_installed") ? p : ne(s));
  switch (n) {
    case "install":
      await Ut("cli_plugin_install", S);
      break;
    case "uninstall":
      await Ut("cli_plugin_uninstall", S);
      break;
    case "update":
      await Ut("cli_plugin_update", S);
      break;
    case "enable":
      await Ut("cli_plugin_enable", "cli_plugin_enable_failed");
      break;
    default:
      break;
  }
  let I = plugin ? await SPe(o ?? plugin, sp(), c) : {};
  return await pi("tengu_plugin_command_failed", {
    command: f(n),
    error_category: f(s),
    ...{
      failure_code: de(p)
    },
    ...I,
    ...(o !== void 0 ? {
      aliased_id: !0
    } : {})
  }), Co(1);
}
function z(e, n, r = "") {
  let c = {};
  for (let g of e) {
    let {
        key: key,
        raw: raw
      } = z1r(g),
      s = Et(`${r}${key}`),
      h = (raw.split(/\r\n|\r|\n/, 1)[0] ?? "").trim(),
      w = Object.hasOwn(n, key) ? n[key] : void 0;
    if (!w) {
      let y = Object.keys(n).map(item => Et(`${r}${item}`));
      throw Error(`--config key "${s}" isn't declared in this plugin's userConfig.` + (y.length > 0 ? ` Known keys: ${y.join(", ")}.` : ""));
    }
    if (h === "") throw Error(`--config ${s}: value is empty. Omit the flag to leave "${s}" unset.`);
    if (w.type === "number") {
      let y = Number(h);
      if (Number.isNaN(y)) throw Error(`--config ${s}: "${h}" is not a number`);
      c[key] = y;
    } else if (w.type === "boolean") {
      let y = Yit(h);
      if (y === void 0) throw Error(`--config ${s}: "${h}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
      c[key] = y;
    } else c[key] = h;
  }
  let u = kR(n, (g, p) => Object.hasOwn(c, p)),
    o = EZ(c, u);
  if (!o.valid) throw Error(`--config validation failed: ${o.errors.map(item => Et(item)).join("; ")}`);
  return c;
}
async function Ce(e, n, r) {
  Lc(r);
  let {
      enabled: enabled,
      disabled: disabled
    } = await dE(r),
    o = KMt([...enabled, ...disabled], e),
    g = n ?? [],
    p = g.length > 0;
  if (!o) {
    if (p) throw Error(`--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`);
    return "";
  }
  let userConfig = o.manifest.userConfig,
    s = userConfig && Object.keys(userConfig).length > 0 ? userConfig : void 0,
    h = g.map(z1r).some(({
      key: key_2
    }) => !(s && Object.hasOwn(s, key_2))),
    {
      local: local,
      remoteCount: remoteCount
    } = y3s(o),
    {
      bundles: bundles,
      unreadable: unreadable
    } = local.length > 0 && (o.enabled || h) ? await _3s(o, local, r) : {
      bundles: [],
      unreadable: []
    },
    C = {
      unreadable: unreadable,
      remoteCount: remoteCount
    };
  if (p) {
    if (!s && bundles.length === 0) throw Error(`--config was given but plugin "${e}" declares no userConfig options` + (local.length > unreadable.length ? " and its bundled MCP servers declare no user_config." : ".") + G1r(C));
    let {
        pluginPairs: pluginPairs,
        bundlePairs: bundlePairs
      } = b3s(g, s, bundles, C),
      U = s && pluginPairs.length > 0 ? z(pluginPairs, s) : void 0,
      ue = bundles.flatMap(N => {
        let L = bundlePairs.get(N.serverName);
        return L ? [{
          bundle: N,
          values: z(L, N.schema, `${N.serverName}.`)
        }] : [];
      });
    if (s && U) await qWe(Gh(o), U, s, r);
    for (let {
      bundle: bundle,
      values: values
    } of ue) await VMt(o.repository, bundle.serverName, values, bundle.schema, r), bundle.existingConfig = (await a0e(o.repository, bundle.serverName)) ?? {};
  }
  let v = [];
  if (s) {
    let E = Object.keys(await YWe(o));
    if (E.length > 0) {
      let T = E.filter(item => s[item]?.required === !0);
      v.push(`${E.length} userConfig ${P(E.length, "option")} not yet set` + (T.length > 0 ? ` (${T.length} required)` : "") + ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`);
    }
  }
  if (o.enabled) for (let E of bundles) {
    let T = S3s(E, o.name);
    if (T) v.push(T);
  }
  return v.join(`
`);
}
async function te(pluginId_2, n, {
  yes = !1,
  acceptedCommand: acceptedCommand,
  acceptCommand: acceptCommand,
  onShown: onShown,
  storageV5: storageV5
} = {}) {
  if (typeof n.source !== "object" || n.source.source !== "command") return;
  if (ML()) {
    oo(`${Rse()}
`);
    return;
  }
  if (n.source.mode === "link" && x() === "windows") {
    oo(`${G7t}
`);
    return;
  }
  let command_2 = n.source.command,
    grantKey = FW(n.source);
  if (acceptedCommand === grantKey && !Qft()) return;
  let shown = {
    kind: "command_source",
    pluginId: pluginId_2,
    command: command_2,
    mode: n.source.mode === "link" ? "link" : "copy",
    catalogRevision: await V(pluginId_2, storageV5)
  };
  onShown?.({
    ...Y(shown, acceptCommand),
    ...(acceptedCommand !== void 0 && {
      previousAcceptance: acceptedCommand !== grantKey ? "changed" : "unreliable"
    })
  });
  let {
      name: name,
      marketplace: marketplace_2
    } = $n(pluginId_2),
    y = Et(name ?? "", 200),
    S = Et(marketplace_2 ?? "", 200),
    disclosure = `"${y}" is installed by running a command from marketplace "${S}" on this machine` + (acceptedCommand === void 0 ? "" : acceptedCommand !== grantKey ? " \u2014 and that command (or how its output is used) CHANGED since you accepted it" : " \u2014 your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") + `:
  ${command_2}
  (${LMn(n.source)})
`;
  oo(disclosure);
  let C = await W({
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
async function W({
  yes: yes_2 = !1,
  acceptCommand: acceptCommand_2,
  shown: shown_2,
  disclosure: c = ""
}) {
  let u = process.stdout.isTTY && process.stdin.isTTY;
  if (yes_2 || shown_2 !== void 0 && H(acceptCommand_2, shown_2)) {
    if (!coe()) return "accepted";
    if (!u) return oo(`${yes_2 ? "-y/--yes" : "--accept-command"} is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.
`), "unconfirmed";
  }
  if (!u && acceptCommand_2 !== void 0 && shown_2 !== void 0 && !H(acceptCommand_2, shown_2)) return oo(`--accept-command does not name the command shown above (it may have changed since it was shown), so it was not run. Show it to the person again before accepting it.
`), "unconfirmed";
  if (!u) return oo(coe() ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.
` : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.
`), "unconfirmed";
  return (await iOe("Run this command now?", process.stdin, {
    ignoreAnswersWithinMs: ignoreAnswersWithinMs,
    reaskPreamble: c
  })) ? "accepted" : "declined";
}
async function gqs(e, n = {}, r) {
  if (ktt(e) !== null) return null;
  let {
    name: name_2,
    marketplace: marketplace_3
  } = $n(e);
  if (!name_2) return null;
  let o = marketplace_3 ?? n.resolvedMarketplace;
  if (!o) try {
    o = (await X1r(name_2, r))?.marketplace;
  } catch (error) {
    if (error instanceof yc) return null;
    throw error;
  }
  if (!o) return null;
  let g = `${name_2}@${o}`;
  if (await VLo(g, n.scope ?? "user", r)) return null;
  let p = await Bzt(g, void 0, r);
  if (p === null) return null;
  let disclosure_2 = `${Y1r(p)}
`;
  oo(disclosure_2);
  let shown_3 = await Q(p, g, r);
  n.onShown?.(Y(shown_3, n.acceptCommand));
  let h = await W({
    yes: n.yes,
    acceptCommand: n.acceptCommand,
    shown: shown_3,
    disclosure: disclosure_2
  });
  return h === "accepted" ? p : h;
}
async function yqs(e, n = {}, storageV5_2) {
  if (ktt(e) !== null) return;
  let {
    name: name_3,
    marketplace: marketplace_4
  } = $n(e);
  if (!name_3) return;
  let o = await Nc(storageV5_2),
    g = marketplace_4,
    entry;
  if (!g) {
    let v;
    try {
      v = await X1r(name_3, storageV5_2);
    } catch (error) {
      if (error instanceof yc) return;
      throw error;
    }
    if (!v) return;
    g = v.marketplace, entry = v.entry, n.onResolvedMarketplace?.(g);
  }
  let m = cw(o, g);
  if (L1(m?.source)) return;
  let s = `${name_3}@${g}`,
    h = entry && n.acceptCommand === void 0 ? {
      entry: entry
    } : void 0;
  if (!h) {
    let v = await Hzt(g, m, storageV5_2);
    n.onMarketplaceRefreshResult?.(v);
    try {
      h = await b9(s, storageV5_2);
    } catch (error) {
      if (error instanceof yc) return;
      throw error;
    }
  }
  let w = h ? Qye(h.entry.source) : void 0;
  if (!h || !w) return;
  let y = (X() && storageV5_2 !== void 0 ? await em(storageV5_2) : Py()).plugins[s] ?? [],
    grantKey_2 = FW(w),
    I = !Qft(),
    C = I && y.some(item => item.sourceCommand === grantKey_2);
  if (await lfr(s, n.scope ?? "user", storageV5_2)) {
    if (!C) {
      let v = y.every(item => item.sourceCommand === void 0);
      oo(`"${Et($n(s).name ?? "", 200)}" is already installed, and its marketplace ` + (v ? "entry now installs it by running a command on this machine that has not been reviewed yet." : "has since changed the command that installs it (or how its output is used).") + ` Review and accept it: ${Rg("plugin update", s, {
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
  return te(s, h.entry, {
    yes: n.yes,
    acceptedCommand: I ? y.find(item => item.sourceCommand !== void 0)?.sourceCommand : void 0,
    acceptCommand: n.acceptCommand,
    onShown: n.onShown,
    storageV5: storageV5_2
  });
}
async function _qs(plugin_2, scope_2 = "user", r, shownSourceCommand, shownEntryHelper, o, announceRefreshResult, p = {}) {
  let m = [];
  try {
    let s = await Kkt(p.resolvedPlugin ?? plugin_2, scope_2, {
      shownSourceCommand: shownSourceCommand,
      shownEntryHelper: shownEntryHelper,
      announceRefreshResult: announceRefreshResult,
      replaceInstalledCopy: p.replaceInstalledCopy,
      npmRegistry: p.npmRegistry,
      gitHubHttpsFallback: Pgi(C => {
        m.push(C);
      })
    }, o);
    if (!s.success) throw new PluginOperationFailedError(s.message, s);
    let pluginId_3 = s.pluginId || plugin_2,
      scope = s.scope || scope_2;
    l("tengu_plugin_installed_cli", {
      ...(await SPe(pluginId_3, sp(), o)),
      plugin_id: jye(pluginId_3),
      scope: f(scope),
      install_source: b("cli-explicit"),
      ...n7t(pluginId_3, Xro(pluginId_3, {
        scope: scope
      })),
      ...kIn({
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
    let y = "",
      configApplied = r && r.length > 0 ? !0 : void 0;
    try {
      if (s.nothingWritten) {
        if (configApplied) y = `${re.warning} --config values were not saved, because this command changed nothing. To set them, run /plugin configure ${s.pluginId || plugin_2} in Claude Code.`, configApplied = !1;
      } else y = await Ce(s.pluginId || plugin_2, r, o);
    } catch (error) {
      let v = d(error);
      if (t(`post-install userConfig step failed: ${v}`, {
        level: "warn"
      }), r && r.length > 0) y = `${re.warning} Installed, but --config not applied: ${v}`, configApplied = !1;
    }
    let I = $qn([s.message, ...m, ...(y ? [y] : [])].join(`
`), s.scope ?? scope_2);
    if (p.json) await rPe({
      command: "install",
      outcome: "ok",
      plugin: plugin_2,
      pluginId: s.pluginId,
      scope: s.scope || scope_2,
      message: vu(I),
      configApplied: configApplied,
      installedVersion: s.installedVersion,
      availableVersion: s.availableVersion
    });
    return I;
  } catch (error) {
    return hrt(error, "install", plugin_2, o, p.json ? {
      scope: scope_2,
      shownCommand: p.shownCommand
    } : void 0, error instanceof PluginOperationFailedError && error.result.aliasedId ? error.result.pluginId : void 0, m);
  }
}
async function ie(e, n) {
  let r = nUe(e),
    {
      enabled: enabled_2,
      disabled: disabled_2
    } = await ki(X() ? n : void 0);
  return EGi((X() && n !== void 0 ? await em(n) : Py()).plugins, [...enabled_2, ...disabled_2], e, r);
}
async function vun(plugin_3, n, r, {
  unlessNamedInSettings = !1,
  unlessDirectoryNameHeld = !1
} = {}) {
  {
    let o = await Dje(plugin_3, r);
    if (o && !(unlessNamedInSettings && v3s(plugin_3))) {
      if (unlessDirectoryNameHeld && ek(plugin_3)) {
        let p = await Bye().catch(() => {
          return;
        });
        if (p === void 0 || kTe(p) || WP(p.keys(), plugin_3).length > 0) return {
          plugin: plugin_3,
          aliased: !1
        };
      }
      let g = o.installed.pluginId;
      if (!n) oo(`${Qn(`"${Qe(plugin_3, 120)}" is installed as ${g} (the same plugin from ${Yie($n(g).marketplace ?? "")}).`)}
`);
      return {
        plugin: g,
        aliased: !0
      };
    }
  }
  return {
    plugin: plugin_3,
    aliased: !1
  };
}
async function bqs(plugin_4, scope_3 = "user", r = !1, c = !1, yes_3 = !1, o, g = {}) {
  let p = {
    plugin: plugin_4,
    aliased: !1
  };
  try {
    p = await vun(plugin_4, g.json, o, {
      unlessDirectoryNameHeld: !0
    });
    let m = await Xwe(p.plugin, scope_3, !r, o);
    if (!m.success) throw new PluginOperationFailedError(m.message, m);
    await pi("tengu_plugin_uninstalled_cli", {
      ...(await SPe(m.pluginId || p.plugin, sp(), o)),
      scope: f(m.scope || scope_3),
      ...(p.aliased ? {
        aliased_id: !0
      } : {}),
      ...(m.savedKept !== void 0 && {
        saved_kept: !0
      })
    });
    let s = !1,
      h = async w => {
        if (g.json) await rPe({
          command: "uninstall",
          outcome: "ok",
          plugin: plugin_4,
          pluginId: m.pluginId,
          scope: m.scope || scope_3,
          keptData: m.dataDirKept ?? r,
          ...(m.savedKept !== void 0 && {
            savedKept: m.savedKept.reason
          }),
          message: vu(w)
        });
        return w;
      };
    try {
      let w = await ie(scope_3, o);
      if (c) return oo(`${re.tick} ${Qn(m.message)}
`), s = !0, await oe(w, scope_3, {
        dryRun: !1,
        yes: yes_3,
        deleteDataDir: !r
      }, o);
      return h(m.message + TGi(w.orphans, scope_3));
    } catch (error) {
      a(qe(F(error), "claude plugin uninstall: post-uninstall orphan scan or prune failed"));
      let S = `(${c ? "prune" : "orphan scan"} failed: ${d(error)})`;
      if (s) return S;
      let I = c ? `${re.tick} ${m.message}` : m.message;
      return h(`${I}
${S}`);
    }
  } catch (error) {
    return hrt(error, "uninstall", plugin_4, o, g.json ? {
      scope: scope_3
    } : void 0, p.aliased ? p.plugin : void 0);
  }
}
async function Sqs(e = "user", {
  dryRun = !1,
  yes: yes_4 = !1
} = {}, c) {
  try {
    let u = await ie(e, c);
    return await oe(u, e, {
      dryRun: dryRun,
      yes: yes_4,
      deleteDataDir: !0
    }, c);
  } catch (error) {
    return hrt(error, "prune");
  }
}
async function oe(e, n, r, c) {
  if (e.unloadable.length > 0) return `Skipped \u2014 cannot determine orphans: ${e.unloadable.map(Qn).join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (e.orphans.size === 0) return e.autoCount === 0 ? `Nothing to prune (no auto-installed plugins at ${n} scope).` : `Nothing to prune (${e.autoCount} auto-installed ${P(e.autoCount, "plugin", "plugins")} at ${n} scope, all still needed).`;
  let plugins = (X() && c !== void 0 ? await em(c) : Py()).plugins,
    o = nUe(n),
    g = [...e.orphans].map(item => {
      let h = GI(plugins[item], n, o);
      return `  ${Qn(item)}${h?.version ? ` (${Qn(h.version)})` : ""}`;
    }),
    p = `${e.orphans.size} auto-installed ${P(e.orphans.size, "plugin", "plugins")} no longer needed at ${n} scope:
${g.join(`
`)}`;
  if (r.dryRun) return `${p}
(dry run \u2014 nothing removed)`;
  if (!r.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let h = n === "user" ? "" : ` --scope ${n}`;
      return `${p}
Not a TTY \u2014 run \`claude plugin prune${h} -y\` to remove.`;
    }
    if (oo(`${p}
`), !(await iOe("Remove?"))) return "Aborted.";
  }
  let m = await Cki(e.orphans, n, o, {
    deleteDataDir: r.deleteDataDir
  }, c);
  return await pi("tengu_plugin_prune_cli", {
    scope: f(n),
    removed_count: m.length
  }), `Removed ${m.length} auto-installed ${P(m.length, "plugin", "plugins")}: ${m.map(item => Qn($n(item).name)).join(", ")}`;
}
async function wqs(plugin_5, scope_4, r, c = {}) {
  let u = {
    plugin: plugin_5,
    aliased: !1
  };
  try {
    u = await vun(plugin_5, c.json, r, {
      unlessNamedInSettings: !0
    });
    let o = await qkt(u.plugin, scope_4, r);
    if (!o.success) throw new PluginOperationFailedError(o.message, o);
    await pi("tengu_plugin_disabled_cli", {
      ...(await SPe(o.pluginId || u.plugin, sp(), r)),
      scope: de(o.scope),
      ...(u.aliased ? {
        aliased_id: !0
      } : {})
    });
    let g = $qn(o.message, o.scope ?? scope_4);
    if (c.json) await rPe({
      command: "disable",
      outcome: "ok",
      plugin: plugin_5,
      pluginId: o.pluginId,
      scope: o.scope ?? scope_4,
      message: vu(g)
    });
    return `${re.tick} ${g}`;
  } catch (error) {
    return hrt(error, "disable", plugin_5, r, c.json ? {
      scope: scope_4
    } : void 0, u.aliased ? u.plugin : void 0);
  }
}
async function kqs(e, n = {}) {
  try {
    let r = await E3s(e);
    if (!r.success) throw new PluginOperationFailedError(r.message, r);
    if (await pi("tengu_plugin_disabled_all_cli", {}), n.json) await rPe({
      command: "disable",
      outcome: "ok",
      all: !0,
      message: vu(r.message)
    });
    return `${re.tick} ${r.message}`;
  } catch (error) {
    return hrt(error, "disable-all", void 0, void 0, n.json ? {} : void 0);
  }
}
async function vqs(plugin_6, scope_5, {
  yes: yes_5 = !1,
  json = !1,
  acceptCommand: acceptCommand_3
} = {}, storageV5_3) {
  let pluginId_4,
    shownCommand,
    m = {
      plugin: plugin_6,
      aliased: !1
    };
  try {
    if (m = await vun(plugin_6, json, storageV5_3), !json) oo(`${Qn(`Checking for updates for plugin "${m.plugin}"${scope_5 ? ` at ${scope_5} scope` : ""}\u2026`)}
`);
    let s = await Ykt(m.plugin, scope_5, {
        explicit: !0,
        onEntryHelperDisclosure: async (y, S, I) => {
          oo(`${y}
`);
          let shown_4 = await Q(S, I, storageV5_3),
            v = await W({
              yes: yes_5,
              acceptCommand: acceptCommand_3,
              shown: shown_4,
              disclosure: `${y}
`
            });
          return shownCommand = v === "accepted" ? void 0 : Y(shown_4, acceptCommand_3), v;
        },
        announceCommandSource: async (y, S, acceptedCommand_2) => {
          let C = await te(y, S, {
            yes: yes_5,
            acceptedCommand: acceptedCommand_2,
            acceptCommand: acceptCommand_3,
            onShown: v => {
              shownCommand = v;
            },
            storageV5: storageV5_3
          });
          if (C?.kind === "accepted") shownCommand = void 0;
          if (C?.kind === "declined") throw new yc("Aborted \u2014 the command was not run.", "plugin command source declined at the prompt");
          return C?.grantKey;
        }
      }, storageV5_3),
      message = Qn(s.message);
    pluginId_4 = s.pluginId;
    let {
      outcome: w
    } = s;
    if (w === "failed") {
      if (s.failureCode !== void 0 && k3s(s.failureCode)) throw new yc(message, `${AIn}${s.failureCode}`);
      throw new PluginOperationFailedError(message, {
        failureCode: s.failureCode,
        pluginId: s.pluginId
      });
    }
    if (json) await rPe({
      command: "update",
      outcome: "ok",
      plugin: plugin_6,
      pluginId: s.pluginId,
      scope: s.scope ?? scope_5,
      message: message,
      updateOutcome: w,
      oldVersion: s.oldVersion,
      newVersion: s.newVersion,
      skipReason: s.skipReason,
      blockedBy: s.blockedBy,
      refreshFailed: s.refreshFailed,
      refreshRefusedByPolicy: s.refreshRefusedByPolicy
    });else {
      if (s.folderNote !== void 0) oo(`${Qn(s.folderNote)}
`);
      oo(`${re.tick} ${message}
`);
    }
    if (s.outcome === "updated") {
      let y = s.pluginId || m.plugin;
      l("tengu_plugin_updated_cli", {
        ...(await SPe(y, sp(), storageV5_3)),
        old_version: Na(s.oldVersion),
        new_version: Na(s.newVersion),
        ...n7t(y, s.gitCommitSha),
        ...(m.aliased ? {
          aliased_id: !0
        } : {})
      });
    }
    if (m.aliased) await Lr("cli_plugin_update", {
      aliased_id: !0
    });else await Lr("cli_plugin_update");
    await sr(0);
  } catch (error) {
    return hrt(error, "update", plugin_6, storageV5_3, json ? {
      scope: scope_5,
      pluginId: pluginId_4,
      shownCommand: shownCommand
    } : void 0, m.aliased ? m.plugin : void 0);
  }
}
import { mkdir as ae, writeFile as Se } from "fs/promises";
import { dirname as be, join as D, relative as _e, resolve as se, sep as ke } from "path";
var $schema = "https://anthropic.com/claude-code/plugin.schema.json",
  Eun = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"];
function Eqs(e) {
  let n = Gie().shape.name.safeParse(e);
  if (!n.success) return n.error.issues[0]?.message ?? null;
  if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".") return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!bnn(e) || RX(e) || Ree(e)) return `Plugin name cannot be "${Z2}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  let c = nit(e);
  if (c?.severity === "error") return c.message;
  return null;
}
function Tqs(e) {
  let {
      name: n,
      description: description,
      author: author
    } = e,
    u = e.with ?? [],
    o = [],
    g = {
      $schema: $schema,
      name: n,
      version: "0.1.0",
      description: description ?? "TODO: describe what this plugin provides"
    };
  if (author) g.author = author;
  if (g.skills = ["./"], o.push({
    relPath: D(".claude-plugin", "plugin.json"),
    contents: _(g, null, 2) + `
`
  }), o.push({
    relPath: "SKILL.md",
    contents: le(n)
  }), u.includes("skills")) o.push({
    relPath: D("skills", "example", "SKILL.md"),
    contents: le("example")
  });
  if (u.includes("agents")) o.push({
    relPath: D("agents", "example.md"),
    contents: Pe()
  });
  if (u.includes("hooks")) o.push({
    relPath: D("hooks", "hooks.json"),
    contents: Ie()
  }, {
    relPath: D("hooks-handlers", "on-session-start.ts"),
    contents: Re(),
    mode: 493
  });
  if (u.includes("mcp") && !u.includes("channel")) o.push({
    relPath: ".mcp.json",
    contents: $e()
  });
  if (u.includes("lsp")) o.push({
    relPath: ".lsp.json",
    contents: Ee()
  });
  if (u.includes("output-style")) o.push({
    relPath: D("output-styles", `${n}.md`),
    contents: Oe(n)
  });
  if (u.includes("channel")) g.channels = [{
    server: n,
    displayName: n
  }], o.push({
    relPath: ".mcp.json",
    contents: Ne(n)
  }, {
    relPath: "server.ts",
    contents: Te(n)
  }, {
    relPath: "package.json",
    contents: De(n)
  });
  return o[0].contents = _(g, null, 2) + `
`, o;
}
async function Cqs(e, n, r) {
  let c = se(e);
  if (!r.force) try {
    await ae(D(c, ".claude-plugin"));
  } catch (o) {
    if (k(o) === "EEXIST") return {
      ok: !1,
      error: `${D(c, ".claude-plugin")} already exists. Use --force to overwrite.`
    };
    if (k(o) !== "ENOENT") throw o;
  }
  let skipped = [];
  for (let o of n) {
    let g = se(c, o.relPath),
      p = _e(c, g);
    if (p.startsWith(".." + ke) || p === "..") return {
      ok: !1,
      error: `Refusing to write outside ${c}: ${o.relPath}`
    };
    if (await ae(be(g), {
      recursive: !0
    }), r.force) await zn(g, o.contents, o.mode);else try {
      await Se(g, o.contents, {
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
function le(e) {
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
function Pe() {
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
function Ie() {
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
function Re() {
  return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`;
}
function $e() {
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
function Ee() {
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
function Oe(e) {
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
function Ne(e) {
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
function De(e) {
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
function Te(e) {
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
export { $qn, mMo, PluginOperationFailedError as Lme, hMo, rPe, mqs, hqs, gMo, hrt, gqs, yqs, _qs, vun, bqs, Sqs, wqs, kqs, vqs, Eun, Eqs, Tqs, Cqs };