// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Dg, Im } from "B:/~BUN/root/chunk-gf53qpk6.js";
function Oir({
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
async function Mir(t) {
  let e = en(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await Dg(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function DSe(t) {
  let storedAccountUuid;
  try {
    storedAccountUuid = Im()?.accountUuid;
  } catch {
    storedAccountUuid = void 0;
  }
  return Oir({
    storedAccountUuid: storedAccountUuid,
    hostAccountUuid: await Mir(t)
  });
}
export { Oir, Mir, DSe };