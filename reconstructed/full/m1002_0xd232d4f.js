// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  rn,
  Mt
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Kt,
  BJ
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  FSe,
  Q7e,
  Xeo
} from "B:/~BUN/root/chunk-r6beatp9.js";
import {
  fE
} from "B:/~BUN/root/chunk-jr7rmyt0.js";
var gir = 20971520,
  C = 60000,
  w = "HEAD",
  R = 16;

function s(e, r) {
  return {
    ok: !1,
    reason: "git_error",
    stage: e,
    detail: r
  }
}

function x(e, r) {
  return `${e} exited ${r??"with no status (killed, timed out, or not spawned)"}`
}
async function ZZr({
  gitRoot: e,
  prerequisiteSha: r,
  maxBytes: o = gir,
  signal: n
}) {
  let l = Date.now(),
    f = await D({
      gitRoot: e,
      prerequisiteSha: r,
      maxBytes: o,
      signal: n
    }).catch((a) => (d(a), s("threw", "unexpected throw")));
  return T(f, Date.now() - l), f
}
async function D({
  gitRoot: e,
  prerequisiteSha: r,
  maxBytes: o,
  signal: n
}) {
  if (!rn.test(r)) return s("arguments", "prerequisite is not an object id");
  if (!(o > 0)) return s("arguments", "maxBytes is not a positive number");
  if (Mt(n)) return {
    ok: !1,
    reason: "aborted"
  };
  let l = {
      gitRoot: e,
      signal: n ?? new AbortController().signal,
      timeoutMs: C
    },
    f = await fE(l, ["rev-parse", "-q", "--verify", "HEAD"]),
    a = f.stdout.trim();
  if (f.exitCode !== 0 || !rn.test(a)) return Mt(n) ? {
    ok: !1,
    reason: "aborted"
  } : s("head", "HEAD does not resolve");
  let [b, y] = await Promise.all([fE(l, ["rev-list", "--count", `${r}..${a}`, "--"]), fE(l, ["merge-base", "--is-ancestor", r, a])]);
  if (Mt(n)) return {
    ok: !1,
    reason: "aborted"
  };
  if (y.exitCode === 1) return {
    ok: !1,
    reason: "not_ancestor"
  };
  let g = /^\d+$/.test(b.stdout.trim()) ? Number(b.stdout.trim()) : null;
  if (b.exitCode !== 0 || g === null || y.exitCode !== 0) return s("placement", `${x("rev-list",b.exitCode)}, ${x("merge-base",y.exitCode)}`);
  if (g === 0) return {
    ok: !1,
    reason: "not_diverged"
  };
  let h = await fE(l, ["rev-list", "--objects", "--disk-usage", a, `^${r}`, "--"]);
  if (Mt(n)) return {
    ok: !1,
    reason: "aborted"
  };
  let v = /^\d+$/.test(h.stdout.trim()) ? Number(h.stdout.trim()) : null;
  if (h.exitCode === 0 && v !== null && v > R * o) return {
    ok: !1,
    reason: "too_large",
    sizeBytes: v,
    aheadCount: g
  };
  let k = BJ("ccr-overlay", ".bundle");
  try {
    let O = await fE(l, ["bundle", "create", "--quiet", k, `^${r}`, w, "--"]);
    if (Mt(n)) return {
      ok: !1,
      reason: "aborted"
    };
    if (O.exitCode !== 0) return s("bundle_create", x("bundle create", O.exitCode));
    let u = await Q7e(k, o);
    if (u.kind === "too_large") return {
      ok: !1,
      reason: "too_large",
      sizeBytes: u.sizeBytes,
      aheadCount: g
    };
    let B = FSe(u.content);
    if (B === null) return s("header", "the bundle does not open with a well-formed header");
    let [E, ...A] = B.refs;
    if (E === void 0 || A.length > 0 || E.name !== w || E.id !== a) return s("header", "the bundle does not carry exactly HEAD at the id read before packing");
    if (Mt(n)) return {
      ok: !1,
      reason: "aborted"
    };
    return {
      ok: !0,
      content: u.content,
      sizeBytes: u.content.length,
      sha256: Kt(u.content),
      headSha: a,
      prerequisiteSha: r,
      prerequisites: B.prerequisites,
      aheadCount: g
    }
  } finally {
    await Xeo(k)
  }
}

function T(e, r) {
  let o = e.ok || e.reason === "too_large" ? e : null;
  if (i("tengu_ccr_overlay_bundle", {
      outcome: c(e.ok ? "bundle" : e.reason),
      stage: !e.ok && e.reason === "git_error" ? c(e.stage) : void 0,
      duration_ms: r,
      size_bytes: o?.sizeBytes,
      ahead: o?.aheadCount,
      prerequisite_count: e.ok ? e.prerequisites.length : void 0
    }), e.ok) {
    _("teleport_overlay_bundle");
    return
  }
  if (t(`[overlayBundle] not created: ${e.reason}${e.reason==="git_error"?` (${e.stage}: ${e.detail})`:""}`), e.reason === "aborted" || e.reason === "not_diverged" || e.reason === "not_ancestor") p("teleport_overlay_bundle", e.reason);
  else m("teleport_overlay_bundle", e.reason, {
    ...e.reason === "git_error" && {
      stage: c(e.stage)
    }
  })
}
export {
  gir,
  ZZr
};
