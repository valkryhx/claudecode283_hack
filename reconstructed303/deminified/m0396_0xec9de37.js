// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, d, k, Fr, wL } from "B:/~BUN/root/chunk-3aez4b53.js";
import { de, Eg } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { xne, dbt } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ma } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Ih, Nee, EG, VTo, m0s, g0s, y0s, dLt, qTo, _0s, b0s } from "B:/~BUN/root/chunk-3tj0rd0x.js";
import { ha } from "B:/~BUN/root/chunk-rsysgs10.js";
import { Yi } from "B:/~BUN/root/chunk-s39maerh.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
var pxr = "[Image: ",
  iLt = "[Image source: ";
var be = new Set([".png", ".jpg", ".jpeg", ".gif", ".bmp", ".ico", ".webp", ".tiff", ".tif", ".heic", ".heif", ".avif", ".mp4", ".mov", ".avi", ".mkv", ".webm", ".wmv", ".flv", ".m4v", ".mpeg", ".mpg", ".mp3", ".wav", ".ogg", ".flac", ".aac", ".m4a", ".wma", ".aiff", ".opus", ".zip", ".tar", ".gz", ".bz2", ".7z", ".rar", ".xz", ".z", ".tgz", ".iso", ".zst", ".lz4", ".whl", ".exe", ".dll", ".so", ".dylib", ".bin", ".o", ".a", ".obj", ".lib", ".app", ".msi", ".deb", ".rpm", ".dmg", ".apk", ".pdf", ".doc", ".docx", ".docm", ".dotx", ".dotm", ".xls", ".xlsx", ".xlsm", ".xlsb", ".xltx", ".xltm", ".ppt", ".pptx", ".pptm", ".ppsx", ".ppsm", ".potx", ".potm", ".odt", ".ods", ".odp", ".numbers", ".epub", ".ttf", ".otf", ".woff", ".woff2", ".eot", ".pyc", ".pyo", ".class", ".jar", ".war", ".ear", ".node", ".wasm", ".rlib", ".sqlite", ".sqlite3", ".db", ".mdb", ".idx", ".parquet", ".feather", ".npy", ".npz", ".pickle", ".psd", ".ai", ".eps", ".sketch", ".fig", ".xd", ".blend", ".3ds", ".max", ".swf", ".fla", ".lockb", ".dat", ".data"]);
function AOe(e) {
  let n = e.slice(e.lastIndexOf(".")).toLowerCase();
  return be.has(n);
}
var we = /[\u2018-\u201F]/;
function oft(e, n = "value") {
  let r = we.exec(e);
  if (r) {
    let o = (r[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0");
    throw new x(`Cannot safely quote ${n} in a PowerShell single-quoted string literal: it contains U+${o}, which PowerShell's tokenizer treats as a quote delimiter`, "psSingleQuotedLiteral: rejected a PowerShell quote-variant codepoint (U+2018..U+201F)");
  }
  return `'${e.replaceAll("'", "''")}'`;
}
var ye = ["image_dimensions_too_large", "image_processing_failed", "unsupported_file_format", "image_format_mismatch", "image_too_large", "file_too_large", "file_limit_exceeded", "upload_busy", "upload_timeout"],
  i3 = 8000;
function Ee(e) {
  return ye.some(item => item === e);
}
function q8e(e) {
  return Ee(e) ? e : void 0;
}
function Z(e) {
  switch (e) {
    case "image_dimensions_too_large":
      return {
        cause: `the image is more than ${i3} pixels wide or tall`,
        remedy: `send a copy scaled to at most ${i3} pixels on its longer side, or send it in a non-image format such as a .zip`
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
var L = /^upload failed: server returned (\d+)$/,
  Ie = {
    cause: "this session's cloud environment is not signed in to send files, most likely because its sign-in has expired",
    remedy: `an expired sign-in is renewed once this turn has ended and the environment has then run no tool call or ${Yi} watch for about five minutes, so do not send again or run sleep now; tell the user to wait at least five minutes without sending anything else in this chat, and then to ask for the file again. If a send after such a wait fails like this too, tell the user instead that sending files may not work in this chat for now`,
    stop: !0
  };
function ee(e, n) {
  return q8e(n) === void 0 && L.exec(e)?.[1] === "401" && Eg();
}
var te = /^upload failed: (?:network error \(|the connection closed before the server answered$|the server did not answer within \d|the transfer stalled \()/,
  ne = /\bInvalid URL\b|certificate/i,
  xe = new Set([429, 500, 502, 503, 504, 520, 521, 522, 523, 524, 529]);
function UTo(e, n, r = !1) {
  let o = q8e(n),
    u = o !== void 0 ? Z(o) : ee(e, n) ? Ie : void 0;
  if (u === void 0) return e;
  let {
      cause: cause,
      remedy: remedy,
      stop: stop
    } = u,
    h = [...(L.test(e) ? [cause] : []), ...(r && !stop ? [] : [remedy])];
  return h.length === 0 ? e : `${e} \u2014 ${h.join("; ")}`;
}
var EGn = 31457280;
function BTo(e) {
  let n = e / 1048576;
  return `${Number.isInteger(n) ? n : n.toFixed(1)} MiB`;
}
var Se = new Set([502, 503, 504, 520, 524]);
function fxr(e, n) {
  if (q8e(n) !== void 0) return !1;
  return Se.has(Number(L.exec(e)?.[1])) || te.test(e) && !ne.test(e);
}
function jTo(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}
function Pe(e) {
  return jTo(e.upload_suspected_limit_bytes) && e.size > EGn && fxr(e.upload_error, e.upload_error_code);
}
function TGn(e) {
  return Pe(e) ? `${e.upload_error} \u2014 the cause is unknown and may pass. If the same file fails like this again, it may be over the upload limit that applies to this session, which was not named and is never under ${BTo(EGn)}` : UTo(e.upload_error, e.upload_error_code);
}
function Te(e, n) {
  let r = q8e(n);
  if (r !== void 0) return Z(r).passes === !0;
  return xe.has(Number(L.exec(e)?.[1])) || te.test(e) && !ne.test(e);
}
function aLt(e) {
  let n = e.filter(item => Te(item.upload_error, item.upload_error_code));
  if (n.length === 0 || e.some(item => ee(item.upload_error, item.upload_error_code))) return "";
  let r = O(n.length, "failure"),
    o = `also tell the user they can ask you to send ${O(n.length, "it", "them")} again in a few minutes.`;
  if (n.length === e.length) return ` The ${r} may be temporary, so ${o}`;
  return ` For ${new Intl.ListFormat("en", {
    type: "conjunction"
  }).format(n.map(item => item.path))}, whose ${r} may be temporary, ${o}`;
}
var maxPixels = i3 * i3,
  Be = 4,
  Ae = ha(Be, e => e.toBuffer()),
  re = 100,
  weakMap = new WeakMap();
function ie() {
  return Promise.reject(Object.assign(Error("Image is too costly to decode"), {
    code: "ERR_IMAGE_DECODE_FAILED"
  }));
}
function M(e) {
  return {
    metadata: () => e.metadata(),
    resize: (n, r, o) => M(e.resize(n, r, o)),
    rotate: n => M(e.rotate(n)),
    jpeg: n => M(e.jpeg(n)),
    png: n => M(e.png(n)),
    webp: n => M(e.webp(n)),
    toBuffer: () => Ae(e)
  };
}
function C() {
  return {
    metadata: ie,
    resize: C,
    rotate: C,
    jpeg: C,
    png: C,
    webp: C,
    toBuffer: ie
  };
}
function ze(e) {
  let n = b0s(e) ?? e;
  if (!de()) return new Bun.Image(n);
  let r = weakMap.get(n);
  if (r === void 0) r = m0s(n, re) > re ? null : g0s(n), weakMap.set(n, r);
  return r === null ? C() : M(new Bun.Image(r, {
    maxPixels: maxPixels
  }));
}
function kG() {
  return Promise.resolve(ze);
}
var Me = 1568,
  Ce = 1568,
  je = 85,
  se = 5,
  ve = 10,
  Oe = 1398100;
function q(e, n, r = Me, o = Ce) {
  if (e <= r && n <= r && dbt(e, n) <= o) return [e, n];
  if (n > e) {
    let [f, h] = q(n, e, r, o);
    return [h, f];
  }
  let u = e / n,
    s = 1,
    a = e;
  while (s + 1 < a) {
    let f = s + a >> 1,
      h = Math.max(Math.round(f / u), 1);
    if (f <= r && dbt(f, h) <= o) s = f;else a = f;
  }
  return [s, Math.max(Math.round(s / u), 1)];
}
function Y(e, n, r) {
  if (e > r.maxWidth) n = Math.round(n * r.maxWidth / e), e = r.maxWidth;
  if (n > r.maxHeight) e = Math.round(e * r.maxHeight / n), n = r.maxHeight;
  return r.maxImageTokens === void 0 ? [e, n] : q(e, n, 1 / 0, r.maxImageTokens);
}
async function mxr(e) {
  let n = await kG(),
    r = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    o = await n(r).metadata(),
    [w_2, h_2] = q(o.width, o.height),
    a = w_2 !== o.width || h_2 !== o.height,
    quality = je + se,
    jpeg;
  do {
    quality -= se;
    let w = n(r);
    if (a) w = w.resize(w_2, h_2, {
      fit: "fill"
    });
    jpeg = await w.jpeg({
      quality: quality
    }).toBuffer();
  } while (jpeg.length * 4 > Oe * 3 && quality > ve);
  return {
    jpeg: jpeg,
    w: w_2,
    h: h_2
  };
}
var ke = 2,
  le = 3,
  Ne = 4,
  $e = 5,
  We = 8,
  De = 9,
  J = 10,
  Le = "tengu_parsed_eagle",
  fe = new Set(["png", "jpeg", "gif", "webp"]);
function ce(e) {
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
function me(e) {
  if (VTo(e) === 4) return {
    reason: "it is a CMYK JPEG, which Claude Code cannot decode",
    advice: "Re-save it as an RGB PNG or JPEG and try again."
  };
  if (dLt(e)) return {
    reason: "it is an animated WebP whose first frame Claude Code cannot decode",
    advice: "Save its first frame as a PNG or JPEG and try again."
  };
  return {
    reason: "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)",
    advice: "Re-save it as a PNG or JPEG and try again."
  };
}
function JBe(e) {
  switch (k(e)) {
    case "ERR_IMAGE_DECODE_FAILED":
      return J;
    case "ERR_IMAGE_UNKNOWN_FORMAT":
      return ke;
    case "ERR_IMAGE_TOO_MANY_PIXELS":
      return Ne;
    case "ERR_IMAGE_FORMAT_UNSUPPORTED":
      return De;
    case "EACCES":
    case "EPERM":
      return We;
    case "ENOMEM":
      return $e;
    default:
      return le;
  }
}
function QBe(e) {
  return e === le;
}
function pe(e) {
  if (!(e instanceof Error)) return {
    error_name: c(typeof e),
    error_code: b("")
  };
  return {
    error_name: wL(e.name !== "Error" ? e.name : e.constructor?.name) ?? b("Error"),
    error_code: Fr(e) ?? b("")
  };
}
function ge(e) {
  let n = Ih(e);
  return {
    ...(n === "image/jpeg" && {
      jpeg_components: VTo(e)
    }),
    ...(n === "image/webp" && {
      webp_animated: dLt(e)
    })
  };
}
function he(e) {
  let n = 5381;
  for (let r = 0; r < e.length; r++) n = (n << 5) + n + e.charCodeAt(r) | 0;
  return n >>> 0;
}
function F(e) {
  return {
    rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth,
    rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight
  };
}
async function K8e(buffer_8, original_size_bytes_2, r, o, {
  timings: timings,
  directWebpMaxBytes: directWebpMaxBytes
} = {}) {
  if (buffer_8.length === 0) throw new ImageResizeError("Image file is empty (0 bytes)");
  try {
    let a = await kG(),
      f = await a(buffer_8).metadata(),
      h = f.format ?? r,
      mediaType = h === "jpg" ? "jpeg" : h,
      buffer = buffer_8,
      original_size_bytes = original_size_bytes_2;
    if (!fe.has(mediaType)) {
      let {
          width: width,
          height: height
        } = f,
        A = width === void 0 || height === void 0 ? void 0 : Y(width, height, o),
        z = A !== void 0 && A[0] === width && A[1] === height ? (await ue(() => a(buffer_8), directWebpMaxBytes)).webp : void 0;
      buffer = z ?? (await a(buffer_8).png().toBuffer()), original_size_bytes = buffer.length, f = await a(buffer).metadata(), mediaType = z ? "webp" : "png";
    }
    if (!f.width || !f.height) {
      let T = EG(buffer),
        {
          rejectMaxWidth: rejectMaxWidth,
          rejectMaxHeight: rejectMaxHeight
        } = F(o);
      if (T === void 0 || T.width > rejectMaxWidth || T.height > rejectMaxHeight) throw new ImageResizeError(`Unable to resize image \u2014 could not verify image dimensions are within the ${rejectMaxWidth}x${rejectMaxHeight}px API limit.`);
      if (original_size_bytes > o.targetRawSize) return i("tengu_image_resize", {
        over_byte_limit: !0,
        over_dimension_limit: !1,
        resized_for_tokens: !1,
        original_size_bytes: original_size_bytes
      }), {
        buffer: await a(buffer).jpeg({
          quality: 80
        }).toBuffer(),
        mediaType: "jpeg"
      };
      return {
        buffer: buffer,
        mediaType: mediaType
      };
    }
    let _ = f.width,
      I = f.height,
      [y, S] = Y(_, I, o),
      B = y !== _ || S !== I;
    if (original_size_bytes <= o.targetRawSize && !B) return {
      buffer: buffer,
      mediaType: mediaType,
      dimensions: {
        originalWidth: _,
        originalHeight: I,
        displayWidth: y,
        displayHeight: S
      }
    };
    let D = mediaType === "png";
    if (i("tengu_image_resize", {
      over_byte_limit: original_size_bytes > o.targetRawSize,
      over_dimension_limit: _ > o.maxWidth || I > o.maxHeight,
      resized_for_tokens: B && y < o.maxWidth && S < o.maxHeight,
      original_size_bytes: original_size_bytes,
      original_width: _,
      original_height: I,
      target_width: y,
      target_height: S,
      max_width: o.maxWidth,
      max_height: o.maxHeight,
      max_image_tokens: o.maxImageTokens
    }), !B && original_size_bytes > o.targetRawSize) {
      if (D) {
        let buffer_2 = await ae(() => a(buffer).png({
          compressionLevel: 9,
          palette: !0
        }).toBuffer(), timings);
        if (buffer_2.length <= o.targetRawSize) return {
          buffer: buffer_2,
          mediaType: "png",
          dimensions: {
            originalWidth: _,
            originalHeight: I,
            displayWidth: y,
            displayHeight: S
          }
        };
      }
      for (let quality_2 of [80, 60, 40, 20]) {
        let buffer_3 = await a(buffer).jpeg({
          quality: quality_2
        }).toBuffer();
        if (buffer_3.length <= o.targetRawSize) return {
          buffer: buffer_3,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: _,
            originalHeight: I,
            displayWidth: y,
            displayHeight: S
          }
        };
      }
    }
    t(`Resizing to ${y}x${S}`);
    let j = B && directWebpMaxBytes !== void 0 && _ <= F(o).rejectMaxWidth && I <= F(o).rejectMaxHeight && qTo(buffer) ? "png" : ce(mediaType),
      G = a(buffer).resize(y, S, {
        fit: "inside",
        withoutEnlargement: !0
      });
    if (j !== mediaType) G = G.png();
    let H = j === "png" ? await ue(() => a(buffer).resize(y, S, {
        fit: "inside",
        withoutEnlargement: !0
      }), directWebpMaxBytes) : {},
      buffer_7 = H.webp ?? (await G.toBuffer());
    if (buffer_7.length > o.targetRawSize) {
      if (D) {
        let buffer_4 = await ae(() => a(buffer).resize(y, S, {
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
            originalWidth: _,
            originalHeight: I,
            displayWidth: y,
            displayHeight: S
          }
        };
      }
      for (let quality_3 of [80, 60, 40, 20]) {
        let buffer_5 = await a(buffer).resize(y, S, {
          fit: "inside",
          withoutEnlargement: !0
        }).jpeg({
          quality: quality_3
        }).toBuffer();
        if (buffer_5.length <= o.targetRawSize) return {
          buffer: buffer_5,
          mediaType: "jpeg",
          dimensions: {
            originalWidth: _,
            originalHeight: I,
            displayWidth: y,
            displayHeight: S
          }
        };
      }
      let displayWidth = Math.min(y, 1000),
        displayHeight = Math.round(S * displayWidth / Math.max(y, 1));
      t("Still too large, compressing with JPEG");
      let buffer_6 = await a(buffer).resize(displayWidth, displayHeight, {
        fit: "inside",
        withoutEnlargement: !0
      }).jpeg({
        quality: 20
      }).toBuffer();
      return t(`JPEG compressed buffer size: ${buffer_6.length}`), {
        buffer: buffer_6,
        mediaType: "jpeg",
        dimensions: {
          originalWidth: _,
          originalHeight: I,
          displayWidth: displayWidth,
          displayHeight: displayHeight
        }
      };
    }
    return {
      buffer: buffer_7,
      mediaType: H.webp ? "webp" : j,
      dimensions: {
        originalWidth: _,
        originalHeight: I,
        displayWidth: y,
        displayHeight: S
      },
      losslessWebp: H.lossless
    };
  } catch (error) {
    if (error instanceof ImageResizeError) throw error;
    let error_type = JBe(error),
      h = d(error);
    if (QBe(error_type)) l(error);else t(`Image resize failed: ${h}`, {
      level: "error"
    });
    i("tengu_image_resize_failed", {
      original_size_bytes: original_size_bytes_2,
      error_type: error_type,
      error_message_hash: he(h),
      ...pe(error),
      ...ge(buffer_8)
    });
    let mediaType_2 = Nee(buffer_8).slice(6),
      base64_size_bytes = Math.ceil(original_size_bytes_2 * 4 / 3),
      _ = EG(buffer_8);
    if (_ === void 0) throw new ImageResizeError("Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " + "Please convert the image to PNG, JPEG, GIF, or WebP.");
    let {
        rejectMaxWidth: rejectMaxWidth_2,
        rejectMaxHeight: rejectMaxHeight_2
      } = F(o),
      S = _.width > rejectMaxWidth_2 || _.height > rejectMaxHeight_2;
    if (base64_size_bytes <= o.maxBase64Size && !S) return i("tengu_image_resize_fallback", {
      original_size_bytes: original_size_bytes_2,
      base64_size_bytes: base64_size_bytes,
      error_type: error_type
    }), {
      buffer: buffer_8,
      mediaType: mediaType_2
    };
    if (error_type === J) {
      let {
          reason: reason,
          advice: advice
        } = me(buffer_8),
        j = S ? `at ${_.width}x${_.height}px it is over the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit` : `it is over the ${Zt(o.maxBase64Size)} API limit (${Zt(original_size_bytes_2)} raw, ${Zt(base64_size_bytes)} base64)`;
      throw new ImageResizeError(`Unable to resize image \u2014 ${reason}, and ${j}, so it cannot be sent. ${advice}`);
    }
    throw new ImageResizeError(S ? `Unable to resize image \u2014 dimensions exceed the ${rejectMaxWidth_2}x${rejectMaxHeight_2}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.` : `Unable to resize image (${Zt(original_size_bytes_2)} raw, ${Zt(base64_size_bytes)} base64). The image exceeds the ${Zt(o.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`);
  }
}
async function ae(e, n) {
  let r = performance.now();
  try {
    return await e();
  } finally {
    if (n !== void 0) n.pngPaletteMs += performance.now() - r;
  }
}
async function WTo(e, n, r) {
  let o = await kG(),
    u = quality_4 => o(e).jpeg({
      quality: quality_4
    }).toBuffer(),
    s = e,
    a = 90;
  if (!/jpe?g/i.test(r)) {
    let m = await u(90);
    if (m.length < s.length) s = m;
    if (m.length <= n) return m;
    a = 89;
  }
  let h = 1,
    w;
  for (let m = 0; m < 5; m++) {
    let P = Math.floor((h + a) / 2),
      _ = await u(P);
    if (_.length < s.length) s = _;
    if (_.length <= n) w = _, h = P + 1;else a = P - 1;
    if (h > a) break;
  }
  return w ?? s;
}
async function jb({
  data: data,
  mediaType: mediaType_3,
  limits: limits,
  timings: timings_2,
  allowWebp = !0
}) {
  let s = Buffer.isBuffer(data) ? data : Buffer.from(data, "base64"),
    a = allowWebp && limits.allowWebp !== !1,
    f = mediaType_3?.includes("/") ? mediaType_3.split("/")[1] || "png" : mediaType_3 || "png",
    h,
    w = performance.now();
  try {
    h = await K8e(s, s.length, f, limits, {
      timings: timings_2,
      directWebpMaxBytes: a ? qrn(xne) : void 0
    });
  } catch (error) {
    if (error instanceof ImageResizeError) return v(error.message, "resize_error");
    throw error;
  } finally {
    if (timings_2 !== void 0) timings_2.resizeMs = performance.now() - w;
  }
  let buffer_9 = h.buffer;
  if (buffer_9.length > xne) {
    let _ = performance.now();
    try {
      buffer_9 = await WTo(h.buffer, xne, h.mediaType);
    } catch (error) {
      t(`Image byte-budget compression failed, passing through unbudgeted: ${d(error)}`, {
        level: "error"
      });
    }
    if (timings_2 !== void 0) timings_2.byteBudgetMs = performance.now() - _;
  }
  return buffer_9 = await zTo(s, h.buffer, buffer_9, xne, a, h.losslessWebp), {
    block: {
      type: "image",
      source: {
        type: "base64",
        media_type: Nee(buffer_9),
        data: buffer_9.toString("base64")
      }
    },
    dimensions: h.dimensions
  };
}
function X() {
  if (de()) return "off";
  let e = Ma() ? E(Le, "off") : "off";
  return e === "lossless" || e === "all" ? e : "off";
}
function qrn(e) {
  return X() === "off" ? void 0 : e;
}
async function U(e) {
  try {
    return await e();
  } catch (error) {
    if (QBe(JBe(error))) l(error);else t(`WebP step: an encode failed: ${d(error)}`, {
      level: "error"
    });
    return;
  }
}
function K(e, n) {
  return U(async () => {
    let r = await (await e()).webp(n).toBuffer();
    if (n.lossless && !qTo(r)) throw Error("a lossless WebP encode wrote a file that is not lossless");
    return r;
  });
}
async function _e(e) {
  let n = await K(e, {
    lossless: !0
  });
  if (n === void 0 || !_0s(n)) return n;
  let r = await e(),
    o = r === (await e()) ? void 0 : {
      compressionLevel: 0
    },
    u = await kG(),
    [s, a] = await Promise.all([U(() => r.png(o).toBuffer()), U(() => u(n).png(o).toBuffer())]);
  if (s === void 0 || a === void 0) return;
  return a.equals(s) ? n : "not_exact";
}
async function Fe(e, webp, r, o) {
  if (webp.length <= r / 2) return {
    result: "lossless",
    webp: webp
  };
  if (o !== "all") return {
    result: "too_large"
  };
  let webp_2 = await K(e, {
    lossless: !1,
    quality: 90
  });
  if (webp_2 === void 0) return {
    result: "failed"
  };
  if (webp_2.length > r) return {
    result: "too_large"
  };
  let s = await U(() => e().jpeg({
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
async function ue(e, n) {
  let r = X();
  if (n === void 0 || r === "off") return {};
  let o = performance.now(),
    u = await _e(e),
    {
      result: result,
      webp: webp_3
    } = u === void 0 ? {
      result: "failed",
      webp: void 0
    } : u === "not_exact" ? {
      result: u,
      webp: void 0
    } : await Fe(e, u, n, r);
  if (i("tengu_image_webp_direct", {
    mode: c(r),
    result: c(result),
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
async function zTo(e, n, r, o, u, s) {
  let a = X(),
    f = Nee(n),
    h = f === "image/webp" && Nee(e) !== "image/webp",
    w = n.length > o,
    m = u && f === "image/png" && (w ? a === "all" : a !== "off") && !y0s(n),
    P = performance.now(),
    _ = async () => (await kG())(n),
    I = !m ? void 0 : w ? await K(_, {
      lossless: !1,
      quality: 90
    }) : s ?? (await _e(_)),
    y = I === "not_exact" ? void 0 : I,
    S = y !== void 0 && y.length < r.length ? y : r,
    B = I === "not_exact" ? I : y === void 0 ? "failed" : "not_smaller";
  if (S === y) g("input_image_webp");else if (m) p("input_image_webp", B === "failed" ? "encode_failed" : B);
  return i("tengu_image_output", {
    mode: c(a),
    webp_try: c(h ? "direct" : !m ? "none" : w ? "lossy" : "lossless"),
    ...(!h && {
      resized_format: c(f),
      resized_size_bytes: n.length,
      without_webp_size_bytes: r.length
    }),
    sent_format: c(Nee(S)),
    sent_size_bytes: S.length,
    ...(m && {
      webp_result: c(S === y ? "sent" : B),
      webp_encode_ms: Math.round(performance.now() - P)
    })
  }), S;
}
async function d0s(data_2, limits_2, {
  timings: timings_3
} = {}) {
  let mediaType_4 = Ih(data_2);
  if (mediaType_4 === null) return null;
  try {
    let {
      block: block
    } = await jb({
      data: data_2,
      mediaType: mediaType_4,
      limits: limits_2,
      timings: timings_3
    });
    return block.type === "image" ? block : null;
  } catch {
    return null;
  }
}
async function lLt(block_2, limits_3) {
  if (!N(block_2.source)) return block_2.source == null ? v("image block has no source object", "no_source") : v("image block source must be an object", "malformed_source");
  if (block_2.source.type !== "base64") return {
    block: block_2
  };
  let media_type = block_2.source.media_type;
  if (media_type != null && typeof media_type !== "string") return v("base64 image media_type must be a string", "malformed_source");
  let mediaType_5 = typeof media_type === "string" ? media_type : void 0,
    u = block_2.source.data,
    data_3;
  try {
    data_3 = Buffer.isBuffer(u) ? u : Buffer.from(u, "base64");
  } catch (error) {
    return v(d(error), "malformed_source");
  }
  return jb({
    data: data_3,
    mediaType: mediaType_5,
    limits: limits_3
  });
}
function v(e, n) {
  return i("tengu_image_resize_degraded", {
    reason: c(n)
  }), {
    block: {
      type: "text",
      text: `[Image could not be processed: ${e}]`
    }
  };
}
async function gxr(e, n, r) {
  let o = r?.split("/")[1] || "jpeg",
    u = o === "jpg" ? "jpeg" : o;
  try {
    let s = await kG(),
      metadata = await s(e).metadata(),
      format = metadata.format || u,
      originalSize = e.length,
      imageBuffer = e;
    if (!fe.has(format === "jpg" ? "jpeg" : format)) imageBuffer = await s(e).png().toBuffer(), metadata = await s(imageBuffer).metadata(), format = "png";
    let m = {
      imageBuffer: imageBuffer,
      metadata: metadata,
      format: format,
      maxBytes: n,
      originalSize: originalSize
    };
    if (imageBuffer.length <= n) return W(imageBuffer, format, originalSize);
    let P = await Ue(m, s);
    if (P) return P;
    if (format === "png") {
      let I = await He(m, s);
      if (I) return I;
    }
    let _ = await qe(m, 50, s);
    if (_) return _;
    return await Ye(m, s);
  } catch (error) {
    let error_type_2 = JBe(error),
      f = d(error);
    if (QBe(error_type_2)) l(error);else t(`Image compression failed: ${f}`, {
      level: "error"
    });
    if (i("tengu_image_compress_failed", {
      original_size_bytes: e.length,
      max_bytes: n,
      error_type: error_type_2,
      error_message_hash: he(f),
      ...pe(error),
      ...ge(e)
    }), e.length <= n) {
      let mediaType_6 = Nee(e);
      return {
        base64: e.toString("base64"),
        mediaType: mediaType_6,
        originalSize: e.length
      };
    }
    if (error_type_2 === J) {
      let {
        reason: reason_2,
        advice: advice_2
      } = me(e);
      throw new ImageResizeError(`Unable to compress image (${Zt(e.length)}) to fit within ${Zt(n)} \u2014 ${reason_2}. ${advice_2}`);
    }
    throw new ImageResizeError(`Unable to compress image (${Zt(e.length)}) to fit within ${Zt(n)}. Please use a smaller image.`);
  }
}
async function c0s(e, n, r) {
  let o = Math.floor(n / 0.125),
    u = Math.floor(o * 0.75);
  return gxr(e, u, r);
}
async function u0s(e, n) {
  if (e.source.type !== "base64") return e;
  let r = Buffer.from(e.source.data, "base64");
  if (r.length <= n) return e;
  let o = await gxr(r, n);
  return {
    type: "image",
    source: {
      type: "base64",
      media_type: o.mediaType,
      data: o.base64
    }
  };
}
function W(e, n, originalSize_2) {
  let o = n === "jpg" ? "jpeg" : n;
  return {
    base64: e.toString("base64"),
    mediaType: `image/${o}`,
    originalSize: originalSize_2
  };
}
async function Ue(e, n) {
  let r = [1, 0.75, 0.5, 0.25];
  for (let o of r) {
    let u = Math.round((e.metadata.width || 2000) * o),
      s = Math.round((e.metadata.height || 2000) * o),
      a = n(e.imageBuffer).resize(u, s, {
        fit: "inside",
        withoutEnlargement: !0
      }),
      f = ce(e.format);
    a = Ge(a, f);
    let h = await a.toBuffer();
    if (h.length <= e.maxBytes) return W(h, f, e.originalSize);
  }
  return null;
}
function Ge(e, n) {
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
async function He(e, n) {
  let r = await n(e.imageBuffer).resize(800, 800, {
    fit: "inside",
    withoutEnlargement: !0
  }).png({
    compressionLevel: 9,
    palette: !0,
    colors: 64
  }).toBuffer();
  if (r.length <= e.maxBytes) return W(r, "png", e.originalSize);
  return null;
}
async function qe(e, quality_5, r) {
  let o = await r(e.imageBuffer).resize(600, 600, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: quality_5
  }).toBuffer();
  if (o.length <= e.maxBytes) return W(o, "jpeg", e.originalSize);
  return null;
}
async function Ye(e, n) {
  let r = await n(e.imageBuffer).resize(400, 400, {
    fit: "inside",
    withoutEnlargement: !0
  }).jpeg({
    quality: 20
  }).toBuffer();
  return W(r, "jpeg", e.originalSize);
}
function Lee(e, n) {
  let {
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    displayWidth: displayWidth_2,
    displayHeight: displayHeight_2
  } = e;
  if (!originalWidth || !originalHeight || !displayWidth_2 || !displayHeight_2 || displayWidth_2 <= 0 || displayHeight_2 <= 0) {
    if (n) return `${iLt}${n}]`;
    return null;
  }
  let a = originalWidth !== displayWidth_2 || originalHeight !== displayHeight_2;
  if (!a && !n) return null;
  let f = [];
  if (n) f.push(`source: ${n}`);
  if (a) {
    let h = originalWidth / displayWidth_2;
    f.push(`original ${originalWidth}x${originalHeight}, displayed at ${displayWidth_2}x${displayHeight_2}. Multiply coordinates by ${h.toFixed(2)} to map to original image.`);
  }
  return `${pxr}${f.join(", ")}]`;
}
export { pxr, iLt, AOe, i3, q8e, UTo, EGn, BTo, fxr, jTo, TGn, aLt, kG, mxr, ImageResizeError as TH, JBe, QBe, K8e, WTo, jb, qrn, zTo, d0s, lLt, gxr, c0s, u0s, Lee, oft };