// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ne,
  zo
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  y,
  c,
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  P,
  st,
  te,
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  i,
  Ls
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  gn,
  mc
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  b,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  tr
} from "B:/~BUN/root/chunk-0fnha6bz.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  rUe,
  sr,
  Dd,
  cUe
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  LJ
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  Jo
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  yt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  rxe,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  Fk
} from "B:/~BUN/root/chunk-f1dj0k6n.js";
import {
  VF
} from "B:/~BUN/root/chunk-gbtzpa3e.js";
import {
  fi
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  ob
} from "B:/~BUN/root/chunk-5yjtercz.js";
import {
  bNe,
  kat,
  r0,
  v0t,
  Rl,
  z9,
  R0t
} from "B:/~BUN/root/chunk-r6m7remx.js";
import {
  WT,
  HV,
  XL
} from "B:/~BUN/root/chunk-384x2wn9.js";
import {
  i6e
} from "B:/~BUN/root/chunk-hfe3cbfz.js";
import {
  hit
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  iCt,
  V7,
  bW,
  dCt,
  DG,
  phr,
  OP,
  pco,
  fco,
  Kn,
  gho,
  fen,
  zp,
  id,
  ny,
  WZ,
  cB,
  bk,
  lv,
  EFn,
  mS,
  Ti
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  d6,
  Ect,
  Mz,
  r1
} from "B:/~BUN/root/chunk-gj0n7q1s.js";
import {
  Zg
} from "B:/~BUN/root/chunk-spgj5paf.js";
import {
  kme,
  g_,
  ttn,
  Dqe,
  Xot
} from "B:/~BUN/root/chunk-yeg3gem6.js";
import {
  Oh
} from "B:/~BUN/root/chunk-zahshfs3.js";
import {
  b6
} from "B:/~BUN/root/chunk-ynkk3h75.js";
import {
  VXe,
  k1e,
  LYr,
  LQn,
  p2t,
  due,
  YXe,
  NYr,
  E1e,
  XXe,
  mSn,
  gSn
} from "B:/~BUN/root/chunk-2z9hwtsh.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  Ad,
  or,
  qCe,
  cu,
  X6e,
  SFe
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  cn
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  Qr
} from "B:/~BUN/root/chunk-0bx1tycm.js";
async function GBe(e, n, o) {
  let {
    name: u,
    marketplace: s
  } = cu(e), a = bW(u, s, n), f = X6e(s);
  if (!f && s !== Ad && !SFe(u, s)) return a;
  let m = !1;
  try {
    m = await ne(e, u, s, o)
  } catch (r) {
    t(`Plugin telemetry: could not read the marketplace catalog to confirm "${e}" exists (${l(r)}); logging its name as third-party`)
  }
  return {
    ...a,
    ...f && s !== void 0 && {
      marketplace_name_redacted: phr(s)
    },
    ...!m && {
      plugin_name_redacted: y(ob)
    }
  }
}
async function ne(e, n, o, u) {
  if (SFe(n, o)) return !0;
  if (o === Ad) return VF(n) !== void 0;
  return await WZ(e, u) !== null
}
import {
  createHash as L,
  randomUUID as ie
} from "crypto";
import {
  readFile as A,
  stat as ae
} from "fs/promises";
import {
  join as x
} from "path";
import {
  createInterface as oe
} from "readline";
class SQ extends P {
  result;
  pluginCommandErrorCategory;
  constructor(e, n = {}) {
    super(e, "plugin operation returned a failure result");
    if (this.name = "PluginOperationFailedError", this.result = n, n.failureCode === "invalid_plugin_id" || n.failureCode === "install_records_unreadable" || n.failureCode === "directory_identity_changed" || n.failureCode === "directory_binding_unreadable") this.pluginCommandErrorCategory = "validation"
  }
}

function j(e) {
  let n = e.kind === "command_source" ? [e.kind, e.pluginId, e.command, e.mode, e.catalogRevision] : [e.kind, e.pluginId, e.command, e.archiveUrl, e.catalogRevision];
  return L("sha256").update(b(n), "utf8").digest("hex")
}

function U9n(e) {
  return {
    ...e,
    sha256: j(e)
  }
}

