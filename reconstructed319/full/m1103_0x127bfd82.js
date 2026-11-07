// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  $e
} from "B:/~BUN/root/chunk-fg0appz9.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  b7r,
  V8e,
  Ie,
  zpr,
  bDe,
  Bt
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  Mf,
  sy
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  o,
  I,
  C,
  xt,
  Be,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
var W2t = p(() => xt({
  type: T("text"),
  text: o().min(1)
}));
var iBo = (t) => t.kind === "plugin" && ("name" in t) ? t.name : void 0;

function aBo(t, e) {
  let {
    message: n
  } = t, r = n.content.flatMap((s) => {
    let u = W2t().safeParse(s);
    return u.success ? [u.data.text] : []
  }), i = n.content.find((s) => s.type !== "text");
  if (i !== void 0 || r.length !== n.content.length) return {
    reason: `a ${i?.type??"text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)`
  };
  if (n.type === "system") {
    let [s] = r;
    return s !== void 0 && r.length === 1 ? {
      row: {
        ...Bt(s, "info"),
        uuid: e
      }
    } : {
      reason: "a notice that is not one text block"
    }
  }
  let f = n.type === "user" && n.isMeta === !0,
    m = iBo(t.origin);
  return f ? {
    row: Ie({
      content: r.map((s) => ({
        type: "text",
        text: s
      })),
      isMeta: !0,
      uuid: e,
      ...m !== void 0 && {
        origin: {
          kind: "plugin",
          name: m
        }
      }
    })
  } : {
    reason: `a ${n.type} row` + (n.type === "user" ? " that is not isMeta" : "") + " (a plugin appends a user-role isMeta row or a system notice; a prompt is $.prompt.submit)"
  }
}

function lBo(t, e) {
  let n = t ?? "main";
  if (e) return `${n} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`
}
var t9n = (t) => bDe(t).messages.map((e) => ({
  content: e.message.content
}));

function z2t(t) {
  let {
    content: e
  } = t;
  return typeof e === "string" ? [e] : e.flatMap((r) => r.type === "text" ? [r.text] : [])
}

function dBo(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0
}

function n9n(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return b7r(t.message.content);
    case "attachment":
      return t9n(t).flatMap(z2t).map((e) => ({
        type: "text",
        text: e
      }));
    case "system": {
      let e = dBo(t);
      return e === void 0 ? [] : [{
        type: "text",
        text: e
      }]
    }
  }
}

function JGr(t) {
  let e = t.type === "attachment",
    n = t.type === "system",
    r = e ? t.attachment.type : n ? t.subtype : void 0,
    i = !sy(t),
    f = t.type === "assistant" ? "assistant" : "user",
    m = "isMeta" in t && t.isMeta === !0;
  return {
    type: t.type,
    ...r !== void 0 && {
      name: r
    },
    ...i && {
      role: f
    },
    ...m && {
      isMeta: !0
    },
    content: n9n(t)
  }
}
var cBo = (t, e) => !zpr(t) && e.length > 0 && e.every(({
  content: n
}) => typeof n === "string" || n.every((r) => r.type === "text"));
async function pgn(t, e) {
  let r = e?.isHookable === !0 ? e : void 0,
    i = Nt(t.uuid),
    f = lBo(t.agentId, e !== void 0),
    s = i !== null && r !== void 0 ? aBo(t, i) : {
      reason: i === null ? "a uuid the engine did not mint" : f
    };
  if (r === void 0 || "reason" in s) {
    let u = "reason" in s ? s.reason : f;
    throw new $e(`$.session.append: refused: ${u}`)
  }
  return (r.keepArrived ?? r.keep)([s.row]), r.arrived([s.row]), {
    message: JGr(s.row),
    uuid: s.row.uuid
  }
}
var r9n = new Set(["text", "image", "document"]);

function LEt(t) {
  let e = new Map;
  return t.map((n) => {
    if (r9n.has(n.type)) return;
    if (n.type === "tool_use" && typeof n.id === "string") return `tool_use:${n.id}`;
    let r = n.tool_use_id;
    if (n.type === "tool_result" && typeof r === "string") return `tool_result:${r}`;
    let i = e.get(n.type) ?? 0;
    return e.set(n.type, i + 1), `${n.type}#${i}`
  })
}
var uBo = p(() => xt({
  type: o()
}));
var bst = (t) => Array.isArray(t) ? t.flatMap((e) => {
  let n = uBo().safeParse(e);
  return n.success ? [n.data] : []
}) : [];
var Sst = (t, e) => e.flatMap((n) => {
  let r = n.kind === "text" ? n.text : t[n.index];
  return r === void 0 ? [] : [r]
});

