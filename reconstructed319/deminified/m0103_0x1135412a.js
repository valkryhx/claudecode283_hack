// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { En, kY } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Ue, aqn } from "B:/~BUN/root/chunk-eev762xg.js";
import { YSt } from "B:/~BUN/root/chunk-0w2htvr6.js";
import { wN } from "B:/~BUN/root/chunk-83p1z1q5.js";
import { qa } from "B:/~BUN/root/chunk-qzcyr88d.js";
import { $qe } from "B:/~BUN/root/chunk-kyztcy3q.js";
import { sne } from "B:/~BUN/root/chunk-tr26qctc.js";
import { bcn } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { randomUUID as ae } from "crypto";
import { once as I } from "events";
import { constants as x, createWriteStream as se } from "fs";
import { lstat as V, open as O, lstat as R, readdir as b, realpath as J, rename as ce, stat as ue } from "fs/promises";
import { basename as E, dirname as F, isAbsolute as fe, join as S } from "path";
import { createInterface as de } from "readline";
import { execFile as re } from "child_process";
import { promisify as ie } from "util";
var oe = ie(re);
async function zdn(cwd) {
  let n = wN("git");
  if (n === null || $qe(n, process.env)) return [];
  try {
    let {
      stdout: stdout
    } = await oe(n, ["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor=", "worktree", "list", "--porcelain"], {
      cwd: cwd,
      timeout: 5000,
      windowsHide: !0
    });
    if (!stdout) return [];
    return stdout.split(`
`).filter(item => item.startsWith("worktree ")).map(item => En(item.slice(9)));
  } catch {
    return [];
  }
}
var sv = 65536,
  Z2n = new Set(["sdk-cli", "sdk-ts", "sdk-py"]);
