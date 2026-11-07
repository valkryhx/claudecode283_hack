// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  nJ,
  AA,
  hn,
  vR,
  kVe,
  dH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  $U
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  _e
} from "B:/~BUN/root/chunk-4vxp7kvb.js";
import {
  Te,
  Fn
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  iM
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  YRs
} from "B:/~BUN/root/chunk-hvykkx00.js";
import {
  Mys
} from "B:/~BUN/root/chunk-ekqreyhv.js";
import {
  p0n,
  Dpt
} from "B:/~BUN/root/chunk-n3m61sfz.js";
import {
  createHash as j
} from "crypto";
var O = "__SYSTEM_PROMPT_STATIC_BREAKPOINT__";

function Hwr(e, n = $U) {
  let o = e.indexOf(n);
  while (o !== -1) {
    let s = o === 0 ? 0 : e.lastIndexOf(`
`, o - 1) + 1,
      c = e.indexOf(`
`, o),
      f = c === -1 ? e.length : c;
    if (e.slice(s, f).trim() === n) {
      let g = e.slice(0, s),
        A = e.slice(f);
      return [...g.trim() ? [g] : [], n, ...A.trim() ? [A] : []]
    }
    if (c === -1) break;
    o = e.indexOf(n, c + 1)
  }
  return [e]
}

function Pys(e) {
  if (!e.includes(O)) return [e];
  return Hwr(e, O).filter((n) => n !== O)
}

function Mpt(e, n) {
  return typeof e === "string" ? Hwr(e) : Array.isArray(e) ? e : n
}

function f0n(e, n, o) {
  let s = o ? e.indexOf($U) : -1;
  if (s === -1) return [...e, ...R(n)];
  return [...e.slice(0, s), ...R(n.filter(([c]) => c === "shared")), ...e.slice(s), ...R(n.filter(([c]) => c === "session"))]
}

function R(e) {
  return e.flatMap(([, n]) => n ? [n] : [])
}

function Xa(e) {
  return e
}
var M = new Set(["ti", "os", "sb", "he", "uf", "ap", "tk"]),
  k = 512;

function B(e) {
  let n = {};
  for (let [o, s] of Object.entries(e))
    if (!M.has(o) && (typeof s === "string" || typeof s === "number" || typeof s === "boolean")) n[o] = s;
  return n
}
var T = "You are Claude Code, Anthropic's official CLI for Claude.",
  D = "You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.",
  U = "You are a Claude agent, built on Anthropic's Claude Agent SDK.",
  L = [T, D, U],
  I = new Set(L);

function $wr(e) {
  return I.has(e)
}

function Uwr(e) {
  if (Te() === "vertex") return T;
  if (e?.recorded !== void 0) return e.recorded;
  if (e?.isNonInteractive) {
    if (e.hasAppendSystemPrompt) return D;
    return U
  }
  return T
}

function dHi(e, n, o) {
  let s = YRs(o.fingerprint, o.agentContext, o.previousRequestId, o.promptId, o.turnOrigin, o.turnPosition, {
      attributionProject: Mys(),
      responseBeforeCompaction: o.responseBeforeCompaction
    }),
    c = Xa([s, n, ...e].filter(Boolean));
  return w(c), c
}

function cHi(e, n) {
  let o = YRs(n.fingerprint, n.agentContext, void 0, void 0, void 0, void 0, {
    ignoreEnvOptOut: n.forceAttributionHeader === !0 && !AA(),
    attributionProject: Mys()
  });
  if (!o) return e;
  return [{
    type: "text",
    text: o
  }, ...e]
}

function w(e) {
  try {
    let [n] = Oys(e, {
      skipTelemetry: !0
    }), o = n?.text;
    l("tengu_sysprompt_block", {
      length: o?.length ?? 0,
      hash: o ? _e(j("sha256").update(o).digest("hex")) : b("")
    })
  } catch (n) {
    a(qe(F(n), "system prompt block telemetry failed"))
  }
}

