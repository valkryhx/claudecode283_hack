// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Jnt,
  jxe
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  zpe,
  kxo,
  vxo
} from "B:/~BUN/root/chunk-pwj77283.js";

function s() {
  return kxo({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: zpe,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? zpe,
    label: "token",
    fileLabel: "session ingress token",
    getCached: Jnt,
    setCached: jxe,
    skipInReviewOrigin: !0
  })
}
async function Xea(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await vxo({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: zpe,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? zpe,
    label: "token",
    fileLabel: "session ingress token",
    getCached: Jnt,
    setCached: jxe,
    credentials: e,
    skipInReviewOrigin: !0
  })
}

function zd() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return s()
}

function uwe() {
  return zd() !== null
}

function oG() {
  let e = zd();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = {
        Cookie: `sessionKey=${e}`
      },
      r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n
  }
  return NHe(e)
}

function NHe(e) {
  return e ? {
    Authorization: `Bearer ${e}`
  } : {}
}

function nFr(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e
}
export {
  Xea,
  zd,
  uwe,
  oG,
  NHe,
  nFr
};
