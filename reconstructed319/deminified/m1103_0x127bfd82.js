// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $e } from "B:/~BUN/root/chunk-fg0appz9.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { b7r, V8e, Ie, zpr, bDe, Bt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Mf as text_2, sy } from "B:/~BUN/root/chunk-game8aqv.js";
import { o, I, C, xt, Be, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
var W2t = p(() => xt({
  type: T("text"),
  text: o().min(1)
}));
var iBo = t => t.kind === "plugin" && "name" in t ? t.name : void 0;
function aBo(t, uuid) {
  let {
      message: message
    } = t,
    r = message.content.flatMap(item => {
      let u = W2t().safeParse(item);
      return u.success ? [u.data.text] : [];
    }),
    i = message.content.find(item => item.type !== "text");
  if (i !== void 0 || r.length !== message.content.length) return {
    reason: `a ${i?.type ?? "text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)`
  };
  if (message.type === "system") {
    let [s] = r;
    return s !== void 0 && r.length === 1 ? {
      row: {
        ...Bt(s, "info"),
        uuid: uuid
      }
    } : {
      reason: "a notice that is not one text block"
    };
  }
  let f = message.type === "user" && message.isMeta === !0,
    name = iBo(t.origin);
  return f ? {
    row: Ie({
      content: r.map(s => ({
        type: "text",
        text: s
      })),
      isMeta: !0,
      uuid: uuid,
      ...(name !== void 0 && {
        origin: {
          kind: "plugin",
          name: name
        }
      })
    })
  } : {
    reason: `a ${message.type} row` + (message.type === "user" ? " that is not isMeta" : "") + " (a plugin appends a user-role isMeta row or a system notice; a prompt is $.prompt.submit)"
  };
}
function lBo(t, e) {
  let n = t ?? "main";
  if (e) return `${n} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`;
}
var t9n = t => bDe(t).messages.map(item => ({
  content: item.message.content
}));
function z2t(t) {
  let {
    content: content
  } = t;
  return typeof content === "string" ? [content] : content.flatMap(item => item.type === "text" ? [item.text] : []);
}
function dBo(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function n9n(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return b7r(t.message.content);
    case "attachment":
      return t9n(t).flatMap(z2t).map(e => ({
        type: "text",
        text: e
      }));
    case "system":
      {
        let text = dBo(t);
        return text === void 0 ? [] : [{
          type: "text",
          text: text
        }];
      }
  }
}
function JGr(t) {
  let e = t.type === "attachment",
    n = t.type === "system",
    name_2 = e ? t.attachment.type : n ? t.subtype : void 0,
    i = !sy(t),
    role = t.type === "assistant" ? "assistant" : "user",
    m = "isMeta" in t && t.isMeta === !0;
  return {
    type: t.type,
    ...(name_2 !== void 0 && {
      name: name_2
    }),
    ...(i && {
      role: role
    }),
    ...(m && {
      isMeta: !0
    }),
    content: n9n(t)
  };
}
var cBo = (t, e) => !zpr(t) && e.length > 0 && e.every(({
  content: content_2
}) => typeof content_2 === "string" || content_2.every(item => item.type === "text"));
async function pgn(t, e) {
  let r = e?.isHookable === !0 ? e : void 0,
    i = Nt(t.uuid),
    f = lBo(t.agentId, e !== void 0),
    s = i !== null && r !== void 0 ? aBo(t, i) : {
      reason: i === null ? "a uuid the engine did not mint" : f
    };
  if (r === void 0 || "reason" in s) {
    let u = "reason" in s ? s.reason : f;
    throw new $e(`$.session.append: refused: ${u}`);
  }
  return (r.keepArrived ?? r.keep)([s.row]), r.arrived([s.row]), {
    message: JGr(s.row),
    uuid: s.row.uuid
  };
}
var r9n = new Set(["text", "image", "document"]);
function LEt(t) {
  let e = new Map();
  return t.map(item => {
    if (r9n.has(item.type)) return;
    if (item.type === "tool_use" && typeof item.id === "string") return `tool_use:${item.id}`;
    let tool_use_id = item.tool_use_id;
    if (item.type === "tool_result" && typeof tool_use_id === "string") return `tool_result:${tool_use_id}`;
    let i = e.get(item.type) ?? 0;
    return e.set(item.type, i + 1), `${item.type}#${i}`;
  });
}
var uBo = p(() => xt({
  type: o()
}));
var bst = t => Array.isArray(t) ? t.flatMap(item => {
  let n = uBo().safeParse(item);
  return n.success ? [n.data] : [];
}) : [];
var Sst = (t, e) => e.flatMap(item => {
  let r = item.kind === "text" ? item.text : t[item.index];
  return r === void 0 ? [] : [r];
});
function mgn(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let n = Array.isArray(t) ? t : [],
    r = new Set();
  return e.flatMap(item => {
    let f = n.findIndex((u, index) => !r.has(index) && V8e(u, item)),
      m = n[f],
      s = W2t().safeParse(item);
    if (m !== void 0) return r.add(f), [m];
    return s.success ? [{
      type: "text",
      text: s.data.text
    }] : [];
  });
}
var fBo = new Set(["thinking", "redacted_thinking", "tool_result"]);
function pBo(t, e, n) {
  let index_2 = e.findIndex((item, index) => !n.has(index) && r9n.has(item.type) && V8e(item, t));
  if (index_2 !== -1) return n.add(index_2), {
    kind: "raised",
    index: index_2
  };
  let i = W2t().safeParse(t);
  return i.success ? {
    kind: "text",
    text: i.data.text
  } : void 0;
}
var o9n = "^";
var mBo = (index_3, content_3, isError) => ({
  kind: "tool-result",
  index: index_3,
  ...(content_3 !== void 0 && {
    content: content_3
  }),
  isError: isError
});
var hBo = p(() => xt({
  type: T("tool_result"),
  content: Be([o(), C(xt({
    type: o()
  }))]).optional(),
  is_error: I().optional()
}));
function gBo(index_4, e, n) {
  let r = hBo().safeParse(e);
  return r.success ? mBo(index_4, r.data.content, r.data.is_error ?? n) : {
    kind: "raised",
    index: index_4
  };
}
function hgn(t, e) {
  if (t.length === 0) return [];
  let n = LEt(t),
    r = new Set(n.filter(item => item !== void 0)),
    i = n.filter((item, index) => item !== void 0 && t[index]?.type === "tool_result"),
    f = LEt(e),
    m = U(e, a => a.type === "tool_result" && typeof a.tool_use_id !== "string") === i.length,
    s = new Map(),
    u = new Map(),
    x = new Set(),
    g = o9n,
    _ = 0;
  e.forEach((item, index) => {
    let y = item.type === "tool_result" && typeof item.tool_use_id !== "string",
      d = y ? m ? i[_++] : void 0 : f[index];
    if (d === void 0 && !y) {
      let h = pBo(item, t, x),
        M = s.get(g) ?? [];
      if (h !== void 0) s.set(g, [...M, h]);
      return;
    }
    if (d === void 0 || !r.has(d)) return;
    if (g = d, item.type === "tool_result") u.set(d, item);
  });
  let k = t.findIndex(item => !fBo.has(item.type)),
    A = k === -1 ? t.length : k,
    l = [];
  if (t.forEach((item, index_5) => {
    if (index_5 === A) l.push(...(s.get(o9n) ?? []));
    let y = n[index_5];
    if (y === void 0) return;
    let d = u.get(y);
    l.push(d === void 0 ? {
      kind: "raised",
      index: index_5
    } : gBo(index_5, d, item.is_error === !0), ...(s.get(y) ?? []));
  }), A === t.length) l.push(...(s.get(o9n) ?? []));
  return l.length > 0 ? l : [{
    kind: "text",
    text: text_2
  }];
}
import { randomUUID as rt } from "crypto";
var ggn = ({
  message: message_2,
  agentId: agentId
}, name_3) => ({
  message: {
    type: message_2.type,
    ...(message_2.type === "user" && {
      role: "user",
      isMeta: !0
    }),
    content: message_2.content
  },
  door: "note",
  origin: {
    kind: "plugin",
    name: name_3
  },
  uuid: rt(),
  ...(agentId !== void 0 && {
    agentId: agentId
  })
});
export { W2t, iBo, aBo, lBo, t9n, z2t, dBo, n9n, JGr, cBo, pgn, r9n, LEt, uBo, bst, Sst, mgn, fBo, pBo, o9n, mBo, hBo, gBo, hgn, ggn };