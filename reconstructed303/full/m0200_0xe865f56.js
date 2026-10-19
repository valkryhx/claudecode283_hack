// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  dl
} from "B:/~BUN/root/chunk-7c8rc0p5.js";
import {
  CLr
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  jx
} from "B:/~BUN/root/chunk-q4sexgb0.js";
import {
  join as f
} from "path";
var p = 5;
class nFt extends Error {
  constructor() {
    super("OAuth refresh lock contention: another process is holding the refresh lock");
    this.name = "OauthSlotLockContendedError"
  }
}
async function Lqn(o, n) {
  if (de()) throw m("oauth_token_refresh", "oauth_slot_refresh_diskless"), Error("This hosted session (claude-code-server) cannot refresh an OAuth token");
  let s = jx();
  await se().mkdir(s);
  let i = f(s, o),
    a = !1,
    r, l = 0;
  while (!r) {
    l++;
    try {
      r = await dl(i, {
        lockfilePath: i,
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: (e) => {
          a = !0, t(`OAuth refresh lock ${o} compromised: ${e.message}`, {
            level: "error"
          })
        }
      })
    } catch (e) {
      if (e.code === "ELOCKED") {
        if (l < p) {
          await Y(1000 + Math.random() * 1000);
          continue
        }
        throw new nFt
      }
      throw e
    }
  }
  let c = {
      isCompromised: () => a
    },
    h = CLr();
  try {
    return await n(c)
  } finally {
    try {
      try {
        await r()
      } catch (e) {
        t(`OAuth refresh lock ${o} release failed: ${d(e)}`, {
          level: "error"
        })
      }
    } finally {
      h()
    }
  }
}
export {
  nFt,
  Lqn
};
