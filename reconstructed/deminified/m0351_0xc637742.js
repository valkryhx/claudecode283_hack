// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qAe } from "B:/~BUN/root/chunk-339q6g5w.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, l, v, ao, sP } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { v_, u3e, Jae, VPr, Vjn, ACo } from "B:/~BUN/root/chunk-07stbc6s.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
var N = new Set([".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico", ".webp", ".tiff", ".tif", ".mp4", ".mov", ".avi", ".mkv", ".webm", ".wmv", ".flv", ".m4v", ".mpeg", ".mpg", ".mp3", ".wav", ".ogg", ".flac", ".aac", ".m4a", ".wma", ".aiff", ".opus", ".zip", ".tar", ".gz", ".bz2", ".7z", ".rar", ".xz", ".z", ".tgz", ".iso", ".exe", ".dll", ".so", ".dylib", ".bin", ".o", ".a", ".obj", ".lib", ".app", ".msi", ".deb", ".rpm", ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".odt", ".ods", ".odp", ".ttf", ".otf", ".woff", ".woff2", ".eot", ".pyc", ".pyo", ".class", ".jar", ".war", ".ear", ".node", ".wasm", ".rlib", ".sqlite", ".sqlite3", ".db", ".mdb", ".idx", ".psd", ".ai", ".eps", ".sketch", ".fig", ".xd", ".blend", ".3ds", ".max", ".swf", ".fla", ".lockb", ".dat", ".data"]);
function Tin(e) {
  let r = e.slice(e.lastIndexOf(".")).toLowerCase();
  return N.has(r);
}
function U(e) {
  return new Bun.Image(ACo(e) ?? e);
}
function $ee() {
  return Promise.resolve(U);
}
var Pjn = "[Image: ",
  Fat = "[Image source: ";
var q = 2,
  F = 3,
  Y = 4,
  J = 5,
  K = 8,
  Q = 9,
  M = 10,
  O = new Set(["png", "jpeg", "gif", "webp"]);
