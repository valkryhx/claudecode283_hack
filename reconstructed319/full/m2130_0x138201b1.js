// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  tS,
  iH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  vi
} from "B:/~BUN/root/chunk-knfpag6d.js";
import {
  D2
} from "B:/~BUN/root/chunk-pjcve3z9.js";
import {
  b1e,
  I3e,
  uvn,
  pvn
} from "B:/~BUN/root/chunk-560mcemn.js";
import {
  vMe,
  b$
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ta
} from "B:/~BUN/root/chunk-e0q1m1z9.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
var Cor = "claudecode/chromeSite",
  Nui = "claudecode/chromeLateCardSite",
  u = 253,
  i = /^[a-z0-9._-]+$/,
  m = /^\[[0-9a-f:.]+\]$/;

function Ror(e) {
  return e.length <= u && i.test(e)
}

function U8o(e) {
  if (typeof e !== "string") return !1;
  let n = vMe(e);
  return Ror(n) && (n === e || a(e.slice(n.length + 1)))
}
var Fui = new Je(() => new Map);

function Hui(e, n) {
  if (U8o(n)) vi().resolvedHostByToolUseId.set(e, {
    host: n
  })
}

function Aor(e, n) {
  if (e.name !== Ta || !iH(e.config) || !D(n) || n.chrome_site === void 0 && n.chrome_site_port === void 0) return;
  let {
    chrome_site: o,
    chrome_site_port: t
  } = n;
  if (typeof o !== "string" || o.length > u || !(i.test(o) || m.test(o)) || d(`https://${o}`) !== o || t !== void 0 && !a(t)) return {
    kind: "unreadable"
  };
  return {
    kind: "named",
    site: t === void 0 ? o : `${o}:${t}`,
    offersGrant: t === void 0 && i.test(o) && n.chrome_offers_site_grant === "true"
  }
}

function xor(e, n) {
  let o = b1e(n);
  if (e.kind !== "unreadable") {
    let t = I3e(o, e.site);
    return t && {
      ...t,
      decideLocation: "pre-ask"
    }
  }
  if (o.denied.size === 0) return;
  return {
    behavior: "deny",
    message: "Claude in Chrome could not tell which site this call would act on, so it could not check the sites that are denied.",
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: unreadable site",
      classifierApprovable: !1
    },
    decideLocation: "pre-ask"
  }
}

function Por(e, n, o, t) {
  if (e.kind !== "named") return;
  let {
    site: r
  } = e, s = l(n, o).some((f) => d(f) !== r), c = !s && e.offersGrant && !tS(t) && t.forRemoteExecution !== !0;
  return {
    behavior: "ask",
    message: "Claude in Chrome requires permission.",
    decisionReason: {
      type: "other",
      reason: s ? `Claude in Chrome action on ${r}, which may also leave that site` : `Claude in Chrome action on ${r}`
    },
    ...c ? {
      suggestions: [{
        type: "addRules",
        rules: [{
          toolName: D2,
          ruleContent: r
        }],
        behavior: "allow",
        destination: "session"
      }]
    } : {
      suppressAlwaysAllowRule: !0
    }
  }
}

function a(e) {
  return typeof e === "string" && /^[0-9]{1,5}$/.test(e) && String(Number(e)) === e && Number(e) <= 65535
}

function d(e) {
  if (typeof e !== "string" || uvn(e)) return;
  let n = pvn(e);
  return n && b$(n.host)
}

function l(e, n) {
  if (e === "navigate") return [n.url];
  if (e !== "browser_batch" || !Array.isArray(n.actions)) return [];
  return n.actions.flatMap((o) => D(o) && o.name === "navigate" ? [D(o.input) ? o.input.url : void 0] : [])
}
export {
  Cor,
  Nui,
  Ror,
  U8o,
  Fui,
  Hui,
  Aor,
  xor,
  Por
};
