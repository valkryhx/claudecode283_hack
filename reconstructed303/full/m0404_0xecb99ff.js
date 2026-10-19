// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Fe
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  pge,
  pc,
  Ya,
  Cw,
  Mp,
  mEe,
  lJe,
  Et,
  QIe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  At
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Cu
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  ok,
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  Hze
} from "B:/~BUN/root/chunk-pej55jax.js";
import {
  zD
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  pFr,
  P3n
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  HFt,
  Bae,
  WX,
  sn,
  L3,
  If,
  mp,
  mje
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  eLt
} from "B:/~BUN/root/chunk-1g2t7gtx.js";
import {
  WPo
} from "B:/~BUN/root/chunk-pbq7kcha.js";
var sfe = {
    policy: "allow_remote_sessions"
  },
  d = "Cloud sessions use your claude.ai login.",
  m = {
    ANTHROPIC_API_KEY: {
      noun: "key",
      fetchedTheLoadedAnswer: () => WPo()
    },
    ANTHROPIC_AUTH_TOKEN: {
      noun: "token",
      fetchedTheLoadedAnswer: () => HFt() === "same"
    }
  };

function Wwe() {
  let o = xe();
  if (o !== "firstParty") return `Cloud sessions aren't available with ${ok[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let {
    policy: e
  } = sfe, {
    featureLabel: i,
    verb: u
  } = WX(e), s = If(e, i, u);
  if (s === null) return null;
  let c = mp(e);
  if (c === "org_denied") {
    let n = L3() && zD().length === 0 ? p() : null;
    if (n === null) return s;
    let l = `${i} ${u} ${P3n([])}.`;
    if (n === "apiKeyHelper") return l;
    let {
      noun: f,
      fetchedTheLoadedAnswer: h
    } = m[n];
    if (!h()) return s;
    return `${l} This session is using ${n}, so Claude Code checked the policy for the organization that ${f} belongs to. ${d}`
  }
  let t = Bae();
  if (c !== "cache_miss" || t === null || t.success || t.retrying || t.httpStatus === 404) return s;
  let r = pFr(i, u, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || mje(e)) return r;
  if (p() !== null) {
    let n = eLt({
      prefix: d,
      suffix: "to use cloud sessions."
    });
    return `${r} ${n}`
  }
  if (t.httpStatus === 401 && !pge() && Et() && Ya().source === "claude.ai" && mEe() === null) return `${r} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!Cw() && pc() && t.httpStatus === null && Hze() && lJe() && !Fe(!1)) return `${r} Cloud sessions need a claude.ai sign-in. Run \`claude auth login\` (or /login in a local session), then try again.`;
  return r
}

function QUn() {
  return mp(sfe.policy) === "org_denied"
}

function p() {
  if (a.ANTHROPIC_UNIX_SOCKET || Fe(!1) || !QIe() || Et()) return null;
  let {
    key: o,
    source: e
  } = Mp();
  if (e === "ANTHROPIC_API_KEY") return o === a.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return Ya().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null
}

function EPe() {
  return !At() && sn("allow_remote_sessions") && sn("allow_quick_web_setup")
}

function ife() {
  return !Cu() && EPe()
}

function Dct() {
  return `${ln().CLAUDE_AI_ORIGIN}/connect-github`
}

function Q3e(o = "this repository") {
  let e = Dct(),
    i = ife() ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}` : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${i}`
}
var y = {
    type: "local-jsx",
    name: "web-setup",
    description: "Set up cloud sessions with your GitHub account",
    availability: ["claude-ai"],
    isEnabled: EPe,
    policyGate: sfe,
    get isHidden() {
      return !sn("allow_remote_sessions") || !sn("allow_quick_web_setup")
    }
  },
  $oi = y;
export {
  sfe,
  Wwe,
  QUn,
  EPe,
  ife,
  Dct,
  Q3e,
  $oi
};
