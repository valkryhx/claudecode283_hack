// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  $n,
  pre
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Pe,
  fhn
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  pF
} from "B:/~BUN/root/chunk-j704adqd.js";
import {
  pa
} from "B:/~BUN/root/chunk-wg7rg6k5.js";
import {
  _Ze
} from "B:/~BUN/root/chunk-bp5d1azq.js";
import {
  Ede
} from "B:/~BUN/root/chunk-qvy7wp4j.js";
import {
  Sjt
} from "B:/~BUN/root/chunk-hz8x9zsh.js";
import {
  randomUUID as se
} from "crypto";
import {
  once as K
} from "events";
import {
  constants as x,
  createWriteStream as ce
} from "fs";
import {
  lstat as J,
  open as v,
  lstat as R,
  readdir as b,
  realpath as z,
  rename as ue,
  stat as fe
} from "fs/promises";
import {
  basename as E,
  dirname as F,
  isAbsolute as le,
  join as S
} from "path";
import {
  createInterface as pe
} from "readline";
import {
  execFile as ie
} from "child_process";
import {
  promisify as ae
} from "util";
var oe = ae(ie);
async function Y1t(e) {
  let n = pF("git");
  if (n === null) return [];
  try {
    let {
      stdout: t
    } = await oe(n, ["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor=", "worktree", "list", "--porcelain"], {
      cwd: e,
      timeout: 5000,
      windowsHide: !0
    });
    if (!t) return [];
    return t.split(`
`).filter((r) => r.startsWith("worktree ")).map((r) => $n(r.slice(9)))
  } catch {
    return []
  }
}
var hv = 65536,
  pmn = new Set(["sdk-cli", "sdk-ts", "sdk-py"]);

function Lai(e, n) {
  let t = rDe(e, "entrypoint") ?? O5(n, "entrypoint");
  if (t && pmn.has(t)) return !0;
  let r = e.split(`
`).find((a) => a.includes('"parentUuid":')) ?? e,
    i = rDe(r, "sessionKind");
  return i === "daemon" || i === "daemon-worker"
}
var ye = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function lI(e) {
  if (typeof e !== "string") return null;
  return ye.test(e) ? e : null
}

function Y(e) {
  if (!e.includes("\\")) return e;
  try {
    return JSON.parse(`"${e}"`)
  } catch {
    return e
  }
}

function rDe(e, n) {
  let t = [`"${n}":"`, `"${n}": "`];
  for (let r of t) {
    let i = e.indexOf(r);
    if (i < 0) continue;
    let a = i + r.length,
      o = a;
    while (o < e.length) {
      if (e[o] === "\\") {
        o += 2;
        continue
      }
      if (e[o] === '"') return Y(e.slice(a, o));
      o++
    }
  }
  return
}

function O5(e, n) {
  let t = [`"${n}":"`, `"${n}": "`],
    r, i = -1;
  for (let a of t) {
    let o = 0;
    while (!0) {
      let u = e.indexOf(a, o);
      if (u < 0) break;
      let s = u + a.length,
        c = s;
      while (c < e.length) {
        if (e[c] === "\\") {
          c += 2;
          continue
        }
        if (e[c] === '"') {
          if (u > i) r = Y(e.slice(s, c)), i = u;
          break
        }
        c++
      }
      o = c + 1
    }
  }
  return r
}

function mZe(e, n, t) {
  return G(e, t, n)
}

function G(e, n, t) {
  let r = t === void 0 ? void 0 : `"type":"${t}"`,
    i = `"${n}":`,
    a = e.length;
  while (a > 0) {
    let o = e.lastIndexOf(`
`, a - 1),
      u = e.slice(o + 1, a);
    if (a = o, u.includes(i) && (r === void 0 || u.includes(r))) try {
      let s = JSON.parse(u);
      if (typeof s === "object" && s !== null && (t === void 0 || s.type === t)) {
        let c = s[n];
        if (typeof c === "string") return c
      }
    } catch {}
    if (o < 0) break
  }
  return
}

function oDe(e, n) {
  let t = `"${n}":`,
    r = 0;
  while (r < e.length) {
    let i = e.indexOf(`
`, r),
      a = i < 0 ? e.slice(r) : e.slice(r, i);
    if (r = i < 0 ? e.length : i + 1, a.includes(t)) try {
      let o = JSON.parse(a);
      if (typeof o === "object" && o !== null) {
        let u = o[n];
        if (typeof u === "string") return u
      }
    } catch {}
  }
  return
}

function EBr(e, n) {
  return G(e, n)
}