function U(e, n) {
  return n === void 0 ? e : {
    ...e,
    acceptCommandMatched: F(n, e)
  }
}
async function G(e, n, o) {
  return {
    kind: "entry_helper",
    pluginId: n,
    command: e.command,
    archiveUrl: cUe(e).destination,
    catalogRevision: await Y(n, o)
  }
}
async function Y(e, n) {
  let o = `unreadable:${ie()}`;
  if (H() && n !== void 0) return o;
  let {
    marketplace: u
  } = or(e), s = u === void 0 ? void 0 : (await id(n))[u];
  if (s === void 0) return o;
  if (s.source.source === "claudeai") return o;
  let a = s.installLocation;
  try {
    if (s.source.source === "github" || s.source.source === "git") {
      if (await ae(x(a, ".git")).then(() => !0, () => !1)) {
        let m = rxe(a),
          r = await Ve(yt(), [...m.inCheckoutArgs, "rev-parse", "HEAD"], {
            cwd: a,
            env: m.env,
            stdin: "ignore"
          });
        return r.code === 0 ? `git:${r.stdout.trim()}` : o
      }
      if (ny(a) === void 0) {
        let m = (await A(x(a, i6e), "utf8")).trim();
        return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(m) ? `gcs:${m}` : o
      }
    }
    return s.source.source === "settings" ? `settings:${re([await B(a),N(s.source)])}` : `sha256:${await B(a)}`
  } catch {
    return o
  }
}
async function B(e) {
  let n = (a) => ["ENOENT", "ENOTDIR"].includes(v(a) ?? ""),
    o, u = !0;
  try {
    o = await A(x(e, ".claude-plugin", "marketplace.json"), "utf8")
  } catch (a) {
    if (!n(a)) throw a;
    o = await A(e, "utf8"), u = !1
  }
  let s = u ? await A(x(e, "package.json"), "utf8").catch((a) => {
    if (n(a)) return null;
    throw a
  }) : null;
  return L("sha256").update(b([N(J(Jo(o))), s === null ? null : N(J(Jo(s)))]), "utf8").digest("hex")
}

function re(e) {
  return L("sha256").update(b(e), "utf8").digest("hex")
}

function N(e) {
  if (Array.isArray(e)) return ["[", ...e.map(N)];
  if (e !== null && typeof e === "object") return ["{", ...Object.keys(e).sort().map((n) => [n, N(e[n])])];
  return e
}

function F(e, n) {
  return e !== void 0 && e.trim().toLowerCase() === j(n)
}
async function Kxe(e) {
  let n = e.failureCode !== void 0 && se.has(e.failureCode) ? e : {
    ...e,
    shownCommand: void 0
  };
  await Oh(LJ(b(n)) + `
`)
}
var se = new Set(["command_source_refused", "command_source_declined", "entry_helper_unconfirmed", "entry_helper_declined"]);

function le(e, n) {
  if (e instanceof SQ) return e.result.failureCode ?? "op_failed";
  if (e instanceof Rl) {
    if (n === "update") {
      let o = e.telemetryMessage;
      if (o.startsWith(iCt)) return o.slice(iCt.length)
    }
    return R0t(e).code
  }
  if (e instanceof OP) return `claudeai_${e.code}`;
  return `error_${K(DG(e))}`
}

