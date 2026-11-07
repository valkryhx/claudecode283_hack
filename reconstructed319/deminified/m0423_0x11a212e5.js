// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { _Wt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { bu } from "B:/~BUN/root/chunk-5h4fwkjy.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { wn, cO } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { On } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Af } from "B:/~BUN/root/chunk-vaq2hdme.js";
import { TF } from "B:/~BUN/root/chunk-4hx27rd1.js";
import { ec } from "B:/~BUN/root/chunk-jjs9d8eg.js";
import { RD } from "B:/~BUN/root/chunk-xbnyqyft.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { iP } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var T = {
  skill: "skill_tool",
  mcp: "mcp_tool",
  evalRegistered: "eval_registered",
  dynamic: "dynamic_tool",
  unreadable: "unreadable_tool"
};
function Rh(e) {
  try {
    if (e.name.startsWith(RD)) return T.skill;
    let r = String(On(e.name));
    if (r !== e.name) return r;
    if (e.mcpInfo !== void 0) return T.mcp;
    if (e.name.startsWith("eval_registered__")) return T.evalRegistered;
    if (e.uiTableKey !== void 0 || e.name.includes("__")) return T.dynamic;
    return e.name;
  } catch {
    return T.unreadable;
  }
}
var b = [...Object.values(T), Me, Af, ec, dt, ze, Yt, TF, bu];
function suo(e) {
  let r = Rh(e);
  return b.find(item => item === r) ?? "other_tool";
}
var x = new W(() => new Set());
function _(e, r) {
  return `${e}_${r}`;
}
var k = /_(\d+)$/;
function Pze(e) {
  let r = k.exec(e);
  return r ? e.slice(0, -r[0].length) : void 0;
}
function O(e, r, u) {
  let i = wn(r, e.name);
  if (i === void 0 || !cO(i)) return null;
  let l = d => (c("batch_tools", d, {
    tool_name: On(i.name),
    isMcp: !1
  }), [{
    type: "tool_use",
    id: _(e.id, 0),
    name: i.name,
    input: e.input,
    ...(e.caller !== void 0 && {
      caller: e.caller
    })
  }]);
  try {
    let d = i.inputSchema.safeParse(e.input);
    if (!d.success) return {
      synthetics: l("parse_failed"),
      decomposed: !1
    };
    let {
      v1Tool: v1Tool,
      entries: entries
    } = i.perEntryHookInputs(d.data);
    if (entries.length === 0) return {
      synthetics: l("zero_entries"),
      decomposed: !1
    };
    return {
      decomposed: !0,
      synthetics: entries.map((item, index) => {
        let input = item;
        try {
          input = u(v1Tool, item);
        } catch (error) {
          if (error instanceof Error && error.name === "ZodError") {
            let h = error instanceof iP ? L(error.issues.map(item => item.code)).join(",") : "unknown";
            t(`Normalizing a batch entry's input for tool=${Rh(v1Tool)} was rejected: issues ${h}; the error text (${error.message.length} characters) is not logged`, {
              level: "error"
            });
          } else a(Error(`Normalizing a batch entry's input for tool=${suo(v1Tool)} failed: ${_Wt(error)} was thrown; its text is not logged`));
        }
        return {
          type: "tool_use",
          id: _(e.id, index),
          name: v1Tool.name,
          input: input,
          ...(e.caller !== void 0 && {
            caller: e.caller
          })
        };
      })
    };
  } catch {
    return {
      synthetics: l("per_entry_threw"),
      decomposed: !1
    };
  }
}
function HSr(e) {
  let r;
  for (let u of e) if (cO(u)) r ??= new Set(), r.add(u.underlyingV1ToolName);
  if (r === void 0) return e;
  return e.filter(item => !r.has(item.name));
}
function wDn(e, r, u) {
  let i,
    batchToolUses = [];
  for (let d = 0; d < e.length; d++) {
    let n = e[d];
    if (n.type !== "tool_use") {
      i?.push(n);
      continue;
    }
    let o = O(n, r, u);
    if (o === null) {
      i?.push(n);
      continue;
    }
    if (i ??= e.slice(0, d), i.push(...o.synthetics), o.decomposed) batchToolUses.push({
      id: n.id,
      name: n.name
    }), g("batch_tools", {
      tool_name: On(n.name),
      isMcp: !1
    });
  }
  return {
    content: i ?? e,
    batchToolUses: batchToolUses
  };
}
function QNi(e, r, u) {
  if (r === void 0 || r.length === 0) return e;
  let i = new Map();
  for (let o of r) if (!i.has(o.id)) i.set(o.id, o);
  let l = new Map();
  for (let o of i.values()) {
    let s = wn(u, o.name);
    if (s === void 0 || !cO(s)) continue;
    let p = [],
      m;
    for (let f of e) if (f.type === "tool_use" && Pze(f.id) === o.id) m ??= f, p.push(f.input);
    try {
      l.set(o.id, {
        type: "tool_use",
        id: o.id,
        name: o.name,
        input: s.reassemble(p),
        ...(m?.caller !== void 0 && {
          caller: m.caller
        })
      });
    } catch {
      let f = x.of(H().host);
      if (!f.has(o.id)) f.add(o.id), c("batch_tools", "reassemble_threw", {
        tool_name: On(o.name),
        isMcp: !1
      });
    }
  }
  let d = new Set(),
    n = [];
  for (let o of e) {
    if (o.type === "tool_use") {
      let s = Pze(o.id);
      if (s !== void 0 && l.has(s)) {
        if (!d.has(s)) d.add(s), n.push(l.get(s));
        continue;
      }
    }
    n.push(o);
  }
  return n;
}
function ZNi(e, r) {
  let u = !1;
  for (let n of e) {
    if (n.type === "assistant") {
      for (let o of n.message.content) if (o.type === "tool_use") {
        let s = wn(r, o.name);
        if (s !== void 0 && cO(s)) u = !0;
      }
    }
    if (n.type === "user" && !u) {
      if (Array.isArray(n.message.content) && n.message.content.some(item => item.type === "tool_result" && Pze(item.tool_use_id) !== void 0)) u = !0;
    }
  }
  if (!u) return e;
  let i = new Map();
  for (let n of e) {
    if (n.type !== "assistant") continue;
    for (let o of n.message.content) if (o.type === "tool_use") i.set(o.id, o);
  }
  let l = new Map();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let o of n.message.content) {
      if (o.type !== "tool_result") continue;
      let s = Pze(o.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let p = l.get(s);
      if (p === void 0) p = new Map(), l.set(s, p);
      if (!p.has(o.tool_use_id)) p.set(o.tool_use_id, o);
    }
  }
  if (l.size === 0) return e;
  let d = new Set();
  return e.flatMap(item => {
    if (item.type !== "user" || !Array.isArray(item.message.content)) return [item];
    let o = !1,
      content = [];
    for (let p of item.message.content) {
      if (p.type !== "tool_result") {
        content.push(p);
        continue;
      }
      let m = Pze(p.tool_use_id),
        f = m !== void 0 ? l.get(m) : void 0;
      if (m === void 0 || f === void 0) {
        content.push(p);
        continue;
      }
      if (o = !0, d.has(m)) continue;
      d.add(m);
      let h = i.get(m),
        y = wn(r, h.name),
        B = y !== void 0 && cO(y) ? y : void 0;
      content.push(w(B, m, R(B, h.input, m, f)));
    }
    if (!o) return [item];
    if (content.length === 0) return [];
    return [{
      ...item,
      message: {
        ...item.message,
        content: content
      }
    }];
  });
}
function R(e, r, u, i) {
  let l;
  if (e !== void 0) try {
    let n = e.inputSchema.safeParse(r);
    if (n.success) l = e.perEntryHookInputs(n.data).entries;
  } catch {}
  let length = l?.length ?? 0;
  for (let n of i.keys()) {
    let o = k.exec(n);
    if (o) length = Math.max(length, Number(o[1]) + 1);
  }
  if (length > 1000) length = l?.length ?? i.size;
  return Array.from({
    length: length
  }, (n, o) => {
    let result = i.get(_(u, o));
    return result !== void 0 ? {
      input: l?.[o],
      result: result
    } : {
      input: l?.[o],
      error: "no result"
    };
  });
}
function w(e, tool_use_id, u) {
  let i = [],
    text = "",
    d = !1,
    n = s => {
      if (s.length > 0) text = text === "" ? s : `${text}
${s}`;
    },
    o = () => {
      if (text !== "") i.push({
        type: "text",
        text: text
      }), text = "";
    };
  for (let [s, p] of u.entries()) {
    let m = p.result === void 0 || p.result.is_error === !0;
    if (m) d = !0;
    if (n(`--- entry ${s + 1}${m ? " (error)" : ""} ---`), p.result !== void 0) {
      let content_2 = p.result.content;
      if (typeof content_2 === "string") n(content_2);else if (Array.isArray(content_2)) for (let h of content_2) if (h.type === "text") n(h.text);else o(), i.push(h);
    } else n(`[entry ${s + 1} error: ${p.error ?? "no result"}]`);
  }
  if (u.length === 1 && e !== void 0) n(`<system-reminder>Tip: ${e.name} accepts multiple entries in one call (\`${e.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
  return o(), {
    type: "tool_result",
    tool_use_id: tool_use_id,
    content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
    ...(d && {
      is_error: !0
    })
  };
}
var E = new Map();
function L0e(e) {
  return E.get(e);
}
function $Sr(e) {
  return e.map(L0e).filter(item => item !== void 0).filter(item => item.isEnabled());
}
function eFi(e, r) {
  return r.find(item => item.underlyingV1ToolName === e)?.name ?? e;
}
function Oze(e) {
  for (let [r, u] of E) if (u.name === e) return r;
  return;
}
export { Rh, suo, Pze, HSr, wDn, QNi, ZNi, L0e, $Sr, eFi, Oze };