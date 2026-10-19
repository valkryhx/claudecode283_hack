// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { freemem as o } from "os";
function sVr() {
  let e = E("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (e <= 0) return {
    lowMem: !1,
    level: void 0
  };
  if (I() !== "macos") return {
    lowMem: o() < e,
    level: void 0
  };
  let level = m();
  return {
    lowMem: level !== void 0 && level >= critical,
    level: level
  };
}
function Hye() {
  return sVr().lowMem;
}
var r = {
    normal: 1,
    warning: 2,
    critical: 4
  },
  critical = r.critical;
function m() {
  try {
    let e = Bun.ant.memoryPressureLevel();
    return e === null ? void 0 : r[e];
  } catch (error) {
    t(`bg low-mem: memoryPressureLevel failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
    return;
  }
}
function iVr() {
  return E("tengu_bg_attach_upgrade", !0);
}
export { sVr, Hye, iVr };