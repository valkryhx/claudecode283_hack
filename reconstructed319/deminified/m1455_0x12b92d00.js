// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Tm, Yd } from "B:/~BUN/root/chunk-1ks9vs37.js";
function P7o({
  storedAccountUuid: t,
  hostAccountUuid: e
}) {
  if (!e) return t ? {
    status: "resolved",
    accountUuid: t,
    source: "stored"
  } : {
    status: "missing"
  };
  if (!t) return {
    status: "resolved",
    accountUuid: e,
    source: "env"
  };
  return t.trim().toLowerCase() === e.toLowerCase() ? {
    status: "resolved",
    accountUuid: t,
    source: "env"
  } : {
    status: "mismatch"
  };
}
async function O7o(t) {
  let e = Nt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await Tm(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function fre(t) {
  let storedAccountUuid;
  try {
    storedAccountUuid = Yd()?.accountUuid;
  } catch {
    storedAccountUuid = void 0;
  }
  return P7o({
    storedAccountUuid: storedAccountUuid,
    hostAccountUuid: await O7o(t)
  });
}
export { P7o, O7o, fre };