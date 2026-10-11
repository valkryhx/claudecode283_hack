/* ==============================================================================
 * m1460.w1e   [m1460_0xd973957.js @ 38333]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 38333
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function w1e({
  workflow: o,
  onDone: l,
  onBack: a,
  onKill: u,
  onSkipAgent: d,
  onRetryAgent: f,
  onPause: h,
  onResume: x,
  initialPhaseIndex: y,
  promptVisibleBelow: A = !1
}) {
  vi("workflow-detail-dialog");
  let {
    availableRows: k,
    width: C,
    rows: W
  } = SSn(A), L = Math.max(12, C - 6), D = O1e(o), M = X(() => GQn(o), [o.workflowProgress, o.phases]), q = X(() => KQn(M, o.agentCount), [M, o.agentCount]), [H, z] = g(() => y !== void 0 ? Math.max(0, y) : 0), [E, B] = g(0), [O, rt] = g(y !== void 0 ? "agents" : "phases"), [G, nt] = g(!1), [gt, Q] = g({
    scroll: 0,
    expanded: !1
  }), {
    scroll: K,
    expanded: Y
  } = gt, [mt, it] = g("all"), pt = Math.min(H, Math.max(0, M.length - 1)), dt = M[pt], at = o.status === "running", ut = X(() => {
    if (!dt || mt === "all" || O === "phases") return dt;
    return {
      ...dt,
      agents: dt.agents.filter((j) => Dt(j, at) === mt)
    }
  }, [dt, mt, O, at]), Tt = ut ? Math.min(E, Math.max(0, ut.agents.length - 1)) : 0, [St, yt] = g(!1), Nt = o.script.length > 0, Ke = X(() => {
    if (!Nt) return "";
    let j = Fy(o.script);
    if (!("error" in j)) return j.meta.name;
    return yX(o.summary ?? o.description)
  }, [Nt, o.script, o.summary, o.description]), so = X(() => YQn(o), [o.script, o.description, o.summary]), {
    name: Se,
    subtext: We,
    stats: de
  } = XQn(o, so, q, D);

  function ue() {
    Q({
      scroll: 0,
      expanded: !1
    })
  }

  function Je(j) {
    z((Ct) => Pt(Pt(Ct, 0, M.length - 1) + j, 0, M.length - 1)), B(0), ue()
  }

  function io(j) {
    if (!ut) return;
    B((Ct) => Pt(Pt(Ct, 0, ut.agents.length - 1) + j, 0, ut.agents.length - 1)), ue()
  }

  function un(j) {
    Q((Ct) => ({
      ...Ct,
      scroll: Math.max(0, Ct.scroll + j)
    }))
  }

  function te(j) {
    if (O === "phases") {
      Je(j);
      return
    }
    io(j)
  }

  function pn() {
    if (nt(!1), O === "agent") {
      rt("agents");
      return
    }
    if (O === "agents") {
      rt("phases");
      return
    }
    if (a) a();
    else l()
  }

  function lo() {
    if (dt && dt.agents.length > 0) B(0), it("all"), rt("agents")
  }

  function fn() {
    if (!lt || !dt) return;
    if (mt !== "all") it("all"), B(dt.agents.indexOf(lt));
    if (ue(), hn === "loading") nt(!0);
    else rt("agent")
  }

  function mn() {
    if (!dt || G) return;
    let j = new Set(dt.agents.map((Ct) => Dt(Ct, at)));
    it((Ct) => {
      let $t = Jt.indexOf(Ct);
      for (let ne = 0; ne < Jt.length; ne++) {
        $t = ($t + 1) % Jt.length;
        let ls = Jt[$t];
        if (ls === "all" || j.has(ls)) break
      }
      return Jt[$t]
    }), B(0), ue()
  }
  let lt = O !== "phases" && ut ? ut.agents[Tt] : void 0,
    Yt = lt ? Dt(lt, at) : void 0,
    Le = !!lt && It(lt) && !!lt.agentId && (!!d || !!u),
    $e = !!lt && It(lt) && !!lt.agentId && !!f,
    ee = C - 9,
    ao = ut ? Math.max(14, ...ut.agents.map((j) => 4 + ie(j.label))) : 14,
    co = Math.max(12, Math.min(30, ao, ee - 30)),
    gn = ee - co,
    uo = O === "agent" && M.length > 0 && C >= 64 && gn >= 30,
    zr = uo ? gn : L,
    hn = Br(o.workflowRunId, lt?.agentId, lt?.lastProgressAt, lt?.promptFramed),
    Ei = _r(G ? pi : null);
  if (G) {
    if (!lt) nt(!1);
    else if (hn !== "loading" || Ei) nt(!1), rt("agent")
  }
  let Qr = Yt === "queued" || Yt === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Ue = X(() => O === "agent" && lt && Yt ? Si({
      agent: lt,
      status: Yt,
      transcript: hn,
      expanded: Y,
      width: zr,
      nowMs: Qr
    }) : {
      lines: [],
      expandable: !1,
      folds: [],
      detailExpandable: !1
    }, [O, lt, Yt, hn, Y, zr, Qr]),
    xn = Ue.lines;

  function Di() {
    if (!lt || !It(lt)) return;
    if (lt.agentId && d) d(lt.agentId);
    else if (u) u()
  }

  function Ni() {
    if (lt && It(lt) && lt.agentId) f?.(lt.agentId)
  }
  Wt({
    "confirm:previous": () => te(-1),
    "confirm:next": () => te(1)
  }, {
    context: "Confirmation"
  });
  let po = o.status === "running" && !!h,
    fo = o.status === "paused" && !!o.scriptPath && !!o.workflowRunId && !!x,
    Xr = o.status === "running" && !!u && O === "phases";

  function Fi() {
    if (po) h?.();
    else if (fo) x?.(CTn(o))
  }
  let ji = (j) => {
      if (j.ctrl || j.meta) return;
      if (j.key === "j")
        if (j.preventDefault(), O === "agent") un(1);
        else te(1);
      else if (j.key === "k")
        if (j.preventDefault(), O === "agent") un(-1);
        else te(-1);
      else if (j.key === "return" || j.key === "right") {
        if (j.preventDefault(), O === "phases") lo();
        else if (O === "agents") fn();
        else if (j.key === "return" && Ue.expandable) {
          if (!Y && Ue.detailExpandable) _("workflow_agent_card_detail");
          let {
            folds: Ct
          } = Ue;
          Q(({
            scroll: $t,
            expanded: ne
          }) => ({
            expanded: !ne,
            scroll: ne ? Ti($t, Ct) : ki($t, Ct)
          }))
        }
      } else if (j.key === "left") j.preventDefault(), pn();
      else if (j.key === "r" && $e) j.preventDefault(), Ni();
      else if (j.key === "x" && Le) j.preventDefault(), Di();
      else if (j.key === "x" && Xr) j.preventDefault(), u?.();
      else if (j.key === " ") j.preventDefault(), l();
      else if (j.key === "p" && (po || fo)) j.preventDefault(), Fi();
      else if (j.key === "f" && O === "agents") j.preventDefault(), mn();
      else if (j.key === "s" && Nt) j.preventDefault(), yt(!0)
    },
    bn = M.length > 0;
  if (St) return e(jXe, {
    script: o.script,
    defaultName: Ke,
    onDone: (j) => {
      if (j) l(j);
      else yt(!1)
    }
  });
  let zt = k < 18,
    Zr = k - (zt ? 8 : 11),
    ts = Math.max(1, Zr - 3),
    mo = M.length > ts,
    es = mo ? Math.max(1, ts - 1) : M.length,
    Oi = Math.max(1, Zr - es - (mo ? 1 : 0)),
    wn = Bt(pt, M.length, es),
    qi = Math.max(14, ...M.map((j, Ct) => {
      let $t = j.status === "done" ? Z.tick : j.status === "failed" ? Z.cross : String(Ct + 1),
        ne = j.totalCount > 0 ? `${j.doneCount}/${j.totalCount}` : "";
      return 2 + ie($t) + 1 + ie(j.title) + (ne ? 1 + ie(ne) : 0)
    })),
    ns = Math.max(12, Math.min(34, qi, ee - 24)),
    os = ee - ns,
    Hi = O !== "agent" && bn && C >= 64 && os >= 20,
    go = Math.max(1, k - (zt ? 7 : 8)),
    rs = Math.max(3, k - (zt ? 8 : 9)),
    ss = uo ? go : rs,
    is = Math.max(0, xn.length - ss);
  if (K > is) Q({
    scroll: is,
    expanded: Y
  });
  let Ve = mt !== "all" && O !== "phases" ? ro[mt].toLowerCase() : void 0,
    Lt = [];
  if (O === "agent") {
    if (Lt.push(`${Yq}${w$} agent`), xn.length > ss) Lt.push("j/k scroll");
    if (Ue.expandable) Lt.push(`${eUe} ${Y?"collapse":"expand"}`)
  } else if (bn) Lt.push(`${Yq}${w$} select`);
  if (Le) Lt.push("x stop");
  if (Xr) Lt.push("x stop workflow");
  if ($e) Lt.push("r restart");
  if (po) Lt.push("p pause");
  else if (fo) Lt.push("p resume");
  if (O === "agents" && bn) Lt.push(Ve ? `f filter: ${Ve}` : "f filter");
  if (Lt.push("esc back"), Nt) Lt.push("s save");
  let Ki = Lt.join(" \xB7 ");
  return e(jr, {
    onKeyDown: ji,
    children: e(ge, {
      title: null,
      hideBorder: !0,
      hideInputGuide: !0,
      onCancel: pn,
      color: "text",
      children: r(s, {
        flexDirection: "column",
        width: C,
        minHeight: Math.max(zt ? 8 : 12, Math.min(k - 1, W - 6)),
        maxHeight: Math.max(zt ? 8 : 11, k - 1),
        overflowY: "hidden",
        children: [!bn ? r(V, {
          children: [e(Cr, {
            children: "No agents yet."
          }), e(s, {
            flexGrow: 1
          })]
        }) : O === "agent" && lt && ut ? r(V, {
          children: [e(M1e, {
            name: Se,
            subtext: We,
            stats: de,
            width: C
          }), !zt && e(s, {
            height: 1
          }), uo ? e(Gr, {
            phase: ut,
            clampedAgent: Tt,
            agentLabel: lt.label,
            detailLines: xn,
            cardScroll: K,
            leftWidth: co,
            rightWidth: gn,
            viewport: go,
            workflowActive: at,
            filterLabel: Ve
          }) : e(Yr, {
            agentLabel: lt.label,
            position: `${Tt+1}/${ut.agents.length}`,
            detailLines: xn,
            cardScroll: K,
            contentWidth: L,
            viewport: rs
          }), e(s, {
            flexGrow: 1
          })]
        }) : Hi && ut ? r(V, {
          children: [e(M1e, {
            name: Se,
            subtext: We,
            stats: de,
            width: C
          }), !zt && e(s, {
            height: 1
          }), e(Vr, {
            phases: M,
            selectedPhase: ut,
            clampedPhase: pt,
            clampedAgent: Tt,
            level: O === "phases" ? "phases" : "agents",
            leftWidth: ns,
            rightWidth: os,
            viewport: go,
            workflowActive: at,
            filterLabel: Ve
          }), e(s, {
            flexGrow: 1
          })]
        }) : r(V, {
          children: [e(M1e, {
            name: Se,
            subtext: We,
            stats: de,
            width: C
          }), !zt && e(s, {
            height: 1
          }), M.slice(wn.from, wn.to).map((j, Ct) => {
            let $t = wn.from + Ct;
            return e(wSn, {
              index: $t + 1,
              title: j.title,
              done: j.doneCount,
              total: j.totalCount,
              status: j.status,
              selected: $t === pt
            }, `${$t}-${j.title}`)
          }), mo && e(Jr, {
            win: wn,
            total: M.length
          }), e(s, {
            flexGrow: 1
          }), ut ? e(Ur, {
            phase: ut,
            selectedAgent: Tt,
            level: O === "phases" ? "phases" : "agents",
            contentWidth: L,
            viewport: Oi,
            tight: zt,
            workflowActive: at,
            filterLabel: Ve
          }) : null]
        }), r(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: [" ", Ki]
        })]
      })
    })
  })
}
