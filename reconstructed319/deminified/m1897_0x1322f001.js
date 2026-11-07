// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Ti } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { KKo } from "B:/~BUN/root/chunk-f8txfcky.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { lYr } from "B:/~BUN/root/chunk-f8djjaxt.js";
import { ft, bc } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { co as tool_name } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { TLe } from "B:/~BUN/root/chunk-3c4vnaj4.js";
import { Rle } from "B:/~BUN/root/chunk-1yt8p22k.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var p = [Me, kt, ft, bc, Fs],
  l = 80;
function c(t) {
  if (!p.includes(t.toolName)) return {};
  let e = D(t.toolInput) ? t.toolInput.description : void 0,
    description = ct(Rle(e, l), l);
  return description === "" ? {} : {
    description: description
  };
}
var n = he(new Map(), t => t.clear());
function QVo(t) {
  if (t === void 0 || !TLe() || !lYr()) return;
  let e = {
    state: "holding",
    held: new Map()
  };
  return {
    awaitReceipt() {
      n.set(t, e);
    },
    tick(r) {
      if (r.type !== "progress" || e.state === "ended") return;
      try {
        let o = KKo({
          toolUseID: r.toolUseID,
          parentToolUseID: r.parentToolUseID ?? t,
          data: r.data,
          withheldInput: c(r.data)
        });
        if (o === void 0) return;
        if (e.state === "released") Ti(o);else e.held.set(o.tool_use_id, o);
      } catch (error) {
        a(error);
      }
    },
    ended(r, o) {
      if (e.state === "ended") return;
      let s = e.state === "released";
      if (e.state = "ended", e.held.clear(), !s) return;
      n.delete(t), e.sentEnd = !0, i(t, r, o);
    },
    lost() {
      if (e.sentEnd === !0) e.sentEnd = void 0, i(t, void 0, [], !0);
    }
  };
}
function cya(t) {
  if (n.size === 0 || t.type !== "user" || !Array.isArray(t.message.content)) return;
  try {
    for (let e of t.message.content) {
      if (e.type !== "tool_result") continue;
      let r = n.get(e.tool_use_id);
      if (r?.state === "ended") {
        n.delete(e.tool_use_id), i(e.tool_use_id, void 0, []);
        continue;
      }
      if (r?.state !== "holding") continue;
      r.state = "released";
      for (let o of r.held.values()) Ti(o);
      r.held.clear();
    }
  } catch (error) {
    a(error);
  }
}
function i(tool_use_id, e, r, o = !1) {
  try {
    Ti({
      type: "tool_progress",
      tool_use_id: tool_use_id,
      tool_name: tool_name,
      parent_tool_use_id: null,
      elapsed_time_seconds: 0,
      script_ended: !0,
      ...(o && {
        settle_lost: !0
      }),
      final_tool_use_ids: (e ?? []).flatMap(item => item.type === "assistant" && Array.isArray(item.message.content) ? item.message.content.flatMap(item => item.type === "tool_use" ? [item.id] : []) : []),
      detached_tool_use_ids: [...r]
    });
  } catch (error) {
    a(error);
  }
}
export { QVo, cya };