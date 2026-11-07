// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Vs,
  bP,
  ye,
  B5,
  AM,
  k$e,
  Gl
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  WJ,
  aS,
  hp,
  Qzn,
  xm,
  Pi,
  ri,
  ob,
  di,
  Un,
  Sd
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  yG,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  IR,
  $o,
  Ib
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  id
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Nie,
  rb,
  Jg,
  Ym,
  be,
  bpe,
  tl
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  y3,
  Eee
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  Gt,
  dSe,
  Us,
  Xh,
  Bfe,
  jfe,
  HD,
  sM,
  sMs,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  IL
} from "B:/~BUN/root/chunk-fzefftbw.js";
import {
  knn,
  qEs,
  Fht
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  m_,
  kX
} from "B:/~BUN/root/chunk-21s8ygah.js";
import {
  Ztn,
  Qb,
  UNt
} from "B:/~BUN/root/chunk-ynpwd78y.js";
import {
  $y
} from "B:/~BUN/root/chunk-vy3btdd1.js";
import {
  sYi
} from "B:/~BUN/root/chunk-1ppr2tqn.js";
import {
  u4,
  LHt
} from "B:/~BUN/root/chunk-z35xf1k7.js";
import {
  Ca
} from "B:/~BUN/root/chunk-65zedn3n.js";

function iTr(e) {
  if (e.source === "plugin") return e.pluginInfo?.repository;
  return e.source === "bundled" ? sYi(e.hooks) : void 0
}
var Ptn = (e) => u4(e) || LHt(e, IL());

function dht(e, r) {
  if (!Ztn() || !WJ(e)) return !1;
  try {
    if (Eee()) return !0
  } catch (n) {
    return a(n), !0
  }
  if (!Qb()) return !1;
  let o = !0;
  try {
    o = r === void 0 || !Ptn(r)
  } catch (n) {
    a(n)
  }
  if (o) UNt();
  return o
}

function Ip() {
  return be("policySettings")?.allowManagedPermissionRulesOnly === !0
}

function az() {
  return !Ip()
}

function I(e, r, o = !1) {
  return _Fn(e, r, o) === void 0
}

function _Fn(e, r, o = !1) {
  if (Ip()) {
    if (!(e === "plugin" ? G(r) : y3(e))) return "managed_rules_only"
  }
  if (Nie(e)) return "untrusted_folder";
  return $y() && !o && m(e, r) ? "personal_config" : void 0
}

function m(e, r) {
  if (e === void 0 || e === "userSettings") return !0;
  if (e !== "plugin") return !1;
  let o = r?.marketplaceSource;
  if (o?.source === "claudeai" && o.scope !== "org" && o.scope !== "default") return !0;
  let n = r?.id;
  if (n === void 0) return !0;
  switch (ob(n) ?? di(n)) {
    case Pi:
      return r?.officiallyAttested !== !0;
    case hp:
      return Un(n) === Qzn;
    default:
      return !1
  }
}

function G(e) {
  let r = e?.id;
  if (r === void 0) return !1;
  let o = ob(r) ?? di(r);
  switch (o) {
    case void 0:
    case xm:
      return !1;
    case hp:
      return Un(r) !== Qzn && !(id() && bpe()?.allowManagedPermissionRulesOnly === !0);
    case ri:
      return !0;
    case Pi:
      return e?.officiallyAttested === !0;
    case aS:
      return e?.npmResolution !== void 0 && qEs(e.npmResolution);
    default:
      break
  }
  if (e?.marketplaceSource === void 0) return !1;
  return Sd(o) && Fht(e.marketplaceSource) || knn(e.marketplaceSource, e.home)
}
var P = new W(() => new Set);

function nvs() {
  return P.of(H().host)
}

function aTr(e, r, o, n = "managed_rules_only") {
  let u = "pluginId" in r ? r.pluginId : v(r.source),
    s = "pluginId" in r ? ob(r.pluginId) === xm ? "plugin_skills_dir" : "plugin_other" : r.source,
    c = Ca(`/${e} (${u})`);
  if (n === "untrusted_folder") {
    t(`Ignoring allowed-tools from ${c}: ${Bfe}.`, {
      level: "warn"
    }), l("tengu_frontmatter_grant_withheld", {
      origin: f(s),
      tool_count: o.length,
      reason: f(n)
    });
    return
  }
  let d = n === "personal_config";
  if (t(d ? `Ignoring allowed-tools ${Ca(o.join(", "))} from ${c}: this session does not let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG).` : `Ignoring allowed-tools ${Ca(o.join(", "))} from ${c}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`, {
      level: "warn"
    }), !d) P.of(H().host).add(c);
  if (l("tengu_frontmatter_grant_withheld", {
      origin: f(s),
      tool_count: o.length,
      ...d && {
        reason: f(n)
      }
    }), B5() === "text" && !Gt()) console.error(d ? `allowed-tools from ${c} ignored: this session doesn't let your own skills and commands pre-approve tools (CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG), so their tool calls are checked like any other call, and their inline shell commands run only if this session's permission rules already allow them.` : `allowed-tools from ${c} ignored: your organization restricts permission rules to managed settings (allowManagedPermissionRulesOnly). Ask an admin to add the rules it needs to managed settings.`)
}

