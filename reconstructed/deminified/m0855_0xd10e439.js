// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { lr, va } from "B:/~BUN/root/chunk-339q6g5w.js";
import { it } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { W2n, tPo, _he, fx, mx, hCe, jHe, Ple, sq, g6, bhe, zHe, $F, v6e, RX, ocn, Aw, iq, gx, eMr } from "B:/~BUN/root/chunk-t1afcev5.js";
var U = {
  low: "Quick, straightforward implementation",
  medium: "Balanced approach with standard testing",
  high: "Comprehensive implementation with extensive testing",
  xhigh: `Extended reasoning with thorough analysis (${W2n})`,
  max: `Maximum capability with deepest reasoning (${tPo})`
};
function kKt() {
  let e = it(),
    t = fx(e),
    r = Ple(e);
  return `Usage: /effort [${r.join("|")}${t ? "|ultracode" : ""}|auto]

Effort levels:
` + r.map(item => `- ${item}: ${U[item]}
`).join("") + (t ? `- ultracode: xhigh + dynamic workflow orchestration (this session only)
` : "") + "- auto: Use the default effort level for your model";
}
function g(e) {
  let t = Ple(e),
    r = fx(e) ? ", ultracode" : "";
  return `${t.join(", ")}${r}, auto`;
}
function Wor(e, t) {
  let r = e.toLowerCase();
  if (r === "auto" || r === "unset") return {
    value: void 0
  };
  if (r === "ultracode" && fx(t)) return {
    value: "xhigh"
  };
  let value = bhe(e);
  return value ? {
    value: value
  } : null;
}
function p(e, ultracode = !1) {
  if (!lr()) return null;
  if (!va()) return " (applied locally \u2014 this remote transport can\u2019t change server effort)";
  return lr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: e ?? null,
      ultracode: ultracode
    }
  }).catch(d), null;
}
async function w(e, t, r, n) {
  let s = it(),
    value_2 = typeof e === "string" ? sq(e, s) : e,
    l = value_2 !== e,
    f = t && !l,
    E = zHe(value_2);
  if (va() && E === void 0) return {
    message: `${value_2} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
  };
  let m = iq(value_2, s, f, n);
  r?.({
    value: value_2,
    ultracode: !1
  });
  let u = p(E),
    h = await m;
  if (h) return {
    message: `Failed to set effort level: ${h.message}`
  };
  i("tengu_effort_command", {
    effort: typeof value_2 === "number" ? value_2 : c(value_2),
    is_remote: lr() !== null
  });
  let v = lr() ? void 0 : $F();
  if (v !== void 0 && v !== value_2) {
    let CLAUDE_CODE_EFFORT_LEVEL = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (E === void 0) return {
      message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session, and ${g6(value_2)} is session-only (nothing saved)`,
      effortUpdate: {
        value: value_2,
        ultracode: !1
      }
    };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL} overrides this session \u2014 clear it and ${g6(value_2)} takes over`,
      effortUpdate: {
        value: value_2,
        ultracode: !1
      }
    };
  }
  let L = eMr(value_2),
    _ = ocn(s),
    x = E !== void 0 && f && !lr() ? _ !== null ? ` (saved, though your organization starts new sessions on ${s} at ${_} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (l) return {
    message: `Effort '${e}' exceeds the cap for ${s} set by your settings or organization; set to '${value_2}' instead${x}: ${L}${u ?? ""}`,
    effortUpdate: {
      value: value_2,
      ultracode: !1
    }
  };
  return {
    message: `Set effort level to ${g6(value_2)}${x}: ${L}${u ?? ""}`,
    effortUpdate: {
      value: value_2,
      ultracode: !1
    }
  };
}
function hSt(e, t, r) {
  if (mx(t, e, r)) return {
    message: "Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)"
  };
  let n = lr() ? void 0 : $F(),
    s = n === null ? void 0 : n ?? e;
  if (s === void 0) {
    let l = gx(t, e),
      f = hCe(t) !== null && Aw(t, e) !== void 0 ? ", set by your organization" : "";
    return {
      message: `Effort level: auto (currently ${g6(l)}${f})`
    };
  }
  let o = eMr(s);
  return {
    message: `Current effort level: ${g6(s)} (${o})`
  };
}
async function O(e, t, r) {
  t?.({
    value: void 0,
    ultracode: !1
  });
  let n = p(void 0),
    s = await iq(void 0, it(), e, r);
  if (s) return {
    message: `Failed to set effort level: ${s.message}`
  };
  i("tengu_effort_command", {
    effort: y("auto"),
    is_remote: lr() !== null
  });
  let o = e ? "" : " (this session only)",
    l = lr() ? void 0 : $F();
  if (l !== void 0 && l !== null) {
    let CLAUDE_CODE_EFFORT_LEVEL_2 = a.CLAUDE_CODE_EFFORT_LEVEL;
    return {
      message: `${e ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${CLAUDE_CODE_EFFORT_LEVEL_2} still controls this session`,
      effortUpdate: {
        value: void 0,
        ultracode: !1
      }
    };
  }
  return {
    message: `Effort level set to auto${o}${n ?? ""}`,
    effortUpdate: {
      value: void 0,
      ultracode: !1
    }
  };
}
function R(e) {
  let t = it();
  if (!fx()) return {
    message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(t)}`
  };
  if (_he(t) && !jHe("xhigh", t)) return {
    message: `Ultracode runs at xhigh effort, which is above the effort cap for ${t} set by your settings or organization. Valid options are: ${g(t)}`
  };
  if (!fx(t)) return {
    message: `Ultracode runs at xhigh effort, which ${t} doesn't support \u2014 switch to an xhigh-capable model (${W2n}). Valid options are: ${g(t)}`
  };
  e?.({
    value: "xhigh",
    ultracode: !0
  });
  let r = p("xhigh", !0);
  i("tengu_effort_command", {
    effort: y("ultracode"),
    is_remote: lr() !== null
  });
  let n = lr() ? void 0 : $F();
  if (n !== void 0 && n !== "xhigh") return {
    message: `CLAUDE_CODE_EFFORT_LEVEL=${a.CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session \u2014 clear it and ultracode takes over`,
    effortUpdate: {
      value: "xhigh",
      ultracode: !0
    }
  };
  return {
    message: `Set effort level to ultracode (this session only): xhigh + dynamic workflow orchestration${r ?? ""}`,
    effortUpdate: {
      value: "xhigh",
      ultracode: !0
    }
  };
}
async function F(e, t = !0, r, n) {
  let s = e.toLowerCase();
  if (s === "auto" || s === "unset") return O(t, r, n);
  if (s === "ultracode") return R(r);
  let o = bhe(e);
  if (!o) return {
    message: `Invalid argument: ${e}. Valid options are: ${g(it())}`
  };
  return w(o, t, r, n);
}
async function kWe(e, t, r = !0, n) {
  let s = !1,
    o = null,
    l = await F(e, r, f => {
      s = !0;
      let sessionEffort = v6e(f.value),
        ultracode_2 = f.ultracode ?? !1;
      t(u => {
        if (o ??= {
          sessionEffort: u.sessionEffort,
          ultracode: u.ultracode ?? !1
        }, RX(u.sessionEffort, sessionEffort) && (u.ultracode ?? !1) === ultracode_2) return u;
        return {
          ...u,
          sessionEffort: sessionEffort,
          ultracode: ultracode_2
        };
      });
    }, n);
  if (s && !l.effortUpdate) t(f => {
    if (o === null) return f;
    if (RX(f.sessionEffort, o.sessionEffort) && (f.ultracode ?? !1) === o.ultracode) return f;
    return {
      ...f,
      sessionEffort: o.sessionEffort,
      ultracode: o.ultracode
    };
  });
  return l;
}
export { kKt, Wor, hSt, kWe };