/* ==========================================================================
 * m1460.jXe   [m1460_0xd973957.js @ 10179]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function jXe(o) {
  let E = w(54),
    {
      script: l,
      defaultName: a,
      onDone: u
    } = o,
    {
      storageV5: d
    } = ke(),
    {
      columns: f
    } = ve(),
    h = G_(wl),
    [x, y] = g(a),
    [A, k] = g(a.length),
    [C, W] = g("project"),
    [L, D] = g(!1),
    [M, q] = g(null),
    [H, z] = g(null),
    B;
  if (E[0] === S) B = () => {
    q(null), z(null);
  }, E[0] = B;else B = E[0];
  let O = B,
    rt;
  if (E[1] === S) rt = G => {
    y(G), O();
  }, E[1] = rt;else rt = E[1];
  let nt = rt,
    gt;
  if (E[2] !== M || E[3] !== h || E[4] !== x || E[5] !== u || E[6] !== L || E[7] !== C || E[8] !== l || E[9] !== d) gt = () => {
    if (L) {
      return;
    }
    let Q = x.trim();
    if (!Q) {
      return;
    }
    D(!0), z(null), vo({
      name: Q,
      scope: C,
      script: l,
      overwrite: M !== null,
      cwd: h
    }, d).then(K => {
      u(`Dynamic workflow saved to ${K.path}. Invoke as /${K.name} or Workflow({name: "${K.name}"}) in future sessions.`);
    }).catch(Y => {
      let mt = Y instanceof Error ? Y.message : String(Y);
      if (mt.includes(Be)) {
        let it = mt.match(/at (.+?)\. /);
        q(it?.[1] ?? "(unknown path)");
      } else z(mt);
      D(!1);
    });
  }, E[2] = M, E[3] = h, E[4] = x, E[5] = u, E[6] = L, E[7] = C, E[8] = l, E[9] = d, E[10] = gt;else gt = E[10];
  let pt = gt,
    dt;
  if (E[11] !== u) dt = () => u(), E[11] = u, E[12] = dt;else dt = E[12];
  let at = dt,
    ut;
  if (E[13] === S) ut = {
    context: "Settings",
    isActive: !0
  }, E[13] = ut;else ut = E[13];
  ze("confirm:no", at, ut);
  let Tt;
  if (E[14] === S) Tt = St => {
    if (St.key === "tab") St.preventDefault(), W(yl), O();
  }, E[14] = Tt;else Tt = E[14];
  let yt = Tt,
    Nt;
  if (E[15] !== x) Nt = yX(x.trim() || "workflow"), E[15] = x, E[16] = Nt;else Nt = E[16];
  let Ke = Nt,
    so;
  if (E[17] !== C || E[18] !== Ke) so = C === "project" ? `.claude/workflows/${Ke}.js` : xa(bs(S7e(), `${Ke}.js`)), E[17] = C, E[18] = Ke, E[19] = so;else so = E[19];
  let Se = so;
  const We = C === "project" ? "Project" : "User";
  let de;
  if (E[20] !== We || E[21] !== Se) de = r(n, {
    dimColor: !0,
    children: [We, " scope \xB7 ", Se]
  }), E[20] = We, E[21] = Se, E[22] = de;else de = E[22];
  const ue = M ? "overwrite" : "save";
  let Je;
  if (E[23] !== ue) Je = e(F, {
    chord: "enter",
    action: ue
  }), E[23] = ue, E[24] = Je;else Je = E[24];
  let io, un;
  if (E[25] === S) io = e(F, {
    chord: "tab",
    action: "toggle scope"
  }), un = e(F, {
    chord: "escape",
    action: "cancel"
  }), E[25] = io, E[26] = un;else io = E[25], un = E[26];
  let te;
  if (E[27] !== Je) te = r(ye, {
    children: [Je, io, un]
  }), E[27] = Je, E[28] = te;else te = E[28];
  let pn;
  if (E[29] === S) pn = e(n, {
    children: "Save as:"
  }), E[29] = pn;else pn = E[29];
  let lo;
  if (E[30] === S) lo = e(n, {
    children: ">"
  }), E[30] = lo;else lo = E[30];
  const fn = !L,
    mn = !L;
  let lt;
  if (E[31] !== f || E[32] !== A || E[33] !== pt || E[34] !== x || E[35] !== fn || E[36] !== mn) lt = r(s, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [lo, e(Qn, {
      value: x,
      onChange: nt,
      onSubmit: pt,
      focus: fn,
      showCursor: mn,
      columns: f,
      cursorOffset: A,
      onChangeCursorOffset: k
    })]
  }), E[31] = f, E[32] = A, E[33] = pt, E[34] = x, E[35] = fn, E[36] = mn, E[37] = lt;else lt = E[37];
  let Yt;
  if (E[38] !== M) Yt = M && e(s, {
    marginTop: 1,
    children: r(n, {
      color: "warning",
      children: [M, " already exists. Press Enter again to overwrite, or change the name."]
    })
  }), E[38] = M, E[39] = Yt;else Yt = E[39];
  let Le;
  if (E[40] !== H) Le = H && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: H
    })
  }), E[40] = H, E[41] = Le;else Le = E[41];
  let $e;
  if (E[42] !== L) $e = L && e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Saving\u2026"
    })
  }), E[42] = L, E[43] = $e;else $e = E[43];
  let ee;
  if (E[44] !== lt || E[45] !== Yt || E[46] !== Le || E[47] !== $e) ee = r(s, {
    flexDirection: "column",
    children: [pn, lt, Yt, Le, $e]
  }), E[44] = lt, E[45] = Yt, E[46] = Le, E[47] = $e, E[48] = ee;else ee = E[48];
  let ao;
  if (E[49] !== at || E[50] !== de || E[51] !== te || E[52] !== ee) ao = e(jr, {
    onKeyDown: yt,
    children: e(ge, {
      title: "Save dynamic workflow",
      subtitle: de,
      onCancel: at,
      color: "permission",
      isCancelActive: !1,
      inputGuide: te,
      children: ee
    })
  }), E[49] = at, E[50] = de, E[51] = te, E[52] = ee, E[53] = ao;else ao = E[53];
  return ao;
}