function K(e) {
  return e.replaceAll("-", "_")
}
var de = {
  install: "claude plugin install failed with an unclassified error",
  uninstall: "claude plugin uninstall failed with an unclassified error",
  enable: "claude plugin enable failed with an unclassified error",
  disable: "claude plugin disable failed with an unclassified error",
  "disable-all": "claude plugin disable --all failed with an unclassified error",
  update: "claude plugin update failed with an unclassified error",
  prune: "claude plugin prune failed with an unclassified error"
};
async function Yxe(e, n, o, u, s, a) {
  let f = e instanceof SQ ? e.result.failureCode : void 0,
    r = DG(e),
    p = n === "disable-all" ? "disable" : n === "prune" ? void 0 : n;
  if (s && p) {
    let C = e instanceof SQ ? e.result : {};
    await Kxe({
      command: p,
      outcome: "failed",
      ...n === "disable-all" ? {
        all: !0
      } : {
        plugin: o
      },
      pluginId: C.pluginId ?? s.pluginId ?? a,
      scope: s.scope,
      message: Dd(l(e)),
      failureCode: le(e, n),
      alreadyInGoalState: C.alreadyInGoalState,
      installedScope: C.installedScope,
      reverseDependents: C.reverseDependents,
      shownCommand: s.shownCommand && U9n(s.shownCommand)
    })
  }
  if (e instanceof Rl && (n === "install" || n === "update")) {
    if (console.error(Dd(l(e))), n === "install") {
      let {
        code: C,
        kind: R
      } = R0t(e);
      if (R === "bad") await gn("cli_plugin_install", C);
      else await mc("cli_plugin_install", C)
    }
    await b6(), process.exit(1)
  }
  let g = e instanceof OP ? `claudeai_${e.code}` : void 0;
  if (r === "unknown" && !(e instanceof SQ) && g === void 0) d(st(te(e), de[n]));
  else t(`Plugin command "${n}" failed: ${l(e)}`, {
    level: "error"
  });
  let h = o ? `${n} plugin "${o}"` : n === "disable-all" ? "disable all plugins" : `${n} plugins`;
  console.error(Dd(`${Z.cross} Failed to ${h}: ${l(e)}`));
  let w = g ?? K(r);
  switch (n) {
    case "install":
      await gn("cli_plugin_install", w);
      break;
    case "uninstall":
      await gn("cli_plugin_uninstall", w);
      break;
    case "update":
      await gn("cli_plugin_update", w);
      break;
    case "enable":
      await gn("cli_plugin_enable", "cli_plugin_enable_failed");
      break;
    default:
      break
  }
  let k = o ? await GBe(a ?? o, Zg(), u) : {};
  await Ls("tengu_plugin_command_failed", {
    command: c(n),
    error_category: c(r),
    ...{},
    ...k,
    ...{}
  }), await b6(), process.exit(1)
}

