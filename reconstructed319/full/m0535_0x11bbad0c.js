// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  rie,
  Sc,
  La,
  $v,
  Wm,
  cFe,
  uFe,
  Rt,
  mV
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  St
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  id
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  hC,
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  JD
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  rxe
} from "B:/~BUN/root/chunk-c79wfkj4.js";
import {
  GTo,
  VDr
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  qFt,
  fbe,
  $se,
  gn,
  FX,
  dp,
  xd,
  k2e
} from "B:/~BUN/root/chunk-f0zgv0ya.js";
import {
  YZt
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  uRs
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
var IW = {
    policy: "allow_remote_sessions"
  },
  d = "Cloud sessions use your claude.ai login.",
  y = {
    ANTHROPIC_API_KEY: {
      noun: "key",
      fetchedTheLoadedAnswer: () => uRs()
    },
    ANTHROPIC_AUTH_TOKEN: {
      noun: "token",
      fetchedTheLoadedAnswer: () => qFt() === "same"
    }
  };

function kce() {
  let o = Te();
  if (o !== "firstParty") return `Cloud sessions aren't available with ${hC[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let {
    policy: e
  } = IW, {
    featureLabel: s,
    verb: l
  } = $se(e), n = dp(e, s, l);
  if (n === null) return null;
  let a = xd(e);
  if (a === "org_denied") {
    let r = FX() && JD().length === 0 ? f() : null;
    if (r === null) return n;
    let c = `${s} ${l} ${VDr([])}.`;
    if (r === "apiKeyHelper") return c;
    let {
      noun: h,
      fetchedTheLoadedAnswer: m
    } = y[r];
    if (!m()) return n;
    return `${c} This session is using ${r}, so Claude Code checked the policy for the organization that ${h} belongs to. ${d}`
  }
  let t = fbe();
  if (a !== "cache_miss" || t === null || t.success || t.httpStatus === 404) return n;
  if (t.retrying) return t.errorCode === "auth_failed" && t.httpStatus === 401 && !k2e(e) && p() ? `${n} If that doesn't help, run \`claude auth login\` (or /login in a local session).` : n;
  let u = GTo(s, l, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || k2e(e)) return u;
  if (f() !== null) {
    let r = YZt({
      prefix: d,
      suffix: "to use cloud sessions."
    });
    return `${u} ${r}`
  }
  if (t.httpStatus === 401 && p()) return `${u} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!$v() && Sc() && t.httpStatus === null && rxe() && uFe() && !Pe(!1)) return `${u} Cloud sessions need a claude.ai sign-in. Run \`claude auth login\` (or /login in a local session), then try again.`;
  return u
}

function d_r() {
  return xd(IW.policy) === "org_denied"
}

function p() {
  return !rie() && Rt() && La().source === "claude.ai" && cFe() === null
}

function f() {
  if (i.ANTHROPIC_UNIX_SOCKET || Pe(!1) || !mV() || Rt()) return null;
  let {
    key: o,
    source: e
  } = Wm();
  if (e === "ANTHROPIC_API_KEY") return o === i.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return La().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null
}

function QWe() {
  return !St() && gn("allow_remote_sessions") && gn("allow_quick_web_setup")
}

function _Xe() {
  return !id() && QWe()
}

function nDt() {
  return `${nn().CLAUDE_AI_ORIGIN}/connect-github`
}

function Tft(o = "this repository") {
  let e = nDt(),
    s = _Xe() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${s}`
}
var _ = {
    type: "local-jsx",
    name: "web-setup",
    description: "Set up cloud sessions with your GitHub account",
    availability: ["claude-ai"],
    isEnabled: QWe,
    policyGate: IW,
    get isHidden() {
      return !gn("allow_remote_sessions") || !gn("allow_quick_web_setup")
    }
  },
  rSa = _;
export {
  IW,
  kce,
  d_r,
  QWe,
  _Xe,
  nDt,
  Tft,
  rSa
};