function Tva(e, n) {
  let t = Nqe(e, "entrypoint") ?? Yte(n, "entrypoint");
  if (t && Z2n.has(t)) return !0;
  let r = e.split(`
`).find(item => item.includes('"parentUuid":')) ?? e,
    i = Nqe(r, "sessionKind");
  return i === "daemon" || i === "daemon-worker";
}
var le = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function QU(e) {
  if (typeof e !== "string") return null;
  return le.test(e) ? e : null;
}
function z(e) {
  if (!e.includes("\\")) return e;
  try {
    return JSON.parse(`"${e}"`);
  } catch {
    return e;
  }
}
function Nqe(e, n) {
  let t = [`"${n}":"`, `"${n}": "`];
  for (let r of t) {
    let i = e.indexOf(r);
    if (i < 0) continue;
    let o = i + r.length,
      a = o;
    while (a < e.length) {
      if (e[a] === "\\") {
        a += 2;
        continue;
      }
      if (e[a] === '"') return z(e.slice(o, a));
      a++;
    }
  }
  return;
}
function Yte(e, n) {
  let t = [`"${n}":"`, `"${n}": "`],
    r,
    i = -1;
  for (let o of t) {
    let a = 0;
    while (!0) {
      let u = e.indexOf(o, a);
      if (u < 0) break;
      let s = u + o.length,
        c = s;
      while (c < e.length) {
        if (e[c] === "\\") {
          c += 2;
          continue;
        }
        if (e[c] === '"') {
          if (u > i) r = z(e.slice(s, c)), i = u;
          break;
        }
        c++;
      }
      a = c + 1;
    }
  }
  return r;
}
function JHe(e, n, t) {
  return Y(e, t, n);
}
function Y(e, n, t) {
  let r = t === void 0 ? void 0 : `"type":"${t}"`,
    i = `"${n}":`,
    o = e.length;
  while (o > 0) {
    let a = e.lastIndexOf(`
`, o - 1),
      u = e.slice(a + 1, o);
    if (o = a, u.includes(i) && (r === void 0 || u.includes(r))) try {
      let s = JSON.parse(u);
      if (typeof s === "object" && s !== null && (t === void 0 || s.type === t)) {
        let c = s[n];
        if (typeof c === "string") return c;
      }
    } catch {}
    if (a < 0) break;
  }
  return;
}
function Xte(e, n) {
  let t = `"${n}":`,
    r = 0;
  while (r < e.length) {
    let i = e.indexOf(`
`, r),
      o = i < 0 ? e.slice(r) : e.slice(r, i);
    if (r = i < 0 ? e.length : i + 1, o.includes(t)) try {
      let a = JSON.parse(o);
      if (typeof a === "object" && a !== null) {
        let u = a[n];
        if (typeof u === "string") return u;
      }
    } catch {}
  }
  return;
}
function Gdn(e, n) {
  return Y(e, n);
}
function kna(e, hoverRestOn) {
  return e?.realWorkspacePath === void 0 ? void 0 : {
    hoverRestOn: hoverRestOn,
    realPath: e.realWorkspacePath
  };
}
async function ynt(e, n, t) {
  return G(e, n, "w", t);
}
async function D1s(e, n, t) {
  return G(e, n, "a", t);
}
async function G(e, n, flags, r) {
  if (r !== void 0 && r.hoverRestOn && (flags === "w" || n.length > 0)) return pe(r.source, n, flags);
  let i = se(e, {
    mode: 384,
    flags: flags
  });
  try {
    for (let o of n) if (!i.write(JSON.stringify(o) + `
`)) await I(i, "drain");
    i.end(), await I(i, "finish");
  } catch (error) {
    throw i.destroy(), error;
  }
}
async function pe(e, n, t) {
  let {
      backend: backend,
      key: key
    } = e,
    o = n.map(item => ({
      data: JSON.stringify(item) + `
`
    }));
  if (t === "w") {
    let u = await backend.replaceRecords(key, o, {
      publishDiscipline: "inPlace",
      mode: 384
    });
    if (!u.ok) throw Error("transcript stream replace failed", {
      cause: u.error
    });
    return;
  }
  let a = await backend.append(key, o);
  if (!a.ok) throw Error("transcript stream append failed", {
    cause: a.error
  });
}
function Cva(e, n = "stored") {
  let t = 0,
    r = {
      commandFallback: ""
    };
  while (t < e.length) {
    let i = e.indexOf(`
`, t),
      o = i >= 0 ? e.slice(t, i) : e.slice(t);
    if (t = i >= 0 ? i + 1 : e.length, !o.includes('"type":"user"') && !o.includes('"type": "user"')) continue;
    if (o.includes('"tool_result"')) continue;
    if (o.includes('"isMeta":true') || o.includes('"isMeta": true')) continue;
    if (o.includes('"isCompactSummary":true') || o.includes('"isCompactSummary": true')) continue;
    try {
      let a = JSON.parse(o),
        u = YSt(a, r, n);
      if (u !== void 0) return u;
    } catch {
      continue;
    }
  }
  return r.commandFallback;
}
function Rva(e) {
  let n = 0;
  while (n < e.length) {
    let t = e.indexOf(`
`, n),
      r = t >= 0 ? e.slice(n, t) : e.slice(n);
    if (n = t >= 0 ? t + 1 : e.length, !r.includes('"type":"user"') && !r.includes('"type": "user"')) continue;
    if (r.includes('"tool_result"')) continue;
    if (r.includes('"isMeta":true') || r.includes('"isMeta": true')) continue;
    if (r.includes('"type":"image"') || r.includes('"type": "image"')) return "Image";
    if (r.includes('"type":"document"') || r.includes('"type": "document"')) return "Document";
  }
  return "";
}
function Ava(e, n = "stored") {
  let t = {
    commandFallback: ""
  };
  for (let r of e) {
    if (typeof r !== "object" || r === null) continue;
    let i = YSt(r, t, n);
    if (i !== void 0) return i;
  }
  return t.commandFallback;
}
var O_RDONLY = x.O_RDONLY;
async function eVn(e, n, t, r) {
  if (r !== void 0 && r.hoverRestOn) return me(r.source);
  try {
    if (O_RDONLY === x.O_RDONLY) {
      if (!(await V(e)).isFile()) return {
        head: "",
        tail: ""
      };
    }
    let i = await O(e, O_RDONLY);
    try {
      if (!(await i.stat()).isFile()) return {
        head: "",
        tail: ""
      };
      let o = await i.read(t, 0, sv, 0);
      if (o.bytesRead === 0) return {
        head: "",
        tail: ""
      };
      let head = t.toString("utf8", 0, o.bytesRead),
        u = Math.max(0, n - sv),
        tail = head;
      if (u > 0) {
        let c = await i.read(t, 0, sv, u);
        tail = t.toString("utf8", 0, c.bytesRead);
      }
      return {
        head: head,
        tail: tail
      };
    } finally {
      await i.close();
    }
  } catch {
    return {
      head: "",
      tail: ""
    };
  }
}
async function me(e) {
  let n = await Z(e);
  return n === null ? {
    head: "",
    tail: ""
  } : {
    head: n.head,
    tail: n.tail
  };
}
function L1s(e) {
  let n = e.indexOf(`
`);
  return n >= 0 ? e.slice(n + 1) : "";
}
async function Z(e) {
  let {
    backend: backend_2,
    key: key_2
  } = e;
  try {
    let r = await backend_2.read([{
      key: key_2,
      offset: 0,
      length: sv
    }, {
      key: key_2,
      tail: sv
    }]);
    if (!r.ok) return null;
    let [i, o] = r.value.items;
    if (!i.found || i.value.length === 0) return null;
    let head_2 = K(i.value),
      tail_2 = o.found && o.value.length > 0 ? K(o.value) : head_2;
    return {
      head: head_2,
      tail: tail_2,
      mtimeMs: i.mtimeMs,
      totalBytes: i.totalBytes
    };
  } catch {
    return null;
  }
}
function K(e) {
  return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
}
async function _(e, n) {
  return (await j(e, n)) !== "none";
}
async function j(e, n) {
  if (n !== void 0 && n.hoverRestOn) return tVn(n.source);
  try {
    if (!(await R(e)).isFile()) return "none";
  } catch (error) {
    return B(error) ? "none" : "unknown";
  }
  let t;
  try {
    t = await O(e, "r");
  } catch (error) {
    return B(error) ? "none" : "unknown";
  }
  try {
    let r = de({
      input: t.createReadStream()
    });
    for await (let i of r) if (i.includes('"type":"user"') || i.includes('"type":"assistant"')) return r.close(), "has";
    return "none";
  } catch {
    return "unknown";
  } finally {
    await t.close().catch(() => {});
  }
}
var ye = 65536,
  ge = 4194304,
  Se = Buffer.from('"type":"user"'),
  he = Buffer.from('"type":"assistant"');
