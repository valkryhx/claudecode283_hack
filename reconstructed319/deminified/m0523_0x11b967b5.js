// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q, er, Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, tr, x0 } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { kSt, Q4, fFr, aae, Ow } from "B:/~BUN/root/chunk-1g25msn4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { us } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { hg, fue, Nx, Kpo, HBi, $Bi, UBi, jBi, oen, WSs, WBi, zBi } from "B:/~BUN/root/chunk-2htsebsg.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
var jpo = "[Image: ",
  nen = "[Image source: ";
var Ie = ["image_dimensions_too_large", "image_processing_failed", "unsupported_file_format", "image_format_mismatch", "image_too_large", "file_too_large", "file_limit_exceeded", "upload_busy", "upload_timeout"],
  eee = 8000;
function xe(e) {
  return Ie.some(item => item === e);
}
function hmt(e) {
  return xe(e) ? e : void 0;
}
function te(e) {
  switch (e) {
    case "image_dimensions_too_large":
      return {
        cause: `the image is more than ${eee} pixels wide or tall`,
        remedy: `send a copy scaled to at most ${eee} pixels on its longer side, or send it in a non-image format such as a .zip`
      };
    case "image_processing_failed":
      return {
        cause: "the server could not process this image (it may be damaged, truncated, not an image format it can decode, or took too long to convert)",
        remedy: "re-export it as PNG or JPEG, or send it inside a .zip"
      };
    case "unsupported_file_format":
      return {
        cause: "the file's contents are an image format the server does not accept, whatever its extension says (it accepts PNG, JPEG, GIF and WebP)",
        remedy: "convert it to one of those or send it inside a .zip"
      };
    case "image_format_mismatch":
      return {
        cause: "the image's contents do not match its file extension (for example JPEG data in a .png file)",
        remedy: "rename or re-export it so the two agree"
      };
    case "image_too_large":
      return {
        cause: "images have a lower size limit than other files",
        remedy: "reduce this image's file size, or send it in a non-image format such as a .zip"
      };
    case "file_too_large":
      return {
        cause: "the file is larger than the server's upload size limit",
        remedy: "send a smaller or compressed copy"
      };
    case "file_limit_exceeded":
      return {
        cause: "this account has uploaded as many files as it is allowed for now (a count of files, not a size)",
        remedy: "sending again, even a smaller file, will fail the same way until the allowance resets, so tell the user instead of retrying",
        stop: !0
      };
    case "upload_busy":
      return {
        cause: "the server is busy with other large uploads",
        remedy: "try again shortly",
        passes: !0
      };
    case "upload_timeout":
      return {
        cause: "the server timed out receiving the file",
        remedy: "try again",
        passes: !0
      };
  }
}
var N = /^upload failed: server returned (\d+)$/,
  Se = {
    cause: "this session's cloud environment is not signed in to send files, most likely because its sign-in has expired",
    remedy: `an expired sign-in is renewed once this turn has ended and the environment has then run no tool call or ${Fs} watch for about five minutes, so do not send again or run sleep now; tell the user to wait at least five minutes without sending anything else in this chat, and then to ask for the file again. If a send after such a wait fails like this too, tell the user instead that sending files may not work in this chat for now`,
    stop: !0
  };
