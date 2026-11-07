// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Tk
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  NR
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  FBt,
  Qd
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  MF
} from "B:/~BUN/root/chunk-s9vv4h32.js";
import {
  sp
} from "B:/~BUN/root/chunk-fzefftbw.js";
import {
  Iie,
  JUt
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  VP
} from "B:/~BUN/root/chunk-ex2shtaj.js";
import {
  V9e
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  tse
} from "B:/~BUN/root/chunk-7thhw21a.js";

function k3e(e, o) {
  let n = o.map((t) => t.mcpInfo === void 0 || t.mcpInfo.scope === e.config.scope && t.mcpInfo.pluginSource === e.config.pluginSource ? t : {
    ...t,
    mcpInfo: FBt(e)
  });
  return n.every((t, r) => t === o[r]) ? o : n
}

function pge(e, o) {
  return e.config.scope === o.scope && e.config.pluginSource === o.pluginSource ? e : {
    ...e,
    config: o
  }
}
var d = 128;

function vYt(e) {
  let o = "displayName" in e ? e.displayName : void 0;
  if (typeof o !== "string") return;
  if (e.scope === "claudeai") return o;
  if (e.scope !== "dynamic" || Qd(e)) return;
  return Q(Tk(o), d).trimEnd() || void 0
}
var l = 128,
  g = /^[a-z0-9._:-]+$/;

function c(e) {
  let o = e?.trim().toLowerCase();
  if (!o || o.length > l || !g.test(o)) return;
  return o
}

function pve(e, o) {
  if (o.type !== "http" || MF(e, o) !== "dynamic") return;
  let n = c(Iie(o));
  if (n) return n;
  let p = JUt.peek(H())?.read?.();
  return c(p?.[e])
}
var m = (e, o) => ({
  ...o,
  scope: e.config.scope,
  pluginSource: e.config.pluginSource,
  source: MF(e.name, e.config),
  displayName: vYt(e.config),
  pluginTelemetry: void 0,
  ...e.config.pluginSource !== void 0 && {
    pluginTelemetry: VP(e.config.pluginSource, sp())
  },
  serverIdStamp: pve(e.name, e.config),
  ...e.config.type !== "sdk" && V9e(e)
});

function ore(e, o) {
  let n = tse(e.name, e.config),
    p = o.map((r) => {
      if (r.mcpInfo === void 0) return r;
      let i = n && (NR() || r.ignoresWholeToolAllowRule?.({}) !== !0) ? {
        ...r,
        ignoresWholeToolAllowRule() {
          return !0
        },
        suppressesAlwaysAllowRule() {
          return !0
        },
        async checkPermissions(f, u) {
          let s = await r.checkPermissions(f, u);
          return s.behavior === "ask" || s.behavior === "passthrough" ? {
            ...s,
            suggestions: []
          } : s
        }
      } : r;
      return r.mcpInfo.scope === e.config.scope && r.mcpInfo.pluginSource === e.config.pluginSource ? i : {
        ...i,
        mcpInfo: m(e, r.mcpInfo)
      }
    });
  return p.every((r, i) => r === o[i]) ? o : p
}
export {
  pve,
  k3e,
  pge,
  vYt,
  ore
};
