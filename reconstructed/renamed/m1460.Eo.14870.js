/* ==========================================================================
 * m1460.Eo   [m1460_0xd973957.js @ 14870]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Eo({
  call: o,
  state: l,
  width: a,
  indent: u
}) {
  let d,
    f = null;
  switch (l) {
    case "running":
      d = {
        text: Fr,
        dimColor: !0
      }, f = {
        text: " \xB7 running",
        dimColor: !0
      };
      break;
    case "unanswered":
      d = {
        text: f6n,
        dimColor: !0
      }, f = {
        text: " \xB7 no result",
        dimColor: !0
      };
      break;
    case "ok":
      d = {
        text: Fr,
        color: "success"
      };
      break;
    case "error":
      d = {
        text: Fr,
        color: "error"
      }, f = {
        text: " \xB7 error",
        color: "error"
      };
      break;
  }
  let h = Math.max(1, a - ie(u) - ie(d.text) - 1 - (f ? ie(f.text) : 0)),
    x = Me(Do(o.name)),
    y = h - ie(x),
    A = y < 0 ? ot(x, h) : o.summary && y > 3 ? `${x}(${ot(Me(o.summary), y - 2)})` : x;
  return [{
    text: u
  }, d, {
    text: ` ${A}`,
    dimColor: l !== "running"
  }, ...(f ? [f] : [])];
}
