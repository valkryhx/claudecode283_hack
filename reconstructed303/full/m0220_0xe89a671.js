// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Er,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  eF
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  sn
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  bs
} from "B:/~BUN/root/chunk-gy660jgx.js";
var lxo = ["unrestricted", "small", "medium", "large"],
  s = "medium",
  u = "small";

function oin(e) {
  return lxo.find((o) => o === e)
}
var n = {
  small: 5,
  medium: 10,
  large: 50
};

function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`
}

function aHs(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e)
}

function lHs(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0
}

function f(e) {
  if (!(e in n)) return e;
  return `${e} \u2014 keep workflows under ${n[e]} agents`
}

function d() {
  return "This is a guideline, not a hard limit \u2014 follow it unless the user's prompt calls for a different scale."
}

function dHs(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:",
    r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`
}

function cHs(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted \u2014 no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`
}

function Rqn() {
  return rIr() || eF()?.settings.disableWorkflows === !0
}

function rIr() {
  return a.CLAUDE_CODE_DISABLE_WORKFLOWS
}
class w {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return this.cached = W(), this.cached
  }
}
var p = new z(() => new w);

function Wg() {
  return dxo() === void 0
}

function dxo() {
  let e = Rqn(),
    o = e && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && bs("disableWorkflows", !1).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!xqn()) return "org_policy";
  let {
    available: t,
    defaultOn: r
  } = i();
  if (!t) return "unavailable";
  if (!(eF()?.settings.enableWorkflows ?? r)) {
    let l = bs("enableWorkflows", r).source;
    return l === "userSettings" || l === "default" ? "user_setting" : "managed_settings"
  }
  return o ? "user_setting" : void 0
}

function cxo() {
  return i().defaultOn
}

function xme() {
  return Er() === "pro" ? u : s
}

function Aqn() {
  return xqn() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && i().available
}

function sin() {
  return eF()?.settings.workflowKeywordTriggerEnabled ?? !0
}

function xqn() {
  return sn("allow_workflows")
}

function uHs() {
  if (Rqn() || !xqn()) return !0;
  if (eF()?.settings.enableWorkflows === !1) return !0;
  return a.CLAUDE_CODE_WORKFLOWS === !1 || !E("tengu_workflows_enabled", !0)
}

function i() {
  return p.of(j().host).resolve()
}

function W() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = E("tengu_workflows_enabled", !0);
    return {
      available: o,
      defaultOn: o
    }
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return {
    available: !1,
    defaultOn: !1
  };
  if (!E("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: Er() !== "pro"
  }
}

function uxo() {
  return E("tengu_jade_compass", !0)
}
export {
  lxo,
  oin,
  aHs,
  lHs,
  dHs,
  cHs,
  Rqn,
  rIr,
  Wg,
  dxo,
  cxo,
  xme,
  Aqn,
  sin,
  xqn,
  uHs,
  uxo
};