function Oys(e, n) {
  let o = nJ(),
    s = e.findIndex((p) => p === $U);
  if (o && n?.skipGlobalCacheForSystemPrompt && s === -1) {
    if (!n?.skipTelemetry) l("tengu_sysprompt_using_tool_based_cache", {
      promptBlockCount: e.length
    });
    let p, r, P, C = [];
    for (let u of e) {
      if (!u) continue;
      if (u === $U) continue;
      if (u.startsWith(Dpt)) p = u;
      else if (I.has(u)) r = u;
      else if (u === p0n) P = u;
      else C.push(u)
    }
    let x = [];
    if (p) x.push({
      text: p,
      cacheScope: null
    });
    if (r) x.push({
      text: r,
      cacheScope: "org"
    });
    if (P && p && r) x.push({
      text: P,
      cacheScope: null
    });
    let d = C.join(`

`);
    if (d) x.push({
      text: d,
      cacheScope: "org"
    });
    return x
  }
  if (o) {
    if (s !== -1) {
      let p, r, P, C = [],
        x = [];
      for (let h = 0; h < e.length; h++) {
        let m = e[h];
        if (!m || m === $U) continue;
        if (m.startsWith(Dpt)) p = m;
        else if (I.has(m)) r = m;
        else if (m === p0n) P = m;
        else if (h < s) C.push(m);
        else x.push(m)
      }
      let d = [];
      if (p) d.push({
        text: p,
        cacheScope: null
      });
      if (r) d.push({
        text: r,
        cacheScope: null
      });
      if (P && p && r) d.push({
        text: P,
        cacheScope: null
      });
      let u = C.join(`

`),
        v = u ? Pys(u) : [];
      for (let h of v) d.push({
        text: h,
        cacheScope: "global"
      });
      let E = x.join(`

`);
      if (E) d.push({
        text: E,
        cacheScope: v.length > 1 ? null : "org"
      });
      if (!n?.skipTelemetry) l("tengu_sysprompt_boundary_found", {
        blockCount: d.length,
        staticBlockLength: u.length,
        dynamicBlockLength: E.length
      });
      return d
    } else if (!n?.skipTelemetry) l("tengu_sysprompt_missing_boundary_marker", {
      promptBlockCount: e.length
    })
  }
  let c, f, g, A = [];
  for (let [p, r] of e.entries()) {
    if (!r || r === $U) continue;
    if (r.startsWith(Dpt)) c = r;
    else if (I.has(r)) f = r;
    else if (r === p0n) g = r;
    else A.push(p < s ? Pys(r).join("") : r)
  }
  let S = [];
  if (c) S.push({
    text: c,
    cacheScope: null
  });
  if (f) S.push({
    text: f,
    cacheScope: "org"
  });
  if (g && c && f) S.push({
    text: g,
    cacheScope: null
  });
  let y = A.join(`

`);
  if (y) S.push({
    text: y,
    cacheScope: "org"
  });
  return S
}

function Wze({
  agentContext: e,
  servedSessionMode: n
} = {}) {
  let o = {},
    s = process.env.CLAUDE_CODE_EXTRA_METADATA;
  if (s) {
    let r = et(s, !1);
    if (r && typeof r === "object" && !Array.isArray(r)) o = B(r);
    else t(`CLAUDE_CODE_EXTRA_METADATA env var must be a JSON object, but was given ${s}`, {
      level: "error"
    })
  }
  let c = {},
    f, g = iM(),
    A = Pe(i.CLAUDE_CODE_REMOTE) && Fn() ? kVe(e) : void 0,
    S = {
      ...f && {
        ti: f
      },
      device_id: dH(),
      account_uuid: Pe(i.CLAUDE_CODE_REMOTE) && i.CLAUDE_CODE_ACCOUNT_UUID || vR()?.accountUuid || hn()?.accountUuid || "",
      session_id: z(),
      ...g && {
        parent_session_id: g
      },
      ...A && {
        tk: A
      }
    },
    y = {
      ...c,
      ...o,
      ...S
    };
  if ((Object.keys(o).length > 0 || Object.keys(c).length > 0) && _(y).length > k) {
    if (y = {
        ...c,
        ...S
      }, _(y).length > k) y = S
  }
  return {
    user_id: _(y)
  }
}
export {
  Hwr,
  Pys,
  Mpt,
  f0n,
  Xa,
  $wr,
  Uwr,
  dHi,
  cHi,
  Oys,
  Wze
};
