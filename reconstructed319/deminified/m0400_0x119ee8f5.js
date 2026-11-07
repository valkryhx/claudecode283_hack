// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, Bwe, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { af } from "B:/~BUN/root/chunk-eev762xg.js";
import { wjt } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { Po, lv, SY, w7, PKn, W5, I2s, M2s, oK, Uae, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Te, Fn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Tc, l5, wHe, Pi, di, Cc, c5 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { knt, hVn } from "B:/~BUN/root/chunk-65j2302z.js";
import { jn } from "B:/~BUN/root/chunk-rr294jrm.js";
import { D2n, LSt, V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { rb, un, Jg, be, QWn, cHe, kte, zv, Spe, xKe, L0r } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { La, Ln, ul, jt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { bk, OO } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { qgo, Ygo, W_e, YGe, Um, D1, ED, zGi } from "B:/~BUN/root/chunk-esnm3r09.js";
import { A0e } from "B:/~BUN/root/chunk-63btkzab.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { kf, _ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { gQt } from "B:/~BUN/root/chunk-n7ta2s3w.js";
import { mEs } from "B:/~BUN/root/chunk-9t9ygsbp.js";
import { p1 } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { jg } from "B:/~BUN/root/chunk-28zr9ymz.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { ge, ws, vr, Ft } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, I, oe, C, u, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { zd } from "B:/~BUN/root/chunk-79595s9y.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
async function Qe(credentials) {
  let n = (r, c) => (t(`[plugins-scope] ${r}: ${c}`), r);
  if (!bk("allow_plugin_skill_search")) return n("send", "policy refuses the plugin routes");
  if (!Fn()) return n("send", "not a first-party provider session");
  if (St()) return n("send", "essential traffic only");
  if (zd()) return n("send", "CCR session token");
  try {
    await ul({
      credentials: credentials
    });
  } catch (error) {
    t(`[plugins-scope] pre-check token freshen failed: ${d(error)}`);
  }
  let s = Ln();
  if (!s?.accessToken) return n("send", "no claude.ai token");
  if (s.scopes?.includes(wjt)) return n("send", "token carries user:plugins");
  if (!s.refreshToken) return n("send", "host-injected token, scopes unknown here");
  if (s.clientId) return n("send", "third-party OAuth client");
  return n("skip_no_scope", "login token lacks user:plugins until its next refresh");
}
var en = 1e4;
async function pze(e, n, s = en) {
  if (e?.aborted) return "send";
  let r = Qe(n).catch(y => (t(`[plugins-scope] unexpected gate error: ${d(y)}`), "send")),
    c;
  if (!e) c = await we(r, s);else {
    let y,
      promise = new Promise(h => {
        y = () => h(void 0), e.addEventListener("abort", y, {
          once: !0
        });
      });
    try {
      c = await we(Promise.race([r, promise]), s);
    } finally {
      e.removeEventListener("abort", y);
    }
  }
  return c ?? "send";
}
import { createWriteStream as bn } from "fs";
import { open as Pn, rm as Oe, writeFile as Hn } from "fs/promises";
import { Transform as An } from "stream";
import { pipeline as vn } from "stream/promises";
function oco(e) {
  let n = (r, c) => {
      let y = rb(r, c);
      return y.settings === null && xKe(y.errors).length > 0;
    },
    s = ["userSettings", "localSettings", "flagSettings"].some(item => {
      let c = un(item);
      if (c === void 0) return !1;
      switch (item) {
        case "flagSettings":
          return n(c, lv() ?? SY());
        case "localSettings":
          {
            let y = Jg();
            return n(c) || y !== void 0 && y !== c && n(y);
          }
        case "userSettings":
          return n(c);
      }
    });
  return nn(e) || Spe().length > 0 && zv() !== "helper" || s || QWn(e.settingKey) || w7() && cHe() || OO(e.policyKey) === "unregistered";
}
function sco(e) {
  if (!L0r(e.settingKey)) return !1;
  if (!e.isTierInPlay()) return !1;
  if (Te() !== "firstParty") return !1;
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  if (xn()) return !1;
  if (La().source !== "claude.ai") return !1;
  if (St()) return !1;
  if (!bk(e.policyKey)) return !1;
  return Y(e);
}
function Vft() {
  return La().source === "claude.ai" && !xn();
}
function Y(e) {
  return v(e.flagName, !1) === !0;
}
function ico(e) {
  return !_ht() && Fbr(e);
}
function Fbr(e) {
  let n = OO(e.policyKey);
  return n === "cache_miss" || n === "route_missing";
}
function nn(e) {
  let n = OO(e.policyKey);
  return !L0r(e.settingKey) || n === "org_denied" || n === "latched";
}
function aco(e) {
  let n = [...kte(), be("userSettings")],
    s = OO(e.policyKey);
  return n.some(item => item?.[e.settingKey] === !1) || s === "org_denied" || s === "latched";
}
import { join as cn, resolve as dn, sep as G } from "path";
import { sep as an } from "path";
function Dbr(e, n) {
  if (e.type !== n.type) return !1;
  let s = (r, c) => (r.if ?? "") === (c.if ?? "");
  switch (e.type) {
    case "command":
      {
        let r = p1();
        return n.type === "command" && e.command === n.command && _(e.args ?? null) === _(n.args ?? null) && (e.shell ?? r) === (n.shell ?? r) && s(e, n);
      }
    case "prompt":
      return n.type === "prompt" && e.prompt === n.prompt && s(e, n);
    case "agent":
      return n.type === "agent" && e.prompt === n.prompt && s(e, n);
    case "http":
      return n.type === "http" && e.url === n.url && s(e, n);
    case "mcp_tool":
      return n.type === "mcp_tool" && e.server === n.server && e.tool === n.tool && _(e.input ?? {}) === _(n.input ?? {}) && s(e, n);
    case "script":
      return n.type === "script" && (e.script ?? null) === (n.script ?? null) && (e.file ?? null) === (n.file ?? null) && s(e, n);
    case "function":
      return !1;
  }
}
function tn(e) {
  return e.map(item => ({
    matcher: item.matcher,
    skillRoot: item.skillRoot,
    ...(item.personal === !0 && {
      personal: !0
    }),
    ...(item.checkout === !0 && {
      checkout: !0
    }),
    hooks: item.hooks.map(item => item.hook).filter(item => item.type !== "function")
  }));
}
function on(e) {
  return e.map(item => ({
    matcher: item.matcher,
    hooks: item.hooks.map(item => item.hook).filter(item => item.type === "function")
  })).filter(item => item.hooks.length > 0);
}
class he {
  sessions = new Map();
  draws = new Map();
  skillDraws(e) {
    let n = this.draws.get(e) ?? new Map();
    return this.draws.set(e, n), n;
  }
  add(e, n, s, r, c) {
    this.addEntry(e, n, s, r, c?.onHookSuccess, c?.skillRoot, c?.personal === !0, c?.checkout === !0);
  }
  addFunctionHook(e, n, s, callback, errorMessage, y) {
    let id = y?.id || `function-hook-${Date.now()}-${Math.random()}`,
      h = {
        type: "function",
        id: id,
        timeout: y?.timeout || 5000,
        callback: callback,
        errorMessage: errorMessage
      };
    return this.addEntry(e, n, s, h, void 0, void 0, !1, !1), id;
  }
  addEntry(e, n, matcher, hook, onHookSuccess, skillRoot, S, h) {
    let w = this.sessions.get(e) ?? {
        hooks: {}
      },
      M = w.hooks[n] || [],
      H = M.findIndex(item => item.matcher === matcher && item.skillRoot === skillRoot && item.personal === !0 === S && item.checkout === !0 === h),
      x;
    if (H >= 0) {
      x = [...M];
      let P = x[H],
        F = P.hooks.findIndex(item => hook.type === "function" ? Boolean(hook.id) && item.hook.type === "function" && item.hook.id === hook.id : Dbr(item.hook, hook)),
        hooks = F >= 0 ? P.hooks.with(F, {
          ...P.hooks[F],
          hook: hook
        }) : [...P.hooks, {
          hook: hook,
          onHookSuccess: onHookSuccess
        }];
      x[H] = {
        ...P,
        hooks: hooks
      };
    } else x = [...M, {
      matcher: matcher,
      skillRoot: skillRoot,
      ...(S && {
        personal: !0
      }),
      ...(h && {
        checkout: !0
      }),
      hooks: [{
        hook: hook,
        onHookSuccess: onHookSuccess
      }]
    }];
    this.sessions.set(e, {
      hooks: {
        ...w.hooks,
        [n]: x
      }
    }), rn(this.sessions), Uae(), t(`Added session hook for event ${n} in session ${e}`);
  }
  remove(e, n, s, r) {
    let c = this.sessions.get(e);
    if (c) {
      let S = (c.hooks[n] || []).map(item => {
          if (r !== void 0 && item.skillRoot !== r.skillRoot) return item;
          let hooks_2 = item.hooks.filter(item => !Dbr(item.hook, s));
          return hooks_2.length > 0 ? {
            ...item,
            hooks: hooks_2
          } : null;
        }).filter(item => item !== null),
        hooks_3 = S.length > 0 ? {
          ...c.hooks,
          [n]: S
        } : {
          ...c.hooks
        };
      if (S.length === 0) delete hooks_3[n];
      this.sessions.set(e, {
        ...c,
        hooks: hooks_3
      }), Uae();
    }
    t(`Removed session hook for event ${n} in session ${e}`);
  }
  clear(e) {
    this.sessions.delete(e), this.draws.delete(e), Uae(), t(`Cleared all session hooks for session ${e}`);
  }
  get(e, n) {
    let s = new Map(),
      r = this.sessions.get(e);
    if (!r) return s;
    for (let c of n ? [n] : Tc) {
      let y = r.hooks[c];
      if (y) s.set(c, tn(y));
    }
    return s;
  }
  getFunctionHooks(e, n) {
    let s = new Map(),
      r = this.sessions.get(e);
    if (!r) return s;
    for (let c of n ? [n] : Tc) {
      let y = r.hooks[c];
      if (y) {
        let S = on(y);
        if (S.length > 0) s.set(c, S);
      }
    }
    return s;
  }
  getEntry(e, n, s, r, c) {
    let y = this.sessions.get(e)?.hooks[n];
    if (!y) return;
    for (let S of y) if ((S.matcher === s || s === "") && S.skillRoot === c.skillRoot) {
      let h = S.hooks.find(item => Dbr(item.hook, r));
      if (h) return h;
    }
    return;
  }
  has(e, n) {
    return this.sessions.get(e)?.hooks[n] !== void 0;
  }
}
var sn = new W(() => new Set());
function se() {
  return Po(sn);
}
function rn(e) {
  D2n(se(), e);
}
function Lbr() {
  let e = [];
  for (let n of LSt(se())) for (let s of n.values()) for (let event of Tc) for (let c of s.hooks[event] ?? []) for (let {
    hook: hook_2
  } of c.hooks) if (hook_2.type !== "function") e.push({
    event: event,
    hook: hook_2,
    skillRoot: c.skillRoot
  });
  return e;
}
function Se(e) {
  if (e.size === 0) return 0;
  let n = 0;
  for (let s of LSt(se())) for (let [r, c] of s) {
    let hooks_4 = {},
      S = n;
    for (let h of Tc) {
      let w = [];
      for (let M of c.hooks[h] ?? []) if (M.skillRoot !== void 0 && e.has(M.skillRoot)) n += M.hooks.length;else w.push(M);
      if (w.length > 0) hooks_4[h] = w;
    }
    if (n > S) s.set(r, {
      ...c,
      hooks: hooks_4
    });
  }
  if (n > 0) Uae();
  return n;
}
function Jye() {
  return new he();
}
var ln = {
  sync_off: e => `${e} sync is off (a setting or the organization's policy).`,
  account_change: () => "A sign-out, or a sign-in not verified as the same account.",
  skill_gone: () => "Those skills are gone from this account's list or from the disk."
};
function Nbr(e) {
  let n = e + an,
    s = new Set();
  for (let {
    skillRoot: skillRoot_2
  } of Lbr()) if (skillRoot_2?.startsWith(n)) s.add(skillRoot_2);
  return s;
}
function xMn(e, n, reason) {
  let count = Se(n);
  if (count === 0) return;
  t(`Hooks of ${e.hooksOf} removed: ${count}. ${ln[reason](e.sync)}`), V("info", e.event, {
    count: count,
    reason: reason
  });
}
var Me = {
    sync: "Plugins",
    hooksOf: "synced plugins' skills",
    event: "plugins_sync_skill_hooks_removed"
  },
  Pe = new W(() => new Set());
function He() {
  try {
    let e = af();
    return e === null ? void 0 : dn(cn(e, D1));
  } catch (error) {
    t(`The synced plugins' folder could not be made absolute (${k(error) ?? d(error)})`, {
      level: "error"
    });
    return;
  }
}
function oLi() {
  let e = He();
  if (e !== void 0) Po(Pe).add(e);
}
function re() {
  let e = new Set(Po(Pe)),
    n = He();
  if (n !== void 0) e.add(n);
  return e;
}
function PMn(e) {
  return e !== void 0 && di(e) === Pi;
}
function Mms(e, n) {
  if (!PMn(e) || n === void 0) return [];
  return [...re()].filter(item => n.startsWith(item + G));
}
async function Dms() {
  try {
    return (await ED()) ?? zGi();
  } catch (error) {
    return a(error), null;
  }
}
function OMn(e, n) {
  let [s = ""] = n.slice(e.length + 1).split(G);
  return Um(YGe(s));
}
function sLi(e, n, s) {
  try {
    let r = PKn(),
      c = n.map(item => item + G + e).find(item => s.startsWith(item + G));
    if (r === null || r.bucket !== e || c === void 0) return;
    let y = OMn(c, s);
    return Array.from(r.dirsById.values()).some(item => item.has(y)) ? void 0 : "not_listed";
  } catch (error) {
    return V("warn", "plugins_sync_last_list_unreadable"), a(error), "list_unreadable";
  }
}
function iLi(e, n, s) {
  if (e === null) return "no_account";
  return n.some(item => s.startsWith(item + G + e + G)) ? void 0 : "other_account";
}
var ie = {
  sync_off: "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy",
  other_account: "its plugin was synced for another account",
  no_account: "no account could be resolved for its synced plugin",
  not_listed: "the account's latest complete list of plugins does not hold its plugin's folder",
  list_unreadable: "this session's record of the account's plugins could not be read",
  no_folder: "its plugin's folder could not be found under the synced plugins' folder"
};
function PDt(e) {
  return ie[e];
}
function aLi(e, reason_2, s) {
  let r = [...(s.hooks ? ["its hooks"] : []), ...(s.grant ? ["the tools its allowed-tools grants"] : [])].join(" and without ");
  t(`Plugin skill '${e}' runs without ${r}: ${ie[reason_2]}.`, {
    level: "warn"
  }), V("info", "plugins_sync_skill_hooks_refused", {
    reason: reason_2
  });
}
function lLi(e, reason_3) {
  t(`Plugin command '${e}' was not run: ${ie[reason_3]}.`, {
    level: "warn"
  }), V("info", "plugins_sync_command_refused", {
    reason: reason_3
  });
}
function dco(e) {
  let n = new Set();
  for (let s of re()) for (let r of Nbr(s)) n.add(r);
  xMn(Me, n, e);
}
function dLi({
  bucket: bucket,
  delistedDirs: delistedDirs,
  listedDirs: listedDirs
}) {
  try {
    let r = new Set();
    for (let c of re()) {
      let y = c + G + bucket;
      for (let S of Nbr(y)) {
        let h = OMn(y, S);
        if (delistedDirs.has(h) && !listedDirs.has(h)) r.add(S);
      }
    }
    return xMn(Me, r, "skill_gone"), !0;
  } catch (error) {
    return V("warn", "plugins_sync_skill_hooks_removal_failed"), a(error), !1;
  }
}
var K = {
  settingKey: "syncClaudeAiPlugins",
  policyKey: "allow_account_plugins_sync",
  flagName: "tengu_claudeai_plugins_sync_enabled",
  isTierInPlay: () => Fce()
};
function Ubr() {
  NZ();
  let e = fn() && !oK();
  return I2s(e), e;
}
function NZ() {
  let e = oco(K);
  if (M2s(e), e && uco()) dco("sync_off");
}
function Nce() {
  return NZ(), oK();
}
function U7t() {
  return uco();
}
function cLi() {
  return !U7t() && (Nce() || Fbr(K));
}
function Bbr() {
  return W5().length > 0 || IMn();
}
function IMn() {
  return jbr() || cco();
}
function cco() {
  return !jbr() && Y(K) && Vft();
}
function Lms() {
  return jbr() || Vft();
}
function B7t() {
  return Y(K) && Vft() && Fce() && !Nce();
}
function uLi() {
  return Y(K);
}
function jbr() {
  return i.CLAUDE_CODE_SYNC_PLUGINS || i.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function ODt() {
  return ico(K);
}
function Fce() {
  return !ur("plugins") && Kt("userSettings");
}
function fn() {
  return sco(K);
}
function uco() {
  return aco(K);
}
function fco(e, n) {
  if (!n.ok) return n.reason === "no-auth" ? {
    success: !1,
    error: n.detail,
    kind: "no_auth"
  } : {
    success: !1,
    error: n.reason,
    kind: "gated"
  };
  let s = Wbr().safeParse(n.data);
  if (s.success) {
    let r = s.data.error.type ?? "error_envelope_no_type";
    return V("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", {
      serverError: r,
      status: n.status
    }), {
      success: !1,
      error: r,
      kind: "server_error",
      status: n.status
    };
  }
  return V("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed"), {
    success: !1,
    error: `malformed list-${e} response`,
    kind: "malformed"
  };
}
function pco(e) {
  let {
      kind: kind,
      message: s
    } = Ai(e),
    errno = Bwe(k(e));
  return {
    success: !1,
    error: s,
    kind: kind,
    ...(errno !== void 0 && {
      errno: errno
    })
  };
}
function Poe(e) {
  return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error";
}
function Yft(e) {
  return e.status === 403 || e.kind === "no_scope" || Poe(e);
}
function Xft(e) {
  return {
    kind: f(e.kind),
    ...(e.status !== void 0 && {
      status: e.status
    }),
    ...(e.errno !== void 0 && {
      errno: e.errno
    })
  };
}
var Wbr = p(() => Ft({
  error: Ft({
    type: ge().optional(),
    message: ge().nullish().catch(void 0)
  })
}));
function zbr(e) {
  try {
    let n = Wbr().safeParse(ee(e.toString("utf8", 0, 2048)));
    if (n.success) return n.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
function Ee() {
  let e = v("tengu_woven_ladder", []);
  return new Set(Array.isArray(e) ? e : []);
}
function Ae(e, n = Ee()) {
  return mEs(e) || n.has("if_pattern");
}
var mn = ["prompt", "agent", "http", "mcp_tool"],
  kn = p(() => u({
    type: T("command"),
    command: o(),
    args: C(o()).nullish(),
    if: o().nullish(),
    shell: o().nullish(),
    timeout: E().nullish(),
    on_failure: B(["continue", "block"]).nullish().catch("block"),
    status_message: o().nullish(),
    once: I().nullish(),
    async: I().nullish(),
    async_rewake: I().nullish(),
    rewake_message: o().nullish(),
    rewake_summary: o().nullish()
  })),
  yn = p(() => u({
    type: T("prompt"),
    prompt: o(),
    if: o().nullish(),
    timeout: E().nullish(),
    model: o().nullish(),
    continue_on_block: I().nullish(),
    status_message: o().nullish(),
    once: I().nullish()
  })),
  _n = p(() => u({
    type: T("agent"),
    prompt: o(),
    if: o().nullish(),
    timeout: E().positive().nullish(),
    model: o().nullish(),
    status_message: o().nullish(),
    once: I().nullish()
  })),
  hn = p(() => u({
    type: T("http"),
    url: o().url(),
    if: o().nullish(),
    timeout: E().positive().nullish(),
    on_failure: B(["continue", "block"]).nullish().catch("block"),
    headers: me(o(), o()).nullish(),
    allowed_env_vars: C(o()).nullish(),
    status_message: o().nullish(),
    once: I().nullish()
  })),
  Sn = p(() => u({
    type: T("mcp_tool"),
    server: o(),
    tool: o(),
    input: me(o(), oe()).nullish(),
    if: o().nullish(),
    timeout: E().positive().nullish(),
    status_message: o().nullish(),
    once: I().nullish()
  })),
  ve = /^plugin:[^:]+:./,
  wn = p(() => C(u({
    event: o(),
    matchers: C(u({
      matcher: o().nullish(),
      hooks: C(oe())
    }))
  })));
function Re(e) {
  if (!Array.isArray(e.hook_modules) || e.hook_modules.length > 0) return;
  let n = wn().safeParse(e.hooks === null ? [] : e.hooks);
  if (!n.success) return;
  let s = {},
    r = {},
    c = 0,
    unknownEvents = 0,
    S = !1,
    h = new Set(),
    w = !1,
    M = Tc,
    H = Ee();
  for (let {
    event: event_2,
    matchers: matchers
  } of n.data) {
    if (!M.includes(event_2)) {
      unknownEvents += matchers.reduce((acc, item) => acc + item.hooks.length, 0);
      continue;
    }
    for (let {
      matcher: matcher_2,
      hooks: hooks_5
    } of matchers) {
      let hooks_7 = [],
        hooks_6 = hooks_5.flatMap(item => {
          let ke = yn().safeParse(item);
          if (ke.success) {
            h.add("prompt");
            let {
              continue_on_block: O,
              status_message: N,
              ...z
            } = ke.data;
            if (!Ae({
              if: z.if ?? void 0
            }, H)) return S = !0, [];
            return [Ro({
              ...z,
              continueOnBlock: O,
              statusMessage: N
            }, te => te != null)];
          }
          let Q = H.has("agent") ? _n().safeParse(item) : void 0;
          if (Q?.success && Ae({
            if: Q.data.if ?? void 0
          }, H)) {
            h.add("agent");
            let {
              status_message: O,
              ...N
            } = Q.data;
            return [Ro({
              ...N,
              statusMessage: O
            }, z => z != null)];
          }
          let ye = H.has("http") ? hn().safeParse(item) : void 0;
          if (ye?.success) {
            h.add("http");
            let {
              on_failure: O,
              allowed_env_vars: N,
              status_message: z,
              ...te
            } = ye.data;
            return [Ro({
              ...te,
              onFailure: O,
              allowedEnvVars: N,
              statusMessage: z
            }, Xe => Xe != null)];
          }
          let ne = H.has("mcp_tool") ? Sn().safeParse(item) : void 0;
          if (ne?.success && c < gQt && ve.test(ne.data.server)) {
            c++, h.add("mcp_tool");
            let {
              status_message: O,
              ...N
            } = ne.data;
            return hooks_7.push(Ro({
              ...N,
              statusMessage: O
            }, z => z != null)), [];
          }
          let _e = kn().safeParse(item);
          if (!_e.success) {
            S = !0;
            let O = D(item) ? mn.find(N => N === item.type) : void 0;
            if (O !== void 0) h.add(O);
            return w ||= O === "mcp_tool" && D(item) && typeof item.server === "string" && !ve.test(item.server), [];
          }
          let b = _e.data;
          return [{
            type: "command",
            command: b.command,
            ...(b.args != null && {
              args: b.args
            }),
            ...(b.if != null && {
              if: b.if
            }),
            ...(b.shell != null && {
              shell: b.shell
            }),
            ...(b.timeout != null && {
              timeout: b.timeout
            }),
            ...(b.on_failure != null && {
              onFailure: b.on_failure
            }),
            ...(b.status_message != null && {
              statusMessage: b.status_message
            }),
            ...(b.once != null && {
              once: b.once
            }),
            ...(b.async != null && {
              async: b.async
            }),
            ...(b.async_rewake != null && {
              asyncRewake: b.async_rewake
            }),
            ...(b.rewake_message != null && {
              rewakeMessage: b.rewake_message
            }),
            ...(b.rewake_summary != null && {
              rewakeSummary: b.rewake_summary
            })
          }];
        });
      if (hooks_6.length > 0) (s[event_2] ??= []).push({
        ...(matcher_2 != null && {
          matcher: matcher_2
        }),
        hooks: hooks_6
      });
      if (hooks_7.length > 0) (r[event_2] ??= []).push({
        ...(matcher_2 != null && {
          matcher: matcher_2
        }),
        hooks: hooks_7
      });
    }
  }
  let x = l5().safeParse(s),
    P = l5().safeParse(r);
  if (!x.success || !P.success) return;
  let F = {
    hooks: x.data,
    unknownEvents: unknownEvents,
    ...(Object.keys(P.data).length > 0 && {
      notConnected: P.data
    })
  };
  if (S) {
    let R = {
      ...F,
      hasOtherKinds: !0,
      otherKinds: [...h]
    };
    return w ? {
      ...R,
      hasMcpToolHookOnOtherServer: !0
    } : R;
  }
  return h.size > 0 ? {
    ...F,
    otherKinds: [...h]
  } : F;
}
function xe(e, {
  components = !1
} = {}) {
  let installationPreference = qgo(e.installation_preference),
    marketplaceKind = Ygo(e.marketplace_kind);
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null,
    ...(typeof e.marketplace_name === "string" && e.marketplace_name && {
      marketplaceName: e.marketplace_name
    }),
    ...(installationPreference && {
      installationPreference: installationPreference
    }),
    ...(marketplaceKind && {
      marketplaceKind: marketplaceKind
    }),
    ...(typeof e.presents_as === "string" && e.presents_as && {
      presentsAs: e.presents_as
    }),
    ...(components && Array.isArray(e.components) && {
      components: e.components.flatMap(item => {
        let y = Mn().safeParse(item);
        if (!y.success) return [];
        let {
          type: type,
          name: name,
          description: description
        } = y.data;
        return [{
          type: type,
          name: name,
          ...(description != null && {
            description: description
          })
        }];
      })
    }),
    ...(components && typeof e.plugin_json_name === "string" && e.plugin_json_name && {
      pluginJsonName: e.plugin_json_name
    })
  };
}
var Mn = p(() => u({
  type: o(),
  name: o(),
  description: o().nullish()
}));
function Ce(e) {
  return e.enabled !== !1;
}
function Gbr(e) {
  return e.map(item => _([item.pluginId, item.name, item.version, item.updatedAt])).toSorted().join(`
`);
}
var timeout = 1e4,
  timeout_2 = 60000,
  Ie = 500,
  Fe = 100,
  pages = 20,
  maxContentLength = A0e;
function Rn() {
  return i.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? timeout_2;
}
var De = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
var Ne = "&include_component_details=true&include_hooks=true&include_plugin_json_names=true",
  Cn = "&wrapped_skills_as_plugins=true",
  $o = ze(`${De}${Ne}`, 0);
async function On(e) {
  let n = await e();
  if (n.ok) return n;
  return await J(Ie), e();
}
async function Jft(e = {}) {
  let n = await Tn(`${De}${e.componentDetails === !0 ? Ne : ""}${e.convertedSkillsAsPlugins === !0 ? Cn : ""}`, e);
  return n.success ? {
    success: !0,
    plugins: n.rows.map(item => xe(item, {
      components: e.componentDetails === !0
    })),
    ...(n.degraded && {
      degraded: n.degraded
    }),
    ...(n.convertedSkillsAsPlugins && {
      convertedSkillsAsPlugins: n.convertedSkillsAsPlugins
    }),
    ...(e.componentDetails === !0 && !In() && {
      hooks: new Map(n.rows.flatMap(item => {
        let r = Dn(item) ? void 0 : Re(item);
        return r === void 0 ? [] : [[item.id, r]];
      }))
    })
  } : n;
}
async function Tn(e, n) {
  if ((await pze(n.signal, n.credentials)) === "skip_no_scope") return {
    success: !1,
    error: "claude.ai login lacks the user:plugins scope in this session",
    kind: "no_scope"
  };
  let r = await Le(e, n);
  if (r.success || r.status === 403) return r;
  await J(Ie);
  let c = await Le(e, n);
  return !c.success && Poe(c) && !Poe(r) ? {
    success: !1,
    error: c.error,
    kind: c.kind
  } : c;
}
async function Le(e, n) {
  let s = [],
    degraded = !1,
    convertedSkillsAsPlugins = !0;
  try {
    for (let y = 0; y < pages; y++) {
      let S = await jt.get(ze(e, y), {
        auth: "teleport-org",
        isBackground: n.isBackground,
        timeout: timeout,
        credentials: n.credentials,
        earlyAnswer: n.earlyAnswer
      });
      if (!S.ok || !Array.isArray(S.data?.plugins)) {
        let h = fco("plugins", S);
        return y > 0 && Poe(h) ? {
          success: !1,
          error: h.error,
          kind: h.kind
        } : h;
      }
      if (s.push(...S.data.plugins.filter(Ce)), degraded ||= S.data.degraded === !0, convertedSkillsAsPlugins &&= S.data.converted_skills_as_plugins === !0, S.data.has_more !== !0) return {
        success: !0,
        rows: [...s.filter(item => item.installation_preference === "required"), ...s.filter(item => item.installation_preference !== "required")],
        ...(degraded && {
          degraded: degraded
        }),
        ...(convertedSkillsAsPlugins && {
          convertedSkillsAsPlugins: convertedSkillsAsPlugins
        })
      };
    }
    return V("warn", "plugins_sync_list_page_cap", {
      pages: pages,
      collected: s.length
    }), {
      success: !1,
      error: `list-plugins page cap (${pages}) exceeded`,
      kind: "page_cap"
    };
  } catch (error) {
    return pco(error);
  }
}
function In() {
  let e = OO("allow_account_plugins_sync"),
    n = e === "cache_miss" || e === "route_missing";
  return NZ(), oK() || e !== null && !(n && _ht());
}
function Dn(e) {
  return e.enabled !== !0 || e.skills_display_degraded === !0;
}
function Nms(e, n) {
  let s = [];
  if (n) s.push(`version=${encodeURIComponent(n)}`);
  if (i.CLAUDE_CODE_CCR_SURFACE === "tag") s.push("included_default_marketplaces=claude-tag-plugins");
  let r = s.length > 0 ? `?${s.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${r}`;
}
async function mco(e, n, s, r = {}) {
  return On(() => Nn(e, n, s, r));
}
async function Nn(e, n, s, r) {
  let c = Nms(e, s);
  if (i.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return zn(c, n, r);
  let bodyLen = 0,
    S = !1;
  try {
    let x = function () {
        S = !0, H.destroy(Error("plugin download stream stalled"));
      },
      h = await jt.get(c, {
        auth: "teleport-org",
        isBackground: r.isBackground,
        timeout: timeout_2,
        responseType: "stream",
        credentials: r.credentials
      });
    if (!h.ok || !h.data) {
      let reason_4 = h.ok ? "empty_body" : h.reason;
      return V("warn", "plugins_sync_download_not_ok", {
        reason: reason_4
      }), {
        ok: !1,
        reason: reason_4
      };
    }
    let w = Rn(),
      M,
      H = new An({
        transform(A, U, j) {
          if (clearTimeout(M), M = setTimeout(x, w), bodyLen += A.length, bodyLen > maxContentLength) j(Error("plugin zip exceeds download byte cap"));else j(null, A);
        },
        flush(A) {
          clearTimeout(M), A();
        }
      });
    M = setTimeout(x, w);
    try {
      await vn(h.data, H, bn(n));
    } finally {
      clearTimeout(M);
    }
    let P = Buffer.alloc(2048),
      F = await Pn(n, "r"),
      R;
    try {
      R = (await F.read(P, 0, P.length, 0)).bytesRead;
    } finally {
      await F.close();
    }
    if (R < 2 || P[0] !== 80 || P[1] !== 75) {
      await Oe(n, {
        force: !0
      });
      let A = R === 0 ? "empty_body" : zbr(P.subarray(0, R));
      return V("warn", "plugins_sync_download_not_zip", {
        serverError: A,
        bodyLen: bodyLen
      }), {
        ok: !1,
        reason: A
      };
    }
    return {
      ok: !0
    };
  } catch (error) {
    await Oe(n, {
      force: !0
    }).catch(() => {});
    let w = error?.response?.data;
    if (w !== null && typeof w === "object" && "destroy" in w && typeof w.destroy === "function") w.destroy();
    let M = error !== null && typeof error === "object" && "code" in error ? error.code : void 0,
      H = S ? "timeout" : bodyLen > maxContentLength ? "too_large" : M === "ECONNRESET" || M === "EPIPE" || M === "ETIMEDOUT" ? "network" : Ai(error).kind;
    return V("warn", "plugins_sync_download_exception", {
      kind: H
    }), {
      ok: !1,
      reason: H
    };
  }
}
async function zn(e, n, s) {
  try {
    let r = await jt.get(e, {
      auth: "teleport-org",
      isBackground: s.isBackground,
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxContentLength: maxContentLength,
      credentials: s.credentials
    });
    if (!r.ok || !r.data) {
      let reason_5 = r.ok ? "empty_body" : r.reason;
      return V("warn", "plugins_sync_download_not_ok", {
        reason: reason_5
      }), {
        ok: !1,
        reason: reason_5
      };
    }
    let c = Buffer.from(r.data);
    if (c.length < 2 || c[0] !== 80 || c[1] !== 75) {
      let y = c.length === 0 ? "empty_body" : zbr(c);
      return V("warn", "plugins_sync_download_not_zip", {
        serverError: y,
        bodyLen: c.length
      }), {
        ok: !1,
        reason: y
      };
    }
    return await Hn(n, c), {
      ok: !0
    };
  } catch (error) {
    let {
      kind: c
    } = Ai(error);
    return V("warn", "plugins_sync_download_exception", {
      kind: c
    }), {
      ok: !1,
      reason: c
    };
  }
}
function ze(e, n) {
  return `${e}&limit=${Fe}&offset=${n * Fe}`;
}
function UXe(e) {
  let sessionRefsGate = e.sessionRefsGate;
  if (sessionRefsGate.ccrSessionID() === void 0) {
    let CLAUDE_CODE_SESSION_ID = i.CLAUDE_CODE_SESSION_ID;
    if (CLAUDE_CODE_SESSION_ID && jn(CLAUDE_CODE_SESSION_ID) !== CLAUDE_CODE_SESSION_ID) sessionRefsGate.latchCcrSessionID(CLAUDE_CODE_SESSION_ID);
  }
  return sessionRefsGate.ccrSessionID();
}
function Kn(e) {
  return UXe(e) !== void 0;
}
function _L(e) {
  let n = e.sessionRefsGate.syncEnabled();
  if (n !== void 0) return n;
  return e.sessionRefsGate.latchSyncEnabled(!!i.CLAUDE_CODE_SYNC_SESSION_REFS && Kn(e));
}
var Un = p(() => {
    let e = ge().nullish().transform(r => r ?? ""),
      n = Ft({
        id: e,
        name: e,
        description: e,
        version: e,
        directory: e,
        marketplace_name: ge().nullish().catch(void 0),
        is_official: ws().nullish().catch(void 0)
      }).transform(({
        marketplace_name: r,
        is_official: is_official,
        ...y
      }) => ({
        ...y,
        ...(r && {
          marketplaceName: r
        }),
        ...(is_official === !0 && {
          isOfficial: !0
        })
      })),
      s = vr(n).nullish().transform(r => r ?? []);
    return Ft({
      skills: s,
      plugins: s
    }).strict();
  }),
  timeout_3 = 30000,
  Gn = 500;
class Ue {
  inflight = null;
  featureEventReported = new Set();
  startupResponse = null;
  fetch() {
    if (!this.inflight) {
      let e = $n().finally(() => {
        if (this.inflight === e) this.inflight = null;
      });
      this.inflight = e;
    }
    return this.inflight;
  }
  discardInflight() {
    this.inflight = null, this.startupResponse = null;
  }
  async listEntries(e, {
    startup: startup
  }) {
    let s = e === "skills" ? "sync_session_refs_skills" : "sync_session_refs_plugins",
      r = !this.featureEventReported.has(e);
    this.featureEventReported.add(e);
    let c = await (startup ? this.startupResponse ??= this.fetch() : this.fetch());
    if (!c.ok) {
      if (l(e === "skills" ? "tengu_skills_sync_manifest_failed" : "tengu_plugins_sync_manifest_failed", {
        unavailable: c.reason === "unavailable"
      }), r) m(s, c.reason);
      return {
        success: !1,
        error: `manifest ${c.reason}`,
        kind: "manifest"
      };
    }
    if (r) g(s);
    return {
      success: !0,
      entries: c[e]
    };
  }
}
var BXe = new Je(() => new Ue());
async function $n() {
  let e = await Ke();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return await J(Gn), Ke();
}
async function Ke() {
  try {
    let e = await jt.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout_3,
      validateStatus: () => !0
    });
    if (!e.ok) {
      if (e.reason === "no-auth") return V("warn", "session_refs_manifest_no_auth"), {
        ok: !1,
        reason: "no_auth"
      };
      return V("warn", "session_refs_manifest_gated", {
        reason: e.reason
      }), {
        ok: !1,
        reason: "gated"
      };
    }
    if (e.status === 503) return V("warn", "session_refs_manifest_unavailable"), {
      ok: !1,
      reason: "unavailable"
    };
    if (e.status >= 300) return V("warn", "session_refs_manifest_http_error", {
      status: e.status
    }), {
      ok: !1,
      reason: "http_error"
    };
    let n = Un().safeParse(e.data);
    if (!n.success) return V("warn", "session_refs_manifest_malformed"), {
      ok: !1,
      reason: "malformed"
    };
    return {
      ok: !0,
      skills: n.data.skills.filter(item => item.id),
      plugins: n.data.plugins.filter(item => item.id)
    };
  } catch (error) {
    let {
      kind: kind_2
    } = Ai(error);
    return V("warn", "session_refs_manifest_exception", {
      kind: kind_2
    }), {
      ok: !1,
      reason: "transport"
    };
  }
}
import { lstat as Be, open as Wn, realpath as je } from "fs/promises";
import { join as q } from "path";
function lco(e) {
  return e.length >= 2 && e[0] === 80 && e[1] === 75;
}
var Kft = "/mnt/skills",
  ce = {
    public: "anthropic",
    examples: "anthropic-example"
  },
  qft = "public",
  fe = 3000,
  Vn = 33554432,
  Yn = 600000,
  Zn = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;
function xms(kind_3, n, s) {
  s.set(n.reason, (s.get(n.reason) ?? 0) + 1), V("info", "skills_sync_host_mount_miss", {
    kind: kind_3,
    ...n
  });
}
function Hbr(e) {
  return Object.fromEntries(Array.from(e, ([n, s]) => [`mount_miss_${n}`, s]));
}
function qn(e) {
  if (e.creator_type !== "anthropic" || e.id !== e.name || !wHe(e.name)) return;
  if (e.source === ce.public) return "public";
  return e.source === ce.examples && e.is_public_provisioned === !0 ? "examples" : void 0;
}
function X0i(e) {
  let {
    hostMountKinds: hostMountKinds
  } = kf();
  hostMountKinds.clear();
  for (let s of e) {
    let r = qn(s);
    if (r !== void 0) hostMountKinds.set(s.id, r);
  }
}
function We() {
  return (knt() || hVn() && v("tengu_bright_fog", !0) !== !1) && c5() !== 0;
}
function J0i(e) {
  let n = Xn(e);
  return n !== void 0 && We() ? n : void 0;
}
function Xn(e) {
  let n = kf().hostMountKinds.get(e.skillId);
  return n !== void 0 && e.name === e.skillId && e.source === ce[n] && e.requestedVersion === void 0 ? n : void 0;
}
async function Q0i(e, n) {
  if (!We()) return null;
  let s = {
      deadline: performance.now() + fe,
      spentMs: 0,
      waitedMs: 0
    },
    r = await Ge(s, () => Ye(e)),
    c = Ja(1, (y, S, h) => Ge(s, () => Jn(y, S, h)));
  return {
    async readZip(y, S) {
      let h = "reason" in r ? r : r.get(y) ?? Z,
        w = "reason" in h ? h : await c(q(Kft, y, `${S.name}.skill`), S.updatedAt, h.device);
      if ("zip" in w) return w.zip;
      xms(y, w, n);
      return;
    },
    spentMs: () => Math.round(s.spentMs),
    waitedMs: () => Math.round(s.waitedMs)
  };
}
async function Ge(e, n) {
  let s = kf();
  while (s.hostMountWorkOutstanding !== null && s.hostMountWorkIsCatalogs) {
    let hostMountWorkOutstanding = s.hostMountWorkOutstanding,
      h = performance.now(),
      w = Math.min(e.deadline, s.hostMountWorkStartedAt + fe) - h;
    if (w > 0) await we(hostMountWorkOutstanding.catch(() => {}), w), e.waitedMs += performance.now() - h;
    if (s.hostMountWorkOutstanding === hostMountWorkOutstanding) break;
  }
  let r = performance.now();
  if (s.hostMountWorkOutstanding !== null) return {
    reason: "earlier_work_outstanding"
  };
  if (r >= e.deadline) return {
    reason: "budget_spent"
  };
  let c = Ve(s, n, r, !1),
    y = await we(c, e.deadline - r);
  return e.spentMs += performance.now() - r, y ?? {
    reason: "timed_out"
  };
}
async function Pms(e) {
  let n = kf();
  while (n.hostMountWorkOutstanding !== null) {
    let hostMountWorkOutstanding_2 = n.hostMountWorkOutstanding;
    if (await hostMountWorkOutstanding_2.catch(() => {}), n.hostMountWorkOutstanding === hostMountWorkOutstanding_2) n.hostMountWorkOutstanding = null;
  }
  return Ve(n, e, performance.now(), !0);
}
function Z0i() {
  let e = kf();
  return e.hostMountWorkOutstanding !== null && performance.now() - e.hostMountWorkStartedAt >= fe;
}
function Ve(e, n, s, r) {
  let c = n();
  e.hostMountWorkOutstanding = c, e.hostMountWorkStartedAt = s, e.hostMountWorkIsCatalogs = r;
  let y = () => {
    if (e.hostMountWorkOutstanding === c) e.hostMountWorkOutstanding = null;
  };
  return c.then(y, y), c;
}
var Z = {
  reason: "not_a_mount"
};
async function Ye(e) {
  let n = await Be(Kft).catch(de),
    s = "reason" in n || n.isDirectory() ? n : Z,
    r = new Map();
  for (let c of e) {
    if ("reason" in s) {
      r.set(c, s);
      continue;
    }
    let y = await Be(q(Kft, c)).catch(de);
    r.set(c, "reason" in y ? y : y.isDirectory() && y.dev !== s.dev ? {
      device: y.dev
    } : Z);
  }
  return r;
}
function de(e) {
  let n = k(e);
  return n === "ENOENT" ? {
    reason: "no_mount"
  } : {
    reason: "probe_failed",
    code: n ?? "unknown"
  };
}
function Jn(e, n, s) {
  return Ze(e, s, Vn, async (r, c) => {
    let y = n !== null && Zn.test(n) ? Date.parse(n) : Number.NaN;
    if (Number.isNaN(y)) return {
      reason: "row_date_unreadable"
    };
    if (c.mtimeMs <= y + Yn) return {
      reason: "not_newer_than_row"
    };
    let zip = await r.readFile();
    return lco(zip) ? {
      zip: zip
    } : {
      reason: "not_zip"
    };
  });
}
async function Oms(e) {
  return (await Ye(new Set([e]))).get(e) ?? Z;
}
async function eLi() {
  let e = await Oms(qft),
    n = "reason" in e ? e : await je(q(Kft, qft)).then(root => ({
      device: e.device,
      root: root
    }), de);
  if ("reason" in n) V("warn", "skill_host_catalog_not_read", n);
  return n;
}
async function tLi(e, n, s) {
  let filePath = q(e, n, "SKILL.md"),
    c = (await $e(filePath)) ?? (await Ims(filePath, s, jg));
  return "reason" in c ? c : (await $e(filePath)) ?? {
    text: c.text,
    filePath: filePath
  };
}
async function $e(e) {
  try {
    return (await je(e)) === e ? void 0 : {
      reason: "file_is_link"
    };
  } catch (error) {
    return qe(error);
  }
}
function Ims(e, n, s) {
  return Ze(e, n, s, async r => ({
    text: await r.readFile({
      encoding: "utf-8"
    })
  }));
}
async function Ze(e, n, s, r) {
  let c;
  try {
    c = await Wn(e, Cc());
    let y = await c.stat();
    if (y.dev !== n) return {
      reason: "file_on_other_device"
    };
    if (!y.isFile()) return {
      reason: "not_a_file"
    };
    if (y.size > s) return {
      reason: "too_large"
    };
    return await r(c, y);
  } catch (error) {
    return qe(error);
  } finally {
    await c?.close().catch(() => {});
  }
}
function qe(e) {
  let n = k(e);
  switch (n) {
    case "ENOENT":
      return {
        reason: "file_absent"
      };
    case "ELOOP":
      return {
        reason: "file_is_link"
      };
    default:
      return {
        reason: "read_failed",
        code: n ?? "unknown"
      };
  }
}
function nLi(e) {
  return {
    skillId: e.id,
    name: e.name,
    description: e.description ?? "",
    source: e.source ?? "custom",
    updatedAt: e.updated_at ?? null,
    ...(typeof e.backing_plugin_id === "string" && W_e(e.backing_plugin_id) && {
      backingPluginId: e.backing_plugin_id
    }),
    ...(e.user_invocable != null && {
      userInvocable: e.user_invocable === !0
    }),
    ...(e.disable_model_invocation != null && {
      disableModelInvocation: e.disable_model_invocation !== !1
    })
  };
}
function $br(e) {
  if (typeof e.creator_type !== "string") return;
  if (e.creator_type === "anthropic") return "anthropic";
  if (e.is_shared === !0) return "shared";
  if (e.partition_by === "organization") return "org";
  let n = e.partition_by === "account";
  if (typeof e.backing_plugin_id === "string") return n ? "own" : "other";
  return n || e.partition_by == null ? "own" : "other";
}
function rLi(e) {
  return e.enabled !== !1;
}
var Lce = "collision-loser";
export { Dbr, Lbr, Jye, Nbr, xMn, oco, sco, Vft, ico, Fbr, aco, lco, Kft, qft, xms, Hbr, X0i, J0i, Q0i, Pms, Z0i, Oms, eLi, tLi, Ims, nLi, $br, rLi, Lce, oLi, PMn, Mms, Dms, OMn, sLi, iLi, PDt, aLi, lLi, dco, dLi, Ubr, NZ, Nce, U7t, cLi, Bbr, IMn, cco, Lms, B7t, uLi, jbr, ODt, Fce, uco, pze, fco, pco, Poe, Yft, Xft, Wbr, zbr, Gbr, Jft, Nms, mco, UXe, _L, BXe };