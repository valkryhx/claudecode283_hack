/* ==========================================================================
 * m0132.Yn   [m0132_0xc24a4bb.js @ 16062]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yn(e) {
  let t;
  try {
    t = e.length;
  } catch {
    throw Error("unable to read array length across the workflow VM boundary");
  }
  if (typeof t !== "number" || !Number.isSafeInteger(t)) throw Gn("array length is not a safe integer across the workflow VM boundary");
  if (t > Sx) throw Gn(`array length ${t} exceeds the maximum of ${Sx} supported across the workflow VM boundary`);
  return t;
}