function vYs(e, n) {
  return e?.realWorkspacePath === void 0 ? void 0 : {
    hoverRestOn: n,
    realPath: e.realWorkspacePath
  }
}
async function dGe(e, n, t) {
  return q(e, n, "w", t)
}
async function Ejo(e, n, t) {
  return q(e, n, "a", t)
}
async function q(e, n, t, r) {
  if (r !== void 0 && r.hoverRestOn && (t === "w" || n.length > 0)) return me(r.source, n, t);
  let i = ce(e, {
    mode: 384,
    flags: t
  });
  try {
    for (let a of n)
      if (!i.write(JSON.stringify(a) + `
`)) await K(i, "drain");
    i.end(), await K(i, "finish")
  } catch (a) {
    throw i.destroy(), a
  }
}
async function me(e, n, t) {
  let {
    backend: r,
    key: i
  } = e, a = n.map((u) => ({
    data: JSON.stringify(u) + `
`
  }));
  if (t === "w") {
    let u = await r.replaceRecords(i, a, {
      publishDiscipline: "inPlace",
      mode: 384
    });
    if (!u.ok) throw Error("transcript stream replace failed", {
      cause: u.error
    });
    return
  }
  let o = await r.append(i, a);
  if (!o.ok) throw Error("transcript stream append failed", {
    cause: o.error
  })
}

function Nai(e) {
  let n = 0,
    t = {
      commandFallback: ""
    };
  while (n < e.length) {
    let r = e.indexOf(`
`, n),
      i = r >= 0 ? e.slice(n, r) : e.slice(n);
    if (n = r >= 0 ? r + 1 : e.length, !i.includes('"type":"user"') && !i.includes('"type": "user"')) continue;
    if (i.includes('"tool_result"')) continue;
    if (i.includes('"isMeta":true') || i.includes('"isMeta": true')) continue;
    if (i.includes('"isCompactSummary":true') || i.includes('"isCompactSummary": true')) continue;
    try {
      let a = JSON.parse(i),
        o = _Ze(a, t);
      if (o !== void 0) return o
    } catch {
      continue
    }
  }
  return t.commandFallback
}

function Fai(e) {
  let n = 0;
  while (n < e.length) {
    let t = e.indexOf(`
`, n),
      r = t >= 0 ? e.slice(n, t) : e.slice(n);
    if (n = t >= 0 ? t + 1 : e.length, !r.includes('"type":"user"') && !r.includes('"type": "user"')) continue;
    if (r.includes('"tool_result"')) continue;
    if (r.includes('"isMeta":true') || r.includes('"isMeta": true')) continue;
    if (r.includes('"type":"image"') || r.includes('"type": "image"')) return "Image";
    if (r.includes('"type":"document"') || r.includes('"type": "document"')) return "Document"
  }
  return ""
}

function Hai(e) {
  let n = {
    commandFallback: ""
  };
  for (let t of e) {
    if (typeof t !== "object" || t === null) continue;
    let r = _Ze(t, n);
    if (r !== void 0) return r
  }
  return n.commandFallback
}
var L = x.O_RDONLY;
async function fmn(e, n, t, r) {
  if (r !== void 0 && r.hoverRestOn) return ge(r.source);
  try {
    if (L === x.O_RDONLY) {
      if (!(await J(e)).isFile()) return {
        head: "",
        tail: ""
      }
    }
    let i = await v(e, L);
    try {
      if (!(await i.stat()).isFile()) return {
        head: "",
        tail: ""
      };
      let a = await i.read(t, 0, hv, 0);
      if (a.bytesRead === 0) return {
        head: "",
        tail: ""
      };
      let o = t.toString("utf8", 0, a.bytesRead),
        u = Math.max(0, n - hv),
        s = o;
      if (u > 0) {
        let c = await i.read(t, 0, hv, u);
        s = t.toString("utf8", 0, c.bytesRead)
      }
      return {
        head: o,
        tail: s
      }
    } finally {
      await i.close()
    }
  } catch {
    return {
      head: "",
      tail: ""
    }
  }
}
async function ge(e) {
  let n = await Z(e);
  return n === null ? {
    head: "",
    tail: ""
  } : {
    head: n.head,
    tail: n.tail
  }
}

function Tjo(e) {
  let n = e.indexOf(`
`);
  return n >= 0 ? e.slice(n + 1) : ""
}
async function Z(e) {
  let {
    backend: n,
    key: t
  } = e;
  try {
    let r = await n.read([{
      key: t,
      offset: 0,
      length: hv
    }, {
      key: t,
      tail: hv
    }]);
    if (!r.ok) return null;
    let [i, a] = r.value.items;
    if (!i.found || i.value.length === 0) return null;
    let o = _(i.value),
      u = a.found && a.value.length > 0 ? _(a.value) : o;
    return {
      head: o,
      tail: u,
      mtimeMs: i.mtimeMs,
      totalBytes: i.totalBytes
    }
  } catch {
    return null
  }
}

function _(e) {
  return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
}
async function H(e, n) {
  return await M(e, n) !== "none"
}
async function M(e, n) {
  if (n !== void 0 && n.hoverRestOn) return mmn(n.source);
  try {
    if (!(await R(e)).isFile()) return "none"
  } catch (r) {
    return O(r) ? "none" : "unknown"
  }
  let t;
  try {
    t = await v(e, "r")
  } catch (r) {
    return O(r) ? "none" : "unknown"
  }
  try {
    let r = pe({
      input: t.createReadStream()
    });
    for await (let i of r) if (i.includes('"type":"user"') || i.includes('"type":"assistant"')) return r.close(), "has";
    return "none"
  } catch {
    return "unknown"
  } finally {
    await t.close().catch(() => {})
  }
}
var Se = 65536,
  he = 4194304,
  we = Buffer.from('"type":"user"'),
  be = Buffer.from('"type":"assistant"');

