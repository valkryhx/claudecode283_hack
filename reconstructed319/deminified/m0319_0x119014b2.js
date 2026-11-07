// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { qko } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Zd } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { FU } from "B:/~BUN/root/chunk-hacd8gcc.js";
import { join as f } from "path";
var p = 5;
class OauthSlotLockContendedError extends Error {
  constructor() {
    super("OAuth refresh lock contention: another process is holding the refresh lock");
    this.name = "OauthSlotLockContendedError";
  }
}
async function sAr(o, n) {
  if (q()) throw m("oauth_token_refresh", "oauth_slot_refresh_diskless"), Error("This hosted session (claude-code-server) cannot refresh an OAuth token");
  let s = FU();
  await ie().mkdir(s);
  let lockfilePath = f(s, o),
    a = !1,
    r,
    l = 0;
  while (!r) {
    l++;
    try {
      r = await Zd(lockfilePath, {
        lockfilePath: lockfilePath,
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: e => {
          a = !0, t(`OAuth refresh lock ${o} compromised: ${e.message}`, {
            level: "error"
          });
        }
      });
    } catch (error) {
      if (error.code === "ELOCKED") {
        if (l < p) {
          await J(1000 + Math.random() * 1000);
          continue;
        }
        throw new OauthSlotLockContendedError();
      }
      throw error;
    }
  }
  let c = {
      isCompromised: () => a
    },
    h = qko();
  try {
    return await n(c);
  } finally {
    try {
      try {
        await r();
      } catch (error) {
        t(`OAuth refresh lock ${o} release failed: ${d(error)}`, {
          level: "error"
        });
      }
    } finally {
      h();
    }
  }
}
export { OauthSlotLockContendedError as znn, sAr };