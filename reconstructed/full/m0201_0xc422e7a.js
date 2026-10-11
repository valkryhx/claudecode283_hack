// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  zNo
} from "B:/~BUN/root/chunk-4h4gje25.js";
import {
  n2,
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  b
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Ze
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  b0
} from "B:/~BUN/root/chunk-gj0n7q1s.js";
import {
  VCe,
  Cdt,
  Wd
} from "B:/~BUN/root/chunk-gsxez0fk.js";
var RR = 1e6;

function ax(e) {
  return e.getMessages?.() ?? e.messages
}

function oX(e) {
  return e.dispatchedOverBridge === !0 || e.submissionVerifiedSlackHumanTurn === !0
}

function zin(e) {
  return e.submittedOnLocalStdin === !0 && !oX(e)
}

function nle(e) {
  return (e.getIsResponseStreaming?.() ?? e.isMidTurn) === !0
}

function Co(e) {
  return e.userFacingName?.() ?? e.name
}

function Qc(e) {
  if (!k(e)) return !1;
  return e.isEnabled?.() ?? !0
}

function k(e) {
  let o;
  try {
    o = e.policyGate
  } catch {
    return !1
  }
  if (o == null) return !0;
  return zNo(o.policy)
}

function h3e(e, o) {
  let n = e.trimStart();
  if (!n.startsWith("/")) return !1;
  let r = n.slice(1).match(/^[a-zA-Z0-9:_-]+/)?.[0],
    s = n.slice(1).split(/\s/, 1)[0];
  if (r !== void 0 && o(r)) return !0;
  return s !== void 0 && s !== r && s.length > 0 && o(s)
}

function Gin(e, o, n) {
  return e.getContext?.(o, n) ?? e.context ?? "inline"
}

function FNe(e, o, n) {
  let r = e?.immediate;
  return typeof r === "function" ? r(o, n) : r === !0
}
var hMt = `uses ${VCe.map((e)=>`"${e}"`).join(" or ")}, the names reserved for the skills synced from your claude.ai account`;

function Yat(e) {
  let o = b0(e),
    n = n2(e).toLowerCase(),
    r = n2(o);
  for (let s of VCe) {
    if (o === s || o.startsWith(`${s}:`)) return s;
    let p = n2(`${s}:`);
    if (n.startsWith(p) || r.startsWith(p)) return s
  }
  return
}

function WB(e) {
  return Yat(e) !== void 0
}

function $Ne(...e) {
  for (let o of e) {
    let n = Yat(o);
    if (n !== void 0) return `uses "${n}", a name reserved for the skills synced from your claude.ai account`
  }
  return hMt
}
var v = `${Cdt}@${Wd}`;

function M(e) {
  return e.repository === v && e.accountSkillsWrapper === !0
}

function Vee(e) {
  return e.loadedFrom === "syncedSkills" || e.type === "prompt" && e.source === "plugin" && e.pluginInfo !== void 0 && M(e.pluginInfo)
}

function AWn(e) {
  return !Vee(e) && (WB(e.name) || WB(Co(e)))
}
var R = "tengu_plaid_harbor";

function Uge() {
  return x(R, !0) !== !1
}

function ZCo(e, o) {
  let n = new Set(o.filter(Vee).map((r) => b0(r.name)));
  return n.size === 0 ? [...e] : e.filter((r) => Vee(r) || !n.has(b0(r.name)))
}

function Xat(e) {
  return !(e.type === "prompt" && e.source === "plugin") && AWn(e) && Uge()
}
class f {
  loaderSide = null;
  register(e) {
    this.loaderSide = e
  }
}
var y = new f;

function eRo(e) {
  y.register(e)
}

function Vin() {
  let e = y.loaderSide;
  if (!e) throw Error("MCP skill builders not registered \u2014 loadSkillsDir.ts has not been evaluated yet");
  return e
}
import {
  createHash as E
} from "crypto";

function yMt(e) {
  return e.configErrorReason === "url_empty" || !e.configError && "url" in e && e.url.trim() === ""
}

function zV(e) {
  let {
    scope: o,
    pluginSource: n,
    pluginPath: r,
    agentSource: s,
    declaredIn: p,
    configError: h,
    configErrorReason: P,
    expandedFromEnv: T,
    redialToRelearnRegistration: L,
    ...S
  } = e, t = S;
  if (delete t.tools, delete t.discoveryCache, delete t.cachedInitResponse, delete t.cachedDiscoverResponse, delete t.discoverSupport, delete t.eligible, delete t.ineligibleReason, delete t.enterpriseManaged, t.type === "stdio" || t.type === void 0 && "command" in t) t.type = "stdio", t.args = t.args ?? [];
  let m = typeof t.url === "string" && URL.canParse(t.url) ? /^([^?#]*\?)([^#]*)(.*)$/s.exec(t.url) : null;
  if (m) {
    let [, c = "", i = "", a = ""] = m;
    t.url = c + i.split("&").sort((l, d) => {
      let u = Ze(l, "="),
        g = Ze(d, "=");
      return u < g ? -1 : u > g ? 1 : 0
    }).join("&") + a
  }
  if (yMt(e)) t.unconfigured = !0;
  if (s !== void 0) t.agentSource = s;
  let C = b(t, (c, i) => {
    if (i && typeof i === "object" && !Array.isArray(i)) {
      let a = i,
        l = {};
      for (let d of Object.keys(a).sort()) l[d] = a[d];
      return l
    }
    return i
  });
  return E("sha256").update(C).digest("hex").slice(0, 16)
}

function Er(e, o) {
  return `${e}-${zV(o)}`
}
export {
  RR,
  ax,
  oX,
  zin,
  nle,
  Co,
  Qc,
  h3e,
  Gin,
  FNe,
  hMt,
  Yat,
  WB,
  $Ne,
  Vee,
  AWn,
  Uge,
  ZCo,
  Xat,
  eRo,
  Vin,
  yMt,
  zV,
  Er
};
