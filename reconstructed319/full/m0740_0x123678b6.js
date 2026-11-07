// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  extname as R
} from "path";
var vXr = "<!--claude-mermaid-runtime-begin:",
  zJo = "<!--claude-mermaid-runtime-end-->",
  EXr = "<!--claude-hljs-runtime-begin:",
  GJo = "<!--claude-hljs-runtime-end-->",
  Dir = "<!-- chart-runtime -->",
  TXr = "<!-- /chart-runtime -->";
var CXr = "/_runtime/mermaid-11.16.1.min.js",
  Fpi = '<script src="/_runtime/mermaid-11.16.1.min.js">';
var Ilt = "<!-- frame-runtime -->",
  p6t = "<!-- /frame-runtime -->";

function Hpi(t) {
  return t.includes("<!--claude-mermaid-runtime-begin:") || t.includes("<!--claude-mermaid-runtime-end-->") || t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->") || t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->")
}

function xAt(t) {
  if (/<\/script/i.test(t)) return "bundle contains </script";
  if (AXr(t)) return "bundle contains <!-- together with <script (double-escaped state)";
  if (/<base\s+href="\/_f\//i.test(t)) return "bundle matches the stale /_f/ base-tag strip regex";
  if (/\sdata-frame-runtime="/i.test(t)) return "bundle matches the stale data-frame-runtime strip regex";
  if (t.includes("<!--claude-mermaid-runtime-begin:") || t.includes("<!--claude-mermaid-runtime-end-->")) return "bundle contains a mermaid runtime sentinel";
  if (t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->")) return "bundle contains an hljs runtime sentinel";
  if (t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->")) return "bundle contains the chart-runtime sentinel";
  if (t.includes("<!-- frame-runtime -->") || t.includes("<!-- /frame-runtime -->")) return "bundle contains a frame-runtime serve sentinel";
  return null
}
var RXr = new Set([" ", "\t", `
`, "\f", "\r", "/", ">"]);

function M1e(t) {
  let e = 0,
    n = t.length;
  while (e < n && s(t.charCodeAt(e))) e++;
  while (n > e && s(t.charCodeAt(n - 1))) n--;
  return e === 0 && n === t.length ? t : t.slice(e, n)
}

function s(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13
}

function Lir(t, e) {
  if (!e.length) return t;
  let n = "",
    i = 0;
  for (let [r, o] of e) n += t.slice(i, r), i = o;
  return n + t.slice(i)
}

function AXr(t) {
  return t.includes("<!--") && /<script/i.test(t)
}
var w = /<\/script(?=[\t\n\f\r />])/i,
  b = /<\/style(?=[\t\n\f\r />])/i;

function g(t, e) {
  let n = t.match(e);
  if (!n) return null;
  let i = n.index ?? 0,
    r = i + n[0].length,
    o = t.indexOf(">", r);
  if (o === -1 || /['"]/.test(t.slice(r, o))) return null;
  return {
    data: i,
    after: o + 1
  }
}

function VJo(t) {
  let e = g(t, w);
  if (!e || AXr(t.slice(0, e.data))) return -1;
  return e.after
}

function $pi(t) {
  return g(t, b)
}
var m = 16,
  a = ' data-id="',
  KJo = a.length + m + 1,
  _ = "(?!-)(?:(?!--)[A-Za-z0-9_-]){16}",
  D = new RegExp(`^${_}$`),
  qJo = `${a}${_}"`;

function xXr(t, e) {
  if (!t.startsWith(a, e)) return 0;
  let n = e + a.length,
    i = n + m;
  return t.charCodeAt(i) === 34 && D.test(t.slice(n, i)) ? KJo : 0
}

function x(t, e, n) {
  if (t.startsWith(n, e)) return n.length;
  let i = n.length - 1;
  if (!t.startsWith(n.slice(0, i), e)) return 0;
  let r = xXr(t, e + i);
  return r && t.charCodeAt(e + i + r) === 62 ? i + r + 1 : 0
}

function Nir(t, e) {
  return x(t, e, "<script>")
}

function Upi(t, e) {
  return x(t, e, "<style>")
}
var E = new RegExp('<script src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"', "y");

function Bpi(t, e) {
  E.lastIndex = e;
  let n = E.exec(t);
  if (n === null) return null;
  let i = e + n[0].length;
  if (t.charCodeAt(i) === 62) return {
    len: i + 1 - e,
    annotated: !1
  };
  let r = xXr(t, i);
  return r && t.charCodeAt(i + r) === 62 ? {
    len: i + r + 1 - e,
    annotated: !0
  } : null
}

function _En(t) {
  let e = M1e(t);
  if (!e.length) return -1;
  let n = 0;
  while (e.length) {
    let i = Nir(e, 0);
    if (!i) return -1;
    if (i > 8) n++;
    let r = VJo(e.slice(i));
    if (r < 0) return -1;
    e = M1e(e.slice(i + r))
  }
  return n
}

function Q3e(t, e) {
  let n = 0,
    i = e;
  while (i < t.length) {
    let r = t.charCodeAt(i);
    if (n === 3) {
      if (r === 34 || r === 39) {
        let o = t.indexOf(r === 34 ? '"' : "'", i + 1);
        if (o < 0) return -1;
        i = o + 1, n = 5;
        continue
      }
      if (s(r)) {
        i++;
        continue
      }
      if (r === 62) return i + 1;
      n = 4, i++;
      continue
    }
    if (r === 62) return i + 1;
    if (s(r)) n = n === 1 || n === 2 ? 2 : 0;
    else if (r === 47 && n !== 4) n = 0;
    else if (r === 61 && (n === 1 || n === 2)) n = 3;
    else n = n === 4 ? 4 : 1;
    i++
  }
  return -1
}
var N = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".map": "application/json",
  ".geojson": "application/json",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".csv": "text/csv",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/vnd.microsoft.icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
  ".wasm": "application/wasm",
  ...{}
};

function z8(t) {
  return N[PAt(R(t))]
}

function PAt(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase())
}

function GK(t) {
  let e = t.indexOf(";");
  return PAt(M1e(e >= 0 ? t.slice(0, e) : t))
}
var YJo = new Set(["text/html", "application/xhtml+xml", "application/xml", "text/xml", "image/svg+xml"]),
  XJo = new Set([...YJo, ...[]]),
  PXr = "image/svg+xml",
  bEn = new Set([...XJo].filter((t) => t !== PXr)),
  jpi = new Set(["text/html", ...[]]),
  SEn = new Set(["text/javascript", "application/javascript", "application/wasm"]),
  JJo = new Set(["text/plain", "text/markdown", "text/csv", "text/css", "application/json", "application/manifest+json", "application/pdf", "image/png", "image/jpeg", "image/gif", "image/webp", "image/avif", "image/x-icon", "image/vnd.microsoft.icon", "font/woff", "font/woff2", "font/ttf", "font/otf", "application/font-woff", "application/font-woff2", "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "video/mp4", "video/webm", "video/ogg"]);

function kl(t) {
  return JSON.stringify(t).replace(/[^\x20-\x7e]|[<>]/gu, v)
}

function v(t) {
  return t.split("").map((e) => `\\u${e.charCodeAt(0).toString(16).padStart(4,"0")}`).join("")
}
var C = ["pages", "styles", "scripts", "data", "images", "fonts", "media", "documents"];

function I(t) {
  if (t === "text/html") return "pages";
  if (t === "text/css") return "styles";
  if (t === "text/javascript" || t === "application/javascript" || t === "application/wasm") return "scripts";
  if (t.startsWith("image/")) return "images";
  if (t.startsWith("font/")) return "fonts";
  if (t.startsWith("audio/") || t.startsWith("video/")) return "media";
  if (t === "application/pdf") return "documents";
  return "data"
}
var y = C.flatMap((t) => {
    let e = Object.entries(N).filter(([, n]) => I(n) === t).map(([n]) => n);
    return e.length > 0 ? [`${t} ${e.join(" ")}`] : []
  }).join("; "),
  T = "Nothing was published because one file is of a type artifacts don't serve: ",
  l = " (contentType ",
  S = ") \u2014 the served spelling is exactly ",
  A = ") \u2014 that extension is already served as ",
  u = `Served types, by extension (a file named with one of these needs no contentType): ${y}.`,
  M = 'A source, config, log or other text file goes as text/plain (contentType "text/plain", or a .txt name) or rendered into the page.',
  f = "A document or archive (.docx .xlsx .pptx .zip) can't be attached from here yet under any contentType: render what the page needs from it into the page, or link to where it already lives; a data: or blob: download link is not a way around this (the viewer blocks page-initiated downloads).";

function QJo(t, e, n, i) {
  let r = `${T}${t} ${kl(e)}${l}${kl(n)}`;
  if (i !== void 0) return `${r}${S}${kl(i)}, lowercase with no parameters. Publish again with that contentType.`;
  let o = z8(e);
  if (o !== void 0 && I(o) !== null) return `${r}${A}${kl(o)}. Publish again with no contentType on that file.`;
  return `${r}). ${u} Publish again with every file as a served type. ${M} ${f}`
}

function wEn(t, e) {
  let n = PAt(R(e)),
    i = n === "" ? "no extension to infer a served type from" : `extension ${kl(n)} is not served`;
  return t === "files" ? `files: ${kl(e)} (no contentType, and ${i}) \u2014 nothing was published. ${u} Publish again with every file as a served type. ${M} ${f}` : `file_path: ${kl(e)} (${i}) \u2014 nothing was published. ${u} Rename a text or data file to one of these (.txt .json .csv), or make another file the \`file_path\` and list this one under \`files\` with contentType "text/plain". ${f}`
}
var h = /"(?:[^"\\]|\\.)*"/y;

function c(t, e) {
  h.lastIndex = e;
  let n = h.exec(t);
  if (n === null) return;
  try {
    let i = JSON.parse(n[0]);
    return typeof i === "string" ? {
      raw: i,
      end: e + n[0].length
    } : void 0
  } catch {
    return
  }
}

function Wpi(t) {
  for (let e of ["supporting file", "file"]) {
    let n = `${T}${e} `;
    if (!t.startsWith(n)) continue;
    let i = c(t, n.length);
    if (i === void 0 || !t.startsWith(l, i.end)) return;
    let r = c(t, i.end + l.length);
    if (r === void 0 || !/^[\x20-\x7e]{1,127}$/.test(r.raw)) return;
    let o = t.startsWith(S, r.end) ? GK(r.raw) : void 0;
    if (t !== QJo(e, i.raw, r.raw, o)) return;
    let p = kl(i.raw);
    return o !== void 0 || t.startsWith(A, r.end) ? `Not published: ${p} was given a file type label artifacts don't recognize. Claude can fix the label and publish again.` : `Not published: ${p} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.`
  }
  for (let e of ["files", "file_path"]) {
    let n = `${e}: `;
    if (!t.startsWith(n)) continue;
    let i = c(t, n.length);
    if (i === void 0 || t !== wEn(e, i.raw)) return;
    let r = kl(i.raw);
    return e === "files" ? `Not published: ${r} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.` : `Not published: ${r} is a type of file artifacts can't include. Claude can convert or rename it and publish again.`
  }
  return
}
export {
  vXr,
  zJo,
  EXr,
  GJo,
  Dir,
  TXr,
  CXr,
  Fpi,
  Ilt,
  p6t,
  Hpi,
  xAt,
  RXr,
  M1e,
  Lir,
  AXr,
  VJo,
  $pi,
  KJo,
  qJo,
  xXr,
  Nir,
  Upi,
  Bpi,
  _En,
  Q3e,
  z8,
  PAt,
  GK,
  YJo,
  XJo,
  PXr,
  bEn,
  jpi,
  SEn,
  JJo,
  kl,
  QJo,
  wEn,
  Wpi
};