function we(e) {
  return e.includes(Se) || e.includes(he);
}
var gPo = 1e4;
function QHe(e, n) {
  if (e.kind !== "scope" || e.scope.namespace !== "transcript" || e.scope.projectKey === void 0 || e.scope.sessionId !== void 0 || !n(e.scope.projectKey)) return;
  return e.scope.projectKey;
}
async function tVn(e, n = we) {
  let {
      backend: backend_3,
      key: key_3
    } = e,
    fromSeq,
    o = !1,
    a = 0,
    u = 0;
  try {
    for (;;) {
      if (++u > gPo) return "unknown";
      let s = await backend_3.readRecords(key_3, {
        order: "forward",
        maxBytes: fromSeq === void 0 ? ye : ge,
        ...(fromSeq !== void 0 && {
          fromSeq: fromSeq
        })
      });
      if (!s.ok) return s.error.code === "NotFound" ? "none" : "unknown";
      a += s.value.items.length;
      for (let p of s.value.items) {
        let l = Buffer.from(p.data.buffer, p.data.byteOffset, p.data.byteLength);
        if (n(l)) return "has";
        if (p.truncated === !0) o = !0;
      }
      let nextSeq = s.value.nextSeq;
      if (nextSeq === void 0) {
        if (o) return "unknown";
        if (s.value.items.length === 0 && fromSeq !== void 0) return "unknown";
        let p = await backend_3.statStream(key_3);
        if (!p.ok) return p.error.code === "NotFound" ? "none" : "unknown";
        return p.value.recordCount > a ? "unknown" : "none";
      }
      if (fromSeq !== void 0 && nextSeq <= fromSeq) return "unknown";
      fromSeq = nextSeq;
    }
  } catch {
    return "unknown";
  }
}
async function _nt(e, n) {
  let t = `orphaned-${Date.now()}-${ae().slice(0, 8)}`,
    r = n !== void 0 && n.hoverRestOn ? n.source : void 0,
    i = r !== void 0 && e.endsWith(".jsonl") ? X(e, E(e, ".jsonl"), r) : void 0;
  if (i !== void 0 && r !== void 0) {
    let {
      key: key_4
    } = i;
    if (key_4.namespace !== "transcript") return !1;
    try {
      return (await i.backend.move(key_4, r.transcriptKey(key_4.projectKey, `${key_4.sessionId}.${t}`))).ok;
    } catch {
      return !1;
    }
  }
  let o = `${e.endsWith(".jsonl") ? e.slice(0, -6) : e}.${t}.jsonl`;
  try {
    return await ce(e, o), !0;
  } catch {
    return !1;
  }
}
function Fqe(e) {
  return fe(e) && e.endsWith(".jsonl");
}
async function Jte(e, n, path, r, i) {
  let o = await Dw(n, kna(i?.source, i?.hoverRestOn === !0));
  if (QU(e) === null) return {
    path: S(iv(o), "invalid-resume-id.jsonl"),
    hasMessages: !1,
    via: "computed"
  };
  let path_2 = S(iv(o), `${e}.jsonl`),
    u = [];
  if (path !== void 0) u.push(path.endsWith(`${e}.jsonl`) ? {
    path: path,
    via: "linkScanPath"
  } : {
    path: S(F(path), `${e}.jsonl`),
    via: "linkScanDir"
  });
  let s = i !== void 0 && i.hoverRestOn ? {
    ...i,
    source: vna(i.source)
  } : void 0;
  for (let f of await e$e(o, s)) u.push({
    path: S(f, `${e}.jsonl`),
    via: "projectDir"
  });
  u.push({
    path: path_2,
    via: "computed"
  });
  let c = new Set(),
    p = f => be(f, e, s),
    l;
  for (let f of u) {
    if (c.has(f.path)) continue;
    c.add(f.path);
    let d = await p(f.path);
    if (d === "has") return {
      ...f,
      hasMessages: !0
    };
    if (d === "unverifiable" && l === void 0) l = f;
  }
  if (r?.crossWorktree !== !1) for (let {
    projectDir: projectDir
  } of await ne(o, s)) {
    let path_3 = S(projectDir, `${e}.jsonl`);
    if (s !== void 0) {
      if (c.has(path_3)) continue;
      c.add(path_3);
    }
    let m = await p(path_3);
    if (m === "has") return {
      path: path_3,
      via: "worktreeProjectDir",
      hasMessages: !0
    };
    if (m === "unverifiable" && l === void 0) l = {
      path: path_3,
      via: "worktreeProjectDir"
    };
  }
  if (r?.crossWorktree !== !1) {
    let path_4 = await Hqe(e, c, s);
    if (path_4 !== null) return {
      path: path_4,
      via: "projectsScan",
      hasMessages: !0
    };
  }
  if (l !== void 0) return {
    ...l,
    hasMessages: !0,
    unverifiable: !0
  };
  return {
    ...u[0],
    hasMessages: !1
  };
}
function X(e, n, t) {
  let r = N1s(F(e), t.isKeySegment);
  if (r === void 0 || E(e) !== `${n}.jsonl` || !t.isKeySegment(n)) return;
  return {
    backend: t.backend,
    key: t.transcriptKey(r, n)
  };
}
async function be(e, n, t) {
  let r = t !== void 0 && t.hoverRestOn ? X(e, n, t.source) : void 0;
  if (r === void 0) return (await _(e)) ? "has" : "none";
  let i = await tVn(r);
  if (i === "has") return "has";
  try {
    if (!(await R(e)).isFile()) return "none";
  } catch (error) {
    if (!B(error)) return "has";
    return i === "unknown" ? "unverifiable" : "none";
  }
  return (await _(e)) ? "has" : "none";
}
function B(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === "ENOENT";
}
function M(cursor) {
  return {
    skipScopeStats: !0,
    skipKeyStats: !0,
    ...(cursor !== void 0 && {
      cursor: cursor
    })
  };
}
function vna(e) {
  let n = new Map(),
    t = new Proxy(e.backend, {
      get(r, i, o) {
        let a = Reflect.get(r, i, o);
        if (i !== "listEntries") return typeof a === "function" ? a.bind(r) : a;
        return (s, c) => {
          if (!(s.namespace === "transcript" && !("projectKey" in s) && Object.keys(c ?? {}).every(item => item === "cursor" || item === "skipScopeStats" || item === "skipKeyStats"))) return r.listEntries(s, c);
          let l = [c?.cursor ?? "", c?.skipScopeStats, c?.skipKeyStats].map(String).join("\x00"),
            f = n.get(l);
          if (f === void 0) {
            f = r.listEntries(s, c), n.set(l, f);
            let d = () => {
              n.delete(l);
            };
            f.then(m => {
              if (!m.ok) d();
            }, d);
          }
          return f;
        };
      }
    });
  return {
    ...e,
    backend: t
  };
}
async function Hqe(e, n = new Set(), t) {
  if (QU(e) === null) return null;
  if (t !== void 0 && t.hoverRestOn && t.source.isKeySegment(e)) return ke(e, n, t.source);
  let r = Om(),
    i = null;
  try {
    for (let o of await b(r, {
      withFileTypes: !0
    })) {
      if (!o.isDirectory()) continue;
      let a = S(r, o.name, `${e}.jsonl`);
      if (n.has(a)) continue;
      if ((await j(a)) !== "has") continue;
      if (i !== null) return null;
      i = a;
    }
  } catch {
    return null;
  }
  return i;
}
async function ke(e, n, t) {
  let {
      backend: backend_4,
      transcriptKey: transcriptKey,
      isKeySegment: isKeySegment
    } = t,
    a = Om(),
    u = null,
    s = !1,
    c = new Set();
  try {
    let p = await qa(l => backend_4.listEntries({
      namespace: "transcript"
    }, M(l)), async l => {
      for (let f of l) {
        let d = QHe(f, isKeySegment);
        if (d === void 0) continue;
        let m = S(a, d, `${e}.jsonl`);
        if (c.has(m) || n.has(m)) continue;
        c.add(m);
        let y = await tVn({
          backend: backend_4,
          key: transcriptKey(d, e)
        });
        if (y === "unknown") try {
          y = (await R(m)).isFile() ? await j(m) : "none";
        } catch {}
        if (y !== "has") continue;
        if (u !== null) {
          s = !0;
          return;
        }
        u = m;
      }
    }, {
      until: () => s
    });
    if (s || p.status !== "done") return null;
  } catch {
    return null;
  }
  return u;
}
async function kae(e, n) {
  if (n !== void 0 && n.hoverRestOn) return Q(n.source);
  try {
    if (O_RDONLY === x.O_RDONLY) {
      if (!(await V(e)).isFile()) return null;
    }
    let t = await O(e, O_RDONLY);
    try {
      let r = await t.stat();
      if (!r.isFile()) return null;
      let i = Buffer.allocUnsafe(sv),
        o = await t.read(i, 0, sv, 0);
      if (o.bytesRead === 0) return null;
      let head_3 = i.toString("utf8", 0, o.bytesRead),
        u = Math.max(0, r.size - sv),
        tail_3 = head_3;
      if (u > 0) {
        let c = await t.read(i, 0, sv, u);
        tail_3 = i.toString("utf8", 0, c.bytesRead);
      }
      return {
        mtime: r.mtime.getTime(),
        size: r.size,
        head: head_3,
        tail: tail_3
      };
    } finally {
      await t.close();
    }
  } catch {
    return null;
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
  };
}
var kxe = 200;
function Pe(e) {
  return Math.abs(sne(e)).toString(36);
}
function k(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-");
}
function c0(e) {
  let n = k(e);
  if (n.length <= kxe) return n;
  return `${n.slice(0, kxe)}-${Pe(e)}`;
}
function vwe(e, n) {
  let t = e.replaceAll("\\", "/");
  return n ? t.toLowerCase() : t;
}
function H(e, n, t) {
  let r = En(e),
    i = En(n),
    o = a => t ? a.toLowerCase() : a;
  if (o(k(r)) !== o(k(i))) return !1;
  return vwe(r, t) !== vwe(i, t);
}
async function yPo(e, n, t, r, i) {
  if (!H(e, n, t)) return !1;
  if (kY(e) || kY(n)) return !1;
  if ((await r(e)) || (await r(n))) return !1;
  let o;
  try {
    if (i !== void 0 && i.hoverRestOn) {
      let u = await i.realPath(e);
      if (!u.ok || !u.value.found) return !1;
      o = En(u.value.path);
    } else o = En(await J(e));
  } catch {
    return !1;
  }
  let a = await Dw(n, i);
  return H(o, a, t);
}
function _Po(e, n, t) {
  if (n === void 0) return !1;
  let r = vwe(En(e), t);
  return n.some(item => {
    let o = vwe(En(item), t);
    return r === o || r.startsWith(o.endsWith("/") ? o : o + "/");
  });
}
function ZHe() {
  return !0;
}
function Om() {
  return S(Ue(), "projects");
}
function GR(e) {
  return aqn() ?? c0(e);
}
function nVn(e) {
  let n = c0(e);
  return n === GR(e) ? void 0 : n;
}
function iv(e, n = Om()) {
  return S(n, GR(e));
}
function KSt() {
  let e = aqn();
  return e === void 0 ? null : S(Om(), e);
}
function N1s(e, n) {
  let t = E(e);
  return F(e) === Om() && n(t) ? t : void 0;
}
async function Dw(e, n) {
  try {
    if (n !== void 0 && n.hoverRestOn) {
      let t = await n.realPath(e);
      return En(t.ok && t.value.found ? t.value.path : e);
    }
    return En(await J(e));
  } catch {
    return En(e);
  }
}
function mpa(e, n) {
  let t = /^([A-Za-z]):[\\/]+(.*)$/s.exec(e);
  if (t === null) return [n];
  let [, r = "", i = ""] = t,
    o = i.replace(/[\\/]+$/, ""),
    a = o === "" ? [] : o.split(/[\\/]+/),
    u = n.replace(/[\\/]+$/, "").split(/[\\/]+/),
    s = u.length - a.length,
    c = (p, l) => p !== void 0 && l !== void 0 && p.length === l.length && p.toLowerCase() === l.toLowerCase();
  if (s < 1 || !a.every((item, index) => c(item, u[s + index])) || s === 1 && c(u[0], `${r}:`)) return [n];
  return [n, `${r}:\\${a.join("\\")}`];
}
async function rVn(e, n, t, r) {
  let i = r !== void 0 && r.hoverRestOn ? r.source : void 0,
    o = i === void 0 ? void 0 : N1s(e, i.isKeySegment);
  if (i !== void 0 && o !== void 0) {
    let s = await ve(o, n, t, i);
    if (s !== void 0) return s;
  }
  if (q()) return !1;
  let a = k(n),
    u;
  try {
    u = await b(e, {
      withFileTypes: !0
    });
  } catch {
    return !1;
  }
  for (let s of u) {
    if (!s.isFile() || !s.name.endsWith(".jsonl")) continue;
    let c = await kae(S(e, s.name));
    if (c === null) continue;
    if (ee(c, a, t)) return !0;
  }
  return !1;
}
function ee(e, n, t) {
  let r = JHe(e.tail, "relocated", "relocatedCwd") ?? Xte(e.head, "cwd");
  if (r === void 0) return !1;
  let i = k(En(r));
  return t ? i.toLowerCase() === n.toLowerCase() : i === n;
}
async function ve(projectKey, n, t, r) {
  let {
      backend: backend_5,
      transcriptKey: transcriptKey_2,
      isKeySegment: isKeySegment_2
    } = r,
    u = k(n),
    s = !1,
    c = new Set();
  try {
    let p = await qa(l => backend_5.listEntries({
      namespace: "transcript",
      projectKey: projectKey
    }, M(l)), async l => {
      for (let f of l) {
        if (f.kind !== "key" || f.key.namespace !== "transcript" || f.key.projectKey !== projectKey || f.key.agentId !== void 0 || !isKeySegment_2(f.key.sessionId) || c.has(f.key.sessionId)) continue;
        let sessionId = f.key.sessionId,
          m = await Q({
            backend: backend_5,
            key: transcriptKey_2(projectKey, sessionId)
          });
        if (m === null) continue;
        if (c.add(sessionId), ee(m, u, t)) {
          s = !0;
          return;
        }
      }
    }, {
      until: () => s
    });
    if (s) return !0;
    if (p.status !== "done") return;
  } catch {
    return;
  }
  return !1;
}
async function e$e(e, n, t = Om()) {
  if (n !== void 0 && n.hoverRestOn) return Le(e, n);
  if (q()) return [];
  let r = iv(e, t),
    i = [];
  try {
    await b(r), i.push(r);
  } catch {}
  let o = nVn(e);
  if (o !== void 0) {
    let l = S(t, o);
    try {
      await b(l), i.push(l);
    } catch {}
    return i;
  }
  let a = c0(e);
  if (a.length <= kxe) return i;
  let u = !0,
    s = l => u ? l.toLowerCase() : l,
    c = s(a.slice(0, kxe) + "-"),
    p = s(r);
  try {
    for (let l of await b(t, {
      withFileTypes: !0
    })) {
      if (!l.isDirectory() || !s(l.name).startsWith(c)) continue;
      let f = S(t, l.name);
      if (s(f) !== p && (await rVn(f, e, u))) i.push(f);
    }
  } catch {}
  return i;
}
async function Le(e, n) {
  let t = await hpa(n.source);
  if (t === null) {
    let r = nVn(e);
    return [iv(e), ...(r !== void 0 ? [S(Om(), r)] : [])];
  }
  return gpa(e, t, !0, n);
}
async function hpa(e) {
  let {
      backend: backend_6,
      isKeySegment: isKeySegment_3
    } = e,
    r = [],
    i = new Set(),
    o = 0;
  try {
    if ((await qa(u => backend_6.listEntries({
      namespace: "transcript"
    }, M(u)), u => {
      for (let s of u) {
        let c = QHe(s, isKeySegment_3);
        if (c !== void 0 && !i.has(c)) i.add(c), r.push(c);
      }
      o++;
    })).status === "error") return o === 0 ? null : r;
  } catch {
    return o === 0 ? null : r;
  }
  return r;
}
async function gpa(e, n, t, r) {
  let i = GR(e),
    o = iv(e),
    a = nVn(e),
    u = a === void 0 && i.length > kxe ? i.slice(0, kxe) + "-" : void 0,
    s = Om(),
    c = g => t ? g.toLowerCase() : g,
    p = u !== void 0 ? c(u) : void 0,
    l = c(i),
    f = !1,
    d,
    m = [],
    y = new Set();
  for (let g of n) if (g === i) f = !0;else if (a !== void 0) {
    if (d === void 0 && c(g) === c(a)) d = S(s, g);
  } else if (p !== void 0 && c(g).startsWith(p) && c(g) !== l && !y.has(c(g))) y.add(c(g)), m.push(g);
  let h = [];
  for (let g of m) {
    let C = S(s, g);
    if (await rVn(C, e, t, r)) h.push(C);
  }
  return [...(f ? [o] : []), ...(d !== void 0 ? [d] : []), ...h];
}
async function F1s(e, n) {
  return (await e$e(e, n))[0];
}
async function ne(e, n, t = Om()) {
  let r = [];
  for (let worktreePath of await zdn(e)) {
    if (worktreePath === e) continue;
    let o = await e$e(worktreePath, n, t);
    if (n !== void 0 && n.hoverRestOn) {
      let a = iv(worktreePath);
      if (!o.includes(a)) o.push(a);
    }
    for (let projectDir_2 of o) r.push({
      worktreePath: worktreePath,
      projectDir: projectDir_2
    });
  }
  return r;
}
async function bPo(e, n, t, hoverRestOn_2, i = Om()) {
  let o = `${e}.jsonl`,
    source = hoverRestOn_2 && t !== void 0 && t.isKeySegment(e) ? vna(t) : void 0,
    u = source === void 0 ? void 0 : {
      source: source,
      hoverRestOn: hoverRestOn_2
    };
  async function s(p, projectPath) {
    let filePath = S(p, o);
    if (source) {
      let d = N1s(p, source.isKeySegment);
      if (d !== void 0) {
        try {
          let m = await source.backend.stat(source.transcriptKey(d, e));
          if (m.ok) {
            let fileSize = m.value.storedBytes ?? m.value.size;
            if (fileSize > 0) return {
              filePath: filePath,
              projectPath: projectPath,
              fileSize: fileSize
            };
          }
        } catch {}
        return;
      }
    }
    try {
      let d = await ue(filePath);
      if (d.size > 0) return {
        filePath: filePath,
        projectPath: projectPath,
        fileSize: d.size
      };
    } catch {}
    return;
  }
  if (n) {
    let p = await Dw(n, kna(t, hoverRestOn_2)),
      l = new Set();
    for (let f of mpa(n, p)) for (let d of await e$e(f, u, i)) {
      let m = d.toLowerCase();
      if (l.has(m)) continue;
      l.add(m);
      let y = await s(d, f);
      if (y) return y;
    }
    for (let {
      worktreePath: worktreePath_2,
      projectDir: projectDir_3
    } of await ne(p, u, i)) {
      let m = await s(projectDir_3, worktreePath_2);
      if (m) return m;
    }
    return;
  }
  if (source) {
    let p = new Map();
    try {
      if ((await qa(cursor_2 => source.backend.listEntries({
        namespace: "transcript"
      }, cursor_2 !== void 0 ? {
        cursor: cursor_2
      } : void 0), d => {
        for (let m of d) {
          let projectKey_2 = QHe(m, source.isKeySegment);
          if (projectKey_2 === void 0) continue;
          let mtimeMs = m.kind === "scope" && m.mtimeMs !== void 0 ? m.mtimeMs : Number.NEGATIVE_INFINITY,
            g = p.get(projectKey_2);
          if (g === void 0) p.set(projectKey_2, {
            projectKey: projectKey_2,
            mtimeMs: mtimeMs
          });else if (mtimeMs > g.mtimeMs) g.mtimeMs = mtimeMs;
        }
      })).status === "error") return;
    } catch {
      return;
    }
    let l = [...p.values()];
    l.sort((itemA, itemB) => itemA.mtimeMs !== itemB.mtimeMs ? itemB.mtimeMs - itemA.mtimeMs : itemA.projectKey < itemB.projectKey ? -1 : itemA.projectKey > itemB.projectKey ? 1 : 0);
    for (let {
      projectKey: projectKey_3
    } of l) {
      let d = await s(S(i, projectKey_3), void 0);
      if (d) return d;
    }
    return;
  }
  let c;
  try {
    c = await b(i);
  } catch {
    return;
  }
  for (let p of c) {
    let l = await s(S(i, p), void 0);
    if (l) return l;
  }
  return;
}
var maxBytes = 1048576,
  Qte = 5242880,
  oVn = Buffer.from('"compact_boundary"');
