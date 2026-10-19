// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ie } from "B:/~BUN/root/chunk-hkh6hras.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Gyr, n$e, Re, fwr, N$e, Bt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, hu as text_2, dS } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { o, M, T, _t, $e, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
var Okt = f(() => _t({
  type: C("text"),
  text: o().min(1)
}));
var ZYr = t => t.kind === "plugin" && "name" in t ? t.name : void 0;
function e6r(t, uuid) {
  let {
      message: message
    } = t,
    r = message.content.flatMap(item => {
      let u = Okt().safeParse(item);
      return u.success ? [u.data.text] : [];
    }),
    p = message.content.find(item => item.type !== "text");
  if (p !== void 0 || r.length !== message.content.length) return {
    reason: `a ${p?.type ?? "text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)`
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
  let a = message.type === "user" && message.isMeta === !0,
    name = ZYr(t.origin);
  return a ? {
    row: Re({
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
function t6r(t, e) {
  let n = t ?? "main";
  if (e) return `${n} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`;
}
var nkn = t => N$e(t).messages.map(item => ({
  content: item.message.content
}));
function Ikt(t) {
  let {
    content: content
  } = t;
  return typeof content === "string" ? [content] : content.flatMap(item => item.type === "text" ? [item.text] : []);
}
function n6r(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function rkn(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return Gyr(t.message.content);
    case "attachment":
      return nkn(t).flatMap(Ikt).map(e => ({
        type: "text",
        text: e
      }));
    case "system":
      {
        let text = n6r(t);
        return text === void 0 ? [] : [{
          type: "text",
          text: text
        }];
      }
  }
}
function uor(t) {
  let e = t.type === "attachment",
    n = t.type === "system",
    name_2 = e ? t.attachment.type : n ? t.subtype : void 0,
    p = !dS(t),
    role = t.type === "assistant" ? "assistant" : "user",
    m = "isMeta" in t && t.isMeta === !0;
  return {
    type: t.type,
    ...(name_2 !== void 0 && {
      name: name_2
    }),
    ...(p && {
      role: role
    }),
    ...(m && {
      isMeta: !0
    }),
    content: rkn(t)
  };
}
var r6r = (t, e) => !fwr(t) && e.length > 0 && e.every(({
  content: content_2
}) => typeof content_2 === "string" || content_2.every(item => item.type === "text"));
async function NVt(t, e) {
  let r = e?.isHookable === !0 ? e : void 0,
    p = Vt(t.uuid),
    a = t6r(t.agentId, e !== void 0),
    s = p !== null && r !== void 0 ? e6r(t, p) : {
      reason: p === null ? "a uuid the engine did not mint" : a
    };
  if (r === void 0 || "reason" in s) {
    let u = "reason" in s ? s.reason : a;
    throw new Ie(`$.session.append: refused: ${u}`);
  }
  return (r.keepArrived ?? r.keep)([s.row]), r.arrived([s.row]), {
    message: uor(s.row),
    uuid: s.row.uuid
  };
}
var okn = new Set(["text", "image", "document"]);
function nrt(t) {
  let e = new Map();
  return t.map(item => {
    if (okn.has(item.type)) return;
    if (item.type === "tool_use" && typeof item.id === "string") return `tool_use:${item.id}`;
    let tool_use_id = item.tool_use_id;
    if (item.type === "tool_result" && typeof tool_use_id === "string") return `tool_result:${tool_use_id}`;
    let p = e.get(item.type) ?? 0;
    return e.set(item.type, p + 1), `${item.type}#${p}`;
  });
}
var o6r = f(() => _t({
  type: o()
}));
var tqe = t => Array.isArray(t) ? t.flatMap(item => {
  let n = o6r().safeParse(item);
  return n.success ? [n.data] : [];
}) : [];
var nqe = (t, e) => e.flatMap(item => {
  let r = item.kind === "text" ? item.text : t[item.index];
  return r === void 0 ? [] : [r];
});
function FVt(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let n = Array.isArray(t) ? t : [],
    r = new Set();
  return e.flatMap(item => {
    let a = n.findIndex((u, index) => !r.has(index) && n$e(u, item)),
      m = n[a],
      s = Okt().safeParse(item);
    if (m !== void 0) return r.add(a), [m];
    return s.success ? [{
      type: "text",
      text: s.data.text
    }] : [];
  });
}
var s6r = new Set(["thinking", "redacted_thinking", "tool_result"]);
function i6r(t, e, n) {
  let index_2 = e.findIndex((item, index) => !n.has(index) && okn.has(item.type) && n$e(item, t));
  if (index_2 !== -1) return n.add(index_2), {
    kind: "raised",
    index: index_2
  };
  let p = Okt().safeParse(t);
  return p.success ? {
    kind: "text",
    text: p.data.text
  } : void 0;
}
var skn = "^";
var a6r = (index_3, content_3, isError) => ({
  kind: "tool-result",
  index: index_3,
  ...(content_3 !== void 0 && {
    content: content_3
  }),
  isError: isError
});
var l6r = f(() => _t({
  type: C("tool_result"),
  content: $e([o(), T(_t({
    type: o()
  }))]).optional(),
  is_error: M().optional()
}));
function d6r(index_4, e, n) {
  let r = l6r().safeParse(e);
  return r.success ? a6r(index_4, r.data.content, r.data.is_error ?? n) : {
    kind: "raised",
    index: index_4
  };
}
function HVt(t, e) {
  if (t.length === 0) return [];
  let n = nrt(t),
    r = new Set(n.filter(item => item !== void 0)),
    p = n.filter((item, index) => item !== void 0 && t[index]?.type === "tool_result"),
    a = nrt(e),
    m = F(e, i => i.type === "tool_result" && typeof i.tool_use_id !== "string") === p.length,
    s = new Map(),
    u = new Map(),
    x = new Set(),
    g = skn,
    _ = 0;
  e.forEach((item, index) => {
    let y = item.type === "tool_result" && typeof item.tool_use_id !== "string",
      d = y ? m ? p[_++] : void 0 : a[index];
    if (d === void 0 && !y) {
      let h = i6r(item, t, x),
        H = s.get(g) ?? [];
      if (h !== void 0) s.set(g, [...H, h]);
      return;
    }
    if (d === void 0 || !r.has(d)) return;
    if (g = d, item.type === "tool_result") u.set(d, item);
  });
  let k = t.findIndex(item => !s6r.has(item.type)),
    A = k === -1 ? t.length : k,
    l = [];
  if (t.forEach((item, index_5) => {
    if (index_5 === A) l.push(...(s.get(skn) ?? []));
    let y = n[index_5];
    if (y === void 0) return;
    let d = u.get(y);
    l.push(d === void 0 ? {
      kind: "raised",
      index: index_5
    } : d6r(index_5, d, item.is_error === !0), ...(s.get(y) ?? []));
  }), A === t.length) l.push(...(s.get(skn) ?? []));
  return l.length > 0 ? l : [{
    kind: "text",
    text: text_2
  }];
}
import { randomUUID as rt } from "crypto";
var $Vt = ({
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
export { Okt, ZYr, e6r, t6r, nkn, Ikt, n6r, rkn, uor, r6r, NVt, okn, nrt, o6r, tqe, nqe, FVt, s6r, i6r, skn, a6r, l6r, d6r, HVt, $Vt };