function ke(e) {
  return e.includes(we) || e.includes(be)
}
var TBr = 1e4;

function TTe(e, n) {
  if (e.kind !== "scope" || e.scope.namespace !== "transcript" || e.scope.projectKey === void 0 || e.scope.sessionId !== void 0 || !n(e.scope.projectKey)) return;
  return e.scope.projectKey
}
async function mmn(e, n = ke) {
  let {
    backend: t,
    key: r
  } = e, i, a = !1, o = 0, u = 0;
  try {
    for (;;) {
      if (++u > TBr) return "unknown";
      let s = await t.readRecords(r, {
        order: "forward",
        maxBytes: i === void 0 ? Se : he,
        ...i !== void 0 && {
          fromSeq: i
        }
      });
      if (!s.ok) return s.error.code === "NotFound" ? "none" : "unknown";
      o += s.value.items.length;
      for (let l of s.value.items) {
        let p = Buffer.from(l.data.buffer, l.data.byteOffset, l.data.byteLength);
        if (n(p)) return "has";
        if (l.truncated === !0) a = !0
      }
      let c = s.value.nextSeq;
      if (c === void 0) {
        if (a) return "unknown";
        if (s.value.items.length === 0 && i !== void 0) return "unknown";
        let l = await t.statStream(r);
        if (!l.ok) return l.error.code === "NotFound" ? "none" : "unknown";
        return l.value.recordCount > o ? "unknown" : "none"
      }
      if (i !== void 0 && c <= i) return "unknown";
      i = c
    }
  } catch {
    return "unknown"
  }
}
async function cGe(e, n) {
  let t = `orphaned-${Date.now()}-${se().slice(0,8)}`,
    r = n !== void 0 && n.hoverRestOn ? n.source : void 0,
    i = r !== void 0 && e.endsWith(".jsonl") ? X(e, E(e, ".jsonl"), r) : void 0;
  if (i !== void 0 && r !== void 0) {
    let {
      key: o
    } = i;
    if (o.namespace !== "transcript") return !1;
    try {
      return (await i.backend.move(o, r.transcriptKey(o.projectKey, `${o.sessionId}.${t}`))).ok
    } catch {
      return !1
    }
  }
  let a = `${e.endsWith(".jsonl")?e.slice(0,-6):e}.${t}.jsonl`;
  try {
    return await ue(e, a), !0
  } catch {
    return !1
  }
}

function sDe(e) {
  return le(e) && e.endsWith(".jsonl")
}
async function gde(e, n, t, r, i) {
  let a = await $_(n, vYs(i?.source, i?.hoverRestOn === !0));
  if (lI(e) === null) return {
    path: S(iS(a), "invalid-resume-id.jsonl"),
    hasMessages: !1,
    via: "computed"
  };
  let o = S(iS(a), `${e}.jsonl`),
    u = [];
  if (t !== void 0) u.push(t.endsWith(`${e}.jsonl`) ? {
    path: t,
    via: "linkScanPath"
  } : {
    path: S(F(t), `${e}.jsonl`),
    via: "linkScanDir"
  });
  let s = i !== void 0 && i.hoverRestOn ? {
    ...i,
    source: kYs(i.source)
  } : void 0;
  for (let f of await CTe(a, s)) u.push({
    path: S(f, `${e}.jsonl`),
    via: "projectDir"
  });
  u.push({
    path: o,
    via: "computed"
  });
  let c = new Set,
    l = (f) => ve(f, e, s),
    p;
  for (let f of u) {
    if (c.has(f.path)) continue;
    c.add(f.path);
    let d = await l(f.path);
    if (d === "has") return {
      ...f,
      hasMessages: !0
    };
    if (d === "unverifiable" && p === void 0) p = f
  }
  if (r?.crossWorktree !== !1)
    for (let {
        projectDir: f
      }
      of await ne(a, s)) {
      let d = S(f, `${e}.jsonl`);
      if (s !== void 0) {
        if (c.has(d)) continue;
        c.add(d)
      }
      let y = await l(d);
      if (y === "has") return {
        path: d,
        via: "worktreeProjectDir",
        hasMessages: !0
      };
      if (y === "unverifiable" && p === void 0) p = {
        path: d,
        via: "worktreeProjectDir"
      }
    }
  if (r?.crossWorktree !== !1) {
    let f = await CBr(e, c, s);
    if (f !== null) return {
      path: f,
      via: "projectsScan",
      hasMessages: !0
    }
  }
  if (p !== void 0) return {
    ...p,
    hasMessages: !0,
    unverifiable: !0
  };
  return {
    ...u[0],
    hasMessages: !1
  }
}

function X(e, n, t) {
  let r = Cjo(F(e), t.isKeySegment);
  if (r === void 0 || E(e) !== `${n}.jsonl` || !t.isKeySegment(n)) return;
  return {
    backend: t.backend,
    key: t.transcriptKey(r, n)
  }
}
async function ve(e, n, t) {
  let r = t !== void 0 && t.hoverRestOn ? X(e, n, t.source) : void 0;
  if (r === void 0) return await H(e) ? "has" : "none";
  let i = await mmn(r);
  if (i === "has") return "has";
  try {
    if (!(await R(e)).isFile()) return "none"
  } catch (a) {
    if (!O(a)) return "has";
    return i === "unknown" ? "unverifiable" : "none"
  }
  return await H(e) ? "has" : "none"
}

