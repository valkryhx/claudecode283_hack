// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Vt
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  a,
  or
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  Cu
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  Ss
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  Z2s
} from "B:/~BUN/root/chunk-we0fhavr.js";
import {
  Zqn
} from "B:/~BUN/root/chunk-gt1x0gdb.js";
import {
  m4e
} from "B:/~BUN/root/chunk-0m1mwrvx.js";
import {
  LS
} from "B:/~BUN/root/chunk-72f62gjz.js";
import {
  co
} from "B:/~BUN/root/chunk-b0487zs4.js";
import {
  o,
  oe,
  fe
} from "B:/~BUN/root/chunk-g3snhg6n.js";

function pls() {
  return or.CLAUDE_CODE_ARTIFACT_MCP ?? !0
}

function fls() {
  return fe(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${LS}\` skill for the current contract and per-capability guidance.`)
}

function rno(i) {
  let s = new Map;
  for (let e of i) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let t = e.mcpInfo.serverName,
      r = s.get(t);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue
    }
    let n = e.mcpInfo.displayName ?? t;
    s.set(t, {
      server: n,
      toolPrefix: co(e.name)?.serverName ?? t,
      toolNames: [e.mcpInfo.toolName],
      ...Zqn(n) ? {} : {
        declarable: !1
      }
    })
  }
  return [...s.values()]
}

function ono(i) {
  let s = `mcp__${Ss}__`,
    e = new Set;
  for (let t of i) {
    if (!t.name.startsWith(s)) continue;
    let r = t.name.slice(s.length),
      n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n))
  }
  return [...e]
}

function sno() {
  return Cu()
}

function d(i) {
  let s = new Map,
    e = new Set;
  for (let r of i) {
    let n = r.mcpInfo;
    if (n?.serverType !== "sdk" || Vt(n.serverName) === null) continue;
    let l = s.get(n.serverName);
    if (l !== void 0) {
      l.toolNames.push(n.toolName);
      continue
    }
    if (e.has(n.serverName)) continue;
    let c = n.serverInfoName ?? "";
    if (c.trim() === "" || Vt(c.trim()) !== null) {
      e.add(n.serverName);
      continue
    }
    s.set(n.serverName, {
      server: c,
      toolPrefix: n.serverName,
      toolNames: [n.toolName],
      ...Zqn(c) ? {} : {
        declarable: !1
      }
    })
  }
  let t = [...s.values()];
  return {
    named: t.filter((r) => r.declarable !== !1),
    unnamedIds: [...e],
    undeclarable: t.filter((r) => r.declarable === !1)
  }
}

function p() {
  return E("tengu_cobalt_plinth_yew", !1)
}

function ino(i, s) {
  let e = sno() ? d(i) : null,
    t = m4e(s ?? []);
  if (!t) return {
    ccrHosted: !1,
    metaConnector: null,
    hosted: e
  };
  let r = a.CLAUDE_CODE_REMOTE === !0,
    n = t.name,
    l = i.find((f) => f.mcpInfo?.serverName === n),
    c = l && co(l.name)?.serverName,
    m = c && p() ? {
      server: Z2s,
      toolPrefix: c
    } : null;
  return {
    ccrHosted: r,
    metaConnector: m,
    hosted: e
  }
}

function mls(i, s) {
  let {
    metaConnector: e,
    hosted: t
  } = ino(i, s), r = [...rno(i), ...t === null ? [] : [...t.named, ...t.undeclarable]];
  return e ? [...r, e] : r
}
export {
  pls,
  fls,
  rno,
  ono,
  sno,
  ino,
  mls
};
