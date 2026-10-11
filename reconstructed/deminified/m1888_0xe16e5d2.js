// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { bE, fnt, ufe, PFn, Sme, wp, m_ } from "B:/~BUN/root/chunk-3jyp964r.js";
import { bd } from "B:/~BUN/root/chunk-mrt797ke.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n, bt } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { qc } from "B:/~BUN/root/chunk-dx2z5mzz.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function L(l) {
  let a = w(10),
    {
      title: o,
      status: status,
      detail: detail
    } = l,
    g;
  if (a[0] !== o) g = e(n, {
    bold: !0,
    children: o
  }), a[0] = o, a[1] = g;else g = a[1];
  let i;
  if (a[2] !== status) i = e(et, {
    status: status
  }), a[2] = status, a[3] = i;else i = a[3];
  let u;
  if (a[4] !== detail) u = detail ? r(n, {
    dimColor: !0,
    children: [" \xB7 ", detail]
  }) : null, a[4] = detail, a[5] = u;else u = a[5];
  let m;
  if (a[6] !== g || a[7] !== i || a[8] !== u) m = r(n, {
    children: [g, " ", i, u]
  }), a[6] = g, a[7] = i, a[8] = u, a[9] = m;else m = a[9];
  return m;
}
function Pr(jr) {
  return jr.file;
}
function Sr(F) {
  return !Sme(F.scope);
}
function yr(k) {
  return {
    scope: k.scope,
    servers: k.config.servers,
    displayServers: wp(k.scope, {
      expandVars: !1
    }).servers
  };
}
function isProjectServerApproved(p) {
  return ufe(p) === "approved";
}
function Wr(o) {
  let {
    config: config
  } = o;
  return E(config.errors, "fatal").length > 0;
}
function xr(o) {
  let {
    config: config_2
  } = o;
  return E(config_2.errors, "warning").length > 0;
}
function Fr(o) {
  let {
    scope: scope,
    config: config_3
  } = o;
  return e(O, {
    scope: scope,
    parsingErrors: E(config_3.errors, "fatal"),
    warnings: E(config_3.errors, "warning")
  }, scope);
}
function $r(V, j) {
  return r(qc.Group, {
    children: [e(qc.Node, {
      color: "warning",
      children: Tn(V.message)
    }), V.suggestion && e(qc.Node, {
      dimColor: !0,
      children: Tn(V.suggestion)
    })]
  }, `conflict-${j}`);
}
function O(l) {
  let i = w(40),
    {
      scope: scope_2,
      parsingErrors: parsingErrors,
      warnings: warnings
    } = l,
    a = parsingErrors.length > 0,
    g = warnings.length > 0;
  if (!a && !g) {
    return null;
  }
  let u;
  if (i[0] !== scope_2) u = bE(scope_2), i[0] = scope_2, i[1] = u;else u = i[1];
  let m = u,
    h;
  if (i[2] !== parsingErrors || i[3] !== warnings) h = new Set([...parsingErrors, ...warnings].map(Pr).filter(Boolean)), i[2] = parsingErrors, i[3] = warnings, i[4] = h;else h = i[4];
  let F = h,
    k;
  if (i[5] !== m || i[6] !== F) k = F.size === 1 ? [...F][0] : m, i[5] = m, i[6] = F, i[7] = k;else k = i[7];
  let children_2 = k,
    T;
  if (i[8] !== a || i[9] !== g) T = (a || g) && r(n, {
    color: a ? "error" : "warning",
    children: ["[", a ? "Failed to parse" : "Contains warnings", "]", " "]
  }), i[8] = a, i[9] = g, i[10] = T;else T = i[10];
  let children;
  if (i[11] !== scope_2) children = fnt(scope_2), i[11] = scope_2, i[12] = children;else children = i[12];
  let W;
  if (i[13] !== children) W = e(n, {
    children: children
  }), i[13] = children, i[14] = W;else W = i[14];
  let x;
  if (i[15] !== T || i[16] !== W) x = r(s, {
    children: [T, W]
  }), i[15] = T, i[16] = W, i[17] = x;else x = i[17];
  let V;
  if (i[18] === S) V = e(n, {
    dimColor: !0,
    children: "Location: "
  }), i[18] = V;else V = i[18];
  let j;
  if (i[19] !== children_2) j = r(s, {
    children: [V, e(n, {
      dimColor: !0,
      children: children_2
    })]
  }), i[19] = children_2, i[20] = j;else j = i[20];
  let G;
  if (i[21] !== children_2 || i[22] !== parsingErrors || i[23] !== scope_2) {
    let y;
    if (i[25] !== children_2 || i[26] !== scope_2) y = (d, kr) => {
      let sr = d.mcpErrorMetadata?.serverName;
      let Tr = d.file && d.file !== children_2;
      return r(qc.Group, {
        children: [e(qc.Node, {
          children: r(n, {
            children: [e(n, {
              color: "error",
              children: "[Error]"
            }), r(n, {
              dimColor: !0,
              children: [" ", Tr && `(${d.file}) `, sr && `[${Tn(sr)}] `, d.path && d.path !== "" ? `${Tn(d.path)}: ` : "", Tn(d.message)]
            })]
          })
        }), scope_2 === "enterprise" && d.suggestion && e(qc.Node, {
          dimColor: !0,
          children: Tn(d.suggestion)
        })]
      }, `error-${kr}`);
    }, i[25] = children_2, i[26] = scope_2, i[27] = y;else y = i[27];
    G = parsingErrors.map(y);
    i[21] = children_2, i[22] = parsingErrors, i[23] = scope_2, i[24] = G;
  } else G = i[24];
  let y;
  if (i[28] !== children_2 || i[29] !== warnings) {
    let R;
    if (i[31] !== children_2) R = (P, Ar) => {
      let nr = P.mcpErrorMetadata?.serverName;
      let Vr = P.file && P.file !== children_2;
      return e(qc.Node, {
        children: r(n, {
          children: [e(n, {
            color: "warning",
            children: "[Warning]"
          }), r(n, {
            dimColor: !0,
            children: [" ", Vr && `(${P.file}) `, nr && `[${Tn(nr)}] `, P.path && P.path !== "" ? `${Tn(P.path)}: ` : "", Tn(P.message)]
          })]
        })
      }, `warning-${Ar}`);
    }, i[31] = children_2, i[32] = R;else R = i[32];
    y = warnings.map(R);
    i[28] = children_2, i[29] = warnings, i[30] = y;
  } else y = i[30];
  let R;
  if (i[33] !== G || i[34] !== y) R = e(s, {
    marginLeft: 1,
    children: r(qc, {
      variant: "tree",
      children: [G, y]
    })
  }), i[33] = G, i[34] = y, i[35] = R;else R = i[35];
  let ir;
  if (i[36] !== R || i[37] !== x || i[38] !== j) ir = r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [x, j, R]
  }), i[36] = R, i[37] = x, i[38] = j, i[39] = ir;else ir = i[39];
  return ir;
}
function zXe() {
  let l = w(3),
    o;
  if (l[0] === S) {
    let c = [{
      scope: "user",
      config: wp("user")
    }, {
      scope: "project",
      config: wp("project")
    }, {
      scope: "local",
      config: wp("local")
    }, {
      scope: "managed",
      config: wp("managed")
    }, {
      scope: "enterprise",
      config: wp("enterprise")
    }];
    let conflicts = PFn(c.filter(Sr).map(yr));
    o = {
      scopes: or(c, {
        enterpriseActive: m_(),
        mcpLocked: bd("mcp"),
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
    i = scopes.some(Wr),
    u = conflicts_2.length > 0 || scopes.some(xr);
  if (!i && !u) {
    return null;
  }
  let m;
  if (l[1] === S) m = e(L, {
    title: "MCP config diagnostics",
    status: i ? "error" : "warning"
  }), l[1] = m;else m = l[1];
  let h;
  if (l[2] === S) h = r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 1,
    children: [m, e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: ["For help configuring MCP servers, see:", " ", e(bt, {
          url: "https://code.claude.com/docs/en/mcp",
          children: "https://code.claude.com/docs/en/mcp"
        })]
      })
    }), scopes.map(Fr), conflicts_2.length > 0 && r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [e(n, {
        color: "warning",
        children: "[Conflicting scopes]"
      }), e(qc, {
        variant: "tree",
        children: conflicts_2.map($r)
      })]
    })]
  }), l[2] = h;else h = l[2];
  return h;
}
function E(l, o) {
  return l.filter(item => item.mcpErrorMetadata?.severity === o);
}
function or(l, o) {
  let c = (t, a) => {
    if (!(a in t.config.servers)) return !1;
    if (t.scope === "project") return o.isProjectServerApproved(a);
    return !0;
  };
  return l.map((item, index) => {
    let g = !Sme(item.scope) && (o.enterpriseActive || o.mcpLocked),
      i = l.slice(index + 1),
      u = m => i.some(item => c(item, m));
    return {
      ...item,
      config: {
        ...item.config,
        errors: item.config.errors.filter(item => {
          if (item.mcpErrorMetadata?.severity !== "warning") return !0;
          if (g) return !1;
          let serverName = item.mcpErrorMetadata.serverName;
          return !serverName || !u(serverName);
        })
      }
    };
  });
}
export { zXe };