function O(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === "ENOENT"
}

function C(e) {
  return {
    skipScopeStats: !0,
    skipKeyStats: !0,
    ...e !== void 0 && {
      cursor: e
    }
  }
}

function kYs(e) {
  let n = new Map,
    t = new Proxy(e.backend, {
      get(r, i, a) {
        let o = Reflect.get(r, i, a);
        if (i !== "listEntries") return typeof o === "function" ? o.bind(r) : o;
        return (s, c) => {
          if (!(s.namespace === "transcript" && !("projectKey" in s) && Object.keys(c ?? {}).every((d) => d === "cursor" || d === "skipScopeStats" || d === "skipKeyStats"))) return r.listEntries(s, c);
          let p = [c?.cursor ?? "", c?.skipScopeStats, c?.skipKeyStats].map(String).join("\x00"),
            f = n.get(p);
          if (f === void 0) {
            f = r.listEntries(s, c), n.set(p, f);
            let d = () => {
              n.delete(p)
            };
            f.then((y) => {
              if (!y.ok) d()
            }, d)
          }
          return f
        }
      }
    });
  return {
    ...e,
    backend: t
  }
}
async function CBr(e, n = new Set, t) {
  if (lI(e) === null) return null;
  if (t !== void 0 && t.hoverRestOn && t.source.isKeySegment(e)) return Le(e, n, t.source);
  let r = Vm(),
    i = null;
  try {
    for (let a of await b(r, {
        withFileTypes: !0
      })) {
      if (!a.isDirectory()) continue;
      let o = S(r, a.name, `${e}.jsonl`);
      if (n.has(o)) continue;
      if (await M(o) !== "has") continue;
      if (i !== null) return null;
      i = o
    }
  } catch {
    return null
  }
  return i
}
async function Le(e, n, t) {
  let {
    backend: r,
    transcriptKey: i,
    isKeySegment: a
  } = t, o = Vm(), u = null, s = !1, c = new Set;
  try {
    let l = await pa((p) => r.listEntries({
      namespace: "transcript"
    }, C(p)), async (p) => {
      for (let f of p) {
        let d = TTe(f, a);
        if (d === void 0) continue;
        let y = S(o, d, `${e}.jsonl`);
        if (c.has(y) || n.has(y)) continue;
        c.add(y);
        let m = await mmn({
          backend: r,
          key: i(d, e)
        });
        if (m === "unknown") try {
          m = (await R(y)).isFile() ? await M(y) : "none"
        } catch {}
        if (m !== "has") continue;
        if (u !== null) {
          s = !0;
          return
        }
        u = y
      }
    }, {
      until: () => s
    });
    if (s || l.status !== "done") return null
  } catch {
    return null
  }
  return u
}
async function uGe(e, n) {
  if (n !== void 0 && n.hoverRestOn) return Q(n.source);
  try {
    if (L === x.O_RDONLY) {
      if (!(await J(e)).isFile()) return null
    }
    let t = await v(e, L);
    try {
      let r = await t.stat();
      if (!r.isFile()) return null;
      let i = Buffer.allocUnsafe(hv),
        a = await t.read(i, 0, hv, 0);
      if (a.bytesRead === 0) return null;
      let o = i.toString("utf8", 0, a.bytesRead),
        u = Math.max(0, r.size - hv),
        s = o;
      if (u > 0) {
        let c = await t.read(i, 0, hv, u);
        s = i.toString("utf8", 0, c.bytesRead)
      }
      return {
        mtime: r.mtime.getTime(),
        size: r.size,
        head: o,
        tail: s
      }
    } finally {
      await t.close()
    }
  } catch {
    return null
  }
}
async function Q(e) {
  let n = await Z(e);
  if (n === null) return null;
  return {
    mtime: Math.trunc(n.mtimeMs),
    size: n.totalBytes,
    head: n.head,
    tail: n.tail
  }
}
var $he = 200;

function Te(e) {
  return Math.abs(Ede(e)).toString(36)
}

function k(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-")
}

function s0(e) {
  let n = k(e);
  if (n.length <= $he) return n;
  return `${n.slice(0,$he)}-${Te(e)}`
}

function pGe(e, n) {
  let t = e.replaceAll("\\", "/");
  return n ? t.toLowerCase() : t
}

function N(e, n, t) {
  let r = $n(e),
    i = $n(n),
    a = (o) => t ? o.toLowerCase() : o;
  if (a(k(r)) !== a(k(i))) return !1;
  return pGe(r, t) !== pGe(i, t)
}
async function RBr(e, n, t, r, i) {
  if (!N(e, n, t)) return !1;
  if (pre(e) || pre(n)) return !1;
  if (await r(e) || await r(n)) return !1;
  let a;
  try {
    if (i !== void 0 && i.hoverRestOn) {
      let u = await i.realPath(e);
      if (!u.ok || !u.value.found) return !1;
      a = $n(u.value.path)
    } else a = $n(await z(e))
  } catch {
    return !1
  }
  let o = await $_(n, i);
  return N(a, o, t)
}

