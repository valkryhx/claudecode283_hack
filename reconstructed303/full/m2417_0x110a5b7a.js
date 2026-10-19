// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ve
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  at
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ci
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  vle
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  IJ
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  LMt,
  Uct,
  Ten
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  _1e,
  oPr
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  la,
  Xf
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  Ho,
  Ul
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  xce,
  lNe
} from "B:/~BUN/root/chunk-gz1fzwqn.js";
import {
  Dir,
  i9r,
  Lir,
  a9r
} from "B:/~BUN/root/chunk-d2xn6n8b.js";
import {
  o,
  u,
  De,
  $e,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  normalize as F,
  sep as A
} from "path";
var X = new Set(["canceled", "policy_pending", "egress_blocked", "essential_traffic", "unexpected", "credential_name", ...a9r]);
var G = new Set(["not_uploaded_here", ...i9r]),
  g = new at(() => ({
    last: Promise.resolve(),
    uploaded: new Set
  })),
  S = f(() => De({
    path: o().min(1).max(lNe)
  })),
  q = f(() => $e([u({
    ok: C(!0),
    file_id: o(),
    name: o()
  }), u({
    ok: C(!1),
    code: o().max(64)
  })]));
async function RZs(e, i, t, r, n) {
  let {
    path: s
  } = S().parse(e), d = g.of(t), m = () => y(s, i, t, r, n), p = d.last.then(m, m);
  d.last = p;
  let c = await p;
  if (c.ok) d.uploaded.add(c.file_id);
  return {
    summary: c.ok ? "uploaded" : `not uploaded: ${c.code}`,
    output: c
  }
}
var O = f(() => De({
    file_id: o().min(1).max(256)
  })),
  J = f(() => $e([u({
    ok: C(!0)
  }), u({
    ok: C(!1),
    code: o().max(64)
  })]));
async function AZs(e, i) {
  let {
    file_id: t
  } = O().parse(e);
  if (!g.of(i).uploaded.delete(t)) return {
    summary: "not deleted: not_uploaded_here",
    output: {
      ok: !1,
      code: "not_uploaded_here"
    }
  };
  let r = await Lir([t]);
  return r === void 0 ? {
    summary: "deleted",
    output: {
      ok: !0
    }
  } : {
    summary: `not deleted: ${r}`,
    output: {
      ok: !1,
      code: r
    }
  }
}
async function y(e, i, t, r, n) {
  if (i.aborted) return {
    ok: !1,
    code: "canceled"
  };
  let s = IJ() ? "policy_pending" : xce();
  if (s !== void 0) return {
    ok: !1,
    code: s
  };
  if (!vle()) return {
    ok: !1,
    code: "no_token"
  };
  let d = F(e),
    {
      realDirectory: m
    } = r;
  try {
    if (!_(d) && await Uct(d, d, {
        realDirectory: m
      }) === "credential_name") return {
      ok: !1,
      code: "credential_name"
    }
  } catch {
    return {
      ok: !1,
      code: "path_rejected"
    }
  }
  let p = await NSt(e, t, r, n);
  if (p === void 0) return {
    ok: !1,
    code: "path_rejected"
  };
  let c = await Uct(d, p, {
    attached: _(d) && _(p),
    realDirectory: m
  });
  if (c !== void 0) return {
    ok: !1,
    code: c === "credential_name" ? c : "path_rejected"
  };
  try {
    return await Dir(p, void 0, i)
  } catch (k) {
    if (Ve(k)) return {
      ok: !1,
      code: "canceled"
    };
    return l(k), {
      ok: !1,
      code: "unexpected"
    }
  }
}

function _(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) && T(e, _1e)
}
async function NSt(e, i, t, r) {
  let n;
  try {
    n = await t.localFileAt(e)
  } catch {
    return
  }
  return LMt(n) || P(e, n, r) || !await E(n, i, t) ? void 0 : n
}
async function E(e, i, {
  realDirectory: t,
  home: r
}) {
  if (await Ten(e, t)) return !1;
  if (a.CLAUDE_CODE_REMOTE && oPr.some((d) => T(e, d))) return !0;
  let n = i.project?.originalCwd;
  if (n === void 0 || n === "") return !1;
  let s = await t(r);
  if (s === void 0) return !1;
  return s !== n && !T(s, n) && T(e, n)
}

function P(e, i, t) {
  if (t === void 0) return !1;
  if (Ho(t, Xf) || Ul(t, Xf)) return !0;
  let r = [ci(e), ci(i)];
  if (r.some((n) => n.unresolved)) return !0;
  return r.some((n) => n.spellings.some((s) => la(s, t, "read", "deny") !== null || la(s, t, "read", "ask") !== null))
}

function T(e, i) {
  return e.startsWith(i + A)
}
export {
  RZs,
  AZs,
  NSt
};
