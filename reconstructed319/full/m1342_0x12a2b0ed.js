// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pc,
  DC,
  ns
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Lt,
  tie
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  rr,
  Tl
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  qn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  ZWe
} from "B:/~BUN/root/chunk-kk81ayzj.js";
import {
  O9,
  Out,
  _Z,
  oTe,
  iMt,
  aMt,
  UDe,
  Iut,
  JXt
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  HQn
} from "B:/~BUN/root/chunk-zkczp8ny.js";
import {
  Gn
} from "B:/~BUN/root/chunk-zpne314q.js";
import {
  Zn
} from "B:/~BUN/root/chunk-12nc74pv.js";

function JVo(o, n = !1) {
  return `${iMt(o)} Run ${aMt(o)}${n?" in an interactive terminal session":""} to review and enable, then set it as the advisor.`
}

function dCt(o, n, f, u, t = !0, m = !1, r = []) {
  let d = Tl(),
    e = o === "off" ? void 0 : Gn(o),
    s = e === void 0 || Out(e);
  if (l("tengu_advisor_command", {
      advisor: e === void 0 ? b("off") : s ? Lt(o) : oTe(e) ? b("consent_pending") : b("invalid"),
      remote: d
    }), !d && rr()) return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let c = d ? " (this session only)" : t ? "" : " for this session \u2014 run /advisor in the terminal to change your default";
  if (e === void 0) {
    if (f((i) => i.advisorModel === void 0 ? i : {
        ...i,
        advisorModel: void 0
      }), d) rr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        advisorModel: null
      }
    }).catch(a);
    else if (S(""), t) qn("userSettings", {
      advisorModel: void 0
    }, void 0, u);
    return `Advisor disabled${c}${h(r,void 0,n)}`
  }
  if (!s) {
    if (oTe(e)) return JVo(e, m);
    let i = [..._Z(), "off"].join(", ");
    return `${Zn(tie(e))} cannot be used as an advisor. Valid options: ${i}`
  }
  if (f((i) => i.advisorModel === e ? i : {
      ...i,
      advisorModel: e
    }), d) rr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      advisorModel: e
    }
  }).catch(a);
  else if (S(e), t) qn("userSettings", {
    advisorModel: e
  }, void 0, u);
  let p = Zn(tie(e)),
    v = Zn(tie(n)),
    g = `Advisor set to ${p}${c}`;
  if (!O9(n)) g += `
Note: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`;
  else if (!UDe(n, e)) g += `
Note: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return g + h(r, e, n)
}

function h(o, n, f) {
  let u = ns(),
    t = u.advisorHeld ?? HQn(JXt(o));
  if (t === void 0) return "";
  if (t.refused) return n === void 0 ? "" : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = ZWe(u, f);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || t.inFallback !== !0 && t.model !== void 0)) return t.model !== void 0 && n !== void 0 && !y(n, t.model) ? `
The current conversation keeps ${Zn(tie(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let r = JXt(o),
    d = r !== void 0 && !r.available && r.toolChange && !r.byBase,
    e = t.standby === !0 && r === void 0,
    s = d || e ? void 0 : t.model;
  if (s === n || s !== void 0 && n !== void 0 && y(n, s)) return "";
  return `
The current conversation ${s===void 0?"runs without the advisor":`keeps ${Zn(tie(s))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`
}

function y(o, n) {
  return Iut(o, n)
}

function S(o) {
  DC({
    ...Pc() ?? {},
    advisorModel: o
  })
}
export {
  JVo,
  dCt
};
