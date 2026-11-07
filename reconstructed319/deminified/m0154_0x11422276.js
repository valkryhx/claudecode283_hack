// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Jnt as getCached, jxe as setCached } from "B:/~BUN/root/chunk-game8aqv.js";
import { zpe as wellKnownPath, kxo, vxo } from "B:/~BUN/root/chunk-pwj77283.js";
function s() {
  return kxo({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? wellKnownPath,
    label: "token",
    fileLabel: "session ingress token",
    getCached: getCached,
    setCached: setCached,
    skipInReviewOrigin: !0
  });
}
async function Xea(credentials) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await vxo({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? wellKnownPath,
    label: "token",
    fileLabel: "session ingress token",
    getCached: getCached,
    setCached: setCached,
    credentials: credentials,
    skipInReviewOrigin: !0
  });
}
function zd() {
  let CLAUDE_CODE_SESSION_ACCESS_TOKEN = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (CLAUDE_CODE_SESSION_ACCESS_TOKEN) return CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  return s();
}
function uwe() {
  return zd() !== null;
}
function oG() {
  let e = zd();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = {
        Cookie: `sessionKey=${e}`
      },
      CLAUDE_CODE_ORGANIZATION_UUID = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (CLAUDE_CODE_ORGANIZATION_UUID) n["X-Organization-Uuid"] = CLAUDE_CODE_ORGANIZATION_UUID;
    return n;
  }
  return NHe(e);
}
function NHe(e) {
  return e ? {
    Authorization: `Bearer ${e}`
  } : {};
}
function nFr(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export { Xea, zd, uwe, oG, NHe, nFr };