function mgn(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let n = Array.isArray(t) ? t : [],
    r = new Set;
  return e.flatMap((i) => {
    let f = n.findIndex((u, x) => !r.has(x) && V8e(u, i)),
      m = n[f],
      s = W2t().safeParse(i);
    if (m !== void 0) return r.add(f), [m];
    return s.success ? [{
      type: "text",
      text: s.data.text
    }] : []
  })
}
var fBo = new Set(["thinking", "redacted_thinking", "tool_result"]);

function pBo(t, e, n) {
  let r = e.findIndex((f, m) => !n.has(m) && r9n.has(f.type) && V8e(f, t));
  if (r !== -1) return n.add(r), {
    kind: "raised",
    index: r
  };
  let i = W2t().safeParse(t);
  return i.success ? {
    kind: "text",
    text: i.data.text
  } : void 0
}
var o9n = "^";
var mBo = (t, e, n) => ({
  kind: "tool-result",
  index: t,
  ...e !== void 0 && {
    content: e
  },
  isError: n
});
var hBo = p(() => xt({
  type: T("tool_result"),
  content: Be([o(), C(xt({
    type: o()
  }))]).optional(),
  is_error: I().optional()
}));

function gBo(t, e, n) {
  let r = hBo().safeParse(e);
  return r.success ? mBo(t, r.data.content, r.data.is_error ?? n) : {
    kind: "raised",
    index: t
  }
}

function hgn(t, e) {
  if (t.length === 0) return [];
  let n = LEt(t),
    r = new Set(n.filter((a) => a !== void 0)),
    i = n.filter((a, c) => a !== void 0 && t[c]?.type === "tool_result"),
    f = LEt(e),
    m = U(e, (a) => a.type === "tool_result" && typeof a.tool_use_id !== "string") === i.length,
    s = new Map,
    u = new Map,
    x = new Set,
    g = o9n,
    _ = 0;
  e.forEach((a, c) => {
    let y = a.type === "tool_result" && typeof a.tool_use_id !== "string",
      d = y ? m ? i[_++] : void 0 : f[c];
    if (d === void 0 && !y) {
      let h = pBo(a, t, x),
        M = s.get(g) ?? [];
      if (h !== void 0) s.set(g, [...M, h]);
      return
    }
    if (d === void 0 || !r.has(d)) return;
    if (g = d, a.type === "tool_result") u.set(d, a)
  });
  let k = t.findIndex((a) => !fBo.has(a.type)),
    A = k === -1 ? t.length : k,
    l = [];
  if (t.forEach((a, c) => {
      if (c === A) l.push(...s.get(o9n) ?? []);
      let y = n[c];
      if (y === void 0) return;
      let d = u.get(y);
      l.push(d === void 0 ? {
        kind: "raised",
        index: c
      } : gBo(c, d, a.is_error === !0), ...s.get(y) ?? [])
    }), A === t.length) l.push(...s.get(o9n) ?? []);
  return l.length > 0 ? l : [{
    kind: "text",
    text: Mf
  }]
}
import {
  randomUUID as rt
} from "crypto";
var ggn = ({
  message: t,
  agentId: e
}, n) => ({
  message: {
    type: t.type,
    ...t.type === "user" && {
      role: "user",
      isMeta: !0
    },
    content: t.content
  },
  door: "note",
  origin: {
    kind: "plugin",
    name: n
  },
  uuid: rt(),
  ...e !== void 0 && {
    agentId: e
  }
});
export {
  W2t,
  iBo,
  aBo,
  lBo,
  t9n,
  z2t,
  dBo,
  n9n,
  JGr,
  cBo,
  pgn,
  r9n,
  LEt,
  uBo,
  bst,
  Sst,
  mgn,
  fBo,
  pBo,
  o9n,
  mBo,
  hBo,
  gBo,
  hgn,
  ggn
};
