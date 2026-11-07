// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  iB
} from "B:/~BUN/root/chunk-09sn55yf.js";
import {
  X6
} from "B:/~BUN/root/chunk-p8dysp9f.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  bt
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  vDs
} from "B:/~BUN/root/chunk-q2rjek8y.js";
import {
  wp
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  Wr
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  z0t,
  fLe,
  abs,
  z$i,
  PZt,
  lbs,
  V$i,
  K$i,
  cbs,
  V0t,
  NI
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  _a
} from "B:/~BUN/root/chunk-5xe4wxb1.js";
import {
  bn
} from "B:/~BUN/root/chunk-2631cdbp.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  xt
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var h = "claude/structuredContentJsonBase64",
  _ = "toolbox.text_blocks_left_out",
  F = /^[A-Za-z0-9+/]*={0,2}$/;

function A(e) {
  return {
    [h]: Buffer.from(e, "utf8").toString("base64")
  }
}

function aIt(e) {
  return X6() && D(e) && typeof Wr(e, h) === "string" && Object.keys(e).length === 1
}

function fWe(e) {
  if (!aIt(e)) return;
  let n = e[h];
  if (n.length % 4 !== 0 || !F.test(n)) return;
  let t = Buffer.from(n, "base64").toString("utf8");
  return t.trim() ? t : void 0
}
import {
  inspect as q
} from "util";
class S {
  #e;
  constructor(e) {
    this.#e = e
  }
  reveal() {
    return this.#e
  }
  toString() {
    return "[download token hidden]"
  }
  toJSON() {
    return "[download token hidden]"
  } [q.custom]() {
    return "[download token hidden]"
  }
}

function eCi(e, n) {
  let t = D(e) ? e[z0t] : void 0,
    o = D(t) ? t.downloads : void 0;
  if (!Array.isArray(o)) return [];
  let r = n.via === "cloud-session" ? cbs(n.mcpUrl) : void 0,
    i = n.via === "cloud-session" ? r !== void 0 : V$i(n.connectorId) !== void 0,
    u = [];
  for (let s of o) {
    if (u.length > lbs) break;
    if (!D(s)) continue;
    let a = s.size,
      f = {
        position: u.length + 1,
        name: typeof s.name === "string" ? s.name : "",
        title: void 0,
        mimeType: typeof s.mimeType === "string" ? s.mimeType : void 0,
        size: typeof a === "number" ? a : void 0,
        refusal: void 0,
        token: void 0,
        sha256Hex: void 0
      },
      d = s.digest,
      c = D(d) && d.algorithm === "sha-256" && typeof d.value === "string" && /^[A-Za-z0-9_-]{43}$/.test(d.value) ? Buffer.from(d.value, "base64url").toString("hex") : void 0,
      m = typeof s.expiresAt === "string" ? Date.parse(s.expiresAt) : NaN,
      y = D(s.headers) ? Object.entries(s.headers) : [],
      [L, g] = y.length === 1 ? y[0] : ["", void 0],
      T = L.toLowerCase() === fLe && typeof g === "string" && z$i.test(g) ? g : void 0;
    if (f.position > lbs) f.refusal = "over_result_cap";
    else if (a !== void 0 && (typeof a !== "number" || !Number.isSafeInteger(a) || a < 0) || d !== void 0 && c === void 0 || s.expiresAt !== void 0 && Number.isNaN(m)) f.refusal = "target_unreadable";
    else if (typeof a === "number" && a > PZt) f.refusal = "too_large";
    else if (m <= Date.now()) f.refusal = "expired";
    else if (!i || s.path !== abs || s.url !== void 0 || s.credentials !== "include" || s.method !== void 0 && s.method !== "GET" || T === void 0) f.refusal = "not_the_relay_address";
    else {
      if (f.token = new S(T), f.sha256Hex = c, r !== void 0) f.sessionAddress = r;
      if (!Number.isNaN(m)) f.expiresAt = m
    }
    u.push(f)
  }
  return u
}
var Tso = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/gu,
  O = 80;

function oPn(e) {
  let n = e.replace(Tso, "").trim(),
    t = Array.from(n);
  return t.length > O ? `${t.slice(0,O).join("")}\u2026` : n
}
var E = "/\\\\\u2215\u2216\u2571\u29F5\u29F8\u29F9\uFE68\uFF0F\uFF3C",
  B = new RegExp(`[${E}\u2044]`),
  H = new RegExp(`[${E}]`);

function ymr(e) {
  let n = iB(e.replace(Tso, "").split(B).at(-1) ?? "").split(H).at(-1) ?? "";
  return oPn(n.replace(/^(?:[A-Za-z]:|[\s.\p{M}\u2800])+/u, ""))
}

function tut(e) {
  let n = [e],
    t = new Set;
  while (n.length > 0) {
    let o = n.pop();
    if (typeof o !== "object" || o === null || t.has(o)) continue;
    t.add(o);
    let r = o;
    if (!Array.isArray(o) && D(r._meta) && z0t in r._meta) {
      if (typeof r.name === "string") r.name = ymr(r.name) || "(no name)";
      if (typeof r.title === "string") {
        let i = ymr(r.title);
        if (i) r.title = i;
        else delete r.title
      }
    }
    for (let i of Array.isArray(o) ? o : Object.values(o)) n.push(i)
  }
}

