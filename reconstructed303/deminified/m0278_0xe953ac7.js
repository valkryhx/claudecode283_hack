// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { OH } from "B:/~BUN/root/chunk-z96xwcnb.js";
import { vO } from "B:/~BUN/root/chunk-hgpj62j5.js";
import { o } from "B:/~BUN/root/chunk-g3snhg6n.js";
var Ur = "_host",
  GOr = "_host_context",
  weakMap = new WeakMap();
function BFs(e, n) {
  return weakMap.set(e, n), e;
}
function tIe(e) {
  let n = weakMap.get(e);
  return n === void 0 ? {} : {
    [GOr]: n
  };
}
var nIe = "device",
  c = ["container", "this-machine"],
  V1e = /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])?$/;
function Tae(e) {
  return !UE(e) && V1e.test(e);
}
function FG() {
  return a.CLAUDE_CODE_REMOTE ? "container" : "this-machine";
}
function UE(e) {
  return c.some(item => item === e);
}
function PK() {
  return vO() ? {
    [Ur]: o().optional().describe("Optional. Name of an attached machine to run this tool call on; omit it to run in this session's own environment (the default). Use only a name this session listed as attached; the result says where it ran. Choose per call by which machine the command or file path concerns; the attached-machines note says what lives where and which are reachable now.")
  } : {};
}
var d = 40;
function LX(input) {
  let {
    [Ur]: n,
    ...input_2
  } = input;
  if (typeof n !== "string") return {
    requested: void 0,
    input: input
  };
  let r = n.trim();
  return {
    requested: r === "" || UE(r) ? void 0 : r,
    input: input_2
  };
}
function VOr(e) {
  let n = LX(e).requested;
  return {
    requestedMachine: n,
    runsOnMachine: vO() && n !== void 0 && Tae(n) ? n : void 0
  };
}
function UT(e) {
  return ne(OH(e), d);
}
function Wj() {
  return `This call named a machine ("${Ur}") but was not forwarded to it; omit the field to run here.`;
}
function mqn() {
  return `Running tool calls on an attached machine is not enabled in this session; omit "${Ur}" to run here.`;
}
function Nu(e) {
  return i(e) !== void 0;
}
function Qsn(e) {
  let n = i(e);
  return n === void 0 ? void 0 : UT(n) || void 0;
}
function i(e) {
  if (typeof e !== "object" || e === null || !(Ur in e)) return;
  let n = e[Ur];
  if (typeof n !== "string") return;
  let t = n.trim();
  return t === "" || UE(t) ? void 0 : t;
}
var rv = "EnterPlanMode";
export { rv, Ur, GOr, BFs, tIe, nIe, V1e, Tae, FG, UE, PK, LX, VOr, UT, Wj, mqn, Nu, Qsn };