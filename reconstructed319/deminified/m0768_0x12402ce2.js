// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, z, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { S_e } from "B:/~BUN/root/chunk-jj9s326a.js";
import { Hb, _, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ese } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Cs } from "B:/~BUN/root/chunk-kpr2et3s.js";
import { bur } from "B:/~BUN/root/chunk-27h4st9h.js";
import { i0n } from "B:/~BUN/root/chunk-7wcc5pbk.js";
import { J6 } from "B:/~BUN/root/chunk-n3m61sfz.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { promises as g } from "fs";
import { dirname as y, join as R } from "path";
var l = new Set(["model", "system", "tools", "max_tokens", "thinking", "output_config", "context_management", "metadata"]),
  S = new Set([...l, "thread"]),
  D = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload|prev_msg|prev_prompt_index|prev_turn_index)=[^;"\\]*;/g,
  k = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g,
  A = /"(?:trigger|keep)":\{"type":"tool_uses","value":\d+\}/g,
  w = new Map([["metadata", k], ["context_management", A]]),
  E = 5;
class h {
  recording = !0;
}
var P = new W(() => new h());
function v() {
  return P.of(H().host).recording;
}
function xdi(t) {
  let {
      stateByAgent: stateByAgent,
      retiredInitHashes: retiredInitHashes
    } = Cs().dumpPrompts,
    o = stateByAgent.get(t)?.writtenInitDataHash;
  if (stateByAgent.delete(t), o !== void 0) retiredInitHashes.set(t, o);
}
function Pdi() {
  Cs().dumpPrompts.stateByAgent.clear(), Cs().dumpPrompts.retiredInitHashes.clear();
}
function x(t) {
  return;
}
function I(t) {
  return R(Ue(), "dump-prompts", `${t ?? z()}.jsonl`);
}
function T(t, n, e, o) {
  Cs().dumpPrompts.appendQueue.run(t, async () => {
    if (e) {
      if ((await e.storageV5.append(e.key, [{
        data: n + `
`
      }])).ok) o();
      return;
    }
    if (q()) return;
    await g.mkdir(y(t), {
      recursive: !0
    }), await g.appendFile(t, n + `
`), o();
  }).catch(() => {});
}
function F(t, n, e, o, a) {
  try {
    return;
  } catch {} finally {
    e.dumpInFlight = !1;
  }
}
function Odi(t, storageV5) {
  if (!v()) return ese;
  let e = I(t),
    o = X() && storageV5 !== void 0 ? {
      storageV5: storageV5,
      key: Ve.log(t, "apiDump")
    } : void 0,
    a = async (c, i) => {
      let {
          stateByAgent: stateByAgent_2,
          retiredInitHashes: retiredInitHashes_2
        } = Cs().dumpPrompts,
        writtenInitDataHash = retiredInitHashes_2.get(t),
        u = stateByAgent_2.get(t) ?? {
          initialized: writtenInitDataHash !== void 0,
          lastInitDataHash: writtenInitDataHash ?? "",
          writtenInitDataHash: writtenInitDataHash,
          dumpInFlight: !1
        };
      if (stateByAgent_2.set(t, u), i?.method === "POST" && i.body && !u.dumpInFlight) {
        u.dumpInFlight = !0;
        let r = new Date().toISOString();
        setImmediate(F, Buffer.isBuffer(i.body) ? i.body.toString() : i.body, r, u, e, o);
      }
      return ese(c, i);
    };
  return bur(a), a;
}
function B(t) {
  let n = t.get("thread");
  if (n === void 0) return !1;
  let e = ds(n);
  if (typeof e !== "object" || e === null || !("type" in e) || e.type !== "continue") return !1;
  if (!t.has("tools")) return !0;
  let o = ds(t.get("system") ?? "null");
  return Array.isArray(o) && o.length > 0 && o.every(item => J6(item));
}
export { xdi, Pdi, Odi };