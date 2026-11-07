// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { nB } from "B:/~BUN/root/chunk-65j2302z.js";
import { Bn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Lm } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { Qle } from "B:/~BUN/root/chunk-syedbbsr.js";
import { tge } from "B:/~BUN/root/chunk-esnvzdva.js";
import { T1 } from "B:/~BUN/root/chunk-vdqpev1m.js";
var k = "Nothing was published or removed: this publish touches files whose published content is not what you last saw",
  E = "Changed since you last saw them:",
  R = "Already published, and not read as published or listed by you in this session:";
function Dci(e) {
  if (!e.startsWith("Nothing was published or removed: this publish touches files whose published content is not what you last saw")) return;
  let r = e.indexOf(`
Changed since you last saw them:`),
    n = e.indexOf(`
Already published, and not read as published or listed by you in this session:`),
    s = (f, p) => f === -1 ? "" : e.slice(f, p === -1 || p < f ? void 0 : p),
    a = s(r, n),
    o = s(n, -1),
    l = f => [...f.matchAll(/^- ("(?:[^"\\]|\\.)*")/gm)].map(item => item[1]),
    d = f => Number(/^- (?:and )?(\d+) (?:more|paths?, not named here):/m.exec(f)?.[1] ?? 0),
    h = l(a),
    u = l(o),
    v = h.length + d(a),
    m = u.length + d(o),
    w = [...a.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm)].length;
  if (v > 0 && m > 0) return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
  if (v === 1) return w === 1 ? `Not published: ${h[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.` : `Not published: ${h[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
  if (v > 1) return `Not published: ${v} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
  if (m === 1) return `Not published: ${u[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
  return `Not published: ${m} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}
var A = 20,
  u5o = 32000;
