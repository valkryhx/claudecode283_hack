// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  fs
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  la
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  rFt,
  NDo,
  BR,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  cUt,
  bmn,
  Smn,
  UI
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  wr,
  mC,
  W$t,
  he,
  yb
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  EMr
} from "B:/~BUN/root/chunk-ew8y0fm0.js";
import {
  bE,
  GW,
  wp
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  SCe
} from "B:/~BUN/root/chunk-4py062qg.js";

function Ooe() {
  let t = yb(),
    i = GW.flatMap((e) => wp(e).errors.map((s) => s.file ? s : {
      ...s,
      file: bE(e)
    })),
    r = le(),
    o = SCe.filter((e) => t.settings[e] === void 0 && r[e] !== BR[e] && NDo(e, r[e])).map((e) => ({
      file: la(),
      path: e,
      message: rFt(e) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset",
      severity: "warning",
      suggestion: "Set it with /config, or delete the key from this file"
    })),
    n = Lar();
  return {
    settings: t.settings,
    errors: [...t.errors, ...i, ...o, ...n.ignored, ...n.turnedOff]
  }
}
var c = new Set(bmn);

function Lar() {
  let t = [],
    i = [],
    r = fs();
  for (let o of r) {
    if (!cUt(o)) continue;
    if (o === "projectSettings" && r.includes("userSettings") && mC()) continue;
    let n = he(o)?.env ?? {},
      e = [],
      s = [];
    for (let a of Object.keys(n)) {
      let f = a.toUpperCase();
      if (!c.has(f)) continue;
      if (Smn(a, n[a], EMr)) s.push(a);
      else e.push(a)
    }
    let l = wr(o),
      g = UI(o);
    if (e.length > 0) t.push({
      file: l,
      path: "env",
      message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`,
      severity: "warning",
      statusOnly: !0
    });
    if (s.length > 0) i.push({
      file: l,
      path: "env",
      message: `${g} turns telemetry off with these variables: ${s.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`,
      severity: "warning",
      statusOnly: !0
    })
  }
  return {
    ignored: t,
    turnedOff: i
  }
}

function qwt() {
  return W$t().filter((t) => !t.preserveOnWrite)
}

function uze() {
  let t = wr("localSettings");
  return [...Ooe().errors.filter((r) => !r.mcpErrorMetadata && r.severity !== "warning" && r.file !== t), ...qwt()]
}
export {
  Ooe,
  Lar,
  qwt,
  uze
};
