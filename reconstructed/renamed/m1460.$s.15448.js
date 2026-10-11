/* ==========================================================================
 * m1460.$s   [m1460_0xd973957.js @ 15448]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function $s({
  call: o,
  state: l,
  width: a,
  indent: u
}) {
  let d = [Eo({
    call: o,
    state: l,
    width: a,
    indent: u
  })];
  if (xo.includes(o.name)) return d;
  let f = `${u}  `;
  Sl(d, o.fields, {
    indent: f,
    width: a,
    maxLines: Cl
  });
  let h = `${f}${ZHo}  `;
  if (o.result && o.result.head === "") d.push([{
    text: ot(`${h}(empty)`, a),
    color: o.result.isError ? "error" : void 0,
    dimColor: !o.result.isError
  }]);else if (o.result) Ms(d, o.result, {
    firstPrefix: h,
    restPrefix: " ".repeat(ie(h)),
    width: a,
    maxLines: kl,
    color: o.result.isError ? "error" : void 0
  });else if (l === "unanswered") d.push([{
    text: ot(`${h}(none recorded)`, a),
    dimColor: !0
  }]);
  return d;
}
