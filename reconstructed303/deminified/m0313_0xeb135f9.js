// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k, Ude, pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { vf } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Nbt } from "B:/~BUN/root/chunk-jpdys232.js";
import { at, ms, bv, rre, ore, Hgn, xQ, j2o, W2o, PQ, IQ, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { xe, Xn } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Xc, E4, Pi, Oi } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { I_, fn, wh, me, AHo, eTe, Vle, eT, une, r0e, Q5n } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { fln, WXe, Ya, Fn, ba, Gt, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Rw, nR } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { bd } from "B:/~BUN/root/chunk-rfp1pa77.js";
import { _D, YDs } from "B:/~BUN/root/chunk-472kxa0t.js";
import { Cve } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { LPr, Sae, F9e, Zf, Lj } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { Nj } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { eqn } from "B:/~BUN/root/chunk-3npegs3h.js";
import { ge, Vo, sr, St } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { o, v, M, oe, T, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
async function ke(credentials) {
  let n = (r, p) => (t(`[plugins-scope] ${r}: ${p}`), r);
  if (!Rw("allow_plugin_skill_search")) return n("send", "policy refuses the plugin routes");
  if (!Xn()) return n("send", "not a first-party provider session");
  if (At()) return n("send", "essential traffic only");
  if (bd()) return n("send", "CCR session token");
  try {
    await ba({
      credentials: credentials
    });
  } catch (error) {
    t(`[plugins-scope] pre-check token freshen failed: ${d(error)}`);
  }
  let s = Fn();
  if (!s?.accessToken) return n("send", "no claude.ai token");
  if (s.scopes?.includes(Nbt)) return n("send", "token carries user:plugins");
  if (!s.refreshToken) return n("send", "host-injected token, scopes unknown here");
  if (s.clientId) return n("send", "third-party OAuth client");
  return n("skip_no_scope", "login token lacks user:plugins until its next refresh");
}
var ye = 1e4;
async function iOe(e, n, s = ye) {
  if (e?.aborted) return "send";
  let r = ke(n).catch(y => (t(`[plugins-scope] unexpected gate error: ${d(y)}`), "send")),
    p;
  if (!e) p = await je(r, s);else {
    let y,
      promise = new Promise(h => {
        y = () => h(void 0), e.addEventListener("abort", y, {
          once: !0
        });
      });
    try {
      p = await je(Promise.race([r, promise]), s);
    } finally {
      e.removeEventListener("abort", y);
    }
  }
  return p ?? "send";
}
import { createWriteStream as Ie } from "fs";
import { open as Oe, rm as ie, writeFile as Te } from "fs/promises";
import { Transform as De } from "stream";
import { pipeline as Ne } from "stream/promises";
function eRr(e) {
  let n = (r, p) => {
      let y = I_(r, p);
      return y.settings === null && r0e(y.errors).length > 0;
    },
    s = ["userSettings", "localSettings", "flagSettings"].some(item => {
      let p = fn(item);
      if (p === void 0) return !1;
      switch (item) {
        case "flagSettings":
          return n(p, bv() ?? rre());
        case "localSettings":
          {
            let y = wh();
            return n(p) || y !== void 0 && y !== p && n(y);
          }
        case "userSettings":
          return n(p);
      }
    });
  return Se(e) || une().length > 0 && eT() !== "helper" || s || AHo(e.settingKey) || ore() && eTe() || nR(e.policyKey) === "unregistered";
}
function tRr(e) {
  if (!Q5n(e.settingKey)) return !1;
  if (!e.isTierInPlay()) return !1;
  if (xe() !== "firstParty") return !1;
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  if (Bn()) return !1;
  if (Ya().source !== "claude.ai") return !1;
  if (At()) return !1;
  if (!Rw(e.policyKey)) return !1;
  return O(e);
}
function c8e() {
  return Ya().source === "claude.ai" && !Bn();
}
function O(e) {
  return E(e.flagName, !1) === !0;
}
function nRr(e) {
  return !eqn() && wWn(e);
}
function wWn(e) {
  let n = nR(e.policyKey);
  return n === "cache_miss" || n === "route_missing";
}
function Se(e) {
  let n = nR(e.policyKey);
  return !Q5n(e.settingKey) || n === "org_denied" || n === "latched";
}
function rRr(e) {
  let n = [...Vle(), me("userSettings")],
    s = nR(e.policyKey);
  return n.some(item => item?.[e.settingKey] === !1) || s === "org_denied" || s === "latched";
}
import { join as Ee, resolve as Re, sep as I } from "path";
import { sep as be } from "path";
function ZCr(e, n) {
  if (e.type !== n.type) return !1;
  let s = (r, p) => (r.if ?? "") === (p.if ?? "");
  switch (e.type) {
    case "command":
      {
        let r = Nj();
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
function he(e) {
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
function _e(e) {
  return e.map(item => ({
    matcher: item.matcher,
    hooks: item.hooks.map(item => item.hook).filter(item => item.type === "function")
  })).filter(item => item.hooks.length > 0);
}
class q {
  sessions = new Map();
  add(e, n, s, r, p) {
    this.addEntry(e, n, s, r, p?.onHookSuccess, p?.skillRoot, p?.personal === !0, p?.checkout === !0);
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
    let b = this.sessions.get(e) ?? {
        hooks: {}
      },
      w = b.hooks[n] || [],
      R = w.findIndex(item => item.matcher === matcher && item.skillRoot === skillRoot && item.personal === !0 === S && item.checkout === !0 === h),
      H;
    if (R >= 0) {
      H = [...w];
      let A = H[R],
        L = hook.type === "function" && hook.id ? A.hooks.findIndex(item => item.hook.type === "function" && item.hook.id === hook.id) : -1,
        hooks = L >= 0 ? A.hooks.with(L, {
          hook: hook,
          onHookSuccess: onHookSuccess
        }) : [...A.hooks, {
          hook: hook,
          onHookSuccess: onHookSuccess
        }];
      H[R] = {
        ...A,
        hooks: hooks
      };
    } else H = [...w, {
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
        ...b.hooks,
        [n]: H
      }
    }), we(this.sessions), IQ(), t(`Added session hook for event ${n} in session ${e}`);
  }
  remove(e, n, s) {
    let r = this.sessions.get(e);
    if (r) {
      let y = (r.hooks[n] || []).map(item => {
          let hooks_2 = item.hooks.filter(item => !ZCr(item.hook, s));
          return hooks_2.length > 0 ? {
            ...item,
            hooks: hooks_2
          } : null;
        }).filter(item => item !== null),
        hooks_3 = y.length > 0 ? {
          ...r.hooks,
          [n]: y
        } : {
          ...r.hooks
        };
      if (y.length === 0) delete hooks_3[n];
      this.sessions.set(e, {
        ...r,
        hooks: hooks_3
      }), IQ();
    }
    t(`Removed session hook for event ${n} in session ${e}`);
  }
  clear(e) {
    this.sessions.delete(e), IQ(), t(`Cleared all session hooks for session ${e}`);
  }
  get(e, n) {
    let s = new Map(),
      r = this.sessions.get(e);
    if (!r) return s;
    for (let p of n ? [n] : Xc) {
      let y = r.hooks[p];
      if (y) s.set(p, he(y));
    }
    return s;
  }
  getFunctionHooks(e, n) {
    let s = new Map(),
      r = this.sessions.get(e);
    if (!r) return s;
    for (let p of n ? [n] : Xc) {
      let y = r.hooks[p];
      if (y) {
        let S = _e(y);
        if (S.length > 0) s.set(p, S);
      }
    }
    return s;
  }
  getEntry(e, n, s, r) {
    let p = this.sessions.get(e)?.hooks[n];
    if (!p) return;
    for (let y of p) if (y.matcher === s || s === "") {
      let S = y.hooks.find(item => ZCr(item.hook, r));
      if (S) return S;
    }
    return;
  }
  has(e, n) {
    return this.sessions.get(e)?.hooks[n] !== void 0;
  }
}
var Pe = new z(() => new Set());
function D() {
  return ms(Pe);
}
function we(e) {
  fln(D(), e);
}
function bWn() {
  let e = [];
  for (let n of WXe(D())) for (let s of n.values()) for (let event of Xc) for (let p of s.hooks[event] ?? []) for (let {
    hook: hook_2
  } of p.hooks) if (hook_2.type !== "function") e.push({
    event: event,
    hook: hook_2,
    skillRoot: p.skillRoot
  });
  return e;
}
function Z(e) {
  if (e.size === 0) return 0;
  let n = 0;
  for (let s of WXe(D())) for (let [r, p] of s) {
    let hooks_4 = {},
      S = n;
    for (let h of Xc) {
      let b = [];
      for (let w of p.hooks[h] ?? []) if (w.skillRoot !== void 0 && e.has(w.skillRoot)) n += w.hooks.length;else b.push(w);
      if (b.length > 0) hooks_4[h] = b;
    }
    if (n > S) s.set(r, {
      ...p,
      hooks: hooks_4
    });
  }
  if (n > 0) IQ();
  return n;
}
function Hie() {
  return new q();
}
var Ae = {
  sync_off: e => `${e} sync is off (a setting or the organization's policy).`,
  account_change: () => "A sign-out, or a sign-in not verified as the same account.",
  skill_gone: () => "Those skills are gone from this account's list or from the disk."
};
function SWn(e) {
  let n = e + be,
    s = new Set();
  for (let {
    skillRoot: skillRoot_2
  } of bWn()) if (skillRoot_2?.startsWith(n)) s.add(skillRoot_2);
  return s;
}
function pnn(e, n, reason) {
  let count = Z(n);
  if (count === 0) return;
  t(`Hooks of ${e.hooksOf} removed: ${count}. ${Ae[reason](e.sync)}`), X("info", e.event, {
    count: count,
    reason: reason
  });
}
var Q = {
    sync: "Plugins",
    hooksOf: "synced plugins' skills",
    event: "plugins_sync_skill_hooks_removed"
  },
  ee = new z(() => new Set());
function ne() {
  try {
    let e = vf();
    return e === null ? void 0 : Re(Ee(e, Lj));
  } catch (error) {
    t(`The synced plugins' folder could not be made absolute (${k(error) ?? d(error)})`, {
      level: "error"
    });
    return;
  }
}
function dOs() {
  let e = ne();
  if (e !== void 0) ms(ee).add(e);
}
function N() {
  let e = new Set(ms(ee)),
    n = ne();
  if (n !== void 0) e.add(n);
  return e;
}
function fnn(e) {
  return e !== void 0 && Oi(e) === Pi;
}
function Hvo(e, n) {
  if (!fnn(e) || n === void 0) return [];
  return [...N()].filter(item => n.startsWith(item + I));
}
async function $vo() {
  try {
    return (await _D()) ?? YDs();
  } catch (error) {
    return l(error), null;
  }
}
function mnn(e, n) {
  let [s = ""] = n.slice(e.length + 1).split(I);
  return Zf(F9e(s));
}
function cOs(e, n, s) {
  try {
    let r = Hgn(),
      p = n.map(item => item + I + e).find(item => s.startsWith(item + I));
    if (r === null || r.bucket !== e || p === void 0) return;
    let y = mnn(p, s);
    return Array.from(r.dirsById.values()).some(item => item.has(y)) ? void 0 : "not_listed";
  } catch (error) {
    return X("warn", "plugins_sync_last_list_unreadable"), l(error), "list_unreadable";
  }
}
function uOs(e, n, s) {
  if (e === null) return "no_account";
  return n.some(item => s.startsWith(item + I + e + I)) ? void 0 : "other_account";
}
var G = {
  sync_off: "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy",
  other_account: "its plugin was synced for another account",
  no_account: "no account could be resolved for its synced plugin",
  not_listed: "the account's latest complete list of plugins does not hold its plugin's folder",
  list_unreadable: "this session's record of the account's plugins could not be read",
  no_folder: "its plugin's folder could not be found under the synced plugins' folder"
};
function rpt(e) {
  return G[e];
}
function pOs(e, reason_2, s) {
  let r = [...(s.hooks ? ["its hooks"] : []), ...(s.grant ? ["the tools its allowed-tools grants"] : [])].join(" and without ");
  t(`Plugin skill '${e}' runs without ${r}: ${G[reason_2]}.`, {
    level: "warn"
  }), X("info", "plugins_sync_skill_hooks_refused", {
    reason: reason_2
  });
}
function fOs(e, reason_3) {
  t(`Plugin command '${e}' was not run: ${G[reason_3]}.`, {
    level: "warn"
  }), X("info", "plugins_sync_command_refused", {
    reason: reason_3
  });
}
function oRr(e) {
  let n = new Set();
  for (let s of N()) for (let r of SWn(s)) n.add(r);
  pnn(Q, n, e);
}
function mOs({
  bucket: bucket,
  delistedDirs: delistedDirs,
  listedDirs: listedDirs
}) {
  try {
    let r = new Set();
    for (let p of N()) {
      let y = p + I + bucket;
      for (let S of SWn(y)) {
        let h = mnn(y, S);
        if (delistedDirs.has(h) && !listedDirs.has(h)) r.add(S);
      }
    }
    return pnn(Q, r, "skill_gone"), !0;
  } catch (error) {
    return X("warn", "plugins_sync_skill_hooks_removal_failed"), l(error), !1;
  }
}
var F = {
  settingKey: "syncClaudeAiPlugins",
  policyKey: "allow_account_plugins_sync",
  flagName: "tengu_claudeai_plugins_sync_enabled",
  isTierInPlay: () => Tve()
};
function vWn() {
  vee();
  let e = ve() && !PQ();
  return j2o(e), e;
}
function vee() {
  let e = eRr(F);
  if (W2o(e), e && iRr()) oRr("sync_off");
}
function kee() {
  return vee(), PQ();
}
function X0t() {
  return iRr();
}
function gOs() {
  return !X0t() && (kee() || wWn(F));
}
function hOs() {
  return xQ().length > 0 || gnn();
}
function gnn() {
  return kWn() || sRr();
}
function sRr() {
  return !kWn() && O(F) && c8e();
}
function Uvo() {
  return kWn() || c8e();
}
function J0t() {
  return O(F) && c8e() && Tve() && !kee();
}
function yOs() {
  return O(F);
}
function kWn() {
  return a.CLAUDE_CODE_SYNC_PLUGINS || a.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function opt() {
  return nRr(F);
}
function Tve() {
  return !xr("plugins") && nn("userSettings");
}
function ve() {
  return tRr(F);
}
function iRr() {
  return rRr(F);
}
function aRr(e, n) {
  if (!n.ok) return n.reason === "no-auth" ? {
    success: !1,
    error: n.detail,
    kind: "no_auth"
  } : {
    success: !1,
    error: n.reason,
    kind: "gated"
  };
  let s = EWn().safeParse(n.data);
  if (s.success) {
    let r = s.data.error.type ?? "error_envelope_no_type";
    return X("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", {
      serverError: r,
      status: n.status
    }), {
      success: !1,
      error: r,
      kind: "server_error",
      status: n.status
    };
  }
  return X("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed"), {
    success: !1,
    error: `malformed list-${e} response`,
    kind: "malformed"
  };
}
function lRr(e) {
  let {
      kind: kind,
      message: s
    } = pi(e),
    errno = Ude(k(e));
  return {
    success: !1,
    error: s,
    kind: kind,
    ...(errno !== void 0 && {
      errno: errno
    })
  };
}
function oX(e) {
  return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error";
}
function u8e(e) {
  return e.status === 403 || e.kind === "no_scope" || oX(e);
}
function p8e(e) {
  return {
    kind: c(e.kind),
    ...(e.status !== void 0 && {
      status: e.status
    }),
    ...(e.errno !== void 0 && {
      errno: e.errno
    })
  };
}
var EWn = f(() => St({
  error: St({
    type: ge().optional(),
    message: ge().nullish().catch(void 0)
  })
}));
function TWn(e) {
  try {
    let n = EWn().safeParse(J(e.toString("utf8", 0, 2048)));
    if (n.success) return n.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
var Fe = f(() => u({
    type: C("command"),
    command: o(),
    args: T(o()).nullish(),
    if: o().nullish(),
    shell: o().nullish(),
    timeout: v().nullish(),
    on_failure: U(["continue", "block"]).nullish().catch("block"),
    status_message: o().nullish(),
    once: M().nullish(),
    async: M().nullish(),
    async_rewake: M().nullish(),
    rewake_message: o().nullish(),
    rewake_summary: o().nullish()
  })),
  Le = f(() => T(u({
    event: o(),
    matchers: T(u({
      matcher: o().nullish(),
      hooks: T(oe())
    }))
  })));
function te(e) {
  if (!Array.isArray(e.hook_modules) || e.hook_modules.length > 0) return;
  let n = Le().safeParse(e.hooks === null ? [] : e.hooks);
  if (!n.success) return;
  let s = {},
    unknownEvents = 0,
    p = !1,
    y = Xc;
  for (let {
    event: event_2,
    matchers: matchers
  } of n.data) {
    if (!y.includes(event_2)) {
      unknownEvents += matchers.reduce((acc, item) => acc + item.hooks.length, 0);
      continue;
    }
    for (let {
      matcher: matcher_2,
      hooks: hooks_5
    } of matchers) {
      let hooks_6 = hooks_5.flatMap(item => {
        let x = Fe().safeParse(item);
        if (!x.success) return p = !0, [];
        let P = x.data;
        return [{
          type: "command",
          command: P.command,
          ...(P.args != null && {
            args: P.args
          }),
          ...(P.if != null && {
            if: P.if
          }),
          ...(P.shell != null && {
            shell: P.shell
          }),
          ...(P.timeout != null && {
            timeout: P.timeout
          }),
          ...(P.on_failure != null && {
            onFailure: P.on_failure
          }),
          ...(P.status_message != null && {
            statusMessage: P.status_message
          }),
          ...(P.once != null && {
            once: P.once
          }),
          ...(P.async != null && {
            async: P.async
          }),
          ...(P.async_rewake != null && {
            asyncRewake: P.async_rewake
          }),
          ...(P.rewake_message != null && {
            rewakeMessage: P.rewake_message
          }),
          ...(P.rewake_summary != null && {
            rewakeSummary: P.rewake_summary
          })
        }];
      });
      if (hooks_6.length > 0) (s[event_2] ??= []).push({
        ...(matcher_2 != null && {
          matcher: matcher_2
        }),
        hooks: hooks_6
      });
    }
  }
  let S = E4().safeParse(s);
  if (!S.success) return;
  let h = {
    hooks: S.data,
    unknownEvents: unknownEvents
  };
  return p ? {
    ...h,
    hasOtherKinds: !0
  } : h;
}
function se(e, {
  components = !1
} = {}) {
  let installationPreference = LPr(e.installation_preference);
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
    ...(typeof e.presents_as === "string" && e.presents_as && {
      presentsAs: e.presents_as
    }),
    ...(components && Array.isArray(e.components) && {
      components: e.components.flatMap(item => {
        let p = Me().safeParse(item);
        if (!p.success) return [];
        let {
          type: type,
          name: name,
          description: description
        } = p.data;
        return [{
          type: type,
          name: name,
          ...(description != null && {
            description: description
          })
        }];
      })
    })
  };
}
var Me = f(() => u({
  type: o(),
  name: o(),
  description: o().nullish()
}));
function re(e) {
  return e.enabled !== !1;
}
function CWn(e) {
  return e.map(item => _([item.pluginId, item.name, item.version, item.updatedAt])).toSorted().join(`
`);
}
var timeout = 1e4,
  timeout_2 = 60000,
  ue = 500,
  ae = 100,
  pages = 20,
  maxContentLength = Cve;
function Ue() {
  return a.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? timeout_2;
}
var ce = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true",
  Ge = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=false",
  de = "&include_component_details=true&include_hooks=true",
  $e = "&wrapped_skills_as_plugins=true",
  Go = {
    list: j(`${ce}${de}`, 0),
    hooks: j(Ge, 0)
  };
async function Be(e) {
  let n = await e();
  if (n.ok) return n;
  return await Y(ue), e();
}
async function f8e(e = {}) {
  let n = await Ke(`${ce}${e.componentDetails === !0 ? de : ""}${e.convertedSkillsAsPlugins === !0 ? $e : ""}`, e);
  return n.success ? {
    success: !0,
    plugins: n.rows.map(item => se(item, {
      components: e.componentDetails === !0
    })),
    ...(n.degraded && {
      degraded: n.degraded
    }),
    ...(e.componentDetails === !0 && !Ve() && {
      hooks: new Map(n.rows.flatMap(item => {
        let r = We(item) ? void 0 : te(item);
        return r === void 0 ? [] : [[item.id, r]];
      }))
    })
  } : n;
}
async function Ke(e, n) {
  if ((await iOe(n.signal, n.credentials)) === "skip_no_scope") return {
    success: !1,
    error: "claude.ai login lacks the user:plugins scope in this session",
    kind: "no_scope"
  };
  let r = await le(e, n);
  if (r.success || r.status === 403) return r;
  await Y(ue);
  let p = await le(e, n);
  return !p.success && oX(p) && !oX(r) ? {
    success: !1,
    error: p.error,
    kind: p.kind
  } : p;
}
async function le(e, n) {
  let rows = [],
    degraded = !1;
  try {
    for (let p = 0; p < pages; p++) {
      let y = await Gt.get(j(e, p), {
        auth: "teleport-org",
        isBackground: n.isBackground,
        timeout: timeout,
        credentials: n.credentials,
        earlyAnswer: n.earlyAnswer
      });
      if (!y.ok || !Array.isArray(y.data?.plugins)) {
        let S = aRr("plugins", y);
        return p > 0 && oX(S) ? {
          success: !1,
          error: S.error,
          kind: S.kind
        } : S;
      }
      if (rows.push(...y.data.plugins.filter(re)), degraded ||= y.data.degraded === !0, y.data.has_more !== !0) return {
        success: !0,
        rows: rows,
        ...(degraded && {
          degraded: degraded
        })
      };
    }
    return X("warn", "plugins_sync_list_page_cap", {
      pages: pages,
      collected: rows.length
    }), {
      success: !1,
      error: `list-plugins page cap (${pages}) exceeded`,
      kind: "page_cap"
    };
  } catch (error) {
    return lRr(error);
  }
}
function Ve() {
  let e = nR("allow_account_plugins_sync"),
    n = e === "cache_miss" || e === "route_missing";
  return vee(), PQ() || e !== null && !(n && eqn());
}
function We(e) {
  return e.enabled !== !0 || e.skills_display_degraded === !0;
}
function Bvo(e, n) {
  let s = [];
  if (n) s.push(`version=${encodeURIComponent(n)}`);
  if (a.CLAUDE_CODE_CCR_SURFACE === "tag") s.push("included_default_marketplaces=claude-tag-plugins");
  let r = s.length > 0 ? `?${s.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${r}`;
}
async function dRr(e, n, s, r = {}) {
  return Be(() => Ye(e, n, s, r));
}
async function Ye(e, n, s, r) {
  let p = Bvo(e, s);
  if (a.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return qe(p, n, r);
  let bodyLen = 0,
    S = !1;
  try {
    let H = function () {
        S = !0, R.destroy(Error("plugin download stream stalled"));
      },
      h = await Gt.get(p, {
        auth: "teleport-org",
        isBackground: r.isBackground,
        timeout: timeout_2,
        responseType: "stream",
        credentials: r.credentials
      });
    if (!h.ok || !h.data) {
      let reason_4 = h.ok ? "empty_body" : h.reason;
      return X("warn", "plugins_sync_download_not_ok", {
        reason: reason_4
      }), {
        ok: !1,
        reason: reason_4
      };
    }
    let b = Ue(),
      w,
      R = new De({
        transform(P, on, W) {
          if (clearTimeout(w), w = setTimeout(H, b), bodyLen += P.length, bodyLen > maxContentLength) W(Error("plugin zip exceeds download byte cap"));else W(null, P);
        },
        flush(P) {
          clearTimeout(w), P();
        }
      });
    w = setTimeout(H, b);
    try {
      await Ne(h.data, R, Ie(n));
    } finally {
      clearTimeout(w);
    }
    let A = Buffer.alloc(2048),
      L = await Oe(n, "r"),
      x;
    try {
      x = (await L.read(A, 0, A.length, 0)).bytesRead;
    } finally {
      await L.close();
    }
    if (x < 2 || A[0] !== 80 || A[1] !== 75) {
      await ie(n, {
        force: !0
      });
      let P = x === 0 ? "empty_body" : TWn(A.subarray(0, x));
      return X("warn", "plugins_sync_download_not_zip", {
        serverError: P,
        bodyLen: bodyLen
      }), {
        ok: !1,
        reason: P
      };
    }
    return {
      ok: !0
    };
  } catch (error) {
    await ie(n, {
      force: !0
    }).catch(() => {});
    let b = error?.response?.data;
    if (b !== null && typeof b === "object" && "destroy" in b && typeof b.destroy === "function") b.destroy();
    let w = error !== null && typeof error === "object" && "code" in error ? error.code : void 0,
      R = S ? "timeout" : bodyLen > maxContentLength ? "too_large" : w === "ECONNRESET" || w === "EPIPE" || w === "ETIMEDOUT" ? "network" : pi(error).kind;
    return X("warn", "plugins_sync_download_exception", {
      kind: R
    }), {
      ok: !1,
      reason: R
    };
  }
}
async function qe(e, n, s) {
  try {
    let r = await Gt.get(e, {
      auth: "teleport-org",
      isBackground: s.isBackground,
      timeout: timeout_2,
      responseType: "arraybuffer",
      maxContentLength: maxContentLength,
      credentials: s.credentials
    });
    if (!r.ok || !r.data) {
      let reason_5 = r.ok ? "empty_body" : r.reason;
      return X("warn", "plugins_sync_download_not_ok", {
        reason: reason_5
      }), {
        ok: !1,
        reason: reason_5
      };
    }
    let p = Buffer.from(r.data);
    if (p.length < 2 || p[0] !== 80 || p[1] !== 75) {
      let y = p.length === 0 ? "empty_body" : TWn(p);
      return X("warn", "plugins_sync_download_not_zip", {
        serverError: y,
        bodyLen: p.length
      }), {
        ok: !1,
        reason: y
      };
    }
    return await Te(n, p), {
      ok: !0
    };
  } catch (error) {
    let {
      kind: p
    } = pi(error);
    return X("warn", "plugins_sync_download_exception", {
      kind: p
    }), {
      ok: !1,
      reason: p
    };
  }
}
function j(e, n) {
  return `${e}&limit=${ae}&offset=${n * ae}`;
}
function bBe(e) {
  let sessionRefsGate = e.sessionRefsGate;
  if (sessionRefsGate.ccrSessionID() === void 0) {
    let CLAUDE_CODE_SESSION_ID = a.CLAUDE_CODE_SESSION_ID;
    if (CLAUDE_CODE_SESSION_ID && er(CLAUDE_CODE_SESSION_ID) !== CLAUDE_CODE_SESSION_ID) sessionRefsGate.latchCcrSessionID(CLAUDE_CODE_SESSION_ID);
  }
  return sessionRefsGate.ccrSessionID();
}
function Xe(e) {
  return bBe(e) !== void 0;
}
function sO(e) {
  let n = e.sessionRefsGate.syncEnabled();
  if (n !== void 0) return n;
  return e.sessionRefsGate.latchSyncEnabled(!!a.CLAUDE_CODE_SYNC_SESSION_REFS && Xe(e));
}
var Ze = f(() => {
    let e = ge().nullish().transform(r => r ?? ""),
      n = St({
        id: e,
        name: e,
        description: e,
        version: e,
        directory: e,
        marketplace_name: ge().nullish().catch(void 0),
        is_official: Vo().nullish().catch(void 0)
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
      s = sr(n).nullish().transform(r => r ?? []);
    return St({
      skills: s,
      plugins: s
    }).strict();
  }),
  timeout_3 = 30000,
  Qe = 500;
class pe {
  inflight = null;
  featureEventReported = new Set();
  startupResponse = null;
  fetch() {
    if (!this.inflight) {
      let e = en().finally(() => {
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
    let p = await (startup ? this.startupResponse ??= this.fetch() : this.fetch());
    if (!p.ok) {
      if (i(e === "skills" ? "tengu_skills_sync_manifest_failed" : "tengu_plugins_sync_manifest_failed", {
        unavailable: p.reason === "unavailable"
      }), r) m(s, p.reason);
      return {
        success: !1,
        error: `manifest ${p.reason}`,
        kind: "manifest"
      };
    }
    if (r) g(s);
    return {
      success: !0,
      entries: p[e]
    };
  }
}
var SBe = new at(() => new pe());
async function en() {
  let e = await fe();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return await Y(Qe), fe();
}
async function fe() {
  try {
    let e = await Gt.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: timeout_3,
      validateStatus: () => !0
    });
    if (!e.ok) {
      if (e.reason === "no-auth") return X("warn", "session_refs_manifest_no_auth"), {
        ok: !1,
        reason: "no_auth"
      };
      return X("warn", "session_refs_manifest_gated", {
        reason: e.reason
      }), {
        ok: !1,
        reason: "gated"
      };
    }
    if (e.status === 503) return X("warn", "session_refs_manifest_unavailable"), {
      ok: !1,
      reason: "unavailable"
    };
    if (e.status >= 300) return X("warn", "session_refs_manifest_http_error", {
      status: e.status
    }), {
      ok: !1,
      reason: "http_error"
    };
    let n = Ze().safeParse(e.data);
    if (!n.success) return X("warn", "session_refs_manifest_malformed"), {
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
    } = pi(error);
    return X("warn", "session_refs_manifest_exception", {
      kind: kind_2
    }), {
      ok: !1,
      reason: "transport"
    };
  }
}
function iOs(e) {
  return {
    skillId: e.id,
    name: e.name,
    description: e.description ?? "",
    source: e.source ?? "custom",
    updatedAt: e.updated_at ?? null,
    ...(typeof e.backing_plugin_id === "string" && Sae(e.backing_plugin_id) && {
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
function aOs(e) {
  if (typeof e.creator_type !== "string") return;
  if (e.creator_type === "anthropic") return "anthropic";
  if (e.is_shared === !0) return "shared";
  if (e.partition_by === "organization") return "org";
  let n = e.partition_by === "account";
  if (typeof e.backing_plugin_id === "string") return n ? "own" : "other";
  return n || e.partition_by == null ? "own" : "other";
}
function lOs(e) {
  return e.enabled !== !1;
}
var _Be = "collision-loser";
export { ZCr, bWn, Hie, SWn, pnn, eRr, tRr, c8e, nRr, wWn, rRr, iOs, aOs, lOs, _Be, dOs, fnn, Hvo, $vo, mnn, cOs, uOs, rpt, pOs, fOs, oRr, mOs, vWn, vee, kee, X0t, gOs, hOs, gnn, sRr, Uvo, J0t, yOs, kWn, opt, Tve, iRr, iOe, aRr, lRr, oX, u8e, p8e, EWn, TWn, CWn, f8e, Bvo, dRr, bBe, sO, SBe };