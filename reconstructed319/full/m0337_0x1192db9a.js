// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bf
} from "B:/~BUN/root/chunk-sjvfcp1z.js";
import {
  DBt,
  Qd,
  B4
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Hp
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  Od
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  VFe
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  Iie,
  Kz
} from "B:/~BUN/root/chunk-5az22yft.js";

function _Ge(e) {
  let t = Ae().loadedModules.find((o) => o.name === e);
  return t === void 0 || Bf(t)
}

function cks() {
  let e = new Map,
    t = new Map,
    o = new Set;
  return {
    list: (r) => _Ge(r) ? [...e.get(r)?.values() ?? []] : [],
    own: (r) => {
      let n = e.get(r) ?? new Map;
      return e.set(r, n), n
    },
    serverKey: (r) => t.get(r),
    ownerOfKey: (r) => [...t.entries()].find(([, n]) => n === r)?.[0],
    keyed: (r, n) => {
      t.set(r, n), o.add(n)
    },
    minted: (r) => o.has(r),
    forget: (r) => {
      e.delete(r), t.delete(r)
    }
  }
}
var rU = cks();

function P_e(e) {
  return e !== void 0 && DBt(e.type) && e.scope !== "project" && e.relayed !== !0 && !Qd(e)
}

function MF(e, t) {
  if (t.type === "sdk" && P_e(t)) return "sdk";
  if (Qd(t) || d(e, t.scope)) return "plugin";
  return t.scope
}

function yEr(e) {
  return {
    name: e.serverName,
    source: e.source ?? (e.pluginTelemetry !== void 0 || d(e.serverName, e.scope ?? "dynamic") ? "plugin" : e.serverType === "sdk" ? "sdk" : e.scope ?? "dynamic")
  }
}

function d(e, t) {
  return t === "dynamic" && rU.ownerOfKey(e) !== void 0
}
var y = "anthropic/claudeAiConnector";

function uks({
  config: e,
  name: t
}) {
  return (e.type === "sdk" ? e.connectorId : void 0) ?? t
}

function fks({
  config: e,
  capabilities: t
}) {
  let o = t?.experimental?.[y];
  return e.type === "sdk" && P_e(e) && !q() && !i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_ENVIRONMENT_KIND && Hp() && typeof o === "object" && o !== null ? o : void 0
}

function a(e, t) {
  return e.protocol === "https:" && e.username === "" && e.password === "" && Od(e.href) && e.pathname === t
}

function uee(e, {
  path: t,
  serverId: o
}) {
  try {
    if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !1;
    let r = e.config,
      n = VFe(r);
    if (n !== void 0) {
      let c = n === Kz && tn();
      if (n !== o || r.type !== "http" || q() || !c && (i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_ENVIRONMENT_KIND)) return !1;
      let p = new URL(r.url);
      return p.search === "" && a(p, t)
    }
    if (r.type === "claudeai-proxy") {
      if (!B4(r)) return !1;
      return a(new URL(r.url), t)
    }
    if (r.type === "sdk") return bGe(e)?.serverId === o;
    let s = i.CLAUDE_CODE_ENVIRONMENT_KIND;
    return i.CLAUDE_CODE_REMOTE === !0 && (!s || s === "anthropic_cloud") && r.type === "http" && r.scope === "dynamic" && !Qd(r) && Iie(r) === o
  } catch {
    return !1
  }
}

function bGe(e) {
  try {
    let t = fks(e),
      o = uks(e);
    return t?.serverId === o ? {
      ...t,
      serverId: o
    } : void 0
  } catch {
    return
  }
}
export {
  _Ge,
  cks,
  rU,
  P_e,
  MF,
  yEr,
  uks,
  fks,
  uee,
  bGe
};
