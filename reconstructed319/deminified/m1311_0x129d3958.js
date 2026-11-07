// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { rr, Tl } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { iRr, lRr, UF, wg, nQe, zCe, xse, xX, BF, cNe, kw, cFt, Pse, pRr, Ise, sQe, Cb, fTs, pFt, EHn } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { at } from "B:/~BUN/root/chunk-1ks9vs37.js";
var O = {
    low: "Quick, straightforward implementation",
    medium: "Balanced approach with standard testing",
    high: "Comprehensive implementation with extensive testing",
    xhigh: "Extended reasoning with thorough analysis (on supported models)",
    max: "Maximum capability with deepest reasoning (on supported models)"
  },
  RKt = "dynamic workflows on every task";
function T() {
  return "- auto: Use the default effort level for your model";
}
function pQn() {
  let e = at(),
    t = UF(e),
    n = zCe(e);
  return `Usage: /effort [${n.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]

Effort levels:
` + n.map(item => `- ${item}: ${O[item]}
`).join("") + T() + (t ? `

Ultracode (any effort level, this session only):
- ultracode [on|off]: ${RKt}` : "");
}
function g(e) {
  let t = zCe(e),
    n = UF(e) ? ", ultracode [on|off]" : "";
  return `${t.join(", ")}, auto${n}`;
}
function lVo({
  effortUpdate: effortUpdate
}) {
  return effortUpdate !== void 0 && effortUpdate.ultracode === void 0 && effortUpdate.value === void 0;
}
function A(e) {
  let t = e.toLowerCase();
  return t === "auto" || t === "unset" || lRr(t);
}
function dVo(e) {
  if (A(e)) return {
    value: void 0
  };
  let value = BF(e);
  return value ? {
    value: value
  } : null;
}
function k(settings) {
  if (!rr()) return null;
  if (!Tl()) return " (applied locally \u2014 this remote transport can\u2019t change the remote session\u2019s settings)";
  return rr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: settings
  }).catch(a), null;
}
function cVo() {
  return rr() !== null && Tl();
}
function R(e) {
  return cVo() ? e.ultracodeConfirmed ?? !1 : void 0;
}
function w(effortLevel, t) {
  let n = rr();
  if (!n) return null;
  if (!Tl()) return k({
    effortLevel: effortLevel,
    ultracode: !1
  });
  return n.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: effortLevel,
      ultracode: !1
    }
  }).then(() => t === !0 ? n.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      ultracode: !0
    }
  }) : void 0).catch(a), null;
}
async function D(e, t, n, r, s) {
  let u = at(),
    value_2 = typeof e === "string" ? xse(e, u) : e,
    E = value_2 !== e,
    c = n && !E,
    d = cNe(value_2);
  if (Tl() && d === void 0) return {
    message: `${value_2} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
  };
  let p = Ise(value_2, u, c, s);
  r?.({
    value: value_2
  });
  let ultracode = R(t),
    v = ultracode === !1 && t.ultracode === !0;
  if (ultracode !== void 0 && ultracode !== (t.ultracode === !0)) r?.({
    ultracode: ultracode
  });
  let y = w(d ?? null, ultracode),
    C = await p;
  if (C) return {
    message: `Failed to set effort level: ${C.message}`
  };
  l("tengu_effort_command", {
    effort: typeof value_2 === "number" ? value_2 : f(value_2),
    from_level: de(Cb(u, t.effort)),
    route: f(t.route),
    is_remote: rr() !== null
  });
  let S = rr() ? void 0 : kw();
  if (S !== void 0 && S !== value_2) {
    let CLAUDE_CODE_EFFORT_LEVEL = i.CLAUDE_CODE_EFFORT_LEVEL;
    if (d === void 0) return {
      message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session, and ${xX(value_2)} is session-only (nothing saved)`,
      effortUpdate: {
        value: value_2
      }
    };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL} overrides this session \u2014 clear it and ${xX(value_2)} takes over`,
      effortUpdate: {
        value: value_2
      }
    };
  }
  let _ = fTs(value_2),
    L = pRr(u),
    U = d !== void 0 && c && !rr() ? L !== null ? ` (saved, though your organization starts new sessions on ${u} at ${L} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (E) return {
    message: `Effort '${e}' exceeds the cap for ${u} set by your settings or organization; set to '${value_2}' instead${U}: ${_}${v ? " \xB7 Ultracode off" : ""}${y ?? ""}`,
    effortUpdate: {
      value: value_2
    }
  };
  return {
    message: `Set effort level to ${xX(value_2)}${U}: ${_}${v ? " \xB7 Ultracode off" : ""}${y ?? ""}`,
    effortUpdate: {
      value: value_2
    }
  };
}
function h(e) {
  let t = rr() ? void 0 : kw();
  return t === null ? void 0 : t ?? e;
}
function mQn({
  asDefault: asDefault,
  levelChanged: levelChanged,
  chosen: chosen,
  model: model
}) {
  return asDefault && (levelChanged || h(chosen) !== void 0 || pFt(model) === void 0);
}
function Q_n(e, t, n) {
  let r = wg(n, t) ? " \xB7 Ultracode on" : "",
    s = h(e);
  if (s === void 0) {
    let o = sQe(t, e);
    if (o === void 0) return {
      message: `Effort level: auto${r}`
    };
    let E = nQe(t) !== null && pFt(t) === void 0 ? ", set by your organization" : "";
    return {
      message: `Effort level: auto (currently ${xX(o)}${E})${r}`
    };
  }
  let u = fTs(s);
  return {
    message: `Current effort level: ${xX(s)} (${u})${r}`
  };
}
async function F(e, t, n, r) {
  n?.({
    value: void 0
  });
  let ultracode_2 = R(e),
    u = ultracode_2 === !1 && e.ultracode === !0;
  if (ultracode_2 !== void 0 && ultracode_2 !== (e.ultracode === !0)) n?.({
    ultracode: ultracode_2
  });
  let o = w(null, ultracode_2),
    E = await Ise(void 0, at(), t, r);
  if (E) return {
    message: `Failed to set effort level: ${E.message}`
  };
  l("tengu_effort_command", {
    effort: b("auto"),
    from_level: de(Cb(at(), e.effort)),
    route: f(e.route),
    is_remote: rr() !== null
  });
  let c = t ? "" : " (this session only)",
    d = rr() ? void 0 : kw();
  if (d !== void 0 && d !== null) {
    let CLAUDE_CODE_EFFORT_LEVEL_2 = i.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL_2} still controls this session`,
      effortUpdate: {
        value: void 0
      }
    };
  }
  return {
    message: `Effort level set to auto${c}${u ? " \xB7 Ultracode off" : ""}${o ?? ""}`,
    effortUpdate: {
      value: void 0
    }
  };
}
function V(ultracode_3, t, n) {
  let r = at();
  if (ultracode_3 && !UF()) return {
    message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(r)}`
  };
  if (ultracode_3 && !UF(r)) return {
    message: `Ultracode isn't available on ${r}. Valid options are: ${g(r)}`
  };
  n?.({
    ultracode: ultracode_3
  });
  let s = k({
    ultracode: ultracode_3
  });
  l("tengu_effort_command", {
    effort: ultracode_3 ? b("ultracode") : b("ultracode_off"),
    from_level: de(Cb(r, t.effort)),
    route: f(t.route),
    is_remote: rr() !== null
  });
  let u = EHn(t.effort, r) ?? h(t.effort) ?? sQe(r, t.effort) ?? "auto";
  return {
    message: ultracode_3 ? `Ultracode on (this session only): ${RKt}. Effort stays ${u}.${s ?? ""}` : `Ultracode off. Effort stays ${u}.${s ?? ""}`,
    effortUpdate: {
      ultracode: ultracode_3
    }
  };
}
function M(e) {
  let [t, n, ...r] = e.split(/\s+/);
  if (t !== "ultracode" || r.length > 0) return;
  if (n === void 0 || n === "on") return !0;
  return n === "off" ? !1 : void 0;
}
async function N(e, t, n = !0, r, s) {
  let u = e.toLowerCase();
  if (A(e)) return F(t, n, r, s);
  let o = M(u);
  if (o !== void 0) return V(o, t, r);
  let E = BF(e);
  if (!E) return {
    message: `Invalid argument: ${e}. Valid options are: ${g(at())}`
  };
  return D(E, t, n, r, s);
}
async function Fke(e, t, n, r = !0, s) {
  let u = !1,
    o = null,
    E = await N(e, t, r, c => {
      if (u = !0, c.ultracode === void 0) iRr();
      n(d => {
        o ??= {
          sessionEffort: d.sessionEffort,
          ultracode: d.ultracode ?? !1
        };
        let sessionEffort = c.ultracode === void 0 ? cFt(c.value) : d.sessionEffort,
          ultracode_4 = c.ultracode ?? d.ultracode ?? !1;
        if (Pse(d.sessionEffort, sessionEffort) && (d.ultracode ?? !1) === ultracode_4) return d;
        return {
          ...d,
          sessionEffort: sessionEffort,
          ultracode: ultracode_4
        };
      });
    }, s);
  if (u && !E.effortUpdate) n(c => {
    if (o === null) return c;
    if (Pse(c.sessionEffort, o.sessionEffort) && (c.ultracode ?? !1) === o.ultracode) return c;
    return {
      ...c,
      sessionEffort: o.sessionEffort,
      ultracode: o.ultracode
    };
  });
  return E;
}
export { RKt, pQn, lVo, dVo, cVo, mQn, Q_n, Fke };