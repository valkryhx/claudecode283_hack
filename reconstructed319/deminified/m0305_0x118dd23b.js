// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { te, gD } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { na as serverName } from "B:/~BUN/root/chunk-5az22yft.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Tp } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Z3 } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { zd } from "B:/~BUN/root/chunk-79595s9y.js";
var cGe = "read_artifact",
  tmo = "get_artifact",
  r = "read_file",
  nmo = "read_shared_artifact",
  hue = "read_comments",
  wmt = "reply_comment",
  Hvr = "resolve_comment",
  GLn = "reply_shared_comment",
  ZSs = "describe_type";
function rse() {
  return !Tp() && (!!i.CLAUDE_CODE_REMOTE || !!i.CLAUDE_CODE_REMOTE_SESSION_ID || zd() !== null);
}
function ree(o) {
  return br(serverName, o);
}
function $vr(toolName) {
  return {
    name: ree(toolName),
    mcpInfo: {
      serverName: serverName,
      toolName: toolName
    }
  };
}
function Hd() {
  return gD() && te().builtInArtifactHiddenForMcp;
}
function ews(o) {
  let e = Z3;
  return [o.name, o.underlyingV1ToolName, o.familyParentToolName].some(item => item !== void 0 && e.includes(item));
}
function xSa(o) {
  return Hd() && o.some(item => item.mcpInfo?.serverName === serverName);
}
function PSa(o) {
  return Hd() && o.mcpInfo?.serverName === serverName;
}
function OSa(o) {
  if (!Hd()) return [];
  return [cGe, tmo, ...(o ? [r] : [])].map($vr);
}
class n {
  tool = null;
  register(o) {
    this.tool = o;
  }
}
var rmo = new n();
function VLn() {
  return Hd() ? rmo.tool ?? void 0 : void 0;
}
export { cGe, tmo, nmo, hue, wmt, Hvr, GLn, ZSs, rse, ree, $vr, Hd, ews, xSa, PSa, OSa, rmo, VLn };