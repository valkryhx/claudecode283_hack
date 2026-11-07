// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  ote,
  v,
  Jk,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Qd
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  rUs,
  oUs,
  sUs
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  KAo,
  VZi,
  NR,
  twe,
  Ltt,
  JZi,
  Ntt,
  E1t,
  QZi,
  fi
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  $u
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  Yl
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  rU,
  P_e,
  bGe
} from "B:/~BUN/root/chunk-s9vv4h32.js";
import {
  yw
} from "B:/~BUN/root/chunk-x0zaah42.js";
import {
  K4,
  rG,
  bn
} from "B:/~BUN/root/chunk-2631cdbp.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";

function tse(e, r) {
  return bn(e).startsWith(rG) && r.scope !== "claudeai" && !p(e, r)
}

function JZ(e) {
  return e.mcpInfo !== void 0 && e.mcpInfo.isAuthStub !== !0 && (e.mcpInfo.toolNameShared === !0 || twe() && (e.mcpInfo.legacyGrantRefused === !0 && !Ntt(e.mcpInfo) || E1t(e.mcpInfo) || Ltt(e.mcpInfo)) && (e.mcpInfo.source === "plugin" || !p(e.mcpInfo.serverName, e.mcpInfo)) || tse(e.mcpInfo.serverName, e.mcpInfo))
}

function gBi(e) {
  if (e.mcpInfo !== void 0 && tse(e.mcpInfo.serverName, e.mcpInfo)) return rUs;
  return e.mcpInfo?.toolNameShared === !0 ? oUs : sUs
}

function p(e, r) {
  return r.scope === "dynamic" && !Qd(r) && !rU.minted(e)
}
var _ = "tengu_marlin_thicket",
  Jbs = "bot_protected_tengu_dapper_blum",
  g = "ide",
  O = new Je(() => ({
    read: !1
  }));

function l(e, r) {
  return e && Object.hasOwn(e, r) ? e[r] : void 0
}
async function h(e, r, n = !1) {
  let i;
  if (!await Jk((o) => (i = n ? r : l(o.mcpLegacyKeyOwners, e) ?? r, {
      ...o,
      mcpLegacyKeyOwners: {
        ...o.mcpLegacyKeyOwners,
        [e]: i
      }
    }))) {
    c("mcp_standard_key", "owner_not_saved");
    return
  }
  return i
}

function qW() {
  let e = O.of(H());
  if (!e.read) {
    if (e.read = !0, v(_, !1)) VZi({
      enforcesGrants: v(Jbs, !1) === !0,
      read: (r) => q() ? void 0 : l(fe().mcpLegacyKeyOwners, r),
      claim: q() ? async (r, n) => n : h
    })
  }
  return NR()
}

function f(e) {
  try {
    return $u(e) || new URL(e).host === new URL(nn().MCP_PROXY_URL).host
  } catch {
    return !0
  }
}

function u(e) {
  let r = f(e) ? void 0 : KAo(e);
  return r === void 0 ? void 0 : {
    key: r,
    pinned: !1
  }
}

function S(e) {
  if (e.type !== "http" && e.type !== "sse" && e.type !== "claudeai-proxy" || !URL.canParse(e.url) || f(e.url)) return;
  let r = KAo(new URL(e.url).origin);
  return r === KAo(e.url) ? void 0 : r
}
var s = 128;

function yLn(e) {
  if (e.type === "sdk" && P_e(e)) {
    let r = e.connectorId;
    if (r !== void 0) {
      let n = bn(r);
      if (n.length <= s && !n.includes("__")) return n;
      t(`MCP server "${e.name}": deny and ask rules written with its connectorId will not apply to it, because the id is longer than ${s} characters or holds "__" once characters other than letters, digits and "-" are read as "_"`, {
        level: "warn"
      }), c("mcp_connector_other_key", n.length > s ? "id_too_long" : "id_holds_separator");
      return
    }
  }
  return qW() ? S(e) : void 0
}

function fvr(e) {
  let r = e.serverInfo?.name;
  if (!r || bGe(e)?.serverId !== e.name) return;
  let n = bn(`${K4}${r}`);
  if (n.startsWith(rG) && n.length <= s) return n;
  t(`MCP server "${e.name}": deny and ask rules written with its claude.ai name will not apply to it, because "claude_ai_" and the name are together longer than ${s} characters, or the name has no letter, digit or "-"`, {
    level: "warn"
  }), c("mcp_connector_other_key", n.length > s ? "name_too_long" : "name_gives_no_key");
  return
}

function Qbs(e) {
  let r = e.mcpInfo;
  return r?.legacyGrantRebindable === !0 && yLe(r.serverName, r) && !tse(r.serverName, r) && !Ltt(r) && !Ntt(r)
}

function yBi(e, r, n) {
  let {
    mcpInfo: i
  } = e;
  if (i === void 0 || !Qbs(e)) return;
  let m = (o) => o.toolName === fi(e) && o.ruleContent === void 0;
  for (let o of r)
    if (o.type === "addRules" && o.behavior === "allow" && o.rules.some(m)) {
      JZi(i).then((y) => {
        if (y) n({
          ...o,
          rules: o.rules.filter(m)
        });
        else t(`MCP server "${i.serverName}": could not make it the owner of its name, so "don't ask again" was not kept. You will be asked again.`)
      }).catch(a);
      return
    }
}

function pvr(e) {
  try {
    if (qW()) QZi(Object.entries(e).map(([r, n]) => ({
      server: {
        serverName: r,
        serverType: n.type ?? "stdio",
        serverId: yw(n)
      },
      standardKey: _Ln(r, n, Yl(n)),
      denyKey: yLn(n),
      mayRecordOwner: yLe(r, n)
    })))
  } catch (r) {
    t(`Could not register configured MCP servers; will retry when their tools load: ${d(r)}`, {
      level: "warn"
    })
  }
}

function yLe(e, r) {
  return r.scope !== "project" && r.scope !== "agent" && r.source !== "plugin" && !Qd(r) && (r.scope !== "dynamic" || p(e, r))
}

function _Ln(e, r, n) {
  if (n || ote(e)) return {
    key: bn(e),
    pinned: !0
  };
  switch (r.type) {
    case "sse-ide":
    case "ws-ide":
      return {
        key: g, pinned: !0
      };
    case "http":
    case "sse":
      return u(r.url);
    case "claudeai-proxy":
      return yw(r) === void 0 ? void 0 : u(r.url);
    case "stdio":
    case void 0:
      return {
        key: bn(e), pinned: !1
      };
    default:
      return
  }
}
export {
  tse,
  JZ,
  gBi,
  Jbs,
  qW,
  yLn,
  fvr,
  Qbs,
  yBi,
  pvr,
  yLe,
  _Ln
};
