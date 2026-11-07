// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { BV } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { fd } from "B:/~BUN/root/chunk-79dw4seg.js";
import { VM, v3t, Fge, loo, Uh, cg } from "B:/~BUN/root/chunk-27h4st9h.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { zp } from "B:/~BUN/root/chunk-keh8a3ck.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function b(d) {
  let a = S(7),
    {
      title: o,
      status: status
    } = d,
    i;
  if (a[0] !== o) i = e(n, {
    bold: !0,
    children: o
  }), a[0] = o, a[1] = i;else i = a[1];
  let p;
  if (a[2] !== status) p = e(Tt, {
    status: status
  }), a[2] = status, a[3] = p;else p = a[3];
  let t;
  if (a[4] !== i || a[5] !== p) t = r(n, {
    children: [i, " ", p]
  }), a[4] = i, a[5] = p, a[6] = t;else t = a[6];
  return t;
}
function yr(br) {
  return br.file;
}
function Rr(g) {
  return !BV(g.scope);
}
function Wr(y) {
  return {
    scope: y.scope,
    servers: y.config.servers,
    displayServers: Uh(y.scope, {
      expandVars: !1
    }).servers
  };
}
function isProjectServerApproved(V) {
  return Fge(V) === "approved";
}
function $r(o) {
  let {
    config: config
  } = o;
  return E(config.errors, "fatal").length > 0;
}
function kr(o) {
  let {
    config: config_2
  } = o;
  return E(config_2.errors, "warning").length > 0;
}
function Tr(o) {
  let {
    scope: scope,
    config: config_3
  } = o;
  return e(Q, {
    scope: scope,
    parsingErrors: E(config_3.errors, "fatal"),
    warnings: E(config_3.errors, "warning")
  }, scope);
}
function Ar(D, U) {
  return r(zp.Group, {
    children: [e(zp.Node, {
      color: "warning",
      children: Nn(D.message)
    }), D.suggestion && e(zp.Node, {
      dimColor: !0,
      children: Nn(D.suggestion)
    })]
  }, `conflict-${U}`);
}
function Q(d) {
  let t = S(56),
    {
      scope: scope_2,
      parsingErrors: parsingErrors,
      warnings: warnings
    } = d,
    i = parsingErrors.length > 0,
    p = warnings.length > 0;
  if (!i && !p) {
    return null;
  }
  let F, f, m, g, dimColor, children_2, T, flexDirection, marginTop, R;
  if (t[0] !== i || t[1] !== p || t[2] !== parsingErrors || t[3] !== scope_2 || t[4] !== warnings) {
    let D = VM(scope_2);
    let U = new Set([...parsingErrors, ...warnings].map(yr).filter(Boolean));
    g = U.size === 1 ? [...U][0] : D;
    m = s;
    flexDirection = "column";
    marginTop = 1;
    let u;
    if (t[15] !== i || t[16] !== p) u = (i || p) && r(n, {
      color: i ? "error" : "warning",
      children: ["[", i ? "Failed to parse" : "Contains warnings", "]", " "]
    }), t[15] = i, t[16] = p, t[17] = u;else u = t[17];
    let children;
    if (t[18] !== scope_2) children = v3t(scope_2), t[18] = scope_2, t[19] = children;else children = t[19];
    let v;
    if (t[20] !== children) v = e(n, {
      children: children
    }), t[20] = children, t[21] = v;else v = t[21];
    if (t[22] !== u || t[23] !== v) R = r(s, {
      children: [u, v]
    }), t[22] = u, t[23] = v, t[24] = R;else R = t[24];
    f = s;
    if (t[25] === w) T = e(n, {
      dimColor: !0,
      children: "Location: "
    }), t[25] = T;else T = t[25];
    F = n;
    dimColor = !0;
    children_2 = Nn(g);
    t[0] = i, t[1] = p, t[2] = parsingErrors, t[3] = scope_2, t[4] = warnings, t[5] = F, t[6] = f, t[7] = m, t[8] = g, t[9] = dimColor, t[10] = children_2, t[11] = T, t[12] = flexDirection, t[13] = marginTop, t[14] = R;
  } else F = t[5], f = t[6], m = t[7], g = t[8], dimColor = t[9], children_2 = t[10], T = t[11], flexDirection = t[12], marginTop = t[13], R = t[14];
  let u;
  if (t[26] !== F || t[27] !== dimColor || t[28] !== children_2) u = e(F, {
    dimColor: dimColor,
    children: children_2
  }), t[26] = F, t[27] = dimColor, t[28] = children_2, t[29] = u;else u = t[29];
  let h;
  if (t[30] !== f || t[31] !== T || t[32] !== u) h = r(f, {
    children: [T, u]
  }), t[30] = f, t[31] = T, t[32] = u, t[33] = h;else h = t[33];
  let v;
  if (t[34] !== g || t[35] !== parsingErrors || t[36] !== scope_2) {
    let W;
    if (t[38] !== g || t[39] !== scope_2) W = (N, Vr) => {
      let tr = N.mcpErrorMetadata?.serverName;
      let ar = N.file !== g ? N.file : void 0;
      return r(zp.Group, {
        children: [e(zp.Node, {
          children: r(n, {
            children: [e(n, {
              color: "error",
              children: "[Error]"
            }), r(n, {
              dimColor: !0,
              children: [" ", ar && `(${Nn(ar)}) `, tr && `[${Nn(tr)}] `, N.path && N.path !== "" ? `${Nn(N.path)}: ` : "", Nn(N.message)]
            })]
          })
        }), scope_2 === "enterprise" && N.suggestion && e(zp.Node, {
          dimColor: !0,
          children: Nn(N.suggestion)
        })]
      }, `error-${Vr}`);
    }, t[38] = g, t[39] = scope_2, t[40] = W;else W = t[40];
    v = parsingErrors.map(W);
    t[34] = g, t[35] = parsingErrors, t[36] = scope_2, t[37] = v;
  } else v = t[37];
  let W;
  if (t[41] !== g || t[42] !== warnings) {
    let x;
    if (t[44] !== g) x = (k, Lr) => {
      let cr = k.mcpErrorMetadata?.serverName;
      let pr = k.file !== g ? k.file : void 0;
      return e(zp.Node, {
        children: r(n, {
          children: [e(n, {
            color: "warning",
            children: "[Warning]"
          }), r(n, {
            dimColor: !0,
            children: [" ", pr && `(${Nn(pr)}) `, cr && `[${Nn(cr)}] `, k.path && k.path !== "" ? `${Nn(k.path)}: ` : "", Nn(k.message)]
          })]
        })
      }, `warning-${Lr}`);
    }, t[44] = g, t[45] = x;else x = t[45];
    W = warnings.map(x);
    t[41] = g, t[42] = warnings, t[43] = W;
  } else W = t[43];
  let x;
  if (t[46] !== W || t[47] !== v) x = e(s, {
    marginLeft: 1,
    children: r(zp, {
      variant: "tree",
      children: [v, W]
    })
  }), t[46] = W, t[47] = v, t[48] = x;else x = t[48];
  let gr;
  if (t[49] !== m || t[50] !== x || t[51] !== flexDirection || t[52] !== marginTop || t[53] !== R || t[54] !== h) gr = r(m, {
    flexDirection: flexDirection,
    marginTop: marginTop,
    children: [R, h, x]
  }), t[49] = m, t[50] = x, t[51] = flexDirection, t[52] = marginTop, t[53] = R, t[54] = h, t[55] = gr;else gr = t[55];
  return gr;
}
function Dzt() {
  let d = S(3),
    o;
  if (d[0] === w) {
    let c = [{
      scope: "user",
      config: Uh("user")
    }, {
      scope: "project",
      config: Uh("project")
    }, {
      scope: "local",
      config: Uh("local")
    }, {
      scope: "managed",
      config: Uh("managed")
    }, {
      scope: "enterprise",
      config: Uh("enterprise")
    }];
    let conflicts = loo(c.filter(Rr).map(Wr));
    o = {
      scopes: sr(c, {
        enterpriseActive: cg(),
        mcpLocked: fd("mcp"),
        isProjectServerApproved: isProjectServerApproved
      }),
      conflicts: conflicts
    };
    d[0] = o;
  } else o = d[0];
  let {
      scopes: scopes,
      conflicts: conflicts_2
    } = o,
    t = scopes.some($r),
    F = conflicts_2.length > 0 || scopes.some(kr);
  if (!t && !F) {
    return null;
  }
  let f;
  if (d[1] === w) f = e(b, {
    title: "MCP config diagnostics",
    status: t ? "error" : "warning"
  }), d[1] = f;else f = d[1];
  let m;
  if (d[2] === w) m = r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 1,
    children: [f, e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: ["For help configuring MCP servers, see:", " ", e(sn, {
          url: "https://code.claude.com/docs/en/mcp",
          children: "https://code.claude.com/docs/en/mcp"
        })]
      })
    }), scopes.map(Tr), conflicts_2.length > 0 && r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [e(n, {
        color: "warning",
        children: "[Conflicting scopes]"
      }), e(zp, {
        variant: "tree",
        children: conflicts_2.map(Ar)
      })]
    })]
  }), d[2] = m;else m = d[2];
  return m;
}
function E(d, o) {
  return d.filter(item => item.mcpErrorMetadata?.severity === o);
}
function sr(d, o) {
  let c = (a, i) => {
    if (!(i in a.config.servers)) return !1;
    if (a.scope === "project") return o.isProjectServerApproved(i);
    return !0;
  };
  return d.map((item, index) => {
    let p = !BV(item.scope) && (o.enterpriseActive || o.mcpLocked),
      t = d.slice(index + 1),
      F = f => t.some(item => c(item, f));
    return {
      ...item,
      config: {
        ...item.config,
        errors: item.config.errors.filter(item => {
          if (item.mcpErrorMetadata?.severity !== "warning") return !0;
          if (p) return !1;
          let serverName = item.mcpErrorMetadata.serverName;
          return !serverName || !F(serverName);
        })
      }
    };
  });
}
export { Dzt };