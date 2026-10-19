// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Pn,
  TM
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  On
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
var x = new z(() => new Set);

function T(o, r) {
  return `${o}_${r}`
}
var _ = /_(\d+)$/;

function CUe(o) {
  let r = _.exec(o);
  return r ? o.slice(0, -r[0].length) : void 0
}

function b(o, r, c) {
  let i = Pn(r, o.name);
  if (i === void 0 || !TM(i)) return null;
  let a = (u) => (p("batch_tools", u, {
    tool_name: On(i.name),
    isMcp: !1
  }), [{
    type: "tool_use",
    id: T(o.id, 0),
    name: i.name,
    input: o.input,
    ...o.caller !== void 0 && {
      caller: o.caller
    }
  }]);
  try {
    let u = i.inputSchema.safeParse(o.input);
    if (!u.success) return {
      synthetics: a("parse_failed"),
      decomposed: !1
    };
    let {
      v1Tool: n,
      entries: e
    } = i.perEntryHookInputs(u.data);
    if (e.length === 0) return {
      synthetics: a("zero_entries"),
      decomposed: !1
    };
    return {
      decomposed: !0,
      synthetics: e.map((s, d) => {
        let m = s;
        try {
          m = c(n, s)
        } catch (f) {
          if (f instanceof Error && f.name === "ZodError") t(`batch entry normalize rejected input: ${f}`, {
            level: "error"
          });
          else l(f)
        }
        return {
          type: "tool_use",
          id: T(o.id, d),
          name: n.name,
          input: m,
          ...o.caller !== void 0 && {
            caller: o.caller
          }
        }
      })
    }
  } catch {
    return {
      synthetics: a("per_entry_threw"),
      decomposed: !1
    }
  }
}

function oBn(o) {
  let r;
  for (let c of o)
    if (TM(c)) r ??= new Set, r.add(c.underlyingV1ToolName);
  if (r === void 0) return o;
  return o.filter((c) => !r.has(c.name))
}

function hen(o, r, c) {
  let i, a = [];
  for (let u = 0; u < o.length; u++) {
    let n = o[u];
    if (n.type !== "tool_use") {
      i?.push(n);
      continue
    }
    let e = b(n, r, c);
    if (e === null) {
      i?.push(n);
      continue
    }
    if (i ??= o.slice(0, u), i.push(...e.synthetics), e.decomposed) a.push({
      id: n.id,
      name: n.name
    }), g("batch_tools", {
      tool_name: On(n.name),
      isMcp: !1
    })
  }
  return {
    content: i ?? o,
    batchToolUses: a
  }
}

function DTs(o, r, c) {
  if (r === void 0 || r.length === 0) return o;
  let i = new Map;
  for (let e of r)
    if (!i.has(e.id)) i.set(e.id, e);
  let a = new Map;
  for (let e of i.values()) {
    let s = Pn(c, e.name);
    if (s === void 0 || !TM(s)) continue;
    let d = [],
      m;
    for (let f of o)
      if (f.type === "tool_use" && CUe(f.id) === e.id) m ??= f, d.push(f.input);
    try {
      a.set(e.id, {
        type: "tool_use",
        id: e.id,
        name: e.name,
        input: s.reassemble(d),
        ...m?.caller !== void 0 && {
          caller: m.caller
        }
      })
    } catch {
      let f = x.of(j().host);
      if (!f.has(e.id)) f.add(e.id), p("batch_tools", "reassemble_threw", {
        tool_name: On(e.name),
        isMcp: !1
      })
    }
  }
  let u = new Set,
    n = [];
  for (let e of o) {
    if (e.type === "tool_use") {
      let s = CUe(e.id);
      if (s !== void 0 && a.has(s)) {
        if (!u.has(s)) u.add(s), n.push(a.get(s));
        continue
      }
    }
    n.push(e)
  }
  return n
}