function ABr(e, n, t) {
  if (n === void 0) return !1;
  let r = pGe($n(e), t);
  return n.some((i) => {
    let a = pGe($n(i), t);
    return r === a || r.startsWith(a.endsWith("/") ? a : a + "/")
  })
}

function gZe() {
  return !0
}

function Vm() {
  return S(Pe(), "projects")
}

function cE(e) {
  return fhn() ?? s0(e)
}

function gmn(e) {
  let n = s0(e);
  return n === cE(e) ? void 0 : n
}

function iS(e, n = Vm()) {
  return S(n, cE(e))
}

function hZe() {
  let e = fhn();
  return e === void 0 ? null : S(Vm(), e)
}

function Cjo(e, n) {
  let t = E(e);
  return F(e) === Vm() && n(t) ? t : void 0
}
async function $_(e, n) {
  try {
    if (n !== void 0 && n.hoverRestOn) {
      let t = await n.realPath(e);
      return $n(t.ok && t.value.found ? t.value.path : e)
    }
    return $n(await z(e))
  } catch {
    return $n(e)
  }
}

function Q7s(e, n) {
  let t = /^([A-Za-z]):[\\/]+(.*)$/s.exec(e);
  if (t === null) return [n];
  let [, r = "", i = ""] = t, a = i.replace(/[\\/]+$/, ""), o = a === "" ? [] : a.split(/[\\/]+/), u = n.replace(/[\\/]+$/, "").split(/[\\/]+/), s = u.length - o.length, c = (l, p) => l !== void 0 && p !== void 0 && l.length === p.length && l.toLowerCase() === p.toLowerCase();
  if (s < 1 || !o.every((l, p) => c(l, u[s + p])) || s === 1 && c(u[0], `${r}:`)) return [n];
  return [n, `${r}:\\${o.join("\\")}`]
}
async function hmn(e, n, t, r) {
  let i = r !== void 0 && r.hoverRestOn ? r.source : void 0,
    a = i === void 0 ? void 0 : Cjo(e, i.isKeySegment);
  if (i !== void 0 && a !== void 0) {
    let s = await Be(a, n, t, i);
    if (s !== void 0) return s
  }
  if (de()) return !1;
  let o = k(n),
    u;
  try {
    u = await b(e, {
      withFileTypes: !0
    })
  } catch {
    return !1
  }
  for (let s of u) {
    if (!s.isFile() || !s.name.endsWith(".jsonl")) continue;
    let c = await uGe(S(e, s.name));
    if (c === null) continue;
    if (ee(c, o, t)) return !0
  }
  return !1
}

