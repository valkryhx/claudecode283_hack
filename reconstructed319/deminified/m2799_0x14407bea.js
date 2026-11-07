// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ln, XAe, vT } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { t, _, Ri } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ir, Kt, LA } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { un, ntt, XWn, TKe, CKe, JWn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { REr } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Ip, lz } from "B:/~BUN/root/chunk-tdekz3md.js";
import { RP } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { u, He, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var h = {
  deny: [],
  ask: []
};
function w(e) {
  if (Ip()) return {
    userSettings: h,
    projectSettings: h,
    localSettings: h
  };
  return e ?? C(I);
}
function C(e) {
  return {
    userSettings: e("userSettings"),
    projectSettings: e("projectSettings"),
    localSettings: e("localSettings")
  };
}
function v(e) {
  return C(s => Kt(s) ? j(e(s), s) : h);
}
function I(e) {
  if (!Kt(e)) return h;
  let s = XWn(e);
  switch (s.kind) {
    case "in_effect":
      return j(s.settings, e);
    case "unreadable_for_now":
      return j(s.settingsAsLastRead, e);
    case "some_do_not_load":
    case "unreadable":
      return t(`A settings file of ${e} did not load, so none of its permission rules apply`, {
        level: "warn"
      }), c("mcp_serve_tool_host_permission", "repo_rules_file_unread"), j(s.settingsOfTheOtherFile, e);
  }
}
function j(e, s) {
  let r = lz(e, s);
  return {
    deny: P(r, "deny"),
    ask: P(r, "ask")
  };
}
function P(e, s) {
  return e.filter(item => item.ruleBehavior === s).map(item => mn(item.ruleValue));
}
import { createHmac as M, randomBytes as K } from "crypto";
var N = ["userSettings", ...LA];
function t4s() {
  return N.map(item => [REr(item), item]);
}
var U = 3,
  R = new W(() => ({
    held: void 0,
    takesSkipped: 0,
    judged: [],
    digestKey: K(32)
  }));
function n4s({
  guarded: guarded,
  accept: accept,
  judged: judged
}) {
  let o = R.of(H().host);
  if (guarded === !1) o.judged = [], o.takesSkipped = 0;
  if (guarded !== !0) {
    if (guarded === !1 && o.held !== void 0) {
      let {
        cache: cache
      } = o.held;
      o.held = void 0, cache.release(), g("ccs_settings_hold_let_go");
    }
    return {
      differs: [],
      judged: o.judged
    };
  }
  o.judged = judged ?? o.judged, ir();
  let held = o.held;
  if (held !== void 0 && accept === void 0) return held.noted = void 0, {
    differs: k(held, E(held), L()),
    judged: o.judged
  };
  let policy, i, S;
  try {
    if (policy = L(), i = E(held), held === void 0) {
      if (x(i)) return {
        differs: [],
        judged: o.judged
      };
      let cache_2 = JWn({
        files: i.files,
        also: ["userSettings"]
      });
      S = {
        ...i,
        cache: cache_2,
        policy: policy,
        taken: i.counts
      };
    } else {
      let f = accept?.length ? held.noted : void 0;
      if (f === void 0 && !i.counts.every(item => accept?.some(O => ln(O, item)) || held.taken.some(O => ln(O, item)))) return c("ccs_settings_hold", "accept_out_of_date"), {
        differs: k(held, i, policy),
        judged: o.judged
      };
      let y = f ?? i;
      if (x(y)) return {
        differs: k(held, i, policy),
        judged: o.judged
      };
      held.cache.replace(y.files), S = {
        ...y,
        cache: held.cache,
        counts: held.counts.map(item => D(accept, item)),
        taken: y.counts,
        policy: D(accept, held.policy)
      };
    }
  } catch (error) {
    throw m("ccs_settings_hold", "take_failed"), error;
  }
  return o.held = S, g("ccs_settings_hold"), ir(), {
    differs: k(S, i, policy),
    judged: o.judged
  };
}
function q() {
  return R.of(H().host).held?.rules;
}
function Xqn(e) {
  let {
    held: held_2
  } = R.of(H().host);
  if (held_2 === void 0) return;
  let r = held_2.paths[e],
    o = r === null ? void 0 : held_2.files.get(r);
  return o === void 0 ? null : Ri(o);
}
function E(e) {
  let s = TKe(),
    o = {
      userSettings: un("userSettings") ?? null,
      projectSettings: s.project ?? (e === void 0 ? un("projectSettings") ?? null : e.paths.projectSettings),
      localSettings: s.local,
      legacyLocal: s.legacy
    },
    n = new Map(),
    l = new Map();
  for (let i of Object.values(o)) if (i) l.set(i, XAe(i, n, vT(i)));
  return z(o, l, n);
}
function A({
  files: files
}) {
  return ![...files.values()].some(item => item.failedForNow === !0);
}
function x(e) {
  let s = R.of(H().host);
  if (A(e)) return s.takesSkipped = 0, !1;
  if (s.takesSkipped++, s.takesSkipped >= U) return s.takesSkipped = 0, c("ccs_settings_hold", "held_as_it_read"), !1;
  return c("ccs_settings_hold", "read_failed_for_now"), !0;
}
function z(paths, files_2, r) {
  let o = CKe(files_2, ["userSettings"]),
    {
      digestKey: digestKey
    } = R.of(H().host);
  return {
    paths: paths,
    files: files_2,
    rules: v(l => o.get(l)?.settings ?? null),
    counts: N.filter(item => item !== "projectSettings" || paths.projectSettings !== paths.userSettings).map(item => ({
      source: REr(item),
      digest: M("sha256", digestKey).update(_((item === "userSettings" ? [paths.userSettings] : item === "projectSettings" ? [paths.projectSettings] : [paths.localSettings, paths.legacyLocal]).map(item => item === null ? null : r.get(item)?.content ?? {
        errors: files_2.get(item)?.errors.map(({
          message: message
        }) => message)
      }))).digest("hex")
    }))
  };
}
function r4s() {
  let {
    held: held_3
  } = R.of(H().host);
  if (held_3 === void 0) return;
  try {
    let s = E(held_3);
    held_3.noted = A(s) ? s : void 0;
  } catch (error) {
    held_3.noted = void 0, a(error);
  }
}
function k(e, s, r) {
  return [...s.counts.filter(item => !e.counts.some(n => ln(n, item)) || !e.taken.some(n => ln(n, item))), ...(ln(e.policy, r) ? [] : [r])];
}
function D(e, s) {
  let r = e?.find(o => o.source === s.source);
  return r === void 0 ? s : {
    ...s,
    digest: r.digest
  };
}
function L() {
  let {
    digestKey: digestKey_2
  } = R.of(H().host);
  return {
    source: REr("policySettings"),
    digest: M("sha256", digestKey_2).update(_(ntt().settings)).digest("hex")
  };
}
var b = "anthropic/repoRulesReadHere",
  Oe = {
    [b]: {
      v: 1
    }
  },
  B = p(() => u({
    [b]: He({
      v: T(1)
    })
  })),
  J = {
    repoRules: void 0
  };
function oPe(e, s) {
  if (!it(s) || !Object.hasOwn(s, b)) return J;
  return B().safeParse(s).success ? V(e) : {
    refused: {
      cause: "repo_rules_ask_malformed",
      message: `${e} was not run: its request asks this server to read the repository's permission rules in a form that this server does not know. Retrying won't help.`
    }
  };
}
async function V(e) {
  try {
    return await RP(), {
      repoRules: w(q())
    };
  } catch (error) {
    return t(`The repo's permission rules could not be read: ${d(error)}`, {
      level: "error"
    }), {
      refused: {
        cause: "repo_rules_read_failed",
        message: `${e} was not run: this server could not read the repository's permission rules to judge it.`
      }
    };
  }
}
export { t4s, n4s, Xqn, r4s, oPe };