// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  tx,
  bPt,
  Ose,
  TSr,
  w6,
  Ef,
  ty
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  _n
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  xd
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  s,
  n,
  zt
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  ft
} from "B:/~BUN/root/chunk-jh7dpafw.js";
import {
  xu
} from "B:/~BUN/root/chunk-wjfjba9d.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Z,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function L(l) {
  let a = w(10),
    {
      title: o,
      status: c,
      detail: t
    } = l,
    p;
  if (a[0] !== o) p = e(n, {
    bold: !0,
    children: o
  }), a[0] = o, a[1] = p;
  else p = a[1];
  let i;
  if (a[2] !== c) i = e(ft, {
    status: c
  }), a[2] = c, a[3] = i;
  else i = a[3];
  let f;
  if (a[4] !== t) f = t ? r(n, {
    dimColor: !0,
    children: [" \xB7 ", t]
  }) : null, a[4] = t, a[5] = f;
  else f = a[5];
  let g;
  if (a[6] !== p || a[7] !== i || a[8] !== f) g = r(n, {
    children: [p, " ", i, f]
  }), a[6] = p, a[7] = i, a[8] = f, a[9] = g;
  else g = a[9];
  return g
}

function Rr(br) {
  return br.file
}

function Wr(m) {
  return !w6(m.scope)
}

function xr(F) {
  return {
    scope: F.scope,
    servers: F.config.servers,
    displayServers: Ef(F.scope, {
      expandVars: !1
    }).servers
  }
}

function $r(V) {
  return Ose(V) === "approved"
}

function kr(o) {
  let {
    config: T
  } = o;
  return P(T.errors, "fatal").length > 0
}

function Tr(o) {
  let {
    config: j
  } = o;
  return P(j.errors, "warning").length > 0
}

function Ar(o) {
  let {
    scope: A,
    config: R
  } = o;
  return e(O, {
    scope: A,
    parsingErrors: P(R.errors, "fatal"),
    warnings: P(R.errors, "warning")
  }, A)
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
  }, `conflict-${Q}`)
}