function ee(e, n, t) {
  let r = mZe(e.tail, "relocated", "relocatedCwd") ?? oDe(e.head, "cwd");
  if (r === void 0) return !1;
  let i = k($n(r));
  return t ? i.toLowerCase() === n.toLowerCase() : i === n
}
async function Be(e, n, t, r) {
  let {
    backend: i,
    transcriptKey: a,
    isKeySegment: o
  } = r, u = k(n), s = !1, c = new Set;
  try {
    let l = await pa((p) => i.listEntries({
      namespace: "transcript",
      projectKey: e
    }, C(p)), async (p) => {
      for (let f of p) {
        if (f.kind !== "key" || f.key.namespace !== "transcript" || f.key.projectKey !== e || f.key.agentId !== void 0 || !o(f.key.sessionId) || c.has(f.key.sessionId)) continue;
        let d = f.key.sessionId,
          y = await Q({
            backend: i,
            key: a(e, d)
          });
        if (y === null) continue;
        if (c.add(d), ee(y, u, t)) {
          s = !0;
          return
        }
      }
    }, {
      until: () => s
    });
    if (s) return !0;
    if (l.status !== "done") return
  } catch {
    return
  }
  return !1
}
async function CTe(e, n, t = Vm()) {
  if (n !== void 0 && n.hoverRestOn) return Oe(e, n);
  if (de()) return [];
  let r = iS(e, t),
    i = [];
  try {
    await b(r), i.push(r)
  } catch {}
  let a = gmn(e);
  if (a !== void 0) {
    let p = S(t, a);
    try {
      await b(p), i.push(p)
    } catch {}
    return i
  }
  let o = s0(e);
  if (o.length <= $he) return i;
  let u = !0,
    s = (p) => u ? p.toLowerCase() : p,
    c = s(o.slice(0, $he) + "-"),
    l = s(r);
  try {
    for (let p of await b(t, {
        withFileTypes: !0
      })) {
      if (!p.isDirectory() || !s(p.name).startsWith(c)) continue;
      let f = S(t, p.name);
      if (s(f) !== l && await hmn(f, e, u)) i.push(f)
    }
  } catch {}
  return i
}
async function Oe(e, n) {
  let t = await Z7s(n.source);
  if (t === null) {
    let r = gmn(e);
    return [iS(e), ...r !== void 0 ? [S(Vm(), r)] : []]
  }
  return eZs(e, t, !0, n)
}
async function Z7s(e) {
  let {
    backend: n,
    isKeySegment: t
  } = e, r = [], i = new Set, a = 0;
  try {
    if ((await pa((u) => n.listEntries({
        namespace: "transcript"
      }, C(u)), (u) => {
        for (let s of u) {
          let c = TTe(s, t);
          if (c !== void 0 && !i.has(c)) i.add(c), r.push(c)
        }
        a++
      })).status === "error") return a === 0 ? null : r
  } catch {
    return a === 0 ? null : r
  }
  return r
}
async function eZs(e, n, t, r) {
  let i = cE(e),
    a = iS(e),
    o = gmn(e),
    u = o === void 0 && i.length > $he ? i.slice(0, $he) + "-" : void 0,
    s = Vm(),
    c = (g) => t ? g.toLowerCase() : g,
    l = u !== void 0 ? c(u) : void 0,
    p = c(i),
    f = !1,
    d, y = [],
    m = new Set;
  for (let g of n)
    if (g === i) f = !0;
    else if (o !== void 0) {
    if (d === void 0 && c(g) === c(o)) d = S(s, g)
  } else if (l !== void 0 && c(g).startsWith(l) && c(g) !== p && !m.has(c(g))) m.add(c(g)), y.push(g);
  let h = [];
  for (let g of y) {
    let I = S(s, g);
    if (await hmn(I, e, t, r)) h.push(I)
  }
  return [...f ? [a] : [], ...d !== void 0 ? [d] : [], ...h]
}
async function Rjo(e, n) {
  return (await CTe(e, n))[0]
}
async function ne(e, n, t = Vm()) {
  let r = [];
  for (let i of await Y1t(e)) {
    if (i === e) continue;
    let a = await CTe(i, n, t);
    if (n !== void 0 && n.hoverRestOn) {
      let o = iS(i);
      if (!a.includes(o)) a.push(o)
    }
    for (let o of a) r.push({
      worktreePath: i,
      projectDir: o
    })
  }
  return r
}
async function xBr(e, n, t, r, i = Vm()) {
  let a = `${e}.jsonl`,
    o = r && t !== void 0 && t.isKeySegment(e) ? kYs(t) : void 0,
    u = o === void 0 ? void 0 : {
      source: o,
      hoverRestOn: r
    };
  async function s(l, p) {
    let f = S(l, a);
    if (o) {
      let d = Cjo(l, o.isKeySegment);
      if (d !== void 0) {
        try {
          let y = await o.backend.stat(o.transcriptKey(d, e));
          if (y.ok) {
            let m = y.value.storedBytes ?? y.value.size;
            if (m > 0) return {
              filePath: f,
              projectPath: p,
              fileSize: m
            }
          }
        } catch {}
        return
      }
    }
    try {
      let d = await fe(f);
      if (d.size > 0) return {
        filePath: f,
        projectPath: p,
        fileSize: d.size
      }
    } catch {}
    return
  }
  if (n) {
    let l = await $_(n, vYs(t, r)),
      p = new Set;
    for (let f of Q7s(n, l))
      for (let d of await CTe(f, u, i)) {
        let y = d.toLowerCase();
        if (p.has(y)) continue;
        p.add(y);
        let m = await s(d, f);
        if (m) return m
      }
    for (let {
        worktreePath: f,
        projectDir: d
      }
      of await ne(l, u, i)) {
      let y = await s(d, f);
      if (y) return y
    }
    return
  }
  if (o) {
    let l = new Map;
    try {
      if ((await pa((d) => o.backend.listEntries({
          namespace: "transcript"
        }, d !== void 0 ? {
          cursor: d
        } : void 0), (d) => {
          for (let y of d) {
            let m = TTe(y, o.isKeySegment);
            if (m === void 0) continue;
            let h = y.kind === "scope" && y.mtimeMs !== void 0 ? y.mtimeMs : Number.NEGATIVE_INFINITY,
              g = l.get(m);
            if (g === void 0) l.set(m, {
              projectKey: m,
              mtimeMs: h
            });
            else if (h > g.mtimeMs) g.mtimeMs = h
          }
        })).status === "error") return
    } catch {
      return
    }
    let p = [...l.values()];
    p.sort((f, d) => f.mtimeMs !== d.mtimeMs ? d.mtimeMs - f.mtimeMs : f.projectKey < d.projectKey ? -1 : f.projectKey > d.projectKey ? 1 : 0);
    for (let {
        projectKey: f
      }
      of p) {
      let d = await s(S(i, f), void 0);
      if (d) return d
    }
    return
  }
  let c;
  try {
    c = await b(i)
  } catch {
    return
  }
  for (let l of c) {
    let p = await s(S(i, l), void 0);
    if (p) return p
  }
  return
}
var j = 1048576,
  Fne = 5242880,
  te = Buffer.from('"compact_boundary"');
async function Ajo(e, n) {
  let t = te,
    r = Math.min(j, Math.max(n, 1)),
    i = Buffer.allocUnsafe(r),
    a = t.length - 1,
    o = await v(e, "r");
  try {
    let u = 0,
      s = 0;
    while (u < n) {
      let {
        bytesRead: c
      } = await o.read(i, s, Math.min(r - s, n - u), u);
      if (c === 0) break;
      u += c;
      let l = s + c;
      if (i.subarray(0, l).includes(t)) return !0;
      s = Math.min(a, l), i.copy(i, 0, l - s, l)
    }
    return !1
  } finally {
    await o.close().catch(() => {})
  }
}

