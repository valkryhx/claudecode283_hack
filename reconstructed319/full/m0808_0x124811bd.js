// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Iz
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  na
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  Jl
} from "B:/~BUN/root/chunk-nzh2qzgc.js";
import {
  lTe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  hue,
  GLn,
  rse,
  Hd
} from "B:/~BUN/root/chunk-eak7wp7z.js";
import {
  xCt
} from "B:/~BUN/root/chunk-dq64svjd.js";
import {
  PLe,
  R_e
} from "B:/~BUN/root/chunk-ymgf3kpk.js";

function a() {
  if (Jl.isSelfHostedRunnerChild) return Iz;
  if (PLe() === void 0 && !Hd()) return null;
  return import.meta.require("B:/~BUN/root/chunk-mqm0p7rv.js").isArtifactsMcpLaptopEntry
}

function s(e) {
  let t = PLe();
  return t !== void 0 && e(t.config) ? t : void 0
}

function u(e) {
  let t = s(e);
  if (t === void 0 || R_e(t)) return !1;
  return t.type === "connected" || t.type === "cached"
}

function y() {
  return import.meta.require("B:/~BUN/root/chunk-pk0ncg4g.js").artifactToolWithholdingGate() !== null
}

function _() {
  return import.meta.require("B:/~BUN/root/chunk-fpnh3r55.js").MCP_ROW_TOOL_NAMES
}

function p(e) {
  let t = e.flatMap((n) => n.mcpInfo?.serverName === na ? [n.mcpInfo.toolName] : []);
  return !rse() || Hd() || t.includes(hue) && t.includes(GLn)
}

function d(e) {
  let t = _();
  return e.some((n) => n.mcpInfo?.serverName === na && !t.includes(n.mcpInfo.toolName)) && p(e)
}

function KXn(e, t = e) {
  let n = a();
  if (n === null) return [...e];
  let r = () => e.filter((i) => i.mcpInfo?.serverName !== na),
    o = s(n);
  if (o !== void 0 && (R_e(o) || y())) return r();
  let f = t.filter((i) => i.mcpInfo?.serverName === na);
  if (f.length === 0 || d(f) && p(e) || !u(n)) return [...e];
  return r()
}

function fei(e, t) {
  if (!Hd()) {
    let n = a();
    if (n === null || !d(t) || !u(n)) return [...e];
    let r = te();
    r.builtInArtifactHiddenForMcp = !0, r.autoReact.enabledMemo = !1, g("artifact_mcp_swap"), xCt(r.live), m(), import.meta.require("B:/~BUN/root/chunk-6xxjm8vn.js")
  }
  return T(e)
}

function pei() {
  if (!Hd()) return;
  let e = a();
  if (e === null) return;
  let t = s(e);
  if (t !== void 0 && R_e(t)) c("artifact_mcp_swap", "entry_not_served");
  else switch (t?.type) {
    case void 0:
      c("artifact_mcp_swap", "entry_gone");
      break;
    case "failed":
      c("artifact_mcp_swap", "entry_failed");
      break;
    case "needs-auth":
      c("artifact_mcp_swap", "entry_needs_auth");
      break;
    case "connected":
    case "cached":
    case "pending":
    case "disabled":
      return;
    default:
      return
  }
  let n = te();
  n.builtInArtifactHiddenForMcp = !1, n.autoReact.optIn = !1, n.autoReact.wakeEnabledMemo = !1, xCt(n.live);
  for (let r of [...n.wakes.takenFrom.keys()]) import("B:/~BUN/root/chunk-1dv8fbf5.js").then((o) => o.handBackTakenOverSlug(r));
  m()
}

function m() {
  import.meta.require("B:/~BUN/root/chunk-x1315p2v.js").clearCommandMemoizationCaches()
}

function mei(e) {
  return Hd() ? T(e) : [...e]
}

function Yjo(e) {
  if (lTe(e)) return !0;
  let t = import.meta.require("B:/~BUN/root/chunk-mh92bc27.js").APPIFACT_REPL_TOOL_NAME;
  return t !== void 0 && e.mcpInfo === void 0 && e.name === t
}

function T(e) {
  return e.filter((t) => !Yjo(t))
}
export {
  KXn,
  fei,
  pei,
  mei,
  Yjo
};