function ce(e, n) {
  let o = {};
  for (let a of e) {
    let f = a.indexOf("=");
    if (f <= 0) throw Error(`--config expects KEY=VALUE, got "${a}". Use --config key=value (repeatable).`);
    let m = a.slice(0, f),
      p = (a.slice(f + 1).split(/\r\n|\r|\n/, 1)[0] ?? "").trim(),
      g = Object.hasOwn(n, m) ? n[m] : void 0;
    if (!g) {
      let h = Object.keys(n);
      throw Error(`--config key "${m}" isn't declared in this plugin's userConfig.` + (h.length > 0 ? ` Known keys: ${h.join(", ")}.` : ""))
    }
    if (p === "") throw Error(`--config ${m}: value is empty. Omit the flag to leave "${m}" unset.`);
    if (g.type === "number") {
      let h = Number(p);
      if (Number.isNaN(h)) throw Error(`--config ${m}: "${p}" is not a number`);
      o[m] = h
    } else if (g.type === "boolean") {
      if (!Ne(p) && !zo(p)) throw Error(`--config ${m}: "${p}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
      o[m] = Ne(p)
    } else o[m] = p
  }
  let u = Qr(n, (a, f) => Object.hasOwn(o, f)),
    s = kme(o, u);
  if (!s.valid) throw Error(`--config validation failed: ${s.errors.join("; ")}`);
  return o
}
async function pe(e, n, o) {
  zp(o);
  let {
    enabled: u,
    disabled: s
  } = await mS(o), a = ttn([...u, ...s], e);
  if (!a) {
    if (n && n.length > 0) throw Error(`--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`);
    return ""
  }
  let f = a.manifest.userConfig;
  if (!f || Object.keys(f).length === 0) {
    if (n && n.length > 0) throw Error(`--config was given but plugin "${e}" declares no userConfig options.`);
    return ""
  }
  if (n && n.length > 0) {
    let p = ce(n, f);
    await Dqe(g_(a), p, f, o)
  }
  let m = Object.keys(await Xot(a));
  if (m.length === 0) return "";
  let r = m.filter((p) => f[p]?.required === !0);
  return `${m.length} userConfig ${I(m.length,"option")} not yet set` + (r.length > 0 ? ` (${r.length} required)` : "") + ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`
}
async function q(e, n, {
  yes: o = !1,
  acceptedCommand: u,
  acceptCommand: s,
  onShown: a,
  storageV5: f
} = {}) {
  if (typeof n.source !== "object" || n.source.source !== "command") return;
  if (WT()) {
    tr(`${HV}
`);
    return
  }
  if (n.source.mode === "link" && O() === "windows") {
    tr(`${kat}
`);
    return
  }
  let m = n.source.command,
    r = r0(n.source);
  if (u === r && !bNe()) return;
  let p = {
    kind: "command_source",
    pluginId: e,
    command: m,
    mode: n.source.mode === "link" ? "link" : "copy",
    catalogRevision: await Y(e, f)
  };
  a?.({
    ...U(p, s),
    ...u !== void 0 && {
      previousAcceptance: u !== r ? "changed" : "unreliable"
    }
  });
  let {
    name: g,
    marketplace: h
  } = or(e), w = cn(g ?? "", 200), k = cn(h ?? "", 200);
  tr(`"${w}" is installed by running a command from marketplace "${k}" on this machine` + (u === void 0 ? "" : u !== r ? " \u2014 and that command (or how its output is used) CHANGED since you accepted it" : " \u2014 your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") + `:
  ${m}
  (${v0t(n.source)})
`);
  let C = await M({
    yes: o,
    acceptCommand: s,
    shown: p
  });
  return C === "accepted" ? {
    kind: "accepted",
    grantKey: r
  } : C === "declined" ? {
    kind: "declined"
  } : void 0
}
async function M({
  yes: e = !1,
  acceptCommand: n,
  shown: o
}) {
  let u = process.stdout.isTTY && process.stdin.isTTY;
  if (e || o !== void 0 && F(n, o)) {
    if (!hit()) return "accepted";
    if (!u) return tr(`${e?"-y/--yes":"--accept-command"} is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.
`), "unconfirmed"
  }
  if (!u && n !== void 0 && o !== void 0 && !F(n, o)) return tr(`--accept-command does not name the command shown above (it may have changed since it was shown), so it was not run. Show it to the person again before accepting it.
`), "unconfirmed";
  if (!u) return tr(hit() ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.
` : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.
`), "unconfirmed";
  return tr("Run this command now? [y/N] "), await X() ? "accepted" : "declined"
}
async function BKr(e, n = {}, o) {
  if (qCe(e) !== null) return null;
  let {
    name: u,
    marketplace: s
  } = or(e);
  if (!u) return null;
  let a = s ?? n.resolvedMarketplace;
  if (!a) try {
    a = (await gSn(u, o))?.marketplace
  } catch (g) {
    if (g instanceof Rl) return null;
    throw g
  }
  if (!a) return null;
  let f = `${u}@${a}`;
  if (await LQn(f, n.scope ?? "user", o)) return null;
  let m = await XXe(f, void 0, o);
  if (m === null) return null;
  tr(`${mSn(m)}
`);
  let r = await G(m, f, o);
  n.onShown?.(U(r, n.acceptCommand));
  let p = await M({
    yes: n.yes,
    acceptCommand: n.acceptCommand,
    shown: r
  });
  return p === "accepted" ? m : p
}
async function jKr(e, n = {}, o) {
  if (qCe(e) !== null) return;
  let {
    name: u,
    marketplace: s
  } = or(e);
  if (!u) return;
  let a = await id(o),
    f = s,
    m;
  if (!f) {
    let S;
    try {
      S = await gSn(u, o)
    } catch (T) {
      if (T instanceof Rl) return;
      throw T
    }
    if (!S) return;
    f = S.marketplace, m = S.entry, n.onResolvedMarketplace?.(f)
  }
  let r = a[f];
  if (XL(r?.source)) return;
  let p = `${u}@${f}`,
    g = m && n.acceptCommand === void 0 ? {
      entry: m
    } : void 0;
  if (!g) {
    let S = await VXe(f, r, o);
    n.onMarketplaceRefreshResult?.(S);
    try {
      g = await cB(p, o)
    } catch (T) {
      if (T instanceof Rl) return;
      throw T
    }
  }
  let h = g ? z9(g.entry.source) : void 0;
  if (!g || !h) return;
  let w = (H() && o !== void 0 ? await lv(o) : bk()).plugins[p] ?? [],
    k = r0(h),
    C = !bNe(),
    R = C && w.some((S) => S.sourceCommand === k);
  if (await fen(p, n.scope ?? "user", o)) {
    if (!R) {
      let S = w.every((T) => T.sourceCommand === void 0);
      tr(`"${cn(or(p).name??"",200)}" is already installed, and its marketplace ` + (S ? "entry now installs it by running a command on this machine that has not been reviewed yet." : "has since changed the command that installs it (or how its output is used).") + ` Review and accept it: ${Fk("plugin update",p,{extra:(n.scope??"user")==="user"?void 0:`--scope ${n.scope}`,fallback:"an explicit plugin update reviews it"})}.
`)
    }
    return
  }
  if (R) return {
    kind: "accepted",
    grantKey: k
  };
  return q(p, g.entry, {
    yes: n.yes,
    acceptedCommand: C ? w.find((S) => S.sourceCommand !== void 0)?.sourceCommand : void 0,
    acceptCommand: n.acceptCommand,
    onShown: n.onShown,
    storageV5: o
  })
}
async function WKr(e, n = "user", o, u, s, a, f, m = {}) {
  try {
    let r = await p2t(m.resolvedPlugin ?? e, n, {
      shownSourceCommand: u,
      shownEntryHelper: s,
      announceRefreshResult: f,
      replaceInstalledCopy: m.replaceInstalledCopy,
      npmRegistry: m.npmRegistry
    }, a);
    if (!r.success) throw new SQ(r.message, r);
    let p = r.pluginId || e,
      g = r.scope || n;
    i("tengu_plugin_installed_cli", {
      ...await GBe(p, Zg(), a),
      plugin_id: V7(p),
      scope: c(g),
      install_source: y("cli-explicit"),
      ...dCt(p, EFn(p, {
        scope: g
      })),
      ...{},
      ...{}
    });
    let h = "",
      w = o && o.length > 0 ? !0 : void 0;
    try {
      h = await pe(r.pluginId || e, o, a)
    } catch (C) {
      let R = l(C);
      if (t(`post-install userConfig step failed: ${R}`, {
          level: "warn"
        }), o && o.length > 0) h = `${Z.warning} Installed, but --config not applied: ${R}`, w = !1
    }
    let k = h ? `${r.message}
${h}` : r.message;
    if (m.json) await Kxe({
      command: "install",
      outcome: "ok",
      plugin: e,
      pluginId: r.pluginId,
      scope: r.scope || n,
      message: Dd(k),
      configApplied: w,
      installedVersion: r.installedVersion,
      availableVersion: r.availableVersion
    });
    return k
  } catch (r) {
    return Yxe(r, "install", e, a, m.json ? {
      scope: n,
      shownCommand: m.shownCommand
    } : void 0, r instanceof SQ && r.result.aliasedId ? r.result.pluginId : void 0)
  }
}
async function W(e, n) {
  let o = k1e(e),
    {
      enabled: u,
      disabled: s
    } = await Ti(H() ? n : void 0);
  return pco((H() && n !== void 0 ? await lv(n) : bk()).plugins, [...u, ...s], e, o)
}
async function dgt(e, n, o, {
  unlessNamedInSettings: u = !1,
  unlessDirectoryNameHeld: s = !1
} = {}) {
  return {
    plugin: e,
    aliased: !1
  }
}
async function zKr(e, n = "user", o = !1, u = !1, s = !1, a, f = {}) {
  let m = {
    plugin: e,
    aliased: !1
  };
  try {
    m = await dgt(e, f.json, a, {
      unlessDirectoryNameHeld: !0
    });
    let r = await due(m.plugin, n, !o, a);
    if (!r.success) throw new SQ(r.message, r);
    await Ls("tengu_plugin_uninstalled_cli", {
      ...await GBe(r.pluginId || m.plugin, Zg(), a),
      scope: c(r.scope || n),
      ...{},
      ...r.savedKept !== void 0 && {
        saved_kept: !0
      }
    });
    let p = !1,
      g = async (h) => {
        if (f.json) await Kxe({
          command: "uninstall",
          outcome: "ok",
          plugin: e,
          pluginId: r.pluginId,
          scope: r.scope || n,
          keptData: r.dataDirKept ?? o,
          ...r.savedKept !== void 0 && {
            savedKept: r.savedKept.reason
          },
          message: Dd(h)
        });
        return h
      };
    try {
      let h = await W(n, a);
      if (u) return tr(`${Z.tick} ${sr(r.message)}
`), p = !0, await z(h, n, {
        dryRun: !1,
        yes: s,
        deleteDataDir: !o
      }, a);
      return g(r.message + fco(h.orphans, n))
    } catch (h) {
      d(st(te(h), "claude plugin uninstall: post-uninstall orphan scan or prune failed"));
      let k = `(${u?"prune":"orphan scan"} failed: ${l(h)})`;
      if (p) return k;
      let C = u ? `${Z.tick} ${r.message}` : r.message;
      return g(`${C}
${k}`)
    }
  } catch (r) {
    return Yxe(r, "uninstall", e, a, f.json ? {
      scope: n
    } : void 0, m.aliased ? m.plugin : void 0)
  }
}
async function GKr(e = "user", {
  dryRun: n = !1,
  yes: o = !1
} = {}, u) {
  try {
    let s = await W(e, u);
    return await z(s, e, {
      dryRun: n,
      yes: o,
      deleteDataDir: !0
    }, u)
  } catch (s) {
    return Yxe(s, "prune")
  }
}
async function z(e, n, o, u) {
  if (e.unloadable.length > 0) return `Skipped \u2014 cannot determine orphans: ${e.unloadable.map(sr).join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (e.orphans.size === 0) return e.autoCount === 0 ? `Nothing to prune (no auto-installed plugins at ${n} scope).` : `Nothing to prune (${e.autoCount} auto-installed ${I(e.autoCount,"plugin","plugins")} at ${n} scope, all still needed).`;
  let s = (H() && u !== void 0 ? await lv(u) : bk()).plugins,
    a = k1e(n),
    f = [...e.orphans].map((p) => {
      let g = s[p]?.find((h) => h.scope === n && h.projectPath === a);
      return `  ${sr(p)}${g?.version?` (${sr(g.version)})`:""}`
    }),
    m = `${e.orphans.size} auto-installed ${I(e.orphans.size,"plugin","plugins")} no longer needed at ${n} scope:
${f.join(`
`)}`;
  if (o.dryRun) return `${m}
(dry run \u2014 nothing removed)`;
  if (!o.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let g = n === "user" ? "" : ` --scope ${n}`;
      return `${m}
Not a TTY \u2014 run \`claude plugin prune${g} -y\` to remove.`
    }
    if (tr(`${m}
Remove? [y/N] `), !await X()) return "Aborted."
  }
  let r = await gho(e.orphans, n, a, {
    deleteDataDir: o.deleteDataDir
  }, u);
  return await Ls("tengu_plugin_prune_cli", {
    scope: c(n),
    removed_count: r.length
  }), `Removed ${r.length} auto-installed ${I(r.length,"plugin","plugins")}: ${r.map((p)=>sr(or(p).name)).join(", ")}`
}
async function X() {
  let e = oe({
    input: process.stdin
  });
  try {
    for await (let n of e) return /^y(es)?$/i.test(n.trim());
    return !1
  } finally {
    e.close()
  }
}
async function VKr(e, n, o, u = {}) {
  let s = {
    plugin: e,
    aliased: !1
  };
  try {
    s = await dgt(e, u.json, o, {
      unlessNamedInSettings: !0
    });
    let a = await YXe(s.plugin, n, o);
    if (!a.success) throw new SQ(a.message, a);
    if (await Ls("tengu_plugin_disabled_cli", {
        ...await GBe(a.pluginId || s.plugin, Zg(), o),
        scope: ue(a.scope),
        ...{}
      }), u.json) await Kxe({
      command: "disable",
      outcome: "ok",
      plugin: e,
      pluginId: a.pluginId,
      scope: a.scope ?? n,
      message: Dd(a.message)
    });
    return `${Z.tick} ${a.message}`
  } catch (a) {
    return Yxe(a, "disable", e, o, u.json ? {
      scope: n
    } : void 0, s.aliased ? s.plugin : void 0)
  }
}
async function qKr(e, n = {}) {
  try {
    let o = await NYr(e);
    if (!o.success) throw new SQ(o.message, o);
    if (await Ls("tengu_plugin_disabled_all_cli", {}), n.json) await Kxe({
      command: "disable",
      outcome: "ok",
      all: !0,
      message: Dd(o.message)
    });
    return `${Z.tick} ${o.message}`
  } catch (o) {
    return Yxe(o, "disable-all", void 0, void 0, n.json ? {} : void 0)
  }
}
async function KKr(e, n, {
  yes: o = !1,
  json: u = !1,
  acceptCommand: s
} = {}, a) {
  let f, m, r = {
    plugin: e,
    aliased: !1
  };
  try {
    if (r = await dgt(e, u, a), !u) tr(`${sr(`Checking for updates for plugin "${r.plugin}"${n?` at ${n} scope`:""}\u2026`)}
`);
    let p = await E1e(r.plugin, n, {
        explicit: !0,
        onEntryHelperDisclosure: async (w, k, C) => {
          tr(`${w}
`);
          let R = await G(k, C, a),
            S = await M({
              yes: o,
              acceptCommand: s,
              shown: R
            });
          return m = S === "accepted" ? void 0 : U(R, s), S
        },
        announceCommandSource: async (w, k, C) => {
          let R = await q(w, k, {
            yes: o,
            acceptedCommand: C,
            acceptCommand: s,
            onShown: (S) => {
              m = S
            },
            storageV5: a
          });
          if (R?.kind === "accepted") m = void 0;
          if (R?.kind === "declined") throw new Rl("Aborted \u2014 the command was not run.", "plugin command source declined at the prompt");
          return R?.grantKey
        }
      }, a),
      g = sr(p.message);
    f = p.pluginId;
    let {
      outcome: h
    } = p;
    if (h === "failed") {
      if (p.failureCode !== void 0 && LYr(p.failureCode)) throw new Rl(g, `${iCt}${p.failureCode}`);
      throw new SQ(g, {
        failureCode: p.failureCode,
        pluginId: p.pluginId
      })
    }
    if (u) await Kxe({
      command: "update",
      outcome: "ok",
      plugin: e,
      pluginId: p.pluginId,
      scope: p.scope ?? n,
      message: g,
      updateOutcome: h,
      oldVersion: p.oldVersion,
      newVersion: p.newVersion,
      skipReason: p.skipReason,
      blockedBy: p.blockedBy,
      refreshFailed: p.refreshFailed,
      refreshRefusedByPolicy: p.refreshRefusedByPolicy
    });
    else tr(`${Z.tick} ${g}
`);
    if (p.outcome === "updated") {
      let w = p.pluginId || r.plugin;
      i("tengu_plugin_updated_cli", {
        ...await GBe(w, Zg(), a),
        old_version: fi(p.oldVersion),
        new_version: fi(p.newVersion),
        ...dCt(w, p.gitCommitSha),
        ...{}
      })
    }
    _("cli_plugin_update"), await Kn(0)
  } catch (p) {
    return Yxe(p, "update", e, a, u ? {
      scope: n,
      pluginId: f,
      shownCommand: m
    } : void 0, r.aliased ? r.plugin : void 0)
  }
}
import {
  mkdir as Q,
  writeFile as me
} from "fs/promises";
import {
  dirname as fe,
  join as D,
  relative as ge,
  resolve as V,
  sep as he
} from "path";
var ye = "https://anthropic.com/claude-code/plugin.schema.json",
  ugt = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"];

function YKr(e) {
  let n = rUe().shape.name.safeParse(e);
  if (!n.success) return n.error.issues[0]?.message ?? null;
  if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".") return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!Ect(e) || r1(e) || Mz(e)) return `Plugin name cannot be "${d6}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  return null
}

function XKr(e) {
  let {
    name: n,
    description: o,
    author: u
  } = e, s = e.with ?? [], a = [], f = {
    $schema: ye,
    name: n,
    version: "0.1.0",
    description: o ?? "TODO: describe what this plugin provides"
  };
  if (u) f.author = u;
  if (f.skills = ["./"], a.push({
      relPath: D(".claude-plugin", "plugin.json"),
      contents: b(f, null, 2) + `