function ne(e, n) {
  return hmt(n) === void 0 && N.exec(e)?.[1] === "401" && er();
}
var re = /^upload failed: (?:network error \(|the connection closed before the server answered$|the server did not answer within \d|the transfer stalled \()/,
  oe = /\bInvalid URL\b|certificate/i,
  Pe = new Set([429, 500, 502, 503, 504, 520, 521, 522, 523, 524, 529]);
function LSs(e, n, r = !1) {
  let o = hmt(n),
    u = o !== void 0 ? te(o) : ne(e, n) ? Se : void 0;
  if (u === void 0) return e;
  let {
      cause: cause,
      remedy: remedy,
      stop: stop
    } = u,
    p = [...(N.test(e) ? [cause] : []), ...(r && !stop ? [] : [remedy])];
  return p.length === 0 ? e : `${e} \u2014 ${p.join("; ")}`;
}
var pLt = 31457280;
function NSs(e) {
  let n = e / 1048576;
  return `${Number.isInteger(n) ? n : n.toFixed(1)} MiB`;
}
var Me = new Set([502, 503, 504, 520, 524]);
function Wpo(e, n) {
  if (hmt(n) !== void 0) return !1;
  return Me.has(Number(N.exec(e)?.[1])) || re.test(e) && !oe.test(e);
}
function FSs(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}
function Re(e) {
  return FSs(e.upload_suspected_limit_bytes) && e.size > pLt && Wpo(e.upload_error, e.upload_error_code);
}
function Evr(e) {
  return Re(e) ? `${e.upload_error} \u2014 the cause is unknown and may pass. If the same file fails like this again, it may be over the upload limit that applies to this session, which was not named and is never under ${NSs(pLt)}` : LSs(e.upload_error, e.upload_error_code);
}
function Te(e, n) {
  let r = hmt(n);
  if (r !== void 0) return te(r).passes === !0;
  return Pe.has(Number(N.exec(e)?.[1])) || re.test(e) && !oe.test(e);
}
function ren(e) {
  let n = e.filter(item => Te(item.upload_error, item.upload_error_code));
  if (n.length === 0 || e.some(item => ne(item.upload_error, item.upload_error_code))) return "";
  let r = P(n.length, "failure"),
    o = `also tell the user they can ask you to send ${P(n.length, "it", "them")} again in a few minutes.`;
  if (n.length === e.length) return ` The ${r} may be temporary, so ${o}`;
  return ` For ${new Intl.ListFormat("en", {
    type: "conjunction"
  }).format(n.map(item => item.path))}, whose ${r} may be temporary, ${o}`;
}
var Be = !1,
  code = "ERR_IMAGE_DECODING_OFF",
  maxPixels = eee * eee,
  ze = 4,
  Ce = Ja(ze, e => e.toBuffer()),
  ie = 100,
  weakMap = new WeakMap();
function Oe() {
  return Promise.reject(Object.assign(Error("Image is too costly to decode"), {
    code: "ERR_IMAGE_DECODE_FAILED"
  }));
}
function A(e) {
  return {
    metadata: () => e.metadata(),
    resize: (n, r, o) => A(e.resize(n, r, o)),
    rotate: n => A(e.rotate(n)),
    jpeg: n => A(e.jpeg(n)),
    png: n => A(e.png(n)),
    webp: n => A(e.webp(n)),
    toBuffer: () => Ce(e)
  };
}
function U(e) {
  let n = {
    metadata: e,
    resize: () => n,
    rotate: () => n,
    jpeg: () => n,
    png: () => n,
    webp: () => n,
    toBuffer: e
  };
  return n;
}
function Tvr() {
  return Be || !ae();
}
function je(e) {
  let n = ae();
  if (!Tvr()) return U(() => Promise.reject(Object.assign(Error("Images are not decoded in a claude-code-server session"), {
    code: code
  })));
  if (typeof Bun.Image !== "function") return U(() => Promise.reject(Object.assign(Error("This runtime has no Bun.Image"), {
    code: "ERR_IMAGE_UNAVAILABLE"
  })));
  let r = zBi(e) ?? e;
  if (!n) return new Bun.Image(r);
  let o = weakMap.get(r);
  if (o === void 0) o = $Bi(r, ie) > ie ? null : UBi(r), weakMap.set(r, o);
  return o === null ? U(Oe) : A(new Bun.Image(o, {
    maxPixels: maxPixels
  }));
}
function e3() {
  return Promise.resolve(je);
}
function ae() {
  return q() || Qp();
}
var De = 1568,
  ke = 1568,
  ve = 85,
  ue = 5,
  Ne = 10,
  $e = 1398100;
function Y(e, n, r = De, o = ke) {
  if (e <= r && n <= r && aae(e, n) <= o) return [e, n];
  if (n > e) {
    let [m, p] = Y(n, e, r, o);
    return [p, m];
  }
  let u = e / n,
    s = 1,
    i = e;
  while (s + 1 < i) {
    let m = s + i >> 1,
      p = Math.max(Math.round(m / u), 1);
    if (m <= r && aae(m, p) <= o) s = m;else i = m;
  }
  return [s, Math.max(Math.round(s / u), 1)];
}
function NLn(e, n, r) {
  if (e > r.maxWidth) n = Math.round(n * r.maxWidth / e), e = r.maxWidth;
  if (n > r.maxHeight) e = Math.round(e * r.maxHeight / n), n = r.maxHeight;
  return r.maxImageTokens === void 0 ? [e, n] : Y(e, n, 1 / 0, r.maxImageTokens);
}
async function zpo(e) {
  let n = await e3(),
    r = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    o = await n(r).metadata(),
    [w_2, h_2] = Y(o.width, o.height),
    i = w_2 !== o.width || h_2 !== o.height,
    quality = ve + ue,
    jpeg;
  do {
    quality -= ue;
    let y = n(r);
    if (i) y = y.resize(w_2, h_2, {
      fit: "fill"
    });
    jpeg = await y.jpeg({
      quality: quality
    }).toBuffer();
  } while (jpeg.length * 4 > $e * 3 && quality > Ne);
  return {
    jpeg: jpeg,
    w: w_2,
    h: h_2
  };
}
var We = 2,
  me = 3,
  Le = 4,
  Fe = 5,
  Ge = 8,
  Ue = 9,
  K = 10,
  X = 11,
  He = "tengu_parsed_eagle",
  ce = new Set(["png", "jpeg", "gif", "webp"]);
function pe(e) {
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
function ge(e) {
  if (Kpo(e) === 4) return {
    reason: "it is a CMYK JPEG, which Claude Code cannot decode",
    advice: "Re-save it as an RGB PNG or JPEG and try again."
  };
  if (oen(e)) return {
    reason: "it is an animated WebP whose first frame Claude Code cannot decode",
    advice: "Save its first frame as a PNG or JPEG and try again."
  };
  return {
    reason: "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)",
    advice: "Re-save it as a PNG or JPEG and try again."
  };
}
function zJe(e) {
  switch (k(e)) {
    case "ERR_IMAGE_DECODE_FAILED":
      return K;
    case code:
      return X;
    case "ERR_IMAGE_UNKNOWN_FORMAT":
      return We;
    case "ERR_IMAGE_TOO_MANY_PIXELS":
      return Le;
    case "ERR_IMAGE_FORMAT_UNSUPPORTED":
      return Ue;
    case "EACCES":
    case "EPERM":
      return Ge;
    case "ENOMEM":
      return Fe;
    default:
      return me;
  }
}
function GJe(e) {
  return e === me;
}
function he(e) {
  if (!(e instanceof Error)) return {
    error_name: f(typeof e),
    error_code: b("")
  };
  return {
    error_name: x0(e.name !== "Error" ? e.name : e.constructor?.name) ?? b("Error"),
    error_code: tr(e) ?? b("")
  };
}
function _e(e) {
  let n = hg(e);
  return {
    ...(n === "image/jpeg" && {
      jpeg_components: Kpo(e)
    }),
    ...(n === "image/webp" && {
      webp_animated: oen(e)
    })
  };
}
function be(e) {
  let n = 5381;
  for (let r = 0; r < e.length; r++) n = (n << 5) + n + e.charCodeAt(r) | 0;
  return n >>> 0;
}
function W(e) {
  return {
    rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth,
    rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight
  };
}
var J = 8000;
async function gmt(buffer_8, original_size_bytes_2, r, o, {
  timings: timings,
  directWebpMaxBytes: directWebpMaxBytes
} = {}) {
  if (buffer_8.length === 0) throw new ImageResizeError("Image file is empty (0 bytes)");
  try {
    let i = await e3(),
      m = await i(buffer_8).metadata(),
      p = m.format ?? r,
      mediaType = p === "jpg" ? "jpeg" : p,
      buffer = buffer_8,
      original_size_bytes = original_size_bytes_2;
    if (!ce.has(mediaType)) {
      let {
          width: width,
          height: height
        } = m,
        T = width === void 0 || height === void 0 ? void 0 : NLn(width, height, o),
        B = T !== void 0 && T[0] === width && T[1] === height ? (await le(() => i(buffer_8), directWebpMaxBytes)).webp : void 0;
      buffer = B ?? (await i(buffer_8).png().toBuffer()), original_size_bytes = buffer.length, m = await i(buffer).metadata(), mediaType = B ? "webp" : "png";
    }
    if (!m.width || !m.height) {
      let S = Nx(buffer),
        {
          rejectMaxWidth: rejectMaxWidth,
          rejectMaxHeight: rejectMaxHeight
        } = W(o);
      if (S === void 0 || S.width > rejectMaxWidth || S.height > rejectMaxHeight) throw new ImageResizeError(`Unable to resize image \u2014 could not verify image dimensions are within the ${rejectMaxWidth}x${rejectMaxHeight}px API limit.`);
      if (original_size_bytes > o.targetRawSize) return l("tengu_image_resize", {
        over_byte_limit: !0,
        over_dimension_limit: !1,
        resized_for_tokens: !1,
        original_size_bytes: original_size_bytes
      }), {
        buffer: await i(buffer).jpeg({
          quality: 80
        }).toBuffer(),
        mediaType: "jpeg"
      };
      return {
        buffer: buffer,
        mediaType: mediaType
      };
    }
    let E = m.width,
      _ = m.height,
      [w, x] = NLn(E, _, o),
      R = w !== E || x !== _;
    if (original_size_bytes <= o.targetRawSize && !R) return {
      buffer: buffer,
      mediaType: mediaType,
      dimensions: {
        originalWidth: E,
        originalHeight: _,
        displayWidth: w,
        displayHeight: x
      }
    };
    let j = mediaType === "png";
    if (l("tengu_image_resize", {
      over_byte_limit: original_size_bytes > o.targetRawSize,
      over_dimension_limit: E > o.maxWidth || _ > o.maxHeight,
      resized_for_tokens: R && w < o.maxWidth && x < o.maxHeight,
      original_size_bytes: original_size_bytes,
      original_width: E,
      original_height: _,
      target_width: w,
      target_height: x,
      max_width: o.maxWidth,
      max_height: o.maxHeight,
      max_image_tokens: o.maxImageTokens
    }), !R && original_size_bytes > o.targetRawSize) {
      if (j) {
        let buffer_2 = await fe(() => i(buffer).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer(), timings);
        if (buffer_2.length <= o.targetRawSize) return {
          buffer: buffer_2,
          mediaType: "png",
          dimensions: {
            originalWidth: E,
            originalHeight: _,
            displayWidth: w,
            displayHeight: x
          }
        };
      }
      for (let quality_2 of [80, 60, 40, 20]) {
        let buffer_3 = await i(buffer).jpeg({
          quality: quality_2
        }).toBuffer();
        if (buffer_3.length <= o.targetRawSize) return {
          buffer: buffer_3,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: E,
            originalHeight: _,
            displayWidth: w,
            displayHeight: x
          }
        };
      }
    }
    t(`Resizing to ${w}x${x}`);
    let z = R && directWebpMaxBytes !== void 0 && E <= W(o).rejectMaxWidth && _ <= W(o).rejectMaxHeight && WSs(buffer) ? "png" : pe(mediaType),
      F = i(buffer).resize(w, x, {
        fit: "inside",
        withoutEnlargement: !0
      });
    if (z !== mediaType) F = F.png();
    let G = z === "png" ? await le(() => i(buffer).resize(w, x, {
        fit: "inside",
        withoutEnlargement: !0
      }), directWebpMaxBytes) : {},
      buffer_7 = G.webp ?? (await F.toBuffer());
    if (buffer_7.length > o.targetRawSize) {
      if (j) {
        let buffer_4 = await fe(() => i(buffer).resize(w, x, {
          fit: "inside",
          withoutEnlargement: !0
        }).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer(), timings);
        if (buffer_4.length <= o.targetRawSize) return {
          buffer: buffer_4,
          mediaType: "png",
          dimensions: {
            originalWidth: E,
            originalHeight: _,
            displayWidth: w,
            displayHeight: x
          }
        };
      }
      for (let quality_3 of [80, 60, 40, 20]) {
        let buffer_5 = await i(buffer).resize(w, x, {
          fit: "inside",
          withoutEnlargement: !0
        }).jpeg({
          quality: quality_3
        }).toBuffer();
        if (buffer_5.length <= o.targetRawSize) return {
          buffer: buffer_5,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: E,
            originalHeight: _,
            displayWidth: w,
            displayHeight: x
          }
        };
      }
      let displayWidth = Math.min(w, 1000),
        displayHeight = Math.round(x * displayWidth / Math.max(w, 1));
      t("Still too large, compressing with JPEG");
      let buffer_6 = await i(buffer).resize(displayWidth, displayHeight, {
        fit: "inside",
        withoutEnlargement: !0
      }).jpeg({
        quality: 20
      }).toBuffer();
      return t(`JPEG compressed buffer size: ${buffer_6.length}`), {
        buffer: buffer_6,
        mediaType: "jpeg",
        dimensions: {
          originalWidth: E,
          originalHeight: _,
          displayWidth: displayWidth,
          displayHeight: displayHeight
        }
      };
    }
    return {
      buffer: buffer_7,
      mediaType: G.webp ? "webp" : z,
      dimensions: {
        originalWidth: E,
        originalHeight: _,
        displayWidth: w,
        displayHeight: x
      },
      losslessWebp: G.lossless
    };
  } catch (error) {
    if (error instanceof ImageResizeError) throw error;
    let error_type = zJe(error),
      p = d(error);
    if (GJe(error_type)) a(error);else t(`Image resize failed: ${p}`, {
      level: "error"
    });
    l("tengu_image_resize_failed", {
      original_size_bytes: original_size_bytes_2,
      error_type: error_type,
      error_message_hash: be(p),
      ...he(error),
      ..._e(buffer_8)
    });
    let mediaType_2 = fue(buffer_8).slice(6),
      base64_size_bytes = Math.ceil(original_size_bytes_2 * 4 / 3),
      E = Nx(buffer_8);
    if (E === void 0) throw new ImageResizeError("Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " + "Please convert the image to PNG, JPEG, GIF, or WebP.");
    let {
        rejectMaxWidth: rejectMaxWidth_2,
        rejectMaxHeight: rejectMaxHeight_2
      } = error_type === X && us() ? {
        rejectMaxWidth: J,
        rejectMaxHeight: J
      } : W(o),
      x = E.width > rejectMaxWidth_2 || E.height > rejectMaxHeight_2;
    if (base64_size_bytes <= o.maxBase64Size && !x) return l("tengu_image_resize_fallback", {
      original_size_bytes: original_size_bytes_2,
      base64_size_bytes: base64_size_bytes,
      error_type: error_type
    }), {
      buffer: buffer_8,
      mediaType: mediaType_2
    };
    if (error_type === X) throw new ImageResizeError(x ? `Unable to send image \u2014 at ${E.width}x${E.height}px it is over the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit, and this session cannot shrink images. Resize it to fit within ${rejectMaxWidth_2}x${rejectMaxHeight_2}px and try again.` : `Unable to send image \u2014 it is ${en(base64_size_bytes)} in base64, over the API's ${en(o.maxBase64Size)} limit, and this session cannot shrink images. Make it smaller than ${Math.floor(o.targetRawSize / 1024 / 1024 * 10) / 10}MB and try again.`);
    if (error_type === K) {
      let {
          reason: reason,
          advice: advice
        } = ge(buffer_8),
        z = x ? `at ${E.width}x${E.height}px it is over the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit` : `it is over the ${en(o.maxBase64Size)} API limit (${en(original_size_bytes_2)} raw, ${en(base64_size_bytes)} base64)`;
      throw new ImageResizeError(`Unable to resize image \u2014 ${reason}, and ${z}, so it cannot be sent. ${advice}`);
    }
    throw new ImageResizeError(x ? `Unable to resize image \u2014 dimensions exceed the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.` : `Unable to resize image (${en(original_size_bytes_2)} raw, ${en(base64_size_bytes)} base64). The image exceeds the ${en(o.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`);
  }
}
async function fe(e, n) {
  let r = performance.now();
  try {
    return await e();
  } finally {
    if (n !== void 0) n.pngPaletteMs += performance.now() - r;
  }
}
async function HSs(e, n, r) {
  let o = await e3(),
    u = quality_4 => o(e).jpeg({
      quality: quality_4
    }).toBuffer(),
    s = e,
    i = 90;
  if (!/jpe?g/i.test(r)) {
    let h = await u(90);
    if (h.length < s.length) s = h;
    if (h.length <= n) return h;
    i = 89;
  }
  let p = 1,
    y;
  for (let h = 0; h < 5; h++) {
    let I = Math.floor((p + i) / 2),
      E = await u(I);
    if (E.length < s.length) s = E;
    if (E.length <= n) y = E, p = I + 1;else i = I - 1;
    if (p > i) break;
  }
  return y ?? s;
}
async function Xb({
  data: data,
  mediaType: mediaType_3,
  limits: limits,
  timings: timings_2,
  allowWebp = !0,
  from: s
}) {
  let i = Buffer.isBuffer(data) ? data : Buffer.from(data, "base64");
  if (q()) {
    let _ = Nx(i),
      w = _ ? Math.max(_.width, _.height) : 0;
    l("tengu_image_input", {
      over_byte_budget: i.length > Q4,
      over_byte_limit: i.length > Ow.targetRawSize,
      over_many_images_side_limit: w > kSt,
      over_side_limit: w > J,
      from: de(s)
    });
  }
  let m = allowWebp && limits.allowWebp !== !1,
    p = mediaType_3?.includes("/") ? mediaType_3.split("/")[1] || "png" : mediaType_3 || "png",
    y,
    h = performance.now();
  try {
    y = await gmt(i, i.length, p, limits, {
      timings: timings_2,
      directWebpMaxBytes: m ? FLn(Q4) : void 0
    });
  } catch (error) {
    if (error instanceof ImageResizeError) return C(error.message, "resize_error");
    throw error;
  } finally {
    if (timings_2 !== void 0) timings_2.resizeMs = performance.now() - h;
  }
  let buffer_9 = y.buffer;
  if (buffer_9.length > Q4) {
    let _ = performance.now();
    try {
      buffer_9 = await HSs(y.buffer, Q4, y.mediaType);
    } catch (error) {
      t(`Image byte-budget compression failed, passing through unbudgeted: ${d(error)}`, {
        level: "error"
      });
    }
    if (timings_2 !== void 0) timings_2.byteBudgetMs = performance.now() - _;
  }
  return buffer_9 = await $Ss(i, y.buffer, buffer_9, Q4, m, y.losslessWebp), {
    block: {
      type: "image",
      source: {
        type: "base64",
        media_type: fue(buffer_9),
        data: buffer_9.toString("base64")
      }
    },
    dimensions: y.dimensions
  };
}
function V() {
  if (q()) return "off";
  let e = us() ? v(He, "off") : "off";
  return e === "lossless" || e === "all" ? e : "off";
}
function FLn(e) {
  return V() === "off" ? void 0 : e;
}
async function L(e) {
  try {
    return await e();
  } catch (error) {
    if (GJe(zJe(error))) a(error);else t(`WebP step: an encode failed: ${d(error)}`, {
      level: "error"
    });
    return;
  }
}
function Q(e, n) {
  return L(async () => {
    let r = await (await e()).webp(n).toBuffer();
    if (n.lossless && !WSs(r)) throw Error("a lossless WebP encode wrote a file that is not lossless");
    return r;
  });
}
async function ye(e) {
  let n = await Q(e, {
    lossless: !0
  });
  if (n === void 0 || !WBi(n)) return n;
  let r = await e(),
    o = r === (await e()) ? void 0 : {
      compressionLevel: 0
    },
    u = await e3(),
    [s, i] = await Promise.all([L(() => r.png(o).toBuffer()), L(() => u(n).png(o).toBuffer())]);
  if (s === void 0 || i === void 0) return;
  return i.equals(s) ? n : "not_exact";
}
async function Ye(e, webp, r, o) {
  if (webp.length <= r / 2) return {
    result: "lossless",
    webp: webp
  };
  if (o !== "all") return {
    result: "too_large"
  };
  let webp_2 = await Q(e, {
    lossless: !1,
    quality: 90
  });
  if (webp_2 === void 0) return {
    result: "failed"
  };
  if (webp_2.length > r) return {
    result: "too_large"
  };
  let s = await L(() => e().jpeg({
    quality: 90
  }).toBuffer());
  if (s === void 0) return {
    result: "failed"
  };
  if (s.length > r) return {
    result: "no_yardstick"
  };
  if (webp_2.length >= s.length) return {
    result: "not_smaller"
  };
  return webp.length <= webp_2.length ? {
    result: "lossless",
    webp: webp
  } : {
    result: "lossy",
    webp: webp_2
  };
}
async function le(e, n) {
  let r = V();
  if (n === void 0 || r === "off") return {};
  let o = performance.now(),
    u = await ye(e),
    {
      result: result,
      webp: webp_3
    } = u === void 0 ? {
      result: "failed",
      webp: void 0
    } : u === "not_exact" ? {
      result: u,
      webp: void 0
    } : await Ye(e, u, n, r);
  if (l("tengu_image_webp_direct", {
    mode: f(r),
    result: f(result),
    ...(webp_3 !== void 0 && {
      sent_size_bytes: webp_3.length
    }),
    encode_ms: Math.round(performance.now() - o)
  }), webp_3 === void 0) return {
    lossless: u
  };
  return g("input_image_webp"), {
    webp: webp_3
  };
}
async function $Ss(e, n, r, o, u, s) {
  let i = V(),
    m = fue(n),
    p = m === "image/webp" && fue(e) !== "image/webp",
    y = n.length > o,
    h = u && m === "image/png" && (y ? i === "all" : i !== "off") && !jBi(n),
    I = performance.now(),
    E = async () => (await e3())(n),
    _ = !h ? void 0 : y ? await Q(E, {
      lossless: !1,
      quality: 90
    }) : s ?? (await ye(E)),
    w = _ === "not_exact" ? void 0 : _,
    x = w !== void 0 && w.length < r.length ? w : r,
    R = _ === "not_exact" ? _ : w === void 0 ? "failed" : "not_smaller";
  if (x === w) g("input_image_webp");else if (h) c("input_image_webp", R === "failed" ? "encode_failed" : R);
  return l("tengu_image_output", {
    mode: f(i),
    webp_try: f(p ? "direct" : !h ? "none" : y ? "lossy" : "lossless"),
    ...(!p && {
      resized_format: f(m),
      resized_size_bytes: n.length,
      without_webp_size_bytes: r.length
    }),
    sent_format: f(fue(x)),
    sent_size_bytes: x.length,
    ...(h && {
      webp_result: f(x === w ? "sent" : R),
      webp_encode_ms: Math.round(performance.now() - I)
    })
  }), x;
}
var weakSet = new WeakSet();
async function Cvr(data_2, limits_2, {
  timings: timings_3
} = {}) {
  let mediaType_4 = hg(data_2);
  if (mediaType_4 === null) return null;
  try {
    let {
      block: block
    } = await Xb({
      data: data_2,
      mediaType: mediaType_4,
      limits: limits_2,
      timings: timings_3,
      from: "file"
    });
    if (block.type !== "image") return null;
    return weakSet.add(block), block;
  } catch {
    return null;
  }
}
var USs = Q4,
  weakSet_2 = new WeakSet();
function IBi(e, n, r, o) {
  if (e.length === n.length) return "copy_is_original";
  let u = Nx(e),
    s = Kpo(e),
    i = Nx(n);
  if (hg(e) !== "image/jpeg") return "copy_unusable";
  if (o !== void 0 && o !== e.length || e.at(-2) !== 255 || e.at(-1) !== 217) return "copy_cut_short";
  if (e.length > USs || !HBi(e) || s !== 1 && s !== 3 || u === void 0 || u.width > Math.min(r.maxWidth, kSt) || u.height > Math.min(r.maxHeight, kSt) || r.maxImageTokens !== void 0 && aae(u.width, u.height) > r.maxImageTokens || i === void 0) return "copy_unusable";
  let m = NLn(i.width, i.height, r);
  if (Math.max(u.width, u.height) < Math.max(...m) - fFr || Math.min(u.width, u.height) < Math.min(...m) - fFr) return "copy_too_small";
  let p = {
    type: "image",
    source: {
      type: "base64",
      media_type: "image/jpeg",
      data: e.toString("base64")
    }
  };
  return weakSet_2.add(p), p;
}
async function mLt(block_2, limits_3) {
  if (weakSet_2.has(block_2)) return g("bridge_attachment_model_copy_not_resized"), {
    block: block_2
  };
  if (!D(block_2.source)) return block_2.source == null ? C("image block has no source object", "no_source") : C("image block source must be an object", "malformed_source");
  if (block_2.source.type !== "base64") return {
    block: block_2
  };
  let media_type = block_2.source.media_type;
  if (media_type != null && typeof media_type !== "string") return C("base64 image media_type must be a string", "malformed_source");
  let mediaType_5 = typeof media_type === "string" ? media_type : void 0,
    u = block_2.source.data,
    data_3;
  try {
    data_3 = Buffer.isBuffer(u) ? u : Buffer.from(u, "base64");
  } catch (error) {
    return C(d(error), "malformed_source");
  }
  return Xb({
    data: data_3,
    mediaType: mediaType_5,
    limits: limits_3,
    from: weakSet.has(block_2) ? "built_block" : "block"
  });
}
function C(e, n) {
  return l("tengu_image_resize_degraded", {
    reason: f(n)
  }), {
    block: {
      type: "text",
      text: `[Image could not be processed: ${e}]`
    }
  };
}
async function Gpo(e, n, r) {
  let o = r?.split("/")[1] || "jpeg",
    u = o === "jpg" ? "jpeg" : o;
  try {
    let s = await e3(),
      metadata = await s(e).metadata(),
      format = metadata.format || u,
      originalSize = e.length,
      imageBuffer = e;
    if (!ce.has(format === "jpg" ? "jpeg" : format)) imageBuffer = await s(e).png().toBuffer(), metadata = await s(imageBuffer).metadata(), format = "png";
    let h = {
      imageBuffer: imageBuffer,
      metadata: metadata,
      format: format,
      maxBytes: n,
      originalSize: originalSize
    };
    if (imageBuffer.length <= n) return O(imageBuffer, format, originalSize);
    let I = await Xe(h, s);
    if (I) return I;
    if (format === "png") {
      let _ = await qe(h, s);
      if (_) return _;
    }
    let E = await Ke(h, 50, s);
    if (E) return E;
    return await Ve(h, s);
  } catch (error) {
    let error_type_2 = zJe(error),
      m = d(error);
    if (GJe(error_type_2)) a(error);else t(`Image compression failed: ${m}`, {
      level: "error"
    });
    if (l("tengu_image_compress_failed", {
      original_size_bytes: e.length,
      max_bytes: n,
      error_type: error_type_2,
      error_message_hash: be(m),
      ...he(error),
      ..._e(e)
    }), e.length <= n) {
      let mediaType_6 = fue(e);
      return {
        base64: e.toString("base64"),
        mediaType: mediaType_6,
        originalSize: e.length
      };
    }
    if (error_type_2 === K) {
      let {
        reason: reason_2,
        advice: advice_2
      } = ge(e);
      throw new ImageResizeError(`Unable to compress image (${en(e.length)}) to fit within ${en(n)} \u2014 ${reason_2}. ${advice_2}`);
    }
    throw new ImageResizeError(`Unable to compress image (${en(e.length)}) to fit within ${en(n)}. Please use a smaller image.`);
  }
}
async function MBi(e, n, r) {
  let o = Math.floor(n / 0.125),
    u = Math.floor(o * 0.75);
  return Gpo(e, u, r);
}
async function DBi(e, n) {
  if (e.source.type !== "base64") return e;
  let r = Buffer.from(e.source.data, "base64");
  if (r.length <= n) return e;
  let o = await Gpo(r, n);
  return {
    type: "image",
    source: {
      type: "base64",
      media_type: o.mediaType,
      data: o.base64
    }
  };
}
function O(e, n, originalSize_2) {
  let o = n === "jpg" ? "jpeg" : n;
  return {
    base64: e.toString("base64"),
    mediaType: `image/${o}`,
    originalSize: originalSize_2
  };
}
async function Xe(e, n) {
  let r = [1, 0.75, 0.5, 0.25];
  for (let o of r) {
    let u = Math.round((e.metadata.width || 2000) * o),
      s = Math.round((e.metadata.height || 2000) * o),
      i = n(e.imageBuffer).resize(u, s, {
        fit: "inside",
        withoutEnlargement: !0
      }),
      m = pe(e.format);
    i = Je(i, m);
    let p = await i.toBuffer();
    if (p.length <= e.maxBytes) return O(p, m, e.originalSize);
  }
  return null;
}
function Je(e, n) {
  switch (n) {
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
async function qe(e, n) {
  let r = await n(e.imageBuffer).resize(800, 800, {
    fit: "inside",
    withoutEnlargement: !0
  }).png({
    compressionLevel: 9,
    palette: !0,
    colors: 64
  }).toBuffer();
  if (r.length <= e.maxBytes) return O(r, "png", e.originalSize);
  return null;
}
async function Ke(e, quality_5, r) {
  let o = await r(e.imageBuffer).resize(600, 600, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: quality_5
  }).toBuffer();
  if (o.length <= e.maxBytes) return O(o, "jpeg", e.originalSize);
  return null;
}
async function Ve(e, n) {
  let r = await n(e.imageBuffer).resize(400, 400, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: 20
  }).toBuffer();
  return O(r, "jpeg", e.originalSize);
}
function lX(e, n) {
  let {
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    displayWidth: displayWidth_2,
    displayHeight: displayHeight_2
  } = e;
  if (!originalWidth || !originalHeight || !displayWidth_2 || !displayHeight_2 || displayWidth_2 <= 0 || displayHeight_2 <= 0) {
    if (n) return `${nen}${n}]`;
    return null;
  }
  let i = originalWidth !== displayWidth_2 || originalHeight !== displayHeight_2;
  if (!i && !n) return null;
  let m = [];
  if (n) m.push(`source: ${n}`);
  if (i) {
    let p = originalWidth / displayWidth_2;
    m.push(`original ${originalWidth}x${originalHeight}, displayed at ${displayWidth_2}x${displayHeight_2}. Multiply coordinates by ${p.toFixed(2)} to map to original image.`);
  }
  return `${jpo}${m.join(", ")}]`;
}
export { jpo, nen, eee, hmt, LSs, pLt, NSs, Wpo, FSs, Evr, ren, Tvr, e3, NLn, zpo, ImageResizeError as v1, zJe, GJe, gmt, HSs, Xb, FLn, $Ss, Cvr, USs, IBi, mLt, Gpo, MBi, DBi, lX };