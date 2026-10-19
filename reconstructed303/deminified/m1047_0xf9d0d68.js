// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Rr, kl } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { bqn, CM, lg, q1e, Rme, FX, OK, kD, _ke, kx, _mt, Rae, kqn, ww, HX, oA, ay, axo, ZNt } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { tt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var F = {
    low: "Quick, straightforward implementation",
    medium: "Balanced approach with standard testing",
    high: "Comprehensive implementation with extensive testing",
    xhigh: "Extended reasoning with thorough analysis (on supported models)",
    max: "Maximum capability with deepest reasoning (on supported models)"
  },
  lTt = "dynamic workflows on every task";
function KCn() {
  let e = tt(),
    t = CM(e),
    o = Rme(e);
  return `Usage: /effort [${o.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]

Effort levels:
` + o.map(item => `- ${item}: ${F[item]}
`).join("") + "- auto: Use the default effort level for your model" + (t ? `

Ultracode (any effort level, this session only):
- ultracode [on|off]: ${lTt}` : "");
}
function g(e) {
  let t = Rme(e),
    o = CM(e) ? ", ultracode [on|off]" : "";
  return `${t.join(", ")}, auto${o}`;
}
function dXr(e) {
  let t = e.toLowerCase();
  if (t === "auto" || t === "unset") return {
    value: void 0
  };
  let value = kD(e);
  return value ? {
    value: value
  } : null;
}
function R(settings) {
  if (!Rr()) return null;
  if (!kl()) return " (applied locally \u2014 this remote transport can\u2019t change the remote session\u2019s settings)";
  return Rr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: settings
  }).catch(l), null;
}
function cXr() {
  return Rr() !== null && kl();
}
function w(e) {
  return cXr() ? e.ultracodeConfirmed ?? !1 : void 0;
}
function O(effortLevel, t) {
  let o = Rr();
  if (!o) return null;
  if (!kl()) return R({
    effortLevel: effortLevel,
    ultracode: !1
  });
  return o.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: effortLevel,
      ultracode: !1
    }
  }).then(() => t === !0 ? o.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      ultracode: !0
    }
  }) : void 0).catch(l), null;
}
async function D(e, t, o, r, s) {
  let f = tt(),
    value_2 = typeof e === "string" ? FX(e, f) : e,
    E = value_2 !== e,
    d = o && !E,
    u = _ke(value_2);
  if (kl() && u === void 0) return {
    message: `${value_2} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
  };
  let p = HX(value_2, f, d, s);
  r?.({
    value: value_2
  });
  let ultracode = w(t),
    h = ultracode === !1 && t.ultracode === !0;
  if (ultracode !== void 0 && ultracode !== (t.ultracode === !0)) r?.({
    ultracode: ultracode
  });
  let y = O(u ?? null, ultracode),
    C = await p;
  if (C) return {
    message: `Failed to set effort level: ${C.message}`
  };
  i("tengu_effort_command", {
    effort: typeof value_2 === "number" ? value_2 : c(value_2),
    from_level: pe(ay(f, t.effort)),
    route: c(t.route),
    is_remote: Rr() !== null
  });
  let U = Rr() ? void 0 : kx();
  if (U !== void 0 && U !== value_2) {
    let CLAUDE_CODE_EFFORT_LEVEL = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (u === void 0) return {
      message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session, and ${OK(value_2)} is session-only (nothing saved)`,
      effortUpdate: {
        value: value_2
      }
    };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL} overrides this session \u2014 clear it and ${OK(value_2)} takes over`,
      effortUpdate: {
        value: value_2
      }
    };
  }
  let _ = axo(value_2),
    L = kqn(f),
    S = u !== void 0 && d && !Rr() ? L !== null ? ` (saved, though your organization starts new sessions on ${f} at ${L} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (E) return {
    message: `Effort '${e}' exceeds the cap for ${f} set by your settings or organization; set to '${value_2}' instead${S}: ${_}${h ? " \xB7 Ultracode off" : ""}${y ?? ""}`,
    effortUpdate: {
      value: value_2
    }
  };
  return {
    message: `Set effort level to ${OK(value_2)}${S}: ${_}${h ? " \xB7 Ultracode off" : ""}${y ?? ""}`,
    effortUpdate: {
      value: value_2
    }
  };
}
function v(e) {
  let t = Rr() ? void 0 : kx();
  return t === null ? void 0 : t ?? e;
}
function YCn({
  asDefault: asDefault,
  levelChanged: levelChanged,
  chosen: chosen,
  model: model
}) {
  return asDefault && (levelChanged || v(chosen) !== void 0 || ZNt(model) === void 0);
}
function k4t(e, t, o) {
  let r = lg(o, t) ? " \xB7 Ultracode on" : "",
    s = v(e);
  if (s === void 0) {
    let n = oA(t, e),
      E = q1e(t) !== null && ZNt(t) === void 0 && ww(t, e) !== void 0 ? ", set by your organization" : "";
    return {
      message: `Effort level: auto (currently ${OK(n)}${E})${r}`
    };
  }
  let f = axo(s);
  return {
    message: `Current effort level: ${OK(s)} (${f})${r}`
  };
}
async function V(e, t, o, r) {
  o?.({
    value: void 0
  });
  let ultracode_2 = w(e),
    f = ultracode_2 === !1 && e.ultracode === !0;
  if (ultracode_2 !== void 0 && ultracode_2 !== (e.ultracode === !0)) o?.({
    ultracode: ultracode_2
  });
  let n = O(null, ultracode_2),
    E = await HX(void 0, tt(), t, r);
  if (E) return {
    message: `Failed to set effort level: ${E.message}`
  };
  i("tengu_effort_command", {
    effort: b("auto"),
    from_level: pe(ay(tt(), e.effort)),
    route: c(e.route),
    is_remote: Rr() !== null
  });
  let d = t ? "" : " (this session only)",
    u = Rr() ? void 0 : kx();
  if (u !== void 0 && u !== null) {
    let CLAUDE_CODE_EFFORT_LEVEL_2 = a.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL_2} still controls this session`,
      effortUpdate: {
        value: void 0
      }
    };
  }
  return {
    message: `Effort level set to auto${d}${f ? " \xB7 Ultracode off" : ""}${n ?? ""}`,
    effortUpdate: {
      value: void 0
    }
  };
}
function k(ultracode_3, t, o) {
  let r = tt();
  if (ultracode_3 && !CM()) return {
    message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(r)}`
  };
  if (ultracode_3 && !CM(r)) return {
    message: `Ultracode isn't available on ${r}. Valid options are: ${g(r)}`
  };
  o?.({
    ultracode: ultracode_3
  });
  let s = R({
    ultracode: ultracode_3
  });
  i("tengu_effort_command", {
    effort: ultracode_3 ? b("ultracode") : b("ultracode_off"),
    from_level: pe(ay(r, t.effort)),
    route: c(t.route),
    is_remote: Rr() !== null
  });
  let f = v(t.effort) ?? oA(r, t.effort);
  return {
    message: ultracode_3 ? `Ultracode on (this session only): ${lTt}. Effort stays ${f}.${s ?? ""}` : `Ultracode off. Effort stays ${f}.${s ?? ""}`,
    effortUpdate: {
      ultracode: ultracode_3
    }
  };
}
function A(e) {
  let [t, o, ...r] = e.split(/\s+/);
  if (t !== "ultracode" || r.length > 0) return;
  if (o === void 0 || o === "on") return !0;
  return o === "off" ? !1 : void 0;
}
async function P(e, t, o = !0, r, s) {
  let f = e.toLowerCase();
  if (f === "auto" || f === "unset") return V(t, o, r, s);
  let n = A(f);
  if (n !== void 0) return k(n, t, r);
  let E = kD(e);
  if (!E) return {
    message: `Invalid argument: ${e}. Valid options are: ${g(tt())}`
  };
  return D(E, t, o, r, s);
}
async function SNe(e, t, o, r = !0, s) {
  let f = !1,
    n = null,
    E = await P(e, t, r, d => {
      if (f = !0, d.ultracode === void 0) bqn();
      o(u => {
        n ??= {
          sessionEffort: u.sessionEffort,
          ultracode: u.ultracode ?? !1
        };
        let sessionEffort = d.ultracode === void 0 ? _mt(d.value) : u.sessionEffort,
          ultracode_4 = d.ultracode ?? u.ultracode ?? !1;
        if (Rae(u.sessionEffort, sessionEffort) && (u.ultracode ?? !1) === ultracode_4) return u;
        return {
          ...u,
          sessionEffort: sessionEffort,
          ultracode: ultracode_4
        };
      });
    }, s);
  if (f && !E.effortUpdate) o(d => {
    if (n === null) return d;
    if (Rae(d.sessionEffort, n.sessionEffort) && (d.ultracode ?? !1) === n.ultracode) return d;
    return {
      ...d,
      sessionEffort: n.sessionEffort,
      ultracode: n.ultracode
    };
  });
  return E;
}
export { lTt, KCn, dXr, cXr, YCn, k4t, SNe };