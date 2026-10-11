// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { wo, HVr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Rfn } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { K1r, J1r, Lne, Zk, Q1r } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { P2 } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Ie, Os } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { lut, gb, rf, put } from "B:/~BUN/root/chunk-gf53qpk6.js";
function i1() {
  return a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_REMOTE_HERMETIC_MODE;
}
function g(e) {
  try {
    return new URL(e).host;
  } catch {
    return;
  }
}
function nGn(e = a.ANTHROPIC_BASE_URL || Rfn()) {
  if (!e) return !0;
  let i = g(an().BASE_API_URL);
  return i !== void 0 && g(e) === i;
}
function dq() {
  K1r();
}
function _x() {
  let e = Lne();
  if (e !== void 0) return e;
  let {
      eligible: eligible,
      ineligibleReason: ineligibleReason
    } = f(),
    r = a.CLAUDE_CODE_EVAL_CONFINED === !0,
    o = !eligible && r;
  Q1r(o);
  let s = eligible || o;
  return J1r(s, s ? void 0 : ineligibleReason);
}
function u() {
  return RMr() || rf() && put() === null;
}
function RMr() {
  if (!rf()) return !1;
  let e = put();
  return e === "enterprise" || e === "team";
}
function f() {
  if (Zk()) return {
    eligible: !0
  };
  if (i1()) return {
    eligible: !1,
    ineligibleReason: "hermetic_remote_session"
  };
  if (Ie() === "gateway") {
    let n = wo(),
      eligible_2 = HVr(n);
    return {
      eligible: eligible_2,
      ineligibleReason: eligible_2 ? void 0 : n?.hostVerdict !== void 0 ? "host_gateway_not_accepted" : "unpinned_gateway"
    };
  }
  if (Ie() !== "firstParty") return {
    eligible: !1,
    ineligibleReason: "third_party_provider"
  };
  if (!Os()) return {
    eligible: !1,
    ineligibleReason: "custom_base_url"
  };
  let CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
  if (CLAUDE_CODE_ENTRYPOINT === "local-agent" || P2() || CLAUDE_CODE_ENTRYPOINT?.startsWith("claude-coworker")) return {
    eligible: !1,
    ineligibleReason: "sandboxed_entrypoint"
  };
  let i = !1;
  try {
    i = lut();
  } catch (error) {
    t(`Remote settings: could not read the profile store (${l(error)}); not treating this session as profile-authenticated`, {
      level: "warn"
    });
  }
  if (i) return nGn() ? {
    eligible: !0
  } : {
    eligible: !1,
    ineligibleReason: "profile_base_url_mismatch"
  };
  if (u()) return {
    eligible: !0
  };
  try {
    let {
      key: key
    } = gb({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (key) return {
      eligible: !0
    };
  } catch {}
  return {
    eligible: !1,
    ineligibleReason: rf() ? "unsupported_subscription" : "no_auth"
  };
}
export { i1, nGn, dq, _x, RMr };