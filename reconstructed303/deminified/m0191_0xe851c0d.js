// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { xgn, h2o, _2o, b2o, Gf, uP, S2o, w2o, cye, pjr } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, k, G, hV } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ja } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { cre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { _, _o, Kne, JB, d1r, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { bf, Yx } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { un } from "B:/~BUN/root/chunk-z1p6g436.js";
import { yv, aS } from "B:/~BUN/root/chunk-5ygt6t95.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { yo } from "B:/~BUN/root/chunk-9kme2ye7.js";
import { kr } from "B:/~BUN/root/chunk-t3p4x0tq.js";
import { X0e } from "B:/~BUN/root/chunk-wegca9zh.js";
import { dr, ZHo, ef } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { hQ, g$ } from "B:/~BUN/root/chunk-3rzwkd15.js";
var Lin = "apply-project-settings",
  S$s = "Review and accept settings changes for cloud sessions that use this computer";
function NIr(e = process.argv) {
  return e[2] === "apply-project-settings";
}
function lKn(e) {
  return _(e).replace(/[\u007f-\u009f]/g, r => "\\u" + r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"));
}
function AJs(e) {
  try {
    let r = e.trim(),
      i = r.startsWith("{") && r.endsWith("}"),
      a;
    if (i) {
      let n = pt(r);
      if (!n) return un("Error: Invalid JSON provided to --settings");
      let contentHash = lKn(n);
      a = X0e("claude-settings", ".json", {
        contentHash: contentHash
      }), _2o(contentHash);
    } else {
      let n = e,
        s = e,
        g;
      try {
        if (Yx(e)) n = _o(se(), e).resolvedPath, s = n;else {
          let o = JB(se(), e);
          n = o.resolvedPath, s = f(o.linksResolvedPath ?? o.resolvedPath);
        }
        g = g$(n, bf);
      } catch (error) {
        if (d1r(error)) return un(`Error: Cannot use settings file ${e}: ${d(error)}`);
        if (G(error)) return un(`Error: Settings file not found: ${n}`);
        if (k(error) === "ERR_FILE_TOO_LARGE") return un(`Error: Settings file exceeds the ${bf / 1048576}MiB limit: ${n}`);
        if (hQ(error) || hV(error)) return un(`Error: Cannot use settings file (${d(error)}): ${n}`);
        throw error;
      }
      a = s, b2o(g);
    }
    h2o(a), dr();
  } catch (error) {
    if (error instanceof Error) t(`Error processing --settings: ${d(error)}`, {
      level: "error"
    });
    return un(`Error processing settings: ${d(error)}`);
  }
}
function xJs(e) {
  let r = pt(e.trim(), !1);
  if (!r || typeof r !== "object" || Array.isArray(r)) {
    t("--managed-settings ignored: invalid JSON object", {
      level: "warn"
    }), w2o(!0);
    return;
  }
  S2o(r), dr();
}
function c(e) {
  try {
    let r = ZHo(e);
    pjr(r), dr();
  } catch (error) {
    if (error instanceof Error) t(`Invalid --setting-sources flag: ${d(error)}`, {
      level: "error"
    });
    return un(`Error processing --setting-sources: ${d(error)}`);
  }
}
function gPo() {
  let e = performance.now();
  yo("eagerLoadSettings_start");
  let r = yv("--settings");
  if (r) AJs(r);
  let i = yv("--managed-settings");
  if (i) xJs(i);
  FIr(), l(), yo("eagerLoadSettings_end"), kr("settings_load_ms", performance.now() - e, e);
}
function l() {
  let e = yv("--fast-mode");
  if (e !== "on" && e !== "off") return;
  uP({
    ...(Gf() ?? {}),
    fastMode: e === "on"
  }), dr();
}
function FIr() {
  let e = yv("--setting-sources");
  if (e !== void 0) c(e);
  if (aS("--restricted") || cre()) c(""), xgn(!0);
  if (NIr()) pjr(cye().filter(item => !ef.has(item))), dr();
}
function f(e) {
  if (Ja(e)) return e;
  try {
    let r = Kne(se(), e);
    return r.toLowerCase() === e.toLowerCase() ? r : e;
  } catch {
    return e;
  }
}
export { Lin, S$s, NIr, lKn, AJs, xJs, gPo, FIr };