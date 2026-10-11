// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ri, $m } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { i4 } from "B:/~BUN/root/chunk-brgnhyc0.js";
import { lstat as E, mkdir as h, stat as D } from "fs/promises";
import { dirname as p, join as W } from "path";
var dze = 90000,
  yar = "writer-locks",
  mode = 448;
function O(reason, r, i = !1) {
  let o = /^(E[A-Z0-9]+):/.exec(reason)?.[1];
  if (o !== void 0 && o !== "ENOENT") return {
    kind: "lost",
    reason: reason
  };
  if (r === "absent") return i ? "retake_stale" : "retake";
  return r === "present" ? {
    kind: "taken_over",
    reason: reason
  } : {
    kind: "lost",
    reason: reason
  };
}
function ito(n, r) {
  return W(p(n), yar, `${i4(r)}.writer`);
}
async function h3t({
  recordPath: recordPath,
  lockPath: r,
  onLost: onLost,
  staleMs: o = dze
}) {
  let a,
    m = !1,
    k = !1,
    d = Date.now(),
    u = !1,
    f = setInterval(() => {
      let e = Date.now();
      u ||= e - d > o, d = e;
    }, o / 2);
  f.unref();
  let w = e => {
      if (m) return;
      m = !0, clearInterval(f), t(`git sync writer lock ${e.kind === "taken_over" ? "taken over" : "lost"}: ${e.reason}`, {
        level: "warn"
      }), onLost(e);
    },
    _ = async () => (await h(p(r), {
      recursive: !0,
      mode: mode
    }), Ri(recordPath, {
      realpath: !1,
      retries: 0,
      stale: o,
      lockfilePath: r,
      onCompromised: e => void g(l(e))
    })),
    g = async reason_2 => {
      if (m || k) return;
      let L = u || Date.now() - d > o;
      u = !1, d = Date.now();
      let y = await E(r).then(() => "present", s => B(s) ? "absent" : "unknown"),
        c = O(reason_2, y, L);
      if (c !== "retake" && c !== "retake_stale") return w(c);
      try {
        let s = await _();
        if (a = s, t(`git sync writer lock re-taken (${reason_2}${c === "retake_stale" ? "; after a stall" : ""})`, {
          level: "warn"
        }), c === "retake_stale") onLost({
          kind: "retaken_after_stall",
          reason: reason_2
        });
        if (k) await $m(s, "git sync writer lock");
      } catch (error) {
        if (k) return;
        w(v(error) === "ELOCKED" ? {
          kind: "taken_over",
          reason: reason_2
        } : {
          kind: "lost",
          reason: l(error)
        });
      }
    };
  try {
    a = await _();
  } catch (error) {
    if (clearInterval(f), v(error) === "ELOCKED") return {
      kind: "other_writer",
      retryAtMs: await T(r, o)
    };
    throw error;
  }
  return {
    kind: "held",
    release: () => (k = !0, clearInterval(f), $m(() => a(), "git sync writer lock"))
  };
}
async function T(n, r) {
  let i = Date.now(),
    o = await D(n).then(a => a.mtimeMs, () => i - r);
  return Math.min(Math.max(i + 1000, o + r + 1), i + r);
}
export { dze, yar, ito, h3t };