function O(l) {
  let i = w(56),
    {
      scope: o,
      parsingErrors: c,
      warnings: t
    } = l,
    a = c.length > 0,
    p = t.length > 0;
  if (!a && !p) {
    return null
  }
  let f, g, d, m, F, V, T, j, A, R;
  if (i[0] !== a || i[1] !== p || i[2] !== c || i[3] !== o || i[4] !== t) {
    let G = tx(o);
    let Q = new Set([...c, ...t].map(Rr).filter(Boolean));
    m = Q.size === 1 ? [...Q][0] : G;
    d = s;
    j = "column";
    A = 1;
    let h;
    if (i[15] !== a || i[16] !== p) h = (a || p) && r(n, {
      color: a ? "error" : "warning",
      children: ["[", a ? "Failed to parse" : "Contains warnings", "]", " "]
    }), i[15] = a, i[16] = p, i[17] = h;
    else h = i[17];
    let v;
    if (i[18] !== o) v = bPt(o), i[18] = o, i[19] = v;
    else v = i[19];
    let N;
    if (i[20] !== v) N = e(n, {
      children: v
    }), i[20] = v, i[21] = N;
    else N = i[21];
    if (i[22] !== h || i[23] !== N) R = r(s, {
      children: [h, N]
    }), i[22] = h, i[23] = N, i[24] = R;
    else R = i[24];
    g = s;
    if (i[25] === S) T = e(n, {
      dimColor: !0,
      children: "Location: "
    }), i[25] = T;
    else T = i[25];
    f = n;
    F = !0;
    V = _n(m);
    i[0] = a, i[1] = p, i[2] = c, i[3] = o, i[4] = t, i[5] = f, i[6] = g, i[7] = d, i[8] = m, i[9] = F, i[10] = V, i[11] = T, i[12] = j, i[13] = A, i[14] = R
  } else f = i[5], g = i[6], d = i[7], m = i[8], F = i[9], V = i[10], T = i[11], j = i[12], A = i[13], R = i[14];
  let h;
  if (i[26] !== f || i[27] !== F || i[28] !== V) h = e(f, {
    dimColor: F,
    children: V
  }), i[26] = f, i[27] = F, i[28] = V, i[29] = h;
  else h = i[29];
  let v;
  if (i[30] !== g || i[31] !== T || i[32] !== h) v = r(g, {
    children: [T, h]
  }), i[30] = g, i[31] = T, i[32] = h, i[33] = v;
  else v = i[33];
  let N;
  if (i[34] !== m || i[35] !== c || i[36] !== o) {
    let W;
    if (i[38] !== m || i[39] !== o) W = (E, jr) => {
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
        }), o === "enterprise" && E.suggestion && e(xu.Node, {
          dimColor: !0,
          children: _n(E.suggestion)
        })]
      }, `error-${jr}`)
    }, i[38] = m, i[39] = o, i[40] = W;
    else W = i[40];
    N = c.map(W);
    i[34] = m, i[35] = c, i[36] = o, i[37] = N
  } else N = i[37];
  let W;
  if (i[41] !== m || i[42] !== t) {
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
      }, `warning-${Lr}`)
    }, i[44] = m, i[45] = x;
    else x = i[45];
    W = t.map(x);
    i[41] = m, i[42] = t, i[43] = W
  } else W = i[43];
  let x;
  if (i[46] !== W || i[47] !== N) x = e(s, {
    marginLeft: 1,
    children: r(xu, {
      variant: "tree",
      children: [N, W]
    })
  }), i[46] = W, i[47] = N, i[48] = x;
  else x = i[48];
  let mr;
  if (i[49] !== d || i[50] !== x || i[51] !== j || i[52] !== A || i[53] !== R || i[54] !== v) mr = r(d, {
    flexDirection: j,
    marginTop: A,
    children: [R, v, x]
  }), i[49] = d, i[50] = x, i[51] = j, i[52] = A, i[53] = R, i[54] = v, i[55] = mr;
  else mr = i[55];
  return mr
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
    let t = TSr(c.filter(Wr).map(xr));
    o = {
      scopes: tr(c, {
        enterpriseActive: ty(),
        mcpLocked: xd("mcp"),
        isProjectServerApproved: $r
      }),
      conflicts: t
    };
    l[0] = o
  } else o = l[0];
  let {
    scopes: a,
    conflicts: p
  } = o, i = a.some(kr), f = p.length > 0 || a.some(Tr);
  if (!i && !f) {
    return null
  }
  let g;
  if (l[1] === S) g = e(L, {
    title: "MCP config diagnostics",
    status: i ? "error" : "warning"
  }), l[1] = g;
  else g = l[1];
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
    }), a.map(Ar), p.length > 0 && r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [e(n, {
        color: "warning",
        children: "[Conflicting scopes]"
      }), e(xu, {
        variant: "tree",
        children: p.map(Vr)
      })]
    })]
  }), l[2] = d;
  else d = l[2];
  return d
}

function P(l, o) {
  return l.filter((c) => c.mcpErrorMetadata?.severity === o)
}

function tr(l, o) {
  let c = (t, a) => {
    if (!(a in t.config.servers)) return !1;
    if (t.scope === "project") return o.isProjectServerApproved(a);
    return !0
  };
  return l.map((t, a) => {
    let p = !w6(t.scope) && (o.enterpriseActive || o.mcpLocked),
      i = l.slice(a + 1),
      f = (g) => i.some((d) => c(d, g));
    return {
      ...t,
      config: {
        ...t.config,
        errors: t.config.errors.filter((g) => {
          if (g.mcpErrorMetadata?.severity !== "warning") return !0;
          if (p) return !1;
          let d = g.mcpErrorMetadata.serverName;
          return !d || !f(d)
        })
      }
    }
  })
}
export {
  Swt
};