function tCi(e) {
  if (e === void 0 || !(z0t in e)) return e;
  let n = {};
  for (let [t, o] of Object.entries(e))
    if (t !== z0t) n[t] = o;
  return Object.keys(n).length === 0 ? void 0 : n
}

function K(e) {
  let n = [e],
    t = new Set;
  while (n.length > 0) {
    let o = n.pop();
    if (typeof o !== "object" || o === null || t.has(o)) continue;
    if (t.add(o), aIt(o)) {
      if (N(fWe(o) ?? "").length > 0) return !0;
      continue
    }
    if (!Array.isArray(o) && Object.hasOwn(o, z0t)) {
      let r = D(o) ? o[z0t] : void 0;
      if ([r, ...D(r) && Array.isArray(r.downloads) ? r.downloads : []].some((u) => D(u) && D(u.headers) && Object.keys(u.headers).some((s) => s.toLowerCase() === fLe))) return !0
    }
    for (let r of Array.isArray(o) ? o : Object.values(o)) n.push(r)
  }
  return !1
}

function Sas(e) {
  return V0t() || K(e)
}

function nut(e, n) {
  return K$i(e) || e.type === "claudeai-proxy" && Sas(n)
}

function J9t(e, n) {
  if (nut(e, n)) tut(n), EDe(n)
}

function EDe(e) {
  let n = [e],
    t = new Set;
  while (n.length > 0) {
    let o = n.pop();
    if (typeof o !== "object" || o === null || t.has(o)) continue;
    if (t.add(o), Array.isArray(o)) {
      for (let i of o) n.push(i);
      continue
    }
    if (aIt(o)) {
      let i = fWe(o),
        u = i === void 0 ? void 0 : V(i);
      if (u !== void 0) Object.assign(o, A(u));
      continue
    }
    let r = o;
    delete r[z0t];
    for (let i of Object.values(r)) n.push(i)
  }
}

function Cso(e) {
  return typeof e === "string" ? tt(e, ";").trim().toLowerCase() : ""
}
var x = '"[download token hidden]"',
  W = 34,
  z = 92,
  U = 58;

function M(e, n) {
  let t = e.charCodeAt(n);
  return t === 32 || t >= 9 && t <= 13 || t === 160 || t === 5760 || t >= 8192 && t <= 8202 || t === 8232 || t === 8233 || t === 8239 || t === 8287 || t === 12288 || t === 65279
}

function b(e, n) {
  while (n < e.length && M(e, n)) n++;
  return n
}

function k(e, n) {
  let t = e.indexOf('"', n + 1);
  while (t !== -1) {
    let o = 0;
    while (e.charCodeAt(t - 1 - o) === z) o++;
    if (o % 2 === 0) return t + 1;
    t = e.indexOf('"', t + 1)
  }
  return e.length
}
var X = {
  '"': '"',
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: `
`,
  r: "\r",
  t: "\t"
};

function G(e, n, t) {
  if (t - n < fLe.length) return !1;
  if (t - n === fLe.length) return e.slice(n, t).toLowerCase() === fLe;
  let o = "";
  for (let r = n; r < t; r++) {
    if (o.length > fLe.length) return !1;
    let i = e[r];
    if (i !== "\\") o += i;
    else if (e[r + 1] === "u" && /^[0-9A-Fa-f]{4}$/.test(e.slice(r + 2, r + 6))) o += String.fromCharCode(parseInt(e.slice(r + 2, r + 6), 16)), r += 5;
    else o += X[e[r + 1] ?? ""] ?? e[r + 1] ?? "", r += 1
  }
  return o.toLowerCase() === fLe
}

function J(e, n) {
  let t = 0,
    o = n;
  while (o < e.length) {
    let r = e[o];
    if (r === '"') {
      o = k(e, o);
      continue
    }
    if (r === "{" || r === "[") t++;
    else if (r === "}" || r === "]") {
      if (t === 0) break;
      t--
    } else if (r === "," && t === 0) break;
    o++
  }
  while (o > n && M(e, o - 1)) o--;
  return o
}

function N(e) {
  let n = [],
    t = e.indexOf('"');
  while (t !== -1) {
    let o = k(e, t),
      r = o,
      i = b(e, o);
    if (e.charCodeAt(i) === U && e.charCodeAt(o - 1) === W && o - 1 > t && G(e, t + 1, o - 1)) {
      let u = b(e, i + 1);
      if (r = J(e, u), r > u && e.slice(u, r) !== x) n.push([u, r])
    }
    t = r < e.length ? e.indexOf('"', r) : -1
  }
  return n
}

function V(e) {
  let n = N(e);
  if (n.length === 0) return;
  let t = [],
    o = 0;
  for (let [r, i] of n) t.push(e.slice(o, r), x), o = i;
  return t.push(e.slice(o)), t.join("")
}

