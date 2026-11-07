// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ln,
  XAe,
  vT
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t,
  _,
  Ri
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  ir,
  Kt,
  LA
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  un,
  ntt,
  XWn,
  TKe,
  CKe,
  JWn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  REr
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Ip,
  lz
} from "B:/~BUN/root/chunk-tdekz3md.js";
import {
  RP
} from "B:/~BUN/root/chunk-7e6w46ha.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
import {
  u,
  He,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
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
  return e ?? C(I)
}

function C(e) {
  return {
    userSettings: e("userSettings"),
    projectSettings: e("projectSettings"),
    localSettings: e("localSettings")
  }
}

function v(e) {
  return C((s) => Kt(s) ? j(e(s), s) : h)
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
      }), c("mcp_serve_tool_host_permission", "repo_rules_file_unread"), j(s.settingsOfTheOtherFile, e)
  }
}

function j(e, s) {
  let r = lz(e, s);
  return {
    deny: P(r, "deny"),
    ask: P(r, "ask")
  }
}

function P(e, s) {
  return e.filter((r) => r.ruleBehavior === s).map((r) => mn(r.ruleValue))
}
import {
  createHmac as M,
  randomBytes as K
} from "crypto";
var N = ["userSettings", ...LA];

function t4s() {
  return N.map((e) => [REr(e), e])
}
var U = 3,
  R = new W(() => ({
    held: void 0,
    takesSkipped: 0,
    judged: [],
    digestKey: K(32)
  }));

function n4s({
  guarded: e,
  accept: s,
  judged: r
}) {
  let o = R.of(H().host);
  if (e === !1) o.judged = [], o.takesSkipped = 0;
  if (e !== !0) {
    if (e === !1 && o.held !== void 0) {
      let {
        cache: f
      } = o.held;
      o.held = void 0, f.release(), g("ccs_settings_hold_let_go")
    }
    return {
      differs: [],
      judged: o.judged
    }
  }
  o.judged = r ?? o.judged, ir();
  let n = o.held;
  if (n !== void 0 && s === void 0) return n.noted = void 0, {
    differs: k(n, E(n), L()),
    judged: o.judged
  };
  let l, i, S;
  try {
    if (l = L(), i = E(n), n === void 0) {
      if (x(i)) return {
        differs: [],
        judged: o.judged
      };
      let f = JWn({
        files: i.files,
        also: ["userSettings"]
      });
      S = {
        ...i,
        cache: f,
        policy: l,
        taken: i.counts
      }
    } else {
      let f = s?.length ? n.noted : void 0;
      if (f === void 0 && !i.counts.every((F) => s?.some((O) => ln(O, F)) || n.taken.some((O) => ln(O, F)))) return c("ccs_settings_hold", "accept_out_of_date"), {
        differs: k(n, i, l),
        judged: o.judged
      };
      let y = f ?? i;
      if (x(y)) return {
        differs: k(n, i, l),
        judged: o.judged
      };
      n.cache.replace(y.files), S = {
        ...y,
        cache: n.cache,
        counts: n.counts.map((F) => D(s, F)),
        taken: y.counts,
        policy: D(s, n.policy)
      }
    }
  } catch (f) {
    throw m("ccs_settings_hold", "take_failed"), f
  }
  return o.held = S, g("ccs_settings_hold"), ir(), {
    differs: k(S, i, l),
    judged: o.judged
  }
}

function q() {
  return R.of(H().host).held?.rules
}

function Xqn(e) {
  let {
    held: s
  } = R.of(H().host);
  if (s === void 0) return;
  let r = s.paths[e],
    o = r === null ? void 0 : s.files.get(r);
  return o === void 0 ? null : Ri(o)
}

function E(e) {
  let s = TKe(),
    o = {
      userSettings: un("userSettings") ?? null,
      projectSettings: s.project ?? (e === void 0 ? un("projectSettings") ?? null : e.paths.projectSettings),
      localSettings: s.local,
      legacyLocal: s.legacy
    },
    n = new Map,
    l = new Map;
  for (let i of Object.values(o))
    if (i) l.set(i, XAe(i, n, vT(i)));
  return z(o, l, n)
}

function A({
  files: e
}) {
  return ![...e.values()].some((s) => s.failedForNow === !0)
}

function x(e) {
  let s = R.of(H().host);
  if (A(e)) return s.takesSkipped = 0, !1;
  if (s.takesSkipped++, s.takesSkipped >= U) return s.takesSkipped = 0, c("ccs_settings_hold", "held_as_it_read"), !1;
  return c("ccs_settings_hold", "read_failed_for_now"), !0
}

function z(e, s, r) {
  let o = CKe(s, ["userSettings"]),
    {
      digestKey: n
    } = R.of(H().host);
  return {
    paths: e,
    files: s,
    rules: v((l) => o.get(l)?.settings ?? null),
    counts: N.filter((l) => l !== "projectSettings" || e.projectSettings !== e.userSettings).map((l) => ({
      source: REr(l),
      digest: M("sha256", n).update(_((l === "userSettings" ? [e.userSettings] : l === "projectSettings" ? [e.projectSettings] : [e.localSettings, e.legacyLocal]).map((i) => i === null ? null : r.get(i)?.content ?? {
        errors: s.get(i)?.errors.map(({
          message: S
        }) => S)
      }))).digest("hex")
    }))
  }
}

function r4s() {
  let {
    held: e
  } = R.of(H().host);
  if (e === void 0) return;
  try {
    let s = E(e);
    e.noted = A(s) ? s : void 0
  } catch (s) {
    e.noted = void 0, a(s)
  }
}

function k(e, s, r) {
  return [...s.counts.filter((o) => !e.counts.some((n) => ln(n, o)) || !e.taken.some((n) => ln(n, o))), ...ln(e.policy, r) ? [] : [r]]
}

function D(e, s) {
  let r = e?.find((o) => o.source === s.source);
  return r === void 0 ? s : {
    ...s,
    digest: r.digest
  }
}

function L() {
  let {
    digestKey: e
  } = R.of(H().host);
  return {
    source: REr("policySettings"),
    digest: M("sha256", e).update(_(ntt().settings)).digest("hex")
  }
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
  }
}
async function V(e) {
  try {
    return await RP(), {
      repoRules: w(q())
    }
  } catch (s) {
    return t(`The repo's permission rules could not be read: ${d(s)}`, {
      level: "error"
    }), {
      refused: {
        cause: "repo_rules_read_failed",
        message: `${e} was not run: this server could not read the repository's permission rules to judge it.`
      }
    }
  }
}
export {
  t4s,
  n4s,
  Xqn,
  r4s,
  oPe
};
