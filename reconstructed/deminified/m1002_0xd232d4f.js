// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { rn, Mt } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Kt, BJ } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { FSe, Q7e, Xeo } from "B:/~BUN/root/chunk-r6beatp9.js";
import { fE } from "B:/~BUN/root/chunk-jr7rmyt0.js";
var gir = 20971520,
  timeoutMs = 60000,
  w = "HEAD",
  R = 16;
function s(stage, detail) {
  return {
    ok: !1,
    reason: "git_error",
    stage: stage,
    detail: detail
  };
}
function x(e, r) {
  return `${e} exited ${r ?? "with no status (killed, timed out, or not spawned)"}`;
}
async function ZZr({
  gitRoot: gitRoot,
  prerequisiteSha: prerequisiteSha,
  maxBytes = gir,
  signal: signal
}) {
  let l = Date.now(),
    f = await D({
      gitRoot: gitRoot,
      prerequisiteSha: prerequisiteSha,
      maxBytes: maxBytes,
      signal: signal
    }).catch(a => (d(a), s("threw", "unexpected throw")));
  return T(f, Date.now() - l), f;
}
async function D({
  gitRoot: gitRoot_2,
  prerequisiteSha: prerequisiteSha_2,
  maxBytes: maxBytes_2,
  signal: signal_2
}) {
  if (!rn.test(prerequisiteSha_2)) return s("arguments", "prerequisite is not an object id");
  if (!(maxBytes_2 > 0)) return s("arguments", "maxBytes is not a positive number");
  if (Mt(signal_2)) return {
    ok: !1,
    reason: "aborted"
  };
  let l = {
      gitRoot: gitRoot_2,
      signal: signal_2 ?? new AbortController().signal,
      timeoutMs: timeoutMs
    },
    f = await fE(l, ["rev-parse", "-q", "--verify", "HEAD"]),
    headSha = f.stdout.trim();
  if (f.exitCode !== 0 || !rn.test(headSha)) return Mt(signal_2) ? {
    ok: !1,
    reason: "aborted"
  } : s("head", "HEAD does not resolve");
  let [b, y] = await Promise.all([fE(l, ["rev-list", "--count", `${prerequisiteSha_2}..${headSha}`, "--"]), fE(l, ["merge-base", "--is-ancestor", prerequisiteSha_2, headSha])]);
  if (Mt(signal_2)) return {
    ok: !1,
    reason: "aborted"
  };
  if (y.exitCode === 1) return {
    ok: !1,
    reason: "not_ancestor"
  };
  let aheadCount = /^\d+$/.test(b.stdout.trim()) ? Number(b.stdout.trim()) : null;
  if (b.exitCode !== 0 || aheadCount === null || y.exitCode !== 0) return s("placement", `${x("rev-list", b.exitCode)}, ${x("merge-base", y.exitCode)}`);
  if (aheadCount === 0) return {
    ok: !1,
    reason: "not_diverged"
  };
  let h = await fE(l, ["rev-list", "--objects", "--disk-usage", headSha, `^${prerequisiteSha_2}`, "--"]);
  if (Mt(signal_2)) return {
    ok: !1,
    reason: "aborted"
  };
  let sizeBytes = /^\d+$/.test(h.stdout.trim()) ? Number(h.stdout.trim()) : null;
  if (h.exitCode === 0 && sizeBytes !== null && sizeBytes > R * maxBytes_2) return {
    ok: !1,
    reason: "too_large",
    sizeBytes: sizeBytes,
    aheadCount: aheadCount
  };
  let k = BJ("ccr-overlay", ".bundle");
  try {
    let O = await fE(l, ["bundle", "create", "--quiet", k, `^${prerequisiteSha_2}`, w, "--"]);
    if (Mt(signal_2)) return {
      ok: !1,
      reason: "aborted"
    };
    if (O.exitCode !== 0) return s("bundle_create", x("bundle create", O.exitCode));
    let u = await Q7e(k, maxBytes_2);
    if (u.kind === "too_large") return {
      ok: !1,
      reason: "too_large",
      sizeBytes: u.sizeBytes,
      aheadCount: aheadCount
    };
    let B = FSe(u.content);
    if (B === null) return s("header", "the bundle does not open with a well-formed header");
    let [E, ...A] = B.refs;
    if (E === void 0 || A.length > 0 || E.name !== w || E.id !== headSha) return s("header", "the bundle does not carry exactly HEAD at the id read before packing");
    if (Mt(signal_2)) return {
      ok: !1,
      reason: "aborted"
    };
    return {
      ok: !0,
      content: u.content,
      sizeBytes: u.content.length,
      sha256: Kt(u.content),
      headSha: headSha,
      prerequisiteSha: prerequisiteSha_2,
      prerequisites: B.prerequisites,
      aheadCount: aheadCount
    };
  } finally {
    await Xeo(k);
  }
}
function T(e, duration_ms) {
  let o = e.ok || e.reason === "too_large" ? e : null;
  if (i("tengu_ccr_overlay_bundle", {
    outcome: c(e.ok ? "bundle" : e.reason),
    stage: !e.ok && e.reason === "git_error" ? c(e.stage) : void 0,
    duration_ms: duration_ms,
    size_bytes: o?.sizeBytes,
    ahead: o?.aheadCount,
    prerequisite_count: e.ok ? e.prerequisites.length : void 0
  }), e.ok) {
    _("teleport_overlay_bundle");
    return;
  }
  if (t(`[overlayBundle] not created: ${e.reason}${e.reason === "git_error" ? ` (${e.stage}: ${e.detail})` : ""}`), e.reason === "aborted" || e.reason === "not_diverged" || e.reason === "not_ancestor") p("teleport_overlay_bundle", e.reason);else m("teleport_overlay_bundle", e.reason, {
    ...(e.reason === "git_error" && {
      stage: c(e.stage)
    })
  });
}
export { gir, ZZr };