// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Kg, np } from "B:/~BUN/root/chunk-hb6x4e3n.js";
function Dto({
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
async function Lto(t) {
  let e = Vt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await Kg(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function sue(t) {
  let storedAccountUuid;
  try {
    storedAccountUuid = np()?.accountUuid;
  } catch {
    storedAccountUuid = void 0;
  }
  return Dto({
    storedAccountUuid: storedAccountUuid,
    hostAccountUuid: await Lto(t)
  });
}
export { Dto, Lto, sue };