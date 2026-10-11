// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Pd,
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  a,
  Nn
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  zc
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  PNo,
  Lfn
} from "B:/~BUN/root/chunk-dv435n4g.js";
import {
  Cs
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  FXt
} from "B:/~BUN/root/chunk-r1ja2che.js";
import {
  eh
} from "B:/~BUN/root/chunk-zav2qxje.js";
import {
  Us
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  o,
  ae,
  fe
} from "B:/~BUN/root/chunk-n8qdr73v.js";

function e9t(i) {
  let t = [];
  for (let e of i) {
    if (!Cs(e)) continue;
    let {
      config: n
    } = e, r = n && typeof n === "object" && "url" in n && typeof n.url === "string" ? n.url : null;
    if (r !== null && Lfn(r)) t.push(e)
  }
  return t.length === 1 ? t[0] : null
}

function Uio() {
  return Nn.CLAUDE_CODE_ARTIFACT_MCP ?? !0
}

function Bio() {
  return fe(o().min(1).max(64), ae()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${eh}\` skill for the current contract and per-capability guidance.`)
}

function Xpr(i) {
  let t = new Map;
  for (let e of i) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let n = e.mcpInfo.serverName,
      r = t.get(n);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue
    }
    let s = e.mcpInfo.displayName ?? n;
    t.set(n, {
      server: s,
      toolPrefix: Us(e.name)?.serverName ?? n,
      toolNames: [e.mcpInfo.toolName],
      ...FXt(s) ? {} : {
        declarable: !1
      }
    })
  }
  return [...t.values()]
}

function Jpr(i) {
  let t = `mcp__${Pd}__`,
    e = new Set;
  for (let n of i) {
    if (!n.name.startsWith(t)) continue;
    let r = n.name.slice(t.length),
      s = r.indexOf("__");
    if (s > 0) e.add(r.slice(0, s))
  }
  return [...e]
}

function Qpr() {
  return zc()
}

function p(i) {
  let t = new Map,
    e = new Set;
  for (let r of i) {
    let s = r.mcpInfo;
    if (s?.serverType !== "sdk" || en(s.serverName) === null) continue;
    let l = t.get(s.serverName);
    if (l !== void 0) {
      l.toolNames.push(s.toolName);
      continue
    }
    if (e.has(s.serverName)) continue;
    let c = s.serverInfoName ?? "";
    if (c.trim() === "" || en(c.trim()) !== null) {
      e.add(s.serverName);
      continue
    }
    t.set(s.serverName, {
      server: c,
      toolPrefix: s.serverName,
      toolNames: [s.toolName],
      ...FXt(c) ? {} : {
        declarable: !1
      }
    })
  }
  let n = [...t.values()];
  return {
    named: n.filter((r) => r.declarable !== !1),
    unnamedIds: [...e],
    undeclarable: n.filter((r) => r.declarable === !1)
  }
}

function u() {
  return x("tengu_cobalt_plinth_yew", !1)
}

function Zpr(i, t) {
  let e = Qpr() ? p(i) : null,
    n = e9t(t ?? []);
  if (!n) return {
    ccrHosted: !1,
    metaConnector: null,
    hosted: e
  };
  let r = a.CLAUDE_CODE_REMOTE === !0,
    s = n.name,
    l = i.find((f) => f.mcpInfo?.serverName === s),
    c = l && Us(l.name)?.serverName,
    m = c && u() ? {
      server: PNo,
      toolPrefix: c
    } : null;
  return {
    ccrHosted: r,
    metaConnector: m,
    hosted: e
  }
}

function jio(i, t) {
  let {
    metaConnector: e,
    hosted: n
  } = Zpr(i, t), r = [...Xpr(i), ...n === null ? [] : [...n.named, ...n.undeclarable]];
  return e ? [...r, e] : r
}
export {
  e9t,
  Uio,
  Bio,
  Xpr,
  Jpr,
  Qpr,
  Zpr,
  jio
};
