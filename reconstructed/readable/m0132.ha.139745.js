/* ==============================================================================
 * m0132.ha   [m0132_0xc24a4bb.js @ 139745]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 139745
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var ha = (e) => ({
  root: e,
  byteLength: (t) => Buffer.byteLength(t, "utf8"),
  encodeInto: (t, o) => {
    new TextEncoder().encodeInto(t, o)
  },
  decodeUtf8: (t, o) => new TextDecoder("utf-8", {
    fatal: o
  }).decode(t),
  parseUrl: (t, o) => {
    try {
      return vn(new URL(t, o))
    } catch {
      return null
    }
  },
  setUrlPart: (t, o, r) => {
    try {
      let n = new URL(t);
      return n[o] = r, vn(n)
    } catch {
      return null
    }
  },
  atob: (t) => globalThis.atob(t),
  btoa: (t) => globalThis.btoa(t),
  randomUUID: () => crypto.randomUUID(),
  fillRandom: (t) => {
    crypto.getRandomValues(t)
  },
  digestInto: async (t, o, r) => {
    let n = await crypto.subtle.digest(t, o),
      s = r(n.byteLength);
    return new Uint8Array(s).set(new Uint8Array(n)), s
  },
  now: () => performance.now()
});
