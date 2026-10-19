// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { fF } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Hn } from "B:/~BUN/root/chunk-qp0344nb.js";
import { VF, Vf } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { Jbe } from "B:/~BUN/root/chunk-36awbxtc.js";
import { joe } from "B:/~BUN/root/chunk-2xhtrewz.js";
var C = "Nothing was published or removed: this publish touches files whose published content is not what you last saw",
  V = "Changed since you last saw them:",
  E = "Already published, and not read as published or listed by you in this session:";
function hls(e) {
  if (!e.startsWith("Nothing was published or removed: this publish touches files whose published content is not what you last saw")) return;
  let i = e.indexOf(`
Changed since you last saw them:`),
    n = e.indexOf(`
Already published, and not read as published or listed by you in this session:`),
    r = (u, f) => u === -1 ? "" : e.slice(u, f === -1 || f < u ? void 0 : f),
    s = r(i, n),
    o = r(n, -1),
    l = u => [...u.matchAll(/^- ("(?:[^"\\]|\\.)*")/gm)].map(item => item[1]),
    d = u => Number(/^- (?:and )?(\d+) (?:more|paths?, not named here):/m.exec(u)?.[1] ?? 0),
    h = l(s),
    m = l(o),
    P = h.length + d(s),
    c = m.length + d(o),
    v = [...s.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm)].length;
  if (P > 0 && c > 0) return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
  if (P === 1) return v === 1 ? `Not published: ${h[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.` : `Not published: ${h[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
  if (P > 1) return `Not published: ${P} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
  if (c === 1) return `Not published: ${m[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
  return `Not published: ${c} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}
var y = 20,
  cno = 32000;