function LTs(o, r) {
  let c = !1;
  for (let n of o) {
    if (n.type === "assistant") {
      for (let e of n.message.content)
        if (e.type === "tool_use") {
          let s = Pn(r, e.name);
          if (s !== void 0 && TM(s)) c = !0
        }
    }
    if (n.type === "user" && !c) {
      if (Array.isArray(n.message.content) && n.message.content.some((e) => e.type === "tool_result" && CUe(e.tool_use_id) !== void 0)) c = !0
    }
  }
  if (!c) return o;
  let i = new Map;
  for (let n of o) {
    if (n.type !== "assistant") continue;
    for (let e of n.message.content)
      if (e.type === "tool_use") i.set(e.id, e)
  }
  let a = new Map;
  for (let n of o) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let e of n.message.content) {
      if (e.type !== "tool_result") continue;
      let s = CUe(e.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let d = a.get(s);
      if (d === void 0) d = new Map, a.set(s, d);
      if (!d.has(e.tool_use_id)) d.set(e.tool_use_id, e)
    }
  }
  if (a.size === 0) return o;
  let u = new Set;
  return o.flatMap((n) => {
    if (n.type !== "user" || !Array.isArray(n.message.content)) return [n];
    let e = !1,
      s = [];
    for (let d of n.message.content) {
      if (d.type !== "tool_result") {
        s.push(d);
        continue
      }
      let m = CUe(d.tool_use_id),
        f = m !== void 0 ? a.get(m) : void 0;
      if (m === void 0 || f === void 0) {
        s.push(d);
        continue
      }
      if (e = !0, u.has(m)) continue;
      u.add(m);
      let h = i.get(m),
        y = Pn(r, h.name),
        B = y !== void 0 && TM(y) ? y : void 0;
      s.push(R(B, m, w(B, h.input, m, f)))
    }
    if (!e) return [n];
    if (s.length === 0) return [];
    return [{
      ...n,
      message: {
        ...n.message,
        content: s
      }
    }]
  })
}

function w(o, r, c, i) {
  let a;
  if (o !== void 0) try {
    let n = o.inputSchema.safeParse(r);
    if (n.success) a = o.perEntryHookInputs(n.data).entries
  } catch {}
  let u = a?.length ?? 0;
  for (let n of i.keys()) {
    let e = _.exec(n);
    if (e) u = Math.max(u, Number(e[1]) + 1)
  }
  if (u > 1000) u = a?.length ?? i.size;
  return Array.from({
    length: u
  }, (n, e) => {
    let s = i.get(T(c, e));
    return s !== void 0 ? {
      input: a?.[e],
      result: s
    } : {
      input: a?.[e],
      error: "no result"
    }
  })
}

function R(o, r, c) {
  let i = [],
    a = "",
    u = !1,
    n = (s) => {
      if (s.length > 0) a = a === "" ? s : `${a}
${s}`
    },
    e = () => {
      if (a !== "") i.push({
        type: "text",
        text: a
      }), a = ""
    };
  for (let [s, d] of c.entries()) {
    let m = d.result === void 0 || d.result.is_error === !0;
    if (m) u = !0;
    if (n(`--- entry ${s+1}${m?" (error)":""} ---`), d.result !== void 0) {
      let f = d.result.content;
      if (typeof f === "string") n(f);
      else if (Array.isArray(f))
        for (let h of f)
          if (h.type === "text") n(h.text);
          else e(), i.push(h)
    } else n(`[entry ${s+1} error: ${d.error??"no result"}]`)
  }
  if (c.length === 1 && o !== void 0) n(`<system-reminder>Tip: ${o.name} accepts multiple entries in one call (\`${o.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
  return e(), {
    type: "tool_result",
    tool_use_id: r,
    content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
    ...u && {
      is_error: !0
    }
  }
}
var k = new Map;

function qwe(o) {
  return k.get(o)
}

function sBn(o) {
  return o.map(qwe).filter((r) => r !== void 0).filter((r) => r.isEnabled())
}

function NTs(o, r) {
  return r.find((c) => c.underlyingV1ToolName === o)?.name ?? o
}

function _ie(o) {
  for (let [r, c] of k)
    if (c.name === o) return r;
  return
}
export {
  CUe,
  oBn,
  hen,
  DTs,
  LTs,
  qwe,
  sBn,
  NTs,
  _ie
};
