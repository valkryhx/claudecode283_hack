// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tx, bPt, Ose, TSr, w6, Ef, ty } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { _n } from "B:/~BUN/root/chunk-6za2ez23.js";
import { xd } from "B:/~BUN/root/chunk-0n2201tc.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, zt } from "B:/~BUN/root/chunk-damrp3r8.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { xu } from "B:/~BUN/root/chunk-wjfjba9d.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function L(l) {
  let a = w(10),
    {
      title: o,
      status: status,
      detail: detail
    } = l,
    p;
  if (a[0] !== o) p = e(n, {
    bold: !0,
    children: o
  }), a[0] = o, a[1] = p;else p = a[1];
  let i;
  if (a[2] !== status) i = e(ft, {
    status: status
  }), a[2] = status, a[3] = i;else i = a[3];
  let f;
  if (a[4] !== detail) f = detail ? r(n, {
    dimColor: !0,
    children: [" \xB7 ", detail]
  }) : null, a[4] = detail, a[5] = f;else f = a[5];
  let g;
  if (a[6] !== p || a[7] !== i || a[8] !== f) g = r(n, {
    children: [p, " ", i, f]
  }), a[6] = p, a[7] = i, a[8] = f, a[9] = g;else g = a[9];
  return g;
}
function Rr(br) {
  return br.file;
}
function Wr(m) {
  return !w6(m.scope);
}
function xr(F) {
  return {
    scope: F.scope,
    servers: F.config.servers,
    displayServers: Ef(F.scope, {
      expandVars: !1
    }).servers
  };
}
function isProjectServerApproved(V) {
  return Ose(V) === "approved";
}
function kr(o) {
  let {
    config: config
  } = o;
  return P(config.errors, "fatal").length > 0;
}
function Tr(o) {
  let {
    config: config_2
  } = o;
  return P(config_2.errors, "warning").length > 0;
}
function Ar(o) {
  let {
    scope: scope,
    config: config_3
  } = o;
  return e(O, {
    scope: scope,
    parsingErrors: P(config_3.errors, "fatal"),
    warnings: P(config_3.errors, "warning")
  }, scope);
}
function Vr(G, Q) {
  return r(xu.Group, {
    children: [e(xu.Node, {
      color: "warning",
      children: _n(G.message)
    }), G.suggestion && e(xu.Node, {
      dimColor: !0,
      children: _n(G.suggestion)
    })]
  }, `conflict-${Q}`);
}
function O(l) {
  let i = w(56),
    {
      scope: scope_2,
      parsingErrors: parsingErrors,
      warnings: warnings
    } = l,
    a = parsingErrors.length > 0,
    p = warnings.length > 0;
  if (!a && !p) {
    return null;
  }
  let f, g, d, m, dimColor, children_2, T, flexDirection, marginTop, R;
  if (i[0] !== a || i[1] !== p || i[2] !== parsingErrors || i[3] !== scope_2 || i[4] !== warnings) {
    let G = tx(scope_2);
    let Q = new Set([...parsingErrors, ...warnings].map(Rr).filter(Boolean));
    m = Q.size === 1 ? [...Q][0] : G;
    d = s;
    flexDirection = "column";
    marginTop = 1;
    let h;
    if (i[15] !== a || i[16] !== p) h = (a || p) && r(n, {
      color: a ? "error" : "warning",
      children: ["[", a ? "Failed to parse" : "Contains warnings", "]", " "]
    }), i[15] = a, i[16] = p, i[17] = h;else h = i[17];
    let children;
    if (i[18] !== scope_2) children = bPt(scope_2), i[18] = scope_2, i[19] = children;else children = i[19];
    let N;
    if (i[20] !== children) N = e(n, {
      children: children
    }), i[20] = children, i[21] = N;else N = i[21];
    if (i[22] !== h || i[23] !== N) R = r(s, {
      children: [h, N]
    }), i[22] = h, i[23] = N, i[24] = R;else R = i[24];
    g = s;
    if (i[25] === S) T = e(n, {
      dimColor: !0,
      children: "Location: "
    }), i[25] = T;else T = i[25];
    f = n;
    dimColor = !0;
    children_2 = _n(m);
    i[0] = a, i[1] = p, i[2] = parsingErrors, i[3] = scope_2, i[4] = warnings, i[5] = f, i[6] = g, i[7] = d, i[8] = m, i[9] = dimColor, i[10] = children_2, i[11] = T, i[12] = flexDirection, i[13] = marginTop, i[14] = R;
  } else f = i[5], g = i[6], d = i[7], m = i[8], dimColor = i[9], children_2 = i[10], T = i[11], flexDirection = i[12], marginTop = i[13], R = i[14];
  let h;
  if (i[26] !== f || i[27] !== dimColor || i[28] !== children_2) h = e(f, {
    dimColor: dimColor,
    children: children_2
  }), i[26] = f, i[27] = dimColor, i[28] = children_2, i[29] = h;else h = i[29];
  let v;
  if (i[30] !== g || i[31] !== T || i[32] !== h) v = r(g, {
    children: [T, h]
  }), i[30] = g, i[31] = T, i[32] = h, i[33] = v;else v = i[33];
  let N;
  if (i[34] !== m || i[35] !== parsingErrors || i[36] !== scope_2) {
    let W;
    if (i[38] !== m || i[39] !== scope_2) W = (E, jr) => {
      let ar = E.mcpErrorMetadata?.serverName;
      let cr = E.file !== m ? E.file : void 0;
      return r(xu.Group, {
        children: [e(xu.Node, {
          children: r(n, {
            children: [e(n, {
              color: "error",
              children: "[Error]"
            }), r(n, {
              dimColor: !0,
              children: [" ", cr && `(${_n(cr)}) `, ar && `[${_n(ar)}] `, E.path && E.path !== "" ? `${_n(E.path)}: ` : "", _n(E.message)]
            })]
          })
        }), scope_2 === "enterprise" && E.suggestion && e(xu.Node, {
          dimColor: !0,
          children: _n(E.suggestion)
        })]
      }, `error-${jr}`);
    }, i[38] = m, i[39] = scope_2, i[40] = W;else W = i[40];
    N = parsingErrors.map(W);
    i[34] = m, i[35] = parsingErrors, i[36] = scope_2, i[37] = N;
  } else N = i[37];
  let W;
  if (i[41] !== m || i[42] !== warnings) {
    let x;
    if (i[44] !== m) x = (k, Lr) => {
      let pr = k.mcpErrorMetadata?.serverName;
      let gr = k.file !== m ? k.file : void 0;
      return e(xu.Node, {
        children: r(n, {
          children: [e(n, {
            color: "warning",
            children: "[Warning]"
          }), r(n, {
            dimColor: !0,
            children: [" ", gr && `(${_n(gr)}) `, pr && `[${_n(pr)}] `, k.path && k.path !== "" ? `${_n(k.path)}: ` : "", _n(k.message)]
          })]
        })
      }, `warning-${Lr}`);
    }, i[44] = m, i[45] = x;else x = i[45];
    W = warnings.map(x);
    i[41] = m, i[42] = warnings, i[43] = W;
  } else W = i[43];
  let x;
  if (i[46] !== W || i[47] !== N) x = e(s, {
    marginLeft: 1,
    children: r(xu, {
      variant: "tree",
      children: [N, W]
    })
  }), i[46] = W, i[47] = N, i[48] = x;else x = i[48];
  let mr;
  if (i[49] !== d || i[50] !== x || i[51] !== flexDirection || i[52] !== marginTop || i[53] !== R || i[54] !== v) mr = r(d, {
    flexDirection: flexDirection,
    marginTop: marginTop,
    children: [R, v, x]
  }), i[49] = d, i[50] = x, i[51] = flexDirection, i[52] = marginTop, i[53] = R, i[54] = v, i[55] = mr;else mr = i[55];
  return mr;
}
function Swt() {
  let l = w(3),
    o;
  if (l[0] === S) {
    let c = [{
      scope: "user",
      config: Ef("user")
    }, {
      scope: "project",
      config: Ef("project")
    }, {
      scope: "local",
      config: Ef("local")
    }, {
      scope: "managed",
      config: Ef("managed")
    }, {
      scope: "enterprise",
      config: Ef("enterprise")
    }];
    let conflicts = TSr(c.filter(Wr).map(xr));
    o = {
      scopes: tr(c, {
        enterpriseActive: ty(),
        mcpLocked: xd("mcp"),
        isProjectServerApproved: isProjectServerApproved
      }),
      conflicts: conflicts
    };
    l[0] = o;
  } else o = l[0];
  let {
      scopes: scopes,
      conflicts: conflicts_2
    } = o,
    i = scopes.some(kr),
    f = conflicts_2.length > 0 || scopes.some(Tr);
  if (!i && !f) {
    return null;
  }
  let g;
  if (l[1] === S) g = e(L, {
    title: "MCP config diagnostics",
    status: i ? "error" : "warning"
  }), l[1] = g;else g = l[1];
  let d;
  if (l[2] === S) d = r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 1,
    children: [g, e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: ["For help configuring MCP servers, see:", " ", e(zt, {
          url: "https://code.claude.com/docs/en/mcp",
          children: "https://code.claude.com/docs/en/mcp"
        })]
      })
    }), scopes.map(Ar), conflicts_2.length > 0 && r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [e(n, {
        color: "warning",
        children: "[Conflicting scopes]"
      }), e(xu, {
        variant: "tree",
        children: conflicts_2.map(Vr)
      })]
    })]
  }), l[2] = d;else d = l[2];
  return d;
}
function P(l, o) {
  return l.filter(item => item.mcpErrorMetadata?.severity === o);
}
function tr(l, o) {
  let c = (t, a) => {
    if (!(a in t.config.servers)) return !1;
    if (t.scope === "project") return o.isProjectServerApproved(a);
    return !0;
  };
  return l.map((item, index) => {
    let p = !w6(item.scope) && (o.enterpriseActive || o.mcpLocked),
      i = l.slice(index + 1),
      f = g => i.some(item => c(item, g));
    return {
      ...item,
      config: {
        ...item.config,
        errors: item.config.errors.filter(item => {
          if (item.mcpErrorMetadata?.severity !== "warning") return !0;
          if (p) return !1;
          let serverName = item.mcpErrorMetadata.serverName;
          return !serverName || !f(serverName);
        })
      }
    };
  });
}
export { Swt };