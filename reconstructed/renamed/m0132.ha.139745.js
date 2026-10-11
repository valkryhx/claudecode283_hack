/* ==========================================================================
 * m0132.ha   [m0132_0xc24a4bb.js @ 139745]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ha = e => ({
  root: e,
  byteLength: t => Buffer.byteLength(t, "utf8"),
  encodeInto: (t, o) => {
    new TextEncoder().encodeInto(t, o);
  },
  decodeUtf8: (t, o) => new TextDecoder("utf-8", {
    fatal: o
  }).decode(t),
  parseUrl: (t, o) => {
    try {
      return vn(new URL(t, o));
    } catch {
      return null;
    }
  },
  setUrlPart: (t, o, r) => {
    try {
      let n = new URL(t);
      return n[o] = r, vn(n);
    } catch {
      return null;
    }
  },
  atob: t => globalThis.atob(t),
  btoa: t => globalThis.btoa(t),
  randomUUID: () => crypto.randomUUID(),
  fillRandom: t => {
    crypto.getRandomValues(t);
  },
  digestInto: async (t, o, r) => {
    let n = await crypto.subtle.digest(t, o),
      s = r(n.byteLength);
    return new Uint8Array(s).set(new Uint8Array(n)), s;
  },
  now: () => performance.now()
});