function v(e) {
  switch (e) {
    case "userSettings":
    case "projectSettings":
    case "localSettings":
    case "flagSettings":
    case "policySettings":
      return IR(e);
    case "builtin":
    case "bundled":
    case "mcp":
    case "memoryStore":
    case "plugin":
      return e
  }
}
async function D7e(e) {
  let r = await e.getAllowedTools?.() ?? e.allowedTools ?? [],
    o = dht(e.hooks, iTr(e));
  if (r.length === 0 || o) return [];
  return I(e.source, y(e), e.fromHostCatalog === !0) ? r : []
}

function y(e) {
  return e.source === "plugin" ? {
    id: e.pluginInfo?.repository,
    officiallyAttested: e.pluginInfo?.officiallyAttested,
    marketplaceSource: e.pluginInfo?.marketplaceSource,
    npmResolution: e.pluginInfo?.npmResolution,
    home: e.pluginInfo?.home
  } : void 0
}

function FGe(e) {
  return $y() && m("plugin", Hho(e))
}

function Hho(e) {
  return {
    id: e.source,
    officiallyAttested: e.officialAttestation !== void 0,
    marketplaceSource: e.marketplaceSource
  }
}

function rvs(e) {
  return KLe(e) || dht(e.hooks, e.plugin)
}

function KLe(e) {
  if (!$y() || e.registeredAtRunTime === !0) return !1;
  return m(e.source, e.source === "plugin" ? e.pluginProvenance ?? {
    id: e.plugin
  } : void 0)
}

function ovs(e) {
  return $y() && e.fromHostCatalog !== !0 && m(e.source, y(e))
}
var b = ["allow", "deny", "ask"];

function lz(e, r) {
  if (!e || !e.permissions) return [];
  let {
    permissions: o
  } = e, n = [];
  for (let u of b) {
    let s = o[u];
    if (s)
      for (let c of s) n.push({
        source: r,
        ruleBehavior: u,
        ruleValue: m_(c, u)
      })
  }
  return n
}

function yse() {
  return i.CLAUDE_CODE_EVAL_CONFINED === !0
}

function aO(e = {}) {
  let r = x(e);
  return yse() ? r.filter((o) => o.ruleBehavior !== "allow") : r
}

function x(e = {}) {
  if (Ip()) return qLe("policySettings");
  let r = [];
  for (let o of $o()) r.push(...qLe(o));
  if (!(e.strictPersistedTrust ?? Xh())) {
    let {
      gateProject: o,
      gateLocal: n
    } = HGe(), u = new Set, s = r.filter((c) => {
      if (c.ruleBehavior !== "allow") return !0;
      if (c.source === "projectSettings" && o) return u.add(".claude/settings.json"), !1;
      if (c.source === "localSettings" && n) return u.add(".claude/settings.local.json"), !1;
      return !0
    });
    if (s.length !== r.length) w("permissions.allow", r.length - s.length, [...u]);
    return s
  }
  return r
}

function Otn(e) {
  let r = Vs();
  if (r === null) return ["projectSettings", "localSettings"];
  let o = C.of(H().host),
    n = sM({
      onIndeterminate: "tracked"
    });
  if (n && Us()) {
    if (o.markTracked(r), !o.persistIssued(r) && sMs()) o.markPersistIssued(r), L(e)
  }
  return n || o.isTracked(r) || O() ? ["projectSettings", "localSettings"] : ["projectSettings"]
}
class k {
  tracked = new Set;
  persisted = new Set;
  isTracked(e) {
    return this.tracked.has(e)
  }
  markTracked(e) {
    this.tracked.add(e)
  }
  persistIssued(e) {
    return this.persisted.has(e)
  }
  markPersistIssued(e) {
    this.persisted.add(e)
  }
}
var C = new W(() => new k);

function O() {
  return fe().projects?.[HD()]?.localSettingsSeenGitTracked === !0
}

function L(e) {
  let r = HD();
  Le((o) => {
    if (o.projects?.[r]?.localSettingsSeenGitTracked === !0) return o;
    return {
      ...o,
      projects: {
        ...o.projects,
        [r]: {
          ...o.projects?.[r] ?? dSe,
          localSettingsSeenGitTracked: !0
        }
      }
    }
  }, e)
}

function bFn(e, r) {
  let o = Otn(r),
    n = (c) => new Set(c.flatMap((d) => (be(d)?.permissions?.additionalDirectories ?? []).flatMap(e))),
    u = n(o),
    s = new Set([...n($o().filter((c) => !o.includes(c))), ...Gl().flatMap(e)]);
  for (let c of s) u.delete(c);
  return {
    declared: new Set([...u, ...s]),
    repoOnly: u
  }
}