`
    }), a.push({
      relPath: "SKILL.md",
      contents: ee(n)
    }), s.includes("skills")) a.push({
    relPath: D("skills", "example", "SKILL.md"),
    contents: ee("example")
  });
  if (s.includes("agents")) a.push({
    relPath: D("agents", "example.md"),
    contents: we()
  });
  if (s.includes("hooks")) a.push({
    relPath: D("hooks", "hooks.json"),
    contents: Ce()
  }, {
    relPath: D("hooks-handlers", "on-session-start.ts"),
    contents: Se(),
    mode: 493
  });
  if (s.includes("mcp") && !s.includes("channel")) a.push({
    relPath: ".mcp.json",
    contents: _e()
  });
  if (s.includes("lsp")) a.push({
    relPath: ".lsp.json",
    contents: ke()
  });
  if (s.includes("output-style")) a.push({
    relPath: D("output-styles", `${n}.md`),
    contents: be(n)
  });
  if (s.includes("channel")) f.channels = [{
    server: n,
    displayName: n
  }], a.push({
    relPath: ".mcp.json",
    contents: Pe(n)
  }, {
    relPath: "server.ts",
    contents: ve(n)
  }, {
    relPath: "package.json",
    contents: Ie(n)
  });
  return a[0].contents = b(f, null, 2) + `