function gRt() {
  return a.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? !0;
}
function uno() {
  return gRt() && !fF();
}
function ZV() {
  return ee().frozenPathPin ?? gRt();
}
function k() {
  return ee().frozenPathPinAck ?? uno();
}
function b(e) {
  let {
      pathPins: pathPins
    } = ee(),
    n = pathPins.get(e);
  if (n === void 0) n = new Map(), pathPins.set(e, n);
  return n;
}
function Dbe() {
  return ++ee().pathPinSeq;
}
function w(e, i, n, seq) {
  let s = e.get(i);
  if (s !== void 0 && s.seq > seq) return;
  e.set(i, {
    ...n,
    seq: seq
  });
}
function pno(e, i, sha256, ver, s = Dbe()) {
  if (!ZV()) return;
  w(b(e), i, {
    sha256: sha256,
    ver: ver,
    via: "read"
  }, s);
}
function fno(e, i, sha256_2, ver_2, s = Dbe()) {
  if (!ZV()) return;
  w(b(e), i, {
    sha256: sha256_2,
    ver: ver_2,
    via: "list"
  }, s);
}
function mno(e, i, n = Dbe()) {
  if (!ZV()) return;
  let r = ee().pathPins.get(e),
    s = r?.get(i);
  if (s !== void 0 && s.seq < n) r.delete(i);
}
function yls(e, ver_3, n, r = Dbe()) {
  if (!ZV()) return;
  let s = b(e);
  for (let o of n) {
    let l = s.get(o.path);
    if (l === void 0 || l.via === "list" && l.sha256 !== null) w(s, o.path, {
      sha256: o.sha256,
      ver: ver_3,
      via: "list"
    }, r);
  }
  N(s, ver_3, r, n, !1);
}
function N(e, ver_4, n, r, s) {
  let o = new Map(r.map(item => [item.path, item]));
  for (let [l, d] of e) {
    let h = o.get(l);
    if (d.seq > n || h === void 0 && !s) continue;
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
function _ls(e, ver_5, n) {
  if (!ZV()) return;
  let r = b(e),
    s = Dbe();
  for (let o of n.written) if (o.sha256 === void 0) r.delete(o.path);else w(r, o.path, {
    sha256: o.sha256,
    ver: ver_5,
    via: "publish"
  }, s);
  for (let o of n.removed) w(r, o, {
    sha256: null,
    ver: ver_5,
    via: "publish"
  }, s);
}
function bls(e) {
  if (!ZV()) return !1;
  let i = ee().pathPins.get(e);
  if (i === void 0) return !1;
  for (let n of i.values()) if (n.via !== "list") return !0;
  return !1;
}
function Sls(e) {
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
function gno(e, ver_6, n, r) {
  if (!ZV()) return;
  let s = b(e);
  for (let o of n) w(s, o, {
    sha256: null,
    ver: ver_6,
    via: "list"
  }, r);
}
function wls(e, i, n, r) {
  if (!ZV() || n.length === 0) return;
  N(b(e), i, r, n, !1);
}
function S(e, i, n) {
  let r = n.filter(item => item.liveSha256 === null).map(item => item.path);
  if (r.length === 0) return;
  let s = Dbe();
  return () => gno(e, i, r, s);
}
function A(e) {
  let i = e.filter(item => item.kind === "changed");
  return [...i.filter(item => item.liveSha256 === null), ...i.filter(item => item.liveSha256 !== null)];
}
function R(e) {
  let i = [],
    n = [...e.writes.map(item => ({
      ...item,
      operation: "write"
    })), ...e.removes.map(r => ({
      path: r,
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
      i.push({
        kind: "unread",
        path: path,
        operation: operation
      });
      continue;
    }
    if (l.sha256 === liveSha256) continue;
    if (operation === "write" && sha256_4 !== void 0 && sha256_4 === liveSha256) continue;
    if (operation === "remove" && liveSha256 === null) continue;
    i.push({
      kind: "changed",
      path: path,
      operation: operation,
      readSha256: l.sha256,
      readVer: l.ver,
      readVia: l.via,
      liveSha256: liveSha256
    });
  }
  return i;
}
function T(e, i) {
  return _(e.core ? Jbe(i) : i);
}
function H(e) {
  return e.core ? 'action "read" with its `path`' : 'action "read_file"';
}
function M(path_2, i) {
  let n = i.files.get(path_2);
  if (n === void 0) return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
  let r = n.sizeBytes === void 0 ? "" : `, ${n.sizeBytes} ${O(n.sizeBytes, "byte")}`;
  return `  now: sha256 ${n.sha256}${r}; read it with ${T(i, {
    action: "read_file",
    url: i.url,
    path: path_2
  })}`;
}
function L(e, i, n) {
  let r = e.readSha256 !== null ? `you last saw it at version ${e.readVer}` : e.readVia === "publish" ? `you removed it at version ${e.readVer}` : `it was gone when you last checked (version ${e.readVer})`,
    s = e.liveSha256 === null ? `it has since been removed (version ${i})` : e.readSha256 === null ? `someone has since published a file there (version ${i})` : `someone has since replaced it (version ${i})`;
  return `- ${_(e.path)}: ${r}; ${s}
${M(e.path, n)}`;
}
function D(e, i, n) {
  if (e.length <= i) return e.join(`
`);
  let r = `- ${i > 0 ? `and ${e.length - i} more` : `${e.length} ${O(e.length, "path")}, not named here`}: ${T(n, {
    action: "list_files",
    url: n.url
  })} lists every file with its size`;
  return i > 0 ? `${e.slice(0, i).join(`
`)}
${r}` : r;
}
function x(e, i, n) {
  let r = A(e),
    s = e.filter(item => item.kind === "unread"),
    o = [r.length > 0 ? `${C}, and sending your copy would replace a newer edit.` : `${C}, and sending your copy could discard content you have not read.`],
    l = Math.min(r.length, y);
  if (r.length > 0) {
    let d = r.some(item => item.liveSha256 === null);
    o.push(`${V}
${D(r.map(item => L(item, i, n)), l, n)}
Read each one${d ? " that still exists" : ""} again (${H(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing or publish result in this session; the reads will show what is there now.' : ""}`);
  }
  if (s.length > 0) o.push(`${E}
${D(s.map(item => `- ${_(item.path)}
${M(item.path, n)}`), y - l, n)}
Read each one first (${H(n)}) and build on it.${n.ackOffered === !1 ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
  return o.join(`

`);
}
async function vls(e) {
  if (e.writes.length === 0 && e.removes.length === 0) return {
    kind: "pass",
    liveVer: void 0
  };
  let i = Dbe(),
    n = await joe(e.target, e.signal, e.credentials);
  if (n.kind === "error") {
    if (t(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`), n.reason === "single_page") return {
      kind: "pass",
      liveVer: void 0
    };
    let pins = ee().pathPins.get(e.target.slug),
      h = new Set(),
      live = new Map(),
      files = new Map(),
      c = "";
    for (let u of [...e.writes.map(item => item.path), ...e.removes]) {
      let f = pins?.get(u)?.behind;
      if (f === void 0) continue;
      if (h.add(u), f.sha256 !== null) live.set(u, f.sha256), files.set(u, {
        sha256: f.sha256,
        ...(f.sizeBytes !== void 0 && {
          sizeBytes: f.sizeBytes
        })
      });
      if (c === "" || (VF(f.ver, c) ?? 1) > 0) c = f.ver;
    }
    let v = R({
      pins: pins,
      live: live,
      writes: e.writes.filter(item => h.has(item.path)),
      removes: e.removes.filter(item => h.has(item)),
      acknowledged: new Set(e.acknowledged)
    });
    if (p("artifact_path_pin", v.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`), v.length === 0) return {
      kind: "pass",
      liveVer: void 0
    };
    return {
      kind: "refuse",
      reasonCode: "path_pin_changed",
      message: x(v, c, {
        url: e.url ?? Hn(e.target),
        files: files,
        core: Vf(),
        forced: e.force === !0,
        ackOffered: k(),
        remembered: !0
      }),
      onCommitted: S(e.target.slug, c, A(v).slice(0, y))
    };
  }
  let pins_2 = ee().pathPins.get(e.target.slug);
  if (pins_2 !== void 0) N(pins_2, n.ver, i, n.files, !n.narrowed);
  let live_2 = new Map(n.files.map(item => [item.path, item.sha256])),
    liveDocs = new Set(n.files.filter(item => item.live).map(item => item.path)),
    l = R({
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
    let preconditions = n.publishPreconditions === !0 ? z(live_2, liveDocs, e.writes, e.removes) : void 0;
    return {
      kind: "pass",
      liveVer: n.ver,
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
    message: x(l, n.ver, {
      url: e.url ?? Hn(e.target),
      files: new Map(n.files.map(item => [item.path, {
        sha256: item.sha256,
        sizeBytes: item.sizeBytes
      }])),
      core: Vf(),
      forced: e.force === !0,
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, n.ver, A(l).slice(0, y))
  };
}
function z(e, i, n, r) {
  let s = new Map();
  for (let {
    path: path_3
  } of n) {
    if (i.has(path_3)) return;
    s.set(path_3, e.get(path_3) ?? null);
  }
  for (let o of r) {
    let l = e.get(o);
    if (l === void 0 || i.has(o)) return;
    s.set(o, l);
  }
  return s;
}
function kls(e) {
  let i = ee().pathPins.get(e.target.slug),
    n = e.paths.map(item => {
      let o = i?.get(item.path),
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
  for (let s of e.paths) if (s.actual !== null) files_2.set(s.path, {
    sha256: s.actual
  });
  return {
    message: x(n, e.liveVer, {
      url: e.url ?? Hn(e.target),
      files: files_2,
      core: Vf(),
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, e.liveVer, A(n).slice(0, y))
  };
}
export { hls, cno, gRt, uno, ZV, Dbe, pno, fno, mno, yls, _ls, bls, Sls, gno, wls, vls, kls };