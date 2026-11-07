// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wP } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Po } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { RWn } from "B:/~BUN/root/chunk-7yd8y16n.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var zo = "remote-devices",
  QJi = "Claude_Browser__request_access",
  ZJi = "computer_request_access";
var SAe = "claude_ai",
  mKe = "widgets",
  eHe = "ccr-email",
  wAe = "visualize",
  e7i = "6f616b42-0ed8-571e-823f-ee4aca6b7ce9",
  i0r = "cowork",
  mH = "memory",
  kWn = `mcp__${mH}__memory_`,
  a0r = "a471caf9-e559-5ad8-836c-4e5972877185",
  q_t = "63d0e670-f310-5da6-b45c-86ffaf444223";
function n5(e, r) {
  if (e.length + r.length > 256) return wP(r, wP(e, c));
  let t = Po(a),
    _ = `${e.length}:${e}${r}`,
    o = t.get(_);
  if (o === void 0) {
    if (t.size >= 256) t.clear();
    o = wP(r, wP(e, c)), t.set(_, o);
  }
  return o;
}
var c = "00000000-0000-0000-0000-000000000000",
  a = new W(() => new Map());
function Iie(e) {
  if (e.type !== "http") return;
  let r = "headers" in e ? e.headers : void 0;
  for (let [t, _] of Object.entries(r ?? {})) if (t.toLowerCase() === "x-mcp-server-id") return _.toLowerCase();
  return;
}
var JUt = new Je(() => ({}));
function t7i(e) {
  return Iie(e) === q_t;
}
var QUt = "758bbc64-7e6c-5dab-a3a5-2a4c7ca423fc",
  ZUt = "667a974b-0f6b-57fc-8973-52854120fcb3",
  San = new Set(["Claude_Pages", "Claude_Docs"]),
  Y_t = "batch",
  l0r = "create",
  d0r = "query",
  c0r = "read",
  eBt = "update",
  vWn = "1a59c906-04da-521d-bda7-7f71b9f9e01c",
  tBt = "/v1/pages/mcp",
  Kz = "2cd180e1-ecb6-5156-82c8-41224ae6346e",
  na = "claude-artifacts",
  EWn = "/v1/code/mcp/ccr-artifacts",
  kAe = "/api/artifacts/mcp";
function u0r(e) {
  return Iie(e) === vWn;
}
var tHe = `mcp__${zo}__device_bash`,
  SLs = `mcp__${zo}__device_stage_files`,
  TWn = `mcp__${zo}__device_commit_files`,
  s = `mcp__${zo}__`;
function wLs(e) {
  return e.startsWith(`${s}device_`) && !e.slice(s.length).includes("__");
}
var mCo = "ide",
  f0r = `mcp__${mCo}__executeCode`,
  E = "office_bridge.listing";
function hKe(e) {
  let _meta = e._meta,
    t = typeof _meta === "object" && _meta !== null && E in _meta ? _meta[E] : void 0;
  return t === "stub" || t === "live" ? t : void 0;
}
var n7i = [tHe, `mcp__${zo}__device_list_dir`, SLs, TWn],
  kLs = new Set([mCo, zo]),
  S = ["claude_in_chrome", "claude_browser", "claude_preview", "claude_code_ios_simulator", "claude_code_android_emulator", "computer_use", "framebuffer", "plugins", "skills", "mcp_registry", "scheduled_tasks", "cowork", "session_info", "dispatch", "remote_devices", "ccd_directory"],
  p = new Set(["workspace", "terminal", "office", "visualize", "window_halo", "dev_debug", "ccd_session", RWn]);
function n(e) {
  return e.replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase().replace(/-/g, "_");
}
var i = ["claude_browser"];
function CWn(e, r = i) {
  let t = n(e);
  return r.find(item => n(item) === t) ?? null;
}
function Mie(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function nBt(e, r) {
  let t = Mie(e);
  return t.length > 0 && t === Mie(r);
}
function r7i(e, r = i) {
  if (kLs.has(e)) return !0;
  if (CWn(e, r) !== null) return !1;
  let t = n(e);
  return p.has(t) || S.some(item => t.startsWith(item));
}
export { zo, QJi, ZJi, SAe, mKe, eHe, wAe, e7i, i0r, mH, kWn, a0r, q_t, n5, Iie, JUt, t7i, QUt, ZUt, San, Y_t, l0r, d0r, c0r, eBt, vWn, tBt, Kz, na, EWn, kAe, u0r, tHe, SLs, TWn, wLs, mCo, f0r, hKe, n7i, kLs, CWn, Mie, nBt, r7i };