function b4t() {
  return i.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? !0;
}
function f5o() {
  return b4t() && !nB();
}
function x8() {
  return te().frozenPathPin ?? b4t();
}
function S() {
  return te().frozenPathPinAck ?? f5o();
}
function y(e) {
  let {
      pathPins: pathPins
    } = te(),
    n = pathPins.get(e);
  if (n === void 0) n = new Map(), pathPins.set(e, n);
  return n;
}
function uIe() {
  return ++te().pathPinSeq;
}
function b(e, r, n, seq) {
  let a = e.get(r);
  if (a !== void 0 && a.seq > seq) return;
  e.set(r, {
    ...n,
    seq: seq
  });
}
function p5o(e, r, sha256, ver, a = uIe()) {
  if (!x8()) return;
  b(y(e), r, {
    sha256: sha256,
    ver: ver,
    via: "read"
  }, a);
}
function m5o(e, r, sha256_2, ver_2, a = uIe()) {
  if (!x8()) return;
  b(y(e), r, {
    sha256: sha256_2,
    ver: ver_2,
    via: "list"
  }, a);
}
function h5o(e, r, n = uIe()) {
  if (!x8()) return;
  let s = te().pathPins.get(e),
    a = s?.get(r);
  if (a !== void 0 && a.seq < n) s.delete(r);
}
function Lci(e, ver_3, n, s = uIe()) {
  if (!x8()) return;
  let a = y(e);
  for (let o of n) {
    let l = a.get(o.path);
    if (l === void 0 || l.via === "list" && l.sha256 !== null) b(a, o.path, {
      sha256: o.sha256,
      ver: ver_3,
      via: "list"
    }, s);
  }
  V(a, ver_3, s, n, !1);
}
function V(e, ver_4, n, s, a) {
  let o = new Map(s.map(item => [item.path, item]));
  for (let [l, d] of e) {
    let h = o.get(l);
    if (d.seq > n || h === void 0 && !a) continue;
    let sha256_3 = h?.sha256 ?? null;
    if (h?.live === !0 || sha256_3 === d.sha256) {
      if (d.behind !== void 0) e.set(l, {
        sha256: d.sha256,
        ver: d.ver,
        via: d.via,
        seq: d.seq
      });
    } else e.set(l, {
      ...d,
      behind: {
        sha256: sha256_3,
        sizeBytes: h?.sizeBytes,
        ver: ver_4
      }
    });
  }
}
function Nci(e, ver_5, n) {
  if (!x8()) return;
  let s = y(e),
    a = uIe();
  for (let o of n.written) if (o.sha256 === void 0) s.delete(o.path);else b(s, o.path, {
    sha256: o.sha256,
    ver: ver_5,
    via: "publish"
  }, a);
  for (let o of n.removed) b(s, o, {
    sha256: null,
    ver: ver_5,
    via: "publish"
  }, a);
}
function Fci(e) {
  if (!x8()) return !1;
  let r = te().pathPins.get(e);
  if (r === void 0) return !1;
  for (let n of r.values()) if (n.via !== "list") return !0;
  return !1;
}
function Hci(e) {
  if (e === void 0) return {};
  let files_written = e.written.flatMap(item => item.sha256 === void 0 ? [] : [{
    path: item.path,
    sha256: item.sha256
  }]);
  return {
    ...(files_written.length > 0 && {
      files_written: files_written
    }),
    ...(e.removed.length > 0 && {
      files_removed: [...e.removed]
    })
  };
}
function g5o(e, ver_6, n, s) {
  if (!x8()) return;
  let a = y(e);
  for (let o of n) b(a, o, {
    sha256: null,
    ver: ver_6,
    via: "list"
  }, s);
}
function $ci(e, r, n, s) {
  if (!x8() || n.length === 0) return;
  V(y(e), r, s, n, !1);
}
function x(e, r, n) {
  let s = n.filter(item => item.liveSha256 === null).map(item => item.path);
  if (s.length === 0) return;
  let a = uIe();
  return () => g5o(e, r, s, a);
}
function C(e) {
  let r = e.filter(item => item.kind === "changed");
  return [...r.filter(item => item.liveSha256 === null), ...r.filter(item => item.liveSha256 !== null)];
}
function H(e) {
  let r = [],
    n = [...e.writes.map(item => ({
      ...item,
      operation: "write"
    })), ...e.removes.map(s => ({
      path: s,
      operation: "remove",
      sha256: void 0
    }))];
  for (let {
    path: path,
    operation: operation,
    sha256: sha256_4
  } of n) {
    if (e.liveDocs?.has(path)) continue;
    let l = e.pins?.get(path),
      liveSha256 = e.live.get(path) ?? null;
    if (l === void 0) {
      if (liveSha256 === null || e.acknowledged.has(path)) continue;
      if (operation === "write" && sha256_4 === liveSha256) continue;
      r.push({
        kind: "unread",
        path: path,
        operation: operation
      });
      continue;
    }
    if (l.sha256 === liveSha256) continue;
    if (operation === "write" && sha256_4 !== void 0 && sha256_4 === liveSha256) continue;
    if (operation === "remove" && liveSha256 === null) continue;
    r.push({
      kind: "changed",
      path: path,
      operation: operation,
      readSha256: l.sha256,
      readVer: l.ver,
      readVia: l.via,
      liveSha256: liveSha256
    });
  }
  return r;
}
function M(e, r) {
  return _(e.core ? Qle(r) : r);
}
function D(e) {
  return e.core ? 'action "read" with its `path`' : 'action "read_file"';
}
function L(path_2, r) {
  let n = r.files.get(path_2);
  if (n === void 0) return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
  let s = n.sizeBytes === void 0 ? "" : `, ${n.sizeBytes} ${P(n.sizeBytes, "byte")}`;
  return `  now: sha256 ${n.sha256}${s}; read it with ${M(r, {
    action: "read_file",
    url: r.url,
    path: path_2
  })}`;
}
function z(e, r, n) {
  let s = e.readSha256 !== null ? `you last saw it at version ${e.readVer}` : e.readVia === "publish" ? `you removed it at version ${e.readVer}` : `it was gone when you last checked (version ${e.readVer})`,
    a = e.liveSha256 === null ? `it has since been removed (version ${r})` : e.readSha256 === null ? `someone has since published a file there (version ${r})` : `someone has since replaced it (version ${r})`;
  return `- ${_(e.path)}: ${s}; ${a}
${L(e.path, n)}`;
}
function T(e, r, n) {
  if (e.length <= r) return e.join(`
`);
  let s = `- ${r > 0 ? `and ${e.length - r} more` : `${e.length} ${P(e.length, "path")}, not named here`}: ${M(n, {
    action: "list_files",
    url: n.url
  })} lists every file with its size`;
  return r > 0 ? `${e.slice(0, r).join(`
`)}
${s}` : s;
}
function N(e, r, n) {
  let s = C(e),
    a = e.filter(item => item.kind === "unread"),
    o = [s.length > 0 ? `${k}, and sending your copy would replace a newer edit.` : `${k}, and sending your copy could discard content you have not read.`],
    l = Math.min(s.length, A);
  if (s.length > 0) {
    let d = s.some(item => item.liveSha256 === null);
    o.push(`${E}
${T(s.map(item => z(item, r, n)), l, n)}
Read each one${d ? " that still exists" : ""} again (${D(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing or publish result in this session; the reads will show what is there now.' : ""}`);
  }
  if (a.length > 0) o.push(`${R}
${T(a.map(item => `- ${_(item.path)}
${L(item.path, n)}`), A - l, n)}
Read each one first (${D(n)}) and build on it.${n.ackOffered === !1 ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
  return o.join(`

`);
}
async function Uci(e) {
  if (e.writes.length === 0 && e.removes.length === 0) return {
    kind: "pass",
    liveVer: void 0
  };
  let r = uIe(),
    n = await tge(e.target, e.signal, e.credentials);
  if (n.kind === "error") {
    if (t(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`), n.reason === "single_page") return {
      kind: "pass",
      liveVer: void 0
    };
    let pins = te().pathPins.get(e.target.slug),
      h = new Set(),
      live = new Map(),
      files = new Map(),
      m = "";
    for (let f of [...e.writes.map(item => item.path), ...e.removes]) {
      let p = pins?.get(f)?.behind;
      if (p === void 0) continue;
      if (h.add(f), p.sha256 !== null) live.set(f, p.sha256), files.set(f, {
        sha256: p.sha256,
        ...(p.sizeBytes !== void 0 && {
          sizeBytes: p.sizeBytes
        })
      });
      if (m === "" || (T1(p.ver, m) ?? 1) > 0) m = p.ver;
    }
    let w = H({
      pins: pins,
      live: live,
      writes: e.writes.filter(item => h.has(item.path)),
      removes: e.removes.filter(item => h.has(item)),
      acknowledged: new Set(e.acknowledged)
    });
    if (c("artifact_path_pin", w.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`), w.length === 0) return {
      kind: "pass",
      liveVer: void 0
    };
    return {
      kind: "refuse",
      reasonCode: "path_pin_changed",
      message: N(w, m, {
        url: e.url ?? Bn(e.target),
        files: files,
        core: Lm(),
        forced: e.force === !0,
        ackOffered: S(),
        remembered: !0
      }),
      onCommitted: x(e.target.slug, m, C(w).slice(0, A))
    };
  }
  let pins_2 = te().pathPins.get(e.target.slug);
  if (pins_2 !== void 0) V(pins_2, n.ver, r, n.files, !n.narrowed);
  let live_2 = new Map(n.files.map(item => [item.path, item.sha256])),
    liveDocs = new Set(n.files.filter(item => item.live).map(item => item.path)),
    l = H({
      pins: pins_2,
      live: live_2,
      liveDocs: liveDocs,
      writes: e.writes,
      removes: e.removes,
      acknowledged: new Set(e.acknowledged)
    });
  if (g("artifact_path_pin", {
    checked: e.writes.length + e.removes.length,
    refused: l.length
  }), l.length === 0) {
    let preconditions = n.publishPreconditions === !0 ? F(live_2, liveDocs, e.writes, e.removes) : void 0,
      unchanged = e.writes.filter(item => item.sha256 !== void 0 && !liveDocs.has(item.path) && live_2.get(item.path) === item.sha256).map(item => item.path);
    return {
      kind: "pass",
      liveVer: n.ver,
      ...(unchanged.length > 0 && {
        unchanged: unchanged
      }),
      ...(!n.narrowed && {
        liveOwnPaths: n.files.map(item => item.path).filter(item => n.typePaths?.includes(item) !== !0)
      }),
      ...(n.title !== void 0 && {
        liveTitle: n.title
      }),
      ...(n.favicon !== void 0 && {
        liveFavicon: n.favicon
      }),
      ...(preconditions !== void 0 && {
        preconditions: preconditions
      })
    };
  }
  return {
    kind: "refuse",
    reasonCode: l.some(item => item.kind === "changed") ? "path_pin_changed" : "path_pin_unread",
    message: N(l, n.ver, {
      url: e.url ?? Bn(e.target),
      files: new Map(n.files.map(item => [item.path, {
        sha256: item.sha256,
        sizeBytes: item.sizeBytes
      }])),
      core: Lm(),
      forced: e.force === !0,
      ackOffered: S()
    }),
    onCommitted: x(e.target.slug, n.ver, C(l).slice(0, A))
  };
}
function F(e, r, n, s) {
  let a = new Map();
  for (let {
    path: path_3
  } of n) {
    if (r.has(path_3)) return;
    a.set(path_3, e.get(path_3) ?? null);
  }
  for (let o of s) {
    let l = e.get(o);
    if (l === void 0 || r.has(o)) return;
    a.set(o, l);
  }
  return a;
}
function Bci(e) {
  let r = te().pathPins.get(e.target.slug),
    n = e.paths.map(item => {
      let o = r?.get(item.path),
        operation_2 = e.removes.includes(item.path) ? "remove" : "write";
      return o !== void 0 && o.sha256 === item.expected ? {
        kind: "changed",
        path: item.path,
        operation: operation_2,
        readSha256: item.expected,
        readVer: o.ver,
        readVia: o.via,
        liveSha256: item.actual
      } : {
        kind: "unread",
        path: item.path,
        operation: operation_2
      };
    }),
    files_2 = new Map();
  for (let a of e.paths) if (a.actual !== null) files_2.set(a.path, {
    sha256: a.actual
  });
  return {
    message: N(n, e.liveVer, {
      url: e.url ?? Bn(e.target),
      files: files_2,
      core: Lm(),
      ackOffered: S()
    }),
    onCommitted: x(e.target.slug, e.liveVer, C(n).slice(0, A))
  };
}
export { Dci, u5o, b4t, f5o, x8, uIe, p5o, m5o, h5o, Lci, Nci, Fci, Hci, g5o, $ci, Uci, Bci };