// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Oi,
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  gc
} from "B:/~BUN/root/chunk-yg4ttpr7.js";
import {
  h9e
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ug
} from "B:/~BUN/root/chunk-vp8vb7t8.js";
import {
  DBi,
  lX
} from "B:/~BUN/root/chunk-7vfy9z2g.js";
var k = 0.5,
  y = 4,
  M = 1600,
  B = 25000;

function d() {
  let e = i.MAX_MCP_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  let r = v("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof r === "number" && Number.isFinite(r) && r > 0) return r;
  return B
}

function _ve(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e,
    r = !1;
  for (let o of n)
    if (o?.type === "text" && "_meta" in o && o._meta) {
      r = !0;
      break
    } if (!r) return e;
  return n.map((o) => {
    if (o?.type === "text" && "_meta" in o && o._meta) {
      let {
        _meta: p,
        ...c
      } = o;
      return c
    }
    return o
  })
}
var T = 65536;

function epi(e) {
  if (!Array.isArray(e)) return e;
  let n = 0;
  for (let r of e) {
    if (r?.type !== "text" || !("_meta" in r) || !r._meta) continue;
    try {
      n += _(r._meta).length
    } catch {
      n = 1 / 0
    }
    if (n > T) return t(`MCP result: text blocks' _meta (over ${T} characters of JSON in all, or not serializable) left off the retained result`), _ve(e)
  }
  return e
}

function g(e) {
  return e.type === "text"
}

function P(e) {
  return e.type === "image"
}

function j3e(e) {
  if (!e) return 0;
  if (typeof e === "string") return gc(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, r) => {
    if (g(r)) return n + gc(r.text);
    else if (P(r)) return n + M;
    return n
  }, 0)
}

function H8() {
  return d() * 4
}
var E = "[OUTPUT TRUNCATED - exceeded ";

function x(e) {
  return e === 1 ? "[Image left out: it did not fit in the tool output limit]" : `[${e} images left out: they did not fit in the tool output limit]`
}

function A() {
  return `

${E}${d()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`
}
async function R(e, n) {
  let r = [],
    o = 0,
    p, c = [],
    C;
  for (let [f, s] of e.entries())
    if (g(s)) {
      let u = n - o;
      if (u <= 0) {
        C = f;
        break
      }
      if (s.text.length <= u) r.push(s), o += s.text.length;
      else {
        let l = Q(s.text, u);
        if (l) {
          let m = {
            type: "text",
            text: l
          };
          if (s._meta) m._meta = s._meta;
          r.push(m)
        }
        C = f + 1;
        break
      }
    } else if (P(s)) {
    let u = M * 4;
    if (o + u <= n) r.push(s), o += u;
    else {
      let l = n - o,
        m;
      if (l > 0) {
        let h = Math.floor(l * 0.75);
        m = await DBi(s, h).catch(() => {
          return
        })
      }
      if (m) r.push(m), o += m.source.type === "base64" ? m.source.data.length : u;
      else {
        if (p === void 0) p = r.length, o += x(1).length;
        c.push(f)
      }
    }
  } else r.push(s);
  if (C !== void 0) {
    for (let f = C; f < e.length; f++)
      if (P(e[f])) c.push(f)
  }
  if (c.length > 0) {
    let f = Ug(),
      s = await Promise.all(c.map(async (u) => {
        let l = e[u];
        return P(l) && l.source.type === "base64" ? await f?.saveLeftOut?.(l.source.data).catch(() => null) ?? null : null
      }));
    r.splice(p ?? r.length, 0, {
      type: "text",
      text: x(c.length)
    }, ...s.flatMap((u) => {
      let l = u === null ? null : lX({}, u.path);
      return l === null ? [] : [{
        type: "text",
        text: l
      }]
    }))
  }
  return r
}
async function wvn(e, n) {
  if (!e) return !1;
  let r = j3e(e);
  if (r <= d() * k) return !1;
  if (j3e(typeof e === "string" ? e : e.filter(g)) > d() * y) return !0;
  try {
    return (await h9e(typeof e === "string" ? [{
      role: "user",
      content: e
    }] : [{
      role: "user",
      content: e
    }], [], void 0, {
      credentials: n
    }) ?? r) > d()
  } catch (p) {
    return a(p), r > d()
  }
}
async function kvn(e) {
  if (!e) return e;
  let n = H8(),
    r = A();
  if (typeof e === "string") return Oi(e, n) + r;
  else {
    let o = await R(e, n);
    return o.push({
      type: "text",
      text: r
    }), o
  }
}
async function are(e, n) {
  if (!await wvn(e, n)) return e;
  return await kvn(e)
}
export {
  _ve,
  epi,
  j3e,
  H8,
  wvn,
  kvn,
  are
};
