// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ojt, CVr, AVr, xVr, IVr, OVr, GVr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, v, B, wre } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { YY } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { b, jo, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { nn } from "B:/~BUN/root/chunk-zahshfs3.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { Ur } from "B:/~BUN/root/chunk-g2vddtj4.js";
import { es } from "B:/~BUN/root/chunk-8qv35yd7.js";
import { BJ } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { Ss, NBr } from "B:/~BUN/root/chunk-290k5gh5.js";
import { dh } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Fne, tj } from "B:/~BUN/root/chunk-t1t358ee.js";
import { tH, Jx } from "B:/~BUN/root/chunk-q42dvn02.js";
function Scn(r) {
  return b(r).replace(/[\u007f-\u009f]/g, e => "\\u" + e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"));
}
function g2o(r) {
  try {
    let e = r.trim(),
      i = e.startsWith("{") && e.endsWith("}"),
      a;
    if (i) {
      let o = ct(e);
      if (!o) return nn("Error: Invalid JSON provided to --settings");
      let contentHash = Scn(o);
      a = BJ("claude-settings", ".json", {
        contentHash: contentHash
      }), AVr(contentHash);
    } else {
      let {
          resolvedPath: resolvedPath
        } = jo(ce(), r),
        s;
      try {
        s = tj(resolvedPath, dh);
      } catch (error) {
        if (B(error)) return nn(`Error: Settings file not found: ${resolvedPath}`);
        if (v(error) === "ERR_FILE_TOO_LARGE") return nn(`Error: Settings file exceeds the ${dh / 1048576}MiB limit: ${resolvedPath}`);
        if (Fne(error) || wre(error)) return nn(`Error: Cannot use settings file (${l(error)}): ${resolvedPath}`);
        throw error;
      }
      a = resolvedPath, xVr(s);
    }
    CVr(a), Ss();
  } catch (error) {
    if (error instanceof Error) t(`Error processing --settings: ${l(error)}`, {
      level: "error"
    });
    return nn(`Error processing settings: ${l(error)}`);
  }
}
function h2o(r) {
  let e = ct(r.trim(), !1);
  if (!e || typeof e !== "object" || Array.isArray(e)) {
    t("--managed-settings ignored: invalid JSON object", {
      level: "warn"
    }), OVr(!0);
    return;
  }
  IVr(e), Ss();
}
function g(r) {
  try {
    let e = NBr(r);
    GVr(e), Ss();
  } catch (error) {
    if (error instanceof Error) t(`Invalid --setting-sources flag: ${l(error)}`, {
      level: "error"
    });
    return nn(`Error processing --setting-sources: ${l(error)}`);
  }
}
function kMr() {
  let r = performance.now();
  Ur("eagerLoadSettings_start");
  let e = tH("--settings");
  if (e) g2o(e);
  let i = tH("--managed-settings");
  if (i) h2o(i);
  eGn(), Ur("eagerLoadSettings_end"), es("settings_load_ms", performance.now() - r, r);
}
function eGn() {
  let r = tH("--setting-sources");
  if (r !== void 0) g(r);
  if (Jx("--restricted") || YY()) g(""), ojt(!0);
}
export { Scn, g2o, h2o, kMr, eGn };