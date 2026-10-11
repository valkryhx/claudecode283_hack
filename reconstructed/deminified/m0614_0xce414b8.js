// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { P2 } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { En } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { AO, Yu } from "B:/~BUN/root/chunk-at7axhcd.js";
import { Lse } from "B:/~BUN/root/chunk-116h9ckm.js";
import { n8 } from "B:/~BUN/root/chunk-rv74wwkr.js";
var C = "Nothing was published or removed: this publish touches files whose published content is not what you last saw",
  N = "Changed since you last saw them:",
  V = "Already published, and not read as published or listed by you in this session:";
function Dso(e) {
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
    c = l(o),
    m = h.length + d(s),
    g = c.length + d(o),
    P = [...s.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm)].length;
  if (m > 0 && g > 0) return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
  if (m === 1) return P === 1 ? `Not published: ${h[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.` : `Not published: ${h[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
  if (m > 1) return `Not published: ${m} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
  if (g === 1) return `Not published: ${c[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
  return `Not published: ${g} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}
var w = 20,
  Tur = 32000;
function pet() {
  return a.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? !0;
}
function Cur() {
  return pet() && !P2();
}
function S4() {
  return ee().frozenPathPin ?? pet();
}
function k() {
  return ee().frozenPathPinAck ?? Cur();
}
function y(e) {
  let {
      pathPins: pathPins
    } = ee(),
    n = pathPins.get(e);
  if (n === void 0) n = new Map(), pathPins.set(e, n);
  return n;
}
function Mpe() {
  return ++ee().pathPinSeq;
}
function v(e, i, n, seq) {
  let s = e.get(i);
  if (s !== void 0 && s.seq > seq) return;
  e.set(i, {
    ...n,
    seq: seq
  });
}
function Rur(e, i, sha256, ver, s = Mpe()) {
  if (!S4()) return;
  v(y(e), i, {
    sha256: sha256,
    ver: ver,
    via: "read"
  }, s);
}
function Aur(e, i, sha256_2, ver_2, s = Mpe()) {
  if (!S4()) return;
  v(y(e), i, {
    sha256: sha256_2,
    ver: ver_2,
    via: "list"
  }, s);
}
function xur(e, i, n = Mpe()) {
  if (!S4()) return;
  let r = ee().pathPins.get(e),
    s = r?.get(i);
  if (s !== void 0 && s.seq < n) r.delete(i);
}
function Lso(e, ver_3, n, r = Mpe()) {
  if (!S4()) return;
  let s = y(e);
  for (let o of n) {
    let l = s.get(o.path);
    if (l === void 0 || l.via === "list" && l.sha256 !== null) v(s, o.path, {
      sha256: o.sha256,
      ver: ver_3,
      via: "list"
    }, r);
  }
  D(s, ver_3, r, n, !1);
}
function D(e, ver_4, n, r, s) {
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
function Nso(e, ver_5, n) {
  if (!S4()) return;
  let r = y(e),
    s = Mpe();
  for (let o of n.written) if (o.sha256 === void 0) r.delete(o.path);else v(r, o.path, {
    sha256: o.sha256,
    ver: ver_5,
    via: "publish"
  }, s);
  for (let o of n.removed) v(r, o, {
    sha256: null,
    ver: ver_5,
    via: "publish"
  }, s);
}
function Hso(e) {
  if (!S4()) return !1;
  let i = ee().pathPins.get(e);
  if (i === void 0) return !1;
  for (let n of i.values()) if (n.via !== "list") return !0;
  return !1;
}
function Fso(e) {
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
function S(e, ver_6, n) {
  let r = n.filter(item => item.liveSha256 === null).map(item => item.path);
  if (r.length === 0) return;
  let s = Mpe();
  return () => {
    let o = y(e);
    for (let l of r) v(o, l, {
      sha256: null,
      ver: ver_6,
      via: "list"
    }, s);
  };
}
function A(e) {
  let i = e.filter(item => item.kind === "changed");
  return [...i.filter(item => item.liveSha256 === null), ...i.filter(item => item.liveSha256 !== null)];
}
function E(e) {
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
  return b(e.core ? Lse(i) : i);
}
function R(e) {
  return e.core ? 'action "read" with its `path`' : 'action "read_file"';
}
function M(path_2, i) {
  let n = i.files.get(path_2);
  if (n === void 0) return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
  let r = n.sizeBytes === void 0 ? "" : `, ${n.sizeBytes} ${I(n.sizeBytes, "byte")}`;
  return `  now: sha256 ${n.sha256}${r}; read it with ${T(i, {
    action: "read_file",
    url: i.url,
    path: path_2
  })}`;
}
function L(e, i, n) {
  let r = e.readSha256 !== null ? `you last saw it at version ${e.readVer}` : e.readVia === "publish" ? `you removed it at version ${e.readVer}` : `it was gone when you last checked (version ${e.readVer})`,
    s = e.liveSha256 === null ? `it has since been removed (version ${i})` : e.readSha256 === null ? `someone has since published a file there (version ${i})` : `someone has since replaced it (version ${i})`;
  return `- ${b(e.path)}: ${r}; ${s}
${M(e.path, n)}`;
}
function H(e, i, n) {
  if (e.length <= i) return e.join(`
`);
  let r = `- ${i > 0 ? `and ${e.length - i} more` : `${e.length} ${I(e.length, "path")}, not named here`}: ${T(n, {
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
    l = Math.min(r.length, w);
  if (r.length > 0) {
    let d = r.some(item => item.liveSha256 === null);
    o.push(`${N}
${H(r.map(item => L(item, i, n)), l, n)}
Read each one${d ? " that still exists" : ""} again (${R(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing in this session; the reads will show what is there now.' : ""}`);
  }
  if (s.length > 0) o.push(`${V}
${H(s.map(item => `- ${b(item.path)}
${M(item.path, n)}`), w - l, n)}
Read each one first (${R(n)}) and build on it.${n.ackOffered === !1 ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
  return o.join(`

`);
}
async function $so(e) {
  if (e.writes.length === 0 && e.removes.length === 0) return {
    kind: "pass",
    liveVer: void 0
  };
  let i = Mpe(),
    n = await n8(e.target, e.signal, e.credentials);
  if (n.kind === "error") {
    if (t(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`), n.reason === "single_page") return {
      kind: "pass",
      liveVer: void 0
    };
    let pins = ee().pathPins.get(e.target.slug),
      h = new Set(),
      live = new Map(),
      files = new Map(),
      g = "";
    for (let u of [...e.writes.map(item => item.path), ...e.removes]) {
      let f = pins?.get(u)?.behind;
      if (f === void 0) continue;
      if (h.add(u), f.sha256 !== null) live.set(u, f.sha256), files.set(u, {
        sha256: f.sha256,
        ...(f.sizeBytes !== void 0 && {
          sizeBytes: f.sizeBytes
        })
      });
      if (g === "" || (AO(f.ver, g) ?? 1) > 0) g = f.ver;
    }
    let P = E({
      pins: pins,
      live: live,
      writes: e.writes.filter(item => h.has(item.path)),
      removes: e.removes.filter(item => h.has(item)),
      acknowledged: new Set(e.acknowledged)
    });
    if (p("artifact_path_pin", P.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`), P.length === 0) return {
      kind: "pass",
      liveVer: void 0
    };
    return {
      kind: "refuse",
      reasonCode: "path_pin_changed",
      message: x(P, g, {
        url: e.url ?? En(e.target),
        files: files,
        core: Yu(),
        forced: e.force === !0,
        ackOffered: k(),
        remembered: !0
      }),
      onCommitted: S(e.target.slug, g, A(P).slice(0, w))
    };
  }
  let pins_2 = ee().pathPins.get(e.target.slug);
  if (pins_2 !== void 0) D(pins_2, n.ver, i, n.files, !n.narrowed);
  let live_2 = new Map(n.files.map(item => [item.path, item.sha256])),
    liveDocs = new Set(n.files.filter(item => item.live).map(item => item.path)),
    l = E({
      pins: pins_2,
      live: live_2,
      liveDocs: liveDocs,
      writes: e.writes,
      removes: e.removes,
      acknowledged: new Set(e.acknowledged)
    });
  if (_("artifact_path_pin", {
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
      url: e.url ?? En(e.target),
      files: new Map(n.files.map(item => [item.path, {
        sha256: item.sha256,
        sizeBytes: item.sizeBytes
      }])),
      core: Yu(),
      forced: e.force === !0,
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, n.ver, A(l).slice(0, w))
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
function Uso(e) {
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
      url: e.url ?? En(e.target),
      files: files_2,
      core: Yu(),
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, e.liveVer, A(n).slice(0, w))
  };
}
export { Dso, Tur, pet, Cur, S4, Mpe, Rur, Aur, xur, Lso, Nso, Hso, Fso, $so, Uso };