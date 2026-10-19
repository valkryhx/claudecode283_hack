// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  K,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  Qie
} from "B:/~BUN/root/chunk-w6et565n.js";
import {
  Wh,
  _,
  jo
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  mie
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  Fs
} from "B:/~BUN/root/chunk-dq7zfs8r.js";
import {
  Uj
} from "B:/~BUN/root/chunk-z8fd2x5s.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  promises as f
} from "fs";
import {
  dirname as h,
  join as y
} from "path";
var g = new Set(["model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata"]),
  S = new Set([...g, "thread"]),
  D = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload)=[^;"\\]*;/g,
  R = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g,
  k = 5;
class l {
  recording = !0
}
var A = new z(() => new l);

function w() {
  return A.of(j().host).recording
}

function uas(t) {
  let {
    stateByAgent: n,
    retiredInitHashes: e
  } = Fs().dumpPrompts, r = n.get(t)?.writtenInitDataHash;
  if (n.delete(t), r !== void 0) e.set(t, r)
}

function pas() {
  Fs().dumpPrompts.stateByAgent.clear(), Fs().dumpPrompts.retiredInitHashes.clear()
}

function H(t) {
  return
}

function P(t) {
  return y(Pe(), "dump-prompts", `${t??K()}.jsonl`)
}

function E(t, n, e, r) {
  Fs().dumpPrompts.appendQueue.run(t, async () => {
    if (e) {
      if ((await e.storageV5.append(e.key, [{
          data: n + `
`
        }])).ok) r();
      return
    }
    if (de()) return;
    await f.mkdir(h(t), {
      recursive: !0
    }), await f.appendFile(t, n + `
`), r()
  }).catch(() => {})
}

function v(t, n, e, r, p) {
  try {
    return
  } catch {} finally {
    e.dumpInFlight = !1
  }
}

function fas(t, n) {
  if (!w()) return mie;
  let e = P(t),
    r = W() && n !== void 0 ? {
      storageV5: n,
      key: Be.log(t, "apiDump")
    } : void 0;
  return async (p, u) => {
    let {
      stateByAgent: m,
      retiredInitHashes: d
    } = Fs().dumpPrompts, i = d.get(t), o = m.get(t) ?? {
      initialized: i !== void 0,
      lastInitDataHash: i ?? "",
      writtenInitDataHash: i,
      dumpInFlight: !1
    };
    if (m.set(t, o), u?.method === "POST" && u.body && !o.dumpInFlight) {
      o.dumpInFlight = !0;
      let c = new Date().toISOString();
      setImmediate(v, u.body, c, o, e, r)
    }
    return mie(p, u)
  }
}

function x(t) {
  let n = t.get("thread");
  if (n === void 0) return !1;
  let e = jo(n);
  if (typeof e !== "object" || e === null || !("type" in e) || e.type !== "continue") return !1;
  if (!t.has("tools")) return !0;
  let r = jo(t.get("system") ?? "null");
  return Array.isArray(r) && r.length > 0 && r.every((p) => Uj(p))
}
export {
  uas,
  pas,
  fas
};