`, a
}
async function JKr(e, n, o) {
  let u = V(e);
  if (!o.force) try {
    await Q(D(u, ".claude-plugin"))
  } catch (a) {
    if (v(a) === "EEXIST") return {
      ok: !1,
      error: `${D(u,".claude-plugin")} already exists. Use --force to overwrite.`
    };
    if (v(a) !== "ENOENT") throw a
  }
  let s = [];
  for (let a of n) {
    let f = V(u, a.relPath),
      m = ge(u, f);
    if (m.startsWith(".." + he) || m === "..") return {
      ok: !1,
      error: `Refusing to write outside ${u}: ${a.relPath}`
    };
    if (await Q(fe(f), {
        recursive: !0
      }), o.force) await Cn(f, a.contents, a.mode);
    else try {
      await me(f, a.contents, {
        flag: "wx",
        mode: a.mode
      })
    } catch (r) {
      if (v(r) !== "EEXIST") throw r;
      s.push(a.relPath)
    }
  }
  return {
    ok: !0,
    skipped: s
  }
}

function ee(e) {
  return `---
name: ${e}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${e}

TODO: what this skill does, and the steps Claude should take.
`
}

function we() {
  return `---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`
}

function Ce() {
  return b({
    hooks: {
      SessionStart: [{
        hooks: [{
          type: "command",
          command: 'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"'
        }]
      }]
    }
  }, null, 2) + `
`
}

function Se() {
  return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`
}

function _e() {
  return b({
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
`
}

function ke() {
  return b({
    example: {
      command: "example-language-server",
      args: ["--stdio"],
      extensionToLanguage: {
        ".example": "example"
      }
    }
  }, null, 2) + `
`
}

function be(e) {
  return `---
name: ${e}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`
}

function Pe(e) {
  return b({
    mcpServers: {
      [e]: {
        command: "bun",
        args: ["run", "--cwd", "${CLAUDE_PLUGIN_ROOT}", "--shell=bun", "--silent", "start"]
      }
    }
  }, null, 2) + `
`
}

function Ie(e) {
  return b({
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
`
}

function ve(e) {
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
`
}
export {
  GBe,
  SQ,
  U9n,
  Kxe,
  Yxe,
  BKr,
  jKr,
  WKr,
  dgt,
  zKr,
  GKr,
  VKr,
  qKr,
  KKr,
  ugt,
  YKr,
  XKr,
  JKr
};