function te(e) {
  try {
    let n = JSON.parse(e);
    if (n.type !== "system" || n.subtype !== "compact_boundary") return null;
    return {
      hasPreservedSegment: Boolean(n.compactMetadata?.preservedSegment || n.compactMetadata?.preservedMessages)
    };
  } catch {
    return null;
  }
}
function w(e, n, t, r) {
  let i = r - t;
  if (i <= 0) return;
  if (e.len + i > e.buf.length) {
    let o = Buffer.allocUnsafe(Math.min(Math.max(e.buf.length * 2, e.len + i), e.cap));
    e.buf.copy(o, 0, 0, e.len), e.buf = o;
  }
  n.copy(e.buf, e.len, t, r), e.len += i;
}
function L(e, n, t, r) {
  return r - t >= n.length && e.compare(n, 0, n.length, t, t + n.length) === 0;
}
var T = Buffer.from('{"type":"attribution-snapshot"'),
  Te = Buffer.from('{"type":"system"'),
  P = 10,
  Oe = Buffer.from([P]),
  Be = 256;
function N(e, n, t) {
  if (e.straddleSnapCarryLen = 0, e.straddleSnapTailEnd = 0, e.carryLen === 0) return 0;
  let carryBuf = e.carryBuf,
    i = n.indexOf(P);
  if (i === -1 || i >= t) return 0;
  let o = i + 1;
  if (L(carryBuf, T, 0, e.carryLen)) e.straddleSnapCarryLen = e.carryLen, e.straddleSnapTailEnd = o, e.lastSnapSrc = null;else if (e.carryLen < T.length) return 0;else {
    if (L(carryBuf, Te, 0, e.carryLen)) {
      let a = te(carryBuf.toString("utf-8", 0, e.carryLen) + n.toString("utf-8", 0, i));
      if (a?.hasPreservedSegment) e.hasPreservedSegment = !0;else if (a) e.out.len = 0, e.boundaryStartOffset = e.bufFileOff, e.hasPreservedSegment = !1, e.lastSnapSrc = null;
    }
    w(e.out, carryBuf, 0, e.carryLen), w(e.out, n, 0, o);
  }
  return e.bufFileOff += e.carryLen + o, e.carryLen = 0, o;
}
function A(e, n, t) {
  let r = n.indexOf(t),
    i = 0,
    trailStart = 0,
    lastSnapStart = -1,
    lastSnapEnd = -1,
    s = n.indexOf(P);
  while (s !== -1) {
    let c = s + 1;
    if (r !== -1 && r < trailStart) r = n.indexOf(t, trailStart);
    if (L(n, T, trailStart, c)) w(e.out, n, i, trailStart), lastSnapStart = trailStart, lastSnapEnd = c, i = c;else if (r >= trailStart && r < Math.min(trailStart + Be, c)) {
      let p = te(n.toString("utf-8", trailStart, s));
      if (p?.hasPreservedSegment) e.hasPreservedSegment = !0;else if (p) e.out.len = 0, e.boundaryStartOffset = e.bufFileOff + trailStart, e.hasPreservedSegment = !1, e.lastSnapSrc = null, lastSnapStart = -1, e.straddleSnapCarryLen = 0, i = trailStart;
      r = n.indexOf(t, r + t.length);
    }
    trailStart = c, s = n.indexOf(P, trailStart);
  }
  return w(e.out, n, i, trailStart), {
    lastSnapStart: lastSnapStart,
    lastSnapEnd: lastSnapEnd,
    trailStart: trailStart
  };
}
function D(e, n, t, r, i) {
  if (r !== -1) {
    if (e.lastSnapLen = i - r, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    n.copy(e.lastSnapBuf, 0, r, i), e.lastSnapSrc = e.lastSnapBuf;
  } else if (e.straddleSnapCarryLen > 0) {
    if (e.lastSnapLen = e.straddleSnapCarryLen + e.straddleSnapTailEnd, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    e.carryBuf.copy(e.lastSnapBuf, 0, 0, e.straddleSnapCarryLen), t.copy(e.lastSnapBuf, e.straddleSnapCarryLen, 0, e.straddleSnapTailEnd), e.lastSnapSrc = e.lastSnapBuf;
  }
}
function W(e, n, t) {
  if (e.carryLen = n.length - t, e.carryLen > 0) {
    if (e.carryBuf === void 0 || e.carryLen > e.carryBuf.length) e.carryBuf = Buffer.allocUnsafe(e.carryLen);
    n.copy(e.carryBuf, 0, t, n.length);
  }
}
function U(e) {
  if (e.carryLen > 0) {
    let carryBuf_2 = e.carryBuf;
    if (L(carryBuf_2, T, 0, e.carryLen)) e.lastSnapSrc = carryBuf_2, e.lastSnapLen = e.carryLen;else w(e.out, carryBuf_2, 0, e.carryLen);
  }
  if (e.lastSnapSrc) {
    if (e.out.len > 0 && e.out.buf[e.out.len - 1] !== P) w(e.out, Oe, 0, 1);
    w(e.out, e.lastSnapSrc, 0, e.lastSnapLen);
  }
}
async function xe(e, n, t, r) {
  let i = 0,
    fromSeq_2;
  while (i < t) {
    let a = await e.readRecords(n, {
      order: "forward",
      maxBytes: maxBytes,
      ...(fromSeq_2 !== void 0 && {
        fromSeq: fromSeq_2
      })
    });
    if (!a.ok) throw Error("transcript record page failed during load", {
      cause: a.error
    });
    let u = [],
      s = 0;
    for (let p of a.value.items) {
      if (i + s + p.data.byteLength > t) break;
      u.push(p.data), s += p.data.byteLength;
    }
    if (s > 0) r(Buffer.concat(u, s)), i += s;
    let nextSeq_2 = a.value.nextSeq;
    if (nextSeq_2 === void 0 || u.length < a.value.items.length) return;
    if (fromSeq_2 !== void 0 && nextSeq_2 <= fromSeq_2) throw Error("transcript record cursor did not advance during load");
    fromSeq_2 = nextSeq_2;
  }
}
async function H1s(e, n, t) {
  let r = oVn,
    i = maxBytes,
    o = {
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
        backend: backend_7,
        key: key_5
      } = t.source,
      offset = 0,
      l = f => {
        let d = f.length;
        offset += d;
        let m = N(o, f, d),
          y;
        if (o.carryLen > 0) {
          let g = o.carryLen + (d - m);
          y = Buffer.allocUnsafe(g), o.carryBuf.copy(y, 0, 0, o.carryLen), f.copy(y, o.carryLen, m, d);
        } else y = f.subarray(m, d);
        let h = A(o, y, r);
        D(o, y, f, h.lastSnapStart, h.lastSnapEnd), W(o, y, h.trailStart), o.bufFileOff += h.trailStart;
      };
    while (offset < n) {
      let f = await backend_7.read([{
        key: key_5,
        offset: offset,
        length: Math.min(i, n - offset)
      }]);
      if (!f.ok) {
        if (offset === 0 && bcn(f.error)) {
          await xe(backend_7, key_5, n, l);
          break;
        }
        throw Error("transcript ranged read failed", {
          cause: f.error
        });
      }
      let [d] = f.value.items;
      if (!d.found) throw Error("transcript stream absent during load");
      if (d.value.length === 0) break;
      l(Buffer.from(d.value.buffer, d.value.byteOffset, d.value.length));
    }
    return U(o), {
      boundaryStartOffset: o.boundaryStartOffset,
      postBoundaryBuf: o.out.buf.subarray(0, o.out.len),
      hasPreservedSegment: o.hasPreservedSegment
    };
  }
  if (typeof e !== "string") throw Error("readTranscriptForLoad: this transcript has a storage key and no file, so it can be read only through a storage backend. The caller passed none, or tengu_hover_rest is off.");
  let a = Buffer.allocUnsafe(i),
    u = await O(e, "r");
  try {
    let s = 0;
    while (s < n) {
      let {
        bytesRead: bytesRead
      } = await u.read(a, 0, Math.min(i, n - s), s);
      if (bytesRead === 0) break;
      s += bytesRead;
      let p = N(o, a, bytesRead),
        l;
      if (o.carryLen > 0) {
        let d = o.carryLen + (bytesRead - p);
        l = Buffer.allocUnsafe(d), o.carryBuf.copy(l, 0, 0, o.carryLen), a.copy(l, o.carryLen, p, bytesRead);
      } else l = a.subarray(p, bytesRead);
      let f = A(o, l, r);
      D(o, l, a, f.lastSnapStart, f.lastSnapEnd), W(o, l, f.trailStart), o.bufFileOff += f.trailStart;
    }
    U(o);
  } finally {
    await u.close();
  }
  return {
    boundaryStartOffset: o.boundaryStartOffset,
    postBoundaryBuf: o.out.buf.subarray(0, o.out.len),
    hasPreservedSegment: o.hasPreservedSegment
  };
}
var Vdn = /^[0-9a-f]{16}(?:[0-9a-f]{48})?@v\d+$/;
function vae(e) {
  return QU(e) !== null;
}
function qSt(sessionId_2, cause, vetoedAgainstAccountUuid) {
  return {
    type: "history-suppression",
    sessionId: sessionId_2,
    cause: cause,
    ...(vetoedAgainstAccountUuid && {
      vetoedAgainstAccountUuid: vetoedAgainstAccountUuid
    }),
    ts: new Date().toISOString()
  };
}
export { zdn, sv, Z2n, Tva, QU, Nqe, Yte, JHe, Xte, Gdn, kna, ynt, D1s, Cva, Rva, Ava, eVn, L1s, gPo, QHe, tVn, _nt, Fqe, Jte, vna, Hqe, kae, kxe, c0, vwe, yPo, _Po, ZHe, Om, GR, nVn, iv, KSt, N1s, Dw, mpa, rVn, e$e, hpa, gpa, F1s, bPo, maxBytes as BFr, Qte, oVn, H1s, Vdn, vae, qSt };