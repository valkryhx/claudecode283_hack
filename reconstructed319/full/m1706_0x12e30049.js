// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ck
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Nr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  zo
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  wKe
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  qw,
  nZ,
  fw,
  jo
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  $4s
} from "B:/~BUN/root/chunk-syzckm6y.js";
import {
  GC
} from "B:/~BUN/root/chunk-3namn0f2.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";

function Gun() {
  return nZ(zo)
}
async function TDo() {
  await Promise.all([GC(), wKe()])
}

function CDo(e, r) {
  return $4s(r.scope) && !jo(e)
}

function M4e(e, r) {
  return CDo(e, r) && !t(r)
}

function t(e) {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().isFirstPartyDesignServerConfig(e)
}

function RDo(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "http":
    case "sse":
    case "ws":
      return !0;
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return !1
  }
}

function i(e) {
  return Object.assign(qw(), Ro(e, RDo))
}
async function ADo({
  storageV5: e
} = {}) {
  if (Ck() || Nr()) return {
    configs: qw(),
    deniedBySettings: !1
  };
  await TDo();
  let {
    servers: r
  } = await fw({}, {
    purpose: "deviceBridge",
    storageV5: e
  });
  return {
    configs: i(r),
    deniedBySettings: Gun()
  }
}
async function i4n(e = {}) {
  let {
    configs: r,
    deniedBySettings: o
  } = await ADo(e);
  return o ? qw() : r
}
export {
  Gun,
  TDo,
  CDo,
  M4e,
  RDo,
  ADo,
  i4n
};
