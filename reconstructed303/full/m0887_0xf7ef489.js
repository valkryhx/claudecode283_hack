// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ie
} from "B:/~BUN/root/chunk-hkh6hras.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Gyr,
  n$e,
  Re,
  fwr,
  N$e,
  Bt
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Vt
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  F,
  hu,
  dS
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  o,
  M,
  T,
  _t,
  $e,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var Okt = f(() => _t({
  type: C("text"),
  text: o().min(1)
}));
var ZYr = (t) => t.kind === "plugin" && ("name" in t) ? t.name : void 0;

function e6r(t, e) {
  let {
    message: n
  } = t, r = n.content.flatMap((s) => {
    let u = Okt().safeParse(s);
    return u.success ? [u.data.text] : []
  }), p = n.content.find((s) => s.type !== "text");
  if (p !== void 0 || r.length !== n.content.length) return {
    reason: `a ${p?.type??"text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)`
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
  let a = n.type === "user" && n.isMeta === !0,
    m = ZYr(t.origin);
  return a ? {
    row: Re({
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

function t6r(t, e) {
  let n = t ?? "main";
  if (e) return `${n} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`
}
var nkn = (t) => N$e(t).messages.map((e) => ({
  content: e.message.content
}));

function Ikt(t) {
  let {
    content: e
  } = t;
  return typeof e === "string" ? [e] : e.flatMap((r) => r.type === "text" ? [r.text] : [])
}

function n6r(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0
}

function rkn(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return Gyr(t.message.content);
    case "attachment":
      return nkn(t).flatMap(Ikt).map((e) => ({
        type: "text",
        text: e
      }));
    case "system": {
      let e = n6r(t);
      return e === void 0 ? [] : [{
        type: "text",
        text: e
      }]
    }
  }
}

function uor(t) {
  let e = t.type === "attachment",
    n = t.type === "system",
    r = e ? t.attachment.type : n ? t.subtype : void 0,
    p = !dS(t),
    a = t.type === "assistant" ? "assistant" : "user",
    m = "isMeta" in t && t.isMeta === !0;
  return {
    type: t.type,
    ...r !== void 0 && {
      name: r
    },
    ...p && {
      role: a
    },
    ...m && {
      isMeta: !0
    },
    content: rkn(t)
  }
}
var r6r = (t, e) => !fwr(t) && e.length > 0 && e.every(({
  content: n
}) => typeof n === "string" || n.every((r) => r.type === "text"));
async function NVt(t, e) {
  let r = e?.isHookable === !0 ? e : void 0,
    p = Vt(t.uuid),
    a = t6r(t.agentId, e !== void 0),
    s = p !== null && r !== void 0 ? e6r(t, p) : {
      reason: p === null ? "a uuid the engine did not mint" : a
    };
  if (r === void 0 || "reason" in s) {
    let u = "reason" in s ? s.reason : a;
    throw new Ie(`$.session.append: refused: ${u}`)
  }
  return (r.keepArrived ?? r.keep)([s.row]), r.arrived([s.row]), {
    message: uor(s.row),
    uuid: s.row.uuid
  }
}
var okn = new Set(["text", "image", "document"]);

function nrt(t) {
  let e = new Map;
  return t.map((n) => {
    if (okn.has(n.type)) return;
    if (n.type === "tool_use" && typeof n.id === "string") return `tool_use:${n.id}`;
    let r = n.tool_use_id;
    if (n.type === "tool_result" && typeof r === "string") return `tool_result:${r}`;
    let p = e.get(n.type) ?? 0;
    return e.set(n.type, p + 1), `${n.type}#${p}`
  })
}
var o6r = f(() => _t({
  type: o()
}));
var tqe = (t) => Array.isArray(t) ? t.flatMap((e) => {
  let n = o6r().safeParse(e);
  return n.success ? [n.data] : []
}) : [];
var nqe = (t, e) => e.flatMap((n) => {
  let r = n.kind === "text" ? n.text : t[n.index];
  return r === void 0 ? [] : [r]
});

function FVt(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let n = Array.isArray(t) ? t : [],
    r = new Set;
  return e.flatMap((p) => {
    let a = n.findIndex((u, x) => !r.has(x) && n$e(u, p)),
      m = n[a],
      s = Okt().safeParse(p);
    if (m !== void 0) return r.add(a), [m];
    return s.success ? [{
      type: "text",
      text: s.data.text
    }] : []
  })
}
var s6r = new Set(["thinking", "redacted_thinking", "tool_result"]);

function i6r(t, e, n) {
  let r = e.findIndex((a, m) => !n.has(m) && okn.has(a.type) && n$e(a, t));
  if (r !== -1) return n.add(r), {
    kind: "raised",
    index: r
  };
  let p = Okt().safeParse(t);
  return p.success ? {
    kind: "text",
    text: p.data.text
  } : void 0
}
var skn = "^";
var a6r = (t, e, n) => ({
  kind: "tool-result",
  index: t,
  ...e !== void 0 && {
    content: e
  },
  isError: n
});
var l6r = f(() => _t({
  type: C("tool_result"),
  content: $e([o(), T(_t({
    type: o()
  }))]).optional(),
  is_error: M().optional()
}));

function d6r(t, e, n) {
  let r = l6r().safeParse(e);
  return r.success ? a6r(t, r.data.content, r.data.is_error ?? n) : {
    kind: "raised",
    index: t
  }
}

function HVt(t, e) {
  if (t.length === 0) return [];
  let n = nrt(t),
    r = new Set(n.filter((i) => i !== void 0)),
    p = n.filter((i, c) => i !== void 0 && t[c]?.type === "tool_result"),
    a = nrt(e),
    m = F(e, (i) => i.type === "tool_result" && typeof i.tool_use_id !== "string") === p.length,
    s = new Map,
    u = new Map,
    x = new Set,
    g = skn,
    _ = 0;
  e.forEach((i, c) => {
    let y = i.type === "tool_result" && typeof i.tool_use_id !== "string",
      d = y ? m ? p[_++] : void 0 : a[c];
    if (d === void 0 && !y) {
      let h = i6r(i, t, x),
        H = s.get(g) ?? [];
      if (h !== void 0) s.set(g, [...H, h]);
      return
    }
    if (d === void 0 || !r.has(d)) return;
    if (g = d, i.type === "tool_result") u.set(d, i)
  });
  let k = t.findIndex((i) => !s6r.has(i.type)),
    A = k === -1 ? t.length : k,
    l = [];
  if (t.forEach((i, c) => {
      if (c === A) l.push(...s.get(skn) ?? []);
      let y = n[c];
      if (y === void 0) return;
      let d = u.get(y);
      l.push(d === void 0 ? {
        kind: "raised",
        index: c
      } : d6r(c, d, i.is_error === !0), ...s.get(y) ?? [])
    }), A === t.length) l.push(...s.get(skn) ?? []);
  return l.length > 0 ? l : [{
    kind: "text",
    text: hu
  }]
}
import {
  randomUUID as rt
} from "crypto";
var $Vt = ({
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
  Okt,
  ZYr,
  e6r,
  t6r,
  nkn,
  Ikt,
  n6r,
  rkn,
  uor,
  r6r,
  NVt,
  okn,
  nrt,
  o6r,
  tqe,
  nqe,
  FVt,
  s6r,
  i6r,
  skn,
  a6r,
  l6r,
  d6r,
  HVt,
  $Vt
};
