/* ==========================================================================
 * m0132.lu   [m0132_0xc24a4bb.js @ 117049]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var lu = {
  ...Xt(_dn, K),
  ...Xt(W2o, PVn),
  "ui.open": Us,
  "ui.close": Ds,
  "ui.blit": mi,
  "env.get": Ms,
  "env.set": js,
  "state.get": ji,
  "state.set": Li,
  "classic.PreToolUse": Bi,
  "tool.call": Ki,
  "tool.check": Wi,
  "agent.offer": $i,
  "agent.spawn": Di,
  "prompt.submit": ai,
  "prompt.fill": Os,
  "prompt.suggest": zt("prompt.suggest", "isShown"),
  "prompt.edit": si,
  "prompt.section": ii,
  "prompt.context": oi,
  "prompt.attachment": Js,
  "tool.describe": Gi,
  "command.run": _s,
  "command.describe": Ps,
  "config.set": Ns,
  "config.describe": Hs,
  "skill.prompt": pi,
  "attribution.text": Xs,
  "session.receive": Hi,
  "session.send": Ni,
  "session.compact": Ci,
  "session.attach": Ri,
  "session.detach": Pi,
  "session.measure": Ii,
  "session.end": _i,
  "plugin.register": Ks,
  "process.spawn": Gs,
  "session.start": Wt({
    event: "session.start",
    check: fr,
    checkArgument: fr
  }),
  "turn.start": Wt({
    event: "turn.start",
    check: mr,
    checkArgument: mr
  }),
  "turn.step": zi,
  "turn.complete": Xi,
  "ui.render": Ei,
  "ui.resolve": Si,
  "ui.press": Ti,
  "ui.input": ki,
  "ui.select": bi,
  "ui.message": wi,
  "ui.scroll": vi,
  "ui.focus": Fs,
  "engine.create": zs
};