function re(e) {
  try {
    let n = JSON.parse(e);
    if (n.type !== "system" || n.subtype !== "compact_boundary") return null;
    return {
      hasPreservedSegment: Boolean(n.compactMetadata?.preservedSegment || n.compactMetadata?.preservedMessages)
    }
  } catch {
    return null
  }
}

function w(e, n, t, r) {
  let i = r - t;
  if (i <= 0) return;
  if (e.len + i > e.buf.length) {
    let a = Buffer.allocUnsafe(Math.min(Math.max(e.buf.length * 2, e.len + i), e.cap));
    e.buf.copy(a, 0, 0, e.len), e.buf = a
  }
  n.copy(e.buf, e.len, t, r), e.len += i
}

function T(e, n, t, r) {
  return r - t >= n.length && e.compare(n, 0, n.length, t, t + n.length) === 0
}
var B = Buffer.from('{"type":"attribution-snapshot"'),
  xe = Buffer.from('{"type":"system"'),
  P = 10,
  Re = Buffer.from([P]),
  Ee = 256;

function D(e, n, t) {
  if (e.straddleSnapCarryLen = 0, e.straddleSnapTailEnd = 0, e.carryLen === 0) return 0;
  let r = e.carryBuf,
    i = n.indexOf(P);
  if (i === -1 || i >= t) return 0;
  let a = i + 1;
  if (T(r, B, 0, e.carryLen)) e.straddleSnapCarryLen = e.carryLen, e.straddleSnapTailEnd = a, e.lastSnapSrc = null;
  else if (e.carryLen < B.length) return 0;
  else {
    if (T(r, xe, 0, e.carryLen)) {
      let o = re(r.toString("utf-8", 0, e.carryLen) + n.toString("utf-8", 0, i));
      if (o?.hasPreservedSegment) e.hasPreservedSegment = !0;
      else if (o) e.out.len = 0, e.boundaryStartOffset = e.bufFileOff, e.hasPreservedSegment = !1, e.lastSnapSrc = null
    }
    w(e.out, r, 0, e.carryLen), w(e.out, n, 0, a)
  }
  return e.bufFileOff += e.carryLen + a, e.carryLen = 0, a
}

function A(e, n, t) {
  let r = n.indexOf(t),
    i = 0,
    a = 0,
    o = -1,
    u = -1,
    s = n.indexOf(P);
  while (s !== -1) {
    let c = s + 1;
    if (r !== -1 && r < a) r = n.indexOf(t, a);
    if (T(n, B, a, c)) w(e.out, n, i, a), o = a, u = c, i = c;
    else if (r >= a && r < Math.min(a + Ee, c)) {
      let l = re(n.toString("utf-8", a, s));
      if (l?.hasPreservedSegment) e.hasPreservedSegment = !0;
      else if (l) e.out.len = 0, e.boundaryStartOffset = e.bufFileOff + a, e.hasPreservedSegment = !1, e.lastSnapSrc = null, o = -1, e.straddleSnapCarryLen = 0, i = a;
      r = n.indexOf(t, r + t.length)
    }
    a = c, s = n.indexOf(P, a)
  }
  return w(e.out, n, i, a), {
    lastSnapStart: o,
    lastSnapEnd: u,
    trailStart: a
  }
}

