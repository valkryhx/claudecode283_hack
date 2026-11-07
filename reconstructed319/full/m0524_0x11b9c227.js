// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Ug,
  MXe
} from "B:/~BUN/root/chunk-vp8vb7t8.js";
import {
  f2n,
  JJ,
  Kpe,
  CC,
  QJ,
  _M,
  mwe
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  en
} from "B:/~BUN/root/chunk-mdq0dxn3.js";
import {
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  dirname as w
} from "path";

function Soe() {
  if (Ug() !== void 0) return {
    dirs: [],
    paths: []
  };
  return {
    dirs: [CC()],
    paths: []
  }
}

function zIn(e, r) {
  if (!e) return;
  let n = w(r);
  if (!e.dirs.includes(n)) e.dirs.push(n);
  if (!e.paths.includes(r)) e.paths.push(r)
}

function iDi(e, r) {
  if (!e) return;
  e.paths = e.paths.filter((n) => n !== r)
}

function bdo(e, r, n, o) {
  let s = T(e.webFetchSavedFiles, r),
    u = s === e.webFetchSavedFiles ? e : {
      ...e,
      webFetchSavedFiles: s
    };
  return n ? u : o(u)
}

function T(e, r) {
  if (!r) return e;
  if (e && r.dirs.every((n) => e.dirs.includes(n)) && r.paths.every((n) => e.paths.includes(n))) return e;
  return {
    dirs: L([...e?.dirs ?? [], ...r.dirs]),
    paths: L([...e?.paths ?? [], ...r.paths])
  }
}
import {
  basename as x,
  dirname as P,
  join as h
} from "path";
var g = Buffer.from("%PDF-");

function _do(e) {
  return e.subarray(0, g.length).equals(g)
}

function ydo(e) {
  if (typeof e !== "string") return;
  let r = tt(e, ";").trim();
  return r.length <= 100 && /^[\w.+-]+\/[\w.+-]+$/.test(r) ? r : void 0
}

function nze(e) {
  if (!e) return "bin";
  switch (tt(e, ";").trim().toLowerCase()) {
    case "application/pdf":
      return "pdf";
    case "application/json":
      return "json";
    case "text/csv":
      return "csv";
    case "text/plain":
      return "txt";
    case "text/html":
      return "html";
    case "text/markdown":
      return "md";
    case "application/zip":
      return "zip";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "pptx";
    case "application/msword":
      return "doc";
    case "application/vnd.ms-excel":
      return "xls";
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/ogg":
      return "ogg";
    case "video/mp4":
      return "mp4";
    case "video/webm":
      return "webm";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    case "image/x-icon":
    case "image/vnd.microsoft.icon":
      return "ico";
    case "text/css":
      return "css";
    case "text/javascript":
    case "application/javascript":
      return "js";
    case "application/xml":
    case "text/xml":
      return "xml";
    case "application/manifest+json":
      return "webmanifest";
    case "font/woff2":
    case "application/font-woff2":
      return "woff2";
    case "font/woff":
    case "application/font-woff":
      return "woff";
    case "font/ttf":
      return "ttf";
    case "font/otf":
      return "otf";
    case "application/wasm":
      return "wasm";
    default:
      return "bin"
  }
}
var Oft = f2n;
async function F$(e, r, n, o, s) {
  if (e.length > Oft) return {
    error: `content is ${e.length} bytes, over the ${Oft} byte persist limit`
  };
  let u = Ug();
  if (u !== void 0) {
    let i = nze(r),
      a = e.length > u.maxBytes ? null : await MXe(u, {
        leafName: `${n}.${i}`,
        data: e
      });
    if (a === null) return {
      error: "binary content was not saved"
    };
    return zIn(o, a.path), l("tengu_binary_content_persisted", {
      sizeBytes: e.length,
      ext: f(i)
    }), {
      filepath: a.path,
      size: e.length,
      ext: i
    }
  }
  let p = CC();
  if (X() && s !== void 0) {
    let i = await R(s, p, e, r, n, o);
    if (i !== void 0) return i
  }
  await _M(p, s);
  let d = nze(r),
    c = h(p, `${n}.${d}`);
  try {
    await mwe(c, e)
  } catch (i) {
    let a = F(i);
    return t(`Failed to persist binary content to ${c}: ${a.message}`, {
      level: "error"
    }), {
      error: a.message
    }
  }
  return zIn(o, c), l("tengu_binary_content_persisted", {
    sizeBytes: e.length,
    ext: f(d)
  }), {
    filepath: c,
    size: e.length,
    ext: d
  }
}

function Ift(e, r) {
  let n = (o) => o.replace(/[^\w-]/g, "");
  return `artifact-${n(e).slice(0,8)}-${n(r)}`
}

function P_r(e) {
  return x(e).toLowerCase().startsWith("artifact-") && x(P(e)).toLowerCase() === Kpe
}
async function R(e, r, n, o, s, u) {
  let p = nze(o),
    d = `${s}.${p}`,
    c = QJ(r, d);
  if (c === void 0) return;
  let i = h(r, d),
    a = await e.write(c, n, {
      mode: 438 & ~process.umask()
    });
  if (!a.ok) {
    let m = Ht(a.error);
    return t(`Failed to persist binary content to ${i}: ${m}`, {
      level: "error"
    }), {
      error: `storage write failed (${m})`
    }
  }
  return zIn(u, i), l("tengu_binary_content_persisted", {
    sizeBytes: n.length,
    ext: f(p)
  }), {
    filepath: i,
    size: n.length,
    ext: p
  }
}

function Gye(e, r, n, o) {
  return `${o}Binary content (${r||"unknown type"}, ${en(n)}) saved to ${e}`
}

function O_r(e, r, n) {
  let o = Ug();
  if (tt(r ?? "", ";").trim().toLowerCase() !== "application/pdf" || !_do(e)) return;
  if (e.length > (o?.inlinePdfBytes?.(n) ?? 0)) return o?.servesTheModelsFiles?.(n) === !0 ? {
    type: "text",
    text: v(e.length)
  } : void 0;
  return {
    type: "document",
    source: {
      type: "base64",
      media_type: "application/pdf",
      data: e.toString("base64")
    }
  }
}

function v(e) {
  return `[This PDF (${en(e)}) cannot be shown whole in this session. Read it again with the pages parameter, for example pages: "1-5", at most ${JJ} pages per call.]`
}
var y = "[Another PDF in this result was left out: only the first is shown.]";

function I_r(e) {
  if (!Array.isArray(e) || U(e, (n) => n.type === "document") < 2) return e;
  let r = !1;
  return e.map((n) => {
    if (n.type !== "document" || !r) return r ||= n.type === "document", n;
    return {
      type: "text",
      text: y
    }
  })
}

function Vye(e, r) {
  return `[Binary content (${ydo(e)??"application/octet-stream"}, ${en(r)}) was not kept: it could not be saved.]`
}
var M_r = "[The portion truncated above was not kept: it could not be saved.]";
export {
  ydo,
  _do,
  Soe,
  zIn,
  iDi,
  bdo,
  nze,
  Oft,
  F$,
  Ift,
  P_r,
  Gye,
  O_r,
  I_r,
  Vye,
  M_r
};