function W(e) {
  switch (e) {
    case "jpeg":
    case "jpg":
      return "jpeg";
    case "webp":
      return "webp";
    default:
      return "png";
  }
}
class ImageResizeError extends Error {
  constructor(e) {
    super(e);
    this.name = "ImageResizeError";
  }
}
function D(e) {
  if (VPr(e) === 4) return {
    reason: "it is a CMYK JPEG, which Claude Code cannot decode",
    advice: "Re-save it as an RGB PNG or JPEG and try again."
  };
  if (Vjn(e)) return {
    reason: "it is an animated WebP whose first frame Claude Code cannot decode",
    advice: "Save its first frame as a PNG or JPEG and try again."
  };
  return {
    reason: "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)",
    advice: "Re-save it as a PNG or JPEG and try again."
  };
}
function Ijn(e) {
  switch (v(e)) {
    case "ERR_IMAGE_DECODE_FAILED":
      return M;
    case "ERR_IMAGE_UNKNOWN_FORMAT":
      return q;
    case "ERR_IMAGE_TOO_MANY_PIXELS":
      return Y;
    case "ERR_IMAGE_FORMAT_UNSUPPORTED":
      return Q;
    case "EACCES":
    case "EPERM":
      return K;
    case "ENOMEM":
      return J;
    default:
      return F;
  }
}
function Ojn(e) {
  return e === F;
}
function H(e) {
  if (!(e instanceof Error)) return {
    error_name: c(typeof e),
    error_code: y("")
  };
  return {
    error_name: sP(e.name !== "Error" ? e.name : e.constructor?.name) ?? y("Error"),
    error_code: ao(e) ?? y("")
  };
}
function G(e) {
  let r = v_(e);
  return {
    ...(r === "image/jpeg" && {
      jpeg_components: VPr(e)
    }),
    ...(r === "image/webp" && {
      webp_animated: Vjn(e)
    })
  };
}
function k(e) {
  let r = 5381;
  for (let o = 0; o < e.length; o++) r = (r << 5) + r + e.charCodeAt(o) | 0;
  return r >>> 0;
}
function A(e) {
  return {
    rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth,
    rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight
  };
}
async function PNe(buffer_8, original_size_bytes_2, o, n) {
  if (buffer_8.length === 0) throw new ImageResizeError("Image file is empty (0 bytes)");
  try {
    let m = await $ee(),
      a = await m(buffer_8).metadata(),
      g = a.format ?? o,
      mediaType = g === "jpg" ? "jpeg" : g,
      buffer = buffer_8,
      original_size_bytes = original_size_bytes_2;
    if (!O.has(mediaType)) buffer = await m(buffer_8).png().toBuffer(), original_size_bytes = buffer.length, a = await m(buffer).metadata(), mediaType = "png";
    if (!a.width || !a.height) {
      let _ = Jae(buffer),
        {
          rejectMaxWidth: rejectMaxWidth,
          rejectMaxHeight: rejectMaxHeight
        } = A(n);
      if (_ === void 0 || _.width > rejectMaxWidth || _.height > rejectMaxHeight) throw new ImageResizeError(`Unable to resize image \u2014 could not verify image dimensions are within the ${rejectMaxWidth}x${rejectMaxHeight}px API limit.`);
      if (original_size_bytes > n.targetRawSize) return i("tengu_image_resize", {
        over_byte_limit: !0,
        over_dimension_limit: !1,
        original_size_bytes: original_size_bytes
      }), {
        buffer: await m(buffer).jpeg({
          quality: 80
        }).toBuffer(),
        mediaType: "jpeg"
      };
      return {
        buffer: buffer,
        mediaType: mediaType
      };
    }
    let p = a.width,
      w = a.height,
      displayWidth = p,
      displayHeight = w;
    if (original_size_bytes <= n.targetRawSize && displayWidth <= n.maxWidth && displayHeight <= n.maxHeight) return {
      buffer: buffer,
      mediaType: mediaType,
      dimensions: {
        originalWidth: p,
        originalHeight: w,
        displayWidth: displayWidth,
        displayHeight: displayHeight
      }
    };
    let over_dimension_limit = displayWidth > n.maxWidth || displayHeight > n.maxHeight,
      z = mediaType === "png";
    if (i("tengu_image_resize", {
      over_byte_limit: original_size_bytes > n.targetRawSize,
      over_dimension_limit: over_dimension_limit,
      original_size_bytes: original_size_bytes,
      original_width: p,
      original_height: w
    }), !over_dimension_limit && original_size_bytes > n.targetRawSize) {
      if (z) {
        let buffer_2 = await m(buffer).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer();
        if (buffer_2.length <= n.targetRawSize) return {
          buffer: buffer_2,
          mediaType: "png",
          dimensions: {
            originalWidth: p,
            originalHeight: w,
            displayWidth: displayWidth,
            displayHeight: displayHeight
          }
        };
      }
      for (let quality of [80, 60, 40, 20]) {
        let buffer_3 = await m(buffer).jpeg({
          quality: quality
        }).toBuffer();
        if (buffer_3.length <= n.targetRawSize) return {
          buffer: buffer_3,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: p,
            originalHeight: w,
            displayWidth: displayWidth,
            displayHeight: displayHeight
          }
        };
      }
    }
    if (displayWidth > n.maxWidth) displayHeight = Math.round(displayHeight * n.maxWidth / displayWidth), displayWidth = n.maxWidth;
    if (displayHeight > n.maxHeight) displayWidth = Math.round(displayWidth * n.maxHeight / displayHeight), displayHeight = n.maxHeight;
    t(`Resizing to ${displayWidth}x${displayHeight}`);
    let mediaType_2 = W(mediaType),
      B = m(buffer).resize(displayWidth, displayHeight, {
        fit: "inside",
        withoutEnlargement: !0
      });
    if (mediaType_2 !== mediaType) B = B.png();
    let buffer_7 = await B.toBuffer();
    if (buffer_7.length > n.targetRawSize) {
      if (z) {
        let buffer_4 = await m(buffer).resize(displayWidth, displayHeight, {
          fit: "inside",
          withoutEnlargement: !0
        }).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer();
        if (buffer_4.length <= n.targetRawSize) return {
          buffer: buffer_4,
          mediaType: "png",
          dimensions: {
            originalWidth: p,
            originalHeight: w,
            displayWidth: displayWidth,
            displayHeight: displayHeight
          }
        };
      }
      for (let quality_2 of [80, 60, 40, 20]) {
        let buffer_5 = await m(buffer).resize(displayWidth, displayHeight, {
          fit: "inside",
          withoutEnlargement: !0
        }).jpeg({
          quality: quality_2
        }).toBuffer();
        if (buffer_5.length <= n.targetRawSize) return {
          buffer: buffer_5,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: p,
            originalHeight: w,
            displayWidth: displayWidth,
            displayHeight: displayHeight
          }
        };
      }
      let displayWidth_2 = Math.min(displayWidth, 1000),
        displayHeight_2 = Math.round(displayHeight * displayWidth_2 / Math.max(displayWidth, 1));
      t("Still too large, compressing with JPEG");
      let buffer_6 = await m(buffer).resize(displayWidth_2, displayHeight_2, {
        fit: "inside",
        withoutEnlargement: !0
      }).jpeg({
        quality: 20
      }).toBuffer();
      return t(`JPEG compressed buffer size: ${buffer_6.length}`), {
        buffer: buffer_6,
        mediaType: "jpeg",
        dimensions: {
          originalWidth: p,
          originalHeight: w,
          displayWidth: displayWidth_2,
          displayHeight: displayHeight_2
        }
      };
    }
    return {
      buffer: buffer_7,
      mediaType: mediaType_2,
      dimensions: {
        originalWidth: p,
        originalHeight: w,
        displayWidth: displayWidth,
        displayHeight: displayHeight
      }
    };
  } catch (error) {
    if (error instanceof ImageResizeError) throw error;
    let error_type = Ijn(error),
      g = l(error);
    if (Ojn(error_type)) d(error);else t(`Image resize failed: ${g}`, {
      level: "error"
    });
    i("tengu_image_resize_failed", {
      original_size_bytes: original_size_bytes_2,
      error_type: error_type,
      error_message_hash: k(g),
      ...H(error),
      ...G(buffer_8)
    });
    let mediaType_3 = u3e(buffer_8).slice(6),
      base64_size_bytes = Math.ceil(original_size_bytes_2 * 4 / 3),
      p = Jae(buffer_8);
    if (p === void 0) throw new ImageResizeError("Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " + "Please convert the image to PNG, JPEG, GIF, or WebP.");
    let {
        rejectMaxWidth: rejectMaxWidth_2,
        rejectMaxHeight: rejectMaxHeight_2
      } = A(n),
      h = p.width > rejectMaxWidth_2 || p.height > rejectMaxHeight_2;
    if (base64_size_bytes <= n.maxBase64Size && !h) return i("tengu_image_resize_fallback", {
      original_size_bytes: original_size_bytes_2,
      base64_size_bytes: base64_size_bytes,
      error_type: error_type
    }), {
      buffer: buffer_8,
      mediaType: mediaType_3
    };
    if (error_type === M) {
      let {
          reason: reason,
          advice: advice
        } = D(buffer_8),
        T = h ? `at ${p.width}x${p.height}px it is over the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit` : `it is over the ${Ut(n.maxBase64Size)} API limit (${Ut(original_size_bytes_2)} raw, ${Ut(base64_size_bytes)} base64)`;
      throw new ImageResizeError(`Unable to resize image \u2014 ${reason}, and ${T}, so it cannot be sent. ${advice}`);
    }
    throw new ImageResizeError(h ? `Unable to resize image \u2014 dimensions exceed the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.` : `Unable to resize image (${Ut(original_size_bytes_2)} raw, ${Ut(base64_size_bytes)} base64). The image exceeds the ${Ut(n.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`);
  }
}
async function RPr(e, r, o) {
  let n = await $ee(),
    m = quality_3 => n(e).jpeg({
      quality: quality_3
    }).toBuffer(),
    a = e,
    g = 90;
  if (!/jpe?g/i.test(o)) {
    let p = await m(90);
    if (p.length < a.length) a = p;
    if (p.length <= r) return p;
    g = 89;
  }
  let s = 1,
    b;
  for (let p = 0; p < 5; p++) {
    let w = Math.floor((s + g) / 2),
      u = await m(w);
    if (u.length < a.length) a = u;
    if (u.length <= r) b = u, s = w + 1;else g = w - 1;
    if (s > g) break;
  }
  return b ?? a;
}
async function zy({
  data: data,
  mediaType: mediaType_4,
  limits: limits
}) {
  let n = Buffer.isBuffer(data) ? data : Buffer.from(data, "base64"),
    m = mediaType_4?.includes("/") ? mediaType_4.split("/")[1] || "png" : mediaType_4 || "png",
    a;
  try {
    a = await PNe(n, n.length, m, limits);
  } catch (error) {
    if (error instanceof ImageResizeError) return i("tengu_image_resize_degraded", {}), {
      block: {
        type: "text",
        text: `[Image could not be processed: ${error.message}]`
      }
    };
    throw error;
  }
  let buffer_9 = a.buffer;
  if (buffer_9.length > qAe) try {
    buffer_9 = await RPr(a.buffer, qAe, a.mediaType);
  } catch (error) {
    t(`Image byte-budget compression failed, passing through unbudgeted: ${l(error)}`, {
      level: "error"
    });
  }
  return {
    block: {
      type: "image",
      source: {
        type: "base64",
        media_type: u3e(buffer_9),
        data: buffer_9.toString("base64")
      }
    },
    dimensions: a.dimensions
  };
}
async function kCo(data_2, limits_2) {
  let mediaType_5 = v_(data_2);
  if (mediaType_5 === null) return null;
  try {
    let {
      block: block
    } = await zy({
      data: data_2,
      mediaType: mediaType_5,
      limits: limits_2
    });
    return block.type === "image" ? block : null;
  } catch {
    return null;
  }
}
async function ECo(block_2, limits_3) {
  if (block_2.source.type !== "base64") return {
    block: block_2
  };
  return zy({
    data: block_2.source.data,
    mediaType: block_2.source.media_type,
    limits: limits_3
  });
}
async function L(e, r, o) {
  let n = o?.split("/")[1] || "jpeg",
    m = n === "jpg" ? "jpeg" : n;
  try {
    let a = await $ee(),
      metadata = await a(e).metadata(),
      format = metadata.format || m,
      originalSize = e.length,
      imageBuffer = e;
    if (!O.has(format === "jpg" ? "jpeg" : format)) imageBuffer = await a(e).png().toBuffer(), metadata = await a(imageBuffer).metadata(), format = "png";
    let p = {
      imageBuffer: imageBuffer,
      metadata: metadata,
      format: format,
      maxBytes: r,
      originalSize: originalSize
    };
    if (imageBuffer.length <= r) return S(imageBuffer, format, originalSize);
    let w = await X(p, a);
    if (w) return w;
    if (format === "png") {
      let h = await Z(p, a);
      if (h) return h;
    }
    let u = await ee(p, 50, a);
    if (u) return u;
    return await te(p, a);
  } catch (error) {
    let error_type_2 = Ijn(error),
      f = l(error);
    if (Ojn(error_type_2)) d(error);else t(`Image compression failed: ${f}`, {
      level: "error"
    });
    if (i("tengu_image_compress_failed", {
      original_size_bytes: e.length,
      max_bytes: r,
      error_type: error_type_2,
      error_message_hash: k(f),
      ...H(error),
      ...G(e)
    }), e.length <= r) {
      let mediaType_6 = u3e(e);
      return {
        base64: e.toString("base64"),
        mediaType: mediaType_6,
        originalSize: e.length
      };
    }
    if (error_type_2 === M) {
      let {
        reason: reason_2,
        advice: advice_2
      } = D(e);
      throw new ImageResizeError(`Unable to compress image (${Ut(e.length)}) to fit within ${Ut(r)} \u2014 ${reason_2}. ${advice_2}`);
    }
    throw new ImageResizeError(`Unable to compress image (${Ut(e.length)}) to fit within ${Ut(r)}. Please use a smaller image.`);
  }
}
async function TCo(e, r, o) {
  let n = Math.floor(r / 0.125),
    m = Math.floor(n * 0.75);
  return L(e, m, o);
}
async function CCo(e, r) {
  if (e.source.type !== "base64") return e;
  let o = Buffer.from(e.source.data, "base64");
  if (o.length <= r) return e;
  let n = await L(o, r);
  return {
    type: "image",
    source: {
      type: "base64",
      media_type: n.mediaType,
      data: n.base64
    }
  };
}
function S(e, r, originalSize_2) {
  let n = r === "jpg" ? "jpeg" : r;
  return {
    base64: e.toString("base64"),
    mediaType: `image/${n}`,
    originalSize: originalSize_2
  };
}
async function X(e, r) {
  let o = [1, 0.75, 0.5, 0.25];
  for (let n of o) {
    let m = Math.round((e.metadata.width || 2000) * n),
      a = Math.round((e.metadata.height || 2000) * n),
      g = r(e.imageBuffer).resize(m, a, {
        fit: "inside",
        withoutEnlargement: !0
      }),
      f = W(e.format);
    g = V(g, f);
    let s = await g.toBuffer();
    if (s.length <= e.maxBytes) return S(s, f, e.originalSize);
  }
  return null;
}
function V(e, r) {
  switch (r) {
    case "png":
      return e.png({
        compressionLevel: 9,
        palette: !0
      });
    case "jpeg":
      return e.jpeg({
        quality: 80
      });
    case "webp":
      return e.webp({
        quality: 80
      });
  }
}
async function Z(e, r) {
  let o = await r(e.imageBuffer).resize(800, 800, {
    fit: "inside",
    withoutEnlargement: !0
  }).png({
    compressionLevel: 9,
    palette: !0,
    colors: 64
  }).toBuffer();
  if (o.length <= e.maxBytes) return S(o, "png", e.originalSize);
  return null;
}
async function ee(e, quality_4, o) {
  let n = await o(e.imageBuffer).resize(600, 600, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: quality_4
  }).toBuffer();
  if (n.length <= e.maxBytes) return S(n, "jpeg", e.originalSize);
  return null;
}
async function te(e, r) {
  let o = await r(e.imageBuffer).resize(400, 400, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: 20
  }).toBuffer();
  return S(o, "jpeg", e.originalSize);
}
function X9(e, r) {
  let {
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    displayWidth: displayWidth_3,
    displayHeight: displayHeight_3
  } = e;
  if (!originalWidth || !originalHeight || !displayWidth_3 || !displayHeight_3 || displayWidth_3 <= 0 || displayHeight_3 <= 0) {
    if (r) return `${Fat}${r}]`;
    return null;
  }
  let g = originalWidth !== displayWidth_3 || originalHeight !== displayHeight_3;
  if (!g && !r) return null;
  let f = [];
  if (r) f.push(`source: ${r}`);
  if (g) {
    let s = originalWidth / displayWidth_3;
    f.push(`original ${originalWidth}x${originalHeight}, displayed at ${displayWidth_3}x${displayHeight_3}. Multiply coordinates by ${s.toFixed(2)} to map to original image.`);
  }
  return `${Pjn}${f.join(", ")}]`;
}
var re = /[\u2018-\u201F]/;
function s3e(e, r = "value") {
  let o = re.exec(e);
  if (o) {
    let n = (o[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0");
    throw new P(`Cannot safely quote ${r} in a PowerShell single-quoted string literal: it contains U+${n}, which PowerShell's tokenizer treats as a quote delimiter`, "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)");
  }
  return `'${e.replaceAll("'", "''")}'`;
}
export { Pjn, Fat, Tin, $ee, ImageResizeError as l0, Ijn, Ojn, PNe, RPr, zy, kCo, ECo, TCo, CCo, X9, s3e };