function W(e, n, t, r, i) {
  if (r !== -1) {
    if (e.lastSnapLen = i - r, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    n.copy(e.lastSnapBuf, 0, r, i), e.lastSnapSrc = e.lastSnapBuf
  } else if (e.straddleSnapCarryLen > 0) {
    if (e.lastSnapLen = e.straddleSnapCarryLen + e.straddleSnapTailEnd, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    e.carryBuf.copy(e.lastSnapBuf, 0, 0, e.straddleSnapCarryLen), t.copy(e.lastSnapBuf, e.straddleSnapCarryLen, 0, e.straddleSnapTailEnd), e.lastSnapSrc = e.lastSnapBuf
  }
}

function U(e, n, t) {
  if (e.carryLen = n.length - t, e.carryLen > 0) {
    if (e.carryBuf === void 0 || e.carryLen > e.carryBuf.length) e.carryBuf = Buffer.allocUnsafe(e.carryLen);
    n.copy(e.carryBuf, 0, t, n.length)
  }
}

function V(e) {
  if (e.carryLen > 0) {
    let n = e.carryBuf;
    if (T(n, B, 0, e.carryLen)) e.lastSnapSrc = n, e.lastSnapLen = e.carryLen;
    else w(e.out, n, 0, e.carryLen)
  }
  if (e.lastSnapSrc) {
    if (e.out.len > 0 && e.out.buf[e.out.len - 1] !== P) w(e.out, Re, 0, 1);
    w(e.out, e.lastSnapSrc, 0, e.lastSnapLen)
  }
}
async function Fe(e, n, t, r) {
  let i = 0,
    a;
  while (i < t) {
    let o = await e.readRecords(n, {
      order: "forward",
      maxBytes: j,
      ...a !== void 0 && {
        fromSeq: a
      }
    });
    if (!o.ok) throw Error("transcript record page failed during load", {
      cause: o.error
    });
    let u = [],
      s = 0;
    for (let l of o.value.items) {
      if (i + s + l.data.byteLength > t) break;
      u.push(l.data), s += l.data.byteLength
    }
    if (s > 0) r(Buffer.concat(u, s)), i += s;
    let c = o.value.nextSeq;
    if (c === void 0 || u.length < o.value.items.length) return;
    if (a !== void 0 && c <= a) throw Error("transcript record cursor did not advance during load");
    a = c
  }
}
async function xjo(e, n, t) {
  let r = te,
    i = j,
    a = {
      out: {
        buf: Buffer.allocUnsafe(Math.min(n, 8388608)),
        len: 0,
        cap: n + 1
      },
      boundaryStartOffset: 0,
      hasPreservedSegment: !1,
      lastSnapSrc: null,
      lastSnapLen: 0,
      lastSnapBuf: void 0,
      bufFileOff: 0,
      carryLen: 0,
      carryBuf: void 0,
      straddleSnapCarryLen: 0,
      straddleSnapTailEnd: 0
    };
  if (t !== void 0 && t.hoverRestOn) {
    let {
      backend: s,
      key: c
    } = t.source, l = 0, p = (f) => {
      let d = f.length;
      l += d;
      let y = D(a, f, d),
        m;
      if (a.carryLen > 0) {
        let g = a.carryLen + (d - y);
        m = Buffer.allocUnsafe(g), a.carryBuf.copy(m, 0, 0, a.carryLen), f.copy(m, a.carryLen, y, d)
      } else m = f.subarray(y, d);
      let h = A(a, m, r);
      W(a, m, f, h.lastSnapStart, h.lastSnapEnd), U(a, m, h.trailStart), a.bufFileOff += h.trailStart
    };
    while (l < n) {
      let f = await s.read([{
        key: c,
        offset: l,
        length: Math.min(i, n - l)
      }]);
      if (!f.ok) {
        if (l === 0 && Sjt(f.error)) {
          await Fe(s, c, n, p);
          break
        }
        throw Error("transcript ranged read failed", {
          cause: f.error
        })
      }
      let [d] = f.value.items;
      if (!d.found) throw Error("transcript stream absent during load");
      if (d.value.length === 0) break;
      p(Buffer.from(d.value.buffer, d.value.byteOffset, d.value.length))
    }
    return V(a), {
      boundaryStartOffset: a.boundaryStartOffset,
      postBoundaryBuf: a.out.buf.subarray(0, a.out.len),
      hasPreservedSegment: a.hasPreservedSegment
    }
  }
  if (typeof e !== "string") throw Error("readTranscriptForLoad: this transcript has a storage key and no file, so it can be read only through a storage backend. The caller passed none, or tengu_hover_rest is off.");
  let o = Buffer.allocUnsafe(i),
    u = await v(e, "r");
  try {
    let s = 0;
    while (s < n) {
      let {
        bytesRead: c
      } = await u.read(o, 0, Math.min(i, n - s), s);
      if (c === 0) break;
      s += c;
      let l = D(a, o, c),
        p;
      if (a.carryLen > 0) {
        let d = a.carryLen + (c - l);
        p = Buffer.allocUnsafe(d), a.carryBuf.copy(p, 0, 0, a.carryLen), o.copy(p, a.carryLen, l, c)
      } else p = o.subarray(l, c);
      let f = A(a, p, r);
      W(a, p, o, f.lastSnapStart, f.lastSnapEnd), U(a, p, f.trailStart), a.bufFileOff += f.trailStart
    }
    V(a)
  } finally {
    await u.close()
  }
  return {
    boundaryStartOffset: a.boundaryStartOffset,
    postBoundaryBuf: a.out.buf.subarray(0, a.out.len),
    hasPreservedSegment: a.hasPreservedSegment
  }
}
var X1t = /^[0-9a-f]{16}(?:[0-9a-f]{48})?@v\d+$/;

function iDe(e) {
  return lI(e) !== null
}

function yZe(e, n, t) {
  return {
    type: "history-suppression",
    sessionId: e,
    cause: n,
    ...t && {
      vetoedAgainstAccountUuid: t
    },
    ts: new Date().toISOString()
  }
}
export {
  Y1t,
  hv,
  pmn,
  Lai,
  lI,
  rDe,
  O5,
  mZe,
  oDe,
  EBr,
  vYs,
  dGe,
  Ejo,
  Nai,
  Fai,
  Hai,
  fmn,
  Tjo,
  TBr,
  TTe,
  mmn,
  cGe,
  sDe,
  gde,
  kYs,
  CBr,
  uGe,
  $he,
  s0,
  pGe,
  RBr,
  ABr,
  gZe,
  Vm,
  cE,
  gmn,
  iS,
  hZe,
  Cjo,
  $_,
  Q7s,
  hmn,
  CTe,
  Z7s,
  eZs,
  Rjo,
  xBr,
  Fne,
  Ajo,
  xjo,
  X1t,
  iDe,
  yZe
};