function P(e) {
  if (bn(e.name) !== wp) return;
  let n = import.meta.require("B:/~BUN/root/chunk-84q1k6yb.js");
  return n.refusesRemoteBrowserCallOutsideChecks(e.name) ? Promise.reject(new R(n.REMOTE_BROWSER_OUTSIDE_CHECKS_REFUSED, "cloud browser called outside its permission check")) : void 0
}

function j(e, n, t, o) {
  if (e.config?.type === "claudeai-proxy") return import.meta.require("B:/~BUN/root/chunk-zkccb90v.js").refuseRawCallByCopy(e, n, t, {
    signal: o?.signal,
    deadline: o?.timeout == null ? void 0 : Date.now() + o.timeout
  });
  return
}

function nCi(e, n) {
  if (e?.config?.type === "claudeai-proxy") {
    let t = import.meta.require("B:/~BUN/root/chunk-zkccb90v.js");
    return n instanceof t.RawCallRefusedError ? n.refusal : void 0
  }
  return
}
var C = Symbol("no time is left of the timeout");

function v(e, n) {
  if (n <= 0 || e?.timeout == null || e.resetTimeoutOnProgress === !0 || e.maxTotalTimeout !== void 0) return e;
  let t = e.timeout - n;
  return t < 1 ? C : {
    ...e,
    timeout: t
  }
}

function I(e, n) {
  return import.meta.require("B:/~BUN/root/chunk-zkccb90v.js").noTimeLeftRefusal(e, n)
}

function l(e, n) {
  let t = NI(e) ?? (le() ? import.meta.require("B:/~BUN/root/chunk-z5nevxsz.js").inProcessBuiltinRefusal(e, n) : void 0);
  return t && Promise.reject(t)
}
async function fq(e, n, t, o = !1) {
  let r = l(e, o ? n.name : void 0) ?? P(e),
    {
      name: i,
      arguments: u
    } = n,
    s = r === void 0 ? j(e, i, u, t) : void 0,
    a = s === void 0 ? n : {
      ...n,
      name: i,
      ..."arguments" in n && {
        arguments: s.sent ?? u
      }
    };
  if (s !== void 0) await s.held;
  let f = s === void 0 ? t : v(t, s.waited());
  if (f === C) throw I(e, i);
  let d = await (r ?? import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().invokeToolRaw(e.client, a, f));
  if (e.config !== void 0 && nut(e.config, d)) tut([d.content, d.structuredContent]), EDe(d);
  if (aIt(d.structuredContent)) throw new vDs(e.name, a.name);
  if (d._meta?.[_] !== void 0 && !(Array.isArray(d.content) && d.content.some((c) => c.type === "text"))) throw new R(`The result of MCP tool "${a.name}" on server "${e.name}" arrived without its text. A result that is too large arrives this way. The tool may have run: check whether it did before running it again, and when you run it again, ask for less data.`, "MCP tool result arrived without its text blocks");
  return d
}
async function lIt(e, n, t) {
  let o = await (l(e) ?? import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().readResourceRaw(e.client, n, t));
  if (e.config !== void 0 && nut(e.config, o)) tut(o.contents), EDe(o);
  return o
}

function dIt(e, n) {
  return l(e) ?? import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().listToolsRaw(e.client, n)
}
var Z = p(() => xt({}));

function was(e, n, t) {
  let o = (i, u = t) => _a(e.client).request(i, Z(), {
      ...u,
      cacheMode: "bypass"
    }),
    r = () => {
      let {
        params: i
      } = n, u = i?.name, s = i?.arguments, a = j(e, typeof u === "string" ? u : "", s, t);
      if (a === void 0) return;
      let f = {
        ...n,
        ...i !== void 0 && {
          params: {
            ...i,
            ..."name" in i && {
              name: u
            },
            ..."arguments" in i && {
              arguments: a.sent ?? s
            }
          }
        }
      };
      return a.held.then(() => {
        let d = v(t, a.waited());
        if (d === C) throw I(e, typeof u === "string" ? u : "");
        return o(f, d)
      })
    };
  return l(e) ?? (n.method === "tools/call" ? P(e) ?? r() : void 0) ?? o(n)
}

function rCi(e) {
  return bt().clientsBuiltWithTasks.get(_a(e.client))
}

function O6(e, n, t) {
  import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().onMcpNotification(e, n, t)
}

function UEe(e, n) {
  _a(e.client).onclose = n
}

function oCi(e, n) {
  let t = _a(e.client),
    o = t.onclose;
  t.onclose = () => {
    o?.(), n()
  }
}

function sCi(e, n) {
  return l(e) ?? _a(e.client).notification(n)
}

function iCi(e, n) {
  _a(e.client)?.transport?.onmessage?.(n)
}
export {
  aIt,
  fWe,
  eCi,
  Tso,
  oPn,
  ymr,
  tut,
  tCi,
  Sas,
  nut,
  J9t,
  EDe,
  Cso,
  nCi,
  fq,
  lIt,
  dIt,
  was,
  rCi,
  O6,
  UEe,
  oCi,
  sCi,
  iCi
};
