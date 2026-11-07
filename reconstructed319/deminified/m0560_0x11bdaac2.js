// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Am } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { Xb, mLt } from "B:/~BUN/root/chunk-7vfy9z2g.js";
import { Ra } from "B:/~BUN/root/chunk-f7683rey.js";
import { Al } from "B:/~BUN/root/chunk-md18120p.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function LMt(e) {
  return e === "now" || e === "next" || e === "later" ? e : void 0;
}
function mXe(e) {
  return e.type === "image" && e.content.length > 0;
}
function NMt(e) {
  return e.mode === "poll-event" || e.mode === "task-notification" || e.skipAttachments === !0;
}
function Hyr(e) {
  return e.type === "assistant" && e.handedOff !== !0 && !/^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.uuid);
}
function UJt(e) {
  return e.findLast(t => t.type === "user" || t.type === "assistant");
}
function dft(e) {
  let t = n => n.type === "user" && Array.isArray(n.message.content) && n.message.content.length > 0 && n.message.content.every(item => item.type === "tool_result"),
    o = e.filter(item => item.type === "user" || item.type === "assistant"),
    r = o.length - 1,
    s = new Set();
  while (r >= 0 && t(o[r])) {
    let n = o[r];
    if (n.type === "user" && Array.isArray(n.message.content)) {
      for (let i of n.message.content) if (i.type === "tool_result") s.add(i.tool_use_id);
    }
    r--;
  }
  for (; r >= 0 && o[r].type === "assistant"; r--) {
    let n = o[r];
    if (n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some(item => item.type === "tool_use" && !s.has(item.id))) return !0;
  }
  return !1;
}
function lIn(e) {
  return e.findLast(t => t.type === "assistant" && Array.isArray(t.message.content) && t.message.content.some(item => item.type === "tool_use")) ?? e.at(-1);
}
var $yr = 4194304;
var Uyr = $yr;
import { randomUUID as E } from "crypto";
var m = 3;
function d(e, t) {
  if (e.bytes === void 0) return e;
  let size = e.bytes.length,
    r = Math.min(t + Uyr, size),
    next = r < size ? r - (r - t) % m : r;
  return t > 0 && t >= size ? {
    deny: `offset ${t} is at or past the item's ${size} bytes`
  } : {
    type: e.type,
    mediaType: e.mediaType,
    base64: e.bytes.subarray(t, next).toString("base64"),
    size: size,
    ...(next < size && {
      next: next
    })
  };
}
var klo = Object.freeze({
  deny: "no prompt.submit in flight carries an attachment under that id"
});
function p() {
  let e = new Map();
  return {
    hold: (t, o) => t.map(item => {
      let id = `media_${E().replace(/-/g, "")}`;
      return e.set(id, Am(() => item.read(o))), {
        ...item.attachment,
        id: id
      };
    }),
    release: t => t.forEach(item => e.delete(item.id ?? "")),
    read: async ({
      id: id_2,
      offset: offset
    }) => {
      let r = await e.get(id_2)?.();
      return r === void 0 || !e.has(id_2) ? klo : d(r, offset ?? 0);
    },
    clear: () => e.clear()
  };
}
var vlo = he(p(), e => {
  e.clear();
});
function qda(e, t, o) {
  let r = vlo.hold(e, t);
  return new Promise(s => {
    s(o(r));
  }).finally(() => vlo.release(r));
}
var l = Object.freeze({
  deny: "the image is not held inline: its block names a URL or a file"
});
function u(e) {
  if (e.block.type === "text") return {
    unreadable: e.block.text
  };
  let {
    source: source
  } = e.block;
  return source.type === "base64" ? {
    type: "image",
    mediaType: source.media_type,
    bytes: Buffer.from(source.data, "base64")
  } : l;
}
var f = Object.freeze({
  deny: "the document is not held as inline bytes: its block names a URL or a file, or nests other blocks"
});
var y = "application/octet-stream";
function c(e) {
  let t = D(e) ? e : {},
    {
      data: data,
      media_type: media_type
    } = t,
    s = t.type === "base64";
  return typeof data === "string" && (s || t.type === "text") ? {
    type: "document",
    mediaType: typeof media_type === "string" ? media_type : y,
    bytes: Buffer.from(data, s ? "base64" : "utf8")
  } : f;
}
var g = e => ({
  attachment: {
    type: "document"
  },
  read: async () => c(e.source)
});
function h({
  source: source_2
}) {
  let t = Ra(source_2) ? source_2 : void 0,
    o = t?.type === "base64" ? t.media_type : void 0;
  return {
    type: "image",
    mediaType: typeof o === "string" ? o : void 0
  };
}
var x = e => ({
  attachment: h(e),
  read: async t => u(await mLt(e, Al(t)))
});
function b(e) {
  if (!Ra(e)) return [];
  return e.type === "image" ? [x(e)] : e.type === "document" ? [g(e)] : [];
}
var I = Object.freeze({
  unreadable: "the pasted image is empty"
});
var k = e => ({
  attachment: {
    type: "image",
    mediaType: e.mediaType,
    filename: e.filename
  },
  read: async t => mXe(e) ? u(await Xb({
    data: e.content,
    mediaType: e.mediaType,
    limits: Al(t)
  })) : I
});
var Jus = (e, t) => [...(typeof e === "string" ? [] : e.flatMap(b)), ...Object.values(t ?? {}).filter(item => item.type === "image").map(k)];
export { LMt, mXe, NMt, Hyr, UJt, dft, lIn, $yr, Uyr, klo, vlo, qda, Jus };