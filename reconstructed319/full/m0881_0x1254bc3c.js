// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Kie,
  Vzn,
  ALr,
  rP,
  zbt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  $o
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  yG
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  H1n,
  t9i,
  FD,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  un,
  Ym,
  ebt,
  be,
  mh
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  uNe
} from "B:/~BUN/root/chunk-sgy380eg.js";
import {
  XTs
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  VM,
  rZ,
  Uh
} from "B:/~BUN/root/chunk-27h4st9h.js";

function rIe() {
  let t = mh(),
    s = rZ.flatMap((e) => Uh(e).errors.map((i) => i.file ? i : {
      ...i,
      file: VM(e)
    })),
    r = fe(),
    o = uNe.filter((e) => t.settings[e] === void 0 && r[e] !== FD[e] && t9i(e, r[e])).map((e) => ({
      file: yG(),
      path: e,
      message: H1n(e) ? "Not a valid value for this setting, so it is ignored and the setting counts as off" : "Not a valid value for this setting, so it is ignored and the setting counts as unset",
      severity: "warning",
      suggestion: "Set it with /config, or delete the key from this file"
    })),
    n = g3o();
  return {
    settings: t.settings,
    errors: [...t.errors, ...s, ...o, ...n.ignored, ...n.turnedOff]
  }
}
var c = new Set(Vzn);

function g3o() {
  let t = [],
    s = [],
    r = $o();
  for (let o of r) {
    if (!Kie(o)) continue;
    if (o === "projectSettings" && r.includes("userSettings") && Ym()) continue;
    let n = be(o)?.env ?? {},
      e = [],
      i = [];
    for (let a of Object.keys(n)) {
      let f = a.toUpperCase();
      if (!c.has(f)) continue;
      if (ALr(a, n[a], XTs)) i.push(a);
      else e.push(a)
    }
    let l = un(o),
      g = rP(o);
    if (e.length > 0) t.push({
      file: l,
      path: "env",
      message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`,
      severity: "warning",
      statusOnly: !0
    });
    if (i.length > 0) s.push({
      file: l,
      path: "env",
      message: `${g} turns telemetry off with these variables: ${i.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`,
      severity: "warning",
      statusOnly: !0
    })
  }
  return {
    ignored: t,
    turnedOff: s
  }
}

function Swn() {
  return ebt().filter((t) => !t.preserveOnWrite)
}

function iRt() {
  let t = un("localSettings");
  return [...rIe().errors.filter((r) => !r.mcpErrorMetadata && r.severity !== "warning" && r.file !== t && !zbt(r)), ...Swn()]
}
export {
  rIe,
  g3o,
  Swn,
  iRt
};
