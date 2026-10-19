// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Nn, F, L, ke, phn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ye, H, d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { J, hI, _n, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { vr, Ch } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Ga, O, nt, Nl, zr, gL } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l, re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { bo } from "B:/~BUN/root/chunk-wje8pvrc.js";
import { Ule } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { tt, qe, yh, Fn, Gt, ND, NM, EJe, Dp, E, Ce, ue, Cle } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Ps, no, Xt, dhe, yze, y0e, hy, i$, Lf, nT, xW, ll, Jg, hn, QD, rT, Tr, mhe, J8n, D_t, ede, Tpn, fKs, zJ, Nf, Tc, $u, Pi, Sp, ZD, JM, KBt, nS, a$, Cn, PW, kze, Oi, jm, rr, lk, zl, Wn, Nd, Eze, gKs, yy, Wm, u7e, p7e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ts } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Rt, f1t, k5, Xs, Ge, Gl, ZT } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Fd, mt, NW, mv } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { FJ, Zk, Wo, nn, D_ } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me, nr, In, ca } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Ut } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { Ole } from "B:/~BUN/root/chunk-e4q58xft.js";
import { fo, Ka, ES, px } from "B:/~BUN/root/chunk-00v9f07q.js";
import { Hr, bE, E8 } from "B:/~BUN/root/chunk-jynk66qn.js";
import { Oe, br } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, zt, dn, ot, xa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { oc } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { nce, l8, d8 } from "B:/~BUN/root/chunk-bs0drrfx.js";
import { rt, on } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { qo } from "B:/~BUN/root/chunk-327wfkv3.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { Rmr, jus, yYe, _Ye, MAt, Fmr, Git, DAe, lHe, iZ, Hmr, M0n, D0n, dHe, ips, fC, uSe, uHe, X8t, YI, a9t, gSe, FAe, u9, l_r, p9, cpe, _Pt, tx, Yco, Xco, NPt, uU, ype, FPt, HPt, Jco, EJt, X1, zNn, Tys, GNn, Cys, xJt, YNn, ylt, JNn, _lt, PJt, jPt, Mys, WPt, cd, cOt, iSr, gpo, hpo, aSr, rH, JJt, Rxe, xZ, Nse, b6e, ic, nd, Iy, ypo, OFn, Fse, w6e, Q1, CT, Rq, j_s, ix, pOt, eQt, qd, eN, Ku, YP, Hse, rQt, Z1, fOt, lw, Qz, Ic, Pq, Oo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { rA, qee, up } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { bNt, oVn, P1e, IRo, SNt, wNt, psn, NPr, vNt, uke, qOe, DRo, _w, Yee, FPr } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { Gc } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Fs } from "B:/~BUN/root/chunk-dq7zfs8r.js";
import { Qon, cNt, ud, ag, V2n, q2n, Qf, gO, pb, AH, CX, DPr, dsn } from "B:/~BUN/root/chunk-472kxa0t.js";
import { Nk, mPe, uM } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { oD, Dwe, ect, A3e, hm, tct, QP, lPe, xvs, dPe } from "B:/~BUN/root/chunk-01qdq3qc.js";
import { nDt as children_20, _H, bnn, Yl } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { zb, wM, HE } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { Vvs, fPe, CZt } from "B:/~BUN/root/chunk-qegjq8ky.js";
import { Gn } from "B:/~BUN/root/chunk-c44qc88s.js";
import { So } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { cIt, X6e as subscribe, x7t } from "B:/~BUN/root/chunk-k382hx6g.js";
import { Cwe } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { q6, wen } from "B:/~BUN/root/chunk-r1z1wgpe.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { nX } from "B:/~BUN/root/chunk-qj8q07z1.js";
import { Ae } from "B:/~BUN/root/chunk-jjcfcfrs.js";
import { eVt, RV, kk, V, Un } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { wR } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { nz, Aye, cCe } from "B:/~BUN/root/chunk-kxp9j9f6.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { kR, cs, Hi as selectedValue, Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { No, El } from "B:/~BUN/root/chunk-5xxjpbgm.js";
import { bl, us } from "B:/~BUN/root/chunk-b900np4s.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { lp } from "B:/~BUN/root/chunk-hc3r626b.js";
import { Ii } from "B:/~BUN/root/chunk-3cgpbmp2.js";
import { LSn, tn } from "B:/~BUN/root/chunk-2fh8t7m0.js";
import { l3r } from "B:/~BUN/root/chunk-rrdg7btm.js";
import { gS, rl, Ytt } from "B:/~BUN/root/chunk-arvk08ew.js";
import { RYr, _kt } from "B:/~BUN/root/chunk-31v320n9.js";
import { s_, fS } from "B:/~BUN/root/chunk-1kwdjsmp.js";
import { $A, wwt, pbn, H2e, Uzt, Bzt, f6o, mbn, gbn, FZn, C2r, hbn, ybn, R2r, m6o, _bn, g6o, HZn, h6o, y6o, _6o, bbn, _Ce, A2r, jzt, Wzt, vwt, zzt, Gzt } from "B:/~BUN/root/chunk-adt217e6.js";
import { b6o, $2e, kwt, bCe, qzt, Kzt, Ewt, BZn, O2r, I2r, ltt, sf, M2r, Jde, Twt, dtt, jZn, ctt, Cwt } from "B:/~BUN/root/chunk-8svw5dn3.js";
import { Aos, xos } from "B:/~BUN/root/chunk-fv1y2eh7.js";
import { GEn, VEn } from "B:/~BUN/root/chunk-ks2gcbrv.js";
import { iwt, M4o, D4o } from "B:/~BUN/root/chunk-yacpdvqs.js";
import { DZn } from "B:/~BUN/root/chunk-wt7bejv2.js";
import { FVe } from "B:/~BUN/root/chunk-rq3efhmf.js";
import { U4t } from "B:/~BUN/root/chunk-err088rz.js";
import { ih, vqe } from "B:/~BUN/root/chunk-6h80td9s.js";
import { TGr, j7n } from "B:/~BUN/root/chunk-jf2xn746.js";
import { Lye } from "B:/~BUN/root/chunk-ad9119bn.js";
import { Ep } from "B:/~BUN/root/chunk-xvwwx9m1.js";
import { Ywt } from "B:/~BUN/root/chunk-8hh0swbm.js";
import { itr, Jwt, jtt, bLe } from "B:/~BUN/root/chunk-k8bwhyp5.js";
import { xF } from "B:/~BUN/root/chunk-wng69n5z.js";
import { ko } from "B:/~BUN/root/chunk-r9cctkt4.js";
import { Eo } from "B:/~BUN/root/chunk-3hxvnq94.js";
import { Wr } from "B:/~BUN/root/chunk-1rb7fvzn.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { Ag } from "B:/~BUN/root/chunk-6zwdt8hk.js";
import { ds } from "B:/~BUN/root/chunk-xa5s55y7.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { cqe } from "B:/~BUN/root/chunk-42k41jw0.js";
import { hir } from "B:/~BUN/root/chunk-2earr166.js";
import { p7 } from "B:/~BUN/root/chunk-p06eses6.js";
import { NV } from "B:/~BUN/root/chunk-fwcp237z.js";
import { kNe } from "B:/~BUN/root/chunk-pq83r6r3.js";
import { FF, R8 } from "B:/~BUN/root/chunk-tyqb9q0t.js";
import { boe, fTt } from "B:/~BUN/root/chunk-zayssx44.js";
import { VXr } from "B:/~BUN/root/chunk-8n6xn43n.js";
import { S7, z$, $4t, ENe, xRn } from "B:/~BUN/root/chunk-qzbd8k9a.js";
import { sKe, ans } from "B:/~BUN/root/chunk-10f1f84z.js";
import { HF, Pc } from "B:/~BUN/root/chunk-jpmkaw37.js";
import { RNe, voe, vz } from "B:/~BUN/root/chunk-pj523hfd.js";
import { v7 } from "B:/~BUN/root/chunk-mhrrrs4g.js";
import { Pb } from "B:/~BUN/root/chunk-nfa24hxs.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
import { cN, uw } from "B:/~BUN/root/chunk-9g7m04dd.js";
import { Xr, $r, ae, P, Mo, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Su } from "B:/~BUN/root/chunk-9dv7wnd0.js";
import { Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { W3 } from "B:/~BUN/root/chunk-xpy44yvr.js";
import { nfn, rfn } from "B:/~BUN/root/chunk-b0487zs4.js";
import { H0e } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { o, M, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function Nzt(a, h) {
  let facts = [`cached ${mv(new Date(a))}`, "connects on first use", ...(h !== void 0 ? [`${h} ${O(h, "tool")}`] : [])];
  return {
    glyph: te.radioOn,
    tone: "inactive",
    statusText: facts.join(" \xB7 "),
    facts: facts
  };
}
function Si(a) {
  let C = w(9),
    {
      serverToolsCount: serverToolsCount,
      serverPromptsCount: serverPromptsCount,
      serverResourcesCount: serverResourcesCount
    } = a,
    children;
  if (C[0] !== serverPromptsCount || C[1] !== serverResourcesCount || C[2] !== serverToolsCount) {
    children = [];
    if (serverToolsCount > 0) children.push("tools");
    if (serverResourcesCount > 0) children.push("resources");
    if (serverPromptsCount > 0) children.push("prompts");
    C[0] = serverPromptsCount, C[1] = serverResourcesCount, C[2] = serverToolsCount, C[3] = children;
  } else children = C[3];
  let T;
  if (C[4] === S) T = e(n, {
    bold: !0,
    children: "Capabilities: "
  }), C[4] = T;else T = C[4];
  let children_2;
  if (C[5] !== children) children_2 = children.length > 0 ? e(Se, {
    children: children
  }) : "none", C[5] = children, C[6] = children_2;else children_2 = C[6];
  let N;
  if (C[7] !== children_2) N = r(s, {
    children: [T, e(n, {
      color: "text",
      children: children_2
    })]
  }), C[7] = children_2, C[8] = N;else N = C[8];
  return N;
}
function Qm() {
  return !1;
}
var MZn = "Can't authenticate MCP servers while no terminal is attached to this background session. Attach to it and try again.";
function _c() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js");
}
function Ci() {
  return _c().mcpAuthModule();
}
function _a() {
  return _c().mcpClientModule();
}
function Ym(a, h, k) {
  if (a.type === "disabled") return r(n, {
    children: [e(ft, {
      status: "off",
      withSpace: !0
    }), "disabled"]
  });
  if (a.type === "connected") {
    if (a.discoveryBearerRejected) return r(n, {
      children: [e(ft, {
        status: "warning",
        withSpace: !0
      }), "connected \xB7 session token rejected"]
    });
    if (a.toolsListError) return r(n, {
      children: [e(ft, {
        status: "warning",
        withSpace: !0
      }), "connected \xB7 tools fetch failed"]
    });
    if (a.capabilities?.tools && h === 0) return r(n, {
      children: [e(ft, {
        status: "warning",
        withSpace: !0
      }), "connected \xB7 no tools"]
    });
    return r(n, {
      children: [e(ft, {
        status: "success",
        withSpace: !0
      }), "connected"]
    });
  }
  if (a.type === "cached") {
    let v = Nzt(a.cacheSavedAt, h);
    return r(n, {
      children: [Kn(v.tone, k)(v.glyph), " ", v.statusText]
    });
  }
  if (a.type === "pending") return r(n, {
    children: [e(ft, {
      status: "pending",
      withSpace: !0
    }), "connecting\u2026"]
  });
  if (a.type === "needs-auth") return r(n, {
    children: [e(ft, {
      status: "warning",
      withSpace: !0
    }), "needs authentication"]
  });
  if (a.errorCode === "UNCONFIGURED") return r(n, {
    children: [e(ft, {
      status: "pending",
      withSpace: !0
    }), "not configured"]
  });
  return r(n, {
    children: [e(ft, {
      status: "error",
      withSpace: !0
    }), a.errorCode === "INVALID_CONFIG" ? "config issue" : "failed"]
  });
}
function att(a) {
  let v = w(23),
    config = a.server.config,
    hasClaudeAiToken = (config.type === "sse" || config.type === "http") && !!Fn()?.accessToken,
    C;
  if (v[0] !== config || v[1] !== hasClaudeAiToken) C = (config.type === "sse" || config.type === "http") && NM(config.url) && EJe(config, hasClaudeAiToken) !== EJe(config, !0), v[0] = config, v[1] = hasClaudeAiToken, v[2] = C;else C = v[2];
  let x = C,
    T;
  if (v[3] !== x) T = () => x ? v7().catch(Qm) : null, v[3] = x, v[4] = T;else T = v[4];
  let [designCredential] = y(T);
  const paddingX = a.borderless ? 1 : 0,
    D = String(a.server.name);
  let Y;
  if (v[5] !== D) Y = Ga(D), v[5] = D, v[6] = Y;else Y = v[6];
  const title = `${Y} MCP Server`;
  let inputGuide, children_3;
  if (v[7] === S) inputGuide = e(Se, {
    children: e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "back"
    })
  }), children_3 = e(n, {
    dimColor: !0,
    children: "Checking credentials\u2026"
  }), v[7] = inputGuide, v[8] = children_3;else inputGuide = v[7], children_3 = v[8];
  let children_4;
  if (v[9] !== a.borderless || v[10] !== a.onCancel || v[11] !== title) children_4 = e(be, {
    title: title,
    onCancel: a.onCancel,
    hideBorder: a.borderless,
    inputGuide: inputGuide,
    children: children_3
  }), v[9] = a.borderless, v[10] = a.onCancel, v[11] = title, v[12] = children_4;else children_4 = v[12];
  let fallback;
  if (v[13] !== paddingX || v[14] !== children_4) fallback = e(s, {
    flexDirection: "column",
    paddingX: paddingX,
    children: children_4
  }), v[13] = paddingX, v[14] = children_4, v[15] = fallback;else fallback = v[15];
  let children_5;
  if (v[16] !== designCredential || v[17] !== hasClaudeAiToken || v[18] !== a) children_5 = e(Ac, {
    ...a,
    hasClaudeAiToken: hasClaudeAiToken,
    designCredential: designCredential
  }), v[16] = designCredential, v[17] = hasClaudeAiToken, v[18] = a, v[19] = children_5;else children_5 = v[19];
  let de;
  if (v[20] !== children_5 || v[21] !== fallback) de = e(Xr, {
    fallback: fallback,
    children: children_5
  }), v[20] = children_5, v[21] = fallback, v[22] = de;else de = v[22];
  return de;
}
function Ac({
  server: server,
  serverToolsCount: serverToolsCount_2,
  onViewTools: onViewTools,
  onCancel: onCancel,
  onComplete: onComplete,
  borderless: x = !1,
  hasClaudeAiToken: hasClaudeAiToken_2,
  designCredential: designCredential_2
}) {
  let N = ae((xe, ...dt) => onComplete(typeof xe === "string" ? Xt(xe) : xe, ...dt), [onComplete]),
    D = kk(),
    [Y] = br(),
    j = ot(),
    {
      columns: columns
    } = Te(),
    [isActive, ee] = y(!1),
    [error_3, fe] = y(null),
    de = V(xe => xe.mcp),
    pe = Un(),
    [url, z] = y(null),
    [Ve, at] = y(!1),
    We = A(null),
    [isActive_2, oe] = y(!1),
    [url_2, St] = y(null),
    [isActive_3, Ze] = y(!1),
    [Et, ze] = y(!1),
    ht = url || url_2 || (Et ? gSe() : null),
    {
      copiedVia: bt,
      copy: copy
    } = nce(ht),
    [value, onChange] = y(""),
    [cursorOffset, onChangeCursorOffset] = y(0),
    [Ft, _e] = y(null),
    [error_2, Ct] = y(null);
  P(() => () => {
    We.current?.abort();
  }, []);
  let Mt = server.isAuthenticated || Ps(server.client) && serverToolsCount_2 > 0,
    Zt = Aye(),
    Kt = ae(async () => {
      oe(!1), St(null), at(!0);
      try {
        let xe = await Zt(server.name, {
            discardDiscovery: !1
          }),
          success = xe.client.type === "connected";
        if (i("tengu_claudeai_mcp_auth_completed", {
          success: success
        }), success) N(`Authentication successful. Connected to ${fo(server.name)}.`);else if (xe.client.type === "needs-auth") N(`Tried reconnecting, but ${fo(server.name)} is still unauthorized. Make sure the browser sign-in completed, then try again from /mcp.`);else {
          let Fe = xe.client.type === "failed" ? itr(xe.client) : "";
          if (bo(D)) {
            if (Fe) t(`mcp reconnect failed for ${Xt(server.name)}: ${Fe}`, {
              level: "error"
            });
            N(`Tried reconnecting to ${fo(server.name)}, but the connection failed${Fe ? " (detail withheld on this connection)" : ""}. Restart Claude Code to retry.`);
          } else {
            let It = Fe ? Ka(Fe) : "";
            N(It ? `Tried reconnecting to ${fo(server.name)}, but the connection failed: ${It}` : `Tried reconnecting to ${fo(server.name)}, but the connection failed. Restart Claude Code to retry.`);
          }
        }
      } catch (error) {
        i("tengu_claudeai_mcp_auth_completed", {
          success: !1
        }), N(jtt(error, server.name, {
          config: server.config,
          persistsOffBox: bo(D)
        }));
      } finally {
        at(!1);
      }
    }, [Zt, server.name, server.config, N, D]),
    cn = ae(async () => {
      await _a().clearServerCache(server.name, {
        ...server.config,
        scope: server.scope
      }), pe(xe => {
        let clients = xe.mcp.clients.map(item => item.name === server.name && item.type !== "disabled" ? {
            ...item,
            type: "needs-auth"
          } : item),
          tools = p9(xe.mcp.tools, server.name),
          commands = cpe(xe.mcp.commands, server.name),
          resources = _Pt(xe.mcp.resources, server.name);
        return {
          ...xe,
          mcp: {
            ...xe.mcp,
            clients: clients,
            tools: tools,
            commands: commands,
            resources: resources
          }
        };
      }), i("tengu_claudeai_mcp_clear_auth_completed", {}), N(`Disconnected from ${fo(server.name)}.`), Ze(!1), ze(!1);
    }, [server.name, server.config, server.scope, pe, N]);
  function yt() {
    We.current?.abort(), We.current = null, ee(!1), z(null);
  }
  function jt() {
    oe(!1), St(null);
  }
  function ln() {
    Ze(!1), ze(!1);
  }
  rt("confirm:no", yt, {
    context: "Confirmation",
    isActive: isActive
  }), rt("confirm:no", jt, {
    context: "Confirmation",
    isActive: isActive_2
  }), rt("confirm:no", ln, {
    context: "Confirmation",
    isActive: isActive_3
  });
  let exitState = qo(isActive ? yt : isActive_2 ? jt : isActive_3 ? ln : void 0);
  function onKeyDown(xe) {
    if (xe.key === "return" && isActive_2) xe.preventDefault(), Kt();
    if (xe.key === "return" && isActive_3) {
      if (xe.preventDefault(), Dp()) {
        Ze(!1), ze(!1), fe(MZn);
        return;
      }
      if (Et) cn();else ze(!0), Hs(gSe());
    }
    if (xe.key === "c" && !xe.ctrl && !xe.meta && ht) xe.preventDefault(), copy(ht);
  }
  let Sn = Ga(String(server.name)),
    serverPromptsCount_2 = l_r(de.commands, server.name).length,
    Pn = cCe(),
    kn = ae(() => {
      let xe = Ic(server.name, server.client.config);
      if (xe === "managed-policy") return fe(vz(server.name, xe, server.client.config)), !0;
      let dt = Oo(server.name);
      if (server.client.type === "disabled" || dt) return fe(server.client.type === "disabled" ? RNe(server.name) : voe(server.name)), !0;
      if (xe) return fe(vz(server.name, xe, server.client.config)), !0;
      return fe(null), !1;
    }, [server.client.type, server.name, server.client.config]),
    Ue = ae(async () => {
      if (kn()) return;
      let xe = (server.config.type === "claudeai-proxy" ? FAe(server.config) : null) ?? gSe();
      St(xe), oe(!0), i("tengu_claudeai_mcp_auth_started", {}), await Hs(xe);
    }, [server.config, kn]),
    Ot = ae(() => {
      Ze(!0), i("tengu_claudeai_mcp_clear_auth_started", {});
    }, []),
    se = ae(async () => {
      let xe = server.client.type !== "disabled";
      try {
        if (await Pn(server.name), server.config.type === "claudeai-proxy") i("tengu_claudeai_mcp_toggle", {
          new_state: b(xe ? "disabled" : "enabled")
        });
        onCancel();
      } catch (error) {
        N(bLe(error, server.name, xe ? "disable" : "enable", {
          config: server.config,
          persistsOffBox: bo(D)
        }));
      }
    }, [server.client.type, server.config, server.name, Pn, onCancel, N, D]),
    Re = ae(async () => {
      if (kn()) return;
      let xe = NV(server.name, {
        ...server.config,
        scope: server.scope
      });
      if (xe.kind === "anthropic-hosted") {
        fe(xe.message);
        return;
      }
      if (xe.kind !== "oauth") return;
      ee(!0), fe(null);
      let abortController = new AbortController();
      We.current = abortController;
      try {
        let Fe = server.isAuthenticated ? await Ci().snapshotServerTokens(server.name, xe.config) : void 0;
        await Ci().performMCPOAuthFlow(server.name, xe.config, z, abortController.signal, {
          onWaitingForCallback: pt => {
            _e(() => pt);
          }
        }), i("tengu_mcp_auth_config_authenticate", {
          wasAuthenticated: server.isAuthenticated
        });
        let It = await Zt(server.name, {
          discardDiscovery: !1
        });
        if (It.client.type === "connected") {
          if (Fe) await Ci().revokeReplacedServerTokens(server.name, xe.config, Fe);
          let pt = Mt ? `Authentication successful. Reconnected to ${fo(server.name)}.` : `Authentication successful. Connected to ${fo(server.name)}.`;
          N(pt);
        } else if (It.client.type === "needs-auth") N(`Got new credentials, but ${fo(server.name)} rejected them on reconnect. Try re-authenticating, or restart Claude Code if it persists.`);else {
          re(server.name, "Reconnection failed after authentication");
          let pt = It.client.type === "failed" ? itr(It.client) : "";
          if (bo(D)) {
            if (pt) t(`mcp post-auth reconnect failed for ${Xt(server.name)}: ${pt}`, {
              level: "error"
            });
            N(`Got new credentials, but reconnecting to ${fo(server.name)} failed${pt ? " (detail withheld on this connection)" : ""}. Restart Claude Code to retry.`);
          } else {
            let Jt = pt ? Ka(pt) : "";
            N(Jt ? `Got new credentials, but reconnecting to ${fo(server.name)} failed: ${Jt}` : `Got new credentials, but reconnecting to ${fo(server.name)} failed. Restart Claude Code to retry.`);
          }
        }
      } catch (error) {
        if (error instanceof Error && !(error instanceof Ci().AuthenticationCancelledError)) fe(ES(Pc(server.name, server.config, error.message)));
      } finally {
        ee(!1), We.current = null, _e(null), onChange(""), Ct(null), z(null);
      }
    }, [server.isAuthenticated, server.config, server.name, server.scope, N, Zt, Mt, kn, D]),
    Le = async () => {
      if (server.config.type === "claudeai-proxy") return;
      if (server.config) {
        await Ci().revokeServerTokens(server.name, server.config), i("tengu_mcp_auth_config_clear", {});
        let xe = {
            ...server.config,
            scope: server.scope
          },
          dt = Hr();
        if (YI()) await E8(_a().dropDiscoveryEntry(server.name, xe).catch(() => {}));
        if (!(bE(xe) && Hr() !== dt)) await _a().clearServerCache(server.name, xe);
        pe(Fe => {
          let clients_2 = Fe.mcp.clients.map(item => item.name === server.name && item.type !== "disabled" ? {
              ...item,
              type: "failed"
            } : item),
            tools_2 = p9(Fe.mcp.tools, server.name),
            commands_2 = cpe(Fe.mcp.commands, server.name),
            resources_2 = _Pt(Fe.mcp.resources, server.name);
          return {
            ...Fe,
            mcp: {
              ...Fe.mcp,
              clients: clients_2,
              tools: tools_2,
              commands: commands_2,
              resources: resources_2
            }
          };
        }), N(`Authentication cleared for ${fo(server.name)}.`);
      }
    };
  if (isActive) {
    let children_6 = server.config.type !== "claudeai-proxy" && server.config.oauth?.xaa ? " Authenticating via your identity provider" : " A browser window will open for authentication";
    return r(s, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: onKeyDown,
      children: [r(n, {
        color: "claude",
        children: ["Authenticating with ", server.name, "\u2026"]
      }), r(s, {
        children: [e(Ii, {}), e(n, {
          children: children_6
        })]
      }), url && r(s, {
        flexDirection: "column",
        children: [r(s, {
          children: [r(n, {
            dimColor: !0,
            children: ["If your browser doesn't open automatically, copy this URL manually", " "]
          }), e(l8, {
            via: bt
          })]
        }), e(d8, {
          via: bt
        }), e(zt, {
          url: url,
          assumeSupport: !0
        })]
      }), isActive && url && Ft && r(s, {
        flexDirection: "column",
        marginTop: 1,
        children: [e(n, {
          dimColor: !0,
          children: "If the redirect page shows a connection error, paste the URL from your browser's address bar:"
        }), r(s, {
          children: [r(n, {
            dimColor: !0,
            children: ["URL ", ">", " "]
          }), e(Lr, {
            value: value,
            onChange: onChange,
            onSubmit: dt => {
              let Fe = dt.trim();
              Ct(!Fe || Ft(Fe) ? null : "That isn't this sign-in's redirect URL \u2014 paste the address from the browser page this sign-in opened."), onChange("");
            },
            cursorOffset: cursorOffset,
            onChangeCursorOffset: onChangeCursorOffset,
            columns: columns - 8
          })]
        }), e(ls, {
          error: error_2
        })]
      }), e(s, {
        marginLeft: 3,
        children: e(n, {
          dimColor: !0,
          children: exitState.pending ? `Press ${exitState.keyName} again to go back` : r(Q, {
            children: ["Return here after authenticating in your browser. Press", " ", e(q, {
              chord: "escape",
              action: "go back"
            }), "."]
          })
        })
      })]
    });
  }
  if (isActive_2) return r(s, {
    flexDirection: "column",
    gap: 1,
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      color: "claude",
      children: ["Authenticating with ", server.name, "\u2026"]
    }), r(s, {
      children: [e(Ii, {}), e(n, {
        children: " A browser window will open for authentication"
      })]
    }), url_2 && r(s, {
      flexDirection: "column",
      children: [r(s, {
        children: [r(n, {
          dimColor: !0,
          children: ["If your browser doesn't open automatically, copy this URL manually", " "]
        }), e(l8, {
          via: bt
        })]
      }), e(d8, {
        via: bt
      }), e(zt, {
        url: url_2,
        assumeSupport: !0
      })]
    }), r(s, {
      marginLeft: 3,
      flexDirection: "column",
      children: [r(n, {
        color: "permission",
        children: ["Press ", e(n, {
          bold: !0,
          children: "Enter"
        }), " after authenticating in your browser."]
      }), e(dr, {
        exitState: exitState
      })]
    })]
  });
  if (isActive_3) return r(s, {
    flexDirection: "column",
    gap: 1,
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: [r(n, {
      color: "claude",
      children: ["Clear authentication for ", server.name]
    }), Et ? r(Q, {
      children: [e(n, {
        children: 'Find the MCP server in the browser and click "Disconnect".'
      }), r(s, {
        flexDirection: "column",
        children: [r(s, {
          children: [r(n, {
            dimColor: !0,
            children: ["If your browser didn't open automatically, copy this URL manually", " "]
          }), e(l8, {
            via: bt
          })]
        }), e(d8, {
          via: bt
        }), e(zt, {
          url: gSe()
        })]
      }), r(s, {
        marginLeft: 3,
        flexDirection: "column",
        children: [r(n, {
          color: "permission",
          children: ["Press ", e(n, {
            bold: !0,
            children: "Enter"
          }), " when done."]
        }), e(dr, {
          exitState: exitState
        })]
      })]
    }) : r(Q, {
      children: [e(n, {
        children: 'This will open claude.ai in the browser. Find the MCP server in the list and click "Disconnect".'
      }), r(s, {
        marginLeft: 3,
        flexDirection: "column",
        children: [r(n, {
          color: "permission",
          children: ["Press", " ", e(q, {
            chord: "enter",
            action: "open the browser",
            bold: !0
          }), "."]
        }), e(dr, {
          exitState: exitState
        })]
      })]
    })]
  });
  if (Ve) return r(s, {
    flexDirection: "column",
    gap: 1,
    padding: 1,
    children: [r(n, {
      color: "text",
      children: ["Connecting to ", e(n, {
        bold: !0,
        children: server.name
      }), "\u2026"]
    }), r(s, {
      children: [e(Ii, {}), e(n, {
        children: " Establishing connection to MCP server"
      })]
    }), e(n, {
      dimColor: !0,
      children: "This may take a few moments."
    })]
  });
  let options = [];
  if (server.client.type === "disabled") options.push({
    label: "Enable",
    value: "toggle-enabled"
  });
  if (Ps(server.client) && serverToolsCount_2 > 0) options.push({
    label: "View tools",
    value: "tools"
  });
  let $t = (server.config.type === "sse" || server.config.type === "http") && ND(server.config),
    Pt = (server.config.type === "sse" || server.config.type === "http") && EJe(server.config, hasClaudeAiToken_2 || designCredential_2 !== null && $r(designCredential_2)),
    Je = server.client.type === "failed" && server.client.errorCode === "HEADERS_HELPER_AUTH_REJECTED",
    Ie = server.client.type === "disabled" || Oo(server.name) || Qz(server.name, server.client.config);
  if (server.config.type === "claudeai-proxy") {
    if (server.client.type === "connected") options.push({
      label: "Clear authentication",
      value: "claudeai-clear-auth"
    });else if (!Ie) options.push({
      label: "Authenticate",
      value: "claudeai-auth"
    });
  } else {
    let xe = !Ie && !Pt && !Je && URL.canParse(server.config.url);
    if (Mt) {
      if (xe) options.push({
        label: "Re-authenticate",
        value: "reauth"
      });
      options.push({
        label: "Clear authentication",
        value: "clear-auth"
      });
    } else if (xe) options.push({
      label: "Authenticate",
      value: "auth"
    });
  }
  let hasHeadersHelper = server.config.type !== "claudeai-proxy" && !!server.config.headersHelper;
  if (server.client.type !== "disabled") {
    if (server.client.type !== "needs-auth" || hasHeadersHelper || $t) options.push({
      label: "Reconnect",
      value: "reconnectMcpServer"
    });
    options.push({
      label: "Disable",
      value: "toggle-enabled"
    });
  }
  if (options.length === 0) options.push({
    label: "Back",
    value: "back"
  });
  let we = ["reauth", "clear-auth", "claudeai-clear-auth"],
    defaultFocusValue = options[0] && we.includes(options[0].value) ? options.find(item => !we.includes(item.value))?.value : void 0;
  return e(s, {
    flexDirection: "column",
    paddingX: x ? 1 : 0,
    children: r(be, {
      title: `${Sn} MCP Server`,
      onCancel: onCancel,
      hideBorder: x,
      inputGuide: r(Se, {
        children: [!j && e(q, {
          chord: ["up", "down"],
          action: "navigate"
        }), !j && e(q, {
          chord: "enter",
          action: "select"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "back"
        })]
      }),
      children: [r(s, {
        flexDirection: "column",
        gap: 0,
        children: [r(lp, {
          columns: [{
            bold: !0
          }, {}],
          children: [r(lp.Row, {
            children: [e(Q, {
              children: "Status:"
            }), Ym(server.client, serverToolsCount_2, Y)]
          }), (server.client.type === "failed" || server.client.type === "needs-auth") && server.client.error && r(lp.Row, {
            children: [e(Q, {
              children: "Issue:"
            }), e(n, {
              dimColor: !0,
              children: ES(server.client.type === "failed" && server.client.displayDetail ? `${server.client.error} ${server.client.displayDetail}` : server.client.error)
            })]
          }), server.transport !== "claudeai-proxy" && r(lp.Row, {
            children: [e(Q, {
              children: "Auth:"
            }), Mt ? r(n, {
              children: [e(ft, {
                status: "success",
                withSpace: !0
              }), "authenticated"]
            }) : r(n, {
              children: [e(ft, {
                status: "error",
                withSpace: !0
              }), "not authenticated"]
            })]
          }), server.client.type === "connected" && server.client.protocolEra === "modern" && server.client.negotiatedProtocolVersion && r(lp.Row, {
            children: [e(Q, {
              children: "Protocol:"
            }), e(n, {
              dimColor: !0,
              children: Cwe(server.client.negotiatedProtocolVersion)
            })]
          }), server.transport === "claudeai-proxy" && server.scope === "claudeai" && server.config.enterpriseManaged && r(lp.Row, {
            children: [e(Q, {
              children: "Managed:"
            }), e(n, {
              dimColor: !0,
              children: "by your organization"
            })]
          }), r(lp.Row, {
            children: [e(Q, {
              children: "URL:"
            }), e(n, {
              dimColor: !0,
              children: cqe({
                url: server.displayEndpoint
              }, server.scope).url
            })]
          }), r(lp.Row, {
            children: [e(Q, {
              children: "Config location:"
            }), e(n, {
              dimColor: !0,
              children: tx(server.scope)
            })]
          })]
        }), Ps(server.client) && e(Si, {
          serverToolsCount: serverToolsCount_2,
          serverPromptsCount: serverPromptsCount_2,
          serverResourcesCount: de.resources[server.name]?.length || 0
        }), Ps(server.client) && serverToolsCount_2 > 0 && r(s, {
          children: [e(n, {
            bold: !0,
            children: "Tools: "
          }), r(n, {
            dimColor: !0,
            children: [serverToolsCount_2, " ", O(serverToolsCount_2, "tool")]
          })]
        }), server.client.type === "connected" && server.client.discoveryBearerRejected && r(s, {
          flexDirection: "column",
          children: [e(n, {
            bold: !0,
            children: "Issue: "
          }), e(n, {
            dimColor: !0,
            children: "claude.ai rejected the session token. Run /login, then reconnect."
          })]
        }), server.client.type === "connected" && !server.client.discoveryBearerRejected && server.client.toolsListError && r(s, {
          flexDirection: "column",
          children: [e(n, {
            bold: !0,
            children: "Issue: "
          }), e(n, {
            dimColor: !0,
            children: server.client.toolsListError
          })]
        })]
      }), error_3 && e(s, {
        children: e(ls, {
          error: error_3
        })
      }), options.length > 0 && e(s, {
        children: e(Xe, {
          options: options,
          defaultFocusValue: defaultFocusValue,
          onChange: async xe => {
            if (Dp() && (xe === "auth" || xe === "reauth" || xe === "clear-auth" || xe === "claudeai-auth" || xe === "claudeai-clear-auth")) {
              fe(MZn);
              return;
            }
            switch (xe) {
              case "tools":
                onViewTools();
                break;
              case "auth":
              case "reauth":
                await Re();
                break;
              case "clear-auth":
                await Le();
                break;
              case "claudeai-auth":
                await Ue();
                break;
              case "claudeai-clear-auth":
                Ot();
                break;
              case "reconnectMcpServer":
                at(!0);
                try {
                  let dt = await Zt(server.name);
                  if (server.config.type === "claudeai-proxy") i("tengu_claudeai_mcp_reconnect", {
                    success: dt.client.type === "connected"
                  });
                  let {
                    message: message
                  } = Jwt(dt, server.name, {
                    persistsOffBox: bo(D)
                  }, {
                    hasHeadersHelper: hasHeadersHelper
                  });
                  N(message);
                } catch (error) {
                  if (server.config.type === "claudeai-proxy") i("tengu_claudeai_mcp_reconnect", {
                    success: !1
                  });
                  N(jtt(error, server.name, {
                    config: server.config,
                    persistsOffBox: bo(D)
                  }));
                } finally {
                  at(!1);
                }
                break;
              case "toggle-enabled":
                await se();
                break;
              case "back":
                onCancel();
                break;
            }
          },
          onCancel: onCancel
        })
      })]
    })
  });
}
function dr(a) {
  let k = w(5),
    {
      exitState: exitState_2
    } = a,
    children_7;
  if (k[0] !== exitState_2.keyName || k[1] !== exitState_2.pending) children_7 = exitState_2.pending ? `Press ${exitState_2.keyName} again to go back` : e(gt, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: "back"
  }), k[0] = exitState_2.keyName, k[1] = exitState_2.pending, k[2] = children_7;else children_7 = k[2];
  let C;
  if (k[3] !== children_7) C = e(n, {
    dimColor: !0,
    italic: !0,
    children: children_7
  }), k[3] = children_7, k[4] = C;else C = k[4];
  return C;
}
B();
function Xm(a, h, k) {
  if (a.type === "disabled") return r(n, {
    children: [Kn("inactive", k)(te.radioOff), " disabled"]
  });
  if (a.type === "connected") {
    if (a.toolsListError) return r(n, {
      children: [e(ft, {
        status: "warning",
        withSpace: !0
      }), "connected \xB7 tools fetch failed"]
    });
    if (a.capabilities?.tools && h === 0) return r(n, {
      children: [e(ft, {
        status: "warning",
        withSpace: !0
      }), "connected \xB7 no tools"]
    });
    return r(n, {
      children: [e(ft, {
        status: "success",
        withSpace: !0
      }), "connected"]
    });
  }
  if (a.type === "pending") return r(n, {
    children: [e(ft, {
      status: "pending",
      withSpace: !0
    }), "connecting\u2026"]
  });
  return r(n, {
    children: [e(ft, {
      status: "error",
      withSpace: !0
    }), "failed"]
  });
}
function ubn({
  server: server_2,
  serverToolsCount: serverToolsCount_3,
  onViewTools: onViewTools_2,
  onCancel: onCancel_2,
  onComplete: onComplete_2,
  borderless: x = !1
}) {
  let T = ae((ye, ...z) => onComplete_2(typeof ye === "string" ? Xt(ye) : ye, ...z), [onComplete_2]),
    K = kk(),
    [N] = br(),
    D = ot(),
    Y = V(ye => ye.mcp),
    j = Aye(),
    U = cCe(),
    [_, ee] = y(!1),
    ce = ae(async () => {
      let ye = server_2.client.type !== "disabled";
      try {
        await U(server_2.name), onCancel_2();
      } catch (error) {
        T(bLe(error, server_2.name, ye ? "disable" : "enable", {
          config: server_2.config,
          persistsOffBox: bo(K)
        }));
      }
    }, [server_2.client.type, server_2.name, server_2.config, U, onCancel_2, T, K]),
    fe = Ga(String(server_2.name)),
    serverPromptsCount_3 = l_r(Y.commands, server_2.name).length,
    options_2 = [];
  if (server_2.client.type !== "disabled" && serverToolsCount_3 > 0) options_2.push({
    label: "View tools",
    value: "tools"
  });
  if (server_2.client.type !== "disabled") options_2.push({
    label: "Reconnect",
    value: "reconnectMcpServer"
  });
  if (options_2.push({
    label: server_2.client.type !== "disabled" ? "Disable" : "Enable",
    value: "toggle-enabled"
  }), _) return r(be, {
    title: `${fe} MCP Server`,
    onCancel: () => {},
    exitOnCtrlCD: !0,
    hideBorder: x,
    hideInputGuide: !0,
    children: [r(n, {
      color: "text",
      children: ["Reconnecting to ", e(n, {
        bold: !0,
        children: server_2.name
      })]
    }), r(s, {
      children: [e(Ii, {}), e(n, {
        children: " Restarting MCP server process"
      })]
    }), e(n, {
      dimColor: !0,
      children: "This may take a few moments."
    })]
  });
  return r(be, {
    title: `${fe} MCP Server`,
    onCancel: onCancel_2,
    hideBorder: x,
    inputGuide: r(Se, {
      children: [!D && e(q, {
        chord: ["up", "down"],
        action: "navigate"
      }), !D && e(q, {
        chord: "enter",
        action: "select"
      }), e(gt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "back"
      })]
    }),
    children: [r(s, {
      flexDirection: "column",
      gap: 0,
      children: [r(lp, {
        columns: [{
          bold: !0
        }, {}],
        children: [r(lp.Row, {
          children: [e(Q, {
            children: "Status:"
          }), Xm(server_2.client, serverToolsCount_3, N)]
        }), server_2.displayEndpoint !== Ule(server_2.config) && r(lp.Row, {
          children: [e(Q, {
            children: "Command:"
          }), e(n, {
            dimColor: !0,
            children: server_2.displayEndpoint
          })]
        }), server_2.client.type === "connected" && server_2.client.protocolEra === "modern" && server_2.client.negotiatedProtocolVersion && r(lp.Row, {
          children: [e(Q, {
            children: "Protocol:"
          }), e(n, {
            dimColor: !0,
            children: Cwe(server_2.client.negotiatedProtocolVersion)
          })]
        }), r(lp.Row, {
          children: [e(Q, {
            children: "Config location:"
          }), e(n, {
            dimColor: !0,
            children: tx(Pq(server_2.name)?.scope ?? "dynamic")
          })]
        })]
      }), Ps(server_2.client) && e(Si, {
        serverToolsCount: serverToolsCount_3,
        serverPromptsCount: serverPromptsCount_3,
        serverResourcesCount: Y.resources[server_2.name]?.length || 0
      }), Ps(server_2.client) && serverToolsCount_3 > 0 && r(s, {
        children: [e(n, {
          bold: !0,
          children: "Tools: "
        }), r(n, {
          dimColor: !0,
          children: [serverToolsCount_3, " ", O(serverToolsCount_3, "tool")]
        })]
      }), server_2.client.type === "connected" && server_2.client.toolsListError && r(s, {
        flexDirection: "column",
        children: [e(n, {
          bold: !0,
          children: "Issue: "
        }), e(n, {
          dimColor: !0,
          children: server_2.client.toolsListError
        })]
      })]
    }), e(s, {
      children: e(Xe, {
        options: options_2,
        onChange: async ye => {
          if (ye === "tools") onViewTools_2();else if (ye === "reconnectMcpServer") {
            ee(!0);
            try {
              let z = await j(server_2.name),
                {
                  message: message_2
                } = Jwt(z, server_2.name, {
                  persistsOffBox: bo(K)
                });
              T?.(message_2);
            } catch (error) {
              T?.(jtt(error, server_2.name, {
                config: server_2.config,
                persistsOffBox: bo(K)
              }));
            } finally {
              ee(!1);
            }
          } else if (ye === "toggle-enabled") await ce();
        },
        onCancel: onCancel_2
      })
    })]
  });
}
B();
var Bc = 1000,
  Oc = 200;
function Fzt(a) {
  let T = w(50),
    {
      tool: tool,
      server: server_3,
      onBack: v
    } = a,
    [C, x] = y(""),
    K,
    children_8;
  if (T[0] !== server_3.name || T[1] !== tool) {
    children_8 = nfn(tool.name, server_3.name);
    let D = tool.userFacingName ? tool.userFacingName({}) : children_8;
    K = rfn(D);
    T[0] = server_3.name, T[1] = tool, T[2] = K, T[3] = children_8;
  } else K = T[2], children_8 = T[3];
  let Y = K,
    j;
  if (T[4] !== tool) j = tool.isReadOnly?.({}) ?? !1, T[4] = tool, T[5] = j;else j = T[5];
  let U = j,
    _;
  if (T[6] !== tool) _ = tool.isDestructive?.({}) ?? !1, T[6] = tool, T[7] = _;else _ = T[7];
  let ee = _,
    ce;
  if (T[8] !== tool) ce = tool.isOpenWorld?.({}) ?? !1, T[8] = tool, T[9] = ce;else ce = T[9];
  let fe = ce,
    de = p7(server_3.config),
    pe;
  if (T[10] !== server_3.config || T[11] !== tool) pe = p7(server_3.config, nX(tool)), T[10] = server_3.config, T[11] = tool, T[12] = pe;else pe = T[12];
  let ye = pe,
    z,
    Ve;
  if (T[13] !== tool) z = () => {
    let We = async function We() {
      try {
        let at = await tool.description({}, {
          isNonInteractiveSession: !1,
          toolPermissionContext: {
            mode: "default",
            additionalWorkingDirectories: new Map(),
            alwaysAllowRules: {},
            alwaysDenyRules: {},
            alwaysAskRules: {},
            isBypassPermissionsModeAvailable: !1,
            mcpPermissionModeOverrides: {}
          },
          tools: []
        });
        x(at);
      } catch {
        x("Failed to load description");
      }
    };
    We();
  }, Ve = [tool], T[13] = tool, T[14] = z, T[15] = Ve;else z = T[14], Ve = T[15];
  P(z, Ve);
  let He;
  if (T[16] !== U) He = U && e(n, {
    color: "success",
    children: " [read-only]"
  }), T[16] = U, T[17] = He;else He = T[17];
  let oe;
  if (T[18] !== ee) oe = ee && e(n, {
    color: "error",
    children: " [destructive]"
  }), T[18] = ee, T[19] = oe;else oe = T[19];
  let ve;
  if (T[20] !== fe) ve = fe && e(n, {
    dimColor: !0,
    children: " [open-world]"
  }), T[20] = fe, T[21] = ve;else ve = T[21];
  let St;
  if (T[22] !== Y || T[23] !== ve || T[24] !== He || T[25] !== oe) St = r(Q, {
    children: [Y, He, oe, ve]
  }), T[22] = Y, T[23] = ve, T[24] = He, T[25] = oe, T[26] = St;else St = T[26];
  let title_2 = St;
  const subtitle = server_3.name;
  let inputGuide_2;
  if (T[27] === S) inputGuide_2 = e(gt, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: "go back"
  }), T[27] = inputGuide_2;else inputGuide_2 = T[27];
  let ze;
  if (T[28] === S) ze = e(n, {
    bold: !0,
    children: "Tool name: "
  }), T[28] = ze;else ze = T[28];
  let ht;
  if (T[29] !== children_8) ht = r(s, {
    children: [ze, e(n, {
      dimColor: !0,
      children: children_8
    })]
  }), T[29] = children_8, T[30] = ht;else ht = T[30];
  let bt;
  if (T[31] === S) bt = e(n, {
    bold: !0,
    children: "Full name: "
  }), T[31] = bt;else bt = T[31];
  let le;
  if (T[32] !== tool.name) le = r(s, {
    children: [bt, e(n, {
      dimColor: !0,
      children: tool.name
    })]
  }), T[32] = tool.name, T[33] = le;else le = T[33];
  let wt;
  if (T[34] !== ye || T[35] !== de || T[36] !== C) wt = C && r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [e(n, {
      bold: !0,
      children: "Description:"
    }), e(n, {
      wrap: "wrap",
      children: Nl(C, Math.min(Bc, de))
    }), C.length > de && r(n, {
      dimColor: !0,
      children: ["The model receives only about the first ", de, " ", "characters", ye > de && `, or ${ye} once the model loads the tool through tool search`, "."]
    })]
  }), T[34] = ye, T[35] = de, T[36] = C, T[37] = wt;else wt = T[37];
  let Qe;
  if (T[38] !== tool.inputJSONSchema) Qe = tool.inputJSONSchema && tool.inputJSONSchema.properties && Object.keys(tool.inputJSONSchema.properties).length > 0 && r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [e(n, {
      bold: !0,
      children: "Parameters:"
    }), e(s, {
      marginLeft: 2,
      flexDirection: "column",
      children: Object.entries(tool.inputJSONSchema.properties).map(item => {
        let [sn, Ft] = item;
        let _e = tool.inputJSONSchema?.required?.includes(sn);
        return r(Ag, {
          children: [sn, e(nz, {
            when: _e ?? !1,
            children: "required"
          }), ":", " ", e(n, {
            dimColor: !0,
            children: typeof Ft === "object" && Ft && "type" in Ft ? String(Ft.type) : "unknown"
          }), typeof Ft === "object" && Ft && "description" in Ft && r(n, {
            dimColor: !0,
            children: [" - ", Nl(String(Ft.description), Oc)]
          })]
        }, sn);
      })
    })]
  }), T[38] = tool.inputJSONSchema, T[39] = Qe;else Qe = T[39];
  let children_9;
  if (T[40] !== ht || T[41] !== le || T[42] !== wt || T[43] !== Qe) children_9 = r(s, {
    flexDirection: "column",
    children: [ht, le, wt, Qe]
  }), T[40] = ht, T[41] = le, T[42] = wt, T[43] = Qe, T[44] = children_9;else children_9 = T[44];
  let ct;
  if (T[45] !== v || T[46] !== server_3.name || T[47] !== children_9 || T[48] !== title_2) ct = e(be, {
    title: title_2,
    subtitle: subtitle,
    onCancel: v,
    inputGuide: inputGuide_2,
    children: children_9
  }), T[45] = v, T[46] = server_3.name, T[47] = children_9, T[48] = title_2, T[49] = ct;else ct = T[49];
  return ct;
}
B();
function Rg(Bt) {
  return Bt.mcp.tools;
}
function Tg(sn, Ft) {
  let _e = sn.mcpInfo?.effectiveMaxPermission === "blocked" ? 1 : 0;
  let ct = Ft.mcpInfo?.effectiveMaxPermission === "blocked" ? 1 : 0;
  return _e - ct;
}
function Eg(Ct) {
  return Ct.mcpInfo?.effectiveMaxPermission === "blocked";
}
function Dg(Mt) {
  return e(tn.Item, {
    label: Mt.label,
    icon: Mt.blocked ? e(ft, {
      status: "warning"
    }) : void 0,
    meta: Mt.facts
  }, Mt.tool.name);
}
function Hzt(a) {
  let j = w(21),
    {
      server: server_4,
      onSelectTool: onSelectTool,
      onBack: v
    } = a,
    C = V(Rg),
    [x, T] = y(0),
    [K, N] = y(!1),
    D = ot(),
    Y;
  _: {
    if (!Ps(server_4.client)) {
      let U;
      if (j[0] === S) U = [], j[0] = U;else U = j[0];
      Y = U;
      break _;
    }
    let U;
    if (j[1] !== C || j[2] !== server_4.name) U = u9(C, server_4.name).sort(Tg), j[1] = C, j[2] = server_4.name, j[3] = U;else U = j[3];
    Y = U;
  }
  let ee = Y,
    ce = F(ee, Eg),
    U;
  if (j[4] !== ce || j[5] !== x || j[6] !== D || j[7] !== v || j[8] !== onSelectTool || j[9] !== K || j[10] !== server_4.name || j[11] !== ee) {
    let fe;
    if (j[13] !== server_4.name) fe = tool_2 => {
      let pe = nfn(tool_2.name, server_4.name);
      let ye = tool_2.userFacingName ? tool_2.userFacingName({}) : pe;
      let label = zr(rfn(ye));
      let Ve = tool_2.isReadOnly?.({}) ?? !1;
      let at = tool_2.isDestructive?.({}) ?? !1;
      let We = tool_2.isOpenWorld?.({}) ?? !1;
      let He = tool_2.mcpInfo?.effectiveMaxPermission;
      if (He === "blocked") {
        return {
          tool: tool_2,
          label: label,
          blocked: !0,
          facts: ["disabled by your organization"]
        };
      }
      let facts_2 = He === "ask" ? ["ask-only"] : [];
      if (Ve) facts_2.push("read-only");
      if (at) facts_2.push("destructive");
      if (We) facts_2.push("open-world");
      return {
        tool: tool_2,
        label: label,
        blocked: !1,
        facts: facts_2
      };
    }, j[13] = server_4.name, j[14] = fe;else fe = j[14];
    let ve = ee.map(fe);
    let St = ee.length - ce;
    let Dt = K ? ve[x] : void 0;
    let subtitle_2 = Dt?.blocked ? r(n, {
      color: "warning",
      children: [Dt.label, " is disabled by your organization"]
    }) : ce > 0 ? `${St} ${O(St, "tool")} \xB7 ${ce} disabled by your organization` : `${ee.length} ${O(ee.length, "tool")}`;
    let Et;
    if (j[15] !== D) Et = !D && e(q, {
      chord: ["up", "down"],
      action: "navigate"
    }), j[15] = D, j[16] = Et;else Et = j[16];
    const ze = D || ve[x]?.blocked ? null : e(q, {
      chord: "enter",
      action: "select"
    });
    let ht;
    if (j[17] === S) ht = e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "back"
    }), j[17] = ht;else ht = j[17];
    let inputGuide_3;
    if (j[18] !== Et || j[19] !== ze) inputGuide_3 = r(Se, {
      children: [Et, ze, ht]
    }), j[18] = Et, j[19] = ze, j[20] = inputGuide_3;else inputGuide_3 = j[20];
    U = e(be, {
      title: `Tools for ${server_4.name}`,
      subtitle: subtitle_2,
      onCancel: v,
      inputGuide: inputGuide_3,
      children: ee.length === 0 ? e(Eo, {
        children: "No tools available"
      }) : e(tn, {
        wrap: !0,
        onFocus: le => {
          T(le), N(!1);
        },
        onSelect: wt => {
          let Qe = ve[wt];
          if (!Qe) {
            return;
          }
          if (Qe.blocked) {
            N(!0);
            return;
          }
          onSelectTool(Qe.tool);
        },
        children: ve.map(Dg)
      })
    });
    j[4] = ce, j[5] = x, j[6] = D, j[7] = v, j[8] = onSelectTool, j[9] = K, j[10] = server_4.name, j[11] = ee, j[12] = U;
  } else U = j[12];
  return U;
}
B();
var Vo = " Its bundled MCP server needs configuration before it can start \u2014 select the plugin in /plugin's Installed tab and choose Configure.";
async function Ua(a, h, k, v) {
  let C = await Mg(a, h, k, v),
    activated = C === null || C === "needs_config";
  if (i("tengu_plugin_install_auto_activate", {
    activated: activated,
    ...(C !== null && {
      reason: c(C)
    })
  }), activated) g("plugin_install_auto_activate");else if (C === "cache_impact") p("plugin_install_auto_activate", "cache_impact");else m("plugin_install_auto_activate", C);
  if (C === null) return "activated";
  if (C === "needs_config") return "needs-config";
  if (C === "plugin_load_error") return "load-failed";
  return h.markNeedsRefresh(), "reload-required";
}
async function Mg(a, h, k, v) {
  let C = k;
  try {
    if ((await R8(a())).wouldInvalidateCache) return "cache_impact";
    let T = await FF(h, v),
      K = await boe(T.errors, v);
    if (K.installed.length > 0) {
      if ((await R8(a())).wouldInvalidateCache) return "cache_impact";
      T = await FF(h, v), C = [...C, ...K.installed];
    }
    if (T.error_count > T.errors.length) return "refresh_failed";
    if (T.errors.some(item => $g(item, C))) return "plugin_load_error";
    if (T.warnings.some(item => item.type === "mcpb-needs-config" && k.includes(item.source))) return "needs_config";
    return null;
  } catch (error) {
    return l(error), t(`activatePluginsAfterInstall: falling back to needsRefresh: ${d(error)}`, {
      level: "error"
    }), "refresh_failed";
  }
}
function $g(a, h) {
  if ("orphan" in a && a.orphan) return !1;
  if (uke(a) === void 0) return !1;
  let k = "pluginId" in a && a.pluginId ? a.pluginId : "plugin" in a && a.plugin ? a.plugin : void 0,
    v = k !== void 0 && k.includes("@") ? k : a.source.includes("@") ? a.source : k ?? a.source;
  return v.includes("@") ? h.includes(v) : h.some(item => nt(item, "@") === v);
}
B();
var Qc = "Invalid marketplace source format. Try: owner/repo, https://..., or ./path";
function ja({
  inputValue: a,
  setInputValue: h,
  cursorOffset: cursorOffset_2,
  setCursorOffset: v,
  error: error_4,
  setError: setError,
  result: result,
  setResult: setResult,
  setViewState: setViewState,
  onAddComplete: onAddComplete,
  cliMode = !1,
  autoAdd: autoAdd,
  claudeAiListing: claudeAiListing,
  confirmAdd: confirmAdd
}) {
  let {
      storageV5: storageV5,
      credentials: credentials
    } = Oe(),
    fe = bl(),
    de = A(!1),
    [hideInputGuide, ye] = y(!1),
    [z, Ve] = y(""),
    [children_10, We] = y(null),
    [He, oe] = y(null),
    targetPlugin = confirmAdd?.plugin,
    St = A(!1),
    Dt = A(!1),
    Ze = xa(),
    Et = A(null),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = cs(),
    bt = A(!1),
    le = async () => {
      {
        let _e = await ix();
        if (_e === "blocked" || _e === "unavailable") {
          CZt({
            reason: _e === "blocked" ? "policy_blocked" : "reserved_name",
            sourceKind: void 0,
            surface: "ui"
          });
          let ct = _e === "blocked" ? `${Tr} is blocked by your organization. ${AH()} It can't be turned on here.` : `The ${Tr} isn't available in this session.`;
          if (setError(ct), cliMode) setResult(ct);
          return;
        }
        if (_e === "off") {
          try {
            await pOt(!0);
          } catch (error) {
            fPe({
              enabled: !0,
              surface: "ui",
              failure: "settings_write_failed"
            });
            let Ct = Rt(d(error), 300);
            if (setError(Ct), cliMode) setResult(`Error: ${Ct}`);
            return;
          }
          fPe({
            enabled: !0,
            surface: "ui"
          }), cd(storageV5, credentials), await onAddComplete();
        } else await eQt(!0);
        if (setError(null), cliMode) setResult(_e === "off" ? `${Tr} is on. Its plugins are back in /plugin \u2192 Discover.` : `${Tr} is already on`);else if (_e === "off") setViewState({
          type: "browse-marketplace",
          targetMarketplace: hn
        });else We(`${Tr} is already on.`);
      }
    },
    onSubmit = async () => {
      let _e = a.trim();
      if (!_e) {
        setError("Please enter a marketplace source");
        return;
      }
      if (We(null), QD(_e)) {
        if (bt.current) return;
        bt.current = !0, await le().finally(() => {
          bt.current = !1;
        });
        return;
      }
      let ct = await dhe(_e);
      if (!ct) {
        setError(Qc);
        return;
      }
      if ("error" in ct) {
        setError(ct.error);
        return;
      }
      await Qe(ct);
    },
    Qe = async _e => {
      setError(null);
      try {
        ye(!0), Ve("");
        let {
            name: ct,
            resolvedSource: Ct,
            replacedSource: replacedSource
          } = await Fse(_e, cn => {
            Ve(cn);
          }, storageV5, void 0, {
            refuseNameCollision: confirmAdd !== void 0
          }),
          {
            error: error_5
          } = await b6e(ct, {
            source: Ct
          }, "userSettings", storageV5);
        if (error_5) throw error_5;
        cd(storageV5, credentials), i("tengu_marketplace_added", {
          _PROTO_marketplace_name: ct,
          source_type: c(_e.source),
          repo_hash: _e.source === "github" ? an(_e.repo) : void 0,
          is_official_marketplace: zl(ct)
        });
        let Kt = [];
        if (confirmAdd === void 0) try {
          Kt = (await boe((await lw(storageV5, credentials)).errors, storageV5)).installed;
        } catch (error) {
          t(`marketplace add: dep auto-resolve skipped: ${d(error)}`, {
            level: "warn"
          });
        }
        if (Kt.length > 0) cd(storageV5, credentials);
        if (await onAddComplete(), Ve(""), ye(!1), cliMode) setResult([`Successfully added marketplace: ${ct}${qee(Kt)}`, ...zNn({
          name: ct,
          replacedSource: replacedSource,
          resolvedSource: Ct,
          settingSource: "userSettings"
        })].join(`
`));else if (!Dt.current) setViewState({
          type: "browse-marketplace",
          targetMarketplace: ct,
          targetPlugin: targetPlugin
        });
      } catch (error) {
        let Ct = H(error);
        if (t(`marketplace add failed: ${d(Ct)}`, {
          level: "error"
        }), setError(Ct.message), Ve(""), ye(!1), cliMode) setResult(`Error: ${Ct.message}`);else setResult(null);
      }
    };
  async function Bt(_e, ct) {
    try {
      if (_e.linkOrigin) {
        if (_kt(a), _e.plugin !== void 0) RYr(_e.plugin);
      }
      let Ct = await dhe(a);
      if (ct()) return;
      if (!Ct || "error" in Ct) {
        setError(Ct?.error ?? Qc);
        return;
      }
      let Mt = await ic(storageV5),
        targetMarketplace = _e.linkOrigin ? OFn(Mt, Ct) : ypo(Mt, Ct);
      if (ct()) return;
      if (targetMarketplace !== void 0) {
        setViewState({
          type: "browse-marketplace",
          targetMarketplace: targetMarketplace,
          targetPlugin: _e.plugin
        });
        return;
      }
      Et.current = Date.now(), oe(Ct);
    } catch (error) {
      if (!ct()) setError(d(error));
    }
  }
  P(() => {
    if (confirmAdd === void 0) return;
    let _e = !1;
    return Bt(confirmAdd, () => _e), () => {
      _e = !0;
    };
  }, []);
  function onCancel_3() {
    if (St.current) return;
    Dt.current = !0, setViewState({
      type: "menu"
    });
  }
  function onKeyDown_2(_e) {
    if (_e.ctrl || _e.meta || hideInputGuide) return;
    if ((_e.key === "y" || _e.key === "Y") && He) {
      _e.preventDefault();
      let current = Et.current;
      if (current === null || El(Ze, current, No) || refusedWithin(No)) {
        noteRefused();
        return;
      }
      if (St.current || Dt.current) return;
      St.current = !0, Qe(He).finally(() => {
        St.current = !1;
      });
    } else if (_e.key === "n" || _e.key === "N") _e.preventDefault(), onCancel_3();
  }
  if (P(() => {
    if (autoAdd && confirmAdd === void 0 && a && !de.current && !error_4 && !result) de.current = !0, onSubmit();
  }, []), confirmAdd !== void 0) {
    let _e = He && "ref" in He ? He.ref : void 0;
    return e(be, {
      title: "Add marketplace?",
      color: "suggestion",
      onCancel: onCancel_3,
      isCancelActive: !hideInputGuide,
      hideInputGuide: hideInputGuide,
      inputGuide: He ? r(n, {
        children: ["Press ", e(n, {
          bold: !0,
          children: "y"
        }), " to add or ", e(n, {
          bold: !0,
          children: "n"
        }), " to cancel"]
      }) : r(n, {
        children: ["Press ", e(n, {
          bold: !0,
          children: "n"
        }), " to cancel"]
      }),
      children: r(ko, {
        onKeyDown: onKeyDown_2,
        gap: 1,
        children: [He ? r(s, {
          flexDirection: "column",
          children: [targetPlugin !== void 0 ? r(n, {
            children: ["To install", " ", e(n, {
              bold: !0,
              children: Wn(targetPlugin)
            }), ", add the marketplace that lists it:"]
          }) : e(n, {
            children: "Add this marketplace:"
          }), r(n, {
            children: ["  ", Wn(X1(He))]
          }), _e !== void 0 && r(n, {
            children: ["  ", "Pinned to ", Wn(_e), "; it won't receive updates past it."]
          }), e(s, {
            marginTop: 1,
            children: e(n, {
              dimColor: !0,
              children: targetPlugin !== void 0 ? "Only add marketplaces you trust. You'll review the plugin and choose where to install it next." : "Only add marketplaces you trust. You'll review its plugins before installing any."
            })
          })]
        }) : !error_4 && r(s, {
          children: [e(Ii, {}), e(n, {
            children: "Checking marketplace source\u2026"
          })]
        }), hideInputGuide && r(s, {
          children: [e(Ii, {}), e(n, {
            children: Wn(z) || "Adding marketplace to configuration\u2026"
          })]
        }), error_4 && e(ls, {
          error: Nd(error_4)
        })]
      })
    });
  }
  return r(s, {
    flexDirection: "column",
    children: [r(s, {
      flexDirection: "column",
      paddingX: 1,
      borderStyle: fe ? void 0 : "round",
      children: [e(s, {
        marginBottom: 1,
        children: e(n, {
          bold: !0,
          children: "Add Marketplace"
        })
      }), r(s, {
        flexDirection: "column",
        children: [claudeAiListing && r(s, {
          marginBottom: 1,
          flexDirection: "column",
          children: [r(n, {
            children: ["claude.ai lists", " ", e(n, {
              bold: !0,
              children: Wn($A(claudeAiListing.name))
            }), " ", "for your account:"]
          }), r(n, {
            children: [" ", Wn(claudeAiListing.source)]
          }), e(n, {
            dimColor: !0,
            children: "Type or paste its source below to add it."
          })]
        }), e(n, {
          children: "Enter marketplace source:"
        }), e(n, {
          dimColor: !0,
          children: "Examples:"
        }), e(n, {
          dimColor: !0,
          children: " \xB7 owner/repo (GitHub)"
        }), e(n, {
          dimColor: !0,
          children: " \xB7 git@github.com:owner/repo.git (SSH)"
        }), e(n, {
          dimColor: !0,
          children: " \xB7 https://example.com/marketplace.json"
        }), e(n, {
          dimColor: !0,
          children: " \xB7 ./path/to/marketplace"
        }), e(s, {
          marginTop: 1,
          children: e(Lr, {
            value: a,
            onChange: h,
            onSubmit: onSubmit,
            columns: 80,
            cursorOffset: cursorOffset_2,
            onChangeCursorOffset: v,
            focus: !0,
            showCursor: !0
          })
        })]
      }), hideInputGuide && r(s, {
        marginTop: 1,
        children: [e(Ii, {}), e(n, {
          children: Wn(z) || "Adding marketplace to configuration\u2026"
        })]
      }), error_4 && e(s, {
        marginTop: 1,
        children: e(ls, {
          error: Nd(error_4)
        })
      }), children_10 && e(s, {
        marginTop: 1,
        children: e(n, {
          children: children_10
        })
      }), result && e(s, {
        marginTop: 1,
        children: e(n, {
          children: Nd(result)
        })
      })]
    }), e(s, {
      marginLeft: fe ? 1 : 3,
      marginTop: fe ? 1 : 0,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: r(Se, {
          children: [e(q, {
            chord: "enter",
            action: "add"
          }), e(gt, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "cancel"
          })]
        })
      })
    })]
  });
}
B();
B();
function Cf(ve) {
  return Object.keys(ve.userConfig ?? {}).length > 0;
}
function If(steps) {
  return {
    steps: steps
  };
}
function Pf() {}
function xf(wt) {
  return t(`Failed to save plugin options: ${d(wt)}`, {
    level: "error"
  }), wt ?? Error("save failed");
}
async function nl(a, h, k) {
  let {
    enabled: enabled,
    disabled: disabled
  } = await lw(h, k);
  return tct([...enabled, ...disabled], a);
}
async function _g(a, h) {
  return Object.keys(await dPe(a, h)).length > 0 || (await Rmr(a, h)).length > 0;
}
async function Mr(pluginId, h, k, v) {
  let plugin = await nl(pluginId, k, v);
  if (!plugin || !(await _g(plugin, v))) return null;
  let x;
  for (let K of Wo()) {
    let N = W3(me(K)?.enabledPlugins, pluginId);
    if (N !== void 0) x = N;
  }
  let installedDisabled = x !== void 0 ? x === !1 : plugin.manifest.defaultEnabled === !1;
  return {
    type: "plugin-options",
    plugin: plugin,
    pluginId: pluginId,
    depNote: h?.suffix ?? "",
    alreadyInstalled: !0,
    depsResolved: h?.changed ?? !1,
    installedDisabled: installedDisabled,
    installedDisabledByDefault: x === void 0 && plugin.manifest.defaultEnabled === !1
  };
}
function Ni(a) {
  let ce = w(22),
    {
      viewState: viewState,
      onInstallComplete: onInstallComplete,
      onFinish: onFinish
    } = a,
    {
      plugin: plugin_2,
      pluginId: pluginId_2,
      depNote: depNote,
      alreadyInstalled: alreadyInstalled,
      depsResolved: depsResolved,
      installedDisabled: installedDisabled_2,
      installedDisabledByDefault: installedDisabledByDefault
    } = viewState,
    j = alreadyInstalled ? "Already installed" : "Installed",
    [U, _] = y(!1),
    ee = A(!1),
    fe,
    de;
  if (ce[0] === S) fe = () => () => {
    ee.current = !0;
  }, de = [], ce[0] = fe, ce[1] = de;else fe = ce[0], de = ce[1];
  P(fe, de);
  let pe = !alreadyInstalled || Boolean(depsResolved),
    ye;
  if (ce[2] !== installedDisabled_2 || ce[3] !== installedDisabledByDefault || ce[4] !== onInstallComplete || ce[5] !== pluginId_2) ye = async function oe(z) {
    if (!z) {
      return "";
    }
    let Ve = onInstallComplete ? await onInstallComplete([pluginId_2]) : "reload-required";
    if (installedDisabled_2) {
      let at = ll("plugin enable", pluginId_2);
      let We = `enable it in /plugin${at ? ` or run: ${at}` : ""}.`;
      let He = Ve === "load-failed" ? " The plugin couldn't be loaded \u2014 see /plugin for details." : "";
      return installedDisabledByDefault ? ` This plugin is disabled by default \u2014 ${We}${He}` : ` This plugin is disabled \u2014 ${We}${He}`;
    }
    switch (Ve) {
      case "activated":
        {
          return " Plugin is now active.";
        }
      case "needs-config":
        {
          return ` Plugin is now active.${Vo}`;
        }
      case "load-failed":
        {
          return " The plugin couldn't be loaded \u2014 see /plugin for details.";
        }
      case "reload-required":
        {
          return " Run /reload-plugins to apply.";
        }
    }
  }, ce[2] = installedDisabled_2, ce[3] = installedDisabledByDefault, ce[4] = onInstallComplete, ce[5] = pluginId_2, ce[6] = ye;else ye = ce[6];
  let oe = ye;
  if (U) {
    let ve;
    if (ce[7] === S) ve = e(Wr, {
      message: "Activating plugin\u2026"
    }), ce[7] = ve;else ve = ce[7];
    return ve;
  }
  let onDone;
  if (ce[8] !== oe || ce[9] !== alreadyInstalled || ce[10] !== pe || ce[11] !== depNote || ce[12] !== onFinish || ce[13] !== onInstallComplete || ce[14] !== plugin_2 || ce[15] !== pluginId_2 || ce[16] !== j) onDone = (St, Dt, Ze) => {
    (async () => {
      _(!0);
      let ze = Et => {
        if (!ee.current) onFinish(Et);
      };
      le: switch (St) {
        case "configured":
          {
            let ht = Boolean(Ze);
            let bt = pe || ht;
            ze(`\u2713 ${ht ? alreadyInstalled ? "Configured" : "Installed and configured" : j} ${Wm(plugin_2)}${depNote}.${await oe(bt)}`);
            break le;
          }
        case "skipped":
          {
            let wt = pe || Boolean(Ze);
            ze(`\u2713 ${j} ${Wm(plugin_2)}${depNote}.${await oe(wt)}`);
            break le;
          }
        case "read-error":
          {
            ze(`${j} ${Wm(plugin_2)}${depNote}, but its saved options could not be read (${Dt}).${await oe(pe)}`);
            break le;
          }
        case "error":
          {
            let Qe = !1;
            if (pe || Boolean(Ze)) Qe = (await onInstallComplete?.([pluginId_2])) === "load-failed";
            ze(`${j} but failed to save config: ${Dt}${Qe ? " The plugin couldn't be loaded \u2014 see /plugin for details." : ""}`);
          }
      }
    })();
  }, ce[8] = oe, ce[9] = alreadyInstalled, ce[10] = pe, ce[11] = depNote, ce[12] = onFinish, ce[13] = onInstallComplete, ce[14] = plugin_2, ce[15] = pluginId_2, ce[16] = j, ce[17] = onDone;else onDone = ce[17];
  let Bt;
  if (ce[18] !== plugin_2 || ce[19] !== pluginId_2 || ce[20] !== onDone) Bt = e(Di, {
    plugin: plugin_2,
    pluginId: pluginId_2,
    onDone: onDone
  }), ce[18] = plugin_2, ce[19] = pluginId_2, ce[20] = onDone, ce[21] = Bt;else Bt = ce[21];
  return Bt;
}
function Di(a) {
  let T = w(24),
    {
      plugin: plugin_3,
      pluginId: pluginId_3,
      onDone: onDone_2
    } = a,
    {
      storageV5: storageV5_2,
      credentials: credentials_2
    } = Oe(),
    K;
  if (T[0] !== credentials_2 || T[1] !== plugin_3 || T[2] !== pluginId_3 || T[3] !== storageV5_2) K = async function ee() {
    let N = [];
    let schema = await dPe(plugin_3, credentials_2);
    if (Object.keys(schema).length > 0) N.push({
      key: "top-level",
      title: `Configure ${Wm(plugin_3)}`,
      subtitle: "Plugin options",
      schema: schema,
      load: () => QP(pluginId_3, credentials_2),
      save: Y => lPe(pluginId_3, Y, plugin_3.manifest.userConfig, storageV5_2)
    });
    let j = await Rmr(plugin_3, credentials_2);
    for (const U of j) N.push({
      key: `channel:${U.server}`,
      title: `Configure ${U.displayName}`,
      subtitle: `Plugin: ${Wm(plugin_3)}`,
      schema: U.configSchema,
      load: async () => (await Dwe(pluginId_3, U.server, credentials_2)) ?? void 0,
      save: _ => ect(pluginId_3, U.server, _, U.configSchema, storageV5_2)
    });
    return N;
  }, T[0] = credentials_2, T[1] = plugin_3, T[2] = pluginId_3, T[3] = storageV5_2, T[4] = K;else K = T[4];
  let ee = K,
    ce;
  if (T[5] !== ee || T[6] !== plugin_3.manifest.channels || T[7] !== plugin_3.manifest.userConfig || T[8] !== pluginId_3) ce = () => Object.keys(plugin_3.manifest.userConfig ?? {}).length > 0 || (plugin_3.manifest.channels ?? []).some(Cf) ? ee().then(If, fe => (Dr(pluginId_3, fe), {
    steps: [],
    error: d(fe)
  })) : {
    steps: []
  }, T[5] = ee, T[6] = plugin_3.manifest.channels, T[7] = plugin_3.manifest.userConfig, T[8] = pluginId_3, T[9] = ce;else ce = T[9];
  let [de] = y(ce),
    pe = A(!1),
    [ye, z] = y(!1);
  if (!(de instanceof Promise)) {
    let Ve;
    if (T[10] !== onDone_2 || T[11] !== de) Ve = e(Mi, {
      loaded: de,
      onDone: onDone_2
    }), T[10] = onDone_2, T[11] = de, T[12] = Ve;else Ve = T[12];
    return Ve;
  }
  if (ye) {
    return null;
  }
  let onCancel_4;
  if (T[13] !== onDone_2) onCancel_4 = () => {
    if (pe.current) {
      return;
    }
    pe.current = !0, z(!0), onDone_2("skipped", void 0, !1);
  }, T[13] = onDone_2, T[14] = onCancel_4;else onCancel_4 = T[14];
  let children_11;
  if (T[15] === S) children_11 = e(Wr, {
    message: "Loading\u2026",
    dimColor: !0
  }), T[15] = children_11;else children_11 = T[15];
  let fallback_2;
  if (T[16] !== onCancel_4) fallback_2 = e(Ai, {
    onCancel: onCancel_4,
    children: children_11
  }), T[16] = onCancel_4, T[17] = fallback_2;else fallback_2 = T[17];
  let children_12;
  if (T[18] !== onDone_2 || T[19] !== de) children_12 = e(el, {
    steps: de,
    onDone: onDone_2
  }), T[18] = onDone_2, T[19] = de, T[20] = children_12;else children_12 = T[20];
  let oe;
  if (T[21] !== fallback_2 || T[22] !== children_12) oe = e(Xr, {
    fallback: fallback_2,
    children: children_12
  }), T[21] = fallback_2, T[22] = children_12, T[23] = oe;else oe = T[23];
  return oe;
}
function el(a) {
  let C = w(3),
    {
      steps: steps_2,
      onDone: onDone_3
    } = a,
    loaded = $r(steps_2),
    x;
  if (C[0] !== loaded || C[1] !== onDone_3) x = e(Mi, {
    loaded: loaded,
    onDone: onDone_3
  }), C[0] = loaded, C[1] = onDone_3, C[2] = x;else x = C[2];
  return x;
}
function Mi(a) {
  let Y = w(34),
    {
      loaded: loaded_2,
      onDone: onDone_4
    } = a,
    {
      steps: steps_3,
      error: error_6
    } = loaded_2,
    [index, T] = y(0),
    K = A(!1),
    N = A(!1),
    D = A(!1),
    j;
  if (Y[0] !== onDone_4) j = function ee(...U) {
    let _ = U;
    if (N.current) {
      return;
    }
    N.current = !0, onDone_4(..._);
  }, Y[0] = onDone_4, Y[1] = j;else j = Y[1];
  let ee = j,
    U;
  if (Y[2] !== ee || Y[3] !== error_6) U = () => {
    if (error_6 !== void 0) ee("read-error", error_6);else ee("skipped");
  }, Y[2] = ee, Y[3] = error_6, Y[4] = U;else U = Y[4];
  let ce = Mo(U),
    fe;
  if (Y[5] !== error_6 || Y[6] !== ce || Y[7] !== steps_3.length) fe = () => {
    if (error_6 !== void 0 || steps_3.length === 0) ce();
  }, Y[5] = error_6, Y[6] = ce, Y[7] = steps_3.length, Y[8] = fe;else fe = Y[8];
  let de;
  if (Y[9] !== error_6 || Y[10] !== steps_3.length) de = [steps_3.length, error_6], Y[9] = error_6, Y[10] = steps_3.length, Y[11] = de;else de = Y[11];
  P(fe, de);
  let [pe, ye] = y(null),
    z;
  if (Y[12] !== ee || Y[13] !== steps_3.length) z = (Ve, at) => {
    if (D.current = !1, ye(null), at !== void 0) {
      ee("error", d(at), K.current);
      return;
    }
    if (Object.keys(Ve.values).length > 0) K.current = !0;
    let We = Ve.index + 1;
    if (We < steps_3.length) T(We);else ee("configured", void 0, K.current);
  }, Y[12] = ee, Y[13] = steps_3.length, Y[14] = z;else z = Y[14];
  let He = Mo(z),
    oe;
  if (Y[15] !== pe || Y[16] !== He) oe = () => {
    if (pe === null) {
      return;
    }
    let ve = pe;
    ve.saveOutcome.then(St => He(ve, St));
  }, Y[15] = pe, Y[16] = He, Y[17] = oe;else oe = Y[17];
  let Dt;
  if (Y[18] !== pe) Dt = [pe], Y[18] = pe, Y[19] = Dt;else Dt = Y[19];
  if (P(oe, Dt), steps_3.length === 0) {
    return null;
  }
  let Ze = steps_3[index],
    Et;
  if (Y[20] !== Ze || Y[21] !== index || Y[22] !== pe) Et = function ht(values) {
    if (N.current || D.current || pe !== null) {
      return;
    }
    D.current = !0, ye({
      index: index,
      values: values,
      saveOutcome: (async () => Ze.save(values))().then(Pf, xf)
    });
  }, Y[20] = Ze, Y[21] = index, Y[22] = pe, Y[23] = Et;else Et = Y[23];
  let onSave = Et,
    onCancel_5;
  if (Y[24] !== ee) onCancel_5 = () => {
    if (D.current) {
      return;
    }
    ee("skipped", void 0, K.current);
  }, Y[24] = ee, Y[25] = onCancel_5;else onCancel_5 = Y[25];
  let le;
  if (Y[26] !== Ze.key || Y[27] !== Ze.load || Y[28] !== Ze.schema || Y[29] !== Ze.subtitle || Y[30] !== Ze.title || Y[31] !== onSave || Y[32] !== onCancel_5) le = e($i, {
    title: Ze.title,
    subtitle: Ze.subtitle,
    configSchema: Ze.schema,
    load: Ze.load,
    onSave: onSave,
    onCancel: onCancel_5
  }, Ze.key), Y[26] = Ze.key, Y[27] = Ze.load, Y[28] = Ze.schema, Y[29] = Ze.subtitle, Y[30] = Ze.title, Y[31] = onSave, Y[32] = onCancel_5, Y[33] = le;else le = Y[33];
  return le;
}
function $i(a) {
  let h = w(14),
    dialog,
    load;
  if (h[0] !== a) ({
    load: load,
    ...dialog
  } = a), h[0] = a, h[1] = dialog, h[2] = load;else dialog = h[1], load = h[2];
  let C;
  if (h[3] !== dialog.title || h[4] !== load) C = () => Promise.resolve().then(load).catch(x => {
    Dr(dialog.title, x);
  }), h[3] = dialog.title, h[4] = load, h[5] = C;else C = h[5];
  let [saved] = y(C),
    fallback_3;
  if (h[6] !== dialog.onCancel) fallback_3 = e(Ai, {
    onCancel: dialog.onCancel
  }), h[6] = dialog.onCancel, h[7] = fallback_3;else fallback_3 = h[7];
  let children_13;
  if (h[8] !== dialog || h[9] !== saved) children_13 = e(tl, {
    dialog: dialog,
    saved: saved
  }), h[8] = dialog, h[9] = saved, h[10] = children_13;else children_13 = h[10];
  let D;
  if (h[11] !== fallback_3 || h[12] !== children_13) D = e(Xr, {
    fallback: fallback_3,
    children: children_13
  }), h[11] = fallback_3, h[12] = children_13, h[13] = D;else D = h[13];
  return D;
}
function Dr(a, h) {
  t(`Failed to read saved plugin options (${a}): ${d(h)}`, {
    level: "error"
  });
}
function tl(a) {
  let C = w(3),
    {
      dialog: dialog_2,
      saved: saved_2
    } = a,
    initialValues = $r(saved_2),
    x;
  if (C[0] !== dialog_2 || C[1] !== initialValues) x = e(Uzt, {
    ...dialog_2,
    initialValues: initialValues
  }), C[0] = dialog_2, C[1] = initialValues, C[2] = x;else x = C[2];
  return x;
}
function Ai(a) {
  let v = w(1),
    {
      onCancel: onCancel_6,
      children: children_14
    } = a,
    C;
  if (v[0] === S) C = {
    context: "Settings"
  }, v[0] = C;else C = v[0];
  return rt("confirm:no", onCancel_6, C), Ytt(), children_14 ?? null;
}
B();
function oi(a) {
  return [["Commands", a.commands.map(item => item.name)], ["Agents", a.agents.map(item => item.name)], ["Skills", a.skills.map(item => item.name)], ["Hooks", a.hooks ?? []], ["MCP Servers", a.mcpServers ?? []], ["LSP Servers", a.lspServers ?? []]].filter(([, k]) => k.length > 0);
}
function Ar() {
  let a = w(3),
    h;
  if (a[0] === S) h = DPr(), a[0] = h;else h = a[0];
  let k = h,
    v;
  if (a[1] === S) v = r(n, {
    color: "claude",
    children: [te.warning, " "]
  }), a[1] = v;else v = a[1];
  let C;
  if (a[2] === S) C = r(s, {
    marginBottom: 1,
    children: [v, r(n, {
      dimColor: !0,
      italic: !0,
      children: ["Make sure you trust a plugin before installing, updating, or using it. Anthropic does not control what MCP servers, files, or other software are included in plugins and cannot verify that they will work as intended or that they won't change. See each plugin's homepage for more information.", k ? ` ${k}` : ""]
    })]
  }), a[2] = C;else C = a[2];
  return C;
}
function my(C) {
  return C ?? null;
}
function gy() {
  return null;
}
function fy(a) {
  let [Y, j] = a;
  return r(n, {
    dimColor: !0,
    children: ["\xB7 ", Y, ": ", j.map(Wn).join(", ")]
  }, Y);
}
function ky() {
  return null;
}
function by(a) {
  let [, Y] = a;
  return Y.length > 0;
}
function vy(a) {
  let [j, U] = a;
  return r(n, {
    dimColor: !0,
    children: ["\xB7 ", j, ": ", U.map(Wn).join(", ")]
  }, j);
}
function fl(a) {
  let v = w(9),
    {
      plugin: plugin_4
    } = a;
  if (plugin_4.fromPluginDirectory !== !0) {
    return null;
  }
  let source = plugin_4.entry.source,
    C,
    x;
  if (v[0] !== plugin_4 || v[1] !== source) {
    let T = _bn(plugin_4);
    C = typeof source === "object" && "sha" in source ? source.sha : void 0;
    x = T && r(n, {
      dimColor: !0,
      children: ["Repository: ", Wn(T)]
    });
    v[0] = plugin_4, v[1] = source, v[2] = C, v[3] = x;
  } else C = v[2], x = v[3];
  let K;
  if (v[4] !== C) K = C && r(n, {
    dimColor: !0,
    children: ["Installs exactly commit ", C.slice(0, 7), ", the commit the", " ", Tr, " lists"]
  }), v[4] = C, v[5] = K;else K = v[5];
  let N;
  if (v[6] !== x || v[7] !== K) N = r(Q, {
    children: [x, K]
  }), v[6] = x, v[7] = K, v[8] = N;else N = v[8];
  return N;
}
function vu(a) {
  if (a.entry.source && typeof a.entry.source === "object" && "source" in a.entry.source && a.entry.source.source === "github" && typeof a.entry.source === "object" && "repo" in a.entry.source) return a.entry.source.repo;
  return null;
}
function wu(a) {
  {
    let source_2 = a.entry.source;
    if (typeof source_2 !== "object" || source_2 === null || source_2.source !== "url" && source_2.source !== "git-subdir") return;
    let k = source_2.url.replace(/\.git$/, "");
    return /^[\w.-]+\/[\w.-]+$/.test(k) ? `https://github.com/${k}` : Eze(k);
  }
  return;
}
function Cu(a, h, k) {
  let v = [{
    label: "Install for you (user scope)",
    value: "install-user"
  }, {
    label: "Install for all collaborators on this repository (project scope)",
    value: "install-project"
  }, {
    label: "Install for you, in this repo only (local scope)",
    value: "install-local"
  }];
  if (a) v.push({
    label: "Open homepage",
    value: "homepage"
  });
  if (h) v.push({
    label: "View on GitHub",
    value: "github"
  });
  if (k && k !== a) v.push({
    label: "View repository",
    value: "repository"
  });
  return v.push({
    label: "Back to plugin list",
    value: "back"
  }), v;
}
function Yo(a) {
  let K = w(6),
    {
      options: options_3,
      onSelect: k,
      selectionDisabled: selectionDisabled,
      defaultFocusValue: defaultFocusValue_2,
      onFocus: onFocus
    } = a,
    disableSelection = selectionDisabled === void 0 ? !1 : selectionDisabled,
    N;
  if (K[0] !== defaultFocusValue_2 || K[1] !== onFocus || K[2] !== k || K[3] !== options_3 || K[4] !== disableSelection) N = e(Xe, {
    options: options_3,
    onChange: k,
    disableSelection: disableSelection,
    defaultFocusValue: defaultFocusValue_2,
    onFocus: onFocus,
    hideIndexes: !0,
    visibleOptionCount: options_3.length,
    selectedValue: selectedValue,
    onUpFromFirstItem: Nr,
    onDownFromLastItem: Nr
  }), K[0] = defaultFocusValue_2, K[1] = onFocus, K[2] = k, K[3] = options_3, K[4] = disableSelection, K[5] = N;else N = K[5];
  return N;
}
function Nr() {}
function ji(a) {
  let j = w(88),
    {
      title: h,
      plugin: plugin_5,
      onEntryHelperShown: onEntryHelperShown,
      showMarketplace: showMarketplace,
      extraSection: extraSection,
      installError: T,
      isInstalling: K,
      onInstall: onInstall,
      onBack: onBack,
      bylinePaddingLeft: Y
    } = a,
    U,
    _,
    onSelect,
    ce,
    fe,
    options_4,
    flexDirection,
    ye,
    z,
    Ve,
    at,
    We,
    He;
  if (j[0] !== extraSection || j[1] !== T || j[2] !== K || j[3] !== onBack || j[4] !== onEntryHelperShown || j[5] !== onInstall || j[6] !== plugin_5 || j[7] !== showMarketplace || j[8] !== h) {
    let oe = Eze(plugin_5.entry.homepage);
    let ve = vu(plugin_5);
    let St = uw() ? wu(plugin_5) : void 0;
    onSelect = function ee(Dt) {
      switch (Dt) {
        case "install-user":
          {
            onInstall(plugin_5, "user");
            return;
          }
        case "install-project":
          {
            onInstall(plugin_5, "project");
            return;
          }
        case "install-local":
          {
            onInstall(plugin_5, "local");
            return;
          }
        case "homepage":
          {
            if (oe) Hs(oe);
            return;
          }
        case "github":
          {
            if (ve) Hs(`https://github.com/${ve}`);
            return;
          }
        case "repository":
          {
            if (St) Hs(St);
            return;
          }
        case "back":
          {
            onBack();
            return;
          }
      }
    };
    _ = s;
    flexDirection = "column";
    if (j[22] !== h) ye = e(s, {
      marginBottom: 1,
      children: e(n, {
        bold: !0,
        children: h
      })
    }), j[22] = h, j[23] = ye;else ye = j[23];
    let children_15;
    if (j[24] !== plugin_5.entry) children_15 = Wm(plugin_5.entry), j[24] = plugin_5.entry, j[25] = children_15;else children_15 = j[25];
    let Et;
    if (j[26] !== children_15) Et = e(n, {
      bold: !0,
      children: children_15
    }), j[26] = children_15, j[27] = Et;else Et = j[27];
    let ze;
    if (j[28] !== plugin_5 || j[29] !== showMarketplace) ze = showMarketplace && r(n, {
      dimColor: !0,
      children: ["from ", Wn(hbn(plugin_5))]
    }), j[28] = plugin_5, j[29] = showMarketplace, j[30] = ze;else ze = j[30];
    let ht;
    if (j[31] !== plugin_5 || j[32] !== showMarketplace) ht = showMarketplace && ybn(plugin_5) ? e(n, {
      dimColor: !0,
      children: Wn(ybn(plugin_5) ?? "")
    }) : null, j[31] = plugin_5, j[32] = showMarketplace, j[33] = ht;else ht = j[33];
    let bt;
    if (j[34] !== plugin_5.entry.tags) bt = uw() && plugin_5.entry.tags?.includes("community-managed") ? e(n, {
      dimColor: !0,
      children: "Community managed: maintained by its publisher, not Anthropic"
    }) : null, j[34] = plugin_5.entry.tags, j[35] = bt;else bt = j[35];
    let le;
    if (j[36] !== plugin_5) le = e(fl, {
      plugin: plugin_5
    }), j[36] = plugin_5, j[37] = le;else le = j[37];
    let wt;
    if (j[38] !== plugin_5.entry.version) wt = plugin_5.entry.version && r(n, {
      dimColor: !0,
      children: ["Version: ", Wn(plugin_5.entry.version)]
    }), j[38] = plugin_5.entry.version, j[39] = wt;else wt = j[39];
    let Qe;
    if (j[40] !== plugin_5.pluginId) Qe = e(yl, {
      pluginId: plugin_5.pluginId
    }), j[40] = plugin_5.pluginId, j[41] = Qe;else Qe = j[41];
    let Bt;
    if (j[42] !== plugin_5.entry.description) Bt = plugin_5.entry.description && e(s, {
      marginTop: 1,
      children: e(n, {
        children: Nd(plugin_5.entry.description)
      })
    }), j[42] = plugin_5.entry.description, j[43] = Bt;else Bt = j[43];
    let sn;
    if (j[44] !== plugin_5.entry.author) sn = plugin_5.entry.author && e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: ["By:", " ", Wn(typeof plugin_5.entry.author === "string" ? plugin_5.entry.author : plugin_5.entry.author.name)]
      })
    }), j[44] = plugin_5.entry.author, j[45] = sn;else sn = j[45];
    if (j[46] !== Et || j[47] !== ze || j[48] !== ht || j[49] !== bt || j[50] !== le || j[51] !== wt || j[52] !== Qe || j[53] !== Bt || j[54] !== sn) z = r(s, {
      flexDirection: "column",
      marginBottom: 1,
      children: [Et, ze, ht, bt, le, wt, Qe, Bt, sn]
    }), j[46] = Et, j[47] = ze, j[48] = ht, j[49] = bt, j[50] = le, j[51] = wt, j[52] = Qe, j[53] = Bt, j[54] = sn, j[55] = z;else z = j[55];
    if (j[56] !== T || j[57] !== onEntryHelperShown || j[58] !== plugin_5) Ve = e(kl, {
      plugin: plugin_5,
      onEntryHelperShown: onEntryHelperShown,
      refreshKey: T
    }), j[56] = T, j[57] = onEntryHelperShown, j[58] = plugin_5, j[59] = Ve;else Ve = j[59];
    at = extraSection;
    if (j[60] !== plugin_5.entry) We = e(Sl, {
      entry: plugin_5.entry
    }), j[60] = plugin_5.entry, j[61] = We;else We = j[61];
    if (j[62] === S) He = e(Ar, {}), j[62] = He;else He = j[62];
    if (j[63] !== T) fe = T && e(s, {
      marginBottom: 1,
      children: e(ls, {
        error: Nd(T)
      })
    }), j[63] = T, j[64] = fe;else fe = j[64];
    U = Yo;
    ce = plugin_5.pluginId;
    let Ft;
    if (j[65] !== K) Ft = _e => K && _e.value.startsWith("install-") ? {
      ..._e,
      label: "Installing\u2026"
    } : _e, j[65] = K, j[66] = Ft;else Ft = j[66];
    options_4 = Cu(oe, ve, St).map(Ft);
    j[0] = extraSection, j[1] = T, j[2] = K, j[3] = onBack, j[4] = onEntryHelperShown, j[5] = onInstall, j[6] = plugin_5, j[7] = showMarketplace, j[8] = h, j[9] = U, j[10] = _, j[11] = onSelect, j[12] = ce, j[13] = fe, j[14] = options_4, j[15] = flexDirection, j[16] = ye, j[17] = z, j[18] = Ve, j[19] = at, j[20] = We, j[21] = He;
  } else U = j[9], _ = j[10], onSelect = j[11], ce = j[12], fe = j[13], options_4 = j[14], flexDirection = j[15], ye = j[16], z = j[17], Ve = j[18], at = j[19], We = j[20], He = j[21];
  let Ze;
  if (j[67] !== U || j[68] !== K || j[69] !== onSelect || j[70] !== ce || j[71] !== options_4) Ze = e(U, {
    options: options_4,
    selectionDisabled: K,
    onSelect: onSelect
  }, ce), j[67] = U, j[68] = K, j[69] = onSelect, j[70] = ce, j[71] = options_4, j[72] = Ze;else Ze = j[72];
  let children_16;
  if (j[73] === S) children_16 = e(n, {
    dimColor: !0,
    children: r(Se, {
      children: [e(gt, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "select"
      }), e(gt, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "go back"
      })]
    })
  }), j[73] = children_16;else children_16 = j[73];
  let ze;
  if (j[74] !== Y) ze = e(s, {
    marginTop: 1,
    paddingLeft: Y,
    children: children_16
  }), j[74] = Y, j[75] = ze;else ze = j[75];
  let ht;
  if (j[76] !== _ || j[77] !== fe || j[78] !== Ze || j[79] !== ze || j[80] !== flexDirection || j[81] !== ye || j[82] !== z || j[83] !== Ve || j[84] !== at || j[85] !== We || j[86] !== He) ht = r(_, {
    flexDirection: flexDirection,
    children: [ye, z, Ve, at, We, He, fe, Ze, ze]
  }), j[76] = _, j[77] = fe, j[78] = Ze, j[79] = ze, j[80] = flexDirection, j[81] = ye, j[82] = z, j[83] = Ve, j[84] = at, j[85] = We, j[86] = He, j[87] = ht;else ht = j[87];
  return ht;
}
function Vi(a) {
  let C = w(12),
    {
      hasSelection: hasSelection,
      canToggle: canToggle,
      canView: canView
    } = a,
    x;
  if (C[0] !== hasSelection) x = hasSelection && e(gt, {
    action: "plugin:install",
    context: "Plugin",
    fallback: "i",
    description: "install",
    bold: !0
  }), C[0] = hasSelection, C[1] = x;else x = C[1];
  let T;
  if (C[2] === S) T = e(n, {
    children: "Type to search"
  }), C[2] = T;else T = C[2];
  let K;
  if (C[3] !== canToggle) K = canToggle && e(gt, {
    action: "plugin:toggle",
    context: "Plugin",
    fallback: "Space",
    description: "toggle"
  }), C[3] = canToggle, C[4] = K;else K = C[4];
  let N;
  if (C[5] !== canView) N = canView && e(gt, {
    action: "select:accept",
    context: "Select",
    fallback: "Enter",
    description: "view"
  }), C[5] = canView, C[6] = N;else N = C[6];
  let D;
  if (C[7] === S) D = e(gt, {
    action: "confirm:no",
    context: "Settings",
    fallback: "Esc",
    description: "go back"
  }), C[7] = D;else D = C[7];
  let Y;
  if (C[8] !== x || C[9] !== K || C[10] !== N) Y = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      italic: !0,
      children: r(Se, {
        children: [x, T, K, N, D]
      })
    })
  }), C[8] = x, C[9] = K, C[10] = N, C[11] = Y;else Y = C[11];
  return Y;
}
function yl(a) {
  let v = w(2),
    {
      pluginId: pluginId_4
    } = a,
    entryPromise = Li(pluginId_4),
    C;
  if (v[0] !== entryPromise) C = e(Xr, {
    fallback: null,
    children: e(hl, {
      entryPromise: entryPromise
    })
  }), v[0] = entryPromise, v[1] = C;else C = v[1];
  return C;
}
function hl(a) {
  let v = w(4),
    {
      entryPromise: entryPromise_2
    } = a,
    k = $r(entryPromise_2);
  if (!k?.last_updated) {
    return null;
  }
  let C;
  if (v[0] !== k.last_updated) C = Mu(k.last_updated), v[0] = k.last_updated, v[1] = C;else C = v[1];
  let x = C;
  if (x === void 0) {
    return null;
  }
  let T;
  if (v[2] !== x) T = r(n, {
    dimColor: !0,
    children: ["Last updated: ", x]
  }), v[2] = x, v[3] = T;else T = v[3];
  return T;
}
function Li(a) {
  let k = w(3),
    {
      storageV5: storageV5_3
    } = Oe(),
    v;
  if (k[0] !== a || k[1] !== storageV5_3) v = iSr(a, storageV5_3).then(my).catch(gy), k[0] = a, k[1] = storageV5_3, k[2] = v;else v = k[2];
  return v;
}
function Mu(a) {
  let date = new Date(a);
  if (Number.isNaN(date.getTime())) return;
  return date.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function kl(a) {
  let T = w(17),
    {
      plugin: plugin_6,
      onEntryHelperShown: k,
      refreshKey: refreshKey
    } = a,
    entryPromise_3 = Li(plugin_6.pluginId);
  const x = String(refreshKey ?? "");
  let K;
  if (T[0] !== k || T[1] !== plugin_6.entry || T[2] !== plugin_6.pluginId || T[3] !== x) K = e(Fi, {
    pluginId: plugin_6.pluginId,
    entry: plugin_6.entry,
    verb: "Installing",
    onShown: k
  }, x), T[0] = k, T[1] = plugin_6.entry, T[2] = plugin_6.pluginId, T[3] = x, T[4] = K;else K = T[4];
  let N;
  if (T[5] === S) N = e(n, {
    bold: !0,
    children: "Will install:"
  }), T[5] = N;else N = T[5];
  let fallback_4;
  if (T[6] !== plugin_6.entry) fallback_4 = e(Ui, {
    entry: plugin_6.entry
  }), T[6] = plugin_6.entry, T[7] = fallback_4;else fallback_4 = T[7];
  let children_17;
  if (T[8] !== entryPromise_3 || T[9] !== plugin_6.entry) children_17 = e(vl, {
    entryPromise: entryPromise_3,
    marketplaceEntry: plugin_6.entry
  }), T[8] = entryPromise_3, T[9] = plugin_6.entry, T[10] = children_17;else children_17 = T[10];
  let j;
  if (T[11] !== fallback_4 || T[12] !== children_17) j = e(Xr, {
    fallback: fallback_4,
    children: children_17
  }), T[11] = fallback_4, T[12] = children_17, T[13] = j;else j = T[13];
  let U;
  if (T[14] !== K || T[15] !== j) U = r(s, {
    flexDirection: "column",
    marginBottom: 1,
    children: [K, N, j]
  }), T[14] = K, T[15] = j, T[16] = U;else U = T[16];
  return U;
}
function vl(a) {
  let C = w(8),
    {
      entryPromise: entryPromise_4,
      marketplaceEntry: k
    } = a,
    v = $r(entryPromise_4),
    children_18,
    T;
  if (C[0] !== v || C[1] !== k) {
    T = yn;
    D: {
      let K = v?.components ? oi(v.components) : [];
      if (K.length === 0) {
        let N;
        if (C[4] !== k) N = e(Ui, {
          entry: k
        }), C[4] = k, C[5] = N;else N = C[5];
        T = N;
        break D;
      }
      children_18 = K.map(fy);
    }
    C[0] = v, C[1] = k, C[2] = children_18, C[3] = T;
  } else children_18 = C[2], T = C[3];
  if (T !== yn) return T;
  let N;
  if (C[6] !== children_18) N = e(Q, {
    children: children_18
  }), C[6] = children_18, C[7] = N;else N = C[7];
  return N;
}
function wl(a) {
  let C = w(17),
    {
      consent: consent,
      verb: verb
    } = a,
    v = verb === void 0 ? "Installing" : verb;
  if (consent === null) {
    return null;
  }
  let x;
  if (C[0] !== consent) x = p7e(consent), C[0] = consent, C[1] = x;else x = C[1];
  let T = x,
    K;
  if (C[2] === S) K = e(ft, {
    status: "warning",
    withSpace: !0
  }), C[2] = K;else K = C[2];
  let N;
  if (C[3] !== v) N = r(n, {
    color: "warning",
    children: [K, v, " runs a local command and sends its output as headers to:"]
  }), C[3] = v, C[4] = N;else N = C[4];
  let D;
  if (C[5] !== T.destination) D = r(n, {
    children: ["  ", T.destination]
  }), C[5] = T.destination, C[6] = D;else D = C[6];
  let Y;
  if (C[7] !== T.hiddenCharactersWarning) Y = T.hiddenCharactersWarning && r(n, {
    color: "error",
    children: ["  ", T.hiddenCharactersWarning]
  }), C[7] = T.hiddenCharactersWarning, C[8] = Y;else Y = C[8];
  let j;
  if (C[9] === S) j = r(n, {
    dimColor: !0,
    children: ["  ", "The command:"]
  }), C[9] = j;else j = C[9];
  let U;
  if (C[10] !== T.command) U = r(n, {
    children: ["  ", T.command]
  }), C[10] = T.command, C[11] = U;else U = C[11];
  let _;
  if (C[12] !== N || C[13] !== D || C[14] !== Y || C[15] !== U) _ = r(s, {
    flexDirection: "column",
    marginBottom: 1,
    children: [N, D, Y, j, U]
  }), C[12] = N, C[13] = D, C[14] = Y, C[15] = U, C[16] = _;else _ = C[16];
  return _;
}
function Sl(a) {
  let k = w(14),
    {
      entry: entry
    } = a;
  if (typeof entry.source !== "object" || entry.source.source !== "command") {
    return null;
  }
  let v;
  if (k[0] === S) v = e(n, {
    dimColor: !0,
    children: "Installed by running a command on this machine:"
  }), k[0] = v;else v = k[0];
  let C;
  if (k[1] !== entry.source.command) C = e(s, {
    paddingLeft: 2,
    children: e(n, {
      children: entry.source.command
    })
  }), k[1] = entry.source.command, k[2] = C;else C = k[2];
  let children_19;
  if (k[3] !== entry.source) children_19 = bnn(entry.source), k[3] = entry.source, k[4] = children_19;else children_19 = k[4];
  let T;
  if (k[5] !== children_19) T = e(n, {
    dimColor: !0,
    children: children_19
  }), k[5] = children_19, k[6] = T;else T = k[6];
  let K;
  if (k[7] === S) K = gO() && e(n, {
    color: "warning",
    children: CX()
  }), k[7] = K;else K = k[7];
  let N;
  if (k[8] !== entry.source.mode) N = entry.source.mode === "link" && I() === "windows" && e(n, {
    color: "warning",
    children: children_20
  }), k[8] = entry.source.mode, k[9] = N;else N = k[9];
  let D;
  if (k[10] !== C || k[11] !== T || k[12] !== N) D = r(s, {
    marginBottom: 1,
    flexDirection: "column",
    children: [v, C, T, K, N]
  }), k[10] = C, k[11] = T, k[12] = N, k[13] = D;else D = k[13];
  return D;
}
function Gi(a) {
  let k = w(5),
    h = A(void 0),
    v;
  if (k[0] === S) v = () => {
    h.current = void 0;
  }, k[0] = v;else v = k[0];
  let C;
  if (k[1] !== a) C = [a], k[1] = a, k[2] = C;else C = k[2];
  P(v, C);
  let x;
  if (k[3] === S) x = T => {
    h.current = T;
  }, k[3] = x;else x = k[3];
  let record = x,
    N;
  if (k[4] === S) {
    let pinned = () => h.current ?? null;
    N = {
      record: record,
      pinned: pinned
    };
    k[4] = N;
  } else N = k[4];
  return N;
}
function Fi(a) {
  let T = w(8),
    {
      pluginId: pluginId_5,
      entry: entry_2,
      verb: verb_2,
      onShown: onShown
    } = a,
    {
      storageV5: storageV5_4
    } = Oe(),
    K;
  if (T[0] !== entry_2 || T[1] !== pluginId_5 || T[2] !== storageV5_4) K = Cwt(pluginId_5, entry_2, storageV5_4).catch(ky), T[0] = entry_2, T[1] = pluginId_5, T[2] = storageV5_4, T[3] = K;else K = T[3];
  let consentPromise = K,
    D;
  if (T[4] !== consentPromise || T[5] !== onShown || T[6] !== verb_2) D = e(Xr, {
    fallback: null,
    children: e(Cl, {
      consentPromise: consentPromise,
      verb: verb_2,
      onShown: onShown
    })
  }), T[4] = consentPromise, T[5] = onShown, T[6] = verb_2, T[7] = D;else D = T[7];
  return D;
}
function Cl(a) {
  let x = w(7),
    {
      consentPromise: consentPromise_2,
      verb: verb_3,
      onShown: onShown_2
    } = a,
    consent_2 = $r(consentPromise_2),
    T,
    K;
  if (x[0] !== consent_2 || x[1] !== onShown_2) T = () => {
    onShown_2(consent_2);
  }, K = [onShown_2, consent_2], x[0] = consent_2, x[1] = onShown_2, x[2] = T, x[3] = K;else T = x[2], K = x[3];
  P(T, K);
  let N;
  if (x[4] !== consent_2 || x[5] !== verb_3) N = e(wl, {
    consent: consent_2,
    verb: verb_3
  }), x[4] = consent_2, x[5] = verb_3, x[6] = N;else N = x[6];
  return N;
}
function Ui(a) {
  let k = w(11),
    {
      entry: entry_3
    } = a,
    v,
    C;
  if (k[0] !== entry_3.agents || k[1] !== entry_3.commands || k[2] !== entry_3.hooks || k[3] !== entry_3.lspServers || k[4] !== entry_3.mcpServers || k[5] !== entry_3.skills || k[6] !== entry_3.source) {
    C = yn;
    D: {
      let x = [["Commands", io(entry_3.commands)], ["Agents", io(entry_3.agents)], ["Skills", io(entry_3.skills)], ["Hooks", io(entry_3.hooks)], ["MCP Servers", io(entry_3.mcpServers)], ["LSP Servers", io(entry_3.lspServers)]];
      let T = x.filter(by);
      if (T.length === 0) {
        const children_21 = typeof entry_3.source === "object" ? "\xB7 Component summary not available for remote plugin" : "\xB7 Components will be discovered at installation";
        let N;
        if (k[9] !== children_21) N = e(n, {
          dimColor: !0,
          children: children_21
        }), k[9] = children_21, k[10] = N;else N = k[10];
        C = N;
        break D;
      }
      v = e(Q, {
        children: T.map(vy)
      });
    }
    k[0] = entry_3.agents, k[1] = entry_3.commands, k[2] = entry_3.hooks, k[3] = entry_3.lspServers, k[4] = entry_3.mcpServers, k[5] = entry_3.skills, k[6] = entry_3.source, k[7] = v, k[8] = C;
  } else v = k[7], C = k[8];
  if (C !== yn) return C;
  return v;
}
function io(a) {
  if (typeof a === "string") return [a];
  if (Array.isArray(a)) return a.flatMap(item => typeof item === "string" ? [item] : item && typeof item === "object" ? Object.keys(item) : []);
  if (a && typeof a === "object") return Object.keys(a);
  return [];
}
var ii = a => a.error;
class Br {
  #n = Me();
  #e;
  #o = !1;
  constructor(viewState_2) {
    this.#e = {
      viewState: viewState_2,
      result: null,
      error: null
    };
  }
  subscribe = a => this.#n.subscribe(a);
  getSnapshot = () => this.#e;
  get viewState() {
    return this.#e.viewState;
  }
  get result() {
    return this.#e.result;
  }
  get error() {
    return this.#e.error;
  }
  setViewState = viewState_3 => {
    this.#t({
      viewState: viewState_3
    });
  };
  setResult = result_2 => {
    this.#t({
      result: result_2
    });
  };
  setError = error_7 => {
    this.#t({
      error: error_7
    });
  };
  markDiscoverLoaded = () => {
    let a = this.#o;
    return this.#o = !0, a;
  };
  #t(a) {
    let h = this.#e,
      k = {
        ...h,
        ...a
      };
    if (Object.is(k.viewState, h.viewState) && k.result === h.result && k.error === h.error) return;
    this.#e = k, this.#n.emit();
  }
}
B();
var Hu = " A bundled MCP server needs configuration before it can start \u2014 select its plugin in /plugin's Installed tab and choose Configure.";
async function Gu({
  selectedForInstall: selectedForInstall,
  availablePlugins: availablePlugins,
  setInstallingPlugins: setInstallingPlugins,
  setSelectedForInstall: setSelectedForInstall,
  setResult: setResult_2,
  setError: setError_2,
  setParentViewState: setParentViewState,
  onInstallComplete: onInstallComplete_2,
  surface: surface,
  storageV5: storageV5_5
}) {
  if (selectedForInstall.size === 0) return;
  let Y = availablePlugins.filter(item => selectedForInstall.has(item.pluginId));
  setInstallingPlugins(new Set(Y.map(item => item.pluginId)));
  let j = 0,
    U = 0,
    _ = [],
    ee = [],
    ce = [],
    fe = [];
  for (let z of Y) {
    if (typeof z.entry.source === "object" && z.entry.source.source === "command") {
      U++, _.push({
        name: z.entry.name,
        reason: "installed by running a command on this machine \u2014 open its details (Enter) to review the command and install it from there",
        reasonIsOurs: !0
      });
      continue;
    }
    let Ve = await WPt({
      pluginId: z.pluginId,
      entry: z.entry,
      marketplaceName: z.marketplaceName,
      scope: "user",
      trigger: "bulk",
      surface: surface,
      storageV5: storageV5_5
    });
    if (Ve.success) {
      if (j++, fe.push(z.pluginId), Ve.installedDisabled) (Ve.installedDisabledByDefault ? ee : ce).push(Yco(z.entry.name));
    } else U++, _.push({
      name: z.entry.name,
      reason: Ve.error,
      reasonIsOurs: Ve.errorIsOurs === !0
    });
  }
  cd(storageV5_5);
  let de = j > 0 && onInstallComplete_2 ? await onInstallComplete_2(fe) : "reload-required";
  setInstallingPlugins(new Set()), setSelectedForInstall(new Set());
  let pe = (ee.length > 0 ? ` Disabled by default \u2014 enable in /plugin: ${ee.join(", ")}.` : "") + (ce.length > 0 ? ` Disabled in your settings: ${ce.join(", ")}.` : ""),
    ye = j - ee.length - ce.length;
  if (U === 0) {
    let z = de === "load-failed" ? " Some plugins couldn't be loaded \u2014 see /plugin for details." : ye === 0 ? "" : de === "activated" || de === "needs-config" ? ` ${ye === 1 ? "Plugin is" : "Plugins are"} now active.` + (de === "needs-config" ? Hu : "") : " Run /reload-plugins to activate.";
    setResult_2(`\u2713 Installed ${j} ${O(j, "plugin")}.${z}${pe}`);
  } else if (j === 0) setError_2(`Failed to install: ${Xco(_, !0)}`);else {
    let z = de === "load-failed" ? " Some installed plugins couldn't be loaded \u2014 see /plugin for details." : ye === 0 ? "" : de === "activated" || de === "needs-config" ? (ye === 1 ? " The successfully installed plugin is now active." : " Successfully installed plugins are now active.") + (de === "needs-config" ? Hu : "") : " Run /reload-plugins to activate successfully installed plugins.";
    setResult_2(`\u2713 Installed ${j} of ${j + U} plugins. Failed: ${Xco(_, !1)}.${z}${pe}`);
  }
  setParentViewState({
    type: "menu"
  });
}
async function Yu({
  plugin: plugin_7,
  scope = "user",
  setIsInstalling: setIsInstalling,
  setInstallError: setInstallError,
  setViewState: setViewState_2,
  setResult: setResult_3,
  setParentViewState: setParentViewState_2,
  onInstallComplete: onInstallComplete_3,
  consentedEntryHelper: consentedEntryHelper,
  surface: surface_2,
  storageV5: storageV5_6
}) {
  setIsInstalling(!0), setInstallError(null);
  let j = await WPt({
    pluginId: plugin_7.pluginId,
    entry: plugin_7.entry,
    marketplaceName: plugin_7.marketplaceName,
    scope: scope,
    trigger: "user",
    surface: surface_2,
    consentedEntryHelper: consentedEntryHelper,
    commandSourceConsent: typeof plugin_7.entry.source === "object" && plugin_7.entry.source.source === "command" ? {
      kind: "shown",
      command: _H(plugin_7.entry.source),
      pluginId: plugin_7.pluginId
    } : void 0,
    storageV5: storageV5_6
  });
  if (j.success) {
    let plugin_8 = await nl(plugin_7.pluginId, storageV5_6);
    if (plugin_8) {
      setIsInstalling(!1), setViewState_2({
        type: "plugin-options",
        plugin: plugin_8,
        pluginId: plugin_7.pluginId,
        depNote: j.depNote,
        installedDisabled: j.installedDisabled,
        installedDisabledByDefault: j.installedDisabledByDefault
      });
      return;
    }
    let _ = onInstallComplete_3 ? await onInstallComplete_3([plugin_7.pluginId]) : "reload-required";
    setResult_3(j.installedDisabled ? _ === "load-failed" ? `${j.message}. The plugin couldn't be loaded \u2014 see /plugin for details.` : j.message : _ === "activated" ? `${j.message} Plugin is now active.` : _ === "needs-config" ? `${j.message} Plugin is now active.${Vo}` : _ === "load-failed" ? `${j.message} The plugin couldn't be loaded \u2014 see /plugin for details.` : `${j.message} Run /reload-plugins to activate.`), setParentViewState_2({
      type: "menu"
    });
  } else setIsInstalling(!1), setInstallError(j.error);
}
B();
var wy = 5;
function Or({
  totalItems: a,
  maxVisible = wy,
  selectedIndex = 0,
  firstSelectableIndex = 0,
  onScroll: onScroll
}) {
  let needsPagination = a > maxVisible,
    T = A(0),
    [K, N] = y(0),
    D = Z(() => {
      if (!needsPagination) return 0;
      let current_2 = T.current;
      if (selectedIndex < current_2) {
        let Ve = selectedIndex <= firstSelectableIndex ? 0 : selectedIndex;
        return T.current = Ve, Ve;
      }
      if (selectedIndex >= current_2 + maxVisible) {
        let Ve = selectedIndex - maxVisible + 1;
        return T.current = Ve, Ve;
      }
      let ye = Math.max(0, a - maxVisible),
        z = Math.min(current_2, ye);
      return T.current = z, z;
    }, [selectedIndex, maxVisible, needsPagination, a, firstSelectableIndex, K]),
    Y = D,
    endIndex = Math.min(D + maxVisible, a),
    getVisibleItems = ae(pe => {
      if (!needsPagination) return pe;
      return pe.slice(Y, endIndex);
    }, [needsPagination, Y, endIndex]),
    toActualIndex = ae(pe => Y + pe, [Y]),
    handleSelectionChange = ae((pe, ye) => {
      let z = Math.max(0, Math.min(pe, a - 1));
      ye(z);
    }, [a]);
  function ce(pe) {
    T.current = pe, N(ye => ye + 1), onScroll?.(pe);
  }
  function fe(pe) {
    let ye = Math.max(0, Math.min(pe, a - maxVisible));
    ce(ye <= firstSelectableIndex ? 0 : ye);
  }
  function de(pe) {
    if (pe.deltaY === 0) return;
    let ye = pe.deltaY > 0,
      current_3 = T.current,
      Ve = a - maxVisible,
      at = Math.max(0, Math.min(current_3 + (ye ? 1 : -1), Ve)),
      We = Math.min(firstSelectableIndex + 1, Ve),
      He = ye ? We : 0,
      oe = at > firstSelectableIndex ? at : He;
    if (oe !== current_3) ce(oe);
    pe.stopImmediatePropagation();
  }
  return {
    startIndex: Y,
    endIndex: endIndex,
    needsPagination: needsPagination,
    getVisibleItems: getVisibleItems,
    toActualIndex: toActualIndex,
    handleSelectionChange: handleSelectionChange,
    bar: {
      offset: Y,
      visible: endIndex - Y,
      total: a,
      onScrollTo: needsPagination ? fe : void 0
    },
    onWheel: needsPagination ? de : void 0,
    scrollPosition: {
      current: selectedIndex + 1,
      total: a,
      canScrollUp: D > 0,
      canScrollDown: D + maxVisible < a
    }
  };
}
function Fr({
  screen: screen,
  surface: surface_3,
  initialViewState: initialViewState,
  availablePlugins: availablePlugins_2,
  loading: loading,
  searchMarketplaceName: searchMarketplaceName,
  marketplaceFilter = null,
  onInstallComplete: onInstallComplete_4,
  onSearchModeChange: onSearchModeChange
}) {
  let {
      storageV5: storageV5_7
    } = Oe(),
    [viewState_4, setViewState_3] = y(initialViewState),
    [selectedPlugin, _] = y(null),
    openDetails = ae(yt => {
      _(yt), setViewState_3("plugin-details");
    }, []),
    closeDetails = ae(() => {
      setViewState_3("plugin-list"), _(null);
    }, []),
    fe = viewState_4 === "plugin-list",
    de = fe && !loading,
    pe = Ae(screen, ii),
    [ye, setIsSearchMode] = y(!1),
    Ve = () => setIsSearchMode(!1),
    {
      query: at,
      setQuery: We,
      cursorOffset: cursorOffset_3,
      setCursorOffset: oe,
      handleKeyDown: handleKeyDown,
      handlePaste: handlePaste
    } = s_({
      isActive: fe && ye && !loading,
      onExit: Ve,
      onExitUp: Ve
    }),
    Dt = ye && at !== "";
  P(() => {
    onSearchModeChange(Dt);
  }, [Dt, onSearchModeChange]), P(() => () => onSearchModeChange(!1), [onSearchModeChange]);
  let isTerminalFocused = oc(),
    filteredPlugins = Z(() => {
      let yt = marketplaceFilter === null ? availablePlugins_2 : availablePlugins_2.filter(item => _6o(item, marketplaceFilter));
      if (!at) return yt;
      let jt = at.toLowerCase();
      return yt.filter(item => item.entry.name.toLowerCase().includes(jt) || item.entry.displayName?.toLowerCase().includes(jt) || item.entry.description?.toLowerCase().includes(jt) || R2r(item).some(item => item.name.toLowerCase().includes(jt)) || searchMarketplaceName && m6o(item).toLowerCase().includes(jt) || searchMarketplaceName && item.marketplaceName.toLowerCase().includes(jt) || searchMarketplaceName && (item.alsoListedIn ?? []).some(item => item.toLowerCase().includes(jt)));
    }, [availablePlugins_2, at, searchMarketplaceName, marketplaceFilter]),
    [selectedIndex_2, setSelectedIndex] = y(0),
    [selectedForInstall_2, setSelectedForInstall_2] = y(new Set()),
    [installingPlugins, setInstallingPlugins_2] = y(new Set()),
    pagination = Or({
      totalItems: filteredPlugins.length,
      selectedIndex: selectedIndex_2
    });
  P(() => {
    setSelectedIndex(0);
  }, [at, marketplaceFilter]);
  let [isInstalling, setIsInstalling_2] = y(!1),
    [installError, setInstallError_2] = y(null),
    Ct = () => Gu({
      selectedForInstall: selectedForInstall_2,
      availablePlugins: availablePlugins_2,
      setInstallingPlugins: setInstallingPlugins_2,
      setSelectedForInstall: setSelectedForInstall_2,
      setResult: screen.setResult,
      setError: screen.setResult,
      setParentViewState: screen.setViewState,
      onInstallComplete: onInstallComplete_4,
      surface: surface_3,
      storageV5: storageV5_7
    }),
    Mt = Gi(selectedPlugin),
    installPlugin = (plugin_9, scope_2 = "user") => Yu({
      plugin: plugin_9,
      scope: scope_2,
      consentedEntryHelper: Mt.pinned(),
      setIsInstalling: setIsInstalling_2,
      setInstallError: setInstallError_2,
      setViewState: setViewState_3,
      setResult: screen.setResult,
      setParentViewState: screen.setViewState,
      onInstallComplete: onInstallComplete_4,
      surface: surface_3,
      storageV5: storageV5_7
    });
  P(() => {
    if (pe) screen.setResult(pe);
  }, [pe, screen]);
  function handleListKeyDown(yt) {
    if (ye) {
      handleKeyDown(yt);
      return;
    }
    if (yt.ctrl || yt.meta || loading) return;
    if (yt.key === "/") yt.preventDefault(), setIsSearchMode(!0), We("");else if (yt.key.length === 1 && yt.key !== " ") yt.preventDefault(), setIsSearchMode(!0), We(yt.key);
  }
  function handleListPaste(yt) {
    if (ye) {
      handlePaste(yt);
      return;
    }
    if (loading) return;
    let jt = (yt.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!jt) return;
    yt.preventDefault(), setIsSearchMode(!0), We(jt);
  }
  return on({
    "select:previous": () => {
      if (selectedIndex_2 === 0) {
        if (!loading && availablePlugins_2.length > 0) setIsSearchMode(!0);
      } else pagination.handleSelectionChange(selectedIndex_2 - 1, setSelectedIndex);
    },
    "select:next": () => {
      if (selectedIndex_2 < filteredPlugins.length - 1) pagination.handleSelectionChange(selectedIndex_2 + 1, setSelectedIndex);
    },
    "select:accept": () => {
      if (selectedIndex_2 < filteredPlugins.length) {
        let yt = filteredPlugins[selectedIndex_2];
        if (yt) if (yt.isInstalled) screen.setViewState({
          type: "manage-plugins",
          targetPlugin: yt.entry.name,
          targetMarketplace: yt.marketplaceName
        });else openDetails(yt), setInstallError_2(null);
      }
    }
  }, {
    context: "Select",
    isActive: de && !ye
  }), on({
    "plugin:toggle": () => {
      if (selectedIndex_2 < filteredPlugins.length) {
        let yt = filteredPlugins[selectedIndex_2];
        if (yt && !yt.isInstalled) {
          let jt = new Set(selectedForInstall_2);
          if (jt.has(yt.pluginId)) jt.delete(yt.pluginId);else jt.add(yt.pluginId);
          setSelectedForInstall_2(jt);
        }
      }
    },
    "plugin:install": () => {
      if (selectedForInstall_2.size === 0) return !1;
      if (installingPlugins.size > 0) return;
      Ct();
    }
  }, {
    context: "Plugin",
    isActive: de && !ye
  }), {
    viewState: viewState_4,
    setViewState: setViewState_3,
    selectedPlugin: selectedPlugin,
    openDetails: openDetails,
    closeDetails: closeDetails,
    recordEntryHelperShown: Mt.record,
    isSearchMode: ye,
    setIsSearchMode: setIsSearchMode,
    searchQuery: at,
    setSearchQuery: We,
    searchBoxProps: {
      query: at,
      isFocused: ye,
      isTerminalFocused: isTerminalFocused,
      cursorOffset: cursorOffset_3,
      onCursorOffsetChange: oe,
      onFocus: () => setIsSearchMode(!0)
    },
    keyHintProps: {
      hasSelection: selectedForInstall_2.size > 0,
      canToggle: selectedIndex_2 < filteredPlugins.length && !filteredPlugins[selectedIndex_2]?.isInstalled,
      canView: selectedIndex_2 < filteredPlugins.length
    },
    filteredPlugins: filteredPlugins,
    selectedIndex: selectedIndex_2,
    setSelectedIndex: setSelectedIndex,
    selectedForInstall: selectedForInstall_2,
    setSelectedForInstall: setSelectedForInstall_2,
    installingPlugins: installingPlugins,
    pagination: pagination,
    installPlugin: installPlugin,
    isInstalling: isInstalling,
    installError: installError,
    handleListKeyDown: handleListKeyDown,
    handleListPaste: handleListPaste
  };
}
function Cy() {}
function Il({
  screen: screen_2,
  onInstallComplete: onInstallComplete_5,
  onSearchModeChange: onSearchModeChange_2,
  targetMarketplace: targetMarketplace_2,
  targetPlugin: targetPlugin_2
}) {
  let {
      storageV5: storageV5_8,
      credentials: credentials_3
    } = Oe(),
    error_8 = Ae(screen_2, ii),
    {
      setError: setError_3,
      setResult: setResult_4
    } = screen_2,
    setViewState_4 = screen_2.setViewState,
    [j, U] = y(null),
    [_, ee] = y([]),
    [availablePlugins_3, fe] = y([]),
    [de, pe] = y(!1),
    [loading_2, z] = y(!0),
    [message_3, at] = y("Loading\u2026"),
    [We, He] = y(null),
    {
      viewState: viewState_5,
      setViewState: setViewState_5,
      selectedPlugin: St,
      openDetails: openDetails_2,
      closeDetails: Ze,
      recordEntryHelperShown: Et,
      isSearchMode: isSearchMode,
      setIsSearchMode: setIsSearchMode_2,
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery,
      searchBoxProps: searchBoxProps,
      keyHintProps: keyHintProps,
      filteredPlugins: filteredPlugins_2,
      selectedIndex: selectedIndex_3,
      setSelectedIndex: setSelectedIndex_2,
      selectedForInstall: selectedForInstall_3,
      setSelectedForInstall: setSelectedForInstall_3,
      installingPlugins: installingPlugins_2,
      pagination: pagination_2,
      installPlugin: Zt,
      isInstalling: isInstalling_2,
      installError: installError_2,
      handleListKeyDown: yt,
      handleListPaste: jt
    } = Fr({
      screen: screen_2,
      surface: "browse",
      initialViewState: "marketplace-list",
      availablePlugins: availablePlugins_3,
      loading: loading_2,
      searchMarketplaceName: !1,
      onInstallComplete: onInstallComplete_5,
      onSearchModeChange: onSearchModeChange_2
    }),
    [ln, Qt] = y(null),
    [un, Sn] = y(null),
    $n = ae(() => {
      if (viewState_5 === "plugin-list") {
        if (targetMarketplace_2) setViewState_4({
          type: "manage-marketplaces",
          targetMarketplace: targetMarketplace_2
        });else if (_.length === 1) setViewState_4({
          type: "menu"
        });else setViewState_5("marketplace-list"), U(null), setSelectedForInstall_3(new Set());
      } else if (viewState_5 === "plugin-details") Ze();else setViewState_4({
        type: "menu"
      });
    }, [viewState_5, setViewState_5, Ze, targetMarketplace_2, setViewState_4, _.length, setSelectedForInstall_3]);
  rt("confirm:no", $n, {
    context: "Settings",
    isActive: typeof viewState_5 === "string" && !(viewState_5 === "plugin-list" && isSearchMode)
  }), P(() => {
    let Ue = !1;
    async function Ot() {
      try {
        let se = await ic(storageV5_8),
          Re;
        if (targetMarketplace_2 && targetPlugin_2 && !Sp(targetMarketplace_2)) {
          at(`Checking ${$A(targetMarketplace_2)} for new plugins\u2026`);
          let Ie = await kwt(targetMarketplace_2, se[targetMarketplace_2], storageV5_8);
          if ($2e(Ie.outcome), Ue) return;
          if (at("Loading\u2026"), Ie.outcome === "refresh-failed") Re = Ie.errorMessage, Sn(`Couldn't refresh marketplace "${targetMarketplace_2}" (${Ie.errorMessage}) \u2014 showing the cached catalog.`);
        }
        let {
          marketplaces: marketplaces,
          failures: failures
        } = await ype(se, storageV5_8);
        if (Ue) return;
        let $t = [];
        for (let {
          name: name,
          config: config_2,
          data: data
        } of marketplaces) if (data) {
          let installedCount = F(data.plugins, xe => Z1(uU(xe.name, name)));
          $t.push({
            name: name,
            totalPlugins: data.plugins.length,
            installedCount: installedCount,
            source: NPt(config_2.source)
          });
        }
        $t.sort((itemA, itemB) => {
          if (itemA.name === yze) return -1;
          if (itemB.name === yze) return 1;
          return 0;
        }), ee($t);
        let Pt = F(marketplaces, Ie => Ie.data !== null),
          Je = EJt(failures, Pt);
        if (Je) if (Je.type === "warning") Qt(FPt(failures).length === 0 ? Je.message : Je.message + ". Showing available marketplaces.");else throw Error(Je.message);
        if ($t.length === 1 && !targetMarketplace_2 && !targetPlugin_2) {
          let Ie = $t[0];
          if (Ie) U(Ie.name), setViewState_5("plugin-list");
        }
        if (targetMarketplace_2 && !$t.some(item => item.name === targetMarketplace_2)) {
          let Ie = failures.find(item => item.name === targetMarketplace_2);
          setError_3(Ie ? `Couldn't load marketplace "${gL(targetMarketplace_2)}": ${Ie.error}` : `Marketplace "${gL(targetMarketplace_2)}" not found`);
        } else if (targetPlugin_2) {
          let Ie = null;
          for (let {
            name: Ke,
            data: data_2
          } of marketplaces) {
            if (targetMarketplace_2 && Ke !== targetMarketplace_2) continue;
            let ut = data_2?.plugins.find(Fe => Fe.name === targetPlugin_2);
            if (!ut) continue;
            let pluginId_6 = uU(ut.name, Ke),
              [dt] = await H2e(Ke, [ut], se, storageV5_8);
            Ie = {
              entry: dt ?? ut,
              marketplaceName: Ke,
              pluginId: pluginId_6,
              isInstalled: fOt(pluginId_6)
            };
            break;
          }
          if (Ue) return;
          if (Ie) {
            let pluginId_7 = Ie.pluginId;
            if (fOt(pluginId_7)) {
              let ut = await fTt(pluginId_7, storageV5_8),
                xe = await Mr(pluginId_7, ut, storageV5_8, credentials_3);
              if (Ue) return;
              if (xe) setViewState_5(xe);else if (ut === null) setError_3(`Plugin '${pluginId_7}' is already installed globally. Use '/plugin' to manage existing plugins.`);else if (ut.changed) {
                let dt = await onInstallComplete_5([pluginId_7]);
                if (Ue) return;
                setResult_4(`Plugin "${pluginId_7}" is already installed${ut.suffix}${dt === "load-failed" ? ". The plugin couldn't be loaded \u2014 see /plugin for details." : ""}`);
              } else setResult_4(`Plugin "${pluginId_7}" is already installed${ut.suffix}`);
            } else U(Ie.marketplaceName), openDetails_2(Ie);
          } else {
            let Ke = targetMarketplace_2 ? `marketplace "${targetMarketplace_2}"` : "any marketplace",
              we = Re ? `. The marketplace couldn't be refreshed (${Re}), so its cached catalog may be out of date` : "";
            setError_3(`Plugin "${targetPlugin_2}" not found in ${Ke}${we}`);
          }
        } else if (targetMarketplace_2) U(targetMarketplace_2), setViewState_5("plugin-list");
      } catch (error) {
        if (Ue) return;
        setError_3(error instanceof Error ? error.message : "Failed to load marketplaces");
      } finally {
        if (!Ue) z(!1);
      }
    }
    return Ot(), () => {
      Ue = !0;
    };
  }, [setError_3, setResult_4, setViewState_5, openDetails_2, onInstallComplete_5, targetMarketplace_2, targetPlugin_2, storageV5_8, credentials_3]);
  let Pn = A(0);
  if (P(() => {
    if (!j) return;
    let Ue = !1,
      Ot = ++Pn.current;
    async function se(marketplaceName) {
      z(!0), at("Loading\u2026");
      try {
        let [Le, je] = await Promise.all([Q1(marketplaceName, storageV5_8), nd(storageV5_8)]);
        if (Ue) return;
        if (!Le) throw Error(`Failed to load marketplace: ${marketplaceName}`);
        let $t = await H2e(marketplaceName, Le.plugins, je, storageV5_8);
        if (Ue) return;
        let Pt = [],
          Je = je[marketplaceName]?.source,
          Ie = Je !== void 0 && Nf(Je) && (Nk().catalogEntryNames?.size ?? 0) > Le.plugins.length;
        for (let entry_4 of $t) {
          let pluginId_8 = uU(entry_4.name, marketplaceName);
          if (Qf(pluginId_8)) {
            Ie = !0;
            continue;
          }
          Pt.push({
            entry: entry_4,
            marketplaceName: marketplaceName,
            pluginId: pluginId_8,
            isInstalled: fOt(pluginId_8)
          });
        }
        try {
          let Ke = await cOt(storageV5_8);
          if (Ue) return;
          if (He(Ke), Ke) Pt.sort((itemA, itemB) => {
            let xe = Ke.get(itemA.pluginId) ?? 0,
              dt = Ke.get(itemB.pluginId) ?? 0;
            if (xe !== dt) return dt - xe;
            return itemA.entry.name.localeCompare(itemB.entry.name);
          });else Pt.sort((itemA, itemB) => itemA.entry.name.localeCompare(itemB.entry.name));
        } catch (error) {
          if (Ue) return;
          t(`Failed to fetch install counts: ${d(error)}`), Pt.sort((itemA, itemB) => itemA.entry.name.localeCompare(itemB.entry.name));
        }
        fe(Pt), pe(Ie), setSelectedIndex_2(0), setSelectedForInstall_3(new Set()), setIsSearchMode_2(!1), setSearchQuery("");
      } catch (error) {
        if (Ue) return;
        setError_3(error instanceof Error ? error.message : "Failed to load plugins");
      } finally {
        if (Pn.current === Ot) z(!1);
      }
    }
    return se(j), () => {
      Ue = !0;
    };
  }, [j, setError_3, setSearchQuery, setSelectedIndex_2, setSelectedForInstall_3, setIsSearchMode_2, storageV5_8]), typeof viewState_5 === "object" && viewState_5.type === "plugin-options") return e(Ni, {
    viewState: viewState_5,
    onInstallComplete: onInstallComplete_5,
    onFinish: Ue => {
      setResult_4(Ue), setViewState_4({
        type: "menu"
      });
    }
  });
  if (loading_2) return e(Wr, {
    message: message_3
  });
  if (error_8) return e(ls, {
    error: error_8
  });
  if (viewState_5 === "marketplace-list") {
    if (_.length === 0) return r(s, {
      flexDirection: "column",
      children: [e(s, {
        marginBottom: 1,
        children: e(n, {
          bold: !0,
          children: "Select marketplace"
        })
      }), e(n, {
        children: "No marketplaces configured."
      }), r(n, {
        dimColor: !0,
        children: ["Add a marketplace first using ", "'Add marketplace'", "."]
      }), e(s, {
        marginTop: 1,
        paddingLeft: 1,
        children: e(n, {
          dimColor: !0,
          children: e(gt, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "go back"
          })
        })
      })]
    });
    return r(s, {
      flexDirection: "column",
      children: [e(s, {
        marginBottom: 1,
        children: e(n, {
          bold: !0,
          children: "Select marketplace"
        })
      }), ln && e(s, {
        marginBottom: 1,
        flexDirection: "column",
        children: r(n, {
          color: "warning",
          children: [e(ft, {
            status: "warning",
            withSpace: !0
          }), ln]
        })
      }), e(tn, {
        onSelect: Ue => {
          let Ot = _[Ue];
          if (!Ot) return;
          U(Ot.name), setViewState_5("plugin-list");
        },
        children: _.map(item => e(tn.Item, {
          label: Wn($A(item.name)),
          meta: [`${item.totalPlugins} ${O(item.totalPlugins, "plugin")} available`, item.installedCount > 0 ? `${item.installedCount} already installed` : ""],
          description: item.source ? Wn(item.source) : void 0
        }, item.name))
      }), e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          children: r(Se, {
            children: [e(gt, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "select"
            }), e(gt, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back"
            })]
          })
        })
      })]
    });
  }
  if (viewState_5 === "plugin-details" && St) return r(s, {
    flexDirection: "column",
    children: [un && e(s, {
      marginBottom: 1,
      flexDirection: "column",
      children: r(n, {
        color: "warning",
        children: [e(ft, {
          status: "warning",
          withSpace: !0
        }), un]
      })
    }), e(ji, {
      onEntryHelperShown: Et,
      title: "Plugin Details",
      plugin: St,
      extraSection: e(Ju, {
        pluginId: St.pluginId
      }),
      installError: installError_2,
      isInstalling: isInstalling_2,
      onInstall: Zt,
      onBack: Ze,
      bylinePaddingLeft: 1
    })]
  });
  if (availablePlugins_3.length === 0) return r(s, {
    flexDirection: "column",
    children: [e(s, {
      marginBottom: 1,
      children: e(n, {
        bold: !0,
        children: "Install plugins"
      })
    }), uw() && de ? e(s, {
      marginBottom: 1,
      children: e(Eo, {
        children: "Your organization's policy hides every plugin in this marketplace."
      })
    }) : e(Eo, {
      hint: "All plugins from this marketplace are already installed.",
      children: "No new plugins available to install."
    }), e(s, {
      marginLeft: 3,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(gt, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      })
    })]
  });
  let kn = pagination_2.getVisibleItems(filteredPlugins_2);
  return r(s, {
    flexDirection: "column",
    width: "100%",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: yt,
    onPaste: jt,
    children: [r(s, {
      children: [e(n, {
        bold: !0,
        children: "Install Plugins"
      }), pagination_2.needsPagination && r(n, {
        dimColor: !0,
        children: [" ", "(", pagination_2.scrollPosition.current, "/", pagination_2.scrollPosition.total, ")"]
      })]
    }), e(s, {
      marginBottom: 1,
      flexDirection: "column",
      children: e(fS, {
        ...searchBoxProps
      })
    }), filteredPlugins_2.length === 0 && searchQuery && e(s, {
      marginBottom: 1,
      children: r(Eo, {
        children: ['No plugins match "', searchQuery, '"']
      })
    }), pagination_2.scrollPosition.canScrollUp && e(s, {
      children: r(n, {
        dimColor: !0,
        children: [" ", te.arrowUp, " more above"]
      })
    }), kn.map((item, index) => {
      let se = pagination_2.toActualIndex(index),
        Re = selectedIndex_3 === se,
        Le = selectedForInstall_3.has(item.pluginId),
        je = installingPlugins_2.has(item.pluginId),
        $t = index === kn.length - 1,
        Pt = We?.get(item.pluginId);
      return r(xF, {
        active: Re && !isSearchMode,
        flexDirection: "column",
        marginBottom: $t && !error_8 ? 0 : 1,
        children: [r(s, {
          children: [r(n, {
            "aria-hidden": !0,
            color: Re && !isSearchMode ? "suggestion" : void 0,
            children: [Re && !isSearchMode ? te.pointer : " ", " "]
          }), r(n, {
            color: item.isInstalled ? "success" : void 0,
            children: [item.isInstalled ? te.tick : je ? te.ellipsis : Le ? te.radioOn : te.radioOff, " ", Wm(item.entry), item.entry.category && r(n, {
              dimColor: !0,
              children: [" ", "[", Wn(item.entry.category), "]"]
            }), item.entry.tags?.includes("community-managed") && e(n, {
              dimColor: !0,
              children: " [Community Managed]"
            }), Hmr(item.entry) && e(n, {
              dimColor: !0,
              children: " [not installable on claude.ai yet]"
            }), e(nz, {
              when: item.isInstalled,
              children: "installed"
            }), Pt !== void 0 && j === Su && r(n, {
              dimColor: !0,
              children: [" \xB7 ", aSr(Pt), " installs"]
            })]
          })]
        }), item.entry.description && r(s, {
          marginLeft: 4,
          children: [e(n, {
            dimColor: !0,
            children: mt(Wn(item.entry.description), 60)
          }), item.entry.version && r(n, {
            dimColor: !0,
            children: [" ", "\xB7 v", Wn(item.entry.version)]
          })]
        })]
      }, item.pluginId);
    }), pagination_2.scrollPosition.canScrollDown && e(s, {
      children: r(n, {
        dimColor: !0,
        children: [" ", te.arrowDown, " more below"]
      })
    }), error_8 && e(s, {
      marginTop: 1,
      children: r(n, {
        color: "error",
        children: [e(ft, {
          status: "error",
          withSpace: !0
        }), error_8]
      })
    }), e(Vi, {
      ...keyHintProps
    })]
  });
}
function Ju(a) {
  let x = w(22),
    {
      pluginId: pluginId_9
    } = a,
    {
      storageV5: storageV5_9
    } = Oe(),
    [v, C] = y(null),
    T,
    K;
  if (x[0] !== pluginId_9 || x[1] !== storageV5_9) T = () => {
    C(null);
    let N = !1;
    return hpo(pluginId_9, qe(tt()), storageV5_9).then(D => {
      if (!N) C(D);
    }).catch(Cy), () => {
      N = !0;
    };
  }, K = [pluginId_9, storageV5_9], x[0] = pluginId_9, x[1] = storageV5_9, x[2] = T, x[3] = K;else T = x[2], K = x[3];
  if (P(T, K), v === null) {
    return null;
  }
  let Y = v.alwaysOn >= gpo,
    j;
  if (x[4] !== v.isEstimate) j = v.isEstimate && e(n, {
    dimColor: !0,
    children: " (estimated)"
  }), x[4] = v.isEstimate, x[5] = j;else j = x[5];
  let U;
  if (x[6] !== j) U = r(n, {
    bold: !0,
    children: ["Context cost", j, ":"]
  }), x[6] = j, x[7] = U;else U = x[7];
  const color = Y ? "warning" : void 0,
    dimColor = !Y;
  let ce;
  if (x[8] !== v.alwaysOn) ce = NW(v.alwaysOn), x[8] = v.alwaysOn, x[9] = ce;else ce = x[9];
  let fe;
  if (x[10] !== color || x[11] !== dimColor || x[12] !== ce) fe = r(n, {
    color: color,
    dimColor: dimColor,
    children: ["\xB7 Every turn: ", ce, " tokens"]
  }), x[10] = color, x[11] = dimColor, x[12] = ce, x[13] = fe;else fe = x[13];
  let de;
  if (x[14] !== v.onInvoke) de = NW(v.onInvoke), x[14] = v.onInvoke, x[15] = de;else de = x[15];
  let pe;
  if (x[16] !== de) pe = r(n, {
    dimColor: !0,
    children: ["\xB7 When invoked: ", de, " tokens"]
  }), x[16] = de, x[17] = pe;else pe = x[17];
  let ye;
  if (x[18] !== pe || x[19] !== U || x[20] !== fe) ye = r(s, {
    flexDirection: "column",
    marginBottom: 1,
    children: [U, fe, pe]
  }), x[18] = pe, x[19] = U, x[20] = fe, x[21] = ye;else ye = x[21];
  return ye;
}
B();
var Py = a => a.result;
function Rl({
  screen: screen_3,
  onInstallComplete: onInstallComplete_6,
  onSearchModeChange: onSearchModeChange_3,
  getSessionContext: getSessionContext,
  grantedSuggestions: grantedSuggestions,
  targetPlugin: targetPlugin_3,
  initialMarketplace: initialMarketplace,
  initialSearchQuery: initialSearchQuery
}) {
  let {
      storageV5: storageV5_10,
      credentials: credentials_4
    } = Oe(),
    error_9 = Ae(screen_3, ii),
    j = Ae(screen_3, Py),
    {
      setError: setError_4,
      setResult: setResult_5,
      markDiscoverLoaded: markDiscoverLoaded
    } = screen_3,
    setViewState_6 = screen_3.setViewState,
    [availablePlugins_4, de] = y([]),
    [loading_3, ye] = y(!0),
    [message_4, Ve] = y("Loading\u2026"),
    [at, We] = y(null),
    [He, oe] = y(new Map()),
    [marketplaceFilter_2, St] = y(initialMarketplace ?? null),
    Dt = Z(() => g6o(availablePlugins_4), [availablePlugins_4]),
    {
      viewState: viewState_6,
      setViewState: setViewState_7,
      selectedPlugin: ze,
      openDetails: openDetails_3,
      closeDetails: bt,
      recordEntryHelperShown: le,
      isSearchMode: isSearchMode_2,
      setIsSearchMode: setIsSearchMode_3,
      searchQuery: searchQuery_2,
      setSearchQuery: setSearchQuery_2,
      searchBoxProps: searchBoxProps_2,
      keyHintProps: keyHintProps_2,
      filteredPlugins: filteredPlugins_3,
      selectedIndex: selectedIndex_4,
      selectedForInstall: selectedForInstall_4,
      installingPlugins: installingPlugins_3,
      pagination: pagination_3,
      installPlugin: cn,
      isInstalling: isInstalling_3,
      installError: installError_3,
      handleListKeyDown: ln,
      handleListPaste: Qt
    } = Fr({
      screen: screen_3,
      surface: "discover",
      initialViewState: "plugin-list",
      availablePlugins: availablePlugins_4,
      loading: loading_3,
      searchMarketplaceName: !0,
      marketplaceFilter: marketplaceFilter_2,
      onInstallComplete: onInstallComplete_6,
      onSearchModeChange: onSearchModeChange_3
    }),
    un = A(!1);
  P(() => {
    if (loading_3 || un.current || !initialSearchQuery || availablePlugins_4.length === 0) return;
    un.current = !0, setSearchQuery_2(initialSearchQuery), setIsSearchMode_3(!0);
  }, [loading_3, initialSearchQuery, availablePlugins_4.length, setSearchQuery_2, setIsSearchMode_3]), P(() => {
    if (!loading_3 && marketplaceFilter_2 !== null && !Dt.some(item => item.marketplace === marketplaceFilter_2)) St(null);
  }, [loading_3, marketplaceFilter_2, Dt]);
  let [Sn, $n] = y(!1),
    Pn = Sn && Dt.length > 2;
  on({
    "plugin:cycleMarketplace": () => {
      St(Ie => {
        let Ke = Dt.findIndex(item => item.marketplace === Ie);
        return Dt[(Ke + 1) % Dt.length]?.marketplace ?? null;
      });
    }
  }, {
    context: "Plugin",
    isActive: viewState_6 === "plugin-list" && !loading_3 && Pn
  });
  let [children_22, Ue] = y(null),
    [reason, se] = y(null),
    [Re, Le] = y(!1),
    [je, $t] = y(void 0);
  P(() => {
    let Ie = !1;
    async function Ke() {
      let we = Date.now();
      try {
        let ut = await ic(storageV5_10),
          {
            marketplaces: marketplaces_2,
            failures: failures_2
          } = await ype(ut, storageV5_10, "discover"),
          Fe = await ix(),
          It = Fe === "blocked";
        if (Ie) return;
        Le(It), $n(Fe !== "unavailable"), $t(Fe === "on" ? Nk().staleCatalogFetchedAt : void 0);
        let pt = [],
          Jt = await Promise.all(marketplaces_2.map(async ({
            name: name_2,
            data: data_3
          }) => ({
            name: name_2,
            entries: data_3 ? await H2e(name_2, data_3.plugins, ut, storageV5_10) : []
          })));
        if (Ie) return;
        for (let {
          name: $e,
          entries: entries
        } of Jt) for (let entry_5 of entries) {
          let pluginId_10 = uU(entry_5.name, $e);
          pt.push({
            entry: entry_5,
            marketplaceName: $e,
            pluginId: pluginId_10,
            isInstalled: Z1(pluginId_10)
          });
        }
        let pn = pt;
        if (Fe !== "unavailable") {
          let $e = await mbn(ut, storageV5_10);
          if (Ie) return;
          pn = f6o(gbn(Bzt(pt, ut), ut, $e), ut);
        }
        let vn = pn.filter(item => !item.isInstalled),
          gn = vn.filter(item => !Qf(item.pluginId) && !(item.installCountIds ?? []).some(Qf)),
          En = marketplaces_2.find(item => item.name === hn && item.config.source !== void 0 && Nf(item.config.source)),
          Yn = vn.length - gn.length + (En?.data ? Math.max(0, (Nk().catalogEntryNames?.size ?? 0) - En.data.plugins.length) : 0);
        try {
          let $e = await cOt(storageV5_10);
          if (Ie) return;
          We($e), C2r(gn, $e);
        } catch (error) {
          t(`Failed to fetch install counts: ${d(error)}`), C2r(gn, null);
        }
        let An = new Map();
        try {
          let $e = getSessionContext?.(),
            _t = new Set(dsn());
          for (let vt of gn) {
            if (!y6o(vt, _t, ut)) continue;
            let Lt = GEn(vt.entry.name, vt.entry.relevance);
            if (!Lt) continue;
            if ([vt.pluginId, ...(vt.installCountIds ?? [])].some(item => Aos(item) > 0) && !grantedSuggestions?.has(vt.pluginId)) continue;
            let Ln = await VEn(Lt, $e);
            if (Ln) An.set(vt.pluginId, Ln);
          }
        } catch (error) {
          t(`Failed to compute plugin suggestions: ${d(error)}`);
        }
        if (Ie) return;
        oe(An);
        let Bn = An.size > 0 ? [...gn.filter(item => An.has(item.pluginId)), ...gn.filter(item => !An.has(item.pluginId))] : gn;
        de(Bn);
        let configuredMarketplaceCount = F(Object.values(ut), $e => !(It && $e.source !== void 0 && Nf($e.source)));
        if (gn.length === 0) {
          let $e = await Tys({
            configuredMarketplaceCount: configuredMarketplaceCount,
            failedMarketplaceCount: FPt(failures_2).length
          });
          if (Ie) return;
          if ($e === "all-plugins-installed" && pt.length > 0 && pt.every(item => item.isInstalled && !fOt(item.pluginId)) && !pt.some(item => Qf(item.pluginId))) $e = "all-plugins-project-installed";
          se(Fe !== "unavailable" && $e === "all-plugins-installed" && Yn > 0 ? "all-hidden-by-policy" : $e === "all-marketplaces-failed" && Jco(failures_2) ? "directory-failed" : $e);
        }
        let lt = F(marketplaces_2, $e => $e.data !== null),
          At = EJt(failures_2, lt);
        if (At) if (At.type === "warning") Ue(FPt(failures_2).length === 0 ? At.message : At.message + (gn.length > 0 ? ". Showing available plugins." : "."));else throw Error(At.message);
        if (targetPlugin_3 === void 0) {
          let $e = markDiscoverLoaded();
          Vvs({
            directoryRows: F(gn, _t => _t.fromPluginDirectory === !0),
            totalRows: gn.length,
            foldedRows: F(gn, _t => _t.installCountIds !== void 0),
            loadMs: Date.now() - we,
            entry: $e ? "tab_return" : initialMarketplace === void 0 ? "menu" : "directory_command",
            directoryState: Fe === "on" && !En?.data ? "unavailable" : Fe,
            knownMarketplaceCount: F(Object.values(ut), _t => _t.source === void 0 || !Nf(_t.source))
          });
        }
        if (targetPlugin_3) {
          let $e = pn.find(item => item.entry.name === targetPlugin_3) ?? pt.find(item => item.entry.name === targetPlugin_3),
            _t = !1,
            vt = !1,
            Lt = !1,
            Ln = !1;
          if (!$e) {
            for (let [marketplaceName_2, Dn] of Object.entries(ut)) {
              Ve(`Checking ${pbn(marketplaceName_2)} for new plugins\u2026`);
              let xn = await b6o(marketplaceName_2, Dn, storageV5_10);
              if (Ie) return;
              if (xn === "refresh-failed") vt = !0;else if (xn === "refreshed") Ln = !0;
              if (xn !== "refreshed") continue;
              try {
                let Rn = (await Q1(marketplaceName_2, storageV5_10)).plugins.find(item => item.name === targetPlugin_3);
                if (Rn) {
                  let pluginId_11 = uU(Rn.name, marketplaceName_2),
                    [po] = await H2e(marketplaceName_2, [Rn], ut, storageV5_10);
                  $e = {
                    entry: po ?? Rn,
                    marketplaceName: marketplaceName_2,
                    pluginId: pluginId_11,
                    isInstalled: Z1(pluginId_11)
                  }, _t = !0, g("plugin_install_catalog_refresh");
                  break;
                }
              } catch (error) {
                Lt = !0, t(`Post-refresh reload of marketplace '${marketplaceName_2}' failed: ${d(error)}`, {
                  level: "warn"
                });
              }
              if (Ie) return;
            }
            if (!_t) if (vt) m("plugin_install_catalog_refresh", "refresh_failed");else if (Lt) m("plugin_install_catalog_refresh", "reload_failed");else if (Ln) p("plugin_install_catalog_refresh", "not_found_after_refresh");else p("plugin_install_catalog_refresh", "ineligible");
          }
          if (Ie) return;
          if ($e && Fe !== "unavailable") $e = Bzt([$e], ut)[0] ?? $e;
          if (_t && $e && !$e.isInstalled && !Qf($e.pluginId)) {
            let en = $e;
            de(Dn => Dn.some(item => item.pluginId === en.pluginId) ? Dn : [...Dn, en]);
          }
          if ($e) {
            if (fOt($e.pluginId)) {
              let en = await fTt($e.pluginId, storageV5_10),
                Dn = await Mr($e.pluginId, en, storageV5_10, credentials_4);
              if (Ie) return;
              if (Dn) setViewState_7(Dn);else if (en === null) setError_4(`Plugin '${$e.pluginId}' is already installed. Use '/plugin' to manage existing plugins.`);else if (en.changed) {
                let xn = await onInstallComplete_6?.([$e.pluginId]);
                if (Ie) return;
                setResult_5(`Plugin "${$e.pluginId}" is already installed${en.suffix}${xn === "load-failed" ? ". The plugin couldn't be loaded \u2014 see /plugin for details." : ""}`);
              } else setResult_5(`Plugin "${$e.pluginId}" is already installed${en.suffix}`);
            } else openDetails_3($e);
          } else setError_4(`Plugin "${targetPlugin_3}" not found in any marketplace`);
        }
      } catch (error) {
        if (Ie) return;
        setError_4(error instanceof Error ? error.message : "Failed to load plugins");
      } finally {
        if (!Ie) ye(!1);
      }
    }
    return Ke(), () => {
      Ie = !0;
    };
  }, [setError_4, setResult_5, setViewState_7, openDetails_3, onInstallComplete_6, getSessionContext, grantedSuggestions, targetPlugin_3, initialMarketplace, storageV5_10, credentials_4, markDiscoverLoaded]);
  let Pt = A(!1);
  if (P(() => {
    if (Pt.current || loading_3 || error_9 !== null || j !== null || viewState_6 !== "plugin-list" || He.size === 0) return;
    Pt.current = !0;
    let Ie = [...He.keys()];
    for (let Ke of Ie) grantedSuggestions?.add(Ke);
    xos(Ie.flatMap(item => [item, ...(availablePlugins_4.find(we => we.pluginId === item)?.installCountIds ?? [])]), storageV5_10);
  }, [availablePlugins_4, loading_3, error_9, j, viewState_6, He, grantedSuggestions, storageV5_10]), rt("confirm:no", bt, {
    context: "Settings",
    isActive: viewState_6 === "plugin-details"
  }), rt("confirm:no", () => {
    setViewState_6({
      type: "menu"
    });
  }, {
    context: "Settings",
    isActive: viewState_6 === "plugin-list" && !isSearchMode_2
  }), typeof viewState_6 === "object" && viewState_6.type === "plugin-options") return e(Ni, {
    viewState: viewState_6,
    onInstallComplete: onInstallComplete_6,
    onFinish: Ie => {
      setResult_5(Ie), setViewState_6({
        type: "menu"
      });
    }
  });
  if (loading_3) return e(Wr, {
    message: message_4
  });
  if (error_9) return e(ls, {
    error: error_9
  });
  if (viewState_6 === "plugin-details" && ze) return e(ji, {
    onEntryHelperShown: le,
    title: "Plugin details",
    plugin: ze,
    showMarketplace: !0,
    installError: installError_3,
    isInstalling: isInstalling_3,
    onInstall: cn,
    onBack: bt
  });
  if (availablePlugins_4.length === 0) return r(s, {
    flexDirection: "column",
    children: [e(s, {
      marginBottom: 1,
      children: e(n, {
        bold: !0,
        children: "Discover plugins"
      })
    }), children_22 && e(s, {
      marginBottom: 1,
      children: e(Ep, {
        status: "warning",
        children: children_22
      })
    }), e(td, {
      reason: reason
    }), Re ? e(s, {
      marginTop: 1,
      children: e(Pl, {})
    }) : null, e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(gt, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      })
    })]
  });
  let Je = pagination_3.getVisibleItems(filteredPlugins_3);
  return r(s, {
    flexDirection: "column",
    width: "100%",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: ln,
    onPaste: Qt,
    children: [r(s, {
      children: [e(n, {
        bold: !0,
        children: "Discover plugins"
      }), pagination_3.needsPagination && r(n, {
        dimColor: !0,
        children: [" ", "(", pagination_3.scrollPosition.current, "/", pagination_3.scrollPosition.total, ")"]
      })]
    }), e(s, {
      marginBottom: Pn || Re ? 0 : 1,
      flexDirection: "column",
      children: e(fS, {
        ...searchBoxProps_2
      })
    }), Pn ? e(s, {
      marginBottom: Re ? 0 : 1,
      marginLeft: 1,
      children: r(n, {
        children: [h6o(Dt, marketplaceFilter_2).map((item, index) => {
          let bold = item.marketplace === marketplaceFilter_2;
          return r(n, {
            children: [index > 0 && e(n, {
              dimColor: !0,
              children: " \xB7 "
            }), r(n, {
              bold: bold,
              color: bold ? "suggestion" : void 0,
              dimColor: !bold,
              children: [Wn(item.label), " ", item.count]
            })]
          }, item.marketplace ?? "");
        }), Dt.length > HZn && r(n, {
          dimColor: !0,
          children: [" ", "\xB7 +", Dt.length - HZn, " more"]
        }), r(n, {
          dimColor: !0,
          children: ["  ", e(gt, {
            action: "plugin:cycleMarketplace",
            context: "Plugin",
            fallback: "ctrl+s",
            description: "filter by marketplace",
            parens: !0
          })]
        })]
      })
    }) : null, Re ? e(s, {
      marginBottom: 1,
      marginLeft: 1,
      children: e(Pl, {})
    }) : null, je !== void 0 ? e(s, {
      marginBottom: 1,
      marginLeft: 1,
      children: r(n, {
        dimColor: !0,
        children: ["The ", Tr, " could not be reached; showing the list from", " ", Number.isNaN(Date.parse(je)) ? "an earlier session" : mv(new Date(je), {
          style: "long"
        }), "."]
      })
    }) : null, children_22 && e(s, {
      marginBottom: 1,
      children: e(Ep, {
        status: "warning",
        children: children_22
      })
    }), filteredPlugins_3.length === 0 && searchQuery_2 && e(s, {
      marginBottom: 1,
      children: r(Eo, {
        children: ['No plugins match "', searchQuery_2, '"']
      })
    }), pagination_3.scrollPosition.canScrollUp && e(s, {
      children: r(n, {
        dimColor: !0,
        children: [" ", te.arrowUp, " more above"]
      })
    }), Je.map((item, index) => {
      let we = pagination_3.toActualIndex(index),
        ut = selectedIndex_4 === we,
        xe = selectedForInstall_4.has(item.pluginId),
        dt = installingPlugins_3.has(item.pluginId),
        Fe = FZn(item, at),
        It = item.entry.description || (Sn ? _bn(item) : void 0),
        pt = He.get(item.pluginId),
        Jt = index === Je.length - 1;
      return r(xF, {
        active: ut && !isSearchMode_2,
        flexDirection: "column",
        marginBottom: Jt ? 0 : 1,
        children: [r(s, {
          children: [r(n, {
            "aria-hidden": !0,
            color: ut && !isSearchMode_2 ? "suggestion" : void 0,
            children: [ut && !isSearchMode_2 ? te.pointer : " ", " "]
          }), r(n, {
            children: [dt ? te.ellipsis : xe ? te.radioOn : te.radioOff, " ", Wm(item.entry), r(n, {
              dimColor: !0,
              children: [" ", "\xB7 ", Wn(hbn(item))]
            }), pt && r(n, {
              dimColor: !0,
              children: [" ", "\xB7 ", Ry(pt)]
            }), item.entry.tags?.includes("community-managed") && item.marketplaceName !== hn && e(n, {
              dimColor: !0,
              children: " [Community Managed]"
            }), Hmr(item.entry) && e(n, {
              dimColor: !0,
              children: " [not installable on claude.ai yet]"
            }), Fe !== void 0 && (item.marketplaceName === Su || item.alsoListedIn?.includes(Su)) && r(n, {
              dimColor: !0,
              children: [" \xB7 ", aSr(Fe), " installs"]
            })]
          })]
        }), It && e(s, {
          marginLeft: 4,
          children: e(n, {
            dimColor: !0,
            children: mt(Wn(It), 60)
          })
        })]
      }, `${pagination_3.startIndex}-${item.pluginId}`);
    }), pagination_3.scrollPosition.canScrollDown && e(s, {
      children: r(n, {
        dimColor: !0,
        children: [" ", te.arrowDown, " more below"]
      })
    }), e(Vi, {
      ...keyHintProps_2
    })]
  });
}
function Pl() {
  let a = w(2),
    h;
  if (a[0] === S) h = AH(), a[0] = h;else h = a[0];
  let k = h,
    v;
  if (a[1] === S) v = r(n, {
    dimColor: !0,
    children: [Tr, " is blocked by your organization.", k === "" ? "" : ` ${k}`]
  }), a[1] = v;else v = a[1];
  return v;
}
function td(a) {
  let k = w(9),
    {
      reason: reason_2
    } = a;
  switch (reason_2) {
    case "directory-failed":
      {
        let v;
        if (k[0] === S) v = r(n, {
          dimColor: !0,
          children: ["No plugins to show until the", " ", Tr, " loads."]
        }), k[0] = v;else v = k[0];
        return v;
      }
    case "all-hidden-by-policy":
      {
        let v;
        if (k[1] === S) v = e(n, {
          dimColor: !0,
          children: "Your organization's policy hides every plugin that would be listed here."
        }), k[1] = v;else v = k[1];
        return v;
      }
    case "git-not-installed":
      {
        let v;
        if (k[2] === S) v = r(Q, {
          children: [e(n, {
            dimColor: !0,
            children: "Git is required to install marketplaces."
          }), e(n, {
            dimColor: !0,
            children: "Please install git and restart Claude Code."
          })]
        }), k[2] = v;else v = k[2];
        return v;
      }
    case "all-blocked-by-policy":
      {
        let v;
        if (k[3] === S) v = r(Q, {
          children: [e(n, {
            dimColor: !0,
            children: "Your organization policy does not allow any external marketplaces."
          }), e(n, {
            dimColor: !0,
            children: "Contact your administrator."
          })]
        }), k[3] = v;else v = k[3];
        return v;
      }
    case "policy-restricts-sources":
      {
        let v;
        if (k[4] === S) v = r(Q, {
          children: [e(n, {
            dimColor: !0,
            children: "Your organization restricts which marketplaces can be added."
          }), e(n, {
            dimColor: !0,
            children: "Switch to the Marketplaces tab to view allowed sources."
          })]
        }), k[4] = v;else v = k[4];
        return v;
      }
    case "all-marketplaces-failed":
      {
        let v;
        if (k[5] === S) v = r(Q, {
          children: [e(n, {
            dimColor: !0,
            children: "Failed to load marketplace data."
          }), e(n, {
            dimColor: !0,
            children: "Check your network connection."
          })]
        }), k[5] = v;else v = k[5];
        return v;
      }
    case "all-plugins-installed":
      {
        let v;
        if (k[6] === S) v = r(Q, {
          children: [e(n, {
            dimColor: !0,
            children: "All available plugins are already installed."
          }), e(n, {
            dimColor: !0,
            children: "Check for new plugins later or add more marketplaces."
          })]
        }), k[6] = v;else v = k[6];
        return v;
      }
    case "all-plugins-project-installed":
      {
        let v;
        if (k[7] === S) v = r(Q, {
          children: [e(n, {
            dimColor: !0,
            children: "All available plugins are installed for this project."
          }), e(n, {
            dimColor: !0,
            children: "Use the Browse tab to install at user scope."
          })]
        }), k[7] = v;else v = k[7];
        return v;
      }
    case "no-marketplaces-configured":
    default:
      {
        let v;
        if (k[8] === S) v = e(Eo, {
          hint: "Add a marketplace first using the Marketplaces tab.",
          children: "No plugins available."
        }), k[8] = v;else v = k[8];
        return v;
      }
  }
}
var xl = 32;
function Ry(a) {
  switch (a.signal) {
    case "cwd":
      return "suggested for this directory";
    case "cli":
      return `suggested for ${mt(a.command, xl)} commands`;
    case "hosts":
      return `suggested for ${mt(a.host, xl)}`;
    case "filesRead":
      return `suggested for ${ed(a.file)}`;
    case "manifestDep":
      return `suggested from ${ed(a.file)}`;
  }
}
function ed(a) {
  return Fd(ts(a).replaceAll("\\", "/"), xl);
}
B();
import { readdir as Ty, readFile as od } from "fs/promises";
import { homedir as Ey } from "os";
import * as wo from "path";
var Tl = 5,
  Dy = f(() => u({
    query: o().min(1),
    should_trigger: M()
  })),
  Dl = async () => null;
async function My(a) {
  let queries = [],
    warnings = [],
    v;
  try {
    v = await Ty(a);
  } catch (error) {
    if (G(error)) return {
      queries: [],
      warnings: [`No evals/ folder found at ${a}. Create one with at least ${Tl} <name>.md files (frontmatter: query, should_trigger).`]
    };
    throw error;
  }
  for (let file of v.filter(item => item.endsWith(".md")).sort()) {
    let x = wo.join(a, file),
      T;
    try {
      T = await od(x, "utf8");
    } catch (error) {
      warnings.push(`Could not read ${file}: ${d(error)}`);
      continue;
    }
    T = zb(T);
    let K = T.match(HE);
    if (!K) {
      warnings.push(`${file}: missing YAML frontmatter (expected ---\\nquery: \u2026\\nshould_trigger: \u2026\\n---).`);
      continue;
    }
    let N;
    try {
      N = wM(K[1] ?? "");
    } catch (error) {
      warnings.push(`${file}: invalid YAML \u2014 ${d(error)}`);
      continue;
    }
    let D = Dy().safeParse(N);
    if (!D.success) {
      let j = D.error.issues.map(item => `${item.path.join(".")}: ${item.message}`).join("; ");
      warnings.push(`${file}: ${j}`);
      continue;
    }
    let notes = T.slice(K[0].length).trim();
    queries.push({
      file: file,
      query: D.data.query,
      shouldTrigger: D.data.should_trigger,
      ...(notes && {
        notes: notes
      })
    });
  }
  if (queries.length > 0 && queries.length < Tl) warnings.push(`Only ${queries.length} eval ${queries.length === 1 ? "query" : "queries"} found; the spec recommends at least ${Tl} for meaningful coverage.`);
  return {
    queries: queries,
    warnings: warnings
  };
}
async function $y(a) {
  try {
    let h = await od(wo.join(a, "SKILL.md"), "utf8"),
      k = zb(h).match(HE);
    if (!k) return "";
    let v = wM(k[1] ?? "");
    if (v && typeof v === "object" && "description" in v && typeof v.description === "string") return v.description;
  } catch {}
  return "";
}
async function Ml(a, signal, k) {
  let v = a === "~" || a.startsWith("~/") ? wo.join(Ey(), a.slice(1)) : a,
    pluginPath = wo.resolve(v),
    x = wo.basename(pluginPath),
    description = await $y(pluginPath),
    evalsPath = wo.join(pluginPath, "evals"),
    {
      queries: queries_2,
      warnings: warnings_2
    } = await My(evalsPath),
    triggerResults = [];
  for (let query of queries_2) {
    if (signal.aborted) break;
    try {
      let U = await k({
        skillName: x,
        description: description,
        query: query,
        signal: signal
      });
      if (U === null) {
        triggerResults.push({
          query: query,
          modelWouldTrigger: null,
          reason: "Model evaluation not yet wired up \u2014 tracks the plugin evaluation framework.",
          verdict: "skipped"
        });
        continue;
      }
      triggerResults.push({
        query: query,
        modelWouldTrigger: U.wouldTrigger,
        reason: U.reason,
        verdict: U.wouldTrigger === query.shouldTrigger ? "pass" : "fail"
      });
    } catch (error) {
      t(`plugin eval: trigger test for ${query.file} threw: ${d(error)}`, {
        level: "error"
      }), triggerResults.push({
        query: query,
        modelWouldTrigger: null,
        reason: d(error),
        verdict: "fail"
      });
    }
  }
  return {
    pluginName: x,
    pluginPath: pluginPath,
    evalsPath: evalsPath,
    queries: queries_2,
    warnings: warnings_2,
    triggerResults: triggerResults,
    passCount: F(triggerResults, j => j.verdict === "pass"),
    failCount: F(triggerResults, j => j.verdict === "fail"),
    skippedCount: F(triggerResults, j => j.verdict === "skipped")
  };
}
function $l(a) {
  let h = [];
  h.push(`Evaluating ${a.pluginName} (${a.evalsPath})`), h.push("");
  for (let k of a.warnings) h.push(`! ${k}`);
  if (a.warnings.length > 0) h.push("");
  if (a.queries.length === 0) return h.push("No eval queries to run."), h.join(`
`);
  h.push("Level 1 \u2014 trigger tests:");
  for (let k of a.triggerResults) {
    let v = k.verdict.toUpperCase().padEnd(7),
      C = k.query.shouldTrigger ? "trigger" : "skip";
    if (k.verdict === "skipped") h.push(`  [${v}] ${k.query.file} \u2014 expected ${C}`);else {
      let x = k.modelWouldTrigger ? "trigger" : "skip";
      if (h.push(`  [${v}] ${k.query.file} \u2014 expected ${C}, got ${x}`), k.verdict === "fail") h.push(`            ${k.reason}`);
    }
  }
  if (h.push(""), a.skippedCount === a.triggerResults.length) h.push("All trigger tests skipped \u2014 model evaluation not yet wired up.");else h.push(`${a.passCount}/${a.passCount + a.failCount} trigger tests passed${a.skippedCount > 0 ? ` (${a.skippedCount} skipped)` : ""}.`);
  return h.push(""), h.push("Level 2 \u2014 interplay tests: not yet implemented. Tracks the plugin evaluation framework."), h.join(`
`);
}
function Vr(a) {
  let v = w(6),
    {
      onComplete: onComplete_3,
      target: target
    } = a,
    C;
  if (v[0] === S) C = new AbortController(), v[0] = C;else C = v[0];
  let x = A(C),
    T,
    K;
  if (v[1] !== onComplete_3 || v[2] !== target) T = () => {
    let current_4 = x.current;
    let _ = async function _() {
      if (!target) {
        onComplete_3(`Usage: /plugin eval [path]

Run trigger evaluations for a skill against the queries in its evals/ folder.

Examples:
  /plugin eval ./my-skill
  /plugin eval ~/.claude/skills/pdf-tools

Each evals/*.md file needs frontmatter with \`query\` (string)
and \`should_trigger\` (boolean). The spec recommends at least five.

Or from the command line:
  claude plugin eval [path]`);
        return;
      }
      ;
      try {
        let Y = await Ml(target, current_4.signal, Dl);
        process.exitCode = Y.failCount > 0 ? 1 : 0;
        let j = Y.queries.length === 0 ? "" : Y.failCount > 0 ? `

${te.cross} Evaluation failed` : Y.skippedCount === Y.queries.length ? `

${te.info} Eval queries validated; trigger tests pending model integration` : `

${te.tick} Evaluation passed`;
        onComplete_3($l(Y) + j);
      } catch (error) {
        let U = error;
        process.exitCode = 2, t(`Plugin eval failed for ${target}: ${d(U)}`, {
          level: "error"
        }), onComplete_3(`${te.cross} ${d(U)}`);
      }
    };
    return _(), () => current_4.abort();
  }, K = [onComplete_3, target], v[1] = onComplete_3, v[2] = target, v[3] = T, v[4] = K;else T = v[3], K = v[4];
  P(T, K);
  let D;
  if (v[5] === S) D = e(s, {
    flexDirection: "column",
    children: e(n, {
      children: "Running evaluation\u2026"
    })
  }), v[5] = D;else D = v[5];
  return D;
}
B();
function Kr(a) {
  let x = w(19),
    {
      command: command,
      onConfirm: onConfirm,
      onCancel: onCancel_7
    } = a,
    C = A(!1),
    T;
  if (x[0] !== onCancel_7) T = function K() {
    if (C.current) {
      return;
    }
    C.current = !0, onCancel_7();
  }, x[0] = onCancel_7, x[1] = T;else T = x[1];
  let onCancel_8 = T,
    N;
  if (x[2] !== onCancel_8 || x[3] !== onConfirm) N = function Y(D) {
    if (D.ctrl || D.meta) {
      return;
    }
    if (D.key === "y" || D.key === "Y") {
      if (D.preventDefault(), C.current) {
        return;
      }
      C.current = !0, onConfirm();
    } else if (D.key === "n" || D.key === "N") D.preventDefault(), onCancel_8();
  }, x[2] = onCancel_8, x[3] = onConfirm, x[4] = N;else N = x[4];
  let onKeyDown_3 = N,
    j;
  if (x[5] !== command) j = hI(command, " ").trim().split(/\s+/).join(" "), x[5] = command, x[6] = j;else j = x[6];
  let children_23 = j,
    _;
  if (x[7] === S) _ = e(n, {
    bold: !0,
    children: "y"
  }), x[7] = _;else _ = x[7];
  let inputGuide_4;
  if (x[8] === S) inputGuide_4 = r(n, {
    children: ["Press ", _, " to run or ", e(n, {
      bold: !0,
      children: "n"
    }), " to cancel"]
  }), x[8] = inputGuide_4;else inputGuide_4 = x[8];
  let ce;
  if (x[9] === S) ce = e(n, {
    children: "This command came from a link:"
  }), x[9] = ce;else ce = x[9];
  let fe;
  if (x[10] !== children_23) fe = r(n, {
    children: ["  ", e(n, {
      bold: !0,
      children: children_23
    })]
  }), x[10] = children_23, x[11] = fe;else fe = x[11];
  let de;
  if (x[12] === S) de = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Nothing runs until you answer. Only run commands from links you trust."
    })
  }), x[12] = de;else de = x[12];
  let children_24;
  if (x[13] !== onKeyDown_3 || x[14] !== fe) children_24 = r(ko, {
    onKeyDown: onKeyDown_3,
    children: [ce, fe, de]
  }), x[13] = onKeyDown_3, x[14] = fe, x[15] = children_24;else children_24 = x[15];
  let ye;
  if (x[16] !== onCancel_8 || x[17] !== children_24) ye = e(be, {
    title: "Run this command?",
    color: "suggestion",
    onCancel: onCancel_8,
    inputGuide: inputGuide_4,
    children: children_24
  }), x[16] = onCancel_8, x[17] = children_24, x[18] = ye;else ye = x[18];
  return ye;
}
B();
import { basename as jy } from "path";
var Vy = `${Tr} is off. Plugins you installed from it stay installed and keep updating. Turn it back on in /plugin \u2192 Marketplaces.`;
function Ol({
  setViewState: setViewState_8,
  error: error_10,
  setError: setError_5,
  setResult: setResult_6,
  exitState: exitState_3,
  onManageComplete: onManageComplete,
  targetMarketplace: T,
  action: action
}) {
  let {
      storageV5: storageV5_11,
      credentials: credentials_5
    } = Oe(),
    Y = RV(),
    [j, U] = y([]),
    [_, ee] = y([]),
    [ce, fe] = y({
      available: [],
      hosted: [],
      browseOnly: []
    }),
    [de, pe] = y(null),
    ye = A(null),
    [z, Ve] = y(!0),
    [at, We] = y(0),
    [He, oe] = y(!1),
    [ve, St] = y(null),
    [Dt, Ze] = y(null),
    [Et, ze] = y(null),
    [ht, bt] = y("list"),
    [le, wt] = y(null),
    [defaultFocusValue_3, onFocus_2] = y("browse"),
    sn = A(!1),
    Ft = dn(),
    _e = A(void 0),
    ct = A(!0),
    Ct = A(!1);
  P(() => () => {
    ct.current = !1, _e.current?.();
  }, []), P(() => {
    async function se() {
      try {
        let Re = await ic(storageV5_11),
          {
            enabled: enabled_2,
            disabled: disabled_2
          } = await lw(storageV5_11, credentials_5),
          $t = [...enabled_2, ...disabled_2];
        ee(Object.keys(qd().plugins));
        let {
            marketplaces: marketplaces_3,
            failures: failures_3
          } = await ype(Re, storageV5_11),
          Ie = await yYe(credentials_5).catch(() => null);
        ye.current = Ie, fe({
          ..._Ye(Ie, Re),
          browseOnly: Ie?.browseOnly ?? []
        });
        let Ke = await sd(dd(marketplaces_3, failures_3, $t, await iZ()), Re);
        U(Ke);
        let we = F(marketplaces_3, xe => xe.data !== null),
          ut = EJt(failures_3, we);
        if (ut) if (ut.type === "warning" || T !== void 0 && action !== "remove" && action !== "update") St(ut.message);else throw Error(ut.message);
        if (T && !sn.current && !error_10) {
          sn.current = !0;
          let xe = action === "remove" && rT(T) ? Nse(Re).filter(({
              name: name_3
            }) => QD(T) ? QD(name_3) : name_3 === T) : [],
            dt = Ke.findIndex(item => item.name === T || item.builtIn !== void 0 && QD(T));
          if (xe.length > 0) {
            let Fe = await w6e(T, void 0, storageV5_11, credentials_5, {
                onlyIgnoredNameEntries: !0
              }),
              It = [],
              pt = !1;
            if (Fe.kind === "ignored-plugin-directory-name-entry-removed") {
              pt = Fe.removedNames.length > 0;
              for (let pn of Fe.removedNames) It.push(D_t(pn, uw()));
              let Jt = ede(Fe.disabledPluginIds, Fe.disabledReason);
              if (Jt !== null) It.push(Jt);
              if (Y.removeErrorsOf(Fe.removedPluginIds), !pt) It.push(J8n(T));
            } else if (Fe.kind === "removed") pt = !0, It.push(`Removed marketplace "${Ge(T)}"`), Y.removeErrorsOf(Fe.removedPluginIds);
            if (pt) i("tengu_marketplace_removed", {
              marketplace_name: mPe(T),
              _PROTO_marketplace_name: T,
              is_official_marketplace: zl(T)
            });
            cd(storageV5_11, credentials_5), setResult_6(Wn(`${te.tick} ${It.join(" ")}`)), await onManageComplete(), setViewState_8({
              type: "menu"
            });
          } else if (dt >= 0) {
            let Fe = Ke[dt];
            if (Fe?.builtIn === "blocked" && action !== void 0 && action !== "confirm-remove") {
              We(dt + 1);
              {
                let It = AH();
                if (action === "remove") St(Tpn(It));else St(fKs(It));
              }
            } else if (Fe?.builtIn === "blocked") {
              let It = `@${hn}`,
                pt = Object.keys(qd().plugins).find(item => item.endsWith(It));
              if (pt) {
                setViewState_8({
                  type: "manage-plugins",
                  targetPlugin: pt.slice(0, -It.length),
                  targetMarketplace: hn
                });
                return;
              }
              We(dt + 1);
            } else if (action === "confirm-remove" && Fe) We(dt + 1), wt(Fe), _e.current?.(), bt(Fe.builtIn ? "details" : "confirm-remove");else if (action === "remove" && Fe?.builtIn) We(dt + 1), ln(!1);else if (action) {
              We(dt + 1);
              let It = Ke.map((item, index) => index === dt ? {
                ...item,
                pendingUpdate: action === "update",
                pendingRemove: action === "remove"
              } : item);
              U(It), Kt(It);
            } else if (Fe) We(dt + 1), wt(Fe), _e.current?.(), bt("details");
          } else setError_5(`Marketplace not found: ${T}`);
        }
      } catch (error) {
        let Le = ZT(error);
        setError_5(Le), St(Le);
      } finally {
        Ve(!1);
      }
    }
    se();
  }, [T, action, error_10]);
  let Mt = () => j.some(item => item.pendingUpdate || item.pendingRemove),
    Zt = () => {
      let updateCount = F(j, Le => Le.pendingUpdate),
        removeCount = F(j, Le => Le.pendingRemove);
      return {
        updateCount: updateCount,
        removeCount: removeCount
      };
    },
    Kt = async se => {
      if (Ct.current) return;
      Ct.current = !0;
      let Re = se || j,
        Le = ht === "details";
      oe(!0), St(null), Ze(null), ze(null);
      try {
        let updatedCount = 0,
          $t = 0,
          Pt = null,
          Je = [],
          Ie = [],
          Ke = new Set();
        for (let lt of Re) {
          if (lt.pendingRemove) {
            if (lt.installedPlugins.length > 0) await ca("userSettings", $e => {
              let enabledPlugins = {
                ...$e?.enabledPlugins
              };
              for (let vt of lt.installedPlugins) {
                let Lt = uU(vt.name, lt.name);
                enabledPlugins[Lt] = !1;
              }
              return {
                enabledPlugins: enabledPlugins
              };
            }, void 0, storageV5_11);
            let At = await w6e(lt.name, void 0, storageV5_11, credentials_5);
            if ($t++, At.kind !== "plugin-directory-built-in") Y.removeErrorsOf(At.removedPluginIds);
            if (At.kind === "ignored-plugin-directory-name-entry-removed") {
              let $e = ede(At.disabledPluginIds, At.disabledReason);
              Pt = $e === null ? null : Wn($e);
            }
            i("tengu_marketplace_removed", {
              marketplace_name: mPe(lt.name),
              _PROTO_marketplace_name: lt.name,
              is_official_marketplace: zl(lt.name),
              plugins_uninstalled: lt.installedPlugins.length
            });
            continue;
          }
          if (lt.pendingUpdate) {
            try {
              await Rq(lt.name, storageV5_11, At => {
                ze(At);
              });
            } catch (error) {
              if (error instanceof Yl) {
                Je.push(lt.name), t(`Marketplace ${lt.name} not updated (managed policy): ${d(error)}`);
                continue;
              }
              Ie.push(lt.name), t(`Marketplace ${lt.name} could not be refreshed: ${d(error)}`, {
                level: "warn"
              });
              continue;
            }
            updatedCount++, Ke.add(lt.name.toLowerCase()), i("tengu_marketplace_updated", {
              marketplace_name: mPe(lt.name),
              _PROTO_marketplace_name: lt.name,
              is_official_marketplace: zl(lt.name)
            });
          }
        }
        let updatedPluginCount = 0,
          deferredPluginCount = 0,
          policyBlockedPluginCount = 0,
          pinnedPluginCount = 0,
          failedPluginCount = 0,
          It = [],
          pt = [];
        if (Ke.size > 0) {
          let {
            updated: updated,
            blocked: blocked,
            updateFailedCount: updateFailedCount,
            commandSourceSkipped: commandSourceSkipped
          } = await TGr(Ke, new Set(), {
            skipCommandSources: !0
          }, storageV5_11);
          updatedPluginCount = updated.length, pt = commandSourceSkipped, deferredPluginCount = F(blocked, Lt => Lt.type === "autoupdate-deferred-entry-helper"), policyBlockedPluginCount = F(blocked, Lt => Lt.type === "autoupdate-disabled-by-policy"), pinnedPluginCount = F(blocked, Lt => Lt.type === "autoupdate-blocked-by-pinner"), failedPluginCount = updateFailedCount;
          let vt = blocked.filter(item => item.type !== "autoupdate-deferred-entry-helper" && item.type !== "autoupdate-disabled-by-policy" && item.type !== "autoupdate-blocked-by-pinner");
          if (vt.length > 0 || updated.length > 0) j7n(updated, vt, [], {
            announce: !1
          });
          It = vt.flatMap(item => "plugin" in item && typeof item.plugin === "string" ? [item.plugin] : []);
        }
        if (cd(storageV5_11, credentials_5), await onManageComplete(), !ct.current) return;
        let Jt = await ic(storageV5_11),
          {
            enabled: enabled_3,
            disabled: disabled_3
          } = await lw(storageV5_11, credentials_5);
        if (!ct.current) return;
        let gn = [...enabled_3, ...disabled_3],
          {
            marketplaces: marketplaces_4,
            failures: failures_4
          } = await ype(Jt, storageV5_11);
        if (!ct.current) return;
        fe(lt => ({
          ...lt,
          ..._Ye(ye.current, Jt)
        }));
        let An = await sd(dd(marketplaces_4, failures_4, gn, await iZ()), Jt);
        if (U(An), We(lt => Math.min(lt, An.length)), Le && le) {
          let lt = An.find(item => item.name === le.name);
          if (lt) wt(lt);
        }
        let Bn = [],
          On = Le ? $A : wwt;
        if (updatedCount > 0 || Je.length > 0 || Ie.length > 0 || pinnedPluginCount > 0 || failedPluginCount > 0) Bn.push(Cys({
          updatedCount: updatedCount,
          updatedPluginCount: updatedPluginCount,
          deferredPluginCount: deferredPluginCount,
          policyBlockedPluginCount: policyBlockedPluginCount,
          policyRefusedMarketplaces: Je.map(item => On(item)),
          failedMarketplaces: Ie.map(item => On(item)),
          pinnedPluginCount: pinnedPluginCount,
          failedPluginCount: failedPluginCount,
          failedPluginNames: It.map(item => On(item))
        }));
        if (pt.length > 0) {
          let lt = pt.length,
            At = lt > 1,
            $e = pt.find(xW) ?? "",
            tail = `${At ? "(and the others) " : ""}to review (add --scope for a project/local install)`,
            fallback_5 = `review and update ${At ? "each" : "it"} individually from the command line`;
          Bn.push(`${lt} command-sourced ${O(lt, "plugin")} not updated here \u2014 ${Jg("plugin update", $e, {
            tail: tail,
            fallback: fallback_5
          })}`);
        }
        if ($t > 0) Bn.push(`Removed ${$t} ${O($t, "marketplace")}`);
        if (Bn.length > 0) {
          let At = `${GNn({
              failedCount: Ie.length + failedPluginCount,
              updatedCount: updatedCount + $t,
              policyRefusedCount: Je.length
            }) ?? te.warning} ${Bn.join(", ")}`,
            $e = Pt === null ? At : `${Pt} ${At}`;
          if (Le) Ze($e);else {
            if (!ct.current) return;
            setResult_6($e), _e.current?.(), _e.current = Ft.setTimeout(() => setViewState_8({
              type: "menu"
            }), 2000);
          }
        } else if (!Le) {
          if (!ct.current) return;
          setViewState_8({
            type: "menu"
          });
        }
      } catch (error) {
        let $t = ZT(error);
        if (!ct.current) return;
        St($t), setError_5($t);
      } finally {
        if (Ct.current = !1, ct.current) oe(!1), ze(null);
      }
    },
    cn = async () => {
      if (!le) return;
      let se = j.map(item => item.name === le.name ? {
        ...item,
        pendingRemove: !0
      } : item);
      U(se), await Kt(se);
    },
    options_5 = Z(() => {
      if (!le) return [];
      if (le.builtIn === "off") return [{
        label: "Turn on",
        value: "turn-on"
      }];
      let se = [{
        label: `Browse plugins (${le.pluginCount ?? 0})`,
        value: "browse"
      }, {
        label: le.lastUpdated ? r(n, {
          children: ["Update marketplace", e(n, {
            dimColor: !0,
            children: ` (last updated ${new Date(le.lastUpdated).toLocaleDateString()})`
          })]
        }) : "Update marketplace",
        value: "update"
      }];
      if (le.builtIn === "on") return se.push({
        label: r(n, {
          children: ["Turn off", e(n, {
            dimColor: !0,
            children: " (plugins installed from it stay installed)"
          })]
        }),
        value: "turn-off"
      }), se;
      if (!Cle()) se.push({
        label: le.autoUpdate ? "Disable auto-update" : "Enable auto-update",
        value: "toggle-auto-update"
      });
      return se.push({
        label: "Remove marketplace",
        value: "remove"
      }), se;
    }, [le]),
    jt = A(!1),
    ln = async enabled_4 => {
      if (jt.current) return;
      jt.current = !0;
      try {
        let Re = await ix();
        try {
          await pOt(enabled_4);
        } catch (error) {
          if (Re !== "unavailable") fPe({
            enabled: enabled_4,
            surface: "ui",
            failure: Re === "blocked" ? "blocked_by_organization" : "settings_write_failed"
          });
          throw error;
        }
        if (Re === "on" !== enabled_4) fPe({
          enabled: enabled_4,
          surface: "ui"
        });
        cd(storageV5_11, credentials_5), setResult_6(enabled_4 ? `${Tr} is on. Its plugins are back in /plugin \u2192 Discover.` : Vy), await onManageComplete(), setViewState_8({
          type: "menu"
        });
      } catch (error) {
        St(Rt(d(error), 300));
      }
      jt.current = !1;
    },
    Qt = async se => {
      let autoUpdate = !se.autoUpdate;
      try {
        await j_s(se.name, autoUpdate, storageV5_11), U(Le => Le.map(item => item.name === se.name ? {
          ...item,
          autoUpdate: autoUpdate
        } : item)), wt(Le => Le ? {
          ...Le,
          autoUpdate: autoUpdate
        } : Le);
      } catch (error) {
        St(ZT(error));
      }
    };
  rt("confirm:no", () => {
    _e.current?.(), bt("list"), onFocus_2("browse");
  }, {
    context: "Confirmation",
    isActive: !He && (ht === "details" || ht === "confirm-remove" || ht === "confirm-add-claudeai")
  }), rt("confirm:no", () => {
    _e.current?.(), U(se => se.map(item => ({
      ...item,
      pendingUpdate: !1,
      pendingRemove: !1
    }))), We(0);
  }, {
    context: "Confirmation",
    isActive: !He && ht === "list" && Mt()
  }), rt("confirm:no", () => {
    setViewState_8({
      type: "menu"
    });
  }, {
    context: "Confirmation",
    isActive: !He && ht === "list" && !Mt()
  }), on({
    "select:previous": () => We(se => Math.max(0, se - 1)),
    "select:next": () => {
      let se = j.length + ce.available.length + ce.hosted.length + 1;
      We(Re => Math.min(se - 1, Re + 1));
    },
    "select:accept": () => {
      _e.current?.();
      let se = at - 1,
        Re = ce.available[se - j.length],
        Le = ce.hosted[se - j.length - ce.available.length];
      if (at === 0) setViewState_8({
        type: "add-marketplace"
      });else if (Mt()) Kt();else if (Re) setViewState_8({
        type: "add-marketplace",
        claudeAiListing: {
          name: Re.name,
          source: lHe(Re.source)
        }
      });else if (Le) pe(Le), St(null), bt("confirm-add-claudeai");else {
        let je = j[se];
        if (je && je.builtIn !== "blocked") wt(je), bt("details"), onFocus_2(je.builtIn === "off" ? "turn-on" : "browse");
      }
    }
  }, {
    context: "Select",
    isActive: !He && ht === "list"
  });
  function onKeyDown_6(se) {
    if (se.ctrl || se.meta || He) return;
    let Re = at - 1,
      Le = j[Re]?.builtIn;
    if (Le === "blocked") return;
    if (Le !== void 0 && /^[udUD]$/.test(se.key)) {
      let je = j[Re];
      if (je && (Le === "off" || se.key === "d" || se.key === "D")) {
        se.preventDefault(), _e.current?.(), wt(je), bt("details"), onFocus_2(Le === "off" ? "turn-on" : "turn-off");
        return;
      }
    }
    if ((se.key === "u" || se.key === "U") && Re >= 0) se.preventDefault(), _e.current?.(), U(je => je.map((item, index) => index === Re ? {
      ...item,
      pendingUpdate: !item.pendingUpdate,
      pendingRemove: item.pendingUpdate ? item.pendingRemove : !1
    } : item));else if ((se.key === "d" || se.key === "D") && Re >= 0) {
      let je = j[Re];
      if (je) se.preventDefault(), wt(je), _e.current?.(), bt("confirm-remove");
    }
  }
  let onSelect_2 = se => {
    if (_e.current?.(), !le) return;
    switch (se) {
      case "browse":
        setViewState_8({
          type: "browse-marketplace",
          targetMarketplace: le.name
        });
        return;
      case "update":
        {
          let Re = j.map(item => item.name === le.name ? {
            ...item,
            pendingUpdate: !0
          } : item);
          U(Re), Kt(Re);
          return;
        }
      case "toggle-auto-update":
        Qt(le);
        return;
      case "remove":
        bt("confirm-remove");
        return;
      case "turn-on":
      case "turn-off":
        ln(se === "turn-on");
    }
  };
  function onKeyDown_5(se) {
    if (se.ctrl || se.meta || He) return;
    if (se.key === "y" || se.key === "Y") se.preventDefault(), _e.current?.(), cn();else if (se.key === "n" || se.key === "N") se.preventDefault(), _e.current?.(), bt("list"), wt(null);
  }
  function onKeyDown_4(se) {
    if (se.ctrl || se.meta || He) return;
    if ((se.key === "y" || se.key === "Y") && de) se.preventDefault(), kn(de);else if (se.key === "n" || se.key === "N") se.preventDefault(), bt("list"), pe(null);
  }
  async function kn(se) {
    oe(!0), St(null);
    try {
      let {
        name: Re
      } = await D0n(se, {
        configured: await ic(storageV5_11),
        credentials: credentials_5
      });
      if (i("tengu_marketplace_added", {
        source_type: b("claudeai")
      }), cd(storageV5_11, credentials_5), await onManageComplete(), !ct.current) return;
      pe(null), setViewState_8({
        type: "browse-marketplace",
        targetMarketplace: Re
      });
    } catch (error) {
      if (ct.current) St(ZT(error));
    } finally {
      if (ct.current) oe(!1);
    }
  }
  if (z) return e(n, {
    children: "Loading marketplaces\u2026"
  });
  if (j.length === 0 && ce.available.length === 0 && ce.hosted.length === 0 && ce.browseOnly.length === 0) return r(s, {
    flexDirection: "column",
    children: [e(s, {
      marginBottom: 1,
      children: e(n, {
        bold: !0,
        children: "Manage marketplaces"
      })
    }), r(xF, {
      active: !0,
      flexDirection: "row",
      gap: 1,
      children: [r(n, {
        color: "suggestion",
        children: [r(n, {
          "aria-hidden": !0,
          children: [te.pointer, " "]
        }), "+"]
      }), e(n, {
        bold: !0,
        color: "suggestion",
        children: "Add Marketplace"
      })]
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: exitState_3.pending ? r(Q, {
          children: ["Press ", exitState_3.keyName, " again to go back"]
        }) : r(Se, {
          children: [e(gt, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "select"
          }), e(gt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "go back"
          })]
        })
      })
    })]
  });
  if (ht === "confirm-add-claudeai" && de) return r(ko, {
    onKeyDown: onKeyDown_4,
    children: [r(n, {
      bold: !0,
      children: ["Add marketplace ", Wn(de.name), "?"]
    }), de.displayName !== de.name && r(n, {
      dimColor: !0,
      children: [Wn(Fmr(de.name, de.displayName) ?? ""), " ", "on claude.ai"]
    }), r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [r(n, {
        dimColor: !0,
        children: ["Install its plugins with ", "<plugin>", "@", Wn(de.name)]
      }), r(n, {
        dimColor: !0,
        children: ["Hosted on claude.ai for", " ", de.scope === "org" ? "your organization" : de.scope === "account" ? "you (your uploads)" : "your account", ". Its plugins install from claude.ai."]
      }), He && e(s, {
        marginTop: 1,
        children: e(n, {
          color: "claude",
          children: "Adding marketplace\u2026"
        })
      }), ve && e(s, {
        marginTop: 1,
        children: e(ls, {
          error: Nd(ve)
        })
      }), !He && e(s, {
        marginTop: 1,
        children: r(n, {
          children: ["Press ", e(n, {
            bold: !0,
            children: "y"
          }), " to add or ", e(n, {
            bold: !0,
            children: "n"
          }), " to cancel"]
        })
      })]
    })]
  });
  if (ht === "confirm-remove" && le) {
    let se = `@${le.name}`,
      Re = _.filter(item => item.endsWith(se)),
      Le = new Map(Re.map(item => [item, item.slice(0, -se.length)])),
      je = [];
    for (let Je of le.installedPlugins) {
      let Ie = lk(Re, Je.source);
      if (Ie === void 0) je.push({
        id: Je.source,
        name: Je.name
      });else Le.set(Ie, Je.name);
    }
    let $t = [...[...Le].map(([id, name_4]) => ({
        id: id,
        name: name_4
      })), ...je],
      Pt = $t.length;
    return r(ko, {
      onKeyDown: onKeyDown_5,
      children: [r(n, {
        bold: !0,
        color: "warning",
        children: ["Remove marketplace", " ", e(n, {
          italic: !0,
          children: Wn(Bl(le))
        }), "?"]
      }), r(s, {
        flexDirection: "column",
        children: [Pt > 0 && e(s, {
          marginTop: 1,
          children: r(n, {
            color: "warning",
            children: ["This will also uninstall ", Pt, " ", O(Pt, "plugin"), " from this marketplace:"]
          })
        }), Pt > 0 && e(s, {
          flexDirection: "column",
          marginTop: 1,
          marginLeft: 2,
          children: $t.map(item => e(Ag, {
            children: e(n, {
              dimColor: !0,
              children: Wn(item.name)
            })
          }, item.id))
        }), e(s, {
          marginTop: 1,
          children: r(n, {
            children: ["Press ", e(n, {
              bold: !0,
              children: "y"
            }), " to confirm or ", e(n, {
              bold: !0,
              children: "n"
            }), " to cancel"]
          })
        })]
      })]
    });
  }
  if (ht === "details" && le) {
    let se = le.pendingUpdate || He;
    return r(s, {
      flexDirection: "column",
      children: [e(n, {
        bold: !0,
        children: Wn(Bl(le))
      }), e(n, {
        dimColor: !0,
        children: Wn(le.source)
      }), le.note !== void 0 && e(n, {
        color: "warning",
        children: Wn(le.note)
      }), e(s, {
        marginTop: 1,
        children: le.builtIn === "off" ? r(n, {
          children: ["Plugins listed by the ", Tr, ", installed at their listed commit. Turn it on to see them in Discover."]
        }) : r(n, {
          children: [le.pluginCount || 0, " available", " ", O(le.pluginCount || 0, "plugin"), le.allHiddenByPolicy ? r(n, {
            dimColor: !0,
            children: [" ", "\xB7 hidden by your organization's policy"]
          }) : null]
        })
      }), le.installedPlugins.length > 0 && r(s, {
        flexDirection: "column",
        marginTop: 1,
        children: [r(n, {
          bold: !0,
          children: ["Installed plugins (", le.installedPlugins.length, "):"]
        }), e(s, {
          flexDirection: "column",
          marginLeft: 1,
          children: le.installedPlugins.map(item => r(Ag, {
            children: [Wn(item.name), `
`, e(n, {
              dimColor: !0,
              children: Nd(item.manifest.description ?? "")
            })]
          }, item.name))
        })]
      }), se && r(s, {
        marginTop: 1,
        flexDirection: "column",
        children: [e(n, {
          color: "claude",
          children: "Updating marketplace\u2026"
        }), Et && e(n, {
          dimColor: !0,
          children: Wn(Et)
        })]
      }), !se && Dt && e(s, {
        marginTop: 1,
        children: e(n, {
          color: "claude",
          children: Wn(Dt)
        })
      }), !se && ve && e(s, {
        marginTop: 1,
        children: e(ls, {
          error: Nd(ve)
        })
      }), !se && e(s, {
        flexDirection: "column",
        marginTop: 1,
        children: e(Yo, {
          options: options_5,
          onSelect: onSelect_2,
          defaultFocusValue: defaultFocusValue_3,
          onFocus: onFocus_2
        })
      }), !se && !Cle() && le.autoUpdate && e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          children: "Auto-update enabled. Claude Code will automatically update this marketplace and its installed plugins."
        })
      }), le.builtIn === "on" && le.autoUpdateDeclaredOff && !se && !Cle() ? e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          children: `Auto-update is off: in extraKnownMarketplaces, the entry "${hn}" sets autoUpdate to false. Claude Code reads that entry only from ${JJt}.`
        })
      }) : null, e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          children: se ? e(Q, {
            children: "Please wait\u2026"
          }) : r(Se, {
            children: [e(gt, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "select"
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "go back"
            })]
          })
        })
      })]
    });
  }
  let {
    updateCount: updateCount_2,
    removeCount: removeCount_2
  } = Zt();
  return r(ko, {
    onKeyDown: onKeyDown_6,
    children: [e(s, {
      marginBottom: 1,
      children: e(n, {
        bold: !0,
        children: "Manage marketplaces"
      })
    }), r(xF, {
      active: at === 0,
      flexDirection: "row",
      gap: 1,
      marginBottom: 1,
      children: [r(n, {
        color: at === 0 ? "suggestion" : void 0,
        children: [r(n, {
          "aria-hidden": !0,
          children: [at === 0 ? te.pointer : " ", " "]
        }), "+"]
      }), e(n, {
        bold: !0,
        color: at === 0 ? "suggestion" : void 0,
        children: "Add Marketplace"
      })]
    }), r(s, {
      flexDirection: "column",
      children: [j.map((item, index) => {
        let active = index + 1 === at,
          je = [];
        if (item.pendingUpdate) je.push("UPDATE");
        if (item.pendingRemove) je.push("REMOVE");
        return r(xF, {
          active: active,
          flexDirection: "row",
          gap: 1,
          marginBottom: 1,
          children: [r(n, {
            color: active ? "suggestion" : void 0,
            children: [r(n, {
              "aria-hidden": !0,
              children: [active ? te.pointer : " ", " "]
            }), item.pendingRemove ? te.cross : item.builtIn === "off" ? te.radioOff : item.builtIn === "blocked" ? te.cross : te.bullet]
          }), r(s, {
            flexDirection: "column",
            flexGrow: 1,
            children: [r(s, {
              flexDirection: "row",
              gap: 1,
              children: [r(n, {
                bold: !0,
                strikethrough: item.pendingRemove,
                dimColor: item.pendingRemove,
                children: [item.name === "claude-plugins-official" && e(n, {
                  color: "claude",
                  children: "\u273B "
                }), Wn(Bl(item)), item.name === "claude-plugins-official" && e(n, {
                  color: "claude",
                  children: " \u273B"
                })]
              }), je.length > 0 && r(n, {
                color: "warning",
                children: ["[", je.join(", "), "]"]
              })]
            }), e(n, {
              dimColor: !0,
              children: Wn(item.source)
            }), item.note !== void 0 && e(n, {
              color: "warning",
              children: Wn(item.note)
            }), r(n, {
              dimColor: !0,
              children: [item.pluginCount !== void 0 && r(Q, {
                children: [item.pluginCount, " available"]
              }), item.allHiddenByPolicy ? e(Q, {
                children: " \xB7 hidden by your organization's policy"
              }) : null, item.installedPlugins.length > 0 && r(Q, {
                children: [" \u2022 ", item.installedPlugins.length, " installed"]
              }), item.lastUpdated && r(Q, {
                children: [" ", "\u2022 Updated", " ", new Date(item.lastUpdated).toLocaleDateString()]
              })]
            })]
          })]
        }, item.name);
      }), ce.available.map((item, index) => {
        let active_2 = j.length + index + 1 === at;
        return r(xF, {
          active: active_2,
          flexDirection: "row",
          gap: 1,
          marginBottom: 1,
          children: [r(n, {
            color: active_2 ? "suggestion" : void 0,
            children: [r(n, {
              "aria-hidden": !0,
              children: [active_2 ? te.pointer : " ", " "]
            }), "+"]
          }), r(s, {
            flexDirection: "column",
            flexGrow: 1,
            children: [e(n, {
              bold: !0,
              children: Wn($A(item.name))
            }), r(n, {
              dimColor: !0,
              children: [Wn(lHe(item.source)), ` \xB7 available from claude.ai${item.scope ? ` (${item.scope})` : ""}`, !Mt() && " \xB7 Enter to add"]
            })]
          })]
        }, `claudeai:${item.name}`);
      }), ce.hosted.map((item, index) => {
        let active_3 = j.length + ce.available.length + index + 1 === at;
        return r(xF, {
          active: active_3,
          flexDirection: "row",
          gap: 1,
          marginBottom: 1,
          children: [r(n, {
            color: active_3 ? "suggestion" : void 0,
            children: [r(n, {
              "aria-hidden": !0,
              children: [active_3 ? te.pointer : " ", " "]
            }), "+"]
          }), r(s, {
            flexDirection: "column",
            flexGrow: 1,
            children: [e(n, {
              bold: !0,
              children: Wn(item.name)
            }), r(n, {
              dimColor: !0,
              children: [`hosted on claude.ai (${DAe(item.scope)})`, item.displayName !== item.name && ` \xB7 ${Wn(Fmr(item.name, item.displayName) ?? "")}`, !Mt() && " \xB7 Enter to add"]
            })]
          })]
        }, `claudeai-hosted:${item.marketplaceId}`);
      }), ce.browseOnly.map(item => e(s, {
        marginBottom: 1,
        paddingLeft: 4,
        children: r(n, {
          dimColor: !0,
          children: [Wn(Git(item)), " ", "\xB7 browse on claude.ai"]
        })
      }, `claudeai-browse:${item.name}`))]
    }), Mt() && r(s, {
      marginTop: 1,
      flexDirection: "column",
      children: [r(n, {
        children: [e(n, {
          bold: !0,
          children: "Pending changes:"
        }), " ", e(n, {
          dimColor: !0,
          children: e(gt, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "apply"
          })
        })]
      }), updateCount_2 > 0 && r(Ag, {
        children: ["Update ", updateCount_2, " ", O(updateCount_2, "marketplace")]
      }), removeCount_2 > 0 && r(Ag, {
        color: "warning",
        children: ["Remove ", removeCount_2, " ", O(removeCount_2, "marketplace")]
      })]
    }), He && e(s, {
      marginTop: 1,
      children: e(n, {
        color: "claude",
        children: "Processing changes\u2026"
      })
    }), ve && e(s, {
      marginTop: 1,
      children: e(ls, {
        error: Nd(ve)
      })
    }), e(pd, {
      exitState: exitState_3,
      hasPendingActions: Mt(),
      isOnInertRow: j[at - 1]?.builtIn === "blocked",
      builtInRow: j[at - 1]?.builtIn
    })]
  });
}
function pd(a) {
  let x = w(23),
    {
      exitState: exitState_4,
      hasPendingActions: hasPendingActions,
      isOnInertRow: isOnInertRow,
      builtInRow: builtInRow
    } = a;
  if (exitState_4.pending) {
    let T;
    if (x[0] !== exitState_4.keyName) T = e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        italic: !0,
        children: ["Press ", exitState_4.keyName, " again to go back"]
      })
    }), x[0] = exitState_4.keyName, x[1] = T;else T = x[1];
    return T;
  }
  let T;
  if (x[2] !== hasPendingActions) T = hasPendingActions && e(gt, {
    action: "select:accept",
    context: "Select",
    fallback: "Enter",
    description: "apply changes"
  }), x[2] = hasPendingActions, x[3] = T;else T = x[3];
  let K;
  if (x[4] !== hasPendingActions || x[5] !== isOnInertRow) K = !hasPendingActions && !isOnInertRow && e(gt, {
    action: "select:accept",
    context: "Select",
    fallback: "Enter",
    description: "select"
  }), x[4] = hasPendingActions, x[5] = isOnInertRow, x[6] = K;else K = x[6];
  let N;
  if (x[7] !== builtInRow || x[8] !== hasPendingActions || x[9] !== isOnInertRow) N = !hasPendingActions && !isOnInertRow && builtInRow !== "off" && e(q, {
    chord: "u",
    action: "update"
  }), x[7] = builtInRow, x[8] = hasPendingActions, x[9] = isOnInertRow, x[10] = N;else N = x[10];
  let D;
  if (x[11] !== builtInRow || x[12] !== hasPendingActions || x[13] !== isOnInertRow) D = !hasPendingActions && !isOnInertRow && e(q, {
    chord: "d",
    action: builtInRow === "on" ? "turn off" : builtInRow === "off" ? "turn on" : "remove"
  }), x[11] = builtInRow, x[12] = hasPendingActions, x[13] = isOnInertRow, x[14] = D;else D = x[14];
  const description_2 = hasPendingActions ? "cancel" : "go back";
  let j;
  if (x[15] !== description_2) j = e(gt, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: description_2
  }), x[15] = description_2, x[16] = j;else j = x[16];
  let U;
  if (x[17] !== T || x[18] !== K || x[19] !== N || x[20] !== D || x[21] !== j) U = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      italic: !0,
      children: r(Se, {
        children: [T, K, N, D, j]
      })
    })
  }), x[17] = T, x[18] = K, x[19] = N, x[20] = D, x[21] = j, x[22] = U;else U = x[22];
  return U;
}
function Bl(a) {
  return a.builtIn !== void 0 ? Tr : $A(a.name);
}
async function sd(a, h) {
  {
    let k = await ix();
    if (k === "unavailable") return a;
    let v = h[hn];
    if (k === "blocked") return v && !Nf(v.source) ? a : [{
      name: hn,
      source: "Built in \xB7 blocked by your organization",
      installedPlugins: [],
      builtIn: "blocked"
    }, ...a];
    if (v) {
      if (!Nf(v.source)) return a;
      let C = Nk().catalogEntryNames?.size ?? 0;
      return a.map(item => item.name === hn ? {
        ...item,
        builtIn: "on",
        ...(item.pluginCount === 0 && C > 0 && {
          allHiddenByPolicy: !0
        })
      } : item);
    }
    return k === "off" ? [{
      name: hn,
      source: "Built in \xB7 turned off",
      installedPlugins: [],
      builtIn: "off"
    }, ...a] : a;
  }
  return a;
}
function dd(a, h, k, v) {
  let C = rH();
  return a.map(({
    name: name_5,
    config: config_3,
    data: data_4
  }) => {
    let installedPlugins = k.filter(item => item.source.endsWith(`@${name_5}`)),
      source_3 = NPt(config_3.source),
      note;
    if (config_3.source.source === "claudeai") {
      source_3 = M0n(v[name_5]);
      let _ = data_4 === null ? 0 : F(installedPlugins, ee => {
        let ce = data_4.plugins.find(item => item.name === ee.name);
        return ce !== void 0 && typeof ce.source === "object" && ce.source.source === "claudeai" && ce.source.version !== "" && jy(ee.path).replace(/\.zip$/, "") !== ce.source.version;
      });
      note = h.find(item => item.name === name_5)?.error ?? (_ > 0 ? `${_} plugin ${O(_, "update")} available \xB7 update the marketplace to apply` : void 0);
    }
    let U = Rxe(name_5, C);
    return {
      name: name_5,
      source: source_3,
      ...(note !== void 0 && {
        note: note
      }),
      lastUpdated: config_3.lastUpdated,
      pluginCount: data_4?.plugins.length,
      installedPlugins: installedPlugins,
      pendingUpdate: !1,
      pendingRemove: !1,
      autoUpdate: y0e(name_5, config_3, U),
      ...(U === !1 && {
        autoUpdateDeclaredOff: !0
      })
    };
  }).sort((itemA, itemB) => {
    if (itemA.name === yze) return -1;
    if (itemB.name === yze) return 1;
    return itemA.name.localeCompare(itemB.name);
  });
}
B();
B();
var Hy = new Set(["good", "warn", "poor"]);
function Gy(a) {
  return typeof a === "string" && Hy.has(a);
}
function Ky(a, h) {
  return a.skillHealthMap ??= Yy(h), a.skillHealthMap;
}
async function Yy(credentials_6) {
  if (!E("tengu_skills_dashboard_enabled", !1)) return null;
  try {
    let h = await Gt.get("/api/claude_code/skills", {
      auth: "async",
      timeout: 5000,
      validateStatus: () => !0,
      credentials: credentials_6
    });
    if (!h.ok) return t(`Skill health fetch skipped: ${h.reason}`), null;
    if (h.status >= 400) return t(`Skill health fetch skipped: status ${h.status}`), null;
    let k = h.data?.skills;
    if (!Array.isArray(k)) return null;
    let v = new Map();
    for (let C of k) if (C.skill_name && Gy(C.health)) v.set(C.skill_name, C.health);
    return v;
  } catch (error) {
    return t(`Skill health fetch skipped: ${error}`), null;
  }
}
function md() {
  let {
      credentials: credentials_7
    } = Oe(),
    [h, k] = y(null);
  return P(() => {
    let v = !1;
    return Ky(Fs(), credentials_7).then(C => {
      if (!v && C) k(C);
    }), () => {
      v = !0;
    };
  }, [credentials_7]), h;
}
import { readFile as qy } from "fs/promises";
import { join as Wy, resolve as gd, sep as zy } from "path";
async function yd(a, h) {
  let k = Wy(h.path, "..", ".claude-plugin", "marketplace.json");
  if (W() && a !== void 0 && (await Qy(a, h))) {
    let v = await cNt(a, "workspace", k);
    if ("absent" in v) throw Qon(k);
    return v.text;
  }
  return qy(k, "utf-8");
}
async function Qy(a, h) {
  let k = jus();
  if (fd(ud(), h.path) || k !== null && fd(k, h.path)) return !1;
  let v = nS(h.source);
  if (v !== void 0) return v === Tc;
  let C = Oi(h.source);
  if (C === void 0) return !1;
  let x = (await nd(a))[C];
  return x !== void 0 && Lf(x.source) && Iy(x.installLocation) === void 0;
}
function fd(a, h) {
  let k = gd(a),
    v = gd(h);
  return v === k || v.startsWith(k + zy);
}
B();
function hd(a, h) {
  let [k, v] = y(a);
  return FVe(() => {
    let C = a();
    v(x => h(x, C) ? x : C);
  }), k;
}
function Io(a) {
  return Wn(Xy(a));
}
function Xy(a) {
  switch (a.type) {
    case "path-not-found":
      if (a.plugin === void 0) return a.errno ? `Plugin path could not be checked: ${Xs(a.path)} (${Ge(a.errno)})` : `Plugin path not found: ${Xs(a.path)}`;
      return a.errno ? `${Ge(a.component)} path could not be checked: ${Xs(a.path)} (${Ge(a.errno)})` : `${Ge(a.component)} path not found: ${Xs(a.path)}`;
    case "path-traversal":
      return `${Ge(a.component)} path escapes plugin directory: ${Xs(a.path)}${a.reason ? ` \u2014 ${Xs(a.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git ${a.authType.toUpperCase()} authentication failed for ${Xs(a.gitUrl)}`;
    case "git-timeout":
      return `Git ${Ge(a.operation)} timed out for ${Xs(a.gitUrl)}`;
    case "network-error":
      return `Network error accessing ${Xs(a.url)}${a.details ? `: ${Ge(a.details)}` : ""}`;
    case "manifest-parse-error":
      return `Failed to parse manifest at ${Xs(a.manifestPath)}: ${Ge(a.parseError, 500)}`;
    case "manifest-validation-error":
      return `Invalid manifest at ${Xs(a.manifestPath)}: ${Ge(a.validationErrors.join(", "), 1000)}`;
    case "plugin-not-found":
      if (a.removedFromDirectory) return IRo(a.pluginId, a.directoryRenamedTo, a.directoryIdentityChanged === !0, a.directoryNotInstallableReason, a.registryReadFailed === !0);
      return `Plugin "${Ge(a.pluginId)}" not found in marketplace "${Ge(a.marketplace)}"`;
    case "marketplace-not-found":
      return a.registryReadFailed ? `Marketplace "${Ge(a.marketplace)}": the marketplace registry could not be read` : a.registrationHidden ? a.registrationHiddenReason === void 0 ? `Marketplace "${Ge(a.marketplace)}" is added but ignored (see the debug log)` : `Marketplace "${Ge(a.marketplace)}" is added but ignored. ${Ga(f1t(a.registrationHiddenReason))}` : `Marketplace "${Ge(a.marketplace)}" not found`;
    case "marketplace-load-failed":
      if (a.directoryBlockedBy !== void 0 || SNt(a)) return _w(a);
      if (a.nameRefused) return bNt(a.marketplace);
      return `Failed to load marketplace "${Ge(a.marketplace)}": ${Ge(a.reason)}`;
    case "mcp-config-invalid":
      return `Invalid MCP server config for "${Ge(a.serverName)}": ${Ge(a.validationError)}`;
    case "hook-load-failed":
      return `Failed to load hooks from ${Xs(a.hookPath)}: ${Ge(a.reason)}`;
    case "component-load-failed":
      return `Failed to load ${Ge(a.component)} from ${Xs(a.path)}: ${Ge(a.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${Xs(a.url)}: ${Ge(a.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${Xs(a.mcpbPath)}: ${Ge(a.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${Xs(a.mcpbPath)}: ${Ge(a.validationError)}`;
    case "marketplace-blocked-by-policy":
      {
        let k = NPr(a);
        if (k !== null) return vNt(void 0, k);
        return a.blockedByBlocklist ? `Marketplace "${Ge(a.marketplace)}" is blocked by enterprise policy` : `Marketplace "${Ge(a.marketplace)}" is not in the allowed marketplace list`;
      }
    case "dependency-unsatisfied":
      return a.reason === "not-enabled" ? `Dependency "${Ge(a.dependency)}" is disabled` : `Dependency "${Ge(a.dependency)}" is not installed${a.sameNameSyncedPlugin === void 0 ? "" : `; ${DRo(a.sameNameSyncedPlugin)}`}`;
    case "dependency-version-unsatisfied":
      return `Requires "${Ge(a.dependency)}" ${Ge(a.required)}, installed ${Ge(a.installed ?? "version unknown")}`;
    case "lsp-config-invalid":
      return `Invalid LSP server config for "${Ge(a.serverName)}": ${Ge(a.validationError)}`;
    case "lsp-server-start-failed":
      return `LSP server "${Ge(a.serverName)}" failed to start: ${Ge(a.reason)}`;
    case "lsp-server-crashed":
      return a.signal ? `LSP server "${Ge(a.serverName)}" crashed with signal ${a.signal}` : `LSP server "${Ge(a.serverName)}" crashed with exit code ${a.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `LSP server "${Ge(a.serverName)}" timed out on ${Ge(a.method)} after ${a.timeoutMs}ms`;
    case "lsp-request-failed":
      return `LSP server "${Ge(a.serverName)}" ${Ge(a.method)} failed: ${Ge(a.error)}`;
    case "plugin-cache-miss":
      if (a.registryReadFailed === !0) return `Plugin "${Ge(a.plugin)}" is not loaded: installed_plugins.json could not be read, so its install could not be checked`;
      return `Plugin "${Ge(a.plugin)}" not cached at ${Xs(a.installPath)}`;
    case "plugin-not-installed":
      if (a.installedListHeldNote !== void 0) return `Plugin "${Ge(a.plugin)}" is enabled in project settings, but whether it is installed could not be checked`;
      return `Plugin "${Ge(a.plugin)}" is enabled in project settings but isn't installed here`;
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return a.message;
    case "autoupdate-blocked-by-pinner":
      {
        let k = a.heldAt ? ` at ${Xs(a.heldAt)}` : "",
          v = a.disabledPinners.length > 0 ? ` (${Ge(a.disabledPinners.join(", "))} ${a.disabledPinners.length === 1 ? "is" : "are"} disabled)` : "";
        return `Autoupdate held${k} \u2014 version constraint from ${Ge(a.blockedBy.join(", "))}${v}`;
      }
    case "generic-error":
      return k5(a.error);
  }
  return _w(a);
}
function Do(a) {
  let h = Jy(a);
  return h === null ? null : Wn(h);
}
function Jy(a) {
  switch (a.type) {
    case "path-not-found":
      return a.errno ? `Claude Code could not check this path (${Ge(a.errno)}): look for a symlink pointing at itself, a broken network mount, or a permissions problem, then run /reload-plugins` : a.plugin !== void 0 ? "Check that the path in your manifest or marketplace config is correct" : nS(a.source) === Pi ? "claude.ai syncs this plugin and its directory is no longer on disk; restart Claude Code to refresh your synced plugins" : "Check the plugin path this session was started with";
    case "path-traversal":
      return a.reason ? "Files a plugin declares must resolve to a location inside the plugin (or, for a local marketplace, inside the marketplace). If a symlink points elsewhere, replace it with a copy of the file or point Claude Code at the directory that holds the real files; if the path could not be resolved, check that every link in it exists and is readable" : 'Paths in plugin.json must not use ".." to reference files outside the plugin directory';
    case "git-auth-failed":
      return a.authType === "ssh" ? "Configure SSH keys or use HTTPS URL instead" : "Configure credentials or use SSH URL instead";
    case "git-timeout":
    case "network-error":
      return "Check your internet connection and try again";
    case "manifest-parse-error":
      return "Check manifest file syntax in the plugin directory";
    case "manifest-validation-error":
      return "Check manifest file follows the required schema";
    case "plugin-not-found":
      if (a.removedFromDirectory) {
        if (a.registryReadFailed === !0) return `Run /reload-plugins. If it is still not loaded, fix or restore installed_plugins.json in the plugins directory, then run it again${a.installedListHeldNote === void 0 ? "" : `. ${a.installedListHeldNote}`}`;
        if (a.directoryRenamedTo?.length) return "Uninstall it, then install it under its new name from /plugin \u2192 Discover";
        if (a.directoryNotInstallableReason !== void 0) return "It loads again once the listing can be installed. Uninstall it if you no longer need it";
        return a.directoryIdentityChanged ? "Uninstall it, then install the new listing if you want it" : "Uninstall it. If you still need it, install it from another marketplace you trust";
      }
      return `Plugin may not exist in marketplace "${Ge(a.marketplace)}"`;
    case "marketplace-not-found":
      {
        let k = psn(a);
        if (k !== void 0) return k;
        return a.registryReadFailed ? "Check known_marketplaces.json in the plugins directory, then run /reload-plugins" : a.registrationHidden ? a.registrationHiddenReason === void 0 ? "Remove and re-add the marketplace" : Ga(P1e[a.registrationHidden]) : a.availableMarketplaces.length > 0 ? `Available marketplaces: ${Ge(a.availableMarketplaces.join(", "))}` : "Add the marketplace first using /plugin marketplace add";
      }
    case "mcp-config-invalid":
      return "Check MCP server configuration in .mcp.json or manifest";
    case "hook-load-failed":
      return "Check the plugin's hooks configuration and that its hooks file is readable";
    case "component-load-failed":
      return `Check ${Ge(a.component)} directory structure and file permissions`;
    case "mcpb-download-failed":
      return "Check your internet connection and URL accessibility";
    case "mcpb-extract-failed":
      return "Verify the MCPB file is valid and not corrupted";
    case "mcpb-invalid-manifest":
      return "Contact the plugin author about the invalid manifest";
    case "marketplace-blocked-by-policy":
      if (NPr(a) !== null) return "Uninstall the plugins installed from it (/plugin \u2192 Installed, or `claude plugin uninstall <plugin>`), or install them from a marketplace your organization allows";
      if (a.blockedByBlocklist) return "This marketplace source is explicitly blocked by your administrator";
      return a.allowedSources.length > 0 ? `Allowed sources: ${Ge(a.allowedSources.join(", "))}` : "Contact your administrator to configure allowed marketplace sources";
    case "dependency-unsatisfied":
      if (a.reason === "not-enabled") return `Enable "${Ge(a.dependency)}" or ${Yr(a)}`;
      return a.sameNameSyncedPlugin !== void 0 ? `Install "${Ge(a.dependency)}", which then loads instead of "${Ge(a.sameNameSyncedPlugin)}", or ${Yr(a)}` : `Install "${Ge(a.dependency)}" or ${Yr(a)}`;
    case "dependency-version-unsatisfied":
      return `Update "${Ge(a.dependency)}" to satisfy ${Ge(a.required)}, or ${Yr(a)}`;
    case "lsp-config-invalid":
      return "Check LSP server configuration in the plugin manifest";
    case "lsp-server-start-failed":
    case "lsp-server-crashed":
    case "lsp-request-timeout":
    case "lsp-request-failed":
      return "Check LSP server logs with --debug for details";
    case "plugin-cache-miss":
      {
        let k = a.installedListHeldNote === void 0 ? "" : `. ${a.installedListHeldNote}`;
        if (a.registryReadFailed === !0) return `Fix or restore installed_plugins.json in the plugins directory, then run /reload-plugins${k}`;
        return `Run /plugin to refresh the plugin cache${k}`;
      }
    case "plugin-not-installed":
      {
        if (a.installedListHeldNote !== void 0) return a.installedListHeldNote;
        let k = ll("plugin install", a.source, "--scope project");
        return k ? `Run \`${k}\` to install it for this project` : "Install it at project scope to fix this";
      }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return null;
    case "autoupdate-blocked-by-pinner":
      {
        let k = a.disabledPinners.length > 0 ? a.disabledPinners[0] : a.blockedBy[0];
        return k ? `Update or uninstall "${Ge(k)}" to unblock${a.disabledPinners.length > 0 ? " (it is currently disabled)" : ""}` : null;
      }
    case "marketplace-load-failed":
      if (a.directoryBlockedBy !== void 0) return "Uninstall it (/plugin \u2192 Installed, or `claude plugin uninstall <plugin>`), or install it from a marketplace your organization allows";
      if (SNt(a)) return wNt;
      if (a.nameRefused) return oVn(a.marketplace, {
        declaredInSettings: a.nameRefusedDeclaredInSettings === !0
      });
      return a.reason === "cache-miss" ? a.catalogReadFailed ? "The cached marketplace catalog could not be read; run /reload-plugins to refresh it" : "Run /reload-plugins to refresh the marketplace cache" : null;
    case "generic-error":
      return null;
  }
  let h = a;
  return null;
}
function Yr(a) {
  return `${Sp(Cn(a.source).marketplace) ? "disable" : "uninstall"} "${Ge(a.plugin)}"`;
}
B();
function rh(ce) {
  return ce.plugins.commands;
}
function ah(fe) {
  return fe.mcp.commands;
}
function lh(de) {
  return de.mainLoopModel;
}
function sh(pe) {
  return r(s, {
    flexDirection: "row",
    children: [e(s, {
      width: 32,
      children: r(n, {
        dimColor: !0,
        children: ["/", pe.name]
      })
    }), r(n, {
      dimColor: !0,
      children: ["~", pe.approxTokens, " tok/turn"]
    })]
  }, pe.name);
}
function ch(D) {
  return D.count > 0;
}
function uh(Y) {
  return r(s, {
    flexDirection: "row",
    children: [e(s, {
      width: 32,
      children: r(n, {
        dimColor: !0,
        children: ["/", Y.name]
      })
    }), r(n, {
      dimColor: !0,
      children: [Y.count, " ", O(Y.count, "use"), Y.lastUsedAt !== null ? ` \xB7 last ${kd(Y.lastUsedAt)}` : ""]
    })]
  }, Y.name);
}
function Qr(a, h) {
  let k = ue().skillUsage ?? {},
    skills = [];
  for (let C of h) {
    if (C.type !== "prompt" || C.pluginInfo?.pluginManifest.name !== a) continue;
    let x = no(k, C.name) ?? (C.unqualifiedName != null ? no(k, C.unqualifiedName) : void 0);
    skills.push({
      name: C.name,
      count: x?.usageCount ?? 0,
      lastUsedAt: x?.lastUsedAt ?? null
    });
  }
  return skills.sort((itemA, itemB) => itemB.count - itemA.count), {
    skills: skills,
    totalCount: skills.reduce((acc, item) => acc + item.count, 0),
    skillCount: skills.length
  };
}
function kd(a) {
  let h = Math.max(0, Math.floor((Date.now() - a) / 86400000));
  if (h === 0) return "today";
  if (h === 1) return "yesterday";
  return `${h}d ago`;
}
function jl(a) {
  let x = w(20),
    {
      plugin: plugin_10
    } = a,
    commands_3 = V(rh),
    v = V(ah),
    C = V(lh),
    T;
  if (x[0] !== v || x[1] !== C || x[2] !== plugin_10.manifest.name || x[3] !== commands_3) {
    const byPlugin = Ywt([...commands_3, ...v], yh(C ?? void 0)).byPlugin;
    let N;
    if (x[5] !== plugin_10.manifest.name) N = D => D.pluginName === plugin_10.manifest.name, x[5] = plugin_10.manifest.name, x[6] = N;else N = x[6];
    T = byPlugin.find(N);
    x[0] = v, x[1] = C, x[2] = plugin_10.manifest.name, x[3] = commands_3, x[4] = T;
  } else T = x[4];
  let Y = T,
    K;
  if (x[7] !== plugin_10.manifest.name) K = r(n, {
    bold: !0,
    children: [plugin_10.manifest.name, " \xB7 Usage"]
  }), x[7] = plugin_10.manifest.name, x[8] = K;else K = x[8];
  let N, j;
  if (x[9] === S) N = e(n, {
    bold: !0,
    children: "Skill-listing footprint"
  }), j = e(n, {
    dimColor: !0,
    wrap: "wrap",
    children: "What this plugin's skill descriptions add to the system prompt (cached input after the first turn). Agents and MCP tools not yet counted."
  }), x[9] = N, x[10] = j;else N = x[9], j = x[10];
  let U;
  if (x[11] !== Y) U = r(s, {
    flexDirection: "column",
    children: [N, j, Y && Y.skills.length > 0 ? r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [Y.skills.map(sh), r(s, {
        flexDirection: "row",
        marginTop: 1,
        children: [e(s, {
          width: 32,
          children: e(n, {
            children: "Total"
          })
        }), r(n, {
          children: [Y.skillCount, " ", O(Y.skillCount, "skill"), " \xB7 ~", Y.approxTokens, " tok/turn"]
        })]
      })]
    }) : e(n, {
      dimColor: !0,
      children: "No model-invocable skills loaded for this plugin"
    })]
  }), x[11] = Y, x[12] = U;else U = x[12];
  let _;
  if (x[13] !== plugin_10 || x[14] !== commands_3) _ = e(Ul, {
    plugin: plugin_10,
    commands: commands_3
  }), x[13] = plugin_10, x[14] = commands_3, x[15] = _;else _ = x[15];
  let ee;
  if (x[16] !== K || x[17] !== U || x[18] !== _) ee = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [K, U, _]
  }), x[16] = K, x[17] = U, x[18] = _, x[19] = ee;else ee = x[19];
  return ee;
}
function Ul(a) {
  let v = w(9),
    {
      plugin: plugin_11,
      commands: commands_4
    } = a,
    C;
  if (v[0] !== commands_4 || v[1] !== plugin_11.manifest.name) C = Qr(plugin_11.manifest.name, commands_4), v[0] = commands_4, v[1] = plugin_11.manifest.name, v[2] = C;else C = v[2];
  let x = C,
    T,
    K;
  if (v[3] === S) T = e(n, {
    bold: !0,
    children: "Activity"
  }), K = e(n, {
    dimColor: !0,
    wrap: "wrap",
    children: "Skill invocations on this machine. See /usage for cost attribution."
  }), v[3] = T, v[4] = K;else T = v[3], K = v[4];
  let N;
  if (v[5] !== x.skillCount || v[6] !== x.skills || v[7] !== x.totalCount) N = r(s, {
    flexDirection: "column",
    children: [T, K, x.totalCount === 0 ? e(n, {
      dimColor: !0,
      children: "No activity yet"
    }) : r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [x.skills.filter(ch).map(uh), r(s, {
        flexDirection: "row",
        marginTop: 1,
        children: [e(s, {
          width: 32,
          children: e(n, {
            children: "Total"
          })
        }), r(n, {
          children: [x.totalCount, " ", O(x.totalCount, "use"), " across", " ", x.skillCount, " ", O(x.skillCount, "skill")]
        })]
      })]
    })]
  }), v[5] = x.skillCount, v[6] = x.skills, v[7] = x.totalCount, v[8] = N;else N = v[8];
  return N;
}
var Cd = {
    good: "success",
    warn: "warning",
    poor: "error"
  },
  dh = {
    on: {
      glyph: te.tick,
      label: "on",
      tone: "success"
    },
    "name-only": {
      glyph: te.bullet,
      label: "name-only"
    },
    "user-invocable-only": {
      glyph: te.circle,
      label: "user-only",
      tone: "warning"
    },
    off: {
      glyph: te.circle,
      label: "off",
      tone: "inactive"
    }
  },
  width = 6,
  ph = 44,
  mh = 12,
  gh = 20,
  fh = 16;
function Ed({
  items: items,
  healthByPluginName: healthByPluginName,
  columns: columns_2
}) {
  let v = 0;
  for (let C of items) {
    let x = C.type === "plugin" ? Wm(C) : C.name,
      T = C.type === "mcp" && C.indented ? 2 : 0,
      K = C.type === "plugin" && healthByPluginName?.has(C.name) ? 2 : 0;
    v = Math.max(v, ie(x) + T + K);
  }
  return Math.min(v, ph, Math.max(mh, columns_2 - gh - fh));
}
function ql(a) {
  let T = w(16),
    {
      item: item_2,
      isSelected: k,
      health: health,
      nameWidth: C,
      statusHoisted: statusHoisted
    } = a,
    K;
  if (T[0] !== health || T[1] !== k || T[2] !== item_2 || T[3] !== C || T[4] !== statusHoisted) {
    let N = Td(item_2);
    let color_2 = k ? "suggestion" : void 0;
    let children_25 = item_2.type === "mcp" && item_2.scope === "claudeai" && N.name.startsWith(H0e) ? H0e : "";
    let j = !N.statusIsDefault && (!statusHoisted || k);
    const U = e(s, {
      flexShrink: 0,
      children: e(n, {
        color: N.tone,
        "aria-label": j ? void 0 : N.statusLabel,
        children: N.glyph
      })
    });
    let _;
    if (T[6] !== children_25 || T[7] !== k || T[8] !== color_2) _ = children_25 && e(n, {
      color: color_2,
      dimColor: !k,
      children: children_25
    }), T[6] = children_25, T[7] = k, T[8] = color_2, T[9] = _;else _ = T[9];
    const ee = e(s, {
      flexShrink: 1,
      children: r(n, {
        wrap: "truncate-end",
        children: [N.isChild && e(n, {
          dimColor: !k,
          children: "\u2514 "
        }), _, e(n, {
          color: color_2,
          children: N.name.slice(children_25.length)
        })]
      })
    });
    let ce;
    if (T[10] !== health) ce = health && e(s, {
      flexShrink: 0,
      children: r(n, {
        color: Cd[health],
        children: [" ", te.bullet]
      })
    }), T[10] = health, T[11] = ce;else ce = T[11];
    let fe;
    if (T[12] !== C || T[13] !== ee || T[14] !== ce) fe = r(s, {
      width: C,
      flexShrink: 0,
      children: [ee, ce]
    }), T[12] = C, T[13] = ee, T[14] = ce, T[15] = fe;else fe = T[15];
    K = r(kR, {
      isFocused: k,
      styled: !1,
      children: [U, fe, e(s, {
        width: width,
        flexShrink: 0,
        marginLeft: 1,
        children: e(n, {
          dimColor: !0,
          children: N.typeLabel
        })
      }), (j || N.details.length > 0) && e(s, {
        marginLeft: 1,
        flexShrink: 1,
        children: r(n, {
          wrap: "truncate-end",
          children: [j && (N.statusHint ?? N.statusLabel), N.details.map((item, index) => r(n, {
            dimColor: !k && !item.tone,
            color: item.tone,
            children: [index > 0 || j ? " \xB7 " : "", item.text]
          }, index))]
        })
      })]
    });
    T[0] = health, T[1] = k, T[2] = item_2, T[3] = C, T[4] = statusHoisted, T[5] = K;
  } else K = T[5];
  return K;
}
function Zr() {
  let a = w(1),
    h;
  if (a[0] === S) h = e(gt, {
    action: "select:accept",
    context: "Select",
    fallback: "Enter",
    description: "auth"
  }), a[0] = h;else h = a[0];
  return h;
}
function Td(a) {
  switch (a.type) {
    case "plugin":
      {
        let details = [{
          text: $A(a.marketplace)
        }];
        if (a$(a.id, a.plugin.installationPreference)) details.push({
          text: "required by your org"
        });
        if (a.activity && a.activity.skillCount > 0) {
          if (details.push({
            text: `${a.activity.skillCount} ${O(a.activity.skillCount, "skill")}`
          }), a.activity.totalCount > 0) details.push({
            text: `${a.activity.totalCount} ${O(a.activity.totalCount, "use")}`
          });
        }
        if (a.unusedDays !== void 0) details.push({
          text: `not used in ${a.unusedDays} ${O(a.unusedDays, "day")}`
        });
        let k = {
          name: Wm(a),
          isChild: !1,
          typeLabel: "Plugin",
          details: details
        };
        if (a.pendingToggle) return {
          ...k,
          glyph: te.arrowRight,
          tone: "suggestion",
          statusLabel: a.pendingToggle === "will-enable" ? "will enable" : "will disable",
          statusIsDefault: !1
        };
        if (a.errorCount > 0) return {
          ...k,
          glyph: te.cross,
          tone: "error",
          statusLabel: `${a.errorCount} ${O(a.errorCount, "error")}`,
          statusIsDefault: !1
        };
        if (!a.isEnabled) return {
          ...k,
          glyph: te.radioOff,
          tone: "inactive",
          statusLabel: "disabled",
          statusIsDefault: !1
        };
        return {
          ...k,
          glyph: te.tick,
          tone: "success",
          statusLabel: "enabled",
          statusIsDefault: !0
        };
      }
    case "flagged-plugin":
      return {
        name: a.name,
        isChild: !1,
        typeLabel: "Plugin",
        glyph: te.warning,
        tone: "warning",
        statusLabel: "removed",
        statusIsDefault: !1,
        details: [{
          text: $A(a.marketplace)
        }]
      };
    case "failed-plugin":
      return {
        name: a.name,
        isChild: !1,
        typeLabel: "Plugin",
        glyph: te.cross,
        tone: "error",
        statusLabel: "failed to load",
        statusIsDefault: !1,
        details: [{
          text: `${a.errorCount} ${O(a.errorCount, "error")}`
        }, {
          text: $A(a.marketplace)
        }]
      };
    case "skill":
      {
        let h = dh[a.override];
        return {
          name: a.name,
          isChild: !1,
          typeLabel: "Skill",
          glyph: h.glyph,
          tone: h.tone,
          statusLabel: `${a.lockSource ? "\uD83D\uDD12 " : ""}${h.label}`,
          statusIsDefault: a.override === "on" && !a.lockSource,
          details: [{
            text: a.source
          }, {
            text: `~${a.tokenEstimate} tok`
          }, a.usage ? {
            text: `${a.usage.count}\xD7 ${a.usage.daysSinceUse === 0 ? "today" : `${a.usage.daysSinceUse}d`}`
          } : {
            text: "never used",
            tone: "warning"
          }]
        };
      }
    case "mcp":
      {
        let config_4 = a.client.config,
          details_2 = [];
        if (config_4?.type === "claudeai-proxy" && config_4.scope === "claudeai" && config_4.enterpriseManaged === !0) details_2.push({
          text: "managed"
        });
        if (a.liftedFrom) details_2.push({
          text: `from ${Wm(a.liftedFrom)}`
        });
        let v = {
          name: a.name,
          isChild: a.indented === !0,
          typeLabel: "MCP",
          details: details_2,
          statusIsDefault: !1
        };
        if (a.status === "cached" && a.client.type === "cached") {
          let C = Nzt(a.client.cacheSavedAt);
          return {
            ...v,
            glyph: C.glyph,
            tone: C.tone,
            statusLabel: C.statusText
          };
        }
        switch (a.status) {
          case "connected":
            return {
              ...v,
              glyph: te.tick,
              tone: "success",
              statusLabel: "connected",
              statusIsDefault: !0
            };
          case "disabled":
            return {
              ...v,
              glyph: te.radioOff,
              tone: "inactive",
              statusLabel: "disabled"
            };
          case "pending":
            return {
              ...v,
              glyph: te.radioOff,
              tone: "inactive",
              statusLabel: "connecting\u2026"
            };
          case "needs-auth":
            return {
              ...v,
              glyph: te.warning,
              tone: "warning",
              statusLabel: "needs sign-in",
              statusHint: e(Zr, {})
            };
          case "unconfigured":
            return {
              ...v,
              glyph: te.radioOff,
              tone: "inactive",
              statusLabel: "not configured"
            };
          case "cached":
          case "failed":
            return {
              ...v,
              glyph: te.cross,
              tone: "error",
              statusLabel: "failed"
            };
        }
      }
  }
}
function ui(a) {
  return a?.kind === "item" || a?.kind === "disabled-header";
}
function Md(a, h, k) {
  return !a.success && (a.failureCode === "not_installed" || a.failureCode === "not_installed_at_scope") && !k.some(item => jm(item, h));
}
function bh(a) {
  switch (a.type) {
    case "plugin":
      return a.isEnabled && a.errorCount > 0;
    case "failed-plugin":
    case "flagged-plugin":
      return !0;
    case "mcp":
      return (a.status === "needs-auth" || a.status === "failed") && !Xl(a);
    case "skill":
      return !1;
  }
}
var Wl = ["on", "name-only", "user-invocable-only", "off"];
function $d(a, h) {
  if (h === "policy" || h === "flag" || h === "reserved-name") return a;
  if (h === "author") return a === "off" ? "user-invocable-only" : "off";
  let k = Wl.indexOf(a);
  return Wl[(k + 1) % Wl.length];
}
function Dd(a) {
  return a.type === "plugin" && !a.isEnabled || a.type === "mcp" && a.status === "disabled" || a.type === "skill" && a.override === "off";
}
function Xl(a) {
  return a.type === "mcp" && (a.status === "needs-auth" || a.status === "failed") && a.everConnected === !1;
}
function Ad(a, {
  searchQuery: searchQuery_3,
  favoriteIds: favoriteIds,
  showDisabled: showDisabled,
  disusedDays: disusedDays,
  keepInPlaceIds: keepInPlaceIds
}) {
  if (searchQuery_3) {
    let _ = searchQuery_3.toLowerCase();
    return a.filter(item => item.name.toLowerCase().includes(_) || "displayName" in item && item.displayName?.toLowerCase().includes(_) || "description" in item && item.description?.toLowerCase().includes(_)).map(item_3 => ({
      kind: "item",
      section: "main",
      item: item_3
    }));
  }
  let T = [],
    K = new Map();
  for (let _ of a) if (_.type === "plugin") K.set(_.id, {
    name: _.name,
    displayName: _.displayName
  });
  let N = null,
    D = (section, ee) => {
      let ce = N?.section !== section;
      if (ce) {
        if (T.length > 0 && T.at(-1)?.kind !== "disabled-header") T.push({
          kind: "spacer"
        });
        if (section === "attention" || section === "favorites" || section === "disused") T.push({
          kind: "section-header",
          section: section
        });
      }
      if ((section === "main" || section === "disabled") && (ce || N?.item.scope !== ee.scope)) {
        if (!ce) T.push({
          kind: "spacer"
        });
        T.push({
          kind: "scope-header",
          scope: ee.scope
        });
      }
      let fe = !ce && ee.type === "mcp" && ee.parentId !== void 0 && (N?.item.type === "plugin" && N.item.id === ee.parentId || N?.item.type === "mcp" && N.item.indented && N.item.parentId === ee.parentId),
        item_4 = ee.type === "mcp" && ee.indented && !fe ? {
          ...ee,
          indented: !1,
          liftedFrom: ee.parentId === void 0 ? void 0 : K.get(ee.parentId)
        } : ee;
      T.push({
        kind: "item",
        section: section,
        item: item_4
      }), N = {
        section: section,
        item: item_4
      };
    },
    Y = new Set();
  for (let _ of a) if (bh(_)) D("attention", _), Y.add(_.id);
  for (let _ of a) if (favoriteIds.has(_.id) && !Y.has(_.id)) D("favorites", _), Y.add(_.id);
  if (disusedDays && disusedDays.size > 0) {
    for (let _ of a) if (_.type === "plugin" && _.isEnabled && disusedDays.has(_.id) && !Y.has(_.id)) D("disused", {
      ..._,
      unusedDays: disusedDays.get(_.id)
    }), Y.add(_.id);
  }
  let j = _ => (Dd(_) || Xl(_)) && !keepInPlaceIds?.has(_.id);
  for (let _ of a) if (!j(_) && !Y.has(_.id)) D("main", _);
  let U = a.filter(j);
  if (U.length > 0) {
    if (T.length > 0) T.push({
      kind: "spacer"
    });
    if (T.push({
      kind: "disabled-header",
      disabledCount: F(U, Dd),
      unusedConnectorCount: F(U, Xl)
    }), showDisabled) for (let _ of U) D("disabled", _);
  }
  return T;
}
function ea(a) {
  return a.loadedFrom === "syncedSkills" ? `synced-skill:${a.source}:${a.name}` : `skill:${a.source}:${a.name}`;
}
var Ql = "synced-skill:",
  vh = "skill:";
function _d(a) {
  if (!a.startsWith(Ql)) return [];
  let h = a.slice(Ql.length),
    k = h.indexOf(":") + 1,
    v = h.slice(0, k) + nT(h.slice(k));
  return [Ql + v, vh + v];
}
function Jl(a, h) {
  let k = new Set(),
    v = [];
  for (let x of h) {
    let T = ea(x);
    if (x.loadedFrom === "syncedSkills") v.push(T);else k.add(T);
  }
  let C = null;
  for (let x of v) {
    if (a.has(x)) continue;
    for (let T of _d(x)) if (a.has(T) && !k.has(T)) {
      C ??= new Set(a), C.add(x);
      break;
    }
  }
  return C ?? a;
}
function Bd(a, h, k) {
  let v = Jl(a, k),
    C = new Set(a);
  if (!v.has(h)) return C.add(h), C;
  C.delete(h);
  for (let x of _d(h)) if (!k.some(item => item.loadedFrom !== "syncedSkills" && ea(item) === x)) C.delete(x);
  return C;
}
B();
var Od = Object.freeze({
  subscribe: a => Ne().hooksLeftOutByNameChanged.subscribe(a),
  getSnapshot: () => Ne().hooksLeftOutByName
});
function Ih(D) {
  return Gn(D);
}
var ta = {
    subscribe: subscribe,
    getSnapshot: () => Ne().loadedModules
  },
  na = () => x7t.activeModNames(Ae(ta)),
  oa = a => {
    let v = w(12),
      {
        names: names
      } = a;
    const k = names.length;
    let C;
    if (v[0] !== names.length) C = O(names.length, "mod"), v[0] = names.length, v[1] = C;else C = v[1];
    let x;
    if (v[2] !== names.length || v[3] !== C) x = r(n, {
      children: [k, " ", C, " active"]
    }), v[2] = names.length, v[3] = C, v[4] = x;else x = v[4];
    let children_26;
    if (v[5] !== names) children_26 = names.map(Ih).join(", "), v[5] = names, v[6] = children_26;else children_26 = v[6];
    let K;
    if (v[7] !== children_26) K = e(n, {
      children: children_26
    }), v[7] = children_26, v[8] = K;else K = v[8];
    let N;
    if (v[9] !== x || v[10] !== K) N = e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        wrap: "truncate-end",
        children: r(Se, {
          children: [x, K]
        })
      })
    }), v[9] = x, v[10] = K, v[11] = N;else N = v[11];
    return N;
  };
function qi() {
  let a = V(v => v.plugins.warnings),
    h = Ae(Od),
    k = Ae(ta);
  return Z(() => [...a, ...h, ...hir(k)], [a, h, k]);
}
async function mo({
  operation: operation,
  pluginId: pluginId_12,
  scope: scope_3,
  savedKept: savedKept,
  storageV5: storageV5_12
}) {
  try {
    if (!uw()) return;
    let x = {
      ...(await Lye(pluginId_12, up(), storageV5_12)),
      ...(scope_3 !== void 0 && {
        scope: c(scope_3)
      })
    };
    switch (operation) {
      case "uninstall":
        i("tengu_plugin_uninstalled_screen", {
          ...x,
          ...(savedKept && {
            saved_kept: !0
          })
        });
        return;
      case "enable":
        i("tengu_plugin_enabled_screen", x);
        return;
      case "disable":
        i("tengu_plugin_disabled_screen", x);
        return;
    }
  } catch (error) {
    l(Ye(H(error), "/plugin: logging an uninstall, enable or disable made on the screen threw"));
  }
}
function Fh(a) {
  let [Ve, at] = a;
  return e(Ag, {
    children: r(n, {
      dimColor: !0,
      children: [Ve, ": ", at.join(", ")]
    })
  }, Ve);
}
function Ld(a) {
  return Gl(Rt(a, 120)) || "this plugin";
}
function es(a) {
  return a === hn ? `the ${Tr}` : Ge(a, 120);
}
function Ph({
  newId: newId,
  openedId: openedId,
  oldInText: oldInText,
  others: others,
  alsoInstalledElsewhere: alsoInstalledElsewhere,
  targetKeepsOwn: targetKeepsOwn,
  removesSavedData: removesSavedData
}) {
  {
    let K = new Intl.ListFormat("en", {
        type: "conjunction"
      }),
      N = _ => K.format(_.map(item => sf(item))),
      D = others.filter(item => !alsoInstalledElsewhere.has(item.pluginId)),
      Y = [openedId, ...others.map(item => item.pluginId)].filter(item => alsoInstalledElsewhere.has(item)),
      j = Y.length === 0 ? "" : ` ${Ga(N(Y))} ${Y.length === 1 ? "is" : "are"} also installed for another project: the settings saved for ${Y.length === 1 ? "it" : "them"} are kept while ${Y.length === 1 ? "it stays" : "they stay"} installed there.`;
    if (targetKeepsOwn) {
      let _ = alsoInstalledElsewhere.has(openedId) ? [] : [openedId],
        ee = removesSavedData && D.length > 0 ? [..._.map(item => `the settings saved for ${sf(item)}`), `the settings and saved data for ${N(D.map(item => item.pluginId))}`].join(" and ") : _.length + D.length === 0 ? "" : `settings saved for ${N([..._, ...D.map(item => item.pluginId)])}`;
      return `${Ga(sf(newId))} already has its own settings${ee === "" ? "" : `; ${ee} are removed`}.${j}`;
    }
    if (others.length === 0) return `Your plugin settings carry over.${j}`;
    let U = D.length === 0 ? "" : `; ${removesSavedData ? "settings and saved data for" : "settings saved for"} ${K.format(D.map(item => item.marketplaceInText))} are removed`;
    return `Settings carry over from ${oldInText}${U}.${j}`;
  }
  return "";
}
function Ud(a, h) {
  let k = a?.filter(v => v.scope === h) ?? [];
  return k.find(item => item.projectPath === ke()) ?? k.find(YP);
}
function ns(a, h) {
  let k = Jd(h);
  if (!k) return "tracks the marketplace's latest";
  return a.endsWith(`@${hn}`) ? `pinned commit ${k}` : `commit ${k}`;
}
function Jd(a) {
  return a !== void 0 && /^[0-9a-f]{7,40}$/i.test(a) ? a.slice(0, 7) : void 0;
}
function jd(a, h, k) {
  let v = new Set([h, ...(qd().plugins[k] ?? []).filter(YP).map(item => item.scope)]);
  return L(a.flatMap(item => item.scopes)).filter(item => !v.has(item));
}
var xh = ["on", "name-only", "user-invocable-only", "off"];
function Vd(a, h) {
  let k = D => nn(D) ? me(D)?.skillOverrides : void 0,
    v = k("localSettings"),
    C = k("projectSettings"),
    x = k("userSettings"),
    T = D => fC(C, D) ?? fC(x, D),
    K = T(a.cmdName) ?? (a.unqualifiedName != null ? fC(v, a.unqualifiedName) ?? T(a.unqualifiedName) : void 0),
    N = a.lockSource === "author" ? K === "off" ? "off" : "user-invocable-only" : K ?? "on";
  return h === N ? void 0 : h;
}
function Rh(a) {
  switch (a) {
    case "flagged":
      return "Flagged";
    case "project":
      return "Project";
    case "local":
      return "Local";
    case "user":
      return "User";
    case "enterprise":
      return "Enterprise";
    case "managed":
      return "Managed";
    case "builtin":
    case "dynamic":
      return "Built-in";
    case "skills":
      return "Skills";
    default:
      return a;
  }
}
function Zd(a) {
  let D = w(13),
    {
      plugin: plugin_12,
      marketplace: marketplace
    } = a,
    [v, C] = y(null),
    [x, T] = y(null),
    [K, N] = y(null),
    Y,
    j;
  if (D[0] !== marketplace || D[1] !== plugin_12) Y = () => {
    let U = !1;
    return DZn(plugin_12, marketplace).then(_ => {
      if (!U) C(_);
    }).catch(async ee => {
      let ce = marketplace === hn ? await ix() : null;
      if (U) {
        return;
      }
      if (ce === "off" || ce === "unavailable") {
        N(ce);
        return;
      }
      T(ee instanceof Error && ZT(ee) || "Failed to load components");
    }), () => {
      U = !0;
    };
  }, j = [plugin_12, marketplace], D[0] = marketplace, D[1] = plugin_12, D[2] = Y, D[3] = j;else Y = D[2], j = D[3];
  if (P(Y, j), K) {
    const fe = K === "off" ? "is turned off." : "isn't available in this session.";
    let de;
    if (D[4] !== fe) de = e(s, {
      marginBottom: 1,
      children: r(n, {
        dimColor: !0,
        children: ["Components are not shown because this plugin's marketplace", " ", fe]
      })
    }), D[4] = fe, D[5] = de;else de = D[5];
    return de;
  }
  if (x) {
    let fe;
    if (D[6] === S) fe = e(n, {
      bold: !0,
      children: "Components:"
    }), D[6] = fe;else fe = D[6];
    let de;
    if (D[7] !== x) de = r(s, {
      flexDirection: "column",
      marginBottom: 1,
      children: [fe, r(n, {
        dimColor: !0,
        children: ["Error: ", x]
      })]
    }), D[7] = x, D[8] = de;else de = D[8];
    return de;
  }
  if (!v) {
    return null;
  }
  let fe, de;
  if (D[9] !== v) {
    de = yn;
    ye: {
      let pe = oi(v);
      if (pe.length === 0) {
        de = null;
        break ye;
      }
      let z;
      if (D[12] === S) z = e(n, {
        bold: !0,
        children: "Installed components:"
      }), D[12] = z;else z = D[12];
      fe = r(s, {
        flexDirection: "column",
        marginBottom: 1,
        children: [z, pe.map(Fh)]
      });
    }
    D[9] = v, D[10] = fe, D[11] = de;
  } else fe = D[10], de = D[11];
  if (de !== yn) return de;
  return fe;
}
async function Ah(a, h, k) {
  if (h === hy) return null;
  let C = (await Q1(h, k))?.plugins.find(x => x.name === a);
  if (C && typeof C.source === "string") return `Local plugins cannot be updated remotely. To update, modify the source at: ${C.source}`;
  return null;
}
function Nh(a) {
  return a.filter(item => !Qf(item.source));
}
function ss(a) {
  let x = w(15),
    {
      entries: entries_2,
      color: color_3,
      noun: noun
    } = a;
  if (entries_2.length === 0) {
    return null;
  }
  const C = entries_2.length;
  let T;
  if (x[0] !== entries_2.length || x[1] !== noun) T = O(entries_2.length, noun), x[0] = entries_2.length, x[1] = noun, x[2] = T;else T = x[2];
  let K;
  if (x[3] !== color_3 || x[4] !== entries_2.length || x[5] !== T) K = r(n, {
    bold: !0,
    color: color_3,
    children: [C, " ", T, ":"]
  }), x[3] = color_3, x[4] = entries_2.length, x[5] = T, x[6] = K;else K = x[6];
  let N;
  if (x[7] !== color_3 || x[8] !== entries_2) {
    let D;
    if (x[10] !== color_3) D = (Y, j) => r(s, {
      flexDirection: "column",
      marginLeft: 2,
      children: [e(n, {
        color: color_3,
        children: Y.message
      }), Y.guidance && r(n, {
        dimColor: !0,
        italic: !0,
        children: [te.arrowRight, " ", Y.guidance]
      })]
    }, j), x[10] = color_3, x[11] = D;else D = x[11];
    N = entries_2.map(D);
    x[7] = color_3, x[8] = entries_2, x[9] = N;
  } else N = x[9];
  let D;
  if (x[12] !== K || x[13] !== N) D = r(s, {
    flexDirection: "column",
    children: [K, N]
  }), x[12] = K, x[13] = N, x[14] = D;else D = x[14];
  return D;
}
function ps({
  setViewState: setViewState_9,
  setResult: setResult_7,
  onManageComplete: onManageComplete_2,
  changesApplyOnClose: changesApplyOnClose,
  onSearchModeChange: onSearchModeChange_4,
  targetPlugin: x,
  targetMarketplace: targetMarketplace_3,
  action: action_2,
  commands: commands_5
}) {
  let {
      storageV5: storageV5_13,
      credentials: credentials_8
    } = Oe(),
    j = V(R => R.mcp.clients),
    U = V(R => R.mcp.tools),
    _ = V(R => R.plugins.errors),
    ee = RV(),
    ce = qi(),
    fe = iwt(),
    healthByPluginName_2 = md(),
    [isFocused, ye] = y(!1),
    z = () => ye(!1),
    isTerminalFocused_2 = oc(),
    at = bl(),
    {
      rows: rows,
      columns: columns_3
    } = us(Te()),
    [oe, ve] = y("plugin-list"),
    {
      query: St,
      setQuery: setQuery,
      cursorOffset: cursorOffset_4,
      setCursorOffset: Et,
      handleKeyDown: handleKeyDown_2,
      handlePaste: handlePaste_2
    } = s_({
      isActive: oe === "plugin-list" && isFocused,
      onExit: z,
      onExitUp: z
    }),
    bt = isFocused && St !== "";
  P(() => {
    onSearchModeChange_4(bt);
  }, [bt, onSearchModeChange_4]), P(() => () => onSearchModeChange_4(!1), [onSearchModeChange_4]);
  let [le, wt] = y(null),
    pluginId_15 = Z(() => le ? Kzt(le.plugin.source) : null, [le]),
    Bt = Gi(pluginId_15),
    [sn, Ft] = y(0),
    [_e, ct] = y([]),
    [Ct, Mt] = y([]),
    Zt = hd(dHe, ips),
    [Kt, cn] = y(!0),
    [yt, jt] = y(0),
    [keepInPlaceIds_2, Qt] = y(() => new Set()),
    [un, Sn] = y(new Map()),
    [$n, Pn] = y(null),
    [kn, Ue] = y(null),
    [Ot, se] = y({
      state: "working"
    }),
    Re = A(!1);
  P(() => {
    Pn(null), Ue(null), se({
      state: "working"
    });
    let R = le?.scope;
    if (!pluginId_15 || R !== "user" && R !== "local") return;
    let X = !1;
    return (async () => {
      {
        let ne = await Mys(pluginId_15, storageV5_13);
        if (X) return;
        if (Pn(ne ?? null), ne === void 0) return;
        let [ge, he] = await Promise.all([nd(storageV5_13), CT(ne.pluginId, storageV5_13)]);
        if (X) return;
        if (he === null) {
          se({
            state: "failed"
          });
          return;
        }
        let replaced = await _lt(ne.pluginId, he.entry, ge, storageV5_13),
          kt = await PJt(ne.pluginId, he.entry, ge, storageV5_13),
          inOtherProjects = R === "user" ? kt : [],
          removesSavedData_2 = (await Promise.all(replaced.filter(item => item.pluginId !== pluginId_15).map(item => q2n(item.pluginId)))).some(item => !item);
        if (X) return;
        if (!replaced.some(item => item.pluginId === pluginId_15)) {
          se({
            state: "failed"
          });
          return;
        }
        let st = O2r();
        if (st !== void 0) Ue(I2r(st, "ui"));else if (replaced.some(item => !item.replaceable) || !YNn(ne.pluginId, replaced)) Ue(ylt(ne.pluginId, he.entry.name, replaced, "ui"));
        se({
          state: "known",
          removesSavedData: removesSavedData_2,
          listedName: he.entry.name,
          replaced: replaced,
          inOtherProjects: inOtherProjects,
          alsoInstalledElsewhere: kt.map(item => item.pluginId)
        });
      }
    })().catch(ne => {
      if (!X) se({
        state: "failed"
      });
      t(`Switch offer for ${pluginId_15} could not be worked out: ${d(ne)}`, {
        level: "warn"
      });
    }), () => {
      X = !0;
    };
  }, [pluginId_15, le?.scope, storageV5_13]);
  let [targetKeepsOwn_2, je] = y(void 0),
    $t = typeof oe === "object" && oe.type === "confirm-switch-copy" ? oe.copy.pluginId : void 0;
  P(() => {
    je(void 0);
    {
      if (!pluginId_15 || $t === void 0 || kn !== null) return;
      let R = !1;
      return xvs(pluginId_15, $t).then(X => {
        if (!R) je(X);
      }, X => {
        if (!R) je("unknown");
        t(`Could not work out what switching ${pluginId_15} to ${$t} would do with its settings: ${d(X)}`, {
          level: "warn"
        });
      }), () => {
        R = !0;
      };
    }
  }, [pluginId_15, $t, kn]);
  let [selectionDisabled_2, Je] = y(!1),
    Ie = A(!1),
    [error_15, we] = y(null),
    [ut, xe] = y(null),
    [dt, Fe] = y(0),
    It = ae((R, X = []) => {
      ee.removeErrorsOf(X), xe(R), Je(!1), wt(null), ve("plugin-list"), Fe(ne => ne + 1), onManageComplete_2();
    }, [onManageComplete_2, ee]),
    pt = changesApplyOnClose ? "Applies when you close this menu." : "Run /reload-plugins to apply.",
    Jt = A(new Set()),
    pn = ae(R => {
      Jt.current.add(R), R.finally(() => Jt.current.delete(R));
    }, []),
    vn = A(!1),
    gn = A(new Set()),
    En = A(new Set()),
    Yn = A(void 0),
    An = cCe(),
    Bn = ae(() => {
      if (oe === "plugin-details") ve("plugin-list"), wt(null), we(null);else if (typeof oe === "object" && oe.type === "failed-plugin-details") ve("plugin-list"), we(null);else if (oe === "configuring") ve("plugin-details"), sr(null);else if (oe === "plugin-usage") ve("plugin-details");else if (typeof oe === "object" && oe.type === "plugin-options") It(`Plugin enabled. Configuration skipped. ${pt}`);else if (typeof oe === "object" && oe.type === "configuring-options") setResult_7("Configuration cancelled.");else if (typeof oe === "object" && oe.type === "flagged-detail") ve("plugin-list"), we(null);else if (typeof oe === "object" && oe.type === "mcp-detail") ve("plugin-list"), we(null);else if (typeof oe === "object" && oe.type === "skill-detail") ve("plugin-list"), we(null);else if (typeof oe === "object" && oe.type === "mcp-tools") ve({
        type: "mcp-detail",
        client: oe.client
      });else if (typeof oe === "object" && oe.type === "mcp-tool-detail") ve({
        type: "mcp-tools",
        client: oe.client
      });else {
        let current_5 = Jt.current;
        if (current_5.size > 0) {
          Promise.allSettled(current_5).then(() => setViewState_9({
            type: "menu"
          }));
          return;
        }
        setViewState_9({
          type: "menu"
        });
      }
    }, [oe, setViewState_9, setResult_7, It, pt]);
  rt("confirm:no", Bn, {
    context: "Settings",
    isActive: (oe !== "plugin-list" || !isFocused) && oe !== "confirm-project-uninstall" && !(typeof oe === "object" && (oe.type === "confirm-data-cleanup" || oe.type === "confirm-switch-copy"))
  });
  let On = R => {
      if (R.type === "connected") return "connected";
      if (R.type === "cached") return "cached";
      if (R.type === "disabled") return "disabled";
      if (R.type === "pending") return "pending";
      if (R.type === "needs-auth") return "needs-auth";
      if (px(R)) return "unconfigured";
      return "failed";
    },
    items_2 = Z(() => {
      let R = nr(),
        X = new Map();
      for (let client of j) if (client.name.startsWith("plugin:")) {
        let Nt = client.name.split(":");
        if (Nt.length >= 3) {
          let rn = Nt[1],
            Ht = Nt.slice(2).join(":"),
            Tt = X.get(rn) || [];
          Tt.push({
            displayName: Wn(Ht),
            client: client
          }), X.set(rn, Tt);
        }
      }
      let ne = new Set(),
        ge = [],
        he = Zt;
      for (let Be of Ct) {
        let id_2 = Kzt(Be.plugin.source),
          pendingToggle = un.get(id_2),
          isEnabled = pendingToggle !== void 0 ? pendingToggle === "will-disable" : Ewt(id_2, Be.plugin, he),
          errors = _.filter(item => !qOe(item) && _Ce(item, id_2, Be.plugin.name));
        for (let wn of errors) ne.add(wn);
        let bn = Be.plugin.isBuiltin ? "builtin" : Be.scope || "user",
          qt = commands_5 && cN() ? Qr(Be.plugin.manifest.name, commands_5) : void 0;
        ge.push({
          item: {
            type: "plugin",
            id: id_2,
            name: Be.plugin.name,
            displayName: Be.plugin.manifest.displayName,
            description: Be.plugin.manifest.description,
            marketplace: Be.marketplace,
            scope: bn,
            isEnabled: isEnabled,
            errorCount: errors.length,
            errors: errors,
            plugin: Be.plugin,
            pendingEnable: Be.pendingEnable,
            pendingUpdate: Be.pendingUpdate,
            pendingToggle: pendingToggle,
            activity: qt ? {
              skillCount: qt.skillCount,
              totalCount: qt.totalCount
            } : void 0
          },
          originalScope: bn,
          childMcps: isEnabled ? X.get(JM(Be.plugin.name, Be.plugin.source)) || [] : []
        });
      }
      let Pe = new Map();
      for (let Be of _) {
        if (qOe(Be)) continue;
        let Nt = bbn(Be);
        if (!Nt && ne.has(Be)) continue;
        let rn = Nt ? `orphan:${Be.source}` : Be.source,
          Ht = Pe.get(rn) || [];
        Ht.push(Be), Pe.set(rn, Ht);
      }
      let kt = q6(),
        De = [];
      for (let [id_3, errors_2] of Pe) {
        let rn = id_3.startsWith("orphan:") ? id_3.slice(7) : id_3;
        if (rn in fe) continue;
        let Ht = PW(rn),
          name_6 = Ht.name || rn,
          marketplace_2 = Ht.marketplace || nS(rn) || "unknown",
          qt = wen(kt, rn),
          scope_4 = qt === "flag" || qt === void 0 ? "user" : qt;
        De.push({
          type: "failed-plugin",
          id: id_3,
          name: name_6,
          marketplace: marketplace_2,
          scope: scope_4,
          errorCount: errors_2.length,
          errors: errors_2
        });
      }
      let et = [],
        st = a9t();
      for (let client_2 of j) {
        if (client_2.name === "ide") continue;
        if (client_2.name.startsWith("plugin:")) continue;
        et.push({
          type: "mcp",
          id: `mcp:${client_2.name}`,
          name: client_2.name,
          description: void 0,
          scope: client_2.config.scope,
          status: On(client_2),
          client: client_2,
          everConnected: client_2.config.type === "claudeai-proxy" ? st.has(client_2.name) : void 0
        });
      }
      let it = [];
      if (commands_5) {
        let Be = new Set(Ct.filter(item => item.marketplace === $u).map(item => item.plugin.name)),
          Nt = ue().skillUsage ?? {},
          rn = Date.now(),
          skillOverrides = R.skillOverrides;
        for (let Tt of commands_5) {
          if (Tt.type !== "prompt" || Tt.hiddenBehindPlugin !== void 0 || Tt.loadedFrom !== "skills" && Tt.loadedFrom !== "syncedSkills" && Tt.loadedFrom !== "commands_DEPRECATED") continue;
          let name_7 = So(Tt);
          if (Be.has(Tt.name) || Tt.loadedFrom !== "syncedSkills" && Be.has(name_7)) continue;
          let qt = X8t(Tt),
            unqualifiedName = uHe(Tt),
            Uo = fC(skillOverrides, Tt.name) ?? fC(skillOverrides, unqualifiedName),
            lockSource,
            override;
          if (qt) lockSource = qt.source === "policySettings" ? "policy" : "flag", override = qt.value;else if (!uSe(Tt.name)) lockSource = "reserved-name", override = Tt.disableModelInvocation ? "user-invocable-only" : "on";else if (Tt.disableModelInvocation) lockSource = "author", override = Uo === "off" ? "off" : "user-invocable-only";else override = Uo ?? "on";
          it.push({
            type: "skill",
            id: ea(Tt),
            cmdName: Tt.name,
            unqualifiedName: unqualifiedName,
            name: name_7,
            description: Tt.description,
            scope: "skills",
            source: Tt.loadedFrom === "syncedSkills" ? FJ : Zk(Tt.source),
            override: override,
            whenToUse: Tt.whenToUse,
            skillRoot: Tt.skillRoot,
            allowedTools: Tt.allowedTools,
            lockSource: lockSource,
            tokenEstimate: Gc([Tt.name, Tt.description, Tt.whenToUse].filter(Boolean).join(" ")),
            usage: (() => {
              let Na = no(Nt, Tt.name) ?? (unqualifiedName != null ? no(Nt, unqualifiedName) : void 0);
              return Na ? {
                count: Na.usageCount,
                daysSinceUse: Math.max(0, Math.floor((rn - Na.lastUsedAt) / 86400000))
              } : void 0;
            })()
          });
        }
      }
      let Ee = {
          flagged: -1,
          project: 0,
          local: 1,
          user: 2,
          enterprise: 3,
          managed: 4,
          dynamic: 5,
          builtin: 6,
          skills: 7
        },
        mn = [],
        Wt = new Map();
      for (let {
        item: item_5,
        originalScope: originalScope,
        childMcps: childMcps
      } of ge) {
        let scope_5 = item_5.scope;
        if (!Wt.has(scope_5)) Wt.set(scope_5, []);
        Wt.get(scope_5).push(item_5);
        for (let {
          displayName: Tt,
          client: client_3
        } of childMcps) {
          let scope_6 = originalScope === "builtin" ? "user" : originalScope;
          if (!Wt.has(scope_6)) Wt.set(scope_6, []);
          Wt.get(scope_6).push({
            type: "mcp",
            id: `mcp:${client_3.name}`,
            name: Tt,
            description: void 0,
            scope: scope_6,
            status: On(client_3),
            client: client_3,
            indented: !0,
            parentId: item_5.id
          });
        }
      }
      for (let Be of et) {
        let scope_7 = Be.scope;
        if (!Wt.has(scope_7)) Wt.set(scope_7, []);
        Wt.get(scope_7).push(Be);
      }
      if (it.length > 0) Wt.set("skills", it);
      for (let Be of De) {
        let scope_8 = Be.scope;
        if (!Wt.has(scope_8)) Wt.set(scope_8, []);
        Wt.get(scope_8).push(Be);
      }
      for (let [id_4, Nt] of Object.entries(fe)) {
        let rn = Cn(id_4),
          name_8 = rn.name || id_4,
          marketplace_3 = rn.marketplace || "unknown";
        if (!Wt.has("flagged")) Wt.set("flagged", []);
        Wt.get("flagged").push({
          type: "flagged-plugin",
          id: id_4,
          name: name_8,
          marketplace: marketplace_3,
          scope: "flagged",
          reason: "delisted",
          text: "Removed from marketplace",
          flaggedAt: Nt.flaggedAt
        });
      }
      let Vt = [...Wt.keys()].sort((itemA, itemB) => (Ee[itemA] ?? 99) - (Ee[itemB] ?? 99));
      for (let Be of Vt) {
        let Nt = Wt.get(Be),
          rn = [],
          Ht = [],
          Tt = [],
          bn = 0;
        while (bn < Nt.length) {
          let qt = Nt[bn];
          if (qt.type === "plugin" || qt.type === "failed-plugin" || qt.type === "flagged-plugin") {
            let wn = [qt];
            bn++;
            let Uo = Nt[bn];
            while (Uo?.type === "mcp" && Uo.indented) wn.push(Uo), bn++, Uo = Nt[bn];
            rn.push(wn);
          } else if (qt.type === "mcp" && !qt.indented) Ht.push(qt), bn++;else if (qt.type === "skill") Tt.push(qt), bn++;else bn++;
        }
        rn.sort((itemA, itemB) => itemA[0].name.localeCompare(itemB[0].name)), Ht.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name)), Tt.sort((itemA, itemB) => itemA.name.localeCompare(itemB.name));
        for (let qt of rn) mn.push(...qt);
        mn.push(...Ht), mn.push(...Tt);
      }
      return mn;
    }, [Ct, j, _, un, fe, commands_5, yt, Zt]),
    At = Z(() => items_2.filter(item => item.type === "flagged-plugin").map(item => item.id), [items_2]);
  P(() => {
    if (At.length > 0) M4o(At, storageV5_13);
  }, [At, storageV5_13]);
  let [$e, _t] = y(() => new Set((ue().favoritePlugins ?? []).map(Kzt))),
    vt = Z(() => (commands_5 ?? []).flatMap(item => item.type === "prompt" ? [{
      name: item.name,
      source: item.source,
      loadedFrom: item.loadedFrom
    }] : []), [commands_5]),
    favoriteIds_2 = Z(() => Jl($e, vt), [$e, vt]),
    Ln = ae(R => {
      _t(X => {
        let ne = Bd(X, R, vt);
        return Ce(ge => ({
          ...ge,
          favoritePlugins: [...ne]
        }), storageV5_13), ne;
      });
    }, [vt, storageV5_13]),
    [showDisabled_2, Dn] = y(!1),
    [disusedDays_2, oo] = y(() => new Map());
  P(() => {
    let R = !1;
    return sKe().then(X => {
      if (R || X.length === 0) return;
      oo(new Map(X.map(item => [Kzt(item.pluginId), item.daysSinceLastUse])));
    }), () => {
      R = !0;
    };
  }, []);
  let Rn = ae((R, X) => {
      if (X === null || !disusedDays_2.has(X)) return;
      g("cli_plugin_disuse_review"), i("tengu_plugin_disuse_review_action", {
        action: c(R),
        ...uM(X)
      }), oo(ne => {
        if (!ne.has(X)) return ne;
        let ge = new Map(ne);
        return ge.delete(X), ge;
      });
    }, [disusedDays_2]),
    Yt = Z(() => Ad(items_2, {
      searchQuery: St,
      favoriteIds: favoriteIds_2,
      showDisabled: showDisabled_2,
      disusedDays: disusedDays_2,
      keepInPlaceIds: keepInPlaceIds_2
    }), [items_2, St, favoriteIds_2, showDisabled_2, disusedDays_2, keepInPlaceIds_2]),
    nameWidth = Z(() => Ed({
      items: items_2,
      healthByPluginName: healthByPluginName_2,
      columns: columns_3
    }), [items_2, healthByPluginName_2, columns_3]),
    lo = Z(() => {
      let R = Yt.flatMap(X => X.kind === "item" && X.section === "attention" ? [X.item] : []);
      return R.every(item => item.type === "mcp" && item.status === "needs-auth") ? R.length : 0;
    }, [Yt]),
    qn = ae((R, X) => {
      let ne = X === -1 ? Math.min(R, Yt.length - 1) : R;
      for (let ge = ne; ge >= 0 && ge < Yt.length; ge += X) if (ui(Yt[ge])) return ge;
      return -1;
    }, [Yt]),
    [selectedIndex_5, jn] = y(0),
    xo = A(null);
  P(() => {
    if (Yt.length === 0) return;
    let current_6 = xo.current;
    if (current_6) {
      xo.current = null;
      let X = Yt.findIndex(ne => ne.kind === "item" && ne.section === current_6.section && ne.item.id === current_6.id);
      if (X === -1) X = Yt.findIndex(ne => ne.kind === "item" && ne.item.id === current_6.id);
      if (X !== -1) {
        jn(X);
        return;
      }
    }
    if (!ui(Yt[selectedIndex_5])) {
      let X = qn(selectedIndex_5, 1),
        ne = qn(selectedIndex_5, -1);
      jn(X !== -1 ? X : ne !== -1 ? ne : 0);
    }
  }, [Yt, selectedIndex_5, qn]);
  let maxVisible_2 = at ? Math.max(8, rows - 10) : 8,
    firstSelectableIndex_2 = Z(() => Math.max(0, Yt.findIndex(ui)), [Yt]),
    Fo = typeof oe === "object" && "client" in oe ? oe.client : void 0,
    Xo = Z(() => Fo ? HF(Fo.name, Fo.config) : void 0, [Fo]),
    so = Or({
      totalItems: Yt.length,
      selectedIndex: selectedIndex_5,
      maxVisible: maxVisible_2,
      firstSelectableIndex: firstSelectableIndex_2,
      onScroll: R => jn(X => {
        let ne = Math.min(R + maxVisible_2, Yt.length);
        if (X >= R && X < ne) return X;
        let ge = Pe => Pe >= R && Pe < ne ? Pe : -1,
          he = X < R ? ge(qn(R, 1)) : ge(qn(ne - 1, -1));
        return he === -1 ? X : he;
      })
    }),
    [defaultFocusValue_4, onFocus_3] = y(),
    [Jo, sr] = y(null),
    [Cv, $a] = y(!1),
    [Ec, Dc] = y(!1);
  P(() => {
    if (!le) {
      Dc(!1);
      return;
    }
    async function R() {
      let mcpServers = le.plugin.manifest.mcpServers,
        ge = !1;
      if (mcpServers) ge = typeof mcpServers === "string" && oD(mcpServers) || Array.isArray(mcpServers) && mcpServers.some(item => typeof item === "string" && oD(item));
      if (!ge) try {
        let he = await yd(storageV5_13, le.plugin),
          Pe = J(Bo(he)),
          kt = Cn(le.plugin.source).name,
          De = Pe.plugins?.find(et => et.name === kt || et.name === le.plugin.name);
        if (De?.mcpServers) {
          let mcpServers_2 = De.mcpServers;
          ge = typeof mcpServers_2 === "string" && oD(mcpServers_2) || Array.isArray(mcpServers_2) && mcpServers_2.some(item => typeof item === "string" && oD(item));
        }
      } catch (error) {
        t(`Failed to read raw marketplace.json: ${error}`);
      }
      if (!X) Dc(ge);
    }
    let X = !1;
    return R(), W() && storageV5_13 !== void 0 ? () => {
      X = !0;
    } : void 0;
  }, [le, storageV5_13]), P(() => {
    let R = dt > 0;
    async function X() {
      if (!R) cn(!0);
      try {
        let {
            enabled: enabled_5,
            disabled: disabled_4
          } = await lw(storageV5_13, credentials_8),
          he = Nh([...enabled_5, ...disabled_4]),
          Pe = {};
        for (let st of he) {
          let it = Oi(st.source) ?? "local";
          if (!Pe[it]) Pe[it] = [];
          Pe[it].push(st);
        }
        let kt = [],
          De = dHe();
        for (let [name_9, installedPlugins_2] of Object.entries(Pe)) {
          let enabledCount = F(installedPlugins_2, Wt => {
              let Vt = Kzt(Wt.source);
              return Ewt(Vt, Wt, De);
            }),
            disabledCount = installedPlugins_2.length - enabledCount;
          kt.push({
            name: name_9,
            installedPlugins: installedPlugins_2,
            enabledCount: enabledCount,
            disabledCount: disabledCount
          });
        }
        kt.sort((itemA, itemB) => {
          if (itemA.name === yze) return -1;
          if (itemB.name === yze) return 1;
          return itemA.name.localeCompare(itemB.name);
        }), ct(kt);
        let et = [];
        for (let st of kt) for (let plugin_13 of st.installedPlugins) {
          let scope_9 = plugin_13.isBuiltin ? "builtin" : plugin_13.scope ?? BZn(plugin_13.source).scope;
          et.push({
            plugin: plugin_13,
            marketplace: st.name,
            scope: scope_9,
            pendingEnable: void 0,
            pendingUpdate: !1
          });
        }
        if (Mt(et), !R) jn(0);
      } finally {
        cn(!1);
      }
    }
    X();
  }, [dt, storageV5_13, credentials_8]), P(() => {
    if (vn.current) return;
    let R = _e.length > 0 || items_2.some(item => item.type === "failed-plugin");
    if (x && R && !Kt) {
      let {
          name: name_10,
          marketplace: marketplace_4
        } = targetMarketplace_3 !== void 0 ? {
          name: x,
          marketplace: void 0
        } : Cn(ZD(x)),
        ge = targetMarketplace_3 ?? marketplace_4,
        he = ge === void 0 ? void 0 : KBt(ge),
        Pe = he ? _e.filter(item => item.name === he) : _e;
      for (let De of Pe) {
        let plugin_14 = De.installedPlugins.find(item => jm(item.name, name_10) || jm(Cn(item.source).name, name_10));
        if (plugin_14) {
          let scope_10 = plugin_14.scope ?? BZn(plugin_14.source).scope,
            it = {
              plugin: plugin_14,
              marketplace: De.name,
              scope: scope_10,
              pendingEnable: void 0,
              pendingUpdate: !1
            };
          wt(it), ve("plugin-details"), Yn.current = action_2, vn.current = !0;
          return;
        }
      }
      let kt = items_2.find(item => item.type === "failed-plugin" && jm(item.name, name_10) && (!he || item.marketplace === he));
      if (kt && kt.type === "failed-plugin") ve({
        type: "failed-plugin-details",
        plugin: {
          id: kt.id,
          name: kt.name,
          marketplace: kt.marketplace,
          errors: kt.errors,
          scope: kt.scope
        }
      }), vn.current = !0;
      if (!vn.current && action_2) vn.current = !0, setResult_7(`Plugin "${x}" is not installed in this project`);
    }
  }, [x, targetMarketplace_3, _e, Kt, items_2, action_2, setResult_7]);
  let cr = async R => {
      if (Ie.current) return;
      if (!le) return;
      let X = le.scope || "user",
        ne = X === "builtin";
      if (ne && (R === "update" || R === "uninstall")) {
        we("Built-in plugins cannot be updated or uninstalled.");
        return;
      }
      if (!ne && !bCe(X) && R !== "update") {
        we("This plugin is managed by your organization. Contact your admin to disable it.");
        return;
      }
      Ie.current = !0, Je(!0), we(null);
      try {
        let ge = pluginId_15,
          he,
          Pe,
          kt;
        switch (R) {
          case "enable":
            {
              let Ee = await Twt(ge, void 0, storageV5_13);
              if (!Ee.success) throw Error(Ee.message);
              mo({
                operation: "enable",
                pluginId: Ee.pluginId || ge,
                scope: Ee.scope,
                storageV5: storageV5_13
              });
              break;
            }
          case "disable":
            {
              let Ee = await dtt(ge, void 0, storageV5_13);
              if (!Ee.success) throw Error(Ee.message);
              mo({
                operation: "disable",
                pluginId: Ee.pluginId || ge,
                scope: Ee.scope,
                storageV5: storageV5_13
              }), he = Ee.reverseDependents;
              break;
            }
          case "uninstall":
            {
              if (ne) break;
              if (!bCe(X)) break;
              if (qzt(ge)) {
                Je(!1), ve("confirm-project-uninstall");
                return;
              }
              let Ee = qd().plugins[ge],
                size = !Ee || Ee.length <= 1 ? await V2n(ge) : null;
              if (size) {
                Je(!1), ve({
                  type: "confirm-data-cleanup",
                  size: size
                });
                return;
              }
              let Vt = await Jde(ge, X, void 0, storageV5_13);
              if (!Vt.success) throw Error(Vt.message);
              mo({
                operation: "uninstall",
                pluginId: Vt.pluginId || ge,
                scope: Vt.scope || X,
                savedKept: Vt.savedKept !== void 0,
                storageV5: storageV5_13
              }), he = Vt.reverseDependents, Pe = Vt.directoryNameNote, kt = [Vt.savedKept?.note, Vt.olderLocalSettingsSkippedNote].filter(item => item !== void 0).join(" ");
              break;
            }
          case "update":
            {
              if (ne) break;
              let Ee = await ctt(ge, X, {
                explicit: !0,
                consentedEntryHelper: Bt.pinned()
              }, storageV5_13);
              switch (Ee.outcome) {
                case "failed":
                  if (Ee.failureCode === "entry_helper_unshown" || Ee.failureCode === "entry_helper_changed" || Ee.failureCode === "entry_archive_url_changed") Ft(mn => mn + 1);
                  throw Error(Ee.message);
                case "up_to_date":
                case "skipped":
                  setResult_7(Ee.message), await onManageComplete_2(), setViewState_9({
                    type: "menu"
                  });
                  return;
                case "updated":
                  break;
              }
              break;
            }
        }
        if (cd(storageV5_13, credentials_8), Sn(Ee => {
          if (!Ee.has(ge)) return Ee;
          let mn = new Map(Ee);
          return mn.delete(ge), mn;
        }), R === "disable" || R === "uninstall") Rn(R, pluginId_15);
        let De = Ewt(ge, le.plugin, dHe());
        if (R !== "uninstall" && R !== "update" && De) {
          Je(!1), ve({
            type: "plugin-options"
          });
          return;
        }
        let et = R === "enable" ? "Enabled" : R === "disable" ? "Disabled" : R === "update" ? "Updated" : "Uninstalled",
          st = he && he.length > 0 ? ` \xB7 required by ${he.join(", ")}` : "",
          it = `${te.tick} ${et} ${Wm(le.plugin)}${st}.${Pe === void 0 ? "" : ` ${Wn(Pe)}`}${kt === void 0 || kt === "" ? "" : ` ${Wn(kt)}`}`;
        if (R === "update") setResult_7(it), await onManageComplete_2(), setViewState_9({
          type: "menu"
        });else It(`${it} ${pt}`, R === "uninstall" ? await Wi(ge, storageV5_13) : []);
      } catch (error) {
        Je(!1);
        let he = error instanceof Error ? error.message : String(error);
        we(`Failed to ${R}: ${he}`), t(`Failed to ${R} plugin: ${he}`, {
          level: "error"
        });
      } finally {
        Ie.current = !1;
      }
    },
    $m = Mo(cr);
  P(() => {
    if (oe === "plugin-details" && le && Yn.current) {
      let current_7 = Yn.current;
      if (Yn.current = void 0, current_7 === "configure") {
        let X = le.plugin.manifest.userConfig;
        if (X && Object.keys(X).length > 0) ve({
          type: "configuring-options",
          schema: X
        });else setResult_7(`Plugin "${hm(le.plugin)}" declares no userConfig options.`);
        return;
      }
      $m(current_7);
    }
  }, [oe, le, setResult_7]);
  let Am = ae(async () => {
      let R = Yt[selectedIndex_5];
      if (!ui(R)) return;
      if (R.kind === "disabled-header") {
        Dn(ne => !ne);
        return;
      }
      let item_6 = R.item;
      if (item_6.type === "flagged-plugin") return;
      if (item_6.type === "plugin") {
        let ne = item_6.id,
          ge = un.get(ne),
          he = Ewt(ne, item_6.plugin, Zt),
          scope_11 = item_6.scope,
          kt = scope_11 === "builtin";
        if (a$(ne, item_6.plugin.installationPreference)) {
          we(jZn(ne));
          return;
        }
        if (kt || bCe(scope_11)) {
          if (En.current.has(ne)) return;
          En.current.add(ne), Qt(et => new Set(et).add(ne));
          let De = new Map(un);
          if (ge) {
            De.delete(ne), we(null);
            let et = (async () => {
              try {
                let st = ge === "will-disable" ? await Twt(ne, void 0, storageV5_13) : await dtt(ne, void 0, storageV5_13);
                if (!st.success && !st.alreadyInGoalState) {
                  Sn(it => {
                    let Ee = new Map(it);
                    return Ee.set(ne, ge), Ee;
                  }), we(st.message);
                  return;
                }
                if (st.success) mo({
                  operation: ge === "will-disable" ? "enable" : "disable",
                  pluginId: st.pluginId || ne,
                  scope: st.scope,
                  storageV5: storageV5_13
                });
                cd(storageV5_13, credentials_8);
              } catch (error) {
                Sn(it => {
                  let Ee = new Map(it);
                  return Ee.set(ne, ge), Ee;
                }), we(`Failed to reverse the toggle: ${d(error)}`), l(Ye(H(error), "/plugin: reversing a pending toggle on the list threw"));
              } finally {
                En.current.delete(ne);
              }
            })();
            pn(et);
          } else {
            De.set(ne, he ? "will-disable" : "will-enable"), we(null);
            let et = (async () => {
              try {
                let st = he ? await dtt(ne, void 0, storageV5_13) : await Twt(ne, void 0, storageV5_13);
                if (!st.success) {
                  Sn(it => {
                    let Ee = new Map(it);
                    return Ee.delete(ne), Ee;
                  }), we(st.message);
                  return;
                }
                if (mo({
                  operation: he ? "disable" : "enable",
                  pluginId: st.pluginId || ne,
                  scope: st.scope,
                  storageV5: storageV5_13
                }), cd(storageV5_13, credentials_8), onManageComplete_2(), he) Rn("disable", ne);
              } catch (error) {
                Sn(it => {
                  let Ee = new Map(it);
                  return Ee.delete(ne), Ee;
                }), we(`Failed to toggle: ${d(error)}`), l(Ye(H(error), "/plugin: toggling a plugin on the list threw"));
              } finally {
                En.current.delete(ne);
              }
            })();
            pn(et);
          }
          Sn(De);
        }
      } else if (item_6.type === "mcp") {
        we(null);
        let ne = item_6.client.type !== "disabled" ? "disable" : "enable";
        An(item_6.client.name).catch(ge => {
          we(bLe(ge, item_6.client.name, ne, {
            config: item_6.client.config,
            persistsOffBox: !1
          }));
        });
      } else if (item_6.type === "skill") {
        if (gn.current.has(item_6.id)) return;
        let ne = $d(item_6.override, item_6.lockSource);
        if (ne === item_6.override) return;
        gn.current.add(item_6.id), Qt(he => new Set(he).add(item_6.id));
        let {
          error: error_11
        } = await In("localSettings", {
          skillOverrides: {
            [item_6.cmdName]: Vd(item_6, ne)
          }
        }, void 0, storageV5_13);
        if (gn.current.delete(item_6.id), error_11) {
          we(error_11.message);
          return;
        }
        jt(he => he + 1);
      }
    }, [selectedIndex_5, Yt, un, Ct, An, Rn, onManageComplete_2, pn, storageV5_13, credentials_8, Zt]),
    Nm = ae(() => {
      let R = Yt[selectedIndex_5];
      if (!ui(R)) return;
      if (R.kind === "disabled-header") {
        Dn(ne => !ne);
        return;
      }
      let X = R.item;
      if (X.type === "plugin") {
        let ne = Ct.find(item => item.plugin.source === X.plugin.source);
        if (ne) wt(ne), ve("plugin-details"), onFocus_3(void 0), we(null), xe(null);
      } else if (X.type === "flagged-plugin") ve({
        type: "flagged-detail",
        plugin: {
          id: X.id,
          name: X.name,
          marketplace: X.marketplace,
          reason: X.reason,
          text: X.text,
          flaggedAt: X.flaggedAt
        }
      }), we(null);else if (X.type === "failed-plugin") ve({
        type: "failed-plugin-details",
        plugin: {
          id: X.id,
          name: X.name,
          marketplace: X.marketplace,
          errors: X.errors,
          scope: X.scope
        }
      }), we(null);else if (X.type === "mcp") ve({
        type: "mcp-detail",
        client: X.client
      }), we(null);else if (X.type === "skill") ve({
        type: "skill-detail",
        skill: X
      }), we(null);
    }, [selectedIndex_5, Yt, Ct]);
  on({
    "select:previous": () => {
      let R = qn(selectedIndex_5 - 1, -1);
      if (R === -1) {
        if (!Kt && items_2.length > 0) ye(!0);
      } else so.handleSelectionChange(R, jn);
    },
    "select:next": () => {
      let R = qn(selectedIndex_5 + 1, 1);
      if (R !== -1) so.handleSelectionChange(R, jn);
    },
    "select:accept": Nm
  }, {
    context: "Select",
    isActive: oe === "plugin-list" && !isFocused
  });
  let _m = ae(() => {
    let R = Yt[selectedIndex_5];
    if (R?.kind !== "item") return !1;
    xo.current = {
      section: R.section,
      id: R.item.id
    }, Ln(R.item.id);
  }, [Yt, selectedIndex_5, Ln]);
  on({
    "plugin:toggle": Am,
    "plugin:favorite": _m
  }, {
    context: "Plugin",
    isActive: oe === "plugin-list" && !isFocused
  });
  let Bm = ae(() => {
    if (typeof oe !== "object" || oe.type !== "flagged-detail") return;
    D4o(oe.plugin.id, storageV5_13), ve("plugin-list");
  }, [oe, storageV5_13]);
  on({
    "select:accept": Bm
  }, {
    context: "Select",
    isActive: typeof oe === "object" && oe.type === "flagged-detail"
  });
  let options_6 = Z(() => {
    if (oe !== "plugin-details" || !le) return [];
    let R = pluginId_15,
      X = Ewt(R, le.plugin, Zt),
      ne = le.marketplace === "builtin",
      ge = Sp(le.marketplace),
      he = [];
    if (!a$(R, le.plugin.installationPreference)) he.push({
      value: "toggle-enabled",
      label: X ? "Disable plugin" : "Enable plugin",
      action: () => void cr(X ? "disable" : "enable")
    });
    if (he.push({
      value: "favorite",
      label: favoriteIds_2.has(R) ? "Remove from favorites" : "Add to favorites",
      action: () => Ln(R)
    }), !ne && !ge) {
      if (he.push({
        value: "mark-for-update",
        label: le.pendingUpdate ? "Unmark for update" : "Mark for update",
        action: async () => {
          try {
            let De = await Ah(Cn(R).name, le.marketplace, storageV5_13);
            if (De) {
              we(De);
              return;
            }
            let et = [...Ct],
              st = et.findIndex(item => item.plugin.source === le.plugin.source);
            if (st !== -1) et[st].pendingUpdate = !le.pendingUpdate, Mt(et), wt({
              ...le,
              pendingUpdate: !le.pendingUpdate
            });
          } catch (error) {
            we(error instanceof Error ? error.message : "Failed to check plugin update availability");
          }
        }
      }), Ec) he.push({
        value: "configure",
        label: "Configure",
        action: async () => {
          $a(!0);
          try {
            let mcpServers_3 = le.plugin.manifest.mcpServers,
              et = null;
            if (typeof mcpServers_3 === "string" && oD(mcpServers_3)) et = mcpServers_3;else if (Array.isArray(mcpServers_3)) {
              for (let Ee of mcpServers_3) if (typeof Ee === "string" && oD(Ee)) {
                et = Ee;
                break;
              }
            }
            if (!et) {
              we("No MCPB file found in plugin"), $a(!1);
              return;
            }
            let st = pluginId_15,
              it = await A3e(et, le.plugin.path, st, void 0, void 0, !0, storageV5_13);
            if ("status" in it && it.status === "needs-config") sr(it), ve("configuring");else we("Failed to load MCPB for configuration");
          } catch (error) {
            let et = d(error);
            we(`Failed to load configuration: ${et}`);
          } finally {
            $a(!1);
          }
        }
      });
      he.push({
        value: "update",
        label: e(n, {
          color: "suggestion",
          children: "Update now"
        }),
        action: () => void cr("update")
      }), he.push({
        value: "uninstall",
        label: e(n, {
          color: "error",
          children: "Uninstall"
        }),
        action: () => void cr("uninstall")
      });
    }
    if (le.plugin.manifest.userConfig && Object.keys(le.plugin.manifest.userConfig).length > 0) he.push({
      value: "configure-options",
      label: "Configure options",
      action: () => {
        ve({
          type: "configuring-options",
          schema: le.plugin.manifest.userConfig
        });
      }
    });
    let Pe = Eze(le.plugin.manifest.homepage);
    if (Pe) he.push({
      value: "homepage",
      label: "Open homepage",
      action: () => void Hs(Pe)
    });
    let kt = Eze(le.plugin.manifest.repository);
    if (kt) he.push({
      value: "repository",
      label: "View repository",
      action: () => void Hs(kt)
    });
    if (cN()) he.push({
      value: "usage",
      label: "Usage",
      action: () => ve("plugin-usage")
    });
    if ($n && !ne && !ge) {
      let copy_2 = $n;
      he.push({
        value: "switch-copy",
        label: `Switch to ${xJt(copy_2.marketplace)}`,
        action: () => {
          we(null), ve({
            type: "confirm-switch-copy",
            copy: copy_2
          });
        }
      });
    }
    return he.push({
      value: "back",
      label: "Back to plugin list",
      action: () => {
        ve("plugin-list"), wt(null), we(null);
      }
    }), he;
  }, [oe, le, Ec, Ct, favoriteIds_2, Ln, storageV5_13, Zt, $n]);
  on({
    "select:accept": () => {
      if (typeof oe === "object" && oe.type === "failed-plugin-details") (async () => {
        Je(!0), we(null);
        let R = oe.plugin.id,
          scope_12 = oe.plugin.scope,
          ne = await Jde(R, bCe(scope_12) ? scope_12 : "user", !1, storageV5_13, {
            settingsStillOn: "remove-anyway"
          });
        if (ne.success && ne.pluginId) mo({
          operation: "uninstall",
          pluginId: ne.pluginId,
          scope: ne.scope || (bCe(scope_12) ? scope_12 : "user"),
          savedKept: ne.savedKept !== void 0,
          storageV5: storageV5_13
        });
        let success_2 = ne.success,
          he = 0,
          Pe;
        if (!success_2) {
          for (let Ee of D_) {
            let mn = me(Ee),
              Wt = lk(Object.keys(mn?.enabledPlugins ?? {}), R);
            if (Wt !== void 0) {
              let {
                error: error_12
              } = await ca(Ee, Be => ({
                enabledPlugins: {
                  ...Be?.enabledPlugins,
                  [Wt]: void 0
                }
              }), void 0, storageV5_13);
              if (error_12) {
                Pe = error_12;
                break;
              }
              he++, success_2 = !0;
            }
          }
          cd(storageV5_13, credentials_8);
        }
        if (Pe) {
          if (he > 0) onManageComplete_2();
          Je(!1), we(he > 0 ? `Removed ${Wn(oe.plugin.name)} from ${he} ${O(he, "settings file")}. Failed to write another: ${Pe.message}` : `Failed to write settings: ${Pe.message}`);
          return;
        }
        let kt = await Ku(storageV5_13),
          De = eN(kt) ? qd() : kt,
          et = [...Object.entries(De.plugins).flatMap(([Ee, mn]) => Hse(mn) ? [Ee] : []), ...D_.flatMap(item => Object.keys(me(item)?.enabledPlugins ?? {})), ...q6().keys()],
          st = et.some(item => jm(item, R)),
          it = !success_2 && !VXr(R) && !oe.plugin.errors.some(bbn) && Md(ne, R, et);
        if (success_2 || it) {
          let Ee = Wn(oe.plugin.name),
            mn = ne.success ? `${Wn(ne.message)} \xB7 data preserved` : success_2 ? `Removed ${Ee} from settings` : `Removed ${Ee} from the list. It is not installed.`;
          It(`${te.tick} ${mn}`, ne.success ? await Wi(R, storageV5_13) : st ? [] : [R]);
        } else Je(!1), we(Wn(ne.message));
      })().catch(R => {
        Je(!1), we(Wn(d(R)));
      });
    }
  }, {
    context: "Select",
    isActive: typeof oe === "object" && oe.type === "failed-plugin-details" && oe.plugin.scope !== "managed" && !Sp(oe.plugin.marketplace)
  });
  function onKeyDown_7(R) {
    if (R.ctrl || R.meta || selectionDisabled_2) return;
    if (!le) return;
    let pluginId_13 = pluginId_15;
    if (R.key === "y" || R.key === "Y" || R.key === "return") R.preventDefault(), Je(!0), we(null), (async () => {
      try {
        let {
          error: error_13
        } = await ca("localSettings", ge => ({
          enabledPlugins: {
            ...ge?.enabledPlugins,
            [pluginId_13]: !1
          }
        }), void 0, storageV5_13);
        if (error_13) {
          Je(!1), we(`Failed to write settings: ${error_13.message}`);
          return;
        }
        mo({
          operation: "disable",
          pluginId: pluginId_13,
          scope: "local",
          storageV5: storageV5_13
        }), cd(storageV5_13, credentials_8), Rn("disable", pluginId_13), It(`${te.tick} Disabled ${Wm(le.plugin)} in .claude/settings.local.json. ${pt}`);
      } catch (error) {
        Je(!1), we(d(error));
      }
    })();else if (R.key === "u" || R.key === "U") R.preventDefault(), Je(!0), we(null), (async () => {
      try {
        let ne = ke(),
          ge = rA(qd().plugins[pluginId_13], "project", ne) !== void 0,
          he;
        if (ge) {
          let Pe = await Jde(pluginId_13, "project", !1, storageV5_13);
          if (!Pe.success) {
            Je(!1), we(Pe.message);
            return;
          }
          mo({
            operation: "uninstall",
            pluginId: Pe.pluginId || pluginId_13,
            scope: Pe.scope || "project",
            savedKept: Pe.savedKept !== void 0,
            storageV5: storageV5_13
          }), he = Pe.message;
        } else {
          let {
            error: error_14
          } = await ca("projectSettings", kt => {
            let De = kt?.enabledPlugins ?? {},
              et = lk(Object.keys(De), pluginId_13) ?? pluginId_13;
            return {
              enabledPlugins: {
                ...De,
                [et]: void 0
              }
            };
          }, void 0, storageV5_13);
          if (error_14) {
            Je(!1), we(`Failed to write settings: ${error_14.message}`);
            return;
          }
          he = `Removed ${Wm(le.plugin)} from .claude/settings.json`;
        }
        cd(storageV5_13, credentials_8), Rn("uninstall", pluginId_13), It(`${te.tick} ${he}. ${pt}`, await Wi(pluginId_13, storageV5_13));
      } catch (error) {
        Je(!1), we(d(error));
      }
    })();else if (R.key === "n" || R.key === "N" || R.key === "escape") R.preventDefault(), ve("plugin-details"), we(null);
  }
  function onKeyDown_8(R) {
    {
      if (R.ctrl || R.meta || selectionDisabled_2 || Re.current) return;
      if (!le || typeof oe !== "object" || oe.type !== "confirm-switch-copy") return;
      let scope_13 = le.scope,
        copy_3 = oe.copy,
        carrySettingsFrom = pluginId_15,
        he = Wm(le.plugin);
      if (R.key === "y" || R.key === "Y") {
        if (R.preventDefault(), scope_13 !== "user" && scope_13 !== "local" || kn !== null || Ot.state !== "known" || typeof targetKeepsOwn_2 !== "boolean") return;
        let replaceOnlyPluginIds = [...(carrySettingsFrom === null ? [] : [carrySettingsFrom]), ...Ot.replaced.map(item => item.pluginId).filter(item => item !== carrySettingsFrom)],
          kt = jd(Ot.replaced, scope_13, copy_3.pluginId);
        Re.current = !0, Je(!0), we(null), (async () => {
          try {
            let De = await ltt(copy_3.pluginId, scope_13, {
              replaceInstalledCopy: !0,
              replaceOnlyPluginIds: replaceOnlyPluginIds,
              surface: "installed_switch",
              ...(carrySettingsFrom !== null && {
                carrySettingsFrom: carrySettingsFrom
              })
            }, storageV5_13);
            if (!De.success) {
              Je(!1), we(Wn(De.message));
              return;
            }
            cd(storageV5_13, credentials_8);
            let et = De.switched?.keptDataDir,
              st = new Intl.ListFormat("en", {
                type: "conjunction"
              }),
              it = De.switched?.settingsRemovedFrom ?? [],
              Ee = De.switched?.savedDataRemovedFrom ?? [],
              mn = it.filter(item => Ee.includes(item)),
              Wt = it.filter(item => !Ee.includes(item)),
              Vt = Ee.filter(item => !it.includes(item)),
              Be = Ht => st.format(Ht.map(item => sf(item))),
              Nt = st.format([...(mn.length > 0 ? [`the settings and saved data for ${Be(mn)}`] : []), ...(Wt.length > 0 ? [`the settings saved for ${Be(Wt)}`] : []), ...(Vt.length > 0 ? [`the saved data of ${Be(Vt)}`] : [])]),
              rn = kt.filter(item => !De.switched?.oldCopyStillRecordedAt?.includes(item));
            It(De.switched && !De.switched.messageSaysMore ? `${te.tick} Switched ${Ld(he)} to ${xJt(copy_3.marketplace)}${De.switched.replaced.length > 1 ? ` from ${new Intl.ListFormat("en", {
              type: "conjunction"
            }).format(De.switched.replaced.map(item => xJt(Cn(item).marketplace ?? "")))}` : ""}.${De.switched.keptOwnSettings ? ` ${Ga(sf(copy_3.pluginId))} kept its own settings${Nt === "" ? "" : `, and ${Nt} were removed`}.` : Nt === "" ? "" : ` ${Ga(Nt)} were removed.`}${De.switched.stayedDisabled ? " It stays disabled, as before." : ""}${rn.length === 0 ? "" : ` It is no longer installed at ${new Intl.ListFormat("en", {
              type: "conjunction"
            }).format(rn)} scope.`}${et === void 0 ? "" : ` ${M2r(et, copy_3.pluginId)}.`} ${pt}` : `${te.tick} ${Wn(De.message)}${De.switched ? `.${rn.length === 0 ? "" : ` It is no longer installed at ${new Intl.ListFormat("en", {
              type: "conjunction"
            }).format(rn)} scope.`} ${pt}` : ""}`, (await Promise.all((De.switched?.replaced ?? (carrySettingsFrom === null ? [] : [carrySettingsFrom])).map(item => Wi(item, storageV5_13)))).flat());
          } catch (error) {
            Je(!1), we(Wn(d(error)));
          } finally {
            Re.current = !1;
          }
        })();
      } else if (R.key === "n" || R.key === "N" || R.key === "escape") R.preventDefault(), ve("plugin-details"), we(null);
    }
  }
  function onKeyDown_9(R) {
    if (R.ctrl || R.meta || selectionDisabled_2) return;
    if (!le) return;
    let X = pluginId_15,
      scope_14 = le.scope;
    if (!scope_14 || scope_14 === "builtin" || !bCe(scope_14)) return;
    let ge = async he => {
      Je(!0), we(null);
      try {
        let Pe = await Jde(X, scope_14, he, storageV5_13);
        if (!Pe.success) throw Error(Pe.message);
        mo({
          operation: "uninstall",
          pluginId: Pe.pluginId || X,
          scope: Pe.scope || scope_14,
          savedKept: Pe.savedKept !== void 0,
          storageV5: storageV5_13
        }), cd(storageV5_13, credentials_8), Rn("uninstall", X);
        let kt = Pe.dataDirKept ?? !he ? " \xB7 data preserved" : "";
        It(`${te.tick} ${Pe.message}${kt}`, await Wi(X, storageV5_13));
      } catch (error) {
        Je(!1), we(error instanceof Error ? error.message : String(error));
      }
    };
    if (R.key === "y" || R.key === "Y") R.preventDefault(), ge(!0);else if (R.key === "n" || R.key === "N") R.preventDefault(), ge(!1);else if (R.key === "escape") R.preventDefault(), ve("plugin-details"), we(null);
  }
  P(() => {
    jn(0);
  }, [St]);
  function onKeyDown_10(R) {
    if (isFocused) {
      handleKeyDown_2(R);
      return;
    }
    if (R.ctrl || R.meta) return;
    if (R.key === "/") R.preventDefault(), ye(!0), setQuery(""), jn(0);else if (R.key.length === 1 && R.key !== " ") R.preventDefault(), ye(!0), setQuery(R.key), jn(0);
  }
  function onPaste(R) {
    if (isFocused) {
      handlePaste_2(R);
      return;
    }
    let X = (R.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (!X) return;
    R.preventDefault(), ye(!0), setQuery(X), jn(0);
  }
  if (Kt) return e(n, {
    children: "Loading installed plugins\u2026"
  });
  if (items_2.length === 0) return r(s, {
    flexDirection: "column",
    children: [e(s, {
      marginBottom: 1,
      children: e(n, {
        bold: !0,
        children: "Manage plugins"
      })
    }), ut && e(s, {
      marginBottom: 1,
      paddingLeft: 2,
      children: e(n, {
        color: "success",
        children: Nd(ut)
      })
    }), e(Eo, {
      children: "No plugins or MCP servers installed."
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: e(gt, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      })
    })]
  });
  if (typeof oe === "object" && oe.type === "plugin-options" && le) {
    let pluginId_14 = pluginId_15;
    return e(Di, {
      plugin: le.plugin,
      pluginId: pluginId_14,
      onDone: (X, ne, ge) => {
        let he = Wm(le.plugin);
        switch (X) {
          case "configured":
          case "skipped":
            It(X === "configured" && ge ? `${te.tick} Enabled and configured ${he}. ${pt}` : `${te.tick} Enabled ${he}. ${pt}`);
            break;
          case "error":
          case "read-error":
            we(X === "error" ? `Failed to save configuration: ${ne}` : `Configuration not applied: could not read the saved options (${ne})`), Je(!1), Fe(Pe => Pe + 1), ve("plugin-details"), onManageComplete_2();
            break;
        }
      }
    });
  }
  if (typeof oe === "object" && oe.type === "configuring-options" && le) {
    let R = pluginId_15;
    return e($i, {
      title: `Configure ${Wm(le.plugin)}`,
      subtitle: "Plugin options",
      configSchema: oe.schema,
      load: () => QP(R, credentials_8),
      onSave: async X => {
        try {
          await lPe(R, X, oe.schema, storageV5_13), cd(storageV5_13, credentials_8);
          let ne = Object.keys(X).length > 0;
          if (ne) onManageComplete_2();
          setResult_7(ne ? "Configuration saved." : "No configuration changes.");
        } catch (error) {
          we(`Failed to save configuration: ${d(error)}`);
        }
        ve("plugin-details");
      },
      onCancel: () => ve("plugin-details")
    }, R);
  }
  if (oe === "configuring" && Jo && le) {
    let onCancel_9 = function () {
        sr(null), ve("plugin-details");
      },
      R = pluginId_15;
    async function onSave_2(ge) {
      if (!Jo || !le) return;
      try {
        let mcpServers_4 = le.plugin.manifest.mcpServers,
          Pe = null;
        if (typeof mcpServers_4 === "string" && oD(mcpServers_4)) Pe = mcpServers_4;else if (Array.isArray(mcpServers_4)) {
          for (let kt of mcpServers_4) if (typeof kt === "string" && oD(kt)) {
            Pe = kt;
            break;
          }
        }
        if (!Pe) {
          we("No MCPB file found"), ve("plugin-details");
          return;
        }
        await A3e(Pe, le.plugin.path, R, void 0, ge, void 0, storageV5_13), we(null), sr(null), ve("plugin-details"), onManageComplete_2(), setResult_7("Configuration saved.");
      } catch (error) {
        let Pe = d(error);
        we(`Failed to save configuration: ${Pe}`), ve("plugin-details");
      }
    }
    return e(Uzt, {
      title: `Configure ${u7e(Jo.manifest.display_name) ?? Jo.manifest.name}`,
      subtitle: `Plugin: ${Wm(le.plugin)}`,
      configSchema: Jo.configSchema,
      initialValues: Jo.existingConfig,
      onSave: onSave_2,
      onCancel: onCancel_9
    });
  }
  if (typeof oe === "object" && oe.type === "flagged-detail") {
    let plugin_15 = oe.plugin;
    return r(s, {
      flexDirection: "column",
      children: [e(s, {
        children: r(n, {
          bold: !0,
          children: [Wn(plugin_15.name), " @", " ", Wn($A(plugin_15.marketplace))]
        })
      }), r(s, {
        marginBottom: 1,
        children: [e(n, {
          dimColor: !0,
          children: "Status: "
        }), e(n, {
          color: "error",
          children: "Removed"
        })]
      }), r(s, {
        marginBottom: 1,
        flexDirection: "column",
        children: [r(n, {
          color: "error",
          children: ["Removed from marketplace \xB7 reason: ", plugin_15.reason]
        }), e(n, {
          children: plugin_15.text
        }), r(n, {
          dimColor: !0,
          children: ["Flagged on ", new Date(plugin_15.flaggedAt).toLocaleDateString()]
        })]
      }), e(s, {
        marginTop: 1,
        flexDirection: "column",
        children: r(xF, {
          active: !0,
          children: [r(n, {
            "aria-hidden": !0,
            children: [te.pointer, " "]
          }), e(n, {
            color: "suggestion",
            children: "Dismiss"
          })]
        })
      }), r(Se, {
        children: [e(gt, {
          action: "select:accept",
          context: "Select",
          fallback: "Enter",
          description: "dismiss"
        }), e(gt, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })]
      })]
    });
  }
  if (oe === "plugin-usage" && le) return e(jl, {
    plugin: le.plugin
  });
  if (oe === "confirm-project-uninstall" && le) return r(ko, {
    onKeyDown: onKeyDown_7,
    children: [r(n, {
      bold: !0,
      color: "warning",
      children: [Wm(le.plugin), " is enabled in .claude/settings.json (shared with your team)"]
    }), r(s, {
      marginTop: 1,
      flexDirection: "column",
      children: [e(n, {
        children: "Disable it just for you in .claude/settings.local.json?"
      }), e(n, {
        dimColor: !0,
        children: "The plugin stays installed for the project; only your local override changes."
      })]
    }), error_15 && e(s, {
      marginTop: 1,
      children: e(ls, {
        error: Nd(error_15)
      })
    }), e(s, {
      marginTop: 1,
      children: selectionDisabled_2 ? e(n, {
        dimColor: !0,
        children: "Processing\u2026"
      }) : r(Se, {
        children: [e(q, {
          chord: "y",
          action: "disable for me",
          bold: !0
        }), e(q, {
          chord: "u",
          action: "uninstall for everyone",
          bold: !0
        }), e(q, {
          chord: "escape",
          action: "cancel",
          bold: !0,
          format: {
            keyCase: "lower"
          }
        })]
      })
    })]
  });
  if (typeof oe === "object" && oe.type === "confirm-switch-copy" && le) {
    let copy_4 = oe.copy,
      X = qd().plugins[pluginId_15 ?? ""],
      ne = Ud(X, le.scope)?.gitCommitSha,
      ge = xJt(copy_4.marketplace),
      he = Ld(Wm(le.plugin)),
      Pe = (Ot.state === "known" ? Ot.replaced : []).filter(item => item.pluginId !== pluginId_15),
      kt = new Intl.ListFormat("en", {
        type: "conjunction"
      }),
      De = Pe.map(item => es(Cn(item.pluginId).marketplace ?? "")),
      et = es(copy_4.marketplace),
      oldInText_2 = es(le.marketplace),
      it = le.scope ?? "user",
      Ee = Ot.state === "known" ? jd(Ot.replaced, it, copy_4.pluginId) : [],
      mn = Ot.state !== "known" || Ee.length === 0 ? "" : `The switch uninstalls ${kt.format(Ot.replaced.filter(item => item.scopes.some(item => item !== it)).toSorted((Vt, Be) => Number(Be.pluginId === pluginId_15) - Number(Vt.pluginId === pluginId_15)).map(item => `${sf(item.pluginId)} at ${kt.format(item.scopes)} scope`))}, and installs the new copy at ${it} scope, so the plugin is no longer installed at ${kt.format(Ee)} scope.`,
      Wt = Ot.state === "known" ? jPt(copy_4.pluginId, Ot.listedName, Ot.inOtherProjects) : "";
    if (kn !== null) return r(ko, {
      onKeyDown: onKeyDown_8,
      children: [r(n, {
        bold: !0,
        children: [Ga(he), " can't be switched to ", ge, " ", "from here"]
      }), e(s, {
        marginTop: 1,
        children: e(n, {
          children: Wn(kn)
        })
      }), e(s, {
        marginTop: 1,
        children: e(Se, {
          children: e(q, {
            chord: "escape",
            action: "go back",
            bold: !0
          })
        })
      })]
    });
    if (Ot.state !== "known" || typeof targetKeepsOwn_2 !== "boolean") return r(ko, {
      onKeyDown: onKeyDown_8,
      children: [r(n, {
        bold: !0,
        children: ["Switch ", he, " to ", ge, "?"]
      }), e(s, {
        marginTop: 1,
        children: Ot.state === "working" ? e(n, {
          dimColor: !0,
          children: "Working out what will be replaced\u2026"
        }) : Ot.state === "failed" ? e(n, {
          children: "Could not work out what would be replaced, so nothing was changed. Go back and open the plugin again to retry."
        }) : targetKeepsOwn_2 === void 0 ? e(n, {
          dimColor: !0,
          children: "Working out what the switch will do\u2026"
        }) : e(n, {
          children: "Could not work out what the switch would do with your saved plugin settings, so nothing was changed. Try again."
        })
      }), e(s, {
        marginTop: 1,
        children: e(Se, {
          children: e(q, {
            chord: "escape",
            action: "go back",
            bold: !0
          })
        })
      })]
    });
    return r(ko, {
      onKeyDown: onKeyDown_8,
      children: [r(n, {
        bold: !0,
        children: ["Switch ", he, " to ", ge, "?"]
      }), r(s, {
        marginTop: 1,
        flexDirection: "column",
        children: [r(n, {
          children: ["Now:   ", sf(pluginId_15 ?? ""), " \xB7", " ", ns(pluginId_15 ?? "", ne)]
        }), Pe.map(item => r(n, {
          children: ["Now:   ", sf(item.pluginId), " \xB7", " ", ns(item.pluginId, item.gitCommitSha)]
        }, item.pluginId)), r(n, {
          children: ["After: ", sf(copy_4.pluginId), " \xB7", " ", ns(copy_4.pluginId, copy_4.sha)]
        }), r(n, {
          dimColor: !0,
          children: ["Installs it from ", et, " and uninstalls the", " ", Pe.length === 0 ? "one" : "ones", " from", " ", kt.format([oldInText_2, ...De]), ".", " ", le.marketplace === hn ? `The code can differ: the Anthropic Directory installs the commit it lists, and ${et} installs the commit it pins, or its latest, which can be older or newer than what you have.` : "The code can differ: the Anthropic Directory installs the commit it lists, which can be older or newer than what you have.", " ", "Updates then come from ", et, ".", " ", Ph({
            newId: copy_4.pluginId,
            openedId: pluginId_15 ?? "",
            oldInText: oldInText_2,
            others: Pe.map((item, index) => ({
              pluginId: item.pluginId,
              marketplaceInText: De[index] ?? ""
            })),
            alsoInstalledElsewhere: new Set(Ot.alsoInstalledElsewhere),
            targetKeepsOwn: targetKeepsOwn_2,
            removesSavedData: Ot.removesSavedData
          })]
        })]
      }), mn !== "" && e(s, {
        marginTop: 1,
        children: e(n, {
          children: Wn(mn)
        })
      }), Wt !== "" && e(s, {
        marginTop: 1,
        children: e(n, {
          children: Wn(Wt)
        })
      }), error_15 && e(s, {
        marginTop: 1,
        children: e(ls, {
          error: error_15
        })
      }), e(s, {
        marginTop: 1,
        children: selectionDisabled_2 ? e(n, {
          dimColor: !0,
          children: "Switching\u2026"
        }) : r(Se, {
          children: [e(q, {
            chord: "y",
            action: "switch",
            bold: !0
          }), e(q, {
            chord: ["n", "escape"],
            action: "cancel",
            bold: !0
          })]
        })
      })]
    });
  }
  if (typeof oe === "object" && oe.type === "confirm-data-cleanup" && le) return r(ko, {
    onKeyDown: onKeyDown_9,
    children: [r(n, {
      bold: !0,
      children: [Wm(le.plugin), " has", " ", oe.size.human, " of persistent data"]
    }), r(s, {
      marginTop: 1,
      flexDirection: "column",
      children: [e(n, {
        children: "Delete it along with the plugin?"
      }), e(n, {
        dimColor: !0,
        children: ag(pluginId_15)
      })]
    }), error_15 && e(s, {
      marginTop: 1,
      children: e(ls, {
        error: Nd(error_15)
      })
    }), e(s, {
      marginTop: 1,
      children: selectionDisabled_2 ? e(n, {
        dimColor: !0,
        children: "Uninstalling\u2026"
      }) : r(Se, {
        children: [e(q, {
          chord: "y",
          action: "delete",
          bold: !0
        }), e(q, {
          chord: "n",
          action: "keep",
          bold: !0
        }), e(q, {
          chord: "escape",
          action: "cancel",
          bold: !0,
          format: {
            keyCase: "lower"
          }
        })]
      })
    })]
  });
  if (oe === "plugin-details" && le) {
    let R = pluginId_15,
      X = Ewt(R, le.plugin, Zt),
      ne = _.filter(item => _Ce(item, R, le.plugin.name)),
      entries_3 = ne.filter(item => !qOe(item)).map(item => ({
        message: Io(item),
        guidance: Do(item)
      })),
      entries_4 = [...ne.filter(qOe).map(item => ({
        message: Io(item),
        guidance: Do(item)
      })), ...ce.filter(item => _Ce(item, R, le.plugin.name)).map(item => ({
        message: Yee(item),
        guidance: FPr(item)
      }))],
      Pe = ans(le.plugin.repository),
      kt = entries_3.length === 0 && entries_4.length === 0 ? null : r(s, {
        flexDirection: "column",
        marginBottom: 1,
        children: [e(ss, {
          entries: entries_3,
          color: "error",
          noun: "error"
        }), e(ss, {
          entries: entries_4,
          color: "warning",
          noun: "note"
        })]
      }),
      De = gKs(le.plugin.manifest),
      et = le.marketplace === hn ? Ud(qd().plugins[R], le.scope)?.gitCommitSha : void 0,
      children_27 = Jd(et),
      it = children_27 ? JNn(De.version) : De.version;
    return r(s, {
      flexDirection: "column",
      children: [e(s, {
        children: r(n, {
          bold: !0,
          children: [Wm(le.plugin), " @", " ", Wn($A(le.marketplace))]
        })
      }), r(s, {
        children: [e(n, {
          dimColor: !0,
          children: "Scope: "
        }), e(n, {
          children: le.scope || "user"
        })]
      }), it && r(s, {
        children: [e(n, {
          dimColor: !0,
          children: "Version: "
        }), r(n, {
          children: [it, children_27 ? ` \xB7 installed at commit ${children_27}` : ""]
        })]
      }), !it && children_27 ? r(s, {
        children: [e(n, {
          dimColor: !0,
          children: "Installed at commit: "
        }), e(n, {
          children: children_27
        })]
      }) : null, De.description && e(s, {
        marginBottom: 1,
        children: e(n, {
          children: De.description
        })
      }), De.author && r(s, {
        children: [e(n, {
          dimColor: !0,
          children: "Author: "
        }), e(n, {
          children: De.author.name
        })]
      }), r(s, {
        marginBottom: 1,
        children: [e(n, {
          dimColor: !0,
          children: "Status: "
        }), e(n, {
          color: X ? "success" : "warning",
          children: X ? "Enabled" : "Disabled"
        }), a$(R, le.plugin.installationPreference) && e(n, {
          dimColor: !0,
          children: " \xB7 Required by your org"
        }), le.pendingUpdate && e(n, {
          color: "suggestion",
          children: " \xB7 Marked for update"
        }), Pe !== null && r(n, {
          dimColor: !0,
          children: [" ", "\xB7 Last used:", " ", Pe === 0 ? "today" : `${Pe} ${O(Pe, "day")} ago`]
        })]
      }), pluginId_15 && e(Fi, {
        pluginId: pluginId_15,
        verb: "Updating",
        onShown: Bt.record
      }, sn), e(Zd, {
        plugin: le.plugin,
        marketplace: le.marketplace
      }), kt, e(s, {
        marginTop: 1,
        flexDirection: "column",
        children: e(Yo, {
          options: options_6,
          onSelect: Ee => options_6.find(item => item.value === Ee)?.action(),
          selectionDisabled: selectionDisabled_2,
          defaultFocusValue: defaultFocusValue_4,
          onFocus: onFocus_3
        })
      }), selectionDisabled_2 && e(s, {
        marginTop: 1,
        children: e(n, {
          children: "Processing\u2026"
        })
      }), error_15 && e(s, {
        marginTop: 1,
        children: e(ls, {
          error: Nd(error_15)
        })
      }), e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          children: r(Se, {
            children: [e(gt, {
              action: "select:previous",
              context: "Select",
              fallback: "\u2191",
              description: "navigate"
            }), e(gt, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "select"
            }), e(gt, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back"
            })]
          })
        })
      })]
    });
  }
  if (typeof oe === "object" && oe.type === "failed-plugin-details") {
    let plugin_16 = oe.plugin,
      X = plugin_16.errors[0],
      children_28 = X ? Io(X) : "Failed to load";
    return r(s, {
      flexDirection: "column",
      children: [r(n, {
        children: [e(n, {
          bold: !0,
          children: Wn(plugin_16.name)
        }), r(n, {
          dimColor: !0,
          children: [" ", "@", " ", Wn($A(plugin_16.marketplace))]
        }), r(n, {
          dimColor: !0,
          children: [" (", plugin_16.scope, ")"]
        })]
      }), e(n, {
        color: "error",
        children: children_28
      }), plugin_16.scope === "managed" ? e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          children: "Managed by your organization \u2014 contact your admin"
        })
      }) : Sp(plugin_16.marketplace) ? null : r(xF, {
        active: !0,
        marginTop: 1,
        children: [r(n, {
          "aria-hidden": !0,
          color: "suggestion",
          children: [te.pointer, " "]
        }), e(n, {
          bold: !0,
          children: "Remove"
        })]
      }), selectionDisabled_2 && e(n, {
        children: "Processing\u2026"
      }), e(ls, {
        error: error_15 && Nd(error_15)
      }), Sp(plugin_16.marketplace) && e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          children: Lh(plugin_16.marketplace)
        })
      }), e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          children: r(Se, {
            children: [plugin_16.scope !== "managed" && !Sp(plugin_16.marketplace) && e(gt, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "remove"
            }), e(gt, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "go back"
            })]
          })
        })
      })]
    });
  }
  if (typeof oe === "object" && oe.type === "skill-detail") {
    let skill = oe.skill,
      X = [skill.override, ...xh.filter(item => item !== skill.override)],
      ne = async override_2 => {
        if (override_2 === skill.override) return;
        let {
          error: error_16
        } = await In("localSettings", {
          skillOverrides: {
            [skill.cmdName]: Vd(skill, override_2)
          }
        }, void 0, storageV5_13);
        if (error_16) {
          we(error_16.message);
          return;
        }
        Qt(Pe => new Set(Pe).add(skill.id)), jt(Pe => Pe + 1), ve({
          type: "skill-detail",
          skill: {
            ...skill,
            override: override_2
          }
        });
      };
    return r(s, {
      flexDirection: "column",
      gap: 1,
      children: [e(n, {
        bold: !0,
        children: skill.name
      }), skill.description && e(n, {
        dimColor: !0,
        children: skill.description
      }), skill.whenToUse && r(n, {
        dimColor: !0,
        children: ["When to use: ", skill.whenToUse]
      }), r(n, {
        dimColor: !0,
        children: ["Source: ", skill.source, " \xB7 ~", skill.tokenEstimate, " tokens"]
      }), r(n, {
        dimColor: !0,
        children: ["Usage:", " ", skill.usage ? `${skill.usage.count}\xD7 \xB7 last used ${skill.usage.daysSinceUse === 0 ? "today" : `${skill.usage.daysSinceUse}d ago`}` : "never invoked"]
      }), skill.allowedTools && skill.allowedTools.length > 0 && r(n, {
        dimColor: !0,
        children: ["Allowed tools: ", Oh(skill.allowedTools)]
      }), skill.skillRoot && r(n, {
        dimColor: !0,
        children: ["Path: ", skill.skillRoot]
      }), skill.lockSource === "policy" || skill.lockSource === "flag" ? r(n, {
        dimColor: !0,
        children: ["State: ", skill.override, " (locked by ", skill.lockSource, " settings)"]
      }) : skill.lockSource === "reserved-name" ? r(n, {
        dimColor: !0,
        children: ["State: ", skill.override, " (can't be changed here \u2014 settings can't store an entry named ", skill.cmdName, "; rename the skill's folder or command file to configure it)"]
      }) : r(s, {
        flexDirection: "column",
        children: [r(n, {
          children: ["State:", skill.lockSource === "author" && r(n, {
            dimColor: !0,
            children: [" ", "(on/name-only locked by frontmatter disable-model-invocation)"]
          })]
        }), e(tn, {
          visibleCount: 4,
          onSelect: ge => {
            let he = X[ge];
            if (skill.lockSource === "author" && he !== "off") {
              ne("user-invocable-only");
              return;
            }
            ne(he);
          },
          children: X.map(ge => {
            let he = skill.lockSource === "author" && ge !== "user-invocable-only" && ge !== "off";
            return e(tn.Item, {
              label: ge,
              icon: ge === skill.override ? e(ft, {
                status: "success",
                "aria-label": "current:"
              }) : e(ft, {
                status: "pending",
                "aria-label": ""
              }),
              meta: he ? ["locked"] : []
            }, ge);
          })
        }, skill.override)]
      }), r(Se, {
        children: [e(q, {
          chord: "Enter",
          action: "set state"
        }), e(n, {
          dimColor: !0,
          children: " \xB7 "
        }), e(q, {
          chord: "Esc",
          action: "go back"
        })]
      })]
    });
  }
  if (typeof oe === "object" && oe.type === "mcp-detail") {
    let client_4 = oe.client,
      serverToolsCount_4 = u9(U, client_4.name).length,
      onViewTools_3 = () => {
        ve({
          type: "mcp-tools",
          client: client_4
        });
      },
      onCancel_10 = () => {
        ve("plugin-list");
      },
      onComplete_4 = et => {
        if (et) setResult_7(et);
        ve("plugin-list");
      },
      scope_15 = client_4.config.scope,
      kt = client_4.config.type ?? "stdio",
      displayEndpoint = Xo ?? HF(client_4.name, client_4.config);
    if (kt === "stdio") {
      let server_5 = {
        name: client_4.name,
        client: client_4,
        scope: scope_15,
        displayEndpoint: displayEndpoint,
        transport: "stdio",
        config: client_4.config
      };
      return e(ubn, {
        server: server_5,
        serverToolsCount: serverToolsCount_4,
        onViewTools: onViewTools_3,
        onCancel: onCancel_10,
        onComplete: onComplete_4,
        borderless: !0
      });
    } else if (kt === "sse") {
      let server_6 = {
        name: client_4.name,
        client: client_4,
        scope: scope_15,
        displayEndpoint: displayEndpoint,
        transport: "sse",
        isAuthenticated: void 0,
        config: client_4.config
      };
      return e(att, {
        server: server_6,
        serverToolsCount: serverToolsCount_4,
        onViewTools: onViewTools_3,
        onCancel: onCancel_10,
        onComplete: onComplete_4,
        borderless: !0
      });
    } else if (kt === "http") {
      let server_7 = {
        name: client_4.name,
        client: client_4,
        scope: scope_15,
        displayEndpoint: displayEndpoint,
        transport: "http",
        isAuthenticated: void 0,
        config: client_4.config
      };
      return e(att, {
        server: server_7,
        serverToolsCount: serverToolsCount_4,
        onViewTools: onViewTools_3,
        onCancel: onCancel_10,
        onComplete: onComplete_4,
        borderless: !0
      });
    } else if (kt === "claudeai-proxy") {
      let server_8 = {
        name: client_4.name,
        client: client_4,
        scope: scope_15,
        displayEndpoint: displayEndpoint,
        transport: "claudeai-proxy",
        isAuthenticated: void 0,
        config: client_4.config
      };
      return e(att, {
        server: server_8,
        serverToolsCount: serverToolsCount_4,
        onViewTools: onViewTools_3,
        onCancel: onCancel_10,
        onComplete: onComplete_4,
        borderless: !0
      });
    }
    return r(s, {
      flexDirection: "column",
      paddingX: 1,
      children: [r(n, {
        color: "warning",
        children: ["No details view for ", client_4.name, " (transport: ", kt, ")."]
      }), e(Se, {
        children: e(gt, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      })]
    });
  }
  if (typeof oe === "object" && oe.type === "mcp-tools") {
    let client_5 = oe.client,
      scope_16 = client_5.config.scope,
      ne = client_5.config.type ?? "stdio",
      displayEndpoint_2 = Xo ?? HF(client_5.name, client_5.config),
      server_9;
    if (ne === "stdio") server_9 = {
      name: client_5.name,
      client: client_5,
      scope: scope_16,
      displayEndpoint: displayEndpoint_2,
      transport: "stdio",
      config: client_5.config
    };else if (ne === "sse") server_9 = {
      name: client_5.name,
      client: client_5,
      scope: scope_16,
      displayEndpoint: displayEndpoint_2,
      transport: "sse",
      isAuthenticated: void 0,
      config: client_5.config
    };else if (ne === "http") server_9 = {
      name: client_5.name,
      client: client_5,
      scope: scope_16,
      displayEndpoint: displayEndpoint_2,
      transport: "http",
      isAuthenticated: void 0,
      config: client_5.config
    };else server_9 = {
      name: client_5.name,
      client: client_5,
      scope: scope_16,
      displayEndpoint: displayEndpoint_2,
      transport: "claudeai-proxy",
      isAuthenticated: void 0,
      config: client_5.config
    };
    return e(Hzt, {
      server: server_9,
      onSelectTool: tool_3 => {
        ve({
          type: "mcp-tool-detail",
          client: client_5,
          tool: tool_3
        });
      },
      onBack: () => ve({
        type: "mcp-detail",
        client: client_5
      })
    });
  }
  if (typeof oe === "object" && oe.type === "mcp-tool-detail") {
    let {
        client: client_6,
        tool: tool_4
      } = oe,
      scope_17 = client_6.config.scope,
      ge = client_6.config.type ?? "stdio",
      displayEndpoint_3 = Xo ?? HF(client_6.name, client_6.config),
      server_10;
    if (ge === "stdio") server_10 = {
      name: client_6.name,
      client: client_6,
      scope: scope_17,
      displayEndpoint: displayEndpoint_3,
      transport: "stdio",
      config: client_6.config
    };else if (ge === "sse") server_10 = {
      name: client_6.name,
      client: client_6,
      scope: scope_17,
      displayEndpoint: displayEndpoint_3,
      transport: "sse",
      isAuthenticated: void 0,
      config: client_6.config
    };else if (ge === "http") server_10 = {
      name: client_6.name,
      client: client_6,
      scope: scope_17,
      displayEndpoint: displayEndpoint_3,
      transport: "http",
      isAuthenticated: void 0,
      config: client_6.config
    };else server_10 = {
      name: client_6.name,
      client: client_6,
      scope: scope_17,
      displayEndpoint: displayEndpoint_3,
      transport: "claudeai-proxy",
      isAuthenticated: void 0,
      config: client_6.config
    };
    return e(Fzt, {
      tool: tool_4,
      server: server_10,
      onBack: () => ve({
        type: "mcp-tools",
        client: client_6
      })
    });
  }
  let Vm = so.getVisibleItems(Yt);
  return r(s, {
    flexDirection: "column",
    width: "100%",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown_10,
    onPaste: onPaste,
    children: [e(s, {
      marginBottom: 1,
      flexDirection: "column",
      children: e(fS, {
        query: St,
        isFocused: isFocused,
        isTerminalFocused: isTerminalFocused_2,
        cursorOffset: cursorOffset_4,
        onCursorOffsetChange: Et,
        onFocus: () => ye(!0)
      })
    }), vr() && e(s, {
      marginBottom: 1,
      paddingLeft: 2,
      children: r(n, {
        color: "warning",
        children: ["Safe mode: installed plugins are disabled this session \u2014 changes to them save but won't load until safe mode is off; built-in plugins are unaffected. ", Ga(Ch()), " to re-enable."]
      })
    }), ut && e(s, {
      marginBottom: 1,
      paddingLeft: 2,
      children: e(n, {
        color: "success",
        children: Nd(ut)
      })
    }), Yt.length === 0 && St && e(s, {
      marginBottom: 1,
      children: r(Eo, {
        children: ['No items match "', St, '"']
      })
    }), r(s, {
      flexDirection: "column",
      onWheel: so.onWheel,
      children: [so.scrollPosition.canScrollUp && e(s, {
        children: r(n, {
          dimColor: !0,
          children: [" ", te.arrowUp, " more above"]
        })
      }), e(LSn, {
        bar: so.bar,
        children: Vm.map((R, index) => {
          let ne = so.toActualIndex(index),
            ge = ne === selectedIndex_5 && !isFocused;
          switch (R.kind) {
            case "spacer":
              return e(s, {
                height: 1
              }, `spacer:${ne}`);
            case "section-header":
              return e(s, {
                paddingLeft: 2,
                children: r(n, {
                  wrap: "truncate-end",
                  children: [e(n, {
                    dimColor: R.section !== "attention",
                    color: R.section === "attention" ? "warning" : void 0,
                    bold: !0,
                    children: R.section === "attention" ? "Needs attention" : R.section === "disused" ? "Not used recently" : "Favorites"
                  }), R.section === "attention" && lo > 0 && r(n, {
                    color: "warning",
                    children: [" ", "\xB7 ", lo, " to sign in \xB7", " ", e(Zr, {})]
                  })]
                })
              }, `section:${R.section}`);
            case "scope-header":
              return e(s, {
                paddingLeft: 2,
                children: e(n, {
                  dimColor: !0,
                  bold: !0,
                  children: Rh(R.scope)
                })
              }, `scope:${ne}`);
            case "disabled-header":
              return e(xF, {
                active: ge,
                paddingLeft: 2,
                children: r(n, {
                  color: ge ? "suggestion" : void 0,
                  children: [e(n, {
                    "aria-hidden": !0,
                    children: ge ? `${te.pointer} ` : "  "
                  }), showDisabled_2 ? te.arrowDown : te.arrowRight, " ", "Show", R.disabledCount > 0 && r(Q, {
                    children: [" ", "disabled ", r(n, {
                      dimColor: !0,
                      children: ["(", R.disabledCount, ")"]
                    })]
                  }), R.disabledCount > 0 && R.unusedConnectorCount > 0 && " \xB7", R.unusedConnectorCount > 0 && r(Q, {
                    children: [" ", "unused claude.ai connectors", " ", r(n, {
                      dimColor: !0,
                      children: ["(", R.unusedConnectorCount, ")"]
                    })]
                  })]
                })
              }, "section:disabled");
            case "item":
              return e(ql, {
                item: R.item,
                isSelected: ge,
                health: R.item.type === "plugin" ? healthByPluginName_2?.get(R.item.name) : void 0,
                nameWidth: nameWidth,
                statusHoisted: lo > 0 && R.section === "attention"
              }, `${R.section}:${R.item.id}`);
          }
        })
      }), so.scrollPosition.canScrollDown && e(s, {
        children: r(n, {
          dimColor: !0,
          children: [" ", te.arrowDown, " more below"]
        })
      })]
    }), e(s, {
      marginTop: 1,
      marginLeft: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: r(Se, {
          children: [e(n, {
            children: "Type to search"
          }), e(gt, {
            action: "plugin:toggle",
            context: "Plugin",
            fallback: "Space",
            description: "toggle"
          }), e(gt, {
            action: "plugin:favorite",
            context: "Plugin",
            fallback: "f",
            description: "favorite"
          }), e(gt, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "view"
          }), e(gt, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "go back"
          })]
        })
      })
    }), error_15 && e(s, {
      marginTop: 1,
      marginLeft: 1,
      children: e(ls, {
        error: Nd(error_15)
      })
    }), un.size > 0 && e(s, {
      marginLeft: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: changesApplyOnClose ? "Changes apply when you close this menu" : "Run /reload-plugins to apply changes"
      })
    })]
  });
}
function Oh(a) {
  return _n(a.join(", "));
}
async function Wi(a, h) {
  let k = await Ku(h);
  if (eN(k)) return [];
  let plugins = k.plugins,
    C = lk(Object.keys(plugins), a) ?? a,
    x = Hse(plugins[C] ?? []),
    T = [...q6().keys()].some(item => jm(item, a));
  return x || T ? [] : [a];
}
function Lh(a) {
  switch (a) {
    case Tc:
      return "This --plugin-dir copy did not load (see above); nothing is running from it. Fix or drop the directory; edits take effect after /reload-plugins.";
    case $u:
      return "This skills-directory copy did not load (see above) \u2014 fix, delete or rename the directory; edits take effect after /reload-plugins.";
    case Pi:
      return "This claude.ai copy did not load (see above) \u2014 remove or rename the plugin on claude.ai to clear it.";
  }
}
var ms = "Plugin changes apply when the current response finishes (/reload-plugins is queued).",
  Uh = !0,
  gs = () => E("tengu_plugin_menu_close_reload", Uh);
function fs(a, h = phn) {
  if (!a.get().needsRefresh) return "none";
  let k = h() ? "deferred" : "queued";
  return i("tengu_plugin_menu_auto_reload", {
    outcome: c(k)
  }), g("plugin_menu_auto_reload"), k;
}
B();
function ok(z) {
  return z.source;
}
function ik(Ve) {
  return Ve.usageCount > 0;
}
function rk(N) {
  return r(n, {
    children: ["  ", e(n, {
      color: "warning",
      children: yy(N.name)
    }), e(n, {
      dimColor: !0,
      children: `  last used ${N.daysSinceLastUse} days ago`
    })]
  }, N.pluginId);
}
function Es(a) {
  return xRn(a).then(report => {
    if (report.rows.length === 0) p("cli_skill_doctor", "no_user_skills");else if (report.weekTokensNote !== null) p("cli_skill_doctor", "scan_policy_denied");else g("cli_skill_doctor");
    return {
      ok: !0,
      report: report
    };
  }, h => {
    let k = h instanceof ENe ? h.cause : h;
    return l(k), m("cli_skill_doctor", h instanceof ENe ? h.featureErrorCode : "render_failed"), {
      ok: !1,
      message: d(k)
    };
  });
}
function la(a) {
  let v = w(11),
    {
      getReport: getReport,
      onExit: onExit
    } = a,
    C;
  if (v[0] !== getReport) C = () => getReport(), v[0] = getReport, v[1] = C;else C = v[1];
  let [reportPromise] = y(C),
    [T] = y(U4t),
    K;
  if (v[2] === S) K = {
    context: "Confirmation"
  }, v[2] = K;else K = v[2];
  rt("confirm:no", onExit, K);
  let N;
  if (v[3] === S) N = e(n, {
    bold: !0,
    children: "Skills loaded this session"
  }), v[3] = N;else N = v[3];
  const children_29 = T.allowed ? "Scanning local sessions\u2026" : "Computing skill usage\u2026";
  let Y;
  if (v[4] !== children_29) Y = r(s, {
    flexDirection: "column",
    children: [N, e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: children_29
      })
    })]
  }), v[4] = children_29, v[5] = Y;else Y = v[5];
  let fallback_6 = Y,
    children_30;
  if (v[6] !== reportPromise) children_30 = e(Is, {
    reportPromise: reportPromise
  }), v[6] = reportPromise, v[7] = children_30;else children_30 = v[7];
  let _;
  if (v[8] !== fallback_6 || v[9] !== children_30) _ = e(Xr, {
    fallback: fallback_6,
    children: children_30
  }), v[8] = fallback_6, v[9] = children_30, v[10] = _;else _ = v[10];
  return _;
}
function Is(a) {
  let v = w(22),
    {
      reportPromise: reportPromise_2
    } = a,
    k = $r(reportPromise_2);
  if (!k.ok) {
    let C;
    if (v[0] !== k.message) C = r(n, {
      dimColor: !0,
      wrap: "wrap",
      children: ["Couldn't compute skill usage. Run with --debug for details. (", k.message, ")"]
    }), v[0] = k.message, v[1] = C;else C = v[1];
    return C;
  }
  let {
      rows: rows_2,
      unusedOwned: unusedOwned,
      unusedFromPlugins: unusedFromPlugins,
      unusedFromMcp: unusedFromMcp,
      unusedSynced: unusedSynced,
      unusedMcpServers: unusedMcpServers,
      disusedPlugins: disusedPlugins,
      weekTokensNote: weekTokensNote
    } = k.report,
    C;
  if (v[2] === S) C = e(n, {
    bold: !0,
    children: "Skills loaded this session"
  }), v[2] = C;else C = v[2];
  let _;
  if (v[3] !== rows_2) _ = e(s, {
    flexDirection: "column",
    marginTop: 1,
    children: e(xs, {
      rows: rows_2
    })
  }), v[3] = rows_2, v[4] = _;else _ = v[4];
  let ee;
  if (v[5] !== rows_2.length || v[6] !== weekTokensNote) ee = rows_2.length > 0 && r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [r(n, {
      dimColor: !0,
      wrap: "wrap",
      children: ["  ", "context = this skill's one-line listing in the system prompt, included every turn"]
    }), r(n, {
      dimColor: !0,
      wrap: "wrap",
      children: ["  ", "(dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)"]
    }), weekTokensNote === null ? r(n, {
      dimColor: !0,
      wrap: "wrap",
      children: ["  ", "7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine"]
    }) : r(n, {
      dimColor: !0,
      wrap: "wrap",
      children: ["  ", "7d tokens: ", weekTokensNote]
    })]
  }), v[5] = rows_2.length, v[6] = weekTokensNote, v[7] = ee;else ee = v[7];
  let ce;
  if (v[8] !== rows_2 || v[9] !== unusedFromMcp || v[10] !== unusedFromPlugins || v[11] !== unusedMcpServers || v[12] !== unusedOwned || v[13] !== unusedSynced) ce = e(Rs, {
    rows: rows_2,
    unusedOwned: unusedOwned,
    unusedSynced: unusedSynced,
    unusedFromPlugins: unusedFromPlugins,
    unusedFromMcp: unusedFromMcp,
    unusedMcpServers: unusedMcpServers
  }), v[8] = rows_2, v[9] = unusedFromMcp, v[10] = unusedFromPlugins, v[11] = unusedMcpServers, v[12] = unusedOwned, v[13] = unusedSynced, v[14] = ce;else ce = v[14];
  let fe;
  if (v[15] !== disusedPlugins) fe = e(Ts, {
    disusedPlugins: disusedPlugins
  }), v[15] = disusedPlugins, v[16] = fe;else fe = v[16];
  let de;
  if (v[17] !== _ || v[18] !== ee || v[19] !== ce || v[20] !== fe) de = r(s, {
    flexDirection: "column",
    children: [C, _, ee, ce, fe]
  }), v[17] = _, v[18] = ee, v[19] = ce, v[20] = fe, v[21] = de;else de = v[21];
  return de;
}
function xs(a) {
  let k = w(7),
    {
      rows: rows_3
    } = a;
  if (rows_3.length === 0) {
    let v;
    if (k[0] === S) v = e(n, {
      dimColor: !0,
      children: "  (no skills loaded)"
    }), k[0] = v;else v = k[0];
    return v;
  }
  let v;
  if (k[1] !== rows_3) {
    let {
      cells: cells,
      widths: widths
    } = $4t(rows_3);
    const T = S7("skill", widths.name);
    const K = S7("source", widths.source);
    const N = z$("context", widths.context);
    const D = z$("7d tokens", widths.week);
    const Y = widths.uses + 1;
    let j;
    if (k[3] !== Y) j = z$("uses", Y), k[3] = Y, k[4] = j;else j = k[4];
    const children_31 = `  ${T}  ${K}  ${N}  ${D}  ${j}  last used`;
    let _;
    if (k[5] !== children_31) _ = e(n, {
      dimColor: !0,
      children: children_31
    }), k[5] = children_31, k[6] = _;else _ = k[6];
    v = r(s, {
      flexDirection: "column",
      children: [_, rows_3.map((item, index) => {
        let fe = cells[index];
        return r(n, {
          color: item.usageCount === 0 ? "warning" : void 0,
          children: [`  ${S7(item.name, widths.name)}  `, e(n, {
            dimColor: !0,
            children: S7(item.source, widths.source)
          }), `  ${z$(fe.context, widths.context)}  ${z$(fe.week, widths.week)}  ${z$(String(item.usageCount), widths.uses)}\xD7  ${fe.lastUsed}`]
        }, `${index}:${item.name}`);
      })]
    });
    k[1] = rows_3, k[2] = v;
  } else v = k[2];
  return v;
}
function Rs(a) {
  let K = w(33),
    {
      rows: rows_4,
      unusedOwned: unusedOwned_2,
      unusedFromPlugins: unusedFromPlugins_2,
      unusedFromMcp: unusedFromMcp_2,
      unusedSynced: unusedSynced_2,
      unusedMcpServers: unusedMcpServers_2
    } = a;
  if (rows_4.length === 0) {
    return null;
  }
  let N, D, Y, flexDirection_2, marginTop, _, ee, ce;
  if (K[0] !== unusedFromPlugins_2 || K[1] !== unusedMcpServers_2 || K[2] !== unusedOwned_2.length || K[3] !== unusedSynced_2.length) {
    let fe = L(unusedFromPlugins_2.map(ok));
    let de;
    if (K[12] !== unusedMcpServers_2) de = unusedMcpServers_2.length > 0 ? `, from ${unusedMcpServers_2.join(", ")}` : "", K[12] = unusedMcpServers_2, K[13] = de;else de = K[13];
    D = de;
    Y = unusedMcpServers_2.length <= 1;
    N = s;
    flexDirection_2 = "column";
    marginTop = 1;
    if (K[14] !== unusedOwned_2.length) _ = unusedOwned_2.length > 0 && e(n, {
      color: "warning",
      wrap: "wrap",
      children: `${unusedOwned_2.length} ${O(unusedOwned_2.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`
    }), K[14] = unusedOwned_2.length, K[15] = _;else _ = K[15];
    if (K[16] !== unusedSynced_2.length) ee = unusedSynced_2.length > 0 && e(n, {
      color: "warning",
      wrap: "wrap",
      children: `${unusedSynced_2.length} ${O(unusedSynced_2.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${unusedSynced_2.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`
    }), K[16] = unusedSynced_2.length, K[17] = ee;else ee = K[17];
    ce = unusedFromPlugins_2.length > 0 && e(n, {
      color: "warning",
      wrap: "wrap",
      children: `${unusedFromPlugins_2.length} plugin ${O(unusedFromPlugins_2.length, "skill")} loaded but never invoked, from ${fe.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${fe.length === 1 ? "the plugin" : "those plugins"} in the Installed tab.`
    });
    K[0] = unusedFromPlugins_2, K[1] = unusedMcpServers_2, K[2] = unusedOwned_2.length, K[3] = unusedSynced_2.length, K[4] = N, K[5] = D, K[6] = Y, K[7] = flexDirection_2, K[8] = marginTop, K[9] = _, K[10] = ee, K[11] = ce;
  } else N = K[4], D = K[5], Y = K[6], flexDirection_2 = K[7], marginTop = K[8], _ = K[9], ee = K[10], ce = K[11];
  let de;
  if (K[18] !== D || K[19] !== Y || K[20] !== unusedFromMcp_2.length) de = unusedFromMcp_2.length > 0 && e(n, {
    color: "warning",
    wrap: "wrap",
    children: `${unusedFromMcp_2.length} MCP ${O(unusedFromMcp_2.length, "skill")} loaded but never invoked${D}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${Y ? "that server" : "those servers"} off in /mcp also removes ${Y ? "its" : "their"} tools.`
  }), K[18] = D, K[19] = Y, K[20] = unusedFromMcp_2.length, K[21] = de;else de = K[21];
  let pe;
  if (K[22] !== rows_4) pe = rows_4.every(ik) && e(n, {
    color: "success",
    children: "All loaded skills have been used at least once."
  }), K[22] = rows_4, K[23] = pe;else pe = K[23];
  let ye;
  if (K[24] !== N || K[25] !== flexDirection_2 || K[26] !== marginTop || K[27] !== _ || K[28] !== ee || K[29] !== ce || K[30] !== de || K[31] !== pe) ye = r(N, {
    flexDirection: flexDirection_2,
    marginTop: marginTop,
    children: [_, ee, ce, de, pe]
  }), K[24] = N, K[25] = flexDirection_2, K[26] = marginTop, K[27] = _, K[28] = ee, K[29] = ce, K[30] = de, K[31] = pe, K[32] = ye;else ye = K[32];
  return ye;
}
function Ts(a) {
  let k = w(8),
    {
      disusedPlugins: disusedPlugins_2
    } = a;
  if (disusedPlugins_2.length === 0) {
    return null;
  }
  let v;
  if (k[0] === S) v = e(n, {
    bold: !0,
    children: "Plugins not used recently"
  }), k[0] = v;else v = k[0];
  let children_32;
  if (k[1] !== disusedPlugins_2) children_32 = disusedPlugins_2.map(rk), k[1] = disusedPlugins_2, k[2] = children_32;else children_32 = k[2];
  let x;
  if (k[3] !== children_32) x = e(s, {
    flexDirection: "column",
    marginTop: 1,
    children: children_32
  }), k[3] = children_32, k[4] = x;else x = k[4];
  let T;
  if (k[5] === S) T = e(s, {
    marginTop: 1,
    children: r(n, {
      dimColor: !0,
      children: ["  ", "Manage these in the Installed tab"]
    })
  }), k[5] = T;else T = k[5];
  let K;
  if (k[6] !== x) K = r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [v, x, T]
  }), k[6] = x, k[7] = K;else K = k[7];
  return K;
}
B();
function ck(de) {
  return `${te.warning} ${de}`;
}
var sa = `Usage: /plugin tag [path] [--push] [--dry-run] [-f|--force]

Create a {name}--v{version} git tag for the plugin at <path> (default: .).
Validates plugin.json and any enclosing marketplace entry agree on the version.

For -m/--message and --remote, use the CLI: claude plugin tag --help`;
function da(a) {
  let K = w(9),
    {
      onComplete: onComplete_5,
      path: path,
      push: push,
      dryRun: dryRun,
      force: force,
      unknownFlag: unknownFlag
    } = a,
    N,
    D;
  if (K[0] !== dryRun || K[1] !== force || K[2] !== onComplete_5 || K[3] !== path || K[4] !== push || K[5] !== unknownFlag) N = () => {
    Y();
    async function Y() {
      if (unknownFlag !== void 0) {
        onComplete_5(unknownFlag === "--help" || unknownFlag === "-h" ? sa : `${te.cross} Unexpected argument "${unknownFlag}".

${sa}`);
        return;
      }
      let j = await jzt(path ?? ".", {
        force: force
      });
      let U = j.warnings.map(ck);
      if (!j.ok) {
        U.push(`${te.cross} ${j.error}`), onComplete_5(U.join(`
`));
        return;
      }
      let {
        plan: plan
      } = j;
      if (U.push(`Plugin:  ${plan.pluginName}`, `Version: ${plan.version} (from ${plan.versionFrom})`), plan.marketplace) U.push(`Marketplace entry: plugins[${plan.marketplace.entryIndex}] in ${plan.marketplace.path}` + (plan.marketplace.entryVersion ? ` (version: ${plan.marketplace.entryVersion})` : ""));
      U.push(`Tag:     ${plan.tag}`, "");
      let ee = `git -C ${plan.gitRoot} push ${force ? "--force " : ""}origin refs/tags/${plan.tag}`;
      if (dryRun) {
        U.push(`${te.tick} Dry run \u2014 would create tag ${plan.tag} at HEAD in ${plan.gitRoot}`, `  git -C ${plan.gitRoot} tag ${force ? "-f " : ""}-a ${plan.tag} -m "${vwt(plan, void 0)}"`, `  ${ee}`), onComplete_5(U.join(`
`));
        return;
      }
      let ce = await Wzt(plan, {
        push: push,
        force: force,
        message: void 0,
        remote: "origin",
        allowGitTerminalPrompt: !1
      });
      if (!ce.ok) {
        U.push(`${te.cross} ${ce.error}`), onComplete_5(U.join(`
`));
        return;
      }
      U.push(`${te.tick} Created tag ${plan.tag}`), U.push(ce.pushed ? `${te.tick} Pushed to origin` : `  Push with: ${ee}`), U.push("", "For -m/--message and --remote, use: claude plugin tag --help"), onComplete_5(U.join(`
`));
    }
  }, D = [onComplete_5, path, push, dryRun, force, unknownFlag], K[0] = dryRun, K[1] = force, K[2] = onComplete_5, K[3] = path, K[4] = push, K[5] = unknownFlag, K[6] = N, K[7] = D;else N = K[6], D = K[7];
  P(N, D);
  let fe;
  if (K[8] === S) fe = e(s, {
    flexDirection: "column",
    children: e(n, {
      children: "Preparing tag\u2026"
    })
  }), K[8] = fe;else fe = K[8];
  return fe;
}
B();
function yk(pe) {
  return `${pe}
`;
}
function hk(ye) {
  return ye.success;
}
function bk(z) {
  return z.warnings.length > 0;
}
function ma(a) {
  let v = w(5),
    {
      onComplete: onComplete_6,
      path: path_2
    } = a,
    C,
    x;
  if (v[0] !== onComplete_6 || v[1] !== path_2) C = () => {
    let de = async function de() {
      if (!path_2) {
        onComplete_6(`Usage: /plugin validate <path>

Validate a plugin or marketplace manifest, or the skills, agents,
and commands in a directory.

Examples:
  /plugin validate .claude-plugin/plugin.json
  /plugin validate /path/to/plugin-directory
  /plugin validate .claude/skills
  /plugin validate .claude
  /plugin validate .

When given a directory, validates .claude-plugin/marketplace.json
or .claude-plugin/plugin.json (both, and the plugin, if both exist).
With no manifest, the components are validated instead: a directory
named skills, agents, or commands validates its own; a directory
named .claude validates the ones inside it; any other directory
validates the ones under .claude, plus its top-level ones if a
.claude-plugin directory or a skills/<name>/SKILL.md marks it as a
plugin checkout.

Or from the command line:
  claude plugin validate <path>`);
        return;
      }
      ;
      try {
        let {
          manifest: manifest,
          contents: contents,
          resolvedPath: resolvedPath
        } = await vqe(path_2);
        let Y = manifest ? [manifest, ...contents] : contents;
        let j = manifest ? `Validating ${manifest.fileType} manifest: ${manifest.filePath}

` : `Validating components in: ${resolvedPath}

`;
        for (const U of Y) {
          if (U !== manifest) j = j + `Validating ${U.fileType}: ${U.filePath}

`;
          if (U.errors.length > 0) j = j + `${te.cross} Found ${U.errors.length} ${O(U.errors.length, "error")}:

`, U.errors.forEach(item => {
            j = j + `  ${te.pointer} ${item.path}: ${item.message}
`;
          }), j = j + `
`;
          if (U.warnings.length > 0) j = j + `${te.warning} Found ${U.warnings.length} ${O(U.warnings.length, "warning")}:

`, U.warnings.forEach(item => {
            j = j + `  ${te.pointer} ${item.path}: ${item.message}
`;
          }), j = j + `
`;
          if (U.notes !== void 0) U.notes.forEach(item => {
            j = j + `  ${te.pointer} ${item}
`;
          }), j = j + `
`;
        }
        if (j = j + zzt(await Gzt(path_2, manifest, contents)).map(yk).join(""), Y.every(hk)) j = j + (Y.some(bk) ? `${te.tick} Validation passed with warnings
` : `${te.tick} Validation passed
`), process.exitCode = 0;else j = j + `${te.cross} Validation failed
`, process.exitCode = 1;
        onComplete_6(j);
      } catch (error) {
        let fe = error;
        process.exitCode = 2, t(`Plugin validation failed unexpectedly for ${path_2}: ${d(fe)}`, {
          level: "error"
        }), onComplete_6(`${te.cross} Unexpected error during validation: ${ih(d(fe), 200)}`);
      }
    };
    de();
  }, x = [onComplete_6, path_2], v[0] = onComplete_6, v[1] = path_2, v[2] = C, v[3] = x;else C = v[2], x = v[3];
  P(C, x);
  let T;
  if (v[4] === S) T = e(s, {
    flexDirection: "column",
    children: e(n, {
      children: "Running validation..."
    })
  }), v[4] = T;else T = v[4];
  return T;
}
B();
var vk = "user",
  wk = {
    activated: " Plugin is now active.",
    "needs-config": ` Plugin is now active.${Vo}`,
    "load-failed": " The plugin couldn't be loaded \u2014 see /plugin for details.",
    "reload-required": " Run /reload-plugins to apply."
  };
function As({
  spec: spec,
  onComplete: onComplete_7,
  onInstallComplete: onInstallComplete_7
}) {
  let {
      storageV5: storageV5_14
    } = Oe(),
    C = A({
      onComplete: onComplete_7,
      onInstallComplete: onInstallComplete_7
    }),
    x = A(!1);
  return C.current = {
    onComplete: onComplete_7,
    onInstallComplete: onInstallComplete_7
  }, P(() => {
    if (x.current) return;
    x.current = !0, Sk(spec, storageV5_14, C.current).then(T => C.current.onComplete(Wn(T)));
  }, [spec, storageV5_14]), e(Wr, {
    message: Wn(`Installing ${spec}\u2026`)
  });
}
async function Sk(a, h, {
  onInstallComplete: onInstallComplete_8
}) {
  try {
    let v = await ltt(a, vk, {}, h);
    if (!v.success) return `${te.cross} ${v.message}`;
    let {
        pluginId: pluginId_16
      } = v,
      T = wk[onInstallComplete_8 !== void 0 && pluginId_16 !== void 0 ? await onInstallComplete_8([pluginId_16]) : "reload-required"];
    return `${te.tick} ${v.message}.${T}`;
  } catch (error) {
    return `${te.cross} ${d(error)}`;
  }
}
function nv() {
  return null;
}
function ov(ye) {
  return `  \u2022 ${wwt(ye)}`;
}
function iv(Ze) {
  return Ze.plugins.errors;
}
function rv(Et) {
  return Et.plugins.enabled;
}
function av(ze) {
  return ze.plugins.disabled;
}
function lv(ht) {
  return ht.source;
}
function sv(T) {
  return T.workerInventory?.plugins ?? null;
}
function cv(K) {
  return Gn(K);
}
function uv(Tn) {
  return Tn.plugins.errors;
}
function dv(jn) {
  return jn.plugins.enabled;
}
function pv(xo) {
  return xo.plugins.disabled;
}
function gv(bi) {
  return bi.plugins.installationStatus;
}
function fv(Ma) {
  return Ma.status === "failed";
}
function yv(Fo) {
  return Fo.name;
}
function hv(Xo) {
  return Math.max(0, Xo - 1);
}
function kv(so) {
  return HPt(so) && QD(so.name);
}
function bv(xc) {
  return xc.name;
}
function vv() {
  return new Set();
}
function Sv(Ma) {
  return !qOe(Ma);
}
function wv(Fo) {
  let Xo = F(Fo.plugins.errors, Sv);
  for (const so of Fo.plugins.installationStatus.marketplaces) {
    if (so.status === "failed") Xo++;
  }
  return Xo;
}
function fc(a) {
  let v = w(5),
    {
      onComplete: onComplete_8
    } = a,
    {
      storageV5: storageV5_15
    } = Oe(),
    C,
    x;
  if (v[0] !== onComplete_8 || v[1] !== storageV5_15) C = () => {
    let fe = async function fe() {
      let T = await ic(storageV5_15);
      let K = Object.keys(T);
      let N = await yYe().catch(nv);
      let {
        available: available,
        hosted: hosted
      } = _Ye(N, T);
      let j = N?.browseOnly ?? [];
      if (K.length === 0 && available.length === 0 && hosted.length === 0 && j.length === 0) onComplete_8("No marketplaces configured");else {
        let U = K.length > 0 ? ["Configured marketplaces:", ...K.map(ov)] : ["No marketplaces configured"];
        if (available.length > 0 || hosted.length > 0 || j.length > 0) U.push("From claude.ai:");
        for (const _ of available) U.push(`  \u2022 ${Wn(wwt(_.name))} (available from claude.ai${_.scope ? `, ${_.scope}` : ""} \u2014 not added) \xB7 ${Wn(lHe(_.source))}`);
        for (const ee of hosted) U.push(`  \u2022 ${Wn(MAt(ee))} \u2014 hosted on claude.ai, ${DAe(ee.scope)} \xB7 not added`);
        for (const ce of j) U.push(`  \u2022 ${Wn(Git(ce))} (browse on claude.ai)`);
        onComplete_8(U.join(`
`));
      }
    };
    fe().catch(de => onComplete_8(`Error loading marketplaces: ${d(de)}`));
  }, x = [onComplete_8, storageV5_15], v[0] = onComplete_8, v[1] = storageV5_15, v[2] = C, v[3] = x;else C = v[2], x = v[3];
  P(C, x);
  let pe;
  if (v[4] === S) pe = e(n, {
    children: "Loading marketplaces..."
  }), v[4] = pe;else pe = v[4];
  return pe;
}
function yc(a) {
  let T = w(8),
    {
      onComplete: onComplete_9,
      filter: filter
    } = a,
    v = V(iv),
    C = V(rv),
    x = V(av),
    K,
    N;
  if (T[0] !== C || T[1] !== filter || T[2] !== x || T[3] !== v || T[4] !== onComplete_9) K = () => {
    let D = qd();
    let Y = Object.keys(D.plugins).sort();
    if (Y.length === 0) {
      onComplete_9("No plugins installed. Use `/plugin install` to install a plugin.");
      return;
    }
    let j = q6();
    let U = new Set(C.map(lv));
    let _ = ["Installed plugins:"];
    let ee = 0;
    for (const ce of Y) {
      let fe = nt(ce, "@");
      let de = j.has(ce);
      if (filter !== void 0 && filter === "enabled" !== de) {
        continue;
      }
      let ye = v.some(item => !qOe(item) && (item.source === ce || "plugin" in item && item.plugin === fe));
      let z = ye ? `${te.cross} failed to load` : de ? `${te.tick} enabled` : `${te.cross} disabled`;
      let Ve = !ye && de !== U.has(ce) ? " \u2014 run /reload-plugins to apply" : "";
      let He = (C.find(item => item.source === ce) ?? x.find(item => item.source === ce))?.manifest.version;
      for (const oe of D.plugins[ce] ?? []) {
        let ve = rQt(oe.version, He);
        let St = ve ? `${Ut(Rt(ve, 100))}, ${oe.scope}` : oe.scope;
        _.push(`  \u2022 ${ce} (${St}) ${z}${Ve}`), ee++;
      }
    }
    if (ee === 0) {
      onComplete_9(`No ${filter} plugins.`);
      return;
    }
    onComplete_9(_.join(`
`));
  }, N = [onComplete_9, v, C, x, filter], T[0] = C, T[1] = filter, T[2] = x, T[3] = v, T[4] = onComplete_9, T[5] = K, T[6] = N;else K = T[5], N = T[6];
  P(K, N);
  let Dt;
  if (T[7] === S) Dt = e(n, {
    children: "Loading plugins..."
  }), T[7] = Dt;else Dt = T[7];
  return Dt;
}
function hc() {
  return null;
}
function kc() {
  let a = w(1),
    h;
  if (a[0] === S) h = e(s, {
    marginTop: 1,
    children: e(Ep, {
      status: "info",
      children: "Skills are now managed here under the Skills section."
    })
  }), a[0] = h;else h = a[0];
  return h;
}
function bc() {
  let h = w(7),
    a = V(sv),
    children_33;
  if (h[0] !== a) children_33 = a === null ? "The cloud session hasn't reported which plugins it loaded (it does at the start of each turn)." : a.length === 0 ? "The cloud session loaded no plugins." : `The cloud session loaded: ${a.map(cv).join(", ")}.`, h[0] = a, h[1] = children_33;else children_33 = h[1];
  let v;
  if (h[2] !== children_33) v = e(Ep, {
    status: "info",
    children: children_33
  }), h[2] = children_33, h[3] = v;else v = h[3];
  let C;
  if (h[4] === S) C = e(n, {
    dimColor: !0,
    wrap: "wrap-trim",
    children: "Changes here update this machine's plugins and future cloud sessions (/cloud-plugins decides whether they are sent), and reach a running cloud session only when this machine next attaches to it (or on your first Yes in /cloud-plugins); /reload-plugins re-reads the running session's own."
  }), h[4] = C;else C = h[4];
  let x;
  if (h[5] !== v) x = r(s, {
    marginTop: 1,
    flexDirection: "column",
    children: [v, C]
  }), h[5] = v, h[6] = x;else x = h[6];
  return x;
}
function vc() {
  let a = w(1),
    h;
  if (a[0] === S) h = e(s, {
    marginTop: 1,
    children: e(Ep, {
      status: "info",
      children: "/skill-doctor moved \u2014 skill usage and context costs now live in this Stats tab."
    })
  }), a[0] = h;else h = a[0];
  return h;
}
function wc(a) {
  let editableSources = [],
    k = [{
      source: "userSettings",
      scope: "user"
    }, {
      source: "projectSettings",
      scope: "project"
    }, {
      source: "localSettings",
      scope: "local"
    }];
  for (let {
    source: source_4,
    scope: scope_18
  } of k) if (xZ(me(source_4), a)) editableSources.push({
    source: source_4,
    scope: scope_18
  });
  let isInPolicy = Boolean(xZ(me("policySettings"), a));
  return {
    editableSources: editableSources,
    isInPolicy: isInPolicy
  };
}
function Em(a) {
  return a?.extraKnownMarketplaces?.[hn]?.autoUpdate !== void 0;
}
function Tp(name_11, h, k = !1) {
  let {
    editableSources: v,
    isInPolicy: isInPolicy_2
  } = wc(name_11);
  if (name_11 === hn) {
    let sources = v.filter(({
      source: source_5
    }) => !(source_5 === "userSettings" && Em(me(source_5))));
    if (k && sources.length > 0) return {
      kind: "remove-extra-marketplace",
      name: name_11,
      sources: sources,
      keepEnabledPlugins: !0
    };
    if (k && isInPolicy_2) return {
      kind: "managed-only",
      name: name_11
    };
    return Mm(h);
  }
  if (v.length > 0) return {
    kind: "remove-extra-marketplace",
    name: name_11,
    sources: v
  };
  if (isInPolicy_2) return {
    kind: "managed-only",
    name: name_11
  };
  return Dm(name_11);
}
function Da(a) {
  let h = a.map(item => item.scope);
  return h.length > 1 ? `${h.slice(0, -1).join(", ")}${h.length > 2 ? "," : ""} and ${h.at(-1)}` : h[0] ?? "";
}
function Mp(a, h) {
  if (a.kind === "remove-extra-marketplace") {
    let T = Ge(a.name);
    return a.keepEnabledPlugins ? `Remove "${T}" from extraKnownMarketplaces in ${Da(a.sources)} settings? The built-in ${Tr} and its plugins are not changed.` : `Remove "${T}" from extraKnownMarketplaces in ${Da(a.sources)} settings? Its plugins are also removed from enabledPlugins there.`;
  }
  let k = h.map(item => `"${Ge(item)}"`),
    v = h.includes(hn),
    C = k.filter((item, index) => !(v && h[index] === hn)),
    x = [k.length > 1 ? `Remove the known_marketplaces.json entries named ${k.join(" and ")}?` : `Remove the known_marketplaces.json entry named ${k[0] ?? ""}?`];
  if (C.length > 0) x.push(`Plugins installed from ${C.join(" and ")} are uninstalled, and ${C.length > 1 ? "their" : "its"} extraKnownMarketplaces and enabledPlugins entries in your user, project, and local settings are removed too.`);
  if (v) x.push(`Nothing installed from "${hn}" is uninstalled. Its extraKnownMarketplaces entries in your user, project, and local settings are removed too, except the one in user settings that sets autoUpdate.`);
  if (h.some(rT)) x.push(`Installed ${Tr} plugins not at a commit it lists may have come from ${k.length > 1 ? "these entries" : "this entry"}, so they are turned off (all of them, if its cached list can't be read). The ${Tr} itself stays as it is.`);
  return x.join(" ");
}
function Dm(targetMarketplace_4) {
  return {
    kind: "navigate",
    tab: "marketplaces",
    viewState: {
      type: "manage-marketplaces",
      targetMarketplace: targetMarketplace_4,
      action: "confirm-remove"
    }
  };
}
function Mm(targetPlugin_4) {
  if (pb() !== null && targetPlugin_4 !== void 0) return {
    kind: "navigate",
    tab: "installed",
    viewState: {
      type: "manage-plugins",
      targetPlugin: targetPlugin_4,
      targetMarketplace: hn
    }
  };
  return {
    kind: "navigate",
    tab: "marketplaces",
    viewState: {
      type: "manage-marketplaces",
      targetMarketplace: hn
    }
  };
}
function $p(a, {
  resolveByUninstall: resolveByUninstall
}) {
  return {
    kind: "navigate",
    tab: "installed",
    viewState: {
      type: "manage-plugins",
      targetPlugin: a.name,
      ...(a.marketplace !== void 0 && {
        targetMarketplace: a.marketplace
      }),
      ...(resolveByUninstall && a.marketplace !== void 0 && (!i$(a.marketplace) || a.marketplace === hy) && {
        action: "uninstall"
      })
    }
  };
}
var Hk = new Set(["git-auth-failed", "git-timeout", "network-error"]);
function Ap(a) {
  return a.type === "marketplace-not-found" || a.type === "marketplace-load-failed" || a.type === "marketplace-blocked-by-policy";
}
function Np(a) {
  if (Hk.has(a.type)) return !0;
  if (a.type === "marketplace-load-failed" && a.reason === "cache-miss") return !0;
  if (a.type === "marketplace-not-found") return !0;
  return !1;
}
function _p(a, h, k) {
  let v = nS(a.source),
    C = "marketplace" in a ? a.marketplace : void 0,
    x = h ?? (v || Oi(a.source) !== void 0 ? PW(a.source).name : void 0),
    T = v ?? C ?? Oi(a.source);
  return {
    key: x === void 0 ? void 0 : rr(T ? `${x}@${T}` : x),
    label: x === void 0 ? a.source : T ? `${x} @ ${$A(T)}` : x,
    scope: wen(k, a.source) ?? (x !== void 0 && v ? wen(k, `${x}@${v}`) : void 0),
    named: x !== void 0
  };
}
function Bp(a, h, k, v, C, x, T, K, N) {
  let D = [];
  for (let U of x) {
    let _ = "pluginId" in U ? U.pluginId : "plugin" in U ? U.plugin : void 0;
    D.push({
      label: _ ?? U.source,
      message: Io(U),
      guidance: Do(U) ?? "Restart to retry loading plugins",
      action: {
        kind: "none"
      }
    });
  }
  let Y = new Set();
  for (let U of a) {
    Y.add(U.name);
    let action_3 = Tp(U.name, void 0, !0),
      ee = wc(U.name),
      scope_19 = ee.isInPolicy ? "managed" : ee.editableSources[0]?.scope;
    D.push({
      label: $A(U.name),
      message: U.error ?? "Installation failed",
      guidance: action_3.kind === "managed-only" ? "Managed by your organization \u2014 contact your admin" : void 0,
      action: action_3,
      scope: scope_19
    });
  }
  for (let U of h) {
    let _ = "marketplace" in U ? U.marketplace : U.source;
    if (Y.has(_)) continue;
    Y.add(_);
    let action_4 = Tp(_, "plugin" in U ? U.plugin : void 0),
      ce = wc(_),
      scope_20 = ce.isInPolicy ? "managed" : ce.editableSources[0]?.scope;
    D.push({
      label: $A(_),
      message: Io(U),
      guidance: action_4.kind === "managed-only" ? "Managed by your organization \u2014 contact your admin" : Do(U),
      action: action_4,
      scope: scope_20
    });
  }
  for (let U of C) {
    let _ = HPt(U);
    if (!_ && Y.has(U.name)) continue;
    if (!_) Y.add(U.name);
    let ee = _ ? U.name : zJ(U.name),
      ce = !1;
    ce = U.name === hn && !_, D.push({
      label: ee === U.name ? $A(U.name) : ee,
      message: U.error,
      ...(ce && {
        guidance: "Reopen /plugin later to try again. Enter opens it in Marketplaces, where you can update it now or turn it off."
      }),
      action: ce ? Mm() : _ ? {
        kind: "remove-ignored-name-entries",
        name: U.name
      } : Dm(U.name)
    });
  }
  let j = new Set();
  for (let U of k) {
    let _ = _p(U, uke(U), K);
    if (_.key !== void 0 && j.has(_.key)) continue;
    if (_.key !== void 0) j.add(_.key);
    let ee = qOe(U);
    D.push({
      label: _.label,
      message: Io(U),
      guidance: Do(U),
      action: _.named && !ee ? $p(A2r(U, N), {
        resolveByUninstall: !0
      }) : {
        kind: "none"
      },
      isAdvisory: ee || void 0,
      scope: _.scope
    });
  }
  for (let U of v) D.push({
    label: U.source,
    message: Io(U),
    guidance: Do(U),
    action: {
      kind: "none"
    }
  });
  for (let U of T) {
    let _ = _p(U, "plugin" in U ? U.plugin : void 0, K),
      ee = _.key ?? rr(U.source),
      ce = U.type === "mcpb-needs-config" ? `${U.type}:${ee}:${U.serverName}` : "plugin" in U ? ee : `${U.type}:${ee}`;
    if (j.has(ce)) continue;
    j.add(ce), D.push({
      label: _.label,
      message: Yee(U),
      guidance: FPr(U),
      action: U.type === "mcpb-needs-config" && _.named ? $p(A2r(U, N), {
        resolveByUninstall: !1
      }) : {
        kind: "none"
      },
      scope: _.scope,
      isAdvisory: !0
    });
  }
  return D;
}
function Op(a, h, k, v = !1) {
  for (let {
    source: source_6
  } of h) ca(source_6, x => {
    if (!x) return null;
    let T = {},
      K = v && source_6 === "userSettings" && a === hn && Em(x);
    if (xZ(x, a) && !K) T.extraKnownMarketplaces = {
      ...x.extraKnownMarketplaces,
      [a]: void 0
    };
    if (x.enabledPlugins && !v) {
      let N = `@${a}`,
        D = !1,
        Y = {
          ...x.enabledPlugins
        };
      for (let j in Y) if (j.endsWith(N)) Y[j] = void 0, D = !0;
      if (D) T.enabledPlugins = Y;
    }
    return Object.keys(T).length > 0 ? T : null;
  }, void 0, k);
}
function Sc(a) {
  let z = w(59),
    {
      setViewState: setViewState_10,
      setActiveTab: setActiveTab,
      markPluginsChanged: markPluginsChanged
    } = a,
    {
      storageV5: storageV5_16,
      credentials: credentials_9
    } = Oe(),
    T = V(uv),
    K = qi(),
    N = V(dv),
    D = V(pv),
    Y = V(gv),
    j = Un(),
    U = RV(),
    [_, ee] = y(0),
    [ce, fe] = y(null),
    [de, pe] = y(null),
    ye = A(!1),
    Ve;
  if (z[0] === S) Ve = [], z[0] = Ve;else Ve = z[0];
  let [at, We] = y(Ve),
    He,
    oe;
  if (z[1] !== storageV5_16) He = () => {
    (async () => {
      try {
        let ve = await ic(storageV5_16);
        let {
          failures: failures_5
        } = await ype(ve, storageV5_16);
        We(failures_5);
      } catch {}
    })();
  }, oe = [storageV5_16], z[1] = storageV5_16, z[2] = He, z[3] = oe;else He = z[2], oe = z[3];
  P(He, oe);
  let Dt = Y.marketplaces.filter(fv),
    Ze = new Set(Dt.map(yv)),
    Et = [],
    ze = [],
    ht = [],
    bt = [];
  for (const le of T) {
    if (Np(le)) Et.push(le);else if (Ap(le)) {
      if (!Ze.has(le.marketplace)) ze.push(le);
    } else if (uke(le) !== void 0) ht.push(le);else bt.push(le);
  }
  let wt = Bp(Dt, ze, ht, bt, at, Et, K, q6(), [...N, ...D]),
    Qe;
  if (z[4] !== de || z[5] !== setViewState_10) Qe = () => {
    if (de !== null) {
      pe(null);
      return;
    }
    setViewState_10({
      type: "menu"
    });
  }, z[4] = de, z[5] = setViewState_10, z[6] = Qe;else Qe = z[6];
  let Bt;
  if (z[7] === S) Bt = {
    context: "Confirmation"
  }, z[7] = Bt;else Bt = z[7];
  rt("confirm:no", Qe, Bt);
  let sn;
  if (z[8] !== credentials_9 || z[9] !== markPluginsChanged || z[10] !== j || z[11] !== storageV5_16) sn = Ft => {
    let _e = Da(Ft.sources);
    Op(Ft.name, Ft.sources, storageV5_16, Ft.keepEnabledPlugins === !0), cd(storageV5_16, credentials_9);
    let ct = Ft.keepEnabledPlugins === !0;
    j(Ct => ({
      ...Ct,
      plugins: {
        ...Ct.plugins,
        errors: Ct.plugins.errors.filter(item => ct || !("marketplace" in item && item.marketplace === Ft.name)),
        installationStatus: {
          ...Ct.plugins.installationStatus,
          marketplaces: Ct.plugins.installationStatus.marketplaces.filter(item => item.name !== Ft.name)
        }
      }
    })), fe(ct ? `${te.tick} Removed "${Ge(Ft.name)}" from extraKnownMarketplaces in ${_e} settings. The built-in ${Tr} and its plugins are not changed.` : `${te.tick} Removed "${Ge(Ft.name)}" and its enabledPlugins entries from ${_e} settings`), markPluginsChanged();
  }, z[8] = credentials_9, z[9] = markPluginsChanged, z[10] = j, z[11] = storageV5_16, z[12] = sn;else sn = z[12];
  let Kt = sn,
    cn;
  if (z[13] !== U || z[14] !== credentials_9 || z[15] !== markPluginsChanged || z[16] !== storageV5_16) cn = yt => {
    (async () => {
      let jt = !1;
      if (rT(yt.name)) {
        if (ye.current) {
          return;
        }
        ye.current = !0, jt = !0;
      }
      ;
      try {
        let Qt = await w6e(yt.name, void 0, storageV5_16, credentials_9, {
          onlyIgnoredNameEntries: !0
        });
        let un = `${te.tick} Removed marketplace "${Ge(yt.name)}"`;
        let Sn = [yt.name];
        let $n = Qt.kind !== "plugin-directory-built-in";
        let Pn = [];
        if (Qt.kind !== "plugin-directory-built-in") Pn = Qt.removedPluginIds;
        if (Qt.kind === "ignored-plugin-directory-name-entry-removed") {
          let kn = uw();
          let Ot = Qt.removedNames.map(item => D_t(item, kn));
          un = `${te.tick} ${Ot.join(" ")}`;
          let se = ede(Qt.disabledPluginIds, Qt.disabledReason);
          if (se !== null) un = `${un} ${se}`;
          if (Sn = [yt.name, ...Qt.removedNames], $n = Qt.removedNames.length > 0, !$n) un = `${te.tick} ${J8n(yt.name)}`;
        }
        if ($n) i("tengu_marketplace_removed", {
          marketplace_name: mPe(yt.name),
          _PROTO_marketplace_name: yt.name,
          is_official_marketplace: zl(yt.name)
        });
        cd(storageV5_16, credentials_9);
        let Re = Qt.kind === "ignored-plugin-directory-name-entry-removed";
        We(Le => Le.filter(item => !Sn.includes(item.name) || Re && !HPt(item))), U.removeErrorsOf(Pn), fe(un), markPluginsChanged();
      } catch (error) {
        let $t = error;
        fe(`Failed to remove "${Ge(yt.name)}": ${ZT($t)}`);
      }
      if (jt) ye.current = !1;
    })();
  }, z[13] = U, z[14] = credentials_9, z[15] = markPluginsChanged, z[16] = storageV5_16, z[17] = cn;else cn = z[17];
  let Pt = cn,
    we = () => {
      let Je = wt[_];
      if (!Je) {
        return;
      }
      let {
        action: action_5
      } = Je;
      Ke: switch (action_5.kind) {
        case "navigate":
          {
            setActiveTab(action_5.tab), setViewState_10(action_5.viewState);
            break Ke;
          }
        case "remove-extra-marketplace":
          {
            pe(action_5);
            break Ke;
          }
        case "remove-ignored-name-entries":
          {
            pe(action_5);
            break Ke;
          }
        case "managed-only":
          {
            break Ke;
          }
        case "none":
      }
    },
    ln;
  if (z[18] === S) ln = () => ee(hv), z[18] = ln;else ln = z[18];
  const isActive_4 = wt.length > 0 && !de;
  let dt;
  if (z[19] !== isActive_4) dt = {
    context: "Select",
    isActive: isActive_4
  }, z[19] = isActive_4, z[20] = dt;else dt = z[20];
  on({
    "select:previous": ln,
    "select:next": () => ee(ut => Math.min(wt.length - 1, ut + 1)),
    "select:accept": we
  }, dt);
  let Fe;
  if (z[21] !== at) Fe = It => It.kind === "remove-ignored-name-entries" && QD(It.name) ? L([It.name, ...at.filter(kv).map(bv)]) : [It.name], z[21] = at, z[22] = Fe;else Fe = z[22];
  let pt = Fe,
    Jt;
  if (z[23] !== de || z[24] !== Kt || z[25] !== Pt) Jt = function gn(pn) {
    if (pn.ctrl || pn.meta || de === null) {
      return;
    }
    if (pn.key === "up" || pn.key === "down") {
      pn.preventDefault();
      return;
    }
    if (pn.key === "y" || pn.key === "Y") {
      pn.preventDefault();
      let vn = de;
      if (pe(null), vn.kind === "remove-extra-marketplace") Kt(vn);else Pt(vn);
    } else if (pn.key === "n" || pn.key === "N") pn.preventDefault(), pe(null);
  }, z[23] = de, z[24] = Kt, z[25] = Pt, z[26] = Jt;else Jt = z[26];
  let onKeyDown_11 = Jt;
  if (wt.length === 0 && de !== null) pe(null);
  let En = Math.min(_, Math.max(0, wt.length - 1));
  if (En !== _) ee(En);
  let Yn = wt[En]?.action,
    An = Yn && Yn.kind !== "none" && Yn.kind !== "managed-only";
  if (wt.length === 0) {
    let Bn;
    if (z[27] === S) Bn = e(s, {
      marginLeft: 1,
      children: e(Eo, {
        children: "No plugin errors"
      })
    }), z[27] = Bn;else Bn = z[27];
    let On;
    if (z[28] !== ce) On = ce && e(s, {
      marginTop: 1,
      marginLeft: 1,
      children: e(n, {
        color: "claude",
        children: Wn(ce)
      })
    }), z[28] = ce, z[29] = On;else On = z[29];
    let lt;
    if (z[30] === S) lt = e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "go back"
        })
      })
    }), z[30] = lt;else lt = z[30];
    let At;
    if (z[31] !== On) At = r(s, {
      flexDirection: "column",
      children: [Bn, On, lt]
    }), z[31] = On, z[32] = At;else At = z[32];
    return At;
  }
  const $e = s,
    flexDirection_3 = "column",
    gap = 1;
  let lt;
  if (z[33] !== En || z[34] !== de) lt = (_t, vt) => {
    let bold_2 = vt === En;
    let color_4 = _t.isAdvisory ? "warning" : "error";
    let en = bold_2 ? te.pointer : _t.isAdvisory ? te.triangleUpOutline : te.cross;
    return r(xF, {
      active: bold_2 && !de,
      marginLeft: 1,
      flexDirection: "column",
      children: [r(n, {
        children: [r(n, {
          "aria-hidden": bold_2,
          color: bold_2 ? "suggestion" : color_4,
          children: [en, " "]
        }), e(n, {
          bold: bold_2,
          children: Wn(_t.label)
        }), _t.scope && r(n, {
          dimColor: !0,
          children: [" (", _t.scope, ")"]
        })]
      }), e(s, {
        marginLeft: 3,
        children: e(n, {
          color: color_4,
          wrap: "wrap-trim",
          children: Nd(_t.message)
        })
      }), _t.guidance && e(s, {
        marginLeft: 3,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          wrap: "wrap-trim",
          children: Nd(_t.guidance)
        })
      })]
    }, vt);
  }, z[33] = En, z[34] = de, z[35] = lt;else lt = z[35];
  const At = wt.map(lt);
  let Dn;
  if (z[36] !== onKeyDown_11 || z[37] !== de || z[38] !== pt) Dn = de && e(ko, {
    onKeyDown: onKeyDown_11,
    children: e(xF, {
      active: !0,
      marginLeft: 1,
      children: r(n, {
        color: "warning",
        wrap: "wrap-trim",
        children: [Mp(de, pt(de)), " ", "Press ", e(n, {
          bold: !0,
          children: "y"
        }), " to remove or ", e(n, {
          bold: !0,
          children: "n"
        }), " to keep", " ", pt(de).length > 1 ? "them" : "it", "."]
      })
    })
  }), z[36] = onKeyDown_11, z[37] = de, z[38] = pt, z[39] = Dn;else Dn = z[39];
  let xn;
  if (z[40] !== ce) xn = ce && e(s, {
    marginLeft: 1,
    children: e(n, {
      color: "claude",
      children: Wn(ce)
    })
  }), z[40] = ce, z[41] = xn;else xn = z[41];
  let oo;
  if (z[42] !== de) oo = !de && e(gt, {
    action: "select:previous",
    context: "Select",
    fallback: "\u2191",
    description: "navigate"
  }), z[42] = de, z[43] = oo;else oo = z[43];
  let Rn;
  if (z[44] !== An || z[45] !== de) Rn = An && !de && e(gt, {
    action: "select:accept",
    context: "Select",
    fallback: "Enter",
    description: "resolve"
  }), z[44] = An, z[45] = de, z[46] = Rn;else Rn = z[46];
  const description_3 = de ? pt(de).length > 1 ? "keep them" : "keep it" : "go back";
  let po;
  if (z[47] !== description_3) po = e(gt, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: description_3
  }), z[47] = description_3, z[48] = po;else po = z[48];
  let lo;
  if (z[49] !== oo || z[50] !== Rn || z[51] !== po) lo = e(s, {
    children: e(n, {
      dimColor: !0,
      italic: !0,
      children: r(Se, {
        children: [oo, Rn, po]
      })
    })
  }), z[49] = oo, z[50] = Rn, z[51] = po, z[52] = lo;else lo = z[52];
  let qn;
  if (z[53] !== $e || z[54] !== At || z[55] !== Dn || z[56] !== xn || z[57] !== lo) qn = r($e, {
    flexDirection: flexDirection_3,
    gap: gap,
    children: [At, Dn, xn, lo]
  }), z[53] = $e, z[54] = At, z[55] = Dn, z[56] = xn, z[57] = lo, z[58] = qn;else qn = z[58];
  return qn;
}
function rm(a, linkOrigin) {
  switch (a.type) {
    case "help":
      return {
        type: "help"
      };
    case "validate":
      return {
        type: "validate",
        path: a.path
      };
    case "eval":
      return {
        type: "eval",
        target: a.target
      };
    case "tag":
      return {
        type: "tag",
        path: a.path,
        push: a.push,
        dryRun: a.dryRun,
        force: a.force,
        unknownFlag: a.unknownFlag
      };
    case "install":
      if (a.marketplace !== void 0 && a.plugin !== void 0 && kze(`${a.plugin}@${a.marketplace}`) !== null) return {
        type: "npm-install",
        spec: `${a.plugin}@${a.marketplace}`
      };
      if (a.marketplace) return {
        type: "browse-marketplace",
        targetMarketplace: a.marketplace,
        targetPlugin: a.plugin
      };
      if (a.plugin) return {
        type: "discover-plugins",
        targetPlugin: a.plugin
      };
      return {
        type: "discover-plugins"
      };
    case "usage-error":
      return {
        type: "menu"
      };
    case "install-from-source":
      return {
        type: "add-marketplace",
        initialValue: a.marketplaceSource,
        confirmAdd: {
          plugin: a.plugin,
          linkOrigin: linkOrigin
        }
      };
    case "manage":
      return {
        type: "manage-plugins"
      };
    case "stats":
      return {
        type: "stats"
      };
    case "directory":
      return {
        type: "discover-plugins",
        marketplace: hn,
        searchQuery: a.query
      };
    case "uninstall":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "uninstall"
      };
    case "enable":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "enable"
      };
    case "disable":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "disable"
      };
    case "configure":
      return {
        type: "manage-plugins",
        targetPlugin: a.plugin,
        action: "configure"
      };
    case "list":
      return {
        type: "plugin-list",
        filter: a.filter
      };
    case "marketplace":
      if (a.action === "list") return {
        type: "marketplace-list"
      };
      if (a.action === "add") return a.target && linkOrigin ? {
        type: "add-marketplace",
        initialValue: a.target,
        confirmAdd: {
          linkOrigin: !0
        }
      } : {
        type: "add-marketplace",
        initialValue: a.target
      };
      if (a.action === "remove") return {
        type: "manage-marketplaces",
        targetMarketplace: a.target,
        action: "remove"
      };
      if (a.action === "update") return {
        type: "manage-marketplaces",
        targetMarketplace: a.target,
        action: "update"
      };
      return {
        type: "menu"
      };
    case "menu":
    default:
      return {
        type: "discover-plugins"
      };
  }
}
function am(a) {
  if (a.type === "manage-plugins") return "installed";
  if (a.type === "stats") return "stats";
  if (a.type === "manage-marketplaces") return "marketplaces";
  return "discover";
}
function $zt(a) {
  let k = w(21),
    {
      onComplete: onComplete_10
    } = a,
    v;
  if (k[0] !== onComplete_10) v = (...C) => {
    let x = C;
    if (typeof x[0] === "string") x[0] = Ole(x[0]);
    onComplete_10(...x);
  }, k[0] = onComplete_10, k[1] = v;else v = k[1];
  let onComplete_11 = v,
    K = wR(),
    C;
  if (k[2] !== a.args || k[3] !== K) C = () => {
    let command_2 = K ? l3r(K) : null;
    if (command_2 === null) {
      return null;
    }
    let D = Pb(command_2)?.args;
    let Y = kNe(a.args);
    if (D === void 0 || !Nn(kNe(D), Y)) {
      return null;
    }
    let installLinkOff = Y.type === "install-from-source" && !E("tengu_amber_tollgate", !1);
    return {
      command: command_2,
      held: !Tm(Y),
      installLinkOff: installLinkOff
    };
  }, k[2] = a.args, k[3] = K, k[4] = C;else C = k[4];
  let [U] = y(C),
    [_, ee] = y(!1),
    ce = U?.installLinkOff ? "Plugin install links are turned off. To install, type /plugin install yourself." : U?.held === !0 && !/^[\x20-\x7e]*$/.test(U.command) ? "The command from the link has characters that can't be shown faithfully, so it didn't run. To run it, type it yourself." : null,
    fe,
    de;
  if (k[5] !== onComplete_11 || k[6] !== ce) fe = () => {
    if (ce !== null) onComplete_11(ce);
  }, de = [ce, onComplete_11], k[5] = onComplete_11, k[6] = ce, k[7] = fe, k[8] = de;else fe = k[7], de = k[8];
  if (P(fe, de), ce !== null) {
    return null;
  }
  if (U?.held && !_) {
    let onConfirm_2;
    if (k[9] === S) onConfirm_2 = () => ee(!0), k[9] = onConfirm_2;else onConfirm_2 = k[9];
    let onCancel_11;
    if (k[10] !== onComplete_11) onCancel_11 = () => onComplete_11("Cancelled. The command from the link didn't run."), k[10] = onComplete_11, k[11] = onCancel_11;else onCancel_11 = k[11];
    let z;
    if (k[12] !== U.command || k[13] !== onCancel_11) z = e(Kr, {
      command: U.command,
      onConfirm: onConfirm_2,
      onCancel: onCancel_11
    }), k[12] = U.command, k[13] = onCancel_11, k[14] = z;else z = k[14];
    return z;
  }
  let props;
  if (k[15] !== onComplete_11 || k[16] !== a) props = {
    ...a,
    onComplete: onComplete_11
  }, k[15] = onComplete_11, k[16] = a, k[17] = props;else props = k[17];
  const fromLinkPrefill = U !== null;
  let z;
  if (k[18] !== props || k[19] !== fromLinkPrefill) z = e(Cc, {
    props: props,
    fromLinkPrefill: fromLinkPrefill
  }), k[18] = props, k[19] = fromLinkPrefill, k[20] = z;else z = k[20];
  return z;
}
function Cc(a) {
  let _ = w(147),
    {
      props: props_2,
      fromLinkPrefill: fromLinkPrefill_2
    } = a,
    {
      onComplete: onComplete_12,
      args: args,
      showMcpRedirectMessage: showMcpRedirectMessage,
      showSkillsRedirectMessage: showSkillsRedirectMessage,
      showSkillDoctorRedirectMessage: showSkillDoctorRedirectMessage,
      getSessionContext: getSessionContext_2,
      getSkillStatsInputs: getSkillStatsInputs,
      commands: commands_6,
      getReloadCacheImpactOptions: getReloadCacheImpactOptions,
      cloudSession: cloudSession
    } = props_2,
    ee,
    ce;
  if (_[0] !== args || _[1] !== fromLinkPrefill_2) ee = kNe(args), ce = rm(ee, fromLinkPrefill_2), _[0] = args, _[1] = fromLinkPrefill_2, _[2] = ee, _[3] = ce;else ee = _[2], ce = _[3];
  let fe = ce,
    de;
  if (_[4] !== fe || _[5] !== ee.message || _[6] !== ee.type) de = () => {
    let pe = new Br(fe);
    if (ee.type === "usage-error") pe.setResult(ee.message);
    return pe;
  }, _[4] = fe, _[5] = ee.message, _[6] = ee.type, _[7] = de;else de = _[7];
  let [screen_4] = y(de),
    {
      viewState: viewState_7,
      result: result_3,
      error: error_17
    } = Ae(screen_4),
    {
      setViewState: setViewState_11,
      setResult: setResult_8,
      setError: setError_6
    } = screen_4,
    [grantedSuggestions_2] = y(vv),
    St = A(null),
    Dt;
  if (_[8] !== getSkillStatsInputs) Dt = () => {
    if (St.current === null) {
      if (!getSkillStatsInputs) {
        throw Error("Stats tab rendered without getSkillStatsInputs");
      }
      St.current = Es(getSkillStatsInputs());
    }
    return St.current;
  }, _[8] = getSkillStatsInputs, _[9] = Dt;else Dt = _[9];
  let getReport_2 = Dt,
    Et;
  if (_[10] !== fe) Et = am(fe), _[10] = fe, _[11] = Et;else Et = _[11];
  let [selectedTab, setActiveTab_2] = y(Et),
    [inputValue, setInputValue] = y(viewState_7.type === "add-marketplace" ? viewState_7.initialValue || "" : ""),
    [cursorOffset_5, setCursorOffset] = y(0),
    [autoAdd_2, sn] = y(fe.type === "add-marketplace" && !!fe.initialValue && fe.confirmAdd === void 0),
    Ft;
  if (_[12] !== setViewState_11) Ft = _e => {
    if (_e.type === "add-marketplace") {
      let ct = _e.initialValue ?? "";
      setInputValue(ct), setCursorOffset(ct.length), sn(!1);
    }
    setViewState_11(_e);
  }, _[12] = setViewState_11, _[13] = Ft;else Ft = _[13];
  let setViewState_12 = Ft,
    [disableNavigation, onSearchModeChange_5] = y(!1),
    names_2 = na(),
    cn = RV(),
    yt = eVt(),
    {
      storageV5: storageV5_17
    } = Oe(),
    ln = V(wv),
    title_3 = ln > 0 ? `Errors (${ln})` : "Errors",
    cliMode_2 = ee.type === "marketplace" && ee.action === "add" && ee.target !== void 0,
    Sn;
  if (_[14] !== getSkillStatsInputs) Sn = getSkillStatsInputs !== void 0 && cN(), _[14] = getSkillStatsInputs, _[15] = Sn;else Sn = _[15];
  let $n = Sn,
    Pn = A(!1),
    kn;
  if (_[16] !== cn) kn = () => {
    Pn.current = !0, cn.markNeedsRefresh();
  }, _[16] = cn, _[17] = kn;else kn = _[17];
  let Ue = kn,
    Ot;
  if (_[18] !== getReloadCacheImpactOptions) Ot = getReloadCacheImpactOptions !== void 0 && gs(), _[18] = getReloadCacheImpactOptions, _[19] = Ot;else Ot = _[19];
  let changesApplyOnClose_2 = Ot,
    Re = A(!1),
    Le;
  if (_[20] !== cn || _[21] !== changesApplyOnClose_2 || _[22] !== onComplete_12) Le = je => {
    if (Re.current) {
      return;
    }
    Re.current = !0;
    let $t = changesApplyOnClose_2 && Pn.current ? fs(cn) : "none";
    if ($t === "none") {
      onComplete_12(je);
      return;
    }
    onComplete_12($t === "deferred" ? Rm(je, ms) : je, {
      nextInput: "/reload-plugins",
      submitNextInput: !0
    });
  }, _[20] = cn, _[21] = changesApplyOnClose_2, _[22] = onComplete_12, _[23] = Le;else Le = _[23];
  let Pt = Le,
    exitState_5 = qo(Pt),
    Ie;
  if (_[24] !== cn || _[25] !== getReloadCacheImpactOptions || _[26] !== Ue || _[27] !== yt || _[28] !== storageV5_17) Ie = async Ke => {
    if (!getReloadCacheImpactOptions) {
      return Ue(), "reload-required";
    }
    return Pn.current = !0, Ua(() => ({
      ...getReloadCacheImpactOptions(),
      mcpClients: yt.get().clients,
      storageV5: storageV5_17
    }), cn, Ke, storageV5_17);
  }, _[24] = cn, _[25] = getReloadCacheImpactOptions, _[26] = Ue, _[27] = yt, _[28] = storageV5_17, _[29] = Ie;else Ie = _[29];
  let onInstallComplete_9 = Ie,
    ut;
  if (_[30] !== screen_4) ut = xe => {
    let dt = xe;
    Fe: switch (setActiveTab_2(dt), screen_4.setError(null), dt) {
      case "discover":
        {
          screen_4.setViewState({
            type: "discover-plugins"
          });
          break Fe;
        }
      case "installed":
        {
          screen_4.setViewState({
            type: "manage-plugins"
          });
          break Fe;
        }
      case "marketplaces":
        {
          screen_4.setViewState({
            type: "manage-marketplaces"
          });
          break Fe;
        }
      case "errors":
        {
          break Fe;
        }
      case "stats":
    }
  }, _[30] = screen_4, _[31] = ut;else ut = _[31];
  let onTabChange = ut,
    pt,
    Jt;
  if (_[32] !== Pt || _[33] !== result_3 || _[34] !== viewState_7.type) pt = () => {
    if (viewState_7.type === "menu" && !result_3) Pt();
  }, Jt = [viewState_7.type, result_3, Pt], _[32] = Pt, _[33] = result_3, _[34] = viewState_7.type, _[35] = pt, _[36] = Jt;else pt = _[35], Jt = _[36];
  P(pt, Jt);
  let pn = A(viewState_7.type),
    vn,
    gn;
  if (_[37] !== viewState_7.type) vn = () => {
    if (viewState_7.type === pn.current) {
      return;
    }
    pn.current = viewState_7.type;
    let En = {
      "browse-marketplace": "discover",
      "manage-plugins": "installed",
      "manage-marketplaces": "marketplaces"
    }[viewState_7.type];
    if (En) setActiveTab_2(En);
  }, gn = [viewState_7.type], _[37] = viewState_7.type, _[38] = vn, _[39] = gn;else vn = _[38], gn = _[39];
  P(vn, gn);
  let Yn;
  if (_[40] !== screen_4) Yn = () => {
    setActiveTab_2("marketplaces"), screen_4.setViewState({
      type: "manage-marketplaces"
    }), setInputValue(""), screen_4.setError(null);
  }, _[40] = screen_4, _[41] = Yn;else Yn = _[41];
  let An = Yn;
  const isActive_5 = viewState_7.type === "add-marketplace" && viewState_7.confirmAdd === void 0;
  let On;
  if (_[42] !== isActive_5) On = {
    context: "Settings",
    isActive: isActive_5
  }, _[42] = isActive_5, _[43] = On;else On = _[43];
  rt("confirm:no", An, On);
  let lt, At;
  if (_[44] !== Pt || _[45] !== result_3) lt = () => {
    if (result_3) Pt(result_3);
  }, At = [result_3, Pt], _[44] = Pt, _[45] = result_3, _[46] = lt, _[47] = At;else lt = _[46], At = _[47];
  P(lt, At);
  let $e, _t;
  if (_[48] !== onComplete_12 || _[49] !== viewState_7.type) $e = () => {
    if (viewState_7.type === "help") onComplete_12();
  }, _t = [viewState_7.type, onComplete_12], _[48] = onComplete_12, _[49] = viewState_7.type, _[50] = $e, _[51] = _t;else $e = _[50], _t = _[51];
  if (P($e, _t), viewState_7.type === "help") {
    let vt;
    if (_[52] === S) vt = r(s, {
      flexDirection: "column",
      children: [e(n, {
        bold: !0,
        children: "Plugin Command Usage:"
      }), e(n, {
        children: " "
      }), e(n, {
        dimColor: !0,
        children: "Installation:"
      }), e(n, {
        children: " /plugin install - Browse and install plugins"
      }), r(n, {
        children: [" ", "/plugin install <marketplace> - Install from specific marketplace"]
      }), e(n, {
        children: " /plugin install <plugin> - Install specific plugin"
      }), r(n, {
        children: [" ", "/plugin install <plugin>@<market> - Install plugin from marketplace"]
      }), r(n, {
        children: [" ", "/plugin install <plugin> --marketplace <source> - Install plugin from a marketplace source, adding it first"]
      }), e(n, {
        children: " "
      }), e(n, {
        dimColor: !0,
        children: "Management:"
      }), r(n, {
        children: [" ", "/plugin list [--enabled|--disabled] - List installed plugins"]
      }), e(n, {
        children: " /plugin manage - Manage installed plugins"
      }), cN() && e(n, {
        children: " /plugin stats - Show skill usage and context costs"
      }), uw() ? r(n, {
        children: [" ", "/plugin directory [query] - Search the Anthropic Directory in Discover"]
      }) : null, e(n, {
        children: " /plugin enable <plugin> - Enable a plugin"
      }), e(n, {
        children: " /plugin disable <plugin> - Disable a plugin"
      }), e(n, {
        children: " /plugin configure <plugin> - Set userConfig options"
      }), e(n, {
        children: " /plugin uninstall <plugin> - Uninstall a plugin"
      }), e(n, {
        children: " "
      }), e(n, {
        dimColor: !0,
        children: "Marketplaces:"
      }), e(n, {
        children: " /plugin marketplace - Marketplace management menu"
      }), e(n, {
        children: " /plugin marketplace add - Add a marketplace"
      }), r(n, {
        children: [" ", "/plugin marketplace add <path/url> - Add marketplace directly"]
      }), e(n, {
        children: " /plugin marketplace update - Update marketplaces"
      }), r(n, {
        children: [" ", "/plugin marketplace update <name> - Update specific marketplace"]
      }), e(n, {
        children: " /plugin marketplace remove - Remove a marketplace"
      }), r(n, {
        children: [" ", "/plugin marketplace remove <name> - Remove specific marketplace"]
      }), e(n, {
        children: " /plugin marketplace list - List all marketplaces"
      }), e(n, {
        children: " "
      }), e(n, {
        dimColor: !0,
        children: "Validation:"
      }), r(n, {
        children: [" ", "/plugin validate <path> - Validate a manifest file or directory"]
      }), r(n, {
        children: [" ", "/plugin tag [path] [--push] [--dry-run] [-f] - Create a release tag for the plugin"]
      }), e(n, {
        children: " "
      }), e(n, {
        dimColor: !0,
        children: "Other:"
      }), e(n, {
        children: " /plugin - Main plugin menu"
      }), e(n, {
        children: " /plugin help - Show this help"
      }), e(n, {
        children: " /plugins - Alias for /plugin"
      })]
    }), _[52] = vt;else vt = _[52];
    return vt;
  }
  if (viewState_7.type === "validate") {
    let vt;
    if (_[53] !== onComplete_12 || _[54] !== viewState_7.path) vt = e(ma, {
      onComplete: onComplete_12,
      path: viewState_7.path
    }), _[53] = onComplete_12, _[54] = viewState_7.path, _[55] = vt;else vt = _[55];
    return vt;
  }
  if (viewState_7.type === "npm-install") {
    let vt;
    if (_[56] !== onInstallComplete_9 || _[57] !== onComplete_12 || _[58] !== viewState_7.spec) vt = e(As, {
      spec: viewState_7.spec,
      onComplete: onComplete_12,
      onInstallComplete: onInstallComplete_9
    }), _[56] = onInstallComplete_9, _[57] = onComplete_12, _[58] = viewState_7.spec, _[59] = vt;else vt = _[59];
    return vt;
  }
  if (viewState_7.type === "eval") {
    let vt;
    if (_[60] !== onComplete_12 || _[61] !== viewState_7.target) vt = e(Vr, {
      onComplete: onComplete_12,
      target: viewState_7.target
    }), _[60] = onComplete_12, _[61] = viewState_7.target, _[62] = vt;else vt = _[62];
    return vt;
  }
  if (viewState_7.type === "tag") {
    let vt;
    if (_[63] !== onComplete_12 || _[64] !== viewState_7.dryRun || _[65] !== viewState_7.force || _[66] !== viewState_7.path || _[67] !== viewState_7.push || _[68] !== viewState_7.unknownFlag) vt = e(da, {
      onComplete: onComplete_12,
      path: viewState_7.path,
      push: viewState_7.push,
      dryRun: viewState_7.dryRun,
      force: viewState_7.force,
      unknownFlag: viewState_7.unknownFlag
    }), _[63] = onComplete_12, _[64] = viewState_7.dryRun, _[65] = viewState_7.force, _[66] = viewState_7.path, _[67] = viewState_7.push, _[68] = viewState_7.unknownFlag, _[69] = vt;else vt = _[69];
    return vt;
  }
  if (viewState_7.type === "marketplace-list") {
    let vt;
    if (_[70] !== onComplete_12) vt = e(fc, {
      onComplete: onComplete_12
    }), _[70] = onComplete_12, _[71] = vt;else vt = _[71];
    return vt;
  }
  if (viewState_7.type === "plugin-list") {
    let vt;
    if (_[72] !== onComplete_12 || _[73] !== viewState_7.filter) vt = e(yc, {
      onComplete: onComplete_12,
      filter: viewState_7.filter
    }), _[72] = onComplete_12, _[73] = viewState_7.filter, _[74] = vt;else vt = _[74];
    return vt;
  }
  if (viewState_7.type === "add-marketplace") {
    let vt;
    if (_[75] !== autoAdd_2 || _[76] !== cliMode_2 || _[77] !== cursorOffset_5 || _[78] !== error_17 || _[79] !== inputValue || _[80] !== Ue || _[81] !== result_3 || _[82] !== setError_6 || _[83] !== setResult_8 || _[84] !== setViewState_11 || _[85] !== viewState_7.claudeAiListing || _[86] !== viewState_7.confirmAdd) vt = e(ja, {
      inputValue: inputValue,
      setInputValue: setInputValue,
      cursorOffset: cursorOffset_5,
      setCursorOffset: setCursorOffset,
      error: error_17,
      setError: setError_6,
      result: result_3,
      setResult: setResult_8,
      setViewState: setViewState_11,
      onAddComplete: Ue,
      cliMode: cliMode_2,
      autoAdd: autoAdd_2,
      claudeAiListing: viewState_7.claudeAiListing,
      confirmAdd: viewState_7.confirmAdd
    }), _[75] = autoAdd_2, _[76] = cliMode_2, _[77] = cursorOffset_5, _[78] = error_17, _[79] = inputValue, _[80] = Ue, _[81] = result_3, _[82] = setError_6, _[83] = setResult_8, _[84] = setViewState_11, _[85] = viewState_7.claudeAiListing, _[86] = viewState_7.confirmAdd, _[87] = vt;else vt = _[87];
    return vt;
  }
  let vt;
  if (_[88] !== selectedTab || _[89] !== cloudSession || _[90] !== showMcpRedirectMessage || _[91] !== showSkillDoctorRedirectMessage || _[92] !== showSkillsRedirectMessage) vt = cloudSession ? e(bc, {}) : showMcpRedirectMessage && selectedTab === "installed" ? e(hc, {}) : showSkillsRedirectMessage && selectedTab === "installed" ? e(kc, {}) : showSkillDoctorRedirectMessage && selectedTab === "stats" ? e(vc, {}) : void 0, _[88] = selectedTab, _[89] = cloudSession, _[90] = showMcpRedirectMessage, _[91] = showSkillDoctorRedirectMessage, _[92] = showSkillsRedirectMessage, _[93] = vt;else vt = _[93];
  let Lt = vt,
    banner;
  if (_[94] !== names_2 || _[95] !== Lt) banner = names_2.length > 0 ? r(Q, {
    children: [e(oa, {
      names: names_2
    }), Lt]
  }) : Lt, _[94] = names_2, _[95] = Lt, _[96] = banner;else banner = _[96];
  let en;
  if (_[97] !== onInstallComplete_9 || _[98] !== getSessionContext_2 || _[99] !== grantedSuggestions_2 || _[100] !== screen_4 || _[101] !== viewState_7.marketplace || _[102] !== viewState_7.searchQuery || _[103] !== viewState_7.targetMarketplace || _[104] !== viewState_7.targetPlugin || _[105] !== viewState_7.type) en = e(rl, {
    id: "discover",
    title: "Discover",
    children: viewState_7.type === "browse-marketplace" ? e(Il, {
      screen: screen_4,
      onInstallComplete: onInstallComplete_9,
      onSearchModeChange: onSearchModeChange_5,
      targetMarketplace: viewState_7.targetMarketplace,
      targetPlugin: viewState_7.targetPlugin
    }) : e(Rl, {
      screen: screen_4,
      onInstallComplete: onInstallComplete_9,
      onSearchModeChange: onSearchModeChange_5,
      getSessionContext: getSessionContext_2,
      grantedSuggestions: grantedSuggestions_2,
      targetPlugin: viewState_7.type === "discover-plugins" ? viewState_7.targetPlugin : void 0,
      initialMarketplace: viewState_7.type === "discover-plugins" ? viewState_7.marketplace : void 0,
      initialSearchQuery: viewState_7.type === "discover-plugins" ? viewState_7.searchQuery : void 0
    })
  }, "discover"), _[97] = onInstallComplete_9, _[98] = getSessionContext_2, _[99] = grantedSuggestions_2, _[100] = screen_4, _[101] = viewState_7.marketplace, _[102] = viewState_7.searchQuery, _[103] = viewState_7.targetMarketplace, _[104] = viewState_7.targetPlugin, _[105] = viewState_7.type, _[106] = en;else en = _[106];
  const targetPlugin_5 = viewState_7.type === "manage-plugins" ? viewState_7.targetPlugin : void 0,
    targetMarketplace_5 = viewState_7.type === "manage-plugins" ? viewState_7.targetMarketplace : void 0,
    action_6 = viewState_7.type === "manage-plugins" ? viewState_7.action : void 0;
  let Rn;
  if (_[107] !== changesApplyOnClose_2 || _[108] !== commands_6 || _[109] !== Ue || _[110] !== setResult_8 || _[111] !== setViewState_11 || _[112] !== targetPlugin_5 || _[113] !== targetMarketplace_5 || _[114] !== action_6) Rn = e(rl, {
    id: "installed",
    title: "Installed",
    children: e(ps, {
      setViewState: setViewState_11,
      setResult: setResult_8,
      onManageComplete: Ue,
      changesApplyOnClose: changesApplyOnClose_2,
      onSearchModeChange: onSearchModeChange_5,
      commands: commands_6,
      targetPlugin: targetPlugin_5,
      targetMarketplace: targetMarketplace_5,
      action: action_6
    })
  }, "installed"), _[107] = changesApplyOnClose_2, _[108] = commands_6, _[109] = Ue, _[110] = setResult_8, _[111] = setViewState_11, _[112] = targetPlugin_5, _[113] = targetMarketplace_5, _[114] = action_6, _[115] = Rn;else Rn = _[115];
  const targetMarketplace_6 = viewState_7.type === "manage-marketplaces" ? viewState_7.targetMarketplace : void 0,
    action_7 = viewState_7.type === "manage-marketplaces" ? viewState_7.action : void 0;
  let lo;
  if (_[116] !== error_17 || _[117] !== exitState_5 || _[118] !== Ue || _[119] !== setViewState_12 || _[120] !== setError_6 || _[121] !== setResult_8 || _[122] !== targetMarketplace_6 || _[123] !== action_7) lo = e(rl, {
    id: "marketplaces",
    title: "Marketplaces",
    children: e(Ol, {
      setViewState: setViewState_12,
      error: error_17,
      setError: setError_6,
      setResult: setResult_8,
      exitState: exitState_5,
      onManageComplete: Ue,
      targetMarketplace: targetMarketplace_6,
      action: action_7
    })
  }, "marketplaces"), _[116] = error_17, _[117] = exitState_5, _[118] = Ue, _[119] = setViewState_12, _[120] = setError_6, _[121] = setResult_8, _[122] = targetMarketplace_6, _[123] = action_7, _[124] = lo;else lo = _[124];
  let children_34;
  if (_[125] !== Ue || _[126] !== setViewState_11) children_34 = e(Sc, {
    setViewState: setViewState_11,
    setActiveTab: setActiveTab_2,
    markPluginsChanged: Ue
  }), _[125] = Ue, _[126] = setViewState_11, _[127] = children_34;else children_34 = _[127];
  let Tn;
  if (_[128] !== title_3 || _[129] !== children_34) Tn = e(rl, {
    id: "errors",
    title: title_3,
    children: children_34
  }, "errors"), _[128] = title_3, _[129] = children_34, _[130] = Tn;else Tn = _[130];
  let jn;
  if (_[131] !== getReport_2 || _[132] !== setViewState_11 || _[133] !== $n) jn = $n ? [e(rl, {
    id: "stats",
    title: "Stats",
    children: e(la, {
      getReport: getReport_2,
      onExit: () => setViewState_11({
        type: "menu"
      })
    })
  }, "stats")] : [], _[131] = getReport_2, _[132] = setViewState_11, _[133] = $n, _[134] = jn;else jn = _[134];
  let children_35;
  if (_[135] !== en || _[136] !== Rn || _[137] !== lo || _[138] !== Tn || _[139] !== jn) children_35 = [en, Rn, lo, Tn, ...jn], _[135] = en, _[136] = Rn, _[137] = lo, _[138] = Tn, _[139] = jn, _[140] = children_35;else children_35 = _[140];
  let bi;
  if (_[141] !== selectedTab || _[142] !== disableNavigation || _[143] !== onTabChange || _[144] !== banner || _[145] !== children_35) bi = e(ds, {
    color: "suggestion",
    children: e(gS, {
      title: "Plugins",
      selectedTab: selectedTab,
      onTabChange: onTabChange,
      color: "suggestion",
      disableNavigation: disableNavigation,
      banner: banner,
      children: children_35
    })
  }), _[141] = selectedTab, _[142] = disableNavigation, _[143] = onTabChange, _[144] = banner, _[145] = children_35, _[146] = bi;else bi = _[146];
  return bi;
}
function Rm(...a) {
  let h = a.filter(item => item !== void 0 && item !== "");
  return h.length > 0 ? h.join(`
`) : void 0;
}
function Tm(a) {
  switch (a.type) {
    case "help":
    case "list":
    case "menu":
    case "usage-error":
      return !0;
    case "marketplace":
      return a.action === void 0 || a.action === "list";
    default:
      return !1;
  }
}
export { Nzt, MZn, att, ubn, Fzt, Hzt, $zt };