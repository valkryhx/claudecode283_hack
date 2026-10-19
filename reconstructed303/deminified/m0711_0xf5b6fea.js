// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tx, S6, Ef } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { GQe, Qun, h8n, QM } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { bQ } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { xdn, Bzs, Mx, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { fn, Xy, DQe, me, Bm } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ike } from "B:/~BUN/root/chunk-gy660jgx.js";
import { _Po } from "B:/~BUN/root/chunk-429xgjya.js";
function Cbe() {
  let t = Bm(),
    i = S6.flatMap(item => Ef(item).errors.map(s => s.file ? s : {
      ...s,
      file: tx(item)
    })),
    r = ue(),
    o = Ike.filter(item => t.settings[item] === void 0 && r[item] !== Mx[item] && Bzs(item, r[item])).map(e => ({
      file: bQ(),
      path: e,
      message: xdn(e) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset",
      severity: "warning",
      suggestion: "Set it with /config, or delete the key from this file"
    })),
    n = Qeo();
  return {
    settings: t.settings,
    errors: [...t.errors, ...i, ...o, ...n.ignored, ...n.turnedOff]
  };
}
var c = new Set(Qun);
function Qeo() {
  let ignored = [],
    turnedOff = [],
    r = Wo();
  for (let o of r) {
    if (!GQe(o)) continue;
    if (o === "projectSettings" && r.includes("userSettings") && Xy()) continue;
    let n = me(o)?.env ?? {},
      e = [],
      s = [];
    for (let a of Object.keys(n)) {
      let f = a.toUpperCase();
      if (!c.has(f)) continue;
      if (h8n(a, n[a], _Po)) s.push(a);else e.push(a);
    }
    let file = fn(o),
      g = QM(o);
    if (e.length > 0) ignored.push({
      file: file,
      path: "env",
      message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`,
      severity: "warning",
      statusOnly: !0
    });
    if (s.length > 0) turnedOff.push({
      file: file,
      path: "env",
      message: `${g} turns telemetry off with these variables: ${s.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`,
      severity: "warning",
      statusOnly: !0
    });
  }
  return {
    ignored: ignored,
    turnedOff: turnedOff
  };
}
function l3t() {
  return DQe().filter(item => !item.preserveOnWrite);
}
function Sst() {
  let t = fn("localSettings");
  return [...Cbe().errors.filter(item => !item.mcpErrorMetadata && item.severity !== "warning" && item.file !== t), ...l3t()];
}
export { Cbe, Qeo, l3t, Sst };