function L7e(e = {}) {
  if (yse()) return [];
  let r = e.strictPersistedTrust ?? Xh(),
    {
      gateProject: o,
      gateLocal: n
    } = r ? {
      gateProject: !1,
      gateLocal: !1
    } : HGe(),
    u = [],
    s = 0,
    c = new Set;
  for (let d of $o()) {
    let g = be(d)?.permissions?.additionalDirectories ?? [];
    if (o && d === "projectSettings" && g.length > 0) {
      s += g.length, c.add(".claude/settings.json");
      continue
    }
    if (n && d === "localSettings" && g.length > 0) {
      s += g.length, c.add(".claude/settings.local.json");
      continue
    }
    u.push(...g)
  }
  if (s > 0) w("permissions.additionalDirectories", s, [...c]);
  return u
}

function HGe() {
  return {
    gateProject: !Ym(),
    gateLocal: sM({
      onIndeterminate: "untracked"
    })
  }
}

function h(e) {
  if (!$o().includes(e)) return !1;
  return qLe(e).some((r) => r.ruleBehavior === "allow") || (be(e)?.permissions?.additionalDirectories?.length ?? 0) > 0
}

function $ho() {
  if (i.CLAUDE_CODE_SANDBOXED) return !0;
  if (AM()) return !0;
  if (k$e()) return !0;
  if (Gt()) return !0;
  if (bP()) return !0;
  return Xh()
}

function j() {
  if ($ho()) return !1;
  return Itn()
}

function Itn() {
  let {
    gateProject: e,
    gateLocal: r
  } = HGe();
  return e && h("projectSettings") || r && h("localSettings")
}
class R {
  warned = new Set;
  firstTimeFor(e) {
    if (this.warned.has(e)) return !1;
    return this.warned.add(e), !0
  }
  reset() {
    this.warned.clear()
  }
}
var T = new W(() => new R);

function _Nt(e) {
  return T.of(H().host).firstTimeFor(e)
}

function w(e, r, o) {
  if (!T.of(H().host).firstTimeFor(e)) return;
  if (t(`Dropped ${r} project-scoped ${e} entr${r===1?"y":"ies"} \u2014 workspace not yet trusted`), !ye() && (!Us() || j())) return;
  let n = o.length > 0 ? o.join(" and ") : ".claude/ settings",
    u = `Ignoring ${r} ${e} ${r===1?"entry":"entries"} from ${n}: `;
  if (Vs() === null) {
    console.error(`${u}a session with no working directory is never trusted.`);
    return
  }
  if (jfe()) {
    console.error(`${u}${Bfe}. Put ${r===1?"it":"them"} in user or managed settings instead.`);
    return
  }
  let s = HD();
  console.error(u + `this workspace has not been trusted. Run Claude Code interactively here once and accept the trust dialog, or set projects[${_(s)}].hasTrustDialogAccepted: true in ${yG()}.`)
}

function qLe(e) {
  let r = be(e);
  return lz(r, e)
}
var D = Ib;
async function SFn(e, r) {
  if (!D.includes(e.source)) return !1;
  let o = mn(e.ruleValue),
    n = e.ruleBehavior === "allow" ? kX(o) : o;
  try {
    let u = !1;
    if (e.source === "localSettings") {
      let d = Jg();
      if (d) u = !!rb(d).settings?.permissions?.[e.ruleBehavior]?.some((p) => kX(p) === n)
    }
    let s = !1,
      {
        error: c
      } = await tl(e.source, (d) => {
        let g = d?.permissions?.[e.ruleBehavior];
        if (!g || !g.some((p) => kX(p) === n)) return null;
        return s = !0, {
          permissions: {
            [e.ruleBehavior]: g.filter((p) => kX(p) !== n)
          }
        }
      }, void 0, r);
    if (c) return !1;
    if (!s && u) {
      let d = Jg();
      if (d) return !rb(d).settings?.permissions?.[e.ruleBehavior]?.some((p) => kX(p) === n)
    }
    return s || u
  } catch (u) {
    return a(u), !1
  }
}
async function svs({
  ruleValues: e,
  ruleBehavior: r
}, o, n) {
  if (Ip()) return !1;
  if (e.length < 1) return !0;
  let u = e.map(mn);
  try {
    let s = await tl(o, (c) => {
      let d = c?.permissions?.[r] || [],
        g = new Set(d.map((S) => mn(m_(S, r)))),
        p = u.filter((S) => !g.has(S));
      if (p.length === 0) return null;
      return {
        permissions: {
          [r]: [...d, ...p]
        }
      }
    }, void 0, n);
    if (s.error) throw s.error;
    return !0
  } catch (s) {
    return t(`Failed to add permission rules to ${o} settings: ${s instanceof Error?s.message:String(s)}`, {
      level: "error"
    }), !1
  }
}
export {
  Ptn,
  dht,
  iTr,
  Ip,
  az,
  _Fn,
  nvs,
  aTr,
  D7e,
  FGe,
  Hho,
  rvs,
  KLe,
  ovs,
  lz,
  yse,
  aO,
  Otn,
  bFn,
  L7e,
  HGe,
  $ho,
  Itn,
  _Nt,
  qLe,
  SFn,
  svs
};
